!function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)n.d(e,o,function(t){return r[t]}.bind(null,o));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=0)}([function(r,t,n){"use strict";n.r(t);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n])})(r,t)};function o(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(r){return"function"==typeof r}var s=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack;s=r},get useDeprecatedSynchronousErrorHandling(){return s}};function c(r){setTimeout(function(){throw r})}var a={closed:!0,next:function(r){},error:function(r){if(u.useDeprecatedSynchronousErrorHandling)throw r;c(r)},complete:function(){}},p=Array.isArray||function(r){return r&&"number"==typeof r.length};function f(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map(function(r,t){return t+1+") "+r.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}f.prototype=Object.create(Error.prototype);var h=f,l=function(){function r(r){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,r&&(this._unsubscribe=r)}var t;return r.prototype.unsubscribe=function(){var r,t=!1;if(!this.closed){var n=this._parent,e=this._parents,o=this._unsubscribe,s=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var u,c=-1,a=e?e.length:0;n;)n.remove(this),n=++c<a&&e[c]||null;if(i(o))try{o.call(this)}catch(n){t=!0,r=n instanceof h?b(n.errors):[n]}if(p(s))for(c=-1,a=s.length;++c<a;){var f=s[c];if(null!==(u=f)&&"object"==typeof u)try{f.unsubscribe()}catch(n){t=!0,r=r||[],n instanceof h?r=r.concat(b(n.errors)):r.push(n)}}if(t)throw new h(r)}},r.prototype.add=function(t){var n=t;switch(typeof t){case"function":n=new r(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof r)){var e=n;(n=new r)._subscriptions=[e]}break;default:if(!t)return r.EMPTY;throw new Error("unrecognized teardown "+t+" added to Subscription.")}if(n._addParent(this)){var o=this._subscriptions;o?o.push(n):this._subscriptions=[n]}return n},r.prototype.remove=function(r){var t=this._subscriptions;if(t){var n=t.indexOf(r);-1!==n&&t.splice(n,1)}},r.prototype._addParent=function(r){var t=this._parent,n=this._parents;return t!==r&&(t?n?-1===n.indexOf(r)&&(n.push(r),!0):(this._parents=[r],!0):(this._parent=r,!0))},r.EMPTY=((t=new r).closed=!0,t),r}();function b(r){return r.reduce(function(r,t){return r.concat(t instanceof h?t.errors:t)},[])}var y="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),d=function(r){function t(n,e,o){var i=r.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=a;break;case 1:if(!n){i.destination=a;break}if("object"==typeof n){n instanceof t?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new _(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new _(i,n,e,o)}return i}return o(t,r),t.prototype[y]=function(){return this},t.create=function(r,n,e){var o=new t(r,n,e);return o.syncErrorThrowable=!1,o},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var r=this._parent,t=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=r,this._parents=t,this},t}(l),_=function(r){function t(t,n,e,o){var s,u=r.call(this)||this;u._parentSubscriber=t;var c=u;return i(n)?s=n:n&&(s=n.next,e=n.error,o=n.complete,n!==a&&(i((c=Object.create(n)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=e,u._complete=o,u}return o(t,r),t.prototype.next=function(r){if(!this.isStopped&&this._next){var t=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},t.prototype.error=function(r){if(!this.isStopped){var t=this._parentSubscriber,n=u.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=r,t.syncErrorThrown=!0):c(r),this.unsubscribe();else{if(this.unsubscribe(),n)throw r;c(r)}}},t.prototype.complete=function(){var r=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return r._complete.call(r._context)};u.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(r,t){try{r.call(this._context,t)}catch(r){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw r;c(r)}},t.prototype.__tryOrSetError=function(r,t,n){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return u.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=t,r.syncErrorThrown=!0,!0):(c(t),!0)}return!1},t.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},t}(d);var v="function"==typeof Symbol&&Symbol.observable||"@@observable";function w(){}function E(r){return r?1===r.length?r[0]:function(t){return r.reduce(function(r,t){return t(r)},t)}:w}var S=function(){function r(r){this._isScalar=!1,r&&(this._subscribe=r)}return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(r,t,n){var e=this.operator,o=function(r,t,n){if(r){if(r instanceof d)return r;if(r[y])return r[y]()}return r||t||n?new d(r,t,n):new d(a)}(r,t,n);if(e?o.add(e.call(o,this.source)):o.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),u.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){u.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=t),!function(r){for(;r;){var t=r,n=t.closed,e=t.destination,o=t.isStopped;if(n||o)return!1;r=e&&e instanceof d?e:null}return!0}(r)?console.warn(t):r.error(t)}},r.prototype.forEach=function(r,t){var n=this;return new(t=g(t))(function(t,e){var o;o=n.subscribe(function(t){try{r(t)}catch(r){e(r),o&&o.unsubscribe()}},e,t)})},r.prototype._subscribe=function(r){var t=this.source;return t&&t.subscribe(r)},r.prototype[v]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return 0===r.length?this:E(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=g(r))(function(r,n){var e;t.subscribe(function(r){return e=r},function(r){return n(r)},function(){return r(e)})})},r.create=function(t){return new r(t)},r}();function g(r){if(r||(r=u.Promise||Promise),!r)throw new Error("no Promise impl found");return r}var m=function(){function r(r,t){this.project=r,this.thisArg=t}return r.prototype.call=function(r,t){return t.subscribe(new x(r,this.project,this.thisArg))},r}(),x=function(r){function t(t,n,e){var o=r.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=e||o,o}return o(t,r),t.prototype._next=function(r){var t;try{t=this.project.call(this.thisArg,r,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(d);Object.prototype.toString;const T={next:r=>{console.log("I am observer 1")}},O={next:r=>{console.log("I am observer 2")}};var j=function r(t,n,e,o){return i(e)&&(o=e,e=void 0),o?r(t,n,e).pipe((s=function(r){return p(r)?o.apply(void 0,r):o(r)},function(r){if("function"!=typeof s)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new m(s,u))})):new S(function(r){!function r(t,n,e,o,i){var s;if(function(r){return r&&"function"==typeof r.addEventListener&&"function"==typeof r.removeEventListener}(t)){var u=t;t.addEventListener(n,e,i),s=function(){return u.removeEventListener(n,e,i)}}else if(function(r){return r&&"function"==typeof r.on&&"function"==typeof r.off}(t)){var c=t;t.on(n,e),s=function(){return c.off(n,e)}}else if(function(r){return r&&"function"==typeof r.addListener&&"function"==typeof r.removeListener}(t)){var a=t;t.addListener(n,e),s=function(){return a.removeListener(n,e)}}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(var p=0,f=t.length;p<f;p++)r(t[p],n,e,o,i)}o.add(s)}(t,n,function(t){arguments.length>1?r.next(Array.prototype.slice.call(arguments)):r.next(t)},r,e)});var s,u}(document.querySelector(".btn"),"click");j.subscribe(T);let P=j.subscribe(O);setTimeout(()=>{P.unsubscribe()},2e3)}]);
//# sourceMappingURL=app.bundle.js.map