/*! For license information please see popup.bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),u=new x(n||[]);return a(i,"_invoke",{value:L(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var E="suspendedStart",y="suspendedYield",d="executing",m="completed",v={};function g(){}function T(){}function _(){}var O={};f(O,c,(function(){return this}));var b=Object.getPrototypeOf,I=b&&b(b(G([])));I&&I!==o&&i.call(I,c)&&(O=I);var w=_.prototype=g.prototype=Object.create(O);function A(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function N(e,r){function n(o,a,u,c){var s=p(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function L(t,e,n){var o=E;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=R(u,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===E)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function R(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,R(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return T.prototype=_,a(w,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:T,configurable:!0}),T.displayName=f(_,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===T||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},A(N.prototype),f(N.prototype,s,(function(){return this})),n.AsyncIterator=N,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new N(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(w),f(w,l,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=G,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))}}var u={USE_MOCK:!1,DEBUG_MODE:!1,SOURCE_LANGUAGE:"English",TARGET_LANGUAGE:"Persian",TRANSLATION_API:"gemini",API_URL:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",API_KEY:"",WEBAI_API_URL:"http://localhost:6969/translate",WEBAI_API_MODEL:"gemini-2.0-flash",OPENAI_API_KEY:"",OPENAI_API_URL:"https://api.openai.com/v1/chat/completions",OPENAI_API_MODEL:"gpt-3.5-turbo",OPENROUTER_API_KEY:"",OPENROUTER_API_URL:"https://openrouter.ai/api/v1/chat/completions",OPENROUTER_API_MODEL:"openai/gpt-3.5-turbo",TRANSLATE_ON_TEXT_FIELDS:!0,ENABLE_SHORTCUT_FOR_TEXT_FIELDS:!0,TRANSLATE_WITH_SELECT_ELEMENT:!0,TRANSLATE_ON_TEXT_SELECTION:!0,REQUIRE_CTRL_FOR_TEXT_SELECTION:!1,ENABLE_DICTIONARY:!0,HIGHTLIH_NEW_ELEMETN_RED:"2px solid red",TRANSLATION_ICON_TITLE:"Translate Text",HIGHLIGHT_STYLE:"2px solid red",ICON_TRANSLATION:"🌐",ICON_SECCESS:"✅ ",ICON_WARNING:"⚠️ ",ICON_STATUS:"⏳ ",ICON_ERROR:"❌ ",ICON_INFO:"🔵 ",ICON_REVERT:"",NOTIFICATION_ALIGNMENT:"right",NOTIFICATION_TEXT_DIRECTION:"rtl",NOTIFICATION_TEXT_ALIGNMENT:"right",RTL_REGEX:/[\u0600-\u06FF]/,PERSIAN_REGEX:/^(?=.*[\u0600-\u06FF])[\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9\u0041-\u005A\u0061-\u007A\u0030-\u0039\s.,:;؟!()«»@#\n\t\u200C]+$/,PROMPT_BASE_FIELD:"You are a translation service. Your task is to translate text while strictly preserving its structure, formatting, and line breaks. Follow these rules:\n\n  - If the input is in $_{SOURCE}, translate it to $_{TARGET}.\n  - If the input is in $_{TARGET}, translate it to $_{SOURCE}.\n  - If the input is in any other language, translate it to $_{TARGET}.\n  - If the input has grammar mistakes but is in $_{TARGET}, translate it to $_{SOURCE} while preserving the intended meaning.\n\n  Return **only** the translated text without any extra words, explanations, markdown, or modifications.\n\n  ```text input\n  $_{TEXT}\n  ```\n  ",PROMPT_BASE_SELECT:'Act as an automated JSON translation service. The input is a JSON array where each object contains a "text" property.\n\n  1. Translate each "text" value according to the given rules: $_{USER_RULES}\n  2. Preserve all input elements. **Do not omit, modify, or skip any entry.**\n  3. If translation is not needed for a specific item (e.g., numbers, hashtags, URLs), **return the original value unchanged.**\n  4. Maintain the internal structure, formatting, and line breaks exactly.\n  5. Output **only** the translated JSON array, with no extra text, explanations, or markdown.\n\n  ```json input\n  $_{TEXT}\n  ```\n    ',PROMPT_BASE_DICTIONARY:'You are a $_{TARGET} dictionary service. Your task is to provide in detailed dictionary definitions while strictly preserving the input structure and formatting. Follow these rules:\n\n  - Provide the translation of the input word or phrase.\n  - Include synonyms, word type (noun, verb, adjective, etc.), and a brief definition.\n  - If applicable, provide example sentences using the word or phrase in context.\n  - If the input is ambiguous, return the most common meanings.\n  - If no definition is found, return "No definition available."\n\n  Return in $_{TARGET} language, and **ONLY** the dictionary entry without any extra words, explanations, markdown, or modifications.\n\n  ```text input\n  $_{TEXT}\n  ```\n  ',PROMPT_TEMPLATE:"- If the input is in $_{SOURCE}, translate it to $_{TARGET}.\n- If the input is in $_{TARGET}, translate it to $_{SOURCE}.\n- If the input is in any other language, translate it to $_{TARGET}.\n- If the input has grammar mistakes but is in $_{TARGET}, translate it to $_{SOURCE} while preserving the intended meaning.",DEBUG_TRANSLATED_ENGLISH:"This is a mock translation to English.",DEBUG_TRANSLATED_PERSIAN:"این یک ترجمه آزمایشی به فارسی است.",DEBUG_TRANSLATED_ENGLISH_With_NewLine:"This is a mock \ntranslation to English with \nnew lines.",DEBUG_TRANSLATED_PERSIAN_With_NewLine:"این یک ترجمه آزمایشی \nبرای ترجمه به فارسی \nبا خطوط جدید است."},c=(new Map,null),s=function(){var t=a(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===c){t.next=2;break}return t.abrupt("return",c);case 2:return t.abrupt("return",new Promise((function(t){try{chrome&&chrome.storage&&chrome.storage.local?chrome.storage.local.get(null,(function(e){chrome.runtime.lastError?(console.error("Error fetching settings:",chrome.runtime.lastError),c=n({},u),t(c)):(c=n(n({},u),e),t(c))})):(console.warn("chrome.storage.local not available, using default CONFIG."),c=n({},u),t(c))}catch(e){console.error("Error accessing storage:",e),c=n({},u),t(c)}})));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();chrome&&chrome.storage&&chrome.storage.onChanged?chrome.storage.onChanged.addListener((function(t,e){if("local"===e&&c){Object.keys(t).forEach((function(e){if(u.hasOwnProperty(e)||c&&c.hasOwnProperty(e)){var r=t[e].newValue;c[e]!==r&&(c[e]=r,!0)}}))}})):console.warn("chrome.storage.onChanged not available. Settings cache might become stale.");var l=function(){var t=a(e().mark((function t(r,n){var o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:return i=t.sent,t.abrupt("return",null!==(o=null==i?void 0:i[r])&&void 0!==o?o:n);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=a(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l("DEBUG_MODE",u.DEBUG_MODE));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=a(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c||void 0===c.DEBUG_MODE){t.next=2;break}return t.abrupt("return",c.DEBUG_MODE);case 2:return t.abrupt("return",f());case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=a(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l("API_KEY",u.API_KEY));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function d(t,e,r){return e&&y(t.prototype,e),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e,r){return(e=g(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t){var e=function(t,e){if("object"!=E(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==E(e)?e:e+""}var T=d((function t(){m(this,t)}));v(T,"API","API"),v(T,"NETWORK","NETWORK"),v(T,"SERVICE","SERVICE"),v(T,"VALIDATIONMODEL","VALIDATIONMODEL"),v(T,"CONTEXT","CONTEXT"),v(T,"UI","UI"),v(T,"INTEGRATION","INTEGRATION"),v(T,"PARSE_SELECT_ELEMENT","PARSING_RESPONSE"),v(T,"PARSE_INPUT","PARSING_EXTRACT_FIELD");var _,O=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];h().then((function(t){var r;t&&(r=console).debug.apply(r,e)}))};_=null;document.getElementById("restore").addEventListener("click",(function(){chrome.scripting&&chrome.scripting.executeScript?chrome.scripting.executeScript({target:{allFrames:!0},func:function(){document.querySelectorAll("[data-original-text]").forEach((function(t){t.innerText=t.dataset.original-text,delete t.dataset.original,text}))}}):O("[Popup] Scripting API disabled")})),document.addEventListener("DOMContentLoaded",(function(){p().then((function(t){document.getElementById("apiKey").value=t})).catch((function(){})),document.getElementById("saveApiKey").addEventListener("click",(function(){var t=document.getElementById("apiKey").value.trim();chrome.storage.local.set({apiKey:t},(function(){O("[Popup] API key saved:",t)}))}))}))})();