"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[113],{4634:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));a(1839);const i={id:"auto-control",title:"04 - Auto Control"},s="Auto Control",r={unversionedId:"tutorials/virtual_joystick/auto-control",id:"tutorials/virtual_joystick/auto-control",title:"04 - Auto Control",description:"Finally, we will use this virtual joystick and the canbus client / service connection to control the Amiga to complete the full Virtual Joystick example.",source:"@site/docs/tutorials/virtual_joystick/04_auto_control.md",sourceDirName:"tutorials/virtual_joystick",slug:"/tutorials/virtual_joystick/auto-control",permalink:"/docs/tutorials/virtual_joystick/auto-control",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/virtual_joystick/04_auto_control.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"auto-control",title:"04 - Auto Control"},sidebar:"examples",previous:{title:"03 - Virtual Joystick Widget",permalink:"/docs/tutorials/virtual_joystick/virtual-joystick-widget"},next:{title:"05 - Further Exercises",permalink:"/docs/tutorials/virtual_joystick/further-exercises"}},l={},c=[{value:"Control the Amiga",id:"control-the-amiga",level:3},{value:"generator details",id:"generator-details",level:4},{value:"Add this as a task",id:"add-this-as-a-task",level:4},{value:"Run it",id:"run-it",level:3}],u={toc:c};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"auto-control"},"Auto Control"),(0,o.kt)("p",null,"Finally, we will use this virtual joystick and the canbus client / service connection to control the Amiga to complete the full Virtual Joystick example."),(0,o.kt)("h3",{id:"control-the-amiga"},"Control the Amiga"),(0,o.kt)("p",null,"This is done with a third forever-running ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio")," task for sending CAN messages."),(0,o.kt)("p",null,"This task waits for a ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNING")," canbus client state,\nto ensure there is feedback on the measured speeds before sending any commands.\nThis is a must for closed loop control!"),(0,o.kt)("p",null,"Once the canbus client is in a full ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNING")," state,\nthe task initializes the ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc"},(0,o.kt)("strong",{parentName:"a"},"Bidirectional streaming RPC")),"\ncalled ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto"},(0,o.kt)("strong",{parentName:"a"},"sendCanbusMessage")),"."),(0,o.kt)("p",null,"This passes a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/Generators"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"Python Generator"))),"\nthat constructs and yields a ",(0,o.kt)("inlineCode",{parentName:"p"},"SendCanbusMessageRequest")," containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"RawCanbusMessage"),",\nboth proto definitions from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto"},(0,o.kt)("strong",{parentName:"a"},"canbus.proto")),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RawCanbusMessage")," encodes an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"AmigaRpdo1"))),"\nauto control request that is forward by the canbus service to the Amiga dashboard.\nThis includes requested state, speed, and angular rate of the Amiga.\nAs you can see, the requested speed and angular rate are based on the position of the ",(0,o.kt)("inlineCode",{parentName:"p"},"VirtualJoystickWidget"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaRpdo1")," message is only a request. The vehicle control unit (VCU) in the Amiga dashboard has safety critical logic that prevents unsafe auto control.")),(0,o.kt)("p",null,"Because this is a bi-directional stream, a response is returned for each ",(0,o.kt)("inlineCode",{parentName:"p"},"RawCanbusMessage")," the generator yields.\nWe can check the status of each of these responses, and exit the generator loop if the service does not respond with a confirmed ",(0,o.kt)("inlineCode",{parentName:"p"},"success"),".\nOnce the canbus service is ready for streaming control again, it should re-initiate automatically."),(0,o.kt)("h4",{id:"generator-details"},"generator details"),(0,o.kt)("p",null,"The pose generator yields an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"AmigaRpdo1")))," (auto control command) for the canbus client to send on the bus at the specified period (recommended 50hz) based on the on-screen joystick position."),(0,o.kt)("p",null,"Each loop of the generator we sleep to enforce the ideal rate of streaming ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaRpdo1")," CAN messages, which is 50 hz.\nYou can modify the period parameter, but go too slow and you lose responsiveness, and go too fast and you risk saturating the CAN bus, which can cause loss of communication between all components on the bus."),(0,o.kt)("h4",{id:"add-this-as-a-task"},"Add this as a task"),(0,o.kt)("p",null,"Remember to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"send_can_msgs()")," method to the ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio.Task")," in our list in ",(0,o.kt)("inlineCode",{parentName:"p"},"app_func()"),"!"),(0,o.kt)("h3",{id:"run-it"},"Run it"),(0,o.kt)("p",null,"Now sync the app to the Brain and launch it."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure all your cables are disconnected from the Amiga and no one is in the way of the Amiga before driving around!")),(0,o.kt)("p",null,"Everything should look just like the last checkpoint, but now you can drive the Amiga the the virtual joystick!"),(0,o.kt)("p",null,"Navigate to the auto tab on the dashboard and enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Ready")," state.\nThe Brain should take control and enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Active")," state right away, allowing you to drive with the screen.\nYou should see the state on the dashboard match that displayed on the Brain in your app."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/200641685-a712fb2d-66f7-4ec2-bf92-e6d96c93cadb.png",alt:"auto_control"})))}d.isMDXComponent=!0}}]);