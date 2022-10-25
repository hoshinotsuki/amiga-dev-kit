"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6627],{4871:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),l=a(1839);const r={id:"control-states",title:"Amiga Control States"},o=void 0,s={unversionedId:"dashboard/control-states",id:"dashboard/control-states",title:"Amiga Control States",description:"Amiga control states",source:"@site/docs/dashboard/control_states.md",sourceDirName:"dashboard",slug:"/dashboard/control-states",permalink:"/docs/dashboard/control-states",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard/control_states.md",tags:[],version:"current",frontMatter:{id:"control-states",title:"Amiga Control States"},sidebar:"docs",previous:{title:"Dashboard Firmware Updates",permalink:"/docs/dashboard/dashboard-fw"},next:{title:"Debug Cable Overview",permalink:"/docs/debug_cable/"}},p={},u=[{value:"Amiga control states",id:"amiga-control-states",level:2},{value:"State transition flowchart",id:"state-transition-flowchart",level:3},{value:"State descriptions",id:"state-descriptions",level:3},{value:"Transition descriptions",id:"transition-descriptions",level:3}],m={toc:u};function d(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"amiga-control-states"},"Amiga control states"),(0,i.kt)("h3",{id:"state-transition-flowchart"},"State transition flowchart"),(0,i.kt)(l.G,{chart:"  flowchart TB;\n    subgraph Start_Up\n        Boot-- Warm up --\x3eManual_Ready\n    end\n\n    subgraph Active___states__\n        direction LR\n        Manual_Active <-- O / CRUISE --\x3e Cruise_Control\n        subgraph Auto\n            direction TB\n            Auto_Ready <-- AmigaRpdo1 --\x3e Auto_Active\n        end\n        Manual_Active-- Auto mode tab --\x3eAuto\n        Manual_Active <-. X / BRAKE .- Auto\n        Manual_Active <-. X / BRAKE .- Cruise_Control\n    end\n\n    Manual_Ready -- Start / Vamos --\x3e Manual_Active\n    Active___states__ -- E-stop condition --\x3e E-stopped\n    Start_Up -- E-stop condition --\x3e E-stopped\n    Manual_Ready <-. Clear E-stop condition .- E-stopped\n",mdxType:"Mermaid"}),(0,i.kt)("h3",{id:"state-descriptions"},"State descriptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Boot"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Amiga is starting up"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manual Ready"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Amiga is ready to use!"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manual Active"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Manual driving with the pendant. Amiga does not hold fwd/rev or turning speed"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cruise Control"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pendant adjusts fwd/rev speed. Amiga holds fwd/rev speed"),(0,i.kt)("li",{parentName:"ul"},"Perturb pendant left/right for turning. Amiga does not hold turning speed"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Auto Ready"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Amiga is ready for auto control to take over"),(0,i.kt)("li",{parentName:"ul"},"Pendant only has button interactions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Auto Active"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Amiga is actively being driven by auto mode"),(0,i.kt)("li",{parentName:"ul"},"Pendant only has button interactions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"E-stopped"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An E-stop condition has been triggered by",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Physical press of the large E-stop button"),(0,i.kt)("li",{parentName:"ul"},"Loss of communication with a critical component (pendant, motor controllers, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Over / under charged batteries"),(0,i.kt)("li",{parentName:"ul"},"Motor temperature or current spike"),(0,i.kt)("li",{parentName:"ul"},"Etc."))),(0,i.kt)("li",{parentName:"ul"},"E-stop condition must be cleared before transition to Manual Ready state")))),(0,i.kt)("h3",{id:"transition-descriptions"},"Transition descriptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Warm up"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Amiga components go through start up procedures"),(0,i.kt)("li",{parentName:"ul"},"Dashboard waits for all components to signal they are ready"),(0,i.kt)("li",{parentName:"ul"},"Transitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Boot -> Manual Ready")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start / Vamos"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"[Start / Vamos]")," button on the dashboard touchscreen is pressed"),(0,i.kt)("li",{parentName:"ul"},"Transitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Manual Ready -> Manual Active")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"O / CRUISE"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The O / CRUISE pendant button is pressed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The top left button either has a circle or the word CRUISE, depending on your pendant version"))),(0,i.kt)("li",{parentName:"ul"},"Transitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Manual Active <--\x3e Cruise Control")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"X / BRAKE"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The X / BRAKE pendant button is pressed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The bottom left button either has an X or the word BRAKE, depending on your pendant version"))),(0,i.kt)("li",{parentName:"ul"},"Amiga speed is brought to a stop"),(0,i.kt)("li",{parentName:"ul"},"Transitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cruise Control -> Manual Active")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Auto Ready -> Manual Active")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Auto Active -> Manual Active")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Auto mode tab"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Navigate to the auto mode tab on the dashboard"),(0,i.kt)("li",{parentName:"ul"},"Press the ",(0,i.kt)("inlineCode",{parentName:"li"},"[AUTO CONTROL]")," button"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"AUTO READY")," state will illuminate, if state transition is permitted"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AmigaRpdo1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Transition between Auto ready and auto active state (both directions) is requested over CAN with an AmigaRpdo1 message"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"AUTO READY")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"AUTO ACTIVE")," state will illuminate, corresponding to the state the Amiga is in"),(0,i.kt)("li",{parentName:"ul"},"Transitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Auto Ready <--\x3e Auto Active")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"E-stop condition"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E-stopped mode is automatically triggered by a qualifying issue (see above)"),(0,i.kt)("li",{parentName:"ul"},"Transitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Manual Ready -> E-stopped")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Manual Active -> E-stopped")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cruise Control -> E-stopped")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Auto Ready -> E-stopped")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Auto Active -> E-stopped")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clear E-stop condition"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E-stopped mode is automatically cleared by resolving the issue that triggered it"),(0,i.kt)("li",{parentName:"ul"},"Transitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"E-stopped -> Manual Ready"))))))))}d.isMDXComponent=!0}}]);