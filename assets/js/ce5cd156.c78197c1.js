"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[86292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Modify String",c={unversionedId:"Lab/Data/Memory Support/quiz/memory-access",id:"Lab/Data/Memory Support/quiz/memory-access",title:"Modify String",description:"Question Text",source:"@site/docs/Lab/Data/Memory Support/quiz/memory-access.md",sourceDirName:"Lab/Data/Memory Support/quiz",slug:"/Lab/Data/Memory Support/quiz/memory-access",permalink:"/operating-systems/Lab/Data/Memory Support/quiz/memory-access",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modify-string"},"Modify String"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What happens if we introduce the code ",(0,a.kt)("inlineCode",{parentName:"p"},"cp[2] = 't'")," in the program located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"memory-access/mem_access.c")," file?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile time error because we are trying to modify a ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," pointer.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile time error because we are trying to modify a ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," value."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Segmentation fault at runtime we are trying to modify read-only memory.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Program compiles and runs succesfully.")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"The declaration ",(0,a.kt)("inlineCode",{parentName:"p"},'char *const cp = "ConstLeString"')," actually defines 2 memory locations.\nOne stores a constant pointer, ",(0,a.kt)("inlineCode",{parentName:"p"},"cp"),", whereas the other stores the actual string.\nThe compiler thinks that ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," is able to modify the memory location that it points therefore it passes compilation.\nBut at runtime a segmentation fault is issued because we are accessing data that is stored in read-only memory."))}u.isMDXComponent=!0}}]);