(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[210],{2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7462),a=n(7294),l=n(6010),r=n(5999),c=n(6668);const s="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();return"h1"!==t&&n?a.createElement(t,(0,o.Z)({},u,{className:(0,l.Z)("anchor",m?i:s),id:n}),u.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,o.Z)({},u,{id:void 0}))}},210:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var o=n(7294),a=n(3905),l=n(7462),r=n(5742);var c=n(2389),s=n(6010),i=n(2949),u=n(6668);function m(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var d=n(5281),p=n(7594),h=n.n(p);const f=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function v(e,t){const n=e.map((e=>{const{start:n,end:o}=y[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function b(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:a,metastring:l}=t;if(l&&g.test(l)){const e=l.match(g).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=a[0].className,o=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"],t);case"jsx":case"tsx":return v(["js","jsBlock","jsx"],t);case"html":return v(["js","jsBlock","html"],t);case"python":case"py":case"bash":return v(["bash"],t);case"markdown":case"md":return v(["html","jsx","bash"],t);default:return v(Object.keys(y),t)}}(o,a),c=n.split("\n"),s=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=p+",":u[t]?s[u[t]].start=p:m[t]&&(s[m[t]].range+=s[m[t]].start+"-"+(p-1)+","),c.splice(p,1)}n=c.join("\n");const d={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{null!=d[e]||(d[e]=[]),d[e].push(t)}))})),{lineClassNames:d,code:n}}const E="codeBlockContainer_Ckt0";function k(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,a]=e;const l=t[o];l&&"string"==typeof a&&(n[l]=a)})),n}(m());return o.createElement(t,(0,l.Z)({},n,{style:a,className:(0,s.Z)(n.className,E,d.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function C(e){let{children:t,className:n}=e;return o.createElement(k,{as:"pre",tabIndex:0,className:(0,s.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:N.codeBlockLines},t))}var B=n(902);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,t){const[n,a]=(0,o.useState)(),l=(0,o.useCallback)((()=>{var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,o.useEffect)((()=>{l()}),[l]),function(e,t,n){void 0===n&&(n=w);const a=(0,B.zX)(t),l=(0,B.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,l),()=>t.disconnect()}),[e,a,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var Z={Prism:n(7410).Z,theme:L};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},j.apply(this,arguments)}var _=/\r\n|\r|\n/,S=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},A=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=j({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=j({},n,{backgroundColor:null}),a};function I(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const M=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),x(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?A(e.theme,e.language):void 0;return t.themeDict=n})),x(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,l=j({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(l.style=r.plain),void 0!==a&&(l.style=void 0!==l.style?j({},l.style,a):a),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),x(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return l[n[0]];var r=o?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[r].concat(c))}})),x(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,l=e.token,r=j({},I(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(r.style=void 0!==r.style?j({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),x(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,l=this.getThemeDict(this.props),r=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],l=0,r=0,c=[],s=[c];r>-1;){for(;(l=o[r]++)<a[r];){var i=void 0,u=t[r],m=n[r][l];if("string"==typeof m?(u=r>0?u:["plain"],i=m):(u=z(u,m.type),m.alias&&(u=z(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(_),p=d.length;c.push({types:u,content:d[0]});for(var h=1;h<p;h++)S(c),s.push(c=[]),c.push({types:u,content:d[h]})}else r++,t.push(u),n.push(i),o.push(0),a.push(i.length)}r--,t.pop(),n.pop(),o.pop(),a.pop()}return S(c),s}(void 0!==r?this.tokenize(t,o,r,n):[o]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),O="codeLine_lJS_",H="codeLineNumber_Tfdd",P="codeLineContent_feaV";function V(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:r,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=r({line:t,className:(0,s.Z)(n,a&&O)}),u=t.map(((e,t)=>o.createElement("span",(0,l.Z)({key:t},c({token:e,key:t})))));return o.createElement("span",i,a?o.createElement(o.Fragment,null,o.createElement("span",{className:H}),o.createElement("span",{className:P},u)):o.createElement(o.Fragment,null,u,o.createElement("br",null)))}var D=n(5999);const R={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function W(e){let{code:t,className:n}=e;const[a,l]=(0,o.useState)(!1),r=(0,o.useRef)(void 0),c=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),r&&(l.removeAllRanges(),l.addRange(r)),a&&a.focus()}(t),l(!0),r.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),o.createElement("button",{type:"button","aria-label":a?(0,D.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,D.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,D.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,R.copyButton,a&&R.copyButtonCopied),onClick:c},o.createElement("span",{className:R.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:R.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:R.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const F="wordWrapButtonIcon_Bwma",q="wordWrapButtonEnabled_EoeP";function G(e){let{className:t,onClick:n,isEnabled:a}=e;const l=(0,D.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,a&&q),"aria-label":l,title:l},o.createElement("svg",{className:F,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function U(e){var t;let{children:n,className:a="",metastring:r,title:c,showLineNumbers:i,language:d}=e;const{prism:{defaultLanguage:p,magicComments:h}}=(0,u.L)(),g=null!=(t=null!=d?d:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(a))?t:p,y=m(),v=function(){const[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)(!1),l=(0,o.useRef)(null),r=(0,o.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[l,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");a(n)}),[l]);return T(l,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:r}}(),E=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(f))?void 0:n.groups.title)?t:""}(r)||c,{lineClassNames:C,code:B}=b(n,{metastring:r,language:g,magicComments:h}),w=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(r);return o.createElement(k,{as:"div",className:(0,s.Z)(a,g&&!a.includes("language-"+g)&&"language-"+g)},E&&o.createElement("div",{className:N.codeBlockTitle},E),o.createElement("div",{className:N.codeBlockContent},o.createElement(M,(0,l.Z)({},Z,{theme:y,code:B,language:null!=g?g:"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:l}=e;return o.createElement("pre",{tabIndex:0,ref:v.codeBlockRef,className:(0,s.Z)(t,N.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,s.Z)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(V,{key:t,line:e,getLineProps:a,getTokenProps:l,classNames:C[t],showLineNumbers:w})))))})),o.createElement("div",{className:N.buttonGroup},(v.isEnabled||v.isCodeScrollable)&&o.createElement(G,{className:N.codeButton,onClick:()=>v.toggle(),isEnabled:v.isEnabled}),o.createElement(W,{className:N.codeButton,code:B}))))}function $(e){let{children:t,...n}=e;const a=(0,c.Z)(),r=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof r?U:C;return o.createElement(s,(0,l.Z)({key:String(a)},n),r)}var Y=n(9960);var Q=n(6043);const J="details_lb9f",K="isBrowser_bmU9",X="collapsibleContent_i85q";function ee(e){return!!e&&("SUMMARY"===e.tagName||ee(e.parentElement))}function te(e,t){return!!e&&(e===t||te(e.parentElement,t))}function ne(e){let{summary:t,children:n,...a}=e;const r=(0,c.Z)(),i=(0,o.useRef)(null),{collapsed:u,setCollapsed:m}=(0,Q.u)({initialState:!a.open}),[d,p]=(0,o.useState)(a.open);return o.createElement("details",(0,l.Z)({},a,{ref:i,open:d,"data-collapsed":u,className:(0,s.Z)(J,r&&K,a.className),onMouseDown:e=>{ee(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ee(t)&&te(t,i.current)&&(e.preventDefault(),u?(m(!1),p(!0)):m(!0))}}),null!=t?t:o.createElement("summary",null,"Details"),o.createElement(Q.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},o.createElement("div",{className:X},n)))}const oe="details_b_Ee";function ae(e){let{...t}=e;return o.createElement(ne,(0,l.Z)({},t,{className:(0,s.Z)("alert alert--info",oe,t.className)}))}var le=n(2503);function re(e){return o.createElement(le.Z,e)}const ce="containsTaskList_mC6p";const se="img_ev3q";const ie="admonition_LlT9",ue="admonitionHeading_tbUL",me="admonitionIcon_kALy",de="admonitionContent_S0QG";const pe={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(D.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(D.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(D.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(D.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(D.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},he={secondary:"note",important:"info",success:"tip",warning:"danger"};function fe(e){var t;const{mdxAdmonitionTitle:n,rest:a}=function(e){const t=o.Children.toArray(e),n=t.find((e=>{var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:a}}const ge={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return o.createElement(e.props.originalType,a)}return e}(e):e));return o.createElement(r.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return o.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?o.createElement("code",e):o.createElement($,e)},a:function(e){return o.createElement(Y.Z,e)},pre:function(e){var t;return o.createElement($,(0,o.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>{var t;return o.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(ae,(0,l.Z)({},e,{summary:n}),a)},ul:function(e){return o.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&ce))}));var t},img:function(e){return o.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,se))}));var t},h1:e=>o.createElement(re,(0,l.Z)({as:"h1"},e)),h2:e=>o.createElement(re,(0,l.Z)({as:"h2"},e)),h3:e=>o.createElement(re,(0,l.Z)({as:"h3"},e)),h4:e=>o.createElement(re,(0,l.Z)({as:"h4"},e)),h5:e=>o.createElement(re,(0,l.Z)({as:"h5"},e)),h6:e=>o.createElement(re,(0,l.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:l}=fe(e),r=function(e){var t;const n=null!=(t=he[e])?t:e;return pe[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),pe.info)}(n),c=null!=a?a:r.label,{iconComponent:i}=r,u=null!=l?l:o.createElement(i,null);return o.createElement("div",{className:(0,s.Z)(d.k.common.admonition,d.k.common.admonitionType(e.type),"alert","alert--"+r.infimaClassName,ie)},o.createElement("div",{className:ue},o.createElement("span",{className:me},u),c),o.createElement("div",{className:de},t))}};function ye(e){let{children:t}=e;return o.createElement(a.Zo,{components:ge},t)}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,l]=t;if(o&&l){o=parseInt(o),l=parseInt(l);const e=o<l?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(l+=e);for(let t=o;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);