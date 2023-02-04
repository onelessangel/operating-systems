"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[6010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,p={unversionedId:"Lab/Application-Interaction/Arena/content/time-server",id:"Lab/Application-Interaction/Arena/content/time-server",title:"time-server",description:"Time Server",source:"@site/docs/Lab/Application-Interaction/Arena/content/time-server.md",sourceDirName:"Lab/Application-Interaction/Arena/content",slug:"/Lab/Application-Interaction/Arena/content/time-server",permalink:"/operating-systems/Lab/Application-Interaction/Arena/content/time-server",draft:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Time Server",id:"time-server",level:2},{value:"Python Version",id:"python-version",level:3},{value:"Practice",id:"practice",level:4}],s={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"time-server"},"Time Server"),(0,o.kt)("p",null,"Check out the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/server.c")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/client.c"),"."),(0,o.kt)("p",null,"This is a simple program consisting of a server and a client.\nThe server uses a tcp socket to wait for connections.\nOnce a client has connected, the server will send the current time to it.\nThe client will then print the received time to the console."),(0,o.kt)("p",null,"Let's build and run this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ make\ngcc -Wall -o server server.c\ngcc -Wall -o client client.c\nstudent@os:~/.../support/time-server$ ./server\n")),(0,o.kt)("p",null,"Then, in another terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ ./client 127.0.0.1 2000\nThe time is Thu Sep  1 11:48:03 2022\n")),(0,o.kt)("h3",{id:"python-version"},"Python Version"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/python")," we have the equivalent python implementation for both the server and client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 server.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 client.py 127.0.0.1 2000\nThe time is Thu Sep  1 11:58:01 2022\n")),(0,o.kt)("h4",{id:"practice"},"Practice"),(0,o.kt)("p",null,"Try to figure out the protocol used by the server and the client.\nYou can do this by reading the source code, corroborated with information obtained at runtime."),(0,o.kt)("p",null,"Run the server again (the version in C), but instead of running the client let's run ",(0,o.kt)("inlineCode",{parentName:"p"},"netcat")," and pipe the output to ",(0,o.kt)("inlineCode",{parentName:"p"},"hexdump"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nc -d 127.0.0.1 2000 | hexdump -C\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Application-Interaction/Arena/quiz/time-server"},"Quiz")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Application-Interaction/Arena/quiz/time-server-interop"},"Quiz")))}m.isMDXComponent=!0}}]);