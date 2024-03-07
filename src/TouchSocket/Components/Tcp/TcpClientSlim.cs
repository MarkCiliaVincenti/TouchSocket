//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://touchsocket.net/
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;

using TouchSocket.Core;
using TouchSocket.Resources;

namespace TouchSocket.Sockets
{
    /// <summary>
    /// 轻量级Tcp客户端
    /// </summary>
    [System.Diagnostics.DebuggerDisplay("{IP}:{Port}")]
    public class TcpClientSlim : DisposableObject, IReceiverObject, IDisposable, ILoggerObject, ISender, IDefaultSender, IRequsetInfoSender, IOnlineClient, IAdapterObject, ICloseObject, IClientSender, IConnectObject
    {
        #region 变量

        private volatile bool m_online;
        private readonly SemaphoreSlim m_semaphoreForConnect = new SemaphoreSlim(1, 1);
        private readonly InternalTcpCore m_tcpCore = new InternalTcpCore();

        #endregion 变量

        #region 事件

        /// <summary>
        /// 接收到数据
        /// </summary>
        public ReceivedEventHandler<TcpClientSlim> Received { get; set; }

        /// <inheritdoc/>
        public ConnectedEventHandler<TcpClientSlim> Connected { get; set; }

        /// <inheritdoc/>
        public ConnectingEventHandler<TcpClientSlim> Connecting { get; set; }

        /// <inheritdoc/>
        public DisconnectEventHandler<TcpClientSlim> Disconnected { get; set; }

        /// <inheritdoc/>
        public DisconnectEventHandler<TcpClientSlim> Disconnecting { get; set; }

        private Task PrivateOnConnected(object o)
        {
            return this.OnConnected((ConnectedEventArgs)o);
        }

        /// <summary>
        /// 已经建立Tcp连接
        /// </summary>
        /// <param name="e"></param>
        protected virtual async Task OnConnected(ConnectedEventArgs e)
        {
            try
            {
                if (this.Connected != null)
                {
                    await this.Connected.Invoke(this, e);
                    if (e.Handled)
                    {
                        return;
                    }
                }
            }
            catch (Exception ex)
            {
                this.Logger.Log(LogLevel.Error, this, $"在事件{nameof(this.Connected)}中发生错误。", ex);
            }
        }

        private Task PrivateOnConnecting(ConnectingEventArgs e)
        {
            if (this.CanSetDataHandlingAdapter)
            {
                this.SetDataHandlingAdapter(this.TcpDataHandlingAdapter.Invoke());
            }

            return this.OnConnecting(e);
        }

        /// <summary>
        /// 准备连接的时候，此时已初始化Socket，但是并未建立Tcp连接
        /// </summary>
        /// <param name="e"></param>
        protected virtual async Task OnConnecting(ConnectingEventArgs e)
        {
            try
            {
                if (this.Connecting != null)
                {
                    await this.Connecting.Invoke(this, e);
                    if (e.Handled)
                    {
                        return;
                    }
                }
            }
            catch (Exception ex)
            {
                this.Logger.Log(LogLevel.Error, this, $"在事件{nameof(this.OnConnecting)}中发生错误。", ex);
            }
        }

        private Task PrivateOnDisconnected(object obj)
        {
            this.m_receiver?.TryInputReceive(default, default);
            return this.OnDisconnected((DisconnectEventArgs)obj);
        }

        /// <summary>
        /// 断开连接。在客户端未设置连接状态时，不会触发
        /// </summary>
        /// <param name="e"></param>
        protected virtual async Task OnDisconnected(DisconnectEventArgs e)
        {
            try
            {
                if (this.Disconnected != null)
                {
                    await this.Disconnected.Invoke(this, e).ConfigureAwait(false);
                    if (e.Handled)
                    {
                        return;
                    }
                }
            }
            catch (Exception ex)
            {
                this.Logger.Log(LogLevel.Error, this, $"在事件{nameof(this.Disconnected)}中发生错误。", ex);
            }
        }

        private Task PrivateOnDisconnecting(object obj)
        {
            return this.OnDisconnecting((DisconnectEventArgs)obj);
        }

