"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[84277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},I=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),I=a,f=m["".concat(s,".").concat(I)]||m[I]||O[I]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=I;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}I.displayName="MDXCreateElement"},98473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="I/O",l={unversionedId:"Lab/I/O/I/O Internals/content/overview",id:"Lab/I/O/I/O Internals/content/overview",title:"I/O",description:"In this chapter, you will learn how the operating systems handles file operations as well as network requests.",source:"@site/docs/Lab/I/O/I/O Internals/content/overview.md",sourceDirName:"Lab/I/O/I/O Internals/content",slug:"/Lab/I/O/I/O Internals/content/overview",permalink:"/operating-systems/Lab/I/O/I/O Internals/content/overview",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"io"},"I/O"),(0,a.kt)("p",null,"In this chapter, you will learn how the operating systems handles file operations as well as network requests."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/file-handlers"},"File Handlers")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/file-descriptors"},"File Descriptors")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/redirections"},"Redirections")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/pipes"},"Pipes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/local-io-in-action"},"Local I/O in Action")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/remote-io"},"Remote I/O")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/networking-101"},"Networking 101")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/client-server-model"},"Client-Server Model")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/beyond-network-sockets"},"Beyond Network Sockets")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/file-mappings"},"File Mappings")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/io-internals"},"IO Internals")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/I/O%20Internals/content/arena"},"Arena"))))}m.isMDXComponent=!0}}]);