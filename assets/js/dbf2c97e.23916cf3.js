"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[53053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Both Condition and Mutex",l={unversionedId:"Lab/Compute/Threads/quiz/notify-only-with-mutex",id:"Lab/Compute/Threads/quiz/notify-only-with-mutex",title:"Both Condition and Mutex",description:"Question Text",source:"@site/docs/Lab/Compute/Threads/quiz/notify-only-with-mutex.md",sourceDirName:"Lab/Compute/Threads/quiz",slug:"/Lab/Compute/Threads/quiz/notify-only-with-mutex",permalink:"/operating-systems/Lab/Compute/Threads/quiz/notify-only-with-mutex",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"both-condition-and-mutex"},"Both Condition and Mutex"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Can we only use a mutex when signalling an event from one thread to another in?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No, because this would imply that the signalling thread would ",(0,a.kt)("inlineCode",{parentName:"li"},"unlock()")," the mutex, that the signalled thread attempts to ",(0,a.kt)("inlineCode",{parentName:"li"},"lock()"),", which is an undefined behaviour")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No, because it will result in a deadlock where the both threads will be waiting for each other")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Yes, because only one thread can modify the shared variables in order to maintain their integrity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Yes and this would yield better performance because the threads would only wait for one object: the mutex"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"In some implementations, such as ",(0,a.kt)("a",{parentName:"p",href:"https://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_mutex_lock.html"},"POSIX threads (pthreads)"),", calling ",(0,a.kt)("inlineCode",{parentName:"p"},"unlock()")," from another thread than that which called ",(0,a.kt)("inlineCode",{parentName:"p"},"lock()")," can result in an undefined behaviour.\nFor this reason, it is unsafe to only use a mutex as a notification mechanism.\nIn addition, a mutex cannot notify more than one thread at once, if we so desire.\nMutexes are only meant to be used to isolate a critical section within the same thread."))}p.isMDXComponent=!0}}]);