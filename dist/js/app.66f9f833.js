(function(){"use strict";var e={8474:function(e,t,a){var l=a(5130),d=a(6768);function o(e,t,a,l,o,i){const n=(0,d.g2)("OrdersTable");return(0,d.uX)(),(0,d.Wv)(n,{msg:"Таблица заказов"})}var i=a(4232);const n={class:"content-div"},s={key:0},r={key:1};function c(e,t,a,o,c,u){const h=(0,d.g2)("SearchSection"),p=(0,d.g2)("TableBody"),b=(0,d.g2)("OrderInfoTable"),f=(0,d.g2)("ModalWindow");return(0,d.uX)(),(0,d.CE)(d.FK,null,[(0,d.Lk)("h1",null,(0,i.v_)(a.msg),1),(0,d.Lk)("h3",null,(0,i.v_)(`Заказов найдено: ${c.getNumberWithSpaces(c.data.length)}`),1),(0,d.bF)(h,{"is-data-not-update":c.isDataNotUpdate,onSearchById:u.searchById,onSearchByDate:u.searchByDate,onIsClearFilters:u.closeModal},null,8,["is-data-not-update","onSearchById","onSearchByDate","onIsClearFilters"]),(0,d.Lk)("div",n,[(0,d.bF)(p,{"table-data":c.data.slice(c.entriesCounter,c.entriesCounter+10),"data-length":c.data.length,"entries-counter":c.entriesCounter,onHandlePreviousPageAction:u.handlePreviousPageAction,onHandleNextPageAction:u.handleNextPageAction,onSearchById:u.searchById},null,8,["table-data","data-length","entries-counter","onHandlePreviousPageAction","onHandleNextPageAction","onSearchById"])]),(0,d.bo)((0,d.bF)(f,{"modal-header-string":c.modalHeaderString,onClose:u.closeModal},{body:(0,d.k6)((()=>[c.isDataNotUpdate?((0,d.uX)(),(0,d.CE)("div",s,(0,i.v_)(c.dataNotUpdateText),1)):(0,d.Q3)("",!0),u.isClientDataNotEmpty?((0,d.uX)(),(0,d.CE)("div",r,[(0,d.bF)(b,{"order-data":c.clientData},null,8,["order-data"])])):(0,d.Q3)("",!0)])),_:1},8,["modal-header-string","onClose"]),[[l.aG,c.isModalVisible]])],64)}var u=a(4373),h=a(8626);const p=e=>{const t=e.toString().replace(/\s/g,"");return t.replace(/\B(?=(\d{3})+(?!\d))/g," ")},b=e=>`${e.firstname} ${e.lastname}`,f=e=>{switch(e){case 4:return"#008080";case 6:return"#02b421";case 5:return"#ba2508";default:return"#2c3e50"}},m=[{field:"uid1c",label:"Номер заказа (ID)"},{field:"created",label:"Дата-время создания заказа"},{field:"status",label:"Статус заказа"},{field:"shipment",label:"Тип отгрузки"},{field:"date",label:"Дата отгрузки"},{field:"payment",label:"Способ оплаты"},{field:"shop",label:"Место отгрузки (адрес магазина)"},{field:"client",label:"ФИО клиента"},{field:"amount",label:"Сумма заказа"},{field:"quantity",label:"Количество товаров в заказе"},{field:"operator",label:"Кто создал заказ (оператор)"}],v=["uid1c","created","quantity","operator"],y=["payment","shipment"],k=[{field:"uid1c",label:"Номер заказа (ID)"},{field:"operator",label:"Оператор"},{field:"client",label:"ФИО клиента"},{field:"client_phone",label:"Телефон клиента"},{field:"shop",label:"Магазин"},{field:"payment_method",label:"Способ оплаты"},{field:"payment_status",label:"Статус оплаты"}],g=[{field:"title",label:"Наименование товара"},{field:"quantity",label:"Количество"},{field:"price",label:"Цена"},{field:"status",label:"Статус резервирования"}],_=[{value:"1",label:"Заказ обрабатывается"},{value:"2",label:"Заказ обработан"},{value:"3",label:"Не хватило товара для резервирования"},{value:"4",label:"Заказ выполнен"},{value:"5",label:"Заказ отменен"},{value:"6",label:"Заказ зарезервирован"}],C="https://msk.ivanor.ru/front/service/test-api/v1/orders",L=" https://msk.ivanor.ru/front/service/test-api/v1/order/",S={class:"data-table"},D={key:0,class:"data-datatable__progress"},E=["colspan"],F=["onDblclick"],I={key:0},X={key:1},x={key:2},N={key:3},T={key:5},w={key:6},O={key:0},B=["colspan"],$={class:"data-table__footer-content"},A=["disabled"],M=["disabled"];function P(e,t,a,l,o,n){const s=(0,d.g2)("SvgIcon");return(0,d.uX)(),(0,d.CE)("table",S,[(0,d.Lk)("thead",null,[(0,d.Lk)("tr",{class:(0,i.C4)({"data-table__row_loading":!a.tableData.length})},[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(o.tableHeaders,(e=>((0,d.uX)(),(0,d.CE)("th",{key:e.field,style:(0,i.Tr)({width:e.label.width,minWidth:e.label.width})},(0,i.v_)(e.label),5)))),128))],2),a.tableData.length?(0,d.Q3)("",!0):((0,d.uX)(),(0,d.CE)("tr",D,[(0,d.Lk)("td",{colspan:o.tableHeaders.length},t[2]||(t[2]=[(0,d.Lk)("div",{class:"progress-bar"},[(0,d.Lk)("div",{class:"progress-bar__value"})],-1)]),8,E)]))]),(0,d.Lk)("tbody",null,[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(a.tableData,(t=>((0,d.uX)(),(0,d.CE)("tr",{key:t.field,class:(0,i.C4)({"data-table__row_loading":!a.tableData.length}),onDblclick:a=>e.$emit("searchById",t.uid1c)},[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(o.tableHeaders,(e=>((0,d.uX)(),(0,d.CE)("td",{key:`${e.field}_${t.uid1c}`,style:(0,i.Tr)({width:e.label.width,minWidth:e.label.width})},[o.simpleFields.includes(e.field)?((0,d.uX)(),(0,d.CE)("div",I,(0,i.v_)(t[e.field]),1)):(0,d.Q3)("",!0),o.fieldsWithMethod.includes(e.field)?((0,d.uX)(),(0,d.CE)("div",X,(0,i.v_)(t[e.field].method.title),1)):(0,d.Q3)("",!0),"client"===e.field?((0,d.uX)(),(0,d.CE)("div",x,(0,i.v_)(o.getClientsName(t[e.field])),1)):(0,d.Q3)("",!0),"amount"===e.field?((0,d.uX)(),(0,d.CE)("div",N,(0,i.v_)(o.getNumberWithSpaces(t[e.field])),1)):(0,d.Q3)("",!0),"status"===e.field?((0,d.uX)(),(0,d.CE)("div",{key:4,style:(0,i.Tr)({color:o.getStatusStyle(t.status.id)})},(0,i.v_)(t.status.title),5)):(0,d.Q3)("",!0),"date"===e.field?((0,d.uX)(),(0,d.CE)("div",T,(0,i.v_)(t.shipment[e.field]),1)):(0,d.Q3)("",!0),"shop"===e.field?((0,d.uX)(),(0,d.CE)("div",w,(0,i.v_)(t[e.field].title),1)):(0,d.Q3)("",!0)],4)))),128))],42,F)))),128))]),a.dataLength?((0,d.uX)(),(0,d.CE)("tfoot",O,[(0,d.Lk)("tr",null,[(0,d.Lk)("td",{colspan:o.tableHeaders.length},[(0,d.Lk)("div",$,[(0,d.Lk)("button",{class:"icon-btn",disabled:0===a.entriesCounter,onClick:t[0]||(t[0]=t=>e.$emit("handlePreviousPageAction"))},[(0,d.bF)(s,{type:"mdi",path:o.previousIcon},null,8,["path"])],8,A),(0,d.eW)(" "+(0,i.v_)(` page #${a.entriesCounter/10+1} from ${Math.floor(a.dataLength/10)}`)+" ",1),(0,d.Lk)("button",{class:"icon-btn",disabled:a.entriesCounter>=a.dataLength,onClick:t[1]||(t[1]=t=>e.$emit("handleNextPageAction"))},[(0,d.bF)(s,{type:"mdi",path:o.nextIcon},null,8,["path"])],8,M)])],8,B)])])):(0,d.Q3)("",!0)])}var Q=a(1517),U=a(2132),H={name:"TableBody",components:{SvgIcon:Q.A},props:{tableData:Object,dataLength:Number,entriesCounter:Number},data(){return{getNumberWithSpaces:p,getClientsName:b,getStatusStyle:f,tableHeaders:m,simpleFields:v,fieldsWithMethod:y,previousIcon:U.NSe,nextIcon:U.K5o,ascSortIcon:U.svT,descSortIcon:U.Ply}},methods:{}},W=a(1241);const j=(0,W.A)(H,[["render",P],["__scopeId","data-v-1335b8fd"]]);var K=j;const V={class:"wrapper"},q={class:"text-field"},G={class:"text-field"},J={class:"text-field__group"},R=["disabled"],z={class:"group-field"},Y={class:"text-field"},Z={class:"text-field__group"},ee={class:"text-field"},te={class:"text-field__group"},ae={class:"text-field"},le={class:"text-field__group"},de=["value"];function oe(e,t,a,o,n,s){return(0,d.uX)(),(0,d.CE)("div",V,[(0,d.Lk)("div",q,[(0,d.Lk)("button",{class:"text-field__btn",type:"button",onClick:t[0]||(t[0]=(...e)=>s.isClearFilters&&s.isClearFilters(...e))},"Сбросить фильтры")]),(0,d.Lk)("div",G,[t[7]||(t[7]=(0,d.Lk)("label",{class:"text-field__label",for:"search"},"Номер заказа",-1)),(0,d.Lk)("div",J,[(0,d.bo)((0,d.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.idName=e),class:"text-field__input",type:"search",id:"search",name:"search"},null,512),[[l.Jo,n.idName]]),(0,d.Lk)("button",{class:"text-field__btn",type:"button",disabled:!n.idName,onClick:t[2]||(t[2]=(...e)=>s.searchById&&s.searchById(...e))},"Найти",8,R)])]),(0,d.Lk)("div",z,[(0,d.Lk)("div",Y,[t[8]||(t[8]=(0,d.Lk)("label",{class:"text-field__label",for:"search"},"Начало периода",-1)),(0,d.Lk)("div",Z,[(0,d.bo)((0,d.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>n.dateFrom=e),class:"text-field__input",type:"date",id:"dateFromSearch",name:"search"},null,512),[[l.Jo,n.dateFrom]])])]),t[10]||(t[10]=(0,d.Lk)("div",{class:"text-field__group"},"—",-1)),(0,d.Lk)("div",ee,[t[9]||(t[9]=(0,d.Lk)("label",{class:"text-field__label",for:"search"},"Конец периода",-1)),(0,d.Lk)("div",te,[(0,d.bo)((0,d.Lk)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>n.dateTo=e),class:"text-field__input",type:"date",id:"dateToSearch",name:"search"},null,512),[[l.Jo,n.dateTo]])])])]),(0,d.Lk)("div",ae,[t[12]||(t[12]=(0,d.Lk)("label",{class:"text-field__label",for:"multi-select"},"Статус заказа",-1)),(0,d.Lk)("div",le,[(0,d.bo)(((0,d.uX)(),(0,d.CE)("select",{key:String(a.isDataNotUpdate),multiple:"",id:"multi-select","onUpdate:modelValue":t[5]||(t[5]=e=>n.orderStatus=e)},[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(n.orderStatusDropdown,(e=>((0,d.uX)(),(0,d.CE)("option",{key:e.label,value:e.value},(0,i.v_)(e.label),9,de)))),128))])),[[l.u1,n.orderStatus]]),t[11]||(t[11]=(0,d.Lk)("span",{class:"focus"},null,-1)),(0,d.Lk)("button",{class:"text-field__btn",type:"button",onClick:t[6]||(t[6]=(...e)=>s.searchByDate&&s.searchByDate(...e))},"Найти")])])])}var ie={name:"SearchSection",props:{isDataNotUpdate:Boolean},data(){return{idName:"",dateFrom:"",dateTo:"",orderStatus:[],orderStatusDropdown:_}},watch:{isDataNotUpdate:function(e,t){console.log("watch ",e,t),e&&(this.dateFrom="",this.dateTo="",this.orderStatus=[])}},methods:{searchById(){this.$emit("searchById",this.idName)},searchByDate(){this.$emit("searchByDate",this.dateFrom,this.dateTo,this.orderStatus.join(","))},isClearFilters(){this.$emit("isClearFilters")}}};const ne=(0,W.A)(ie,[["render",oe],["__scopeId","data-v-1e26ce3c"]]);var se=ne;const re={class:"modal-backdrop"},ce={class:"modal"},ue={class:"modal-header"},he={class:"modal-body"},pe={class:"modal-footer"};function be(e,t,a,o,n,s){return(0,d.uX)(),(0,d.Wv)(l.eB,{name:"modal-fade"},{default:(0,d.k6)((()=>[(0,d.Lk)("div",re,[(0,d.Lk)("div",ce,[(0,d.Lk)("header",ue,[(0,d.eW)((0,i.v_)(a.modalHeaderString)+" ",1),(0,d.Lk)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...e)=>s.close&&s.close(...e))},"x")]),(0,d.Lk)("section",he,[(0,d.RG)(e.$slots,"body",{},(()=>[t[2]||(t[2]=(0,d.eW)(" I'm the default body! "))]),!0)]),(0,d.Lk)("footer",pe,[(0,d.RG)(e.$slots,"footer",{},(()=>[(0,d.Lk)("button",{type:"button",class:"btn-green",onClick:t[1]||(t[1]=(...e)=>s.close&&s.close(...e))},"Закрыть!")]),!0)])])])])),_:3})}var fe={name:"ModalWindow",props:{modalHeaderString:String},methods:{close(){this.$emit("close")}}};const me=(0,W.A)(fe,[["render",be],["__scopeId","data-v-26e6ebf5"]]);var ve=me;const ye={class:"table-wrapper"},ke={class:"data-table"},ge={key:0},_e={key:1},Ce={key:2},Le={key:3},Se={key:4},De={key:0};function Ee(e,t,a,l,o,n){return(0,d.uX)(),(0,d.CE)("div",ye,[(0,d.Lk)("table",ke,[t[0]||(t[0]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th",{colspan:"2"},"Общие сведения")])],-1)),(0,d.Lk)("tbody",null,[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(o.orderFields,(e=>((0,d.uX)(),(0,d.CE)("tr",{key:e.field},["payment_status"!==e.field?((0,d.uX)(),(0,d.CE)(d.FK,{key:0},[(0,d.Lk)("td",null,(0,i.v_)(e.label),1),(0,d.Lk)("td",null,[o.simpleFields.includes(e.field)?((0,d.uX)(),(0,d.CE)("div",ge,(0,i.v_)(a.orderData[e.field]),1)):(0,d.Q3)("",!0),"client"===e.field?((0,d.uX)(),(0,d.CE)("div",_e,(0,i.v_)(o.getClientsName(a.orderData[e.field])),1)):(0,d.Q3)("",!0),"client_phone"===e.field?((0,d.uX)(),(0,d.CE)("div",Ce,(0,i.v_)(a.orderData.client.phone),1)):(0,d.Q3)("",!0),"shop"===e.field?((0,d.uX)(),(0,d.CE)("div",Le,(0,i.v_)(a.orderData.shop.title),1)):(0,d.Q3)("",!0),"payment_method"===e.field?((0,d.uX)(),(0,d.CE)("div",Se,(0,i.v_)(a.orderData.payment.method.title),1)):(0,d.Q3)("",!0)])],64)):(0,d.Q3)("",!0),"payment_status"===e.field&&1!==a.orderData.payment.method.id?((0,d.uX)(),(0,d.CE)(d.FK,{key:1},[(0,d.Lk)("td",null,(0,i.v_)(e.label),1),"payment_status"===e.field?((0,d.uX)(),(0,d.CE)("div",De,(0,i.v_)(a.orderData.payment.status.title),1)):(0,d.Q3)("",!0)],64)):(0,d.Q3)("",!0)])))),128))])]),((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(a.orderData.items,((e,a)=>((0,d.uX)(),(0,d.CE)("table",{key:`item_${a}`,class:"data-table"},[t[1]||(t[1]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th",{colspan:"2"},"Состав заказа")])],-1)),(0,d.Lk)("tbody",null,[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(o.itemFields,(t=>((0,d.uX)(),(0,d.CE)("tr",{key:`${t.field}_${a}`},[(0,d.Lk)("td",null,(0,i.v_)(t.label),1),(0,d.Lk)("td",null,(0,i.v_)(e[t.field]),1)])))),128))])])))),128))])}var Fe={name:"OrderInfoTable",props:{orderData:Object},data(){return{getClientsName:b,getNumberWithSpaces:p,simpleFields:v,orderFields:k,itemFields:g}}};const Ie=(0,W.A)(Fe,[["render",Ee],["__scopeId","data-v-3c77305d"]]);var Xe=Ie,xe={name:"OrdersTable",components:{TableBody:K,SearchSection:se,ModalWindow:ve,OrderInfoTable:Xe},props:{msg:String},data(){return{data:[],clientData:{},entriesCounter:0,dateFrom:"",dateTo:"",orderStatus:"",modalHeaderString:"",dataNotUpdateText:"",isModalVisible:!1,isDataNotUpdate:!1,ordersEndpoint:C,oneOrderEndpoint:L,getNumberWithSpaces:p}},mounted:function(){this.getOrdersData()},computed:{isClientDataNotEmpty:function(){return!(0,h.isEmpty)(this.clientData)}},methods:{handlePreviousPageAction(){this.entriesCounter-=10},handleNextPageAction(){this.entriesCounter+=10},searchById(e){const t=this.data.findIndex((t=>t.uid1c===e));if(-1===t)return this.modalHeaderString="Заказ не найден!",this.dataNotUpdateText="В указанном временном промежутке заказ не найден!",this.isDataNotUpdate=!0,void this.showModal();const a=`${this.oneOrderEndpoint}${this.data[t].id}`;u.A.get(a,{headers:{"Content-Type":"application/json",token:"57db00716501ed8680306e40f08401ea"}}).then((e=>{this.clientData=(0,h.cloneDeep)(e.data.order),this.isModalVisible=!0,this.modalHeaderString="Данные о клиенте и заказе"})).catch((e=>console.log(e.response.data)))},getOrdersData(){console.log("getOrdersData",this.dateFrom,this.dateTo,this.orderStatus),u.A.get(this.ordersEndpoint,{headers:{"Content-Type":"application/json",token:"57db00716501ed8680306e40f08401ea"},params:{dateFrom:this.dateFrom,dateTo:this.dateTo,orderStatus:this.orderStatus}}).then((e=>{if(this.data.length&&!e.data.orders.length)return this.modalHeaderString="Заказов не обнаружено!",this.dataNotUpdateText="За указанный период заказов не обнаружено!",this.isDataNotUpdate=!0,void this.showModal();this.data=(0,h.cloneDeep)(e.data.orders)})).catch((e=>console.log(e.response.data)))},searchByDate(e,t,a){this.orderStatus=a,this.dateFrom=e,this.dateTo=t,this.getOrdersData()},showModal(){this.isModalVisible=!0},closeModal(){this.modalHeaderString="",this.isDataNotUpdate=!this.isDataNotUpdate,this.isModalVisible=!1,this.clientData=(0,h.cloneDeep)({}),this.dateFrom="",this.dateTo="",this.orderStatus="",this.getOrdersData()}}};const Ne=(0,W.A)(xe,[["render",c],["__scopeId","data-v-7c0f49ad"]]);var Te=Ne,we={name:"App",components:{OrdersTable:Te}};const Oe=(0,W.A)(we,[["render",o]]);var Be=Oe;(0,l.Ef)(Be).mount("#app")}},t={};function a(l){var d=t[l];if(void 0!==d)return d.exports;var o=t[l]={id:l,loaded:!1,exports:{}};return e[l].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){var e=[];a.O=function(t,l,d,o){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],d=e[c][1],o=e[c][2];for(var n=!0,s=0;s<l.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[s])}))?l.splice(s--,1):(n=!1,o<i&&(i=o));if(n){e.splice(c--,1);var r=d();void 0!==r&&(t=r)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,d,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var d,o,i=l[0],n=l[1],s=l[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(d in n)a.o(n,d)&&(a.m[d]=n[d]);if(s)var c=s(a)}for(t&&t(l);r<i.length;r++)o=i[r],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},l=self["webpackChunkorders_table"]=self["webpackChunkorders_table"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(8474)}));l=a.O(l)})();
//# sourceMappingURL=app.66f9f833.js.map