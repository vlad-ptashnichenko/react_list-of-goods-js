(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(6),r=n(8),i=(n(13),n(14),n(4)),a=n.n(i),u=n(1),l=n(0),b=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="name",d="length";var g=function(){var t=Object(u.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(u.useState)(!1),i=Object(o.a)(s,2),g=i[0],f=i[1],p=function(t,e,n){var c=Object(r.a)(t);return e&&c.sort((function(t,n){switch(e){case h:return t.localeCompare(n);case d:return t.length-n.length;default:return 0}})),n?c.reverse():c}(j,n,g);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:a()("button is-info",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:a()("button is-success",{"is-light":n!==d}),onClick:function(){return c(d)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:a()("button is-warning",{"is-light":!g}),onClick:function(){return f((function(t){return!t}))},children:"Reverse"}),n.length||g?Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){f(!1),c("")},children:"Reset"}):""]}),Object(l.jsx)(b,{goods:p})]})};s.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5e281fea.chunk.js.map