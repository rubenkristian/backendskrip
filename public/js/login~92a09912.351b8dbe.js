(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login~92a09912"],{a55b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-6"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v(t._s(t.getType.title))]),a("v-spacer")],1),a("v-alert",{attrs:{value:t.errMessage,color:"error",icon:"warning",transition:"fade-transition"}},[t._v(" "+t._s(t.errMessage)+" ")]),a("v-card-text",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text",rules:t.userRules,required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password",rules:t.passRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",loading:t.isLoading,disabled:t.isLoading},on:{click:t.submitLogin}},[t._v("Login")])],1)],1)],1)],1)],1)],1)},n=[],s=(a("ac1f"),a("1276"),{data:function(){return{valid:!1,username:"",password:"",passRules:[function(t){return!!t||"password is required"},function(t){return t&&t.length>6||"Password must more than 6 character"}],userRules:[function(t){return!!t||"Username is required"},function(t){return t&&t.length>5||"Username must more than 5 character"}],loadaction:!1}},methods:{sub:function(){var t=this;this.$refs.form.validate()&&(this.loadaction=!0,setTimeout((function(){t.loadaction=!1,1===t.getType.type?(t.$store.dispatch("authentication/fakeloginadm"),t.$router.push("/admin")):(t.$store.dispatch("authentication/fakelogin"),t.$router.push("/"))}),3e3))},submitLogin:function(){var t=this.username,e=this.password,a=this.$store.dispatch;this.$refs.form.validate()&&(1===this.getType.type?a("authentication/adminLogIn",{username:t,password:e}):a("authentication/logIn",{username:t,password:e}))}},computed:{isLoading:function(){return this.$store.state.authentication.loading},errMessage:function(){return this.$store.getters["authentication/getError"]},getType:function(){return"admin"===this.$route.path.split("/")[1]?{title:"Admin Login",type:1}:{title:"User Login",type:2}},isLoged:function(){return this.$store.getters["authentication/isUserLogged"]}}}),i=s,o=a("2877"),l=a("6544"),u=a.n(l),d=a("0798"),c=a("8336"),p=a("b0af"),f=a("99d9"),m=a("a523"),h=a("a75b"),g=a("0e8f"),v=a("4bd4"),b=a("a722"),w=a("2fa4"),y=a("8654"),V=a("71d9"),x=a("2a7f"),L=Object(o["a"])(i,r,n,!1,null,null,null);e["default"]=L.exports;u()(L,{VAlert:d["a"],VBtn:c["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["b"],VContainer:m["a"],VContent:h["a"],VFlex:g["a"],VForm:v["a"],VLayout:b["a"],VSpacer:w["a"],VTextField:y["a"],VToolbar:V["a"],VToolbarTitle:x["a"]})}}]);
//# sourceMappingURL=login~92a09912.351b8dbe.js.map