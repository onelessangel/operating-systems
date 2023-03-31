"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[55282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},o="Stack layout",l={unversionedId:"Lab/Data/Memory Security/quiz/stack-layout",id:"Lab/Data/Memory Security/quiz/stack-layout",title:"Stack layout",description:"Question Text",source:"@site/docs/Lab/Data/Memory Security/quiz/stack-layout.md",sourceDirName:"Lab/Data/Memory Security/quiz",slug:"/Lab/Data/Memory Security/quiz/stack-layout",permalink:"/operating-systems/Lab/Data/Memory Security/quiz/stack-layout",draft:!1,tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stack-layout"},"Stack layout"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What is the stack layout for the ",(0,a.kt)("inlineCode",{parentName:"p"},"fun")," function in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bo_write.c")," program (starting from a high address)?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return address, old ",(0,a.kt)("inlineCode",{parentName:"li"},"rbp"),", maybe some padding, variable ",(0,a.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"b[0]"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"b[1]"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"b[2]"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return address, old ",(0,a.kt)("inlineCode",{parentName:"li"},"rbp"),", maybe some padding, variable ",(0,a.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"b[2]"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"b[1]"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"b[0]"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"return address, maybe some padding, variable ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"b[0]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"b[1]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"b[2]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"return address, old ",(0,a.kt)("inlineCode",{parentName:"p"},"rbp"),", maybe some padding, ",(0,a.kt)("inlineCode",{parentName:"p"},"b[0]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"b[1]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"b[2]"),", variable ",(0,a.kt)("inlineCode",{parentName:"p"},"a")))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Look at the assembly code and notice the exact layout."))}d.isMDXComponent=!0}}]);