(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{753:function(t,e,l){"use strict";l.r(e);var r={props:{img:Object},data:function(){return{std:"https://assets8.lottiefiles.com/datafiles/w8kbBwzPRk7sTCe/data.json",tag:"https://assets10.lottiefiles.com/datafiles/FhxLq41wsIS6M7I/data.json",unicorn:"https://assets2.lottiefiles.com/packages/lf20_kJNwM4.json",profile:"https://assets7.lottiefiles.com/packages/lf20_sedl1vh6.json",avatar:"https://assets7.lottiefiles.com/private_files/lf30_c0ujh33h.json",multiavatar:"https://assets2.lottiefiles.com/packages/lf20_n5icqxkw.json",load:"https://assets3.lottiefiles.com/private_files/lf30_czmjkzqg.json"}},methods:{get:function(){if(this.img.lottie)return this.img.lottie;switch(this.img.type){case 0:return this.load;case 1:return this.profile;case 2:return this.tag;default:return this.load}},bg:function(){var t={};return this.img.bg?this.img.bg:t[this.img.type]?t[this.img.type][this.$vuetify.theme.dark]:"transparent"}}},o=l(32),n=l(35),c=l.n(n),h=l(814),m=l(169),f=l(845),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-img",{attrs:{height:t.img.height?t.img.height<0?null:t.img.height:"250","lazy-src":t.img.lottie||t.img.type>0?null:t.$themer.gallery.loading,src:t.$themer.gallery.get(t.img.src,t.img.slug),alt:t.img.slug?t.img.slug:"img-alt"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[l("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t.img.simple?l("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}}):l("lottie-player",{attrs:{src:t.get(),background:t.bg(),speed:"1",loop:"",autoplay:""}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:h.a,VProgressCircular:m.a,VRow:f.a})}}]);