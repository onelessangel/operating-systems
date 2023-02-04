"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[69845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,c={unversionedId:"Lab/Data/Memory Security/content/memory-support",id:"Lab/Data/Memory Security/content/memory-support",title:"memory-support",description:"Memory Support",source:"@site/docs/Lab/Data/Memory Security/content/memory-support.md",sourceDirName:"Lab/Data/Memory Security/content",slug:"/Lab/Data/Memory Security/content/memory-support",permalink:"/operating-systems/Lab/Data/Memory Security/content/memory-support",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Memory Support",id:"memory-support",level:2},{value:"Reference Counting",id:"reference-counting",level:3},{value:"Operator overloading",id:"operator-overloading",level:3},{value:"Practice",id:"practice",level:4}],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"memory-support"},"Memory Support"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manual memory management")," (MMM) is one of the most difficult tasks.\nEven experienced programmers make mistakes when tackling such a complicated endeavor.\nAs a consequence, the programming world has been migrating towards languages that offer automatic memory management (AMM).\nAMM programming languages typically offer a garbage collector that tracks down the usage of objects and frees memory once no references exist to a given object.\nAs a consequence garbage collected programming languages are easier to use and safer.\nHowever, this comes with a cost: the garbage collector, in most cases, requires a significant amount of resources to run.\nTherefore, for performance-critical systems, MMM is still the preferred solution."),(0,o.kt)("p",null,"A middle-ground between programming languages that have AMM (Java, Python, Swift, D) and those that do not (C, C++) is represented by those languages that do not have built-in AMM but offer the possibility to implement it as a library solution (C++, D).\nConcretely, these languages offer lightweight library solutions to optimally track down the lifetime of an object.\nThis is done by using reference counted objects."),(0,o.kt)("h3",{id:"reference-counting"},"Reference Counting"),(0,o.kt)("p",null,"Reference counting is a technique of tracking the lifetime of an object by counting how many references to an object exist.\nAs long as at least one reference exists, the object cannot be destroyed.\nOnce no reference to a given object exists, it can be safely destroyed.\nReference counted is typically implemented by storing a count with the actual payload of the object.\nEvery time a new reference to the object is created, the reference count is incremented.\nEvery time a reference expires, the reference is decremented."),(0,o.kt)("p",null,"The operations that trigger a reference increment are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"initializing an object from another object."),(0,o.kt)("li",{parentName:"ul"},"assigning an object to another object.")),(0,o.kt)("p",null,"The operations that trigger a reference decrement are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the lifetime of an object expires")),(0,o.kt)("p",null,"Modern programming languages offer the possibility to specify what code should be run in each of these situations, therefore enabling the implementation of referenced counted data structures.\nAs such, copy constructors may be used to automatically initialize an object from another object, assignment operators may be used to assign an object to another object an destructors may be used to destroy objects."),(0,o.kt)("h3",{id:"operator-overloading"},"Operator overloading"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"support/reference-counting")," directory.\nAnalyze the ",(0,o.kt)("inlineCode",{parentName:"p"},"operators.d")," file.\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," is defined that also implements 4 special functions: a constructor, a copy constructor, an assignment operator and a destructor.\nEach of these special functions may be called automatically by the compiler:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the constructor is called automatically whenever an object is initialized with a field of a type that corresponds to the constructor parameter type."),(0,o.kt)("li",{parentName:"ul"},"the copy constructor is called automatically when an object is initialized from an object of the same type."),(0,o.kt)("li",{parentName:"ul"},"the assignment operator is called automatically when an object is assigned an object of the same type."),(0,o.kt)("li",{parentName:"ul"},"the destructor is called automatically whenever an object goes out of scope.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: the difference between initialization and assignment is that the initialization ocurrs when an object is being declared and occurs a single time (",(0,o.kt)("inlineCode",{parentName:"strong"},"Obj o1 = 1"),"), whereas assignemnt is decoupled from the declaration site and may occur multiple times (provided that the variable is mutable).")),(0,o.kt)("p",null,"Compile and run the program in ",(0,o.kt)("inlineCode",{parentName:"p"},"operators.d"),".\nNotice how the different special functions are automatically called.\nConsidering the definition of ",(0,o.kt)("inlineCode",{parentName:"p"},"Obj")," from the file ",(0,o.kt)("inlineCode",{parentName:"p"},"operators.d"),", answer the following ",(0,o.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Data/Memory%20Security/quiz/operators"},"Quiz"),"."),(0,o.kt)("h4",{id:"practice"},"Practice"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"support/reference-counting")," directory.\nAnalyze the ",(0,o.kt)("inlineCode",{parentName:"p"},"refcount_skel.d"),".\nA reference counted ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," array is implemented, however, some bits are missing.\nRun the code, try to understand what happens."),(0,o.kt)("p",null,"The constructor allocates memory for the array, whereas the destructor deallocates it.\nCompile and run the code.\nNotice how the array's memory  is automatically managed."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncomment the following line in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function (",(0,o.kt)("inlineCode",{parentName:"p"},"//test1()"),").\nRun the code.\nWhat happens?\nWhy?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The reference counted array does not implement the copy constructor.\nComment the ",(0,o.kt)("inlineCode",{parentName:"p"},"version(none)")," annotation for the copy constructor and implement the logic so that the reference counted array is correct.\nWhen an object is initialized from another object, we need to appropriately set the fields and then increment the reference count.\nOnce you have completed this exercise, make sure the output is correct and that the reference counted array is not freed too early.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncomment the following line in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function (",(0,o.kt)("inlineCode",{parentName:"p"},"//test2()"),").\nRun the code.\nWhat happens?\nWhy?\nUse GDB to find out.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The reference counted array does not implement the assignment operator.\nComment the ",(0,o.kt)("inlineCode",{parentName:"p"},"version(none)")," annotation for the assignment operator and implement the logic so that the reference counted array is correct.\nWhen an object is assigned to another object, we need to first decrement the count for the object that is being assigned to, then fill the fields similarly to the copy constructor case and lastly increment the count for the assigned object.\nAfter completing the exercise, make sure that the memory is properly managed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Play with your reference counted array and create different scenarios to test its limits."))))}u.isMDXComponent=!0}}]);