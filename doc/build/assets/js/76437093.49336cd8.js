"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={id:"jsonserializer",title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",sidebar_label:"7. JsonSerializerUtility \u9759\u6001\u7c7b"},o=void 0,l={unversionedId:"global/jsonserializer",id:"global/jsonserializer",title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",description:"\u4ee5\u4e0b\u5185\u5bb9\u5728 Furion 1.16.0 + \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u8bf7\u4f7f\u7528 \u301023. JSON \u5e8f\u5217\u5316\u7ae0\u8282\u3011",source:"@site/docs/global/jsonserializer.mdx",sourceDirName:"global",slug:"/global/jsonserializer",permalink:"/touchsocket/docs/global/jsonserializer",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/jsonserializer.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"jsonserializer",title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",sidebar_label:"7. JsonSerializerUtility \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"6. Http \u9759\u6001\u7c7b",permalink:"/touchsocket/docs/global/shttp"},next:{title:"8. L \u9759\u6001\u7c7b",permalink:"/touchsocket/docs/global/l"}},s={},c=[{value:"7.1 \u5e8f\u5217\u5316",id:"71-\u5e8f\u5217\u5316",level:2},{value:"7.2 \u53cd\u5e8f\u5217\u5316",id:"72-\u53cd\u5e8f\u5217\u5316",level:2},{value:"7.3 \u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e",id:"73-\u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e",level:2},{value:"7.4 \u8bbe\u7f6e\u5e8f\u5217\u5316\u5c5e\u6027\u9996\u5b57\u6bcd\u5927\u5199",id:"74-\u8bbe\u7f6e\u5e8f\u5217\u5316\u5c5e\u6027\u9996\u5b57\u6bcd\u5927\u5199",level:2},{value:"7.5 \u8bbe\u7f6e\u65f6\u95f4\u8f93\u51fa\u7edf\u4e00\u683c\u5f0f\u5316",id:"75-\u8bbe\u7f6e\u65f6\u95f4\u8f93\u51fa\u7edf\u4e00\u683c\u5f0f\u5316",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\u91cd\u8981\u58f0\u660e",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion 1.16.0 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u8bf7\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/json-serialization"},"\u301023. JSON \u5e8f\u5217\u5316\u7ae0\u8282\u3011"))),(0,i.kt)("h2",{id:"71-\u5e8f\u5217\u5316"},"7.1 \u5e8f\u5217\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var str = JsonSerializerUtility.Serialize(obj, [options]);\n")),(0,i.kt)("h2",{id:"72-\u53cd\u5e8f\u5217\u5316"},"7.2 \u53cd\u5e8f\u5217\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var obj = JsonSerializerUtility.Deserialize<T>(str, [options]);\n")),(0,i.kt)("h2",{id:"73-\u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e"},"7.3 \u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var options = JsonSerializerUtility.GetDefaultJsonSerializerOptions();\n")),(0,i.kt)("h2",{id:"74-\u8bbe\u7f6e\u5e8f\u5217\u5316\u5c5e\u6027\u9996\u5b57\u6bcd\u5927\u5199"},"7.4 \u8bbe\u7f6e\u5e8f\u5217\u5316\u5c5e\u6027\u9996\u5b57\u6bcd\u5927\u5199"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2}",showLineNumbers:!0,"":!0,"{2}":!0},"services.AddControllersWithViews()\n        .AddJsonSerializerPascalPropertyNaming();\n")),(0,i.kt)("h2",{id:"75-\u8bbe\u7f6e\u65f6\u95f4\u8f93\u51fa\u7edf\u4e00\u683c\u5f0f\u5316"},"7.5 \u8bbe\u7f6e\u65f6\u95f4\u8f93\u51fa\u7edf\u4e00\u683c\u5f0f\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2}",showLineNumbers:!0,"":!0,"{2}":!0},'services.AddControllersWithViews()\n        .AddDateTimeJsonConverter("yyyy-MM-dd HH:mm:ss");\n')))}u.isMDXComponent=!0}}]);