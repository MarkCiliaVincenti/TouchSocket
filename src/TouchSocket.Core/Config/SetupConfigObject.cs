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

namespace TouchSocket.Core
{
    /// <summary>
    /// 具有设置配置的对象
    /// </summary>
    public abstract class SetupConfigObject : ResolverConfigObject, ISetupConfigObject
    {
        private IPluginManager m_pluginManager;
        private IResolver m_resolver;
        private TouchSocketConfig m_config;

        /// <inheritdoc/>
        public override TouchSocketConfig Config => this.m_config;

        /// <inheritdoc/>
        public override IPluginManager PluginManager => this.m_pluginManager;

        /// <inheritdoc/>
        public override IResolver Resolver => this.m_resolver;

        private void ClearConfig()
        {
            this.m_pluginManager.SafeDispose();
            this.m_config.SafeDispose();
        }

        /// <inheritdoc/>
        public async Task SetupAsync(TouchSocketConfig config)
        {
            this.ThrowIfDisposed();

            this.ClearConfig();

            this.BuildConfig(config);

            await this.PluginManager.RaiseAsync(typeof(ILoadingConfigPlugin), this, new ConfigEventArgs(config)).ConfigureAwait(false);
            this.LoadConfig(config);
            await this.PluginManager.RaiseAsync(typeof(ILoadedConfigPlugin), this, new ConfigEventArgs(config)).ConfigureAwait(false);
        }

        /// <inheritdoc/>
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                this.ClearConfig();
            }
            base.Dispose(disposing);
        }

        /// <summary>
        /// 加载配置
        /// </summary>
        /// <param name="config">要加载的配置对象</param>
        protected virtual void LoadConfig(TouchSocketConfig config)
        {
        }

        private void BuildConfig(TouchSocketConfig config)
        {
            this.m_config = config ?? throw new ArgumentNullException(nameof(config));

            if (!this.m_config.TryGetValue(TouchSocketCoreConfigExtension.ResolverProperty, out var resolver))
            {
                if (!this.m_config.TryGetValue(TouchSocketCoreConfigExtension.RegistratorProperty, out var registrator))
                {
                    registrator = new Container();
                }
                if (!registrator.IsRegistered(typeof(ILog)))
                {
                    registrator.RegisterSingleton<ILog>(new LoggerGroup());
                }

                if (this.m_config.GetValue(TouchSocketCoreConfigExtension.ConfigureContainerProperty) is Action<IRegistrator> actionContainer)
                {
                    actionContainer.Invoke(registrator);
                }

                resolver = registrator.BuildResolver();
            }

            var pluginManager = new PluginManager(resolver);

            if (this.m_config.GetValue(TouchSocketCoreConfigExtension.ConfigurePluginsProperty) is Action<IPluginManager> actionPluginManager)
            {
                actionPluginManager.Invoke(pluginManager);
            }

            this.Logger ??= resolver.Resolve<ILog>();

            this.m_pluginManager = pluginManager;
            this.m_resolver = resolver;
        }
    }
}