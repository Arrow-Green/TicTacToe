(this["webpackJsonpredux-thunk-learning"]=this["webpackJsonpredux-thunk-learning"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(7),c=n.n(l),o=(n(14),n(15),n(2)),u=n(3),i=n(5),s=n(4),h=n(1);function m(e){return a.a.createElement("button",{className:"cell ".concat(e.value?"fade":""),onClick:e.onButtonClick},"X"===e.value?a.a.createElement(h.c,{color:"red"}):e.value?a.a.createElement(h.a,{color:"blue"}):"")}var d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).renderSquare=function(e){return a.a.createElement(m,{onButtonClick:function(){return r.props.onButtonClick(e)},value:r.props.cells[e]})},r.state={arr:Array(9).fill(null)},r}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"box-big"},a.a.createElement("div",null,this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),a.a.createElement("div",null,this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),a.a.createElement("div",null,this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),n}(r.Component),v=n(8);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(v.a)(t[n],3),a=r[0],l=r[1],c=r[2];if(e[a]&&e[a]===e[l]&&e[l]===e[c])return e[a]}return null}var E=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).onButtonClick=function(e){var t=r.state.xIsNext,n=r.state.cells;f(n)||n[e]||(n[e]=t?"X":"O",r.setState({cells:n,xIsNext:!t}))},r.onClear=function(){r.setState({cells:Array(9).fill(null),xIsNext:!0})},r.state={xIsNext:!0,cells:Array(9).fill(null)},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.cells,t=f(e);return a.a.createElement("div",{className:"site"},a.a.createElement(d,{onButtonClick:this.onButtonClick,cells:e}),a.a.createElement("button",{onClick:this.onClear,className:"refresh"},a.a.createElement(h.b,null)),t?a.a.createElement("h2",null,"Winner is ",t):"")}}]),n}(r.Component);var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a6b127bc.chunk.js.map