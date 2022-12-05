"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[24164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||k[m]||o;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Beyond Network Sockets",s={unversionedId:"Lab/I/O/Pipes/content/beyond-network-sockets",id:"Lab/I/O/Pipes/content/beyond-network-sockets",title:"Beyond Network Sockets",description:"Up until this point, we first learned how to use the Berkeley Sockets API, then we learned what a client and a server is, based on this API.",source:"@site/docs/Lab/I/O/Pipes/content/beyond-network-sockets.md",sourceDirName:"Lab/I/O/Pipes/content",slug:"/Lab/I/O/Pipes/content/beyond-network-sockets",permalink:"/operating-systems/Lab/I/O/Pipes/content/beyond-network-sockets",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"UNIX Sockets",id:"unix-sockets",level:2},{value:"Practice: Receive from UNIX Socket",id:"practice-receive-from-unix-socket",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"beyond-network-sockets"},"Beyond Network Sockets"),(0,r.kt)("p",null,"Up until this point, we first learned how to use the ",(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Pipes/content/remote-io#api---hail-berkeley-sockets"},"Berkeley Sockets API"),", then we learned what a ",(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Pipes/content/client-server-model"},"client and a server is"),", based on this API.\nSo now we know that sockets offer a ubiquitous interface for inter-process communication, which is great.\nA program written in Python can easily send data to anther one written in C, D, Java, Haskell, you name it.\nHowever, in the ",(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Pipes/content/networking-101"},"section dedicated to networking")," we saw that it takes a whole stack of protocols to send this message form one process to the other.\nAs you might imagine, this is ",(0,r.kt)("strong",{parentName:"p"},"much slower even than local I/O using files"),"."),(0,r.kt)("p",null,"So far we've only used sockets for local communication and in practice it is a bit counterproductive to use network sockets for local IPC due to their high latency.\nWouldn't it be great if we had a means to use the sockets API for local IPC without having to deal with this increased latency?\nWell, there is a way and it's alled ",(0,r.kt)("strong",{parentName:"p"},"UNIX sockets"),"."),(0,r.kt)("h2",{id:"unix-sockets"},"UNIX Sockets"),(0,r.kt)("p",null,"UNIX sockets allow us to create them using the ",(0,r.kt)("inlineCode",{parentName:"p"},"socket()")," syscall and ",(0,r.kt)("inlineCode",{parentName:"p"},"bind()")," them ",(0,r.kt)("strong",{parentName:"p"},"TO A FILE")," instead of an IP and port.\nYou may already see a similarity with ",(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Pipes/content/pipes#named-pipes---mkfifo"},"named pipes"),".\nJust like them, UNIX sockets don't work by writing data to the file (that would be slow), but instead the kernel retains the data they send internally so that ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"recv()")," can read it from the kernel's storage.\nYou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"read()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," to read/write data from/to both network and UNIX sockets as well, by the way.\nThe differences between using ",(0,r.kt)("inlineCode",{parentName:"p"},"send()"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"recv()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"write()"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"read()")," are rather subtle and are described in ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1790750/what-is-the-difference-between-read-and-recv-and-between-send-and-write"},"this Stack Overflow thread"),"."),(0,r.kt)("h3",{id:"practice-receive-from-unix-socket"},"Practice: Receive from UNIX Socket"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"support/receive-challenges/receive_unix_socket.c"),".\nDon't write any code yet.\nLet's compare UNIX sockets with network sockets first:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To create them, give ",(0,r.kt)("inlineCode",{parentName:"p"},"socket()")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"PF_UNIX"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"AF_UNIX")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"PF_INET"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"AF_INET"),".\nThe latter are used to create network sockets.\nYou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"PF_*")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AF_*"),' interchangeably.\nThey mean "protocol families" and "address families", respectively, but they are ',(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/6737450"},"essentially the same thing"),".\nBut apart from this, UNIX sockets can be set to work in both TCP (",(0,r.kt)("inlineCode",{parentName:"p"},"SOCK_STREAM"),") and UDP (",(0,r.kt)("inlineCode",{parentName:"p"},"SOCK_DGRAM"),") modes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bind()")," call now takes a path as argument, as specified ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/unix.7.html"},"in the UNIX socket man page"),"."))),(0,r.kt)("p",null,"And this is it.\nEverything else is the same."),(0,r.kt)("p",null,"Now fill in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TODO"),"s in ",(0,r.kt)("inlineCode",{parentName:"p"},"receive_unix_socket.c"),".\nUse the example at the bottom of ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/unix.7.html"},"the UNIX socket man page")," if you get stuck at ",(0,r.kt)("inlineCode",{parentName:"p"},"bind()"),".\nWhen you're done, run compile and it first and then ",(0,r.kt)("inlineCode",{parentName:"p"},"send_unix_socket"),".\nIf you did this task correctly, ",(0,r.kt)("inlineCode",{parentName:"p"},"receive_unix_socket")," should display the flag."))}d.isMDXComponent=!0}}]);