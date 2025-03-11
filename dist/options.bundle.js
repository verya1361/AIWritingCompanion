/*! For license information please see options.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={"./src/config.js":(t,e,r)=>{r.r(e),r.d(e,{CONFIG:()=>c,getApiKeyAsync:()=>s,state:()=>u});var n=r("./src/utils/helpers.js");function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new j(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function E(){}function b(){}var L={};f(L,u,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(R([])));_&&_!==r&&n.call(_,u)&&(L=_);var T=b.prototype=w.prototype=Object.create(L);function N(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(i,a,c,u){var s=p(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function R(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return E.prototype=b,a(T,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:E,configurable:!0}),E.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(T),t},e.awrap=function(t){return{__await:t}},N(S.prototype),f(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(T),f(T,l,"Generator"),f(T,u,(function(){return this})),f(T,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=R,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var c={USE_MOCK:!1,API_URL:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite-preview-02-05:generateContent",PROMPT_ENGLISH:"Please translate the following text into English, preserving the sentence structure (like new lines) and displaying only the output:",PROMPT_PERSIAN:"لطفاً متن زیر را به فارسی ترجمه کنید، ساختار جمله (مانند خطوط جدید) را حفظ کرده و فقط خروجی را نمایش دهید:",HIGHLIGHT_STYLE:"2px solid red",DEBUG_TRANSLATED_ENGLISH:"This is a mock translation to English.",DEBUG_TRANSLATED_PERSIAN:"این یک ترجمه آزمایشی به فارسی است.",DEBUG_TRANSLATED_ENGLISH_With_NewLine:"This is a mock \ntranslation to English with \nnew lines.",DEBUG_TRANSLATED_PERSIAN_With_NewLine:"این یک ترجمه آزمایشی \nبرای ترجمه به فارسی \nبا خطوط جدید است.",HIGHTLIH_NEW_ELEMETN_RED:"2px solid red",TRANSLATION_ICON_TITLE:"Translate Text",ICON_TRANSLATION:"🌐",ICON_ERROR:"❌ ",ICON_SECCESS:"✅ ",ICON_STATUS:"🔄 ",ICON_WARNING:"⚠️ ",ICON_INFO:"💠 ",RTL_REGEX:/[\u0600-\u06FF]/,PERSIAN_REGEX:/^(?=.*[\u0600-\u06FF])[\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9\u0041-\u005A\u0061-\u007A\u0030-\u0039\s.,:;؟!()«»@#\n\t\u200C]+$/},u={selectionActive:!1,highlightedElement:null,activeTranslateIcon:null,originalTexts:{}},s=function(){var t,e=(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){try{var r;if(!(0,n.isExtensionContextValid)())return void e(new Error("Extension context invalid"));if(null===(r=chrome)||void 0===r||null===(r=r.storage)||void 0===r||!r.sync)return void e(new Error("Error: The extension has not loaded correctly"));chrome.storage.sync.get(["apiKey"],(function(r){chrome.runtime.lastError?e(new Error("System error: ".concat(chrome.runtime.lastError.message))):t(r.apiKey||"")}))}catch(t){e(new Error("Access error: ".concat(t.message)))}})));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}()},"./src/utils/helpers.js":(t,e,r)=>{r.r(e),r.d(e,{delay:()=>o,fadeOut:()=>u,isEditable:()=>i,isExtensionContextValid:()=>s,openOptionsPage:()=>l,setCursorPosition:()=>c,setCursorToEnd:()=>a,showStatus:()=>f});var n,o=function(t){return new Promise((function(e){return setTimeout(e,t)}))},i=function(t){return(null==t?void 0:t.isContentEditable)||["INPUT","TEXTAREA"].includes(null==t?void 0:t.tagName)},a=function(t){if(t&&document.body.contains(t)){if(t.focus(),"INPUT"===t.tagName||"TEXTAREA"===t.tagName)t.selectionStart=t.value.length,t.selectionEnd=t.value.length;else if(t.isContentEditable){var e=document.createRange(),r=window.getSelection();e.selectNodeContents(t),e.collapse(!1),r.removeAllRanges(),r.addRange(e)}t.scrollTop=t.scrollHeight}},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"end",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(t&&document.body.contains(t)){if(t.focus(),"INPUT"===t.tagName||"TEXTAREA"===t.tagName){var n="start"===e?0:t.value.length;t.setSelectionRange(n+r,n+r)}else if(t.isContentEditable){var o,i=document.createRange(),a=window.getSelection(),c=t.childNodes;if("start"===e)i.setStart(c[0]||t,0);else i.setStart(c[c.length-1]||t,(null===(o=t.textContent)||void 0===o?void 0:o.length)||0);i.collapse(!0),a.removeAllRanges(),a.addRange(i)}t.scrollTop=t.scrollHeight}},u=function(t){t.style.transition="opacity 0.5s",t.style.opacity="0",setTimeout((function(){return t.remove()}),500)},s=function(){try{var t,e;return!(null===(t=chrome)||void 0===t||null===(t=t.runtime)||void 0===t||!t.id||null===(e=chrome)||void 0===e||null===(e=e.storage)||void 0===e||!e.sync)}catch(t){return!1}},l=function(){chrome.runtime.openOptionsPage?chrome.runtime.openOptionsPage():window.open(chrome.runtime.getURL("options.html"))},f=(n=null,function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;n&&n.remove();var o=document.createElement("div");o.className="status-notification ".concat(e),o.textContent=t,document.body.appendChild(o),n=o,setTimeout((function(){o.remove(),n=null}),r)})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{r.r(n);var t=r("./src/config.js");function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(){o=function(){return r};var t,r={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new j(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function E(){}function b(){}var L={};f(L,u,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(R([])));_&&_!==n&&i.call(_,u)&&(L=_);var T=b.prototype=w.prototype=Object.create(L);function N(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,r){function n(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==e(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function R(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return E.prototype=b,a(T,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:E,configurable:!0}),E.displayName=f(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(T),t},r.awrap=function(t){return{__await:t}},N(S.prototype),f(S.prototype,s,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(T),f(T,l,"Generator"),f(T,u,(function(){return this})),f(T,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=R,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){var e=chrome.runtime.getManifest();function r(t,e){var r=document.getElementById("status");r.textContent=t,r.className="status-".concat(e)}document.getElementById("NameVersion").textContent="".concat(e.name," v").concat(e.version),(0,t.getApiKeyAsync)().then((function(t){document.getElementById("apiKey").value=t})).catch((function(){})),document.getElementById("saveApiKey").addEventListener("click",a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=document.getElementById("apiKey").value.trim()){t.next=4;break}return r("لطفا کلید API را وارد کنید","error"),t.abrupt("return");case 4:return t.prev=4,t.next=7,new Promise((function(t,r){chrome.storage.sync.set({apiKey:e},(function(){chrome.runtime.lastError?r(chrome.runtime.lastError):t()}))}));case 7:r("ذخیره شد!","success"),setTimeout((function(){r("","")}),2e3),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),r("خطا در ذخیره سازی: "+t.t0.message,"error");case 15:case"end":return t.stop()}}),t,null,[[4,11]])}))))}))})()})();