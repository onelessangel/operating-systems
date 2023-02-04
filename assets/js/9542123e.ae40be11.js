"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[17358],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(l),m=a,d=p["".concat(o,".").concat(m)]||p[m]||k[m]||r;return l?n.createElement(d,s(s({ref:t},c),{},{components:l})):n.createElement(d,s({ref:t},c))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,s=new Array(r);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=l[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},37344:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=l(87462),a=(l(67294),l(3905));const r={},s="Syscalls",i={unversionedId:"Lab/Software-Stack/System Call Wrapper/quiz/syscalls",id:"Lab/Software-Stack/System Call Wrapper/quiz/syscalls",title:"Syscalls",description:"Syscall ID",source:"@site/docs/Lab/Software-Stack/System Call Wrapper/quiz/syscalls.md",sourceDirName:"Lab/Software-Stack/System Call Wrapper/quiz",slug:"/Lab/Software-Stack/System Call Wrapper/quiz/syscalls",permalink:"/operating-systems/Lab/Software-Stack/System Call Wrapper/quiz/syscalls",draft:!1,tags:[],version:"current",frontMatter:{}},o={},u=[{value:"Syscall ID",id:"syscall-id",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Syscall Tool",id:"syscall-tool",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3},{value:"Syscall Numbers",id:"syscall-numbers",level:2},{value:"Question Text",id:"question-text-2",level:3},{value:"Question Answers",id:"question-answers-2",level:3},{value:"Feedback",id:"feedback-2",level:3}],c={toc:u},p="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"syscalls"},"Syscalls"),(0,a.kt)("h2",{id:"syscall-id"},"Syscall ID"),(0,a.kt)("h3",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What register stores the system call ID on x86_64?"),(0,a.kt)("h3",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"RIP"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"RSP")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RAX"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RDX"))),(0,a.kt)("h3",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RAX")," is the register used for passing the syscall ID and the result code."),(0,a.kt)("h2",{id:"syscall-tool"},"Syscall Tool"),(0,a.kt)("h3",{id:"question-text-1"},"Question Text"),(0,a.kt)("p",null,"What tool do we use to capture system calls?"),(0,a.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"strace"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"make"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"gcc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"./exec")))),(0,a.kt)("h3",{id:"feedback-1"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"strace")," is used to trace system calls invoked by a running program."),(0,a.kt)("h2",{id:"syscall-numbers"},"Syscall Numbers"),(0,a.kt)("h3",{id:"question-text-2"},"Question Text"),(0,a.kt)("p",null,"What is the approximate number of system call numbers in Linux?"),(0,a.kt)("h3",{id:"question-answers-2"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"30"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"300")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3000")),(0,a.kt)("h3",{id:"feedback-2"},"Feedback"),(0,a.kt)("p",null,"As show ",(0,a.kt)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"here"),", they're about 300 system calls in Linux."))}k.isMDXComponent=!0}}]);