"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[1532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),k=l,m=p["".concat(o,".").concat(k)]||p[k]||d[k]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},15991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={},i="Syscalls",s={unversionedId:"Lab/Software-Stack/Static-dynamic/quiz/syscalls",id:"Lab/Software-Stack/Static-dynamic/quiz/syscalls",title:"Syscalls",description:"Syscall ID",source:"@site/docs/Lab/Software-Stack/Static-dynamic/quiz/syscalls.md",sourceDirName:"Lab/Software-Stack/Static-dynamic/quiz",slug:"/Lab/Software-Stack/Static-dynamic/quiz/syscalls",permalink:"/operating-systems/Lab/Software-Stack/Static-dynamic/quiz/syscalls",draft:!1,tags:[],version:"current",frontMatter:{}},o={},u=[{value:"Syscall ID",id:"syscall-id",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Syscall Tool",id:"syscall-tool",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3},{value:"Syscall Numbers",id:"syscall-numbers",level:2},{value:"Question Text",id:"question-text-2",level:3},{value:"Question Answers",id:"question-answers-2",level:3},{value:"Feedback",id:"feedback-2",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"syscalls"},"Syscalls"),(0,l.kt)("h2",{id:"syscall-id"},"Syscall ID"),(0,l.kt)("h3",{id:"question-text"},"Question Text"),(0,l.kt)("p",null,"What register stores the system call ID on x86_64?"),(0,l.kt)("h3",{id:"question-answers"},"Question Answers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"RIP"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"RSP")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RAX"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RDX"))),(0,l.kt)("h3",{id:"feedback"},"Feedback"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RAX")," is the register used for passing the syscall ID and the result code."),(0,l.kt)("h2",{id:"syscall-tool"},"Syscall Tool"),(0,l.kt)("h3",{id:"question-text-1"},"Question Text"),(0,l.kt)("p",null,"What tool do we use to capture system calls?"),(0,l.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strace"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"make"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gcc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"./exec")))),(0,l.kt)("h3",{id:"feedback-1"},"Feedback"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strace")," is used to trace system calls invoked by a running program."),(0,l.kt)("h2",{id:"syscall-numbers"},"Syscall Numbers"),(0,l.kt)("h3",{id:"question-text-2"},"Question Text"),(0,l.kt)("p",null,"What is the approximate number of system call numbers in Linux?"),(0,l.kt)("h3",{id:"question-answers-2"},"Question Answers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"30"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"300")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"3000")),(0,l.kt)("h3",{id:"feedback-2"},"Feedback"),(0,l.kt)("p",null,"As show ",(0,l.kt)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"here"),", they're about 300 system calls in Linux."))}d.isMDXComponent=!0}}]);