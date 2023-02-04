"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[34555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,d=c["".concat(p,".").concat(m)]||c[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i='open()` equivalent of `fopen(..., "w")',l={unversionedId:"Lab/I/O/File Descriptors/quiz/fopen-w",id:"Lab/I/O/File Descriptors/quiz/fopen-w",title:'open()` equivalent of `fopen(..., "w")',description:"Question Text",source:"@site/docs/Lab/I/O/File Descriptors/quiz/fopen-w.md",sourceDirName:"Lab/I/O/File Descriptors/quiz",slug:"/Lab/I/O/File Descriptors/quiz/fopen-w",permalink:"/operating-systems/Lab/I/O/File Descriptors/quiz/fopen-w",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:s},c="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"open-equivalent-of-fopen-w"},(0,o.kt)("inlineCode",{parentName:"h1"},"open()")," equivalent of ",(0,o.kt)("inlineCode",{parentName:"h1"},'fopen(..., "w")')),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"strace")," on the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/simple-file-operations/file_operations.c")," to find the flags used by ",(0,o.kt)("inlineCode",{parentName:"p"},"openat()")," when calling ",(0,o.kt)("inlineCode",{parentName:"p"},'fopen(file_name, "w")'),".\nFirst, try to make an educated guess and only then verify your answer by running ",(0,o.kt)("inlineCode",{parentName:"p"},"strace"),"."),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"O_WRONLY | O_CREAT | O_TRUNC"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"O_WRONLY | O_CREAT"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"O_WRONLY"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"O_WRONLY | O_TRUNC")))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/simple-file-operations$ strace ./file_operations\n[...]\nopenat(AT_FDCWD, "file.txt", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3\n[...]\n')))}f.isMDXComponent=!0}}]);