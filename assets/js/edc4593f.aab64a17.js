"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[25920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),h=a,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},68266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s="Processes Speedup",i={unversionedId:"Lab/Compute/Synchronization/quiz/processes-speedup",id:"Lab/Compute/Synchronization/quiz/processes-speedup",title:"Processes Speedup",description:"Question Text",source:"@site/docs/Lab/Compute/Synchronization/quiz/processes-speedup.md",sourceDirName:"Lab/Compute/Synchronization/quiz",slug:"/Lab/Compute/Synchronization/quiz/processes-speedup",permalink:"/operating-systems/Lab/Compute/Synchronization/quiz/processes-speedup",draft:!1,tags:[],version:"current",frontMatter:{}},p={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"processes-speedup"},"Processes Speedup"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Why is the speedup from running the program in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/sum-array/d/sum_array_processes.d")," with 1, 2, 4 and 8 processes less than expected?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because the array is split into unequal parts")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because of the overhead introduced by the creation of the additional processes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the algorithm is incorrect")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the operating systems runs all processes sequentially on the same core"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Creating a new process involves an inherent overhead.\nThe OS calls the loader, launches the new process, then the parent process waits for it to finish, extracts its return value etc.\nAll this work together with creating the initial process has to be done by a single thread.\nIn addition, in real-world apps, other actions such as receiving data from the network or reading a file are inherently ",(0,a.kt)("strong",{parentName:"p"},"sequential"),".\nTherefore there will always be parts of any given program that cannot be run in parallel.\nAs a result, the speedup can never be equal to the number of processes between which we spread the workload."),(0,a.kt)("p",null,"It is possible to compute the speedup obtained from parallelising a portion of a given program.\nThe formula is rather simple and is called ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Amdahl%27s_law"},"Amdahl's law")))}c.isMDXComponent=!0}}]);