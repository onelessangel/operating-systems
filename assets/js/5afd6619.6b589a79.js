"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[12442],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=a,g=u["".concat(i,".").concat(h)]||u[h]||m[h]||l;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},83605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const l={},o="High-Level Languages",s={unversionedId:"Lab/Software Stack/Overview/content/high-level-lang",id:"Lab/Software Stack/Overview/content/high-level-lang",title:"High-Level Languages",description:"Using the standard C library (libc) frees the programmer from the cumbersome steps of invoking system calls and reimplementing common features.",source:"@site/docs/Lab/Software Stack/Overview/content/high-level-lang.md",sourceDirName:"Lab/Software Stack/Overview/content",slug:"/Lab/Software Stack/Overview/content/high-level-lang",permalink:"/operating-systems/Lab/Software Stack/Overview/content/high-level-lang",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[{value:"Practice",id:"practice",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"high-level-languages"},"High-Level Languages"),(0,a.kt)("p",null,"Using the standard C library (libc) frees the programmer from the cumbersome steps of invoking system calls and reimplementing common features.\nStill, for improved development time and safety, other programming languages can be used, such as Rust, Python, JavaScript.\nMost (if not all) of these high-level programming languages still make use of the standard C library.\nSuch that a call to a function in Python would end-up making a call to a function in the standard C library."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"support/high-level-lang/"),' folder stores the implementation of a simple "Hello, World!"-printing program in Python.\nWe simply invoke the ',(0,a.kt)("inlineCode",{parentName:"p"},"python")," interpreter to run the program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/high-level-lang$ python hello.py\nHello, world!\n")),(0,a.kt)("p",null,"We count the number of functions called from the standard C library and the number of system calls:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/high-level-lang$ ltrace -l 'libc*' python hello.py 2> libc.out\nHello, world!\n\nstudent@os:~/.../lab/support/high-level-lang$ wc -l libc.out\n50469 out\n\nstudent@os:~/.../lab/support/high-level-lang$ strace python hello.py 2> syscall.out\nHello, world!\n\nstudent@os:~/.../lab/support/high-level-lang$ wc -l syscall.out\n948 syscall.out\n")),(0,a.kt)("p",null,"The dynamic standard C library (",(0,a.kt)("inlineCode",{parentName:"p"},"libc.so.6"),") is a dependency of the Python interpreter (",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin/python3"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/high-level-lang$ ldd /usr/bin/python3\n[...]\n        libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007fa6fd6d0000)\n[...]\n")),(0,a.kt)("p",null,"We can see the complexity of invoking the Python interpreter, resulting in more the 50,000 of library calls being made.\nThis means added overhead versus a simple C function.\nHowever, this also means faster development in the Python programming language.\nEach new layer in the software stack simplifies development but adds overhead."),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"perf"),' to compare the running time between the Python and a C "Hello, World!"-printing programs:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/high-level-lang$ sudo perf stat ../static-dynamic/hello\nHello, World!\n\n Performance counter stats for '../static-dynamic/hello':\n\n              0.46 msec task-clock                #    0.559 CPUs utilized\n                 0      context-switches          #    0.000 K/sec\n                 0      cpu-migrations            #    0.000 K/sec\n                52      page-faults               #    0.114 M/sec\n           859,341      cycles                    #    1.882 GHz\n           713,395      instructions              #    0.83  insn per cycle\n           141,710      branches                  #  310.393 M/sec\n             6,208      branch-misses             #    4.38% of all branches\n\n       0.000816974 seconds time elapsed\n\n       0.000872000 seconds user\n       0.000000000 seconds sys\n\nstudent@os:~/.../lab/support/high-level-lang$ sudo perf stat python hello.py\nHello, world!\n\n Performance counter stats for 'python hello.py':\n\n             69.39 msec task-clock                #    0.992 CPUs utilized\n                 2      context-switches          #    0.029 K/sec\n                 0      cpu-migrations            #    0.000 K/sec\n             1,115      page-faults               #    0.016 M/sec\n        74,405,125      cycles                    #    1.072 GHz\n        84,957,056      instructions              #    1.14  insn per cycle\n        18,574,724      branches                  #  267.689 M/sec\n           759,104      branch-misses             #    4.09% of all branches\n\n       0.069981351 seconds time elapsed\n\n       0.054376000 seconds user\n       0.015536000 seconds sys\n")),(0,a.kt)("p",null,"We can see that on all metrics, the running of the Python program is less efficient than the running of the C program.\nThe Python code takes ",(0,a.kt)("inlineCode",{parentName:"p"},"69")," milliseconds, whereas the C code runs in less than ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," millisecond."),(0,a.kt)("p",null,"When deciding what programming language and what libraries and software components to use, you have to balance requirements for fast development and increased safety (inherent to higher-level programming languages) with requirements for speed or efficiency (common to lower-level programming languages such as C).\nNewer modern programming languages such as Go, Rust, D aim to add the benefits of high-level programming languages and keep efficiency close to the C programming language.\nGenerally, additional software layers (libraries, language environments, interpreters) simplify development but decrease speed and efficiency."),(0,a.kt)("h2",{id:"practice"},"Practice"),(0,a.kt)("p",null,"Enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"support/high-level-lang/")," folder and go through the practice items below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," executable from the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.go"),' file (a Go "Hello, World!"-printing program).\nUse ',(0,a.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"strace")," to compute the number of library calls and system calls.\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"perf")," to measure the running time."),(0,a.kt)("p",{parentName:"li"},'Compare the values with those from the "Hello, World!"-printing programs in C and Python.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Create a "Hello, World!"-printing program in a programming language of your choice (other than C, Python and Go).\nFind the values above (library calls, system calls and running time).'))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Software%20Stack/Overview/quiz/high-level-lang"},"Quiz")))}m.isMDXComponent=!0}}]);