webpackJsonp([16],{14:function(t,e,r){t.exports=r(18)},15:function(t,e,r){"use strict";e.__esModule=!0;var n=r(16),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var s=e[i](a),u=s.value}catch(t){return void r(t)}if(!s.done)return o.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}},178:function(t,e,r){"use strict";var n=r(14),o=r.n(n),i=r(15),a=r.n(i),s=r(41),u=r.n(s),c=r(33);e.a={i18n:{messages:{en:{"description.first":"Enter your name","label.first":"Name","description.second":"Enter your password","label.second":"Password","figcaption.first":"You may choose one of these users to login.","button.first":"Submit"},de:{"description.first":"Gebe deinen Namen ein","label.first":"Name","description.second":"Gebe dein Passwort ein","label.second":"Passwort","figcaption.first":"Du kannst einen dieser Nutzer wählen, um dich einzuloggen.","button.first":"Senden"}}},computed:{user:{get:function(){return this.$store.state.User.user}},name:{get:function(){return this.$store.state.User.user.name},set:function(t){this.$store.commit("SET_USER_NAME",t)}},password:{get:function(){return this.$store.state.User.user.password},set:function(t){this.$store.commit("SET_USER_PASSWORD",t)}}},methods:u()({login:function(){var t=this;return a()(o.a.mark(function e(){var r,n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("loginUser",t.user);case 2:r=e.sent,n=r.token,i=r.cookie,window.localStorage.setItem("token",n),t.setCookie("user",i,604800),t.setIsUserAuthenticated(!0),t.$emit("userLoggedIn"),t.$router.push({name:"Products"});case 10:case"end":return e.stop()}},e,t)}))()},setCookie:function(t,e,r){var n=r?"; expires="+new Date((new Date).getTime()+1e3*r).toGMTString():"";document.cookie=t+"="+encodeURIComponent(e)+n+"; path=/"}},Object(c.c)({setIsUserAuthenticated:"SET_IS_USER_AUTHENTICATED"}))}},18:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(19),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},19:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),s=new p(n||[]);return a._invoke=c(t,r,s),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,i,a){var s=n(t[r],t,o);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&g.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},a)}a(s.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function c(t,e,r){var o=k;return function(i,a){if(o===O)throw new Error("Generator is already running");if(o===N){if("throw"===i)throw a;return m()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var u=f(s,r);if(u){if(u===R)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===k)throw o=N,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=O;var c=n(t,e,r);if("normal"===c.type){if(o=r.done?N:S,c.arg===R)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=N,r.method="throw",r.arg=c.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,f(t,e),"throw"===e.method))return R;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return R}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,R;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,R):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,R)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function d(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=v,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:v,done:!0}}var v,y=Object.prototype,g=y.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",E=w.toStringTag||"@@toStringTag",_="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(_&&(t.exports=L));L=e.regeneratorRuntime=_?t.exports:{},L.wrap=r;var k="suspendedStart",S="suspendedYield",O="executing",N="completed",R={},j={};j[x]=function(){return this};var P=Object.getPrototypeOf,T=P&&P(P(d([])));T&&T!==y&&g.call(T,x)&&(j=T);var $=a.prototype=o.prototype=Object.create(j);i.prototype=$.constructor=a,a.constructor=i,a[E]=i.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,E in t||(t[E]="GeneratorFunction")),t.prototype=Object.create($),t},L.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[b]=function(){return this},L.AsyncIterator=u,L.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s($),$[E]="Generator",$[x]=function(){return this},$.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),s=g.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,R):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),R},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),R}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=v),R}}}(function(){return this}()||Function("return this")())},458:function(t,e,r){var n=r(7)(r(459),r(460),null,null);t.exports=n.exports},459:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(178);e.default={mixins:[n.a]}},460:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("mt-field",{attrs:{label:t.$t("label.first")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("mt-field",{attrs:{label:t.$t("label.second"),type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("mt-cell",{attrs:{title:""}},[r("mt-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:t.login}},[t._v(t._s(t.$t("button.first")))])],1)],1)},staticRenderFns:[]}}});