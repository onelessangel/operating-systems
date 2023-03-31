"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[55610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="Memory Security",s={unversionedId:"Lab/Data/Investigate Memory/content/memory-security",id:"Lab/Data/Investigate Memory/content/memory-security",title:"Memory Security",description:"Memory security is one of the most important aspects in today's computer systems.",source:"@site/docs/Lab/Data/Investigate Memory/content/memory-security.md",sourceDirName:"Lab/Data/Investigate Memory/content",slug:"/Lab/Data/Investigate Memory/content/memory-security",permalink:"/operating-systems/Lab/Data/Investigate Memory/content/memory-security",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Wild Pointer Arithmetic Info Leak",id:"wild-pointer-arithmetic-info-leak",level:2},{value:"Practice",id:"practice",level:3},{value:"Buffer Overflow Info Leak",id:"buffer-overflow-info-leak",level:2},{value:"Practice",id:"practice-1",level:3},{value:"Buffer Overflow Overwrite",id:"buffer-overflow-overwrite",level:2},{value:"Practice",id:"practice-2",level:3},{value:"ASLR",id:"aslr",level:2},{value:"Practice",id:"practice-3",level:3},{value:"Stack Protector",id:"stack-protector",level:2},{value:"Practice",id:"practice-4",level:3},{value:"Bypassing the Stack Protector",id:"bypassing-the-stack-protector",level:2},{value:"Practice",id:"practice-5",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"memory-security"},"Memory Security"),(0,r.kt)("p",null,"Memory security is one of the most important aspects in today's computer systems.\nIts main objectives are to avoid the development of vulnerable code and prevent attackers from exploiting existing memory vulnerabilities.\nMemory protection techniques are implemented at all levels of memory abstraction: hardware, operating system and programming language.\nIn addition, third-party software tools may be used to statically and dynamically examine a program to identify vulnerabilities when working with memory."),(0,r.kt)("p",null,"In this section, we will focus on the main memory vulnerabilities and how to exploit them.\nWe will use the C programming language for presentation purposes, however, these examples may be reproduced in any language that implements arrays as pointers without bounds and allows the liberal use of pointers."),(0,r.kt)("h2",{id:"wild-pointer-arithmetic-info-leak"},"Wild Pointer Arithmetic Info Leak"),(0,r.kt)("p",null,"In C, once a pointer has been initialized with a valid address it can potentially access any location of the process address space.\nThis is problematic for situations where the binary contains sensitive information.\nTake for example a server that authenticates users: if the password is stored in some buffer, then if a pointer is wrongfully used, it can end up leaking the password."),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/memory-security/")," directory.\nOpen and analyze the ",(0,r.kt)("inlineCode",{parentName:"p"},"buff_leak.c")," file."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Data/Investigate%20Memory/quiz/memory-regions-vars"},"Answer this quiz")),(0,r.kt)("h3",{id:"practice"},"Practice"),(0,r.kt)("p",null,"The pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," points to the stack, however, we can modify any variable that is declared in the program through ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),".\nAll we need to know is the offset of the other memory locations that we wish to access.\nRun the program and try to input the correct offsets to modify variables from different regions of our program.\nOnce a correct offset is given as input, the program will output a validation message."),(0,r.kt)("p",null,"Note that adding or subtracting user provided values to pointers enables an attacker to observe a program's entire memory!"),(0,r.kt)("h2",{id:"buffer-overflow-info-leak"},"Buffer Overflow Info Leak"),(0,r.kt)("p",null,"Since arrays decay to pointers in C, the same effect may be obtained by using them."),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/memory-security/")," directory.\nOpen and analyze the ",(0,r.kt)("inlineCode",{parentName:"p"},"array_leak.c")," file."),(0,r.kt)("p",null,"Compile and run the program.\nCan you extract any information from the output?\nCan you identify the return address of the main function?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"objdump -d -M intel array_leak")," to check the stack layout.\n",(0,r.kt)("strong",{parentName:"p"},"Note:")," Depending on the environment the layout may differ."),(0,r.kt)("p",null,"Next, open and analyze the ",(0,r.kt)("inlineCode",{parentName:"p"},"string_leak.c")," file.\nCompile and run the program.\nTo better understand the output, use ",(0,r.kt)("inlineCode",{parentName:"p"},"xxd")," to interpret the output as hexadecimal bytes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-security$ ./string_leak | xxd\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"73")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"6f")," are the ascii values of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"o")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Data/Investigate%20Memory/quiz/string-buff-over"},"Answer this quiz")),(0,r.kt)("h3",{id:"practice-1"},"Practice"),(0,r.kt)("p",null,"In file ",(0,r.kt)("inlineCode",{parentName:"p"},"string_leak.c")," replace the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"memcpy")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"strcpy"),".\nDo not modify anything else (including the size of the buffer).\nAs the name suggests, ",(0,r.kt)("inlineCode",{parentName:"p"},"strcpy()")," is specialized for string copies, therefore we don need to specify how much we want to copy.\nWhat is the result?\nIs the result correct?\nExplain the result."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Data/Investigate%20Memory/quiz/string-strcpy"},"Answer this quiz")),(0,r.kt)("h2",{id:"buffer-overflow-overwrite"},"Buffer Overflow Overwrite"),(0,r.kt)("p",null,"Up until this point we have seen how we can exploit a buffer to leak information.\nHowever, this vulnerability may be used most of the time to overwrite data."),(0,r.kt)("p",null,"Take for example the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/memory-security/bo_write.c"),".\nCompile and run the code.\nWhat happens?\nWhy?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Data/Investigate%20Memory/quiz/stack-layout"},"Answer this quiz")),(0,r.kt)("h3",{id:"practice-2"},"Practice"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/memory-security/bo_write_practice.c")," file.\nAnalyze the code, then compile it and run it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Try to find an input that alters the control flow of the program so that "Comm-link online" is printed.\nYou are not allowed to modify the source file.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Try to find an input that alters the control flow of the program so that "Channel open." is printed.\nYou are not allowed to modify the source file.'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Addresses are 8 bytes long on 64 bit machines."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Can you think of a different input that results in printing "Comm-link online"?')),(0,r.kt)("h2",{id:"aslr"},"ASLR"),(0,r.kt)("p",null,"Address Space Layout Randomization (ASLR) is a protection technique employed by operating systems to make it harder for attackers to identify code locations to jump to.\nEssentially, every program section (including shared library code) is mapped at a random virtual address every time the program is run.\nThat way, it is harder for the attacker to exploit a buffer overflow: the address of a potential code target is different with each run."),(0,r.kt)("p",null,"To enable randomization, there are 2 steps that need to be taken:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable ASLR on the operating system.\nThis enables the operating system to map library code at different virtual addresses in a program.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compile our code as Position Independent Code (PIC).\nThis instructs the compiler to generate code such that it does not use absolute addresses when calling functions or accessing variables.\nAs a consequence, the code may be loaded at any given address in memory."))),(0,r.kt)("p",null,"On most Linux systems, ASLR is enabled by default.\nModern compilers generate position independent code by default."),(0,r.kt)("h3",{id:"practice-3"},"Practice"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile.aslr")," file to compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/memory-security/aslr.c")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-security$ make -f Makefile.aslr\n")),(0,r.kt)("p",null,"By default, ASLR and PIC are enabled.\nObserve the results.\nNext, we disable ASLR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-security$ echo 0 | sudo tee /proc/sys/kernel/randomize_va_space\n")),(0,r.kt)("p",null,"Even though the code is compiled with PIC, both library and user functions have the same address between runs.\nRe-enable ASLR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-security$ echo 2 | sudo tee /proc/sys/kernel/randomize_va_space\n")),(0,r.kt)("p",null,"Disable PIC by uncommenting the ",(0,r.kt)("inlineCode",{parentName:"p"},"-fno-PIC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LDFLAGS")," lines."),(0,r.kt)("p",null,"We observe that for randomization to work, we need to instruct the OS to randomize the program sections and the compiler to generate code that is position independent."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Data/Investigate%20Memory/quiz/memory-aslr"},"Answer this quiz")),(0,r.kt)("h2",{id:"stack-protector"},"Stack Protector"),(0,r.kt)("p",null,"As observed in the previous quiz, ASLR prevents an attacker (most of the times) from discovering a reliable address where to jump to, however, it does not prevent the occurrence of a buffer overflow.\nAn effective strategy to protect against buffer overflow is represented by the stack protector (or stack canary).\nBetween the end of the buffer and the return address (below the saved base pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"rbp"),"), a random value is placed on the stack.\nBefore the function returns, the value is checked: if the initial value was modified, then an exception is issued and the program is aborted."),(0,r.kt)("p",null,"Stack canaries are enabled by default, however, for learning purposes we have disabled it by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"-fno-stack-protector")," to the compiler."),(0,r.kt)("h3",{id:"practice-4"},"Practice"),(0,r.kt)("p",null,"Comment the ",(0,r.kt)("inlineCode",{parentName:"p"},"-fno-stack-protector")," switch from the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/memory-security/Makefile"),", recompile and run the ",(0,r.kt)("inlineCode",{parentName:"p"},"bo_practice_write")," executable.\nExamine the binary with ",(0,r.kt)("inlineCode",{parentName:"p"},"objdump")," and identify the instructions that set and test the canary.\nObserve what happens when a buffer overflow occurs."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Data/Investigate%20Memory/quiz/memory-stack-protector"},"Answer this quiz")),(0,r.kt)("h2",{id:"bypassing-the-stack-protector"},"Bypassing the Stack Protector"),(0,r.kt)("p",null,"The stack protector is generally placed immediately after the old ",(0,r.kt)("inlineCode",{parentName:"p"},"rbp"),".\nWith this information we can craft various exploits to bypass it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Leak the canary and do not modify it.\nReading the canary, as long as we do not modify it is not going to cause any disturbances.\nIf we have the canary, we can just include it in our payload and hapily overwrite the return address.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If we have access to a pointer that we can modify appropriately, we can just jump over the canary and directly modify the return address.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In case we have multiple buffers defined in the same stack frame, we can simply overwrite data in a buffer that is placed above the buffer we are exploiting without the stack protector intervention."))),(0,r.kt)("h3",{id:"practice-5"},"Practice"),(0,r.kt)("p",null,"Inspect the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/memory-security/stack_protector.c")," source file.\nCompile the program and examine the object code.\nTry to identify the canary value.\nUsing the ",(0,r.kt)("inlineCode",{parentName:"p"},"addr")," variable, write 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf")," instructions: one that overwrites the canary with the corect value and one that overwrites the return address with the address of function ",(0,r.kt)("inlineCode",{parentName:"p"},"pawned"),".\nIn case of a successful exploit a video will be offered as reward."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Data/Investigate%20Memory/quiz/bypass-canary"},"Answer this quiz")))}m.isMDXComponent=!0}}]);