"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4528],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),i=n(51048),l=n(22713);var o=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(12613),s=n(86010),c="tabItem_1uMI";function d(e){var t,n,r,i=e.lazy,l=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(v),O=w[0],C=w[1],T=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=y[f];null!=x&&x!==O&&h.some((function(e){return e.value===x}))&&C(x)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==O&&(j(t),C(r),null!=f&&N(f,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},m)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":O===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:E,onClick:E},null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},83196:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(37358),o=n(98448),u=["components"],s={title:"File",sidebar_label:"File",slug:"/generated/ingestion/sources/file",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md"},c="File",d={unversionedId:"docs/generated/ingestion/sources/file",id:"docs/generated/ingestion/sources/file",isDocsHomePage:!1,title:"File",description:"Module file",source:"@site/genDocs/docs/generated/ingestion/sources/file.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/file",permalink:"/docs/generated/ingestion/sources/file",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md",tags:[],version:"current",frontMatter:{title:"File",sidebar_label:"File",slug:"/generated/ingestion/sources/file",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md"},sidebar:"overviewSidebar",previous:{title:"File Based Lineage",permalink:"/docs/generated/ingestion/sources/file-based-lineage"},next:{title:"Glue",permalink:"/docs/generated/ingestion/sources/glue"}},p=[{value:"Module <code>file</code>",id:"module-file",children:[{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file"},"File"),(0,i.kt)("h2",{id:"module-file"},"Module ",(0,i.kt)("inlineCode",{parentName:"h2"},"file")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,i.kt)("p",null,"This plugin pulls metadata from a previously generated file. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/file"},"file sink")," can produce such files, and a number of samples are included in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/mce_files"},"examples/mce_files")," directory."),(0,i.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," source works out of the box with ",(0,i.kt)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,i.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: file\n  config:\n    # Coordinates\n    filename: ./path/to/mce/file.json\n\nsink:\n  # sink configs\n")),(0,i.kt)("h3",{id:"config-details"},"Config Details"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"View All Configuration Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filename"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to file to ingest."),(0,i.kt)("td",{parentName:"tr",align:null},"None")))))),(0,i.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "FileSourceConfig",\n  "type": "object",\n  "properties": {\n    "filename": {\n      "title": "Filename",\n      "description": "Path to file to ingest.",\n      "type": "string"\n    }\n  },\n  "required": [\n    "filename"\n  ],\n  "additionalProperties": false\n}\n')))),(0,i.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.file.GenericFileSource")),(0,i.kt)("li",{parentName:"ul"},"Browse on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/file.py"},"GitHub"))),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring ingestion for File, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);