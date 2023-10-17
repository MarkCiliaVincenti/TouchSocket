"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[6108],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,y=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={id:"datasecurity",title:"\u6570\u636e\u52a0\u5bc6"},c=void 0,i={unversionedId:"datasecurity",id:"version-1.3.9/datasecurity",title:"\u6570\u636e\u52a0\u5bc6",description:"\u4e00\u30013DES",source:"@site/versioned_docs/version-1.3.9/datasecurity.mdx",sourceDirName:".",slug:"/datasecurity",permalink:"/touchsocket/docs/1.3.9/datasecurity",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/datasecurity.mdx",tags:[],version:"1.3.9",frontMatter:{id:"datasecurity",title:"\u6570\u636e\u52a0\u5bc6"},sidebar:"docs",previous:{title:"\u5927\u5c0f\u7aef\u8f6c\u6362\u5668",permalink:"/touchsocket/docs/1.3.9/touchsocketbitconverter"},next:{title:"\u65e5\u5fd7\u8bb0\u5f55\u5668",permalink:"/touchsocket/docs/1.3.9/ilog"}},s={},u=[{value:"\u4e00\u30013DES",id:"\u4e003des",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e003des"},"\u4e00\u30013DES"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nuget Package\uff1a"),(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket/"},"TouchSocket"),"\n\u3010\u52a0\u5bc6\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var dataLocked = DataSecurity.EncryptDES(data, "12345678");//\u52a0\u5bc6\u53e3\u4ee4\uff0c\u957f\u5ea6\u4e3a8\u3002\n')),(0,a.kt)("p",null,"\u3010\u89e3\u5bc6\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var newData = DataSecurity.DecryptDES(dataLocked, "12345678");//\u89e3\u5bc6\u53e3\u4ee4\uff0c\u548c\u52a0\u5bc6\u4e00\u81f4\u3002\n')))}d.isMDXComponent=!0}}]);