"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[8617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,v=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[s]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"udpdatahandlingadapter",sidebar_position:1,title:"\u539f\u59cb\u81ea\u5b9a\u4e49\u9002\u914d\u5668",sidebar_label:"a.\u539f\u59cb\u81ea\u5b9a\u4e49\u9002\u914d\u5668"},i=void 0,d={unversionedId:"udpdatahandlingadapter",id:"version-1.3.9/udpdatahandlingadapter",title:"\u539f\u59cb\u81ea\u5b9a\u4e49\u9002\u914d\u5668",description:"\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/udpdatahandlingadapter.mdx",sourceDirName:".",slug:"/udpdatahandlingadapter",permalink:"/touchsocket/docs/1.3.9/udpdatahandlingadapter",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/udpdatahandlingadapter.mdx",tags:[],version:"1.3.9",sidebarPosition:1,frontMatter:{id:"udpdatahandlingadapter",sidebar_position:1,title:"\u539f\u59cb\u81ea\u5b9a\u4e49\u9002\u914d\u5668",sidebar_label:"a.\u539f\u59cb\u81ea\u5b9a\u4e49\u9002\u914d\u5668"},sidebar:"docs",previous:{title:"\u4e09\u5143\u7ec4\u7f16\u7801\uff08TLV\uff09\u9002\u914d\u5668",permalink:"/touchsocket/docs/1.3.9/tlvdatahandlingadapter"},next:{title:"\u8bf4\u660e",permalink:"/touchsocket/docs/1.3.9/adapterdemodescription"}},p={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:2}],l={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,"Udp\u7684\u9002\u914d\u5668\uff0c\u4e3b\u8981\u627f\u62c5\u7ec4\u5305\u548c\u89e3\u6790\u6570\u636e\u3002\u5176\u57fa\u672c\u903b\u8f91\u548cTcp\u76f8\u4f3c\u3002\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cUdp\u9002\u914d\u5668\u662f",(0,a.kt)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b"),"\u64cd\u4f5c\u3002\u5728\u89e3\u6790\u6570\u636e\u65f6\uff0c\u5e94\u5f53\u5145\u5206\u8003\u8651\u5e76\u53d1\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"class MyUdpAdatper : UdpDataHandlingAdapter\n{\n    public override bool CanSplicingSend => false;\n\n    protected override void PreviewReceived(EndPoint remoteEndPoint, ByteBlock byteBlock)\n    {\n       \n    }\n\n    protected override void PreviewSend(EndPoint endPoint, byte[] buffer, int offset, int length, bool isAsync)\n    {\n       \n    }\n\n    protected override void PreviewSend(EndPoint endPoint, IList<TransferByte> transferBytes, bool isAsync)\n    {\n        \n    }\n\n    protected override void Reset()\n    {\n        \n    }\n}\n")),(0,a.kt)("h2",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"UdpDataAdapterTester"),"\u5373\u53ef\u6d4b\u8bd5\u3002"))}u.isMDXComponent=!0}}]);