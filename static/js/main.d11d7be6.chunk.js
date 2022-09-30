(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),d=(c(9),c(10),c(0)),o=function(e){var t=e.todos,c=e.selectedTodoId,s=e.selectedTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:t}),Object(d.jsx)("td",{className:"is-vcentered",children:n&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:a})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(c===t?0:t)},children:Object(d.jsx)("span",{className:"icon",children:c===t?Object(d.jsx)("i",{className:"far fa-eye-slash"}):Object(d.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},i=function(e){var t=e.selectStatus,c=e.query,s=e.setSelectStatus,a=e.setQuery;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){s(e.currentTarget.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){a(e.currentTarget.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var j=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.todoId,c=e.todos,s=e.selectedTodo,a=Object(l.useState)(null),o=Object(n.a)(a,2),i=o[0],u=o[1],b=Object(l.useState)(!0),h=Object(n.a)(b,2),m=h[0],O=h[1],x=c.find((function(e){return e.id===t}));return Object(l.useEffect)((function(){var e;x&&(e=x.userId,r("/users/".concat(e))).then((function(e){return u(e)}))}),[]),m?Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),i?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){O(!1),s(0)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:null===x||void 0===x?void 0:x.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==x&&void 0!==x&&x.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(d.jsx)(j,{})]}):null},b=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!0),b=Object(n.a)(a,2),h=b[0],m=b[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],N=x[1],p=Object(l.useState)("all"),v=Object(n.a)(p,2),y=v[0],g=v[1],S=Object(l.useState)(0),k=Object(n.a)(S,2),T=k[0],w=k[1];Object(l.useEffect)((function(){r("/todos").then((function(e){s(e),m(!1)}))}),[]);var C=c.filter((function(e){switch(y){case"active":return!e.completed;case"completed":return e.completed;default:return!0}})).filter((function(e){return e.title.toLocaleLowerCase().includes(f.toLocaleLowerCase())}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(i,{todos:c,selectStatus:y,setSelectStatus:g,query:f,setQuery:N})}),Object(d.jsx)("div",{className:"block",children:h?Object(d.jsx)(j,{}):Object(d.jsx)(o,{todos:C,selectedTodoId:T,selectedTodo:function(e){return w(e)}})})]})})}),T&&Object(d.jsx)(u,{todoId:T,todos:C,selectedTodo:function(e){return w(e)}})]})};a.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d11d7be6.chunk.js.map