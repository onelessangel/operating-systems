"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[69078],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={},o=void 0,i={unversionedId:"Lab/Software-Stack/Basic System Calls/content/modern-sw-stack",id:"Lab/Software-Stack/Basic System Calls/content/modern-sw-stack",title:"modern-sw-stack",description:"Modern Software Stacks",source:"@site/docs/Lab/Software-Stack/Basic System Calls/content/modern-sw-stack.md",sourceDirName:"Lab/Software-Stack/Basic System Calls/content",slug:"/Lab/Software-Stack/Basic System Calls/content/modern-sw-stack",permalink:"/operating-systems/Lab/Software-Stack/Basic System Calls/content/modern-sw-stack",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Modern Software Stacks",id:"modern-software-stacks",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modern-software-stacks"},"Modern Software Stacks"),(0,r.kt)("p",null,"Most modern computing systems use a software stack such as the one in the figure below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modern Software Stack",src:a(65278).Z,width:"542",height:"512"})),(0,r.kt)("p",null,"This modern software stack allows fast development and provides a rich set of applications to the user."),(0,r.kt)("p",null,"The basic software component is the ",(0,r.kt)("strong",{parentName:"p"},"operating system")," (OS) (technically the operating system ",(0,r.kt)("strong",{parentName:"p"},"kernel"),").\nThe OS provides the fundamental primitives to interact with hardware (read and write data) and to manage the running of applications (such as memory allocation, thread creation, scheduling).\nThese primitives form the ",(0,r.kt)("strong",{parentName:"p"},"system call API")," or ",(0,r.kt)("strong",{parentName:"p"},"system API"),".\nAn item in the system call API, i.e. the equivalent of a function call that triggers the execution of a functionality in the operating system, is a ",(0,r.kt)("strong",{parentName:"p"},"system call"),"."),(0,r.kt)("p",null,"The system call API is well defined, stable and complete: it exposes the entire functionality of the operating system and hardware.\nHowever, it is also minimalistic with respect to features and it provides a low-level (close to hardware) specification, making it cumbersome to use and ",(0,r.kt)("strong",{parentName:"p"},"not portable"),"."),(0,r.kt)("p",null,"Due to the downsides of the system call API, a basic library, the ",(0,r.kt)("strong",{parentName:"p"},"standard C library")," (also called ",(0,r.kt)("strong",{parentName:"p"},"libc"),"), is built on top of it.\nBecause the system call API uses an OS-specific calling convention, the standard C library typically wraps each system call into an equivalent function call, following a portable calling convention.\nMore than these wrappers, the standard C library provides its own API that is typically portable.\nPart of the API exposed by the standard C library is the ",(0,r.kt)("strong",{parentName:"p"},"standard C API"),", also called ",(0,r.kt)("strong",{parentName:"p"},"ANSI C")," or ",(0,r.kt)("strong",{parentName:"p"},"ISO C"),";\nthis API is typically portable across all platforms (operating systems and hardware).\nThis API, going beyond system call wrappers, has several advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"portability: irrespective of the underlying operating system (and system call API), the API is the same"),(0,r.kt)("li",{parentName:"ul"},"extensive features: string management, I/O formatting"),(0,r.kt)("li",{parentName:"ul"},"possibility of increased efficiency with techniques such as buffering, as we show later")))}d.isMDXComponent=!0},65278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/modern-sw-stack-4a2427d07a59c3a6599305b8eedc43dd.svg"}}]);