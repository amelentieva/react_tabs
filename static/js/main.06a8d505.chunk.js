(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=(c(10),c(5)),s=c(1),b=c.n(s),l=c(4),d=c.n(l),o=c(0),r=function(t){var e=t.tabs,c=t.selectedTab,n=t.onTabSelected;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"tabs",children:Object(o.jsx)("ul",{className:"tabs__list",children:e.map((function(t){return Object(o.jsx)("li",{className:d()({"is-active":t.id===c.id}),children:Object(o.jsx)("a",{href:"#".concat(t.id),onClick:function(){return n(t)},children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"tab-content",children:c.content})]})},j=(c(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),u=b.a.memo((function(){var t=Object(s.useState)(j[0]),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(o.jsx)(r,{tabs:j,selectedTab:c,onTabSelected:function(t){t.id!==c.id&&n(t)}})]})}));a.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.06a8d505.chunk.js.map