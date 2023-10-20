"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[6877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},k),{},{components:n})):o.createElement(m,i({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={id:"rpcoption",title:"\u8c03\u7528\u914d\u7f6e"},i=void 0,p={unversionedId:"rpcoption",id:"version-1.3.9/rpcoption",title:"\u8c03\u7528\u914d\u7f6e",description:"\u4e00\u3001\u8c03\u7528\u53cd\u9988\u7c7b\u578b",source:"@site/versioned_docs/version-1.3.9/rpcoption.mdx",sourceDirName:".",slug:"/rpcoption",permalink:"/touchsocket/docs/1.3.9/rpcoption",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/rpcoption.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"rpcoption",title:"\u8c03\u7528\u914d\u7f6e"},sidebar:"docs",previous:{title:"Rpc\u5927\u6570\u636e\u6d41\u5f0f\u4f20\u8f93",permalink:"/touchsocket/docs/1.3.9/rpcstream"},next:{title:"\u5e8f\u5217\u5316\u9009\u62e9\u5668",permalink:"/touchsocket/docs/1.3.9/serializationselector"}},l={},c=[{value:"\u4e00\u3001\u8c03\u7528\u53cd\u9988\u7c7b\u578b",id:"\u4e00\u8c03\u7528\u53cd\u9988\u7c7b\u578b",level:2},{value:"1.1 \u4f7f\u7528",id:"11-\u4f7f\u7528",level:3},{value:"\u4e8c\u3001\u8c03\u7528\u8d85\u65f6\u8bbe\u7f6e",id:"\u4e8c\u8c03\u7528\u8d85\u65f6\u8bbe\u7f6e",level:2},{value:"2.1 \u8ba1\u65f6\u5668\u8bbe\u7f6e",id:"21-\u8ba1\u65f6\u5668\u8bbe\u7f6e",level:3},{value:"2.2 \u4efb\u52a1\u53d6\u6d88",id:"22-\u4efb\u52a1\u53d6\u6d88",level:3},{value:"2.3 \u670d\u52a1\u4efb\u52a1\u53d6\u6d88",id:"23-\u670d\u52a1\u4efb\u52a1\u53d6\u6d88",level:3}],k={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u8c03\u7528\u53cd\u9988\u7c7b\u578b"},"\u4e00\u3001\u8c03\u7528\u53cd\u9988\u7c7b\u578b"),(0,r.kt)("p",null,"RPC\u5728\u8c03\u7528\u65f6\uff0c\u7684\u8c03\u7528\u72b6\u6001\u6709\u4e09\u79cd\u72b6\u6001\u53ef\u9009\uff0c\u5206\u522b\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"OnlySend"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"WaitSend"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"WaitInvoke"),"\u3002\u533a\u522b\u662f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OnlySend"),(0,r.kt)("th",{parentName:"tr",align:null},"WaitSend"),(0,r.kt)("th",{parentName:"tr",align:null},"WaitInvoke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4ec5\u53d1\u9001RPC\u8bf7\u6c42\uff0c\u5728TCP\u5e95\u5c42\u534f\u8bae\u4e0b\uff0c\u80fd\u4fdd\u8bc1\u53d1\u9001\u6210\u529f\uff0c\u4f46\u662f\u4e0d\u53cd\u9988\u670d\u52a1\u5668",(0,r.kt)("strong",{parentName:"td"},"\u4efb\u4f55\u72b6\u6001"),"\uff0c\u4e5f\u4e0d\u4f1a\u53d6\u5f97",(0,r.kt)("strong",{parentName:"td"},"\u8fd4\u56de\u503c"),"\u3001",(0,r.kt)("strong",{parentName:"td"},"\u5f02\u5e38"),"\u7b49\u4fe1\u606f\u3002\u5728UDP\u5e95\u5c42\u534f\u8bae\u4e0b\uff0c\u4e0d\u4fdd\u8bc1\u53d1\u9001\u6210\u529f\uff0c\u4ec5\u4ec5\u662f\u5177\u6709\u8bf7\u6c42\u52a8\u4f5c\u800c\u5df2\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001RPC\u8bf7\u6c42\uff0c\u5e76\u4e14\u7b49\u5f85\u6536\u5230\u72b6\u6001\u8fd4\u56de\uff0c\u80fd\u4fdd\u8bc1RPC\u8bf7\u6c42\u987a\u5229\u5230\u8fbe\u670d\u52a1\uff0c\u4f46\u662f\u4e0d\u80fd\u5f97\u77e5RPC\u670d\u52a1\u662f\u5426\u6210\u529f\u6267\u884c\uff0c\u4e5f\u4e0d\u4f1a\u53d6\u5f97",(0,r.kt)("strong",{parentName:"td"},"\u8fd4\u56de\u503c"),"\u3001",(0,r.kt)("strong",{parentName:"td"},"\u5f02\u5e38"),"\u7b49\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001RPC\u8bf7\u6c42\uff0c\u4e14\u8fd4\u56de\u6240\u6709\u4fe1\u606f\uff0c\u5305\u62ec\u662f\u5426\u6210\u529f\u8c03\u7528\uff0c\u6267\u884c\u540e\u7684",(0,r.kt)("strong",{parentName:"td"},"\u8fd4\u56de\u503c"),"\u6216",(0,r.kt)("strong",{parentName:"td"},"\u5f02\u5e38"),"\u7b49\u4fe1\u606f\u3002")))),(0,r.kt)("h3",{id:"11-\u4f7f\u7528"},"1.1 \u4f7f\u7528"),(0,r.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5728InvokeOption\u4e2d\u53ef\u4ee5\u76f4\u63a5\u8d4b\u503c\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'InvokeOption invokeOption = new InvokeOption();\ninvokeOption.FeedbackType = FeedbackType.WaitInvoke;\n//invokeOption.FeedbackType = FeedbackType.OnlySend;\n//invokeOption.FeedbackType = FeedbackType.WaitSend;\nstring returnString = client.Invoke<string>("TestOne", invokeOption, "10");\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5047\u5982IInvokeOption\u4f7f\u7528\u7684\u662fInvokeOption\u7684\u8bdd\uff0c\u5728new\u7684\u65f6\u5019\uff0c\u5e94\u8be5\u5bf9\u5176\u4ed6\u53c2\u6570\u4e5f\u8fdb\u884c\u8bbe\u7f6e\uff08\u56e0\u4e3a\u5b83\u662f\u7ed3\u6784\u4f53\uff09\u3002")),(0,r.kt)("h2",{id:"\u4e8c\u8c03\u7528\u8d85\u65f6\u8bbe\u7f6e"},"\u4e8c\u3001\u8c03\u7528\u8d85\u65f6\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u8c03\u7528RPC\uff0c\u4e0d\u80fd\u65e0\u9650\u5236\u7b49\u5f85\uff0c\u5fc5\u987b\u8981\u6709\u8ba1\u65f6\u5668\uff0c\u6216\u8005\u4efb\u52a1\u53d6\u6d88\u7684\u529f\u80fd\u3002 ",(0,r.kt)("a",{name:"bt54x"})),(0,r.kt)("h3",{id:"21-\u8ba1\u65f6\u5668\u8bbe\u7f6e"},"2.1 \u8ba1\u65f6\u5668\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u76f4\u63a5\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"InvokeOption"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Timeout")," \u5c5e\u6027\u8d4b\u503c\u5373\u53ef\uff0c\u5355\u4f4d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u6beb\u79d2"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'InvokeOption invokeOption = new InvokeOption();\ninvokeOption.Timeout = 1000 * 10;//10\u79d2\u540e\u65e0\u53cd\u5e94\uff0c\u5219\u629b\u51faRRQMTimeoutException\u5f02\u5e38\nstring returnString = client.Invoke<string>("TestOne", invokeOption, "10");\n')),(0,r.kt)("h3",{id:"22-\u4efb\u52a1\u53d6\u6d88"},"2.2 \u4efb\u52a1\u53d6\u6d88"),(0,r.kt)("p",null,"\u5728RPC\u8c03\u7528\u65f6\uff0c\u8ba1\u65f6\u5668\u662f\u4e00\u4e2a\u597d\u7684\u9009\u62e9\uff0c\u4f46\u662f\u8fd8\u4e0d\u591f\u5b8c\u7f8e\uff0c\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u80fd\u624b\u52a8\u7ec8\u7ed3\u67d0\u4e2a\u8c03\u7528\u4efb\u52a1\u3002\u8fd9\u65f6\u5019\uff0c\u8ba1\u65f6\u5668\u5c31\u4e0d\u582a\u91cd\u4efb\uff0c\u9700\u8981\u80fd\u4e3b\u52a8\u53d6\u6d88\u4efb\u52a1\u7684\u529f\u80fd\u3002\u719f\u6089.net\u7684\u5c0f\u4f19\u4f34\u90fd\u77e5\u9053\uff0cCancellationToken\u662f\u5177\u5907\u8fd9\u4e2a\u529f\u80fd\u7684\u3002\u540c\u6837\u7684\uff0c\u53ea\u9700\u8981\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"InvokeOption"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"CancellationToken")," \u8d4b\u503c\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'InvokeOption invokeOption = new InvokeOption();\nCancellationTokenSource tokenSource = new CancellationTokenSource();\ninvokeOption.CancellationToken = tokenSource.Token;\n//tokenSource.Cancel();//\u8c03\u7528\u65f6\u53d6\u6d88\u4efb\u52a1\nstring returnString = client.Invoke<string>("TestOne", invokeOption, "10");\n')),(0,r.kt)("h3",{id:"23-\u670d\u52a1\u4efb\u52a1\u53d6\u6d88"},"2.3 \u670d\u52a1\u4efb\u52a1\u53d6\u6d88"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a7.2\u7684\u53d6\u6d88\u4efb\u52a1\uff0c\u4ec5\u4ec5\u80fd\u5b9e\u73b0\u8ba9\u5ba2\u6237\u7aef\u53d6\u6d88\u8bf7\u6c42\uff0c\u4f46\u662f\u670d\u52a1\u5668\u5e76\u4e0d\u77e5\u9053\uff0c\u5982\u679c\u60f3\u8ba9\u670d\u52a1\u5668\u4e5f\u611f\u77e5\u4efb\u52a1\u6d88\u606f\uff0c\u5c31\u5fc5\u987b\u4f9d\u6258\u4e8e\u8c03\u7528\u4e0a\u4e0b\u6587\u3002"),(0,r.kt)("p",null,"\u6b64\u5904\u7684\u53d6\u6d88\uff0c\u6709\u53ef\u80fd\u662f\u8c03\u7528\u8005\u4e3b\u52a8\u53d6\u6d88\u3002\u4e5f\u6709\u53ef\u80fd\u662f\u8c03\u7528\u8005\u5df2\u7ecf\u6389\u7ebf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ElapsedTimeRpcServer : ServerProvider\n{\n    [Description("\u6d4b\u8bd5\u53ef\u53d6\u6d88\u7684\u8c03\u7528")]\n    [TouchRpc(MethodFlags.IncludeCallContext)]\n    public bool DelayInvoke(ICallContext serverCallContext,int tick)//\u540c\u6b65\u670d\u52a1\n    {\n        for (int i = 0; i < tick; i++)\n        {\n            Thread.Sleep(100);\n            if (serverCallContext.TokenSource.IsCancellationRequested)\n            {\n                Console.WriteLine("\u5ba2\u6237\u7aef\u5df2\u7ecf\u53d6\u6d88\u8be5\u4efb\u52a1\uff01");\n                return false;//\u5b9e\u9645\u4e0a\u5728\u53d6\u6d88\u65f6\uff0c\u5ba2\u6237\u7aef\u5f97\u4e0d\u5230\u8be5\u503c\n            }\n        }\n        return true;\n    }\n}\n')),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53",(0,r.kt)("strong",{parentName:"p"},"InvokeOption"),"\u4e0d\u6d89\u53caToken\u8d4b\u503c\u65f6\uff0c\u5bf9\u8c61\u662f\u53ef\u4ee5\u590d\u7528\u7684\u3002\u4f8b\u5982\uff1a\u4f60\u53ef\u4ee5\u7528\u4e00\u4e2a\u9759\u6001\u7c7b\u5b58\u8d2e\u5f88\u591a\u914d\u7f6e\uff0c\u7136\u540e\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{3,10}","{3,10}":!0},"public static class ShareUtility\n{\n    public static InvokeOption Fast_WaitInvoke_10s = new InvokeOption()\n    {\n        FeedbackType = FeedbackType.WaitInvoke,\n        SerializationType = TouchSocket.Core.SerializationType.FastBinary,\n        Timeout = 10 * 1000\n    };\n\n    public static InvokeOption Fast_WaitInvoke_30s = new InvokeOption()\n    {\n        FeedbackType = FeedbackType.WaitInvoke,\n        SerializationType = TouchSocket.Core.SerializationType.FastBinary,\n        Timeout = 30 * 1000\n    };\n}\n"))))}u.isMDXComponent=!0}}]);