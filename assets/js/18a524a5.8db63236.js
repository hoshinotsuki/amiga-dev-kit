"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={id:"hello-world",title:"Hello Main Loop Example"},r="Hello Main Loop Example",l={unversionedId:"examples/hello_main_loop/hello-world",id:"examples/hello_main_loop/hello-world",title:"Hello Main Loop Example",description:"Link to hellomainloop/code.py",source:"@site/docs/examples/hello_main_loop/README.md",sourceDirName:"examples/hello_main_loop",slug:"/examples/hello_main_loop/",permalink:"/amiga-dev-kit/docs/examples/hello_main_loop/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/hello_main_loop/README.md",tags:[],version:"current",frontMatter:{id:"hello-world",title:"Hello Main Loop Example"},sidebar:"examples",previous:{title:"Examples Index",permalink:"/amiga-dev-kit/docs/examples/examples-index"},next:{title:"Cansniffer Example",permalink:"/amiga-dev-kit/docs/examples/cansniffer/"}},p={},s=[{value:"Link to <code>hello_main_loop/code.py</code>",id:"link-to-hello_main_loopcodepy",level:3},{value:"Parts required:",id:"parts-required",level:2},{value:"Code Breakdown",id:"code-breakdown",level:2},{value:"Imports from <code>lib/</code>",id:"imports-from-lib",level:3},{value:"<code>MainLoop</code>",id:"mainloop",level:4},{value:"<code>TickRepeater</code>",id:"tickrepeater",level:4},{value:"AmigaRpdo1",id:"amigarpdo1",level:4},{value:"AmigaTpdo1",id:"amigatpdo1",level:4},{value:"AmigaControlState",id:"amigacontrolstate",level:4},{value:"CanOpenObject / DASHBOARD_NODE_ID",id:"canopenobject--dashboard_node_id",level:4},{value:"code.py",id:"codepy",level:3},{value:"HelloMainLoopApp",id:"hellomainloopapp",level:4},{value:"Instructions",id:"instructions",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hello-main-loop-example"},"Hello Main Loop Example"),(0,o.kt)("h3",{id:"link-to-hello_main_loopcodepy"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/examples/hello_main_loop/code.py"},"Link to ",(0,o.kt)("inlineCode",{parentName:"a"},"hello_main_loop/code.py"))),(0,o.kt)("p",null,"This introductory example covers getting set up, interacting with the Amiga, and\nusing auto-control mode to drive your Amiga from a computer\nusing the ",(0,o.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/microcontroller-kit"},"farm-ng microcontroller Kit"),"."),(0,o.kt)("p",null,"This example enables driving the Amiga by entering simple fwd / rev / left / right keyboard commands the serial port, which the app sends over the CAN bus."),(0,o.kt)("h2",{id:"parts-required"},"Parts required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://farm-ng.com/products/microcontroller-kit"},"farm-ng microcontroller kit")," (w/ USB-C cable)")),(0,o.kt)("h2",{id:"code-breakdown"},"Code Breakdown"),(0,o.kt)("h3",{id:"imports-from-lib"},"Imports from ",(0,o.kt)("inlineCode",{parentName:"h3"},"lib/")),(0,o.kt)("h4",{id:"mainloop"},(0,o.kt)("inlineCode",{parentName:"h4"},"MainLoop")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MainLoop")," class is used throughout the application layer of the farm-ng firmware.\n",(0,o.kt)("inlineCode",{parentName:"p"},"MainLoop")," contains generic functionality we use on our pendant, dashboard, and auxiliary components for constant looping, receiving of CAN messages, sending of regular status updates called ",(0,o.kt)("inlineCode",{parentName:"p"},"Heartbeats"),", and more.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"MainLoop")," takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"AppClass")," in the constructor, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppClass")," is expected to contain a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"iter")," that is called every in every iteration (also called ",(0,o.kt)("inlineCode",{parentName:"p"},"iter"),") of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MainLoop"),"."),(0,o.kt)("h4",{id:"tickrepeater"},(0,o.kt)("inlineCode",{parentName:"h4"},"TickRepeater")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TickRepeater"),' class is a useful utility that we recommend taking advantage of throughout your custom implementations.\nWe use "repeaters" to limit the frequency of certain actions, by only performing the action once the ',(0,o.kt)("inlineCode",{parentName:"p"},"period")," of the repeater has past, when compared to the last time the action was performed.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"check()")," method returns ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," until the checkpoint has past, and ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," once the checkpoint is past.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," is returned, the repeater is updated to the next checkpoint, so you really only need the ",(0,o.kt)("inlineCode",{parentName:"p"},"check()")," method in most applications."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TickRepeater"),' is what we call a "catch-up" repeater, in which the the next checkpoint is the ',(0,o.kt)("inlineCode",{parentName:"p"},"ticks_period_ms")," (period in ms) added to the last checkpoint (rather than the next checkpoint being the ",(0,o.kt)("inlineCode",{parentName:"p"},"ticks_period_ms")," added to the time of last execution).\nAs you can infer, there's no reason to use one of these catch-up repeaters if the ",(0,o.kt)("inlineCode",{parentName:"p"},"check()")," will be called less frequently than the ",(0,o.kt)("inlineCode",{parentName:"p"},"ticks_period_ms")," used in the constructor."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"ticks_ms")," ",(0,o.kt)("em",{parentName:"p"},"NOTE"),":"),(0,o.kt)("p",{parentName:"blockquote"},"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"ticks_ms"),"\nwhich wraps every ",(0,o.kt)("inlineCode",{parentName:"p"},"2^29")," ms (~6.2 days).\nOur logic handles a single wrap, but we do not detect two wraps\nas we use this in periods more on the ",(0,o.kt)("inlineCode",{parentName:"p"},"100 ms")," timescale.\nIf you are creating a long duration application,\njust make sure your period is less than 6 days and that the check\nis called at least that often."),(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.circuitpython.org/en/latest/shared-bindings/supervisor/#supervisor.ticks_ms"},(0,o.kt)("inlineCode",{parentName:"a"},"supervisor.ticks_ms()")," docs"),"\nfor more details about ",(0,o.kt)("inlineCode",{parentName:"p"},"ticks_ms"),".")),(0,o.kt)("h4",{id:"amigarpdo1"},"AmigaRpdo1"),(0,o.kt)("p",null,"Wrapper for CAN packet used for auto mode controls of the Amiga.\nProvide the",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaRpdo1")," object with a requested ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaControlState"),", speed, and angular rate.\nThen pack this into a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.circuitpython.org/en/latest/shared-bindings/canio/index.html#canio.Message"},(0,o.kt)("inlineCode",{parentName:"a"},"canio.Message"))," and send this message over the bus."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"NOTE:")," This is a request for a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaControlState"),", angular rate, and linear velocity sent to the dashboard.\nThe dashboard, operating as the vehicle control unit (VCU), has built-in logic to prevent unsafe speeds, accelerations, control state transitions, etc.")),(0,o.kt)("h4",{id:"amigatpdo1"},"AmigaTpdo1"),(0,o.kt)("p",null,"Wrapper for CAN packet used for sending state of the Amiga, including ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaControlState"),".\nUnpack the message to see the current ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaControlState"),", speed, and angular rate of the robot."),(0,o.kt)("p",null,"There is a convenient util function ",(0,o.kt)("inlineCode",{parentName:"p"},"from_can_data")," that unpacks the message directly into an ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," object."),(0,o.kt)("h4",{id:"amigacontrolstate"},"AmigaControlState"),(0,o.kt)("p",null,"Control state of the Amiga."),(0,o.kt)("h4",{id:"canopenobject--dashboard_node_id"},"CanOpenObject / DASHBOARD_NODE_ID"),(0,o.kt)("p",null,"We ",(0,o.kt)("em",{parentName:"p"},"mostly")," follow the CANopen standards.\nA recommended reading is the ",(0,o.kt)("a",{parentName:"p",href:"https://www.csselectronics.com/pages/canopen-tutorial-simple-intro"},"CSS Electronics CANopen tutorial"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"NOTE:")," Some of the third-party, auxiliary components we have integrated into the system do not allow for strict adherence to the CANopen standards.\nFor our core system, we adhere closely to the standards.")),(0,o.kt)("p",null,"In this standard, messages are passed using function codes based on their use.\nEach component has a node ID identifier used to identify either the intended recipient or the source component of each message sent on the CAN bus.\nIn the current example, we send requested commands to the Amiga on the ",(0,o.kt)("inlineCode",{parentName:"p"},"RPDO1")," channel, and receive responses streamed from the Amiga on the ",(0,o.kt)("inlineCode",{parentName:"p"},"TPDO1")," channel.\nThese are differentiated from pendant or motor controller RPDO/TPDO command sets by sending them with the dashboard node ID."),(0,o.kt)("h3",{id:"codepy"},"code.py"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"code.py (or main.py) is the default name for the executable Python file on microcontrollers flashed with CircuitPython.\nYou'll see we stick to the code.py convention with our files.")),(0,o.kt)("h4",{id:"hellomainloopapp"},"HelloMainLoopApp"),(0,o.kt)("p",null,"Here we create ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloMainLoopApp")," as a simple example of the types of ",(0,o.kt)("inlineCode",{parentName:"p"},"AppClass")," you can create."),(0,o.kt)("p",null,"In our ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloMainLoopApp")," constructor, we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"TickRepeater")," that will stream the automatic control command to the dashboard every 50 ms (at a 20hz rate)."),(0,o.kt)("p",null,"In our ",(0,o.kt)("inlineCode",{parentName:"p"},"iter()")," call, we:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check for control keys entered into the serial console [",(0,o.kt)("inlineCode",{parentName:"li"},"<space bar>")," for toggling auto mode, & ",(0,o.kt)("inlineCode",{parentName:"li"},"w")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"s")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"d")," ","[fwd / left / rev / right]"," for adjusting velocities]."),(0,o.kt)("li",{parentName:"ol"},"Parse through all received CAN messages, sorting only for the ",(0,o.kt)("inlineCode",{parentName:"li"},"AmigaTpdo1")," responses coming from the dashboard."),(0,o.kt)("li",{parentName:"ol"},"Send the most up-to-date auto control commands, based on serial console entries, in an ",(0,o.kt)("inlineCode",{parentName:"li"},"AmigaRpdo1")," formatted packet.")),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect your microcontroller as in the following diagram:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187538323-f70bb5d5-8c9a-40c2-ab75-25fd6c80acfb.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Drop the ",(0,o.kt)("inlineCode",{parentName:"p"},"code.py")," file and the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/")," folder directly into the root of the mounted ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCUITPY")," drive, as seen below."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187538475-9d301b0f-f303-4ead-a1e7-b55c6b449b9f.png",alt:"hello_main_loop_filesystem"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Open the serial console.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Mu is the recommended serial console program by adafruit on their ",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console"},"CircuitPython serial console page"),".\nMu has a built in plotter for tuples printed to the serial console (print statements on your microcontroller)."),(0,o.kt)("p",{parentName:"blockquote"},"We've found that Mu can be a little unstable and freezes occasionally,\nso we'd recommend checking out their links for the \"advanced\" serial console:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-windows"},"Windows serial console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-linux"},"Linux serial console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-mac-and-linux"},"Mac serial console")))),(0,o.kt)("p",null,"You should see an output of the current state of the robot, similar to the screenshot below, and you should see the values update as the robot drives around."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187538512-90d53da9-8588-4d15-9973-49cca16bff72.png",alt:"hello_main_loop_console"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Navigate to the Auto mode tab on your dashboard, and click the ",(0,o.kt)("inlineCode",{parentName:"li"},"[AUTO CONTROL]")," button. The ",(0,o.kt)("inlineCode",{parentName:"li"},"[AUTO READY]")," icon should turn yellow, indicating the dashboard is ready for a component to take ",(0,o.kt)("inlineCode",{parentName:"li"},"Auto Control"),"."),(0,o.kt)("li",{parentName:"ol"},"Hit the space bar in your serial console to request auto control, and you should see the ",(0,o.kt)("inlineCode",{parentName:"li"},"[AUTO READY]")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"[AUTO ACTIVE]")," icons should turn green, indicating the dashboard is in ",(0,o.kt)("inlineCode",{parentName:"li"},"Auto Control")," mode."),(0,o.kt)("li",{parentName:"ol"},"In the serial console, increase / decrease the robot forward / reverse speed with the ",(0,o.kt)("inlineCode",{parentName:"li"},"w")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"s")," keys, and increase / decrease the robot angular rate with the ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"d")," keys."),(0,o.kt)("li",{parentName:"ol"},"Hit the space bar in the serial console to release auto control. Or hit the E-stop on your Amiga!")))}d.isMDXComponent=!0}}]);