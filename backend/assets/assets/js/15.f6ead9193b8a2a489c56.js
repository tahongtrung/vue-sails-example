webpackJsonp([15],{14:function(t,e,r){t.exports=r(18)},15:function(t,e,r){"use strict";e.__esModule=!0;var n=r(16),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,u){try{var c=e[i](u),a=c.value}catch(t){return void r(t)}if(!c.done)return o.default.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)});t(a)}return n("next")})}}},18:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(19),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},181:function(t,e,r){"use strict";e.a={data:function(){return{id:""}},created:function(){this.$store.dispatch("getProductsByUser",this.user)},i18n:{messages:{en:{"field.first":"Title","field.second":"Description","field.third":"Price","field.fourth":"Actions","button.first":"Edit","button.second":"Remove","product.removed":"Product removed","p.first":"No products yet, you should create one."},de:{"field.first":"Titel","field.second":"Beschreibung","field.third":"Preis","field.fourth":"Aktionen","button.first":"Bearbeiten","button.second":"Entfernen","product.removed":"Produkt entfernt","p.first":"Noch keine Produkte, du solltest eines erstellen."}}},computed:{fields:{get:function(){return{title:{label:this.$t("field.first")},description:{label:this.$t("field.second")},price:{label:this.$t("field.third")},actions:{label:this.$t("field.fourth")}}}},products:{get:function(){return this.$store.state.Products.products}},user:{get:function(){return this.$store.state.User.user}},isEditProductVisible:{get:function(){return this.$store.state.Product.product.meta.isEditProductVisible},set:function(t){this.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",t)}}}}},19:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,u=Object.create(i.prototype),c=new d(n||[]);return u._invoke=s(t,r,c),u}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function u(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function a(t){function e(r,o,i,u){var c=n(t[r],t,o);if("throw"!==c.type){var a=c.arg,s=a.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(s).then(function(t){a.value=t,i(a)},u)}u(c.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=P;return function(i,u){if(o===$)throw new Error("Generator is already running");if(o===O){if("throw"===i)throw u;return v()}for(r.method=i,r.arg=u;;){var c=r.delegate;if(c){var a=f(c,r);if(a){if(a===j)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===P)throw o=O,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=$;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?O:k,s.arg===j)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=O,r.method="throw",r.arg=s.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,j;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,j):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:y,done:!0}}var y,m=Object.prototype,g=m.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},b=w.iterator||"@@iterator",_=w.asyncIterator||"@@asyncIterator",x=w.toStringTag||"@@toStringTag",E="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(E&&(t.exports=L));L=e.regeneratorRuntime=E?t.exports:{},L.wrap=r;var P="suspendedStart",k="suspendedYield",$="executing",O="completed",j={},R={};R[b]=function(){return this};var S=Object.getPrototypeOf,T=S&&S(S(p([])));T&&T!==m&&g.call(T,b)&&(R=T);var I=u.prototype=o.prototype=Object.create(R);i.prototype=I.constructor=u,u.constructor=i,u[x]=i.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(I),t},L.awrap=function(t){return{__await:t}},c(a.prototype),a.prototype[_]=function(){return this},L.AsyncIterator=a,L.async=function(t,e,n,o){var i=new a(r(t,e,n,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(I),I[x]="Generator",I[b]=function(){return this},I.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),j}}}(function(){return this}()||Function("return this")())},278:function(t,e,r){var n=r(7)(r(279),r(283),null,null);t.exports=n.exports},279:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(14),o=r.n(n),i=r(15),u=r.n(i),c=r(181),a=function(){return r.e(8).then(r.bind(null,280))};e.default={mixins:[c.a],components:{ProductPatch:a},methods:{showPatchForm:function(t){this.$set(this,"id",t),this.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",!0)},deleteProduct:function(t){var e=this;return u()(o.a.mark(function r(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("deleteProduct",t);case 2:e.$store.dispatch("getProductsByUser",e.user);case 3:case"end":return r.stop()}},r,e)}))()}}}},283:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isEditProductVisible?r("product-patch",{attrs:{id:t.id}}):t._e(),t._v(" "),t.products.length>0?r("b-table",{attrs:{items:t.products,fields:t.fields},scopedSlots:t._u([{key:"price",fn:function(e){return[t._v("\n      $"+t._s(e.item.price)+"\n    ")]}},{key:"actions",fn:function(e){return[r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){t.showPatchForm(e.item.id)}}},[t._v(t._s(t.$t("button.first"))+"\n      ")]),t._v(" "),r("b-button",{attrs:{size:"sm",variant:"outline-warning"},on:{click:function(r){t.deleteProduct(e.item.id)}}},[t._v(t._s(t.$t("button.second")))])]}}])}):r("p",[t._v(t._s(t.$t("p.first")))])],1)},staticRenderFns:[]}}});