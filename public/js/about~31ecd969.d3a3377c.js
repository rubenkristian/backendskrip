(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about~31ecd969"],{"0bc6":function(t,e,s){},a2f9:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(e,a){return[e.header?s("v-subheader",{key:e.header},[t._v(" "+t._s(e.header)+" ")]):s("ListNews",{key:e.id,attrs:{item:e}}),a+1<t.items.length?s("v-divider",{key:a}):t._e()]}))],2)],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-list-tile",{key:t.item.id,attrs:{avatar:"",ripple:""},on:{click:function(e){return t.loadNews(t.item.id)}}},[s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:t._s(t.item.title)}}),s("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.item.subtitle)}})],1),s("v-list-tile-action",[s("v-list-tile-action-text",[t._v(t._s(t.item.timestample))])],1)],1)},r=[],l={props:{item:Object},methods:{loadNews:function(t){this.$router.push({name:"newspost",params:{id:t}})}}},o=l,d=s("2877"),m=Object(d["a"])(o,n,r,!1,null,null,null),u=m.exports,h={components:{ListNews:u},data:function(){return{items:[{header:"News"},{id:1,avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Brunch this weekend?",subtitle:"<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",timestample:"1 minutes"},{id:2,avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:"<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",timestample:"4 minutes"},{id:3,avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Oui oui",subtitle:"<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",timestample:"10 minutes"},{id:4,avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Birthday gift",subtitle:"<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",timestample:"12 minutes"},{id:5,avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Recipe to try",subtitle:"<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",timestample:"30 minutes"},{id:6,avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Birthday gift",subtitle:"<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",timestample:"2 hours"},{id:7,avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Recipe to try",subtitle:"<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",timestample:"2 hours"},{id:8,avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Birthday gift",subtitle:"<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",timestample:"3 hours"}]}}},p=h,c=s("6544"),v=s.n(c),y=s("a523"),b=s("ce7e"),f=s("8860"),g=s("e0c7"),w=Object(d["a"])(p,a,i,!1,null,null,null);e["default"]=w.exports;v()(w,{VContainer:y["a"],VDivider:b["a"],VList:f["a"],VSubheader:g["a"]})},e0c7:function(t,e,s){"use strict";s("0bc6");var a=s("7560"),i=s("58df");e["a"]=Object(i["a"])(a["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=about~31ecd969.d3a3377c.js.map