(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~d0ae3f07"],{0:function(t,e,i){t.exports=i("56d7")},"3dfd":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("transition",{attrs:{name:"component-fade",mode:"out-in"}},[t.auth?i("v-app-bar",{attrs:{fixed:"",app:""}},[t.drawer?t._e():i("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),i("v-toolbar-title",[t._v(t._s(t.$route.meta.title))]),i("v-spacer"),i("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{light:"",icon:""}},a),[i("v-icon",[t._v("more_vert")])],1)]}}],null,!1,3600953117)},[i("v-list",t._l(t.menuItems,(function(e,a){return i("v-list-item",{key:a,on:{click:function(i){return t.optionClick(e.id)}}},[i("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1):t._e()],1),i("v-dialog",{attrs:{persistent:"","max-width":"250px"},model:{value:t.settingpop,callback:function(e){t.settingpop=e},expression:"settingpop"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Settings")])]),i("v-card-text",[t._v(" Theme "),i("v-switch",{attrs:{label:t.theme?"Dark":"Light"},on:{change:function(e){return t.changeTheme()}},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeSetting}},[t._v(" Close ")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"300px"},model:{value:t.confirmLogout,callback:function(e){t.confirmLogout=e},expression:"confirmLogout"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Confirm")])]),i("v-card-text",[t._v(" Are you sure want to logout? ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.cancelLogout}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.runLogout}},[t._v(" Logout ")])],1)],1)],1),i("v-content",[i("transition",{attrs:{name:"component-fade",mode:"out-in"}},[i("router-view")],1),t.loadpage?i("div",{staticClass:"text-xs-center"},[i("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):t._e()],1),i("transition",{attrs:{name:"component-fade",mode:"out-in"}},[t.auth?i("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{staticClass:"pa-1"},[i("v-list-item",{on:{click:t.showProfile}},[i("v-avatar",{attrs:{size:"36"}},[i("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),i("v-list-item-content",[i("v-list-item-title",[t._v(" John Leider")])],1)],1)],1),2==t.getLevel?i("v-list",{staticClass:"pt-0",attrs:{dense:""}},[i("v-divider"),i("v-list-group",{attrs:{"prepend-icon":"account_circle",value:"false"}},[i("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-item-title",[t._v("Data Master")])],1),t._l(t.dataMaster,(function(e){return i("v-list-item",{key:e.title,on:{click:function(i){return t.pushRoute(e.path)}}},[i("v-list-item-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2),t._l(2==t.getLevel?t.itemsAdmin:t.items,(function(e){return i("v-list-item",{key:e.title,on:{click:function(i){return t.pushRoute(e.routename)}}},[i("v-list-item-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2):t._e()],1):t._e()],1)],1)},n=[],o={name:"App",data:function(){return{settingpop:!1,darkmode:!0,confirmLogout:!1,title:"",dialog:!1,isLogged:!0,drawer:null,list:[],items:[{title:"Home",icon:"dashboard",routename:"news"},{title:"About",icon:"question_answer",routename:"/"},{title:"Jadwal",icon:"schedule",routename:"teacher"},{title:"Nilai",icon:"edit",routename:"nilai"}],itemsAdmin:[{title:"Home",icon:"dashboard",routename:"/admin"}],dataMaster:[{title:"Siswa",icon:"people",path:"/admin/siswa"},{title:"Guru",icon:"people",path:"/admin/guru"},{title:"Pelajaran",icon:"book",path:"/admin/pelajaran"},{title:"Jadwal",icon:"assignment",path:"/admin/jadwal"},{title:"Kelas",icon:"room",path:"/admin/kelas"},{title:"Berita",icon:"description",path:"/admin/berita"},{title:"User",icon:"person",path:"/admin/user"},{title:"Jam Pelajaran",icon:"access_alarm",path:"/admin/jampelajaran"},{title:"Semester",icon:"list",path:"/admin/semester"},{title:"Hari",icon:"event",path:"/admin/hari"}],menuItems:[{title:"Settings",id:1},{title:"Logout",id:2}],drawers:{open:!0,clipped:!1,fixed:!0,permanent:!1,mini:!1}}},methods:{pushRoute:function(t){this.$router.push(t).catch((function(t){}))},optionClick:function(t){2===t?this.confirmLogout=!0:this.settingpop=!0},closeSetting:function(){this.settingpop=!1},cancelLogout:function(){this.confirmLogout=!1},runLogout:function(){this.confirmLogout=!1,this.$store.dispatch("authentication/logOut")},changeTheme:function(){this.$store.dispatch("settings/changeTheme",!this.theme),this.$vuetify.theme.dark=this.theme},showProfile:function(){this.$router.push("/admin/profile")}},computed:{auth:function(){return this.$store.getters["authentication/isUserLogged"]},theme:{get:function(){return this.$store.getters["settings/themeMode"]},set:function(t){return t}},getLevel:function(){return this.$store.state.authentication.level},loadpage:function(){return this.$store.getters["loadpage/isShow"]}},beforeCreate:function(){this.$store.dispatch("header/switchOn")},mounted:function(){this.$vuetify.theme.dark=this.theme}},r=o,s=i("2877"),c=i("6544"),l=i.n(c),u=i("7496"),d=i("40dc"),m=i("5bc1"),p=i("8212"),v=i("8336"),h=i("b0af"),f=i("99d9"),g=i("a75b"),_=i("169a"),w=i("ce7e"),b=i("132d"),k=i("8860"),L=i("56b0"),V=i("da13"),x=i("1800"),C=i("5d23"),$=i("e449"),A=i("f774"),S=i("490a"),T=i("2fa4"),j=i("b73d"),y=i("2a7f"),I=Object(s["a"])(r,a,n,!1,null,null,null);e["a"]=I.exports;l()(I,{VApp:u["a"],VAppBar:d["a"],VAppBarNavIcon:m["a"],VAvatar:p["a"],VBtn:v["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VContent:g["a"],VDialog:_["a"],VDivider:w["a"],VIcon:b["a"],VList:k["a"],VListGroup:L["a"],VListItem:V["a"],VListItemAction:x["a"],VListItemContent:C["a"],VListItemTitle:C["b"],VMenu:$["a"],VNavigationDrawer:A["a"],VProgressCircular:S["a"],VSpacer:T["a"],VSwitch:j["a"],VToolbarTitle:y["a"]})}}]);
//# sourceMappingURL=app~d0ae3f07.19c688d9.js.map