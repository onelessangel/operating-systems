"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[72162],{3905:(t,e,I)=>{I.d(e,{Zo:()=>a,kt:()=>r});var d=I(67294);function i(t,e,I){return e in t?Object.defineProperty(t,e,{value:I,enumerable:!0,configurable:!0,writable:!0}):t[e]=I,t}function l(t,e){var I=Object.keys(t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);e&&(d=d.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),I.push.apply(I,d)}return I}function c(t){for(var e=1;e<arguments.length;e++){var I=null!=arguments[e]?arguments[e]:{};e%2?l(Object(I),!0).forEach((function(e){i(t,e,I[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(I)):l(Object(I)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(I,e))}))}return t}function Z(t,e){if(null==t)return{};var I,d,i=function(t,e){if(null==t)return{};var I,d,i={},l=Object.keys(t);for(d=0;d<l.length;d++)I=l[d],e.indexOf(I)>=0||(i[I]=t[I]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(d=0;d<l.length;d++)I=l[d],e.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(t,I)&&(i[I]=t[I])}return i}var n=d.createContext({}),m=function(t){var e=d.useContext(n),I=e;return t&&(I="function"==typeof t?t(e):c(c({},e),t)),I},a=function(t){var e=m(t.components);return d.createElement(n.Provider,{value:e},t.children)},o="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return d.createElement(d.Fragment,{},e)}},b=d.forwardRef((function(t,e){var I=t.components,i=t.mdxType,l=t.originalType,n=t.parentName,a=Z(t,["components","mdxType","originalType","parentName"]),o=m(I),b=i,r=o["".concat(n,".").concat(b)]||o[b]||s[b]||l;return I?d.createElement(r,c(c({ref:e},a),{},{components:I})):d.createElement(r,c({ref:e},a))}));function r(t,e){var I=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=I.length,c=new Array(l);c[0]=b;var Z={};for(var n in e)hasOwnProperty.call(e,n)&&(Z[n]=e[n]);Z.originalType=t,Z[o]="string"==typeof t?t:i,c[1]=Z;for(var m=2;m<l;m++)c[m]=I[m];return d.createElement.apply(null,c)}return d.createElement.apply(null,I)}b.displayName="MDXCreateElement"},11325:(t,e,I)=>{I.r(e),I.d(e,{assets:()=>n,contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>Z,toc:()=>m});var d=I(87462),i=(I(67294),I(3905));const l={},c="Introduction",Z={unversionedId:"Lab/I/O/File Descriptors/content/introduction",id:"Lab/I/O/File Descriptors/content/introduction",title:"Introduction",description:"We know that a compute system is a collection of hardware and software that modifies data.",source:"@site/docs/Lab/I/O/File Descriptors/content/introduction.md",sourceDirName:"Lab/I/O/File Descriptors/content",slug:"/Lab/I/O/File Descriptors/content/introduction",permalink:"/operating-systems/Lab/I/O/File Descriptors/content/introduction",draft:!1,tags:[],version:"current",frontMatter:{}},n={},m=[],a={toc:m},o="wrapper";function s(t){let{components:e,...l}=t;return(0,i.kt)(o,(0,d.Z)({},a,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We know that a compute system is a collection of hardware and software that modifies data.\nThis data has to come from ",(0,i.kt)("em",{parentName:"p"},"somewhere"),".\nThis ",(0,i.kt)("em",{parentName:"p"},"somewhere")," is always outside the compute system:\nfiles, network packets, radio signals, sensor data."),(0,i.kt)("p",null,"A compute system without output is nearly useless.\nIt will always run the same code on the same data and, thus, produce the same result.\nThis may be useful in some narrow cases, such as calculating the decimals of Pi.\nHowever, for more real-world-facing applications such as web servers, operating systems and databases inputs and outputs are mandatory."),(0,i.kt)("p",null,"The most simplistic representation of a compute system is a black box that receives some input and delivers some output."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compute System - Oversimplified",src:I(965).Z,width:"352",height:"102"})),(0,i.kt)("p",null,"In this session we will look into how a compute system interacts with the outside world to get and produce these inputs and outputs."))}s.isMDXComponent=!0},965:(t,e,I)=>{I.d(e,{Z:()=>d});const d="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzNTJweCIgaGVpZ2h0PSIxMDJweCIgdmlld0JveD0iLTAuNSAtMC41IDM1MiAxMDIiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjItMTEtMjJUMTQ6MzI6MTAuODkxWiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFgxMSkmcXVvdDsgZXRhZz0mcXVvdDt3QTNVVEJxazR5R1l1OXpXWm01cCZxdW90OyB2ZXJzaW9uPSZxdW90OzIwLjUuMyZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtUS093Yk5SN2pvNm8tNS1Ja0NMaSZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDs3WmZMY3Bzd0ZJYWZobVU2Z0hCdEwyMmN0RjMwTXZHaWJuWWFkQUthQ3NRSUVVT2V2cElSVjVGSjdZazdXWlR4Z3ZOTEhLVHovWkt3ZzhLMCtpUndubnpsQkpqanU2UnkwTTd4ZlMvd2ZVZi9YRkkzeXNwM0d5RVdsSmhPdmJDbnoyREV0bHRKQ1JTampwSnpKbWsrRmlPZVpSREprWWFGNE1keHQwZk94bS9OY1F5V3NJOHdzOVdmbE1qRXpHTGg5dnBub0hIU3Z0bHpUVXVLMjg1R0tCSk0rSEVnb1ZzSGhZSnoyZHlsVlFoTUY2K3RTL1BjM1F1dDNjQUVaUEp2SHRqc25oL3V4U0hKdnhFM2hQdkZ6VDQ1M0t5YUxFK1lsV2JDWnJDeWJpc2dlSmtSMEVrOEIyMlBDWld3ejNHa1c0K0t1ZElTbVRMVFhFakJmM2VWVW5QY1B2Sk1HcXhxZ0UwY2NzYkZLVHR5VDVmV0tXTUQvZTUwZFJuYmxveG5LdFBXakJxRWhPckZjbmhka1pVN2dhY2dSYTI2bUFjNmh4bGplbXNUSDN2TXFNV2NEQkczaExHeFZ0emw3cXV2Ymd5QU0yQjRGb3lRcDNrcFFZbjd1cENRL21NNEhZUUpuQTdhRzNCQS9waUQ3OW9jUEgrR3crcGFHUHpYMXdSa1pLTTNGeFZGREJjRmpjYVY3ckc0WjFUWjVxTnFLT3FEU1hNS2Z1bmd3NklOZDlXd2NWZWJxQmt3RUd0dm0xQlJteWtXTWNqWFRHblRHOUNaV3lTdEpvQmhTWi9HdzVnalp0N3dnMU0xd0g2UkxpZm1DQ2JRQzE2S0NNeFR3ODF2a2loWWpCTUYwMFhjMU1GS2RESlFOKzNMUFlYZWthY3FLZzhtcDc0Zk9FcEZ2YUYwY0w2ZkdpRHYxVS9CZXVJbnRGWXp2OHhSMDFSVGExN1pVWUhscUMrWk9pc3NXNm1kV2M0ZEE1TVRkYmpER3drekdtZmFqWW94S0gycjkzbXFQbzAycGlHbGhPalh6SjQ3WTd0ZS9sMXdoYU5lMmNrNllqN09tQTVkNjRSWld1eStsL0kvdkZsNDFqcWJnYmQ4RzNncTdEL0htM1hhLzZsQnQzOEEmbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIxMDAiIHJ4PSIxNSIgcnk9IjE1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxMTEiIHk9IjExIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIHJ5PSIxMiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA1MXB4OyBtYXJnaW4tbGVmdDogMTEycHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyIgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0ZGRkZGRjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMjBweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+Q29tcHV0ZSBTeXN0ZW08L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTcxIiB5PSI1NyIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyMHB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db21wdXRlIFN5c3QuLi48L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gNjEgNTEgTCAxMDIuNzYgNTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTA4Ljc2IDUxIEwgMTAwLjc2IDU1IEwgMTAyLjc2IDUxIEwgMTAwLjc2IDQ3IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAyMzEgNTEgTCAyNzIuNzYgNTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMjc4Ljc2IDUxIEwgMjcwLjc2IDU1IEwgMjcyLjc2IDUxIEwgMjcwLjc2IDQ3IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMSIgeT0iMzYiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNTFweDsgbWFyZ2luLWxlZnQ6IDJweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMDAwMDAwOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyMHB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5JbnB1dDwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMSIgeT0iNTciIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMjBweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW5wdXQ8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjI4MSIgeT0iMzYiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDY4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNTFweDsgbWFyZ2luLWxlZnQ6IDI4MnB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiIGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICMwMDAwMDA7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPk91dHB1dDwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMTYiIHk9IjU3IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjIwcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk91dHB1dDwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5UZXh0IGlzIG5vdCBTVkcgLSBjYW5ub3QgZGlzcGxheTwvdGV4dD48L2E+PC9zd2l0Y2g+PC9zdmc+"}}]);