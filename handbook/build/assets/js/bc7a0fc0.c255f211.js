"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"rpcratelimiting",title:"Rpc\u8bbf\u95ee\u901f\u7387\u9650\u5236"},a=void 0,l={unversionedId:"rpcratelimiting",id:"rpcratelimiting",title:"Rpc\u8bbf\u95ee\u901f\u7387\u9650\u5236",description:"\u5b9a\u4e49",source:"@site/docs/rpcratelimiting.mdx",sourceDirName:".",slug:"/rpcratelimiting",permalink:"/touchsocket/docs/current/rpcratelimiting",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/rpcratelimiting.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1705762056,formattedLastUpdatedAt:"Jan 20, 2024",frontMatter:{id:"rpcratelimiting",title:"Rpc\u8bbf\u95ee\u901f\u7387\u9650\u5236"},sidebar:"docs",previous:{title:"\u8c03\u7528\u4e0a\u4e0b\u6587",permalink:"/touchsocket/docs/current/rpcallcontext"},next:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/current/dmtpdescription"}},p={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4f7f\u7528",id:"\u4e8c\u4f7f\u7528",level:2},{value:"2.1 \u5b89\u88c5",id:"21-\u5b89\u88c5",level:3},{value:"2.2 \u56fa\u5b9a\u7a97\u53e3\u9650\u5236\u5668",id:"22-\u56fa\u5b9a\u7a97\u53e3\u9650\u5236\u5668",level:3},{value:"2.3 \u6ed1\u52a8\u7a97\u53e3\u9650\u5236\u5668",id:"23-\u6ed1\u52a8\u7a97\u53e3\u9650\u5236\u5668",level:3},{value:"2.4 \u4ee4\u724c\u6876\u9650\u5236\u5668",id:"24-\u4ee4\u724c\u6876\u9650\u5236\u5668",level:3},{value:"2.5 \u5e76\u53d1\u9650\u5236\u5668",id:"25-\u5e76\u53d1\u9650\u5236\u5668",level:3},{value:"2.6 \u4f7f\u7528",id:"26-\u4f7f\u7528",level:3},{value:"\u4e09\u3001\u7b97\u6cd5",id:"\u4e09\u7b97\u6cd5",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,i.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Rpc.RateLimiting ",(0,i.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Rpc.RateLimiting"},"TouchSocket.Rpc.RateLimiting.dll")),(0,i.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,i.kt)("p",null,"\u901f\u7387\u9650\u5236\u662f\u6307\u9650\u5236\u4e00\u4e2a\u8d44\u6e90\u7684\u8bbf\u95ee\u91cf\u7684\u6982\u5ff5\u3002\u4f8b\u5982\uff0c\u4f60\u77e5\u9053\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u7684\u6570\u636e\u5e93\u53ef\u4ee5\u5b89\u5168\u5730\u5904\u7406\u6bcf\u5206\u949f1000\u4e2a\u8bf7\u6c42\uff0c\u4f46\u4f60\u4e0d\u76f8\u4fe1\u5b83\u53ef\u4ee5\u5904\u7406\u6bd4\u8fd9\u591a\u5f97\u591a\u7684\u8bf7\u6c42\u3002\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u653e\u7f6e\u4e00\u4e2a\u901f\u7387\u9650\u5236\u5668\uff0c\u5141\u8bb8\u6bcf\u5206\u949f\u67091000\u4e2a\u8bf7\u6c42\uff0c\u5e76\u5728\u8bbf\u95ee\u6570\u636e\u5e93\u4e4b\u524d\u62d2\u7edd\u4efb\u4f55\u66f4\u591a\u7684\u8bf7\u6c42\u3002\u56e0\u6b64\uff0c\u901f\u7387\u9650\u5236\u4f60\u7684\u6570\u636e\u5e93\uff0c\u5141\u8bb8\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5904\u7406\u5b89\u5168\u6570\u91cf\u7684\u8bf7\u6c42\uff0c\u800c\u4e0d\u53ef\u80fd\u6709\u6765\u81ea\u4f60\u7684\u6570\u636e\u5e93\u7684\u4e0d\u826f\u6545\u969c\u3002"),(0,i.kt)("p",null,"\u6709\u591a\u79cd\u4e0d\u540c\u7684\u901f\u7387\u9650\u5236\u7b97\u6cd5\u6765\u63a7\u5236\u8bf7\u6c42\u7684\u6d41\u91cf\u3002\u6211\u4eec\u5c06\u8ba8\u8bba\u5176\u4e2d\u76844\u79cd\uff0c\u4ed6\u4eec\u5206\u522b\u4e3a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56fa\u5b9a\u7a97\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u6ed1\u52a8\u7a97\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u4ee4\u724c\u6876"),(0,i.kt)("li",{parentName:"ul"},"\u5e76\u53d1")),(0,i.kt)("h2",{id:"\u4e8c\u4f7f\u7528"},"\u4e8c\u3001\u4f7f\u7528"),(0,i.kt)("h3",{id:"21-\u5b89\u88c5"},"2.1 \u5b89\u88c5"),(0,i.kt)("p",null,"nuget\u5b89\u88c5TouchSocket.Rpc.RateLimiting\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"Install-Package TouchSocket.Rpc.RateLimiting\n")),(0,i.kt)("h3",{id:"22-\u56fa\u5b9a\u7a97\u53e3\u9650\u5236\u5668"},"2.2 \u56fa\u5b9a\u7a97\u53e3\u9650\u5236\u5668"),(0,i.kt)("p",null,"AddFixedWindowLimiter \u65b9\u6cd5\u4f7f\u7528\u56fa\u5b9a\u7684\u65f6\u95f4\u7a97\u53e3\u6765\u9650\u5236\u8bf7\u6c42\u3002 \u5f53\u65f6\u95f4\u7a97\u53e3\u8fc7\u671f\u65f6\uff0c\u4f1a\u542f\u52a8\u4e00\u4e2a\u65b0\u7684\u65f6\u95f4\u7a97\u53e3\uff0c\u5e76\u91cd\u7f6e\u8bf7\u6c42\u9650\u5236\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{3} showLineNumbers","{3}":!0,showLineNumbers:!0},'.ConfigureContainer(a =>\n{\n    a.AddRateLimiter(p =>\n    {\n        p.AddFixedWindowLimiter("FixedWindow", options =>\n        {\n            options.PermitLimit = 10;\n            options.Window = TimeSpan.FromSeconds(10);\n        });\n    });\n})\n')),(0,i.kt)("h3",{id:"23-\u6ed1\u52a8\u7a97\u53e3\u9650\u5236\u5668"},"2.3 \u6ed1\u52a8\u7a97\u53e3\u9650\u5236\u5668"),(0,i.kt)("p",null,"AddSlidingWindowLimiter \u65b9\u6cd5\u4f7f\u7528\u6ed1\u52a8\u7684\u65f6\u95f4\u7a97\u53e3\u6765\u9650\u5236\u8bf7\u6c42\u3002 \u5f53\u65f6\u95f4\u7a97\u53e3\u8fc7\u671f\u65f6\uff0c\u4f1a\u542f\u52a8\u4e00\u4e2a\u65b0\u7684\u65f6\u95f4\u7a97\u53e3\uff0c\u4e0e\u56fa\u5b9a\u7a97\u53e3\u9650\u5236\u5668\u7c7b\u4f3c\uff0c\u4f46\u4e3a\u6bcf\u4e2a\u7a97\u53e3\u6dfb\u52a0\u4e86\u6bb5\u3002 \u7a97\u53e3\u5728\u6bcf\u4e2a\u6bb5\u95f4\u9694\u6ed1\u52a8\u4e00\u6bb5\u3002 \u6bb5\u95f4\u9694\u7684\u8ba1\u7b97\u65b9\u5f0f\u662f\uff1a(\u7a97\u53e3\u65f6\u95f4)/(\u6bcf\u4e2a\u7a97\u53e3\u7684\u6bb5\u6570)\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{1,4-6,11} showLineNumbers","{1,4-6,11}":!0,showLineNumbers:!0},'.ConfigureContainer(a =>\n{\n    a.AddRateLimiter(p =>\n    {\n        //\u6dfb\u52a0\u4e00\u4e2a\u540d\u79f0\u4e3aSlidingWindow\u7684\u6ed1\u52a8\u7a97\u53e3\u7684\u9650\u6d41\u7b56\u7565\n        p.AddSlidingWindowLimiter("SlidingWindow", options => \n        {\n            options.PermitLimit = 10;\n            options.Window = TimeSpan.FromSeconds(10);\n            options.SegmentsPerWindow = 5;\n        });\n    });\n})\n')),(0,i.kt)("h3",{id:"24-\u4ee4\u724c\u6876\u9650\u5236\u5668"},"2.4 \u4ee4\u724c\u6876\u9650\u5236\u5668"),(0,i.kt)("p",null,"AddTokenBucketLimiter \u65b9\u6cd5\u4f7f\u7528\u4ee4\u724c\u6876\u6765\u9650\u5236\u8bf7\u6c42\u3002 \u4ee4\u724c\u6876\u9650\u5236\u5668\u5c06\u6839\u636e\u6307\u5b9a\u7684\u4ee4\u724c\u751f\u6210\u901f\u7387\u5411\u6876\u4e2d\u6dfb\u52a0\u4ee4\u724c\u3002 \u5982\u679c\u6876\u4e2d\u6709\u8db3\u591f\u7684\u4ee4\u724c\uff0c\u5219\u5141\u8bb8\u8bf7\u6c42\uff0c\u5426\u5219\u62d2\u7edd\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'.ConfigureContainer(a =>\n{\n    a.AddRateLimiter(p =>\n    {\n        //\u6dfb\u52a0\u4e00\u4e2a\u540d\u79f0\u4e3aTokenBucket\u7684\u4ee4\u724c\u6876\u7684\u9650\u6d41\u7b56\u7565\n        p.AddTokenBucketLimiter("TokenBucket", options =>\n        {\n            options.TokenLimit = 100;\n            options.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;\n            options.QueueLimit = 10;\n            options.ReplenishmentPeriod = TimeSpan.FromSeconds(10);\n            options.TokensPerPeriod = 10;\n            options.AutoReplenishment = true;\n        });\n    });\n})\n')),(0,i.kt)("h3",{id:"25-\u5e76\u53d1\u9650\u5236\u5668"},"2.5 \u5e76\u53d1\u9650\u5236\u5668"),(0,i.kt)("p",null,"\u5e76\u53d1\u9650\u5236\u5668\u4f1a\u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u6570\u3002 \u6bcf\u6dfb\u52a0\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5728\u5e76\u53d1\u9650\u5236\u4e2d\u51cf\u53bb 1\u3002 \u4e00\u4e2a\u8bf7\u6c42\u5b8c\u6210\u65f6\uff0c\u5728\u9650\u5236\u4e2d\u589e\u52a0 1\u3002 \u5176\u4ed6\u8bf7\u6c42\u9650\u5236\u5668\u9650\u5236\u7684\u662f\u6307\u5b9a\u65f6\u95f4\u6bb5\u7684\u8bf7\u6c42\u603b\u6570\uff0c\u800c\u4e0e\u5b83\u4eec\u4e0d\u540c\uff0c\u5e76\u53d1\u9650\u5236\u5668\u4ec5\u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u6570\uff0c\u4e0d\u5bf9\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u8bf7\u6c42\u6570\u8bbe\u7f6e\u4e0a\u9650\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'.ConfigureContainer(a =>\n{\n    a.AddRateLimiter(p =>\n    {\n        //\u6dfb\u52a0\u4e00\u4e2a\u540d\u79f0\u4e3aConcurrency\u7684\u5e76\u53d1\u7684\u9650\u6d41\u7b56\u7565\n        p.AddConcurrencyLimiter("Concurrency", options =>\n        {\n            options.PermitLimit = 10;\n            options.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;\n            options.QueueLimit = 10;\n        });\n    });\n})\n')),(0,i.kt)("h3",{id:"26-\u4f7f\u7528"},"2.6 \u4f7f\u7528"),(0,i.kt)("p",null,"\u9650\u6d41\u5668\u4f7f\u7528\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u9700\u8981\u9650\u6d41\u7684\u51fd\u6570\u3001\u670d\u52a1\u6216\u63a5\u53e3\u4e0a\u6dfb\u52a0\u7279\u6027\u5373\u53ef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{3} showLineNumbers","{3}":!0,showLineNumbers:!0},'public partial class MyRpcServer : RpcServer\n{\n    [EnableRateLimiting("FixedWindow")]\n    [Description("\u767b\u5f55")]//\u670d\u52a1\u63cf\u8ff0\uff0c\u5728\u751f\u6210\u4ee3\u7406\u65f6\uff0c\u4f1a\u53d8\u6210\u6ce8\u91ca\u3002\n    [DmtpRpc("Login")]//\u670d\u52a1\u6ce8\u518c\u7684\u51fd\u6570\u952e\uff0c\u6b64\u5904\u4e3a\u663e\u5f0f\u6307\u5b9a\u3002\u9ed8\u8ba4\u4e0d\u4f20\u53c2\u7684\u65f6\u5019\uff0c\u4e3a\u8be5\u51fd\u6570\u7c7b\u5168\u540d+\u65b9\u6cd5\u540d\u7684\u5168\u5c0f\u5199\u3002\n    public bool Login(string account, string password)\n    {\n        if (account == "123" && password == "abc")\n        {\n            return true;\n        }\n\n        return false;\n    }\n}\n')),(0,i.kt)("h2",{id:"\u4e09\u7b97\u6cd5"},"\u4e09\u3001\u7b97\u6cd5"),(0,i.kt)("p",null,"TouchSocket\u7684\u9650\u6d41\u7b97\u6cd5\uff0c\u662f\u5b8c\u5168\u5f15\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.RateLimiting.dll"),"\u3002\u6240\u4ee5\u7b97\u662f\u6bd4\u8f83\u901a\u7528\u7684\u9650\u6d41\u7b97\u6cd5\u3002"),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u7b97\u6cd5\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u4e5f\u662f\u5b8c\u5168\u501f\u9274Aspnetcore\u7684\u9650\u6d41\u7b97\u6cd5\u4f7f\u7528\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u5177\u4f53\u7b97\u6cd5\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/zh-cn/aspnet/core/performance/rate-limit"},"ASP.NET Core \u4e2d\u7684\u901f\u7387\u9650\u5236")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/Rpc/RpcRateLimitingConsoleApp"},"\u672c\u6587\u793a\u4f8bDemo")))}m.isMDXComponent=!0}}]);