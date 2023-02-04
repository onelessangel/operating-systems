"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[54894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||k[d]||r;return n?l.createElement(m,s(s({ref:t},c),{},{components:n})):l.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const r={},s="Syscalls",i={unversionedId:"Lab/Software-Stack/High-Level Languages/quiz/syscalls",id:"Lab/Software-Stack/High-Level Languages/quiz/syscalls",title:"Syscalls",description:"Syscall ID",source:"@site/docs/Lab/Software-Stack/High-Level Languages/quiz/syscalls.md",sourceDirName:"Lab/Software-Stack/High-Level Languages/quiz",slug:"/Lab/Software-Stack/High-Level Languages/quiz/syscalls",permalink:"/operating-systems/Lab/Software-Stack/High-Level Languages/quiz/syscalls",draft:!1,tags:[],version:"current",frontMatter:{}},o={},u=[{value:"Syscall ID",id:"syscall-id",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Syscall Tool",id:"syscall-tool",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3},{value:"Syscall Numbers",id:"syscall-numbers",level:2},{value:"Question Text",id:"question-text-2",level:3},{value:"Question Answers",id:"question-answers-2",level:3},{value:"Feedback",id:"feedback-2",level:3}],c={toc:u},p="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"syscalls"},"Syscalls"),(0,a.kt)("h2",{id:"syscall-id"},"Syscall ID"),(0,a.kt)("h3",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What register stores the system call ID on x86_64?"),(0,a.kt)("h3",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"RIP"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"RSP")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RAX"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RDX"))),(0,a.kt)("h3",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RAX")," is the register used for passing the syscall ID and the result code."),(0,a.kt)("h2",{id:"syscall-tool"},"Syscall Tool"),(0,a.kt)("h3",{id:"question-text-1"},"Question Text"),(0,a.kt)("p",null,"What tool do we use to capture system calls?"),(0,a.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"strace"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"make"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"gcc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"./exec")))),(0,a.kt)("h3",{id:"feedback-1"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"strace")," is used to trace system calls invoked by a running program."),(0,a.kt)("h2",{id:"syscall-numbers"},"Syscall Numbers"),(0,a.kt)("h3",{id:"question-text-2"},"Question Text"),(0,a.kt)("p",null,"What is the approximate number of system call numbers in Linux?"),(0,a.kt)("h3",{id:"question-answers-2"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"30"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"300")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3000")),(0,a.kt)("h3",{id:"feedback-2"},"Feedback"),(0,a.kt)("p",null,"As show ",(0,a.kt)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"here"),", they're about 300 system calls in Linux."))}k.isMDXComponent=!0}}]);