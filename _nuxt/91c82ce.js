(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6],{742:function(t,e,n){"use strict";n.r(e);var r={props:{img:Object},data:function(){return{std:"https://assets8.lottiefiles.com/datafiles/w8kbBwzPRk7sTCe/data.json",tag:"https://assets10.lottiefiles.com/datafiles/FhxLq41wsIS6M7I/data.json",unicorn:"https://assets2.lottiefiles.com/packages/lf20_kJNwM4.json",profile:"https://assets7.lottiefiles.com/packages/lf20_sedl1vh6.json",avatar:"https://assets7.lottiefiles.com/private_files/lf30_c0ujh33h.json",multiavatar:"https://assets2.lottiefiles.com/packages/lf20_n5icqxkw.json",load:"https://assets3.lottiefiles.com/private_files/lf30_czmjkzqg.json"}},methods:{get:function(){if(this.img.lottie)return this.img.lottie;switch(this.img.type){case 0:return this.load;case 1:return this.profile;case 2:return this.tag;default:return this.load}},bg:function(){var t={};return this.img.bg?this.img.bg:t[this.img.type]?t[this.img.type][this.$vuetify.theme.dark]:"transparent"}}},o=n(31),l=n(34),c=n.n(l),h=n(829),d=n(163),m=n(811),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",{attrs:{height:t.img.height?t.img.height<0?null:t.img.height:"250","lazy-src":t.img.lottie||t.img.type>0?null:t.$themer.gallery.loading,src:t.$themer.gallery.get(t.img.src,t.img.slug),alt:t.img.slug?t.img.slug:"img-alt"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t.img.simple?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}}):n("lottie-player",{attrs:{src:t.get(),background:t.bg(),speed:"1",loop:"",autoplay:""}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:h.a,VProgressCircular:d.a,VRow:m.a})},755:function(t,e,n){"use strict";n.r(e);var r={props:{article:Object},data:function(){return{options:{minimizable:!1,playerSize:"standard",backgroundColor:"#fff",backgroundStyle:"color",theme:{controlsView:"standard",active:"light",light:{color:"#3D4852",backgroundColor:"#fff",opacity:"0.7"},dark:{color:"#fff",backgroundColor:"#202020",opacity:"0.7"}}}}}},o=n(31),l=n(34),c=n.n(l),h=n(731),d=n(744),m=n(741),f=n(164),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-img-lottie",{attrs:{img:{src:t.article.img,slug:t.article.slug,type:0}}}),t._v(" "),n("v-card-title",[t._v("\n    "+t._s(t.article.title||t.article.content.title||"title err")+"\n    "),n("v-btn",{attrs:{icon:"",color:"teal accent-4",to:{name:"blog-slug",params:{slug:t.article.slug}},nuxt:""}},[n("v-icon",[t._v("mdi-open-in-new")])],1)],1),t._v(" "),n("v-card-subtitle",[t._v("\n    by "+t._s((t.article.content.authors.map((function(s){return s.name}))||[]).toString()||"anonymous")+"\n  ")]),t._v(" "),n("v-card-text",[t._v("\n    "+t._s(t.article.content.description||"")+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImgLottie:n(742).default}),c()(component,{VBtn:h.a,VCard:d.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VIcon:f.a})},756:function(t,e,n){"use strict";var r=new(n(0).a)({data:function(){return{event:null,vssWidth:null,vssHeight:null}}}),o={computed:{$vssEvent:function(){return r.event},$vssWidth:function(){return r.vssWidth||this.getScreenWidth()},$vssHeight:function(){return r.vssHeight||this.getScreenHeight()}},methods:{getScreenWidth:function(){return("undefined"==typeof window?1024:window.innerWidth)||document.documentElement.clientWidth||document.body.clientWidth},getScreenHeight:function(){return("undefined"==typeof window?768:window.innerHeight)||document.documentElement.clientHeight||document.body.clientHeight},handleResize:function(t){r.event=t,r.vssWidth=this.getScreenWidth(),r.vssHeight=this.getScreenHeight()},$vssDestroyListener:function(){window.removeEventListener("resize",this.handleResize)}},mounted:function(){window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},l={install:function(t){t.mixin(o)},NuxtSSRScreenSizeMixin:o};e.a=l},782:function(t,e,n){"use strict";(function(t){var r=n(27),o=n(76),l=(n(93),n(29),n(24),n(13),n(756));e.a={head:function(){return{title:this.tag.name,titleTemplate:"Blog - Tag: %s",meta:Object(o.a)(this.$utils.meta.get({keywords:"".concat(this.tag.name,",blog,post"),title:"Blog Tag: ".concat(this.tag.name),description:"posts about ".concat(this.tag.name),image:this.$themer.gallery.get({src:this.tag.img,slug:this.tag.name}),url:"".concat(t.env.BASE_URL||"http://localhost:3000").concat(this.$route.path||"")||""}))}},mixins:[l.a.NuxtSSRScreenSizeMixin],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("tags").without("body").where({slug:{$contains:r.tag}}).limit(1).fetch();case 3:return o=e.sent,l=o[0]||{},e.next=7,n("articles",r.slug).without("body").sortBy("createdAt","asc").where({tags:{$contains:l.name}}).fetch();case 7:return c=e.sent,e.abrupt("return",{articles:c,tag:l});case 9:case"end":return e.stop()}}),e)})))()},methods:{filter:function(t,col){return this.$themer.masonary.filter(t,col,this.articles,this.masonary())},masonary:function(){return this.$themer.masonary.cols(this.$vssWidth)}},layout:"blog"}}).call(this,n(172))},826:function(t,e,n){"use strict";n.r(e);var r=n(782).a,o=n(31),l=n(34),c=n.n(l),h=n(812),d=n(731),m=n(744),f=n(741),v=n(773),w=n(739),y=n(84),_=n(164),x=n(811),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-card-subtitle",[n("v-avatar",[n("v-img-lottie",{attrs:{img:{src:t.tag.img,slug:t.tag.slug,type:2,height:-1}}})],1),t._v(" "),n("v-btn",{attrs:{small:"",text:"",color:t.$themer.color.seeded(t.tag.slug)}},[t._v("\n            "+t._s(t.tag.name)+"\n            "),n("v-icon",{attrs:{right:""}},[t._v("mdi-tag-text-outline")])],1),t._v("\n          "+t._s(t.tag.description)+"\n        ")],1)],1)],1),t._v(" "),t._l(t.masonary(),(function(e){return n("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},t._l(t.articles,(function(article){return n("v-expand-transition",{key:article.slug},[n("v-post-snapshot",{directives:[{name:"show",rawName:"v-show",value:t.filter(article.slug,e),expression:"filter(article.slug, mCol)"}],staticClass:"mb-6",attrs:{article:article}})],1)})),1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImgLottie:n(742).default,VPostSnapshot:n(755).default}),c()(component,{VAvatar:h.a,VBtn:d.a,VCard:m.a,VCardSubtitle:f.b,VCol:v.a,VContainer:w.a,VExpandTransition:y.a,VIcon:_.a,VRow:x.a})}}]);