(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230e61"],{edf2:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-flex",{staticClass:"text-xs-center text-sm-center text-md-center text-lg-center",attrs:{xs12:""}},[e.imageUrl?n("img",{attrs:{src:e.imageUrl,height:"150"}}):e._e(),n("v-text-field",{attrs:{label:"Select Image","prepend-icon":"attach_file"},on:{click:e.pickFile},model:{value:e.imageName,callback:function(t){e.imageName=t},expression:"imageName"}}),n("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFilePicked}})],1),n("v-text-field",{attrs:{counter:50,label:"Name","data-vv-name":"name",required:""},model:{value:e.forminput.name,callback:function(t){e.$set(e.forminput,"name",t)},expression:"forminput.name"}}),n("v-text-field",{attrs:{counter:20,label:"NIS",required:""},on:{keypress:e.isNumber},model:{value:e.forminput.nis,callback:function(t){e.$set(e.forminput,"nis",t)},expression:"forminput.nis"}}),n("v-select",{attrs:{items:e.genderlist,label:"Jenis Kelamin",required:""},model:{value:e.forminput.gender,callback:function(t){e.$set(e.forminput,"gender",t)},expression:"forminput.gender"}}),n("v-select",{attrs:{items:e.religionlist,label:"Agama",required:""},model:{value:e.forminput.religion,callback:function(t){e.$set(e.forminput,"religion",t)},expression:"forminput.religion"}}),n("v-text-field",{attrs:{counter:50,label:"Tempat Lahir",required:""},model:{value:e.forminput.bornplace,callback:function(t){e.$set(e.forminput,"bornplace",t)},expression:"forminput.bornplace"}}),n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.forminput.borndate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.forminput,"borndate",t)},"update:return-value":function(t){return e.$set(e.forminput,"borndate",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Picker in menu","prepend-icon":"event",readonly:"",required:""},model:{value:e.forminput.borndate,callback:function(t){e.$set(e.forminput,"borndate",t)},expression:"forminput.borndate"}},a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-date-picker",{ref:"picker",attrs:{max:(new Date).toISOString().substr(0,10),min:"1950-01-01",required:""},on:{change:e.save},model:{value:e.forminput.borndate,callback:function(t){e.$set(e.forminput,"borndate",t)},expression:"forminput.borndate"}})],1),n("v-text-field",{attrs:{counter:50,label:"Nama Ayah","data-vv-name":"name",required:""},model:{value:e.forminput.fathername,callback:function(t){e.$set(e.forminput,"fathername",t)},expression:"forminput.fathername"}}),n("v-text-field",{attrs:{counter:50,label:"Nama Ibu","data-vv-name":"name",required:""},model:{value:e.forminput.mothername,callback:function(t){e.$set(e.forminput,"mothername",t)},expression:"forminput.mothername"}}),n("v-textarea",{attrs:{counter:50,label:"Alamat",hint:"Tulis alamat disini..."},model:{value:e.forminput.address,callback:function(t){e.$set(e.forminput,"address",t)},expression:"forminput.address"}}),n("v-text-field",{attrs:{counter:12,label:"Nomor Telepon",required:""},on:{keypress:e.isNumber},model:{value:e.forminput.phonenumber,callback:function(t){e.$set(e.forminput,"phonenumber",t)},expression:"forminput.phonenumber"}}),n("v-select",{attrs:{items:e.classselect,"item-text":"name","item-value":"id",label:"Kelas","persistent-hint":"","return-object":"","single-line":""},model:{value:e.forminput.class,callback:function(t){e.$set(e.forminput,"class",t)},expression:"forminput.class"}})],1)},i=[],r=(n("baa5"),n("b0c0"),{props:{forminput:Object,imageUrl:String},data:function(){return{valid:!1,menu:!1,genderlist:["Lelaki","Perempuan"],religionlist:["Islam","Kristen Protestan","Katolik","Buddha","Hindu","Kong Hu Cu"],dialog:!1,imageName:""}},methods:{isNumber:function(e){e=e||window.event;var t=e.which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!=t))return!0;e.preventDefault()},save:function(e){this.$refs.menu.save(e)},pickFile:function(){this.$refs.image.click()},onFilePicked:function(e){var t=this,n=e.target.files;if(void 0!==n[0]){if(this.imageName=n[0].name,this.imageName.lastIndexOf(".")<=0)return;var a=new FileReader;a.readAsDataURL(n[0]),a.addEventListener("load",(function(){t.imageUrl=a.result,t.forminput.imageFile=n[0]}))}else this.imageName="",this.forminput.imageFile="",this.imageUrl=""}},computed:{classselect:function(){return this.$store.getters["students/getClassList"]},selected:function(){return this.classselect[this.forminput.class]}},watch:{menu:function(e){var t=this;e&&setTimeout((function(){return t.$refs.picker.activePicker="YEAR"}))}}}),l=r,o=n("2877"),s=n("6544"),u=n.n(s),m=n("2e4b"),c=n("0e8f"),f=n("4bd4"),d=n("e449"),p=n("b974"),v=n("8654"),b=n("a844"),g=Object(o["a"])(l,a,i,!1,null,null,null);t["default"]=g.exports;u()(g,{VDatePicker:m["a"],VFlex:c["a"],VForm:f["a"],VMenu:d["a"],VSelect:p["a"],VTextField:v["a"],VTextarea:b["a"]})}}]);
//# sourceMappingURL=chunk-2d230e61.2f6512fb.js.map