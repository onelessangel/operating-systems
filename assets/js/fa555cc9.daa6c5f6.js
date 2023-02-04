"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[94255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Cause of `bind()` Error",s={unversionedId:"Lab/I/O/Asynchronous I/O/quiz/bind-error-cause",id:"Lab/I/O/Asynchronous I/O/quiz/bind-error-cause",title:"Cause of `bind()` Error",description:"Question Text",source:"@site/docs/Lab/I/O/Asynchronous I/O/quiz/bind-error-cause.md",sourceDirName:"Lab/I/O/Asynchronous I/O/quiz",slug:"/Lab/I/O/Asynchronous I/O/quiz/bind-error-cause",permalink:"/operating-systems/Lab/I/O/Asynchronous I/O/quiz/bind-error-cause",draft:!1,tags:[],version:"current",frontMatter:{}},u={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cause-of-bind-error"},"Cause of ",(0,o.kt)("inlineCode",{parentName:"h1"},"bind()")," Error"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver.py")," is still running, run it again from another terminal.\nYou will get an error.\nWhat is its cause?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the IP ",(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," is already used by ",(0,o.kt)("inlineCode",{parentName:"li"},"receive.py"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the port 5000 is already used (by ",(0,o.kt)("inlineCode",{parentName:"li"},"receive.py"),")")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a port may not be used multiple times by the same process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the socket was not created correctly"))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"One port may only be bound to ",(0,o.kt)("strong",{parentName:"p"},"one socket")," at a time.\nThe fact that it's the same program (same source code) using it is irrelevant because they're different processes."))}d.isMDXComponent=!0}}]);