"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[24913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},79522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},o="ULT Thread IDs",s={unversionedId:"Lab/Compute/Overview/quiz/ult-thread-ids",id:"Lab/Compute/Overview/quiz/ult-thread-ids",title:"ULT Thread IDs",description:"Question Text",source:"@site/docs/Lab/Compute/Overview/quiz/ult-thread-ids.md",sourceDirName:"Lab/Compute/Overview/quiz",slug:"/Lab/Compute/Overview/quiz/ult-thread-ids",permalink:"/operating-systems/Lab/Compute/Overview/quiz/ult-thread-ids",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ult-thread-ids"},"ULT Thread IDs"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Why do the thread IDs returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," start from 2 and not 1?\nWhy is this necessary."),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because ID 1 is associated with the main thread.\nThis is an implementation detail and can be omitted.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because ID 1 belongs to the main thread.\nThis is needed in order to associate a ",(0,a.kt)("inlineCode",{parentName:"li"},"ucontext_t")," with the main thread as well, so the main thread can also be run.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the underlying kernel thread is assigned ID 1.\nThis is mandatory in order for the OS's scheduler to run this thread.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"libult.so")," first creates a pool of threads from which it ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," retrieves the threads it returns."))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," function calls ",(0,a.kt)("inlineCode",{parentName:"p"},"init_first_context()"),", which, in turn, calls ",(0,a.kt)("inlineCode",{parentName:"p"},"tcb_new()"),", thus creating the first context associated with the main thread (the one calling ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," the first time).\nWithout this, the scheduler in ",(0,a.kt)("inlineCode",{parentName:"p"},"libult.so")," wouldn't be able to run the main thread."))}d.isMDXComponent=!0}}]);