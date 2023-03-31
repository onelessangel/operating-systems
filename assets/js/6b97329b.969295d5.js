"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[99861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o="Variables in memory regions",l={unversionedId:"Lab/Data/Arena/quiz/memory-regions-vars",id:"Lab/Data/Arena/quiz/memory-regions-vars",title:"Variables in memory regions",description:"Question Text",source:"@site/docs/Lab/Data/Arena/quiz/memory-regions-vars.md",sourceDirName:"Lab/Data/Arena/quiz",slug:"/Lab/Data/Arena/quiz/memory-regions-vars",permalink:"/operating-systems/Lab/Data/Arena/quiz/memory-regions-vars",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"variables-in-memory-regions"},"Variables in memory regions"),(0,r.kt)("h2",{id:"question-text"},"Question Text"),(0,r.kt)("p",null,"In what memory regions are the ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," varaables from ",(0,r.kt)("inlineCode",{parentName:"p"},"support/memory-security/buff_leak.c")," stored?"),(0,r.kt)("h2",{id:"question-answers"},"Question Answers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a - ",(0,r.kt)("inlineCode",{parentName:"li"},".data"),", b - ",(0,r.kt)("inlineCode",{parentName:"li"},".bss"),", c - ",(0,r.kt)("inlineCode",{parentName:"li"},".stack"),", k - ",(0,r.kt)("inlineCode",{parentName:"li"},".heap"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a - ",(0,r.kt)("inlineCode",{parentName:"li"},".data"),", b - ",(0,r.kt)("inlineCode",{parentName:"li"},".bss"),", c - ",(0,r.kt)("inlineCode",{parentName:"li"},".stack"),", k - ",(0,r.kt)("inlineCode",{parentName:"li"},".stack"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a - ",(0,r.kt)("inlineCode",{parentName:"p"},".data"),", b - ",(0,r.kt)("inlineCode",{parentName:"p"},".data"),", c - ",(0,r.kt)("inlineCode",{parentName:"p"},".stack"),", k - ",(0,r.kt)("inlineCode",{parentName:"p"},".heap"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a - ",(0,r.kt)("inlineCode",{parentName:"p"},".bss"),", b - ",(0,r.kt)("inlineCode",{parentName:"p"},".bss"),", c - ",(0,r.kt)("inlineCode",{parentName:"p"},".stack"),", k - ",(0,r.kt)("inlineCode",{parentName:"p"},".heap")))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"Global initialized variables go to ",(0,r.kt)("inlineCode",{parentName:"p"},".data")," (",(0,r.kt)("inlineCode",{parentName:"p"},"a"),").\nGlobal uninitialized variables go to ",(0,r.kt)("inlineCode",{parentName:"p"},".bss")," (",(0,r.kt)("inlineCode",{parentName:"p"},"b"),").\nNon-static local variables go on the",(0,r.kt)("inlineCode",{parentName:"p"},".stack")," (",(0,r.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),").\n",(0,r.kt)("inlineCode",{parentName:"p"},"malloc()"),"'ed memory goes on the",(0,r.kt)("inlineCode",{parentName:"p"},".heap"),".\nFor ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),", the pointer is stored on the",(0,r.kt)("inlineCode",{parentName:"p"},".stack"),", but the allocated memory, to which ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," points is stored on the",(0,r.kt)("inlineCode",{parentName:"p"},".heap"),"."))}u.isMDXComponent=!0}}]);