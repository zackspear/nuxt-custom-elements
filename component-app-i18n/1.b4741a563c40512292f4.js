(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{118:function(e,t,l){var i=l(122);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,l(65).default)("2610b7a1",i,!0,{sourceMap:!1})},119:function(e,t,l){var i=l(124);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,l(65).default)("385f4d10",i,!0,{sourceMap:!1})},120:function(e,t,l){var i=l(126);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,l(65).default)("2bb1bf5e",i,!0,{sourceMap:!1})},121:function(e,t,l){"use strict";l(118)},122:function(e,t,l){var i=l(64)(!1);i.push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=i},123:function(e,t,l){"use strict";l(119)},124:function(e,t,l){var i=l(64)(!1);i.push([e.i,".molecule-link-list.type--view-header[data-v-612674b0]{display:flex;padding:0;margin:0;list-style:none}.molecule-link-list.type--view-header a[data-v-612674b0]{display:block;padding:10px 15px;font-family:sans-serif;color:#333;text-decoration:none}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active[data-v-612674b0]{font-weight:700}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active[data-v-612674b0],.molecule-link-list.type--view-header a[data-v-612674b0]:hover{background:#eee}",""]),e.exports=i},125:function(e,t,l){"use strict";l(120)},126:function(e,t,l){var i=l(64)(!1);i.push([e.i,".organisms-view-header[data-v-4831b4e0]{position:relative}.organisms-view-header nav[data-v-4831b4e0]{display:flex;line-height:1}.organisms-view-header nav>span[data-v-4831b4e0]{padding:10px 15px;font-family:sans-serif;color:#333}",""]),e.exports=i},127:function(e,t,l){"use strict";l.r(t);var i={props:{tag:{type:String,required:!1,default:()=>"h1"},styleType:{type:String,default:()=>null},overline:{type:String,required:!1,default:()=>"Lorem Overline"},headline:{type:String,required:!1,default:()=>"Lorem Headline"},subline:{type:String,required:!1,default:()=>"Lorem Subline"}},computed:{styleClasses(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},a=(l(121),l(18)),n=Object(a.a)(i,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?l("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?l("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?l("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null).exports,s={props:{url:{type:String,required:!1,default:"http://example.com"},title:{type:String,required:!1,default:null},click:{type:Function,default(){}},target:{type:String,required:!1,default:"_blank"}},computed:{isExternal(){return/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#")}}},r={components:{AtomLinkTo:Object(a.a)(s,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.isExternal?l("a",{attrs:{href:e.url,target:e.target||"_blank",rel:"noopener",title:e.title},on:{click:e.click}},[e._t("default",[e._v(e._s(e.title))])],2):e.isExternal?e._e():l("router-link",{attrs:{to:e.url,title:e.title},on:{click:e.click}},[e._t("default",[e._v(e._s(e.title))])],2)}),[],!1,null,null,null).exports},props:{type:{type:String,default:()=>null},list:{type:Array,default:()=>[]}},computed:{styleClasses(){var e={};return e["type--".concat(this.type)]=this.type,e}},methods:{getUrl(e){if(!("$i18n"in this&&this.$i18n&&"localePath"in this.$i18n))return e.url;this.localePath(e.url)}}},o=(l(123),{components:{AtomHeadline:n,MoleculeLinkList:Object(a.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"molecule-link-list",class:e.styleClasses},[e._t("default",e._l(e.list,(function(t){return l("li",{key:t.title},[l("atom-link-to",e._b({attrs:{url:e.getUrl(t)}},"atom-link-to",t,!1),[e._v("\n        "+e._s(t.title)+"\n      ")])],1)})))],2)}),[],!1,null,"612674b0",null).exports},props:{title:{type:String,default:"Header Title"},linksTitle:{type:String,default:"Links:"},navigation:{type:Array,default:()=>[{title:"Link 1.",url:"#link-1",target:"_self"},{title:"Link 2.",url:"#link-2",target:"_self"},{title:"Link 3.",url:"#link-3",target:"_self"}]}},computed:{headline(){return{overline:null,headline:this.title,subline:null}}}}),d=(l(125),Object(a.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"organisms-view-header"},[l("atom-headline",e._b({attrs:{tag:"div","style-type":"view-header"}},"atom-headline",e.headline,!1)),e._v(" "),l("nav",[l("span",[e._v(e._s(e.linksTitle))]),e._v(" "),l("molecule-link-list",{staticClass:"links",attrs:{type:"view-header",list:e.navigation}})],1),e._v(" "),l("LazyGithubCorner")],1)}),[],!1,null,"4831b4e0",null));t.default=d.exports}}]);