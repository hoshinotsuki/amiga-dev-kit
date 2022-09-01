"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),c=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(r),d=n,u=g["".concat(m,".").concat(d)]||g[d]||s[d]||o;return r?a.createElement(u,i(i({ref:t},p),{},{components:r})):a.createElement(u,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"getting-started",title:"Getting Started"},i=void 0,l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Welcome to the Amiga Development Kit!",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/amiga-dev-kit/docs/getting-started",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",next:{title:"Dashboard Overview",permalink:"/amiga-dev-kit/docs/dashboard/"}},m={},c=[{value:"Welcome to the Amiga Development Kit!",id:"welcome-to-the-amiga-development-kit",level:3},{value:"The Amiga",id:"the-amiga",level:2},{value:"The Amiga Development Kit",id:"the-amiga-development-kit",level:2},{value:"Cloning the Amiga Development Kit",id:"cloning-the-amiga-development-kit",level:3}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"welcome-to-the-amiga-development-kit"},"Welcome to the Amiga Development Kit!"),(0,n.kt)("p",null,"In this website you will find full context on our\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit"},"ADK repository"),", including documentation, tutorials, & the development kit API."),(0,n.kt)("p",null,"If you're just now learning about farm-ng and the Amiga robot, you should start by checking out ",(0,n.kt)("a",{parentName:"p",href:"https://farm-ng.com/"},"the farm-ng website")," to get an introduction to the Amiga robot and our ",(0,n.kt)("a",{parentName:"p",href:"https://farm-ng.com/collections/for-developers"},(0,n.kt)("inlineCode",{parentName:"a"},"For Developers")),"."),(0,n.kt)("h2",{id:"the-amiga"},"The Amiga"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/la-maquina-amiga"},"Amiga")," is a toolset of hardware and software built by farm-ng to enable farmers, hackers, engineers, roboticists, or anyone with a vision of creating ruggedized, waterproof, outdoor robotic rover applications."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We love making tools, and built the Amiga robot to empower and inspire farmers, engineers, hackers, communities, or anyone with a vision to make it their own.\nThe Amiga is a platform, community, and an ecosystem of components built to customize the Amiga, extend it, and maintain forever.")),(0,n.kt)("p",null,"The attachments we've already hardened and listed as products on the ",(0,n.kt)("a",{parentName:"p",href:"https://farm-ng.com/collections/amiga-attachments"},"amiga-attachments page")," all started out as hacking projects with the Amiga development kit!"),(0,n.kt)("p",null,"We have additional products to help hackers get started available on our ",(0,n.kt)("a",{parentName:"p",href:"https://farm-ng.com/collections/for-developers"},(0,n.kt)("inlineCode",{parentName:"a"},"For Developers"))," page."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187559379-b7b8fcf3-5fe7-4e14-aa47-fa0022f3801b.JPG",alt:"amiga"})),(0,n.kt)("h2",{id:"the-amiga-development-kit"},"The Amiga Development Kit"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/microcontroller-kit"},"Amiga Development Kit"),"\nis the best hardware option for hackers to get started with building custom applications for their Amiga robot."),(0,n.kt)("p",null,"We have a constantly expanding library of thorough examples, covering software and hardware,\nto provide guidance and inspiration for your next project!\nThe code for these examples live in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit"},"farm-ng/amiga-dev-kit Github repository"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187550507-c52d2666-846c-47d5-a4c2-8685d184c3a6.jpg",alt:"microcontroller-kit-16x9-reduced"})),(0,n.kt)("h3",{id:"cloning-the-amiga-development-kit"},"Cloning the Amiga Development Kit"),(0,n.kt)("p",null,"Clone the Amiga development kit repository to work with the Amiga from micro-controllers or your personal computer (Mac/Linux/Windows)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd <to_your_base_directory>\ngit clone git@github.com:farm-ng/amiga-dev-kit.git\n")))}s.isMDXComponent=!0}}]);