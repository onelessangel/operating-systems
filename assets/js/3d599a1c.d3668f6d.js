"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[53384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={},a="Prints Working after Closing `stdio`",l={unversionedId:"Lab/I/O/Zero-Copy/quiz/prints-work-no-stdio",id:"Lab/I/O/Zero-Copy/quiz/prints-work-no-stdio",title:"Prints Working after Closing `stdio`",description:"Question Text",source:"@site/docs/Lab/I/O/Zero-Copy/quiz/prints-work-no-stdio.md",sourceDirName:"Lab/I/O/Zero-Copy/quiz",slug:"/Lab/I/O/Zero-Copy/quiz/prints-work-no-stdio",permalink:"/operating-systems/Lab/I/O/Zero-Copy/quiz/prints-work-no-stdio",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prints-working-after-closing-stdio"},"Prints Working after Closing ",(0,o.kt)("inlineCode",{parentName:"h1"},"stdio")),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Why does ",(0,o.kt)("inlineCode",{parentName:"p"},"support/redirect/redirect.c"),", still print messages to the console after closing file descriptor 1 (",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),")?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"because ",(0,o.kt)("inlineCode",{parentName:"li"},"wait_for_input()")," calls ",(0,o.kt)("inlineCode",{parentName:"li"},"fprintf(stderr, ...)"),", which prints to ",(0,o.kt)("inlineCode",{parentName:"li"},"stderr")," (file descriptor 2)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'because the default file descriptors cannot be "truly" closed')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"because the other two default file descriptors are still linked to the console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"because the ",(0,o.kt)("inlineCode",{parentName:"p"},"wait_for_input()")," function started printed before closing the ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," file descriptor"))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"If you look at ",(0,o.kt)("inlineCode",{parentName:"p"},"wait_for_input()")," closely, you'll notice it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"fprintf(stderr, ...)"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," is liked to file descriptor 2, which is left unchanged so we can still write data to it."))}d.isMDXComponent=!0}}]);