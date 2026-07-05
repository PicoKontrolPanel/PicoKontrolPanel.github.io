var Kg=Object.defineProperty;var Qg=(o,i,c)=>i in o?Kg(o,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[i]=c;var de=(o,i,c)=>Qg(o,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function c(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(f){if(f.ep)return;f.ep=!0;const p=c(f);fetch(f.href,p)}})();function r_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var pf={exports:{}},Wa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function Zg(){if(nh)return Wa;nh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,f,p){var b=null;if(p!==void 0&&(b=""+p),f.key!==void 0&&(b=""+f.key),"key"in f){p={};for(var y in f)y!=="key"&&(p[y]=f[y])}else p=f;return f=p.ref,{$$typeof:o,type:a,key:b,ref:f!==void 0?f:null,props:p}}return Wa.Fragment=i,Wa.jsx=c,Wa.jsxs=c,Wa}var th;function Wg(){return th||(th=1,pf.exports=Zg()),pf.exports}var u=Wg(),hf={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function Jg(){if(rh)return Ee;rh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function G(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,D={};function B(N,I,te){this.props=N,this.context=I,this.refs=D,this.updater=te||Y}B.prototype.isReactComponent={},B.prototype.setState=function(N,I){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,I,"setState")},B.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function H(){}H.prototype=B.prototype;function re(N,I,te){this.props=N,this.context=I,this.refs=D,this.updater=te||Y}var se=re.prototype=new H;se.constructor=re,K(se,B.prototype),se.isPureReactComponent=!0;var oe=Array.isArray;function pe(){}var W={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function Se(N,I,te){var O=te.ref;return{$$typeof:o,type:N,key:I,ref:O!==void 0?O:null,props:te}}function ye(N,I){return Se(N.type,I,N.props)}function xe(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function ie(N){var I={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(te){return I[te]})}var Ie=/\/+/g;function Te(N,I){return typeof N=="object"&&N!==null&&N.key!=null?ie(""+N.key):I.toString(36)}function Ye(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(pe,pe):(N.status="pending",N.then(function(I){N.status==="pending"&&(N.status="fulfilled",N.value=I)},function(I){N.status==="pending"&&(N.status="rejected",N.reason=I)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function U(N,I,te,O,Q){var J=typeof N;(J==="undefined"||J==="boolean")&&(N=null);var F=!1;if(N===null)F=!0;else switch(J){case"bigint":case"string":case"number":F=!0;break;case"object":switch(N.$$typeof){case o:case i:F=!0;break;case _:return F=N._init,U(F(N._payload),I,te,O,Q)}}if(F)return Q=Q(N),F=O===""?"."+Te(N,0):O,oe(Q)?(te="",F!=null&&(te=F.replace(Ie,"$&/")+"/"),U(Q,I,te,"",function(Pn){return Pn})):Q!=null&&(xe(Q)&&(Q=ye(Q,te+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(Ie,"$&/")+"/")+F)),I.push(Q)),1;F=0;var Le=O===""?".":O+":";if(oe(N))for(var je=0;je<N.length;je++)O=N[je],J=Le+Te(O,je),F+=U(O,I,te,J,Q);else if(je=G(N),typeof je=="function")for(N=je.call(N),je=0;!(O=N.next()).done;)O=O.value,J=Le+Te(O,je++),F+=U(O,I,te,J,Q);else if(J==="object"){if(typeof N.then=="function")return U(Ye(N),I,te,O,Q);throw I=String(N),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return F}function ee(N,I,te){if(N==null)return N;var O=[],Q=0;return U(N,O,"","",function(J){return I.call(te,J,Q++)}),O}function ce(N){if(N._status===-1){var I=N._result;I=I(),I.then(function(te){(N._status===0||N._status===-1)&&(N._status=1,N._result=te)},function(te){(N._status===0||N._status===-1)&&(N._status=2,N._result=te)}),N._status===-1&&(N._status=0,N._result=I)}if(N._status===1)return N._result.default;throw N._result}var ue=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},we={map:ee,forEach:function(N,I,te){ee(N,function(){I.apply(this,arguments)},te)},count:function(N){var I=0;return ee(N,function(){I++}),I},toArray:function(N){return ee(N,function(I){return I})||[]},only:function(N){if(!xe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Ee.Activity=v,Ee.Children=we,Ee.Component=B,Ee.Fragment=c,Ee.Profiler=f,Ee.PureComponent=re,Ee.StrictMode=a,Ee.Suspense=w,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(N){return W.H.useMemoCache(N)}},Ee.cache=function(N){return function(){return N.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(N,I,te){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var O=K({},N.props),Q=N.key;if(I!=null)for(J in I.key!==void 0&&(Q=""+I.key),I)!Z.call(I,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&I.ref===void 0||(O[J]=I[J]);var J=arguments.length-2;if(J===1)O.children=te;else if(1<J){for(var F=Array(J),Le=0;Le<J;Le++)F[Le]=arguments[Le+2];O.children=F}return Se(N.type,Q,O)},Ee.createContext=function(N){return N={$$typeof:b,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:p,_context:N},N},Ee.createElement=function(N,I,te){var O,Q={},J=null;if(I!=null)for(O in I.key!==void 0&&(J=""+I.key),I)Z.call(I,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(Q[O]=I[O]);var F=arguments.length-2;if(F===1)Q.children=te;else if(1<F){for(var Le=Array(F),je=0;je<F;je++)Le[je]=arguments[je+2];Q.children=Le}if(N&&N.defaultProps)for(O in F=N.defaultProps,F)Q[O]===void 0&&(Q[O]=F[O]);return Se(N,J,Q)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(N){return{$$typeof:y,render:N}},Ee.isValidElement=xe,Ee.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:ce}},Ee.memo=function(N,I){return{$$typeof:x,type:N,compare:I===void 0?null:I}},Ee.startTransition=function(N){var I=W.T,te={};W.T=te;try{var O=N(),Q=W.S;Q!==null&&Q(te,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(pe,ue)}catch(J){ue(J)}finally{I!==null&&te.types!==null&&(I.types=te.types),W.T=I}},Ee.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Ee.use=function(N){return W.H.use(N)},Ee.useActionState=function(N,I,te){return W.H.useActionState(N,I,te)},Ee.useCallback=function(N,I){return W.H.useCallback(N,I)},Ee.useContext=function(N){return W.H.useContext(N)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(N,I){return W.H.useDeferredValue(N,I)},Ee.useEffect=function(N,I){return W.H.useEffect(N,I)},Ee.useEffectEvent=function(N){return W.H.useEffectEvent(N)},Ee.useId=function(){return W.H.useId()},Ee.useImperativeHandle=function(N,I,te){return W.H.useImperativeHandle(N,I,te)},Ee.useInsertionEffect=function(N,I){return W.H.useInsertionEffect(N,I)},Ee.useLayoutEffect=function(N,I){return W.H.useLayoutEffect(N,I)},Ee.useMemo=function(N,I){return W.H.useMemo(N,I)},Ee.useOptimistic=function(N,I){return W.H.useOptimistic(N,I)},Ee.useReducer=function(N,I,te){return W.H.useReducer(N,I,te)},Ee.useRef=function(N){return W.H.useRef(N)},Ee.useState=function(N){return W.H.useState(N)},Ee.useSyncExternalStore=function(N,I,te){return W.H.useSyncExternalStore(N,I,te)},Ee.useTransition=function(){return W.H.useTransition()},Ee.version="19.2.7",Ee}var lh;function qf(){return lh||(lh=1,hf.exports=Jg()),hf.exports}var z=qf();const ss=r_(z);var _f={exports:{}},Ja={},gf={exports:{}},bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function e0(){return ih||(ih=1,(function(o){function i(U,ee){var ce=U.length;U.push(ee);e:for(;0<ce;){var ue=ce-1>>>1,we=U[ue];if(0<f(we,ee))U[ue]=ee,U[ce]=we,ce=ue;else break e}}function c(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var ee=U[0],ce=U.pop();if(ce!==ee){U[0]=ce;e:for(var ue=0,we=U.length,N=we>>>1;ue<N;){var I=2*(ue+1)-1,te=U[I],O=I+1,Q=U[O];if(0>f(te,ce))O<we&&0>f(Q,te)?(U[ue]=Q,U[O]=ce,ue=O):(U[ue]=te,U[I]=ce,ue=I);else if(O<we&&0>f(Q,ce))U[ue]=Q,U[O]=ce,ue=O;else break e}}return ee}function f(U,ee){var ce=U.sortIndex-ee.sortIndex;return ce!==0?ce:U.id-ee.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;o.unstable_now=function(){return p.now()}}else{var b=Date,y=b.now();o.unstable_now=function(){return b.now()-y}}var w=[],x=[],_=1,v=null,S=3,G=!1,Y=!1,K=!1,D=!1,B=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function se(U){for(var ee=c(x);ee!==null;){if(ee.callback===null)a(x);else if(ee.startTime<=U)a(x),ee.sortIndex=ee.expirationTime,i(w,ee);else break;ee=c(x)}}function oe(U){if(K=!1,se(U),!Y)if(c(w)!==null)Y=!0,pe||(pe=!0,ie());else{var ee=c(x);ee!==null&&Ye(oe,ee.startTime-U)}}var pe=!1,W=-1,Z=5,Se=-1;function ye(){return D?!0:!(o.unstable_now()-Se<Z)}function xe(){if(D=!1,pe){var U=o.unstable_now();Se=U;var ee=!0;try{e:{Y=!1,K&&(K=!1,H(W),W=-1),G=!0;var ce=S;try{n:{for(se(U),v=c(w);v!==null&&!(v.expirationTime>U&&ye());){var ue=v.callback;if(typeof ue=="function"){v.callback=null,S=v.priorityLevel;var we=ue(v.expirationTime<=U);if(U=o.unstable_now(),typeof we=="function"){v.callback=we,se(U),ee=!0;break n}v===c(w)&&a(w),se(U)}else a(w);v=c(w)}if(v!==null)ee=!0;else{var N=c(x);N!==null&&Ye(oe,N.startTime-U),ee=!1}}break e}finally{v=null,S=ce,G=!1}ee=void 0}}finally{ee?ie():pe=!1}}}var ie;if(typeof re=="function")ie=function(){re(xe)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Te=Ie.port2;Ie.port1.onmessage=xe,ie=function(){Te.postMessage(null)}}else ie=function(){B(xe,0)};function Ye(U,ee){W=B(function(){U(o.unstable_now())},ee)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(U){switch(S){case 1:case 2:case 3:var ee=3;break;default:ee=S}var ce=S;S=ee;try{return U()}finally{S=ce}},o.unstable_requestPaint=function(){D=!0},o.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ce=S;S=U;try{return ee()}finally{S=ce}},o.unstable_scheduleCallback=function(U,ee,ce){var ue=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ue+ce:ue):ce=ue,U){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ce+we,U={id:_++,callback:ee,priorityLevel:U,startTime:ce,expirationTime:we,sortIndex:-1},ce>ue?(U.sortIndex=ce,i(x,U),c(w)===null&&U===c(x)&&(K?(H(W),W=-1):K=!0,Ye(oe,ce-ue))):(U.sortIndex=we,i(w,U),Y||G||(Y=!0,pe||(pe=!0,ie()))),U},o.unstable_shouldYield=ye,o.unstable_wrapCallback=function(U){var ee=S;return function(){var ce=S;S=ee;try{return U.apply(this,arguments)}finally{S=ce}}}})(bf)),bf}var ah;function n0(){return ah||(ah=1,gf.exports=e0()),gf.exports}var yf={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function t0(){if(sh)return In;sh=1;var o=qf();function i(w){var x="https://react.dev/errors/"+w;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)x+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+w+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(w,x,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:w,containerInfo:x,implementation:_}}var b=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(w,x){if(w==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,In.createPortal=function(w,x){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return p(w,x,null,_)},In.flushSync=function(w){var x=b.T,_=a.p;try{if(b.T=null,a.p=2,w)return w()}finally{b.T=x,a.p=_,a.d.f()}},In.preconnect=function(w,x){typeof w=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,a.d.C(w,x))},In.prefetchDNS=function(w){typeof w=="string"&&a.d.D(w)},In.preinit=function(w,x){if(typeof w=="string"&&x&&typeof x.as=="string"){var _=x.as,v=y(_,x.crossOrigin),S=typeof x.integrity=="string"?x.integrity:void 0,G=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;_==="style"?a.d.S(w,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:G}):_==="script"&&a.d.X(w,{crossOrigin:v,integrity:S,fetchPriority:G,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},In.preinitModule=function(w,x){if(typeof w=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var _=y(x.as,x.crossOrigin);a.d.M(w,{crossOrigin:_,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&a.d.M(w)},In.preload=function(w,x){if(typeof w=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var _=x.as,v=y(_,x.crossOrigin);a.d.L(w,_,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},In.preloadModule=function(w,x){if(typeof w=="string")if(x){var _=y(x.as,x.crossOrigin);a.d.m(w,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:_,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else a.d.m(w)},In.requestFormReset=function(w){a.d.r(w)},In.unstable_batchedUpdates=function(w,x){return w(x)},In.useFormState=function(w,x,_){return b.H.useFormState(w,x,_)},In.useFormStatus=function(){return b.H.useHostTransitionStatus()},In.version="19.2.7",In}var oh;function r0(){if(oh)return yf.exports;oh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),yf.exports=t0(),yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function l0(){if(ch)return Ja;ch=1;var o=n0(),i=qf(),c=r0();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function b(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function w(e){if(p(e)!==e)throw Error(a(188))}function x(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return w(l),e;if(s===r)return w(l),n;s=s.sibling}throw Error(a(188))}if(t.return!==r.return)t=l,r=s;else{for(var m=!1,g=l.child;g;){if(g===t){m=!0,t=l,r=s;break}if(g===r){m=!0,r=l,t=s;break}g=g.sibling}if(!m){for(g=s.child;g;){if(g===t){m=!0,t=s,r=l;break}if(g===r){m=!0,r=s,t=l;break}g=g.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),re=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case B:return"Profiler";case D:return"StrictMode";case oe:return"Suspense";case pe:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case re:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case se:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return n=e.displayName||null,n!==null?n:Te(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return Te(e(n))}catch{}}return null}var Ye=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},ue=[],we=-1;function N(e){return{current:e}}function I(e){0>we||(e.current=ue[we],ue[we]=null,we--)}function te(e,n){we++,ue[we]=e.current,e.current=n}var O=N(null),Q=N(null),J=N(null),F=N(null);function Le(e,n){switch(te(J,n),te(Q,e),te(O,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Sp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Sp(n),e=kp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(O),te(O,e)}function je(){I(O),I(Q),I(J)}function Pn(e){e.memoizedState!==null&&te(F,e);var n=O.current,t=kp(n,e.type);n!==t&&(te(Q,e),te(O,t))}function Ft(e){Q.current===e&&(I(O),I(Q)),F.current===e&&(I(F),Fa._currentValue=ce)}var ve,gn;function Sn(e){if(ve===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ve=n&&n[1]||"",gn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ve+e+gn}var Oe=!1;function kn(e,n){if(!e||Oe)return"";Oe=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(V){var L=V}Reflect.construct(e,[],X)}else{try{X.call()}catch(V){L=V}e.call(X.prototype)}}else{try{throw Error()}catch(V){L=V}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(V){if(V&&L&&typeof V.stack=="string")return[V.stack,L.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),m=s[0],g=s[1];if(m&&g){var k=m.split(`
`),C=g.split(`
`);for(l=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(r===k.length||l===C.length)for(r=k.length-1,l=C.length-1;1<=r&&0<=l&&k[r]!==C[l];)l--;for(;1<=r&&0<=l;r--,l--)if(k[r]!==C[l]){if(r!==1||l!==1)do if(r--,l--,0>l||k[r]!==C[l]){var P=`
`+k[r].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=r&&0<=l);break}}}finally{Oe=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Sn(t):""}function Gt(e,n){switch(e.tag){case 26:case 27:case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return e.child!==n&&n!==null?Sn("Suspense Fallback"):Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 15:return kn(e.type,!1);case 11:return kn(e.type.render,!1);case 1:return kn(e.type,!0);case 31:return Sn("Activity");default:return""}}function Ln(e){try{var n="",t=null;do n+=Gt(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Br=Object.prototype.hasOwnProperty,zr=o.unstable_scheduleCallback,xt=o.unstable_cancelCallback,ai=o.unstable_shouldYield,Ur=o.unstable_requestPaint,bn=o.unstable_now,Rl=o.unstable_getCurrentPriorityLevel,Ml=o.unstable_ImmediatePriority,ra=o.unstable_UserBlockingPriority,Tl=o.unstable_NormalPriority,Wn=o.unstable_LowPriority,ot=o.unstable_IdlePriority,Kt=o.log,si=o.unstable_setDisableYieldValue,jl=null,yn=null;function ct(e){if(typeof Kt=="function"&&si(e),yn&&typeof yn.setStrictMode=="function")try{yn.setStrictMode(jl,e)}catch{}}var Tn=Math.clz32?Math.clz32:sr,Hr=Math.log,Gr=Math.LN2;function sr(e){return e>>>=0,e===0?32:31-(Hr(e)/Gr|0)|0}var Qt=256,qn=262144,Ke=4194304;function un(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fn(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,s=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var g=r&134217727;return g!==0?(r=g&~s,r!==0?l=un(r):(m&=g,m!==0?l=un(m):t||(t=g&~e,t!==0&&(l=un(t))))):(g=r&~s,g!==0?l=un(g):m!==0?l=un(m):t||(t=r&~e,t!==0&&(l=un(t)))),l===0?0:n!==0&&n!==l&&(n&s)===0&&(s=l&-l,t=n&-n,s>=t||s===32&&(t&4194048)!==0)?n:l}function Bn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ec(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oi(){var e=Ke;return Ke<<=1,(Ke&62914560)===0&&(Ke=4194304),e}function Zt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Dl(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function or(e,n,t,r,l,s){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var g=e.entanglements,k=e.expirationTimes,C=e.hiddenUpdates;for(t=m&~t;0<t;){var P=31-Tn(t),X=1<<P;g[P]=0,k[P]=-1;var L=C[P];if(L!==null)for(C[P]=null,P=0;P<L.length;P++){var V=L[P];V!==null&&(V.lane&=-536870913)}t&=~X}r!==0&&ds(e,r,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(m&~n))}function ds(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Tn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function ci(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Tn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function ms(e,n){var t=n&-n;return t=(t&42)!==0?1:Vr(t),(t&(e.suspendedLanes|n))!==0?0:t}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function an(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:Fp(e.type))}function la(e,n){var t=ee.p;try{return ee.p=e,n()}finally{ee.p=t}}var zn=Math.random().toString(36).slice(2),sn="__reactFiber$"+zn,Nn="__reactProps$"+zn,ut="__reactContainer$"+zn,Al="__reactEvents$"+zn,Et="__reactListeners$"+zn,cr="__reactHandles$"+zn,Ir="__reactResources$"+zn,$n="__reactMarker$"+zn;function Wt(e){delete e[sn],delete e[Nn],delete e[Al],delete e[Et],delete e[cr]}function St(e){var n=e[sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ut]||t[sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ap(e);e!==null;){if(t=e[sn])return t;e=Ap(e)}return n}e=t,t=e.parentNode}return null}function Jn(e){if(e=e[sn]||e[ut]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ur(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Xn(e){var n=e[Ir];return n||(n=e[Ir]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[$n]=!0}var Jt=new Set,fr={};function et(e,n){dr(e,n),dr(e+"Capture",n)}function dr(e,n){for(fr[e]=n,e=0;e<n.length;e++)Jt.add(n[e])}var Ol=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cl={},Ll={};function Yr(e){return Br.call(Ll,e)?!0:Br.call(Cl,e)?!1:Ol.test(e)?Ll[e]=!0:(Cl[e]=!0,!1)}function Vt(e,n,t){if(Yr(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function he(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function ft(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nc(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){t=""+m,s.call(this,m)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ia(e){if(!e._valueTracker){var n=ps(e)?"checked":"value";e._valueTracker=nc(e,n,""+e[n])}}function Pr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ps(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function It(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kt=/[\n"\\]/g;function Un(e){return e.replace(kt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hn(e,n,t,r,l,s,m,g){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+nt(n)):e.value!==""+nt(n)&&(e.value=""+nt(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?aa(e,m,nt(n)):t!=null?aa(e,m,nt(t)):r!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+nt(g):e.removeAttribute("name")}function hs(e,n,t,r,l,s,m,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),n!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||n!=null)){ia(e);return}t=t!=null?""+nt(t):"",n=n!=null?""+nt(n):t,g||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=g?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),ia(e)}function aa(e,n,t){n==="number"&&It(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function mr(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+nt(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ui(e,n,t){if(n!=null&&(n=""+nt(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+nt(t):""}function $(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(a(92));if(Ye(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=nt(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),ia(e)}function qr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var tc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $r(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||tc.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function sa(e,n,t){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&t[l]!==r&&$r(e,l,r)}else for(var s in n)n.hasOwnProperty(s)&&$r(e,s,n[s])}function Xr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_s=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fr(e){return _s.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fn(){}var oa=null;function ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,pr=null;function gs(e){var n=Jn(e);if(n&&(e=n.stateNode)){var t=e[Nn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Hn(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Un(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=r[Nn]||null;if(!l)throw Error(a(90));Hn(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&Pr(r)}break e;case"textarea":ui(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&mr(e,!!t.multiple,n,!1)}}}var fi=!1;function hr(e,n,t){if(fi)return e(n,t);fi=!0;try{var r=e(n);return r}finally{if(fi=!1,(Kr!==null||pr!==null)&&(po(),Kr&&(n=Kr,e=pr,pr=Kr=null,gs(n),e)))for(n=0;n<e.length;n++)gs(e[n])}}function er(e,n){var t=e.stateNode;if(t===null)return null;var r=t[Nn]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gn=!1;if(Yt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Gn=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Gn=!1}var Nt=null,Rn=null,nr=null;function bs(){if(nr)return nr;var e,n=Rn,t=n.length,r,l="value"in Nt?Nt.value:Nt.textContent,s=l.length;for(e=0;e<t&&n[e]===l[e];e++);var m=t-e;for(r=1;r<=m&&n[t-r]===l[s-r];r++);return nr=l.slice(e,1<r?1-r:void 0)}function di(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function ys(){return!1}function jn(e){function n(t,r,l,s,m){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=m,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(t=e[g],this[g]=t?t(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tr:ys,this.isPropagationStopped=ys,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),n}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=jn(Rt),Zr=v({},Rt,{view:0,detail:0}),rc=jn(Zr),ua,fa,Kn,nn=v({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(ua=e.screenX-Kn.screenX,fa=e.screenY-Kn.screenY):fa=ua=0,Kn=e),ua)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),da=jn(nn),Bl=v({},nn,{dataTransfer:0}),vs=jn(Bl),xs=v({},Zr,{relatedTarget:0}),mi=jn(xs),lc=v({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),ic=jn(lc),ac=v({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ws=jn(ac),Es=v({},Rt,{data:0}),pi=jn(Es),sc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ss={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ks={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ns(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ks[e])?!!n[e]:!1}function ma(){return Ns}var oc=v({},Zr,{key:function(e){if(e.key){var n=sc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ss[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ma,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cc=jn(oc),uc=v({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=jn(uc),fc=v({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ma}),dc=jn(fc),mc=v({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),pc=jn(mc),hc=v({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_c=jn(hc),gc=v({},Rt,{newState:0,oldState:0}),zl=jn(gc),bc=[9,13,27,32],pa=Yt&&"CompositionEvent"in window,Wr=null;Yt&&"documentMode"in document&&(Wr=document.documentMode);var yc=Yt&&"TextEvent"in window&&!Wr,ha=Yt&&(!pa||Wr&&8<Wr&&11>=Wr),Ms=" ",Ts=!1;function _a(e,n){switch(e){case"keyup":return bc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function vc(e,n){switch(e){case"compositionend":return js(n);case"keypress":return n.which!==32?null:(Ts=!0,Ms);case"textInput":return e=n.data,e===Ms&&Ts?null:e;default:return null}}function xc(e,n){if(Jr)return e==="compositionend"||!pa&&_a(e,n)?(e=bs(),nr=Rn=Nt=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ha&&n.locale!=="ko"?null:n.data;default:return null}}var wc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ds(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wc[e.type]:n==="textarea"}function hi(e,n,t,r){Kr?pr?pr.push(r):pr=[r]:Kr=r,n=xo(n,"onChange"),0<n.length&&(t=new _r("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vn=null,el=null;function Ec(e){bp(e,0)}function _i(e){var n=ur(e);if(Pr(n))return e}function As(e,n){if(e==="change")return n}var Ul=!1;if(Yt){var Hl;if(Yt){var gi="oninput"in document;if(!gi){var Gl=document.createElement("div");Gl.setAttribute("oninput","return;"),gi=typeof Gl.oninput=="function"}Hl=gi}else Hl=!1;Ul=Hl&&(!document.documentMode||9<document.documentMode)}function bi(){Vn&&(Vn.detachEvent("onpropertychange",ga),el=Vn=null)}function ga(e){if(e.propertyName==="value"&&_i(el)){var n=[];hi(n,el,e,ca(e)),hr(Ec,n)}}function Sc(e,n,t){e==="focusin"?(bi(),Vn=n,el=t,Vn.attachEvent("onpropertychange",ga)):e==="focusout"&&bi()}function kc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(el)}function d(e,n){if(e==="click")return _i(n)}function h(e,n){if(e==="input"||e==="change")return _i(n)}function E(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var j=typeof Object.is=="function"?Object.is:E;function T(e,n){if(j(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Br.call(n,l)||!j(e[l],n[l]))return!1}return!0}function ae(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ge(e,n){var t=ae(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ae(t)}}function Ze(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ze(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ue(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=It(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=It(e.document)}return n}function xn(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vl=Yt&&"documentMode"in document&&11>=document.documentMode,gr=null,Be=null,dn=null,nl=!1;function br(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;nl||gr==null||gr!==It(r)||(r=gr,"selectionStart"in r&&xn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dn&&T(dn,r)||(dn=r,r=xo(Be,"onSelect"),0<r.length&&(n=new _r("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=gr)))}function tt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Pt={animationend:tt("Animation","AnimationEnd"),animationiteration:tt("Animation","AnimationIteration"),animationstart:tt("Animation","AnimationStart"),transitionrun:tt("Transition","TransitionRun"),transitionstart:tt("Transition","TransitionStart"),transitioncancel:tt("Transition","TransitionCancel"),transitionend:tt("Transition","TransitionEnd")},Il={},ba={};Yt&&(ba=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function Mt(e){if(Il[e])return Il[e];if(!Pt[e])return e;var n=Pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ba)return Il[e]=n[t];return e}var yi=Mt("animationend"),tl=Mt("animationiteration"),ya=Mt("animationstart"),T_=Mt("transitionrun"),j_=Mt("transitionstart"),D_=Mt("transitioncancel"),Zf=Mt("transitionend"),Wf=new Map,Nc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nc.push("scrollEnd");function qt(e,n){Wf.set(e,n),et(n,[e])}var Os=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],vi=0,Rc=0;function Cs(){for(var e=vi,n=Rc=vi=0;n<e;){var t=Tt[n];Tt[n++]=null;var r=Tt[n];Tt[n++]=null;var l=Tt[n];Tt[n++]=null;var s=Tt[n];if(Tt[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}s!==0&&Jf(t,l,s)}}function Ls(e,n,t,r){Tt[vi++]=e,Tt[vi++]=n,Tt[vi++]=t,Tt[vi++]=r,Rc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Mc(e,n,t,r){return Ls(e,n,t,r),Bs(e)}function Yl(e,n){return Ls(e,null,null,n),Bs(e)}function Jf(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var l=!1,s=e.return;s!==null;)s.childLanes|=t,r=s.alternate,r!==null&&(r.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&n!==null&&(l=31-Tn(t),e=s.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=t|536870912),s):null}function Bs(e){if(50<Va)throw Va=0,zu=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xi={};function A_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,n,t,r){return new A_(e,n,t,r)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yr(e,n){var t=e.alternate;return t===null?(t=dt(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function ed(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function zs(e,n,t,r,l,s){var m=0;if(r=e,typeof e=="function")Tc(e)&&(m=1);else if(typeof e=="string")m=zg(e,t,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=dt(31,t,n,l),e.elementType=Se,e.lanes=s,e;case K:return Pl(t.children,l,s,n);case D:m=8,l|=24;break;case B:return e=dt(12,t,n,l|2),e.elementType=B,e.lanes=s,e;case oe:return e=dt(13,t,n,l),e.elementType=oe,e.lanes=s,e;case pe:return e=dt(19,t,n,l),e.elementType=pe,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:m=10;break e;case H:m=9;break e;case se:m=11;break e;case W:m=14;break e;case Z:m=16,r=null;break e}m=29,t=Error(a(130,e===null?"null":typeof e,"")),r=null}return n=dt(m,t,n,l),n.elementType=e,n.type=r,n.lanes=s,n}function Pl(e,n,t,r){return e=dt(7,e,r,n),e.lanes=t,e}function jc(e,n,t){return e=dt(6,e,null,n),e.lanes=t,e}function nd(e){var n=dt(18,null,null,0);return n.stateNode=e,n}function Dc(e,n,t){return n=dt(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var td=new WeakMap;function jt(e,n){if(typeof e=="object"&&e!==null){var t=td.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ln(n)},td.set(e,n),n)}return{value:e,source:n,stack:Ln(n)}}var wi=[],Ei=0,Us=null,va=0,Dt=[],At=0,rl=null,rr=1,lr="";function vr(e,n){wi[Ei++]=va,wi[Ei++]=Us,Us=e,va=n}function rd(e,n,t){Dt[At++]=rr,Dt[At++]=lr,Dt[At++]=rl,rl=e;var r=rr;e=lr;var l=32-Tn(r)-1;r&=~(1<<l),t+=1;var s=32-Tn(n)+l;if(30<s){var m=l-l%5;s=(r&(1<<m)-1).toString(32),r>>=m,l-=m,rr=1<<32-Tn(n)+l|t<<l|r,lr=s+e}else rr=1<<s|t<<l|r,lr=e}function Ac(e){e.return!==null&&(vr(e,1),rd(e,1,0))}function Oc(e){for(;e===Us;)Us=wi[--Ei],wi[Ei]=null,va=wi[--Ei],wi[Ei]=null;for(;e===rl;)rl=Dt[--At],Dt[At]=null,lr=Dt[--At],Dt[At]=null,rr=Dt[--At],Dt[At]=null}function ld(e,n){Dt[At++]=rr,Dt[At++]=lr,Dt[At++]=rl,rr=n.id,lr=n.overflow,rl=e}var Dn=null,We=null,Ce=!1,ll=null,Ot=!1,Cc=Error(a(519));function il(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xa(jt(n,e)),Cc}function id(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[sn]=e,n[Nn]=r,t){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(t=0;t<Ya.length;t++)Me(Ya[t],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),hs(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),$(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||wp(n.textContent,t)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=Fn),n=!0):n=!1,n||il(e,!0)}function ad(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:Dn=Dn.return}}function Si(e){if(e!==Dn)return!1;if(!Ce)return ad(e),Ce=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Wu(e.type,e.memoizedProps)),t=!t),t&&We&&il(e),ad(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=Dp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=Dp(e)}else n===27?(n=We,yl(e.type)?(e=rf,rf=null,We=e):We=n):We=Dn?Lt(e.stateNode.nextSibling):null;return!0}function ql(){We=Dn=null,Ce=!1}function Lc(){var e=ll;return e!==null&&(at===null?at=e:at.push.apply(at,e),ll=null),e}function xa(e){ll===null?ll=[e]:ll.push(e)}var Bc=N(null),$l=null,xr=null;function al(e,n,t){te(Bc,n._currentValue),n._currentValue=t}function wr(e){e._currentValue=Bc.current,I(Bc)}function zc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Uc(e,n,t,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var m=l.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=l;for(var k=0;k<n.length;k++)if(g.context===n[k]){s.lanes|=t,g=s.alternate,g!==null&&(g.lanes|=t),zc(s.return,t,e),r||(m=null);break e}s=g.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(a(341));m.lanes|=t,s=m.alternate,s!==null&&(s.lanes|=t),zc(m,t,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function ki(e,n,t,r){e=null;for(var l=n,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var g=l.type;j(l.pendingProps.value,m.value)||(e!==null?e.push(g):e=[g])}}else if(l===F.current){if(m=l.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Fa):e=[Fa])}l=l.return}e!==null&&Uc(n,e,t,r),n.flags|=262144}function Hs(e){for(e=e.firstContext;e!==null;){if(!j(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xl(e){$l=e,xr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return sd($l,e)}function Gs(e,n){return $l===null&&Xl(e),sd(e,n)}function sd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},xr===null){if(e===null)throw Error(a(308));xr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xr=xr.next=n;return t}var O_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},C_=o.unstable_scheduleCallback,L_=o.unstable_NormalPriority,mn={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hc(){return{controller:new O_,data:new Map,refCount:0}}function wa(e){e.refCount--,e.refCount===0&&C_(L_,function(){e.controller.abort()})}var Ea=null,Gc=0,Ni=0,Ri=null;function B_(e,n){if(Ea===null){var t=Ea=[];Gc=0,Ni=Yu(),Ri={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Gc++,n.then(od,od),n}function od(){if(--Gc===0&&Ea!==null){Ri!==null&&(Ri.status="fulfilled");var e=Ea;Ea=null,Ni=0,Ri=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function z_(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var cd=U.S;U.S=function(e,n){$m=bn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&B_(e,n),cd!==null&&cd(e,n)};var Fl=N(null);function Vc(){var e=Fl.current;return e!==null?e:Qe.pooledCache}function Vs(e,n){n===null?te(Fl,Fl.current):te(Fl,n.pool)}function ud(){var e=Vc();return e===null?null:{parent:mn._currentValue,pool:e}}var Mi=Error(a(460)),Ic=Error(a(474)),Is=Error(a(542)),Ys={then:function(){}};function fd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Fn,Fn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pd(e),e;default:if(typeof n.status=="string")n.then(Fn,Fn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pd(e),e}throw Ql=n,Mi}}function Kl(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ql=t,Mi):t}}var Ql=null;function md(){if(Ql===null)throw Error(a(459));var e=Ql;return Ql=null,e}function pd(e){if(e===Mi||e===Is)throw Error(a(483))}var Ti=null,Sa=0;function Ps(e){var n=Sa;return Sa+=1,Ti===null&&(Ti=[]),dd(Ti,e,n)}function ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function qs(e,n){throw n.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function hd(e){function n(M,R){if(e){var A=M.deletions;A===null?(M.deletions=[R],M.flags|=16):A.push(R)}}function t(M,R){if(!e)return null;for(;R!==null;)n(M,R),R=R.sibling;return null}function r(M){for(var R=new Map;M!==null;)M.key!==null?R.set(M.key,M):R.set(M.index,M),M=M.sibling;return R}function l(M,R){return M=yr(M,R),M.index=0,M.sibling=null,M}function s(M,R,A){return M.index=A,e?(A=M.alternate,A!==null?(A=A.index,A<R?(M.flags|=67108866,R):A):(M.flags|=67108866,R)):(M.flags|=1048576,R)}function m(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function g(M,R,A,q){return R===null||R.tag!==6?(R=jc(A,M.mode,q),R.return=M,R):(R=l(R,A),R.return=M,R)}function k(M,R,A,q){var _e=A.type;return _e===K?P(M,R,A.props.children,q,A.key):R!==null&&(R.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Z&&Kl(_e)===R.type)?(R=l(R,A.props),ka(R,A),R.return=M,R):(R=zs(A.type,A.key,A.props,null,M.mode,q),ka(R,A),R.return=M,R)}function C(M,R,A,q){return R===null||R.tag!==4||R.stateNode.containerInfo!==A.containerInfo||R.stateNode.implementation!==A.implementation?(R=Dc(A,M.mode,q),R.return=M,R):(R=l(R,A.children||[]),R.return=M,R)}function P(M,R,A,q,_e){return R===null||R.tag!==7?(R=Pl(A,M.mode,q,_e),R.return=M,R):(R=l(R,A),R.return=M,R)}function X(M,R,A){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=jc(""+R,M.mode,A),R.return=M,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case G:return A=zs(R.type,R.key,R.props,null,M.mode,A),ka(A,R),A.return=M,A;case Y:return R=Dc(R,M.mode,A),R.return=M,R;case Z:return R=Kl(R),X(M,R,A)}if(Ye(R)||ie(R))return R=Pl(R,M.mode,A,null),R.return=M,R;if(typeof R.then=="function")return X(M,Ps(R),A);if(R.$$typeof===re)return X(M,Gs(M,R),A);qs(M,R)}return null}function L(M,R,A,q){var _e=R!==null?R.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return _e!==null?null:g(M,R,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case G:return A.key===_e?k(M,R,A,q):null;case Y:return A.key===_e?C(M,R,A,q):null;case Z:return A=Kl(A),L(M,R,A,q)}if(Ye(A)||ie(A))return _e!==null?null:P(M,R,A,q,null);if(typeof A.then=="function")return L(M,R,Ps(A),q);if(A.$$typeof===re)return L(M,R,Gs(M,A),q);qs(M,A)}return null}function V(M,R,A,q,_e){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return M=M.get(A)||null,g(R,M,""+q,_e);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case G:return M=M.get(q.key===null?A:q.key)||null,k(R,M,q,_e);case Y:return M=M.get(q.key===null?A:q.key)||null,C(R,M,q,_e);case Z:return q=Kl(q),V(M,R,A,q,_e)}if(Ye(q)||ie(q))return M=M.get(A)||null,P(R,M,q,_e,null);if(typeof q.then=="function")return V(M,R,A,Ps(q),_e);if(q.$$typeof===re)return V(M,R,A,Gs(R,q),_e);qs(R,q)}return null}function fe(M,R,A,q){for(var _e=null,He=null,me=R,Ne=R=0,Ae=null;me!==null&&Ne<A.length;Ne++){me.index>Ne?(Ae=me,me=null):Ae=me.sibling;var Ge=L(M,me,A[Ne],q);if(Ge===null){me===null&&(me=Ae);break}e&&me&&Ge.alternate===null&&n(M,me),R=s(Ge,R,Ne),He===null?_e=Ge:He.sibling=Ge,He=Ge,me=Ae}if(Ne===A.length)return t(M,me),Ce&&vr(M,Ne),_e;if(me===null){for(;Ne<A.length;Ne++)me=X(M,A[Ne],q),me!==null&&(R=s(me,R,Ne),He===null?_e=me:He.sibling=me,He=me);return Ce&&vr(M,Ne),_e}for(me=r(me);Ne<A.length;Ne++)Ae=V(me,M,Ne,A[Ne],q),Ae!==null&&(e&&Ae.alternate!==null&&me.delete(Ae.key===null?Ne:Ae.key),R=s(Ae,R,Ne),He===null?_e=Ae:He.sibling=Ae,He=Ae);return e&&me.forEach(function(Sl){return n(M,Sl)}),Ce&&vr(M,Ne),_e}function be(M,R,A,q){if(A==null)throw Error(a(151));for(var _e=null,He=null,me=R,Ne=R=0,Ae=null,Ge=A.next();me!==null&&!Ge.done;Ne++,Ge=A.next()){me.index>Ne?(Ae=me,me=null):Ae=me.sibling;var Sl=L(M,me,Ge.value,q);if(Sl===null){me===null&&(me=Ae);break}e&&me&&Sl.alternate===null&&n(M,me),R=s(Sl,R,Ne),He===null?_e=Sl:He.sibling=Sl,He=Sl,me=Ae}if(Ge.done)return t(M,me),Ce&&vr(M,Ne),_e;if(me===null){for(;!Ge.done;Ne++,Ge=A.next())Ge=X(M,Ge.value,q),Ge!==null&&(R=s(Ge,R,Ne),He===null?_e=Ge:He.sibling=Ge,He=Ge);return Ce&&vr(M,Ne),_e}for(me=r(me);!Ge.done;Ne++,Ge=A.next())Ge=V(me,M,Ne,Ge.value,q),Ge!==null&&(e&&Ge.alternate!==null&&me.delete(Ge.key===null?Ne:Ge.key),R=s(Ge,R,Ne),He===null?_e=Ge:He.sibling=Ge,He=Ge);return e&&me.forEach(function(Fg){return n(M,Fg)}),Ce&&vr(M,Ne),_e}function Fe(M,R,A,q){if(typeof A=="object"&&A!==null&&A.type===K&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case G:e:{for(var _e=A.key;R!==null;){if(R.key===_e){if(_e=A.type,_e===K){if(R.tag===7){t(M,R.sibling),q=l(R,A.props.children),q.return=M,M=q;break e}}else if(R.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Z&&Kl(_e)===R.type){t(M,R.sibling),q=l(R,A.props),ka(q,A),q.return=M,M=q;break e}t(M,R);break}else n(M,R);R=R.sibling}A.type===K?(q=Pl(A.props.children,M.mode,q,A.key),q.return=M,M=q):(q=zs(A.type,A.key,A.props,null,M.mode,q),ka(q,A),q.return=M,M=q)}return m(M);case Y:e:{for(_e=A.key;R!==null;){if(R.key===_e)if(R.tag===4&&R.stateNode.containerInfo===A.containerInfo&&R.stateNode.implementation===A.implementation){t(M,R.sibling),q=l(R,A.children||[]),q.return=M,M=q;break e}else{t(M,R);break}else n(M,R);R=R.sibling}q=Dc(A,M.mode,q),q.return=M,M=q}return m(M);case Z:return A=Kl(A),Fe(M,R,A,q)}if(Ye(A))return fe(M,R,A,q);if(ie(A)){if(_e=ie(A),typeof _e!="function")throw Error(a(150));return A=_e.call(A),be(M,R,A,q)}if(typeof A.then=="function")return Fe(M,R,Ps(A),q);if(A.$$typeof===re)return Fe(M,R,Gs(M,A),q);qs(M,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,R!==null&&R.tag===6?(t(M,R.sibling),q=l(R,A),q.return=M,M=q):(t(M,R),q=jc(A,M.mode,q),q.return=M,M=q),m(M)):t(M,R)}return function(M,R,A,q){try{Sa=0;var _e=Fe(M,R,A,q);return Ti=null,_e}catch(me){if(me===Mi||me===Is)throw me;var He=dt(29,me,null,M.mode);return He.lanes=q,He.return=M,He}finally{}}}var Zl=hd(!0),_d=hd(!1),sl=!1;function Yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ol(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Bs(e),Jf(e,null,t),n}return Ls(e,r,n,t),Bs(e)}function Na(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ci(e,t)}}function qc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?l=s=m:s=s.next=m,t=t.next}while(t!==null);s===null?l=s=n:s=s.next=n}else l=s=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var $c=!1;function Ra(){if($c){var e=Ri;if(e!==null)throw e}}function Ma(e,n,t,r){$c=!1;var l=e.updateQueue;sl=!1;var s=l.firstBaseUpdate,m=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var k=g,C=k.next;k.next=null,m===null?s=C:m.next=C,m=k;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==m&&(g===null?P.firstBaseUpdate=C:g.next=C,P.lastBaseUpdate=k))}if(s!==null){var X=l.baseState;m=0,P=C=k=null,g=s;do{var L=g.lane&-536870913,V=L!==g.lane;if(V?(De&L)===L:(r&L)===L){L!==0&&L===Ni&&($c=!0),P!==null&&(P=P.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var fe=e,be=g;L=n;var Fe=t;switch(be.tag){case 1:if(fe=be.payload,typeof fe=="function"){X=fe.call(Fe,X,L);break e}X=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=be.payload,L=typeof fe=="function"?fe.call(Fe,X,L):fe,L==null)break e;X=v({},X,L);break e;case 2:sl=!0}}L=g.callback,L!==null&&(e.flags|=64,V&&(e.flags|=8192),V=l.callbacks,V===null?l.callbacks=[L]:V.push(L))}else V={lane:L,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(C=P=V,k=X):P=P.next=V,m|=L;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;V=g,g=V.next,V.next=null,l.lastBaseUpdate=V,l.shared.pending=null}}while(!0);P===null&&(k=X),l.baseState=k,l.firstBaseUpdate=C,l.lastBaseUpdate=P,s===null&&(l.shared.lanes=0),pl|=m,e.lanes=m,e.memoizedState=X}}function gd(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function bd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)gd(t[e],n)}var ji=N(null),$s=N(0);function yd(e,n){e=Dr,te($s,e),te(ji,n),Dr=e|n.baseLanes}function Xc(){te($s,Dr),te(ji,ji.current)}function Fc(){Dr=$s.current,I(ji),I($s)}var mt=N(null),Ct=null;function ul(e){var n=e.alternate;te(on,on.current&1),te(mt,e),Ct===null&&(n===null||ji.current!==null||n.memoizedState!==null)&&(Ct=e)}function Kc(e){te(on,on.current),te(mt,e),Ct===null&&(Ct=e)}function vd(e){e.tag===22?(te(on,on.current),te(mt,e),Ct===null&&(Ct=e)):fl()}function fl(){te(on,on.current),te(mt,mt.current)}function pt(e){I(mt),Ct===e&&(Ct=null),I(on)}var on=N(0);function Xs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||nf(t)||tf(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Er=0,ke=null,$e=null,pn=null,Fs=!1,Di=!1,Wl=!1,Ks=0,Ta=0,Ai=null,U_=0;function rn(){throw Error(a(321))}function Qc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!j(e[t],n[t]))return!1;return!0}function Zc(e,n,t,r,l,s){return Er=s,ke=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?rm:du,Wl=!1,s=t(r,l),Wl=!1,Di&&(s=wd(n,t,r,l)),xd(e),s}function xd(e){U.H=Aa;var n=$e!==null&&$e.next!==null;if(Er=0,pn=$e=ke=null,Fs=!1,Ta=0,Ai=null,n)throw Error(a(300));e===null||hn||(e=e.dependencies,e!==null&&Hs(e)&&(hn=!0))}function wd(e,n,t,r){ke=e;var l=0;do{if(Di&&(Ai=null),Ta=0,Di=!1,25<=l)throw Error(a(301));if(l+=1,pn=$e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}U.H=lm,s=n(t,r)}while(Di);return s}function H_(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?ja(n):n,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(ke.flags|=1024),n}function Wc(){var e=Ks!==0;return Ks=0,e}function Jc(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function eu(e){if(Fs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Fs=!1}Er=0,pn=$e=ke=null,Di=!1,Ta=Ks=0,Ai=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ke.memoizedState=pn=e:pn=pn.next=e,pn}function cn(){if($e===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=pn===null?ke.memoizedState:pn.next;if(n!==null)pn=n,$e=e;else{if(e===null)throw ke.alternate===null?Error(a(467)):Error(a(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},pn===null?ke.memoizedState=pn=e:pn=pn.next=e}return pn}function Qs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ja(e){var n=Ta;return Ta+=1,Ai===null&&(Ai=[]),e=dd(Ai,e,n),n=ke,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?rm:du),e}function Zs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ja(e);if(e.$$typeof===re)return An(e)}throw Error(a(438,String(e)))}function nu(e){var n=null,t=ke.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=ke.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Qs(),ke.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=ye;return n.index++,t}function Sr(e,n){return typeof n=="function"?n(e):n}function Ws(e){var n=cn();return tu(n,$e,e)}function tu(e,n,t){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=e.baseQueue,s=r.pending;if(s!==null){if(l!==null){var m=l.next;l.next=s.next,s.next=m}n.baseQueue=l=s,r.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{n=l.next;var g=m=null,k=null,C=n,P=!1;do{var X=C.lane&-536870913;if(X!==C.lane?(De&X)===X:(Er&X)===X){var L=C.revertLane;if(L===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),X===Ni&&(P=!0);else if((Er&L)===L){C=C.next,L===Ni&&(P=!0);continue}else X={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},k===null?(g=k=X,m=s):k=k.next=X,ke.lanes|=L,pl|=L;X=C.action,Wl&&t(s,X),s=C.hasEagerState?C.eagerState:t(s,X)}else L={lane:X,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},k===null?(g=k=L,m=s):k=k.next=L,ke.lanes|=X,pl|=X;C=C.next}while(C!==null&&C!==n);if(k===null?m=s:k.next=g,!j(s,e.memoizedState)&&(hn=!0,P&&(t=Ri,t!==null)))throw t;e.memoizedState=s,e.baseState=m,e.baseQueue=k,r.lastRenderedState=s}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ru(e){var n=cn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,s=n.memoizedState;if(l!==null){t.pending=null;var m=l=l.next;do s=e(s,m.action),m=m.next;while(m!==l);j(s,n.memoizedState)||(hn=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function Ed(e,n,t){var r=ke,l=cn(),s=Ce;if(s){if(t===void 0)throw Error(a(407));t=t()}else t=n();var m=!j(($e||l).memoizedState,t);if(m&&(l.memoizedState=t,hn=!0),l=l.queue,au(Nd.bind(null,r,l,e),[e]),l.getSnapshot!==n||m||pn!==null&&pn.memoizedState.tag&1){if(r.flags|=2048,Oi(9,{destroy:void 0},kd.bind(null,r,l,t,n),null),Qe===null)throw Error(a(349));s||(Er&127)!==0||Sd(r,n,t)}return t}function Sd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ke.updateQueue,n===null?(n=Qs(),ke.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function kd(e,n,t,r){n.value=t,n.getSnapshot=r,Rd(n)&&Md(e)}function Nd(e,n,t){return t(function(){Rd(n)&&Md(e)})}function Rd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!j(e,t)}catch{return!0}}function Md(e){var n=Yl(e,2);n!==null&&st(n,e,2)}function lu(e){var n=Qn();if(typeof e=="function"){var t=e;if(e=t(),Wl){ct(!0);try{t()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},n}function Td(e,n,t,r){return e.baseState=t,tu(e,$e,typeof r=="function"?r:Sr)}function G_(e,n,t,r,l){if(no(e))throw Error(a(485));if(e=n.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){s.listeners.push(m)}};U.T!==null?t(!0):s.isTransition=!1,r(s),t=n.pending,t===null?(s.next=n.pending=s,jd(n,s)):(s.next=t.next,n.pending=t.next=s)}}function jd(e,n){var t=n.action,r=n.payload,l=e.state;if(n.isTransition){var s=U.T,m={};U.T=m;try{var g=t(l,r),k=U.S;k!==null&&k(m,g),Dd(e,n,g)}catch(C){iu(e,n,C)}finally{s!==null&&m.types!==null&&(s.types=m.types),U.T=s}}else try{s=t(l,r),Dd(e,n,s)}catch(C){iu(e,n,C)}}function Dd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){Ad(e,n,r)},function(r){return iu(e,n,r)}):Ad(e,n,t)}function Ad(e,n,t){n.status="fulfilled",n.value=t,Od(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,jd(e,t)))}function iu(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,Od(n),n=n.next;while(n!==r)}e.action=null}function Od(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cd(e,n){return n}function Ld(e,n){if(Ce){var t=Qe.formState;if(t!==null){e:{var r=ke;if(Ce){if(We){n:{for(var l=We,s=Ot;l.nodeType!==8;){if(!s){l=null;break n}if(l=Lt(l.nextSibling),l===null){l=null;break n}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){We=Lt(l.nextSibling),r=l.data==="F!";break e}}il(r)}r=!1}r&&(n=t[0])}}return t=Qn(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cd,lastRenderedState:n},t.queue=r,t=em.bind(null,ke,r),r.dispatch=t,r=lu(!1),s=fu.bind(null,ke,!1,r.queue),r=Qn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,t=G_.bind(null,ke,l,s,t),l.dispatch=t,r.memoizedState=e,[n,t,!1]}function Bd(e){var n=cn();return zd(n,$e,e)}function zd(e,n,t){if(n=tu(e,n,Cd)[0],e=Ws(Sr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ja(n)}catch(m){throw m===Mi?Is:m}else r=n;n=cn();var l=n.queue,s=l.dispatch;return t!==n.memoizedState&&(ke.flags|=2048,Oi(9,{destroy:void 0},V_.bind(null,l,t),null)),[r,s,e]}function V_(e,n){e.action=n}function Ud(e){var n=cn(),t=$e;if(t!==null)return zd(n,t,e);cn(),n=n.memoizedState,t=cn();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function Oi(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=ke.updateQueue,n===null&&(n=Qs(),ke.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Hd(){return cn().memoizedState}function Js(e,n,t,r){var l=Qn();ke.flags|=e,l.memoizedState=Oi(1|n,{destroy:void 0},t,r===void 0?null:r)}function eo(e,n,t,r){var l=cn();r=r===void 0?null:r;var s=l.memoizedState.inst;$e!==null&&r!==null&&Qc(r,$e.memoizedState.deps)?l.memoizedState=Oi(n,s,t,r):(ke.flags|=e,l.memoizedState=Oi(1|n,s,t,r))}function Gd(e,n){Js(8390656,8,e,n)}function au(e,n){eo(2048,8,e,n)}function I_(e){ke.flags|=4;var n=ke.updateQueue;if(n===null)n=Qs(),ke.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Vd(e){var n=cn().memoizedState;return I_({ref:n,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Id(e,n){return eo(4,2,e,n)}function Yd(e,n){return eo(4,4,e,n)}function Pd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qd(e,n,t){t=t!=null?t.concat([e]):null,eo(4,4,Pd.bind(null,n,e),t)}function su(){}function $d(e,n){var t=cn();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&Qc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Xd(e,n){var t=cn();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&Qc(n,r[1]))return r[0];if(r=e(),Wl){ct(!0);try{e()}finally{ct(!1)}}return t.memoizedState=[r,n],r}function ou(e,n,t){return t===void 0||(Er&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Fm(),ke.lanes|=e,pl|=e,t)}function Fd(e,n,t,r){return j(t,n)?t:ji.current!==null?(e=ou(e,t,r),j(e,n)||(hn=!0),e):(Er&42)===0||(Er&1073741824)!==0&&(De&261930)===0?(hn=!0,e.memoizedState=t):(e=Fm(),ke.lanes|=e,pl|=e,n)}function Kd(e,n,t,r,l){var s=ee.p;ee.p=s!==0&&8>s?s:8;var m=U.T,g={};U.T=g,fu(e,!1,n,t);try{var k=l(),C=U.S;if(C!==null&&C(g,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var P=z_(k,r);Da(e,n,P,gt(e))}else Da(e,n,r,gt(e))}catch(X){Da(e,n,{then:function(){},status:"rejected",reason:X},gt())}finally{ee.p=s,m!==null&&g.types!==null&&(m.types=g.types),U.T=m}}function Y_(){}function cu(e,n,t,r){if(e.tag!==5)throw Error(a(476));var l=Qd(e).queue;Kd(e,l,n,ce,t===null?Y_:function(){return Zd(e),t(r)})}function Qd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:ce},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Zd(e){var n=Qd(e);n.next===null&&(n=e.alternate.memoizedState),Da(e,n.next.queue,{},gt())}function uu(){return An(Fa)}function Wd(){return cn().memoizedState}function Jd(){return cn().memoizedState}function P_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=gt();e=ol(t);var r=cl(n,e,t);r!==null&&(st(r,n,t),Na(r,n,t)),n={cache:Hc()},e.payload=n;return}n=n.return}}function q_(e,n,t){var r=gt();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},no(e)?nm(n,t):(t=Mc(e,n,t,r),t!==null&&(st(t,e,r),tm(t,n,r)))}function em(e,n,t){var r=gt();Da(e,n,t,r)}function Da(e,n,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(no(e))nm(n,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var m=n.lastRenderedState,g=s(m,t);if(l.hasEagerState=!0,l.eagerState=g,j(g,m))return Ls(e,n,l,0),Qe===null&&Cs(),!1}catch{}finally{}if(t=Mc(e,n,l,r),t!==null)return st(t,e,r),tm(t,n,r),!0}return!1}function fu(e,n,t,r){if(r={lane:2,revertLane:Yu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},no(e)){if(n)throw Error(a(479))}else n=Mc(e,t,r,2),n!==null&&st(n,e,2)}function no(e){var n=e.alternate;return e===ke||n!==null&&n===ke}function nm(e,n){Di=Fs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function tm(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ci(e,t)}}var Aa={readContext:An,use:Zs,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Aa.useEffectEvent=rn;var rm={readContext:An,use:Zs,useCallback:function(e,n){return Qn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Gd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Js(4194308,4,Pd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Js(4194308,4,e,n)},useInsertionEffect:function(e,n){Js(4,2,e,n)},useMemo:function(e,n){var t=Qn();n=n===void 0?null:n;var r=e();if(Wl){ct(!0);try{e()}finally{ct(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=Qn();if(t!==void 0){var l=t(n);if(Wl){ct(!0);try{t(n)}finally{ct(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=q_.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var n=Qn();return e={current:e},n.memoizedState=e},useState:function(e){e=lu(e);var n=e.queue,t=em.bind(null,ke,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:su,useDeferredValue:function(e,n){var t=Qn();return ou(t,e,n)},useTransition:function(){var e=lu(!1);return e=Kd.bind(null,ke,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=ke,l=Qn();if(Ce){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Qe===null)throw Error(a(349));(De&127)!==0||Sd(r,n,t)}l.memoizedState=t;var s={value:t,getSnapshot:n};return l.queue=s,Gd(Nd.bind(null,r,s,e),[e]),r.flags|=2048,Oi(9,{destroy:void 0},kd.bind(null,r,s,t,n),null),t},useId:function(){var e=Qn(),n=Qe.identifierPrefix;if(Ce){var t=lr,r=rr;t=(r&~(1<<32-Tn(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Ks++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=U_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:uu,useFormState:Ld,useActionState:Ld,useOptimistic:function(e){var n=Qn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=fu.bind(null,ke,!0,t),t.dispatch=n,[e,n]},useMemoCache:nu,useCacheRefresh:function(){return Qn().memoizedState=P_.bind(null,ke)},useEffectEvent:function(e){var n=Qn(),t={impl:e};return n.memoizedState=t,function(){if((Ve&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}},du={readContext:An,use:Zs,useCallback:$d,useContext:An,useEffect:au,useImperativeHandle:qd,useInsertionEffect:Id,useLayoutEffect:Yd,useMemo:Xd,useReducer:Ws,useRef:Hd,useState:function(){return Ws(Sr)},useDebugValue:su,useDeferredValue:function(e,n){var t=cn();return Fd(t,$e.memoizedState,e,n)},useTransition:function(){var e=Ws(Sr)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:ja(e),n]},useSyncExternalStore:Ed,useId:Wd,useHostTransitionStatus:uu,useFormState:Bd,useActionState:Bd,useOptimistic:function(e,n){var t=cn();return Td(t,$e,e,n)},useMemoCache:nu,useCacheRefresh:Jd};du.useEffectEvent=Vd;var lm={readContext:An,use:Zs,useCallback:$d,useContext:An,useEffect:au,useImperativeHandle:qd,useInsertionEffect:Id,useLayoutEffect:Yd,useMemo:Xd,useReducer:ru,useRef:Hd,useState:function(){return ru(Sr)},useDebugValue:su,useDeferredValue:function(e,n){var t=cn();return $e===null?ou(t,e,n):Fd(t,$e.memoizedState,e,n)},useTransition:function(){var e=ru(Sr)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:ja(e),n]},useSyncExternalStore:Ed,useId:Wd,useHostTransitionStatus:uu,useFormState:Ud,useActionState:Ud,useOptimistic:function(e,n){var t=cn();return $e!==null?Td(t,$e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:nu,useCacheRefresh:Jd};lm.useEffectEvent=Vd;function mu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:v({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var pu={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=gt(),l=ol(r);l.payload=n,t!=null&&(l.callback=t),n=cl(e,l,r),n!==null&&(st(n,e,r),Na(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=gt(),l=ol(r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=cl(e,l,r),n!==null&&(st(n,e,r),Na(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=gt(),r=ol(t);r.tag=2,n!=null&&(r.callback=n),n=cl(e,r,t),n!==null&&(st(n,e,t),Na(n,e,t))}};function im(e,n,t,r,l,s,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,m):n.prototype&&n.prototype.isPureReactComponent?!T(t,r)||!T(l,s):!0}function am(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&pu.enqueueReplaceState(n,n.state,null)}function Jl(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=v({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function sm(e){Os(e)}function om(e){console.error(e)}function cm(e){Os(e)}function to(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function um(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function hu(e,n,t){return t=ol(t),t.tag=3,t.payload={element:null},t.callback=function(){to(e,n)},t}function fm(e){return e=ol(e),e.tag=3,e}function dm(e,n,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var s=r.value;e.payload=function(){return l(s)},e.callback=function(){um(n,t,r)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){um(n,t,r),typeof l!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})})}function $_(e,n,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&ki(n,t,l,!0),t=mt.current,t!==null){switch(t.tag){case 31:case 13:return Ct===null?ho():t.alternate===null&&ln===0&&(ln=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===Ys?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Gu(e,r,l)),!1;case 22:return t.flags|=65536,r===Ys?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Gu(e,r,l)),!1}throw Error(a(435,t.tag))}return Gu(e,r,l),ho(),!1}if(Ce)return n=mt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Cc&&(e=Error(a(422),{cause:r}),xa(jt(e,t)))):(r!==Cc&&(n=Error(a(423),{cause:r}),xa(jt(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=jt(r,t),l=hu(e.stateNode,r,l),qc(e,l),ln!==4&&(ln=2)),!1;var s=Error(a(520),{cause:r});if(s=jt(s,t),Ga===null?Ga=[s]:Ga.push(s),ln!==4&&(ln=2),n===null)return!0;r=jt(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=hu(t.stateNode,r,e),qc(t,e),!1;case 1:if(n=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(hl===null||!hl.has(s))))return t.flags|=65536,l&=-l,t.lanes|=l,l=fm(l),dm(l,e,t,r),qc(t,l),!1}t=t.return}while(t!==null);return!1}var _u=Error(a(461)),hn=!1;function On(e,n,t,r){n.child=e===null?_d(n,null,t,r):Zl(n,e.child,t,r)}function mm(e,n,t,r,l){t=t.render;var s=n.ref;if("ref"in r){var m={};for(var g in r)g!=="ref"&&(m[g]=r[g])}else m=r;return Xl(n),r=Zc(e,n,t,m,s,l),g=Wc(),e!==null&&!hn?(Jc(e,n,l),kr(e,n,l)):(Ce&&g&&Ac(n),n.flags|=1,On(e,n,r,l),n.child)}function pm(e,n,t,r,l){if(e===null){var s=t.type;return typeof s=="function"&&!Tc(s)&&s.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=s,hm(e,n,s,r,l)):(e=zs(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!Su(e,l)){var m=s.memoizedProps;if(t=t.compare,t=t!==null?t:T,t(m,r)&&e.ref===n.ref)return kr(e,n,l)}return n.flags|=1,e=yr(s,r),e.ref=n.ref,e.return=n,n.child=e}function hm(e,n,t,r,l){if(e!==null){var s=e.memoizedProps;if(T(s,r)&&e.ref===n.ref)if(hn=!1,n.pendingProps=r=s,Su(e,l))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,kr(e,n,l)}return gu(e,n,t,r,l)}function _m(e,n,t,r){var l=r.children,s=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~s}else r=0,n.child=null;return gm(e,n,s,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vs(n,s!==null?s.cachePool:null),s!==null?yd(n,s):Xc(),vd(n);else return r=n.lanes=536870912,gm(e,n,s!==null?s.baseLanes|t:t,t,r)}else s!==null?(Vs(n,s.cachePool),yd(n,s),fl(),n.memoizedState=null):(e!==null&&Vs(n,null),Xc(),fl());return On(e,n,l,t),n.child}function Oa(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gm(e,n,t,r,l){var s=Vc();return s=s===null?null:{parent:mn._currentValue,pool:s},n.memoizedState={baseLanes:t,cachePool:s},e!==null&&Vs(n,null),Xc(),vd(n),e!==null&&ki(e,n,r,!0),n.childLanes=l,null}function ro(e,n){return n=io({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function bm(e,n,t){return Zl(n,e.child,null,t),e=ro(n,n.pendingProps),e.flags|=2,pt(n),n.memoizedState=null,e}function X_(e,n,t){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(r.mode==="hidden")return e=ro(n,r),n.lanes=536870912,Oa(null,e);if(Kc(n),(e=We)?(e=jp(e,Ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rl!==null?{id:rr,overflow:lr}:null,retryLane:536870912,hydrationErrors:null},t=nd(e),t.return=n,n.child=t,Dn=n,We=null)):e=null,e===null)throw il(n);return n.lanes=536870912,null}return ro(n,r)}var s=e.memoizedState;if(s!==null){var m=s.dehydrated;if(Kc(n),l)if(n.flags&256)n.flags&=-257,n=bm(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(hn||ki(e,n,t,!1),l=(t&e.childLanes)!==0,hn||l){if(r=Qe,r!==null&&(m=ms(r,t),m!==0&&m!==s.retryLane))throw s.retryLane=m,Yl(e,m),st(r,e,m),_u;ho(),n=bm(e,n,t)}else e=s.treeContext,We=Lt(m.nextSibling),Dn=n,Ce=!0,ll=null,Ot=!1,e!==null&&ld(n,e),n=ro(n,r),n.flags|=4096;return n}return e=yr(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function lo(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(a(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function gu(e,n,t,r,l){return Xl(n),t=Zc(e,n,t,r,void 0,l),r=Wc(),e!==null&&!hn?(Jc(e,n,l),kr(e,n,l)):(Ce&&r&&Ac(n),n.flags|=1,On(e,n,t,l),n.child)}function ym(e,n,t,r,l,s){return Xl(n),n.updateQueue=null,t=wd(n,r,t,l),xd(e),r=Wc(),e!==null&&!hn?(Jc(e,n,s),kr(e,n,s)):(Ce&&r&&Ac(n),n.flags|=1,On(e,n,t,s),n.child)}function vm(e,n,t,r,l){if(Xl(n),n.stateNode===null){var s=xi,m=t.contextType;typeof m=="object"&&m!==null&&(s=An(m)),s=new t(r,s),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pu,n.stateNode=s,s._reactInternals=n,s=n.stateNode,s.props=r,s.state=n.memoizedState,s.refs={},Yc(n),m=t.contextType,s.context=typeof m=="object"&&m!==null?An(m):xi,s.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(mu(n,t,m,r),s.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(m=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),m!==s.state&&pu.enqueueReplaceState(s,s.state,null),Ma(n,r,s,l),Ra(),s.state=n.memoizedState),typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){s=n.stateNode;var g=n.memoizedProps,k=Jl(t,g);s.props=k;var C=s.context,P=t.contextType;m=xi,typeof P=="object"&&P!==null&&(m=An(P));var X=t.getDerivedStateFromProps;P=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,P||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||C!==m)&&am(n,s,r,m),sl=!1;var L=n.memoizedState;s.state=L,Ma(n,r,s,l),Ra(),C=n.memoizedState,g||L!==C||sl?(typeof X=="function"&&(mu(n,t,X,r),C=n.memoizedState),(k=sl||im(n,t,k,r,L,C,m))?(P||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=C),s.props=r,s.state=C,s.context=m,r=k):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Pc(e,n),m=n.memoizedProps,P=Jl(t,m),s.props=P,X=n.pendingProps,L=s.context,C=t.contextType,k=xi,typeof C=="object"&&C!==null&&(k=An(C)),g=t.getDerivedStateFromProps,(C=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m!==X||L!==k)&&am(n,s,r,k),sl=!1,L=n.memoizedState,s.state=L,Ma(n,r,s,l),Ra();var V=n.memoizedState;m!==X||L!==V||sl||e!==null&&e.dependencies!==null&&Hs(e.dependencies)?(typeof g=="function"&&(mu(n,t,g,r),V=n.memoizedState),(P=sl||im(n,t,P,r,L,V,k)||e!==null&&e.dependencies!==null&&Hs(e.dependencies))?(C||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,V,k),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,V,k)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=V),s.props=r,s.state=V,s.context=k,r=P):(typeof s.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),r=!1)}return s=r,lo(e,n),r=(n.flags&128)!==0,s||r?(s=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:s.render(),n.flags|=1,e!==null&&r?(n.child=Zl(n,e.child,null,l),n.child=Zl(n,null,t,l)):On(e,n,t,l),n.memoizedState=s.state,e=n.child):e=kr(e,n,l),e}function xm(e,n,t,r){return ql(),n.flags|=256,On(e,n,t,r),n.child}var bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yu(e){return{baseLanes:e,cachePool:ud()}}function vu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=_t),e}function wm(e,n,t){var r=n.pendingProps,l=!1,s=(n.flags&128)!==0,m;if((m=s)||(m=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(l?ul(n):fl(),(e=We)?(e=jp(e,Ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rl!==null?{id:rr,overflow:lr}:null,retryLane:536870912,hydrationErrors:null},t=nd(e),t.return=n,n.child=t,Dn=n,We=null)):e=null,e===null)throw il(n);return tf(e)?n.lanes=32:n.lanes=536870912,null}var g=r.children;return r=r.fallback,l?(fl(),l=n.mode,g=io({mode:"hidden",children:g},l),r=Pl(r,l,t,null),g.return=n,r.return=n,g.sibling=r,n.child=g,r=n.child,r.memoizedState=yu(t),r.childLanes=vu(e,m,t),n.memoizedState=bu,Oa(null,r)):(ul(n),xu(n,g))}var k=e.memoizedState;if(k!==null&&(g=k.dehydrated,g!==null)){if(s)n.flags&256?(ul(n),n.flags&=-257,n=wu(e,n,t)):n.memoizedState!==null?(fl(),n.child=e.child,n.flags|=128,n=null):(fl(),g=r.fallback,l=n.mode,r=io({mode:"visible",children:r.children},l),g=Pl(g,l,t,null),g.flags|=2,r.return=n,g.return=n,r.sibling=g,n.child=r,Zl(n,e.child,null,t),r=n.child,r.memoizedState=yu(t),r.childLanes=vu(e,m,t),n.memoizedState=bu,n=Oa(null,r));else if(ul(n),tf(g)){if(m=g.nextSibling&&g.nextSibling.dataset,m)var C=m.dgst;m=C,r=Error(a(419)),r.stack="",r.digest=m,xa({value:r,source:null,stack:null}),n=wu(e,n,t)}else if(hn||ki(e,n,t,!1),m=(t&e.childLanes)!==0,hn||m){if(m=Qe,m!==null&&(r=ms(m,t),r!==0&&r!==k.retryLane))throw k.retryLane=r,Yl(e,r),st(m,e,r),_u;nf(g)||ho(),n=wu(e,n,t)}else nf(g)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,We=Lt(g.nextSibling),Dn=n,Ce=!0,ll=null,Ot=!1,e!==null&&ld(n,e),n=xu(n,r.children),n.flags|=4096);return n}return l?(fl(),g=r.fallback,l=n.mode,k=e.child,C=k.sibling,r=yr(k,{mode:"hidden",children:r.children}),r.subtreeFlags=k.subtreeFlags&65011712,C!==null?g=yr(C,g):(g=Pl(g,l,t,null),g.flags|=2),g.return=n,r.return=n,r.sibling=g,n.child=r,Oa(null,r),r=n.child,g=e.child.memoizedState,g===null?g=yu(t):(l=g.cachePool,l!==null?(k=mn._currentValue,l=l.parent!==k?{parent:k,pool:k}:l):l=ud(),g={baseLanes:g.baseLanes|t,cachePool:l}),r.memoizedState=g,r.childLanes=vu(e,m,t),n.memoizedState=bu,Oa(e.child,r)):(ul(n),t=e.child,e=t.sibling,t=yr(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function xu(e,n){return n=io({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function io(e,n){return e=dt(22,e,null,n),e.lanes=0,e}function wu(e,n,t){return Zl(n,e.child,null,t),e=xu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Em(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),zc(e.return,n,t)}function Eu(e,n,t,r,l,s){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:s}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=t,m.tailMode=l,m.treeForkCount=s)}function Sm(e,n,t){var r=n.pendingProps,l=r.revealOrder,s=r.tail;r=r.children;var m=on.current,g=(m&2)!==0;if(g?(m=m&1|2,n.flags|=128):m&=1,te(on,m),On(e,n,r,t),r=Ce?va:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Em(e,t,n);else if(e.tag===19)Em(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Xs(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Eu(n,!1,l,t,s,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Xs(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Eu(n,!0,t,null,s,r);break;case"together":Eu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function kr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ki(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=yr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=yr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Su(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Hs(e)))}function F_(e,n,t){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),al(n,mn,e.memoizedState.cache),ql();break;case 27:case 5:Pn(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:al(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Kc(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ul(n),n.flags|=128,null):(t&n.child.childLanes)!==0?wm(e,n,t):(ul(n),e=kr(e,n,t),e!==null?e.sibling:null);ul(n);break;case 19:var l=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(ki(e,n,t,!1),r=(t&n.childLanes)!==0),l){if(r)return Sm(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),te(on,on.current),r)break;return null;case 22:return n.lanes=0,_m(e,n,t,n.pendingProps);case 24:al(n,mn,e.memoizedState.cache)}return kr(e,n,t)}function km(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Su(e,t)&&(n.flags&128)===0)return hn=!1,F_(e,n,t);hn=(e.flags&131072)!==0}else hn=!1,Ce&&(n.flags&1048576)!==0&&rd(n,va,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Kl(n.elementType),n.type=e,typeof e=="function")Tc(e)?(r=Jl(e,r),n.tag=1,n=vm(null,n,e,r,t)):(n.tag=0,n=gu(null,n,e,r,t));else{if(e!=null){var l=e.$$typeof;if(l===se){n.tag=11,n=mm(null,n,e,r,t);break e}else if(l===W){n.tag=14,n=pm(null,n,e,r,t);break e}}throw n=Te(e)||e,Error(a(306,n,""))}}return n;case 0:return gu(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,l=Jl(r,n.pendingProps),vm(e,n,r,l,t);case 3:e:{if(Le(n,n.stateNode.containerInfo),e===null)throw Error(a(387));r=n.pendingProps;var s=n.memoizedState;l=s.element,Pc(e,n),Ma(n,r,null,t);var m=n.memoizedState;if(r=m.cache,al(n,mn,r),r!==s.cache&&Uc(n,[mn],t,!0),Ra(),r=m.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){n=xm(e,n,r,t);break e}else if(r!==l){l=jt(Error(a(424)),n),xa(l),n=xm(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=Lt(e.firstChild),Dn=n,Ce=!0,ll=null,Ot=!0,t=_d(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(ql(),r===l){n=kr(e,n,t);break e}On(e,n,r,t)}n=n.child}return n;case 26:return lo(e,n),e===null?(t=Bp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ce||(t=n.type,e=n.pendingProps,r=wo(J.current).createElement(t),r[sn]=n,r[Nn]=e,Cn(r,t,e),en(r),n.stateNode=r):n.memoizedState=Bp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pn(n),e===null&&Ce&&(r=n.stateNode=Op(n.type,n.pendingProps,J.current),Dn=n,Ot=!0,l=We,yl(n.type)?(rf=l,We=Lt(r.firstChild)):We=l),On(e,n,n.pendingProps.children,t),lo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((l=r=We)&&(r=Sg(r,n.type,n.pendingProps,Ot),r!==null?(n.stateNode=r,Dn=n,We=Lt(r.firstChild),Ot=!1,l=!0):l=!1),l||il(n)),Pn(n),l=n.type,s=n.pendingProps,m=e!==null?e.memoizedProps:null,r=s.children,Wu(l,s)?r=null:m!==null&&Wu(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=Zc(e,n,H_,null,null,t),Fa._currentValue=l),lo(e,n),On(e,n,r,t),n.child;case 6:return e===null&&Ce&&((e=t=We)&&(t=kg(t,n.pendingProps,Ot),t!==null?(n.stateNode=t,Dn=n,We=null,e=!0):e=!1),e||il(n)),null;case 13:return wm(e,n,t);case 4:return Le(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zl(n,null,r,t):On(e,n,r,t),n.child;case 11:return mm(e,n,n.type,n.pendingProps,t);case 7:return On(e,n,n.pendingProps,t),n.child;case 8:return On(e,n,n.pendingProps.children,t),n.child;case 12:return On(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,al(n,n.type,r.value),On(e,n,r.children,t),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,Xl(n),l=An(l),r=r(l),n.flags|=1,On(e,n,r,t),n.child;case 14:return pm(e,n,n.type,n.pendingProps,t);case 15:return hm(e,n,n.type,n.pendingProps,t);case 19:return Sm(e,n,t);case 31:return X_(e,n,t);case 22:return _m(e,n,t,n.pendingProps);case 24:return Xl(n),r=An(mn),e===null?(l=Vc(),l===null&&(l=Qe,s=Hc(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=t),l=s),n.memoizedState={parent:r,cache:l},Yc(n),al(n,mn,l)):((e.lanes&t)!==0&&(Pc(e,n),Ma(n,null,null,t),Ra()),l=e.memoizedState,s=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),al(n,mn,r)):(r=s.cache,al(n,mn,r),r!==l.cache&&Uc(n,[mn],t,!0))),On(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Nr(e){e.flags|=4}function ku(e,n,t,r,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Wm())e.flags|=8192;else throw Ql=Ys,Ic}else e.flags&=-16777217}function Nm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vp(n))if(Wm())e.flags|=8192;else throw Ql=Ys,Ic}function ao(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?oi():536870912,e.lanes|=n,zi|=n)}function Ca(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function K_(e,n,t){var r=n.pendingProps;switch(Oc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),wr(mn),je(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Si(n)?Nr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lc())),Je(n),null;case 26:var l=n.type,s=n.memoizedState;return e===null?(Nr(n),s!==null?(Je(n),Nm(n,s)):(Je(n),ku(n,l,null,r,t))):s?s!==e.memoizedState?(Nr(n),Je(n),Nm(n,s)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Nr(n),Je(n),ku(n,l,e,r,t)),null;case 27:if(Ft(n),t=J.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Nr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Je(n),null}e=O.current,Si(n)?id(n):(e=Op(l,r,t),n.stateNode=e,Nr(n))}return Je(n),null;case 5:if(Ft(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Nr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Je(n),null}if(s=O.current,Si(n))id(n);else{var m=wo(J.current);switch(s){case 1:s=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=m.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?s.multiple=!0:r.size&&(s.size=r.size);break;default:s=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}s[sn]=n,s[Nn]=r;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)s.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=s;e:switch(Cn(s,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Nr(n)}}return Je(n),ku(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Nr(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(e=J.current,Si(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,l=Dn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[sn]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||wp(e.nodeValue,t)),e||il(n,!0)}else e=wo(e).createTextNode(r),e[sn]=n,n.stateNode=e}return Je(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=Si(n),t!==null){if(e===null){if(!r)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[sn]=n}else ql(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else t=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(pt(n),n):(pt(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Je(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Si(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[sn]=n}else ql(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),l=!1}else l=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(pt(n),n):(pt(n),null)}return pt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==l&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),ao(n,n.updateQueue),Je(n),null);case 4:return je(),e===null&&Xu(n.stateNode.containerInfo),Je(n),null;case 10:return wr(n.type),Je(n),null;case 19:if(I(on),r=n.memoizedState,r===null)return Je(n),null;if(l=(n.flags&128)!==0,s=r.rendering,s===null)if(l)Ca(r,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=Xs(e),s!==null){for(n.flags|=128,Ca(r,!1),e=s.updateQueue,n.updateQueue=e,ao(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)ed(t,e),t=t.sibling;return te(on,on.current&1|2),Ce&&vr(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&bn()>fo&&(n.flags|=128,l=!0,Ca(r,!1),n.lanes=4194304)}else{if(!l)if(e=Xs(s),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,ao(n,e),Ca(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Ce)return Je(n),null}else 2*bn()-r.renderingStartTime>fo&&t!==536870912&&(n.flags|=128,l=!0,Ca(r,!1),n.lanes=4194304);r.isBackwards?(s.sibling=n.child,n.child=s):(e=r.last,e!==null?e.sibling=s:n.child=s,r.last=s)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=bn(),e.sibling=null,t=on.current,te(on,l?t&1|2:t&1),Ce&&vr(n,r.treeForkCount),e):(Je(n),null);case 22:case 23:return pt(n),Fc(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),t=n.updateQueue,t!==null&&ao(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&I(Fl),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),wr(mn),Je(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Q_(e,n){switch(Oc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wr(mn),je(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ft(n),null;case 31:if(n.memoizedState!==null){if(pt(n),n.alternate===null)throw Error(a(340));ql()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(pt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));ql()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(on),null;case 4:return je(),null;case 10:return wr(n.type),null;case 22:case 23:return pt(n),Fc(),e!==null&&I(Fl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return wr(mn),null;case 25:return null;default:return null}}function Rm(e,n){switch(Oc(n),n.tag){case 3:wr(mn),je();break;case 26:case 27:case 5:Ft(n);break;case 4:je();break;case 31:n.memoizedState!==null&&pt(n);break;case 13:pt(n);break;case 19:I(on);break;case 10:wr(n.type);break;case 22:case 23:pt(n),Fc(),e!==null&&I(Fl);break;case 24:wr(mn)}}function La(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&e)===e){r=void 0;var s=t.create,m=t.inst;r=s(),m.destroy=r}t=t.next}while(t!==l)}}catch(g){qe(n,n.return,g)}}function dl(e,n,t){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var s=l.next;r=s;do{if((r.tag&e)===e){var m=r.inst,g=m.destroy;if(g!==void 0){m.destroy=void 0,l=n;var k=t,C=g;try{C()}catch(P){qe(l,k,P)}}}r=r.next}while(r!==s)}}catch(P){qe(n,n.return,P)}}function Mm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{bd(n,t)}catch(r){qe(e,e.return,r)}}}function Tm(e,n,t){t.props=Jl(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){qe(e,n,r)}}function Ba(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(l){qe(e,n,l)}}function ir(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){qe(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){qe(e,n,l)}else t.current=null}function jm(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){qe(e,e.return,l)}}function Nu(e,n,t){try{var r=e.stateNode;bg(r,e.type,t,n),r[Nn]=n}catch(l){qe(e,e.return,l)}}function Dm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type)||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fn));else if(r!==4&&(r===27&&yl(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Mu(e,n,t),e=e.sibling;e!==null;)Mu(e,n,t),e=e.sibling}function so(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&yl(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(so(e,n,t),e=e.sibling;e!==null;)so(e,n,t),e=e.sibling}function Am(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Cn(n,r,t),n[sn]=e,n[Nn]=t}catch(s){qe(e,e.return,s)}}var Rr=!1,_n=!1,Tu=!1,Om=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Z_(e,n){if(e=e.containerInfo,Qu=To,e=Ue(e),xn(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var m=0,g=-1,k=-1,C=0,P=0,X=e,L=null;n:for(;;){for(var V;X!==t||l!==0&&X.nodeType!==3||(g=m+l),X!==s||r!==0&&X.nodeType!==3||(k=m+r),X.nodeType===3&&(m+=X.nodeValue.length),(V=X.firstChild)!==null;)L=X,X=V;for(;;){if(X===e)break n;if(L===t&&++C===l&&(g=m),L===s&&++P===r&&(k=m),(V=X.nextSibling)!==null)break;X=L,L=X.parentNode}X=V}t=g===-1||k===-1?null:{start:g,end:k}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zu={focusedElem:e,selectionRange:t},To=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,s=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=n,l=s.memoizedProps,s=s.memoizedState,r=t.stateNode;try{var fe=Jl(t.type,l);e=r.getSnapshotBeforeUpdate(fe,s),r.__reactInternalSnapshotBeforeUpdate=e}catch(be){qe(t,t.return,be)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)ef(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ef(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function Cm(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Tr(e,t),r&4&&La(5,t);break;case 1:if(Tr(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){qe(t,t.return,m)}else{var l=Jl(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){qe(t,t.return,m)}}r&64&&Mm(t),r&512&&Ba(t,t.return);break;case 3:if(Tr(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{bd(e,n)}catch(m){qe(t,t.return,m)}}break;case 27:n===null&&r&4&&Am(t);case 26:case 5:Tr(e,t),n===null&&r&4&&jm(t),r&512&&Ba(t,t.return);break;case 12:Tr(e,t);break;case 31:Tr(e,t),r&4&&zm(e,t);break;case 13:Tr(e,t),r&4&&Um(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=ag.bind(null,t),Ng(e,t))));break;case 22:if(r=t.memoizedState!==null||Rr,!r){n=n!==null&&n.memoizedState!==null||_n,l=Rr;var s=_n;Rr=r,(_n=n)&&!s?jr(e,t,(t.subtreeFlags&8772)!==0):Tr(e,t),Rr=l,_n=s}break;case 30:break;default:Tr(e,t)}}function Lm(e){var n=e.alternate;n!==null&&(e.alternate=null,Lm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Wt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,rt=!1;function Mr(e,n,t){for(t=t.child;t!==null;)Bm(e,n,t),t=t.sibling}function Bm(e,n,t){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(jl,t)}catch{}switch(t.tag){case 26:_n||ir(t,n),Mr(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:_n||ir(t,n);var r=tn,l=rt;yl(t.type)&&(tn=t.stateNode,rt=!1),Mr(e,n,t),qa(t.stateNode),tn=r,rt=l;break;case 5:_n||ir(t,n);case 6:if(r=tn,l=rt,tn=null,Mr(e,n,t),tn=r,rt=l,tn!==null)if(rt)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(t.stateNode)}catch(s){qe(t,n,s)}else try{tn.removeChild(t.stateNode)}catch(s){qe(t,n,s)}break;case 18:tn!==null&&(rt?(e=tn,Mp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),qi(e)):Mp(tn,t.stateNode));break;case 4:r=tn,l=rt,tn=t.stateNode.containerInfo,rt=!0,Mr(e,n,t),tn=r,rt=l;break;case 0:case 11:case 14:case 15:dl(2,t,n),_n||dl(4,t,n),Mr(e,n,t);break;case 1:_n||(ir(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&Tm(t,n,r)),Mr(e,n,t);break;case 21:Mr(e,n,t);break;case 22:_n=(r=_n)||t.memoizedState!==null,Mr(e,n,t),_n=r;break;default:Mr(e,n,t)}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qi(e)}catch(t){qe(n,n.return,t)}}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qi(e)}catch(t){qe(n,n.return,t)}}function W_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Om),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Om),n;default:throw Error(a(435,e.tag))}}function oo(e,n){var t=W_(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var l=sg.bind(null,e,r);r.then(l,l)}})}function lt(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r],s=e,m=n,g=m;e:for(;g!==null;){switch(g.tag){case 27:if(yl(g.type)){tn=g.stateNode,rt=!1;break e}break;case 5:tn=g.stateNode,rt=!1;break e;case 3:case 4:tn=g.stateNode.containerInfo,rt=!0;break e}g=g.return}if(tn===null)throw Error(a(160));Bm(s,m,l),tn=null,rt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hm(n,e),n=n.sibling}var $t=null;function Hm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(n,e),it(e),r&4&&(dl(3,e,e.return),La(3,e),dl(5,e,e.return));break;case 1:lt(n,e),it(e),r&512&&(_n||t===null||ir(t,t.return)),r&64&&Rr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var l=$t;if(lt(n,e),it(e),r&512&&(_n||t===null||ir(t,t.return)),r&4){var s=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":s=l.getElementsByTagName("title")[0],(!s||s[$n]||s[sn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(r),l.head.insertBefore(s,l.querySelector("head > title"))),Cn(s,r,t),s[sn]=e,en(s),r=s;break e;case"link":var m=Hp("link","href",l).get(r+(t.href||""));if(m){for(var g=0;g<m.length;g++)if(s=m[g],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(g,1);break n}}s=l.createElement(r),Cn(s,r,t),l.head.appendChild(s);break;case"meta":if(m=Hp("meta","content",l).get(r+(t.content||""))){for(g=0;g<m.length;g++)if(s=m[g],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(g,1);break n}}s=l.createElement(r),Cn(s,r,t),l.head.appendChild(s);break;default:throw Error(a(468,r))}s[sn]=e,en(s),r=s}e.stateNode=r}else Gp(l,e.type,e.stateNode);else e.stateNode=Up(l,r,e.memoizedProps);else s!==r?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,r===null?Gp(l,e.type,e.stateNode):Up(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Nu(e,e.memoizedProps,t.memoizedProps)}break;case 27:lt(n,e),it(e),r&512&&(_n||t===null||ir(t,t.return)),t!==null&&r&4&&Nu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(lt(n,e),it(e),r&512&&(_n||t===null||ir(t,t.return)),e.flags&32){l=e.stateNode;try{qr(l,"")}catch(fe){qe(e,e.return,fe)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,Nu(e,l,t!==null?t.memoizedProps:l)),r&1024&&(Tu=!0);break;case 6:if(lt(n,e),it(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(fe){qe(e,e.return,fe)}}break;case 3:if(ko=null,l=$t,$t=Eo(n.containerInfo),lt(n,e),$t=l,it(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{qi(n.containerInfo)}catch(fe){qe(e,e.return,fe)}Tu&&(Tu=!1,Gm(e));break;case 4:r=$t,$t=Eo(e.stateNode.containerInfo),lt(n,e),it(e),$t=r;break;case 12:lt(n,e),it(e);break;case 31:lt(n,e),it(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,oo(e,r)));break;case 13:lt(n,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(uo=bn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,oo(e,r)));break;case 22:l=e.memoizedState!==null;var k=t!==null&&t.memoizedState!==null,C=Rr,P=_n;if(Rr=C||l,_n=P||k,lt(n,e),_n=P,Rr=C,it(e),r&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||k||Rr||_n||ei(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){k=t=n;try{if(s=k.stateNode,l)m=s.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{g=k.stateNode;var X=k.memoizedProps.style,L=X!=null&&X.hasOwnProperty("display")?X.display:null;g.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(fe){qe(k,k.return,fe)}}}else if(n.tag===6){if(t===null){k=n;try{k.stateNode.nodeValue=l?"":k.memoizedProps}catch(fe){qe(k,k.return,fe)}}}else if(n.tag===18){if(t===null){k=n;try{var V=k.stateNode;l?Tp(V,!0):Tp(k.stateNode,!1)}catch(fe){qe(k,k.return,fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,oo(e,t))));break;case 19:lt(n,e),it(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,oo(e,r)));break;case 30:break;case 21:break;default:lt(n,e),it(e)}}function it(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(Dm(r)){t=r;break}r=r.return}if(t==null)throw Error(a(160));switch(t.tag){case 27:var l=t.stateNode,s=Ru(e);so(e,s,l);break;case 5:var m=t.stateNode;t.flags&32&&(qr(m,""),t.flags&=-33);var g=Ru(e);so(e,g,m);break;case 3:case 4:var k=t.stateNode.containerInfo,C=Ru(e);Mu(e,C,k);break;default:throw Error(a(161))}}catch(P){qe(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Tr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cm(e,n.alternate,n),n=n.sibling}function ei(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:dl(4,n,n.return),ei(n);break;case 1:ir(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Tm(n,n.return,t),ei(n);break;case 27:qa(n.stateNode);case 26:case 5:ir(n,n.return),ei(n);break;case 22:n.memoizedState===null&&ei(n);break;case 30:ei(n);break;default:ei(n)}e=e.sibling}}function jr(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=e,s=n,m=s.flags;switch(s.tag){case 0:case 11:case 15:jr(l,s,t),La(4,s);break;case 1:if(jr(l,s,t),r=s,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){qe(r,r.return,C)}if(r=s,l=r.updateQueue,l!==null){var g=r.stateNode;try{var k=l.shared.hiddenCallbacks;if(k!==null)for(l.shared.hiddenCallbacks=null,l=0;l<k.length;l++)gd(k[l],g)}catch(C){qe(r,r.return,C)}}t&&m&64&&Mm(s),Ba(s,s.return);break;case 27:Am(s);case 26:case 5:jr(l,s,t),t&&r===null&&m&4&&jm(s),Ba(s,s.return);break;case 12:jr(l,s,t);break;case 31:jr(l,s,t),t&&m&4&&zm(l,s);break;case 13:jr(l,s,t),t&&m&4&&Um(l,s);break;case 22:s.memoizedState===null&&jr(l,s,t),Ba(s,s.return);break;case 30:break;default:jr(l,s,t)}n=n.sibling}}function ju(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&wa(t))}function Du(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wa(e))}function Xt(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vm(e,n,t,r),n=n.sibling}function Vm(e,n,t,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Xt(e,n,t,r),l&2048&&La(9,n);break;case 1:Xt(e,n,t,r);break;case 3:Xt(e,n,t,r),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wa(e)));break;case 12:if(l&2048){Xt(e,n,t,r),e=n.stateNode;try{var s=n.memoizedProps,m=s.id,g=s.onPostCommit;typeof g=="function"&&g(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){qe(n,n.return,k)}}else Xt(e,n,t,r);break;case 31:Xt(e,n,t,r);break;case 13:Xt(e,n,t,r);break;case 23:break;case 22:s=n.stateNode,m=n.alternate,n.memoizedState!==null?s._visibility&2?Xt(e,n,t,r):za(e,n):s._visibility&2?Xt(e,n,t,r):(s._visibility|=2,Ci(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&ju(m,n);break;case 24:Xt(e,n,t,r),l&2048&&Du(n.alternate,n);break;default:Xt(e,n,t,r)}}function Ci(e,n,t,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var s=e,m=n,g=t,k=r,C=m.flags;switch(m.tag){case 0:case 11:case 15:Ci(s,m,g,k,l),La(8,m);break;case 23:break;case 22:var P=m.stateNode;m.memoizedState!==null?P._visibility&2?Ci(s,m,g,k,l):za(s,m):(P._visibility|=2,Ci(s,m,g,k,l)),l&&C&2048&&ju(m.alternate,m);break;case 24:Ci(s,m,g,k,l),l&&C&2048&&Du(m.alternate,m);break;default:Ci(s,m,g,k,l)}n=n.sibling}}function za(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,l=r.flags;switch(r.tag){case 22:za(t,r),l&2048&&ju(r.alternate,r);break;case 24:za(t,r),l&2048&&Du(r.alternate,r);break;default:za(t,r)}n=n.sibling}}var Ua=8192;function Li(e,n,t){if(e.subtreeFlags&Ua)for(e=e.child;e!==null;)Im(e,n,t),e=e.sibling}function Im(e,n,t){switch(e.tag){case 26:Li(e,n,t),e.flags&Ua&&e.memoizedState!==null&&Ug(t,$t,e.memoizedState,e.memoizedProps);break;case 5:Li(e,n,t);break;case 3:case 4:var r=$t;$t=Eo(e.stateNode.containerInfo),Li(e,n,t),$t=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ua,Ua=16777216,Li(e,n,t),Ua=r):Li(e,n,t));break;default:Li(e,n,t)}}function Ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ha(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Mn=r,qm(r,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pm(e),e=e.sibling}function Pm(e){switch(e.tag){case 0:case 11:case 15:Ha(e),e.flags&2048&&dl(9,e,e.return);break;case 3:Ha(e);break;case 12:Ha(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,co(e)):Ha(e);break;default:Ha(e)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Mn=r,qm(r,e)}Ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:dl(8,n,n.return),co(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,co(n));break;default:co(n)}e=e.sibling}}function qm(e,n){for(;Mn!==null;){var t=Mn;switch(t.tag){case 0:case 11:case 15:dl(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wa(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Mn=r;else e:for(t=e;Mn!==null;){r=Mn;var l=r.sibling,s=r.return;if(Lm(r),r===t){Mn=null;break e}if(l!==null){l.return=s,Mn=l;break e}Mn=s}}}var J_={getCacheForType:function(e){var n=An(mn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return An(mn).controller.signal}},eg=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Qe=null,Re=null,De=0,Pe=0,ht=null,ml=!1,Bi=!1,Au=!1,Dr=0,ln=0,pl=0,ni=0,Ou=0,_t=0,zi=0,Ga=null,at=null,Cu=!1,uo=0,$m=0,fo=1/0,mo=null,hl=null,wn=0,_l=null,Ui=null,Ar=0,Lu=0,Bu=null,Xm=null,Va=0,zu=null;function gt(){return(Ve&2)!==0&&De!==0?De&-De:U.T!==null?Yu():an()}function Fm(){if(_t===0)if((De&536870912)===0||Ce){var e=qn;qn<<=1,(qn&3932160)===0&&(qn=262144),_t=e}else _t=536870912;return e=mt.current,e!==null&&(e.flags|=32),_t}function st(e,n,t){(e===Qe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(Hi(e,0),gl(e,De,_t,!1)),Dl(e,t),((Ve&2)===0||e!==Qe)&&(e===Qe&&((Ve&2)===0&&(ni|=t),ln===4&&gl(e,De,_t,!1)),ar(e))}function Km(e,n,t){if((Ve&6)!==0)throw Error(a(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Bn(e,n),l=r?rg(e,n):Hu(e,n,!0),s=r;do{if(l===0){Bi&&!r&&gl(e,n,0,!1);break}else{if(t=e.current.alternate,s&&!ng(t)){l=Hu(e,n,!1),s=!1;continue}if(l===2){if(s=n,e.errorRecoveryDisabledLanes&s)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var g=e;l=Ga;var k=g.current.memoizedState.isDehydrated;if(k&&(Hi(g,m).flags|=256),m=Hu(g,m,!1),m!==2){if(Au&&!k){g.errorRecoveryDisabledLanes|=s,ni|=s,l=4;break e}s=at,at=l,s!==null&&(at===null?at=s:at.push.apply(at,s))}l=m}if(s=!1,l!==2)continue}}if(l===1){Hi(e,0),gl(e,n,0,!0);break}e:{switch(r=e,s=l,s){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:gl(r,n,_t,!ml);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(l=uo+300-bn(),10<l)){if(gl(r,n,_t,!ml),fn(r,0,!0)!==0)break e;Ar=n,r.timeoutHandle=Np(Qm.bind(null,r,t,at,mo,Cu,n,_t,ni,zi,ml,s,"Throttled",-0,0),l);break e}Qm(r,t,at,mo,Cu,n,_t,ni,zi,ml,s,null,-0,0)}}break}while(!0);ar(e)}function Qm(e,n,t,r,l,s,m,g,k,C,P,X,L,V){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fn},Im(n,s,X);var fe=(s&62914560)===s?uo-bn():(s&4194048)===s?$m-bn():0;if(fe=Hg(X,fe),fe!==null){Ar=s,e.cancelPendingCommit=fe(lp.bind(null,e,n,s,t,r,l,m,g,k,P,X,null,L,V)),gl(e,s,m,!C);return}}lp(e,n,s,t,r,l,m,g,k)}function ng(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],s=l.getSnapshot;l=l.value;try{if(!j(s(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gl(e,n,t,r){n&=~Ou,n&=~ni,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var s=31-Tn(l),m=1<<s;r[s]=-1,l&=~m}t!==0&&ds(e,t,n)}function po(){return(Ve&6)===0?(Ia(0),!1):!0}function Uu(){if(Re!==null){if(Pe===0)var e=Re.return;else e=Re,xr=$l=null,eu(e),Ti=null,Sa=0,e=Re;for(;e!==null;)Rm(e.alternate,e),e=e.return;Re=null}}function Hi(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,xg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Ar=0,Uu(),Qe=e,Re=t=yr(e.current,null),De=n,Pe=0,ht=null,ml=!1,Bi=Bn(e,n),Au=!1,zi=_t=Ou=ni=pl=ln=0,at=Ga=null,Cu=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var l=31-Tn(r),s=1<<l;n|=e[l],r&=~s}return Dr=n,Cs(),t}function Zm(e,n){ke=null,U.H=Aa,n===Mi||n===Is?(n=md(),Pe=3):n===Ic?(n=md(),Pe=4):Pe=n===_u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ht=n,Re===null&&(ln=1,to(e,jt(n,e.current)))}function Wm(){var e=mt.current;return e===null?!0:(De&4194048)===De?Ct===null:(De&62914560)===De||(De&536870912)!==0?e===Ct:!1}function Jm(){var e=U.H;return U.H=Aa,e===null?Aa:e}function ep(){var e=U.A;return U.A=J_,e}function ho(){ln=4,ml||(De&4194048)!==De&&mt.current!==null||(Bi=!0),(pl&134217727)===0&&(ni&134217727)===0||Qe===null||gl(Qe,De,_t,!1)}function Hu(e,n,t){var r=Ve;Ve|=2;var l=Jm(),s=ep();(Qe!==e||De!==n)&&(mo=null,Hi(e,n)),n=!1;var m=ln;e:do try{if(Pe!==0&&Re!==null){var g=Re,k=ht;switch(Pe){case 8:Uu(),m=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(n=!0);var C=Pe;if(Pe=0,ht=null,Gi(e,g,k,C),t&&Bi){m=0;break e}break;default:C=Pe,Pe=0,ht=null,Gi(e,g,k,C)}}tg(),m=ln;break}catch(P){Zm(e,P)}while(!0);return n&&e.shellSuspendCounter++,xr=$l=null,Ve=r,U.H=l,U.A=s,Re===null&&(Qe=null,De=0,Cs()),m}function tg(){for(;Re!==null;)np(Re)}function rg(e,n){var t=Ve;Ve|=2;var r=Jm(),l=ep();Qe!==e||De!==n?(mo=null,fo=bn()+500,Hi(e,n)):Bi=Bn(e,n);e:do try{if(Pe!==0&&Re!==null){n=Re;var s=ht;n:switch(Pe){case 1:Pe=0,ht=null,Gi(e,n,s,1);break;case 2:case 9:if(fd(s)){Pe=0,ht=null,tp(n);break}n=function(){Pe!==2&&Pe!==9||Qe!==e||(Pe=7),ar(e)},s.then(n,n);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:fd(s)?(Pe=0,ht=null,tp(n)):(Pe=0,ht=null,Gi(e,n,s,7));break;case 5:var m=null;switch(Re.tag){case 26:m=Re.memoizedState;case 5:case 27:var g=Re;if(m?Vp(m):g.stateNode.complete){Pe=0,ht=null;var k=g.sibling;if(k!==null)Re=k;else{var C=g.return;C!==null?(Re=C,_o(C)):Re=null}break n}}Pe=0,ht=null,Gi(e,n,s,5);break;case 6:Pe=0,ht=null,Gi(e,n,s,6);break;case 8:Uu(),ln=6;break e;default:throw Error(a(462))}}lg();break}catch(P){Zm(e,P)}while(!0);return xr=$l=null,U.H=r,U.A=l,Ve=t,Re!==null?0:(Qe=null,De=0,Cs(),ln)}function lg(){for(;Re!==null&&!ai();)np(Re)}function np(e){var n=km(e.alternate,e,Dr);e.memoizedProps=e.pendingProps,n===null?_o(e):Re=n}function tp(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=ym(t,n,n.pendingProps,n.type,void 0,De);break;case 11:n=ym(t,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:eu(n);default:Rm(t,n),n=Re=ed(n,Dr),n=km(t,n,Dr)}e.memoizedProps=e.pendingProps,n===null?_o(e):Re=n}function Gi(e,n,t,r){xr=$l=null,eu(n),Ti=null,Sa=0;var l=n.return;try{if($_(e,l,n,t,De)){ln=1,to(e,jt(t,e.current)),Re=null;return}}catch(s){if(l!==null)throw Re=l,s;ln=1,to(e,jt(t,e.current)),Re=null;return}n.flags&32768?(Ce||r===1?e=!0:Bi||(De&536870912)!==0?e=!1:(ml=e=!0,(r===2||r===9||r===3||r===6)&&(r=mt.current,r!==null&&r.tag===13&&(r.flags|=16384))),rp(n,e)):_o(n)}function _o(e){var n=e;do{if((n.flags&32768)!==0){rp(n,ml);return}e=n.return;var t=K_(n.alternate,n,Dr);if(t!==null){Re=t;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);ln===0&&(ln=5)}function rp(e,n){do{var t=Q_(e.alternate,e);if(t!==null){t.flags&=32767,Re=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=t}while(e!==null);ln=6,Re=null}function lp(e,n,t,r,l,s,m,g,k){e.cancelPendingCommit=null;do go();while(wn!==0);if((Ve&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(s=n.lanes|n.childLanes,s|=Rc,or(e,t,s,m,g,k),e===Qe&&(Re=Qe=null,De=0),Ui=n,_l=e,Ar=t,Lu=s,Bu=l,Xm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,og(Tl,function(){return cp(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,l=ee.p,ee.p=2,m=Ve,Ve|=4;try{Z_(e,n,t)}finally{Ve=m,ee.p=l,U.T=r}}wn=1,ip(),ap(),sp()}}function ip(){if(wn===1){wn=0;var e=_l,n=Ui,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=U.T,U.T=null;var r=ee.p;ee.p=2;var l=Ve;Ve|=4;try{Hm(n,e);var s=Zu,m=Ue(e.containerInfo),g=s.focusedElem,k=s.selectionRange;if(m!==g&&g&&g.ownerDocument&&Ze(g.ownerDocument.documentElement,g)){if(k!==null&&xn(g)){var C=k.start,P=k.end;if(P===void 0&&(P=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(P,g.value.length);else{var X=g.ownerDocument||document,L=X&&X.defaultView||window;if(L.getSelection){var V=L.getSelection(),fe=g.textContent.length,be=Math.min(k.start,fe),Fe=k.end===void 0?be:Math.min(k.end,fe);!V.extend&&be>Fe&&(m=Fe,Fe=be,be=m);var M=ge(g,be),R=ge(g,Fe);if(M&&R&&(V.rangeCount!==1||V.anchorNode!==M.node||V.anchorOffset!==M.offset||V.focusNode!==R.node||V.focusOffset!==R.offset)){var A=X.createRange();A.setStart(M.node,M.offset),V.removeAllRanges(),be>Fe?(V.addRange(A),V.extend(R.node,R.offset)):(A.setEnd(R.node,R.offset),V.addRange(A))}}}}for(X=[],V=g;V=V.parentNode;)V.nodeType===1&&X.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<X.length;g++){var q=X[g];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}To=!!Qu,Zu=Qu=null}finally{Ve=l,ee.p=r,U.T=t}}e.current=n,wn=2}}function ap(){if(wn===2){wn=0;var e=_l,n=Ui,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=U.T,U.T=null;var r=ee.p;ee.p=2;var l=Ve;Ve|=4;try{Cm(e,n.alternate,n)}finally{Ve=l,ee.p=r,U.T=t}}wn=3}}function sp(){if(wn===4||wn===3){wn=0,Ur();var e=_l,n=Ui,t=Ar,r=Xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,Ui=_l=null,op(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(hl=null),wt(t),n=n.stateNode,yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(jl,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=U.T,l=ee.p,ee.p=2,U.T=null;try{for(var s=e.onRecoverableError,m=0;m<r.length;m++){var g=r[m];s(g.value,{componentStack:g.stack})}}finally{U.T=n,ee.p=l}}(Ar&3)!==0&&go(),ar(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===zu?Va++:(Va=0,zu=e):Va=0,Ia(0)}}function op(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,wa(n)))}function go(){return ip(),ap(),sp(),cp()}function cp(){if(wn!==5)return!1;var e=_l,n=Lu;Lu=0;var t=wt(Ar),r=U.T,l=ee.p;try{ee.p=32>t?32:t,U.T=null,t=Bu,Bu=null;var s=_l,m=Ar;if(wn=0,Ui=_l=null,Ar=0,(Ve&6)!==0)throw Error(a(331));var g=Ve;if(Ve|=4,Pm(s.current),Vm(s,s.current,m,t),Ve=g,Ia(0,!1),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(jl,s)}catch{}return!0}finally{ee.p=l,U.T=r,op(e,n)}}function up(e,n,t){n=jt(t,n),n=hu(e.stateNode,n,2),e=cl(e,n,2),e!==null&&(Dl(e,2),ar(e))}function qe(e,n,t){if(e.tag===3)up(e,e,t);else for(;n!==null;){if(n.tag===3){up(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hl===null||!hl.has(r))){e=jt(t,e),t=fm(2),r=cl(n,t,2),r!==null&&(dm(t,r,n,e),Dl(r,2),ar(r));break}}n=n.return}}function Gu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new eg;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(Au=!0,l.add(t),e=ig.bind(null,e,n,t),n.then(e,e))}function ig(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Qe===e&&(De&t)===t&&(ln===4||ln===3&&(De&62914560)===De&&300>bn()-uo?(Ve&2)===0&&Hi(e,0):Ou|=t,zi===De&&(zi=0)),ar(e)}function fp(e,n){n===0&&(n=oi()),e=Yl(e,n),e!==null&&(Dl(e,n),ar(e))}function ag(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),fp(e,t)}function sg(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(n),fp(e,t)}function og(e,n){return zr(e,n)}var bo=null,Vi=null,Vu=!1,yo=!1,Iu=!1,bl=0;function ar(e){e!==Vi&&e.next===null&&(Vi===null?bo=Vi=e:Vi=Vi.next=e),yo=!0,Vu||(Vu=!0,ug())}function Ia(e,n){if(!Iu&&yo){Iu=!0;do for(var t=!1,r=bo;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var s=0;else{var m=r.suspendedLanes,g=r.pingedLanes;s=(1<<31-Tn(42|e)+1)-1,s&=l&~(m&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,hp(r,s))}else s=De,s=fn(r,r===Qe?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(s&3)===0||Bn(r,s)||(t=!0,hp(r,s));r=r.next}while(t);Iu=!1}}function cg(){dp()}function dp(){yo=Vu=!1;var e=0;bl!==0&&vg()&&(e=bl);for(var n=bn(),t=null,r=bo;r!==null;){var l=r.next,s=mp(r,n);s===0?(r.next=null,t===null?bo=l:t.next=l,l===null&&(Vi=t)):(t=r,(e!==0||(s&3)!==0)&&(yo=!0)),r=l}wn!==0&&wn!==5||Ia(e),bl!==0&&(bl=0)}function mp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var m=31-Tn(s),g=1<<m,k=l[m];k===-1?((g&t)===0||(g&r)!==0)&&(l[m]=ec(g,n)):k<=n&&(e.expiredLanes|=g),s&=~g}if(n=Qe,t=De,t=fn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&xt(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Bn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&xt(r),wt(t)){case 2:case 8:t=ra;break;case 32:t=Tl;break;case 268435456:t=ot;break;default:t=Tl}return r=pp.bind(null,e),t=zr(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&xt(r),e.callbackPriority=2,e.callbackNode=null,2}function pp(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(go()&&e.callbackNode!==t)return null;var r=De;return r=fn(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Km(e,r,n),mp(e,bn()),e.callbackNode!=null&&e.callbackNode===t?pp.bind(null,e):null)}function hp(e,n){if(go())return null;Km(e,n,!0)}function ug(){wg(function(){(Ve&6)!==0?zr(Ml,cg):dp()})}function Yu(){if(bl===0){var e=Ni;e===0&&(e=Qt,Qt<<=1,(Qt&261888)===0&&(Qt=256)),bl=e}return bl}function _p(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fr(""+e)}function gp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function fg(e,n,t,r,l){if(n==="submit"&&t&&t.stateNode===l){var s=_p((l[Nn]||null).action),m=r.submitter;m&&(n=(n=m[Nn]||null)?_p(n.formAction):m.getAttribute("formAction"),n!==null&&(s=n,m=null));var g=new _r("action","action",null,r,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(bl!==0){var k=m?gp(l,m):new FormData(l);cu(t,{pending:!0,data:k,method:l.method,action:s},null,k)}}else typeof s=="function"&&(g.preventDefault(),k=m?gp(l,m):new FormData(l),cu(t,{pending:!0,data:k,method:l.method,action:s},s,k))},currentTarget:l}]})}}for(var Pu=0;Pu<Nc.length;Pu++){var qu=Nc[Pu],dg=qu.toLowerCase(),mg=qu[0].toUpperCase()+qu.slice(1);qt(dg,"on"+mg)}qt(yi,"onAnimationEnd"),qt(tl,"onAnimationIteration"),qt(ya,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(T_,"onTransitionRun"),qt(j_,"onTransitionStart"),qt(D_,"onTransitionCancel"),qt(Zf,"onTransitionEnd"),dr("onMouseEnter",["mouseout","mouseover"]),dr("onMouseLeave",["mouseout","mouseover"]),dr("onPointerEnter",["pointerout","pointerover"]),dr("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ya));function bp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var m=r.length-1;0<=m;m--){var g=r[m],k=g.instance,C=g.currentTarget;if(g=g.listener,k!==s&&l.isPropagationStopped())break e;s=g,l.currentTarget=C;try{s(l)}catch(P){Os(P)}l.currentTarget=null,s=k}else for(m=0;m<r.length;m++){if(g=r[m],k=g.instance,C=g.currentTarget,g=g.listener,k!==s&&l.isPropagationStopped())break e;s=g,l.currentTarget=C;try{s(l)}catch(P){Os(P)}l.currentTarget=null,s=k}}}}function Me(e,n){var t=n[Al];t===void 0&&(t=n[Al]=new Set);var r=e+"__bubble";t.has(r)||(yp(n,e,2,!1),t.add(r))}function $u(e,n,t){var r=0;n&&(r|=4),yp(t,e,r,n)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Xu(e){if(!e[vo]){e[vo]=!0,Jt.forEach(function(t){t!=="selectionchange"&&(pg.has(t)||$u(t,!1,e),$u(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[vo]||(n[vo]=!0,$u("selectionchange",!1,n))}}function yp(e,n,t,r){switch(Fp(n)){case 2:var l=Ig;break;case 8:l=Yg;break;default:l=cf}t=l.bind(null,n,t,e),l=void 0,!Gn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Fu(e,n,t,r,l){var s=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var g=r.stateNode.containerInfo;if(g===l)break;if(m===4)for(m=r.return;m!==null;){var k=m.tag;if((k===3||k===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;g!==null;){if(m=St(g),m===null)return;if(k=m.tag,k===5||k===6||k===26||k===27){r=s=m;continue e}g=g.parentNode}}r=r.return}hr(function(){var C=s,P=ca(t),X=[];e:{var L=Wf.get(e);if(L!==void 0){var V=_r,fe=e;switch(e){case"keypress":if(di(t)===0)break e;case"keydown":case"keyup":V=cc;break;case"focusin":fe="focus",V=mi;break;case"focusout":fe="blur",V=mi;break;case"beforeblur":case"afterblur":V=mi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=vs;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=dc;break;case yi:case tl:case ya:V=ic;break;case Zf:V=pc;break;case"scroll":case"scrollend":V=rc;break;case"wheel":V=_c;break;case"copy":case"cut":case"paste":V=ws;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Rs;break;case"toggle":case"beforetoggle":V=zl}var be=(n&4)!==0,Fe=!be&&(e==="scroll"||e==="scrollend"),M=be?L!==null?L+"Capture":null:L;be=[];for(var R=C,A;R!==null;){var q=R;if(A=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||A===null||M===null||(q=er(R,M),q!=null&&be.push(Pa(R,q,A))),Fe)break;R=R.return}0<be.length&&(L=new V(L,fe,null,t,P),X.push({event:L,listeners:be}))}}if((n&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",L&&t!==oa&&(fe=t.relatedTarget||t.fromElement)&&(St(fe)||fe[ut]))break e;if((V||L)&&(L=P.window===P?P:(L=P.ownerDocument)?L.defaultView||L.parentWindow:window,V?(fe=t.relatedTarget||t.toElement,V=C,fe=fe?St(fe):null,fe!==null&&(Fe=p(fe),be=fe.tag,fe!==Fe||be!==5&&be!==27&&be!==6)&&(fe=null)):(V=null,fe=C),V!==fe)){if(be=da,q="onMouseLeave",M="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(be=Rs,q="onPointerLeave",M="onPointerEnter",R="pointer"),Fe=V==null?L:ur(V),A=fe==null?L:ur(fe),L=new be(q,R+"leave",V,t,P),L.target=Fe,L.relatedTarget=A,q=null,St(P)===C&&(be=new be(M,R+"enter",fe,t,P),be.target=A,be.relatedTarget=Fe,q=be),Fe=q,V&&fe)n:{for(be=hg,M=V,R=fe,A=0,q=M;q;q=be(q))A++;q=0;for(var _e=R;_e;_e=be(_e))q++;for(;0<A-q;)M=be(M),A--;for(;0<q-A;)R=be(R),q--;for(;A--;){if(M===R||R!==null&&M===R.alternate){be=M;break n}M=be(M),R=be(R)}be=null}else be=null;V!==null&&vp(X,L,V,be,!1),fe!==null&&Fe!==null&&vp(X,Fe,fe,be,!0)}}e:{if(L=C?ur(C):window,V=L.nodeName&&L.nodeName.toLowerCase(),V==="select"||V==="input"&&L.type==="file")var He=As;else if(Ds(L))if(Ul)He=h;else{He=kc;var me=Sc}else V=L.nodeName,!V||V.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?C&&Xr(C.elementType)&&(He=As):He=d;if(He&&(He=He(e,C))){hi(X,He,t,P);break e}me&&me(e,L,C),e==="focusout"&&C&&L.type==="number"&&C.memoizedProps.value!=null&&aa(L,"number",L.value)}switch(me=C?ur(C):window,e){case"focusin":(Ds(me)||me.contentEditable==="true")&&(gr=me,Be=C,dn=null);break;case"focusout":dn=Be=gr=null;break;case"mousedown":nl=!0;break;case"contextmenu":case"mouseup":case"dragend":nl=!1,br(X,t,P);break;case"selectionchange":if(Vl)break;case"keydown":case"keyup":br(X,t,P)}var Ne;if(pa)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Jr?_a(e,t)&&(Ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Ae="onCompositionStart");Ae&&(ha&&t.locale!=="ko"&&(Jr||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Jr&&(Ne=bs()):(Nt=P,Rn="value"in Nt?Nt.value:Nt.textContent,Jr=!0)),me=xo(C,Ae),0<me.length&&(Ae=new pi(Ae,e,null,t,P),X.push({event:Ae,listeners:me}),Ne?Ae.data=Ne:(Ne=js(t),Ne!==null&&(Ae.data=Ne)))),(Ne=yc?vc(e,t):xc(e,t))&&(Ae=xo(C,"onBeforeInput"),0<Ae.length&&(me=new pi("onBeforeInput","beforeinput",null,t,P),X.push({event:me,listeners:Ae}),me.data=Ne)),fg(X,e,C,t,P)}bp(X,n)})}function Pa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function xo(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=er(e,t),l!=null&&r.unshift(Pa(e,l,s)),l=er(e,n),l!=null&&r.push(Pa(e,l,s))),e.tag===3)return r;e=e.return}return[]}function hg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vp(e,n,t,r,l){for(var s=n._reactName,m=[];t!==null&&t!==r;){var g=t,k=g.alternate,C=g.stateNode;if(g=g.tag,k!==null&&k===r)break;g!==5&&g!==26&&g!==27||C===null||(k=C,l?(C=er(t,s),C!=null&&m.unshift(Pa(t,C,k))):l||(C=er(t,s),C!=null&&m.push(Pa(t,C,k)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var _g=/\r\n?/g,gg=/\u0000|\uFFFD/g;function xp(e){return(typeof e=="string"?e:""+e).replace(_g,`
`).replace(gg,"")}function wp(e,n){return n=xp(n),xp(e)===n}function Xe(e,n,t,r,l,s){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||qr(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&qr(e,""+r);break;case"className":he(e,"class",r);break;case"tabIndex":he(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":he(e,t,r);break;case"style":sa(e,r,s);break;case"data":if(n!=="object"){he(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=Fr(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(n!=="input"&&Xe(e,n,"name",l.name,l,null),Xe(e,n,"formEncType",l.formEncType,l,null),Xe(e,n,"formMethod",l.formMethod,l,null),Xe(e,n,"formTarget",l.formTarget,l,null)):(Xe(e,n,"encType",l.encType,l,null),Xe(e,n,"method",l.method,l,null),Xe(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=Fr(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=Fn);break;case"onScroll":r!=null&&Me("scroll",e);break;case"onScrollEnd":r!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=Fr(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Vt(e,"popover",r);break;case"xlinkActuate":ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ft(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ft(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ft(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ft(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Vt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=vn.get(t)||t,Vt(e,t,r))}}function Ku(e,n,t,r,l,s){switch(t){case"style":sa(e,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"children":typeof r=="string"?qr(e,r):(typeof r=="number"||typeof r=="bigint")&&qr(e,""+r);break;case"onScroll":r!=null&&Me("scroll",e);break;case"onScrollEnd":r!=null&&Me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Fn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),s=e[Nn]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(n,s,l),typeof r=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,l);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):Vt(e,t,r)}}}function Cn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var r=!1,l=!1,s;for(s in t)if(t.hasOwnProperty(s)){var m=t[s];if(m!=null)switch(s){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xe(e,n,s,m,t,null)}}l&&Xe(e,n,"srcSet",t.srcSet,t,null),r&&Xe(e,n,"src",t.src,t,null);return;case"input":Me("invalid",e);var g=s=m=l=null,k=null,C=null;for(r in t)if(t.hasOwnProperty(r)){var P=t[r];if(P!=null)switch(r){case"name":l=P;break;case"type":m=P;break;case"checked":k=P;break;case"defaultChecked":C=P;break;case"value":s=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,n));break;default:Xe(e,n,r,P,t,null)}}hs(e,s,g,k,C,m,l,!1);return;case"select":Me("invalid",e),r=m=s=null;for(l in t)if(t.hasOwnProperty(l)&&(g=t[l],g!=null))switch(l){case"value":s=g;break;case"defaultValue":m=g;break;case"multiple":r=g;default:Xe(e,n,l,g,t,null)}n=s,t=m,e.multiple=!!r,n!=null?mr(e,!!r,n,!1):t!=null&&mr(e,!!r,t,!0);return;case"textarea":Me("invalid",e),s=l=r=null;for(m in t)if(t.hasOwnProperty(m)&&(g=t[m],g!=null))switch(m){case"value":r=g;break;case"defaultValue":l=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(a(91));break;default:Xe(e,n,m,g,t,null)}$(e,r,l,s);return;case"option":for(k in t)if(t.hasOwnProperty(k)&&(r=t[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,k,r,t,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(r=0;r<Ya.length;r++)Me(Ya[r],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(r=t[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xe(e,n,C,r,t,null)}return;default:if(Xr(n)){for(P in t)t.hasOwnProperty(P)&&(r=t[P],r!==void 0&&Ku(e,n,P,r,t,void 0));return}}for(g in t)t.hasOwnProperty(g)&&(r=t[g],r!=null&&Xe(e,n,g,r,t,null))}function bg(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,m=null,g=null,k=null,C=null,P=null;for(V in t){var X=t[V];if(t.hasOwnProperty(V)&&X!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":k=X;default:r.hasOwnProperty(V)||Xe(e,n,V,null,r,X)}}for(var L in r){var V=r[L];if(X=t[L],r.hasOwnProperty(L)&&(V!=null||X!=null))switch(L){case"type":s=V;break;case"name":l=V;break;case"checked":C=V;break;case"defaultChecked":P=V;break;case"value":m=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,n));break;default:V!==X&&Xe(e,n,L,V,r,X)}}Hn(e,m,g,k,C,P,s,l);return;case"select":V=m=g=L=null;for(s in t)if(k=t[s],t.hasOwnProperty(s)&&k!=null)switch(s){case"value":break;case"multiple":V=k;default:r.hasOwnProperty(s)||Xe(e,n,s,null,r,k)}for(l in r)if(s=r[l],k=t[l],r.hasOwnProperty(l)&&(s!=null||k!=null))switch(l){case"value":L=s;break;case"defaultValue":g=s;break;case"multiple":m=s;default:s!==k&&Xe(e,n,l,s,r,k)}n=g,t=m,r=V,L!=null?mr(e,!!t,L,!1):!!r!=!!t&&(n!=null?mr(e,!!t,n,!0):mr(e,!!t,t?[]:"",!1));return;case"textarea":V=L=null;for(g in t)if(l=t[g],t.hasOwnProperty(g)&&l!=null&&!r.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Xe(e,n,g,null,r,l)}for(m in r)if(l=r[m],s=t[m],r.hasOwnProperty(m)&&(l!=null||s!=null))switch(m){case"value":L=l;break;case"defaultValue":V=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(a(91));break;default:l!==s&&Xe(e,n,m,l,r,s)}ui(e,L,V);return;case"option":for(var fe in t)if(L=t[fe],t.hasOwnProperty(fe)&&L!=null&&!r.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Xe(e,n,fe,null,r,L)}for(k in r)if(L=r[k],V=t[k],r.hasOwnProperty(k)&&L!==V&&(L!=null||V!=null))switch(k){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Xe(e,n,k,L,r,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in t)L=t[be],t.hasOwnProperty(be)&&L!=null&&!r.hasOwnProperty(be)&&Xe(e,n,be,null,r,L);for(C in r)if(L=r[C],V=t[C],r.hasOwnProperty(C)&&L!==V&&(L!=null||V!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(137,n));break;default:Xe(e,n,C,L,r,V)}return;default:if(Xr(n)){for(var Fe in t)L=t[Fe],t.hasOwnProperty(Fe)&&L!==void 0&&!r.hasOwnProperty(Fe)&&Ku(e,n,Fe,void 0,r,L);for(P in r)L=r[P],V=t[P],!r.hasOwnProperty(P)||L===V||L===void 0&&V===void 0||Ku(e,n,P,L,r,V);return}}for(var M in t)L=t[M],t.hasOwnProperty(M)&&L!=null&&!r.hasOwnProperty(M)&&Xe(e,n,M,null,r,L);for(X in r)L=r[X],V=t[X],!r.hasOwnProperty(X)||L===V||L==null&&V==null||Xe(e,n,X,L,r,V)}function Ep(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],s=l.transferSize,m=l.initiatorType,g=l.duration;if(s&&g&&Ep(m)){for(m=0,g=l.responseEnd,r+=1;r<t.length;r++){var k=t[r],C=k.startTime;if(C>g)break;var P=k.transferSize,X=k.initiatorType;P&&Ep(X)&&(k=k.responseEnd,m+=P*(k<g?1:(g-C)/(k-C)))}if(--r,n+=8*(s+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qu=null,Zu=null;function wo(e){return e.nodeType===9?e:e.ownerDocument}function Sp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ju=null;function vg(){var e=window.event;return e&&e.type==="popstate"?e===Ju?!1:(Ju=e,!0):(Ju=null,!1)}var Np=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(e){return Rp.resolve(null).then(e).catch(Eg)}:Np;function Eg(e){setTimeout(function(){throw e})}function yl(e){return e==="head"}function Mp(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(l),qi(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")qa(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,qa(t);for(var s=t.firstChild;s;){var m=s.nextSibling,g=s.nodeName;s[$n]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=m}}else t==="body"&&qa(e.ownerDocument.body);t=l}while(t);qi(n)}function Tp(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function ef(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ef(t),Wt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Sg(e,n,t,r){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[$n])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function kg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function jp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Lt(e.nextSibling),e===null))return null;return e}function nf(e){return e.data==="$?"||e.data==="$~"}function tf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ng(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Lt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rf=null;function Dp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Lt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Ap(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Op(e,n,t){switch(n=wo(t),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function qa(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Wt(e)}var Bt=new Map,Cp=new Set;function Eo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Or=ee.d;ee.d={f:Rg,r:Mg,D:Tg,C:jg,L:Dg,m:Ag,X:Cg,S:Og,M:Lg};function Rg(){var e=Or.f(),n=po();return e||n}function Mg(e){var n=Jn(e);n!==null&&n.tag===5&&n.type==="form"?Zd(n):Or.r(e)}var Ii=typeof document>"u"?null:document;function Lp(e,n,t){var r=Ii;if(r&&typeof n=="string"&&n){var l=Un(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Cp.has(l)||(Cp.add(l),e={rel:e,crossOrigin:t,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Cn(n,"link",e),en(n),r.head.appendChild(n)))}}function Tg(e){Or.D(e),Lp("dns-prefetch",e,null)}function jg(e,n){Or.C(e,n),Lp("preconnect",e,n)}function Dg(e,n,t){Or.L(e,n,t);var r=Ii;if(r&&e&&n){var l='link[rel="preload"][as="'+Un(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Un(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Un(t.imageSizes)+'"]')):l+='[href="'+Un(e)+'"]';var s=l;switch(n){case"style":s=Yi(e);break;case"script":s=Pi(e)}Bt.has(s)||(e=v({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Bt.set(s,e),r.querySelector(l)!==null||n==="style"&&r.querySelector($a(s))||n==="script"&&r.querySelector(Xa(s))||(n=r.createElement("link"),Cn(n,"link",e),en(n),r.head.appendChild(n)))}}function Ag(e,n){Or.m(e,n);var t=Ii;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Un(r)+'"][href="'+Un(e)+'"]',s=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Pi(e)}if(!Bt.has(s)&&(e=v({rel:"modulepreload",href:e},n),Bt.set(s,e),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Xa(s)))return}r=t.createElement("link"),Cn(r,"link",e),en(r),t.head.appendChild(r)}}}function Og(e,n,t){Or.S(e,n,t);var r=Ii;if(r&&e){var l=Xn(r).hoistableStyles,s=Yi(e);n=n||"default";var m=l.get(s);if(!m){var g={loading:0,preload:null};if(m=r.querySelector($a(s)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Bt.get(s))&&lf(e,t);var k=m=r.createElement("link");en(k),Cn(k,"link",e),k._p=new Promise(function(C,P){k.onload=C,k.onerror=P}),k.addEventListener("load",function(){g.loading|=1}),k.addEventListener("error",function(){g.loading|=2}),g.loading|=4,So(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:g},l.set(s,m)}}}function Cg(e,n){Or.X(e,n);var t=Ii;if(t&&e){var r=Xn(t).hoistableScripts,l=Pi(e),s=r.get(l);s||(s=t.querySelector(Xa(l)),s||(e=v({src:e,async:!0},n),(n=Bt.get(l))&&af(e,n),s=t.createElement("script"),en(s),Cn(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(l,s))}}function Lg(e,n){Or.M(e,n);var t=Ii;if(t&&e){var r=Xn(t).hoistableScripts,l=Pi(e),s=r.get(l);s||(s=t.querySelector(Xa(l)),s||(e=v({src:e,async:!0,type:"module"},n),(n=Bt.get(l))&&af(e,n),s=t.createElement("script"),en(s),Cn(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(l,s))}}function Bp(e,n,t,r){var l=(l=J.current)?Eo(l):null;if(!l)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Yi(t.href),t=Xn(l).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Yi(t.href);var s=Xn(l).hoistableStyles,m=s.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,m),(s=l.querySelector($a(e)))&&!s._p&&(m.instance=s,m.state.loading=5),Bt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Bt.set(e,t),s||Bg(l,e,t,m.state))),n&&r===null)throw Error(a(528,""));return m}if(n&&r!==null)throw Error(a(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Pi(t),t=Xn(l).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Yi(e){return'href="'+Un(e)+'"'}function $a(e){return'link[rel="stylesheet"]['+e+"]"}function zp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Bg(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",t),en(n),e.head.appendChild(n))}function Pi(e){return'[src="'+Un(e)+'"]'}function Xa(e){return"script[async]"+e}function Up(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Un(t.href)+'"]');if(r)return n.instance=r,en(r),r;var l=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),en(r),Cn(r,"style",l),So(r,t.precedence,e),n.instance=r;case"stylesheet":l=Yi(t.href);var s=e.querySelector($a(l));if(s)return n.state.loading|=4,n.instance=s,en(s),s;r=zp(t),(l=Bt.get(l))&&lf(r,l),s=(e.ownerDocument||e).createElement("link"),en(s);var m=s;return m._p=new Promise(function(g,k){m.onload=g,m.onerror=k}),Cn(s,"link",r),n.state.loading|=4,So(s,t.precedence,e),n.instance=s;case"script":return s=Pi(t.src),(l=e.querySelector(Xa(s)))?(n.instance=l,en(l),l):(r=t,(l=Bt.get(s))&&(r=v({},t),af(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),en(l),Cn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,So(r,t.precedence,e));return n.instance}function So(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,s=l,m=0;m<r.length;m++){var g=r[m];if(g.dataset.precedence===n)s=g;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function af(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ko=null;function Hp(e,n,t){if(ko===null){var r=new Map,l=ko=new Map;l.set(t,r)}else l=ko,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var s=t[l];if(!(s[$n]||s[sn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var m=s.getAttribute(n)||"";m=e+m;var g=r.get(m);g?g.push(s):r.set(m,[s])}}return r}function Gp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function zg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ug(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Yi(r.href),s=n.querySelector($a(l));if(s){n=s._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=No.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=s,en(s);return}s=n.ownerDocument||n,r=zp(r),(l=Bt.get(l))&&lf(r,l),s=s.createElement("link"),en(s);var m=s;m._p=new Promise(function(g,k){m.onload=g,m.onerror=k}),Cn(s,"link",r),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=No.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var sf=0;function Hg(e,n){return e.stylesheets&&e.count===0&&Mo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&Mo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+n);0<e.imgBytes&&sf===0&&(sf=62500*yg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>sf?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function No(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ro=null;function Mo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ro=new Map,n.forEach(Gg,e),Ro=null,No.call(e))}function Gg(e,n){if(!(n.state.loading&4)){var t=Ro.get(e);if(t)var r=t.get(null);else{t=new Map,Ro.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var m=l[s];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),r=m)}r&&t.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),s=t.get(m)||r,s===r&&t.set(null,l),t.set(m,l),this.count++,r=No.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Fa={$$typeof:re,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Vg(e,n,t,r,l,s,m,g,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.hiddenUpdates=Zt(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Ip(e,n,t,r,l,s,m,g,k,C,P,X){return e=new Vg(e,n,t,m,k,C,P,X,g),n=1,s===!0&&(n|=24),s=dt(3,null,null,n),e.current=s,s.stateNode=e,n=Hc(),n.refCount++,e.pooledCache=n,n.refCount++,s.memoizedState={element:r,isDehydrated:t,cache:n},Yc(s),e}function Yp(e){return e?(e=xi,e):xi}function Pp(e,n,t,r,l,s){l=Yp(l),r.context===null?r.context=l:r.pendingContext=l,r=ol(n),r.payload={element:t},s=s===void 0?null:s,s!==null&&(r.callback=s),t=cl(e,r,n),t!==null&&(st(t,e,n),Na(t,e,n))}function qp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function of(e,n){qp(e,n),(e=e.alternate)&&qp(e,n)}function $p(e){if(e.tag===13||e.tag===31){var n=Yl(e,67108864);n!==null&&st(n,e,67108864),of(e,67108864)}}function Xp(e){if(e.tag===13||e.tag===31){var n=gt();n=Vr(n);var t=Yl(e,n);t!==null&&st(t,e,n),of(e,n)}}var To=!0;function Ig(e,n,t,r){var l=U.T;U.T=null;var s=ee.p;try{ee.p=2,cf(e,n,t,r)}finally{ee.p=s,U.T=l}}function Yg(e,n,t,r){var l=U.T;U.T=null;var s=ee.p;try{ee.p=8,cf(e,n,t,r)}finally{ee.p=s,U.T=l}}function cf(e,n,t,r){if(To){var l=uf(r);if(l===null)Fu(e,n,r,jo,t),Kp(e,r);else if(qg(l,e,n,t,r))r.stopPropagation();else if(Kp(e,r),n&4&&-1<Pg.indexOf(e)){for(;l!==null;){var s=Jn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var m=un(s.pendingLanes);if(m!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;m;){var k=1<<31-Tn(m);g.entanglements[1]|=k,m&=~k}ar(s),(Ve&6)===0&&(fo=bn()+500,Ia(0))}}break;case 31:case 13:g=Yl(s,2),g!==null&&st(g,s,2),po(),of(s,2)}if(s=uf(r),s===null&&Fu(e,n,r,jo,t),s===l)break;l=s}l!==null&&r.stopPropagation()}else Fu(e,n,r,null,t)}}function uf(e){return e=ca(e),ff(e)}var jo=null;function ff(e){if(jo=null,e=St(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=b(n),e!==null)return e;e=null}else if(t===31){if(e=y(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return jo=e,null}function Fp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rl()){case Ml:return 2;case ra:return 8;case Tl:case Wn:return 32;case ot:return 268435456;default:return 32}default:return 32}}var df=!1,vl=null,xl=null,wl=null,Ka=new Map,Qa=new Map,El=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kp(e,n){switch(e){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":xl=null;break;case"mouseover":case"mouseout":wl=null;break;case"pointerover":case"pointerout":Ka.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(n.pointerId)}}function Za(e,n,t,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},n!==null&&(n=Jn(n),n!==null&&$p(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function qg(e,n,t,r,l){switch(n){case"focusin":return vl=Za(vl,e,n,t,r,l),!0;case"dragenter":return xl=Za(xl,e,n,t,r,l),!0;case"mouseover":return wl=Za(wl,e,n,t,r,l),!0;case"pointerover":var s=l.pointerId;return Ka.set(s,Za(Ka.get(s)||null,e,n,t,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Qa.set(s,Za(Qa.get(s)||null,e,n,t,r,l)),!0}return!1}function Qp(e){var n=St(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=b(t),n!==null){e.blockedOn=n,la(e.priority,function(){Xp(t)});return}}else if(n===31){if(n=y(t),n!==null){e.blockedOn=n,la(e.priority,function(){Xp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=uf(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);oa=r,t.target.dispatchEvent(r),oa=null}else return n=Jn(t),n!==null&&$p(n),e.blockedOn=t,!1;n.shift()}return!0}function Zp(e,n,t){Do(e)&&t.delete(n)}function $g(){df=!1,vl!==null&&Do(vl)&&(vl=null),xl!==null&&Do(xl)&&(xl=null),wl!==null&&Do(wl)&&(wl=null),Ka.forEach(Zp),Qa.forEach(Zp)}function Ao(e,n){e.blockedOn===n&&(e.blockedOn=null,df||(df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$g)))}var Oo=null;function Wp(e){Oo!==e&&(Oo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Oo===e&&(Oo=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(ff(r||t)===null)continue;break}var s=Jn(t);s!==null&&(e.splice(n,3),n-=3,cu(s,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function qi(e){function n(k){return Ao(k,e)}vl!==null&&Ao(vl,e),xl!==null&&Ao(xl,e),wl!==null&&Ao(wl,e),Ka.forEach(n),Qa.forEach(n);for(var t=0;t<El.length;t++){var r=El[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<El.length&&(t=El[0],t.blockedOn===null);)Qp(t),t.blockedOn===null&&El.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],s=t[r+1],m=l[Nn]||null;if(typeof s=="function")m||Wp(t);else if(m){var g=null;if(s&&s.hasAttribute("formAction")){if(l=s,m=s[Nn]||null)g=m.formAction;else if(ff(l)!==null)continue}else g=m.action;typeof g=="function"?t[r+1]=g:(t.splice(r,3),r-=3),Wp(t)}}}function Jp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function mf(e){this._internalRoot=e}Co.prototype.render=mf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var t=n.current,r=gt();Pp(t,r,e,n,null,null)},Co.prototype.unmount=mf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pp(e.current,2,null,e,null,null),po(),n[ut]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var n=an();e={blockedOn:null,target:e,priority:n};for(var t=0;t<El.length&&n!==0&&n<El[t].priority;t++);El.splice(t,0,e),t===0&&Qp(e)}};var eh=i.version;if(eh!=="19.2.7")throw Error(a(527,eh,"19.2.7"));ee.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=x(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Xg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{jl=Lo.inject(Xg),yn=Lo}catch{}}return Ja.createRoot=function(e,n){if(!f(e))throw Error(a(299));var t=!1,r="",l=sm,s=om,m=cm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Ip(e,1,!1,null,null,t,r,null,l,s,m,Jp),e[ut]=n.current,Xu(e),new mf(n)},Ja.hydrateRoot=function(e,n,t){if(!f(e))throw Error(a(299));var r=!1,l="",s=sm,m=om,g=cm,k=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.formState!==void 0&&(k=t.formState)),n=Ip(e,1,!0,n,t??null,r,l,k,s,m,g,Jp),n.context=Yp(null),t=n.current,r=gt(),r=Vr(r),l=ol(r),l.callback=null,cl(t,l,r),t=r,n.current.lanes=t,Dl(n,t),ar(n),e[ut]=n.current,Xu(e),new Co(n)},Ja.version="19.2.7",Ja}var uh;function i0(){if(uh)return _f.exports;uh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),_f.exports=l0(),_f.exports}var a0=i0();const s0=r_(a0),fh=o=>{let i;const c=new Set,a=(x,_)=>{const v=typeof x=="function"?x(i):x;if(!Object.is(v,i)){const S=i;i=_??(typeof v!="object"||v===null)?v:Object.assign({},i,v),c.forEach(G=>G(i,S))}},f=()=>i,y={setState:a,getState:f,getInitialState:()=>w,subscribe:x=>(c.add(x),()=>c.delete(x))},w=i=o(a,f,y);return y},o0=(o=>o?fh(o):fh),c0=o=>o;function u0(o,i=c0){const c=ss.useSyncExternalStore(o.subscribe,ss.useCallback(()=>i(o.getState()),[o,i]),ss.useCallback(()=>i(o.getInitialState()),[o,i]));return ss.useDebugValue(c),c}const dh=o=>{const i=o0(o),c=a=>u0(i,a);return Object.assign(c,i),c},f0=(o=>o?dh(o):dh);function d0(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let c=0;c<o.length;c+=1)o[c]=Math.floor(Math.random()*256);let i="";for(const c of o)i+=c.toString(16).padStart(2,"0");return i}const $f="pkp.user",Xf="pkp.savedDevices",Ff="pkp.ideDrafts",Kf="pkp.ideSettings",us="Prototype Version 0.6.7";function Ko(o){try{const i=localStorage.getItem(o);return i?JSON.parse(i):null}catch{return null}}function Qo(o,i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}}function m0(){const o=Ko($f);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function vf(o){Qo($f,o)}function Po(){return Ko(Xf)??[]}function Qi(o){Qo(Xf,o)}function p0(){Qi([])}function h0(){try{localStorage.removeItem($f),localStorage.removeItem(Xf),localStorage.removeItem(Ff),localStorage.removeItem(Kf)}catch{}}function xf(){var o;return((o=Ko(Ff))==null?void 0:o.filter(i=>i.path&&typeof i.content=="string"))??[]}function wf(o){Qo(Ff,o)}function mh(){const o=Ko(Kf)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function _0(o){Qo(Kf,o)}function Ef(o){const i=Po(),c=i.findIndex(a=>a.deviceID===o.deviceID);return c>=0?i[c]=o:i.push(o),Qi(i),i}function g0(o){const i=Po().filter(c=>c.deviceID!==o);return Qi(i),i}const Lf="b8e06067-62ad-41ba-9231-206ae80ab551",b0="f897177b-aee8-4767-8ecc-cc694fd5fce0",y0="f897177b-aee8-4767-8ecc-cc694fd5fce1",Sf=20,v0=12,x0=new TextEncoder,w0=new TextDecoder;function E0(o){return new Promise(i=>setTimeout(i,o))}function Zo(){return typeof navigator<"u"&&"bluetooth"in navigator}function l_(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function S0(){if(!Zo())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Lf]},{namePrefix:"PicoW-"}],optionalServices:[Lf]})}async function i_(){if(!Zo()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class k0{constructor(){de(this,"device",null);de(this,"writeChar",null);de(this,"notifyChar",null);de(this,"buffer","");de(this,"writeQueue",Promise.resolve());de(this,"disconnectNotified",!1);de(this,"onLine",()=>{});de(this,"onDisconnect",()=>{});de(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=w0.decode(c.value.buffer);let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});de(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var f;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=i.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Lf);this.writeChar=await a.getCharacteristic(b0),this.notifyChar=await a.getCharacteristic(y0),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=x0.encode(`${i}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let p=0;p<c.length;p+=Sf){const b=c.slice(p,p+Sf);await f(b),p+Sf<c.length&&await E0(v0)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class N0{constructor(i,c){de(this,"send");de(this,"onMessage");de(this,"inActive",!1);de(this,"inExpectedTotal",0);de(this,"inStreamId",0);de(this,"inParts",new Map);de(this,"inProgress",null);de(this,"outPendingLines",null);de(this,"outWaitingAck",!1);de(this,"outStreamId",0);de(this,"outNextStreamId",1);de(this,"outCache",new Map);de(this,"outProgress",null);de(this,"outResolve",null);de(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const f=i.split(","),p=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,b=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;p!==null&&p>0&&(this.inActive=!0,this.inExpectedTotal=p,this.inStreamId=b,this.inParts.clear(),this.send(b>0?`ack:prep,${b}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const f=i.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const p=parseInt(f[1],10),b=parseInt(f[2],10),y=this.outCache.get(b);p===this.outStreamId&&y&&this.send(y)}return}const c=this.parseNumbered(i);if(c){const{idx:f,payload:p}=c;if(!this.inActive){this.onMessage(p);return}this.inParts.has(f)||(this.inParts.set(f,p),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let b=0;for(let y=1;y<=this.inExpectedTotal;y+=1)if(!this.inParts.has(y)){b=y;break}if(b>0&&this.inStreamId>0&&f>b&&this.send(`miss,${this.inStreamId},${b}`),this.inParts.size>=this.inExpectedTotal){for(let y=1;y<=this.inExpectedTotal;y+=1){const w=this.inParts.get(y);w!==void 0&&this.onMessage(w)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((p,b)=>{this.outResolve=p,this.outReject=b});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(p){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,p}await f}async flushOutbound(){var i,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const p=this.outPendingLines.length;for(let b=0;b<p;b+=1){const y=this.outPendingLines[b],w=`${b+1}-${y}`;this.outCache.set(b+1,w),await this.send(w),(c=this.outProgress)==null||c.call(this,b+1,p,y)}(a=this.outResolve)==null||a.call(this)}catch(p){(f=this.outReject)==null||f.call(this,p)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:i.slice(c+1)}}}const ea=11,fs=31,R0=2,M0=60,Zi=4,Wi=40;function T0(o,i){return Math.max(14,Math.min(56,Math.min(o,i)*.05))}function a_(o,i,c=ea,a=fs){const f=T0(o,i),p=Math.max(1,o-2*f),b=Math.max(1,i-2*f);return{areaW:o,areaH:i,cols:c,rows:a,margin:f,stepX:p/Math.max(1,c-1),stepY:b/Math.max(1,a-1)}}function s_(o,i){return i.margin+o/2*i.stepX}function o_(o,i){const c=i.margin+o/2*i.stepY;return i.areaH-c}function os(o,i){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:s_(o.centerX2,i),cy:o_(o.centerY2,i),width:o.spanX*i.stepX,height:o.spanY*i.stepY}}function j0(o){const i=[];for(let c=0;c<o.cols;c+=1)for(let a=0;a<o.rows;a+=1)i.push({x:o.margin+c*o.stepX,y:o.areaH-(o.margin+a*o.stepY)});return i}function Go(o,i,c,a,f){const p=(w,x,_,v)=>{const S=x%2,G=v*2;let Y=S,K=1/0;for(let D=S;D<=G;D+=2){const B=Math.abs(_(D)-w);B<K&&(K=B,Y=D)}return Math.max(x,Math.min(G-x,Y))},b=p(o,c,w=>s_(w,f),f.cols-1),y=p(i,a,w=>o_(w,f),f.rows-1);return{centerX2:b,centerY2:y}}const li=6e3,D0=15,qo=[32,64,128,192],A0=li*10,O0=3500,C0=8e3,L0=2,B0=li,z0=li*8;function kf(o){return new Promise(i=>setTimeout(i,o))}function $i(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function ph(o){return o instanceof DOMException&&o.name==="AbortError"}function kl(o){return o.replace(/[\r\n,]/g," ").trim()}class U0{constructor(i={}){de(this,"transport",new k0);de(this,"stream");de(this,"events");de(this,"waiters",[]);de(this,"collectingLayout",!1);de(this,"layoutBuffer",[]);de(this,"layoutResolve",null);de(this,"collectingLines",!1);de(this,"lineBuffer",[]);de(this,"lineResolve",null);de(this,"lineReject",null);de(this,"lineCollectId",0);de(this,"controlPumpActive",!1);de(this,"pendingButtons",[]);de(this,"pendingSliders",new Map);de(this,"pendingToggles",new Map);de(this,"pendingJoysticks",new Map);de(this,"pendingDpads",[]);de(this,"expectingDisconnect",!1);de(this,"disconnectMessage",null);de(this,"busy",!1);de(this,"fsCapabilities",null);this.events=i,this.stream=new N0(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return l_((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,i,c)}progress(i,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,i,c)}onDeviceMessage(i){var a,f;if(i==="disconnect"||i==="disconnect_private"){const p=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=p,this.log("warning",p),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const p=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,p),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const p=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,p),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(p=>p.match(i));if(c>=0){const p=this.waiters[c];this.waiters.splice(c,1),clearTimeout(p.timer),p.resolve(i)}}waitFor(i,c,a){return new Promise((f,p)=>{const b=setTimeout(()=>{const y=this.waiters.findIndex(w=>w.timer===b);y>=0&&this.waiters.splice(y,1),p(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:f,reject:p,timer:b})})}async collectLines(i,c,a,f,p){$i(f);const b=this.lineCollectId+1;this.lineCollectId=b,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(p??null);const y=new Promise((w,x)=>{let _=!1;const v=()=>this.lineCollectId===b,S=()=>{_=!0,v()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",Y)},G=B=>{_||(clearTimeout(K),v()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),S(),x(B))},Y=()=>{G(new DOMException("BLE file read cancelled","AbortError"))},K=setTimeout(()=>{v()&&G(new Error(`Timeout: ${a}`))},c);this.lineResolve=w,this.lineReject=G;const D=this.lineResolve;this.lineResolve=B=>{v()&&(clearTimeout(K),S(),D==null||D(B))},f==null||f.addEventListener("abort",Y,{once:!0})});return await this.transport.writeLine(i),y}async exchange(i,c,a,f=3){let p;for(let b=1;b<=f;b+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,li,a)}catch(y){p=y,this.log("warning",`${a}: forsøg ${b}/${f} mislykkedes`)}throw p instanceof Error?p:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var se,oe,pe;await kf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",W=>W==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",W=>W==="unowned"||W.startsWith("unowned,")||W.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((se=c.split(",")[1])==null?void 0:se.trim())||void 0};const a=c.split(","),f=a[1]??"",p=a[2]!==void 0&&parseInt(a[2],10)||0,b=a[3]!==void 0?parseInt(a[3],10)===1:!0,y=a[4]!==void 0?parseInt(a[4],10)===1:!1,w=a.length>=7,x=w?parseInt(a[5]??"0",10)===1:y,_=((oe=a[w?6:5])==null?void 0:oe.trim())||void 0,v=((pe=a[w?7:6])==null?void 0:pe.trim())||void 0;await this.exchange("ACK:ownership",W=>W==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const S=await this.exchange(`request_permission,${i.userID},${kl(i.username)}`,W=>W.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const G=S.split(",").filter(W=>/^\d+$/.test(W)),Y=G.length>=1?parseInt(G[0]??"0",10):0,K=G.length>=2?parseInt(G[1]??"0",10):0,D=G.length>=3?parseInt(G[2]??"0",10):K;if(Y===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:_,canOthersConnect:b};const B=i.userID===f,H=K===1||B,re=D===1||B;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:_,deviceName:v,iconID:p,canEdit:H,canEditCode:re,isOwnedByMe:B,canOthersConnect:b,canOthersEdit:y,canOthersEditCode:x}}async create(i,c,a,f,p,b,y){const w=a?1:0,x=a&&f?1:0,_=a&&p?1:0;await this.exchange(`create,${i.userID},${kl(i.username)},${c},${w},${x},${_},${b},${y}`,v=>v==="ACK:create","create")}async updateDeviceSettings(i,c,a,f,p,b,y){const w=c?1:0,x=c&&a?1:0,_=c&&f?1:0;await this.exchange(`settings_update,${i},${w},${x},${_},${p},${b},${kl(y??"")}`,v=>v==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,f)=>{this.layoutResolve=a;const p=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},li*2),b=this.layoutResolve;this.layoutResolve=y=>{clearTimeout(p),b==null||b(y)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(f=>{const p=y=>y===null?"n":String(y),b=`update,${f.type},${f.name},${p(f.centerX2)},${p(f.centerY2)},${p(f.spanX)},${p(f.spanY)},${f.rotation}`;return f.type==="slider"?`${b},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${b},${f.toggleInitial?1:0}`:f.type==="radar"?[b,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[b,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):b});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",li*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${kl(i)}`,li*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,p,b]=a.split(","),y=f==="file"||f==="dir"?f:"unknown",w=parseInt(b??"",10),x=p||"/";return{name:x.split("/").filter(Boolean).pop()??x,path:x,type:y,...Number.isFinite(w)&&w>=0?{size:w}:{}}})}handleRadarLine(i){var b,y,w;const c=i.split(",");if(c.length<4)return;const a=(b=c[1])==null?void 0:b.trim(),f=parseFloat(c[2]??""),p=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(p)||((w=(y=this.events).onRadar)==null||w.call(y,a,f,p),this.log("info",`rx: ${i}`))}handleTextLine(i){var y,w;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=i.slice(c+1,a),p=i.slice(a+1),b=f==null?void 0:f.trim();b&&((w=(y=this.events).onText)==null||w.call(y,b,p),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var p,b,y;const c=i.split(",");if(c.length<3)return;const a=(p=c[1])==null?void 0:p.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((y=(b=this.events).onToggleState)==null||y.call(b,a,f===1),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(i,f,c,a)}catch(p){if(a!=null&&a.aborted||ph(p)||!f.pageRead)throw p;this.log("warning",p instanceof Error?`fs_read_stream fejlede; bruger paged read: ${p.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",B0,"fs_capabilities",i),a=c.find(_=>_.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(_=>_.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const p=f.split(","),b=new Map;for(let _=1;_<p.length-1;_+=2)b.set(p[_],p[_+1]);const y=parseInt(b.get("max_page")??"",10),w=parseInt(b.get("stream_chunk")??"",10),x={version:b.get("version")||void 0,pageRead:b.get("page_read")==="1",maxPageSize:Number.isFinite(y)&&y>0?y:32,streamRead:b.get("stream_read")==="1",streamChunkSize:Number.isFinite(w)&&w>0?w:128};if(!x.pageRead&&!x.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=x,x}async readTextPaged(i,c,a){const f=await this.getFilesystemCapabilities(a);let p=0,b=H0(f.maxPageSize),y=0,w=null,x="";const _=`Indlæser ${Nf(i)}...`;$i(a),c==null||c(5,_);for(let v=0;v<512;v+=1){$i(a),y===0&&(c==null||c(7,_));const G=await this.readPageWithRetry(i,y,p,b,a),Y=G.lines;p=G.nextPageSizeIndex,b=G.maxPageSizeIndex,$i(a);const K=Y.find(Z=>Z.startsWith("ERR"));if(K)throw new Error(K);const D=Y.find(Z=>Z.startsWith("fs_page,"));if(!D)throw new Error("ERR: fs_read_page missing data");const[,B,H,re,se=""]=D.split(",",5);if(B!==i)throw new Error("ERR: fs_read_page stale data");const oe=parseInt(H??"",10),pe=parseInt(re??"",10);if(!Number.isFinite(oe)||oe!==y||!Number.isFinite(pe))throw new Error("ERR: fs_read_page invalid data");w=pe,x+=se,y+=Math.floor(se.length/2);const W=w>0?8+Math.min(87,Math.round(y/w*87)):95;if(c==null||c(W,_),y>=w||se.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(_h(x))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,f,p){let b,y=Math.min(a,f);for(;y>=0;){const w=qo[y],x=y===0?L0:1,_=y===0?C0:O0;for(let v=1;v<=x;v+=1){$i(p);try{return{lines:await this.collectLines(`fs_read_page,${kl(i)},${c},${w}`,_,`fs_read_page ${c}`,p),nextPageSizeIndex:Math.min(y+1,f),maxPageSizeIndex:f}}catch(S){if(p!=null&&p.aborted||ph(S))throw S;if(b=S,v<x||y>0){const Y=y>0&&v>=x?qo[y-1]:w;this.log("warning",`fs_read_page ${c} (${w} bytes) fejlede; prøver ${Y} bytes`),await kf(80+v*80)}}}if(y===0)break;f=Math.max(0,y-1),y=f}throw b instanceof Error?b:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,f){const p=`Indlæser ${Nf(i)}...`,b=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,p);const y=await this.collectLines(`fs_read_stream,${kl(i)},${b}`,z0,`fs_read_stream ${i}`,f,(W,Z)=>{const Se=8+Math.round(Math.min(W,Z)/Math.max(1,Z)*87);a==null||a(Math.min(95,Se),p)});$i(f);const w=y.find(W=>W.startsWith("ERR"));if(w)throw new Error(w);const x=y.find(W=>W.startsWith("fs_stream_begin,")),_=y.find(W=>W.startsWith("fs_stream_end,"));if(!x||!_)throw new Error("ERR: fs_read_stream missing metadata");const[,v,S]=x.split(",",4),[,G,Y,K]=_.split(",",4),D=parseInt(S??"",10),B=parseInt(Y??"",10),H=parseInt(K??"",10);if(v!==i||G!==i||!Number.isFinite(D)||D!==B||!Number.isFinite(H))throw new Error("ERR: fs_read_stream invalid metadata");let re=0,se="";for(const W of y){if(!W.startsWith("fs_stream_chunk,"))continue;const[,Z,Se=""]=W.split(",",3),ye=parseInt(Z??"",10);if(!Number.isFinite(ye)||ye!==re||Se.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");se+=Se,re+=Math.floor(Se.length/2)}if(re!==D)throw new Error("ERR: fs_read_stream size mismatch");const oe=_h(se);if(hh(oe)!==H)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(oe)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${kl(i)}`,_=>_==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),p=[...f].map(_=>_.toString(16).padStart(2,"0")).join(""),b=[];for(let _=0;_<p.length;_+=160)b.push(`fs_write_chunk,${p.slice(_,_+160)}`);b.push("fs_write_end");const y=hh(f),w=this.waitFor(_=>_==="ACK:fs_write_done"||_.startsWith("ACK:fs_write_done,")||_.startsWith("ERR"),A0,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(b,(_,v,S)=>{if(!S.startsWith("fs_write_chunk,"))return;const G=Math.min(f.length,_*80),Y=18+Math.round(_/Math.max(1,v-1)*67);a==null||a(Math.min(85,Y),`Sender ${G}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const x=await w;if(x.startsWith("ERR"))throw new Error(x);if(x.startsWith("ACK:fs_write_done,")){const[,_,v]=x.split(",",3),S=parseInt(_??"",10),G=parseInt(v??"",10);if(S!==f.length||G!==y)throw new Error(`ERR: BLE-verificering fejlede for ${Nf(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${kl(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}async ping(){await this.exchange("HELLO",i=>i==="ACK:HELLO","heartbeat",1)}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await kf(D0)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[b,y]=a.value;return this.pendingSliders.delete(b),y}const f=this.pendingToggles.entries().next();if(!f.done){const[b,y]=f.value;return this.pendingToggles.delete(b),y}const p=this.pendingJoysticks.entries().next();if(!p.done){const[b,y]=p.value;return this.pendingJoysticks.delete(b),y}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const p of this.waiters)clearTimeout(p.timer),p.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,i)}}function H0(o){let i=0;for(let c=0;c<qo.length;c+=1)qo[c]<=o&&(i=c);return i}function Nf(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function hh(o){let i=0;for(const c of o)i=i+c>>>0;return i}function _h(o){const i=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(o.slice(c*2,c*2+2),16);return i}function gh(o){const i=(c,a)=>Number.isFinite(c)?Math.max(R0,Math.min(M0,c)):a;for(const c of o){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),p=i(parseInt(f[1],10),ea),b=i(parseInt(f[2],10),fs);return{cols:p,rows:b}}}return{cols:ea,rows:fs}}function bh(o){const i=new Map;for(const c of o){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[p,b,y,w,x,_,v,S,G,Y,K,D,B]=f;if(p!=="button"&&p!=="slider"&&p!=="toggle"&&p!=="radar"&&p!=="text"&&p!=="joystick"&&p!=="dpad"||i.has(b))continue;const H=ee=>{if(ee==="n")return null;const ce=parseInt(ee,10);return Number.isNaN(ce)?null:ce},re=parseInt(v,10)||0,se=S!==void 0?parseInt(S,10):0,oe=G!==void 0?parseInt(G,10):100,pe=["none","bottom","middle","top"].includes(Y??"")?Y:"none",W=S!==void 0?parseInt(S,10)===1:!1,Z=S!==void 0?parseFloat(S):0,Se=G!==void 0?parseFloat(G):180,ye=Y!==void 0?parseFloat(Y):200,xe=K!==void 0?parseInt(K,10):1200,ie=(ee,ce)=>["none","bottom","middle","top"].includes(ee??"")?ee:ce,Ie=S!==void 0?parseInt(S,10):-100,Te=G!==void 0?parseInt(G,10):100,Ye=Y!==void 0?parseInt(Y,10):-100,U=K!==void 0?parseInt(K,10):100;i.set(b,{type:p,name:b,centerX2:H(y),centerY2:H(w),spanX:H(x),spanY:H(_),rotation:[0,90,180,270].includes(re)?re:0,...p==="slider"?{sliderMin:Number.isFinite(se)?se:0,sliderMax:Number.isFinite(oe)?oe:100,sliderRecenter:pe}:{},...p==="toggle"?{toggleInitial:W}:{},...p==="radar"?{radarMinAngle:Number.isFinite(Z)?Z:0,radarMaxAngle:Number.isFinite(Se)?Se:180,radarMaxDistance:Number.isFinite(ye)&&ye>0?ye:200,radarFadeMs:Number.isFinite(xe)&&xe>0?xe:1200}:{},...p==="joystick"?{joystickXMin:Number.isFinite(Ie)?Ie:-100,joystickXMax:Number.isFinite(Te)&&Te!==Ie?Te:100,joystickYMin:Number.isFinite(Ye)?Ye:-100,joystickYMax:Number.isFinite(U)&&U!==Ye?U:100,joystickXRecenter:ie(D,"middle"),joystickYRecenter:ie(B,"middle")}:{}})}return[...i.values()]}let ne=null,es=null,ns=null,Bo=!1,yh=0,Cr=!1;function G0(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function vh(o){return new Promise(i=>setTimeout(i,o))}function Rf(o,i){const c=i.userID.toLowerCase();return o.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?i.username:a.ownerName}})}function Mf(o,i){return(o.name?l_(o.name):"")||(i==null?void 0:i.deviceName)||"Pico"}function V0(o){return Object.fromEntries(o.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function xh(o,i){const c=V0(o);for(const a of o)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const le=f0((o,i)=>{function c(_,v){o(S=>({logs:[{level:_,message:v,time:G0()},...S.logs].slice(0,200)}))}function a(_){es&&clearTimeout(es),yh+=1,o({toast:{message:_,id:yh}}),es=setTimeout(()=>o({toast:null}),4500)}function f(_=null){w(),o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:_})}function p(_){return{deviceID:_.deviceID,deviceName:_.deviceName,ownerID:_.ownerID,deviceIconID:_.iconID,canOthersConnect:_.canOthersConnect,canOthersEdit:_.canOthersEdit,canOthersEditCode:_.canOthersEditCode,isOwnedByMe:_.isOwnedByMe,ownerName:_.ownerName}}function b(_){const{screen:v,active:S,picoIdeOrigin:G}=i();if(w(),Cr){Cr=!1;return}_&&(c("warning",_),a(_)),(v==="control"||v==="connection"||v==="create"||v==="ide"&&G==="control")&&f(S?p(S):null)}function y(){ns||(ns=setInterval(()=>{x()},3e3))}function w(){ns&&(clearInterval(ns),ns=null,Bo=!1)}async function x(){if(Bo)return;const{screen:_,active:v}=i();if(!(!!(ne!=null&&ne.connected)&&!!v&&_==="control")){w();return}Bo=!0;try{await(ne==null?void 0:ne.ping())}catch{c("warning","Bluetooth-forbindelsen svarer ikke længere."),await(ne==null?void 0:ne.disconnect().catch(()=>{})),b("Bluetooth-forbindelsen svarede ikke og blev afbrudt.")}finally{Bo=!1}}return ne=new U0({onProgress:(_,v)=>o({progress:{value:_,label:v}}),onLog:(_,v)=>c(_,v),onRadar:(_,v,S)=>{const G=Date.now(),Y={id:`${G}-${Math.random().toString(36).slice(2)}`,angle:v,distance:S,createdAt:G};o(K=>{const D=K.layout.find(re=>re.type==="radar"&&re.name===_),B=(D==null?void 0:D.radarFadeMs)??1200,H=K.radarPings[_]??[];return{radarPings:{...K.radarPings,[_]:[...H.filter(re=>G-re.createdAt<=B),Y].slice(-80)}}})},onText:(_,v)=>{o(S=>({textValues:{...S.textValues,[_]:v}}))},onToggleState:(_,v)=>{o(S=>({toggleValues:{...S.toggleValues,[_]:v}}))},onDisconnect:_=>b(_)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const _=m0(),v=_?Rf(Po(),_):Po();_&&Qi(v),o({user:_,savedDevices:v,splashTarget:_?"dashboard":"intro"})},finishSplash:()=>{const _=i().splashTarget;o({screen:_??"intro"})},createUser:_=>{const v=_.trim();if(!v)return;const S={username:v,userID:d0()};vf(S),o({user:S,screen:"dashboard"})},findDevice:async()=>{try{const _=await S0();await i().connectToDevice(_)}catch(_){_ instanceof Error&&_.name!=="NotFoundError"&&c("error",_.message)}},connectToDevice:async(_,v)=>{var G,Y,K;const S=i().user;if(!(!S||!ne)){Cr=!1,o({screen:"connection",connecting:{name:Mf(_,v),iconID:(v==null?void 0:v.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await ne.connect(_);const D=await ne.runHandshake(S),B=_.id,H=(D.kind==="owned"||D.kind==="unowned")&&((G=D.deviceName)==null?void 0:G.trim())||Mf(_,v);if(o(W=>W.connecting?{connecting:{...W.connecting,name:H}}:{}),D.kind==="denied"){const Z=`Du kan ikke forbinde, fordi ${((Y=D.ownerName)==null?void 0:Y.trim())||((K=v==null?void 0:v.ownerName)==null?void 0:K.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",Z),a(Z),o({screen:"dashboard",connecting:null}),await ne.disconnect();return}if(D.kind==="unowned"){o({active:{deviceID:B,deviceName:H,ownerID:S.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:S.username,gridCols:ea,gridRows:fs},screen:"create"});return}const re={deviceID:B,deviceName:H,ownerID:D.ownerID,deviceIconID:D.iconID,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?S.username:D.ownerName??(v==null?void 0:v.ownerName)};o({savedDevices:Ef(re)});const se=await ne.requestLayout(),oe=gh(se),pe=bh(se);o({layout:pe,sliderValues:{},toggleValues:xh(pe,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:B,deviceName:H,ownerID:D.ownerID,iconID:D.iconID,canEdit:D.canEdit,canEditCode:D.canEditCode,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?S.username:D.ownerName??(v==null?void 0:v.ownerName),gridCols:oe.cols,gridRows:oe.rows},screen:"control",connecting:null,connectionLost:null}),y()}catch(D){const B=D instanceof Error?D.message:"Forbindelsen mislykkedes.";c("error",B),a("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await ne.disconnect().catch(()=>{})}}},finishCreate:async(_,v,S,G,Y,K)=>{const{user:D,active:B}=i();if(!(!D||!B||!ne))try{ne.setBusy(!0),await ne.create(D,_,v,S,G,Y,K),ne.setBusy(!1);const H={deviceID:B.deviceID,deviceName:B.deviceName,ownerID:D.userID,deviceIconID:_,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&G,isOwnedByMe:!0,ownerName:D.username};o({savedDevices:Ef(H)});const re=await ne.requestLayout(),se=gh(re),oe=bh(re);o({layout:oe,sliderValues:{},toggleValues:xh(oe,i().toggleValues),radarPings:{},textValues:{},active:{...B,ownerID:D.userID,iconID:_,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&G,ownerName:D.username,gridCols:se.cols,gridRows:se.rows},screen:"control"}),y()}catch(H){ne.setBusy(!1);const re=H instanceof Error?H.message:"Oprettelse mislykkedes.";c("error",re),a("Oprettelse mislykkedes."),o({screen:"dashboard"}),await ne.disconnect().catch(()=>{})}},saveDeviceSettings:async(_,v,S,G,Y,K)=>{const{active:D,user:B}=i();if(!(!D||!ne||!D.isOwnedByMe))try{ne.setBusy(!0),await ne.updateDeviceSettings(_,v,S,G,Y,K,B==null?void 0:B.username);const H={...D,iconID:_,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&G,ownerName:(B==null?void 0:B.username)??D.ownerName,gridCols:Y,gridRows:K},re={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(B==null?void 0:B.userID),deviceIconID:_,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&G,isOwnedByMe:!0,ownerName:(B==null?void 0:B.username)??D.ownerName};o({active:H,savedDevices:Ef(re)}),a("Enhedsindstillinger gemt.")}catch(H){c("error",H instanceof Error?H.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{ne.setBusy(!1)}},cancelCreate:async()=>{ne&&await ne.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Cr=!0,f(null),ne&&await ne.disconnect().catch(()=>{}),Cr=!1},removeSavedDevice:_=>{o({savedDevices:g0(_)})},clearSavedDevices:()=>{p0(),o({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Cr=!0,ne!=null&&ne.connected&&await ne.disconnect().catch(()=>{}),h0(),window.location.reload()},updateUsername:_=>{const v=i().user,S=_.trim();if(!v||!S)return;const G={...v,username:S};vf(G),o(Y=>{var D;const K=Rf(Y.savedDevices,G);return Qi(K),{user:G,active:(D=Y.active)!=null&&D.isOwnedByMe?{...Y.active,ownerName:S}:Y.active,savedDevices:K}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const _=i().user;return _?I0(_):null},applyOwnerPairingCode:_=>{var S;const v=Y0(_,(S=i().user)==null?void 0:S.username);return v?(vf(v),o(G=>{var K,D,B;const Y=Rf(G.savedDevices,v);return Qi(Y),{user:v,active:((D=(K=G.active)==null?void 0:K.ownerID)==null?void 0:D.toLowerCase())===v.userID.toLowerCase()||(B=G.active)!=null&&B.isOwnedByMe?{...G.active,isOwnedByMe:!0,ownerID:v.userID,ownerName:v.username}:G.active,savedDevices:Y}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const _=i().screen==="control"&&!!(ne!=null&&ne.connected),v=i().active;if(_&&v&&!v.isOwnedByMe&&!v.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(S=>({screen:"ide",picoIdeOrigin:_?"control":"dashboard",active:_?S.active:null,layout:_?S.layout:[],sliderValues:_?S.sliderValues:{},toggleValues:_?S.toggleValues:{},radarPings:_?S.radarPings:{},textValues:_?S.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:_,active:v}=i();o({screen:_==="control"&&v&&(ne!=null&&ne.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ne!=null&&ne.connected),bleListFiles:async()=>ne!=null&&ne.connected?ne.listFiles("/"):[],bleReadText:async(_,v,S)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");return ne.readText(_,v,S)},bleWriteText:async(_,v,S)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.writeText(_,v,S)},bleDeleteFile:async _=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.deleteFile(_)},bleRestart:async()=>{ne!=null&&ne.connected&&await ne.restart()},bleRestartAndReconnect:async(_="control")=>{const{active:v}=i();if(!(ne!=null&&ne.connected)||!v)return!1;const S={deviceID:v.deviceID,deviceName:v.deviceName,ownerID:v.ownerID,deviceIconID:v.iconID,canOthersConnect:v.canOthersConnect,canOthersEdit:v.canOthersEdit,canOthersEditCode:v.canOthersEditCode,isOwnedByMe:v.isOwnedByMe,ownerName:v.ownerName};Cr=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ne.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:S.deviceName,iconID:S.deviceIconID}});for(let G=0;G<12&&(ne!=null&&ne.connected);G+=1)await vh(250);ne!=null&&ne.connected||(Cr=!1);for(let G=1;G<=8;G+=1){await vh(G===1?1200:850);try{const K=(await i_()).find(D=>D.id===S.deviceID);if(!K){o({progress:{value:Math.min(88,20+G*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+G*8),label:`Genforbinder (${G}/8)...`}}),await i().connectToDevice(K,S),_==="ide"&&o(D=>({screen:"ide",picoIdeOrigin:"control",active:D.active,layout:D.layout,sliderValues:D.sliderValues,toggleValues:D.toggleValues,radarPings:D.radarPings,textValues:D.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(Y){c("warning",Y instanceof Error?Y.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Cr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:S}),!1},reconnectLostDevice:async()=>{var v;const _=i().connectionLost;if(_){o({connectionLost:null});try{if((v=navigator.bluetooth)!=null&&v.getDevices){const G=(await navigator.bluetooth.getDevices()).find(Y=>Y.id===_.deviceID);if(G){await i().connectToDevice(G,_);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:(_,v)=>ne==null?void 0:ne.enqueueButton(_,v),sendSlider:(_,v)=>{o(S=>({sliderValues:{...S.sliderValues,[_]:v}})),ne==null||ne.enqueueSlider(_,v)},sendToggle:(_,v)=>{o(S=>({toggleValues:{...S.toggleValues,[_]:v}})),ne==null||ne.enqueueToggle(_,v)},sendJoystick:(_,v,S)=>ne==null?void 0:ne.enqueueJoystick(_,v,S),sendDpad:(_,v,S)=>ne==null?void 0:ne.enqueueDpad(_,v,S),saveLayout:async _=>{if(ne)try{ne.setBusy(!0),await ne.saveLayout(_),o({layout:_,editMode:!1})}catch(v){c("error",v instanceof Error?v.message:"Kunne ikke gemme layout.")}finally{ne.setBusy(!1)}},setEditMode:_=>o({editMode:_,sideMenuOpen:!1,menuPage:null}),setDashboardPage:_=>o({dashboardPage:_}),toggleSideMenu:_=>o(v=>({sideMenuOpen:_??!v.sideMenuOpen})),toggleDebugger:_=>o(v=>({debuggerOpen:_??!v.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:_=>o({menuPage:_,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(_,v)=>c(_,v),askConfirm:_=>o({confirmDialog:_}),closeConfirm:()=>o({confirmDialog:null}),showToast:_=>a(_),dismissToast:()=>{es&&clearTimeout(es),o({toast:null})}}}),Bf="PKP-EJER";function I0(o){var a;const i=o.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${Bf}-${c}-${c_(i)}`}function Y0(o,i="Ejer"){const c=o.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Bf}-`))return null;const a=c.slice(Bf.length+1).split("-").filter(Boolean),f=a.pop()??"",p=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(p)||f!==c_(p)?null:{userID:p,username:i.trim()||"Ejer"}}function c_(o){let i=2166136261;for(const c of o.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const Wo="./",u_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function ta(o){const i=o>=0&&o<u_.length?o:0;return`${Wo}device-icons/${i}.png`}const P0=`${Wo}art/logo.png`,q0=`${Wo}art/Teknologiskolen_logo.png`,$0=`${Wo}art/logo_teknologiskolen_white.png`,X0={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Zn({name:o,size:i=24,className:c}){return u.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:X0[o]})}const F0=1850,K0=450;function Q0(){const o=le(a=>a.splashTarget),i=le(a=>a.finishSplash),c=o?"splash-screen-animation splash-ready":"splash-pending";return z.useEffect(()=>{if(!o)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?K0:F0,p=window.setTimeout(i,f);return()=>window.clearTimeout(p)},[i,o]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:P0,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function wh(){const o=le(f=>f.createUser),[i,c]=z.useState(""),a=i.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:q0,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:i,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>o(i),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:us})]})}function Qf({title:o,onMenu:i}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:o}),u.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:u.jsx(Zn,{name:"menu"})})]})})}function En({title:o,onClose:i,children:c,closeVariant:a="plain"}){const f=a==="circle",p=z.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:b=>{p.current=b.target===b.currentTarget},onClick:b=>{b.target===b.currentTarget&&p.current&&i(),p.current=!1},children:u.jsxs("div",{className:"modal",onClick:b=>b.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:o}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:u.jsx(Zn,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function Eh(){const o=le(S=>S.savedDevices),i=le(S=>S.toggleSideMenu),c=le(S=>S.findDevice),a=le(S=>S.removeSavedDevice),f=le(S=>S.askConfirm),p=le(S=>S.dashboardPage),b=le(S=>S.setDashboardPage),y=eb(),[w,x]=z.useState(null),_=Zo(),v=o.filter(S=>p==="mine"?S.isOwnedByMe:!S.isOwnedByMe).sort(J0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(Qf,{title:"Hovedmenu",onMenu:()=>i()}),u.jsxs("div",{className:"content dash-content",children:[!_&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:p==="mine"?"active":"",onClick:()=>b("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:p==="andre"?"active":"",onClick:()=>b("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:v.length===0?u.jsx("div",{className:"device-list-empty",children:p==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):v.map(S=>u.jsx(Z0,{device:S,disabled:!_,onConnect:()=>y(S),onSettings:()=>x(S)},S.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!_,"aria-label":"Find enhed",children:u.jsx(Zn,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:us}),w&&u.jsx(En,{title:"Enhedsindstillinger",onClose:()=>x(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:ta(w.deviceIconID),alt:""}),u.jsx("strong",{children:w.deviceName})]}),u.jsx(ts,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(ts,{label:"Ejer",value:W0(w)}),u.jsx(ts,{label:"Offentlig",value:w.canOthersConnect?"Ja":"Nej"}),u.jsx(ts,{label:"Andre må redigere layout",value:w.canOthersEdit?"Ja":"Nej"}),u.jsx(ts,{label:"Andre må redigere kode",value:w.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!_,onClick:()=>{const S=w;x(null),y(S)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${w.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(w.deviceID),x(null)}}),children:"Glem enhed"})]})})]})}function Z0({device:o,disabled:i,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[u.jsx("img",{className:"device-tile-icon",src:ta(o.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(Zn,{name:"settings"})})]})}function ts({label:o,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:o}),u.jsx("strong",{children:i})]})}function W0(o){var i;return o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger"}function J0(o,i){return o.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function eb(){const o=le(a=>a.connectToDevice),i=le(a=>a.findDevice),c=le(a=>a.log);return async a=>{const p=(await i_()).find(b=>b.id===a.deviceID);p?await o(p,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function nb(){const o=le(c=>c.connecting),i=le(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:ta((o==null?void 0:o.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function f_({selected:o,onSelect:i,onClose:c}){return u.jsx(En,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:u_.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===o?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:ta(a.id),alt:""})},a.id))})})}function tb(){const o=le(se=>se.finishCreate),i=le(se=>se.cancelCreate),[c,a]=z.useState(0),[f,p]=z.useState(!1),[b,y]=z.useState(!1),[w,x]=z.useState(!1),[_,v]=z.useState(!1),[S,G]=z.useState(ea),[Y,K]=z.useState(fs),[D,B]=z.useState(!1),H=se=>Number.isFinite(se)?Math.max(Zi,Math.min(Wi,Math.round(se))):ea;async function re(){B(!0),await o(c,b,b&&w,b&&_,H(S),H(Y))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>p(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:ta(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(Zn,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:b?"":"active",onClick:()=>y(!1),children:"Privat"}),u.jsx("button",{type:"button",className:b?"active":"",onClick:()=>y(!0),children:"Offentlig"})]}),b&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:w?"":"active",onClick:()=>x(!1),children:"Nej"}),u.jsx("button",{type:"button",className:w?"active":"",onClick:()=>x(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>v(!1),children:"Nej"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>v(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:Zi,max:Wi,value:Number.isNaN(S)?"":S,onChange:se=>G(parseInt(se.target.value,10)),onBlur:()=>G(H(S))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:Zi,max:Wi,value:Number.isNaN(Y)?"":Y,onChange:se=>K(parseInt(se.target.value,10)),onBlur:()=>K(H(Y))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:D,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:re,disabled:D,children:D?"Opretter...":"Opret"})]})]}),f&&u.jsx(f_,{selected:c,onSelect:a,onClose:()=>p(!1)}),u.jsx("span",{className:"version",children:us})]})}const na=8;function Vo(o){return Math.max(5,Math.min(22,o))}function rb(o,i,c){const a=Math.max(1,o.length),f=(i-na*2)/(a*.58),p=(c-na*2)*.48;return Vo(Math.min(f,p))}function ii(o,i,c){switch(c){case 90:return{x:-i,y:o};case 180:return{x:-o,y:-i};case 270:return{x:i,y:-o};default:return{x:o,y:i}}}function $o(o){return(360-o)%360}function lb(o,i,c,a){const f=a===90||a===270;return rb(o,f?c:i,f?i:c)}function Xo({name:o,width:i,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:lb(o,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:o})}function ib(o,i,c,a,f){const p=o.trim().split(/\s+/).filter(Boolean),b=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,p.length-1)*1.6),y=f?Vo(Math.min(i/4.6,c/4.6,12)):0,w=f?y+na:na;if(a){const v=Math.max(1,c-w*2);return{fontSize:Vo(Math.min(i*.48,v/(b*1.04))),endFontSize:y,centerInset:f?{top:w,bottom:w}:{}}}const x=Math.max(1,i-w*4.2);return{fontSize:Vo(Math.min(c*.42,x/(b*.58))),endFontSize:y,centerInset:f?{left:w*2.1,right:w*2.1}:{}}}function ab({control:o,rect:i,disabled:c,latestValue:a,toggleValue:f,radarPings:p=[],textValue:b,onButton:y,onSlider:w,onToggle:x,onJoystick:_,onDpad:v}){const S=z.useRef(!1),G={left:i.cx,top:i.cy,width:i.width,height:i.height};if(o.type==="button"){const Y=()=>{c||!S.current||(S.current=!1,y(o.name,!1))};return u.jsx("div",{className:"control",style:G,children:u.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:K=>{var D,B;c||(K.preventDefault(),(B=(D=K.currentTarget).setPointerCapture)==null||B.call(D,K.pointerId),S.current=!0,y(o.name,!0))},onPointerUp:K=>{var D,B;K.preventDefault(),(B=(D=K.currentTarget).releasePointerCapture)==null||B.call(D,K.pointerId),Y()},onPointerCancel:Y,onLostPointerCapture:Y,children:u.jsx(Xo,{name:o.name,width:i.width,height:i.height,rotation:o.rotation})})})}if(o.type==="toggle"){const Y=!!f;return u.jsx("div",{className:"control",style:G,children:u.jsx("button",{className:`control-toggle ${Y?"on":""}`,type:"button",disabled:c,"aria-pressed":Y,style:{width:"100%",height:"100%"},onPointerDown:K=>{c||(K.preventDefault(),x(o.name,!Y))},children:u.jsx(Xo,{name:o.name,width:i.width,height:i.height,rotation:o.rotation})})})}return o.type==="radar"?u.jsx("div",{className:"control",style:G,children:u.jsx(m_,{control:o,pings:p,width:i.width,height:i.height})}):o.type==="text"?u.jsx("div",{className:"control",style:G,children:u.jsx(d_,{message:b??o.name,width:i.width,height:i.height,rotation:o.rotation})}):o.type==="joystick"?u.jsx("div",{className:"control",style:G,children:u.jsx(wb,{control:o,disabled:c,onJoystick:_,width:i.width,height:i.height})}):o.type==="dpad"?u.jsx("div",{className:"control",style:G,children:u.jsx(jb,{control:o,disabled:c,onDpad:v})}):u.jsx("div",{className:"control",style:G,children:u.jsx(xb,{control:o,disabled:c,latestValue:a,onSlider:w,width:i.width,height:i.height})})}function sb(o,i,c){const a=o.trim()||" ",p=a.split(/\s+/).filter(Boolean).reduce((v,S)=>Math.max(v,S.length),1),b=Math.max(1,Math.ceil(a.length/Math.max(1,Math.floor(p*1.9)))),y=Math.max(1,i-na*3),w=Math.max(1,c-na*3),x=y/(p*.58),_=w/(b*1.16);return Math.max(7,Math.min(24,x,_))}function d_({message:o,width:i,height:c,rotation:a=0}){const f=o.trim()||"...",p=a===90||a===270,b=sb(f,p?c:i,p?i:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:b},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function m_({control:o,pings:i,width:c,height:a,preview:f=!1}){const[,p]=z.useState(0),b=Math.max(120,o.radarFadeMs??1200),y=o.radarMinAngle??0,w=o.radarMaxAngle??180,x=Yn(y),_=Yn(w),v=Math.abs(w-y)>=360||x===_&&y!==w,S=Math.max(1,o.radarMaxDistance??200),G=Date.now(),Y=i[i.length-1],K=o.rotation,D=Yn(x+K),B=Yn(_+K),H=gb(x,_),re=((Y==null?void 0:Y.angle)??H)+K,se=f?[{id:"preview",angle:H,distance:S*.62,createdAt:G}]:i.filter(ue=>G-ue.createdAt<=b),oe=!v,pe=Math.max(8,Math.min(12,Math.min(c,a)*.16)),W=Math.max(7,pe*.85),Z=0,Se=0,ye=1,xe=mb(v,D,B,K,S),ie=v?{x:-1.12,y:-1.12,width:2.24,height:2.24}:pb(D,B,xe.map(ue=>ue.point)),Ie=v?"":ob(Z,Se,ye,D,B),Te=Rh(y),Ye=Rh(w),U=oe?_b(D,B,ie,c,a,Te,Ye,pe):null,ee=xe.map(ue=>{const we=p_(ue.point,ie,c,a);return{key:ue.key,value:ue.value,x:we.x,y:we.y}});z.useEffect(()=>{if(f||i.length===0)return;const ue=window.setInterval(()=>p(we=>we+1),120);return()=>window.clearInterval(ue)},[b,i.length,f]);const ce=vt(Z,Se,ye,re);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${ie.x} ${ie.y} ${ie.width} ${ie.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[v?u.jsx("circle",{className:"radar-sector-fill",cx:Z,cy:Se,r:ye}):u.jsx("path",{className:"radar-sector-fill",d:Ie}),[.25,.5,.75,1].map(ue=>v?u.jsx("circle",{className:"radar-ring",cx:Z,cy:Se,r:ye*ue},ue):u.jsx("path",{className:"radar-ring",d:cb(Z,Se,ye*ue,D,B)},ue)),!v&&u.jsx(Sh,{cx:Z,cy:Se,radius:ye,angle:D}),!v&&u.jsx(Sh,{cx:Z,cy:Se,radius:ye,angle:B}),u.jsx("line",{className:"radar-sweep",x1:Z,y1:Se,x2:ce.x,y2:ce.y}),se.map(ue=>{const we=f?0:G-ue.createdAt,N=Math.max(0,1-we/b),I=Math.max(0,Math.min(S,ue.distance)),te=vt(Z,Se,ye*(I/S),ue.angle+K);return u.jsx("circle",{className:"radar-ping",cx:te.x,cy:te.y,r:Math.max(.025,Math.min(ie.width,ie.height)*.025),opacity:N},ue.id)})]}),oe&&U&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:U.min.x,top:U.min.y,fontSize:pe},children:Te}),u.jsx("span",{className:"radar-angle-label",style:{left:U.max.x,top:U.max.y,fontSize:pe},children:Ye})]}),ee.map(ue=>u.jsx("span",{className:"radar-range-label",style:{left:ue.x,top:ue.y,fontSize:W},children:ue.value},ue.key))]})}function Sh({cx:o,cy:i,radius:c,angle:a}){const f=vt(o,i,c,a);return u.jsx("line",{className:"radar-boundary",x1:o,y1:i,x2:f.x,y2:f.y})}function vt(o,i,c,a){const f=(Yn(a)-90)*Math.PI/180;return{x:o+Math.cos(f)*c,y:i+Math.sin(f)*c}}function ob(o,i,c,a,f){const p=vt(o,i,c,a),b=vt(o,i,c,f),y=Jo(a,f)>180?1:0;return`M ${o} ${i} L ${p.x} ${p.y} A ${c} ${c} 0 ${y} 1 ${b.x} ${b.y} Z`}function cb(o,i,c,a,f){const p=vt(o,i,c,a),b=vt(o,i,c,f),y=Jo(a,f)>180?1:0;return`M ${p.x} ${p.y} A ${c} ${c} 0 ${y} 1 ${b.x} ${b.y}`}function Jo(o,i){const c=Yn(o),a=Yn(i),f=a>=c?a-c:360-c+a;return f===0?360:f}const zo=[.25,.5,.75,1],ub=.1,fb=.85,db=55;function mb(o,i,c,a,f){const p=(w,x,_)=>({key:`${w}-${x}`,value:Math.round(f*x),point:vt(0,0,x,_)});if(o){const w=Yn(180+a);return zo.map(x=>p("full",x,w))}const b=360-Jo(i,c);if(b<db){const w=Yn(c+b/2);return zo.map(x=>p("mid",x,w))}const y=(w,x,_)=>{const v=Math.asin(Math.min(fb,ub/x))*180/Math.PI;return Yn(w+_*v)};return[...zo.map(w=>p("min",w,y(i,w,-1))),...zo.map(w=>p("max",w,y(c,w,1)))]}function pb(o,i,c=[]){const a=[{x:0,y:0},vt(0,0,1,o),vt(0,0,1,i),...c];for(const v of[0,90,180,270])hb(v,o,i)&&a.push(vt(0,0,1,v));const f=Math.min(...a.map(v=>v.x)),p=Math.max(...a.map(v=>v.x)),b=Math.min(...a.map(v=>v.y)),y=Math.max(...a.map(v=>v.y)),w=Math.max(.1,p-f),x=Math.max(.1,y-b),_=Math.max(w,x)*.24;return{x:f-_,y:b-_,width:w+_*2,height:x+_*2}}function hb(o,i,c){const a=Yn(i),f=Yn(o),p=Jo(i,c),b=Yn(f-a);return b>=0&&b<=p}function _b(o,i,c,a,f,p,b,y){const x=vt(0,0,1.1,o),_=vt(0,0,1.1,i);return{min:kh(x,c,a,f,p,y),max:kh(_,c,a,f,b,y)}}function p_(o,i,c,a){return{x:(o.x-i.x)/i.width*c,y:(o.y-i.y)/i.height*a}}function kh(o,i,c,a,f,p){const b=p_(o,i,c,a),y=Math.max(10,f.length*p*.62),w=p,x=7;return{x:Nh(b.x,y/2+x,Math.max(y/2+x,c-y/2-x)),y:Nh(b.y,w/2+x,Math.max(w/2+x,a-w/2-x))}}function Nh(o,i,c){return Math.max(i,Math.min(c,o))}function Rh(o){return`${Math.round(o)}`}function Yn(o){return Number.isFinite(o)?(o%360+360)%360:0}function gb(o,i){const c=Yn(o),a=Yn(i),f=a>=c?a-c:360-c+a;return Yn(c+f/2)}function bb(o,i){if(!i)return o;const c=o.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((p,b)=>u.jsx("span",{children:p},`${p}-${b}`))},`${a}-${f}`))})}function yb(o){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return o===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:o===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:o===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function vb({name:o,vertical:i,rotation:c,color:a,fontSize:f,endFontSize:p,centerInset:b,lowLabel:y,highLabel:w,showEnds:x}){const _=x?yb(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,...b,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:bb(o,i)}),_&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{..._.low,fontWeight:800,fontSize:p},children:y}),u.jsx("div",{style:{..._.high,fontWeight:800,fontSize:p},children:w})]})]})}function h_({name:o,rotation:i,width:c,height:a,value:f,showEnds:p=!1,fillColor:b="var(--red)",lowLabel:y="0",highLabel:w="100"}){const x=i===90||i===270,{fontSize:_,endFontSize:v,centerInset:S}=ib(o,c,a,x,p);let G,Y;i===0?(G={left:0,top:0,bottom:0,width:`${f}%`},Y={left:0,top:0}):i===180?(G={right:0,top:0,bottom:0,width:`${f}%`},Y={right:0,top:0}):i===90?(G={left:0,right:0,bottom:0,height:`${f}%`},Y={left:0,bottom:0}):(G={left:0,right:0,top:0,height:`${f}%`},Y={left:0,top:0});const K=D=>u.jsx(vb,{name:o,vertical:x,rotation:i,color:D,fontSize:_,endFontSize:v,centerInset:S,lowLabel:y,highLabel:w,showEnds:p});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:K("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:b,overflow:"hidden",...G},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...Y},children:K("var(--white)")})})]})}function xb({control:o,disabled:i,latestValue:c,onSlider:a,width:f,height:p}){const b=z.useRef(null),y=o.sliderMin??0,w=o.sliderMax??100,[x,_]=z.useState(()=>c===void 0?Mh(o.sliderRecenter??"none"):Th(c,y,w)),v=z.useRef(null),S=o.rotation;z.useEffect(()=>{c!==void 0&&(_(Th(c,y,w)),v.current=c)},[c,y,w]);function G(B){const H=b.current;if(!H)return 0;const re=H.getBoundingClientRect();let se;return S===0?se=(B.clientX-re.left)/re.width:S===180?se=1-(B.clientX-re.left)/re.width:S===90?se=1-(B.clientY-re.top)/re.height:se=(B.clientY-re.top)/re.height,Math.max(0,Math.min(1,se))}function Y(B){i||K(G(B))}function K(B){const H=Math.round(B*100),re=Math.round(y+(w-y)*B);_(H),re!==v.current&&(v.current=re,a(o.name,re))}function D(){const B=o.sliderRecenter??"none";i||B==="none"||K(Mh(B)/100)}return u.jsx("div",{ref:b,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:B=>{i||(B.preventDefault(),B.currentTarget.setPointerCapture(B.pointerId),Y(B))},onPointerMove:B=>{B.buttons!==0&&Y(B)},onPointerUp:D,onPointerCancel:D,onLostPointerCapture:D,children:u.jsx(h_,{name:o.name,rotation:S,width:f,height:p,value:x,showEnds:!0,lowLabel:String(y),highLabel:String(w)})})}function Mh(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function Th(o,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((o-i)/(c-i)*100)))}function jh(o,i,c){return Math.round(i+(c-i)*(o+1)/2)}function Dh(o,i){return o==="bottom"?i?1:-1:o==="top"?i?-1:1:0}function Ah(o){return{nx:Dh(o.joystickXRecenter,!1),ny:Dh(o.joystickYRecenter,!0)}}function __(o,i){const c=Math.min(o,i),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function g_({control:o,width:i,height:c,pos:a,dragging:f=!1}){const p=o.rotation,{knobRadius:b,reach:y}=__(i,c),w=Math.max(7,Math.min(14,b*.62)),x=Math.max(7,Math.min(12,Math.min(i,c)*.1)),_=[{key:"xmax",value:o.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:o.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:o.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:o.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:y*2,height:y*2,transform:"translate(-50%, -50%)"}}),_.map(v=>{const S=ii(v.lx,v.ly,p);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:x,transform:`translate(-50%, -50%) translate(${S.x*y}px, ${S.y*y}px) rotate(${p}deg)`},children:v.value},v.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:b*2,height:b*2,fontSize:w,transform:`translate(calc(-50% + ${a.nx*y}px), calc(-50% + ${a.ny*y}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:o.rotation?`rotate(${o.rotation}deg)`:void 0,whiteSpace:o.rotation===90||o.rotation===270?"nowrap":void 0},children:o.name})})]})}function wb({control:o,disabled:i,onJoystick:c,width:a,height:f}){const p=o.rotation,b=z.useRef(null),[y,w]=z.useState(()=>{const H=Ah(o),re=ii(H.nx,H.ny,p);return{nx:re.x,ny:re.y}}),x=z.useRef(!1),_=z.useRef(null),v=o.joystickXMin??-100,S=o.joystickXMax??100,G=o.joystickYMin??-100,Y=o.joystickYMax??100;function K(H,re){const se=ii(H,re,$o(p)),oe=jh(se.x,v,S),pe=jh(-se.y,G,Y);(!_.current||_.current.x!==oe||_.current.y!==pe)&&(_.current={x:oe,y:pe},c(o.name,oe,pe))}function D(H){const re=b.current;if(!re)return;const se=re.getBoundingClientRect(),{reach:oe}=__(se.width,se.height);let pe=(H.clientX-(se.left+se.width/2))/oe,W=(H.clientY-(se.top+se.height/2))/oe;const Z=Math.hypot(pe,W);Z>1&&(pe/=Z,W/=Z),w({nx:pe,ny:W}),K(pe,W)}function B(){const H=o.joystickXRecenter??"middle",re=o.joystickYRecenter??"middle";if(H==="none"&&re==="none")return;const se=ii(y.nx,y.ny,$o(p)),oe=Ah(o),pe={x:H==="none"?se.x:oe.nx,y:re==="none"?se.y:oe.ny},W=ii(pe.x,pe.y,p),Z={nx:W.x,ny:W.y};x.current=!1,w(Z),K(Z.nx,Z.ny)}return u.jsx("div",{ref:b,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),x.current=!0,D(H))},onPointerMove:H=>{i||!x.current||H.buttons===0||D(H)},onPointerUp:B,onPointerCancel:B,onLostPointerCapture:B,children:u.jsx(g_,{control:o,width:a,height:f,pos:y,dragging:x.current})})}const Eb=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],Sb="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",kb=.1,Nb={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},Rb={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},Mb=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function zf(o,i){return Math.hypot(o,i)<kb?null:Math.abs(o)>=Math.abs(i)?o>0?"right":"left":i>0?"down":"up"}function Tb(o,i){const[c,a]=Rb[o],f=ii(c,a,$o(i));return zf(f.x,f.y)??o}function b_({control:o,active:i=null}){const c=o.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[Eb.map(a=>u.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:Sb},a.direction)),Mb.map(a=>u.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:Nb[Tb(a.pos,c)]},a.pos))]})})}function jb({control:o,disabled:i,onDpad:c}){const a=z.useRef(null),f=z.useRef(null),p=z.useRef(!1),[b,y]=z.useState(null);function w(S){const G=a.current;if(!G)return{screen:null,logical:null};const Y=G.getBoundingClientRect(),K=Math.min(Y.width,Y.height)/2,D=(S.clientX-(Y.left+Y.width/2))/K,B=(S.clientY-(Y.top+Y.height/2))/K,H=zf(D,B),re=ii(D,B,$o(o.rotation)),se=zf(re.x,re.y);return{screen:H,logical:se}}function x(S){const G=a.current;if(!G)return!1;const Y=G.getBoundingClientRect(),K=(S.clientX-Y.left)/Y.width,D=(S.clientY-Y.top)/Y.height;return K>=0&&K<=1&&D>=0&&D<=1}function _(S){S.logical!==f.current&&(f.current&&c(o.name,f.current,!1),f.current=S.logical,S.logical&&c(o.name,S.logical,!0)),y(S.screen)}function v(){p.current=!1,_({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:S=>{i||!x(S)||(S.preventDefault(),S.currentTarget.setPointerCapture(S.pointerId),p.current=!0,_(w(S)))},onPointerMove:S=>{i||!p.current||S.buttons===0||_(w(S))},onPointerUp:v,onPointerCancel:v,onLostPointerCapture:v,children:u.jsx(b_,{control:o,active:b})})}const Db={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},Ab=["button","slider","toggle","radar","text","joystick","dpad"];function Ob({unplaced:o,onAdd:i,onClose:c}){const a=z.useMemo(()=>Ab.filter(y=>o.some(w=>w.type===y)),[o]),[f,p]=z.useState(a[0]??"button"),b=o.filter(y=>y.type===f);return z.useEffect(()=>{a.length>0&&!a.includes(f)&&p(a[0])},[a,f]),u.jsxs(En,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(y=>u.jsx("button",{type:"button",className:f===y?"active":"",onClick:()=>p(y),children:Db[y]},y))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):b.map(y=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(y.name),children:[u.jsx("span",{children:y.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(Zn,{name:"plus",size:22})})]},y.name))})]})}function y_(o){const[i,c]=z.useState({w:0,h:0}),a=z.useRef(null),f=z.useRef(null);return z.useLayoutEffect(()=>{var w;const p=o.current;if(a.current===p)return;if((w=f.current)==null||w.disconnect(),f.current=null,a.current=p,!p){c(x=>x.w===0&&x.h===0?x:{w:0,h:0});return}const b=()=>{const x={w:p.clientWidth,h:p.clientHeight};c(_=>_.w===x.w&&_.h===x.h?_:x)};b();const y=new ResizeObserver(b);y.observe(p),f.current=y}),z.useEffect(()=>()=>{var p;(p=f.current)==null||p.disconnect(),f.current=null,a.current=null},[]),i}function Ji(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const Cb=4,Lb=5;function Bb(o){return o==="joystick"||o==="dpad"?{spanX:6,spanY:6}:{spanX:Cb,spanY:Lb}}function Oh(o){if(!Ji(o))return null;const i=o.centerX2/2,c=o.centerY2/2;return{x0:i-o.spanX/2,x1:i+o.spanX/2,y0:c-o.spanY/2,y1:c+o.spanY/2}}function zb(o,i,c=.02){return o.x0<i.x1-c&&i.x0<o.x1-c&&o.y0<i.y1-c&&i.y0<o.y1-c}function Ch(o,i){const c=os(o,i);if(!c||o.spanX===null||o.spanY===null)return o;const a=Go(c.cx,c.cy,o.spanX,o.spanY,i);return{...o,centerX2:a.centerX2,centerY2:a.centerY2}}function Lh(o,i){return Math.max(1,Math.min(i.cols-1,o))}function Bh(o,i){return Math.max(1,Math.min(i.rows-1,o))}function Ub(){const o=le(O=>O.layout),i=le(O=>O.active),c=le(O=>O.saveLayout),a=le(O=>O.setEditMode),f=le(O=>O.askConfirm),p=!!(i!=null&&i.canEdit),[b,y]=z.useState(()=>o.map(O=>({...O}))),[w,x]=z.useState(null),[_,v]=z.useState(!1),[S,G]=z.useState(null),[Y,K]=z.useState(null),[D,B]=z.useState(!1),H=z.useRef(null),re=y_(H),se=re.w>0&&re.h>0,oe=a_(re.w,re.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),pe=z.useMemo(()=>se?j0(oe):[],[oe,se]),W=b.filter(Ji),Z=b.filter(O=>!Ji(O)),Se=z.useMemo(()=>{const O=new Set;for(let Q=0;Q<W.length;Q+=1)for(let J=Q+1;J<W.length;J+=1){const F=Oh(W[Q]),Le=Oh(W[J]);F&&Le&&zb(F,Le)&&(O.add(W[Q].name),O.add(W[J].name))}return O},[W]),ye=Se.size>0,xe=b.find(O=>O.name===w)??null,ie=z.useMemo(()=>zh(b)!==zh(o),[b,o]),Ie=z.useMemo(()=>{if(!S||!Y)return null;const O=b.find(F=>F.name===S);if(!O||O.spanX===null||O.spanY===null)return null;const Q=Go(Y.cx,Y.cy,O.spanX,O.spanY,oe),J=os({...O,centerX2:Q.centerX2,centerY2:Q.centerY2},oe);return J?{name:O.name,rect:J}:null},[b,S,Y,oe]);function Te(O,Q){y(J=>J.map(F=>F.name===O?Q(F):F))}function Ye(O,Q){O.stopPropagation(),x(Q.name);const J=os(Q,oe);J&&(G(Q.name),K({cx:J.cx,cy:J.cy}),O.currentTarget.setPointerCapture(O.pointerId))}function U(O){if(!S)return;const Q=H.current;if(!Q)return;const J=Q.getBoundingClientRect(),F=Q.clientWidth/J.width,Le=Q.clientHeight/J.height;K({cx:Math.max(0,Math.min(Q.clientWidth,(O.clientX-J.left)*F)),cy:Math.max(0,Math.min(Q.clientHeight,(O.clientY-J.top)*Le))})}function ee(){if(S&&Y){const O=b.find(Q=>Q.name===S);if(O&&O.spanX!==null&&O.spanY!==null){const Q=Go(Y.cx,Y.cy,O.spanX,O.spanY,oe);Te(S,J=>({...J,centerX2:Q.centerX2,centerY2:Q.centerY2}))}}G(null),K(null)}function ce(O){Te(O,Q=>Q.spanX===null||Q.spanY===null?{...Q,rotation:(Q.rotation+270)%360}:Ch({...Q,rotation:(Q.rotation+270)%360,spanX:Lh(Q.spanY,oe),spanY:Bh(Q.spanX,oe)},oe))}function ue(O,Q,J){Te(O,F=>{if(F.spanX===null||F.spanY===null)return F;const Le=Q==="x"?Lh(F.spanX+J,oe):F.spanX,je=Q==="y"?Bh(F.spanY+J,oe):F.spanY;return Ch({...F,spanX:Le,spanY:je},oe)})}function we(O){Te(O,Q=>({...Q,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),x(null)}function N(O){v(!1);const Q=b.find(je=>je.name===O);if(!Q)return;const{spanX:J,spanY:F}=Bb(Q.type),Le=Go(oe.areaW/2,oe.areaH/2,J,F,oe);Te(O,()=>({...Q,spanX:J,spanY:F,rotation:0,centerX2:Le.centerX2,centerY2:Le.centerY2})),x(O)}async function I(){ye||(B(!0),await c(b),B(!1))}function te(){if(!ie){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"edit-band edit-toolbar-band",children:xe&&Ji(xe)?u.jsxs("div",{className:"edit-toolbar",onPointerDown:O=>O.stopPropagation(),children:[u.jsx(rs,{label:"⟲",title:"Roter",onClick:()=>ce(xe.name)}),u.jsx(rs,{label:"W−",title:"Gør smallere",onClick:()=>ue(xe.name,"x",-1),disabled:xe.spanX===null||xe.spanX<=1}),u.jsx(rs,{label:"W+",title:"Gør bredere",onClick:()=>ue(xe.name,"x",1),disabled:xe.spanX===null||xe.spanX>=oe.cols-1}),u.jsx(rs,{label:"H−",title:"Gør lavere",onClick:()=>ue(xe.name,"y",-1),disabled:xe.spanY===null||xe.spanY<=1}),u.jsx(rs,{label:"H+",title:"Gør højere",onClick:()=>ue(xe.name,"y",1),disabled:xe.spanY===null||xe.spanY>=oe.rows-1}),u.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>we(xe.name),"aria-label":"Slet",children:u.jsx(Zn,{name:"delete",size:24})})]}):u.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:H,style:{touchAction:"none"},onPointerMove:U,onPointerUp:ee,onPointerDown:()=>x(null),children:se&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:oe.areaW,height:oe.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:pe.map((O,Q)=>u.jsx("circle",{cx:O.x,cy:O.y,r:2.5,fill:"rgba(198,80,78,0.45)"},Q))}),Ie&&u.jsx("div",{className:"snap-preview",style:{left:Ie.rect.cx,top:Ie.rect.cy,width:Ie.rect.width,height:Ie.rect.height}}),W.map(O=>{const Q=S===O.name&&Y,J=os(O,oe);if(!J)return null;const F=Q?Y.cx:J.cx,Le=Q?Y.cy:J.cy,je={left:F,top:Le,width:J.width,height:J.height,outline:w===O.name?"3px solid var(--text)":"none",outlineOffset:2};return u.jsx("div",{className:`control ${Se.has(O.name)?"colliding":""}`,style:je,onPointerDown:Pn=>Ye(Pn,O),children:O.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(Xo,{name:O.name,width:J.width,height:J.height,rotation:O.rotation})}):O.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(Xo,{name:O.name,width:J.width,height:J.height,rotation:O.rotation})}):O.type==="radar"?u.jsx(m_,{control:O,pings:[],width:J.width,height:J.height,preview:!0}):O.type==="text"?u.jsx(d_,{message:O.name,width:J.width,height:J.height,rotation:O.rotation}):O.type==="joystick"?u.jsx(g_,{control:O,width:J.width,height:J.height,pos:{nx:0,ny:0}}):O.type==="dpad"?u.jsx(b_,{control:O}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(h_,{name:O.name,rotation:O.rotation,width:J.width,height:J.height,value:50,showEnds:!0,lowLabel:String(O.sliderMin??0),highLabel:String(O.sliderMax??100),fillColor:Se.has(O.name)?"var(--disabled)":"var(--red)"})})},O.name)}),p&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:O=>O.stopPropagation(),onClick:()=>v(!0),"aria-label":"Tilføj kontrol",children:u.jsx(Zn,{name:"plus",size:24})}),D&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:te,disabled:D,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:I,disabled:ye||D,children:D?"Gemmer...":"Gem"})]}),_&&u.jsx(Ob,{unplaced:Z,onAdd:N,onClose:()=>v(!1)})]})}function zh(o){return JSON.stringify(o.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function rs({label:o,title:i,disabled:c,onClick:a}){return u.jsx("button",{type:"button","aria-label":i,title:i,disabled:c,onClick:a,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function Hb(){const o=le(H=>H.layout),i=le(H=>H.editMode),c=le(H=>H.active),a=le(H=>H.sliderValues),f=le(H=>H.toggleValues),p=le(H=>H.radarPings),b=le(H=>H.textValues),y=le(H=>H.toggleSideMenu),w=le(H=>H.sendButton),x=le(H=>H.sendSlider),_=le(H=>H.sendToggle),v=le(H=>H.sendJoystick),S=le(H=>H.sendDpad),G=z.useRef(null),Y=y_(G),K=a_(Y.w,Y.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),D=Y.w>0&&Y.h>0,B=o.filter(Ji);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(Qf,{title:"Kontrol Panel",onMenu:()=>y()}),i?u.jsx(Ub,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:G,children:D?B.map(H=>{const re=os(H,K);return re?u.jsx(ab,{control:H,rect:re,disabled:!1,latestValue:H.type==="slider"?a[H.name]:void 0,toggleValue:H.type==="toggle"?f[H.name]:void 0,radarPings:H.type==="radar"?p[H.name]:void 0,textValue:H.type==="text"?b[H.name]:void 0,onButton:w,onSlider:x,onToggle:_,onJoystick:v,onDpad:S},H.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const Gb="",Uh="",Hh="",ri="";function ls(o){return new Promise(i=>setTimeout(i,o))}class Vb{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Hh),await ls(80),await this.transport.write(Hh)}async friendlyRepl(){await this.transport.write(Uh)}async softReset(){await this.transport.write(ri)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.disconnect()
except Exception:
    pass
`).catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await ls(180)}),await ls(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await ls(80),await this.transport.write(`\r
`),await ls(40),!(await this.collectUntil(async()=>{await this.transport.write(Gb)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ri)},f=>f.includes(`${ri}${ri}`)||f.includes(`${ri}>`),c);return await this.friendlyRepl().catch(()=>{}),Ib(a)}collectUntil(i,c,a){return new Promise((f,p)=>{let b="",y=null;const w=setTimeout(()=>{y==null||y(),p(new Error("Timeout ved USB REPL kommando."))},a);y=this.transport.addDataListener(x=>{b+=x,c(b)&&(clearTimeout(w),y==null||y(),f(b))}),i().catch(x=>{clearTimeout(w),y==null||y(),p(x instanceof Error?x:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Uh)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function Ib(o){const i=o.indexOf("OK"),c=o.indexOf(ri,i>=0?i:0),a=c>=0?o.indexOf(ri,c+1):-1;if(i<0||c<0)return{output:o.trim(),error:"",raw:o};const f=o.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),p=a>=0?o.slice(c+1,a).trim():"";return{output:f,error:p,raw:o}}const Yb=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Pb=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Nl=Pb.flatMap(({board:o,firmwareName:i})=>Yb.map(({version:c,date:a,stamp:f,tag:p})=>{const b=`${i}-${f}-${p}.uf2`;return{board:o,version:c,date:a,fileName:b,url:`https://micropython.org/resources/firmware/${b}`}})),Tf=512,jf=`import builtins as _pkp_builtins
`;function Lr(o){return JSON.stringify(o)}function qb(o){return`bytes.fromhex(${JSON.stringify([...o].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function $b(o,i){return`${o==="/"?"":o.replace(/\/$/,"")}/${i}`}class Xb{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${Lr(i)}
for name in os.listdir(base):
    p = (${Lr(i)}.rstrip('/') + '/' + name) if ${Lr(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[p,b,y]=f.split("	"),w=b==="dir"||b==="file"?b:"unknown",x=parseInt(y??"",10);return{name:p,path:$b(i,p),type:w,...Number.isFinite(x)&&x>=0?{size:x}:{}}})}async readText(i){const c=`
import sys
${jf}with _pkp_builtins.open(${Lr(i)}, 'rb') as f:
    while True:
        b = f.read(${Tf})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const f=a.output.replace(/\s+/g,"");return new TextDecoder().decode(Fb(f))}async writeText(i,c,a){const f=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${jf}_pkp_builtins.open(${Lr(i)}, 'wb').close()`),f.length===0){a==null||a(100,"Gemt på Pico");return}for(let p=0;p<f.length;p+=Tf){const b=f.slice(p,p+Tf),y=`
${jf}with _pkp_builtins.open(${Lr(i)}, 'ab') as f:
    f.write(${qb(b)})
`,w=await this.repl.exec(y,1e4);if(w.error)throw new Error(w.error);const x=Math.min(p+b.length,f.length);a==null||a(10+Math.round(x/f.length*85),`Gemmer ${x}/${f.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(i,c,a,f={}){const p=`${i}.tmp`;if(await this.writeText(p,c,(w,x)=>a==null?void 0:a(Math.min(70,w*.7),x)),a==null||a(78,"Verificerer fil..."),await this.readText(p)!==c)throw await this.delete(p).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);a==null||a(88,"Udskifter fil...");let y=!!f.createBackup;if(y){const w=await this.readText(i).catch(()=>null);y=w!==null&&w!==c}if(y){const w=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,w).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(p,i),a==null||a(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${Lr(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),a=new Set(c.map(v=>v.path.toLowerCase())),f=i.replace(/\\/g,"/"),p=f.lastIndexOf("/"),b=p>=0?f.slice(0,p+1):"/",y=p>=0?f.slice(p+1):f.replace(/^\/+/,""),w=y.lastIndexOf("."),x=w>0?y.slice(0,w):y,_=w>0?y.slice(w):"";for(let v=1;v<1e3;v+=1){const S=`${b}${x}_backup${v}${_}`;if(!a.has(S.toLowerCase()))return S}return`${b}${x}_backup${Date.now()}${_}`}async rename(i,c){const a=await this.repl.exec(`
import os
os.rename(${Lr(i)}, ${Lr(c)})
`);if(a.error)throw new Error(a.error)}}function Fb(o){const i=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(o.slice(c*2,c*2+2),16);return i}const Kb=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct\r
import os\r
import ubinascii\r
import machine\r
\r
__version__ = '0.7.0'\r
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
ALLOWED_COMMAND_TYPES  = ["button", "slider", "toggle", "radar", "text", "joystick", "dpad"]\r
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
      - 'who_are_you'                    -> 'unowned' | 'owned,<ownerID>,<iconID>,<canConnect>,<canEdit>,<canEditCode>,<ownerName>'\r
      - 'ACK:ownership'                  -> 'READY:permission'\r
      - 'request_permission,<id>,<name>' -> 'perm,<canConnect>,<canEdit>,<canEditCode>'\r
                                            (denies + disconnects if private)\r
      - 'ACK:permission'                 -> (handshake complete)\r
      - 'create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>,<canEditCode>' -> 'ACK:create'\r
\r
    Layout streaming:\r
      - 'request'  -> device streams '#VERSION,1', control lines, '__END__'\r
      - 'update'   -> 'ACK:update', then app streams 'update,...' lines + '__END__';\r
                      device saves and replies 'ACK: ...' + 'LAYOUT_SAVED'\r
\r
    Control commands (fire-and-forget, routed to on_button/on_slider/on_toggle/\r
    on_joystick/on_dpad; on_write is still available as a raw callback):\r
      - 'button,<NAME>:down|up' / 'slider,<NAME>:<VALUE>' / 'toggle,<NAME>:<0|1>'\r
      - 'joystick,<NAME>:<X>,<Y>'   -> on_joystick(name, x, y)\r
      - 'dpad,<NAME>:<DIR>,down|up' -> on_dpad(name, dir, is_down); DIR is\r
                                       up|down|left|right\r
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
        self.can_others_edit_code = 0\r
        self.grid_cols = 11\r
        self.grid_rows = 31\r
\r
        # ---- Session flags\r
        self._session_can_edit = False\r
        self._session_can_edit_code = False\r
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
            elif ctrl_type == "joystick":\r
                # spec: ('joystick', NAME, xmin, xmax, ymin, ymax, xrecenter, yrecenter)\r
                ctrl["xmin"] = -100\r
                ctrl["xmax"] = 100\r
                ctrl["ymin"] = -100\r
                ctrl["ymax"] = 100\r
                ctrl["xrecenter"] = "middle"\r
                ctrl["yrecenter"] = "middle"\r
                if len(spec) >= 6:\r
                    try:\r
                        ctrl["xmin"] = int(spec[2])\r
                        ctrl["xmax"] = int(spec[3])\r
                        ctrl["ymin"] = int(spec[4])\r
                        ctrl["ymax"] = int(spec[5])\r
                    except:\r
                        ctrl["xmin"] = -100\r
                        ctrl["xmax"] = 100\r
                        ctrl["ymin"] = -100\r
                        ctrl["ymax"] = 100\r
                if ctrl["xmax"] == ctrl["xmin"]:\r
                    ctrl["xmax"] = ctrl["xmin"] + 1\r
                if ctrl["ymax"] == ctrl["ymin"]:\r
                    ctrl["ymax"] = ctrl["ymin"] + 1\r
                if len(spec) >= 7 and spec[6] in SLIDER_RECENTER_MODES:\r
                    ctrl["xrecenter"] = spec[6]\r
                if len(spec) >= 8 and spec[7] in SLIDER_RECENTER_MODES:\r
                    ctrl["yrecenter"] = spec[7]\r
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
                elif key == "canOthersEditCode":\r
                    saw_can_others_edit_code = True\r
                    try:\r
                        self.can_others_edit_code = 1 if int(val) == 1 else 0\r
                    except:\r
                        self.can_others_edit_code = 0\r
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
                    elif ctrl["type"] == "joystick":\r
                        f.write("{},{},{},{},{},{},{},{},{},{},{},{},{}\\n".format(\r
                            ctrl['type'], ctrl['name'], x, y, w, h, r,\r
                            ctrl.get("xmin", -100),\r
                            ctrl.get("xmax", 100),\r
                            ctrl.get("ymin", -100),\r
                            ctrl.get("ymax", 100),\r
                            ctrl.get("xrecenter", "middle"),\r
                            ctrl.get("yrecenter", "middle")))\r
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
                elif ctrl_type == "joystick":\r
                    override["xmin"] = -100\r
                    override["xmax"] = 100\r
                    override["ymin"] = -100\r
                    override["ymax"] = 100\r
                    override["xrecenter"] = "middle"\r
                    override["yrecenter"] = "middle"\r
                    if len(parts) >= 11:\r
                        try:\r
                            override["xmin"] = int(float(parts[7]))\r
                            override["xmax"] = int(float(parts[8]))\r
                            override["ymin"] = int(float(parts[9]))\r
                            override["ymax"] = int(float(parts[10]))\r
                        except:\r
                            override["xmin"] = -100\r
                            override["xmax"] = 100\r
                            override["ymin"] = -100\r
                            override["ymax"] = 100\r
                        if override["xmax"] == override["xmin"]:\r
                            override["xmax"] = override["xmin"] + 1\r
                        if override["ymax"] == override["ymin"]:\r
                            override["ymax"] = override["ymin"] + 1\r
                    if len(parts) >= 12 and parts[11] in SLIDER_RECENTER_MODES:\r
                        override["xrecenter"] = parts[11]\r
                    if len(parts) >= 13 and parts[12] in SLIDER_RECENTER_MODES:\r
                        override["yrecenter"] = parts[12]\r
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
        self._session_can_edit_code = False\r
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
        if msg == "HELLO":
            print("Received HELLO handshake")
            self._send_reliable_stream(["ACK:HELLO"])

        elif msg == "ping":
            self._send_reliable_stream(["ACK:ping"])

        elif msg == "ACK:ownership":
            print("Phone acknowledged ownership response")
            self._send_reliable_stream(["READY:permission"])
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
        elif msg == "who_are_you":
            if self.owner_id:
                self._send_reliable_stream(["owned,{},{},{},{},{},{},{}".format(
                    self.owner_id,
                    int(self.icon_id),
                    int(self.can_others_connect),
                    int(self.can_others_edit),
                    int(self.can_others_edit_code),
                    self._protocol_field(self.owner_name),
                    self._protocol_field(self.device_base_name),
                )])
            else:
                self._send_reliable_stream(["unowned,{}".format(self._protocol_field(self.device_base_name))])
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
                            print("gap_disconnect after deny failed:", e)\r
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
            can_edit_code = can_edit\r
\r
            grid_cols = self.grid_cols\r
            grid_rows = self.grid_rows\r
            if len(parts) >= 9:\r
                try:\r
                    can_edit_code = 1 if int(parts[6]) == 1 else 0\r
                except:\r
                    can_edit_code = 0\r
                try:\r
                    grid_cols = int(parts[7])\r
                except:\r
                    pass\r
                try:\r
                    grid_rows = int(parts[8])\r
                except:\r
                    pass\r
            elif len(parts) >= 8:\r
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
            can_edit_code = self.can_others_edit_code\r
            grid_col_index = 4\r
            grid_row_index = 5\r
            owner_name_index = 6\r
            if len(parts) >= 8:\r
                try:\r
                    can_edit_code = 1 if int(parts[4]) == 1 else 0\r
                except:\r
                    can_edit_code = self.can_others_edit_code\r
                grid_col_index = 5\r
                grid_row_index = 6\r
                owner_name_index = 7\r
            try:\r
                grid_cols = int(parts[grid_col_index])\r
            except:\r
                grid_cols = self.grid_cols\r
            try:\r
                grid_rows = int(parts[grid_row_index])\r
            except:\r
                grid_rows = self.grid_rows\r
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
            print("Auto callback binding failed for", function_name, e)\r
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
    def _dispatch_app_command(self, msg):\r
        """Route app controls to friendly callbacks, with on_write as a raw callback."""\r
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
                try:\r
                    name, state_s = payload.split(":", 1)\r
                except:\r
                    print("Bad button payload:", payload)\r
                    return\r
                is_down = state_s.strip().lower() in ("1", "true", "down", "pressed")\r
                if self._on_button_callback:\r
                    self._on_button_callback(name, is_down)\r
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
            elif command_type == "joystick":\r
                try:\r
                    name, value_s = payload.split(":", 1)\r
                    x_s, y_s = value_s.split(",", 1)\r
                except:\r
                    print("Bad joystick payload:", payload)\r
                    return\r
                if self._on_joystick_callback:\r
                    self._on_joystick_callback(\r
                        name, self._number_value(x_s), self._number_value(y_s))\r
                    return\r
\r
            elif command_type == "dpad":\r
                try:\r
                    name, value_s = payload.split(":", 1)\r
                    direction, state_s = value_s.split(",", 1)\r
                except:\r
                    print("Bad dpad payload:", payload)\r
                    return\r
                is_down = state_s.strip().lower() in ("1", "true", "down", "pressed")\r
                if self._on_dpad_callback:\r
                    self._on_dpad_callback(name, direction.strip().lower(), is_down)\r
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
            elif ctrl["type"] == "joystick":\r
                lines.append("{},{},{},{},{},{},{},{},{},{},{},{},{}".format(\r
                    ctrl['type'], ctrl['name'], x, y, w, h, r,\r
                    ctrl.get("xmin", -100),\r
                    ctrl.get("xmax", 100),\r
                    ctrl.get("ymin", -100),\r
                    ctrl.get("ymax", 100),\r
                    ctrl.get("xrecenter", "middle"),\r
                    ctrl.get("yrecenter", "middle")))\r
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
        path = self._clean_fs_path(msg.split(",", 1)[1])\r
        if not path:\r
            self._send_reliable_stream(["ERR: Bad path"])\r
            return\r
        if not self._can_write_file_path(path):\r
            self._send_reliable_stream(["ERR: File edit not permitted"])\r
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
        if path in ("/BLEPeripheral.py", "/main.py"):\r
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
    def send_text(self, name, message):
        """Send text to the app: text,<NAME>,<MESSAGE>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)\r
            clean_message = str(message).replace("\\r", " ").replace("\\n", " ").strip()\r
            self.send_with_retry(\r
                "text,{},{}\\n".format(clean_name, clean_message),\r
                max_attempts=1,\r
            )\r
        except Exception as e:
            print("send_text failed:", e)

    def disconnect(self):
        """Best-effort disconnect for classroom Stop/recovery flows."""
        if self.conn_handle is not None:
            try:
                self.ble.gap_disconnect(self.conn_handle)
            except Exception as e:
                print("gap_disconnect failed:", e)
                self._handle_disconnected("gap_disconnect_failed")
        else:
            self._handle_disconnected("disconnect_without_handle")

    def on_write(self, callback):
        self._on_write_callback = callback
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
`,Qb=`from machine import Pin, time_pulse_us\r
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
        return cms`,Zb=`import array, time\r
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
`,Wb=`from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
import PicoRobotics


# Robotbil styret med et D-pad (fire retningsknapper) og en fart-slider.
# D-pad'et sender en retning (up/down/left/right) og om den er trykket ned.
# Du kan holde flere retninger ved at trække fingeren mellem knapperne.
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'DpadBil'

# BluetoothControls bestemmer, hvilke kontroller appen viser.
# dpad:   ('dpad', NAVN)  -- fire pileknapper i ét felt.
# slider: ('slider', NAVN, min, max, recenter)
BluetoothControls = (
    ('dpad', 'KORSEL'),
    ('slider', 'FART', 0, 100, 'none'),
)


# LED'en bruges som en simpel "forbundet"-lampe.
led = Pin('LED', Pin.OUT)
led.off()

# board er motor-controlleren fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()

# FART skruer op og ned for farten. Start på fuld fart, så bilen virker med det
# samme; træk FART ned i appen for at køre langsommere.
speed_percent = 100

# held holder styr på, hvilke retninger der er trykket ned lige nu.
held = {'up': False, 'down': False, 'left': False, 'right': False}


def clamp(value, low, high):
    if value < low:
        return low
    if value > high:
        return high
    return value


def drive_motor(motor, value):
    """Kør en motor med et tal fra -100 (bak) til 100 (frem)."""
    value = int(clamp(value, -100, 100))
    if value > 0:
        board.motorOn(motor, 'f', value)
    elif value < 0:
        board.motorOn(motor, 'r', -value)
    else:
        board.motorOff(motor)


def apply_drive():
    """Læg de holdte retninger sammen til frem/tilbage og drej, og kør motorerne."""
    throttle = (100 if held['up'] else 0) - (100 if held['down'] else 0)
    turn = (100 if held['right'] else 0) - (100 if held['left'] else 0)
    left = clamp(throttle + turn, -100, 100) * speed_percent / 100
    right = clamp(throttle - turn, -100, 100) * speed_percent / 100
    drive_motor(1, left)   # motor 1 = venstre
    drive_motor(2, right)  # motor 2 = højre


def on_dpad(name, direction, is_down):
    """Appen sender en retning og om knappen er trykket (True) eller sluppet (False)."""
    if name == 'KORSEL' and direction in held:
        held[direction] = is_down
        apply_drive()


def on_slider(name, value):
    """FART-slideren sætter farten."""
    global speed_percent
    if name == 'FART':
        speed_percent = int(clamp(value, 0, 100))
        apply_drive()


def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()
    print('BLE client connected')


def on_disconnect():
    # Når appen afbryder, slukker LED'en, nulstiller retninger og stopper motorerne.
    led.off()
    for key in held:
        held[key] = False
    board.motorOff(1)
    board.motorOff(2)
    print('BLE client disconnected')


# callbacks=globals() gør, at BLEPeripheral kan finde on_dpad osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,Jb=`from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
import PicoRobotics


# Robotbil styret med en joystick og en fart-slider.
# Joysticken sender to tal: X (drej) og Y (frem/tilbage), begge -100..100.
# Vi blander dem til to motorer, ligesom en rigtig tankstyring.
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'JoystickBil'

# BluetoothControls bestemmer, hvilke kontroller appen viser.
# joystick: ('joystick', NAVN, xmin, xmax, ymin, ymax, x-recenter, y-recenter)
#   'middle' betyder, at aksen selv går tilbage til midten (0), når du slipper.
# slider:   ('slider', NAVN, min, max, recenter)
BluetoothControls = (
    ('joystick', 'KORSEL', -100, 100, -100, 100, 'middle', 'middle'),
    ('slider', 'FART', 0, 100, 'none'),
)


# LED'en bruges som en simpel "forbundet"-lampe.
led = Pin('LED', Pin.OUT)
led.off()

# board er motor-controlleren fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()

# FART skruer op og ned for den maksimale fart. Start på fuld fart, så bilen
# virker med det samme; træk FART ned i appen for at køre langsommere.
speed_percent = 100

# Vi husker joystickens seneste position, så en ny FART slår igennem med det samme.
last_x = 0
last_y = 0


def clamp(value, low, high):
    if value < low:
        return low
    if value > high:
        return high
    return value


def drive_motor(motor, value):
    """Kør en motor med et tal fra -100 (bak) til 100 (frem)."""
    value = int(clamp(value, -100, 100))
    if value > 0:
        board.motorOn(motor, 'f', value)
    elif value < 0:
        board.motorOn(motor, 'r', -value)
    else:
        board.motorOff(motor)


def apply_drive():
    """Bland joystick (drej + frem/tilbage) og fart til venstre/højre motor."""
    turn = last_x
    throttle = last_y
    left = clamp(throttle + turn, -100, 100) * speed_percent / 100
    right = clamp(throttle - turn, -100, 100) * speed_percent / 100
    drive_motor(1, left)   # motor 1 = venstre
    drive_motor(2, right)  # motor 2 = højre


def on_joystick(name, x, y):
    """Appen sender joystickens X (drej) og Y (frem/tilbage)."""
    global last_x, last_y
    if name == 'KORSEL':
        last_x = int(x)
        last_y = int(y)
        apply_drive()


def on_slider(name, value):
    """FART-slideren sætter den maksimale fart."""
    global speed_percent
    if name == 'FART':
        speed_percent = int(clamp(value, 0, 100))
        apply_drive()


def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()
    print('BLE client connected')


def on_disconnect():
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.
    global last_x, last_y
    led.off()
    last_x = 0
    last_y = 0
    board.motorOff(1)
    board.motorOff(2)
    print('BLE client disconnected')


# callbacks=globals() gør, at BLEPeripheral kan finde on_joystick osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,ey=`from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
from neopixel import Neopixel


# Her vælger du, hvor NeoPixel'en sidder.
# Prøv at ændre NEOPIXEL_BEN, hvis din ledning sidder et andet sted.
NEOPIXEL_BEN = 0

# Vi bruger 1 NeoPixel. Tallet kan ændres, hvis du har en ring eller strip.
ANTAL_NEOPIXELS = 1

# Farven er rød, grøn, blå. Her er farven blå.
FARVE = (0, 80, 255)

neopixels = Neopixel(ANTAL_NEOPIXELS, 0, NEOPIXEL_BEN, "GRB")
light_is_on = False

# LED'en viser, om appen er forbundet.
led = Pin('LED', Pin.OUT)
led.off()

# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'NeoPixel'

# Appen viser en knap og en slider.
BluetoothControls = (
    ('button', 'TAEND'),
    ('slider', 'LYS', 0, 100, 'none'),
)


def show_light():
    if light_is_on:
        neopixels.fill(FARVE)
    else:
        neopixels.clear()
    neopixels.show()


def on_button(name, is_down):
    """Appen kalder funktionen baade naar knappen trykkes ned og slippes."""
    global light_is_on

    if name == 'TAEND':
        # is_down er True, mens knappen holdes nede.
        # is_down er False, naar knappen slippes.
        light_is_on = is_down
        show_light()
        if light_is_on:
            print('Knappen er nede: lyset er taendt')
        else:
            print('Knappen er sluppet: lyset er slukket')


def on_slider(name, value):
    """Kører når slideren flyttes i appen."""

    if name == 'LYS':
        # Appen sender 0-100. NeoPixel-biblioteket bruger 1-255.
        lysstyrke = int(1 + (int(value) / 100) * 254)

        neopixels.brightness(lysstyrke)
        show_light()

        print('Lysstyrke:', value)


def on_connect():
    """Send den første besked når appen forbinder."""
    led.on()
    print('BLE client connected')


def on_disconnect():
    """Sluk lyset når appen mister forbindelsen."""
    global light_is_on

    light_is_on = False
    show_light()
    led.off()
    print('BLE client disconnected')


# callbacks=globals() betyder:
# "Brug funktionerne ovenfor, når appen sender noget."
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.
    time.sleep_ms(100)
`,ny=`# PicoFly.py\r
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
`,ty=`import machine\r
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
        self.initPCA()`,ry=`from machine import Pin\r
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
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'Radar'

BluetoothControls = (
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())
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
`,ly=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral


# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'SendTekst'

# Appen viser kun et tekstfelt.
BluetoothControls = (
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())
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
`,iy=`from machine import Pin, PWM, ADC\r
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
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'AlarmDemo'

BluetoothControls = (
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
def on_button(name, is_down):
    global code_change_mode, entered_code

    # De her knapper skal kun gøre noget, når de trykkes ned.
    # Når knappen slippes, stopper funktionen her.
    if not is_down:
        return

    if name == 'AABN DOR':
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
ble = BLEPeripheral(
    base_controls=BluetoothControls,
    device_base_name=DEVICE_NAME,
    callbacks=globals(),
)
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
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')
`,ay=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.\r
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'TankBil'

# BluetoothControls bestemmer, hvilke sliders appen viser.
BluetoothControls = (
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,Fi=[{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",content:ey},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:ly},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:ay},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",content:Jb},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",content:Wb},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:ry},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:iy},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:Kb},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:ty},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:ny},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:Qb},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:Zb}],sy=11914;function oy(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function cy(){return oy()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class uy{constructor(i={}){de(this,"port",null);de(this,"reader",null);de(this,"writer",null);de(this,"readLoopDone",null);de(this,"readLoopActive",!1);de(this,"disconnecting",!1);de(this,"buffer","");de(this,"events");de(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:sy}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var w,x;const i=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,f=this.writer,p=this.readLoopDone,b=a==null?void 0:a.closed.catch(()=>{}),y=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}p&&await p.catch(()=>{}),await b;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(f==null?void 0:f.close()),await y}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===p&&(this.readLoopDone=null),this.disconnecting=!1,i&&((x=(w=this.events).onDisconnect)==null||x.call(w))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var a,f,p;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((a=i.writable)==null?void 0:a.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(p=(f=this.events).onLog)==null||p.call(f,"success",`USB-forbindelse oprettet (${fy(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var f,p,b;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((f=i.readable)==null?void 0:f.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:y,done:w}=await a.read();if(w)break;y&&this.consumeText(c.decode(y,{stream:!0}))}}catch(y){this.readLoopActive&&((b=(p=this.events).onLog)==null||b.call(p,"error",y instanceof Error?y.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var p,b;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,f=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await f}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((b=(p=this.events).onDisconnect)==null||b.call(p))}consumeText(i){var c,a,f,p;(a=(c=this.events).onData)==null||a.call(c,i);for(const b of this.dataListeners)b(i);for(this.buffer+=i;this.buffer.includes(`
`);){const b=this.buffer.indexOf(`
`),y=this.buffer.slice(0,b).replace(/\r$/,"");this.buffer=this.buffer.slice(b+1),(p=(f=this.events).onLine)==null||p.call(f,y)}}}function fy(o){const i=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const v_=15e3,Gh=64*1024,Vh=1e5,x_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),dy=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class my{constructor(){de(this,"worker",null);de(this,"pending",null);de(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,f=c.timeoutMs??v_,p=this.ensureWorker();return new Promise(b=>{const y=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:a,timer:y,onOutput:c.onOutput,resolve:b},p.postMessage({type:"run",id:a,code:hy(i),runtimeUrl:x_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-2k1q0baP.js",import.meta.url).href,import.meta.url));return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class py{constructor(){de(this,"worker",null);de(this,"pending",null);de(this,"nextId",0)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs??v_,f=typeof c=="number"?void 0:c.onOutput,p=typeof c=="number"?void 0:c.signal,b=Uf(i,{allowInput:!0});if(b.some(x=>x.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1});const y=++this.nextId,w=this.ensureWorker();return new Promise(x=>{const _=Y=>this.finish(Y),v=()=>{w.postMessage({type:"stop",id:y}),_({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1})},S=window.setTimeout(()=>{_({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:b,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:y,timer:S,timeoutMs:a,issues:b,onOutput:f,signal:p,abort:v,resolve:x},p!=null&&p.aborted){v();return}p==null||p.addEventListener("abort",v,{once:!0});const G={type:"run",id:y,code:i,runtimeUrl:x_,interactive:!0};w.postMessage(G)})}sendInput(i){const c=this.pending;!c||!this.worker||(this.refreshTimeout(c),this.worker.postMessage({type:"stdin",id:c.id,text:i}))}stop(){const i=this.pending;!i||!this.worker||(this.worker.postMessage({type:"stop",id:i.id}),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}),this.restartWorker())}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-2k1q0baP.js",import.meta.url).href,import.meta.url));return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){this.refreshTimeout(c),(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var a;const c=this.pending;c&&(window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}refreshTimeout(i){window.clearTimeout(i.timer),i.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:i.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},i.timeoutMs)}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}function hy(o){const i=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Uf(o,i={}){const c=[],a=new Blob([o]).size;a>Gh&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Gh} bytes.`});const f=o.split(/\r?\n/);for(let p=0;p<f.length;p+=1){const b=p+1,y=Fo(f[p]).trim();if(!y)continue;const w=gy(y);w&&dy.has(w)&&c.push({level:"error",line:b,text:`${w} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&_y(f[p])&&c.push({level:"error",line:b,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const x=y.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);x&&by(x)>Vh&&c.push({level:"error",line:b,text:`range(...) er for stor til offline kørsel. Brug højst ${Vh} gentagelser.`})}for(const p of yy(f))c.push({level:"warning",text:`Funktionen ${p} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function Fo(o){let i=null;for(let c=0;c<o.length;c+=1){const a=o[c];if((a==='"'||a==="'")&&o[c-1]!=="\\"&&(i=i===a?null:i??a),a==="#"&&!i)return o.slice(0,c)}return o}function _y(o){const i=Fo(o);let c=null;for(let a=0;a<i.length;a+=1){const f=i[a];if((f==='"'||f==="'")&&i[a-1]!=="\\"){c=c===f?null:c??f;continue}if(!c&&!(!Ih(i[a-1])||i.slice(a,a+5)!=="input")&&Ih(i[a+5])&&i.slice(a+5).trimStart().startsWith("("))return!0}return!1}function Ih(o){return!o||!/[A-Za-z0-9_]/.test(o)}function gy(o){const i=o.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Yh(o){const i=o.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function by(o){const i=Number(o[1]),c=o[2]===void 0?void 0:Number(o[2]),a=o[3]===void 0?1:Number(o[3]);if(a===0)return Number.POSITIVE_INFINITY;const b=(c===void 0?i:c)-(c===void 0?0:i);return b>0&&a<0||b<0&&a>0?0:Math.ceil(Math.abs(b/a))}function yy(o){const i=new Set;for(let c=0;c<o.length;c+=1){const a=Fo(o[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const f=a[1],p=Yh(o[c]);for(let b=c+1;b<o.length;b+=1){if(!o[b].trim())continue;if(Yh(o[b])<=p)break;if(new RegExp(`\\b${f}\\s*\\(`).test(Fo(o[b]))){i.add(f);break}}}return[...i]}const vy=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function xy(o,i){var _;const c=o.trim(),a=i.split(/\r?\n/),f=wy(c),p=f?a[f-1]??"":"",b=Ey(a,f),y=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(y))return{simple:"Programmet blev stoppet.",technical:c,line:f};if(/MemoryError/.test(y))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/RecursionError/.test(y))return{simple:`En funktion kalder sig selv for mange gange${f?` omkring linje ${f}`:""}.`,technical:c,line:f};const w=y.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(w)return{simple:`Variablen ${w[1]} bruges inde i en funktion, før den har fået en værdi${f?` på linje ${f}`:""}.`,technical:c,line:f};const x=y.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(x)return{simple:Ry(p,x[1])?`Teksten ${x[1]} mangler måske citationstegn${f?` på linje ${f}`:""}.`:`Python kender ikke navnet ${x[1]}${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ZeroDivisionError/.test(y))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError:\s+unexpected indent/.test(y))return{simple:`Der er for meget indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError/.test(y))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ImportError|ModuleNotFoundError/.test(y)){const v=(_=y.match(/['"](.+?)['"]/))==null?void 0:_[1];return{simple:`Python kan ikke finde modulet${v?` ${v}`:""}.`,technical:c,line:f}}if(/OSError/.test(y))return/ENOENT|No such file|Errno\s+2/.test(y)?{simple:`Python kan ikke finde filen${f?` på linje ${f}`:""}.`,technical:c,line:f}:/EACCES|permission|denied/i.test(y)?{simple:`Python har ikke adgang til filen eller enheden${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Der opstod en fejl med en fil eller en enhed${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/SyntaxError/.test(y)){if(/invalid syntax/.test(y)&&b.text.trim().endsWith(","))return{simple:`Linje ${b.line??f} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:b.line??f};const v=Hf(p,f)??Hf(b.text,b.line)??Sy(a,f);return v?{simple:`Mangler måske : efter linje ${v.line}.`,technical:c,line:v.line}:f&&b.text.trim().endsWith(":")&&p.trim()&&!/^\s+/.test(p)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:c,line:f}:Ny(p)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:ky(p)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:My(p)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:c,line:f}:Ty(p)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}return/TypeError/.test(y)?/takes .* positional arguments? but .* given/.test(y)||/function takes/.test(y)?{simple:`En funktion får for mange eller for få værdier${f?` på linje ${f}`:""}.`,technical:c,line:f}:/unsupported operand type/.test(y)?{simple:`To værdier kan ikke bruges sammen på den måde${f?` på linje ${f}`:""}.`,technical:c,line:f}:/not callable/.test(y)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:c,line:f}:/IndexError/.test(y)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:c,line:f}:/KeyError/.test(y)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:c,line:f}:/AttributeError/.test(y)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:c,line:f}:/ValueError/.test(y)?/invalid literal for int/.test(y)?{simple:`Teksten kan ikke laves om til et heltal${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}function wy(o){var f;const c=(f=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function Ey(o,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const a=o[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Hf(o,i){if(!i)return null;const c=o.trim();return!vy.test(c)||c.endsWith(":")?null:{line:i}}function Sy(o,i){const c=i?Math.min(o.length,i):o.length,a=Math.max(0,c-4);for(let f=c-1;f>=a;f-=1){const p=Hf(o[f]??"",f+1);if(p)return p}return null}function ky(o){const i=(o.match(/'/g)??[]).length,c=(o.match(/"/g)??[]).length;return i%2===1||c%2===1}function Ny(o){var a,f;const c=(f=(a=o.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:f.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function Ry(o,i){const c=o.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function My(o){return w_(o)>0}function Ty(o){return w_(o)<0}function w_(o){let i=0,c=null;for(let a=0;a<o.length;a+=1){const f=o[a];if((f==='"'||f==="'")&&o[a-1]!=="\\"){c=c===f?null:c??f;continue}c||((f==="("||f==="["||f==="{")&&(i+=1),(f===")"||f==="]"||f==="}")&&(i-=1))}return i}const Gf="/min_kode.py",E_=`print('Hej fra Pico Kontrol Panel')
`,jy=500,Dy=1200,Ay=12e4,is="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function yt(o,i){return`${o}:${i}`}function Oy(o){return new Promise(i=>window.setTimeout(i,o))}function Cy(){const o=le(d=>d.toggleSideMenu),i=le(d=>d.askConfirm),c=le(d=>d.picoIdeOrigin),a=le(d=>d.active),f=le(d=>d.isBleConnected),p=le(d=>d.bleListFiles),b=le(d=>d.bleReadText),y=le(d=>d.bleWriteText),w=le(d=>d.bleDeleteFile),x=le(d=>d.bleRestartAndReconnect),[_,v]=z.useState(!1),[S,G]=z.useState(!1),[Y,K]=z.useState([]),[D,B]=z.useState(!1),[H,re]=z.useState([]),[se,oe]=z.useState(null),[pe,W]=z.useState(()=>Af(xf())),[Z,Se]=z.useState(Gf),[ye,xe]=z.useState("local"),[ie,Ie]=z.useState(()=>{var d;return((d=Af(xf()).find(h=>h.path===Gf))==null?void 0:d.content)??E_}),[Te,Ye]=z.useState([]),[U,ee]=z.useState(!1),[ce,ue]=z.useState(""),[we,N]=z.useState(""),[I,te]=z.useState(null),[O,Q]=z.useState(!1),[J,F]=z.useState(null),[Le,je]=z.useState(!1),[Pn,Ft]=z.useState({}),[ve,gn]=z.useState(!1),[Sn,Oe]=z.useState(0),[kn,Gt]=z.useState(()=>{var d,h;return((d=Nl.find(E=>E.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((h=Nl[0])==null?void 0:h.board)??""}),[Ln,Br]=z.useState(()=>{var d,h;return((d=Nl.find(E=>E.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((h=Nl[0])==null?void 0:h.version)??""}),[zr,xt]=z.useState(!1),[ai,Ur]=z.useState({top:0,left:0}),[bn,Rl]=z.useState(!1),[Ml,ra]=z.useState(!1),[Tl,Wn]=z.useState(!0),[ot,Kt]=z.useState(""),[si,jl]=z.useState([]),[yn,ct]=z.useState(null),[Tn,Hr]=z.useState(!1),[Gr,sr]=z.useState({}),[Qt,qn]=z.useState({}),[Ke,un]=z.useState(null),[fn,Bn]=z.useState(null),[ec,oi]=z.useState(""),[Zt,Dl]=z.useState(()=>mh().clearTerminalOnRun),[or,ds]=z.useState(()=>mh().simplifiedErrors),[ci,ms]=z.useState(()=>typeof navigator<"u"?Xh(navigator):!1),Vr=z.useRef(null),wt=z.useRef(null),an=z.useRef(null),la=z.useRef(null),zn=z.useRef(null),sn=z.useRef(null),Nn=z.useRef(null),ut=z.useRef(null),Al=z.useRef(null),Et=z.useRef(!1),cr=z.useRef(!1),Ir=z.useRef(!1),$n=z.useRef(""),Wt=z.useRef(null),St=z.useRef(null),Jn=z.useRef(null),ur=z.useRef(null),Xn=z.useRef(null),en=z.useRef(null),Jt=z.useRef(0),fr=z.useRef(null),et=z.useRef(null),dr=z.useRef(null),Ol=z.useRef(null),Cl=z.useRef([]),Ll=z.useRef([]),Yr=z.useRef(null),Vt=cy(),he=c==="control"&&!!a&&f(),ft=he?(a==null?void 0:a.deviceID)??"ble":null,nt=Math.max(1,ie.split(`
`).length),ps=new Blob([ie]).size,nc=ye==="pico"?"Picoen":"browseren",ia=z.useMemo(()=>[...new Set(Nl.map(d=>d.board))],[]),Pr=z.useMemo(()=>Nl.filter(d=>d.board===kn),[kn]),It=Nl.find(d=>d.board===kn&&d.version===Ln)??Pr[0]??Nl[0],kt=ye==="pico",Un=kt?bn:Ml,Hn=kt&&bn&&_&&!he||!kt&&Ml&&!!Jn.current,hs=Tn||Un&&!Hn,aa=Hn?"stdin":">>>",mr=Hn?kt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":kt?"Pico MicroPython":"Browser-MicroPython",ui=z.useMemo(()=>{const d=new uy({onData:h=>{cr.current||!Et.current||($n.current=($n.current+h).slice(-240),/(^|\r?\n)>>> ?$/.test($n.current)&&sa())},onLine:h=>{if(cr.current)return;const E=h.trimEnd();if(Ir.current&&E.trim()){$("info",E);return}if(Et.current&&qr(E)){sa();return}Et.current&&E.trim()&&!tc(E)&&!E.includes("raw REPL")&&$("info",E)},onLog:$,onDisconnect:()=>{v(!1),Rl(!1),Hr(!1),Et.current=!1,Ir.current=!1,$r(),$n.current="",Nt(),$("warning","USB-forbindelse lukket.")}});return Vr.current=d,d},[]);function $(d,h){K(E=>[...E.slice(-140),{level:d,text:h}])}function qr(d){return d.trim()===">>>"}function tc(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function $r(){Wt.current!==null&&(window.clearTimeout(Wt.current),Wt.current=null)}function sa(){!Et.current||Wt.current!==null||(Wt.current=window.setTimeout(()=>{Wt.current=null,Et.current&&(Rl(!1),Et.current=!1,$n.current="",$("success","Pico-koden er færdig."))},0))}function Xr(d,h=ie,E="error"){const j=xy(d,h);K(T=>[...T.slice(-140),{level:E,text:j.simple,technical:j.technical}])}function vn(d,h,E=ye){Se(d),xe(E),Ie(h),qn(j=>({...j,[yt(E,d)]:h})),Fr()}function _s(d,h="pico"){Se(d),xe(h),Ie(""),un(null),Ur({top:0,left:0}),Fr()}function Fr(){Cl.current=[],Ll.current=[],Yr.current=null}function Fn(){const d=zn.current;return{content:ie,selectionStart:(d==null?void 0:d.selectionStart)??ie.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??ie.length}}function oa(d){const h=Cl.current,E=h.at(-1);(E==null?void 0:E.content)===d.content&&E.selectionStart===d.selectionStart&&E.selectionEnd===d.selectionEnd||(h.push(d),h.length>jy&&h.shift(),Ll.current=[])}function ca(d,h){let E=0;const j=Math.min(d.length,h.length);for(;E<j&&d[E]===h[E];)E+=1;let T=d.length,ae=h.length;for(;T>E&&ae>E&&d[T-1]===h[ae-1];)T-=1,ae-=1;const ge=d.slice(E,T),Ze=h.slice(E,ae),Ue=Ze&&!ge?"insert":ge&&!Ze?"delete":"replace",xn=Ze.at(-1)??"";return{kind:Ue,boundaryAfter:Ue==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(xn)}}function Kr(d,h){if(h!=="typing")return Yr.current=null,!0;const E=Date.now(),j=ca(ie,d),T=Yr.current,ae=T!==null&&T.path===Z&&T.source===ye&&T.kind===j.kind&&T.kind!=="replace"&&!T.boundaryAfter&&E-T.at<=Dy;return Yr.current={path:Z,source:ye,kind:j.kind,at:E,boundaryAfter:j.boundaryAfter},!ae}function pr(d){Ie(d.content),qn(h=>({...h,[yt(ye,Z)]:d.content})),oi(""),un(null),window.requestAnimationFrame(()=>{const h=zn.current;h&&(h.focus(),h.selectionStart=Math.min(d.selectionStart,d.content.length),h.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function gs(){const d=Cl.current.pop();return d?(Yr.current=null,Ll.current.push(Fn()),pr(d),!0):!1}function fi(){const d=Ll.current.pop();return d?(Yr.current=null,Cl.current.push(Fn()),pr(d),!0):!1}function hr(d,h=(ae=>(ae=zn.current)==null?void 0:ae.selectionStart)()??d.length,E=Fn(),j=h,T="programmatic"){E&&d!==ie&&Kr(d,T)&&oa(E),Ie(d),qn(ge=>({...ge,[yt(ye,Z)]:d})),oi(""),Ul(d,h),window.requestAnimationFrame(()=>{const ge=zn.current;ge&&(ge.selectionStart=Math.min(h,d.length),ge.selectionEnd=Math.min(j,d.length))})}function er(d,h=ye){qn(E=>{const j=yt(h,d);if(!(j in E))return E;const T={...E};return delete T[j],T})}function Yt(){return Gr[Z]===ie}function Gn(d,h){sr(E=>({...E,[d]:h}))}function Qr(d,h){Gn(d,h),qn(E=>({...E,[yt("pico",d)]:h})),ye==="pico"&&Z===d&&Ie(h)}function Nt(){re([]),Ye([]),sr({}),qn({}),un(null),Se(d=>{const h=Af(xf());if(h.find(T=>T.path===d))return d;const j=h[0];return xe("local"),Ie(j.content),Fr(),j.path})}function Rn(d){nr(),F({value:100,label:d}),Ol.current=window.setTimeout(()=>{Ol.current=null,F(null)},900)}function nr(){Ol.current!==null&&(window.clearTimeout(Ol.current),Ol.current=null)}function bs(){return J?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(J.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:J.label}),u.jsxs("strong",{children:[Math.round(J.value),"%"]}),J.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:di,"aria-label":"Stop handling",title:"Stop",children:u.jsx(Zn,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,J.value))}%`}})})]}):null}function di(){Xn.current&&tr("Stopper læsning...",!0,!0)}function tr(d="Stopper læsning...",h=!1,E=!1){var j;nr(),et.current=null,Jt.current+=1,(j=Xn.current)==null||j.abort(),Xn.current=null,fr.current=null,oe(null),B(!1),F(h?{value:(J==null?void 0:J.value)??0,label:d,cancellable:!1}:null),E&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function ys(d){var h;if(!(fr.current===d||et.current===d)){if(et.current=d,en.current){Jt.current+=1,(h=Xn.current)==null||h.abort(),Xn.current=null,fr.current=null,_s(d),oe(d),B(!0),nr(),F({value:2,label:`Skifter til ${ze(d)}...`,cancellable:!0});return}jn()}}function jn(){if(en.current)return;const d=et.current;if(!d)return;et.current=null;const h=Jt.current+1;Jt.current=h;const E=new AbortController;Xn.current=E,fr.current=d,_s(d),oe(d),B(!0),nr(),F({value:12,label:`Indlæser ${ze(d)}...`,cancellable:!0});const j=(async()=>{try{const T=await b(d,(ae,ge)=>{Jt.current===h&&F({value:ae,label:ge,cancellable:!0})},E.signal);if(E.signal.aborted||Jt.current!==h)return;vn(d,T,"pico"),Gn(d,T),Rn("Fil indlæst")}catch(T){if(Jt.current!==h)return;zy(T)||E.signal.aborted?$("info",`Stoppede læsning af ${ze(d)}.`):(F(null),$("error",T instanceof Error?T.message:"BLE læsning fejlede."))}})();en.current=j,j.finally(()=>{if(en.current!==j)return;en.current=null,Xn.current===E&&(Xn.current=null),fr.current===d&&(fr.current=null),!!et.current||(oe(null),B(!1),E.signal.aborted&&F(null)),jn()})}async function Rt(d){const h=cr.current;cr.current=!0;try{return await d()}finally{cr.current=h}}z.useEffect(()=>{if(!Tl)return;const d=Nn.current;d&&(d.scrollTop=d.scrollHeight)},[Y,Tl]),z.useEffect(()=>{_0({clearTerminalOnRun:Zt,simplifiedErrors:or})},[Zt,or]),z.useEffect(()=>{var d;Pr.some(h=>h.version===Ln)||Br(((d=Pr[0])==null?void 0:d.version)??"")},[Pr,Ln]),z.useEffect(()=>{ms(Xh(navigator))},[]),z.useEffect(()=>{const d=()=>{const h=Vr.current;wt.current=null,an.current=null,Vr.current=null,h==null||h.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var h,E;nr(),(h=St.current)==null||h.dispose(),St.current=null,(E=Jn.current)==null||E.dispose(),Jn.current=null,window.removeEventListener("pagehide",d),d()}},[]),z.useEffect(()=>{const d=h=>{!(h.ctrlKey||h.metaKey)||h.key.toLowerCase()!=="s"||(h.preventDefault(),!D&&Z.trim()&&!ci&&!O&&!I&&!U&&ws())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ye,he,D,_,ie,Z,ci,O,I,U]);function _r(d,h,E){W(j=>{const T=Fy(j,d,h,E);return wf(T),T})}const Zr=Wy(H,pe,Qt,_||he);z.useEffect(()=>{he&&nn()},[he]),z.useEffect(()=>{const d=dr.current;d&&d!==ft&&Nt(),dr.current=ft},[ft]);async function rc(){if(Vt.supported){G(!0);try{await ui.requestAndConnect();const d=new Vb(ui);wt.current=d,an.current=new Xb(d),v(!0),Oe(0),await d.interrupt(),await ua(d),$("success","Sendte stop-signal til Pico-terminalen."),await da(an.current),await xs(an.current)}catch(d){$("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await ui.disconnect()}catch(h){$("error",h instanceof Error?`USB-porten kunne ikke lukkes: ${h.message}`:"USB-porten kunne ikke lukkes.");return}Oe(h=>{const E=h+1;return E>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),gn(!0)),E}),v(!1)}finally{G(!1)}}}async function ua(d){const h=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(h.error||!h.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function fa(){var d;try{await((d=Vr.current)==null?void 0:d.disconnect()),wt.current=null,an.current=null,v(!1),Nt()}catch(h){$("error",h instanceof Error?`USB-porten kunne ikke lukkes: ${h.message}`:"USB-porten kunne ikke lukkes.")}}async function Kn(d){const h=an.current;if(h){B(!0),cr.current=!0;try{await d(h)}catch(E){F(null),$("error",E instanceof Error?E.message:"USB filhandling fejlede.")}finally{cr.current=!1,B(!1)}}}async function nn(d=!0){if(he){B(!0);try{const h=await p();re(h),d&&$("success",`Indlæste ${h.length} filer fra Pico via Bluetooth.`)}catch(h){$("error",h instanceof Error?h.message:"BLE filhandling fejlede.")}finally{B(!1)}return}await da(an.current,d)}async function da(d,h=!0){if(d){B(!0);try{const E=await Rt(()=>d.list("/"));re(E),h&&$("success",`Indlæste ${E.length} filer fra Pico.`)}catch(E){$("error",E instanceof Error?E.message:"USB filhandling fejlede.")}finally{B(!1)}}}async function Bl(){if(he){B(!0),F({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await vs((h,E)=>F({value:h,label:E}));Ye(d),Rn("Fil-tjek færdigt")}catch(d){F(null),$("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{B(!1)}return}await xs(an.current)}async function vs(d){const h=[],E=Fi.filter(T=>T.kind==="library"&&!ti(T));let j=0;for(const T of Fi){if(T.kind==="program"){h.push({...T,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(ti(T)){h.push({...T,status:"unknown",detail:"Opdateres via USB"});continue}try{const ae=j/Math.max(1,E.length)*100,ge=100/Math.max(1,E.length);$("info",`Tjekker ${T.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,ae),`Tjekker ${T.label} på Pico...`);const Ze=await b(T.path,(xn,Vl)=>{d==null||d(Math.min(95,ae+xn/100*ge),`${T.label}: ${Vl}`)}),Ue=Xi(Ze)===Xi(T.content);h.push({...T,status:Ue?"ok":"outdated",detail:Ue?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{h.push({...T,status:"missing",detail:"Mangler på Pico"})}finally{j+=1}}return d==null||d(100,"Fil-tjek færdigt"),h}async function xs(d){if(d){B(!0);try{const h=await Rt(()=>mi(d)),E=h;Ye(E)}catch(h){$("error",h instanceof Error?h.message:"Runtime check fejlede.")}finally{B(!1)}}}async function mi(d){if(!d)return[];const h=[];for(const E of Fi){if(E.kind==="program"){h.push({...E,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const j=await d.readText(E.path),T=Xi(j)===Xi(E.content);h.push({...E,status:T?"ok":"outdated",detail:T?"Matcher appens version":"Matcher ikke appens version"})}catch{h.push({...E,status:"missing",detail:"Mangler på Pico"})}}return h}async function lc(d=Z){if(he){ys(d);return}oe(d),await Kn(async h=>{F({value:12,label:`Indlæser ${ze(d)}...`});const E=await ic(h,d);vn(d,E,"pico"),Gn(d,E),Rn("Fil indlæst")}),oe(null)}async function ic(d,h){var E;try{return await d.readText(h)}catch(j){await((E=wt.current)==null?void 0:E.stop().catch(()=>{})),await Oy(120);try{return await d.readText(h)}catch{throw j}}}function ac(){Q(!0)}async function ws(){if(ye==="pico"){if(!_&&!he){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await pi();return}Es()}function Es(){if(Ki(Z)){$("error",is);return}_r(Z,ie,!1),xe("local"),qn(d=>({...d,[yt("local",Z)]:ie})),Q(!1),$("success",`Gemte ${ze(Z)} lokalt.`)}async function pi(){if(Q(!1),Ki(Z))return F(null),$("error",is),!1;if(F({value:0,label:"Starter gemning..."}),he){B(!0);try{return await y(Z,ie,(h,E)=>F({value:h,label:E})),Gn(Z,ie),xe("pico"),qn(h=>({...h,[yt("pico",Z)]:ie})),Rn("Gemt på Pico via Bluetooth"),$("success",`Gemte ${ze(Z)} på Pico via Bluetooth.`),Uo(Z)&&(xt(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await nn(!1),!0}catch(h){return F(null),$("error",h instanceof Error?h.message:"BLE gem fejlede."),!1}finally{B(!1)}}if(!an.current)return F(null),!1;let d=!1;return await Kn(async h=>{zl(Z,"pico")?await h.replaceTextSafely(Z,ie,(E,j)=>F({value:E,label:j})):await h.writeText(Z,ie,(E,j)=>F({value:E,label:j})),Gn(Z,ie),xe("pico"),qn(E=>({...E,[yt("pico",Z)]:ie})),Rn("Gemt på Pico via USB"),$("success",`Gemte ${Z}.`),await nn(),await Bl(),d=!0}),d}function sc(){Ss(ze(Z),ie),Q(!1),$("success",`Downloadede ${ze(Z)}.`)}function Ss(d,h){const E=new Blob([h],{type:"text/plain;charset=utf-8"}),j=URL.createObjectURL(E),T=document.createElement("a");T.href=j,T.download=d,T.click(),URL.revokeObjectURL(j)}async function ks(d){B(!0),xt(!1),F({value:10,label:"Genstarter Pico..."});try{await x(d)?(Rn("Pico genforbundet"),$("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await nn()):(F(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(h){F(null),$("error",h instanceof Error?h.message:"Genstart/genforbindelse mislykkedes.")}finally{B(!1)}}function Ns(d){var ae;const h=d??{path:Z,source:ye},E=h.source==="pico"?"Pico":"browser",j=h.source==="pico"?(d==null?void 0:d.versions.length)??((ae=Yf(H).get(h.path))==null?void 0:ae.length)??0:0,T=j>0?` Det sletter også filens versionshistorik (${j} gemte versioner).`:"";te(null),i({title:"Slet fil",message:`Vil du slette ${ze(h.path)} fra ${E}?${T}`,confirmLabel:"Slet",onConfirm:()=>{cc(h)}})}function ma(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{oc()}})}async function oc(){if(!an.current){$("error","Forbind Picoen med USB fÃ¸rst.");return}await Kn(async d=>{await d.delete("/DeviceSettings.txt").catch(h=>{const E=h instanceof Error?h.message:"";if(!/ENOENT|No such file|not found/i.test(E))throw h}),sr(h=>{const E={...h};return delete E["/DeviceSettings.txt"],E}),er("/DeviceSettings.txt","pico"),$("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var Ã¥bent."),await nn()})}async function cc(d){const h=d.path,E=d.source,j=h===Z&&E===ye;if(E==="local"){const ge=pe.filter(Ze=>Ze.path!==h);W(ge),wf(ge),j&&vn(h,"","local"),er(h,"local"),$("warning",`Slettede ${ze(h)} fra browseren.`);return}const T=Yf(H).get(h)??[],ae=[h,...T.map(ge=>ge.path)];if(he){B(!0);try{for(const Ze of ae)await w(Ze);sr(Ze=>{const Ue={...Ze};for(const xn of ae)delete Ue[xn];return Ue}),j&&vn(h,"","pico");for(const Ze of ae)er(Ze,"pico");const ge=T.length>0?` og ${T.length} gemte versioner`:"";$("warning",`Slettede ${ze(h)}${ge} på Pico via Bluetooth.`),await nn()}catch(ge){$("error",ge instanceof Error?ge.message:"BLE sletning fejlede.")}finally{B(!1)}return}if(!an.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await Kn(async ge=>{for(const Ue of ae)await ge.delete(Ue);sr(Ue=>{const xn={...Ue};for(const Vl of ae)delete xn[Vl];return xn});const Ze=T.length>0?` og ${T.length} gemte versioner`:"";$("warning",`Slettede ${h}${Ze}.`),j&&vn(h,"","pico");for(const Ue of ae)er(Ue,"pico");await nn(),await Bl()})}async function uc(d){if(!d)return;const h=Ly(d.name);if(!h){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Ki(h)){$("error",is);return}if(d.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const E=await d.text();if(ye==="local"){_r(h,E,!0),vn(h,E,"local"),$("success",`Importerede ${ze(h)} i browseren.`);return}if(!_&&!he){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&ti({path:h})){$("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(F({value:0,label:"Uploader fil til Pico..."}),he){B(!0);try{await y(h,E,(T,ae)=>F({value:T,label:ae})),Gn(h,E),vn(h,E,"pico"),Rn("Fil uploadet til Pico"),$("success",`Importerede ${ze(h)} på Pico via Bluetooth.`),await nn()}catch(T){F(null),$("error",T instanceof Error?T.message:"Kunne ikke importere filen til Pico.")}finally{B(!1)}return}if(!an.current){F(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Kn(async T=>{zl(h,"pico")?await T.replaceTextSafely(h,E,(ae,ge)=>F({value:ae,label:ge})):await T.writeText(h,E,(ae,ge)=>F({value:ae,label:ge})),Gn(h,E),vn(h,E,"pico"),Rn("Fil uploadet til Pico"),$("success",`Importerede ${ze(h)} på Pico.`),await nn(),await Bl()})}async function Rs(){ue(""),ee(!0)}function fc(){const d=Ph(ce);if(!d)return;if(Ki(d)){$("error",is);return}const h=ye;if(zl(d,h)){$("error",`Der findes allerede en fil med navnet ${ze(d)} i ${h==="pico"?"Pico":"browseren"}.`);return}if(h==="local"){_r(d,"",!1),vn(d,"","local"),ee(!1),$("success",`Oprettede ${ze(d)} i browseren.`);return}dc(d)}async function dc(d){if(!_&&!he){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ee(!1),F({value:0,label:"Opretter fil på Pico..."}),he){B(!0);try{await y(d,"",(h,E)=>F({value:h,label:E})),Gn(d,""),vn(d,"","pico"),Rn("Fil oprettet på Pico"),$("success",`Oprettede ${ze(d)} på Pico via Bluetooth.`),await nn()}catch(h){F(null),$("error",h instanceof Error?h.message:"Kunne ikke oprette fil på Pico.")}finally{B(!1)}return}if(!an.current){F(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Kn(async h=>{await h.writeText(d,"",(E,j)=>F({value:E,label:j})),Gn(d,""),vn(d,"","pico"),Rn("Fil oprettet på Pico"),$("success",`Oprettede ${ze(d)} på Pico.`),await nn()})}function mc(d){d.type==="file"&&(te(d),N(By(d.path)))}async function pc(d){if(!I||I.source!=="pico")return;const h=I.path;if(te(null),F({value:0,label:"Gendanner version..."}),he){B(!0);try{const E=await b(d.path);await y(h,E,(j,T)=>F({value:j,label:T})),Gn(h,E),vn(h,E,"pico"),Rn("Version gendannet"),await nn(!1)}catch(E){F(null),$("error",E instanceof Error?E.message:"Kunne ikke gendanne versionen.")}finally{B(!1)}return}an.current&&await Kn(async E=>{await E.replaceTextSafely(h,await E.readText(d.path),(T,ae)=>F({value:T,label:ae}));const j=await E.readText(h);Gn(h,j),vn(h,j,"pico"),Rn("Version gendannet"),await nn()})}function hc(d){i({title:"Slet version",message:`Vil du slette ${ze(d.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{_c(d)}})}async function _c(d){if(he){B(!0);try{await w(d.path),await nn(!1),te(h=>h&&{...h,versions:h.versions.filter(E=>E.path!==d.path)})}catch(h){$("error",h instanceof Error?h.message:"Kunne ikke slette versionen.")}finally{B(!1)}return}an.current&&await Kn(async h=>{await h.delete(d.path),await nn(!1),te(E=>E&&{...E,versions:E.versions.filter(j=>j.path!==d.path)})})}async function gc(){if(!I)return;const d=I,h=Df(we,as(d.path));if(!h||h===d.path)return;if(Ki(h)){$("error",is);return}if(zl(h,d.source)){$("error",`Der findes allerede en fil med navnet ${ze(h)}.`);return}const E=d.source==="local",j=d.source==="pico";if(he&&j&&(Uo(d.path)||Uo(h))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}B(!0);try{if(j)if(he){const T=Gr[d.path]??await b(d.path);await y(h,T,(ae,ge)=>F({value:ae,label:ge})),await w(d.path),sr(ae=>({...Wh(ae,d.path,h),[h]:T}))}else an.current&&(await Rt(()=>an.current.rename(d.path,h)),sr(T=>Wh(T,d.path,h)));E&&W(T=>{const ae=T.map(ge=>ge.path===d.path?{...ge,path:h,updatedAt:Date.now()}:ge);return wf(ae),ae}),Z===d.path&&ye===d.source&&Se(h),qn(T=>nv(T,d.source,d.path,h)),te(null),N(""),$("success",`Omdøbte ${ze(d.path)} til ${ze(h)}.`),j&&await nn()}catch(T){$("error",T instanceof Error?T.message:"Kunne ikke omdøbe filen.")}finally{F(null),B(!1)}}function zl(d,h){return h==="pico"?H.some(E=>E.path===d):pe.some(E=>E.path===d)}async function bc(d,h){if(!zl(d,"pico"))return;const E=Qy(d,H),j=Gr[d]??await b(d);h!==void 0&&Xi(j)===Xi(h)||await y(E,j)}function pa(d){if(d.type!=="file"){he&&tr(void 0,!1),Se(d.path),xe(d.source);return}if(he&&ti(d)){$("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){he&&tr(void 0,!1);const E=pe.find(j=>j.path===d.path);vn(d.path,Qt[yt("local",d.path)]??(E==null?void 0:E.content)??"","local");return}const h=yt("pico",d.path);if(Object.prototype.hasOwnProperty.call(Qt,h)){he&&tr(void 0,!1),vn(d.path,Qt[h],"pico");return}if(Object.prototype.hasOwnProperty.call(Gr,d.path)){he&&tr(void 0,!1),vn(d.path,Gr[d.path],"pico");return}lc(d.path)}async function Wr(){if(!_&&!he){const d=qh();Ye(d),Ft($h(d)),je(!0),F(null);return}B(!0),F({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Te.length>0?Te:he?await vs((h,E)=>F({value:h,label:E})):await Rt(()=>mi(an.current));Ye(d),Ft($h(d)),je(!0),F(null)}catch(d){F(null),$("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{B(!1)}}async function yc(){if(je(!1),he){B(!0);try{const h=(Te.length>0?Te:Fi.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Pn[j.id]&&!ti(j));if(h.length===0){$("info","Ingen filer valgt til installation.");return}let E=null;F({value:0,label:"Starter installation..."});for(const[j,T]of h.entries()){$("info",`Installerer ${T.label} via Bluetooth...`);const ae=j/h.length*100,ge=100/h.length;await bc(T.path,T.content),await y(T.path,T.content,(Ze,Ue)=>{F({value:Math.min(99,ae+Ze/100*ge),label:`${T.label}: ${Ue}`})}),Qr(T.path,T.content),$("success",`Installerede ${T.label}.`),T.kind==="library"&&(E=T),Uo(T.path)&&xt(!0)}Rn("Installation færdig"),await nn(!1),await Bl(),E&&_a(E)}catch(d){F(null),$("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{B(!1)}return}await Kn(async d=>{const E=(Te.length>0?Te:Fi.map(T=>({...T,status:"unknown",detail:"Ikke tjekket"}))).filter(T=>Pn[T.id]);if(E.length===0){$("info","Ingen filer valgt til installation.");return}let j=null;F({value:0,label:"Starter installation..."});for(const[T,ae]of E.entries()){$("info",`Installerer ${ae.label}...`);const ge=T/E.length*100,Ze=100/E.length;await d.replaceTextSafely(ae.path,ae.content,(Ue,xn)=>{F({value:Math.min(99,ge+Ue/100*Ze),label:`${ae.label}: ${xn}`})},{createBackup:!0}),Qr(ae.path,ae.content),$("success",`Installerede ${ae.label}.`),ae.kind==="library"&&(j=ae)}Rn("Installation færdig"),await nn(!1),await Bl(),j&&_a(j)})}function ha(){return(Te.length>0?Te:qh()).filter(h=>Pn[h.id])}function Ms(){const d=ha();if(d.length===0){$("info","Ingen filer valgt.");return}for(const h of d)_r(h.path,h.content,!1);je(!1),$("success",`Gemte ${d.length} filer i browseren.`)}function Ts(){const d=ha();if(d.length===0){$("info","Ingen filer valgt.");return}d.forEach((h,E)=>{window.setTimeout(()=>{Ss(ze(h.path),h.content)},E*120)}),je(!1),$("success",`Starter download af ${d.length} filer.`)}function _a(d){vn(d.path,d.content,"pico"),Gn(d.path,d.content),$("info",`Åbnede ${d.label} i editoren.`)}function js(d,h){Ft(E=>{if(d.kind!=="program")return{...E,[d.id]:h};const j={...E};for(const T of Te)T.kind==="program"&&(j[T.id]=!1);return j[d.id]=h,j})}async function Jr(){if(_i(),he&&ye==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ye==="local"){await vc();return}const d=wt.current;if(!d){$("error",`${ze(Z)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(Z.endsWith(".py")){if(!Yt()&&($("info",`${ze(Z)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await pi())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(D)return;$r(),$n.current="",Wn(!0);try{await d.runFile(Z,()=>{$r(),$n.current="",Ir.current=!1,Rl(!0),Et.current=!0}),$("success",`Kører ${ze(Z)}. Brug Stop for at afbryde.`)}catch(h){Rl(!1),Et.current=!1,$r(),$n.current="",$("error",h instanceof Error?h.message:"Kunne ikke starte koden.")}return}B(!0);try{const h=await d.exec(ie,2e4);h.output.trim()&&$("info",h.output),h.error.trim()&&Xr(h.error,ie),!h.output.trim()&&!h.error.trim()&&$("success","Koden kørte uden output.")}catch(h){$("error",h instanceof Error?h.message:"Kunne ikke køre koden.")}finally{B(!1)}}async function vc(){const d=Uf(ie,{allowInput:!0});if(d.some(j=>j.level==="error")){for(const j of d){const T=j.line?`Linje ${j.line}: `:"";$(j.level==="error"?"error":"warning",`${T}${j.text}`)}return}const h=new AbortController;ur.current=h;const E=new py;Jn.current=E,B(!0),ra(!0),Wn(!0),$("info",_?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const j=[],T=await E.run(ie,{timeoutMs:Ay,signal:h.signal,onOutput:Ue=>{j.push(Ue),$("info",Ue)}});for(const Ue of T.issues){const xn=Ue.line?`Linje ${Ue.line}: `:"";$(Ue.level==="error"?"error":"warning",`${xn}${Ue.text}`)}const ae=[...j,T.output].filter(Boolean).join(`
`).trim(),ge=T.output.trim();!T.error.trim()&&Uy(ae)?Xr(ae,ie):(ge&&$("info",ge),T.error.trim()&&Xr(T.error,ie,T.unavailable?"warning":"error")),T.ok&&!ae&&!T.error.trim()&&$("success","Browser-MicroPython kørte uden output.")}finally{ur.current=null,Jn.current=null,E.dispose(),ra(!1),B(!1)}}async function xc(){var h,E,j;if(Ml){(h=ur.current)==null||h.abort(),(E=Jn.current)==null||E.stop(),$("warning","Stoppede Browser-MicroPython."),Wn(!0);return}if(!kt&&Tn){(j=St.current)==null||j.reset(),Hr(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Wn(!0);return}const d=wt.current;if(d)try{await d.stop(),$("warning","Stoppede koden på Pico.")}catch(T){$("error",T instanceof Error?T.message:"Kunne ikke stoppe koden.")}finally{Rl(!1),Et.current=!1,$r(),$n.current="",Wn(!0)}}function wc(){const d=Nn.current;if(!d)return;const h=d.scrollHeight-d.scrollTop-d.clientHeight<12;Wn(h)}function Ds(){K([]),Wn(!0)}async function hi(){const d=Hn?ot:ot.trimEnd();if(Hn){if(!kt){const j=Jn.current;if(!j){$("warning","Browser-MicroPython kører ikke lige nu."),Vn();return}Kt(""),Wn(!0),j.sendInput(d),Vn();return}const E=wt.current;if(!E){$("warning","Pico-terminalen er ikke forbundet."),Vn();return}Kt(""),Wn(!0);try{await E.sendProgramInput(d)}catch(j){$("error",j instanceof Error?j.message:"Kunne ikke sende input til Pico-koden.")}finally{Vn()}return}if(!d.trim())return;if(jl(E=>(E.at(-1)===d?E:[...E,d]).slice(-80)),ct(null),Bn(null),Un){$("warning",kt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Vn();return}if(!kt){const E=Uf(d);if(E.some(T=>T.level==="error")){for(const T of E){const ae=T.line?"Linje "+T.line+": ":"";$(T.level==="error"?"error":"warning",ae+T.text)}Vn();return}const j=St.current??new my;St.current=j,Kt(""),Hr(!0),Wn(!0),$("info",">>> "+d);try{let T=!1;const ae=await j.send(d,{timeoutMs:15e3,onOutput:Ze=>{T=!0,$("info",Ze)}}),ge=ae.output.trim();ge&&!T&&$("info",ge),ae.error.trim()&&Xr(ae.error,d,ae.unavailable?"warning":"error")}catch(T){$("error",T instanceof Error?T.message:"Browser-MicroPython-terminalen fejlede.")}finally{Hr(!1),Vn()}return}if(he){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Vn();return}const h=wt.current;if(!_||!h){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Vn();return}Kt(""),Hr(!0),Wn(!0),Ir.current=!0,$("info",">>> "+d);try{await h.sendFriendlyLine(d)}catch(E){Ir.current=!1,$("error",E instanceof Error?E.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Hr(!1),Vn()}}function Vn(){window.requestAnimationFrame(()=>{const d=ut.current;if(!d||d.disabled)return;d.focus();const h=d.value.length;d.selectionStart=h,d.selectionEnd=h})}function el(d,h,E){return E.length===0?null:u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:h})]}),E.map(j=>{const T=he&&ti(j);return u.jsxs("label",{className:`ide-install-row ${T?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Pn[j.id],disabled:T,onChange:ae=>js(j,ae.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Ec(j),(j.kind==="library"||!_&&!he)&&u.jsx("em",{className:`ide-install-status status-${j.status}`,children:T?"USB":Zy(j.status)})]}),u.jsxs("small",{children:[j.description,!_&&!he?` ${j.detail}`:""]})]})]},j.id)})]})}function Ec(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function _i(){Zt&&K([]),Wn(!0)}function As(d,h){const E=d.indexOf(`
`,h);return E===-1?d.length:E}function Ul(d,h){const E=If(d,h);if(!E||E.query.length<1){un(null);return}const j=Fh(d,h,!0).slice(0,8),T=Kh(zn.current,E.start);un(j.length>0&&T?{items:j,selected:0,start:E.start,end:h,position:T}:null)}function Hl(d,h){const E=If(d,h);if(!E||E.query.length<1){Bn(null);return}const j=Fh(d,h,!1).slice(0,8),T=Kh(ut.current,E.start);Bn(j.length>0&&T?{items:j,selected:0,start:E.start,end:h,position:T}:null)}function gi(d){const h=d.value.slice(d.selectionStart,d.selectionEnd);oi(qy(h)?h:"")}function Gl(d,h){window.requestAnimationFrame(()=>{const E=d==null?void 0:d.querySelector(`[data-autocomplete-index="${h}"]`);E==null||E.scrollIntoView({block:"nearest"})})}function bi(d=Ke==null?void 0:Ke.items[Ke.selected]){if(!d||!Ke)return;const h=Fn(),E=ie.slice(0,Ke.start)+d.insert+ie.slice(Ke.end),j=Ke.start+d.insert.length-(d.insert.endsWith("()")?1:0);un(null),hr(E,j,h),window.requestAnimationFrame(()=>{const T=zn.current;T&&T.focus()})}function ga(d=fn==null?void 0:fn.items[fn.selected]){if(!d||!fn)return;const h=ot.slice(0,fn.start)+d.insert+ot.slice(fn.end),E=fn.start+d.insert.length-(d.insert.endsWith("()")?1:0);Kt(h),Bn(null),window.requestAnimationFrame(()=>{const j=ut.current;j&&(j.focus(),j.selectionStart=E,j.selectionEnd=E)})}function Sc(d){var gr;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?fi():gs())&&un(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),fi()&&un(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!D&&Z.trim()&&ws();return}if(Ke){if(d.key==="ArrowDown"){d.preventDefault(),un(Be=>{if(!Be)return Be;const dn=(Be.selected+1)%Be.items.length;return Gl(sn.current,dn),{...Be,selected:dn}});return}if(d.key==="ArrowUp"){d.preventDefault(),un(Be=>{if(!Be)return Be;const dn=(Be.selected-1+Be.items.length)%Be.items.length;return Gl(sn.current,dn),{...Be,selected:dn}});return}if(d.key==="Tab"){d.preventDefault(),bi();return}if(d.key==="Enter"){if(!(Ke.items[Ke.selected]&&k_(Ke.items[Ke.selected],ie.slice(Ke.start,Ke.end)))){d.preventDefault(),bi();return}un(null)}if(d.key==="Escape"){d.preventDefault(),un(null);return}}if(d.key==="Enter"){d.preventDefault();const Be=d.currentTarget,dn=Be.selectionStart,nl=Be.selectionEnd,br={content:ie,selectionStart:dn,selectionEnd:nl},tt=ie.lastIndexOf(`
`,dn-1)+1,Pt=ie.slice(tt,dn),Il=((gr=Pt.match(/^[ \t]*/))==null?void 0:gr[0])??"",ba=Pt.trimEnd().endsWith(":")?"    ":"",Mt=`
${Il}${ba}`,yi=ie.slice(0,dn)+Mt+ie.slice(nl),tl=dn+Mt.length;hr(yi,tl,br),window.requestAnimationFrame(()=>{Be.selectionStart=tl,Be.selectionEnd=tl});return}if(d.key!=="Tab")return;d.preventDefault();const h=d.currentTarget,E=h.selectionStart,j=h.selectionEnd,T={content:ie,selectionStart:E,selectionEnd:j},ae="    ";if(d.shiftKey){const Be=ie.lastIndexOf(`
`,E-1)+1,dn=E===j?As(ie,E):j,nl=ie.slice(Be,dn);let br=0,tt=0;const Pt=nl.replace(/(^|\n)( {1,4}|\t)/g,(ba,Mt,yi,tl)=>{const ya=yi.length;return Be+tl<E&&(br+=ya),tt+=ya,Mt});if(tt===0)return;const Il=ie.slice(0,Be)+Pt+ie.slice(dn);hr(Il,Math.max(Be,E-br),T,E===j?Math.max(Be,E-br):Math.max(Be,j-tt)),window.requestAnimationFrame(()=>{h.selectionStart=Math.max(Be,E-br),h.selectionEnd=E===j?h.selectionStart:Math.max(h.selectionStart,j-tt)});return}if(E===j){const Be=ie.slice(0,E)+ae+ie.slice(j);hr(Be,E+ae.length,T),window.requestAnimationFrame(()=>{h.selectionStart=E+ae.length,h.selectionEnd=E+ae.length});return}const ge=ie.lastIndexOf(`
`,E-1)+1,Ue=ie.slice(ge,j).replace(/^/gm,ae),xn=Ue.split(`
`).length,Vl=ie.slice(0,ge)+Ue+ie.slice(j);hr(Vl,E+ae.length,T,j+xn*ae.length),window.requestAnimationFrame(()=>{h.selectionStart=E+ae.length,h.selectionEnd=j+xn*ae.length})}function kc(d){if(Hn){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),hi());return}if(fn){if(d.key==="ArrowDown"){d.preventDefault(),Bn(h=>{if(!h)return h;const E=(h.selected+1)%h.items.length;return Gl(Al.current,E),{...h,selected:E}});return}if(d.key==="ArrowUp"){d.preventDefault(),Bn(h=>{if(!h)return h;const E=(h.selected-1+h.items.length)%h.items.length;return Gl(Al.current,E),{...h,selected:E}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),ga();return}if(d.key==="Escape"){d.preventDefault(),Bn(null);return}}if(d.key==="Tab"){d.preventDefault();const h=d.currentTarget,E=h.selectionStart,j=h.selectionEnd,T="    ",ae=ot.slice(0,E)+T+ot.slice(j),ge=E+T.length;Kt(ae),ct(null),Bn(null),window.requestAnimationFrame(()=>{h.selectionStart=ge,h.selectionEnd=ge});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===ot.length&&d.currentTarget.selectionEnd===ot.length)||si.length===0)return;d.preventDefault();const E=d.key==="ArrowUp"?yn===null?si.length-1:Math.max(0,yn-1):yn===null||yn+1>=si.length?null:yn+1;ct(E);const j=E===null?"":si[E]??"";Kt(j),Bn(null),window.requestAnimationFrame(()=>{const T=ut.current;T&&(T.selectionStart=j.length,T.selectionEnd=j.length)});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),hi())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(Qf,{title:"Pico Kodeværksted",onMenu:()=>o()}),ci?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Rs,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(Zn,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=la.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(Zn,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>nn(),disabled:!_&&!he||D,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(Zn,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:Zr.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Zr.map(d=>{if(d.kind==="separator"){const T=d.id==="pico-files"&&!_&&!he;return u.jsxs(z.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),T&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const h=he&&ti(d),E=Qt[yt(d.source,d.path)],j=E!==void 0&&E!==Ky(d,pe,Gr);return u.jsxs("div",{className:`ide-file-row ${Z===d.path&&ye===d.source?"active":""} ${h?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>pa(d),disabled:h,title:h?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:j?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.source==="pico"&&d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${j?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>mc(d),disabled:d.type!=="file"||D||h,"aria-label":`Filvalg for ${d.name}`,title:h?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(Zn,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&u.jsx("span",{className:`ide-usb-status ${Vt.supported?"available":"unavailable"}`,title:Vt.message,"data-tooltip":Vt.message,role:"img","aria-label":Vt.message,tabIndex:0,children:"!"})]}),he&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:_?fa:rc,disabled:!Vt.supported||S,children:S?"Forbinder...":_?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Wr,disabled:he||D,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:ma,disabled:!_||D,children:"Nulstil enhed"})]}),he&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(Zn,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Wr,disabled:D,children:"Startprogrammer og biblioteker"})]}),!he&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>gn(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[ze(Z),u.jsxs("small",{children:[ps," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Jr,disabled:D,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:xc,disabled:!Ml&&!(!kt&&Tn)&&(!_||!bn),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:ac,disabled:D||!Z.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ns(),disabled:D||!Z.trim(),children:"Slet"})]})]}),bs(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-ai.top}px)`},children:Array.from({length:nt},(d,h)=>u.jsx("span",{children:h+1},h))}),u.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-ai.left}px, ${-ai.top}px)`},children:Xy(ie,ec)}),u.jsx("textarea",{ref:zn,className:"ide-editor",value:ie,onChange:d=>hr(d.target.value,d.target.selectionStart,Fn(),d.target.selectionEnd,"typing"),onKeyDown:Sc,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Ul(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Ul(d.currentTarget.value,d.currentTarget.selectionStart),gi(d.currentTarget)},onSelect:d=>gi(d.currentTarget),onScroll:d=>{Ur({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Ke&&Ul(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:D||!!se,"aria-busy":D||!!se,spellCheck:!1}),Ke&&u.jsx("div",{ref:sn,className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Ke.position.left,top:Ke.position.top},children:Ke.items.map((d,h)=>u.jsx("button",{className:h===Ke.selected?"active":"",type:"button","data-autocomplete-index":h,onMouseDown:E=>{E.preventDefault(),bi(d)},role:"option","aria-selected":h===Ke.selected,children:d.label},d.label))}),se&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",ze(se),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${or?"":"active"}`,type:"button",onClick:()=>ds(d=>!d),"aria-label":or?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!or,title:or?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Zt?"active":""}`,type:"button",onClick:()=>Dl(d=>!d),"aria-pressed":Zt,title:Zt?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ds,disabled:Y.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:Nn,onScroll:wc,onClick:()=>{var d;return(d=ut.current)==null?void 0:d.focus()},children:[Y.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):Y.map((d,h)=>u.jsx("div",{className:`term-line term-${d.level}`,children:d.technical&&!or?d.technical:d.text},`${h}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Un&&!Hn?"locked":""} ${Hn?"stdin":""}`,onSubmit:d=>{d.preventDefault(),hi()},children:[u.jsx("span",{"aria-hidden":"true",children:aa}),u.jsx("textarea",{ref:ut,value:ot,onChange:d=>{Kt(d.target.value),ct(null),Hn?Bn(null):Hl(d.target.value,d.target.selectionStart)},onKeyDown:kc,onKeyUp:d=>{Hn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Hl(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Hn||Hl(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:hs,placeholder:mr,"aria-label":Hn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:mr,rows:Math.max(1,ot.split(`
`).length)})]}),fn&&u.jsx("div",{ref:Al,className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:fn.position.left,top:fn.position.top},children:fn.items.map((d,h)=>u.jsx("button",{className:h===fn.selected?"active":"",type:"button","data-autocomplete-index":h,onMouseDown:E=>{E.preventDefault(),ga(d)},role:"option","aria-selected":h===fn.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:la,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var h;uc((h=d.target.files)==null?void 0:h[0]),d.currentTarget.value=""}}),O&&u.jsx(En,{title:"Gem fil",onClose:()=>Q(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Es,children:"Gem i browser"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void pi(),disabled:!_&&!he||D,children:"Gem på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:sc,children:"Download til computer"})]})}),Le&&u.jsx(En,{title:"Startprogrammer og biblioteker",onClose:()=>je(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:_||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[el("Startprogrammer (main.py)","Starter automatisk på Picoen.",Te.filter(d=>d.kind==="program")),el("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Te.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(_||he)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:yc,disabled:D,children:"Installer valgte på Pico"}),u.jsx("button",{className:_||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ms,disabled:D,children:"Gem valgte i browser"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ts,disabled:D,children:"Download valgte"})]})]})}),zr&&u.jsx(En,{title:"main.py er gemt",onClose:()=>xt(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ks("control"),disabled:D,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ks("ide"),disabled:D,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>xt(!1),disabled:D,children:"Senere"})]})}),ve&&u.jsx(En,{title:"Installer MicroPython",onClose:()=>gn(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:kn,onChange:d=>Gt(d.target.value),children:ia.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(It==null?void 0:It.version)??Ln,onChange:d=>Br(d.target.value),children:Pr.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),It&&u.jsx("a",{className:"btn btn-primary btn-block",href:It.url,download:It.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),U&&u.jsx(En,{title:"Ny Python-fil",onClose:()=>ee(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),fc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ce,onChange:d=>ue(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",nc,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Ph(ce),children:"Opret"})]})}),I&&u.jsx(En,{title:ze(I.path),onClose:()=>te(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),gc()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:we,onChange:d=>N(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",as(I.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",as(I.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Df(we,as(I.path))||Df(we,as(I.path))===I.path||D,children:"Gem navn"})]}),u.jsx("div",{className:"ide-file-action-buttons",children:u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Ns(I),disabled:D,children:"Slet"})}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),I.source!=="pico"?u.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):I.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:I.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:ze(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void pc(d),disabled:D,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>hc(d),disabled:D,children:"Slet"})]},d.path))})]})]})})]})}function Ph(o){var c;const i=(c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Ly(o){const i=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=S_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function Df(o,i="py"){const c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=S_(a[1]),p=i.replace(/^\./,"").toLowerCase(),b=(a[2]??(p||"py")).toLowerCase();return f?`/${f}.${b}`:""}function By(o){return ze(o).replace(/\.(py|txt|json|csv)$/i,"")}function S_(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function as(o){var a;const i=ze(o).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function Xi(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function qh(){return Fi.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function $h(o){const i={};return o.forEach(c=>{i[c.id]=!1}),i}function ze(o){return o.split("/").filter(Boolean).pop()??o}function Uo(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Xh(o){const i=o.userAgent||"",c=o.platform||"",a=o.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),p=/Macintosh/i.test(c)&&a>1;return f&&!p}function zy(o){return o instanceof DOMException&&o.name==="AbortError"}function Uy(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function ti(o){return Hy(o)}function Hy(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Vf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Fh(o,i,c){const a=If(o,i);if(!a)return[];const f=Gy(o,a.start,i),p=a.query.toLowerCase(),b=f.beforeToken.toLowerCase(),y=f.linePrefix.toLowerCase(),w=c?[...Vf,...Iy(o)]:Vf;return Yy(w).filter(_=>{const v=_.label.toLowerCase(),S=_.insert.toLowerCase();return S===p||v===p||k_(_,a.query)?!1:f.importLine?Vy(_,f)?v.startsWith(y)||S.startsWith(y)||v.startsWith(p)||S.startsWith(p):!1:b.endsWith(".")&&!S.includes(".")?!1:!!(S.startsWith(p)||v.startsWith(p))})}function Gy(o,i,c){const a=o.lastIndexOf(`
`,i-1)+1,f=o.slice(a,c),p=o.slice(a,i),b=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),y=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:p,importLine:b,fromImportLine:y}}function Vy(o,i){return i.fromImportLine?!o.insert.includes("(")&&!o.insert.startsWith("import "):o.insert.startsWith("import ")||o.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(o.insert)}function Iy(o){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of o.matchAll(a))f[1]&&i.add(f[1]),f[2]&&i.add(f[2]);return[...i].filter(a=>a.length>1&&!Py.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function Yy(o){const i=new Set,c=[];for(const a of o){const f=a.insert.toLowerCase();i.has(f)||(i.add(f),c.push(a))}return c}const Py=new Set(Vf.map(o=>o.insert.replace(/[().: ]+$/g,"")));function If(o,i){const a=o.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function k_(o,i){const c=o.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function qy(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Kh(o,i){if(!o)return null;const c=o.closest(".ide-terminal")??o.parentElement;if(!c)return null;const a=window.getComputedStyle(o),f=document.createElement("div"),p=document.createElement("span"),b=c.getBoundingClientRect(),y=o.getBoundingClientRect();f.style.position="absolute",f.style.visibility="hidden",f.style.pointerEvents="none",f.style.whiteSpace="pre-wrap",f.style.overflowWrap="break-word",f.style.boxSizing=a.boxSizing,f.style.width=`${o.clientWidth}px`,f.style.padding=a.padding,f.style.border=a.border,f.style.font=a.font,f.style.lineHeight=a.lineHeight,f.style.letterSpacing=a.letterSpacing,f.style.tabSize=a.tabSize,f.style.left=`${y.left-b.left-o.scrollLeft}px`,f.style.top=`${y.top-b.top-o.scrollTop}px`,f.textContent=o.value.slice(0,i),p.textContent=o.value.slice(i,i+1)||" ",f.appendChild(p),c.appendChild(f);const w=p.getBoundingClientRect();f.remove();const x=$y(w.left-b.left,8,Math.max(8,c.clientWidth-296)),_=w.bottom-b.top+6,v=_+218>c.clientHeight?Math.max(8,w.top-b.top-218):_;return{left:x,top:v}}function $y(o,i,c){return Math.max(i,Math.min(c,o))}function Xy(o,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];return o.split(/(\r?\n)/).forEach((p,b)=>{if(p===`
`||p===`\r
`){f.push(u.jsx("br",{},`br-${b}`));return}let y=0;[...p.matchAll(a)].forEach((x,_)=>{const v=x.index??0;v>y&&f.push(...Qh(p.slice(y,v),c,`${b}-${_}-plain`,i));const S=x[0],G=S.startsWith("#")?"tok-comment":S.startsWith('"')||S.startsWith("'")?"tok-string":/^\d/.test(S)?"tok-number":"tok-builtin";f.push(...Io(S,i,`${b}-${_}-token`,G)),y=v+S.length}),y<p.length&&f.push(...Qh(p.slice(y),c,`${b}-tail`,i))}),f.length?f:" "}function Qh(o,i,c,a=""){const f=[];let p=0;const b=new RegExp(i.source,"g");return[...o.matchAll(b)].forEach((y,w)=>{const x=y.index??0;x>p&&f.push(...Io(o.slice(p,x),a,`${c}-${w}-plain`)),f.push(...Io(y[0],a,`${c}-${w}-keyword`,"tok-keyword")),p=x+y[0].length}),p<o.length&&f.push(...Io(o.slice(p),a,`${c}-plain-end`)),f}function Io(o,i,c,a=""){if(!i)return[u.jsx("span",{className:a||void 0,children:o},c)];const f=[],p=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),b=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${p})(?![A-Za-zÆØÅæøå0-9_])`,"g");let y=0;return[...o.matchAll(b)].forEach((w,x)=>{const _=w.index??0;_>y&&f.push(u.jsx("span",{className:a||void 0,children:o.slice(y,_)},`${c}-${x}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:w[0]},`${c}-${x}-match`)),y=_+w[0].length}),y<o.length&&f.push(u.jsx("span",{className:a||void 0,children:o.slice(y)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:o},c)]}function Af(o){return o.length>0?o:[{path:Gf,content:E_,uploaded:!1,updatedAt:Date.now()}]}function Fy(o,i,c,a){const f=o.filter(p=>p.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((p,b)=>b.updatedAt-p.updatedAt)}function Ky(o,i,c){var a;return o.source==="pico"?c[o.path]:(a=i.find(f=>f.path===o.path))==null?void 0:a.content}function Yo(o){const i=o.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",p=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return p?{originalPath:`${a}${p[1]}${p[3]}`,index:parseInt(p[2],10)}:null}function Ki(o){return Yo(o)!==null}function Yf(o){const i=new Map;for(const c of o){const a=Yo(c.path);if(!a)continue;const f=i.get(a.originalPath)??[];f.push(c),i.set(a.originalPath,f)}for(const c of i.values())c.sort((a,f)=>{var p,b;return(((p=Yo(f.path))==null?void 0:p.index)??0)-(((b=Yo(a.path))==null?void 0:b.index)??0)});return i}function Qy(o,i){const c=o.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",p=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=p.lastIndexOf("."),y=b>0?p.slice(0,b):p,w=b>0?p.slice(b):"",x=new Set(i.map(_=>_.path.toLowerCase()));for(let _=1;_<1e3;_+=1){const v=`${f}${y}_backup${_}${w}`;if(!x.has(v.toLowerCase()))return v}return`${f}${y}_backup${Date.now()}${w}`}function Zy(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function Wy(o,i,c,a){const f=new Map,p=Yf(o);for(const _ of o)Ki(_.path)||f.set(yt("pico",_.path),{kind:"file",name:_.name,path:_.path,type:_.type,size:_.size,source:"pico",uploaded:!0,versions:p.get(_.path)??[]});for(const _ of i)f.set(yt("local",_.path),{kind:"file",name:ze(_.path),path:_.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const _ of Object.keys(c)){const[v,...S]=_.split(":"),G=S.join(":");if(v!=="local"&&v!=="pico"||!G)continue;const Y=f.get(_);if(Y){f.set(_,Y);continue}f.set(_,{kind:"file",name:ze(G),path:G,type:"file",source:v,uploaded:!1,versions:v==="pico"?p.get(G)??[]:[]})}const b=[...f.values()].sort(ev),y=b.filter(_=>_.source==="pico"),w=b.filter(_=>_.source==="local"),x=[];return y.length>0||a?x.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...y):x.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),w.length>0&&x.push({kind:"separator",id:"browser-files",label:"Browser"},...w),x}const Jy=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function ev(o,i){const c=Zh(o.path),a=Zh(i.path);return c===null&&a===null?o.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function Zh(o){var c;const i=(c=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?Jy.get(i)??null:null}function Wh(o,i,c){if(!(i in o))return o;const a={...o,[c]:o[i]};return delete a[i],a}function nv(o,i,c,a){const f=`${i}:${c}`;if(!(f in o))return o;const p={...o,[`${i}:${a}`]:o[f]};return delete p[f],p}function tv({open:o}){const i=le(H=>H.screen),c=le(H=>H.active),a=le(H=>H.toggleSideMenu),f=le(H=>H.toggleDebugger),p=le(H=>H.setEditMode),b=le(H=>H.openMenuPage),y=le(H=>H.disconnect),w=le(H=>H.openPicoIde),x=le(H=>H.closePicoIde),_=le(H=>H.picoIdeOrigin),v=i==="dashboard",S=i==="control",G=i==="ide",Y=S&&!!(c!=null&&c.canEdit),K=!S||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),D=_==="control",B=_==="control"?"Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${i} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[v&&u.jsxs(u.Fragment,{children:[u.jsx(bt,{label:"Bruger",icon:"user",onClick:()=>b("user-settings")}),u.jsx(bt,{label:"Indstillinger",icon:"settings",onClick:()=>b("application-settings")}),u.jsx(bt,{label:"Kodeværksted",icon:"picoIde",onClick:w,disabled:!K}),u.jsx(Of,{}),u.jsx(bt,{label:"Om appen",icon:"info",onClick:()=>b("application-about")}),u.jsx(bt,{label:"Hjælp",icon:"help",onClick:()=>b("application-help")}),u.jsx(bt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),S&&u.jsxs(u.Fragment,{children:[u.jsx(bt,{label:"Indstillinger",icon:"settings",onClick:()=>b("device-settings")}),u.jsx(bt,{label:"Rediger",icon:"edit",onClick:()=>p(!0),disabled:!Y}),u.jsx(bt,{label:"Kodeværksted",icon:"picoIde",onClick:w,disabled:!K}),u.jsx(Of,{}),u.jsx(bt,{label:"Hjælp",icon:"help",onClick:()=>b("device-help")}),u.jsx(bt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),G&&u.jsxs(u.Fragment,{children:[u.jsx(bt,{label:B,icon:"back",onClick:x}),u.jsx(Of,{})]}),u.jsx("div",{className:"spacer"}),(S||G&&D)&&u.jsx(bt,{label:"Forlad",icon:"exit",onClick:()=>y()})]})]})}function bt({label:o,icon:i,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":o,children:[u.jsx(Zn,{name:i}),u.jsx("span",{children:o})]})}function Of(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:$0,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const rv={error:"term-error",success:"term-success",warning:"term-warning",info:""},Jh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function lv(){const o=new Date,i=c=>String(c).padStart(2,"0");return`${i(o.getDate())}-${i(o.getMonth()+1)}-${o.getFullYear()}-${i(o.getHours())}-${i(o.getMinutes())}`}function iv(){const o=le(f=>f.logs),i=le(f=>f.clearLogs),c=le(f=>f.toggleDebugger);function a(){const f=[...o].reverse().map(w=>`${w.time} ${Jh[w.level]}${w.message}`).join(`
`),p=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(p),y=document.createElement("a");y.href=b,y.download=`${lv()}.txt`,y.click(),URL.revokeObjectURL(b)}return u.jsxs(En,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:o.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((f,p)=>u.jsxs("div",{className:`term-line ${rv[f.level]}`,children:[f.time," ",Jh[f.level],f.message]},`${f.time}-${p}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const N_=4,Ht=N_*4+17,e_=80,av=20,sv=30660;function ov(o){const i=new TextEncoder().encode(o);if(i.length>76)throw new Error("QR-koden er for lang.");const c=n_(!1),a=n_(!1);cv(c,a);const f=fv(i),p=pv(f,av);return dv(c,a,[...f,...p]),mv(c,a),c}function n_(o){return Array.from({length:Ht},()=>Array.from({length:Ht},()=>o))}function Ut(o,i,c,a,f,p=!0){o[a][c]=f,p&&(i[a][c]=!0)}function cv(o,i){Cf(o,i,0,0),Cf(o,i,Ht-7,0),Cf(o,i,0,Ht-7);for(let c=0;c<Ht;c+=1)i[6][c]||Ut(o,i,c,6,c%2===0),i[c][6]||Ut(o,i,6,c,c%2===0);uv(o,i,26,26),Ut(o,i,8,N_*4+9,!0)}function Cf(o,i,c,a){for(let f=-1;f<=7;f+=1)for(let p=-1;p<=7;p+=1){const b=c+p,y=a+f;if(b<0||y<0||b>=Ht||y>=Ht)continue;const w=p>=0&&p<=6&&f>=0&&f<=6&&(p===0||p===6||f===0||f===6||p>=2&&p<=4&&f>=2&&f<=4);Ut(o,i,b,y,w)}}function uv(o,i,c,a){for(let f=-2;f<=2;f+=1)for(let p=-2;p<=2;p+=1)i[a+f][c+p]||Ut(o,i,c+p,a+f,Math.max(Math.abs(p),Math.abs(f))!==1)}function fv(o){const i=[];Ho(i,4,4),Ho(i,o.length,8);for(const a of o)Ho(i,a,8);for(Ho(i,0,Math.min(4,e_*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((f,p)=>f<<1|p,0));for(let a=236;c.length<e_;a=a===236?17:236)c.push(a);return c}function Ho(o,i,c){for(let a=c-1;a>=0;a-=1)o.push(i>>>a&1)}function dv(o,i,c){const a=c.flatMap(b=>Array.from({length:8},(y,w)=>b>>>7-w&1));let f=0,p=!0;for(let b=Ht-1;b>=1;b-=2){b===6&&(b-=1);for(let y=0;y<Ht;y+=1){const w=p?Ht-1-y:y;for(let x=0;x<2;x+=1){const _=b-x;if(i[w][_])continue;const v=f<a.length?a[f]===1:!1;o[w][_]=v!==((_+w)%2===0),f+=1}}p=!p}}function mv(o,i){const c=a=>(sv>>>a&1)!==0;for(let a=0;a<=5;a+=1)Ut(o,i,8,a,c(a));Ut(o,i,8,7,c(6)),Ut(o,i,8,8,c(7)),Ut(o,i,7,8,c(8));for(let a=9;a<15;a+=1)Ut(o,i,14-a,8,c(a));for(let a=0;a<8;a+=1)Ut(o,i,Ht-1-a,8,c(a));for(let a=8;a<15;a+=1)Ut(o,i,8,Ht-15+a,c(a))}const cs=new Array(512),Pf=new Array(256);let t_=!1;function R_(){if(t_)return;let o=1;for(let i=0;i<255;i+=1)cs[i]=o,Pf[o]=i,o<<=1,o&256&&(o^=285);for(let i=255;i<512;i+=1)cs[i]=cs[i-255];t_=!0}function M_(o,i){return o===0||i===0?0:cs[Pf[o]+Pf[i]]}function pv(o,i){R_();const c=hv(i),a=Array.from({length:i},()=>0);for(const f of o){const p=f^a.shift();a.push(0);for(let b=0;b<i;b+=1)a[b]^=M_(c[b],p)}return a}function hv(o){R_();let i=[1];for(let c=0;c<o;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let f=0;f<i.length;f+=1)a[f]^=M_(i[f],cs[c]),a[f+1]^=i[f];i=a}return i.slice(1)}function _v(){const o=le(ve=>ve.menuPage),i=le(ve=>ve.closeMenuPage),c=le(ve=>ve.user),a=le(ve=>ve.active),f=le(ve=>ve.layout),p=le(ve=>ve.sliderValues),b=le(ve=>ve.savedDevices),y=le(ve=>ve.updateUsername),w=le(ve=>ve.createOwnerPairingCode),x=le(ve=>ve.applyOwnerPairingCode),_=le(ve=>ve.clearSavedDevices),v=le(ve=>ve.resetApplicationData),S=le(ve=>ve.saveDeviceSettings),G=le(ve=>ve.setEditMode),Y=le(ve=>ve.askConfirm),[K,D]=z.useState((c==null?void 0:c.username)??""),[B,H]=z.useState(!1),[re,se]=z.useState(""),[oe,pe]=z.useState(""),[W,Z]=z.useState(!1),[Se,ye]=z.useState(""),xe=z.useRef(null),[ie,Ie]=z.useState((a==null?void 0:a.iconID)??0),[Te,Ye]=z.useState(!1),[U,ee]=z.useState((a==null?void 0:a.canOthersConnect)??!1),[ce,ue]=z.useState((a==null?void 0:a.canOthersEdit)??!1),[we,N]=z.useState((a==null?void 0:a.canOthersEditCode)??!1),[I,te]=z.useState((a==null?void 0:a.gridCols)??11),[O,Q]=z.useState((a==null?void 0:a.gridRows)??31),[J,F]=z.useState(!1);z.useEffect(()=>{o==="user-settings"&&(D((c==null?void 0:c.username)??""),pe(""),ye(""),Z(!1))},[o,c==null?void 0:c.username]),z.useEffect(()=>{o==="device-settings"&&a&&(Ie(a.iconID),ee(a.canOthersConnect),ue(a.canOthersEdit),N(a.canOthersEditCode),te(a.gridCols),Q(a.gridRows))},[a,o]),z.useEffect(()=>{if(!W)return;let ve=!1,gn=null,Sn=0;async function Oe(){var Gt;const kn=window.BarcodeDetector;if(!kn||!((Gt=navigator.mediaDevices)!=null&&Gt.getUserMedia)){ye("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),Z(!1);return}try{gn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Ln=xe.current;if(!Ln)return;Ln.srcObject=gn,await Ln.play();const Br=new kn({formats:["qr_code"]}),zr=async()=>{var xt;if(!ve){try{const Ur=(xt=(await Br.detect(Ln)).find(bn=>bn.rawValue))==null?void 0:xt.rawValue;if(Ur){pe(Ur),x(Ur)&&H(!1),Z(!1);return}}catch{}Sn=window.requestAnimationFrame(zr)}};Sn=window.requestAnimationFrame(zr)}catch{ye("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),Z(!1)}}return Oe(),()=>{ve=!0,Sn&&window.cancelAnimationFrame(Sn),gn==null||gn.getTracks().forEach(kn=>kn.stop())}},[x,W]);const Le=(ve,gn)=>Number.isFinite(ve)?Math.max(Zi,Math.min(Wi,Math.round(ve))):gn,je=(c==null?void 0:c.username)??"",Pn=K.trim(),Ft=Pn.length>0&&Pn!==je;if(!o)return null;if(o==="user-settings"){let ve=function(){const Oe=w();Oe&&(se(Oe),pe(""),H(!0))},gn=function(){x(oe)&&(pe(""),H(!1))};async function Sn(){var Oe;try{await((Oe=navigator.clipboard)==null?void 0:Oe.writeText(re))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(En,{title:"Brugerindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(zt,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${K.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:K,onChange:Oe=>D(Oe.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>y(K),disabled:!Ft,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:ve,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>Y({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{v()}}),children:"Slet brugerdata"})]})}),B&&u.jsx(En,{title:"Del ejerkode",onClose:()=>H(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(yv,{code:re}),u.jsx("code",{className:"owner-code-text",children:re}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Sn(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${oe.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:oe,onChange:Oe=>pe(Oe.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:gn,disabled:!oe.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Z(Oe=>!Oe),children:W?"Stop scanning":"Scan QR-kode"}),Se&&u.jsx("div",{className:"notice",children:Se}),W&&u.jsx("video",{className:"owner-code-video",ref:xe,muted:!0,playsInline:!0})]})})]})}if(o==="application-settings")return u.jsx(En,{title:"Applikationsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(zt,{label:"Version",value:us}),u.jsx(zt,{label:"Bluetooth",value:Zo()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(zt,{label:"Gemte enheder",value:String(b.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Y({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:_}),disabled:b.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return u.jsx(En,{title:"Om appen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(zt,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(zt,{label:"Version",value:us})]})});if(o==="application-help")return u.jsx(En,{title:"Hjælp til applikationen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const ve=f.filter(Oe=>Oe.type==="slider"),gn=!!(a!=null&&a.isOwnedByMe);async function Sn(Oe=!1){if(!a||!gn)return;const kn=Le(I,a.gridCols),Gt=Le(O,a.gridRows),Ln=gv(f,kn,Gt);if(Ln&&!Oe){Y({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Ln.requiredCols} kolonner og ${Ln.requiredRows} rækker. Det nye gitter er ${kn} × ${Gt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Sn(!0)}});return}F(!0),await S(ie,U,U&&ce,U&&we,kn,Gt),te(kn),Q(Gt),F(!1)}return u.jsx(En,{title:"Enhedsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(zt,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(zt,{label:"Ejer",value:vv(a)}),gn?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Ye(!0),children:u.jsx("img",{src:ta(ie),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:U?"":"active",onClick:()=>ee(!1),children:"Privat"}),u.jsx("button",{type:"button",className:U?"active":"",onClick:()=>ee(!0),children:"Offentlig"})]}),U&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ce?"":"active",onClick:()=>ue(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ce?"active":"",onClick:()=>ue(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:we?"":"active",onClick:()=>N(!1),children:"Nej"}),u.jsx("button",{type:"button",className:we?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:Zi,max:Wi,value:Number.isNaN(I)?"":I,onChange:Oe=>te(parseInt(Oe.target.value,10)),onBlur:()=>te(Le(I,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:Zi,max:Wi,value:Number.isNaN(O)?"":O,onChange:Oe=>Q(parseInt(Oe.target.value,10)),onBlur:()=>Q(Le(O,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Sn(),disabled:J,children:J?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(zt,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(zt,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(zt,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(zt,{label:"Kontroller",value:String(f.length)}),ve.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),ve.map(Oe=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:Oe.name}),u.jsxs("span",{children:[Oe.sliderMin??0," til ",Oe.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",bv(Oe.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",p[Oe.name]??"Ikke brugt"]})]},Oe.name))]}),Te&&u.jsx(f_,{selected:ie,onSelect:Ie,onClose:()=>Ye(!1)})]})})}return u.jsx(En,{title:"Hjælp til enheden",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>G(!0),children:"Rediger layout"})]})})}function gv(o,i,c){let a=0,f=0;for(const p of o)Ji(p)&&(a=Math.max(a,Math.ceil((p.centerX2+p.spanX)/2)+1),f=Math.max(f,Math.ceil((p.centerY2+p.spanY)/2)+1));return i<a||c<f?{requiredCols:a,requiredRows:f}:null}function bv(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function yv({code:o}){const i=z.useMemo(()=>ov(o),[o]),c=i.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,f)=>a.map((p,b)=>p?u.jsx("rect",{x:b+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${b}-${f}`):null))]})}function vv(o){var i;return o?o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function zt({label:o,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:o}),u.jsx("strong",{children:i})]})}function xv(){const o=le(a=>a.confirmDialog),i=le(a=>a.closeConfirm);if(!o)return null;function c(){o==null||o.onConfirm(),i()}return u.jsx(En,{title:o.title,onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:o.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:o.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:o.confirmLabel??"Fortsæt"})]})]})})}function wv(){const o=le(a=>a.connectionLost),i=le(a=>a.reconnectLostDevice),c=le(a=>a.dismissConnectionLost);return o?u.jsx(En,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function Ev(){const o=le(c=>c.toast),i=le(c=>c.dismissToast);return o?u.jsx("div",{className:"toast",role:"alert",onClick:i,children:o.message},o.id):null}function Sv(){const o=le(y=>y.screen),i=le(y=>y.splashTarget),c=le(y=>y.init),a=le(y=>y.sideMenuOpen),f=le(y=>y.debuggerOpen),[p,b]=z.useState(!1);return z.useEffect(()=>{c()},[c]),z.useEffect(()=>{if(a){b(!0);return}const y=setTimeout(()=>b(!1),140);return()=>clearTimeout(y)},[a]),u.jsxs("div",{className:"app",children:[o==="splash"&&i==="intro"&&u.jsx(wh,{}),o==="splash"&&i==="dashboard"&&u.jsx(Eh,{}),o==="splash"&&u.jsx(Q0,{}),o==="intro"&&u.jsx(wh,{}),o==="dashboard"&&u.jsx(Eh,{}),o==="connection"&&u.jsx(nb,{}),o==="create"&&u.jsx(tb,{}),o==="control"&&u.jsx(Hb,{}),o==="ide"&&u.jsx(Cy,{}),p&&u.jsx(tv,{open:a}),u.jsx(_v,{}),u.jsx(wv,{}),u.jsx(xv,{}),f&&u.jsx(iv,{}),u.jsx(Ev,{})]})}function kv(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(i=>{console.warn("Service worker registration failed:",i)})})}kv();s0.createRoot(document.getElementById("root")).render(u.jsx(ss.StrictMode,{children:u.jsx(Sv,{})}));
