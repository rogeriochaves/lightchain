"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6263],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=c(a),d=n,h=l["".concat(p,".").concat(d)]||l[d]||m[d]||s;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:2},i="Stream Basics",o={unversionedId:"stream-basics/index",id:"stream-basics/index",title:"Stream Basics",description:"The Stream is the main building block of LangStream, you compose streams together to build your LLM application.",source:"@site/docs/stream-basics/index.md",sourceDirName:"stream-basics",slug:"/stream-basics/",permalink:"/langstream/docs/stream-basics/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stream-basics/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/langstream/docs/intro"},next:{title:"Why Streams?",permalink:"/langstream/docs/stream-basics/why_streams"}},p={},c=[],u={toc:c},l="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stream-basics"},"Stream Basics"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/index.html#stream"},"Stream")," is the main building block of LangStream, you compose streams together to build your LLM application."),(0,n.kt)("p",null,"A Stream is basically a function that takes an input and produces an ",(0,n.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0525/"},(0,n.kt)("inlineCode",{parentName:"a"},"AsyncGenerator"))," of an output, if you are not familiar with async generators, you can think about it as list over time."),(0,n.kt)("p",null,"The simplest of all streams takes one input and produces a single item, and this is how you create one:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'uppercase_stream = Stream[str, str]("UppercaseStream", lambda input: input.upper())\n')),(0,n.kt)("p",null,"As you can see, there are some parameters you pass to it, first of all is the type signature ",(0,n.kt)("inlineCode",{parentName:"p"},"[str, str]"),", this defines the input and output types of the stream, respectively. In this case they are the same, but they could be different, you can read more about why types are important for LangStream ",(0,n.kt)("a",{parentName:"p",href:"/docs/stream-basics/type_signatures"},"here"),"."),(0,n.kt)("p",null,"It also takes a name, ",(0,n.kt)("inlineCode",{parentName:"p"},'"UppercaseStream"'),", the reason for having a name is making it easier to debug, so it can be anything you want, as long as it's helpful for you to identify later. If any issues arrive along the way, you can debug and visualize exactly which streams are misbehaving."),(0,n.kt)("p",null,"Then, the heart of the stream, is the lambda function that is executed when the stream is called. It takes exactly one input (which is ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," in this) and must return a value of the specified output type (also ",(0,n.kt)("inlineCode",{parentName:"p"},"str"),"), here it just returns the same input but in uppercase."),(0,n.kt)("p",null,"Now that we have a stream, we can just run it, as a function, and we will get back an ",(0,n.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0525/"},(0,n.kt)("inlineCode",{parentName:"a"},"AsyncGenerator"))," of outputs that we can iterate on. Here is the full example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from langstream import Stream\nimport asyncio\n\nasync def example():\n    uppercase_stream = Stream[str, str]("UppercaseStream", lambda input: input.upper())\n\n    async for output in uppercase_stream("i am not screaming"):\n        print(output.data)\n\nasyncio.run(example())\n#=> I AM NOT SCREAMING\n')),(0,n.kt)("p",null,"As you can see, upon calling the stream, we had to iterate over it using ",(0,n.kt)("inlineCode",{parentName:"p"},"async for"),", this loop will only run once, because our stream is producing a single value, but still, it is necessary since streams are always producing async generators.\nGo to the next section to understand better why is that."))}m.isMDXComponent=!0}}]);