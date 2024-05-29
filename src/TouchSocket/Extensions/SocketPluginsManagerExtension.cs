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
using System.Threading.Tasks;
using TouchSocket.Core;

namespace TouchSocket.Sockets
{
    /// <summary>
    /// SocketPluginManagerExtension
    /// </summary>
    public static class SocketPluginManagerExtension
    {
        /// <summary>
        ///  检查连接客户端活性插件。
        ///  <para>当在设置的周期内，没有接收/发送任何数据，则判定该客户端掉线。执行清理。默认配置：60秒为一个周期，同时检测发送和接收。</para>
        ///  服务器、客户端均适用。
        /// </summary>
        /// <param name="pluginManager"></param>
        /// <returns></returns>
        public static CheckClearPlugin<ITcpSession> UseCheckClear(this IPluginManager pluginManager)
        {
            return pluginManager.Add<CheckClearPlugin<ITcpSession>>();
        }

        /// <summary>
        ///  检查连接客户端活性插件。
        ///  <para>当在设置的周期内，没有接收/发送任何数据，则判定该客户端掉线。执行清理。默认配置：60秒为一个周期，同时检测发送和接收。</para>
        ///  服务器、客户端均适用。
        /// </summary>
        /// <param name="pluginManager"></param>
        /// <returns></returns>
        public static CheckClearPlugin<TClient> UseCheckClear<TClient>(this IPluginManager pluginManager) where TClient : IClient, IClosableClient
        {
            return pluginManager.Add<CheckClearPlugin<TClient>>();
        }

        #region Reconnection

        /// <summary>
        /// 使用断线重连。
        /// </summary>
        /// <typeparam name="TClient"></typeparam>
        /// <param name="pluginManager"></param>
        /// <returns></returns>
        [Obsolete("此配置已被弃用，请使用UseTcpReconnection代替", true)]
        public static ReconnectionPlugin<TClient> UseReconnection<TClient>(this IPluginManager pluginManager) where TClient : class, ITcpClient
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// 使用断线重连。
        /// <para>该效果仅客户端在完成首次连接，且为被动断开时有效。</para>
        /// </summary>
        /// <param name="pluginManager"></param>
        /// <param name="successCallback">成功回调函数</param>
        /// <param name="tryCount">尝试重连次数，设为-1时则永远尝试连接</param>
        /// <param name="printLog">是否输出日志。</param>
        /// <param name="sleepTime">失败时，停留时间</param>
        /// <returns></returns>
        [Obsolete("此配置已被弃用，请使用UseTcpReconnection代替", true)]
        public static ReconnectionPlugin<ITcpClient> UseReconnection(this IPluginManager pluginManager, int tryCount = 10, bool printLog = false, int sleepTime = 1000, Action<ITcpClient> successCallback = null)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// 使用断线重连。
        /// <para>该效果仅客户端在完成首次连接，且为被动断开时有效。</para>
        /// </summary>
        /// <param name="pluginManager"></param>
        /// <param name="sleepTime">失败时间隔时间</param>
        /// <param name="failCallback">失败时回调（参数依次为：客户端，本轮尝试重连次数，异常信息）。如果回调为null或者返回false，则终止尝试下次连接。</param>
        /// <param name="successCallback">成功连接时回调。</param>
        /// <returns></returns>
        [Obsolete("此配置已被弃用，请使用UseTcpReconnection代替", true)]
        public static ReconnectionPlugin<ITcpClient> UseReconnection(this IPluginManager pluginManager, TimeSpan sleepTime,
            Func<ITcpClient, int, Exception, bool> failCallback = default,
            Action<ITcpClient> successCallback = default)
        {
            throw new NotImplementedException();
        }

        #endregion Reconnection

        #region TcpReconnection

        /// <summary>
        /// 使用断线重连。
        /// </summary>
        /// <typeparam name="TClient"></typeparam>
        /// <param name="pluginManager"></param>
        /// <returns></returns>
        public static ReconnectionPlugin<TClient> UseTcpReconnection<TClient>(this IPluginManager pluginManager) where TClient : ITcpClient
        {
            var reconnectionPlugin = new TcpReconnectionPlugin<TClient>();
            pluginManager.Add(reconnectionPlugin);
            return reconnectionPlugin;
        }

        public static ReconnectionPlugin<ITcpClient> UseTcpReconnection(this IPluginManager pluginManager)
        {
            var reconnectionPlugin = new TcpReconnectionPlugin<ITcpClient>();
            pluginManager.Add(reconnectionPlugin);
            return reconnectionPlugin;
        }
        #endregion TcpReconnection
    }
}