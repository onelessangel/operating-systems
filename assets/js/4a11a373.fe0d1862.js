"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[24910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},s=void 0,o={unversionedId:"Lab/Software-Stack/Arena/content/syscall-wrapper",id:"Lab/Software-Stack/Arena/content/syscall-wrapper",title:"syscall-wrapper",description:"System Call Wrappers",source:"@site/docs/Lab/Software-Stack/Arena/content/syscall-wrapper.md",sourceDirName:"Lab/Software-Stack/Arena/content",slug:"/Lab/Software-Stack/Arena/content/syscall-wrapper",permalink:"/operating-systems/Lab/Software-Stack/Arena/content/syscall-wrapper",draft:!1,tags:[],version:"current",frontMatter:{}},i={},p=[{value:"System Call Wrappers",id:"system-call-wrappers",level:3},{value:"Practice",id:"practice",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"system-call-wrappers"},"System Call Wrappers"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"support/syscall-wrapper/")," folder stores the implementation of a simple program written in C (",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),") that calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," functions.\nThe functions are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"syscall.asm")," as wrappers around corresponding system calls.\nEach function invokes the corresponding system call using the specific system call ID and the arguments provided for the function call."),(0,r.kt)("p",null,"The implementation of the two wrapper functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"syscall.asm")," is very simple, as the function arguments are passed in the same registers required by the system call.\nThis is because of the overlap of the first three registers for the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X86_calling_conventions#System_V_AMD64_ABI"},"x86_64 Linux function calling convention")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"x86_64 Linux system call convention"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"syscall.h")," contains the declaration of the two functions and it's included in ",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),".\nThis way, C programs can be written that make function calls that end up making system calls."),(0,r.kt)("p",null,"Let's build, run and trace system calls for the program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/syscall-wrapper$ ls\nmain.c  Makefile  syscall.h  syscall.s\n\nstudent@os:~/.../lab/support/syscall-wrapper$ make\ngcc -c -o main.o main.c\nnasm -f elf64 -o syscall.o syscall.s\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  main.o syscall.o   -o main\n\nstudent@os:~/.../lab/support/syscall-wrapper$ ls\nmain  main.c  main.o  Makefile  syscall.h  syscall.o  syscall.s\n\nstudent@os:~/.../software-stack/lab/syscall-wrapper$ ./main\nHello, world!\n\nstudent@os:~/.../lab/support/syscall-wrapper$ strace ./main\nexecve("./main", ["./main"], 0x7ffee60fb590 /* 63 vars */) = 0\nwrite(1, "Hello, world!\\n", 14Hello, world!\n)         = 14\nexit(0)                                 = ?\n+++ exited with 0 +++\n')),(0,r.kt)("p",null,"The trace is similar to the previous example, showing the ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," system calls."),(0,r.kt)("p",null,"By creating system call wrappers as C functions, we are now relieved of the burden of writing assembly language code.\nOf course, there has to be an initial implementation of wrapper functions written in assembly language;\nbut, after that, we can use C only."),(0,r.kt)("h4",{id:"practice"},"Practice"),(0,r.kt)("p",null,"Update the files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/syscall-wrapper/")," folder to make ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," system call available as a wrapper.\nMake a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," system call to read data from standard input in a buffer.\nThen call ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," to print data from that buffer."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," system call returns the number of bytes ",(0,r.kt)("inlineCode",{parentName:"p"},"read"),".\nUse that as the argument to the subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," call that prints read data."),(0,r.kt)("p",null,"We can see that it's easier to have wrapper calls and write most of the code in C than in assembly language."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Software-Stack/Arena/quiz/syscall-wrapper"},"Quiz")))}m.isMDXComponent=!0}}]);