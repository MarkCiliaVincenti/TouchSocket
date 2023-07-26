"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={id:"dmtpbase",title:"\u57fa\u7840\u529f\u80fd"},c=void 0,l={unversionedId:"dmtpbase",id:"dmtpbase",title:"\u57fa\u7840\u529f\u80fd",description:"\u4e09\u3001\u534f\u8bae\u6269\u5c55",source:"@site/docs/dmtpbase.mdx",sourceDirName:".",slug:"/dmtpbase",permalink:"/touchsocket/docs/dmtpbase",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/dmtpbase.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1690297780,formattedLastUpdatedAt:"Jul 25, 2023",frontMatter:{id:"dmtpbase",title:"\u57fa\u7840\u529f\u80fd"}},p={},i=[{value:"\u4e09\u3001\u534f\u8bae\u6269\u5c55",id:"\u4e09\u534f\u8bae\u6269\u5c55",level:2},{value:"3.1 \u4f7f\u7528",id:"31-\u4f7f\u7528",level:3}],s={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e09\u534f\u8bae\u6269\u5c55"},"\u4e09\u3001\u534f\u8bae\u6269\u5c55"),(0,o.kt)("p",null,"\u534f\u8bae\u6269\u5c55\u529f\u80fd\uff0c\u5c31\u662f\u5bf9\u73b0\u6709\u7684TouchRpc\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u6269\u5c55\u534f\u8bae\u3002\u5176\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u5e94\u5bf9\u66f4\u52a0\u590d\u6742\uff0c\u9ad8\u8981\u6c42\u7684\u9700\u6c42\u3002"),(0,o.kt)("p",null,"\u4f8b1\uff1a\u5f53\u9700\u8981\u5e7f\u64ad\u6d88\u606f\u65f6\uff0c\u53ef\u80fd\u5927\u5bb6\u90fd\u4f1a\u60f3\u5230\u4f7f\u7528rpc\u76f4\u63a5\u8fdb\u884c\u5e7f\u64ad\u3002\u4f46\u662f\u5982\u6b64\u4e00\u6765\uff0c\u6bcf\u5e7f\u64ad\u4e00\u4e2a\u5ba2\u6237\u7aef\uff0c\u5c31\u9700\u8981\u5e8f\u5217\u5316\u4e00\u6b21\u3002\u56e0\u4e3a\u6570\u636e\u90fd\u662f\u4e00\u6837\u7684\uff0c\u6240\u4ee5\u591a\u6b21\u5e8f\u5217\u5316\u663e\u5f97\u975e\u5e38\u6ca1\u6709\u5fc5\u8981\u3002\u90a3\u4e48\u8fd9\u65f6\u5019\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u534f\u8bae\uff0c\u7136\u540e\u5148\u5e8f\u5217\u5316\uff0c\u7136\u540e\u76f4\u63a5\u5e7f\u64ad\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u534f\u8bae\u6548\u7387\u5982\u4f55\u5462\uff1f\n\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u6548\u7387\u662f\u975e\u5e38\u9ad8\u7684\uff0c99%\u63a5\u8fd1\u4e8e\u5e95\u5c42\u534f\u8bae\uff08\u53ef\u80fd\u662ftcp\u3001udp\u3001websocket\uff09\u6548\u7387\u3002"),(0,o.kt)("h3",{id:"31-\u4f7f\u7528"},"3.1 \u4f7f\u7528"),(0,o.kt)("p",null,"\u4f7f\u7528\u8d77\u6765\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u6bcf\u4e2aTouchRpc\u5ba2\u6237\u7aef\u6216\u8005TouchRpc\u670d\u52a1\u7aef\uff0c\u90fd\u5b9e\u73b0\u4e86Send\u65b9\u6cd5\u63a5\u53e3\u3002\n\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3ashort\u7c7b\u578b\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u4efb\u610f\u5927\u4e8e0\u6570\u503c"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'client.Send(10,Encoding.UTF8.GetBytes("RRQM"));\n')),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Protocol\u4e0d\u8981\u4f7f\u7528\u5c0f\u4e8e0\u7684\uff0c\u56e0\u4e3a\u6846\u67b6\u5185\u90e8\u5728\u4f7f\u7528")),(0,o.kt)("p",null,"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u63a5\u6536\u65b9"),"\u5728OnReceivedProtocolData\u51fd\u6570\u4e2d\uff0c\u5df2\u7ecf\u5305\u542b\u4e86\u534f\u8bae\u53c2\u6570\uff0c\u6240\u4ee5\u76f4\u63a5\u81ea\u884c\u7b5b\u9009\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"internal class MyTouchRpcPlugin : TouchRpcPluginBase\n{\n    protected override void OnReceivedProtocolData(ITouchRpc client, ProtocolDataEventArgs e)\n    {\n        if (e.Protocol == 10)\n        {\n            //\u5224\u65ad\u5b8c\u534f\u8bae\u4ee5\u540e\uff0c\u4ecee.ByteBlock\u53ef\u4ee5\u62ff\u5230\u5b9e\u9645\u7684\u6570\u636e\n            //\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u771f\u5b9e\u6570\u636e\u4f1a\u6574\u4f53\u5411\u53f3\u504f\u79fb2\u4e2a\u5b57\u8282\u3002\n            string msg = Encoding.UTF8.GetString(e.ByteBlock.Buffer, 2, e.ByteBlock.Len - 2);\n        }\n        base.OnReceivedProtocolData(client, e);\n    }\n}\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4eceProtocolDataEventArgs\u89e3\u6790\u7684ByteBlock\uff0c\u5176\u771f\u5b9e\u6570\u636e\u4f1a\u6574\u4f53\u5411\u53f3\u504f\u79fb2\u4e2a\u5b57\u8282\u3002\u56e0\u4e3a\u524d\u4e24\u4e2a\u5b57\u8282\u662fushort\u7684Protocol\u3002")))}u.isMDXComponent=!0}}]);