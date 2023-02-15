"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"pipelinedatahandlingadapter",title:"Pipeline\u6570\u636e\u9002\u914d\u5668"},o=void 0,p={unversionedId:"pipelinedatahandlingadapter",id:"pipelinedatahandlingadapter",title:"Pipeline\u6570\u636e\u9002\u914d\u5668",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/pipelinedatahandlingadapter.mdx",sourceDirName:".",slug:"/pipelinedatahandlingadapter",permalink:"/docs/pipelinedatahandlingadapter",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/pipelinedatahandlingadapter.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"pipelinedatahandlingadapter",title:"Pipeline\u6570\u636e\u9002\u914d\u5668"},sidebar:"docs",previous:{title:"\u6a21\u677f\u89e3\u6790\u201c\u533a\u95f4\u6570\u636e\u201d\u6570\u636e\u9002\u914d\u5668",permalink:"/docs/custombetweenanddatahandlingadapter"},next:{title:"\u4e09\u5143\u7ec4\u7f16\u7801\uff08TLV\uff09\u9002\u914d\u5668",permalink:"/docs/tlvdatahandlingadapter"}},l={},c=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4f7f\u7528",id:"\u4e8c\u4f7f\u7528",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"Pipeline\u9002\u914d\u5668\uff0c\u662f\u7ed3\u5408IOCP\u4e0e\u7ba1\u9053\u6a21\u578b\u7ed3\u5408\u7684\u4ea7\u7269\u3002\u529f\u80fd\u7c7b\u4f3c\u4e8eNetworkStream\uff0c\u4f46\u4e0e\u4e4b\u4e0d\u540c\u7684\u662f\uff0cPipeline\u6bcf\u5f53\u6709\u6570\u636e\u5230\u8fbe\u65f6\uff0c\u4f1a\u5148\u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6\uff08OnReveived\uff09\uff0c\u7136\u540e\u7528\u6237\u5728\u4e8b\u4ef6\u4e2d\u53ef\u65e0\u9650\u5236\u7684Read\u6216Write\u6570\u636e\u3002\u5982\u679c\u672c\u6b21\u63a5\u6536\u5b8c\u6210\uff0c\u53ef\u9000\u51fa\u63a5\u6536\u3002\u5f53\u4e0b\u4e00\u6bb5\u6570\u636e\u62b5\u8fbe\u65f6\uff0c\u4f1a\u518d\u6b21\u901a\u77e5\u63a5\u6536\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u4f7f\u7528"},"\u4e8c\u3001\u4f7f\u7528"),(0,a.kt)("p",null,"\u4e0b\u5217\u793a\u4f8b\u4ee3\u7801\u5b9e\u73b0\uff0c\u5f53\u8bfb\u5230\u6362\u884c\u65f6\uff0c\u7ed3\u675f\u672c\u6b21\u63a5\u6536\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpService service = new TcpService();\n\nservice.Received += (client, byteBlock, requestInfo) =>\n{\n    if (requestInfo is Pipeline pipeline)//\u5b9e\u9645\u4e0aPipeline\u7ee7\u627f\u81eaStream\n    {\n        pipeline.ReadTimeout = 1000 * 60;//\u8bbe\u7f6e\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4\u4e3a60\u79d2\u3002\n        StreamReader streamReader = new StreamReader(pipeline);//\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u7528StreamReader\u6784\u9020\n        string ss = streamReader.ReadLine();//\u4f1a\u4e00\u76f4\u7b49\u6362\u884c\uff0c\u76f4\u5230\u7b49\u5230\u6362\u884c\uff0c\u624d\u7ee7\u7eed\u5411\u4e0b\u6267\u884c\n        Console.WriteLine(ss);\n    }\n     //\u5f53Pipeline\u9000\u51fa\u8be5\u4e8b\u4ef6\u65b9\u6cd5\u65f6\uff0c\u4f1a\u88ab\u81ea\u52a8\u91ca\u653e\uff0c\u4e0b\u6b21\u4f1a\u6295\u9012\u65b0\u7684Pipeline\u5b9e\u4f8b\u3002\n     // \u5982\u679c\u91cc\u9762\u8fd8\u6709\u672aRead\u5b8c\u7684\u6570\u636e\uff0c\u4e0b\u6b21\u4f1a\u7ee7\u7eed\u6295\u9012,\u5982\u679c\u60f3\u76f4\u63a5\u4e22\u5f03\uff0c\u5219\u5728\u6b64\u5904\u76f4\u63a5\u8c03\u7528Disopose\u5373\u53ef\u3002\n     \n};\n\n//\u58f0\u660e\u914d\u7f6e\nvar config = new TouchSocketConfig();\nconfig.SetListenIPHosts(new IPHost[] { new IPHost("127.0.0.1:7789"), new IPHost(7790) })//\u540c\u65f6\u76d1\u542c\u4e24\u4e2a\u5730\u5740\n    .SetDataHandlingAdapter(() => new PipelineDataHandlingAdapter());//\u914d\u7f6e\u9002\u914d\u5668\u4e3aPipeline\n\n//\u8f7d\u5165\u914d\u7f6e\nservice.Setup(config);\n\n//\u542f\u52a8\nservice.Start();\n\n')),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u521b\u5efa\u7684\u9002\u914d\u5668\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u5747\u9002\u7528\u3002")))}s.isMDXComponent=!0}}]);