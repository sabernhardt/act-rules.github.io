(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/1x4":function(e){e.exports=JSON.parse('{"2eb176":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"afb423":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"a1b64e":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ebe86a":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"4c31df":[{"name":"`audio` or `video` has no audio that plays automatically","slug":"rules/80f0bf"}],"aaa1bf":[{"name":"`audio` or `video` has no audio that plays automatically","slug":"rules/80f0bf"}],"ab4d13":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"},{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"f51b46":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"}],"1ea59c":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"1a02b0":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"}],"f196ce":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"fd26cf":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ac7dc6":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ee13b5":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"d7ba54":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}]}')},XyE2:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"c",(function(){return o})),t.d(a,"d",(function(){return m})),t.d(a,"e",(function(){return d})),t.d(a,"a",(function(){return v}));t("f3/d"),t("pIFo"),t("dRSK"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("Z2Ku"),t("L9s1");var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("t1PT"),s=t("/1x4"),u=function(e,a){var t=i(e);t.includes("#outcome")||t.push("#outcome");var n=a.edges.filter((function(e){var a=e.node.frontmatter.key;return t.includes("#"+a)}));return n.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"glossary-listing",href:"#glossary-listing"},l.a.createElement("h2",null,"Glossary")),n.map((function(e){var a=e.node,t=a.frontmatter,n=a.html,r=t.key;return l.a.createElement("article",{key:a.id},l.a.createElement("a",{id:r,href:"#"+r},l.a.createElement("h3",null,t.title)),l.a.createElement("i",null,"key: ",l.a.createElement("u",null,r)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}))):null},i=function(e){var a=[];return Object.keys(c).forEach((function(t){c[t].forEach((function(n){n.slug!==e||a.includes(t)||a.push(t)}))})),a};function o(e,a){return e?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"heading"},"Input Aspects:"),l.a.createElement("ul",null,e.map((function(e){var t=a[e]?a[e]:a.default;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:t},e))})))):null}function m(e,a,t){return void 0===t&&(t=!1),e?l.a.createElement("div",{className:"side-notes"},l.a.createElement("div",{className:"meta"},l.a.createElement("span",{className:"heading"},"Input Rules"),l.a.createElement("ul",null,e.map((function(e){var n=a.find((function(a){return a.node.frontmatter.id===e})),r=t?n.node.fields.slug.replace("rules/",""):n.node.fields.slug,c=n.node.frontmatter.name;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:r},c))}))))):null}function d(e){var a=s[e];return a?l.a.createElement("div",{className:"side-notes"},l.a.createElement("div",{className:"meta"},l.a.createElement("span",{className:"heading"},"Used in rules"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.slug},l.a.createElement(r.Link,{key:e.slug,to:e.slug},e.name))}))))):null}function v(e){var a=new Date(1e3*e),t=a.getFullYear();return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()]+" "+a.getDate()+", "+t}},pu4J:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return o}));t("f3/d");var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),c=t("Wbzz"),s=t("vrFN"),u=t("XyE2"),i=(t("mDvL"),function(e,a,t){return e.length?l.a.createElement("table",{className:"compact"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"See Changes"))),l.a.createElement("tbody",null,e.map((function(e){var t=e.commit,n=e.msg,r=e.date,c=a+"/commit/"+t;return l.a.createElement("tr",{key:t},l.a.createElement("td",{nowrap:"true"},Object(u.a)(r)),l.a.createElement("td",null,n),l.a.createElement("td",{align:"center"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c,title:"See all changes in commit"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16px",height:"16px",viewBox:"0 0 31.568 31.568"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M1.889,31.568h8.282V0H1.889V31.568z M4.021,2.958h4.016V9.65H4.021V2.958z M4.021,11.964h4.016v2.776H4.021V11.964z M6.029,24.596c1.11,0,2.009,0.897,2.009,2.008c0,1.107-0.898,2.008-2.009,2.008c-1.108,0-2.007-0.9-2.007-2.008 C4.021,25.494,4.92,24.596,6.029,24.596z"}),l.a.createElement("path",{d:"M11.643,31.568h8.282V0h-8.282V31.568z M13.777,2.958h4.016V9.65h-4.016V2.958z M13.777,11.964h4.016v2.776h-4.016V11.964 z M15.784,24.596c1.11,0,2.009,0.897,2.009,2.008c0,1.107-0.898,2.008-2.009,2.008c-1.108,0-2.007-0.9-2.007-2.008 C13.777,25.494,14.676,24.596,15.784,24.596z"}),l.a.createElement("path",{d:"M21.397,0v31.568h8.282V0H21.397z M25.539,28.611c-1.108,0-2.008-0.9-2.008-2.008c0-1.11,0.898-2.008,2.008-2.008 c1.11,0,2.009,0.897,2.009,2.008C27.548,27.711,26.648,28.611,25.539,28.611z M27.548,14.74h-4.017v-2.776h4.017V14.74z M27.548,9.651h-4.017V2.958h4.017V9.651z"})))))))})))):null});a.default=function(e){var a=e.location,t=e.data,n=t.site,u=t.sitePage.context,o=u.title,m=u.fastmatterAttributes,d=u.changelog,v=(u.fileName.relativePath,JSON.parse(m)),h=v.id,f=v.name,g=JSON.parse(d),E=JSON.parse(n.siteMetadata.actRulesPackage).repository.url;return l.a.createElement(r.a,{location:a},l.a.createElement(s.a,{title:o}),l.a.createElement("section",{className:"page-changelog"},l.a.createElement("h1",null,o),i(g,E),l.a.createElement("br",null),l.a.createElement(c.Link,{to:"/rules/"+h},"See Rule: ",f)))};var o="1779839264"}}]);
//# sourceMappingURL=component---src-templates-changelog-js-e7d02b6114f0e27550c9.js.map