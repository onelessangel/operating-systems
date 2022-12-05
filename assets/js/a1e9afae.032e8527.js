"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[78960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="Arena",l={unversionedId:"Lab/I/O/Devices/content/arena",id:"Lab/I/O/Devices/content/arena",title:"Arena",description:"Open File Structure in the Kernel",source:"@site/docs/Lab/I/O/Devices/content/arena.md",sourceDirName:"Lab/I/O/Devices/content",slug:"/Lab/I/O/Devices/content/arena",permalink:"/operating-systems/Lab/I/O/Devices/content/arena",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Open File Structure in the Kernel",id:"open-file-structure-in-the-kernel",level:2},{value:"Mini-shell with Blackjack and Pipes",id:"mini-shell-with-blackjack-and-pipes",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"arena"},"Arena"),(0,i.kt)("h2",{id:"open-file-structure-in-the-kernel"},"Open File Structure in the Kernel"),(0,i.kt)("p",null,'The "open file" ',(0,i.kt)("inlineCode",{parentName:"p"},"struct")," in the Linux kernel is called ",(0,i.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v6.0.9/source/include/linux/fs.h#L940"},(0,i.kt)("inlineCode",{parentName:"a"},"struct file")),"\nIts most important fields are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct file {\n        struct path                     f_path;\n        /* Identifier within the filesystem. */\n        struct inode                    *f_inode;\n\n        /**\n         * Contains pointers to functions that implement operations that\n         * correspond to syscalls, such as `read()`, `write()`, `lseek()` etc.\n         */\n        const struct file_operations    *f_op;\n\n        /**\n         * Reference count. A `struct file` is deallocated when this reaches 0,\n         * i.e. nobody uses it anymore.\n         */\n        atomic_long_t                   f_count;\n\n        /* Those passed to `open()`. */\n        unsigned int                    f_flags;\n        fmode_t                         f_mode;\n\n        /* Cursor from where reads/writes are made */\n        loff_t                          f_pos;\n        /* To allow `f_pos` to be modified atomically. */\n        struct mutex                    f_pos_lock;\n}\n")),(0,i.kt)("p",null,"As mentioned above, ",(0,i.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v6.0.9/source/include/linux/fs.h#L2093"},(0,i.kt)("inlineCode",{parentName:"a"},"struct file_operations"))," contains function pointers that well-known syscalls such as ",(0,i.kt)("inlineCode",{parentName:"p"},"read()")," end up calling.\nEach filesystem needs to define its own implementations of these functions.\nSome of the most widely known ",(0,i.kt)("inlineCode",{parentName:"p"},"file_operations")," are listed below.\nBy now, you should recognise most of them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct file_operations {\n        loff_t (*llseek) (struct file *, loff_t, int);\n        ssize_t (*read) (struct file *, char __user *, size_t, loff_t *);\n        ssize_t (*write) (struct file *, const char __user *, size_t, loff_t *);\n        int (*mmap) (struct file *, struct vm_area_struct *);\n        unsigned long mmap_supported_flags;\n        int (*open) (struct inode *, struct file *);\n        int (*flush) (struct file *, fl_owner_t id);\n        int (*fsync) (struct file *, loff_t, loff_t, int datasync);\n        int (*fasync) (int, struct file *, int);\n}\n")),(0,i.kt)("h2",{id:"mini-shell-with-blackjack-and-pipes"},"Mini-shell with Blackjack and Pipes"),(0,i.kt)("p",null,"OK, there will be no Blackjack...\nfor now at least.\nBut there ",(0,i.kt)("strong",{parentName:"p"},"will")," be pipes.\nNavigate back to ",(0,i.kt)("inlineCode",{parentName:"p"},"support/mini-shell/mini_shell.c")," and add support for piping 2 commands together like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"> cat bosses.txt | head -n 5\nDarkeater Midir\nSlave Knight Gael\nNameless King\nDancer Of The Boreal Valley\nAncient Dragon\n")))}u.isMDXComponent=!0}}]);