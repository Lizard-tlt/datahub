"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[76],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},28903:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={title:"Restoring Search and Graph Indices from Local Database",sidebar_label:"Restoring Search and Graph Indices from Local Database",slug:"/how/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md"},s="Restoring Search and Graph Indices from Local Database",d={unversionedId:"docs/how/restore-indices",id:"docs/how/restore-indices",isDocsHomePage:!1,title:"Restoring Search and Graph Indices from Local Database",description:"If search or graph services go down or you have made changes to them that require reindexing, you can restore them from",source:"@site/genDocs/docs/how/restore-indices.md",sourceDirName:"docs/how",slug:"/how/restore-indices",permalink:"/docs/how/restore-indices",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md",tags:[],version:"current",frontMatter:{title:"Restoring Search and Graph Indices from Local Database",sidebar_label:"Restoring Search and Graph Indices from Local Database",slug:"/how/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Azure Authentication for React App (OIDC)",permalink:"/docs/how/auth/sso/configure-oidc-react-azure"},next:{title:"Timeline API",permalink:"/docs/dev-guides/timeline"}},l=[{value:"Docker-compose",id:"docker-compose",children:[],level:2},{value:"Kubernetes",id:"kubernetes",children:[],level:2}],u={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"restoring-search-and-graph-indices-from-local-database"},"Restoring Search and Graph Indices from Local Database"),(0,a.kt)("p",null,"If search or graph services go down or you have made changes to them that require reindexing, you can restore them from\nthe aspects stored in the local database."),(0,a.kt)("p",null,"When a new version of the aspect gets ingested, GMS initiates an MAE event for the aspect which is consumed to update\nthe search and graph indices. As such, we can fetch the latest version of each aspect in the local database and produce\nMAE events corresponding to the aspects to restore the search and graph indices."),(0,a.kt)("h2",{id:"docker-compose"},"Docker-compose"),(0,a.kt)("p",null,"Run the following command from root to send MAE for each aspect in the Local DB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./docker/datahub-upgrade/datahub-upgrade.sh -u RestoreIndices\n")),(0,a.kt)("p",null,"If you need to clear the search and graph indices before restoring, add ",(0,a.kt)("inlineCode",{parentName:"p"},"-a clean")," to the end of the command."),(0,a.kt)("p",null,"Refer to this ",(0,a.kt)("a",{parentName:"p",href:"/docs/docker/datahub-upgrade#environment-variables"},"doc")," on how to set environment variables\nfor your environment."),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get cronjobs")," to see if the restoration job template has been deployed. If you see results like below, you\nare good to go."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                                          SCHEDULE    SUSPEND   ACTIVE   LAST SCHEDULE   AGE\ndatahub-datahub-cleanup-job-template          * * * * *   True      0        <none>          2d3h\ndatahub-datahub-restore-indices-job-template  * * * * *   True      0        <none>          2d3h\n")),(0,a.kt)("p",null,"If not, deploy latest helm charts to use this functionality."),(0,a.kt)("p",null,"Once restore indices job template has been deployed, run the following command to start a job that restores indices."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create job --from=cronjob/datahub-datahub-restore-indices-job-template datahub-restore-indices-adhoc\n")),(0,a.kt)("p",null,"Once the job completes, your indices will have been restored."))}p.isMDXComponent=!0}}]);