"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[39400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,y=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[f]="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s="Sparse File",p={unversionedId:"Lab/I/O/Remote I/O/support/sparse-file/README",id:"Lab/I/O/Remote I/O/support/sparse-file/README",title:"Sparse File",description:"The swiss_cheese.sparse file is a sparse file.",source:"@site/docs/Lab/I/O/Remote I/O/support/sparse-file/README.md",sourceDirName:"Lab/I/O/Remote I/O/support/sparse-file",slug:"/Lab/I/O/Remote I/O/support/sparse-file/",permalink:"/operating-systems/Lab/I/O/Remote I/O/support/sparse-file/",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[],l={toc:c},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sparse-file"},"Sparse File"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"swiss_cheese.sparse")," file is a sparse file.\nIt stores 1 character of useful data followed by 10 bytes of spaces.\nThen another characters, then another 10 bytes of spaces, and so on."),(0,o.kt)("p",null,"Fill in the blanks in ",(0,o.kt)("inlineCode",{parentName:"p"},"solve.c")," to read the characters, concatenate them together and get the flag."))}u.isMDXComponent=!0}}]);