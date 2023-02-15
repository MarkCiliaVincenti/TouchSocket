"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[1285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"dataadaptertester",sidebar_position:5,title:"\u9002\u914d\u5668\u5b8c\u6574\u6027\u3001\u6027\u80fd\u6d4b\u8bd5",sidebar_label:"8.5 \u9002\u914d\u5668\u5b8c\u6574\u6027\u3001\u6027\u80fd\u6d4b\u8bd5"},i=void 0,c={unversionedId:"dataadaptertester",id:"dataadaptertester",title:"\u9002\u914d\u5668\u5b8c\u6574\u6027\u3001\u6027\u80fd\u6d4b\u8bd5",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/dataadaptertester.mdx",sourceDirName:".",slug:"/dataadaptertester",permalink:"/docs/dataadaptertester",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/dataadaptertester.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",sidebarPosition:5,frontMatter:{id:"dataadaptertester",sidebar_position:5,title:"\u9002\u914d\u5668\u5b8c\u6574\u6027\u3001\u6027\u80fd\u6d4b\u8bd5",sidebar_label:"8.5 \u9002\u914d\u5668\u5b8c\u6574\u6027\u3001\u6027\u80fd\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"\u72ec\u7acb\u4f7f\u7528\u9002\u914d\u5668",permalink:"/docs/independentusedatahandlingadapter"},next:{title:"\u521b\u5efaHttpService",permalink:"/docs/createhttpservice"}},l={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"1.1 \u6d4b\u8bd5\u539f\u7406",id:"11-\u6d4b\u8bd5\u539f\u7406",level:3},{value:"1.2 \u6d4b\u8bd5\u4e8b\u9879",id:"12-\u6d4b\u8bd5\u4e8b\u9879",level:3},{value:"\u4e8c\u3001Tcp\u9002\u914d\u5668",id:"\u4e8ctcp\u9002\u914d\u5668",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u9002\u914d\u5668\u6d4b\u8bd5\u662f\u6d4b\u8bd5\u9002\u914d\u5668\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u6781\u7aef\u5de5\u4f5c\u7684\u4e00\u79cd\u6d4b\u8bd5\u65b9\u5f0f\u3002\u80fd\u591f\u5728\u524d\u671f\uff0c\u89e3\u51b3100%\u7684\u7b97\u6cd5\u95ee\u9898\u3002\u4e5f\u80fd\u5728\u6781\u7aef\u914d\u7f6e\u4e0b\uff0c\u6a21\u62df\u6781\u7aef\u5de5\u4f5c\u73af\u5883\uff0c\u80fd\u591f\u7b80\u5355\uff0c\u76f4\u89c2\u7684\u5c55\u793a\u51fa\u9002\u914d\u5668\u7684\u7a33\u5b9a\u6027\u548c\u5de5\u4f5c\u6027\u80fd\u3002"),(0,a.kt)("h3",{id:"11-\u6d4b\u8bd5\u539f\u7406"},"1.1 \u6d4b\u8bd5\u539f\u7406"),(0,a.kt)("p",null,"\u5047\u8bbe\u53d1\u9001\u6570\u636e\u4e3a{0,1,2,3,4}\uff0c\u8fde\u7eed\u53d1\u900110\u6b21\u3002\n\u5f53bufferLength=1\u65f6\uff0c\u4f1a\u5148\u63a5\u6536\u4e00\u4e2a\u5b57\u8282\uff0c\u7136\u540e\u9002\u914d\u5668\u5224\u65ad\u65e0\u6cd5\u89e3\u6790\uff0c\u7136\u540e\u7f13\u5b58\uff0c\u7136\u540e\u518d\u63a5\u6536\u4e0b\u4e00\u4e2a\u5b57\u8282\uff0c\u76f4\u5230\u6210\u529f\u89e3\u6790\u4e00\u4e2a\u5b8c\u6574\u6570\u636e\u5305\u3002\u8be5\u6a21\u5f0f\u89e3\u51b3\u7684\u5c31\u662f\u5927\u5bb6\u6240\u8bf4\u7684\u5206\u5305\uff0c\u4e5f\u5c31\u662f\u80fd\u5f88\u597d\u7684\u6a21\u62df",(0,a.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u5f88\u5dee"),"\u7684\u73af\u5883\u3002\n\u5f53bufferLength>5\u65f6,\u5047\u5982\u4e3a8\uff0c\u5219\u4f1a\u5148\u63a5\u6536{0,1,2,3,4,0,1,2}\uff0c\u7136\u540e\u9002\u914d\u5668\u6210\u529f\u5224\u65ad\u89e3\u6790\u524d\u4e94\u5b57\u8282\uff0c\u7136\u540e\u7f13\u5b58\u540e\u4e09\u5b57\u8282\uff0c\u7136\u540e\u518d\u63a5\u6536\u4e0b\u4e00\u4e2a\u7eed\u5305\uff0c\u76f4\u5230\u89e3\u6790\u7ed3\u675f\u3002"),(0,a.kt)("h3",{id:"12-\u6d4b\u8bd5\u4e8b\u9879"},"1.2 \u6d4b\u8bd5\u4e8b\u9879"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"bufferLength\u5e94\u8be5\u591a\u6b21\u8bbe\u7f6e\uff0c\u4e14\u6700\u597d\u4e0d\u8981\u6574\u9664\u4e8e\u53d1\u9001\u6570\u636e\u7684\u957f\u5ea6\uff0c\u8fd9\u6837\u907f\u514d\u5de7\u5408\u53d1\u751f\uff0c\u6d4b\u4e0d\u51fa\u6781\u7aef\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ol"},"Run\u7684\u6b21\u6570\u5e94\u8be5\u591a\u8bbe\uff0c\u6a21\u62df\u9ad8\u9891\u60c5\u51b5\u3002")),(0,a.kt)("h2",{id:"\u4e8ctcp\u9002\u914d\u5668"},"\u4e8c\u3001Tcp\u9002\u914d\u5668"),(0,a.kt)("p",null,"Tcp\u9002\u914d\u5668\u7684\u5de5\u4f5c\u73af\u5883\uff0c\u53ea\u9700\u8003\u8651\u5355\u7ebf\u7a0b\u5373\u53ef\u3002\u56e0\u4e3a\u662f\u5ba2\u6237\u7aef\u4e0e\u9002\u914d\u5668\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u3002"),(0,a.kt)("p",null,"\u4e0b\u5217\u4ee5 ",(0,a.kt)("a",{parentName:"p",href:"/docs/fixedheaderpackageadapter"},"\u56fa\u5b9a\u5305\u5934\u6570\u636e\u5904\u7406\u9002\u914d\u5668")," \u4e3a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'//Tcp\u9002\u914d\u5668\u6d4b\u8bd5\n//bufferLength\u7684\u4f5c\u7528\u662f\u6a21\u62dftcp\u63a5\u6536\u7f13\u5b58\u533a\uff0c\u4f8b\u5982\uff1a\n\n//\u53d1\u9001\u6570\u636e\u4e3a{0,1,2,3,4}\u65f6\n//\u5f53bufferLength=1\u65f6\uff0c\u4f1a\u5148\u63a5\u6536\u4e00\u4e2a\u5b57\u8282\uff0c\u7136\u540e\u9002\u914d\u5668\u5224\u65ad\u65e0\u6cd5\u89e3\u6790\uff0c\u7136\u540e\u7f13\u5b58\uff0c\u7136\u540e\u518d\u63a5\u6536\u4e0b\u4e00\u4e2a\u5b57\u8282\uff0c\u76f4\u5230\u6210\u529f\u89e3\u6790\u3002\n//\u8be5\u6a21\u5f0f\u80fd\u5f88\u597d\u7684\u6a21\u62df\u7f51\u7edc\u5f88\u5dee\u7684\u73af\u5883\u3002\n//\u5f53bufferLength=8\u65f6\uff0c\u4f1a\u5148\u63a5\u6536{0,1,2,3,4,0,1,2}\uff0c\u7136\u540e\u9002\u914d\u5668\u5224\u65ad\u89e3\u6790\u524d\u4e94\u5b57\u8282\uff0c\u7136\u540e\u7f13\u5b58\u540e\u4e09\u5b57\u8282\uff0c\u7136\u540e\u518d\u63a5\u6536\u4e0b\u4e00\u4e2a\u7eed\u5305\uff0c\u76f4\u5230\u89e3\u6790\u7ed3\u675f\n\nfor (int bufferLength = 1; bufferLength < 1024 * 10; bufferLength += 1024)\n{\n    bool isSuccess = true;\n    var data = new byte[] { 0, 1, 2, 3, 4 };\n    DataAdapterTester tester = DataAdapterTester.CreateTester(new FixedHeaderPackageAdapter()\n     , bufferLength, (byteBlock, requestInfo) =>\n     {\n         //\u6b64\u5904\u5c31\u662f\u63a5\u6536\uff0c\u5982\u679c\u662f\u81ea\u5b9a\u4e49\u9002\u914d\u5668\uff0c\u53ef\u4ee5\u5c06requestInfo\u5f3a\u5236\u8f6c\u6362\u4e3a\u5b9e\u9645\u5bf9\u8c61\uff0c\u7136\u540e\u5224\u65ad\u6570\u636e\u7684\u786e\u5b9a\u6027\n         if (byteBlock.Len!=5||(!byteBlock.ToArray().SequenceEqual(data)))\n         {\n             isSuccess = false;\n         }\n     });\n    \n    //data\u662f\u53d1\u9001\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u6b64\u5904\u4f7f\u7528\u7684\u662f\u56fa\u5b9a\u5305\u5934\u9002\u914d\u5668\uff0c\n    //\u53d1\u9001\u524d\u9002\u914d\u5668\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5305\u5934\uff0c\u6240\u4ee5\uff0c\u6b64\u5904\u53ea\u53d1\u9001\u6570\u636e\u5373\u53ef\u3002\n    //\u5982\u679c\u6d4b\u8bd5\u7684\u662f\u81ea\u5b9a\u4e49\u9002\u914d\u5668\uff0c\u53d1\u9001\u524d\u6ca1\u6709\u5c01\u88c5\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u81ea\u884c\u6784\u5efa\u53d1\u9001\u6570\u636e\u3002\n    //\u968f\u540e\u7684\u4e24\u4e2a\u53c2\u6570\uff0c10,10\u662f\u6d4b\u8bd5\u6b21\u6570\uff0c\u548c\u671f\u671b\u6b21\u6570\uff0c\u4e00\u822c\u8fd9\u4e24\u4e2a\u503c\u662f\u76f8\u7b49\u7684\u3002\n    //\u610f\u4e3a\uff1a\u672c\u6b21\u6570\u636e\u5c06\u5faa\u73af\u53d1\u900110\u6b21\uff0c\u4e14\u4f1a\u63a5\u653610\u6b21\u3002\u4e0d\u7136\u6b64\u5904\u4f1a\u4e00\u76f4\u963b\u585e\u3002\n    //\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662f\u6d4b\u8bd5\u7684\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u3002\n\n    var time = tester.Run(data, 10, 10, 1000 * 10);\n    Thread.Sleep(1000);\n    Console.WriteLine($"\u6d4b\u8bd5\u7ed3\u675f\uff0c\u72b6\u6001:{isSuccess}\uff0c\u7528\u65f6\uff1a{time}");\n}\nConsole.WriteLine("\u6d4b\u8bd5\u7ed3\u675f");\n\n')))}d.isMDXComponent=!0}}]);