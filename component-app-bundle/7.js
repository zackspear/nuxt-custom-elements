(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{10:function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(9).default)("5409cc8c",r,!0,{sourceMap:!1})},15:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(0),a=n(25);function i(e){return e.map(e=>({path:"/".concat(e).replace(/index$/,""),component:()=>function(e){return n(21)("./"+e)}(e)}))}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"abstract",n=new a.a({mode:t,base:e.CUSTOM_ELEMENT_ROUTER_BASE||e.location.pathname});return"abstract"===t&&n.replace("/"),n}r.a.use(a.a)}).call(this,n(1))},19:function(e,t,n){"use strict";var r=n(10);n.n(r).a},20:function(e,t,n){(t=n(7)(!1)).push([e.i,"div[data-v-02921181]{position:relative}.router-view-change-enter-active[data-v-02921181],.router-view-change-leave-active[data-v-02921181]{transition:opacity 0s linear .15s}.router-view-change-enter[data-v-02921181],.router-view-change-leave-to[data-v-02921181]{position:absolute;width:100%;opacity:0;transition:opacity .15s linear .15s}",""]),e.exports=t},21:function(e,t,n){var r={"./":[13,1],"./index":[13,1],"./index.vue":[13,1],"./view-1":[16,3],"./view-1.vue":[16,3],"./view-2":[17,4],"./view-2.vue":[17,4],"./view-3":[18,5],"./view-3.vue":[18,5]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=21,e.exports=a},22:function(e,t,n){var r={"./base.js":23};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=22},23:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return a})),n.d(t,"getters",(function(){return i})),n.d(t,"actions",(function(){return o}));var r=()=>({value:!0}),a={value(e,t){e.value=Boolean(t)}},i={value:e=>e.value},o={setValue(e,t){e.commit("value",t)}}},24:function(e,t,n){"use strict";var r={name:"CustomElementRouterView"},a=(n(19),n(6)),i=Object(a.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("transition",{attrs:{name:"router-view-change"}},[t("keep-alive",[this.$router?t("router-view"):this._e()],1)],1)],1)}),[],!1,null,"02921181",null).exports,o=n(15),u=n(0),s=n(26);u.a.use(s.a);u.a.component("NuxtLink",{extends:u.a.component("RouterLink")});var c,l={components:{CustomElementRouterView:i},store:new s.a.Store({modules:(c=n(22),c.keys().reduce((e,t)=>{var n=t.replace(/\.\/(.*)\.js/,"$1");return e[String(n)]=Object.assign({namespaced:!0},c(t)),e},{}))}),props:{basePath:{type:String,default:()=>"/"},mode:{type:String,default:()=>"history"}},data:()=>({views:["index"]}),created(){this.$router&&this.$router.addRoutes(Object(o.b)(this.views))}},v=Object(a.a)(l,void 0,void 0,!1,null,null,null);t.a=v.exports},27:function(e,t,n){var r=n(39);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(9).default)("bdfb96ea",r,!0,{sourceMap:!1})},38:function(e,t,n){"use strict";var r=n(27);n.n(r).a},39:function(e,t,n){(t=n(7)(!1)).push([e.i,".custom-element-app-abstract{padding:15px;background:#eee;border:1px solid #eee}.custom-element-app-abstract .header,.custom-element-app-abstract .router-view{background:#fff;border:1px solid #eee}.custom-element-app-abstract .router-view{min-height:160px;padding:0 15px;margin-top:20px}",""]),e.exports=t},63:function(e,t,n){"use strict";n.r(t);var r=n(24),a=n(15),i={name:"AppTwo",components:{OrganismViewHeader:()=>n.e(0).then(n.bind(null,62))},extends:r.a,router:Object(a.a)("abstract"),data:()=>({views:["index","view-1","view-2","view-3"]}),computed:{content:()=>({header:{title:'App with router mode "abstract"',navigation:[{title:"Home",url:"/"},{title:"View 1",url:"/view-1"},{title:"View 2",url:"/view-2"},{title:"View 3",url:"/view-3"}]}}),header(){return this.content.header}}},o=(n(38),n(6)),u=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"custom-element-app-abstract"},[t("organism-view-header",this._b({staticClass:"header"},"organism-view-header",this.header,!1)),this._v(" "),t("custom-element-router-view",{staticClass:"router-view"})],1)}),[],!1,null,null,null);t.default=u.exports}}]);