(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217e6a"],{c964:function(t,i,e){"use strict";e.d(i,"a",(function(){return m}));var s=e("acd6"),n=e("2487"),u=e("4754"),o=e("daf1"),l=e("80d2"),r=e("50de"),h=e("58df");const c=Object(l["h"])(24),a=Object(l["h"])(12),d=a.map(t=>t+12),p=Object(l["h"])(60);var m;(function(t){t[t["Hour"]=1]="Hour",t[t["Minute"]=2]="Minute",t[t["Second"]=3]="Second"})(m||(m={}));const g={1:"hour",2:"minute",3:"second"};i["b"]=Object(h["a"])(u["a"],o["a"]).extend({name:"v-time-picker",props:{allowedHours:{type:[Function,Array]},allowedMinutes:{type:[Function,Array]},allowedSeconds:{type:[Function,Array]},disabled:Boolean,format:{type:String,default:"ampm",validator(t){return["ampm","24hr"].includes(t)}},min:String,max:String,readonly:Boolean,scrollable:Boolean,useSeconds:Boolean,value:null,ampmInTitle:Boolean},data(){return{inputHour:null,inputMinute:null,inputSecond:null,lazyInputHour:null,lazyInputMinute:null,lazyInputSecond:null,period:"am",selecting:m.Hour}},computed:{selectingHour:{get(){return this.selecting===m.Hour},set(t){this.selecting=m.Hour}},selectingMinute:{get(){return this.selecting===m.Minute},set(t){this.selecting=m.Minute}},selectingSecond:{get(){return this.selecting===m.Second},set(t){this.selecting=m.Second}},isAllowedHourCb(){let t;if(t=this.allowedHours instanceof Array?t=>this.allowedHours.includes(t):this.allowedHours,!this.min&&!this.max)return t;const i=this.min?Number(this.min.split(":")[0]):0,e=this.max?Number(this.max.split(":")[0]):23;return s=>{return s>=1*i&&s<=1*e&&(!t||t(s))}},isAllowedMinuteCb(){let t;const i=!this.isAllowedHourCb||null===this.inputHour||this.isAllowedHourCb(this.inputHour);if(t=this.allowedMinutes instanceof Array?t=>this.allowedMinutes.includes(t):this.allowedMinutes,!this.min&&!this.max)return i?t:()=>!1;const[e,s]=this.min?this.min.split(":").map(Number):[0,0],[n,u]=this.max?this.max.split(":").map(Number):[23,59],o=60*e+1*s,l=60*n+1*u;return e=>{const s=60*this.inputHour+e;return s>=o&&s<=l&&i&&(!t||t(e))}},isAllowedSecondCb(){let t;const i=!this.isAllowedHourCb||null===this.inputHour||this.isAllowedHourCb(this.inputHour),e=i&&(!this.isAllowedMinuteCb||null===this.inputMinute||this.isAllowedMinuteCb(this.inputMinute));if(t=this.allowedSeconds instanceof Array?t=>this.allowedSeconds.includes(t):this.allowedSeconds,!this.min&&!this.max)return e?t:()=>!1;const[s,n,u]=this.min?this.min.split(":").map(Number):[0,0,0],[o,l,r]=this.max?this.max.split(":").map(Number):[23,59,59],h=3600*s+60*n+1*(u||0),c=3600*o+60*l+1*(r||0);return i=>{const s=3600*this.inputHour+60*this.inputMinute+i;return s>=h&&s<=c&&e&&(!t||t(i))}},isAmPm(){return"ampm"===this.format}},watch:{value:"setInputData"},mounted(){this.setInputData(this.value),this.$on("update:period",this.setPeriod)},methods:{genValue(){return null==this.inputHour||null==this.inputMinute||this.useSeconds&&null==this.inputSecond?null:`${Object(r["a"])(this.inputHour)}:${Object(r["a"])(this.inputMinute)}`+(this.useSeconds?`:${Object(r["a"])(this.inputSecond)}`:"")},emitValue(){const t=this.genValue();null!==t&&this.$emit("input",t)},setPeriod(t){if(this.period=t,null!=this.inputHour){const i=this.inputHour+("am"===t?-12:12);this.inputHour=this.firstAllowed("hour",i),this.emitValue()}},setInputData(t){if(null==t||""===t)this.inputHour=null,this.inputMinute=null,this.inputSecond=null;else if(t instanceof Date)this.inputHour=t.getHours(),this.inputMinute=t.getMinutes(),this.inputSecond=t.getSeconds();else{const[,i,e,,s,n]=t.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/)||new Array(6);this.inputHour=n?this.convert12to24(parseInt(i,10),n):parseInt(i,10),this.inputMinute=parseInt(e,10),this.inputSecond=parseInt(s||0,10)}this.period=null==this.inputHour||this.inputHour<12?"am":"pm"},convert24to12(t){return t?(t-1)%12+1:12},convert12to24(t,i){return t%12+("pm"===i?12:0)},onInput(t){this.selecting===m.Hour?this.inputHour=this.isAmPm?this.convert12to24(t,this.period):t:this.selecting===m.Minute?this.inputMinute=t:this.inputSecond=t,this.emitValue()},onChange(t){this.$emit(`click:${g[this.selecting]}`,t);const i=this.selecting===(this.useSeconds?m.Second:m.Minute);if(this.selecting===m.Hour?this.selecting=m.Minute:this.useSeconds&&this.selecting===m.Minute&&(this.selecting=m.Second),this.inputHour===this.lazyInputHour&&this.inputMinute===this.lazyInputMinute&&(!this.useSeconds||this.inputSecond===this.lazyInputSecond))return;const e=this.genValue();null!==e&&(this.lazyInputHour=this.inputHour,this.lazyInputMinute=this.inputMinute,this.useSeconds&&(this.lazyInputSecond=this.inputSecond),i&&this.$emit("change",e))},firstAllowed(t,i){const e="hour"===t?this.isAllowedHourCb:"minute"===t?this.isAllowedMinuteCb:this.isAllowedSecondCb;if(!e)return i;const s="minute"===t?p:"second"===t?p:this.isAmPm?i<12?a:d:c,n=s.find(t=>e((t+i)%s.length+s[0]));return((n||0)+i)%s.length+s[0]},genClock(){return this.$createElement(n["a"],{props:{allowedValues:this.selecting===m.Hour?this.isAllowedHourCb:this.selecting===m.Minute?this.isAllowedMinuteCb:this.isAllowedSecondCb,color:this.color,dark:this.dark,disabled:this.disabled,double:this.selecting===m.Hour&&!this.isAmPm,format:this.selecting===m.Hour?this.isAmPm?this.convert24to12:t=>t:t=>Object(r["a"])(t,2),light:this.light,max:this.selecting===m.Hour?this.isAmPm&&"am"===this.period?11:23:59,min:this.selecting===m.Hour&&this.isAmPm&&"pm"===this.period?12:0,readonly:this.readonly,scrollable:this.scrollable,size:Number(this.width)-(!this.fullWidth&&this.landscape?80:20),step:this.selecting===m.Hour?1:5,value:this.selecting===m.Hour?this.inputHour:this.selecting===m.Minute?this.inputMinute:this.inputSecond},on:{input:this.onInput,change:this.onChange},ref:"clock"})},genClockAmPm(){return this.$createElement("div",this.setTextColor(this.color||"primary",{staticClass:"v-time-picker-clock__ampm"}),[this.genPickerButton("period","am",this.$vuetify.lang.t("$vuetify.timePicker.am"),this.disabled||this.readonly),this.genPickerButton("period","pm",this.$vuetify.lang.t("$vuetify.timePicker.pm"),this.disabled||this.readonly)])},genPickerBody(){return this.$createElement("div",{staticClass:"v-time-picker-clock__container",key:this.selecting},[!this.ampmInTitle&&this.isAmPm&&this.genClockAmPm(),this.genClock()])},genPickerTitle(){return this.$createElement(s["a"],{props:{ampm:this.ampmInTitle&&this.isAmPm,disabled:this.disabled,hour:this.inputHour,minute:this.inputMinute,second:this.inputSecond,period:this.period,readonly:this.readonly,useSeconds:this.useSeconds,selecting:this.selecting},on:{"update:selecting":t=>this.selecting=t,"update:period":this.setPeriod},ref:"title",slot:"title"})}},render(){return this.genPicker("v-picker--time")}})}}]);
//# sourceMappingURL=chunk-2d217e6a.81a37cf5.js.map