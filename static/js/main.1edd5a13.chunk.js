(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),s=n.n(o),l=n(1),r=n(4),i=n(5),d=n(8),u=n(7),m=(n(14),n(6)),b=n.n(m),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={selectedGood:["Jam"]},e.addGood=function(t){e.setState((function(e){return{selectedGood:[].concat(Object(l.a)(e.selectedGood),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{selectedGood:Object(l.a)(e.selectedGood).filter((function(e){return e!==t}))}}))},e.getClearList=function(){e.setState({selectedGood:[]})},e.makeList=function(){var t=e.state.selectedGood,n=t.slice(0,-1).join(", ");switch(t.length){case 0:return"";case 1:return"".concat(t.join(", ")," is selected");case 2:return"".concat(t[0]," and\n          ").concat(t[1]," are selected");default:return"".concat(n," and\n          ").concat(t[t.length-1]," are selected")}},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"list-title"},c.a.createElement("div",{className:"list-title__block"},c.a.createElement("h1",{className:"list-title__title"},this.makeList().length>0?"Selected good:":"No goods selected"),c.a.createElement("p",{className:"list-title__content"},this.makeList())),this.makeList().length>0?c.a.createElement("button",{className:"btn list-title__btn",type:"button",onClick:function(){e.getClearList()}},"Clear"):null),c.a.createElement("ul",{className:"todo-list"},f.map((function(n){return c.a.createElement("li",{key:Math.random(),className:b()("todo",{active:t.includes(n)})},c.a.createElement("span",{className:"todo__content"},n),t.includes(n)?c.a.createElement("button",{className:"btn btn-remove",type:"button",onClick:function(){e.removeGood(n)}},"Remove"):c.a.createElement("button",{className:"btn btn-add",type:"button",onClick:function(){e.addGood(n)}},"Select"))}))))}}]),n}(c.a.Component);s.a.render(c.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1edd5a13.chunk.js.map