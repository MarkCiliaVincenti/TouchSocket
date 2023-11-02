"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4656],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"dmtpredis",title:"Redis\u7f13\u5b58"},i=void 0,s={unversionedId:"dmtpredis",id:"dmtpredis",title:"Redis\u7f13\u5b58",description:"\u5b9a\u4e49",source:"@site/docs/dmtpredis.mdx",sourceDirName:".",slug:"/dmtpredis",permalink:"/touchsocket/docs/current/dmtpredis",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/dmtpredis.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1698853612,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{id:"dmtpredis",title:"Redis\u7f13\u5b58"},sidebar:"docs",previous:{title:"\u8def\u7531\u5305\u4f20\u8f93",permalink:"/touchsocket/docs/current/dmtprouterpackage"},next:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/current/webapi"}},c={},l=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4f7f\u7528",id:"\u4e8c\u4f7f\u7528",level:2},{value:"\u4e09\u3001\u7f13\u5b58\u6301\u4e45\u5316",id:"\u4e09\u7f13\u5b58\u6301\u4e45\u5316",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Dmtp ",(0,o.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Dmtp"},"TouchSocket.Dmtp.dll")),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"REmote DIctionary Server(Redis) \u662f\u4e00\u4e2akey-value\u5b58\u50a8\u7cfb\u7edf\uff0c\u4e5f\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3002"),(0,o.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u7ec4\u4ef6\u662f\u57fa\u4e8eDmtp\u534f\u8bae\u7684Redis\u3002\u6240\u4ee5\u65e0\u6cd5\u8fde\u63a5\u5230\u5e38\u89c4Redis\u4e2d\u3002\u4f46\u662f\u6b64\u7ec4\u4ef6\u65e0\u8bba\u662f\u6269\u5c55\u6027\u8fd8\u662f\u6027\u80fd\uff0c\u90fd\u662f\u8fdc\u80dc\u5e38\u89c4Redis\u7684\u3002")),(0,o.kt)("h2",{id:"\u4e8c\u4f7f\u7528"},"\u4e8c\u3001\u4f7f\u7528"),(0,o.kt)("p",null,"Redis\u662f\u7531RedisFeature\u529f\u80fd\u63d2\u4ef6\u63d0\u4f9b\u7684\uff0c\u6240\u4ee5\u9700\u8981\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"UseDmtpRedis"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},".ConfigurePlugins(a =>\n{\n    a.UseDmtpRedis();//\u6dfb\u52a0Redis\u529f\u80fd\u63d2\u4ef6\n})\n")),(0,o.kt)("p",null,"\u3010\u8bf7\u6c42\u7aef\u3011"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var client = GetTcpDmtpClient();\n\n//\u83b7\u53d6Redis\nvar redis = client.GetDmtpRedisActor();\n\n//\u6267\u884cSet\nvar result = redis.Set("1", "1");\nclient.Logger.Info($"Set result={result}");\nclient.Logger.Info($"ContainsCache result={redis.ContainsCache("1")}");\n\n//\u6267\u884cGet\nvar result1 = redis.Get<string>("1");\nclient.Logger.Info($"Get result={result}");\n\n//\u6267\u884cRemove\nresult = redis.RemoveCache("1");\nclient.Logger.Info($"Get result={result}");\nredis.ClearCache();\n')),(0,o.kt)("h2",{id:"\u4e09\u7f13\u5b58\u6301\u4e45\u5316"},"\u4e09\u3001\u7f13\u5b58\u6301\u4e45\u5316"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRedis\u7ec4\u4ef6\u4f1a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryCache<string, byte[]>"),"\u4f5c\u4e3a\u5b9e\u9645\u50a8\u5b58\u3002\u6240\u4ee5\u8981\u5b9e\u73b0\u7f13\u5b58\u6301\u4e45\u5316\uff0c\u53ea\u9700\u8981\u66ff\u6362\u8be5\u7f13\u5b58\u3001\u6216\u8005\u4fdd\u5b58\u8be5\u7f13\u5b58\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},".ConfigurePlugins(a =>\n{\n    a.UseDmtpRedis()//\u5fc5\u987b\u6dfb\u52a0Redis\u8bbf\u95ee\u63d2\u4ef6\n    .SetCache(new MemoryCache<string, byte[]>());//\u8fd9\u91cc\u53ef\u4ee5\u8bbe\u7f6e\u7f13\u5b58\u6301\u4e45\u5316\uff0c\u6b64\u5904\u4ecd\u7136\u662f\u4f7f\u7528\u5185\u5b58\u7f13\u5b58\u3002\n})\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/Dmtp/DmtpRedisConsoleApp"},"\u672c\u6587\u793a\u4f8bDemo")))}d.isMDXComponent=!0}}]);