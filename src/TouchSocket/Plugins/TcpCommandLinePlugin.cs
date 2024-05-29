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
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using TouchSocket.Core;

namespace TouchSocket.Sockets
{
    /// <summary>
    /// Tcp命令行插件。
    /// </summary>
    public abstract class TcpCommandLinePlugin : PluginBase, ITcpReceivedPlugin
    {
        private readonly ILog m_logger;
        private readonly Dictionary<string, Method> m_pairs = new Dictionary<string, TouchSocket.Core.Method>();

        /// <summary>
        /// Tcp命令行插件。
        /// </summary>
        /// <param name="logger"></param>
        /// <exception cref="ArgumentNullException"></exception>
        protected TcpCommandLinePlugin(ILog logger)
        {
            this.m_logger = logger ?? throw new ArgumentNullException(nameof(logger));
            this.Converter = new StringSerializerConverter(new StringToPrimitiveSerializerFormatter<object>(), new JsonStringToClassSerializerFormatter<object>());
            var ms = this.GetType().GetMethods(BindingFlags.Public | BindingFlags.Instance).Where(a => a.Name.EndsWith("Command"));
            foreach (var item in ms)
            {
                this.m_pairs.Add(item.Name.Replace("Command", string.Empty), new Method(item));
            }
        }

        /// <summary>
        /// 字符串转换器，默认支持基础类型和Json。可以自定义。
        /// </summary>
        public StringSerializerConverter Converter { get; }

        /// <summary>
        /// 是否返回执行异常。
        /// </summary>
        public bool ReturnException { get; set; } = true;

        /// <summary>
        /// 当有执行异常时，不返回异常。
        /// </summary>
        /// <returns></returns>
        public TcpCommandLinePlugin NoReturnException()
        {
            this.ReturnException = false;
            return this;
        }

        /// <inheritdoc/>
        public async Task OnTcpReceived(ITcpSession client, ReceivedDataEventArgs e)
        {
            if (client is not IClientSender clientSender)
            {
                return;
            }
            try
            {
                var strs = e.ByteBlock.ToString().Split(' ');
                if (strs.Length > 0 && this.m_pairs.TryGetValue(strs[0], out var method))
                {
                    var ps = method.Info.GetParameters();
                    var os = new object[ps.Length];
                    var index = 0;
                    for (var i = 0; i < ps.Length; i++)
                    {
                        if (ps[i].ParameterType.IsInterface && typeof(ITcpSession).IsAssignableFrom(ps[i].ParameterType))
                        {
                            os[i] = client;
                        }
                        else
                        {
                            os[i] = this.Converter.Deserialize(null, strs[index + 1], ps[i].ParameterType);
                            index++;
                        }
                    }
                    e.Handled = true;

                    try
                    {
                        object result;
                        switch (method.TaskType)
                        {
                            case TaskReturnType.Task:
                                await method.InvokeAsync(this, os).ConfigureFalseAwait();
                                result = default;
                                break;

                            case TaskReturnType.TaskObject:
                                result = await method.InvokeObjectAsync(this, os).ConfigureFalseAwait();
                                break;

                            case TaskReturnType.None:
                            default:
                                result = method.Invoke(this, os);
                                break;
                        }
                        if (method.HasReturn)
                        {
                            clientSender.Send(this.Converter.Serialize(null, result));
                        }
                    }
                    catch (Exception ex)
                    {
                        if (this.ReturnException)
                        {
                            clientSender.Send(ex.Message);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                this.m_logger.Log(LogLevel.Error, this, ex.Message, ex);
            }

            await e.InvokeNext().ConfigureFalseAwait();
        }
    }
}