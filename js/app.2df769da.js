(function(t){function e(e){for(var n,a,o=e[0],l=e[1],u=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={app:0},r=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/To-Do-App-VueJS/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"032b":function(t,e,s){"use strict";s("13fd")},"034f":function(t,e,s){"use strict";s("85ec")},"13fd":function(t,e,s){},"2ba8":function(t,e,s){},"569e":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("ToDo")],1)},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"todo"},[s("h1",[t._v("To Do")]),s("ToDoInput"),s("ToDoList"),s("ToDoFooter")],1)])},o=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"zone-input"},[s("h2",[t._v("Enter new task")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"todo--input",attrs:{type:"text",name:"Input New Task",spellcheck:"false"},domProps:{value:t.newTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewTask()},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),s("p",{staticStyle:{"margin-bottom":"10px","font-size":"13px",color:"#fff"}},[t._v("Total number of tasks available: "+t._s(t.count))])])])},u=[];s("ac1f"),s("466d");function c(t){return(t.match(/^\s*$/)||[]).length>0}var d={name:"ToDoInput",computed:{isListTaskChange:function(){return this.$store.getters.listTask}},watch:{isListTaskChange:function(){this.count=this.$store.getters.listTask.length}},data:function(){var t=this.$store.getters.listTask.length;return{newTask:"",count:t}},methods:{addNewTask:function(){var t=this.handle2String(this.newTask);if(c(t))alert("Please enter something!");else{var e={status:!1,title:t};this.$store.dispatch("app/setNewTask",e),this.newTask=""}},handle2String:function(t){return t+""}}},p=d,f=(s("032b"),s("2877")),h=Object(f["a"])(p,l,u,!1,null,"76f34369",null),T=h.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{key:t.Rerender},[t.ListTask.length>0?s("div",[s("draggable",t._b({attrs:{list:t.ListTask}},"draggable",t.dragOptions,!1),t._l(t.ListTask,(function(e,n){return s("div",{key:n,staticClass:"zone-list"},[s("div",{staticClass:"todo-status"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"task.status"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.status)?t._i(e.status,null)>-1:e.status},on:{change:[function(s){var n=e.status,i=s.target,r=!!i.checked;if(Array.isArray(n)){var a=null,o=t._i(n,a);i.checked?o<0&&t.$set(e,"status",n.concat([a])):o>-1&&t.$set(e,"status",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(e,"status",r)},function(s){return t.isChangeStatusTask(n,e.status)}]}})]),s("div",{ref:"listTask",refInFor:!0,staticClass:"zone-list-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"task.title"}],class:t.handleTaskCompleted(e.status),attrs:{type:"text",disabled:e.status,spellcheck:"false"},domProps:{value:e.title},on:{change:function(s){return t.isEditTitleTask(n,e.title)},input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}})]),s("div",{staticClass:"todo-remove"},[s("button",{on:{click:function(e){return t.isDeleteTask(n)}}},[t._v(" Delete ")])])])})),0)],1):s("div",[t._m(0)])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"zone-list"},[s("span",{staticClass:"no-data"},[t._v("No Data")])])}],g=(s("4de4"),s("a15b"),s("b76a")),y=s.n(g),m={name:"ToDoList",components:{draggable:y.a},computed:{isListTaskChange:function(){return this.$store.getters.listTask},isFilterChange:function(){return this.$store.getters.typeFilter},dragOptions:function(){return{animation:150,group:"task",handle:".zone-list"}}},watch:{isListTaskChange:function(){var t=this.$store.getters.typeFilter;this.ListTask=0===t?this.$store.getters.listTask:1===t?this.$store.getters.listTask.filter((function(t){return!0===t.status})):2===t?this.$store.getters.listTask.filter((function(t){return!1===t.status})):this.$store.getters.listTask,this.Rerender+=1},isFilterChange:function(){this.handleFilter()}},data:function(){return{ListTask:[],Rerender:0}},created:function(){var t=this.$store.getters.typeFilter;this.ListTask=0===t?this.$store.getters.listTask:1===t?this.$store.getters.listTask.filter((function(t){return!0===t.status})):2===t?this.$store.getters.listTask.filter((function(t){return!1===t.status})):this.$store.getters.listTask,this.handleFilter()},methods:{isDeleteTask:function(t){confirm("Do you really want to delete this task?")&&this.$store.dispatch("app/deleteTask",t)},isChangeStatusTask:function(t,e){var s=this,n={index:t,status:e};this.$store.dispatch("app/updateStatusTask",n).then((function(){var t=s.$store.getters.typeFilter;s.$store.dispatch("app/setTypeFilter",t).then((function(){s.handleFilter()})).catch((function(){alert("You have error!")}))})).catch((function(){alert("You have error!")}))},handleTaskCompleted:function(t){var e=["todo-title"];return t&&e.push("todo-task-done"),e.join(" ")},isEditTitleTask:function(t,e){if(c(e))alert("Please enter something!"),this.$refs.listTask[t].childNodes[0].focus();else{var s={index:t,title:e};this.$store.dispatch("app/updateTitleTask",s),alert("Update successful!")}},handleFilter:function(){var t=this.$store.getters.typeFilter;0===t?this.ListTask=this.$store.getters.listTask:1===t?this.ListTask=this.$store.getters.listTask.filter((function(t){return!0===t.status})):2===t?this.ListTask=this.$store.getters.listTask.filter((function(t){return!1===t.status})):3===t&&this.$store.dispatch("app/deleteAllTask").then((function(){alert("Delete successfully!")})).catch((function(){alert("You have error!")}))}}},b=m,_=(s("9adf"),Object(f["a"])(b,k,v,!1,null,"0cab49f1",null)),w=_.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{key:t.Rerender,staticClass:"zone-footer"},[s("div",{staticClass:"show-all"},[s("button",{style:t.isFilterClass(t.typeShow,0),on:{click:function(e){return t.handleFilter(0)}}},[t._v(" All ")])]),s("div",{staticClass:"show-complete"},[s("button",{style:t.isFilterClass(t.typeShow,1),on:{click:function(e){return t.handleFilter(1)}}},[t._v(" Complete ")])]),s("div",{staticClass:"show-process"},[s("button",{style:t.isFilterClass(t.typeShow,2),on:{click:function(e){return t.handleFilter(2)}}},[t._v(" Process ")])]),s("div",{staticClass:"clear-all"},[s("button",{style:t.isFilterClass(t.typeShow,3),on:{click:function(e){return t.handleFilter(3)}}},[t._v(" Clear all ")])])])])},$=[],E={name:"ToDoFooter",computed:{isTypeShowChange:function(){return this.typeShow}},watch:{isTypeShowChange:function(){this.Rerender+=1}},data:function(){var t=this.$store.getters.typeFilter;return{typeShow:t,Rerender:0}},methods:{isFilterClass:function(t,e){return t===e?"\n                    min-width: 90%;\n                    height: 90%;\n                    justify-content: center;\n                    border: none;\n                    border-radius: 5px;\n                    background-color: #98ded9;\n                    color: #000;\n                    cursor: pointer;\n                ":"\n                min-width: 90%;\n                height: 90%;\n                justify-content: center;\n                border: none;\n                border-radius: 5px;\n                background-color: #fff;\n                color: #000;\n                cursor: pointer;\n            "},handleFilter:function(t){var e=this;if(3===t){var s=this.$store.getters.listTask.length;s>0?confirm("Want to clear your task list?")&&(this.typeShow=t,this.$store.dispatch("app/setTypeFilter",this.typeShow).then((function(){e.typeShow=0,e.$store.dispatch("app/setTypeFilter",e.typeShow)})).catch((function(){alert("You have error!")}))):alert("No tasks exist to delete!")}else this.typeShow=t,this.$store.dispatch("app/setTypeFilter",this.typeShow)}}},F=E,C=(s("b780"),Object(f["a"])(F,S,$,!1,null,"a5d1d562",null)),L=C.exports,D={name:"ToDo",components:{ToDoInput:T,ToDoList:w,ToDoFooter:L}},x=D,A=(s("d4bd"),Object(f["a"])(x,a,o,!1,null,"304b8ef7",null)),O=A.exports,j={name:"App",components:{ToDo:O}},P=j,N=(s("034f"),Object(f["a"])(P,i,r,!1,null,null,null)),I=N.exports,K=s("2f62"),U=(s("13d5"),s("d3b7"),s("ddb0"),s("5319"),{listTask:function(t){return t.app.listTask},originListTask:function(t){return t.app.originListTask},typeFilter:function(t){return t.app.typeFilter}}),z=U;n["a"].use(K["a"]);var R=s("d307"),Y=R.keys().reduce((function(t,e){var s=e.replace(/^\.\/(.*)\.\w+$/,"$1").replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})),n=R(e);return t[s]=n.default,t}),{}),M=new K["a"].Store({modules:Y,getters:z}),J=M;n["a"].config.productionTip=!1,n["a"].use(K["a"]),new n["a"]({store:J,render:function(t){return t(I)}}).$mount("#app")},"7b06":function(t,e,s){},"85ec":function(t,e,s){},"9adf":function(t,e,s){"use strict";s("569e")},b780:function(t,e,s){"use strict";s("7b06")},d307:function(t,e,s){var n={"./app.js":"d9cd"};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id="d307"},d4bd:function(t,e,s){"use strict";s("2ba8")},d9cd:function(t,e,s){"use strict";s.r(e);s("a434");var n=s("a78e"),i=s.n(n);s("caad");function r(){var t=i.a.get("list-task");return t?JSON.parse(t):[]}function a(){var t=parseInt(i.a.get("type-filter")),e=[0,1,2,3];return e.includes(t)?t:(i.a.set("type-filter",0),0)}var o={listTask:r(),typeFilter:a()},l={SET_NEW_TASK:function(t,e){t.listTask.push(e),i.a.set("list-task",t.listTask)},DELETE_TASK:function(t,e){var s=t.listTask;s.splice(e,1),t.listTask=s,i.a.set("list-task",t.listTask)},DELETE_ALL_TASK:function(t){t.listTask=[],i.a.set("list-task",t.listTask)},UPDATE_STATUS_TASK:function(t,e){var s=e.index,n=e.status;t.listTask[s].status=n,i.a.set("list-task",t.listTask)},UPDATE_TITLE_TASK:function(t,e){var s=e.index,n=e.title;t.listTask[s].title=n,i.a.set("list-task",t.listTask)},SET_TYPE_FILTER:function(t,e){t.typeFilter=e,i.a.set("type-filter",t.typeFilter)}},u={setNewTask:function(t,e){var s=t.commit;s("SET_NEW_TASK",e)},deleteTask:function(t,e){var s=t.commit;s("DELETE_TASK",e)},deleteAllTask:function(t){var e=t.commit;e("DELETE_ALL_TASK")},updateStatusTask:function(t,e){var s=t.commit;s("UPDATE_STATUS_TASK",e)},updateTitleTask:function(t,e){var s=t.commit;s("UPDATE_TITLE_TASK",e)},setTypeFilter:function(t,e){var s=t.commit;s("SET_TYPE_FILTER",e)}};e["default"]={namespaced:!0,state:o,mutations:l,actions:u}}});
//# sourceMappingURL=app.2df769da.js.map