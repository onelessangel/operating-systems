"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[13695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return n?o.createElement(u,s(s({ref:t},c),{},{components:n})):o.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},s="Remote I/O",i={unversionedId:"Lab/I/O/Beyond Network Sockets/content/remote-io",id:"Lab/I/O/Beyond Network Sockets/content/remote-io",title:"Remote I/O",description:"In the previous sections, we started looking into how applications interact with the outside world.",source:"@site/docs/Lab/I/O/Beyond Network Sockets/content/remote-io.md",sourceDirName:"Lab/I/O/Beyond Network Sockets/content",slug:"/Lab/I/O/Beyond Network Sockets/content/remote-io",permalink:"/operating-systems/Lab/I/O/Beyond Network Sockets/content/remote-io",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"One Browser - Many Connections",id:"one-browser---many-connections",level:2},{value:"Connection",id:"connection",level:2},{value:"Recap: IPs",id:"recap-ips",level:3},{value:"Further than IPs: Ports",id:"further-than-ips-ports",level:3},{value:"API - Hail Berkeley Sockets",id:"api---hail-berkeley-sockets",level:3},{value:"Sender and Receiver",id:"sender-and-receiver",level:4},{value:"Practice: Network Sockets Challenge",id:"practice-network-sockets-challenge",level:4}],c={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remote-io"},"Remote I/O"),(0,a.kt)("p",null,'In the previous sections, we started looking into how applications interact with the outside world.\nHowever, so far this "outside world" has only meant ',(0,a.kt)("strong",{parentName:"p"},"local")," files and other ",(0,a.kt)("strong",{parentName:"p"},"local"),' processes.\nBut what about files located on other computers?\nWhat about "talking to" processes running in other parts of the world?'),(0,a.kt)("h2",{id:"one-browser---many-connections"},"One Browser - Many Connections"),(0,a.kt)("p",null,"What happens when we request a web page?\nA simple example is ",(0,a.kt)("a",{parentName:"p",href:"http://example.com/"},"http://example.com/"),".\nWhen the browser displays this web page, it first ",(0,a.kt)("strong",{parentName:"p"},"downloads")," it and then ",(0,a.kt)("strong",{parentName:"p"},"renders")," it.\nThe web page comes as a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),".\nWe can roughly redo its steps like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ wget http://example.com/  # download index.html\nwget http://example.com/\n--2022-12-02 15:53:31--  http://example.com/\nResolving example.com (example.com)... 2606:2800:220:1:248:1893:25c8:1946, 93.184.216.34\nConnecting to example.com (example.com)|2606:2800:220:1:248:1893:25c8:1946|:80... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 1256 (1,2K) [text/html]\nSaving to: \u2018index.html\u2019\n\nindex.html                                                           100%[====================================================================================================================================================================>]   1,23K  --.-KB/s    in 0s      \n\n2022-12-02 15:53:31 (248 MB/s) - \u2018index.html\u2019 saved [1256/1256]\n")),(0,a.kt)("p",null,"Then we can view the HTML contents of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'student@os:~$ cat index.html\n<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset="utf-8" />\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <style type="text/css">\n    body {\n        background-color: #f0f0f2;\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n        \n    }\n    div {\n        width: 600px;\n        margin: 5em auto;\n        padding: 2em;\n        background-color: #fdfdff;\n        border-radius: 0.5em;\n        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);\n    }\n    a:link, a:visited {\n        color: #38488f;\n        text-decoration: none;\n    }\n    @media (max-width: 700px) {\n        div {\n            margin: 0 auto;\n            width: auto;\n        }\n    }\n    </style>    \n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.</p>\n    <p><a href="https://www.iana.org/domains/example">More information...</a></p>\n</div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"And, finally we can render the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file in the browser like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ xdg-open index.html  # xdg-open invokes the OS's default program for opening HTML files\n")),(0,a.kt)("p",null,"After running the command above, look at the URL in the browser.\nIt's not ",(0,a.kt)("a",{parentName:"p",href:"http://example.com/"},"http://example.com/")," anymore, but the path to your ",(0,a.kt)("strong",{parentName:"p"},"local")," ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,a.kt)("p",null,"So now you've switched from doing ",(0,a.kt)("strong",{parentName:"p"},"remote")," I/O back to ",(0,a.kt)("strong",{parentName:"p"},"local")," I/O.\nDeluge does the same thing: it performs ",(0,a.kt)("strong",{parentName:"p"},"remote")," I/O operations to get files locally so that you, the user, can do ",(0,a.kt)("strong",{parentName:"p"},"local")," I/O with it.\nRemote and local I/O are not by any means separated.\nRather, they are strongly intertwined."),(0,a.kt)("h2",{id:"connection"},"Connection"),(0,a.kt)("p",null,"Focusing on how the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file is sent over the Web, we first need to establish the 2 ",(0,a.kt)("strong",{parentName:"p"},"endpoints"),".\nWe have a ",(0,a.kt)("strong",{parentName:"p"},"sender"),": the ",(0,a.kt)("a",{parentName:"p",href:"http://example.com/"},"http://example.com/")," server.\nThen we have a ",(0,a.kt)("strong",{parentName:"p"},"receiver"),": our host.\nHow do the 2 endpoints know each other?"),(0,a.kt)("h3",{id:"recap-ips"},"Recap: IPs"),(0,a.kt)("p",null,"When someone asks you who you are on the internet, the answer is obvious: your ",(0,a.kt)("strong",{parentName:"p"},"IP Address"),".\nIP Addresses are 32-bit (or 128-bit for IPv6) numbers that identify hosts on the web.\nTo find the IPv4 and IPv6 addresses of a host given by a URL, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ host example.com\nexample.com has address 93.184.216.34\nexample.com has IPv6 address 2606:2800:220:1:248:1893:25c8:1946\nexample.com mail is handled by 0 .\n")),(0,a.kt)("p",null,"So we can imagine our browser identifies ",(0,a.kt)("a",{parentName:"p",href:"http://example.com/"},"http://example.com/")," by its IP address, say ",(0,a.kt)("inlineCode",{parentName:"p"},"93.184.216.34"),".\nSimilarly, the server also knows our host's IP address.\nEach of them uses the other's IP address to locate their peer and communicate with them."),(0,a.kt)("p",null,"But what if we shift our example to another site: ",(0,a.kt)("a",{parentName:"p",href:"https://open-education-hub.github.io/operating-systems/"},"https://open-education-hub.github.io/operating-systems/"),"?\nLet's say we open 2 tabs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"one to the ",(0,a.kt)("a",{parentName:"li",href:"https://open-education-hub.github.io/operating-systems/Lab/I/O/File%20Descriptors/content/file-descriptors/"},"File Descriptors section")," of this lab"),(0,a.kt)("li",{parentName:"ul"},"another one to the ",(0,a.kt)("a",{parentName:"li",href:"https://open-education-hub.github.io/operating-systems/Lab/I/O/File%20Handlers/content/file-handlers/"},"File Handling section"))),(0,a.kt)("p",null,"Now our browser needs to ",(0,a.kt)("strong",{parentName:"p"},"know")," what to with data coming from two sources.\nIn addition, the server also needs to maintain information about our 2 tabs so it can send the correct data to each of them.\nTherefore, each tab establishes a different ",(0,a.kt)("strong",{parentName:"p"},"connection")," to the server.\nAll communication between the tab and the site occurs within this connection."),(0,a.kt)("p",null,"Now the question is: ",(0,a.kt)("em",{parentName:"p"},"how can we maintain 2 connections between 2 endpoints only identified by IPs?"),"\n... and the answer is that we can't.\nIf the browser and the server were to only use IP addresses, they wouldn't be able to differentiate between the 2 connections mentioned above.\nWe need something more: ",(0,a.kt)("strong",{parentName:"p"},"ports")),(0,a.kt)("h3",{id:"further-than-ips-ports"},"Further than IPs: Ports"),(0,a.kt)("p",null,"A port is simply a ",(0,a.kt)("strong",{parentName:"p"},"number")," assigned to uniquely identify a connection from a host to another and to direct the data that's transferred between them.\nThis way we can create multiple connections between the same 2 hosts.\nPort numbers are encoded on 16 bits and thus range from $0$ to $2^{16} - 1$, i.e. from $0$ to $65535$."),(0,a.kt)("p",null,"The first 1024 ports are reserved for well-known system services, such as SSH (which uses port 22).\nThese services run using certain ",(0,a.kt)("strong",{parentName:"p"},"communication protocols"),".\nA communication protocol is a set of rules that allow 2 or more hosts to communicate a certain way.\nThese rules include, but are not limited to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the format of each message: fields, sizes, maximum lengths etc."),(0,a.kt)("li",{parentName:"ul"},"the order in which messages are sent"),(0,a.kt)("li",{parentName:"ul"},"the behaviour of the endpoints with respect to these messages")),(0,a.kt)("p",null,"So the correct way of saying it isn't that the SSH process / service runs on port 22, but rather that ",(0,a.kt)("strong",{parentName:"p"},"the SSH protocol runs on port 22"),"."),(0,a.kt)("p",null,"Our browser also uses ports to distinguish between different connections.\nAnd so does the ",(0,a.kt)("inlineCode",{parentName:"p"},"github.io"),' server: it uses one port for sending the "File Descriptors" page and another for the "File Handling" page.\nThe image below shows how multiple tabs to the same site can be handled.\nThe prot numbers are chosen randomly.\nThey may have any value higher than 1023.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Browser Tabs and Ports",src:n(6506).Z,width:"552",height:"352"})),(0,a.kt)("p",null,"So it should be clear now that a connection is uniquely identified by ",(0,a.kt)("strong",{parentName:"p"},"an IP and a port"),"."),(0,a.kt)("h3",{id:"api---hail-berkeley-sockets"},"API - Hail Berkeley Sockets"),(0,a.kt)("p",null,"Up to now we've described how sites work in general.\nBefore we can implement something of this sort ourserlves, we need to understand the API.\nUnlike other APIs such as syscalls, which differ between OSs (Unix vs Windows for example), the one we're about to learn is almost universally adopted across OSs and programming languages.\nIt's called the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Berkeley_sockets"},"Berkeley Sockets API"),".\nAnd with this, we've just introduced a new word: ",(0,a.kt)("strong",{parentName:"p"},"socket"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Not this Socket",src:n(72677).Z,width:"533",height:"800"})),(0,a.kt)("p",null,"No, not this type of socket...\nBut our socket is somewhat similar ",(0,a.kt)("em",{parentName:"p"},"in concept"),'.\nJust like wall sockets allow us to plug into the electric grid, network sockets allow us to "plug" into the Web.\nRemember ',(0,a.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/file-handlers"},"file handlers"),"?\nYou should.\nFile handlers are objects with which we can interact with files.\nIn a similar way, sockets are handlers for that provide an abstraction for a connection to another process, running either on a remote machine or on the same host."),(0,a.kt)("h4",{id:"sender-and-receiver"},"Sender and Receiver"),(0,a.kt)("p",null,"We'll start with 2 programs: a sender and a receiver.\nNavigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"support/send-receive/")," and take a look at both ",(0,a.kt)("inlineCode",{parentName:"p"},"sender.py")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py"),"."),(0,a.kt)("p",null,"The sender reads data from the keyboard and sends it to the receiver.\nThe receiver reads data continuously.\nUpon receiving the message ",(0,a.kt)("inlineCode",{parentName:"p"},'"exit"'),", it closes.\nOtherwise, it prints whatever it receives to ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout"),".\nThis detail about how to handle a mesage containing ",(0,a.kt)("inlineCode",{parentName:"p"},'"exit"')," may be regarded as a ",(0,a.kt)("a",{parentName:"p",href:"#further-than-ips-ports"},"communication protocol")," established between the sender and the receiver."),(0,a.kt)("p",null,"Now open 2 terminals (or use ",(0,a.kt)("a",{parentName:"p",href:"https://tmuxcheatsheet.com/"},"tmux"),").\nFirst run ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py")," in one terminal.\nLooking at its code, the receiver does 2 things.\nIt creates a socket:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n")),(0,a.kt)("p",null,"We'll explain at the arguments in the ",(0,a.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/networking-101#udp"},"next section"),".\nOne thing to note here is that ",(0,a.kt)("strong",{parentName:"p"},"sockets are file descriptors too")),(0,a.kt)("p",null,"The server displays its PID.\nGive it as an argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"lsof"),", like you did in ",(0,a.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/redirections"},"the section on Redirections"),", to visualise the file descriptors opened by ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/quiz/receiver-socket-fd"},"Quiz 1")),(0,a.kt)("p",null,'After creating the socket, the receiver exposes itself as "listening" for connections on IP ',(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and on port 5000.\nThis means that it is now ready and waiting for other processes to send messages to it."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/quiz/bind-error-cause"},"Quiz 2")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remember:"),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"bind()"),"-ing to a certain port locks (like a mutex) it for the current process."),"\n",(0,a.kt)("strong",{parentName:"p"},"No other socket may ",(0,a.kt)("inlineCode",{parentName:"strong"},"bind()")," to this port until the initial socket bound to it is ",(0,a.kt)("inlineCode",{parentName:"strong"},"close()"),"d.")),(0,a.kt)("p",null,"Now run ",(0,a.kt)("inlineCode",{parentName:"p"},"sender.py")," and type some messages.\nSee them appear in the terminal where ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py")," is running.\nThe sender creates a socket and then sends messages directly to IP ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and port 5000 using ",(0,a.kt)("inlineCode",{parentName:"p"},"sendto()"),".\nWithout stopping the first ",(0,a.kt)("inlineCode",{parentName:"p"},"sender.py")," create another one in another terminal.\nType messages to both senders and see all of them displayed by ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py")," along with the addresses and ports from where they came."),(0,a.kt)("p",null,"In the end, both ",(0,a.kt)("inlineCode",{parentName:"p"},"sender.py")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py")," ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," their sockets.\nYou can see this in analogy to regular file descriptors."),(0,a.kt)("p",null,"So we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"sendto()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"recvfrom()"),' to send and receive messages via sockets.\nThis is a very simple communication model where the receiver is like a "sink" that receives messages from anywhere.\nAs you can see, it has no control over who sends data to it.\nTo get a high-level understanding of how these messages are passed and what other models exist, head over to the ',(0,a.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Beyond%20Network%20Sockets/content/networking-101"},"next section"),"."),(0,a.kt)("h4",{id:"practice-network-sockets-challenge"},"Practice: Network Sockets Challenge"),(0,a.kt)("p",null,"Use the API you've just learned about to fill in the TODOs in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/receive-challenges/receive_net_dgram_socket.c"),".\nThis is like ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py"),"\nFor it to run properly, you should compile it using ",(0,a.kt)("inlineCode",{parentName:"p"},"make"),", then run it and after that run ",(0,a.kt)("inlineCode",{parentName:"p"},"send_net_dgram_socket"),".\nIf you solved the challenge correctly, ",(0,a.kt)("inlineCode",{parentName:"p"},"receive_net_dgram_socket")," should display the flag."))}d.isMDXComponent=!0},6506:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/browser-tabs-2e3b83e1acd44607136a81a1a6346e56.svg"},72677:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/standard-us-power-outlet-c4b65ad6ff6a97ce0b898b5ca79be88f.jpg"}}]);