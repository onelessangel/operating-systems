"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[80163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},o="Modify String",l={unversionedId:"Lab/Data/Memory Support/quiz/static-dynamic",id:"Lab/Data/Memory Support/quiz/static-dynamic",title:"Modify String",description:"Question Text",source:"@site/docs/Lab/Data/Memory Support/quiz/static-dynamic.md",sourceDirName:"Lab/Data/Memory Support/quiz",slug:"/Lab/Data/Memory Support/quiz/static-dynamic",permalink:"/operating-systems/Lab/Data/Memory Support/quiz/static-dynamic",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Question Text",id:"question-text-1",level:2},{value:"Question Answers",id:"question-answers-1",level:2},{value:"Feedback",id:"feedback-1",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modify-string"},"Modify String"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What is the granularity of the size of memory sections?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4 bytes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4 MB"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4 KB")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 KB")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"All sizes of memory areas are multiple of 4 KB (the page size).\nAlso, all addresses start at multiple of 4 KB."),(0,a.kt)("h1",{id:"modify-string-1"},"Modify String"),(0,a.kt)("h2",{id:"question-text-1"},"Question Text"),(0,a.kt)("p",null,"How many bytes would we need to use to increase the size of the ",(0,a.kt)("inlineCode",{parentName:"p"},".data")," section in the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-static")," executable shown in the text to cause a total size of ",(0,a.kt)("inlineCode",{parentName:"p"},"28 KB"),", instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"24 KB"),"?"),(0,a.kt)("h2",{id:"question-answers-1"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1 KB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4 KB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3232 bytes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3581 bytes"))),(0,a.kt)("h2",{id:"feedback-1"},"Feedback"),(0,a.kt)("p",null,"The total size must be ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," byte over the ",(0,a.kt)("inlineCode",{parentName:"p"},"24 KB")," threshold to cause a new page allocation.\nSo in order to get that past the current size of ",(0,a.kt)("inlineCode",{parentName:"p"},"20996"),", we need ",(0,a.kt)("inlineCode",{parentName:"p"},"3581")," bytes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ echo "24 * 1024 + 1 - 20996" | bc\n3581\n')))}m.isMDXComponent=!0}}]);