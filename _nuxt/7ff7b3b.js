(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7],{751:function(t,e,r){"use strict";r.r(e);var n={props:{img:Object},data:function(){return{std:"https://assets8.lottiefiles.com/datafiles/w8kbBwzPRk7sTCe/data.json",tag:"https://assets10.lottiefiles.com/datafiles/FhxLq41wsIS6M7I/data.json",unicorn:"https://assets2.lottiefiles.com/packages/lf20_kJNwM4.json",profile:"https://assets7.lottiefiles.com/packages/lf20_sedl1vh6.json",avatar:"https://assets7.lottiefiles.com/private_files/lf30_c0ujh33h.json",multiavatar:"https://assets2.lottiefiles.com/packages/lf20_n5icqxkw.json",load:"https://assets3.lottiefiles.com/private_files/lf30_czmjkzqg.json"}},methods:{get:function(){if(this.img.lottie)return this.img.lottie;switch(this.img.type){case 0:return this.load;case 1:return this.profile;case 2:return this.tag;default:return this.load}},bg:function(){var t={};return this.img.bg?this.img.bg:t[this.img.type]?t[this.img.type][this.$vuetify.theme.dark]:"transparent"}}},o=r(32),l=r(35),c=r.n(l),h=r(812),m=r(167),f=r(843),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",{attrs:{height:t.img.height?t.img.height<0?null:t.img.height:"250","lazy-src":t.img.lottie||t.img.type>0?null:t.$themer.gallery.loading,src:t.$themer.gallery.get(t.img.src,t.img.slug),alt:t.img.slug?t.img.slug:"img-alt"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t.img.simple?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}}):r("lottie-player",{attrs:{src:t.get(),background:t.bg(),speed:"1",loop:"",autoplay:""}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:h.a,VProgressCircular:m.a,VRow:f.a})},764:function(t,e,r){var content=r(765);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("ad978da8",content,!0,{sourceMap:!1})},765:function(t,e,r){var n=r(18)(!1);n.push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;position:relative;text-align:center;vertical-align:middle;overflow:hidden}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),t.exports=n},767:function(t,e,r){"use strict";r.r(e);var n={props:{article:Object,default:function(){}},data:function(){return{}}},o=r(32),l=r(35),c=r.n(l),h=r(741),m=r(753),f=r(750),v=r(168),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-img-lottie",{attrs:{img:{src:t.article.content.img.url,slug:t.article.slug,type:0}}}),t._v(" "),r("v-card-title",[t._v("\n    "+t._s(t.article.content.title||"title err")+"\n    "),r("v-btn",{attrs:{icon:"",color:"teal accent-4",to:{path:"/blog/"+t.article.slug,params:{slug:t.article.slug}},nuxt:""}},[r("v-icon",[t._v("mdi-open-in-new")])],1)],1),t._v(" "),r("v-card-subtitle",[t._v("\n    by "+t._s((t.article.content.authors.map((function(s){return s.name}))||[]).toString()||"anonymous")+"\n  ")]),t._v(" "),r("v-card-text",[t._v("\n    "+t._s(t.article.content.description||"")+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImgLottie:r(751).default}),c()(component,{VBtn:h.a,VCard:m.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VIcon:v.a})},782:function(t,e,r){"use strict";r(13),r(10),r(15),r(20),r(12),r(21);var n=r(1),o=(r(41),r(764),r(45)),l=r(177),c=r(180),h=r(2),m=r(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(m.a)(o.a,l.a,c.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return v({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return v({height:Object(h.f)(this.size),minWidth:Object(h.f)(this.size),width:Object(h.f)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),this.$slots.default)}})},802:function(t,e,r){"use strict";(function(t){var n=r(28),o=r(78),l=(r(95),r(30),r(24),r(15),r(789));e.a={head:function(){return{title:this.author.name,titleTemplate:"Blog - Author: %s",meta:Object(o.a)(this.$utils.meta.get({keywords:"".concat(this.author.name,",blog,post"),title:"Blog Author: ".concat(this.author.name),description:"posts by ".concat(this.author.name),image:this.$themer.gallery.get({src:this.author.img,slug:this.author.name}),url:"".concat(t.env.BASE_URL||"http://localhost:3000").concat(this.$route.path||"")||""}))}},mixins:[l.a.NuxtSSRScreenSizeMixin],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("authors").without("body").where({slug:{$containsAny:n.author}}).limit(1).fetch();case 3:return o=e.sent,l=o[0]||{},e.next=7,r("articles",n.slug).without("body").sortBy("createdAt","asc").where({authors:{$containsAny:l.name}}).fetch();case 7:return c=e.sent,e.abrupt("return",{articles:c,author:l});case 9:case"end":return e.stop()}}),e)})))()},methods:{filter:function(t,col){return this.$themer.masonary.filter(t,col,this.articles,this.masonary())},masonary:function(){return this.$themer.masonary.cols(this.$vssWidth)}},layout:"blog"}}).call(this,r(175))},855:function(t,e,r){"use strict";r.r(e);var n=r(802).a,o=r(32),l=r(35),c=r.n(l),h=r(782),m=r(741),f=r(753),v=r(750),d=r(788),y=r(747),_=r(85),w=r(168),j=r(843),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-subtitle",[r("v-avatar",[r("v-img-lottie",{attrs:{img:{src:t.author.img,slug:t.author.slug,type:1,height:-1}}})],1),t._v(" "),r("v-btn",t._b({attrs:{small:"",text:"",color:t.$themer.color.seeded(t.author.slug)}},"v-btn","/"==t.author.home.charAt(0)?{to:t.author.home,nuxt:!0}:{href:t.author.home},!1),[t._v("\n            "+t._s(t.author.name)+"\n            "),r("v-icon",{attrs:{right:""}},[t._v("mdi-account-circle")])],1),t._v("\n          "+t._s(t.author.bio)+"\n        ")],1)],1)],1),t._v(" "),t._l(t.masonary(),(function(e){return r("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},t._l(t.articles,(function(article){return r("v-expand-transition",{key:article.slug},[r("v-post-snapshot",{directives:[{name:"show",rawName:"v-show",value:t.filter(article.slug,e),expression:"filter(article.slug, mCol)"}],staticClass:"mb-6",attrs:{article:article}})],1)})),1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImgLottie:r(751).default,VPostSnapshot:r(767).default}),c()(component,{VAvatar:h.a,VBtn:m.a,VCard:f.a,VCardSubtitle:v.b,VCol:d.a,VContainer:y.a,VExpandTransition:_.a,VIcon:w.a,VRow:j.a})}}]);