"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"oak_pb2_grpc",title:"farm_ng.oak.oak_pb2_grpc"},i=void 0,c={unversionedId:"reference/brain/farm_ng/oak/oak_pb2_grpc",id:"reference/brain/farm_ng/oak/oak_pb2_grpc",title:"farm_ng.oak.oak_pb2_grpc",description:"Client and server classes corresponding to protobuf-defined services.",source:"@site/docs/reference/brain/farm_ng/oak/oak_pb2_grpc.md",sourceDirName:"reference/brain/farm_ng/oak",slug:"/reference/brain/farm_ng/oak/oak_pb2_grpc",permalink:"/docs/reference/brain/farm_ng/oak/oak_pb2_grpc",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/brain/farm_ng/oak/oak_pb2_grpc.md",tags:[],version:"current",frontMatter:{sidebar_label:"oak_pb2_grpc",title:"farm_ng.oak.oak_pb2_grpc"},sidebar:"api",previous:{title:"client",permalink:"/docs/reference/brain/farm_ng/oak/client"}},s={},l=[{value:"OakServiceStub Objects",id:"oakservicestub-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"OakServiceServicer Objects",id:"oakserviceservicer-objects",level:2},{value:"streamFrames",id:"streamframes",level:4},{value:"getServiceState",id:"getservicestate",level:4},{value:"startService",id:"startservice",level:4},{value:"stopService",id:"stopservice",level:4},{value:"pauseService",id:"pauseservice",level:4},{value:"OakService Objects",id:"oakservice-objects",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Client and server classes corresponding to protobuf-defined services."),(0,a.kt)("h2",{id:"oakservicestub-objects"},"OakServiceStub Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class OakServiceStub(object)\n")),(0,a.kt)("p",null,"Missing associated documentation comment in .proto file."),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(channel)\n")),(0,a.kt)("p",null,"Constructor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"channel")," - A grpc.Channel.")),(0,a.kt)("h2",{id:"oakserviceservicer-objects"},"OakServiceServicer Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class OakServiceServicer(object)\n")),(0,a.kt)("p",null,"Missing associated documentation comment in .proto file."),(0,a.kt)("h4",{id:"streamframes"},"streamFrames"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def streamFrames(request, context)\n")),(0,a.kt)("p",null,"Missing associated documentation comment in .proto file."),(0,a.kt)("h4",{id:"getservicestate"},"getServiceState"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def getServiceState(request, context)\n")),(0,a.kt)("p",null,"Missing associated documentation comment in .proto file."),(0,a.kt)("h4",{id:"startservice"},"startService"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def startService(request, context)\n")),(0,a.kt)("p",null,"Missing associated documentation comment in .proto file."),(0,a.kt)("h4",{id:"stopservice"},"stopService"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def stopService(request, context)\n")),(0,a.kt)("p",null,"Missing associated documentation comment in .proto file."),(0,a.kt)("h4",{id:"pauseservice"},"pauseService"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def pauseService(request, context)\n")),(0,a.kt)("p",null,"Missing associated documentation comment in .proto file."),(0,a.kt)("h2",{id:"oakservice-objects"},"OakService Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class OakService(object)\n")),(0,a.kt)("p",null,"Missing associated documentation comment in .proto file."))}u.isMDXComponent=!0}}]);