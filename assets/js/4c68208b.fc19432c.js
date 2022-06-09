"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9773],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,m=h["".concat(d,".").concat(u)]||h[u]||l[u]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43362:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"What is MXE (Metadata Events)?",sidebar_label:"What is MXE (Metadata Events)?",slug:"/what/mxe",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/mxe.md"},d="What is MXE (Metadata Events)?",p={unversionedId:"docs/what/mxe",id:"docs/what/mxe",isDocsHomePage:!1,title:"What is MXE (Metadata Events)?",description:"The models defined in snapshot and delta are used to build the schema for several metadata Kafka events. As these events have the prefix Metadata and suffix Event, they\u2019re collectively referred to as MXE.",source:"@site/genDocs/docs/what/mxe.md",sourceDirName:"docs/what",slug:"/what/mxe",permalink:"/docs/what/mxe",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/mxe.md",tags:[],version:"current",frontMatter:{title:"What is MXE (Metadata Events)?",sidebar_label:"What is MXE (Metadata Events)?",slug:"/what/mxe",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/mxe.md"}},c=[{value:"Metadata Change Event (MCE)",id:"metadata-change-event-mce",children:[],level:2},{value:"Metadata Audit Event (MAE)",id:"metadata-audit-event-mae",children:[],level:2}],l={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-mxe-metadata-events"},"What is MXE (Metadata Events)?"),(0,o.kt)("p",null,"The models defined in ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/snapshot"},"snapshot")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/delta"},"delta")," are used to build the schema for several metadata Kafka events. As these events have the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata")," and suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"Event"),", they\u2019re collectively referred to as MXE."),(0,o.kt)("p",null,"We also model MXEs using ",(0,o.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"PDL")," and rely on the ",(0,o.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/setup/gradle#generateavroschema"},"pegasus gradle plugin")," to convert them into ",(0,o.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"AVSC"),". However, we also need to rename all the namespaces of the generated AVSC to avoid namespace clashes for projects that depend on both the PDL models and MXEs. "),(0,o.kt)("p",null,"As the AVSC and PDL model schemas are 100% compatible, it\u2019d be very easy to convert the in-memory representation from one to another using ",(0,o.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/avro_translation"},"Pegasus\u2019 DataTranslator"),"."),(0,o.kt)("h2",{id:"metadata-change-event-mce"},"Metadata Change Event (MCE)"),(0,o.kt)("p",null,'MCE is a "proposal" for a metadata change, as opposed to ',(0,o.kt)("a",{parentName:"p",href:"#metadata-audit-event"},"MAE"),", which is conveying a committed change.\nConsequently, only successfully accepted and processed MCEs will lead to the emission of a corresponding MAE.\nA single MCE can contain both snapshot-oriented and delta-oriented metadata change proposal. The use case of this event is explained in ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-ingestion"},"Metadata Ingestion"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.mxe\n\nimport com.linkedin.avro2pegasus.events.KafkaAuditHeader\nimport com.linkedin.metadata.delta.Delta\nimport com.linkedin.metadata.snapshot.Snapshot\n\n/**\n * Kafka event for proposing a metadata change for an entity\n */\nrecord MetadataChangeEvent {\n\n  /** Kafka audit header */\n  auditHeader: optional KafkaAuditHeader\n\n  /** Snapshot of the proposed metadata change. Include only the aspects affected by the change in the snapshot. */\n  proposedSnapshot: Snapshot\n\n  /** Delta of the proposed metadata partial update */\n  proposedDelta: optional Delta\n}\n")),(0,o.kt)("p",null,"We\u2019ll also generate a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dead_letter_queue"},"dead letter queue")," event, Failed Metadata Change Event (FMCE), for any rejected MCE. The event simply wraps the original MCE and an error message, which contains the reason for rejection. This event can be used for debugging any potential ingestion issues, as well as for re-playing any previous rejected proposal if ever needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.mxe\n\nimport com.linkedin.avro2pegasus.events.KafkaAuditHeader\n\n/**\n * Kafka event for capturing a failure to process a specific MCE\n */\nrecord FailedMetadataChangeEvent {\n\n  /** Kafka audit header */\n  auditHeader: optional KafkaAuditHeader\n\n  /** The event that failed to be processed */\n  metadataChangeEvent: MetadataChangeEvent\n\n  /** The error message or the stacktrace for the failure */\n  error: string\n}\n")),(0,o.kt)("h2",{id:"metadata-audit-event-mae"},"Metadata Audit Event (MAE)"),(0,o.kt)("p",null,"A Metadata Audit Event captures the change made to one or multiple metadata ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"aspects")," associated with a particular ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity"),", in the form of a metadata ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/snapshot"},"snapshot")," before the change, and a metadata snapshot after the change."),(0,o.kt)("p",null,'Every source-of-truth for a particular metadata aspect is expected to emit a MAE whenever a change is committed to that aspect. By ensuring that, any listener of MAE will be able to construct a complete view of the latest state for all aspects.\nFurthermore, because each MAE contains the "after image", any mistake made in emitting the MAE can be easily mitigated by emitting a follow-up MAE with the correction. By the same token, the initial bootstrap problem for any newly added entity can also be solved by emitting a MAE containing all the latest metadata aspects associated with that entity.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.mxe\n\nimport com.linkedin.avro2pegasus.events.KafkaAuditHeader\nimport com.linkedin.metadata.snapshot.Snapshot\n\n/**\n * Kafka event for capturing update made to an entity's metadata.\n */\nrecord MetadataAuditEvent {\n\n  /** Kafka audit header */\n  auditHeader: optional KafkaAuditHeader\n\n  /**\n   * Snapshot of the metadata before the update. Set to null for newly created metadata. \n   * Only the metadata aspects affected by the update are included in the snapshot.\n   */\n  oldSnapshot: optional Snapshot\n\n  /**\n   * Snapshot of the metadata after the update. Only the metadata aspects affected by the \n   * update are included in the snapshot.\n   */\n  newSnapshot: Snapshot\n}\n")))}h.isMDXComponent=!0}}]);