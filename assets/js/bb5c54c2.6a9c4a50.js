"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[70052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Time Server Interoperability",s={unversionedId:"Lab/Application-Interaction/Password Cracker/quiz/time-server-interop",id:"Lab/Application-Interaction/Password Cracker/quiz/time-server-interop",title:"Time Server Interoperability",description:"Question Text",source:"@site/docs/Lab/Application-Interaction/Password Cracker/quiz/time-server-interop.md",sourceDirName:"Lab/Application-Interaction/Password Cracker/quiz",slug:"/Lab/Application-Interaction/Password Cracker/quiz/time-server-interop",permalink:"/operating-systems/Lab/Application-Interaction/Password Cracker/quiz/time-server-interop",draft:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"time-server-interoperability"},"Time Server Interoperability"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Is the protocol between the python server and the python client the same?\nCan we run the python server and connect to it via the C client?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Yes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No, the protocols are different")),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"By doing the same investigation on the python server we discover that the protocol is the same.\nThis means that we can run the python server and the C client, or the C server and python client, and everything will work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 server.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ ./client 127.0.0.1 2000\nThe time is Thu Sep  1 11:48:03 2022\n")))}d.isMDXComponent=!0}}]);