"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2483],{2064:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var l=t(7462),n=(t(7294),t(3905));t(1839);const i={sidebar_label:"main_loop",title:"utils.main_loop"},s=void 0,p={unversionedId:"reference/circuitpy/utils/main_loop",id:"reference/circuitpy/utils/main_loop",title:"utils.main_loop",description:"get\\node\\id",source:"@site/docs/reference/circuitpy/utils/main_loop.md",sourceDirName:"reference/circuitpy/utils",slug:"/reference/circuitpy/utils/main_loop",permalink:"/docs/reference/circuitpy/utils/main_loop",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/circuitpy/utils/main_loop.md",tags:[],version:"current",frontMatter:{sidebar_label:"main_loop",title:"utils.main_loop"},sidebar:"api",previous:{title:"io",permalink:"/docs/reference/circuitpy/utils/io"},next:{title:"packet",permalink:"/docs/reference/circuitpy/utils/packet"}},r={},d=[{value:"get_node_id",id:"get_node_id",level:4},{value:"MainLoop Objects",id:"mainloop-objects",level:2},{value:"io_debug_str",id:"io_debug_str",level:4},{value:"can_debug_str",id:"can_debug_str",level:4},{value:"update_mem",id:"update_mem",level:4},{value:"init_app",id:"init_app",level:4},{value:"handle_supervisor_req",id:"handle_supervisor_req",level:4},{value:"handle_message",id:"handle_message",level:4},{value:"can_dummy",id:"can_dummy",level:4},{value:"poll_can",id:"poll_can",level:4},{value:"update_can_stats",id:"update_can_stats",level:4},{value:"update_display",id:"update_display",level:4},{value:"draw_debug",id:"draw_debug",level:4},{value:"iter",id:"iter",level:4},{value:"loop",id:"loop",level:4}],o={toc:d};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"get_node_id"},"get","_","node","_","id"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def get_node_id()\n")),(0,n.kt)("p",null,"Returns the value from the node_id.txt file in root of CIRCUITPY drive, if exists Else returns an arbitrary\ndefault node id."),(0,n.kt)("h2",{id:"mainloop-objects"},"MainLoop Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class MainLoop()\n")),(0,n.kt)("p",null,"Main driver for all farm-ng apps run on microcontrollers."),(0,n.kt)("h4",{id:"io_debug_str"},"io","_","debug","_","str"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def io_debug_str()\n")),(0,n.kt)("p",null,"Returns debug string for serial console."),(0,n.kt)("h4",{id:"can_debug_str"},"can","_","debug","_","str"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def can_debug_str()\n")),(0,n.kt)("p",null,"Returns string with details on CAN bus status."),(0,n.kt)("h4",{id:"update_mem"},"update","_","mem"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def update_mem()\n")),(0,n.kt)("p",null,"Check RAM stats on mcu."),(0,n.kt)("h4",{id:"init_app"},"init","_","app"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def init_app()\n")),(0,n.kt)("p",null,"Initialize the app loaded on the mcu."),(0,n.kt)("h4",{id:"handle_supervisor_req"},"handle","_","supervisor","_","req"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def handle_supervisor_req(message)\n")),(0,n.kt)("p",null,"Handle supervisor request CAN message."),(0,n.kt)("h4",{id:"handle_message"},"handle","_","message"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def handle_message(message)\n")),(0,n.kt)("p",null,"Process each received CAN message."),(0,n.kt)("h4",{id:"can_dummy"},"can","_","dummy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def can_dummy(message)\n")),(0,n.kt)("p",null,"Dummy function that is called when message does not meet filter."),(0,n.kt)("h4",{id:"poll_can"},"poll","_","can"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def poll_can()\n")),(0,n.kt)("p",null,"Checks for can messages to parse."),(0,n.kt)("h4",{id:"update_can_stats"},"update","_","can","_","stats"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def update_can_stats()\n")),(0,n.kt)("p",null,"Query CAN bus status."),(0,n.kt)("h4",{id:"update_display"},"update","_","display"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def update_display(display: Display)\n")),(0,n.kt)("p",null,"Called by ",(0,n.kt)("strong",{parentName:"p"},"init")," delta tracker object."),(0,n.kt)("h4",{id:"draw_debug"},"draw","_","debug"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def draw_debug(display: Display)\n")),(0,n.kt)("p",null,"Show debug stats on the dashboard display."),(0,n.kt)("h4",{id:"iter"},"iter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def iter()\n")),(0,n.kt)("p",null,"Method called every loop of the main while loop driving the app on the microcontroller."),(0,n.kt)("h4",{id:"loop"},"loop"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def loop()\n")),(0,n.kt)("p",null,"Initializes the main while loop, with an exception handler for dashboard that displays exceptions on the\nscreen."))}u.isMDXComponent=!0}}]);