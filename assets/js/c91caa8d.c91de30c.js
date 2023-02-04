"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[9162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||u;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const u={},o="The Need for a COMPLETED Queue",i={unversionedId:"Lab/Compute/Scheduling/quiz/why-use-completed-queue",id:"Lab/Compute/Scheduling/quiz/why-use-completed-queue",title:"The Need for a COMPLETED Queue",description:"Question Text",source:"@site/docs/Lab/Compute/Scheduling/quiz/why-use-completed-queue.md",sourceDirName:"Lab/Compute/Scheduling/quiz",slug:"/Lab/Compute/Scheduling/quiz/why-use-completed-queue",permalink:"/operating-systems/Lab/Compute/Scheduling/quiz/why-use-completed-queue",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-need-for-a-completed-queue"},"The Need for a COMPLETED Queue"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Why does the scheduler need a COMPLETED queue and not simply terminate one thread once its function finishes?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The COMPLETED queue is an implementation preference.\nThe scheduler can expose the same functions without it")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the OS's scheduler may kill the main kernel-level thread unless we keep the user-level thread in a queue"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The COMPLETED queue is needed to save the value returned by the thread so that it can later be retrieved by ",(0,a.kt)("inlineCode",{parentName:"li"},"threads_join()"),".")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_thread_start()")," function.\nIt is used by ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," to start executing the given function.\nThis is a wrapper that calls the function associated with the thread (",(0,a.kt)("inlineCode",{parentName:"p"},"this->start_routine"),"), saves its result and then calls ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_exit()"),"\nto store this result in the COMPLETED queue."))}d.isMDXComponent=!0}}]);