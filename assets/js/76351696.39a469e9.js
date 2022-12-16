"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[28937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),y=n,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||o;return r?a.createElement(d,s(s({ref:t},c),{},{components:r})):a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},53928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},s="Data",i={unversionedId:"Lab/Data/Memory Support/content/overview",id:"Lab/Data/Memory Support/content/overview",title:"Data",description:"Data represents information that is to be processed to produce a final result or more data.",source:"@site/docs/Lab/Data/Memory Support/content/overview.md",sourceDirName:"Lab/Data/Memory Support/content",slug:"/Lab/Data/Memory Support/content/overview",permalink:"/operating-systems/Lab/Data/Memory Support/content/overview",draft:!1,tags:[],version:"current",frontMatter:{}},p={},l=[{value:"Setup",id:"setup",level:2},{value:"Contents",id:"contents",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data"},"Data"),(0,n.kt)("p",null,"Data represents information that is to be processed to produce a final result or more data.\nComputers store, retrieve and compute data.\nThis process involves 4 entities: the programmer, the programming language, the operating system and the hardware."),(0,n.kt)("p",null,"From a programmer's perspective, data is represented by the variables.\nThese are declared and utilized depending on the rules of the programming language that is employed.\nThe programming language analyzes the use of these variables and outputs code that uses an interface provided by the operating system.\nThis interface offers the possibility to allocate/deallocate different variables in certain memory regions.\nNext, the operating system manages the execution of the program and provides the actual physical addresses that are used to interact with the data."),(0,n.kt)("p",null,"Moreover, the operating system governs the competing access of multiple programs to memory ensuring that a program does not have access to a different programs memory."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"If you have already cloned the repository, make sure it is updated.\nRun this command inside the repository clone directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"git pull --rebase\n")),(0,n.kt)("p",null,"The command may fail if you have uncommitted changes.\nIf that is the case, commit changes and retry."),(0,n.kt)("p",null,"If you haven't already cloned the repository, do it and enter the repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/open-education-hub/operating-systems\ncd operating-sytems\n")),(0,n.kt)("p",null,"Navigate to the chapter lab directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"cd content/chapters/data/lab/\n")),(0,n.kt)("p",null,"Now go through the items below."),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Data/Memory%20Support/content/working-memory"},"Working with Memory")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Data/Memory%20Support/content/process-memory"},"Process Memory")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Data/Memory%20Support/content/investigate-memory"},"Investigate Memory")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Data/Memory%20Support/content/memory-support"},"Memory Support")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Data/Memory%20Support/content/memory-security"},"Memory Security"))))}m.isMDXComponent=!0}}]);