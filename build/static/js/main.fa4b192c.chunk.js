(this.webpackJsonptester=this.webpackJsonptester||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),c=n.n(a),i=n(1),l=n(2),s=n(4),u=n(3),p=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{backgroundColor:"lightgray",padding:"10px",borderBottom:"1px black dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(l.a)(n,[{key:"markComplete",value:function(e){console.log(this.props)}},{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.markComplete()}),"  "," ",this.props.todo.title))}}]),n}(o.Component)),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.todos.map((function(e){return r.a.createElement(p,{key:e.id,todo:e})}))}}]),n}(r.a.Component),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={todos:[{id:1,title:"Take out the trash",completed:!1},{id:2,title:"Eat dinner",complete:!1},{id:3,title:"See friends",complete:!1}]},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{todos:this.state.todos}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fa4b192c.chunk.js.map