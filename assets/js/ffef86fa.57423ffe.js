"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5958],{8811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(1839);const o={id:"cansniffer",title:"Cansniffer Example"},i="Cansniffer",l={unversionedId:"examples/cansniffer/cansniffer",id:"examples/cansniffer/cansniffer",title:"Cansniffer Example",description:"Link to cansniffer/code.py",source:"@site/docs/examples/cansniffer/README.md",sourceDirName:"examples/cansniffer",slug:"/examples/cansniffer/",permalink:"/docs/examples/cansniffer/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/cansniffer/README.md",tags:[],version:"current",frontMatter:{id:"cansniffer",title:"Cansniffer Example"},sidebar:"examples",previous:{title:"Hello Main Loop Example",permalink:"/docs/examples/hello_main_loop/"},next:{title:"FPV Example",permalink:"/docs/examples/FPV/"}},s={},p=[{value:"Link to <code>cansniffer/code.py</code>",id:"link-to-cansniffercodepy",level:3},{value:"Parts required:",id:"parts-required",level:2},{value:"CansnifferApp Breakdown",id:"cansnifferapp-breakdown",level:2},{value:"CAN Introduction",id:"can-introduction",level:2},{value:"Instructions",id:"instructions",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cansniffer"},"Cansniffer"),(0,r.kt)("h3",{id:"link-to-cansniffercodepy"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/cansniffer/code.py"},"Link to ",(0,r.kt)("inlineCode",{parentName:"a"},"cansniffer/code.py"))),(0,r.kt)("p",null,"This example covers a simple tool for listening to all CAN Id's streaming on the bus\nand measure simple statistics about the streamed messages.\nThe example is inspired by the\n",(0,r.kt)("a",{parentName:"p",href:"https://manpages.debian.org/testing/can-utils/cansniffer.1.en.html"},(0,r.kt)("strong",{parentName:"a"},"cansniffer command line tool from can-utils")),"."),(0,r.kt)("p",null,"You should read through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/hello_main_loop/"},(0,r.kt)("strong",{parentName:"a"},"Hello Main Loop"))," example first, as some required concepts are explained there."),(0,r.kt)("h2",{id:"parts-required"},"Parts required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://farm-ng.com/products/microcontroller-kit"},(0,r.kt)("strong",{parentName:"a"},"farm-ng microcontroller kit"))," (w/ USB-C cable)")),(0,r.kt)("h2",{id:"cansnifferapp-breakdown"},"CansnifferApp Breakdown"),(0,r.kt)("p",null,"Here we create ",(0,r.kt)("inlineCode",{parentName:"p"},"CansnifferApp")," as a very simple example of the types of ",(0,r.kt)("inlineCode",{parentName:"p"},"AppClass")," you can create."),(0,r.kt)("p",null,"In our app, we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"TickRepeater")," that will cause our print statements to execute every 1000 ms (every second).\nIn those print statements (in ",(0,r.kt)("inlineCode",{parentName:"p"},"CansnifferApp.iter()"),"), we first clear the console with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},'print("\\033[2J", end="")\n')),(0,r.kt)("p",null,"then print metrics about the CAN bus that are already measured by default in ",(0,r.kt)("inlineCode",{parentName:"p"},"MainLoop"),", returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug_str()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"print(self.main_loop.debug_str())\n")),(0,r.kt)("p",null,"These statistics include transmission and receive CAN errors,\nas well as all CAN Id's received by the microcontroller's CAN interface, with statistics on the time between received messages for each CAN Id."),(0,r.kt)("admonition",{title:"Take it further:",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You could also add memory statistics to the printed lines\nby adding the following line to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CansnifferApp")," constructor:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"self.main_loop.show_mem = True\n"))),(0,r.kt)("h2",{id:"can-introduction"},"CAN Introduction"),(0,r.kt)("p",null,"In general, we ",(0,r.kt)("em",{parentName:"p"},"mostly")," follow the CANopen standards.\nA recommended reading is the ",(0,r.kt)("a",{parentName:"p",href:"https://www.csselectronics.com/pages/canopen-tutorial-simple-intro"},(0,r.kt)("strong",{parentName:"a"},"CSS Electronics CANopen tutorial")),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some of the third-party, auxiliary components we have integrated into the system do not allow for strict adherence to the CANopen standards.\nFor our core system, we adhere closely to the standards.")),(0,r.kt)("p",null,"In this standard, messages are passed using function codes based on their use.\nEach component has a node ID identifier used to identify either the intended recipient or the source component of each message sent on the CAN bus.\nIn this way, the CAN Id (cobid) encodes both the type of message and either the intended recipient or the source of each message."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are unfamiliar with CAN bus,\nbut are familiar with publisher/subscriber frameworks,\none way to think about this is that every component is publishing to the CAN bus.\nEvery other component on the CAN bus can subscribe to those messages, or ignore them.")),(0,r.kt)("p",null,"The first CANopen standard to familiarize yourself with before interacting with the Amiga dev kit is the ",(0,r.kt)("a",{parentName:"p",href:"https://www.csselectronics.com/pages/canopen-tutorial-simple-intro#pdo-process-data-object"},(0,r.kt)("strong",{parentName:"a"},"PDO Service"))," used for sharing realtime information.\nOur dashboard is in constant communication with the pendant and all motor controllers."),(0,r.kt)("p",null,"We stream requests on the ",(0,r.kt)("inlineCode",{parentName:"p"},"RPDO1")," channel, and respond on the ",(0,r.kt)("inlineCode",{parentName:"p"},"TPDO1")," channel."),(0,r.kt)("p",null,"For example, key examples of our PDO sets include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Destination"),(0,r.kt)("th",{parentName:"tr",align:null},"node id"),(0,r.kt)("th",{parentName:"tr",align:null},"RPDO Request"),(0,r.kt)("th",{parentName:"tr",align:null},"TPDO response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pendant"),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Pendant"),(0,r.kt)("td",{parentName:"tr",align:null},"Joystick, buttons"),(0,r.kt)("td",{parentName:"tr",align:null},"LEDs, backlight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Motor Controller (x4)"),(0,r.kt)("td",{parentName:"tr",align:null},"Motor Controller ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Status, rpm"),(0,r.kt)("td",{parentName:"tr",align:null},"Status, voltage, rpm, current")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auto controller"),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"State, speed, angular rate"),(0,r.kt)("td",{parentName:"tr",align:null},"State, speed, angular rate")))),(0,r.kt)("p",null,"When possible, the RPDO requests are followed and the values measured when following these requests are sent as a TPDO response.\nWhen the requests cannot be followed, the reason should be inferable from the TPDO response.\nThe ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/hello_main_loop/"},(0,r.kt)("strong",{parentName:"a"},"Hello World Auto-mode (hello_main_loop)"))," provides the ability to interact directly with the Auto controller / dashboard PDO set of RPDO request & TPDO response.\nTo test this, try requesting control of the robot when it is ",(0,r.kt)("em",{parentName:"p"},"NOT")," in an ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO READY")," state."),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Steps 1 - 3 are explained in greater detail in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/hello_main_loop/"},(0,r.kt)("strong",{parentName:"a"},"Hello Auto Mode"))," introductory example.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect your ",(0,r.kt)("a",{parentName:"li",href:"https://farm-ng.com/products/microcontroller-kit"},(0,r.kt)("strong",{parentName:"a"},"farm-ng microcontroller kit"))," to your PC."),(0,r.kt)("li",{parentName:"ol"},"From ",(0,r.kt)("inlineCode",{parentName:"li"},"amiga-dev-kit/circuitpy/"),", drop the ",(0,r.kt)("inlineCode",{parentName:"li"},"code.py")," file and the ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/")," folder directly into the root of the mounted ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," drive.",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This assumes you have already cloned the amiga-dev-kit repo."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <to_your_base_directory>\ngit clone git@github.com:farm-ng/amiga-dev-kit.git\n")))),(0,r.kt)("li",{parentName:"ol"},"Open the serial console."),(0,r.kt)("li",{parentName:"ol"},"You should now see the can statistics printed and updated every 1000 ms.",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the serial console is blank, click into the serial console, cancel the current execution with ",(0,r.kt)("inlineCode",{parentName:"p"},"crtl+C"),", and soft reboot the microcontroller with ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+D")," .")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187537132-e89ea79b-2ae1-4ccb-9d9a-8f3ffd899565.png",alt:"cansniffer_demo"})))}d.isMDXComponent=!0}}]);