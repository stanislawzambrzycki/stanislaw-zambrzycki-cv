(function(A){function t(t){for(var a,r,g=t[0],s=t[1],o=t[2],l=0,E=[];l<g.length;l++)r=g[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&E.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(A[a]=s[a]);I&&I(t);while(E.length)E.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var A,t=0;t<n.length;t++){for(var e=n[t],a=!0,g=1;g<e.length;g++){var s=e[g];0!==i[s]&&(a=!1)}a&&(n.splice(t--,1),A=r(r.s=e[0]))}return A}var a={},i={app:0},n=[];function r(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=A,r.c=a,r.d=function(A,t,e){r.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},r.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},r.t=function(A,t){if(1&t&&(A=r(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var a in A)r.d(e,a,function(t){return A[t]}.bind(null,a));return e},r.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return r.d(t,"a",t),t},r.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},r.p="/";var g=window["webpackJsonp"]=window["webpackJsonp"]||[],s=g.push.bind(g);g.push=t,g=g.slice();for(var o=0;o<g.length;o++)t(g[o]);var I=s;n.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-sheet",{staticClass:"d-flex justify-start justify-sm-center",attrs:{color:"grey darken-1",relative:""}},[a("div",{staticClass:"d-print-none",staticStyle:{position:"fixed",right:"1em",top:"1em","z-index":"999"}},[a("v-btn",{staticClass:"ml-2",attrs:{fab:"",dark:"",small:"",color:"deep-purple darken-4",href:"https://github.com/stanislawzambrzycki/stanislaw-zambrzycki-cv",target:"_blank"}},[a("v-icon",[A._v("mdi-github")])],1),a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"teal darken-4"},on:{click:A.doIt}},[a("v-icon",[A._v("mdi-printer")])],1),a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"red accent-4","max-height":"38","max-width":"38"},on:{click:A.changeLanguage}},[a("v-fade-transition",{attrs:{group:"","hide-on-leave":"",mode:"out-in"}},["pl"===A.lang?a("v-avatar",{key:"pl"},[a("v-img",{attrs:{"max-height":"40","max-width":"40",src:e("6199")}})],1):a("v-avatar",{key:"eng"},[a("v-img",{attrs:{"max-height":"40","max-width":"40",src:e("8b73")}})],1)],1)],1)],1),a("v-sheet",{attrs:{tile:"","min-height":"100vh","max-width":"700px",color:"indigo  lighten-5"}},[a("v-main",{staticStyle:{height:"100%"}},[a("v-fade-transition",{attrs:{group:"",mode:"out-in","hide-on-leave":""}},[A.lang?a("div",{key:"langSet"},A._l(A.dictLanguage,(function(t,e){return a("v-card",{key:A.lang+e,staticClass:"ma-3 px-3",attrs:{color:"grey lighten-5"}},[!0!==t.horizontal?a("div",[a("v-card-title",{staticClass:"text-wrap pb-2 text-body-1 font-weight-bold  text-sm-h5"},[A._v(A._s(t.header))]),a("v-divider"),a("v-card-text",{staticClass:"text-wrap pt-0"},[a("v-list",{attrs:{color:"grey lighten-5"}},A._l(t.fields,(function(t,e){return a("v-list-item",{key:e+A.lang,staticClass:"pa-0",staticStyle:{"min-height":"auto"},attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap text-body-2 text-sm-body-1"},[A._v(" "+A._s(t.list_item_title)+" ")]),a("v-list-item-subtitle",{staticClass:"text-wrap text-caption text-sm-body-2"},[A._v(" "+A._s(t.subtitle)+" ")])],1)],1)})),1)],1)],1):a("div",[a("v-card-title",{staticClass:"text-wrap pb-2 text-body-1 font-weight-bold text-sm-h5"},[A._v(A._s(t.header))]),a("v-divider"),a("div",{staticClass:"d-flex"},A._l(t.fields,(function(t,e){return a("v-card",{key:e+A.lang,staticClass:"ma-3 flex-grow-1",staticStyle:{"min-height":"auto"},attrs:{flat:"",color:"grey lighten-5",width:"aviable"}},[a("v-card-title",{staticClass:"pa-0 text-wrap text-truncate font-weight-bold text-caption text-sm-body-1"},[A._v(A._s(t.card_title))]),A._l(t.list_items,(function(t,e){return a("v-list-item",{key:e+A.lang,staticClass:"pa-0",attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap text-caption text-sm-body-1"},[A._v(" "+A._s(t.list_item_title)+" ")]),a("v-list-item-subtitle",{staticClass:"text-wrap text-caption text-sm-body-2"},[A._v(" "+A._s(t.subtitle)+" ")])],1)],1)}))],2)})),1)],1)])})),1):a("div",{key:"langNotSet",staticClass:"d-flex justify-center align-center",staticStyle:{position:"fixed",top:"45%",left:"48%"}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)]),A.lang?a("v-footer",{key:"langSet",staticClass:"pa-0"},[a("v-card",{staticClass:"text-wrap text-center",attrs:{flat:"",tile:"",width:"100%",color:"grey lighten-5"}},[a("v-divider"),"pl"==A.lang?a("v-card-text",{staticClass:"text-caption text-sm-body-2"},[A._v(" Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO). ")]):a("v-card-text",{staticClass:"text-caption text-sm-body-2"},[A._v(" I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation). ")])],1)],1):A._e()],1)],1)],1)],1)},n=[],r=e("5530"),g=(e("d81d"),e("159b"),e("260b")),s=(e("e71f"),{data:function(){return{db:g["a"].firestore(),lang:null,dict:{}}},computed:{dictLanguage:function(){return this.dict[this.lang]}},created:function(){var A=this;this.db.collection("cv").doc("Stanisław Zambrzycki").collection("languages").get().then((function(t){var e=t.docs.map((function(A){return Object(r["a"])({id:A.ref.id},A.data())}));e.forEach((function(t){A.dict[t.id]=t.cards})),A.lang="pl"}))},methods:{changeLanguage:function(){"pl"===this.lang?this.lang="eng":this.lang="pl"},doIt:function(){window.print()}}}),o=s,I=e("2877"),l=e("6544"),E=e.n(l),c=e("7496"),C=e("8212"),B=e("8336"),d=e("b0af"),Q=e("99d9"),u=e("ce7e"),h=e("0789"),p=e("553a"),f=e("132d"),v=e("adda"),m=e("8860"),w=e("da13"),x=e("5d23"),b=e("f6c4"),M=e("490a"),G=e("8dd9"),Y=Object(I["a"])(o,i,n,!1,null,null,null),y=Y.exports;E()(Y,{VApp:c["a"],VAvatar:C["a"],VBtn:B["a"],VCard:d["a"],VCardText:Q["a"],VCardTitle:Q["b"],VDivider:u["a"],VFadeTransition:h["b"],VFooter:p["a"],VIcon:f["a"],VImg:v["a"],VList:m["a"],VListItem:w["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMain:b["a"],VProgressCircular:M["a"],VSheet:G["a"]});var z=e("f309");a["a"].use(z["a"]);var D=new z["a"]({}),j={apiKey:"AIzaSyDMq-NNcXf1x9mRA_c7P5oonIBEAgludHE",authDomain:"stanislaw-zambrzycki-cv.firebaseapp.com",projectId:"stanislaw-zambrzycki-cv",storageBucket:"stanislaw-zambrzycki-cv.appspot.com",messagingSenderId:"296272213129",appId:"1:296272213129:web:9ce11ba33a1829dd8b4258"};e("5363");a["a"].config.productionTip=!1,new a["a"]({vuetify:D,render:function(A){return A(y)},beforeCreate:function(){document.title="CV Stanisław Zambrzycki"},beforeMount:function(){g["a"].initializeApp(j)}}).$mount("#app")},6199:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGQCAYAAAA+89ElAAAABmJLR0QA/wD/AP+gvaeTAAAHY0lEQVR4nO3YQRGAMBAEQYIG5OBfBV4OF8ljuhXsc2rXzMwFAEDGfXoAAAB7CUAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMet73jk9AgCAfTyAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAzA+g8wlG8saPDAAAAABJRU5ErkJggg=="},"8b73":function(A,t){A.exports="data:image/webp;base64,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"}});
//# sourceMappingURL=app.24d25e3e.js.map