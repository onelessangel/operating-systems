"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[15828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="The Need for a COMPLETED Queue",u={unversionedId:"Lab/Compute/Overview/quiz/why-use-completed-queue",id:"Lab/Compute/Overview/quiz/why-use-completed-queue",title:"The Need for a COMPLETED Queue",description:"Question Text",source:"@site/docs/Lab/Compute/Overview/quiz/why-use-completed-queue.md",sourceDirName:"Lab/Compute/Overview/quiz",slug:"/Lab/Compute/Overview/quiz/why-use-completed-queue",permalink:"/operating-systems/Lab/Compute/Overview/quiz/why-use-completed-queue",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-need-for-a-completed-queue"},"The Need for a COMPLETED Queue"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Why does the scheduler need a COMPLETED queue and not simply terminate one thread once its function finishes?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The COMPLETED queue is an implementation preference.\nThe scheduler can expose the same functions without it")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the OS's scheduler may kill the main kernel-level thread unless we keep the user-level thread in a queue"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The COMPLETED queue is needed to save the value returned by the thread so that it can later be retrieved by ",(0,a.kt)("inlineCode",{parentName:"li"},"threads_join()"),".")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_thread_start()")," function.\nIt is used by ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," to start executing the given function.\nThis is a wrapper that calls the function associated with the thread (",(0,a.kt)("inlineCode",{parentName:"p"},"this->start_routine"),"), saves its result and then calls ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_exit()"),"\nto store this result in the COMPLETED queue."))}d.isMDXComponent=!0}}]);