"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[58730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,p={unversionedId:"Lab/Software-Stack/Introduction/content/app-investigate",id:"Lab/Software-Stack/Introduction/content/app-investigate",title:"app-investigate",description:"App Investigation",source:"@site/docs/Lab/Software-Stack/Introduction/content/app-investigate.md",sourceDirName:"Lab/Software-Stack/Introduction/content",slug:"/Lab/Software-Stack/Introduction/content/app-investigate",permalink:"/operating-systems/Lab/Software-Stack/Introduction/content/app-investigate",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"App Investigation",id:"app-investigation",level:3},{value:"Practice",id:"practice",level:4}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"app-investigation"},"App Investigation"),(0,r.kt)("p",null,"Let's spend some time investigating actual applications residing on the local system.\nFor now we know that applications are developed using high-level languages and then compiled or interpreted to use the lower-layer interfaces of the software stack, such as the system call API."),(0,r.kt)("p",null,"Let's enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/app-investigate/")," folder and run the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_app_types.sh")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../lab/support/app-investigate$ ./get_app_types.sh\nbinary apps: 2223\nPerl apps: 256\nShell apps: 454\nPython apps: 123\nOther apps: 27\n")),(0,r.kt)("p",null,"The script prints the types of the application executables in the system.\nThe output will differ between systems, given each has particular types of applications installed."),(0,r.kt)("p",null,"We list them by running the command inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_app_types.sh")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../lab/support/app-investigate$ find /usr/bin /bin /usr/sbin /sbin -type f -exec file {} \\;\n[...]\n/usr/bin/qpdldecode: ELF 64-bit LSB shared object, x86-64 [...]\n/usr/bin/mimeopen: Perl script text executable\n[...]\n")),(0,r.kt)("p",null,"As above, the output will differ between systems."),(0,r.kt)("p",null,"So, depending on the developers' choice, applications may be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"compiled into executables, from compiled languages such as C, C++, Go, Rust, D"),(0,r.kt)("li",{parentName:"ul"},"developed as scripts, from interpreted languages such as Python, Perl, JavaScript")),(0,r.kt)("h4",{id:"practice"},"Practice"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/app-investigate/")," folder and go through the practice items below.\nSelect a binary executable application and a scripted application from those listed above."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ldd")," on the two applications.\nNotice the resulting messages and explain the results.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," on the two applications.\nFollow the library calls and the system calls done by each application."))))}u.isMDXComponent=!0}}]);