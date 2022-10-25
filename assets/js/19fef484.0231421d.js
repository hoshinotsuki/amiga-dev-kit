"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[833],{9459:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));t(1839);const r={id:"camera-client-gui",title:"Camera Client GUI"},l=void 0,s={unversionedId:"examples/camera_client_gui/camera-client-gui",id:"examples/camera_client_gui/camera-client-gui",title:"Camera Client GUI",description:"Link to cameraclientgui/main.py",source:"@site/docs/examples/camera_client_gui/README.md",sourceDirName:"examples/camera_client_gui",slug:"/examples/camera_client_gui/",permalink:"/docs/examples/camera_client_gui/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/camera_client_gui/README.md",tags:[],version:"current",frontMatter:{id:"camera-client-gui",title:"Camera Client GUI"},sidebar:"examples",previous:{title:"Camera Client",permalink:"/docs/examples/camera_client/"}},m={},p=[{value:"Link to <code>camera_client_gui/main.py</code>",id:"link-to-camera_client_guimainpy",level:3},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:3},{value:"4. Customize the run",id:"4-customize-the-run",level:3}],c={toc:p};function o(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"link-to-camera_client_guimainpy"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/brain/examples/camera_client_gui/main.py"},"Link to ",(0,i.kt)("inlineCode",{parentName:"a"},"camera_client_gui/main.py"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/188124779-41f4d519-78d4-453e-9b90-b3d730762b81.gif",alt:"Peek 2022-09-02 12-46"})),(0,i.kt)("p",null,"This example implements the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/brain/farm_ng/oak/client#oakcameraclient-objects"},"OakCameraClient")," in a GUI application using ",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/"},"Kivy"),"."),(0,i.kt)("p",null,"The requirements to run this example are to have a ",(0,i.kt)("a",{parentName:"p",href:"/docs/brain/"},"farm-ng brain")," running Oak cameras and that your PC is on the same local network as the brain."),(0,i.kt)("h3",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,i.kt)("a",{parentName:"h3",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,i.kt)("h3",{id:"2-install-the-examples-dependencies"},"2. Install the example's dependencies"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the example in the brain ADK virtual environment.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're already in the amiga-dev-kit/ directory\ncd brain/examples/camera_client_gui\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,i.kt)("h3",{id:"3-execute-the-python-script"},"3. Execute the Python script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --port 50051\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, the camera address is assumed top be ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),".")),(0,i.kt)("h3",{id:"4-customize-the-run"},"4. Customize the run"),(0,i.kt)("p",null,"Let's have some fun and stream the camera to your laptop over the Wifi."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You need to discover the WiFi address of your Amiga Brain using the ",(0,i.kt)("inlineCode",{parentName:"p"},"WifiClient")," (coming soon)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --help\n\n# usage: amiga-camera-app [-h] --port PORT [--address ADDRESS] [--stream-every-n STREAM_EVERY_N]\n\n# optional arguments:\n#   -h, --help            show this help message and exit\n#   --port PORT           The camera port.\n#   --address ADDRESS     The camera address\n#   --stream-every-n STREAM_EVERY_N\n#                         Streaming frequency\n")),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --address 192.168.1.93 --port 50051\n")))}o.isMDXComponent=!0}}]);