        /// <summary>
        /// 即将断开连接(仅主动断开时有效)。
        /// </summary>
        /// <param name="e"></param>
        protected virtual async Task OnDisconnecting(DisconnectEventArgs e)
        {
            try
            {
                if (this.Disconnecting != null)
                {
                    await this.Disconnecting.Invoke(this, e).ConfigureAwait(false);
                    if (e.Handled)
                    {
                        return;
                    }
                }
            }
            catch (Exception ex)
            {
                this.Logger.Log(LogLevel.Error, this, $"在事件{nameof(this.Disconnecting)}中发生错误。", ex);
            }
        }

        #endregion 事件

        #region 属性

        /// <summary>
        /// 设置Tcp适配器获取器。
        /// </summary>
        public Func<SingleStreamDataHandlingAdapter> TcpDataHandlingAdapter { get; set; } = () => new NormalDataHandlingAdapter();

        /// <inheritdoc/>
        public ILog Logger { get; set; }

        /// <inheritdoc/>
        public DateTime LastReceivedTime => this.GetTcpCore().ReceiveCounter.LastIncrement;

        /// <inheritdoc/>
        public DateTime LastSendTime => this.GetTcpCore().SendCounter.LastIncrement;

        /// <inheritdoc/>
        public virtual bool CanSetDataHandlingAdapter => true;

        /// <inheritdoc/>
        public SingleStreamDataHandlingAdapter DataHandlingAdapter { get; private set; }

        /// <inheritdoc/>
        public string IP { get; private set; }

        /// <inheritdoc/>
        public Socket MainSocket { get; private set; }

        /// <inheritdoc/>
        public bool Online { get => this.m_online; }

        /// <inheritdoc/>
        public bool CanSend => this.m_online;

        /// <inheritdoc/>
        public int Port { get; private set; }

        /// <inheritdoc/>
        public bool UseSsl => this.GetTcpCore().UseSsl;

        /// <inheritdoc/>
        public IPHost RemoteIPHost { get; private set; }

        /// <inheritdoc/>
        public bool IsClient => true;

        /// <summary>
        /// <inheritdoc cref="Socket.SendTimeout"/>
        /// </summary>
        public int SendTimeout { get; set; }

        /// <summary>
        /// 在Tcp层保活机制。
        /// </summary>
        public KeepAliveValue KeepAliveValue { get; set; }

        /// <summary>
        /// 禁止Delay算法
        /// </summary>
        public bool? NoDelay { get; set; }

        /// <summary>
        /// 固定Tcp客户端的端口
        /// </summary>
        public IPHost BindIPHost { get; set; }

        /// <summary>
        /// 使用端口复用
        /// </summary>
        public bool ReuseAddress { get; set; }

        /// <summary>
        /// 最小缓存区设置
        /// </summary>
        public int MinBufferSize { get; set; } = 1024 * 10;

        /// <summary>
        /// 最大缓存区设置
        /// </summary>
        public int MaxBufferSize { get; set; } = 1024 * 512;

        /// <summary>
        /// Ssl相关
        /// </summary>
        public ClientSslOption ClientSslOption { get; set; }

        #endregion 属性

        #region 断开操作

