"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[24904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="`O_TRUNC` Flag Behaviour",l={unversionedId:"Lab/I/O/I/O Internals/quiz/o-trunc",id:"Lab/I/O/I/O Internals/quiz/o-trunc",title:"`O_TRUNC` Flag Behaviour",description:"Question Text",source:"@site/docs/Lab/I/O/I/O Internals/quiz/o-trunc.md",sourceDirName:"Lab/I/O/I/O Internals/quiz",slug:"/Lab/I/O/I/O Internals/quiz/o-trunc",permalink:"/operating-systems/Lab/I/O/I/O Internals/quiz/o-trunc",draft:!1,tags:[],version:"current",frontMatter:{}},u={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],s={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"o_trunc-flag-behaviour"},(0,a.kt)("inlineCode",{parentName:"h1"},"O_TRUNC")," Flag Behaviour"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"How does the ",(0,a.kt)("inlineCode",{parentName:"p"},"O_TRUNC")," flag change the behaviour of ",(0,a.kt)("inlineCode",{parentName:"p"},"open()"),"?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the previous content of the file is deleted")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"new data will be appended to the file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"newly written data will be ignored"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"The man page provides us with unlimited wisdon:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the file already exists and is a regular file and the access mode allows writing (i.e., is ",(0,a.kt)("inlineCode",{parentName:"p"},"O_RDWR")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"O_WRONLY"),") it will be truncated to length 0.")),(0,a.kt)("p",null,"Setting the length of the file to 0 is equivalent to deleting the previous content of the file."))}f.isMDXComponent=!0}}]);