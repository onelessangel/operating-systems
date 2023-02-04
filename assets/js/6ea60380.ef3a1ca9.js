"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[92914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="`create_sleepy` Process Ending",s={unversionedId:"Lab/Compute/Synchronization/quiz/create-sleepy-process-ending",id:"Lab/Compute/Synchronization/quiz/create-sleepy-process-ending",title:"`create_sleepy` Process Ending",description:"Question Text",source:"@site/docs/Lab/Compute/Synchronization/quiz/create-sleepy-process-ending.md",sourceDirName:"Lab/Compute/Synchronization/quiz",slug:"/Lab/Compute/Synchronization/quiz/create-sleepy-process-ending",permalink:"/operating-systems/Lab/Compute/Synchronization/quiz/create-sleepy-process-ending",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create_sleepy-process-ending"},(0,a.kt)("inlineCode",{parentName:"h1"},"create_sleepy")," Process Ending"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Why does the ",(0,a.kt)("inlineCode",{parentName:"p"},"create_sleepy")," process wait a very long time before ending?\nUse ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/system.3.html"},(0,a.kt)("inlineCode",{parentName:"a"},"system"),"'s man page")," to find the answer."),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the code is unoptimised (the default optimisation level is ",(0,a.kt)("inlineCode",{parentName:"p"},"-O0"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the operating system takes very long to finish the process"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because ",(0,a.kt)("inlineCode",{parentName:"li"},"system")," returns when the command given to it (",(0,a.kt)("inlineCode",{parentName:"li"},"sleep 1000"),") ends")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because the CPU is very slow")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/system.3.html"},"man page")," says it clearly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"system() returns after the command has been completed.\n")),(0,a.kt)("p",null,"Therefore, in our case, it returns after ",(0,a.kt)("inlineCode",{parentName:"p"},"sleep 1000")," ends."))}m.isMDXComponent=!0}}]);