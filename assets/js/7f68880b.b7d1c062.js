"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8238],{3905:function(t,e,l){l.d(e,{Zo:function(){return u},kt:function(){return d}});var a=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,a)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,a,n=function(t,e){if(null==t)return{};var l,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var l=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=p(l),d=n,m=k["".concat(s,".").concat(d)]||k[d]||c[d]||r;return l?a.createElement(m,i(i({ref:e},u),{},{components:l})):a.createElement(m,i({ref:e},u))}));function d(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=l.length,i=new Array(r);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<r;p++)i[p]=l[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}k.displayName="MDXCreateElement"},94629:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var a=l(87462),n=l(63366),r=(l(67294),l(3905)),i=["components"],o={id:"interfaces",title:"Interfaces",slug:"interfaces",sidebar_position:4},s=void 0,p={unversionedId:"graphql/interfaces",id:"graphql/interfaces",isDocsHomePage:!1,title:"Interfaces",description:"Aspect",source:"@site/genDocs/graphql/interfaces.md",sourceDirName:"graphql",slug:"/graphql/interfaces",permalink:"/docs/graphql/interfaces",editUrl:"https://github.com/datahub-project/datahub/blob/master/genDocs/graphql/interfaces.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"interfaces",title:"Interfaces",slug:"interfaces",sidebar_position:4},sidebar:"overviewSidebar",previous:{title:"Input objects",permalink:"/docs/graphql/inputObjects"},next:{title:"Unions",permalink:"/docs/graphql/unions"}},u=[{value:"Aspect",id:"aspect",children:[],level:2},{value:"Entity",id:"entity",children:[],level:2},{value:"EntityWithRelationships",id:"entitywithrelationships",children:[],level:2},{value:"TimeSeriesAspect",id:"timeseriesaspect",children:[],level:2}],c={toc:u};function k(t){var e=t.components,l=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"aspect"},"Aspect"),(0,r.kt)("p",null,"A versioned aspect, or single group of related metadata, associated with an Entity and having a unique version"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Implemented by")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#schemametadata"},"SchemaMetadata"))),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"version",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/scalars#long"},(0,r.kt)("code",null,"Long"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"The version of the aspect, where zero represents the latest version"))))),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"A top level Metadata Entity"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Implemented by")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataset"},"Dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#versioneddataset"},"VersionedDataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#glossaryterm"},"GlossaryTerm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#glossarynode"},"GlossaryNode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataplatform"},"DataPlatform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataplatforminstance"},"DataPlatformInstance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#container"},"Container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#corpuser"},"CorpUser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#corpgroup"},"CorpGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#tag"},"Tag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#notebook"},"Notebook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dashboard"},"Dashboard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#chart"},"Chart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataflow"},"DataFlow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#datajob"},"DataJob")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataprocessinstance"},"DataProcessInstance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#assertion"},"Assertion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodel"},"MLModel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodelgroup"},"MLModelGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeature"},"MLFeature")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlprimarykey"},"MLPrimaryKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeaturetable"},"MLFeatureTable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#domain"},"Domain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#accesstokenmetadata"},"AccessTokenMetadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/interfaces#entitywithrelationships"},"EntityWithRelationships"))),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"urn",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"A primary key of the Metadata Entity"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/enums#entitytype"},(0,r.kt)("code",null,"EntityType!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"A standard Entity Type"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"relationships",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/objects#entityrelationshipsresult"},(0,r.kt)("code",null,"EntityRelationshipsResult"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"List of relationships between the source Entity and some destination entities with a given types"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"input",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/inputObjects#relationshipsinput"},(0,r.kt)("code",null,"RelationshipsInput!"))),(0,r.kt)("td",null)))))))),(0,r.kt)("h2",{id:"entitywithrelationships"},"EntityWithRelationships"),(0,r.kt)("p",null,"Deprecated, use relationships field instead"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Implements")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/interfaces#entity"},"Entity"))),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Implemented by")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataset"},"Dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dashboard"},"Dashboard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#chart"},"Chart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataflow"},"DataFlow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#datajob"},"DataJob")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataprocessinstance"},"DataProcessInstance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#assertion"},"Assertion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodel"},"MLModel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodelgroup"},"MLModelGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeature"},"MLFeature")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlprimarykey"},"MLPrimaryKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeaturetable"},"MLFeatureTable"))),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"urn",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"A primary key associated with the Metadata Entity"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/enums#entitytype"},(0,r.kt)("code",null,"EntityType!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"A standard Entity Type"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"relationships",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/objects#entityrelationshipsresult"},(0,r.kt)("code",null,"EntityRelationshipsResult"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Granular API for querying edges extending from this entity"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"input",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/inputObjects#relationshipsinput"},(0,r.kt)("code",null,"RelationshipsInput!"))),(0,r.kt)("td",null)))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"lineage",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/objects#entitylineageresult"},(0,r.kt)("code",null,"EntityLineageResult"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Edges extending from this entity grouped by direction in the lineage graph"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"input",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/inputObjects#lineageinput"},(0,r.kt)("code",null,"LineageInput!"))),(0,r.kt)("td",null)))))))),(0,r.kt)("h2",{id:"timeseriesaspect"},"TimeSeriesAspect"),(0,r.kt)("p",null,"A time series aspect, or a group of related metadata associated with an Entity and corresponding to a particular timestamp"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Implemented by")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#dataprocessrunevent"},"DataProcessRunEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#datasetprofile"},"DatasetProfile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#assertionrunevent"},"AssertionRunEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/objects#operation"},"Operation"))),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"timestampMillis",(0,r.kt)("br",null),(0,r.kt)("a",{href:"/docs/graphql/scalars#long"},(0,r.kt)("code",null,"Long!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"The timestamp associated with the time series aspect in milliseconds"))))))}k.isMDXComponent=!0}}]);