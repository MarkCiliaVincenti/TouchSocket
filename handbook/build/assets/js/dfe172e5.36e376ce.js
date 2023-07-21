"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7016],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var c=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,c,r=function(e,n){if(null==e)return{};var t,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=c.createContext({}),i=function(e){var n=c.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=i(e.components);return c.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.createElement(c.Fragment,{},n)}},k=c.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),k=i(t),m=r,R=k["".concat(l,".").concat(m)]||k[m]||u[m]||o;return t?c.createElement(R,p(p({ref:n},s),{},{components:t})):c.createElement(R,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=k;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var i=2;i<o;i++)p[i]=t[i];return c.createElement.apply(null,p)}return c.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var c=t(7462),r=(t(7294),t(3905));const o={id:"createandcallrpc",title:"\u521b\u5efarpc\u670d\u52a1"},p=void 0,a={unversionedId:"createandcallrpc",id:"createandcallrpc",title:"\u521b\u5efarpc\u670d\u52a1",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/createandcallrpc.mdx",sourceDirName:".",slug:"/createandcallrpc",permalink:"/touchsocket/docs/createandcallrpc",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/createandcallrpc.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1676382772,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"createandcallrpc",title:"\u521b\u5efarpc\u670d\u52a1"},sidebar:"docs",previous:{title:"\u57fa\u7840\u529f\u80fd",permalink:"/touchsocket/docs/dmtpbase"},next:{title:"Rpc\u5927\u6570\u636e\u6d41\u5f0f\u4f20\u8f93",permalink:"/touchsocket/docs/rpcstream"}},l={},i=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u5b9a\u4e49\u670d\u52a1",id:"\u4e8c\u5b9a\u4e49\u670d\u52a1",level:2},{value:"\u4e09\u3001\u542f\u52a8Rpc\u670d\u52a1\u5668",id:"\u4e09\u542f\u52a8rpc\u670d\u52a1\u5668",level:2},{value:"\u56db\u3001\u8c03\u7528Rpc",id:"\u56db\u8c03\u7528rpc",level:2},{value:"4.1 \u76f4\u63a5\u8c03\u7528",id:"41-\u76f4\u63a5\u8c03\u7528",level:3},{value:"4.2\u3001\u4ee3\u7406\u8c03\u7528",id:"42\u4ee3\u7406\u8c03\u7528",level:2},{value:"\u4e94\u3001\u53cd\u5411Rpc",id:"\u4e94\u53cd\u5411rpc",level:2},{value:"5.1 \u5b9a\u4e49\u3001\u53d1\u5e03\u53cd\u5411RPC\u670d\u52a1",id:"51-\u5b9a\u4e49\u53d1\u5e03\u53cd\u5411rpc\u670d\u52a1",level:3},{value:"5.2 \u8c03\u7528\u53cd\u5411RPC",id:"52-\u8c03\u7528\u53cd\u5411rpc",level:3},{value:"5.2.1 \u901a\u8fc7\u670d\u52a1\u5668\u76f4\u63a5\u83b7\u53d6",id:"521-\u901a\u8fc7\u670d\u52a1\u5668\u76f4\u63a5\u83b7\u53d6",level:3},{value:"5.2.2 \u901a\u8fc7\u8c03\u7528\u4e0a\u4e0b\u6587\u83b7\u53d6",id:"522-\u901a\u8fc7\u8c03\u7528\u4e0a\u4e0b\u6587\u83b7\u53d6",level:4},{value:"\u516d\u3001\u5ba2\u6237\u7aef\u4e92Call RPC",id:"\u516d\u5ba2\u6237\u7aef\u4e92call-rpc",level:2},{value:"6.1 \u4e92Call RPC",id:"61-\u4e92call-rpc",level:3}],s={toc:i};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,c.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"RPC\uff08Remote Procedure Call\uff09\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\u534f\u8bae\uff0c\u4e00\u79cd\u901a\u8fc7\u7f51\u7edc\u4ece\u8fdc\u7a0b\u8ba1\u7b97\u673a\u4e0a\u8bf7\u6c42\u670d\u52a1\uff0c\u800c\u4e0d\u9700\u8981\u4e86\u89e3\u5e95\u5c42\u7f51\u7edc\u6280\u672f\u7684\u534f\u8bae\u3002RPC\u5b83\u5047\u5b9a\u67d0\u4e9b\u534f\u8bae\u7684\u5b58\u5728\uff0c\u4f8b\u5982TPC/UDP\u7b49\uff0c\u4e3a\u901a\u4fe1\u7a0b\u5e8f\u4e4b\u95f4\u643a\u5e26\u4fe1\u606f\u6570\u636e\u3002\u5728OSI\u7f51\u7edc\u4e03\u5c42\u6a21\u578b\u4e2d\uff0cRPC\u8de8\u8d8a\u4e86\u4f20\u8f93\u5c42\u548c\u5e94\u7528\u5c42\uff0cRPC\u4f7f\u5f97\u5f00\u53d1\uff0c\u5305\u62ec\u7f51\u7edc\u5206\u5e03\u5f0f\u591a\u7a0b\u5e8f\u5728\u5185\u7684\u5e94\u7528\u7a0b\u5e8f\u66f4\u52a0\u5bb9\u6613\u3002"),(0,r.kt)("p",null,"\u8fc7\u7a0b\u662f\u4ec0\u4e48\uff1f \u8fc7\u7a0b\u5c31\u662f\u4e1a\u52a1\u5904\u7406\u3001\u8ba1\u7b97\u4efb\u52a1\uff0c\u66f4\u76f4\u767d\u7684\u8bf4\uff0c\u5c31\u662f\u7a0b\u5e8f\uff0c\u5c31\u662f\u60f3\u8c03\u7528\u672c\u5730\u65b9\u6cd5\u4e00\u6837\u8c03\u7528\u8fdc\u7a0b\u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("p",null,"TouchRpc\u652f\u6301\u670d\u52a1\u5668\u4e0e\u5ba2\u6237\u7aef\u4e92\u76f8\u8c03\u7528\uff0c\u4e5f\u652f\u6301\u5ba2\u6237\u7aef\u4e4b\u95f4\u76f8\u4e92\u8c03\u7528\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u5b9a\u4e49\u670d\u52a1"},"\u4e8c\u3001\u5b9a\u4e49\u670d\u52a1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("strong",{parentName:"li"},"\u88ab\u8c03\u7528"),"\u7aef\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7c7b\u540d\u4e3a",(0,r.kt)("strong",{parentName:"li"},"MyRpcServer"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7ee7\u627f\u4e8eRpcServer\u7c7b\u3001\u6216\u5b9e\u73b0IRpcServer\u3002\u4ea6\u6216\u8005\u5c06\u670d\u52a1\u5668\u58f0\u660e\u4e3a",(0,r.kt)("strong",{parentName:"li"},"\u77ac\u65f6\u751f\u547d"),"\u7684\u670d\u52a1\uff0c\u7ee7\u627fTransientRpcServer\u3001\u6216ITransientRpcServer\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u8be5\u7c7b\u4e2d\u5199",(0,r.kt)("strong",{parentName:"li"},"\u516c\u5171\u65b9\u6cd5"),"\uff0c\u5e76\u7528",(0,r.kt)("strong",{parentName:"li"},"TouchRpc"),"\u5c5e\u6027\u6807\u7b7e\u6807\u8bb0\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyRpcServer : RpcServer\n{\n    [Description("\u767b\u5f55")]//\u670d\u52a1\u63cf\u8ff0\uff0c\u5728\u751f\u6210\u4ee3\u7406\u65f6\uff0c\u4f1a\u53d8\u6210\u6ce8\u91ca\u3002\n    [TouchRpc("Login")]//\u670d\u52a1\u6ce8\u518c\u7684\u51fd\u6570\u952e\uff0c\u6b64\u5904\u4e3a\u663e\u5f0f\u6307\u5b9a\u3002\u9ed8\u8ba4\u4e0d\u4f20\u53c2\u7684\u65f6\u5019\uff0c\u4e3a\u8be5\u51fd\u6570\u7c7b\u5168\u540d+\u65b9\u6cd5\u540d\u7684\u5168\u5c0f\u5199\u3002\n    public bool Login(string account,string password)\n    {\n        if (account=="123"&&password=="abc")\n        {\n            return true;\n        }\n\n        return false;\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyRpcServer : TransientRpcServer\n{\n    [Description("\u767b\u5f55")]//\u670d\u52a1\u63cf\u8ff0\uff0c\u5728\u751f\u6210\u4ee3\u7406\u65f6\uff0c\u4f1a\u53d8\u6210\u6ce8\u91ca\u3002\n    [TouchRpc("Login")]//\u670d\u52a1\u6ce8\u518c\u7684\u51fd\u6570\u952e\uff0c\u6b64\u5904\u4e3a\u663e\u5f0f\u6307\u5b9a\u3002\u9ed8\u8ba4\u4e0d\u4f20\u53c2\u7684\u65f6\u5019\uff0c\u4e3a\u8be5\u51fd\u6570\u7c7b\u5168\u540d+\u65b9\u6cd5\u540d\u7684\u5168\u5c0f\u5199\u3002\n    public bool Login(string account,string password)\n    {\n        if (account=="123"&&password=="abc")\n        {\n            return true;\n        }\n\n        return false;\n    }\n}\n')),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u77ac\u65f6\u751f\u547d"),"\u7684\u670d\u52a1\uff0c\u6700\u5927\u7684\u7279\u70b9\u5c31\u662f\uff0c\u6bcf\u4e2a\u8bf7\u6c42\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u670d\u52a1\u7c7b\u5bf9\u8c61\u3002\u7136\u540e\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("strong",{parentName:"p"},"this.CallContext"),"\u76f4\u63a5\u8bbf\u95ee\u5f53\u524d\u7684\u8c03\u7528\u4e0a\u4e0b\u6587\u3002")),(0,r.kt)("h2",{id:"\u4e09\u542f\u52a8rpc\u670d\u52a1\u5668"},"\u4e09\u3001\u542f\u52a8Rpc\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4ec5\u793a\u4f8b\u57fa\u4e8eTcp\u534f\u8baeTouchRpc\u3002\u5176\u4ed6\u534f\u8bae\u7684\u670d\u52a1\u5668\u8bf7\u770b",(0,r.kt)("a",{parentName:"p",href:"/touchsocket/docs/createdmtpservice"},"\u521b\u5efaTouchRpc\u670d\u52a1\u5668")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var service =new  TcpTouchRpcService();\nTouchSocketConfig config=  new TouchSocketConfig()//\u914d\u7f6e\n       .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n       .ConfigureRpcStore(a=> \n       {\n           a.RegisterServer<MyRpcServer>();//\u6ce8\u518c\u670d\u52a1\n       })\n       .SetVerifyToken("TouchRpc");\n\nservice.Setup(config)\n    .Start();\n\nservice.Logger.Info($"{service.GetType().Name}\u5df2\u542f\u52a8");\n')),(0,r.kt)("h2",{id:"\u56db\u8c03\u7528rpc"},"\u56db\u3001\u8c03\u7528Rpc"),(0,r.kt)("h3",{id:"41-\u76f4\u63a5\u8c03\u7528"},"4.1 \u76f4\u63a5\u8c03\u7528"),(0,r.kt)("p",null,"\u76f4\u63a5\u8c03\u7528\uff0c\u5219\u662f\u4e0d\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4ee3\u7406"),"\uff0c\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"\u76f4\u63a5Call Rpc\uff0c\u4f7f\u7528\u6bd4\u8f83\u7b80\u5355\u3002"),(0,r.kt)("p",null,"\u4e0b\u5217\u4ee5TcpTouchRpcClient\u4e3a\u4f8b\uff0c\u5176\u4ed6\u5ba2\u6237\u7aef\u4e00\u6a21\u4e00\u6837\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpTouchRpcClient client = new TcpTouchRpcClient();\nclient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("127.0.0.1:7789")\n    .SetVerifyToken("TouchRpc"));\nclient.Connect();\n\n//\u76f4\u63a5\u8c03\u7528\u65f6\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8c03\u7528\u952e\n//\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u8c03\u7528\u914d\u7f6e\u53c2\u6570\uff0c\u53ef\u8bbe\u7f6e\u8c03\u7528\u8d85\u65f6\u65f6\u95f4\uff0c\u53d6\u6d88\u8c03\u7528\u7b49\u529f\u80fd\u3002\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684\u9884\u8bbe\uff0c\u5b9e\u9645\u4e0a\u53ef\u4ee5\u81ea\u884cnew InvokeOption();\n//\u540e\u7eed\u53c2\u6570\u4e3a\u8c03\u7528\u53c2\u6570\u3002\n//\u6cdb\u578b\u4e3a\u8fd4\u56de\u503c\u7c7b\u578b\u3002\nbool result = client.Invoke<bool>("Login", InvokeOption.WaitInvoke, 123, "abc");\n')),(0,r.kt)("h2",{id:"42\u4ee3\u7406\u8c03\u7528"},"4.2\u3001\u4ee3\u7406\u8c03\u7528"),(0,r.kt)("p",null,"\u4ee3\u7406\u8c03\u7528\u7684\u4fbf\u6377\u5728\u4e8e\uff0c\u5ba2\u6237\u7aef\u4e0d\u7528\u518d\u77e5\u9053\u54ea\u4e9b\u670d\u52a1\u53ef\u8c03\uff0c\u4e5f\u4e0d\u7528\u518d\u7ea0\u7ed3\u8c03\u7528\u7684\u53c2\u6570\u7c7b\u578b\u6b63\u4e0d\u6b63\u786e\uff0c\u56e0\u4e3a\u8fd9\u4e9b\uff0c\u4ee3\u7406\u5de5\u5177\u90fd\u4f1a\u66ff\u4f60\u505a\u597d\u3002"),(0,r.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/touchsocket/docs/generateproxydescription"},"\u751f\u6210\u4ee3\u7406\u6587\u4ef6")),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u751f\u6210\u7684cs\u6587\u4ef6\u6dfb\u52a0\u5230\u8c03\u7528\u7aef\u4e00\u8d77\u7f16\u8bd1\u3002")),(0,r.kt)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u793a\u4f8b\uff0c\u4f1a\u751f\u6210\u4e0b\u5217\u4ee3\u7406\u4ee3\u7801\u3002")),(0,r.kt)("p",null,"\u3010\u751f\u6210\u7684\u4ee3\u7406\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using TouchSocket.Rpc;\nusing System.Threading.Tasks;\nnamespace RpcProxy\n{\n    public interface IMyRpcServer : IRemoteServer\n    {\n        ///<summary>\n        ///\u767b\u5f55\n        ///</summary>\n        /// <exception cref="System.TimeoutException">\u8c03\u7528\u8d85\u65f6</exception>\n        /// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc\u8c03\u7528\u5f02\u5e38</exception>\n        /// <exception cref="System.Exception">\u5176\u4ed6\u5f02\u5e38</exception>\n        System.Boolean Login(System.String account, System.String password, IInvokeOption invokeOption = default);\n        ///<summary>\n        ///\u767b\u5f55\n        ///</summary>\n        /// <exception cref="System.TimeoutException">\u8c03\u7528\u8d85\u65f6</exception>\n        /// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc\u8c03\u7528\u5f02\u5e38</exception>\n        /// <exception cref="System.Exception">\u5176\u4ed6\u5f02\u5e38</exception>\n        Task<System.Boolean> LoginAsync(System.String account, System.String password, IInvokeOption invokeOption = default);\n\n    }\n    public class MyRpcServer : IMyRpcServer\n    {\n        public MyRpcServer(IRpcClient client)\n        {\n            this.Client = client;\n        }\n        public IRpcClient Client { get; private set; }\n        ///<summary>\n        ///\u767b\u5f55\n        ///</summary>\n        /// <exception cref="System.TimeoutException">\u8c03\u7528\u8d85\u65f6</exception>\n        /// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc\u8c03\u7528\u5f02\u5e38</exception>\n        /// <exception cref="System.Exception">\u5176\u4ed6\u5f02\u5e38</exception>\n        public System.Boolean Login(System.String account, System.String password, IInvokeOption invokeOption = default)\n        {\n            if (Client == null)\n            {\n                throw new RpcException("IRpcClient\u4e3a\u7a7a\uff0c\u8bf7\u5148\u521d\u59cb\u5316\u6216\u8005\u8fdb\u884c\u8d4b\u503c");\n            }\n            if (Client.TryCanInvoke?.Invoke(Client) == false)\n            {\n                throw new RpcException("Rpc\u65e0\u6cd5\u6267\u884c\u3002");\n            }\n            object[] parameters = new object[] { account, password };\n            System.Boolean returnData = Client.Invoke<System.Boolean>("Login", invokeOption, parameters);\n            return returnData;\n        }\n        ///<summary>\n        ///\u767b\u5f55\n        ///</summary>\n        public Task<System.Boolean> LoginAsync(System.String account, System.String password, IInvokeOption invokeOption = default)\n        {\n            if (Client == null)\n            {\n                throw new RpcException("IRpcClient\u4e3a\u7a7a\uff0c\u8bf7\u5148\u521d\u59cb\u5316\u6216\u8005\u8fdb\u884c\u8d4b\u503c");\n            }\n            if (Client.TryCanInvoke?.Invoke(Client) == false)\n            {\n                throw new RpcException("Rpc\u65e0\u6cd5\u6267\u884c\u3002");\n            }\n            object[] parameters = new object[] { account, password };\n            return Client.InvokeAsync<System.Boolean>("Login", invokeOption, parameters);\n        }\n    }\n    public static class MyRpcServerExtensions\n    {\n        ///<summary>\n        ///\u767b\u5f55\n        ///</summary>\n        /// <exception cref="System.TimeoutException">\u8c03\u7528\u8d85\u65f6</exception>\n        /// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc\u8c03\u7528\u5f02\u5e38</exception>\n        /// <exception cref="System.Exception">\u5176\u4ed6\u5f02\u5e38</exception>\n        public static System.Boolean Login<TClient>(this TClient client, System.String account, System.String password, IInvokeOption invokeOption = default) where TClient :\n        TouchSocket.Rpc.IRpcClient\n        {\n            if (client.TryCanInvoke?.Invoke(client) == false)\n            {\n                throw new RpcException("Rpc\u65e0\u6cd5\u6267\u884c\u3002");\n            }\n            object[] parameters = new object[] { account, password };\n            System.Boolean returnData = client.Invoke<System.Boolean>("Login", invokeOption, parameters);\n            return returnData;\n        }\n        ///<summary>\n        ///\u767b\u5f55\n        ///</summary>\n        public static Task<System.Boolean> LoginAsync<TClient>(this TClient client, System.String account, System.String password, IInvokeOption invokeOption = default) where TClient :\n        TouchSocket.Rpc.IRpcClient\n        {\n            if (client.TryCanInvoke?.Invoke(client) == false)\n            {\n                throw new RpcException("Rpc\u65e0\u6cd5\u6267\u884c\u3002");\n            }\n            object[] parameters = new object[] { account, password };\n            return client.InvokeAsync<System.Boolean>("Login", invokeOption, parameters);\n        }\n    }\n}\n\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee3\u7406\u6269\u5c55\u76f4\u63a5\u8c03\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpTouchRpcClient client = new TcpTouchRpcClient();\nclient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("127.0.0.1:7789")\n    .SetVerifyToken("TouchRpc"));\nclient.Connect();\n\nbool result = client.Login(123, "abc");//Login\u662f\u6269\u5c55\u65b9\u6cd5\u3002\u53ef\u80fd\u9700\u8981\u989d\u5916\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4\u3002\n')),(0,r.kt)("h2",{id:"\u4e94\u53cd\u5411rpc"},"\u4e94\u3001\u53cd\u5411Rpc"),(0,r.kt)("p",null,"\u4e00\u822c\u7684rpc\u670d\u52a1\u90fd\u662f\u5ba2\u6237\u7aef\u53d1\u8d77\uff0c\u670d\u52a1\u5668\u54cd\u5e94\u3002\u4f46\u662f\u6709\u65f6\u5019\u4e5f\u9700\u8981\u670d\u52a1\u5668\u4e3b\u52a8\u8c03\u7528\u5ba2\u6237\u7aef\uff0c\u6240\u4ee5\u9700\u8981\u53cd\u5411rpc\u3002"),(0,r.kt)("h3",{id:"51-\u5b9a\u4e49\u53d1\u5e03\u53cd\u5411rpc\u670d\u52a1"},"5.1 \u5b9a\u4e49\u3001\u53d1\u5e03\u53cd\u5411RPC\u670d\u52a1"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u6240\u6709\u7684Rpc\u5ba2\u6237\u7aef\uff08",(0,r.kt)("strong",{parentName:"p"},"TcpTouchRpcClient"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"UdpTouchRpc"),"\uff08\u4e0d\u533a\u5206\u5ba2\u6237\u7aef\uff09\u3001",(0,r.kt)("strong",{parentName:"p"},"HttpTouchRpcClient"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"WSTouchRpcClient"),"\uff09\u4e5f\u5b9e\u73b0\u4e86",(0,r.kt)("strong",{parentName:"p"},"IRpcParser"),"\u63a5\u53e3\uff0c\u8fd9\u610f\u5473\u7740\u53cd\u5411RPC\u5176\u5b9e",(0,r.kt)("strong",{parentName:"p"},"\u4e5f\u662fRPC"),"\uff0c\u6240\u4ee5\uff0c\u6240\u6709\u64cd\u4f5c\u4e00\u6a21\u4e00\u6837\u3002\u56e0\u4e3a\u5f53\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u5efa\u7acb\u8fde\u63a5\u4ee5\u540e\uff0c\u5c31\u4e0d\u518d\u533a\u5206\u8c01\u662f\u5ba2\u6237\u7aef\uff0c\u8c01\u662f\u670d\u52a1\u5668\u4e86\u3002\u53ea\u5173\u5fc3\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u8c01\u80fd\u63d0\u4f9b\u670d\u52a1\uff0c\u8c01\u5728\u8c03\u7528\u670d\u52a1"),"\u3002"),(0,r.kt)("p",null,"\u4e0b\u5217\u5c31\u4ee5\u7b80\u5355\u7684\u793a\u4f8b\u4e0b\uff0c\u7531\u5ba2\u6237\u7aef\u58f0\u660e\u670d\u52a1\uff0c\u670d\u52a1\u5668\u8c03\u7528\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("strong",{parentName:"li"},"\u5ba2\u6237\u7aef\u9879\u76ee"),"\u4e2d\u5b9a\u4e49\u670d\u52a1"),(0,r.kt)("li",{parentName:"ol"},"\u7528",(0,r.kt)("strong",{parentName:"li"},"TouchRpc"),"\u6807\u8bb0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ReverseCallbackServer : RpcServer\n{\n    [TouchRpc]\n    public string SayHello(string name)\n    {\n        return $"{name},hi";\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u3010\u5ba2\u6237\u7aef\u53d1\u5e03\u670d\u52a1\u3011"),"\n\u53d1\u5e03\u670d\u52a1\uff0c\u5b9e\u9645\u4e0a\u662f\u8ba9TcpTouchRpcClient\u4e5f\u62e5\u6709\u63d0\u4f9bRPC\u7684\u80fd\u529b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpTouchRpcClient client = new TcpTouchRpcClient();\nclient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("127.0.0.1:7789")\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n        a.AddFileLogger();\n    })\n    .ConfigureRpcStore(a =>\n    {\n        a.RegisterServer<ReverseCallbackServer>();\n    })\n    .SetVerifyToken("TouchRpc"));\nclient.Connect();\n')),(0,r.kt)("h3",{id:"52-\u8c03\u7528\u53cd\u5411rpc"},"5.2 \u8c03\u7528\u53cd\u5411RPC"),(0,r.kt)("p",null,"\u670d\u52a1\u5668\u56de\u8c03\u5ba2\u6237\u7aef\uff0c\u6700\u7ec8\u5fc5\u987b\u901a\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u8f85\u52a9\u7c7b\u5ba2\u6237\u7aef"),"\uff08ISocketClient\u7684\u6d3e\u751f\u7c7b\uff09\uff0c\u4ee5TcpTouchRpcService\u4e3a\u4f8b\uff0c\u5176\u8f85\u52a9\u5ba2\u6237\u7aef\u4e3aTcpTouchRpcSocketClient\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\uff0cTcpTouchRpcSocketClient\u5df2\u5b9e\u73b0IRpcClient\u63a5\u53e3\uff0c\u610f\u5473\u7740\uff0c\u53cd\u5411RPC\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u8c03\u7528\u3002\u6240\u6709\u7528\u6cd5\u548cRPC\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u4e0b\u5217\u793a\u4f8b\u4ee5TcpTouchRpcSocketClient\u4e3a\u4f8b\uff0c\u5176\u4f59\u4e00\u81f4\u3002"),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u53cd\u5411RPC\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u8c03\u7528\u3002\u6240\u6709\u7528\u6cd5\u548cRPC\u4e00\u81f4\u3002")),(0,r.kt)("h3",{id:"521-\u901a\u8fc7\u670d\u52a1\u5668\u76f4\u63a5\u83b7\u53d6"},"5.2.1 \u901a\u8fc7\u670d\u52a1\u5668\u76f4\u63a5\u83b7\u53d6"),(0,r.kt)("p",null,"\u53ef\u4ee5\u83b7\u53d6\u6240\u6709\u7ec8\u7aef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'foreach (var item in tcpTouchRpcService.GetClients())\n{\n    client.Logger.Info(item.Invoke<string>("ReverseRpcConsoleApp.ReverseCallbackServer.SayHello".ToLower(), InvokeOption.WaitInvoke, "\u5f20\u4e09"));\n}\n')),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5148\u7b5b\u9009ID\uff0c\u7136\u540e\u518d\u8c03\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string id = tcpTouchRpcService.GetIDs().FirstOrDefault(a => a.Equals("\u7279\u5b9aid"));\nif (tcpTouchRpcService.TryGetSocketClient(id, out var rpcSocketClient))\n{\n    rpcSocketClient.Invoke<string>("ReverseRpcConsoleApp.ReverseCallbackServer.SayHello".ToLower(), InvokeOption.WaitInvoke, "\u5f20\u4e09");\n}\n')),(0,r.kt)("h4",{id:"522-\u901a\u8fc7\u8c03\u7528\u4e0a\u4e0b\u6587\u83b7\u53d6"},"5.2.2 \u901a\u8fc7\u8c03\u7528\u4e0a\u4e0b\u6587\u83b7\u53d6"),(0,r.kt)("p",null,"\u5177\u4f53\u6b65\u9aa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u8c03\u7528\u4e0a\u4e0b\u6587"),(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u4e0b\u6587\u7684Caller\uff0c\u5373\u4e3a\u670d\u52a1\u5668\u8f85\u52a9\u7c7b\u7ec8\u7aef\uff0c\u8fdb\u884c\u5f3a\u8f6c\u5373\u53ef\u3002")),(0,r.kt)("h2",{id:"\u516d\u5ba2\u6237\u7aef\u4e92call-rpc"},"\u516d\u3001\u5ba2\u6237\u7aef\u4e92Call RPC"),(0,r.kt)("p",null,"\u9664\u4e86\u6b63\u5411RPC\uff0c\u53cd\u5411RPC\uff0cTouchRpc\u8fd8\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef"),"\u4e4b\u95f4\u4e92Call RPC\u3002\u670d\u52a1\u7684\u5b9a\u4e49\u4e0eRpc\u4e00\u6837\u3002"),(0,r.kt)("h3",{id:"61-\u4e92call-rpc"},"6.1 \u4e92Call RPC"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aefA\u8c03\u7528\u5ba2\u6237\u7aefB\u7684\u65b9\u6cd5\uff0c\u9700\u8981\u77e5\u9053\u5bf9\u65b9\u7684",(0,r.kt)("strong",{parentName:"p"},"ID"),"\u3002\u548c",(0,r.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d"),"\u3002\u7136\u540e\u4f7f\u7528\u4e0b\u5217\u51fd\u6570\u8c03\u7528\u5373\u53ef\u3002"),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e92Call RPC\u4e5f\u652f\u6301\u8c03\u7528\u4e0a\u4e0b\u6587\u3002")),(0,r.kt)("admonition",{title:"\u670d\u52a1\u5668\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5ba2\u6237\u7aef\u4e92Call\u7684\u65f6\u5019\uff0c\u6bcf\u4e2a\u8bf7\u6c42\uff0c\u90fd\u9700\u8981\u670d\u52a1\u540c\u610f\u8def\u7531\uff0c\u624d\u53ef\u4ee5\u88ab\u8f6c\u53d1\u3002\u6240\u4ee5\u670d\u52a1\u5668\u9700\u8981\u505a\u4e00\u4e9b\u5141\u8bb8\u64cd\u4f5c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"internal class MyTouchRpcPlugin : TouchRpcPluginBase\n{\n    protected override void OnRouting(ITouchRpc client, PackageRouterEventArgs e)\n    {\n        if (e.RouterType== RouteType.Rpc)\n        {\n            e.IsPermitOperation = true;\n        }\n        base.OnRouting(client, e);\n    }\n}\n")))}u.isMDXComponent=!0}}]);