"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[26907],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(r),y=a,m=f["".concat(i,".").concat(y)]||f[y]||u[y]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[f]="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},35899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s="Sparse File",p={unversionedId:"Lab/I/O/File Mappings/support/sparse-file/README",id:"Lab/I/O/File Mappings/support/sparse-file/README",title:"Sparse File",description:"The swiss_cheese.sparse file is a sparse file.",source:"@site/docs/Lab/I/O/File Mappings/support/sparse-file/README.md",sourceDirName:"Lab/I/O/File Mappings/support/sparse-file",slug:"/Lab/I/O/File Mappings/support/sparse-file/",permalink:"/operating-systems/Lab/I/O/File Mappings/support/sparse-file/",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[],c={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sparse-file"},"Sparse File"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"swiss_cheese.sparse")," file is a sparse file.\nIt stores 1 character of useful data followed by 10 bytes of spaces.\nThen another characters, then another 10 bytes of spaces, and so on."),(0,a.kt)("p",null,"Fill in the blanks in ",(0,a.kt)("inlineCode",{parentName:"p"},"solve.c")," to read the characters, concatenate them together and get the flag."))}u.isMDXComponent=!0}}]);