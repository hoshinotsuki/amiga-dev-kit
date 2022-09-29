"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),g=p(a),d=r,u=g["".concat(l,".").concat(d)]||g[d]||s[d]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"getting-started",title:"Getting Started"},i=void 0,m={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Welcome to the Amiga Development Kit!",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",next:{title:"Dashboard Overview",permalink:"/docs/dashboard/"}},l={},p=[{value:"Welcome to the Amiga Development Kit!",id:"welcome-to-the-amiga-development-kit",level:3},{value:"The Amiga",id:"the-amiga",level:2},{value:"The Amiga Development Kit",id:"the-amiga-development-kit",level:2},{value:"Cloning the Amiga Development Kit",id:"cloning-the-amiga-development-kit",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"welcome-to-the-amiga-development-kit"},"Welcome to the Amiga Development Kit!"),(0,r.kt)("p",null,"In this website you will find full context on our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit"},"ADK repository"),", including documentation, tutorials, & the development kit API."),(0,r.kt)("h2",{id:"the-amiga"},"The Amiga"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/la-maquina-amiga"},"Amiga")," is a toolset of hardware and software built by farm-ng to enable farmers, hackers, engineers, roboticists, or anyone with a vision of creating ruggedized, waterproof, outdoor robotic rover applications."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We love making tools, and built the Amiga robot to empower and inspire farmers, engineers, hackers, communities, or anyone with a vision to make it their own.\nThe Amiga is a platform, community, and ecosystem of components built to customize the Amiga, extend it, and maintain it forever."),(0,r.kt)("p",{parentName:"admonition"},"If you're just now learning about farm-ng and the Amiga robot, you should start by checking out the ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/"},(0,r.kt)("strong",{parentName:"a"},"farm-ng website"))," to get an introduction to the ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/la-maquina-amiga"},(0,r.kt)("strong",{parentName:"a"},"Amiga"))," robot.")),(0,r.kt)("p",null,"Some of our Amiga development kit hacking projects have been hardened and listed as products on the ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/collections/amiga-attachments"},"amiga-attachments page"),". And we have additional products to help hackers get started available on our ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/collections/for-developers"},(0,r.kt)("inlineCode",{parentName:"a"},"For Developers"))," page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187559379-b7b8fcf3-5fe7-4e14-aa47-fa0022f3801b.JPG",alt:"amiga"})),(0,r.kt)("h2",{id:"the-amiga-development-kit"},"The Amiga Development Kit"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/microcontroller-kit"},"Amiga Development Kit"),"\nis the best hardware option for hackers to get started with building custom applications for their Amiga robot."),(0,r.kt)("p",null,"We have a constantly expanding library of thorough examples, covering software and hardware,\nto provide guidance and inspiration for your next project!\nThe code for these examples live in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit"},"farm-ng/amiga-dev-kit Github repository"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187550507-c52d2666-846c-47d5-a4c2-8685d184c3a6.jpg",alt:"microcontroller-kit-16x9-reduced"})),(0,r.kt)("h3",{id:"cloning-the-amiga-development-kit"},"Cloning the Amiga Development Kit"),(0,r.kt)("p",null,"Clone the Amiga development kit repository to work with the Amiga from micro-controllers or your personal computer (Mac/Linux/Windows)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <to_your_base_directory>\ngit clone git@github.com:farm-ng/amiga-dev-kit.git\n")))}s.isMDXComponent=!0}}]);