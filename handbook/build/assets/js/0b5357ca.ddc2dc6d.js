"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"websocketheartbeat",title:"Websocket\u5fc3\u8df3\u8bbe\u7f6e"},i=void 0,c={unversionedId:"websocketheartbeat",id:"version-1.3.9/websocketheartbeat",title:"Websocket\u5fc3\u8df3\u8bbe\u7f6e",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/websocketheartbeat.mdx",sourceDirName:".",slug:"/websocketheartbeat",permalink:"/touchsocket/docs/1.3.9/websocketheartbeat",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/websocketheartbeat.mdx",tags:[],version:"1.3.9",frontMatter:{id:"websocketheartbeat",title:"Websocket\u5fc3\u8df3\u8bbe\u7f6e"},sidebar:"docs",previous:{title:"\u8fde\u63a5\u9a8c\u8bc1",permalink:"/touchsocket/docs/1.3.9/websocketverify"},next:{title:"WSCommandLinePlugin",permalink:"/touchsocket/docs/1.3.9/wscommandlineplugin"}},l={},s=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u5fc3\u8df3\u914d\u7f6e",id:"\u4e8c\u5fc3\u8df3\u914d\u7f6e",level:2},{value:"2.1 \u670d\u52a1\u5668\u914d\u7f6e",id:"21-\u670d\u52a1\u5668\u914d\u7f6e",level:4},{value:"2.2 \u5ba2\u6237\u7aef\u4f7f\u7528\u5fc3\u8df3\u63d2\u4ef6",id:"22-\u5ba2\u6237\u7aef\u4f7f\u7528\u5fc3\u8df3\u63d2\u4ef6",level:4},{value:"\u4e09\u3001\u76f4\u63a5\u53d1\u9001\u5fc3\u8df3",id:"\u4e09\u76f4\u63a5\u53d1\u9001\u5fc3\u8df3",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"Websocket\u62e5\u6709\u81ea\u5df1\u7684\u5fc3\u8df3\u6570\u636e\u683c\u5f0f\uff0c\u548c\u54cd\u5e94\u5fc3\u8df3\u683c\u5f0f\uff0c\u4e13\u4e1a\u540d\u8bcd\u662fPing\u548cPong\u3002\u6240\u4ee5\u4f9d\u9760\u8fd9\u4e24\u4e2a\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b9e\u73b0\u5fc3\u8df3\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u5fc3\u8df3\u914d\u7f6e"},"\u4e8c\u3001\u5fc3\u8df3\u914d\u7f6e"),(0,a.kt)("h4",{id:"21-\u670d\u52a1\u5668\u914d\u7f6e"},"2.1 \u670d\u52a1\u5668\u914d\u7f6e"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u5728\u6dfb\u52a0WebSocket\u529f\u80fd\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u542f\u7528\u81ea\u52a8\u56de\u5e94Ping\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{17}","{17}":!0},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigureRpcStore(a =>\n    {\n        a.RegisterServer<MyServer>();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseWebSocket()//\u6dfb\u52a0WebSocket\u529f\u80fd\n               .SetWSUrl("/ws")\n               .UseAutoPong()//\u5f53\u6536\u5230ping\u62a5\u6587\u65f6\u81ea\u52a8\u56de\u5e94pong\n               .SetCallback(WSCallback);//WSCallback\u56de\u8c03\u51fd\u6570\u662f\u5728WS\u6536\u5230\u6570\u636e\u65f6\u89e6\u53d1\u56de\u8c03\u7684\u3002\n        a.Add<MyWebSocketPlugin>();//MyWebSocketPlugin\u662f\u7ee7\u627f\u81eaWebSocketPluginBase\u7684\u63d2\u4ef6\u3002\n        a.Add<MyWSCommandLinePlugin>();\n        a.UseWebApi();\n    }))\n    .Start();\n')),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"UseAutoPong"),"\u975e\u5fc5\u987b\u64cd\u4f5c\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u7684\u8bdd\uff0c\u81ea\u5df1\u5728\u63d2\u4ef6\u5904\u7406Ping\u62a5\u6587\u4e5f\u53ef\u4ee5\u3002")),(0,a.kt)("h4",{id:"22-\u5ba2\u6237\u7aef\u4f7f\u7528\u5fc3\u8df3\u63d2\u4ef6"},"2.2 \u5ba2\u6237\u7aef\u4f7f\u7528\u5fc3\u8df3\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{11-12}","{11-12}":!0},'WebSocketClient client = new WebSocketClient();\nclient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("127.0.0.1:7789")\n    .UsePlugin()\n    .ConfigureContainer(a =>\n    {\n        a.AddFileLogger();\n    })\n    .ConfigurePlugins(a => \n    {\n        a.UseWebSocketHeartbeat()//\u4f7f\u7528\u5fc3\u8df3\u63d2\u4ef6\n        .Tick(TimeSpan.FromSeconds(5));//\u6bcf5\u79d2ping\u4e00\u6b21\u3002\n    }));\nclient.Connect();\n')),(0,a.kt)("h2",{id:"\u4e09\u76f4\u63a5\u53d1\u9001\u5fc3\u8df3"},"\u4e09\u3001\u76f4\u63a5\u53d1\u9001\u5fc3\u8df3"),(0,a.kt)("p",null,"\u76f4\u63a5\u53d1\u9001\u5fc3\u8df3\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6269\u5c55\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"client.PingWS();\nclient.PongWS();\n")),(0,a.kt)("p",null,"\u6216\u8005\u81ea\u5df1\u6784\u5efa\u6570\u636e\u5e27"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"WSDataFrame dataFrame = new WSDataFrame()\n{\n    FIN = true,\n    Opcode = WSDataType.Ping\n};\n\n//WSDataFrame dataFrame = new WSDataFrame()\n//{\n//    FIN = true,\n//    Opcode = WSDataType.Pong\n//};\n\nclient.Send(dataFrame);\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u81ea\u5df1\u6784\u5efa\u6570\u636e\u5e27\uff0c\u8fd8\u5e94\u8be5\u8bbe\u7f6eMake\u7b49\u5176\u4ed6\u53c2\u6570\u3002")),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u662fPing\uff0c\u8fd8\u662fPong\uff0c\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u90fd\u652f\u6301\u53d1\u9001\u548c\u63a5\u6536\u3002\u4f46\u662f\u4e00\u822c\u5efa\u8bae\u7531\u5ba2\u6237\u7aefPing\uff0c\u670d\u52a1\u5668\u53ea\u8d1f\u8d23Pong\u5373\u53ef\u3002")))}d.isMDXComponent=!0}}]);