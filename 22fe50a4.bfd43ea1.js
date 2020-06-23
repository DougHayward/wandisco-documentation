(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(250)),i={id:"s",title:"S",sidebar_label:"S"},c={id:"glossary/s",isDocsHomePage:!1,title:"S",description:"SHA1",source:"@site/../docs/glossary/s.md",permalink:"/wandisco-documentation/docs/glossary/s",sidebar_label:"S",sidebar:"Glossary",previous:{title:"R",permalink:"/wandisco-documentation/docs/glossary/r"},next:{title:"T",permalink:"/wandisco-documentation/docs/glossary/t"}},s=[{value:"SHA1",id:"sha1",children:[]},{value:"Sideline",id:"sideline",children:[]},{value:"Site",id:"site",children:[]},{value:"Source",id:"source",children:[]},{value:"SSH",id:"ssh",children:[]},{value:"SSL",id:"ssl",children:[]},{value:"Synchronized Stop",id:"synchronized-stop",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"sha1"},"SHA1"),Object(a.b)("p",null,"Secure Hash Algorithm 1. This is a 160-bit hash value normally rendered as a 40 digit hexadecimal number. Although originally developed for security purposes, SHA1 is used to ensure data hasn\u2019t changed, for example due to accidental corruption."),Object(a.b)("h2",{id:"sideline"},"Sideline"),Object(a.b)("p",null,"A sidelined repository replica is a replica that will no longer get updates from other replicas in the family. The other replicas will not preserve operations for a sidelined replica thereby preventing them from running out of memory. Replicas become sidelined if they are out of communication for an extended amount of time and the number of outstanding agreements exceeds a tunable maximum. Sidelined replicas can be brought back into normal operation via a repair procedure."),Object(a.b)("h2",{id:"site"},"Site"),Object(a.b)("p",null,"A physical location containing computers where one or more WANdisco replicated products are installed."),Object(a.b)("h2",{id:"source"},"Source"),Object(a.b)("p",null,"The cluster the data originates from, this is normally on premises but does not have to be. It can also be referred to as the donor."),Object(a.b)("h2",{id:"ssh"},"SSH"),Object(a.b)("p",null,"Secure Shell (SSH) is a means of getting secure access to a remote computer. It can be used for authentication."),Object(a.b)("h2",{id:"ssl"},"SSL"),Object(a.b)("p",null,"Secure Socket Layer (SSL) is a commonly used encryption protocol."),Object(a.b)("h2",{id:"synchronized-stop"},"Synchronized Stop"),Object(a.b)("p",null,'A special transaction that will prevent further write transactions from happening. A replicator will process transactions normally up to this special transaction and the node will enter a "stopping" state. This causes all nodes to stop after processing up through the exact same GSN. A Synchronized Stop is typically actioned prior to administrative tasks such as a product upgrade. This transaction requires Unanimous Agreement in order to complete. Even if one of the nodes is not available, the other nodes will enter the stopping state and prevent write transactions. Unanimous Agreement means that all nodes need to be available for a synchronized stop to complete.'))}u.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);