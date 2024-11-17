//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：http://rrqm_home.gitee.io/touchsocket/
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------

using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using System.Linq;

namespace TouchSocket
{
    [Generator]
    public class RpcClientSourceGenerator : ISourceGenerator
    {
        private string m_generatorRpcMethodAttribute = @"
using System;

namespace TouchSocket.Rpc
{
    /// <summary>
    /// 标识该接口方法将自动生成调用的扩展方法
    /// </summary>
    [AttributeUsage(AttributeTargets.Method, Inherited = false, AllowMultiple = false)]
    [Obsolete(""此配置已被弃用，要使用源生成Rpc，请使用对应的Rpc特性，例如：DmtpRpc"", true)]
    internal sealed class GeneratorRpcMethodAttribute : RpcAttribute
    {
    }
}
";
        
        private string m_generatorRpcProxyAttribute = @"
using System;

namespace TouchSocket.Rpc
{
    /// <summary>
    /// 标识该接口将使用源生成自动生成调用的代理类
    /// </summary>
    [AttributeUsage(AttributeTargets.Interface, Inherited = false, AllowMultiple = false)]
    internal sealed class GeneratorRpcProxyAttribute : Attribute
    {
        /// <summary>
        /// 调用键的前缀，包括服务的命名空间，类名，不区分大小写。格式：命名空间.类名
        /// </summary>
        public string Prefix { get; set; }

        /// <summary>
        /// 生成泛型方法的约束
        /// </summary>
        public Type[] GenericConstraintTypes { get; set; }

        /// <summary>
        /// 是否仅以函数名调用，当为True是，调用时仅需要传入方法名即可。
        /// </summary>
        public bool MethodInvoke { get; set; }

        /// <summary>
        /// 生成代码的命名空间
        /// </summary>
        public string Namespace { get; set; }

        /// <summary>
        /// 生成的类名，不要包含“I”，生成接口时会自动添加。
        /// </summary>
        public string ClassName { get; set; }

        /// <summary>
        /// 生成代码
        /// </summary>
        public CodeGeneratorFlag GeneratorFlag { get; set; }

        /// <summary>
        /// 函数标识
        /// </summary>
        [Obsolete(""此枚举值已被弃用，当第一个参数是ICallContext时，自动识别。"", true)]
        public MethodFlags MethodFlags { get; set; }

        /// <summary>
        /// 继承接口
        /// </summary>
        public bool InheritedInterface { get; set; }
    }
}
";
        
        public void Initialize(GeneratorInitializationContext context)
        {
            context.RegisterForSyntaxNotifications(() => new RpcClientSyntaxReceiver());
            context.RegisterForPostInitialization(a => 
            {
                a.AddSource(nameof(m_generatorRpcMethodAttribute)+".g.cs", m_generatorRpcMethodAttribute);
                a.AddSource(nameof(m_generatorRpcProxyAttribute) +".g.cs", m_generatorRpcProxyAttribute);
            });
        }

        public void Execute(GeneratorExecutionContext context)
        {
            var s = context.Compilation.GetMetadataReference(context.Compilation.Assembly);

            if (context.SyntaxReceiver is RpcClientSyntaxReceiver receiver)
            {
                var builders = receiver
                    .GetRpcApiTypes(context.Compilation)
                    .Select(i => new RpcClientCodeBuilder(i))
                    .Distinct();
                //Debugger.Launch();
                foreach (var builder in builders)
                {
                    var tree = CSharpSyntaxTree.ParseText(builder.ToSourceText());
                    var root = tree.GetRoot().NormalizeWhitespace();
                    var ret = root.ToFullString();
                    context.AddSource($"{builder.GetFileName()}.g.cs", ret);
                }
            }
        }
    }
}