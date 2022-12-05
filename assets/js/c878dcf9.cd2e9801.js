"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[15921],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=r,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return t?i.createElement(d,o(o({ref:n},c),{},{components:t})):i.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(87462),r=(t(67294),t(3905));const a={},o=void 0,s={unversionedId:"Lab/Software-Stack/Common Functions/content/common-functions",id:"Lab/Software-Stack/Common Functions/content/common-functions",title:"common-functions",description:"Common Functions",source:"@site/docs/Lab/Software-Stack/Common Functions/content/common-functions.md",sourceDirName:"Lab/Software-Stack/Common Functions/content",slug:"/Lab/Software-Stack/Common Functions/content/common-functions",permalink:"/operating-systems/Lab/Software-Stack/Common Functions/content/common-functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"syscall-wrapper",permalink:"/operating-systems/Lab/Software-Stack/System Call Wrapper/content/syscall-wrapper"},next:{title:"libc",permalink:"/operating-systems/Lab/Software-Stack/Libc/content/libc"}},p={},l=[{value:"Common Functions",id:"common-functions",level:3},{value:"Practice",id:"practice",level:4}],c={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"common-functions"},"Common Functions"),(0,r.kt)("p",null,"By using wrapper calls, we are able to write our programs in C.\nHowever, we still need to implement common functions for string management, working with I/O, working with memory."),(0,r.kt)("p",null,"The simple attempt is to implement these functions (",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"strcpy()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"malloc()"),") once in a C source code file and then reuse them when needed.\nThis saves us time (we don't have to reimplement) and allows us to constantly improve one implementation constantly;\nthere will only be one implementation that we update to increase its safety, efficiency or performance."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"support/common-functions/")," folder stores the implementation of string management functions, in ",(0,r.kt)("inlineCode",{parentName:"p"},"string.c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"string.h")," and of printing functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"printf.c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"printf.h"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"printf")," implementation is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpaland/printf"},"this one"),"."),(0,r.kt)("p",null,"There are two programs: ",(0,r.kt)("inlineCode",{parentName:"p"},"main_string.c")," showcases string management functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"main_printf.c")," showcases the ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," function."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main_string.c")," depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"string.h")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"string.c")," files that implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"strlen()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"strcpy()")," functions.\nWe print messages using the ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," system call wrapper implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"syscall.s")),(0,r.kt)("p",null,"Let's build and run the program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/common-functions$ make main_string\ngcc -fno-stack-protector   -c -o main_string.o main_string.c\ngcc -fno-stack-protector   -c -o string.o string.c\nnasm -f elf64 -o syscall.o syscall.s\ngcc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  main_string.o string.o syscall.o   -o main_string\n\nstudent@os:~/.../lab/support/common-functions$ ./main_string\nDestination string is: warhammer40k\n\nstudent@os:~/.../lab/support/common-functions$ strace ./main_string\nexecve("./main_string", ["./main_string"], 0x7ffd544d0a70 /* 63 vars */) = 0\nwrite(1, "Destination string is: ", 23Destination string is: ) = 23\nwrite(1, "warhammer40k\\n", 13warhammer40k\n)          = 13\nexit(0)                                 = ?\n+++ exited with 0 +++\n')),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," we see that only the ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," system call wrapper triggers a system call.\nThere are no system calls triggered by ",(0,r.kt)("inlineCode",{parentName:"p"},"strlen()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"strcpy()")," as can be seen in their implementation."),(0,r.kt)("p",null,"In addition, ",(0,r.kt)("inlineCode",{parentName:"p"},"main_printf.c")," depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"printf.h")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"printf.c")," files that implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," function.\nThere is a requirement to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"_putchar()")," function;\nwe implement it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main_printf.c")," file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," syscall call wrapper.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function ",(0,r.kt)("inlineCode",{parentName:"p"},"main_printf.c")," file contains all the string and printing calls.\n",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," offers a more powerful printing interface, allowing us to print addresses and integers."),(0,r.kt)("p",null,"Let's build and run the program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/common-functions$ make main_printf\ngcc -fno-stack-protector   -c -o printf.o printf.c\ngcc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  main_printf.o printf.o string.o syscall.o   -o main_printf\n\nstudent@os:~/.../lab/support/common-functions$ ./main_printf\n[before] src is at 00000000004026A0, len is 12, content: "warhammer40k"\n[before] dest is at 0000000000603000, len is 0, content: ""\ncopying src to dest\n[after] src is at 00000000004026A0, len is 12, content: "warhammer40k"\n[after] dest is at 0000000000603000, len is 12, content: "warhammer40k"\n\nstudent@os:~/.../lab/support/common-functions$ strace ./main_printf\nexecve("./main_printf", ["./main_printf"], 0x7ffcaaa1d660 /* 63 vars */) = 0\nwrite(1, "[", 1[)                        = 1\nwrite(1, "b", 1b)                        = 1\nwrite(1, "e", 1e)                        = 1\nwrite(1, "f", 1f)                        = 1\nwrite(1, "o", 1o)                        = 1\nwrite(1, "r", 1r)                        = 1\nwrite(1, "e", 1e)                        = 1\nwrite(1, "]", 1])                        = 1\nwrite(1, " ", 1 )                        = 1\nwrite(1, "s", 1s)                        = 1\nwrite(1, "r", 1r)                        = 1\n[...]\n')),(0,r.kt)("p",null,"We see that we have greater printing flexibility with the ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," function.\nHowever, one downside of the current implementation is that it makes a system call for each character.\nThis is inefficient and could be improved by printing a whole string."),(0,r.kt)("h4",{id:"practice"},"Practice"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/common-functions/")," folder and go through the practice items below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"string.c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"string.h")," to make available the ",(0,r.kt)("inlineCode",{parentName:"p"},"strcat()")," function.\nCall that function in ",(0,r.kt)("inlineCode",{parentName:"p"},"main_string.c")," and print the result.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"main_printf.c")," file to use the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"sprintf()")," to collect information to be printed inside a buffer.\nCall the ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," function to print the information.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," function will no longer be called.\nThis results in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," system call."))),(0,r.kt)("p",null,"Using previously implemented functions allows us to more efficiently write new programs.\nThese functions provide us with extensive features that we use in our programs."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Software-Stack/Common%20Functions/quiz/common-functions"},"Quiz")))}m.isMDXComponent=!0}}]);