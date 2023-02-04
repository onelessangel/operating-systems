"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[92431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={},o=void 0,i={unversionedId:"Lab/Software-Stack/App Investigation/content/basic-syscall",id:"Lab/Software-Stack/App Investigation/content/basic-syscall",title:"basic-syscall",description:"Analyzing the Software Stack",source:"@site/docs/Lab/Software-Stack/App Investigation/content/basic-syscall.md",sourceDirName:"Lab/Software-Stack/App Investigation/content",slug:"/Lab/Software-Stack/App Investigation/content/basic-syscall",permalink:"/operating-systems/Lab/Software-Stack/App Investigation/content/basic-syscall",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Analyzing the Software Stack",id:"analyzing-the-software-stack",level:2},{value:"Basic System Calls",id:"basic-system-calls",level:3},{value:"Practice",id:"practice",level:4}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"analyzing-the-software-stack"},"Analyzing the Software Stack"),(0,l.kt)("p",null,"To get a better grasp on how the software stack works, let's do a bottom-up approach:\nwe build and run different programs, that start of by using the system call API (the lowest layer in the software stack) and progressively use higher layers."),(0,l.kt)("h3",{id:"basic-system-calls"},"Basic System Calls"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"support/basic-syscall/")," folder stores the implementation of a simple program in assembly language for the x86_64 (64 bit) architecture.\nThe program invokes two system calls: ",(0,l.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"exit"),".\nThe program is duplicated in two files using the two x86 assembly language syntaxes: the Intel / NASM syntax (",(0,l.kt)("inlineCode",{parentName:"p"},"hello.asm"),") and the AT&T / GAS syntax (",(0,l.kt)("inlineCode",{parentName:"p"},"hello.s"),")."),(0,l.kt)("p",null,"The implementation follows the ",(0,l.kt)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"x86_64 Linux calling convention"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"system call ID is passed in the ",(0,l.kt)("inlineCode",{parentName:"li"},"rax")," register"),(0,l.kt)("li",{parentName:"ul"},"system call arguments are passed, in order, in the ",(0,l.kt)("inlineCode",{parentName:"li"},"rdi"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rsi"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rdx"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"r10"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"r8"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"r9")," registers")),(0,l.kt)("p",null,"Let's build and run the two programs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/basic-syscall$ ls\nhello.asm  hello.s  Makefile\n\nstudent@os:~/.../lab/support/basic-syscall$ make\nnasm -f elf64 -o hello-nasm.o hello.asm\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  hello-nasm.o   -o hello-nasm\ngcc -c -o hello-gas.o hello.s\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  hello-gas.o   -o hello-gas\n\nstudent@os:~/.../lab/support/basic-syscall$ ls\nhello.asm  hello-gas  hello-gas.o  hello-nasm  hello-nasm.o  hello.s  Makefile\n\nstudent@os:~/.../lab/support/basic-syscall$ ./hello-nasm\nHello, world!\nstudent@os:~/.../lab/support/basic-syscall$ ./hello-gas\nHello, world!\n")),(0,l.kt)("p",null,"The two programs end up printing the ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello, world!")," message at standard output by issuing the ",(0,l.kt)("inlineCode",{parentName:"p"},"write")," system call.\nThen they complete their work by issuing the ",(0,l.kt)("inlineCode",{parentName:"p"},"exit")," system call.\nUse ",(0,l.kt)("inlineCode",{parentName:"p"},"man 2 write")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"man 3 exit")," to get a detailed understanding of the syntax and use of the two system calls.\nYou can also check the online man pages: ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/write.2.html"},(0,l.kt)("inlineCode",{parentName:"a"},"write")),", ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/exit.3.html"},(0,l.kt)("inlineCode",{parentName:"a"},"exit"))),(0,l.kt)("p",null,"We use ",(0,l.kt)("inlineCode",{parentName:"p"},"strace")," to inspect system calls issued by a program:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/basic-syscall$ strace ./hello-nasm\nexecve("./hello-nasm", ["./hello-nasm"], 0x7ffc4e175f00 /* 63 vars */) = 0\nwrite(1, "Hello, world!\\n", 14Hello, world!\n)         = 14\nexit(0)                                 = ?\n+++ exited with 0 +++\n')),(0,l.kt)("p",null,"There are three system calls captured by ",(0,l.kt)("inlineCode",{parentName:"p"},"strace"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"execve"),": this is issued by the shell to create the new process;\nyou'll find out more about ",(0,l.kt)("inlineCode",{parentName:"li"},"execve"),' in the "Compute" chapter'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"write"),": called by the program to print ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello, world!")," to standard output"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exit"),": to exit the program")),(0,l.kt)("p",null,"This is the most basic program for doing system calls.\nGiven that system calls require a specific calling convention, their invocation can only be done in assembly language.\nObviously, this is not portable (specific to a given CPU architecture, x86_64 in our case) and too verbose and difficult to maintain.\nFor portability and maintainability, we require a higher level language, such as C.\nIn order to use C, we need function wrappers around system calls."),(0,l.kt)("h4",{id:"practice"},"Practice"),(0,l.kt)("p",null,"Update the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.asm")," and / or ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.s")," files to print both ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello, world!")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Bye, world!"),".\nThis means adding another ",(0,l.kt)("inlineCode",{parentName:"p"},"write")," system call."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Software-Stack/App%20Investigation/quiz/syscalls"},"Quiz")))}u.isMDXComponent=!0}}]);