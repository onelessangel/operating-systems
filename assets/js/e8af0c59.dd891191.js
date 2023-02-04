"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[47807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={},a="epoll echo-reply server",p={unversionedId:"Lab/I/O/I/O Internals/support/multiplex/README",id:"Lab/I/O/I/O Internals/support/multiplex/README",title:"epoll echo-reply server",description:"Use make to compile the epoll()-based echo-reply server:",source:"@site/docs/Lab/I/O/I/O Internals/support/multiplex/README.md",sourceDirName:"Lab/I/O/I/O Internals/support/multiplex",slug:"/Lab/I/O/I/O Internals/support/multiplex/",permalink:"/operating-systems/Lab/I/O/I/O Internals/support/multiplex/",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"epoll-echo-reply-server"},"epoll echo-reply server"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," to compile the ",(0,o.kt)("inlineCode",{parentName:"p"},"epoll()"),"-based echo-reply server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../multiplex/c$ make\n")),(0,o.kt)("p",null,"Start the server and use ",(0,o.kt)("inlineCode",{parentName:"p"},"telnet")," to connect to it and send messages.\nThe server will reply with the same message.\nThe server listens for connections on port ",(0,o.kt)("inlineCode",{parentName:"p"},"42424"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../multiplex/c$ # on one console\nstudent@os:/.../multiplex/c$ ./epoll_echo_server\n\nstudent@os:/.../multiplex/c$ # on the second, third, ... console\nstudent@os:/.../multiplex/c$ telnet localhost 42424\n")),(0,o.kt)("p",null,"The server uses ",(0,o.kt)("inlineCode",{parentName:"p"},"epoll()")," for multiplexing connections and receiving notifications (input - ",(0,o.kt)("inlineCode",{parentName:"p"},"EPOLLIN")," and output - ",(0,o.kt)("inlineCode",{parentName:"p"},"EPOLLOUT"),").\nA specialized structure (",(0,o.kt)("inlineCode",{parentName:"p"},"struct connection"),") maintains information regarding each connection."),(0,o.kt)("p",null,"Wrappers over ",(0,o.kt)("inlineCode",{parentName:"p"},"epoll()")," are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"../../../utils/sock/w_epoll.h"),"."))}m.isMDXComponent=!0}}]);