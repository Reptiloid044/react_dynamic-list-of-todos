(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(4),r=c(2),d=c(3),i=c.n(d),o=c(1),j=(c(12),c(13),c(0)),u=function(e){var t=e.todos,c=e.selectedTodoId,s=e.selectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),Object(j.jsx)("td",{className:"is-vcentered",children:n&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:a})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(c===t?0:t)},children:Object(j.jsx)("span",{className:"icon",children:c===t?Object(j.jsx)("i",{className:"far fa-eye-slash"}):Object(j.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.selectStatus,c=e.query,a=e.setSelectStatus,n=e.setQuery;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){var t=e.currentTarget.value;a(t)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){n(e.currentTarget.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(j.jsx)("button",{"aria-label":"All","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(15);var m=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.todoId,c=e.todos,s=e.selectedTodo,a=Object(o.useState)(null),n=Object(r.a)(a,2),d=n[0],u=n[1],b=Object(o.useState)(!0),O=Object(r.a)(b,2),x=O[0],f=O[1],p=c.find((function(e){return e.id===t}));return Object(o.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=5;break}return e.next=3,c=p.userId,h("/users/".concat(c));case 3:t=e.sent,u(t);case 5:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),x?Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),d?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t)}),Object(j.jsx)("button",{"aria-label":"delete",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){f(!1),s(0)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===p||void 0===p?void 0:p.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==p&&void 0!==p&&p.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]}):Object(j.jsx)(m,{})]}):null},x=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(!0),d=Object(r.a)(n,2),x=d[0],f=d[1],p=Object(o.useState)(""),v=Object(r.a)(p,2),N=v[0],y=v[1],g=Object(o.useState)(s.All),S=Object(r.a)(g,2),k=S[0],T=S[1],w=Object(o.useState)(0),C=Object(r.a)(w,2),A=C[0],I=C[1];Object(o.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/todos");case 2:t=e.sent,a(t),f(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var _=c.filter((function(e){switch(k){case s.Active:return!e.completed;case s.Completed:return e.completed;default:return!0}}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{selectStatus:k,query:N,setSelectStatus:T,setQuery:y})}),Object(j.jsx)("div",{className:"block",children:x?Object(j.jsx)(m,{}):Object(j.jsx)(u,{todos:_,selectedTodoId:A,selectedTodo:I})})]})})}),A&&Object(j.jsx)(O,{todoId:A,todos:_,selectedTodo:I})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d1534be4.chunk.js.map