(this.webpackJsonpsliding_puzzle=this.webpackJsonpsliding_puzzle||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),l=n(9),r=n.n(l),s=n(1),u=n(10),a=n(8),o=n.p+"static/media/kitten.2882cbdb.jpeg",h=n(0),f=function(e){var t=e.x,n=e.y,i=e.size;return Object(h.jsx)("div",{style:function(){var e=100/(i-1);return{backgroundImage:"url(".concat(o,")"),backgroundPosition:"".concat(n*e,"% ").concat(100-t*e,"%"),backgroundSize:"".concat(50*i,"px ").concat(50*i,"px")}}(),className:"tile"})},b=function(e){var t=e.data,n=e.handleClick,i=e.size;return Object(h.jsx)("div",{style:{width:"50px",height:"50px"},className:"cell",onClick:function(){return n(t)},children:!!t.tile&&Object(h.jsx)(f,Object(a.a)(Object(a.a)({},t.tile),{},{size:i}))})},d=n(3),j=n(4),y=function(){function e(t){Object(d.a)(this,e),this.size=t,this.cells=this.generateCells()}return Object(j.a)(e,[{key:"generateCells",value:function(){return this.coordinates().map((function(e){return{position:e,tile:0!==e.y||0!==e.x?e:null}}))}},{key:"coordinates",value:function(){var e=this;return Object(s.a)(Array(this.size)).map((function(t,n){return Object(s.a)(Array(e.size)).map((function(e,t){return{x:n,y:t}}))})).flat()}}]),e}(),v=function(){function e(t,n){Object(d.a)(this,e),this.cells=t,this.clickedCell=n}return Object(j.a)(e,[{key:"moveTile",value:function(){var e=this.emptyNeighbour();e&&(e.tile=this.clickedCell.tile,this.clickedCell.tile=null)}},{key:"emptyNeighbour",value:function(){return this.neighbours().find((function(e){return!e.tile}))}},{key:"neighbours",value:function(){var e=this;return this.cells.filter((function(t){var n=e.clickedCell.position,i=t.position;return n.x===i.x&&[i.y+1,i.y-1].includes(n.y)||n.y===i.y&&[i.x+1,i.x-1].includes(n.x)}))}}]),e}(),x=function(){function e(t){Object(d.a)(this,e),this.cells=t}return Object(j.a)(e,[{key:"scrambleTiles",value:function(){var e=this;Object(s.a)(Array(10*this.cells.length)).forEach((function(){e.moveTile()}))}},{key:"moveTile",value:function(){var e=this.emptyCell(),t=this.targetCell(e);e.tile=t.tile,t.tile=null}},{key:"emptyCell",value:function(){return this.cells.find((function(e){return!e.tile}))}},{key:"targetCell",value:function(e){var t=this.neighbours(e);return t[Math.floor(Math.random()*t.length)]}},{key:"neighbours",value:function(e){return this.cells.filter((function(t){var n=e.position,i=t.position;return n.x===i.x&&[i.y+1,i.y-1].includes(n.y)||n.y===i.y&&[i.x+1,i.x-1].includes(n.x)}))}}]),e}(),p=function(e){var t=e.size,n=Object(i.useState)(new y(t).cells),c=Object(u.a)(n,2),l=c[0],r=c[1],a=function(e){var t=new v(l,e);t.moveTile(),r(Object(s.a)(t.cells))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"grid",children:Object(s.a)(Array(t)).map((function(e,n){return Object(h.jsx)("div",{className:"row",children:l.filter((function(e){return e.position.x===n})).map((function(e){return Object(h.jsx)(b,{data:e,handleClick:a,size:t})}))})}))}),Object(h.jsx)("button",{onClick:function(){var e=new x(l);e.scrambleTiles(),r(Object(s.a)(e.cells))},children:"Scramble Tiles"})]})},O=function(){return Object(h.jsx)(p,{size:5})};n(16);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.14bd58d6.chunk.js.map