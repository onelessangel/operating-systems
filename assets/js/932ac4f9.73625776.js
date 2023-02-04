"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[6988],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:e},p),{},{components:n})):a.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95210:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Software Stack",c={unversionedId:"Lab/Software-Stack/Introduction/content/introduction",id:"Lab/Software-Stack/Introduction/content/introduction",title:"Software Stack",description:"Setup",source:"@site/docs/Lab/Software-Stack/Introduction/content/introduction.md",sourceDirName:"Lab/Software-Stack/Introduction/content",slug:"/Lab/Software-Stack/Introduction/content/introduction",permalink:"/operating-systems/Lab/Software-Stack/Introduction/content/introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Software-Stack",permalink:"/operating-systems/Software-Stack/"},next:{title:"overview",permalink:"/operating-systems/Lab/Software-Stack/Overview/content/overview"}},l={},s=[{value:"Setup",id:"setup",level:2},{value:"Contents",id:"contents",level:2}],p={toc:s},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"software-stack"},"Software Stack"),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"If you have already cloned the repository, make sure it is updated.\nRun this command inside the repository clone directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"git pull --rebase\n")),(0,r.kt)("p",null,"The command may fail if you have uncommitted changes.\nIf that is the case, commit changes and retry."),(0,r.kt)("p",null,"If you haven't already cloned the repository, do it and enter the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/open-education-hub/operating-systems\ncd operating-sytems\n")),(0,r.kt)("p",null,"While inside the repository clone top directory, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"update-repo.sh")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash util/update-repo.sh software-stack\n")),(0,r.kt)("p",null,"The script may fail if you have uncommitted changes and it will instruct you to commit them.\nIf that is the case, commit changes and re-run the script."),(0,r.kt)("p",null,"Navigate to the chapter lab directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd content/chapters/software-stack/lab/\n")),(0,r.kt)("p",null,"Now go through the items below."),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/overview"},"Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/modern-sw-stack"},"Modern Software Stacks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/basic-syscall"},"Basic System Calls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/syscall-wrapper"},"System Call Wrapper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/common-functions"},"Common Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/libc"},"Libraries and libc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/static-dynamic"},"Statically-linked and Dynamically-linked Libraries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/libcall-syscall"},"Library calls vs system calls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/high-level-lang"},"High-Level Languages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/app-investigate"},"App Investigation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/arena"},"Arena"))))}m.isMDXComponent=!0}}]);