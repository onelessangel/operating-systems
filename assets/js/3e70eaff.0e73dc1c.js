"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[91836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="Time Server Protocol",l={unversionedId:"Lab/Application Interaction/OS Cloud/quiz/time-server",id:"Lab/Application Interaction/OS Cloud/quiz/time-server",title:"Time Server Protocol",description:"Question Text",source:"@site/docs/Lab/Application Interaction/OS Cloud/quiz/time-server.md",sourceDirName:"Lab/Application Interaction/OS Cloud/quiz",slug:"/Lab/Application Interaction/OS Cloud/quiz/time-server",permalink:"/operating-systems/Lab/Application Interaction/OS Cloud/quiz/time-server",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time-server-protocol"},"Time Server Protocol"),(0,i.kt)("h2",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"What format does the message exchanged between the server and the client have?"),(0,i.kt)("h2",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"4 byte length (little endian) followed by 8 byte timestamp (little endian)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"8 byte length (little endian) followed by 4 byte timestamp (little endian)"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4 byte length (big endian) followed by 8 byte timestamp (big endian)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"8 byte length (big endian) followed by 4 byte timestamp (big endian)")),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"If we consider one output example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"00000000  00 00 00 08 00 00 00 00  63 1b a9 50              |........c..P|\n0000000c\n")),(0,i.kt)("p",null,"We can identify the 4 byte length in big endian (",(0,i.kt)("inlineCode",{parentName:"p"},"00 00 00 08"),"), then the 8 byte timestamp (",(0,i.kt)("inlineCode",{parentName:"p"},"00 00 00 00  63 1b a9 50"),"), also in big endian."))}d.isMDXComponent=!0}}]);