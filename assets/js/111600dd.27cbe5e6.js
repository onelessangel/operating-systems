"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[73747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="Cause of `bind()` Error",l={unversionedId:"Lab/I/O/Local I/O in Action/quiz/bind-error-cause",id:"Lab/I/O/Local I/O in Action/quiz/bind-error-cause",title:"Cause of `bind()` Error",description:"Question Text",source:"@site/docs/Lab/I/O/Local I/O in Action/quiz/bind-error-cause.md",sourceDirName:"Lab/I/O/Local I/O in Action/quiz",slug:"/Lab/I/O/Local I/O in Action/quiz/bind-error-cause",permalink:"/operating-systems/Lab/I/O/Local I/O in Action/quiz/bind-error-cause",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cause-of-bind-error"},"Cause of ",(0,a.kt)("inlineCode",{parentName:"h1"},"bind()")," Error"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py")," is still running, run it again from another terminal.\nYou will get an error.\nWhat is its cause?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the IP ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," is already used by ",(0,a.kt)("inlineCode",{parentName:"li"},"receive.py"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the port 5000 is already used (by ",(0,a.kt)("inlineCode",{parentName:"li"},"receive.py"),")")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a port may not be used multiple times by the same process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the socket was not created correctly"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"One port may only be bound to ",(0,a.kt)("strong",{parentName:"p"},"one socket")," at a time.\nThe fact that it's the same program (same source code) using it is irrelevant because they're different processes."))}d.isMDXComponent=!0}}]);