"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[2996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={id:"customdatahandlingadapter",title:"\u7528\u6237\u81ea\u5b9a\u4e49\u9002\u914d\u5668"},l=void 0,s={unversionedId:"customdatahandlingadapter",id:"customdatahandlingadapter",title:"\u7528\u6237\u81ea\u5b9a\u4e49\u9002\u914d\u5668",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/customdatahandlingadapter.mdx",sourceDirName:".",slug:"/customdatahandlingadapter",permalink:"/touchsocket/docs/customdatahandlingadapter",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/customdatahandlingadapter.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675652422,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{id:"customdatahandlingadapter",title:"\u7528\u6237\u81ea\u5b9a\u4e49\u9002\u914d\u5668"},sidebar:"docs",previous:{title:"\u539f\u59cb\u81ea\u5b9a\u4e49\u9002\u914d\u5668",permalink:"/touchsocket/docs/datahandleadapter"},next:{title:"\u6a21\u677f\u89e3\u6790\u201c\u56fa\u5b9a\u5305\u5934\u201d\u6570\u636e\u9002\u914d\u5668",permalink:"/touchsocket/docs/customfixedheaderdatahandlingadapter"}},c={},i=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u8fd0\u884c\u903b\u8f91",id:"\u4e8c\u8fd0\u884c\u903b\u8f91",level:2},{value:"\u4e09\u3001\u7279\u70b9",id:"\u4e09\u7279\u70b9",level:2},{value:"\u56db\u3001\u4f7f\u7528",id:"\u56db\u4f7f\u7528",level:2}],u={toc:i};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"\u548c\u539f\u59cb\u9002\u914d\u5668\u76f8\u6bd4\uff0c\u7528\u6237\u81ea\u5b9a\u4e49\u9002\u914d\u5668\uff08",(0,r.kt)("strong",{parentName:"p"},"CustomDataHandlingAdapter"),"\uff09\u7b80\u5355\u5f88\u591a\u3002\u56e0\u4e3a\u4ed6\u53ea\u9700\u8981\u8003\u8651\u63a5\u4e0b\u6765\u5982\u4f55\u5904\u7406\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u8fd0\u884c\u903b\u8f91"},"\u4e8c\u3001\u8fd0\u884c\u903b\u8f91"),(0,r.kt)("img",{src:n(8992).Z,width:"700"}),(0,r.kt)("p",null,"\u8fd4\u56de\u6307\u4ee4\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FilterResult.Cache\uff1a\u5c06ByteBlock\u4e2d\u7684\uff0c\u4eceByteBlock.Pos\u5230\u7ed3\u675f\u7684\u6240\u6709\u6570\u636e\u8fdb\u884c\u7f13\u5b58\uff0c\u7528\u4e8e\u548c\u4e0b\u6b21\u63a5\u6536\u6570\u636e\u505a\u62fc\u63a5\u3002"),(0,r.kt)("li",{parentName:"ul"},"FilterResult.Success\uff1a\u5b8c\u6210\u672c\u6b21\u6570\u636e\u89e3\u6790\uff0c\u5411Received\u6295\u9012IRequestInfo\u5bf9\u8c61\u3002\u5728\u8fd4\u56de\u4e4b\u524d\uff0c\u8bf7\u4e00\u5b9a\u786e\u4fdd\u5df2\u7ecf\u4fee\u6539ByteBlock.Pos\u5c5e\u6027\u3002\u4e0d\u7136\u4f1a\u53d1\u751f\u65e0\u9650\u5faa\u73af\u7684\u5371\u9669\u60c5\u51b5\u3002"),(0,r.kt)("li",{parentName:"ul"},"FilterResult.GoOn\uff1a\u5c06ByteBlock.Pos\u81f3\u7ed3\u675f\u7684\u6570\u636e\u91cd\u65b0\u6295\u9012\uff0c\u6240\u4ee5\u5728\u8fd4\u56de\u4e4b\u524d\uff0c\u8bf7\u4e00\u5b9a\u786e\u4fdd\u5df2\u7ecf\u4fee\u6539ByteBlock.Pos\u5c5e\u6027\uff0c\u81f3\u5c11\u5df2\u7ecf\u9012\u589e\u4e00\u4f4d\u3002\u4e0d\u7136\u4f1a\u53d1\u751f\u65e0\u9650\u5faa\u73af\u7684\u5371\u9669\u60c5\u51b5\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd4\u56deSuccess\u6216\u8005GoOn\u6307\u4ee4\u65f6\uff0c\u8bf7\u4e00\u5b9a\u786e\u4fdd\u5df2\u7ecf\u4fee\u6539ByteBlock.Pos\u5c5e\u6027\uff0c\u81f3\u5c11\u5df2\u7ecf\u9012\u589e\u4e00\u4f4d\u3002\u4e0d\u7136\u4f1a\u53d1\u751f\u65e0\u9650\u5faa\u73af\u7684\u5371\u9669\u60c5\u51b5\u3002")),(0,r.kt)("h2",{id:"\u4e09\u7279\u70b9"},"\u4e09\u3001\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u66f4\u52a0\u81ea\u7531\u5ea6\u7684\u64cd\u4f5c\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u80fd\u591f\u7b80\u5355\u7684\u7f13\u5b58\u4e0d\u80fd\u89e3\u6790\u7684\u6570\u636e\u3002")),(0,r.kt)("h2",{id:"\u56db\u4f7f\u7528"},"\u56db\u3001\u4f7f\u7528"),(0,r.kt)("p",null,"\u8fd8\u662f\u4ee5\u4e0b\u5217\u6570\u636e\u4e3a\u4f8b\uff1a"),(0,r.kt)("img",{src:n(3718).Z}),(0,r.kt)("p",null,"\u6b65\u9aa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u58f0\u660e\u65b0\u5efa\u7c7b\uff0c\u5b9e\u73b0IRequestInfo\u63a5\u53e3\uff0c\u6b64\u5bf9\u8c61\u5373\u4e3a\u5b58\u50a8\u6570\u636e\u7684\u5b9e\u4f53\u7c7b\uff0c\u53ef\u5728\u6b64\u7c7b\u4e2d\u58f0\u660e\u4e00\u4e9b\u5c5e\u6027\uff0c\u4ee5\u5907\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u58f0\u660e\u65b0\u5efa\u7c7b\uff0c\u7ee7\u627fCustomDataHandlingAdapter\uff0c\u5e76\u4e14\u4ee5\u6b65\u9aa41\u58f0\u660e\u7684\u7c7b\u4f5c\u4e3a\u6cdb\u578b\u3002\u5e76\u5b9e\u73b0\u5bf9\u5e94\u62bd\u8c61\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol"},"TouchSocketConfig\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7Received\uff08\u4e8b\u4ef6\u3001\u65b9\u6cd5\u3001\u63d2\u4ef6\uff09\u4e2d\u7684RequestInfo\u5bf9\u8c61\uff0c\u5f3a\u8f6c\u4e3a\u6b65\u9aa41\u58f0\u660e\u7684\u7c7b\u578b\uff0c\u7136\u540e\u8bfb\u53d6\u5176\u5c5e\u6027\u503c\uff0c\u4ee5\u5907\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"\u3010\u5b9a\u4e49\u9002\u914d\u5668\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'internal class MyCustomDataHandlingAdapter : CustomDataHandlingAdapter<MyRequestInfo>\n{\n\n    /// <summary>\n    /// \u7b5b\u9009\u89e3\u6790\u6570\u636e\u3002\u5b9e\u4f8b\u5316\u7684TRequest\u4f1a\u4e00\u76f4\u4fdd\u5b58\uff0c\u76f4\u81f3\u89e3\u6790\u6210\u529f\uff0c\u6216\u624b\u52a8\u6e05\u9664\u3002\n    /// <para>\u5f53\u4e0d\u6ee1\u8db3\u89e3\u6790\u6761\u4ef6\u65f6\uff0c\u8bf7\u8fd4\u56de<see cref="FilterResult.Cache"/>\uff0c\u6b64\u65f6\u4f1a\u4fdd\u5b58<see cref="ByteBlock.CanReadLen"/>\u7684\u6570\u636e</para>\n    /// <para>\u5f53\u6570\u636e\u90e8\u5206\u5f02\u5e38\u65f6\uff0c\u8bf7\u79fb\u52a8<see cref="ByteBlock.Pos"/>\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u7136\u540e\u8fd4\u56de<see cref="FilterResult.GoOn"/></para>\n    /// <para>\u5f53\u5b8c\u5168\u6ee1\u8db3\u89e3\u6790\u6761\u4ef6\u65f6\uff0c\u8bf7\u8fd4\u56de<see cref="FilterResult.Success"/>\u6700\u540e\u5c06<see cref="ByteBlock.Pos"/>\u79fb\u81f3\u6307\u5b9a\u4f4d\u7f6e\u3002</para>\n    /// </summary>\n    /// <param name="byteBlock">\u5b57\u8282\u5757</param>\n    /// <param name="beCached">\u662f\u5426\u4e3a\u4e0a\u6b21\u9057\u7559\u5bf9\u8c61\uff0c\u5f53\u8be5\u53c2\u6570\u4e3aTrue\u65f6\uff0crequest\u4e5f\u5c06\u662f\u4e0a\u6b21\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u3002</param>\n    /// <param name="request">\u5bf9\u8c61\u3002</param>\n    /// <param name="tempCapacity">\u7f13\u5b58\u5bb9\u91cf\u6307\u5bfc\uff0c\u6307\u793a\u5f53\u9700\u8981\u7f13\u5b58\u65f6\uff0c\u5e94\u8be5\u7533\u8bf7\u591a\u5927\u7684\u5185\u5b58\u3002</param>\n    /// <returns></returns>\n    protected override FilterResult Filter(ByteBlock byteBlock, bool beCached, ref MyRequestInfo request, ref int tempCapacity)\n    {\n        //\u4ee5\u4e0b\u89e3\u6790\u601d\u8def\u4e3a\u4e00\u6b21\u6027\u89e3\u6790\uff0c\u4e0d\u8003\u8651\u7f13\u5b58\u7684\u4e34\u65f6\u5bf9\u8c61\u3002\n\n        if (byteBlock.CanReadLen < 3)\n        {\n            return FilterResult.Cache;//\u5f53\u5934\u90e8\u90fd\u65e0\u6cd5\u89e3\u6790\u65f6\uff0c\u76f4\u63a5\u7f13\u5b58\n        }\n\n        int pos = byteBlock.Pos;//\u8bb0\u5f55\u521d\u59cb\u6e38\u6807\u4f4d\u7f6e\uff0c\u9632\u6b62\u672c\u6b21\u65e0\u6cd5\u89e3\u6790\u65f6\uff0c\u56de\u9000\u6e38\u6807\u3002\n\n        MyRequestInfo myRequestInfo = new MyRequestInfo();\n\n        byteBlock.Read(out byte[] header, 3);//\u586b\u5145header\n\n        //\u56e0\u4e3a\u7b2c\u4e00\u4e2a\u5b57\u8282\u8868\u793a\u6240\u6709\u957f\u5ea6\uff0c\u800cDataType\u3001OrderType\u5df2\u7ecf\u5305\u542b\u5728\u4e86header\u91cc\u9762\u3002\n        //\u6240\u6709\u53ea\u9700\u5440\u518d\u8bfb\u53d6header[0]-2\u4e2a\u957f\u5ea6\u5373\u53ef\u3002\n        byte bodyLength = (byte)(header[0] - 2);\n\n        if (bodyLength > byteBlock.CanReadLen)\n        {\n            //body\u6570\u636e\u4e0d\u8db3\u3002\n            byteBlock.Pos = pos;//\u56de\u9000\u6e38\u6807\n            return FilterResult.Cache;\n        }\n        else\n        {\n            byteBlock.Read(out byte[] body, bodyLength);//\u586b\u5145body\n\n            myRequestInfo.Header = header;\n            myRequestInfo.DataType = header[1];\n            myRequestInfo.OrderType = header[2];\n            myRequestInfo.Body = body;\n            request = myRequestInfo;//\u8d4b\u503cref\n            return FilterResult.Success;//\u8fd4\u56de\u6210\u529f\n        }\n    }\n}\n\ninternal class MyRequestInfo : IRequestInfo\n{\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u5c5e\u6027,Body\n    /// </summary>\n    public byte[] Body { get; internal set; }\n\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u5c5e\u6027,Header\n    /// </summary>\n    public byte[] Header { get; internal set; }\n\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u5c5e\u6027,DataType\n    /// </summary>\n    public byte DataType { get; internal set; }\n\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u5c5e\u6027,OrderType\n    /// </summary>\n    public byte OrderType { get; internal set; }\n}\n')),(0,r.kt)("p",null,"\u3010\u63a5\u6536\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"TcpService service = new TcpService();\nservice.Received += (client, byteBlock, requestInfo) =>\n{\n    //\u63a5\u6536\u4fe1\u606f\uff0c\u5728CustomDataHandlingAdapter\u6d3e\u751f\u7684\u9002\u914d\u5668\u4e2d\uff0cbyteBlock\u5c06\u4e3anull\uff0crequestInfo\u5c06\u4e3a\u9002\u914d\u5668\u5b9a\u4e49\u7684\u6cdb\u578b\n    if (requestInfo is MyRequestInfo myRequestInfo)\n    {\n        //\u6b64\u5904\u53ef\u4ee5\u5904\u7406MyRequestInfo\u7684\u76f8\u5173\u4fe1\u606f\u4e86\u3002\n        string body = Encoding.UTF8.GetString(myRequestInfo.Body, 0, myRequestInfo.Body.Length);\n    }\n  \n};\n\nservice.Setup(new TouchSocketConfig()//\u8f7d\u5165\u914d\u7f6e     \n    .SetListenIPHosts(new IPHost[] { new IPHost(7790) })\n    .SetDataHandlingAdapter(() => { return new MyCustomDataHandlingAdapter(); }))//\u914d\u7f6e\u9002\u914d\u5668\n    .Start();//\u542f\u52a8\n")),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u521b\u5efa\u7684\u9002\u914d\u5668\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u5747\u9002\u7528\u3002")))}d.isMDXComponent=!0},8992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/customdatahandlingadapter-1-9185cecdb18216bd42cd168630048542.png"},3718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/datahandleadapter-1-11ce4fda8283801d20c4d96c5c18011d.png"}}]);