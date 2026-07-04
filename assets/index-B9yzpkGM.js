var gg=Object.defineProperty;var bg=(o,i,u)=>i in o?gg(o,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[i]=u;var ue=(o,i,u)=>bg(o,typeof i!="symbol"?i+"":i,u);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const _ of h.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function u(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=u(c);fetch(c.href,h)}})();function Ap(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Hu={exports:{}},Ui={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh;function yg(){if(jh)return Ui;jh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(s,c,h){var _=null;if(h!==void 0&&(_=""+h),c.key!==void 0&&(_=""+c.key),"key"in c){h={};for(var b in c)b!=="key"&&(h[b]=c[b])}else h=c;return c=h.ref,{$$typeof:o,type:s,key:_,ref:c!==void 0?c:null,props:h}}return Ui.Fragment=i,Ui.jsx=u,Ui.jsxs=u,Ui}var Oh;function vg(){return Oh||(Oh=1,Hu.exports=yg()),Hu.exports}var f=vg(),Gu={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function xg(){if(Ch)return ye;Ch=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),_=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),j=Symbol.iterator;function F(w){return w===null||typeof w!="object"?null:(w=j&&w[j]||w["@@iterator"],typeof w=="function"?w:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,U={};function H(w,L,P){this.props=w,this.context=L,this.refs=U,this.updater=P||Q}H.prototype.isReactComponent={},H.prototype.setState=function(w,L){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,L,"setState")},H.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _e(){}_e.prototype=H.prototype;function oe(w,L,P){this.props=w,this.context=L,this.refs=U,this.updater=P||Q}var xe=oe.prototype=new _e;xe.constructor=oe,le(xe,H.prototype),xe.isPureReactComponent=!0;var fe=Array.isArray;function ke(){}var ee={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function be(w,L,P){var D=P.ref;return{$$typeof:o,type:w,key:L,ref:D!==void 0?D:null,props:P}}function ge(w,L){return be(w.type,L,w.props)}function ve(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function ae(w){var L={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(P){return L[P]})}var Ve=/\/+/g;function Ae(w,L){return typeof w=="object"&&w!==null&&w.key!=null?ae(""+w.key):L.toString(36)}function Fe(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ke,ke):(w.status="pending",w.then(function(L){w.status==="pending"&&(w.status="fulfilled",w.value=L)},function(L){w.status==="pending"&&(w.status="rejected",w.reason=L)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function O(w,L,P,D,I){var Z=typeof w;(Z==="undefined"||Z==="boolean")&&(w=null);var K=!1;if(w===null)K=!0;else switch(Z){case"bigint":case"string":case"number":K=!0;break;case"object":switch(w.$$typeof){case o:case i:K=!0;break;case S:return K=w._init,O(K(w._payload),L,P,D,I)}}if(K)return I=I(w),K=D===""?"."+Ae(w,0):D,fe(I)?(P="",K!=null&&(P=K.replace(Ve,"$&/")+"/"),O(I,L,P,"",function(at){return at})):I!=null&&(ve(I)&&(I=ge(I,P+(I.key==null||w&&w.key===I.key?"":(""+I.key).replace(Ve,"$&/")+"/")+K)),L.push(I)),1;K=0;var Ie=D===""?".":D+":";if(fe(w))for(var Oe=0;Oe<w.length;Oe++)D=w[Oe],Z=Ie+Ae(D,Oe),K+=O(D,L,P,Z,I);else if(Oe=F(w),typeof Oe=="function")for(w=Oe.call(w),Oe=0;!(D=w.next()).done;)D=D.value,Z=Ie+Ae(D,Oe++),K+=O(D,L,P,Z,I);else if(Z==="object"){if(typeof w.then=="function")return O(Fe(w),L,P,D,I);throw L=String(w),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return K}function Y(w,L,P){if(w==null)return w;var D=[],I=0;return O(w,D,"","",function(Z){return L.call(P,Z,I++)}),D}function ie(w){if(w._status===-1){var L=w._result;L=L(),L.then(function(P){(w._status===0||w._status===-1)&&(w._status=1,w._result=P)},function(P){(w._status===0||w._status===-1)&&(w._status=2,w._result=P)}),w._status===-1&&(w._status=0,w._result=L)}if(w._status===1)return w._result.default;throw w._result}var Ee=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},de={map:Y,forEach:function(w,L,P){Y(w,function(){L.apply(this,arguments)},P)},count:function(w){var L=0;return Y(w,function(){L++}),L},toArray:function(w){return Y(w,function(L){return L})||[]},only:function(w){if(!ve(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ye.Activity=N,ye.Children=de,ye.Component=H,ye.Fragment=u,ye.Profiler=c,ye.PureComponent=oe,ye.StrictMode=s,ye.Suspense=v,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ye.__COMPILER_RUNTIME={__proto__:null,c:function(w){return ee.H.useMemoCache(w)}},ye.cache=function(w){return function(){return w.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(w,L,P){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var D=le({},w.props),I=w.key;if(L!=null)for(Z in L.key!==void 0&&(I=""+L.key),L)!W.call(L,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&L.ref===void 0||(D[Z]=L[Z]);var Z=arguments.length-2;if(Z===1)D.children=P;else if(1<Z){for(var K=Array(Z),Ie=0;Ie<Z;Ie++)K[Ie]=arguments[Ie+2];D.children=K}return be(w.type,I,D)},ye.createContext=function(w){return w={$$typeof:_,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},ye.createElement=function(w,L,P){var D,I={},Z=null;if(L!=null)for(D in L.key!==void 0&&(Z=""+L.key),L)W.call(L,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(I[D]=L[D]);var K=arguments.length-2;if(K===1)I.children=P;else if(1<K){for(var Ie=Array(K),Oe=0;Oe<K;Oe++)Ie[Oe]=arguments[Oe+2];I.children=Ie}if(w&&w.defaultProps)for(D in K=w.defaultProps,K)I[D]===void 0&&(I[D]=K[D]);return be(w,Z,I)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(w){return{$$typeof:b,render:w}},ye.isValidElement=ve,ye.lazy=function(w){return{$$typeof:S,_payload:{_status:-1,_result:w},_init:ie}},ye.memo=function(w,L){return{$$typeof:y,type:w,compare:L===void 0?null:L}},ye.startTransition=function(w){var L=ee.T,P={};ee.T=P;try{var D=w(),I=ee.S;I!==null&&I(P,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(ke,Ee)}catch(Z){Ee(Z)}finally{L!==null&&P.types!==null&&(L.types=P.types),ee.T=L}},ye.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ye.use=function(w){return ee.H.use(w)},ye.useActionState=function(w,L,P){return ee.H.useActionState(w,L,P)},ye.useCallback=function(w,L){return ee.H.useCallback(w,L)},ye.useContext=function(w){return ee.H.useContext(w)},ye.useDebugValue=function(){},ye.useDeferredValue=function(w,L){return ee.H.useDeferredValue(w,L)},ye.useEffect=function(w,L){return ee.H.useEffect(w,L)},ye.useEffectEvent=function(w){return ee.H.useEffectEvent(w)},ye.useId=function(){return ee.H.useId()},ye.useImperativeHandle=function(w,L,P){return ee.H.useImperativeHandle(w,L,P)},ye.useInsertionEffect=function(w,L){return ee.H.useInsertionEffect(w,L)},ye.useLayoutEffect=function(w,L){return ee.H.useLayoutEffect(w,L)},ye.useMemo=function(w,L){return ee.H.useMemo(w,L)},ye.useOptimistic=function(w,L){return ee.H.useOptimistic(w,L)},ye.useReducer=function(w,L,P){return ee.H.useReducer(w,L,P)},ye.useRef=function(w){return ee.H.useRef(w)},ye.useState=function(w){return ee.H.useState(w)},ye.useSyncExternalStore=function(w,L,P){return ee.H.useSyncExternalStore(w,L,P)},ye.useTransition=function(){return ee.H.useTransition()},ye.version="19.2.7",ye}var zh;function ff(){return zh||(zh=1,Gu.exports=xg()),Gu.exports}var V=ff();const Xi=Ap(V);var Vu={exports:{}},Hi={},Yu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function Sg(){return Bh||(Bh=1,(function(o){function i(O,Y){var ie=O.length;O.push(Y);e:for(;0<ie;){var Ee=ie-1>>>1,de=O[Ee];if(0<c(de,Y))O[Ee]=Y,O[ie]=de,ie=Ee;else break e}}function u(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Y=O[0],ie=O.pop();if(ie!==Y){O[0]=ie;e:for(var Ee=0,de=O.length,w=de>>>1;Ee<w;){var L=2*(Ee+1)-1,P=O[L],D=L+1,I=O[D];if(0>c(P,ie))D<de&&0>c(I,P)?(O[Ee]=I,O[D]=ie,Ee=D):(O[Ee]=P,O[L]=ie,Ee=L);else if(D<de&&0>c(I,ie))O[Ee]=I,O[D]=ie,Ee=D;else break e}}return Y}function c(O,Y){var ie=O.sortIndex-Y.sortIndex;return ie!==0?ie:O.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var _=Date,b=_.now();o.unstable_now=function(){return _.now()-b}}var v=[],y=[],S=1,N=null,j=3,F=!1,Q=!1,le=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;function xe(O){for(var Y=u(y);Y!==null;){if(Y.callback===null)s(y);else if(Y.startTime<=O)s(y),Y.sortIndex=Y.expirationTime,i(v,Y);else break;Y=u(y)}}function fe(O){if(le=!1,xe(O),!Q)if(u(v)!==null)Q=!0,ke||(ke=!0,ae());else{var Y=u(y);Y!==null&&Fe(fe,Y.startTime-O)}}var ke=!1,ee=-1,W=5,be=-1;function ge(){return U?!0:!(o.unstable_now()-be<W)}function ve(){if(U=!1,ke){var O=o.unstable_now();be=O;var Y=!0;try{e:{Q=!1,le&&(le=!1,_e(ee),ee=-1),F=!0;var ie=j;try{n:{for(xe(O),N=u(v);N!==null&&!(N.expirationTime>O&&ge());){var Ee=N.callback;if(typeof Ee=="function"){N.callback=null,j=N.priorityLevel;var de=Ee(N.expirationTime<=O);if(O=o.unstable_now(),typeof de=="function"){N.callback=de,xe(O),Y=!0;break n}N===u(v)&&s(v),xe(O)}else s(v);N=u(v)}if(N!==null)Y=!0;else{var w=u(y);w!==null&&Fe(fe,w.startTime-O),Y=!1}}break e}finally{N=null,j=ie,F=!1}Y=void 0}}finally{Y?ae():ke=!1}}}var ae;if(typeof oe=="function")ae=function(){oe(ve)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Ae=Ve.port2;Ve.port1.onmessage=ve,ae=function(){Ae.postMessage(null)}}else ae=function(){H(ve,0)};function Fe(O,Y){ee=H(function(){O(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return j},o.unstable_next=function(O){switch(j){case 1:case 2:case 3:var Y=3;break;default:Y=j}var ie=j;j=Y;try{return O()}finally{j=ie}},o.unstable_requestPaint=function(){U=!0},o.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ie=j;j=O;try{return Y()}finally{j=ie}},o.unstable_scheduleCallback=function(O,Y,ie){var Ee=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Ee+ie:Ee):ie=Ee,O){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ie+de,O={id:S++,callback:Y,priorityLevel:O,startTime:ie,expirationTime:de,sortIndex:-1},ie>Ee?(O.sortIndex=ie,i(y,O),u(v)===null&&O===u(y)&&(le?(_e(ee),ee=-1):le=!0,Fe(fe,ie-Ee))):(O.sortIndex=de,i(v,O),Q||F||(Q=!0,ke||(ke=!0,ae()))),O},o.unstable_shouldYield=ge,o.unstable_wrapCallback=function(O){var Y=j;return function(){var ie=j;j=Y;try{return O.apply(this,arguments)}finally{j=ie}}}})(qu)),qu}var Lh;function Eg(){return Lh||(Lh=1,Yu.exports=Sg()),Yu.exports}var Xu={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function wg(){if(Uh)return An;Uh=1;var o=ff();function i(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)y+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(v,y,S){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:N==null?null:""+N,children:v,containerInfo:y,implementation:S}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(v,y){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return h(v,y,null,S)},An.flushSync=function(v){var y=_.T,S=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=y,s.p=S,s.d.f()}},An.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},An.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},An.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var S=y.as,N=b(S,y.crossOrigin),j=typeof y.integrity=="string"?y.integrity:void 0,F=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;S==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:N,integrity:j,fetchPriority:F}):S==="script"&&s.d.X(v,{crossOrigin:N,integrity:j,fetchPriority:F,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},An.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var S=b(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},An.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var S=y.as,N=b(S,y.crossOrigin);s.d.L(v,S,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},An.preloadModule=function(v,y){if(typeof v=="string")if(y){var S=b(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},An.requestFormReset=function(v){s.d.r(v)},An.unstable_batchedUpdates=function(v,y){return v(y)},An.useFormState=function(v,y,S){return _.H.useFormState(v,y,S)},An.useFormStatus=function(){return _.H.useHostTransitionStatus()},An.version="19.2.7",An}var Hh;function kg(){if(Hh)return Xu.exports;Hh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Xu.exports=wg(),Xu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function Ng(){if(Gh)return Hi;Gh=1;var o=Eg(),i=ff(),u=kg();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(s(188))}function y(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,l=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return v(r),e;if(a===l)return v(r),n;a=a.sibling}throw Error(s(188))}if(t.return!==l.return)t=r,l=a;else{for(var m=!1,p=r.child;p;){if(p===t){m=!0,t=r,l=a;break}if(p===l){m=!0,l=r,t=a;break}p=p.sibling}if(!m){for(p=a.child;p;){if(p===t){m=!0,t=a,l=r;break}if(p===l){m=!0,l=a,t=r;break}p=p.sibling}if(!m)throw Error(s(189))}}if(t.alternate!==l)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var N=Object.assign,j=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),_e=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case H:return"Profiler";case U:return"StrictMode";case fe:return"Suspense";case ke:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case oe:return e.displayName||"Context";case _e:return(e._context.displayName||"Context")+".Consumer";case xe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var Fe=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Ee=[],de=-1;function w(e){return{current:e}}function L(e){0>de||(e.current=Ee[de],Ee[de]=null,de--)}function P(e,n){de++,Ee[de]=e.current,e.current=n}var D=w(null),I=w(null),Z=w(null),K=w(null);function Ie(e,n){switch(P(Z,n),P(I,e),P(D,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nh(n),e=th(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(D),P(D,e)}function Oe(){L(D),L(I),L(Z)}function at(e){e.memoizedState!==null&&P(K,e);var n=D.current,t=th(n,e.type);n!==t&&(P(I,e),P(D,t))}function hl(e){I.current===e&&(L(D),L(I)),K.current===e&&(L(K),Ci._currentValue=ie)}var La,zr;function pl(e){if(La===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);La=n&&n[1]||"",zr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+La+e+zr}var Br=!1;function _l(e,n){if(!e||Br)return"";Br=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(B){var A=B}Reflect.construct(e,[],X)}else{try{X.call()}catch(B){A=B}e.call(X.prototype)}}else{try{throw Error()}catch(B){A=B}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(B){if(B&&A&&typeof B.stack=="string")return[B.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=l.DetermineComponentFrameRoot(),m=a[0],p=a[1];if(m&&p){var E=m.split(`
`),M=p.split(`
`);for(r=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;if(l===E.length||r===M.length)for(l=E.length-1,r=M.length-1;1<=l&&0<=r&&E[l]!==M[r];)r--;for(;1<=l&&0<=r;l--,r--)if(E[l]!==M[r]){if(l!==1||r!==1)do if(l--,r--,0>r||E[l]!==M[r]){var G=`
`+E[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=r);break}}}finally{Br=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?pl(t):""}function Ao(e,n){switch(e.tag){case 26:case 27:case 5:return pl(e.type);case 16:return pl("Lazy");case 13:return e.child!==n&&n!==null?pl("Suspense Fallback"):pl("Suspense");case 19:return pl("SuspenseList");case 0:case 15:return _l(e.type,!1);case 11:return _l(e.type.render,!1);case 1:return _l(e.type,!0);case 31:return pl("Activity");default:return""}}function Jl(e){try{var n="",t=null;do n+=Ao(e,t),t=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Lr=Object.prototype.hasOwnProperty,Ua=o.unstable_scheduleCallback,Vt=o.unstable_cancelCallback,Ha=o.unstable_shouldYield,Fi=o.unstable_requestPaint,Rn=o.unstable_now,Ur=o.unstable_getCurrentPriorityLevel,Hr=o.unstable_ImmediatePriority,Ga=o.unstable_UserBlockingPriority,er=o.unstable_NormalPriority,it=o.unstable_LowPriority,st=o.unstable_IdlePriority,gl=o.log,Gr=o.unstable_setDisableYieldValue,nr=null,pn=null;function Xn(e){if(typeof gl=="function"&&Gr(e),pn&&typeof pn.setStrictMode=="function")try{pn.setStrictMode(nr,e)}catch{}}var vn=Math.clz32?Math.clz32:vl,bl=Math.log,yl=Math.LN2;function vl(e){return e>>>=0,e===0?32:31-(bl(e)/yl|0)|0}var jt=256,Dn=262144,$e=4194304;function xn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cn(e,n,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,a=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~a,l!==0?r=xn(l):(m&=p,m!==0?r=xn(m):t||(t=p&~e,t!==0&&(r=xn(t))))):(p=l&~a,p!==0?r=xn(p):m!==0?r=xn(m):t||(t=l&~e,t!==0&&(r=xn(t)))),r===0?0:n!==0&&n!==r&&(n&a)===0&&(a=r&-r,t=n&-n,a>=t||a===32&&(t&4194048)!==0)?n:r}function jn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Do(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Va(){var e=$e;return $e<<=1,($e&62914560)===0&&($e=4194304),e}function Ot(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function tr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yt(e,n,t,l,r,a){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var p=e.entanglements,E=e.expirationTimes,M=e.hiddenUpdates;for(t=m&~t;0<t;){var G=31-vn(t),X=1<<G;p[G]=0,E[G]=-1;var A=M[G];if(A!==null)for(M[G]=null,G=0;G<A.length;G++){var B=A[G];B!==null&&(B.lane&=-536870913)}t&=~X}l!==0&&Qi(e,l,0),a!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=a&~(m&~n))}function Qi(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-vn(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Vr(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-vn(t),r=1<<l;r&n|e[l]&n&&(e[l]|=n),t&=~r}}function Zi(e,n){var t=n&-n;return t=(t&42)!==0?1:xl(t),(t&(e.suspendedLanes|n))!==0?0:t}function xl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function un(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:kh(e.type))}function Ya(e,n){var t=Y.p;try{return Y.p=e,n()}finally{Y.p=t}}var $n=Math.random().toString(36).slice(2),tn="__reactFiber$"+$n,ln="__reactProps$"+$n,ot="__reactContainer$"+$n,Ct="__reactEvents$"+$n,Yr="__reactListeners$"+$n,lr="__reactHandles$"+$n,qr="__reactResources$"+$n,Bn="__reactMarker$"+$n;function qt(e){delete e[tn],delete e[ln],delete e[Ct],delete e[Yr],delete e[lr]}function Ln(e){var n=e[tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ot]||t[tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ch(e);e!==null;){if(t=e[tn])return t;e=ch(e)}return n}e=t,t=e.parentNode}return null}function Kn(e){if(e=e[tn]||e[ot]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ct(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Xt(e){var n=e[qr];return n||(n=e[qr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[Bn]=!0}var $t=new Set,me={};function kt(e,n){Sl(e,n),Sl(e+"Capture",n)}function Sl(e,n){for(me[e]=n,e=0;e<n.length;e++)$t.add(n[e])}var jo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pi={},Wi={};function rr(e){return Lr.call(Wi,e)?!0:Lr.call(Pi,e)?!1:jo.test(e)?Wi[e]=!0:(Pi[e]=!0,!1)}function Nt(e,n,t){if(rr(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Tt(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function In(e,n,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+l)}}function Un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xa(e,n,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,a=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(m){t=""+m,a.call(this,m)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $(e){if(!e._valueTracker){var n=qa(e)?"checked":"value";e._valueTracker=Xa(e,n,""+e[n])}}function ar(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=qa(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ji=/[\n"\\]/g;function gn(e){return e.replace(Ji,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ir(e,n,t,l,r,a,m,p){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Un(n)):e.value!==""+Un(n)&&(e.value=""+Un(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,m,Un(n)):t!=null?Mn(e,m,Un(t)):l!=null&&e.removeAttribute("value"),r==null&&a!=null&&(e.defaultChecked=!!a),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Un(p):e.removeAttribute("name")}function es(e,n,t,l,r,a,m,p){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),n!=null||t!=null){if(!(a!=="submit"&&a!=="reset"||n!=null)){$(e);return}t=t!=null?""+Un(t):"",n=n!=null?""+Un(n):t,p||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),$(e)}function Mn(e,n,t){n==="number"&&Je(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Kt(e,n,t,l){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Un(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Xr(e,n,t){if(n!=null&&(n=""+Un(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Un(t):""}function Sn(e,n,t,l){if(n==null){if(l!=null){if(t!=null)throw Error(s(92));if(Fe(l)){if(1<l.length)throw Error(s(93));l=l[0]}t=l}t==null&&(t=""),n=t}t=Un(n),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),$(e)}function ut(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Oo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ns(e,n,t){var l=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,t):typeof t!="number"||t===0||Oo.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function El(e,n,t){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&t[r]!==l&&ns(e,r,l)}else for(var a in n)n.hasOwnProperty(a)&&ns(e,a,n[a])}function $a(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$r=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function It(e){return $r.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ft(){}var Ka=null;function Ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,On=null;function rn(e){var n=Kn(e);if(n&&(e=n.stateNode)){var t=e[ln]||null;e:switch(e=n.stateNode,n.type){case"input":if(ir(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var r=l[ln]||null;if(!r)throw Error(s(90));ir(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)l=t[n],l.form===e.form&&ar(l)}break e;case"textarea":Xr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Kt(e,!!t.multiple,n,!1)}}}var Kr=!1;function kl(e,n,t){if(Kr)return e(n,t);Kr=!0;try{var l=e(n);return l}finally{if(Kr=!1,(wl!==null||On!==null)&&(Is(),wl&&(n=wl,e=On,On=wl=null,rn(n),e)))for(n=0;n<e.length;n++)rn(e[n])}}function Nl(e,n){var t=e.stateNode;if(t===null)return null;var l=t[ln]||null;if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ir=!1;if(dt)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Ir=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Ir=!1}var zt=null,Fa=null,or=null;function Qa(){if(or)return or;var e,n=Fa,t=n.length,l,r="value"in zt?zt.value:zt.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var m=t-e;for(l=1;l<=m&&n[t-l]===r[a-l];l++);return or=r.slice(e,1<l?1-l:void 0)}function Tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function Za(){return!1}function En(e){function n(t,l,r,a,m){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=a,this.target=m,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fr:Za,this.isPropagationStopped=Za,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),n}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qr=En(Bt),cr=N({},Bt,{view:0,detail:0}),Co=En(cr),Pa,Wa,ur,Zr=N({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ei,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Pa=e.screenX-ur.screenX,Wa=e.screenY-ur.screenY):Wa=Pa=0,ur=e),Pa)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),ls=En(Zr),zo=N({},Zr,{dataTransfer:0}),Bo=En(zo),fr=N({},cr,{relatedTarget:0}),Ja=En(fr),Lo=N({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),rs=En(Lo),Uo=N({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),as=En(Uo),Ho=N({},Bt,{data:0}),is=En(Ho),ss={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Go={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vo[e])?!!n[e]:!1}function ei(){return Yo}var qo=N({},cr,{key:function(e){if(e.key){var n=ss[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Go[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ei,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xo=En(qo),os=N({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ft=En(os),cs=N({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ei}),$o=En(cs),Ko=N({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Io=En(Ko),dr=N({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pr=En(dr),us=N({},Bt,{newState:0,oldState:0}),ni=En(us),fs=[9,13,27,32],ti=dt&&"CompositionEvent"in window,mr=null;dt&&"documentMode"in document&&(mr=document.documentMode);var d=dt&&"TextEvent"in window&&!mr,g=dt&&(!ti||mr&&8<mr&&11>=mr),x=" ",C=!1;function z(e,n){switch(e){case"keyup":return fs.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pe=!1;function Le(e,n){switch(e){case"compositionend":return te(n);case"keypress":return n.which!==32?null:(C=!0,x);case"textInput":return e=n.data,e===x&&C?null:e;default:return null}}function an(e,n){if(pe)return e==="compositionend"||!ti&&z(e,n)?(e=Qa(),or=Fa=zt=null,pe=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return g&&n.locale!=="ko"?null:n.data;default:return null}}var mt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mt[e.type]:n==="textarea"}function Ue(e,n,t,l){wl?On?On.push(l):On=[l]:wl=l,n=eo(n,"onChange"),0<n.length&&(t=new Qr("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Fn=null,Zt=null;function hr(e){Qm(e,0)}function Rt(e){var n=ct(e);if(ar(n))return e}function Wr(e,n){if(e==="change")return n}var Jr=!1;if(dt){var pr;if(dt){var _r="oninput"in document;if(!_r){var Rl=document.createElement("div");Rl.setAttribute("oninput","return;"),_r=typeof Rl.oninput=="function"}pr=_r}else pr=!1;Jr=pr&&(!document.documentMode||9<document.documentMode)}function ds(){Fn&&(Fn.detachEvent("onpropertychange",li),Zt=Fn=null)}function li(e){if(e.propertyName==="value"&&Rt(Zt)){var n=[];Ue(n,Zt,e,Ia(e)),kl(hr,n)}}function $p(e,n,t){e==="focusin"?(ds(),Fn=n,Zt=t,Fn.attachEvent("onpropertychange",li)):e==="focusout"&&ds()}function Kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rt(Zt)}function Ip(e,n){if(e==="click")return Rt(n)}function Fp(e,n){if(e==="input"||e==="change")return Rt(n)}function Qp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Qp;function ri(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!Lr.call(n,r)||!Qn(e[r],n[r]))return!1}return!0}function yf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vf(e,n){var t=yf(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yf(t)}}function xf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Je(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Je(e.document)}return n}function Fo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zp=dt&&"documentMode"in document&&11>=document.documentMode,ea=null,Qo=null,ai=null,Zo=!1;function Ef(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zo||ea==null||ea!==Je(l)||(l=ea,"selectionStart"in l&&Fo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ai&&ri(ai,l)||(ai=l,l=eo(Qo,"onSelect"),0<l.length&&(n=new Qr("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=ea)))}function gr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var na={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Po={},wf={};dt&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function br(e){if(Po[e])return Po[e];if(!na[e])return e;var n=na[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in wf)return Po[e]=n[t];return e}var kf=br("animationend"),Nf=br("animationiteration"),Tf=br("animationstart"),Pp=br("transitionrun"),Wp=br("transitionstart"),Jp=br("transitioncancel"),Rf=br("transitionend"),Mf=new Map,Wo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wo.push("scrollEnd");function Mt(e,n){Mf.set(e,n),kt(n,[e])}var ms=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ht=[],ta=0,Jo=0;function hs(){for(var e=ta,n=Jo=ta=0;n<e;){var t=ht[n];ht[n++]=null;var l=ht[n];ht[n++]=null;var r=ht[n];ht[n++]=null;var a=ht[n];if(ht[n++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}a!==0&&Af(t,r,a)}}function ps(e,n,t,l){ht[ta++]=e,ht[ta++]=n,ht[ta++]=t,ht[ta++]=l,Jo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ec(e,n,t,l){return ps(e,n,t,l),_s(e)}function yr(e,n){return ps(e,null,null,n),_s(e)}function Af(e,n,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var r=!1,a=e.return;a!==null;)a.childLanes|=t,l=a.alternate,l!==null&&(l.childLanes|=t),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(r=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,r&&n!==null&&(r=31-vn(t),e=a.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=t|536870912),a):null}function _s(e){if(50<Ti)throw Ti=0,cu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var la={};function e_(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,t,l){return new e_(e,n,t,l)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,n){var t=e.alternate;return t===null?(t=Zn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Df(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gs(e,n,t,l,r,a){var m=0;if(l=e,typeof e=="function")nc(e)&&(m=1);else if(typeof e=="string")m=ag(e,t,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=Zn(31,t,n,r),e.elementType=be,e.lanes=a,e;case le:return vr(t.children,r,a,n);case U:m=8,r|=24;break;case H:return e=Zn(12,t,n,r|2),e.elementType=H,e.lanes=a,e;case fe:return e=Zn(13,t,n,r),e.elementType=fe,e.lanes=a,e;case ke:return e=Zn(19,t,n,r),e.elementType=ke,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:m=10;break e;case _e:m=9;break e;case xe:m=11;break e;case ee:m=14;break e;case W:m=16,l=null;break e}m=29,t=Error(s(130,e===null?"null":typeof e,"")),l=null}return n=Zn(m,t,n,r),n.elementType=e,n.type=l,n.lanes=a,n}function vr(e,n,t,l){return e=Zn(7,e,l,n),e.lanes=t,e}function tc(e,n,t){return e=Zn(6,e,null,n),e.lanes=t,e}function jf(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function lc(e,n,t){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Of=new WeakMap;function pt(e,n){if(typeof e=="object"&&e!==null){var t=Of.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Jl(n)},Of.set(e,n),n)}return{value:e,source:n,stack:Jl(n)}}var ra=[],aa=0,bs=null,ii=0,_t=[],gt=0,Ml=null,Lt=1,Ut="";function Wt(e,n){ra[aa++]=ii,ra[aa++]=bs,bs=e,ii=n}function Cf(e,n,t){_t[gt++]=Lt,_t[gt++]=Ut,_t[gt++]=Ml,Ml=e;var l=Lt;e=Ut;var r=32-vn(l)-1;l&=~(1<<r),t+=1;var a=32-vn(n)+r;if(30<a){var m=r-r%5;a=(l&(1<<m)-1).toString(32),l>>=m,r-=m,Lt=1<<32-vn(n)+r|t<<r|l,Ut=a+e}else Lt=1<<a|t<<r|l,Ut=e}function rc(e){e.return!==null&&(Wt(e,1),Cf(e,1,0))}function ac(e){for(;e===bs;)bs=ra[--aa],ra[aa]=null,ii=ra[--aa],ra[aa]=null;for(;e===Ml;)Ml=_t[--gt],_t[gt]=null,Ut=_t[--gt],_t[gt]=null,Lt=_t[--gt],_t[gt]=null}function zf(e,n){_t[gt++]=Lt,_t[gt++]=Ut,_t[gt++]=Ml,Lt=n.id,Ut=n.overflow,Ml=e}var wn=null,Qe=null,De=!1,Al=null,bt=!1,ic=Error(s(519));function Dl(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw si(pt(n,e)),ic}function Bf(e){var n=e.stateNode,t=e.type,l=e.memoizedProps;switch(n[tn]=e,n[ln]=l,t){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(t=0;t<Mi.length;t++)Te(Mi[t],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),es(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Sn(n,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||l.suppressHydrationWarning===!0||Jm(n.textContent,t)?(l.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),l.onScroll!=null&&Te("scroll",n),l.onScrollEnd!=null&&Te("scrollend",n),l.onClick!=null&&(n.onclick=ft),n=!0):n=!1,n||Dl(e,!0)}function Lf(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:wn=wn.return}}function ia(e){if(e!==wn)return!1;if(!De)return Lf(e),De=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||wu(e.type,e.memoizedProps)),t=!t),t&&Qe&&Dl(e),Lf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=oh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=oh(e)}else n===27?(n=Qe,$l(e.type)?(e=Mu,Mu=null,Qe=e):Qe=n):Qe=wn?vt(e.stateNode.nextSibling):null;return!0}function xr(){Qe=wn=null,De=!1}function sc(){var e=Al;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Al=null),e}function si(e){Al===null?Al=[e]:Al.push(e)}var oc=w(null),Sr=null,Jt=null;function jl(e,n,t){P(oc,n._currentValue),n._currentValue=t}function el(e){e._currentValue=oc.current,L(oc)}function cc(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function uc(e,n,t,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var a=r.dependencies;if(a!==null){var m=r.child;a=a.firstContext;e:for(;a!==null;){var p=a;a=r;for(var E=0;E<n.length;E++)if(p.context===n[E]){a.lanes|=t,p=a.alternate,p!==null&&(p.lanes|=t),cc(a.return,t,e),l||(m=null);break e}a=p.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=t,a=m.alternate,a!==null&&(a.lanes|=t),cc(m,t,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function sa(e,n,t,l){e=null;for(var r=n,a=!1;r!==null;){if(!a){if((r.flags&524288)!==0)a=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var p=r.type;Qn(r.pendingProps.value,m.value)||(e!==null?e.push(p):e=[p])}}else if(r===K.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ci):e=[Ci])}r=r.return}e!==null&&uc(n,e,t,l),n.flags|=262144}function ys(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Er(e){Sr=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function kn(e){return Uf(Sr,e)}function vs(e,n){return Sr===null&&Er(e),Uf(e,n)}function Uf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Jt===null){if(e===null)throw Error(s(308));Jt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Jt=Jt.next=n;return t}var n_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},t_=o.unstable_scheduleCallback,l_=o.unstable_NormalPriority,fn={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fc(){return{controller:new n_,data:new Map,refCount:0}}function oi(e){e.refCount--,e.refCount===0&&t_(l_,function(){e.controller.abort()})}var ci=null,dc=0,oa=0,ca=null;function r_(e,n){if(ci===null){var t=ci=[];dc=0,oa=pu(),ca={status:"pending",value:void 0,then:function(l){t.push(l)}}}return dc++,n.then(Hf,Hf),n}function Hf(){if(--dc===0&&ci!==null){ca!==null&&(ca.status="fulfilled");var e=ci;ci=null,oa=0,ca=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function a_(e,n){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var Gf=O.S;O.S=function(e,n){Em=Rn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&r_(e,n),Gf!==null&&Gf(e,n)};var wr=w(null);function mc(){var e=wr.current;return e!==null?e:Ke.pooledCache}function xs(e,n){n===null?P(wr,wr.current):P(wr,n.pool)}function Vf(){var e=mc();return e===null?null:{parent:fn._currentValue,pool:e}}var ua=Error(s(460)),hc=Error(s(474)),Ss=Error(s(542)),Es={then:function(){}};function Yf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(ft,ft),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$f(e),e;default:if(typeof n.status=="string")n.then(ft,ft);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$f(e),e}throw Nr=n,ua}}function kr(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Nr=t,ua):t}}var Nr=null;function Xf(){if(Nr===null)throw Error(s(459));var e=Nr;return Nr=null,e}function $f(e){if(e===ua||e===Ss)throw Error(s(483))}var fa=null,ui=0;function ws(e){var n=ui;return ui+=1,fa===null&&(fa=[]),qf(fa,e,n)}function fi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ks(e,n){throw n.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Kf(e){function n(T,k){if(e){var R=T.deletions;R===null?(T.deletions=[k],T.flags|=16):R.push(k)}}function t(T,k){if(!e)return null;for(;k!==null;)n(T,k),k=k.sibling;return null}function l(T){for(var k=new Map;T!==null;)T.key!==null?k.set(T.key,T):k.set(T.index,T),T=T.sibling;return k}function r(T,k){return T=Pt(T,k),T.index=0,T.sibling=null,T}function a(T,k,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<k?(T.flags|=67108866,k):R):(T.flags|=67108866,k)):(T.flags|=1048576,k)}function m(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function p(T,k,R,q){return k===null||k.tag!==6?(k=tc(R,T.mode,q),k.return=T,k):(k=r(k,R),k.return=T,k)}function E(T,k,R,q){var ce=R.type;return ce===le?G(T,k,R.props.children,q,R.key):k!==null&&(k.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===W&&kr(ce)===k.type)?(k=r(k,R.props),fi(k,R),k.return=T,k):(k=gs(R.type,R.key,R.props,null,T.mode,q),fi(k,R),k.return=T,k)}function M(T,k,R,q){return k===null||k.tag!==4||k.stateNode.containerInfo!==R.containerInfo||k.stateNode.implementation!==R.implementation?(k=lc(R,T.mode,q),k.return=T,k):(k=r(k,R.children||[]),k.return=T,k)}function G(T,k,R,q,ce){return k===null||k.tag!==7?(k=vr(R,T.mode,q,ce),k.return=T,k):(k=r(k,R),k.return=T,k)}function X(T,k,R){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=tc(""+k,T.mode,R),k.return=T,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case F:return R=gs(k.type,k.key,k.props,null,T.mode,R),fi(R,k),R.return=T,R;case Q:return k=lc(k,T.mode,R),k.return=T,k;case W:return k=kr(k),X(T,k,R)}if(Fe(k)||ae(k))return k=vr(k,T.mode,R,null),k.return=T,k;if(typeof k.then=="function")return X(T,ws(k),R);if(k.$$typeof===oe)return X(T,vs(T,k),R);ks(T,k)}return null}function A(T,k,R,q){var ce=k!==null?k.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ce!==null?null:p(T,k,""+R,q);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case F:return R.key===ce?E(T,k,R,q):null;case Q:return R.key===ce?M(T,k,R,q):null;case W:return R=kr(R),A(T,k,R,q)}if(Fe(R)||ae(R))return ce!==null?null:G(T,k,R,q,null);if(typeof R.then=="function")return A(T,k,ws(R),q);if(R.$$typeof===oe)return A(T,k,vs(T,R),q);ks(T,R)}return null}function B(T,k,R,q,ce){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return T=T.get(R)||null,p(k,T,""+q,ce);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case F:return T=T.get(q.key===null?R:q.key)||null,E(k,T,q,ce);case Q:return T=T.get(q.key===null?R:q.key)||null,M(k,T,q,ce);case W:return q=kr(q),B(T,k,R,q,ce)}if(Fe(q)||ae(q))return T=T.get(R)||null,G(k,T,q,ce,null);if(typeof q.then=="function")return B(T,k,R,ws(q),ce);if(q.$$typeof===oe)return B(T,k,R,vs(k,q),ce);ks(k,q)}return null}function re(T,k,R,q){for(var ce=null,Ce=null,se=k,we=k=0,Me=null;se!==null&&we<R.length;we++){se.index>we?(Me=se,se=null):Me=se.sibling;var ze=A(T,se,R[we],q);if(ze===null){se===null&&(se=Me);break}e&&se&&ze.alternate===null&&n(T,se),k=a(ze,k,we),Ce===null?ce=ze:Ce.sibling=ze,Ce=ze,se=Me}if(we===R.length)return t(T,se),De&&Wt(T,we),ce;if(se===null){for(;we<R.length;we++)se=X(T,R[we],q),se!==null&&(k=a(se,k,we),Ce===null?ce=se:Ce.sibling=se,Ce=se);return De&&Wt(T,we),ce}for(se=l(se);we<R.length;we++)Me=B(se,T,we,R[we],q),Me!==null&&(e&&Me.alternate!==null&&se.delete(Me.key===null?we:Me.key),k=a(Me,k,we),Ce===null?ce=Me:Ce.sibling=Me,Ce=Me);return e&&se.forEach(function(Zl){return n(T,Zl)}),De&&Wt(T,we),ce}function he(T,k,R,q){if(R==null)throw Error(s(151));for(var ce=null,Ce=null,se=k,we=k=0,Me=null,ze=R.next();se!==null&&!ze.done;we++,ze=R.next()){se.index>we?(Me=se,se=null):Me=se.sibling;var Zl=A(T,se,ze.value,q);if(Zl===null){se===null&&(se=Me);break}e&&se&&Zl.alternate===null&&n(T,se),k=a(Zl,k,we),Ce===null?ce=Zl:Ce.sibling=Zl,Ce=Zl,se=Me}if(ze.done)return t(T,se),De&&Wt(T,we),ce;if(se===null){for(;!ze.done;we++,ze=R.next())ze=X(T,ze.value,q),ze!==null&&(k=a(ze,k,we),Ce===null?ce=ze:Ce.sibling=ze,Ce=ze);return De&&Wt(T,we),ce}for(se=l(se);!ze.done;we++,ze=R.next())ze=B(se,T,we,ze.value,q),ze!==null&&(e&&ze.alternate!==null&&se.delete(ze.key===null?we:ze.key),k=a(ze,k,we),Ce===null?ce=ze:Ce.sibling=ze,Ce=ze);return e&&se.forEach(function(_g){return n(T,_g)}),De&&Wt(T,we),ce}function Xe(T,k,R,q){if(typeof R=="object"&&R!==null&&R.type===le&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case F:e:{for(var ce=R.key;k!==null;){if(k.key===ce){if(ce=R.type,ce===le){if(k.tag===7){t(T,k.sibling),q=r(k,R.props.children),q.return=T,T=q;break e}}else if(k.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===W&&kr(ce)===k.type){t(T,k.sibling),q=r(k,R.props),fi(q,R),q.return=T,T=q;break e}t(T,k);break}else n(T,k);k=k.sibling}R.type===le?(q=vr(R.props.children,T.mode,q,R.key),q.return=T,T=q):(q=gs(R.type,R.key,R.props,null,T.mode,q),fi(q,R),q.return=T,T=q)}return m(T);case Q:e:{for(ce=R.key;k!==null;){if(k.key===ce)if(k.tag===4&&k.stateNode.containerInfo===R.containerInfo&&k.stateNode.implementation===R.implementation){t(T,k.sibling),q=r(k,R.children||[]),q.return=T,T=q;break e}else{t(T,k);break}else n(T,k);k=k.sibling}q=lc(R,T.mode,q),q.return=T,T=q}return m(T);case W:return R=kr(R),Xe(T,k,R,q)}if(Fe(R))return re(T,k,R,q);if(ae(R)){if(ce=ae(R),typeof ce!="function")throw Error(s(150));return R=ce.call(R),he(T,k,R,q)}if(typeof R.then=="function")return Xe(T,k,ws(R),q);if(R.$$typeof===oe)return Xe(T,k,vs(T,R),q);ks(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,k!==null&&k.tag===6?(t(T,k.sibling),q=r(k,R),q.return=T,T=q):(t(T,k),q=tc(R,T.mode,q),q.return=T,T=q),m(T)):t(T,k)}return function(T,k,R,q){try{ui=0;var ce=Xe(T,k,R,q);return fa=null,ce}catch(se){if(se===ua||se===Ss)throw se;var Ce=Zn(29,se,null,T.mode);return Ce.lanes=q,Ce.return=T,Ce}finally{}}}var Tr=Kf(!0),If=Kf(!1),Ol=!1;function pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _c(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zl(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=_s(e),Af(e,null,t),n}return ps(e,l,n,t),_s(e)}function di(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Vr(e,t)}}function gc(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};a===null?r=a=m:a=a.next=m,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var bc=!1;function mi(){if(bc){var e=ca;if(e!==null)throw e}}function hi(e,n,t,l){bc=!1;var r=e.updateQueue;Ol=!1;var a=r.firstBaseUpdate,m=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var E=p,M=E.next;E.next=null,m===null?a=M:m.next=M,m=E;var G=e.alternate;G!==null&&(G=G.updateQueue,p=G.lastBaseUpdate,p!==m&&(p===null?G.firstBaseUpdate=M:p.next=M,G.lastBaseUpdate=E))}if(a!==null){var X=r.baseState;m=0,G=M=E=null,p=a;do{var A=p.lane&-536870913,B=A!==p.lane;if(B?(Re&A)===A:(l&A)===A){A!==0&&A===oa&&(bc=!0),G!==null&&(G=G.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var re=e,he=p;A=n;var Xe=t;switch(he.tag){case 1:if(re=he.payload,typeof re=="function"){X=re.call(Xe,X,A);break e}X=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=he.payload,A=typeof re=="function"?re.call(Xe,X,A):re,A==null)break e;X=N({},X,A);break e;case 2:Ol=!0}}A=p.callback,A!==null&&(e.flags|=64,B&&(e.flags|=8192),B=r.callbacks,B===null?r.callbacks=[A]:B.push(A))}else B={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},G===null?(M=G=B,E=X):G=G.next=B,m|=A;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;B=p,p=B.next,B.next=null,r.lastBaseUpdate=B,r.shared.pending=null}}while(!0);G===null&&(E=X),r.baseState=E,r.firstBaseUpdate=M,r.lastBaseUpdate=G,a===null&&(r.shared.lanes=0),Gl|=m,e.lanes=m,e.memoizedState=X}}function Ff(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Qf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Ff(t[e],n)}var da=w(null),Ns=w(0);function Zf(e,n){e=cl,P(Ns,e),P(da,n),cl=e|n.baseLanes}function yc(){P(Ns,cl),P(da,da.current)}function vc(){cl=Ns.current,L(da),L(Ns)}var Pn=w(null),yt=null;function Bl(e){var n=e.alternate;P(sn,sn.current&1),P(Pn,e),yt===null&&(n===null||da.current!==null||n.memoizedState!==null)&&(yt=e)}function xc(e){P(sn,sn.current),P(Pn,e),yt===null&&(yt=e)}function Pf(e){e.tag===22?(P(sn,sn.current),P(Pn,e),yt===null&&(yt=e)):Ll()}function Ll(){P(sn,sn.current),P(Pn,Pn.current)}function Wn(e){L(Pn),yt===e&&(yt=null),L(sn)}var sn=w(0);function Ts(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Tu(t)||Ru(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var nl=0,Se=null,Ye=null,dn=null,Rs=!1,ma=!1,Rr=!1,Ms=0,pi=0,ha=null,i_=0;function en(){throw Error(s(321))}function Sc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Qn(e[t],n[t]))return!1;return!0}function Ec(e,n,t,l,r,a){return nl=a,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Cd:Uc,Rr=!1,a=t(l,r),Rr=!1,ma&&(a=Jf(n,t,l,r)),Wf(e),a}function Wf(e){O.H=bi;var n=Ye!==null&&Ye.next!==null;if(nl=0,dn=Ye=Se=null,Rs=!1,pi=0,ha=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&ys(e)&&(mn=!0))}function Jf(e,n,t,l){Se=e;var r=0;do{if(ma&&(ha=null),pi=0,ma=!1,25<=r)throw Error(s(301));if(r+=1,dn=Ye=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}O.H=zd,a=n(t,l)}while(ma);return a}function s_(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?_i(n):n,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(Se.flags|=1024),n}function wc(){var e=Ms!==0;return Ms=0,e}function kc(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Nc(e){if(Rs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rs=!1}nl=0,dn=Ye=Se=null,ma=!1,pi=Ms=0,ha=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Se.memoizedState=dn=e:dn=dn.next=e,dn}function on(){if(Ye===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var n=dn===null?Se.memoizedState:dn.next;if(n!==null)dn=n,Ye=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},dn===null?Se.memoizedState=dn=e:dn=dn.next=e}return dn}function As(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _i(e){var n=pi;return pi+=1,ha===null&&(ha=[]),e=qf(ha,e,n),n=Se,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Cd:Uc),e}function Ds(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _i(e);if(e.$$typeof===oe)return kn(e)}throw Error(s(438,String(e)))}function Tc(e){var n=null,t=Se.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=As(),Se.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),l=0;l<e;l++)t[l]=ge;return n.index++,t}function tl(e,n){return typeof n=="function"?n(e):n}function js(e){var n=on();return Rc(n,Ye,e)}function Rc(e,n,t){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var r=e.baseQueue,a=l.pending;if(a!==null){if(r!==null){var m=r.next;r.next=a.next,a.next=m}n.baseQueue=r=a,l.pending=null}if(a=e.baseState,r===null)e.memoizedState=a;else{n=r.next;var p=m=null,E=null,M=n,G=!1;do{var X=M.lane&-536870913;if(X!==M.lane?(Re&X)===X:(nl&X)===X){var A=M.revertLane;if(A===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),X===oa&&(G=!0);else if((nl&A)===A){M=M.next,A===oa&&(G=!0);continue}else X={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},E===null?(p=E=X,m=a):E=E.next=X,Se.lanes|=A,Gl|=A;X=M.action,Rr&&t(a,X),a=M.hasEagerState?M.eagerState:t(a,X)}else A={lane:X,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},E===null?(p=E=A,m=a):E=E.next=A,Se.lanes|=X,Gl|=X;M=M.next}while(M!==null&&M!==n);if(E===null?m=a:E.next=p,!Qn(a,e.memoizedState)&&(mn=!0,G&&(t=ca,t!==null)))throw t;e.memoizedState=a,e.baseState=m,e.baseQueue=E,l.lastRenderedState=a}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mc(e){var n=on(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var l=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var m=r=r.next;do a=e(a,m.action),m=m.next;while(m!==r);Qn(a,n.memoizedState)||(mn=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,l]}function ed(e,n,t){var l=Se,r=on(),a=De;if(a){if(t===void 0)throw Error(s(407));t=t()}else t=n();var m=!Qn((Ye||r).memoizedState,t);if(m&&(r.memoizedState=t,mn=!0),r=r.queue,jc(ld.bind(null,l,r,e),[e]),r.getSnapshot!==n||m||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,pa(9,{destroy:void 0},td.bind(null,l,r,t,n),null),Ke===null)throw Error(s(349));a||(nl&127)!==0||nd(l,n,t)}return t}function nd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Se.updateQueue,n===null?(n=As(),Se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function td(e,n,t,l){n.value=t,n.getSnapshot=l,rd(n)&&ad(e)}function ld(e,n,t){return t(function(){rd(n)&&ad(e)})}function rd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Qn(e,t)}catch{return!0}}function ad(e){var n=yr(e,2);n!==null&&qn(n,e,2)}function Ac(e){var n=Cn();if(typeof e=="function"){var t=e;if(e=t(),Rr){Xn(!0);try{t()}finally{Xn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:e},n}function id(e,n,t,l){return e.baseState=t,Rc(e,Ye,typeof l=="function"?l:tl)}function o_(e,n,t,l,r){if(zs(e))throw Error(s(485));if(e=n.action,e!==null){var a={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){a.listeners.push(m)}};O.T!==null?t(!0):a.isTransition=!1,l(a),t=n.pending,t===null?(a.next=n.pending=a,sd(n,a)):(a.next=t.next,n.pending=t.next=a)}}function sd(e,n){var t=n.action,l=n.payload,r=e.state;if(n.isTransition){var a=O.T,m={};O.T=m;try{var p=t(r,l),E=O.S;E!==null&&E(m,p),od(e,n,p)}catch(M){Dc(e,n,M)}finally{a!==null&&m.types!==null&&(a.types=m.types),O.T=a}}else try{a=t(r,l),od(e,n,a)}catch(M){Dc(e,n,M)}}function od(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){cd(e,n,l)},function(l){return Dc(e,n,l)}):cd(e,n,t)}function cd(e,n,t){n.status="fulfilled",n.value=t,ud(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,sd(e,t)))}function Dc(e,n,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=t,ud(n),n=n.next;while(n!==l)}e.action=null}function ud(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fd(e,n){return n}function dd(e,n){if(De){var t=Ke.formState;if(t!==null){e:{var l=Se;if(De){if(Qe){n:{for(var r=Qe,a=bt;r.nodeType!==8;){if(!a){r=null;break n}if(r=vt(r.nextSibling),r===null){r=null;break n}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){Qe=vt(r.nextSibling),l=r.data==="F!";break e}}Dl(l)}l=!1}l&&(n=t[0])}}return t=Cn(),t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fd,lastRenderedState:n},t.queue=l,t=Dd.bind(null,Se,l),l.dispatch=t,l=Ac(!1),a=Lc.bind(null,Se,!1,l.queue),l=Cn(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,t=o_.bind(null,Se,r,a,t),r.dispatch=t,l.memoizedState=e,[n,t,!1]}function md(e){var n=on();return hd(n,Ye,e)}function hd(e,n,t){if(n=Rc(e,n,fd)[0],e=js(tl)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=_i(n)}catch(m){throw m===ua?Ss:m}else l=n;n=on();var r=n.queue,a=r.dispatch;return t!==n.memoizedState&&(Se.flags|=2048,pa(9,{destroy:void 0},c_.bind(null,r,t),null)),[l,a,e]}function c_(e,n){e.action=n}function pd(e){var n=on(),t=Ye;if(t!==null)return hd(n,t,e);on(),n=n.memoizedState,t=on();var l=t.queue.dispatch;return t.memoizedState=e,[n,l,!1]}function pa(e,n,t,l){return e={tag:e,create:t,deps:l,inst:n,next:null},n=Se.updateQueue,n===null&&(n=As(),Se.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e),e}function _d(){return on().memoizedState}function Os(e,n,t,l){var r=Cn();Se.flags|=e,r.memoizedState=pa(1|n,{destroy:void 0},t,l===void 0?null:l)}function Cs(e,n,t,l){var r=on();l=l===void 0?null:l;var a=r.memoizedState.inst;Ye!==null&&l!==null&&Sc(l,Ye.memoizedState.deps)?r.memoizedState=pa(n,a,t,l):(Se.flags|=e,r.memoizedState=pa(1|n,a,t,l))}function gd(e,n){Os(8390656,8,e,n)}function jc(e,n){Cs(2048,8,e,n)}function u_(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=As(),Se.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function bd(e){var n=on().memoizedState;return u_({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function yd(e,n){return Cs(4,2,e,n)}function vd(e,n){return Cs(4,4,e,n)}function xd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Sd(e,n,t){t=t!=null?t.concat([e]):null,Cs(4,4,xd.bind(null,n,e),t)}function Oc(){}function Ed(e,n){var t=on();n=n===void 0?null:n;var l=t.memoizedState;return n!==null&&Sc(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function wd(e,n){var t=on();n=n===void 0?null:n;var l=t.memoizedState;if(n!==null&&Sc(n,l[1]))return l[0];if(l=e(),Rr){Xn(!0);try{e()}finally{Xn(!1)}}return t.memoizedState=[l,n],l}function Cc(e,n,t){return t===void 0||(nl&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=km(),Se.lanes|=e,Gl|=e,t)}function kd(e,n,t,l){return Qn(t,n)?t:da.current!==null?(e=Cc(e,t,l),Qn(e,n)||(mn=!0),e):(nl&42)===0||(nl&1073741824)!==0&&(Re&261930)===0?(mn=!0,e.memoizedState=t):(e=km(),Se.lanes|=e,Gl|=e,n)}function Nd(e,n,t,l,r){var a=Y.p;Y.p=a!==0&&8>a?a:8;var m=O.T,p={};O.T=p,Lc(e,!1,n,t);try{var E=r(),M=O.S;if(M!==null&&M(p,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var G=a_(E,l);gi(e,n,G,nt(e))}else gi(e,n,l,nt(e))}catch(X){gi(e,n,{then:function(){},status:"rejected",reason:X},nt())}finally{Y.p=a,m!==null&&p.types!==null&&(m.types=p.types),O.T=m}}function f_(){}function zc(e,n,t,l){if(e.tag!==5)throw Error(s(476));var r=Td(e).queue;Nd(e,r,n,ie,t===null?f_:function(){return Rd(e),t(l)})}function Td(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:ie},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rd(e){var n=Td(e);n.next===null&&(n=e.alternate.memoizedState),gi(e,n.next.queue,{},nt())}function Bc(){return kn(Ci)}function Md(){return on().memoizedState}function Ad(){return on().memoizedState}function d_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=nt();e=Cl(t);var l=zl(n,e,t);l!==null&&(qn(l,n,t),di(l,n,t)),n={cache:fc()},e.payload=n;return}n=n.return}}function m_(e,n,t){var l=nt();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},zs(e)?jd(n,t):(t=ec(e,n,t,l),t!==null&&(qn(t,e,l),Od(t,n,l)))}function Dd(e,n,t){var l=nt();gi(e,n,t,l)}function gi(e,n,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(zs(e))jd(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var m=n.lastRenderedState,p=a(m,t);if(r.hasEagerState=!0,r.eagerState=p,Qn(p,m))return ps(e,n,r,0),Ke===null&&hs(),!1}catch{}finally{}if(t=ec(e,n,r,l),t!==null)return qn(t,e,l),Od(t,n,l),!0}return!1}function Lc(e,n,t,l){if(l={lane:2,revertLane:pu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(n)throw Error(s(479))}else n=ec(e,t,l,2),n!==null&&qn(n,e,2)}function zs(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function jd(e,n){ma=Rs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Od(e,n,t){if((t&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Vr(e,t)}}var bi={readContext:kn,use:Ds,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};bi.useEffectEvent=en;var Cd={readContext:kn,use:Ds,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:kn,useEffect:gd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Os(4194308,4,xd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Os(4194308,4,e,n)},useInsertionEffect:function(e,n){Os(4,2,e,n)},useMemo:function(e,n){var t=Cn();n=n===void 0?null:n;var l=e();if(Rr){Xn(!0);try{e()}finally{Xn(!1)}}return t.memoizedState=[l,n],l},useReducer:function(e,n,t){var l=Cn();if(t!==void 0){var r=t(n);if(Rr){Xn(!0);try{t(n)}finally{Xn(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=m_.bind(null,Se,e),[l.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ac(e);var n=e.queue,t=Dd.bind(null,Se,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Oc,useDeferredValue:function(e,n){var t=Cn();return Cc(t,e,n)},useTransition:function(){var e=Ac(!1);return e=Nd.bind(null,Se,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var l=Se,r=Cn();if(De){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ke===null)throw Error(s(349));(Re&127)!==0||nd(l,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,gd(ld.bind(null,l,a,e),[e]),l.flags|=2048,pa(9,{destroy:void 0},td.bind(null,l,a,t,n),null),t},useId:function(){var e=Cn(),n=Ke.identifierPrefix;if(De){var t=Ut,l=Lt;t=(l&~(1<<32-vn(l)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Ms++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=i_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Bc,useFormState:dd,useActionState:dd,useOptimistic:function(e){var n=Cn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Lc.bind(null,Se,!0,t),t.dispatch=n,[e,n]},useMemoCache:Tc,useCacheRefresh:function(){return Cn().memoizedState=d_.bind(null,Se)},useEffectEvent:function(e){var n=Cn(),t={impl:e};return n.memoizedState=t,function(){if((Be&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}},Uc={readContext:kn,use:Ds,useCallback:Ed,useContext:kn,useEffect:jc,useImperativeHandle:Sd,useInsertionEffect:yd,useLayoutEffect:vd,useMemo:wd,useReducer:js,useRef:_d,useState:function(){return js(tl)},useDebugValue:Oc,useDeferredValue:function(e,n){var t=on();return kd(t,Ye.memoizedState,e,n)},useTransition:function(){var e=js(tl)[0],n=on().memoizedState;return[typeof e=="boolean"?e:_i(e),n]},useSyncExternalStore:ed,useId:Md,useHostTransitionStatus:Bc,useFormState:md,useActionState:md,useOptimistic:function(e,n){var t=on();return id(t,Ye,e,n)},useMemoCache:Tc,useCacheRefresh:Ad};Uc.useEffectEvent=bd;var zd={readContext:kn,use:Ds,useCallback:Ed,useContext:kn,useEffect:jc,useImperativeHandle:Sd,useInsertionEffect:yd,useLayoutEffect:vd,useMemo:wd,useReducer:Mc,useRef:_d,useState:function(){return Mc(tl)},useDebugValue:Oc,useDeferredValue:function(e,n){var t=on();return Ye===null?Cc(t,e,n):kd(t,Ye.memoizedState,e,n)},useTransition:function(){var e=Mc(tl)[0],n=on().memoizedState;return[typeof e=="boolean"?e:_i(e),n]},useSyncExternalStore:ed,useId:Md,useHostTransitionStatus:Bc,useFormState:pd,useActionState:pd,useOptimistic:function(e,n){var t=on();return Ye!==null?id(t,Ye,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Tc,useCacheRefresh:Ad};zd.useEffectEvent=bd;function Hc(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:N({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Gc={enqueueSetState:function(e,n,t){e=e._reactInternals;var l=nt(),r=Cl(l);r.payload=n,t!=null&&(r.callback=t),n=zl(e,r,l),n!==null&&(qn(n,e,l),di(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=nt(),r=Cl(l);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=zl(e,r,l),n!==null&&(qn(n,e,l),di(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=nt(),l=Cl(t);l.tag=2,n!=null&&(l.callback=n),n=zl(e,l,t),n!==null&&(qn(n,e,t),di(n,e,t))}};function Bd(e,n,t,l,r,a,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,m):n.prototype&&n.prototype.isPureReactComponent?!ri(t,l)||!ri(r,a):!0}function Ld(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&Gc.enqueueReplaceState(n,n.state,null)}function Mr(e,n){var t=n;if("ref"in n){t={};for(var l in n)l!=="ref"&&(t[l]=n[l])}if(e=e.defaultProps){t===n&&(t=N({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function Ud(e){ms(e)}function Hd(e){console.error(e)}function Gd(e){ms(e)}function Bs(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Vd(e,n,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Vc(e,n,t){return t=Cl(t),t.tag=3,t.payload={element:null},t.callback=function(){Bs(e,n)},t}function Yd(e){return e=Cl(e),e.tag=3,e}function qd(e,n,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var a=l.value;e.payload=function(){return r(a)},e.callback=function(){Vd(n,t,l)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Vd(n,t,l),typeof r!="function"&&(Vl===null?Vl=new Set([this]):Vl.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function h_(e,n,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=t.alternate,n!==null&&sa(n,t,r,!0),t=Pn.current,t!==null){switch(t.tag){case 31:case 13:return yt===null?Fs():t.alternate===null&&nn===0&&(nn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===Es?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([l]):n.add(l),du(e,l,r)),!1;case 22:return t.flags|=65536,l===Es?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([l]):t.add(l)),du(e,l,r)),!1}throw Error(s(435,t.tag))}return du(e,l,r),Fs(),!1}if(De)return n=Pn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==ic&&(e=Error(s(422),{cause:l}),si(pt(e,t)))):(l!==ic&&(n=Error(s(423),{cause:l}),si(pt(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=pt(l,t),r=Vc(e.stateNode,l,r),gc(e,r),nn!==4&&(nn=2)),!1;var a=Error(s(520),{cause:l});if(a=pt(a,t),Ni===null?Ni=[a]:Ni.push(a),nn!==4&&(nn=2),n===null)return!0;l=pt(l,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=Vc(t.stateNode,l,e),gc(t,e),!1;case 1:if(n=t.type,a=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Vl===null||!Vl.has(a))))return t.flags|=65536,r&=-r,t.lanes|=r,r=Yd(r),qd(r,e,t,l),gc(t,r),!1}t=t.return}while(t!==null);return!1}var Yc=Error(s(461)),mn=!1;function Nn(e,n,t,l){n.child=e===null?If(n,null,t,l):Tr(n,e.child,t,l)}function Xd(e,n,t,l,r){t=t.render;var a=n.ref;if("ref"in l){var m={};for(var p in l)p!=="ref"&&(m[p]=l[p])}else m=l;return Er(n),l=Ec(e,n,t,m,a,r),p=wc(),e!==null&&!mn?(kc(e,n,r),ll(e,n,r)):(De&&p&&rc(n),n.flags|=1,Nn(e,n,l,r),n.child)}function $d(e,n,t,l,r){if(e===null){var a=t.type;return typeof a=="function"&&!nc(a)&&a.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=a,Kd(e,n,a,l,r)):(e=gs(t.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!Zc(e,r)){var m=a.memoizedProps;if(t=t.compare,t=t!==null?t:ri,t(m,l)&&e.ref===n.ref)return ll(e,n,r)}return n.flags|=1,e=Pt(a,l),e.ref=n.ref,e.return=n,n.child=e}function Kd(e,n,t,l,r){if(e!==null){var a=e.memoizedProps;if(ri(a,l)&&e.ref===n.ref)if(mn=!1,n.pendingProps=l=a,Zc(e,r))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ll(e,n,r)}return qc(e,n,t,l,r)}function Id(e,n,t,l){var r=l.children,a=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(a=a!==null?a.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~a}else l=0,n.child=null;return Fd(e,n,a,t,l)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xs(n,a!==null?a.cachePool:null),a!==null?Zf(n,a):yc(),Pf(n);else return l=n.lanes=536870912,Fd(e,n,a!==null?a.baseLanes|t:t,t,l)}else a!==null?(xs(n,a.cachePool),Zf(n,a),Ll(),n.memoizedState=null):(e!==null&&xs(n,null),yc(),Ll());return Nn(e,n,r,t),n.child}function yi(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fd(e,n,t,l,r){var a=mc();return a=a===null?null:{parent:fn._currentValue,pool:a},n.memoizedState={baseLanes:t,cachePool:a},e!==null&&xs(n,null),yc(),Pf(n),e!==null&&sa(e,n,l,!0),n.childLanes=r,null}function Ls(e,n){return n=Hs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Qd(e,n,t){return Tr(n,e.child,null,t),e=Ls(n,n.pendingProps),e.flags|=2,Wn(n),n.memoizedState=null,e}function p_(e,n,t){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(De){if(l.mode==="hidden")return e=Ls(n,l),n.lanes=536870912,yi(null,e);if(xc(n),(e=Qe)?(e=sh(e,bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ml!==null?{id:Lt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},t=jf(e),t.return=n,n.child=t,wn=n,Qe=null)):e=null,e===null)throw Dl(n);return n.lanes=536870912,null}return Ls(n,l)}var a=e.memoizedState;if(a!==null){var m=a.dehydrated;if(xc(n),r)if(n.flags&256)n.flags&=-257,n=Qd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||sa(e,n,t,!1),r=(t&e.childLanes)!==0,mn||r){if(l=Ke,l!==null&&(m=Zi(l,t),m!==0&&m!==a.retryLane))throw a.retryLane=m,yr(e,m),qn(l,e,m),Yc;Fs(),n=Qd(e,n,t)}else e=a.treeContext,Qe=vt(m.nextSibling),wn=n,De=!0,Al=null,bt=!1,e!==null&&zf(n,e),n=Ls(n,l),n.flags|=4096;return n}return e=Pt(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Us(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function qc(e,n,t,l,r){return Er(n),t=Ec(e,n,t,l,void 0,r),l=wc(),e!==null&&!mn?(kc(e,n,r),ll(e,n,r)):(De&&l&&rc(n),n.flags|=1,Nn(e,n,t,r),n.child)}function Zd(e,n,t,l,r,a){return Er(n),n.updateQueue=null,t=Jf(n,l,t,r),Wf(e),l=wc(),e!==null&&!mn?(kc(e,n,a),ll(e,n,a)):(De&&l&&rc(n),n.flags|=1,Nn(e,n,t,a),n.child)}function Pd(e,n,t,l,r){if(Er(n),n.stateNode===null){var a=la,m=t.contextType;typeof m=="object"&&m!==null&&(a=kn(m)),a=new t(l,a),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gc,n.stateNode=a,a._reactInternals=n,a=n.stateNode,a.props=l,a.state=n.memoizedState,a.refs={},pc(n),m=t.contextType,a.context=typeof m=="object"&&m!==null?kn(m):la,a.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(Hc(n,t,m,l),a.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(m=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),m!==a.state&&Gc.enqueueReplaceState(a,a.state,null),hi(n,l,a,r),mi(),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){a=n.stateNode;var p=n.memoizedProps,E=Mr(t,p);a.props=E;var M=a.context,G=t.contextType;m=la,typeof G=="object"&&G!==null&&(m=kn(G));var X=t.getDerivedStateFromProps;G=typeof X=="function"||typeof a.getSnapshotBeforeUpdate=="function",p=n.pendingProps!==p,G||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(p||M!==m)&&Ld(n,a,l,m),Ol=!1;var A=n.memoizedState;a.state=A,hi(n,l,a,r),mi(),M=n.memoizedState,p||A!==M||Ol?(typeof X=="function"&&(Hc(n,t,X,l),M=n.memoizedState),(E=Ol||Bd(n,t,E,l,A,M,m))?(G||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=M),a.props=l,a.state=M,a.context=m,l=E):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{a=n.stateNode,_c(e,n),m=n.memoizedProps,G=Mr(t,m),a.props=G,X=n.pendingProps,A=a.context,M=t.contextType,E=la,typeof M=="object"&&M!==null&&(E=kn(M)),p=t.getDerivedStateFromProps,(M=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(m!==X||A!==E)&&Ld(n,a,l,E),Ol=!1,A=n.memoizedState,a.state=A,hi(n,l,a,r),mi();var B=n.memoizedState;m!==X||A!==B||Ol||e!==null&&e.dependencies!==null&&ys(e.dependencies)?(typeof p=="function"&&(Hc(n,t,p,l),B=n.memoizedState),(G=Ol||Bd(n,t,G,l,A,B,E)||e!==null&&e.dependencies!==null&&ys(e.dependencies))?(M||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,B,E),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,B,E)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=B),a.props=l,a.state=B,a.context=E,l=G):(typeof a.componentDidUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),l=!1)}return a=l,Us(e,n),l=(n.flags&128)!==0,a||l?(a=n.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:a.render(),n.flags|=1,e!==null&&l?(n.child=Tr(n,e.child,null,r),n.child=Tr(n,null,t,r)):Nn(e,n,t,r),n.memoizedState=a.state,e=n.child):e=ll(e,n,r),e}function Wd(e,n,t,l){return xr(),n.flags|=256,Nn(e,n,t,l),n.child}var Xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:Vf()}}function Kc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=et),e}function Jd(e,n,t){var l=n.pendingProps,r=!1,a=(n.flags&128)!==0,m;if((m=a)||(m=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),m&&(r=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(r?Bl(n):Ll(),(e=Qe)?(e=sh(e,bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ml!==null?{id:Lt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},t=jf(e),t.return=n,n.child=t,wn=n,Qe=null)):e=null,e===null)throw Dl(n);return Ru(e)?n.lanes=32:n.lanes=536870912,null}var p=l.children;return l=l.fallback,r?(Ll(),r=n.mode,p=Hs({mode:"hidden",children:p},r),l=vr(l,r,t,null),p.return=n,l.return=n,p.sibling=l,n.child=p,l=n.child,l.memoizedState=$c(t),l.childLanes=Kc(e,m,t),n.memoizedState=Xc,yi(null,l)):(Bl(n),Ic(n,p))}var E=e.memoizedState;if(E!==null&&(p=E.dehydrated,p!==null)){if(a)n.flags&256?(Bl(n),n.flags&=-257,n=Fc(e,n,t)):n.memoizedState!==null?(Ll(),n.child=e.child,n.flags|=128,n=null):(Ll(),p=l.fallback,r=n.mode,l=Hs({mode:"visible",children:l.children},r),p=vr(p,r,t,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,Tr(n,e.child,null,t),l=n.child,l.memoizedState=$c(t),l.childLanes=Kc(e,m,t),n.memoizedState=Xc,n=yi(null,l));else if(Bl(n),Ru(p)){if(m=p.nextSibling&&p.nextSibling.dataset,m)var M=m.dgst;m=M,l=Error(s(419)),l.stack="",l.digest=m,si({value:l,source:null,stack:null}),n=Fc(e,n,t)}else if(mn||sa(e,n,t,!1),m=(t&e.childLanes)!==0,mn||m){if(m=Ke,m!==null&&(l=Zi(m,t),l!==0&&l!==E.retryLane))throw E.retryLane=l,yr(e,l),qn(m,e,l),Yc;Tu(p)||Fs(),n=Fc(e,n,t)}else Tu(p)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,Qe=vt(p.nextSibling),wn=n,De=!0,Al=null,bt=!1,e!==null&&zf(n,e),n=Ic(n,l.children),n.flags|=4096);return n}return r?(Ll(),p=l.fallback,r=n.mode,E=e.child,M=E.sibling,l=Pt(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,M!==null?p=Pt(M,p):(p=vr(p,r,t,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,yi(null,l),l=n.child,p=e.child.memoizedState,p===null?p=$c(t):(r=p.cachePool,r!==null?(E=fn._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=Vf(),p={baseLanes:p.baseLanes|t,cachePool:r}),l.memoizedState=p,l.childLanes=Kc(e,m,t),n.memoizedState=Xc,yi(e.child,l)):(Bl(n),t=e.child,e=t.sibling,t=Pt(t,{mode:"visible",children:l.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function Ic(e,n){return n=Hs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hs(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function Fc(e,n,t){return Tr(n,e.child,null,t),e=Ic(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function em(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),cc(e.return,n,t)}function Qc(e,n,t,l,r,a){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:a}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=t,m.tailMode=r,m.treeForkCount=a)}function nm(e,n,t){var l=n.pendingProps,r=l.revealOrder,a=l.tail;l=l.children;var m=sn.current,p=(m&2)!==0;if(p?(m=m&1|2,n.flags|=128):m&=1,P(sn,m),Nn(e,n,l,t),l=De?ii:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,t,n);else if(e.tag===19)em(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Ts(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Qc(n,!1,r,t,a,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ts(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Qc(n,!0,t,null,a,l);break;case"together":Qc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function ll(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(sa(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=Pt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Pt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Zc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ys(e)))}function __(e,n,t){switch(n.tag){case 3:Ie(n,n.stateNode.containerInfo),jl(n,fn,e.memoizedState.cache),xr();break;case 27:case 5:at(n);break;case 4:Ie(n,n.stateNode.containerInfo);break;case 10:jl(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,xc(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Bl(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Jd(e,n,t):(Bl(n),e=ll(e,n,t),e!==null?e.sibling:null);Bl(n);break;case 19:var r=(e.flags&128)!==0;if(l=(t&n.childLanes)!==0,l||(sa(e,n,t,!1),l=(t&n.childLanes)!==0),r){if(l)return nm(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),P(sn,sn.current),l)break;return null;case 22:return n.lanes=0,Id(e,n,t,n.pendingProps);case 24:jl(n,fn,e.memoizedState.cache)}return ll(e,n,t)}function tm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Zc(e,t)&&(n.flags&128)===0)return mn=!1,__(e,n,t);mn=(e.flags&131072)!==0}else mn=!1,De&&(n.flags&1048576)!==0&&Cf(n,ii,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=kr(n.elementType),n.type=e,typeof e=="function")nc(e)?(l=Mr(e,l),n.tag=1,n=Pd(null,n,e,l,t)):(n.tag=0,n=qc(null,n,e,l,t));else{if(e!=null){var r=e.$$typeof;if(r===xe){n.tag=11,n=Xd(null,n,e,l,t);break e}else if(r===ee){n.tag=14,n=$d(null,n,e,l,t);break e}}throw n=Ae(e)||e,Error(s(306,n,""))}}return n;case 0:return qc(e,n,n.type,n.pendingProps,t);case 1:return l=n.type,r=Mr(l,n.pendingProps),Pd(e,n,l,r,t);case 3:e:{if(Ie(n,n.stateNode.containerInfo),e===null)throw Error(s(387));l=n.pendingProps;var a=n.memoizedState;r=a.element,_c(e,n),hi(n,l,null,t);var m=n.memoizedState;if(l=m.cache,jl(n,fn,l),l!==a.cache&&uc(n,[fn],t,!0),mi(),l=m.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){n=Wd(e,n,l,t);break e}else if(l!==r){r=pt(Error(s(424)),n),si(r),n=Wd(e,n,l,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=vt(e.firstChild),wn=n,De=!0,Al=null,bt=!0,t=If(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(xr(),l===r){n=ll(e,n,t);break e}Nn(e,n,l,t)}n=n.child}return n;case 26:return Us(e,n),e===null?(t=mh(n.type,null,n.pendingProps,null))?n.memoizedState=t:De||(t=n.type,e=n.pendingProps,l=no(Z.current).createElement(t),l[tn]=n,l[ln]=e,Tn(l,t,e),Pe(l),n.stateNode=l):n.memoizedState=mh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return at(n),e===null&&De&&(l=n.stateNode=uh(n.type,n.pendingProps,Z.current),wn=n,bt=!0,r=Qe,$l(n.type)?(Mu=r,Qe=vt(l.firstChild)):Qe=r),Nn(e,n,n.pendingProps.children,t),Us(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((r=l=Qe)&&(l=K_(l,n.type,n.pendingProps,bt),l!==null?(n.stateNode=l,wn=n,Qe=vt(l.firstChild),bt=!1,r=!0):r=!1),r||Dl(n)),at(n),r=n.type,a=n.pendingProps,m=e!==null?e.memoizedProps:null,l=a.children,wu(r,a)?l=null:m!==null&&wu(r,m)&&(n.flags|=32),n.memoizedState!==null&&(r=Ec(e,n,s_,null,null,t),Ci._currentValue=r),Us(e,n),Nn(e,n,l,t),n.child;case 6:return e===null&&De&&((e=t=Qe)&&(t=I_(t,n.pendingProps,bt),t!==null?(n.stateNode=t,wn=n,Qe=null,e=!0):e=!1),e||Dl(n)),null;case 13:return Jd(e,n,t);case 4:return Ie(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Tr(n,null,l,t):Nn(e,n,l,t),n.child;case 11:return Xd(e,n,n.type,n.pendingProps,t);case 7:return Nn(e,n,n.pendingProps,t),n.child;case 8:return Nn(e,n,n.pendingProps.children,t),n.child;case 12:return Nn(e,n,n.pendingProps.children,t),n.child;case 10:return l=n.pendingProps,jl(n,n.type,l.value),Nn(e,n,l.children,t),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Er(n),r=kn(r),l=l(r),n.flags|=1,Nn(e,n,l,t),n.child;case 14:return $d(e,n,n.type,n.pendingProps,t);case 15:return Kd(e,n,n.type,n.pendingProps,t);case 19:return nm(e,n,t);case 31:return p_(e,n,t);case 22:return Id(e,n,t,n.pendingProps);case 24:return Er(n),l=kn(fn),e===null?(r=mc(),r===null&&(r=Ke,a=fc(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=t),r=a),n.memoizedState={parent:l,cache:r},pc(n),jl(n,fn,r)):((e.lanes&t)!==0&&(_c(e,n),hi(n,null,null,t),mi()),r=e.memoizedState,a=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),jl(n,fn,l)):(l=a.cache,jl(n,fn,l),l!==r.cache&&uc(n,[fn],t,!0))),Nn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function rl(e){e.flags|=4}function Pc(e,n,t,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Mm())e.flags|=8192;else throw Nr=Es,hc}else e.flags&=-16777217}function lm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bh(n))if(Mm())e.flags|=8192;else throw Nr=Es,hc}function Gs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Va():536870912,e.lanes|=n,ya|=n)}function vi(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function g_(e,n,t){var l=n.pendingProps;switch(ac(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return t=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),el(fn),Oe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ia(n)?rl(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sc())),Ze(n),null;case 26:var r=n.type,a=n.memoizedState;return e===null?(rl(n),a!==null?(Ze(n),lm(n,a)):(Ze(n),Pc(n,r,null,l,t))):a?a!==e.memoizedState?(rl(n),Ze(n),lm(n,a)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&rl(n),Ze(n),Pc(n,r,e,l,t)),null;case 27:if(hl(n),t=Z.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&rl(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=D.current,ia(n)?Bf(n):(e=uh(r,l,t),n.stateNode=e,rl(n))}return Ze(n),null;case 5:if(hl(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&rl(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(a=D.current,ia(n))Bf(n);else{var m=no(Z.current);switch(a){case 1:a=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:a=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":a=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":a=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":a=m.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is=="string"?m.createElement(r,{is:l.is}):m.createElement(r)}}a[tn]=n,a[ln]=l;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)a.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=a;e:switch(Tn(a,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&rl(n)}}return Ze(n),Pc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&rl(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,ia(n)){if(e=n.stateNode,t=n.memoizedProps,l=null,r=wn,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[tn]=n,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Jm(e.nodeValue,t)),e||Dl(n,!0)}else e=no(e).createTextNode(l),e[tn]=n,n.stateNode=e}return Ze(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(l=ia(n),t!==null){if(e===null){if(!l)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else t=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ia(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[tn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),r=!1}else r=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==r&&(l.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Gs(n,n.updateQueue),Ze(n),null);case 4:return Oe(),e===null&&yu(n.stateNode.containerInfo),Ze(n),null;case 10:return el(n.type),Ze(n),null;case 19:if(L(sn),l=n.memoizedState,l===null)return Ze(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)vi(l,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=Ts(e),a!==null){for(n.flags|=128,vi(l,!1),e=a.updateQueue,n.updateQueue=e,Gs(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Df(t,e),t=t.sibling;return P(sn,sn.current&1|2),De&&Wt(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&Rn()>$s&&(n.flags|=128,r=!0,vi(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ts(a),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Gs(n,e),vi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!De)return Ze(n),null}else 2*Rn()-l.renderingStartTime>$s&&t!==536870912&&(n.flags|=128,r=!0,vi(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(e=l.last,e!==null?e.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Rn(),e.sibling=null,t=sn.current,P(sn,r?t&1|2:t&1),De&&Wt(n,l.treeForkCount),e):(Ze(n),null);case 22:case 23:return Wn(n),vc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(t&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),t=n.updateQueue,t!==null&&Gs(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==t&&(n.flags|=2048),e!==null&&L(wr),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),el(fn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function b_(e,n){switch(ac(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return el(fn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return hl(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(s(340));xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(sn),null;case 4:return Oe(),null;case 10:return el(n.type),null;case 22:case 23:return Wn(n),vc(),e!==null&&L(wr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return el(fn),null;case 25:return null;default:return null}}function rm(e,n){switch(ac(n),n.tag){case 3:el(fn),Oe();break;case 26:case 27:case 5:hl(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:L(sn);break;case 10:el(n.type);break;case 22:case 23:Wn(n),vc(),e!==null&&L(wr);break;case 24:el(fn)}}function xi(e,n){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&e)===e){l=void 0;var a=t.create,m=t.inst;l=a(),m.destroy=l}t=t.next}while(t!==r)}}catch(p){Ge(n,n.return,p)}}function Ul(e,n,t){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var a=r.next;l=a;do{if((l.tag&e)===e){var m=l.inst,p=m.destroy;if(p!==void 0){m.destroy=void 0,r=n;var E=t,M=p;try{M()}catch(G){Ge(r,E,G)}}}l=l.next}while(l!==a)}}catch(G){Ge(n,n.return,G)}}function am(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Qf(n,t)}catch(l){Ge(e,e.return,l)}}}function im(e,n,t){t.props=Mr(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){Ge(e,n,l)}}function Si(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){Ge(e,n,r)}}function Ht(e,n){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){Ge(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){Ge(e,n,r)}else t.current=null}function sm(e){var n=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){Ge(e,e.return,r)}}function Wc(e,n,t){try{var l=e.stateNode;G_(l,e.type,t,n),l[ln]=n}catch(r){Ge(e,e.return,r)}}function om(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$l(e.type)||e.tag===4}function Jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$l(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ft));else if(l!==4&&(l===27&&$l(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(eu(e,n,t),e=e.sibling;e!==null;)eu(e,n,t),e=e.sibling}function Vs(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(l===27&&$l(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Vs(e,n,t),e=e.sibling;e!==null;)Vs(e,n,t),e=e.sibling}function cm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Tn(n,l,t),n[tn]=e,n[ln]=t}catch(a){Ge(e,e.return,a)}}var al=!1,hn=!1,nu=!1,um=typeof WeakSet=="function"?WeakSet:Set,bn=null;function y_(e,n){if(e=e.containerInfo,Su=oo,e=Sf(e),Fo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var r=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var m=0,p=-1,E=-1,M=0,G=0,X=e,A=null;n:for(;;){for(var B;X!==t||r!==0&&X.nodeType!==3||(p=m+r),X!==a||l!==0&&X.nodeType!==3||(E=m+l),X.nodeType===3&&(m+=X.nodeValue.length),(B=X.firstChild)!==null;)A=X,X=B;for(;;){if(X===e)break n;if(A===t&&++M===r&&(p=m),A===a&&++G===l&&(E=m),(B=X.nextSibling)!==null)break;X=A,A=X.parentNode}X=B}t=p===-1||E===-1?null:{start:p,end:E}}else t=null}t=t||{start:0,end:0}}else t=null;for(Eu={focusedElem:e,selectionRange:t},oo=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,a=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,t=n,r=a.memoizedProps,a=a.memoizedState,l=t.stateNode;try{var re=Mr(t.type,r);e=l.getSnapshotBeforeUpdate(re,a),l.__reactInternalSnapshotBeforeUpdate=e}catch(he){Ge(t,t.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Nu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function fm(e,n,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:sl(e,t),l&4&&xi(5,t);break;case 1:if(sl(e,t),l&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){Ge(t,t.return,m)}else{var r=Mr(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ge(t,t.return,m)}}l&64&&am(t),l&512&&Si(t,t.return);break;case 3:if(sl(e,t),l&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Qf(e,n)}catch(m){Ge(t,t.return,m)}}break;case 27:n===null&&l&4&&cm(t);case 26:case 5:sl(e,t),n===null&&l&4&&sm(t),l&512&&Si(t,t.return);break;case 12:sl(e,t);break;case 31:sl(e,t),l&4&&hm(e,t);break;case 13:sl(e,t),l&4&&pm(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=R_.bind(null,t),F_(e,t))));break;case 22:if(l=t.memoizedState!==null||al,!l){n=n!==null&&n.memoizedState!==null||hn,r=al;var a=hn;al=l,(hn=n)&&!a?ol(e,t,(t.subtreeFlags&8772)!==0):sl(e,t),al=r,hn=a}break;case 30:break;default:sl(e,t)}}function dm(e){var n=e.alternate;n!==null&&(e.alternate=null,dm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Hn=!1;function il(e,n,t){for(t=t.child;t!==null;)mm(e,n,t),t=t.sibling}function mm(e,n,t){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(nr,t)}catch{}switch(t.tag){case 26:hn||Ht(t,n),il(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:hn||Ht(t,n);var l=We,r=Hn;$l(t.type)&&(We=t.stateNode,Hn=!1),il(e,n,t),Di(t.stateNode),We=l,Hn=r;break;case 5:hn||Ht(t,n);case 6:if(l=We,r=Hn,We=null,il(e,n,t),We=l,Hn=r,We!==null)if(Hn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(t.stateNode)}catch(a){Ge(t,n,a)}else try{We.removeChild(t.stateNode)}catch(a){Ge(t,n,a)}break;case 18:We!==null&&(Hn?(e=We,ah(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ta(e)):ah(We,t.stateNode));break;case 4:l=We,r=Hn,We=t.stateNode.containerInfo,Hn=!0,il(e,n,t),We=l,Hn=r;break;case 0:case 11:case 14:case 15:Ul(2,t,n),hn||Ul(4,t,n),il(e,n,t);break;case 1:hn||(Ht(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"&&im(t,n,l)),il(e,n,t);break;case 21:il(e,n,t);break;case 22:hn=(l=hn)||t.memoizedState!==null,il(e,n,t),hn=l;break;default:il(e,n,t)}}function hm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ta(e)}catch(t){Ge(n,n.return,t)}}}function pm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ta(e)}catch(t){Ge(n,n.return,t)}}function v_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new um),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new um),n;default:throw Error(s(435,e.tag))}}function Ys(e,n){var t=v_(e);n.forEach(function(l){if(!t.has(l)){t.add(l);var r=M_.bind(null,e,l);l.then(r,r)}})}function Gn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l],a=e,m=n,p=m;e:for(;p!==null;){switch(p.tag){case 27:if($l(p.type)){We=p.stateNode,Hn=!1;break e}break;case 5:We=p.stateNode,Hn=!1;break e;case 3:case 4:We=p.stateNode.containerInfo,Hn=!0;break e}p=p.return}if(We===null)throw Error(s(160));mm(a,m,r),We=null,Hn=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_m(n,e),n=n.sibling}var At=null;function _m(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),l&4&&(Ul(3,e,e.return),xi(3,e),Ul(5,e,e.return));break;case 1:Gn(n,e),Vn(e),l&512&&(hn||t===null||Ht(t,t.return)),l&64&&al&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var r=At;if(Gn(n,e),Vn(e),l&512&&(hn||t===null||Ht(t,t.return)),l&4){var a=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,r=r.ownerDocument||r;n:switch(l){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Bn]||a[tn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(l),r.head.insertBefore(a,r.querySelector("head > title"))),Tn(a,l,t),a[tn]=e,Pe(a),l=a;break e;case"link":var m=_h("link","href",r).get(l+(t.href||""));if(m){for(var p=0;p<m.length;p++)if(a=m[p],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(p,1);break n}}a=r.createElement(l),Tn(a,l,t),r.head.appendChild(a);break;case"meta":if(m=_h("meta","content",r).get(l+(t.content||""))){for(p=0;p<m.length;p++)if(a=m[p],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(p,1);break n}}a=r.createElement(l),Tn(a,l,t),r.head.appendChild(a);break;default:throw Error(s(468,l))}a[tn]=e,Pe(a),l=a}e.stateNode=l}else gh(r,e.type,e.stateNode);else e.stateNode=ph(r,l,e.memoizedProps);else a!==l?(a===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):a.count--,l===null?gh(r,e.type,e.stateNode):ph(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,t.memoizedProps)}break;case 27:Gn(n,e),Vn(e),l&512&&(hn||t===null||Ht(t,t.return)),t!==null&&l&4&&Wc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),l&512&&(hn||t===null||Ht(t,t.return)),e.flags&32){r=e.stateNode;try{ut(r,"")}catch(re){Ge(e,e.return,re)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Wc(e,r,t!==null?t.memoizedProps:r)),l&1024&&(nu=!0);break;case 6:if(Gn(n,e),Vn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(re){Ge(e,e.return,re)}}break;case 3:if(ro=null,r=At,At=to(n.containerInfo),Gn(n,e),At=r,Vn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ta(n.containerInfo)}catch(re){Ge(e,e.return,re)}nu&&(nu=!1,gm(e));break;case 4:l=At,At=to(e.stateNode.containerInfo),Gn(n,e),Vn(e),At=l;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ys(e,l)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Xs=Rn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ys(e,l)));break;case 22:r=e.memoizedState!==null;var E=t!==null&&t.memoizedState!==null,M=al,G=hn;if(al=M||r,hn=G||E,Gn(n,e),hn=G,al=M,Vn(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(t===null||E||al||hn||Ar(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){E=t=n;try{if(a=E.stateNode,r)m=a.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{p=E.stateNode;var X=E.memoizedProps.style,A=X!=null&&X.hasOwnProperty("display")?X.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(re){Ge(E,E.return,re)}}}else if(n.tag===6){if(t===null){E=n;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(re){Ge(E,E.return,re)}}}else if(n.tag===18){if(t===null){E=n;try{var B=E.stateNode;r?ih(B,!0):ih(E.stateNode,!1)}catch(re){Ge(E,E.return,re)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Ys(e,t))));break;case 19:Gn(n,e),Vn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ys(e,l)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var t,l=e.return;l!==null;){if(om(l)){t=l;break}l=l.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var r=t.stateNode,a=Jc(e);Vs(e,a,r);break;case 5:var m=t.stateNode;t.flags&32&&(ut(m,""),t.flags&=-33);var p=Jc(e);Vs(e,p,m);break;case 3:case 4:var E=t.stateNode.containerInfo,M=Jc(e);eu(e,M,E);break;default:throw Error(s(161))}}catch(G){Ge(e,e.return,G)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sl(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fm(e,n.alternate,n),n=n.sibling}function Ar(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ul(4,n,n.return),Ar(n);break;case 1:Ht(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&im(n,n.return,t),Ar(n);break;case 27:Di(n.stateNode);case 26:case 5:Ht(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}e=e.sibling}}function ol(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,a=n,m=a.flags;switch(a.tag){case 0:case 11:case 15:ol(r,a,t),xi(4,a);break;case 1:if(ol(r,a,t),l=a,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(M){Ge(l,l.return,M)}if(l=a,r=l.updateQueue,r!==null){var p=l.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)Ff(E[r],p)}catch(M){Ge(l,l.return,M)}}t&&m&64&&am(a),Si(a,a.return);break;case 27:cm(a);case 26:case 5:ol(r,a,t),t&&l===null&&m&4&&sm(a),Si(a,a.return);break;case 12:ol(r,a,t);break;case 31:ol(r,a,t),t&&m&4&&hm(r,a);break;case 13:ol(r,a,t),t&&m&4&&pm(r,a);break;case 22:a.memoizedState===null&&ol(r,a,t),Si(a,a.return);break;case 30:break;default:ol(r,a,t)}n=n.sibling}}function tu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&oi(t))}function lu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oi(e))}function Dt(e,n,t,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bm(e,n,t,l),n=n.sibling}function bm(e,n,t,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Dt(e,n,t,l),r&2048&&xi(9,n);break;case 1:Dt(e,n,t,l);break;case 3:Dt(e,n,t,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oi(e)));break;case 12:if(r&2048){Dt(e,n,t,l),e=n.stateNode;try{var a=n.memoizedProps,m=a.id,p=a.onPostCommit;typeof p=="function"&&p(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ge(n,n.return,E)}}else Dt(e,n,t,l);break;case 31:Dt(e,n,t,l);break;case 13:Dt(e,n,t,l);break;case 23:break;case 22:a=n.stateNode,m=n.alternate,n.memoizedState!==null?a._visibility&2?Dt(e,n,t,l):Ei(e,n):a._visibility&2?Dt(e,n,t,l):(a._visibility|=2,_a(e,n,t,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&tu(m,n);break;case 24:Dt(e,n,t,l),r&2048&&lu(n.alternate,n);break;default:Dt(e,n,t,l)}}function _a(e,n,t,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var a=e,m=n,p=t,E=l,M=m.flags;switch(m.tag){case 0:case 11:case 15:_a(a,m,p,E,r),xi(8,m);break;case 23:break;case 22:var G=m.stateNode;m.memoizedState!==null?G._visibility&2?_a(a,m,p,E,r):Ei(a,m):(G._visibility|=2,_a(a,m,p,E,r)),r&&M&2048&&tu(m.alternate,m);break;case 24:_a(a,m,p,E,r),r&&M&2048&&lu(m.alternate,m);break;default:_a(a,m,p,E,r)}n=n.sibling}}function Ei(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,l=n,r=l.flags;switch(l.tag){case 22:Ei(t,l),r&2048&&tu(l.alternate,l);break;case 24:Ei(t,l),r&2048&&lu(l.alternate,l);break;default:Ei(t,l)}n=n.sibling}}var wi=8192;function ga(e,n,t){if(e.subtreeFlags&wi)for(e=e.child;e!==null;)ym(e,n,t),e=e.sibling}function ym(e,n,t){switch(e.tag){case 26:ga(e,n,t),e.flags&wi&&e.memoizedState!==null&&ig(t,At,e.memoizedState,e.memoizedProps);break;case 5:ga(e,n,t);break;case 3:case 4:var l=At;At=to(e.stateNode.containerInfo),ga(e,n,t),At=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=wi,wi=16777216,ga(e,n,t),wi=l):ga(e,n,t));break;default:ga(e,n,t)}}function vm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ki(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];bn=l,Sm(l,e)}vm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xm(e),e=e.sibling}function xm(e){switch(e.tag){case 0:case 11:case 15:ki(e),e.flags&2048&&Ul(9,e,e.return);break;case 3:ki(e);break;case 12:ki(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,qs(e)):ki(e);break;default:ki(e)}}function qs(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];bn=l,Sm(l,e)}vm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ul(8,n,n.return),qs(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,qs(n));break;default:qs(n)}e=e.sibling}}function Sm(e,n){for(;bn!==null;){var t=bn;switch(t.tag){case 0:case 11:case 15:Ul(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:oi(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,bn=l;else e:for(t=e;bn!==null;){l=bn;var r=l.sibling,a=l.return;if(dm(l),l===t){bn=null;break e}if(r!==null){r.return=a,bn=r;break e}bn=a}}}var x_={getCacheForType:function(e){var n=kn(fn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return kn(fn).controller.signal}},S_=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ke=null,Ne=null,Re=0,He=0,Jn=null,Hl=!1,ba=!1,ru=!1,cl=0,nn=0,Gl=0,Dr=0,au=0,et=0,ya=0,Ni=null,Yn=null,iu=!1,Xs=0,Em=0,$s=1/0,Ks=null,Vl=null,_n=0,Yl=null,va=null,ul=0,su=0,ou=null,wm=null,Ti=0,cu=null;function nt(){return(Be&2)!==0&&Re!==0?Re&-Re:O.T!==null?pu():un()}function km(){if(et===0)if((Re&536870912)===0||De){var e=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),et=e}else et=536870912;return e=Pn.current,e!==null&&(e.flags|=32),et}function qn(e,n,t){(e===Ke&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(xa(e,0),ql(e,Re,et,!1)),tr(e,t),((Be&2)===0||e!==Ke)&&(e===Ke&&((Be&2)===0&&(Dr|=t),nn===4&&ql(e,Re,et,!1)),Gt(e))}function Nm(e,n,t){if((Be&6)!==0)throw Error(s(327));var l=!t&&(n&127)===0&&(n&e.expiredLanes)===0||jn(e,n),r=l?k_(e,n):fu(e,n,!0),a=l;do{if(r===0){ba&&!l&&ql(e,n,0,!1);break}else{if(t=e.current.alternate,a&&!E_(t)){r=fu(e,n,!1),a=!1;continue}if(r===2){if(a=n,e.errorRecoveryDisabledLanes&a)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var p=e;r=Ni;var E=p.current.memoizedState.isDehydrated;if(E&&(xa(p,m).flags|=256),m=fu(p,m,!1),m!==2){if(ru&&!E){p.errorRecoveryDisabledLanes|=a,Dr|=a,r=4;break e}a=Yn,Yn=r,a!==null&&(Yn===null?Yn=a:Yn.push.apply(Yn,a))}r=m}if(a=!1,r!==2)continue}}if(r===1){xa(e,0),ql(e,n,0,!0);break}e:{switch(l=e,a=r,a){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ql(l,n,et,!Hl);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(r=Xs+300-Rn(),10<r)){if(ql(l,n,et,!Hl),cn(l,0,!0)!==0)break e;ul=n,l.timeoutHandle=lh(Tm.bind(null,l,t,Yn,Ks,iu,n,et,Dr,ya,Hl,a,"Throttled",-0,0),r);break e}Tm(l,t,Yn,Ks,iu,n,et,Dr,ya,Hl,a,null,-0,0)}}break}while(!0);Gt(e)}function Tm(e,n,t,l,r,a,m,p,E,M,G,X,A,B){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ft},ym(n,a,X);var re=(a&62914560)===a?Xs-Rn():(a&4194048)===a?Em-Rn():0;if(re=sg(X,re),re!==null){ul=a,e.cancelPendingCommit=re(zm.bind(null,e,n,a,t,l,r,m,p,E,G,X,null,A,B)),ql(e,a,m,!M);return}}zm(e,n,a,t,l,r,m,p,E)}function E_(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],a=r.getSnapshot;r=r.value;try{if(!Qn(a(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ql(e,n,t,l){n&=~au,n&=~Dr,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var a=31-vn(r),m=1<<a;l[a]=-1,r&=~m}t!==0&&Qi(e,t,n)}function Is(){return(Be&6)===0?(Ri(0),!1):!0}function uu(){if(Ne!==null){if(He===0)var e=Ne.return;else e=Ne,Jt=Sr=null,Nc(e),fa=null,ui=0,e=Ne;for(;e!==null;)rm(e.alternate,e),e=e.return;Ne=null}}function xa(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,q_(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ul=0,uu(),Ke=e,Ne=t=Pt(e.current,null),Re=n,He=0,Jn=null,Hl=!1,ba=jn(e,n),ru=!1,ya=et=au=Dr=Gl=nn=0,Yn=Ni=null,iu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-vn(l),a=1<<r;n|=e[r],l&=~a}return cl=n,hs(),t}function Rm(e,n){Se=null,O.H=bi,n===ua||n===Ss?(n=Xf(),He=3):n===hc?(n=Xf(),He=4):He=n===Yc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,Ne===null&&(nn=1,Bs(e,pt(n,e.current)))}function Mm(){var e=Pn.current;return e===null?!0:(Re&4194048)===Re?yt===null:(Re&62914560)===Re||(Re&536870912)!==0?e===yt:!1}function Am(){var e=O.H;return O.H=bi,e===null?bi:e}function Dm(){var e=O.A;return O.A=x_,e}function Fs(){nn=4,Hl||(Re&4194048)!==Re&&Pn.current!==null||(ba=!0),(Gl&134217727)===0&&(Dr&134217727)===0||Ke===null||ql(Ke,Re,et,!1)}function fu(e,n,t){var l=Be;Be|=2;var r=Am(),a=Dm();(Ke!==e||Re!==n)&&(Ks=null,xa(e,n)),n=!1;var m=nn;e:do try{if(He!==0&&Ne!==null){var p=Ne,E=Jn;switch(He){case 8:uu(),m=6;break e;case 3:case 2:case 9:case 6:Pn.current===null&&(n=!0);var M=He;if(He=0,Jn=null,Sa(e,p,E,M),t&&ba){m=0;break e}break;default:M=He,He=0,Jn=null,Sa(e,p,E,M)}}w_(),m=nn;break}catch(G){Rm(e,G)}while(!0);return n&&e.shellSuspendCounter++,Jt=Sr=null,Be=l,O.H=r,O.A=a,Ne===null&&(Ke=null,Re=0,hs()),m}function w_(){for(;Ne!==null;)jm(Ne)}function k_(e,n){var t=Be;Be|=2;var l=Am(),r=Dm();Ke!==e||Re!==n?(Ks=null,$s=Rn()+500,xa(e,n)):ba=jn(e,n);e:do try{if(He!==0&&Ne!==null){n=Ne;var a=Jn;n:switch(He){case 1:He=0,Jn=null,Sa(e,n,a,1);break;case 2:case 9:if(Yf(a)){He=0,Jn=null,Om(n);break}n=function(){He!==2&&He!==9||Ke!==e||(He=7),Gt(e)},a.then(n,n);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:Yf(a)?(He=0,Jn=null,Om(n)):(He=0,Jn=null,Sa(e,n,a,7));break;case 5:var m=null;switch(Ne.tag){case 26:m=Ne.memoizedState;case 5:case 27:var p=Ne;if(m?bh(m):p.stateNode.complete){He=0,Jn=null;var E=p.sibling;if(E!==null)Ne=E;else{var M=p.return;M!==null?(Ne=M,Qs(M)):Ne=null}break n}}He=0,Jn=null,Sa(e,n,a,5);break;case 6:He=0,Jn=null,Sa(e,n,a,6);break;case 8:uu(),nn=6;break e;default:throw Error(s(462))}}N_();break}catch(G){Rm(e,G)}while(!0);return Jt=Sr=null,O.H=l,O.A=r,Be=t,Ne!==null?0:(Ke=null,Re=0,hs(),nn)}function N_(){for(;Ne!==null&&!Ha();)jm(Ne)}function jm(e){var n=tm(e.alternate,e,cl);e.memoizedProps=e.pendingProps,n===null?Qs(e):Ne=n}function Om(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Zd(t,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Zd(t,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Nc(n);default:rm(t,n),n=Ne=Df(n,cl),n=tm(t,n,cl)}e.memoizedProps=e.pendingProps,n===null?Qs(e):Ne=n}function Sa(e,n,t,l){Jt=Sr=null,Nc(n),fa=null,ui=0;var r=n.return;try{if(h_(e,r,n,t,Re)){nn=1,Bs(e,pt(t,e.current)),Ne=null;return}}catch(a){if(r!==null)throw Ne=r,a;nn=1,Bs(e,pt(t,e.current)),Ne=null;return}n.flags&32768?(De||l===1?e=!0:ba||(Re&536870912)!==0?e=!1:(Hl=e=!0,(l===2||l===9||l===3||l===6)&&(l=Pn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cm(n,e)):Qs(n)}function Qs(e){var n=e;do{if((n.flags&32768)!==0){Cm(n,Hl);return}e=n.return;var t=g_(n.alternate,n,cl);if(t!==null){Ne=t;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);nn===0&&(nn=5)}function Cm(e,n){do{var t=b_(e.alternate,e);if(t!==null){t.flags&=32767,Ne=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=t}while(e!==null);nn=6,Ne=null}function zm(e,n,t,l,r,a,m,p,E){e.cancelPendingCommit=null;do Zs();while(_n!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(a=n.lanes|n.childLanes,a|=Jo,Yt(e,t,a,m,p,E),e===Ke&&(Ne=Ke=null,Re=0),va=n,Yl=e,ul=t,su=a,ou=r,wm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,A_(er,function(){return Gm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,r=Y.p,Y.p=2,m=Be,Be|=4;try{y_(e,n,t)}finally{Be=m,Y.p=r,O.T=l}}_n=1,Bm(),Lm(),Um()}}function Bm(){if(_n===1){_n=0;var e=Yl,n=va,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=O.T,O.T=null;var l=Y.p;Y.p=2;var r=Be;Be|=4;try{_m(n,e);var a=Eu,m=Sf(e.containerInfo),p=a.focusedElem,E=a.selectionRange;if(m!==p&&p&&p.ownerDocument&&xf(p.ownerDocument.documentElement,p)){if(E!==null&&Fo(p)){var M=E.start,G=E.end;if(G===void 0&&(G=M),"selectionStart"in p)p.selectionStart=M,p.selectionEnd=Math.min(G,p.value.length);else{var X=p.ownerDocument||document,A=X&&X.defaultView||window;if(A.getSelection){var B=A.getSelection(),re=p.textContent.length,he=Math.min(E.start,re),Xe=E.end===void 0?he:Math.min(E.end,re);!B.extend&&he>Xe&&(m=Xe,Xe=he,he=m);var T=vf(p,he),k=vf(p,Xe);if(T&&k&&(B.rangeCount!==1||B.anchorNode!==T.node||B.anchorOffset!==T.offset||B.focusNode!==k.node||B.focusOffset!==k.offset)){var R=X.createRange();R.setStart(T.node,T.offset),B.removeAllRanges(),he>Xe?(B.addRange(R),B.extend(k.node,k.offset)):(R.setEnd(k.node,k.offset),B.addRange(R))}}}}for(X=[],B=p;B=B.parentNode;)B.nodeType===1&&X.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<X.length;p++){var q=X[p];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}oo=!!Su,Eu=Su=null}finally{Be=r,Y.p=l,O.T=t}}e.current=n,_n=2}}function Lm(){if(_n===2){_n=0;var e=Yl,n=va,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=O.T,O.T=null;var l=Y.p;Y.p=2;var r=Be;Be|=4;try{fm(e,n.alternate,n)}finally{Be=r,Y.p=l,O.T=t}}_n=3}}function Um(){if(_n===4||_n===3){_n=0,Fi();var e=Yl,n=va,t=ul,l=wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,va=Yl=null,Hm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Vl=null),wt(t),n=n.stateNode,pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(nr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,r=Y.p,Y.p=2,O.T=null;try{for(var a=e.onRecoverableError,m=0;m<l.length;m++){var p=l[m];a(p.value,{componentStack:p.stack})}}finally{O.T=n,Y.p=r}}(ul&3)!==0&&Zs(),Gt(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===cu?Ti++:(Ti=0,cu=e):Ti=0,Ri(0)}}function Hm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oi(n)))}function Zs(){return Bm(),Lm(),Um(),Gm()}function Gm(){if(_n!==5)return!1;var e=Yl,n=su;su=0;var t=wt(ul),l=O.T,r=Y.p;try{Y.p=32>t?32:t,O.T=null,t=ou,ou=null;var a=Yl,m=ul;if(_n=0,va=Yl=null,ul=0,(Be&6)!==0)throw Error(s(331));var p=Be;if(Be|=4,xm(a.current),bm(a,a.current,m,t),Be=p,Ri(0,!1),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(nr,a)}catch{}return!0}finally{Y.p=r,O.T=l,Hm(e,n)}}function Vm(e,n,t){n=pt(t,n),n=Vc(e.stateNode,n,2),e=zl(e,n,2),e!==null&&(tr(e,2),Gt(e))}function Ge(e,n,t){if(e.tag===3)Vm(e,e,t);else for(;n!==null;){if(n.tag===3){Vm(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vl===null||!Vl.has(l))){e=pt(t,e),t=Yd(2),l=zl(n,t,2),l!==null&&(qd(t,l,n,e),tr(l,2),Gt(l));break}}n=n.return}}function du(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new S_;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(t)||(ru=!0,r.add(t),e=T_.bind(null,e,n,t),n.then(e,e))}function T_(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ke===e&&(Re&t)===t&&(nn===4||nn===3&&(Re&62914560)===Re&&300>Rn()-Xs?(Be&2)===0&&xa(e,0):au|=t,ya===Re&&(ya=0)),Gt(e)}function Ym(e,n){n===0&&(n=Va()),e=yr(e,n),e!==null&&(tr(e,n),Gt(e))}function R_(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ym(e,t)}function M_(e,n){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),Ym(e,t)}function A_(e,n){return Ua(e,n)}var Ps=null,Ea=null,mu=!1,Ws=!1,hu=!1,Xl=0;function Gt(e){e!==Ea&&e.next===null&&(Ea===null?Ps=Ea=e:Ea=Ea.next=e),Ws=!0,mu||(mu=!0,j_())}function Ri(e,n){if(!hu&&Ws){hu=!0;do for(var t=!1,l=Ps;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var a=0;else{var m=l.suspendedLanes,p=l.pingedLanes;a=(1<<31-vn(42|e)+1)-1,a&=r&~(m&~p),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(t=!0,Km(l,a))}else a=Re,a=cn(l,l===Ke?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(a&3)===0||jn(l,a)||(t=!0,Km(l,a));l=l.next}while(t);hu=!1}}function D_(){qm()}function qm(){Ws=mu=!1;var e=0;Xl!==0&&Y_()&&(e=Xl);for(var n=Rn(),t=null,l=Ps;l!==null;){var r=l.next,a=Xm(l,n);a===0?(l.next=null,t===null?Ps=r:t.next=r,r===null&&(Ea=t)):(t=l,(e!==0||(a&3)!==0)&&(Ws=!0)),l=r}_n!==0&&_n!==5||Ri(e),Xl!==0&&(Xl=0)}function Xm(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var m=31-vn(a),p=1<<m,E=r[m];E===-1?((p&t)===0||(p&l)!==0)&&(r[m]=Do(p,n)):E<=n&&(e.expiredLanes|=p),a&=~p}if(n=Ke,t=Re,t=cn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Vt(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||jn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(l!==null&&Vt(l),wt(t)){case 2:case 8:t=Ga;break;case 32:t=er;break;case 268435456:t=st;break;default:t=er}return l=$m.bind(null,e),t=Ua(t,l),e.callbackPriority=n,e.callbackNode=t,n}return l!==null&&l!==null&&Vt(l),e.callbackPriority=2,e.callbackNode=null,2}function $m(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Zs()&&e.callbackNode!==t)return null;var l=Re;return l=cn(e,e===Ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Nm(e,l,n),Xm(e,Rn()),e.callbackNode!=null&&e.callbackNode===t?$m.bind(null,e):null)}function Km(e,n){if(Zs())return null;Nm(e,n,!0)}function j_(){X_(function(){(Be&6)!==0?Ua(Hr,D_):qm()})}function pu(){if(Xl===0){var e=oa;e===0&&(e=jt,jt<<=1,(jt&261888)===0&&(jt=256)),Xl=e}return Xl}function Im(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:It(""+e)}function Fm(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function O_(e,n,t,l,r){if(n==="submit"&&t&&t.stateNode===r){var a=Im((r[ln]||null).action),m=l.submitter;m&&(n=(n=m[ln]||null)?Im(n.formAction):m.getAttribute("formAction"),n!==null&&(a=n,m=null));var p=new Qr("action","action",null,l,r);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xl!==0){var E=m?Fm(r,m):new FormData(r);zc(t,{pending:!0,data:E,method:r.method,action:a},null,E)}}else typeof a=="function"&&(p.preventDefault(),E=m?Fm(r,m):new FormData(r),zc(t,{pending:!0,data:E,method:r.method,action:a},a,E))},currentTarget:r}]})}}for(var _u=0;_u<Wo.length;_u++){var gu=Wo[_u],C_=gu.toLowerCase(),z_=gu[0].toUpperCase()+gu.slice(1);Mt(C_,"on"+z_)}Mt(kf,"onAnimationEnd"),Mt(Nf,"onAnimationIteration"),Mt(Tf,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Pp,"onTransitionRun"),Mt(Wp,"onTransitionStart"),Mt(Jp,"onTransitionCancel"),Mt(Rf,"onTransitionEnd"),Sl("onMouseEnter",["mouseout","mouseover"]),Sl("onMouseLeave",["mouseout","mouseover"]),Sl("onPointerEnter",["pointerout","pointerover"]),Sl("onPointerLeave",["pointerout","pointerover"]),kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mi));function Qm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],r=l.event;l=l.listeners;e:{var a=void 0;if(n)for(var m=l.length-1;0<=m;m--){var p=l[m],E=p.instance,M=p.currentTarget;if(p=p.listener,E!==a&&r.isPropagationStopped())break e;a=p,r.currentTarget=M;try{a(r)}catch(G){ms(G)}r.currentTarget=null,a=E}else for(m=0;m<l.length;m++){if(p=l[m],E=p.instance,M=p.currentTarget,p=p.listener,E!==a&&r.isPropagationStopped())break e;a=p,r.currentTarget=M;try{a(r)}catch(G){ms(G)}r.currentTarget=null,a=E}}}}function Te(e,n){var t=n[Ct];t===void 0&&(t=n[Ct]=new Set);var l=e+"__bubble";t.has(l)||(Zm(n,e,2,!1),t.add(l))}function bu(e,n,t){var l=0;n&&(l|=4),Zm(t,e,l,n)}var Js="_reactListening"+Math.random().toString(36).slice(2);function yu(e){if(!e[Js]){e[Js]=!0,$t.forEach(function(t){t!=="selectionchange"&&(B_.has(t)||bu(t,!1,e),bu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Js]||(n[Js]=!0,bu("selectionchange",!1,n))}}function Zm(e,n,t,l){switch(kh(n)){case 2:var r=ug;break;case 8:r=fg;break;default:r=Cu}t=r.bind(null,n,t,e),r=void 0,!Ir||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function vu(e,n,t,l,r){var a=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var p=l.stateNode.containerInfo;if(p===r)break;if(m===4)for(m=l.return;m!==null;){var E=m.tag;if((E===3||E===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;p!==null;){if(m=Ln(p),m===null)return;if(E=m.tag,E===5||E===6||E===26||E===27){l=a=m;continue e}p=p.parentNode}}l=l.return}kl(function(){var M=a,G=Ia(t),X=[];e:{var A=Mf.get(e);if(A!==void 0){var B=Qr,re=e;switch(e){case"keypress":if(Tl(t)===0)break e;case"keydown":case"keyup":B=Xo;break;case"focusin":re="focus",B=Ja;break;case"focusout":re="blur",B=Ja;break;case"beforeblur":case"afterblur":B=Ja;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Bo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=$o;break;case kf:case Nf:case Tf:B=rs;break;case Rf:B=Io;break;case"scroll":case"scrollend":B=Co;break;case"wheel":B=Pr;break;case"copy":case"cut":case"paste":B=as;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Ft;break;case"toggle":case"beforetoggle":B=ni}var he=(n&4)!==0,Xe=!he&&(e==="scroll"||e==="scrollend"),T=he?A!==null?A+"Capture":null:A;he=[];for(var k=M,R;k!==null;){var q=k;if(R=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||R===null||T===null||(q=Nl(k,T),q!=null&&he.push(Ai(k,q,R))),Xe)break;k=k.return}0<he.length&&(A=new B(A,re,null,t,G),X.push({event:A,listeners:he}))}}if((n&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",A&&t!==Ka&&(re=t.relatedTarget||t.fromElement)&&(Ln(re)||re[ot]))break e;if((B||A)&&(A=G.window===G?G:(A=G.ownerDocument)?A.defaultView||A.parentWindow:window,B?(re=t.relatedTarget||t.toElement,B=M,re=re?Ln(re):null,re!==null&&(Xe=h(re),he=re.tag,re!==Xe||he!==5&&he!==27&&he!==6)&&(re=null)):(B=null,re=M),B!==re)){if(he=ls,q="onMouseLeave",T="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(he=Ft,q="onPointerLeave",T="onPointerEnter",k="pointer"),Xe=B==null?A:ct(B),R=re==null?A:ct(re),A=new he(q,k+"leave",B,t,G),A.target=Xe,A.relatedTarget=R,q=null,Ln(G)===M&&(he=new he(T,k+"enter",re,t,G),he.target=R,he.relatedTarget=Xe,q=he),Xe=q,B&&re)n:{for(he=L_,T=B,k=re,R=0,q=T;q;q=he(q))R++;q=0;for(var ce=k;ce;ce=he(ce))q++;for(;0<R-q;)T=he(T),R--;for(;0<q-R;)k=he(k),q--;for(;R--;){if(T===k||k!==null&&T===k.alternate){he=T;break n}T=he(T),k=he(k)}he=null}else he=null;B!==null&&Pm(X,A,B,he,!1),re!==null&&Xe!==null&&Pm(X,Xe,re,he,!0)}}e:{if(A=M?ct(M):window,B=A.nodeName&&A.nodeName.toLowerCase(),B==="select"||B==="input"&&A.type==="file")var Ce=Wr;else if(Qt(A))if(Jr)Ce=Fp;else{Ce=Kp;var se=$p}else B=A.nodeName,!B||B.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?M&&$a(M.elementType)&&(Ce=Wr):Ce=Ip;if(Ce&&(Ce=Ce(e,M))){Ue(X,Ce,t,G);break e}se&&se(e,A,M),e==="focusout"&&M&&A.type==="number"&&M.memoizedProps.value!=null&&Mn(A,"number",A.value)}switch(se=M?ct(M):window,e){case"focusin":(Qt(se)||se.contentEditable==="true")&&(ea=se,Qo=M,ai=null);break;case"focusout":ai=Qo=ea=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,Ef(X,t,G);break;case"selectionchange":if(Zp)break;case"keydown":case"keyup":Ef(X,t,G)}var we;if(ti)e:{switch(e){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else pe?z(e,t)&&(Me="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Me="onCompositionStart");Me&&(g&&t.locale!=="ko"&&(pe||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&pe&&(we=Qa()):(zt=G,Fa="value"in zt?zt.value:zt.textContent,pe=!0)),se=eo(M,Me),0<se.length&&(Me=new is(Me,e,null,t,G),X.push({event:Me,listeners:se}),we?Me.data=we:(we=te(t),we!==null&&(Me.data=we)))),(we=d?Le(e,t):an(e,t))&&(Me=eo(M,"onBeforeInput"),0<Me.length&&(se=new is("onBeforeInput","beforeinput",null,t,G),X.push({event:se,listeners:Me}),se.data=we)),O_(X,e,M,t,G)}Qm(X,n)})}function Ai(e,n,t){return{instance:e,listener:n,currentTarget:t}}function eo(e,n){for(var t=n+"Capture",l=[];e!==null;){var r=e,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=Nl(e,t),r!=null&&l.unshift(Ai(e,r,a)),r=Nl(e,n),r!=null&&l.push(Ai(e,r,a))),e.tag===3)return l;e=e.return}return[]}function L_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pm(e,n,t,l,r){for(var a=n._reactName,m=[];t!==null&&t!==l;){var p=t,E=p.alternate,M=p.stateNode;if(p=p.tag,E!==null&&E===l)break;p!==5&&p!==26&&p!==27||M===null||(E=M,r?(M=Nl(t,a),M!=null&&m.unshift(Ai(t,M,E))):r||(M=Nl(t,a),M!=null&&m.push(Ai(t,M,E)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var U_=/\r\n?/g,H_=/\u0000|\uFFFD/g;function Wm(e){return(typeof e=="string"?e:""+e).replace(U_,`
`).replace(H_,"")}function Jm(e,n){return n=Wm(n),Wm(e)===n}function qe(e,n,t,l,r,a){switch(t){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ut(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ut(e,""+l);break;case"className":Tt(e,"class",l);break;case"tabIndex":Tt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Tt(e,t,l);break;case"style":El(e,l,a);break;case"data":if(n!=="object"){Tt(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=It(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(t==="formAction"?(n!=="input"&&qe(e,n,"name",r.name,r,null),qe(e,n,"formEncType",r.formEncType,r,null),qe(e,n,"formMethod",r.formMethod,r,null),qe(e,n,"formTarget",r.formTarget,r,null)):(qe(e,n,"encType",r.encType,r,null),qe(e,n,"method",r.method,r,null),qe(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=It(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=ft);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=It(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Nt(e,"popover",l);break;case"xlinkActuate":In(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":In(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":In(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":In(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":In(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":In(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":In(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":In(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":In(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Nt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ts.get(t)||t,Nt(e,t,l))}}function xu(e,n,t,l,r,a){switch(t){case"style":El(e,l,a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"children":typeof l=="string"?ut(e,l):(typeof l=="number"||typeof l=="bigint")&&ut(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ft);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!me.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),n=t.slice(2,r?t.length-7:void 0),a=e[ln]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(n,a,r),typeof l=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,l,r);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Nt(e,t,l)}}}function Tn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,r=!1,a;for(a in t)if(t.hasOwnProperty(a)){var m=t[a];if(m!=null)switch(a){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,a,m,t,null)}}r&&qe(e,n,"srcSet",t.srcSet,t,null),l&&qe(e,n,"src",t.src,t,null);return;case"input":Te("invalid",e);var p=a=m=r=null,E=null,M=null;for(l in t)if(t.hasOwnProperty(l)){var G=t[l];if(G!=null)switch(l){case"name":r=G;break;case"type":m=G;break;case"checked":E=G;break;case"defaultChecked":M=G;break;case"value":a=G;break;case"defaultValue":p=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:qe(e,n,l,G,t,null)}}es(e,a,p,E,M,m,r,!1);return;case"select":Te("invalid",e),l=m=a=null;for(r in t)if(t.hasOwnProperty(r)&&(p=t[r],p!=null))switch(r){case"value":a=p;break;case"defaultValue":m=p;break;case"multiple":l=p;default:qe(e,n,r,p,t,null)}n=a,t=m,e.multiple=!!l,n!=null?Kt(e,!!l,n,!1):t!=null&&Kt(e,!!l,t,!0);return;case"textarea":Te("invalid",e),a=r=l=null;for(m in t)if(t.hasOwnProperty(m)&&(p=t[m],p!=null))switch(m){case"value":l=p;break;case"defaultValue":r=p;break;case"children":a=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(91));break;default:qe(e,n,m,p,t,null)}Sn(e,l,r,a);return;case"option":for(E in t)if(t.hasOwnProperty(E)&&(l=t[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:qe(e,n,E,l,t,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<Mi.length;l++)Te(Mi[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in t)if(t.hasOwnProperty(M)&&(l=t[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,M,l,t,null)}return;default:if($a(n)){for(G in t)t.hasOwnProperty(G)&&(l=t[G],l!==void 0&&xu(e,n,G,l,t,void 0));return}}for(p in t)t.hasOwnProperty(p)&&(l=t[p],l!=null&&qe(e,n,p,l,t,null))}function G_(e,n,t,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,m=null,p=null,E=null,M=null,G=null;for(B in t){var X=t[B];if(t.hasOwnProperty(B)&&X!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":E=X;default:l.hasOwnProperty(B)||qe(e,n,B,null,l,X)}}for(var A in l){var B=l[A];if(X=t[A],l.hasOwnProperty(A)&&(B!=null||X!=null))switch(A){case"type":a=B;break;case"name":r=B;break;case"checked":M=B;break;case"defaultChecked":G=B;break;case"value":m=B;break;case"defaultValue":p=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,n));break;default:B!==X&&qe(e,n,A,B,l,X)}}ir(e,m,p,E,M,G,a,r);return;case"select":B=m=p=A=null;for(a in t)if(E=t[a],t.hasOwnProperty(a)&&E!=null)switch(a){case"value":break;case"multiple":B=E;default:l.hasOwnProperty(a)||qe(e,n,a,null,l,E)}for(r in l)if(a=l[r],E=t[r],l.hasOwnProperty(r)&&(a!=null||E!=null))switch(r){case"value":A=a;break;case"defaultValue":p=a;break;case"multiple":m=a;default:a!==E&&qe(e,n,r,a,l,E)}n=p,t=m,l=B,A!=null?Kt(e,!!t,A,!1):!!l!=!!t&&(n!=null?Kt(e,!!t,n,!0):Kt(e,!!t,t?[]:"",!1));return;case"textarea":B=A=null;for(p in t)if(r=t[p],t.hasOwnProperty(p)&&r!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:qe(e,n,p,null,l,r)}for(m in l)if(r=l[m],a=t[m],l.hasOwnProperty(m)&&(r!=null||a!=null))switch(m){case"value":A=r;break;case"defaultValue":B=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==a&&qe(e,n,m,r,l,a)}Xr(e,A,B);return;case"option":for(var re in t)if(A=t[re],t.hasOwnProperty(re)&&A!=null&&!l.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:qe(e,n,re,null,l,A)}for(E in l)if(A=l[E],B=t[E],l.hasOwnProperty(E)&&A!==B&&(A!=null||B!=null))switch(E){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:qe(e,n,E,A,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in t)A=t[he],t.hasOwnProperty(he)&&A!=null&&!l.hasOwnProperty(he)&&qe(e,n,he,null,l,A);for(M in l)if(A=l[M],B=t[M],l.hasOwnProperty(M)&&A!==B&&(A!=null||B!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,n));break;default:qe(e,n,M,A,l,B)}return;default:if($a(n)){for(var Xe in t)A=t[Xe],t.hasOwnProperty(Xe)&&A!==void 0&&!l.hasOwnProperty(Xe)&&xu(e,n,Xe,void 0,l,A);for(G in l)A=l[G],B=t[G],!l.hasOwnProperty(G)||A===B||A===void 0&&B===void 0||xu(e,n,G,A,l,B);return}}for(var T in t)A=t[T],t.hasOwnProperty(T)&&A!=null&&!l.hasOwnProperty(T)&&qe(e,n,T,null,l,A);for(X in l)A=l[X],B=t[X],!l.hasOwnProperty(X)||A===B||A==null&&B==null||qe(e,n,X,A,l,B)}function eh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function V_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],a=r.transferSize,m=r.initiatorType,p=r.duration;if(a&&p&&eh(m)){for(m=0,p=r.responseEnd,l+=1;l<t.length;l++){var E=t[l],M=E.startTime;if(M>p)break;var G=E.transferSize,X=E.initiatorType;G&&eh(X)&&(E=E.responseEnd,m+=G*(E<p?1:(p-M)/(E-M)))}if(--l,n+=8*(a+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Su=null,Eu=null;function no(e){return e.nodeType===9?e:e.ownerDocument}function nh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function th(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ku=null;function Y_(){var e=window.event;return e&&e.type==="popstate"?e===ku?!1:(ku=e,!0):(ku=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,X_=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(e){return rh.resolve(null).then(e).catch($_)}:lh;function $_(e){setTimeout(function(){throw e})}function $l(e){return e==="head"}function ah(e,n){var t=n,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(r),Ta(n);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Di(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Di(t);for(var a=t.firstChild;a;){var m=a.nextSibling,p=a.nodeName;a[Bn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&a.rel.toLowerCase()==="stylesheet"||t.removeChild(a),a=m}}else t==="body"&&Di(e.ownerDocument.body);t=r}while(t);Ta(n)}function ih(e,n){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Nu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Nu(t),qt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function K_(e,n,t,l){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function I_(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function sh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vt(e.nextSibling),e===null))return null;return e}function Tu(e){return e.data==="$?"||e.data==="$~"}function Ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function F_(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var l=function(){n(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Mu=null;function oh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return vt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function ch(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function uh(e,n,t){switch(n=no(t),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Di(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qt(e)}var xt=new Map,fh=new Set;function to(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fl=Y.d;Y.d={f:Q_,r:Z_,D:P_,C:W_,L:J_,m:eg,X:tg,S:ng,M:lg};function Q_(){var e=fl.f(),n=Is();return e||n}function Z_(e){var n=Kn(e);n!==null&&n.tag===5&&n.type==="form"?Rd(n):fl.r(e)}var wa=typeof document>"u"?null:document;function dh(e,n,t){var l=wa;if(l&&typeof n=="string"&&n){var r=gn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),fh.has(r)||(fh.add(r),e={rel:e,crossOrigin:t,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Tn(n,"link",e),Pe(n),l.head.appendChild(n)))}}function P_(e){fl.D(e),dh("dns-prefetch",e,null)}function W_(e,n){fl.C(e,n),dh("preconnect",e,n)}function J_(e,n,t){fl.L(e,n,t);var l=wa;if(l&&e&&n){var r='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+gn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+gn(t.imageSizes)+'"]')):r+='[href="'+gn(e)+'"]';var a=r;switch(n){case"style":a=ka(e);break;case"script":a=Na(e)}xt.has(a)||(e=N({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),xt.set(a,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(ji(a))||n==="script"&&l.querySelector(Oi(a))||(n=l.createElement("link"),Tn(n,"link",e),Pe(n),l.head.appendChild(n)))}}function eg(e,n){fl.m(e,n);var t=wa;if(t&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+gn(l)+'"][href="'+gn(e)+'"]',a=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Na(e)}if(!xt.has(a)&&(e=N({rel:"modulepreload",href:e},n),xt.set(a,e),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Oi(a)))return}l=t.createElement("link"),Tn(l,"link",e),Pe(l),t.head.appendChild(l)}}}function ng(e,n,t){fl.S(e,n,t);var l=wa;if(l&&e){var r=Xt(l).hoistableStyles,a=ka(e);n=n||"default";var m=r.get(a);if(!m){var p={loading:0,preload:null};if(m=l.querySelector(ji(a)))p.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},t),(t=xt.get(a))&&Au(e,t);var E=m=l.createElement("link");Pe(E),Tn(E,"link",e),E._p=new Promise(function(M,G){E.onload=M,E.onerror=G}),E.addEventListener("load",function(){p.loading|=1}),E.addEventListener("error",function(){p.loading|=2}),p.loading|=4,lo(m,n,l)}m={type:"stylesheet",instance:m,count:1,state:p},r.set(a,m)}}}function tg(e,n){fl.X(e,n);var t=wa;if(t&&e){var l=Xt(t).hoistableScripts,r=Na(e),a=l.get(r);a||(a=t.querySelector(Oi(r)),a||(e=N({src:e,async:!0},n),(n=xt.get(r))&&Du(e,n),a=t.createElement("script"),Pe(a),Tn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(r,a))}}function lg(e,n){fl.M(e,n);var t=wa;if(t&&e){var l=Xt(t).hoistableScripts,r=Na(e),a=l.get(r);a||(a=t.querySelector(Oi(r)),a||(e=N({src:e,async:!0,type:"module"},n),(n=xt.get(r))&&Du(e,n),a=t.createElement("script"),Pe(a),Tn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(r,a))}}function mh(e,n,t,l){var r=(r=Z.current)?to(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=ka(t.href),t=Xt(r).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ka(t.href);var a=Xt(r).hoistableStyles,m=a.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,m),(a=r.querySelector(ji(e)))&&!a._p&&(m.instance=a,m.state.loading=5),xt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},xt.set(e,t),a||rg(r,e,t,m.state))),n&&l===null)throw Error(s(528,""));return m}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Na(t),t=Xt(r).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ka(e){return'href="'+gn(e)+'"'}function ji(e){return'link[rel="stylesheet"]['+e+"]"}function hh(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function rg(e,n,t,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Tn(n,"link",t),Pe(n),e.head.appendChild(n))}function Na(e){return'[src="'+gn(e)+'"]'}function Oi(e){return"script[async]"+e}function ph(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+gn(t.href)+'"]');if(l)return n.instance=l,Pe(l),l;var r=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Pe(l),Tn(l,"style",r),lo(l,t.precedence,e),n.instance=l;case"stylesheet":r=ka(t.href);var a=e.querySelector(ji(r));if(a)return n.state.loading|=4,n.instance=a,Pe(a),a;l=hh(t),(r=xt.get(r))&&Au(l,r),a=(e.ownerDocument||e).createElement("link"),Pe(a);var m=a;return m._p=new Promise(function(p,E){m.onload=p,m.onerror=E}),Tn(a,"link",l),n.state.loading|=4,lo(a,t.precedence,e),n.instance=a;case"script":return a=Na(t.src),(r=e.querySelector(Oi(a)))?(n.instance=r,Pe(r),r):(l=t,(r=xt.get(a))&&(l=N({},t),Du(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Pe(r),Tn(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,lo(l,t.precedence,e));return n.instance}function lo(e,n,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,a=r,m=0;m<l.length;m++){var p=l[m];if(p.dataset.precedence===n)a=p;else if(a!==r)break}a?a.parentNode.insertBefore(e,a.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Au(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Du(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ro=null;function _h(e,n,t){if(ro===null){var l=new Map,r=ro=new Map;r.set(t,l)}else r=ro,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var a=t[r];if(!(a[Bn]||a[tn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var m=a.getAttribute(n)||"";m=e+m;var p=l.get(m);p?p.push(a):l.set(m,[a])}}return l}function gh(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function ag(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ig(e,n,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=ka(l.href),a=n.querySelector(ji(r));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ao.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=a,Pe(a);return}a=n.ownerDocument||n,l=hh(l),(r=xt.get(r))&&Au(l,r),a=a.createElement("link"),Pe(a);var m=a;m._p=new Promise(function(p,E){m.onload=p,m.onerror=E}),Tn(a,"link",l),t.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ao.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var ju=0;function sg(e,n){return e.stylesheets&&e.count===0&&so(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&so(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+n);0<e.imgBytes&&ju===0&&(ju=62500*V_());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&so(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>ju?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function ao(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)so(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var io=null;function so(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,io=new Map,n.forEach(og,e),io=null,ao.call(e))}function og(e,n){if(!(n.state.loading&4)){var t=io.get(e);if(t)var l=t.get(null);else{t=new Map,io.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var m=r[a];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),l=m)}l&&t.set(null,l)}r=n.instance,m=r.getAttribute("data-precedence"),a=t.get(m)||l,a===l&&t.set(null,r),t.set(m,r),this.count++,l=ao.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),a?a.parentNode.insertBefore(r,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Ci={$$typeof:oe,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function cg(e,n,t,l,r,a,m,p,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.hiddenUpdates=Ot(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function yh(e,n,t,l,r,a,m,p,E,M,G,X){return e=new cg(e,n,t,m,E,M,G,X,p),n=1,a===!0&&(n|=24),a=Zn(3,null,null,n),e.current=a,a.stateNode=e,n=fc(),n.refCount++,e.pooledCache=n,n.refCount++,a.memoizedState={element:l,isDehydrated:t,cache:n},pc(a),e}function vh(e){return e?(e=la,e):la}function xh(e,n,t,l,r,a){r=vh(r),l.context===null?l.context=r:l.pendingContext=r,l=Cl(n),l.payload={element:t},a=a===void 0?null:a,a!==null&&(l.callback=a),t=zl(e,l,n),t!==null&&(qn(t,e,n),di(t,e,n))}function Sh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ou(e,n){Sh(e,n),(e=e.alternate)&&Sh(e,n)}function Eh(e){if(e.tag===13||e.tag===31){var n=yr(e,67108864);n!==null&&qn(n,e,67108864),Ou(e,67108864)}}function wh(e){if(e.tag===13||e.tag===31){var n=nt();n=xl(n);var t=yr(e,n);t!==null&&qn(t,e,n),Ou(e,n)}}var oo=!0;function ug(e,n,t,l){var r=O.T;O.T=null;var a=Y.p;try{Y.p=2,Cu(e,n,t,l)}finally{Y.p=a,O.T=r}}function fg(e,n,t,l){var r=O.T;O.T=null;var a=Y.p;try{Y.p=8,Cu(e,n,t,l)}finally{Y.p=a,O.T=r}}function Cu(e,n,t,l){if(oo){var r=zu(l);if(r===null)vu(e,n,l,co,t),Nh(e,l);else if(mg(r,e,n,t,l))l.stopPropagation();else if(Nh(e,l),n&4&&-1<dg.indexOf(e)){for(;r!==null;){var a=Kn(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var m=xn(a.pendingLanes);if(m!==0){var p=a;for(p.pendingLanes|=2,p.entangledLanes|=2;m;){var E=1<<31-vn(m);p.entanglements[1]|=E,m&=~E}Gt(a),(Be&6)===0&&($s=Rn()+500,Ri(0))}}break;case 31:case 13:p=yr(a,2),p!==null&&qn(p,a,2),Is(),Ou(a,2)}if(a=zu(l),a===null&&vu(e,n,l,co,t),a===r)break;r=a}r!==null&&l.stopPropagation()}else vu(e,n,l,null,t)}}function zu(e){return e=Ia(e),Bu(e)}var co=null;function Bu(e){if(co=null,e=Ln(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=_(n),e!==null)return e;e=null}else if(t===31){if(e=b(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return co=e,null}function kh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ur()){case Hr:return 2;case Ga:return 8;case er:case it:return 32;case st:return 268435456;default:return 32}default:return 32}}var Lu=!1,Kl=null,Il=null,Fl=null,zi=new Map,Bi=new Map,Ql=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nh(e,n){switch(e){case"focusin":case"focusout":Kl=null;break;case"dragenter":case"dragleave":Il=null;break;case"mouseover":case"mouseout":Fl=null;break;case"pointerover":case"pointerout":zi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(n.pointerId)}}function Li(e,n,t,l,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:a,targetContainers:[r]},n!==null&&(n=Kn(n),n!==null&&Eh(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function mg(e,n,t,l,r){switch(n){case"focusin":return Kl=Li(Kl,e,n,t,l,r),!0;case"dragenter":return Il=Li(Il,e,n,t,l,r),!0;case"mouseover":return Fl=Li(Fl,e,n,t,l,r),!0;case"pointerover":var a=r.pointerId;return zi.set(a,Li(zi.get(a)||null,e,n,t,l,r)),!0;case"gotpointercapture":return a=r.pointerId,Bi.set(a,Li(Bi.get(a)||null,e,n,t,l,r)),!0}return!1}function Th(e){var n=Ln(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=_(t),n!==null){e.blockedOn=n,Ya(e.priority,function(){wh(t)});return}}else if(n===31){if(n=b(t),n!==null){e.blockedOn=n,Ya(e.priority,function(){wh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=zu(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Ka=l,t.target.dispatchEvent(l),Ka=null}else return n=Kn(t),n!==null&&Eh(n),e.blockedOn=t,!1;n.shift()}return!0}function Rh(e,n,t){uo(e)&&t.delete(n)}function hg(){Lu=!1,Kl!==null&&uo(Kl)&&(Kl=null),Il!==null&&uo(Il)&&(Il=null),Fl!==null&&uo(Fl)&&(Fl=null),zi.forEach(Rh),Bi.forEach(Rh)}function fo(e,n){e.blockedOn===n&&(e.blockedOn=null,Lu||(Lu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hg)))}var mo=null;function Mh(e){mo!==e&&(mo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){mo===e&&(mo=null);for(var n=0;n<e.length;n+=3){var t=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Bu(l||t)===null)continue;break}var a=Kn(t);a!==null&&(e.splice(n,3),n-=3,zc(a,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function Ta(e){function n(E){return fo(E,e)}Kl!==null&&fo(Kl,e),Il!==null&&fo(Il,e),Fl!==null&&fo(Fl,e),zi.forEach(n),Bi.forEach(n);for(var t=0;t<Ql.length;t++){var l=Ql[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ql.length&&(t=Ql[0],t.blockedOn===null);)Th(t),t.blockedOn===null&&Ql.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],a=t[l+1],m=r[ln]||null;if(typeof a=="function")m||Mh(t);else if(m){var p=null;if(a&&a.hasAttribute("formAction")){if(r=a,m=a[ln]||null)p=m.formAction;else if(Bu(r)!==null)continue}else p=m.action;typeof p=="function"?t[l+1]=p:(t.splice(l,3),l-=3),Mh(t)}}}function Ah(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function Uu(e){this._internalRoot=e}ho.prototype.render=Uu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var t=n.current,l=nt();xh(t,l,e,n,null,null)},ho.prototype.unmount=Uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xh(e.current,2,null,e,null,null),Is(),n[ot]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var n=un();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ql.length&&n!==0&&n<Ql[t].priority;t++);Ql.splice(t,0,e),t===0&&Th(e)}};var Dh=i.version;if(Dh!=="19.2.7")throw Error(s(527,Dh,"19.2.7"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var pg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{nr=po.inject(pg),pn=po}catch{}}return Hi.createRoot=function(e,n){if(!c(e))throw Error(s(299));var t=!1,l="",r=Ud,a=Hd,m=Gd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=yh(e,1,!1,null,null,t,l,null,r,a,m,Ah),e[ot]=n.current,yu(e),new Uu(n)},Hi.hydrateRoot=function(e,n,t){if(!c(e))throw Error(s(299));var l=!1,r="",a=Ud,m=Hd,p=Gd,E=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.formState!==void 0&&(E=t.formState)),n=yh(e,1,!0,n,t??null,l,r,E,a,m,p,Ah),n.context=vh(null),t=n.current,l=nt(),l=xl(l),r=Cl(l),r.callback=null,zl(t,r,l),t=l,n.current.lanes=t,tr(n,t),Gt(n),e[ot]=n.current,yu(e),new ho(n)},Hi.version="19.2.7",Hi}var Vh;function Tg(){if(Vh)return Vu.exports;Vh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Vu.exports=Ng(),Vu.exports}var Rg=Tg();const Mg=Ap(Rg),Yh=o=>{let i;const u=new Set,s=(y,S)=>{const N=typeof y=="function"?y(i):y;if(!Object.is(N,i)){const j=i;i=S??(typeof N!="object"||N===null)?N:Object.assign({},i,N),u.forEach(F=>F(i,j))}},c=()=>i,b={setState:s,getState:c,getInitialState:()=>v,subscribe:y=>(u.add(y),()=>u.delete(y))},v=i=o(s,c,b);return b},Ag=(o=>o?Yh(o):Yh),Dg=o=>o;function jg(o,i=Dg){const u=Xi.useSyncExternalStore(o.subscribe,Xi.useCallback(()=>i(o.getState()),[o,i]),Xi.useCallback(()=>i(o.getInitialState()),[o,i]));return Xi.useDebugValue(u),u}const qh=o=>{const i=Ag(o),u=s=>jg(i,s);return Object.assign(u,i),u},Og=(o=>o?qh(o):qh);function Cg(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let u=0;u<o.length;u+=1)o[u]=Math.floor(Math.random()*256);let i="";for(const u of o)i+=u.toString(16).padStart(2,"0");return i}const df="pkp.user",mf="pkp.savedDevices",hf="pkp.ideDrafts",pf="pkp.ideSettings",Ki="Prototype Version 0.6.7";function ko(o){try{const i=localStorage.getItem(o);return i?JSON.parse(i):null}catch{return null}}function No(o,i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}}function zg(){const o=ko(df);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function Xh(o){No(df,o)}function _f(){return ko(mf)??[]}function To(o){No(mf,o)}function Bg(){To([])}function Lg(){try{localStorage.removeItem(df),localStorage.removeItem(mf),localStorage.removeItem(hf),localStorage.removeItem(pf)}catch{}}function $u(){var o;return((o=ko(hf))==null?void 0:o.filter(i=>i.path&&typeof i.content=="string"))??[]}function Ku(o){No(hf,o)}function $h(){const o=ko(pf)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function Ug(o){No(pf,o)}function Iu(o){const i=_f(),u=i.findIndex(s=>s.deviceID===o.deviceID);return u>=0?i[u]=o:i.push(o),To(i),i}function Hg(o){const i=_f().filter(u=>u.deviceID!==o);return To(i),i}const lf="b8e06067-62ad-41ba-9231-206ae80ab551",Gg="f897177b-aee8-4767-8ecc-cc694fd5fce0",Vg="f897177b-aee8-4767-8ecc-cc694fd5fce1",Fu=20,Yg=12,qg=new TextEncoder,Xg=new TextDecoder;function $g(o){return new Promise(i=>setTimeout(i,o))}function Ro(){return typeof navigator<"u"&&"bluetooth"in navigator}function rf(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function Kg(){if(!Ro())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[lf]},{namePrefix:"PicoW-"}],optionalServices:[lf]})}async function Dp(){if(!Ro()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Ig{constructor(){ue(this,"device",null);ue(this,"writeChar",null);ue(this,"notifyChar",null);ue(this,"buffer","");ue(this,"writeQueue",Promise.resolve());ue(this,"disconnectNotified",!1);ue(this,"onLine",()=>{});ue(this,"onDisconnect",()=>{});ue(this,"handleNotification",i=>{const u=i.target;if(!(u!=null&&u.value))return;this.buffer+=Xg.decode(u.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const c=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),c&&this.onLine(c),s=this.buffer.indexOf(`
`)}});ue(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,u;return!!((u=(i=this.device)==null?void 0:i.gatt)!=null&&u.connected)}async connect(i){var c;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const u=await((c=i.gatt)==null?void 0:c.connect());if(!u)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await u.getPrimaryService(lf);this.writeChar=await s.getCharacteristic(Gg),this.notifyChar=await s.getCharacteristic(Vg),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const u=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=u.catch(()=>{}),u}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const u=qg.encode(`${i}
`),c=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<u.length;h+=Fu){const _=u.slice(h,h+Fu);await c(_),h+Fu<u.length&&await $g(Yg)}}disconnect(){var u;const i=this.device;(u=i==null?void 0:i.gatt)!=null&&u.connected?i.gatt.disconnect():this.handleDisconnected()}}class Fg{constructor(i,u){ue(this,"send");ue(this,"onMessage");ue(this,"inActive",!1);ue(this,"inExpectedTotal",0);ue(this,"inStreamId",0);ue(this,"inParts",new Map);ue(this,"inProgress",null);ue(this,"outPendingLines",null);ue(this,"outWaitingAck",!1);ue(this,"outStreamId",0);ue(this,"outNextStreamId",1);ue(this,"outCache",new Map);ue(this,"outProgress",null);this.send=i,this.onMessage=u}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null}handleLine(i){var s;if(i.startsWith("prep,")){const c=i.split(","),h=c.length>=2&&/^\d+$/.test(c[1])?parseInt(c[1],10):null,_=c.length>=3&&/^\d+$/.test(c[2])?parseInt(c[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const c=i.split(",");if(c.length>=3&&/^\d+$/.test(c[1])&&/^\d+$/.test(c[2])){const h=parseInt(c[1],10),_=parseInt(c[2],10),b=this.outCache.get(_);h===this.outStreamId&&b&&this.send(b)}return}const u=this.parseNumbered(i);if(u){const{idx:c,payload:h}=u;if(!this.inActive){this.onMessage(h);return}this.inParts.has(c)||(this.inParts.set(c,h),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let b=1;b<=this.inExpectedTotal;b+=1)if(!this.inParts.has(b)){_=b;break}if(_>0&&this.inStreamId>0&&c>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let b=1;b<=this.inExpectedTotal;b+=1){const v=this.inParts.get(b);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,u){const s=i.length===0?[""]:i;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=u??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear(),await this.send(`prep,${s.length},${this.outStreamId}`)}async flushOutbound(){var u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null;return}const i=this.outPendingLines.length;for(let s=0;s<i;s+=1){const c=this.outPendingLines[s],h=`${s+1}-${c}`;this.outCache.set(s+1,h),await this.send(h),(u=this.outProgress)==null||u.call(this,s+1,i,c)}this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}parseNumbered(i){const u=i.indexOf("-");if(u<=0)return null;const s=i.slice(0,u);if(!/^\d+$/.test(s))return null;const c=parseInt(s,10);return c<1?null:{idx:c,payload:i.slice(u+1)}}}const Ca=11,Ii=31,Qg=2,Zg=60,Da=4,ja=40;function Pg(o,i){return Math.max(14,Math.min(56,Math.min(o,i)*.05))}function jp(o,i,u=Ca,s=Ii){const c=Pg(o,i),h=Math.max(1,o-2*c),_=Math.max(1,i-2*c);return{areaW:o,areaH:i,cols:u,rows:s,margin:c,stepX:h/Math.max(1,u-1),stepY:_/Math.max(1,s-1)}}function Op(o,i){return i.margin+o/2*i.stepX}function Cp(o,i){const u=i.margin+o/2*i.stepY;return i.areaH-u}function $i(o,i){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:Op(o.centerX2,i),cy:Cp(o.centerY2,i),width:o.spanX*i.stepX,height:o.spanY*i.stepY}}function Wg(o){const i=[];for(let u=0;u<o.cols;u+=1)for(let s=0;s<o.rows;s+=1)i.push({x:o.margin+u*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return i}function yo(o,i,u,s,c){const h=(v,y,S,N)=>{const j=y%2,F=N*2;let Q=j,le=1/0;for(let U=j;U<=F;U+=2){const H=Math.abs(S(U)-v);H<le&&(le=H,Q=U)}return Math.max(y,Math.min(F-y,Q))},_=h(o,u,v=>Op(v,c),c.cols-1),b=h(i,s,v=>Cp(v,c),c.rows-1);return{centerX2:_,centerY2:b}}const Cr=6e3,Jg=15,Eo=[32,64,128,192],eb=Cr*4,nb=3500,tb=8e3,lb=2,rb=Cr,ab=Cr*8;function Qu(o){return new Promise(i=>setTimeout(i,o))}function Ra(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function Kh(o){return o instanceof DOMException&&o.name==="AbortError"}function Pl(o){return o.replace(/[\r\n,]/g," ").trim()}class ib{constructor(i={}){ue(this,"transport",new Ig);ue(this,"stream");ue(this,"events");ue(this,"waiters",[]);ue(this,"collectingLayout",!1);ue(this,"layoutBuffer",[]);ue(this,"layoutResolve",null);ue(this,"collectingLines",!1);ue(this,"lineBuffer",[]);ue(this,"lineResolve",null);ue(this,"lineReject",null);ue(this,"lineCollectId",0);ue(this,"controlPumpActive",!1);ue(this,"pendingButtons",[]);ue(this,"pendingSliders",new Map);ue(this,"pendingToggles",new Map);ue(this,"expectingDisconnect",!1);ue(this,"busy",!1);ue(this,"fsCapabilities",null);this.events=i,this.stream=new Fg(u=>this.transport.writeLine(u),u=>this.onDeviceMessage(u)),this.transport.onLine=u=>this.stream.handleLine(u),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return rf((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(i,u){var s,c;(c=(s=this.events).onLog)==null||c.call(s,i,u)}progress(i,u){var s,c;(c=(s=this.events).onProgress)==null||c.call(s,i,u)}onDeviceMessage(i){var s,c;if(i==="disconnect"){this.log("warning","Enheden afbrød forbindelsen."),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(c=this.layoutResolve)==null||c.call(this,h),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const u=this.waiters.findIndex(h=>h.match(i));if(u>=0){const h=this.waiters[u];this.waiters.splice(u,1),clearTimeout(h.timer),h.resolve(i)}}waitFor(i,u,s){return new Promise((c,h)=>{const _=setTimeout(()=>{const b=this.waiters.findIndex(v=>v.timer===_);b>=0&&this.waiters.splice(b,1),h(new Error(`Timeout: ${s}`))},u);this.waiters.push({match:i,resolve:c,reject:h,timer:_})})}async collectLines(i,u,s,c,h){Ra(c);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const b=new Promise((v,y)=>{let S=!1;const N=()=>this.lineCollectId===_,j=()=>{S=!0,N()&&(this.lineReject=null,this.stream.setInboundProgress(null)),c==null||c.removeEventListener("abort",Q)},F=H=>{S||(clearTimeout(le),N()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),j(),y(H))},Q=()=>{F(new DOMException("BLE file read cancelled","AbortError"))},le=setTimeout(()=>{N()&&F(new Error(`Timeout: ${s}`))},u);this.lineResolve=v,this.lineReject=F;const U=this.lineResolve;this.lineResolve=H=>{N()&&(clearTimeout(le),j(),U==null||U(H))},c==null||c.addEventListener("abort",Q,{once:!0})});return await this.transport.writeLine(i),b}async exchange(i,u,s,c=3){let h;for(let _=1;_<=c;_+=1)try{return await this.transport.writeLine(i),await this.waitFor(u,Cr,s)}catch(b){h=b,this.log("warning",`${s}: forsøg ${_}/${c} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${s}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var le;await Qu(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",U=>U==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const u=await this.exchange("who_are_you",U=>U==="unowned"||U.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),u==="unowned")return{kind:"unowned"};const s=u.split(","),c=s[1]??"",h=s[2]!==void 0&&parseInt(s[2],10)||0,_=s[3]!==void 0?parseInt(s[3],10)===1:!0,b=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=((le=s[5])==null?void 0:le.trim())||void 0;await this.exchange("ACK:ownership",U=>U==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const y=await this.exchange(`request_permission,${i.userID},${Pl(i.username)}`,U=>U.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const S=y.split(",").filter(U=>/^\d+$/.test(U)),N=S.length>=1?parseInt(S[S.length-2]??"0",10):0,j=S.length>=1?parseInt(S[S.length-1]??"0",10):0;if(N===0)return this.expectingDisconnect=!0,{kind:"denied",ownerName:v,canOthersConnect:_};const F=i.userID===c,Q=j===1||F;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:c,ownerName:v,iconID:h,canEdit:Q,isOwnedByMe:F,canOthersConnect:_,canOthersEdit:b}}async create(i,u,s,c,h,_){const b=s?1:0,v=s&&c?1:0;await this.exchange(`create,${i.userID},${Pl(i.username)},${u},${b},${v},${h},${_}`,y=>y==="ACK:create","create")}async updateDeviceSettings(i,u,s,c,h,_){const b=u?1:0,v=u&&s?1:0;await this.exchange(`settings_update,${i},${b},${v},${c},${h},${Pl(_??"")}`,y=>y==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((s,c)=>{this.layoutResolve=s;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,c(new Error("Timeout: layout")))},Cr*2),_=this.layoutResolve;this.layoutResolve=b=>{clearTimeout(h),_==null||_(b)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const u=await i;return this.progress(100,"Klar"),u}async saveLayout(i){await this.exchange("update",c=>c==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const u=i.map(c=>{const h=b=>b===null?"n":String(b),_=`update,${c.type},${c.name},${h(c.centerX2)},${h(c.centerY2)},${h(c.spanX)},${h(c.spanY)},${c.rotation}`;return c.type==="slider"?`${_},${c.sliderMin??0},${c.sliderMax??100},${c.sliderRecenter??"none"}`:c.type==="toggle"?`${_},${c.toggleInitial?1:0}`:c.type==="radar"?[_,c.radarMinAngle??0,c.radarMaxAngle??180,c.radarMaxDistance??200,c.radarFadeMs??1200].join(","):_});u.push("__END__");const s=this.waitFor(c=>c==="LAYOUT_SAVED",Cr*2,"LAYOUT_SAVED");await this.stream.sendReliable(u),await s}async listFiles(i="/"){return(await this.collectLines(`fs_list,${Pl(i)}`,Cr*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,c,h,_]=s.split(","),b=c==="file"||c==="dir"?c:"unknown",v=parseInt(_??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:b,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(i){var _,b,v;const u=i.split(",");if(u.length<4)return;const s=(_=u[1])==null?void 0:_.trim(),c=parseFloat(u[2]??""),h=parseFloat(u[3]??"");!s||!Number.isFinite(c)||!Number.isFinite(h)||((v=(b=this.events).onRadar)==null||v.call(b,s,c,h),this.log("info",`rx: ${i}`))}handleTextLine(i){var b,v;const u=i.indexOf(","),s=u>=0?i.indexOf(",",u+1):-1;if(u<0||s<0)return;const c=i.slice(u+1,s),h=i.slice(s+1),_=c==null?void 0:c.trim();_&&((v=(b=this.events).onText)==null||v.call(b,_,h),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var h,_,b;const u=i.split(",");if(u.length<3)return;const s=(h=u[1])==null?void 0:h.trim(),c=parseInt(u[2]??"",10);!s||!Number.isFinite(c)||((b=(_=this.events).onToggleState)==null||b.call(_,s,c===1),this.log("info",`rx: ${i}`))}async readText(i,u,s){u==null||u(4,"Validerer Picoens Bluetooth-filsystem...");const c=await this.getFilesystemCapabilities(s);if(c.streamRead)try{return await this.readTextStream(i,c,u,s)}catch(h){if(s!=null&&s.aborted||Kh(h)||!c.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,u,s)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const u=await this.collectLines("fs_capabilities",rb,"fs_capabilities",i),s=u.find(S=>S.startsWith("ERR"));if(s)throw new Error(s);const c=u.find(S=>S.startsWith("fs_capabilities,"));if(!c)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=c.split(","),_=new Map;for(let S=1;S<h.length-1;S+=2)_.set(h[S],h[S+1]);const b=parseInt(_.get("max_page")??"",10),v=parseInt(_.get("stream_chunk")??"",10),y={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(b)&&b>0?b:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,u,s){const c=await this.getFilesystemCapabilities(s);let h=0,_=sb(c.maxPageSize),b=0,v=null,y="";const S=`Indlæser ${Ih(i)}...`;Ra(s),u==null||u(5,S);for(let N=0;N<512;N+=1){Ra(s),b===0&&(u==null||u(7,S));const F=await this.readPageWithRetry(i,b,h,_,s),Q=F.lines;h=F.nextPageSizeIndex,_=F.maxPageSizeIndex,Ra(s);const le=Q.find(W=>W.startsWith("ERR"));if(le)throw new Error(le);const U=Q.find(W=>W.startsWith("fs_page,"));if(!U)throw new Error("ERR: fs_read_page missing data");const[,H,_e,oe,xe=""]=U.split(",",5);if(H!==i)throw new Error("ERR: fs_read_page stale data");const fe=parseInt(_e??"",10),ke=parseInt(oe??"",10);if(!Number.isFinite(fe)||fe!==b||!Number.isFinite(ke))throw new Error("ERR: fs_read_page invalid data");v=ke,y+=xe,b+=Math.floor(xe.length/2);const ee=v>0?8+Math.min(87,Math.round(b/v*87)):95;if(u==null||u(ee,S),b>=v||xe.length===0)return u==null||u(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Fh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,u,s,c,h){let _,b=Math.min(s,c);for(;b>=0;){const v=Eo[b],y=b===0?lb:1,S=b===0?tb:nb;for(let N=1;N<=y;N+=1){Ra(h);try{return{lines:await this.collectLines(`fs_read_page,${Pl(i)},${u},${v}`,S,`fs_read_page ${u}`,h),nextPageSizeIndex:Math.min(b+1,c),maxPageSizeIndex:c}}catch(j){if(h!=null&&h.aborted||Kh(j))throw j;if(_=j,N<y||b>0){const Q=b>0&&N>=y?Eo[b-1]:v;this.log("warning",`fs_read_page ${u} (${v} bytes) fejlede; prøver ${Q} bytes`),await Qu(80+N*80)}}}if(b===0)break;c=Math.max(0,b-1),b=c}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${u}`)}async readTextStream(i,u,s,c){const h=`Indlæser ${Ih(i)}...`,_=Math.max(16,Math.min(192,u.streamChunkSize||128));s==null||s(5,h);const b=await this.collectLines(`fs_read_stream,${Pl(i)},${_}`,ab,`fs_read_stream ${i}`,c,(ee,W)=>{const be=8+Math.round(Math.min(ee,W)/Math.max(1,W)*87);s==null||s(Math.min(95,be),h)});Ra(c);const v=b.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const y=b.find(ee=>ee.startsWith("fs_stream_begin,")),S=b.find(ee=>ee.startsWith("fs_stream_end,"));if(!y||!S)throw new Error("ERR: fs_read_stream missing metadata");const[,N,j]=y.split(",",4),[,F,Q,le]=S.split(",",4),U=parseInt(j??"",10),H=parseInt(Q??"",10),_e=parseInt(le??"",10);if(N!==i||F!==i||!Number.isFinite(U)||U!==H||!Number.isFinite(_e))throw new Error("ERR: fs_read_stream invalid metadata");let oe=0,xe="";for(const ee of b){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,W,be=""]=ee.split(",",3),ge=parseInt(W??"",10);if(!Number.isFinite(ge)||ge!==oe||be.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");xe+=be,oe+=Math.floor(be.length/2)}if(oe!==U)throw new Error("ERR: fs_read_stream size mismatch");const fe=Fh(xe);if(ob(fe)!==_e)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(fe)}async writeText(i,u,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Pl(i)}`,y=>y==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const c=new TextEncoder().encode(u),h=[...c].map(y=>y.toString(16).padStart(2,"0")).join(""),_=[];for(let y=0;y<h.length;y+=160)_.push(`fs_write_chunk,${h.slice(y,y+160)}`);_.push("fs_write_end");const b=this.waitFor(y=>y==="ACK:fs_write_done"||y.startsWith("ERR"),eb,"fs_write_done");s==null||s(c.length===0?85:18,c.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${c.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(y,S,N)=>{if(!N.startsWith("fs_write_chunk,"))return;const j=Math.min(c.length,y*80),F=18+Math.round(y/Math.max(1,S-1)*67);s==null||s(Math.min(85,F),`Sender ${j}/${c.length} bytes via Bluetooth...`)});const v=await b;if(v.startsWith("ERR"))throw new Error(v);s==null||s(100,"Gemt på Pico")}async deleteFile(i){const u=await this.exchange(`fs_delete,${Pl(i)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(u.startsWith("ERR"))throw new Error(u)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i){this.busy||(this.pendingButtons.push(`button,${i}`),this.pumpControls())}enqueueSlider(i,u){this.busy||(this.pendingSliders.set(i,`slider,${i}:${u}`),this.pumpControls())}enqueueToggle(i,u){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${u?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Qu(Jg)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const u=this.pendingSliders.entries().next();if(!u.done){const[c,h]=u.value;return this.pendingSliders.delete(c),h}const s=this.pendingToggles.entries().next();if(!s.done){const[c,h]=s.value;return this.pendingToggles.delete(c),h}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var i,u,s;for(const c of this.waiters)clearTimeout(c.timer),c.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(i=this.lineReject)==null||i.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset(),(s=(u=this.events).onDisconnect)==null||s.call(u)}}function sb(o){let i=0;for(let u=0;u<Eo.length;u+=1)Eo[u]<=o&&(i=u);return i}function Ih(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function ob(o){let i=0;for(const u of o)i=i+u>>>0;return i}function Fh(o){const i=new Uint8Array(Math.floor(o.length/2));for(let u=0;u<i.length;u+=1)i[u]=parseInt(o.slice(u*2,u*2+2),16);return i}function Qh(o){const i=(u,s)=>Number.isFinite(u)?Math.max(Qg,Math.min(Zg,u)):s;for(const u of o){const s=u.trim();if(s.startsWith("#GRID,")){const c=s.split(","),h=i(parseInt(c[1],10),Ca),_=i(parseInt(c[2],10),Ii);return{cols:h,rows:_}}}return{cols:Ca,rows:Ii}}function Zh(o){const i=new Map;for(const u of o){const s=u.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const c=s.split(",");if(c.length<7)continue;const[h,_,b,v,y,S,N,j,F,Q,le]=c;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"||i.has(_))continue;const U=ge=>{if(ge==="n")return null;const ve=parseInt(ge,10);return Number.isNaN(ve)?null:ve},H=parseInt(N,10)||0,_e=j!==void 0?parseInt(j,10):0,oe=F!==void 0?parseInt(F,10):100,xe=["none","bottom","middle","top"].includes(Q??"")?Q:"none",fe=j!==void 0?parseInt(j,10)===1:!1,ke=j!==void 0?parseFloat(j):0,ee=F!==void 0?parseFloat(F):180,W=Q!==void 0?parseFloat(Q):200,be=le!==void 0?parseInt(le,10):1200;i.set(_,{type:h,name:_,centerX2:U(b),centerY2:U(v),spanX:U(y),spanY:U(S),rotation:[0,90,180,270].includes(H)?H:0,...h==="slider"?{sliderMin:Number.isFinite(_e)?_e:0,sliderMax:Number.isFinite(oe)?oe:100,sliderRecenter:xe}:{},...h==="toggle"?{toggleInitial:fe}:{},...h==="radar"?{radarMinAngle:Number.isFinite(ke)?ke:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(W)&&W>0?W:200,radarFadeMs:Number.isFinite(be)&&be>0?be:1200}:{}})}return[...i.values()]}let ne=null,Gi=null,Ph=0,dl=!1;function cb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Wh(o){return new Promise(i=>setTimeout(i,o))}function ub(o){return Object.fromEntries(o.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function Jh(o,i){const u=ub(o);for(const s of o)s.type==="toggle"&&i[s.name]!==void 0&&(u[s.name]=i[s.name]);return u}const J=Og((o,i)=>{function u(c,h){o(_=>({logs:[{level:c,message:h,time:cb()},..._.logs].slice(0,200)}))}function s(c){Gi&&clearTimeout(Gi),Ph+=1,o({toast:{message:c,id:Ph}}),Gi=setTimeout(()=>o({toast:null}),4500)}return ne=new ib({onProgress:(c,h)=>o({progress:{value:c,label:h}}),onLog:(c,h)=>u(c,h),onRadar:(c,h,_)=>{const b=Date.now(),v={id:`${b}-${Math.random().toString(36).slice(2)}`,angle:h,distance:_,createdAt:b};o(y=>{const S=y.layout.find(F=>F.type==="radar"&&F.name===c),N=(S==null?void 0:S.radarFadeMs)??1200,j=y.radarPings[c]??[];return{radarPings:{...y.radarPings,[c]:[...j.filter(F=>b-F.createdAt<=N),v].slice(-80)}}})},onText:(c,h)=>{o(_=>({textValues:{..._.textValues,[c]:h}}))},onToggleState:(c,h)=>{o(_=>({toggleValues:{..._.toggleValues,[c]:h}}))},onDisconnect:()=>{const{screen:c,active:h,picoIdeOrigin:_}=i();if(dl){dl=!1;return}if(c==="control"||c==="connection"||c==="create"||c==="ide"&&_==="control"){const b=h?{deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:b})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const c=zg(),h=_f();o({user:c,savedDevices:h,splashTarget:c?"dashboard":"intro"})},finishSplash:()=>{const c=i().splashTarget;o({screen:c??"intro"})},createUser:c=>{const h=c.trim();if(!h)return;const _={username:h,userID:Cg()};Xh(_),o({user:_,screen:"dashboard"})},findDevice:async()=>{try{const c=await Kg();await i().connectToDevice(c)}catch(c){c instanceof Error&&c.name!=="NotFoundError"&&u("error",c.message)}},connectToDevice:async(c,h)=>{var b,v;const _=i().user;if(!(!_||!ne)){dl=!1,o({screen:"connection",connecting:{name:rf(c.name)||(h==null?void 0:h.deviceName)||"Pico",iconID:(h==null?void 0:h.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await ne.connect(c);const y=await ne.runHandshake(_),S=c.id,N=rf(c.name)||(h==null?void 0:h.deviceName)||"Pico";if(y.kind==="denied"){const H=`Du kan ikke forbinde, fordi ${((b=y.ownerName)==null?void 0:b.trim())||((v=h==null?void 0:h.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;u("warning",H),s(H),o({screen:"dashboard",connecting:null}),await ne.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:S,deviceName:N,iconID:0,canEdit:!0,canOthersConnect:!1,canOthersEdit:!1,isOwnedByMe:!0,ownerName:_.username,gridCols:Ca,gridRows:Ii},screen:"create"});return}const j={deviceID:S,deviceName:N,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?_.username:y.ownerName??(h==null?void 0:h.ownerName)};o({savedDevices:Iu(j)});const F=await ne.requestLayout(),Q=Qh(F),le=Zh(F);o({layout:le,sliderValues:{},toggleValues:Jh(le,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:S,deviceName:N,iconID:y.iconID,canEdit:y.canEdit,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?_.username:y.ownerName??(h==null?void 0:h.ownerName),gridCols:Q.cols,gridRows:Q.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const S=y instanceof Error?y.message:"Forbindelsen mislykkedes.";u("error",S),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await ne.disconnect().catch(()=>{})}}},finishCreate:async(c,h,_,b,v)=>{const{user:y,active:S}=i();if(!(!y||!S||!ne))try{ne.setBusy(!0),await ne.create(y,c,h,_,b,v),ne.setBusy(!1);const N={deviceID:S.deviceID,deviceName:S.deviceName,deviceIconID:c,canOthersConnect:h,canOthersEdit:h&&_,isOwnedByMe:!0,ownerName:y.username};o({savedDevices:Iu(N)});const j=await ne.requestLayout(),F=Qh(j),Q=Zh(j);o({layout:Q,sliderValues:{},toggleValues:Jh(Q,i().toggleValues),radarPings:{},textValues:{},active:{...S,iconID:c,canEdit:!0,canOthersConnect:h,canOthersEdit:h&&_,ownerName:y.username,gridCols:F.cols,gridRows:F.rows},screen:"control"})}catch(N){ne.setBusy(!1);const j=N instanceof Error?N.message:"Oprettelse mislykkedes.";u("error",j),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await ne.disconnect().catch(()=>{})}},saveDeviceSettings:async(c,h,_,b,v)=>{const{active:y,user:S}=i();if(!(!y||!ne||!y.isOwnedByMe))try{ne.setBusy(!0),await ne.updateDeviceSettings(c,h,_,b,v,S==null?void 0:S.username);const N={...y,iconID:c,canEdit:!0,canOthersConnect:h,canOthersEdit:h&&_,ownerName:(S==null?void 0:S.username)??y.ownerName,gridCols:b,gridRows:v},j={deviceID:y.deviceID,deviceName:y.deviceName,deviceIconID:c,canOthersConnect:h,canOthersEdit:h&&_,isOwnedByMe:!0,ownerName:(S==null?void 0:S.username)??y.ownerName};o({active:N,savedDevices:Iu(j)}),s("Enhedsindstillinger gemt.")}catch(N){u("error",N instanceof Error?N.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ne.setBusy(!1)}},cancelCreate:async()=>{ne&&await ne.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{dl=!0,ne&&await ne.disconnect().catch(()=>{}),dl=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:c=>{o({savedDevices:Hg(c)})},clearSavedDevices:()=>{Bg(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{dl=!0,ne!=null&&ne.connected&&await ne.disconnect().catch(()=>{}),Lg(),window.location.reload()},updateUsername:c=>{const h=i().user,_=c.trim();if(!h||!_)return;const b={...h,username:_};Xh(b),o(v=>{var S;const y=v.savedDevices.map(N=>N.isOwnedByMe?{...N,ownerName:_}:N);return To(y),{user:b,active:(S=v.active)!=null&&S.isOwnedByMe?{...v.active,ownerName:_}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},openPicoIde:()=>{const c=i().screen==="control"&&!!(ne!=null&&ne.connected);o(h=>({screen:"ide",picoIdeOrigin:c?"control":"dashboard",active:c?h.active:null,layout:c?h.layout:[],sliderValues:c?h.sliderValues:{},toggleValues:c?h.toggleValues:{},radarPings:c?h.radarPings:{},textValues:c?h.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:c,active:h}=i();o({screen:c==="control"&&h&&(ne!=null&&ne.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ne!=null&&ne.connected),bleListFiles:async()=>ne!=null&&ne.connected?ne.listFiles("/"):[],bleReadText:async(c,h,_)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");return ne.readText(c,h,_)},bleWriteText:async(c,h,_)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.writeText(c,h,_)},bleDeleteFile:async c=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.deleteFile(c)},bleRestart:async()=>{ne!=null&&ne.connected&&await ne.restart()},bleRestartAndReconnect:async(c="control")=>{const{active:h}=i();if(!(ne!=null&&ne.connected)||!h)return!1;const _={deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName};dl=!0,u("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ne.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:_.deviceName,iconID:_.deviceIconID}});for(let b=0;b<12&&(ne!=null&&ne.connected);b+=1)await Wh(250);ne!=null&&ne.connected||(dl=!1);for(let b=1;b<=8;b+=1){await Wh(b===1?1200:850);try{const y=(await Dp()).find(S=>S.id===_.deviceID);if(!y){o({progress:{value:Math.min(88,20+b*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+b*8),label:`Genforbinder (${b}/8)...`}}),await i().connectToDevice(y,_),c==="ide"&&o(S=>({screen:"ide",picoIdeOrigin:"control",active:S.active,layout:S.layout,sliderValues:S.sliderValues,toggleValues:S.toggleValues,radarPings:S.radarPings,textValues:S.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){u("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),dl=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:_}),!1},reconnectLostDevice:async()=>{var h;const c=i().connectionLost;if(c){o({connectionLost:null});try{if((h=navigator.bluetooth)!=null&&h.getDevices){const b=(await navigator.bluetooth.getDevices()).find(v=>v.id===c.deviceID);if(b){await i().connectToDevice(b,c);return}}}catch{}u("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:c=>ne==null?void 0:ne.enqueueButton(c),sendSlider:(c,h)=>{o(_=>({sliderValues:{..._.sliderValues,[c]:h}})),ne==null||ne.enqueueSlider(c,h)},sendToggle:(c,h)=>{o(_=>({toggleValues:{..._.toggleValues,[c]:h}})),ne==null||ne.enqueueToggle(c,h)},saveLayout:async c=>{if(ne)try{ne.setBusy(!0),await ne.saveLayout(c),o({layout:c,editMode:!1})}catch(h){u("error",h instanceof Error?h.message:"Kunne ikke gemme layout.")}finally{ne.setBusy(!1)}},setEditMode:c=>o({editMode:c,sideMenuOpen:!1,menuPage:null}),setDashboardPage:c=>o({dashboardPage:c}),toggleSideMenu:c=>o(h=>({sideMenuOpen:c??!h.sideMenuOpen})),toggleDebugger:c=>o(h=>({debuggerOpen:c??!h.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:c=>o({menuPage:c,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(c,h)=>u(c,h),askConfirm:c=>o({confirmDialog:c}),closeConfirm:()=>o({confirmDialog:null}),showToast:c=>s(c),dismissToast:()=>{Gi&&clearTimeout(Gi),o({toast:null})}}}),Mo="./",zp=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function Ba(o){const i=o>=0&&o<zp.length?o:0;return`${Mo}device-icons/${i}.png`}const fb=`${Mo}art/logo.png`,db=`${Mo}art/Teknologiskolen_logo.png`,mb=`${Mo}art/logo_teknologiskolen_white.png`,hb={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function zn({name:o,size:i=24,className:u}){return f.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:u,"aria-hidden":"true",children:hb[o]})}const pb=1850,_b=450;function gb(){const o=J(s=>s.splashTarget),i=J(s=>s.finishSplash),u=o?"splash-screen-animation splash-ready":"splash-pending";return V.useEffect(()=>{if(!o)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches?_b:pb,h=window.setTimeout(i,c);return()=>window.clearTimeout(h)},[i,o]),f.jsxs("div",{className:`screen splash-screen ${u}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:fb,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function ep(){const o=J(c=>c.createUser),[i,u]=V.useState(""),s=i.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:db,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${s?"filled":""}`,children:[f.jsx("input",{id:"username",value:i,onChange:c=>u(c.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(i),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:Ki})]})}function gf({title:o,onMenu:i}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:f.jsx(zn,{name:"menu"})})]})})}function yn({title:o,onClose:i,children:u,closeVariant:s="plain"}){const c=s==="circle",h=V.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:_=>{h.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&h.current&&i(),h.current=!1},children:f.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${c?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:f.jsx(zn,{name:c?"delete":"close",size:c?30:24})})]}),u]})})}function np(){const o=J(j=>j.savedDevices),i=J(j=>j.toggleSideMenu),u=J(j=>j.findDevice),s=J(j=>j.removeSavedDevice),c=J(j=>j.askConfirm),h=J(j=>j.dashboardPage),_=J(j=>j.setDashboardPage),b=xb(),[v,y]=V.useState(null),S=Ro(),N=o.filter(j=>h==="mine"?j.isOwnedByMe:!j.isOwnedByMe).sort(vb);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(gf,{title:"Hovedmenu",onMenu:()=>i()}),f.jsxs("div",{className:"content dash-content",children:[!S&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:N.length===0?f.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):N.map(j=>f.jsx(bb,{device:j,disabled:!S,onConnect:()=>b(j),onSettings:()=>y(j)},j.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>u(),disabled:!S,"aria-label":"Find enhed",children:f.jsx(zn,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:Ki}),v&&f.jsx(yn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:Ba(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(_o,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(_o,{label:"Ejer",value:yb(v)}),f.jsx(_o,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(_o,{label:"Andre må redigere",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!S,onClick:()=>{const j=v;y(null),b(j)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>c({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function bb({device:o,disabled:i,onConnect:u,onSettings:s}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:u,disabled:i,children:[f.jsx("img",{className:"device-tile-icon",src:Ba(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:f.jsx(zn,{name:"settings"})})]})}function _o({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function yb(o){var i;return o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger"}function vb(o,i){return o.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function xb(){const o=J(s=>s.connectToDevice),i=J(s=>s.findDevice),u=J(s=>s.log);return async s=>{const h=(await Dp()).find(_=>_.id===s.deviceID);h?await o(h,s):(u("info","Genforbind: vælg enheden i browserens liste."),await i())}}function Sb(){const o=J(u=>u.connecting),i=J(u=>u.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:Ba((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function Bp({selected:o,onSelect:i,onClose:u}){return f.jsx(yn,{title:"Vælg Enhedens Ikon",onClose:u,children:f.jsx("div",{className:"icon-grid",children:zp.map(s=>f.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{i(s.id),u()},"aria-label":s.label,children:f.jsx("img",{src:Ba(s.id),alt:""})},s.id))})})}function Eb(){const o=J(_e=>_e.finishCreate),i=J(_e=>_e.cancelCreate),[u,s]=V.useState(0),[c,h]=V.useState(!1),[_,b]=V.useState(!1),[v,y]=V.useState(!1),[S,N]=V.useState(Ca),[j,F]=V.useState(Ii),[Q,le]=V.useState(!1),U=_e=>Number.isFinite(_e)?Math.max(Da,Math.min(ja,Math.round(_e))):Ca;async function H(){le(!0),await o(u,_,_&&v,U(S),U(j))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:Ba(u),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(zn,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:_?"":"active",onClick:()=>b(!1),children:"Privat"}),f.jsx("button",{type:"button",className:_?"active":"",onClick:()=>b(!0),children:"Offentlig"})]}),_&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Da,max:ja,value:Number.isNaN(S)?"":S,onChange:_e=>N(parseInt(_e.target.value,10)),onBlur:()=>N(U(S))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Da,max:ja,value:Number.isNaN(j)?"":j,onChange:_e=>F(parseInt(_e.target.value,10)),onBlur:()=>F(U(j))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:Q,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:H,disabled:Q,children:Q?"Opretter...":"Opret"})]})]}),c&&f.jsx(Bp,{selected:u,onSelect:s,onClose:()=>h(!1)}),f.jsx("span",{className:"version",children:Ki})]})}const za=8;function vo(o){return Math.max(5,Math.min(22,o))}function wo(o,i,u){const s=Math.max(1,o.length),c=(i-za*2)/(s*.58),h=(u-za*2)*.48;return vo(Math.min(c,h))}function wb(o,i,u,s,c){const h=o.trim().split(/\s+/).filter(Boolean),_=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),b=c?vo(Math.min(i/4.6,u/4.6,12)):0,v=c?b+za:za;if(s){const N=Math.max(1,u-v*2);return{fontSize:vo(Math.min(i*.48,N/(_*1.04))),endFontSize:b,centerInset:c?{top:v,bottom:v}:{}}}const y=Math.max(1,i-v*4.2);return{fontSize:vo(Math.min(u*.42,y/(_*.58))),endFontSize:b,centerInset:c?{left:v*2.1,right:v*2.1}:{}}}function kb({control:o,rect:i,disabled:u,latestValue:s,toggleValue:c,radarPings:h=[],textValue:_,onButton:b,onSlider:v,onToggle:y}){const S={left:i.cx,top:i.cy,width:i.width,height:i.height};if(o.type==="button")return f.jsx("div",{className:"control",style:S,children:f.jsx("button",{className:"control-button",type:"button",disabled:u,style:{width:"100%",height:"100%",fontSize:wo(o.name,i.width,i.height)},onPointerDown:N=>{u||(N.preventDefault(),b(o.name))},children:o.name})});if(o.type==="toggle"){const N=!!c;return f.jsx("div",{className:"control",style:S,children:f.jsx("button",{className:`control-toggle ${N?"on":""}`,type:"button",disabled:u,"aria-pressed":N,style:{width:"100%",height:"100%",fontSize:wo(o.name,i.width,i.height)},onPointerDown:j=>{u||(j.preventDefault(),y(o.name,!N))},children:f.jsx("span",{children:o.name})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:S,children:f.jsx(Up,{control:o,pings:h,width:i.width,height:i.height})}):o.type==="text"?f.jsx("div",{className:"control",style:S,children:f.jsx(Lp,{message:_??o.name,width:i.width,height:i.height})}):f.jsx("div",{className:"control",style:S,children:f.jsx(Lb,{control:o,disabled:u,latestValue:s,onSlider:v,width:i.width,height:i.height})})}function Nb(o,i,u){const s=o.trim()||" ",h=s.split(/\s+/).filter(Boolean).reduce((N,j)=>Math.max(N,j.length),1),_=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(h*1.9)))),b=Math.max(1,i-za*3),v=Math.max(1,u-za*3),y=b/(h*.58),S=v/(_*1.16);return Math.max(7,Math.min(24,y,S))}function Lp({message:o,width:i,height:u}){const s=o.trim()||"...";return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:Nb(s,i,u)},children:f.jsx("span",{children:s})})}function Up({control:o,pings:i,width:u,height:s,preview:c=!1}){const[,h]=V.useState(0),_=Math.max(120,o.radarFadeMs??1200),b=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=rt(b),S=rt(v),N=Math.abs(v-b)>=360||y===S&&b!==v,j=Math.max(1,o.radarMaxDistance??200),F=Date.now(),Q=i[i.length-1],le=o.rotation,U=rt(y+le),H=rt(S+le),_e=Ob(y,S),oe=((Q==null?void 0:Q.angle)??_e)+le,xe=c?[{id:"preview",angle:_e,distance:j*.62,createdAt:F}]:i.filter(O=>F-O.createdAt<=_),fe=!N,ke=Math.max(8,Math.min(12,Math.min(u,s)*.16)),ee=0,W=0,be=1,ge=N?{x:-1.12,y:-1.12,width:2.24,height:2.24}:Mb(U,H),ve=N?"":Tb(ee,W,be,U,H),ae=ap(b),Ve=ap(v),Ae=fe?Db(U,H,ge,u,s,ae,Ve,ke):null;V.useEffect(()=>{if(c||i.length===0)return;const O=window.setInterval(()=>h(Y=>Y+1),120);return()=>window.clearInterval(O)},[_,i.length,c]);const Fe=Et(ee,W,be,oe);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:u,height:s,viewBox:`${ge.x} ${ge.y} ${ge.width} ${ge.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[N?f.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:W,r:be}):f.jsx("path",{className:"radar-sector-fill",d:ve}),[.25,.5,.75,1].map(O=>N?f.jsx("circle",{className:"radar-ring",cx:ee,cy:W,r:be*O},O):f.jsx("path",{className:"radar-ring",d:Rb(ee,W,be*O,U,H)},O)),!N&&f.jsx(tp,{cx:ee,cy:W,radius:be,angle:U}),!N&&f.jsx(tp,{cx:ee,cy:W,radius:be,angle:H}),f.jsx("line",{className:"radar-sweep",x1:ee,y1:W,x2:Fe.x,y2:Fe.y}),xe.map(O=>{const Y=c?0:F-O.createdAt,ie=Math.max(0,1-Y/_),Ee=Math.max(0,Math.min(j,O.distance)),de=Et(ee,W,be*(Ee/j),O.angle+le);return f.jsx("circle",{className:"radar-ping",cx:de.x,cy:de.y,r:Math.max(.025,Math.min(ge.width,ge.height)*.025),opacity:ie},O.id)})]}),fe&&Ae&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:Ae.min.x,top:Ae.min.y,fontSize:ke},children:ae}),f.jsx("span",{className:"radar-angle-label",style:{left:Ae.max.x,top:Ae.max.y,fontSize:ke},children:Ve})]})]})}function tp({cx:o,cy:i,radius:u,angle:s}){const c=Et(o,i,u,s);return f.jsx("line",{className:"radar-boundary",x1:o,y1:i,x2:c.x,y2:c.y})}function Et(o,i,u,s){const c=(rt(s)-90)*Math.PI/180;return{x:o+Math.cos(c)*u,y:i+Math.sin(c)*u}}function Tb(o,i,u,s,c){const h=Et(o,i,u,s),_=Et(o,i,u,c),b=bf(s,c)>180?1:0;return`M ${o} ${i} L ${h.x} ${h.y} A ${u} ${u} 0 ${b} 1 ${_.x} ${_.y} Z`}function Rb(o,i,u,s,c){const h=Et(o,i,u,s),_=Et(o,i,u,c),b=bf(s,c)>180?1:0;return`M ${h.x} ${h.y} A ${u} ${u} 0 ${b} 1 ${_.x} ${_.y}`}function bf(o,i){const u=rt(o),s=rt(i),c=s>=u?s-u:360-u+s;return c===0?360:c}function Mb(o,i){const u=[{x:0,y:0},Et(0,0,1,o),Et(0,0,1,i)];for(const S of[0,90,180,270])Ab(S,o,i)&&u.push(Et(0,0,1,S));const s=Math.min(...u.map(S=>S.x)),c=Math.max(...u.map(S=>S.x)),h=Math.min(...u.map(S=>S.y)),_=Math.max(...u.map(S=>S.y)),b=Math.max(.1,c-s),v=Math.max(.1,_-h),y=Math.max(b,v)*.24;return{x:s-y,y:h-y,width:b+y*2,height:v+y*2}}function Ab(o,i,u){const s=rt(i),c=rt(o),h=bf(i,u),_=rt(c-s);return _>=0&&_<=h}function Db(o,i,u,s,c,h,_,b){const y=Et(0,0,1.1,o),S=Et(0,0,1.1,i);return{min:lp(y,u,s,c,h,b),max:lp(S,u,s,c,_,b)}}function jb(o,i,u,s){return{x:(o.x-i.x)/i.width*u,y:(o.y-i.y)/i.height*s}}function lp(o,i,u,s,c,h){const _=jb(o,i,u,s),b=Math.max(10,c.length*h*.62),v=h,y=7;return{x:rp(_.x,b/2+y,Math.max(b/2+y,u-b/2-y)),y:rp(_.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function rp(o,i,u){return Math.max(i,Math.min(u,o))}function ap(o){return`${Math.round(o)}`}function rt(o){return Number.isFinite(o)?(o%360+360)%360:0}function Ob(o,i){const u=rt(o),s=rt(i),c=s>=u?s-u:360-u+s;return rt(u+c/2)}function Cb(o,i){if(!i)return o;const u=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:u.map((s,c)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((h,_)=>f.jsx("span",{children:h},`${h}-${_}`))},`${s}-${c}`))})}function zb(o){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},u=4;return o===0?{low:{...i,left:u,top:0,bottom:0},high:{...i,right:u,top:0,bottom:0}}:o===180?{low:{...i,right:u,top:0,bottom:0},high:{...i,left:u,top:0,bottom:0}}:o===90?{low:{...i,bottom:u,left:0,right:0},high:{...i,top:u,left:0,right:0}}:{low:{...i,top:u,left:0,right:0},high:{...i,bottom:u,left:0,right:0}}}function Bb({name:o,vertical:i,rotation:u,color:s,fontSize:c,endFontSize:h,centerInset:_,lowLabel:b,highLabel:v,showEnds:y}){const S=y?zb(u):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[f.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:c,textAlign:"center",pointerEvents:"none"},children:Cb(o,i)}),S&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...S.low,fontWeight:800,fontSize:h},children:b}),f.jsx("div",{style:{...S.high,fontWeight:800,fontSize:h},children:v})]})]})}function Hp({name:o,rotation:i,width:u,height:s,value:c,showEnds:h=!1,fillColor:_="var(--red)",lowLabel:b="0",highLabel:v="100"}){const y=i===90||i===270,{fontSize:S,endFontSize:N,centerInset:j}=wb(o,u,s,y,h);let F,Q;i===0?(F={left:0,top:0,bottom:0,width:`${c}%`},Q={left:0,top:0}):i===180?(F={right:0,top:0,bottom:0,width:`${c}%`},Q={right:0,top:0}):i===90?(F={left:0,right:0,bottom:0,height:`${c}%`},Q={left:0,bottom:0}):(F={left:0,right:0,top:0,height:`${c}%`},Q={left:0,top:0});const le=U=>f.jsx(Bb,{name:o,vertical:y,rotation:i,color:U,fontSize:S,endFontSize:N,centerInset:j,lowLabel:b,highLabel:v,showEnds:h});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${u}px`,height:`${s}px`},children:le("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...F},children:f.jsx("div",{style:{position:"absolute",width:`${u}px`,height:`${s}px`,...Q},children:le("var(--white)")})})]})}function Lb({control:o,disabled:i,latestValue:u,onSlider:s,width:c,height:h}){const _=V.useRef(null),b=o.sliderMin??0,v=o.sliderMax??100,[y,S]=V.useState(()=>u===void 0?ip(o.sliderRecenter??"none"):sp(u,b,v)),N=V.useRef(null),j=o.rotation;V.useEffect(()=>{u!==void 0&&(S(sp(u,b,v)),N.current=u)},[u,b,v]);function F(H){const _e=_.current;if(!_e)return 0;const oe=_e.getBoundingClientRect();let xe;return j===0?xe=(H.clientX-oe.left)/oe.width:j===180?xe=1-(H.clientX-oe.left)/oe.width:j===90?xe=1-(H.clientY-oe.top)/oe.height:xe=(H.clientY-oe.top)/oe.height,Math.max(0,Math.min(1,xe))}function Q(H){i||le(F(H))}function le(H){const _e=Math.round(H*100),oe=Math.round(b+(v-b)*H);S(_e),oe!==N.current&&(N.current=oe,s(o.name,oe))}function U(){const H=o.sliderRecenter??"none";i||H==="none"||le(ip(H)/100)}return f.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),Q(H))},onPointerMove:H=>{H.buttons!==0&&Q(H)},onPointerUp:U,onPointerCancel:U,onLostPointerCapture:U,children:f.jsx(Hp,{name:o.name,rotation:j,width:c,height:h,value:y,showEnds:!0,lowLabel:String(b),highLabel:String(v)})})}function ip(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function sp(o,i,u){return u===i?0:Math.max(0,Math.min(100,Math.round((o-i)/(u-i)*100)))}const Ub={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},Hb=["button","slider","toggle","radar","text"];function Gb({unplaced:o,onAdd:i,onClose:u}){const s=V.useMemo(()=>Hb.filter(b=>o.some(v=>v.type===b)),[o]),[c,h]=V.useState(s[0]??"button"),_=o.filter(b=>b.type===c);return V.useEffect(()=>{s.length>0&&!s.includes(c)&&h(s[0])},[s,c]),f.jsxs(yn,{title:"Tilføj kontrol",onClose:u,children:[s.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:s.map(b=>f.jsx("button",{type:"button",className:c===b?"active":"",onClick:()=>h(b),children:Ub[b]},b))}),f.jsx("div",{className:"add-lists",children:s.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(b=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(b.name),children:[f.jsx("span",{children:b.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(zn,{name:"plus",size:22})})]},b.name))})]})}function Gp(o){const[i,u]=V.useState({w:0,h:0}),s=V.useRef(null),c=V.useRef(null);return V.useLayoutEffect(()=>{var v;const h=o.current;if(s.current===h)return;if((v=c.current)==null||v.disconnect(),c.current=null,s.current=h,!h){u(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const _=()=>{const y={w:h.clientWidth,h:h.clientHeight};u(S=>S.w===y.w&&S.h===y.h?S:y)};_();const b=new ResizeObserver(_);b.observe(h),c.current=b}),V.useEffect(()=>()=>{var h;(h=c.current)==null||h.disconnect(),c.current=null,s.current=null},[]),i}function Oa(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const op=4,cp=5;function up(o){if(!Oa(o))return null;const i=o.centerX2/2,u=o.centerY2/2;return{x0:i-o.spanX/2,x1:i+o.spanX/2,y0:u-o.spanY/2,y1:u+o.spanY/2}}function Vb(o,i,u=.02){return o.x0<i.x1-u&&i.x0<o.x1-u&&o.y0<i.y1-u&&i.y0<o.y1-u}function fp(o,i){const u=$i(o,i);if(!u||o.spanX===null||o.spanY===null)return o;const s=yo(u.cx,u.cy,o.spanX,o.spanY,i);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function dp(o,i){return Math.max(1,Math.min(i.cols-1,o))}function mp(o,i){return Math.max(1,Math.min(i.rows-1,o))}function Yb(){const o=J(D=>D.layout),i=J(D=>D.active),u=J(D=>D.saveLayout),s=J(D=>D.setEditMode),c=J(D=>D.askConfirm),h=!!(i!=null&&i.canEdit),[_,b]=V.useState(()=>o.map(D=>({...D}))),[v,y]=V.useState(null),[S,N]=V.useState(!1),[j,F]=V.useState(null),[Q,le]=V.useState(null),[U,H]=V.useState(!1),_e=V.useRef(null),oe=Gp(_e),xe=oe.w>0&&oe.h>0,fe=jp(oe.w,oe.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),ke=V.useMemo(()=>xe?Wg(fe):[],[fe,xe]),ee=_.filter(Oa),W=_.filter(D=>!Oa(D)),be=V.useMemo(()=>{const D=new Set;for(let I=0;I<ee.length;I+=1)for(let Z=I+1;Z<ee.length;Z+=1){const K=up(ee[I]),Ie=up(ee[Z]);K&&Ie&&Vb(K,Ie)&&(D.add(ee[I].name),D.add(ee[Z].name))}return D},[ee]),ge=be.size>0,ve=_.find(D=>D.name===v)??null,ae=V.useMemo(()=>hp(_)!==hp(o),[_,o]),Ve=V.useMemo(()=>{if(!j||!Q)return null;const D=_.find(K=>K.name===j);if(!D||D.spanX===null||D.spanY===null)return null;const I=yo(Q.cx,Q.cy,D.spanX,D.spanY,fe),Z=$i({...D,centerX2:I.centerX2,centerY2:I.centerY2},fe);return Z?{name:D.name,rect:Z}:null},[_,j,Q,fe]);function Ae(D,I){b(Z=>Z.map(K=>K.name===D?I(K):K))}function Fe(D,I){D.stopPropagation(),y(I.name);const Z=$i(I,fe);Z&&(F(I.name),le({cx:Z.cx,cy:Z.cy}),D.currentTarget.setPointerCapture(D.pointerId))}function O(D){if(!j)return;const I=_e.current;if(!I)return;const Z=I.getBoundingClientRect(),K=I.clientWidth/Z.width,Ie=I.clientHeight/Z.height;le({cx:Math.max(0,Math.min(I.clientWidth,(D.clientX-Z.left)*K)),cy:Math.max(0,Math.min(I.clientHeight,(D.clientY-Z.top)*Ie))})}function Y(){if(j&&Q){const D=_.find(I=>I.name===j);if(D&&D.spanX!==null&&D.spanY!==null){const I=yo(Q.cx,Q.cy,D.spanX,D.spanY,fe);Ae(j,Z=>({...Z,centerX2:I.centerX2,centerY2:I.centerY2}))}}F(null),le(null)}function ie(D){Ae(D,I=>I.spanX===null||I.spanY===null?{...I,rotation:(I.rotation+270)%360}:fp({...I,rotation:(I.rotation+270)%360,spanX:dp(I.spanY,fe),spanY:mp(I.spanX,fe)},fe))}function Ee(D,I,Z){Ae(D,K=>{if(K.spanX===null||K.spanY===null)return K;const Ie=I==="x"?dp(K.spanX+Z,fe):K.spanX,Oe=I==="y"?mp(K.spanY+Z,fe):K.spanY;return fp({...K,spanX:Ie,spanY:Oe},fe)})}function de(D){Ae(D,I=>({...I,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function w(D){N(!1);const I=_.find(K=>K.name===D);if(!I)return;const Z=yo(fe.areaW/2,fe.areaH/2,op,cp,fe);Ae(D,()=>({...I,spanX:op,spanY:cp,rotation:0,centerX2:Z.centerX2,centerY2:Z.centerY2})),y(D)}async function L(){ge||(H(!0),await u(_),H(!1))}function P(){if(!ae){s(!1);return}c({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ve&&Oa(ve)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:D=>D.stopPropagation(),children:[f.jsx(Vi,{label:"⟲",title:"Roter",onClick:()=>ie(ve.name)}),f.jsx(Vi,{label:"W−",title:"Gør smallere",onClick:()=>Ee(ve.name,"x",-1),disabled:ve.spanX===null||ve.spanX<=1}),f.jsx(Vi,{label:"W+",title:"Gør bredere",onClick:()=>Ee(ve.name,"x",1),disabled:ve.spanX===null||ve.spanX>=fe.cols-1}),f.jsx(Vi,{label:"H−",title:"Gør lavere",onClick:()=>Ee(ve.name,"y",-1),disabled:ve.spanY===null||ve.spanY<=1}),f.jsx(Vi,{label:"H+",title:"Gør højere",onClick:()=>Ee(ve.name,"y",1),disabled:ve.spanY===null||ve.spanY>=fe.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>de(ve.name),"aria-label":"Slet",children:f.jsx(zn,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:_e,style:{touchAction:"none"},onPointerMove:O,onPointerUp:Y,onPointerDown:()=>y(null),children:xe&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:fe.areaW,height:fe.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:ke.map((D,I)=>f.jsx("circle",{cx:D.x,cy:D.y,r:2.5,fill:"rgba(198,80,78,0.45)"},I))}),Ve&&f.jsx("div",{className:"snap-preview",style:{left:Ve.rect.cx,top:Ve.rect.cy,width:Ve.rect.width,height:Ve.rect.height}}),ee.map(D=>{const I=j===D.name&&Q,Z=$i(D,fe);if(!Z)return null;const K=I?Q.cx:Z.cx,Ie=I?Q.cy:Z.cy,Oe={left:K,top:Ie,width:Z.width,height:Z.height,outline:v===D.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${be.has(D.name)?"colliding":""}`,style:Oe,onPointerDown:at=>Fe(at,D),children:D.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:wo(D.name,Z.width,Z.height)},children:D.name}):D.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:wo(D.name,Z.width,Z.height)},children:f.jsx("span",{children:D.name})}):D.type==="radar"?f.jsx(Up,{control:D,pings:[],width:Z.width,height:Z.height,preview:!0}):D.type==="text"?f.jsx(Lp,{message:D.name,width:Z.width,height:Z.height}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(Hp,{name:D.name,rotation:D.rotation,width:Z.width,height:Z.height,value:50,showEnds:!0,lowLabel:String(D.sliderMin??0),highLabel:String(D.sliderMax??100),fillColor:be.has(D.name)?"var(--disabled)":"var(--red)"})})},D.name)}),h&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:D=>D.stopPropagation(),onClick:()=>N(!0),"aria-label":"Tilføj kontrol",children:f.jsx(zn,{name:"plus",size:24})}),U&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:P,disabled:U,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:L,disabled:ge||U,children:U?"Gemmer...":"Gem"})]}),S&&f.jsx(Gb,{unplaced:W,onAdd:w,onClose:()=>N(!1)})]})}function hp(o){return JSON.stringify(o.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function Vi({label:o,title:i,disabled:u,onClick:s}){return f.jsx("button",{type:"button","aria-label":i,title:i,disabled:u,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:u?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function qb(){const o=J(U=>U.layout),i=J(U=>U.editMode),u=J(U=>U.active),s=J(U=>U.sliderValues),c=J(U=>U.toggleValues),h=J(U=>U.radarPings),_=J(U=>U.textValues),b=J(U=>U.toggleSideMenu),v=J(U=>U.sendButton),y=J(U=>U.sendSlider),S=J(U=>U.sendToggle),N=V.useRef(null),j=Gp(N),F=jp(j.w,j.h,u==null?void 0:u.gridCols,u==null?void 0:u.gridRows),Q=j.w>0&&j.h>0,le=o.filter(Oa);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(gf,{title:"Kontrol Panel",onMenu:()=>b()}),i?f.jsx(Yb,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:N,children:Q?le.map(U=>{const H=$i(U,F);return H?f.jsx(kb,{control:U,rect:H,disabled:!1,latestValue:U.type==="slider"?s[U.name]:void 0,toggleValue:U.type==="toggle"?c[U.name]:void 0,radarPings:U.type==="radar"?h[U.name]:void 0,textValue:U.type==="text"?_[U.name]:void 0,onButton:v,onSlider:y,onToggle:S},U.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const Xb="",$b="",pp="",Or="";function Zu(o){return new Promise(i=>setTimeout(i,o))}class Kb{constructor(i){this.transport=i}async interrupt(){await this.transport.write(pp),await Zu(80),await this.transport.write(pp)}async friendlyRepl(){await this.transport.write($b)}async softReset(){await this.transport.write(Or)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(i){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await Zu(80),await this.transport.write(`\r
`),await Zu(40),!(await this.collectUntil(async()=>{await this.transport.write(Xb)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,u=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Or)},c=>c.includes(`${Or}${Or}`)||c.includes(`${Or}>`),u);return await this.friendlyRepl().catch(()=>{}),Ib(s)}collectUntil(i,u,s){return new Promise((c,h)=>{let _="",b=null;const v=setTimeout(()=>{b==null||b(),h(new Error("Timeout ved USB REPL kommando."))},s);b=this.transport.addDataListener(y=>{_+=y,u(_)&&(clearTimeout(v),b==null||b(),c(_))}),i().catch(y=>{clearTimeout(v),b==null||b(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}}function Ib(o){const i=o.indexOf("OK"),u=o.indexOf(Or,i>=0?i:0),s=u>=0?o.indexOf(Or,u+1):-1;if(i<0||u<0)return{output:o.trim(),error:"",raw:o};const c=o.slice(i+2,u).replace(/^\r?\n/,"").trimEnd(),h=s>=0?o.slice(u+1,s).trim():"";return{output:c,error:h,raw:o}}const Fb=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Qb=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Wl=Qb.flatMap(({board:o,firmwareName:i})=>Fb.map(({version:u,date:s,stamp:c,tag:h})=>{const _=`${i}-${c}-${h}.uf2`;return{board:o,version:u,date:s,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),Pu=512,Wu=`import builtins as _pkp_builtins
`;function ml(o){return JSON.stringify(o)}function Zb(o){return`bytes.fromhex(${JSON.stringify([...o].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function Pb(o,i){return`${o==="/"?"":o.replace(/\/$/,"")}/${i}`}class Wb{constructor(i){this.repl=i}async list(i="/"){const u=`
import os
base = ${ml(i)}
for name in os.listdir(base):
    p = (${ml(i)}.rstrip('/') + '/' + name) if ${ml(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(u);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(c=>c.trim()).filter(Boolean).map(c=>{const[h,_,b]=c.split("	"),v=_==="dir"||_==="file"?_:"unknown",y=parseInt(b??"",10);return{name:h,path:Pb(i,h),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const u=`
import sys
${Wu}with _pkp_builtins.open(${ml(i)}, 'rb') as f:
    while True:
        b = f.read(${Pu})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(u,1e4);if(s.error)throw new Error(s.error);const c=s.output.replace(/\s+/g,"");return new TextDecoder().decode(Jb(c))}async writeText(i,u,s){const c=new TextEncoder().encode(u);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${Wu}_pkp_builtins.open(${ml(i)}, 'wb').close()`),c.length===0){s==null||s(100,"Gemt på Pico");return}for(let h=0;h<c.length;h+=Pu){const _=c.slice(h,h+Pu),b=`
${Wu}with _pkp_builtins.open(${ml(i)}, 'ab') as f:
    f.write(${Zb(_)})
`,v=await this.repl.exec(b,1e4);if(v.error)throw new Error(v.error);const y=Math.min(h+_.length,c.length);s==null||s(10+Math.round(y/c.length*85),`Gemmer ${y}/${c.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(i,u,s,c={}){const h=`${i}.tmp`;if(await this.writeText(h,u,(b,v)=>s==null?void 0:s(Math.min(70,b*.7),v)),s==null||s(78,"Verificerer fil..."),await this.readText(h)!==u)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);if(s==null||s(88,"Udskifter fil..."),c.createBackup){const b=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,b).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(h,i),s==null||s(100,"Installeret på Pico")}async delete(i){const u=await this.repl.exec(`
import os
os.remove(${ml(i)})
`);if(u.error)throw new Error(u.error)}async nextBackupPath(i){const u=await this.list("/"),s=new Set(u.map(N=>N.path.toLowerCase())),c=i.replace(/\\/g,"/"),h=c.lastIndexOf("/"),_=h>=0?c.slice(0,h+1):"/",b=h>=0?c.slice(h+1):c.replace(/^\/+/,""),v=b.lastIndexOf("."),y=v>0?b.slice(0,v):b,S=v>0?b.slice(v):"";for(let N=1;N<1e3;N+=1){const j=`${_}${y}_backup${N}${S}`;if(!s.has(j.toLowerCase()))return j}return`${_}${y}_backup${Date.now()}${S}`}async rename(i,u){const s=await this.repl.exec(`
import os
os.rename(${ml(i)}, ${ml(u)})
`);if(s.error)throw new Error(s.error)}}function Jb(o){const i=new Uint8Array(Math.floor(o.length/2));for(let u=0;u<i.length;u+=1)i[u]=parseInt(o.slice(u*2,u*2+2),16);return i}const e0=`import ubluetooth\r
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
`,n0=`from machine import Pin, time_pulse_us\r
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
        return cms`,t0=`import array, time\r
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
`,l0=`import utime as time\r
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
`,r0=`# PicoFly.py\r
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
`,a0=`import machine\r
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
        self.initPCA()`,i0=`from machine import Pin\r
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
`,s0=`from machine import Pin\r
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
`,o0=`from machine import Pin, PWM, ADC\r
from BLEPeripheral import BLEPeripheral\r
from neopixel import Neopixel\r
from PicoFly import get_board\r
import utime as time\r
\r
# ============================================================\r
# Alarmstation med BLE kontrolpanel + servo door lock\r
#\r
# Hardware / pinout:\r
#   Fri NeoPixel LED:       GP16\r
#   PIR bevaegelsessensor:  GP15\r
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
pir = Pin(15, Pin.IN)\r
\r
water_power = Pin(0, Pin.OUT)\r
water_power.value(0)\r
water_signal = ADC(Pin(26))\r
\r
buzzer = PWM(Pin(14))\r
buzzer.duty_u16(0)\r
\r
free_led = Neopixel(1, 0, 16, "GRB")\r
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
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')`,c0=`from machine import Pin\r
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
`,Ma=[{id:"program:onboard-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med tænd/sluk-knapper og lysstyrke-slider.",kind:"program",content:l0},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:s0},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:c0},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:i0},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:o0},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:e0},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:a0},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:r0},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:n0},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:t0}],u0=11914;function f0(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function d0(){return f0()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class m0{constructor(i={}){ue(this,"port",null);ue(this,"reader",null);ue(this,"writer",null);ue(this,"readLoopDone",null);ue(this,"readLoopActive",!1);ue(this,"disconnecting",!1);ue(this,"buffer","");ue(this,"events");ue(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:u0}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var v,y;const i=this.connected||!!this.port||!!this.reader,u=this.port,s=this.reader,c=this.writer,h=this.readLoopDone,_=s==null?void 0:s.closed.catch(()=>{}),b=c==null?void 0:c.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}h&&await h.catch(()=>{}),await _;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(c==null?void 0:c.close()),await b}catch{try{await(c==null?void 0:c.abort("disconnect"))}catch{}}try{c==null||c.releaseLock()}catch{}this.writer===c&&(this.writer=null),u&&await u.close(),this.port===u&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var s,c,h;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((s=i.writable)==null?void 0:s.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const u=i.getInfo();(h=(c=this.events).onLog)==null||h.call(c,"success",`USB-forbindelse oprettet (${h0(u)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var c,h,_;this.readLoopActive=!0;const u=new TextDecoder;this.reader=((c=i.readable)==null?void 0:c.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:b,done:v}=await s.read();if(v)break;b&&this.consumeText(u.decode(b,{stream:!0}))}}catch(b){this.readLoopActive&&((_=(h=this.events).onLog)==null||_.call(h,"error",b instanceof Error?b.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var h,_;const u=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,c=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await c}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,u&&((_=(h=this.events).onDisconnect)==null||_.call(h))}consumeText(i){var u,s,c,h;(s=(u=this.events).onData)==null||s.call(u,i);for(const _ of this.dataListeners)_(i);for(this.buffer+=i;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),b=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(h=(c=this.events).onLine)==null||h.call(c,b)}}}function h0(o){const i=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",u=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${u}`}const Vp=15e3,_p=64*1024,gp=1e5,Yp=new URL("/micropython/micropython.mjs",window.location.origin).toString(),p0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);let _0=0;class g0{constructor(){ue(this,"worker",null);ue(this,"pending",null);ue(this,"nextId",0)}send(i,u={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,c=u.timeoutMs??Vp,h=this.ensureWorker();return new Promise(_=>{const b=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},c);this.pending={id:s,timer:b,onOutput:u.onOutput,resolve:_},h.postMessage({type:"run",id:s,code:y0(i),runtimeUrl:Yp})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return i.onmessage=u=>this.handleMessage(u.data),i.onerror=u=>{this.finish({ok:!1,output:"",error:u.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var s;const u=this.pending;if(!(!u||i.id!==u.id||i.type==="ready")){if(i.type==="stdout"){(s=u.onOutput)==null||s.call(u,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const u=this.pending;u&&(window.clearTimeout(u.timer),this.pending=null,u.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}async function b0(o,i={}){const u=typeof i=="number"?i:i.timeoutMs??Vp,s=typeof i=="number"?void 0:i.onOutput,c=typeof i=="number"?void 0:i.signal,h=af(o);if(h.some(v=>v.level==="error"))return{ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1};const _=++_0,b=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return new Promise(v=>{let y=!1;const S=()=>{N({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1})},N=F=>{y||(y=!0,window.clearTimeout(j),c==null||c.removeEventListener("abort",S),b.terminate(),v(F))};if(c!=null&&c.aborted){S();return}c==null||c.addEventListener("abort",S,{once:!0});const j=window.setTimeout(()=>{N({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:h,timedOut:!0,unavailable:!1})},u);b.onmessage=F=>{const Q=F.data;if(!(Q.id!==_||Q.type==="ready")){if(Q.type==="stdout"){s==null||s(Q.text);return}if(Q.type==="unavailable"){N({ok:!1,output:"",error:Q.error,issues:h,timedOut:!1,unavailable:!0});return}N({ok:Q.ok,output:Q.output,error:Q.error,issues:h,timedOut:!1,unavailable:!1})}},b.onerror=F=>{N({ok:!1,output:"",error:F.message||"Offline MicroPython fejlede i browser-worker.",issues:h,timedOut:!1,unavailable:!1})},b.postMessage({type:"run",id:_,code:o,runtimeUrl:Yp})})}function y0(o){const i=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function af(o){const i=[],u=new Blob([o]).size;u>_p&&i.push({level:"error",text:`Koden er ${u} bytes. Offline MicroPython kører kun små programmer op til ${_p} bytes.`});const s=o.split(/\r?\n/);for(let c=0;c<s.length;c+=1){const h=c+1,_=sf(s[c]).trim();if(!_)continue;const b=v0(_);b&&p0.has(b)&&i.push({level:"error",line:h,text:`${b} virker kun på Picoen. Forbind en Pico for at køre denne kode.`});const v=_.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);v&&x0(v)>gp&&i.push({level:"error",line:h,text:`range(...) er for stor til offline kørsel. Brug højst ${gp} gentagelser.`})}for(const c of S0(s))i.push({level:"warning",text:`Funktionen ${c} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return i}function sf(o){let i=null;for(let u=0;u<o.length;u+=1){const s=o[u];if((s==='"'||s==="'")&&o[u-1]!=="\\"&&(i=i===s?null:i??s),s==="#"&&!i)return o.slice(0,u)}return o}function v0(o){const i=o.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const u=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(u==null?void 0:u[1])??null}function bp(o){const i=o.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function x0(o){const i=Number(o[1]),u=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const _=(u===void 0?i:u)-(u===void 0?0:i);return _>0&&s<0||_<0&&s>0?0:Math.ceil(Math.abs(_/s))}function S0(o){const i=new Set;for(let u=0;u<o.length;u+=1){const s=sf(o[u]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const c=s[1],h=bp(o[u]);for(let _=u+1;_<o.length;_+=1){if(!o[_].trim())continue;if(bp(o[_])<=h)break;if(new RegExp(`\\b${c}\\s*\\(`).test(sf(o[_]))){i.add(c);break}}}return[...i]}const E0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function w0(o,i){var S;const u=o.trim(),s=i.split(/\r?\n/),c=k0(u),h=c?s[c-1]??"":"",_=N0(s,c),b=u.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(b))return{simple:"Programmet blev stoppet.",technical:u,line:c};if(/MemoryError/.test(b))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${c?` omkring linje ${c}`:""}.`,technical:u,line:c};if(/RecursionError/.test(b))return{simple:`En funktion kalder sig selv for mange gange${c?` omkring linje ${c}`:""}.`,technical:u,line:c};const v=b.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${c?` på linje ${c}`:""}.`,technical:u,line:c};const y=b.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:A0(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${c?` på linje ${c}`:""}.`:`Python kender ikke navnet ${y[1]}${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/ZeroDivisionError/.test(b))return{simple:`Kan ikke dividere med 0${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/IndentationError:\s+unexpected indent/.test(b))return{simple:`Der er for meget indrykning${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/IndentationError/.test(b))return{simple:`Mangler indrykning${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/ImportError|ModuleNotFoundError/.test(b)){const N=(S=b.match(/['"](.+?)['"]/))==null?void 0:S[1];return{simple:`Python kan ikke finde modulet${N?` ${N}`:""}.`,technical:u,line:c}}if(/OSError/.test(b))return/ENOENT|No such file|Errno\s+2/.test(b)?{simple:`Python kan ikke finde filen${c?` på linje ${c}`:""}.`,technical:u,line:c}:/EACCES|permission|denied/i.test(b)?{simple:`Python har ikke adgang til filen eller enheden${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Der opstod en fejl med en fil eller en enhed${c?` omkring linje ${c}`:""}.`,technical:u,line:c};if(/SyntaxError/.test(b)){if(/invalid syntax/.test(b)&&_.text.trim().endsWith(","))return{simple:`Linje ${_.line??c} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:u,line:_.line??c};const N=of(h,c)??of(_.text,_.line)??T0(s,c);return N?{simple:`Mangler måske : efter linje ${N.line}.`,technical:u,line:N.line}:c&&_.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${c}.`,technical:u,line:c}:M0(h)?{simple:`Tekst mangler måske citationstegn${c?` på linje ${c}`:""}.`,technical:u,line:c}:R0(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${c?` på linje ${c}`:""}.`,technical:u,line:c}:D0(h)?{simple:`Mangler måske en afsluttende parentes${c?` på linje ${c}`:""}.`,technical:u,line:c}:j0(h)?{simple:`Der er måske en parentes for meget${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Python fandt en syntaksfejl${c?` omkring linje ${c}`:""}.`,technical:u,line:c}}return/TypeError/.test(b)?/takes .* positional arguments? but .* given/.test(b)||/function takes/.test(b)?{simple:`En funktion får for mange eller for få værdier${c?` på linje ${c}`:""}.`,technical:u,line:c}:/unsupported operand type/.test(b)?{simple:`To værdier kan ikke bruges sammen på den måde${c?` på linje ${c}`:""}.`,technical:u,line:c}:/not callable/.test(b)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`En værdi har den forkerte type${c?` på linje ${c}`:""}.`,technical:u,line:c}:/IndexError/.test(b)?{simple:`Listen har ikke et element på den plads${c?` på linje ${c}`:""}.`,technical:u,line:c}:/KeyError/.test(b)?{simple:`Ordbogen mangler den nøgle${c?` på linje ${c}`:""}.`,technical:u,line:c}:/AttributeError/.test(b)?{simple:`Den ting har ikke den kommando${c?` på linje ${c}`:""}.`,technical:u,line:c}:/ValueError/.test(b)?/invalid literal for int/.test(b)?{simple:`Teksten kan ikke laves om til et heltal${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Værdien passer ikke her${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Python fandt en fejl${c?` omkring linje ${c}`:""}.`,technical:u,line:c}}function k0(o){var c;const u=(c=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:c[1];if(!u)return;const s=parseInt(u,10);return Number.isFinite(s)&&s>0?s:void 0}function N0(o,i){if(!i)return{text:""};for(let u=i-2;u>=0;u-=1){const s=o[u]??"";if(s.trim())return{line:u+1,text:s}}return{text:""}}function of(o,i){if(!i)return null;const u=o.trim();return!E0.test(u)||u.endsWith(":")?null:{line:i}}function T0(o,i){const u=i?Math.min(o.length,i):o.length,s=Math.max(0,u-4);for(let c=u-1;c>=s;c-=1){const h=of(o[c]??"",c+1);if(h)return h}return null}function R0(o){const i=(o.match(/'/g)??[]).length,u=(o.match(/"/g)??[]).length;return i%2===1||u%2===1}function M0(o){var s,c;const u=(c=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:c.trim();return!u||/['"]/.test(u)?!1:/\s/.test(u)&&/[a-zA-ZæøåÆØÅ]/.test(u)}function A0(o,i){const u=o.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(u.startsWith("print(")||u.includes(`= ${i}`))}function D0(o){return qp(o)>0}function j0(o){return qp(o)<0}function qp(o){let i=0,u=null;for(let s=0;s<o.length;s+=1){const c=o[s];if((c==='"'||c==="'")&&o[s-1]!=="\\"){u=u===c?null:u??c;continue}u||((c==="("||c==="["||c==="{")&&(i+=1),(c===")"||c==="]"||c==="}")&&(i-=1))}return i}const cf="/min_kode.py",Xp=`print('Hej fra Pico Kontrol Panel')
`,yp=0,Yi="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function lt(o,i){return`${o}:${i}`}function O0(o){return new Promise(i=>window.setTimeout(i,o))}function C0(){const o=J(d=>d.toggleSideMenu),i=J(d=>d.askConfirm),u=J(d=>d.picoIdeOrigin),s=J(d=>d.active),c=J(d=>d.isBleConnected),h=J(d=>d.bleListFiles),_=J(d=>d.bleReadText),b=J(d=>d.bleWriteText),v=J(d=>d.bleDeleteFile),y=J(d=>d.bleRestartAndReconnect),[S,N]=V.useState(!1),[j,F]=V.useState(!1),[Q,le]=V.useState([]),[U,H]=V.useState(!1),[_e,oe]=V.useState([]),[xe,fe]=V.useState(null),[ke,ee]=V.useState(()=>nf($u())),[W,be]=V.useState(cf),[ge,ve]=V.useState("local"),[ae,Ve]=V.useState(()=>{var d;return((d=nf($u()).find(g=>g.path===cf))==null?void 0:d.content)??Xp}),[Ae,Fe]=V.useState([]),[O,Y]=V.useState(!1),[ie,Ee]=V.useState(""),[de,w]=V.useState(""),[L,P]=V.useState(null),[D,I]=V.useState(!1),[Z,K]=V.useState(null),[Ie,Oe]=V.useState(!1),[at,hl]=V.useState({}),[La,zr]=V.useState(!1),[pl,Br]=V.useState(0),[_l,Ao]=V.useState(()=>{var d,g;return((d=Wl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((g=Wl[0])==null?void 0:g.board)??""}),[Jl,Lr]=V.useState(()=>{var d,g;return((d=Wl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((g=Wl[0])==null?void 0:g.version)??""}),[Ua,Vt]=V.useState(!1),[Ha,Fi]=V.useState({top:0,left:0}),[Rn,Ur]=V.useState(!1),[Hr,Ga]=V.useState(!1),[er,it]=V.useState(!0),[st,gl]=V.useState(""),[Gr,nr]=V.useState([]),[pn,Xn]=V.useState(null),[vn,bl]=V.useState(!1),[yl,vl]=V.useState({}),[jt,Dn]=V.useState({}),[$e,xn]=V.useState(null),[cn,jn]=V.useState(null),[Do,Va]=V.useState(""),[Ot,tr]=V.useState(()=>$h().clearTerminalOnRun),[Yt,Qi]=V.useState(()=>$h().simplifiedErrors),[Vr,Zi]=V.useState(()=>typeof window<"u"&&window.innerWidth<yp),xl=V.useRef(null),wt=V.useRef(null),un=V.useRef(null),Ya=V.useRef(null),$n=V.useRef(null),tn=V.useRef(null),ln=V.useRef(null),ot=V.useRef(!1),Ct=V.useRef(!1),Yr=V.useRef(!1),lr=V.useRef(null),qr=V.useRef(null),Bn=V.useRef(null),qt=V.useRef(null),Ln=V.useRef(0),Kn=V.useRef(null),ct=V.useRef(null),Xt=V.useRef(null),Pe=V.useRef(null),$t=d0(),me=u==="control"&&!!s&&c(),kt=me?(s==null?void 0:s.deviceID)??"ble":null,Sl=Math.max(1,ae.split(`
`).length),jo=new Blob([ae]).size,Pi=ge==="pico"?"Picoen":"browseren",Wi=V.useMemo(()=>[...new Set(Wl.map(d=>d.board))],[]),rr=V.useMemo(()=>Wl.filter(d=>d.board===_l),[_l]),Nt=Wl.find(d=>d.board===_l&&d.version===Jl)??rr[0]??Wl[0],Tt=ge==="pico",In=Tt?Rn:Hr,Un=vn||In,qa=Tt?"Pico MicroPython":"Browser-MicroPython",Xa=V.useMemo(()=>{const d=new m0({onLine:g=>{if(Ct.current)return;const x=g.trimEnd();if(Yr.current&&x.trim()){$("info",x);return}ot.current&&x.trim()&&!x.includes(">>>")&&!x.includes("raw REPL")&&$("info",x)},onLog:$,onDisconnect:()=>{N(!1),Ur(!1),bl(!1),ot.current=!1,Yr.current=!1,Xr(),$("warning","USB-forbindelse lukket.")}});return xl.current=d,d},[]);function $(d,g){le(x=>[...x.slice(-140),{level:d,text:g}])}function ar(d,g=ae,x="error"){const C=w0(d,g);le(z=>[...z.slice(-140),{level:x,text:C.simple,technical:C.technical}])}function Je(d,g,x=ge){be(d),ve(x),Ve(g),Dn(C=>({...C,[lt(x,d)]:g}))}function Ji(d,g="pico"){be(d),ve(g),Ve(""),xn(null),Fi({top:0,left:0})}function gn(d,g=(x=>(x=$n.current)==null?void 0:x.selectionStart)()??d.length){Ve(d),Dn(C=>({...C,[lt(ge,W)]:d})),Va(""),dr(d,g)}function ir(d,g=ge){Dn(x=>{const C=lt(g,d);if(!(C in x))return x;const z={...x};return delete z[C],z})}function es(){return yl[W]===ae}function Mn(d,g){vl(x=>({...x,[d]:g}))}function Kt(d,g){Mn(d,g),Dn(x=>({...x,[lt("pico",d)]:g})),ge==="pico"&&W===d&&Ve(g)}function Xr(){oe([]),Fe([]),vl({}),Dn({}),xn(null),be(d=>{const g=nf($u());if(g.find(z=>z.path===d))return d;const C=g[0];return ve("local"),Ve(C.content),C.path})}function Sn(d){ut(),K({value:100,label:d}),Pe.current=window.setTimeout(()=>{Pe.current=null,K(null)},900)}function ut(){Pe.current!==null&&(window.clearTimeout(Pe.current),Pe.current=null)}function Oo(){return Z?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Z.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:Z.label}),f.jsxs("strong",{children:[Math.round(Z.value),"%"]}),Z.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:ns,"aria-label":"Stop handling",title:"Stop",children:f.jsx(zn,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Z.value))}%`}})})]}):null}function ns(){Bn.current&&El("Stopper læsning...",!0,!0)}function El(d="Stopper læsning...",g=!1,x=!1){var C;ut(),ct.current=null,Ln.current+=1,(C=Bn.current)==null||C.abort(),Bn.current=null,Kn.current=null,fe(null),H(!1),K(g?{value:(Z==null?void 0:Z.value)??0,label:d,cancellable:!1}:null),x&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function $a(d){var g;if(!(Kn.current===d||ct.current===d)){if(ct.current=d,qt.current){Ln.current+=1,(g=Bn.current)==null||g.abort(),Bn.current=null,Kn.current=null,Ji(d),fe(d),H(!0),ut(),K({value:2,label:`Skifter til ${je(d)}...`,cancellable:!0});return}ts()}}function ts(){if(qt.current)return;const d=ct.current;if(!d)return;ct.current=null;const g=Ln.current+1;Ln.current=g;const x=new AbortController;Bn.current=x,Kn.current=d,Ji(d),fe(d),H(!0),ut(),K({value:12,label:`Indlæser ${je(d)}...`,cancellable:!0});const C=(async()=>{try{const z=await _(d,(te,pe)=>{Ln.current===g&&K({value:te,label:pe,cancellable:!0})},x.signal);if(x.signal.aborted||Ln.current!==g)return;Je(d,z,"pico"),Mn(d,z),Sn("Fil indlæst")}catch(z){if(Ln.current!==g)return;L0(z)||x.signal.aborted?$("info",`Stoppede læsning af ${je(d)}.`):(K(null),$("error",z instanceof Error?z.message:"BLE læsning fejlede."))}})();qt.current=C,C.finally(()=>{if(qt.current!==C)return;qt.current=null,Bn.current===x&&(Bn.current=null),Kn.current===d&&(Kn.current=null),!!ct.current||(fe(null),H(!1),x.signal.aborted&&K(null)),ts()})}async function $r(d){const g=Ct.current;Ct.current=!0;try{return await d()}finally{Ct.current=g}}V.useEffect(()=>{if(!er)return;const d=tn.current;d&&(d.scrollTop=d.scrollHeight)},[Q,er]),V.useEffect(()=>{Ug({clearTerminalOnRun:Ot,simplifiedErrors:Yt})},[Ot,Yt]),V.useEffect(()=>{var d;rr.some(g=>g.version===Jl)||Lr(((d=rr[0])==null?void 0:d.version)??"")},[rr,Jl]),V.useEffect(()=>{const d=()=>Zi(window.innerWidth<yp);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),V.useEffect(()=>{const d=()=>{const g=xl.current;wt.current=null,un.current=null,xl.current=null,g==null||g.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var g;ut(),(g=lr.current)==null||g.dispose(),lr.current=null,window.removeEventListener("pagehide",d),d()}},[]),V.useEffect(()=>{const d=g=>{!(g.ctrlKey||g.metaKey)||g.key.toLowerCase()!=="s"||(g.preventDefault(),!U&&W.trim()&&!Vr&&!D&&!L&&!O&&or())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ge,me,U,S,ae,W,Vr,D,L,O]);function It(d,g,x){ee(C=>{const z=q0(C,d,g,x);return Ku(z),z})}const ft=I0(_e,ke,jt,S||me);V.useEffect(()=>{me&&rn()},[me]),V.useEffect(()=>{const d=Xt.current;d&&d!==kt&&Xr(),Xt.current=kt},[kt]);async function Ka(){if($t.supported){F(!0);try{await Xa.requestAndConnect();const d=new Kb(Xa);wt.current=d,un.current=new Wb(d),N(!0),Br(0),await d.interrupt(),await Ia(d),$("success","Sendte stop-signal til Pico-terminalen."),await Kr(un.current),await dt(un.current)}catch(d){$("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await Xa.disconnect()}catch(g){$("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.");return}Br(g=>{const x=g+1;return x>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),zr(!0)),x}),N(!1)}finally{F(!1)}}}async function Ia(d){const g=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(g.error||!g.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function wl(){var d;try{await((d=xl.current)==null?void 0:d.disconnect()),wt.current=null,un.current=null,N(!1),Xr()}catch(g){$("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.")}}async function On(d){const g=un.current;if(g){H(!0),Ct.current=!0;try{await d(g)}catch(x){K(null),$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{Ct.current=!1,H(!1)}}}async function rn(d=!0){if(me){H(!0);try{const g=await h();oe(g),d&&$("success",`Indlæste ${g.length} filer fra Pico via Bluetooth.`)}catch(g){$("error",g instanceof Error?g.message:"BLE filhandling fejlede.")}finally{H(!1)}return}await Kr(un.current,d)}async function Kr(d,g=!0){if(d){H(!0);try{const x=await $r(()=>d.list("/"));oe(x),g&&$("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{H(!1)}}}async function kl(){if(me){H(!0),K({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Nl((g,x)=>K({value:g,label:x}));Fe(d),Sn("Fil-tjek færdigt")}catch(d){K(null),$("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{H(!1)}return}await dt(un.current)}async function Nl(d){const g=[],x=Ma.filter(z=>z.kind==="library"&&!jr(z));let C=0;for(const z of Ma){if(z.kind==="program"){g.push({...z,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(jr(z)){g.push({...z,status:"unknown",detail:"Opdateres via USB"});continue}try{const te=C/Math.max(1,x.length)*100,pe=100/Math.max(1,x.length);$("info",`Tjekker ${z.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,te),`Tjekker ${z.label} på Pico...`);const Le=await _(z.path,(mt,Qt)=>{d==null||d(Math.min(95,te+mt/100*pe),`${z.label}: ${Qt}`)}),an=go(Le)===go(z.content);g.push({...z,status:an?"ok":"outdated",detail:an?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{g.push({...z,status:"missing",detail:"Mangler på Pico"})}finally{C+=1}}return d==null||d(100,"Fil-tjek færdigt"),g}async function dt(d){if(d){H(!0);try{const g=await $r(()=>Ir(d)),x=g;Fe(x)}catch(g){$("error",g instanceof Error?g.message:"Runtime check fejlede.")}finally{H(!1)}}}async function Ir(d){if(!d)return[];const g=[];for(const x of Ma){if(x.kind==="program"){g.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const C=await d.readText(x.path),z=go(C)===go(x.content);g.push({...x,status:z?"ok":"outdated",detail:z?"Matcher appens version":"Matcher ikke appens version"})}catch{g.push({...x,status:"missing",detail:"Mangler på Pico"})}}return g}async function sr(d=W){if(me){$a(d);return}fe(d),await On(async g=>{K({value:12,label:`Indlæser ${je(d)}...`});const x=await zt(g,d);Je(d,x,"pico"),Mn(d,x),Sn("Fil indlæst")}),fe(null)}async function zt(d,g){var x;try{return await d.readText(g)}catch(C){await((x=wt.current)==null?void 0:x.stop().catch(()=>{})),await O0(120);try{return await d.readText(g)}catch{throw C}}}function Fa(){I(!0)}async function or(){if(ge==="pico"){if(!S&&!me){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Tl();return}Qa()}function Qa(){if(Aa(W)){$("error",Yi);return}It(W,ae,!1),ve("local"),Dn(d=>({...d,[lt("local",W)]:ae})),I(!1),$("success",`Gemte ${je(W)} lokalt.`)}async function Tl(){if(I(!1),Aa(W))return K(null),$("error",Yi),!1;if(K({value:0,label:"Starter gemning..."}),me){H(!0);try{return await b(W,ae,(g,x)=>K({value:g,label:x})),Mn(W,ae),ve("pico"),Dn(g=>({...g,[lt("pico",W)]:ae})),Sn("Gemt på Pico via Bluetooth"),$("success",`Gemte ${je(W)} på Pico via Bluetooth.`),bo(W)&&(Vt(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await rn(!1),!0}catch(g){return K(null),$("error",g instanceof Error?g.message:"BLE gem fejlede."),!1}finally{H(!1)}}if(!un.current)return K(null),!1;let d=!1;return await On(async g=>{fr(W,"pico")?await g.replaceTextSafely(W,ae,(x,C)=>K({value:x,label:C})):await g.writeText(W,ae,(x,C)=>K({value:x,label:C})),Mn(W,ae),ve("pico"),Dn(x=>({...x,[lt("pico",W)]:ae})),Sn("Gemt på Pico via USB"),$("success",`Gemte ${W}.`),await rn(),await kl(),d=!0}),d}function Fr(){Za(je(W),ae),I(!1),$("success",`Downloadede ${je(W)}.`)}function Za(d,g){const x=new Blob([g],{type:"text/plain;charset=utf-8"}),C=URL.createObjectURL(x),z=document.createElement("a");z.href=C,z.download=d,z.click(),URL.revokeObjectURL(C)}async function En(d){H(!0),Vt(!1),K({value:10,label:"Genstarter Pico..."});try{await y(d)?(Sn("Pico genforbundet"),$("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await rn()):(K(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(g){K(null),$("error",g instanceof Error?g.message:"Genstart/genforbindelse mislykkedes.")}finally{H(!1)}}function Bt(d){var te;const g=d??{path:W,source:ge},x=g.source==="pico"?"Pico":"browser",C=g.source==="pico"?(d==null?void 0:d.versions.length)??((te=uf(_e).get(g.path))==null?void 0:te.length)??0:0,z=C>0?` Det sletter også filens versionshistorik (${C} gemte versioner).`:"";P(null),i({title:"Slet fil",message:`Vil du slette ${je(g.path)} fra ${x}?${z}`,confirmLabel:"Slet",onConfirm:()=>{Qr(g)}})}async function Qr(d){const g=d.path,x=d.source,C=g===W&&x===ge;if(x==="local"){const pe=ke.filter(Le=>Le.path!==g);ee(pe),Ku(pe),C&&Je(g,"","local"),ir(g,"local"),$("warning",`Slettede ${je(g)} fra browseren.`);return}const z=uf(_e).get(g)??[],te=[g,...z.map(pe=>pe.path)];if(me){H(!0);try{for(const Le of te)await v(Le);vl(Le=>{const an={...Le};for(const mt of te)delete an[mt];return an}),C&&Je(g,"","pico");for(const Le of te)ir(Le,"pico");const pe=z.length>0?` og ${z.length} gemte versioner`:"";$("warning",`Slettede ${je(g)}${pe} på Pico via Bluetooth.`),await rn()}catch(pe){$("error",pe instanceof Error?pe.message:"BLE sletning fejlede.")}finally{H(!1)}return}if(!un.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await On(async pe=>{for(const an of te)await pe.delete(an);vl(an=>{const mt={...an};for(const Qt of te)delete mt[Qt];return mt});const Le=z.length>0?` og ${z.length} gemte versioner`:"";$("warning",`Slettede ${g}${Le}.`),C&&Je(g,"","pico");for(const an of te)ir(an,"pico");await rn(),await kl()})}async function cr(d){if(!d)return;const g=z0(d.name);if(!g){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Aa(g)){$("error",Yi);return}if(d.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const x=await d.text();if(ge==="local"){It(g,x,!0),Je(g,x,"local"),$("success",`Importerede ${je(g)} i browseren.`);return}if(!S&&!me){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(me&&jr({path:g})){$("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(K({value:0,label:"Uploader fil til Pico..."}),me){H(!0);try{await b(g,x,(z,te)=>K({value:z,label:te})),Mn(g,x),Je(g,x,"pico"),Sn("Fil uploadet til Pico"),$("success",`Importerede ${je(g)} på Pico via Bluetooth.`),await rn()}catch(z){K(null),$("error",z instanceof Error?z.message:"Kunne ikke importere filen til Pico.")}finally{H(!1)}return}if(!un.current){K(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await On(async z=>{fr(g,"pico")?await z.replaceTextSafely(g,x,(te,pe)=>K({value:te,label:pe})):await z.writeText(g,x,(te,pe)=>K({value:te,label:pe})),Mn(g,x),Je(g,x,"pico"),Sn("Fil uploadet til Pico"),$("success",`Importerede ${je(g)} på Pico.`),await rn(),await kl()})}async function Co(){Ee(""),Y(!0)}function Pa(){const d=vp(ie);if(!d)return;if(Aa(d)){$("error",Yi);return}const g=ge;if(fr(d,g)){$("error",`Der findes allerede en fil med navnet ${je(d)} i ${g==="pico"?"Pico":"browseren"}.`);return}if(g==="local"){It(d,"",!1),Je(d,"","local"),Y(!1),$("success",`Oprettede ${je(d)} i browseren.`);return}Wa(d)}async function Wa(d){if(!S&&!me){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Y(!1),K({value:0,label:"Opretter fil på Pico..."}),me){H(!0);try{await b(d,"",(g,x)=>K({value:g,label:x})),Mn(d,""),Je(d,"","pico"),Sn("Fil oprettet på Pico"),$("success",`Oprettede ${je(d)} på Pico via Bluetooth.`),await rn()}catch(g){K(null),$("error",g instanceof Error?g.message:"Kunne ikke oprette fil på Pico.")}finally{H(!1)}return}if(!un.current){K(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await On(async g=>{await g.writeText(d,"",(x,C)=>K({value:x,label:C})),Mn(d,""),Je(d,"","pico"),Sn("Fil oprettet på Pico"),$("success",`Oprettede ${je(d)} på Pico.`),await rn()})}function ur(d){d.type==="file"&&(P(d),w(B0(d.path)))}async function Zr(d){if(!L||L.source!=="pico")return;const g=L.path;if(P(null),K({value:0,label:"Gendanner version..."}),me){H(!0);try{const x=await _(d.path);await b(g,x,(C,z)=>K({value:C,label:z})),Mn(g,x),Je(g,x,"pico"),Sn("Version gendannet"),await rn(!1)}catch(x){K(null),$("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{H(!1)}return}un.current&&await On(async x=>{await x.replaceTextSafely(g,await x.readText(d.path),(z,te)=>K({value:z,label:te}));const C=await x.readText(g);Mn(g,C),Je(g,C,"pico"),Sn("Version gendannet"),await rn()})}function ls(d){i({title:"Slet version",message:`Vil du slette ${je(d.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{zo(d)}})}async function zo(d){if(me){H(!0);try{await v(d.path),await rn(!1),P(g=>g&&{...g,versions:g.versions.filter(x=>x.path!==d.path)})}catch(g){$("error",g instanceof Error?g.message:"Kunne ikke slette versionen.")}finally{H(!1)}return}un.current&&await On(async g=>{await g.delete(d.path),await rn(!1),P(x=>x&&{...x,versions:x.versions.filter(C=>C.path!==d.path)})})}async function Bo(){if(!L)return;const d=L,g=Ju(de,qi(d.path));if(!g||g===d.path)return;if(Aa(g)){$("error",Yi);return}if(fr(g,d.source)){$("error",`Der findes allerede en fil med navnet ${je(g)}.`);return}const x=d.source==="local",C=d.source==="pico";if(me&&C&&(bo(d.path)||bo(g))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}H(!0);try{if(C)if(me){const z=yl[d.path]??await _(d.path);await b(g,z,(te,pe)=>K({value:te,label:pe})),await v(d.path),vl(te=>({...Rp(te,d.path,g),[g]:z}))}else un.current&&(await $r(()=>un.current.rename(d.path,g)),vl(z=>Rp(z,d.path,g)));x&&ee(z=>{const te=z.map(pe=>pe.path===d.path?{...pe,path:g,updatedAt:Date.now()}:pe);return Ku(te),te}),W===d.path&&ge===d.source&&be(g),Dn(z=>Z0(z,d.source,d.path,g)),P(null),w(""),$("success",`Omdøbte ${je(d.path)} til ${je(g)}.`),C&&await rn()}catch(z){$("error",z instanceof Error?z.message:"Kunne ikke omdøbe filen.")}finally{K(null),H(!1)}}function fr(d,g){return g==="pico"?_e.some(x=>x.path===d):ke.some(x=>x.path===d)}async function Ja(d){if(!fr(d,"pico"))return;const g=$0(d,_e),x=yl[d]??await _(d);await b(g,x)}function Lo(d){if(d.type!=="file"){me&&El(void 0,!1),be(d.path),ve(d.source);return}if(me&&jr(d)){$("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){me&&El(void 0,!1);const x=ke.find(C=>C.path===d.path);Je(d.path,jt[lt("local",d.path)]??(x==null?void 0:x.content)??"","local");return}const g=lt("pico",d.path);if(Object.prototype.hasOwnProperty.call(jt,g)){me&&El(void 0,!1),Je(d.path,jt[g],"pico");return}if(Object.prototype.hasOwnProperty.call(yl,d.path)){me&&El(void 0,!1),Je(d.path,yl[d.path],"pico");return}sr(d.path)}async function rs(){if(!S&&!me){const d=xp();Fe(d),hl(Sp(d)),Oe(!0),K(null);return}H(!0),K({value:4,label:me?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",me?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Ae.length>0?Ae:me?await Nl((g,x)=>K({value:g,label:x})):await $r(()=>Ir(un.current));Fe(d),hl(Sp(d)),Oe(!0),K(null)}catch(d){K(null),$("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{H(!1)}}async function Uo(){if(Oe(!1),me){H(!0);try{const g=(Ae.length>0?Ae:Ma.map(C=>({...C,status:"unknown",detail:"Ikke tjekket"}))).filter(C=>at[C.id]&&!jr(C));if(g.length===0){$("info","Ingen filer valgt til installation.");return}let x=null;K({value:0,label:"Starter installation..."});for(const[C,z]of g.entries()){$("info",`Installerer ${z.label} via Bluetooth...`);const te=C/g.length*100,pe=100/g.length;await Ja(z.path),await b(z.path,z.content,(Le,an)=>{K({value:Math.min(99,te+Le/100*pe),label:`${z.label}: ${an}`})}),Kt(z.path,z.content),$("success",`Installerede ${z.label}.`),z.kind==="library"&&(x=z),bo(z.path)&&Vt(!0)}Sn("Installation færdig"),await rn(!1),await kl(),x&&ss(x)}catch(d){K(null),$("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{H(!1)}return}await On(async d=>{const x=(Ae.length>0?Ae:Ma.map(z=>({...z,status:"unknown",detail:"Ikke tjekket"}))).filter(z=>at[z.id]);if(x.length===0){$("info","Ingen filer valgt til installation.");return}let C=null;K({value:0,label:"Starter installation..."});for(const[z,te]of x.entries()){$("info",`Installerer ${te.label}...`);const pe=z/x.length*100,Le=100/x.length;await d.replaceTextSafely(te.path,te.content,(an,mt)=>{K({value:Math.min(99,pe+an/100*Le),label:`${te.label}: ${mt}`})},{createBackup:!0}),Kt(te.path,te.content),$("success",`Installerede ${te.label}.`),te.kind==="library"&&(C=te)}Sn("Installation færdig"),await rn(!1),await kl(),C&&ss(C)})}function as(){return(Ae.length>0?Ae:xp()).filter(g=>at[g.id])}function Ho(){const d=as();if(d.length===0){$("info","Ingen filer valgt.");return}for(const g of d)It(g.path,g.content,!1);Oe(!1),$("success",`Gemte ${d.length} filer i browseren.`)}function is(){const d=as();if(d.length===0){$("info","Ingen filer valgt.");return}d.forEach((g,x)=>{window.setTimeout(()=>{Za(je(g.path),g.content)},x*120)}),Oe(!1),$("success",`Starter download af ${d.length} filer.`)}function ss(d){Je(d.path,d.content,"pico"),Mn(d.path,d.content),$("info",`Åbnede ${d.label} i editoren.`)}function Go(d,g){hl(x=>{if(d.kind!=="program")return{...x,[d.id]:g};const C={...x};for(const z of Ae)z.kind==="program"&&(C[z.id]=!1);return C[d.id]=g,C})}async function Vo(){if(Ko(),me&&ge==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ge==="local"){await Yo();return}const d=wt.current;if(!d){$("error",`${je(W)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(W.endsWith(".py")){if(!es()&&($("info",`${je(W)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Tl())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(U)return;Ur(!0),ot.current=!0,it(!0);try{await d.runFile(W),$("success",`Kører ${je(W)}. Brug Stop for at afbryde.`)}catch(g){Ur(!1),ot.current=!1,$("error",g instanceof Error?g.message:"Kunne ikke starte koden.")}return}H(!0);try{const g=await d.exec(ae,2e4);g.output.trim()&&$("info",g.output),g.error.trim()&&ar(g.error,ae),!g.output.trim()&&!g.error.trim()&&$("success","Koden kørte uden output.")}catch(g){$("error",g instanceof Error?g.message:"Kunne ikke køre koden.")}finally{H(!1)}}async function Yo(){const d=af(ae);if(d.some(x=>x.level==="error")){for(const x of d){const C=x.line?`Linje ${x.line}: `:"";$(x.level==="error"?"error":"warning",`${C}${x.text}`)}return}const g=new AbortController;qr.current=g,H(!0),Ga(!0),it(!0),$("info",S?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const x=[],C=await b0(ae,{signal:g.signal,onOutput:Le=>{x.push(Le),$("info",Le)}});for(const Le of C.issues){const an=Le.line?`Linje ${Le.line}: `:"";$(Le.level==="error"?"error":"warning",`${an}${Le.text}`)}const z=[...x,C.output].filter(Boolean).join(`
`).trim(),te=C.output.trim();!C.error.trim()&&U0(z)?ar(z,ae):(te&&$("info",te),C.error.trim()&&ar(C.error,ae,C.unavailable?"warning":"error")),C.ok&&!z&&!C.error.trim()&&$("success","Offline MicroPython kørte uden output.")}finally{qr.current=null,Ga(!1),H(!1)}}async function ei(){var g,x;if(Hr){(g=qr.current)==null||g.abort(),$("warning","Stoppede offline MicroPython."),it(!0);return}if(!Tt&&vn){(x=lr.current)==null||x.reset(),bl(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),it(!0);return}const d=wt.current;if(d)try{await d.stop(),$("warning","Stoppede koden på Pico.")}catch(C){$("error",C instanceof Error?C.message:"Kunne ikke stoppe koden.")}finally{Ur(!1),ot.current=!1,it(!0)}}function qo(){const d=tn.current;if(!d)return;const g=d.scrollHeight-d.scrollTop-d.clientHeight<12;it(g)}function Xo(){le([]),it(!0)}async function os(){const d=st.trimEnd();if(!d.trim())return;if(nr(x=>(x.at(-1)===d?x:[...x,d]).slice(-80)),Xn(null),jn(null),In){$("warning",Tt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Ft();return}if(!Tt){const x=af(d);if(x.some(z=>z.level==="error")){for(const z of x){const te=z.line?"Linje "+z.line+": ":"";$(z.level==="error"?"error":"warning",te+z.text)}Ft();return}const C=lr.current??new g0;lr.current=C,gl(""),bl(!0),it(!0),$("info",">>> "+d);try{let z=!1;const te=await C.send(d,{timeoutMs:15e3,onOutput:Le=>{z=!0,$("info",Le)}}),pe=te.output.trim();pe&&!z&&$("info",pe),te.error.trim()&&ar(te.error,d,te.unavailable?"warning":"error")}catch(z){$("error",z instanceof Error?z.message:"Browser-MicroPython-terminalen fejlede.")}finally{bl(!1),Ft()}return}if(me){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Ft();return}const g=wt.current;if(!S||!g){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Ft();return}gl(""),bl(!0),it(!0),Yr.current=!0,$("info",">>> "+d);try{await g.sendFriendlyLine(d)}catch(x){Yr.current=!1,$("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{bl(!1),Ft()}}function Ft(){window.requestAnimationFrame(()=>{const d=ln.current;if(!d||d.disabled)return;d.focus();const g=d.value.length;d.selectionStart=g,d.selectionEnd=g})}function cs(d,g,x){return x.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:d}),f.jsx("p",{children:g})]}),x.map(C=>{const z=me&&jr(C);return f.jsxs("label",{className:`ide-install-row ${z?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!at[C.id],disabled:z,onChange:te=>Go(C,te.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[$o(C),(C.kind==="library"||!S&&!me)&&f.jsx("em",{className:`ide-install-status status-${C.status}`,children:z?"USB":K0(C.status)})]}),f.jsxs("small",{children:[C.description,!S&&!me?` ${C.detail}`:""]})]})]},C.id)})]})}function $o(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Ko(){Ot&&le([]),it(!0)}function Io(d,g){const x=d.indexOf(`
`,g);return x===-1?d.length:x}function dr(d,g){const x=wp(d,g);if(!x||x.query.length<1){xn(null);return}const C=x.query.toLowerCase(),z=Ep.filter(pe=>pe.label.toLowerCase().startsWith(C)&&!ef(pe,x.query)).slice(0,8),te=kp($n.current,x.start);xn(z.length>0&&te?{items:z,selected:0,start:x.start,end:g,position:te}:null)}function Pr(d,g){const x=wp(d,g);if(!x||x.query.length<1){jn(null);return}const C=x.query.toLowerCase(),z=Ep.filter(pe=>pe.label.toLowerCase().startsWith(C)&&!ef(pe,x.query)).slice(0,8),te=kp(ln.current,x.start);jn(z.length>0&&te?{items:z,selected:0,start:x.start,end:g,position:te}:null)}function us(d){const g=d.value.slice(d.selectionStart,d.selectionEnd);Va(G0(g)?g:"")}function ni(d=$e==null?void 0:$e.items[$e.selected]){if(!d||!$e)return;const g=ae.slice(0,$e.start)+d.insert+ae.slice($e.end),x=$e.start+d.insert.length-(d.insert.endsWith("()")?1:0);Ve(g),Dn(C=>({...C,[lt(ge,W)]:g})),xn(null),window.requestAnimationFrame(()=>{const C=$n.current;C&&(C.focus(),C.selectionStart=x,C.selectionEnd=x,dr(g,x))})}function fs(d=cn==null?void 0:cn.items[cn.selected]){if(!d||!cn)return;const g=st.slice(0,cn.start)+d.insert+st.slice(cn.end),x=cn.start+d.insert.length-(d.insert.endsWith("()")?1:0);gl(g),jn(null),window.requestAnimationFrame(()=>{const C=ln.current;C&&(C.focus(),C.selectionStart=x,C.selectionEnd=x,Pr(g,x))})}function ti(d){var Qt;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!U&&W.trim()&&or();return}if($e){if(d.key==="ArrowDown"){d.preventDefault(),xn(Ue=>Ue&&{...Ue,selected:(Ue.selected+1)%Ue.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),xn(Ue=>Ue&&{...Ue,selected:(Ue.selected-1+Ue.items.length)%Ue.items.length});return}if(d.key==="Tab"){d.preventDefault(),ni();return}if(d.key==="Enter"){if(!($e.items[$e.selected]&&ef($e.items[$e.selected],ae.slice($e.start,$e.end)))){d.preventDefault(),ni();return}xn(null)}if(d.key==="Escape"){d.preventDefault(),xn(null);return}}if(d.key==="Enter"){d.preventDefault();const Ue=d.currentTarget,Fn=Ue.selectionStart,Zt=Ue.selectionEnd,hr=ae.lastIndexOf(`
`,Fn-1)+1,Rt=ae.slice(hr,Fn),Wr=((Qt=Rt.match(/^[ \t]*/))==null?void 0:Qt[0])??"",Jr=Rt.trimEnd().endsWith(":")?"    ":"",pr=`
${Wr}${Jr}`,_r=ae.slice(0,Fn)+pr+ae.slice(Zt),Rl=Fn+pr.length;gn(_r,Rl),window.requestAnimationFrame(()=>{Ue.selectionStart=Rl,Ue.selectionEnd=Rl});return}if(d.key!=="Tab")return;d.preventDefault();const g=d.currentTarget,x=g.selectionStart,C=g.selectionEnd,z="    ";if(d.shiftKey){const Ue=ae.lastIndexOf(`
`,x-1)+1,Fn=x===C?Io(ae,x):C,Zt=ae.slice(Ue,Fn);let hr=0,Rt=0;const Wr=Zt.replace(/(^|\n)( {1,4}|\t)/g,(pr,_r,Rl,ds)=>{const li=Rl.length;return Ue+ds<x&&(hr+=li),Rt+=li,_r});if(Rt===0)return;const Jr=ae.slice(0,Ue)+Wr+ae.slice(Fn);gn(Jr,Math.max(Ue,x-hr)),window.requestAnimationFrame(()=>{g.selectionStart=Math.max(Ue,x-hr),g.selectionEnd=x===C?g.selectionStart:Math.max(g.selectionStart,C-Rt)});return}if(x===C){const Ue=ae.slice(0,x)+z+ae.slice(C);gn(Ue,x+z.length),window.requestAnimationFrame(()=>{g.selectionStart=x+z.length,g.selectionEnd=x+z.length});return}const te=ae.lastIndexOf(`
`,x-1)+1,Le=ae.slice(te,C).replace(/^/gm,z),an=Le.split(`
`).length,mt=ae.slice(0,te)+Le+ae.slice(C);gn(mt,x+z.length),window.requestAnimationFrame(()=>{g.selectionStart=x+z.length,g.selectionEnd=C+an*z.length})}function mr(d){if(cn){if(d.key==="ArrowDown"){d.preventDefault(),jn(g=>g&&{...g,selected:(g.selected+1)%g.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),jn(g=>g&&{...g,selected:(g.selected-1+g.items.length)%g.items.length});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),fs();return}if(d.key==="Escape"){d.preventDefault(),jn(null);return}}if(d.key==="Tab"){d.preventDefault();const g=d.currentTarget,x=g.selectionStart,C=g.selectionEnd,z="    ",te=st.slice(0,x)+z+st.slice(C),pe=x+z.length;gl(te),Xn(null),jn(null),window.requestAnimationFrame(()=>{g.selectionStart=pe,g.selectionEnd=pe});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===st.length&&d.currentTarget.selectionEnd===st.length)||Gr.length===0)return;d.preventDefault();const x=d.key==="ArrowUp"?pn===null?Gr.length-1:Math.max(0,pn-1):pn===null||pn+1>=Gr.length?null:pn+1;Xn(x);const C=x===null?"":Gr[x]??"";gl(C),jn(null),window.requestAnimationFrame(()=>{const z=ln.current;z&&(z.selectionStart=C.length,z.selectionEnd=C.length)});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),os())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(gf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Vr?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Co,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(zn,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=Ya.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(zn,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>rn(),disabled:!S&&!me||U,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(zn,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:ft.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):ft.map(d=>{if(d.kind==="separator"){const z=d.id==="pico-files"&&!S&&!me;return f.jsxs(V.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:d.label})}),z&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const g=me&&jr(d),x=jt[lt(d.source,d.path)],C=x!==void 0&&x!==X0(d,ke,yl);return f.jsxs("div",{className:`ide-file-row ${W===d.path&&ge===d.source?"active":""} ${g?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>Lo(d),disabled:g,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:d.name}),f.jsx("small",{title:C?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:f.jsx("i",{className:`ide-file-dirty-dot ${C?"dirty":"clean"}`,"aria-hidden":"true"})})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>ur(d),disabled:d.type!=="file"||U||g,"aria-label":`Filvalg for ${d.name}`,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(zn,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:me?"Forbundet Pico":"USB udvikling"}),!me&&f.jsx("span",{className:`ide-usb-status ${$t.supported?"available":"unavailable"}`,title:$t.message,"data-tooltip":$t.message,role:"img","aria-label":$t.message,tabIndex:0,children:"!"})]}),me&&f.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!me&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:S?wl:Ka,disabled:!$t.supported||j,children:j?"Forbinder...":S?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:rs,disabled:me||U,children:"Startprogrammer og biblioteker"})]}),me&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(zn,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:rs,disabled:U,children:"Startprogrammer og biblioteker"})]}),!me&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>zr(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[je(W),f.jsxs("small",{children:[jo," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Vo,disabled:U,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:ei,disabled:!Hr&&!(!Tt&&vn)&&(!S||!Rn),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Fa,disabled:U||!W.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Bt(),disabled:U||!W.trim(),children:"Slet"})]})]}),Oo(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Ha.top}px)`},children:Array.from({length:Sl},(d,g)=>f.jsx("span",{children:g+1},g))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Ha.left}px, ${-Ha.top}px)`},children:Y0(ae,Do)}),f.jsx("textarea",{ref:$n,className:"ide-editor",value:ae,onChange:d=>gn(d.target.value,d.target.selectionStart),onKeyDown:ti,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||dr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{dr(d.currentTarget.value,d.currentTarget.selectionStart),us(d.currentTarget)},onSelect:d=>us(d.currentTarget),onScroll:d=>{Fi({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),$e&&dr(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:U||!!xe,"aria-busy":U||!!xe,spellCheck:!1}),$e&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:$e.position.left,top:$e.position.top},children:$e.items.map((d,g)=>f.jsx("button",{className:g===$e.selected?"active":"",type:"button",onMouseDown:x=>{x.preventDefault(),ni(d)},role:"option","aria-selected":g===$e.selected,children:d.label},d.label))}),xe&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",je(xe),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Yt?"":"active"}`,type:"button",onClick:()=>Qi(d=>!d),"aria-label":Yt?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!Yt,title:Yt?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Ot?"active":""}`,type:"button",onClick:()=>tr(d=>!d),"aria-pressed":Ot,title:Ot?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Xo,disabled:Q.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:tn,onScroll:qo,onClick:()=>{var d;return(d=ln.current)==null?void 0:d.focus()},children:[Q.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):Q.map((d,g)=>f.jsx("div",{className:`term-line term-${d.level}`,children:d.technical&&!Yt?d.technical:d.text},`${g}-${d.text}`)),f.jsxs("form",{className:`ide-terminal-command ${In?"locked":""}`,onSubmit:d=>{d.preventDefault(),os()},children:[f.jsx("span",{"aria-hidden":"true",children:">>>"}),f.jsx("textarea",{ref:ln,value:st,onChange:d=>{gl(d.target.value),Xn(null),Pr(d.target.value,d.target.selectionStart)},onKeyDown:mr,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Pr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>Pr(d.currentTarget.value,d.currentTarget.selectionStart),disabled:Un,placeholder:qa,"aria-label":"MicroPython-terminalkommando",title:qa,rows:Math.max(1,st.split(`
`).length)})]}),cn&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:cn.position.left,top:cn.position.top},children:cn.items.map((d,g)=>f.jsx("button",{className:g===cn.selected?"active":"",type:"button",onMouseDown:x=>{x.preventDefault(),fs(d)},role:"option","aria-selected":g===cn.selected,children:d.label},d.label))})]})]})]}),f.jsx("input",{ref:Ya,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var g;cr((g=d.target.files)==null?void 0:g[0]),d.currentTarget.value=""}}),D&&f.jsx(yn,{title:"Gem fil",onClose:()=>I(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Qa,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Tl(),disabled:!S&&!me||U,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Fr,children:"Download til computer"})]})}),Ie&&f.jsx(yn,{title:"Startprogrammer og biblioteker",onClose:()=>Oe(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:S||me?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[cs("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(d=>d.kind==="program")),cs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(d=>d.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(S||me)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Uo,disabled:U,children:"Installer valgte på Pico"}),f.jsx("button",{className:S||me?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ho,disabled:U,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:is,disabled:U,children:"Download valgte"})]})]})}),Ua&&f.jsx(yn,{title:"main.py er gemt",onClose:()=>Vt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void En("control"),disabled:U,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void En("ide"),disabled:U,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Vt(!1),disabled:U,children:"Senere"})]})}),La&&f.jsx(yn,{title:"Installer MicroPython",onClose:()=>zr(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:_l,onChange:d=>Ao(d.target.value),children:Wi.map(d=>f.jsx("option",{value:d,children:d},d))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(Nt==null?void 0:Nt.version)??Jl,onChange:d=>Lr(d.target.value),children:rr.map(d=>f.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),Nt&&f.jsx("a",{className:"btn btn-primary btn-block",href:Nt.url,download:Nt.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),O&&f.jsx(yn,{title:"Ny Python-fil",onClose:()=>Y(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Pa()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:ie,onChange:d=>Ee(d.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Pi,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!vp(ie),children:"Opret"})]})}),L&&f.jsx(yn,{title:je(L.path),onClose:()=>P(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Bo()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:de,onChange:d=>w(d.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",qi(L.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",qi(L.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Ju(de,qi(L.path))||Ju(de,qi(L.path))===L.path||U,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Bt(L),disabled:U,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),L.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):L.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:L.versions.map(d=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:je(d.path)}),f.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Zr(d),disabled:U,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>ls(d),disabled:U,children:"Slet"})]},d.path))})]})]})})]})}function vp(o){var u;const i=(u=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.replace(/\.py$/i,"").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function z0(o){const i=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),u=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!u)return"";const s=u[1].replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,"");return s?`/${s}.${u[2].toLowerCase()}`:""}function Ju(o,i="py"){const u=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!u)return"";const s=u.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const c=s[1].replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,""),h=i.replace(/^\./,"").toLowerCase(),_=(s[2]??(h||"py")).toLowerCase();return c?`/${c}.${_}`:""}function B0(o){return je(o).replace(/\.(py|txt|json|csv)$/i,"")}function qi(o){var s;const i=je(o).match(/\.([a-z0-9]+)$/i),u=(s=i==null?void 0:i[1])==null?void 0:s.toLowerCase();return u&&["py","txt","json","csv"].includes(u)?u:"py"}function go(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function xp(){return Ma.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Sp(o){const i={};return o.forEach(u=>{i[u.id]=!1}),i}function je(o){return o.split("/").filter(Boolean).pop()??o}function bo(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function L0(o){return o instanceof DOMException&&o.name==="AbortError"}function U0(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function jr(o){return H0(o)}function H0(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Ep=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.reset()",insert:"machine.reset()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"import time",insert:"import time"},{label:"import machine",insert:"import machine"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function wp(o,i){const s=o.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function ef(o,i){const u=o.insert.trim();return!/[().]/.test(u)&&u.toLowerCase()===i.toLowerCase()}function G0(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function kp(o,i){if(!o)return null;const u=o.closest(".ide-terminal")??o.parentElement;if(!u)return null;const s=window.getComputedStyle(o),c=document.createElement("div"),h=document.createElement("span"),_=u.getBoundingClientRect(),b=o.getBoundingClientRect();c.style.position="absolute",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.whiteSpace="pre-wrap",c.style.overflowWrap="break-word",c.style.boxSizing=s.boxSizing,c.style.width=`${o.clientWidth}px`,c.style.padding=s.padding,c.style.border=s.border,c.style.font=s.font,c.style.lineHeight=s.lineHeight,c.style.letterSpacing=s.letterSpacing,c.style.tabSize=s.tabSize,c.style.left=`${b.left-_.left-o.scrollLeft}px`,c.style.top=`${b.top-_.top-o.scrollTop}px`,c.textContent=o.value.slice(0,i),h.textContent=o.value.slice(i,i+1)||" ",c.appendChild(h),u.appendChild(c);const v=h.getBoundingClientRect();c.remove();const y=V0(v.left-_.left,8,Math.max(8,u.clientWidth-296)),S=v.bottom-_.top+6,N=S+218>u.clientHeight?Math.max(8,v.top-_.top-218):S;return{left:y,top:N}}function V0(o,i,u){return Math.max(i,Math.min(u,o))}function Y0(o,i=""){const u=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,c=[];return o.split(/(\r?\n)/).forEach((h,_)=>{if(h===`
`||h===`\r
`){c.push(f.jsx("br",{},`br-${_}`));return}let b=0;[...h.matchAll(s)].forEach((y,S)=>{const N=y.index??0;N>b&&c.push(...Np(h.slice(b,N),u,`${_}-${S}-plain`,i));const j=y[0],F=j.startsWith("#")?"tok-comment":j.startsWith('"')||j.startsWith("'")?"tok-string":/^\d/.test(j)?"tok-number":"tok-builtin";c.push(...xo(j,i,`${_}-${S}-token`,F)),b=N+j.length}),b<h.length&&c.push(...Np(h.slice(b),u,`${_}-tail`,i))}),c.length?c:" "}function Np(o,i,u,s=""){const c=[];let h=0;const _=new RegExp(i.source,"g");return[...o.matchAll(_)].forEach((b,v)=>{const y=b.index??0;y>h&&c.push(...xo(o.slice(h,y),s,`${u}-${v}-plain`)),c.push(...xo(b[0],s,`${u}-${v}-keyword`,"tok-keyword")),h=y+b[0].length}),h<o.length&&c.push(...xo(o.slice(h),s,`${u}-plain-end`)),c}function xo(o,i,u,s=""){if(!i)return[f.jsx("span",{className:s||void 0,children:o},u)];const c=[],h=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let b=0;return[...o.matchAll(_)].forEach((v,y)=>{const S=v.index??0;S>b&&c.push(f.jsx("span",{className:s||void 0,children:o.slice(b,S)},`${u}-${y}-before`)),c.push(f.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${u}-${y}-match`)),b=S+v[0].length}),b<o.length&&c.push(f.jsx("span",{className:s||void 0,children:o.slice(b)},`${u}-after`)),c.length?c:[f.jsx("span",{className:s||void 0,children:o},u)]}function nf(o){return o.length>0?o:[{path:cf,content:Xp,uploaded:!1,updatedAt:Date.now()}]}function q0(o,i,u,s){const c=o.filter(h=>h.path!==i);return[{path:i,content:u,uploaded:s,updatedAt:Date.now()},...c].sort((h,_)=>_.updatedAt-h.updatedAt)}function X0(o,i,u){var s;return o.source==="pico"?u[o.path]:(s=i.find(c=>c.path===o.path))==null?void 0:s.content}function So(o){const i=o.replace(/\\/g,"/"),u=i.lastIndexOf("/"),s=u>=0?i.slice(0,u+1):"",h=(u>=0?i.slice(u+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${s}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Aa(o){return So(o)!==null}function uf(o){const i=new Map;for(const u of o){const s=So(u.path);if(!s)continue;const c=i.get(s.originalPath)??[];c.push(u),i.set(s.originalPath,c)}for(const u of i.values())u.sort((s,c)=>{var h,_;return(((h=So(c.path))==null?void 0:h.index)??0)-(((_=So(s.path))==null?void 0:_.index)??0)});return i}function $0(o,i){const u=o.replace(/\\/g,"/"),s=u.lastIndexOf("/"),c=s>=0?u.slice(0,s+1):"/",h=s>=0?u.slice(s+1):u.replace(/^\/+/,""),_=h.lastIndexOf("."),b=_>0?h.slice(0,_):h,v=_>0?h.slice(_):"",y=new Set(i.map(S=>S.path.toLowerCase()));for(let S=1;S<1e3;S+=1){const N=`${c}${b}_backup${S}${v}`;if(!y.has(N.toLowerCase()))return N}return`${c}${b}_backup${Date.now()}${v}`}function K0(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function I0(o,i,u,s){const c=new Map,h=uf(o);for(const S of o)Aa(S.path)||c.set(lt("pico",S.path),{kind:"file",name:S.name,path:S.path,type:S.type,size:S.size,source:"pico",uploaded:!0,versions:h.get(S.path)??[]});for(const S of i)c.set(lt("local",S.path),{kind:"file",name:je(S.path),path:S.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const S of Object.keys(u)){const[N,...j]=S.split(":"),F=j.join(":");if(N!=="local"&&N!=="pico"||!F)continue;const Q=c.get(S);if(Q){c.set(S,Q);continue}c.set(S,{kind:"file",name:je(F),path:F,type:"file",source:N,uploaded:!1,versions:N==="pico"?h.get(F)??[]:[]})}const _=[...c.values()].sort(Q0),b=_.filter(S=>S.source==="pico"),v=_.filter(S=>S.source==="local"),y=[];return b.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...b):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const F0=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function Q0(o,i){const u=Tp(o.path),s=Tp(i.path);return u===null&&s===null?o.name.localeCompare(i.name,"da"):u===null?-1:s===null?1:u-s}function Tp(o){var u;const i=(u=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.toLowerCase();return i?F0.get(i)??null:null}function Rp(o,i,u){if(!(i in o))return o;const s={...o,[u]:o[i]};return delete s[i],s}function Z0(o,i,u,s){const c=`${i}:${u}`;if(!(c in o))return o;const h={...o,[`${i}:${s}`]:o[c]};return delete h[c],h}function P0({open:o}){const i=J(H=>H.screen),u=J(H=>H.active),s=J(H=>H.toggleSideMenu),c=J(H=>H.toggleDebugger),h=J(H=>H.setEditMode),_=J(H=>H.openMenuPage),b=J(H=>H.disconnect),v=J(H=>H.openPicoIde),y=J(H=>H.closePicoIde),S=J(H=>H.picoIdeOrigin),N=i==="dashboard",j=i==="control",F=i==="ide",Q=j&&!!(u!=null&&u.canEdit),le=S==="control",U=S==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${i} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[N&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),f.jsx(tt,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),f.jsx(tt,{label:"Kodeværksted",icon:"picoIde",onClick:v}),f.jsx(tf,{}),f.jsx(tt,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),f.jsx(tt,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),f.jsx(tt,{label:"Fejlfinding",icon:"debugger",onClick:()=>c(!0)})]}),j&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),f.jsx(tt,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!Q}),f.jsx(tt,{label:"Kodeværksted",icon:"picoIde",onClick:v}),f.jsx(tf,{}),f.jsx(tt,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),f.jsx(tt,{label:"Fejlfinding",icon:"debugger",onClick:()=>c(!0)})]}),F&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:U,icon:"back",onClick:y}),f.jsx(tf,{})]}),f.jsx("div",{className:"spacer"}),(j||F&&le)&&f.jsx(tt,{label:"Forlad",icon:"exit",onClick:()=>b()})]})]})}function tt({label:o,icon:i,disabled:u,onClick:s}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:u,"aria-label":o,children:[f.jsx(zn,{name:i}),f.jsx("span",{children:o})]})}function tf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:mb,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const W0={error:"term-error",success:"term-success",warning:"term-warning",info:""},Mp={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function J0(){const o=new Date,i=u=>String(u).padStart(2,"0");return`${i(o.getDate())}-${i(o.getMonth()+1)}-${o.getFullYear()}-${i(o.getHours())}-${i(o.getMinutes())}`}function ey(){const o=J(c=>c.logs),i=J(c=>c.clearLogs),u=J(c=>c.toggleDebugger);function s(){const c=[...o].reverse().map(v=>`${v.time} ${Mp[v.level]}${v.message}`).join(`
`),h=new Blob([c],{type:"text/plain"}),_=URL.createObjectURL(h),b=document.createElement("a");b.href=_,b.download=`${J0()}.txt`,b.click(),URL.revokeObjectURL(_)}return f.jsxs(yn,{title:"Fejlfinding",onClose:()=>u(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((c,h)=>f.jsxs("div",{className:`term-line ${W0[c.level]}`,children:[c.time," ",Mp[c.level],c.message]},`${c.time}-${h}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}function ny(){const o=J(Y=>Y.menuPage),i=J(Y=>Y.closeMenuPage),u=J(Y=>Y.user),s=J(Y=>Y.active),c=J(Y=>Y.layout),h=J(Y=>Y.sliderValues),_=J(Y=>Y.savedDevices),b=J(Y=>Y.updateUsername),v=J(Y=>Y.clearSavedDevices),y=J(Y=>Y.resetApplicationData),S=J(Y=>Y.saveDeviceSettings),N=J(Y=>Y.setEditMode),j=J(Y=>Y.askConfirm),[F,Q]=V.useState((u==null?void 0:u.username)??""),[le,U]=V.useState((s==null?void 0:s.iconID)??0),[H,_e]=V.useState(!1),[oe,xe]=V.useState((s==null?void 0:s.canOthersConnect)??!1),[fe,ke]=V.useState((s==null?void 0:s.canOthersEdit)??!1),[ee,W]=V.useState((s==null?void 0:s.gridCols)??11),[be,ge]=V.useState((s==null?void 0:s.gridRows)??31),[ve,ae]=V.useState(!1);V.useEffect(()=>{o==="user-settings"&&Q((u==null?void 0:u.username)??"")},[o,u==null?void 0:u.username]),V.useEffect(()=>{o==="device-settings"&&s&&(U(s.iconID),xe(s.canOthersConnect),ke(s.canOthersEdit),W(s.gridCols),ge(s.gridRows))},[s,o]);const Ve=(Y,ie)=>Number.isFinite(Y)?Math.max(Da,Math.min(ja,Math.round(Y))):ie,Ae=(u==null?void 0:u.username)??"",Fe=F.trim(),O=Fe.length>0&&Fe!==Ae;if(!o)return null;if(o==="user-settings")return f.jsx(yn,{title:"Brugerindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(St,{label:"GUID",value:(u==null?void 0:u.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${F.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:F,onChange:Y=>Q(Y.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>b(F),disabled:!O,children:"Gem nyt brugernavn"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>j({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{y()}}),children:"Slet brugerdata"})]})});if(o==="application-settings")return f.jsx(yn,{title:"Applikationsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(St,{label:"Version",value:Ki}),f.jsx(St,{label:"Bluetooth",value:Ro()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(St,{label:"Gemte enheder",value:String(_.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>j({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:v}),disabled:_.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(yn,{title:"Om appen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(St,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(St,{label:"Version",value:Ki})]})});if(o==="application-help")return f.jsx(yn,{title:"Hjælp til applikationen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const Y=c.filter(de=>de.type==="slider"),ie=!!(s!=null&&s.isOwnedByMe);async function Ee(de=!1){if(!s||!ie)return;const w=Ve(ee,s.gridCols),L=Ve(be,s.gridRows),P=ty(c,w,L);if(P&&!de){j({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${P.requiredCols} kolonner og ${P.requiredRows} rækker. Det nye gitter er ${w} × ${L}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Ee(!0)}});return}ae(!0),await S(le,oe,oe&&fe,w,L),W(w),ge(L),ae(!1)}return f.jsx(yn,{title:"Enhedsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(St,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),f.jsx(St,{label:"Ejer",value:ry(s)}),ie?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>_e(!0),children:f.jsx("img",{src:Ba(le),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:oe?"":"active",onClick:()=>xe(!1),children:"Privat"}),f.jsx("button",{type:"button",className:oe?"active":"",onClick:()=>xe(!0),children:"Offentlig"})]}),oe&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:fe?"":"active",onClick:()=>ke(!1),children:"Nej"}),f.jsx("button",{type:"button",className:fe?"active":"",onClick:()=>ke(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Da,max:ja,value:Number.isNaN(ee)?"":ee,onChange:de=>W(parseInt(de.target.value,10)),onBlur:()=>W(Ve(ee,(s==null?void 0:s.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Da,max:ja,value:Number.isNaN(be)?"":be,onChange:de=>ge(parseInt(de.target.value,10)),onBlur:()=>ge(Ve(be,(s==null?void 0:s.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Ee(),disabled:ve,children:ve?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(St,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),f.jsx(St,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(St,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),f.jsx(St,{label:"Kontroller",value:String(c.length)}),Y.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),Y.map(de=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:de.name}),f.jsxs("span",{children:[de.sliderMin??0," til ",de.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",ly(de.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",h[de.name]??"Ikke brugt"]})]},de.name))]}),H&&f.jsx(Bp,{selected:le,onSelect:U,onClose:()=>_e(!1)})]})})}return f.jsx(yn,{title:"Hjælp til enheden",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>N(!0),children:"Rediger layout"})]})})}function ty(o,i,u){let s=0,c=0;for(const h of o)Oa(h)&&(s=Math.max(s,Math.ceil((h.centerX2+h.spanX)/2)+1),c=Math.max(c,Math.ceil((h.centerY2+h.spanY)/2)+1));return i<s||u<c?{requiredCols:s,requiredRows:c}:null}function ly(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function ry(o){var i;return o?o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function St({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function ay(){const o=J(s=>s.confirmDialog),i=J(s=>s.closeConfirm);if(!o)return null;function u(){o==null||o.onConfirm(),i()}return f.jsx(yn,{title:o.title,onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:u,children:o.confirmLabel??"Fortsæt"})]})]})})}function iy(){const o=J(s=>s.connectionLost),i=J(s=>s.reconnectLostDevice),u=J(s=>s.dismissConnectionLost);return o?f.jsx(yn,{title:"Forbindelse afbrudt",onClose:u,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:u,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function sy(){const o=J(u=>u.toast),i=J(u=>u.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:i,children:o.message},o.id):null}function oy(){const o=J(b=>b.screen),i=J(b=>b.splashTarget),u=J(b=>b.init),s=J(b=>b.sideMenuOpen),c=J(b=>b.debuggerOpen),[h,_]=V.useState(!1);return V.useEffect(()=>{u()},[u]),V.useEffect(()=>{if(s){_(!0);return}const b=setTimeout(()=>_(!1),140);return()=>clearTimeout(b)},[s]),f.jsxs("div",{className:"app",children:[o==="splash"&&i==="intro"&&f.jsx(ep,{}),o==="splash"&&i==="dashboard"&&f.jsx(np,{}),o==="splash"&&f.jsx(gb,{}),o==="intro"&&f.jsx(ep,{}),o==="dashboard"&&f.jsx(np,{}),o==="connection"&&f.jsx(Sb,{}),o==="create"&&f.jsx(Eb,{}),o==="control"&&f.jsx(qb,{}),o==="ide"&&f.jsx(C0,{}),h&&f.jsx(P0,{open:s}),f.jsx(ny,{}),f.jsx(iy,{}),f.jsx(ay,{}),c&&f.jsx(ey,{}),f.jsx(sy,{})]})}function cy(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(i=>{console.warn("Service worker registration failed:",i)})})}cy();Mg.createRoot(document.getElementById("root")).render(f.jsx(Xi.StrictMode,{children:f.jsx(oy,{})}));
