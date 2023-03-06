"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[34738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"Lab/Software-Stack/Introduction/content/modern-sw-stack",id:"Lab/Software-Stack/Introduction/content/modern-sw-stack",title:"modern-sw-stack",description:"Modern Software Stacks",source:"@site/docs/Lab/Software-Stack/Introduction/content/modern-sw-stack.md",sourceDirName:"Lab/Software-Stack/Introduction/content",slug:"/Lab/Software-Stack/Introduction/content/modern-sw-stack",permalink:"/operating-systems/Lab/Software-Stack/Introduction/content/modern-sw-stack",draft:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Modern Software Stacks",id:"modern-software-stacks",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"modern-software-stacks"},"Modern Software Stacks"),(0,a.kt)("p",null,"Most modern computing systems use a software stack such as the one in the figure below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Modern Software Stack",src:n(94522).Z,width:"542",height:"512"})),(0,a.kt)("p",null,"This modern software stack allows fast development and provides a rich set of applications to the user."),(0,a.kt)("p",null,"The basic software component is the ",(0,a.kt)("strong",{parentName:"p"},"operating system")," (OS) (technically the operating system ",(0,a.kt)("strong",{parentName:"p"},"kernel"),").\nThe OS provides the fundamental primitives to interact with hardware (read and write data) and to manage the running of applications (such as memory allocation, thread creation, scheduling).\nThese primitives form the ",(0,a.kt)("strong",{parentName:"p"},"system call API")," or ",(0,a.kt)("strong",{parentName:"p"},"system API"),".\nAn item in the system call API, i.e. the equivalent of a function call that triggers the execution of a functionality in the operating system, is a ",(0,a.kt)("strong",{parentName:"p"},"system call"),"."),(0,a.kt)("p",null,"The system call API is well defined, stable and complete: it exposes the entire functionality of the operating system and hardware.\nHowever, it is also minimalistic with respect to features and it provides a low-level (close to hardware) specification, making it cumbersome to use and ",(0,a.kt)("strong",{parentName:"p"},"not portable"),"."),(0,a.kt)("p",null,"Due to the downsides of the system call API, a basic library, the ",(0,a.kt)("strong",{parentName:"p"},"standard C library")," (also called ",(0,a.kt)("strong",{parentName:"p"},"libc"),"), is built on top of it.\nBecause the system call API uses an OS-specific calling convention, the standard C library typically wraps each system call into an equivalent function call, following a portable calling convention.\nMore than these wrappers, the standard C library provides its own API that is typically portable.\nPart of the API exposed by the standard C library is the ",(0,a.kt)("strong",{parentName:"p"},"standard C API"),", also called ",(0,a.kt)("strong",{parentName:"p"},"ANSI C")," or ",(0,a.kt)("strong",{parentName:"p"},"ISO C"),";\nthis API is typically portable across all platforms (operating systems and hardware).\nThis API, going beyond system call wrappers, has several advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"portability: irrespective of the underlying operating system (and system call API), the API is the same"),(0,a.kt)("li",{parentName:"ul"},"extensive features: string management, I/O formatting"),(0,a.kt)("li",{parentName:"ul"},"possibility of increased efficiency with techniques such as buffering, as we show later")))}m.isMDXComponent=!0},94522:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/modern-sw-stack-4a2427d07a59c3a6599305b8eedc43dd.svg"}}]);