"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[1969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=o.createContext({}),c=function(e){var t=o.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(g.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,m=p["".concat(g,".").concat(d)]||p[d]||u[d]||l;return r?o.createElement(m,a(a({ref:t},s),{},{components:r})):o.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const l={id:"ilog",title:"\u65e5\u5fd7\u8bb0\u5f55\u5668"},a=void 0,i={unversionedId:"ilog",id:"ilog",title:"\u65e5\u5fd7\u8bb0\u5f55\u5668",description:"\u5b9a\u4e49",source:"@site/docs/ilog.mdx",sourceDirName:".",slug:"/ilog",permalink:"/touchsocket/docs/current/ilog",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/ilog.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1698853612,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{id:"ilog",title:"\u65e5\u5fd7\u8bb0\u5f55\u5668"},sidebar:"docs",previous:{title:"\u6570\u636e\u52a0\u5bc6",permalink:"/touchsocket/docs/current/datasecurity"},next:{title:"\u5e94\u7528\u4fe1\u4f7f",permalink:"/touchsocket/docs/current/appmessenger"}},g={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u65e5\u5fd7\u8bb0\u5f55\u63a5\u53e3\uff08ILog\uff09",id:"\u4e00\u65e5\u5fd7\u8bb0\u5f55\u63a5\u53e3ilog",level:2},{value:"\u4e8c\u3001\u63a7\u5236\u53f0\u65e5\u5fd7\u8bb0\u5f55\u5668\uff08ConsoleLogger\uff09",id:"\u4e8c\u63a7\u5236\u53f0\u65e5\u5fd7\u8bb0\u5f55\u5668consolelogger",level:2},{value:"\u4e09\u3001\u6587\u4ef6\u65e5\u5fd7\u8bb0\u5f55\u5668\uff08FileLogger\uff09",id:"\u4e09\u6587\u4ef6\u65e5\u5fd7\u8bb0\u5f55\u5668filelogger",level:2},{value:"\u56db\u3001\u65e5\u5fd7\u7ec4\u8bb0\u5f55\u5668\uff08LoggerGroup\uff09",id:"\u56db\u65e5\u5fd7\u7ec4\u8bb0\u5f55\u5668loggergroup",level:2},{value:"\u4e94\u3001\u65e5\u5fd7\u6269\u5c55",id:"\u4e94\u65e5\u5fd7\u6269\u5c55",level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,n.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Core ",(0,n.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Core"},"TouchSocket.Core.dll")),(0,n.kt)("h2",{id:"\u4e00\u65e5\u5fd7\u8bb0\u5f55\u63a5\u53e3ilog"},"\u4e00\u3001\u65e5\u5fd7\u8bb0\u5f55\u63a5\u53e3\uff08ILog\uff09"),(0,n.kt)("p",null,"\u7ee7\u627fILog\u63a5\u53e3\uff0c\u7136\u540e\u5b9e\u73b0\u4ee5\u4e0b\u65b9\u6cd5\u3002\u5373\u53ef\u5b9e\u73b0\u5185\u90e8\u7684\u65e5\u5fd7\u8bb0\u5f55\u3002\n\u5f53\u7528\u6237\u81ea\u884c\u8f93\u51fa\u65e5\u5fd7\u65f6\uff0c\u53ef\u81ea\u884c\u5b9e\u73b0\u8fc7\u7a0b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"class MyLogger : ILog\n{\n    public LogType LogType { get; set; } = LogType.Debug | LogType.Error;\n\n    public void Log(LogType logType, object source, string message, Exception exception)\n    {\n        //\u6b64\u5904\u5c31\u662f\u65e5\u5fd7\u5b9e\u9645\u8f93\u51fa\u7684\u4f4d\u7f6e\u3002\n    }\n}\n")),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"LogType")," \u8868\u793a\u5f53\u524d\u65e5\u5fd7\u7684\u53ef\u8f93\u51fa\u7c7b\u578b\uff0c\u5e76\u975e\u8f93\u51fa\u7ea7\u522b\uff0c\u6240\u4ee5\u5f53\u9700\u8981\u8f93\u51fa\u591a\u79cd\u7c7b\u578b\u65f6\uff0c\u8bf7\u8fdb\u884c\u4f4d\u57df\u64cd\u4f5c\u3002")),(0,n.kt)("h2",{id:"\u4e8c\u63a7\u5236\u53f0\u65e5\u5fd7\u8bb0\u5f55\u5668consolelogger"},"\u4e8c\u3001\u63a7\u5236\u53f0\u65e5\u5fd7\u8bb0\u5f55\u5668\uff08ConsoleLogger\uff09"),(0,n.kt)("p",null,"\u5728\u4f7f\u7528\u63a7\u5236\u53f0\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4f1a\u6309\u7167\u4ee5\u4e0b\u683c\u5f0f\u8f93\u51fa\u3002\n",(0,n.kt)("img",{alt:"image.png",src:r(1208).Z,width:"920",height:"198"})),(0,n.kt)("h2",{id:"\u4e09\u6587\u4ef6\u65e5\u5fd7\u8bb0\u5f55\u5668filelogger"},"\u4e09\u3001\u6587\u4ef6\u65e5\u5fd7\u8bb0\u5f55\u5668\uff08FileLogger\uff09"),(0,n.kt)("p",null,"\u5728\u4f7f\u7528\u6587\u4ef6\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u5148\u4f1a\u5728\u6307\u5b9a\u76ee\u5f55\u4e0b\u521b\u5efa\u201clogs\u201d\u76ee\u5f55\uff0c\u7136\u540e\u6309\u65e5\u671f\u751f\u6210\u201c.log\u201d\u6587\u4ef6\u3002\n",(0,n.kt)("img",{alt:"image.png",src:r(4898).Z,width:"940",height:"202"})),(0,n.kt)("h2",{id:"\u56db\u65e5\u5fd7\u7ec4\u8bb0\u5f55\u5668loggergroup"},"\u56db\u3001\u65e5\u5fd7\u7ec4\u8bb0\u5f55\u5668\uff08LoggerGroup\uff09"),(0,n.kt)("p",null,"\u4f7f\u7528\u65e5\u5fd7\u7ec4\u8bb0\u5f55\u5668\u65f6\uff0c\u53ef\u4ee5\u540c\u65f6\u8bb0\u5f55\u591a\u4e2a\u65e5\u5fd7\uff0c\u4f8b\u5982\uff1a\u4e0b\u5217\u793a\u4f8b\u5c31\u540c\u65f6\u5728\u63a7\u5236\u53f0\u548c\u6587\u4ef6\u8bb0\u5f55\u65e5\u5fd7\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"LoggerGroup logger = new LoggerGroup(new ConsoleLogger(),new FileLogger());\n")),(0,n.kt)("h2",{id:"\u4e94\u65e5\u5fd7\u6269\u5c55"},"\u4e94\u3001\u65e5\u5fd7\u6269\u5c55"),(0,n.kt)("p",null,"\u5f15\u5165\u547d\u540d\u7a7a\u95f4\u3002\u53ef\u5feb\u6377\u8bb0\u5f55\u65e5\u5fd7\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'LoggerGroup logger = new LoggerGroup(new ConsoleLogger(),new FileLogger());\nlogger.Info("Message");\nlogger.Warning("Warning");\nlogger.Error("Error");\n')))}u.isMDXComponent=!0},1208:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/ilog-1-cfa95e95bee4088509c9c35784bca442.png"},4898:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/ilog-2-715cd211ac8ac352a6e44fd2ac11f6ee.png"}}]);