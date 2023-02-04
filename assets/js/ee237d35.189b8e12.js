"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[83462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),u=n,h=f["".concat(l,".").concat(u)]||f[u]||d[u]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"Lab/Software-Stack/Libcall-Syscall/content/overview",id:"Lab/Software-Stack/Libcall-Syscall/content/overview",title:"overview",description:"Software comprises of code and data that is loaded in memory and used by the CPU.",source:"@site/docs/Lab/Software-Stack/Libcall-Syscall/content/overview.md",sourceDirName:"Lab/Software-Stack/Libcall-Syscall/content",slug:"/Lab/Software-Stack/Libcall-Syscall/content/overview",permalink:"/operating-systems/Lab/Software-Stack/Libcall-Syscall/content/overview",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c},f="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Software comprises of code and data that is loaded in memory and used by the CPU.\nCode means instructions that are to be fetched by the CPU, decoded and executed.\nThis is called ",(0,n.kt)("strong",{parentName:"p"},"machine code"),", i.e. binary instructions that are understood by the CPU."),(0,n.kt)("img",{src:"../media/hardware-software.svg",alt:"Hardware and Software",width:"60%"}),(0,n.kt)("p",null,"So, when compared to hardware, ",(0,n.kt)("strong",{parentName:"p"},"software is highly flexible"),".\nWe can tie together specific instructions to handle a given task and run them on hardware (CPU, memory, I/O).\nDifferent pieces of these instructions solve different tasks and run on the same hardware.\nMoreover, these pieces of instructions can be duplicated and run on different pieces of hardware, thus providing ",(0,n.kt)("strong",{parentName:"p"},"software reusability"),".\nAll we are left with is creating those pieces of instructions, also called programs."),(0,n.kt)("p",null,"In summary, software has intrinsic characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"flexibility"),": We can (easily) create new pieces of software.\nLittle is required, we don't need raw materials as in the case of hardware or housing or transportation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reusability"),": Software can be easily copied to new systems and provide the same benefits there.")),(0,n.kt)("p",null,"Other characteristics are important to have, as they make life easier for both users and developers of software:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"portability"),": This is the ability to build and run the same program on different computing platforms.\nThis allows a developer to write the application code once and then run it everywhere."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fast development"),": We want developers to be able to write code faster, using higher-level programming languages.")),(0,n.kt)("p",null,"The last two characteristics rely on two items:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"higher-level programming languages"),": As discussed above, a compiler will take a higher-level program and transform it into binary code for different computing platforms, thus providing portability.\nAlso, it's easier to read (comprehend) and write (develop) source code in a higher-level programming language, thus providing fast development.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"software stacks"),": A software stack is the layering of software such that each lower layer provides a set of features that the higher layer can directly use.\nThis means that there is no need for the higher layer to reimplement those features;\nthis provides fast development: focus on only the newer / required parts of software."),(0,n.kt)("p",{parentName:"li"},'Also, each lower layer provides a generic interface to the higher layer.\nThese generic interfaces "hides" possible differences in the even lower layers.\nThis way, a software stack ensures portability across different other parts of software (and hardware as well).\nFor example, the standard C library, that we will present shortly, ensures portability across different operating systems.'))),(0,n.kt)("img",{src:"../media/software-stack.svg",alt:"Software Stack",width:"60%"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Software-Stack/Libcall-Syscall/quiz/software"},"Quiz")))}d.isMDXComponent=!0}}]);