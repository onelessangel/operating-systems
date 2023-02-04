"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[18590],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,m=d["".concat(i,".").concat(u)]||d[u]||h[u]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37688:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,p={unversionedId:"Lab/Compute/Copy-on-Write/content/processes-threads-apache2",id:"Lab/Compute/Copy-on-Write/content/processes-threads-apache2",title:"processes-threads-apache2",description:"Usage of Processes and Threads in apache2",source:"@site/docs/Lab/Compute/Copy-on-Write/content/processes-threads-apache2.md",sourceDirName:"Lab/Compute/Copy-on-Write/content",slug:"/Lab/Compute/Copy-on-Write/content/processes-threads-apache2",permalink:"/operating-systems/Lab/Compute/Copy-on-Write/content/processes-threads-apache2",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Usage of Processes and Threads in <code>apache2</code>",id:"usage-of-processes-and-threads-in-apache2",level:2},{value:"<code>apache2</code> Live Action",id:"apache2-live-action",level:3},{value:"Practice: Investigate <code>apache2</code> Using <code>strace</code>",id:"practice-investigate-apache2-using-strace",level:3},{value:"Conclusion",id:"conclusion",level:3}],c={toc:l},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage-of-processes-and-threads-in-apache2"},"Usage of Processes and Threads in ",(0,r.kt)("inlineCode",{parentName:"h2"},"apache2")),(0,r.kt)("p",null,"We'll take a look at how a real-world application - the ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2")," HTTP server - makes use of processes and threads.\nSince the server must be able to handle multiple clients at the same time, it must therefore use some form of concurrency.\nWhen a new client arrives, the server offloads the work of interacting with that client to another process or thread."),(0,r.kt)("p",null,"The choice of whether to use multiple processes or threads is not baked into the code.\nInstead, ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2")," provides a couple of modules called MPMs (Multi-Processing Modules).\nEach module implements a different concurrency model and the users can pick whatever module best fits their needs by editing the server configuration files."),(0,r.kt)("p",null,"The most common MPMs are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefork"),": there are multiple worker processes, each process is single-threaded and handles one client request at a time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"worker"),": there are multiple worker processes, each process is multi-threaded, and each thread handles one client request at a time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event"),": same as ",(0,r.kt)("inlineCode",{parentName:"li"},"worker")," but designed to better handle some particular use cases")),(0,r.kt)("p",null,"In principle, ",(0,r.kt)("inlineCode",{parentName:"p"},"prefork")," provides more stability and backwards compatibility, but it has a bigger overhead.\nOn the other hand, ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," are more scalable, and thus able to handle more simultaneous connections, due to the usage of threads.\nOn modern systems ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," is almost always the default."),(0,r.kt)("h3",{id:"apache2-live-action"},(0,r.kt)("inlineCode",{parentName:"h3"},"apache2")," Live Action"),(0,r.kt)("p",null,"Let's run an actual instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2")," and see how everything works.\nGo to ",(0,r.kt)("inlineCode",{parentName:"p"},"support/apache2")," and run ",(0,r.kt)("inlineCode",{parentName:"p"},"make run"),".\nThis will start a container with ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2")," running inside."),(0,r.kt)("p",null,"Check that the server runs as expected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ curl localhost:8080\n<html><body><h1>It works!</h1></body></html>\n")),(0,r.kt)("p",null,"Now go inside the container and take a look at running processes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/apache2$ docker exec -it apache2-test bash\n\nroot@56b9a761d598:/usr/local/apache2# ps -ef\nUID          PID    PPID  C STIME TTY          TIME CMD\nroot           1       0  0 20:38 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       9       1  0 20:38 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      10       1  0 20:38 pts/0    00:00:00 httpd -DFOREGROUND\nroot          25       0  0 20:40 pts/1    00:00:00 bash\nroot          31      25  0 20:40 pts/1    00:00:00 ps -ef\n")),(0,r.kt)("p",null,"We see 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"httpd")," processes.\nThe first one, running as root, is the main process, while the other 2 are the workers."),(0,r.kt)("p",null,"Let's confirm that we are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," mpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"root@56b9a761d598:/usr/local/apache2# grep mod_mpm conf/httpd.conf\nLoadModule mpm_event_module modules/mod_mpm_event.so\n#LoadModule mpm_prefork_module modules/mod_mpm_prefork.so\n#LoadModule mpm_worker_module modules/mod_mpm_worker.so\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," mpm is enabled, so we expect each worker to be multi-threaded.\nLet's check:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"root@56b9a761d598:/usr/local/apache2# ps -efL\nUID          PID    PPID     LWP  C NLWP STIME TTY          TIME CMD\nroot           1       0       1  0    1 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       8       1       8  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       8       1      11  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       8       1      12  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       8       1      16  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       8       1      17  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       8       1      18  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       8       1      19  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       9       1       9  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       9       1      14  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       9       1      15  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       9       1      20  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       9       1      21  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       9       1      22  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data       9       1      23  0    7 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nroot          24       0      24  1    1 20:56 pts/1    00:00:00 bash\nroot          30      24      30  0    1 20:56 pts/1    00:00:00 ps -efL\n")),(0,r.kt)("p",null,"Indeed, each worker has 7 threads.\nIn fact, the number of threads per worker is configurable, as well as the number of initial workers."),(0,r.kt)("p",null,"When a new connection is created, it will be handled by whatever thread is available from any worker.\nIf all the threads are busy, then the server will spawn more worker processes (and therefore more threads), as long as the total number of threads is below some threshold, which is also configurable."),(0,r.kt)("p",null,"Let's see this dynamic scaling in action.\nWe need to create a number of simultaneous connections that is larger than the current number of threads.\nThere is a simple script in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/apache2/make_conn.py")," to do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/apache2$ python3 make_conn.py localhost 8080\nPress ENTER to exit\n")),(0,r.kt)("p",null,"The script has created 100 connections and will keep them open until we press Enter."),(0,r.kt)("p",null,"Now, in another terminal, let's check the situation inside the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/apache2$ docker exec -it apache2-test bash\n\nroot@56b9a761d598:/usr/local/apache2# ps -efL\nUID          PID    PPID     LWP  C NLWP STIME TTY          TIME CMD\nroot           1       0       1  0    1 20:56 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      40       1      40  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      40       1      45  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      40       1      46  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      40       1      51  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      40       1      52  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      40       1      53  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      40       1      54  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      55       1      55  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      55       1      58  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      55       1      60  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      55       1      62  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      55       1      63  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      55       1      65  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data      55       1      66  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\n[...]\nwww-data     109       1     109  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data     109       1     115  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data     109       1     116  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data     109       1     121  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data     109       1     122  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data     109       1     123  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nwww-data     109       1     124  0    7 21:07 pts/0    00:00:00 httpd -DFOREGROUND\nroot         146       0     146  0    1 21:10 pts/1    00:00:00 bash\nroot         152     146     152  0    1 21:10 pts/1    00:00:00 ps -efL\n")),(0,r.kt)("p",null,"We see a much larger number of threads, as expected."),(0,r.kt)("h3",{id:"practice-investigate-apache2-using-strace"},"Practice: Investigate ",(0,r.kt)("inlineCode",{parentName:"h3"},"apache2")," Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"strace")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," to discover the server document root.\nThe document root is the path in the filesystem from where ",(0,r.kt)("inlineCode",{parentName:"p"},"httpd")," serves all the files requested by the clients."),(0,r.kt)("p",null,"First you will have to stop the running container using ",(0,r.kt)("inlineCode",{parentName:"p"},"make stop"),", then restart it with ",(0,r.kt)("inlineCode",{parentName:"p"},"make run-privileged"),"."),(0,r.kt)("p",null,"Then you will use ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," inside the container to attach to the worker processes (use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," option for this).\nYou will also have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag with ",(0,r.kt)("inlineCode",{parentName:"p"},"strace"),", so that it will follow all the threads inside the processes."),(0,r.kt)("p",null,"After you have attached successfully to all worker processes, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to send a request, like the one in the beginning of this section."),(0,r.kt)("p",null,"Then check the ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," output to see what files were opened by the server."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Copy-on-Write/quiz/apache2-strace"},"Quiz")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,'So far, you\'ve probably seen that spawning a process can "use" a different program (hence the path in the args of ',(0,r.kt)("inlineCode",{parentName:"p"},"system")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Popen"),"), but some languages such as Python allow you to spawn a process that executes a function from the same script.\nA thread, however, can only start from a certain entry point ",(0,r.kt)("strong",{parentName:"p"},"within the current address space"),", as it is bound to the same process.\nConcretely, a process is but a group of threads.\nFor this reason, when we talk about scheduling or synchronization, we talk about threads.\nA thread is, thus, an abstraction of a task running on a CPU core.\nA process is a logical group of such tasks."),(0,r.kt)("p",null,"We can sum up what we've learned so far by saying that processes are better used for separate, independent work, such as the different connections handled by a server.\nConversely, threads are better suited for replicated work: when the same task has to be performed on multiple cores.\nHowever, replicated work can also be suited for processes.\nDistributed applications, however, leverage different processes as this allows them to run on multiple physical machines at once.\nThis is required by the very large workloads such applications are commonly required to process."),(0,r.kt)("p",null,"These rules are not set in stone, though.\nLike we saw in the ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2")," example, the server uses multiple threads as well as multiple processes.\nThis provides a degree of stability - if one worker thread crashes, it will only crash the other threads belonging to the same process - while still taking advantage of the light resource usage inherent to threads."),(0,r.kt)("p",null,"This kind of trade-offs are a normal part in the development of real-world applications."))}h.isMDXComponent=!0}}]);