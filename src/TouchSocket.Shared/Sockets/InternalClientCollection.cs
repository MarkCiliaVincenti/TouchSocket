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

using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;

namespace TouchSocket.Sockets
{
    /// <summary>
    /// ClientCollection
    /// </summary>
    /// <typeparam name="TClient"></typeparam>
    [DebuggerDisplay("Count={Count}")]
    internal class InternalClientCollection<TClient> : ConcurrentDictionary<string, TClient>, IClientCollection<TClient> where TClient : IIdClient
    {
        /// <inheritdoc/>
        public bool ClientExist(string id)
        {
            return !string.IsNullOrEmpty(id) && this.ContainsKey(id);
        }

        IEnumerator<TClient> IEnumerable<TClient>.GetEnumerator()
        {
            return this.Values.GetEnumerator();
        }

        /// <inheritdoc/>
        public IEnumerable<string> GetIds()
        {
            return this.Keys;
        }

        /// <summary>
        /// 添加客户端
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
        public bool TryAdd(TClient client)
        {
            return this.TryAdd(client.Id, client);
        }

        /// <inheritdoc/>
        public bool TryGetClient(string id, out TClient client)
        {
            if (string.IsNullOrEmpty(id))
            {
                client = default;
                return false;
            }

            return this.TryGetValue(id, out client);
        }

        /// <summary>
        /// 移除对应客户端
        /// </summary>
        /// <param name="id"></param>
        /// <param name="client"></param>
        /// <returns></returns>
        public bool TryRemoveClient(string id, out TClient client)
        {
            if (string.IsNullOrEmpty(id))
            {
                client = default;
                return false;
            }

            if (base.TryRemove(id, out var newClient))
            {
                client = newClient;
                return true;
            }
            client = default;
            return false;
        }
    }
}