"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[57557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="TLS `var` Copies",l={unversionedId:"Lab/Compute/Synchronization/quiz/tls-var-copies",id:"Lab/Compute/Synchronization/quiz/tls-var-copies",title:"TLS `var` Copies",description:"Question Text",source:"@site/docs/Lab/Compute/Synchronization/quiz/tls-var-copies.md",sourceDirName:"Lab/Compute/Synchronization/quiz",slug:"/Lab/Compute/Synchronization/quiz/tls-var-copies",permalink:"/operating-systems/Lab/Compute/Synchronization/quiz/tls-var-copies",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tls-var-copies"},"TLS ",(0,o.kt)("inlineCode",{parentName:"h1"},"var")," Copies"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"How many copies of the ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," variable from ",(0,o.kt)("inlineCode",{parentName:"p"},"support/race-condition/c/race_condition_tls.c")," are there after each thread has modified it at leas once?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"2"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"5")),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"There are 3 copies one for the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," thread, another one for ",(0,o.kt)("inlineCode",{parentName:"p"},"increment_var()")," and the third for ",(0,o.kt)("inlineCode",{parentName:"p"},"decrement_var()"),"."))}m.isMDXComponent=!0}}]);