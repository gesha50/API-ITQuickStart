(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"12a2":function(t,e,a){"use strict";var i=a("8bd0"),o=a.n(i);o.a},"8bd0":function(t,e,a){},e92b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"row q-col-gutter-sm q-ma-xs q-mr-sm"},[a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",[a("q-card-section",{staticClass:"text-white",class:t.$q.dark.isActive?"blue_dark":"bg-blue-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"},[a("div",{staticClass:"text-h6"},[t._v("Sales")]),a("div",{staticClass:"text-h5"},[t._v("160")])]),a("div",{staticClass:"col-2"},[a("q-icon",{attrs:{size:"62px",name:"trending_up"}})],1)])])],1)],1),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",[a("q-card-section",{staticClass:"text-white",class:t.$q.dark.isActive?"green_dark":"bg-green-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"},[a("div",{staticClass:"text-h6"},[t._v("Goals")]),a("div",{staticClass:"text-h5"},[t._v("140")])]),a("div",{staticClass:"col-2"},[a("q-icon",{attrs:{size:"62px",name:"far fa-dot-circle"}})],1)])])],1)],1),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",[a("q-card-section",{staticClass:"text-white",class:t.$q.dark.isActive?"orange_dark":"bg-orange-9"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"},[a("div",{staticClass:"text-h6"},[t._v("% Change")]),a("div",{staticClass:"text-h5"},[a("q-icon",{attrs:{name:"arrow_downward"}}),t._v("\n                2%\n              ")],1)]),a("div",{staticClass:"col-2"},[a("q-icon",{attrs:{size:"62px",name:"compare_arrows"}})],1)])])],1)],1)]),a("div",[a("div",{staticClass:"row q-col-gutter-sm q-ma-xs q-mr-sm"},[a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"row"},[a("div",{staticClass:"text-h6 col-12"},[t._v("Sales vs Goals\n              "),a("q-btn",{staticClass:"float-right",attrs:{flat:"",dense:"",icon:"fas fa-download",color:t.$q.dark.isActive?"white":"grey-8"},on:{click:function(e){return t.SaveImage("bar")}}},[a("q-tooltip",[t._v("Download")])],1)],1)]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("IEcharts",{ref:"bar",staticStyle:{height:"220px"},attrs:{option:t.barOptions,resizable:!0}})],1)],1)],1),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"row"},[a("div",{staticClass:"text-h6 col-12"},[t._v("Market Share & Growth\n              "),a("q-btn",{staticClass:"float-right",attrs:{flat:"",dense:"",icon:"fas fa-download",color:t.$q.dark.isActive?"white":"grey-8"},on:{click:function(e){return t.SaveImage("line")}}},[a("q-tooltip",[t._v("Download")])],1)],1)]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("IEcharts",{ref:"line",staticStyle:{height:"220px"},attrs:{option:t.lineChartOption,resizable:!0}})],1)],1)],1),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"row"},[a("div",{staticClass:"text-h6 col-12"},[t._v("Sales vs Quota\n              "),a("q-btn",{staticClass:"float-right",attrs:{flat:"",dense:"",icon:"fas fa-download",color:t.$q.dark.isActive?"white":"grey-8"},on:{click:function(e){return t.SaveImage("gauge")}}},[a("q-tooltip",[t._v("Download")])],1)],1)]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("IEcharts",{ref:"gauge",staticStyle:{height:"220px"},attrs:{option:t.gaugeOptions,resizable:!0}})],1)],1)],1)])]),a("div",{staticClass:"row q-col-gutter-sm q-ma-xs q-mr-sm"},[a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Key Competitors\n            "),a("q-btn",{staticClass:"float-right",attrs:{flat:"",dense:"",icon:"fas fa-download",color:t.$q.dark.isActive?"white":"grey-8"},on:{click:function(e){return t.SaveImage("pie")}}},[a("q-tooltip",[t._v("Download")])],1)],1)]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("IEcharts",{ref:"pie",staticStyle:{height:"270px"},attrs:{option:t.pieOptions,resizable:!0}})],1)],1)],1),a("div",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Sales Pipeline by Sales Rep\n            "),a("q-btn",{staticClass:"float-right",attrs:{flat:"",dense:"",icon:"fas fa-download",color:t.$q.dark.isActive?"white":"grey-8"},on:{click:function(e){return t.SaveImage("stack_bar")}}},[a("q-tooltip",[t._v("Download")])],1)],1)]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("IEcharts",{ref:"stack_bar",staticStyle:{height:"270px"},attrs:{option:t.stackedBarOptions,resizable:!0}})],1)],1)],1)]),a("div",{staticClass:"row q-col-gutter-sm q-ma-xs"},[a("div",{staticClass:"col-12"},[a("q-card",{staticClass:"bg-white",attrs:{flat:"",bordered:""}},[a("q-table",{class:t.$q.dark.isActive?"text-white":"text-grey-8",attrs:{title:"All Activities",data:t.data,"hide-header":"grid"===t.mode,columns:t.columns,"row-key":"name",grid:"grid"===t.mode,filter:t.filter,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top-right",fn:function(e){return[a("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),"list"===t.mode?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}},[a("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:t.$q.platform.is.mobile}},[t._v(t._s(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen")+"\n              ")])],1):t._e(),e.inFullscreen?t._e():a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"grid"===t.mode?"list":"grid_on"},on:{click:function(e){t.mode="grid"===t.mode?"list":"grid",t.separator="grid"===t.mode?"none":"horizontal"}}},[a("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:t.$q.platform.is.mobile}},[t._v(t._s("grid"===t.mode?"List":"Grid")+"\n              ")])],1),a("q-btn",{attrs:{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""},on:{click:t.exportTable}})]}}])})],1)],1)])])},o=[],s=(a("7f7f"),a("28a5"),a("2b0e")),r=a("ce44"),l=a("a357");function n(t,e){var a=void 0!==e?e(t):t;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),'"'.concat(a,'"')}s["a"].component("IEcharts",r["a"]);var c={data:function(){return{filter:"",mode:"list",gaugeOptions:{tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{type:"gauge",name:"Sale",detail:{formatter:"{value}%"},data:[{value:30}],min:0,radius:"100%",axisLine:{show:!0,lineStyle:{color:[[.35,"#293c55"],[.65,"#61a0a8"],[1,"#c23731"]],width:20}}}]},columns:[{name:"activity_id",align:"left",label:"Activity ID",field:"activity_id",sortable:!0},{name:"desc",required:!0,label:"Activity Name",align:"left",field:function(t){return t.name},sortable:!0},{name:"regarding",align:"left",label:"Regarding",field:"regarding",sortable:!0},{name:"owner",align:"left",label:"Owner",field:"owner",sortable:!0},{name:"creation_date",align:"left",label:"Creation Date",field:"creation_date",sortable:!0}],data:[{activity_id:"C001",name:"Advanced communications",regarding:"Presentation",owner:"John",creation_date:"12-09-2019"},{activity_id:"C002",name:"New drug discussion",regarding:"Meeting",owner:"John",creation_date:"09-02-2019"},{activity_id:"C003",name:"Universal services discussion",regarding:"Meeting",owner:"John",creation_date:"03-25-2019"},{activity_id:"C004",name:"Add on business",regarding:"Business",owner:"John",creation_date:"03-18-2019"},{activity_id:"C005",name:"Promotional Activity",regarding:"Personal",owner:"John",creation_date:"04-09-2019"}],pagination:{rowsPerPage:10}}},computed:{barOptions:function(){return{grid:{bottom:"20%",left:"15%",top:"3%"},legend:{bottom:0,textStyle:{color:this.$q.dark.isActive?"white":"#676767"}},tooltip:{},dataset:{dimensions:["time_period","sale","goal"],source:[{time_period:"Jan 2019",sale:50,goal:70},{time_period:"Feb 2019",sale:80,goal:75},{time_period:"Mar 2019",sale:86,goal:80},{time_period:"Apr 2019",sale:72,goal:85}]},xAxis:{type:"category",axisLabel:{color:this.$q.dark.isActive?"white":"#676767"}},yAxis:{axisLabel:{color:this.$q.dark.isActive?"white":"#676767"}},series:[{type:"bar",name:"Sales"},{type:"bar",name:"Goals"}]}},lineChartOption:function(){return{grid:{bottom:"20%",left:"15%",top:"3%"},legend:{bottom:0,textStyle:{color:this.$q.dark.isActive?"white":"#676767"}},tooltip:{},dataset:{dimensions:["product_name","share","growth"],source:[{product_name:"Product A",share:20,growth:25},{product_name:"Product B",share:22,growth:18},{product_name:"Product C",share:40,growth:45}]},xAxis:{type:"category",axisLabel:{color:this.$q.dark.isActive?"white":"#676767"}},yAxis:{axisLabel:{formatter:function(t,e){return t+" %"},color:this.$q.dark.isActive?"white":"#676767"}},series:[{type:"line",name:"Share"},{type:"line",name:"Growth"}]}},pieOptions:function(){return{tooltip:{show:!0},legend:{orient:"horizontal",bottom:0,width:300,textStyle:{color:this.$q.dark.isActive?"white":"#676767"}},series:[{name:"Competitor",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"inner",formatter:function(t,e){return t.value+" %"}},emphasis:{show:!0,textStyle:{fontSize:"20",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},selectedMode:"single",data:[{value:40,name:"Product 1",selected:!0},{value:20,name:"Competitor 1",selected:!1},{value:15,name:"Competitor 2",selected:!1},{value:25,name:"Competitor 3",selected:!1}]}]}},stackedBarOptions:function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"rgba(50,50,50,0.9)"},legend:{bottom:0,textStyle:{color:this.$q.dark.isActive?"white":"#676767"}},color:["#3395dd","#ed892d","#34393b"],grid:{bottom:"10%",left:"15%",top:"9%"},calculable:!0,xAxis:{type:"value",position:"top",axisLine:{show:!1},axisLabel:{formatter:function(t,e){return"$"+t},color:this.$q.dark.isActive?"white":"#676767"}},yAxis:[{type:"category",data:["Alex Morrow","Joanna Carter","Jimmy Joanna","Mack Hales"],axisLabel:{fontSize:12,color:this.$q.dark.isActive?"white":"#676767"}}],series:[{name:"Qualification",type:"bar",stack:"A",data:[300,350,400,500]},{name:"Discovery",type:"bar",stack:"A",data:[100,180,250,300]},{name:"Quote",type:"bar",stack:"A",data:[100,120,200,220]}]}}},methods:{SaveImage:function(t){var e=this.$refs[t].getDataURL(),a=document.createElement("a");document.body.appendChild(a),a.href=e,a.target="_self",a.download=t+".png",a.click()},exportTable:function(){var t=this,e=[this.columns.map((function(t){return n(t.label)}))].concat(this.data.map((function(e){return t.columns.map((function(t){return n("function"===typeof t.field?t.field(e):e[void 0===t.field?t.name:t.field],t.format)})).join(",")}))).join("\r\n"),a=Object(l["a"])("activity.csv",e,"text/csv");!0!==a&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}},d=c,p=(a("12a2"),a("2877")),m=a("eebe"),u=a.n(m),g=a("9989"),v=a("f09f"),f=a("a370"),h=a("0016"),b=a("9c40"),q=a("05c0"),w=a("eb85"),x=a("eaac"),C=a("27f9"),y=a("7f67"),_=Object(p["a"])(d,i,o,!1,null,"0f624cd7",null);e["default"]=_.exports;u()(_,"components",{QPage:g["a"],QCard:v["a"],QCardSection:f["a"],QIcon:h["a"],QBtn:b["a"],QTooltip:q["a"],QSeparator:w["a"],QTable:x["a"],QInput:C["a"]}),u()(_,"directives",{ClosePopup:y["a"]})}}]);