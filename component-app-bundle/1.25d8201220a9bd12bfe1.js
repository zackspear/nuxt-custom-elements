(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(e,t,n){"use strict";var a=n(8);n.n(a).a},12:function(e,t,n){(t=n(7)(!1)).push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=t},13:function(e,t,n){"use strict";n.r(t);var a=n(14),i={computed:{storeValue(){return this.$store.getters["base/value"]}},methods:{onClick(){this.$store.dispatch("base/setValue",!this.storeValue)}}},s=(n(51),n(6)),l=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-shared-store"},[t("p",[this._v("\n    Store Value: "+this._s(this.storeValue)+" -\n    "),t("button",{on:{click:this.onClick}},[this._v("\n      Change Value\n    ")])])])}),[],!1,null,null,null).exports,o={components:{AtomHeadline:a.a,OrganismSharedStore:l},data:()=>({headline:{overline:null,headline:"Custom-Element Example",subline:null}}),mounted(){n.e(6).then(n.bind(null,62))}},d=(n(53),Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"view-index"},[t("atom-headline",this._b({attrs:{"style-type":"view"}},"atom-headline",this.headline,!1)),this._v(" "),t("img",{attrs:{src:n(50)}}),this._v(" "),t("organism-shared-store")],1)}),[],!1,null,null,null));t.default=d.exports},14:function(e,t,n){"use strict";var a={props:{tag:{type:String,required:!1,default:()=>"h1"},styleType:{type:String,default:()=>null},overline:{type:String,required:!1,default:()=>"Lorem Overline"},headline:{type:String,required:!1,default:()=>"Lorem Headline"},subline:{type:String,required:!1,default:()=>"Lorem Subline"}},computed:{styleClasses(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},i=(n(11),n(6)),s=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=s.exports},33:function(e,t,n){var a=n(52);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(9).default)("8c8c129c",a,!0,{sourceMap:!1})},34:function(e,t,n){var a=n(54);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(9).default)("ff1d8b54",a,!0,{sourceMap:!1})},50:function(e,t,n){e.exports=n.p+"img/image.aa044df.png"},51:function(e,t,n){"use strict";var a=n(33);n.n(a).a},52:function(e,t,n){(t=n(7)(!1)).push([e.i,"",""]),e.exports=t},53:function(e,t,n){"use strict";var a=n(34);n.n(a).a},54:function(e,t,n){(t=n(7)(!1)).push([e.i,".view-index img{height:32px}",""]),e.exports=t},8:function(e,t,n){var a=n(12);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(9).default)("73520390",a,!0,{sourceMap:!1})}}]);