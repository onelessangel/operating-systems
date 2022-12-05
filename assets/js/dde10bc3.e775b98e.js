"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[77425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o="Cause of `bind()` Error",l={unversionedId:"Lab/I/O/Overview/quiz/bind-error-cause",id:"Lab/I/O/Overview/quiz/bind-error-cause",title:"Cause of `bind()` Error",description:"Question Text",source:"@site/docs/Lab/I/O/Overview/quiz/bind-error-cause.md",sourceDirName:"Lab/I/O/Overview/quiz",slug:"/Lab/I/O/Overview/quiz/bind-error-cause",permalink:"/operating-systems/Lab/I/O/Overview/quiz/bind-error-cause",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cause-of-bind-error"},"Cause of ",(0,a.kt)("inlineCode",{parentName:"h1"},"bind()")," Error"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py")," is still running, run it again from another terminal.\nYou will get an error.\nWhat is its cause?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the IP ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," is already used by ",(0,a.kt)("inlineCode",{parentName:"li"},"receive.py"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the port 5000 is already used (by ",(0,a.kt)("inlineCode",{parentName:"li"},"receive.py"),")")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a port may not be used multiple times by the same process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the socket was not created correctly"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"One port may only be bound to ",(0,a.kt)("strong",{parentName:"p"},"one socket")," at a time.\nThe fact that it's the same program using it is irrelevant."))}p.isMDXComponent=!0}}]);