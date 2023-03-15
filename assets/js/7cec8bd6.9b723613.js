"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[55651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var I=a.createContext({}),d=function(e){var t=a.useContext(I),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(I.Provider,{value:t},e.children)},r="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},Z=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,I=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),r=d(n),Z=l,p=r["".concat(I,".").concat(Z)]||r[Z]||s[Z]||i;return n?a.createElement(p,o(o({ref:t},m),{},{components:n})):a.createElement(p,o({ref:t},m))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=Z;var c={};for(var I in t)hasOwnProperty.call(t,I)&&(c[I]=t[I]);c.originalType=e,c[r]="string"==typeof e?e:l,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}Z.displayName="MDXCreateElement"},76310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const i={},o="I/O",c={unversionedId:"Lab/I/O/Beyond Network Sockets/content/overview",id:"Lab/I/O/Beyond Network Sockets/content/overview",title:"I/O",description:"We know that a compute system is a collection of hardware and software that modifies data.",source:"@site/docs/Lab/I/O/Beyond Network Sockets/content/overview.md",sourceDirName:"Lab/I/O/Beyond Network Sockets/content",slug:"/Lab/I/O/Beyond Network Sockets/content/overview",permalink:"/operating-systems/Lab/I/O/Beyond Network Sockets/content/overview",draft:!1,tags:[],version:"current",frontMatter:{}},I={},d=[],m={toc:d},r="wrapper";function s(e){let{components:t,...i}=e;return(0,l.kt)(r,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"io"},"I/O"),(0,l.kt)("p",null,"We know that a compute system is a collection of hardware and software that modifies data.\nThis data has to come from ",(0,l.kt)("em",{parentName:"p"},"somewhere"),".\nThis ",(0,l.kt)("em",{parentName:"p"},"somewhere")," is always outside the compute system:\nfiles, network packets, radio signals, sensor data."),(0,l.kt)("p",null,"A compute system without output is nearly useless.\nIt will always run the same code on the same data and, thus, produce the same result.\nThis may be useful in some narrow cases, such as calculating the decimals of Pi.\nHowever, for more real-world-facing applications such as web servers, operating systems and databases inputs and outputs are mandatory."),(0,l.kt)("p",null,"The most simplistic representation of a compute system is a black box that receives some input and delivers some output."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Compute System - Oversimplified",src:n(28845).Z,width:"352",height:"102"})),(0,l.kt)("p",null,"In this session we will look into how a compute system interacts with the outside world to get and produce these inputs and outputs."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"./introduction.md"},"Introduction")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/file-handlers"},"File Handlers")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/file-descriptors"},"File Descriptors")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/redirections"},"Redirections")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/pipes"},"Pipes")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/local-io-in-action"},"Local I/O in Action")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/remote-io"},"Remote I/O")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/networking-101"},"Networking 101")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/client-server-model"},"Client-Server Model")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/beyond-network-sockets"},"Beyond Network Sockets")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/file-mappings"},"File Mappings")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/io-internals"},"IO Internals")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/zero-copy"},"Zero-copy")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/async-io"},"Asynchronous I/O")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/io-multiplexing"},"I/O Multiplexing")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/arena"},"Arena"))))}s.isMDXComponent=!0},28845:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzNTJweCIgaGVpZ2h0PSIxMDJweCIgdmlld0JveD0iLTAuNSAtMC41IDM1MiAxMDIiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjItMTEtMjJUMTQ6MzI6MTAuODkxWiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFgxMSkmcXVvdDsgZXRhZz0mcXVvdDt3QTNVVEJxazR5R1l1OXpXWm01cCZxdW90OyB2ZXJzaW9uPSZxdW90OzIwLjUuMyZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtUS093Yk5SN2pvNm8tNS1Ja0NMaSZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDs3WmZMY3Bzd0ZJYWZobVU2Z0hCdEwyMmN0RjMwTXZHaWJuWWFkQUthQ3NRSUVVT2V2cElSVjVGSjdZazdXWlR4Z3ZOTEhLVHovWkt3ZzhLMCtpUndubnpsQkpqanU2UnkwTTd4ZlMvd2ZVZi9YRkkzeXNwM0d5RVdsSmhPdmJDbnoyREV0bHRKQ1JTampwSnpKbWsrRmlPZVpSREprWWFGNE1keHQwZk94bS9OY1F5V3NJOHdzOVdmbE1qRXpHTGg5dnBub0hIU3Z0bHpUVXVLMjg1R0tCSk0rSEVnb1ZzSGhZSnoyZHlsVlFoTUY2K3RTL1BjM1F1dDNjQUVaUEp2SHRqc25oL3V4U0hKdnhFM2hQdkZ6VDQ1M0t5YUxFK1lsV2JDWnJDeWJpc2dlSmtSMEVrOEIyMlBDWld3ejNHa1c0K0t1ZElTbVRMVFhFakJmM2VWVW5QY1B2Sk1HcXhxZ0UwY2NzYkZLVHR5VDVmV0tXTUQvZTUwZFJuYmxveG5LdFBXakJxRWhPckZjbmhka1pVN2dhY2dSYTI2bUFjNmh4bGplbXNUSDN2TXFNV2NEQkczaExHeFZ0emw3cXV2Ymd5QU0yQjRGb3lRcDNrcFFZbjd1cENRL21NNEhZUUpuQTdhRzNCQS9waUQ3OW9jUEgrR3crcGFHUHpYMXdSa1pLTTNGeFZGREJjRmpjYVY3ckc0WjFUWjVxTnFLT3FEU1hNS2Z1bmd3NklOZDlXd2NWZWJxQmt3RUd0dm0xQlJteWtXTWNqWFRHblRHOUNaV3lTdEpvQmhTWi9HdzVnalp0N3dnMU0xd0g2UkxpZm1DQ2JRQzE2S0NNeFR3ODF2a2loWWpCTUYwMFhjMU1GS2RESlFOKzNMUFlYZWthY3FLZzhtcDc0Zk9FcEZ2YUYwY0w2ZkdpRHYxVS9CZXVJbnRGWXp2OHhSMDFSVGExN1pVWUhscUMrWk9pc3NXNm1kV2M0ZEE1TVRkYmpER3drekdtZmFqWW94S0gycjkzbXFQbzAycGlHbGhPalh6SjQ3WTd0ZS9sMXdoYU5lMmNrNllqN09tQTVkNjRSWld1eStsL0kvdkZsNDFqcWJnYmQ4RzNncTdEL0htM1hhLzZsQnQzOEEmbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIxMDAiIHJ4PSIxNSIgcnk9IjE1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxMTEiIHk9IjExIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIHJ5PSIxMiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA1MXB4OyBtYXJnaW4tbGVmdDogMTEycHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyIgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0ZGRkZGRjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMjBweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+Q29tcHV0ZSBTeXN0ZW08L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTcxIiB5PSI1NyIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyMHB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db21wdXRlIFN5c3QuLi48L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gNjEgNTEgTCAxMDIuNzYgNTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTA4Ljc2IDUxIEwgMTAwLjc2IDU1IEwgMTAyLjc2IDUxIEwgMTAwLjc2IDQ3IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAyMzEgNTEgTCAyNzIuNzYgNTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMjc4Ljc2IDUxIEwgMjcwLjc2IDU1IEwgMjcyLjc2IDUxIEwgMjcwLjc2IDQ3IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMSIgeT0iMzYiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNTFweDsgbWFyZ2luLWxlZnQ6IDJweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMDAwMDAwOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyMHB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5JbnB1dDwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMSIgeT0iNTciIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMjBweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW5wdXQ8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjI4MSIgeT0iMzYiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDY4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNTFweDsgbWFyZ2luLWxlZnQ6IDI4MnB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiIGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICMwMDAwMDA7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPk91dHB1dDwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMTYiIHk9IjU3IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjIwcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk91dHB1dDwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5UZXh0IGlzIG5vdCBTVkcgLSBjYW5ub3QgZGlzcGxheTwvdGV4dD48L2E+PC9zd2l0Y2g+PC9zdmc+"}}]);