(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{123:function(e,t,n){var i=n(192);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(42).default)("385f4d10",i,!0,{sourceMap:!1})},124:function(e,t,n){var i=n(194);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(42).default)("2bb1bf5e",i,!0,{sourceMap:!1})},187:function(e,t,n){"use strict";var i,a=n(43),l=n(74).f,r=n(53),s=n(188),o=n(64),u=n(190),d=n(20),c="".startsWith,f=Math.min,h=u("startsWith");a({target:"String",proto:!0,forced:!!(d||h||(i=l(String.prototype,"startsWith"),!i||i.writable))&&!h},{startsWith:function(e){var t=String(o(this));s(e);var n=r(f(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return c?c.call(t,i,n):t.slice(n,n+i.length)===i}})},188:function(e,t,n){var i=n(189);e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},189:function(e,t,n){var i=n(3),a=n(21),l=n(10)("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==a(e))}},190:function(e,t,n){var i=n(10)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(e){}}return!1}},191:function(e,t,n){"use strict";n(123)},192:function(e,t,n){var i=n(41)(!1);i.push([e.i,".molecule-link-list.type--view-header[data-v-612674b0]{display:flex;padding:0;margin:0;list-style:none}.molecule-link-list.type--view-header a[data-v-612674b0]{display:block;padding:10px 15px;font-family:sans-serif;color:#333;text-decoration:none}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active[data-v-612674b0]{font-weight:700}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active[data-v-612674b0],.molecule-link-list.type--view-header a[data-v-612674b0]:hover{background:#eee}",""]),e.exports=i},193:function(e,t,n){"use strict";n(124)},194:function(e,t,n){var i=n(41)(!1);i.push([e.i,".organisms-view-header[data-v-4831b4e0]{position:relative}.organisms-view-header nav[data-v-4831b4e0]{display:flex;line-height:1}.organisms-view-header nav>span[data-v-4831b4e0]{padding:10px 15px;font-family:sans-serif;color:#333}",""]),e.exports=i},207:function(e,t,n){"use strict";n.r(t);var i=n(48),a=(n(187),{props:{url:{type:String,required:!1,default:"http://example.com"},title:{type:String,required:!1,default:null},click:{type:Function,default:function(){}},target:{type:String,required:!1,default:"_blank"}},computed:{isExternal:function(){return/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#")}}}),l=n(40),r={components:{AtomLinkTo:Object(l.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isExternal?n("a",{attrs:{href:e.url,target:e.target||"_blank",rel:"noopener",title:e.title},on:{click:e.click}},[e._t("default",[e._v(e._s(e.title))])],2):e.isExternal?e._e():n("router-link",{attrs:{to:e.url,title:e.title},on:{click:e.click}},[e._t("default",[e._v(e._s(e.title))])],2)}),[],!1,null,null,null).exports},props:{type:{type:String,default:function(){return null}},list:{type:Array,default:function(){return[]}}},computed:{styleClasses:function(){var e={};return e["type--".concat(this.type)]=this.type,e}},methods:{getUrl:function(e){if(!("$i18n"in this&&this.$i18n&&"localePath"in this.$i18n))return e.url;this.localePath(e.url)}}},s=(n(191),Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"molecule-link-list",class:e.styleClasses},[e._t("default",e._l(e.list,(function(t){return n("li",{key:t.title},[n("atom-link-to",e._b({attrs:{url:e.getUrl(t)}},"atom-link-to",t,!1),[e._v("\n        "+e._s(t.title)+"\n      ")])],1)})))],2)}),[],!1,null,"612674b0",null).exports),o={components:{AtomHeadline:i.a,MoleculeLinkList:s},props:{title:{type:String,default:"Header Title"},linksTitle:{type:String,default:"Links:"},navigation:{type:Array,default:function(){return[{title:"Link 1.",url:"#link-1",target:"_self"},{title:"Link 2.",url:"#link-2",target:"_self"},{title:"Link 3.",url:"#link-3",target:"_self"}]}}},computed:{headline:function(){return{overline:null,headline:this.title,subline:null}}}},u=(n(193),Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"organisms-view-header"},[n("atom-headline",e._b({attrs:{tag:"div","style-type":"view-header"}},"atom-headline",e.headline,!1)),e._v(" "),n("nav",[n("span",[e._v(e._s(e.linksTitle))]),e._v(" "),n("molecule-link-list",{staticClass:"links",attrs:{type:"view-header",list:e.navigation}})],1),e._v(" "),n("LazyGithubCorner")],1)}),[],!1,null,"4831b4e0",null));t.default=u.exports},44:function(e,t,n){var i=n(46);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(42).default)("2610b7a1",i,!0,{sourceMap:!1})},45:function(e,t,n){"use strict";n(44)},46:function(e,t,n){var i=n(41)(!1);i.push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=i},48:function(e,t,n){"use strict";var i={props:{tag:{type:String,required:!1,default:function(){return"h1"}},styleType:{type:String,default:function(){return null}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},a=(n(45),n(40)),l=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=l.exports}}]);