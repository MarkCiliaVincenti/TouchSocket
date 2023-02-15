"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7453],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),h=r,k=m["".concat(i,".").concat(h)]||m[h]||u[h]||l;return t?a.createElement(k,c(c({ref:n},s),{},{components:t})):a.createElement(k,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<l;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const l={id:"rpcstream",title:"Rpc\u5927\u6570\u636e\u6d41\u5f0f\u4f20\u8f93"},c=void 0,o={unversionedId:"rpcstream",id:"rpcstream",title:"Rpc\u5927\u6570\u636e\u6d41\u5f0f\u4f20\u8f93",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/rpcstream.mdx",sourceDirName:".",slug:"/rpcstream",permalink:"/docs/rpcstream",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/rpcstream.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"rpcstream",title:"Rpc\u5927\u6570\u636e\u6d41\u5f0f\u4f20\u8f93"},sidebar:"docs",previous:{title:"\u521b\u5efarpc\u670d\u52a1",permalink:"/docs/createandcallrpc"},next:{title:"\u8c03\u7528\u914d\u7f6e",permalink:"/docs/rpcoption"}},i={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u8bbe\u7f6e\u9002\u914d\u5668\u53c2\u6570\uff08\u63a8\u8350\u6307\u6570\uff1a\u2b50\uff09",id:"\u4e8c\u8bbe\u7f6e\u9002\u914d\u5668\u53c2\u6570\u63a8\u8350\u6307\u6570",level:2},{value:"\u4e09\u3001RPC\u5d4c\u5957Channel\uff08\u63a8\u8350\u6307\u6570\uff1a\u2b50\u2b50\u2b50\u2b50\u2b50\uff09",id:"\u4e09rpc\u5d4c\u5957channel\u63a8\u8350\u6307\u6570",level:2},{value:"3.1 \u8bf7\u6c42\u6d41\u6570\u636e",id:"31-\u8bf7\u6c42\u6d41\u6570\u636e",level:3},{value:"3.2 \u63a8\u9001\u6d41\u6570\u636e",id:"32-\u63a8\u9001\u6d41\u6570\u636e",level:3}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u5728RPC\u4e2d\uff0c\u5e76\u6ca1\u6709\u5bf9\u4f20\u8f93\u7684\u6570\u636e\u505a\u9650\u5236\uff0c\u4f46\u662f\u56e0\u4e3aRPC\u9ed8\u8ba4\u4f7f\u7528\u7684\u56fa\u5b9a\u5305\u5934\u9002\u914d\u5668\u4e2d\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u7684\u53ef\u4f20\u9012\u6570\u636e\u4e3a10Mb\uff0c\u6240\u4ee5\u5728RPC\u4e2d\uff0c\u7528\u6237\u53ef\u4e00\u6b21\u6027\u4f20\u9012\u7684\u6570\u636e\u5305\u5927\u7ea6\u4e3a9.9Mb\u3002\u6240\u4ee5\uff0c\u5982\u679c\u7528\u6237\u4f20\u9012\u8d85\u51fa\u9608\u503c\u7684\u6570\u636e\uff0c\u9002\u914d\u5668\u5219\u4f1a\u89e6\u53d1\u5f02\u5e38\uff0c\u800c\u65e0\u6cd5\u63a5\u6536\u3002\u4f46\u5728\u5b9e\u9645\u4e0aRPC\u7684\u4f7f\u7528\u4e2d\uff0c\u5927\u6570\u636e\u7684\u4f20\u8f93\u4e5f\u662f\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u73af\u8282\uff0c\u6240\u4ee5RRQM\u5df2\u7ecf\u505a\u4e86\u5927\u6570\u636e\u7684\u4f20\u8f93\u601d\u8def\u5efa\u8bae\uff0c\u5e0c\u671b\u80fd\u6709\u6548\u89e3\u51b3\u5927\u5bb6\u7684\u9ebb\u70e6\u3002"))),(0,r.kt)("a",{name:"DU9Pj"}),(0,r.kt)("h2",{id:"\u4e8c\u8bbe\u7f6e\u9002\u914d\u5668\u53c2\u6570\u63a8\u8350\u6307\u6570"},"\u4e8c\u3001\u8bbe\u7f6e\u9002\u914d\u5668\u53c2\u6570\uff08\u63a8\u8350\u6307\u6570\uff1a\u2b50\uff09"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u64cd\u4f5c\u539f\u7406\uff1a\u5728\u56fa\u5b9a\u5305\u5934\u9002\u914d\u5668\u4e2d\uff0c\u9ed8\u8ba4\u9650\u5236\u4e86\u5355\u6b21\u53ef\u53d1\u9001\u6570\u636e\u5305\u7684\u6700\u5927\u503c\uff0c\u6240\u4ee5\u53ef\u4ee5\u4fee\u6539\u6b64\u503c\u5b9e\u73b0\u76ee\u7684\u3002")),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u7b80\u5355\u7c97\u66b4\uff0c\u80fd\u591f\u89e3\u51b3\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5927\u6570\u636e\u95ee\u9898\uff0c\u4f46\u5e76\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u6ce8\u610f\uff1a\u5ba2\u6237\u7aef\u5fc5\u987b\u540c\u6837\u8bbe\u7f6e\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"TouchSocketConfig config = new TouchSocketConfig()//\u914d\u7f6e\n                .SetMaxPackageSize(1024 * 1024 * 10)\n")),(0,r.kt)("a",{name:"p5kjo"}),(0,r.kt)("h2",{id:"\u4e09rpc\u5d4c\u5957channel\u63a8\u8350\u6307\u6570"},"\u4e09\u3001RPC\u5d4c\u5957Channel\uff08\u63a8\u8350\u6307\u6570\uff1a\u2b50\u2b50\u2b50\u2b50\u2b50\uff09"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u64cd\u4f5c\u539f\u7406\uff1a\u5148\u5229\u7528RPC\u8ba9\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u7ea6\u5b9a\u7279\u5b9a\u7684Channel\uff0c\u7136\u540e\u540e\u7eed\u6570\u636e\u901a\u8fc7Channel\u4f20\u9012\uff0c\u6700\u540e\u7531RPC\u8fd4\u56de\u7ed3\u679c\u3002")),(0,r.kt)("a",{name:"FuEck"}),(0,r.kt)("h3",{id:"31-\u8bf7\u6c42\u6d41\u6570\u636e"},"3.1 \u8bf7\u6c42\u6d41\u6570\u636e"),(0,r.kt)("p",null,"\u3010Service\u7aef\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// "\u6d4b\u8bd5ServiceToClient\u521b\u5efa\u901a\u9053\uff0c\u4ece\u800c\u5b9e\u73b0\u6d41\u6570\u636e\u7684\u4f20\u8f93"\n/// </summary>\n/// <param name="callContext"></param>\n/// <param name="channelID"></param>\n[Description("\u6d4b\u8bd5ServiceToClient\u521b\u5efa\u901a\u9053\uff0c\u4ece\u800c\u5b9e\u73b0\u6d41\u6570\u636e\u7684\u4f20\u8f93")]\n[TouchRpc(MethodFlags = MethodFlags.IncludeCallContext)]\npublic int RpcPullChannel(ICallContext callContext, int channelID)\n{\n    int size = 0;\n    int package = 1024 * 1024;\n    if (callContext.Caller is TcpTouchRpcSocketClient socketClient)\n    {\n        if (socketClient.TrySubscribeChannel(channelID, out Channel channel))\n        {\n            for (int i = 0; i < 1024; i++)\n            {\n                size += package;\n                channel.Write(new byte[package]);\n            }\n            channel.Complete();//\u5fc5\u987b\u8c03\u7528\u6307\u4ee4\u51fd\u6570\uff0c\u5982Complete\uff0cCancel\uff0cDispose\n        }\n    }\n    return size;\n}\n')),(0,r.kt)("p",null,"\u3010Client\u7aef\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'ChannelStatus status = ChannelStatus.Default;\nint size = 0;\nChannel channel = client.CreateChannel();//\u521b\u5efa\u901a\u9053\nTask task = Task.Run(() =>//\u8fd9\u91cc\u5fc5\u987b\u7528\u5f02\u6b65\n {\n     using (channel)\n     {\n         while (channel.MoveNext())\n         {\n             byte[] data = channel.GetCurrent();\n             size += data.Length;\n         }\n         status = channel.Status;\n     }\n });\nint result = client.RpcPullChannel(channel.ID);//RpcPullChannel\u662f\u4ee3\u7406\u65b9\u6cd5\uff0c\u6b64\u5904\u4f1a\u963b\u585e\u81f3\u670d\u52a1\u5668\u5168\u90e8\u53d1\u9001\u5b8c\u6210\u3002\nawait task;//\u7b49\u5f85\u5f02\u6b65\u63a5\u6536\u5b8c\u6210\nConsole.WriteLine($"\u72b6\u6001\uff1a{status}\uff0csize={size}");\n')),(0,r.kt)("a",{name:"GmNPl"}),(0,r.kt)("h3",{id:"32-\u63a8\u9001\u6d41\u6570\u636e"},"3.2 \u63a8\u9001\u6d41\u6570\u636e"),(0,r.kt)("p",null,"\u3010Service\u7aef\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// "\u6d4b\u8bd5\u63a8\u9001"\n/// </summary>\n/// <param name="callContext"></param>\n/// <param name="channelID"></param>\n[Description("\u6d4b\u8bd5ServiceToClient\u521b\u5efa\u901a\u9053\uff0c\u4ece\u800c\u5b9e\u73b0\u6d41\u6570\u636e\u7684\u4f20\u8f93")]\n[TouchRpc(MethodFlags = MethodFlags.IncludeCallContext)]\npublic int RpcPushChannel(ICallContext callContext, int channelID)\n{\n    int size = 0;\n    \n    if (callContext.Caller is TcpTouchRpcSocketClient socketClient)\n    {\n        if (socketClient.TrySubscribeChannel(channelID, out Channel channel))\n        {\n            while (channel.MoveNext())\n            {\n                size += channel.GetCurrent().Length;\n            }\n        }\n    }\n    return size;\n}\n')),(0,r.kt)("p",null,"\u3010Client\u7aef\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'ChannelStatus status = ChannelStatus.Default;\nint size = 0;\nint package = 1024 * 1024;\nChannel channel = client.CreateChannel();//\u521b\u5efa\u901a\u9053\nTask task = Task.Run(() =>//\u8fd9\u91cc\u5fc5\u987b\u7528\u5f02\u6b65\n{\n    for (int i = 0; i < 1024; i++)\n    {\n        size += package;\n        channel.Write(new byte[package]);\n    }\n    channel.Complete();//\u5fc5\u987b\u8c03\u7528\u6307\u4ee4\u51fd\u6570\uff0c\u5982Complete\uff0cCancel\uff0cDispose\n});\nint result = client.RpcPushChannel(channel.ID);//RpcPushChannel\u662f\u4ee3\u7406\u65b9\u6cd5\uff0c\u6b64\u5904\u4f1a\u963b\u585e\u81f3\u670d\u52a1\u5668\u5168\u90e8\u5b8c\u6210\u3002\nawait task;//\u7b49\u5f85\u5f02\u6b65\u63a5\u6536\u5b8c\u6210\nConsole.WriteLine($"\u72b6\u6001\uff1a{status}\uff0cresult={result}");\n')))}u.isMDXComponent=!0}}]);