"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[93038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="File Handling",l={unversionedId:"Lab/I/O/Redirections/content/file-handlers",id:"Lab/I/O/Redirections/content/file-handlers",title:"File Handling",description:"You've most likely had to deal with files in the past.",source:"@site/docs/Lab/I/O/Redirections/content/file-handlers.md",sourceDirName:"Lab/I/O/Redirections/content",slug:"/Lab/I/O/Redirections/content/file-handlers",permalink:"/operating-systems/Lab/I/O/Redirections/content/file-handlers",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Reaching the File",id:"reaching-the-file",level:2},{value:"Limitations of High-level File Handlers",id:"limitations-of-high-level-file-handlers",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-handling"},"File Handling"),(0,r.kt)("p",null,"You've most likely had to deal with files in the past.\nGo to ",(0,r.kt)("inlineCode",{parentName:"p"},"support/simple-file-operations")," and run a most basic command:\n",(0,r.kt)("inlineCode",{parentName:"p"},"cat file.txt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/simple-file-operations$ cat file.txt\nOS Rullz!\n")),(0,r.kt)("p",null,"But how does ",(0,r.kt)("inlineCode",{parentName:"p"},"cat"),' actually "reach" to the file, then read its contents, then print them to standard output?\nThis is part of what we\'re going to learn.'),(0,r.kt)("h2",{id:"reaching-the-file"},"Reaching the File"),(0,r.kt)("p",null,"To manipulate the file (read its contents, modify them, change its size etc.), each process must first get a ",(0,r.kt)("strong",{parentName:"p"},"handler")," to this file.\nThink of this handler as an object by which the process can identify and refer to the file."),(0,r.kt)("p",null,"Now take a look at the code examples in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/simple-file-operations"),".\nEach of them reads the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"file.txt"),", modifies them and then reads the previously modified file again.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," to compile the C code and ",(0,r.kt)("inlineCode",{parentName:"p"},"make java-file-operations")," to compile the Java code."),(0,r.kt)("p",null,"Now run the programs repeatedly in whatever order you wish:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/simple-file-operations$ python3 file_operations.py\nFile contents are: OS Rullz!\nWrote new data to file\nFile contents are: Python was here!\n\nstudent@os:~/.../lab/support/simple-file-operations$ ./file_operations  # from the C code\nFile contents are: Python was here!\nWrote new data to file\nFile contents are: C was here!\n\nstudent@os:~/.../lab/support/simple-file-operations$ java FileOperations\nFile contents are: Python was here!\nWrote new data to file\nFile contents are: Java was here!\n")),(0,r.kt)("p",null,"Note that each piece of code creates a variable which is then used as a handler."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Redirections/quiz/file-handler-c"},"Quiz")),(0,r.kt)("h3",{id:"limitations-of-high-level-file-handlers"},"Limitations of High-level File Handlers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Everything in Linux is a file."),"\nThis statement says that the Linux OS treats every entry in a file system (regular file, directory, block device, char device, link, UNIX socket) as a file.\nThis is very convenient for creating a unified interface that deals with all these files.\nWe would like our file handlers to also be able to handle all types of files."),(0,r.kt)("p",null,"Let's try this.\nNavigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"support/simple-file-operations/directory_operations.c"),".\nRead the code.\nIt does something very simple:\nit attempts to open the ",(0,r.kt)("inlineCode",{parentName:"p"},"dir")," directory the same way ",(0,r.kt)("inlineCode",{parentName:"p"},"file_operations.c")," tried to open ",(0,r.kt)("inlineCode",{parentName:"p"},"file.txt"),".\nCompile and run the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/simple-file-operations$ ./directory_operations\n18:18:11 FATAL directory_operations.c:14: fopen: Is a directory\n")),(0,r.kt)("p",null,"The error message is crystal clear: we cannot use ",(0,r.kt)("inlineCode",{parentName:"p"},"fopen()")," on directories.\nSo the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," structure is unsuited for directories.\nTherefore, this handler is not generic enough for a regular Linux filesystem."),(0,r.kt)("p",null,"To get to the directory, we need to use a lower-level function.\nLet's take a look at the syscall used by ",(0,r.kt)("inlineCode",{parentName:"p"},"fopen()"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Redirections/quiz/fopen-syscall"},"Quiz")),(0,r.kt)("p",null,"We will use a simpler syscall, called ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/open.2.html"},(0,r.kt)("inlineCode",{parentName:"a"},"open()")),".\nIn fact, ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," is a wrapper over ",(0,r.kt)("inlineCode",{parentName:"p"},"openat()"),".\nNavigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"support/file-descriptors/directory_open.c"),".\nInspect, compile and run the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/file-descriptors$ ./open_directory\nDirectory file descriptor is: 3\n")),(0,r.kt)("p",null,"We can now see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," syscall is capable of also handling directories, so its closer to what we want.\nNote that it is rather uncommon to use ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," for directories.\nMost of the time, ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/opendir.3.html"},(0,r.kt)("inlineCode",{parentName:"a"},"opendir()"))," is used instead.\nBut what does it return?\nFind out in ",(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Redirections/content/file-descriptors"},'the "File Descriptors" section'),"."))}u.isMDXComponent=!0}}]);