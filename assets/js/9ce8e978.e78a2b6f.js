"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5820],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94066:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Access Token Management",sidebar_label:"Access Token Management",slug:"/api/graphql/token-management",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/token-management.md"},l="Access Token Management",p={unversionedId:"docs/api/graphql/token-management",id:"docs/api/graphql/token-management",isDocsHomePage:!1,title:"Access Token Management",description:"DataHub provides the following GraphQL endpoints for managing access tokens. In this page you will see examples as well",source:"@site/genDocs/docs/api/graphql/token-management.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/token-management",permalink:"/docs/api/graphql/token-management",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/token-management.md",tags:[],version:"current",frontMatter:{title:"Access Token Management",sidebar_label:"Access Token Management",slug:"/api/graphql/token-management",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/token-management.md"},sidebar:"overviewSidebar",previous:{title:"Querying Metadata Entities",permalink:"/docs/api/graphql/querying-entities"},next:{title:"Getting Started",permalink:"/docs/api/openapi/openapi-usage-guide"}},c=[{value:"Generate tokens",id:"generate-tokens",children:[],level:3},{value:"List Tokens",id:"list-tokens",children:[],level:3},{value:"Revoke Tokens",id:"revoke-tokens",children:[],level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access-token-management"},"Access Token Management"),(0,o.kt)("p",null,"DataHub provides the following GraphQL endpoints for managing access tokens. In this page you will see examples as well\nas explanations as to how to administrate access tokens within the project whether for yourself or others, depending on the caller's privileges."),(0,o.kt)("p",null,"Note: This API makes use of policies to safeguard against improper use. By default, a user will not be able to interact with it at all unless they have at least ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate Personal Access Tokens")," privileges.\nThis will allow a user to generate/list & revoke their tokens, but no more.\nIn order for a user to work with tokens for other users they must have ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage All Access Tokens"),".\nIt is HIGHLY recommended that only admins of the DataHub system have manage level privileges."),(0,o.kt)("h3",{id:"generate-tokens"},"Generate tokens"),(0,o.kt)("p",null,"To generate an access token, simply use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createAccessToken(input: GetAccessTokenInput!)")," GraphQL Query.\nThis endpoint will return an ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessToken")," object, containing the access token string itself alongside with metadata\nwhich will allow you to identify said access token later on."),(0,o.kt)("p",null,"For example, to generate an access token for the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," corp user, you can issue the following GraphQL Query:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"As GraphQL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createAccessToken(input: {type: PERSONAL, actorUrn: "urn:li:corpuser:datahub", duration: ONE_HOUR, name: "my personal token"}) {\n    accessToken\n    metadata {\n      id\n      name\n      description\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"As CURL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'X-DataHub-Actor: urn:li:corpuser:datahub\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query":"{ createAccessToken(input: { type: PERSONAL, actorUrn: \\"urn:li:corpuser:datahub\\", duration: ONE_HOUR, name: \\"my personal token\\" } ) { accessToken metadata { id name description} } }", "variables":{}}\'\n')),(0,o.kt)("h3",{id:"list-tokens"},"List Tokens"),(0,o.kt)("p",null,"Listing tokens is a powerful endpoint, as such there are rules to using."),(0,o.kt)("p",null,"List your own personal token (assuming you are the datahub corp user). Notice that to list your own tokens you must\nspecify a filter with: ",(0,o.kt)("inlineCode",{parentName:"p"},'{field: "actorUrn", value: "<your user urn>"}')," configuration. Unless you specify this filter, the endpoint will fail with a not authorized exception."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"As GraphQL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  listAccessTokens(input: {start: 0, count: 100, filters: [{field: "ownerUrn", value: "urn:li:corpuser:datahub"}]}) {\n    start\n    count\n    total\n    tokens {\n      urn\n      id\n      actorUrn\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"As CURL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'X-DataHub-Actor: urn:li:corpuser:datahub\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query":"{ listAccessTokens(input: {start: 0, count: 100, filters: [{field: \\"ownerUrn\\", value: \\"urn:li:corpuser:datahub\\"}]}) { start count total tokens {urn id actorUrn} } }", "variables":{}}\'\n')),(0,o.kt)("p",null,"Listing all access tokens in the system (your user must have ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage All Access Tokens")," privileges for this to work)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"As GraphQL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  listAccessTokens(input: {start: 0, count: 100, filters: []}) {\n    start\n    count\n    total\n    tokens {\n      urn\n      id\n      actorUrn\n    }\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"As CURL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'X-DataHub-Actor: urn:li:corpuser:datahub' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\":\"{ listAccessTokens(input: {start: 0, count: 100, filters: []}) { start count total tokens {urn id actorUrn} } }\", \"variables\":{}}'\n")),(0,o.kt)("p",null,"Other filters besides ",(0,o.kt)("inlineCode",{parentName:"p"},"actorUrn=<some value>")," are possible. You can filter by property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHubAccessTokenInfo")," aspect which you can find in the Entities documentation."),(0,o.kt)("h3",{id:"revoke-tokens"},"Revoke Tokens"),(0,o.kt)("p",null,"Revoking a token is a mutation, as such bear in mind the need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"mutation")," keyword when submitting the GraphQL command."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"As GraphQL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  revokeAccessToken(tokenId: "HnMJylxuowJ1FKN74BbGogLvXCS4w+fsd3MZdI35+8A=")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'X-DataHub-Actor: urn:li:corpuser:datahub' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"query\":\"mutation {revokeAccessToken(tokenId: \\\"HnMJylxuowJ1FKN74BbGogLvXCS4w+fsd3MZdI35+8A=\\\")}\",\"variables\":{}}}'\n")),(0,o.kt)("p",null,"This endpoint will return a boolean detailing whether the operation was successful. In case of failure, an error message will appear explaining what went wrong."))}m.isMDXComponent=!0}}]);