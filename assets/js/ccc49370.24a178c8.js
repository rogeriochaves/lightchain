"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(7294),l=n(6010),a=n(1944),o=n(5281),c=n(9460),i=n(9058),s=n(390),m=n(7462),d=n(5999),u=n(2244);function p(e){const{nextItem:t,prevItem:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(u.Z,(0,m.Z)({},n,{subLabel:r.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(u.Z,(0,m.Z)({},t,{subLabel:r.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function h(){const{assets:e,metadata:t}=(0,c.C)(),{title:n,description:l,date:o,tags:i,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return r.createElement(a.d,{title:n,description:l,keywords:d,image:u},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&r.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&r.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var g=n(9407);function f(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:a}=(0,c.C)(),{nextItem:o,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:h,toc_max_heading_level:f}=d;return r.createElement(i.Z,{sidebar:t,toc:!u&&a.length>0?r.createElement(g.Z,{toc:a,minHeadingLevel:h,maxHeadingLevel:f}):void 0},r.createElement(s.Z,null,n),(o||m)&&r.createElement(p,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return r.createElement(c.n,{content:e.content,isBlogPostPage:!0},r.createElement(a.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},r.createElement(h,null),r.createElement(f,{sidebar:e.sidebar},r.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),l=n(7294),a=n(6010),o=n(3743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,a.Z)(c.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,r.Z)({},n,{linkClassName:i,linkActiveClassName:s})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),l=n(7294),a=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):r.push(l)})),r}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>i(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let l=t;l<=n;l+=1)r.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),i=s(c,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:r,isChild:a}=e;return t.length?l.createElement("ul",{className:a?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const p=l.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...h}=e;const g=(0,a.L)(),f=m??g.tableOfContents.minHeadingLevel,v=u??g.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,l.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:v});return d((0,l.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:f,maxHeadingLevel:v}}),[i,s,f,v])),l.createElement(p,(0,r.Z)({toc:E,className:n,linkClassName:i},h))}},7085:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),l=n(7294),a=n(5742),o=n(9960),c=n(614),i=n(2503),s=n(4673);const m="wrapper_BbjI",d=e=>{let{children:t}=e;return l.createElement("div",{className:m},t)},u="wrapper_kwvr",p="center_AjIv";var h=n(4593);const g=e=>{let{children:t,center:n=!1}=e;if(console.log("center: ",n),!t)return console.warn("<HTMLOutputBlock/> should include a code block"),null;if(!t.props?.children||"code"!==t.props?.children?.props?.originalType)return console.warn("<HTMLOutputBlock/> should include a code block"),null;const r=t.props.children.props.children,a=r.match(/<script[^>]*>(.*)<\/script>/s),o=a&&a.length>1;return l.createElement(l.Fragment,null,o?l.createElement(h.Z,null,l.createElement("script",null,a[1])):null,l.createElement("div",{className:u+(n?" "+p:""),dangerouslySetInnerHTML:{__html:r}}))};const f={head:e=>{const t=l.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...r}=e.props;return l.createElement(e.props.originalType,r)}return e}(e)));return l.createElement(a.Z,e,t)},code:e=>l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?l.createElement("code",e):l.createElement(c.Z,e),a:e=>l.createElement(o.Z,e),pre:e=>l.createElement(c.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?e.children?.props:{...e}),details:e=>{const t=l.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),a=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return l.createElement(s.Z,(0,r.Z)({},e,{summary:n}),a)},h1:e=>l.createElement(i.Z,(0,r.Z)({as:"h1"},e)),h2:e=>l.createElement(i.Z,(0,r.Z)({as:"h2"},e)),h3:e=>l.createElement(i.Z,(0,r.Z)({as:"h3"},e)),h4:e=>l.createElement(i.Z,(0,r.Z)({as:"h4"},e)),h5:e=>l.createElement(i.Z,(0,r.Z)({as:"h5"},e)),h6:e=>l.createElement(i.Z,(0,r.Z)({as:"h6"},e)),CodeOutputBlock:d,HTMLOutputBlock:g}}}]);