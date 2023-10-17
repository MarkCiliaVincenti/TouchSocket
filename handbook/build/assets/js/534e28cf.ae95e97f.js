"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[1205],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),v=o,d=u["".concat(l,".").concat(v)]||u[v]||m[v]||c;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=v;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5139:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const c={id:"xmlrpcservice",title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1"},a=void 0,i={unversionedId:"xmlrpcservice",id:"version-1.3.9/xmlrpcservice",title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1",description:"\u5b9a\u4e49\u670d\u52a1",source:"@site/versioned_docs/version-1.3.9/xmlrpcservice.mdx",sourceDirName:".",slug:"/xmlrpcservice",permalink:"/touchsocket/docs/1.3.9/xmlrpcservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/xmlrpcservice.mdx",tags:[],version:"1.3.9",frontMatter:{id:"xmlrpcservice",title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1"},sidebar:"docs",previous:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/1.3.9/xmlrpcdescription"},next:{title:"\u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1",permalink:"/touchsocket/docs/1.3.9/callxmlrpc"}},l={},p=[{value:"\u5b9a\u4e49\u670d\u52a1",id:"\u5b9a\u4e49\u670d\u52a1",level:2},{value:"\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668",id:"\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668",level:2},{value:"\u6ce8\u518c\u3001\u53d1\u5e03\u670d\u52a1",id:"\u6ce8\u518c\u53d1\u5e03\u670d\u52a1",level:2}],s={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b9a\u4e49\u670d\u52a1"},"\u5b9a\u4e49\u670d\u52a1"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u7aef\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627f\u4e8e",(0,o.kt)("strong",{parentName:"p"},"ServerProvider"),"\u7c7b\uff08\u6216\u5b9e\u73b0IServerProvider\uff09\uff0c\u7136\u540e\u5728\u8be5\u7c7b\u4e2d\u5199",(0,o.kt)("strong",{parentName:"p"},"\u516c\u5171\u65b9\u6cd5"),"\uff0c\u5e76\u7528",(0,o.kt)("strong",{parentName:"p"},"XmlRpc"),"\u5c5e\u6027\u6807\u7b7e\u6807\u8bb0\uff0c\u5982\u679c\u65b9\u6cd5\u6709",(0,o.kt)("strong",{parentName:"p"},"\u91cd\u8f7d"),"\uff0c\u9700\u8981\u91cd\u65b0\u6307\u5b9a",(0,o.kt)("strong",{parentName:"p"},"\u51fd\u6570\u952e"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7406\u751f\u6210",(0,o.kt)("strong",{parentName:"li"},"\u6ce8\u91ca"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Server : ServerProvider\n{\n    [XmlRpc]\n    public int Sum(int a, int b)\n    {\n        return a + b;\n    }\n\n    [XmlRpc]\n    public int TestClass(MyClass myClass)\n    {\n        return myClass.A + myClass.B;\n    }\n}\n\npublic class MyClass\n{\n    public int A { get; set; }\n    public int B { get; set; }\n}\n\n")),(0,o.kt)("a",{name:"ai1L7"}),(0,o.kt)("h2",{id:"\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668"},"\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668"),(0,o.kt)("p",null,"\u670d\u52a1\u89e3\u6790\u5668\u662f\u5b9e\u9645\u7684\u670d\u52a1\u63a5\u6536\u3001\u89e6\u53d1\u3001\u8c03\u7528\u3001\u53cd\u9988\u7684\u5b9e\u9645\u8f7d\u4f53\uff0c\u901a\u4fd7\u6765\u8bf4\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},"\u901a\u4fe1\u670d\u52a1\u5668"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'static IRpcParser CreateXmlRpcRpcParser()\n{\n    HttpService service = new HttpService();\n\n    service.Setup(new RRQMConfig().UsePlugin()\n        .SetListenIPHosts(new IPHost[] { new IPHost(7706) }))\n        .Start();\n\n    return service.AddPlugin<XmlRpcParserPlugin>()\n         .SetProxyToken("RPC")\n         .SetXmlRpcUrl("/xmlRpc");\n}\n')),(0,o.kt)("a",{name:"iLCoX"}),(0,o.kt)("h2",{id:"\u6ce8\u518c\u53d1\u5e03\u670d\u52a1"},"\u6ce8\u518c\u3001\u53d1\u5e03\u670d\u52a1"),(0,o.kt)("p",null,"\u6dfb\u52a0\u89e3\u6790\u5668\uff08\u6dfb\u52a0\u65f6\u9700\u8981\u4ee5\u952e\u3001\u503c\u65b9\u5f0f\u6dfb\u52a0\uff0c\u65b9\u4fbf\u540e\u7eed\u67e5\u627e\uff09\uff0c\u7136\u540e",(0,o.kt)("inlineCode",{parentName:"p"},"\u6ce8\u518c\u670d\u52a1"),"\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{\n    RpcService rpcService = new RpcService();\n\n    //\u6dfb\u52a0\u89e3\u6790\u5668\uff0c\u89e3\u6790\u5668\u6839\u636e\u4f20\u8f93\u534f\u8bae\uff0c\u5e8f\u5217\u5316\u65b9\u5f0f\u7684\u4e0d\u540c\uff0c\u8c03\u7528RPC\u670d\u52a1\n    rpcService.AddRpcParser("xmlRpcParser ", CreateXmlRpcRpcParser());\n\n    //\u6ce8\u518c\u5f53\u524d\u7a0b\u5e8f\u96c6\u7684\u6240\u6709\u670d\u52a1\n    rpcService.RegisterAllServer();\n\n    //\u5206\u4eab\u4ee3\u7406\uff0c\u4ee3\u7406\u6587\u4ef6\u53ef\u901a\u8fc7RRQMTool\u8fdc\u7a0b\u83b7\u53d6\u3002\n    rpcService.ShareProxy(new IPHost(8848));\n\n    //\u6216\u8005\u76f4\u63a5\u672c\u5730\u5bfc\u51fa\u4ee3\u7406\u6587\u4ef6\u3002\n    //RpcProxyInfo proxyInfo = rpcService.GetProxyInfo(RpcType.RRQMRPC, "RPC");\n    //string codeString = CodeGenerator.ConvertToCode("RRQMProxy", proxyInfo.Codes);\n\n    Console.WriteLine("\u670d\u52a1\u5668\u5df2\u542f\u52a8");\n    Console.ReadKey();\n\n}\n')))}m.isMDXComponent=!0}}]);