(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),s=n.n(i),r=n(2),l=n(3),c=n(4),u=n(5),d=n(7),m=n(6),h=n(1),w=n(8),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={name:e.name,newName:e.name},n.handleOnBlur=n.handleOnBlur.bind(Object(h.a)(n)),n}return Object(w.a)(t,e),Object(u.a)(t,[{key:"handleOnBlur",value:function(){this.setState({newName:this.state.name})}},{key:"render",value:function(){var e=this;return o.a.createElement("li",{className:"w3-display-container"},o.a.createElement("input",{className:"w3-input w3-block w3-hover-border-blue",type:"text",value:this.state.newName,onBlur:function(){return e.props.onBlur(e.state.name,e.state.newName)||e.handleOnBlur()},onChange:function(t){return e.setState({newName:t.target.value})}}),o.a.createElement("div",{className:"w3-container w3-display-right"},o.a.createElement("span",{onSelect:function(){return!1},className:"w3-display-container w3-margin-right"},this.props.qtd),o.a.createElement("button",{onClick:function(){return e.props.onRemove(e.props.name)},className:"w3-button"},"\xd7")))}}]),t}(o.a.Component),f=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={newItemValue:"",unsaved:!1,itens:JSON.parse(localStorage.getItem("itens"))||{}},n.handleAdd=n.handleAdd.bind(Object(h.a)(n)),n.handleRemove=n.handleRemove.bind(Object(h.a)(n)),n.handleChangeNameItem=n.handleChangeNameItem.bind(Object(h.a)(n)),n.handleSave=n.handleSave.bind(Object(h.a)(n)),n}return Object(w.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.onbeforeunload=function(){return e.state.unsaved||void 0}}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"w3-row bottom-form"},o.a.createElement("input",{onChange:function(t){return e.handleChangeNewItem(t)},className:"w3-input w3-hover-border-blue w3-col l4 m8 s10",type:"text",name:"Nome do item"}),o.a.createElement("button",{id:"add-button",className:"w3-button w3-col l2 m2 s2",onClick:this.handleAdd}),this.state.unsaved&&o.a.createElement("button",{className:"w3-button w3-animate-zoom w3-col l2 m2 s12",onClick:this.handleSave},"Salvar")),o.a.createElement("ul",{className:"w3-ul w3-card w3-col l4 m12 s12 margin"},Object.keys(this.state.itens).sort().map(function(t,n){return n%3===0&&o.a.createElement(v,{key:t,name:t,qtd:e.state.itens[t].qtd,onRemove:e.handleRemove,onBlur:e.handleChangeNameItem})})),o.a.createElement("ul",{className:"w3-ul w3-card w3-col l4 m12 s12 margin"},Object.keys(this.state.itens).sort().map(function(t,n){return n%3===1&&o.a.createElement(v,{key:t,name:t,qtd:e.state.itens[t].qtd,onRemove:e.handleRemove,onBlur:e.handleChangeNameItem})})),o.a.createElement("ul",{className:"w3-ul w3-card w3-col l4 m12 s12 margin"},Object.keys(this.state.itens).sort().map(function(t,n){return n%3===2&&o.a.createElement(v,{key:t,name:t,qtd:e.state.itens[t].qtd,onRemove:e.handleRemove,onBlur:e.handleChangeNameItem})})))}},{key:"handleChangeNewItem",value:function(e){this.setState({newItemValue:e.target.value})}},{key:"handleAdd",value:function(){var e=this;this.setState({unsaved:!0}),this.state.itens[this.state.newItemValue]?this.setState(function(t){return{itens:Object(l.a)({},t.itens,Object(r.a)({},e.state.newItemValue,{qtd:t.itens[e.state.newItemValue].qtd+1}))}}):this.setState(function(t){return{itens:Object(l.a)({},t.itens,Object(r.a)({},e.state.newItemValue,{qtd:1}))}})}},{key:"handleRemove",value:function(e){this.setState({unsaved:!0}),this.setState(function(t){var n=Object(l.a)({},t.itens),a=t.itens[e];return 1===a.qtd?(delete n[e],{itens:n}):{itens:Object(l.a)({},t.itens,Object(r.a)({},e,{qtd:a.qtd-1}))}})}},{key:"handleChangeNameItem",value:function(e,t){if(this.state.itens[t]||t===e)return!1;var n=Object(l.a)({},this.state.itens),a=this.state.itens[e];return delete n[e],n[t]=a,this.setState({itens:n}),this.setState({unsaved:!0}),!0}},{key:"handleSave",value:function(){localStorage.clear(),localStorage.setItem("itens",JSON.stringify(this.state.itens)),this.setState({unsaved:!1})}}]),t}(o.a.Component));var b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(18),n(19);s.a.render(o.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/listaCompras",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/listaCompras","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):p(t,e)})}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.a4e00a08.chunk.js.map