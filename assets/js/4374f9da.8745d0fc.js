"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[10178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),h=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=h(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=h(r),m=n,d=c["".concat(p,".").concat(m)]||c[m]||u[m]||s;return r?a.createElement(d,o(o({ref:t},l),{},{components:r})):a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var h=2;h<s;h++)o[h]=r[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=r(87462),n=(r(67294),r(3905));const s={},o=void 0,i={unversionedId:"Lab/Compute/Overview/content/threads",id:"Lab/Compute/Overview/content/threads",title:"threads",description:"Threads",source:"@site/docs/Lab/Compute/Overview/content/threads.md",sourceDirName:"Lab/Compute/Overview/content",slug:"/Lab/Compute/Overview/content/threads",permalink:"/operating-systems/Lab/Compute/Overview/content/threads",draft:!1,tags:[],version:"current",frontMatter:{}},p={},h=[{value:"Threads",id:"threads",level:2},{value:"Spreading the Work Among Other Threads",id:"spreading-the-work-among-other-threads",level:3},{value:"Practice: Wait for Me Once More",id:"practice-wait-for-me-once-more",level:4},{value:"Threads vs Processes",id:"threads-vs-processes",level:3},{value:"Safety",id:"safety",level:4},{value:"Practice: Wait for It",id:"practice-wait-for-it",level:4},{value:"Memory Corruption",id:"memory-corruption",level:4}],l={toc:h};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"threads"},"Threads"),(0,n.kt)("h3",{id:"spreading-the-work-among-other-threads"},"Spreading the Work Among Other Threads"),(0,n.kt)("p",null,"Compile the code in ",(0,n.kt)("inlineCode",{parentName:"p"},"support/sum-array/d/sum_array_threads.d")," and run it using 1, 2, 4 and 8 threads as you did before.\nEach thread runs the ",(0,n.kt)("inlineCode",{parentName:"p"},"calculateArrayPartSum")," function and then finishes.\nRunning times should be ",(0,n.kt)("em",{parentName:"p"},"slightly")," smaller than the implementation using processes.\nThis slight time difference is caused by process creation actions, which are costlier than thread creation actions.\nBecause a process needs a separate virtual address space (VAS) and needs to duplicate some internal structures such as the file descriptor table and page table, it takes the operating system more time to create it than to create a thread.\nOn the other hand, threads belonging to the same process share the same VAS and, implicitly, the same OS-internal structures.\nTherefore, they are more lightweight than processes."),(0,n.kt)("h4",{id:"practice-wait-for-me-once-more"},"Practice: Wait for Me Once More"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"support/wait-for-me/wait_for_me_threads.d"),".\nSpawn a thread that executes the ",(0,n.kt)("inlineCode",{parentName:"p"},"negateArray()")," function.\nFor now, do not wait for it to finish;\nsimply start it."),(0,n.kt)("p",null,"Compile the code and run the resulting executable several times.\nSee that the negative numbers appear from different indices.\nThis is precisely the nondeterminism that we talked about ",(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Overview/content/processes#practice-wait-for-me"},"in the previous section"),"."),(0,n.kt)("p",null,"Now wait for that thread to finish and see that all the printed numbers are consistently negative."),(0,n.kt)("p",null,"As you can see, waiting is a very coarse form of synchronization.\nIf we only use waiting, we can expect no speedup as a result of parallelism, because one thread must finish completely before another can continue.\nWe will discuss more fine-grained synchronization mechanisms ",(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Overview/content/synchronization"},"later in this lab"),"."),(0,n.kt)("p",null,"Also, at this point, you might be wondering why this exercise is written in D, while ",(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Overview/content/processes#practice-wait-for-me"},"the same exercise, but with processes")," was written in Python.\nThere is a very good reason for this and has to do with how threads are synchronized by default in Python.\nYou can find out what this is about ",(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Overview/content/arena#the-gil"},"in the Arena section"),", after you have completed the ",(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Overview/content/synchronization"},"Synchronization section"),"."),(0,n.kt)("h3",{id:"threads-vs-processes"},"Threads vs Processes"),(0,n.kt)("p",null,"So why use the implementation that spawns more processes if it's slower than the one using threads?"),(0,n.kt)("h4",{id:"safety"},"Safety"),(0,n.kt)("p",null,"Compile and run the two programs in ",(0,n.kt)("inlineCode",{parentName:"p"},"support/sum-array-bugs/seg-fault/"),", first with 2 processes and threads and then with 4.\nThey do the same thing as before: compute the sum the elements in an array, but with a twist: each of them contains a bug causing a seg fault.\nNotice that ",(0,n.kt)("inlineCode",{parentName:"p"},"sum_array_threads"),' doesn\'t print anything with 4 threads, but merely a "Segmentation fault" message.\nOn the other hand, ',(0,n.kt)("inlineCode",{parentName:"p"},"sum_array_processes")," prints a sum and a running time, albeit different from the sums we've seen so far."),(0,n.kt)("p",null,"The reason is that signals such as ",(0,n.kt)("inlineCode",{parentName:"p"},"SIGSEGV"),", which is used when a segmentation fault happens affect the entire process that handles them.\nTherefore, when we split our workload between several threads and one of them causes an error such as a seg fault, that error is going to terminate the entire process.\nThe same thing happens when we use processes instead of threads: one process causes an error, which gets it killed, but the other processes continue their work unhindered.\nThis is why we end up with a lower sum in the end: because one process died too early and didn't manage to write the partial sum it had computed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"results")," array."),(0,n.kt)("h4",{id:"practice-wait-for-it"},"Practice: Wait for It"),(0,n.kt)("p",null,"The process that spawns all the others and subsequently calls ",(0,n.kt)("inlineCode",{parentName:"p"},"waitpid")," to wait for them to finish can also get their return codes.\nUpdate the code in ",(0,n.kt)("inlineCode",{parentName:"p"},"support/sum-array-bugs/seg-fault/sum_array_processes.d")," and modify the call to ",(0,n.kt)("inlineCode",{parentName:"p"},"waitpid")," to obtain and investigate this return code.\nDisplay an appropriate message if one of the child processes returns an error."),(0,n.kt)("p",null,"Remember to use the appropriate ",(0,n.kt)("a",{parentName:"p",href:"https://linux.die.net/man/2/waitpid"},"macros")," for handling the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," variable that is modified by ",(0,n.kt)("inlineCode",{parentName:"p"},"waitpid"),", as it is a bitfield.\nWhen a process runs into a system error, it receives a signal.\nA signal is a means to interrupt the normal execution of a program from the outside.\nIt is associated with a number.\nUse ",(0,n.kt)("inlineCode",{parentName:"p"},"kill -l")," to find the full list of signals."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Overview/quiz/seg-fault-exit-code"},"Quiz")),(0,n.kt)("p",null,"So up to this point we've seen that one advantage of processes is that they offer better safety than threads.\nBecause they use separate virtual address spaces, sibling processes are better isolated than threads.\nThus, an application that uses processes can be more robust to errors than if it were using threads."),(0,n.kt)("h4",{id:"memory-corruption"},"Memory Corruption"),(0,n.kt)("p",null,"Because they share the same address space,  threads run the risk of corrupting each other's data.\nTake a look at the code in ",(0,n.kt)("inlineCode",{parentName:"p"},"support/sum-array-bugs/memory-corruption/python/"),".\nThe two programs only differ in how they spread their workload.\nOne uses threads while the other uses processes."),(0,n.kt)("p",null,"Run both programs with and without memory corruption.\nPass any value as a third argument to trigger the corruption."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../sum-array-bugs/memory-corruption/python$ python3 memory_corruption_processes.py <number_of_processes>  # no memory corruption\n[...]\n\nstudent@os:~/.../sum-array-bugs/memory-corruption/python$ python3 memory_corruption_processes.py <number_of_processes> 1  # do memory corruption\n[...]\n")),(0,n.kt)("p",null,"The one using threads will most likely print a negative sum, while the other displays the correct sum.\nThis happens because all threads refer the same memory for the array ",(0,n.kt)("inlineCode",{parentName:"p"},"arr"),".\nWhat happens to the processes is a bit more complicated."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Overview/content/copy-on-write"},"Later in this lab")," we will see that initially, the page tables of all processes point to the same physical frames or ",(0,n.kt)("inlineCode",{parentName:"p"},"arr"),".\nWhen the malicious process tries to corrupt this array by ",(0,n.kt)("strong",{parentName:"p"},"writing data to it"),", the OS duplicates the original frames of ",(0,n.kt)("inlineCode",{parentName:"p"},"arr")," so that the malicious process writes the corrupted values to these new frames, while leaving the original ones untouched.\nThis mechanism is called ",(0,n.kt)("strong",{parentName:"p"},"Copy-on-Write")," and is an OS optimisation so that memory is shared between the parent and the child process, until one of them attempts to write to it.\nAt this point, this process receives its own separate copies of the previously shared frames."),(0,n.kt)("p",null,"Note that in order for the processes to share the ",(0,n.kt)("inlineCode",{parentName:"p"},"sums")," dictionary, it is not created as a regular dictionary, but using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager")," module.\nThis module provides some special data structures that are allocated in ",(0,n.kt)("strong",{parentName:"p"},"shared memory")," so that all processes can access them.\nYou can learn more about shared memory and its various implementations ",(0,n.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Overview/content/arena#shared-memory"},"in the Arena section"),"."))}c.isMDXComponent=!0}}]);