"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4884],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),o=n(7294),i=n(6010),l=n(2389),r=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:p,values:h,groupId:b,className:g}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,r.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===p?p:null!=(t=null!=p?p:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[I,T]=(0,o.useState)(v),D=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==I&&y.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=D.indexOf(t),a=y[n].value;a!==I&&(x(t),T(a),null!=b&&N(b,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{var a;const t=D.indexOf(e.currentTarget)+1;n=null!=(a=D[t])?a:D[0];break}case"ArrowLeft":{var o;const t=D.indexOf(e.currentTarget)-1;n=null!=(o=D[t])?o:D[D.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>D.push(e),onKeyDown:A,onClick:E},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(k.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function p(e){const t=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},3262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),i=(n(1839),n(5488)),l=n(5162);const r={id:"contribute-website",title:"Documentation"},s="Building these Docs",u={unversionedId:"contribute/contribute-website",id:"contribute/contribute-website",title:"Documentation",description:"In order to work locally on your machine and contribute to these docs, you will need to install the build infrastructure.",source:"@site/docs/contribute/website.mdx",sourceDirName:"contribute",slug:"/contribute/contribute-website",permalink:"/docs/contribute/contribute-website",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/contribute/website.mdx",tags:[],version:"current",frontMatter:{id:"contribute-website",title:"Documentation"},sidebar:"contribute"},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Adding images to the website",id:"adding-images-to-the-website",level:2},{value:"Local Development",id:"local-development",level:2},{value:"Building the docs",id:"building-the-docs",level:3},{value:"Start yarn",id:"start-yarn",level:3},{value:"Gussy up your Markdown",id:"gussy-up-your-markdown",level:2},{value:"Pre-commit formatting workflow",id:"pre-commit-formatting-workflow",level:2},{value:"<strong>Thank you for your help building this community!</strong>",id:"thank-you-for-your-help-building-this-community",level:3},{value:"The documentation website is built using Docusaurus 2.",id:"the-documentation-website-is-built-using-docusaurus-2",level:6}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-these-docs"},"Building these Docs"),(0,o.kt)("p",null,"In order to work locally on your machine and contribute to these docs, you will need to install the build infrastructure."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You can edit the documentation directly on github and do not need to fuss with things here!\nFollow instructions below for adding images to the website, it's the same for text.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use docusaurus locally you'll need to install a couple libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js version 16.14 or above (which can be checked by running ",(0,o.kt)("inlineCode",{parentName:"li"},"node -v"),")"),(0,o.kt)("li",{parentName:"ul"},"Yarn >= 1.22.19")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},"Install NVM / nodejs",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash\nsource ~/.bashrc\n\n# Verify install\nnvm --version\n\n# Install node\nnvm install node\n")),(0,o.kt)("p",null,"Install yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install npm\nsudo npm install -g yarn\n\n# Check version\nyarn --version\n"))),(0,o.kt)(l.Z,{value:"macos",label:"MacOs",mdxType:"TabItem"},"Install npm",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install npm\n")),(0,o.kt)("p",null,"Install yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install yarn\n# yes, use a package manager to install a package manager... ;)\n")))),(0,o.kt)("h2",{id:"adding-images-to-the-website"},"Adding images to the website"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are already working in an active branch, this process works for branched versions of markdown files.\nIf you are not, you will be prompted to create a new branch with your edits (to open a pull request) or commit the edits directly.")),(0,o.kt)("p",null,"We want to keep this repository as lightweight as possible.\nFor this reason, please do not add any images to the filesystem of this repository.\nIf you'd like to add an image, you should edit the README\nonline through Github by:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Press the edit button in the top right corner of the markdown file"),(0,o.kt)("li",{parentName:"ol"},"Drag & drop an image into the markdown file you are editing."),(0,o.kt)("li",{parentName:"ol"},"A link to the image should be automatically generated and formattedin the markdown file.")),(0,o.kt)("p",null,"The generated link should look something like: ",(0,o.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg"},"https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are also editing the file locally, you should add the image to the branch you are actively editing.\nRecommend committing your changes before adding the image to avoid merge conflicts, and using ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull")," to pull in the changes to your local branch before continuing to edit.")),(0,o.kt)("admonition",{title:"farm-ng employees",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please back up the images you add to the website in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Website/Assets/")," directory of our shared drive.")),(0,o.kt)("h2",{id:"local-development"},"Local Development"),(0,o.kt)("p",null,"After successful installation and working in the amiga-dev-kit github repo, you'll be able to pull down the latest, create a branch, and send pull requests just as you would editing any repo."),(0,o.kt)("p",null,"After making your edits, you will build the docs locally in order to preview them before committing and pushing.  Following the steps below,\nyou would be able to start a local development server that opens a browser window and gives you a live preview of the page you are editing!  It will automatically update every time you save."),(0,o.kt)("h3",{id:"building-the-docs"},"Building the docs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd website/  # /farm-ng/amiga-dev-kit/website\npip install -r requirements.txt\nyarn\n./run_pydoc-markdown.sh\nyarn build\n")),(0,o.kt)("p",null,"This command generates static content into the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."),(0,o.kt)("h3",{id:"start-yarn"},"Start yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This command starts a local development server and opens up a browser window.\nMost changes are reflected live without having to restart the server.")),(0,o.kt)("h2",{id:"gussy-up-your-markdown"},"Gussy up your Markdown"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can make your work more legible using ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"admonitions")," like this TIP box!")),(0,o.kt)("p",null,"More markdown features can be found in the docusaurus documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"here"),"."),(0,o.kt)("h2",{id:"pre-commit-formatting-workflow"},"Pre-commit formatting workflow"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You may need to install pre-commit, instructions can be found ",(0,o.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"here"))),(0,o.kt)("p",null,"A typical workflow for committing your code changes may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git add -p # Add the changes I want\npre-commit run --all-files\ngit add -p # Add the formatting changes the check just fixed\npre-commit run --all-files # double check for any formatting issues not resolved automatically (e.g., spellcheck)\ngit commit -m "foo bar baz"\ngit push\n')),(0,o.kt)("h3",{id:"thank-you-for-your-help-building-this-community"},(0,o.kt)("strong",{parentName:"h3"},"Thank you for your help building this community!")),(0,o.kt)("h6",{id:"the-documentation-website-is-built-using-docusaurus-2"},"The documentation website is built using ",(0,o.kt)("a",{parentName:"h6",href:"https://docusaurus.io/"},"Docusaurus 2"),"."))}p.isMDXComponent=!0}}]);