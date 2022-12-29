"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[73212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={},r=void 0,s={unversionedId:"Lab/Compute/Copy-on-Write/content/synchronization",id:"Lab/Compute/Copy-on-Write/content/synchronization",title:"synchronization",description:"Synchronization",source:"@site/docs/Lab/Compute/Copy-on-Write/content/synchronization.md",sourceDirName:"Lab/Compute/Copy-on-Write/content",slug:"/Lab/Compute/Copy-on-Write/content/synchronization",permalink:"/operating-systems/Lab/Compute/Copy-on-Write/content/synchronization",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Synchronization",id:"synchronization",level:2},{value:"Race Conditions",id:"race-conditions",level:3},{value:"Synchronization - Overhead",id:"synchronization---overhead",level:4},{value:"Practice: Wrap the Whole <code>for</code> Statements in Critical Sections",id:"practice-wrap-the-whole-for-statements-in-critical-sections",level:4},{value:"Atomics",id:"atomics",level:3},{value:"Semaphores",id:"semaphores",level:3},{value:"Practice: <code>apache2</code> Simulator - Semaphore",id:"practice-apache2-simulator---semaphore",level:4},{value:"Conditions",id:"conditions",level:3},{value:"Practice: <code>apache2</code> Simulator - Condition",id:"practice-apache2-simulator---condition",level:4},{value:"Thread-Local Storage (TLS)",id:"thread-local-storage-tls",level:3},{value:"Practice: D - TLS by Default",id:"practice-d---tls-by-default",level:4},{value:"Practice: C - TLS on Demand",id:"practice-c---tls-on-demand",level:4}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"synchronization"},"Synchronization"),(0,i.kt)("p",null,'So far we\'ve used threads and processes without wondering how to "tell" them how to access shared data.\nMoreover, in order to make threads wait for each other, we simply had the main thread wait for the others to finish all their work.\nBut what if we want one thread to wait until another one simply performs some specific action after which it resumes its execution?\nFor this, we need to use some more complex synchronization mechanisms.'),(0,i.kt)("h3",{id:"race-conditions"},"Race Conditions"),(0,i.kt)("p",null,"For example, what if one thread wants to increase a global variable while another one wants to decrease it?\nLet's say the assembly code for increasing and decreasing the variable looks like the one in the snippet below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-asm"},"increase:\n    mov eax, [var]\n    inc eax\n    mov [var], eax\n\ndecrease:\n    mov eax, [var]\n    dec eax\n    mov [var], eax\n")),(0,i.kt)("p",null,"Imagine both threads executed ",(0,i.kt)("inlineCode",{parentName:"p"},"mov eax, [var]")," at the same time.\nThen each would independently increase its (",(0,i.kt)("strong",{parentName:"p"},"non-shared"),") ",(0,i.kt)("inlineCode",{parentName:"p"},"eax")," register.\nIn the end, the final value of ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," depends on which thread executes ",(0,i.kt)("inlineCode",{parentName:"p"},"mov [var], eax")," ",(0,i.kt)("em",{parentName:"p"},"last"),'.\nSo it\'s kind of a reversed race.\nThe thread that runs the slowest "wins" this race and writes the final value of ',(0,i.kt)("inlineCode",{parentName:"p"},"var"),".\nBut this is up to the scheduler and is non-deterministic.\nSuch undefined behaviours can cripple the execution of a program if ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," is some critical variable."),(0,i.kt)("p",null,"Let's see this bug in action.\nGo to ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/d/race_condition.d"),", compile and run the code a few times.\nIt spawns to threads that do exactly what we've talked about so far: one thread increments ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," 10 million times, while the other decrements it 10 million times."),(0,i.kt)("p",null,"As you can see from running the program, the differences between subsequent runs can be substantial.\nTo fix this, we must ensure that ",(0,i.kt)("strong",{parentName:"p"},"only one thread")," can execute either ",(0,i.kt)("inlineCode",{parentName:"p"},"var++")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"var--")," at any time.\nWe call these code sections ",(0,i.kt)("strong",{parentName:"p"},"critical sections"),".\nA critical section is a piece of code that can only be executed by ",(0,i.kt)("strong",{parentName:"p"},"one thread")," at a time.\nSo we need some sort of ",(0,i.kt)("em",{parentName:"p"},"mutual exclusion mechanism")," so that when one thread runs the critical section, the other has to ",(0,i.kt)("strong",{parentName:"p"},"wait")," before entering it.\nThis mechanism is called a ",(0,i.kt)("strong",{parentName:"p"},"mutex"),', whose name comes from "mutual exclusion".'),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/d/race_condition_mutex.d")," and notice the differences between this code and the buggy one.\nWe now use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutex")," variable which we ",(0,i.kt)("inlineCode",{parentName:"p"},"lock()")," at the beginning of a critical section and we ",(0,i.kt)("inlineCode",{parentName:"p"},"unlock()")," at the end.\nGenerally speaking ",(0,i.kt)("inlineCode",{parentName:"p"},"lock()"),"-ing a mutex makes a thread enter a critical section, while calling ",(0,i.kt)("inlineCode",{parentName:"p"},"unlock()")," makes the thread leave said critical section.\nTherefore, as we said previously, the critical sections in our code are ",(0,i.kt)("inlineCode",{parentName:"p"},"var--")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"var++"),".\nRun the code multiple times to convince yourself that in the end, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," will always be 0."),(0,i.kt)("p",null,"Mutexes contain an internal variable which can be either 1 (locked) or 0 (unlocked).\nWhen a thread calls ",(0,i.kt)("inlineCode",{parentName:"p"},"lock()"),", it attempts to set that variable to 1.\nIf it was 0, the thread sets it to 1 and proceeds to execute the critical section.\nOtherwise, it ",(0,i.kt)("strong",{parentName:"p"},"suspends its execution")," and waits until that variable is set to 0 again."),(0,i.kt)("p",null,"When calling ",(0,i.kt)("inlineCode",{parentName:"p"},"unlock()"),", the internal variable is set to 0 and all waiting threads are woken up to try to acquire the mutex again.\n",(0,i.kt)("strong",{parentName:"p"},"Be careful:")," It is generally considered unsafe and ",(0,i.kt)("a",{parentName:"p",href:"https://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_mutex_lock.html"},"in many cases undefined behaviour")," to call ",(0,i.kt)("inlineCode",{parentName:"p"},"unlock()")," from a different thread than the one that acquired the lock.\nSo the general workflow should look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"within a single thread:\n    mutex.lock()\n    // do atomic stuff\n    mutex.unlock()\n")),(0,i.kt)("h4",{id:"synchronization---overhead"},"Synchronization - Overhead"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There ain't no such thing as a free lunch")),(0,i.kt)("p",null,"This saying is also true for multithreading.\nRunning threads in parallel is nice and efficient, but synchronization always comes with a penalty: overhead.\nUse the ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," command to record the running times of ",(0,i.kt)("inlineCode",{parentName:"p"},"race_condition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"race_condition_mutex"),".\nNotice that those of ",(0,i.kt)("inlineCode",{parentName:"p"},"race_condition_mutex")," are larger than those of ",(0,i.kt)("inlineCode",{parentName:"p"},"race_condition"),"."),(0,i.kt)("p",null,"The cause of this is that now when one thread is executing the critical section, the other has to wait and do nothing.\nWaiting means changing its state from RUNNING to WAITING, which brings further overhead from the scheduler.\nThis latter overhead comes from the ",(0,i.kt)("strong",{parentName:"p"},"context switch"),"s that is necessary for a thread to switch its state from RUNNING to WAITING and back."),(0,i.kt)("h4",{id:"practice-wrap-the-whole-for-statements-in-critical-sections"},"Practice: Wrap the Whole ",(0,i.kt)("inlineCode",{parentName:"h4"},"for")," Statements in Critical Sections"),(0,i.kt)("p",null,"Move the calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"lock()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unlock()")," outside the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," statements so that the critical sections become the entire statement.\nMeasure the new time spent by the code and compare it with the execution times recorded when the critical sections were made up of only ",(0,i.kt)("inlineCode",{parentName:"p"},"var--")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"var++"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/quiz/coarse-vs-granular-critical-section"},"Quiz")),(0,i.kt)("h3",{id:"atomics"},"Atomics"),(0,i.kt)("p",null,"So now we know how to use mutexes.\nAnd we know that mutexes work by using an internal variable that can be either 1 (locked) or 0 (unlocked).\nBut how does ",(0,i.kt)("inlineCode",{parentName:"p"},"lock()")," actually set that variable to 1?\nHow does it avoid a race condition in case another thread also wants to set it to 1?"),(0,i.kt)("p",null,'We need a guarantee that anyone "touching" that variable does so "within its own critical section".\nBut now we need a critical section to implement a critical section...\nTo solve this circular problem, we make use of a very common ',(0,i.kt)("em",{parentName:"p"},"Deus ex Machina"),": ",(0,i.kt)("strong",{parentName:"p"},"hardware support"),"."),(0,i.kt)("p",null,"Modern processors are capable of ",(0,i.kt)("em",{parentName:"p"},"atomically")," accessing data, either for reads or writes.\nAn atomic action is and indivisible sequence of operations that a thread runs without interference from others.\nConcretely, before initiating an atomic transfer on one of its data buses, the CPU first makes sure all other transfers have ended, then ",(0,i.kt)("strong",{parentName:"p"},"locks")," the data bus by stalling all cores attempting to transfer data on it.\nThis way, one thread obtains ",(0,i.kt)("strong",{parentName:"p"},"exclusive")," access to the data bus while accessing data.\nAs a side note, the critical sections in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/race_condition_mutex.d")," are also atomic once they are wrapped between calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"lock()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unlock()"),"."),(0,i.kt)("p",null,"As with every hardware feature, the ",(0,i.kt)("inlineCode",{parentName:"p"},"x86")," ISA exposes an instruction for atomic operations.\nIn particular this instruction is a ",(0,i.kt)("strong",{parentName:"p"},"prefix"),", called ",(0,i.kt)("inlineCode",{parentName:"p"},"lock"),".\nIt makes the instruction that follows it run atomically.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"lock")," prefix ensures that the core performing the instruction has exclusive ownership of the cache line from where the data is transfered for the entire operation.\nThis is how the increment is made into an indivisible unit."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"inc dword [x]")," can be made atomic like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"lock inc dword [x]"),".\nYou can play with the ",(0,i.kt)("inlineCode",{parentName:"p"},"lock")," prefix ",(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/content/arena#atomic-assembly"},"in the Arena"),"."),(0,i.kt)("p",null,"Compilers provide support for such hardware-level atomic operations.\nGCC exposes ",(0,i.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc/_005f_005fatomic-Builtins.html"},"builtins")," such as ",(0,i.kt)("inlineCode",{parentName:"p"},"__atomic_load()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"__atomic_store()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"__atomic_compare_exchange()")," and many others.\nAll of them rely on the mechanism described above."),(0,i.kt)("p",null,"In D, this functionality is implemented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"core.atomic")," module.\nGo to ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/d/race_condition_atomic.d")," and complete the function ",(0,i.kt)("inlineCode",{parentName:"p"},"decrementVar()"),".\nCompile and run the code.\nNow measure its running time against the mutex implementations.\nIt should be somewhere between ",(0,i.kt)("inlineCode",{parentName:"p"},"race_condition.d")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"race_condition_mutex.d"),"."),(0,i.kt)("p",null,"So using the hardware support is more efficient, but it can only be leveraged for simple, individual instructions, such as loads and stores.\nAnd the fact that high-level languages also expose an API for atomic operations shows how useful these operations are for developers."),(0,i.kt)("h3",{id:"semaphores"},"Semaphores"),(0,i.kt)("p",null,"Up to know we've learned how to create critical sections that can be accessed by ",(0,i.kt)("strong",{parentName:"p"},"only one thread")," at a time.\nThese critical sections revolved around ",(0,i.kt)("strong",{parentName:"p"},"data"),".\nWhenever we define a critical section, there is some specific data to which we cannot allow parallel access.\nThe reason why we can't allow it is, in general, data integrity, as we've seen in our examples in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/")),(0,i.kt)("p",null,"But what if threads need to count?\nCounting is inherently thread-unsafe because it's a ",(0,i.kt)("em",{parentName:"p"},"read-modify-write")," operation.\nWe read the counter, increment (modify) it and then write it back.\nThink about our example with ",(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/content/processes-threads-apache2"},(0,i.kt)("inlineCode",{parentName:"a"},"apache2")),"\nLet's say a ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," has created a ",(0,i.kt)("em",{parentName:"p"},"pool")," of 3 threads.\nThey are not doing any work initially;\nthey are in the WAITING state.\nAs clients initiate connections, these threads are picked up and are used to serve ",(0,i.kt)("strong",{parentName:"p"},"at most 3")," connections at a time.\nBut the number of connections may be arbitrarily large.\nTherefore, we need a way to keep track of it.\nWhen serving a client, a thread should decrement it to inform the others that a connection has been finished.\nIn short, we need a counter that the dispatcher increments and that worker threads decrement."),(0,i.kt)("p",null,"Such a counter could be implemented using a ",(0,i.kt)("strong",{parentName:"p"},"semaphore"),".\nFor simplicity's sake, you can view a semaphore as simply a mutex whose internal variable can take any value and acts like a counter.\nWhen a thread attempts to ",(0,i.kt)("inlineCode",{parentName:"p"},"acquire()")," a semaphore, it will wait if this counter is less than or equal to 0.\nOtherwise, the thread ",(0,i.kt)("strong",{parentName:"p"},"decrements")," the internal counter and the function returns.\nThe opposite of ",(0,i.kt)("inlineCode",{parentName:"p"},"acquire()")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"release()"),", which increases the internal counter by a given value (by default 1)."),(0,i.kt)("h4",{id:"practice-apache2-simulator---semaphore"},"Practice: ",(0,i.kt)("inlineCode",{parentName:"h4"},"apache2")," Simulator - Semaphore"),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"support/apache2-simulator/apache2_simulator_semaphore.py"),".\nIn the ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," function we create a semaphore which we increment (",(0,i.kt)("inlineCode",{parentName:"p"},"release()"),") upon every new message.\nEach thread decrements (",(0,i.kt)("inlineCode",{parentName:"p"},"acquire()"),") this semaphore to signal that it wants to retrieve a message from the list.\nThe retrieval means modifying a data structure, which is a critical section, so we use a ",(0,i.kt)("strong",{parentName:"p"},"separate")," mutex for this.\nOtherwise, multiple threads could acquire the semaphore at the same time and try to modify the list at the same time.\nNot good."),(0,i.kt)("p",null,"Locking this mutex (which in Python is called ",(0,i.kt)("inlineCode",{parentName:"p"},"Lock"),") is done with the following statement: ",(0,i.kt)("inlineCode",{parentName:"p"},"with msg_mutex:"),"\nThis is a syntactic equivalent to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"event.acquire()\nmessages.append(msg)\nevent.release()\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/quiz/semaphore-equivalent"},"Quiz")),(0,i.kt)("p",null,"Since the length of the ",(0,i.kt)("inlineCode",{parentName:"p"},"messages")," list is simply ",(0,i.kt)("inlineCode",{parentName:"p"},"len(messages)"),", it may seem a bit redundant to use a semaphore to store essentially the same value.\nIn the next section, we'll look at a more refined mechanism for our use case: ",(0,i.kt)("em",{parentName:"p"},"condition variables"),"."),(0,i.kt)("h3",{id:"conditions"},"Conditions"),(0,i.kt)("p",null,"Another way we can implement our ",(0,i.kt)("inlineCode",{parentName:"p"},"apache2")," simulator is to use a condition variable.\nThis one is probably the most intuitive synchronization primitive.\nIt's a means by which a thread can tell another one: \"Hey, wake up, ",(0,i.kt)("em",{parentName:"p"},"this")," happened!\".\nSo it's a way for threads to notify each other.\nFor this reason, the main methods associated with conditions are ",(0,i.kt)("inlineCode",{parentName:"p"},"notify()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wait()"),".\nAs you might expect, they are complementary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wait()")," puts the thread in the WAITING state until it's woken up by another one"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"notify()")," wakes up one or more ",(0,i.kt)("inlineCode",{parentName:"li"},"wait()"),"-ing threads.\nIf ",(0,i.kt)("inlineCode",{parentName:"li"},"notify()")," is called before any thread has called ",(0,i.kt)("inlineCode",{parentName:"li"},"wait()"),", the first thread that calls it will continue its execution unhindered.")),(0,i.kt)("h4",{id:"practice-apache2-simulator---condition"},"Practice: ",(0,i.kt)("inlineCode",{parentName:"h4"},"apache2")," Simulator - Condition"),(0,i.kt)("p",null,"But this is not all, unfortunately.\nLook at the code in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/apache2-simulator/apache2_simulator_condition.py"),".\nSee the main thread call ",(0,i.kt)("inlineCode",{parentName:"p"},"notify()")," once it reads the message.\nNotice that this call is within a ",(0,i.kt)("inlineCode",{parentName:"p"},"with event"),": so it acquires some mutex / semaphore."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"acquire()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"release()")," are commonly associated with mutexes or semaphores.\nWhat do they have to do with condition variables?"),(0,i.kt)("p",null,"Well, a lock ",(0,i.kt)("inlineCode",{parentName:"p"},"Condition")," variable also stores an inner lock (mutex).\nIt is this lock that we ",(0,i.kt)("inlineCode",{parentName:"p"},"acquire()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"release()"),".\nIn fact, the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#condition-objects"},"documentation")," states we should only call ",(0,i.kt)("inlineCode",{parentName:"p"},"Condition")," methods with its inner lock taken."),(0,i.kt)("p",null,"Why is this necessary?\nTake a look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"worker()")," function.\nAfter ",(0,i.kt)("inlineCode",{parentName:"p"},"wait()"),"-ing (we'll explain the need for the loop in a bit), it extracts a message from the message queue.\nThis operation is ",(0,i.kt)("strong",{parentName:"p"},"not")," atomic, so it must be enclosed within a critical section.\nHence, the lock."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/quiz/notify-only-with-mutex"},"Quiz")),(0,i.kt)("p",null,"So now we know we cannot only use a mutex.\nThe mutex is used to access and modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"messages")," list atomically.\nNow you might be thinking that this code causes a deadlock:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"with event:\n    while len(messages) == 0:\n        event.wait()\n")),(0,i.kt)("p",null,"The thread gets the lock and then, if there are no messages, it switches its state to WAITING.\nA classic deadlock, right?\nNo.\n",(0,i.kt)("inlineCode",{parentName:"p"},"wait()")," also releases the inner lock of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Condition")," and being woken up reacquires it.\nNeat!\nAnd the ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop that checks if there are any new messages is necessary because ",(0,i.kt)("inlineCode",{parentName:"p"},"wait()")," can return after an arbitrary long time.\nTherefore, it's necessary to check for messages again when waking up."),(0,i.kt)("p",null,"So now we have both synchronization ",(0,i.kt)("strong",{parentName:"p"},"and")," signalling.\nThis is what conditions are for, ultimately."),(0,i.kt)("p",null,"Now that you understand the concept of synchronization, you should apply it in a broader context.\n",(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/content/arena#synchronization---thread-safe-data-structure"},"In the Arena"),", you'll find an exercise asking you to make an existing arraylist implementation thread-safe.\nHave fun!"),(0,i.kt)("h3",{id:"thread-local-storage-tls"},"Thread-Local Storage (TLS)"),(0,i.kt)("p",null,"First things first: what if we don't want data to be shared between threads?\nAre we condemned to have to worry about race conditions?\nWell, no."),(0,i.kt)("p",null,'To protect data from race conditions "by design", we can place in what\'s called ',(0,i.kt)("strong",{parentName:"p"},"Thread-Local Storage (TLS)"),'.\nAs its name implies, this is a type of storage that is "owned" by individual threads, as opposed to being shared among all threads.\n',(0,i.kt)("strong",{parentName:"p"},"Do not confuse it with copy-on-write"),".\nTLS pages are always duplicated when creating a new thread and their contents are re-initialised."),(0,i.kt)("h4",{id:"practice-d---tls-by-default"},"Practice: D - TLS by Default"),(0,i.kt)("p",null,"Take a look again at ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/d/race_condition.d"),", specifically at how ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," is declared:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-d"},"__gshared int var;\n")),(0,i.kt)("p",null,"Have you wondered what the ",(0,i.kt)("inlineCode",{parentName:"p"},"__gshared")," keyword does?\nWell, for memory safety reasons, in D, all variables are by default ",(0,i.kt)("strong",{parentName:"p"},"not shared")," between threads.\nWe need to specifically ask the language to let us share a variable between threads.\nWe can do this using either the ",(0,i.kt)("inlineCode",{parentName:"p"},"__gshared")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"shared")," keywords.\nYou've seed ",(0,i.kt)("inlineCode",{parentName:"p"},"shared")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/d/race_condition_atomic.d"),"."),(0,i.kt)("p",null,"The difference between them is that ",(0,i.kt)("inlineCode",{parentName:"p"},"shared")," only allows programmers read-modify-write the variable atomically, as we do in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/d/race_condition_atomic.d"),".\nModify the ",(0,i.kt)("inlineCode",{parentName:"p"},"incrementVar()")," function and increment ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," like you would any variable: ",(0,i.kt)("inlineCode",{parentName:"p"},"var++"),".\nTry to compile the code.\nIt fails.\nThe compiler is smart and tells you what to do instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'Error: read-modify-write operations are not allowed for `shared` variables\n        Use `core.atomic.atomicOp!"+="(var, 1)` instead\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"__gshared")," is a rawer version of ",(0,i.kt)("inlineCode",{parentName:"p"},"shared"),".\nIt doesn't forbid anything."),(0,i.kt)("h4",{id:"practice-c---tls-on-demand"},"Practice: C - TLS on Demand"),(0,i.kt)("p",null,"The perspective of C towards TLS is opposed to that of D: in C/C++ everything is shared by default.\nThis makes multithreading easier and more lightweight to implement than in D, because synchronization is left entirely up to the developer, at the cost of potential unsafety."),(0,i.kt)("p",null,"Of course we can specify that some data belongs to the TLS, by preceding the declaration of a variable with ",(0,i.kt)("inlineCode",{parentName:"p"},"__thread")," keyword.\nFirst, compile and run the code in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/race-condition/c/race_condition_tls.c")," a few times.\nAs expected, the result is different each time."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Modify the declaration of ",(0,i.kt)("inlineCode",{parentName:"li"},"var")," and add the ",(0,i.kt)("inlineCode",{parentName:"li"},"__thread")," keyword to place the variable in the TLS of each thread.\nRecompile and run the code a few more times.\nYou should see that in the end, ",(0,i.kt)("inlineCode",{parentName:"li"},"var")," is 0.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/quiz/tls-synchronization"},"Quiz 1")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/quiz/tls-var-copies"},"Quiz 2")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Print the address and value of ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," in each thread.\nSee that they differ.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," function before calling ",(0,i.kt)("inlineCode",{parentName:"p"},"pthread_create()"),".\nNotice that the value doesn't propagate to the other threads.\nThis is because, upon creating a new thread, its TLS is initialised."))))}h.isMDXComponent=!0}}]);