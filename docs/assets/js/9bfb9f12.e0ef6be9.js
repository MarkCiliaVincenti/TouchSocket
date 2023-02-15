"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5264],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>p});var r=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),f=u(n),p=s,v=f["".concat(o,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(v,i(i({ref:e},c),{},{components:n})):r.createElement(v,i({ref:e},c))}));function p(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:s,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9817:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const a={id:"fastbinaryformatter",title:"\u9ad8\u6027\u80fd\u4e8c\u8fdb\u5236\u5e8f\u5217\u5316"},i=void 0,l={unversionedId:"fastbinaryformatter",id:"fastbinaryformatter",title:"\u9ad8\u6027\u80fd\u4e8c\u8fdb\u5236\u5e8f\u5217\u5316",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/fastbinaryformatter.mdx",sourceDirName:".",slug:"/fastbinaryformatter",permalink:"/docs/fastbinaryformatter",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/fastbinaryformatter.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"fastbinaryformatter",title:"\u9ad8\u6027\u80fd\u4e8c\u8fdb\u5236\u5e8f\u5217\u5316"},sidebar:"docs",previous:{title:"\u5e94\u7528\u4fe1\u4f7f",permalink:"/docs/appmessenger"},next:{title:"Json\u5e8f\u5217\u5316",permalink:"/docs/jsonserialize"}},o={},u=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u5e8f\u5217\u5316\u3001\u53cd\u5e8f\u5217\u5316",id:"\u4e8c\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",level:2},{value:"\u4e09\u3001\u81ea\u5b9a\u4e49\u8f6c\u6362\u5668",id:"\u4e09\u81ea\u5b9a\u4e49\u8f6c\u6362\u5668",level:2},{value:"\u56db\u3001\u6027\u80fd\u6d4b\u8bd5",id:"\u56db\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"4.1 \u7b80\u5355\u6d4b\u8bd5",id:"41-\u7b80\u5355\u6d4b\u8bd5",level:3},{value:"4.2 \u590d\u6742\u7c7b\u578b\u6d4b\u8bd5",id:"42-\u590d\u6742\u7c7b\u578b\u6d4b\u8bd5",level:3}],c={toc:u};function d(t){let{components:e,...a}=t;return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,s.kt)("p",null,"\u8be5\u5e8f\u5217\u5316\u4ee5\u4e8c\u8fdb\u5236\u65b9\u5f0f\u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u4e0d\u8981\u6c42\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\u7c7b\u578b\u76f8\u540c\uff0c\u4f7f\u7528\u4f53\u9a8c\u548c\u517c\u5bb9\u6027\u4e0ejson\u76f8\u4f3c\u3002\u652f\u6301",(0,s.kt)("strong",{parentName:"p"},"\u57fa\u7840\u7c7b\u578b"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u5b9e\u4f53\u7c7b"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u6784\u4f53"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"\u5143\u7ec4"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"\u6570\u7ec4"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"\u5b57\u5178"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"List"),"\u7b49\u3002"),(0,s.kt)("h2",{id:"\u4e8c\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316"},"\u4e8c\u3001\u5e8f\u5217\u5316\u3001\u53cd\u5e8f\u5217\u5316"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var obj = "TouchSocket";\nvar data = SerializeConvert.FastBinarySerialize(obj);\nvar newobj = SerializeConvert.FastBinaryDeserialize<string>(data);\n')),(0,s.kt)("h2",{id:"\u4e09\u81ea\u5b9a\u4e49\u8f6c\u6362\u5668"},"\u4e09\u3001\u81ea\u5b9a\u4e49\u8f6c\u6362\u5668"),(0,s.kt)("p",null,"\u81ea\u5b9a\u4e49\u8f6c\u5316\u5668\u7684\u4f7f\u7528\uff0c\u53ef\u4ee5\u89e3\u51b3",(0,s.kt)("strong",{parentName:"p"},"\u6240\u6709\u7c7b\u578b"),"\u7684\u5e8f\u5217\u5316\uff0c\u4f46\u662f\u8fd9\u9700\u8981\u81ea\u5df1\u7f16\u5199\u4e00\u4e9b\u4ee3\u7801\u3002\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u58f0\u660e\u8f6c\u6362\u5668\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// \u7ee7\u627f<see cref="FastBinaryConverter{T}"/>\u6216\u8005\u5b9e\u73b0<see cref="IFastBinaryConverter"/>\n/// </summary>\nclass StudentFastBinaryConverter : FastBinaryConverter<Student>\n{\n    protected override Student Read(byte[] buffer, int offset, int len)\n    {\n        var byteBlock = new ValueByteBlock(buffer);\n        byteBlock.Pos = offset;\n        var obj = new Student();\n        obj.P1 = byteBlock.ReadInt32();\n        obj.P2 = byteBlock.ReadString();\n        return obj;\n    }\n\n    protected override int Write(ByteBlock byteBlock, Student obj)\n    {\n        //\u6b64\u5904\u53ef\u4ee5\u76f4\u63a5\u5d4c\u5957Json\u5e8f\u5217\u5316\uff0c\u4f46\u662f\u4e3a\u6f14\u793a\u6548\u679c\uff0c\u4e0b\u5217\u5c06\u4f9d\u7136\u4f7f\u7528\u4e8c\u8fdb\u5236\u65b9\u5f0f\n        int pos = byteBlock.Pos;\n        byteBlock.Write(obj.P1);\n        byteBlock.Write(obj.P2);\n        return byteBlock.Pos - pos;//\u8fd4\u56de\u7684\u5373\u662fobj\u6240\u6709\u7684\u5b57\u8282\u957f\u5ea6\n    }\n}\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\u9644\u52a0\u8f6c\u6362\u5668")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{1}","{1}":!0},"[FastConverter(typeof(StudentFastBinaryConverter))]\nclass Student\n{\n    public int P1 { get; set; }\n    public string P2 { get; set; }\n}\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u5f53\u7c7b\u578b\u5df2\u7ecf\u5b9a\u4e49\uff0c\u65e0\u6cd5\u901a\u8fc7\u7279\u6027\u6dfb\u52a0\u8f6c\u6362\u5668\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,s.kt)("inlineCode",{parentName:"p"},"FastBinaryFormatter.AddFastBinaryConverter(typeof(Student),new StudentFastBinaryConverter());"),"\u76f4\u63a5\u6dfb\u52a0\u3002")),(0,s.kt)("h2",{id:"\u56db\u6027\u80fd\u6d4b\u8bd5"},"\u56db\u3001\u6027\u80fd\u6d4b\u8bd5"),(0,s.kt)("h3",{id:"41-\u7b80\u5355\u6d4b\u8bd5"},"4.1 \u7b80\u5355\u6d4b\u8bd5"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5f85\u6d4b\u8bd5\u7c7b\u578b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"[Serializable]\npublic class MyPackPerson\n{\n    public int Age { get; set; }\n    public string Name { get; set; }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,s.kt)("p",null,"\u4ee5\u4e0b\u6d4b\u8bd5\u662f\u6267\u884c10000\u6b21\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u7684\u7ed3\u679c\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1884).Z,width:"1203",height:"228"})),(0,s.kt)("h3",{id:"42-\u590d\u6742\u7c7b\u578b\u6d4b\u8bd5"},"4.2 \u590d\u6742\u7c7b\u578b\u6d4b\u8bd5"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5f85\u6d4b\u8bd5\u7c7b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},' [Serializable]\npublic class Student\n{\n    public int P1 { get; set; }\n    public string P2 { get; set; }\n    public long P3 { get; set; }\n    public byte P4 { get; set; }\n    public DateTime P5 { get; set; }\n    public double P6 { get; set; }\n    public byte[] P7 { get; set; }\n\n    public List<int> List1 { get; set; }\n    public List<string> List2 { get; set; }\n    public List<byte[]> List3 { get; set; }\n\n    public Dictionary<int, int> Dic1 { get; set; }\n    public Dictionary<int, string> Dic2 { get; set; }\n    public Dictionary<string, string> Dic3 { get; set; }\n    public Dictionary<int, Arg> Dic4 { get; set; }\n}\n\n[Serializable]\npublic class Arg\n{\n    public Arg(int myProperty)\n    {\n        this.MyProperty = myProperty;\n    }\n\n    public Arg()\n    {\n        Person person = new Person();\n        person.Name = "\u5f20\u4e09";\n        person.Age = 18;\n    }\n\n    public int MyProperty { get; set; }\n}\n[Serializable]\npublic class Person\n{\n    public string Name { get; set; }\n    public int Age { get; set; }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u8d4b\u503c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'Student student = new Student();\nstudent.P1 = 10;\nstudent.P2 = "\u82e5\u6c5d\u68cb\u8317";\nstudent.P3 = 100;\nstudent.P4 = 0;\nstudent.P5 = DateTime.Now;\nstudent.P6 = 10;\nstudent.P7 = new byte[1024 * 64];\n\nRandom random = new Random();\nrandom.NextBytes(student.P7);\n\nstudent.List1 = new List<int>();\nstudent.List1.Add(1);\nstudent.List1.Add(2);\nstudent.List1.Add(3);\n\nstudent.List2 = new List<string>();\nstudent.List2.Add("1");\nstudent.List2.Add("2");\nstudent.List2.Add("3");\n\nstudent.List3 = new List<byte[]>();\nstudent.List3.Add(new byte[1024]);\nstudent.List3.Add(new byte[1024]);\nstudent.List3.Add(new byte[1024]);\n\nstudent.Dic1 = new Dictionary<int, int>();\nstudent.Dic1.Add(1, 1);\nstudent.Dic1.Add(2, 2);\nstudent.Dic1.Add(3, 3);\n\nstudent.Dic2 = new Dictionary<int, string>();\nstudent.Dic2.Add(1, "1");\nstudent.Dic2.Add(2, "2");\nstudent.Dic2.Add(3, "3");\n\nstudent.Dic3 = new Dictionary<string, string>();\nstudent.Dic3.Add("1", "1");\nstudent.Dic3.Add("2", "2");\nstudent.Dic3.Add("3", "3");\n\nstudent.Dic4 = new Dictionary<int, Arg>();\nstudent.Dic4.Add(1, new Arg(1));\nstudent.Dic4.Add(2, new Arg(2));\nstudent.Dic4.Add(3, new Arg(3));\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,s.kt)("p",null,"Fast\u7684\u6548\u7387\u6bd4System\u81ea\u5e26\u7684\uff0c\u5feb\u4e86\u8fd17\u500d\uff0c\u6bd4System.Text.Json\u5feb\u4e864\u500d\u591a\uff0c\u6bd4NewtonsoftJson\u5feb\u4e86\u8fd130\u500d\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6856).Z,width:"1402",height:"234"})))}d.isMDXComponent=!0},1884:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLMAAADkAQMAAABZiPR9AAAABlBMVEVg19cMDAyB3G6/AAAVt0lEQVR42uybv4vkRhaAvWwwoRlHE9jROvF/YEcXXHB/jYNLzsEF10JBc9FwODRCQWMuWBYHy+7QFI+iqR3EMgwbblA0GuhAQTNUoECYQtS9V79U0qh7djHmFrYX26qnUknflqSqT6/aX5hP8s/dFyeuE9eJ69Ph6g7UdI8VH4SH6roPOXwSnbj+MNf56MCNKz7FzbtR8/PkoKejU2OTs9jqHRXsdnMWjxDGNDZQSkUuV/ZNZrh+NuYv5vdwjg4DLMIDrp8TFBhxgfmduRA8l90Ci0dgtXRcl5d2B13OleEIl+KmH7i4v4IyB7muxlyqh8CljOPCLUDK5YLG9pGyl3Nl3+TP4OLzXHzg+lfgep9wvX+MS+QrsYlc4r9UzH94ll8+ESmXqJ6FcHl+Ls5jXZ1vwIV5lV9SG7utEy7xLHKJXZXby9lyaDLHBaoY+ryDX6h4BYVSryHlAlbE/rq9hdtY1ygA9zBdMaWojd02CRcULpC4f8uUvZwthyYzXM+BzjtwgeOCCddzaGN4VddQxzo9cLWei7Z6aP33cAGB+3nruGw5NJnjyma4mOXKUq7sJh7ER1w9ts/e21Y3jstu+4Hrn5m/AHUOv1GZPchy+SZzXPwgF0+5OIsHwYiL+ps7Ln8f7TZ9H7kPgFiYsq8EOK4j9/EeYD15vmAN99P7+PIQ1/2agbKtXt5bLrtNxy8AGbm2L+/t5Ww5NJnh+k60F+LN5H38+s1Fm3/114TrO/H2Io73Z2diGM3z9s2ZsFxfv21zeh/tNh+OqMSFG+8v8lzs3rb2crYcmjw6P/70ic7bX5584sR14jpx/RGupjsUJOGw/8jh0+gT5spm/5jukeKD8FDdsP/I4dPo9NyfuD7T9/H0fJ24PnuuM0omme/dgd8/fWIal6lKivgnEybrwtkaI4QYTt2YrGlC2JnGt2lCqcPGVaY711Zk+K85P0v/FnTglItZrsKdtoAfjXSZqqRobMoIqnBtaeiTNXJhKGUIKyN9GxlKFX7EMt5Wri1+yUqMh09L32TKZS+gAteVMtxlhJIiZSDA6NhfMObCqiHsYtYLQqlDLuCt6y+OXLj/iqX9BXCI64U77YsB5sVRrv6jufYJV29+e5zr8lzs8hfiWwuzVGbluYYitcWe7swPG88ltQyBTbjhiX04x7XsDSyl41r1SwPaXC4f5VK3sFWv4B904CvspMLBJEVq2xBXyH3gg9oMWUrHFSBmuJg2a+a5Cs0MNB/SX6oGjlyvAgwMXBC5lDQK2/Okv4BHLkpn+XCOq+/Mdc8cF3Q99dcVfABXhlzZrxaGD1x8xAWWSyTPF4gxlzjMpUzfLzyX6un5+iAuztWaP6cD1xBhkuLA1SfvI/Rjrv4gF9SmBz9+QW33s0e5GN7H7f3apqdKgtmWk6LjKpFr7XOkJXGtw6llqXAA8mFXxvErlDoGpWSeawusnIxfrsmD8T4/E7v2G2FhvnlamV3ZjIuWS5RqY97kbswuabz3AYUKXwMfbso43ofSpsrKprpz7+suq8rJeO+anObtE9dnzvV93LsxR/wL56BMayO8Y9G72IgoXJpCHepwsqr8WkSGVVSqSLmyxr6comqaivYn7yO+nWKcByj8tjVBFWb9q8I5p21RssIgiPMQROFqKWxDXVWharnTceOWbZjEI7i0gxkwKRntT8YvCdNxtfBLefcqcs35V8eNJi4YuABnw4SLFo5cXRcn0cgFHOdD7hY/sB1u25F/kQXpEdcLz6Ui16x/Edd+H7n6nma4yLWncD/Lte+nXL3lwqMTn+C96Sdc4ttcPNuIPO824tlB/+pWqF+S+ts6lsZnDfQqCJekMNT1xOXVaolVlmuFirN0XBpWdNv71L9WmpQz5ULpUlDQ+hQKVHHQv7rCcjV+Irbu1RRhVpYU+mcEL4CTqO8KhlVWAAr85GeOq1kXsCbepL+KhnICY65XtBBGXH65a9a/OhQGfE6ldyzXX1G4GIXMh11HquUu2WMVla5Bouf4/roGuDaoYonn4F3WasyV/YpcgrgEwEH/Iq7FwgTHcs9XFK4FhQsfqo7qA9fClhApcvW4xf1qxIXP15gLpQu5euLqAQ76F3FRp3jHcu9jFC765rDdR2FNXNG/3Hqt5QL/PlouXaf+Re0nXCDvqYG671yzef/qtiVyleAdCw9Fg9oG4dIU6lDXoUyF56t0XHILqmR+/JJbKWl/Mn5toZxwoXS14iIXedvl4uKgf212tbq7K4V3LBzv0aB2QbjuKLzzddkGZcp9wJqqvLN3utkJVVZ+vG92TVPeZel4vxOlUAfmx5+Oz4/1/2ve/vI4Fz/5xInr47msdZknj/kXmlTVCVQof1AmcMwf8l+6Mk2mQ12GjhXyX5mIKS/vX/gy45mwmH4PaTp1yuV+xPVjuMDB/Bc3rILoXyQmbTvkc1qconjrQ8rWsJD/CjPo4F+4C8+ExfT7scXaKZdy/xz1L9rgmK/5AS6b3fKh5sn3tv99TuI5WIln4nyU/2rtD7ISLv6Aaz7/9ZBrvx+49ja79ZFcaT5nP+WqLza5eKLEv4/7F5oUUP4rKNeyxzvRx/wXecYypMO6ZTI/di4PkPiX6WXXm9VqlP+SWDvianBqhNcKPeSof6FJrSn/FZQL9UVKHftFrknbfdgxo9eRy+UBEv8yuum0KYpRf0k7iydcWnLL1Rz3LzSWa/yrq6BcPf1cafBldo2awHyo0CquA5fyPxUa/Au70KX30jwTs12ccPVSqOy1yprj/oVcPblOUC60pQUqVMh/LUjHFj5ELtVHLp9eHPwLd3VqyrWYckHTK/5a8ea4f+F/Apf7kKhx/Kpj/ksjFz7ZLsSD6jku71+mhq6e5r/09DsNGri3z9dx/0KTkh2UKigXg1LrIf+lJWW3fKhYCTH/5bkS/7LvY7ndjsYvjbUjrlzlrfjqb+I/x/3LVHWzEaUKylVl5R0qVMh/3TWU3fKhqsos5r+Uu9OJf+EUsMnK3W403t9h7Xh+VJ+of5Un/zpx/SlcT+PK44Z+Zq7eHfcv1CYjwuSeVfhdU6X+paugYyhifvaxX992iO8ajcolbFpMZ01GK5np+2gXJD0XxJVH+/P3y3fH/Qu1aVh/5DjpSJb6V8uCXkBL6TL3nWYqa4hVJVucUN081YLkdKZ0/KJ0WuC6oiEwWed7zL+AvlkHzwE+8q82rvPplj7PJ/2Fdgbcc2mUHN2N/EsnnjNw8ZTroH/1h7n2lNCKXPs5rn3k2nuu3w5wLatNvrx8Vp1f1OL8slKXzsUP+ZfEU8mw/oi21K8g9S8JQcdIuR5wrdCCaN2RkgLdakn7x+uPqz72FwPFVMFucY68xZJicMy/GlSoJixJsbXRxTr1L7kOOjbLVSAXrTtaroLR/vH6YxHzhVctqpeCtpYaatVSZu6Yf/n+8v6FggXXqX+x61CHD8dDLvwSAVp3pL+Twq5Vo/wXPkQQ83L8RhDXTS37rFY3SqnsmH/558v7F54Zz57416IPOqYWc1yUPHNatpjninkTznriYnUDvKb7qPgx//Lvo/evHjWqT/1L90HHlJ7jorvs/mcP+j8biIuNuerI9RLusU9fIhfex5dKbY/6F3KVENYfmSxhK1P/0jLomNKl/9owXRm4trqUW/dZqdWW0UpmOn6p/7V39jquKksUDnd405vdVx00gZ/CIvBDHFmohRCy0H4GZGGJgGCCDiaooNXiVlVX/9jNAHvOXN0TsI9mH0Mbe23Mz+dVtXrKezgf//P7/fPX+79//9Lv7a/33+/vfD5+yV9t25Strz92U1mMU8pfj8njmH6UjVzvm7LhU7Rpxkc5jQVfZB967KiSmV7vdTnmfY96z/3x/+B/lXt0Hfx16PoTXU3S+bXNXwXVFPE+VLhX68jg6sTwAmonngs/NhFdFdL1xbYWPpW+Ck3e/0IQQ5RLzkdo8Uog/KWSzq9t/qoRlxCZemGGCq9EXSXGEkIWu1vi9fT4oK6l64ttLXwqfXXs/fdHBDFEueT6Rdt3KujSnEncxV81boD3x9rE+iOoz7C/DHJKLbrogeiC2uUMgUt7KvhMfOtI+IvjXaKrTnRt89eiro+/oyvt/0p1OeNrL3+dXL3zIvxFRT1QYni5EtoJoYoXL/jgdJKuL7a18KmXRFevFHJJ2v8FFj9g4S9nfO3lrwpvjPjmZ+Gv63Sd4SqGl9NVnSu3eMYHcuhA5W7OcD0nuvCdCeXS/WXwhBD+csbXXv6i9i1qZtKOsW498tdNDC/8T5OLZN0iVcukzof7gJ1DuKmF/RU5B1wrHutyxtde/kJdVnRx/ZGIxhteia72C11WLRxfiS5yfYS/nPG1l79U1GWDLjG8nC71XJuUri/5pBd0pf4XEJgNXhcZX3v5q4Ky11DetWOsXvXIWGJ4IWRpXVb3yi3eka7C8cW2FhI/lRzT6xeiXHL9wvOx9OejM7728lfXDJNuylE7xpraCRlLDK9maFBXN3ZucUS6ct9m56ZjW2tuuOSYXu8R5ZLrfVO0ZeP5S/8Yfw0/et8uf4y/6oNzDl2HrkPXoevQdeg6dB26Dl2Hrn+Oriz/WET/q4j5R+6ml1cjw2qKLz1RW71fXMg/kg9misLldKj/q/hW/lFF/0uF/GPNXeuzz/N1sf+eG72qtfwjdY59UgWTt+0U+TzfyD+a6H+ZkLd60QVp/rFO45ALeavZ4MbG562AdX0j/2ii//Wk6+Pv6Prwuqijpv5W/hGi/wVB1+lEO1tKjha/3Mf643yhrqCV/CN1jvXgijKzATufvpV/hOgzRV0Vd9PLG1FtPb4rHpvmupZ/pM6xoIv6v6pv5R911KWDLmvnqo8ZR+hVmn+E21r+kfqaKspquP0FFJv4Rv5RR//rSddbaLnXLiCa5B/tWv6RdL15XRYoDPmd/KOO/lfUpbiLUUqOg9MV84+DXcs/ki7jdS30f+3MP+ry5aE7vsrY8kWGVaw/zvdSreYfZ30vE12qrL6Vf9TR/9Ih/9hxN72UHIuyaWP9cR7LYjX/OOuxfGjtzlfq/+qO/OOh69CV6VrOP2b8RR3zeAr5/i86+UL+kUqTBoFK6o8trpc8DEJWO+3IPxLKFWZH/jHjL+qYr+L8E4ozdL2vP1aK+tRDBhHHKukin10n60b+kVAOX2I7/5jxF0i+Sp5kVDL/BJUAP7mTfZ6f6x21f7SRfwRVc9fYZv4x4y/WRT3SX+j6iLqsXde1kH9kXR878o8Zf0HPDdBG6o98b/T8Bdyaf/K9YdSfLLpOUrfayj+CvXB31mb+MeMvQPC6TqH/i3V5/qLSZI9ABT4bieuvkj+UvMJG/hHMOde1lH/M+Iv21433FzOWlv0l9cebrmbba5+NxPU3ARrpbNrIPwLHK3fkHzP+ouPL8vHlMo4+Z+jqj1ZT/7yvTUbgsVr63Dfyj1R/pK6xzfxjxl8g82BI/5dO84+ky7gO+1B/lEkqhnnYk3+k+qM2O/KPGX8hMfW9Cv1fmsqJnr+oNGlKmnxVspGBuiolnfgb+UdQFK/ckX/M+Ktph2lqQ/+XpnKi5y8qTT4QqLTPRgbq6grpxN/IPzbFWOrHj+cfh//pfftfR/3x0PXjupbzj7n/hX9N7RxavvBc7KAIRgnFIUG8McD1k3Hr6ex0X4FwgxZc/z3Q7BVt95J/fJl/Yjn/mPtf/dzRlDe+5QsvS1VXB8OLwKUTvOhwfe9wruvCdE5EWJ3zCTq+8lYv+Uca28w/5v5X7abK8i1fzGJBF+BV8hM89uB69en3V9BFGzhdIIT215quejH/mPtfpIsmmfhCl50/nnR9vOiie5z1uqzT9Zx/fNG1nH/M/S8EpAtNMiHIxffKUzC8wMwUanRjuF5yYHEGA2NpUjPXf4//ip647Dn/SGOb+cfc/8Kh8zSHli8yKqAKhhfiWQ/Sfw+0Pugy7gyYcIMJXP890BQt5vqSfzTVjvxj7n+Rb2nm0PKFH9oNbDC88KZb+elDgNZXXlewCGl/uf57MMSAt5f8I9gd+cfc/yJdyF++5UvT4RL670EjUIHwF+t687q0FhKjDVz/PdCCti/5R2135B9z/8v5vKHla3B5SG94kbsF0n9P+1KF69cwxCm/wMEY0MJgX/KPw578Y+5/3Uu40yQTglzEWFAFw0urkj6pqxxfZe91lfH6hfDmPl56I+Ky5/yjqnbkH3P/axyakSaZEOQqkLGaLhheui0fjfTfN01Hz+P1TSmdvy1u0Dau/75pi5a47Dn/SGNH/vHgnPnIP+b99zl/4f8g+l9APfZTKEYC01Xhx/B7+eSvX84J28o/4raRv1byjzl/IVN10f8iFlO9ivzFdOXHPufP3vOXc8K28o+IbJEnVvKPS/xVQ/S/6F6ZTmxKU2GAZ1mEr0/1zDlb+UdY1lWnur7iL9Jlv9Bln3R9kLv1qms1//ikayX/mPPXab4gBUT/C2L/PRHChaf9kjGeJ+xF13r+kaasOO3IP+b8Vc1nSP0v+gnFSJjOXLyTsSdd1z35R5qyotqRf8z5y7Ip6P0voBu6isVIct9A+7HKowLpuu3JP9KA3ZF/zPnLcrXc+19OVyw4WgoOev5C+HqLuuye/CPYhL9W8o9L/KUg+l9Bl/AXPhxA+zHvXj7pWs0/4ktH/lrJP+b8VZV3iP4X9LrUIfDI/hVNwiFjpjSe78UJ28o/IrJF/lrJP+b81Q1jE/2vZkJdUyhGNu1YFo32Y4/yMXn+ck7YVv4Rke2Vv+Yj/3hwznzkH5f5i+b0MkxTjmUIuKZQf2zbLpYjOze7PUis0eUf6des4I/zoyc3k0U8H/HbEhtlm/nHjL9q8o6YpmaXf0wmvCeTq4rlyEopuT9yrNHlH13Ir3b+fe9msojXL1X3oa9jNf+Y8RfrguX5V91iUhc18tsVOT7obpmiy+XXJDn/V6KrDrrqtfxjxl+4of34A13u7kM3oS902ZQnWJfdkX/M+Ot0mk3PukL+sVcXX3/ET2a+9GEMaD5VNkgMT9yKuk4nCkWeLpwh4zhfyl8WB/y8sKv5x4y/8FiYeqYpyT8qfIGzrz9O03U++3LkFSHtPDlDiWcMo/xjVZGfyr87UuKP6f4yOGCmHfnHjL+sxY2ZpiT/qHgqO6k/9v0tliNvVIh0+wtkZgW40cSo1lqV7q+kzkcDZkf+MeMvetk3phbJPz7VH6lwFxatL/ixLeZ02URXOL6iLuod8/y1mn/M+IsnWHW6bKrLPuuyXpc7HwfldSX5x3A+Rv4aVOSv1fxjxl8VApJhmgr5R9Xfff2R3K27CmNuMgmJNd4ZyfDYKvHnLtcvnskiuX5V91LtyT9m/NV1Q/tgmgr5x3Yaff2RSo5jG8Y0LjB1UaxxZCTrOgpFdqNc73kmi3i9Lzrkt/bIP/65rvkf+efQdeg6dB26Dl2HrkPXgq7/AjWt5qKNoVm5AAAAAElFTkSuQmCC"},6856:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);