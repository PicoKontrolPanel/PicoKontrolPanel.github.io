var hg=Object.defineProperty;var pg=(o,i,u)=>i in o?hg(o,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[i]=u;var ue=(o,i,u)=>pg(o,typeof i!="symbol"?i+"":i,u);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const _ of h.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function u(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=u(c);fetch(c.href,h)}})();function Tp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Bu={exports:{}},zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function _g(){if(Dh)return zi;Dh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(s,c,h){var _=null;if(h!==void 0&&(_=""+h),c.key!==void 0&&(_=""+c.key),"key"in c){h={};for(var b in c)b!=="key"&&(h[b]=c[b])}else h=c;return c=h.ref,{$$typeof:o,type:s,key:_,ref:c!==void 0?c:null,props:h}}return zi.Fragment=i,zi.jsx=u,zi.jsxs=u,zi}var jh;function gg(){return jh||(jh=1,Bu.exports=_g()),Bu.exports}var f=gg(),Lu={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function bg(){if(Oh)return ye;Oh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),_=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),j=Symbol.iterator;function F(w){return w===null||typeof w!="object"?null:(w=j&&w[j]||w["@@iterator"],typeof w=="function"?w:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,U={};function H(w,L,P){this.props=w,this.context=L,this.refs=U,this.updater=P||Q}H.prototype.isReactComponent={},H.prototype.setState=function(w,L){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,L,"setState")},H.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function pe(){}pe.prototype=H.prototype;function oe(w,L,P){this.props=w,this.context=L,this.refs=U,this.updater=P||Q}var xe=oe.prototype=new pe;xe.constructor=oe,le(xe,H.prototype),xe.isPureReactComponent=!0;var fe=Array.isArray;function Ne(){}var ee={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function be(w,L,P){var D=P.ref;return{$$typeof:o,type:w,key:L,ref:D!==void 0?D:null,props:P}}function _e(w,L){return be(w.type,L,w.props)}function ve(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function ae(w){var L={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(P){return L[P]})}var Ve=/\/+/g;function De(w,L){return typeof w=="object"&&w!==null&&w.key!=null?ae(""+w.key):L.toString(36)}function Ze(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Ne,Ne):(w.status="pending",w.then(function(L){w.status==="pending"&&(w.status="fulfilled",w.value=L)},function(L){w.status==="pending"&&(w.status="rejected",w.reason=L)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function O(w,L,P,D,I){var Z=typeof w;(Z==="undefined"||Z==="boolean")&&(w=null);var K=!1;if(w===null)K=!0;else switch(Z){case"bigint":case"string":case"number":K=!0;break;case"object":switch(w.$$typeof){case o:case i:K=!0;break;case E:return K=w._init,O(K(w._payload),L,P,D,I)}}if(K)return I=I(w),K=D===""?"."+De(w,0):D,fe(I)?(P="",K!=null&&(P=K.replace(Ve,"$&/")+"/"),O(I,L,P,"",function(St){return St})):I!=null&&(ve(I)&&(I=_e(I,P+(I.key==null||w&&w.key===I.key?"":(""+I.key).replace(Ve,"$&/")+"/")+K)),L.push(I)),1;K=0;var Ie=D===""?".":D+":";if(fe(w))for(var Ue=0;Ue<w.length;Ue++)D=w[Ue],Z=Ie+De(D,Ue),K+=O(D,L,P,Z,I);else if(Ue=F(w),typeof Ue=="function")for(w=Ue.call(w),Ue=0;!(D=w.next()).done;)D=D.value,Z=Ie+De(D,Ue++),K+=O(D,L,P,Z,I);else if(Z==="object"){if(typeof w.then=="function")return O(Ze(w),L,P,D,I);throw L=String(w),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return K}function Y(w,L,P){if(w==null)return w;var D=[],I=0;return O(w,D,"","",function(Z){return L.call(P,Z,I++)}),D}function ie(w){if(w._status===-1){var L=w._result;L=L(),L.then(function(P){(w._status===0||w._status===-1)&&(w._status=1,w._result=P)},function(P){(w._status===0||w._status===-1)&&(w._status=2,w._result=P)}),w._status===-1&&(w._status=0,w._result=L)}if(w._status===1)return w._result.default;throw w._result}var Ee=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},de={map:Y,forEach:function(w,L,P){Y(w,function(){L.apply(this,arguments)},P)},count:function(w){var L=0;return Y(w,function(){L++}),L},toArray:function(w){return Y(w,function(L){return L})||[]},only:function(w){if(!ve(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ye.Activity=k,ye.Children=de,ye.Component=H,ye.Fragment=u,ye.Profiler=c,ye.PureComponent=oe,ye.StrictMode=s,ye.Suspense=v,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ye.__COMPILER_RUNTIME={__proto__:null,c:function(w){return ee.H.useMemoCache(w)}},ye.cache=function(w){return function(){return w.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(w,L,P){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var D=le({},w.props),I=w.key;if(L!=null)for(Z in L.key!==void 0&&(I=""+L.key),L)!W.call(L,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&L.ref===void 0||(D[Z]=L[Z]);var Z=arguments.length-2;if(Z===1)D.children=P;else if(1<Z){for(var K=Array(Z),Ie=0;Ie<Z;Ie++)K[Ie]=arguments[Ie+2];D.children=K}return be(w.type,I,D)},ye.createContext=function(w){return w={$$typeof:_,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},ye.createElement=function(w,L,P){var D,I={},Z=null;if(L!=null)for(D in L.key!==void 0&&(Z=""+L.key),L)W.call(L,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(I[D]=L[D]);var K=arguments.length-2;if(K===1)I.children=P;else if(1<K){for(var Ie=Array(K),Ue=0;Ue<K;Ue++)Ie[Ue]=arguments[Ue+2];I.children=Ie}if(w&&w.defaultProps)for(D in K=w.defaultProps,K)I[D]===void 0&&(I[D]=K[D]);return be(w,Z,I)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(w){return{$$typeof:b,render:w}},ye.isValidElement=ve,ye.lazy=function(w){return{$$typeof:E,_payload:{_status:-1,_result:w},_init:ie}},ye.memo=function(w,L){return{$$typeof:y,type:w,compare:L===void 0?null:L}},ye.startTransition=function(w){var L=ee.T,P={};ee.T=P;try{var D=w(),I=ee.S;I!==null&&I(P,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ne,Ee)}catch(Z){Ee(Z)}finally{L!==null&&P.types!==null&&(L.types=P.types),ee.T=L}},ye.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ye.use=function(w){return ee.H.use(w)},ye.useActionState=function(w,L,P){return ee.H.useActionState(w,L,P)},ye.useCallback=function(w,L){return ee.H.useCallback(w,L)},ye.useContext=function(w){return ee.H.useContext(w)},ye.useDebugValue=function(){},ye.useDeferredValue=function(w,L){return ee.H.useDeferredValue(w,L)},ye.useEffect=function(w,L){return ee.H.useEffect(w,L)},ye.useEffectEvent=function(w){return ee.H.useEffectEvent(w)},ye.useId=function(){return ee.H.useId()},ye.useImperativeHandle=function(w,L,P){return ee.H.useImperativeHandle(w,L,P)},ye.useInsertionEffect=function(w,L){return ee.H.useInsertionEffect(w,L)},ye.useLayoutEffect=function(w,L){return ee.H.useLayoutEffect(w,L)},ye.useMemo=function(w,L){return ee.H.useMemo(w,L)},ye.useOptimistic=function(w,L){return ee.H.useOptimistic(w,L)},ye.useReducer=function(w,L,P){return ee.H.useReducer(w,L,P)},ye.useRef=function(w){return ee.H.useRef(w)},ye.useState=function(w){return ee.H.useState(w)},ye.useSyncExternalStore=function(w,L,P){return ee.H.useSyncExternalStore(w,L,P)},ye.useTransition=function(){return ee.H.useTransition()},ye.version="19.2.7",ye}var Ch;function sf(){return Ch||(Ch=1,Lu.exports=bg()),Lu.exports}var V=sf();const Yi=Tp(V);var Uu={exports:{}},Bi={},Hu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function yg(){return zh||(zh=1,(function(o){function i(O,Y){var ie=O.length;O.push(Y);e:for(;0<ie;){var Ee=ie-1>>>1,de=O[Ee];if(0<c(de,Y))O[Ee]=Y,O[ie]=de,ie=Ee;else break e}}function u(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Y=O[0],ie=O.pop();if(ie!==Y){O[0]=ie;e:for(var Ee=0,de=O.length,w=de>>>1;Ee<w;){var L=2*(Ee+1)-1,P=O[L],D=L+1,I=O[D];if(0>c(P,ie))D<de&&0>c(I,P)?(O[Ee]=I,O[D]=ie,Ee=D):(O[Ee]=P,O[L]=ie,Ee=L);else if(D<de&&0>c(I,ie))O[Ee]=I,O[D]=ie,Ee=D;else break e}}return Y}function c(O,Y){var ie=O.sortIndex-Y.sortIndex;return ie!==0?ie:O.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var _=Date,b=_.now();o.unstable_now=function(){return _.now()-b}}var v=[],y=[],E=1,k=null,j=3,F=!1,Q=!1,le=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;function xe(O){for(var Y=u(y);Y!==null;){if(Y.callback===null)s(y);else if(Y.startTime<=O)s(y),Y.sortIndex=Y.expirationTime,i(v,Y);else break;Y=u(y)}}function fe(O){if(le=!1,xe(O),!Q)if(u(v)!==null)Q=!0,Ne||(Ne=!0,ae());else{var Y=u(y);Y!==null&&Ze(fe,Y.startTime-O)}}var Ne=!1,ee=-1,W=5,be=-1;function _e(){return U?!0:!(o.unstable_now()-be<W)}function ve(){if(U=!1,Ne){var O=o.unstable_now();be=O;var Y=!0;try{e:{Q=!1,le&&(le=!1,pe(ee),ee=-1),F=!0;var ie=j;try{n:{for(xe(O),k=u(v);k!==null&&!(k.expirationTime>O&&_e());){var Ee=k.callback;if(typeof Ee=="function"){k.callback=null,j=k.priorityLevel;var de=Ee(k.expirationTime<=O);if(O=o.unstable_now(),typeof de=="function"){k.callback=de,xe(O),Y=!0;break n}k===u(v)&&s(v),xe(O)}else s(v);k=u(v)}if(k!==null)Y=!0;else{var w=u(y);w!==null&&Ze(fe,w.startTime-O),Y=!1}}break e}finally{k=null,j=ie,F=!1}Y=void 0}}finally{Y?ae():Ne=!1}}}var ae;if(typeof oe=="function")ae=function(){oe(ve)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,De=Ve.port2;Ve.port1.onmessage=ve,ae=function(){De.postMessage(null)}}else ae=function(){H(ve,0)};function Ze(O,Y){ee=H(function(){O(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return j},o.unstable_next=function(O){switch(j){case 1:case 2:case 3:var Y=3;break;default:Y=j}var ie=j;j=Y;try{return O()}finally{j=ie}},o.unstable_requestPaint=function(){U=!0},o.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ie=j;j=O;try{return Y()}finally{j=ie}},o.unstable_scheduleCallback=function(O,Y,ie){var Ee=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Ee+ie:Ee):ie=Ee,O){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ie+de,O={id:E++,callback:Y,priorityLevel:O,startTime:ie,expirationTime:de,sortIndex:-1},ie>Ee?(O.sortIndex=ie,i(y,O),u(v)===null&&O===u(y)&&(le?(pe(ee),ee=-1):le=!0,Ze(fe,ie-Ee))):(O.sortIndex=de,i(v,O),Q||F||(Q=!0,Ne||(Ne=!0,ae()))),O},o.unstable_shouldYield=_e,o.unstable_wrapCallback=function(O){var Y=j;return function(){var ie=j;j=Y;try{return O.apply(this,arguments)}finally{j=ie}}}})(Gu)),Gu}var Bh;function vg(){return Bh||(Bh=1,Hu.exports=yg()),Hu.exports}var Vu={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function xg(){if(Lh)return An;Lh=1;var o=sf();function i(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(v,y,E){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:k==null?null:""+k,children:v,containerInfo:y,implementation:E}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(v,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return h(v,y,null,E)},An.flushSync=function(v){var y=_.T,E=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=y,s.p=E,s.d.f()}},An.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},An.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},An.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var E=y.as,k=b(E,y.crossOrigin),j=typeof y.integrity=="string"?y.integrity:void 0,F=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:k,integrity:j,fetchPriority:F}):E==="script"&&s.d.X(v,{crossOrigin:k,integrity:j,fetchPriority:F,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},An.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=b(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},An.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,k=b(E,y.crossOrigin);s.d.L(v,E,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},An.preloadModule=function(v,y){if(typeof v=="string")if(y){var E=b(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},An.requestFormReset=function(v){s.d.r(v)},An.unstable_batchedUpdates=function(v,y){return v(y)},An.useFormState=function(v,y,E){return _.H.useFormState(v,y,E)},An.useFormStatus=function(){return _.H.useHostTransitionStatus()},An.version="19.2.7",An}var Uh;function Sg(){if(Uh)return Vu.exports;Uh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Vu.exports=xg(),Vu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Eg(){if(Hh)return Bi;Hh=1;var o=vg(),i=sf(),u=Sg();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(s(188))}function y(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,l=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return v(r),e;if(a===l)return v(r),n;a=a.sibling}throw Error(s(188))}if(t.return!==l.return)t=r,l=a;else{for(var d=!1,p=r.child;p;){if(p===t){d=!0,t=r,l=a;break}if(p===l){d=!0,l=r,t=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===t){d=!0,t=a,l=r;break}if(p===l){d=!0,l=a,t=r;break}p=p.sibling}if(!d)throw Error(s(189))}}if(t.alternate!==l)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}var k=Object.assign,j=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case H:return"Profiler";case U:return"StrictMode";case fe:return"Suspense";case Ne:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case oe:return e.displayName||"Context";case pe:return(e._context.displayName||"Context")+".Consumer";case xe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:De(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return De(e(n))}catch{}}return null}var Ze=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Ee=[],de=-1;function w(e){return{current:e}}function L(e){0>de||(e.current=Ee[de],Ee[de]=null,de--)}function P(e,n){de++,Ee[de]=e.current,e.current=n}var D=w(null),I=w(null),Z=w(null),K=w(null);function Ie(e,n){switch(P(Z,n),P(I,e),P(D,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?eh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=eh(n),e=nh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(D),P(D,e)}function Ue(){L(D),L(I),L(Z)}function St(e){e.memoizedState!==null&&P(K,e);var n=D.current,t=nh(n,e.type);n!==t&&(P(I,e),P(D,t))}function Jl(e){I.current===e&&(L(D),L(I)),K.current===e&&(L(K),Di._currentValue=ie)}var La,Or;function pl(e){if(La===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);La=n&&n[1]||"",Or=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+La+e+Or}var Cr=!1;function _l(e,n){if(!e||Cr)return"";Cr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(C){var A=C}Reflect.construct(e,[],X)}else{try{X.call()}catch(C){A=C}e.call(X.prototype)}}else{try{throw Error()}catch(C){A=C}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=l.DetermineComponentFrameRoot(),d=a[0],p=a[1];if(d&&p){var S=d.split(`
`),M=p.split(`
`);for(r=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;if(l===S.length||r===M.length)for(l=S.length-1,r=M.length-1;1<=l&&0<=r&&S[l]!==M[r];)r--;for(;1<=l&&0<=r;l--,r--)if(S[l]!==M[r]){if(l!==1||r!==1)do if(l--,r--,0>r||S[l]!==M[r]){var G=`
`+S[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=r);break}}}finally{Cr=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?pl(t):""}function No(e,n){switch(e.tag){case 26:case 27:case 5:return pl(e.type);case 16:return pl("Lazy");case 13:return e.child!==n&&n!==null?pl("Suspense Fallback"):pl("Suspense");case 19:return pl("SuspenseList");case 0:case 15:return _l(e.type,!1);case 11:return _l(e.type.render,!1);case 1:return _l(e.type,!0);case 31:return pl("Activity");default:return""}}function er(e){try{var n="",t=null;do n+=No(e,t),t=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var zr=Object.prototype.hasOwnProperty,Ua=o.unstable_scheduleCallback,Ht=o.unstable_cancelCallback,Ha=o.unstable_shouldYield,Ki=o.unstable_requestPaint,Tn=o.unstable_now,Br=o.unstable_getCurrentPriorityLevel,Lr=o.unstable_ImmediatePriority,Ga=o.unstable_UserBlockingPriority,nr=o.unstable_NormalPriority,at=o.unstable_LowPriority,it=o.unstable_IdlePriority,gl=o.log,Ur=o.unstable_setDisableYieldValue,tr=null,pn=null;function Xn(e){if(typeof gl=="function"&&Ur(e),pn&&typeof pn.setStrictMode=="function")try{pn.setStrictMode(tr,e)}catch{}}var vn=Math.clz32?Math.clz32:vl,bl=Math.log,yl=Math.LN2;function vl(e){return e>>>=0,e===0?32:31-(bl(e)/yl|0)|0}var Mt=256,Dn=262144,$e=4194304;function xn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cn(e,n,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,a=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~a,l!==0?r=xn(l):(d&=p,d!==0?r=xn(d):t||(t=p&~e,t!==0&&(r=xn(t))))):(p=l&~a,p!==0?r=xn(p):d!==0?r=xn(d):t||(t=l&~e,t!==0&&(r=xn(t)))),r===0?0:n!==0&&n!==r&&(n&a)===0&&(a=r&-r,t=n&-n,a>=t||a===32&&(t&4194048)!==0)?n:r}function jn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ko(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Va(){var e=$e;return $e<<=1,($e&62914560)===0&&($e=4194304),e}function At(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gt(e,n,t,l,r,a){var d=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var p=e.entanglements,S=e.expirationTimes,M=e.hiddenUpdates;for(t=d&~t;0<t;){var G=31-vn(t),X=1<<G;p[G]=0,S[G]=-1;var A=M[G];if(A!==null)for(M[G]=null,G=0;G<A.length;G++){var C=A[G];C!==null&&(C.lane&=-536870913)}t&=~X}l!==0&&Ii(e,l,0),a!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=a&~(d&~n))}function Ii(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-vn(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Hr(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-vn(t),r=1<<l;r&n|e[l]&n&&(e[l]|=n),t&=~r}}function Fi(e,n){var t=n&-n;return t=(t&42)!==0?1:xl(t),(t&(e.suspendedLanes|n))!==0?0:t}function xl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function un(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:wh(e.type))}function Ya(e,n){var t=Y.p;try{return Y.p=e,n()}finally{Y.p=t}}var $n=Math.random().toString(36).slice(2),ln="__reactFiber$"+$n,rn="__reactProps$"+$n,st="__reactContainer$"+$n,jt="__reactEvents$"+$n,Gr="__reactListeners$"+$n,rr="__reactHandles$"+$n,Vr="__reactResources$"+$n,Bn="__reactMarker$"+$n;function Vt(e){delete e[ln],delete e[rn],delete e[jt],delete e[Gr],delete e[rr]}function Ln(e){var n=e[ln];if(n)return n;for(var t=e.parentNode;t;){if(n=t[st]||t[ln]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=oh(e);e!==null;){if(t=e[ln])return t;e=oh(e)}return n}e=t,t=e.parentNode}return null}function Kn(e){if(e=e[ln]||e[st]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ot(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Yt(e){var n=e[Vr];return n||(n=e[Vr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[Bn]=!0}var qt=new Set,he={};function Et(e,n){Sl(e,n),Sl(e+"Capture",n)}function Sl(e,n){for(he[e]=n,e=0;e<n.length;e++)qt.add(n[e])}var To=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qi={},Zi={};function ar(e){return zr.call(Zi,e)?!0:zr.call(Qi,e)?!1:To.test(e)?Zi[e]=!0:(Qi[e]=!0,!1)}function wt(e,n,t){if(ar(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Nt(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function In(e,n,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+l)}}function Un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xa(e,n,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,a=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(d){t=""+d,a.call(this,d)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $(e){if(!e._valueTracker){var n=qa(e)?"checked":"value";e._valueTracker=Xa(e,n,""+e[n])}}function ir(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=qa(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pi=/[\n"\\]/g;function gn(e){return e.replace(Pi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function sr(e,n,t,l,r,a,d,p){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Un(n)):e.value!==""+Un(n)&&(e.value=""+Un(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,d,Un(n)):t!=null?Rn(e,d,Un(t)):l!=null&&e.removeAttribute("value"),r==null&&a!=null&&(e.defaultChecked=!!a),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Un(p):e.removeAttribute("name")}function Wi(e,n,t,l,r,a,d,p){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),n!=null||t!=null){if(!(a!=="submit"&&a!=="reset"||n!=null)){$(e);return}t=t!=null?""+Un(t):"",n=n!=null?""+Un(n):t,p||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),$(e)}function Rn(e,n,t){n==="number"&&Je(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Xt(e,n,t,l){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Un(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Yr(e,n,t){if(n!=null&&(n=""+Un(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Un(t):""}function Sn(e,n,t,l){if(n==null){if(l!=null){if(t!=null)throw Error(s(92));if(Ze(l)){if(1<l.length)throw Error(s(93));l=l[0]}t=l}t==null&&(t=""),n=t}t=Un(n),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),$(e)}function ct(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ro=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ji(e,n,t){var l=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,t):typeof t!="number"||t===0||Ro.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function El(e,n,t){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&t[r]!==l&&Ji(e,r,l)}else for(var a in n)n.hasOwnProperty(a)&&Ji(e,a,n[a])}function $a(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var es=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(e){return qr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ut(){}var Ka=null;function Ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,On=null;function an(e){var n=Kn(e);if(n&&(e=n.stateNode)){var t=e[rn]||null;e:switch(e=n.stateNode,n.type){case"input":if(sr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var r=l[rn]||null;if(!r)throw Error(s(90));sr(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)l=t[n],l.form===e.form&&ir(l)}break e;case"textarea":Yr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Xt(e,!!t.multiple,n,!1)}}}var Xr=!1;function $t(e,n,t){if(Xr)return e(n,t);Xr=!0;try{var l=e(n);return l}finally{if(Xr=!1,(Nl!==null||On!==null)&&(Ys(),Nl&&(n=Nl,e=On,On=Nl=null,an(n),e)))for(n=0;n<e.length;n++)an(e[n])}}function kl(e,n){var t=e.stateNode;if(t===null)return null;var l=t[rn]||null;if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$r=!1;if(ft)try{var or={};Object.defineProperty(or,"passive",{get:function(){$r=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{$r=!1}var Ot=null,Kr=null,cr=null;function Ir(){if(cr)return cr;var e,n=Kr,t=n.length,l,r="value"in Ot?Ot.value:Ot.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var d=t-e;for(l=1;l<=d&&n[t-l]===r[a-l];l++);return cr=r.slice(e,1<l?1-l:void 0)}function Fr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Fa(){return!1}function Mn(e){function n(t,l,r,a,d){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ur:Fa,this.isPropagationStopped=Fa,this}return k(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),n}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qr=Mn(Kt),fr=k({},Kt,{view:0,detail:0}),Mo=Mn(fr),Qa,Za,dr,Zr=k({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(Qa=e.screenX-dr.screenX,Za=e.screenY-dr.screenY):Za=Qa=0,dr=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Za}}),ns=Mn(Zr),mr=k({},Zr,{dataTransfer:0}),Ao=Mn(mr),Do=k({},fr,{relatedTarget:0}),Pr=Mn(Do),jo=k({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),ts=Mn(jo),Oo=k({},Kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Co=Mn(Oo),zo=k({},Kt,{data:0}),ls=Mn(zo),Bo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rs={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rs[e])?!!n[e]:!1}function Wr(){return Tl}var Uo=k({},fr,{key:function(e){if(e.key){var n=Bo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wr,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ho=Mn(Uo),Go=k({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rl=Mn(Go),Jr=k({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wr}),as=Mn(Jr),Pa=k({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),is=Mn(Pa),Vo=k({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yo=Mn(Vo),m=k({},Kt,{newState:0,oldState:0}),g=Mn(m),x=[9,13,27,32],B=ft&&"CompositionEvent"in window,z=null;ft&&"documentMode"in document&&(z=document.documentMode);var te=ft&&"TextEvent"in window&&!z,ge=ft&&(!B||z&&8<z&&11>=z),Be=" ",en=!1;function Fn(e,n){switch(e){case"keyup":return x.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function It(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var je=!1;function Ft(e,n){switch(e){case"compositionend":return It(n);case"keypress":return n.which!==32?null:(en=!0,Be);case"textInput":return e=n.data,e===Be&&en?null:e;default:return null}}function Wa(e,n){if(je)return e==="compositionend"||!B&&Fn(e,n)?(e=Ir(),cr=Kr=Ot=null,je=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ge&&n.locale!=="ko"?null:n.data;default:return null}}var hr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hr[e.type]:n==="textarea"}function ea(e,n,t,l){Nl?On?On.push(l):On=[l]:Nl=l,n=Qs(n,"onChange"),0<n.length&&(t=new Qr("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Zt=null,Pt=null;function Ja(e){Fm(e,0)}function Ct(e){var n=ot(e);if(ir(n))return e}function ss(e,n){if(e==="change")return n}var ei=!1;if(ft){var qo;if(ft){var Xo="oninput"in document;if(!Xo){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),Xo=typeof pf.oninput=="function"}qo=Xo}else qo=!1;ei=qo&&(!document.documentMode||9<document.documentMode)}function _f(){Zt&&(Zt.detachEvent("onpropertychange",gf),Pt=Zt=null)}function gf(e){if(e.propertyName==="value"&&Ct(Pt)){var n=[];ea(n,Pt,e,Ia(e)),$t(Ja,n)}}function Yp(e,n,t){e==="focusin"?(_f(),Zt=n,Pt=t,Zt.attachEvent("onpropertychange",gf)):e==="focusout"&&_f()}function qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ct(Pt)}function Xp(e,n){if(e==="click")return Ct(n)}function $p(e,n){if(e==="input"||e==="change")return Ct(n)}function Kp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Kp;function ni(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!zr.call(n,r)||!Qn(e[r],n[r]))return!1}return!0}function bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yf(e,n){var t=bf(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bf(t)}}function vf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Je(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Je(e.document)}return n}function $o(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ip=ft&&"documentMode"in document&&11>=document.documentMode,na=null,Ko=null,ti=null,Io=!1;function Sf(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Io||na==null||na!==Je(l)||(l=na,"selectionStart"in l&&$o(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ti&&ni(ti,l)||(ti=l,l=Qs(Ko,"onSelect"),0<l.length&&(n=new Qr("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=na)))}function pr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ta={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},Fo={},Ef={};ft&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function _r(e){if(Fo[e])return Fo[e];if(!ta[e])return e;var n=ta[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ef)return Fo[e]=n[t];return e}var wf=_r("animationend"),Nf=_r("animationiteration"),kf=_r("animationstart"),Fp=_r("transitionrun"),Qp=_r("transitionstart"),Zp=_r("transitioncancel"),Tf=_r("transitionend"),Rf=new Map,Qo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qo.push("scrollEnd");function kt(e,n){Rf.set(e,n),Et(n,[e])}var os=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},dt=[],la=0,Zo=0;function cs(){for(var e=la,n=Zo=la=0;n<e;){var t=dt[n];dt[n++]=null;var l=dt[n];dt[n++]=null;var r=dt[n];dt[n++]=null;var a=dt[n];if(dt[n++]=null,l!==null&&r!==null){var d=l.pending;d===null?r.next=r:(r.next=d.next,d.next=r),l.pending=r}a!==0&&Mf(t,r,a)}}function us(e,n,t,l){dt[la++]=e,dt[la++]=n,dt[la++]=t,dt[la++]=l,Zo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Po(e,n,t,l){return us(e,n,t,l),fs(e)}function gr(e,n){return us(e,null,null,n),fs(e)}function Mf(e,n,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var r=!1,a=e.return;a!==null;)a.childLanes|=t,l=a.alternate,l!==null&&(l.childLanes|=t),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(r=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,r&&n!==null&&(r=31-vn(t),e=a.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=t|536870912),a):null}function fs(e){if(50<wi)throw wi=0,iu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ra={};function Pp(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,t,l){return new Pp(e,n,t,l)}function Wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,n){var t=e.alternate;return t===null?(t=Zn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Af(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ds(e,n,t,l,r,a){var d=0;if(l=e,typeof e=="function")Wo(e)&&(d=1);else if(typeof e=="string")d=tg(e,t,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=Zn(31,t,n,r),e.elementType=be,e.lanes=a,e;case le:return br(t.children,r,a,n);case U:d=8,r|=24;break;case H:return e=Zn(12,t,n,r|2),e.elementType=H,e.lanes=a,e;case fe:return e=Zn(13,t,n,r),e.elementType=fe,e.lanes=a,e;case Ne:return e=Zn(19,t,n,r),e.elementType=Ne,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:d=10;break e;case pe:d=9;break e;case xe:d=11;break e;case ee:d=14;break e;case W:d=16,l=null;break e}d=29,t=Error(s(130,e===null?"null":typeof e,"")),l=null}return n=Zn(d,t,n,r),n.elementType=e,n.type=l,n.lanes=a,n}function br(e,n,t,l){return e=Zn(7,e,l,n),e.lanes=t,e}function Jo(e,n,t){return e=Zn(6,e,null,n),e.lanes=t,e}function Df(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function ec(e,n,t){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var jf=new WeakMap;function mt(e,n){if(typeof e=="object"&&e!==null){var t=jf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:er(n)},jf.set(e,n),n)}return{value:e,source:n,stack:er(n)}}var aa=[],ia=0,ms=null,li=0,ht=[],pt=0,Ml=null,zt=1,Bt="";function Jt(e,n){aa[ia++]=li,aa[ia++]=ms,ms=e,li=n}function Of(e,n,t){ht[pt++]=zt,ht[pt++]=Bt,ht[pt++]=Ml,Ml=e;var l=zt;e=Bt;var r=32-vn(l)-1;l&=~(1<<r),t+=1;var a=32-vn(n)+r;if(30<a){var d=r-r%5;a=(l&(1<<d)-1).toString(32),l>>=d,r-=d,zt=1<<32-vn(n)+r|t<<r|l,Bt=a+e}else zt=1<<a|t<<r|l,Bt=e}function nc(e){e.return!==null&&(Jt(e,1),Of(e,1,0))}function tc(e){for(;e===ms;)ms=aa[--ia],aa[ia]=null,li=aa[--ia],aa[ia]=null;for(;e===Ml;)Ml=ht[--pt],ht[pt]=null,Bt=ht[--pt],ht[pt]=null,zt=ht[--pt],ht[pt]=null}function Cf(e,n){ht[pt++]=zt,ht[pt++]=Bt,ht[pt++]=Ml,zt=n.id,Bt=n.overflow,Ml=e}var En=null,Fe=null,Ae=!1,Al=null,_t=!1,lc=Error(s(519));function Dl(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ri(mt(n,e)),lc}function zf(e){var n=e.stateNode,t=e.type,l=e.memoizedProps;switch(n[ln]=e,n[rn]=l,t){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(t=0;t<ki.length;t++)Te(ki[t],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Wi(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Sn(n,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||l.suppressHydrationWarning===!0||Wm(n.textContent,t)?(l.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),l.onScroll!=null&&Te("scroll",n),l.onScrollEnd!=null&&Te("scrollend",n),l.onClick!=null&&(n.onclick=ut),n=!0):n=!1,n||Dl(e,!0)}function Bf(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:En=En.return}}function sa(e){if(e!==En)return!1;if(!Ae)return Bf(e),Ae=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||xu(e.type,e.memoizedProps)),t=!t),t&&Fe&&Dl(e),Bf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Fe=sh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Fe=sh(e)}else n===27?(n=Fe,$l(e.type)?(e=ku,ku=null,Fe=e):Fe=n):Fe=En?bt(e.stateNode.nextSibling):null;return!0}function yr(){Fe=En=null,Ae=!1}function rc(){var e=Al;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Al=null),e}function ri(e){Al===null?Al=[e]:Al.push(e)}var ac=w(null),vr=null,el=null;function jl(e,n,t){P(ac,n._currentValue),n._currentValue=t}function nl(e){e._currentValue=ac.current,L(ac)}function ic(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function sc(e,n,t,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var a=r.dependencies;if(a!==null){var d=r.child;a=a.firstContext;e:for(;a!==null;){var p=a;a=r;for(var S=0;S<n.length;S++)if(p.context===n[S]){a.lanes|=t,p=a.alternate,p!==null&&(p.lanes|=t),ic(a.return,t,e),l||(d=null);break e}a=p.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(s(341));d.lanes|=t,a=d.alternate,a!==null&&(a.lanes|=t),ic(d,t,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function oa(e,n,t,l){e=null;for(var r=n,a=!1;r!==null;){if(!a){if((r.flags&524288)!==0)a=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var p=r.type;Qn(r.pendingProps.value,d.value)||(e!==null?e.push(p):e=[p])}}else if(r===K.current){if(d=r.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Di):e=[Di])}r=r.return}e!==null&&sc(n,e,t,l),n.flags|=262144}function hs(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xr(e){vr=e,el=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Lf(vr,e)}function ps(e,n){return vr===null&&xr(e),Lf(e,n)}function Lf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},el===null){if(e===null)throw Error(s(308));el=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else el=el.next=n;return t}var Wp=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Jp=o.unstable_scheduleCallback,e_=o.unstable_NormalPriority,fn={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oc(){return{controller:new Wp,data:new Map,refCount:0}}function ai(e){e.refCount--,e.refCount===0&&Jp(e_,function(){e.controller.abort()})}var ii=null,cc=0,ca=0,ua=null;function n_(e,n){if(ii===null){var t=ii=[];cc=0,ca=du(),ua={status:"pending",value:void 0,then:function(l){t.push(l)}}}return cc++,n.then(Uf,Uf),n}function Uf(){if(--cc===0&&ii!==null){ua!==null&&(ua.status="fulfilled");var e=ii;ii=null,ca=0,ua=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function t_(e,n){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var Hf=O.S;O.S=function(e,n){Sm=Tn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n_(e,n),Hf!==null&&Hf(e,n)};var Sr=w(null);function uc(){var e=Sr.current;return e!==null?e:Ke.pooledCache}function _s(e,n){n===null?P(Sr,Sr.current):P(Sr,n.pool)}function Gf(){var e=uc();return e===null?null:{parent:fn._currentValue,pool:e}}var fa=Error(s(460)),fc=Error(s(474)),gs=Error(s(542)),bs={then:function(){}};function Vf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(ut,ut),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xf(e),e;default:if(typeof n.status=="string")n.then(ut,ut);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xf(e),e}throw wr=n,fa}}function Er(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(wr=t,fa):t}}var wr=null;function qf(){if(wr===null)throw Error(s(459));var e=wr;return wr=null,e}function Xf(e){if(e===fa||e===gs)throw Error(s(483))}var da=null,si=0;function ys(e){var n=si;return si+=1,da===null&&(da=[]),Yf(da,e,n)}function oi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vs(e,n){throw n.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $f(e){function n(T,N){if(e){var R=T.deletions;R===null?(T.deletions=[N],T.flags|=16):R.push(N)}}function t(T,N){if(!e)return null;for(;N!==null;)n(T,N),N=N.sibling;return null}function l(T){for(var N=new Map;T!==null;)T.key!==null?N.set(T.key,T):N.set(T.index,T),T=T.sibling;return N}function r(T,N){return T=Wt(T,N),T.index=0,T.sibling=null,T}function a(T,N,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<N?(T.flags|=67108866,N):R):(T.flags|=67108866,N)):(T.flags|=1048576,N)}function d(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function p(T,N,R,q){return N===null||N.tag!==6?(N=Jo(R,T.mode,q),N.return=T,N):(N=r(N,R),N.return=T,N)}function S(T,N,R,q){var ce=R.type;return ce===le?G(T,N,R.props.children,q,R.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===W&&Er(ce)===N.type)?(N=r(N,R.props),oi(N,R),N.return=T,N):(N=ds(R.type,R.key,R.props,null,T.mode,q),oi(N,R),N.return=T,N)}function M(T,N,R,q){return N===null||N.tag!==4||N.stateNode.containerInfo!==R.containerInfo||N.stateNode.implementation!==R.implementation?(N=ec(R,T.mode,q),N.return=T,N):(N=r(N,R.children||[]),N.return=T,N)}function G(T,N,R,q,ce){return N===null||N.tag!==7?(N=br(R,T.mode,q,ce),N.return=T,N):(N=r(N,R),N.return=T,N)}function X(T,N,R){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Jo(""+N,T.mode,R),N.return=T,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case F:return R=ds(N.type,N.key,N.props,null,T.mode,R),oi(R,N),R.return=T,R;case Q:return N=ec(N,T.mode,R),N.return=T,N;case W:return N=Er(N),X(T,N,R)}if(Ze(N)||ae(N))return N=br(N,T.mode,R,null),N.return=T,N;if(typeof N.then=="function")return X(T,ys(N),R);if(N.$$typeof===oe)return X(T,ps(T,N),R);vs(T,N)}return null}function A(T,N,R,q){var ce=N!==null?N.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ce!==null?null:p(T,N,""+R,q);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case F:return R.key===ce?S(T,N,R,q):null;case Q:return R.key===ce?M(T,N,R,q):null;case W:return R=Er(R),A(T,N,R,q)}if(Ze(R)||ae(R))return ce!==null?null:G(T,N,R,q,null);if(typeof R.then=="function")return A(T,N,ys(R),q);if(R.$$typeof===oe)return A(T,N,ps(T,R),q);vs(T,R)}return null}function C(T,N,R,q,ce){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return T=T.get(R)||null,p(N,T,""+q,ce);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case F:return T=T.get(q.key===null?R:q.key)||null,S(N,T,q,ce);case Q:return T=T.get(q.key===null?R:q.key)||null,M(N,T,q,ce);case W:return q=Er(q),C(T,N,R,q,ce)}if(Ze(q)||ae(q))return T=T.get(R)||null,G(N,T,q,ce,null);if(typeof q.then=="function")return C(T,N,R,ys(q),ce);if(q.$$typeof===oe)return C(T,N,R,ps(N,q),ce);vs(N,q)}return null}function re(T,N,R,q){for(var ce=null,Ce=null,se=N,we=N=0,Me=null;se!==null&&we<R.length;we++){se.index>we?(Me=se,se=null):Me=se.sibling;var ze=A(T,se,R[we],q);if(ze===null){se===null&&(se=Me);break}e&&se&&ze.alternate===null&&n(T,se),N=a(ze,N,we),Ce===null?ce=ze:Ce.sibling=ze,Ce=ze,se=Me}if(we===R.length)return t(T,se),Ae&&Jt(T,we),ce;if(se===null){for(;we<R.length;we++)se=X(T,R[we],q),se!==null&&(N=a(se,N,we),Ce===null?ce=se:Ce.sibling=se,Ce=se);return Ae&&Jt(T,we),ce}for(se=l(se);we<R.length;we++)Me=C(se,T,we,R[we],q),Me!==null&&(e&&Me.alternate!==null&&se.delete(Me.key===null?we:Me.key),N=a(Me,N,we),Ce===null?ce=Me:Ce.sibling=Me,Ce=Me);return e&&se.forEach(function(Zl){return n(T,Zl)}),Ae&&Jt(T,we),ce}function me(T,N,R,q){if(R==null)throw Error(s(151));for(var ce=null,Ce=null,se=N,we=N=0,Me=null,ze=R.next();se!==null&&!ze.done;we++,ze=R.next()){se.index>we?(Me=se,se=null):Me=se.sibling;var Zl=A(T,se,ze.value,q);if(Zl===null){se===null&&(se=Me);break}e&&se&&Zl.alternate===null&&n(T,se),N=a(Zl,N,we),Ce===null?ce=Zl:Ce.sibling=Zl,Ce=Zl,se=Me}if(ze.done)return t(T,se),Ae&&Jt(T,we),ce;if(se===null){for(;!ze.done;we++,ze=R.next())ze=X(T,ze.value,q),ze!==null&&(N=a(ze,N,we),Ce===null?ce=ze:Ce.sibling=ze,Ce=ze);return Ae&&Jt(T,we),ce}for(se=l(se);!ze.done;we++,ze=R.next())ze=C(se,T,we,ze.value,q),ze!==null&&(e&&ze.alternate!==null&&se.delete(ze.key===null?we:ze.key),N=a(ze,N,we),Ce===null?ce=ze:Ce.sibling=ze,Ce=ze);return e&&se.forEach(function(mg){return n(T,mg)}),Ae&&Jt(T,we),ce}function Xe(T,N,R,q){if(typeof R=="object"&&R!==null&&R.type===le&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case F:e:{for(var ce=R.key;N!==null;){if(N.key===ce){if(ce=R.type,ce===le){if(N.tag===7){t(T,N.sibling),q=r(N,R.props.children),q.return=T,T=q;break e}}else if(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===W&&Er(ce)===N.type){t(T,N.sibling),q=r(N,R.props),oi(q,R),q.return=T,T=q;break e}t(T,N);break}else n(T,N);N=N.sibling}R.type===le?(q=br(R.props.children,T.mode,q,R.key),q.return=T,T=q):(q=ds(R.type,R.key,R.props,null,T.mode,q),oi(q,R),q.return=T,T=q)}return d(T);case Q:e:{for(ce=R.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===R.containerInfo&&N.stateNode.implementation===R.implementation){t(T,N.sibling),q=r(N,R.children||[]),q.return=T,T=q;break e}else{t(T,N);break}else n(T,N);N=N.sibling}q=ec(R,T.mode,q),q.return=T,T=q}return d(T);case W:return R=Er(R),Xe(T,N,R,q)}if(Ze(R))return re(T,N,R,q);if(ae(R)){if(ce=ae(R),typeof ce!="function")throw Error(s(150));return R=ce.call(R),me(T,N,R,q)}if(typeof R.then=="function")return Xe(T,N,ys(R),q);if(R.$$typeof===oe)return Xe(T,N,ps(T,R),q);vs(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,N!==null&&N.tag===6?(t(T,N.sibling),q=r(N,R),q.return=T,T=q):(t(T,N),q=Jo(R,T.mode,q),q.return=T,T=q),d(T)):t(T,N)}return function(T,N,R,q){try{si=0;var ce=Xe(T,N,R,q);return da=null,ce}catch(se){if(se===fa||se===gs)throw se;var Ce=Zn(29,se,null,T.mode);return Ce.lanes=q,Ce.return=T,Ce}finally{}}}var Nr=$f(!0),Kf=$f(!1),Ol=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zl(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=fs(e),Mf(e,null,t),n}return us(e,l,n,t),fs(e)}function ci(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Hr(e,t)}}function hc(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var d={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};a===null?r=a=d:a=a.next=d,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var pc=!1;function ui(){if(pc){var e=ua;if(e!==null)throw e}}function fi(e,n,t,l){pc=!1;var r=e.updateQueue;Ol=!1;var a=r.firstBaseUpdate,d=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var S=p,M=S.next;S.next=null,d===null?a=M:d.next=M,d=S;var G=e.alternate;G!==null&&(G=G.updateQueue,p=G.lastBaseUpdate,p!==d&&(p===null?G.firstBaseUpdate=M:p.next=M,G.lastBaseUpdate=S))}if(a!==null){var X=r.baseState;d=0,G=M=S=null,p=a;do{var A=p.lane&-536870913,C=A!==p.lane;if(C?(Re&A)===A:(l&A)===A){A!==0&&A===ca&&(pc=!0),G!==null&&(G=G.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var re=e,me=p;A=n;var Xe=t;switch(me.tag){case 1:if(re=me.payload,typeof re=="function"){X=re.call(Xe,X,A);break e}X=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=me.payload,A=typeof re=="function"?re.call(Xe,X,A):re,A==null)break e;X=k({},X,A);break e;case 2:Ol=!0}}A=p.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=r.callbacks,C===null?r.callbacks=[A]:C.push(A))}else C={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},G===null?(M=G=C,S=X):G=G.next=C,d|=A;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;C=p,p=C.next,C.next=null,r.lastBaseUpdate=C,r.shared.pending=null}}while(!0);G===null&&(S=X),r.baseState=S,r.firstBaseUpdate=M,r.lastBaseUpdate=G,a===null&&(r.shared.lanes=0),Gl|=d,e.lanes=d,e.memoizedState=X}}function If(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Ff(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)If(t[e],n)}var ma=w(null),xs=w(0);function Qf(e,n){e=ul,P(xs,e),P(ma,n),ul=e|n.baseLanes}function _c(){P(xs,ul),P(ma,ma.current)}function gc(){ul=xs.current,L(ma),L(xs)}var Pn=w(null),gt=null;function Bl(e){var n=e.alternate;P(sn,sn.current&1),P(Pn,e),gt===null&&(n===null||ma.current!==null||n.memoizedState!==null)&&(gt=e)}function bc(e){P(sn,sn.current),P(Pn,e),gt===null&&(gt=e)}function Zf(e){e.tag===22?(P(sn,sn.current),P(Pn,e),gt===null&&(gt=e)):Ll()}function Ll(){P(sn,sn.current),P(Pn,Pn.current)}function Wn(e){L(Pn),gt===e&&(gt=null),L(sn)}var sn=w(0);function Ss(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||wu(t)||Nu(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var tl=0,Se=null,Ye=null,dn=null,Es=!1,ha=!1,kr=!1,ws=0,di=0,pa=null,l_=0;function nn(){throw Error(s(321))}function yc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Qn(e[t],n[t]))return!1;return!0}function vc(e,n,t,l,r,a){return tl=a,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Od:zc,kr=!1,a=t(l,r),kr=!1,ha&&(a=Wf(n,t,l,r)),Pf(e),a}function Pf(e){O.H=pi;var n=Ye!==null&&Ye.next!==null;if(tl=0,dn=Ye=Se=null,Es=!1,di=0,pa=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&hs(e)&&(mn=!0))}function Wf(e,n,t,l){Se=e;var r=0;do{if(ha&&(pa=null),di=0,ha=!1,25<=r)throw Error(s(301));if(r+=1,dn=Ye=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}O.H=Cd,a=n(t,l)}while(ha);return a}function r_(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?mi(n):n,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(Se.flags|=1024),n}function xc(){var e=ws!==0;return ws=0,e}function Sc(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Ec(e){if(Es){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Es=!1}tl=0,dn=Ye=Se=null,ha=!1,di=ws=0,pa=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Se.memoizedState=dn=e:dn=dn.next=e,dn}function on(){if(Ye===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var n=dn===null?Se.memoizedState:dn.next;if(n!==null)dn=n,Ye=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},dn===null?Se.memoizedState=dn=e:dn=dn.next=e}return dn}function Ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mi(e){var n=di;return di+=1,pa===null&&(pa=[]),e=Yf(pa,e,n),n=Se,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Od:zc),e}function ks(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mi(e);if(e.$$typeof===oe)return wn(e)}throw Error(s(438,String(e)))}function wc(e){var n=null,t=Se.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ns(),Se.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),l=0;l<e;l++)t[l]=_e;return n.index++,t}function ll(e,n){return typeof n=="function"?n(e):n}function Ts(e){var n=on();return Nc(n,Ye,e)}function Nc(e,n,t){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var r=e.baseQueue,a=l.pending;if(a!==null){if(r!==null){var d=r.next;r.next=a.next,a.next=d}n.baseQueue=r=a,l.pending=null}if(a=e.baseState,r===null)e.memoizedState=a;else{n=r.next;var p=d=null,S=null,M=n,G=!1;do{var X=M.lane&-536870913;if(X!==M.lane?(Re&X)===X:(tl&X)===X){var A=M.revertLane;if(A===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),X===ca&&(G=!0);else if((tl&A)===A){M=M.next,A===ca&&(G=!0);continue}else X={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(p=S=X,d=a):S=S.next=X,Se.lanes|=A,Gl|=A;X=M.action,kr&&t(a,X),a=M.hasEagerState?M.eagerState:t(a,X)}else A={lane:X,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(p=S=A,d=a):S=S.next=A,Se.lanes|=X,Gl|=X;M=M.next}while(M!==null&&M!==n);if(S===null?d=a:S.next=p,!Qn(a,e.memoizedState)&&(mn=!0,G&&(t=ua,t!==null)))throw t;e.memoizedState=a,e.baseState=d,e.baseQueue=S,l.lastRenderedState=a}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function kc(e){var n=on(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var l=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var d=r=r.next;do a=e(a,d.action),d=d.next;while(d!==r);Qn(a,n.memoizedState)||(mn=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,l]}function Jf(e,n,t){var l=Se,r=on(),a=Ae;if(a){if(t===void 0)throw Error(s(407));t=t()}else t=n();var d=!Qn((Ye||r).memoizedState,t);if(d&&(r.memoizedState=t,mn=!0),r=r.queue,Mc(td.bind(null,l,r,e),[e]),r.getSnapshot!==n||d||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,_a(9,{destroy:void 0},nd.bind(null,l,r,t,n),null),Ke===null)throw Error(s(349));a||(tl&127)!==0||ed(l,n,t)}return t}function ed(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Se.updateQueue,n===null?(n=Ns(),Se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function nd(e,n,t,l){n.value=t,n.getSnapshot=l,ld(n)&&rd(e)}function td(e,n,t){return t(function(){ld(n)&&rd(e)})}function ld(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Qn(e,t)}catch{return!0}}function rd(e){var n=gr(e,2);n!==null&&qn(n,e,2)}function Tc(e){var n=Cn();if(typeof e=="function"){var t=e;if(e=t(),kr){Xn(!0);try{t()}finally{Xn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:e},n}function ad(e,n,t,l){return e.baseState=t,Nc(e,Ye,typeof l=="function"?l:ll)}function a_(e,n,t,l,r){if(As(e))throw Error(s(485));if(e=n.action,e!==null){var a={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){a.listeners.push(d)}};O.T!==null?t(!0):a.isTransition=!1,l(a),t=n.pending,t===null?(a.next=n.pending=a,id(n,a)):(a.next=t.next,n.pending=t.next=a)}}function id(e,n){var t=n.action,l=n.payload,r=e.state;if(n.isTransition){var a=O.T,d={};O.T=d;try{var p=t(r,l),S=O.S;S!==null&&S(d,p),sd(e,n,p)}catch(M){Rc(e,n,M)}finally{a!==null&&d.types!==null&&(a.types=d.types),O.T=a}}else try{a=t(r,l),sd(e,n,a)}catch(M){Rc(e,n,M)}}function sd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){od(e,n,l)},function(l){return Rc(e,n,l)}):od(e,n,t)}function od(e,n,t){n.status="fulfilled",n.value=t,cd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,id(e,t)))}function Rc(e,n,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=t,cd(n),n=n.next;while(n!==l)}e.action=null}function cd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ud(e,n){return n}function fd(e,n){if(Ae){var t=Ke.formState;if(t!==null){e:{var l=Se;if(Ae){if(Fe){n:{for(var r=Fe,a=_t;r.nodeType!==8;){if(!a){r=null;break n}if(r=bt(r.nextSibling),r===null){r=null;break n}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){Fe=bt(r.nextSibling),l=r.data==="F!";break e}}Dl(l)}l=!1}l&&(n=t[0])}}return t=Cn(),t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:n},t.queue=l,t=Ad.bind(null,Se,l),l.dispatch=t,l=Tc(!1),a=Cc.bind(null,Se,!1,l.queue),l=Cn(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,t=a_.bind(null,Se,r,a,t),r.dispatch=t,l.memoizedState=e,[n,t,!1]}function dd(e){var n=on();return md(n,Ye,e)}function md(e,n,t){if(n=Nc(e,n,ud)[0],e=Ts(ll)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=mi(n)}catch(d){throw d===fa?gs:d}else l=n;n=on();var r=n.queue,a=r.dispatch;return t!==n.memoizedState&&(Se.flags|=2048,_a(9,{destroy:void 0},i_.bind(null,r,t),null)),[l,a,e]}function i_(e,n){e.action=n}function hd(e){var n=on(),t=Ye;if(t!==null)return md(n,t,e);on(),n=n.memoizedState,t=on();var l=t.queue.dispatch;return t.memoizedState=e,[n,l,!1]}function _a(e,n,t,l){return e={tag:e,create:t,deps:l,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Ns(),Se.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e),e}function pd(){return on().memoizedState}function Rs(e,n,t,l){var r=Cn();Se.flags|=e,r.memoizedState=_a(1|n,{destroy:void 0},t,l===void 0?null:l)}function Ms(e,n,t,l){var r=on();l=l===void 0?null:l;var a=r.memoizedState.inst;Ye!==null&&l!==null&&yc(l,Ye.memoizedState.deps)?r.memoizedState=_a(n,a,t,l):(Se.flags|=e,r.memoizedState=_a(1|n,a,t,l))}function _d(e,n){Rs(8390656,8,e,n)}function Mc(e,n){Ms(2048,8,e,n)}function s_(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Ns(),Se.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function gd(e){var n=on().memoizedState;return s_({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function bd(e,n){return Ms(4,2,e,n)}function yd(e,n){return Ms(4,4,e,n)}function vd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xd(e,n,t){t=t!=null?t.concat([e]):null,Ms(4,4,vd.bind(null,n,e),t)}function Ac(){}function Sd(e,n){var t=on();n=n===void 0?null:n;var l=t.memoizedState;return n!==null&&yc(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function Ed(e,n){var t=on();n=n===void 0?null:n;var l=t.memoizedState;if(n!==null&&yc(n,l[1]))return l[0];if(l=e(),kr){Xn(!0);try{e()}finally{Xn(!1)}}return t.memoizedState=[l,n],l}function Dc(e,n,t){return t===void 0||(tl&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=wm(),Se.lanes|=e,Gl|=e,t)}function wd(e,n,t,l){return Qn(t,n)?t:ma.current!==null?(e=Dc(e,t,l),Qn(e,n)||(mn=!0),e):(tl&42)===0||(tl&1073741824)!==0&&(Re&261930)===0?(mn=!0,e.memoizedState=t):(e=wm(),Se.lanes|=e,Gl|=e,n)}function Nd(e,n,t,l,r){var a=Y.p;Y.p=a!==0&&8>a?a:8;var d=O.T,p={};O.T=p,Cc(e,!1,n,t);try{var S=r(),M=O.S;if(M!==null&&M(p,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var G=t_(S,l);hi(e,n,G,nt(e))}else hi(e,n,l,nt(e))}catch(X){hi(e,n,{then:function(){},status:"rejected",reason:X},nt())}finally{Y.p=a,d!==null&&p.types!==null&&(d.types=p.types),O.T=d}}function o_(){}function jc(e,n,t,l){if(e.tag!==5)throw Error(s(476));var r=kd(e).queue;Nd(e,r,n,ie,t===null?o_:function(){return Td(e),t(l)})}function kd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:ie},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Td(e){var n=kd(e);n.next===null&&(n=e.alternate.memoizedState),hi(e,n.next.queue,{},nt())}function Oc(){return wn(Di)}function Rd(){return on().memoizedState}function Md(){return on().memoizedState}function c_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=nt();e=Cl(t);var l=zl(n,e,t);l!==null&&(qn(l,n,t),ci(l,n,t)),n={cache:oc()},e.payload=n;return}n=n.return}}function u_(e,n,t){var l=nt();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},As(e)?Dd(n,t):(t=Po(e,n,t,l),t!==null&&(qn(t,e,l),jd(t,n,l)))}function Ad(e,n,t){var l=nt();hi(e,n,t,l)}function hi(e,n,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(As(e))Dd(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var d=n.lastRenderedState,p=a(d,t);if(r.hasEagerState=!0,r.eagerState=p,Qn(p,d))return us(e,n,r,0),Ke===null&&cs(),!1}catch{}finally{}if(t=Po(e,n,r,l),t!==null)return qn(t,e,l),jd(t,n,l),!0}return!1}function Cc(e,n,t,l){if(l={lane:2,revertLane:du(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},As(e)){if(n)throw Error(s(479))}else n=Po(e,t,l,2),n!==null&&qn(n,e,2)}function As(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Dd(e,n){ha=Es=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function jd(e,n,t){if((t&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Hr(e,t)}}var pi={readContext:wn,use:ks,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};pi.useEffectEvent=nn;var Od={readContext:wn,use:ks,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:_d,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Rs(4194308,4,vd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Rs(4194308,4,e,n)},useInsertionEffect:function(e,n){Rs(4,2,e,n)},useMemo:function(e,n){var t=Cn();n=n===void 0?null:n;var l=e();if(kr){Xn(!0);try{e()}finally{Xn(!1)}}return t.memoizedState=[l,n],l},useReducer:function(e,n,t){var l=Cn();if(t!==void 0){var r=t(n);if(kr){Xn(!0);try{t(n)}finally{Xn(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=u_.bind(null,Se,e),[l.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:function(e){e=Tc(e);var n=e.queue,t=Ad.bind(null,Se,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Ac,useDeferredValue:function(e,n){var t=Cn();return Dc(t,e,n)},useTransition:function(){var e=Tc(!1);return e=Nd.bind(null,Se,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var l=Se,r=Cn();if(Ae){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ke===null)throw Error(s(349));(Re&127)!==0||ed(l,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,_d(td.bind(null,l,a,e),[e]),l.flags|=2048,_a(9,{destroy:void 0},nd.bind(null,l,a,t,n),null),t},useId:function(){var e=Cn(),n=Ke.identifierPrefix;if(Ae){var t=Bt,l=zt;t=(l&~(1<<32-vn(l)-1)).toString(32)+t,n="_"+n+"R_"+t,t=ws++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=l_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Oc,useFormState:fd,useActionState:fd,useOptimistic:function(e){var n=Cn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Cc.bind(null,Se,!0,t),t.dispatch=n,[e,n]},useMemoCache:wc,useCacheRefresh:function(){return Cn().memoizedState=c_.bind(null,Se)},useEffectEvent:function(e){var n=Cn(),t={impl:e};return n.memoizedState=t,function(){if((Le&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}},zc={readContext:wn,use:ks,useCallback:Sd,useContext:wn,useEffect:Mc,useImperativeHandle:xd,useInsertionEffect:bd,useLayoutEffect:yd,useMemo:Ed,useReducer:Ts,useRef:pd,useState:function(){return Ts(ll)},useDebugValue:Ac,useDeferredValue:function(e,n){var t=on();return wd(t,Ye.memoizedState,e,n)},useTransition:function(){var e=Ts(ll)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mi(e),n]},useSyncExternalStore:Jf,useId:Rd,useHostTransitionStatus:Oc,useFormState:dd,useActionState:dd,useOptimistic:function(e,n){var t=on();return ad(t,Ye,e,n)},useMemoCache:wc,useCacheRefresh:Md};zc.useEffectEvent=gd;var Cd={readContext:wn,use:ks,useCallback:Sd,useContext:wn,useEffect:Mc,useImperativeHandle:xd,useInsertionEffect:bd,useLayoutEffect:yd,useMemo:Ed,useReducer:kc,useRef:pd,useState:function(){return kc(ll)},useDebugValue:Ac,useDeferredValue:function(e,n){var t=on();return Ye===null?Dc(t,e,n):wd(t,Ye.memoizedState,e,n)},useTransition:function(){var e=kc(ll)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mi(e),n]},useSyncExternalStore:Jf,useId:Rd,useHostTransitionStatus:Oc,useFormState:hd,useActionState:hd,useOptimistic:function(e,n){var t=on();return Ye!==null?ad(t,Ye,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:wc,useCacheRefresh:Md};Cd.useEffectEvent=gd;function Bc(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:k({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Lc={enqueueSetState:function(e,n,t){e=e._reactInternals;var l=nt(),r=Cl(l);r.payload=n,t!=null&&(r.callback=t),n=zl(e,r,l),n!==null&&(qn(n,e,l),ci(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=nt(),r=Cl(l);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=zl(e,r,l),n!==null&&(qn(n,e,l),ci(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=nt(),l=Cl(t);l.tag=2,n!=null&&(l.callback=n),n=zl(e,l,t),n!==null&&(qn(n,e,t),ci(n,e,t))}};function zd(e,n,t,l,r,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,d):n.prototype&&n.prototype.isPureReactComponent?!ni(t,l)||!ni(r,a):!0}function Bd(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&Lc.enqueueReplaceState(n,n.state,null)}function Tr(e,n){var t=n;if("ref"in n){t={};for(var l in n)l!=="ref"&&(t[l]=n[l])}if(e=e.defaultProps){t===n&&(t=k({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function Ld(e){os(e)}function Ud(e){console.error(e)}function Hd(e){os(e)}function Ds(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Gd(e,n,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Uc(e,n,t){return t=Cl(t),t.tag=3,t.payload={element:null},t.callback=function(){Ds(e,n)},t}function Vd(e){return e=Cl(e),e.tag=3,e}function Yd(e,n,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var a=l.value;e.payload=function(){return r(a)},e.callback=function(){Gd(n,t,l)}}var d=t.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Gd(n,t,l),typeof r!="function"&&(Vl===null?Vl=new Set([this]):Vl.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function f_(e,n,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=t.alternate,n!==null&&oa(n,t,r,!0),t=Pn.current,t!==null){switch(t.tag){case 31:case 13:return gt===null?qs():t.alternate===null&&tn===0&&(tn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===bs?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([l]):n.add(l),cu(e,l,r)),!1;case 22:return t.flags|=65536,l===bs?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([l]):t.add(l)),cu(e,l,r)),!1}throw Error(s(435,t.tag))}return cu(e,l,r),qs(),!1}if(Ae)return n=Pn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==lc&&(e=Error(s(422),{cause:l}),ri(mt(e,t)))):(l!==lc&&(n=Error(s(423),{cause:l}),ri(mt(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=mt(l,t),r=Uc(e.stateNode,l,r),hc(e,r),tn!==4&&(tn=2)),!1;var a=Error(s(520),{cause:l});if(a=mt(a,t),Ei===null?Ei=[a]:Ei.push(a),tn!==4&&(tn=2),n===null)return!0;l=mt(l,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=Uc(t.stateNode,l,e),hc(t,e),!1;case 1:if(n=t.type,a=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Vl===null||!Vl.has(a))))return t.flags|=65536,r&=-r,t.lanes|=r,r=Vd(r),Yd(r,e,t,l),hc(t,r),!1}t=t.return}while(t!==null);return!1}var Hc=Error(s(461)),mn=!1;function Nn(e,n,t,l){n.child=e===null?Kf(n,null,t,l):Nr(n,e.child,t,l)}function qd(e,n,t,l,r){t=t.render;var a=n.ref;if("ref"in l){var d={};for(var p in l)p!=="ref"&&(d[p]=l[p])}else d=l;return xr(n),l=vc(e,n,t,d,a,r),p=xc(),e!==null&&!mn?(Sc(e,n,r),rl(e,n,r)):(Ae&&p&&nc(n),n.flags|=1,Nn(e,n,l,r),n.child)}function Xd(e,n,t,l,r){if(e===null){var a=t.type;return typeof a=="function"&&!Wo(a)&&a.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=a,$d(e,n,a,l,r)):(e=ds(t.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!Ic(e,r)){var d=a.memoizedProps;if(t=t.compare,t=t!==null?t:ni,t(d,l)&&e.ref===n.ref)return rl(e,n,r)}return n.flags|=1,e=Wt(a,l),e.ref=n.ref,e.return=n,n.child=e}function $d(e,n,t,l,r){if(e!==null){var a=e.memoizedProps;if(ni(a,l)&&e.ref===n.ref)if(mn=!1,n.pendingProps=l=a,Ic(e,r))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,rl(e,n,r)}return Gc(e,n,t,l,r)}function Kd(e,n,t,l){var r=l.children,a=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(a=a!==null?a.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~a}else l=0,n.child=null;return Id(e,n,a,t,l)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&_s(n,a!==null?a.cachePool:null),a!==null?Qf(n,a):_c(),Zf(n);else return l=n.lanes=536870912,Id(e,n,a!==null?a.baseLanes|t:t,t,l)}else a!==null?(_s(n,a.cachePool),Qf(n,a),Ll(),n.memoizedState=null):(e!==null&&_s(n,null),_c(),Ll());return Nn(e,n,r,t),n.child}function _i(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Id(e,n,t,l,r){var a=uc();return a=a===null?null:{parent:fn._currentValue,pool:a},n.memoizedState={baseLanes:t,cachePool:a},e!==null&&_s(n,null),_c(),Zf(n),e!==null&&oa(e,n,l,!0),n.childLanes=r,null}function js(e,n){return n=Cs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Fd(e,n,t){return Nr(n,e.child,null,t),e=js(n,n.pendingProps),e.flags|=2,Wn(n),n.memoizedState=null,e}function d_(e,n,t){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(l.mode==="hidden")return e=js(n,l),n.lanes=536870912,_i(null,e);if(bc(n),(e=Fe)?(e=ih(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ml!==null?{id:zt,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},t=Df(e),t.return=n,n.child=t,En=n,Fe=null)):e=null,e===null)throw Dl(n);return n.lanes=536870912,null}return js(n,l)}var a=e.memoizedState;if(a!==null){var d=a.dehydrated;if(bc(n),r)if(n.flags&256)n.flags&=-257,n=Fd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||oa(e,n,t,!1),r=(t&e.childLanes)!==0,mn||r){if(l=Ke,l!==null&&(d=Fi(l,t),d!==0&&d!==a.retryLane))throw a.retryLane=d,gr(e,d),qn(l,e,d),Hc;qs(),n=Fd(e,n,t)}else e=a.treeContext,Fe=bt(d.nextSibling),En=n,Ae=!0,Al=null,_t=!1,e!==null&&Cf(n,e),n=js(n,l),n.flags|=4096;return n}return e=Wt(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Os(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Gc(e,n,t,l,r){return xr(n),t=vc(e,n,t,l,void 0,r),l=xc(),e!==null&&!mn?(Sc(e,n,r),rl(e,n,r)):(Ae&&l&&nc(n),n.flags|=1,Nn(e,n,t,r),n.child)}function Qd(e,n,t,l,r,a){return xr(n),n.updateQueue=null,t=Wf(n,l,t,r),Pf(e),l=xc(),e!==null&&!mn?(Sc(e,n,a),rl(e,n,a)):(Ae&&l&&nc(n),n.flags|=1,Nn(e,n,t,a),n.child)}function Zd(e,n,t,l,r){if(xr(n),n.stateNode===null){var a=ra,d=t.contextType;typeof d=="object"&&d!==null&&(a=wn(d)),a=new t(l,a),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Lc,n.stateNode=a,a._reactInternals=n,a=n.stateNode,a.props=l,a.state=n.memoizedState,a.refs={},dc(n),d=t.contextType,a.context=typeof d=="object"&&d!==null?wn(d):ra,a.state=n.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Bc(n,t,d,l),a.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(d=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),d!==a.state&&Lc.enqueueReplaceState(a,a.state,null),fi(n,l,a,r),ui(),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){a=n.stateNode;var p=n.memoizedProps,S=Tr(t,p);a.props=S;var M=a.context,G=t.contextType;d=ra,typeof G=="object"&&G!==null&&(d=wn(G));var X=t.getDerivedStateFromProps;G=typeof X=="function"||typeof a.getSnapshotBeforeUpdate=="function",p=n.pendingProps!==p,G||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(p||M!==d)&&Bd(n,a,l,d),Ol=!1;var A=n.memoizedState;a.state=A,fi(n,l,a,r),ui(),M=n.memoizedState,p||A!==M||Ol?(typeof X=="function"&&(Bc(n,t,X,l),M=n.memoizedState),(S=Ol||zd(n,t,S,l,A,M,d))?(G||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=M),a.props=l,a.state=M,a.context=d,l=S):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{a=n.stateNode,mc(e,n),d=n.memoizedProps,G=Tr(t,d),a.props=G,X=n.pendingProps,A=a.context,M=t.contextType,S=ra,typeof M=="object"&&M!==null&&(S=wn(M)),p=t.getDerivedStateFromProps,(M=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==X||A!==S)&&Bd(n,a,l,S),Ol=!1,A=n.memoizedState,a.state=A,fi(n,l,a,r),ui();var C=n.memoizedState;d!==X||A!==C||Ol||e!==null&&e.dependencies!==null&&hs(e.dependencies)?(typeof p=="function"&&(Bc(n,t,p,l),C=n.memoizedState),(G=Ol||zd(n,t,G,l,A,C,S)||e!==null&&e.dependencies!==null&&hs(e.dependencies))?(M||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,C,S),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,C,S)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=C),a.props=l,a.state=C,a.context=S,l=G):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),l=!1)}return a=l,Os(e,n),l=(n.flags&128)!==0,a||l?(a=n.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:a.render(),n.flags|=1,e!==null&&l?(n.child=Nr(n,e.child,null,r),n.child=Nr(n,null,t,r)):Nn(e,n,t,r),n.memoizedState=a.state,e=n.child):e=rl(e,n,r),e}function Pd(e,n,t,l){return yr(),n.flags|=256,Nn(e,n,t,l),n.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yc(e){return{baseLanes:e,cachePool:Gf()}}function qc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=et),e}function Wd(e,n,t){var l=n.pendingProps,r=!1,a=(n.flags&128)!==0,d;if((d=a)||(d=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),d&&(r=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(r?Bl(n):Ll(),(e=Fe)?(e=ih(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ml!==null?{id:zt,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},t=Df(e),t.return=n,n.child=t,En=n,Fe=null)):e=null,e===null)throw Dl(n);return Nu(e)?n.lanes=32:n.lanes=536870912,null}var p=l.children;return l=l.fallback,r?(Ll(),r=n.mode,p=Cs({mode:"hidden",children:p},r),l=br(l,r,t,null),p.return=n,l.return=n,p.sibling=l,n.child=p,l=n.child,l.memoizedState=Yc(t),l.childLanes=qc(e,d,t),n.memoizedState=Vc,_i(null,l)):(Bl(n),Xc(n,p))}var S=e.memoizedState;if(S!==null&&(p=S.dehydrated,p!==null)){if(a)n.flags&256?(Bl(n),n.flags&=-257,n=$c(e,n,t)):n.memoizedState!==null?(Ll(),n.child=e.child,n.flags|=128,n=null):(Ll(),p=l.fallback,r=n.mode,l=Cs({mode:"visible",children:l.children},r),p=br(p,r,t,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,Nr(n,e.child,null,t),l=n.child,l.memoizedState=Yc(t),l.childLanes=qc(e,d,t),n.memoizedState=Vc,n=_i(null,l));else if(Bl(n),Nu(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var M=d.dgst;d=M,l=Error(s(419)),l.stack="",l.digest=d,ri({value:l,source:null,stack:null}),n=$c(e,n,t)}else if(mn||oa(e,n,t,!1),d=(t&e.childLanes)!==0,mn||d){if(d=Ke,d!==null&&(l=Fi(d,t),l!==0&&l!==S.retryLane))throw S.retryLane=l,gr(e,l),qn(d,e,l),Hc;wu(p)||qs(),n=$c(e,n,t)}else wu(p)?(n.flags|=192,n.child=e.child,n=null):(e=S.treeContext,Fe=bt(p.nextSibling),En=n,Ae=!0,Al=null,_t=!1,e!==null&&Cf(n,e),n=Xc(n,l.children),n.flags|=4096);return n}return r?(Ll(),p=l.fallback,r=n.mode,S=e.child,M=S.sibling,l=Wt(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,M!==null?p=Wt(M,p):(p=br(p,r,t,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,_i(null,l),l=n.child,p=e.child.memoizedState,p===null?p=Yc(t):(r=p.cachePool,r!==null?(S=fn._currentValue,r=r.parent!==S?{parent:S,pool:S}:r):r=Gf(),p={baseLanes:p.baseLanes|t,cachePool:r}),l.memoizedState=p,l.childLanes=qc(e,d,t),n.memoizedState=Vc,_i(e.child,l)):(Bl(n),t=e.child,e=t.sibling,t=Wt(t,{mode:"visible",children:l.children}),t.return=n,t.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=t,n.memoizedState=null,t)}function Xc(e,n){return n=Cs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cs(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function $c(e,n,t){return Nr(n,e.child,null,t),e=Xc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jd(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),ic(e.return,n,t)}function Kc(e,n,t,l,r,a){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:a}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=t,d.tailMode=r,d.treeForkCount=a)}function em(e,n,t){var l=n.pendingProps,r=l.revealOrder,a=l.tail;l=l.children;var d=sn.current,p=(d&2)!==0;if(p?(d=d&1|2,n.flags|=128):d&=1,P(sn,d),Nn(e,n,l,t),l=Ae?li:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,t,n);else if(e.tag===19)Jd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Ss(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Kc(n,!1,r,t,a,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ss(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Kc(n,!0,t,null,a,l);break;case"together":Kc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function rl(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(oa(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=Wt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ic(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hs(e)))}function m_(e,n,t){switch(n.tag){case 3:Ie(n,n.stateNode.containerInfo),jl(n,fn,e.memoizedState.cache),yr();break;case 27:case 5:St(n);break;case 4:Ie(n,n.stateNode.containerInfo);break;case 10:jl(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bc(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Bl(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Wd(e,n,t):(Bl(n),e=rl(e,n,t),e!==null?e.sibling:null);Bl(n);break;case 19:var r=(e.flags&128)!==0;if(l=(t&n.childLanes)!==0,l||(oa(e,n,t,!1),l=(t&n.childLanes)!==0),r){if(l)return em(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),P(sn,sn.current),l)break;return null;case 22:return n.lanes=0,Kd(e,n,t,n.pendingProps);case 24:jl(n,fn,e.memoizedState.cache)}return rl(e,n,t)}function nm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Ic(e,t)&&(n.flags&128)===0)return mn=!1,m_(e,n,t);mn=(e.flags&131072)!==0}else mn=!1,Ae&&(n.flags&1048576)!==0&&Of(n,li,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=Er(n.elementType),n.type=e,typeof e=="function")Wo(e)?(l=Tr(e,l),n.tag=1,n=Zd(null,n,e,l,t)):(n.tag=0,n=Gc(null,n,e,l,t));else{if(e!=null){var r=e.$$typeof;if(r===xe){n.tag=11,n=qd(null,n,e,l,t);break e}else if(r===ee){n.tag=14,n=Xd(null,n,e,l,t);break e}}throw n=De(e)||e,Error(s(306,n,""))}}return n;case 0:return Gc(e,n,n.type,n.pendingProps,t);case 1:return l=n.type,r=Tr(l,n.pendingProps),Zd(e,n,l,r,t);case 3:e:{if(Ie(n,n.stateNode.containerInfo),e===null)throw Error(s(387));l=n.pendingProps;var a=n.memoizedState;r=a.element,mc(e,n),fi(n,l,null,t);var d=n.memoizedState;if(l=d.cache,jl(n,fn,l),l!==a.cache&&sc(n,[fn],t,!0),ui(),l=d.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){n=Pd(e,n,l,t);break e}else if(l!==r){r=mt(Error(s(424)),n),ri(r),n=Pd(e,n,l,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=bt(e.firstChild),En=n,Ae=!0,Al=null,_t=!0,t=Kf(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(yr(),l===r){n=rl(e,n,t);break e}Nn(e,n,l,t)}n=n.child}return n;case 26:return Os(e,n),e===null?(t=dh(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ae||(t=n.type,e=n.pendingProps,l=Zs(Z.current).createElement(t),l[ln]=n,l[rn]=e,kn(l,t,e),Pe(l),n.stateNode=l):n.memoizedState=dh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return St(n),e===null&&Ae&&(l=n.stateNode=ch(n.type,n.pendingProps,Z.current),En=n,_t=!0,r=Fe,$l(n.type)?(ku=r,Fe=bt(l.firstChild)):Fe=r),Nn(e,n,n.pendingProps.children,t),Os(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((r=l=Fe)&&(l=q_(l,n.type,n.pendingProps,_t),l!==null?(n.stateNode=l,En=n,Fe=bt(l.firstChild),_t=!1,r=!0):r=!1),r||Dl(n)),St(n),r=n.type,a=n.pendingProps,d=e!==null?e.memoizedProps:null,l=a.children,xu(r,a)?l=null:d!==null&&xu(r,d)&&(n.flags|=32),n.memoizedState!==null&&(r=vc(e,n,r_,null,null,t),Di._currentValue=r),Os(e,n),Nn(e,n,l,t),n.child;case 6:return e===null&&Ae&&((e=t=Fe)&&(t=X_(t,n.pendingProps,_t),t!==null?(n.stateNode=t,En=n,Fe=null,e=!0):e=!1),e||Dl(n)),null;case 13:return Wd(e,n,t);case 4:return Ie(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Nr(n,null,l,t):Nn(e,n,l,t),n.child;case 11:return qd(e,n,n.type,n.pendingProps,t);case 7:return Nn(e,n,n.pendingProps,t),n.child;case 8:return Nn(e,n,n.pendingProps.children,t),n.child;case 12:return Nn(e,n,n.pendingProps.children,t),n.child;case 10:return l=n.pendingProps,jl(n,n.type,l.value),Nn(e,n,l.children,t),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,xr(n),r=wn(r),l=l(r),n.flags|=1,Nn(e,n,l,t),n.child;case 14:return Xd(e,n,n.type,n.pendingProps,t);case 15:return $d(e,n,n.type,n.pendingProps,t);case 19:return em(e,n,t);case 31:return d_(e,n,t);case 22:return Kd(e,n,t,n.pendingProps);case 24:return xr(n),l=wn(fn),e===null?(r=uc(),r===null&&(r=Ke,a=oc(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=t),r=a),n.memoizedState={parent:l,cache:r},dc(n),jl(n,fn,r)):((e.lanes&t)!==0&&(mc(e,n),fi(n,null,null,t),ui()),r=e.memoizedState,a=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),jl(n,fn,l)):(l=a.cache,jl(n,fn,l),l!==r.cache&&sc(n,[fn],t,!0))),Nn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function al(e){e.flags|=4}function Fc(e,n,t,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Rm())e.flags|=8192;else throw wr=bs,fc}else e.flags&=-16777217}function tm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gh(n))if(Rm())e.flags|=8192;else throw wr=bs,fc}function zs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Va():536870912,e.lanes|=n,va|=n)}function gi(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function h_(e,n,t){var l=n.pendingProps;switch(tc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return t=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),nl(fn),Ue(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(sa(n)?al(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rc())),Qe(n),null;case 26:var r=n.type,a=n.memoizedState;return e===null?(al(n),a!==null?(Qe(n),tm(n,a)):(Qe(n),Fc(n,r,null,l,t))):a?a!==e.memoizedState?(al(n),Qe(n),tm(n,a)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&al(n),Qe(n),Fc(n,r,e,l,t)),null;case 27:if(Jl(n),t=Z.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&al(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=D.current,sa(n)?zf(n):(e=ch(r,l,t),n.stateNode=e,al(n))}return Qe(n),null;case 5:if(Jl(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&al(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(a=D.current,sa(n))zf(n);else{var d=Zs(Z.current);switch(a){case 1:a=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:a=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":a=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":a=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":a=d.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is=="string"?d.createElement(r,{is:l.is}):d.createElement(r)}}a[ln]=n,a[rn]=l;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)a.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=a;e:switch(kn(a,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&al(n)}}return Qe(n),Fc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&al(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,sa(n)){if(e=n.stateNode,t=n.memoizedProps,l=null,r=En,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[ln]=n,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Wm(e.nodeValue,t)),e||Dl(n,!0)}else e=Zs(e).createTextNode(l),e[ln]=n,n.stateNode=e}return Qe(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(l=sa(n),t!==null){if(e===null){if(!l)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else t=rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=sa(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[ln]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),r=!1}else r=rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==r&&(l.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),zs(n,n.updateQueue),Qe(n),null);case 4:return Ue(),e===null&&_u(n.stateNode.containerInfo),Qe(n),null;case 10:return nl(n.type),Qe(n),null;case 19:if(L(sn),l=n.memoizedState,l===null)return Qe(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)gi(l,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=Ss(e),a!==null){for(n.flags|=128,gi(l,!1),e=a.updateQueue,n.updateQueue=e,zs(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Af(t,e),t=t.sibling;return P(sn,sn.current&1|2),Ae&&Jt(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&Tn()>Gs&&(n.flags|=128,r=!0,gi(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ss(a),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,zs(n,e),gi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!Ae)return Qe(n),null}else 2*Tn()-l.renderingStartTime>Gs&&t!==536870912&&(n.flags|=128,r=!0,gi(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(e=l.last,e!==null?e.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Tn(),e.sibling=null,t=sn.current,P(sn,r?t&1|2:t&1),Ae&&Jt(n,l.treeForkCount),e):(Qe(n),null);case 22:case 23:return Wn(n),gc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(t&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),t=n.updateQueue,t!==null&&zs(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==t&&(n.flags|=2048),e!==null&&L(Sr),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),nl(fn),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function p_(e,n){switch(tc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return nl(fn),Ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Jl(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(s(340));yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(sn),null;case 4:return Ue(),null;case 10:return nl(n.type),null;case 22:case 23:return Wn(n),gc(),e!==null&&L(Sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return nl(fn),null;case 25:return null;default:return null}}function lm(e,n){switch(tc(n),n.tag){case 3:nl(fn),Ue();break;case 26:case 27:case 5:Jl(n);break;case 4:Ue();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:L(sn);break;case 10:nl(n.type);break;case 22:case 23:Wn(n),gc(),e!==null&&L(Sr);break;case 24:nl(fn)}}function bi(e,n){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&e)===e){l=void 0;var a=t.create,d=t.inst;l=a(),d.destroy=l}t=t.next}while(t!==r)}}catch(p){Ge(n,n.return,p)}}function Ul(e,n,t){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var a=r.next;l=a;do{if((l.tag&e)===e){var d=l.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,r=n;var S=t,M=p;try{M()}catch(G){Ge(r,S,G)}}}l=l.next}while(l!==a)}}catch(G){Ge(n,n.return,G)}}function rm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Ff(n,t)}catch(l){Ge(e,e.return,l)}}}function am(e,n,t){t.props=Tr(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){Ge(e,n,l)}}function yi(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){Ge(e,n,r)}}function Lt(e,n){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){Ge(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){Ge(e,n,r)}else t.current=null}function im(e){var n=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){Ge(e,e.return,r)}}function Qc(e,n,t){try{var l=e.stateNode;L_(l,e.type,t,n),l[rn]=n}catch(r){Ge(e,e.return,r)}}function sm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$l(e.type)||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$l(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pc(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ut));else if(l!==4&&(l===27&&$l(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Pc(e,n,t),e=e.sibling;e!==null;)Pc(e,n,t),e=e.sibling}function Bs(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(l===27&&$l(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Bs(e,n,t),e=e.sibling;e!==null;)Bs(e,n,t),e=e.sibling}function om(e){var n=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);kn(n,l,t),n[ln]=e,n[rn]=t}catch(a){Ge(e,e.return,a)}}var il=!1,hn=!1,Wc=!1,cm=typeof WeakSet=="function"?WeakSet:Set,bn=null;function __(e,n){if(e=e.containerInfo,yu=lo,e=xf(e),$o(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var r=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var d=0,p=-1,S=-1,M=0,G=0,X=e,A=null;n:for(;;){for(var C;X!==t||r!==0&&X.nodeType!==3||(p=d+r),X!==a||l!==0&&X.nodeType!==3||(S=d+l),X.nodeType===3&&(d+=X.nodeValue.length),(C=X.firstChild)!==null;)A=X,X=C;for(;;){if(X===e)break n;if(A===t&&++M===r&&(p=d),A===a&&++G===l&&(S=d),(C=X.nextSibling)!==null)break;X=A,A=X.parentNode}X=C}t=p===-1||S===-1?null:{start:p,end:S}}else t=null}t=t||{start:0,end:0}}else t=null;for(vu={focusedElem:e,selectionRange:t},lo=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,a=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,t=n,r=a.memoizedProps,a=a.memoizedState,l=t.stateNode;try{var re=Tr(t.type,r);e=l.getSnapshotBeforeUpdate(re,a),l.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ge(t,t.return,me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Eu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function um(e,n,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:ol(e,t),l&4&&bi(5,t);break;case 1:if(ol(e,t),l&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(d){Ge(t,t.return,d)}else{var r=Tr(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ge(t,t.return,d)}}l&64&&rm(t),l&512&&yi(t,t.return);break;case 3:if(ol(e,t),l&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Ff(e,n)}catch(d){Ge(t,t.return,d)}}break;case 27:n===null&&l&4&&om(t);case 26:case 5:ol(e,t),n===null&&l&4&&im(t),l&512&&yi(t,t.return);break;case 12:ol(e,t);break;case 31:ol(e,t),l&4&&mm(e,t);break;case 13:ol(e,t),l&4&&hm(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=N_.bind(null,t),$_(e,t))));break;case 22:if(l=t.memoizedState!==null||il,!l){n=n!==null&&n.memoizedState!==null||hn,r=il;var a=hn;il=l,(hn=n)&&!a?cl(e,t,(t.subtreeFlags&8772)!==0):ol(e,t),il=r,hn=a}break;case 30:break;default:ol(e,t)}}function fm(e){var n=e.alternate;n!==null&&(e.alternate=null,fm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Hn=!1;function sl(e,n,t){for(t=t.child;t!==null;)dm(e,n,t),t=t.sibling}function dm(e,n,t){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(tr,t)}catch{}switch(t.tag){case 26:hn||Lt(t,n),sl(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:hn||Lt(t,n);var l=We,r=Hn;$l(t.type)&&(We=t.stateNode,Hn=!1),sl(e,n,t),Ri(t.stateNode),We=l,Hn=r;break;case 5:hn||Lt(t,n);case 6:if(l=We,r=Hn,We=null,sl(e,n,t),We=l,Hn=r,We!==null)if(Hn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(t.stateNode)}catch(a){Ge(t,n,a)}else try{We.removeChild(t.stateNode)}catch(a){Ge(t,n,a)}break;case 18:We!==null&&(Hn?(e=We,rh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ra(e)):rh(We,t.stateNode));break;case 4:l=We,r=Hn,We=t.stateNode.containerInfo,Hn=!0,sl(e,n,t),We=l,Hn=r;break;case 0:case 11:case 14:case 15:Ul(2,t,n),hn||Ul(4,t,n),sl(e,n,t);break;case 1:hn||(Lt(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"&&am(t,n,l)),sl(e,n,t);break;case 21:sl(e,n,t);break;case 22:hn=(l=hn)||t.memoizedState!==null,sl(e,n,t),hn=l;break;default:sl(e,n,t)}}function mm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ra(e)}catch(t){Ge(n,n.return,t)}}}function hm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ra(e)}catch(t){Ge(n,n.return,t)}}function g_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cm),n;default:throw Error(s(435,e.tag))}}function Ls(e,n){var t=g_(e);n.forEach(function(l){if(!t.has(l)){t.add(l);var r=k_.bind(null,e,l);l.then(r,r)}})}function Gn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l],a=e,d=n,p=d;e:for(;p!==null;){switch(p.tag){case 27:if($l(p.type)){We=p.stateNode,Hn=!1;break e}break;case 5:We=p.stateNode,Hn=!1;break e;case 3:case 4:We=p.stateNode.containerInfo,Hn=!0;break e}p=p.return}if(We===null)throw Error(s(160));dm(a,d,r),We=null,Hn=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pm(n,e),n=n.sibling}var Tt=null;function pm(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),l&4&&(Ul(3,e,e.return),bi(3,e),Ul(5,e,e.return));break;case 1:Gn(n,e),Vn(e),l&512&&(hn||t===null||Lt(t,t.return)),l&64&&il&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var r=Tt;if(Gn(n,e),Vn(e),l&512&&(hn||t===null||Lt(t,t.return)),l&4){var a=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,r=r.ownerDocument||r;n:switch(l){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Bn]||a[ln]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(l),r.head.insertBefore(a,r.querySelector("head > title"))),kn(a,l,t),a[ln]=e,Pe(a),l=a;break e;case"link":var d=ph("link","href",r).get(l+(t.href||""));if(d){for(var p=0;p<d.length;p++)if(a=d[p],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){d.splice(p,1);break n}}a=r.createElement(l),kn(a,l,t),r.head.appendChild(a);break;case"meta":if(d=ph("meta","content",r).get(l+(t.content||""))){for(p=0;p<d.length;p++)if(a=d[p],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){d.splice(p,1);break n}}a=r.createElement(l),kn(a,l,t),r.head.appendChild(a);break;default:throw Error(s(468,l))}a[ln]=e,Pe(a),l=a}e.stateNode=l}else _h(r,e.type,e.stateNode);else e.stateNode=hh(r,l,e.memoizedProps);else a!==l?(a===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):a.count--,l===null?_h(r,e.type,e.stateNode):hh(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,t.memoizedProps)}break;case 27:Gn(n,e),Vn(e),l&512&&(hn||t===null||Lt(t,t.return)),t!==null&&l&4&&Qc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),l&512&&(hn||t===null||Lt(t,t.return)),e.flags&32){r=e.stateNode;try{ct(r,"")}catch(re){Ge(e,e.return,re)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Qc(e,r,t!==null?t.memoizedProps:r)),l&1024&&(Wc=!0);break;case 6:if(Gn(n,e),Vn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(re){Ge(e,e.return,re)}}break;case 3:if(Js=null,r=Tt,Tt=Ps(n.containerInfo),Gn(n,e),Tt=r,Vn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ra(n.containerInfo)}catch(re){Ge(e,e.return,re)}Wc&&(Wc=!1,_m(e));break;case 4:l=Tt,Tt=Ps(e.stateNode.containerInfo),Gn(n,e),Vn(e),Tt=l;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ls(e,l)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Hs=Tn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ls(e,l)));break;case 22:r=e.memoizedState!==null;var S=t!==null&&t.memoizedState!==null,M=il,G=hn;if(il=M||r,hn=G||S,Gn(n,e),hn=G,il=M,Vn(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(t===null||S||il||hn||Rr(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){S=t=n;try{if(a=S.stateNode,r)d=a.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=S.stateNode;var X=S.memoizedProps.style,A=X!=null&&X.hasOwnProperty("display")?X.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(re){Ge(S,S.return,re)}}}else if(n.tag===6){if(t===null){S=n;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(re){Ge(S,S.return,re)}}}else if(n.tag===18){if(t===null){S=n;try{var C=S.stateNode;r?ah(C,!0):ah(S.stateNode,!1)}catch(re){Ge(S,S.return,re)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Ls(e,t))));break;case 19:Gn(n,e),Vn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ls(e,l)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var t,l=e.return;l!==null;){if(sm(l)){t=l;break}l=l.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var r=t.stateNode,a=Zc(e);Bs(e,a,r);break;case 5:var d=t.stateNode;t.flags&32&&(ct(d,""),t.flags&=-33);var p=Zc(e);Bs(e,p,d);break;case 3:case 4:var S=t.stateNode.containerInfo,M=Zc(e);Pc(e,M,S);break;default:throw Error(s(161))}}catch(G){Ge(e,e.return,G)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _m(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_m(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ol(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)um(e,n.alternate,n),n=n.sibling}function Rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ul(4,n,n.return),Rr(n);break;case 1:Lt(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&am(n,n.return,t),Rr(n);break;case 27:Ri(n.stateNode);case 26:case 5:Lt(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}e=e.sibling}}function cl(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,a=n,d=a.flags;switch(a.tag){case 0:case 11:case 15:cl(r,a,t),bi(4,a);break;case 1:if(cl(r,a,t),l=a,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(M){Ge(l,l.return,M)}if(l=a,r=l.updateQueue,r!==null){var p=l.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)If(S[r],p)}catch(M){Ge(l,l.return,M)}}t&&d&64&&rm(a),yi(a,a.return);break;case 27:om(a);case 26:case 5:cl(r,a,t),t&&l===null&&d&4&&im(a),yi(a,a.return);break;case 12:cl(r,a,t);break;case 31:cl(r,a,t),t&&d&4&&mm(r,a);break;case 13:cl(r,a,t),t&&d&4&&hm(r,a);break;case 22:a.memoizedState===null&&cl(r,a,t),yi(a,a.return);break;case 30:break;default:cl(r,a,t)}n=n.sibling}}function Jc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ai(t))}function eu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ai(e))}function Rt(e,n,t,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gm(e,n,t,l),n=n.sibling}function gm(e,n,t,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Rt(e,n,t,l),r&2048&&bi(9,n);break;case 1:Rt(e,n,t,l);break;case 3:Rt(e,n,t,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ai(e)));break;case 12:if(r&2048){Rt(e,n,t,l),e=n.stateNode;try{var a=n.memoizedProps,d=a.id,p=a.onPostCommit;typeof p=="function"&&p(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ge(n,n.return,S)}}else Rt(e,n,t,l);break;case 31:Rt(e,n,t,l);break;case 13:Rt(e,n,t,l);break;case 23:break;case 22:a=n.stateNode,d=n.alternate,n.memoizedState!==null?a._visibility&2?Rt(e,n,t,l):vi(e,n):a._visibility&2?Rt(e,n,t,l):(a._visibility|=2,ga(e,n,t,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Jc(d,n);break;case 24:Rt(e,n,t,l),r&2048&&eu(n.alternate,n);break;default:Rt(e,n,t,l)}}function ga(e,n,t,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var a=e,d=n,p=t,S=l,M=d.flags;switch(d.tag){case 0:case 11:case 15:ga(a,d,p,S,r),bi(8,d);break;case 23:break;case 22:var G=d.stateNode;d.memoizedState!==null?G._visibility&2?ga(a,d,p,S,r):vi(a,d):(G._visibility|=2,ga(a,d,p,S,r)),r&&M&2048&&Jc(d.alternate,d);break;case 24:ga(a,d,p,S,r),r&&M&2048&&eu(d.alternate,d);break;default:ga(a,d,p,S,r)}n=n.sibling}}function vi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,l=n,r=l.flags;switch(l.tag){case 22:vi(t,l),r&2048&&Jc(l.alternate,l);break;case 24:vi(t,l),r&2048&&eu(l.alternate,l);break;default:vi(t,l)}n=n.sibling}}var xi=8192;function ba(e,n,t){if(e.subtreeFlags&xi)for(e=e.child;e!==null;)bm(e,n,t),e=e.sibling}function bm(e,n,t){switch(e.tag){case 26:ba(e,n,t),e.flags&xi&&e.memoizedState!==null&&lg(t,Tt,e.memoizedState,e.memoizedProps);break;case 5:ba(e,n,t);break;case 3:case 4:var l=Tt;Tt=Ps(e.stateNode.containerInfo),ba(e,n,t),Tt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=xi,xi=16777216,ba(e,n,t),xi=l):ba(e,n,t));break;default:ba(e,n,t)}}function ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Si(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];bn=l,xm(l,e)}ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vm(e),e=e.sibling}function vm(e){switch(e.tag){case 0:case 11:case 15:Si(e),e.flags&2048&&Ul(9,e,e.return);break;case 3:Si(e);break;case 12:Si(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Us(e)):Si(e);break;default:Si(e)}}function Us(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];bn=l,xm(l,e)}ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ul(8,n,n.return),Us(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Us(n));break;default:Us(n)}e=e.sibling}}function xm(e,n){for(;bn!==null;){var t=bn;switch(t.tag){case 0:case 11:case 15:Ul(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ai(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,bn=l;else e:for(t=e;bn!==null;){l=bn;var r=l.sibling,a=l.return;if(fm(l),l===t){bn=null;break e}if(r!==null){r.return=a,bn=r;break e}bn=a}}}var b_={getCacheForType:function(e){var n=wn(fn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return wn(fn).controller.signal}},y_=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ke=null,ke=null,Re=0,He=0,Jn=null,Hl=!1,ya=!1,nu=!1,ul=0,tn=0,Gl=0,Mr=0,tu=0,et=0,va=0,Ei=null,Yn=null,lu=!1,Hs=0,Sm=0,Gs=1/0,Vs=null,Vl=null,_n=0,Yl=null,xa=null,fl=0,ru=0,au=null,Em=null,wi=0,iu=null;function nt(){return(Le&2)!==0&&Re!==0?Re&-Re:O.T!==null?du():un()}function wm(){if(et===0)if((Re&536870912)===0||Ae){var e=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),et=e}else et=536870912;return e=Pn.current,e!==null&&(e.flags|=32),et}function qn(e,n,t){(e===Ke&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Sa(e,0),ql(e,Re,et,!1)),lr(e,t),((Le&2)===0||e!==Ke)&&(e===Ke&&((Le&2)===0&&(Mr|=t),tn===4&&ql(e,Re,et,!1)),Ut(e))}function Nm(e,n,t){if((Le&6)!==0)throw Error(s(327));var l=!t&&(n&127)===0&&(n&e.expiredLanes)===0||jn(e,n),r=l?S_(e,n):ou(e,n,!0),a=l;do{if(r===0){ya&&!l&&ql(e,n,0,!1);break}else{if(t=e.current.alternate,a&&!v_(t)){r=ou(e,n,!1),a=!1;continue}if(r===2){if(a=n,e.errorRecoveryDisabledLanes&a)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var p=e;r=Ei;var S=p.current.memoizedState.isDehydrated;if(S&&(Sa(p,d).flags|=256),d=ou(p,d,!1),d!==2){if(nu&&!S){p.errorRecoveryDisabledLanes|=a,Mr|=a,r=4;break e}a=Yn,Yn=r,a!==null&&(Yn===null?Yn=a:Yn.push.apply(Yn,a))}r=d}if(a=!1,r!==2)continue}}if(r===1){Sa(e,0),ql(e,n,0,!0);break}e:{switch(l=e,a=r,a){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ql(l,n,et,!Hl);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(r=Hs+300-Tn(),10<r)){if(ql(l,n,et,!Hl),cn(l,0,!0)!==0)break e;fl=n,l.timeoutHandle=th(km.bind(null,l,t,Yn,Vs,lu,n,et,Mr,va,Hl,a,"Throttled",-0,0),r);break e}km(l,t,Yn,Vs,lu,n,et,Mr,va,Hl,a,null,-0,0)}}break}while(!0);Ut(e)}function km(e,n,t,l,r,a,d,p,S,M,G,X,A,C){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ut},bm(n,a,X);var re=(a&62914560)===a?Hs-Tn():(a&4194048)===a?Sm-Tn():0;if(re=rg(X,re),re!==null){fl=a,e.cancelPendingCommit=re(Cm.bind(null,e,n,a,t,l,r,d,p,S,G,X,null,A,C)),ql(e,a,d,!M);return}}Cm(e,n,a,t,l,r,d,p,S)}function v_(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],a=r.getSnapshot;r=r.value;try{if(!Qn(a(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ql(e,n,t,l){n&=~tu,n&=~Mr,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var a=31-vn(r),d=1<<a;l[a]=-1,r&=~d}t!==0&&Ii(e,t,n)}function Ys(){return(Le&6)===0?(Ni(0),!1):!0}function su(){if(ke!==null){if(He===0)var e=ke.return;else e=ke,el=vr=null,Ec(e),da=null,si=0,e=ke;for(;e!==null;)lm(e.alternate,e),e=e.return;ke=null}}function Sa(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,G_(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),fl=0,su(),Ke=e,ke=t=Wt(e.current,null),Re=n,He=0,Jn=null,Hl=!1,ya=jn(e,n),nu=!1,va=et=tu=Mr=Gl=tn=0,Yn=Ei=null,lu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-vn(l),a=1<<r;n|=e[r],l&=~a}return ul=n,cs(),t}function Tm(e,n){Se=null,O.H=pi,n===fa||n===gs?(n=qf(),He=3):n===fc?(n=qf(),He=4):He=n===Hc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ke===null&&(tn=1,Ds(e,mt(n,e.current)))}function Rm(){var e=Pn.current;return e===null?!0:(Re&4194048)===Re?gt===null:(Re&62914560)===Re||(Re&536870912)!==0?e===gt:!1}function Mm(){var e=O.H;return O.H=pi,e===null?pi:e}function Am(){var e=O.A;return O.A=b_,e}function qs(){tn=4,Hl||(Re&4194048)!==Re&&Pn.current!==null||(ya=!0),(Gl&134217727)===0&&(Mr&134217727)===0||Ke===null||ql(Ke,Re,et,!1)}function ou(e,n,t){var l=Le;Le|=2;var r=Mm(),a=Am();(Ke!==e||Re!==n)&&(Vs=null,Sa(e,n)),n=!1;var d=tn;e:do try{if(He!==0&&ke!==null){var p=ke,S=Jn;switch(He){case 8:su(),d=6;break e;case 3:case 2:case 9:case 6:Pn.current===null&&(n=!0);var M=He;if(He=0,Jn=null,Ea(e,p,S,M),t&&ya){d=0;break e}break;default:M=He,He=0,Jn=null,Ea(e,p,S,M)}}x_(),d=tn;break}catch(G){Tm(e,G)}while(!0);return n&&e.shellSuspendCounter++,el=vr=null,Le=l,O.H=r,O.A=a,ke===null&&(Ke=null,Re=0,cs()),d}function x_(){for(;ke!==null;)Dm(ke)}function S_(e,n){var t=Le;Le|=2;var l=Mm(),r=Am();Ke!==e||Re!==n?(Vs=null,Gs=Tn()+500,Sa(e,n)):ya=jn(e,n);e:do try{if(He!==0&&ke!==null){n=ke;var a=Jn;n:switch(He){case 1:He=0,Jn=null,Ea(e,n,a,1);break;case 2:case 9:if(Vf(a)){He=0,Jn=null,jm(n);break}n=function(){He!==2&&He!==9||Ke!==e||(He=7),Ut(e)},a.then(n,n);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:Vf(a)?(He=0,Jn=null,jm(n)):(He=0,Jn=null,Ea(e,n,a,7));break;case 5:var d=null;switch(ke.tag){case 26:d=ke.memoizedState;case 5:case 27:var p=ke;if(d?gh(d):p.stateNode.complete){He=0,Jn=null;var S=p.sibling;if(S!==null)ke=S;else{var M=p.return;M!==null?(ke=M,Xs(M)):ke=null}break n}}He=0,Jn=null,Ea(e,n,a,5);break;case 6:He=0,Jn=null,Ea(e,n,a,6);break;case 8:su(),tn=6;break e;default:throw Error(s(462))}}E_();break}catch(G){Tm(e,G)}while(!0);return el=vr=null,O.H=l,O.A=r,Le=t,ke!==null?0:(Ke=null,Re=0,cs(),tn)}function E_(){for(;ke!==null&&!Ha();)Dm(ke)}function Dm(e){var n=nm(e.alternate,e,ul);e.memoizedProps=e.pendingProps,n===null?Xs(e):ke=n}function jm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Qd(t,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Qd(t,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Ec(n);default:lm(t,n),n=ke=Af(n,ul),n=nm(t,n,ul)}e.memoizedProps=e.pendingProps,n===null?Xs(e):ke=n}function Ea(e,n,t,l){el=vr=null,Ec(n),da=null,si=0;var r=n.return;try{if(f_(e,r,n,t,Re)){tn=1,Ds(e,mt(t,e.current)),ke=null;return}}catch(a){if(r!==null)throw ke=r,a;tn=1,Ds(e,mt(t,e.current)),ke=null;return}n.flags&32768?(Ae||l===1?e=!0:ya||(Re&536870912)!==0?e=!1:(Hl=e=!0,(l===2||l===9||l===3||l===6)&&(l=Pn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Om(n,e)):Xs(n)}function Xs(e){var n=e;do{if((n.flags&32768)!==0){Om(n,Hl);return}e=n.return;var t=h_(n.alternate,n,ul);if(t!==null){ke=t;return}if(n=n.sibling,n!==null){ke=n;return}ke=n=e}while(n!==null);tn===0&&(tn=5)}function Om(e,n){do{var t=p_(e.alternate,e);if(t!==null){t.flags&=32767,ke=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ke=e;return}ke=e=t}while(e!==null);tn=6,ke=null}function Cm(e,n,t,l,r,a,d,p,S){e.cancelPendingCommit=null;do $s();while(_n!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(a=n.lanes|n.childLanes,a|=Zo,Gt(e,t,a,d,p,S),e===Ke&&(ke=Ke=null,Re=0),xa=n,Yl=e,fl=t,ru=a,au=r,Em=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,T_(nr,function(){return Hm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,r=Y.p,Y.p=2,d=Le,Le|=4;try{__(e,n,t)}finally{Le=d,Y.p=r,O.T=l}}_n=1,zm(),Bm(),Lm()}}function zm(){if(_n===1){_n=0;var e=Yl,n=xa,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=O.T,O.T=null;var l=Y.p;Y.p=2;var r=Le;Le|=4;try{pm(n,e);var a=vu,d=xf(e.containerInfo),p=a.focusedElem,S=a.selectionRange;if(d!==p&&p&&p.ownerDocument&&vf(p.ownerDocument.documentElement,p)){if(S!==null&&$o(p)){var M=S.start,G=S.end;if(G===void 0&&(G=M),"selectionStart"in p)p.selectionStart=M,p.selectionEnd=Math.min(G,p.value.length);else{var X=p.ownerDocument||document,A=X&&X.defaultView||window;if(A.getSelection){var C=A.getSelection(),re=p.textContent.length,me=Math.min(S.start,re),Xe=S.end===void 0?me:Math.min(S.end,re);!C.extend&&me>Xe&&(d=Xe,Xe=me,me=d);var T=yf(p,me),N=yf(p,Xe);if(T&&N&&(C.rangeCount!==1||C.anchorNode!==T.node||C.anchorOffset!==T.offset||C.focusNode!==N.node||C.focusOffset!==N.offset)){var R=X.createRange();R.setStart(T.node,T.offset),C.removeAllRanges(),me>Xe?(C.addRange(R),C.extend(N.node,N.offset)):(R.setEnd(N.node,N.offset),C.addRange(R))}}}}for(X=[],C=p;C=C.parentNode;)C.nodeType===1&&X.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<X.length;p++){var q=X[p];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}lo=!!yu,vu=yu=null}finally{Le=r,Y.p=l,O.T=t}}e.current=n,_n=2}}function Bm(){if(_n===2){_n=0;var e=Yl,n=xa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=O.T,O.T=null;var l=Y.p;Y.p=2;var r=Le;Le|=4;try{um(e,n.alternate,n)}finally{Le=r,Y.p=l,O.T=t}}_n=3}}function Lm(){if(_n===4||_n===3){_n=0,Ki();var e=Yl,n=xa,t=fl,l=Em;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,xa=Yl=null,Um(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Vl=null),Dt(t),n=n.stateNode,pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(tr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,r=Y.p,Y.p=2,O.T=null;try{for(var a=e.onRecoverableError,d=0;d<l.length;d++){var p=l[d];a(p.value,{componentStack:p.stack})}}finally{O.T=n,Y.p=r}}(fl&3)!==0&&$s(),Ut(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===iu?wi++:(wi=0,iu=e):wi=0,Ni(0)}}function Um(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ai(n)))}function $s(){return zm(),Bm(),Lm(),Hm()}function Hm(){if(_n!==5)return!1;var e=Yl,n=ru;ru=0;var t=Dt(fl),l=O.T,r=Y.p;try{Y.p=32>t?32:t,O.T=null,t=au,au=null;var a=Yl,d=fl;if(_n=0,xa=Yl=null,fl=0,(Le&6)!==0)throw Error(s(331));var p=Le;if(Le|=4,vm(a.current),gm(a,a.current,d,t),Le=p,Ni(0,!1),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(tr,a)}catch{}return!0}finally{Y.p=r,O.T=l,Um(e,n)}}function Gm(e,n,t){n=mt(t,n),n=Uc(e.stateNode,n,2),e=zl(e,n,2),e!==null&&(lr(e,2),Ut(e))}function Ge(e,n,t){if(e.tag===3)Gm(e,e,t);else for(;n!==null;){if(n.tag===3){Gm(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vl===null||!Vl.has(l))){e=mt(t,e),t=Vd(2),l=zl(n,t,2),l!==null&&(Yd(t,l,n,e),lr(l,2),Ut(l));break}}n=n.return}}function cu(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new y_;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(t)||(nu=!0,r.add(t),e=w_.bind(null,e,n,t),n.then(e,e))}function w_(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ke===e&&(Re&t)===t&&(tn===4||tn===3&&(Re&62914560)===Re&&300>Tn()-Hs?(Le&2)===0&&Sa(e,0):tu|=t,va===Re&&(va=0)),Ut(e)}function Vm(e,n){n===0&&(n=Va()),e=gr(e,n),e!==null&&(lr(e,n),Ut(e))}function N_(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Vm(e,t)}function k_(e,n){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),Vm(e,t)}function T_(e,n){return Ua(e,n)}var Ks=null,wa=null,uu=!1,Is=!1,fu=!1,Xl=0;function Ut(e){e!==wa&&e.next===null&&(wa===null?Ks=wa=e:wa=wa.next=e),Is=!0,uu||(uu=!0,M_())}function Ni(e,n){if(!fu&&Is){fu=!0;do for(var t=!1,l=Ks;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var a=0;else{var d=l.suspendedLanes,p=l.pingedLanes;a=(1<<31-vn(42|e)+1)-1,a&=r&~(d&~p),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(t=!0,$m(l,a))}else a=Re,a=cn(l,l===Ke?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(a&3)===0||jn(l,a)||(t=!0,$m(l,a));l=l.next}while(t);fu=!1}}function R_(){Ym()}function Ym(){Is=uu=!1;var e=0;Xl!==0&&H_()&&(e=Xl);for(var n=Tn(),t=null,l=Ks;l!==null;){var r=l.next,a=qm(l,n);a===0?(l.next=null,t===null?Ks=r:t.next=r,r===null&&(wa=t)):(t=l,(e!==0||(a&3)!==0)&&(Is=!0)),l=r}_n!==0&&_n!==5||Ni(e),Xl!==0&&(Xl=0)}function qm(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var d=31-vn(a),p=1<<d,S=r[d];S===-1?((p&t)===0||(p&l)!==0)&&(r[d]=ko(p,n)):S<=n&&(e.expiredLanes|=p),a&=~p}if(n=Ke,t=Re,t=cn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ht(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||jn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(l!==null&&Ht(l),Dt(t)){case 2:case 8:t=Ga;break;case 32:t=nr;break;case 268435456:t=it;break;default:t=nr}return l=Xm.bind(null,e),t=Ua(t,l),e.callbackPriority=n,e.callbackNode=t,n}return l!==null&&l!==null&&Ht(l),e.callbackPriority=2,e.callbackNode=null,2}function Xm(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if($s()&&e.callbackNode!==t)return null;var l=Re;return l=cn(e,e===Ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Nm(e,l,n),qm(e,Tn()),e.callbackNode!=null&&e.callbackNode===t?Xm.bind(null,e):null)}function $m(e,n){if($s())return null;Nm(e,n,!0)}function M_(){V_(function(){(Le&6)!==0?Ua(Lr,R_):Ym()})}function du(){if(Xl===0){var e=ca;e===0&&(e=Mt,Mt<<=1,(Mt&261888)===0&&(Mt=256)),Xl=e}return Xl}function Km(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wl(""+e)}function Im(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function A_(e,n,t,l,r){if(n==="submit"&&t&&t.stateNode===r){var a=Km((r[rn]||null).action),d=l.submitter;d&&(n=(n=d[rn]||null)?Km(n.formAction):d.getAttribute("formAction"),n!==null&&(a=n,d=null));var p=new Qr("action","action",null,l,r);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xl!==0){var S=d?Im(r,d):new FormData(r);jc(t,{pending:!0,data:S,method:r.method,action:a},null,S)}}else typeof a=="function"&&(p.preventDefault(),S=d?Im(r,d):new FormData(r),jc(t,{pending:!0,data:S,method:r.method,action:a},a,S))},currentTarget:r}]})}}for(var mu=0;mu<Qo.length;mu++){var hu=Qo[mu],D_=hu.toLowerCase(),j_=hu[0].toUpperCase()+hu.slice(1);kt(D_,"on"+j_)}kt(wf,"onAnimationEnd"),kt(Nf,"onAnimationIteration"),kt(kf,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(Fp,"onTransitionRun"),kt(Qp,"onTransitionStart"),kt(Zp,"onTransitionCancel"),kt(Tf,"onTransitionEnd"),Sl("onMouseEnter",["mouseout","mouseover"]),Sl("onMouseLeave",["mouseout","mouseover"]),Sl("onPointerEnter",["pointerout","pointerover"]),Sl("onPointerLeave",["pointerout","pointerover"]),Et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Et("onBeforeInput",["compositionend","keypress","textInput","paste"]),Et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ki));function Fm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],r=l.event;l=l.listeners;e:{var a=void 0;if(n)for(var d=l.length-1;0<=d;d--){var p=l[d],S=p.instance,M=p.currentTarget;if(p=p.listener,S!==a&&r.isPropagationStopped())break e;a=p,r.currentTarget=M;try{a(r)}catch(G){os(G)}r.currentTarget=null,a=S}else for(d=0;d<l.length;d++){if(p=l[d],S=p.instance,M=p.currentTarget,p=p.listener,S!==a&&r.isPropagationStopped())break e;a=p,r.currentTarget=M;try{a(r)}catch(G){os(G)}r.currentTarget=null,a=S}}}}function Te(e,n){var t=n[jt];t===void 0&&(t=n[jt]=new Set);var l=e+"__bubble";t.has(l)||(Qm(n,e,2,!1),t.add(l))}function pu(e,n,t){var l=0;n&&(l|=4),Qm(t,e,l,n)}var Fs="_reactListening"+Math.random().toString(36).slice(2);function _u(e){if(!e[Fs]){e[Fs]=!0,qt.forEach(function(t){t!=="selectionchange"&&(O_.has(t)||pu(t,!1,e),pu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fs]||(n[Fs]=!0,pu("selectionchange",!1,n))}}function Qm(e,n,t,l){switch(wh(n)){case 2:var r=sg;break;case 8:r=og;break;default:r=Du}t=r.bind(null,n,t,e),r=void 0,!$r||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function gu(e,n,t,l,r){var a=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var p=l.stateNode.containerInfo;if(p===r)break;if(d===4)for(d=l.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;p!==null;){if(d=Ln(p),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){l=a=d;continue e}p=p.parentNode}}l=l.return}$t(function(){var M=a,G=Ia(t),X=[];e:{var A=Rf.get(e);if(A!==void 0){var C=Qr,re=e;switch(e){case"keypress":if(Fr(t)===0)break e;case"keydown":case"keyup":C=Ho;break;case"focusin":re="focus",C=Pr;break;case"focusout":re="blur",C=Pr;break;case"beforeblur":case"afterblur":C=Pr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Ao;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=as;break;case wf:case Nf:case kf:C=ts;break;case Tf:C=is;break;case"scroll":case"scrollend":C=Mo;break;case"wheel":C=Yo;break;case"copy":case"cut":case"paste":C=Co;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Rl;break;case"toggle":case"beforetoggle":C=g}var me=(n&4)!==0,Xe=!me&&(e==="scroll"||e==="scrollend"),T=me?A!==null?A+"Capture":null:A;me=[];for(var N=M,R;N!==null;){var q=N;if(R=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||R===null||T===null||(q=kl(N,T),q!=null&&me.push(Ti(N,q,R))),Xe)break;N=N.return}0<me.length&&(A=new C(A,re,null,t,G),X.push({event:A,listeners:me}))}}if((n&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&t!==Ka&&(re=t.relatedTarget||t.fromElement)&&(Ln(re)||re[st]))break e;if((C||A)&&(A=G.window===G?G:(A=G.ownerDocument)?A.defaultView||A.parentWindow:window,C?(re=t.relatedTarget||t.toElement,C=M,re=re?Ln(re):null,re!==null&&(Xe=h(re),me=re.tag,re!==Xe||me!==5&&me!==27&&me!==6)&&(re=null)):(C=null,re=M),C!==re)){if(me=ns,q="onMouseLeave",T="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(me=Rl,q="onPointerLeave",T="onPointerEnter",N="pointer"),Xe=C==null?A:ot(C),R=re==null?A:ot(re),A=new me(q,N+"leave",C,t,G),A.target=Xe,A.relatedTarget=R,q=null,Ln(G)===M&&(me=new me(T,N+"enter",re,t,G),me.target=R,me.relatedTarget=Xe,q=me),Xe=q,C&&re)n:{for(me=C_,T=C,N=re,R=0,q=T;q;q=me(q))R++;q=0;for(var ce=N;ce;ce=me(ce))q++;for(;0<R-q;)T=me(T),R--;for(;0<q-R;)N=me(N),q--;for(;R--;){if(T===N||N!==null&&T===N.alternate){me=T;break n}T=me(T),N=me(N)}me=null}else me=null;C!==null&&Zm(X,A,C,me,!1),re!==null&&Xe!==null&&Zm(X,Xe,re,me,!0)}}e:{if(A=M?ot(M):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var Ce=ss;else if(Qt(A))if(ei)Ce=$p;else{Ce=qp;var se=Yp}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?M&&$a(M.elementType)&&(Ce=ss):Ce=Xp;if(Ce&&(Ce=Ce(e,M))){ea(X,Ce,t,G);break e}se&&se(e,A,M),e==="focusout"&&M&&A.type==="number"&&M.memoizedProps.value!=null&&Rn(A,"number",A.value)}switch(se=M?ot(M):window,e){case"focusin":(Qt(se)||se.contentEditable==="true")&&(na=se,Ko=M,ti=null);break;case"focusout":ti=Ko=na=null;break;case"mousedown":Io=!0;break;case"contextmenu":case"mouseup":case"dragend":Io=!1,Sf(X,t,G);break;case"selectionchange":if(Ip)break;case"keydown":case"keyup":Sf(X,t,G)}var we;if(B)e:{switch(e){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else je?Fn(e,t)&&(Me="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Me="onCompositionStart");Me&&(ge&&t.locale!=="ko"&&(je||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&je&&(we=Ir()):(Ot=G,Kr="value"in Ot?Ot.value:Ot.textContent,je=!0)),se=Qs(M,Me),0<se.length&&(Me=new ls(Me,e,null,t,G),X.push({event:Me,listeners:se}),we?Me.data=we:(we=It(t),we!==null&&(Me.data=we)))),(we=te?Ft(e,t):Wa(e,t))&&(Me=Qs(M,"onBeforeInput"),0<Me.length&&(se=new ls("onBeforeInput","beforeinput",null,t,G),X.push({event:se,listeners:Me}),se.data=we)),A_(X,e,M,t,G)}Fm(X,n)})}function Ti(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qs(e,n){for(var t=n+"Capture",l=[];e!==null;){var r=e,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=kl(e,t),r!=null&&l.unshift(Ti(e,r,a)),r=kl(e,n),r!=null&&l.push(Ti(e,r,a))),e.tag===3)return l;e=e.return}return[]}function C_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zm(e,n,t,l,r){for(var a=n._reactName,d=[];t!==null&&t!==l;){var p=t,S=p.alternate,M=p.stateNode;if(p=p.tag,S!==null&&S===l)break;p!==5&&p!==26&&p!==27||M===null||(S=M,r?(M=kl(t,a),M!=null&&d.unshift(Ti(t,M,S))):r||(M=kl(t,a),M!=null&&d.push(Ti(t,M,S)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var z_=/\r\n?/g,B_=/\u0000|\uFFFD/g;function Pm(e){return(typeof e=="string"?e:""+e).replace(z_,`
`).replace(B_,"")}function Wm(e,n){return n=Pm(n),Pm(e)===n}function qe(e,n,t,l,r,a){switch(t){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ct(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ct(e,""+l);break;case"className":Nt(e,"class",l);break;case"tabIndex":Nt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(e,t,l);break;case"style":El(e,l,a);break;case"data":if(n!=="object"){Nt(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=wl(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(t==="formAction"?(n!=="input"&&qe(e,n,"name",r.name,r,null),qe(e,n,"formEncType",r.formEncType,r,null),qe(e,n,"formMethod",r.formMethod,r,null),qe(e,n,"formTarget",r.formTarget,r,null)):(qe(e,n,"encType",r.encType,r,null),qe(e,n,"method",r.method,r,null),qe(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=wl(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=ut);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=wl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),wt(e,"popover",l);break;case"xlinkActuate":In(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":In(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":In(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":In(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":In(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":In(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":In(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":In(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":In(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":wt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=es.get(t)||t,wt(e,t,l))}}function bu(e,n,t,l,r,a){switch(t){case"style":El(e,l,a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"children":typeof l=="string"?ct(e,l):(typeof l=="number"||typeof l=="bigint")&&ct(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!he.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),n=t.slice(2,r?t.length-7:void 0),a=e[rn]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(n,a,r),typeof l=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,l,r);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):wt(e,t,l)}}}function kn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,r=!1,a;for(a in t)if(t.hasOwnProperty(a)){var d=t[a];if(d!=null)switch(a){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,a,d,t,null)}}r&&qe(e,n,"srcSet",t.srcSet,t,null),l&&qe(e,n,"src",t.src,t,null);return;case"input":Te("invalid",e);var p=a=d=r=null,S=null,M=null;for(l in t)if(t.hasOwnProperty(l)){var G=t[l];if(G!=null)switch(l){case"name":r=G;break;case"type":d=G;break;case"checked":S=G;break;case"defaultChecked":M=G;break;case"value":a=G;break;case"defaultValue":p=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:qe(e,n,l,G,t,null)}}Wi(e,a,p,S,M,d,r,!1);return;case"select":Te("invalid",e),l=d=a=null;for(r in t)if(t.hasOwnProperty(r)&&(p=t[r],p!=null))switch(r){case"value":a=p;break;case"defaultValue":d=p;break;case"multiple":l=p;default:qe(e,n,r,p,t,null)}n=a,t=d,e.multiple=!!l,n!=null?Xt(e,!!l,n,!1):t!=null&&Xt(e,!!l,t,!0);return;case"textarea":Te("invalid",e),a=r=l=null;for(d in t)if(t.hasOwnProperty(d)&&(p=t[d],p!=null))switch(d){case"value":l=p;break;case"defaultValue":r=p;break;case"children":a=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(91));break;default:qe(e,n,d,p,t,null)}Sn(e,l,r,a);return;case"option":for(S in t)if(t.hasOwnProperty(S)&&(l=t[S],l!=null))switch(S){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:qe(e,n,S,l,t,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<ki.length;l++)Te(ki[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in t)if(t.hasOwnProperty(M)&&(l=t[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,M,l,t,null)}return;default:if($a(n)){for(G in t)t.hasOwnProperty(G)&&(l=t[G],l!==void 0&&bu(e,n,G,l,t,void 0));return}}for(p in t)t.hasOwnProperty(p)&&(l=t[p],l!=null&&qe(e,n,p,l,t,null))}function L_(e,n,t,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,d=null,p=null,S=null,M=null,G=null;for(C in t){var X=t[C];if(t.hasOwnProperty(C)&&X!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":S=X;default:l.hasOwnProperty(C)||qe(e,n,C,null,l,X)}}for(var A in l){var C=l[A];if(X=t[A],l.hasOwnProperty(A)&&(C!=null||X!=null))switch(A){case"type":a=C;break;case"name":r=C;break;case"checked":M=C;break;case"defaultChecked":G=C;break;case"value":d=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,n));break;default:C!==X&&qe(e,n,A,C,l,X)}}sr(e,d,p,S,M,G,a,r);return;case"select":C=d=p=A=null;for(a in t)if(S=t[a],t.hasOwnProperty(a)&&S!=null)switch(a){case"value":break;case"multiple":C=S;default:l.hasOwnProperty(a)||qe(e,n,a,null,l,S)}for(r in l)if(a=l[r],S=t[r],l.hasOwnProperty(r)&&(a!=null||S!=null))switch(r){case"value":A=a;break;case"defaultValue":p=a;break;case"multiple":d=a;default:a!==S&&qe(e,n,r,a,l,S)}n=p,t=d,l=C,A!=null?Xt(e,!!t,A,!1):!!l!=!!t&&(n!=null?Xt(e,!!t,n,!0):Xt(e,!!t,t?[]:"",!1));return;case"textarea":C=A=null;for(p in t)if(r=t[p],t.hasOwnProperty(p)&&r!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:qe(e,n,p,null,l,r)}for(d in l)if(r=l[d],a=t[d],l.hasOwnProperty(d)&&(r!=null||a!=null))switch(d){case"value":A=r;break;case"defaultValue":C=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==a&&qe(e,n,d,r,l,a)}Yr(e,A,C);return;case"option":for(var re in t)if(A=t[re],t.hasOwnProperty(re)&&A!=null&&!l.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:qe(e,n,re,null,l,A)}for(S in l)if(A=l[S],C=t[S],l.hasOwnProperty(S)&&A!==C&&(A!=null||C!=null))switch(S){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:qe(e,n,S,A,l,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in t)A=t[me],t.hasOwnProperty(me)&&A!=null&&!l.hasOwnProperty(me)&&qe(e,n,me,null,l,A);for(M in l)if(A=l[M],C=t[M],l.hasOwnProperty(M)&&A!==C&&(A!=null||C!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,n));break;default:qe(e,n,M,A,l,C)}return;default:if($a(n)){for(var Xe in t)A=t[Xe],t.hasOwnProperty(Xe)&&A!==void 0&&!l.hasOwnProperty(Xe)&&bu(e,n,Xe,void 0,l,A);for(G in l)A=l[G],C=t[G],!l.hasOwnProperty(G)||A===C||A===void 0&&C===void 0||bu(e,n,G,A,l,C);return}}for(var T in t)A=t[T],t.hasOwnProperty(T)&&A!=null&&!l.hasOwnProperty(T)&&qe(e,n,T,null,l,A);for(X in l)A=l[X],C=t[X],!l.hasOwnProperty(X)||A===C||A==null&&C==null||qe(e,n,X,A,l,C)}function Jm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],a=r.transferSize,d=r.initiatorType,p=r.duration;if(a&&p&&Jm(d)){for(d=0,p=r.responseEnd,l+=1;l<t.length;l++){var S=t[l],M=S.startTime;if(M>p)break;var G=S.transferSize,X=S.initiatorType;G&&Jm(X)&&(S=S.responseEnd,d+=G*(S<p?1:(p-M)/(S-M)))}if(--l,n+=8*(a+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yu=null,vu=null;function Zs(e){return e.nodeType===9?e:e.ownerDocument}function eh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Su=null;function H_(){var e=window.event;return e&&e.type==="popstate"?e===Su?!1:(Su=e,!0):(Su=null,!1)}var th=typeof setTimeout=="function"?setTimeout:void 0,G_=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,V_=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(e){return lh.resolve(null).then(e).catch(Y_)}:th;function Y_(e){setTimeout(function(){throw e})}function $l(e){return e==="head"}function rh(e,n){var t=n,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(r),Ra(n);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Ri(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ri(t);for(var a=t.firstChild;a;){var d=a.nextSibling,p=a.nodeName;a[Bn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&a.rel.toLowerCase()==="stylesheet"||t.removeChild(a),a=d}}else t==="body"&&Ri(e.ownerDocument.body);t=r}while(t);Ra(n)}function ah(e,n){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Eu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Eu(t),Vt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function q_(e,n,t,l){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function X_(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function ih(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bt(e.nextSibling),e===null))return null;return e}function wu(e){return e.data==="$?"||e.data==="$~"}function Nu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $_(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var l=function(){n(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function bt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ku=null;function sh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return bt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function oh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function ch(e,n,t){switch(n=Zs(t),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ri(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e)}var yt=new Map,uh=new Set;function Ps(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dl=Y.d;Y.d={f:K_,r:I_,D:F_,C:Q_,L:Z_,m:P_,X:J_,S:W_,M:eg};function K_(){var e=dl.f(),n=Ys();return e||n}function I_(e){var n=Kn(e);n!==null&&n.tag===5&&n.type==="form"?Td(n):dl.r(e)}var Na=typeof document>"u"?null:document;function fh(e,n,t){var l=Na;if(l&&typeof n=="string"&&n){var r=gn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),uh.has(r)||(uh.add(r),e={rel:e,crossOrigin:t,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),kn(n,"link",e),Pe(n),l.head.appendChild(n)))}}function F_(e){dl.D(e),fh("dns-prefetch",e,null)}function Q_(e,n){dl.C(e,n),fh("preconnect",e,n)}function Z_(e,n,t){dl.L(e,n,t);var l=Na;if(l&&e&&n){var r='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+gn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+gn(t.imageSizes)+'"]')):r+='[href="'+gn(e)+'"]';var a=r;switch(n){case"style":a=ka(e);break;case"script":a=Ta(e)}yt.has(a)||(e=k({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),yt.set(a,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Mi(a))||n==="script"&&l.querySelector(Ai(a))||(n=l.createElement("link"),kn(n,"link",e),Pe(n),l.head.appendChild(n)))}}function P_(e,n){dl.m(e,n);var t=Na;if(t&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+gn(l)+'"][href="'+gn(e)+'"]',a=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ta(e)}if(!yt.has(a)&&(e=k({rel:"modulepreload",href:e},n),yt.set(a,e),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ai(a)))return}l=t.createElement("link"),kn(l,"link",e),Pe(l),t.head.appendChild(l)}}}function W_(e,n,t){dl.S(e,n,t);var l=Na;if(l&&e){var r=Yt(l).hoistableStyles,a=ka(e);n=n||"default";var d=r.get(a);if(!d){var p={loading:0,preload:null};if(d=l.querySelector(Mi(a)))p.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":n},t),(t=yt.get(a))&&Tu(e,t);var S=d=l.createElement("link");Pe(S),kn(S,"link",e),S._p=new Promise(function(M,G){S.onload=M,S.onerror=G}),S.addEventListener("load",function(){p.loading|=1}),S.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Ws(d,n,l)}d={type:"stylesheet",instance:d,count:1,state:p},r.set(a,d)}}}function J_(e,n){dl.X(e,n);var t=Na;if(t&&e){var l=Yt(t).hoistableScripts,r=Ta(e),a=l.get(r);a||(a=t.querySelector(Ai(r)),a||(e=k({src:e,async:!0},n),(n=yt.get(r))&&Ru(e,n),a=t.createElement("script"),Pe(a),kn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(r,a))}}function eg(e,n){dl.M(e,n);var t=Na;if(t&&e){var l=Yt(t).hoistableScripts,r=Ta(e),a=l.get(r);a||(a=t.querySelector(Ai(r)),a||(e=k({src:e,async:!0,type:"module"},n),(n=yt.get(r))&&Ru(e,n),a=t.createElement("script"),Pe(a),kn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(r,a))}}function dh(e,n,t,l){var r=(r=Z.current)?Ps(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=ka(t.href),t=Yt(r).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ka(t.href);var a=Yt(r).hoistableStyles,d=a.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,d),(a=r.querySelector(Mi(e)))&&!a._p&&(d.instance=a,d.state.loading=5),yt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},yt.set(e,t),a||ng(r,e,t,d.state))),n&&l===null)throw Error(s(528,""));return d}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ta(t),t=Yt(r).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ka(e){return'href="'+gn(e)+'"'}function Mi(e){return'link[rel="stylesheet"]['+e+"]"}function mh(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function ng(e,n,t,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),kn(n,"link",t),Pe(n),e.head.appendChild(n))}function Ta(e){return'[src="'+gn(e)+'"]'}function Ai(e){return"script[async]"+e}function hh(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+gn(t.href)+'"]');if(l)return n.instance=l,Pe(l),l;var r=k({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Pe(l),kn(l,"style",r),Ws(l,t.precedence,e),n.instance=l;case"stylesheet":r=ka(t.href);var a=e.querySelector(Mi(r));if(a)return n.state.loading|=4,n.instance=a,Pe(a),a;l=mh(t),(r=yt.get(r))&&Tu(l,r),a=(e.ownerDocument||e).createElement("link"),Pe(a);var d=a;return d._p=new Promise(function(p,S){d.onload=p,d.onerror=S}),kn(a,"link",l),n.state.loading|=4,Ws(a,t.precedence,e),n.instance=a;case"script":return a=Ta(t.src),(r=e.querySelector(Ai(a)))?(n.instance=r,Pe(r),r):(l=t,(r=yt.get(a))&&(l=k({},t),Ru(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Pe(r),kn(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Ws(l,t.precedence,e));return n.instance}function Ws(e,n,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,a=r,d=0;d<l.length;d++){var p=l[d];if(p.dataset.precedence===n)a=p;else if(a!==r)break}a?a.parentNode.insertBefore(e,a.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Tu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ru(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Js=null;function ph(e,n,t){if(Js===null){var l=new Map,r=Js=new Map;r.set(t,l)}else r=Js,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var a=t[r];if(!(a[Bn]||a[ln]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var d=a.getAttribute(n)||"";d=e+d;var p=l.get(d);p?p.push(a):l.set(d,[a])}}return l}function _h(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function tg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function gh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lg(e,n,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=ka(l.href),a=n.querySelector(Mi(r));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=eo.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=a,Pe(a);return}a=n.ownerDocument||n,l=mh(l),(r=yt.get(r))&&Tu(l,r),a=a.createElement("link"),Pe(a);var d=a;d._p=new Promise(function(p,S){d.onload=p,d.onerror=S}),kn(a,"link",l),t.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=eo.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Mu=0;function rg(e,n){return e.stylesheets&&e.count===0&&to(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&to(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+n);0<e.imgBytes&&Mu===0&&(Mu=62500*U_());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&to(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Mu?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function eo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)to(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var no=null;function to(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,no=new Map,n.forEach(ag,e),no=null,eo.call(e))}function ag(e,n){if(!(n.state.loading&4)){var t=no.get(e);if(t)var l=t.get(null);else{t=new Map,no.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var d=r[a];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(t.set(d.dataset.precedence,d),l=d)}l&&t.set(null,l)}r=n.instance,d=r.getAttribute("data-precedence"),a=t.get(d)||l,a===l&&t.set(null,r),t.set(d,r),this.count++,l=eo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),a?a.parentNode.insertBefore(r,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Di={$$typeof:oe,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function ig(e,n,t,l,r,a,d,p,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function bh(e,n,t,l,r,a,d,p,S,M,G,X){return e=new ig(e,n,t,d,S,M,G,X,p),n=1,a===!0&&(n|=24),a=Zn(3,null,null,n),e.current=a,a.stateNode=e,n=oc(),n.refCount++,e.pooledCache=n,n.refCount++,a.memoizedState={element:l,isDehydrated:t,cache:n},dc(a),e}function yh(e){return e?(e=ra,e):ra}function vh(e,n,t,l,r,a){r=yh(r),l.context===null?l.context=r:l.pendingContext=r,l=Cl(n),l.payload={element:t},a=a===void 0?null:a,a!==null&&(l.callback=a),t=zl(e,l,n),t!==null&&(qn(t,e,n),ci(t,e,n))}function xh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Au(e,n){xh(e,n),(e=e.alternate)&&xh(e,n)}function Sh(e){if(e.tag===13||e.tag===31){var n=gr(e,67108864);n!==null&&qn(n,e,67108864),Au(e,67108864)}}function Eh(e){if(e.tag===13||e.tag===31){var n=nt();n=xl(n);var t=gr(e,n);t!==null&&qn(t,e,n),Au(e,n)}}var lo=!0;function sg(e,n,t,l){var r=O.T;O.T=null;var a=Y.p;try{Y.p=2,Du(e,n,t,l)}finally{Y.p=a,O.T=r}}function og(e,n,t,l){var r=O.T;O.T=null;var a=Y.p;try{Y.p=8,Du(e,n,t,l)}finally{Y.p=a,O.T=r}}function Du(e,n,t,l){if(lo){var r=ju(l);if(r===null)gu(e,n,l,ro,t),Nh(e,l);else if(ug(r,e,n,t,l))l.stopPropagation();else if(Nh(e,l),n&4&&-1<cg.indexOf(e)){for(;r!==null;){var a=Kn(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var d=xn(a.pendingLanes);if(d!==0){var p=a;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var S=1<<31-vn(d);p.entanglements[1]|=S,d&=~S}Ut(a),(Le&6)===0&&(Gs=Tn()+500,Ni(0))}}break;case 31:case 13:p=gr(a,2),p!==null&&qn(p,a,2),Ys(),Au(a,2)}if(a=ju(l),a===null&&gu(e,n,l,ro,t),a===r)break;r=a}r!==null&&l.stopPropagation()}else gu(e,n,l,null,t)}}function ju(e){return e=Ia(e),Ou(e)}var ro=null;function Ou(e){if(ro=null,e=Ln(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=_(n),e!==null)return e;e=null}else if(t===31){if(e=b(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ro=e,null}function wh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Br()){case Lr:return 2;case Ga:return 8;case nr:case at:return 32;case it:return 268435456;default:return 32}default:return 32}}var Cu=!1,Kl=null,Il=null,Fl=null,ji=new Map,Oi=new Map,Ql=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nh(e,n){switch(e){case"focusin":case"focusout":Kl=null;break;case"dragenter":case"dragleave":Il=null;break;case"mouseover":case"mouseout":Fl=null;break;case"pointerover":case"pointerout":ji.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(n.pointerId)}}function Ci(e,n,t,l,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:a,targetContainers:[r]},n!==null&&(n=Kn(n),n!==null&&Sh(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function ug(e,n,t,l,r){switch(n){case"focusin":return Kl=Ci(Kl,e,n,t,l,r),!0;case"dragenter":return Il=Ci(Il,e,n,t,l,r),!0;case"mouseover":return Fl=Ci(Fl,e,n,t,l,r),!0;case"pointerover":var a=r.pointerId;return ji.set(a,Ci(ji.get(a)||null,e,n,t,l,r)),!0;case"gotpointercapture":return a=r.pointerId,Oi.set(a,Ci(Oi.get(a)||null,e,n,t,l,r)),!0}return!1}function kh(e){var n=Ln(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=_(t),n!==null){e.blockedOn=n,Ya(e.priority,function(){Eh(t)});return}}else if(n===31){if(n=b(t),n!==null){e.blockedOn=n,Ya(e.priority,function(){Eh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ju(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Ka=l,t.target.dispatchEvent(l),Ka=null}else return n=Kn(t),n!==null&&Sh(n),e.blockedOn=t,!1;n.shift()}return!0}function Th(e,n,t){ao(e)&&t.delete(n)}function fg(){Cu=!1,Kl!==null&&ao(Kl)&&(Kl=null),Il!==null&&ao(Il)&&(Il=null),Fl!==null&&ao(Fl)&&(Fl=null),ji.forEach(Th),Oi.forEach(Th)}function io(e,n){e.blockedOn===n&&(e.blockedOn=null,Cu||(Cu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,fg)))}var so=null;function Rh(e){so!==e&&(so=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){so===e&&(so=null);for(var n=0;n<e.length;n+=3){var t=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Ou(l||t)===null)continue;break}var a=Kn(t);a!==null&&(e.splice(n,3),n-=3,jc(a,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function Ra(e){function n(S){return io(S,e)}Kl!==null&&io(Kl,e),Il!==null&&io(Il,e),Fl!==null&&io(Fl,e),ji.forEach(n),Oi.forEach(n);for(var t=0;t<Ql.length;t++){var l=Ql[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ql.length&&(t=Ql[0],t.blockedOn===null);)kh(t),t.blockedOn===null&&Ql.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],a=t[l+1],d=r[rn]||null;if(typeof a=="function")d||Rh(t);else if(d){var p=null;if(a&&a.hasAttribute("formAction")){if(r=a,d=a[rn]||null)p=d.formAction;else if(Ou(r)!==null)continue}else p=d.action;typeof p=="function"?t[l+1]=p:(t.splice(l,3),l-=3),Rh(t)}}}function Mh(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function zu(e){this._internalRoot=e}oo.prototype.render=zu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var t=n.current,l=nt();vh(t,l,e,n,null,null)},oo.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vh(e.current,2,null,e,null,null),Ys(),n[st]=null}};function oo(e){this._internalRoot=e}oo.prototype.unstable_scheduleHydration=function(e){if(e){var n=un();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ql.length&&n!==0&&n<Ql[t].priority;t++);Ql.splice(t,0,e),t===0&&kh(e)}};var Ah=i.version;if(Ah!=="19.2.7")throw Error(s(527,Ah,"19.2.7"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var dg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{tr=co.inject(dg),pn=co}catch{}}return Bi.createRoot=function(e,n){if(!c(e))throw Error(s(299));var t=!1,l="",r=Ld,a=Ud,d=Hd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=bh(e,1,!1,null,null,t,l,null,r,a,d,Mh),e[st]=n.current,_u(e),new zu(n)},Bi.hydrateRoot=function(e,n,t){if(!c(e))throw Error(s(299));var l=!1,r="",a=Ld,d=Ud,p=Hd,S=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.formState!==void 0&&(S=t.formState)),n=bh(e,1,!0,n,t??null,l,r,S,a,d,p,Mh),n.context=yh(null),t=n.current,l=nt(),l=xl(l),r=Cl(l),r.callback=null,zl(t,r,l),t=l,n.current.lanes=t,lr(n,t),Ut(n),e[st]=n.current,_u(e),new oo(n)},Bi.version="19.2.7",Bi}var Gh;function wg(){if(Gh)return Uu.exports;Gh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Uu.exports=Eg(),Uu.exports}var Ng=wg();const kg=Tp(Ng),Vh=o=>{let i;const u=new Set,s=(y,E)=>{const k=typeof y=="function"?y(i):y;if(!Object.is(k,i)){const j=i;i=E??(typeof k!="object"||k===null)?k:Object.assign({},i,k),u.forEach(F=>F(i,j))}},c=()=>i,b={setState:s,getState:c,getInitialState:()=>v,subscribe:y=>(u.add(y),()=>u.delete(y))},v=i=o(s,c,b);return b},Tg=(o=>o?Vh(o):Vh),Rg=o=>o;function Mg(o,i=Rg){const u=Yi.useSyncExternalStore(o.subscribe,Yi.useCallback(()=>i(o.getState()),[o,i]),Yi.useCallback(()=>i(o.getInitialState()),[o,i]));return Yi.useDebugValue(u),u}const Yh=o=>{const i=Tg(o),u=s=>Mg(i,s);return Object.assign(u,i),u},Ag=(o=>o?Yh(o):Yh);function Dg(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let u=0;u<o.length;u+=1)o[u]=Math.floor(Math.random()*256);let i="";for(const u of o)i+=u.toString(16).padStart(2,"0");return i}const of="pkp.user",cf="pkp.savedDevices",uf="pkp.ideDrafts",ff="pkp.ideSettings",Xi="Prototype Version 0.6.7";function vo(o){try{const i=localStorage.getItem(o);return i?JSON.parse(i):null}catch{return null}}function xo(o,i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}}function jg(){const o=vo(of);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function qh(o){xo(of,o)}function df(){return vo(cf)??[]}function So(o){xo(cf,o)}function Og(){So([])}function Cg(){try{localStorage.removeItem(of),localStorage.removeItem(cf),localStorage.removeItem(uf),localStorage.removeItem(ff)}catch{}}function Yu(){var o;return((o=vo(uf))==null?void 0:o.filter(i=>i.path&&typeof i.content=="string"))??[]}function qu(o){xo(uf,o)}function Xh(){const o=vo(ff)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function zg(o){xo(ff,o)}function Xu(o){const i=df(),u=i.findIndex(s=>s.deviceID===o.deviceID);return u>=0?i[u]=o:i.push(o),So(i),i}function Bg(o){const i=df().filter(u=>u.deviceID!==o);return So(i),i}const Ju="b8e06067-62ad-41ba-9231-206ae80ab551",Lg="f897177b-aee8-4767-8ecc-cc694fd5fce0",Ug="f897177b-aee8-4767-8ecc-cc694fd5fce1",$u=20,Hg=12,Gg=new TextEncoder,Vg=new TextDecoder;function Yg(o){return new Promise(i=>setTimeout(i,o))}function Eo(){return typeof navigator<"u"&&"bluetooth"in navigator}function ef(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function qg(){if(!Eo())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Ju]},{namePrefix:"PicoW-"}],optionalServices:[Ju]})}async function Rp(){if(!Eo()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Xg{constructor(){ue(this,"device",null);ue(this,"writeChar",null);ue(this,"notifyChar",null);ue(this,"buffer","");ue(this,"writeQueue",Promise.resolve());ue(this,"disconnectNotified",!1);ue(this,"onLine",()=>{});ue(this,"onDisconnect",()=>{});ue(this,"handleNotification",i=>{const u=i.target;if(!(u!=null&&u.value))return;this.buffer+=Vg.decode(u.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const c=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),c&&this.onLine(c),s=this.buffer.indexOf(`
`)}});ue(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,u;return!!((u=(i=this.device)==null?void 0:i.gatt)!=null&&u.connected)}async connect(i){var c;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const u=await((c=i.gatt)==null?void 0:c.connect());if(!u)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await u.getPrimaryService(Ju);this.writeChar=await s.getCharacteristic(Lg),this.notifyChar=await s.getCharacteristic(Ug),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const u=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=u.catch(()=>{}),u}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const u=Gg.encode(`${i}
`),c=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<u.length;h+=$u){const _=u.slice(h,h+$u);await c(_),h+$u<u.length&&await Yg(Hg)}}disconnect(){var u;const i=this.device;(u=i==null?void 0:i.gatt)!=null&&u.connected?i.gatt.disconnect():this.handleDisconnected()}}class $g{constructor(i,u){ue(this,"send");ue(this,"onMessage");ue(this,"inActive",!1);ue(this,"inExpectedTotal",0);ue(this,"inStreamId",0);ue(this,"inParts",new Map);ue(this,"inProgress",null);ue(this,"outPendingLines",null);ue(this,"outWaitingAck",!1);ue(this,"outStreamId",0);ue(this,"outNextStreamId",1);ue(this,"outCache",new Map);ue(this,"outProgress",null);this.send=i,this.onMessage=u}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null}handleLine(i){var s;if(i.startsWith("prep,")){const c=i.split(","),h=c.length>=2&&/^\d+$/.test(c[1])?parseInt(c[1],10):null,_=c.length>=3&&/^\d+$/.test(c[2])?parseInt(c[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const c=i.split(",");if(c.length>=3&&/^\d+$/.test(c[1])&&/^\d+$/.test(c[2])){const h=parseInt(c[1],10),_=parseInt(c[2],10),b=this.outCache.get(_);h===this.outStreamId&&b&&this.send(b)}return}const u=this.parseNumbered(i);if(u){const{idx:c,payload:h}=u;if(!this.inActive){this.onMessage(h);return}this.inParts.has(c)||(this.inParts.set(c,h),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let b=1;b<=this.inExpectedTotal;b+=1)if(!this.inParts.has(b)){_=b;break}if(_>0&&this.inStreamId>0&&c>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let b=1;b<=this.inExpectedTotal;b+=1){const v=this.inParts.get(b);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,u){const s=i.length===0?[""]:i;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=u??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear(),await this.send(`prep,${s.length},${this.outStreamId}`)}async flushOutbound(){var u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null;return}const i=this.outPendingLines.length;for(let s=0;s<i;s+=1){const c=this.outPendingLines[s],h=`${s+1}-${c}`;this.outCache.set(s+1,h),await this.send(h),(u=this.outProgress)==null||u.call(this,s+1,i,c)}this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}parseNumbered(i){const u=i.indexOf("-");if(u<=0)return null;const s=i.slice(0,u);if(!/^\d+$/.test(s))return null;const c=parseInt(s,10);return c<1?null:{idx:c,payload:i.slice(u+1)}}}const Ca=11,$i=31,Kg=2,Ig=60,Da=4,ja=40;function Fg(o,i){return Math.max(14,Math.min(56,Math.min(o,i)*.05))}function Mp(o,i,u=Ca,s=$i){const c=Fg(o,i),h=Math.max(1,o-2*c),_=Math.max(1,i-2*c);return{areaW:o,areaH:i,cols:u,rows:s,margin:c,stepX:h/Math.max(1,u-1),stepY:_/Math.max(1,s-1)}}function Ap(o,i){return i.margin+o/2*i.stepX}function Dp(o,i){const u=i.margin+o/2*i.stepY;return i.areaH-u}function qi(o,i){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:Ap(o.centerX2,i),cy:Dp(o.centerY2,i),width:o.spanX*i.stepX,height:o.spanY*i.stepY}}function Qg(o){const i=[];for(let u=0;u<o.cols;u+=1)for(let s=0;s<o.rows;s+=1)i.push({x:o.margin+u*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return i}function ho(o,i,u,s,c){const h=(v,y,E,k)=>{const j=y%2,F=k*2;let Q=j,le=1/0;for(let U=j;U<=F;U+=2){const H=Math.abs(E(U)-v);H<le&&(le=H,Q=U)}return Math.max(y,Math.min(F-y,Q))},_=h(o,u,v=>Ap(v,c),c.cols-1),b=h(i,s,v=>Dp(v,c),c.rows-1);return{centerX2:_,centerY2:b}}const jr=6e3,Zg=15,bo=[32,64,128,192],Pg=jr*4,Wg=3500,Jg=8e3,eb=2,nb=jr,tb=jr*8;function Ku(o){return new Promise(i=>setTimeout(i,o))}function Ma(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function $h(o){return o instanceof DOMException&&o.name==="AbortError"}function Pl(o){return o.replace(/[\r\n,]/g," ").trim()}class lb{constructor(i={}){ue(this,"transport",new Xg);ue(this,"stream");ue(this,"events");ue(this,"waiters",[]);ue(this,"collectingLayout",!1);ue(this,"layoutBuffer",[]);ue(this,"layoutResolve",null);ue(this,"collectingLines",!1);ue(this,"lineBuffer",[]);ue(this,"lineResolve",null);ue(this,"lineReject",null);ue(this,"lineCollectId",0);ue(this,"controlPumpActive",!1);ue(this,"pendingButtons",[]);ue(this,"pendingSliders",new Map);ue(this,"pendingToggles",new Map);ue(this,"expectingDisconnect",!1);ue(this,"busy",!1);ue(this,"fsCapabilities",null);this.events=i,this.stream=new $g(u=>this.transport.writeLine(u),u=>this.onDeviceMessage(u)),this.transport.onLine=u=>this.stream.handleLine(u),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return ef((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(i,u){var s,c;(c=(s=this.events).onLog)==null||c.call(s,i,u)}progress(i,u){var s,c;(c=(s=this.events).onProgress)==null||c.call(s,i,u)}onDeviceMessage(i){var s,c;if(i==="disconnect"){this.log("warning","Enheden afbrød forbindelsen."),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(c=this.layoutResolve)==null||c.call(this,h),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const u=this.waiters.findIndex(h=>h.match(i));if(u>=0){const h=this.waiters[u];this.waiters.splice(u,1),clearTimeout(h.timer),h.resolve(i)}}waitFor(i,u,s){return new Promise((c,h)=>{const _=setTimeout(()=>{const b=this.waiters.findIndex(v=>v.timer===_);b>=0&&this.waiters.splice(b,1),h(new Error(`Timeout: ${s}`))},u);this.waiters.push({match:i,resolve:c,reject:h,timer:_})})}async collectLines(i,u,s,c,h){Ma(c);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const b=new Promise((v,y)=>{let E=!1;const k=()=>this.lineCollectId===_,j=()=>{E=!0,k()&&(this.lineReject=null,this.stream.setInboundProgress(null)),c==null||c.removeEventListener("abort",Q)},F=H=>{E||(clearTimeout(le),k()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),j(),y(H))},Q=()=>{F(new DOMException("BLE file read cancelled","AbortError"))},le=setTimeout(()=>{k()&&F(new Error(`Timeout: ${s}`))},u);this.lineResolve=v,this.lineReject=F;const U=this.lineResolve;this.lineResolve=H=>{k()&&(clearTimeout(le),j(),U==null||U(H))},c==null||c.addEventListener("abort",Q,{once:!0})});return await this.transport.writeLine(i),b}async exchange(i,u,s,c=3){let h;for(let _=1;_<=c;_+=1)try{return await this.transport.writeLine(i),await this.waitFor(u,jr,s)}catch(b){h=b,this.log("warning",`${s}: forsøg ${_}/${c} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${s}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var le;await Ku(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",U=>U==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const u=await this.exchange("who_are_you",U=>U==="unowned"||U.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),u==="unowned")return{kind:"unowned"};const s=u.split(","),c=s[1]??"",h=s[2]!==void 0&&parseInt(s[2],10)||0,_=s[3]!==void 0?parseInt(s[3],10)===1:!0,b=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=((le=s[5])==null?void 0:le.trim())||void 0;await this.exchange("ACK:ownership",U=>U==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const y=await this.exchange(`request_permission,${i.userID},${Pl(i.username)}`,U=>U.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const E=y.split(",").filter(U=>/^\d+$/.test(U)),k=E.length>=1?parseInt(E[E.length-2]??"0",10):0,j=E.length>=1?parseInt(E[E.length-1]??"0",10):0;if(k===0)return this.expectingDisconnect=!0,{kind:"denied",ownerName:v,canOthersConnect:_};const F=i.userID===c,Q=j===1||F;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:c,ownerName:v,iconID:h,canEdit:Q,isOwnedByMe:F,canOthersConnect:_,canOthersEdit:b}}async create(i,u,s,c,h,_){const b=s?1:0,v=s&&c?1:0;await this.exchange(`create,${i.userID},${Pl(i.username)},${u},${b},${v},${h},${_}`,y=>y==="ACK:create","create")}async updateDeviceSettings(i,u,s,c,h,_){const b=u?1:0,v=u&&s?1:0;await this.exchange(`settings_update,${i},${b},${v},${c},${h},${Pl(_??"")}`,y=>y==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((s,c)=>{this.layoutResolve=s;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,c(new Error("Timeout: layout")))},jr*2),_=this.layoutResolve;this.layoutResolve=b=>{clearTimeout(h),_==null||_(b)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const u=await i;return this.progress(100,"Klar"),u}async saveLayout(i){await this.exchange("update",c=>c==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const u=i.map(c=>{const h=b=>b===null?"n":String(b),_=`update,${c.type},${c.name},${h(c.centerX2)},${h(c.centerY2)},${h(c.spanX)},${h(c.spanY)},${c.rotation}`;return c.type==="slider"?`${_},${c.sliderMin??0},${c.sliderMax??100},${c.sliderRecenter??"none"}`:c.type==="toggle"?`${_},${c.toggleInitial?1:0}`:c.type==="radar"?[_,c.radarMinAngle??0,c.radarMaxAngle??180,c.radarMaxDistance??200,c.radarFadeMs??1200].join(","):_});u.push("__END__");const s=this.waitFor(c=>c==="LAYOUT_SAVED",jr*2,"LAYOUT_SAVED");await this.stream.sendReliable(u),await s}async listFiles(i="/"){return(await this.collectLines(`fs_list,${Pl(i)}`,jr*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,c,h,_]=s.split(","),b=c==="file"||c==="dir"?c:"unknown",v=parseInt(_??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:b,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(i){var _,b,v;const u=i.split(",");if(u.length<4)return;const s=(_=u[1])==null?void 0:_.trim(),c=parseFloat(u[2]??""),h=parseFloat(u[3]??"");!s||!Number.isFinite(c)||!Number.isFinite(h)||((v=(b=this.events).onRadar)==null||v.call(b,s,c,h),this.log("info",`rx: ${i}`))}handleTextLine(i){var b,v;const u=i.indexOf(","),s=u>=0?i.indexOf(",",u+1):-1;if(u<0||s<0)return;const c=i.slice(u+1,s),h=i.slice(s+1),_=c==null?void 0:c.trim();_&&((v=(b=this.events).onText)==null||v.call(b,_,h),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var h,_,b;const u=i.split(",");if(u.length<3)return;const s=(h=u[1])==null?void 0:h.trim(),c=parseInt(u[2]??"",10);!s||!Number.isFinite(c)||((b=(_=this.events).onToggleState)==null||b.call(_,s,c===1),this.log("info",`rx: ${i}`))}async readText(i,u,s){u==null||u(4,"Validerer Picoens Bluetooth-filsystem...");const c=await this.getFilesystemCapabilities(s);if(c.streamRead)try{return await this.readTextStream(i,c,u,s)}catch(h){if(s!=null&&s.aborted||$h(h)||!c.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,u,s)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const u=await this.collectLines("fs_capabilities",nb,"fs_capabilities",i),s=u.find(E=>E.startsWith("ERR"));if(s)throw new Error(s);const c=u.find(E=>E.startsWith("fs_capabilities,"));if(!c)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=c.split(","),_=new Map;for(let E=1;E<h.length-1;E+=2)_.set(h[E],h[E+1]);const b=parseInt(_.get("max_page")??"",10),v=parseInt(_.get("stream_chunk")??"",10),y={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(b)&&b>0?b:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,u,s){const c=await this.getFilesystemCapabilities(s);let h=0,_=rb(c.maxPageSize),b=0,v=null,y="";const E=`Indlæser ${Kh(i)}...`;Ma(s),u==null||u(5,E);for(let k=0;k<512;k+=1){Ma(s),b===0&&(u==null||u(7,E));const F=await this.readPageWithRetry(i,b,h,_,s),Q=F.lines;h=F.nextPageSizeIndex,_=F.maxPageSizeIndex,Ma(s);const le=Q.find(W=>W.startsWith("ERR"));if(le)throw new Error(le);const U=Q.find(W=>W.startsWith("fs_page,"));if(!U)throw new Error("ERR: fs_read_page missing data");const[,H,pe,oe,xe=""]=U.split(",",5);if(H!==i)throw new Error("ERR: fs_read_page stale data");const fe=parseInt(pe??"",10),Ne=parseInt(oe??"",10);if(!Number.isFinite(fe)||fe!==b||!Number.isFinite(Ne))throw new Error("ERR: fs_read_page invalid data");v=Ne,y+=xe,b+=Math.floor(xe.length/2);const ee=v>0?8+Math.min(87,Math.round(b/v*87)):95;if(u==null||u(ee,E),b>=v||xe.length===0)return u==null||u(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Ih(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,u,s,c,h){let _,b=Math.min(s,c);for(;b>=0;){const v=bo[b],y=b===0?eb:1,E=b===0?Jg:Wg;for(let k=1;k<=y;k+=1){Ma(h);try{return{lines:await this.collectLines(`fs_read_page,${Pl(i)},${u},${v}`,E,`fs_read_page ${u}`,h),nextPageSizeIndex:Math.min(b+1,c),maxPageSizeIndex:c}}catch(j){if(h!=null&&h.aborted||$h(j))throw j;if(_=j,k<y||b>0){const Q=b>0&&k>=y?bo[b-1]:v;this.log("warning",`fs_read_page ${u} (${v} bytes) fejlede; prøver ${Q} bytes`),await Ku(80+k*80)}}}if(b===0)break;c=Math.max(0,b-1),b=c}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${u}`)}async readTextStream(i,u,s,c){const h=`Indlæser ${Kh(i)}...`,_=Math.max(16,Math.min(192,u.streamChunkSize||128));s==null||s(5,h);const b=await this.collectLines(`fs_read_stream,${Pl(i)},${_}`,tb,`fs_read_stream ${i}`,c,(ee,W)=>{const be=8+Math.round(Math.min(ee,W)/Math.max(1,W)*87);s==null||s(Math.min(95,be),h)});Ma(c);const v=b.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const y=b.find(ee=>ee.startsWith("fs_stream_begin,")),E=b.find(ee=>ee.startsWith("fs_stream_end,"));if(!y||!E)throw new Error("ERR: fs_read_stream missing metadata");const[,k,j]=y.split(",",4),[,F,Q,le]=E.split(",",4),U=parseInt(j??"",10),H=parseInt(Q??"",10),pe=parseInt(le??"",10);if(k!==i||F!==i||!Number.isFinite(U)||U!==H||!Number.isFinite(pe))throw new Error("ERR: fs_read_stream invalid metadata");let oe=0,xe="";for(const ee of b){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,W,be=""]=ee.split(",",3),_e=parseInt(W??"",10);if(!Number.isFinite(_e)||_e!==oe||be.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");xe+=be,oe+=Math.floor(be.length/2)}if(oe!==U)throw new Error("ERR: fs_read_stream size mismatch");const fe=Ih(xe);if(ab(fe)!==pe)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(fe)}async writeText(i,u,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Pl(i)}`,y=>y==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const c=new TextEncoder().encode(u),h=[...c].map(y=>y.toString(16).padStart(2,"0")).join(""),_=[];for(let y=0;y<h.length;y+=160)_.push(`fs_write_chunk,${h.slice(y,y+160)}`);_.push("fs_write_end");const b=this.waitFor(y=>y==="ACK:fs_write_done"||y.startsWith("ERR"),Pg,"fs_write_done");s==null||s(c.length===0?85:18,c.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${c.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(y,E,k)=>{if(!k.startsWith("fs_write_chunk,"))return;const j=Math.min(c.length,y*80),F=18+Math.round(y/Math.max(1,E-1)*67);s==null||s(Math.min(85,F),`Sender ${j}/${c.length} bytes via Bluetooth...`)});const v=await b;if(v.startsWith("ERR"))throw new Error(v);s==null||s(100,"Gemt på Pico")}async deleteFile(i){const u=await this.exchange(`fs_delete,${Pl(i)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(u.startsWith("ERR"))throw new Error(u)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i){this.busy||(this.pendingButtons.push(`button,${i}`),this.pumpControls())}enqueueSlider(i,u){this.busy||(this.pendingSliders.set(i,`slider,${i}:${u}`),this.pumpControls())}enqueueToggle(i,u){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${u?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Ku(Zg)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const u=this.pendingSliders.entries().next();if(!u.done){const[c,h]=u.value;return this.pendingSliders.delete(c),h}const s=this.pendingToggles.entries().next();if(!s.done){const[c,h]=s.value;return this.pendingToggles.delete(c),h}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var i,u,s;for(const c of this.waiters)clearTimeout(c.timer),c.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(i=this.lineReject)==null||i.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset(),(s=(u=this.events).onDisconnect)==null||s.call(u)}}function rb(o){let i=0;for(let u=0;u<bo.length;u+=1)bo[u]<=o&&(i=u);return i}function Kh(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function ab(o){let i=0;for(const u of o)i=i+u>>>0;return i}function Ih(o){const i=new Uint8Array(Math.floor(o.length/2));for(let u=0;u<i.length;u+=1)i[u]=parseInt(o.slice(u*2,u*2+2),16);return i}function Fh(o){const i=(u,s)=>Number.isFinite(u)?Math.max(Kg,Math.min(Ig,u)):s;for(const u of o){const s=u.trim();if(s.startsWith("#GRID,")){const c=s.split(","),h=i(parseInt(c[1],10),Ca),_=i(parseInt(c[2],10),$i);return{cols:h,rows:_}}}return{cols:Ca,rows:$i}}function Qh(o){const i=new Map;for(const u of o){const s=u.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const c=s.split(",");if(c.length<7)continue;const[h,_,b,v,y,E,k,j,F,Q,le]=c;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"||i.has(_))continue;const U=_e=>{if(_e==="n")return null;const ve=parseInt(_e,10);return Number.isNaN(ve)?null:ve},H=parseInt(k,10)||0,pe=j!==void 0?parseInt(j,10):0,oe=F!==void 0?parseInt(F,10):100,xe=["none","bottom","middle","top"].includes(Q??"")?Q:"none",fe=j!==void 0?parseInt(j,10)===1:!1,Ne=j!==void 0?parseFloat(j):0,ee=F!==void 0?parseFloat(F):180,W=Q!==void 0?parseFloat(Q):200,be=le!==void 0?parseInt(le,10):1200;i.set(_,{type:h,name:_,centerX2:U(b),centerY2:U(v),spanX:U(y),spanY:U(E),rotation:[0,90,180,270].includes(H)?H:0,...h==="slider"?{sliderMin:Number.isFinite(pe)?pe:0,sliderMax:Number.isFinite(oe)?oe:100,sliderRecenter:xe}:{},...h==="toggle"?{toggleInitial:fe}:{},...h==="radar"?{radarMinAngle:Number.isFinite(Ne)?Ne:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(W)&&W>0?W:200,radarFadeMs:Number.isFinite(be)&&be>0?be:1200}:{}})}return[...i.values()]}let ne=null,Li=null,Zh=0,ml=!1;function ib(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Ph(o){return new Promise(i=>setTimeout(i,o))}function sb(o){return Object.fromEntries(o.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function Wh(o,i){const u=sb(o);for(const s of o)s.type==="toggle"&&i[s.name]!==void 0&&(u[s.name]=i[s.name]);return u}const J=Ag((o,i)=>{function u(c,h){o(_=>({logs:[{level:c,message:h,time:ib()},..._.logs].slice(0,200)}))}function s(c){Li&&clearTimeout(Li),Zh+=1,o({toast:{message:c,id:Zh}}),Li=setTimeout(()=>o({toast:null}),4500)}return ne=new lb({onProgress:(c,h)=>o({progress:{value:c,label:h}}),onLog:(c,h)=>u(c,h),onRadar:(c,h,_)=>{const b=Date.now(),v={id:`${b}-${Math.random().toString(36).slice(2)}`,angle:h,distance:_,createdAt:b};o(y=>{const E=y.layout.find(F=>F.type==="radar"&&F.name===c),k=(E==null?void 0:E.radarFadeMs)??1200,j=y.radarPings[c]??[];return{radarPings:{...y.radarPings,[c]:[...j.filter(F=>b-F.createdAt<=k),v].slice(-80)}}})},onText:(c,h)=>{o(_=>({textValues:{..._.textValues,[c]:h}}))},onToggleState:(c,h)=>{o(_=>({toggleValues:{..._.toggleValues,[c]:h}}))},onDisconnect:()=>{const{screen:c,active:h,picoIdeOrigin:_}=i();if(ml){ml=!1;return}if(c==="control"||c==="connection"||c==="create"||c==="ide"&&_==="control"){const b=h?{deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:b})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const c=jg(),h=df();o({user:c,savedDevices:h,splashTarget:c?"dashboard":"intro"})},finishSplash:()=>{const c=i().splashTarget;o({screen:c??"intro"})},createUser:c=>{const h=c.trim();if(!h)return;const _={username:h,userID:Dg()};qh(_),o({user:_,screen:"dashboard"})},findDevice:async()=>{try{const c=await qg();await i().connectToDevice(c)}catch(c){c instanceof Error&&c.name!=="NotFoundError"&&u("error",c.message)}},connectToDevice:async(c,h)=>{var b,v;const _=i().user;if(!(!_||!ne)){ml=!1,o({screen:"connection",connecting:{name:ef(c.name)||(h==null?void 0:h.deviceName)||"Pico",iconID:(h==null?void 0:h.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await ne.connect(c);const y=await ne.runHandshake(_),E=c.id,k=ef(c.name)||(h==null?void 0:h.deviceName)||"Pico";if(y.kind==="denied"){const H=`Du kan ikke forbinde, fordi ${((b=y.ownerName)==null?void 0:b.trim())||((v=h==null?void 0:h.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;u("warning",H),s(H),o({screen:"dashboard",connecting:null}),await ne.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:E,deviceName:k,iconID:0,canEdit:!0,canOthersConnect:!1,canOthersEdit:!1,isOwnedByMe:!0,ownerName:_.username,gridCols:Ca,gridRows:$i},screen:"create"});return}const j={deviceID:E,deviceName:k,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?_.username:y.ownerName??(h==null?void 0:h.ownerName)};o({savedDevices:Xu(j)});const F=await ne.requestLayout(),Q=Fh(F),le=Qh(F);o({layout:le,sliderValues:{},toggleValues:Wh(le,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:E,deviceName:k,iconID:y.iconID,canEdit:y.canEdit,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?_.username:y.ownerName??(h==null?void 0:h.ownerName),gridCols:Q.cols,gridRows:Q.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const E=y instanceof Error?y.message:"Forbindelsen mislykkedes.";u("error",E),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await ne.disconnect().catch(()=>{})}}},finishCreate:async(c,h,_,b,v)=>{const{user:y,active:E}=i();if(!(!y||!E||!ne))try{ne.setBusy(!0),await ne.create(y,c,h,_,b,v),ne.setBusy(!1);const k={deviceID:E.deviceID,deviceName:E.deviceName,deviceIconID:c,canOthersConnect:h,canOthersEdit:h&&_,isOwnedByMe:!0,ownerName:y.username};o({savedDevices:Xu(k)});const j=await ne.requestLayout(),F=Fh(j),Q=Qh(j);o({layout:Q,sliderValues:{},toggleValues:Wh(Q,i().toggleValues),radarPings:{},textValues:{},active:{...E,iconID:c,canEdit:!0,canOthersConnect:h,canOthersEdit:h&&_,ownerName:y.username,gridCols:F.cols,gridRows:F.rows},screen:"control"})}catch(k){ne.setBusy(!1);const j=k instanceof Error?k.message:"Oprettelse mislykkedes.";u("error",j),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await ne.disconnect().catch(()=>{})}},saveDeviceSettings:async(c,h,_,b,v)=>{const{active:y,user:E}=i();if(!(!y||!ne||!y.isOwnedByMe))try{ne.setBusy(!0),await ne.updateDeviceSettings(c,h,_,b,v,E==null?void 0:E.username);const k={...y,iconID:c,canEdit:!0,canOthersConnect:h,canOthersEdit:h&&_,ownerName:(E==null?void 0:E.username)??y.ownerName,gridCols:b,gridRows:v},j={deviceID:y.deviceID,deviceName:y.deviceName,deviceIconID:c,canOthersConnect:h,canOthersEdit:h&&_,isOwnedByMe:!0,ownerName:(E==null?void 0:E.username)??y.ownerName};o({active:k,savedDevices:Xu(j)}),s("Enhedsindstillinger gemt.")}catch(k){u("error",k instanceof Error?k.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ne.setBusy(!1)}},cancelCreate:async()=>{ne&&await ne.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{ml=!0,ne&&await ne.disconnect().catch(()=>{}),ml=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:c=>{o({savedDevices:Bg(c)})},clearSavedDevices:()=>{Og(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{ml=!0,ne!=null&&ne.connected&&await ne.disconnect().catch(()=>{}),Cg(),window.location.reload()},updateUsername:c=>{const h=i().user,_=c.trim();if(!h||!_)return;const b={...h,username:_};qh(b),o(v=>{var E;const y=v.savedDevices.map(k=>k.isOwnedByMe?{...k,ownerName:_}:k);return So(y),{user:b,active:(E=v.active)!=null&&E.isOwnedByMe?{...v.active,ownerName:_}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},openPicoIde:()=>{const c=i().screen==="control"&&!!(ne!=null&&ne.connected);o(h=>({screen:"ide",picoIdeOrigin:c?"control":"dashboard",active:c?h.active:null,layout:c?h.layout:[],sliderValues:c?h.sliderValues:{},toggleValues:c?h.toggleValues:{},radarPings:c?h.radarPings:{},textValues:c?h.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:c,active:h}=i();o({screen:c==="control"&&h&&(ne!=null&&ne.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ne!=null&&ne.connected),bleListFiles:async()=>ne!=null&&ne.connected?ne.listFiles("/"):[],bleReadText:async(c,h,_)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");return ne.readText(c,h,_)},bleWriteText:async(c,h,_)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.writeText(c,h,_)},bleDeleteFile:async c=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.deleteFile(c)},bleRestart:async()=>{ne!=null&&ne.connected&&await ne.restart()},bleRestartAndReconnect:async(c="control")=>{const{active:h}=i();if(!(ne!=null&&ne.connected)||!h)return!1;const _={deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName};ml=!0,u("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ne.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:_.deviceName,iconID:_.deviceIconID}});for(let b=0;b<12&&(ne!=null&&ne.connected);b+=1)await Ph(250);ne!=null&&ne.connected||(ml=!1);for(let b=1;b<=8;b+=1){await Ph(b===1?1200:850);try{const y=(await Rp()).find(E=>E.id===_.deviceID);if(!y){o({progress:{value:Math.min(88,20+b*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+b*8),label:`Genforbinder (${b}/8)...`}}),await i().connectToDevice(y,_),c==="ide"&&o(E=>({screen:"ide",picoIdeOrigin:"control",active:E.active,layout:E.layout,sliderValues:E.sliderValues,toggleValues:E.toggleValues,radarPings:E.radarPings,textValues:E.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){u("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),ml=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:_}),!1},reconnectLostDevice:async()=>{var h;const c=i().connectionLost;if(c){o({connectionLost:null});try{if((h=navigator.bluetooth)!=null&&h.getDevices){const b=(await navigator.bluetooth.getDevices()).find(v=>v.id===c.deviceID);if(b){await i().connectToDevice(b,c);return}}}catch{}u("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:c=>ne==null?void 0:ne.enqueueButton(c),sendSlider:(c,h)=>{o(_=>({sliderValues:{..._.sliderValues,[c]:h}})),ne==null||ne.enqueueSlider(c,h)},sendToggle:(c,h)=>{o(_=>({toggleValues:{..._.toggleValues,[c]:h}})),ne==null||ne.enqueueToggle(c,h)},saveLayout:async c=>{if(ne)try{ne.setBusy(!0),await ne.saveLayout(c),o({layout:c,editMode:!1})}catch(h){u("error",h instanceof Error?h.message:"Kunne ikke gemme layout.")}finally{ne.setBusy(!1)}},setEditMode:c=>o({editMode:c,sideMenuOpen:!1,menuPage:null}),setDashboardPage:c=>o({dashboardPage:c}),toggleSideMenu:c=>o(h=>({sideMenuOpen:c??!h.sideMenuOpen})),toggleDebugger:c=>o(h=>({debuggerOpen:c??!h.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:c=>o({menuPage:c,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(c,h)=>u(c,h),askConfirm:c=>o({confirmDialog:c}),closeConfirm:()=>o({confirmDialog:null}),showToast:c=>s(c),dismissToast:()=>{Li&&clearTimeout(Li),o({toast:null})}}}),wo="./",jp=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function Ba(o){const i=o>=0&&o<jp.length?o:0;return`${wo}device-icons/${i}.png`}const ob=`${wo}art/logo.png`,cb=`${wo}art/Teknologiskolen_logo.png`,ub=`${wo}art/logo_teknologiskolen_white.png`,fb={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function zn({name:o,size:i=24,className:u}){return f.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:u,"aria-hidden":"true",children:fb[o]})}const db=1850,mb=450;function hb(){const o=J(s=>s.splashTarget),i=J(s=>s.finishSplash),u=o?"splash-screen-animation splash-ready":"splash-pending";return V.useEffect(()=>{if(!o)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches?mb:db,h=window.setTimeout(i,c);return()=>window.clearTimeout(h)},[i,o]),f.jsxs("div",{className:`screen splash-screen ${u}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:ob,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Jh(){const o=J(c=>c.createUser),[i,u]=V.useState(""),s=i.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:cb,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${s?"filled":""}`,children:[f.jsx("input",{id:"username",value:i,onChange:c=>u(c.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(i),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:Xi})]})}function mf({title:o,onMenu:i}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:f.jsx(zn,{name:"menu"})})]})})}function yn({title:o,onClose:i,children:u,closeVariant:s="plain"}){const c=s==="circle",h=V.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:_=>{h.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&h.current&&i(),h.current=!1},children:f.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${c?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:f.jsx(zn,{name:c?"delete":"close",size:c?30:24})})]}),u]})})}function ep(){const o=J(j=>j.savedDevices),i=J(j=>j.toggleSideMenu),u=J(j=>j.findDevice),s=J(j=>j.removeSavedDevice),c=J(j=>j.askConfirm),h=J(j=>j.dashboardPage),_=J(j=>j.setDashboardPage),b=bb(),[v,y]=V.useState(null),E=Eo(),k=o.filter(j=>h==="mine"?j.isOwnedByMe:!j.isOwnedByMe).sort(gb);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(mf,{title:"Hovedmenu",onMenu:()=>i()}),f.jsxs("div",{className:"content dash-content",children:[!E&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:k.length===0?f.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):k.map(j=>f.jsx(pb,{device:j,disabled:!E,onConnect:()=>b(j),onSettings:()=>y(j)},j.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>u(),disabled:!E,"aria-label":"Find enhed",children:f.jsx(zn,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:Xi}),v&&f.jsx(yn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:Ba(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(uo,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(uo,{label:"Ejer",value:_b(v)}),f.jsx(uo,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(uo,{label:"Andre må redigere",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!E,onClick:()=>{const j=v;y(null),b(j)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>c({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function pb({device:o,disabled:i,onConnect:u,onSettings:s}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:u,disabled:i,children:[f.jsx("img",{className:"device-tile-icon",src:Ba(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:f.jsx(zn,{name:"settings"})})]})}function uo({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function _b(o){var i;return o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger"}function gb(o,i){return o.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function bb(){const o=J(s=>s.connectToDevice),i=J(s=>s.findDevice),u=J(s=>s.log);return async s=>{const h=(await Rp()).find(_=>_.id===s.deviceID);h?await o(h,s):(u("info","Genforbind: vælg enheden i browserens liste."),await i())}}function yb(){const o=J(u=>u.connecting),i=J(u=>u.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:Ba((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function Op({selected:o,onSelect:i,onClose:u}){return f.jsx(yn,{title:"Vælg Enhedens Ikon",onClose:u,children:f.jsx("div",{className:"icon-grid",children:jp.map(s=>f.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{i(s.id),u()},"aria-label":s.label,children:f.jsx("img",{src:Ba(s.id),alt:""})},s.id))})})}function vb(){const o=J(pe=>pe.finishCreate),i=J(pe=>pe.cancelCreate),[u,s]=V.useState(0),[c,h]=V.useState(!1),[_,b]=V.useState(!1),[v,y]=V.useState(!1),[E,k]=V.useState(Ca),[j,F]=V.useState($i),[Q,le]=V.useState(!1),U=pe=>Number.isFinite(pe)?Math.max(Da,Math.min(ja,Math.round(pe))):Ca;async function H(){le(!0),await o(u,_,_&&v,U(E),U(j))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:Ba(u),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(zn,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:_?"":"active",onClick:()=>b(!1),children:"Privat"}),f.jsx("button",{type:"button",className:_?"active":"",onClick:()=>b(!0),children:"Offentlig"})]}),_&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Da,max:ja,value:Number.isNaN(E)?"":E,onChange:pe=>k(parseInt(pe.target.value,10)),onBlur:()=>k(U(E))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Da,max:ja,value:Number.isNaN(j)?"":j,onChange:pe=>F(parseInt(pe.target.value,10)),onBlur:()=>F(U(j))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:Q,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:H,disabled:Q,children:Q?"Opretter...":"Opret"})]})]}),c&&f.jsx(Op,{selected:u,onSelect:s,onClose:()=>h(!1)}),f.jsx("span",{className:"version",children:Xi})]})}const za=8;function po(o){return Math.max(5,Math.min(22,o))}function yo(o,i,u){const s=Math.max(1,o.length),c=(i-za*2)/(s*.58),h=(u-za*2)*.48;return po(Math.min(c,h))}function xb(o,i,u,s,c){const h=o.trim().split(/\s+/).filter(Boolean),_=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),b=c?po(Math.min(i/4.6,u/4.6,12)):0,v=c?b+za:za;if(s){const k=Math.max(1,u-v*2);return{fontSize:po(Math.min(i*.48,k/(_*1.04))),endFontSize:b,centerInset:c?{top:v,bottom:v}:{}}}const y=Math.max(1,i-v*4.2);return{fontSize:po(Math.min(u*.42,y/(_*.58))),endFontSize:b,centerInset:c?{left:v*2.1,right:v*2.1}:{}}}function Sb({control:o,rect:i,disabled:u,latestValue:s,toggleValue:c,radarPings:h=[],textValue:_,onButton:b,onSlider:v,onToggle:y}){const E={left:i.cx,top:i.cy,width:i.width,height:i.height};if(o.type==="button")return f.jsx("div",{className:"control",style:E,children:f.jsx("button",{className:"control-button",type:"button",disabled:u,style:{width:"100%",height:"100%",fontSize:yo(o.name,i.width,i.height)},onPointerDown:k=>{u||(k.preventDefault(),b(o.name))},children:o.name})});if(o.type==="toggle"){const k=!!c;return f.jsx("div",{className:"control",style:E,children:f.jsx("button",{className:`control-toggle ${k?"on":""}`,type:"button",disabled:u,"aria-pressed":k,style:{width:"100%",height:"100%",fontSize:yo(o.name,i.width,i.height)},onPointerDown:j=>{u||(j.preventDefault(),y(o.name,!k))},children:f.jsx("span",{children:o.name})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:E,children:f.jsx(zp,{control:o,pings:h,width:i.width,height:i.height})}):o.type==="text"?f.jsx("div",{className:"control",style:E,children:f.jsx(Cp,{message:_??o.name,width:i.width,height:i.height})}):f.jsx("div",{className:"control",style:E,children:f.jsx(Cb,{control:o,disabled:u,latestValue:s,onSlider:v,width:i.width,height:i.height})})}function Eb(o,i,u){const s=o.trim()||" ",h=s.split(/\s+/).filter(Boolean).reduce((k,j)=>Math.max(k,j.length),1),_=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(h*1.9)))),b=Math.max(1,i-za*3),v=Math.max(1,u-za*3),y=b/(h*.58),E=v/(_*1.16);return Math.max(7,Math.min(24,y,E))}function Cp({message:o,width:i,height:u}){const s=o.trim()||"...";return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:Eb(s,i,u)},children:f.jsx("span",{children:s})})}function zp({control:o,pings:i,width:u,height:s,preview:c=!1}){const[,h]=V.useState(0),_=Math.max(120,o.radarFadeMs??1200),b=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=rt(b),E=rt(v),k=Math.abs(v-b)>=360||y===E&&b!==v,j=Math.max(1,o.radarMaxDistance??200),F=Date.now(),Q=i[i.length-1],le=o.rotation,U=rt(y+le),H=rt(E+le),pe=Ab(y,E),oe=((Q==null?void 0:Q.angle)??pe)+le,xe=c?[{id:"preview",angle:pe,distance:j*.62,createdAt:F}]:i.filter(O=>F-O.createdAt<=_),fe=!k,Ne=Math.max(8,Math.min(12,Math.min(u,s)*.16)),ee=0,W=0,be=1,_e=k?{x:-1.12,y:-1.12,width:2.24,height:2.24}:kb(U,H),ve=k?"":wb(ee,W,be,U,H),ae=rp(b),Ve=rp(v),De=fe?Rb(U,H,_e,u,s,ae,Ve,Ne):null;V.useEffect(()=>{if(c||i.length===0)return;const O=window.setInterval(()=>h(Y=>Y+1),120);return()=>window.clearInterval(O)},[_,i.length,c]);const Ze=xt(ee,W,be,oe);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:u,height:s,viewBox:`${_e.x} ${_e.y} ${_e.width} ${_e.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[k?f.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:W,r:be}):f.jsx("path",{className:"radar-sector-fill",d:ve}),[.25,.5,.75,1].map(O=>k?f.jsx("circle",{className:"radar-ring",cx:ee,cy:W,r:be*O},O):f.jsx("path",{className:"radar-ring",d:Nb(ee,W,be*O,U,H)},O)),!k&&f.jsx(np,{cx:ee,cy:W,radius:be,angle:U}),!k&&f.jsx(np,{cx:ee,cy:W,radius:be,angle:H}),f.jsx("line",{className:"radar-sweep",x1:ee,y1:W,x2:Ze.x,y2:Ze.y}),xe.map(O=>{const Y=c?0:F-O.createdAt,ie=Math.max(0,1-Y/_),Ee=Math.max(0,Math.min(j,O.distance)),de=xt(ee,W,be*(Ee/j),O.angle+le);return f.jsx("circle",{className:"radar-ping",cx:de.x,cy:de.y,r:Math.max(.025,Math.min(_e.width,_e.height)*.025),opacity:ie},O.id)})]}),fe&&De&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:De.min.x,top:De.min.y,fontSize:Ne},children:ae}),f.jsx("span",{className:"radar-angle-label",style:{left:De.max.x,top:De.max.y,fontSize:Ne},children:Ve})]})]})}function np({cx:o,cy:i,radius:u,angle:s}){const c=xt(o,i,u,s);return f.jsx("line",{className:"radar-boundary",x1:o,y1:i,x2:c.x,y2:c.y})}function xt(o,i,u,s){const c=(rt(s)-90)*Math.PI/180;return{x:o+Math.cos(c)*u,y:i+Math.sin(c)*u}}function wb(o,i,u,s,c){const h=xt(o,i,u,s),_=xt(o,i,u,c),b=hf(s,c)>180?1:0;return`M ${o} ${i} L ${h.x} ${h.y} A ${u} ${u} 0 ${b} 1 ${_.x} ${_.y} Z`}function Nb(o,i,u,s,c){const h=xt(o,i,u,s),_=xt(o,i,u,c),b=hf(s,c)>180?1:0;return`M ${h.x} ${h.y} A ${u} ${u} 0 ${b} 1 ${_.x} ${_.y}`}function hf(o,i){const u=rt(o),s=rt(i),c=s>=u?s-u:360-u+s;return c===0?360:c}function kb(o,i){const u=[{x:0,y:0},xt(0,0,1,o),xt(0,0,1,i)];for(const E of[0,90,180,270])Tb(E,o,i)&&u.push(xt(0,0,1,E));const s=Math.min(...u.map(E=>E.x)),c=Math.max(...u.map(E=>E.x)),h=Math.min(...u.map(E=>E.y)),_=Math.max(...u.map(E=>E.y)),b=Math.max(.1,c-s),v=Math.max(.1,_-h),y=Math.max(b,v)*.24;return{x:s-y,y:h-y,width:b+y*2,height:v+y*2}}function Tb(o,i,u){const s=rt(i),c=rt(o),h=hf(i,u),_=rt(c-s);return _>=0&&_<=h}function Rb(o,i,u,s,c,h,_,b){const y=xt(0,0,1.1,o),E=xt(0,0,1.1,i);return{min:tp(y,u,s,c,h,b),max:tp(E,u,s,c,_,b)}}function Mb(o,i,u,s){return{x:(o.x-i.x)/i.width*u,y:(o.y-i.y)/i.height*s}}function tp(o,i,u,s,c,h){const _=Mb(o,i,u,s),b=Math.max(10,c.length*h*.62),v=h,y=7;return{x:lp(_.x,b/2+y,Math.max(b/2+y,u-b/2-y)),y:lp(_.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function lp(o,i,u){return Math.max(i,Math.min(u,o))}function rp(o){return`${Math.round(o)}`}function rt(o){return Number.isFinite(o)?(o%360+360)%360:0}function Ab(o,i){const u=rt(o),s=rt(i),c=s>=u?s-u:360-u+s;return rt(u+c/2)}function Db(o,i){if(!i)return o;const u=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:u.map((s,c)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((h,_)=>f.jsx("span",{children:h},`${h}-${_}`))},`${s}-${c}`))})}function jb(o){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},u=4;return o===0?{low:{...i,left:u,top:0,bottom:0},high:{...i,right:u,top:0,bottom:0}}:o===180?{low:{...i,right:u,top:0,bottom:0},high:{...i,left:u,top:0,bottom:0}}:o===90?{low:{...i,bottom:u,left:0,right:0},high:{...i,top:u,left:0,right:0}}:{low:{...i,top:u,left:0,right:0},high:{...i,bottom:u,left:0,right:0}}}function Ob({name:o,vertical:i,rotation:u,color:s,fontSize:c,endFontSize:h,centerInset:_,lowLabel:b,highLabel:v,showEnds:y}){const E=y?jb(u):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[f.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:c,textAlign:"center",pointerEvents:"none"},children:Db(o,i)}),E&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...E.low,fontWeight:800,fontSize:h},children:b}),f.jsx("div",{style:{...E.high,fontWeight:800,fontSize:h},children:v})]})]})}function Bp({name:o,rotation:i,width:u,height:s,value:c,showEnds:h=!1,fillColor:_="var(--red)",lowLabel:b="0",highLabel:v="100"}){const y=i===90||i===270,{fontSize:E,endFontSize:k,centerInset:j}=xb(o,u,s,y,h);let F,Q;i===0?(F={left:0,top:0,bottom:0,width:`${c}%`},Q={left:0,top:0}):i===180?(F={right:0,top:0,bottom:0,width:`${c}%`},Q={right:0,top:0}):i===90?(F={left:0,right:0,bottom:0,height:`${c}%`},Q={left:0,bottom:0}):(F={left:0,right:0,top:0,height:`${c}%`},Q={left:0,top:0});const le=U=>f.jsx(Ob,{name:o,vertical:y,rotation:i,color:U,fontSize:E,endFontSize:k,centerInset:j,lowLabel:b,highLabel:v,showEnds:h});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${u}px`,height:`${s}px`},children:le("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...F},children:f.jsx("div",{style:{position:"absolute",width:`${u}px`,height:`${s}px`,...Q},children:le("var(--white)")})})]})}function Cb({control:o,disabled:i,latestValue:u,onSlider:s,width:c,height:h}){const _=V.useRef(null),b=o.sliderMin??0,v=o.sliderMax??100,[y,E]=V.useState(()=>u===void 0?ap(o.sliderRecenter??"none"):ip(u,b,v)),k=V.useRef(null),j=o.rotation;V.useEffect(()=>{u!==void 0&&(E(ip(u,b,v)),k.current=u)},[u,b,v]);function F(H){const pe=_.current;if(!pe)return 0;const oe=pe.getBoundingClientRect();let xe;return j===0?xe=(H.clientX-oe.left)/oe.width:j===180?xe=1-(H.clientX-oe.left)/oe.width:j===90?xe=1-(H.clientY-oe.top)/oe.height:xe=(H.clientY-oe.top)/oe.height,Math.max(0,Math.min(1,xe))}function Q(H){i||le(F(H))}function le(H){const pe=Math.round(H*100),oe=Math.round(b+(v-b)*H);E(pe),oe!==k.current&&(k.current=oe,s(o.name,oe))}function U(){const H=o.sliderRecenter??"none";i||H==="none"||le(ap(H)/100)}return f.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),Q(H))},onPointerMove:H=>{H.buttons!==0&&Q(H)},onPointerUp:U,onPointerCancel:U,onLostPointerCapture:U,children:f.jsx(Bp,{name:o.name,rotation:j,width:c,height:h,value:y,showEnds:!0,lowLabel:String(b),highLabel:String(v)})})}function ap(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function ip(o,i,u){return u===i?0:Math.max(0,Math.min(100,Math.round((o-i)/(u-i)*100)))}const zb={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},Bb=["button","slider","toggle","radar","text"];function Lb({unplaced:o,onAdd:i,onClose:u}){const s=V.useMemo(()=>Bb.filter(b=>o.some(v=>v.type===b)),[o]),[c,h]=V.useState(s[0]??"button"),_=o.filter(b=>b.type===c);return V.useEffect(()=>{s.length>0&&!s.includes(c)&&h(s[0])},[s,c]),f.jsxs(yn,{title:"Tilføj kontrol",onClose:u,children:[s.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:s.map(b=>f.jsx("button",{type:"button",className:c===b?"active":"",onClick:()=>h(b),children:zb[b]},b))}),f.jsx("div",{className:"add-lists",children:s.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(b=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(b.name),children:[f.jsx("span",{children:b.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(zn,{name:"plus",size:22})})]},b.name))})]})}function Lp(o){const[i,u]=V.useState({w:0,h:0}),s=V.useRef(null),c=V.useRef(null);return V.useLayoutEffect(()=>{var v;const h=o.current;if(s.current===h)return;if((v=c.current)==null||v.disconnect(),c.current=null,s.current=h,!h){u(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const _=()=>{const y={w:h.clientWidth,h:h.clientHeight};u(E=>E.w===y.w&&E.h===y.h?E:y)};_();const b=new ResizeObserver(_);b.observe(h),c.current=b}),V.useEffect(()=>()=>{var h;(h=c.current)==null||h.disconnect(),c.current=null,s.current=null},[]),i}function Oa(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const sp=4,op=5;function cp(o){if(!Oa(o))return null;const i=o.centerX2/2,u=o.centerY2/2;return{x0:i-o.spanX/2,x1:i+o.spanX/2,y0:u-o.spanY/2,y1:u+o.spanY/2}}function Ub(o,i,u=.02){return o.x0<i.x1-u&&i.x0<o.x1-u&&o.y0<i.y1-u&&i.y0<o.y1-u}function up(o,i){const u=qi(o,i);if(!u||o.spanX===null||o.spanY===null)return o;const s=ho(u.cx,u.cy,o.spanX,o.spanY,i);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function fp(o,i){return Math.max(1,Math.min(i.cols-1,o))}function dp(o,i){return Math.max(1,Math.min(i.rows-1,o))}function Hb(){const o=J(D=>D.layout),i=J(D=>D.active),u=J(D=>D.saveLayout),s=J(D=>D.setEditMode),c=J(D=>D.askConfirm),h=!!(i!=null&&i.canEdit),[_,b]=V.useState(()=>o.map(D=>({...D}))),[v,y]=V.useState(null),[E,k]=V.useState(!1),[j,F]=V.useState(null),[Q,le]=V.useState(null),[U,H]=V.useState(!1),pe=V.useRef(null),oe=Lp(pe),xe=oe.w>0&&oe.h>0,fe=Mp(oe.w,oe.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),Ne=V.useMemo(()=>xe?Qg(fe):[],[fe,xe]),ee=_.filter(Oa),W=_.filter(D=>!Oa(D)),be=V.useMemo(()=>{const D=new Set;for(let I=0;I<ee.length;I+=1)for(let Z=I+1;Z<ee.length;Z+=1){const K=cp(ee[I]),Ie=cp(ee[Z]);K&&Ie&&Ub(K,Ie)&&(D.add(ee[I].name),D.add(ee[Z].name))}return D},[ee]),_e=be.size>0,ve=_.find(D=>D.name===v)??null,ae=V.useMemo(()=>mp(_)!==mp(o),[_,o]),Ve=V.useMemo(()=>{if(!j||!Q)return null;const D=_.find(K=>K.name===j);if(!D||D.spanX===null||D.spanY===null)return null;const I=ho(Q.cx,Q.cy,D.spanX,D.spanY,fe),Z=qi({...D,centerX2:I.centerX2,centerY2:I.centerY2},fe);return Z?{name:D.name,rect:Z}:null},[_,j,Q,fe]);function De(D,I){b(Z=>Z.map(K=>K.name===D?I(K):K))}function Ze(D,I){D.stopPropagation(),y(I.name);const Z=qi(I,fe);Z&&(F(I.name),le({cx:Z.cx,cy:Z.cy}),D.currentTarget.setPointerCapture(D.pointerId))}function O(D){if(!j)return;const I=pe.current;if(!I)return;const Z=I.getBoundingClientRect(),K=I.clientWidth/Z.width,Ie=I.clientHeight/Z.height;le({cx:Math.max(0,Math.min(I.clientWidth,(D.clientX-Z.left)*K)),cy:Math.max(0,Math.min(I.clientHeight,(D.clientY-Z.top)*Ie))})}function Y(){if(j&&Q){const D=_.find(I=>I.name===j);if(D&&D.spanX!==null&&D.spanY!==null){const I=ho(Q.cx,Q.cy,D.spanX,D.spanY,fe);De(j,Z=>({...Z,centerX2:I.centerX2,centerY2:I.centerY2}))}}F(null),le(null)}function ie(D){De(D,I=>I.spanX===null||I.spanY===null?{...I,rotation:(I.rotation+270)%360}:up({...I,rotation:(I.rotation+270)%360,spanX:fp(I.spanY,fe),spanY:dp(I.spanX,fe)},fe))}function Ee(D,I,Z){De(D,K=>{if(K.spanX===null||K.spanY===null)return K;const Ie=I==="x"?fp(K.spanX+Z,fe):K.spanX,Ue=I==="y"?dp(K.spanY+Z,fe):K.spanY;return up({...K,spanX:Ie,spanY:Ue},fe)})}function de(D){De(D,I=>({...I,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function w(D){k(!1);const I=_.find(K=>K.name===D);if(!I)return;const Z=ho(fe.areaW/2,fe.areaH/2,sp,op,fe);De(D,()=>({...I,spanX:sp,spanY:op,rotation:0,centerX2:Z.centerX2,centerY2:Z.centerY2})),y(D)}async function L(){_e||(H(!0),await u(_),H(!1))}function P(){if(!ae){s(!1);return}c({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ve&&Oa(ve)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:D=>D.stopPropagation(),children:[f.jsx(Ui,{label:"⟲",title:"Roter",onClick:()=>ie(ve.name)}),f.jsx(Ui,{label:"W−",title:"Gør smallere",onClick:()=>Ee(ve.name,"x",-1),disabled:ve.spanX===null||ve.spanX<=1}),f.jsx(Ui,{label:"W+",title:"Gør bredere",onClick:()=>Ee(ve.name,"x",1),disabled:ve.spanX===null||ve.spanX>=fe.cols-1}),f.jsx(Ui,{label:"H−",title:"Gør lavere",onClick:()=>Ee(ve.name,"y",-1),disabled:ve.spanY===null||ve.spanY<=1}),f.jsx(Ui,{label:"H+",title:"Gør højere",onClick:()=>Ee(ve.name,"y",1),disabled:ve.spanY===null||ve.spanY>=fe.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>de(ve.name),"aria-label":"Slet",children:f.jsx(zn,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:pe,style:{touchAction:"none"},onPointerMove:O,onPointerUp:Y,onPointerDown:()=>y(null),children:xe&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:fe.areaW,height:fe.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Ne.map((D,I)=>f.jsx("circle",{cx:D.x,cy:D.y,r:2.5,fill:"rgba(198,80,78,0.45)"},I))}),Ve&&f.jsx("div",{className:"snap-preview",style:{left:Ve.rect.cx,top:Ve.rect.cy,width:Ve.rect.width,height:Ve.rect.height}}),ee.map(D=>{const I=j===D.name&&Q,Z=qi(D,fe);if(!Z)return null;const K=I?Q.cx:Z.cx,Ie=I?Q.cy:Z.cy,Ue={left:K,top:Ie,width:Z.width,height:Z.height,outline:v===D.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${be.has(D.name)?"colliding":""}`,style:Ue,onPointerDown:St=>Ze(St,D),children:D.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:yo(D.name,Z.width,Z.height)},children:D.name}):D.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:yo(D.name,Z.width,Z.height)},children:f.jsx("span",{children:D.name})}):D.type==="radar"?f.jsx(zp,{control:D,pings:[],width:Z.width,height:Z.height,preview:!0}):D.type==="text"?f.jsx(Cp,{message:D.name,width:Z.width,height:Z.height}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(Bp,{name:D.name,rotation:D.rotation,width:Z.width,height:Z.height,value:50,showEnds:!0,lowLabel:String(D.sliderMin??0),highLabel:String(D.sliderMax??100),fillColor:be.has(D.name)?"var(--disabled)":"var(--red)"})})},D.name)}),h&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:D=>D.stopPropagation(),onClick:()=>k(!0),"aria-label":"Tilføj kontrol",children:f.jsx(zn,{name:"plus",size:24})}),U&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:P,disabled:U,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:L,disabled:_e||U,children:U?"Gemmer...":"Gem"})]}),E&&f.jsx(Lb,{unplaced:W,onAdd:w,onClose:()=>k(!1)})]})}function mp(o){return JSON.stringify(o.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function Ui({label:o,title:i,disabled:u,onClick:s}){return f.jsx("button",{type:"button","aria-label":i,title:i,disabled:u,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:u?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function Gb(){const o=J(U=>U.layout),i=J(U=>U.editMode),u=J(U=>U.active),s=J(U=>U.sliderValues),c=J(U=>U.toggleValues),h=J(U=>U.radarPings),_=J(U=>U.textValues),b=J(U=>U.toggleSideMenu),v=J(U=>U.sendButton),y=J(U=>U.sendSlider),E=J(U=>U.sendToggle),k=V.useRef(null),j=Lp(k),F=Mp(j.w,j.h,u==null?void 0:u.gridCols,u==null?void 0:u.gridRows),Q=j.w>0&&j.h>0,le=o.filter(Oa);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(mf,{title:"Kontrol Panel",onMenu:()=>b()}),i?f.jsx(Hb,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:k,children:Q?le.map(U=>{const H=qi(U,F);return H?f.jsx(Sb,{control:U,rect:H,disabled:!1,latestValue:U.type==="slider"?s[U.name]:void 0,toggleValue:U.type==="toggle"?c[U.name]:void 0,radarPings:U.type==="radar"?h[U.name]:void 0,textValue:U.type==="text"?_[U.name]:void 0,onButton:v,onSlider:y,onToggle:E},U.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const Vb="",Yb="",hp="",Dr="";function Iu(o){return new Promise(i=>setTimeout(i,o))}class qb{constructor(i){this.transport=i}async interrupt(){await this.transport.write(hp),await Iu(80),await this.transport.write(hp)}async friendlyRepl(){await this.transport.write(Yb)}async softReset(){await this.transport.write(Dr)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(i){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`exec(open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await Iu(80),await this.transport.write(`\r
`),await Iu(40),!(await this.collectUntil(async()=>{await this.transport.write(Vb)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,u=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Dr)},c=>c.includes(`${Dr}${Dr}`)||c.includes(`${Dr}>`),u);return await this.friendlyRepl().catch(()=>{}),Xb(s)}collectUntil(i,u,s){return new Promise((c,h)=>{let _="",b=null;const v=setTimeout(()=>{b==null||b(),h(new Error("Timeout ved USB REPL kommando."))},s);b=this.transport.addDataListener(y=>{_+=y,u(_)&&(clearTimeout(v),b==null||b(),c(_))}),i().catch(y=>{clearTimeout(v),b==null||b(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}}function Xb(o){const i=o.indexOf("OK"),u=o.indexOf(Dr,i>=0?i:0),s=u>=0?o.indexOf(Dr,u+1):-1;if(i<0||u<0)return{output:o.trim(),error:"",raw:o};const c=o.slice(i+2,u).replace(/^\r?\n/,"").trimEnd(),h=s>=0?o.slice(u+1,s).trim():"";return{output:c,error:h,raw:o}}const $b=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Kb=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Wl=Kb.flatMap(({board:o,firmwareName:i})=>$b.map(({version:u,date:s,stamp:c,tag:h})=>{const _=`${i}-${c}-${h}.uf2`;return{board:o,version:u,date:s,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),Fu=512;function hl(o){return JSON.stringify(o)}function Ib(o){return`bytes.fromhex(${JSON.stringify([...o].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function Fb(o,i){return`${o==="/"?"":o.replace(/\/$/,"")}/${i}`}class Qb{constructor(i){this.repl=i}async list(i="/"){const u=`
import os
base = ${hl(i)}
for name in os.listdir(base):
    p = (${hl(i)}.rstrip('/') + '/' + name) if ${hl(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(u);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(c=>c.trim()).filter(Boolean).map(c=>{const[h,_,b]=c.split("	"),v=_==="dir"||_==="file"?_:"unknown",y=parseInt(b??"",10);return{name:h,path:Fb(i,h),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const u=`
import sys
with open(${hl(i)}, 'rb') as f:
    while True:
        b = f.read(${Fu})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(u,1e4);if(s.error)throw new Error(s.error);const c=s.output.replace(/\s+/g,"");return new TextDecoder().decode(Zb(c))}async writeText(i,u,s){const c=new TextEncoder().encode(u);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`open(${hl(i)}, 'wb').close()`),c.length===0){s==null||s(100,"Gemt på Pico");return}for(let h=0;h<c.length;h+=Fu){const _=c.slice(h,h+Fu),b=`
with open(${hl(i)}, 'ab') as f:
    f.write(${Ib(_)})
`,v=await this.repl.exec(b,1e4);if(v.error)throw new Error(v.error);const y=Math.min(h+_.length,c.length);s==null||s(10+Math.round(y/c.length*85),`Gemmer ${y}/${c.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(i,u,s,c={}){const h=`${i}.tmp`;if(await this.writeText(h,u,(b,v)=>s==null?void 0:s(Math.min(70,b*.7),v)),s==null||s(78,"Verificerer fil..."),await this.readText(h)!==u)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);if(s==null||s(88,"Udskifter fil..."),c.createBackup){const b=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,b).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(h,i),s==null||s(100,"Installeret på Pico")}async delete(i){const u=await this.repl.exec(`
import os
os.remove(${hl(i)})
`);if(u.error)throw new Error(u.error)}async nextBackupPath(i){const u=await this.list("/"),s=new Set(u.map(k=>k.path.toLowerCase())),c=i.replace(/\\/g,"/"),h=c.lastIndexOf("/"),_=h>=0?c.slice(0,h+1):"/",b=h>=0?c.slice(h+1):c.replace(/^\/+/,""),v=b.lastIndexOf("."),y=v>0?b.slice(0,v):b,E=v>0?b.slice(v):"";for(let k=1;k<1e3;k+=1){const j=`${_}${y}_backup${k}${E}`;if(!s.has(j.toLowerCase()))return j}return`${_}${y}_backup${Date.now()}${E}`}async rename(i,u){const s=await this.repl.exec(`
import os
os.rename(${hl(i)}, ${hl(u)})
`);if(s.error)throw new Error(s.error)}}function Zb(o){const i=new Uint8Array(Math.floor(o.length/2));for(let u=0;u<i.length;u+=1)i[u]=parseInt(o.slice(u*2,u*2+2),16);return i}const Pb=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct\r
import os\r
import ubinascii\r
import machine\r
\r
__version__ = '0.6.0'\r
__author__ = 'Christian Brochner Rasmussen'\r
\r
# --------------------- BLE UUIDs ---------------------\r
SERVICE_UUID     = ubluetooth.UUID("b8e06067-62ad-41ba-9231-206ae80ab551")\r
CHAR_UUID_WRITE  = ubluetooth.UUID("f897177b-aee8-4767-8ecc-cc694fd5fce0")\r
CHAR_UUID_NOTIFY = ubluetooth.UUID("f897177b-aee8-4767-8ecc-cc694fd5fce1")\r
\r
_IRQ_CENTRAL_CONNECT    = const(1)\r
_IRQ_CENTRAL_DISCONNECT = const(2)\r
_IRQ_GATTS_WRITE        = const(3)\r
\r
_FLAG_READ              = const(0x0002)\r
_FLAG_WRITE_NO_RESPONSE = const(0x0004)\r
_FLAG_WRITE             = const(0x0008)\r
_FLAG_NOTIFY            = const(0x0010)\r
\r
# -------------------- Protocol defs ------------------\r
LAYOUT_VERSION         = 1\r
ALLOWED_COMMAND_TYPES  = ["button", "slider", "toggle", "radar", "text"]\r
MAX_NAME_LENGTH        = 14\r
SLIDER_RECENTER_MODES  = ["none", "bottom", "middle", "top"]\r
\r
# Files on-device\r
SETTINGS_FILE = "DeviceSettings.txt"\r
LAYOUT_FILE   = "Layout.txt"\r
\r
\r
class BLEPeripheral:\r
    """\r
    Full grid-layout protocol peripheral (web-app compatible).\r
\r
    Handshake (app drives):\r
      - 'HELLO'                          -> 'ACK:HELLO'\r
      - 'who_are_you'                    -> 'unowned' | 'owned,<ownerID>,<iconID>,<canConnect>,<canEdit>,<ownerName>'\r
      - 'ACK:ownership'                  -> 'READY:permission'\r
      - 'request_permission,<id>,<name>' -> 'perm,<canConnect>,<canEdit>'\r
                                            (denies + disconnects if private)\r
      - 'ACK:permission'                 -> (handshake complete)\r
      - 'create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>' -> 'ACK:create'\r
\r
    Layout streaming:\r
      - 'request'  -> device streams '#VERSION,1', control lines, '__END__'\r
      - 'update'   -> 'ACK:update', then app streams 'update,...' lines + '__END__';\r
                      device saves and replies 'ACK: ...' + 'LAYOUT_SAVED'\r
\r
    Control commands (fire-and-forget, routed to on_button/on_slider/on_toggle;\r
    on_write is still available as a raw fallback):\r
      - 'button,<NAME>' / 'slider,<NAME>:<VALUE>' / 'toggle,<NAME>:<0|1>'\r
\r
    Telemetry (device -> app, optional from main.py):\r
      - 'radar,<NAME>,<ANGLE_DEGREES>,<DISTANCE_CM>'\r
      - 'text,<NAME>,<MESSAGE>'\r
      - 'toggle_state,<NAME>,<0|1>'\r
\r
    Every device->app reply is sent through the reliable stream framing\r
    (prep / ack:prep / numbered frames / miss), so the central must implement\r
    inbound reassembly even for single-line responses.\r
\r
    NOTE: Advertising puts the SERVICE UUID in the primary advertisement (so a\r
    Web Bluetooth service filter matches) and the name in the scan response.\r
    Name is stable and derived ONLY from device_base_name.\r
    """\r
\r
    def __init__(self, base_controls=None, device_base_name="Device", callbacks=None):\r
        # ---- BLE state\r
        self.ble = ubluetooth.BLE()\r
        self.ble.active(True)\r
        self.ble.irq(self._ble_irq)\r
        self.connected = False\r
        self.conn_handle = None\r
\r
        # ---- Controls (base + current)\r
        self.base_controls = self._initialize_controls(base_controls) if base_controls else []\r
        self.controls = [dict(c) for c in self.base_controls]\r
\r
        # ---- Device identity\r
        self.device_base_name = device_base_name  # ONLY source for GAP name\r
\r
        # ---- Settings (ownership + metadata)\r
        self.owner_id = None\r
        self.owner_name = None\r
        self.icon_id = 0\r
        self.can_others_connect = 0\r
        self.can_others_edit = 0\r
        self.grid_cols = 11\r
        self.grid_rows = 31\r
\r
        # ---- Session flags\r
        self._session_can_edit = False\r
        self._session_is_owner = False\r
\r
        # ---- Files & buffers\r
        self._settings_file = SETTINGS_FILE\r
        self._layout_file = LAYOUT_FILE\r
        self._rx_layout_buffer = ""\r
        self._command_buffer = ""\r
        self._expecting_update = False\r
        self._expecting_file_write = False\r
        self._file_write_path = None\r
        self._file_write_tmp = None\r
        self._in_reliable_stream_active = False\r
        self._in_reliable_expected_total = 0\r
        self._in_reliable_stream_id = 0\r
        self._in_reliable_parts = {}\r
        self._out_reliable_pending_lines = None\r
        self._out_reliable_waiting_ack = False\r
        self._out_reliable_stream_id = 0\r
        self._out_reliable_next_stream_id = 1\r
        self._out_reliable_cache = {}\r
\r
        # ---- Callbacks for app-level logic\r
        self._on_write_callback = None\r
        self._on_button_callback = None\r
        self._on_slider_callback = None\r
        self._on_toggle_callback = None\r
        self._on_connect_callback = None\r
        self._on_disconnect_callback = None\r
        self._auto_bind_main_callbacks(callbacks)\r
\r
        # ---- Start up\r
        self._register_services()\r
        self.load_settings_from_file()\r
        self.load_layout_from_file()\r
        self._advertise()\r
\r
    # -------------------- Small log helpers --------------------\r
    def _log_received(self, msg):\r
        try:\r
            print("Received:", msg.strip())\r
        except:\r
            print("Received:", msg)\r
\r
    def _log_sent(self, msg):\r
        try:\r
            print("Sent:", msg.strip())\r
        except:\r
            print("Sent:", msg)\r
\r
    def _protocol_field(self, value):\r
        if value is None:\r
            return ""\r
        try:\r
            return str(value).replace(",", " ").replace("\\r", " ").replace("\\n", " ").strip()\r
        except:\r
            return ""\r
\r
    # -------------------- Init helpers --------------------\r
    def _initialize_controls(self, base_controls):\r
        """Build a list of control dicts from tuples like [("button","A"),("slider","B")]."""\r
        result = []\r
        seen = set()\r
        for spec in base_controls:\r
            ctrl_type = spec[0]\r
            name = spec[1]\r
            if ctrl_type not in ALLOWED_COMMAND_TYPES:\r
                print("Skipping invalid control type:", ctrl_type)\r
                continue\r
            if len(name) > MAX_NAME_LENGTH:\r
                print("Skipping too long name:", name)\r
                continue\r
            if name in seen:\r
                print("Skipping duplicate control name:", name)\r
                continue\r
            seen.add(name)\r
            ctrl = {\r
                "type": ctrl_type,\r
                "name": name,\r
                "x": None,        # grid centerX2 (half-cells)\r
                "y": None,        # grid centerY2 (half-cells)\r
                "width": None,    # grid spanX (cells)\r
                "height": None,   # grid spanY (cells)\r
                "rotation": 0     # 0/90/180/270\r
            }\r
            if ctrl_type == "slider":\r
                ctrl["min"] = 0\r
                ctrl["max"] = 100\r
                ctrl["recenter"] = "none"\r
                if len(spec) >= 4:\r
                    try:\r
                        ctrl["min"] = int(spec[2])\r
                        ctrl["max"] = int(spec[3])\r
                    except:\r
                        ctrl["min"] = 0\r
                        ctrl["max"] = 100\r
                if ctrl["max"] == ctrl["min"]:\r
                    ctrl["max"] = ctrl["min"] + 1\r
                if len(spec) >= 5 and spec[4] in SLIDER_RECENTER_MODES:\r
                    ctrl["recenter"] = spec[4]\r
            elif ctrl_type == "toggle":\r
                ctrl["initial"] = 0\r
                if len(spec) >= 3:\r
                    try:\r
                        ctrl["initial"] = 1 if int(spec[2]) == 1 else 0\r
                    except:\r
                        ctrl["initial"] = 0\r
            elif ctrl_type == "radar":\r
                ctrl["minAngle"] = 0\r
                ctrl["maxAngle"] = 180\r
                ctrl["maxDistance"] = 200\r
                ctrl["fadeMs"] = 1200\r
                if len(spec) >= 4:\r
                    try:\r
                        ctrl["minAngle"] = int(float(spec[2]))\r
                        ctrl["maxAngle"] = int(float(spec[3]))\r
                    except:\r
                        ctrl["minAngle"] = 0\r
                        ctrl["maxAngle"] = 180\r
                if len(spec) >= 5:\r
                    try:\r
                        ctrl["maxDistance"] = max(1, int(float(spec[4])))\r
                    except:\r
                        ctrl["maxDistance"] = 200\r
                if len(spec) >= 6:\r
                    try:\r
                        ctrl["fadeMs"] = max(120, int(float(spec[5])))\r
                    except:\r
                        ctrl["fadeMs"] = 1200\r
            result.append(ctrl)\r
        print("Initialized base controls:", len(result))\r
        return result\r
\r
    def _register_services(self):\r
        BLE_SERVICE = (\r
            SERVICE_UUID,\r
            (\r
                (CHAR_UUID_WRITE,  _FLAG_WRITE | _FLAG_WRITE_NO_RESPONSE | _FLAG_READ),\r
                (CHAR_UUID_NOTIFY, _FLAG_NOTIFY),\r
            ),\r
        )\r
        ((self.handle_write, self.handle_notify),) = self.ble.gatts_register_services((BLE_SERVICE,))\r
\r
    def _advertising_payload(self, name=None, services=None):\r
        payload = bytearray()\r
\r
        def append_field(adv_type, value):\r
            payload.extend(struct.pack('BB', len(value) + 1, adv_type))\r
            payload.extend(value)\r
\r
        # Flags: LE General Discoverable + BR/EDR Not Supported\r
        append_field(0x01, struct.pack('B', 0x06))\r
        if name:\r
            append_field(0x09, name.encode())\r
        if services:\r
            for uuid in services:\r
                append_field(0x07, bytes(uuid))\r
        return payload\r
\r
    def _advertise(self):\r
        """\r
        Service UUID in the primary advertisement (so Web Bluetooth's service\r
        filter matches); the name goes in the scan response.\r
        """\r
        full_name = "PicoW-{}".format(self.device_base_name)\r
        adv_payload = self._advertising_payload(services=[SERVICE_UUID])\r
        resp_payload = self._advertising_payload(name=full_name)\r
        # 100 ms advertising interval (value in microseconds on RP2040 port)\r
        self.ble.gap_advertise(100_000, adv_payload, resp_data=resp_payload)\r
        print("Advertising as:", full_name)\r
\r
    # -------------------- File I/O: Settings --------------------\r
    def load_settings_from_file(self):\r
        """Reads settings:\r
           VERSION,1 / ownerID,<str> / ownerName,<str> / iconID,<int>\r
           canOthersConnect,<0/1> / canOthersEdit,<0/1>\r
        """\r
        try:\r
            with open(self._settings_file, "r") as f:\r
                lines = [l.strip() for l in f.readlines() if l.strip()]\r
\r
            for line in lines:\r
                parts = line.split(",", 1)\r
                if len(parts) != 2:\r
                    continue\r
                key, val = parts[0], parts[1]\r
                if key == "ownerID":\r
                    self.owner_id = val if val else None\r
                elif key == "ownerName":\r
                    self.owner_name = val if val else None\r
                elif key == "iconID":\r
                    try:\r
                        self.icon_id = int(val)\r
                    except:\r
                        self.icon_id = 0\r
                elif key == "canOthersConnect":\r
                    try:\r
                        self.can_others_connect = 1 if int(val) == 1 else 0\r
                    except:\r
                        self.can_others_connect = 0\r
                elif key == "canOthersEdit":\r
                    try:\r
                        self.can_others_edit = 1 if int(val) == 1 else 0\r
                    except:\r
                        self.can_others_edit = 0\r
                elif key == "gridCols":\r
                    try:\r
                        self.grid_cols = max(2, min(60, int(val)))\r
                    except:\r
                        self.grid_cols = 11\r
                elif key == "gridRows":\r
                    try:\r
                        self.grid_rows = max(2, min(60, int(val)))\r
                    except:\r
                        self.grid_rows = 31\r
\r
            print("Settings loaded:",\r
                  self.owner_id, self.owner_name,\r
                  self.icon_id, self.can_others_connect, self.can_others_edit)\r
        except Exception as e:\r
            print("Settings not found or invalid. Using defaults. Err:", e)\r
            self.owner_id = None\r
            self.owner_name = None\r
            self.icon_id = 0\r
            self.can_others_connect = 0\r
            self.can_others_edit = 0\r
            self.save_settings_to_file("", "", 0, 0, 0)\r
\r
    def save_settings_to_file(self, owner_id, owner_name, icon_id, can_connect, can_edit,\r
                              grid_cols=None, grid_rows=None):\r
        # Enforce rule: if connect==0 => edit==0\r
        if not can_connect:\r
            can_edit = 0\r
        if grid_cols is None:\r
            grid_cols = self.grid_cols\r
        if grid_rows is None:\r
            grid_rows = self.grid_rows\r
        grid_cols = max(2, min(60, int(grid_cols)))\r
        grid_rows = max(2, min(60, int(grid_rows)))\r
        try:\r
            with open(self._settings_file, "w") as f:\r
                f.write("VERSION,1\\n")\r
                f.write("ownerID,{}\\n".format(owner_id))\r
                f.write("ownerName,{}\\n".format(owner_name))\r
                f.write("iconID,{}\\n".format(icon_id))\r
                f.write("canOthersConnect,{}\\n".format(1 if can_connect else 0))\r
                f.write("canOthersEdit,{}\\n".format(1 if can_edit else 0))\r
                f.write("gridCols,{}\\n".format(grid_cols))\r
                f.write("gridRows,{}\\n".format(grid_rows))\r
            self.owner_id = owner_id if owner_id else None\r
            self.owner_name = owner_name if owner_name else None\r
            self.icon_id = int(icon_id)\r
            self.can_others_connect = 1 if can_connect else 0\r
            self.can_others_edit = 1 if can_edit else 0\r
            self.grid_cols = grid_cols\r
            self.grid_rows = grid_rows\r
            print("Settings saved.")\r
        except Exception as e:\r
            print("Error saving settings:", e)\r
\r
    # -------------------- File I/O: Layout --------------------\r
    def _merge_base_with_layout_override(self, base, override):\r
        """Keep layout placement from Layout.txt, but use main.py controls as truth."""\r
        ctrl = dict(base)\r
        for key in ("x", "y", "width", "height", "rotation"):\r
            if key in override:\r
                ctrl[key] = override[key]\r
        return ctrl\r
\r
    def save_layout_to_file(self, notify=True):\r
        """Writes Layout.txt in grid format; 'n' for None.\r
\r
        Writes to a temp file and renames it into place so a power loss\r
        mid-write can never leave a half-written (corrupt) Layout.txt.\r
        """\r
        tmp_file = self._layout_file + ".tmp"\r
        try:\r
            with open(tmp_file, "w") as f:\r
                f.write("#VERSION,{}\\n".format(LAYOUT_VERSION))\r
                for ctrl in self.controls:\r
                    x = ctrl["x"] if ctrl["x"] is not None else "n"\r
                    y = ctrl["y"] if ctrl["y"] is not None else "n"\r
                    w = ctrl["width"] if ctrl["width"] is not None else "n"\r
                    h = ctrl["height"] if ctrl["height"] is not None else "n"\r
                    r = ctrl.get("rotation", 0)\r
                    if ctrl["type"] == "slider":\r
                        mn = ctrl.get("min", 0)\r
                        mx = ctrl.get("max", 100)\r
                        recenter = ctrl.get("recenter", "none")\r
                        f.write("{},{},{},{},{},{},{},{},{},{}\\n".format(\r
                            ctrl['type'], ctrl['name'], x, y, w, h, r, mn, mx, recenter))\r
                    elif ctrl["type"] == "toggle":\r
                        initial = 1 if ctrl.get("initial", 0) == 1 else 0\r
                        f.write("{},{},{},{},{},{},{},{}\\n".format(\r
                            ctrl['type'], ctrl['name'], x, y, w, h, r, initial))\r
                    elif ctrl["type"] == "radar":\r
                        f.write("{},{},{},{},{},{},{},{},{},{},{}\\n".format(\r
                            ctrl['type'], ctrl['name'], x, y, w, h, r,\r
                            ctrl.get("minAngle", 0),\r
                            ctrl.get("maxAngle", 180),\r
                            ctrl.get("maxDistance", 200),\r
                            ctrl.get("fadeMs", 1200)))\r
                    else:\r
                        f.write("{},{},{},{},{},{},{}\\n".format(ctrl['type'], ctrl['name'], x, y, w, h, r))\r
            # Atomic swap. littlefs rename overwrites atomically; FAT needs the\r
            # destination removed first, so fall back to remove+rename there.\r
            try:\r
                os.rename(tmp_file, self._layout_file)\r
            except OSError:\r
                try:\r
                    os.remove(self._layout_file)\r
                except OSError:\r
                    pass\r
                os.rename(tmp_file, self._layout_file)\r
            print("Layout saved successfully.")\r
            if notify:\r
                self.send_with_retry("ACK: Layout saved.\\n", max_attempts=3)\r
        except Exception as e:\r
            print("Error saving layout:", e)\r
            try:\r
                os.remove(tmp_file)\r
            except OSError:\r
                pass\r
            if notify:\r
                self.send_with_retry("ERR: Failed to save layout.\\n", max_attempts=3)\r
\r
    def load_layout_from_file(self):\r
        """Loads Layout.txt and merges onto base controls.\r
\r
        Parsing is tolerant: a single bad line is skipped, never aborting the\r
        whole load. A genuinely missing file seeds defaults, but a file that\r
        exists yet fails to open is left untouched (never overwritten), so a\r
        recoverable file is not destroyed by a transient read error.\r
        """\r
        try:\r
            with open(self._layout_file, "r") as f:\r
                lines = [l.strip() for l in f.readlines() if l.strip()]\r
        except OSError as e:\r
            # No layout file yet (first boot): seed defaults on disk.\r
            print("Layout file not found, seeding defaults. Err:", e)\r
            self.controls = [dict(c) for c in self.base_controls]\r
            self.save_layout_to_file(notify=False)\r
            return\r
        except Exception as e:\r
            # File present but unreadable: fall back in memory only and leave\r
            # the file intact for inspection/recovery.\r
            print("Layout file unreadable, using base controls (file left intact). Err:", e)\r
            self.controls = [dict(c) for c in self.base_controls]\r
            return\r
\r
        def _to_val(s):\r
            if s == "n":\r
                return None\r
            try:\r
                return int(float(s))\r
            except:\r
                return None\r
\r
        overrides = {}\r
        for line in lines:\r
            if line.startswith("#VERSION"):\r
                continue\r
            try:\r
                parts = line.split(",")\r
                if len(parts) < 7:\r
                    print("Skipping malformed layout line:", line)\r
                    continue\r
                ctrl_type, name, x, y, w, h, r = parts[:7]\r
\r
                override = {\r
                    "type": ctrl_type,\r
                    "name": name,\r
                    "x": _to_val(x),\r
                    "y": _to_val(y),\r
                    "width": _to_val(w),\r
                    "height": _to_val(h),\r
                    "rotation": int(float(r)) if r not in ("n", "") else 0\r
                }\r
                if ctrl_type == "slider":\r
                    override["min"] = 0\r
                    override["max"] = 100\r
                    override["recenter"] = "none"\r
                    if len(parts) >= 10:\r
                        try:\r
                            override["min"] = int(float(parts[7]))\r
                            override["max"] = int(float(parts[8]))\r
                        except:\r
                            override["min"] = 0\r
                            override["max"] = 100\r
                        if override["max"] == override["min"]:\r
                            override["max"] = override["min"] + 1\r
                        if parts[9] in SLIDER_RECENTER_MODES:\r
                            override["recenter"] = parts[9]\r
                elif ctrl_type == "toggle":\r
                    override["initial"] = 0\r
                    if len(parts) >= 8:\r
                        try:\r
                            override["initial"] = 1 if int(float(parts[7])) == 1 else 0\r
                        except:\r
                            override["initial"] = 0\r
                elif ctrl_type == "radar":\r
                    override["minAngle"] = 0\r
                    override["maxAngle"] = 180\r
                    override["maxDistance"] = 200\r
                    override["fadeMs"] = 1200\r
                    if len(parts) >= 11:\r
                        try:\r
                            override["minAngle"] = int(float(parts[7]))\r
                            override["maxAngle"] = int(float(parts[8]))\r
                            override["maxDistance"] = max(1, int(float(parts[9])))\r
                            override["fadeMs"] = max(120, int(float(parts[10])))\r
                        except:\r
                            override["minAngle"] = 0\r
                            override["maxAngle"] = 180\r
                            override["maxDistance"] = 200\r
                            override["fadeMs"] = 1200\r
                overrides[name] = override\r
            except Exception as e:\r
                print("Skipping bad layout line:", line, "err:", e)\r
                continue\r
\r
        updated = []\r
        known = set()\r
        for base in self.base_controls:\r
            c = dict(base)\r
            if c["name"] in overrides:\r
                c = self._merge_base_with_layout_override(c, overrides[c["name"]])\r
            updated.append(c)\r
            known.add(c["name"])\r
        dropped = len([name for name in overrides if name not in known])\r
\r
        self.controls = updated\r
        self.save_layout_to_file(notify=False)\r
        if dropped:\r
            print("Dropped stale layout controls:", dropped)\r
        print("Layout loaded. Controls:", len(self.controls))\r
\r
    # -------------------- BLE IRQ / I/O --------------------\r
    def _reset_protocol_state(self):\r
        self._session_can_edit = False\r
        self._session_is_owner = False\r
        self._rx_layout_buffer = ""\r
        self._command_buffer = ""\r
        self._expecting_update = False\r
        self._expecting_file_write = False\r
        self._file_write_path = None\r
        self._file_write_tmp = None\r
        self._in_reliable_stream_active = False\r
        self._in_reliable_expected_total = 0\r
        self._in_reliable_stream_id = 0\r
        self._in_reliable_parts = {}\r
        self._out_reliable_pending_lines = None\r
        self._out_reliable_waiting_ack = False\r
        self._out_reliable_stream_id = 0\r
        self._out_reliable_cache = {}\r
\r
    def _handle_disconnected(self, reason=""):\r
        self.connected = False\r
        self.conn_handle = None\r
        self._reset_protocol_state()\r
        print("Device disconnected" + (" ({})".format(reason) if reason else ""))\r
        if self._on_disconnect_callback:\r
            self._on_disconnect_callback()\r
        try:\r
            self._advertise()\r
        except Exception as e:\r
            print("Failed to restart advertising:", e)\r
\r
    def _ble_irq(self, event, data):\r
        if event == _IRQ_CENTRAL_CONNECT:\r
            self.conn_handle, _, _ = data\r
            print("Device connected")\r
            self.connected = True\r
            self._reset_protocol_state()\r
            if self._on_connect_callback:\r
                self._on_connect_callback()\r
\r
        elif event == _IRQ_CENTRAL_DISCONNECT:\r
            self._handle_disconnected("irq")\r
\r
        elif event == _IRQ_GATTS_WRITE:\r
            conn_handle, attr_handle = data\r
            if attr_handle == self.handle_write:\r
                chunk = self.ble.gatts_read(self.handle_write).decode()\r
                self._command_buffer += chunk\r
                while "\\n" in self._command_buffer:\r
                    msg, self._command_buffer = self._command_buffer.split("\\n", 1)\r
                    msg = msg.strip()\r
                    if not msg:\r
                        continue\r
                    self._log_received(msg)\r
                    try:\r
                        self._process_inbound_line(msg)\r
                    except Exception as e:\r
                        print("Inbound processing error:", e)\r
\r
    def send_with_retry(self, msg, max_attempts=3, chunk_size=20, chunk_gap_ms=3):\r
        """Send an important protocol message, retrying on failure."""\r
        for attempt in range(1, max_attempts + 1):\r
            try:\r
                if not self.connected or self.conn_handle is None:\r
                    if attempt < max_attempts:\r
                        print("Send attempt {}/{} failed - not connected, retrying...".format(attempt, max_attempts))\r
                        time.sleep_ms(300)\r
                    continue\r
\r
                data = msg.encode()\r
                for i in range(0, len(data), chunk_size):\r
                    part = data[i:i + chunk_size]\r
                    self.ble.gatts_write(self.handle_notify, part)\r
                    self.ble.gatts_notify(self.conn_handle, self.handle_notify, part)\r
                    if i + chunk_size < len(data) and chunk_gap_ms > 0:\r
                        time.sleep_ms(chunk_gap_ms)\r
\r
                self._log_sent(msg)\r
                return True\r
            except Exception as e:\r
                print("Send attempt {}/{} failed: {}".format(attempt, max_attempts, e))\r
                if attempt < max_attempts:\r
                    time.sleep_ms(300)\r
\r
        print("Send failed after {} attempts".format(max_attempts))\r
        return False\r
\r
    # -------------------- Reliable stream (outbound) --------------------\r
    def _send_reliable_stream(self, payload_lines):\r
        if payload_lines is None or len(payload_lines) == 0:\r
            payload_lines = [""]\r
\r
        total = len(payload_lines)\r
        self._out_reliable_pending_lines = list(payload_lines)\r
        self._out_reliable_waiting_ack = True\r
        stream_id = self._out_reliable_next_stream_id\r
        self._out_reliable_next_stream_id += 1\r
        self._out_reliable_stream_id = stream_id\r
        self._out_reliable_cache = {}\r
        self.send_with_retry("prep,{},{}\\n".format(total, stream_id), max_attempts=3)\r
\r
    def _flush_pending_reliable_stream(self):\r
        if not self._out_reliable_waiting_ack:\r
            return\r
        if self._out_reliable_pending_lines is None:\r
            self._out_reliable_waiting_ack = False\r
            return\r
\r
        for i, payload in enumerate(self._out_reliable_pending_lines):\r
            frame = "{}-{}".format(i + 1, payload)\r
            self._out_reliable_cache[i + 1] = frame\r
            self.send_with_retry(frame + "\\n", max_attempts=3)\r
\r
        self._out_reliable_pending_lines = None\r
        self._out_reliable_waiting_ack = False\r
\r
    def _try_parse_numbered_payload(self, msg):\r
        dash_idx = msg.find("-")\r
        if dash_idx <= 0:\r
            return None\r
        index_str = msg[:dash_idx]\r
        if not index_str.isdigit():\r
            return None\r
        idx = int(index_str)\r
        if idx < 1:\r
            return None\r
        return idx, msg[dash_idx + 1:]\r
\r
    def _process_inbound_line(self, msg):\r
        if msg.startswith("prep,"):\r
            split_parts = msg.split(",")\r
            total = None\r
            stream_id = 0\r
            if len(split_parts) >= 2 and split_parts[1].isdigit():\r
                total = int(split_parts[1])\r
            if len(split_parts) >= 3 and split_parts[2].isdigit():\r
                stream_id = int(split_parts[2])\r
\r
            if total is not None and total > 0:\r
                self._in_reliable_stream_active = True\r
                self._in_reliable_expected_total = total\r
                self._in_reliable_stream_id = stream_id\r
                self._in_reliable_parts = {}\r
                if stream_id > 0:\r
                    self.send_with_retry("ack:prep,{}\\n".format(stream_id), max_attempts=3)\r
                else:\r
                    self.send_with_retry("ack:prep\\n", max_attempts=3)\r
                return\r
\r
        if msg == "ack:prep" or msg == "ack:prep,{}".format(self._out_reliable_stream_id):\r
            self._flush_pending_reliable_stream()\r
            return\r
\r
        if msg.startswith("miss,"):\r
            miss_parts = msg.split(",")\r
            if len(miss_parts) >= 3 and miss_parts[1].isdigit() and miss_parts[2].isdigit():\r
                stream_id = int(miss_parts[1])\r
                missing_idx = int(miss_parts[2])\r
                if stream_id == self._out_reliable_stream_id and missing_idx in self._out_reliable_cache:\r
                    self.send_with_retry(self._out_reliable_cache[missing_idx] + "\\n", max_attempts=2)\r
            return\r
\r
        parsed = self._try_parse_numbered_payload(msg)\r
        if parsed is not None:\r
            idx, payload = parsed\r
\r
            if not self._in_reliable_stream_active:\r
                self._process_message(payload)\r
                return\r
\r
            if idx not in self._in_reliable_parts:\r
                self._in_reliable_parts[idx] = payload\r
\r
            missing_idx = 0\r
            for i in range(1, self._in_reliable_expected_total + 1):\r
                if i not in self._in_reliable_parts:\r
                    missing_idx = i\r
                    break\r
            if missing_idx > 0 and self._in_reliable_stream_id > 0 and idx > missing_idx:\r
                self.send_with_retry("miss,{},{}\\n".format(self._in_reliable_stream_id, missing_idx), max_attempts=2)\r
\r
            if len(self._in_reliable_parts) >= self._in_reliable_expected_total:\r
                for i in range(1, self._in_reliable_expected_total + 1):\r
                    line = self._in_reliable_parts.get(i)\r
                    if line is not None:\r
                        try:\r
                            self._process_message(line)\r
                        except Exception as e:\r
                            print("Reliable line handling error:", e)\r
                self._in_reliable_stream_active = False\r
                self._in_reliable_expected_total = 0\r
                self._in_reliable_stream_id = 0\r
                self._in_reliable_parts = {}\r
            return\r
\r
        try:\r
            self._process_message(msg)\r
        except Exception as e:\r
            print("Message handling error:", e)\r
\r
    # -------------------- Protocol handlers --------------------\r
    def _process_message(self, msg):\r
        if self._expecting_file_write and msg != "disconnect":\r
            if msg == "fs_write_end":\r
                self._finish_file_write()\r
                return\r
            if msg.startswith("fs_write_chunk,"):\r
                self._append_file_write_chunk(msg.split(",", 1)[1])\r
                return\r
            self._send_reliable_stream(["ERR: Unexpected file write data"])\r
            return\r
\r
        if self._expecting_update and msg != "disconnect":\r
            if msg == "__END__":\r
                self._handle_full_layout_update(self._rx_layout_buffer)\r
                self._rx_layout_buffer = ""\r
                self._expecting_update = False\r
                return\r
            self._rx_layout_buffer += msg + "\\n"\r
            return\r
\r
        if msg == "HELLO":\r
            print("Received HELLO handshake")\r
            self._send_reliable_stream(["ACK:HELLO"])\r
\r
        elif msg == "ACK:ownership":\r
            print("Phone acknowledged ownership response")\r
            self._send_reliable_stream(["READY:permission"])\r
\r
        elif msg == "ACK:permission":\r
            print("Handshake complete")\r
\r
        elif msg == "request":\r
            self.send_layout_to_web()\r
\r
        elif msg.startswith("fs_list"):\r
            self._handle_fs_list(msg)\r
\r
        elif msg == "fs_capabilities":\r
            self._handle_fs_capabilities()\r
\r
        elif msg.startswith("fs_read_stream,"):\r
            self._handle_fs_read_stream(msg)\r
\r
        elif msg.startswith("fs_read_page,"):\r
            self._handle_fs_read_page(msg)\r
\r
        elif msg.startswith("fs_write_begin,"):\r
            self._handle_fs_write_begin(msg)\r
\r
        elif msg.startswith("fs_delete,"):\r
            self._handle_fs_delete(msg)\r
\r
        elif msg == "restart":\r
            self._send_reliable_stream(["ACK:restart"])\r
            time.sleep_ms(120)\r
            machine.reset()\r
\r
        elif msg == "disconnect":\r
            self._send_reliable_stream(["ACK:disconnect"])\r
            if self.conn_handle is not None:\r
                try:\r
                    self.ble.gap_disconnect(self.conn_handle)\r
                except Exception as e:\r
                    print("gap_disconnect failed:", e)\r
                    self._handle_disconnected("gap_disconnect_failed")\r
            else:\r
                self._handle_disconnected("disconnect_without_handle")\r
\r
        elif msg == "update":\r
            if not self._session_can_edit:\r
                self._send_reliable_stream(["ERR: Edit not permitted"])\r
                return\r
            self._send_reliable_stream(["ACK:update"])\r
            print("Begin receiving layout update...")\r
            self._expecting_update = True\r
            self._rx_layout_buffer = ""\r
            self._command_buffer = ""\r
\r
        elif msg == "who_are_you":\r
            if self.owner_id:\r
                self._send_reliable_stream(["owned,{},{},{},{},{}".format(\r
                    self.owner_id,\r
                    int(self.icon_id),\r
                    int(self.can_others_connect),\r
                    int(self.can_others_edit),\r
                    self._protocol_field(self.owner_name),\r
                )])\r
            else:\r
                self._send_reliable_stream(["unowned"])\r
\r
        elif msg.startswith("request_permission,"):\r
            parts = msg.split(",", 2)\r
            if len(parts) < 3:\r
                self._send_reliable_stream(["ERR: Malformed request_permission"])\r
                return\r
            requester_id = parts[1]\r
            requester_name = self._protocol_field(parts[2])\r
\r
            if self.owner_id and requester_id == self.owner_id:\r
                if requester_name and requester_name != self.owner_name:\r
                    self.save_settings_to_file(\r
                        self.owner_id or "",\r
                        requester_name,\r
                        self.icon_id,\r
                        self.can_others_connect,\r
                        self.can_others_edit,\r
                        self.grid_cols,\r
                        self.grid_rows,\r
                    )\r
                self._session_can_edit = True\r
                self._session_is_owner = True\r
                self._send_reliable_stream(["perm,1,1"])\r
            else:\r
                self._session_is_owner = False\r
                if self.can_others_connect == 1:\r
                    self._session_can_edit = True if self.can_others_edit == 1 else False\r
                    self._send_reliable_stream(["perm,1,{}".format(1 if self._session_can_edit else 0)])\r
                else:\r
                    self._session_can_edit = False\r
                    self._send_reliable_stream(["perm,0,0"])\r
                    if self.conn_handle is not None:\r
                        try:\r
                            self.ble.gap_disconnect(self.conn_handle)\r
                        except Exception as e:\r
                            print("gap_disconnect after deny failed:", e)\r
                            self._handle_disconnected("deny_disconnect_failed")\r
                    else:\r
                        self._handle_disconnected("deny_without_handle")\r
\r
        elif msg.startswith("create,"):\r
            # create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>[,<cols>,<rows>]\r
            parts = msg.split(",")\r
            if len(parts) < 6:\r
                self._send_reliable_stream(["ERR: Malformed create command"])\r
                return\r
            _, owner_id, owner_name, icon_id_s, can_connect_s, can_edit_s = parts[:6]\r
            owner_name = self._protocol_field(owner_name)\r
            try:\r
                icon_id = int(icon_id_s)\r
            except:\r
                icon_id = 0\r
            try:\r
                can_connect = 1 if int(can_connect_s) == 1 else 0\r
            except:\r
                can_connect = 0\r
            try:\r
                can_edit = 1 if int(can_edit_s) == 1 else 0\r
            except:\r
                can_edit = 0\r
\r
            grid_cols = self.grid_cols\r
            grid_rows = self.grid_rows\r
            if len(parts) >= 8:\r
                try:\r
                    grid_cols = int(parts[6])\r
                except:\r
                    pass\r
                try:\r
                    grid_rows = int(parts[7])\r
                except:\r
                    pass\r
\r
            if can_connect == 0:\r
                can_edit = 0\r
\r
            self.save_settings_to_file(owner_id, owner_name, icon_id, can_connect, can_edit,\r
                                       grid_cols, grid_rows)\r
            self._session_can_edit = True\r
            self._session_is_owner = True\r
            try:\r
                self._advertise()\r
            except Exception:\r
                pass\r
            self._send_reliable_stream(["ACK:create"])\r
\r
        elif msg.startswith("settings_update,"):\r
            if not self._session_is_owner:\r
                self._send_reliable_stream(["ERR: Owner permission required"])\r
                return\r
            parts = msg.split(",")\r
            if len(parts) < 6:\r
                self._send_reliable_stream(["ERR: Malformed settings_update command"])\r
                return\r
            try:\r
                icon_id = int(parts[1])\r
            except:\r
                icon_id = self.icon_id\r
            try:\r
                can_connect = 1 if int(parts[2]) == 1 else 0\r
            except:\r
                can_connect = self.can_others_connect\r
            try:\r
                can_edit = 1 if int(parts[3]) == 1 else 0\r
            except:\r
                can_edit = self.can_others_edit\r
            try:\r
                grid_cols = int(parts[4])\r
            except:\r
                grid_cols = self.grid_cols\r
            try:\r
                grid_rows = int(parts[5])\r
            except:\r
                grid_rows = self.grid_rows\r
            owner_name = self.owner_name or ""\r
            if len(parts) >= 7:\r
                owner_name = self._protocol_field(parts[6]) or owner_name\r
\r
            if can_connect == 0:\r
                can_edit = 0\r
\r
            self.save_settings_to_file(\r
                self.owner_id or "",\r
                owner_name,\r
                icon_id,\r
                can_connect,\r
                can_edit,\r
                grid_cols,\r
                grid_rows,\r
            )\r
            try:\r
                self._advertise()\r
            except Exception:\r
                pass\r
            self._send_reliable_stream(["ACK:settings_update"])\r
\r
        else:\r
            self._dispatch_app_command(msg)\r
\r
    def _number_value(self, value):\r
        try:\r
            n = float(value)\r
            if n == int(n):\r
                return int(n)\r
            return n\r
        except:\r
            return value\r
\r
    def _auto_bind_main_callback(self, function_name, callback_attr, callbacks=None):\r
        try:\r
            callback = None\r
            if callbacks:\r
                callback = callbacks.get(function_name)\r
            if callable(callback):\r
                setattr(self, callback_attr, callback)\r
        except Exception as e:\r
            print("Auto callback binding failed for", function_name, e)\r
\r
    def _auto_bind_main_callbacks(self, callbacks=None):\r
        """Bind callbacks passed from main.py with callbacks=globals()."""\r
        self._auto_bind_main_callback("on_write", "_on_write_callback", callbacks)\r
        self._auto_bind_main_callback("on_button", "_on_button_callback", callbacks)\r
        self._auto_bind_main_callback("on_slider", "_on_slider_callback", callbacks)\r
        self._auto_bind_main_callback("on_toggle", "_on_toggle_callback", callbacks)\r
        self._auto_bind_main_callback("on_connect", "_on_connect_callback", callbacks)\r
        self._auto_bind_main_callback("on_disconnect", "_on_disconnect_callback", callbacks)\r
\r
    def _dispatch_app_command(self, msg):\r
        """Route app controls to friendly callbacks, with on_write as a raw fallback."""\r
        try:\r
            command_type, payload = msg.split(",", 1)\r
        except:\r
            print("Unknown app message:", msg)\r
            if self._on_write_callback:\r
                try:\r
                    self._on_write_callback(msg)\r
                except Exception as e:\r
                    print("Write callback error:", e)\r
            return\r
\r
        try:\r
            if command_type == "button":\r
                if self._on_button_callback:\r
                    self._on_button_callback(payload)\r
                    return\r
\r
            elif command_type == "slider":\r
                try:\r
                    name, value_s = payload.split(":", 1)\r
                except:\r
                    print("Bad slider payload:", payload)\r
                    return\r
                if self._on_slider_callback:\r
                    self._on_slider_callback(name, self._number_value(value_s))\r
                    return\r
\r
            elif command_type == "toggle":\r
                try:\r
                    name, value_s = payload.split(":", 1)\r
                except:\r
                    print("Bad toggle payload:", payload)\r
                    return\r
                if self._on_toggle_callback:\r
                    self._on_toggle_callback(name, int(float(value_s)) == 1)\r
                    return\r
\r
        except Exception as e:\r
            print("Control callback error:", e)\r
            return\r
\r
        if self._on_write_callback:\r
            try:\r
                self._on_write_callback(msg)\r
            except Exception as e:\r
                print("Write callback error:", e)\r
        else:\r
            print("Unhandled app command:", msg)\r
\r
    def send_layout_to_web(self):\r
        """Build and send layout payload once per request, ending with '__END__'."""\r
        lines = ["#VERSION,{}".format(LAYOUT_VERSION),\r
                 "#GRID,{},{}".format(self.grid_cols, self.grid_rows)]\r
        for ctrl in self.controls:\r
            if ctrl["type"] not in ALLOWED_COMMAND_TYPES:\r
                continue\r
            x = ctrl["x"] if ctrl["x"] is not None else "n"\r
            y = ctrl["y"] if ctrl["y"] is not None else "n"\r
            w = ctrl["width"] if ctrl["width"] is not None else "n"\r
            h = ctrl["height"] if ctrl["height"] is not None else "n"\r
            r = ctrl.get("rotation", 0)\r
            if ctrl["type"] == "slider":\r
                mn = ctrl.get("min", 0)\r
                mx = ctrl.get("max", 100)\r
                recenter = ctrl.get("recenter", "none")\r
                lines.append("{},{},{},{},{},{},{},{},{},{}".format(\r
                    ctrl['type'], ctrl['name'], x, y, w, h, r, mn, mx, recenter))\r
            elif ctrl["type"] == "toggle":\r
                initial = 1 if ctrl.get("initial", 0) == 1 else 0\r
                lines.append("{},{},{},{},{},{},{},{}".format(\r
                    ctrl['type'], ctrl['name'], x, y, w, h, r, initial))\r
            elif ctrl["type"] == "radar":\r
                lines.append("{},{},{},{},{},{},{},{},{},{},{}".format(\r
                    ctrl['type'], ctrl['name'], x, y, w, h, r,\r
                    ctrl.get("minAngle", 0),\r
                    ctrl.get("maxAngle", 180),\r
                    ctrl.get("maxDistance", 200),\r
                    ctrl.get("fadeMs", 1200)))\r
            else:\r
                lines.append("{},{},{},{},{},{},{}".format(ctrl['type'], ctrl['name'], x, y, w, h, r))\r
        lines.append("__END__")\r
        self._send_reliable_stream(lines)\r
        print("[send_layout] Sent layout ({} controls)".format(len(self.controls)))\r
\r
    def _handle_full_layout_update(self, raw_data):\r
        """Parses accumulated update lines and saves the layout."""\r
        if not self._session_can_edit:\r
            self._send_reliable_stream(["ERR: Edit not permitted"])\r
            return\r
        try:\r
            lines = [l.strip() for l in raw_data.strip().split("\\n") if l.strip()]\r
\r
            overrides = {}\r
            for line in lines:\r
                if line.startswith("update,"):\r
                    line = line[len("update,"):]\r
                parts = line.split(",")\r
                if len(parts) < 7:\r
                    print("Skipping malformed update line:", line)\r
                    continue\r
                ctrl_type, name, x, y, w, h, r = parts[:7]\r
\r
                def _parse_or_none(s):\r
                    if s == "n":\r
                        return None\r
                    try:\r
                        return int(float(s))\r
                    except:\r
                        return None\r
\r
                override = {\r
                    "type": ctrl_type,\r
                    "name": name,\r
                    "x": _parse_or_none(x),\r
                    "y": _parse_or_none(y),\r
                    "width": _parse_or_none(w),\r
                    "height": _parse_or_none(h),\r
                    "rotation": int(float(r)) if r not in ("n", "") else 0\r
                }\r
                if ctrl_type == "slider" and len(parts) >= 10:\r
                    try:\r
                        override["min"] = int(float(parts[7]))\r
                        override["max"] = int(float(parts[8]))\r
                    except:\r
                        pass\r
                    if parts[9] in SLIDER_RECENTER_MODES:\r
                        override["recenter"] = parts[9]\r
                    if override.get("max") == override.get("min"):\r
                        override["max"] = override["min"] + 1\r
                elif ctrl_type == "toggle" and len(parts) >= 8:\r
                    try:\r
                        override["initial"] = 1 if int(float(parts[7])) == 1 else 0\r
                    except:\r
                        override["initial"] = 0\r
                elif ctrl_type == "radar" and len(parts) >= 11:\r
                    try:\r
                        override["minAngle"] = int(float(parts[7]))\r
                        override["maxAngle"] = int(float(parts[8]))\r
                        override["maxDistance"] = max(1, int(float(parts[9])))\r
                        override["fadeMs"] = max(120, int(float(parts[10])))\r
                    except:\r
                        pass\r
                overrides[name] = override\r
\r
            updated = []\r
            names = set()\r
            for base in self.base_controls:\r
                c = dict(base)\r
                if c["name"] in overrides:\r
                    c = self._merge_base_with_layout_override(c, overrides[c["name"]])\r
                updated.append(c)\r
                names.add(c["name"])\r
            dropped = len([name for name in overrides if name not in names])\r
\r
            self.controls = updated\r
            self.save_layout_to_file()\r
            self._send_reliable_stream(["LAYOUT_SAVED"])\r
            if dropped:\r
                print("Dropped stale layout controls:", dropped)\r
            print("Layout updated successfully.")\r
        except Exception as e:\r
            print("Error parsing layout update:", e)\r
            self._send_reliable_stream(["ERR: Failed to parse layout."])\r
\r
    # -------------------- BLE file management --------------------\r
    def _clean_fs_path(self, raw):\r
        try:\r
            path = str(raw).strip().replace("\\\\", "/")\r
        except:\r
            path = ""\r
        if not path:\r
            return "/"\r
        if ".." in path:\r
            return ""\r
        if not path.startswith("/"):\r
            path = "/" + path\r
        return path\r
\r
    def _path_for_open(self, path):\r
        return path[1:] if path.startswith("/") else path\r
\r
    def _handle_fs_list(self, msg):\r
        parts = msg.split(",", 1)\r
        base = self._clean_fs_path(parts[1] if len(parts) > 1 else "/")\r
        if not base:\r
            self._send_reliable_stream(["ERR: Bad path", "__END__"])\r
            return\r
        open_base = self._path_for_open(base)\r
        if open_base == "":\r
            open_base = "."\r
        lines = []\r
        try:\r
            for name in os.listdir(open_base):\r
                path = (base.rstrip("/") + "/" + name) if base != "/" else "/" + name\r
                try:\r
                    st = os.stat(self._path_for_open(path))\r
                    mode = st[0]\r
                    kind = "dir" if (mode & 0x4000) else "file"\r
                    size = st[6]\r
                except:\r
                    kind = "unknown"\r
                    size = -1\r
                lines.append("fs_entry,{},{},{}".format(kind, path, size))\r
            lines.append("__END__")\r
            self._send_reliable_stream(lines)\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_list failed {}".format(e), "__END__"])\r
\r
    def _handle_fs_capabilities(self):\r
        self._send_reliable_stream([\r
            "fs_capabilities,version,{},page_read,1,max_page,192,stream_read,1,stream_chunk,128".format(__version__),\r
            "__END__",\r
        ])\r
\r
    def _handle_fs_read_stream(self, msg):\r
        parts = msg.split(",", 2)\r
        if len(parts) < 2:\r
            self._send_reliable_stream(["ERR: Bad fs_read_stream", "__END__"])\r
            return\r
        path = self._clean_fs_path(parts[1])\r
        if not path:\r
            self._send_reliable_stream(["ERR: Bad path", "__END__"])\r
            return\r
        try:\r
            chunk_size = 128\r
            if len(parts) >= 3:\r
                chunk_size = max(16, min(192, int(parts[2])))\r
        except:\r
            self._send_reliable_stream(["ERR: Bad fs_read_stream chunk", "__END__"])\r
            return\r
        try:\r
            open_path = self._path_for_open(path)\r
            total = os.stat(open_path)[6]\r
            checksum = 0\r
            offset = 0\r
            lines = ["fs_stream_begin,{},{},{}".format(path, total, chunk_size)]\r
            with open(open_path, "rb") as f:\r
                while True:\r
                    chunk = f.read(chunk_size)\r
                    if not chunk:\r
                        break\r
                    for b in chunk:\r
                        checksum = (checksum + b) & 0xFFFFFFFF\r
                    hex_data = ubinascii.hexlify(chunk).decode()\r
                    lines.append("fs_stream_chunk,{},{}".format(offset, hex_data))\r
                    offset += len(chunk)\r
            lines.append("fs_stream_end,{},{},{}".format(path, total, checksum))\r
            lines.append("__END__")\r
            self._send_reliable_stream(lines)\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_read_stream failed {}".format(e), "__END__"])\r
\r
    def _handle_fs_read_page(self, msg):\r
        parts = msg.split(",", 3)\r
        if len(parts) < 4:\r
            self._send_reliable_stream(["ERR: Bad fs_read_page", "__END__"])\r
            return\r
        path = self._clean_fs_path(parts[1])\r
        if not path:\r
            self._send_reliable_stream(["ERR: Bad path", "__END__"])\r
            return\r
        try:\r
            offset = max(0, int(parts[2]))\r
            length = max(1, min(192, int(parts[3])))\r
        except:\r
            self._send_reliable_stream(["ERR: Bad fs_read_page range", "__END__"])\r
            return\r
        try:\r
            open_path = self._path_for_open(path)\r
            st = os.stat(open_path)\r
            with open(open_path, "rb") as f:\r
                f.seek(offset)\r
                chunk = f.read(length)\r
            hex_data = ubinascii.hexlify(chunk).decode() if chunk else ""\r
            self._send_reliable_stream([\r
                "fs_page,{},{},{},{}".format(path, offset, st[6], hex_data),\r
                "__END__",\r
            ])\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_read_page failed {}".format(e), "__END__"])\r
\r
    def _handle_fs_write_begin(self, msg):\r
        if not self._session_can_edit:\r
            self._send_reliable_stream(["ERR: Edit not permitted"])\r
            return\r
        path = self._clean_fs_path(msg.split(",", 1)[1])\r
        if not path:\r
            self._send_reliable_stream(["ERR: Bad path"])\r
            return\r
        protected = ("/BLEPeripheral.py",)\r
        # The BLE runtime itself should only be changed through USB installer/recovery.\r
        # /main.py may be replaced over BLE; the running program keeps using the\r
        # current in-memory code until the user explicitly restarts the Pico.\r
        if path in protected:\r
            self._send_reliable_stream(["ERR: Protected runtime file"])\r
            return\r
        self._file_write_path = self._path_for_open(path)\r
        self._file_write_tmp = self._file_write_path + ".tmp"\r
        try:\r
            with open(self._file_write_tmp, "wb") as f:\r
                pass\r
            self._expecting_file_write = True\r
            self._send_reliable_stream(["ACK:fs_write_begin"])\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_write_begin failed {}".format(e)])\r
\r
    def _append_file_write_chunk(self, hex_data):\r
        if not self._file_write_tmp:\r
            self._send_reliable_stream(["ERR: No file write active"])\r
            self._expecting_file_write = False\r
            return\r
        try:\r
            data = ubinascii.unhexlify(hex_data)\r
            with open(self._file_write_tmp, "ab") as f:\r
                f.write(data)\r
        except Exception as e:\r
            self._expecting_file_write = False\r
            self._send_reliable_stream(["ERR: fs_write_chunk failed {}".format(e)])\r
\r
    def _finish_file_write(self):\r
        try:\r
            try:\r
                os.remove(self._file_write_path)\r
            except:\r
                pass\r
            os.rename(self._file_write_tmp, self._file_write_path)\r
            self._send_reliable_stream(["ACK:fs_write_done"])\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_write_end failed {}".format(e)])\r
        finally:\r
            self._expecting_file_write = False\r
            self._file_write_path = None\r
            self._file_write_tmp = None\r
\r
    def _handle_fs_delete(self, msg):\r
        if not self._session_can_edit:\r
            self._send_reliable_stream(["ERR: Edit not permitted"])\r
            return\r
        path = self._clean_fs_path(msg.split(",", 1)[1])\r
        if path in ("/BLEPeripheral.py", "/main.py"):\r
            self._send_reliable_stream(["ERR: Protected runtime file"])\r
            return\r
        try:\r
            os.remove(self._path_for_open(path))\r
            self._send_reliable_stream(["ACK:fs_delete"])\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_delete failed {}".format(e)])\r
\r
    # -------------------- External hooks --------------------\r
    def send_radar(self, name, angle, distance_cm):\r
        """Send one radar telemetry sample to the app: radar,<NAME>,<ANGLE>,<DISTANCE_CM>."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            angle_value = int(float(angle))\r
            distance_value = round(float(distance_cm), 1)\r
            self.send_with_retry(\r
                "radar,{},{},{}\\n".format(clean_name, angle_value, distance_value),\r
                max_attempts=1,\r
            )\r
        except Exception as e:\r
            print("send_radar failed:", e)\r
\r
    def send_toggle_state(self, name, value):\r
        """Send current toggle state to the app: toggle_state,<NAME>,<0|1>."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            state = 1 if value else 0\r
            self.send_with_retry(\r
                "toggle_state,{},{:d}\\n".format(clean_name, state),\r
                max_attempts=1,\r
            )\r
        except Exception as e:\r
            print("send_toggle_state failed:", e)\r
\r
    def send_text(self, name, message):\r
        """Send text to the app: text,<NAME>,<MESSAGE>."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            clean_message = str(message).replace("\\r", " ").replace("\\n", " ").strip()\r
            self.send_with_retry(\r
                "text,{},{}\\n".format(clean_name, clean_message),\r
                max_attempts=1,\r
            )\r
        except Exception as e:\r
            print("send_text failed:", e)\r
\r
    def on_write(self, callback):\r
        self._on_write_callback = callback\r
\r
    def on_button(self, callback):\r
        self._on_button_callback = callback\r
\r
    def on_slider(self, callback):\r
        self._on_slider_callback = callback\r
\r
    def on_toggle(self, callback):\r
        self._on_toggle_callback = callback\r
\r
    def on_connect(self, callback):\r
        self._on_connect_callback = callback\r
\r
    def on_disconnect(self, callback):\r
        self._on_disconnect_callback = callback\r
`,Wb=`from machine import Pin, time_pulse_us\r
from utime import sleep_us\r
\r
__version__ = '0.2.1'\r
__author__ = 'Roberto Sánchez'\r
__license__ = "Apache License 2.0. https://www.apache.org/licenses/LICENSE-2.0"\r
\r
class HCSR04:\r
    """\r
    Driver to use the untrasonic sensor HC-SR04.\r
    The sensor range is between 2cm and 4m.\r
\r
    The timeouts received listening to echo pin are converted to OSError('Out of range')\r
\r
    """\r
    # echo_timeout_us is based in chip range limit (400cm)\r
    def __init__(self, trigger_pin, echo_pin, echo_timeout_us=500*2*30):\r
        """\r
        trigger_pin: Output pin to send pulses\r
        echo_pin: Readonly pin to measure the distance. The pin should be protected with 1k resistor\r
        echo_timeout_us: Timeout in microseconds to listen to echo pin. \r
        By default is based in sensor limit range (4m)\r
        """\r
        self.echo_timeout_us = echo_timeout_us\r
        # Init trigger pin (out)\r
        self.trigger = Pin(trigger_pin, mode=Pin.OUT, pull=None)\r
        self.trigger.value(0)\r
\r
        # Init echo pin (in)\r
        self.echo = Pin(echo_pin, mode=Pin.IN, pull=None)\r
\r
    def _send_pulse_and_wait(self):\r
        """\r
        Send the pulse to trigger and listen on echo pin.\r
        We use the method \`machine.time_pulse_us()\` to get the microseconds until the echo is received.\r
        """\r
        self.trigger.value(0) # Stabilize the sensor\r
        sleep_us(5)\r
        self.trigger.value(1)\r
        # Send a 10us pulse.\r
        sleep_us(10)\r
        self.trigger.value(0)\r
        try:\r
            pulse_time = time_pulse_us(self.echo, 1, self.echo_timeout_us)\r
            # time_pulse_us returns -2 if there was timeout waiting for condition; and -1 if there was timeout during the main measurement. It DOES NOT raise an exception\r
            # ...as of MicroPython 1.17: http://docs.micropython.org/en/v1.17/library/machine.html#machine.time_pulse_us\r
            if pulse_time < 0:\r
                MAX_RANGE_IN_CM = const(500) # it's really ~400 but I've read people say they see it working up to ~460\r
                pulse_time = int(MAX_RANGE_IN_CM * 29.1) # 1cm each 29.1us\r
            return pulse_time\r
        except OSError as ex:\r
            if ex.args[0] == 110: # 110 = ETIMEDOUT\r
                raise OSError('Out of range')\r
            raise ex\r
\r
    def distance_mm(self):\r
        """\r
        Get the distance in milimeters without floating point operations.\r
        """\r
        pulse_time = self._send_pulse_and_wait()\r
\r
        # To calculate the distance we get the pulse_time and divide it by 2 \r
        # (the pulse walk the distance twice) and by 29.1 becasue\r
        # the sound speed on air (343.2 m/s), that It's equivalent to\r
        # 0.34320 mm/us that is 1mm each 2.91us\r
        # pulse_time // 2 // 2.91 -> pulse_time // 5.82 -> pulse_time * 100 // 582 \r
        mm = pulse_time * 100 // 582\r
        return mm\r
\r
    def distance_cm(self):\r
        """\r
        Get the distance in centimeters with floating point operations.\r
        It returns a float\r
        """\r
        pulse_time = self._send_pulse_and_wait()\r
\r
        # To calculate the distance we get the pulse_time and divide it by 2 \r
        # (the pulse walk the distance twice) and by 29.1 becasue\r
        # the sound speed on air (343.2 m/s), that It's equivalent to\r
        # 0.034320 cm/us that is 1cm each 29.1us\r
        cms = (pulse_time / 2) / 29.1\r
        return cms`,Jb=`import array, time\r
from machine import Pin\r
import rp2\r
\r
\r
# PIO state machine for RGB. Pulls 24 bits (rgb -> 3 * 8bit) automatically\r
@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=24)\r
def ws2812():\r
    T1 = 2\r
    T2 = 5\r
    T3 = 3\r
    wrap_target()\r
    label("bitloop")\r
    out(x, 1)               .side(0)    [T3 - 1]\r
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]\r
    jmp("bitloop")          .side(1)    [T2 - 1]\r
    label("do_zero")\r
    nop()                   .side(0)    [T2 - 1]\r
    wrap()\r
\r
\r
# PIO state machine for RGBW. Pulls 32 bits (rgbw -> 4 * 8bit) automatically\r
@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=32)\r
def sk6812():\r
    T1 = 2\r
    T2 = 5\r
    T3 = 3\r
    wrap_target()\r
    label("bitloop")\r
    out(x, 1)               .side(0)    [T3 - 1]\r
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]\r
    jmp("bitloop")          .side(1)    [T2 - 1]\r
    label("do_zero")\r
    nop()                   .side(0)    [T2 - 1]\r
    wrap()\r
\r
\r
# we need this because Micropython can't construct slice objects directly, only by\r
# way of supporting slice notation.\r
# So, e.g. slice_maker[1::4] gives a slice(1,None,4) object.\r
class slice_maker_class:\r
    def __getitem__(self, slc):\r
        return slc\r
\r
\r
slice_maker = slice_maker_class()\r
\r
\r
# Delay here is the reset time. You need a pause to reset the LED strip back to the initial LED\r
# however, if you have quite a bit of processing to do before the next time you update the strip\r
# you could put in delay=0 (or a lower delay)\r
#\r
# Class supports different order of individual colors (GRB, RGB, WRGB, GWRB ...). In order to achieve\r
# this, we need to flip the indexes: in 'RGBW', 'R' is on index 0, but we need to shift it left by 3 * 8bits,\r
# so in it's inverse, 'WBGR', it has exactly right index. Since micropython doesn't have [::-1] and recursive rev()\r
# isn't too efficient we simply do that by XORing (operator ^) each index with 3 (0b11) to make this flip.\r
# When dealing with just 'RGB' (3 letter string), this means same but reduced by 1 after XOR!.\r
# Example: in 'GRBW' we want final form of 0bGGRRBBWW, meaning G with index 0 needs to be shifted 3 * 8bit ->\r
# 'G' on index 0: 0b00 ^ 0b11 -> 0b11 (3), just as we wanted.\r
# Same hold for every other index (and - 1 at the end for 3 letter strings).\r
\r
class Neopixel:\r
    # Micropython doesn't implement __slots__, but it's good to have a place\r
    # to describe the data members...\r
    # __slots__ = [\r
    #    'num_leds',   # number of LEDs\r
    #    'pixels',     # array.array('I') of raw data for LEDs\r
    #    'mode',       # mode 'RGB' etc\r
    #    'W_in_mode',  # bool: is 'W' in mode\r
    #    'sm',         # state machine\r
    #    'shift',      # shift amount for each component, in a tuple for (R,B,G,W)\r
    #    'delay',      # delay amount\r
    #    'brightnessvalue', # brightness scale factor 1..255\r
    # ]\r
\r
    def __init__(self, num_leds, state_machine, pin, mode="RGB", delay=0.0003):\r
        """\r
        Constructor for library class\r
\r
        :param num_leds:  number of leds on your led-strip\r
        :param state_machine: id of PIO state machine used\r
        :param pin: pin on which data line to led-strip is connected\r
        :param mode: [default: "RGB"] mode and order of bits representing the color value.\r
        This can be any order of RGB or RGBW (neopixels are usually GRB)\r
        :param delay: [default: 0.0001] delay used for latching of leds when sending data\r
        """\r
        self.pixels = array.array("I", [0] * num_leds)\r
        self.mode = mode\r
        self.W_in_mode = 'W' in mode\r
        if self.W_in_mode:\r
            # RGBW uses different PIO state machine configuration\r
            self.sm = rp2.StateMachine(state_machine, sk6812, freq=8000000, sideset_base=Pin(pin))\r
            # tuple of values required to shift bit into position (check class desc.)\r
            self.shift = ((mode.index('R') ^ 3) * 8, (mode.index('G') ^ 3) * 8,\r
                          (mode.index('B') ^ 3) * 8, (mode.index('W') ^ 3) * 8)\r
        else:\r
            self.sm = rp2.StateMachine(state_machine, ws2812, freq=8000000, sideset_base=Pin(pin))\r
            self.shift = (((mode.index('R') ^ 3) - 1) * 8, ((mode.index('G') ^ 3) - 1) * 8,\r
                          ((mode.index('B') ^ 3) - 1) * 8, 0)\r
        self.sm.active(1)\r
        self.num_leds = num_leds\r
        self.delay = delay\r
        self.brightnessvalue = 255\r
\r
    def brightness(self, brightness=None):\r
        """\r
        Set the overall value to adjust brightness when updating leds\r
        or return class brightnessvalue if brightness is None\r
\r
        :param brightness: [default: None] Value of brightness on interval 1..255\r
        :return: class brightnessvalue member or None\r
        """\r
        if brightness is None:\r
            return self.brightnessvalue\r
        else:\r
            if brightness < 1:\r
                brightness = 1\r
        if brightness > 255:\r
            brightness = 255\r
        self.brightnessvalue = brightness\r
\r
    def set_pixel_line_gradient(self, pixel1, pixel2, left_rgb_w, right_rgb_w, how_bright=None):\r
        """\r
        Create a gradient with two RGB colors between "pixel1" and "pixel2" (inclusive)\r
\r
        :param pixel1: Index of starting pixel (inclusive)\r
        :param pixel2: Index of ending pixel (inclusive)\r
        :param left_rgb_w: Tuple of form (r, g, b) or (r, g, b, w) representing starting color\r
        :param right_rgb_w: Tuple of form (r, g, b) or (r, g, b, w) representing ending color\r
        :param how_bright: [default: None] Brightness of current interval. If None, use global brightness value\r
        :return: None\r
        """\r
        if pixel2 - pixel1 == 0:\r
            return\r
        right_pixel = max(pixel1, pixel2)\r
        left_pixel = min(pixel1, pixel2)\r
\r
        with_W = len(left_rgb_w) == 4 and self.W_in_mode\r
        r_diff = right_rgb_w[0] - left_rgb_w[0]\r
        g_diff = right_rgb_w[1] - left_rgb_w[1]\r
        b_diff = right_rgb_w[2] - left_rgb_w[2]\r
        if with_W:\r
            w_diff = (right_rgb_w[3] - left_rgb_w[3])\r
\r
        for i in range(right_pixel - left_pixel + 1):\r
            fraction = i / (right_pixel - left_pixel)\r
            red = round(r_diff * fraction + left_rgb_w[0])\r
            green = round(g_diff * fraction + left_rgb_w[1])\r
            blue = round(b_diff * fraction + left_rgb_w[2])\r
            # if it's (r, g, b, w)\r
            if with_W:\r
                white = round(w_diff * fraction + left_rgb_w[3])\r
                self.set_pixel(left_pixel + i, (red, green, blue, white), how_bright)\r
            else:\r
                self.set_pixel(left_pixel + i, (red, green, blue), how_bright)\r
\r
    def set_pixel_line(self, pixel1, pixel2, rgb_w, how_bright=None):\r
        """\r
        Set an array of pixels starting from "pixel1" to "pixel2" (inclusive) to the desired color.\r
\r
        :param pixel1: Index of starting pixel (inclusive)\r
        :param pixel2: Index of ending pixel (inclusive)\r
        :param rgb_w: Tuple of form (r, g, b) or (r, g, b, w) representing color to be used\r
        :param how_bright: [default: None] Brightness of current interval. If None, use global brightness value\r
        :return: None\r
        """\r
        if pixel2 >= pixel1:\r
            self.set_pixel(slice_maker[pixel1:pixel2 + 1], rgb_w, how_bright)\r
\r
    def set_pixel(self, pixel_num, rgb_w, how_bright=None):\r
        """\r
        Set red, green and blue (+ white) value of pixel on position <pixel_num>\r
        pixel_num may be a 'slice' object, and then the operation is applied\r
        to all pixels implied by the slice (most useful when called via __setitem__)\r
\r
        :param pixel_num: Index of pixel to be set or slice object representing multiple leds\r
        :param rgb_w: Tuple of form (r, g, b) or (r, g, b, w) representing color to be used\r
        :param how_bright: [default: None] Brightness of current interval. If None, use global brightness value\r
        :return: None\r
        """\r
        if how_bright is None:\r
            how_bright = self.brightness()\r
        sh_R, sh_G, sh_B, sh_W = self.shift\r
        bratio = how_bright / 255.0\r
\r
        red = round(rgb_w[0] * bratio)\r
        green = round(rgb_w[1] * bratio)\r
        blue = round(rgb_w[2] * bratio)\r
        white = 0\r
        # if it's (r, g, b, w)\r
        if len(rgb_w) == 4 and self.W_in_mode:\r
            white = round(rgb_w[3] * bratio)\r
\r
        pix_value = white << sh_W | blue << sh_B | red << sh_R | green << sh_G\r
        # set some subset, if pixel_num is a slice:\r
        if type(pixel_num) is slice:\r
            for i in range(*pixel_num.indices(self.num_leds)):\r
                self.pixels[i] = pix_value\r
        else:\r
            self.pixels[pixel_num] = pix_value\r
\r
    def get_pixel(self, pixel_num):\r
        """\r
        Get red, green, blue and white (if applicable) values of pixel on position <pixel_num>\r
\r
        :param pixel_num: Index of pixel to be set\r
        :return rgb_w: Tuple of form (r, g, b) or (r, g, b, w) representing color to be used\r
        """\r
        balance = self.pixels[pixel_num]\r
        sh_R, sh_G, sh_B, sh_W = self.shift\r
        if self.W_in_mode:\r
            w = (balance >> sh_W) & 255\r
        b = (balance >> sh_B) & 255\r
        r = (balance >> sh_R) & 255\r
        g = (balance >> sh_G) & 255\r
        red = int(r * 255 / self.brightness() )\r
        green = int(g * 255 / self.brightness() )\r
        blue = int(b * 255 / self.brightness() )\r
        if self.W_in_mode:\r
            white = int(w * 255 / self.brightness() )\r
            return (red,green,blue,white)\r
        else:\r
            return (red,green,blue)\r
\r
    def __setitem__(self, idx, rgb_w):\r
        """\r
        if npix is a Neopixel object,\r
        npix[10] = (0,255,0)        # <- sets #10 to green\r
        npix[15:21] = (255,0,0)     # <- sets 16,17 .. 20 to red\r
        npix[21:29:2] = (0,0,255)   # <- sets 21,23,25,27 to blue\r
        npix[1::2] = (0,0,0)        # <- sets all odd pixels to 'off'\r
        npix[:] = [(0,5,0),(0,5,0)] # <- replaces all pixels with those from the array\r
        (the 'slice' cases pass idx as a 'slice' object, and\r
        set_pixel processes the slice)\r
\r
        :param idx: Index can either be indexing number or slice\r
        :param rgb_w: Tuple (or list of tuples) of form (r, g, b) or (r, g, b, w) representing color to be used\r
        :return: None\r
        """\r
        if type(rgb_w) is list:\r
            # set some subset, if idx is a slice:\r
            if type(idx) is slice:\r
                for rgb_i, pixel_i in enumerate(range(*idx.indices(self.num_leds))):\r
                    self.set_pixel(pixel_i, rgb_w[rgb_i])\r
            else:\r
                raise ValueError("Index must be a slice when setting multiple pixels as list")\r
        else:\r
            self.set_pixel(idx, rgb_w)\r
\r
    def __len__(self):\r
        return self.num_leds\r
\r
    def __getitem__(self, idx):\r
        return self.get_pixel(idx)\r
\r
    def colorHSV(self, hue, sat, val):\r
        """\r
        Converts HSV color to rgb tuple and returns it.\r
        The logic is almost the same as in Adafruit NeoPixel library:\r
        https://github.com/adafruit/Adafruit_NeoPixel so all the credits for that\r
        go directly to them (license: https://github.com/adafruit/Adafruit_NeoPixel/blob/master/COPYING)\r
\r
        :param hue: Hue component. Should be on interval 0..65535\r
        :param sat: Saturation component. Should be on interval 0..255\r
        :param val: Value component. Should be on interval 0..255\r
        :return: (r, g, b) tuple\r
        """\r
        if hue >= 65536:\r
            hue %= 65536\r
\r
        hue = (hue * 1530 + 32768) // 65536\r
        if hue < 510:\r
            b = 0\r
            if hue < 255:\r
                r = 255\r
                g = hue\r
            else:\r
                r = 510 - hue\r
                g = 255\r
        elif hue < 1020:\r
            r = 0\r
            if hue < 765:\r
                g = 255\r
                b = hue - 510\r
            else:\r
                g = 1020 - hue\r
                b = 255\r
        elif hue < 1530:\r
            g = 0\r
            if hue < 1275:\r
                r = hue - 1020\r
                b = 255\r
            else:\r
                r = 255\r
                b = 1530 - hue\r
        else:\r
            r = 255\r
            g = 0\r
            b = 0\r
\r
        v1 = 1 + val\r
        s1 = 1 + sat\r
        s2 = 255 - sat\r
\r
        r = ((((r * s1) >> 8) + s2) * v1) >> 8\r
        g = ((((g * s1) >> 8) + s2) * v1) >> 8\r
        b = ((((b * s1) >> 8) + s2) * v1) >> 8\r
\r
        return r, g, b\r
\r
    def rotate_left(self, num_of_pixels=None):\r
        """\r
        Rotate <num_of_pixels> pixels to the left\r
\r
        :param num_of_pixels: Number of pixels to be shifted to the left. If None, it shifts for 1.\r
        :return: None\r
        """\r
        if num_of_pixels is None:\r
            num_of_pixels = 1\r
        self.pixels = self.pixels[num_of_pixels:] + self.pixels[:num_of_pixels]\r
\r
    def rotate_right(self, num_of_pixels=None):\r
        """\r
        Rotate <num_of_pixels> pixels to the right\r
\r
        :param num_of_pixels: Number of pixels to be shifted to the right. If  None, it shifts for 1.\r
        :return: None\r
        """\r
        if num_of_pixels is None:\r
            num_of_pixels = 1\r
        num_of_pixels = -1 * num_of_pixels\r
        self.pixels = self.pixels[num_of_pixels:] + self.pixels[:num_of_pixels]\r
\r
    def show(self):\r
        """\r
        Send data to led-strip, making all changes on leds have an effect.\r
        This method should be used after every method that changes the state of leds or after a chain of changes.\r
        :return: None\r
        """\r
        # If mode is RGB, we cut 8 bits of, otherwise we keep all 32\r
        cut = 8\r
        if self.W_in_mode:\r
            cut = 0\r
        \r
        self.sm.put(self.pixels, cut)\r
\r
        time.sleep(self.delay)\r
\r
    def fill(self, rgb_w, how_bright=None):\r
        """\r
        Fill the entire strip with color rgb_w\r
\r
        :param rgb_w: Tuple of form (r, g, b) or (r, g, b, w) representing color to be used\r
        :param how_bright: [default: None] Brightness of current interval. If None, use global brightness value\r
        :return: None\r
        """\r
        # set_pixel over all leds.\r
        self.set_pixel(slice_maker[:], rgb_w, how_bright)\r
\r
    def clear(self):\r
        """\r
        Clear the entire strip, i.e. set every led color to 0.\r
\r
        :return: None\r
        """\r
        self.pixels = array.array("I", [0] * self.num_leds)\r
\r
`,e0=`import utime as time\r
from BLEPeripheral import BLEPeripheral\r
from neopixel import Neopixel\r
\r
\r
# Her vælger du, hvor NeoPixel'en sidder.\r
# Prøv at ændre NEOPIXEL_BEN, hvis din ledning sidder et andet sted.\r
NEOPIXEL_BEN = 0\r
\r
# Vi bruger 1 NeoPixel. Tallet kan ændres, hvis du har en ring eller strip.\r
ANTAL_NEOPIXELS = 1\r
\r
# Farven er rød, grøn, blå. Her er farven blå.\r
FARVE = (0, 80, 255)\r
\r
neopixels = Neopixel(ANTAL_NEOPIXELS, 0, NEOPIXEL_BEN, "GRB")\r
\r
# Appen viser to knapper og en slider.\r
BluetoothControls = (\r
    ('button', 'TAEND'),\r
    ('button', 'SLUK'),\r
    ('slider', 'LYS', 0, 100, 'none'),\r
)\r
\r
\r
def on_button(name):\r
    """Kører når der trykkes på en knap i appen."""\r
\r
    if name == 'TAEND':\r
        neopixels.fill(FARVE)\r
        neopixels.show()\r
        print('Lyset er tændt')\r
\r
    elif name == 'SLUK':\r
        neopixels.clear()\r
        neopixels.show()\r
        print('Lyset er slukket')\r
\r
\r
def on_slider(name, value):\r
    """Kører når slideren flyttes i appen."""\r
\r
    if name == 'LYS':\r
        # Appen sender 0-100. NeoPixel-biblioteket bruger 1-255.\r
        lysstyrke = int(1 + (int(value) / 100) * 254)\r
\r
        neopixels.brightness(lysstyrke)\r
        neopixels.fill(FARVE)\r
        neopixels.show()\r
\r
        print('Lysstyrke:', value)\r
\r
\r
def on_disconnect():\r
    """Sluk lyset når appen mister forbindelsen."""\r
    neopixels.clear()\r
    neopixels.show()\r
\r
\r
# callbacks=globals() betyder:\r
# "Brug funktionerne ovenfor, når appen sender noget."\r
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='NeoPixel', callbacks=globals())\r
\r
\r
while True:\r
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.\r
    time.sleep_ms(100)\r
`,n0=`# PicoFly.py\r
# =============================================================================\r
# PicoFly Firmware - MicroPython  (Raspberry Pi Pico W)\r
#\r
# PIN-MAPPING:\r
#   GPIO0  → Motor A IN1  (L293D pin 2 / 1A)\r
#   GPIO1  → Motor A IN2  (L293D pin 7 / 2A)\r
#   GPIO2  → Motor A EN   (L293D pin 1 / EN1,2)  ← PWM\r
#   GPIO3  → Motor B IN1  (L293D pin 10 / 3A)\r
#   GPIO4  → Motor B IN2  (L293D pin 15 / 4A)\r
#   GPIO5  → Motor B EN   (L293D pin 9 / EN3,4)  ← PWM\r
#   GPIO6  → Servo 1 (J4) ← PWM\r
#   GPIO7  → Servo 2 (J5) ← PWM\r
#   GPIO8  → Servo 3 (J6) ← PWM\r
#   GPIO9  → Servo 4 (J7) ← PWM\r
#   GPIO10-14, GPIO26-28 → Ekstra I/O\r
#\r
# BRUG:\r
#   from picofly_firmware import get_board\r
#   b = get_board()\r
#   b.servo1.set_angle(90)\r
#   b.motor_a.forward(0.5)\r
# =============================================================================\r
\r
from machine import Pin, PWM\r
import time\r
import _thread\r
\r
# ---------------------------------------------------------------------------\r
# Konstanter\r
# ---------------------------------------------------------------------------\r
PWM_FREQ_MOTOR  = 1000\r
PWM_FREQ_SERVO  = 50\r
PWM_MAX         = 65535\r
SERVO_MIN_US    = 500\r
SERVO_MAX_US    = 2500\r
SERVO_PERIOD_US = 20000\r
\r
# Pins der bruger PWM\r
_PWM_PINS = (2, 5, 6, 7, 8, 9)\r
\r
\r
# ---------------------------------------------------------------------------\r
# Hjælper: ryd PWM-kanaler ud fra evt. tidligere kørsel\r
# ---------------------------------------------------------------------------\r
def _release_pwm_pins():\r
    for p in _PWM_PINS:\r
        try:\r
            PWM(Pin(p)).deinit()\r
        except Exception:\r
            pass\r
\r
\r
# ---------------------------------------------------------------------------\r
# Heartbeat-LED (kerne 2)\r
#\r
# Kører på Pico's anden kerne så den aldrig blokeres af motor/servo-kode.\r
# Mønster: kort blink hvert 2. sekund  →  "jeg lever"\r
# ---------------------------------------------------------------------------\r
_led            = Pin("LED", Pin.OUT)\r
_heartbeat_run  = False   # sættes True når board er klar, False ved stop\r
\r
def _heartbeat_loop():\r
    """Kører på kerne 2. Må ikke kastes exceptions – crasher hele tråden."""\r
    while True:\r
        if _heartbeat_run:\r
            _led.on();  time.sleep_ms(80)\r
            _led.off(); time.sleep_ms(1920)   # blink hvert 2. sek\r
        else:\r
            _led.off(); time.sleep_ms(100)\r
\r
def _start_heartbeat():\r
    global _heartbeat_run\r
    _heartbeat_run = True\r
    # Starter kun tråden første gang – _thread.start_new_thread kan ikke\r
    # stoppes, så vi lader den løbe og styrer den med flaget.\r
    try:\r
        _thread.start_new_thread(_heartbeat_loop, ())\r
    except Exception:\r
        pass   # Tråden kørte allerede (fx ved reset_board)\r
\r
def heartbeat_stop():\r
    """Sluk heartbeat-blinket (LED slukkes)."""\r
    global _heartbeat_run\r
    _heartbeat_run = False\r
\r
def heartbeat_start():\r
    """Tænd heartbeat-blinket igen."""\r
    global _heartbeat_run\r
    _heartbeat_run = True\r
\r
\r
# ---------------------------------------------------------------------------\r
# HBridge\r
# ---------------------------------------------------------------------------\r
class HBridge:\r
    def __init__(self, pin_in1, pin_in2, pin_en):\r
        self._in1    = Pin(pin_in1, Pin.OUT)\r
        self._in2    = Pin(pin_in2, Pin.OUT)\r
        self._pin_en = Pin(pin_en)\r
        self._en     = PWM(self._pin_en)\r
        self._en.freq(PWM_FREQ_MOTOR)\r
        self.stop()\r
\r
    def forward(self, speed=1.0):\r
        speed = max(0.0, min(1.0, speed))\r
        self._in1.value(1); self._in2.value(0)\r
        self._en.duty_u16(int(speed * PWM_MAX))\r
\r
    def backward(self, speed=1.0):\r
        speed = max(0.0, min(1.0, speed))\r
        self._in1.value(0); self._in2.value(1)\r
        self._en.duty_u16(int(speed * PWM_MAX))\r
\r
    def brake(self):\r
        self._in1.value(1); self._in2.value(1)\r
        self._en.duty_u16(PWM_MAX)\r
\r
    def stop(self):\r
        self._in1.value(0); self._in2.value(0)\r
        self._en.duty_u16(0)\r
\r
    def set_speed(self, speed):\r
        if   speed > 0: self.forward(speed)\r
        elif speed < 0: self.backward(-speed)\r
        else:           self.stop()\r
\r
\r
# ---------------------------------------------------------------------------\r
# Servo\r
# ---------------------------------------------------------------------------\r
class Servo:\r
    def __init__(self, pin):\r
        self._pin   = Pin(pin)        # eksplicit ref – forhindrer GC\r
        self._pwm   = PWM(self._pin)\r
        self._pwm.freq(PWM_FREQ_SERVO)\r
        self._angle = 90.0\r
        self.set_angle(90)\r
\r
    def _us_to_duty(self, us):\r
        return int((us / SERVO_PERIOD_US) * PWM_MAX)\r
\r
    def set_angle(self, angle):\r
        angle = max(0.0, min(180.0, float(angle)))\r
        self._angle = angle\r
        us = SERVO_MIN_US + (SERVO_MAX_US - SERVO_MIN_US) * (angle / 180.0)\r
        self._pwm.duty_u16(self._us_to_duty(us))\r
\r
    def set_us(self, us):\r
        us = max(float(SERVO_MIN_US), min(float(SERVO_MAX_US), float(us)))\r
        self._pwm.duty_u16(self._us_to_duty(us))\r
\r
    @property\r
    def angle(self):\r
        return self._angle\r
\r
    def detach(self):\r
        self._pwm.duty_u16(0)\r
\r
    def attach(self):\r
        self._pwm.freq(PWM_FREQ_SERVO)\r
        self.set_angle(self._angle)\r
\r
\r
# ---------------------------------------------------------------------------\r
# PicoFly\r
# ---------------------------------------------------------------------------\r
class PicoFly:\r
    def __init__(self):\r
        self.motor_a = HBridge(0, 1, 2)\r
        self.motor_b = HBridge(3, 4, 5)\r
        self.servo1  = Servo(6)\r
        self.servo2  = Servo(7)\r
        self.servo3  = Servo(8)\r
        self.servo4  = Servo(9)\r
        self.gpio    = {n: Pin(n, Pin.IN, Pin.PULL_DOWN)\r
                        for n in (10, 11, 12, 13, 14, 26, 27, 28)}\r
\r
    @property\r
    def servos(self):\r
        return [None, self.servo1, self.servo2, self.servo3, self.servo4]\r
\r
    def stop_all(self):\r
        self.motor_a.stop()\r
        self.motor_b.stop()\r
        for s in [self.servo1, self.servo2, self.servo3, self.servo4]:\r
            s.set_angle(90)\r
\r
\r
# ---------------------------------------------------------------------------\r
# Singleton via get_board()\r
#\r
# Vi bruger en funktion i stedet for en modul-global variabel.\r
# Fordel: hvis oprettelsen fejler første gang, kan man kalde get_board()\r
# igen efter at have rettet problemet – uden at genindlæse hele modulet.\r
# Ulempe: ingen.  En modul-global crashede import-linjen og gav en\r
# uforklarlig "can't import name board"-fejl.\r
# ---------------------------------------------------------------------------\r
_board_instance = None\r
\r
def get_board():\r
    """\r
    Returnerer den globale PicoFly-instans.\r
    Opretter den første gang (eller hvis den ikke eksisterer endnu).\r
    PWM-pins frigøres automatisk inden oprettelse.\r
    """\r
    global _board_instance\r
    if _board_instance is None:\r
        _release_pwm_pins()\r
        _board_instance = PicoFly()\r
        _start_heartbeat()\r
        print("PicoFly: board oprettet OK  (LED blinker = klar)")\r
    return _board_instance\r
\r
\r
def reset_board():\r
    """\r
    Tving genoprettelse af board (fx hvis hardware skal reinitialiseres).\r
    """\r
    global _board_instance\r
    _board_instance = None\r
    return get_board()\r
`,t0=`import machine\r
import utime\r
\r
class KitronikPicoRobotics:\r
    #Class variables - these should be the same for all instances of the class.\r
    # If you wanted to write some code that stepped through\r
    # the servos or motors then this is the Base and size to do that\r
    SRV_REG_BASE = 0x08\r
    MOT_REG_BASE = 0x28\r
    REG_OFFSET = 4\r
    PRESCALE_VAL = b'\\x79'\r
    PI_ESTIMATE = 3.1416\r
\r
    #setup the PCA chip for 50Hz and zero out registers.\r
    def initPCA(self):\r
        # Make sure we are in a known position\r
        # Soft reset of the I2C chip\r
        self.i2c.writeto(0,"\\x06")\r
\r
        # setup the prescale to have 20mS pulse repetition - this is dictated by the servos.\r
        # set PWM Frequency Pre Scale.  The prescale value is determined with the formunla:\r
        # presscale value = round(osc clock / (4096 * update rate))\r
        # Where update rate is the output modulation frequency required.\r
        # For example, the output frequency of 50Hz (20ms) for the servo, with the internal oscillator \r
        # clock frequency of 25 Mhz is as follows:\r
        # prescale value = round( 25MHZ / (4096 * 50Hz) ) - 1 \r
        # prescale value = round (25000000 / (4096 * 50)) - 1 \r
        # presscale value = 121 = 79h = 0x79\r
        self.i2c.writeto_mem(108,0xfe,self.PRESCALE_VAL)\r
\r
        #block write outputs to off\r
        self.i2c.writeto_mem(108,0xfa,"\\x00")\r
        self.i2c.writeto_mem(108,0xfb,"\\x00")\r
        self.i2c.writeto_mem(108,0xfc,"\\x00")\r
        self.i2c.writeto_mem(108,0xfd,"\\x00")\r
        \r
        # come out of sleep\r
        self.i2c.writeto_mem(108,0x00,"\\x01")\r
        \r
        # It takes 500uS max for the oscillator to be up and running once the SLEEP bit (bit 4) has\r
        # been set to logic 0.  Timings on outputs are not guranteed if the PWM control registers are\r
        # accessed within the 500uS window.\r
        utime.sleep_us(500)\r
    \r
    # Adjusts the servos.\r
    # This block should be used if the connected servo does not respond correctly to the 'servoWrite' command.\r
    # Try changing the value by small amounts and testing the servo until it correctly sets to the angle.\r
    def adjustServos(self, change):\r
        if change < -25:\r
            change = -25\r
        if change > 25:\r
            change = 25\r
        self.PRESCALE_VAL = (121 + change).to_bytes(1,"big")\r
        self.initPCA()\r
\r
    # To get the PWM pulses to the correct size and zero\r
    # offset these are the default numbers.\r
    #Servo multiplier is calcualted as follows:\r
    # 4096 pulses ->20mS 1mS-> count of 204.8\r
    # 1mS is 90 degrees of travel, so each degree is a count of 204.8/90->2.2755\r
    # servo pulses always have  aminimum value - so there is guarentees to be a pulse.\r
    # in the servos Ive examined this is 0.5ms or a count of 102\r
    #to clauclate the count for the corect pulse is simply:\r
    # (degrees x count per degree )+ offset \r
    def servoWrite(self,servo, degrees):\r
        #check the degrees is a reasonable number. we expect 0-180, so cap at those values.\r
        if(degrees>180):\r
            degrees = 180\r
        elif (degrees<0):\r
            degrees = 0\r
        #check the servo number\r
        if((servo<1) or (servo>8)):\r
            raise Exception("INVALID SERVO NUMBER") #harsh, but at least you'll know\r
        calcServo = self.SRV_REG_BASE + ((servo - 1) * self.REG_OFFSET)\r
        PWMVal = int((degrees*2.2755)+102) # see comment above for maths\r
        lowByte = PWMVal & 0xFF\r
        highByte = (PWMVal>>8)&0x01 #cap high byte at 1 - shoud never be more than 2.5mS.\r
        self.i2c.writeto_mem(self.CHIP_ADDRESS, calcServo,bytes([lowByte]))\r
        self.i2c.writeto_mem(self.CHIP_ADDRESS, calcServo+1,bytes([highByte]))\r
\r
    # Takes the servo to change and the angle in radians to move to.\r
    # 0 radians to 3.1416\r
    def servoWriteRadians(self, servo, radians):\r
        if servo < 1:\r
            servo = 1\r
        if servo > 8:\r
            servo = 8\r
        if radians < 0:\r
            radians = 0\r
        if radians > self.PI_ESTIMATE:\r
            radians = self.PI_ESTIMATE\r
        \r
        calcServo = self.SRV_REG_BASE + ((servo - 1) * self.REG_OFFSET)\r
        PWMVal = int((radians / self.PI_ESTIMATE) * 408) + 102 # See comment above for maths\r
        lowByte = PWMVal & 0xFF\r
        highByte = (PWMVal >> 8) & 0x01 # Cap high byte at 1 - shoud never be more than 2.5mS\r
        self.i2c.writeto_mem(self.CHIP_ADDRESS, calcServo, bytes([lowByte]))\r
        self.i2c.writeto_mem(self.CHIP_ADDRESS, calcServo + 1, bytes([highByte]))\r
\r
    #Driving the motor is simpler than the servo - just convert 0-100% to 0-4095 and push it to the correct registers.\r
    #each motor has 4 writes - low and high bytes for a pair of registers. \r
    def motorOn(self,motor, direction, speed):\r
        #cap speed to 0-100%\r
        if (speed<0):\r
            speed = 0\r
        elif (speed>100):\r
            speed=100\r
\r
        if((motor<1) or (motor>4)):\r
            raise Exception("INVALID MOTOR NUMBER") # harsh, but at least you'll know\r
            \r
        motorReg = self.MOT_REG_BASE + (2 * (motor - 1) * self.REG_OFFSET)\r
        PWMVal = int(speed * 40.95)\r
        lowByte = PWMVal & 0xFF\r
        highByte = (PWMVal>>8) & 0xFF #motors can use all 0-4096\r
        #print (motor, direction, "LB ",lowByte," HB ",highByte)\r
        if direction == "f":\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg,bytes([lowByte]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+1,bytes([highByte]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+4,bytes([0]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+5,bytes([0]))\r
        elif direction == "r":\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+4,bytes([lowByte]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+5,bytes([highByte]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg,bytes([0]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+1,bytes([0]))\r
        else:\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+4,bytes([0]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+5,bytes([0]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg,bytes([0]))\r
            self.i2c.writeto_mem(self.CHIP_ADDRESS, motorReg+1,bytes([0]))\r
            raise Exception("INVALID DIRECTION")\r
    #To turn off set the speed to 0...\r
    def motorOff(self,motor):\r
        self.motorOn(motor,"f",0)\r
        \r
    #################\r
    #Stepper Motors\r
    #################\r
    #this is only a basic full stepping.\r
    #speed sets the length of the pulses (and hence the speed...)\r
    #so is 'backwards' - the fastest that works reliably with the motors I have to hand is 20mS, but slower than that is good. tested to 2000 (2 seconds per step).\r
    # motor should be 1 or 2 - 1 is terminals for motor 1 and 2 on PCB, 2 is terminals for motor 3 and 4 on PCB\r
\r
    def step(self,motor, direction, steps, speed =20, holdPosition=False):\r
\r
        if((motor<1) or (motor>2)):\r
            raise Exception("INVALID MOTOR NUMBER") # harsh, but at least you'll know\r
\r
        if(direction =="f"):\r
            directions = ["f", "r"]\r
            coils = [((motor*2)-1),(motor*2)]\r
        elif (direction == "r"):\r
            directions = ["r", "f"]\r
            coils = [(motor*2),((motor*2)-1)]\r
        else:\r
            raise Exception("INVALID DIRECTION") #harsh, but at least you'll know\r
        while steps > 0: \r
            for direction in directions:\r
                if(steps == 0):\r
                    break\r
                for coil in coils:\r
                    self.motorOn(coil,direction,100)\r
                    utime.sleep_ms(speed)\r
                    steps -=1\r
                    if(steps == 0):\r
                        break\r
    #to save power turn off the coils once we have finished.\r
    #this means the motor wont hold position.\r
        if(holdPosition == False):            \r
            for coil in coils:\r
                self.motorOff(coil)\r
\r
    #Step an angle. this is limited by the step resolution - so 200 steps is 1.8 degrees per step for instance.\r
    # a request for 20 degrees with 200 steps/rev will result in 11 steps - or 19.8 rather than 20.\r
    def stepAngle(self,motor, direction, angle, speed =20, holdPosition=False, stepsPerRev=200):\r
        steps = int(angle/(360/stepsPerRev))\r
        print (steps)\r
        self.step(motor, direction, steps, speed, holdPosition)\r
        \r
\r
    # initialaisation code for using:\r
        #defaults to the standard pins and address for the kitronik board, but could be overridden\r
    def __init__(self, I2CAddress=108,sda=8,scl=9):\r
        self.CHIP_ADDRESS = 108\r
        sda=machine.Pin(sda)\r
        scl=machine.Pin(scl)\r
        self.i2c=machine.I2C(0,sda=sda, scl=scl, freq=100000)\r
        self.initPCA()`,l0=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
from hcsr04 import HCSR04\r
import PicoRobotics\r
\r
\r
# Servoens område. 45..135 betyder, at den scanner foran robotten.\r
SERVO_MIN = 45\r
SERVO_MAX = 135\r
SERVO_STEP = 3\r
SERVO_SETTLE_MS = 60\r
\r
# Radarens afstandsområde og start-tilstand.\r
RADAR_MAX_CM = 200\r
SCAN_INITIAL = 0\r
RADAR_DOT_DURATION = 1600\r
\r
# Appen får en toggle-knap og et radar-display.\r
BluetoothControls = (\r
    ('toggle', 'SCAN', SCAN_INITIAL),\r
    ('radar', 'RADAR', SERVO_MIN, SERVO_MAX, RADAR_MAX_CM, RADAR_DOT_DURATION),\r
)\r
\r
\r
# LED'en viser, om appen er forbundet.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
# board styrer servoen, og sensor måler afstand med HC-SR04.\r
board = PicoRobotics.KitronikPicoRobotics()\r
sensor = HCSR04(trigger_pin=2, echo_pin=3)\r
\r
# Disse variabler husker, om der scannes, og hvor servoen peger.\r
scan_enabled = SCAN_INITIAL == 1\r
scan_angle = SERVO_MIN\r
scan_direction = 1\r
\r
\r
def on_toggle(name, value):\r
    """Reager på toggle-knapper fra appen."""\r
    global scan_enabled\r
\r
    # SCAN-knappen i appen tænder eller slukker radaren.\r
    if name == 'SCAN':\r
        scan_enabled = bool(value)\r
        ble.send_toggle_state('SCAN', scan_enabled)\r
        print('Scan ->', scan_enabled)\r
    else:\r
        print('Unknown toggle:', name)\r
\r
\r
def on_connect():\r
    global scan_enabled, scan_angle, scan_direction\r
\r
    # Start altid en ny forbindelse med scanning slukket og servoen i midten.\r
    led.on()\r
    scan_enabled = False\r
    scan_angle = SERVO_MIN\r
    scan_direction = 1\r
    board.servoWrite(1, 90)\r
    ble.send_toggle_state('SCAN', False)\r
    print('BLE client connected')\r
\r
\r
def on_disconnect():\r
    global scan_enabled, scan_angle, scan_direction\r
\r
    # Når appen afbryder, stopper scanningen og servoen sættes i midten.\r
    led.off()\r
    scan_enabled = False\r
    scan_angle = SERVO_MIN\r
    scan_direction = 1\r
    board.servoWrite(1, 90)\r
    ble.send_toggle_state('SCAN', False)\r
    print('BLE client disconnected')\r
\r
\r
# callbacks=globals() gør, at BLEPeripheral kan finde on_toggle osv.\r
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='Radar', callbacks=globals())\r
\r
\r
while True:\r
    # Hvis scanning er slukket, venter programmet bare lidt.\r
    if not scan_enabled or not ble.connected:\r
        time.sleep_ms(100)\r
        continue\r
\r
    # Drej servoen til næste vinkel, og giv den tid til at nå derhen.\r
    board.servoWrite(1, scan_angle)\r
    time.sleep_ms(SERVO_SETTLE_MS)\r
\r
    # Mål afstand og send vinkel + afstand til radar-displayet i appen.\r
    distance = sensor.distance_cm()\r
    print('Radar:', scan_angle, distance, 'cm')\r
    ble.send_radar('RADAR', scan_angle, distance)\r
\r
    # Gå videre til næste vinkel. Når kanten rammes, vendes retningen.\r
    scan_angle += SERVO_STEP * scan_direction\r
    if scan_angle >= SERVO_MAX:\r
        scan_angle = SERVO_MAX\r
        scan_direction = -1\r
    elif scan_angle <= SERVO_MIN:\r
        scan_angle = SERVO_MIN\r
        scan_direction = 1\r
`,r0=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
\r
\r
# Appen viser kun et tekstfelt.\r
BluetoothControls = (\r
    ('text', 'BESKED'),\r
)\r
\r
\r
# LED'en viser, om appen er forbundet.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
\r
def on_connect():\r
    """Send den første besked når appen forbinder."""\r
    led.on()\r
    ble.send_text('BESKED', 'Hej fra Picoen')\r
    print('BLE client connected')\r
\r
\r
def on_disconnect():\r
    """Sluk LED'en når appen mister forbindelsen."""\r
    led.off()\r
    print('BLE client disconnected')\r
\r
\r
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='SendTekst', callbacks=globals())\r
\r
counter = 0\r
\r
while True:\r
    # Send en ny besked med jævne mellemrum, så tekstfeltet er let at teste.\r
    if ble.connected:\r
        counter += 1\r
        ble.send_text('BESKED', 'Besked nummer {}'.format(counter))\r
        time.sleep_ms(2000)\r
    else:\r
        time.sleep_ms(100)\r
`,a0=`from machine import Pin, PWM, ADC\r
from BLEPeripheral import BLEPeripheral\r
from neopixel import Neopixel\r
from PicoFly import get_board\r
import utime as time\r
\r
# ============================================================\r
# Alarmstation med BLE kontrolpanel + servo door lock\r
#\r
# Hardware / pinout:\r
#   Fri NeoPixel LED:       GP15\r
#   PIR bevaegelsessensor:  GP16\r
#   Buzzer:                 GP14\r
#   Vandsensor power/VCC:   GP0\r
#   Vandsensor signal/S:    GP26 / ADC0\r
#   Keypad NeoPixel:        GP17\r
#   Keypad kolonner:        GP18, GP19, GP20\r
#   Keypad raekker:         GP21, GP22, GP27, GP28\r
#   Servo:                  PicoFly board.servo1\r
#\r
# Servo angles:\r
#   OPEN = 60\r
#   CLOSED = 100\r
# Swap these if your door moves the wrong way.\r
# ============================================================\r
\r
BluetoothControls = (\r
    ('toggle', 'ALARM', 1),\r
    ('toggle', 'DOR', 0),\r
\r
    ('button', 'AABN DOR'),\r
    ('button', 'LUK DOR'),\r
    ('button', 'NY KODE'),\r
    ('button', 'NULSTIL'),\r
    ('button', 'TEST BIP'),\r
\r
    ('slider', 'LED LYS', 0, 100, 'none'),\r
    ('slider', 'ROD', 0, 255, 'none'),\r
    ('slider', 'GRON', 0, 255, 'none'),\r
    ('slider', 'BLA', 0, 255, 'none'),\r
    ('slider', 'PIR TID', 1, 30, 'none'),\r
    ('slider', 'VAND GRAENSE', 0, 65535, 'none'),\r
    ('slider', 'BIP LYD', 0, 100, 'none'),\r
    ('slider', 'DOR TID', 1, 30, 'none'),\r
\r
    ('text', 'STATUS'),\r
    ('text', 'BESKED'),\r
    ('text', 'KODE'),\r
)\r
\r
# ---------------- Hardware ----------------\r
\r
onboard_led = Pin('LED', Pin.OUT)\r
onboard_led.off()\r
\r
pir = Pin(16, Pin.IN)\r
\r
water_power = Pin(0, Pin.OUT)\r
water_power.value(0)\r
water_signal = ADC(Pin(26))\r
\r
buzzer = PWM(Pin(14))\r
buzzer.duty_u16(0)\r
\r
free_led = Neopixel(1, 0, 15, "GRB")\r
keypad_led = Neopixel(1, 1, 17, "GRB")\r
\r
# Servo via PicoFly\r
board = get_board()\r
servo = board.servo1\r
\r
SERVO_OPEN_ANGLE = 60\r
SERVO_CLOSED_ANGLE = 100\r
\r
# This keypad is read rotated compared to the printed labels.\r
key_names = [\r
    ['OK',  '0', 'RET'],\r
    ['9',   '8', '7'],\r
    ['6',   '5', '4'],\r
    ['3',   '2', '1'],\r
]\r
\r
column_pins = [18, 19, 20]\r
row_pins = [21, 22, 27, 28]\r
\r
rows = [Pin(pin, Pin.OUT, value=1) for pin in row_pins]\r
columns = [Pin(pin, Pin.IN, Pin.PULL_UP) for pin in column_pins]\r
\r
# ---------------- State ----------------\r
\r
PIR_WARMUP_MS = 15000\r
PIR_ARM_DELAY_MS = 3000\r
ALARM_SOUND_MS = 5000\r
KEY_DEBOUNCE_MS = 80\r
\r
BUZZER_MIN_DUTY = 18000\r
BUZZER_MAX_DUTY = 32768\r
\r
alarm_enabled = True\r
alarm_triggered = False\r
code_change_mode = False\r
\r
secret_code = "1234"\r
entered_code = ""\r
\r
last_key = None\r
last_raw_key = None\r
last_key_change_ms = 0\r
\r
led_brightness = 50\r
led_color = [255, 50, 0]\r
\r
pir_hold_ms = 5000\r
motion_until = 0\r
pir_ready_at = time.ticks_add(time.ticks_ms(), PIR_WARMUP_MS)\r
last_pir_value = pir.value()\r
\r
water_threshold = 25000\r
latest_water = 0\r
\r
buzzer_volume = 50\r
alarm_sound_until = 0\r
alarm_beep_on = False\r
next_alarm_beep_ms = 0\r
next_water_check_ms = 0\r
next_status_ms = 0\r
\r
door_open = False\r
door_open_ms = 5000\r
door_auto_close_at = 0\r
\r
\r
# ---------------- BLE-safe helpers ----------------\r
\r
def ble_is_connected():\r
    try:\r
        return ble.connected\r
    except:\r
        return False\r
\r
\r
def ble_send_text(name, text):\r
    if ble_is_connected():\r
        try:\r
            ble.send_text(name, text)\r
        except Exception as e:\r
            print('BLE text send fejl:', e)\r
\r
\r
def ble_send_toggle_state(name, value):\r
    if ble_is_connected():\r
        try:\r
            ble.send_toggle_state(name, bool(value))\r
        except Exception as e:\r
            print('BLE toggle send fejl:', e)\r
\r
\r
# ---------------- Helpers ----------------\r
\r
def clamp(value, low, high):\r
    value = int(value)\r
    if value < low:\r
        return low\r
    if value > high:\r
        return high\r
    return value\r
\r
\r
def buzzer_duty():\r
    volume = clamp(buzzer_volume, 0, 100)\r
    if volume <= 0:\r
        return 0\r
    return int(BUZZER_MIN_DUTY + (volume / 100) * (BUZZER_MAX_DUTY - BUZZER_MIN_DUTY))\r
\r
\r
def pixel_brightness(percent):\r
    percent = clamp(percent, 0, 100)\r
    return 1 + int((percent / 100) * 254)\r
\r
\r
def set_pixel(pixel, color, brightness=50):\r
    pixel.brightness(pixel_brightness(brightness))\r
    pixel.fill(tuple(color))\r
    pixel.show()\r
\r
\r
def clear_pixel(pixel):\r
    pixel.clear()\r
    pixel.show()\r
\r
\r
def stop_buzzer():\r
    buzzer.duty_u16(0)\r
\r
\r
def send_message(message):\r
    print(message)\r
    ble_send_text('BESKED', message)\r
\r
\r
def send_code_text():\r
    if code_change_mode:\r
        ble_send_text('KODE', 'Ny kode: ' + entered_code)\r
    else:\r
        ble_send_text('KODE', 'Kode: ' + entered_code)\r
\r
\r
def make_live_status_text():\r
    return 'Alarm: {} | Udlost: {} | Dor: {} | Vand: {} | PIR: {}'.format(\r
        'TIL' if alarm_enabled else 'FRA',\r
        'JA' if alarm_triggered else 'NEJ',\r
        'AABEN' if door_open else 'LUKKET',\r
        latest_water,\r
        'AKTIV' if pir.value() == 1 else 'rolig',\r
    )\r
\r
\r
def send_live_status():\r
    status = make_live_status_text()\r
    print(status)\r
    ble_send_text('STATUS', status)\r
\r
\r
def set_status_light():\r
    if alarm_triggered and alarm_enabled:\r
        set_pixel(keypad_led, (255, 0, 0), 80)\r
    elif door_open:\r
        set_pixel(keypad_led, (255, 160, 0), 60)\r
    elif alarm_enabled:\r
        set_pixel(keypad_led, (0, 180, 0), 50)\r
    elif ble_is_connected():\r
        set_pixel(keypad_led, (0, 0, 180), 35)\r
    else:\r
        clear_pixel(keypad_led)\r
\r
\r
def update_free_led():\r
    if alarm_enabled:\r
        if alarm_triggered:\r
            set_pixel(free_led, (255, 0, 0), 90)\r
        else:\r
            set_pixel(free_led, (0, 0, 80), 20)\r
    else:\r
        set_pixel(free_led, led_color, led_brightness)\r
\r
\r
def play_tone(freq, duration_ms):\r
    duty = buzzer_duty()\r
    if duty <= 0:\r
        return\r
\r
    buzzer.freq(int(freq))\r
    buzzer.duty_u16(duty)\r
    time.sleep_ms(duration_ms)\r
    buzzer.duty_u16(0)\r
\r
\r
def read_water_sensor(samples=4):\r
    total = 0\r
\r
    water_power.value(1)\r
    time.sleep_ms(10)\r
\r
    try:\r
        for _ in range(samples):\r
            total += water_signal.read_u16()\r
            time.sleep_ms(2)\r
    finally:\r
        water_power.value(0)\r
\r
    return total // samples\r
\r
\r
# ---------------- Door / servo ----------------\r
\r
def set_servo_angle(angle):\r
    try:\r
        servo.set_angle(angle)\r
        return True\r
    except Exception as e:\r
        send_message('Servo fejl: {}'.format(e))\r
        return False\r
\r
\r
def send_door_state():\r
    ble_send_toggle_state('DOR', door_open)\r
\r
\r
def open_door(source=''):\r
    global door_open, door_auto_close_at\r
\r
    if set_servo_angle(SERVO_OPEN_ANGLE):\r
        door_open = True\r
        door_auto_close_at = time.ticks_add(time.ticks_ms(), door_open_ms)\r
\r
        send_door_state()\r
        update_free_led()\r
        set_status_light()\r
\r
        if source:\r
            send_message('Dor aabnet via {}'.format(source))\r
        else:\r
            send_message('Dor aabnet')\r
\r
\r
def close_door(source='', announce=True):\r
    global door_open, door_auto_close_at\r
\r
    if set_servo_angle(SERVO_CLOSED_ANGLE):\r
        was_open = door_open\r
\r
        door_open = False\r
        door_auto_close_at = 0\r
\r
        send_door_state()\r
        update_free_led()\r
        set_status_light()\r
\r
        if announce and was_open:\r
            if source:\r
                send_message('Dor lukket via {}'.format(source))\r
            else:\r
                send_message('Dor lukket')\r
\r
\r
def authorized_open_door(source):\r
    """\r
    Used when the keypad code is correct or when BLE is used to open the door.\r
    This disarms the alarm first, then opens the door.\r
    """\r
    global entered_code\r
\r
    set_alarm_state(False, source)\r
    entered_code = ""\r
    send_code_text()\r
    open_door(source)\r
    play_tone(1800, 160)\r
    send_live_status()\r
\r
\r
# ---------------- Alarm ----------------\r
\r
def set_alarm_state(enabled, source=''):\r
    global alarm_enabled, alarm_triggered, alarm_beep_on\r
    global motion_until, entered_code, code_change_mode, pir_ready_at\r
\r
    enabled = bool(enabled)\r
    changed = alarm_enabled != enabled\r
\r
    alarm_enabled = enabled\r
    alarm_triggered = False\r
    alarm_beep_on = False\r
    motion_until = 0\r
    entered_code = ""\r
    stop_buzzer()\r
\r
    if enabled:\r
        code_change_mode = False\r
        pir_ready_at = time.ticks_add(time.ticks_ms(), PIR_ARM_DELAY_MS)\r
\r
        # Closing the door when alarm is armed is safer.\r
        close_door('alarm tilkoblet', announce=False)\r
\r
        if changed:\r
            send_message('Alarm tilkoblet. PIR aktiv om {} sek'.format(PIR_ARM_DELAY_MS // 1000))\r
    else:\r
        if changed:\r
            if source:\r
                send_message('Alarm frakoblet via {}'.format(source))\r
            else:\r
                send_message('Alarm frakoblet')\r
\r
    ble_send_toggle_state('ALARM', alarm_enabled)\r
    send_code_text()\r
    update_free_led()\r
    set_status_light()\r
\r
\r
def trigger_alarm(reason):\r
    global alarm_triggered, alarm_sound_until\r
\r
    if not alarm_enabled:\r
        return\r
\r
    alarm_sound_until = time.ticks_add(time.ticks_ms(), ALARM_SOUND_MS)\r
\r
    if not alarm_triggered:\r
        alarm_triggered = True\r
        send_message('ALARM: ' + reason)\r
\r
    update_free_led()\r
    set_status_light()\r
\r
\r
def reset_alarm():\r
    global alarm_triggered, entered_code, alarm_beep_on\r
    global motion_until, alarm_sound_until, next_alarm_beep_ms\r
\r
    alarm_triggered = False\r
    alarm_beep_on = False\r
    motion_until = 0\r
    alarm_sound_until = 0\r
    next_alarm_beep_ms = 0\r
    entered_code = ""\r
\r
    stop_buzzer()\r
    update_free_led()\r
    set_status_light()\r
    send_code_text()\r
    send_message('Alarm nulstillet')\r
    send_live_status()\r
\r
\r
# ---------------- Keypad ----------------\r
\r
def scan_keypad():\r
    for row_index, row_pin in enumerate(rows):\r
        row_pin.value(0)\r
        time.sleep_us(100)\r
\r
        for col_index, col_pin in enumerate(columns):\r
            if col_pin.value() == 0:\r
                row_pin.value(1)\r
                return key_names[row_index][col_index]\r
\r
        row_pin.value(1)\r
\r
    return None\r
\r
\r
def read_key_event():\r
    global last_key, last_raw_key, last_key_change_ms\r
\r
    now = time.ticks_ms()\r
    raw_key = scan_keypad()\r
\r
    if raw_key != last_raw_key:\r
        last_raw_key = raw_key\r
        last_key_change_ms = now\r
        return None\r
\r
    if time.ticks_diff(now, last_key_change_ms) < KEY_DEBOUNCE_MS:\r
        return None\r
\r
    if raw_key is None:\r
        last_key = None\r
        return None\r
\r
    if raw_key != last_key:\r
        last_key = raw_key\r
        return raw_key\r
\r
    return None\r
\r
\r
def handle_key(key):\r
    global entered_code, secret_code, code_change_mode\r
\r
    key = str(key).strip()\r
\r
    play_tone(1000, 80)\r
\r
    if key == 'RET':\r
        entered_code = ""\r
        send_code_text()\r
        send_message('Indtastning slettet')\r
        return\r
\r
    if key == 'OK':\r
        if code_change_mode:\r
            if len(entered_code) >= 4:\r
                secret_code = entered_code\r
                code_change_mode = False\r
                entered_code = ""\r
                send_message('Ny kode gemt')\r
                play_tone(1800, 180)\r
            else:\r
                send_message('Ny kode skal mindst have 4 tal')\r
                play_tone(350, 250)\r
\r
            send_code_text()\r
            return\r
\r
        if entered_code == secret_code:\r
            send_message('Rigtig kode')\r
            authorized_open_door('keypad')\r
        else:\r
            if alarm_enabled:\r
                send_message('Forkert kode')\r
                play_tone(300, 300)\r
                trigger_alarm('Forkert kode')\r
            else:\r
                send_message('Forkert kode, men alarmen er fra')\r
\r
            entered_code = ""\r
            send_code_text()\r
\r
        return\r
\r
    if key in ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'):\r
        entered_code = entered_code + key\r
\r
        if len(entered_code) > 8:\r
            entered_code = entered_code[-8:]\r
\r
        send_code_text()\r
        return\r
\r
    send_message('Ukendt tast: {}'.format(key))\r
\r
\r
# ---------------- BLE callbacks ----------------\r
\r
def on_connect():\r
    onboard_led.on()\r
\r
    ble_send_toggle_state('ALARM', alarm_enabled)\r
    ble_send_toggle_state('DOR', door_open)\r
\r
    send_message('Forbundet. Alarmstation klar.')\r
    send_live_status()\r
    send_code_text()\r
    update_free_led()\r
    set_status_light()\r
\r
\r
def on_disconnect():\r
    onboard_led.off()\r
    stop_buzzer()\r
    set_status_light()\r
    print('BLE client disconnected')\r
\r
\r
def on_button(name):\r
    global code_change_mode, entered_code\r
\r
    if name == 'AABN DOR':\r
        authorized_open_door('Bluetooth')\r
\r
    elif name == 'LUK DOR':\r
        close_door('Bluetooth')\r
\r
    elif name == 'NY KODE':\r
        if alarm_enabled:\r
            send_message('Frakobl alarmen foer du aendrer kode')\r
            play_tone(350, 250)\r
            return\r
\r
        code_change_mode = True\r
        entered_code = ""\r
        send_code_text()\r
        send_message('Tast ny kode paa keypad og tryk OK')\r
\r
    elif name == 'NULSTIL':\r
        reset_alarm()\r
\r
    elif name == 'TEST BIP':\r
        send_message('Tester buzzer')\r
        play_tone(1200, 180)\r
\r
\r
def on_toggle(name, value):\r
    if name == 'ALARM':\r
        set_alarm_state(bool(value), 'Bluetooth')\r
        send_live_status()\r
\r
    elif name == 'DOR':\r
        if bool(value):\r
            authorized_open_door('Bluetooth')\r
        else:\r
            close_door('Bluetooth')\r
            send_live_status()\r
\r
\r
def on_slider(name, value):\r
    global led_brightness, pir_hold_ms, water_threshold\r
    global buzzer_volume, door_open_ms\r
\r
    value = int(value)\r
\r
    if name == 'LED LYS':\r
        led_brightness = clamp(value, 0, 100)\r
\r
    elif name == 'ROD':\r
        led_color[0] = clamp(value, 0, 255)\r
\r
    elif name == 'GRON':\r
        led_color[1] = clamp(value, 0, 255)\r
\r
    elif name == 'BLA':\r
        led_color[2] = clamp(value, 0, 255)\r
\r
    elif name == 'PIR TID':\r
        value = clamp(value, 1, 30)\r
        pir_hold_ms = value * 1000\r
        send_message('PIR lystid: {} sek'.format(value))\r
\r
    elif name == 'VAND GRAENSE':\r
        water_threshold = clamp(value, 0, 65535)\r
        send_message('Vand-graense: {}'.format(water_threshold))\r
\r
    elif name == 'BIP LYD':\r
        buzzer_volume = clamp(value, 0, 100)\r
        send_message('Buzzer lyd: {}%'.format(buzzer_volume))\r
\r
    elif name == 'DOR TID':\r
        value = clamp(value, 1, 30)\r
        door_open_ms = value * 1000\r
        send_message('Dor aaben tid: {} sek'.format(value))\r
\r
    update_free_led()\r
    set_status_light()\r
\r
\r
ble = BLEPeripheral(\r
    base_controls=BluetoothControls,\r
    device_base_name='AlarmDemo',\r
    callbacks=globals(),\r
)\r
\r
# ---------------- Main loop ----------------\r
\r
send_message('Alarmstation starter')\r
send_message('PIR varmer op i {} sekunder'.format(PIR_WARMUP_MS // 1000))\r
\r
# Start locked/closed.\r
close_door('start', announce=False)\r
\r
update_free_led()\r
set_status_light()\r
\r
try:\r
    while True:\r
        now = time.ticks_ms()\r
\r
        current_pir = pir.value()\r
\r
        # PIR alarm\r
        if alarm_enabled and time.ticks_diff(now, pir_ready_at) >= 0:\r
            if current_pir == 1 and last_pir_value == 0:\r
                motion_until = time.ticks_add(now, pir_hold_ms)\r
                trigger_alarm('Bevaegelse opdaget')\r
\r
            elif current_pir == 0 and last_pir_value == 1:\r
                send_message('PIR rolig igen')\r
        else:\r
            motion_until = 0\r
\r
        last_pir_value = current_pir\r
\r
        # Water sensor\r
        if time.ticks_diff(now, next_water_check_ms) >= 0:\r
            latest_water = read_water_sensor(samples=4)\r
            next_water_check_ms = time.ticks_add(now, 700)\r
\r
            if alarm_enabled and latest_water >= water_threshold:\r
                trigger_alarm('Vand opdaget: {}'.format(latest_water))\r
\r
        # Keypad\r
        key = read_key_event()\r
        if key is not None:\r
            print('Key:', key)\r
            handle_key(key)\r
\r
        # Auto-close door\r
        if door_open and door_auto_close_at != 0:\r
            if time.ticks_diff(now, door_auto_close_at) >= 0:\r
                close_door('auto')\r
\r
        # Alarm sound pattern\r
        if alarm_enabled and alarm_triggered and time.ticks_diff(alarm_sound_until, now) > 0:\r
            if time.ticks_diff(now, next_alarm_beep_ms) >= 0:\r
                alarm_beep_on = not alarm_beep_on\r
\r
                if alarm_beep_on:\r
                    buzzer.freq(900)\r
                    buzzer.duty_u16(buzzer_duty())\r
                    next_alarm_beep_ms = time.ticks_add(now, 120)\r
                else:\r
                    stop_buzzer()\r
                    next_alarm_beep_ms = time.ticks_add(now, 180)\r
        else:\r
            stop_buzzer()\r
\r
        update_free_led()\r
        set_status_light()\r
\r
        # STATUS opdateres automatisk ofte.\r
        # BESKED opdateres kun ved engangshaendelser.\r
        if ble_is_connected() and time.ticks_diff(now, next_status_ms) >= 0:\r
            send_live_status()\r
            next_status_ms = time.ticks_add(now, 2000)\r
\r
        time.sleep_ms(50)\r
\r
finally:\r
    stop_buzzer()\r
\r
    try:\r
        buzzer.deinit()\r
    except:\r
        pass\r
\r
    try:\r
        close_door('stop', announce=False)\r
    except:\r
        pass\r
\r
    clear_pixel(free_led)\r
    clear_pixel(keypad_led)\r
    onboard_led.off()\r
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')`,i0=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.\r
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.\r
# BluetoothControls bestemmer, hvilke sliders appen viser.\r
BluetoothControls = (\r
    ('slider', 'VENSTRE MOTOR', -100, 100, 'middle'),\r
    ('slider', 'HOJRE MOTOR', -100, 100, 'middle'),\r
)\r
\r
\r
# LED'en bruges som en simpel "forbundet"-lampe.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
# board er motor-controlleren fra Kitronik Pico Robotics.\r
board = PicoRobotics.KitronikPicoRobotics()\r
\r
\r
def on_slider(name, value):\r
    """Reager på sliders fra appen."""\r
\r
    # Appen sender slider-værdien som et tal. Vi bruger minus som baglæns.\r
    value = int(value)\r
\r
    if name == 'VENSTRE MOTOR':\r
        if value > 0:\r
            board.motorOn(1, 'f', value)\r
        elif value < 0:\r
            board.motorOn(1, 'r', -value)\r
        else:\r
            board.motorOff(1)\r
        print('Left motor ->', value)\r
    elif name == 'HOJRE MOTOR':\r
        if value > 0:\r
            board.motorOn(2, 'f', value)\r
        elif value < 0:\r
            board.motorOn(2, 'r', -value)\r
        else:\r
            board.motorOff(2)\r
        print('Right motor ->', value)\r
    else:\r
        print('Unknown slider:', name)\r
\r
\r
def on_connect():\r
    # Når appen forbinder, tænder LED'en.\r
    led.on()\r
    print('BLE client connected')\r
\r
\r
def on_disconnect():\r
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.\r
    led.off()\r
    board.motorOff(1)\r
    board.motorOff(2)\r
    print('BLE client disconnected')\r
\r
\r
# callbacks=globals() gør, at BLEPeripheral kan finde on_slider osv.\r
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='TankBil', callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,Hi=[{id:"program:onboard-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med tænd/sluk-knapper og lysstyrke-slider.",kind:"program",content:e0},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:r0},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:i0},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:l0},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:a0},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:Pb},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:t0},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:n0},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:Wb},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:Jb}],s0=11914;function o0(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function c0(){return o0()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class u0{constructor(i={}){ue(this,"port",null);ue(this,"reader",null);ue(this,"writer",null);ue(this,"readLoopDone",null);ue(this,"readLoopActive",!1);ue(this,"disconnecting",!1);ue(this,"buffer","");ue(this,"events");ue(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:s0}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var v,y;const i=this.connected||!!this.port||!!this.reader,u=this.port,s=this.reader,c=this.writer,h=this.readLoopDone,_=s==null?void 0:s.closed.catch(()=>{}),b=c==null?void 0:c.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}h&&await h.catch(()=>{}),await _;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(c==null?void 0:c.close()),await b}catch{try{await(c==null?void 0:c.abort("disconnect"))}catch{}}try{c==null||c.releaseLock()}catch{}this.writer===c&&(this.writer=null),u&&await u.close(),this.port===u&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var s,c,h;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((s=i.writable)==null?void 0:s.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const u=i.getInfo();(h=(c=this.events).onLog)==null||h.call(c,"success",`USB-forbindelse oprettet (${f0(u)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var c,h,_;this.readLoopActive=!0;const u=new TextDecoder;this.reader=((c=i.readable)==null?void 0:c.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:b,done:v}=await s.read();if(v)break;b&&this.consumeText(u.decode(b,{stream:!0}))}}catch(b){this.readLoopActive&&((_=(h=this.events).onLog)==null||_.call(h,"error",b instanceof Error?b.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var h,_;const u=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,c=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await c}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,u&&((_=(h=this.events).onDisconnect)==null||_.call(h))}consumeText(i){var u,s,c,h;(s=(u=this.events).onData)==null||s.call(u,i);for(const _ of this.dataListeners)_(i);for(this.buffer+=i;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),b=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(h=(c=this.events).onLine)==null||h.call(c,b)}}}function f0(o){const i=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",u=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${u}`}const Up=15e3,pp=64*1024,_p=1e5,Hp=new URL("/micropython/micropython.mjs",window.location.origin).toString(),d0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);let m0=0;class h0{constructor(){ue(this,"worker",null);ue(this,"pending",null);ue(this,"nextId",0)}send(i,u={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,c=u.timeoutMs??Up,h=this.ensureWorker();return new Promise(_=>{const b=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},c);this.pending={id:s,timer:b,onOutput:u.onOutput,resolve:_},h.postMessage({type:"run",id:s,code:_0(i),runtimeUrl:Hp})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return i.onmessage=u=>this.handleMessage(u.data),i.onerror=u=>{this.finish({ok:!1,output:"",error:u.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var s;const u=this.pending;if(!(!u||i.id!==u.id||i.type==="ready")){if(i.type==="stdout"){(s=u.onOutput)==null||s.call(u,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const u=this.pending;u&&(window.clearTimeout(u.timer),this.pending=null,u.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}async function p0(o,i={}){const u=typeof i=="number"?i:i.timeoutMs??Up,s=typeof i=="number"?void 0:i.onOutput,c=typeof i=="number"?void 0:i.signal,h=nf(o);if(h.some(v=>v.level==="error"))return{ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1};const _=++m0,b=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return new Promise(v=>{let y=!1;const E=()=>{k({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1})},k=F=>{y||(y=!0,window.clearTimeout(j),c==null||c.removeEventListener("abort",E),b.terminate(),v(F))};if(c!=null&&c.aborted){E();return}c==null||c.addEventListener("abort",E,{once:!0});const j=window.setTimeout(()=>{k({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:h,timedOut:!0,unavailable:!1})},u);b.onmessage=F=>{const Q=F.data;if(!(Q.id!==_||Q.type==="ready")){if(Q.type==="stdout"){s==null||s(Q.text);return}if(Q.type==="unavailable"){k({ok:!1,output:"",error:Q.error,issues:h,timedOut:!1,unavailable:!0});return}k({ok:Q.ok,output:Q.output,error:Q.error,issues:h,timedOut:!1,unavailable:!1})}},b.onerror=F=>{k({ok:!1,output:"",error:F.message||"Offline MicroPython fejlede i browser-worker.",issues:h,timedOut:!1,unavailable:!1})},b.postMessage({type:"run",id:_,code:o,runtimeUrl:Hp})})}function _0(o){const i=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function nf(o){const i=[],u=new Blob([o]).size;u>pp&&i.push({level:"error",text:`Koden er ${u} bytes. Offline MicroPython kører kun små programmer op til ${pp} bytes.`});const s=o.split(/\r?\n/);for(let c=0;c<s.length;c+=1){const h=c+1,_=tf(s[c]).trim();if(!_)continue;const b=g0(_);b&&d0.has(b)&&i.push({level:"error",line:h,text:`${b} virker kun på Picoen. Forbind en Pico for at køre denne kode.`});const v=_.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);v&&b0(v)>_p&&i.push({level:"error",line:h,text:`range(...) er for stor til offline kørsel. Brug højst ${_p} gentagelser.`})}for(const c of y0(s))i.push({level:"warning",text:`Funktionen ${c} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return i}function tf(o){let i=null;for(let u=0;u<o.length;u+=1){const s=o[u];if((s==='"'||s==="'")&&o[u-1]!=="\\"&&(i=i===s?null:i??s),s==="#"&&!i)return o.slice(0,u)}return o}function g0(o){const i=o.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const u=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(u==null?void 0:u[1])??null}function gp(o){const i=o.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function b0(o){const i=Number(o[1]),u=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const _=(u===void 0?i:u)-(u===void 0?0:i);return _>0&&s<0||_<0&&s>0?0:Math.ceil(Math.abs(_/s))}function y0(o){const i=new Set;for(let u=0;u<o.length;u+=1){const s=tf(o[u]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const c=s[1],h=gp(o[u]);for(let _=u+1;_<o.length;_+=1){if(!o[_].trim())continue;if(gp(o[_])<=h)break;if(new RegExp(`\\b${c}\\s*\\(`).test(tf(o[_]))){i.add(c);break}}}return[...i]}const v0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function x0(o,i){var E;const u=o.trim(),s=i.split(/\r?\n/),c=S0(u),h=c?s[c-1]??"":"",_=E0(s,c),b=u.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(b))return{simple:"Programmet blev stoppet.",technical:u,line:c};if(/MemoryError/.test(b))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${c?` omkring linje ${c}`:""}.`,technical:u,line:c};if(/RecursionError/.test(b))return{simple:`En funktion kalder sig selv for mange gange${c?` omkring linje ${c}`:""}.`,technical:u,line:c};const v=b.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${c?` på linje ${c}`:""}.`,technical:u,line:c};const y=b.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:T0(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${c?` på linje ${c}`:""}.`:`Python kender ikke navnet ${y[1]}${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/ZeroDivisionError/.test(b))return{simple:`Kan ikke dividere med 0${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/IndentationError:\s+unexpected indent/.test(b))return{simple:`Der er for meget indrykning${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/IndentationError/.test(b))return{simple:`Mangler indrykning${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/ImportError|ModuleNotFoundError/.test(b)){const k=(E=b.match(/['"](.+?)['"]/))==null?void 0:E[1];return{simple:`Python kan ikke finde modulet${k?` ${k}`:""}.`,technical:u,line:c}}if(/OSError/.test(b))return/ENOENT|No such file|Errno\s+2/.test(b)?{simple:`Python kan ikke finde filen${c?` på linje ${c}`:""}.`,technical:u,line:c}:/EACCES|permission|denied/i.test(b)?{simple:`Python har ikke adgang til filen eller enheden${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Der opstod en fejl med en fil eller en enhed${c?` omkring linje ${c}`:""}.`,technical:u,line:c};if(/SyntaxError/.test(b)){if(/invalid syntax/.test(b)&&_.text.trim().endsWith(","))return{simple:`Linje ${_.line??c} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:u,line:_.line??c};const k=lf(h,c)??lf(_.text,_.line)??w0(s,c);return k?{simple:`Mangler måske : efter linje ${k.line}.`,technical:u,line:k.line}:c&&_.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${c}.`,technical:u,line:c}:k0(h)?{simple:`Tekst mangler måske citationstegn${c?` på linje ${c}`:""}.`,technical:u,line:c}:N0(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${c?` på linje ${c}`:""}.`,technical:u,line:c}:R0(h)?{simple:`Mangler måske en afsluttende parentes${c?` på linje ${c}`:""}.`,technical:u,line:c}:M0(h)?{simple:`Der er måske en parentes for meget${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Python fandt en syntaksfejl${c?` omkring linje ${c}`:""}.`,technical:u,line:c}}return/TypeError/.test(b)?/takes .* positional arguments? but .* given/.test(b)||/function takes/.test(b)?{simple:`En funktion får for mange eller for få værdier${c?` på linje ${c}`:""}.`,technical:u,line:c}:/unsupported operand type/.test(b)?{simple:`To værdier kan ikke bruges sammen på den måde${c?` på linje ${c}`:""}.`,technical:u,line:c}:/not callable/.test(b)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`En værdi har den forkerte type${c?` på linje ${c}`:""}.`,technical:u,line:c}:/IndexError/.test(b)?{simple:`Listen har ikke et element på den plads${c?` på linje ${c}`:""}.`,technical:u,line:c}:/KeyError/.test(b)?{simple:`Ordbogen mangler den nøgle${c?` på linje ${c}`:""}.`,technical:u,line:c}:/AttributeError/.test(b)?{simple:`Den ting har ikke den kommando${c?` på linje ${c}`:""}.`,technical:u,line:c}:/ValueError/.test(b)?/invalid literal for int/.test(b)?{simple:`Teksten kan ikke laves om til et heltal${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Værdien passer ikke her${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Python fandt en fejl${c?` omkring linje ${c}`:""}.`,technical:u,line:c}}function S0(o){var c;const u=(c=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:c[1];if(!u)return;const s=parseInt(u,10);return Number.isFinite(s)&&s>0?s:void 0}function E0(o,i){if(!i)return{text:""};for(let u=i-2;u>=0;u-=1){const s=o[u]??"";if(s.trim())return{line:u+1,text:s}}return{text:""}}function lf(o,i){if(!i)return null;const u=o.trim();return!v0.test(u)||u.endsWith(":")?null:{line:i}}function w0(o,i){const u=i?Math.min(o.length,i):o.length,s=Math.max(0,u-4);for(let c=u-1;c>=s;c-=1){const h=lf(o[c]??"",c+1);if(h)return h}return null}function N0(o){const i=(o.match(/'/g)??[]).length,u=(o.match(/"/g)??[]).length;return i%2===1||u%2===1}function k0(o){var s,c;const u=(c=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:c.trim();return!u||/['"]/.test(u)?!1:/\s/.test(u)&&/[a-zA-ZæøåÆØÅ]/.test(u)}function T0(o,i){const u=o.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(u.startsWith("print(")||u.includes(`= ${i}`))}function R0(o){return Gp(o)>0}function M0(o){return Gp(o)<0}function Gp(o){let i=0,u=null;for(let s=0;s<o.length;s+=1){const c=o[s];if((c==='"'||c==="'")&&o[s-1]!=="\\"){u=u===c?null:u??c;continue}u||((c==="("||c==="["||c==="{")&&(i+=1),(c===")"||c==="]"||c==="}")&&(i-=1))}return i}const rf="/min_kode.py",Vp=`print('Hej fra Pico Kontrol Panel')
`,bp=0,Gi="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function lt(o,i){return`${o}:${i}`}function A0(){const o=J(m=>m.toggleSideMenu),i=J(m=>m.askConfirm),u=J(m=>m.picoIdeOrigin),s=J(m=>m.active),c=J(m=>m.isBleConnected),h=J(m=>m.bleListFiles),_=J(m=>m.bleReadText),b=J(m=>m.bleWriteText),v=J(m=>m.bleDeleteFile),y=J(m=>m.bleRestartAndReconnect),[E,k]=V.useState(!1),[j,F]=V.useState(!1),[Q,le]=V.useState([]),[U,H]=V.useState(!1),[pe,oe]=V.useState([]),[xe,fe]=V.useState(null),[Ne,ee]=V.useState(()=>Pu(Yu())),[W,be]=V.useState(rf),[_e,ve]=V.useState("local"),[ae,Ve]=V.useState(()=>{var m;return((m=Pu(Yu()).find(g=>g.path===rf))==null?void 0:m.content)??Vp}),[De,Ze]=V.useState([]),[O,Y]=V.useState(!1),[ie,Ee]=V.useState(""),[de,w]=V.useState(""),[L,P]=V.useState(null),[D,I]=V.useState(!1),[Z,K]=V.useState(null),[Ie,Ue]=V.useState(!1),[St,Jl]=V.useState({}),[La,Or]=V.useState(!1),[pl,Cr]=V.useState(0),[_l,No]=V.useState(()=>{var m,g;return((m=Wl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:m.board)??((g=Wl[0])==null?void 0:g.board)??""}),[er,zr]=V.useState(()=>{var m,g;return((m=Wl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:m.version)??((g=Wl[0])==null?void 0:g.version)??""}),[Ua,Ht]=V.useState(!1),[Ha,Ki]=V.useState({top:0,left:0}),[Tn,Br]=V.useState(!1),[Lr,Ga]=V.useState(!1),[nr,at]=V.useState(!0),[it,gl]=V.useState(""),[Ur,tr]=V.useState([]),[pn,Xn]=V.useState(null),[vn,bl]=V.useState(!1),[yl,vl]=V.useState({}),[Mt,Dn]=V.useState({}),[$e,xn]=V.useState(null),[cn,jn]=V.useState(null),[ko,Va]=V.useState(""),[At,lr]=V.useState(()=>Xh().clearTerminalOnRun),[Gt,Ii]=V.useState(()=>Xh().simplifiedErrors),[Hr,Fi]=V.useState(()=>typeof window<"u"&&window.innerWidth<bp),xl=V.useRef(null),Dt=V.useRef(null),un=V.useRef(null),Ya=V.useRef(null),$n=V.useRef(null),ln=V.useRef(null),rn=V.useRef(null),st=V.useRef(!1),jt=V.useRef(!1),Gr=V.useRef(!1),rr=V.useRef(null),Vr=V.useRef(null),Bn=V.useRef(null),Vt=V.useRef(null),Ln=V.useRef(0),Kn=V.useRef(null),ot=V.useRef(null),Yt=V.useRef(null),Pe=V.useRef(null),qt=c0(),he=u==="control"&&!!s&&c(),Et=he?(s==null?void 0:s.deviceID)??"ble":null,Sl=Math.max(1,ae.split(`
`).length),To=new Blob([ae]).size,Qi=_e==="pico"?"Picoen":"browseren",Zi=V.useMemo(()=>[...new Set(Wl.map(m=>m.board))],[]),ar=V.useMemo(()=>Wl.filter(m=>m.board===_l),[_l]),wt=Wl.find(m=>m.board===_l&&m.version===er)??ar[0]??Wl[0],Nt=_e==="pico",In=Nt?Tn:Lr,Un=vn||In,qa=Nt?"Pico MicroPython":"Browser-MicroPython",Xa=V.useMemo(()=>{const m=new u0({onLine:g=>{if(jt.current)return;const x=g.trimEnd();if(Gr.current&&x.trim()){$("info",x);return}st.current&&x.trim()&&!x.includes(">>>")&&!x.includes("raw REPL")&&$("info",x)},onLog:$,onDisconnect:()=>{k(!1),Br(!1),bl(!1),st.current=!1,Gr.current=!1,Yr(),$("warning","USB-forbindelse lukket.")}});return xl.current=m,m},[]);function $(m,g){le(x=>[...x.slice(-140),{level:m,text:g}])}function ir(m,g=ae,x="error"){const B=x0(m,g);le(z=>[...z.slice(-140),{level:x,text:B.simple,technical:B.technical}])}function Je(m,g,x=_e){be(m),ve(x),Ve(g),Dn(B=>({...B,[lt(x,m)]:g}))}function Pi(m,g="pico"){be(m),ve(g),Ve(""),xn(null),Ki({top:0,left:0})}function gn(m,g=(x=>(x=$n.current)==null?void 0:x.selectionStart)()??m.length){Ve(m),Dn(B=>({...B,[lt(_e,W)]:m})),Va(""),Rl(m,g)}function sr(m,g=_e){Dn(x=>{const B=lt(g,m);if(!(B in x))return x;const z={...x};return delete z[B],z})}function Wi(){return yl[W]===ae}function Rn(m,g){vl(x=>({...x,[m]:g}))}function Xt(m,g){Rn(m,g),Dn(x=>({...x,[lt("pico",m)]:g})),_e==="pico"&&W===m&&Ve(g)}function Yr(){oe([]),Ze([]),vl({}),Dn({}),xn(null),be(m=>{const g=Pu(Yu());if(g.find(z=>z.path===m))return m;const B=g[0];return ve("local"),Ve(B.content),B.path})}function Sn(m){ct(),K({value:100,label:m}),Pe.current=window.setTimeout(()=>{Pe.current=null,K(null)},900)}function ct(){Pe.current!==null&&(window.clearTimeout(Pe.current),Pe.current=null)}function Ro(){return Z?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Z.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:Z.label}),f.jsxs("strong",{children:[Math.round(Z.value),"%"]}),Z.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Ji,"aria-label":"Stop handling",title:"Stop",children:f.jsx(zn,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Z.value))}%`}})})]}):null}function Ji(){Bn.current&&El("Stopper læsning...",!0,!0)}function El(m="Stopper læsning...",g=!1,x=!1){var B;ct(),ot.current=null,Ln.current+=1,(B=Bn.current)==null||B.abort(),Bn.current=null,Kn.current=null,fe(null),H(!1),K(g?{value:(Z==null?void 0:Z.value)??0,label:m,cancellable:!1}:null),x&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function $a(m){var g;if(!(Kn.current===m||ot.current===m)){if(ot.current=m,Vt.current){Ln.current+=1,(g=Bn.current)==null||g.abort(),Bn.current=null,Kn.current=null,Pi(m),fe(m),H(!0),ct(),K({value:2,label:`Skifter til ${Oe(m)}...`,cancellable:!0});return}es()}}function es(){if(Vt.current)return;const m=ot.current;if(!m)return;ot.current=null;const g=Ln.current+1;Ln.current=g;const x=new AbortController;Bn.current=x,Kn.current=m,Pi(m),fe(m),H(!0),ct(),K({value:12,label:`Indlæser ${Oe(m)}...`,cancellable:!0});const B=(async()=>{try{const z=await _(m,(te,ge)=>{Ln.current===g&&K({value:te,label:ge,cancellable:!0})},x.signal);if(x.signal.aborted||Ln.current!==g)return;Je(m,z,"pico"),Rn(m,z),Sn("Fil indlæst")}catch(z){if(Ln.current!==g)return;O0(z)||x.signal.aborted?$("info",`Stoppede læsning af ${Oe(m)}.`):(K(null),$("error",z instanceof Error?z.message:"BLE læsning fejlede."))}})();Vt.current=B,B.finally(()=>{if(Vt.current!==B)return;Vt.current=null,Bn.current===x&&(Bn.current=null),Kn.current===m&&(Kn.current=null),!!ot.current||(fe(null),H(!1),x.signal.aborted&&K(null)),es()})}async function qr(m){const g=jt.current;jt.current=!0;try{return await m()}finally{jt.current=g}}V.useEffect(()=>{if(!nr)return;const m=ln.current;m&&(m.scrollTop=m.scrollHeight)},[Q,nr]),V.useEffect(()=>{zg({clearTerminalOnRun:At,simplifiedErrors:Gt})},[At,Gt]),V.useEffect(()=>{var m;ar.some(g=>g.version===er)||zr(((m=ar[0])==null?void 0:m.version)??"")},[ar,er]),V.useEffect(()=>{const m=()=>Fi(window.innerWidth<bp);return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),V.useEffect(()=>{const m=()=>{const g=xl.current;Dt.current=null,un.current=null,xl.current=null,g==null||g.disconnect().catch(()=>{})};return window.addEventListener("pagehide",m),()=>{var g;ct(),(g=rr.current)==null||g.dispose(),rr.current=null,window.removeEventListener("pagehide",m),m()}},[]),V.useEffect(()=>{const m=g=>{!(g.ctrlKey||g.metaKey)||g.key.toLowerCase()!=="s"||(g.preventDefault(),!U&&W.trim()&&!Hr&&!D&&!L&&!O&&Kr())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[_e,he,U,E,ae,W,Hr,D,L,O]);function wl(m,g,x){ee(B=>{const z=H0(B,m,g,x);return qu(z),z})}const ut=q0(pe,Ne,Mt,E||he);V.useEffect(()=>{he&&an()},[he]),V.useEffect(()=>{const m=Yt.current;m&&m!==Et&&Yr(),Yt.current=Et},[Et]);async function Ka(){if(qt.supported){F(!0);try{await Xa.requestAndConnect();const m=new qb(Xa);Dt.current=m,un.current=new Qb(m),k(!0),Cr(0),await m.interrupt(),await Ia(m),$("success","Sendte stop-signal til Pico-terminalen."),await Xr(un.current),await ft(un.current)}catch(m){$("error",m instanceof Error?m.message:"USB-forbindelse mislykkedes.");try{await Xa.disconnect()}catch(g){$("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.");return}Cr(g=>{const x=g+1;return x>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Or(!0)),x}),k(!1)}finally{F(!1)}}}async function Ia(m){const g=await m.exec(`import sys
print(sys.implementation.name)
`,4e3);if(g.error||!g.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Nl(){var m;try{await((m=xl.current)==null?void 0:m.disconnect()),Dt.current=null,un.current=null,k(!1),Yr()}catch(g){$("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.")}}async function On(m){const g=un.current;if(g){H(!0),jt.current=!0;try{await m(g)}catch(x){K(null),$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{jt.current=!1,H(!1)}}}async function an(m=!0){if(he){H(!0);try{const g=await h();oe(g),m&&$("success",`Indlæste ${g.length} filer fra Pico via Bluetooth.`)}catch(g){$("error",g instanceof Error?g.message:"BLE filhandling fejlede.")}finally{H(!1)}return}await Xr(un.current,m)}async function Xr(m,g=!0){if(m){H(!0);try{const x=await qr(()=>m.list("/"));oe(x),g&&$("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{H(!1)}}}async function $t(){if(he){H(!0),K({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const m=await kl((g,x)=>K({value:g,label:x}));Ze(m),Sn("Fil-tjek færdigt")}catch(m){K(null),$("error",m instanceof Error?m.message:"BLE runtime check fejlede.")}finally{H(!1)}return}await ft(un.current)}async function kl(m){const g=[],x=Hi.filter(z=>z.kind==="library"&&!Ar(z));let B=0;for(const z of Hi){if(z.kind==="program"){g.push({...z,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Ar(z)){g.push({...z,status:"unknown",detail:"Opdateres via USB"});continue}try{const te=B/Math.max(1,x.length)*100,ge=100/Math.max(1,x.length);$("info",`Tjekker ${z.label} på Pico via Bluetooth...`),m==null||m(Math.min(95,te),`Tjekker ${z.label} på Pico...`);const Be=await _(z.path,(Fn,It)=>{m==null||m(Math.min(95,te+Fn/100*ge),`${z.label}: ${It}`)}),en=fo(Be)===fo(z.content);g.push({...z,status:en?"ok":"outdated",detail:en?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{g.push({...z,status:"missing",detail:"Mangler på Pico"})}finally{B+=1}}return m==null||m(100,"Fil-tjek færdigt"),g}async function ft(m){if(m){H(!0);try{const g=await qr(()=>$r(m)),x=g;Ze(x)}catch(g){$("error",g instanceof Error?g.message:"Runtime check fejlede.")}finally{H(!1)}}}async function $r(m){if(!m)return[];const g=[];for(const x of Hi){if(x.kind==="program"){g.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const B=await m.readText(x.path),z=fo(B)===fo(x.content);g.push({...x,status:z?"ok":"outdated",detail:z?"Matcher appens version":"Matcher ikke appens version"})}catch{g.push({...x,status:"missing",detail:"Mangler på Pico"})}}return g}async function or(m=W){if(he){$a(m);return}fe(m),await On(async g=>{K({value:12,label:`Indlæser ${Oe(m)}...`});const x=await g.readText(m);Je(m,x,"pico"),Rn(m,x),Sn("Fil indlæst")}),fe(null)}function Ot(){I(!0)}async function Kr(){if(_e==="pico"){if(!E&&!he){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Ir();return}cr()}function cr(){if(Aa(W)){$("error",Gi);return}wl(W,ae,!1),ve("local"),Dn(m=>({...m,[lt("local",W)]:ae})),I(!1),$("success",`Gemte ${Oe(W)} lokalt.`)}async function Ir(){if(I(!1),Aa(W))return K(null),$("error",Gi),!1;if(K({value:0,label:"Starter gemning..."}),he){H(!0);try{return await b(W,ae,(g,x)=>K({value:g,label:x})),Rn(W,ae),ve("pico"),Dn(g=>({...g,[lt("pico",W)]:ae})),Sn("Gemt på Pico via Bluetooth"),$("success",`Gemte ${Oe(W)} på Pico via Bluetooth.`),mo(W)&&(Ht(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await an(!1),!0}catch(g){return K(null),$("error",g instanceof Error?g.message:"BLE gem fejlede."),!1}finally{H(!1)}}if(!un.current)return K(null),!1;let m=!1;return await On(async g=>{mr(W,"pico")?await g.replaceTextSafely(W,ae,(x,B)=>K({value:x,label:B})):await g.writeText(W,ae,(x,B)=>K({value:x,label:B})),Rn(W,ae),ve("pico"),Dn(x=>({...x,[lt("pico",W)]:ae})),Sn("Gemt på Pico via USB"),$("success",`Gemte ${W}.`),await an(),await $t(),m=!0}),m}function Fr(){const m=new Blob([ae],{type:"text/plain;charset=utf-8"}),g=URL.createObjectURL(m),x=document.createElement("a");x.href=g,x.download=Oe(W),x.click(),URL.revokeObjectURL(g),I(!1),$("success",`Downloadede ${Oe(W)}.`)}async function ur(m){H(!0),Ht(!1),K({value:10,label:"Genstarter Pico..."});try{await y(m)?(Sn("Pico genforbundet"),$("success",m==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),m==="ide"&&await an()):(K(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(g){K(null),$("error",g instanceof Error?g.message:"Genstart/genforbindelse mislykkedes.")}finally{H(!1)}}function Fa(m){var te;const g=m??{path:W,source:_e},x=g.source==="pico"?"Pico":"browser",B=g.source==="pico"?(m==null?void 0:m.versions.length)??((te=af(pe).get(g.path))==null?void 0:te.length)??0:0,z=B>0?` Det sletter også filens versionshistorik (${B} gemte versioner).`:"";P(null),i({title:"Slet fil",message:`Vil du slette ${Oe(g.path)} fra ${x}?${z}`,confirmLabel:"Slet",onConfirm:()=>{Mn(g)}})}async function Mn(m){const g=m.path,x=m.source,B=g===W&&x===_e;if(x==="local"){const ge=Ne.filter(Be=>Be.path!==g);ee(ge),qu(ge),B&&Je(g,"","local"),sr(g,"local"),$("warning",`Slettede ${Oe(g)} fra browseren.`);return}const z=af(pe).get(g)??[],te=[g,...z.map(ge=>ge.path)];if(he){H(!0);try{for(const Be of te)await v(Be);vl(Be=>{const en={...Be};for(const Fn of te)delete en[Fn];return en}),B&&Je(g,"","pico");for(const Be of te)sr(Be,"pico");const ge=z.length>0?` og ${z.length} gemte versioner`:"";$("warning",`Slettede ${Oe(g)}${ge} på Pico via Bluetooth.`),await an()}catch(ge){$("error",ge instanceof Error?ge.message:"BLE sletning fejlede.")}finally{H(!1)}return}if(!un.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await On(async ge=>{for(const en of te)await ge.delete(en);vl(en=>{const Fn={...en};for(const It of te)delete Fn[It];return Fn});const Be=z.length>0?` og ${z.length} gemte versioner`:"";$("warning",`Slettede ${g}${Be}.`),B&&Je(g,"","pico");for(const en of te)sr(en,"pico");await an(),await $t()})}async function Kt(m){if(!m)return;const g=D0(m.name);if(!g){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Aa(g)){$("error",Gi);return}if(m.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const x=await m.text();if(_e==="local"){wl(g,x,!0),Je(g,x,"local"),$("success",`Importerede ${Oe(g)} i browseren.`);return}if(!E&&!he){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&Ar({path:g})){$("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(K({value:0,label:"Uploader fil til Pico..."}),he){H(!0);try{await b(g,x,(z,te)=>K({value:z,label:te})),Rn(g,x),Je(g,x,"pico"),Sn("Fil uploadet til Pico"),$("success",`Importerede ${Oe(g)} på Pico via Bluetooth.`),await an()}catch(z){K(null),$("error",z instanceof Error?z.message:"Kunne ikke importere filen til Pico.")}finally{H(!1)}return}if(!un.current){K(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await On(async z=>{mr(g,"pico")?await z.replaceTextSafely(g,x,(te,ge)=>K({value:te,label:ge})):await z.writeText(g,x,(te,ge)=>K({value:te,label:ge})),Rn(g,x),Je(g,x,"pico"),Sn("Fil uploadet til Pico"),$("success",`Importerede ${Oe(g)} på Pico.`),await an(),await $t()})}async function Qr(){Ee(""),Y(!0)}function fr(){const m=yp(ie);if(!m)return;if(Aa(m)){$("error",Gi);return}const g=_e;if(mr(m,g)){$("error",`Der findes allerede en fil med navnet ${Oe(m)} i ${g==="pico"?"Pico":"browseren"}.`);return}if(g==="local"){wl(m,"",!1),Je(m,"","local"),Y(!1),$("success",`Oprettede ${Oe(m)} i browseren.`);return}Mo(m)}async function Mo(m){if(!E&&!he){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Y(!1),K({value:0,label:"Opretter fil på Pico..."}),he){H(!0);try{await b(m,"",(g,x)=>K({value:g,label:x})),Rn(m,""),Je(m,"","pico"),Sn("Fil oprettet på Pico"),$("success",`Oprettede ${Oe(m)} på Pico via Bluetooth.`),await an()}catch(g){K(null),$("error",g instanceof Error?g.message:"Kunne ikke oprette fil på Pico.")}finally{H(!1)}return}if(!un.current){K(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await On(async g=>{await g.writeText(m,"",(x,B)=>K({value:x,label:B})),Rn(m,""),Je(m,"","pico"),Sn("Fil oprettet på Pico"),$("success",`Oprettede ${Oe(m)} på Pico.`),await an()})}function Qa(m){m.type==="file"&&(P(m),w(j0(m.path)))}async function Za(m){if(!L||L.source!=="pico")return;const g=L.path;if(P(null),K({value:0,label:"Gendanner version..."}),he){H(!0);try{const x=await _(m.path);await b(g,x,(B,z)=>K({value:B,label:z})),Rn(g,x),Je(g,x,"pico"),Sn("Version gendannet"),await an(!1)}catch(x){K(null),$("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{H(!1)}return}un.current&&await On(async x=>{await x.replaceTextSafely(g,await x.readText(m.path),(z,te)=>K({value:z,label:te}));const B=await x.readText(g);Rn(g,B),Je(g,B,"pico"),Sn("Version gendannet"),await an()})}function dr(m){i({title:"Slet version",message:`Vil du slette ${Oe(m.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Zr(m)}})}async function Zr(m){if(he){H(!0);try{await v(m.path),await an(!1),P(g=>g&&{...g,versions:g.versions.filter(x=>x.path!==m.path)})}catch(g){$("error",g instanceof Error?g.message:"Kunne ikke slette versionen.")}finally{H(!1)}return}un.current&&await On(async g=>{await g.delete(m.path),await an(!1),P(x=>x&&{...x,versions:x.versions.filter(B=>B.path!==m.path)})})}async function ns(){if(!L)return;const m=L,g=Qu(de,Vi(m.path));if(!g||g===m.path)return;if(Aa(g)){$("error",Gi);return}if(mr(g,m.source)){$("error",`Der findes allerede en fil med navnet ${Oe(g)}.`);return}const x=m.source==="local",B=m.source==="pico";if(he&&B&&(mo(m.path)||mo(g))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}H(!0);try{if(B)if(he){const z=yl[m.path]??await _(m.path);await b(g,z,(te,ge)=>K({value:te,label:ge})),await v(m.path),vl(te=>({...Np(te,m.path,g),[g]:z}))}else un.current&&(await qr(()=>un.current.rename(m.path,g)),vl(z=>Np(z,m.path,g)));x&&ee(z=>{const te=z.map(ge=>ge.path===m.path?{...ge,path:g,updatedAt:Date.now()}:ge);return qu(te),te}),W===m.path&&_e===m.source&&be(g),Dn(z=>K0(z,m.source,m.path,g)),P(null),w(""),$("success",`Omdøbte ${Oe(m.path)} til ${Oe(g)}.`),B&&await an()}catch(z){$("error",z instanceof Error?z.message:"Kunne ikke omdøbe filen.")}finally{K(null),H(!1)}}function mr(m,g){return g==="pico"?pe.some(x=>x.path===m):Ne.some(x=>x.path===m)}async function Ao(m){if(!mr(m,"pico"))return;const g=V0(m,pe),x=yl[m]??await _(m);await b(g,x)}function Do(m){if(m.type!=="file"){he&&El(void 0,!1),be(m.path),ve(m.source);return}if(he&&Ar(m)){$("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(m.source==="local"){he&&El(void 0,!1);const x=Ne.find(B=>B.path===m.path);Je(m.path,Mt[lt("local",m.path)]??(x==null?void 0:x.content)??"","local");return}const g=lt("pico",m.path);if(Object.prototype.hasOwnProperty.call(Mt,g)){he&&El(void 0,!1),Je(m.path,Mt[g],"pico");return}if(Object.prototype.hasOwnProperty.call(yl,m.path)){he&&El(void 0,!1),Je(m.path,yl[m.path],"pico");return}or(m.path)}async function Pr(){if(!(!E&&!he)){H(!0),K({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const m=De.length>0?De:he?await kl((x,B)=>K({value:x,label:B})):await qr(()=>$r(un.current));Ze(m);const g={};m.forEach(x=>{g[x.id]=!1}),Jl(g),Ue(!0),K(null)}catch(m){K(null),$("error",m instanceof Error?m.message:"Fil-tjek før installation fejlede.")}finally{H(!1)}}}async function jo(){if(Ue(!1),he){H(!0);try{const g=(De.length>0?De:Hi.map(B=>({...B,status:"unknown",detail:"Ikke tjekket"}))).filter(B=>St[B.id]&&!Ar(B));if(g.length===0){$("info","Ingen filer valgt til installation.");return}let x=null;K({value:0,label:"Starter installation..."});for(const[B,z]of g.entries()){$("info",`Installerer ${z.label} via Bluetooth...`);const te=B/g.length*100,ge=100/g.length;await Ao(z.path),await b(z.path,z.content,(Be,en)=>{K({value:Math.min(99,te+Be/100*ge),label:`${z.label}: ${en}`})}),Xt(z.path,z.content),$("success",`Installerede ${z.label}.`),z.kind==="library"&&(x=z),mo(z.path)&&Ht(!0)}Sn("Installation færdig"),await an(!1),await $t(),x&&ts(x)}catch(m){K(null),$("error",m instanceof Error?m.message:"BLE installation fejlede.")}finally{H(!1)}return}await On(async m=>{const x=(De.length>0?De:Hi.map(z=>({...z,status:"unknown",detail:"Ikke tjekket"}))).filter(z=>St[z.id]);if(x.length===0){$("info","Ingen filer valgt til installation.");return}let B=null;K({value:0,label:"Starter installation..."});for(const[z,te]of x.entries()){$("info",`Installerer ${te.label}...`);const ge=z/x.length*100,Be=100/x.length;await m.replaceTextSafely(te.path,te.content,(en,Fn)=>{K({value:Math.min(99,ge+en/100*Be),label:`${te.label}: ${Fn}`})},{createBackup:!0}),Xt(te.path,te.content),$("success",`Installerede ${te.label}.`),te.kind==="library"&&(B=te)}Sn("Installation færdig"),await an(!1),await $t(),B&&ts(B)})}function ts(m){Je(m.path,m.content,"pico"),Rn(m.path,m.content),$("info",`Åbnede ${m.label} i editoren.`)}function Oo(m,g){Jl(x=>{if(m.kind!=="program")return{...x,[m.id]:g};const B={...x};for(const z of De)z.kind==="program"&&(B[z.id]=!1);return B[m.id]=g,B})}async function Co(){if(Ho(),he&&_e==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(_e==="local"){await zo();return}const m=Dt.current;if(!m){$("error",`${Oe(W)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(W.endsWith(".py")){if(!Wi()&&($("info",`${Oe(W)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Ir())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(U)return;Br(!0),st.current=!0,at(!0);try{await m.runFile(W),$("success",`Kører ${Oe(W)}. Brug Stop for at afbryde.`)}catch(g){Br(!1),st.current=!1,$("error",g instanceof Error?g.message:"Kunne ikke starte koden.")}return}H(!0);try{const g=await m.exec(ae,2e4);g.output.trim()&&$("info",g.output),g.error.trim()&&ir(g.error,ae),!g.output.trim()&&!g.error.trim()&&$("success","Koden kørte uden output.")}catch(g){$("error",g instanceof Error?g.message:"Kunne ikke køre koden.")}finally{H(!1)}}async function zo(){const m=nf(ae);if(m.some(x=>x.level==="error")){for(const x of m){const B=x.line?`Linje ${x.line}: `:"";$(x.level==="error"?"error":"warning",`${B}${x.text}`)}return}const g=new AbortController;Vr.current=g,H(!0),Ga(!0),at(!0),$("info",E?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const x=[],B=await p0(ae,{signal:g.signal,onOutput:Be=>{x.push(Be),$("info",Be)}});for(const Be of B.issues){const en=Be.line?`Linje ${Be.line}: `:"";$(Be.level==="error"?"error":"warning",`${en}${Be.text}`)}const z=[...x,B.output].filter(Boolean).join(`
`).trim(),te=B.output.trim();!B.error.trim()&&C0(z)?ir(z,ae):(te&&$("info",te),B.error.trim()&&ir(B.error,ae,B.unavailable?"warning":"error")),B.ok&&!z&&!B.error.trim()&&$("success","Offline MicroPython kørte uden output.")}finally{Vr.current=null,Ga(!1),H(!1)}}async function ls(){var g,x;if(Lr){(g=Vr.current)==null||g.abort(),$("warning","Stoppede offline MicroPython."),at(!0);return}if(!Nt&&vn){(x=rr.current)==null||x.reset(),bl(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),at(!0);return}const m=Dt.current;if(m)try{await m.stop(),$("warning","Stoppede koden på Pico.")}catch(B){$("error",B instanceof Error?B.message:"Kunne ikke stoppe koden.")}finally{Br(!1),st.current=!1,at(!0)}}function Bo(){const m=ln.current;if(!m)return;const g=m.scrollHeight-m.scrollTop-m.clientHeight<12;at(g)}function Lo(){le([]),at(!0)}async function rs(){const m=it.trimEnd();if(!m.trim())return;if(tr(x=>(x.at(-1)===m?x:[...x,m]).slice(-80)),Xn(null),jn(null),In){$("warning",Nt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Tl();return}if(!Nt){const x=nf(m);if(x.some(z=>z.level==="error")){for(const z of x){const te=z.line?"Linje "+z.line+": ":"";$(z.level==="error"?"error":"warning",te+z.text)}Tl();return}const B=rr.current??new h0;rr.current=B,gl(""),bl(!0),at(!0),$("info",">>> "+m);try{let z=!1;const te=await B.send(m,{timeoutMs:15e3,onOutput:Be=>{z=!0,$("info",Be)}}),ge=te.output.trim();ge&&!z&&$("info",ge),te.error.trim()&&ir(te.error,m,te.unavailable?"warning":"error")}catch(z){$("error",z instanceof Error?z.message:"Browser-MicroPython-terminalen fejlede.")}finally{bl(!1),Tl()}return}if(he){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Tl();return}const g=Dt.current;if(!E||!g){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Tl();return}gl(""),bl(!0),at(!0),Gr.current=!0,$("info",">>> "+m);try{await g.sendFriendlyLine(m)}catch(x){Gr.current=!1,$("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{bl(!1),Tl()}}function Tl(){window.requestAnimationFrame(()=>{const m=rn.current;if(!m||m.disabled)return;m.focus();const g=m.value.length;m.selectionStart=g,m.selectionEnd=g})}function Wr(m,g,x){return x.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:m}),f.jsx("p",{children:g})]}),x.map(B=>{const z=he&&Ar(B);return f.jsxs("label",{className:`ide-install-row ${z?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!St[B.id],disabled:z,onChange:te=>Oo(B,te.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[Uo(B),B.kind==="library"&&f.jsx("em",{className:`ide-install-status status-${B.status}`,children:z?"USB":Y0(B.status)})]}),f.jsx("small",{children:B.description})]})]},B.id)})]})}function Uo(m){return m.kind==="program"?m.label.replace(/\s*\(main\.py\)$/i,""):m.label}function Ho(){At&&le([]),at(!0)}function Go(m,g){const x=m.indexOf(`
`,g);return x===-1?m.length:x}function Rl(m,g){const x=xp(m,g);if(!x||x.query.length<1){xn(null);return}const B=x.query.toLowerCase(),z=vp.filter(ge=>ge.label.toLowerCase().startsWith(B)&&!Zu(ge,x.query)).slice(0,8),te=Sp($n.current,x.start);xn(z.length>0&&te?{items:z,selected:0,start:x.start,end:g,position:te}:null)}function Jr(m,g){const x=xp(m,g);if(!x||x.query.length<1){jn(null);return}const B=x.query.toLowerCase(),z=vp.filter(ge=>ge.label.toLowerCase().startsWith(B)&&!Zu(ge,x.query)).slice(0,8),te=Sp(rn.current,x.start);jn(z.length>0&&te?{items:z,selected:0,start:x.start,end:g,position:te}:null)}function as(m){const g=m.value.slice(m.selectionStart,m.selectionEnd);Va(B0(g)?g:"")}function Pa(m=$e==null?void 0:$e.items[$e.selected]){if(!m||!$e)return;const g=ae.slice(0,$e.start)+m.insert+ae.slice($e.end),x=$e.start+m.insert.length-(m.insert.endsWith("()")?1:0);Ve(g),Dn(B=>({...B,[lt(_e,W)]:g})),xn(null),window.requestAnimationFrame(()=>{const B=$n.current;B&&(B.focus(),B.selectionStart=x,B.selectionEnd=x,Rl(g,x))})}function is(m=cn==null?void 0:cn.items[cn.selected]){if(!m||!cn)return;const g=it.slice(0,cn.start)+m.insert+it.slice(cn.end),x=cn.start+m.insert.length-(m.insert.endsWith("()")?1:0);gl(g),jn(null),window.requestAnimationFrame(()=>{const B=rn.current;B&&(B.focus(),B.selectionStart=x,B.selectionEnd=x,Jr(g,x))})}function Vo(m){var It;if((m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="s"){m.preventDefault(),!U&&W.trim()&&Kr();return}if($e){if(m.key==="ArrowDown"){m.preventDefault(),xn(je=>je&&{...je,selected:(je.selected+1)%je.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),xn(je=>je&&{...je,selected:(je.selected-1+je.items.length)%je.items.length});return}if(m.key==="Tab"){m.preventDefault(),Pa();return}if(m.key==="Enter"){if(!($e.items[$e.selected]&&Zu($e.items[$e.selected],ae.slice($e.start,$e.end)))){m.preventDefault(),Pa();return}xn(null)}if(m.key==="Escape"){m.preventDefault(),xn(null);return}}if(m.key==="Enter"){m.preventDefault();const je=m.currentTarget,Ft=je.selectionStart,Wa=je.selectionEnd,hr=ae.lastIndexOf(`
`,Ft-1)+1,Qt=ae.slice(hr,Ft),ea=((It=Qt.match(/^[ \t]*/))==null?void 0:It[0])??"",Zt=Qt.trimEnd().endsWith(":")?"    ":"",Pt=`
${ea}${Zt}`,Ja=ae.slice(0,Ft)+Pt+ae.slice(Wa),Ct=Ft+Pt.length;gn(Ja,Ct),window.requestAnimationFrame(()=>{je.selectionStart=Ct,je.selectionEnd=Ct});return}if(m.key!=="Tab")return;m.preventDefault();const g=m.currentTarget,x=g.selectionStart,B=g.selectionEnd,z="    ";if(m.shiftKey){const je=ae.lastIndexOf(`
`,x-1)+1,Ft=x===B?Go(ae,x):B,Wa=ae.slice(je,Ft);let hr=0,Qt=0;const ea=Wa.replace(/(^|\n)( {1,4}|\t)/g,(Pt,Ja,Ct,ss)=>{const ei=Ct.length;return je+ss<x&&(hr+=ei),Qt+=ei,Ja});if(Qt===0)return;const Zt=ae.slice(0,je)+ea+ae.slice(Ft);gn(Zt,Math.max(je,x-hr)),window.requestAnimationFrame(()=>{g.selectionStart=Math.max(je,x-hr),g.selectionEnd=x===B?g.selectionStart:Math.max(g.selectionStart,B-Qt)});return}if(x===B){const je=ae.slice(0,x)+z+ae.slice(B);gn(je,x+z.length),window.requestAnimationFrame(()=>{g.selectionStart=x+z.length,g.selectionEnd=x+z.length});return}const te=ae.lastIndexOf(`
`,x-1)+1,Be=ae.slice(te,B).replace(/^/gm,z),en=Be.split(`
`).length,Fn=ae.slice(0,te)+Be+ae.slice(B);gn(Fn,x+z.length),window.requestAnimationFrame(()=>{g.selectionStart=x+z.length,g.selectionEnd=B+en*z.length})}function Yo(m){if(cn){if(m.key==="ArrowDown"){m.preventDefault(),jn(g=>g&&{...g,selected:(g.selected+1)%g.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),jn(g=>g&&{...g,selected:(g.selected-1+g.items.length)%g.items.length});return}if(m.key==="Enter"||m.key==="Tab"){m.preventDefault(),is();return}if(m.key==="Escape"){m.preventDefault(),jn(null);return}}if(m.key==="Tab"){m.preventDefault();const g=m.currentTarget,x=g.selectionStart,B=g.selectionEnd,z="    ",te=it.slice(0,x)+z+it.slice(B),ge=x+z.length;gl(te),Xn(null),jn(null),window.requestAnimationFrame(()=>{g.selectionStart=ge,g.selectionEnd=ge});return}if(m.key==="ArrowUp"||m.key==="ArrowDown"){if(!(m.key==="ArrowUp"?m.currentTarget.selectionStart===0&&m.currentTarget.selectionEnd===0:m.currentTarget.selectionStart===it.length&&m.currentTarget.selectionEnd===it.length)||Ur.length===0)return;m.preventDefault();const x=m.key==="ArrowUp"?pn===null?Ur.length-1:Math.max(0,pn-1):pn===null||pn+1>=Ur.length?null:pn+1;Xn(x);const B=x===null?"":Ur[x]??"";gl(B),jn(null),window.requestAnimationFrame(()=>{const z=rn.current;z&&(z.selectionStart=B.length,z.selectionEnd=B.length)});return}m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),rs())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(mf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Hr?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Qr,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(zn,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var m;return(m=Ya.current)==null?void 0:m.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(zn,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>an(),disabled:!E&&!he||U,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(zn,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:ut.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):ut.map(m=>{if(m.kind==="separator"){const z=m.id==="pico-files"&&!E&&!he;return f.jsxs(V.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:m.label})}),z&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},m.id)}const g=he&&Ar(m),x=Mt[lt(m.source,m.path)],B=x!==void 0&&x!==G0(m,Ne,yl);return f.jsxs("div",{className:`ide-file-row ${W===m.path&&_e===m.source?"active":""} ${g?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>Do(m),disabled:g,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:m.name}),f.jsx("small",{title:B?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:f.jsx("i",{className:`ide-file-dirty-dot ${B?"dirty":"clean"}`,"aria-hidden":"true"})})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Qa(m),disabled:m.type!=="file"||U||g,"aria-label":`Filvalg for ${m.name}`,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(zn,{name:"settings",size:16})})]},`${m.source}:${m.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&f.jsx("span",{className:`ide-usb-status ${qt.supported?"available":"unavailable"}`,title:qt.message,"data-tooltip":qt.message,role:"img","aria-label":qt.message,tabIndex:0,children:"!"})]}),he&&f.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:E?Nl:Ka,disabled:!qt.supported||j,children:j?"Forbinder...":E?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Pr,disabled:!E||he||U,children:"Installer"})]}),he&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(zn,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Pr,disabled:U,children:"Installer"})]}),f.jsx("div",{className:"ide-runtime",children:f.jsxs("div",{className:`ide-mini-actions ${he?"single":""}`,children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:$t,disabled:!E&&!he||U,children:"Tjek filer"}),!he&&f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Or(!0),children:"MicroPython"})]})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[Oe(W),f.jsxs("small",{children:[To," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Co,disabled:U,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:ls,disabled:!Lr&&!(!Nt&&vn)&&(!E||!Tn),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ot,disabled:U||!W.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Fa(),disabled:U||!W.trim(),children:"Slet"})]})]}),Ro(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Ha.top}px)`},children:Array.from({length:Sl},(m,g)=>f.jsx("span",{children:g+1},g))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Ha.left}px, ${-Ha.top}px)`},children:U0(ae,ko)}),f.jsx("textarea",{ref:$n,className:"ide-editor",value:ae,onChange:m=>gn(m.target.value,m.target.selectionStart),onKeyDown:Vo,onKeyUp:m=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||Rl(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>{Rl(m.currentTarget.value,m.currentTarget.selectionStart),as(m.currentTarget)},onSelect:m=>as(m.currentTarget),onScroll:m=>{Ki({top:m.currentTarget.scrollTop,left:m.currentTarget.scrollLeft}),$e&&Rl(m.currentTarget.value,m.currentTarget.selectionStart)},readOnly:U||!!xe,"aria-busy":U||!!xe,spellCheck:!1}),$e&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:$e.position.left,top:$e.position.top},children:$e.items.map((m,g)=>f.jsx("button",{className:g===$e.selected?"active":"",type:"button",onMouseDown:x=>{x.preventDefault(),Pa(m)},role:"option","aria-selected":g===$e.selected,children:m.label},m.label))}),xe&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",Oe(xe),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Gt?"":"active"}`,type:"button",onClick:()=>Ii(m=>!m),"aria-label":Gt?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!Gt,title:Gt?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${At?"active":""}`,type:"button",onClick:()=>lr(m=>!m),"aria-pressed":At,title:At?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Lo,disabled:Q.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:ln,onScroll:Bo,onClick:()=>{var m;return(m=rn.current)==null?void 0:m.focus()},children:[Q.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):Q.map((m,g)=>f.jsx("div",{className:`term-line term-${m.level}`,children:m.technical&&!Gt?m.technical:m.text},`${g}-${m.text}`)),f.jsxs("form",{className:`ide-terminal-command ${In?"locked":""}`,onSubmit:m=>{m.preventDefault(),rs()},children:[f.jsx("span",{"aria-hidden":"true",children:">>>"}),f.jsx("textarea",{ref:rn,value:it,onChange:m=>{gl(m.target.value),Xn(null),Jr(m.target.value,m.target.selectionStart)},onKeyDown:Yo,onKeyUp:m=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||Jr(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>Jr(m.currentTarget.value,m.currentTarget.selectionStart),disabled:Un,placeholder:qa,"aria-label":"MicroPython-terminalkommando",title:qa,rows:Math.max(1,it.split(`
`).length)})]}),cn&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:cn.position.left,top:cn.position.top},children:cn.items.map((m,g)=>f.jsx("button",{className:g===cn.selected?"active":"",type:"button",onMouseDown:x=>{x.preventDefault(),is(m)},role:"option","aria-selected":g===cn.selected,children:m.label},m.label))})]})]})]}),f.jsx("input",{ref:Ya,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:m=>{var g;Kt((g=m.target.files)==null?void 0:g[0]),m.currentTarget.value=""}}),D&&f.jsx(yn,{title:"Gem fil",onClose:()=>I(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:cr,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Ir(),disabled:!E&&!he||U,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Fr,children:"Download til computer"})]})}),Ie&&f.jsx(yn,{title:"Installer filer",onClose:()=>Ue(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:"Vælg et startprogram og de biblioteker dit projekt bruger. Ingen filer er valgt på forhånd."}),f.jsxs("div",{className:"ide-install-grid",children:[Wr("Startprogrammer (main.py)","Starter automatisk på Picoen.",De.filter(m=>m.kind==="program")),Wr("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",De.filter(m=>m.kind==="library"))]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:jo,disabled:U,children:"Installer valgte"})]})}),Ua&&f.jsx(yn,{title:"main.py er gemt",onClose:()=>Ht(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ur("control"),disabled:U,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ur("ide"),disabled:U,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Ht(!1),disabled:U,children:"Senere"})]})}),La&&f.jsx(yn,{title:"Installer MicroPython",onClose:()=>Or(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:_l,onChange:m=>No(m.target.value),children:Zi.map(m=>f.jsx("option",{value:m,children:m},m))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(wt==null?void 0:wt.version)??er,onChange:m=>zr(m.target.value),children:ar.map(m=>f.jsxs("option",{value:m.version,children:[m.version," (",m.date,")"]},`${m.board}:${m.version}:${m.date}`))})]}),wt&&f.jsx("a",{className:"btn btn-primary btn-block",href:wt.url,download:wt.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),O&&f.jsx(yn,{title:"Ny Python-fil",onClose:()=>Y(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:m=>{m.preventDefault(),fr()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:ie,onChange:m=>Ee(m.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Qi,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!yp(ie),children:"Opret"})]})}),L&&f.jsx(yn,{title:Oe(L.path),onClose:()=>P(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:m=>{m.preventDefault(),ns()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:de,onChange:m=>w(m.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Vi(L.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Vi(L.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Qu(de,Vi(L.path))||Qu(de,Vi(L.path))===L.path||U,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Fa(L),disabled:U,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),L.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):L.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:L.versions.map(m=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:Oe(m.path)}),f.jsx("small",{children:m.size!==void 0?`${m.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Za(m),disabled:U,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>dr(m),disabled:U,children:"Slet"})]},m.path))})]})]})})]})}function yp(o){var u;const i=(u=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.replace(/\.py$/i,"").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function D0(o){const i=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),u=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!u)return"";const s=u[1].replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,"");return s?`/${s}.${u[2].toLowerCase()}`:""}function Qu(o,i="py"){const u=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!u)return"";const s=u.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const c=s[1].replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,""),h=i.replace(/^\./,"").toLowerCase(),_=(s[2]??(h||"py")).toLowerCase();return c?`/${c}.${_}`:""}function j0(o){return Oe(o).replace(/\.(py|txt|json|csv)$/i,"")}function Vi(o){var s;const i=Oe(o).match(/\.([a-z0-9]+)$/i),u=(s=i==null?void 0:i[1])==null?void 0:s.toLowerCase();return u&&["py","txt","json","csv"].includes(u)?u:"py"}function fo(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Oe(o){return o.split("/").filter(Boolean).pop()??o}function mo(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function O0(o){return o instanceof DOMException&&o.name==="AbortError"}function C0(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function Ar(o){return z0(o)}function z0(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const vp=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.reset()",insert:"machine.reset()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"import time",insert:"import time"},{label:"import machine",insert:"import machine"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function xp(o,i){const s=o.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function Zu(o,i){const u=o.insert.trim();return!/[().]/.test(u)&&u.toLowerCase()===i.toLowerCase()}function B0(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Sp(o,i){if(!o)return null;const u=o.closest(".ide-terminal")??o.parentElement;if(!u)return null;const s=window.getComputedStyle(o),c=document.createElement("div"),h=document.createElement("span"),_=u.getBoundingClientRect(),b=o.getBoundingClientRect();c.style.position="absolute",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.whiteSpace="pre-wrap",c.style.overflowWrap="break-word",c.style.boxSizing=s.boxSizing,c.style.width=`${o.clientWidth}px`,c.style.padding=s.padding,c.style.border=s.border,c.style.font=s.font,c.style.lineHeight=s.lineHeight,c.style.letterSpacing=s.letterSpacing,c.style.tabSize=s.tabSize,c.style.left=`${b.left-_.left-o.scrollLeft}px`,c.style.top=`${b.top-_.top-o.scrollTop}px`,c.textContent=o.value.slice(0,i),h.textContent=o.value.slice(i,i+1)||" ",c.appendChild(h),u.appendChild(c);const v=h.getBoundingClientRect();c.remove();const y=L0(v.left-_.left,8,Math.max(8,u.clientWidth-296)),E=v.bottom-_.top+6,k=E+218>u.clientHeight?Math.max(8,v.top-_.top-218):E;return{left:y,top:k}}function L0(o,i,u){return Math.max(i,Math.min(u,o))}function U0(o,i=""){const u=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,c=[];return o.split(/(\r?\n)/).forEach((h,_)=>{if(h===`
`||h===`\r
`){c.push(f.jsx("br",{},`br-${_}`));return}let b=0;[...h.matchAll(s)].forEach((y,E)=>{const k=y.index??0;k>b&&c.push(...Ep(h.slice(b,k),u,`${_}-${E}-plain`,i));const j=y[0],F=j.startsWith("#")?"tok-comment":j.startsWith('"')||j.startsWith("'")?"tok-string":/^\d/.test(j)?"tok-number":"tok-builtin";c.push(..._o(j,i,`${_}-${E}-token`,F)),b=k+j.length}),b<h.length&&c.push(...Ep(h.slice(b),u,`${_}-tail`,i))}),c.length?c:" "}function Ep(o,i,u,s=""){const c=[];let h=0;const _=new RegExp(i.source,"g");return[...o.matchAll(_)].forEach((b,v)=>{const y=b.index??0;y>h&&c.push(..._o(o.slice(h,y),s,`${u}-${v}-plain`)),c.push(..._o(b[0],s,`${u}-${v}-keyword`,"tok-keyword")),h=y+b[0].length}),h<o.length&&c.push(..._o(o.slice(h),s,`${u}-plain-end`)),c}function _o(o,i,u,s=""){if(!i)return[f.jsx("span",{className:s||void 0,children:o},u)];const c=[],h=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let b=0;return[...o.matchAll(_)].forEach((v,y)=>{const E=v.index??0;E>b&&c.push(f.jsx("span",{className:s||void 0,children:o.slice(b,E)},`${u}-${y}-before`)),c.push(f.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${u}-${y}-match`)),b=E+v[0].length}),b<o.length&&c.push(f.jsx("span",{className:s||void 0,children:o.slice(b)},`${u}-after`)),c.length?c:[f.jsx("span",{className:s||void 0,children:o},u)]}function Pu(o){return o.length>0?o:[{path:rf,content:Vp,uploaded:!1,updatedAt:Date.now()}]}function H0(o,i,u,s){const c=o.filter(h=>h.path!==i);return[{path:i,content:u,uploaded:s,updatedAt:Date.now()},...c].sort((h,_)=>_.updatedAt-h.updatedAt)}function G0(o,i,u){var s;return o.source==="pico"?u[o.path]:(s=i.find(c=>c.path===o.path))==null?void 0:s.content}function go(o){const i=o.replace(/\\/g,"/"),u=i.lastIndexOf("/"),s=u>=0?i.slice(0,u+1):"",h=(u>=0?i.slice(u+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${s}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Aa(o){return go(o)!==null}function af(o){const i=new Map;for(const u of o){const s=go(u.path);if(!s)continue;const c=i.get(s.originalPath)??[];c.push(u),i.set(s.originalPath,c)}for(const u of i.values())u.sort((s,c)=>{var h,_;return(((h=go(c.path))==null?void 0:h.index)??0)-(((_=go(s.path))==null?void 0:_.index)??0)});return i}function V0(o,i){const u=o.replace(/\\/g,"/"),s=u.lastIndexOf("/"),c=s>=0?u.slice(0,s+1):"/",h=s>=0?u.slice(s+1):u.replace(/^\/+/,""),_=h.lastIndexOf("."),b=_>0?h.slice(0,_):h,v=_>0?h.slice(_):"",y=new Set(i.map(E=>E.path.toLowerCase()));for(let E=1;E<1e3;E+=1){const k=`${c}${b}_backup${E}${v}`;if(!y.has(k.toLowerCase()))return k}return`${c}${b}_backup${Date.now()}${v}`}function Y0(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function q0(o,i,u,s){const c=new Map,h=af(o);for(const E of o)Aa(E.path)||c.set(lt("pico",E.path),{kind:"file",name:E.name,path:E.path,type:E.type,size:E.size,source:"pico",uploaded:!0,versions:h.get(E.path)??[]});for(const E of i)c.set(lt("local",E.path),{kind:"file",name:Oe(E.path),path:E.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const E of Object.keys(u)){const[k,...j]=E.split(":"),F=j.join(":");if(k!=="local"&&k!=="pico"||!F)continue;const Q=c.get(E);if(Q){c.set(E,Q);continue}c.set(E,{kind:"file",name:Oe(F),path:F,type:"file",source:k,uploaded:!1,versions:k==="pico"?h.get(F)??[]:[]})}const _=[...c.values()].sort($0),b=_.filter(E=>E.source==="pico"),v=_.filter(E=>E.source==="local"),y=[];return b.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...b):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const X0=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function $0(o,i){const u=wp(o.path),s=wp(i.path);return u===null&&s===null?o.name.localeCompare(i.name,"da"):u===null?-1:s===null?1:u-s}function wp(o){var u;const i=(u=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.toLowerCase();return i?X0.get(i)??null:null}function Np(o,i,u){if(!(i in o))return o;const s={...o,[u]:o[i]};return delete s[i],s}function K0(o,i,u,s){const c=`${i}:${u}`;if(!(c in o))return o;const h={...o,[`${i}:${s}`]:o[c]};return delete h[c],h}function I0({open:o}){const i=J(H=>H.screen),u=J(H=>H.active),s=J(H=>H.toggleSideMenu),c=J(H=>H.toggleDebugger),h=J(H=>H.setEditMode),_=J(H=>H.openMenuPage),b=J(H=>H.disconnect),v=J(H=>H.openPicoIde),y=J(H=>H.closePicoIde),E=J(H=>H.picoIdeOrigin),k=i==="dashboard",j=i==="control",F=i==="ide",Q=j&&!!(u!=null&&u.canEdit),le=E==="control",U=E==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${i} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[k&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),f.jsx(tt,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),f.jsx(tt,{label:"Kodeværksted",icon:"picoIde",onClick:v}),f.jsx(Wu,{}),f.jsx(tt,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),f.jsx(tt,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),f.jsx(tt,{label:"Fejlfinding",icon:"debugger",onClick:()=>c(!0)})]}),j&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),f.jsx(tt,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!Q}),f.jsx(tt,{label:"Kodeværksted",icon:"picoIde",onClick:v}),f.jsx(Wu,{}),f.jsx(tt,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),f.jsx(tt,{label:"Fejlfinding",icon:"debugger",onClick:()=>c(!0)})]}),F&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:U,icon:"back",onClick:y}),f.jsx(Wu,{})]}),f.jsx("div",{className:"spacer"}),(j||F&&le)&&f.jsx(tt,{label:"Forlad",icon:"exit",onClick:()=>b()})]})]})}function tt({label:o,icon:i,disabled:u,onClick:s}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:u,"aria-label":o,children:[f.jsx(zn,{name:i}),f.jsx("span",{children:o})]})}function Wu(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:ub,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const F0={error:"term-error",success:"term-success",warning:"term-warning",info:""},kp={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function Q0(){const o=new Date,i=u=>String(u).padStart(2,"0");return`${i(o.getDate())}-${i(o.getMonth()+1)}-${o.getFullYear()}-${i(o.getHours())}-${i(o.getMinutes())}`}function Z0(){const o=J(c=>c.logs),i=J(c=>c.clearLogs),u=J(c=>c.toggleDebugger);function s(){const c=[...o].reverse().map(v=>`${v.time} ${kp[v.level]}${v.message}`).join(`
`),h=new Blob([c],{type:"text/plain"}),_=URL.createObjectURL(h),b=document.createElement("a");b.href=_,b.download=`${Q0()}.txt`,b.click(),URL.revokeObjectURL(_)}return f.jsxs(yn,{title:"Fejlfinding",onClose:()=>u(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((c,h)=>f.jsxs("div",{className:`term-line ${F0[c.level]}`,children:[c.time," ",kp[c.level],c.message]},`${c.time}-${h}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}function P0(){const o=J(Y=>Y.menuPage),i=J(Y=>Y.closeMenuPage),u=J(Y=>Y.user),s=J(Y=>Y.active),c=J(Y=>Y.layout),h=J(Y=>Y.sliderValues),_=J(Y=>Y.savedDevices),b=J(Y=>Y.updateUsername),v=J(Y=>Y.clearSavedDevices),y=J(Y=>Y.resetApplicationData),E=J(Y=>Y.saveDeviceSettings),k=J(Y=>Y.setEditMode),j=J(Y=>Y.askConfirm),[F,Q]=V.useState((u==null?void 0:u.username)??""),[le,U]=V.useState((s==null?void 0:s.iconID)??0),[H,pe]=V.useState(!1),[oe,xe]=V.useState((s==null?void 0:s.canOthersConnect)??!1),[fe,Ne]=V.useState((s==null?void 0:s.canOthersEdit)??!1),[ee,W]=V.useState((s==null?void 0:s.gridCols)??11),[be,_e]=V.useState((s==null?void 0:s.gridRows)??31),[ve,ae]=V.useState(!1);V.useEffect(()=>{o==="user-settings"&&Q((u==null?void 0:u.username)??"")},[o,u==null?void 0:u.username]),V.useEffect(()=>{o==="device-settings"&&s&&(U(s.iconID),xe(s.canOthersConnect),Ne(s.canOthersEdit),W(s.gridCols),_e(s.gridRows))},[s,o]);const Ve=(Y,ie)=>Number.isFinite(Y)?Math.max(Da,Math.min(ja,Math.round(Y))):ie,De=(u==null?void 0:u.username)??"",Ze=F.trim(),O=Ze.length>0&&Ze!==De;if(!o)return null;if(o==="user-settings")return f.jsx(yn,{title:"Brugerindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(vt,{label:"GUID",value:(u==null?void 0:u.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${F.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:F,onChange:Y=>Q(Y.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>b(F),disabled:!O,children:"Gem nyt brugernavn"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>j({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{y()}}),children:"Slet brugerdata"})]})});if(o==="application-settings")return f.jsx(yn,{title:"Applikationsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(vt,{label:"Version",value:Xi}),f.jsx(vt,{label:"Bluetooth",value:Eo()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(vt,{label:"Gemte enheder",value:String(_.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>j({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:v}),disabled:_.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(yn,{title:"Om appen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(vt,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(vt,{label:"Version",value:Xi})]})});if(o==="application-help")return f.jsx(yn,{title:"Hjælp til applikationen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const Y=c.filter(de=>de.type==="slider"),ie=!!(s!=null&&s.isOwnedByMe);async function Ee(de=!1){if(!s||!ie)return;const w=Ve(ee,s.gridCols),L=Ve(be,s.gridRows),P=W0(c,w,L);if(P&&!de){j({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${P.requiredCols} kolonner og ${P.requiredRows} rækker. Det nye gitter er ${w} × ${L}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Ee(!0)}});return}ae(!0),await E(le,oe,oe&&fe,w,L),W(w),_e(L),ae(!1)}return f.jsx(yn,{title:"Enhedsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(vt,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),f.jsx(vt,{label:"Ejer",value:ey(s)}),ie?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>pe(!0),children:f.jsx("img",{src:Ba(le),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:oe?"":"active",onClick:()=>xe(!1),children:"Privat"}),f.jsx("button",{type:"button",className:oe?"active":"",onClick:()=>xe(!0),children:"Offentlig"})]}),oe&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:fe?"":"active",onClick:()=>Ne(!1),children:"Nej"}),f.jsx("button",{type:"button",className:fe?"active":"",onClick:()=>Ne(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Da,max:ja,value:Number.isNaN(ee)?"":ee,onChange:de=>W(parseInt(de.target.value,10)),onBlur:()=>W(Ve(ee,(s==null?void 0:s.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Da,max:ja,value:Number.isNaN(be)?"":be,onChange:de=>_e(parseInt(de.target.value,10)),onBlur:()=>_e(Ve(be,(s==null?void 0:s.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Ee(),disabled:ve,children:ve?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(vt,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),f.jsx(vt,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(vt,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),f.jsx(vt,{label:"Kontroller",value:String(c.length)}),Y.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),Y.map(de=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:de.name}),f.jsxs("span",{children:[de.sliderMin??0," til ",de.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",J0(de.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",h[de.name]??"Ikke brugt"]})]},de.name))]}),H&&f.jsx(Op,{selected:le,onSelect:U,onClose:()=>pe(!1)})]})})}return f.jsx(yn,{title:"Hjælp til enheden",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>k(!0),children:"Rediger layout"})]})})}function W0(o,i,u){let s=0,c=0;for(const h of o)Oa(h)&&(s=Math.max(s,Math.ceil((h.centerX2+h.spanX)/2)+1),c=Math.max(c,Math.ceil((h.centerY2+h.spanY)/2)+1));return i<s||u<c?{requiredCols:s,requiredRows:c}:null}function J0(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function ey(o){var i;return o?o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function vt({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function ny(){const o=J(s=>s.confirmDialog),i=J(s=>s.closeConfirm);if(!o)return null;function u(){o==null||o.onConfirm(),i()}return f.jsx(yn,{title:o.title,onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:u,children:o.confirmLabel??"Fortsæt"})]})]})})}function ty(){const o=J(s=>s.connectionLost),i=J(s=>s.reconnectLostDevice),u=J(s=>s.dismissConnectionLost);return o?f.jsx(yn,{title:"Forbindelse afbrudt",onClose:u,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:u,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function ly(){const o=J(u=>u.toast),i=J(u=>u.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:i,children:o.message},o.id):null}function ry(){const o=J(b=>b.screen),i=J(b=>b.splashTarget),u=J(b=>b.init),s=J(b=>b.sideMenuOpen),c=J(b=>b.debuggerOpen),[h,_]=V.useState(!1);return V.useEffect(()=>{u()},[u]),V.useEffect(()=>{if(s){_(!0);return}const b=setTimeout(()=>_(!1),140);return()=>clearTimeout(b)},[s]),f.jsxs("div",{className:"app",children:[o==="splash"&&i==="intro"&&f.jsx(Jh,{}),o==="splash"&&i==="dashboard"&&f.jsx(ep,{}),o==="splash"&&f.jsx(hb,{}),o==="intro"&&f.jsx(Jh,{}),o==="dashboard"&&f.jsx(ep,{}),o==="connection"&&f.jsx(yb,{}),o==="create"&&f.jsx(vb,{}),o==="control"&&f.jsx(Gb,{}),o==="ide"&&f.jsx(A0,{}),h&&f.jsx(I0,{open:s}),f.jsx(P0,{}),f.jsx(ty,{}),f.jsx(ny,{}),c&&f.jsx(Z0,{}),f.jsx(ly,{})]})}function ay(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(i=>{console.warn("Service worker registration failed:",i)})})}ay();kg.createRoot(document.getElementById("root")).render(f.jsx(Yi.StrictMode,{children:f.jsx(ry,{})}));
