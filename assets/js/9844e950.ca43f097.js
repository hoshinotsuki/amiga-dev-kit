"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1622],{5996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));a(1839);const o={id:"brain-apps",title:"Developing Custom Applications"},s="Developing Custom Applications",r={unversionedId:"brain/brain-apps",id:"brain/brain-apps",title:"Developing Custom Applications",description:"Quick Tips",source:"@site/docs/brain/custom-applications.md",sourceDirName:"brain",slug:"/brain/brain-apps",permalink:"/docs/brain/brain-apps",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/brain/custom-applications.md",tags:[],version:"current",frontMatter:{id:"brain-apps",title:"Developing Custom Applications"},sidebar:"docs",previous:{title:"Install",permalink:"/docs/brain/brain-install"},next:{title:"Basic Electronics Tool Kit",permalink:"/docs/hardware-tools/etools"}},l={},p=[{value:"Quick Tips",id:"quick-tips",level:4},{value:"Initial Configuration",id:"initial-configuration",level:4},{value:"Live Code Syncing",id:"live-code-syncing",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"developing-custom-applications"},"Developing Custom Applications"),(0,n.kt)("h4",{id:"quick-tips"},"Quick Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The Amiga user is able to install APT packages. Edit the "entry.sh" script in the sample git repository.'),(0,n.kt)("li",{parentName:"ul"},"We leverage a venv per application. The contents of requirements.txt will be installed by the bootstrap.sh script."),(0,n.kt)("li",{parentName:"ul"},'If you\'ve updated the requirements.txt remove the hidden ".lock" before relaunching the app from the Brain UI.'),(0,n.kt)("li",{parentName:"ul"},"You may use VSCode remote development/containers to edit directly on the Amiga brain as well.")),(0,n.kt)("h4",{id:"initial-configuration"},"Initial Configuration"),(0,n.kt)("p",null,"To make ssh easier, we'll add some configuration to our ssh on the workstation."),(0,n.kt)("p",null,"First add the following to your .ssh/config utilizing the IP addess displayed on the bottom right of the brain display:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Host amiga\n    HostName <ip address>\n    Port 22\n    User amiga\n    StrictHostKeyChecking no\n")),(0,n.kt)("p",null,"Let\u2019s copy our keys to the robot as well (you may need to do this any time you are working with a new robot)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    ssh-copy-id amiga\n")),(0,n.kt)("p",null,"Now you can ssh to the robot with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    ssh amiga\n    exit\n")),(0,n.kt)("p",null,'Open the "Hello World" workspace by ... You may use an alternate editor of your choice. If you do, the sample application for publishing an app is located at amiga-dev-kit/brain/examples/hello'),(0,n.kt)("p",null,"Using a terminal window, change to the git repository file cloned above."),(0,n.kt)("h4",{id:"live-code-syncing"},"Live Code Syncing"),(0,n.kt)("p",null,"Now we'll start a synchronization session that will mirror the code in this directory to an Apps directory (/data/apps) on the Amiga Brain. Note: This directory is persistent across reboots."),(0,n.kt)("p",null,"Our current sync process leverages Mutagen, the sync.sh script will set this up for you. Please provide your sudo password if required. This will copy the Mutagen binary and agents to your local filesystem.\nAdditional documentation regarding Mutagen may be viewed at: ",(0,n.kt)("a",{parentName:"p",href:"https://mutagen.io/documentation/introduction"},"Mutagen"),"."),(0,n.kt)("p",null,"To start the synchronization process in the background:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    ./sync.sh -s start\n")),(0,n.kt)("p",null,"To stop the synchronization process:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    ./sync.sh -s stop\n")),(0,n.kt)("p",null,"Finally to view the status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    ./sync.sh -s status\n")),(0,n.kt)("p",null,"While the sync process is running, any changes are mirrored to the Amiga Brain."),(0,n.kt)("p",null,'To test this process out, now that the current directory amiga-dev-kit/brain/examples/hello is being synchronized to your brain, lets trigger a refresh of the currently loaded apps by clicking on the "home" icon near the top right.'),(0,n.kt)("p",null,'Click on the new app labeled "Hello" on the Amiga Brain. After a brief moment (bootstrapping the app) the app wil load and you\'ll be greeting a a simple UI app. Close the app by clicking "Exit".'),(0,n.kt)("p",null,'On your workstation, open the "main.py" file in an editor and change the value for YOUR_NAME to be your name (i.e. joe dirt). Save the file and relaunch the app from the Amiga Brain. The text will now reflect your changes.'))}u.isMDXComponent=!0}}]);