(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"8fdb":function(t,a,e){},c6f7:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",[e("q-page-container",[e("q-page",{staticClass:"flex flex-center"},[e("div",{class:t.$q.dark.isActive?"dark_gradient":"normal_gradient",attrs:{id:"particles-js"}}),e("q-btn",{staticClass:"absolute-top-right",attrs:{color:"white",flat:"",round:"",icon:t.$q.dark.isActive?"nights_stay":"wb_sunny"},on:{click:function(a){return t.$q.dark.toggle()}}}),e("q-card",{staticClass:"login-form",style:t.$q.platform.is.mobile?{width:"80%"}:{width:"30%"}},[e("q-img",{attrs:{src:"/statics/images/pharmacy.jpg"}}),e("q-card-section",[e("q-avatar",{staticClass:"absolute",staticStyle:{top:"0",right:"25px",transform:"translateY(-50%)"},attrs:{size:"74px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),e("div",{staticClass:"row no-wrap items-center"},[e("div",{staticClass:"col text-h6 ellipsis"},[t._v("\n              Log in to Dashboard\n            ")])])],1),e("q-card-section",[e("q-form",{staticClass:"q-gutter-md"},[e("q-input",{attrs:{filled:"",name:"email",type:"email",label:"Username","lazy-rules":"",autocomplete:"email"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("q-input",{attrs:{type:"password",filled:"",name:"password",label:"Password","lazy-rules":"",autocomplete:"current-password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("div",[e("q-btn",{attrs:{label:"Login",type:"button",color:"primary"},on:{click:t.login}}),e("a",{staticClass:"float-right",staticStyle:{"font-size":"30px"},attrs:{href:"https://github.com/sponsors/mayank091193",target:"_blank",title:"Donate"}},[e("i",{staticClass:"fas fa-heart",staticStyle:{color:"#eb5daa"}})])],1)],1)],1)],1)],1)],1)],1)},r=[],n=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("c47a")),o=e.n(n),i=e("2f62");function c(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?c(Object(e),!0).forEach((function(a){o()(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var p={data:function(){return{email:"",password:""}},computed:l({},Object(i["b"])({getStyle:"style/getStyle"})),methods:{login:function(){var t=this;this.$store.dispatch("auth/login",{email:this.email,password:this.password}).then((function(){t.$q.notify({message:"Login Successful"}),t.$router.push("/dashboard")})).catch((function(a){console.log(a),t.$q.notify({message:"Login False!"})}))}},mounted:function(){particlesJS("particles-js",this.getStyle)}},u=p,d=(e("cff4"),e("2877")),f=e("eebe"),m=e.n(f),g=e("4d5a"),b=e("09e3"),y=e("9989"),h=e("9c40"),w=e("f09f"),v=e("068f"),q=e("a370"),O=e("cb32"),j=e("0378"),k=e("27f9"),C=Object(d["a"])(u,s,r,!1,null,null,null);a["default"]=C.exports;m()(C,"components",{QLayout:g["a"],QPageContainer:b["a"],QPage:y["a"],QBtn:h["a"],QCard:w["a"],QImg:v["a"],QCardSection:q["a"],QAvatar:O["a"],QForm:j["a"],QInput:k["a"]})},cff4:function(t,a,e){"use strict";var s=e("8fdb"),r=e.n(s);r.a}}]);