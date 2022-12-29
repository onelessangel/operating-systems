"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[40708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,d=h["".concat(c,".").concat(u)]||h[u]||m[u]||o;return a?r.createElement(d,s(s({ref:t},l),{},{components:a})):r.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"Lab/Compute/Processes-threads-apache2/content/benchmarks",id:"Lab/Compute/Processes-threads-apache2/content/benchmarks",title:"benchmarks",description:"Benchmarks",source:"@site/docs/Lab/Compute/Processes-threads-apache2/content/benchmarks.md",sourceDirName:"Lab/Compute/Processes-threads-apache2/content",slug:"/Lab/Compute/Processes-threads-apache2/content/benchmarks",permalink:"/operating-systems/Lab/Compute/Processes-threads-apache2/content/benchmarks",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"Benchmarks",id:"benchmarks",level:2},{value:"The Role of the Operating System",id:"the-role-of-the-operating-system",level:3}],l={toc:p};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"benchmarks"},"Benchmarks"),(0,n.kt)("p",null,"The main criterion we use to rank CPUs is their ",(0,n.kt)("em",{parentName:"p"},"computation power"),", i.e. their ability to crunch numbers and do math.\nNumerous benchmarks exist out there and they are publicly displayed on sites such as ",(0,n.kt)("a",{parentName:"p",href:"https://www.cpubenchmark.net/"},"CPUBenchmark"),"."),(0,n.kt)("p",null,"For example, a benchmark can measure the performance of the computer's CPU in a variety of scenarios:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"its ability to perform integer operations"),(0,n.kt)("li",{parentName:"ul"},"its speed in floating point arithmetic"),(0,n.kt)("li",{parentName:"ul"},"data encryption and compression"),(0,n.kt)("li",{parentName:"ul"},"sorting algorithms and others")),(0,n.kt)("p",null,"You can take a look at what exactly is measured using ",(0,n.kt)("a",{parentName:"p",href:"https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+Threadripper+PRO+5995WX"},"this link"),".\nIt displays the scores obtained by a high-end CPU.\nApart from the tests above, other benchmarks might focus on different performance metrics such as branch prediction or prefetching."),(0,n.kt)("p",null,"Other approaches are less artificial, measuring performance on real-world applications such as compile times and performance in the latest (and most resource-demanding) video games.\nThe latter metric revolves around how many average FPS (frames per second) a given CPU is able to crank out in a specific video game.\n",(0,n.kt)("a",{parentName:"p",href:"https://www.gamersnexus.net/guides/3577-cpu-test-methodology-unveil-for-2020-compile-gaming-more"},"This article")," goes into more detail regarding the methodology of running CPU benchmarks on real-world applications."),(0,n.kt)("p",null,"Most benchmarks, unfortunately, are not open source, especially the more popular ones, such as ",(0,n.kt)("a",{parentName:"p",href:"https://browser.geekbench.com/processor-benchmarks"},"Geekbench 5"),".\nDespite this shortcoming, benchmarks are widely used to compare the performance of various computer ",(0,n.kt)("strong",{parentName:"p"},"hardware"),", CPUs included."),(0,n.kt)("h3",{id:"the-role-of-the-operating-system"},"The Role of the Operating System"),(0,n.kt)("p",null,'As you\'ve seen so far, the CPU provides the "muscle" required for fast computation, i.e. the highly optimised hardware and multiple ALUs, FPUs\nand cores necessary to perform those computations.\nHowever, it is the ',(0,n.kt)("strong",{parentName:"p"},"operating system"),' that provides the "brains" for this computation.\nSpecifically, modern CPUs have the capacity to run multiple tasks in parallel.\nBut they do not provide a means to decide which task to run at each moment.\nThe OS comes as an ',(0,n.kt)("em",{parentName:"p"},"orchestrator")," to ",(0,n.kt)("strong",{parentName:"p"},"schedule")," the way these tasks (that we will later call threads) are allowed to run and use the CPU's resources.\nThis way, the OS tells the CPU what code to run on each CPU core so that it reaches a good balance between high throughput (running many instructions) and fair access to CPU cores."),(0,n.kt)("p",null,"It is cumbersome for a user-level application to interact directly with the CPU.\nThe developer would have to write hardware-specific code which is not scalable and is difficult to maintain.\nIn addition, doing so would leave it up to the developer to isolate their application from the others that are present on the system.\nThis leaves applications vulnerable to countless bugs and exploits."),(0,n.kt)("p",null,"To guard apps from these pitfalls, the OS comes and mediates interactions between regular programs and the CPU by providing a set of ",(0,n.kt)("strong",{parentName:"p"},"abstractions"),".\nThese abstractions offer a safe, uniform and also isolated way to leverage the CPU's resources, i.e. its cores.\nThere are 2 main abstractions: ",(0,n.kt)("strong",{parentName:"p"},"processes")," and ",(0,n.kt)("strong",{parentName:"p"},"threads"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Interaction between applications, OS and CPU",src:a(46506).Z,width:"772",height:"772"})),(0,n.kt)("p",null,"As we can see from the image above, an application can spawn one or more processes.\nEach of these is handled and maintained by the OS.\nSimilarly, each process can spawn however many threads, which are also managed by the OS.\nThe OS decides when and on what CPU core to make each thread run.\nThis is in line with the general interaction between an application and the hardware: it is always mediated by the OS."))}h.isMDXComponent=!0},46506:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/app-os-cpu-interaction-ca7fbdbb7da380e0992c95467ef267ce.svg"}}]);