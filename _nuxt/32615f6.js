(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{773:function(t,e,r){"use strict";r(12),r(16),r(21),r(22);var n=r(2),o=(r(4),r(41),r(14),r(20),r(61),r(753),r(45),r(754),r(755),r(756),r(757),r(758),r(759),r(760),r(761),r(762),r(763),r(764),r(765),r(766),r(49),r(38),r(13),r(68),r(280),r(0)),c=r(96),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=d.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),m=d.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function O(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var v=w.get(l);return v||function(){var t,e;for(e in v=[],j)j[e].forEach((function(t){var n=r[t],o=O(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},778:function(t,e,r){"use strict";(function(t){var n=r(78);r(25);e.a={head:function(){return{title:"About",meta:Object(n.a)(this.$utils.meta.get({keywords:"contribution,information,about,acknowledge",title:"About",description:"Information Page of Moenupa's Website",url:"".concat(t.env.BASE_URL||"http://localhost:3000").concat(this.$route.path||"")||""}))}}}}).call(this,r(171))},837:function(t,e,r){"use strict";r.r(e);var n=r(778).a,o=r(32),c=r(35),l=r.n(c),f=r(725),v=r(773),d=r(731),h=r(165),y=r(797),m=r(828),j=(r(286),r(1)),O=Object(j.h)("spacer","div","v-spacer"),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"d-flex flex-column justify-center align-center ma-auto"},[r("v-row",[r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"4",md:"5",lg:"6"}},[r("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg",alt:""}})],1),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h1",{staticClass:"text-xl-h1 text-lg-h2 text-md-h3 text-h4 font-weight-light",style:"color:"+(t.$vuetify.theme.dark?"#00C58E":"#2F495E")},[t._v("\n        Moenupa.homepage\n      ")]),t._v(" "),r("h3",{staticClass:"text-xl-h4 text-lg-h5 text-h6 font-weight-light teal--text text--darken-1"},[t._v("\n        Powered by Nuxt.js and Vuetify\n      ")])])],1),t._v(" "),r("v-row",[r("v-col",[r("v-btn",{attrs:{href:"https://nuxtjs.org/",target:"_blank",color:"success "+(t.$vuetify.theme.dark?"":"darken-1")}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-nuxt")]),t._v("\n        Nuxt.js\n      ")],1)],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{href:"https://vuetifyjs.com/",target:"_blank",color:"primary"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-vuetify")]),t._v("\n        Vuetify\n      ")],1)],1)],1),t._v(" "),r("v-row",[r("v-col",[r("v-btn",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",outlined:"",color:"secondary lighten-2"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-nuxt")]),t._v("\n        GitHub\n      ")],1)],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify",target:"_blank",outlined:"",color:"secondary lighten-2"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-vuetify")]),t._v("\n        GitHub\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:f.a,VCol:v.a,VContainer:d.a,VIcon:h.a,VImg:y.a,VRow:m.a,VSpacer:O})}}]);