"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[55227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="Common Functions",o={unversionedId:"Lab/Software-Stack/App Investigation/quiz/common-functions",id:"Lab/Software-Stack/App Investigation/quiz/common-functions",title:"Common Functions",description:"printf() System Call",source:"@site/docs/Lab/Software-Stack/App Investigation/quiz/common-functions.md",sourceDirName:"Lab/Software-Stack/App Investigation/quiz",slug:"/Lab/Software-Stack/App Investigation/quiz/common-functions",permalink:"/operating-systems/Lab/Software-Stack/App Investigation/quiz/common-functions",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"printf() System Call",id:"printf-system-call",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"strcpy() System Call",id:"strcpy-system-call",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3},{value:"printf() vs write",id:"printf-vs-write",level:2},{value:"Question Text",id:"question-text-2",level:3},{value:"Question Answers",id:"question-answers-2",level:3},{value:"Feedback",id:"feedback-2",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-functions"},"Common Functions"),(0,a.kt)("h2",{id:"printf-system-call"},"printf() System Call"),(0,a.kt)("h3",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What system call does the ",(0,a.kt)("inlineCode",{parentName:"p"},"printf()")," function invoke?"),(0,a.kt)("h3",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"write"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"exec"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"exit")))),(0,a.kt)("h3",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"printf()")," invokes the ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," system call to print messages to standard output."),(0,a.kt)("h2",{id:"strcpy-system-call"},"strcpy() System Call"),(0,a.kt)("h3",{id:"question-text-1"},"Question Text"),(0,a.kt)("p",null,"What system call does the ",(0,a.kt)("inlineCode",{parentName:"p"},"strcpy()")," function invoke?"),(0,a.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cpy"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"touch"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"memcpy")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no system call")),(0,a.kt)("h3",{id:"feedback-1"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"strcpy()")," doesn't invoke system calls, because it doesn't require any feature that is only provided by the operating system"),(0,a.kt)("h2",{id:"printf-vs-write"},"printf() vs write"),(0,a.kt)("h3",{id:"question-text-2"},"Question Text"),(0,a.kt)("p",null,"What are features provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"printf()")," when compared to ",(0,a.kt)("inlineCode",{parentName:"p"},"write"),"? (choose 2 answers)"),(0,a.kt)("h3",{id:"question-answers-2"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"buffering")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"outputs to standard output")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"may write to file"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"does output formatting")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"can work with binary data")),(0,a.kt)("h3",{id:"feedback-2"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"printf()")," can do buffering to reduce the number of system calls.\nAlso, ",(0,a.kt)("inlineCode",{parentName:"p"},"printf()"),", as it name suggests (the ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," suffix), does output formatting."))}m.isMDXComponent=!0}}]);