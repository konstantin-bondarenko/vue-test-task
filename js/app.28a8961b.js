(function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({home:"home"}[e]||e)+"."+{home:"a6044e45"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={home:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({home:"home"}[e]||e)+"."+{home:"dd2f1683"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-test-task/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"2a34":function(e,t,r){},3014:function(e,t,r){"use strict";r("b39d")},"6bb0":function(e,t,r){},"9a27":function(e,t,r){"use strict";r("6bb0")},acb4:function(e,t,r){"use strict";r("c882")},b39d:function(e,t,r){},c882:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=r("7496"),a=r("f6c4"),u=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(o["a"],{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Vue Invoice Calc")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About Vuetify")])],1),t(a["a"],[t("router-view")],1)],1)},i=[],c=n["a"].extend({name:"App",data:function(){return{}}}),s=c,l=(r("9a27"),r("2877")),d=Object(l["a"])(s,u,i,!1,null,"1086c2dc",null),p=d.exports,f=r("8c4f"),m=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"invoice-card"},[t("h1",[e._v("Vue Invoice Calc")]),t("Form",{on:{"add-product":e.addProduct}}),t("Table",{attrs:{"products-data":e.products},on:{"delete-products":e.deleteProducts}})],1)},b=[],h=r("9ab4"),v=r("8336"),y=r("8654"),g=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t(y["a"],{attrs:{name:"name",outlined:"",dense:"","error-messages":e.nameErrors,placeholder:"Product name"},on:{blur:e.$v.name.$touch},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t(y["a"],{staticStyle:{"max-width":"200px"},attrs:{name:"price",outlined:"",dense:"","error-messages":e.priceErrors,placeholder:"Price"},on:{blur:e.$v.price.$touch},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),t(y["a"],{staticStyle:{"max-width":"200px"},attrs:{name:"qty",outlined:"",dense:"","error-messages":e.qtyErrors,placeholder:"Qty"},on:{blur:e.$v.qty.$touch},model:{value:e.qty,callback:function(t){e.qty=t},expression:"qty"}}),t(v["a"],{attrs:{type:"submit"}},[e._v(" Add ")])],1)},O=[],P=r("1b40"),_=r("b5ae"),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name="",t.price="",t.qty="",t}return Object(h["c"])(t,e),Object.defineProperty(t.prototype,"nameErrors",{get:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.required&&e.push("Name is required"),!this.$v.name.minLength&&e.push("Minimal length is 2"),e):e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"priceErrors",{get:function(){var e=[];return this.$v.price.$dirty?(!this.$v.price.required&&e.push("Price is required"),!this.$v.price.numeric&&e.push("Should be positive number"),e):e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"qtyErrors",{get:function(){var e=[];return this.$v.qty.$dirty?(!this.$v.qty.required&&e.push("Quantity is required"),!this.$v.qty.numeric&&e.push("Should be positive number"),e):e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"productData",{get:function(){return{id:JSON.stringify(new Date),name:this.name,price:this.price,qty:this.qty,sum:0}},enumerable:!1,configurable:!0}),t.prototype.resetLocals=function(){this.$v.$reset(),this.name="",this.price="",this.qty=""},t.prototype.onSubmit=function(){this.$v.$touch(),this.$v.$invalid||(this.addProduct(),this.resetLocals())},t.prototype.addProduct=function(){return this.productData||{}},Object(h["b"])([Object(P["b"])()],t.prototype,"addProduct",null),t=Object(h["b"])([Object(P["a"])({name:"Form",validations:{name:{required:_["required"],minLength:Object(_["minLength"])(2)},price:{required:_["required"],numeric:_["numeric"]},qty:{required:_["required"],numeric:_["numeric"]}}})],t),t}(P["d"]),D=j,S=D,q=(r("acb4"),Object(l["a"])(S,g,O,!1,null,"54493d2e",null)),T=q.exports,x=r("8fea"),C=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"invoice-table"},[t(x["a"],{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.productsData,"item-key":"id","hide-default-footer":"","show-select":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),t("div",{staticClass:"invoice-table-footer"},[t(v["a"],{on:{click:e.deleteSelected}},[e._v(" Delete ")]),t("div",[e._v("Total: "+e._s(e.totalSum))])],1)],1)},E=[],$=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.selected=[],t.headers=[{text:"Product name",align:"start",value:"name"},{text:"Price",value:"price"},{text:"Qty",value:"qty"},{text:"Sum",value:"sum"}],t}return Object(h["c"])(t,e),Object.defineProperty(t.prototype,"totalSum",{get:function(){var e;return null===(e=this.productsData)||void 0===e?void 0:e.reduce((function(e,t){return e+t.sum}),0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectedIds",{get:function(){return this.selected.map((function(e){return e.id}))},enumerable:!1,configurable:!0}),t.prototype.deleteSelected=function(){return this.selectedIds},Object(h["b"])([Object(P["c"])()],t.prototype,"productsData",void 0),Object(h["b"])([Object(P["b"])("delete-products")],t.prototype,"deleteSelected",null),t=Object(h["b"])([P["a"]],t),t}(P["d"]),w=$,k=w,I=(r("3014"),Object(l["a"])(k,C,E,!1,null,"394e8018",null)),N=I.exports,A=r("2f62"),L=n["a"].extend({name:"InvoiceCalc",components:{Form:T,Table:N},created:function(){this.initProducts()},computed:Object(h["a"])({},Object(A["c"])("products",["products"])),methods:Object(h["a"])({},Object(A["b"])("products",["addProduct","deleteProducts","initProducts"]))}),U=L,R=(r("daab"),Object(l["a"])(U,m,b,!1,null,"03b0c65e",null)),J=R.exports;n["a"].use(f["a"]);var M=[{path:"/",name:"InvoiceCalc",component:J},{path:"/about",name:"Home",component:function(){return r.e("home").then(r.bind(null,"bb51"))}}],F=new f["a"]({mode:"history",base:"/vue-test-task/",routes:M}),B=F,H=r("f309");n["a"].use(H["a"]);var Q=new H["a"]({}),V=r("1dce"),K=r.n(V);P["a"].registerHooks(["validations"]);var z,G,W={products:Array()};(function(e){e["ADD_PRODUCT"]="ADD_PRODUCT",e["DELETE_PRODUCT"]="DELETE_PRODUCT",e["INIT_PRODUCTS"]="INIT_PRODUCTS"})(z||(z={}));var X=(G={},G[z.ADD_PRODUCT]=function(e,t){e.products.push(t),localStorage.setItem("products",JSON.stringify(e.products))},G[z.DELETE_PRODUCT]=function(e,t){e.products=e.products.filter((function(e){return!t.includes(e.id)})),localStorage.setItem("products",JSON.stringify(e.products))},G[z.INIT_PRODUCTS]=function(e){localStorage.getItem("products")&&(e.products=JSON.parse(localStorage.getItem("products")||""))},G),Y={addProduct:function(e,t){var r=e.commit,n=Number(null===t||void 0===t?void 0:t.price)*Number(null===t||void 0===t?void 0:t.qty),o=Object(h["a"])(Object(h["a"])({},t),{sum:n});r(z.ADD_PRODUCT,o)},deleteProducts:function(e,t){var r=e.commit;r(z.DELETE_PRODUCT,t)},initProducts:function(e){var t=e.commit;t(z.INIT_PRODUCTS)}},Z={},ee={namespaced:!0,state:W,mutations:X,actions:Y,getters:Z};n["a"].use(A["a"]);var te=new A["a"].Store({modules:{products:ee}});n["a"].config.productionTip=!1,n["a"].use(K.a),new n["a"]({router:B,vuetify:Q,store:te,render:function(e){return e(p)}}).$mount("#app")},daab:function(e,t,r){"use strict";r("2a34")}});
//# sourceMappingURL=app.28a8961b.js.map