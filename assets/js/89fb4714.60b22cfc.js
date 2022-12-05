"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[65872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Mini-shell Stops After Command",l={unversionedId:"Lab/Compute/Arena/quiz/mini-shell-stops-after-command",id:"Lab/Compute/Arena/quiz/mini-shell-stops-after-command",title:"Mini-shell Stops After Command",description:"Question Text",source:"@site/docs/Lab/Compute/Arena/quiz/mini-shell-stops-after-command.md",sourceDirName:"Lab/Compute/Arena/quiz",slug:"/Lab/Compute/Arena/quiz/mini-shell-stops-after-command",permalink:"/operating-systems/Lab/Compute/Arena/quiz/mini-shell-stops-after-command",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mini-shell-stops-after-command"},"Mini-shell Stops After Command"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Why does the ",(0,a.kt)("inlineCode",{parentName:"p"},"mini_shell")," process stop after executing a single command?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because of an implementation error")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because the ",(0,a.kt)("inlineCode",{parentName:"li"},"mini_shell")," process doesn't exist anymore")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the OS sees that the command has ended and ends the ",(0,a.kt)("inlineCode",{parentName:"p"},"mini_shell")," process as well")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"exec*()")," syscalls also kill the caller process when the callee ends"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"When you ",(0,a.kt)("inlineCode",{parentName:"p"},"exec*()")," any binary, the VAS current process is ",(0,a.kt)("strong",{parentName:"p"},"replaced")," by that corresponding to that binary.\nSo when you ",(0,a.kt)("inlineCode",{parentName:"p"},'exec*("ls")'),", for example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"mini_shell")," process ",(0,a.kt)("em",{parentName:"p"},"becomes")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ls"),".\nThere is no more ",(0,a.kt)("inlineCode",{parentName:"p"},"mini_shell")," past this point.\nSo when ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," ends, there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"mini_shell")," process to continue its execution anymore."))}m.isMDXComponent=!0}}]);