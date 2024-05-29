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
using System.Text;
using TouchSocket.Core;

namespace TouchSocket.Rpc
{
    /// <summary>
    /// Rpc方法属性基类
    /// </summary>
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class | AttributeTargets.Interface, AllowMultiple = false)]
    public abstract class RpcAttribute : Attribute
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public RpcAttribute()
        {
            this.Exceptions.Add(typeof(TimeoutException), "调用超时");
            this.Exceptions.Add(typeof(RpcInvokeException), "Rpc调用异常");
            this.Exceptions.Add(typeof(Exception), "其他异常");
        }

        /// <summary>
        /// 类生成器
        /// </summary>
        public ClassCodeGenerator ClassCodeGenerator { get; private set; }

        /// <summary>
        /// 异常提示
        /// </summary>
        public Dictionary<Type, string> Exceptions { get; } = new Dictionary<Type, string>();

        /// <summary>
        /// 生成代码
        /// </summary>
        public CodeGeneratorFlag GeneratorFlag { get; set; } =
            CodeGeneratorFlag.InstanceSync | CodeGeneratorFlag.InstanceAsync | CodeGeneratorFlag.ExtensionSync | CodeGeneratorFlag.ExtensionAsync
            | CodeGeneratorFlag.InterfaceSync | CodeGeneratorFlag.InterfaceAsync;

        /// <summary>
        /// 生成泛型方法的约束
        /// </summary>
        public Type[] GenericConstraintTypes { get; set; } = new Type[] { typeof(IRpcClient) };

        /// <summary>
        /// 调用键。
        /// </summary>
        public string InvokeKey { get; set; }

        /// <summary>
        /// 是否仅以函数名调用，当为True是，调用时仅需要传入方法名即可。
        /// </summary>
        public bool MethodInvoke { get; set; }

        /// <summary>
        /// 重新指定生成的函数名称。可以使用类似“JsonRpc_{0}”的模板格式。
        /// </summary>
        public string MethodName { get; set; }

        /// <summary>
        /// 获取注释信息
        /// </summary>
        /// <param name="rpcMethod"></param>
        /// <returns></returns>
        public virtual string GetDescription(RpcMethod rpcMethod)
        {
            return string.IsNullOrEmpty(rpcMethod.GetDescription()) ? "无注释信息" : rpcMethod.GetDescription();
        }

        /// <summary>
        /// 获取扩展的代理代码
        /// </summary>
        /// <param name="rpcMethod"></param>
        /// <returns></returns>
        public virtual string GetExtensionsMethodProxyCode(RpcMethod rpcMethod)
        {
            var codeString = new StringBuilder();

            var description = this.GetDescription(rpcMethod);

            var parametersStr = this.GetParameters(rpcMethod, out var isOut, out var isRef, out var parameters);
            var InterfaceTypes = this.GetGenericConstraintTypes();
            if (this.GeneratorFlag.HasFlag(CodeGeneratorFlag.ExtensionSync))
            {
                codeString.AppendLine("///<summary>");
                codeString.AppendLine($"///{description}");
                codeString.AppendLine("///</summary>");
                foreach (var item in this.Exceptions)
                {
                    codeString.AppendLine($"/// <exception cref=\"{item.Key.FullName}\">{item.Value}</exception>");
                }

                codeString.Append("public static ");
                codeString.Append(this.GetReturn(rpcMethod, false));
                codeString.Append(' ');
                codeString.Append(this.GetMethodName(rpcMethod, false));
                codeString.Append("<TClient>(");//方法参数

                codeString.Append($"this TClient client");

                codeString.Append(',');
                for (var i = 0; i < parametersStr.Count; i++)
                {
                    if (i > 0)
                    {
                        codeString.Append(',');
                    }

                    codeString.Append(parametersStr[i]);
                }
                if (parametersStr.Count > 0)
                {
                    codeString.Append(',');
                }
                codeString.Append(this.GetInvokeOption());
                codeString.AppendLine(") where TClient:");

                for (var i = 0; i < InterfaceTypes.Length; i++)
                {
                    if (i > 0)
                    {
                        codeString.Append(',');
                    }

                    codeString.Append(InterfaceTypes[i].FullName);
                }

                codeString.AppendLine("{");//方法开始

                codeString.AppendLine("var @_request = new RpcRequest(");
                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\",");//invokeKey
                if (rpcMethod.HasReturn)
                {
                    codeString.Append($"typeof({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}),");//returnType
                }
                else
                {
                    codeString.Append($"default,");//returnType
                }
                codeString.AppendLine("invokeOption,");//invokeOption
                if (parametersStr.Count > 0)
                {
                    //parameter参数
                    codeString.Append($"new object[]");
                    codeString.Append('{');

                    foreach (var parameter in parameters)
                    {
                        if (parameter.ParameterType.Name.Contains("&") && parameter.IsOut)
                        {
                            codeString.Append($"default({this.GetProxyParameterName(parameter)})");
                        }
                        else
                        {
                            codeString.Append(parameter.Name);
                        }
                        if (parameter != parameters[parameters.Length - 1])
                        {
                            codeString.Append(',');
                        }
                    }
                    codeString.AppendLine("},");

                    if (isOut || isRef)
                    {
                        codeString.Append($"new Type[]");
                        codeString.Append('{');
                        foreach (var parameter in parameters)
                        {
                            codeString.Append($"typeof({this.GetProxyParameterName(parameter)})");
                            if (parameter != parameters[parameters.Length - 1])
                            {
                                codeString.Append(',');
                            }
                        }
                        codeString.AppendLine("}");
                    }
                    else
                    {
                        codeString.Append($"default");
                    }
                }
                else
                {
                    codeString.Append($"default,default");
                }

                codeString.AppendLine(");");

                if (rpcMethod.HasReturn || isOut || isRef)
                {
                    codeString.AppendLine("var @_response = client.Invoke(@_request);");
                }
                else
                {
                    codeString.AppendLine("client.Invoke(@_request);");
                }

                if (isOut || isRef)
                {
                    codeString.AppendLine("var parameters = _response.Parameters;");
                    codeString.AppendLine("if(parameters!=null)");
                    codeString.AppendLine("{");
                    for (var i = 0; i < parameters.Length; i++)
                    {
                        codeString.AppendLine(string.Format("{0}=({1})parameters[{2}];", parameters[i].Name, this.GetProxyParameterName(parameters[i]), i));
                    }
                    codeString.AppendLine("}");
                    if (isOut)
                    {
                        codeString.AppendLine("else");
                        codeString.AppendLine("{");
                        for (var i = 0; i < parameters.Length; i++)
                        {
                            if (parameters[i].IsOut)
                            {
                                codeString.AppendLine(string.Format("{0}=default({1});", parameters[i].Name, this.GetProxyParameterName(parameters[i])));
                            }
                        }
                        codeString.AppendLine("}");
                    }
                }

                if (rpcMethod.HasReturn)
                {
                    codeString.AppendLine($"return ({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)})@_response.ReturnValue;");
                }

                codeString.AppendLine("}");
            }

            //以下生成异步
            if (this.GeneratorFlag.HasFlag(CodeGeneratorFlag.ExtensionAsync))
            {
                codeString.AppendLine("///<summary>");
                codeString.AppendLine($"///{description}");
                codeString.AppendLine("///</summary>");
                if (rpcMethod.HasReturn && !isOut && !isRef)
                {
                    codeString.Append("public static async ");
                }
                else
                {
                    codeString.Append("public static ");
                }
                codeString.Append(this.GetReturn(rpcMethod, true));
                codeString.Append(' ');
                codeString.Append(this.GetMethodName(rpcMethod, true));
                codeString.Append("<TClient>(");//方法参数

                codeString.Append($"this TClient client");

                codeString.Append(',');
                for (var i = 0; i < parametersStr.Count; i++)
                {
                    if (i > 0)
                    {
                        codeString.Append(',');
                    }
                    codeString.Append(parametersStr[i]);
                }
                if (parametersStr.Count > 0)
                {
                    codeString.Append(',');
                }
                codeString.Append(this.GetInvokeOption());
                codeString.AppendLine(") where TClient:");

                for (var i = 0; i < InterfaceTypes.Length; i++)
                {
                    if (i > 0)
                    {
                        codeString.Append(',');
                    }

                    codeString.Append(InterfaceTypes[i].FullName);
                }

                codeString.AppendLine("{");//方法开始

                codeString.AppendLine("var @_request = new RpcRequest(");
                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\",");//invokeKey
                if (rpcMethod.HasReturn)
                {
                    codeString.Append($"typeof({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}),");//returnType
                }
                else
                {
                    codeString.Append($"default,");//returnType
                }
                codeString.AppendLine("invokeOption,");//invokeOption
                if (parametersStr.Count > 0)
                {
                    //parameter参数
                    codeString.Append($"new object[]");
                    codeString.Append('{');

                    foreach (var parameter in parameters)
                    {
                        if (parameter.ParameterType.Name.Contains("&") && parameter.IsOut)
                        {
                            codeString.Append($"default({this.GetProxyParameterName(parameter)})");
                        }
                        else
                        {
                            codeString.Append(parameter.Name);
                        }
                        if (parameter != parameters[parameters.Length - 1])
                        {
                            codeString.Append(',');
                        }
                    }
                    codeString.AppendLine("},");

                    if (isOut || isRef)
                    {
                        codeString.Append($"new Type[]");
                        codeString.Append('{');
                        foreach (var parameter in parameters)
                        {
                            codeString.Append($"typeof({this.GetProxyParameterName(parameter)})");
                            if (parameter != parameters[parameters.Length - 1])
                            {
                                codeString.Append(',');
                            }
                        }
                        codeString.AppendLine("}");
                    }
                    else
                    {
                        codeString.Append($"default");
                    }
                }
                else
                {
                    codeString.Append($"default,default");
                }

                codeString.AppendLine(");");
                if (isOut || isRef)
                {
                    codeString.AppendLine("var @_response = client.Invoke(@_request);");

                    codeString.AppendLine("var parameters = _response.Parameters;");
                    codeString.AppendLine("if(parameters!=null)");
                    codeString.AppendLine("{");
                    for (var i = 0; i < parameters.Length; i++)
                    {
                        codeString.AppendLine(string.Format("{0}=({1})parameters[{2}];", parameters[i].Name, this.GetProxyParameterName(parameters[i]), i));
                    }
                    codeString.AppendLine("}");
                    if (isOut)
                    {
                        codeString.AppendLine("else");
                        codeString.AppendLine("{");
                        for (var i = 0; i < parameters.Length; i++)
                        {
                            if (parameters[i].IsOut)
                            {
                                codeString.AppendLine(string.Format("{0}=default({1});", parameters[i].Name, this.GetProxyParameterName(parameters[i])));
                            }
                        }
                        codeString.AppendLine("}");
                    }

                    if (rpcMethod.HasReturn)
                    {
                        codeString.AppendLine($"return Task.FromResult<{this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}>(({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)})@_response.ReturnValue);");
                    }
                    else
                    {
                        codeString.AppendLine("return EasyTask.CompletedTask;");
                    }
                    
                }
                else
                {
                    if (rpcMethod.HasReturn)
                    {
                        codeString.AppendLine("var @_response =await client.InvokeAsync(@_request).ConfigureFalseAwait();");
                        if (isOut || isRef)
                        {
                            codeString.AppendLine($"return Task.FromResult<{this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}>({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}@_response.ReturnValue);");
                        }
                        else
                        {
                            codeString.AppendLine($"return ({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)})@_response.ReturnValue;");
                        }

                    }
                    else
                    {
                        codeString.AppendLine("return client.InvokeAsync(@_request);");
                    }
                }
                codeString.AppendLine("}");
            }
            return codeString.ToString();
        }

        /// <summary>
        /// 获取生成的函数泛型限定名称。默认<see cref="IRpcClient"/>
        /// </summary>
        /// <returns></returns>
        public virtual Type[] GetGenericConstraintTypes()
        {
            return this.GenericConstraintTypes;
        }

        /// <summary>
        /// 获取生成实体类时的代码块
        /// </summary>
        /// <param name="rpcMethod"></param>
        /// <returns></returns>
        public virtual string GetInstanceProxyCode(RpcMethod rpcMethod)
        {
            var codeString = new StringBuilder();

            var description = this.GetDescription(rpcMethod);

            var parametersStr = this.GetParameters(rpcMethod, out var isOut, out var isRef, out var parameters);
            if (this.GeneratorFlag.HasFlag(CodeGeneratorFlag.InstanceSync))
            {
                codeString.AppendLine("///<summary>");
                codeString.AppendLine($"///{description}");
                codeString.AppendLine("///</summary>");
                foreach (var item in this.Exceptions)
                {
                    codeString.AppendLine($"/// <exception cref=\"{item.Key.FullName}\">{item.Value}</exception>");
                }

                codeString.Append("public ");
                codeString.Append(this.GetReturn(rpcMethod, false));
                codeString.Append(' ');
                codeString.Append(this.GetMethodName(rpcMethod, false));
                codeString.Append("(");//方法参数
                for (var i = 0; i < parametersStr.Count; i++)
                {
                    if (i > 0)
                    {
                        codeString.Append(',');
                    }

                    codeString.Append(parametersStr[i]);
                }
                if (parametersStr.Count > 0)
                {
                    codeString.Append(',');
                }
                codeString.Append(this.GetInvokeOption());
                codeString.AppendLine(")");
                codeString.AppendLine("{");//方法开始
                codeString.AppendLine("if(Client==null)");
                codeString.AppendLine("{");
                codeString.AppendLine("throw new RpcException(\"IRpcClient为空，请先初始化或者进行赋值\");");
                codeString.AppendLine("}");
                codeString.AppendLine("var @_request = new RpcRequest(");
                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\",");//invokeKey
                if (rpcMethod.HasReturn)
                {
                    codeString.Append($"typeof({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}),");//returnType
                }
                else
                {
                    codeString.Append($"default,");//returnType
                }
                codeString.AppendLine("invokeOption,");//invokeOption
                if (parametersStr.Count > 0)
                {
                    //parameter参数
                    codeString.Append($"new object[]");
                    codeString.Append('{');

                    foreach (var parameter in parameters)
                    {
                        if (parameter.ParameterType.Name.Contains("&") && parameter.IsOut)
                        {
                            codeString.Append($"default({this.GetProxyParameterName(parameter)})");
                        }
                        else
                        {
                            codeString.Append(parameter.Name);
                        }
                        if (parameter != parameters[parameters.Length - 1])
                        {
                            codeString.Append(',');
                        }
                    }
                    codeString.AppendLine("},");

                    if (isOut || isRef)
                    {
                        codeString.Append($"new Type[]");
                        codeString.Append('{');
                        foreach (var parameter in parameters)
                        {
                            codeString.Append($"typeof({this.GetProxyParameterName(parameter)})");
                            if (parameter != parameters[parameters.Length - 1])
                            {
                                codeString.Append(',');
                            }
                        }
                        codeString.AppendLine("}");
                    }
                    else
                    {
                        codeString.Append($"default");
                    }
                }
                else
                {
                    codeString.Append($"default,default");
                }

                codeString.AppendLine(");");

                if (rpcMethod.HasReturn || isOut || isRef)
                {
                    codeString.AppendLine("var @_response = Client.Invoke(@_request);");
                }
                else
                {
                    codeString.AppendLine("Client.Invoke(@_request);");
                }

                if (isOut || isRef)
                {
                    codeString.AppendLine("var parameters = _response.Parameters;");
                    codeString.AppendLine("if(parameters!=null)");
                    codeString.AppendLine("{");
                    for (var i = 0; i < parameters.Length; i++)
                    {
                        codeString.AppendLine(string.Format("{0}=({1})parameters[{2}];", parameters[i].Name, this.GetProxyParameterName(parameters[i]), i));
                    }
                    codeString.AppendLine("}");
                    if (isOut)
                    {
                        codeString.AppendLine("else");
                        codeString.AppendLine("{");
                        for (var i = 0; i < parameters.Length; i++)
                        {
                            if (parameters[i].IsOut)
                            {
                                codeString.AppendLine(string.Format("{0}=default({1});", parameters[i].Name, this.GetProxyParameterName(parameters[i])));
                            }
                        }
                        codeString.AppendLine("}");
                    }
                }

                if (rpcMethod.HasReturn)
                {
                    codeString.AppendLine($"return ({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)})@_response.ReturnValue;");
                }

                codeString.AppendLine("}");
            }

            //以下生成异步
            if (this.GeneratorFlag.HasFlag(CodeGeneratorFlag.InstanceAsync))
            {
                codeString.AppendLine("///<summary>");
                codeString.AppendLine($"///{description}");
                codeString.AppendLine("///</summary>");
                if (rpcMethod.HasReturn && !isOut && !isRef)
                {
                    codeString.Append("public async ");
                }
                else
                {
                    codeString.Append("public ");
                }
                codeString.Append(this.GetReturn(rpcMethod, true));
                codeString.Append(' ');
                codeString.Append(this.GetMethodName(rpcMethod, true));
                codeString.Append("(");//方法参数
                for (var i = 0; i < parametersStr.Count; i++)
                {
                    if (i > 0)
                    {
                        codeString.Append(',');
                    }
                    codeString.Append(parametersStr[i]);
                }
                if (parametersStr.Count > 0)
                {
                    codeString.Append(',');
                }
                codeString.Append(this.GetInvokeOption());
                codeString.AppendLine(")");
                codeString.AppendLine("{");//方法开始
                codeString.AppendLine("if(Client==null)");
                codeString.AppendLine("{");
                codeString.AppendLine("throw new RpcException(\"IRpcClient为空，请先初始化或者进行赋值\");");
                codeString.AppendLine("}");

                codeString.AppendLine("var @_request = new RpcRequest(");
                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\",");//invokeKey
                if (rpcMethod.HasReturn)
                {
                    codeString.Append($"typeof({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}),");//returnType
                }
                else
                {
                    codeString.Append($"default,");//returnType
                }
                codeString.AppendLine("invokeOption,");//invokeOption
                if (parametersStr.Count > 0)
                {
                    //parameter参数
                    codeString.Append($"new object[]");
                    codeString.Append('{');

                    foreach (var parameter in parameters)
                    {
                        if (parameter.ParameterType.Name.Contains("&") && parameter.IsOut)
                        {
                            codeString.Append($"default({this.GetProxyParameterName(parameter)})");
                        }
                        else
                        {
                            codeString.Append(parameter.Name);
                        }
                        if (parameter != parameters[parameters.Length - 1])
                        {
                            codeString.Append(',');
                        }
                    }
                    codeString.AppendLine("},");

                    if (isOut || isRef)
                    {
                        codeString.Append($"new Type[]");
                        codeString.Append('{');
                        foreach (var parameter in parameters)
                        {
                            codeString.Append($"typeof({this.GetProxyParameterName(parameter)})");
                            if (parameter != parameters[parameters.Length - 1])
                            {
                                codeString.Append(',');
                            }
                        }
                        codeString.AppendLine("}");
                    }
                    else
                    {
                        codeString.Append($"default");
                    }
                }
                else
                {
                    codeString.Append($"default,default");
                }

                codeString.AppendLine(");");
                if (isOut || isRef)
                {
                    codeString.AppendLine("var @_response = Client.Invoke(@_request);");

                    codeString.AppendLine("var parameters = _response.Parameters;");
                    codeString.AppendLine("if(parameters!=null)");
                    codeString.AppendLine("{");
                    for (var i = 0; i < parameters.Length; i++)
                    {
                        codeString.AppendLine(string.Format("{0}=({1})parameters[{2}];", parameters[i].Name, this.GetProxyParameterName(parameters[i]), i));
                    }
                    codeString.AppendLine("}");
                    if (isOut)
                    {
                        codeString.AppendLine("else");
                        codeString.AppendLine("{");
                        for (var i = 0; i < parameters.Length; i++)
                        {
                            if (parameters[i].IsOut)
                            {
                                codeString.AppendLine(string.Format("{0}=default({1});", parameters[i].Name, this.GetProxyParameterName(parameters[i])));
                            }
                        }
                        codeString.AppendLine("}");
                    }
                    if (rpcMethod.HasReturn)
                    {
                        codeString.AppendLine($"return Task.FromResult<{this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}>(({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)})@_response.ReturnValue);");
                    }
                    else
                    {
                        codeString.AppendLine("return EasyTask.CompletedTask;");
                    }
                }
                else
                {
                    if (rpcMethod.HasReturn)
                    {
                        codeString.AppendLine("var @_response =await Client.InvokeAsync(@_request).ConfigureFalseAwait();");
                        if (isOut || isRef)
                        {
                            codeString.AppendLine($"return Task.FromResult<{this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}>({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}@_response.ReturnValue);");
                        }
                        else
                        {
                            codeString.AppendLine($"return ({this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)})@_response.ReturnValue;");
                        }

                    }
                    else
                    {
                        codeString.AppendLine("return Client.InvokeAsync(@_request);");
                    }
                }
                codeString.AppendLine("}");
            }
            return codeString.ToString();
            //    var codeString = new StringBuilder();

            //    var description = this.GetDescription(rpcMethod);
            //    var parametersStr = this.GetParameters(rpcMethod, out var isOut, out var isRef, out var parameters);
            //    if (this.GeneratorFlag.HasFlag(CodeGeneratorFlag.InstanceSync))
            //    {
            //        codeString.AppendLine("///<summary>");
            //        codeString.AppendLine($"///{description}");
            //        codeString.AppendLine("///</summary>");
            //        foreach (var item in this.Exceptions)
            //        {
            //            codeString.AppendLine($"/// <exception cref=\"{item.Key.FullName}\">{item.Value}</exception>");
            //        }

            //        codeString.Append("public ");
            //        codeString.Append(this.GetReturn(rpcMethod, false));
            //        codeString.Append(' ');
            //        codeString.Append(this.GetMethodName(rpcMethod, false));
            //        codeString.Append('(');//方法参数

            //        for (var i = 0; i < parametersStr.Count; i++)
            //        {
            //            if (i > 0)
            //            {
            //                codeString.Append(',');
            //            }
            //            codeString.Append(parametersStr[i]);
            //        }
            //        if (parametersStr.Count > 0)
            //        {
            //            codeString.Append(',');
            //        }
            //        codeString.Append(this.GetInvokeOption());
            //        codeString.AppendLine(")");

            //        codeString.AppendLine("{");//方法开始

            //        codeString.AppendLine("if(Client==null)");
            //        codeString.AppendLine("{");
            //        codeString.AppendLine("throw new RpcException(\"IRpcClient为空，请先初始化或者进行赋值\");");
            //        codeString.AppendLine("}");

            //        if (parametersStr.Count > 0)
            //        {
            //            codeString.Append($"object[] parameters = new object[]");
            //            codeString.Append('{');

            //            foreach (var parameter in parameters)
            //            {
            //                if (parameter.ParameterType.Name.Contains("&") && parameter.IsOut)
            //                {
            //                    codeString.Append($"default({this.GetProxyParameterName(parameter)})");
            //                }
            //                else
            //                {
            //                    codeString.Append(parameter.Name);
            //                }
            //                if (parameter != parameters[parameters.Length - 1])
            //                {
            //                    codeString.Append(',');
            //                }
            //            }
            //            codeString.AppendLine("};");

            //            if (isOut || isRef)
            //            {
            //                codeString.Append($"Type[] types = new Type[]");
            //                codeString.Append('{');
            //                foreach (var parameter in parameters)
            //                {
            //                    codeString.Append($"typeof({this.GetProxyParameterName(parameter)})");
            //                    if (parameter != parameters[parameters.Length - 1])
            //                    {
            //                        codeString.Append(',');
            //                    }
            //                }
            //                codeString.AppendLine("};");
            //            }
            //        }

            //        if (rpcMethod.HasReturn)
            //        {
            //            if (parametersStr.Count == 0)
            //            {
            //                codeString.Append(string.Format("{0} returnData=({0})Client.Invoke", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append('(');
            //                codeString.Append(string.Format("typeof({0}),", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption, null);");
            //            }
            //            else if (isOut || isRef)
            //            {
            //                codeString.Append(string.Format("{0} returnData=({0})Client.Invoke", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append("(");
            //                codeString.Append(string.Format("typeof({0}),", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption,ref parameters,types);");
            //            }
            //            else
            //            {
            //                codeString.Append(string.Format("{0} returnData=({0})Client.Invoke", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append("(");
            //                codeString.Append(string.Format("typeof({0}),", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption, parameters);");
            //            }
            //        }
            //        else
            //        {
            //            if (parametersStr.Count == 0)
            //            {
            //                codeString.Append("Client.Invoke(");
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption, null);");
            //            }
            //            else if (isOut || isRef)
            //            {
            //                codeString.Append("Client.Invoke(");
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption,ref parameters,types);");
            //            }
            //            else
            //            {
            //                codeString.Append("Client.Invoke(");
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption, parameters);");
            //            }
            //        }
            //        if (isOut || isRef)
            //        {
            //            codeString.AppendLine("if(parameters!=null)");
            //            codeString.AppendLine("{");
            //            for (var i = 0; i < parameters.Length; i++)
            //            {
            //                codeString.AppendLine(string.Format("{0}=({1})parameters[{2}];", parameters[i].Name, this.GetProxyParameterName(parameters[i]), i));
            //            }
            //            codeString.AppendLine("}");
            //            if (isOut)
            //            {
            //                codeString.AppendLine("else");
            //                codeString.AppendLine("{");
            //                for (var i = 0; i < parameters.Length; i++)
            //                {
            //                    if (parameters[i].IsOut)
            //                    {
            //                        codeString.AppendLine(string.Format("{0}=default({1});", parameters[i].Name, this.GetProxyParameterName(parameters[i])));
            //                    }
            //                }
            //                codeString.AppendLine("}");
            //            }
            //        }

            //        if (rpcMethod.HasReturn)
            //        {
            //            codeString.AppendLine("return returnData;");
            //        }

            //        codeString.AppendLine("}");
            //    }

            //    //以下生成异步
            //    if (this.GeneratorFlag.HasFlag(CodeGeneratorFlag.InstanceAsync))
            //    {
            //        codeString.AppendLine("///<summary>");
            //        codeString.AppendLine($"///{description}");
            //        codeString.AppendLine("///</summary>");
            //        if (rpcMethod.HasReturn && (!isOut && !isRef))
            //        {
            //            codeString.Append("public async ");
            //        }
            //        else
            //        {
            //            codeString.Append("public ");
            //        }
            //        codeString.Append(this.GetReturn(rpcMethod, true));
            //        codeString.Append(' ');
            //        codeString.Append(this.GetMethodName(rpcMethod, true));
            //        codeString.Append('(');//方法参数

            //        for (var i = 0; i < parametersStr.Count; i++)
            //        {
            //            if (i > 0)
            //            {
            //                codeString.Append(',');
            //            }
            //            codeString.Append(parametersStr[i]);
            //        }
            //        if (parametersStr.Count > 0)
            //        {
            //            codeString.Append(',');
            //        }
            //        codeString.Append(this.GetInvokeOption());
            //        codeString.AppendLine(")");

            //        codeString.AppendLine("{");//方法开始

            //        codeString.AppendLine("if(Client==null)");
            //        codeString.AppendLine("{");
            //        codeString.AppendLine("throw new RpcException(\"IRpcClient为空，请先初始化或者进行赋值\");");
            //        codeString.AppendLine("}");

            //        if (parametersStr.Count > 0)
            //        {
            //            codeString.Append($"object[] parameters = new object[]");
            //            codeString.Append('{');

            //            foreach (var parameter in parameters)
            //            {
            //                if (parameter.ParameterType.Name.Contains("&") && parameter.IsOut)
            //                {
            //                    codeString.Append($"default({this.GetProxyParameterName(parameter)})");
            //                }
            //                else
            //                {
            //                    codeString.Append(parameter.Name);
            //                }
            //                if (parameter != parameters[parameters.Length - 1])
            //                {
            //                    codeString.Append(',');
            //                }
            //            }
            //            codeString.AppendLine("};");

            //            if (isOut || isRef)
            //            {
            //                codeString.Append($"Type[] types = new Type[]");
            //                codeString.Append('{');
            //                foreach (var parameter in parameters)
            //                {
            //                    codeString.Append($"typeof({this.GetProxyParameterName(parameter)})");
            //                    if (parameter != parameters[parameters.Length - 1])
            //                    {
            //                        codeString.Append(',');
            //                    }
            //                }
            //                codeString.AppendLine("};");
            //            }
            //        }

            //        if (rpcMethod.HasReturn)
            //        {
            //            if (parametersStr.Count == 0)
            //            {
            //                codeString.Append(string.Format("return ({0}) await Client.InvokeAsync", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append('(');
            //                codeString.Append(string.Format("typeof({0}),", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption, null);");
            //            }
            //            else if (isOut || isRef)
            //            {
            //                codeString.Append(string.Format("{0} returnData=({0})Client.Invoke", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append('(');
            //                codeString.Append(string.Format("typeof({0}),", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption,ref parameters,types);");
            //            }
            //            else
            //            {
            //                codeString.Append(string.Format("return ({0}) await Client.InvokeAsync", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append('(');
            //                codeString.Append(string.Format("typeof({0}),", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption, parameters);");
            //            }
            //        }
            //        else
            //        {
            //            if (parametersStr.Count == 0)
            //            {
            //                codeString.Append("return Client.InvokeAsync(");
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption, null);");
            //            }
            //            else if (isOut || isRef)
            //            {
            //                codeString.Append("Client.Invoke(");
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption,ref parameters,types);");
            //            }
            //            else
            //            {
            //                codeString.Append("return Client.InvokeAsync(");
            //                codeString.Append($"\"{this.GetInvokenKey(rpcMethod)}\"");
            //                codeString.AppendLine(",invokeOption, parameters);");
            //            }
            //        }

            //        if (isOut || isRef)
            //        {
            //            codeString.AppendLine("if(parameters!=null)");
            //            codeString.AppendLine("{");
            //            for (var i = 0; i < parameters.Length; i++)
            //            {
            //                codeString.AppendLine(string.Format("{0}=({1})parameters[{2}];", parameters[i].Name, this.GetProxyParameterName(parameters[i]), i));
            //            }
            //            codeString.AppendLine("}");
            //            if (isOut)
            //            {
            //                codeString.AppendLine("else");
            //                codeString.AppendLine("{");
            //                for (var i = 0; i < parameters.Length; i++)
            //                {
            //                    if (parameters[i].IsOut)
            //                    {
            //                        codeString.AppendLine(string.Format("{0}=default({1});", parameters[i].Name, this.GetProxyParameterName(parameters[i])));
            //                    }
            //                }
            //                codeString.AppendLine("}");
            //            }
            //        }

            //        if (isOut || isRef)
            //        {
            //            if (rpcMethod.HasReturn)
            //            {
            //                codeString.AppendLine(string.Format("return Task.FromResult<{0}>(returnData);", this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)));
            //            }
            //            else
            //            {
            //                codeString.AppendLine(string.Format("return  EasyTask.CompletedTask;"));
            //            }
            //        }
            //        codeString.AppendLine("}");
            //    }

            //    return codeString.ToString();
        }

        /// <summary>
        /// 获取接口的代理代码
        /// </summary>
        /// <param name="rpcMethod"></param>
        /// <returns></returns>
        public virtual string GetInterfaceProxyCode(RpcMethod rpcMethod)
        {
            var codeString = new StringBuilder();
            var description = this.GetDescription(rpcMethod);
            var parameters = this.GetParameters(rpcMethod, out _, out _, out _);
            if (this.GeneratorFlag.HasFlag(CodeGeneratorFlag.InterfaceSync))
            {
                codeString.AppendLine("///<summary>");
                codeString.AppendLine($"///{description}");
                codeString.AppendLine("///</summary>");
                foreach (var item in this.Exceptions)
                {
                    codeString.AppendLine($"/// <exception cref=\"{item.Key.FullName}\">{item.Value}</exception>");
                }

                codeString.Append(this.GetReturn(rpcMethod, false));
                codeString.Append(' ');
                codeString.Append(this.GetMethodName(rpcMethod, false));
                codeString.Append('(');//方法参数
                for (var i = 0; i < parameters.Count; i++)
                {
                    if (i > 0)
                    {
                        codeString.Append(',');
                    }
                    codeString.Append(parameters[i]);
                }
                if (parameters.Count > 0)
                {
                    codeString.Append(',');
                }
                codeString.Append(this.GetInvokeOption());
                codeString.AppendLine(");");
            }

            if (this.GeneratorFlag.HasFlag(CodeGeneratorFlag.InterfaceAsync))
            {
                codeString.AppendLine("///<summary>");
                codeString.AppendLine($"///{description}");
                codeString.AppendLine("///</summary>");
                foreach (var item in this.Exceptions)
                {
                    codeString.AppendLine($"/// <exception cref=\"{item.Key.FullName}\">{item.Value}</exception>");
                }

                codeString.Append(this.GetReturn(rpcMethod, true));
                codeString.Append(' ');
                codeString.Append(this.GetMethodName(rpcMethod, true));
                codeString.Append('(');//方法参数

                for (var i = 0; i < parameters.Count; i++)
                {
                    if (i > 0)
                    {
                        codeString.Append(',');
                    }
                    codeString.Append(parameters[i]);
                }
                if (parameters.Count > 0)
                {
                    codeString.Append(',');
                }
                codeString.Append(this.GetInvokeOption());
                codeString.AppendLine(");");
            }

            return codeString.ToString();
        }

        /// <summary>
        /// 获取调用键
        /// </summary>
        /// <param name="rpcMethod"></param>
        /// <returns></returns>
        public virtual string GetInvokenKey(RpcMethod rpcMethod)
        {
            if (this.MethodInvoke)
            {
                return this.GetMethodName(rpcMethod, false);
            }
            else
            {
                return !this.InvokeKey.IsNullOrEmpty() ? this.InvokeKey : $"{rpcMethod.ServerFromType.FullName}.{rpcMethod.Name}".ToLower();
            }
        }

        /// <summary>
        /// 获取调用配置
        /// </summary>
        /// <returns></returns>
        public virtual string GetInvokeOption()
        {
            return "IInvokeOption invokeOption = default";
        }

        /// <summary>
        /// 获取生成的函数名称
        /// </summary>
        /// <param name="rpcMethod"></param>
        /// <param name="isAsync"></param>
        /// <returns></returns>
        public virtual string GetMethodName(RpcMethod rpcMethod, bool isAsync)
        {
            var name = string.IsNullOrEmpty(this.MethodName) ? rpcMethod.Name : this.MethodName.Format(rpcMethod.Name);
            return isAsync ? name + "Async" : name;
        }

        /// <summary>
        /// 获取参数生成
        /// </summary>
        /// <param name="rpcMethod"></param>
        /// <param name="isOut"></param>
        /// <param name="isRef"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        public virtual List<string> GetParameters(RpcMethod rpcMethod, out bool isOut, out bool isRef, out ParameterInfo[] parameters)
        {
            var list = new List<string>();
            isOut = false;
            isRef = false;

            parameters = rpcMethod.GetNormalParameters().Select(a => a.ParameterInfo).ToArray();

            for (var i = 0; i < parameters.Length; i++)
            {
                var codeString = new StringBuilder();
                if (parameters[i].ParameterType.Name.Contains("&"))
                {
                    if (parameters[i].IsOut)
                    {
                        isOut = true;
                        codeString.Append(string.Format("out {0} {1}", this.GetProxyParameterName(parameters[i]), parameters[i].Name));
                    }
                    else
                    {
                        isRef = true;
                        codeString.Append(string.Format("ref {0} {1}", this.GetProxyParameterName(parameters[i]), parameters[i].Name));
                    }
                }
                else
                {
                    codeString.Append(string.Format("{0} {1}", this.GetProxyParameterName(parameters[i]), parameters[i].Name));
                }

                if (parameters[i].HasDefaultValue)
                {
                    var defaultValue = parameters[i].DefaultValue;
                    if (defaultValue == null)
                    {
                        codeString.Append(string.Format("=null"));
                    }
                    else if (defaultValue.ToString() == string.Empty)
                    {
                        codeString.Append(string.Format("=\"\""));
                    }
                    else if (defaultValue.GetType() == typeof(string))
                    {
                        codeString.Append(string.Format("=\"{0}\"", defaultValue));
                    }
                    else if (defaultValue.GetType() == typeof(bool))
                    {
                        codeString.Append(string.Format("={0}", defaultValue.ToString().ToLower()));
                    }
                    else if (typeof(ValueType).IsAssignableFrom(defaultValue.GetType()))
                    {
                        codeString.Append(string.Format("={0}", defaultValue));
                    }
                }

                list.Add(codeString.ToString());
            }

            return list;
        }

        /// <summary>
        /// 从类型获取代理名
        /// </summary>
        /// <param name="parameterInfo"></param>
        /// <returns></returns>
        public virtual string GetProxyParameterName(ParameterInfo parameterInfo)
        {
            return this.ClassCodeGenerator.GetTypeFullName(parameterInfo);
        }

        /// <summary>
        /// 获取返回值
        /// </summary>
        /// <param name="rpcMethod"></param>
        /// <param name="isAsync"></param>
        /// <returns></returns>
        public virtual string GetReturn(RpcMethod rpcMethod, bool isAsync)
        {
            if (isAsync)
            {
                return rpcMethod.ReturnType == null ? "Task" : $"Task<{this.GetProxyParameterName(rpcMethod.Info.ReturnParameter)}>";
            }
            else
            {
                return rpcMethod.ReturnType == null ? "void" : this.GetProxyParameterName(rpcMethod.Info.ReturnParameter);
            }
        }

        internal void SetClassCodeGenerator(ClassCodeGenerator classCodeGenerator)
        {
            this.ClassCodeGenerator = classCodeGenerator;
        }
    }
}