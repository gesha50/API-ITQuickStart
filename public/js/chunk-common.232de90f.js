(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0b41":function(t,e,s){"use strict";var i=s("6063"),a=s.n(i);a.a},1122:function(t,e,s){"use strict";var i=s("22b9"),a=s.n(i);a.a},"22b9":function(t,e,s){},"2c5d":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"q-mt-xl column items-start"},[s("div",{staticClass:"services__miniTitle"},[s("title-block",{attrs:{title:t.$t("service.title")}})],1),s("header-block",{attrs:{header:t.$t("service.description"),link:t.link}}),s("div",{staticClass:"services full-width items-start row justify-around"},t._l(t.servicesObj,(function(t,e){return s("service-block",{key:e,attrs:{item:t}})})),1)],1)},a=[],l=s("5950"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-sm-6 col-md-4 q-pa-md serviceBlock"},[s("div",{staticClass:"row items-center"},[s("custom-icon",{attrs:{icon:t.item.icon}}),s("div",{staticClass:"serviceBlock__title q-ml-md"},[t._v(t._s(t.$t(t.item.title)))])],1),s("div",{staticClass:"serviceBlock__description"},[t._v(t._s(t.$t(t.item.description)))])])},c=[],o=s("bd76"),r={name:"ServiceBlock",props:["item"],components:{CustomIcon:o["a"]}},u=r,m=(s("0b41"),s("2877")),d=Object(m["a"])(u,n,c,!1,null,null,null),f=d.exports,p=s("2d8b"),b={props:["link","servicesObj"],name:"Services",components:{TitleBlock:l["a"],ServiceBlock:f,HeaderBlock:p["a"]}},v=b,_=(s("db47"),Object(m["a"])(v,i,a,!1,null,null,null));e["a"]=_.exports},"2d8b":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"headerBlock full-width q-my-md row justify-between"},[s("div",{staticClass:"headerBlock__header"},[t._v("\n    "+t._s(t.header)+"\n  ")]),t.link?s("div",{staticClass:"headerBlock__link row items-baseline"},[s("router-link",{attrs:{to:t.link}},[t._v(t._s(t.$t("btn.more")))]),s("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-arrow-right"}})],1):t._e(),t.email?s("div",{staticClass:"headerBlock__email"},[s("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])]):t._e()])},a=[],l={name:"HeaderBlock",props:["header","email","link"]},n=l,c=(s("7d5c"),s("2877")),o=s("eebe"),r=s.n(o),u=s("0016"),m=Object(c["a"])(n,i,a,!1,null,null,null);e["a"]=m.exports;r()(m,"components",{QIcon:u["a"]})},"3d36":function(t,e,s){},"4d0a":function(t,e,s){},5950:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"titleBlock"},[s("div",{staticClass:"titleBlock__text"},[t._v(t._s(t.title))]),s("div",{staticClass:"titleBlock__line"})])},a=[],l={name:"TitleBlock",props:["title"]},n=l,c=(s("1122"),s("2877")),o=Object(c["a"])(n,i,a,!1,null,null,null);e["a"]=o.exports},6063:function(t,e,s){},"756a":function(t,e,s){},"7ba0":function(t,e,s){},"7d5c":function(t,e,s){"use strict";var i=s("7ba0"),a=s.n(i);a.a},"81e2":function(t,e,s){},"8ba6":function(t,e,s){"use strict";var i=s("3d36"),a=s.n(i);a.a},"915e":function(t,e,s){"use strict";var i=s("b6b6"),a=s.n(i);a.a},9573:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"shadowBlock"},[s("div",{staticClass:"portfolio q-mt-xl column items-start"},[s("div",{staticClass:"portfolio__miniTitle"},[s("title-block",{attrs:{title:t.$t("portfolio.title")}})],1),s("header-block",{attrs:{header:t.$t("portfolio.description"),link:t.link}}),s("div",{staticClass:"portfolio__body row full-width"},t._l(t.portfolioImages,(function(t,e){return s("div",{key:e,staticClass:"col-12 col-sm-6"},[s("q-img",{attrs:{"img-class":"q-ma-sm portfolioImg",ratio:4/3,src:"../../statics/images/portfolio/"+t.path,alt:""}})],1)})),0)],1)])},a=[],l=s("5950"),n=s("2d8b"),c={name:"Portfolio",props:["link","portfolioImages"],components:{TitleBlock:l["a"],HeaderBlock:n["a"]}},o=c,r=(s("8ba6"),s("2877")),u=s("eebe"),m=s.n(u),d=s("068f"),f=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=f.exports;m()(f,"components",{QImg:d["a"]})},afcc:function(t,e,s){"use strict";var i=s("4d0a"),a=s.n(i);a.a},b6b6:function(t,e,s){},ba03:function(t,e,s){"use strict";var i=s("81e2"),a=s.n(i);a.a},bd76:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customIcon relative-position"},[s("q-icon",{staticClass:"absolute",attrs:{name:t.icon}})],1)},a=[],l={name:"CustomIcon",props:["icon"]},n=l,c=(s("afcc"),s("2877")),o=s("eebe"),r=s.n(o),u=s("0016"),m=Object(c["a"])(n,i,a,!1,null,null,null);e["a"]=m.exports;r()(m,"components",{QIcon:u["a"]})},d739:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"certificates q-mt-xl column items-start"},[s("div",{staticClass:"certificates__miniTitle"},[s("title-block",{attrs:{title:t.$t("certificates.title")}})],1),s("header-block",{attrs:{header:t.$t("certificates.description"),link:t.link}}),s("div",{staticClass:"certificates__body full-width row q-mt-lg"},t._l(t.certificates,(function(e){return s("div",{staticClass:"col-6 col-sm-3"},[s("div",{staticClass:"text-center row column certificatesCard"},[s("q-img",{attrs:{src:"../../statics/images/certificates/"+t.$i18n.locale+"/"+e.path,ratio:1,contain:""}})],1)])})),0)],1)},a=[],l=s("5950"),n=s("2d8b"),c={name:"Certificates",props:["link","certificates"],components:{TitleBlock:l["a"],HeaderBlock:n["a"]}},o=c,r=(s("915e"),s("2877")),u=s("eebe"),m=s.n(u),d=s("068f"),f=Object(r["a"])(o,i,a,!1,null,"dd1269ea",null);e["a"]=f.exports;m()(f,"components",{QImg:d["a"]})},db47:function(t,e,s){"use strict";var i=s("756a"),a=s.n(i);a.a},ddfd:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"contact column items-start"},[s("div",{staticClass:"contact__miniTitle"},[s("title-block",{attrs:{title:t.$t("contacts.title")}})],1),s("header-block",{attrs:{header:t.$t("contacts.description"),email:"gs-developer@yandex.ru"}}),s("div",{staticClass:"contact__body full-width row"},[s("q-form",{staticClass:"full-width",on:{submit:t.onSubmit,reset:t.onReset}},[s("q-input",{attrs:{label:t.$t("contacts.inputs.name"),dense:t.dense},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("q-input",{attrs:{label:t.$t("contacts.inputs.email"),dense:t.dense},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("q-input",{attrs:{label:t.$t("contacts.inputs.message"),dense:t.dense},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("div",{staticClass:"row justify-between items-baseline"},[s("div",{staticClass:"row items-baseline col-12 col-sm-5"},[s("q-btn",{staticClass:"glossy q-mt-lg q-px-md q-py-xs",attrs:{type:"submit",rounded:"",color:"deep-purple-8",label:t.$t("btn.submit")}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{label:t.$t("btn.reset"),type:"reset",color:"primary",flat:""}})],1),s("q-file",{staticClass:"col-6 col-md-2 col-sm-3 order-first order-sm-last q-mt-xs-md",attrs:{standout:"",color:"purple-12"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}]),model:{value:t.image,callback:function(e){t.image=e},expression:"image"}})],1)],1)],1)],1)},a=[],l=(s("7f7f"),s("5950")),n=s("2d8b"),c={data:function(){return{name:"",email:"",message:"",dense:!1,image:null}},name:"Contact",components:{TitleBlock:l["a"],HeaderBlock:n["a"]},methods:{onSubmit:function(){console.log("work")},onReset:function(){this.name=null,this.email=null,this.message=null,this.image=null}}},o=c,r=(s("ba03"),s("2877")),u=s("eebe"),m=s.n(u),d=s("0378"),f=s("27f9"),p=s("9c40"),b=s("7d53"),v=s("0016"),_=s("8572"),k=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=k.exports;m()(k,"components",{QForm:d["a"],QInput:f["a"],QBtn:p["a"],QFile:b["a"],QIcon:v["a"],QField:_["a"]})}}]);