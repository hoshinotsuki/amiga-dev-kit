"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3542],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),o=a(6010),i=a(2389),l=a(7392),c=a(7094),s=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,a;const{lazy:i,block:p,defaultValue:h,values:d,groupId:f,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=d?d:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===h?h:null!=(t=null!=h?h:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,c.U)(),[C,_]=(0,r.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:F}=(0,s.o5)();if(null!=f){const e=v[f];null!=e&&e!==C&&N.some((t=>t.value===e))&&_(e)}const M=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==C&&(F(t),_(n),null!=f&&w(f,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:M,onClick:M},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},5222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=(a(1839),a(5488)),i=a(5162);const l={id:"microcontroller-kit",title:"Microcontroller Kit Overview"},c=void 0,s={unversionedId:"mcu_kit/microcontroller-kit",id:"mcu_kit/microcontroller-kit",title:"Microcontroller Kit Overview",description:"We sell a complete kit containing all necessary components on the Amiga shop website:",source:"@site/docs/mcu_kit/README.mdx",sourceDirName:"mcu_kit",slug:"/mcu_kit/",permalink:"/docs/mcu_kit/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/mcu_kit/README.mdx",tags:[],version:"current",frontMatter:{id:"microcontroller-kit",title:"Microcontroller Kit Overview"},sidebar:"docs",previous:{title:"Debug Cable Overview",permalink:"/docs/debug_cable/"},next:{title:"Brain Overview",permalink:"/docs/brain/"}},m={},u=[{value:"farm-ng micro-controller kit",id:"farm-ng-micro-controller-kit",level:4},{value:"Feather M4 Can device setup",id:"feather-m4-can-device-setup",level:2},{value:"Flashing the UF2 firmware on the M4 device",id:"flashing-the-uf2-firmware-on-the-m4-device",level:2},{value:"On first connection",id:"on-first-connection",level:3},{value:"Flash by drag &amp; drop",id:"flash-by-drag--drop",level:4},{value:"Flash UF2 by command line",id:"flash-uf2-by-command-line",level:4},{value:"On subsequent connection",id:"on-subsequent-connection",level:3},{value:"Loading code on the Feather",id:"loading-code-on-the-feather",level:2}],p={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We sell a complete kit containing all necessary components on the Amiga shop website:"),(0,r.kt)("h4",{id:"farm-ng-micro-controller-kit"},(0,r.kt)("a",{parentName:"h4",href:"https://farm-ng.com/products/microcontroller-kit"},"farm-ng micro-controller kit")),(0,r.kt)("h2",{id:"feather-m4-can-device-setup"},"Feather M4 Can device setup"),(0,r.kt)("p",null,"This device can be used for rapid prototyping of applications that interact with farm-ng's Amiga platform."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Feather M4 board front and back, where to solder the connector, and the resistor that must be cut:")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"773",title:"Feather M4 board front and back",alt:"Screen Shot 2022-08-16 at 7 34 34 PM",src:"https://user-images.githubusercontent.com/810997/185022043-bf6f20b6-f332-4e63-a050-be5f4248462c.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The connected Feather M4 and which wire to screw into high and low sides and where the reset button is:")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"702",title:"Connected Feather M4",alt:"Screen Shot 2022-08-16 at 7 24 54 PM",src:"https://user-images.githubusercontent.com/810997/185021388-b290fd2b-f721-4e59-843b-c30ee245c51b.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The male M12 CAN bus connector whose white (high) and blue (low) connectors are screwed into the Feather M4 and the male CAN bus connector is attached to the CAN bus:")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"650",title:"Male M12 CAN bus connector",alt:"Screen Shot 2022-08-16 at 7 41 38 PM",src:"https://user-images.githubusercontent.com/810997/185022824-593e543f-7899-4a65-93b0-9f07e97f8572.png"})),(0,r.kt)("h2",{id:"flashing-the-uf2-firmware-on-the-m4-device"},"Flashing the UF2 firmware on the M4 device"),(0,r.kt)("p",null,"We run ",(0,r.kt)("a",{parentName:"p",href:"https://circuitpython.org/"},"CircuitPython")," on the microcontrollers,\nas it is well supported, well documented, and recommended by Adafruit for their microcontrollers."),(0,r.kt)("p",null,"CircuitPython is installed by flashing the microcontroller with the correct UF2 file, and you can tell if CircuitPython is installed if the microcontroller is mounted as a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"CIRCUITPY")," whenever you connect it."),(0,r.kt)("h3",{id:"on-first-connection"},"On first connection"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following instructions summarize the\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/adafruit-feather-m4-can-express/circuitpython-on-feather-m4-can"},(0,r.kt)("strong",{parentName:"a"},"CircuitPython on Feather M4 CAN")),"\ninstructions.\nYou can also check out the more generic\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/installing-circuitpython"},(0,r.kt)("strong",{parentName:"a"},"Adafruit Installing CircuitPython"))," instructions.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect your feather to your computer through the USB-C port on the feather"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check that the large LED is green or randomly varying colored. If it is red, you are most likely using a charge only USB-C cable."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Double click the reset button to enter ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOTLOADER")," mode, allowing you to flash the microcontroller with a Microsoft standard flash format uf2 file. The Feather should automatically remount and show up as ",(0,r.kt)("inlineCode",{parentName:"p"},"FTHRCANBOOT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"FEATHERBOOT")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The timing of the double click can be a little tricky, so if it mounts as ",(0,r.kt)("inlineCode",{parentName:"p"},"CIRCUITPY"),", just try again until it mounts as ",(0,r.kt)("inlineCode",{parentName:"p"},"AMIGA"),".\nIf you cannot get the double click timing correct, you can enter BOOTLOADER mode with the following advanced user steps:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Open a serial console connected to the dashboard (see: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console"},"Adafruit connecting to the serial console"),")"),(0,r.kt)("li",{parentName:"ul"},"Pause the program with ",(0,r.kt)("inlineCode",{parentName:"li"},"ctrl+C")),(0,r.kt)("li",{parentName:"ul"},"Enter the following commands in the REPL")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"import microcontroller\nmicrocontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)\nmicrocontroller.reset()\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now flash the drive with the correct CircuitPython version, with either the drag & drop or the command line method.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the flashing, feather should automatically update, reboot with the newly loaded firmware, and remount as ",(0,r.kt)("inlineCode",{parentName:"p"},"CIRCUITPY")))),(0,r.kt)("h4",{id:"flash-by-drag--drop"},"Flash by drag & drop"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the correct UF2 file"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"From our repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/raw/main/circuitpy/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2"},"Download CircuitPython 7.3.2 - Feather M4 CAN")),(0,r.kt)("li",{parentName:"ul"},"Directly from Adafruit: ",(0,r.kt)("a",{parentName:"li",href:"https://downloads.circuitpython.org/bin/feather_m4_can/en_US/adafruit-circuitpython-feather_m4_can-en_US-7.3.3.uf2"},"Download CircuitPython 7.3.3 - Feather M4 CAN")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy (drag & drop) the UF2 file onto the feather mounted in ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOTLOADER")," mode.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It should automatically update and remount as ",(0,r.kt)("inlineCode",{parentName:"p"},"CIRCUITPY")))),(0,r.kt)("h4",{id:"flash-uf2-by-command-line"},"Flash UF2 by command line"),(0,r.kt)("p",null,"These instructions show how to copy (flash) the UF2 file onto the Feather\nfrom the cloned ",(0,r.kt)("inlineCode",{parentName:"p"},"amiga-dev-kit")," repo, for each OS."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"From a terminal, use the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/<to_your_base_directory>/amiga-dev-kit\ncp circuitpy/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 \\\n/media/$USERNAME/FTHRCANBOOT/\n"))),(0,r.kt)(i.Z,{value:"macos",label:"MacOs",mdxType:"TabItem"},(0,r.kt)("p",null,"In your system (or PyCharm) terminal, use the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/<to_your_base_directory>/amiga-dev-kit\ncp circuitpy/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 \\\n/Volumes/FTHRCANBOOT\n"))),(0,r.kt)(i.Z,{value:"wsl",label:"WSL",mdxType:"TabItem"},(0,r.kt)("p",null,"From a terminal, use the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/<to_your_base_directory>/amiga-dev-kit\n# mount the feather in wsl with 'd', assuming the feather is presenting as the D: drive on windows.\n# Use the corresponding letter to the mounted drive.\nsudo ./mnt_feather_wsl.sh d\ncp circuitpy/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 /mnt/d/\n")))),(0,r.kt)("h3",{id:"on-subsequent-connection"},"On subsequent connection"),(0,r.kt)("p",null,"When attaching a previously flashed Feather M4 device, it should automatically mount as ",(0,r.kt)("inlineCode",{parentName:"p"},"CIRCUITPY"),".\nYou can always check the our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit/tree/main/circuitpy/feather_m4_can/uf2s"},"farm-ng adk uf2 dir")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://circuitpython.org/board/feather_m4_can/"},"Feather M4 CAN UF2 page")," for future stable & experimental releases."),(0,r.kt)("h2",{id:"loading-code-on-the-feather"},"Loading code on the Feather"),(0,r.kt)("p",null,"Now that you have a flashed Feather, time to load some code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," folder from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit/tree/main/circuitpy"},(0,r.kt)("inlineCode",{parentName:"a"},"amiga-dev-kit/circuitpy/"))," to the root of the Feather. The contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," are automatically added to your python path on the microcontroller.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Attach a serial terminal to the feather, so you can see std out."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"screen /dev/ttyACM0\n"))),(0,r.kt)(i.Z,{value:"macos",label:"MacOs",mdxType:"TabItem"},(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use autocomplete to get the correct usb modem ",(0,r.kt)("inlineCode",{parentName:"p"},".../tty.usb[tab_for_autocomplete]"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"screen /dev/tty./dev/tty.usbmodem14201\n")))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Mu is the recommended serial console program by adafruit on their ",(0,r.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console"},"CircuitPython serial console page"),".\nMu has a built in plotter for tuples printed to the serial console (print statements in the python code on your microcontroller)."),(0,r.kt)("p",{parentName:"admonition"},"We've found that Mu can be a little unstable and freezes occasionally,\nso we'd recommend checking out their links for the \"advanced\" serial console:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-windows"},"Windows serial console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-linux"},"Linux serial console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-mac-and-linux"},"Mac serial console"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now add a ",(0,r.kt)("inlineCode",{parentName:"p"},"code.py")," file to the root of the Feather drive. Try one of the examples found in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/examples-index"},"Examples index"),", such as the ",(0,r.kt)("a",{parentName:"p",href:"./../examples/hello_main_loop/"},"Hello MainLoop example"),"."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The feather should automatically reload when you drop any new code onto it."),(0,r.kt)("p",{parentName:"admonition"},"The feather automatically runs the file named ",(0,r.kt)("inlineCode",{parentName:"p"},"code.py"),"\nand adds the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," directory to the python path.")),(0,r.kt)("p",null,"You can also reload through the serial console by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cancelling the current execution with ",(0,r.kt)("inlineCode",{parentName:"li"},"crtl+C")),(0,r.kt)("li",{parentName:"ul"},"Reloading with ",(0,r.kt)("inlineCode",{parentName:"li"},"ctrl+D"))),(0,r.kt)("h1",{id:"feather-m4-references"},"Feather M4 references"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials"},"Adafruit CircuitPython programming guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/adafruit-feather-m4-can-express"},"Adafruit Feather M4 CAN Express")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/adafruit-feather-m4-can-express/circuitpython-on-feather-m4-can"},"CircuitPython on Feather M4 CAN"))))}h.isMDXComponent=!0}}]);