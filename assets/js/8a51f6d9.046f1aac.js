"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Coarse vs Granular Critical Section",c={unversionedId:"Lab/Compute/Scheduling/quiz/coarse-vs-granular-critical-section",id:"Lab/Compute/Scheduling/quiz/coarse-vs-granular-critical-section",title:"Coarse vs Granular Critical Section",description:"Question Text",source:"@site/docs/Lab/Compute/Scheduling/quiz/coarse-vs-granular-critical-section.md",sourceDirName:"Lab/Compute/Scheduling/quiz",slug:"/Lab/Compute/Scheduling/quiz/coarse-vs-granular-critical-section",permalink:"/operating-systems/Lab/Compute/Scheduling/quiz/coarse-vs-granular-critical-section",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coarse-vs-granular-critical-section"},"Coarse vs Granular Critical Section"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Why does code with the the larger (coarser) critical section run faster than the one with the smaller (more granular) critical section?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because the more granular code causes more context switches, which are expensive")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the coarser code can be better optimised by the compiler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the loops in the more granular code run for more steps"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"The larger critical sections only require ",(0,a.kt)("strong",{parentName:"p"},"2 context switches"),".\nThe first thread that reaches the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"lock()")," acquires to the mutex and starts executing the whole of the ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop.\nThe second thread then finds the mutex ",(0,a.kt)("em",{parentName:"p"},"locked")," and enters the WAITING state.\nWhen the first thread finishes its loop, it calls ",(0,a.kt)("inlineCode",{parentName:"p"},"unlock()")," and wakes up the second thread, which acquires the lock and starts its loop."),(0,a.kt)("p",null,"In the more granular example, in the worst case, the holder of the mutex can change at every step of the loop.\nThis would mean 1 context switch per step per thread, i.e. ",(0,a.kt)("strong",{parentName:"p"},"20 million context switches"),"."))}h.isMDXComponent=!0}}]);