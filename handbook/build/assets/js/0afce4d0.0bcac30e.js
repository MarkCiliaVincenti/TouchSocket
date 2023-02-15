"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[2996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),i=c(n),p=a,m=i["".concat(u,".").concat(p)]||i[p]||A[p]||s;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=i;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}i.displayName="MDXCreateElement"},4898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>A,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={id:"customdatahandlingadapter",title:"\u7528\u6237\u81ea\u5b9a\u4e49\u9002\u914d\u5668"},o=void 0,l={unversionedId:"customdatahandlingadapter",id:"customdatahandlingadapter",title:"\u7528\u6237\u81ea\u5b9a\u4e49\u9002\u914d\u5668",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/customdatahandlingadapter.mdx",sourceDirName:".",slug:"/customdatahandlingadapter",permalink:"/docs/customdatahandlingadapter",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/customdatahandlingadapter.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"customdatahandlingadapter",title:"\u7528\u6237\u81ea\u5b9a\u4e49\u9002\u914d\u5668"},sidebar:"docs",previous:{title:"\u539f\u59cb\u81ea\u5b9a\u4e49\u9002\u914d\u5668",permalink:"/docs/datahandleadapter"},next:{title:"\u6a21\u677f\u89e3\u6790\u201c\u56fa\u5b9a\u5305\u5934\u201d\u6570\u636e\u9002\u914d\u5668",permalink:"/docs/customfixedheaderdatahandlingadapter"}},u={},c=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u8fd0\u884c\u903b\u8f91",id:"\u4e8c\u8fd0\u884c\u903b\u8f91",level:2},{value:"\u4e09\u3001\u7279\u70b9",id:"\u4e09\u7279\u70b9",level:2},{value:"\u56db\u3001\u4f7f\u7528",id:"\u56db\u4f7f\u7528",level:2}],d={toc:c};function A(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u548c\u539f\u59cb\u9002\u914d\u5668\u76f8\u6bd4\uff0c\u7528\u6237\u81ea\u5b9a\u4e49\u9002\u914d\u5668\uff08",(0,a.kt)("strong",{parentName:"p"},"CustomDataHandlingAdapter"),"\uff09\u7b80\u5355\u5f88\u591a\u3002\u56e0\u4e3a\u4ed6\u53ea\u9700\u8981\u8003\u8651\u63a5\u4e0b\u6765\u5982\u4f55\u5904\u7406\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u8fd0\u884c\u903b\u8f91"},"\u4e8c\u3001\u8fd0\u884c\u903b\u8f91"),(0,a.kt)("img",{src:n(8992).Z,width:"700"}),(0,a.kt)("p",null,"\u8fd4\u56de\u6307\u4ee4\u7c7b\u578b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FilterResult.Cache\uff1a\u5c06ByteBlock\u4e2d\u7684\uff0c\u4eceByteBlock.Pos\u5230\u7ed3\u675f\u7684\u6240\u6709\u6570\u636e\u8fdb\u884c\u7f13\u5b58\uff0c\u7528\u4e8e\u548c\u4e0b\u6b21\u63a5\u6536\u6570\u636e\u505a\u62fc\u63a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"FilterResult.Success\uff1a\u5b8c\u6210\u672c\u6b21\u6570\u636e\u89e3\u6790\uff0c\u5411Received\u6295\u9012IRequestInfo\u5bf9\u8c61\u3002\u5728\u8fd4\u56de\u4e4b\u524d\uff0c\u8bf7\u4e00\u5b9a\u786e\u4fdd\u5df2\u7ecf\u4fee\u6539ByteBlock.Pos\u5c5e\u6027\u3002\u4e0d\u7136\u4f1a\u53d1\u751f\u65e0\u9650\u5faa\u73af\u7684\u5371\u9669\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ul"},"FilterResult.GoOn\uff1a\u5c06ByteBlock.Pos\u81f3\u7ed3\u675f\u7684\u6570\u636e\u91cd\u65b0\u6295\u9012\uff0c\u6240\u4ee5\u5728\u8fd4\u56de\u4e4b\u524d\uff0c\u8bf7\u4e00\u5b9a\u786e\u4fdd\u5df2\u7ecf\u4fee\u6539ByteBlock.Pos\u5c5e\u6027\uff0c\u81f3\u5c11\u5df2\u7ecf\u9012\u589e\u4e00\u4f4d\u3002\u4e0d\u7136\u4f1a\u53d1\u751f\u65e0\u9650\u5faa\u73af\u7684\u5371\u9669\u60c5\u51b5\u3002")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd4\u56deSuccess\u6216\u8005GoOn\u6307\u4ee4\u65f6\uff0c\u8bf7\u4e00\u5b9a\u786e\u4fdd\u5df2\u7ecf\u4fee\u6539ByteBlock.Pos\u5c5e\u6027\uff0c\u81f3\u5c11\u5df2\u7ecf\u9012\u589e\u4e00\u4f4d\u3002\u4e0d\u7136\u4f1a\u53d1\u751f\u65e0\u9650\u5faa\u73af\u7684\u5371\u9669\u60c5\u51b5\u3002")),(0,a.kt)("h2",{id:"\u4e09\u7279\u70b9"},"\u4e09\u3001\u7279\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u66f4\u52a0\u81ea\u7531\u5ea6\u7684\u64cd\u4f5c\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u80fd\u591f\u7b80\u5355\u7684\u7f13\u5b58\u4e0d\u80fd\u89e3\u6790\u7684\u6570\u636e\u3002")),(0,a.kt)("h2",{id:"\u56db\u4f7f\u7528"},"\u56db\u3001\u4f7f\u7528"),(0,a.kt)("p",null,"\u8fd8\u662f\u4ee5\u4e0b\u5217\u6570\u636e\u4e3a\u4f8b\uff1a"),(0,a.kt)("img",{src:n(3718).Z}),(0,a.kt)("p",null,"\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u58f0\u660e\u65b0\u5efa\u7c7b\uff0c\u5b9e\u73b0IRequestInfo\u63a5\u53e3\uff0c\u6b64\u5bf9\u8c61\u5373\u4e3a\u5b58\u50a8\u6570\u636e\u7684\u5b9e\u4f53\u7c7b\uff0c\u53ef\u5728\u6b64\u7c7b\u4e2d\u58f0\u660e\u4e00\u4e9b\u5c5e\u6027\uff0c\u4ee5\u5907\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u58f0\u660e\u65b0\u5efa\u7c7b\uff0c\u7ee7\u627fCustomDataHandlingAdapter\uff0c\u5e76\u4e14\u4ee5\u6b65\u9aa41\u58f0\u660e\u7684\u7c7b\u4f5c\u4e3a\u6cdb\u578b\u3002\u5e76\u5b9e\u73b0\u5bf9\u5e94\u62bd\u8c61\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ol"},"TouchSocketConfig\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7Received\uff08\u4e8b\u4ef6\u3001\u65b9\u6cd5\u3001\u63d2\u4ef6\uff09\u4e2d\u7684RequestInfo\u5bf9\u8c61\uff0c\u5f3a\u8f6c\u4e3a\u6b65\u9aa41\u58f0\u660e\u7684\u7c7b\u578b\uff0c\u7136\u540e\u8bfb\u53d6\u5176\u5c5e\u6027\u503c\uff0c\u4ee5\u5907\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u3010\u5b9a\u4e49\u9002\u914d\u5668\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'internal class MyCustomDataHandlingAdapter : CustomDataHandlingAdapter<MyRequestInfo>\n{\n\n    /// <summary>\n    /// \u7b5b\u9009\u89e3\u6790\u6570\u636e\u3002\u5b9e\u4f8b\u5316\u7684TRequest\u4f1a\u4e00\u76f4\u4fdd\u5b58\uff0c\u76f4\u81f3\u89e3\u6790\u6210\u529f\uff0c\u6216\u624b\u52a8\u6e05\u9664\u3002\n    /// <para>\u5f53\u4e0d\u6ee1\u8db3\u89e3\u6790\u6761\u4ef6\u65f6\uff0c\u8bf7\u8fd4\u56de<see cref="FilterResult.Cache"/>\uff0c\u6b64\u65f6\u4f1a\u4fdd\u5b58<see cref="ByteBlock.CanReadLen"/>\u7684\u6570\u636e</para>\n    /// <para>\u5f53\u6570\u636e\u90e8\u5206\u5f02\u5e38\u65f6\uff0c\u8bf7\u79fb\u52a8<see cref="ByteBlock.Pos"/>\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u7136\u540e\u8fd4\u56de<see cref="FilterResult.GoOn"/></para>\n    /// <para>\u5f53\u5b8c\u5168\u6ee1\u8db3\u89e3\u6790\u6761\u4ef6\u65f6\uff0c\u8bf7\u8fd4\u56de<see cref="FilterResult.Success"/>\u6700\u540e\u5c06<see cref="ByteBlock.Pos"/>\u79fb\u81f3\u6307\u5b9a\u4f4d\u7f6e\u3002</para>\n    /// </summary>\n    /// <param name="byteBlock">\u5b57\u8282\u5757</param>\n    /// <param name="beCached">\u662f\u5426\u4e3a\u4e0a\u6b21\u9057\u7559\u5bf9\u8c61\uff0c\u5f53\u8be5\u53c2\u6570\u4e3aTrue\u65f6\uff0crequest\u4e5f\u5c06\u662f\u4e0a\u6b21\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u3002</param>\n    /// <param name="request">\u5bf9\u8c61\u3002</param>\n    /// <param name="tempCapacity">\u7f13\u5b58\u5bb9\u91cf\u6307\u5bfc\uff0c\u6307\u793a\u5f53\u9700\u8981\u7f13\u5b58\u65f6\uff0c\u5e94\u8be5\u7533\u8bf7\u591a\u5927\u7684\u5185\u5b58\u3002</param>\n    /// <returns></returns>\n    protected override FilterResult Filter(ByteBlock byteBlock, bool beCached, ref MyRequestInfo request, ref int tempCapacity)\n    {\n        //\u4ee5\u4e0b\u89e3\u6790\u601d\u8def\u4e3a\u4e00\u6b21\u6027\u89e3\u6790\uff0c\u4e0d\u8003\u8651\u7f13\u5b58\u7684\u4e34\u65f6\u5bf9\u8c61\u3002\n\n        if (byteBlock.CanReadLen < 3)\n        {\n            return FilterResult.Cache;//\u5f53\u5934\u90e8\u90fd\u65e0\u6cd5\u89e3\u6790\u65f6\uff0c\u76f4\u63a5\u7f13\u5b58\n        }\n\n        int pos = byteBlock.Pos;//\u8bb0\u5f55\u521d\u59cb\u6e38\u6807\u4f4d\u7f6e\uff0c\u9632\u6b62\u672c\u6b21\u65e0\u6cd5\u89e3\u6790\u65f6\uff0c\u56de\u9000\u6e38\u6807\u3002\n\n        MyRequestInfo myRequestInfo = new MyRequestInfo();\n\n        //\u6b64\u64cd\u4f5c\u5b9e\u9645\u4e0a\u6709\u4e24\u4e2a\u4f5c\u7528\uff0c\n        //1.\u586b\u5145header\n        //2.\u5c06byteBlock.Pos\u9012\u589e3\u7684\u957f\u5ea6\u3002\n        byteBlock.Read(out byte[] header, 3);//\u586b\u5145header\n\n        //\u56e0\u4e3a\u7b2c\u4e00\u4e2a\u5b57\u8282\u8868\u793a\u6240\u6709\u957f\u5ea6\uff0c\u800cDataType\u3001OrderType\u5df2\u7ecf\u5305\u542b\u5728\u4e86header\u91cc\u9762\u3002\n        //\u6240\u6709\u53ea\u9700\u5440\u518d\u8bfb\u53d6header[0]-2\u4e2a\u957f\u5ea6\u5373\u53ef\u3002\n        byte bodyLength = (byte)(header[0] - 2);\n\n        if (bodyLength > byteBlock.CanReadLen)\n        {\n            //body\u6570\u636e\u4e0d\u8db3\u3002\n            byteBlock.Pos = pos;//\u56de\u9000\u6e38\u6807\n            return FilterResult.Cache;\n        }\n        else\n        {\n            //\u6b64\u64cd\u4f5c\u5b9e\u9645\u4e0a\u6709\u4e24\u4e2a\u4f5c\u7528\uff0c\n            //1.\u586b\u5145body\n            //2.\u5c06byteBlock.Pos\u9012\u589ebodyLength\u7684\u957f\u5ea6\u3002\n            byteBlock.Read(out byte[] body, bodyLength);\n\n            myRequestInfo.Header = header;\n            myRequestInfo.DataType = header[1];\n            myRequestInfo.OrderType = header[2];\n            myRequestInfo.Body = body;\n            request = myRequestInfo;//\u8d4b\u503cref\n            return FilterResult.Success;//\u8fd4\u56de\u6210\u529f\n        }\n    }\n}\n\ninternal class MyRequestInfo : IRequestInfo\n{\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u5c5e\u6027,Body\n    /// </summary>\n    public byte[] Body { get; internal set; }\n\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u5c5e\u6027,Header\n    /// </summary>\n    public byte[] Header { get; internal set; }\n\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u5c5e\u6027,DataType\n    /// </summary>\n    public byte DataType { get; internal set; }\n\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u5c5e\u6027,OrderType\n    /// </summary>\n    public byte OrderType { get; internal set; }\n}\n')),(0,a.kt)("p",null,"\u3010\u63a5\u6536\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"TcpService service = new TcpService();\nservice.Received += (client, byteBlock, requestInfo) =>\n{\n    //\u63a5\u6536\u4fe1\u606f\uff0c\u5728CustomDataHandlingAdapter\u6d3e\u751f\u7684\u9002\u914d\u5668\u4e2d\uff0cbyteBlock\u5c06\u4e3anull\uff0crequestInfo\u5c06\u4e3a\u9002\u914d\u5668\u5b9a\u4e49\u7684\u6cdb\u578b\n    if (requestInfo is MyRequestInfo myRequestInfo)\n    {\n        //\u6b64\u5904\u53ef\u4ee5\u5904\u7406MyRequestInfo\u7684\u76f8\u5173\u4fe1\u606f\u4e86\u3002\n        string body = Encoding.UTF8.GetString(myRequestInfo.Body, 0, myRequestInfo.Body.Length);\n    }\n  \n};\n\nservice.Setup(new TouchSocketConfig()//\u8f7d\u5165\u914d\u7f6e     \n    .SetListenIPHosts(new IPHost[] { new IPHost(7790) })\n    .SetDataHandlingAdapter(() => { return new MyCustomDataHandlingAdapter(); }))//\u914d\u7f6e\u9002\u914d\u5668\n    .Start();//\u542f\u52a8\n")),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u521b\u5efa\u7684\u9002\u914d\u5668\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u5747\u9002\u7528\u3002")))}A.isMDXComponent=!0},8992:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/customdatahandlingadapter-1-0aec7ea38e0dd3113fa927cec2861066.png"},3718:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);