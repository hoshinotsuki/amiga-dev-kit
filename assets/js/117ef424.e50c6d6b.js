"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9392],{5760:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));t(1839);const i={id:"camera-stream",title:"04 - Camera Stream"},o="Camera Stream",s={unversionedId:"examples/virtual_joystick/camera-stream",id:"examples/virtual_joystick/camera-stream",title:"04 - Camera Stream",description:"Add a camera stream",source:"@site/docs/examples/virtual_joystick/04_camera_stream.md",sourceDirName:"examples/virtual_joystick",slug:"/examples/virtual_joystick/camera-stream",permalink:"/docs/examples/virtual_joystick/camera-stream",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/virtual_joystick/04_camera_stream.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"camera-stream",title:"04 - Camera Stream"},sidebar:"examples",previous:{title:"03 - Canbus Stream",permalink:"/docs/examples/virtual_joystick/canbus-stream"},next:{title:"05 - Virtual Joystick Widget",permalink:"/docs/examples/virtual_joystick/virtual-joystick-widget"}},m={},l=[{value:"Add a camera stream",id:"add-a-camera-stream",level:3},{value:"imports",id:"imports",level:4},{value:"TabbedPanel of Image widgets",id:"tabbedpanel-of-image-widgets",level:4},{value:"command line args",id:"command-line-args",level:4},{value:"app_func",id:"app_func",level:4},{value:"stream_camera",id:"stream_camera",level:4},{value:"entry.sh",id:"entrysh",level:4},{value:"Run the app - camera stream",id:"run-the-app---camera-stream",level:3}],p={toc:l};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"camera-stream"},"Camera Stream"),(0,r.kt)("h3",{id:"add-a-camera-stream"},"Add a camera stream"),(0,r.kt)("p",null,"The next thing we'll add to our app is a camera stream.\nThis will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"OakCameraClient")))),(0,r.kt)("li",{parentName:"ul"},"Display images as kivy ",(0,r.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.label.html"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Image")))," widgets in a ",(0,r.kt)("inlineCode",{parentName:"li"},"TabbedPanel"),".")),(0,r.kt)("h4",{id:"imports"},"imports"),(0,r.kt)("p",null,"The imports we need to add for this step are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"import io\n\nfrom farm_ng.oak import oak_pb2\nfrom farm_ng.oak.camera_client import OakCameraClient\nfrom farm_ng.oak.camera_client import OakCameraClientConfig\n\nfrom kivy.core.image import Image as CoreImage  # noqa: E402\n")),(0,r.kt)("admonition",{title:"Reminder",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Remember to place all kivy imports below the ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.set(...)")," lines!")),(0,r.kt)("p",null,"Here we add another import from our ",(0,r.kt)("a",{parentName:"p",href:"#farm-ng-libraries"},(0,r.kt)("strong",{parentName:"a"},"farm-ng libraries")),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"farm_ng.oak")," is also defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga"},(0,r.kt)("strong",{parentName:"a"},"farm_ng_amiga"))," package."),(0,r.kt)("h4",{id:"tabbedpanel-of-image-widgets"},"TabbedPanel of Image widgets"),(0,r.kt)("p",null,"BoxLayout\nTo conveniently package the 4 image streams from the oak camera in the kivy ",(0,r.kt)("inlineCode",{parentName:"p"},"Window"),", we will add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," widgets as a ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel"),".\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," will be convenient to stack the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," of image streams next to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Labels")," displaying the ",(0,r.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," values streamed from the canbus.\nSo we push the ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," widgets one level deeper and add an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," level."),(0,r.kt)("p",null,"So we will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," that stacks 2 sub-widgets horizontally (by default) of:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Another ",(0,r.kt)("inlineCode",{parentName:"li"},"BoxLayout")," with 3 vertically stacked labels"),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"TabbedPanel"))),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," is used to select between different pages, which in our case is 4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," Widgets."),(0,r.kt)("p",null,"Our kivy string becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},'kv = """\nRelativeLayout:\n    Button:\n        id: back_btn_layout\n        pos_hint: {"x": 0.0, "top": 1.0}\n        background_color: 0, 0, 0, 0\n        size_hint: 0.1, 0.1\n        background_normal: "assets/back_button.png"\n        on_release: app.on_exit_btn()\n        Image:\n            source: "assets/back_button_normal.png" \\\n            if self.parent.state == "normal" \\\n            else "assets/back_button_down.png"\n            pos: self.parent.pos\n            size: self.parent.size\n    BoxLayout:\n        BoxLayout:\n            size_hint_x: 0.3\n            orientation: \'vertical\'\n            Label:\n                text: "state:\\\\n" + str(app.amiga_state)\n            Label:\n                text: "speed:\\\\n" + str(app.amiga_speed) + "  [m/s]"\n            Label:\n                text: "angular rate:\\\\n" + str(app.amiga_rate) + "  [rad/s]"\n        TabbedPanel:\n            do_default_tab: False\n            TabbedPanelItem:\n                text: "Rgb"\n                Image:\n                    id: rgb\n            TabbedPanelItem:\n                text: "Disparity"\n                Image:\n                    id: disparity\n            TabbedPanelItem:\n                text: "Left"\n                Image:\n                    id: left\n            TabbedPanelItem:\n                text: "Right"\n                Image:\n                    id: right\n"""\n')),(0,r.kt)("p",null,"We add the ",(0,r.kt)("inlineCode",{parentName:"p"},"size_hint_x: 0.3")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," widgets so that the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," gets 70% of the width of the parent layer ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," widgets get 30% of the width."),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel"),", we do not need a ",(0,r.kt)("inlineCode",{parentName:"p"},"default_tab")," and we assign the ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," each tab will display."),(0,r.kt)("p",null,"In the Python app, we can access a ",(0,r.kt)("inlineCode",{parentName:"p"},"Widget")," directly using the widget ",(0,r.kt)("inlineCode",{parentName:"p"},"id:")," as in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']\n")),(0,r.kt)("p",null,"So we assign each ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," widget an id so it can be easily referenced in the ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reference: ",(0,r.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html"},(0,r.kt)("strong",{parentName:"a"},"TabbedPanel"))),(0,r.kt)("li",{parentName:"ul"},"Reference: ",(0,r.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.image.html"},(0,r.kt)("strong",{parentName:"a"},"Image")))),(0,r.kt)("h4",{id:"command-line-args"},"command line args"),(0,r.kt)("p",null,"We will need two additional command line arguments for the camera stream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},'parser.add_argument(\n    "--camera-port", type=int, required=True, help="The grpc port where the camera service is running."\n)\nparser.add_argument("--stream-every-n", type=int, default=1, help="Streaming frequency (used to skip frames)")\n')),(0,r.kt)("p",null,"These ",(0,r.kt)("inlineCode",{parentName:"p"},"--camera-port")," arg is used by gRPC to link client to server and is handled by ",(0,r.kt)("inlineCode",{parentName:"p"},"entry.sh"),".\nThe camera client uses the same ",(0,r.kt)("inlineCode",{parentName:"p"},"--address")," arg as the canbus client."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--stream-every-n")," flag can be used to skip frames, effectively lowering the frame rate, in case you implement image processing that cannot keep up with full frame rate.\nUntil then, it's recommended to leave it at 1 so every frame is streamed unless processing every frame."),(0,r.kt)("p",null,"Be sure to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualJoystickApp")," constructor as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"def __init__(self, address: str, camera_port: int, canbus_port: int, stream_every_n: int) -> None:\n    super().__init__()\n    self.address: int = address\n    self.camera_port: int = camera_port\n    self.canbus_port: int = canbus_port\n    self.stream_every_n: int = stream_every_n\n")),(0,r.kt)("p",null,"and correspondingly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"loop.run_until_complete(\n    VirtualJoystickApp(args.address, args.camera_port, args.canbus_port, args.stream_every_n).app_func()\n)\n")),(0,r.kt)("h4",{id:"app_func"},"app_func"),(0,r.kt)("p",null,"Add to the ",(0,r.kt)("inlineCode",{parentName:"p"},"app_func()")," in the same way as for the ",(0,r.kt)("inlineCode",{parentName:"p"},"canbus_client"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"# configure the camera client\ncamera_config: OakCameraClientConfig = OakCameraClientConfig(address=self.address, port=self.camera_port)\ncamera_client: OakCameraClient = OakCameraClient(camera_config)\n\n# Camera task(s)\nself.async_tasks.append(asyncio.ensure_future(self.stream_camera(camera_client)))\nself.async_tasks.append(asyncio.ensure_future(camera_client.poll_service_state()))\n")),(0,r.kt)("h4",{id:"stream_camera"},"stream_camera"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},'async def stream_camera(self, client: OakCameraClient) -> None:\n    """This task listens to the camera client\'s stream and populates the tabbed panel with all 4 image streams\n    from the oak camera."""\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    response_stream: Optional[Generator[oak_pb2.StreamFramesReply]] = None\n\n    while True:\n        while client.state.value != oak_pb2.OakServiceState.RUNNING:\n            # start the streaming service\n            await client.connect_to_service()\n\n        if response_stream is None:\n            # get the streaming object\n            response_stream = client.stream_frames(every_n=self.stream_every_n)\n\n        response: oak_pb2.StreamFramesReply = await response_stream.read()\n        if response and response.status == oak_pb2.ReplyStatus.OK:\n            # get the sync frame\n            frame: oak_pb2.OakSyncFrame = response.frame\n\n            # get image and show\n            for view_name in ["rgb", "disparity", "left", "right"]:\n                self.root.ids[view_name].texture = CoreImage(\n                    io.BytesIO(getattr(frame, view_name).image_data), ext="jpg"\n                ).texture\n        await asyncio.sleep(0.01)\n')),(0,r.kt)("p",null,"This task listens to the camera client's stream and populates the tabbed panel with all 4 image streams from the oak camera.\nYou'll see a lot of similarity to ",(0,r.kt)("a",{parentName:"p",href:"#stream_canbus"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"stream_canbus"))),', as this task is also connecting to a "server streaming" RPC.'),(0,r.kt)("p",null,"The first obvious difference you'll notice is the use of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto"},(0,r.kt)("strong",{parentName:"a"},"oak.proto"))," definitions rather than canbus protos."),(0,r.kt)("p",null,"Next, when creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"response_stream")," we wrap the stub call with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"stream_frames()"))),", but in practice the same thing is happening.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamFramesRequest")," does take an argument called ",(0,r.kt)("inlineCode",{parentName:"p"},"every_n")," which is used to skip frames if you want to throttle the rate of images in the stream.\nYou can change this value with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--stream-every-n")," command line argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},'# get image and show\nfor view_name in ["rgb", "disparity", "left", "right"]:\n    self.root.ids[view_name].texture = CoreImage(\n        io.BytesIO(getattr(frame, view_name).image_data), ext="jpg"\n    ).texture\n')),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamFramesReply")," comes in, for each loop, we update the images displayed in the kivy ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," of our app.\nWe've matched the tab ",(0,r.kt)("inlineCode",{parentName:"p"},"id:")," name to the frame names coming from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"OakService"))),", as defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"OakSyncFrame"),", so we can easily match tab to image type by stepping through a list."),(0,r.kt)("admonition",{title:"Reminder",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We can access a ",(0,r.kt)("inlineCode",{parentName:"p"},"Widget")," directly using the widget ",(0,r.kt)("inlineCode",{parentName:"p"},"id:")," as in"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']\n"))),(0,r.kt)("p",null,"We assign the kivy ",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.uix.image.html#kivy.uix.image.Image.texture"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Image.texture")))," the kivy ",(0,r.kt)("inlineCode",{parentName:"p"},"CoreImage.texture")," from the unpacked jpg images streamed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"OakService"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"await asyncio.sleep(0.01)\n")),(0,r.kt)("p",null,"Lastly, we sleep for our default duration of 10ms before the next iteration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reference: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py"},(0,r.kt)("strong",{parentName:"a"},"farm_ng.oak.camera_client"))),(0,r.kt)("li",{parentName:"ul"},"Reference: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto"},(0,r.kt)("strong",{parentName:"a"},"oak.proto")))),(0,r.kt)("h4",{id:"entrysh"},"entry.sh"),(0,r.kt)("admonition",{title:"coming soon",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Instructions for editing entry.sh to automatically use these args")),(0,r.kt)("p",null,"For now, just hard code the values in ",(0,r.kt)("inlineCode",{parentName:"p"},"entry.sh")," to match the ",(0,r.kt)("inlineCode",{parentName:"p"},"launcher_configuration.json"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"entry.sh")," should become:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#!/bin/bash -ex\nDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"\n\n$DIR/bootstrap.sh $DIR $DIR/venv\n\n$DIR/venv/bin/python $DIR/main.py --canbus-port 50060 --camera-port 50051\n\nexit 0\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you changed the camera port of ",(0,r.kt)("inlineCode",{parentName:"p"},"Oak0")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"launcher_configuration.json"),", or want to use a different oak device, hard code the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," value.")),(0,r.kt)("h3",{id:"run-the-app---camera-stream"},"Run the app - camera stream"),(0,r.kt)("p",null,"Now sync the app to the Brain and launch it with the following instructions!"),(0,r.kt)("admonition",{title:"Deploy Instructions",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/brain/brain-apps"},(0,r.kt)("strong",{parentName:"a"},"Deploy Instructions"))," for syncing the app onto the Amiga Brain.")),(0,r.kt)("p",null,"You should now see camera stream to the right of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," values from the canbus.\nCheck all four tabs to investigate the different camera streams provided by the oak camera."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/200481937-5fc317bc-614d-4446-89f5-9df70471c3f6.png",alt:"camera_stream"})),(0,r.kt)("admonition",{title:"Coming soon",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Link to this checkpoint")))}d.isMDXComponent=!0}}]);