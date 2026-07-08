var Zg=Object.defineProperty;var Jg=(s,l,c)=>l in s?Zg(s,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[l]=c;var pe=(s,l,c)=>Jg(s,typeof l!="symbol"?l+"":l,c);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function s_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vf={exports:{}},is={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function eb(){if(lh)return is;lh=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function c(a,f,h){var b=null;if(h!==void 0&&(b=""+h),f.key!==void 0&&(b=""+f.key),"key"in f){h={};for(var p in f)p!=="key"&&(h[p]=f[p])}else h=f;return f=h.ref,{$$typeof:s,type:a,key:b,ref:f!==void 0?f:null,props:h}}return is.Fragment=l,is.jsx=c,is.jsxs=c,is}var ih;function tb(){return ih||(ih=1,vf.exports=eb()),vf.exports}var u=tb(),xf={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function nb(){if(ah)return Re;ah=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),T=Symbol.iterator;function A(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,Y={};function G(E,U,ne){this.props=E,this.context=U,this.refs=Y,this.updater=ne||z}G.prototype.isReactComponent={},G.prototype.setState=function(E,U){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,U,"setState")},G.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function W(){}W.prototype=G.prototype;function P(E,U,ne){this.props=E,this.context=U,this.refs=Y,this.updater=ne||z}var re=P.prototype=new W;re.constructor=P,V(re,G.prototype),re.isPureReactComponent=!0;var de=Array.isArray;function fe(){}var X={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function Ee(E,U,ne){var oe=ne.ref;return{$$typeof:s,type:E,key:U,ref:oe!==void 0?oe:null,props:ne}}function be(E,U){return Ee(E.type,U,E.props)}function Fe(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function J(E){var U={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ne){return U[ne]})}var We=/\/+/g;function ye(E,U){return typeof E=="object"&&E!==null&&E.key!=null?J(""+E.key):U.toString(36)}function Ne(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(fe,fe):(E.status="pending",E.then(function(U){E.status==="pending"&&(E.status="fulfilled",E.value=U)},function(U){E.status==="pending"&&(E.status="rejected",E.reason=U)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function O(E,U,ne,oe,xe){var H=typeof E;(H==="undefined"||H==="boolean")&&(E=null);var D=!1;if(E===null)D=!0;else switch(H){case"bigint":case"string":case"number":D=!0;break;case"object":switch(E.$$typeof){case s:case l:D=!0;break;case k:return D=E._init,O(D(E._payload),U,ne,oe,xe)}}if(D)return xe=xe(E),D=oe===""?"."+ye(E,0):oe,de(xe)?(ne="",D!=null&&(ne=D.replace(We,"$&/")+"/"),O(xe,U,ne,"",function(Be){return Be})):xe!=null&&(Fe(xe)&&(xe=be(xe,ne+(xe.key==null||E&&E.key===xe.key?"":(""+xe.key).replace(We,"$&/")+"/")+D)),U.push(xe)),1;D=0;var ae=oe===""?".":oe+":";if(de(E))for(var ve=0;ve<E.length;ve++)oe=E[ve],H=ae+ye(oe,ve),D+=O(oe,U,ne,H,xe);else if(ve=A(E),typeof ve=="function")for(E=ve.call(E),ve=0;!(oe=E.next()).done;)oe=oe.value,H=ae+ye(oe,ve++),D+=O(oe,U,ne,H,xe);else if(H==="object"){if(typeof E.then=="function")return O(Ne(E),U,ne,oe,xe);throw U=String(E),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return D}function te(E,U,ne){if(E==null)return E;var oe=[],xe=0;return O(E,oe,"","",function(H){return U.call(ne,H,xe++)}),oe}function ue(E){if(E._status===-1){var U=E._result;U=U(),U.then(function(ne){(E._status===0||E._status===-1)&&(E._status=1,E._result=ne)},function(ne){(E._status===0||E._status===-1)&&(E._status=2,E._result=ne)}),E._status===-1&&(E._status=0,E._result=U)}if(E._status===1)return E._result.default;throw E._result}var ce=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Se={map:te,forEach:function(E,U,ne){te(E,function(){U.apply(this,arguments)},ne)},count:function(E){var U=0;return te(E,function(){U++}),U},toArray:function(E){return te(E,function(U){return U})||[]},only:function(E){if(!Fe(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return Re.Activity=S,Re.Children=Se,Re.Component=G,Re.Fragment=c,Re.Profiler=f,Re.PureComponent=P,Re.StrictMode=a,Re.Suspense=g,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,Re.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},Re.cache=function(E){return function(){return E.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(E,U,ne){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var oe=V({},E.props),xe=E.key;if(U!=null)for(H in U.key!==void 0&&(xe=""+U.key),U)!ee.call(U,H)||H==="key"||H==="__self"||H==="__source"||H==="ref"&&U.ref===void 0||(oe[H]=U[H]);var H=arguments.length-2;if(H===1)oe.children=ne;else if(1<H){for(var D=Array(H),ae=0;ae<H;ae++)D[ae]=arguments[ae+2];oe.children=D}return Ee(E.type,xe,oe)},Re.createContext=function(E){return E={$$typeof:b,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},Re.createElement=function(E,U,ne){var oe,xe={},H=null;if(U!=null)for(oe in U.key!==void 0&&(H=""+U.key),U)ee.call(U,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(xe[oe]=U[oe]);var D=arguments.length-2;if(D===1)xe.children=ne;else if(1<D){for(var ae=Array(D),ve=0;ve<D;ve++)ae[ve]=arguments[ve+2];xe.children=ae}if(E&&E.defaultProps)for(oe in D=E.defaultProps,D)xe[oe]===void 0&&(xe[oe]=D[oe]);return Ee(E,H,xe)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(E){return{$$typeof:p,render:E}},Re.isValidElement=Fe,Re.lazy=function(E){return{$$typeof:k,_payload:{_status:-1,_result:E},_init:ue}},Re.memo=function(E,U){return{$$typeof:y,type:E,compare:U===void 0?null:U}},Re.startTransition=function(E){var U=X.T,ne={};X.T=ne;try{var oe=E(),xe=X.S;xe!==null&&xe(ne,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(fe,ce)}catch(H){ce(H)}finally{U!==null&&ne.types!==null&&(U.types=ne.types),X.T=U}},Re.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},Re.use=function(E){return X.H.use(E)},Re.useActionState=function(E,U,ne){return X.H.useActionState(E,U,ne)},Re.useCallback=function(E,U){return X.H.useCallback(E,U)},Re.useContext=function(E){return X.H.useContext(E)},Re.useDebugValue=function(){},Re.useDeferredValue=function(E,U){return X.H.useDeferredValue(E,U)},Re.useEffect=function(E,U){return X.H.useEffect(E,U)},Re.useEffectEvent=function(E){return X.H.useEffectEvent(E)},Re.useId=function(){return X.H.useId()},Re.useImperativeHandle=function(E,U,ne){return X.H.useImperativeHandle(E,U,ne)},Re.useInsertionEffect=function(E,U){return X.H.useInsertionEffect(E,U)},Re.useLayoutEffect=function(E,U){return X.H.useLayoutEffect(E,U)},Re.useMemo=function(E,U){return X.H.useMemo(E,U)},Re.useOptimistic=function(E,U){return X.H.useOptimistic(E,U)},Re.useReducer=function(E,U,ne){return X.H.useReducer(E,U,ne)},Re.useRef=function(E){return X.H.useRef(E)},Re.useState=function(E){return X.H.useState(E)},Re.useSyncExternalStore=function(E,U,ne){return X.H.useSyncExternalStore(E,U,ne)},Re.useTransition=function(){return X.H.useTransition()},Re.version="19.2.7",Re}var sh;function Qf(){return sh||(sh=1,xf.exports=nb()),xf.exports}var L=Qf();const ms=s_(L);var kf={exports:{}},as={},Sf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function rb(){return oh||(oh=1,(function(s){function l(O,te){var ue=O.length;O.push(te);e:for(;0<ue;){var ce=ue-1>>>1,Se=O[ce];if(0<f(Se,te))O[ce]=te,O[ue]=Se,ue=ce;else break e}}function c(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var te=O[0],ue=O.pop();if(ue!==te){O[0]=ue;e:for(var ce=0,Se=O.length,E=Se>>>1;ce<E;){var U=2*(ce+1)-1,ne=O[U],oe=U+1,xe=O[oe];if(0>f(ne,ue))oe<Se&&0>f(xe,ne)?(O[ce]=xe,O[oe]=ue,ce=oe):(O[ce]=ne,O[U]=ue,ce=U);else if(oe<Se&&0>f(xe,ue))O[ce]=xe,O[oe]=ue,ce=oe;else break e}}return te}function f(O,te){var ue=O.sortIndex-te.sortIndex;return ue!==0?ue:O.id-te.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var b=Date,p=b.now();s.unstable_now=function(){return b.now()-p}}var g=[],y=[],k=1,S=null,T=3,A=!1,z=!1,V=!1,Y=!1,G=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function re(O){for(var te=c(y);te!==null;){if(te.callback===null)a(y);else if(te.startTime<=O)a(y),te.sortIndex=te.expirationTime,l(g,te);else break;te=c(y)}}function de(O){if(V=!1,re(O),!z)if(c(g)!==null)z=!0,fe||(fe=!0,J());else{var te=c(y);te!==null&&Ne(de,te.startTime-O)}}var fe=!1,X=-1,ee=5,Ee=-1;function be(){return Y?!0:!(s.unstable_now()-Ee<ee)}function Fe(){if(Y=!1,fe){var O=s.unstable_now();Ee=O;var te=!0;try{e:{z=!1,V&&(V=!1,W(X),X=-1),A=!0;var ue=T;try{t:{for(re(O),S=c(g);S!==null&&!(S.expirationTime>O&&be());){var ce=S.callback;if(typeof ce=="function"){S.callback=null,T=S.priorityLevel;var Se=ce(S.expirationTime<=O);if(O=s.unstable_now(),typeof Se=="function"){S.callback=Se,re(O),te=!0;break t}S===c(g)&&a(g),re(O)}else a(g);S=c(g)}if(S!==null)te=!0;else{var E=c(y);E!==null&&Ne(de,E.startTime-O),te=!1}}break e}finally{S=null,T=ue,A=!1}te=void 0}}finally{te?J():fe=!1}}}var J;if(typeof P=="function")J=function(){P(Fe)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,ye=We.port2;We.port1.onmessage=Fe,J=function(){ye.postMessage(null)}}else J=function(){G(Fe,0)};function Ne(O,te){X=G(function(){O(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return T},s.unstable_next=function(O){switch(T){case 1:case 2:case 3:var te=3;break;default:te=T}var ue=T;T=te;try{return O()}finally{T=ue}},s.unstable_requestPaint=function(){Y=!0},s.unstable_runWithPriority=function(O,te){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ue=T;T=O;try{return te()}finally{T=ue}},s.unstable_scheduleCallback=function(O,te,ue){var ce=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?ce+ue:ce):ue=ce,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ue+Se,O={id:k++,callback:te,priorityLevel:O,startTime:ue,expirationTime:Se,sortIndex:-1},ue>ce?(O.sortIndex=ue,l(y,O),c(g)===null&&O===c(y)&&(V?(W(X),X=-1):V=!0,Ne(de,ue-ce))):(O.sortIndex=Se,l(g,O),z||A||(z=!0,fe||(fe=!0,J()))),O},s.unstable_shouldYield=be,s.unstable_wrapCallback=function(O){var te=T;return function(){var ue=T;T=te;try{return O.apply(this,arguments)}finally{T=ue}}}})(wf)),wf}var ch;function lb(){return ch||(ch=1,Sf.exports=rb()),Sf.exports}var Ef={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function ib(){if(uh)return Zt;uh=1;var s=Qf();function l(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)y+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(l(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(g,y,k){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:g,containerInfo:y,implementation:k}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Zt.createPortal=function(g,y){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(l(299));return h(g,y,null,k)},Zt.flushSync=function(g){var y=b.T,k=a.p;try{if(b.T=null,a.p=2,g)return g()}finally{b.T=y,a.p=k,a.d.f()}},Zt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},Zt.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Zt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var k=y.as,S=p(k,y.crossOrigin),T=typeof y.integrity=="string"?y.integrity:void 0,A=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;k==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:A}):k==="script"&&a.d.X(g,{crossOrigin:S,integrity:T,fetchPriority:A,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Zt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var k=p(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},Zt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var k=y.as,S=p(k,y.crossOrigin);a.d.L(g,k,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Zt.preloadModule=function(g,y){if(typeof g=="string")if(y){var k=p(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},Zt.requestFormReset=function(g){a.d.r(g)},Zt.unstable_batchedUpdates=function(g,y){return g(y)},Zt.useFormState=function(g,y,k){return b.H.useFormState(g,y,k)},Zt.useFormStatus=function(){return b.H.useHostTransitionStatus()},Zt.version="19.2.7",Zt}var fh;function ab(){if(fh)return Ef.exports;fh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Ef.exports=ib(),Ef.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function sb(){if(dh)return as;dh=1;var s=lb(),l=Qf(),c=ab();function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(a(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return g(i),e;if(o===r)return g(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var m=!1,v=i.child;v;){if(v===n){m=!0,n=i,r=o;break}if(v===r){m=!0,r=i,n=o;break}v=v.sibling}if(!m){for(v=o.child;v;){if(v===n){m=!0,n=o,r=i;break}if(v===r){m=!0,r=o,n=i;break}v=v.sibling}if(!m)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),P=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),Fe=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=Fe&&e[Fe]||e["@@iterator"],typeof e=="function"?e:null)}var We=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===We?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case de:return"Suspense";case fe:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case P:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var Ne=Array.isArray,O=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},ce=[],Se=-1;function E(e){return{current:e}}function U(e){0>Se||(e.current=ce[Se],ce[Se]=null,Se--)}function ne(e,t){Se++,ce[Se]=e.current,e.current=t}var oe=E(null),xe=E(null),H=E(null),D=E(null);function ae(e,t){switch(ne(H,t),ne(xe,e),ne(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Np(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Np(t),e=Rp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(oe),ne(oe,e)}function ve(){U(oe),U(xe),U(H)}function Be(e){e.memoizedState!==null&&ne(D,e);var t=oe.current,n=Rp(t,e.type);t!==n&&(ne(xe,e),ne(oe,n))}function Ge(e){xe.current===e&&(U(oe),U(xe)),D.current===e&&(U(D),ts._currentValue=ue)}var _e,Oe;function yt(e){if(_e===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||"",Oe=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+Oe}var Ce=!1;function dt(e,t){if(!e||Ce)return"";Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(F){var I=F}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(F){I=F}e.call(Q.prototype)}}else{try{throw Error()}catch(F){I=F}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(F){if(F&&I&&typeof F.stack=="string")return[F.stack,I.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),m=o[0],v=o[1];if(m&&v){var w=m.split(`
`),B=v.split(`
`);for(i=r=0;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;for(;i<B.length&&!B[i].includes("DetermineComponentFrameRoot");)i++;if(r===w.length||i===B.length)for(r=w.length-1,i=B.length-1;1<=r&&0<=i&&w[r]!==B[i];)i--;for(;1<=r&&0<=i;r--,i--)if(w[r]!==B[i]){if(r!==1||i!==1)do if(r--,i--,0>i||w[r]!==B[i]){var q=`
`+w[r].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?yt(n):""}function $t(e,t){switch(e.tag){case 26:case 27:case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return e.child!==t&&t!==null?yt("Suspense Fallback"):yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return dt(e.type,!1);case 11:return dt(e.type.render,!1);case 1:return dt(e.type,!0);case 31:return yt("Activity");default:return""}}function Tt(e){try{var t="",n=null;do t+=$t(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var fr=Object.prototype.hasOwnProperty,$n=s.unstable_scheduleCallback,Mn=s.unstable_cancelCallback,ui=s.unstable_shouldYield,Gr=s.unstable_requestPaint,vt=s.unstable_now,Dl=s.unstable_getCurrentPriorityLevel,Vr=s.unstable_ImmediatePriority,sa=s.unstable_UserBlockingPriority,Ol=s.unstable_NormalPriority,en=s.unstable_LowPriority,mn=s.unstable_IdlePriority,nr=s.log,fi=s.unstable_setDisableYieldValue,Cl=null,Nt=null;function pn(e){if(typeof nr=="function"&&fi(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Cl,e)}catch{}}var Lt=Math.clz32?Math.clz32:mr,Yr=Math.log,dr=Math.LN2;function mr(e){return e>>>=0,e===0?32:31-(Yr(e)/dr|0)|0}var hn=256,qt=262144,qe=4194304;function lt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function it(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=r&134217727;return v!==0?(r=v&~o,r!==0?i=lt(r):(m&=v,m!==0?i=lt(m):n||(n=v&~e,n!==0&&(i=lt(n))))):(v=r&~o,v!==0?i=lt(v):m!==0?i=lt(m):n||(n=r&~e,n!==0&&(i=lt(n)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:i}function Ot(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fc(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bl(){var e=qe;return qe<<=1,(qe&62914560)===0&&(qe=4194304),e}function rr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ll(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pr(e,t,n,r,i,o){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,w=e.expirationTimes,B=e.hiddenUpdates;for(n=m&~n;0<n;){var q=31-Lt(n),Q=1<<q;v[q]=0,w[q]=-1;var I=B[q];if(I!==null)for(B[q]=null,q=0;q<I.length;q++){var F=I[q];F!==null&&(F.lane&=-536870913)}n&=~Q}r!==0&&vs(e,r,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function vs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Lt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function xs(e,t){var n=t&-t;return n=(n&42)!==0?1:$r(n),(n&(e.suspendedLanes|t))!==0?0:n}function $r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function An(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ot(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:Wp(e.type))}function oa(e,t){var n=te.p;try{return te.p=e,t()}finally{te.p=n}}var zt=Math.random().toString(36).slice(2),_t="__reactFiber$"+zt,Ct="__reactProps$"+zt,qn="__reactContainer$"+zt,qr="__reactEvents$"+zt,Kr="__reactListeners$"+zt,mi="__reactHandles$"+zt,_n="__reactResources$"+zt,gn="__reactMarker$"+zt;function hr(e){delete e[_t],delete e[Ct],delete e[qr],delete e[Kr],delete e[mi]}function Kt(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qn]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bp(e);e!==null;){if(n=e[_t])return n;e=Bp(e)}return t}e=n,n=e.parentNode}return null}function bn(e){if(e=e[_t]||e[qn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Kn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function ln(e){var t=e[_n];return t||(t=e[_n]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function mt(e){e[gn]=!0}var Xn=new Set,Xr={};function tn(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(Xr[e]=t,e=0;e<t.length;e++)Xn.add(t[e])}var Qr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ca={},Wr={};function pi(e){return fr.call(Wr,e)?!0:fr.call(ca,e)?!1:Qr.test(e)?Wr[e]=!0:(ca[e]=!0,!1)}function _r(e,t,n){if(pi(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hi(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dc(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(m){n=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){if(!e._valueTracker){var t=hi(e)?"checked":"value";e._valueTracker=dc(e,t,""+e[t])}}function ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hi(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zl=/[\n"\\]/g;function Rt(e){return e.replace(zl,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ul(e,t,n,r,i,o,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+he(t)):e.value!==""+he(t)&&(e.value=""+he(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Il(e,m,he(t)):n!=null?Il(e,m,he(n)):r!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+he(v):e.removeAttribute("name")}function vn(e,t,n,r,i,o,m,v){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){ua(e);return}n=n!=null?""+he(n):"",t=t!=null?""+he(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=v?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),ua(e)}function Il(e,t,n){t==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+he(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ss(e,t,n){if(t!=null&&(t=""+he(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+he(n):""}function ws(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(Ne(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=he(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),ua(e)}function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||fa.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Es(e,t,n){if(t!=null&&typeof t!="object")throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&$(e,i,r)}else for(var o in t)t.hasOwnProperty(o)&&$(e,o,t[o])}function da(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(e){return Hl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Dn(){}var Zr=null;function ct(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Wn=null;function Jr(e){var t=bn(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ul(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Ct]||null;if(!i)throw Error(a(90));Ul(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&ks(r)}break e;case"textarea":Ss(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&jt(e,!!n.multiple,t,!1)}}}var ma=!1;function Ts(e,t,n){if(ma)return e(t,n);ma=!0;try{var r=e(t);return r}finally{if(ma=!1,(br!==null||Wn!==null)&&(Eo(),br&&(t=br,e=Wn,Wn=br=null,Jr(t),e)))for(t=0;t<e.length;t++)Jr(e[t])}}function Fl(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ct]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=!1;if(On)try{var el={};Object.defineProperty(el,"passive",{get:function(){pa=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{pa=!1}var Ut=null,yr=null,gi=null;function It(){if(gi)return gi;var e,t=yr,n=t.length,r,i="value"in Ut?Ut.value:Ut.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===i[o-r];r++);return gi=i.slice(e,1<r?1-r:void 0)}function Gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Mt(){return!1}function xt(e){function t(n,r,i,o,m){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(o):o[v]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?tl:Mt,this.isPropagationStopped=Mt,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=xt(vr),Zn=S({},vr,{view:0,detail:0}),pc=xt(Zn),yi,nl,lr,Vl=S({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(yi=e.screenX-lr.screenX,nl=e.screenY-lr.screenY):nl=yi=0,lr=e),yi)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),vi=xt(Vl),hc=S({},Vl,{dataTransfer:0}),_c=xt(hc),gc=S({},Zn,{relatedTarget:0}),an=xt(gc),ut=S({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),ha=xt(ut),Yl=S({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ns=xt(Yl),Rs=S({},vr,{data:0}),_a=xt(Rs),bc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function js(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vc[e])?!!t[e]:!1}function xi(){return js}var ga=S({},Zn,{key:function(e){if(e.key){var t=bc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xi,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xc=xt(ga),Ms=S({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ba=xt(Ms),As=S({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xi}),kc=xt(As),Sc=S({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ds=xt(Sc),ya=S({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wc=xt(ya),Ec=S({},vr,{newState:0,oldState:0}),Tc=xt(Ec),Nc=[9,13,27,32],va=On&&"CompositionEvent"in window,$l=null;On&&"documentMode"in document&&($l=document.documentMode);var Rc=On&&"TextEvent"in window&&!$l,Os=On&&(!va||$l&&8<$l&&11>=$l),Cs=" ",Bs=!1;function Ls(e,t){switch(e){case"keyup":return Nc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function zs(e,t){switch(e){case"compositionend":return xr(t);case"keypress":return t.which!==32?null:(Bs=!0,Cs);case"textInput":return e=t.data,e===Cs&&Bs?null:e;default:return null}}function Us(e,t){if(rl)return e==="compositionend"||!va&&Ls(e,t)?(e=It(),gi=yr=Ut=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Os&&t.locale!=="ko"?null:t.data;default:return null}}var jc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jc[e.type]:t==="textarea"}function Is(e,t,n,r){br?Wn?Wn.push(r):Wn=[r]:br=r,t=Do(t,"onChange"),0<t.length&&(n=new bi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ql=null,ll=null;function Mc(e){xp(e,0)}function ki(e){var t=Kn(e);if(ks(t))return e}function Hs(e,t){if(e==="change")return t}var Ps=!1;if(On){var ka;if(On){var Sa="oninput"in document;if(!Sa){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),Sa=typeof Fs.oninput=="function"}ka=Sa}else ka=!1;Ps=ka&&(!document.documentMode||9<document.documentMode)}function Si(){ql&&(ql.detachEvent("onpropertychange",xn),ll=ql=null)}function xn(e){if(e.propertyName==="value"&&ki(ll)){var t=[];Is(t,ll,e,ct(e)),Ts(Mc,t)}}function Gs(e,t,n){e==="focusin"?(Si(),ql=t,ll=n,ql.attachEvent("onpropertychange",xn)):e==="focusout"&&Si()}function Ac(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(ll)}function Dc(e,t){if(e==="click")return ki(t)}function wa(e,t){if(e==="input"||e==="change")return ki(t)}function wi(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:wi;function il(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fr.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ei(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kr(n)}}function Ea(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ea(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Oc=On&&"documentMode"in document&&11>=document.documentMode,d=null,_=null,x=null,R=!1;function j(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;R||d==null||d!==_i(r)||(r=d,"selectionStart"in r&&Ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),x&&il(x,r)||(x=r,r=Do(_,"onSelect"),0<r.length&&(t=new bi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=d)))}function Z(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var se={animationend:Z("Animation","AnimationEnd"),animationiteration:Z("Animation","AnimationIteration"),animationstart:Z("Animation","AnimationStart"),transitionrun:Z("Transition","TransitionRun"),transitionstart:Z("Transition","TransitionStart"),transitioncancel:Z("Transition","TransitionCancel"),transitionend:Z("Transition","TransitionEnd")},Ve={},Te={};On&&(Te=document.createElement("div").style,"AnimationEvent"in window||(delete se.animationend.animation,delete se.animationiteration.animation,delete se.animationstart.animation),"TransitionEvent"in window||delete se.transitionend.transition);function Le(e){if(Ve[e])return Ve[e];if(!se[e])return e;var t=se[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Te)return Ve[e]=t[n];return e}var ft=Le("animationend"),Qt=Le("animationiteration"),Ae=Le("animationstart"),at=Le("transitionrun"),Sr=Le("transitionstart"),Jn=Le("transitioncancel"),Cn=Le("transitionend"),wr=new Map,ir="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ir.push("scrollEnd");function sn(e,t){wr.set(e,t),tn(t,[e])}var Er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],Bn=0,Ti=0;function Ys(){for(var e=Bn,t=Ti=Bn=0;t<e;){var n=Wt[t];Wt[t++]=null;var r=Wt[t];Wt[t++]=null;var i=Wt[t];Wt[t++]=null;var o=Wt[t];if(Wt[t++]=null,r!==null&&i!==null){var m=r.pending;m===null?i.next=i:(i.next=m.next,m.next=i),r.pending=i}o!==0&&nd(n,i,o)}}function $s(e,t,n,r){Wt[Bn++]=e,Wt[Bn++]=t,Wt[Bn++]=n,Wt[Bn++]=r,Ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Cc(e,t,n,r){return $s(e,t,n,r),qs(e)}function Kl(e,t){return $s(e,null,null,t),qs(e)}function nd(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,o=e.return;o!==null;)o.childLanes|=n,r=o.alternate,r!==null&&(r.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-Lt(n),e=o.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),o):null}function qs(e){if(50<Ka)throw Ka=0,Gu=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ni={};function B_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,t,n,r){return new B_(e,t,n,r)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tr(e,t){var n=e.alternate;return n===null?(n=kn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function rd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ks(e,t,n,r,i,o){var m=0;if(r=e,typeof e=="function")Bc(e)&&(m=1);else if(typeof e=="string")m=Hg(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=kn(31,n,t,i),e.elementType=Ee,e.lanes=o,e;case V:return Xl(n.children,i,o,t);case Y:m=8,i|=24;break;case G:return e=kn(12,n,t,i|2),e.elementType=G,e.lanes=o,e;case de:return e=kn(13,n,t,i),e.elementType=de,e.lanes=o,e;case fe:return e=kn(19,n,t,i),e.elementType=fe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:m=10;break e;case W:m=9;break e;case re:m=11;break e;case X:m=14;break e;case ee:m=16,r=null;break e}m=29,n=Error(a(130,e===null?"null":typeof e,"")),r=null}return t=kn(m,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xl(e,t,n,r){return e=kn(7,e,r,t),e.lanes=n,e}function Lc(e,t,n){return e=kn(6,e,null,t),e.lanes=n,e}function ld(e){var t=kn(18,null,null,0);return t.stateNode=e,t}function zc(e,t,n){return t=kn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var id=new WeakMap;function Ln(e,t){if(typeof e=="object"&&e!==null){var n=id.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Tt(t)},id.set(e,t),t)}return{value:e,source:t,stack:Tt(t)}}var Ri=[],ji=0,Xs=null,Na=0,zn=[],Un=0,al=null,ar=1,sr="";function Nr(e,t){Ri[ji++]=Na,Ri[ji++]=Xs,Xs=e,Na=t}function ad(e,t,n){zn[Un++]=ar,zn[Un++]=sr,zn[Un++]=al,al=e;var r=ar;e=sr;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var o=32-Lt(t)+i;if(30<o){var m=i-i%5;o=(r&(1<<m)-1).toString(32),r>>=m,i-=m,ar=1<<32-Lt(t)+i|n<<i|r,sr=o+e}else ar=1<<o|n<<i|r,sr=e}function Uc(e){e.return!==null&&(Nr(e,1),ad(e,1,0))}function Ic(e){for(;e===Xs;)Xs=Ri[--ji],Ri[ji]=null,Na=Ri[--ji],Ri[ji]=null;for(;e===al;)al=zn[--Un],zn[Un]=null,sr=zn[--Un],zn[Un]=null,ar=zn[--Un],zn[Un]=null}function sd(e,t){zn[Un++]=ar,zn[Un++]=sr,zn[Un++]=al,ar=t.id,sr=t.overflow,al=e}var Pt=null,nt=null,Pe=!1,sl=null,In=!1,Hc=Error(a(519));function ol(e){var t=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ra(Ln(t,e)),Hc}function od(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[Ct]=r,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Qa.length;n++)Ue(Qa[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),vn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),ws(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||Ep(t.textContent,n)?(r.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),r.onScroll!=null&&Ue("scroll",t),r.onScrollEnd!=null&&Ue("scrollend",t),r.onClick!=null&&(t.onclick=Dn),t=!0):t=!1,t||ol(e,!0)}function cd(e){for(Pt=e.return;Pt;)switch(Pt.tag){case 5:case 31:case 13:In=!1;return;case 27:case 3:In=!0;return;default:Pt=Pt.return}}function Mi(e){if(e!==Pt)return!1;if(!Pe)return cd(e),Pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lf(e.type,e.memoizedProps)),n=!n),n&&nt&&ol(e),cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nt=Cp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nt=Cp(e)}else t===27?(t=nt,kl(e.type)?(e=uf,uf=null,nt=e):nt=t):nt=Pt?Pn(e.stateNode.nextSibling):null;return!0}function Ql(){nt=Pt=null,Pe=!1}function Pc(){var e=sl;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),sl=null),e}function Ra(e){sl===null?sl=[e]:sl.push(e)}var Fc=E(null),Wl=null,Rr=null;function cl(e,t,n){ne(Fc,t._currentValue),t._currentValue=n}function jr(e){e._currentValue=Fc.current,U(Fc)}function Gc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vc(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var m=i.child;o=o.firstContext;e:for(;o!==null;){var v=o;o=i;for(var w=0;w<t.length;w++)if(v.context===t[w]){o.lanes|=n,v=o.alternate,v!==null&&(v.lanes|=n),Gc(o.return,n,e),r||(m=null);break e}o=v.next}}else if(i.tag===18){if(m=i.return,m===null)throw Error(a(341));m.lanes|=n,o=m.alternate,o!==null&&(o.lanes|=n),Gc(m,n,e),m=null}else m=i.child;if(m!==null)m.return=i;else for(m=i;m!==null;){if(m===e){m=null;break}if(i=m.sibling,i!==null){i.return=m.return,m=i;break}m=m.return}i=m}}function Ai(e,t,n,r){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var m=i.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var v=i.type;Ht(i.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(i===D.current){if(m=i.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ts):e=[ts])}i=i.return}e!==null&&Vc(t,e,n,r),t.flags|=262144}function Qs(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zl(e){Wl=e,Rr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ft(e){return ud(Wl,e)}function Ws(e,t){return Wl===null&&Zl(e),ud(e,t)}function ud(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rr===null){if(e===null)throw Error(a(308));Rr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rr=Rr.next=t;return n}var L_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},z_=s.unstable_scheduleCallback,U_=s.unstable_NormalPriority,kt={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yc(){return{controller:new L_,data:new Map,refCount:0}}function ja(e){e.refCount--,e.refCount===0&&z_(U_,function(){e.controller.abort()})}var Ma=null,$c=0,Di=0,Oi=null;function I_(e,t){if(Ma===null){var n=Ma=[];$c=0,Di=Xu(),Oi={status:"pending",value:void 0,then:function(r){n.push(r)}}}return $c++,t.then(fd,fd),t}function fd(){if(--$c===0&&Ma!==null){Oi!==null&&(Oi.status="fulfilled");var e=Ma;Ma=null,Di=0,Oi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H_(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var dd=O.S;O.S=function(e,t){Xm=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&I_(e,t),dd!==null&&dd(e,t)};var Jl=E(null);function qc(){var e=Jl.current;return e!==null?e:tt.pooledCache}function Zs(e,t){t===null?ne(Jl,Jl.current):ne(Jl,t.pool)}function md(){var e=qc();return e===null?null:{parent:kt._currentValue,pool:e}}var Ci=Error(a(460)),Kc=Error(a(474)),Js=Error(a(542)),eo={then:function(){}};function pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Dn,Dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e;default:if(typeof t.status=="string")t.then(Dn,Dn);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=r}},function(r){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e}throw ti=t,Ci}}function ei(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ti=n,Ci):n}}var ti=null;function _d(){if(ti===null)throw Error(a(459));var e=ti;return ti=null,e}function gd(e){if(e===Ci||e===Js)throw Error(a(483))}var Bi=null,Aa=0;function to(e){var t=Aa;return Aa+=1,Bi===null&&(Bi=[]),hd(Bi,e,t)}function Da(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function no(e,t){throw t.$$typeof===T?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bd(e){function t(M,N){if(e){var C=M.deletions;C===null?(M.deletions=[N],M.flags|=16):C.push(N)}}function n(M,N){if(!e)return null;for(;N!==null;)t(M,N),N=N.sibling;return null}function r(M){for(var N=new Map;M!==null;)M.key!==null?N.set(M.key,M):N.set(M.index,M),M=M.sibling;return N}function i(M,N){return M=Tr(M,N),M.index=0,M.sibling=null,M}function o(M,N,C){return M.index=C,e?(C=M.alternate,C!==null?(C=C.index,C<N?(M.flags|=67108866,N):C):(M.flags|=67108866,N)):(M.flags|=1048576,N)}function m(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function v(M,N,C,K){return N===null||N.tag!==6?(N=Lc(C,M.mode,K),N.return=M,N):(N=i(N,C),N.return=M,N)}function w(M,N,C,K){var ke=C.type;return ke===V?q(M,N,C.props.children,K,C.key):N!==null&&(N.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ee&&ei(ke)===N.type)?(N=i(N,C.props),Da(N,C),N.return=M,N):(N=Ks(C.type,C.key,C.props,null,M.mode,K),Da(N,C),N.return=M,N)}function B(M,N,C,K){return N===null||N.tag!==4||N.stateNode.containerInfo!==C.containerInfo||N.stateNode.implementation!==C.implementation?(N=zc(C,M.mode,K),N.return=M,N):(N=i(N,C.children||[]),N.return=M,N)}function q(M,N,C,K,ke){return N===null||N.tag!==7?(N=Xl(C,M.mode,K,ke),N.return=M,N):(N=i(N,C),N.return=M,N)}function Q(M,N,C){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Lc(""+N,M.mode,C),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case A:return C=Ks(N.type,N.key,N.props,null,M.mode,C),Da(C,N),C.return=M,C;case z:return N=zc(N,M.mode,C),N.return=M,N;case ee:return N=ei(N),Q(M,N,C)}if(Ne(N)||J(N))return N=Xl(N,M.mode,C,null),N.return=M,N;if(typeof N.then=="function")return Q(M,to(N),C);if(N.$$typeof===P)return Q(M,Ws(M,N),C);no(M,N)}return null}function I(M,N,C,K){var ke=N!==null?N.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return ke!==null?null:v(M,N,""+C,K);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case A:return C.key===ke?w(M,N,C,K):null;case z:return C.key===ke?B(M,N,C,K):null;case ee:return C=ei(C),I(M,N,C,K)}if(Ne(C)||J(C))return ke!==null?null:q(M,N,C,K,null);if(typeof C.then=="function")return I(M,N,to(C),K);if(C.$$typeof===P)return I(M,N,Ws(M,C),K);no(M,C)}return null}function F(M,N,C,K,ke){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return M=M.get(C)||null,v(N,M,""+K,ke);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case A:return M=M.get(K.key===null?C:K.key)||null,w(N,M,K,ke);case z:return M=M.get(K.key===null?C:K.key)||null,B(N,M,K,ke);case ee:return K=ei(K),F(M,N,C,K,ke)}if(Ne(K)||J(K))return M=M.get(C)||null,q(N,M,K,ke,null);if(typeof K.then=="function")return F(M,N,C,to(K),ke);if(K.$$typeof===P)return F(M,N,C,Ws(N,K),ke);no(N,K)}return null}function me(M,N,C,K){for(var ke=null,Ye=null,ge=N,De=N=0,He=null;ge!==null&&De<C.length;De++){ge.index>De?(He=ge,ge=null):He=ge.sibling;var $e=I(M,ge,C[De],K);if($e===null){ge===null&&(ge=He);break}e&&ge&&$e.alternate===null&&t(M,ge),N=o($e,N,De),Ye===null?ke=$e:Ye.sibling=$e,Ye=$e,ge=He}if(De===C.length)return n(M,ge),Pe&&Nr(M,De),ke;if(ge===null){for(;De<C.length;De++)ge=Q(M,C[De],K),ge!==null&&(N=o(ge,N,De),Ye===null?ke=ge:Ye.sibling=ge,Ye=ge);return Pe&&Nr(M,De),ke}for(ge=r(ge);De<C.length;De++)He=F(ge,M,De,C[De],K),He!==null&&(e&&He.alternate!==null&&ge.delete(He.key===null?De:He.key),N=o(He,N,De),Ye===null?ke=He:Ye.sibling=He,Ye=He);return e&&ge.forEach(function(Nl){return t(M,Nl)}),Pe&&Nr(M,De),ke}function we(M,N,C,K){if(C==null)throw Error(a(151));for(var ke=null,Ye=null,ge=N,De=N=0,He=null,$e=C.next();ge!==null&&!$e.done;De++,$e=C.next()){ge.index>De?(He=ge,ge=null):He=ge.sibling;var Nl=I(M,ge,$e.value,K);if(Nl===null){ge===null&&(ge=He);break}e&&ge&&Nl.alternate===null&&t(M,ge),N=o(Nl,N,De),Ye===null?ke=Nl:Ye.sibling=Nl,Ye=Nl,ge=He}if($e.done)return n(M,ge),Pe&&Nr(M,De),ke;if(ge===null){for(;!$e.done;De++,$e=C.next())$e=Q(M,$e.value,K),$e!==null&&(N=o($e,N,De),Ye===null?ke=$e:Ye.sibling=$e,Ye=$e);return Pe&&Nr(M,De),ke}for(ge=r(ge);!$e.done;De++,$e=C.next())$e=F(ge,M,De,$e.value,K),$e!==null&&(e&&$e.alternate!==null&&ge.delete($e.key===null?De:$e.key),N=o($e,N,De),Ye===null?ke=$e:Ye.sibling=$e,Ye=$e);return e&&ge.forEach(function(Wg){return t(M,Wg)}),Pe&&Nr(M,De),ke}function et(M,N,C,K){if(typeof C=="object"&&C!==null&&C.type===V&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case A:e:{for(var ke=C.key;N!==null;){if(N.key===ke){if(ke=C.type,ke===V){if(N.tag===7){n(M,N.sibling),K=i(N,C.props.children),K.return=M,M=K;break e}}else if(N.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ee&&ei(ke)===N.type){n(M,N.sibling),K=i(N,C.props),Da(K,C),K.return=M,M=K;break e}n(M,N);break}else t(M,N);N=N.sibling}C.type===V?(K=Xl(C.props.children,M.mode,K,C.key),K.return=M,M=K):(K=Ks(C.type,C.key,C.props,null,M.mode,K),Da(K,C),K.return=M,M=K)}return m(M);case z:e:{for(ke=C.key;N!==null;){if(N.key===ke)if(N.tag===4&&N.stateNode.containerInfo===C.containerInfo&&N.stateNode.implementation===C.implementation){n(M,N.sibling),K=i(N,C.children||[]),K.return=M,M=K;break e}else{n(M,N);break}else t(M,N);N=N.sibling}K=zc(C,M.mode,K),K.return=M,M=K}return m(M);case ee:return C=ei(C),et(M,N,C,K)}if(Ne(C))return me(M,N,C,K);if(J(C)){if(ke=J(C),typeof ke!="function")throw Error(a(150));return C=ke.call(C),we(M,N,C,K)}if(typeof C.then=="function")return et(M,N,to(C),K);if(C.$$typeof===P)return et(M,N,Ws(M,C),K);no(M,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,N!==null&&N.tag===6?(n(M,N.sibling),K=i(N,C),K.return=M,M=K):(n(M,N),K=Lc(C,M.mode,K),K.return=M,M=K),m(M)):n(M,N)}return function(M,N,C,K){try{Aa=0;var ke=et(M,N,C,K);return Bi=null,ke}catch(ge){if(ge===Ci||ge===Js)throw ge;var Ye=kn(29,ge,null,M.mode);return Ye.lanes=K,Ye.return=M,Ye}finally{}}}var ni=bd(!0),yd=bd(!1),ul=!1;function Xc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function dl(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ke&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=qs(e),nd(e,null,n),t}return $s(e,r,t,n),qs(e)}function Oa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,di(e,n)}}function Wc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?i=o=m:o=o.next=m,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Zc=!1;function Ca(){if(Zc){var e=Oi;if(e!==null)throw e}}function Ba(e,t,n,r){Zc=!1;var i=e.updateQueue;ul=!1;var o=i.firstBaseUpdate,m=i.lastBaseUpdate,v=i.shared.pending;if(v!==null){i.shared.pending=null;var w=v,B=w.next;w.next=null,m===null?o=B:m.next=B,m=w;var q=e.alternate;q!==null&&(q=q.updateQueue,v=q.lastBaseUpdate,v!==m&&(v===null?q.firstBaseUpdate=B:v.next=B,q.lastBaseUpdate=w))}if(o!==null){var Q=i.baseState;m=0,q=B=w=null,v=o;do{var I=v.lane&-536870913,F=I!==v.lane;if(F?(Ie&I)===I:(r&I)===I){I!==0&&I===Di&&(Zc=!0),q!==null&&(q=q.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var me=e,we=v;I=t;var et=n;switch(we.tag){case 1:if(me=we.payload,typeof me=="function"){Q=me.call(et,Q,I);break e}Q=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=we.payload,I=typeof me=="function"?me.call(et,Q,I):me,I==null)break e;Q=S({},Q,I);break e;case 2:ul=!0}}I=v.callback,I!==null&&(e.flags|=64,F&&(e.flags|=8192),F=i.callbacks,F===null?i.callbacks=[I]:F.push(I))}else F={lane:I,tag:v.tag,payload:v.payload,callback:v.callback,next:null},q===null?(B=q=F,w=Q):q=q.next=F,m|=I;if(v=v.next,v===null){if(v=i.shared.pending,v===null)break;F=v,v=F.next,F.next=null,i.lastBaseUpdate=F,i.shared.pending=null}}while(!0);q===null&&(w=Q),i.baseState=w,i.firstBaseUpdate=B,i.lastBaseUpdate=q,o===null&&(i.shared.lanes=0),gl|=m,e.lanes=m,e.memoizedState=Q}}function vd(e,t){if(typeof e!="function")throw Error(a(191,e));e.call(t)}function xd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vd(n[e],t)}var Li=E(null),ro=E(0);function kd(e,t){e=Ur,ne(ro,e),ne(Li,t),Ur=e|t.baseLanes}function Jc(){ne(ro,Ur),ne(Li,Li.current)}function eu(){Ur=ro.current,U(Li),U(ro)}var Sn=E(null),Hn=null;function ml(e){var t=e.alternate;ne(gt,gt.current&1),ne(Sn,e),Hn===null&&(t===null||Li.current!==null||t.memoizedState!==null)&&(Hn=e)}function tu(e){ne(gt,gt.current),ne(Sn,e),Hn===null&&(Hn=e)}function Sd(e){e.tag===22?(ne(gt,gt.current),ne(Sn,e),Hn===null&&(Hn=e)):pl()}function pl(){ne(gt,gt.current),ne(Sn,Sn.current)}function wn(e){U(Sn),Hn===e&&(Hn=null),U(gt)}var gt=E(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mr=0,Me=null,Ze=null,St=null,io=!1,zi=!1,ri=!1,ao=0,La=0,Ui=null,P_=0;function pt(){throw Error(a(321))}function nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function ru(e,t,n,r,i,o){return Mr=o,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?am:bu,ri=!1,o=n(r,i),ri=!1,zi&&(o=Ed(t,n,r,i)),wd(e),o}function wd(e){O.H=Ia;var t=Ze!==null&&Ze.next!==null;if(Mr=0,St=Ze=Me=null,io=!1,La=0,Ui=null,t)throw Error(a(300));e===null||wt||(e=e.dependencies,e!==null&&Qs(e)&&(wt=!0))}function Ed(e,t,n,r){Me=e;var i=0;do{if(zi&&(Ui=null),La=0,zi=!1,25<=i)throw Error(a(301));if(i+=1,St=Ze=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=sm,o=t(n,r)}while(zi);return o}function F_(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?za(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Me.flags|=1024),t}function lu(){var e=ao!==0;return ao=0,e}function iu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function au(e){if(io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}io=!1}Mr=0,St=Ze=Me=null,zi=!1,La=ao=0,Ui=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Me.memoizedState=St=e:St=St.next=e,St}function bt(){if(Ze===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=St===null?Me.memoizedState:St.next;if(t!==null)St=t,Ze=e;else{if(e===null)throw Me.alternate===null?Error(a(467)):Error(a(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},St===null?Me.memoizedState=St=e:St=St.next=e}return St}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function za(e){var t=La;return La+=1,Ui===null&&(Ui=[]),e=hd(Ui,e,t),t=Me,(St===null?t.memoizedState:St.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?am:bu),e}function oo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return za(e);if(e.$$typeof===P)return Ft(e)}throw Error(a(438,String(e)))}function su(e){var t=null,n=Me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=so(),Me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=be;return t.index++,n}function Ar(e,t){return typeof t=="function"?t(e):t}function co(e){var t=bt();return ou(t,Ze,e)}function ou(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(o!==null){if(i!==null){var m=i.next;i.next=o.next,o.next=m}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var v=m=null,w=null,B=t,q=!1;do{var Q=B.lane&-536870913;if(Q!==B.lane?(Ie&Q)===Q:(Mr&Q)===Q){var I=B.revertLane;if(I===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Q===Di&&(q=!0);else if((Mr&I)===I){B=B.next,I===Di&&(q=!0);continue}else Q={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(v=w=Q,m=o):w=w.next=Q,Me.lanes|=I,gl|=I;Q=B.action,ri&&n(o,Q),o=B.hasEagerState?B.eagerState:n(o,Q)}else I={lane:Q,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(v=w=I,m=o):w=w.next=I,Me.lanes|=Q,gl|=Q;B=B.next}while(B!==null&&B!==t);if(w===null?m=o:w.next=v,!Ht(o,e.memoizedState)&&(wt=!0,q&&(n=Oi,n!==null)))throw n;e.memoizedState=o,e.baseState=m,e.baseQueue=w,r.lastRenderedState=o}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function cu(e){var t=bt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var m=i=i.next;do o=e(o,m.action),m=m.next;while(m!==i);Ht(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Td(e,t,n){var r=Me,i=bt(),o=Pe;if(o){if(n===void 0)throw Error(a(407));n=n()}else n=t();var m=!Ht((Ze||i).memoizedState,n);if(m&&(i.memoizedState=n,wt=!0),i=i.queue,du(jd.bind(null,r,i,e),[e]),i.getSnapshot!==t||m||St!==null&&St.memoizedState.tag&1){if(r.flags|=2048,Ii(9,{destroy:void 0},Rd.bind(null,r,i,n,t),null),tt===null)throw Error(a(349));o||(Mr&127)!==0||Nd(r,t,n)}return n}function Nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t=so(),Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rd(e,t,n,r){t.value=n,t.getSnapshot=r,Md(t)&&Ad(e)}function jd(e,t,n){return n(function(){Md(t)&&Ad(e)})}function Md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function Ad(e){var t=Kl(e,2);t!==null&&dn(t,e,2)}function uu(e){var t=nn();if(typeof e=="function"){var n=e;if(e=n(),ri){pn(!0);try{n()}finally{pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t}function Dd(e,t,n,r){return e.baseState=n,ou(e,Ze,typeof r=="function"?r:Ar)}function G_(e,t,n,r,i){if(mo(e))throw Error(a(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};O.T!==null?n(!0):o.isTransition=!1,r(o),n=t.pending,n===null?(o.next=t.pending=o,Od(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Od(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var o=O.T,m={};O.T=m;try{var v=n(i,r),w=O.S;w!==null&&w(m,v),Cd(e,t,v)}catch(B){fu(e,t,B)}finally{o!==null&&m.types!==null&&(o.types=m.types),O.T=o}}else try{o=n(i,r),Cd(e,t,o)}catch(B){fu(e,t,B)}}function Cd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Bd(e,t,r)},function(r){return fu(e,t,r)}):Bd(e,t,n)}function Bd(e,t,n){t.status="fulfilled",t.value=n,Ld(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Od(e,n)))}function fu(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Ld(t),t=t.next;while(t!==r)}e.action=null}function Ld(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zd(e,t){return t}function Ud(e,t){if(Pe){var n=tt.formState;if(n!==null){e:{var r=Me;if(Pe){if(nt){t:{for(var i=nt,o=In;i.nodeType!==8;){if(!o){i=null;break t}if(i=Pn(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){nt=Pn(i.nextSibling),r=i.data==="F!";break e}}ol(r)}r=!1}r&&(t=n[0])}}return n=nn(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zd,lastRenderedState:t},n.queue=r,n=rm.bind(null,Me,r),r.dispatch=n,r=uu(!1),o=gu.bind(null,Me,!1,r.queue),r=nn(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=G_.bind(null,Me,i,o,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Id(e){var t=bt();return Hd(t,Ze,e)}function Hd(e,t,n){if(t=ou(e,t,zd)[0],e=co(Ar)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=za(t)}catch(m){throw m===Ci?Js:m}else r=t;t=bt();var i=t.queue,o=i.dispatch;return n!==t.memoizedState&&(Me.flags|=2048,Ii(9,{destroy:void 0},V_.bind(null,i,n),null)),[r,o,e]}function V_(e,t){e.action=t}function Pd(e){var t=bt(),n=Ze;if(n!==null)return Hd(t,n,e);bt(),t=t.memoizedState,n=bt();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ii(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Me.updateQueue,t===null&&(t=so(),Me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Fd(){return bt().memoizedState}function uo(e,t,n,r){var i=nn();Me.flags|=e,i.memoizedState=Ii(1|t,{destroy:void 0},n,r===void 0?null:r)}function fo(e,t,n,r){var i=bt();r=r===void 0?null:r;var o=i.memoizedState.inst;Ze!==null&&r!==null&&nu(r,Ze.memoizedState.deps)?i.memoizedState=Ii(t,o,n,r):(Me.flags|=e,i.memoizedState=Ii(1|t,o,n,r))}function Gd(e,t){uo(8390656,8,e,t)}function du(e,t){fo(2048,8,e,t)}function Y_(e){Me.flags|=4;var t=Me.updateQueue;if(t===null)t=so(),Me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Vd(e){var t=bt().memoizedState;return Y_({ref:t,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function Yd(e,t){return fo(4,2,e,t)}function $d(e,t){return fo(4,4,e,t)}function qd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kd(e,t,n){n=n!=null?n.concat([e]):null,fo(4,4,qd.bind(null,t,e),n)}function mu(){}function Xd(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qd(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&nu(t,r[1]))return r[0];if(r=e(),ri){pn(!0);try{e()}finally{pn(!1)}}return n.memoizedState=[r,t],r}function pu(e,t,n){return n===void 0||(Mr&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Wm(),Me.lanes|=e,gl|=e,n)}function Wd(e,t,n,r){return Ht(n,t)?n:Li.current!==null?(e=pu(e,n,r),Ht(e,t)||(wt=!0),e):(Mr&42)===0||(Mr&1073741824)!==0&&(Ie&261930)===0?(wt=!0,e.memoizedState=n):(e=Wm(),Me.lanes|=e,gl|=e,t)}function Zd(e,t,n,r,i){var o=te.p;te.p=o!==0&&8>o?o:8;var m=O.T,v={};O.T=v,gu(e,!1,t,n);try{var w=i(),B=O.S;if(B!==null&&B(v,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var q=H_(w,r);Ua(e,t,q,Nn(e))}else Ua(e,t,r,Nn(e))}catch(Q){Ua(e,t,{then:function(){},status:"rejected",reason:Q},Nn())}finally{te.p=o,m!==null&&v.types!==null&&(m.types=v.types),O.T=m}}function $_(){}function hu(e,t,n,r){if(e.tag!==5)throw Error(a(476));var i=Jd(e).queue;Zd(e,i,t,ue,n===null?$_:function(){return em(e),n(r)})}function Jd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function em(e){var t=Jd(e);t.next===null&&(t=e.alternate.memoizedState),Ua(e,t.next.queue,{},Nn())}function _u(){return Ft(ts)}function tm(){return bt().memoizedState}function nm(){return bt().memoizedState}function q_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nn();e=fl(n);var r=dl(t,e,n);r!==null&&(dn(r,t,n),Oa(r,t,n)),t={cache:Yc()},e.payload=t;return}t=t.return}}function K_(e,t,n){var r=Nn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mo(e)?lm(t,n):(n=Cc(e,t,n,r),n!==null&&(dn(n,e,r),im(n,t,r)))}function rm(e,t,n){var r=Nn();Ua(e,t,n,r)}function Ua(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mo(e))lm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,v=o(m,n);if(i.hasEagerState=!0,i.eagerState=v,Ht(v,m))return $s(e,t,i,0),tt===null&&Ys(),!1}catch{}finally{}if(n=Cc(e,t,i,r),n!==null)return dn(n,e,r),im(n,t,r),!0}return!1}function gu(e,t,n,r){if(r={lane:2,revertLane:Xu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mo(e)){if(t)throw Error(a(479))}else t=Cc(e,n,r,2),t!==null&&dn(t,e,2)}function mo(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function lm(e,t){zi=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function im(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,di(e,n)}}var Ia={readContext:Ft,use:oo,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};Ia.useEffectEvent=pt;var am={readContext:Ft,use:oo,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:Gd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,uo(4194308,4,qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return uo(4194308,4,e,t)},useInsertionEffect:function(e,t){uo(4,2,e,t)},useMemo:function(e,t){var n=nn();t=t===void 0?null:t;var r=e();if(ri){pn(!0);try{e()}finally{pn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=nn();if(n!==void 0){var i=n(t);if(ri){pn(!0);try{n(t)}finally{pn(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=K_.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:function(e){e=uu(e);var t=e.queue,n=rm.bind(null,Me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:mu,useDeferredValue:function(e,t){var n=nn();return pu(n,e,t)},useTransition:function(){var e=uu(!1);return e=Zd.bind(null,Me,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Me,i=nn();if(Pe){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),tt===null)throw Error(a(349));(Ie&127)!==0||Nd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gd(jd.bind(null,r,o,e),[e]),r.flags|=2048,Ii(9,{destroy:void 0},Rd.bind(null,r,o,n,t),null),n},useId:function(){var e=nn(),t=tt.identifierPrefix;if(Pe){var n=sr,r=ar;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ao++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=P_++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_u,useFormState:Ud,useActionState:Ud,useOptimistic:function(e){var t=nn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gu.bind(null,Me,!0,n),n.dispatch=t,[e,t]},useMemoCache:su,useCacheRefresh:function(){return nn().memoizedState=q_.bind(null,Me)},useEffectEvent:function(e){var t=nn(),n={impl:e};return t.memoizedState=n,function(){if((Ke&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},bu={readContext:Ft,use:oo,useCallback:Xd,useContext:Ft,useEffect:du,useImperativeHandle:Kd,useInsertionEffect:Yd,useLayoutEffect:$d,useMemo:Qd,useReducer:co,useRef:Fd,useState:function(){return co(Ar)},useDebugValue:mu,useDeferredValue:function(e,t){var n=bt();return Wd(n,Ze.memoizedState,e,t)},useTransition:function(){var e=co(Ar)[0],t=bt().memoizedState;return[typeof e=="boolean"?e:za(e),t]},useSyncExternalStore:Td,useId:tm,useHostTransitionStatus:_u,useFormState:Id,useActionState:Id,useOptimistic:function(e,t){var n=bt();return Dd(n,Ze,e,t)},useMemoCache:su,useCacheRefresh:nm};bu.useEffectEvent=Vd;var sm={readContext:Ft,use:oo,useCallback:Xd,useContext:Ft,useEffect:du,useImperativeHandle:Kd,useInsertionEffect:Yd,useLayoutEffect:$d,useMemo:Qd,useReducer:cu,useRef:Fd,useState:function(){return cu(Ar)},useDebugValue:mu,useDeferredValue:function(e,t){var n=bt();return Ze===null?pu(n,e,t):Wd(n,Ze.memoizedState,e,t)},useTransition:function(){var e=cu(Ar)[0],t=bt().memoizedState;return[typeof e=="boolean"?e:za(e),t]},useSyncExternalStore:Td,useId:tm,useHostTransitionStatus:_u,useFormState:Pd,useActionState:Pd,useOptimistic:function(e,t){var n=bt();return Ze!==null?Dd(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:su,useCacheRefresh:nm};sm.useEffectEvent=Vd;function yu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nn(),i=fl(r);i.payload=t,n!=null&&(i.callback=n),t=dl(e,i,r),t!==null&&(dn(t,e,r),Oa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nn(),i=fl(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dl(e,i,r),t!==null&&(dn(t,e,r),Oa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nn(),r=fl(n);r.tag=2,t!=null&&(r.callback=t),t=dl(e,r,n),t!==null&&(dn(t,e,n),Oa(t,e,n))}};function om(e,t,n,r,i,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,m):t.prototype&&t.prototype.isPureReactComponent?!il(n,r)||!il(i,o):!0}function cm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vu.enqueueReplaceState(t,t.state,null)}function li(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function um(e){Er(e)}function fm(e){console.error(e)}function dm(e){Er(e)}function po(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function mm(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function xu(e,t,n){return n=fl(n),n.tag=3,n.payload={element:null},n.callback=function(){po(e,t)},n}function pm(e){return e=fl(e),e.tag=3,e}function hm(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var o=r.value;e.payload=function(){return i(o)},e.callback=function(){mm(t,n,r)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){mm(t,n,r),typeof i!="function"&&(bl===null?bl=new Set([this]):bl.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function X_(e,t,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Ai(t,n,i,!0),n=Sn.current,n!==null){switch(n.tag){case 31:case 13:return Hn===null?To():n.alternate===null&&ht===0&&(ht=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),$u(e,r,i)),!1;case 22:return n.flags|=65536,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),$u(e,r,i)),!1}throw Error(a(435,n.tag))}return $u(e,r,i),To(),!1}if(Pe)return t=Sn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Hc&&(e=Error(a(422),{cause:r}),Ra(Ln(e,n)))):(r!==Hc&&(t=Error(a(423),{cause:r}),Ra(Ln(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ln(r,n),i=xu(e.stateNode,r,i),Wc(e,i),ht!==4&&(ht=2)),!1;var o=Error(a(520),{cause:r});if(o=Ln(o,n),qa===null?qa=[o]:qa.push(o),ht!==4&&(ht=2),t===null)return!0;r=Ln(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=xu(n.stateNode,r,e),Wc(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(bl===null||!bl.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=pm(i),hm(i,e,n,r),Wc(n,i),!1}n=n.return}while(n!==null);return!1}var ku=Error(a(461)),wt=!1;function Gt(e,t,n,r){t.child=e===null?yd(t,null,n,r):ni(t,e.child,n,r)}function _m(e,t,n,r,i){n=n.render;var o=t.ref;if("ref"in r){var m={};for(var v in r)v!=="ref"&&(m[v]=r[v])}else m=r;return Zl(t),r=ru(e,t,n,m,o,i),v=lu(),e!==null&&!wt?(iu(e,t,i),Dr(e,t,i)):(Pe&&v&&Uc(t),t.flags|=1,Gt(e,t,r,i),t.child)}function gm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Bc(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,bm(e,t,o,r,i)):(e=Ks(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Mu(e,i)){var m=o.memoizedProps;if(n=n.compare,n=n!==null?n:il,n(m,r)&&e.ref===t.ref)return Dr(e,t,i)}return t.flags|=1,e=Tr(o,r),e.ref=t.ref,e.return=t,t.child=e}function bm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(il(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,Mu(e,i))(e.flags&131072)!==0&&(wt=!0);else return t.lanes=e.lanes,Dr(e,t,i)}return Su(e,t,n,r,i)}function ym(e,t,n,r){var i=r.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~o}else r=0,t.child=null;return vm(e,t,o,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zs(t,o!==null?o.cachePool:null),o!==null?kd(t,o):Jc(),Sd(t);else return r=t.lanes=536870912,vm(e,t,o!==null?o.baseLanes|n:n,n,r)}else o!==null?(Zs(t,o.cachePool),kd(t,o),pl(),t.memoizedState=null):(e!==null&&Zs(t,null),Jc(),pl());return Gt(e,t,i,n),t.child}function Ha(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vm(e,t,n,r,i){var o=qc();return o=o===null?null:{parent:kt._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Zs(t,null),Jc(),Sd(t),e!==null&&Ai(e,t,r,!0),t.childLanes=i,null}function ho(e,t){return t=go({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xm(e,t,n){return ni(t,e.child,null,n),e=ho(t,t.pendingProps),e.flags|=2,wn(t),t.memoizedState=null,e}function Q_(e,t,n){var r=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Pe){if(r.mode==="hidden")return e=ho(t,r),t.lanes=536870912,Ha(null,e);if(tu(t),(e=nt)?(e=Op(e,In),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:al!==null?{id:ar,overflow:sr}:null,retryLane:536870912,hydrationErrors:null},n=ld(e),n.return=t,t.child=n,Pt=t,nt=null)):e=null,e===null)throw ol(t);return t.lanes=536870912,null}return ho(t,r)}var o=e.memoizedState;if(o!==null){var m=o.dehydrated;if(tu(t),i)if(t.flags&256)t.flags&=-257,t=xm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558));else if(wt||Ai(e,t,n,!1),i=(n&e.childLanes)!==0,wt||i){if(r=tt,r!==null&&(m=xs(r,n),m!==0&&m!==o.retryLane))throw o.retryLane=m,Kl(e,m),dn(r,e,m),ku;To(),t=xm(e,t,n)}else e=o.treeContext,nt=Pn(m.nextSibling),Pt=t,Pe=!0,sl=null,In=!1,e!==null&&sd(t,e),t=ho(t,r),t.flags|=4096;return t}return e=Tr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _o(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Su(e,t,n,r,i){return Zl(t),n=ru(e,t,n,r,void 0,i),r=lu(),e!==null&&!wt?(iu(e,t,i),Dr(e,t,i)):(Pe&&r&&Uc(t),t.flags|=1,Gt(e,t,n,i),t.child)}function km(e,t,n,r,i,o){return Zl(t),t.updateQueue=null,n=Ed(t,r,n,i),wd(e),r=lu(),e!==null&&!wt?(iu(e,t,o),Dr(e,t,o)):(Pe&&r&&Uc(t),t.flags|=1,Gt(e,t,n,o),t.child)}function Sm(e,t,n,r,i){if(Zl(t),t.stateNode===null){var o=Ni,m=n.contextType;typeof m=="object"&&m!==null&&(o=Ft(m)),o=new n(r,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=vu,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=r,o.state=t.memoizedState,o.refs={},Xc(t),m=n.contextType,o.context=typeof m=="object"&&m!==null?Ft(m):Ni,o.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(yu(t,n,m,r),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&vu.enqueueReplaceState(o,o.state,null),Ba(t,r,o,i),Ca(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){o=t.stateNode;var v=t.memoizedProps,w=li(n,v);o.props=w;var B=o.context,q=n.contextType;m=Ni,typeof q=="object"&&q!==null&&(m=Ft(q));var Q=n.getDerivedStateFromProps;q=typeof Q=="function"||typeof o.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,q||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(v||B!==m)&&cm(t,o,r,m),ul=!1;var I=t.memoizedState;o.state=I,Ba(t,r,o,i),Ca(),B=t.memoizedState,v||I!==B||ul?(typeof Q=="function"&&(yu(t,n,Q,r),B=t.memoizedState),(w=ul||om(t,n,w,r,I,B,m))?(q||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=B),o.props=r,o.state=B,o.context=m,r=w):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Qc(e,t),m=t.memoizedProps,q=li(n,m),o.props=q,Q=t.pendingProps,I=o.context,B=n.contextType,w=Ni,typeof B=="object"&&B!==null&&(w=Ft(B)),v=n.getDerivedStateFromProps,(B=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==Q||I!==w)&&cm(t,o,r,w),ul=!1,I=t.memoizedState,o.state=I,Ba(t,r,o,i),Ca();var F=t.memoizedState;m!==Q||I!==F||ul||e!==null&&e.dependencies!==null&&Qs(e.dependencies)?(typeof v=="function"&&(yu(t,n,v,r),F=t.memoizedState),(q=ul||om(t,n,q,r,I,F,w)||e!==null&&e.dependencies!==null&&Qs(e.dependencies))?(B||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,F,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,F,w)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=F),o.props=r,o.state=F,o.context=w,r=q):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,_o(e,t),r=(t.flags&128)!==0,o||r?(o=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&r?(t.child=ni(t,e.child,null,i),t.child=ni(t,null,n,i)):Gt(e,t,n,i),t.memoizedState=o.state,e=t.child):e=Dr(e,t,i),e}function wm(e,t,n,r){return Ql(),t.flags|=256,Gt(e,t,n,r),t.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eu(e){return{baseLanes:e,cachePool:md()}}function Tu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Tn),e}function Em(e,t,n){var r=t.pendingProps,i=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),m&&(i=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Pe){if(i?ml(t):pl(),(e=nt)?(e=Op(e,In),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:al!==null?{id:ar,overflow:sr}:null,retryLane:536870912,hydrationErrors:null},n=ld(e),n.return=t,t.child=n,Pt=t,nt=null)):e=null,e===null)throw ol(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var v=r.children;return r=r.fallback,i?(pl(),i=t.mode,v=go({mode:"hidden",children:v},i),r=Xl(r,i,n,null),v.return=t,r.return=t,v.sibling=r,t.child=v,r=t.child,r.memoizedState=Eu(n),r.childLanes=Tu(e,m,n),t.memoizedState=wu,Ha(null,r)):(ml(t),Nu(t,v))}var w=e.memoizedState;if(w!==null&&(v=w.dehydrated,v!==null)){if(o)t.flags&256?(ml(t),t.flags&=-257,t=Ru(e,t,n)):t.memoizedState!==null?(pl(),t.child=e.child,t.flags|=128,t=null):(pl(),v=r.fallback,i=t.mode,r=go({mode:"visible",children:r.children},i),v=Xl(v,i,n,null),v.flags|=2,r.return=t,v.return=t,r.sibling=v,t.child=r,ni(t,e.child,null,n),r=t.child,r.memoizedState=Eu(n),r.childLanes=Tu(e,m,n),t.memoizedState=wu,t=Ha(null,r));else if(ml(t),cf(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var B=m.dgst;m=B,r=Error(a(419)),r.stack="",r.digest=m,Ra({value:r,source:null,stack:null}),t=Ru(e,t,n)}else if(wt||Ai(e,t,n,!1),m=(n&e.childLanes)!==0,wt||m){if(m=tt,m!==null&&(r=xs(m,n),r!==0&&r!==w.retryLane))throw w.retryLane=r,Kl(e,r),dn(m,e,r),ku;of(v)||To(),t=Ru(e,t,n)}else of(v)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,nt=Pn(v.nextSibling),Pt=t,Pe=!0,sl=null,In=!1,e!==null&&sd(t,e),t=Nu(t,r.children),t.flags|=4096);return t}return i?(pl(),v=r.fallback,i=t.mode,w=e.child,B=w.sibling,r=Tr(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&65011712,B!==null?v=Tr(B,v):(v=Xl(v,i,n,null),v.flags|=2),v.return=t,r.return=t,r.sibling=v,t.child=r,Ha(null,r),r=t.child,v=e.child.memoizedState,v===null?v=Eu(n):(i=v.cachePool,i!==null?(w=kt._currentValue,i=i.parent!==w?{parent:w,pool:w}:i):i=md(),v={baseLanes:v.baseLanes|n,cachePool:i}),r.memoizedState=v,r.childLanes=Tu(e,m,n),t.memoizedState=wu,Ha(e.child,r)):(ml(t),n=e.child,e=n.sibling,n=Tr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Nu(e,t){return t=go({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function go(e,t){return e=kn(22,e,null,t),e.lanes=0,e}function Ru(e,t,n){return ni(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gc(e.return,t,n)}function ju(e,t,n,r,i,o){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:o}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=n,m.tailMode=i,m.treeForkCount=o)}function Nm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;r=r.children;var m=gt.current,v=(m&2)!==0;if(v?(m=m&1|2,t.flags|=128):m&=1,ne(gt,m),Gt(e,t,r,n),r=Pe?Na:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tm(e,n,t);else if(e.tag===19)Tm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ju(t,!1,i,n,o,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ju(t,!0,n,null,o,r);break;case"together":ju(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ai(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qs(e)))}function W_(e,t,n){switch(t.tag){case 3:ae(t,t.stateNode.containerInfo),cl(t,kt,e.memoizedState.cache),Ql();break;case 27:case 5:Be(t);break;case 4:ae(t,t.stateNode.containerInfo);break;case 10:cl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,tu(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(ml(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Em(e,t,n):(ml(t),e=Dr(e,t,n),e!==null?e.sibling:null);ml(t);break;case 19:var i=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Ai(e,t,n,!1),r=(n&t.childLanes)!==0),i){if(r)return Nm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(gt,gt.current),r)break;return null;case 22:return t.lanes=0,ym(e,t,n,t.pendingProps);case 24:cl(t,kt,e.memoizedState.cache)}return Dr(e,t,n)}function Rm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)wt=!0;else{if(!Mu(e,n)&&(t.flags&128)===0)return wt=!1,W_(e,t,n);wt=(e.flags&131072)!==0}else wt=!1,Pe&&(t.flags&1048576)!==0&&ad(t,Na,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ei(t.elementType),t.type=e,typeof e=="function")Bc(e)?(r=li(e,r),t.tag=1,t=Sm(null,t,e,r,n)):(t.tag=0,t=Su(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===re){t.tag=11,t=_m(null,t,e,r,n);break e}else if(i===X){t.tag=14,t=gm(null,t,e,r,n);break e}}throw t=ye(e)||e,Error(a(306,t,""))}}return t;case 0:return Su(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=li(r,t.pendingProps),Sm(e,t,r,i,n);case 3:e:{if(ae(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,Qc(e,t),Ba(t,r,null,n);var m=t.memoizedState;if(r=m.cache,cl(t,kt,r),r!==o.cache&&Vc(t,[kt],n,!0),Ca(),r=m.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=wm(e,t,r,n);break e}else if(r!==i){i=Ln(Error(a(424)),t),Ra(i),t=wm(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=Pn(e.firstChild),Pt=t,Pe=!0,sl=null,In=!0,n=yd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ql(),r===i){t=Dr(e,t,n);break e}Gt(e,t,r,n)}t=t.child}return t;case 26:return _o(e,t),e===null?(n=Ip(t.type,null,t.pendingProps,null))?t.memoizedState=n:Pe||(n=t.type,e=t.pendingProps,r=Oo(H.current).createElement(n),r[_t]=t,r[Ct]=e,Vt(r,n,e),mt(r),t.stateNode=r):t.memoizedState=Ip(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Be(t),e===null&&Pe&&(r=t.stateNode=Lp(t.type,t.pendingProps,H.current),Pt=t,In=!0,i=nt,kl(t.type)?(uf=i,nt=Pn(r.firstChild)):nt=i),Gt(e,t,t.pendingProps.children,n),_o(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Pe&&((i=r=nt)&&(r=Ng(r,t.type,t.pendingProps,In),r!==null?(t.stateNode=r,Pt=t,nt=Pn(r.firstChild),In=!1,i=!0):i=!1),i||ol(t)),Be(t),i=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,r=o.children,lf(i,o)?r=null:m!==null&&lf(i,m)&&(t.flags|=32),t.memoizedState!==null&&(i=ru(e,t,F_,null,null,n),ts._currentValue=i),_o(e,t),Gt(e,t,r,n),t.child;case 6:return e===null&&Pe&&((e=n=nt)&&(n=Rg(n,t.pendingProps,In),n!==null?(t.stateNode=n,Pt=t,nt=null,e=!0):e=!1),e||ol(t)),null;case 13:return Em(e,t,n);case 4:return ae(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ni(t,null,r,n):Gt(e,t,r,n),t.child;case 11:return _m(e,t,t.type,t.pendingProps,n);case 7:return Gt(e,t,t.pendingProps,n),t.child;case 8:return Gt(e,t,t.pendingProps.children,n),t.child;case 12:return Gt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,cl(t,t.type,r.value),Gt(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Zl(t),i=Ft(i),r=r(i),t.flags|=1,Gt(e,t,r,n),t.child;case 14:return gm(e,t,t.type,t.pendingProps,n);case 15:return bm(e,t,t.type,t.pendingProps,n);case 19:return Nm(e,t,n);case 31:return Q_(e,t,n);case 22:return ym(e,t,n,t.pendingProps);case 24:return Zl(t),r=Ft(kt),e===null?(i=qc(),i===null&&(i=tt,o=Yc(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},Xc(t),cl(t,kt,i)):((e.lanes&n)!==0&&(Qc(e,t),Ba(t,null,null,n),Ca()),i=e.memoizedState,o=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),cl(t,kt,r)):(r=o.cache,cl(t,kt,r),r!==i.cache&&Vc(t,[kt],n,!0))),Gt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Or(e){e.flags|=4}function Au(e,t,n,r,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(tp())e.flags|=8192;else throw ti=eo,Kc}else e.flags&=-16777217}function jm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vp(t))if(tp())e.flags|=8192;else throw ti=eo,Kc}function bo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bl():536870912,e.lanes|=t,Gi|=t)}function Pa(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Z_(e,t,n){var r=t.pendingProps;switch(Ic(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return rt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),jr(kt),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?Or(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pc())),rt(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(Or(t),o!==null?(rt(t),jm(t,o)):(rt(t),Au(t,i,null,r,n))):o?o!==e.memoizedState?(Or(t),rt(t),jm(t,o)):(rt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Or(t),rt(t),Au(t,i,e,r,n)),null;case 27:if(Ge(t),n=H.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Or(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return rt(t),null}e=oe.current,Mi(t)?od(t):(e=Lp(i,r,n),t.stateNode=e,Or(t))}return rt(t),null;case 5:if(Ge(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Or(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return rt(t),null}if(o=oe.current,Mi(t))od(t);else{var m=Oo(H.current);switch(o){case 1:o=m.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=m.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=m.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=m.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":o=m.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is=="string"?m.createElement(i,{is:r.is}):m.createElement(i)}}o[_t]=t,o[Ct]=r;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)o.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=o;e:switch(Vt(o,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Or(t)}}return rt(t),Au(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Or(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(e=H.current,Mi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Pt,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Ep(e.nodeValue,n)),e||ol(t,!0)}else e=Oo(e).createTextNode(r),e[_t]=t,t.stateNode=e}return rt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Mi(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[_t]=t}else Ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),e=!1}else n=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wn(t),t):(wn(t),null);if((t.flags&128)!==0)throw Error(a(558))}return rt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));i[_t]=t}else Ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),i=!1}else i=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(wn(t),t):(wn(t),null)}return wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),bo(t,t.updateQueue),rt(t),null);case 4:return ve(),e===null&&Ju(t.stateNode.containerInfo),rt(t),null;case 10:return jr(t.type),rt(t),null;case 19:if(U(gt),r=t.memoizedState,r===null)return rt(t),null;if(i=(t.flags&128)!==0,o=r.rendering,o===null)if(i)Pa(r,!1);else{if(ht!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Pa(r,!1),e=o.updateQueue,t.updateQueue=e,bo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)rd(n,e),n=n.sibling;return ne(gt,gt.current&1|2),Pe&&Nr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&vt()>So&&(t.flags|=128,i=!0,Pa(r,!1),t.lanes=4194304)}else{if(!i)if(e=lo(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,bo(t,e),Pa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Pe)return rt(t),null}else 2*vt()-r.renderingStartTime>So&&n!==536870912&&(t.flags|=128,i=!0,Pa(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e!==null?e.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=vt(),e.sibling=null,n=gt.current,ne(gt,i?n&1|2:n&1),Pe&&Nr(t,r.treeForkCount),e):(rt(t),null);case 22:case 23:return wn(t),eu(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),n=t.updateQueue,n!==null&&bo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&U(Jl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),jr(kt),rt(t),null;case 25:return null;case 30:return null}throw Error(a(156,t.tag))}function J_(e,t){switch(Ic(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(kt),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ge(t),null;case 31:if(t.memoizedState!==null){if(wn(t),t.alternate===null)throw Error(a(340));Ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(gt),null;case 4:return ve(),null;case 10:return jr(t.type),null;case 22:case 23:return wn(t),eu(),e!==null&&U(Jl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return jr(kt),null;case 25:return null;default:return null}}function Mm(e,t){switch(Ic(t),t.tag){case 3:jr(kt),ve();break;case 26:case 27:case 5:Ge(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&wn(t);break;case 13:wn(t);break;case 19:U(gt);break;case 10:jr(t.type);break;case 22:case 23:wn(t),eu(),e!==null&&U(Jl);break;case 24:jr(kt)}}function Fa(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var o=n.create,m=n.inst;r=o(),m.destroy=r}n=n.next}while(n!==i)}}catch(v){Qe(t,t.return,v)}}function hl(e,t,n){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var o=i.next;r=o;do{if((r.tag&e)===e){var m=r.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,i=t;var w=n,B=v;try{B()}catch(q){Qe(i,w,q)}}}r=r.next}while(r!==o)}}catch(q){Qe(t,t.return,q)}}function Am(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xd(t,n)}catch(r){Qe(e,e.return,r)}}}function Dm(e,t,n){n.props=li(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Qe(e,t,r)}}function Ga(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(i){Qe(e,t,i)}}function or(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){Qe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Qe(e,t,i)}else n.current=null}function Om(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){Qe(e,e.return,i)}}function Du(e,t,n){try{var r=e.stateNode;xg(r,e.type,n,t),r[Ct]=t}catch(i){Qe(e,e.return,i)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&kl(e.type)||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&kl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Dn));else if(r!==4&&(r===27&&kl(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&kl(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}function Bm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Vt(t,r,n),t[_t]=e,t[Ct]=n}catch(o){Qe(e,e.return,o)}}var Cr=!1,Et=!1,Bu=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function eg(e,t){if(e=e.containerInfo,nf=Ho,e=Vs(e),Ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var m=0,v=-1,w=-1,B=0,q=0,Q=e,I=null;t:for(;;){for(var F;Q!==n||i!==0&&Q.nodeType!==3||(v=m+i),Q!==o||r!==0&&Q.nodeType!==3||(w=m+r),Q.nodeType===3&&(m+=Q.nodeValue.length),(F=Q.firstChild)!==null;)I=Q,Q=F;for(;;){if(Q===e)break t;if(I===n&&++B===i&&(v=m),I===o&&++q===r&&(w=m),(F=Q.nextSibling)!==null)break;Q=I,I=Q.parentNode}Q=F}n=v===-1||w===-1?null:{start:v,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(rf={focusedElem:e,selectionRange:n},Ho=!1,Bt=t;Bt!==null;)if(t=Bt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Bt=e;else for(;Bt!==null;){switch(t=Bt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var me=li(n.type,i);e=r.getSnapshotBeforeUpdate(me,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(we){Qe(n,n.return,we)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)sf(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=t.sibling,e!==null){e.return=t.return,Bt=e;break}Bt=t.return}}function zm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lr(e,n),r&4&&Fa(5,n);break;case 1:if(Lr(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Qe(n,n.return,m)}else{var i=li(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Qe(n,n.return,m)}}r&64&&Am(n),r&512&&Ga(n,n.return);break;case 3:if(Lr(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xd(e,t)}catch(m){Qe(n,n.return,m)}}break;case 27:t===null&&r&4&&Bm(n);case 26:case 5:Lr(e,n),t===null&&r&4&&Om(n),r&512&&Ga(n,n.return);break;case 12:Lr(e,n);break;case 31:Lr(e,n),r&4&&Hm(e,n);break;case 13:Lr(e,n),r&4&&Pm(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=cg.bind(null,n),jg(e,n))));break;case 22:if(r=n.memoizedState!==null||Cr,!r){t=t!==null&&t.memoizedState!==null||Et,i=Cr;var o=Et;Cr=r,(Et=t)&&!o?zr(e,n,(n.subtreeFlags&8772)!==0):Lr(e,n),Cr=i,Et=o}break;case 30:break;default:Lr(e,n)}}function Um(e){var t=e.alternate;t!==null&&(e.alternate=null,Um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var st=null,on=!1;function Br(e,t,n){for(n=n.child;n!==null;)Im(e,t,n),n=n.sibling}function Im(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 26:Et||or(n,t),Br(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Et||or(n,t);var r=st,i=on;kl(n.type)&&(st=n.stateNode,on=!1),Br(e,t,n),Za(n.stateNode),st=r,on=i;break;case 5:Et||or(n,t);case 6:if(r=st,i=on,st=null,Br(e,t,n),st=r,on=i,st!==null)if(on)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(n.stateNode)}catch(o){Qe(n,t,o)}else try{st.removeChild(n.stateNode)}catch(o){Qe(n,t,o)}break;case 18:st!==null&&(on?(e=st,Ap(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Wi(e)):Ap(st,n.stateNode));break;case 4:r=st,i=on,st=n.stateNode.containerInfo,on=!0,Br(e,t,n),st=r,on=i;break;case 0:case 11:case 14:case 15:hl(2,n,t),Et||hl(4,n,t),Br(e,t,n);break;case 1:Et||(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Dm(n,t,r)),Br(e,t,n);break;case 21:Br(e,t,n);break;case 22:Et=(r=Et)||n.memoizedState!==null,Br(e,t,n),Et=r;break;default:Br(e,t,n)}}function Hm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wi(e)}catch(n){Qe(t,t.return,n)}}}function Pm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wi(e)}catch(n){Qe(t,t.return,n)}}function tg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Lm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Lm),t;default:throw Error(a(435,e.tag))}}function vo(e,t){var n=tg(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var i=ug.bind(null,e,r);r.then(i,i)}})}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],o=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(kl(v.type)){st=v.stateNode,on=!1;break e}break;case 5:st=v.stateNode,on=!1;break e;case 3:case 4:st=v.stateNode.containerInfo,on=!0;break e}v=v.return}if(st===null)throw Error(a(160));Im(o,m,i),st=null,on=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fm(t,e),t=t.sibling}var er=null;function Fm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:cn(t,e),un(e),r&4&&(hl(3,e,e.return),Fa(3,e),hl(5,e,e.return));break;case 1:cn(t,e),un(e),r&512&&(Et||n===null||or(n,n.return)),r&64&&Cr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=er;if(cn(t,e),un(e),r&512&&(Et||n===null||or(n,n.return)),r&4){var o=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":o=i.getElementsByTagName("title")[0],(!o||o[gn]||o[_t]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(r),i.head.insertBefore(o,i.querySelector("head > title"))),Vt(o,r,n),o[_t]=e,mt(o),r=o;break e;case"link":var m=Fp("link","href",i).get(r+(n.href||""));if(m){for(var v=0;v<m.length;v++)if(o=m[v],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(v,1);break t}}o=i.createElement(r),Vt(o,r,n),i.head.appendChild(o);break;case"meta":if(m=Fp("meta","content",i).get(r+(n.content||""))){for(v=0;v<m.length;v++)if(o=m[v],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(v,1);break t}}o=i.createElement(r),Vt(o,r,n),i.head.appendChild(o);break;default:throw Error(a(468,r))}o[_t]=e,mt(o),r=o}e.stateNode=r}else Gp(i,e.type,e.stateNode);else e.stateNode=Pp(i,r,e.memoizedProps);else o!==r?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Gp(i,e.type,e.stateNode):Pp(i,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Du(e,e.memoizedProps,n.memoizedProps)}break;case 27:cn(t,e),un(e),r&512&&(Et||n===null||or(n,n.return)),n!==null&&r&4&&Du(e,e.memoizedProps,n.memoizedProps);break;case 5:if(cn(t,e),un(e),r&512&&(Et||n===null||or(n,n.return)),e.flags&32){i=e.stateNode;try{gr(i,"")}catch(me){Qe(e,e.return,me)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Du(e,i,n!==null?n.memoizedProps:i)),r&1024&&(Bu=!0);break;case 6:if(cn(t,e),un(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(me){Qe(e,e.return,me)}}break;case 3:if(Lo=null,i=er,er=Co(t.containerInfo),cn(t,e),er=i,un(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(me){Qe(e,e.return,me)}Bu&&(Bu=!1,Gm(e));break;case 4:r=er,er=Co(e.stateNode.containerInfo),cn(t,e),un(e),er=r;break;case 12:cn(t,e),un(e);break;case 31:cn(t,e),un(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vo(e,r)));break;case 13:cn(t,e),un(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ko=vt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vo(e,r)));break;case 22:i=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,B=Cr,q=Et;if(Cr=B||i,Et=q||w,cn(t,e),Et=q,Cr=B,un(e),r&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||w||Cr||Et||ii(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(o=w.stateNode,i)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=w.stateNode;var Q=w.memoizedProps.style,I=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;v.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(me){Qe(w,w.return,me)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=i?"":w.memoizedProps}catch(me){Qe(w,w.return,me)}}}else if(t.tag===18){if(n===null){w=t;try{var F=w.stateNode;i?Dp(F,!0):Dp(w.stateNode,!1)}catch(me){Qe(w,w.return,me)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,vo(e,n))));break;case 19:cn(t,e),un(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vo(e,r)));break;case 30:break;case 21:break;default:cn(t,e),un(e)}}function un(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Cm(r)){n=r;break}r=r.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var i=n.stateNode,o=Ou(e);yo(e,o,i);break;case 5:var m=n.stateNode;n.flags&32&&(gr(m,""),n.flags&=-33);var v=Ou(e);yo(e,v,m);break;case 3:case 4:var w=n.stateNode.containerInfo,B=Ou(e);Cu(e,B,w);break;default:throw Error(a(161))}}catch(q){Qe(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Lr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zm(e,t.alternate,t),t=t.sibling}function ii(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:hl(4,t,t.return),ii(t);break;case 1:or(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Dm(t,t.return,n),ii(t);break;case 27:Za(t.stateNode);case 26:case 5:or(t,t.return),ii(t);break;case 22:t.memoizedState===null&&ii(t);break;case 30:ii(t);break;default:ii(t)}e=e.sibling}}function zr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,i=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:zr(i,o,n),Fa(4,o);break;case 1:if(zr(i,o,n),r=o,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(B){Qe(r,r.return,B)}if(r=o,i=r.updateQueue,i!==null){var v=r.stateNode;try{var w=i.shared.hiddenCallbacks;if(w!==null)for(i.shared.hiddenCallbacks=null,i=0;i<w.length;i++)vd(w[i],v)}catch(B){Qe(r,r.return,B)}}n&&m&64&&Am(o),Ga(o,o.return);break;case 27:Bm(o);case 26:case 5:zr(i,o,n),n&&r===null&&m&4&&Om(o),Ga(o,o.return);break;case 12:zr(i,o,n);break;case 31:zr(i,o,n),n&&m&4&&Hm(i,o);break;case 13:zr(i,o,n),n&&m&4&&Pm(i,o);break;case 22:o.memoizedState===null&&zr(i,o,n),Ga(o,o.return);break;case 30:break;default:zr(i,o,n)}t=t.sibling}}function Lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ja(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ja(e))}function tr(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vm(e,t,n,r),t=t.sibling}function Vm(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:tr(e,t,n,r),i&2048&&Fa(9,t);break;case 1:tr(e,t,n,r);break;case 3:tr(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ja(e)));break;case 12:if(i&2048){tr(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,v=o.onPostCommit;typeof v=="function"&&v(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Qe(t,t.return,w)}}else tr(e,t,n,r);break;case 31:tr(e,t,n,r);break;case 13:tr(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?tr(e,t,n,r):Va(e,t):o._visibility&2?tr(e,t,n,r):(o._visibility|=2,Hi(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Lu(m,t);break;case 24:tr(e,t,n,r),i&2048&&zu(t.alternate,t);break;default:tr(e,t,n,r)}}function Hi(e,t,n,r,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,m=t,v=n,w=r,B=m.flags;switch(m.tag){case 0:case 11:case 15:Hi(o,m,v,w,i),Fa(8,m);break;case 23:break;case 22:var q=m.stateNode;m.memoizedState!==null?q._visibility&2?Hi(o,m,v,w,i):Va(o,m):(q._visibility|=2,Hi(o,m,v,w,i)),i&&B&2048&&Lu(m.alternate,m);break;case 24:Hi(o,m,v,w,i),i&&B&2048&&zu(m.alternate,m);break;default:Hi(o,m,v,w,i)}t=t.sibling}}function Va(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Va(n,r),i&2048&&Lu(r.alternate,r);break;case 24:Va(n,r),i&2048&&zu(r.alternate,r);break;default:Va(n,r)}t=t.sibling}}var Ya=8192;function Pi(e,t,n){if(e.subtreeFlags&Ya)for(e=e.child;e!==null;)Ym(e,t,n),e=e.sibling}function Ym(e,t,n){switch(e.tag){case 26:Pi(e,t,n),e.flags&Ya&&e.memoizedState!==null&&Pg(n,er,e.memoizedState,e.memoizedProps);break;case 5:Pi(e,t,n);break;case 3:case 4:var r=er;er=Co(e.stateNode.containerInfo),Pi(e,t,n),er=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ya,Ya=16777216,Pi(e,t,n),Ya=r):Pi(e,t,n));break;default:Pi(e,t,n)}}function $m(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $a(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Bt=r,Km(r,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 0:case 11:case 15:$a(e),e.flags&2048&&hl(9,e,e.return);break;case 3:$a(e);break;case 12:$a(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,xo(e)):$a(e);break;default:$a(e)}}function xo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Bt=r,Km(r,e)}$m(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:hl(8,t,t.return),xo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,xo(t));break;default:xo(t)}e=e.sibling}}function Km(e,t){for(;Bt!==null;){var n=Bt;switch(n.tag){case 0:case 11:case 15:hl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ja(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Bt=r;else e:for(n=e;Bt!==null;){r=Bt;var i=r.sibling,o=r.return;if(Um(r),r===n){Bt=null;break e}if(i!==null){i.return=o,Bt=i;break e}Bt=o}}}var ng={getCacheForType:function(e){var t=Ft(kt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ft(kt).controller.signal}},rg=typeof WeakMap=="function"?WeakMap:Map,Ke=0,tt=null,ze=null,Ie=0,Xe=0,En=null,_l=!1,Fi=!1,Uu=!1,Ur=0,ht=0,gl=0,ai=0,Iu=0,Tn=0,Gi=0,qa=null,fn=null,Hu=!1,ko=0,Xm=0,So=1/0,wo=null,bl=null,At=0,yl=null,Vi=null,Ir=0,Pu=0,Fu=null,Qm=null,Ka=0,Gu=null;function Nn(){return(Ke&2)!==0&&Ie!==0?Ie&-Ie:O.T!==null?Xu():ot()}function Wm(){if(Tn===0)if((Ie&536870912)===0||Pe){var e=qt;qt<<=1,(qt&3932160)===0&&(qt=262144),Tn=e}else Tn=536870912;return e=Sn.current,e!==null&&(e.flags|=32),Tn}function dn(e,t,n){(e===tt&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Yi(e,0),vl(e,Ie,Tn,!1)),Ll(e,n),((Ke&2)===0||e!==tt)&&(e===tt&&((Ke&2)===0&&(ai|=n),ht===4&&vl(e,Ie,Tn,!1)),cr(e))}function Zm(e,t,n){if((Ke&6)!==0)throw Error(a(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ot(e,t),i=r?ag(e,t):Yu(e,t,!0),o=r;do{if(i===0){Fi&&!r&&vl(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!lg(n)){i=Yu(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var v=e;i=qa;var w=v.current.memoizedState.isDehydrated;if(w&&(Yi(v,m).flags|=256),m=Yu(v,m,!1),m!==2){if(Uu&&!w){v.errorRecoveryDisabledLanes|=o,ai|=o,i=4;break e}o=fn,fn=i,o!==null&&(fn===null?fn=o:fn.push.apply(fn,o))}i=m}if(o=!1,i!==2)continue}}if(i===1){Yi(e,0),vl(e,t,0,!0);break}e:{switch(r=e,o=i,o){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t)break;case 6:vl(r,t,Tn,!_l);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(i=ko+300-vt(),10<i)){if(vl(r,t,Tn,!_l),it(r,0,!0)!==0)break e;Ir=t,r.timeoutHandle=jp(Jm.bind(null,r,n,fn,wo,Hu,t,Tn,ai,Gi,_l,o,"Throttled",-0,0),i);break e}Jm(r,n,fn,wo,Hu,t,Tn,ai,Gi,_l,o,null,-0,0)}}break}while(!0);cr(e)}function Jm(e,t,n,r,i,o,m,v,w,B,q,Q,I,F){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Dn},Ym(t,o,Q);var me=(o&62914560)===o?ko-vt():(o&4194048)===o?Xm-vt():0;if(me=Fg(Q,me),me!==null){Ir=o,e.cancelPendingCommit=me(sp.bind(null,e,t,o,n,r,i,m,v,w,q,Q,null,I,F)),vl(e,o,m,!B);return}}sp(e,t,o,n,r,i,m,v,w)}function lg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vl(e,t,n,r){t&=~Iu,t&=~ai,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var o=31-Lt(i),m=1<<o;r[o]=-1,i&=~m}n!==0&&vs(e,n,t)}function Eo(){return(Ke&6)===0?(Xa(0),!1):!0}function Vu(){if(ze!==null){if(Xe===0)var e=ze.return;else e=ze,Rr=Wl=null,au(e),Bi=null,Aa=0,e=ze;for(;e!==null;)Mm(e.alternate,e),e=e.return;ze=null}}function Yi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,wg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ir=0,Vu(),tt=e,ze=n=Tr(e.current,null),Ie=t,Xe=0,En=null,_l=!1,Fi=Ot(e,t),Uu=!1,Gi=Tn=Iu=ai=gl=ht=0,fn=qa=null,Hu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Lt(r),o=1<<i;t|=e[i],r&=~o}return Ur=t,Ys(),n}function ep(e,t){Me=null,O.H=Ia,t===Ci||t===Js?(t=_d(),Xe=3):t===Kc?(t=_d(),Xe=4):Xe=t===ku?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,En=t,ze===null&&(ht=1,po(e,Ln(t,e.current)))}function tp(){var e=Sn.current;return e===null?!0:(Ie&4194048)===Ie?Hn===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===Hn:!1}function np(){var e=O.H;return O.H=Ia,e===null?Ia:e}function rp(){var e=O.A;return O.A=ng,e}function To(){ht=4,_l||(Ie&4194048)!==Ie&&Sn.current!==null||(Fi=!0),(gl&134217727)===0&&(ai&134217727)===0||tt===null||vl(tt,Ie,Tn,!1)}function Yu(e,t,n){var r=Ke;Ke|=2;var i=np(),o=rp();(tt!==e||Ie!==t)&&(wo=null,Yi(e,t)),t=!1;var m=ht;e:do try{if(Xe!==0&&ze!==null){var v=ze,w=En;switch(Xe){case 8:Vu(),m=6;break e;case 3:case 2:case 9:case 6:Sn.current===null&&(t=!0);var B=Xe;if(Xe=0,En=null,$i(e,v,w,B),n&&Fi){m=0;break e}break;default:B=Xe,Xe=0,En=null,$i(e,v,w,B)}}ig(),m=ht;break}catch(q){ep(e,q)}while(!0);return t&&e.shellSuspendCounter++,Rr=Wl=null,Ke=r,O.H=i,O.A=o,ze===null&&(tt=null,Ie=0,Ys()),m}function ig(){for(;ze!==null;)lp(ze)}function ag(e,t){var n=Ke;Ke|=2;var r=np(),i=rp();tt!==e||Ie!==t?(wo=null,So=vt()+500,Yi(e,t)):Fi=Ot(e,t);e:do try{if(Xe!==0&&ze!==null){t=ze;var o=En;t:switch(Xe){case 1:Xe=0,En=null,$i(e,t,o,1);break;case 2:case 9:if(pd(o)){Xe=0,En=null,ip(t);break}t=function(){Xe!==2&&Xe!==9||tt!==e||(Xe=7),cr(e)},o.then(t,t);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:pd(o)?(Xe=0,En=null,ip(t)):(Xe=0,En=null,$i(e,t,o,7));break;case 5:var m=null;switch(ze.tag){case 26:m=ze.memoizedState;case 5:case 27:var v=ze;if(m?Vp(m):v.stateNode.complete){Xe=0,En=null;var w=v.sibling;if(w!==null)ze=w;else{var B=v.return;B!==null?(ze=B,No(B)):ze=null}break t}}Xe=0,En=null,$i(e,t,o,5);break;case 6:Xe=0,En=null,$i(e,t,o,6);break;case 8:Vu(),ht=6;break e;default:throw Error(a(462))}}sg();break}catch(q){ep(e,q)}while(!0);return Rr=Wl=null,O.H=r,O.A=i,Ke=n,ze!==null?0:(tt=null,Ie=0,Ys(),ht)}function sg(){for(;ze!==null&&!ui();)lp(ze)}function lp(e){var t=Rm(e.alternate,e,Ur);e.memoizedProps=e.pendingProps,t===null?No(e):ze=t}function ip(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=km(n,t,t.pendingProps,t.type,void 0,Ie);break;case 11:t=km(n,t,t.pendingProps,t.type.render,t.ref,Ie);break;case 5:au(t);default:Mm(n,t),t=ze=rd(t,Ur),t=Rm(n,t,Ur)}e.memoizedProps=e.pendingProps,t===null?No(e):ze=t}function $i(e,t,n,r){Rr=Wl=null,au(t),Bi=null,Aa=0;var i=t.return;try{if(X_(e,i,t,n,Ie)){ht=1,po(e,Ln(n,e.current)),ze=null;return}}catch(o){if(i!==null)throw ze=i,o;ht=1,po(e,Ln(n,e.current)),ze=null;return}t.flags&32768?(Pe||r===1?e=!0:Fi||(Ie&536870912)!==0?e=!1:(_l=e=!0,(r===2||r===9||r===3||r===6)&&(r=Sn.current,r!==null&&r.tag===13&&(r.flags|=16384))),ap(t,e)):No(t)}function No(e){var t=e;do{if((t.flags&32768)!==0){ap(t,_l);return}e=t.return;var n=Z_(t.alternate,t,Ur);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);ht===0&&(ht=5)}function ap(e,t){do{var n=J_(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);ht=6,ze=null}function sp(e,t,n,r,i,o,m,v,w){e.cancelPendingCommit=null;do Ro();while(At!==0);if((Ke&6)!==0)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,o|=Ti,pr(e,n,o,m,v,w),e===tt&&(ze=tt=null,Ie=0),Vi=t,yl=e,Ir=n,Pu=o,Fu=i,Qm=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fg(Ol,function(){return dp(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,i=te.p,te.p=2,m=Ke,Ke|=4;try{eg(e,t,n)}finally{Ke=m,te.p=i,O.T=r}}At=1,op(),cp(),up()}}function op(){if(At===1){At=0;var e=yl,t=Vi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var r=te.p;te.p=2;var i=Ke;Ke|=4;try{Fm(t,e);var o=rf,m=Vs(e.containerInfo),v=o.focusedElem,w=o.selectionRange;if(m!==v&&v&&v.ownerDocument&&Ea(v.ownerDocument.documentElement,v)){if(w!==null&&Ta(v)){var B=w.start,q=w.end;if(q===void 0&&(q=B),"selectionStart"in v)v.selectionStart=B,v.selectionEnd=Math.min(q,v.value.length);else{var Q=v.ownerDocument||document,I=Q&&Q.defaultView||window;if(I.getSelection){var F=I.getSelection(),me=v.textContent.length,we=Math.min(w.start,me),et=w.end===void 0?we:Math.min(w.end,me);!F.extend&&we>et&&(m=et,et=we,we=m);var M=Ei(v,we),N=Ei(v,et);if(M&&N&&(F.rangeCount!==1||F.anchorNode!==M.node||F.anchorOffset!==M.offset||F.focusNode!==N.node||F.focusOffset!==N.offset)){var C=Q.createRange();C.setStart(M.node,M.offset),F.removeAllRanges(),we>et?(F.addRange(C),F.extend(N.node,N.offset)):(C.setEnd(N.node,N.offset),F.addRange(C))}}}}for(Q=[],F=v;F=F.parentNode;)F.nodeType===1&&Q.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<Q.length;v++){var K=Q[v];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Ho=!!nf,rf=nf=null}finally{Ke=i,te.p=r,O.T=n}}e.current=t,At=2}}function cp(){if(At===2){At=0;var e=yl,t=Vi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var r=te.p;te.p=2;var i=Ke;Ke|=4;try{zm(e,t.alternate,t)}finally{Ke=i,te.p=r,O.T=n}}At=3}}function up(){if(At===4||At===3){At=0,Gr();var e=yl,t=Vi,n=Ir,r=Qm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?At=5:(At=0,Vi=yl=null,fp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(bl=null),An(n),t=t.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=O.T,i=te.p,te.p=2,O.T=null;try{for(var o=e.onRecoverableError,m=0;m<r.length;m++){var v=r[m];o(v.value,{componentStack:v.stack})}}finally{O.T=t,te.p=i}}(Ir&3)!==0&&Ro(),cr(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Gu?Ka++:(Ka=0,Gu=e):Ka=0,Xa(0)}}function fp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ja(t)))}function Ro(){return op(),cp(),up(),dp()}function dp(){if(At!==5)return!1;var e=yl,t=Pu;Pu=0;var n=An(Ir),r=O.T,i=te.p;try{te.p=32>n?32:n,O.T=null,n=Fu,Fu=null;var o=yl,m=Ir;if(At=0,Vi=yl=null,Ir=0,(Ke&6)!==0)throw Error(a(331));var v=Ke;if(Ke|=4,qm(o.current),Vm(o,o.current,m,n),Ke=v,Xa(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Cl,o)}catch{}return!0}finally{te.p=i,O.T=r,fp(e,t)}}function mp(e,t,n){t=Ln(n,t),t=xu(e.stateNode,t,2),e=dl(e,t,2),e!==null&&(Ll(e,2),cr(e))}function Qe(e,t,n){if(e.tag===3)mp(e,e,n);else for(;t!==null;){if(t.tag===3){mp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bl===null||!bl.has(r))){e=Ln(n,e),n=pm(2),r=dl(t,n,2),r!==null&&(hm(n,r,t,e),Ll(r,2),cr(r));break}}t=t.return}}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Uu=!0,i.add(n),e=og.bind(null,e,t,n),t.then(e,e))}function og(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tt===e&&(Ie&n)===n&&(ht===4||ht===3&&(Ie&62914560)===Ie&&300>vt()-ko?(Ke&2)===0&&Yi(e,0):Iu|=n,Gi===Ie&&(Gi=0)),cr(e)}function pp(e,t){t===0&&(t=Bl()),e=Kl(e,t),e!==null&&(Ll(e,t),cr(e))}function cg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pp(e,n)}function ug(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),pp(e,n)}function fg(e,t){return $n(e,t)}var jo=null,qi=null,qu=!1,Mo=!1,Ku=!1,xl=0;function cr(e){e!==qi&&e.next===null&&(qi===null?jo=qi=e:qi=qi.next=e),Mo=!0,qu||(qu=!0,mg())}function Xa(e,t){if(!Ku&&Mo){Ku=!0;do for(var n=!1,r=jo;r!==null;){if(e!==0){var i=r.pendingLanes;if(i===0)var o=0;else{var m=r.suspendedLanes,v=r.pingedLanes;o=(1<<31-Lt(42|e)+1)-1,o&=i&~(m&~v),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,bp(r,o))}else o=Ie,o=it(r,r===tt?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||Ot(r,o)||(n=!0,bp(r,o));r=r.next}while(n);Ku=!1}}function dg(){hp()}function hp(){Mo=qu=!1;var e=0;xl!==0&&Sg()&&(e=xl);for(var t=vt(),n=null,r=jo;r!==null;){var i=r.next,o=_p(r,t);o===0?(r.next=null,n===null?jo=i:n.next=i,i===null&&(qi=n)):(n=r,(e!==0||(o&3)!==0)&&(Mo=!0)),r=i}At!==0&&At!==5||Xa(e),xl!==0&&(xl=0)}function _p(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-Lt(o),v=1<<m,w=i[m];w===-1?((v&n)===0||(v&r)!==0)&&(i[m]=fc(v,t)):w<=t&&(e.expiredLanes|=v),o&=~v}if(t=tt,n=Ie,n=it(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Mn(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ot(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Mn(r),An(n)){case 2:case 8:n=sa;break;case 32:n=Ol;break;case 268435456:n=mn;break;default:n=Ol}return r=gp.bind(null,e),n=$n(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Mn(r),e.callbackPriority=2,e.callbackNode=null,2}function gp(e,t){if(At!==0&&At!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ro()&&e.callbackNode!==n)return null;var r=Ie;return r=it(e,e===tt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Zm(e,r,t),_p(e,vt()),e.callbackNode!=null&&e.callbackNode===n?gp.bind(null,e):null)}function bp(e,t){if(Ro())return null;Zm(e,t,!0)}function mg(){Eg(function(){(Ke&6)!==0?$n(Vr,dg):hp()})}function Xu(){if(xl===0){var e=Di;e===0&&(e=hn,hn<<=1,(hn&261888)===0&&(hn=256)),xl=e}return xl}function yp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pl(""+e)}function vp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pg(e,t,n,r,i){if(t==="submit"&&n&&n.stateNode===i){var o=yp((i[Ct]||null).action),m=r.submitter;m&&(t=(t=m[Ct]||null)?yp(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var v=new bi("action","action",null,r,i);e.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(xl!==0){var w=m?vp(i,m):new FormData(i);hu(n,{pending:!0,data:w,method:i.method,action:o},null,w)}}else typeof o=="function"&&(v.preventDefault(),w=m?vp(i,m):new FormData(i),hu(n,{pending:!0,data:w,method:i.method,action:o},o,w))},currentTarget:i}]})}}for(var Qu=0;Qu<ir.length;Qu++){var Wu=ir[Qu],hg=Wu.toLowerCase(),_g=Wu[0].toUpperCase()+Wu.slice(1);sn(hg,"on"+_g)}sn(ft,"onAnimationEnd"),sn(Qt,"onAnimationIteration"),sn(Ae,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(at,"onTransitionRun"),sn(Sr,"onTransitionStart"),sn(Jn,"onTransitionCancel"),sn(Cn,"onTransitionEnd"),yn("onMouseEnter",["mouseout","mouseover"]),yn("onMouseLeave",["mouseout","mouseover"]),yn("onPointerEnter",["pointerout","pointerover"]),yn("onPointerLeave",["pointerout","pointerover"]),tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qa));function xp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var m=r.length-1;0<=m;m--){var v=r[m],w=v.instance,B=v.currentTarget;if(v=v.listener,w!==o&&i.isPropagationStopped())break e;o=v,i.currentTarget=B;try{o(i)}catch(q){Er(q)}i.currentTarget=null,o=w}else for(m=0;m<r.length;m++){if(v=r[m],w=v.instance,B=v.currentTarget,v=v.listener,w!==o&&i.isPropagationStopped())break e;o=v,i.currentTarget=B;try{o(i)}catch(q){Er(q)}i.currentTarget=null,o=w}}}}function Ue(e,t){var n=t[qr];n===void 0&&(n=t[qr]=new Set);var r=e+"__bubble";n.has(r)||(kp(t,e,2,!1),n.add(r))}function Zu(e,t,n){var r=0;t&&(r|=4),kp(n,e,r,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ju(e){if(!e[Ao]){e[Ao]=!0,Xn.forEach(function(n){n!=="selectionchange"&&(gg.has(n)||Zu(n,!1,e),Zu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,Zu("selectionchange",!1,t))}}function kp(e,t,n,r){switch(Wp(t)){case 2:var i=Yg;break;case 8:i=$g;break;default:i=hf}n=i.bind(null,t,n,e),i=void 0,!pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ef(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var v=r.stateNode.containerInfo;if(v===i)break;if(m===4)for(m=r.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===i)return;m=m.return}for(;v!==null;){if(m=Kt(v),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){r=o=m;continue e}v=v.parentNode}}r=r.return}Ts(function(){var B=o,q=ct(n),Q=[];e:{var I=wr.get(e);if(I!==void 0){var F=bi,me=e;switch(e){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":F=xc;break;case"focusin":me="focus",F=an;break;case"focusout":me="blur",F=an;break;case"beforeblur":case"afterblur":F=an;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=vi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=_c;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=kc;break;case ft:case Qt:case Ae:F=ha;break;case Cn:F=Ds;break;case"scroll":case"scrollend":F=pc;break;case"wheel":F=wc;break;case"copy":case"cut":case"paste":F=Ns;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ba;break;case"toggle":case"beforetoggle":F=Tc}var we=(t&4)!==0,et=!we&&(e==="scroll"||e==="scrollend"),M=we?I!==null?I+"Capture":null:I;we=[];for(var N=B,C;N!==null;){var K=N;if(C=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||C===null||M===null||(K=Fl(N,M),K!=null&&we.push(Wa(N,K,C))),et)break;N=N.return}0<we.length&&(I=new F(I,me,null,n,q),Q.push({event:I,listeners:we}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",I&&n!==Zr&&(me=n.relatedTarget||n.fromElement)&&(Kt(me)||me[qn]))break e;if((F||I)&&(I=q.window===q?q:(I=q.ownerDocument)?I.defaultView||I.parentWindow:window,F?(me=n.relatedTarget||n.toElement,F=B,me=me?Kt(me):null,me!==null&&(et=h(me),we=me.tag,me!==et||we!==5&&we!==27&&we!==6)&&(me=null)):(F=null,me=B),F!==me)){if(we=vi,K="onMouseLeave",M="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(we=ba,K="onPointerLeave",M="onPointerEnter",N="pointer"),et=F==null?I:Kn(F),C=me==null?I:Kn(me),I=new we(K,N+"leave",F,n,q),I.target=et,I.relatedTarget=C,K=null,Kt(q)===B&&(we=new we(M,N+"enter",me,n,q),we.target=C,we.relatedTarget=et,K=we),et=K,F&&me)t:{for(we=bg,M=F,N=me,C=0,K=M;K;K=we(K))C++;K=0;for(var ke=N;ke;ke=we(ke))K++;for(;0<C-K;)M=we(M),C--;for(;0<K-C;)N=we(N),K--;for(;C--;){if(M===N||N!==null&&M===N.alternate){we=M;break t}M=we(M),N=we(N)}we=null}else we=null;F!==null&&Sp(Q,I,F,we,!1),me!==null&&et!==null&&Sp(Q,et,me,we,!0)}}e:{if(I=B?Kn(B):window,F=I.nodeName&&I.nodeName.toLowerCase(),F==="select"||F==="input"&&I.type==="file")var Ye=Hs;else if(xa(I))if(Ps)Ye=wa;else{Ye=Ac;var ge=Gs}else F=I.nodeName,!F||F.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?B&&da(B.elementType)&&(Ye=Hs):Ye=Dc;if(Ye&&(Ye=Ye(e,B))){Is(Q,Ye,n,q);break e}ge&&ge(e,I,B),e==="focusout"&&B&&I.type==="number"&&B.memoizedProps.value!=null&&Il(I,"number",I.value)}switch(ge=B?Kn(B):window,e){case"focusin":(xa(ge)||ge.contentEditable==="true")&&(d=ge,_=B,x=null);break;case"focusout":x=_=d=null;break;case"mousedown":R=!0;break;case"contextmenu":case"mouseup":case"dragend":R=!1,j(Q,n,q);break;case"selectionchange":if(Oc)break;case"keydown":case"keyup":j(Q,n,q)}var De;if(va)e:{switch(e){case"compositionstart":var He="onCompositionStart";break e;case"compositionend":He="onCompositionEnd";break e;case"compositionupdate":He="onCompositionUpdate";break e}He=void 0}else rl?Ls(e,n)&&(He="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(He="onCompositionStart");He&&(Os&&n.locale!=="ko"&&(rl||He!=="onCompositionStart"?He==="onCompositionEnd"&&rl&&(De=It()):(Ut=q,yr="value"in Ut?Ut.value:Ut.textContent,rl=!0)),ge=Do(B,He),0<ge.length&&(He=new _a(He,e,null,n,q),Q.push({event:He,listeners:ge}),De?He.data=De:(De=xr(n),De!==null&&(He.data=De)))),(De=Rc?zs(e,n):Us(e,n))&&(He=Do(B,"onBeforeInput"),0<He.length&&(ge=new _a("onBeforeInput","beforeinput",null,n,q),Q.push({event:ge,listeners:He}),ge.data=De)),pg(Q,e,B,n,q)}xp(Q,t)})}function Wa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Do(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Fl(e,n),i!=null&&r.unshift(Wa(e,i,o)),i=Fl(e,t),i!=null&&r.push(Wa(e,i,o))),e.tag===3)return r;e=e.return}return[]}function bg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sp(e,t,n,r,i){for(var o=t._reactName,m=[];n!==null&&n!==r;){var v=n,w=v.alternate,B=v.stateNode;if(v=v.tag,w!==null&&w===r)break;v!==5&&v!==26&&v!==27||B===null||(w=B,i?(B=Fl(n,o),B!=null&&m.unshift(Wa(n,B,w))):i||(B=Fl(n,o),B!=null&&m.push(Wa(n,B,w)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var yg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function wp(e){return(typeof e=="string"?e:""+e).replace(yg,`
`).replace(vg,"")}function Ep(e,t){return t=wp(t),wp(e)===t}function Je(e,t,n,r,i,o){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||gr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&gr(e,""+r);break;case"className":Qn(e,"class",r);break;case"tabIndex":Qn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,n,r);break;case"style":Es(e,r,o);break;case"data":if(t!=="object"){Qn(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Pl(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Je(e,t,"name",i.name,i,null),Je(e,t,"formEncType",i.formEncType,i,null),Je(e,t,"formMethod",i.formMethod,i,null),Je(e,t,"formTarget",i.formTarget,i,null)):(Je(e,t,"encType",i.encType,i,null),Je(e,t,"method",i.method,i,null),Je(e,t,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Pl(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=Dn);break;case"onScroll":r!=null&&Ue("scroll",e);break;case"onScrollEnd":r!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Pl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),_r(e,"popover",r);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":_r(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=mc.get(n)||n,_r(e,n,r))}}function tf(e,t,n,r,i,o){switch(n){case"style":Es(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));e.innerHTML=n}}break;case"children":typeof r=="string"?gr(e,r):(typeof r=="number"||typeof r=="bigint")&&gr(e,""+r);break;case"onScroll":r!=null&&Ue("scroll",e);break;case"onScrollEnd":r!=null&&Ue("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),o=e[Ct]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof r=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):_r(e,n,r)}}}function Vt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var r=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var m=n[o];if(m!=null)switch(o){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Je(e,t,o,m,n,null)}}i&&Je(e,t,"srcSet",n.srcSet,n,null),r&&Je(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var v=o=m=i=null,w=null,B=null;for(r in n)if(n.hasOwnProperty(r)){var q=n[r];if(q!=null)switch(r){case"name":i=q;break;case"type":m=q;break;case"checked":w=q;break;case"defaultChecked":B=q;break;case"value":o=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,t));break;default:Je(e,t,r,q,n,null)}}vn(e,o,v,w,B,m,i,!1);return;case"select":Ue("invalid",e),r=m=o=null;for(i in n)if(n.hasOwnProperty(i)&&(v=n[i],v!=null))switch(i){case"value":o=v;break;case"defaultValue":m=v;break;case"multiple":r=v;default:Je(e,t,i,v,n,null)}t=o,n=m,e.multiple=!!r,t!=null?jt(e,!!r,t,!1):n!=null&&jt(e,!!r,n,!0);return;case"textarea":Ue("invalid",e),o=i=r=null;for(m in n)if(n.hasOwnProperty(m)&&(v=n[m],v!=null))switch(m){case"value":r=v;break;case"defaultValue":i=v;break;case"children":o=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(a(91));break;default:Je(e,t,m,v,n,null)}ws(e,r,i,o);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(r=n[w],r!=null))switch(w){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Je(e,t,w,r,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(r=0;r<Qa.length;r++)Ue(Qa[r],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(r=n[B],r!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Je(e,t,B,r,n,null)}return;default:if(da(t)){for(q in n)n.hasOwnProperty(q)&&(r=n[q],r!==void 0&&tf(e,t,q,r,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(r=n[v],r!=null&&Je(e,t,v,r,n,null))}function xg(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,m=null,v=null,w=null,B=null,q=null;for(F in n){var Q=n[F];if(n.hasOwnProperty(F)&&Q!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":w=Q;default:r.hasOwnProperty(F)||Je(e,t,F,null,r,Q)}}for(var I in r){var F=r[I];if(Q=n[I],r.hasOwnProperty(I)&&(F!=null||Q!=null))switch(I){case"type":o=F;break;case"name":i=F;break;case"checked":B=F;break;case"defaultChecked":q=F;break;case"value":m=F;break;case"defaultValue":v=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,t));break;default:F!==Q&&Je(e,t,I,F,r,Q)}}Ul(e,m,v,w,B,q,o,i);return;case"select":F=m=v=I=null;for(o in n)if(w=n[o],n.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":F=w;default:r.hasOwnProperty(o)||Je(e,t,o,null,r,w)}for(i in r)if(o=r[i],w=n[i],r.hasOwnProperty(i)&&(o!=null||w!=null))switch(i){case"value":I=o;break;case"defaultValue":v=o;break;case"multiple":m=o;default:o!==w&&Je(e,t,i,o,r,w)}t=v,n=m,r=F,I!=null?jt(e,!!n,I,!1):!!r!=!!n&&(t!=null?jt(e,!!n,t,!0):jt(e,!!n,n?[]:"",!1));return;case"textarea":F=I=null;for(v in n)if(i=n[v],n.hasOwnProperty(v)&&i!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Je(e,t,v,null,r,i)}for(m in r)if(i=r[m],o=n[m],r.hasOwnProperty(m)&&(i!=null||o!=null))switch(m){case"value":I=i;break;case"defaultValue":F=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(a(91));break;default:i!==o&&Je(e,t,m,i,r,o)}Ss(e,I,F);return;case"option":for(var me in n)if(I=n[me],n.hasOwnProperty(me)&&I!=null&&!r.hasOwnProperty(me))switch(me){case"selected":e.selected=!1;break;default:Je(e,t,me,null,r,I)}for(w in r)if(I=r[w],F=n[w],r.hasOwnProperty(w)&&I!==F&&(I!=null||F!=null))switch(w){case"selected":e.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Je(e,t,w,I,r,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in n)I=n[we],n.hasOwnProperty(we)&&I!=null&&!r.hasOwnProperty(we)&&Je(e,t,we,null,r,I);for(B in r)if(I=r[B],F=n[B],r.hasOwnProperty(B)&&I!==F&&(I!=null||F!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(a(137,t));break;default:Je(e,t,B,I,r,F)}return;default:if(da(t)){for(var et in n)I=n[et],n.hasOwnProperty(et)&&I!==void 0&&!r.hasOwnProperty(et)&&tf(e,t,et,void 0,r,I);for(q in r)I=r[q],F=n[q],!r.hasOwnProperty(q)||I===F||I===void 0&&F===void 0||tf(e,t,q,I,r,F);return}}for(var M in n)I=n[M],n.hasOwnProperty(M)&&I!=null&&!r.hasOwnProperty(M)&&Je(e,t,M,null,r,I);for(Q in r)I=r[Q],F=n[Q],!r.hasOwnProperty(Q)||I===F||I==null&&F==null||Je(e,t,Q,I,r,F)}function Tp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],o=i.transferSize,m=i.initiatorType,v=i.duration;if(o&&v&&Tp(m)){for(m=0,v=i.responseEnd,r+=1;r<n.length;r++){var w=n[r],B=w.startTime;if(B>v)break;var q=w.transferSize,Q=w.initiatorType;q&&Tp(Q)&&(w=w.responseEnd,m+=q*(w<v?1:(v-B)/(w-B)))}if(--r,t+=8*(o+m)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nf=null,rf=null;function Oo(e){return e.nodeType===9?e:e.ownerDocument}function Np(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var af=null;function Sg(){var e=window.event;return e&&e.type==="popstate"?e===af?!1:(af=e,!0):(af=null,!1)}var jp=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(e){return Mp.resolve(null).then(e).catch(Tg)}:jp;function Tg(e){setTimeout(function(){throw e})}function kl(e){return e==="head"}function Ap(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(i),Wi(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Za(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Za(n);for(var o=n.firstChild;o;){var m=o.nextSibling,v=o.nodeName;o[gn]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=m}}else n==="body"&&Za(e.ownerDocument.body);n=i}while(n);Wi(t)}function Dp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function sf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sf(n),hr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ng(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[gn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Pn(e.nextSibling),e===null)break}return null}function Rg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pn(e.nextSibling),e===null))return null;return e}function Op(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pn(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$?"||e.data==="$~"}function cf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var uf=null;function Cp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Pn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Lp(e,t,n){switch(t=Oo(n),e){case"html":if(e=t.documentElement,!e)throw Error(a(452));return e;case"head":if(e=t.head,!e)throw Error(a(453));return e;case"body":if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Za(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hr(e)}var Fn=new Map,zp=new Set;function Co(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hr=te.d;te.d={f:Mg,r:Ag,D:Dg,C:Og,L:Cg,m:Bg,X:zg,S:Lg,M:Ug};function Mg(){var e=Hr.f(),t=Eo();return e||t}function Ag(e){var t=bn(e);t!==null&&t.tag===5&&t.type==="form"?em(t):Hr.r(e)}var Ki=typeof document>"u"?null:document;function Up(e,t,n){var r=Ki;if(r&&typeof t=="string"&&t){var i=Rt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),zp.has(i)||(zp.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement("link"),Vt(t,"link",e),mt(t),r.head.appendChild(t)))}}function Dg(e){Hr.D(e),Up("dns-prefetch",e,null)}function Og(e,t){Hr.C(e,t),Up("preconnect",e,t)}function Cg(e,t,n){Hr.L(e,t,n);var r=Ki;if(r&&e&&t){var i='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Rt(n.imageSizes)+'"]')):i+='[href="'+Rt(e)+'"]';var o=i;switch(t){case"style":o=Xi(e);break;case"script":o=Qi(e)}Fn.has(o)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Fn.set(o,e),r.querySelector(i)!==null||t==="style"&&r.querySelector(Ja(o))||t==="script"&&r.querySelector(es(o))||(t=r.createElement("link"),Vt(t,"link",e),mt(t),r.head.appendChild(t)))}}function Bg(e,t){Hr.m(e,t);var n=Ki;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Rt(r)+'"][href="'+Rt(e)+'"]',o=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Qi(e)}if(!Fn.has(o)&&(e=S({rel:"modulepreload",href:e},t),Fn.set(o,e),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(es(o)))return}r=n.createElement("link"),Vt(r,"link",e),mt(r),n.head.appendChild(r)}}}function Lg(e,t,n){Hr.S(e,t,n);var r=Ki;if(r&&e){var i=ln(r).hoistableStyles,o=Xi(e);t=t||"default";var m=i.get(o);if(!m){var v={loading:0,preload:null};if(m=r.querySelector(Ja(o)))v.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fn.get(o))&&ff(e,n);var w=m=r.createElement("link");mt(w),Vt(w,"link",e),w._p=new Promise(function(B,q){w.onload=B,w.onerror=q}),w.addEventListener("load",function(){v.loading|=1}),w.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Bo(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:v},i.set(o,m)}}}function zg(e,t){Hr.X(e,t);var n=Ki;if(n&&e){var r=ln(n).hoistableScripts,i=Qi(e),o=r.get(i);o||(o=n.querySelector(es(i)),o||(e=S({src:e,async:!0},t),(t=Fn.get(i))&&df(e,t),o=n.createElement("script"),mt(o),Vt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}}function Ug(e,t){Hr.M(e,t);var n=Ki;if(n&&e){var r=ln(n).hoistableScripts,i=Qi(e),o=r.get(i);o||(o=n.querySelector(es(i)),o||(e=S({src:e,async:!0,type:"module"},t),(t=Fn.get(i))&&df(e,t),o=n.createElement("script"),mt(o),Vt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}}function Ip(e,t,n,r){var i=(i=H.current)?Co(i):null;if(!i)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Xi(n.href),n=ln(i).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Xi(n.href);var o=ln(i).hoistableStyles,m=o.get(e);if(m||(i=i.ownerDocument||i,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=i.querySelector(Ja(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Fn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fn.set(e,n),o||Ig(i,e,n,m.state))),t&&r===null)throw Error(a(528,""));return m}if(t&&r!==null)throw Error(a(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qi(n),n=ln(i).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Xi(e){return'href="'+Rt(e)+'"'}function Ja(e){return'link[rel="stylesheet"]['+e+"]"}function Hp(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Ig(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Vt(t,"link",n),mt(t),e.head.appendChild(t))}function Qi(e){return'[src="'+Rt(e)+'"]'}function es(e){return"script[async]"+e}function Pp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Rt(n.href)+'"]');if(r)return t.instance=r,mt(r),r;var i=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),mt(r),Vt(r,"style",i),Bo(r,n.precedence,e),t.instance=r;case"stylesheet":i=Xi(n.href);var o=e.querySelector(Ja(i));if(o)return t.state.loading|=4,t.instance=o,mt(o),o;r=Hp(n),(i=Fn.get(i))&&ff(r,i),o=(e.ownerDocument||e).createElement("link"),mt(o);var m=o;return m._p=new Promise(function(v,w){m.onload=v,m.onerror=w}),Vt(o,"link",r),t.state.loading|=4,Bo(o,n.precedence,e),t.instance=o;case"script":return o=Qi(n.src),(i=e.querySelector(es(o)))?(t.instance=i,mt(i),i):(r=n,(i=Fn.get(o))&&(r=S({},n),df(r,i)),e=e.ownerDocument||e,i=e.createElement("script"),mt(i),Vt(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(a(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Bo(r,n.precedence,e));return t.instance}function Bo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,o=i,m=0;m<r.length;m++){var v=r[m];if(v.dataset.precedence===t)o=v;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ff(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function df(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lo=null;function Fp(e,t,n){if(Lo===null){var r=new Map,i=Lo=new Map;i.set(n,r)}else i=Lo,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[gn]||o[_t]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var v=r.get(m);v?v.push(o):r.set(m,[o])}}return r}function Gp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Pg(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Xi(r.href),o=t.querySelector(Ja(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,mt(o);return}o=t.ownerDocument||t,r=Hp(r),(i=Fn.get(i))&&ff(r,i),o=o.createElement("link"),mt(o);var m=o;m._p=new Promise(function(v,w){m.onload=v,m.onerror=w}),Vt(o,"link",r),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=zo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var mf=0;function Fg(e,t){return e.stylesheets&&e.count===0&&Io(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Io(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&mf===0&&(mf=62500*kg());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Io(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>mf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function zo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Io(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uo=null;function Io(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uo=new Map,t.forEach(Gg,e),Uo=null,zo.call(e))}function Gg(e,t){if(!(t.state.loading&4)){var n=Uo.get(e);if(n)var r=n.get(null);else{n=new Map,Uo.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var m=i[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),r=m)}r&&n.set(null,r)}i=t.instance,m=i.getAttribute("data-precedence"),o=n.get(m)||r,o===r&&n.set(null,i),n.set(m,i),this.count++,r=zo.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ts={$$typeof:P,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Vg(e,t,n,r,i,o,m,v,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Yp(e,t,n,r,i,o,m,v,w,B,q,Q){return e=new Vg(e,t,n,m,w,B,q,Q,v),t=1,o===!0&&(t|=24),o=kn(3,null,null,t),e.current=o,o.stateNode=e,t=Yc(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},Xc(o),e}function $p(e){return e?(e=Ni,e):Ni}function qp(e,t,n,r,i,o){i=$p(i),r.context===null?r.context=i:r.pendingContext=i,r=fl(t),r.payload={element:n},o=o===void 0?null:o,o!==null&&(r.callback=o),n=dl(e,r,t),n!==null&&(dn(n,e,t),Oa(n,e,t))}function Kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pf(e,t){Kp(e,t),(e=e.alternate)&&Kp(e,t)}function Xp(e){if(e.tag===13||e.tag===31){var t=Kl(e,67108864);t!==null&&dn(t,e,67108864),pf(e,67108864)}}function Qp(e){if(e.tag===13||e.tag===31){var t=Nn();t=$r(t);var n=Kl(e,t);n!==null&&dn(n,e,t),pf(e,t)}}var Ho=!0;function Yg(e,t,n,r){var i=O.T;O.T=null;var o=te.p;try{te.p=2,hf(e,t,n,r)}finally{te.p=o,O.T=i}}function $g(e,t,n,r){var i=O.T;O.T=null;var o=te.p;try{te.p=8,hf(e,t,n,r)}finally{te.p=o,O.T=i}}function hf(e,t,n,r){if(Ho){var i=_f(r);if(i===null)ef(e,t,r,Po,n),Zp(e,r);else if(Kg(i,e,t,n,r))r.stopPropagation();else if(Zp(e,r),t&4&&-1<qg.indexOf(e)){for(;i!==null;){var o=bn(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=lt(o.pendingLanes);if(m!==0){var v=o;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var w=1<<31-Lt(m);v.entanglements[1]|=w,m&=~w}cr(o),(Ke&6)===0&&(So=vt()+500,Xa(0))}}break;case 31:case 13:v=Kl(o,2),v!==null&&dn(v,o,2),Eo(),pf(o,2)}if(o=_f(r),o===null&&ef(e,t,r,Po,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ef(e,t,r,null,n)}}function _f(e){return e=ct(e),gf(e)}var Po=null;function gf(e){if(Po=null,e=Kt(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Po=e,null}function Wp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dl()){case Vr:return 2;case sa:return 8;case Ol:case en:return 32;case mn:return 268435456;default:return 32}default:return 32}}var bf=!1,Sl=null,wl=null,El=null,ns=new Map,rs=new Map,Tl=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zp(e,t){switch(e){case"focusin":case"focusout":Sl=null;break;case"dragenter":case"dragleave":wl=null;break;case"mouseover":case"mouseout":El=null;break;case"pointerover":case"pointerout":ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(t.pointerId)}}function ls(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=bn(t),t!==null&&Xp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kg(e,t,n,r,i){switch(t){case"focusin":return Sl=ls(Sl,e,t,n,r,i),!0;case"dragenter":return wl=ls(wl,e,t,n,r,i),!0;case"mouseover":return El=ls(El,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ns.set(o,ls(ns.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,rs.set(o,ls(rs.get(o)||null,e,t,n,r,i)),!0}return!1}function Jp(e){var t=Kt(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,oa(e.priority,function(){Qp(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,oa(e.priority,function(){Qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_f(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zr=r,n.target.dispatchEvent(r),Zr=null}else return t=bn(n),t!==null&&Xp(t),e.blockedOn=n,!1;t.shift()}return!0}function eh(e,t,n){Fo(e)&&n.delete(t)}function Xg(){bf=!1,Sl!==null&&Fo(Sl)&&(Sl=null),wl!==null&&Fo(wl)&&(wl=null),El!==null&&Fo(El)&&(El=null),ns.forEach(eh),rs.forEach(eh)}function Go(e,t){e.blockedOn===t&&(e.blockedOn=null,bf||(bf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Xg)))}var Vo=null;function th(e){Vo!==e&&(Vo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Vo===e&&(Vo=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!="function"){if(gf(r||n)===null)continue;break}var o=bn(n);o!==null&&(e.splice(t,3),t-=3,hu(o,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Wi(e){function t(w){return Go(w,e)}Sl!==null&&Go(Sl,e),wl!==null&&Go(wl,e),El!==null&&Go(El,e),ns.forEach(t),rs.forEach(t);for(var n=0;n<Tl.length;n++){var r=Tl[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Tl.length&&(n=Tl[0],n.blockedOn===null);)Jp(n),n.blockedOn===null&&Tl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],o=n[r+1],m=i[Ct]||null;if(typeof o=="function")m||th(n);else if(m){var v=null;if(o&&o.hasAttribute("formAction")){if(i=o,m=o[Ct]||null)v=m.formAction;else if(gf(i)!==null)continue}else v=m.action;typeof v=="function"?n[r+1]=v:(n.splice(r,3),r-=3),th(n)}}}function nh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(m){return i=m})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function yf(e){this._internalRoot=e}Yo.prototype.render=yf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current,r=Nn();qp(n,r,e,t,null,null)},Yo.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qp(e.current,2,null,e,null,null),Eo(),t[qn]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tl.length&&t!==0&&t<Tl[n].priority;n++);Tl.splice(n,0,e),n===0&&Jp(e)}};var rh=l.version;if(rh!=="19.2.7")throw Error(a(527,rh,"19.2.7"));te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var Qg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Cl=$o.inject(Qg),Nt=$o}catch{}}return as.createRoot=function(e,t){if(!f(e))throw Error(a(299));var n=!1,r="",i=um,o=fm,m=dm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Yp(e,1,!1,null,null,n,r,null,i,o,m,nh),e[qn]=t.current,Ju(e),new yf(t)},as.hydrateRoot=function(e,t,n){if(!f(e))throw Error(a(299));var r=!1,i="",o=um,m=fm,v=dm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Yp(e,1,!0,t,n??null,r,i,w,o,m,v,nh),t.context=$p(null),n=t.current,r=Nn(),r=$r(r),i=fl(r),i.callback=null,dl(n,i,r),n=r,t.current.lanes=n,Ll(t,n),cr(t),e[qn]=t.current,Ju(e),new Yo(t)},as.version="19.2.7",as}var mh;function ob(){if(mh)return kf.exports;mh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),kf.exports=sb(),kf.exports}var cb=ob();const ub=s_(cb),ph=s=>{let l;const c=new Set,a=(y,k)=>{const S=typeof y=="function"?y(l):y;if(!Object.is(S,l)){const T=l;l=k??(typeof S!="object"||S===null)?S:Object.assign({},l,S),c.forEach(A=>A(l,T))}},f=()=>l,p={setState:a,getState:f,getInitialState:()=>g,subscribe:y=>(c.add(y),()=>c.delete(y))},g=l=s(a,f,p);return p},fb=(s=>s?ph(s):ph),db=s=>s;function mb(s,l=db){const c=ms.useSyncExternalStore(s.subscribe,ms.useCallback(()=>l(s.getState()),[s,l]),ms.useCallback(()=>l(s.getInitialState()),[s,l]));return ms.useDebugValue(c),c}const hh=s=>{const l=fb(s),c=a=>mb(l,a);return Object.assign(c,l),c},pb=(s=>s?hh(s):hh);function hb(){const s=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(s);else for(let c=0;c<s.length;c+=1)s[c]=Math.floor(Math.random()*256);let l="";for(const c of s)l+=c.toString(16).padStart(2,"0");return l}const Wf="pkp.user",Zf="pkp.savedDevices",Jf="pkp.ideDrafts",ed="pkp.ideSettings",gs="Prototype Version 0.6.7";function ac(s){try{const l=localStorage.getItem(s);return l?JSON.parse(l):null}catch{return null}}function sc(s,l){try{localStorage.setItem(s,JSON.stringify(l))}catch{}}function _b(){const s=ac(Wf);return s&&typeof s.username=="string"&&typeof s.userID=="string"?s:null}function Tf(s){sc(Wf,s)}function tc(){return ac(Zf)??[]}function ta(s){sc(Zf,s)}function gb(){ta([])}function bb(){try{localStorage.removeItem(Wf),localStorage.removeItem(Zf),localStorage.removeItem(Jf),localStorage.removeItem(ed)}catch{}}function qo(){var s;return((s=ac(Jf))==null?void 0:s.filter(l=>l.path&&typeof l.content=="string"))??[]}function ss(s){sc(Jf,s)}function _h(){const s=ac(ed)??{};return{clearTerminalOnRun:!!s.clearTerminalOnRun,simplifiedErrors:s.simplifiedErrors!==!1}}function yb(s){sc(ed,s)}function Nf(s){const l=tc(),c=l.findIndex(a=>a.deviceID===s.deviceID);return c>=0?l[c]=s:l.push(s),ta(l),l}function vb(s){const l=tc().filter(c=>c.deviceID!==s);return ta(l),l}const Pf="b8e06067-62ad-41ba-9231-206ae80ab551",xb="f897177b-aee8-4767-8ecc-cc694fd5fce0",kb="f897177b-aee8-4767-8ecc-cc694fd5fce1",Rf=20,Sb=12,wb=new TextEncoder;function Eb(s){return new Promise(l=>setTimeout(l,s))}function oc(){return typeof navigator<"u"&&"bluetooth"in navigator}function o_(s){return s?s.startsWith("PicoW-")?s.slice(6):s:"Pico"}async function Tb(){if(!oc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Pf]},{namePrefix:"PicoW-"}],optionalServices:[Pf]})}async function c_(){if(!oc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Nb{constructor(){pe(this,"device",null);pe(this,"writeChar",null);pe(this,"notifyChar",null);pe(this,"buffer","");pe(this,"decoder",new TextDecoder);pe(this,"writeQueue",Promise.resolve());pe(this,"disconnectNotified",!1);pe(this,"onLine",()=>{});pe(this,"onDisconnect",()=>{});pe(this,"handleNotification",l=>{const c=l.target;if(!(c!=null&&c.value))return;this.buffer+=this.decoder.decode(c.value.buffer,{stream:!0});let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});pe(this,"handleDisconnected",()=>{var l;this.disconnectNotified||(this.disconnectNotified=!0,(l=this.device)==null||l.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var l,c;return!!((c=(l=this.device)==null?void 0:l.gatt)!=null&&c.connected)}async connect(l){var f;this.device&&this.device!==l&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=l,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,l.removeEventListener("gattserverdisconnected",this.handleDisconnected),l.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=l.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Pf);this.writeChar=await a.getCharacteristic(xb),this.notifyChar=await a.getCharacteristic(kb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(l){const c=this.writeQueue.then(()=>this.doWrite(l));return this.writeQueue=c.catch(()=>{}),c}async doWrite(l){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=wb.encode(`${l}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<c.length;h+=Rf){const b=c.slice(h,h+Rf);await f(b),h+Rf<c.length&&await Eb(Sb)}}disconnect(){var c;const l=this.device;(c=l==null?void 0:l.gatt)!=null&&c.connected?l.gatt.disconnect():this.handleDisconnected()}}class Rb{constructor(l,c){pe(this,"send");pe(this,"onMessage");pe(this,"inActive",!1);pe(this,"inExpectedTotal",0);pe(this,"inStreamId",0);pe(this,"inParts",new Map);pe(this,"inProgress",null);pe(this,"outPendingLines",null);pe(this,"outWaitingAck",!1);pe(this,"outStreamId",0);pe(this,"outNextStreamId",1);pe(this,"outCache",new Map);pe(this,"outProgress",null);pe(this,"outResolve",null);pe(this,"outReject",null);this.send=l,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(l){var a;if(l.startsWith("prep,")){const f=l.split(","),h=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,b=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=b,this.inParts.clear(),this.send(b>0?`ack:prep,${b}`:"ack:prep"));return}if(l==="ack:prep"||l===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(l.startsWith("miss,")){const f=l.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const h=parseInt(f[1],10),b=parseInt(f[2],10),p=this.outCache.get(b);h===this.outStreamId&&p&&this.send(p)}return}const c=this.parseNumbered(l);if(c){const{idx:f,payload:h}=c;if(!this.inActive){this.onMessage(h);return}this.inParts.has(f)||(this.inParts.set(f,h),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let b=0;for(let p=1;p<=this.inExpectedTotal;p+=1)if(!this.inParts.has(p)){b=p;break}if(b>0&&this.inStreamId>0&&f>b&&this.send(`miss,${this.inStreamId},${b}`),this.inParts.size>=this.inExpectedTotal){for(let p=1;p<=this.inExpectedTotal;p+=1){const g=this.inParts.get(p);g!==void 0&&this.onMessage(g)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(l)}setInboundProgress(l){this.inProgress=l}async sendReliable(l,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=l.length===0?[""]:l;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((h,b)=>{this.outResolve=h,this.outReject=b});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await f}async flushOutbound(){var l,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(l=this.outResolve)==null||l.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let b=0;b<h;b+=1){const p=this.outPendingLines[b],g=`${b+1}-${p}`;this.outCache.set(b+1,g),await this.send(g),(c=this.outProgress)==null||c.call(this,b+1,h,p)}(a=this.outResolve)==null||a.call(this)}catch(h){(f=this.outReject)==null||f.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(l){const c=l.indexOf("-");if(c<=0)return null;const a=l.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:l.slice(c+1)}}}const la=11,bs=31,jb=2,Mb=60,na=4,ra=60;function Ab(s,l){return Math.max(14,Math.min(56,Math.min(s,l)*.05))}function u_(s,l,c=la,a=bs){const f=Ab(s,l),h=Math.max(1,s-2*f),b=Math.max(1,l-2*f);return{areaW:s,areaH:l,cols:c,rows:a,margin:f,stepX:h/Math.max(1,c-1),stepY:b/Math.max(1,a-1)}}function f_(s,l){return l.margin+s/2*l.stepX}function d_(s,l){const c=l.margin+s/2*l.stepY;return l.areaH-c}function ps(s,l){return s.centerX2===null||s.centerY2===null||s.spanX===null||s.spanY===null?null:{cx:f_(s.centerX2,l),cy:d_(s.centerY2,l),width:s.spanX*l.stepX,height:s.spanY*l.stepY}}function Db(s){const l=[];for(let c=0;c<s.cols;c+=1)for(let a=0;a<s.rows;a+=1)l.push({x:s.margin+c*s.stepX,y:s.areaH-(s.margin+a*s.stepY)});return l}function jf(s,l,c,a,f){const h=(g,y,k,S)=>{const T=y%2,A=S*2;let z=T,V=1/0;for(let Y=T;Y<=A;Y+=2){const G=Math.abs(k(Y)-g);G<V&&(V=G,z=Y)}return Math.max(y,Math.min(A-y,z))},b=h(s,c,g=>f_(g,f),f.cols-1),p=h(l,a,g=>d_(g,f),f.rows-1);return{centerX2:b,centerY2:p}}const oi=6e3,Ob=15,Cb="",nc=[32,64,128,192],Bb=oi*10,Lb=3500,zb=8e3,Ub=2,Ib=oi,Hb=oi*8;function Mf(s){return new Promise(l=>setTimeout(l,s))}function Zi(s){if(s!=null&&s.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function gh(s){return s instanceof DOMException&&s.name==="AbortError"}function Rl(s){return s.replace(/[\r\n,]/g," ").trim()}class Pb{constructor(l={}){pe(this,"transport",new Nb);pe(this,"stream");pe(this,"events");pe(this,"waiters",[]);pe(this,"collectingLayout",!1);pe(this,"layoutBuffer",[]);pe(this,"layoutResolve",null);pe(this,"collectingLines",!1);pe(this,"lineBuffer",[]);pe(this,"lineResolve",null);pe(this,"lineReject",null);pe(this,"lineCollectId",0);pe(this,"controlPumpActive",!1);pe(this,"pendingButtons",[]);pe(this,"pendingSliders",new Map);pe(this,"pendingToggles",new Map);pe(this,"pendingJoysticks",new Map);pe(this,"pendingDpads",[]);pe(this,"expectingDisconnect",!1);pe(this,"disconnectMessage",null);pe(this,"busy",!1);pe(this,"fsCapabilities",null);this.events=l,this.stream=new Rb(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var l;return o_((l=this.transport.device)==null?void 0:l.name)}get connected(){return this.transport.connected}setBusy(l){if(this.busy=l,l){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(l,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,l,c)}progress(l,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,l,c)}onDeviceMessage(l){var a,f;if(l==="disconnect"||l==="disconnect_private"){const h=l==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(l==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(l);return}if(this.collectingLayout){if(l==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,h),this.layoutResolve=null;return}!l.startsWith("ACK")&&!l.startsWith("ERR")&&!l.startsWith("#VERSION")?this.layoutBuffer.push(l):l.startsWith("#VERSION")&&this.layoutBuffer.push(l);return}l.startsWith("ERR")?this.log("error",l):l.startsWith("radar,")?this.handleRadarLine(l):l.startsWith("text,")?this.handleTextLine(l):l.startsWith("toggle_state,")?this.handleToggleStateLine(l):l.startsWith("slider_state,")?this.handleSliderStateLine(l):l.startsWith("plot_clear,")?this.handlePlotClearLine(l):l.startsWith("plot,")?this.handlePlotLine(l):l.startsWith("ACK")||l==="LAYOUT_SAVED"||l.startsWith("READY")?this.log("success",l):this.log("info",`rx: ${l}`);const c=this.waiters.findIndex(h=>h.match(l));if(c>=0){const h=this.waiters[c];this.waiters.splice(c,1),clearTimeout(h.timer),h.resolve(l)}}waitFor(l,c,a){return new Promise((f,h)=>{const b=setTimeout(()=>{const p=this.waiters.findIndex(g=>g.timer===b);p>=0&&this.waiters.splice(p,1),h(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:l,resolve:f,reject:h,timer:b})})}async collectLines(l,c,a,f,h){Zi(f);const b=this.lineCollectId+1;this.lineCollectId=b,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const p=new Promise((g,y)=>{let k=!1;const S=()=>this.lineCollectId===b,T=()=>{k=!0,S()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",z)},A=G=>{k||(clearTimeout(V),S()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),y(G))},z=()=>{A(new DOMException("BLE file read cancelled","AbortError"))},V=setTimeout(()=>{S()&&A(new Error(`Timeout: ${a}`))},c);this.lineResolve=g,this.lineReject=A;const Y=this.lineResolve;this.lineResolve=G=>{S()&&(clearTimeout(V),T(),Y==null||Y(G))},f==null||f.addEventListener("abort",z,{once:!0})});return await this.transport.writeLine(l),p}async exchange(l,c,a,f=3){let h;for(let b=1;b<=f;b+=1)try{return await this.transport.writeLine(l),await this.waitFor(c,oi,a)}catch(p){h=p,this.log("warning",`${a}: forsøg ${b}/${f} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${a}`)}async connect(l){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(l)}async runHandshake(l){var re,de,fe;await Mf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",X=>X==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",X=>X==="unowned"||X.startsWith("unowned,")||X.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((re=c.split(",")[1])==null?void 0:re.trim())||void 0};const a=c.split(","),f=a[1]??"",h=a[2]!==void 0&&parseInt(a[2],10)||0,b=a[3]!==void 0?parseInt(a[3],10)===1:!0,p=a[4]!==void 0?parseInt(a[4],10)===1:!1,g=a.length>=7,y=g?parseInt(a[5]??"0",10)===1:p,k=((de=a[g?6:5])==null?void 0:de.trim())||void 0,S=((fe=a[g?7:6])==null?void 0:fe.trim())||void 0;await this.exchange("ACK:ownership",X=>X==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const T=await this.exchange(`request_permission,${l.userID},${Rl(l.username)}`,X=>X.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const A=T.split(",").filter(X=>/^\d+$/.test(X)),z=A.length>=1?parseInt(A[0]??"0",10):0,V=A.length>=2?parseInt(A[1]??"0",10):0,Y=A.length>=3?parseInt(A[2]??"0",10):V;if(z===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:k,canOthersConnect:b};const G=l.userID===f,W=V===1||G,P=Y===1||G;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:k,deviceName:S,iconID:h,canEdit:W,canEditCode:P,isOwnedByMe:G,canOthersConnect:b,canOthersEdit:p,canOthersEditCode:y}}async create(l,c,a,f,h,b,p){const g=a?1:0,y=a&&f?1:0,k=a&&h?1:0;await this.exchange(`create,${l.userID},${Rl(l.username)},${c},${g},${y},${k},${b},${p}`,S=>S==="ACK:create","create")}async updateDeviceSettings(l,c,a,f,h,b,p){const g=c?1:0,y=c&&a?1:0,k=c&&f?1:0;await this.exchange(`settings_update,${l},${g},${y},${k},${h},${b},${Rl(p??"")}`,S=>S==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const l=new Promise((a,f)=>{this.layoutResolve=a;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},oi*2),b=this.layoutResolve;this.layoutResolve=p=>{clearTimeout(h),b==null||b(p)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await l;return this.progress(100,"Klar"),c}async saveLayout(l){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=l.map(f=>{const h=p=>p===null?"n":String(p),b=`update,${f.type},${f.name},${h(f.centerX2)},${h(f.centerY2)},${h(f.spanX)},${h(f.spanY)},${f.rotation}`;return f.type==="slider"?`${b},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${b},${f.toggleInitial?1:0}`:f.type==="radar"?[b,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[b,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):f.type==="plot"?[b,f.plotMin??0,f.plotMax??100,f.plotHistory??30,f.plotStyle??"line"].join(","):b});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",oi*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(l="/"){return(await this.collectLines(`fs_list,${Rl(l)}`,oi*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,h,b]=a.split(","),p=f==="file"||f==="dir"?f:"unknown",g=parseInt(b??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:p,...Number.isFinite(g)&&g>=0?{size:g}:{}}})}handleRadarLine(l){var b,p,g;const c=l.split(",");if(c.length<4)return;const a=(b=c[1])==null?void 0:b.trim(),f=parseFloat(c[2]??""),h=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(h)||((g=(p=this.events).onRadar)==null||g.call(p,a,f,h),this.log("info",`rx: ${l}`))}handleTextLine(l){var g,y;const c=l.indexOf(","),a=c>=0?l.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=l.slice(c+1,a),h=l.slice(a+1),b=f==null?void 0:f.trim();if(!b)return;const p=h.split(Cb).join(`
`);(y=(g=this.events).onText)==null||y.call(g,b,p),this.log("info",`rx: ${l}`)}handleToggleStateLine(l){var h,b,p;const c=l.split(",");if(c.length<3)return;const a=(h=c[1])==null?void 0:h.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((p=(b=this.events).onToggleState)==null||p.call(b,a,f===1),this.log("info",`rx: ${l}`))}handleSliderStateLine(l){var h,b,p;const c=l.split(",");if(c.length<3)return;const a=(h=c[1])==null?void 0:h.trim(),f=parseFloat(c[2]??"");!a||!Number.isFinite(f)||((p=(b=this.events).onSliderState)==null||p.call(b,a,f),this.log("info",`rx: ${l}`))}handlePlotLine(l){var b,p,g;const c=l.split(",");if(c.length<3)return;const a=(b=c[1])==null?void 0:b.trim(),f=parseFloat(c[2]??"");if(!a||!Number.isFinite(f))return;const h=c.slice(3).join(",").trim()||void 0;(g=(p=this.events).onPlot)==null||g.call(p,a,f,h),this.log("info",`rx: ${l}`)}handlePlotClearLine(l){var f,h,b;const c=l.split(",");if(c.length<2)return;const a=(f=c[1])==null?void 0:f.trim();a&&((b=(h=this.events).onPlotClear)==null||b.call(h,a),this.log("info",`rx: ${l}`))}async readText(l,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(l,f,c,a)}catch(h){if(a!=null&&a.aborted||gh(h)||!f.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(l,c,a)}async getFilesystemCapabilities(l){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",Ib,"fs_capabilities",l),a=c.find(k=>k.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(k=>k.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=f.split(","),b=new Map;for(let k=1;k<h.length-1;k+=2)b.set(h[k],h[k+1]);const p=parseInt(b.get("max_page")??"",10),g=parseInt(b.get("stream_chunk")??"",10),y={version:b.get("version")||void 0,pageRead:b.get("page_read")==="1",maxPageSize:Number.isFinite(p)&&p>0?p:32,streamRead:b.get("stream_read")==="1",streamChunkSize:Number.isFinite(g)&&g>0?g:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(l,c,a){const f=await this.getFilesystemCapabilities(a);let h=0,b=Fb(f.maxPageSize),p=0,g=null,y="";const k=`Indlæser ${Af(l)}...`;Zi(a),c==null||c(5,k);for(let S=0;S<512;S+=1){Zi(a),p===0&&(c==null||c(7,k));const A=await this.readPageWithRetry(l,p,h,b,a),z=A.lines;h=A.nextPageSizeIndex,b=A.maxPageSizeIndex,Zi(a);const V=z.find(ee=>ee.startsWith("ERR"));if(V)throw new Error(V);const Y=z.find(ee=>ee.startsWith("fs_page,"));if(!Y)throw new Error("ERR: fs_read_page missing data");const[,G,W,P,re=""]=Y.split(",",5);if(G!==l)throw new Error("ERR: fs_read_page stale data");const de=parseInt(W??"",10),fe=parseInt(P??"",10);if(!Number.isFinite(de)||de!==p||!Number.isFinite(fe))throw new Error("ERR: fs_read_page invalid data");g=fe,y+=re,p+=Math.floor(re.length/2);const X=g>0?8+Math.min(87,Math.round(p/g*87)):95;if(c==null||c(X,k),p>=g||re.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(yh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(l,c,a,f,h){let b,p=Math.min(a,f);for(;p>=0;){const g=nc[p],y=p===0?Ub:1,k=p===0?zb:Lb;for(let S=1;S<=y;S+=1){Zi(h);try{return{lines:await this.collectLines(`fs_read_page,${Rl(l)},${c},${g}`,k,`fs_read_page ${c}`,h),nextPageSizeIndex:Math.min(p+1,f),maxPageSizeIndex:f}}catch(T){if(h!=null&&h.aborted||gh(T))throw T;if(b=T,S<y||p>0){const z=p>0&&S>=y?nc[p-1]:g;this.log("warning",`fs_read_page ${c} (${g} bytes) fejlede; prøver ${z} bytes`),await Mf(80+S*80)}}}if(p===0)break;f=Math.max(0,p-1),p=f}throw b instanceof Error?b:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(l,c,a,f){const h=`Indlæser ${Af(l)}...`,b=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,h);const p=await this.collectLines(`fs_read_stream,${Rl(l)},${b}`,Hb,`fs_read_stream ${l}`,f,(X,ee)=>{const Ee=8+Math.round(Math.min(X,ee)/Math.max(1,ee)*87);a==null||a(Math.min(95,Ee),h)});Zi(f);const g=p.find(X=>X.startsWith("ERR"));if(g)throw new Error(g);const y=p.find(X=>X.startsWith("fs_stream_begin,")),k=p.find(X=>X.startsWith("fs_stream_end,"));if(!y||!k)throw new Error("ERR: fs_read_stream missing metadata");const[,S,T]=y.split(",",4),[,A,z,V]=k.split(",",4),Y=parseInt(T??"",10),G=parseInt(z??"",10),W=parseInt(V??"",10);if(S!==l||A!==l||!Number.isFinite(Y)||Y!==G||!Number.isFinite(W))throw new Error("ERR: fs_read_stream invalid metadata");let P=0,re="";for(const X of p){if(!X.startsWith("fs_stream_chunk,"))continue;const[,ee,Ee=""]=X.split(",",3),be=parseInt(ee??"",10);if(!Number.isFinite(be)||be!==P||Ee.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");re+=Ee,P+=Math.floor(Ee.length/2)}if(P!==Y)throw new Error("ERR: fs_read_stream size mismatch");const de=yh(re);if(bh(de)!==W)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(de)}async writeText(l,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Rl(l)}`,k=>k==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),h=[...f].map(k=>k.toString(16).padStart(2,"0")).join(""),b=[];for(let k=0;k<h.length;k+=160)b.push(`fs_write_chunk,${h.slice(k,k+160)}`);b.push("fs_write_end");const p=bh(f),g=this.waitFor(k=>k==="ACK:fs_write_done"||k.startsWith("ACK:fs_write_done,")||k.startsWith("ERR"),Bb,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(b,(k,S,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const A=Math.min(f.length,k*80),z=18+Math.round(k/Math.max(1,S-1)*67);a==null||a(Math.min(85,z),`Sender ${A}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const y=await g;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,k,S]=y.split(",",3),T=parseInt(k??"",10),A=parseInt(S??"",10);if(T!==f.length||A!==p)throw new Error(`ERR: BLE-verificering fejlede for ${Af(l)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(l){const c=await this.exchange(`fs_delete,${Rl(l)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",l=>l==="ACK:restart"||l.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(l,c){this.busy||(this.pendingButtons.push(`button,${l}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(l,c){this.busy||(this.pendingSliders.set(l,`slider,${l}:${c}`),this.pumpControls())}enqueueToggle(l,c){this.busy||(this.pendingToggles.set(l,`toggle,${l}:${c?1:0}`),this.pumpControls())}enqueueJoystick(l,c,a){this.busy||(this.pendingJoysticks.set(l,`joystick,${l}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(l,c,a){this.busy||(this.pendingDpads.push(`dpad,${l}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const l=this.nextControlLine();if(!l)break;await this.transport.writeLine(l),this.log("info",`tx: ${l}`),await Mf(Ob)}}catch(l){this.log("error",l instanceof Error?l.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const l=this.pendingButtons.shift();if(l)return l;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[b,p]=a.value;return this.pendingSliders.delete(b),p}const f=this.pendingToggles.entries().next();if(!f.done){const[b,p]=f.value;return this.pendingToggles.delete(b),p}const h=this.pendingJoysticks.entries().next();if(!h.done){const[b,p]=h.value;return this.pendingJoysticks.delete(b),p}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",l=>l==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const l=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,l)}}function Fb(s){let l=0;for(let c=0;c<nc.length;c+=1)nc[c]<=s&&(l=c);return l}function Af(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")||s}function bh(s){let l=0;for(const c of s)l=l+c>>>0;return l}function yh(s){const l=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<l.length;c+=1)l[c]=parseInt(s.slice(c*2,c*2+2),16);return l}function vh(s){const l=(c,a)=>Number.isFinite(c)?Math.max(jb,Math.min(Mb,c)):a;for(const c of s){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),h=l(parseInt(f[1],10),la),b=l(parseInt(f[2],10),bs);return{cols:h,rows:b}}}return{cols:la,rows:bs}}function xh(s){const l=new Map;for(const c of s){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[h,b,p,g,y,k,S,T,A,z,V,Y,G]=f;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"&&h!=="joystick"&&h!=="dpad"&&h!=="plot"||l.has(b))continue;const W=E=>{if(E==="n")return null;const U=parseInt(E,10);return Number.isNaN(U)?null:U},P=parseInt(S,10)||0,re=T!==void 0?parseInt(T,10):0,de=A!==void 0?parseInt(A,10):100,fe=["none","bottom","middle","top"].includes(z??"")?z:"none",X=T!==void 0?parseInt(T,10)===1:!1,ee=T!==void 0?parseFloat(T):0,Ee=A!==void 0?parseFloat(A):180,be=z!==void 0?parseFloat(z):200,Fe=V!==void 0?parseInt(V,10):1200,J=(E,U)=>["none","bottom","middle","top"].includes(E??"")?E:U,We=T!==void 0?parseInt(T,10):-100,ye=A!==void 0?parseInt(A,10):100,Ne=z!==void 0?parseInt(z,10):-100,O=V!==void 0?parseInt(V,10):100,te=T!==void 0?parseFloat(T):0,ue=A!==void 0?parseFloat(A):100,ce=z!==void 0?parseInt(z,10):30,Se=V==="bar"?"bar":"line";l.set(b,{type:h,name:b,centerX2:W(p),centerY2:W(g),spanX:W(y),spanY:W(k),rotation:[0,90,180,270].includes(P)?P:0,...h==="slider"?{sliderMin:Number.isFinite(re)?re:0,sliderMax:Number.isFinite(de)?de:100,sliderRecenter:fe}:{},...h==="toggle"?{toggleInitial:X}:{},...h==="radar"?{radarMinAngle:Number.isFinite(ee)?ee:0,radarMaxAngle:Number.isFinite(Ee)?Ee:180,radarMaxDistance:Number.isFinite(be)&&be>0?be:200,radarFadeMs:Number.isFinite(Fe)&&Fe>0?Fe:1200}:{},...h==="joystick"?{joystickXMin:Number.isFinite(We)?We:-100,joystickXMax:Number.isFinite(ye)&&ye!==We?ye:100,joystickYMin:Number.isFinite(Ne)?Ne:-100,joystickYMax:Number.isFinite(O)&&O!==Ne?O:100,joystickXRecenter:J(Y,"middle"),joystickYRecenter:J(G,"middle")}:{},...h==="plot"?{plotMin:Number.isFinite(te)?te:0,plotMax:Number.isFinite(ue)&&ue!==te?ue:te+100,plotHistory:Number.isFinite(ce)&&ce>1?ce:30,plotStyle:Se}:{}})}return[...l.values()]}let ie=null,os=null,kh=0,Pr=!1;function Gb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Sh(s){return new Promise(l=>setTimeout(l,s))}function Df(s,l){const c=l.userID.toLowerCase();return s.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?l.username:a.ownerName}})}function Of(s,l){return(s.name?o_(s.name):"")||(l==null?void 0:l.deviceName)||"Pico"}function Vb(s){return Object.fromEntries(s.filter(l=>l.type==="toggle").map(l=>[l.name,!!l.toggleInitial]))}function wh(s,l){const c=Vb(s);for(const a of s)a.type==="toggle"&&l[a.name]!==void 0&&(c[a.name]=l[a.name]);return c}const le=pb((s,l)=>{function c(p,g){s(y=>({logs:[{level:p,message:g,time:Gb()},...y.logs].slice(0,200)}))}function a(p){os&&clearTimeout(os),kh+=1,s({toast:{message:p,id:kh}}),os=setTimeout(()=>s({toast:null}),4500)}function f(p=null){s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p})}function h(p){return{deviceID:p.deviceID,deviceName:p.deviceName,ownerID:p.ownerID,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}}function b(p){const{screen:g,active:y,picoIdeOrigin:k}=l();if(Pr){Pr=!1;return}p&&(c("warning",p),a(p)),(g==="control"||g==="connection"||g==="create"||g==="ide"&&k==="control")&&f(y?h(y):null)}return ie=new Pb({onProgress:(p,g)=>s({progress:{value:p,label:g}}),onLog:(p,g)=>c(p,g),onRadar:(p,g,y)=>{const k=Date.now(),S={id:`${k}-${Math.random().toString(36).slice(2)}`,angle:g,distance:y,createdAt:k};s(T=>{const A=T.layout.find(Y=>Y.type==="radar"&&Y.name===p),z=(A==null?void 0:A.radarFadeMs)??1200,V=T.radarPings[p]??[];return{radarPings:{...T.radarPings,[p]:[...V.filter(Y=>k-Y.createdAt<=z),S].slice(-80)}}})},onText:(p,g)=>{s(y=>({textValues:{...y.textValues,[p]:g}}))},onToggleState:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}}))},onSliderState:(p,g)=>{s(y=>({sliderValues:{...y.sliderValues,[p]:g}}))},onPlot:(p,g,y)=>{const k=Date.now(),S={id:`${k}-${Math.random().toString(36).slice(2)}`,value:g,createdAt:k,label:y};s(T=>{const A=T.layout.find(Y=>Y.type==="plot"&&Y.name===p),z=Math.max(2,(A==null?void 0:A.plotHistory)??30),V=T.plotSeries[p]??[];return{plotSeries:{...T.plotSeries,[p]:[...V,S].slice(-z)}}})},onPlotClear:p=>{s(g=>({plotSeries:{...g.plotSeries,[p]:[]}}))},onDisconnect:p=>b(p)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const p=_b(),g=p?Df(tc(),p):tc();p&&ta(g),s({user:p,savedDevices:g,splashTarget:p?"dashboard":"intro"})},finishSplash:()=>{const p=l().splashTarget;s({screen:p??"intro"})},createUser:p=>{const g=p.trim();if(!g)return;const y={username:g,userID:hb()};Tf(y),s({user:y,screen:"dashboard"})},findDevice:async()=>{try{const p=await Tb();await l().connectToDevice(p)}catch(p){p instanceof Error&&p.name!=="NotFoundError"&&c("error",p.message)}},connectToDevice:async(p,g)=>{var k,S,T;const y=l().user;if(!(!y||!ie)){Pr=!1,s({screen:"connection",connecting:{name:Of(p,g),iconID:(g==null?void 0:g.deviceIconID)??0},progress:{value:0,label:"Forbinder..."},sliderValues:{},radarPings:{},textValues:{},plotSeries:{}});try{await ie.connect(p);const A=await ie.runHandshake(y),z=p.id,V=(A.kind==="owned"||A.kind==="unowned")&&((k=A.deviceName)==null?void 0:k.trim())||Of(p,g);if(s(re=>re.connecting?{connecting:{...re.connecting,name:V}}:{}),A.kind==="denied"){const de=`Du kan ikke forbinde, fordi ${((S=A.ownerName)==null?void 0:S.trim())||((T=g==null?void 0:g.ownerName)==null?void 0:T.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",de),a(de),s({screen:"dashboard",connecting:null}),await ie.disconnect();return}if(A.kind==="unowned"){s({active:{deviceID:z,deviceName:V,ownerID:y.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:y.username,gridCols:la,gridRows:bs},screen:"create"});return}const Y={deviceID:z,deviceName:V,ownerID:A.ownerID,deviceIconID:A.iconID,canOthersConnect:A.canOthersConnect,canOthersEdit:A.canOthersEdit,canOthersEditCode:A.canOthersEditCode,isOwnedByMe:A.isOwnedByMe,ownerName:A.isOwnedByMe?y.username:A.ownerName??(g==null?void 0:g.ownerName)};s({savedDevices:Nf(Y)});const G=await ie.requestLayout(),W=vh(G),P=xh(G);s({layout:P,toggleValues:wh(P,l().toggleValues),active:{deviceID:z,deviceName:V,ownerID:A.ownerID,iconID:A.iconID,canEdit:A.canEdit,canEditCode:A.canEditCode,canOthersConnect:A.canOthersConnect,canOthersEdit:A.canOthersEdit,canOthersEditCode:A.canOthersEditCode,isOwnedByMe:A.isOwnedByMe,ownerName:A.isOwnedByMe?y.username:A.ownerName??(g==null?void 0:g.ownerName),gridCols:W.cols,gridRows:W.rows},screen:"control",connecting:null,connectionLost:null})}catch(A){const z=A instanceof Error?A.message:"Forbindelsen mislykkedes.";c("error",z),a("Forbindelsen mislykkedes."),s({screen:"dashboard",connecting:null}),await ie.disconnect().catch(()=>{})}}},finishCreate:async(p,g,y,k,S,T)=>{const{user:A,active:z}=l();if(!(!A||!z||!ie))try{ie.setBusy(!0),await ie.create(A,p,g,y,k,S,T),ie.setBusy(!1);const V={deviceID:z.deviceID,deviceName:z.deviceName,ownerID:A.userID,deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&k,isOwnedByMe:!0,ownerName:A.username};s({savedDevices:Nf(V)});const Y=await ie.requestLayout(),G=vh(Y),W=xh(Y);s({layout:W,toggleValues:wh(W,l().toggleValues),active:{...z,ownerID:A.userID,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&k,ownerName:A.username,gridCols:G.cols,gridRows:G.rows},screen:"control"})}catch(V){ie.setBusy(!1);const Y=V instanceof Error?V.message:"Oprettelse mislykkedes.";c("error",Y),a("Oprettelse mislykkedes."),s({screen:"dashboard"}),await ie.disconnect().catch(()=>{})}},saveDeviceSettings:async(p,g,y,k,S,T)=>{const{active:A,user:z}=l();if(!(!A||!ie||!A.isOwnedByMe))try{ie.setBusy(!0),await ie.updateDeviceSettings(p,g,y,k,S,T,z==null?void 0:z.username);const V={...A,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&k,ownerName:(z==null?void 0:z.username)??A.ownerName,gridCols:S,gridRows:T},Y={deviceID:A.deviceID,deviceName:A.deviceName,ownerID:A.ownerID??(z==null?void 0:z.userID),deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&k,isOwnedByMe:!0,ownerName:(z==null?void 0:z.username)??A.ownerName};s({active:V,savedDevices:Nf(Y)}),a("Enhedsindstillinger gemt.")}catch(V){c("error",V instanceof Error?V.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{ie.setBusy(!1)}},cancelCreate:async()=>{ie&&await ie.disconnect().catch(()=>{}),s({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Pr=!0,f(null),ie&&await ie.disconnect().catch(()=>{}),Pr=!1},removeSavedDevice:p=>{s({savedDevices:vb(p)})},clearSavedDevices:()=>{gb(),s({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Pr=!0,ie!=null&&ie.connected&&await ie.disconnect().catch(()=>{}),bb(),window.location.reload()},updateUsername:p=>{const g=l().user,y=p.trim();if(!g||!y)return;const k={...g,username:y};Tf(k),s(S=>{var A;const T=Df(S.savedDevices,k);return ta(T),{user:k,active:(A=S.active)!=null&&A.isOwnedByMe?{...S.active,ownerName:y}:S.active,savedDevices:T}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const p=l().user;return p?Yb(p):null},applyOwnerPairingCode:p=>{var y;const g=$b(p,(y=l().user)==null?void 0:y.username);return g?(Tf(g),s(k=>{var T,A,z;const S=Df(k.savedDevices,g);return ta(S),{user:g,active:((A=(T=k.active)==null?void 0:T.ownerID)==null?void 0:A.toLowerCase())===g.userID.toLowerCase()||(z=k.active)!=null&&z.isOwnedByMe?{...k.active,isOwnedByMe:!0,ownerID:g.userID,ownerName:g.username}:k.active,savedDevices:S}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const p=l().screen==="control"&&!!(ie!=null&&ie.connected),g=l().active;if(p&&g&&!g.isOwnedByMe&&!g.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),s({sideMenuOpen:!1});return}s(y=>({screen:"ide",picoIdeOrigin:p?"control":"dashboard",active:p?y.active:null,layout:p?y.layout:[],sliderValues:p?y.sliderValues:{},toggleValues:p?y.toggleValues:{},radarPings:p?y.radarPings:{},textValues:p?y.textValues:{},plotSeries:p?y.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:p,active:g}=l();s({screen:p==="control"&&g&&(ie!=null&&ie.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ie!=null&&ie.connected),bleListFiles:async()=>ie!=null&&ie.connected?ie.listFiles("/"):[],bleReadText:async(p,g,y)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");return ie.readText(p,g,y)},bleWriteText:async(p,g,y)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.writeText(p,g,y)},bleDeleteFile:async p=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.deleteFile(p)},bleRestart:async()=>{ie!=null&&ie.connected&&await ie.restart()},bleRestartAndReconnect:async(p="control")=>{const{active:g}=l();if(!(ie!=null&&ie.connected)||!g)return!1;const y={deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIconID:g.iconID,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName};Pr=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ie.restart()}catch{}s({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:y.deviceName,iconID:y.deviceIconID}});for(let k=0;k<12&&(ie!=null&&ie.connected);k+=1)await Sh(250);ie!=null&&ie.connected||(Pr=!1);for(let k=1;k<=8;k+=1){await Sh(k===1?1200:850);try{const T=(await c_()).find(A=>A.id===y.deviceID);if(!T){s({progress:{value:Math.min(88,20+k*8),label:"Venter på browser-tilladelse..."}});continue}return s({progress:{value:Math.min(92,24+k*8),label:`Genforbinder (${k}/8)...`}}),await l().connectToDevice(T,y),p==="ide"&&s(A=>({screen:"ide",picoIdeOrigin:"control",active:A.active,layout:A.layout,sliderValues:A.sliderValues,toggleValues:A.toggleValues,radarPings:A.radarPings,textValues:A.textValues,plotSeries:A.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(S){c("warning",S instanceof Error?S.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Pr=!1,s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:y}),!1},reconnectLostDevice:async()=>{var g;const p=l().connectionLost;if(p){s({connectionLost:null});try{if((g=navigator.bluetooth)!=null&&g.getDevices){const k=(await navigator.bluetooth.getDevices()).find(S=>S.id===p.deviceID);if(k){await l().connectToDevice(k,p);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await l().findDevice()}},dismissConnectionLost:()=>s({connectionLost:null}),sendButton:(p,g)=>ie==null?void 0:ie.enqueueButton(p,g),sendSlider:(p,g)=>{s(y=>({sliderValues:{...y.sliderValues,[p]:g}})),ie==null||ie.enqueueSlider(p,g)},sendToggle:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}})),ie==null||ie.enqueueToggle(p,g)},sendJoystick:(p,g,y)=>ie==null?void 0:ie.enqueueJoystick(p,g,y),sendDpad:(p,g,y)=>ie==null?void 0:ie.enqueueDpad(p,g,y),saveLayout:async p=>{if(ie)try{ie.setBusy(!0),await ie.saveLayout(p),s({layout:p,editMode:!1})}catch(g){c("error",g instanceof Error?g.message:"Kunne ikke gemme layout.")}finally{ie.setBusy(!1)}},setEditMode:p=>s({editMode:p,sideMenuOpen:!1,menuPage:null}),setDashboardPage:p=>s({dashboardPage:p}),toggleSideMenu:p=>s(g=>({sideMenuOpen:p??!g.sideMenuOpen})),toggleDebugger:p=>s(g=>({debuggerOpen:p??!g.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:p=>s({menuPage:p,sideMenuOpen:!1}),closeMenuPage:()=>s({menuPage:null}),clearLogs:()=>s({logs:[]}),log:(p,g)=>c(p,g),askConfirm:p=>s({confirmDialog:p}),closeConfirm:()=>s({confirmDialog:null}),showToast:p=>a(p),dismissToast:()=>{os&&clearTimeout(os),s({toast:null})}}}),Ff="PKP-EJER";function Yb(s){var a;const l=s.userID.toLowerCase(),c=((a=l.match(/.{1,4}/g))==null?void 0:a.join("-"))??l;return`${Ff}-${c}-${m_(l)}`}function $b(s,l="Ejer"){const c=s.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Ff}-`))return null;const a=c.slice(Ff.length+1).split("-").filter(Boolean),f=a.pop()??"",h=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||f!==m_(h)?null:{userID:h,username:l.trim()||"Ejer"}}function m_(s){let l=2166136261;for(const c of s.toLowerCase())l^=c.charCodeAt(0),l=Math.imul(l,16777619)>>>0;return(l%65536).toString(16).toUpperCase().padStart(4,"0")}const cc="./",p_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function aa(s){const l=s>=0&&s<p_.length?s:0;return`${cc}device-icons/${l}.png`}const qb=`${cc}art/logo.png`,Kb=`${cc}art/Teknologiskolen_logo.png`,Xb=`${cc}art/logo_teknologiskolen_white.png`,Qb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function rn({name:s,size:l=24,className:c}){return u.jsx("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Qb[s]})}const Wb=1850,Zb=450;function Jb(){const s=le(a=>a.splashTarget),l=le(a=>a.finishSplash),c=s?"splash-screen-animation splash-ready":"splash-pending";return L.useEffect(()=>{if(!s)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Zb:Wb,h=window.setTimeout(l,f);return()=>window.clearTimeout(h)},[l,s]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:qb,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Eh(){const s=le(f=>f.createUser),[l,c]=L.useState(""),a=l.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Kb,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:l,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>s(l),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:gs})]})}function td({title:s,onMenu:l}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:s}),u.jsx("button",{className:"iconbtn",type:"button",onClick:l,"aria-label":"Menu",children:u.jsx(rn,{name:"menu"})})]})})}function Dt({title:s,onClose:l,children:c,closeVariant:a="plain"}){const f=a==="circle",h=L.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:b=>{h.current=b.target===b.currentTarget},onClick:b=>{b.target===b.currentTarget&&h.current&&l(),h.current=!1},children:u.jsxs("div",{className:"modal",onClick:b=>b.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:s}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:l,"aria-label":"Luk",children:u.jsx(rn,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function Th(){const s=le(T=>T.savedDevices),l=le(T=>T.toggleSideMenu),c=le(T=>T.findDevice),a=le(T=>T.removeSavedDevice),f=le(T=>T.askConfirm),h=le(T=>T.dashboardPage),b=le(T=>T.setDashboardPage),p=r0(),[g,y]=L.useState(null),k=oc(),S=s.filter(T=>h==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(n0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(td,{title:"Hovedmenu",onMenu:()=>l()}),u.jsxs("div",{className:"content dash-content",children:[!k&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>b("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>b("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:S.length===0?u.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):S.map(T=>u.jsx(e0,{device:T,disabled:!k,onConnect:()=>p(T),onSettings:()=>y(T)},T.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!k,"aria-label":"Find enhed",children:u.jsx(rn,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:gs}),g&&u.jsx(Dt,{title:"Enhedsindstillinger",onClose:()=>y(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:aa(g.deviceIconID),alt:""}),u.jsx("strong",{children:g.deviceName})]}),u.jsx(cs,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(cs,{label:"Ejer",value:t0(g)}),u.jsx(cs,{label:"Offentlig",value:g.canOthersConnect?"Ja":"Nej"}),u.jsx(cs,{label:"Andre må redigere layout",value:g.canOthersEdit?"Ja":"Nej"}),u.jsx(cs,{label:"Andre må redigere kode",value:g.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!k,onClick:()=>{const T=g;y(null),p(T)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${g.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(g.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function e0({device:s,disabled:l,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:l,children:[u.jsx("img",{className:"device-tile-icon",src:aa(s.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:s.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(rn,{name:"settings"})})]})}function cs({label:s,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:l})]})}function t0(s){var l;return s.isOwnedByMe?"Dig":((l=s.ownerName)==null?void 0:l.trim())||"Anden bruger"}function n0(s,l){return s.deviceName.localeCompare(l.deviceName,"da",{sensitivity:"base"})}function r0(){const s=le(a=>a.connectToDevice),l=le(a=>a.findDevice),c=le(a=>a.log);return async a=>{const h=(await c_()).find(b=>b.id===a.deviceID);h?await s(h,a):(c("info","Genforbind: vælg enheden i browserens liste."),await l())}}function l0(){const s=le(c=>c.connecting),l=le(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:aa((s==null?void 0:s.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(s==null?void 0:s.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${l.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:l.label})]})]})}function h_({selected:s,onSelect:l,onClose:c}){return u.jsx(Dt,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:p_.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===s?"selected":""}`,onClick:()=>{l(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:aa(a.id),alt:""})},a.id))})})}function i0(){const s=le(re=>re.finishCreate),l=le(re=>re.cancelCreate),[c,a]=L.useState(0),[f,h]=L.useState(!1),[b,p]=L.useState(!1),[g,y]=L.useState(!1),[k,S]=L.useState(!1),[T,A]=L.useState(la),[z,V]=L.useState(bs),[Y,G]=L.useState(!1),W=re=>Number.isFinite(re)?Math.max(na,Math.min(ra,Math.round(re))):la;async function P(){G(!0),await s(c,b,b&&g,b&&k,W(T),W(z))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:aa(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(rn,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:b?"":"active",onClick:()=>p(!1),children:"Privat"}),u.jsx("button",{type:"button",className:b?"active":"",onClick:()=>p(!0),children:"Offentlig"})]}),b&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>y(!1),children:"Nej"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>y(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:k?"":"active",onClick:()=>S(!1),children:"Nej"}),u.jsx("button",{type:"button",className:k?"active":"",onClick:()=>S(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:na,max:ra,value:Number.isNaN(T)?"":T,onChange:re=>A(parseInt(re.target.value,10)),onBlur:()=>A(W(T))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:na,max:ra,value:Number.isNaN(z)?"":z,onChange:re=>V(parseInt(re.target.value,10)),onBlur:()=>V(W(z))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>l(),disabled:Y,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:P,disabled:Y,children:Y?"Opretter...":"Opret"})]})]}),f&&u.jsx(h_,{selected:c,onSelect:a,onClose:()=>h(!1)}),u.jsx("span",{className:"version",children:gs})]})}const ia=8;function Zo(s){return Math.max(5,Math.min(22,s))}function a0(s,l,c){const a=Math.max(1,s.length),f=(l-ia*2)/(a*.58),h=(c-ia*2)*.48;return Zo(Math.min(f,h))}function ci(s,l,c){switch(c){case 90:return{x:-l,y:s};case 180:return{x:-s,y:-l};case 270:return{x:l,y:-s};default:return{x:s,y:l}}}function rc(s){return(360-s)%360}function s0(s,l,c,a){const f=a===90||a===270;return a0(s,f?c:l,f?l:c)}function lc({name:s,width:l,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:s0(s,l,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:s})}function o0(s,l,c,a,f){const h=s.trim().split(/\s+/).filter(Boolean),b=Math.max(1,s.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),p=f?Zo(Math.min(l/4.6,c/4.6,12)):0,g=f?p+ia:ia;if(a){const S=Math.max(1,c-g*2);return{fontSize:Zo(Math.min(l*.48,S/(b*1.04))),endFontSize:p,centerInset:f?{top:g,bottom:g}:{}}}const y=Math.max(1,l-g*4.2);return{fontSize:Zo(Math.min(c*.42,y/(b*.58))),endFontSize:p,centerInset:f?{left:g*2.1,right:g*2.1}:{}}}function c0({control:s,rect:l,disabled:c,latestValue:a,toggleValue:f,radarPings:h=[],textValue:b,plotPoints:p=[],onButton:g,onSlider:y,onToggle:k,onJoystick:S,onDpad:T}){const A=L.useRef(!1),[z,V]=L.useState(!1),Y={left:l.cx,top:l.cy,width:l.width,height:l.height};if(s.type==="button"){const G=()=>{c||!A.current||(A.current=!1,V(!1),g(s.name,!1))};return u.jsx("div",{className:"control",style:Y,children:u.jsx("button",{className:`control-button ${z?"pressed":""}`,type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:W=>{var P,re;c||(W.preventDefault(),(re=(P=W.currentTarget).setPointerCapture)==null||re.call(P,W.pointerId),A.current=!0,V(!0),g(s.name,!0))},onPointerUp:W=>{var P,re;W.preventDefault(),(re=(P=W.currentTarget).releasePointerCapture)==null||re.call(P,W.pointerId),G()},onPointerCancel:G,onLostPointerCapture:G,children:u.jsx(lc,{name:s.name,width:l.width,height:l.height,rotation:s.rotation})})})}if(s.type==="toggle"){const G=!!f;return u.jsx("div",{className:"control",style:Y,children:u.jsx("button",{className:`control-toggle ${G?"on":""}`,type:"button",disabled:c,"aria-pressed":G,style:{width:"100%",height:"100%"},onPointerDown:W=>{c||(W.preventDefault(),k(s.name,!G))},children:u.jsx(lc,{name:s.name,width:l.width,height:l.height,rotation:s.rotation})})})}return s.type==="radar"?u.jsx("div",{className:"control",style:Y,children:u.jsx(g_,{control:s,pings:h,width:l.width,height:l.height})}):s.type==="text"?u.jsx("div",{className:"control",style:Y,children:u.jsx(__,{message:b??s.name,width:l.width,height:l.height,rotation:s.rotation})}):s.type==="plot"?u.jsx("div",{className:"control",style:Y,children:u.jsx(y_,{control:s,points:p,width:l.width,height:l.height})}):s.type==="joystick"?u.jsx("div",{className:"control",style:Y,children:u.jsx(j0,{control:s,disabled:c,onJoystick:S,width:l.width,height:l.height})}):s.type==="dpad"?u.jsx("div",{className:"control",style:Y,children:u.jsx(z0,{control:s,disabled:c,onDpad:T})}):u.jsx("div",{className:"control",style:Y,children:u.jsx(R0,{control:s,disabled:c,latestValue:a,onSlider:y,width:l.width,height:l.height})})}function u0(s,l,c){const f=(s.trim()||" ").split(`
`),h=f.reduce((T,A)=>A.split(/\s+/).filter(Boolean).reduce((V,Y)=>Math.max(V,Y.length),T),1),b=Math.max(1,Math.floor(h*1.9)),p=Math.max(f.length,f.reduce((T,A)=>T+Math.max(1,Math.ceil(Math.max(1,A.trim().length)/b)),0)),g=Math.max(1,l-ia*3),y=Math.max(1,c-ia*3),k=g/(h*.58),S=y/(p*1.16);return Math.max(7,Math.min(24,k,S))}function __({message:s,width:l,height:c,rotation:a=0}){const f=s.trim()||"...",h=a===90||a===270,b=u0(f,h?c:l,h?l:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:b},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function g_({control:s,pings:l,width:c,height:a,preview:f=!1}){const[,h]=L.useState(0),b=Math.max(120,s.radarFadeMs??1200),p=s.radarMinAngle??0,g=s.radarMaxAngle??180,y=Jt(p),k=Jt(g),S=Math.abs(g-p)>=360||y===k&&p!==g,T=Math.max(1,s.radarMaxDistance??200),A=Date.now(),z=l[l.length-1],V=s.rotation,Y=Jt(y+V),G=Jt(k+V),W=v0(y,k),P=((z==null?void 0:z.angle)??W)+V,re=f?[{id:"preview",angle:W,distance:T*.62,createdAt:A}]:l.filter(ce=>A-ce.createdAt<=b),de=!S,fe=Math.max(8,Math.min(12,Math.min(c,a)*.16)),X=Math.max(7,fe*.85),ee=0,Ee=0,be=1,Fe=_0(S,Y,G,V,T),J=S?{x:-1.12,y:-1.12,width:2.24,height:2.24}:g0(Y,G,Fe.map(ce=>ce.point)),We=S?"":f0(ee,Ee,be,Y,G),ye=Mh(p),Ne=Mh(g),O=de?y0(Y,G,J,c,a,ye,Ne,fe):null,te=Fe.map(ce=>{const Se=b_(ce.point,J,c,a);return{key:ce.key,value:ce.value,x:Se.x,y:Se.y}});L.useEffect(()=>{if(f||l.length===0)return;const ce=window.setInterval(()=>h(Se=>Se+1),120);return()=>window.clearInterval(ce)},[b,l.length,f]);const ue=jn(ee,Ee,be,P);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${J.x} ${J.y} ${J.width} ${J.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[S?u.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:Ee,r:be}):u.jsx("path",{className:"radar-sector-fill",d:We}),[.25,.5,.75,1].map(ce=>S?u.jsx("circle",{className:"radar-ring",cx:ee,cy:Ee,r:be*ce},ce):u.jsx("path",{className:"radar-ring",d:d0(ee,Ee,be*ce,Y,G)},ce)),!S&&u.jsx(Nh,{cx:ee,cy:Ee,radius:be,angle:Y}),!S&&u.jsx(Nh,{cx:ee,cy:Ee,radius:be,angle:G}),u.jsx("line",{className:"radar-sweep",x1:ee,y1:Ee,x2:ue.x,y2:ue.y}),re.map(ce=>{const Se=f?0:A-ce.createdAt,E=Math.max(0,1-Se/b),U=Math.max(0,Math.min(T,ce.distance)),ne=jn(ee,Ee,be*(U/T),ce.angle+V);return u.jsx("circle",{className:"radar-ping",cx:ne.x,cy:ne.y,r:Math.max(.025,Math.min(J.width,J.height)*.025),opacity:E},ce.id)})]}),de&&O&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:O.min.x,top:O.min.y,fontSize:fe},children:ye}),u.jsx("span",{className:"radar-angle-label",style:{left:O.max.x,top:O.max.y,fontSize:fe},children:Ne})]}),te.map(ce=>u.jsx("span",{className:"radar-range-label",style:{left:ce.x,top:ce.y,fontSize:X},children:ce.value},ce.key))]})}function Nh({cx:s,cy:l,radius:c,angle:a}){const f=jn(s,l,c,a);return u.jsx("line",{className:"radar-boundary",x1:s,y1:l,x2:f.x,y2:f.y})}function jn(s,l,c,a){const f=(Jt(a)-90)*Math.PI/180;return{x:s+Math.cos(f)*c,y:l+Math.sin(f)*c}}function f0(s,l,c,a,f){const h=jn(s,l,c,a),b=jn(s,l,c,f),p=uc(a,f)>180?1:0;return`M ${s} ${l} L ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y} Z`}function d0(s,l,c,a,f){const h=jn(s,l,c,a),b=jn(s,l,c,f),p=uc(a,f)>180?1:0;return`M ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y}`}function uc(s,l){const c=Jt(s),a=Jt(l),f=a>=c?a-c:360-c+a;return f===0?360:f}const Ko=[.25,.5,.75,1],m0=.1,p0=.85,h0=55;function _0(s,l,c,a,f){const h=(g,y,k)=>({key:`${g}-${y}`,value:Math.round(f*y),point:jn(0,0,y,k)});if(s){const g=Jt(180+a);return Ko.map(y=>h("full",y,g))}const b=360-uc(l,c);if(b<h0){const g=Jt(c+b/2);return Ko.map(y=>h("mid",y,g))}const p=(g,y,k)=>{const S=Math.asin(Math.min(p0,m0/y))*180/Math.PI;return Jt(g+k*S)};return[...Ko.map(g=>h("min",g,p(l,g,-1))),...Ko.map(g=>h("max",g,p(c,g,1)))]}function g0(s,l,c=[]){const a=[{x:0,y:0},jn(0,0,1,s),jn(0,0,1,l),...c];for(const S of[0,90,180,270])b0(S,s,l)&&a.push(jn(0,0,1,S));const f=Math.min(...a.map(S=>S.x)),h=Math.max(...a.map(S=>S.x)),b=Math.min(...a.map(S=>S.y)),p=Math.max(...a.map(S=>S.y)),g=Math.max(.1,h-f),y=Math.max(.1,p-b),k=Math.max(g,y)*.24;return{x:f-k,y:b-k,width:g+k*2,height:y+k*2}}function b0(s,l,c){const a=Jt(l),f=Jt(s),h=uc(l,c),b=Jt(f-a);return b>=0&&b<=h}function y0(s,l,c,a,f,h,b,p){const y=jn(0,0,1.1,s),k=jn(0,0,1.1,l);return{min:Rh(y,c,a,f,h,p),max:Rh(k,c,a,f,b,p)}}function b_(s,l,c,a){return{x:(s.x-l.x)/l.width*c,y:(s.y-l.y)/l.height*a}}function Rh(s,l,c,a,f,h){const b=b_(s,l,c,a),p=Math.max(10,f.length*h*.62),g=h,y=7;return{x:jh(b.x,p/2+y,Math.max(p/2+y,c-p/2-y)),y:jh(b.y,g/2+y,Math.max(g/2+y,a-g/2-y))}}function jh(s,l,c){return Math.max(l,Math.min(c,s))}function Mh(s){return`${Math.round(s)}`}function Jt(s){return Number.isFinite(s)?(s%360+360)%360:0}function v0(s,l){const c=Jt(s),a=Jt(l),f=a>=c?a-c:360-c+a;return Jt(c+f/2)}function Cf(s){return Number.isInteger(s)?String(s):s.toFixed(1)}function x0(s){const l=Math.round(s/1e3);if(l<60)return`${l} sek`;const c=Math.round(l/60);if(c<60)return`${c} min`;const a=Math.floor(c/60),f=c%60;return f>0?`${a} t ${f} min`:`${a} t`}function k0(s,l){return s.label?s.label:l}function S0(s){if(s<=0)return[];if(s<=5)return Array.from({length:s},(c,a)=>a);const l=new Set([0,s-1]);return l.add(Math.round((s-1)/2)),s>=10&&(l.add(Math.round((s-1)/4)),l.add(Math.round((s-1)*3/4))),[...l].sort((c,a)=>c-a)}function w0(s,l){const c=Date.now();return Array.from({length:s},(a,f)=>{const h=f/Math.max(1,s-1),b=l==="bar"?.15+.7*Math.abs(Math.sin(h*Math.PI*1.4)):.5+.4*Math.sin(h*Math.PI*2.2);return{id:`demo-${f}`,value:b,createdAt:c}})}function y_({control:s,points:l,width:c,height:a,preview:f=!1}){const h=s.plotMin??0,b=s.plotMax??100,p=b>h?b-h:1,g=Math.max(2,s.plotHistory??30),y=s.plotStyle==="bar"?"bar":"line",k=f?w0(g,y):l.slice(-g),S=k[k.length-1],T=k.length>1?k[k.length-1].createdAt-k[0].createdAt:0,A=T>2e3?x0(T):null,z=Math.max(1,Math.min(c,a)),V=Math.max(8,Math.min(13,z*.14)),Y=Math.max(6,Math.min(10,V*.72)),G=Math.max(6,Math.min(16,z*.12)),W=Math.max(V*1.65,Y*2.2),P=G,re=G+V*.55,de=Math.max(1,c-P-G),fe=Math.max(1,a-re-W),X=Math.max(1.5,Math.min(3.4,z*.045)),ee=Math.max(X+1,Math.min(z*.09,X*2)),Ee=ye=>{const Ne=Math.max(0,Math.min(1,(ye-h)/p));return re+(1-Ne)*fe},be=re+fe,Fe=Math.max(1.5,z*.02),J=k.map((ye,Ne)=>({x:k.length>1?P+Ne/(k.length-1)*de:P+de/2,y:Ee(ye.value)})),We=S0(k.length);return u.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`0 0 ${c} ${a}`,"aria-hidden":"true",children:[[.25,.5,.75].map(ye=>u.jsx("line",{className:"plot-grid-line",x1:P,y1:re+ye*fe,x2:P+de,y2:re+ye*fe},ye)),u.jsx("line",{className:"plot-axis-line",x1:P,y1:be,x2:P+de,y2:be}),We.map(ye=>{const Ne=k[ye],O=k.length>1?P+ye/(k.length-1)*de:P+de/2;return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:O,y1:be,x2:O,y2:be+Math.max(3,Y*.48)}),u.jsx("text",{className:"plot-axis-tick-label",x:O,y:be+Math.max(6,Y*.9),fontSize:Y,textAnchor:"end",dominantBaseline:"middle",transform:`rotate(-90 ${O} ${be+Math.max(6,Y*.9)})`,children:k0(Ne,ye===k.length-1?"nu":`${ye+1}`)})]},Ne.id)}),y==="bar"?k.map((ye,Ne)=>{const O=de/k.length,te=O*.62,ue=P+Ne*O+(O-te)/2,ce=Math.min(Ee(ye.value),be-Fe),Se=Ne===k.length-1;return u.jsx("rect",{className:`plot-bar ${Se?"latest":""}`,x:ue,y:ce,width:te,height:be-ce},ye.id)}):u.jsxs(u.Fragment,{children:[J.length>1&&u.jsx("polyline",{className:"plot-line",points:J.map(ye=>`${ye.x},${ye.y}`).join(" ")}),J.map((ye,Ne)=>{var O;return u.jsx("circle",{className:`plot-dot ${Ne===J.length-1?"latest":""}`,cx:ye.x,cy:ye.y,r:Ne===J.length-1?ee:X},(O=k[Ne])==null?void 0:O.id)})]})]}),u.jsx("span",{className:"plot-axis-label plot-axis-max",style:{fontSize:V*.78},children:Cf(b)}),u.jsx("span",{className:"plot-name-label",style:{fontSize:V},children:s.name}),S!==void 0&&u.jsx("span",{className:"plot-value-label",style:{fontSize:V*1.15},children:Cf(S.value)}),u.jsx("span",{className:"plot-axis-label plot-axis-min",style:{fontSize:V*.78},children:Cf(h)}),A!==null&&u.jsxs("span",{className:"plot-time-label",style:{fontSize:V*.72},children:[A," siden"]})]})}function E0(s,l){if(!l)return s;const c=s.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((h,b)=>u.jsx("span",{children:h},`${h}-${b}`))},`${a}-${f}`))})}function T0(s){const l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return s===0?{low:{...l,left:c,top:0,bottom:0},high:{...l,right:c,top:0,bottom:0}}:s===180?{low:{...l,right:c,top:0,bottom:0},high:{...l,left:c,top:0,bottom:0}}:s===90?{low:{...l,bottom:c,left:0,right:0},high:{...l,top:c,left:0,right:0}}:{low:{...l,top:c,left:0,right:0},high:{...l,bottom:c,left:0,right:0}}}function N0({name:s,vertical:l,rotation:c,color:a,fontSize:f,endFontSize:h,centerInset:b,lowLabel:p,highLabel:g,showEnds:y}){const k=y?T0(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,...b,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:E0(s,l)}),k&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...k.low,fontWeight:800,fontSize:h},children:p}),u.jsx("div",{style:{...k.high,fontWeight:800,fontSize:h},children:g})]})]})}function v_({name:s,rotation:l,width:c,height:a,value:f,showEnds:h=!1,fillColor:b="var(--red)",lowLabel:p="0",highLabel:g="100"}){const y=l===90||l===270,{fontSize:k,endFontSize:S,centerInset:T}=o0(s,c,a,y,h);let A,z;l===0?(A={left:0,top:0,bottom:0,width:`${f}%`},z={left:0,top:0}):l===180?(A={right:0,top:0,bottom:0,width:`${f}%`},z={right:0,top:0}):l===90?(A={left:0,right:0,bottom:0,height:`${f}%`},z={left:0,bottom:0}):(A={left:0,right:0,top:0,height:`${f}%`},z={left:0,top:0});const V=Y=>u.jsx(N0,{name:s,vertical:y,rotation:l,color:Y,fontSize:k,endFontSize:S,centerInset:T,lowLabel:p,highLabel:g,showEnds:h});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:V("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:b,overflow:"hidden",...A},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...z},children:V("var(--white)")})})]})}function R0({control:s,disabled:l,latestValue:c,onSlider:a,width:f,height:h}){const b=L.useRef(null),p=s.sliderMin??0,g=s.sliderMax??100,[y,k]=L.useState(()=>c===void 0?Ah(s.sliderRecenter??"none"):Dh(c,p,g)),S=L.useRef(null),T=s.rotation;L.useEffect(()=>{c!==void 0&&(k(Dh(c,p,g)),S.current=c)},[c,p,g]);function A(G){const W=b.current;if(!W)return 0;const P=W.getBoundingClientRect();let re;return T===0?re=(G.clientX-P.left)/P.width:T===180?re=1-(G.clientX-P.left)/P.width:T===90?re=1-(G.clientY-P.top)/P.height:re=(G.clientY-P.top)/P.height,Math.max(0,Math.min(1,re))}function z(G){l||V(A(G))}function V(G){const W=Math.round(G*100),P=Math.round(p+(g-p)*G);k(W),P!==S.current&&(S.current=P,a(s.name,P))}function Y(){const G=s.sliderRecenter??"none";l||G==="none"||V(Ah(G)/100)}return u.jsx("div",{ref:b,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:G=>{l||(G.preventDefault(),G.currentTarget.setPointerCapture(G.pointerId),z(G))},onPointerMove:G=>{G.buttons!==0&&z(G)},onPointerUp:Y,onPointerCancel:Y,onLostPointerCapture:Y,children:u.jsx(v_,{name:s.name,rotation:T,width:f,height:h,value:y,showEnds:!0,lowLabel:String(p),highLabel:String(g)})})}function Ah(s){return s==="bottom"?0:s==="top"?100:s==="middle"?50:0}function Dh(s,l,c){return c===l?0:Math.max(0,Math.min(100,Math.round((s-l)/(c-l)*100)))}function Oh(s,l,c){return Math.round(l+(c-l)*(s+1)/2)}function Ch(s,l){return s==="bottom"?l?1:-1:s==="top"?l?-1:1:0}function Bh(s){return{nx:Ch(s.joystickXRecenter,!1),ny:Ch(s.joystickYRecenter,!0)}}function x_(s,l){const c=Math.min(s,l),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function k_({control:s,width:l,height:c,pos:a,dragging:f=!1}){const h=s.rotation,{knobRadius:b,reach:p}=x_(l,c),g=Math.max(7,Math.min(14,b*.62)),y=Math.max(7,Math.min(12,Math.min(l,c)*.1)),k=[{key:"xmax",value:s.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:s.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:s.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:s.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:p*2,height:p*2,transform:"translate(-50%, -50%)"}}),k.map(S=>{const T=ci(S.lx,S.ly,h);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:y,transform:`translate(-50%, -50%) translate(${T.x*p}px, ${T.y*p}px) rotate(${h}deg)`},children:S.value},S.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:b*2,height:b*2,fontSize:g,transform:`translate(calc(-50% + ${a.nx*p}px), calc(-50% + ${a.ny*p}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:s.rotation?`rotate(${s.rotation}deg)`:void 0,whiteSpace:s.rotation===90||s.rotation===270?"nowrap":void 0},children:s.name})})]})}function j0({control:s,disabled:l,onJoystick:c,width:a,height:f}){const h=s.rotation,b=L.useRef(null),[p,g]=L.useState(()=>{const W=Bh(s),P=ci(W.nx,W.ny,h);return{nx:P.x,ny:P.y}}),y=L.useRef(!1),k=L.useRef(null),S=s.joystickXMin??-100,T=s.joystickXMax??100,A=s.joystickYMin??-100,z=s.joystickYMax??100;function V(W,P){const re=ci(W,P,rc(h)),de=Oh(re.x,S,T),fe=Oh(-re.y,A,z);(!k.current||k.current.x!==de||k.current.y!==fe)&&(k.current={x:de,y:fe},c(s.name,de,fe))}function Y(W){const P=b.current;if(!P)return;const re=P.getBoundingClientRect(),{reach:de}=x_(re.width,re.height);let fe=(W.clientX-(re.left+re.width/2))/de,X=(W.clientY-(re.top+re.height/2))/de;const ee=Math.hypot(fe,X);ee>1&&(fe/=ee,X/=ee),g({nx:fe,ny:X}),V(fe,X)}function G(){const W=s.joystickXRecenter??"middle",P=s.joystickYRecenter??"middle";if(W==="none"&&P==="none")return;const re=ci(p.nx,p.ny,rc(h)),de=Bh(s),fe={x:W==="none"?re.x:de.nx,y:P==="none"?re.y:de.ny},X=ci(fe.x,fe.y,h),ee={nx:X.x,ny:X.y};y.current=!1,g(ee),V(ee.nx,ee.ny)}return u.jsx("div",{ref:b,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:W=>{l||(W.preventDefault(),W.currentTarget.setPointerCapture(W.pointerId),y.current=!0,Y(W))},onPointerMove:W=>{l||!y.current||W.buttons===0||Y(W)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:u.jsx(k_,{control:s,width:a,height:f,pos:p,dragging:y.current})})}const M0=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],A0="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",D0=.1,O0={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},C0={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},B0=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Gf(s,l){return Math.hypot(s,l)<D0?null:Math.abs(s)>=Math.abs(l)?s>0?"right":"left":l>0?"down":"up"}function L0(s,l){const[c,a]=C0[s],f=ci(c,a,rc(l));return Gf(f.x,f.y)??s}function S_({control:s,active:l=null}){const c=s.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[M0.map(a=>u.jsx("path",{className:`dpad-arm ${l===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:A0},a.direction)),B0.map(a=>u.jsx("text",{className:`dpad-label ${l===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:O0[L0(a.pos,c)]},a.pos))]})})}function z0({control:s,disabled:l,onDpad:c}){const a=L.useRef(null),f=L.useRef(null),h=L.useRef(!1),[b,p]=L.useState(null);function g(T){const A=a.current;if(!A)return{screen:null,logical:null};const z=A.getBoundingClientRect(),V=Math.min(z.width,z.height)/2,Y=(T.clientX-(z.left+z.width/2))/V,G=(T.clientY-(z.top+z.height/2))/V,W=Gf(Y,G),P=ci(Y,G,rc(s.rotation)),re=Gf(P.x,P.y);return{screen:W,logical:re}}function y(T){const A=a.current;if(!A)return!1;const z=A.getBoundingClientRect(),V=(T.clientX-z.left)/z.width,Y=(T.clientY-z.top)/z.height;return V>=0&&V<=1&&Y>=0&&Y<=1}function k(T){T.logical!==f.current&&(f.current&&c(s.name,f.current,!1),f.current=T.logical,T.logical&&c(s.name,T.logical,!0)),p(T.screen)}function S(){h.current=!1,k({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:T=>{l||!y(T)||(T.preventDefault(),T.currentTarget.setPointerCapture(T.pointerId),h.current=!0,k(g(T)))},onPointerMove:T=>{l||!h.current||T.buttons===0||k(g(T))},onPointerUp:S,onPointerCancel:S,onLostPointerCapture:S,children:u.jsx(S_,{control:s,active:b})})}const U0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},I0=["button","slider","toggle","radar","text","joystick","dpad","plot"];function H0({unplaced:s,onAdd:l,onClose:c}){const a=L.useMemo(()=>I0.filter(p=>s.some(g=>g.type===p)),[s]),[f,h]=L.useState(a[0]??"button"),b=s.filter(p=>p.type===f);return L.useEffect(()=>{a.length>0&&!a.includes(f)&&h(a[0])},[a,f]),u.jsxs(Dt,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(p=>u.jsx("button",{type:"button",className:f===p?"active":"",onClick:()=>h(p),children:U0[p]},p))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):b.map(p=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>l(p.name),children:[u.jsx("span",{children:p.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(rn,{name:"plus",size:22})})]},p.name))})]})}function w_(s){const[l,c]=L.useState({w:0,h:0}),a=L.useRef(null),f=L.useRef(null);return L.useLayoutEffect(()=>{var g;const h=s.current;if(a.current===h)return;if((g=f.current)==null||g.disconnect(),f.current=null,a.current=h,!h){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const b=()=>{const y={w:h.clientWidth,h:h.clientHeight};c(k=>k.w===y.w&&k.h===y.h?k:y)};b();const p=new ResizeObserver(b);p.observe(h),f.current=p}),L.useEffect(()=>()=>{var h;(h=f.current)==null||h.disconnect(),f.current=null,a.current=null},[]),l}function ys(s){return s.centerX2!==null&&s.centerY2!==null&&s.spanX!==null&&s.spanY!==null}const P0=4,F0=5;function G0(s){return s==="joystick"||s==="dpad"?{spanX:6,spanY:6}:s==="plot"?{spanX:7,spanY:4}:{spanX:P0,spanY:F0}}function Lh(s){if(!ys(s))return null;const l=s.centerX2/2,c=s.centerY2/2;return{x0:l-s.spanX/2,x1:l+s.spanX/2,y0:c-s.spanY/2,y1:c+s.spanY/2}}function V0(s,l,c=.02){return s.x0<l.x1-c&&l.x0<s.x1-c&&s.y0<l.y1-c&&l.y0<s.y1-c}function Y0(s,l){return Math.max(1,Math.min(l.cols-1,s))}function $0(s,l){return Math.max(1,Math.min(l.rows-1,s))}function q0(s,l){return(s-l.margin)/l.stepX}function K0(s,l){return(l.areaH-s-l.margin)/l.stepY}function zh(s,l,c){const a=l%2,h=(s%2+2)%2===a?s:s+1,b=c*2;return Math.max(l,Math.min(b-l,h))}function X0(){const s=le(H=>H.layout),l=le(H=>H.active),c=le(H=>H.saveLayout),a=le(H=>H.setEditMode),f=le(H=>H.askConfirm),h=!!(l!=null&&l.canEdit),[b,p]=L.useState(()=>s.map(H=>({...H}))),[g,y]=L.useState(null),[k,S]=L.useState(!1),[T,A]=L.useState(null),[z,V]=L.useState(null),[Y,G]=L.useState(null),[W,P]=L.useState(!1),re=L.useRef(null),de=w_(re),fe=de.w>0&&de.h>0,X=u_(de.w,de.h,l==null?void 0:l.gridCols,l==null?void 0:l.gridRows),ee=L.useMemo(()=>fe?Db(X):[],[X,fe]),Ee=b.filter(ys),be=b.filter(H=>!ys(H)),Fe=L.useMemo(()=>{const H=new Set;for(let D=0;D<Ee.length;D+=1)for(let ae=D+1;ae<Ee.length;ae+=1){const ve=Lh(Ee[D]),Be=Lh(Ee[ae]);ve&&Be&&V0(ve,Be)&&(H.add(Ee[D].name),H.add(Ee[ae].name))}return H},[Ee]),J=Fe.size>0,We=L.useMemo(()=>Uh(b)!==Uh(s),[b,s]),ye=L.useMemo(()=>{if(!T||!z)return null;const H=b.find(ve=>ve.name===T);if(!H||H.spanX===null||H.spanY===null)return null;const D=jf(z.cx,z.cy,H.spanX,H.spanY,X),ae=ps({...H,centerX2:D.centerX2,centerY2:D.centerY2},X);return ae?{name:H.name,rect:ae}:null},[b,T,z,X]);function Ne(H,D){p(ae=>ae.map(ve=>ve.name===H?D(ve):ve))}function O(H){const D=re.current;if(!D)return{x:0,y:0};const ae=D.getBoundingClientRect(),ve=D.clientWidth/ae.width,Be=D.clientHeight/ae.height;return{x:Math.max(0,Math.min(D.clientWidth,(H.clientX-ae.left)*ve)),y:Math.max(0,Math.min(D.clientHeight,(H.clientY-ae.top)*Be))}}function te(H,D){H.stopPropagation(),y(D.name);const ae=ps(D,X);ae&&(A(D.name),V({cx:ae.cx,cy:ae.cy}),H.currentTarget.setPointerCapture(H.pointerId))}function ue(H){if(T){const{x:D,y:ae}=O(H),ve=b.find(Oe=>Oe.name===T),Be=ve?ps(ve,X):null;if(!Be){V({cx:D,cy:ae});return}const Ge=Be.width/2,_e=Be.height/2;V({cx:Math.max(X.margin+Ge,Math.min(X.areaW-X.margin-Ge,D)),cy:Math.max(X.margin+_e,Math.min(X.areaH-X.margin-_e,ae))});return}if(Y){const{x:D,y:ae}=O(H),{name:ve,side:Be,fixedWhole:Ge}=Y;Ne(ve,_e=>{if(_e.spanX===null||_e.spanY===null||_e.centerX2===null||_e.centerY2===null)return _e;if(Be==="left"||Be==="right"){const dt=Math.round(q0(D,X));if(Be==="right"){const $n=Math.max(Ge+1,Math.min(X.cols-1,dt))-Ge;return{..._e,spanX:$n,centerX2:Ge*2+$n}}const $t=Math.min(Ge-1,Math.max(0,dt)),Tt=Ge-$t;return{..._e,spanX:Tt,centerX2:Ge*2-Tt}}const Oe=Math.round(K0(ae,X));if(Be==="top"){const $t=Math.max(Ge+1,Math.min(X.rows-1,Oe))-Ge;return{..._e,spanY:$t,centerY2:Ge*2+$t}}const yt=Math.min(Ge-1,Math.max(0,Oe)),Ce=Ge-yt;return{..._e,spanY:Ce,centerY2:Ge*2-Ce}})}}function ce(){if(T&&z){const H=b.find(D=>D.name===T);if(H&&H.spanX!==null&&H.spanY!==null){const D=jf(z.cx,z.cy,H.spanX,H.spanY,X);Ne(T,ae=>({...ae,centerX2:D.centerX2,centerY2:D.centerY2}))}}A(null),V(null),G(null)}function Se(H,D,ae){if(H.stopPropagation(),D.centerX2===null||D.centerY2===null||D.spanX===null||D.spanY===null)return;const ve=(D.centerX2-D.spanX)/2,Be=(D.centerX2+D.spanX)/2,Ge=(D.centerY2-D.spanY)/2,_e=(D.centerY2+D.spanY)/2,Oe=ae==="right"?ve:ae==="left"?Be:ae==="top"?Ge:_e;y(D.name),G({name:D.name,side:ae,fixedWhole:Oe}),H.currentTarget.setPointerCapture(H.pointerId)}function E(H){Ne(H,D=>{const ae=(D.rotation+270)%360;if(D.spanX===null||D.spanY===null||D.centerX2===null||D.centerY2===null)return{...D,rotation:ae};const ve=Y0(D.spanY,X),Be=$0(D.spanX,X);return{...D,rotation:ae,spanX:ve,spanY:Be,centerX2:zh(D.centerX2,ve,X.cols-1),centerY2:zh(D.centerY2,Be,X.rows-1)}})}function U(H){Ne(H,D=>({...D,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function ne(H){S(!1);const D=b.find(Ge=>Ge.name===H);if(!D)return;const{spanX:ae,spanY:ve}=G0(D.type),Be=jf(X.areaW/2,X.areaH/2,ae,ve,X);Ne(H,()=>({...D,spanX:ae,spanY:ve,rotation:0,centerX2:Be.centerX2,centerY2:Be.centerY2})),y(H)}async function oe(){J||(P(!0),await c(b),P(!1))}function xe(){if(!We){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:re,style:{touchAction:"none"},onPointerMove:ue,onPointerUp:ce,onPointerDown:()=>y(null),children:fe&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:X.areaW,height:X.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:ee.map((H,D)=>u.jsx("circle",{cx:H.x,cy:H.y,r:2.5,fill:"rgba(198,80,78,0.45)"},D))}),ye&&u.jsx("div",{className:"snap-preview",style:{left:ye.rect.cx,top:ye.rect.cy,width:ye.rect.width,height:ye.rect.height}}),Ee.map(H=>{const D=T===H.name&&z,ae=ps(H,X);if(!ae)return null;const ve=D?z.cx:ae.cx,Be=D?z.cy:ae.cy,Ge=g===H.name,_e={left:ve,top:Be,width:ae.width,height:ae.height,outline:Ge?"3px solid var(--text)":"none",outlineOffset:2,zIndex:Ge?2:1};return u.jsxs("div",{className:`control ${Fe.has(H.name)?"colliding":""}`,style:_e,onPointerDown:Oe=>te(Oe,H),children:[H.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(lc,{name:H.name,width:ae.width,height:ae.height,rotation:H.rotation})}):H.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(lc,{name:H.name,width:ae.width,height:ae.height,rotation:H.rotation})}):H.type==="radar"?u.jsx(g_,{control:H,pings:[],width:ae.width,height:ae.height,preview:!0}):H.type==="plot"?u.jsx(y_,{control:H,points:[],width:ae.width,height:ae.height,preview:!0}):H.type==="text"?u.jsx(__,{message:H.name,width:ae.width,height:ae.height,rotation:H.rotation}):H.type==="joystick"?u.jsx(k_,{control:H,width:ae.width,height:ae.height,pos:{nx:0,ny:0}}):H.type==="dpad"?u.jsx(S_,{control:H}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(v_,{name:H.name,rotation:H.rotation,width:ae.width,height:ae.height,value:50,showEnds:!0,lowLabel:String(H.sliderMin??0),highLabel:String(H.sliderMax??100),fillColor:Fe.has(H.name)?"var(--disabled)":"var(--red)"})}),Ge&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:Oe=>Se(Oe,H,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:Oe=>Se(Oe,H,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:Oe=>Se(Oe,H,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:Oe=>Se(Oe,H,"right")}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-rotate","aria-label":"Roter",title:"Roter",onPointerDown:Oe=>Oe.stopPropagation(),onClick:()=>E(H.name),children:"⟲"}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-remove","aria-label":"Fjern fra layout",title:"Fjern fra layout",onPointerDown:Oe=>Oe.stopPropagation(),onClick:()=>U(H.name),children:u.jsx(rn,{name:"delete",size:16})})]})]},H.name)}),h&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:H=>H.stopPropagation(),onClick:()=>S(!0),"aria-label":"Tilføj kontrol",children:u.jsx(rn,{name:"plus",size:24})}),W&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:xe,disabled:W,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:oe,disabled:J||W,children:W?"Gemmer...":"Gem"})]}),k&&u.jsx(H0,{unplaced:be,onAdd:ne,onClose:()=>S(!1)})]})}function Uh(s){return JSON.stringify(s.map(l=>({type:l.type,name:l.name,centerX2:l.centerX2,centerY2:l.centerY2,spanX:l.spanX,spanY:l.spanY,rotation:l.rotation})))}function Q0(){const s=le(P=>P.layout),l=le(P=>P.editMode),c=le(P=>P.active),a=le(P=>P.sliderValues),f=le(P=>P.toggleValues),h=le(P=>P.radarPings),b=le(P=>P.textValues),p=le(P=>P.plotSeries),g=le(P=>P.toggleSideMenu),y=le(P=>P.sendButton),k=le(P=>P.sendSlider),S=le(P=>P.sendToggle),T=le(P=>P.sendJoystick),A=le(P=>P.sendDpad),z=L.useRef(null),V=w_(z),Y=u_(V.w,V.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),G=V.w>0&&V.h>0,W=s.filter(ys);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(td,{title:"Pico Kontrol Panel",onMenu:()=>g()}),l?u.jsx(X0,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:z,onContextMenu:P=>P.preventDefault(),onPointerDown:P=>{P.target===P.currentTarget&&P.preventDefault()},children:G?W.map(P=>{const re=ps(P,Y);return re?u.jsx(c0,{control:P,rect:re,disabled:!1,latestValue:P.type==="slider"?a[P.name]:void 0,toggleValue:P.type==="toggle"?f[P.name]:void 0,radarPings:P.type==="radar"?h[P.name]:void 0,textValue:P.type==="text"?b[P.name]:void 0,plotPoints:P.type==="plot"?p[P.name]:void 0,onButton:y,onSlider:k,onToggle:S,onJoystick:T,onDpad:A},P.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const W0="",Ih="",Hh="",si="";function us(s){return new Promise(l=>setTimeout(l,s))}class Z0{constructor(l){this.transport=l}async interrupt(){await this.transport.write(Hh),await us(80),await this.transport.write(Hh)}async friendlyRepl(){await this.transport.write(Ih)}async softReset(){await this.transport.write(si)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(l,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await us(180)}),await us(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(l)}).read())`)}async sendFriendlyLine(l){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(l)}async sendProgramInput(l){await this.transport.writeLine(l)}async enterRawRepl(l=2500){if(await this.interrupt(),await us(80),await this.transport.write(`\r
`),await us(40),!(await this.collectUntil(async()=>{await this.transport.write(W0)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),l)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(l,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(l),l.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(si)},f=>f.includes(`${si}${si}`)||f.includes(`${si}>`),c);return await this.friendlyRepl().catch(()=>{}),J0(a)}collectUntil(l,c,a){return new Promise((f,h)=>{let b="",p=null;const g=setTimeout(()=>{p==null||p(),h(new Error("Timeout ved USB REPL kommando."))},a);p=this.transport.addDataListener(y=>{b+=y,c(b)&&(clearTimeout(g),p==null||p(),f(b))}),l().catch(y=>{clearTimeout(g),p==null||p(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(l=1600){await this.collectUntil(async()=>{await this.transport.write(Ih)},c=>/(^|\r?\n)>>> ?$/.test(c),l)}}function J0(s){const l=s.indexOf("OK"),c=s.indexOf(si,l>=0?l:0),a=c>=0?s.indexOf(si,c+1):-1;if(l<0||c<0)return{output:s.trim(),error:"",raw:s};const f=s.slice(l+2,c).replace(/^\r?\n/,"").trimEnd(),h=a>=0?s.slice(c+1,a).trim():"";return{output:f,error:h,raw:s}}const ey=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],ty=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],jl=ty.flatMap(({board:s,firmwareName:l})=>ey.map(({version:c,date:a,stamp:f,tag:h})=>{const b=`${l}-${f}-${h}.uf2`;return{board:s,version:c,date:a,fileName:b,url:`https://micropython.org/resources/firmware/${b}`}})),Bf=512,Lf=`import builtins as _pkp_builtins
`;function Fr(s){return JSON.stringify(s)}function ny(s){return`bytes.fromhex(${JSON.stringify([...s].map(l=>l.toString(16).padStart(2,"0")).join(""))})`}function ry(s,l){return`${s==="/"?"":s.replace(/\/$/,"")}/${l}`}class ly{constructor(l){this.repl=l}async list(l="/"){const c=`
import os
base = ${Fr(l)}
for name in os.listdir(base):
    p = (${Fr(l)}.rstrip('/') + '/' + name) if ${Fr(l)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[h,b,p]=f.split("	"),g=b==="dir"||b==="file"?b:"unknown",y=parseInt(p??"",10);return{name:h,path:ry(l,h),type:g,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(l){const c=`
import sys
${Lf}with _pkp_builtins.open(${Fr(l)}, 'rb') as f:
    while True:
        b = f.read(${Bf})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const f=a.output.replace(/\s+/g,"");return new TextDecoder().decode(iy(f))}async writeText(l,c,a){const f=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${Lf}_pkp_builtins.open(${Fr(l)}, 'wb').close()`),f.length===0){a==null||a(100,"Gemt på Pico");return}for(let h=0;h<f.length;h+=Bf){const b=f.slice(h,h+Bf),p=`
${Lf}with _pkp_builtins.open(${Fr(l)}, 'ab') as f:
    f.write(${ny(b)})
`,g=await this.repl.exec(p,1e4);if(g.error)throw new Error(g.error);const y=Math.min(h+b.length,f.length);a==null||a(10+Math.round(y/f.length*85),`Gemmer ${y}/${f.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(l,c,a,f={}){const h=`${l}.tmp`;if(await this.writeText(h,c,(g,y)=>a==null?void 0:a(Math.min(70,g*.7),y)),a==null||a(78,"Verificerer fil..."),await this.readText(h)!==c)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${l}.`);a==null||a(88,"Udskifter fil...");let p=!!f.createBackup;if(p){const g=await this.readText(l).catch(()=>null);p=g!==null&&g!==c}if(p){const g=await this.nextBackupPath(l).catch(()=>`${l}.backup`);await this.rename(l,g).catch(()=>{})}else await this.delete(l).catch(()=>{});await this.rename(h,l),a==null||a(100,"Installeret på Pico")}async delete(l){const c=await this.repl.exec(`
import os
os.remove(${Fr(l)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(l){const c=await this.list("/"),a=new Set(c.map(S=>S.path.toLowerCase())),f=l.replace(/\\/g,"/"),h=f.lastIndexOf("/"),b=h>=0?f.slice(0,h+1):"/",p=h>=0?f.slice(h+1):f.replace(/^\/+/,""),g=p.lastIndexOf("."),y=g>0?p.slice(0,g):p,k=g>0?p.slice(g):"";for(let S=1;S<1e3;S+=1){const T=`${b}${y}_backup${S}${k}`;if(!a.has(T.toLowerCase()))return T}return`${b}${y}_backup${Date.now()}${k}`}async rename(l,c){const a=await this.repl.exec(`
import os
os.rename(${Fr(l)}, ${Fr(c)})
`);if(a.error)throw new Error(a.error)}}function iy(s){const l=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<l.length;c+=1)l[c]=parseInt(s.slice(c*2,c*2+2),16);return l}const ay=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
import utime as time                       # Bruges til tid, pauser og timere\r
import network                             # Bruges til at forbinde Pico W til Wi-Fi\r
import gc                                  # Bruges til at rydde op i hukommelsen\r
\r
try:                                       # Prøv først MicroPython-versionen af requests\r
    import urequests as requests           # urequests henter data fra internettet\r
except ImportError:                        # Hvis urequests ikke findes\r
    import requests                        # Brug den almindelige requests i stedet\r
\r
from PicoBluetooth import PicoBluetooth    # Biblioteket der laver Bluetooth kontrolpanelet\r
\r
WIFI_SSID = "dit-wifi-navn"                # Skift til navnet på dit Wi-Fi (SSID)\r
WIFI_PASSWORD = "dit-wifi-kodeord"         # Skift til kodeordet til dit Wi-Fi\r
\r
DEVICE_NAME = "OdenseVejr"                 # Navnet Pico W viser i Bluetooth-listen\r
\r
BluetoothControls = (                      # Felterne appen viser i kontrolpanelet\r
    ("text", "STATUS"),                    # Viser hvad programmet laver lige nu\r
    ("text", "VEJR_NU"),                   # Viser klokkeslæt og vejrtype\r
    ("text", "TEMPERATUR"),                # Viser temperatur og føles-som temperatur\r
    ("text", "REGN"),                      # Viser regn og luftfugtighed\r
    ("text", "VIND"),                      # Viser vindhastighed og vindretning\r
)\r
\r
LATITUDE = "55.4038"                       # Breddegrad for Odense - skift til din egen by\r
LONGITUDE = "10.4024"                      # Længdegrad for Odense - skift til din egen by\r
\r
OPDATER_HVERT_MS = 60 * 1000               # Hent nyt vejr hvert 60. sekund\r
WIFI_TIMEOUT_MS = 15000                    # Giv op efter 15 sekunder uden Wi-Fi\r
\r
WEATHER_URL = (                            # Her bygger vi adressen til vejr-API'et\r
    "http://api.open-meteo.com/v1/forecast"  # Open-Meteos gratis API-adresse\r
    "?latitude=" + LATITUDE +              # Sender byens breddegrad med i kaldet\r
    "&longitude=" + LONGITUDE +            # Sender byens længdegrad med i kaldet\r
    "&current=temperature_2m,relative_humidity_2m,apparent_temperature,"  # Temperatur, fugtighed, føles-som\r
    "precipitation,weather_code,wind_speed_10m,wind_direction_10m"        # Regn, vejrkode, vind og vindretning\r
    "&timezone=Europe%2FCopenhagen"        # Bed API'et om dansk tid\r
)\r
\r
VEJRKODER = {                              # Open-Meteo sender tal, som vi laver om til tekst\r
    0: "Klar himmel", 1: "Mest klart", 2: "Delvist skyet", 3: "Overskyet",\r
    45: "Taage", 48: "Rimtaage",\r
    51: "Let stoevregn", 53: "Stoevregn", 55: "Kraftig stoevregn",\r
    56: "Let frostregn", 57: "Kraftig frostregn",\r
    61: "Let regn", 63: "Regn", 65: "Kraftig regn",\r
    66: "Let frostregn", 67: "Kraftig frostregn",\r
    71: "Let sne", 73: "Sne", 75: "Kraftig sne", 77: "Snefnug",\r
    80: "Lette byger", 81: "Regnbyger", 82: "Kraftige byger",\r
    85: "Lette snebyger", 86: "Kraftige snebyger",\r
    95: "Torden", 96: "Torden med hagl", 99: "Kraftigt tordenvejr",\r
}\r
\r
\r
led = Pin("LED", Pin.OUT)                  # Gør den indbyggede LED klar til brug\r
led.off()                                  # Sluk LED'en når programmet starter\r
\r
wlan = network.WLAN(network.STA_IF)        # Wi-Fi objekt så Pico W kan forbinde til routeren\r
\r
naeste_vejr_tid = time.ticks_ms()          # Hvornår vi næste gang skal hente vejr (nu)\r
\r
\r
def vis(felt, tekst):\r
    """Send tekst til et felt i appen, og skriv den samme tekst i terminalen."""\r
    ble.send_text(felt, tekst)             # Send teksten til feltet i kontrolpanelet\r
    print(felt + ":")                      # Skriv feltets navn i terminalen\r
    print(tekst)                           # \\n bliver til rigtige linjeskift i terminalen\r
    time.sleep_ms(80)                       # Lille pause, så appen kan nå at modtage beskeden\r
\r
\r
def forbind_wifi():\r
    """Tænd Wi-Fi og vent, indtil Pico W er på nettet (eller giv op)."""\r
    wlan.active(True)                      # Tænd Wi-Fi\r
    if wlan.isconnected():                 # Er vi allerede på nettet?\r
        return                             # Så behøver vi ikke gøre mere\r
\r
    print("Forbinder til Wi-Fi...")        # Skriv i terminalen at Wi-Fi starter\r
    wlan.connect(WIFI_SSID, WIFI_PASSWORD) # Forbind med navn og kode ovenfor\r
\r
    start = time.ticks_ms()                # Husk hvornår vi begyndte at vente\r
    while not wlan.isconnected():          # Bliv ved indtil Wi-Fi er forbundet\r
        if time.ticks_diff(time.ticks_ms(), start) > WIFI_TIMEOUT_MS:  # For lang tid?\r
            raise RuntimeError("Wi-Fi tidsgrænse")  # Giv op med en fejl
        time.sleep_ms(250)                 # Vent lidt før vi tjekker igen\r
\r
    print("Wi-Fi forbundet:", wlan.ifconfig()[0])  # Skriv Pico W's IP-adresse\r
\r
\r
def hent_og_vis_vejr():\r
    """Hent vejret fra API'et og vis det i appen og i terminalen."""\r
    svar = None                            # Her gemmer vi API-svaret\r
    try:\r
        vis("STATUS", "Forbinder til Wi-Fi...")  # Fortæl hvad der sker\r
        forbind_wifi()                     # Sørg for at vi er på nettet\r
\r
        gc.collect()                       # Ryd op i hukommelsen før API-kaldet\r
        vis("STATUS", "Henter vejr...")    # Fortæl at vi kalder API'et\r
        svar = requests.get(WEATHER_URL)   # Send HTTP GET til Open-Meteo\r
\r
        if svar.status_code != 200:        # 200 betyder OK\r
            raise RuntimeError("API-fejl: " + str(svar.status_code))\r
\r
        vejr = svar.json()["current"]      # Find delen med aktuelt vejr i svaret
\r
        klokkeslet = vejr["time"].split("T")[-1]   # Tag kun tiden efter T, fx 14:15\r
        vejrtekst = VEJRKODER.get(vejr["weather_code"], "Ukendt vejr")  # Tal -> tekst\r
\r
        # Byg fire beskeder med \\n, så hvert felt viser to linjer i appen.\r
        vis("VEJR_NU", "Tid: {}\\nVejr: {}".format(klokkeslet, vejrtekst))\r
        vis("TEMPERATUR", "Temperatur: {} C\\nFoeles som: {} C".format(\r
            vejr["temperature_2m"], vejr["apparent_temperature"]))\r
        vis("REGN", "Regn: {} mm\\nFugtighed: {} %".format(\r
            vejr["precipitation"], vejr["relative_humidity_2m"]))\r
        vis("VIND", "Vind: {} km/h\\nRetning: {} grader".format(\r
            vejr["wind_speed_10m"], vejr["wind_direction_10m"]))\r
\r
        vis("STATUS", "Vejrdata OK")       # Alt gik godt\r
\r
    except Exception as fejl:              # Hvis noget går galt, lander vi her\r
        print("Fejl:", fejl)               # Skriv fejlen i terminalen\r
        vis("STATUS", "Fejl")              # Vis fejlstatus i appen\r
        vis("VEJR_NU", str(fejl))          # Vis selve fejlen i første vejr-felt\r
        vis("TEMPERATUR", "-")             # Ryd de andre felter\r
        vis("REGN", "-")\r
        vis("VIND", "-")\r
\r
    finally:                               # Kører både ved succes og fejl\r
        if svar is not None:               # Fik vi et svar?\r
            svar.close()                   # Luk det, så hukommelsen frigives\r
        gc.collect()                       # Ryd op igen\r
\r
\r
def on_connect():                          # Kører automatisk når Bluetooth forbinder\r
    global naeste_vejr_tid\r
    led.on()                               # Tænd LED'en når nogen forbinder\r
    naeste_vejr_tid = time.ticks_ms()      # Hent vejr med det samme\r
    vis("STATUS", "Forbundet")             # Sig hej til appen\r
\r
\r
def on_disconnect():                       # Kører automatisk når Bluetooth afbryder\r
    led.off()                              # Sluk LED'en når ingen er forbundet\r
\r
\r
ble = PicoBluetooth(                       # Start Bluetooth kontrolpanelet\r
    base_controls=BluetoothControls,       # Fortæl hvilke felter appen skal vise\r
    device_base_name=DEVICE_NAME,          # Fortæl hvad enheden skal hedde\r
    callbacks=globals()                    # Gør on_connect og on_disconnect synlige\r
)\r
\r
\r
while True:                                # Hovedprogrammet kører igen og igen\r
    if ble.connected and time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:\r
        hent_og_vis_vejr()                 # Tid til at hente nyt vejr\r
        naeste_vejr_tid = time.ticks_add(time.ticks_ms(), OPDATER_HVERT_MS)  # Planlæg næste gang\r
\r
    time.sleep_ms(100)                     # Lille pause, så Pico W ikke bruger al CPU-tid\r
`,sy=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct\r
import os\r
import ubinascii\r
import machine\r
\r
__version__ = '0.8.0'\r
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
ALLOWED_COMMAND_TYPES  = ["button", "slider", "toggle", "radar", "text", "joystick", "dpad", "plot"]\r
MAX_NAME_LENGTH        = 14\r
SLIDER_RECENTER_MODES  = ["none", "bottom", "middle", "top"]\r
PLOT_STYLES            = ["line", "bar"]\r
\r
# Wire marker standing in for a real "\\n" inside a text-control message\r
# (a literal newline can't travel over the wire). See the doc.\r
TEXT_LINEBREAK = "\\x1e"   # ASCII Record Separator\r
\r
# Cap on buffered device->app telemetry lines before the app is ready (see\r
# _emit_telemetry), so a flood of sends from on_connect can't grow unbounded.\r
MAX_PENDING_TELEMETRY  = 64
\r
# Prints raw wire traffic when True; see docs/PicoBluetooth_Protocol.md.\r
DEBUG_PROTOCOL = False\r
\r
# Files on-device\r
SETTINGS_FILE = "DeviceSettings.txt"\r
LAYOUT_FILE   = "Layout.txt"\r
\r
# Human-readable labels for _handle_disconnected's reason codes.\r
_DISCONNECT_REASON_LABELS = {\r
    "irq": "",\r
    "gap_disconnect_failed": "disconnect request failed, treating as disconnected",\r
    "disconnect_without_handle": "already disconnected",\r
    "deny_disconnect_failed": "access denied, disconnect request failed",\r
    "deny_without_handle": "access denied, already disconnected",\r
}\r
\r
\r
def _safe_cast(value, cast, default):\r
    """cast(value), or default if that raises. Collapses the common\r
    'try: x = cast(raw) except: x = default' pattern into one call."""\r
    try:\r
        return cast(value)\r
    except Exception:\r
        return default\r
\r
\r
def _bool01(value):\r
    return 1 if int(value) == 1 else 0\r
\r
\r
def _parse_int_or_none(s):\r
    if s == "n":\r
        return None\r
    return _safe_cast(s, lambda v: int(float(v)), None)\r
\r
\r
def _split_or_none(text, sep, count):\r
    """text.split(sep, count-1), or None if that doesn't yield exactly count parts."""\r
    parts = text.split(sep, count - 1)\r
    return parts if len(parts) == count else None\r
\r
\r
def _is_down(state_s):\r
    return state_s.strip().lower() in ("1", "true", "down", "pressed")\r
\r
\r
# Extra wire fields per control type, beyond the 5 shared geometry fields\r
# (x, y, width, height, rotation), as (key, default) in wire order. Drives\r
# default-seeding in _initialize_controls and line formatting shared by\r
# save_layout_to_file/send_layout_to_web (_format_control_line). Adding a\r
# control type's fields is then just: add a row here, add its parsing branch\r
# in _initialize_controls, and add getters in send_<type>/on_<type>.\r
_EXTRA_FIELDS = {\r
    "slider":   (("min", 0), ("max", 100), ("recenter", "none")),\r
    "toggle":   (("initial", 0),),\r
    "radar":    (("minAngle", 0), ("maxAngle", 180), ("maxDistance", 200), ("fadeMs", 1200)),\r
    "joystick": (("xmin", -100), ("xmax", 100), ("ymin", -100), ("ymax", 100),\r
                 ("xrecenter", "middle"), ("yrecenter", "middle")),\r
    "plot":     (("min", 0), ("max", 100), ("history", 30), ("style", "line")),\r
}\r
\r
\r
def _format_control_line(ctrl, sep=","):\r
    """One control as a wire/file line. See docs/PicoBluetooth_Protocol.md."""\r
    x = ctrl["x"] if ctrl["x"] is not None else "n"\r
    y = ctrl["y"] if ctrl["y"] is not None else "n"\r
    w = ctrl["width"] if ctrl["width"] is not None else "n"\r
    h = ctrl["height"] if ctrl["height"] is not None else "n"\r
    fields = [ctrl["type"], ctrl["name"], x, y, w, h, ctrl.get("rotation", 0)]\r
    for key, default in _EXTRA_FIELDS.get(ctrl["type"], ()):\r
        fields.append(ctrl.get(key, default))\r
    return sep.join([str(v) for v in fields])\r
\r
\r
class PicoBluetooth:\r
    """BLE peripheral implementing the grid-layout control protocol.\r
    See docs/PicoBluetooth_Protocol.md for the full wire protocol and design notes."""\r
\r
    def __init__(self, base_controls=None, device_base_name="Device", callbacks=None):\r
        # ---- BLE state\r
        self.ble = ubluetooth.BLE()\r
        # Force the radio off first: a previous program's radio/IRQ can\r
        # still be live even after its script stopped (see the doc).\r
        try:\r
            self.ble.active(False)\r
        except Exception:\r
            pass\r
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
        self.can_others_edit_code = 0\r
        self.grid_cols = 11\r
        self.grid_rows = 31\r
\r
        # ---- Session flags\r
        self._session_can_edit = False\r
        self._session_can_edit_code = False\r
        self._session_is_owner = False\r
\r
        # ---- Outbound telemetry readiness (device -> app; see the doc)\r
        self._app_ready = False\r
        self._pending_telemetry = []\r
\r
        # ---- Files & buffers\r
        self._settings_file = SETTINGS_FILE\r
        self._layout_file = LAYOUT_FILE\r
        self._rx_layout_buffer = ""\r
        self._command_buffer = b""\r
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
        self._on_joystick_callback = None\r
        self._on_dpad_callback = None\r
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
    # -------------------- Small log helpers (DEBUG_PROTOCOL; see the doc) --------------------\r
    def _readable(self, msg):\r
        return msg.replace(TEXT_LINEBREAK, "\\\\n").strip()\r
\r
    def _log_received(self, msg):\r
        if not DEBUG_PROTOCOL:\r
            return\r
        try:\r
            print("Received:", self._readable(msg))\r
        except:\r
            print("Received:", msg)\r
\r
    def _log_sent(self, msg):\r
        if not DEBUG_PROTOCOL:\r
            return\r
        try:\r
            print("Sent:", self._readable(msg))\r
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
        """Builds control dicts from tuples like [("button","A"), ("slider","B", 0, 100)].\r
        Extra per-type fields default from _EXTRA_FIELDS, then get parsed and\r
        validated from \`spec\` below; each type keeps its own min/max pairing\r
        so a bad value in one field falls back to that field's whole pair."""\r
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
            ctrl = {"type": ctrl_type, "name": name, "x": None, "y": None,\r
                    "width": None, "height": None, "rotation": 0}\r
            for key, default in _EXTRA_FIELDS.get(ctrl_type, ()):\r
                ctrl[key] = default\r
\r
            if ctrl_type == "slider":\r
                if len(spec) >= 4:\r
                    try:\r
                        ctrl["min"], ctrl["max"] = int(spec[2]), int(spec[3])\r
                    except:\r
                        ctrl["min"], ctrl["max"] = 0, 100\r
                if ctrl["max"] == ctrl["min"]:\r
                    ctrl["max"] = ctrl["min"] + 1\r
                if len(spec) >= 5 and spec[4] in SLIDER_RECENTER_MODES:\r
                    ctrl["recenter"] = spec[4]\r
\r
            elif ctrl_type == "toggle":\r
                if len(spec) >= 3:\r
                    ctrl["initial"] = _safe_cast(spec[2], _bool01, 0)\r
\r
            elif ctrl_type == "radar":\r
                if len(spec) >= 4:\r
                    try:\r
                        ctrl["minAngle"], ctrl["maxAngle"] = int(float(spec[2])), int(float(spec[3]))\r
                    except:\r
                        ctrl["minAngle"], ctrl["maxAngle"] = 0, 180\r
                if len(spec) >= 5:\r
                    ctrl["maxDistance"] = _safe_cast(spec[4], lambda v: max(1, int(float(v))), 200)\r
                if len(spec) >= 6:\r
                    ctrl["fadeMs"] = _safe_cast(spec[5], lambda v: max(120, int(float(v))), 1200)\r
\r
            elif ctrl_type == "joystick":\r
                # spec: ('joystick', NAME, xmin, xmax, ymin, ymax, xrecenter, yrecenter)\r
                if len(spec) >= 6:\r
                    try:\r
                        ctrl["xmin"], ctrl["xmax"], ctrl["ymin"], ctrl["ymax"] = (\r
                            int(spec[2]), int(spec[3]), int(spec[4]), int(spec[5]))\r
                    except:\r
                        ctrl["xmin"], ctrl["xmax"], ctrl["ymin"], ctrl["ymax"] = -100, 100, -100, 100\r
                if ctrl["xmax"] == ctrl["xmin"]:\r
                    ctrl["xmax"] = ctrl["xmin"] + 1\r
                if ctrl["ymax"] == ctrl["ymin"]:\r
                    ctrl["ymax"] = ctrl["ymin"] + 1\r
                if len(spec) >= 7 and spec[6] in SLIDER_RECENTER_MODES:\r
                    ctrl["xrecenter"] = spec[6]\r
                if len(spec) >= 8 and spec[7] in SLIDER_RECENTER_MODES:\r
                    ctrl["yrecenter"] = spec[7]\r
\r
            elif ctrl_type == "plot":\r
                # spec: ('plot', NAME, min, max, history, style)\r
                if len(spec) >= 4:\r
                    try:\r
                        ctrl["min"], ctrl["max"] = float(spec[2]), float(spec[3])\r
                    except:\r
                        ctrl["min"], ctrl["max"] = 0, 100\r
                if ctrl["max"] == ctrl["min"]:\r
                    ctrl["max"] = ctrl["min"] + 100\r
                if len(spec) >= 5:\r
                    ctrl["history"] = _safe_cast(spec[4], lambda v: max(2, int(v)), 30)\r
                if len(spec) >= 6 and spec[5] in PLOT_STYLES:\r
                    ctrl["style"] = spec[5]\r
\r
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
        full_name = "PicoW-{}".format(self.device_base_name)\r
        adv_payload = self._advertising_payload(services=[SERVICE_UUID])\r
        resp_payload = self._advertising_payload(name=full_name)\r
        self.ble.gap_advertise(100_000, adv_payload, resp_data=resp_payload)  # 100ms interval, in us\r
        print("Advertising as:", full_name)\r
\r
    # -------------------- File I/O: Settings --------------------\r
    def load_settings_from_file(self):\r
        """Reads settings:\r
           VERSION,1 / ownerID,<str> / ownerName,<str> / iconID,<int>\r
           canOthersConnect,<0/1> / canOthersEdit,<0/1> / canOthersEditCode,<0/1>\r
        """\r
        try:\r
            with open(self._settings_file, "r") as f:\r
                lines = [l.strip() for l in f.readlines() if l.strip()]\r
\r
            saw_can_others_edit_code = False\r
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
                    self.icon_id = _safe_cast(val, int, 0)\r
                elif key == "canOthersConnect":\r
                    self.can_others_connect = _safe_cast(val, _bool01, 0)\r
                elif key == "canOthersEdit":\r
                    self.can_others_edit = _safe_cast(val, _bool01, 0)\r
                elif key == "canOthersEditCode":\r
                    saw_can_others_edit_code = True\r
                    self.can_others_edit_code = _safe_cast(val, _bool01, 0)\r
                elif key == "gridCols":\r
                    self.grid_cols = _safe_cast(val, lambda v: max(2, min(60, int(v))), 11)\r
                elif key == "gridRows":\r
                    self.grid_rows = _safe_cast(val, lambda v: max(2, min(60, int(v))), 31)\r
\r
            print("Settings loaded: owner={} (id {}), icon={}, sharing: canConnect={} canEdit={} canEditCode={}".format(\r
                  self.owner_name, self.owner_id,\r
                  self.icon_id, self.can_others_connect, self.can_others_edit, self.can_others_edit_code))\r
            if not saw_can_others_edit_code:\r
                self.can_others_edit_code = 0\r
                self.save_settings_to_file(\r
                    self.owner_id or "",\r
                    self.owner_name or "",\r
                    self.icon_id,\r
                    self.can_others_connect,\r
                    self.can_others_edit,\r
                    0,\r
                    self.grid_cols,\r
                    self.grid_rows,\r
                )\r
        except Exception as e:\r
            print("Settings not found or invalid. Using defaults. Err:", e)\r
            self.owner_id = None\r
            self.owner_name = None\r
            self.icon_id = 0\r
            self.can_others_connect = 0\r
            self.can_others_edit = 0\r
            self.can_others_edit_code = 0\r
            self.save_settings_to_file("", "", 0, 0, 0, 0)\r
\r
    def save_settings_to_file(self, owner_id, owner_name, icon_id, can_connect, can_edit, can_edit_code,\r
                              grid_cols=None, grid_rows=None):\r
        # Enforce rule: if connect==0 => guest editing is off.\r
        if not can_connect:\r
            can_edit = 0\r
            can_edit_code = 0\r
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
                f.write("canOthersEditCode,{}\\n".format(1 if can_edit_code else 0))\r
                f.write("gridCols,{}\\n".format(grid_cols))\r
                f.write("gridRows,{}\\n".format(grid_rows))\r
            self.owner_id = owner_id if owner_id else None\r
            self.owner_name = owner_name if owner_name else None\r
            self.icon_id = int(icon_id)\r
            self.can_others_connect = 1 if can_connect else 0\r
            self.can_others_edit = 1 if can_edit else 0\r
            self.can_others_edit_code = 1 if can_edit_code else 0\r
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
    def save_layout_to_file(self, notify=True, saved_message="Layout saved successfully."):\r
        """Writes Layout.txt (temp file + atomic rename against power loss).\r
        saved_message lets callers describe *why* it was written, since this\r
        backs both a real app-triggered save and silent boot reconciliation."""\r
        tmp_file = self._layout_file + ".tmp"\r
        try:\r
            with open(tmp_file, "w") as f:\r
                f.write("#VERSION,{}\\n".format(LAYOUT_VERSION))\r
                for ctrl in self.controls:\r
                    f.write(_format_control_line(ctrl) + "\\n")\r
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
            if saved_message:\r
                print(saved_message)\r
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
        """Loads Layout.txt and merges its geometry onto base_controls. A bad\r
        line is skipped rather than aborting the load; a missing file seeds\r
        defaults; an unreadable-but-present file is left untouched."""\r
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
        overrides = {}\r
        for line in lines:\r
            if line.startswith("#VERSION"):\r
                continue\r
            try:\r
                parts = line.split(",")\r
                if len(parts) < 7:\r
                    print("Skipping malformed layout line:", line)\r
                    continue\r
                _, name, x, y, w, h, r = parts[:7]\r
\r
                # Only geometry carries over from Layout.txt (see\r
                # _merge_base_with_layout_override) - type-specific fields\r
                # like a slider's range always come from this run's\r
                # BluetoothControls, so they are not parsed back out here.\r
                overrides[name] = {\r
                    "x": _parse_int_or_none(x),\r
                    "y": _parse_int_or_none(y),\r
                    "width": _parse_int_or_none(w),\r
                    "height": _parse_int_or_none(h),\r
                    "rotation": int(float(r)) if r not in ("n", "") else 0\r
                }\r
            except Exception as e:\r
                print("Skipping bad layout line:", line, "Err:", e)\r
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
        self.save_layout_to_file(notify=False, saved_message="Layout reconciled with main.py's controls.")\r
        if dropped:\r
            print("Dropped stale layout controls:", dropped)\r
        print("Layout loaded. Controls:", len(self.controls))\r
\r
    # -------------------- BLE IRQ / I/O --------------------\r
    def _reset_protocol_state(self):\r
        self._session_can_edit = False\r
        self._session_can_edit_code = False\r
        self._session_is_owner = False\r
        self._app_ready = False\r
        self._pending_telemetry = []\r
        self._rx_layout_buffer = ""\r
        self._command_buffer = b""\r
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
        label = _DISCONNECT_REASON_LABELS.get(reason, reason)\r
        print("Device disconnected" + (" ({})".format(label) if label else ""))\r
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
                # Buffer raw bytes; only decode a full line (UTF-8-safe, see the doc).\r
                self._command_buffer += self.ble.gatts_read(self.handle_write)\r
                while b"\\n" in self._command_buffer:\r
                    raw_msg, self._command_buffer = self._command_buffer.split(b"\\n", 1)\r
                    try:\r
                        msg = raw_msg.decode().strip()\r
                    except Exception as e:\r
                        print("Inbound decode error:", e)\r
                        continue\r
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
            if DEBUG_PROTOCOL:\r
                print("Received HELLO handshake")\r
            self._send_reliable_stream(["ACK:HELLO"])\r
            # First inbound line proves the central has enabled notifications, so\r
            # any telemetry buffered during on_connect can now be delivered.\r
            if not self._app_ready:\r
                self._app_ready = True\r
                self._flush_pending_telemetry()\r
\r
        elif msg == "ping":\r
            self._send_reliable_stream(["ACK:ping"])\r
\r
        elif msg == "ACK:ownership":\r
            print("Ownership confirmed by app")\r
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
                    print("Failed to disconnect Bluetooth:", e)\r
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
            self._command_buffer = b""\r
\r
        elif msg == "who_are_you":\r
            if self.owner_id:\r
                self._send_reliable_stream(["owned,{},{},{},{},{},{},{}".format(\r
                    self.owner_id,\r
                    int(self.icon_id),\r
                    int(self.can_others_connect),\r
                    int(self.can_others_edit),\r
                    int(self.can_others_edit_code),\r
                    self._protocol_field(self.owner_name),\r
                    self._protocol_field(self.device_base_name),\r
                )])\r
            else:\r
                self._send_reliable_stream(["unowned,{}".format(self._protocol_field(self.device_base_name))])\r
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
                        self.can_others_edit_code,\r
                        self.grid_cols,\r
                        self.grid_rows,\r
                    )\r
                self._session_can_edit = True\r
                self._session_can_edit_code = True\r
                self._session_is_owner = True\r
                self._send_reliable_stream(["perm,1,1,1"])\r
            else:\r
                self._session_is_owner = False\r
                if self.can_others_connect == 1:\r
                    self._session_can_edit = True if self.can_others_edit == 1 else False\r
                    self._session_can_edit_code = True if self.can_others_edit_code == 1 else False\r
                    self._send_reliable_stream(["perm,1,{},{}".format(\r
                        1 if self._session_can_edit else 0,\r
                        1 if self._session_can_edit_code else 0,\r
                    )])\r
                else:\r
                    self._session_can_edit = False\r
                    self._session_can_edit_code = False\r
                    self._send_reliable_stream(["perm,0,0", "disconnect_private"])\r
                    if self.conn_handle is not None:\r
                        try:\r
                            self.ble.gap_disconnect(self.conn_handle)\r
                        except Exception as e:\r
                            print("Failed to disconnect Bluetooth after denying access:", e)\r
                            self._handle_disconnected("deny_disconnect_failed")\r
                    else:\r
                        self._handle_disconnected("deny_without_handle")\r
\r
        elif msg.startswith("create,"):\r
            # create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>[,<canEditCode>,<cols>,<rows>]\r
            parts = msg.split(",")\r
            if len(parts) < 6:\r
                self._send_reliable_stream(["ERR: Malformed create command"])\r
                return\r
            _, owner_id, owner_name, icon_id_s, can_connect_s, can_edit_s = parts[:6]\r
            owner_name = self._protocol_field(owner_name)\r
            icon_id = _safe_cast(icon_id_s, int, 0)\r
            can_connect = _safe_cast(can_connect_s, _bool01, 0)\r
            can_edit = _safe_cast(can_edit_s, _bool01, 0)\r
            can_edit_code = can_edit\r
\r
            grid_cols = self.grid_cols\r
            grid_rows = self.grid_rows\r
            if len(parts) >= 9:\r
                can_edit_code = _safe_cast(parts[6], _bool01, 0)\r
                grid_cols = _safe_cast(parts[7], int, grid_cols)\r
                grid_rows = _safe_cast(parts[8], int, grid_rows)\r
            elif len(parts) >= 8:\r
                grid_cols = _safe_cast(parts[6], int, grid_cols)\r
                grid_rows = _safe_cast(parts[7], int, grid_rows)\r
\r
            if can_connect == 0:\r
                can_edit = 0\r
                can_edit_code = 0\r
\r
            self.save_settings_to_file(owner_id, owner_name, icon_id, can_connect, can_edit, can_edit_code,\r
                                       grid_cols, grid_rows)\r
            self._session_can_edit = True\r
            self._session_can_edit_code = True\r
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
            icon_id = _safe_cast(parts[1], int, self.icon_id)\r
            can_connect = _safe_cast(parts[2], _bool01, self.can_others_connect)\r
            can_edit = _safe_cast(parts[3], _bool01, self.can_others_edit)\r
            can_edit_code = self.can_others_edit_code\r
            grid_col_index, grid_row_index, owner_name_index = 4, 5, 6\r
            if len(parts) >= 8:\r
                can_edit_code = _safe_cast(parts[4], _bool01, self.can_others_edit_code)\r
                grid_col_index, grid_row_index, owner_name_index = 5, 6, 7\r
            grid_cols = _safe_cast(parts[grid_col_index], int, self.grid_cols)\r
            grid_rows = _safe_cast(parts[grid_row_index], int, self.grid_rows)\r
            owner_name = self.owner_name or ""\r
            if len(parts) > owner_name_index:\r
                owner_name = self._protocol_field(parts[owner_name_index]) or owner_name\r
\r
            if can_connect == 0:\r
                can_edit = 0\r
                can_edit_code = 0\r
\r
            self.save_settings_to_file(\r
                self.owner_id or "",\r
                owner_name,\r
                icon_id,\r
                can_connect,\r
                can_edit,\r
                can_edit_code,\r
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
            print("Auto callback binding failed for", function_name, "-", e)\r
\r
    def _auto_bind_main_callbacks(self, callbacks=None):\r
        """Bind callbacks passed from main.py with callbacks=globals()."""\r
        self._auto_bind_main_callback("on_write", "_on_write_callback", callbacks)\r
        self._auto_bind_main_callback("on_button", "_on_button_callback", callbacks)\r
        self._auto_bind_main_callback("on_slider", "_on_slider_callback", callbacks)\r
        self._auto_bind_main_callback("on_toggle", "_on_toggle_callback", callbacks)\r
        self._auto_bind_main_callback("on_joystick", "_on_joystick_callback", callbacks)\r
        self._auto_bind_main_callback("on_dpad", "_on_dpad_callback", callbacks)\r
        self._auto_bind_main_callback("on_connect", "_on_connect_callback", callbacks)\r
        self._auto_bind_main_callback("on_disconnect", "_on_disconnect_callback", callbacks)\r
\r
    def _invoke_write_callback(self, msg, unhandled_label=None):\r
        """Calls on_write(msg) if set; else prints unhandled_label if given."""\r
        if self._on_write_callback:\r
            try:\r
                self._on_write_callback(msg)\r
            except Exception as e:\r
                print("Write callback error:", e)\r
        elif unhandled_label:\r
            print(unhandled_label, msg)\r
\r
    def _dispatch_app_command(self, msg):\r
        """Routes app controls to friendly callbacks; on_write is the raw fallback."""\r
        parsed = _split_or_none(msg, ",", 2)\r
        if not parsed:\r
            print("Unknown app message:", msg)\r
            self._invoke_write_callback(msg)\r
            return\r
        command_type, payload = parsed\r
\r
        try:\r
            if command_type == "button":\r
                parts = _split_or_none(payload, ":", 2)\r
                if not parts:\r
                    print("Bad button payload:", payload)\r
                    return\r
                if self._on_button_callback:\r
                    self._on_button_callback(parts[0], _is_down(parts[1]))\r
                    return\r
\r
            elif command_type == "slider":\r
                parts = _split_or_none(payload, ":", 2)\r
                if not parts:\r
                    print("Bad slider payload:", payload)\r
                    return\r
                if self._on_slider_callback:\r
                    self._on_slider_callback(parts[0], self._number_value(parts[1]))\r
                    return\r
\r
            elif command_type == "toggle":\r
                parts = _split_or_none(payload, ":", 2)\r
                if not parts:\r
                    print("Bad toggle payload:", payload)\r
                    return\r
                if self._on_toggle_callback:\r
                    self._on_toggle_callback(parts[0], int(float(parts[1])) == 1)\r
                    return\r
\r
            elif command_type == "joystick":\r
                head = _split_or_none(payload, ":", 2)\r
                xy = _split_or_none(head[1], ",", 2) if head else None\r
                if not xy:\r
                    print("Bad joystick payload:", payload)\r
                    return\r
                if self._on_joystick_callback:\r
                    self._on_joystick_callback(\r
                        head[0], self._number_value(xy[0]), self._number_value(xy[1]))\r
                    return\r
\r
            elif command_type == "dpad":\r
                head = _split_or_none(payload, ":", 2)\r
                dir_state = _split_or_none(head[1], ",", 2) if head else None\r
                if not dir_state:\r
                    print("Bad dpad payload:", payload)\r
                    return\r
                if self._on_dpad_callback:\r
                    self._on_dpad_callback(head[0], dir_state[0].strip().lower(), _is_down(dir_state[1]))\r
                    return\r
\r
        except Exception as e:\r
            print("Control callback error:", e)\r
            return\r
\r
        self._invoke_write_callback(msg, "Unhandled app command:")\r
\r
    def send_layout_to_web(self):\r
        """Builds and sends the layout payload once per 'request', ending in '__END__'."""\r
        lines = ["#VERSION,{}".format(LAYOUT_VERSION),\r
                 "#GRID,{},{}".format(self.grid_cols, self.grid_rows)]\r
        for ctrl in self.controls:\r
            if ctrl["type"] in ALLOWED_COMMAND_TYPES:\r
                lines.append(_format_control_line(ctrl))\r
        lines.append("__END__")\r
        self._send_reliable_stream(lines)\r
        print("Layout sent to app ({} controls)".format(len(self.controls)))\r
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
                _, name, x, y, w, h, r = parts[:7]\r
\r
                # Only geometry is kept (see _merge_base_with_layout_override);\r
                # type-specific fields always come from this run's\r
                # BluetoothControls, not from what the app saved.\r
                overrides[name] = {\r
                    "x": _parse_int_or_none(x),\r
                    "y": _parse_int_or_none(y),\r
                    "width": _parse_int_or_none(w),\r
                    "height": _parse_int_or_none(h),\r
                    "rotation": int(float(r)) if r not in ("n", "") else 0\r
                }\r
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
            self.save_layout_to_file(saved_message=None)\r
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
        path = self._clean_fs_path(msg.split(",", 1)[1])\r
        if not path:\r
            self._send_reliable_stream(["ERR: Bad path"])\r
            return\r
        if not self._can_write_file_path(path):\r
            self._send_reliable_stream(["ERR: File edit not permitted"])\r
            return\r
        # This runtime file only changes via the USB installer, not BLE.\r
        if path in ("/PicoBluetooth.py",):\r
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
            total = 0\r
            checksum = 0\r
            with open(self._file_write_path, "rb") as f:\r
                while True:\r
                    chunk = f.read(128)\r
                    if not chunk:\r
                        break\r
                    total += len(chunk)\r
                    for b in chunk:\r
                        checksum = (checksum + b) & 0xFFFFFFFF\r
            self._send_reliable_stream(["ACK:fs_write_done,{},{}".format(total, checksum)])\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_write_end failed {}".format(e)])\r
        finally:\r
            self._expecting_file_write = False\r
            self._file_write_path = None\r
            self._file_write_tmp = None\r
\r
    def _handle_fs_delete(self, msg):\r
        path = self._clean_fs_path(msg.split(",", 1)[1])\r
        if not self._can_write_file_path(path):\r
            self._send_reliable_stream(["ERR: File edit not permitted"])\r
            return\r
        if path in ("/PicoBluetooth.py", "/main.py"):\r
            self._send_reliable_stream(["ERR: Protected runtime file"])\r
            return\r
        try:\r
            os.remove(self._path_for_open(path))\r
            self._send_reliable_stream(["ACK:fs_delete"])\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_delete failed {}".format(e)])\r
\r
    def _can_write_file_path(self, path):\r
        clean = self._clean_fs_path(path)\r
        if self._session_is_owner:\r
            return True\r
        if clean in ("/DeviceSettings.txt", "/Layout.txt"):\r
            return False\r
        return True if self._session_can_edit_code else False\r
\r
    # -------------------- Outbound telemetry buffering --------------------\r
    def _emit_telemetry(self, line, coalesce_key=None):\r
        """Sends a telemetry line, or buffers it until the app signals it's\r
        ready (see the doc). coalesce_key replaces an earlier still-buffered\r
        value for the same key instead of queuing both."""\r
        if self._app_ready:\r
            return self.send_with_retry(line, max_attempts=1)\r
        if coalesce_key is not None:\r
            self._pending_telemetry = [\r
                item for item in self._pending_telemetry if item[0] != coalesce_key\r
            ]\r
        self._pending_telemetry.append((coalesce_key, line))\r
        if len(self._pending_telemetry) > MAX_PENDING_TELEMETRY:\r
            self._pending_telemetry = self._pending_telemetry[-MAX_PENDING_TELEMETRY:]\r
        return True\r
\r
    def _flush_pending_telemetry(self):\r
        """Deliver everything buffered before the app was ready, oldest first."""\r
        if not self._pending_telemetry:\r
            return\r
        pending = self._pending_telemetry\r
        self._pending_telemetry = []\r
        for _key, line in pending:\r
            self.send_with_retry(line, max_attempts=1)\r
\r
    def _encode_text_message(self, message):\r
        # "\\n" -> TEXT_LINEBREAK (a real newline can't travel on the wire); "\\r" normalized.\r
        try:\r
            text = str(message)\r
        except:\r
            return ""\r
        text = text.replace("\\r\\n", "\\n").replace("\\r", "\\n").strip()\r
        return text.replace("\\n", TEXT_LINEBREAK)\r
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
            self._emit_telemetry(\r
                "radar,{},{},{}\\n".format(clean_name, angle_value, distance_value),\r
                coalesce_key=("radar", clean_name),\r
            )\r
        except Exception as e:\r
            print("send_radar failed:", e)\r
\r
    def send_toggle_state(self, name, value):
        """Send current toggle state to the app: toggle_state,<NAME>,<0|1>."""
        if not self.connected:
            return
        try:\r
            clean_name = self._protocol_field(name)\r
            state = 1 if value else 0\r
            self._emit_telemetry(\r
                "toggle_state,{},{:d}\\n".format(clean_name, state),\r
                coalesce_key=("toggle_state", clean_name),\r
            )\r
        except Exception as e:
            print("send_toggle_state failed:", e)

    def send_slider_state(self, name, value):
        """Send current slider state to the app: slider_state,<NAME>,<VALUE>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            slider_value = round(float(value), 2)
            self._emit_telemetry(
                "slider_state,{},{}\\n".format(clean_name, slider_value),
                coalesce_key=("slider_state", clean_name),
            )
        except Exception as e:
            print("send_slider_state failed:", e)

    def send_plot(self, name, value, label=None):
        """Appends one sample to a plot control's history (never coalesced,
        unlike send_text/send_radar/send_toggle_state - see the doc)."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            line = "plot,{},{}".format(clean_name, round(float(value), 2))
            if label is not None:
                line += "," + self._protocol_field(label)
            self._emit_telemetry(line + "\\n")
        except Exception as e:
            print("send_plot failed:", e)
\r
    def send_plot_clear(self, name):\r
        """Clears a plot control's history in the app: plot_clear,<NAME>."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            self._emit_telemetry(\r
                "plot_clear,{}\\n".format(clean_name),\r
                coalesce_key=("plot_clear", clean_name),\r
            )\r
        except Exception as e:\r
            print("send_plot_clear failed:", e)\r
\r
    def send_text(self, name, message):\r
        """Sends text,<NAME>,<MESSAGE>. "\\\\n" in message becomes a line break."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            clean_message = self._encode_text_message(message)\r
            self._emit_telemetry(\r
                "text,{},{}\\n".format(clean_name, clean_message),\r
                coalesce_key=("text", clean_name),\r
            )\r
        except Exception as e:\r
            print("send_text failed:", e)\r
\r
    def disconnect(self):\r
        """Best-effort disconnect; advertising restarts right away."""\r
        if self.conn_handle is not None:\r
            try:\r
                self.ble.gap_disconnect(self.conn_handle)\r
            except Exception as e:\r
                print("Failed to disconnect Bluetooth:", e)\r
                self._handle_disconnected("gap_disconnect_failed")\r
        else:\r
            self._handle_disconnected("disconnect_without_handle")\r
\r
    def shutdown(self):\r
        """Disconnects and deactivates the radio without restarting advertising.\r
        Use when the running program itself is stopping (not disconnect())."""\r
        if self.conn_handle is not None:\r
            try:\r
                self.ble.gap_disconnect(self.conn_handle)\r
            except Exception as e:\r
                print("Failed to disconnect Bluetooth:", e)\r
        self.connected = False\r
        self.conn_handle = None\r
        try:\r
            self.ble.gap_advertise(None)\r
        except Exception as e:\r
            print("Failed to stop advertising:", e)\r
        try:\r
            self.ble.active(False)\r
        except Exception as e:\r
            print("Failed to deactivate BLE radio:", e)\r
        print("BLE stopped")\r
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
    def on_joystick(self, callback):\r
        self._on_joystick_callback = callback\r
\r
    def on_dpad(self, callback):\r
        self._on_dpad_callback = callback\r
\r
    def on_connect(self, callback):\r
        self._on_connect_callback = callback\r
\r
    def on_disconnect(self, callback):\r
        self._on_disconnect_callback = callback\r
`,oy=`from machine import Pin, time_pulse_us\r
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
        return cms`,cy=`import array, time\r
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
`,uy=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Robotbil styret med et D-pad (fire retningsknapper) og en fart-skyder.
# D-pad'et sender en retning (op/ned/venstre/hoejre) og om den er trykket ned.
# Du kan holde flere retninger ved at trække fingeren mellem knapperne.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'DpadBil'\r
\r
# BluetoothControls bestemmer, hvilke kontroller appen viser.
# dpad:   ('dpad', NAVN)  -- fire pileknapper i et felt.
# slider: ('slider', NAVN, min, max, recenter)  -- en skyder.
BluetoothControls = (\r
    ('dpad', 'KORSEL'),\r
    ('slider', 'FART', 0, 100, 'none'),\r
)\r
\r
\r
# LED'en bruges som en simpel "forbundet"-lampe.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
# board er motorstyringen fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()\r
\r
# FART skruer op og ned for farten. Start på fuld fart, så bilen virker med det\r
# samme; træk FART ned i appen for at køre langsommere.\r
speed_percent = 100\r
\r
# held holder styr på, hvilke retninger der er trykket ned lige nu.
held = {'up': False, 'down': False, 'left': False, 'right': False}\r
\r
\r
def clamp(value, low, high):\r
    if value < low:\r
        return low\r
    if value > high:\r
        return high\r
    return value\r
\r
\r
def drive_motor(motor, value):\r
    """Kør en motor med et tal fra -100 (bak) til 100 (frem)."""\r
    value = int(clamp(value, -100, 100))\r
    if value > 0:\r
        board.motorOn(motor, 'f', value)\r
    elif value < 0:\r
        board.motorOn(motor, 'r', -value)\r
    else:\r
        board.motorOff(motor)\r
\r
\r
def apply_drive():\r
    """Læg de holdte retninger sammen til frem/tilbage og drej, og kør motorerne."""\r
    throttle = (100 if held['up'] else 0) - (100 if held['down'] else 0)\r
    turn = (100 if held['right'] else 0) - (100 if held['left'] else 0)\r
    left = clamp(throttle + turn, -100, 100) * speed_percent / 100\r
    right = clamp(throttle - turn, -100, 100) * speed_percent / 100\r
    drive_motor(1, left)   # motor 1 = venstre\r
    drive_motor(2, right)  # motor 2 = højre\r
\r
\r
def on_dpad(name, direction, is_down):\r
    """Appen sender en retning og om knappen er trykket (True) eller sluppet (False)."""\r
    if name == 'KORSEL' and direction in held:\r
        held[direction] = is_down\r
        apply_drive()\r
        print('D-pad ->', direction, 'ned' if is_down else 'op')\r
\r
\r
def on_slider(name, value):\r
    """FART-skyderen sætter farten."""
    global speed_percent\r
    if name == 'FART':\r
        speed_percent = int(clamp(value, 0, 100))\r
        apply_drive()\r
        print('Fart ->', speed_percent)\r
\r
\r
def on_connect():\r
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.\r
    led.on()\r
    for key in held:\r
        held[key] = False\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
def on_disconnect():\r
    # Når appen afbryder, slukker LED'en, nulstiller retninger og stopper motorerne.\r
    led.off()\r
    for key in held:\r
        held[key] = False\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
# callbacks=globals() gør, at PicoBluetooth kan finde on_dpad osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,fy=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
import utime as time                       # Bruges til tid, pauser og timere\r
import network                             # Bruges til at forbinde Pico W til Wi-Fi\r
import gc                                  # Bruges til at rydde op i hukommelsen\r
import os                                  # Bruges til at slette den gemte målefil ved nulstilling\r
\r
try:                                       # Prøv først MicroPython-versionen af requests\r
    import urequests as requests           # urequests henter data fra internettet\r
except ImportError:                        # Hvis urequests ikke findes\r
    import requests                        # Brug den almindelige requests i stedet\r
\r
from PicoBluetooth import PicoBluetooth    # Biblioteket der laver Bluetooth kontrolpanelet\r
\r
WIFI_SSID = "dit-wifi-navn"                # Skift til navnet på dit Wi-Fi (SSID)\r
WIFI_PASSWORD = "dit-wifi-kodeord"         # Skift til kodeordet til dit Wi-Fi\r
\r
DEVICE_NAME = "Grafer"                     # Navnet Pico W viser i Bluetooth-listen\r
\r
LATITUDE = "55.4038"                       # Breddegrad for Odense - skift til din egen by\r
LONGITUDE = "10.4024"                      # Længdegrad for Odense - skift til din egen by\r
\r
# Hver graf bestemmer selv, hvor mange punkter den viser. Tallet staar direkte
# i BluetoothControls nedenfor: ("plot", NAVN, min, max, antal_punkter, type).
# Vaelg fx 5 til en lille graf eller 20 til en stor graf.
# Vejret hentes uafhængigt af Bluetooth (se hovedloekken nederst) - Picoen\r
# bliver ved med at samle målinger i baggrunden, også når ingen er forbundet,\r
# i takt med OPDATER_HVERT_MS herunder. Der hentes stadig ingen historik fra\r
# Open-Meteo - alt i graferne er noget Picoen faktisk selv har målt/hentet,\r
# mens den kørte.
TEMP_MIN = -10                             # Temperaturgrafens akse i grader C - juster efter årstid
TEMP_MAX = 35
TEMP_PUNKTER = 20                          # Antal punkter i temperaturgrafen
REGN_MIN = 0                               # Nedbørsgrafens akse i mm - juster hvis I måler kraftig regn
REGN_MAX = 10
REGN_PUNKTER = 20                          # Antal punkter i regngrafen
\r
BluetoothControls = (                          # Felterne appen viser i kontrolpanelet\r
    ("text", "STATUS"),                        # Viser hvad programmet laver lige nu\r
    ("plot", "TEMP", TEMP_MIN, TEMP_MAX, TEMP_PUNKTER, "line"),  # Temperatur som linjegraf
    ("plot", "REGN", REGN_MIN, REGN_MAX, REGN_PUNKTER, "bar"),   # Nedbør som søjlegraf
    ("button", "NULSTIL"),                     # Rydder graferne og starter forfra med nye målinger\r
)\r
\r
OPDATER_HVERT_MS = 60 * 1000               # Hent nyt vejr hvert 60. sekund - samme takt som API-eksemplet\r
WIFI_TIMEOUT_MS = 15000                    # Giv op efter 15 sekunder uden Wi-Fi\r
\r
# Hver rigtig måling gemmes også her på Picoen (nyeste sidst). Der gemmes nok
# linjer til den største graf i BluetoothControls, så man kan forbinde når
# som helst - selv efter Picoen har kørt helt
# for sig selv i timevis - og med det samme se den seneste vejrdata, den har
# samlet, uden at hente noget fra Open-Meteo igen. Det er stadig kun Picoens
# egne, tidligere hentede målinger, ikke Open-Meteos historik.
DATA_FILE = "VejrMaalinger.txt"
\r
# Henter kun det aktuelle vejr, ligesom API-eksemplet - ingen historik/time-data.
CURRENT_URL = (\r
    "http://api.open-meteo.com/v1/forecast"\r
    "?latitude=" + LATITUDE +\r
    "&longitude=" + LONGITUDE +\r
    "&current=temperature_2m,precipitation"\r
    "&timezone=Europe%2FCopenhagen"\r
)\r
\r
\r
led = Pin("LED", Pin.OUT)                  # Gør den indbyggede LED klar til brug\r
led.off()                                  # Sluk LED'en når programmet starter\r
\r
wlan = network.WLAN(network.STA_IF)        # Wi-Fi objekt så Pico W kan forbinde til routeren\r
\r
naeste_vejr_tid = time.ticks_ms()          # Hvornår vi næste gang skal hente aktuelt vejr\r
\r
# Open-Meteos aktuelle vejr opdateres sjældnere, end vi spørger efter det
# (OPDATER_HVERT_MS). Vi husker tidsstemplet fra sidste rigtige måling, så vi\r
# kan se, om et nyt kald bare gentager den samme måling, og springe dubletten
# over i stedet for at proppe den samme værdi ind i graferne flere gange.
\r
\r
def vis(felt, tekst):\r
    """Send tekst til et felt i appen, og skriv den samme tekst i terminalen."""\r
    ble.send_text(felt, tekst)             # Send teksten til feltet i kontrolpanelet\r
    print(felt + ":")                      # Skriv feltets navn i terminalen\r
    print(tekst)                           # \\n bliver til rigtige linjeskift i terminalen\r
    time.sleep_ms(80)                       # Lille pause, så appen kan nå at modtage beskeden\r
\r
\r
def forbind_wifi():
    """Tænd Wi-Fi og vent, indtil Pico W er på nettet (eller giv op)."""\r
    wlan.active(True)                      # Tænd Wi-Fi\r
    if wlan.isconnected():                 # Er vi allerede på nettet?\r
        return                             # Så behøver vi ikke gøre mere\r
\r
    print("Forbinder til Wi-Fi...")        # Skriv i terminalen at Wi-Fi starter\r
    wlan.connect(WIFI_SSID, WIFI_PASSWORD) # Forbind med navn og kode ovenfor\r
\r
    start = time.ticks_ms()                # Husk hvornår vi begyndte at vente\r
    while not wlan.isconnected():          # Bliv ved indtil Wi-Fi er forbundet\r
        if time.ticks_diff(time.ticks_ms(), start) > WIFI_TIMEOUT_MS:  # For lang tid?\r
            raise RuntimeError("Wi-Fi tidsgrænse")  # Giv op med en fejl
        time.sleep_ms(250)                 # Vent lidt før vi tjekker igen\r
\r
    print("Wi-Fi forbundet:", wlan.ifconfig()[0])  # Skriv Pico W's IP-adresse


def max_graf_punkter():
    """Find det største antal punkter fra plot-linjerne i BluetoothControls."""
    maks = 1
    for kontrol in BluetoothControls:
        if len(kontrol) >= 5 and kontrol[0] == "plot":
            try:
                antal = int(kontrol[4])
                if antal > maks:
                    maks = antal
            except Exception:
                pass
    return maks


def graf_punkter(navn, standard):
    """Find antal punkter for en bestemt graf i BluetoothControls."""
    for kontrol in BluetoothControls:
        if len(kontrol) >= 5 and kontrol[0] == "plot" and kontrol[1] == navn:
            try:
                return int(kontrol[4])
            except Exception:
                return standard
    return standard


def gem_maaling(api_tid, temp, regn):
    """Føjer én rigtig måling til DATA_FILE og smider de ældste væk."""
    try:\r
        try:\r
            with open(DATA_FILE, "r") as f:\r
                linjer = [l.strip() for l in f.readlines() if l.strip()]\r
        except OSError:\r
            linjer = []                    # Filen findes ikke endnu - start med en tom liste\r
        linjer.append("{},{},{}".format(api_tid, temp, regn))
        linjer = linjer[-max_graf_punkter():]  # Behold nok til den største graf
        with open(DATA_FILE, "w") as f:\r
            for linje in linjer:\r
                f.write(linje + "\\n")\r
    except Exception as fejl:\r
        print("Kunne ikke gemme maaling:", fejl)\r
\r
\r
def hent_gemte_maalinger():\r
    """Læser DATA_FILE tilbage som en liste af (temp, regn), ældste først."""\r
    try:\r
        with open(DATA_FILE, "r") as f:\r
            linjer = [l.strip() for l in f.readlines() if l.strip()]\r
    except OSError:\r
        return []                          # Ingen fil endnu (første gang programmet kører)\r
\r
    maalinger = []\r
    for linje in linjer:\r
        try:\r
            dele = linje.split(",")
            if len(dele) == 3:
                api_tid, temp_s, regn_s = dele
            else:
                api_tid = ""
                temp_s, regn_s = linje.split(",", 1)  # Gammelt filformat uden tidspunkt
            maalinger.append((api_tid, float(temp_s), float(regn_s)))
        except Exception:\r
            continue                       # Spring en beskadiget linje over i stedet for at fejle helt\r
    return maalinger


def seneste_gemte_api_tid():
    """Finder tidspunktet for den nyeste gemte maaling, hvis filen kendes."""
    maalinger = hent_gemte_maalinger()
    if not maalinger:
        return None
    api_tid = maalinger[-1][0]
    return api_tid if api_tid else None


def plot_label(api_tid):
    """Kort label til grafens vandrette akse."""
    if not api_tid:
        return ""
    return api_tid.split("T")[-1]


sidste_api_tid = seneste_gemte_api_tid()
\r
\r
def ryd_gemte_maalinger():\r
    """Sletter DATA_FILE, så NULSTIL også rydder det, der ellers ville blive gensendt ved næste forbindelse."""\r
    try:\r
        os.remove(DATA_FILE)\r
    except OSError:\r
        pass                                # Filen findes ikke - intet at slette\r
\r
\r
def hent_og_vis_vejr():\r
    """Henter det aktuelle vejr og tilføjer ét nyt punkt til hver graf.\r
\r
    Kører i samme takt som API-eksemplet (hvert 60. sekund), og uafhængigt af\r
    om nogen er forbundet over Bluetooth (se hovedloekken nederst). send_plot\r
    og send_text sender kun noget, når en telefon/browser rent faktisk er\r
    forbundet - ellers er de ligeglade - men gem_maaling() gemmer målingen på\r
    Picoen uanset hvad, så den ikke går tabt, selvom ingen ser med lige nu.\r
    """\r
    global sidste_api_tid\r
    svar = None\r
    try:\r
        forbind_wifi()                     # Sørg for at vi er på nettet\r
\r
        gc.collect()                       # Ryd op i hukommelsen før API-kaldet\r
        svar = requests.get(CURRENT_URL)   # Send HTTP GET til Open-Meteo\r
\r
        if svar.status_code != 200:        # 200 betyder OK\r
            raise RuntimeError("API-fejl: " + str(svar.status_code))\r
\r
        vejr = svar.json()["current"]      # Find delen med aktuelt vejr i svaret
        api_tid = vejr["time"]             # Open-Meteos eget tidsstempel for målingen\r
        klokkeslet = api_tid.split("T")[-1]  # Tag kun tiden efter T, fx 14:15\r
\r
        if api_tid == sidste_api_tid:      # Samme tidsstempel som sidst = samme måling igen\r
            vis("STATUS", "Uændret siden {}".format(klokkeslet))\r
            return                         # Spring dubletten over - intet nyt at vise i graferne\r
\r
        sidste_api_tid = api_tid\r
        temp = vejr["temperature_2m"]\r
        regn = vejr["precipitation"]\r
\r
        ble.send_plot("TEMP", temp, klokkeslet)  # Tilføj ét nyt punkt til temperaturgrafen
        ble.send_plot("REGN", regn, klokkeslet)  # Tilføj ét nyt punkt til nedbørsgrafen
        gem_maaling(api_tid, temp, regn)   # Gem samme måling på Picoen til efter reboot/reconnect
\r
        vis("STATUS", "Opdateret {}\\nTemp: {} C\\nRegn: {} mm".format(klokkeslet, temp, regn))\r
\r
    except Exception as fejl:              # Hvis noget går galt, lander vi her\r
        print("Fejl:", fejl)               # Skriv fejlen i terminalen\r
        vis("STATUS", "Fejl ved opdatering")  # Vis fejlstatus i appen\r
\r
    finally:                               # Kører både ved succes og fejl\r
        if svar is not None:               # Fik vi et svar?\r
            svar.close()                   # Luk det, så hukommelsen frigives\r
        gc.collect()                       # Ryd op igen\r
\r
\r
def on_connect():                          # Kører automatisk når Bluetooth forbinder\r
    global naeste_vejr_tid\r
    led.on()                               # Tænd LED'en når nogen forbinder\r
    # Genskab graferne med det samme fra Picoens egne, tidligere hentede\r
    # målinger - også dem den samlede, mens ingen var forbundet. Hurtigt og\r
    # uden Wi-Fi, så det er trygt at gøre her i selve Bluetooth-afbrydelsen\r
    # (se send_plot's telemetri-buffer i PicoBluetooth.py).\r
    maalinger = hent_gemte_maalinger()
    for gammel_tid, gammel_temp, gammel_regn in maalinger[-graf_punkter("TEMP", TEMP_PUNKTER):]:
        label = plot_label(gammel_tid)
        ble.send_plot("TEMP", gammel_temp, label)
    for gammel_tid, gammel_temp, gammel_regn in maalinger[-graf_punkter("REGN", REGN_PUNKTER):]:
        label = plot_label(gammel_tid)
        ble.send_plot("REGN", gammel_regn, label)
    naeste_vejr_tid = time.ticks_ms()      # Hent også et friskt vejrpunkt med det samme\r
    vis("STATUS", "Forbundet")             # Sig hej til appen\r
\r
\r
def on_disconnect():                       # Kører automatisk når Bluetooth afbryder\r
    led.off()                              # Sluk LED'en når ingen er forbundet\r
\r
\r
def on_button(name, is_down):              # Kører automatisk når en knap trykkes/slippes\r
    global naeste_vejr_tid, sidste_api_tid\r
    if name == "NULSTIL" and is_down:      # Kun når NULSTIL-knappen trykkes ned\r
        ble.send_plot_clear("TEMP")        # Ryd temperaturgrafen i appen\r
        ble.send_plot_clear("REGN")        # Ryd nedbørsgrafen i appen\r
        ryd_gemte_maalinger()              # Slet de gemte målinger, så de ikke dukker op igen senere\r
        sidste_api_tid = None              # Tillad at vise den nuværende måling igen efter nulstilling\r
        naeste_vejr_tid = time.ticks_ms()  # Hent et nyt rigtigt vejrpunkt med det samme\r
        vis("STATUS", "Nulstillet - henter nyt vejr")\r
\r
\r
ble = PicoBluetooth(                       # Start Bluetooth kontrolpanelet\r
    base_controls=BluetoothControls,       # Fortæl hvilke felter appen skal vise\r
    device_base_name=DEVICE_NAME,          # Fortæl hvad enheden skal hedde\r
    callbacks=globals()                    # Gør on_connect og on_disconnect synlige\r
)\r
\r
\r
while True:                                # Hovedprogrammet kører igen og igen\r
    # Uafhængigt af om nogen er forbundet over Bluetooth: Picoen bliver ved med\r
    # at hente og gemme vejret i baggrunden. send_plot/send_text herinde sender\r
    # kun noget, hvis en telefon/browser rent faktisk er forbundet (se\r
    # PicoBluetooth.py), men gem_maaling() gemmer målingen lokalt uanset hvad.\r
    if time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:\r
        hent_og_vis_vejr()                 # Tid til at hente nyt vejr\r
        naeste_vejr_tid = time.ticks_add(time.ticks_ms(), OPDATER_HVERT_MS)  # Planlæg næste gang\r
\r
    time.sleep_ms(100)                     # Lille pause, så Pico W ikke bruger al CPU-tid\r
`,dy=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Robotbil styret med et joystick og en fart-skyder.
# Joysticket sender to tal: X (drej) og Y (frem/tilbage), begge -100..100.
# Vi blander dem til to motorer, ligesom en rigtig tankstyring.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'JoystickBil'\r
\r
# BluetoothControls bestemmer, hvilke kontroller appen viser.\r
# joystick: ('joystick', NAVN, xmin, xmax, ymin, ymax, x-recenter, y-recenter)
#   'middle' betyder, at aksen selv går tilbage til midten (0), når du slipper.
# slider:   ('slider', NAVN, min, max, recenter)  -- en skyder.
BluetoothControls = (\r
    ('joystick', 'KORSEL', -100, 100, -100, 100, 'middle', 'middle'),\r
    ('slider', 'FART', 0, 100, 'none'),\r
)\r
\r
\r
# LED'en bruges som en simpel "forbundet"-lampe.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
# board er motorstyringen fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()\r
\r
# FART skruer op og ned for den maksimale fart. Start på fuld fart, så bilen\r
# virker med det samme; træk FART ned i appen for at køre langsommere.\r
speed_percent = 100\r
\r
# Vi husker joystickets seneste position, så en ny FART slår igennem med det samme.
last_x = 0\r
last_y = 0\r
\r
\r
def clamp(value, low, high):\r
    if value < low:\r
        return low\r
    if value > high:\r
        return high\r
    return value\r
\r
\r
def drive_motor(motor, value):\r
    """Kør en motor med et tal fra -100 (bak) til 100 (frem)."""\r
    value = int(clamp(value, -100, 100))\r
    if value > 0:\r
        board.motorOn(motor, 'f', value)\r
    elif value < 0:\r
        board.motorOn(motor, 'r', -value)\r
    else:\r
        board.motorOff(motor)\r
\r
\r
def apply_drive():\r
    """Bland joystick (drej + frem/tilbage) og fart til venstre/højre motor."""\r
    turn = last_x\r
    throttle = last_y\r
    left = clamp(throttle + turn, -100, 100) * speed_percent / 100\r
    right = clamp(throttle - turn, -100, 100) * speed_percent / 100\r
    drive_motor(1, left)   # motor 1 = venstre\r
    drive_motor(2, right)  # motor 2 = højre\r
\r
\r
def on_joystick(name, x, y):\r
    """Appen sender joystickets X (drej) og Y (frem/tilbage)."""
    global last_x, last_y\r
    if name == 'KORSEL':\r
        last_x = int(x)\r
        last_y = int(y)\r
        apply_drive()\r
        # Joysticket sender mange gange i sekundet - slet linjen hvis det fylder for meget.
        print('Joystick -> x:', last_x, 'y:', last_y)\r
\r
\r
def on_slider(name, value):\r
    """FART-skyderen sætter den maksimale fart."""
    global speed_percent\r
    if name == 'FART':\r
        speed_percent = int(clamp(value, 0, 100))\r
        apply_drive()\r
        print('Fart ->', speed_percent)\r
\r
\r
def on_connect():\r
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.\r
    global last_x, last_y\r
    led.on()\r
    last_x = 0\r
    last_y = 0\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
def on_disconnect():\r
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.\r
    global last_x, last_y\r
    led.off()\r
    last_x = 0\r
    last_y = 0\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
# callbacks=globals() gør, at PicoBluetooth kan finde on_joystick osv.\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,my=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
from neopixel import Neopixel\r
\r
\r
# Her vælger du, hvor NeoPixel'en sidder.\r
# Prøv at ændre NEOPIXEL_BEN, hvis din ledning sidder et andet sted.\r
NEOPIXEL_BEN = 0\r
\r
# Vi bruger 1 NeoPixel. Tallet kan ændres, hvis du har en ring eller LED-stribe.
ANTAL_NEOPIXELS = 1\r
\r
# Farven er rød, grøn, blå. Her er farven blå.\r
FARVE = (0, 80, 255)\r
\r
neopixels = Neopixel(ANTAL_NEOPIXELS, 0, NEOPIXEL_BEN, "GRB")\r
light_is_on = False\r
\r
# LED'en viser, om appen er forbundet.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'NeoPixel'\r
\r
# Appen viser en knap og en skyder.
BluetoothControls = (\r
    ('button', 'TAEND'),\r
    ('slider', 'LYS', 0, 100, 'none'),\r
)\r
\r
\r
def show_light():\r
    if light_is_on:\r
        neopixels.fill(FARVE)\r
    else:\r
        neopixels.clear()\r
    neopixels.show()\r
\r
\r
def on_button(name, is_down):\r
    """Appen kalder funktionen baade naar knappen trykkes ned og slippes."""\r
    global light_is_on\r
\r
    if name == 'TAEND':\r
        # is_down er True, mens knappen holdes nede.\r
        # is_down er False, naar knappen slippes.\r
        light_is_on = is_down\r
        show_light()\r
        if light_is_on:\r
            print('Knappen er nede: lyset er taendt')\r
        else:\r
            print('Knappen er sluppet: lyset er slukket')\r
\r
\r
def on_slider(name, value):\r
    """Kører når skyderen flyttes i appen."""
\r
    if name == 'LYS':\r
        # Appen sender 0-100. NeoPixel-biblioteket bruger 1-255.\r
        lysstyrke = int(1 + (int(value) / 100) * 254)\r
\r
        neopixels.brightness(lysstyrke)\r
        show_light()\r
\r
        print('Lysstyrke:', value)\r
\r
\r
def on_connect():\r
    """Tænd LED'en når appen forbinder."""\r
    led.on()\r
\r
\r
def on_disconnect():\r
    """Sluk lyset når appen mister forbindelsen."""\r
    global light_is_on\r
\r
    light_is_on = False\r
    show_light()\r
    led.off()\r
\r
\r
# callbacks=globals() betyder:\r
# "Brug funktionerne ovenfor, når appen sender noget."\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.\r
    time.sleep_ms(100)\r
`,py=`# PicoFly.py\r
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
`,hy=`import machine\r
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
        self.initPCA()`,_y=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
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
# Appen får en kontakt-knap og et radar-display.
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'Radar'\r
\r
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
# board styrer servoen, og sensoren måler afstand med HC-SR04.
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
    """Reager på kontakt-knapper fra appen."""
    global scan_enabled\r
\r
    # SCAN-knappen i appen tænder eller slukker radaren.\r
    if name == 'SCAN':\r
        scan_enabled = bool(value)\r
        ble.send_toggle_state('SCAN', scan_enabled)\r
        print('Scan ->', 'til' if scan_enabled else 'fra')\r
    else:\r
        print('Ukendt kontakt:', name)\r
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
\r
\r
# callbacks=globals() gør, at PicoBluetooth kan finde on_toggle osv.\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
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
`,gy=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
\r
\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'SendTekst'\r
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
    """Send den foerste besked naar appen forbinder."""\r
    led.on()\r
    besked = 'Hej fra Picoen\\nJeg er klar!'\r
    ble.send_text('BESKED', besked)\r
    # print() viser \\n som et rigtigt linjeskift i terminalen, ligesom i appen.\r
    print('Sendte besked til appen:')\r
    print(besked)\r
\r
\r
def on_disconnect():\r
    """Sluk LED'en naar appen mister forbindelsen."""\r
    led.off()\r
\r
\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
counter = 0\r
\r
while True:\r
    # Send en flerlinjet besked med jaevne mellemrum, saa tekstfeltet er let at teste.\r
    if ble.connected:\r
        counter += 1\r
        besked = 'Besked {}\\nDette er en test af tekstfeltet.'.format(counter)\r
        ble.send_text('BESKED', besked)\r
        # Du bestemmer selv, hvad der skrives her - proev at slette de to linjer.\r
        print('Sendte besked til appen:')\r
        print(besked)\r
        time.sleep_ms(2000)\r
    else:\r
        time.sleep_ms(100)\r
`,by=`from machine import Pin, PWM, ADC\r
from PicoBluetooth import PicoBluetooth\r
from neopixel import Neopixel\r
from PicoFly import get_board\r
import utime as time\r
\r
# ============================================================\r
# Alarmstation med BLE kontrolpanel + servo-doerlaas\r
#\r
# Hardware / benoversigt:
#   Fri NeoPixel LED:       GP16\r
#   PIR bevaegelsessensor:  GP15\r
#   Buzzer:                 GP14\r
#   Vandsensor power/VCC:   GP0\r
#   Vandsensor signal/S:    GP26 / ADC0\r
#   Tastatur NeoPixel:      GP17
#   Tastatur-kolonner:      GP18, GP19, GP20
#   Tastatur-raekker:       GP21, GP22, GP27, GP28
#   Servo:                  PicoFly board.servo1\r
#\r
# Servo-vinkler:
#   OPEN = 60\r
#   CLOSED = 100\r
# Byt de to tal om, hvis din dor bevaeger sig den forkerte vej.\r
# ============================================================\r
\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'AlarmDemo'\r
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
# Servo via PicoFly
board = get_board()\r
servo = board.servo1\r
\r
SERVO_OPEN_ANGLE = 60\r
SERVO_CLOSED_ANGLE = 100\r
\r
# Dette tastatur laeses drejet i forhold til de trykte taster.
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
# En liste-forstaaelse (en kort "lav en liste ved at koere gennem noget andet"-\r
# skrivemaade) - laver ét Pin-objekt per pin-nummer i listen ovenfor.\r
rows = [Pin(pin, Pin.OUT, value=1) for pin in row_pins]\r
columns = [Pin(pin, Pin.IN, Pin.PULL_UP) for pin in column_pins]\r
\r
# ---------------- Tilstand ----------------\r
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
# ---------------- BLE-sikre hjaelpefunktioner ----------------\r
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
            print('BLE tekst-sendefejl:', e)
\r
\r
def ble_send_toggle_state(name, value):\r
    if ble_is_connected():\r
        try:\r
            ble.send_toggle_state(name, bool(value))\r
        except Exception as e:\r
            print('BLE kontakt-sendefejl:', e)
\r
\r
# ---------------- Hjaelpefunktioner ----------------\r
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
# ---------------- Dor / servo ----------------\r
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
    Bruges naar koden paa tastaturet er rigtig, eller naar doeren aabnes fra
    appen. Slaar foerst alarmen fra, og aabner saa doeren.\r
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
        # Det er sikrest at lukke doeren, naar alarmen er tilkoblet.\r
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
# ---------------- Tastatur ----------------
\r
def scan_keypad():\r
    # enumerate(rows) giver baade indekset (0, 1, 2...) og selve raekken i\r
    # samme loekke, saa vi kan slaa den trykte tast op i key_names bagefter.\r
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
            authorized_open_door('tastatur')
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
# ---------------- BLE-callbacks ----------------\r
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
\r
\r
def on_button(name, is_down):\r
    global code_change_mode, entered_code\r
\r
    # De her knapper skal kun gøre noget, når de trykkes ned.\r
    # Når knappen slippes, stopper funktionen her.\r
    if not is_down:\r
        return\r
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
        send_message('Tast ny kode paa tastatur og tryk OK')
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
ble = PicoBluetooth(\r
    base_controls=BluetoothControls,\r
    device_base_name=DEVICE_NAME,\r
    callbacks=globals(),\r
)\r
\r
# ---------------- Hovedloekke ----------------\r
\r
send_message('Alarmstation starter')\r
send_message('PIR varmer op i {} sekunder'.format(PIR_WARMUP_MS // 1000))\r
\r
# Start med doeren laast/lukket.\r
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
        # Vandsensor
        if time.ticks_diff(now, next_water_check_ms) >= 0:\r
            latest_water = read_water_sensor(samples=4)\r
            next_water_check_ms = time.ticks_add(now, 700)\r
\r
            if alarm_enabled and latest_water >= water_threshold:\r
                trigger_alarm('Vand opdaget: {}'.format(latest_water))\r
\r
        # Tastatur
        key = read_key_event()\r
        if key is not None:\r
            print('Tast:', key)
            handle_key(key)\r
\r
        # Luk doeren automatisk, naar tiden er gaaet\r
        if door_open and door_auto_close_at != 0:\r
            if time.ticks_diff(now, door_auto_close_at) >= 0:\r
                close_door('auto')\r
\r
        # Alarmens bip-moenster (skiftevis til og fra, som en rigtig alarm)\r
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
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')\r
`,yy=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.\r
# Hver skyder sender -100..100 og går tilbage til 0, når den slippes.
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'TankBil'\r
\r
# BluetoothControls bestemmer, hvilke skydere appen viser.
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
# board er motorstyringen fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()\r
\r
\r
def on_slider(name, value):\r
    """Reager på skydere fra appen."""
\r
    # Appen sender skyder-værdien som et tal. Vi bruger minus som baglæns.
    value = int(value)\r
\r
    if name == 'VENSTRE MOTOR':\r
        if value > 0:\r
            board.motorOn(1, 'f', value)\r
        elif value < 0:\r
            board.motorOn(1, 'r', -value)\r
        else:\r
            board.motorOff(1)\r
        print('Venstre motor ->', value)\r
    elif name == 'HOJRE MOTOR':\r
        if value > 0:\r
            board.motorOn(2, 'f', value)\r
        elif value < 0:\r
            board.motorOn(2, 'r', -value)\r
        else:\r
            board.motorOff(2)\r
        print('Hojre motor ->', value)\r
    else:\r
        print('Ukendt skyder:', name)
\r
\r
def on_connect():\r
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.\r
    led.on()\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
def on_disconnect():\r
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.\r
    led.off()\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
# callbacks=globals() gør, at PicoBluetooth kan finde on_slider osv.\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,Ji=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:gy},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:my},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:yy},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:uy},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:dy},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:_y},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:ay},{id:"program:graphs",path:"/main.py",label:"Vejrgrafer fra internettet (main.py)",description:"Startprogram der henter vejr fra et API og tegner temperatur og nedbør som grafer over tid. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:fy},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:by},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:sy},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:hy},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:py},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:oy},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:cy}],vy=11914;function xy(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function ky(){return xy()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class Sy{constructor(l={}){pe(this,"port",null);pe(this,"reader",null);pe(this,"writer",null);pe(this,"readLoopDone",null);pe(this,"readLoopActive",!1);pe(this,"disconnecting",!1);pe(this,"buffer","");pe(this,"events");pe(this,"dataListeners",new Set);this.events=l}get connected(){return!!this.port&&!!this.writer}get info(){var l;return((l=this.port)==null?void 0:l.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const l=await navigator.serial.requestPort({filters:[{usbVendorId:vy}]});await this.openPort(l)}async connectKnownPort(l){await this.openPort(l)}async disconnect(){var g,y;const l=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,f=this.writer,h=this.readLoopDone,b=a==null?void 0:a.closed.catch(()=>{}),p=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}h&&await h.catch(()=>{}),await b;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(f==null?void 0:f.close()),await p}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,l&&((y=(g=this.events).onDisconnect)==null||y.call(g))}async write(l){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(l))}async writeLine(l){await this.write(`${l}\r
`)}addDataListener(l){return this.dataListeners.add(l),()=>this.dataListeners.delete(l)}async openPort(l){var a,f,h;if(await this.disconnect().catch(()=>{}),await l.open({baudRate:115200,bufferSize:4096}),this.port=l,this.writer=((a=l.writable)==null?void 0:a.getWriter())??null,!this.writer||!l.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=l.getInfo();(h=(f=this.events).onLog)==null||h.call(f,"success",`USB-forbindelse oprettet (${wy(c)}).`),this.readLoopDone=this.startReadLoop(l)}async startReadLoop(l){var f,h,b;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((f=l.readable)==null?void 0:f.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:p,done:g}=await a.read();if(g)break;p&&this.consumeText(c.decode(p,{stream:!0}))}}catch(p){this.readLoopActive&&((b=(h=this.events).onLog)==null||b.call(h,"error",p instanceof Error?p.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===l&&this.closeAfterUnexpectedReadEnd(l)}}async closeAfterUnexpectedReadEnd(l){var h,b;const c=this.connected||this.port===l;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,f=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await f}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await l.close()}catch{}this.port===l&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((b=(h=this.events).onDisconnect)==null||b.call(h))}consumeText(l){var c,a,f,h;(a=(c=this.events).onData)==null||a.call(c,l);for(const b of this.dataListeners)b(l);for(this.buffer+=l;this.buffer.includes(`
`);){const b=this.buffer.indexOf(`
`),p=this.buffer.slice(0,b).replace(/\r$/,"");this.buffer=this.buffer.slice(b+1),(h=(f=this.events).onLine)==null||h.call(f,p)}}}function wy(s){const l=s.usbVendorId!==void 0?`VID ${s.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=s.usbProductId!==void 0?`PID ${s.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${l}, ${c}`}const E_=15e3,Ph=64*1024,Fh=1e5,T_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),Ey=64*1024,Gh=8;function N_(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function Ty(){return N_()?new SharedArrayBuffer(Ey):null}function Ny(s,l){const c=new Int32Array(s,0,2),a=new Uint8Array(s),f=s.byteLength-Gh,h=new TextEncoder().encode(l+`
`);let b=Atomics.load(c,0);for(const p of h)a[Gh+b%f]=p,b+=1;Atomics.store(c,0,b),Atomics.notify(c,0)}const Ry=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class jy{constructor(){pe(this,"worker",null);pe(this,"pending",null);pe(this,"nextId",0)}send(l,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,f=c.timeoutMs??E_,h=this.ensureWorker();return new Promise(b=>{const p=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:a,timer:p,onOutput:c.onOutput,resolve:b},h.postMessage({type:"run",id:a,code:Ay(l),runtimeUrl:T_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var l;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=c=>this.handleMessage(c.data),l.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var a;const c=this.pending;if(!(!c||l.id!==c.id||l.type==="ready")){if(l.type==="stdout"){(a=c.onOutput)==null||a.call(c,l.text);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,timedOut:!1,unavailable:!1})}}finish(l){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(l))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null}}class My{constructor(){pe(this,"worker",null);pe(this,"pending",null);pe(this,"nextId",0);pe(this,"stdinSab",null)}run(l,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs===null?null:c.timeoutMs??E_,f=typeof c=="number"?void 0:c.onOutput,h=typeof c=="number"?void 0:c.signal,b=Vf(l,{allowInput:!0});if(b.some(k=>k.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1});const p=++this.nextId,g=this.ensureWorker(),y=Ty();return this.stdinSab=y,new Promise(k=>{const S=V=>this.finish(V),T=()=>{this.restartWorker(),S({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1})},A=a===null?null:window.setTimeout(()=>{S({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:b,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:p,timer:A,timeoutMs:a,issues:b,onOutput:f,signal:h,abort:T,resolve:k},h!=null&&h.aborted){T();return}h==null||h.addEventListener("abort",T,{once:!0});const z={type:"run",id:p,code:l,runtimeUrl:T_,interactive:!0,sab:y??void 0};g.postMessage(z)})}sendInput(l){const c=this.pending;!c||!this.stdinSab||(this.refreshTimeout(c),Ny(this.stdinSab,l))}stop(){const l=this.pending;l&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:l.issues,timedOut:!1,unavailable:!1}))}dispose(){var l;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=c=>this.handleMessage(c.data),l.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var a;const c=this.pending;if(!(!c||l.id!==c.id||l.type==="ready")){if(l.type==="stdout"){this.refreshTimeout(c),(a=c.onOutput)==null||a.call(c,l.text);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(l){var a;const c=this.pending;c&&(c.timer!==null&&window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(l))}refreshTimeout(l){l.timeoutMs!==null&&(l.timer!==null&&window.clearTimeout(l.timer),l.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:l.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},l.timeoutMs))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null,this.stdinSab=null}}function Ay(s){const l=JSON.stringify(s);return["try:",`    __pico_repl_value = eval(${l})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${l})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Vf(s,l={}){const c=[],a=new Blob([s]).size;a>Ph&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Ph} bytes.`});const f=s.split(/\r?\n/);for(let h=0;h<f.length;h+=1){const b=h+1,p=ic(f[h]).trim();if(!p)continue;const g=Oy(p);g&&Ry.has(g)&&c.push({level:"error",line:b,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!l.allowInput&&Dy(f[h])&&c.push({level:"error",line:b,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const y=p.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&Cy(y)>Fh&&c.push({level:"error",line:b,text:`range(...) er for stor til offline kørsel. Brug højst ${Fh} gentagelser.`})}for(const h of By(f))c.push({level:"warning",text:`Funktionen ${h} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function ic(s){let l=null;for(let c=0;c<s.length;c+=1){const a=s[c];if((a==='"'||a==="'")&&s[c-1]!=="\\"&&(l=l===a?null:l??a),a==="#"&&!l)return s.slice(0,c)}return s}function Dy(s){const l=ic(s);let c=null;for(let a=0;a<l.length;a+=1){const f=l[a];if((f==='"'||f==="'")&&l[a-1]!=="\\"){c=c===f?null:c??f;continue}if(!c&&!(!Vh(l[a-1])||l.slice(a,a+5)!=="input")&&Vh(l[a+5])&&l.slice(a+5).trimStart().startsWith("("))return!0}return!1}function Vh(s){return!s||!/[A-Za-z0-9_]/.test(s)}function Oy(s){const l=s.match(/^import\s+([A-Za-z_]\w*)/);if(l)return l[1];const c=s.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Yh(s){const l=s.match(/^\s*/);return(l==null?void 0:l[0].replace(/\t/g,"    ").length)??0}function Cy(s){const l=Number(s[1]),c=s[2]===void 0?void 0:Number(s[2]),a=s[3]===void 0?1:Number(s[3]);if(a===0)return Number.POSITIVE_INFINITY;const b=(c===void 0?l:c)-(c===void 0?0:l);return b>0&&a<0||b<0&&a>0?0:Math.ceil(Math.abs(b/a))}function By(s){const l=new Set;for(let c=0;c<s.length;c+=1){const a=ic(s[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const f=a[1],h=Yh(s[c]);for(let b=c+1;b<s.length;b+=1){if(!s[b].trim())continue;if(Yh(s[b])<=h)break;if(new RegExp(`\\b${f}\\s*\\(`).test(ic(s[b]))){l.add(f);break}}}return[...l]}const Ly=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function zy(s,l){var k;const c=s.trim(),a=l.split(/\r?\n/),f=Uy(c),h=f?a[f-1]??"":"",b=Iy(a,f),p=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(p))return{simple:"Programmet blev stoppet.",technical:c,line:f};if(/MemoryError/.test(p))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/RecursionError/.test(p))return{simple:`En funktion kalder sig selv for mange gange${f?` omkring linje ${f}`:""}.`,technical:c,line:f};const g=p.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(g)return{simple:`Variablen ${g[1]} bruges inde i en funktion, før den har fået en værdi${f?` på linje ${f}`:""}.`,technical:c,line:f};const y=p.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:Gy(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${f?` på linje ${f}`:""}.`:`Python kender ikke navnet ${y[1]}${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ZeroDivisionError/.test(p))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError:\s+unexpected indent/.test(p))return{simple:`Der er for meget indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError/.test(p))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ImportError|ModuleNotFoundError/.test(p)){const S=(k=p.match(/['"](.+?)['"]/))==null?void 0:k[1];return{simple:`Python kan ikke finde modulet${S?` ${S}`:""}.`,technical:c,line:f}}if(/OSError/.test(p))return/ENOENT|No such file|Errno\s+2/.test(p)?{simple:`Python kan ikke finde filen${f?` på linje ${f}`:""}.`,technical:c,line:f}:/EACCES|permission|denied/i.test(p)?{simple:`Python har ikke adgang til filen eller enheden${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Der opstod en fejl med en fil eller en enhed${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/SyntaxError/.test(p)){if(/invalid syntax/.test(p)&&b.text.trim().endsWith(","))return{simple:`Linje ${b.line??f} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:b.line??f};const S=Yf(h,f)??Yf(b.text,b.line)??Hy(a,f);return S?{simple:`Mangler måske : efter linje ${S.line}.`,technical:c,line:S.line}:f&&b.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:c,line:f}:Fy(h)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Py(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Vy(h)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:c,line:f}:Yy(h)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}return/TypeError/.test(p)?/takes .* positional arguments? but .* given/.test(p)||/function takes/.test(p)?{simple:`En funktion får for mange eller for få værdier${f?` på linje ${f}`:""}.`,technical:c,line:f}:/unsupported operand type/.test(p)?{simple:`To værdier kan ikke bruges sammen på den måde${f?` på linje ${f}`:""}.`,technical:c,line:f}:/not callable/.test(p)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:c,line:f}:/IndexError/.test(p)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:c,line:f}:/KeyError/.test(p)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:c,line:f}:/AttributeError/.test(p)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:c,line:f}:/ValueError/.test(p)?/invalid literal for int/.test(p)?{simple:`Teksten kan ikke laves om til et heltal${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}function Uy(s){var f;const c=(f=[...s.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function Iy(s,l){if(!l)return{text:""};for(let c=l-2;c>=0;c-=1){const a=s[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Yf(s,l){if(!l)return null;const c=s.trim();return!Ly.test(c)||c.endsWith(":")?null:{line:l}}function Hy(s,l){const c=l?Math.min(s.length,l):s.length,a=Math.max(0,c-4);for(let f=c-1;f>=a;f-=1){const h=Yf(s[f]??"",f+1);if(h)return h}return null}function Py(s){const l=(s.match(/'/g)??[]).length,c=(s.match(/"/g)??[]).length;return l%2===1||c%2===1}function Fy(s){var a,f;const c=(f=(a=s.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:f.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function Gy(s,l){const c=s.trim();return!!l&&/[A-Za-zæøåÆØÅ]/.test(l)&&(c.startsWith("print(")||c.includes(`= ${l}`))}function Vy(s){return R_(s)>0}function Yy(s){return R_(s)<0}function R_(s){let l=0,c=null;for(let a=0;a<s.length;a+=1){const f=s[a];if((f==='"'||f==="'")&&s[a-1]!=="\\"){c=c===f?null:c??f;continue}c||((f==="("||f==="["||f==="{")&&(l+=1),(f===")"||f==="]"||f==="}")&&(l-=1))}return l}const $f="/min_kode.py",j_=`print('Hej fra Pico Kontrol Panel')
`,$y=500,qy=1200,fs="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Yt(s,l){return`${s}:${l}`}function Ky(s){return new Promise(l=>window.setTimeout(l,s))}function Xy(){const s=le(d=>d.toggleSideMenu),l=le(d=>d.askConfirm),c=le(d=>d.picoIdeOrigin),a=le(d=>d.active),f=le(d=>d.isBleConnected),h=le(d=>d.bleListFiles),b=le(d=>d.bleReadText),p=le(d=>d.bleWriteText),g=le(d=>d.bleDeleteFile),y=le(d=>d.bleRestartAndReconnect),[k,S]=L.useState(!1),[T,A]=L.useState(!1),[z,V]=L.useState([]),[Y,G]=L.useState(!1),[W,P]=L.useState([]),[re,de]=L.useState(null),[fe,X]=L.useState(()=>Qo(qo())),[ee,Ee]=L.useState($f),[be,Fe]=L.useState("local"),[J,We]=L.useState(()=>{var d;return((d=Qo(qo()).find(_=>_.path===$f))==null?void 0:d.content)??j_}),[ye,Ne]=L.useState([]),[O,te]=L.useState(!1),[ue,ce]=L.useState(""),[Se,E]=L.useState(""),[U,ne]=L.useState(null),[oe,xe]=L.useState(!1),[H,D]=L.useState(null),[ae,ve]=L.useState(!1),[Be,Ge]=L.useState({}),[_e,Oe]=L.useState(!1),[yt,Ce]=L.useState(0),[dt,$t]=L.useState(()=>{var d,_;return((d=jl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((_=jl[0])==null?void 0:_.board)??""}),[Tt,fr]=L.useState(()=>{var d,_;return((d=jl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((_=jl[0])==null?void 0:_.version)??""}),[$n,Mn]=L.useState(!1),[ui,Gr]=L.useState({top:0,left:0}),[vt,Dl]=L.useState(!1),[Vr,sa]=L.useState(!1),[Ol,en]=L.useState(!0),[mn,nr]=L.useState(""),[fi,Cl]=L.useState([]),[Nt,pn]=L.useState(null),[Lt,Yr]=L.useState(!1),[dr,mr]=L.useState({}),[hn,qt]=L.useState({}),[qe,lt]=L.useState(null),[it,Ot]=L.useState(null),[fc,Bl]=L.useState(""),[rr,Ll]=L.useState(()=>_h().clearTerminalOnRun),[pr,vs]=L.useState(()=>_h().simplifiedErrors),[di,xs]=L.useState(()=>typeof navigator<"u"?Xh(navigator):!1),$r=L.useRef(null),An=L.useRef(null),ot=L.useRef(null),oa=L.useRef(null),zt=L.useRef(null),_t=L.useRef(null),Ct=L.useRef(null),qn=L.useRef(null),qr=L.useRef(null),Kr=L.useRef(null),mi=L.useRef(null),_n=L.useRef(!1),gn=L.useRef(!1),hr=L.useRef(!1),Kt=L.useRef(""),bn=L.useRef(null),Kn=L.useRef(null),ln=L.useRef(null),mt=L.useRef(null),Xn=L.useRef(null),Xr=L.useRef(null),tn=L.useRef(0),yn=L.useRef(null),Qr=L.useRef(null),ca=L.useRef(null),Wr=L.useRef(null),pi=L.useRef([]),_r=L.useRef([]),Qn=L.useRef(null),Xt=ky(),he=c==="control"&&!!a&&f(),hi=he?(a==null?void 0:a.deviceID)??"ble":null,dc=Math.max(1,J.split(`
`).length),ua=new Blob([J]).size,ks=be==="pico"?"Picoen":"browseren",_i=L.useMemo(()=>[...new Set(jl.map(d=>d.board))],[]),zl=L.useMemo(()=>jl.filter(d=>d.board===dt),[dt]),Rt=jl.find(d=>d.board===dt&&d.version===Tt)??zl[0]??jl[0],Ul=Y||!!re||vt||Vr,vn=be==="pico",Il=vn?vt:Vr,jt=vn&&vt&&k&&!he||!vn&&Vr&&!!ln.current,Ss=Lt||Il&&!jt,ws=jt?"stdin":">>>",gr=jt?vn?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":vn?"Pico MicroPython":"Browser-MicroPython",fa=L.useMemo(()=>{const d=new Sy({onData:_=>{gn.current||!_n.current||(Kt.current=(Kt.current+_).slice(-240),/(^|\r?\n)>>> ?$/.test(Kt.current)&&Pl())},onLine:_=>{if(gn.current)return;const x=_.trimEnd();if(hr.current&&x.trim()){$("info",x);return}if(_n.current&&da(x)){Pl();return}_n.current&&x.trim()&&!mc(x)&&!x.includes("raw REPL")&&$("info",x)},onLog:$,onDisconnect:()=>{S(!1),Dl(!1),Yr(!1),_n.current=!1,hr.current=!1,Hl(),Kt.current="",tl(),$("warning","USB-forbindelse lukket.")}});return $r.current=d,d},[]);function $(d,_){V(x=>[...x.slice(-140),{level:d,text:_}])}function Es(d){V(_=>[..._.slice(-140),{level:"info",text:d,variant:"input"}])}function da(d){return d.trim()===">>>"}function mc(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Hl(){bn.current!==null&&(window.clearTimeout(bn.current),bn.current=null)}function Pl(){!_n.current||bn.current!==null||(bn.current=window.setTimeout(()=>{bn.current=null,_n.current&&(Dl(!1),_n.current=!1,Kt.current="",$("success","Pico-koden er færdig."),Dn())},0))}function Dn(){const d=ot.current;d&&ha(d,!1)}function Zr(d,_=J,x="error"){const R=zy(d,_);V(j=>[...j.slice(-140),{level:x,text:R.simple,technical:R.technical}])}function ct(d,_,x=be){Ee(d),Fe(x),We(_),qt(R=>({...R,[Yt(x,d)]:_})),Wn()}function br(d,_="pico"){Ee(d),Fe(_),We(""),lt(null),Gr({top:0,left:0}),Wn()}function Wn(){pi.current=[],_r.current=[],Qn.current=null}function Jr(){const d=zt.current;return{content:J,selectionStart:(d==null?void 0:d.selectionStart)??J.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??J.length}}function ma(d){const _=pi.current,x=_.at(-1);(x==null?void 0:x.content)===d.content&&x.selectionStart===d.selectionStart&&x.selectionEnd===d.selectionEnd||(_.push(d),_.length>$y&&_.shift(),_r.current=[])}function Ts(d,_){let x=0;const R=Math.min(d.length,_.length);for(;x<R&&d[x]===_[x];)x+=1;let j=d.length,Z=_.length;for(;j>x&&Z>x&&d[j-1]===_[Z-1];)j-=1,Z-=1;const se=d.slice(x,j),Ve=_.slice(x,Z),Te=Ve&&!se?"insert":se&&!Ve?"delete":"replace",Le=Ve.at(-1)??"";return{kind:Te,boundaryAfter:Te==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(Le)}}function Fl(d,_){if(_!=="typing")return Qn.current=null,!0;const x=Date.now(),R=Ts(J,d),j=Qn.current,Z=j!==null&&j.path===ee&&j.source===be&&j.kind===R.kind&&j.kind!=="replace"&&!j.boundaryAfter&&x-j.at<=qy;return Qn.current={path:ee,source:be,kind:R.kind,at:x,boundaryAfter:R.boundaryAfter},!Z}function On(d){We(d.content),qt(_=>({..._,[Yt(be,ee)]:d.content})),Bl(""),lt(null),window.requestAnimationFrame(()=>{const _=zt.current;_&&(_.focus(),_.selectionStart=Math.min(d.selectionStart,d.content.length),_.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function pa(){const d=pi.current.pop();return d?(Qn.current=null,_r.current.push(Jr()),On(d),!0):!1}function el(){const d=_r.current.pop();return d?(Qn.current=null,pi.current.push(Jr()),On(d),!0):!1}function Ut(d,_=(Z=>(Z=zt.current)==null?void 0:Z.selectionStart)()??d.length,x=Jr(),R=_,j="programmatic"){x&&d!==J&&Fl(d,j)&&ma(x),We(d),qt(se=>({...se,[Yt(be,ee)]:d})),Bl(""),wi(d,_),window.requestAnimationFrame(()=>{const se=zt.current;se&&(se.selectionStart=Math.min(_,d.length),se.selectionEnd=Math.min(R,d.length))})}function yr(d,_=be){qt(x=>{const R=Yt(_,d);if(!(R in x))return x;const j={...x};return delete j[R],j})}function gi(){return dr[ee]===J}function It(d,_){mr(x=>({...x,[d]:_}))}function Gl(d,_){It(d,_),qt(x=>({...x,[Yt("pico",d)]:_})),be==="pico"&&ee===d&&We(_)}function tl(){P([]),Ne([]),mr({}),qt({}),lt(null),Ee(d=>{const _=Qo(qo());if(_.find(j=>j.path===d))return d;const R=_[0];return Fe("local"),We(R.content),Wn(),R.path})}function Mt(d){xt(),D({value:100,label:d}),Wr.current=window.setTimeout(()=>{Wr.current=null,D(null)},900)}function xt(){Wr.current!==null&&(window.clearTimeout(Wr.current),Wr.current=null)}function vr(){return H?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(H.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:H.label}),u.jsxs("strong",{children:[Math.round(H.value),"%"]}),H.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:bi,"aria-label":"Stop handling",title:"Stop",children:u.jsx(rn,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,H.value))}%`}})})]}):null}function bi(){Xn.current&&Zn("Stopper læsning...",!0,!0)}function Zn(d="Stopper læsning...",_=!1,x=!1){var R;xt(),Qr.current=null,tn.current+=1,(R=Xn.current)==null||R.abort(),Xn.current=null,yn.current=null,de(null),G(!1),D(_?{value:(H==null?void 0:H.value)??0,label:d,cancellable:!1}:null),x&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function pc(d){var _;if(!(yn.current===d||Qr.current===d)){if(Qr.current=d,Xr.current){tn.current+=1,(_=Xn.current)==null||_.abort(),Xn.current=null,yn.current=null,br(d),de(d),G(!0),xt(),D({value:2,label:`Skifter til ${je(d)}...`,cancellable:!0});return}yi()}}function yi(){if(Xr.current)return;const d=Qr.current;if(!d)return;Qr.current=null;const _=tn.current+1;tn.current=_;const x=new AbortController;Xn.current=x,yn.current=d,br(d),de(d),G(!0),xt(),D({value:12,label:`Indlæser ${je(d)}...`,cancellable:!0});const R=(async()=>{try{const j=await b(d,(Z,se)=>{tn.current===_&&D({value:Z,label:se,cancellable:!0})},x.signal);if(x.signal.aborted||tn.current!==_)return;ct(d,j,"pico"),It(d,j),Mt("Fil indlæst")}catch(j){if(tn.current!==_)return;Zy(j)||x.signal.aborted?$("info",`Stoppede læsning af ${je(d)}.`):(D(null),$("error",j instanceof Error?j.message:"BLE læsning fejlede."))}})();Xr.current=R,R.finally(()=>{if(Xr.current!==R)return;Xr.current=null,Xn.current===x&&(Xn.current=null),yn.current===d&&(yn.current=null),!!Qr.current||(de(null),G(!1),x.signal.aborted&&D(null)),yi()})}async function nl(d){const _=gn.current;gn.current=!0;try{return await d()}finally{gn.current=_}}L.useEffect(()=>{if(!Ol)return;const d=qr.current;d&&(d.scrollTop=d.scrollHeight)},[z,Ol]),L.useEffect(()=>{yb({clearTerminalOnRun:rr,simplifiedErrors:pr})},[rr,pr]),L.useEffect(()=>{var d;zl.some(_=>_.version===Tt)||fr(((d=zl[0])==null?void 0:d.version)??"")},[zl,Tt]),L.useEffect(()=>{xs(Xh(navigator))},[]),L.useEffect(()=>{const d=()=>{const _=$r.current;An.current=null,ot.current=null,$r.current=null,_==null||_.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var _,x;xt(),(_=Kn.current)==null||_.dispose(),Kn.current=null,(x=ln.current)==null||x.dispose(),ln.current=null,window.removeEventListener("pagehide",d),d()}},[]),L.useEffect(()=>{const d=_=>{!(_.ctrlKey||_.metaKey)||_.key.toLowerCase()!=="s"||(_.preventDefault(),!Y&&ee.trim()&&!di&&!oe&&!U&&!O&&js())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[be,he,Y,k,J,ee,di,oe,U,O]);function lr(d,_,x){X(R=>{const j=Uf(R,d,_,x);return ss(j),j})}function Vl(d,_){X(x=>{const R=x.find(Te=>Te.path===d),Z=hn[Yt("local",d)]??(R==null?void 0:R.content),se=Z!==void 0&&ur(Z)!==ur(_)?Uf(x,e_(d,Jo(x)),Z,!1):x,Ve=Uf(se,d,_,!1);return ss(Ve),Ve}),qt(x=>({...x,[Yt("local",d)]:_})),be==="local"&&ee===d&&(We(_),Bl(""),lt(null),Wn())}const vi=mv(W,fe,hn,k||he);L.useEffect(()=>{he&&ut()},[he]),L.useEffect(()=>{const d=ca.current;d&&d!==hi&&tl(),ca.current=hi},[hi]);async function hc(){if(Xt.supported){A(!0);try{await fa.requestAndConnect();const d=new Z0(fa);An.current=d,ot.current=new ly(d),S(!0),Ce(0),await d.interrupt(),await _c(d),$("success","Sendte stop-signal til Pico-terminalen."),await ha(ot.current),await Rs(ot.current)}catch(d){$("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await fa.disconnect()}catch(_){$("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.");return}Ce(_=>{const x=_+1;return x>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Oe(!0)),x}),S(!1)}finally{A(!1)}}}async function _c(d){const _=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(_.error||!_.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function gc(){var d;try{await((d=$r.current)==null?void 0:d.disconnect()),An.current=null,ot.current=null,S(!1),tl()}catch(_){$("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.")}}async function an(d){const _=ot.current;if(_){G(!0),gn.current=!0;try{await d(_)}catch(x){D(null),$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{gn.current=!1,G(!1)}}}async function ut(d=!0){if(he){G(!0);try{const _=await h();P(_),d&&$("success",`Indlæste ${_.length} filer fra Pico via Bluetooth.`)}catch(_){$("error",_ instanceof Error?_.message:"BLE filhandling fejlede.")}finally{G(!1)}return}await ha(ot.current,d)}async function ha(d,_=!0){if(d){G(!0);try{const x=await nl(()=>d.list("/"));P(x),_&&$("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{G(!1)}}}async function Yl(){if(he){G(!0),D({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Ns((_,x)=>D({value:_,label:x}));Ne(d),Mt("Fil-tjek færdigt")}catch(d){D(null),$("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{G(!1)}return}await Rs(ot.current)}async function Ns(d){const _=[],x=Ji.filter(j=>j.kind==="library"&&!Ml(j));let R=0;for(const j of Ji){if(j.kind==="program"){_.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Ml(j)){_.push({...j,status:"unknown",detail:"Opdateres via USB"});continue}try{const Z=R/Math.max(1,x.length)*100,se=100/Math.max(1,x.length);$("info",`Tjekker ${j.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,Z),`Tjekker ${j.label} på Pico...`);const Ve=await b(j.path,(Le,ft)=>{d==null||d(Math.min(95,Z+Le/100*se),`${j.label}: ${ft}`)}),Te=ur(Ve)===ur(j.content);_.push({...j,status:Te?"ok":"outdated",detail:Te?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{_.push({...j,status:"missing",detail:"Mangler på Pico"})}finally{R+=1}}return d==null||d(100,"Fil-tjek færdigt"),_}async function Rs(d){if(d){G(!0);try{const _=await nl(()=>_a(d)),x=_;Ne(x)}catch(_){$("error",_ instanceof Error?_.message:"Runtime check fejlede.")}finally{G(!1)}}}async function _a(d){if(!d)return[];const _=[];for(const x of Ji){if(x.kind==="program"){_.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const R=await d.readText(x.path),j=ur(R)===ur(x.content);_.push({...x,status:j?"ok":"outdated",detail:j?"Matcher appens version":"Matcher ikke appens version"})}catch{_.push({...x,status:"missing",detail:"Mangler på Pico"})}}return _}async function bc(d=ee){if(he){pc(d);return}de(d),await an(async _=>{D({value:12,label:`Indlæser ${je(d)}...`});const x=await yc(_,d);ct(d,x,"pico"),It(d,x),Mt("Fil indlæst")}),de(null)}async function yc(d,_){var x;try{return await d.readText(_)}catch(R){await((x=An.current)==null?void 0:x.stop().catch(()=>{})),await Ky(120);try{return await d.readText(_)}catch{throw R}}}function vc(){xe(!0)}async function js(){if(be==="pico"){if(!k&&!he){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await ga();return}xi()}function xi(){if(Al(ee)){$("error",fs);return}lr(ee,J,!1),Fe("local"),qt(d=>({...d,[Yt("local",ee)]:J})),xe(!1),$("success",`Gemte ${je(ee)} lokalt.`)}async function ga(){if(xe(!1),Al(ee))return D(null),$("error",fs),!1;if(D({value:0,label:"Starter gemning..."}),he){G(!0);try{return await p(ee,J,(_,x)=>D({value:_,label:x})),It(ee,J),Fe("pico"),qt(_=>({..._,[Yt("pico",ee)]:J})),Mt("Gemt på Pico via Bluetooth"),$("success",`Gemte ${je(ee)} på Pico via Bluetooth.`),Xo(ee)&&(Mn(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await ut(!1),!0}catch(_){return D(null),$("error",_ instanceof Error?_.message:"BLE gem fejlede."),!1}finally{G(!1)}}if(!ot.current)return D(null),!1;let d=!1;return await an(async _=>{xr(ee,"pico")?await _.replaceTextSafely(ee,J,(x,R)=>D({value:x,label:R})):await _.writeText(ee,J,(x,R)=>D({value:x,label:R})),It(ee,J),Fe("pico"),qt(x=>({...x,[Yt("pico",ee)]:J})),Mt("Gemt på Pico via USB"),$("success",`Gemte ${ee}.`),await ut(),await Yl(),d=!0}),d}function xc(){Ms(je(ee),J),xe(!1),$("success",`Downloadede ${je(ee)}.`)}function Ms(d,_){const x=new Blob([_],{type:"text/plain;charset=utf-8"}),R=URL.createObjectURL(x),j=document.createElement("a");j.href=R,j.download=d,j.click(),URL.revokeObjectURL(R)}async function ba(d){G(!0),Mn(!1),D({value:10,label:"Genstarter Pico..."});try{await y(d)?(Mt("Pico genforbundet"),$("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await ut()):(D(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(_){D(null),$("error",_ instanceof Error?_.message:"Genstart/genforbindelse mislykkedes.")}finally{G(!1)}}function As(d){var Z,se;const _=d??{path:ee,source:be},x=_.source==="pico"?"Pico":"browser",R=(d==null?void 0:d.versions.length)??(_.source==="pico"?((Z=ea(W).get(_.path))==null?void 0:Z.length)??0:((se=ea(Jo(fe)).get(_.path))==null?void 0:se.length)??0),j=R>0?` Det sletter også filens versionshistorik (${R} gemte versioner).`:"";ne(null),l({title:"Slet fil",message:`Vil du slette ${je(_.path)} fra ${x}?${j}`,confirmLabel:"Slet",onConfirm:()=>{wc(_)}})}function kc(){l({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Sc()}})}async function Sc(){if(!ot.current){$("error","Forbind Picoen med USB først.");return}await an(async d=>{await d.delete("/DeviceSettings.txt").catch(_=>{const x=_ instanceof Error?_.message:"";if(!/ENOENT|No such file|not found/i.test(x))throw _}),mr(_=>{const x={..._};return delete x["/DeviceSettings.txt"],x}),yr("/DeviceSettings.txt","pico"),$("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await ut()})}function Ds(d,_,x){const R=vi.filter(se=>se.kind==="file"&&se.type==="file"),j=R.findIndex(se=>se.path===d&&se.source===_);if(j===-1)return null;const Z=se=>!!se&&!(se.path===d&&se.source===_)&&!(se.source===_&&x.has(se.path))&&!(he&&Ml(se));for(const se of[!0,!1])for(let Ve=1;Ve<R.length;Ve+=1){const Te=R[j+Ve];if(Z(Te)&&(!se||Te.source===_))return Te;const Le=R[j-Ve];if(Z(Le)&&(!se||Le.source===_))return Le}return null}function ya(d){if(d){zs(d);return}const _=Qo(qo())[0];ct(_.path,hn[Yt("local",_.path)]??_.content,"local")}async function wc(d){const _=d.path,x=d.source,R=_===ee&&x===be;if(x==="local"){const Te=ea(Jo(fe)).get(_)??[],Le=new Set([_,...Te.map(at=>at.path)]),ft=R?Ds(_,x,Le):null,Qt=fe.filter(at=>!Le.has(at.path));X(Qt),ss(Qt);for(const at of Le)yr(at,"local");R&&ya(ft);const Ae=Te.length>0?` og ${Te.length} gemte versioner`:"";$("warning",`Slettede ${je(_)}${Ae} fra browseren.`);return}const j=ea(W).get(_)??[],Z=[_,...j.map(Te=>Te.path)],se=R?Ds(_,x,new Set(Z)):null;if(he){G(!0);try{for(const Le of Z)await g(Le);mr(Le=>{const ft={...Le};for(const Qt of Z)delete ft[Qt];return ft});for(const Le of Z)yr(Le,"pico");const Te=j.length>0?` og ${j.length} gemte versioner`:"";$("warning",`Slettede ${je(_)}${Te} på Pico via Bluetooth.`),await ut(),R&&ya(se)}catch(Te){$("error",Te instanceof Error?Te.message:"BLE sletning fejlede.")}finally{G(!1)}return}if(!ot.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Ve=!1;await an(async Te=>{for(const ft of Z)await Te.delete(ft);mr(ft=>{const Qt={...ft};for(const Ae of Z)delete Qt[Ae];return Qt});const Le=j.length>0?` og ${j.length} gemte versioner`:"";$("warning",`Slettede ${_}${Le}.`);for(const ft of Z)yr(ft,"pico");await ut(),await Yl(),Ve=!0}),Ve&&R&&ya(se)}async function Ec(d){if(!d)return;const _=Qy(d.name);if(!_){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Al(_)){$("error",fs);return}if(d.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const x=await d.text();if(be==="local"){lr(_,x,!0),ct(_,x,"local"),$("success",`Importerede ${je(_)} i browseren.`);return}if(!k&&!he){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&Ml({path:_})){$("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(D({value:0,label:"Uploader fil til Pico..."}),he){G(!0);try{await p(_,x,(j,Z)=>D({value:j,label:Z})),It(_,x),ct(_,x,"pico"),Mt("Fil uploadet til Pico"),$("success",`Importerede ${je(_)} på Pico via Bluetooth.`),await ut()}catch(j){D(null),$("error",j instanceof Error?j.message:"Kunne ikke importere filen til Pico.")}finally{G(!1)}return}if(!ot.current){D(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await an(async j=>{xr(_,"pico")?await j.replaceTextSafely(_,x,(Z,se)=>D({value:Z,label:se})):await j.writeText(_,x,(Z,se)=>D({value:Z,label:se})),It(_,x),ct(_,x,"pico"),Mt("Fil uploadet til Pico"),$("success",`Importerede ${je(_)} på Pico.`),await ut(),await Yl()})}async function Tc(){ce(""),te(!0)}function Nc(){const d=$h(ue);if(!d)return;if(Al(d)){$("error",fs);return}const _=be;if(xr(d,_)){$("error",`Der findes allerede en fil med navnet ${je(d)} i ${_==="pico"?"Pico":"browseren"}.`);return}if(_==="local"){lr(d,"",!1),ct(d,"","local"),te(!1),$("success",`Oprettede ${je(d)} i browseren.`);return}va(d)}async function va(d){if(!k&&!he){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(te(!1),D({value:0,label:"Opretter fil på Pico..."}),he){G(!0);try{await p(d,"",(_,x)=>D({value:_,label:x})),It(d,""),ct(d,"","pico"),Mt("Fil oprettet på Pico"),$("success",`Oprettede ${je(d)} på Pico via Bluetooth.`),await ut()}catch(_){D(null),$("error",_ instanceof Error?_.message:"Kunne ikke oprette fil på Pico.")}finally{G(!1)}return}if(!ot.current){D(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await an(async _=>{await _.writeText(d,"",(x,R)=>D({value:x,label:R})),It(d,""),ct(d,"","pico"),Mt("Fil oprettet på Pico"),$("success",`Oprettede ${je(d)} på Pico.`),await ut()})}function $l(d){d.type==="file"&&(ne(d),E(Wy(d.path)))}async function Rc(d){if(!U)return;const _=U.path;if(ne(null),U.source==="local"){const x=fe.find(R=>R.path===d.path);if(!x){$("error","Kunne ikke finde versionen i browseren.");return}Vl(_,x.content),ct(_,x.content,"local"),$("success",`Gendannede ${je(d.path)} i browseren.`);return}if(D({value:0,label:"Gendanner version..."}),he){G(!0);try{const x=await b(d.path);await p(_,x,(R,j)=>D({value:R,label:j})),It(_,x),ct(_,x,"pico"),Mt("Version gendannet"),await ut(!1)}catch(x){D(null),$("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{G(!1)}return}ot.current&&await an(async x=>{await x.replaceTextSafely(_,await x.readText(d.path),(j,Z)=>D({value:j,label:Z}));const R=await x.readText(_);It(_,R),ct(_,R,"pico"),Mt("Version gendannet"),await ut()})}function Os(d){const _=(U==null?void 0:U.source)==="local"?"browseren":"Pico";l({title:"Slet version",message:`Vil du slette ${je(d.path)} fra ${_}?`,confirmLabel:"Slet",onConfirm:()=>{Cs(d)}})}async function Cs(d){if((U==null?void 0:U.source)==="local"){const _=fe.filter(x=>x.path!==d.path);X(_),ss(_),yr(d.path,"local"),ne(x=>x&&{...x,versions:x.versions.filter(R=>R.path!==d.path)}),$("warning",`Slettede ${je(d.path)} fra browserens versionshistorik.`);return}if(he){G(!0);try{await g(d.path),await ut(!1),ne(_=>_&&{..._,versions:_.versions.filter(x=>x.path!==d.path)})}catch(_){$("error",_ instanceof Error?_.message:"Kunne ikke slette versionen.")}finally{G(!1)}return}ot.current&&await an(async _=>{await _.delete(d.path),await ut(!1),ne(x=>x&&{...x,versions:x.versions.filter(R=>R.path!==d.path)})})}async function Bs(){var x;if(!U)return;const d=U,_=fv(d.path,R=>xr(R,d.source));if(!_){$("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${je(d.path)}.`);return}if(d.source==="local"){const R=hn[Yt("local",d.path)]??((x=fe.find(j=>j.path===d.path))==null?void 0:x.content)??"";lr(_,R,!1),ct(_,R,"local"),ne(null),$("success",`Duplikerede ${je(d.path)} til ${je(_)} i browseren.`);return}if(ne(null),D({value:0,label:"Duplikerer fil..."}),he){G(!0);try{const R=dr[d.path]??await b(d.path);await p(_,R,(j,Z)=>D({value:j,label:Z})),It(_,R),ct(_,R,"pico"),Mt("Fil duplikeret"),await ut(!1),$("success",`Duplikerede ${je(d.path)} til ${je(_)} på Pico via Bluetooth.`)}catch(R){D(null),$("error",R instanceof Error?R.message:"Kunne ikke duplikere filen.")}finally{G(!1)}return}if(!ot.current){D(null),$("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await an(async R=>{const j=await R.readText(d.path);await R.writeText(_,j,(Z,se)=>D({value:Z,label:se})),It(_,j),ct(_,j,"pico"),Mt("Fil duplikeret"),await ut(!1),$("success",`Duplikerede ${je(d.path)} til ${je(_)} på Pico.`)})}async function Ls(){if(!U)return;const d=U,_=zf(Se,ds(d.path));if(!_||_===d.path)return;if(Al(_)){$("error",fs);return}if(xr(_,d.source)){$("error",`Der findes allerede en fil med navnet ${je(_)}.`);return}const x=d.source==="local",R=d.source==="pico";if(he&&R&&(Xo(d.path)||Xo(_))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}G(!0);try{if(R)if(he){const j=dr[d.path]??await b(d.path);await p(_,j,(Z,se)=>D({value:Z,label:se})),await g(d.path),mr(Z=>({...n_(Z,d.path,_),[_]:j}))}else ot.current&&(await nl(()=>ot.current.rename(d.path,_)),mr(j=>n_(j,d.path,_)));x&&X(j=>{const Z=j.map(se=>se.path===d.path?{...se,path:_,updatedAt:Date.now()}:se);return ss(Z),Z}),ee===d.path&&be===d.source&&Ee(_),qt(j=>_v(j,d.source,d.path,_)),ne(null),E(""),$("success",`Omdøbte ${je(d.path)} til ${je(_)}.`),R&&await ut()}catch(j){$("error",j instanceof Error?j.message:"Kunne ikke omdøbe filen.")}finally{D(null),G(!1)}}function xr(d,_){return _==="pico"?W.some(x=>x.path===d):fe.some(x=>x.path===d)}async function rl(d,_){if(!xr(d,"pico"))return;const x=e_(d,W),R=dr[d]??await b(d);_!==void 0&&ur(R)===ur(_)||await p(x,R)}function zs(d){if(d.type!=="file"){he&&Zn(void 0,!1),Ee(d.path),Fe(d.source);return}if(he&&Ml(d)){$("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){he&&Zn(void 0,!1);const x=fe.find(R=>R.path===d.path);ct(d.path,hn[Yt("local",d.path)]??(x==null?void 0:x.content)??"","local");return}const _=Yt("pico",d.path);if(Object.prototype.hasOwnProperty.call(hn,_)){he&&Zn(void 0,!1),ct(d.path,hn[_],"pico");return}if(Object.prototype.hasOwnProperty.call(dr,d.path)){he&&Zn(void 0,!1),ct(d.path,dr[d.path],"pico");return}bc(d.path)}async function Us(){if(!k&&!he){const d=qh();Ne(d),Ge(Kh(d)),ve(!0),D(null);return}G(!0),D({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=ye.length>0?ye:he?await Ns((_,x)=>D({value:_,label:x})):await nl(()=>_a(ot.current));Ne(d),Ge(Kh(d)),ve(!0),D(null)}catch(d){D(null),$("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{G(!1)}}async function jc(){if(ve(!1),he){G(!0);try{const _=(ye.length>0?ye:Ji.map(R=>({...R,status:"unknown",detail:"Ikke tjekket"}))).filter(R=>Be[R.id]&&!Ml(R));if(_.length===0){$("info","Ingen filer valgt til installation.");return}let x=null;D({value:0,label:"Starter installation..."});for(const[R,j]of _.entries()){$("info",`Installerer ${j.label} via Bluetooth...`);const Z=R/_.length*100,se=100/_.length;await rl(j.path,j.content),await p(j.path,j.content,(Ve,Te)=>{D({value:Math.min(99,Z+Ve/100*se),label:`${j.label}: ${Te}`})}),Gl(j.path,j.content),$("success",`Installerede ${j.label}.`),j.kind==="library"&&(x=j),Xo(j.path)&&Mn(!0)}Mt("Installation færdig"),await ut(!1),await Yl(),x&&ll(x)}catch(d){D(null),$("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{G(!1)}return}await an(async d=>{const x=(ye.length>0?ye:Ji.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Be[j.id]);if(x.length===0){$("info","Ingen filer valgt til installation.");return}let R=null;D({value:0,label:"Starter installation..."});for(const[j,Z]of x.entries()){$("info",`Installerer ${Z.label}...`);const se=j/x.length*100,Ve=100/x.length,Te=await d.readText(Z.path).catch(()=>null);Te!==null&&ur(Te)===ur(Z.content)?(D({value:Math.min(99,se+Ve),label:`${Z.label}: Allerede nyeste version`}),$("info",`${Z.label} findes allerede i samme version.`)):(await d.replaceTextSafely(Z.path,Z.content,(Le,ft)=>{D({value:Math.min(99,se+Le/100*Ve),label:`${Z.label}: ${ft}`})},{createBackup:!0}),$("success",`Installerede ${Z.label}.`)),Gl(Z.path,Z.content),Z.kind==="library"&&(R=Z)}Mt("Installation færdig"),await ut(!1),await Yl(),R&&ll(R)})}function xa(){return(ye.length>0?ye:qh()).filter(_=>Be[_.id])}function Is(){const d=xa();if(d.length===0){$("info","Ingen filer valgt.");return}for(const _ of d)Vl(_.path,_.content);ve(!1),$("success",`Gemte ${d.length} filer i browseren.`)}function ql(){const d=xa();if(d.length===0){$("info","Ingen filer valgt.");return}d.forEach((_,x)=>{window.setTimeout(()=>{Ms(je(_.path),_.content)},x*120)}),ve(!1),$("success",`Starter download af ${d.length} filer.`)}function ll(d){ct(d.path,d.content,"pico"),It(d.path,d.content),$("info",`Åbnede ${d.label} i editoren.`)}function Mc(d,_){Ge(x=>{if(d.kind!=="program")return{...x,[d.id]:_};const R={...x};for(const j of ye)j.kind==="program"&&(R[j.id]=!1);return R[d.id]=_,R})}async function ki(){if(Dc(),he&&be==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(be==="local"){await Hs();return}const d=An.current;if(!d){$("error",`${je(ee)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(ee.endsWith(".py")){if(!gi()&&($("info",`${je(ee)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await ga())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(Y)return;Hl(),Kt.current="",en(!0);try{await d.runFile(ee,()=>{Hl(),Kt.current="",hr.current=!1,Dl(!0),_n.current=!0}),$("success",`Kører ${je(ee)}. Brug Stop for at afbryde.`)}catch(_){Dl(!1),_n.current=!1,Hl(),Kt.current="",$("error",_ instanceof Error?_.message:"Kunne ikke starte koden.")}return}G(!0);try{const _=await d.exec(J,2e4);_.output.trim()&&$("info",_.output),_.error.trim()&&Zr(_.error,J),!_.output.trim()&&!_.error.trim()&&$("success","Koden kørte uden output.")}catch(_){$("error",_ instanceof Error?_.message:"Kunne ikke køre koden.")}finally{G(!1)}}async function Hs(){const d=Vf(J,{allowInput:!0});if(d.some(R=>R.level==="error")){for(const R of d){const j=R.line?`Linje ${R.line}: `:"";$(R.level==="error"?"error":"warning",`${j}${R.text}`)}return}/\binput\s*\(/.test(J)&&!N_()&&$("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const _=new AbortController;mt.current=_;const x=new My;ln.current=x,G(!0),sa(!0),en(!0),$("info",k?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const R=[],j=await x.run(J,{timeoutMs:null,signal:_.signal,onOutput:Te=>{R.push(Te),$("info",Te)}});for(const Te of j.issues){const Le=Te.line?`Linje ${Te.line}: `:"";$(Te.level==="error"?"error":"warning",`${Le}${Te.text}`)}const Z=[...R,j.output].filter(Boolean).join(`
`).trim(),se=j.output.trim();!j.error.trim()&&Jy(Z)?Zr(Z,J):(se&&$("info",se),j.error.trim()&&Zr(j.error,J,j.unavailable?"warning":"error")),j.ok&&!Z&&!j.error.trim()&&$("success","Browser-MicroPython kørte uden output.")}finally{mt.current=null,ln.current=null,x.dispose(),sa(!1),G(!1)}}async function Ps(){var _,x,R;if(Vr){(_=mt.current)==null||_.abort(),(x=ln.current)==null||x.stop(),$("warning","Stoppede Browser-MicroPython."),en(!0);return}if(!vn&&Lt){(R=Kn.current)==null||R.reset(),Yr(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),en(!0);return}const d=An.current;if(d)try{await d.stop(),$("warning","Stoppede koden på Pico.")}catch(j){$("error",j instanceof Error?j.message:"Kunne ikke stoppe koden.")}finally{Dl(!1),_n.current=!1,Hl(),Kt.current="",en(!0),Dn()}}function ka(){const d=qr.current;if(!d)return;const _=d.scrollHeight-d.scrollTop-d.clientHeight<12;en(_)}function Sa(){V([]),en(!0)}function Fs(){window.requestAnimationFrame(()=>{const d=qr.current;d&&(d.scrollTop=d.scrollHeight)})}async function Si(){const d=jt?mn:mn.trimEnd();if(jt){if(!vn){const R=ln.current;if(!R){$("warning","Browser-MicroPython kører ikke lige nu."),xn();return}nr(""),en(!0),Es(d),R.sendInput(d),xn();return}const x=An.current;if(!x){$("warning","Pico-terminalen er ikke forbundet."),xn();return}nr(""),en(!0);try{await x.sendProgramInput(d)}catch(R){$("error",R instanceof Error?R.message:"Kunne ikke sende input til Pico-koden.")}finally{xn()}return}if(!d.trim())return;if(Cl(x=>(x.at(-1)===d?x:[...x,d]).slice(-80)),pn(null),Ot(null),Il){$("warning",vn?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),xn();return}if(!vn){const x=Vf(d);if(x.some(j=>j.level==="error")){for(const j of x){const Z=j.line?"Linje "+j.line+": ":"";$(j.level==="error"?"error":"warning",Z+j.text)}xn();return}const R=Kn.current??new jy;Kn.current=R,nr(""),Yr(!0),en(!0),$("info",">>> "+d);try{let j=!1;const Z=await R.send(d,{timeoutMs:15e3,onOutput:Ve=>{j=!0,$("info",Ve)}}),se=Z.output.trim();se&&!j&&$("info",se),Z.error.trim()&&Zr(Z.error,d,Z.unavailable?"warning":"error")}catch(j){$("error",j instanceof Error?j.message:"Browser-MicroPython-terminalen fejlede.")}finally{Yr(!1),xn()}return}if(he){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),xn();return}const _=An.current;if(!k||!_){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),xn();return}nr(""),Yr(!0),en(!0),hr.current=!0,$("info",">>> "+d);try{await _.sendFriendlyLine(d)}catch(x){hr.current=!1,$("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Yr(!1),xn()}}function xn(){window.requestAnimationFrame(()=>{const d=Kr.current;if(!d||d.disabled)return;d.focus();const _=d.value.length;d.selectionStart=_,d.selectionEnd=_})}function Gs(d,_,x){if(x.length===0)return null;const R=k||he;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:_})]}),u.jsx("div",{className:"ide-install-scroll",children:x.map(j=>{const Z=he&&Ml(j);return u.jsxs("label",{className:`ide-install-row ${Z?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Be[j.id],disabled:Z,onChange:se=>Mc(j,se.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Ac(j),R&&j.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${j.status}`,children:Z?"USB":dv(j.status)})]}),u.jsx("small",{children:j.description})]})]},j.id)})})]})}function Ac(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Dc(){rr&&V([]),en(!0)}function wa(d,_){const x=d.indexOf(`
`,_);return x===-1?d.length:x}function wi(d,_){if(Wh(d,_)){lt(null);return}const x=Kf(d,_);if(!x||x.query.length<1){lt(null);return}const R=Qh(d,_,!0).slice(0,8),j=Zh(zt.current,x.start,R.length);R.length>0&&j?(lt({items:R,selected:0,start:x.start,end:_,position:j}),kr(qn.current,0)):lt(null)}function Ht(d,_){if(Wh(d,_)){Ot(null);return}const x=Kf(d,_);if(!x||x.query.length<1){Ot(null);return}const R=Qh(d,_,!1).slice(0,8),j=Zh(Kr.current,x.start,R.length);R.length>0&&j?(Ot({items:R,selected:0,start:x.start,end:_,position:j}),kr(mi.current,0)):Ot(null)}function il(d){const _=d.value.slice(d.selectionStart,d.selectionEnd);Bl(av(_)?_:"")}function kr(d,_){window.requestAnimationFrame(()=>{const x=d==null?void 0:d.querySelector(`[data-autocomplete-index="${_}"]`);x==null||x.scrollIntoView({block:"nearest"})})}function Ei(d=qe==null?void 0:qe.items[qe.selected]){if(!d||!qe)return;const _=Jr(),x=J.slice(0,qe.start)+d.insert+J.slice(qe.end),R=qe.start+d.insert.length-(d.insert.endsWith("()")?1:0);lt(null),Ut(x,R,_),window.requestAnimationFrame(()=>{const j=zt.current;j&&j.focus()})}function Ea(d=it==null?void 0:it.items[it.selected]){if(!d||!it)return;const _=mn.slice(0,it.start)+d.insert+mn.slice(it.end),x=it.start+d.insert.length-(d.insert.endsWith("()")?1:0);nr(_),Ot(null),window.requestAnimationFrame(()=>{const R=Kr.current;R&&(R.focus(),R.selectionStart=x,R.selectionEnd=x)})}function Vs(d){const _=zt.current;if(!_)return!1;const x=_.selectionStart,R=_.selectionEnd,j={content:J,selectionStart:x,selectionEnd:R},Z=J.lastIndexOf(`
`,x-1)+1,se=R>x&&J[R-1]===`
`?R-1:R,Ve=wa(J,se),Te=Ve<J.length?Ve+1:Ve,Le=J.slice(Z,Te);if(d<0){if(Z===0)return!1;const Jn=J.lastIndexOf(`
`,Z-2)+1,Cn=J.slice(Jn,Z),wr=J.slice(0,Jn)+Le+Cn+J.slice(Te),ir=-Cn.length;return Ut(wr,x+ir,j,R+ir),!0}if(Te>=J.length)return!1;const ft=wa(J,Te),Qt=ft<J.length?ft+1:ft,Ae=J.slice(Te,Qt),at=J.slice(0,Z)+Ae+Le+J.slice(Qt),Sr=Ae.length;return Ut(at,x+Sr,j,R+Sr),!0}function Ta(d){var Qt;if(Ul){(d.key==="Enter"||d.key==="Tab"||(d.ctrlKey||d.metaKey)&&["z","y","s"].includes(d.key.toLowerCase()))&&d.preventDefault();return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?el():pa())&&lt(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),el()&&lt(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!Y&&ee.trim()&&js();return}if(d.altKey&&!d.ctrlKey&&!d.metaKey&&(d.key==="ArrowUp"||d.key==="ArrowDown")){d.preventDefault(),Vs(d.key==="ArrowUp"?-1:1)&&lt(null);return}if(qe){if(d.key==="ArrowDown"){d.preventDefault(),lt(Ae=>{if(!Ae)return Ae;const at=(Ae.selected+1)%Ae.items.length;return kr(qn.current,at),{...Ae,selected:at}});return}if(d.key==="ArrowUp"){d.preventDefault(),lt(Ae=>{if(!Ae)return Ae;const at=(Ae.selected-1+Ae.items.length)%Ae.items.length;return kr(qn.current,at),{...Ae,selected:at}});return}if(d.key==="Tab"){d.preventDefault(),Ei();return}if(d.key==="Enter"){if(!(qe.items[qe.selected]&&A_(qe.items[qe.selected],J.slice(qe.start,qe.end)))){d.preventDefault(),Ei();return}lt(null)}if(d.key==="Escape"){d.preventDefault(),lt(null);return}}if(d.key==="Enter"){d.preventDefault();const Ae=d.currentTarget,at=Ae.selectionStart,Sr=Ae.selectionEnd,Jn={content:J,selectionStart:at,selectionEnd:Sr},Cn=J.lastIndexOf(`
`,at-1)+1,wr=J.slice(Cn,at),ir=((Qt=wr.match(/^[ \t]*/))==null?void 0:Qt[0])??"",sn=wr.trimEnd().endsWith(":")?"    ":"",Er=`
${ir}${sn}`,Wt=J.slice(0,at)+Er+J.slice(Sr),Bn=at+Er.length;Ut(Wt,Bn,Jn),window.requestAnimationFrame(()=>{Ae.selectionStart=Bn,Ae.selectionEnd=Bn});return}if(d.key!=="Tab")return;d.preventDefault();const _=d.currentTarget,x=_.selectionStart,R=_.selectionEnd,j={content:J,selectionStart:x,selectionEnd:R},Z="    ";if(d.shiftKey){const Ae=J.lastIndexOf(`
`,x-1)+1,at=x===R?wa(J,x):R,Sr=J.slice(Ae,at);let Jn=0,Cn=0;const wr=Sr.replace(/(^|\n)( {1,4}|\t)/g,(sn,Er,Wt,Bn)=>{const Ti=Wt.length;return Ae+Bn<x&&(Jn+=Ti),Cn+=Ti,Er});if(Cn===0)return;const ir=J.slice(0,Ae)+wr+J.slice(at);Ut(ir,Math.max(Ae,x-Jn),j,x===R?Math.max(Ae,x-Jn):Math.max(Ae,R-Cn)),window.requestAnimationFrame(()=>{_.selectionStart=Math.max(Ae,x-Jn),_.selectionEnd=x===R?_.selectionStart:Math.max(_.selectionStart,R-Cn)});return}if(x===R){const Ae=J.slice(0,x)+Z+J.slice(R);Ut(Ae,x+Z.length,j),window.requestAnimationFrame(()=>{_.selectionStart=x+Z.length,_.selectionEnd=x+Z.length});return}const se=J.lastIndexOf(`
`,x-1)+1,Te=J.slice(se,R).replace(/^/gm,Z),Le=Te.split(`
`).length,ft=J.slice(0,se)+Te+J.slice(R);Ut(ft,x+Z.length,j,R+Le*Z.length),window.requestAnimationFrame(()=>{_.selectionStart=x+Z.length,_.selectionEnd=R+Le*Z.length})}function Oc(d){if(jt){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),Si());return}if(it){if(d.key==="ArrowDown"){d.preventDefault(),Ot(_=>{if(!_)return _;const x=(_.selected+1)%_.items.length;return kr(mi.current,x),{..._,selected:x}});return}if(d.key==="ArrowUp"){d.preventDefault(),Ot(_=>{if(!_)return _;const x=(_.selected-1+_.items.length)%_.items.length;return kr(mi.current,x),{..._,selected:x}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),Ea();return}if(d.key==="Escape"){d.preventDefault(),Ot(null);return}}if(d.key==="Tab"){d.preventDefault();const _=d.currentTarget,x=_.selectionStart,R=_.selectionEnd,j="    ",Z=mn.slice(0,x)+j+mn.slice(R),se=x+j.length;nr(Z),pn(null),Ot(null),window.requestAnimationFrame(()=>{_.selectionStart=se,_.selectionEnd=se});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===mn.length&&d.currentTarget.selectionEnd===mn.length)||fi.length===0)return;d.preventDefault();const x=d.key==="ArrowUp"?Nt===null?fi.length-1:Math.max(0,Nt-1):Nt===null||Nt+1>=fi.length?null:Nt+1;pn(x);const R=x===null?"":fi[x]??"";nr(R),Ot(null),en(!0),window.requestAnimationFrame(()=>{const j=Kr.current;j&&(j.selectionStart=R.length,j.selectionEnd=R.length,Fs())});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),Si())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(td,{title:"Pico Kodeværksted",onMenu:()=>s()}),di?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Tc,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(rn,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=oa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(rn,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>ut(),disabled:!k&&!he||Y,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(rn,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:vi.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):vi.map(d=>{if(d.kind==="separator"){const j=d.id==="pico-files"&&!k&&!he;return u.jsxs(L.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),j&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const _=he&&Ml(d),x=hn[Yt(d.source,d.path)],R=x!==void 0&&x!==uv(d,fe,dr);return u.jsxs("div",{className:`ide-file-row ${ee===d.path&&be===d.source?"active":""} ${_?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>zs(d),disabled:_,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:R?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${R?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>$l(d),disabled:d.type!=="file"||Y||_,"aria-label":`Filvalg for ${d.name}`,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(rn,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&u.jsx("span",{className:`ide-usb-status ${Xt.supported?"available":"unavailable"}`,title:Xt.message,"data-tooltip":Xt.message,role:"img","aria-label":Xt.message,tabIndex:0,children:"!"})]}),he&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:k?gc:hc,disabled:!Xt.supported||T,children:T?"Forbinder...":k?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Us,disabled:he||Y,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:kc,disabled:!k||Y,children:"Nulstil enhed"})]}),he&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(rn,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Us,disabled:Y,children:"Startprogrammer og biblioteker"})]}),!he&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Oe(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[je(ee),u.jsxs("small",{children:[ua," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:ki,disabled:Y,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ps,disabled:!Vr&&!(!vn&&Lt)&&(!k||!vt),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:vc,disabled:Y||!ee.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>As(),disabled:Y||!ee.trim(),children:"Slet"})]})]}),vr(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{ref:Ct,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-ui.top}px)`},children:Array.from({length:dc},(d,_)=>u.jsx("span",{children:_+1},_))}),u.jsx("pre",{ref:_t,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-ui.left}px, ${-ui.top}px)`},children:cv(J,fc)}),u.jsx("textarea",{ref:zt,className:"ide-editor",value:J,onChange:d=>Ut(d.target.value,d.target.selectionStart,Jr(),d.target.selectionEnd,"typing"),onKeyDown:Ta,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||wi(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{wi(d.currentTarget.value,d.currentTarget.selectionStart),il(d.currentTarget)},onSelect:d=>il(d.currentTarget),onScroll:d=>{const{scrollTop:_,scrollLeft:x}=d.currentTarget;Ct.current&&(Ct.current.style.transform=`translateY(${-_}px)`),_t.current&&(_t.current.style.transform=`translate(${-x}px, ${-_}px)`),Gr({top:_,left:x}),qe&&wi(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:Ul,"aria-busy":Ul,spellCheck:!1}),qe&&u.jsx("div",{ref:qn,className:`ide-autocomplete placement-${qe.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:qe.position.left,top:qe.position.top,maxHeight:qe.position.maxHeight},children:(qe.position.placement==="above"?qe.items.map((d,_)=>({item:d,index:_})).reverse():qe.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===qe.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),Ei(d)},role:"option","aria-selected":_===qe.selected,children:d.label},d.label))}),re&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",je(re),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${pr?"":"active"}`,type:"button",onClick:()=>vs(d=>!d),"aria-label":pr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!pr,title:pr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${rr?"active":""}`,type:"button",onClick:()=>Ll(d=>!d),"aria-pressed":rr,title:rr?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Sa,disabled:z.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:qr,onScroll:ka,onClick:()=>{var d;return(d=Kr.current)==null?void 0:d.focus()},children:[z.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):z.map((d,_)=>u.jsx("div",{className:`term-line ${d.variant==="input"?"term-input-echo":`term-${d.level}`}`,children:d.technical&&!pr?d.technical:d.text},`${_}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Il&&!jt?"locked":""} ${jt?"stdin":""}`,onSubmit:d=>{d.preventDefault(),Si()},children:[u.jsx("span",{"aria-hidden":"true",children:ws}),u.jsx("textarea",{ref:Kr,value:mn,onChange:d=>{nr(d.target.value),pn(null),jt?Ot(null):Ht(d.target.value,d.target.selectionStart)},onKeyDown:Oc,onKeyUp:d=>{jt||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Ht(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{jt||Ht(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:Ss,placeholder:gr,"aria-label":jt?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:gr,rows:Math.max(1,mn.split(`
`).length)})]}),it&&u.jsx("div",{ref:mi,className:`ide-autocomplete ide-repl-autocomplete placement-${it.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:it.position.left,top:it.position.top,maxHeight:it.position.maxHeight},children:(it.position.placement==="above"?it.items.map((d,_)=>({item:d,index:_})).reverse():it.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===it.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),Ea(d)},role:"option","aria-selected":_===it.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:oa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var _;Ec((_=d.target.files)==null?void 0:_[0]),d.currentTarget.value=""}}),oe&&u.jsx(Dt,{title:"Gem fil",onClose:()=>xe(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void ga(),disabled:!k&&!he||Y,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:xc,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:xi,children:"Gem filen i browseren"})]})}),ae&&u.jsx(Dt,{title:"Startprogrammer og biblioteker",onClose:()=>ve(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:k||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[Gs("Startprogrammer (main.py)","Starter automatisk på Picoen.",ye.filter(d=>d.kind==="program")),Gs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",ye.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(k||he)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:jc,disabled:Y,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:ql,disabled:Y,children:"Download til computer"}),u.jsx("button",{className:k||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:Is,disabled:Y,children:"Gem i browseren"})]})]})}),$n&&u.jsx(Dt,{title:"main.py er gemt",onClose:()=>Mn(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ba("control"),disabled:Y,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ba("ide"),disabled:Y,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Mn(!1),disabled:Y,children:"Senere"})]})}),_e&&u.jsx(Dt,{title:"Installer MicroPython",onClose:()=>Oe(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:dt,onChange:d=>$t(d.target.value),children:_i.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Rt==null?void 0:Rt.version)??Tt,onChange:d=>fr(d.target.value),children:zl.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),Rt&&u.jsx("a",{className:"btn btn-primary btn-block",href:Rt.url,download:Rt.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),O&&u.jsx(Dt,{title:"Ny Python-fil",onClose:()=>te(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Nc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>ce(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",ks,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!$h(ue),children:"Opret"})]})}),U&&u.jsx(Dt,{title:je(U.path),onClose:()=>ne(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:U.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Ls()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:Se,onChange:d=>E(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",ds(U.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",ds(U.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!zf(Se,ds(U.path))||zf(Se,ds(U.path))===U.path||Y,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Bs(),disabled:Y,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>As(U),disabled:Y,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),U.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:U.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:je(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Rc(d),disabled:Y,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Os(d),disabled:Y,children:"Slet"})]},d.path))})]})]})})]})}function $h(s){var c;const l=(c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return l?`/${l}.py`:""}function Qy(s){const l=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=l==null?void 0:l.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=M_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function zf(s,l="py"){const c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=M_(a[1]),h=l.replace(/^\./,"").toLowerCase(),b=(a[2]??(h||"py")).toLowerCase();return f?`/${f}.${b}`:""}function Wy(s){return je(s).replace(/\.(py|txt|json|csv)$/i,"")}function M_(s){return s.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function ds(s){var a;const l=je(s).match(/\.([a-z0-9]+)$/i),c=(a=l==null?void 0:l[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function ur(s){return s.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function qh(){return Ji.map(s=>({...s,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Kh(s){const l={};return s.forEach(c=>{l[c.id]=!1}),l}function je(s){return s.split("/").filter(Boolean).pop()??s}function Xo(s){return s.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Xh(s){const l=s.userAgent||"",c=s.platform||"",a=s.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(l),h=/Macintosh/i.test(c)&&a>1;return f&&!h}function Zy(s){return s instanceof DOMException&&s.name==="AbortError"}function Jy(s){return/Traceback \(most recent call last\):/.test(s)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(s)}function Ml(s){return ev(s)}function ev(s){return s.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const qf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(s=>({label:s,insert:`${s}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(s)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(s=>({label:`${s}()`,insert:`${s}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_slider_state()",insert:"ble.send_slider_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Qh(s,l,c){const a=Kf(s,l);if(!a)return[];const f=tv(s,a.start,l),h=a.query.toLowerCase(),b=f.beforeToken.toLowerCase(),p=f.linePrefix.toLowerCase(),g=c?[...qf,...rv(s)]:qf;return lv(g).filter(k=>{const S=k.label.toLowerCase(),T=k.insert.toLowerCase();return T===h||S===h||A_(k,a.query)?!1:f.importLine?nv(k,f)?S.startsWith(p)||T.startsWith(p)||S.startsWith(h)||T.startsWith(h):!1:b.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(h)||S.startsWith(h))})}function tv(s,l,c){const a=s.lastIndexOf(`
`,l-1)+1,f=s.slice(a,c),h=s.slice(a,l),b=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),p=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:h,importLine:b,fromImportLine:p}}function nv(s,l){return l.fromImportLine?!s.insert.includes("(")&&!s.insert.startsWith("import "):s.insert.startsWith("import ")||s.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.insert)}function rv(s){const l=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of s.matchAll(a))f[1]&&l.add(f[1]),f[2]&&l.add(f[2]);return[...l].filter(a=>a.length>1&&!iv.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function lv(s){const l=new Set,c=[];for(const a of s){const f=a.insert.toLowerCase();l.has(f)||(l.add(f),c.push(a))}return c}const iv=new Set(qf.map(s=>s.insert.replace(/[().: ]+$/g,"")));function Kf(s,l){const a=s.slice(0,l).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function Wh(s,l){const c=s.lastIndexOf(`
`,Math.max(0,l-1))+1;let a=null,f=null,h=!1;for(let b=0;b<l;b+=1){const p=s[b],g=s.slice(b,b+3);if(f){g===f.repeat(3)&&(f=null,b+=2);continue}if(a){if(h){h=!1;continue}if(p==="\\"){h=!0;continue}p===a&&(a=null),p===`
`&&(a=null);continue}if(p==="#"){const y=s.indexOf(`
`,b),k=y===-1?s.length:y;if(l<=k&&b>=c)return!0;b=k;continue}if(g==='"""'||g==="'''"){f=p,b+=2;continue}(p==='"'||p==="'")&&(a=p)}return a!==null||f!==null}function A_(s,l){const c=s.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===l.toLowerCase()}function av(s){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(s)}function Zh(s,l,c){if(!s)return null;const a=s.closest(".ide-terminal")??s.parentElement;if(!a)return null;const f=window.getComputedStyle(s),h=document.createElement("div"),b=document.createElement("span"),p=a.getBoundingClientRect(),g=s.getBoundingClientRect();h.style.position="absolute",h.style.visibility="hidden",h.style.pointerEvents="none",h.style.whiteSpace="pre-wrap",h.style.overflowWrap="break-word",h.style.wordBreak=f.wordBreak,h.style.boxSizing=f.boxSizing,h.style.width=`${s.getBoundingClientRect().width}px`,h.style.padding=f.padding,h.style.border=f.border,h.style.font=f.font,h.style.lineHeight=f.lineHeight,h.style.letterSpacing=f.letterSpacing,h.style.tabSize=f.tabSize,h.style.fontVariantLigatures=f.fontVariantLigatures,h.style.scrollbarGutter=f.scrollbarGutter,h.style.left=`${g.left-p.left-s.scrollLeft}px`,h.style.top=`${g.top-p.top-s.scrollTop}px`,h.textContent=s.value.slice(0,l),b.textContent=s.value.slice(l,l+1)||" ",h.appendChild(b),a.appendChild(h);const y=b.getBoundingClientRect();h.remove();const k=34,S=14,T=Math.min(210,Math.max(k+S,c*k+S)),A=sv(y.left-p.left,8,Math.max(8,a.clientWidth-296)),z=y.top-p.top+a.scrollTop,V=y.bottom-p.top+a.scrollTop+10,Y=a.scrollTop+a.clientHeight-V-8,G=z-a.scrollTop-8,W=a.scrollTop+a.clientHeight,P=Y>=Math.min(T,k*2)||Y>=G?"below":"above",re=Math.max(k+S,Math.min(T,P==="below"?Y:G)),de=P==="below"?Math.min(V,W-re-8):Math.max(a.scrollTop+8,z-re-8);return{left:A,top:de,maxHeight:re,placement:P}}function sv(s,l,c){return Math.max(l,Math.min(c,s))}function ov(s){const l=[];let c=null,a=null,f=!1,h=0,b=0;const p=(g,y)=>{g>h&&l.push({text:s.slice(h,g),isTriple:y}),h=g};for(;b<s.length;){const g=s[b],y=s.slice(b,b+3);if(a){if(y===a.repeat(3)){b+=3,a=null,p(b,!0);continue}b+=1;continue}if(c){f?f=!1:g==="\\"?f=!0:(g===c||g===`
`)&&(c=null),b+=1;continue}if(g==="#"){const k=s.indexOf(`
`,b);b=k===-1?s.length:k;continue}if(y==='"""'||y==="'''"){p(b,!1),a=g,b+=3;continue}(g==='"'||g==="'")&&(c=g),b+=1}return p(s.length,a!==null),l}function cv(s,l=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];let h=0;function b(p,g){p.split(/(\r?\n)/).forEach(y=>{if(y===`
`||y===`\r
`){f.push(u.jsx("br",{},`br-${h++}`));return}y!==""&&g(y,`part-${h++}`)})}return ov(s).forEach(p=>{if(p.isTriple){b(p.text,(g,y)=>{f.push(...hs(g,l,y,"tok-string"))});return}b(p.text,(g,y)=>{let k=0;[...g.matchAll(a)].forEach((T,A)=>{const z=T.index??0;z>k&&f.push(...Jh(g.slice(k,z),c,`${y}-${A}-plain`,l));const V=T[0],Y=V.startsWith("#")?"tok-comment":V.startsWith('"')||V.startsWith("'")?"tok-string":/^\d/.test(V)?"tok-number":"tok-builtin";f.push(...hs(V,l,`${y}-${A}-token`,Y)),k=z+V.length}),k<g.length&&f.push(...Jh(g.slice(k),c,`${y}-tail`,l))})}),f.length?f:" "}function Jh(s,l,c,a=""){const f=[];let h=0;const b=new RegExp(l.source,"g");return[...s.matchAll(b)].forEach((p,g)=>{const y=p.index??0;y>h&&f.push(...hs(s.slice(h,y),a,`${c}-${g}-plain`)),f.push(...hs(p[0],a,`${c}-${g}-keyword`,"tok-keyword")),h=y+p[0].length}),h<s.length&&f.push(...hs(s.slice(h),a,`${c}-plain-end`)),f}function hs(s,l,c,a=""){if(!l)return[u.jsx("span",{className:a||void 0,children:s},c)];const f=[],h=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),b=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let p=0;return[...s.matchAll(b)].forEach((g,y)=>{const k=g.index??0;k>p&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p,k)},`${c}-${y}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:g[0]},`${c}-${y}-match`)),p=k+g[0].length}),p<s.length&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:s},c)]}function Qo(s){return s.length>0?s:[{path:$f,content:j_,uploaded:!1,updatedAt:Date.now()}]}function Uf(s,l,c,a){const f=s.filter(h=>h.path!==l);return[{path:l,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((h,b)=>b.updatedAt-h.updatedAt)}function Jo(s){return s.map(l=>({name:je(l.path),path:l.path,type:"file",size:new Blob([l.content]).size}))}function uv(s,l,c){var a;return s.source==="pico"?c[s.path]:(a=l.find(f=>f.path===s.path))==null?void 0:a.content}function ec(s){const l=s.replace(/\\/g,"/"),c=l.lastIndexOf("/"),a=c>=0?l.slice(0,c+1):"",h=(c>=0?l.slice(c+1):l).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${a}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Al(s){return ec(s)!==null}function ea(s){const l=new Map;for(const c of s){const a=ec(c.path);if(!a)continue;const f=l.get(a.originalPath)??[];f.push(c),l.set(a.originalPath,f)}for(const c of l.values())c.sort((a,f)=>{var h,b;return(((h=ec(f.path))==null?void 0:h.index)??0)-(((b=ec(a.path))==null?void 0:b.index)??0)});return l}function e_(s,l){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"",y=new Set(l.map(k=>k.path.toLowerCase()));for(let k=1;k<1e3;k+=1){const S=`${f}${p}_backup${k}${g}`;if(!y.has(S.toLowerCase()))return S}return`${f}${p}_backup${Date.now()}${g}`}function fv(s,l){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"";for(let y=1;y<1e3;y+=1){const k=y===1?"_kopi":`_kopi${y}`,S=`${f}${p}${k}${g}`;if(!l(S)&&!Al(S))return S}return`${f}${p}_kopi${Date.now()}${g}`}function dv(s){return s==="ok"?"Nyeste":s==="outdated"?"Opdater":s==="missing"?"Mangler":"Ikke tjekket"}function mv(s,l,c,a){const f=new Map,h=ea(s),b=ea(Jo(l));for(const S of s)Al(S.path)||f.set(Yt("pico",S.path),{kind:"file",name:S.name,path:S.path,type:S.type,size:S.size,source:"pico",uploaded:!0,versions:h.get(S.path)??[]});for(const S of l)Al(S.path)||f.set(Yt("local",S.path),{kind:"file",name:je(S.path),path:S.path,type:"file",source:"local",uploaded:!1,versions:b.get(S.path)??[]});for(const S of Object.keys(c)){const[T,...A]=S.split(":"),z=A.join(":");if(T!=="local"&&T!=="pico"||!z)continue;const V=f.get(S);if(V){f.set(S,V);continue}f.set(S,{kind:"file",name:je(z),path:z,type:"file",source:T,uploaded:!1,versions:T==="pico"?h.get(z)??[]:b.get(z)??[]})}const p=[...f.values()].sort(hv),g=p.filter(S=>S.source==="pico"),y=p.filter(S=>S.source==="local"),k=[];return g.length>0||a?k.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...g):k.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),y.length>0&&k.push({kind:"separator",id:"browser-files",label:"Browser"},...y),k}const pv=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function hv(s,l){const c=t_(s.path),a=t_(l.path);return c===null&&a===null?s.name.localeCompare(l.name,"da"):c===null?-1:a===null?1:c-a}function t_(s){var c;const l=(c=s.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return l?pv.get(l)??null:null}function n_(s,l,c){if(!(l in s))return s;const a={...s,[c]:s[l]};return delete a[l],a}function _v(s,l,c,a){const f=`${l}:${c}`;if(!(f in s))return s;const h={...s,[`${l}:${a}`]:s[f]};return delete h[f],h}function gv({open:s}){const l=le(W=>W.screen),c=le(W=>W.active),a=le(W=>W.toggleSideMenu),f=le(W=>W.toggleDebugger),h=le(W=>W.setEditMode),b=le(W=>W.openMenuPage),p=le(W=>W.disconnect),g=le(W=>W.openPicoIde),y=le(W=>W.closePicoIde),k=le(W=>W.picoIdeOrigin),S=l==="dashboard",T=l==="control",A=l==="ide",z=T&&!!(c!=null&&c.canEdit),V=!T||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),Y=k==="control",G=k==="control"?"Pico Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${s?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${l} ${s?"open":"closing"}`,"aria-label":"Sidemenu",children:[S&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:"Bruger",icon:"user",onClick:()=>b("user-settings")}),u.jsx(Rn,{label:"Indstillinger",icon:"settings",onClick:()=>b("application-settings")}),u.jsx(Rn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!V}),u.jsx(If,{}),u.jsx(Rn,{label:"Om appen",icon:"info",onClick:()=>b("application-about")}),u.jsx(Rn,{label:"Hjælp",icon:"help",onClick:()=>b("application-help")}),u.jsx(Rn,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),T&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:"Indstillinger",icon:"settings",onClick:()=>b("device-settings")}),u.jsx(Rn,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!z}),u.jsx(Rn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!V}),u.jsx(If,{}),u.jsx(Rn,{label:"Hjælp",icon:"help",onClick:()=>b("device-help")}),u.jsx(Rn,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),A&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:G,icon:"back",onClick:y}),u.jsx(If,{})]}),u.jsx("div",{className:"spacer"}),(T||A&&Y)&&u.jsx(Rn,{label:"Forlad",icon:"exit",onClick:()=>p()})]})]})}function Rn({label:s,icon:l,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":s,children:[u.jsx(rn,{name:l}),u.jsx("span",{children:s})]})}function If(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:Xb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const bv={error:"term-error",success:"term-success",warning:"term-warning",info:""},r_={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function yv(){const s=new Date,l=c=>String(c).padStart(2,"0");return`${l(s.getDate())}-${l(s.getMonth()+1)}-${s.getFullYear()}-${l(s.getHours())}-${l(s.getMinutes())}`}function vv(){const s=le(f=>f.logs),l=le(f=>f.clearLogs),c=le(f=>f.toggleDebugger);function a(){const f=[...s].reverse().map(g=>`${g.time} ${r_[g.level]}${g.message}`).join(`
`),h=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(h),p=document.createElement("a");p.href=b,p.download=`${yv()}.txt`,p.click(),URL.revokeObjectURL(b)}return u.jsxs(Dt,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:s.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):s.map((f,h)=>u.jsxs("div",{className:`term-line ${bv[f.level]}`,children:[f.time," ",r_[f.level],f.message]},`${f.time}-${h}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const D_=4,Yn=D_*4+17,l_=80,xv=20,kv=30660;function Sv(s){const l=new TextEncoder().encode(s);if(l.length>76)throw new Error("QR-koden er for lang.");const c=i_(!1),a=i_(!1);wv(c,a);const f=Tv(l),h=jv(f,xv);return Nv(c,a,[...f,...h]),Rv(c,a),c}function i_(s){return Array.from({length:Yn},()=>Array.from({length:Yn},()=>s))}function Vn(s,l,c,a,f,h=!0){s[a][c]=f,h&&(l[a][c]=!0)}function wv(s,l){Hf(s,l,0,0),Hf(s,l,Yn-7,0),Hf(s,l,0,Yn-7);for(let c=0;c<Yn;c+=1)l[6][c]||Vn(s,l,c,6,c%2===0),l[c][6]||Vn(s,l,6,c,c%2===0);Ev(s,l,26,26),Vn(s,l,8,D_*4+9,!0)}function Hf(s,l,c,a){for(let f=-1;f<=7;f+=1)for(let h=-1;h<=7;h+=1){const b=c+h,p=a+f;if(b<0||p<0||b>=Yn||p>=Yn)continue;const g=h>=0&&h<=6&&f>=0&&f<=6&&(h===0||h===6||f===0||f===6||h>=2&&h<=4&&f>=2&&f<=4);Vn(s,l,b,p,g)}}function Ev(s,l,c,a){for(let f=-2;f<=2;f+=1)for(let h=-2;h<=2;h+=1)l[a+f][c+h]||Vn(s,l,c+h,a+f,Math.max(Math.abs(h),Math.abs(f))!==1)}function Tv(s){const l=[];Wo(l,4,4),Wo(l,s.length,8);for(const a of s)Wo(l,a,8);for(Wo(l,0,Math.min(4,l_*8-l.length));l.length%8!==0;)l.push(0);const c=[];for(let a=0;a<l.length;a+=8)c.push(l.slice(a,a+8).reduce((f,h)=>f<<1|h,0));for(let a=236;c.length<l_;a=a===236?17:236)c.push(a);return c}function Wo(s,l,c){for(let a=c-1;a>=0;a-=1)s.push(l>>>a&1)}function Nv(s,l,c){const a=c.flatMap(b=>Array.from({length:8},(p,g)=>b>>>7-g&1));let f=0,h=!0;for(let b=Yn-1;b>=1;b-=2){b===6&&(b-=1);for(let p=0;p<Yn;p+=1){const g=h?Yn-1-p:p;for(let y=0;y<2;y+=1){const k=b-y;if(l[g][k])continue;const S=f<a.length?a[f]===1:!1;s[g][k]=S!==((k+g)%2===0),f+=1}}h=!h}}function Rv(s,l){const c=a=>(kv>>>a&1)!==0;for(let a=0;a<=5;a+=1)Vn(s,l,8,a,c(a));Vn(s,l,8,7,c(6)),Vn(s,l,8,8,c(7)),Vn(s,l,7,8,c(8));for(let a=9;a<15;a+=1)Vn(s,l,14-a,8,c(a));for(let a=0;a<8;a+=1)Vn(s,l,Yn-1-a,8,c(a));for(let a=8;a<15;a+=1)Vn(s,l,8,Yn-15+a,c(a))}const _s=new Array(512),Xf=new Array(256);let a_=!1;function O_(){if(a_)return;let s=1;for(let l=0;l<255;l+=1)_s[l]=s,Xf[s]=l,s<<=1,s&256&&(s^=285);for(let l=255;l<512;l+=1)_s[l]=_s[l-255];a_=!0}function C_(s,l){return s===0||l===0?0:_s[Xf[s]+Xf[l]]}function jv(s,l){O_();const c=Mv(l),a=Array.from({length:l},()=>0);for(const f of s){const h=f^a.shift();a.push(0);for(let b=0;b<l;b+=1)a[b]^=C_(c[b],h)}return a}function Mv(s){O_();let l=[1];for(let c=0;c<s;c+=1){const a=Array.from({length:l.length+1},()=>0);for(let f=0;f<l.length;f+=1)a[f]^=C_(l[f],_s[c]),a[f+1]^=l[f];l=a}return l.slice(1)}function Av(){const s=le(_e=>_e.menuPage),l=le(_e=>_e.closeMenuPage),c=le(_e=>_e.user),a=le(_e=>_e.active),f=le(_e=>_e.layout),h=le(_e=>_e.sliderValues),b=le(_e=>_e.savedDevices),p=le(_e=>_e.updateUsername),g=le(_e=>_e.createOwnerPairingCode),y=le(_e=>_e.applyOwnerPairingCode),k=le(_e=>_e.clearSavedDevices),S=le(_e=>_e.resetApplicationData),T=le(_e=>_e.saveDeviceSettings),A=le(_e=>_e.setEditMode),z=le(_e=>_e.askConfirm),[V,Y]=L.useState((c==null?void 0:c.username)??""),[G,W]=L.useState(!1),[P,re]=L.useState(""),[de,fe]=L.useState(""),[X,ee]=L.useState(!1),[Ee,be]=L.useState(""),Fe=L.useRef(null),[J,We]=L.useState((a==null?void 0:a.iconID)??0),[ye,Ne]=L.useState(!1),[O,te]=L.useState((a==null?void 0:a.canOthersConnect)??!1),[ue,ce]=L.useState((a==null?void 0:a.canOthersEdit)??!1),[Se,E]=L.useState((a==null?void 0:a.canOthersEditCode)??!1),[U,ne]=L.useState((a==null?void 0:a.gridCols)??11),[oe,xe]=L.useState((a==null?void 0:a.gridRows)??31),[H,D]=L.useState(!1);L.useEffect(()=>{s==="user-settings"&&(Y((c==null?void 0:c.username)??""),fe(""),be(""),ee(!1))},[s,c==null?void 0:c.username]),L.useEffect(()=>{s==="device-settings"&&a&&(We(a.iconID),te(a.canOthersConnect),ce(a.canOthersEdit),E(a.canOthersEditCode),ne(a.gridCols),xe(a.gridRows))},[a,s]),L.useEffect(()=>{if(!X)return;let _e=!1,Oe=null,yt=0;async function Ce(){var $t;const dt=window.BarcodeDetector;if(!dt||!(($t=navigator.mediaDevices)!=null&&$t.getUserMedia)){be("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),ee(!1);return}try{Oe=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Tt=Fe.current;if(!Tt)return;Tt.srcObject=Oe,await Tt.play();const fr=new dt({formats:["qr_code"]}),$n=async()=>{var Mn;if(!_e){try{const Gr=(Mn=(await fr.detect(Tt)).find(vt=>vt.rawValue))==null?void 0:Mn.rawValue;if(Gr){fe(Gr),y(Gr)&&W(!1),ee(!1);return}}catch{}yt=window.requestAnimationFrame($n)}};yt=window.requestAnimationFrame($n)}catch{be("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),ee(!1)}}return Ce(),()=>{_e=!0,yt&&window.cancelAnimationFrame(yt),Oe==null||Oe.getTracks().forEach(dt=>dt.stop())}},[y,X]);const ae=(_e,Oe)=>Number.isFinite(_e)?Math.max(na,Math.min(ra,Math.round(_e))):Oe,ve=(c==null?void 0:c.username)??"",Be=V.trim(),Ge=Be.length>0&&Be!==ve;if(!s)return null;if(s==="user-settings"){let _e=function(){const Ce=g();Ce&&(re(Ce),fe(""),W(!0))},Oe=function(){y(de)&&(fe(""),W(!1))};async function yt(){var Ce;try{await((Ce=navigator.clipboard)==null?void 0:Ce.writeText(P))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Dt,{title:"Brugerindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gn,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${V.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:V,onChange:Ce=>Y(Ce.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>p(V),disabled:!Ge,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:_e,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>z({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{S()}}),children:"Slet brugerdata"})]})}),G&&u.jsx(Dt,{title:"Del ejerkode",onClose:()=>W(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Cv,{code:P}),u.jsx("code",{className:"owner-code-text",children:P}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void yt(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${de.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:de,onChange:Ce=>fe(Ce.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:Oe,disabled:!de.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>ee(Ce=>!Ce),children:X?"Stop scanning":"Scan QR-kode"}),Ee&&u.jsx("div",{className:"notice",children:Ee}),X&&u.jsx("video",{className:"owner-code-video",ref:Fe,muted:!0,playsInline:!0})]})})]})}if(s==="application-settings")return u.jsx(Dt,{title:"Applikationsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gn,{label:"Version",value:gs}),u.jsx(Gn,{label:"Bluetooth",value:oc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(Gn,{label:"Gemte enheder",value:String(b.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>z({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:k}),disabled:b.length===0,children:"Ryd gemte enheder"})]})});if(s==="application-about")return u.jsx(Dt,{title:"Om appen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(Gn,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(Gn,{label:"Version",value:gs})]})});if(s==="application-help")return u.jsx(Dt,{title:"Hjælp til applikationen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(s==="device-settings"){const _e=f.filter(Ce=>Ce.type==="slider"),Oe=!!(a!=null&&a.isOwnedByMe);async function yt(Ce=!1){if(!a||!Oe)return;const dt=ae(U,a.gridCols),$t=ae(oe,a.gridRows),Tt=Dv(f,dt,$t);if(Tt&&!Ce){z({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Tt.requiredCols} kolonner og ${Tt.requiredRows} rækker. Det nye gitter er ${dt} × ${$t}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{yt(!0)}});return}D(!0),await T(J,O,O&&ue,O&&Se,dt,$t),ne(dt),xe($t),D(!1)}return u.jsx(Dt,{title:"Enhedsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gn,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(Gn,{label:"Ejer",value:Bv(a)}),Oe?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Ne(!0),children:u.jsx("img",{src:aa(J),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:O?"":"active",onClick:()=>te(!1),children:"Privat"}),u.jsx("button",{type:"button",className:O?"active":"",onClick:()=>te(!0),children:"Offentlig"})]}),O&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>ce(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>ce(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Se?"":"active",onClick:()=>E(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Se?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:na,max:ra,value:Number.isNaN(U)?"":U,onChange:Ce=>ne(parseInt(Ce.target.value,10)),onBlur:()=>ne(ae(U,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:na,max:ra,value:Number.isNaN(oe)?"":oe,onChange:Ce=>xe(parseInt(Ce.target.value,10)),onBlur:()=>xe(ae(oe,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>yt(),disabled:H,children:H?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Gn,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(Gn,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(Gn,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(Gn,{label:"Kontroller",value:String(f.length)}),_e.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),_e.map(Ce=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:Ce.name}),u.jsxs("span",{children:[Ce.sliderMin??0," til ",Ce.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",Ov(Ce.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",h[Ce.name]??"Ikke brugt"]})]},Ce.name))]}),ye&&u.jsx(h_,{selected:J,onSelect:We,onClose:()=>Ne(!1)})]})})}return u.jsx(Dt,{title:"Hjælp til enheden",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>A(!0),children:"Rediger layout"})]})})}function Dv(s,l,c){let a=0,f=0;for(const h of s)ys(h)&&(a=Math.max(a,Math.ceil((h.centerX2+h.spanX)/2)+1),f=Math.max(f,Math.ceil((h.centerY2+h.spanY)/2)+1));return l<a||c<f?{requiredCols:a,requiredRows:f}:null}function Ov(s){return s==="bottom"?"bund":s==="middle"?"midte":s==="top"?"top":"ingen"}function Cv({code:s}){const l=L.useMemo(()=>Sv(s),[s]),c=l.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),l.map((a,f)=>a.map((h,b)=>h?u.jsx("rect",{x:b+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${b}-${f}`):null))]})}function Bv(s){var l;return s?s.isOwnedByMe?"Dig":((l=s.ownerName)==null?void 0:l.trim())||"Anden bruger":"Ukendt"}function Gn({label:s,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:l})]})}function Lv(){const s=le(a=>a.confirmDialog),l=le(a=>a.closeConfirm);if(!s)return null;function c(){s==null||s.onConfirm(),l()}return u.jsx(Dt,{title:s.title,onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:s.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:s.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:s.confirmLabel??"Fortsæt"})]})]})})}function zv(){const s=le(a=>a.connectionLost),l=le(a=>a.reconnectLostDevice),c=le(a=>a.dismissConnectionLost);return s?u.jsx(Dt,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",s.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>l(),children:"Genforbind"})]})]})}):null}function Uv(){const s=le(c=>c.toast),l=le(c=>c.dismissToast);return s?u.jsx("div",{className:"toast",role:"alert",onClick:l,children:s.message},s.id):null}function Iv(){const s=le(p=>p.screen),l=le(p=>p.splashTarget),c=le(p=>p.init),a=le(p=>p.sideMenuOpen),f=le(p=>p.debuggerOpen),[h,b]=L.useState(!1);return L.useEffect(()=>{c()},[c]),L.useEffect(()=>{if(a){b(!0);return}const p=setTimeout(()=>b(!1),140);return()=>clearTimeout(p)},[a]),u.jsxs("div",{className:"app",children:[s==="splash"&&l==="intro"&&u.jsx(Eh,{}),s==="splash"&&l==="dashboard"&&u.jsx(Th,{}),s==="splash"&&u.jsx(Jb,{}),s==="intro"&&u.jsx(Eh,{}),s==="dashboard"&&u.jsx(Th,{}),s==="connection"&&u.jsx(l0,{}),s==="create"&&u.jsx(i0,{}),s==="control"&&u.jsx(Q0,{}),s==="ide"&&u.jsx(Xy,{}),h&&u.jsx(gv,{open:a}),u.jsx(Av,{}),u.jsx(zv,{}),u.jsx(Lv,{}),f&&u.jsx(vv,{}),u.jsx(Uv,{})]})}function Hv(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const l=new URL("sw.js",window.location.href);navigator.serviceWorker.register(l,{scope:"./"}).catch(c=>{console.warn("Service worker registration failed:",c)})});let s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||window.crossOriginIsolated||(s=!0,window.location.reload())})}Hv();ub.createRoot(document.getElementById("root")).render(u.jsx(ms.StrictMode,{children:u.jsx(Iv,{})}));
