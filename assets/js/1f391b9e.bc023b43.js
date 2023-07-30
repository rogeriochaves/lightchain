"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3085],{4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var l=t(7294),r=t(6010),a=t(1944),c=t(5281),i=t(1155),o=t(5042),s=t(9407);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:p,hide_table_of_contents:h}=u;return l.createElement(a.FG,{className:(0,r.Z)(p??c.k.wrapper.mdxPages,c.k.page.mdxPage)},l.createElement(a.d,{title:t,description:d}),l.createElement(i.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,r.Z)("row",m.mdxPageWrapper)},l.createElement("div",{className:(0,r.Z)("col",!h&&"col--8")},l.createElement("article",null,l.createElement(o.Z,null,l.createElement(n,null)))),!h&&n.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(s.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},9407:(e,n,t)=>{t.d(n,{Z:()=>m});var l=t(7462),r=t(7294),a=t(6010),c=t(3743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},o="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return r.createElement("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",n)},r.createElement(c.Z,(0,l.Z)({},t,{linkClassName:o,linkActiveClassName:s})))}},3743:(e,n,t)=>{t.d(n,{Z:()=>h});var l=t(7462),r=t(7294),a=t(6668);function c(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const l=t.slice(2,e.level);e.parentIndex=Math.max(...l),t[e.level]=n}));const l=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):l.push(r)})),l}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:l});return function(e){return e.level>=t&&e.level<=l}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const l=e.find((e=>o(e).top>=t));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,r.useRef)(void 0),t=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const l=[];for(let r=n;r<=t;r+=1)l.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:a,maxHeadingLevel:c}),o=s(i,{anchorTopOffset:t.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:l,isChild:a}=e;return n.length?r.createElement("ul",{className:a?void 0:t},n.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}const p=r.memo(u);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...h}=e;const f=(0,a.L)(),v=m??f.tableOfContents.minHeadingLevel,g=u??f.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,r.useMemo)((()=>i({toc:c(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,r.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:g}}),[o,s,v,g])),r.createElement(p,(0,l.Z)({toc:E,className:t,linkClassName:o},h))}},7085:(e,n,t)=>{t.d(n,{Z:()=>v});var l=t(7462),r=t(7294),a=t(5742),c=t(9960),i=t(614),o=t(2503),s=t(4673);const m="wrapper_BbjI",d=e=>{let{children:n}=e;return r.createElement("div",{className:m},n)},u="wrapper_kwvr",p="center_AjIv";var h=t(4593);const f=e=>{let{children:n,center:t=!1}=e;if(console.log("center: ",t),!n)return console.warn("<HTMLOutputBlock/> should include a code block"),null;if(!n.props?.children||"code"!==n.props?.children?.props?.originalType)return console.warn("<HTMLOutputBlock/> should include a code block"),null;const l=n.props.children.props.children,a=l.match(/<script[^>]*>(.*)<\/script>/s),c=a&&a.length>1;return r.createElement(r.Fragment,null,c?r.createElement(h.Z,null,r.createElement("script",null,a[1])):null,r.createElement("div",{className:u+(t?" "+p:""),dangerouslySetInnerHTML:{__html:l}}))};const v={head:e=>{const n=r.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:n,originalType:t,...l}=e.props;return r.createElement(e.props.originalType,l)}return e}(e)));return r.createElement(a.Z,e,n)},code:e=>r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?r.createElement("code",e):r.createElement(i.Z,e),a:e=>r.createElement(c.Z,e),pre:e=>r.createElement(i.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?e.children?.props:{...e}),details:e=>{const n=r.Children.toArray(e.children),t=n.find((e=>"summary"===e?.props?.mdxType)),a=r.createElement(r.Fragment,null,n.filter((e=>e!==t)));return r.createElement(s.Z,(0,l.Z)({},e,{summary:t}),a)},h1:e=>r.createElement(o.Z,(0,l.Z)({as:"h1"},e)),h2:e=>r.createElement(o.Z,(0,l.Z)({as:"h2"},e)),h3:e=>r.createElement(o.Z,(0,l.Z)({as:"h3"},e)),h4:e=>r.createElement(o.Z,(0,l.Z)({as:"h4"},e)),h5:e=>r.createElement(o.Z,(0,l.Z)({as:"h5"},e)),h6:e=>r.createElement(o.Z,(0,l.Z)({as:"h6"},e)),CodeOutputBlock:d,HTMLOutputBlock:f}}}]);