        /// <inheritdoc/>
        public virtual void Close(string msg)
        {
            lock (this.GetTcpCore())
            {
                if (this.m_online)
                {
                    Task.Factory.StartNew(this.PrivateOnDisconnecting, new DisconnectEventArgs(true, msg));
                    this.MainSocket.TryClose();
                    this.BreakOut(true, msg);
                }
            }
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="disposing"></param>
        protected override void Dispose(bool disposing)
        {
            lock (this.GetTcpCore())
            {
                if (this.m_online)
                {
                    Task.Factory.StartNew(this.PrivateOnDisconnecting, new DisconnectEventArgs(true, $"{nameof(Dispose)}主动断开"));
                    this.BreakOut(true, $"{nameof(Dispose)}主动断开");
                }
                this.m_tcpCore.Reset();
            }
            base.Dispose(disposing);
        }

        #endregion 断开操作

        #region Connect

        /// <summary>
        /// 建立Tcp的连接。
        /// </summary>
        /// <param name="millisecondsTimeout"></param>
        /// <param name="token"></param>
        /// <exception cref="ObjectDisposedException"></exception>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="Exception"></exception>
        /// <exception cref="TimeoutException"></exception>
        protected void TcpConnect(int millisecondsTimeout, CancellationToken token)
        {
            try
            {
                this.ThrowIfDisposed();
                this.m_semaphoreForConnect.Wait(token);
                if (this.m_online)
                {
                    return;
                }
                var iPHost = this.RemoteIPHost ?? throw new ArgumentNullException(nameof(IPHost), "iPHost不能为空。");
                this.MainSocket.SafeDispose();
                var socket = this.CreateSocket(iPHost);
                this.PrivateOnConnecting(new ConnectingEventArgs(socket)).GetFalseAwaitResult();

                var task = Task.Run(() =>
                {
                    socket.Connect(iPHost.Host, iPHost.Port);
                }, token);
                task.ConfigureFalseAwait();
                if (!task.Wait(millisecondsTimeout, token))
                {
                    socket.SafeDispose();
                    throw new TimeoutException();
                }
                this.m_online = true;
                this.SetSocket(socket);
                this.BeginReceive();

                Task.Factory.StartNew(this.PrivateOnConnected, new ConnectedEventArgs());
            }
            finally
            {
                this.m_semaphoreForConnect.Release();
            }
        }

        private void BeginReceive()
        {
            if (this.ClientSslOption is ClientSslOption sslOption)
            {
                this.GetTcpCore().Authenticate(sslOption);
                _ = this.GetTcpCore().BeginSslReceive();
            }
            else
            {
                this.GetTcpCore().BeginIocpReceive();
            }
        }

#if NET6_0_OR_GREATER

        /// <summary>
        /// 异步连接服务器
        /// </summary>
        /// <param name="millisecondsTimeout"></param>
        /// <param name="token"></param>
        /// <returns></returns>
        /// <exception cref="ObjectDisposedException"></exception>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="TimeoutException"></exception>
        protected async Task TcpConnectAsync(int millisecondsTimeout, CancellationToken token)
        {
            try
            {
                this.ThrowIfDisposed();
                await this.m_semaphoreForConnect.WaitAsync();
                if (this.m_online)
                {
                    return;
                }
                var iPHost = this.RemoteIPHost ?? throw new ArgumentNullException("iPHost不能为空。");
                this.MainSocket.SafeDispose();
                var socket = this.CreateSocket(iPHost);
                var args = new ConnectingEventArgs(this.MainSocket);
                await this.PrivateOnConnecting(args);
                if (token.CanBeCanceled)
                {
                    await socket.ConnectAsync(iPHost.Host, iPHost.Port, token);
                }
                else
                {
                    using (var tokenSource = new CancellationTokenSource(millisecondsTimeout))
                    {
                        try
                        {
                            await socket.ConnectAsync(iPHost.Host, iPHost.Port, tokenSource.Token);
                        }
                        catch (OperationCanceledException)
                        {
                            throw new TimeoutException();
                        }
                    }
                }
                this.m_online = true;
                this.SetSocket(socket);
                this.BeginReceive();
                _ = Task.Factory.StartNew(this.PrivateOnConnected, new ConnectedEventArgs());
            }
            finally
            {
                this.m_semaphoreForConnect.Release();
            }
        }
#else

        /// <summary>
        /// 异步连接服务器
        /// </summary>
        /// <param name="millisecondsTimeout"></param>
        /// <param name="token"></param>
        /// <returns></returns>
        protected async Task TcpConnectAsync(int millisecondsTimeout, CancellationToken token)
        {
            try
            {
                await this.m_semaphoreForConnect.WaitAsync();
                if (this.m_online)
                {
                    return;
                }
                if (this.DisposedValue)
                {
                    throw new ObjectDisposedException(this.GetType().FullName);
                }
                var iPHost = this.RemoteIPHost ?? throw new ArgumentNullException(nameof(IPHost), "iPHost不能为空。");
                this.MainSocket.SafeDispose();
                var socket = this.CreateSocket(iPHost);
                await this.PrivateOnConnecting(new ConnectingEventArgs(socket));
                var task = Task.Factory.FromAsync(socket.BeginConnect, socket.EndConnect, iPHost.Host, iPHost.Port, null);
                await task.WaitAsync(TimeSpan.FromMilliseconds(millisecondsTimeout));
                this.m_online = true;
                this.SetSocket(socket);
                this.BeginReceive();
                _ = Task.Factory.StartNew(this.PrivateOnConnected, new ConnectedEventArgs());
            }
            finally
            {
                this.m_semaphoreForConnect.Release();
            }
        }

#endif

        /// <inheritdoc/>
        public virtual void Connect(int millisecondsTimeout, CancellationToken token)
        {
            this.TcpConnect(millisecondsTimeout, token);
        }

        /// <inheritdoc/>
        public virtual async Task ConnectAsync(int millisecondsTimeout, CancellationToken token)
        {
            await this.TcpConnectAsync(millisecondsTimeout, token);
        }

        #endregion Connect

        #region Receiver

        private Receiver m_receiver;

        /// <inheritdoc/>
        public IReceiver CreateReceiver()
        {
            return this.m_receiver ??= new Receiver(this);
        }

        /// <inheritdoc/>
        public void ClearReceiver()
        {
            this.m_receiver = null;
        }

        #endregion Receiver

        private void TcpCoreBreakOut(TcpCore core, bool manual, string msg)
        {
            this.BreakOut(manual, msg);
        }

        /// <summary>
        /// BreakOut。
        /// </summary>
        /// <param name="manual"></param>
        /// <param name="msg"></param>
        protected void BreakOut(bool manual, string msg)
        {
            lock (this.GetTcpCore())
            {
                if (this.m_online)
                {
                    this.m_online = false;
                    this.MainSocket.SafeDispose();
                    this.DataHandlingAdapter.SafeDispose();
                    Task.Factory.StartNew(this.PrivateOnDisconnected, new DisconnectEventArgs(manual, msg));
                }
            }
        }

        private TcpCore GetTcpCore()
        {
            this.ThrowIfDisposed();
            return this.m_tcpCore ?? throw new ObjectDisposedException(this.GetType().Name);
        }

        /// <inheritdoc/>
        public virtual void SetDataHandlingAdapter(SingleStreamDataHandlingAdapter adapter)
        {
            if (!this.CanSetDataHandlingAdapter)
            {
                throw new Exception($"不允许自由调用{nameof(SetDataHandlingAdapter)}进行赋值。");
            }

            this.SetAdapter(adapter);
        }

        private void PrivateHandleReceivedData(ByteBlock byteBlock, IRequestInfo requestInfo)
        {
            if (this.m_receiver != null)
            {
                if (this.m_receiver.TryInputReceive(byteBlock, requestInfo))
                {
                    return;
                }
            }
            this.ReceivedData(new ReceivedDataEventArgs(byteBlock, requestInfo)).GetFalseAwaitResult();
        }

        /// <summary>
        /// 当收到适配器处理的数据时。
        /// </summary>
        /// <param name="e"></param>
        protected virtual async Task ReceivedData(ReceivedDataEventArgs e)
        {
            if (this.Received != null)
            {
                await this.Received.Invoke(this, e);
            }
        }

        /// <summary>
        /// 当即将发送时，如果覆盖父类方法，则不会触发插件。
        /// </summary>
        /// <param name="buffer">数据缓存区</param>
        /// <param name="offset">偏移</param>
        /// <param name="length">长度</param>
        /// <returns>返回值表示是否允许发送</returns>
        protected virtual Task<bool> SendingData(byte[] buffer, int offset, int length)
        {
            return Task.FromResult(true);
        }

        /// <summary>
        /// 设置适配器，该方法不会检验<see cref="CanSetDataHandlingAdapter"/>的值。
        /// </summary>
        /// <param name="adapter"></param>
        protected void SetAdapter(SingleStreamDataHandlingAdapter adapter)
        {
            this.ThrowIfDisposed();
            if (adapter is null)
            {
                throw new ArgumentNullException(nameof(adapter));
            }

            adapter.Logger = this.Logger;
            adapter.OnLoaded(this);
            adapter.ReceivedCallBack = this.PrivateHandleReceivedData;
            adapter.SendCallBack = this.DefaultSend;
            adapter.SendAsyncCallBack = this.DefaultSendAsync;
            this.DataHandlingAdapter = adapter;
        }

        private Socket CreateSocket(IPHost iPHost)
        {
            Socket socket;
            if (iPHost.HostNameType == UriHostNameType.Dns)
            {
                socket = new Socket(SocketType.Stream, ProtocolType.Tcp)
                {
                    SendTimeout = SendTimeout
                };
            }
            else
            {
                socket = new Socket(iPHost.EndPoint.AddressFamily, SocketType.Stream, ProtocolType.Tcp)
                {
                    SendTimeout = SendTimeout
                };
            }
            if (this.KeepAliveValue is KeepAliveValue keepAliveValue)
            {
#if NET45_OR_GREATER

                socket.SetSocketOption(SocketOptionLevel.Socket, SocketOptionName.KeepAlive, true);
                socket.IOControl(IOControlCode.KeepAliveValues, keepAliveValue.KeepAliveTime, null);
#else
                if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                {
                    socket.SetSocketOption(SocketOptionLevel.Socket, SocketOptionName.KeepAlive, true);
                    socket.IOControl(IOControlCode.KeepAliveValues, keepAliveValue.KeepAliveTime, null);
                }
#endif
            }

            if (this.NoDelay.HasValue)
            {
                socket.SetSocketOption(SocketOptionLevel.Tcp, SocketOptionName.NoDelay, this.NoDelay.Value);
            }

            if (this.BindIPHost != null)
            {
                if (this.ReuseAddress)
                {
                    socket.SetSocketOption(SocketOptionLevel.Socket, SocketOptionName.ReuseAddress, true);
                }
                socket.Bind(this.BindIPHost.EndPoint);
            }
            return socket;
        }

        #region 发送

        #region 同步发送

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="requestInfo"></param>
        /// <exception cref="NotConnectedException"></exception>
        /// <exception cref="OverlengthException"></exception>
        /// <exception cref="Exception"></exception>
        public void Send(IRequestInfo requestInfo)
        {
            this.ThrowIfDisposed();
            if (this.DataHandlingAdapter == null)
            {
                throw new ArgumentNullException(nameof(this.DataHandlingAdapter), TouchSocketResource.NullDataAdapter.GetDescription());
            }
            if (!this.DataHandlingAdapter.CanSendRequestInfo)
            {
                throw new NotSupportedException($"当前适配器不支持对象发送。");
            }
            this.DataHandlingAdapter.SendInput(requestInfo);
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="buffer"><inheritdoc/></param>
        /// <param name="offset"><inheritdoc/></param>
        /// <param name="length"><inheritdoc/></param>
        /// <exception cref="NotConnectedException"><inheritdoc/></exception>
        /// <exception cref="OverlengthException"><inheritdoc/></exception>
        /// <exception cref="Exception"><inheritdoc/></exception>
        public virtual void Send(byte[] buffer, int offset, int length)
        {
            if (this.DataHandlingAdapter == null)
            {
                throw new ArgumentNullException(nameof(this.DataHandlingAdapter), TouchSocketResource.NullDataAdapter.GetDescription());
            }
            this.DataHandlingAdapter.SendInput(buffer, offset, length);
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="transferBytes"><inheritdoc/></param>
        /// <exception cref="NotConnectedException"><inheritdoc/></exception>
        /// <exception cref="OverlengthException"><inheritdoc/></exception>
        /// <exception cref="Exception"><inheritdoc/></exception>
        public virtual void Send(IList<ArraySegment<byte>> transferBytes)
        {
            if (this.DataHandlingAdapter == null)
            {
                throw new ArgumentNullException(nameof(this.DataHandlingAdapter), TouchSocketResource.NullDataAdapter.GetDescription());
            }

            if (this.DataHandlingAdapter.CanSplicingSend)
            {
                this.DataHandlingAdapter.SendInput(transferBytes);
            }
            else
            {
                var length = 0;
                foreach (var item in transferBytes)
                {
                    length += item.Count;
                }
                using (var byteBlock = new ByteBlock(length))
                {
                    foreach (var item in transferBytes)
                    {
                        byteBlock.Write(item.Array, item.Offset, item.Count);
                    }
                    this.DataHandlingAdapter.SendInput(byteBlock.Buffer, 0, byteBlock.Len);
                }
            }
        }

        #endregion 同步发送

        #region 异步发送

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="buffer"></param>
        /// <param name="offset"></param>
        /// <param name="length"></param>
        /// <exception cref="NotConnectedException"></exception>
        /// <exception cref="OverlengthException"></exception>
        /// <exception cref="Exception"></exception>
        public virtual Task SendAsync(byte[] buffer, int offset, int length)
        {
            this.ThrowIfDisposed();
            if (this.DataHandlingAdapter == null)
            {
                throw new ArgumentNullException(nameof(this.DataHandlingAdapter), TouchSocketResource.NullDataAdapter.GetDescription());
            }
            return this.DataHandlingAdapter.SendInputAsync(buffer, offset, length);
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="requestInfo"></param>
        /// <exception cref="NotConnectedException"></exception>
        /// <exception cref="OverlengthException"></exception>
        /// <exception cref="Exception"></exception>
        public virtual Task SendAsync(IRequestInfo requestInfo)
        {
            this.ThrowIfDisposed();
            if (this.DataHandlingAdapter == null)
            {
                throw new ArgumentNullException(nameof(this.DataHandlingAdapter), TouchSocketResource.NullDataAdapter.GetDescription());
            }
            if (!this.DataHandlingAdapter.CanSendRequestInfo)
            {
                throw new NotSupportedException($"当前适配器不支持对象发送。");
            }
            return this.DataHandlingAdapter.SendInputAsync(requestInfo);
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="transferBytes"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException"></exception>
        public virtual Task SendAsync(IList<ArraySegment<byte>> transferBytes)
        {
            this.ThrowIfDisposed();
            if (this.DataHandlingAdapter == null)
            {
                throw new ArgumentNullException(nameof(this.DataHandlingAdapter), TouchSocketResource.NullDataAdapter.GetDescription());
            }
            if (this.DataHandlingAdapter.CanSplicingSend)
            {
                return this.DataHandlingAdapter.SendInputAsync(transferBytes);
            }
            else
            {
                var length = 0;
                foreach (var item in transferBytes)
                {
                    length += item.Count;
                }
                using (var byteBlock = new ByteBlock(length))
                {
                    foreach (var item in transferBytes)
                    {
                        byteBlock.Write(item.Array, item.Offset, item.Count);
                    }
                    return this.DataHandlingAdapter.SendInputAsync(byteBlock.Buffer, 0, byteBlock.Len);
                }
            }
        }

        #endregion 异步发送

        /// <inheritdoc/>
        public void DefaultSend(byte[] buffer, int offset, int length)
        {
            if (this.SendingData(buffer, offset, length).GetFalseAwaitResult())
            {
                this.GetTcpCore().Send(buffer, offset, length);
            }
        }

        /// <inheritdoc/>
        public async Task DefaultSendAsync(byte[] buffer, int offset, int length)
        {
            if (await this.SendingData(buffer, offset, length))
            {
                await this.GetTcpCore().SendAsync(buffer, offset, length);
            }
        }

        #endregion 发送

        private void SetSocket(Socket socket)
        {
            if (socket == null)
            {
                this.IP = null;
                this.Port = -1;
                return;
            }

            this.IP = socket.RemoteEndPoint.GetIP();
            this.Port = socket.RemoteEndPoint.GetPort();
            this.MainSocket = socket;
            this.m_tcpCore.Reset(socket);
            this.m_tcpCore.OnReceived = this.HandleReceived;
            this.m_tcpCore.OnBreakOut = this.TcpCoreBreakOut;
            this.m_tcpCore.MinBufferSize = this.MinBufferSize;
            this.m_tcpCore.MaxBufferSize = this.MaxBufferSize;
        }

        private void HandleReceived(TcpCore core, ByteBlock byteBlock)
        {
            try
            {
                if (this.DisposedValue)
                {
                    return;
                }
                if (this.ReceivingData(byteBlock).GetFalseAwaitResult())
                {
                    return;
                }

                if (this.DataHandlingAdapter == null)
                {
                    this.Logger.Error(this, TouchSocketResource.NullDataAdapter.GetDescription());
                    return;
                }
                this.DataHandlingAdapter.ReceivedInput(byteBlock);
            }
            catch (Exception ex)
            {
                this.Logger.Log(LogLevel.Error, this, "在处理数据时发生错误", ex);
            }
        }

        /// <summary>
        /// 当收到原始数据
        /// </summary>
        /// <param name="byteBlock"></param>
        /// <returns>如果返回<see langword="true"/>则表示数据已被处理，且不会再向下传递。</returns>
        protected virtual Task<bool> ReceivingData(ByteBlock byteBlock)
        {
            return Task.FromResult(false);
        }
    }
}