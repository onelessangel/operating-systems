"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[6663],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(t),y=a,m=f["".concat(i,".").concat(y)]||f[y]||u[y]||o;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=y;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[f]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},41651:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={},s="Sparse File",p={unversionedId:"Lab/I/O/Arena/support/sparse-file/README",id:"Lab/I/O/Arena/support/sparse-file/README",title:"Sparse File",description:"The swiss_cheese.sparse file is a sparse file.",source:"@site/docs/Lab/I/O/Arena/support/sparse-file/README.md",sourceDirName:"Lab/I/O/Arena/support/sparse-file",slug:"/Lab/I/O/Arena/support/sparse-file/",permalink:"/operating-systems/Lab/I/O/Arena/support/sparse-file/",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[],l={toc:c};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sparse-file"},"Sparse File"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"swiss_cheese.sparse")," file is a sparse file.\nIt stores 1 character of useful data followed by 10 bytes of spaces.\nThen another characters, then another 10 bytes of spaces, and so on."),(0,a.kt)("p",null,"Fill in the blanks in ",(0,a.kt)("inlineCode",{parentName:"p"},"solve.c")," to read the characters, concatenate them together and get the flag."))}f.isMDXComponent=!0}}]);