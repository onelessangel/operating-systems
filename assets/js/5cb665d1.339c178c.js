"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[17819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,k=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},i="Software Stack",c={unversionedId:"Lab/Software-Stack/Overview/content/introduction",id:"Lab/Software-Stack/Overview/content/introduction",title:"Software Stack",description:"Setup",source:"@site/docs/Lab/Software-Stack/Overview/content/introduction.md",sourceDirName:"Lab/Software-Stack/Overview/content",slug:"/Lab/Software-Stack/Overview/content/introduction",permalink:"/operating-systems/Lab/Software-Stack/Overview/content/introduction",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Setup",id:"setup",level:2},{value:"Contents",id:"contents",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"software-stack"},"Software Stack"),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"If you have already cloned the repository, make sure it is updated.\nRun this command inside the repository clone directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"git pull --rebase\n")),(0,n.kt)("p",null,"The command may fail if you have uncommitted changes.\nIf that is the case, commit changes and retry."),(0,n.kt)("p",null,"If you haven't already cloned the repository, do it and enter the repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/open-education-hub/operating-systems\ncd operating-sytems\n")),(0,n.kt)("p",null,"While inside the repository clone top directory, run the ",(0,n.kt)("inlineCode",{parentName:"p"},"update-repo.sh")," script:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"bash util/update-repo.sh software-stack\n")),(0,n.kt)("p",null,"The script may fail if you have uncommitted changes and it will instruct you to commit them.\nIf that is the case, commit changes and re-run the script."),(0,n.kt)("p",null,"Navigate to the chapter lab directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"cd content/chapters/software-stack/lab/\n")),(0,n.kt)("p",null,"Now go through the items below."),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/overview"},"Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/modern-sw-stack"},"Modern Software Stacks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/basic-syscall"},"Basic System Calls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/syscall-wrapper"},"System Call Wrapper")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/common-functions"},"Common Functions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/libc"},"Libraries and libc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/static-dynamic"},"Statically-linked and Dynamically-linked Libraries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/libcall-syscall"},"Library calls vs system calls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/high-level-lang"},"High-Level Languages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/app-investigate"},"App Investigation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Overview/content/arena"},"Arena"))))}u.isMDXComponent=!0}}]);