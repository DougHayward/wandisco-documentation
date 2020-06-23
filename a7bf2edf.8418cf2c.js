(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{205:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),o=(r(0),r(250)),i={id:"arch_hdp_sandbox_az_databricks_lan",title:"Architecture - Hortonworks (HDP) Sandbox to Azure Databricks with LiveAnalytics",sidebar_label:"HDP Sandbox to Azure Databricks with LiveAnalytics"},c={id:"docs/architecture/arch_hdp_sandbox_az_databricks_lan",isDocsHomePage:!1,title:"Architecture - Hortonworks (HDP) Sandbox to Azure Databricks with LiveAnalytics",description:"Architecture: HDP Sandbox to Azure Databricks with LiveAnalytics",source:"@site/../docs/docs/architecture/arch_hdp_sandbox_az_databricks_lan.md",permalink:"/wandisco-documentation/docs/docs/architecture/arch_hdp_sandbox_az_databricks_lan",sidebar_label:"HDP Sandbox to Azure Databricks with LiveAnalytics",sidebar:"docs",previous:{title:"Architecture - Hortonworks (HDP) Sandbox to ADLS Gen2",permalink:"/wandisco-documentation/docs/docs/architecture/arch_hdp_sandbox_adlsg2"},next:{title:"Bandwidth Considerations",permalink:"/wandisco-documentation/docs/docs/network/net_bandwidth_considerations"}},s=[],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/arch_hdp_sandbox_az_databricks_lan.jpg",alt:"Architecture: HDP Sandbox to Azure Databricks with LiveAnalytics"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Live Hive Proxy will intercept and co-ordinate the Hive request with the Fusion Server on the HDP zone."),Object(o.b)("li",{parentName:"ol"},"If the request is on a database/table that matches a Hive rule, the Fusion Server in the HDP zone will coordinate with the Fusion Server in the ADLS Gen2 zone (read requests are passed through to Hive). Metadata is replicated from the HDP zone to the ADLS Gen2 zone."),Object(o.b)("li",{parentName:"ol"},"Any related HDFS data writes/changes are read by the Fusion IHC in the HDP zone, and replicated to the Fusion Server in the ADLS Gen2 zone."),Object(o.b)("li",{parentName:"ol"},"The Fusion Server in the ADLS zone will transform the Hive metadata to equivalent changes on the Azure Databricks Delta Lake tables."),Object(o.b)("li",{parentName:"ol"},"The Fusion Server in the ADLS zone will transform the HDFS data to equivalent ADLS Gen2 storage changes."),Object(o.b)("li",{parentName:"ol"},"The ADLS Gen2 storage changes are then pushed to the Databricks cluster automatically through Fusion's ETL library (installed on the Databricks cluster).")))}u.isMDXComponent=!0},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return r?a.a.createElement(h,c(c({ref:t},l),{},{components:r})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);