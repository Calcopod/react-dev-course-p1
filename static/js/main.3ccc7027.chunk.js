(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),o=n.n(c),i=(n(12),n(4)),a=n(5),h=n(7),u=n(6),l=(n(13),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"Monster",src:"https://robohash.org/".concat(e.monster.name,"?set=set1&size=180x180")}),Object(l.jsx)("h1",{children:e.monster.name},e.idx),Object(l.jsxs)("p",{children:[" ",e.monster.email," "]}),Object(l.jsxs)("p",{children:[" ",e.monster.phone," "]})]})},j=(n(15),function(e){return console.log(e),Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e,t){return Object(l.jsx)(d,{idx:t,monster:e})}))})}),f=(n(16),n(17),function(e){var t=e.placeholder,n=e.onChange;return Object(l.jsx)("input",{type:"search",placeholder:t,onChange:n})}),b=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchfield:t.target.value})},e.state={monsters:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state.monsters.filter((function(t,n){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Robot Roledex"}),Object(l.jsx)(f,{placeholder:"Monsters . . .",onChange:this.handleChange}),Object(l.jsx)(j,{monsters:t})]})}}]),n}(s.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.3ccc7027.chunk.js.map