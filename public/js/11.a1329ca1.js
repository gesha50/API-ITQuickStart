(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{3075:function(e,a,t){"use strict";var i=t("c198"),l=t.n(i);l.a},"7df8":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"q-pa-sm"},[t("q-card",[t("q-table",{attrs:{title:"Employee Salary List",data:e.data,"hide-header":"grid"===e.mode,columns:e.columns,"row-key":"name",grid:"grid"==e.mode,filter:e.filter,pagination:e.pagination},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"top-right",fn:function(a){return[t("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}}),"list"===e.mode?t("q-btn",{attrs:{flat:"",round:"",dense:"",icon:a.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:a.toggleFullscreen}},[t("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s(a.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen")+"\n          ")])],1):e._e(),a.inFullscreen?e._e():t("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"grid"===e.mode?"list":"grid_on"},on:{click:function(a){e.mode="grid"===e.mode?"list":"grid",e.separator="grid"===e.mode?"none":"horizontal"}}},[t("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s("grid"===e.mode?"List":"Grid")+"\n          ")])],1),t("q-btn",{attrs:{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""},on:{click:e.exportTable}})]}},{key:"body-cell-detail",fn:function(a){return[t("q-td",{attrs:{props:a}},[t("q-btn",{attrs:{dense:"",round:"",color:"secondary",icon:"pageview"},on:{click:function(a){e.employee_dialog=!0}}})],1)]}},{key:"body-cell-action",fn:function(e){return[t("q-td",{attrs:{props:e}},[t("div",{staticClass:"q-gutter-sm"},[t("q-btn",{attrs:{dense:"",color:"primary",icon:"edit"}}),t("q-btn",{attrs:{dense:"",color:"red",icon:"delete"}})],1)])]}}])})],1),t("q-dialog",{model:{value:e.employee_dialog,callback:function(a){e.employee_dialog=a},expression:"employee_dialog"}},[t("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("\n          Employee Details\n          "),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"float-right",attrs:{round:"",flat:"",dense:"",icon:"close",color:"grey-8"}})],1)]),t("q-card-section",{attrs:{horizontal:""}},[t("q-card-section",{staticClass:"q-pt-xs"},[t("div",{staticClass:"text-overline"},[e._v("US Region")]),t("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[e._v("Mayank Patel")]),t("div",{staticClass:"text-caption text-grey"},[e._v("\n            Sales and Marketing Executive | Graduate and past committee | Keynote speaker on Selling and Recruiting\n            Topics\n          ")])]),t("q-card-section",{staticClass:"col-5 flex flex-center"},[t("q-img",{staticClass:"rounded-borders",attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})],1)],1),t("q-separator"),t("q-card-section",[e._v("\n        Assessing clients needs and present suitable promoted products. Liaising with and persuading targeted doctors\n        to prescribe our products utilizing effective sales skills.\n      ")])],1)],1)],1)},l=[],n=(t("7f7f"),t("28a5"),t("a357"));function o(e,a){var t=void 0!==a?a(e):e;return t=void 0===t||null===t?"":String(t),t=t.split('"').join('""'),'"'.concat(t,'"')}var s={data:function(){return{filter:"",mode:"list",invoice:{},employee_dialog:!1,columns:[{name:"serial_no",align:"left",label:"Serial No.",field:"serial_no",sortable:!0},{name:"emp_id",required:!0,label:"Employee Id",align:"left",field:"emp_id",sortable:!0},{name:"name",align:"left",label:"Employee Name",field:"name",sortable:!0},{name:"salary_type",align:"left",label:"Salary Type",field:"salary_type",sortable:!0},{name:"basic_salary",align:"left",label:"Basic salary",field:"basic_salary",sortable:!0},{name:"overtime",align:"left",label:"Overtime",field:"overtime",sortable:!0},{name:"detail",align:"left",label:"Detail",field:"detail",sortable:!0},{name:"action",align:"left",label:"Action",field:"action",sortable:!0}],data:[{serial_no:"01",emp_id:"Emp 233",name:"Leslie Tecklenburg",basic_salary:"$ 4200",salary_type:"Basic",overtime:"$ 20"},{serial_no:"02",emp_id:"Emp 104",name:"Lia Whitledge",basic_salary:"$ 2550",salary_type:"Basic",overtime:"$ 40"},{serial_no:"03",emp_id:"Emp 345",name:"Sam Wileman",basic_salary:"$ 3800",salary_type:"Basic",overtime:"$ 90"},{serial_no:"04",emp_id:"Emp 345",name:"Edgar Colmer",basic_salary:"$ 4000",salary_type:"Basic",overtime:"$ 56"},{serial_no:"05",emp_id:"Emp 895",name:"Kaiden Rozelle",basic_salary:"$ 3200",salary_type:"Basic",overtime:"$ 23"}],pagination:{rowsPerPage:10}}},methods:{exportTable:function(){var e=this,a=[this.columns.map((function(e){return o(e.label)}))].concat(this.data.map((function(a){return e.columns.map((function(e){return o("function"===typeof e.field?e.field(a):a[void 0===e.field?e.name:e.field],e.format)})).join(",")}))).join("\r\n"),t=Object(n["a"])("employee_salary_list.csv",a,"text/csv");!0!==t&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}},r=s,c=(t("3075"),t("2877")),d=t("eebe"),p=t.n(d),m=t("9989"),u=t("f09f"),f=t("eaac"),g=t("27f9"),b=t("0016"),y=t("9c40"),_=t("05c0"),v=t("db86"),q=t("24e8"),h=t("a370"),x=t("068f"),k=t("eb85"),w=t("b047"),C=t("7f67"),E=Object(c["a"])(r,i,l,!1,null,null,null);a["default"]=E.exports;p()(E,"components",{QPage:m["a"],QCard:u["a"],QTable:f["a"],QInput:g["a"],QIcon:b["a"],QBtn:y["a"],QTooltip:_["a"],QTd:v["a"],QDialog:q["a"],QCardSection:h["a"],QImg:x["a"],QSeparator:k["a"],QChip:w["a"]}),p()(E,"directives",{ClosePopup:C["a"]})},c198:function(e,a,t){}}]);