"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6441],{2398:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=t(7462),i=(t(7294),t(3905));t(1839);const r={id:"examples-index",title:"Examples Index"},o="Amiga SDK Examples",l={unversionedId:"examples/examples-index",id:"examples/examples-index",title:"Examples Index",description:"CircuitPython Examples",source:"@site/docs/examples/examples_index.md",sourceDirName:"examples",slug:"/examples/examples-index",permalink:"/docs/examples/examples-index",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/examples_index.md",tags:[],version:"current",frontMatter:{id:"examples-index",title:"Examples Index"},sidebar:"examples",next:{title:"Hello Main Loop Example",permalink:"/docs/examples/hello_main_loop/"}},p={},m=[{value:"CircuitPython Examples",id:"circuitpython-examples",level:2},{value:"Hello World Auto-mode (hello_main_loop)",id:"hello-world-auto-mode-hello_main_loop",level:3},{value:"Cansniffer",id:"cansniffer",level:3},{value:"FPV",id:"fpv",level:3},{value:"Brain ADK Examples",id:"brain-adk-examples",level:2},{value:"Record and Access data",id:"record-and-access-data",level:3},{value:"File Reader",id:"file-reader",level:3},{value:"File Reader CAN",id:"file-reader-can",level:3},{value:"Camera Client",id:"camera-client",level:3},{value:"Brain App Tutorials",id:"brain-app-tutorials",level:2},{value:"00 - Tutorial Introduction",id:"00---tutorial-introduction",level:3},{value:"01 - Camera Streamer Tutorial",id:"01---camera-streamer-tutorial",level:3},{value:"02 - Virtual Joystick Tutorial",id:"02---virtual-joystick-tutorial",level:3},{value:"Developing Custom Applications",id:"developing-custom-applications",level:3}],s={toc:m};function d(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amiga-sdk-examples"},"Amiga SDK Examples"),(0,i.kt)("h2",{id:"circuitpython-examples"},"CircuitPython Examples"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These are the examples for developing programs for the ",(0,i.kt)("a",{parentName:"p",href:"../mcu_kit/"},(0,i.kt)("strong",{parentName:"a"},"farm-ng microcontroller kit")),".")),(0,i.kt)("p",null,"Before attempting any of these examples make sure you have already cloned the ",(0,i.kt)("inlineCode",{parentName:"p"},"amiga-dev-kit")," repository, If you have not follow the instructions listed ",(0,i.kt)("a",{parentName:"p",href:"/docs/contribute/contribute-website"},(0,i.kt)("strong",{parentName:"a"},"here"))),(0,i.kt)("h3",{id:"hello-world-auto-mode-hello_main_loop"},(0,i.kt)("a",{parentName:"h3",href:"./hello_main_loop/"},"Hello World Auto-mode (hello_main_loop)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/hello_main_loop/code.py"},(0,i.kt)("strong",{parentName:"a"},"Link to ",(0,i.kt)("inlineCode",{parentName:"strong"},"hello_main_loop/code.py")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It's recommended to start with this example before proceeding to any of the others.")),(0,i.kt)("p",null,"This introductory example covers getting set up, interacting with the Amiga, and\nusing auto-control mode to drive your Amiga from a computer\nusing the ",(0,i.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/microcontroller-kit"},(0,i.kt)("strong",{parentName:"a"},"farm-ng microcontroller kit")),"."),(0,i.kt)("p",null,"This example enables driving the Amiga by entering simple fwd / rev / left / right keyboard commands the serial port, which the app sends over the CAN bus."),(0,i.kt)("p",null,"Topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serial port 101"),(0,i.kt)("li",{parentName:"ul"},"Auto-mode control")),(0,i.kt)("h3",{id:"cansniffer"},(0,i.kt)("a",{parentName:"h3",href:"./cansniffer/"},"Cansniffer")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/cansniffer/code.py"},(0,i.kt)("strong",{parentName:"a"},"Link to ",(0,i.kt)("inlineCode",{parentName:"strong"},"cansniffer/code.py")))),(0,i.kt)("p",null,"This basic example covers a simple tool for listening to all CAN Id's streaming on the bus\nand measuring simple statistics about the streamed messages.\nThe example is inspired by the\n",(0,i.kt)("a",{parentName:"p",href:"https://manpages.debian.org/testing/can-utils/cansniffer.1.en.html"},(0,i.kt)("strong",{parentName:"a"},"cansniffer command line tool from can-utils")),"."),(0,i.kt)("p",null,"Topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CAN introduction")),(0,i.kt)("h3",{id:"fpv"},(0,i.kt)("a",{parentName:"h3",href:"./FPV/"},"FPV")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/FPV/code.py"},(0,i.kt)("strong",{parentName:"a"},"Link to ",(0,i.kt)("inlineCode",{parentName:"strong"},"FPV/code.py")))),(0,i.kt)("p",null,"This example shows how to connect off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.  This makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is."),(0,i.kt)("p",null,"Topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hardware integration"),(0,i.kt)("li",{parentName:"ul"},"Auto-mode control")),(0,i.kt)("h2",{id:"brain-adk-examples"},"Brain ADK Examples"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These are the examples that run on your personal computer for interacting with recorded logs and active services running on the Amiga Brain."),(0,i.kt)("p",{parentName:"admonition"},"Before getting started with any brain examples, you should install the ",(0,i.kt)("a",{parentName:"p",href:"/docs/brain/brain-install"},(0,i.kt)("strong",{parentName:"a"},"farm-ng Brain ADK package")),".")),(0,i.kt)("h3",{id:"record-and-access-data"},(0,i.kt)("a",{parentName:"h3",href:"/docs/examples/import_log_file/"},"Record and Access data")),(0,i.kt)("p",null,"This tutorial walks you through recording field data and offloading it to your local machine."),(0,i.kt)("h3",{id:"file-reader"},(0,i.kt)("a",{parentName:"h3",href:"/docs/examples/file_reader/"},"File Reader")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader/main.py"},(0,i.kt)("strong",{parentName:"a"},"Link to ",(0,i.kt)("inlineCode",{parentName:"strong"},"file_reader/main.py")))),(0,i.kt)("p",null,"This example reads log files and plays their contents."),(0,i.kt)("h3",{id:"file-reader-can"},(0,i.kt)("a",{parentName:"h3",href:"/docs/examples/file_reader_can/"},"File Reader CAN")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can"},(0,i.kt)("strong",{parentName:"a"},"Link to",(0,i.kt)("inlineCode",{parentName:"strong"},"file_reader_can")))),(0,i.kt)("p",null,"This example reads the Can data from recorded logs and prints it out."),(0,i.kt)("h3",{id:"camera-client"},(0,i.kt)("a",{parentName:"h3",href:"/docs/examples/camera_client/"},"Camera Client")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client/main.py"},(0,i.kt)("strong",{parentName:"a"},"Link to ",(0,i.kt)("inlineCode",{parentName:"strong"},"camera_client/main.py")))),(0,i.kt)("p",null,"This example acts as an ",(0,i.kt)("inlineCode",{parentName:"p"},"OakCameraClient")," in a standalone Python script."),(0,i.kt)("h2",{id:"brain-app-tutorials"},"Brain App Tutorials"),(0,i.kt)("p",null,"These are the examples for ready-to-run apps and learning how you can develop your own custom applications for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,i.kt)("strong",{parentName:"a"},"farm-ng Brain")),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The tutorials build off of one another and are better when followed in order.")),(0,i.kt)("h3",{id:"00---tutorial-introduction"},(0,i.kt)("a",{parentName:"h3",href:"/docs/tutorials/introduction/tutorial-introduction"},"00 - Tutorial Introduction")),(0,i.kt)("p",null,"This tutorial introduces necessary background knowledge and walks you through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"amiga-app-template"))),"."),(0,i.kt)("p",null,"The topics covered in this tutorial include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating kivy applications"),(0,i.kt)("li",{parentName:"ul"},"GRPC / asyncio application development")),(0,i.kt)("h3",{id:"01---camera-streamer-tutorial"},(0,i.kt)("a",{parentName:"h3",href:"/docs/tutorials/camera_streamer/camera-streamer-overview"},"01 - Camera Streamer Tutorial")),(0,i.kt)("p",null,"This tutorial is designed to teach you to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"OakCameraClient")," in a GUI application using ",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/"},(0,i.kt)("strong",{parentName:"a"},"Kivy"))," following along the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"camera-streamer")))," example application built using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"amiga-app-template"))),"."),(0,i.kt)("p",null,"The topics covered in this tutorial include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating kivy applications"),(0,i.kt)("li",{parentName:"ul"},"GRPC / asyncio application development"),(0,i.kt)("li",{parentName:"ul"},"Streaming an Oak camera with the camera client")),(0,i.kt)("h3",{id:"02---virtual-joystick-tutorial"},(0,i.kt)("a",{parentName:"h3",href:"/docs/tutorials/virtual_joystick/virtual-joystick-overview"},"02 - Virtual Joystick Tutorial")),(0,i.kt)("p",null,"This tutorial is designed to enable you to develop your own custom applications that uses camera streams and controls your Amiga over the CAN bus following along the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"virtual-joystick")))," example application built using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"amiga-app-template"))),"."),(0,i.kt)("p",null,"The topics covered in this tutorial include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating kivy applications"),(0,i.kt)("li",{parentName:"ul"},"GRPC / asyncio application development"),(0,i.kt)("li",{parentName:"ul"},"Streaming an Oak camera with the camera client"),(0,i.kt)("li",{parentName:"ul"},"Streaming Amiga state information with the canbus client"),(0,i.kt)("li",{parentName:"ul"},"Auto control mode of Amiga robot with the canbus client")),(0,i.kt)("h3",{id:"developing-custom-applications"},(0,i.kt)("a",{parentName:"h3",href:"/docs/brain/brain-apps"},"Developing Custom Applications")),(0,i.kt)("p",null,"This takes you through the steps of creating your own app with the use of an app template and deploying and testing it on the Amiga."))}d.isMDXComponent=!0}}]);