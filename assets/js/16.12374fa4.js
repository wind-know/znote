(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{345:function(t,o,e){},397:function(t,o,e){"use strict";var n=e(345);e.n(n).a},425:function(t,o,e){"use strict";e.r(o);e(184);var n={data:function(){return{todo:"",list:[]}},mounted:function(){this.getLocalStorage("todolist")},methods:{doAdd:function(t,o){0==o&&(this.list.push({data:this.todo,checked:!1}),this.saveLocalStorage("todolist",this.list)),1==o&&(this.list.push({data:this.todo,checked:!1}),this.saveLocalStorage("todolist",this.list)),this.todo=""},doDel:function(t){this.list.splice(t,1),this.saveLocalStorage("todolist",this.list)},doUpdate:function(t){t.checked=!t.checked,this.saveLocalStorage("todolist",this.list)},getLocalStorage:function(t){var o=JSON.parse(localStorage.getItem(t));this.list=o},saveLocalStorage:function(t,o){localStorage.setItem(t,JSON.stringify(o))}}},i=(e(397),e(2)),c=Object(i.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo",attrs:{id:"todo"}},[e("h4",[t._v("待办")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],attrs:{type:"text"},domProps:{value:t.todo},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.doAdd(o,0)},input:function(o){o.target.composing||(t.todo=o.target.value)}}}),t._v(" "),e("button",{on:{click:function(o){return t.doAdd(o,1)}}},[t._v("增加")]),t._v(" "),e("h4",[t._v("进行中")]),t._v(" "),e("ul",t._l(t.list,(function(o,n){return o.checked?t._e():e("li",[o.checked?t._e():e("input",{attrs:{type:"checkbox"},on:{click:function(e){return t.doUpdate(o)}}}),t._v(" "+t._s(o.data)+" --- "),e("button",{on:{click:function(o){return t.doDel(n)}}},[t._v("删除")]),t._v(" "),e("br")])})),0),t._v(" "),e("h4",[t._v("已完成")]),t._v(" "),e("ul",t._l(t.list,(function(o,n){return o.checked?e("li",[o.checked?e("input",{attrs:{type:"checkbox"},on:{click:function(e){return t.doUpdate(o)}}}):t._e(),t._v(" "+t._s(o.data)+" --- "),e("button",{on:{click:function(o){return t.doDel(n)}}},[t._v("删除")]),t._v(" "),e("br")]):t._e()})),0)])}),[],!1,null,"2ac9f800",null);o.default=c.exports}}]);