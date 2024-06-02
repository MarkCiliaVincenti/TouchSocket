﻿using System;
using System.IO;
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Http;
using TouchSocket.Rpc;
using TouchSocket.Sockets;
using TouchSocket.WebApi;
using TouchSocket.WebApi.Swagger;

namespace WebApiServerApp
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var service = new HttpService();
            service.SetupAsync(new TouchSocketConfig()
               .SetListenIPHosts(7789)
               .ConfigureContainer(a =>
               {
                   a.AddRpcStore(store =>
                   {
                       store.RegisterServer<ApiServer>();//注册服务

#if DEBUG
                       //下列代码，会生成客户端的调用代码。
                       var codeString = store.GetProxyCodes("WebApiProxy", typeof(WebApiAttribute));
                       File.WriteAllText("../../../WebApiProxy.cs", codeString);
#endif
                   });

                   //添加跨域服务
                   //webapi中使用跨域时，可以不使用插件的UseCors。直接使用RpcFilter的Aop特性完成。即
                   a.AddCors(corsOption =>
                   {
                       //添加跨域策略，后续使用policyName即可应用跨域策略。
                       corsOption.Add("cors", corsBuilder =>
                       {
                           corsBuilder.AllowAnyMethod()
                               .AllowAnyOrigin();
                       });
                   });

                   a.AddLogger(logger =>
                   {
                       logger.AddConsoleLogger();
                       logger.AddFileLogger();
                   });
               })
               .ConfigurePlugins(a =>
               {
                   a.UseCheckClear();

                   a.Add<AuthenticationPlugin>();

                   a.UseWebApi()
                   .ConfigureConverter(converter =>
                   {
                       //配置转换器

                       //converter.Clear();//可以选择性的清空现有所有格式化器

                       //添加Json格式化器，可以自定义Json的一些设置
                       converter.AddJsonSerializerFormatter(new Newtonsoft.Json.JsonSerializerSettings() { Formatting = Newtonsoft.Json.Formatting.None });

                       //添加Xml格式化器
                       //converter.AddXmlSerializerFormatter();

                       //converter.Add(new MySerializerFormatter());
                   });

                   a.UseSwagger()//使用Swagger页面
                   .UseLaunchBrowser();//启动浏览器

                   //此插件是http的兜底插件，应该最后添加。作用是当所有路由不匹配时返回404.且内部也会处理Option请求。可以更好的处理来自浏览器的跨域探测。
                   a.UseDefaultHttpServicePlugin();
               }));
            service.StartAsync();

            Console.WriteLine("以下连接用于测试webApi");
            Console.WriteLine($"使用：http://127.0.0.1:7789/ApiServer/Sum?a=10&b=20");

            Console.ReadKey();
        }
    }

    public partial class ApiServer : RpcServer
    {
        private readonly ILog m_logger;

        public ApiServer(ILog logger)
        {
            this.m_logger = logger;
        }

        [EnableCors("cors")]//使用跨域
        [Router("[api]/[action]ab")]//此路由会以"/ApiServer/Sumab"实现
        [Router("[api]/[action]")]//此路由会以"/ApiServer/Sum"实现
        [WebApi(HttpMethodType.GET)]
        public int Sum(int a, int b)
        {
            return a + b;
        }

        [WebApi(HttpMethodType.GET)]
        public MyClass GetMyClass()
        {
            return new MyClass()
            {
                A = 1,
                B = 2
            };
        }

        [WebApi(HttpMethodType.POST)]
        public int TestPost(MyClass myClass)
        {
            return myClass.A + myClass.B;
        }

        /// <summary>
        /// 使用调用上下文，响应文件下载。
        /// </summary>
        /// <param name="callContext"></param>
        [WebApi(HttpMethodType.GET)]
        public async Task<string> DownloadFile(IWebApiCallContext callContext, string id)
        {
            if (id == "rrqm")
            {
                await callContext.HttpContext.Response.FromFileAsync(new FileInfo(@"D:\System\Windows.iso"), callContext.HttpContext.Request);
                return "ok";
            }
            return "id不正确。";
        }

        /// <summary>
        /// 使用调用上下文，获取实际请求体。
        /// </summary>
        /// <param name="callContext"></param>
        [WebApi(HttpMethodType.POST)]
        [Router("[api]/[action]")]
        public async Task<string> PostContent(IWebApiCallContext callContext)
        {
            if (callContext.Caller is IHttpSessionClient socketClient)
            {
                this.m_logger.Info($"IP:{socketClient.IP},Port:{socketClient.Port}");//获取Ip和端口
            }

            var content = await callContext.HttpContext.Request.GetContentAsync();
            this.m_logger.Info($"共计：{content.Length}");

            return "ok";
        }

        /// <summary>
        /// 使用调用上下文，上传多个小文件。
        /// </summary>
        /// <param name="callContext"></param>
        [WebApi(HttpMethodType.POST)]
        public Task<string> UploadMultiFile(IWebApiCallContext callContext, string id)
        {
            var formFiles = callContext.HttpContext.Request.GetMultifileCollection();
            if (formFiles != null)
            {
                foreach (var item in formFiles)
                {
                    Console.WriteLine($"fileName={item.FileName},name={item.Name}");

                    //写入实际数据
                    File.WriteAllBytes(item.FileName, item.Data.ToArray());
                }
            }
            return Task.FromResult("ok");
        }

        /// <summary>
        /// 使用调用上下文，上传大文件。
        /// </summary>
        /// <param name="callContext"></param>
        [WebApi(HttpMethodType.POST)]
        public async Task<string> UploadBigFile(IWebApiCallContext callContext)
        {
            using (var stream = File.Create("text.file"))
            {
                await callContext.HttpContext.Request.ReadCopyToAsync(stream);
            }
            Console.WriteLine("ok");
            return "ok";
        }
    }

    public class MyClass
    {
        public int A { get; set; }
        public int B { get; set; }
    }

    /// <summary>
    /// 鉴权插件
    /// </summary>
    internal class AuthenticationPlugin : PluginBase, IHttpPlugin
    {
        public async Task OnHttpRequest(IHttpSessionClient client, HttpContextEventArgs e)
        {
            //string aut = e.Context.Request.Headers["Authorization"];
            //if (aut.IsNullOrEmpty())//授权header为空
            //{
            //   await e.Context.Response
            //        .SetStatus(401, "授权失败")
            //        .AnswerAsync();
            //    return;
            //}

            //伪代码，假设使用jwt解码成功。那就执行下一个插件。
            //if (jwt.Encode(aut))
            //{
            //   此处可以做一些授权相关的。
            //}
            await e.InvokeNext();
        }
    }

    internal class MySerializerFormatter : ISerializerFormatter<string, HttpContext>
    {
        public int Order { get; set; }

        public bool TryDeserialize(HttpContext state, in string source, Type targetType, out object target)
        {
            //反序列化
            throw new NotImplementedException();
        }

        public bool TrySerialize(HttpContext state, in object target, out string source)
        {
            //序列化
            throw new NotImplementedException();
        }
    }

    class MyActionFilterAttribute : RpcActionFilterAttribute
    {
        public override Task<InvokeResult> ExecutedAsync(ICallContext callContext, object[] parameters, InvokeResult invokeResult, Exception exception)
        {
            Console.WriteLine(invokeResult.Message);
            return base.ExecutedAsync(callContext, parameters, invokeResult, exception);
        }
    }
}