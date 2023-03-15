"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[97357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="App Investigation",p={unversionedId:"Lab/Software Stack/Modern Software Stacks/content/app-investigate",id:"Lab/Software Stack/Modern Software Stacks/content/app-investigate",title:"App Investigation",description:"Let's spend some time investigating actual applications residing on the local system.",source:"@site/docs/Lab/Software Stack/Modern Software Stacks/content/app-investigate.md",sourceDirName:"Lab/Software Stack/Modern Software Stacks/content",slug:"/Lab/Software Stack/Modern Software Stacks/content/app-investigate",permalink:"/operating-systems/Lab/Software Stack/Modern Software Stacks/content/app-investigate",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Practice",id:"practice",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-investigation"},"App Investigation"),(0,r.kt)("p",null,"Let's spend some time investigating actual applications residing on the local system.\nFor now, we know that applications are developed using high-level languages and then compiled or interpreted to use the lower-layer interfaces of the software stack, such as the system call API."),(0,r.kt)("p",null,"Let's enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/app-investigate/")," folder and run the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_app_types.sh")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../lab/support/app-investigate$ ./get_app_types.sh\nbinary apps: 2223\nPerl apps: 256\nShell apps: 454\nPython apps: 123\nOther apps: 27\n")),(0,r.kt)("p",null,"The script prints the types of the application executables in the system.\nThe output will differ between systems, given each has particular types of applications installed."),(0,r.kt)("p",null,"We list them by running the command inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_app_types.sh")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../lab/support/app-investigate$ find /usr/bin /bin /usr/sbin /sbin -type f -exec file {} \\;\n[...]\n/usr/bin/qpdldecode: ELF 64-bit LSB shared object, x86-64 [...]\n/usr/bin/mimeopen: Perl script text executable\n[...]\n")),(0,r.kt)("p",null,"As above, the output will differ between systems."),(0,r.kt)("p",null,"So, depending on the developers' choice, applications may be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"compiled into executables, from compiled languages such as C, C++, Go, Rust, D"),(0,r.kt)("li",{parentName:"ul"},"developed as scripts, from interpreted languages such as Python, Perl, JavaScript")),(0,r.kt)("h2",{id:"practice"},"Practice"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/app-investigate/")," folder and go through the practice items below.\nSelect a binary executable application and a scripted application from those listed above."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ldd")," on the two applications.\nNotice the resulting messages and explain the results.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," on the two applications.\nFollow the library calls and the system calls done by each application."))))}d.isMDXComponent=!0}}]);