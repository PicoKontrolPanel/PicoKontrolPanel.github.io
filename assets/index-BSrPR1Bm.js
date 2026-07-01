var cg=Object.defineProperty;var ug=(o,r,u)=>r in o?cg(o,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[r]=u;var ue=(o,r,u)=>ug(o,typeof r!="symbol"?r+"":r,u);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const _ of h.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function u(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(f){if(f.ep)return;f.ep=!0;const h=u(f);fetch(f.href,h)}})();function bp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Tu={exports:{}},Mr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function fg(){if(Th)return Mr;Th=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(s,f,h){var _=null;if(h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),"key"in f){h={};for(var g in f)g!=="key"&&(h[g]=f[g])}else h=f;return f=h.ref,{$$typeof:o,type:s,key:_,ref:f!==void 0?f:null,props:h}}return Mr.Fragment=r,Mr.jsx=u,Mr.jsxs=u,Mr}var Mh;function dg(){return Mh||(Mh=1,Tu.exports=fg()),Tu.exports}var c=dg(),Mu={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function mg(){if(Rh)return be;Rh=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),_=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),O=Symbol.iterator;function Q(E){return E===null||typeof E!="object"?null:(E=O&&E[O]||E["@@iterator"],typeof E=="function"?E:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,U={};function G(E,z,P){this.props=E,this.context=z,this.refs=U,this.updater=P||F}G.prototype.isReactComponent={},G.prototype.setState=function(E,z){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,z,"setState")},G.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function pe(){}pe.prototype=G.prototype;function oe(E,z,P){this.props=E,this.context=z,this.refs=U,this.updater=P||F}var Ee=oe.prototype=new pe;Ee.constructor=oe,le(Ee,G.prototype),Ee.isPureReactComponent=!0;var fe=Array.isArray;function we(){}var ee={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function ge(E,z,P){var A=P.ref;return{$$typeof:o,type:E,key:z,ref:A!==void 0?A:null,props:P}}function _e(E,z){return ge(E.type,z,E.props)}function ye(E){return typeof E=="object"&&E!==null&&E.$$typeof===o}function re(E){var z={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(P){return z[P]})}var Ge=/\/+/g;function Ae(E,z){return typeof E=="object"&&E!==null&&E.key!=null?re(""+E.key):z.toString(36)}function Ze(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(we,we):(E.status="pending",E.then(function(z){E.status==="pending"&&(E.status="fulfilled",E.value=z)},function(z){E.status==="pending"&&(E.status="rejected",E.reason=z)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function D(E,z,P,A,I){var Z=typeof E;(Z==="undefined"||Z==="boolean")&&(E=null);var K=!1;if(E===null)K=!0;else switch(Z){case"bigint":case"string":case"number":K=!0;break;case"object":switch(E.$$typeof){case o:case r:K=!0;break;case S:return K=E._init,D(K(E._payload),z,P,A,I)}}if(K)return I=I(E),K=A===""?"."+Ae(E,0):A,fe(I)?(P="",K!=null&&(P=K.replace(Ge,"$&/")+"/"),D(I,z,P,"",function(gn){return gn})):I!=null&&(ye(I)&&(I=_e(I,P+(I.key==null||E&&E.key===I.key?"":(""+I.key).replace(Ge,"$&/")+"/")+K)),z.push(I)),1;K=0;var Ke=A===""?".":A+":";if(fe(E))for(var Be=0;Be<E.length;Be++)A=E[Be],Z=Ke+Ae(A,Be),K+=D(A,z,P,Z,I);else if(Be=Q(E),typeof Be=="function")for(E=Be.call(E),Be=0;!(A=E.next()).done;)A=A.value,Z=Ke+Ae(A,Be++),K+=D(A,z,P,Z,I);else if(Z==="object"){if(typeof E.then=="function")return D(Ze(E),z,P,A,I);throw z=String(E),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return K}function V(E,z,P){if(E==null)return E;var A=[],I=0;return D(E,A,"","",function(Z){return z.call(P,Z,I++)}),A}function ae(E){if(E._status===-1){var z=E._result;z=z(),z.then(function(P){(E._status===0||E._status===-1)&&(E._status=1,E._result=P)},function(P){(E._status===0||E._status===-1)&&(E._status=2,E._result=P)}),E._status===-1&&(E._status=0,E._result=z)}if(E._status===1)return E._result.default;throw E._result}var xe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},me={map:V,forEach:function(E,z,P){V(E,function(){z.apply(this,arguments)},P)},count:function(E){var z=0;return V(E,function(){z++}),z},toArray:function(E){return V(E,function(z){return z})||[]},only:function(E){if(!ye(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return be.Activity=M,be.Children=me,be.Component=G,be.Fragment=u,be.Profiler=f,be.PureComponent=oe,be.StrictMode=s,be.Suspense=v,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,be.__COMPILER_RUNTIME={__proto__:null,c:function(E){return ee.H.useMemoCache(E)}},be.cache=function(E){return function(){return E.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(E,z,P){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var A=le({},E.props),I=E.key;if(z!=null)for(Z in z.key!==void 0&&(I=""+z.key),z)!J.call(z,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&z.ref===void 0||(A[Z]=z[Z]);var Z=arguments.length-2;if(Z===1)A.children=P;else if(1<Z){for(var K=Array(Z),Ke=0;Ke<Z;Ke++)K[Ke]=arguments[Ke+2];A.children=K}return ge(E.type,I,A)},be.createContext=function(E){return E={$$typeof:_,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},be.createElement=function(E,z,P){var A,I={},Z=null;if(z!=null)for(A in z.key!==void 0&&(Z=""+z.key),z)J.call(z,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(I[A]=z[A]);var K=arguments.length-2;if(K===1)I.children=P;else if(1<K){for(var Ke=Array(K),Be=0;Be<K;Be++)Ke[Be]=arguments[Be+2];I.children=Ke}if(E&&E.defaultProps)for(A in K=E.defaultProps,K)I[A]===void 0&&(I[A]=K[A]);return ge(E,Z,I)},be.createRef=function(){return{current:null}},be.forwardRef=function(E){return{$$typeof:g,render:E}},be.isValidElement=ye,be.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:ae}},be.memo=function(E,z){return{$$typeof:y,type:E,compare:z===void 0?null:z}},be.startTransition=function(E){var z=ee.T,P={};ee.T=P;try{var A=E(),I=ee.S;I!==null&&I(P,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(we,xe)}catch(Z){xe(Z)}finally{z!==null&&P.types!==null&&(z.types=P.types),ee.T=z}},be.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},be.use=function(E){return ee.H.use(E)},be.useActionState=function(E,z,P){return ee.H.useActionState(E,z,P)},be.useCallback=function(E,z){return ee.H.useCallback(E,z)},be.useContext=function(E){return ee.H.useContext(E)},be.useDebugValue=function(){},be.useDeferredValue=function(E,z){return ee.H.useDeferredValue(E,z)},be.useEffect=function(E,z){return ee.H.useEffect(E,z)},be.useEffectEvent=function(E){return ee.H.useEffectEvent(E)},be.useId=function(){return ee.H.useId()},be.useImperativeHandle=function(E,z,P){return ee.H.useImperativeHandle(E,z,P)},be.useInsertionEffect=function(E,z){return ee.H.useInsertionEffect(E,z)},be.useLayoutEffect=function(E,z){return ee.H.useLayoutEffect(E,z)},be.useMemo=function(E,z){return ee.H.useMemo(E,z)},be.useOptimistic=function(E,z){return ee.H.useOptimistic(E,z)},be.useReducer=function(E,z,P){return ee.H.useReducer(E,z,P)},be.useRef=function(E){return ee.H.useRef(E)},be.useState=function(E){return ee.H.useState(E)},be.useSyncExternalStore=function(E,z,P){return ee.H.useSyncExternalStore(E,z,P)},be.useTransition=function(){return ee.H.useTransition()},be.version="19.2.7",be}var kh;function Qu(){return kh||(kh=1,Mu.exports=mg()),Mu.exports}var q=Qu();const Cr=bp(q);var Ru={exports:{}},Rr={},ku={exports:{}},ju={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh;function hg(){return jh||(jh=1,(function(o){function r(D,V){var ae=D.length;D.push(V);e:for(;0<ae;){var xe=ae-1>>>1,me=D[xe];if(0<f(me,V))D[xe]=V,D[ae]=me,ae=xe;else break e}}function u(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var V=D[0],ae=D.pop();if(ae!==V){D[0]=ae;e:for(var xe=0,me=D.length,E=me>>>1;xe<E;){var z=2*(xe+1)-1,P=D[z],A=z+1,I=D[A];if(0>f(P,ae))A<me&&0>f(I,P)?(D[xe]=I,D[A]=ae,xe=A):(D[xe]=P,D[z]=ae,xe=z);else if(A<me&&0>f(I,ae))D[xe]=I,D[A]=ae,xe=A;else break e}}return V}function f(D,V){var ae=D.sortIndex-V.sortIndex;return ae!==0?ae:D.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var _=Date,g=_.now();o.unstable_now=function(){return _.now()-g}}var v=[],y=[],S=1,M=null,O=3,Q=!1,F=!1,le=!1,U=!1,G=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;function Ee(D){for(var V=u(y);V!==null;){if(V.callback===null)s(y);else if(V.startTime<=D)s(y),V.sortIndex=V.expirationTime,r(v,V);else break;V=u(y)}}function fe(D){if(le=!1,Ee(D),!F)if(u(v)!==null)F=!0,we||(we=!0,re());else{var V=u(y);V!==null&&Ze(fe,V.startTime-D)}}var we=!1,ee=-1,J=5,ge=-1;function _e(){return U?!0:!(o.unstable_now()-ge<J)}function ye(){if(U=!1,we){var D=o.unstable_now();ge=D;var V=!0;try{e:{F=!1,le&&(le=!1,pe(ee),ee=-1),Q=!0;var ae=O;try{t:{for(Ee(D),M=u(v);M!==null&&!(M.expirationTime>D&&_e());){var xe=M.callback;if(typeof xe=="function"){M.callback=null,O=M.priorityLevel;var me=xe(M.expirationTime<=D);if(D=o.unstable_now(),typeof me=="function"){M.callback=me,Ee(D),V=!0;break t}M===u(v)&&s(v),Ee(D)}else s(v);M=u(v)}if(M!==null)V=!0;else{var E=u(y);E!==null&&Ze(fe,E.startTime-D),V=!1}}break e}finally{M=null,O=ae,Q=!1}V=void 0}}finally{V?re():we=!1}}}var re;if(typeof oe=="function")re=function(){oe(ye)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Ae=Ge.port2;Ge.port1.onmessage=ye,re=function(){Ae.postMessage(null)}}else re=function(){G(ye,0)};function Ze(D,V){ee=G(function(){D(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return O},o.unstable_next=function(D){switch(O){case 1:case 2:case 3:var V=3;break;default:V=O}var ae=O;O=V;try{return D()}finally{O=ae}},o.unstable_requestPaint=function(){U=!0},o.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ae=O;O=D;try{return V()}finally{O=ae}},o.unstable_scheduleCallback=function(D,V,ae){var xe=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?xe+ae:xe):ae=xe,D){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ae+me,D={id:S++,callback:V,priorityLevel:D,startTime:ae,expirationTime:me,sortIndex:-1},ae>xe?(D.sortIndex=ae,r(y,D),u(v)===null&&D===u(y)&&(le?(pe(ee),ee=-1):le=!0,Ze(fe,ae-xe))):(D.sortIndex=me,r(v,D),F||Q||(F=!0,we||(we=!0,re()))),D},o.unstable_shouldYield=_e,o.unstable_wrapCallback=function(D){var V=O;return function(){var ae=O;O=V;try{return D.apply(this,arguments)}finally{O=ae}}}})(ju)),ju}var Ah;function pg(){return Ah||(Ah=1,ku.exports=hg()),ku.exports}var Au={exports:{}},Nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function _g(){if(Dh)return Nt;Dh=1;var o=Qu();function r(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)y+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(v,y,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:M==null?null:""+M,children:v,containerInfo:y,implementation:S}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nt.createPortal=function(v,y){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return h(v,y,null,S)},Nt.flushSync=function(v){var y=_.T,S=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=y,s.p=S,s.d.f()}},Nt.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},Nt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Nt.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var S=y.as,M=g(S,y.crossOrigin),O=typeof y.integrity=="string"?y.integrity:void 0,Q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;S==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:M,integrity:O,fetchPriority:Q}):S==="script"&&s.d.X(v,{crossOrigin:M,integrity:O,fetchPriority:Q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Nt.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var S=g(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},Nt.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var S=y.as,M=g(S,y.crossOrigin);s.d.L(v,S,{crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Nt.preloadModule=function(v,y){if(typeof v=="string")if(y){var S=g(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},Nt.requestFormReset=function(v){s.d.r(v)},Nt.unstable_batchedUpdates=function(v,y){return v(y)},Nt.useFormState=function(v,y,S){return _.H.useFormState(v,y,S)},Nt.useFormStatus=function(){return _.H.useHostTransitionStatus()},Nt.version="19.2.7",Nt}var Oh;function gg(){if(Oh)return Au.exports;Oh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Au.exports=_g(),Au.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function bg(){if(Ch)return Rr;Ch=1;var o=pg(),r=Qu(),u=gg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return v(a),e;if(i===l)return v(a),t;i=i.sibling}throw Error(s(188))}if(n.return!==l.return)n=a,l=i;else{for(var d=!1,p=a.child;p;){if(p===n){d=!0,n=a,l=i;break}if(p===l){d=!0,l=a,n=i;break}p=p.sibling}if(!d){for(p=i.child;p;){if(p===n){d=!0,n=i,l=a;break}if(p===l){d=!0,l=i,n=a;break}p=p.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,O=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case G:return"Profiler";case U:return"StrictMode";case fe:return"Suspense";case we:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case oe:return e.displayName||"Context";case pe:return(e._context.displayName||"Context")+".Consumer";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case J:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}var Ze=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},xe=[],me=-1;function E(e){return{current:e}}function z(e){0>me||(e.current=xe[me],xe[me]=null,me--)}function P(e,t){me++,xe[me]=e.current,e.current=t}var A=E(null),I=E(null),Z=E(null),K=E(null);function Ke(e,t){switch(P(Z,t),P(I,e),P(A,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Fm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Fm(t),e=Zm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(A),P(A,e)}function Be(){z(A),z(I),z(Z)}function gn(e){e.memoizedState!==null&&P(K,e);var t=A.current,n=Zm(t,e.type);t!==n&&(P(I,e),P(A,n))}function Xl(e){I.current===e&&(z(A),z(I)),K.current===e&&(z(K),Er._currentValue=ae)}var Ni,Ma;function il(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||"",Ma=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ni+e+Ma}var Ra=!1;function rl(e,t){if(!e||Ra)return"";Ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(C){var j=C}Reflect.construct(e,[],X)}else{try{X.call()}catch(C){j=C}e.call(X.prototype)}}else{try{throw Error()}catch(C){j=C}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(C){if(C&&j&&typeof C.stack=="string")return[C.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),d=i[0],p=i[1];if(d&&p){var x=d.split(`
`),k=p.split(`
`);for(a=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;a<k.length&&!k[a].includes("DetermineComponentFrameRoot");)a++;if(l===x.length||a===k.length)for(l=x.length-1,a=k.length-1;1<=l&&0<=a&&x[l]!==k[a];)a--;for(;1<=l&&0<=a;l--,a--)if(x[l]!==k[a]){if(l!==1||a!==1)do if(l--,a--,0>a||x[l]!==k[a]){var B=`
`+x[l].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=l&&0<=a);break}}}finally{Ra=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?il(n):""}function yo(e,t){switch(e.tag){case 26:case 27:case 5:return il(e.type);case 16:return il("Lazy");case 13:return e.child!==t&&t!==null?il("Suspense Fallback"):il("Suspense");case 19:return il("SuspenseList");case 0:case 15:return rl(e.type,!1);case 11:return rl(e.type.render,!1);case 1:return rl(e.type,!0);case 31:return il("Activity");default:return""}}function Kl(e){try{var t="",n=null;do t+=yo(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ka=Object.prototype.hasOwnProperty,Ti=o.unstable_scheduleCallback,zn=o.unstable_cancelCallback,Mi=o.unstable_shouldYield,Ur=o.unstable_requestPaint,Et=o.unstable_now,ja=o.unstable_getCurrentPriorityLevel,Ri=o.unstable_ImmediatePriority,ki=o.unstable_UserBlockingPriority,$l=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Aa=o.unstable_IdlePriority,ji=o.log,Il=o.unstable_setDisableYieldValue,Pt=null,Je=null;function bn(e){if(typeof ji=="function"&&Il(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(Pt,e)}catch{}}var rt=Math.clz32?Math.clz32:Jt,sl=Math.log,Ql=Math.LN2;function Jt(e){return e>>>=0,e===0?32:31-(sl(e)/Ql|0)|0}var nt=256,Lt=262144,yn=4194304;function Bn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wt(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~i,l!==0?a=Bn(l):(d&=p,d!==0?a=Bn(d):n||(n=p&~e,n!==0&&(a=Bn(n))))):(p=l&~i,p!==0?a=Bn(p):d!==0?a=Bn(d):n||(n=l&~e,n!==0&&(a=Bn(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Fl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ai(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hr(){var e=yn;return yn<<=1,(yn&62914560)===0&&(yn=4194304),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function en(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mt(e,t,n,l,a,i){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,x=e.expirationTimes,k=e.hiddenUpdates;for(n=d&~n;0<n;){var B=31-rt(n),X=1<<B;p[B]=0,x[B]=-1;var j=k[B];if(j!==null)for(k[B]=null,B=0;B<j.length;B++){var C=j[B];C!==null&&(C.lane&=-536870913)}n&=~X}l!==0&&Di(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Di(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-rt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Da(e,t){var n=t&-t;return n=(n&42)!==0?1:Ln(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ln(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pl(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:yh(e.type))}function cl(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var tn=Math.random().toString(36).slice(2),$e="__reactFiber$"+tn,st="__reactProps$"+tn,kt="__reactContainer$"+tn,Tn="__reactEvents$"+tn,ul="__reactListeners$"+tn,Gr="__reactHandles$"+tn,fl="__reactResources$"+tn,nn="__reactMarker$"+tn;function de(e){delete e[$e],delete e[st],delete e[Tn],delete e[ul],delete e[Gr]}function Mn(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lh(e);e!==null;){if(n=e[$e])return n;e=lh(e)}return t}e=n,n=e.parentNode}return null}function dl(e){if(e=e[$e]||e[kt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Jl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ml(e){var t=e[fl];return t||(t=e[fl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[nn]=!0}var hl=new Set,Un={};function Rn(e,t){pl(e,t),pl(e+"Capture",t)}function pl(e,t){for(Un[e]=t,e=0;e<t.length;e++)hl.add(t[e])}var Oi=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$={},Wl={};function ht(e){return ka.call(Wl,e)?!0:ka.call($,e)?!1:Oi.test(e)?Wl[e]=!0:($[e]=!0,!1)}function ea(e,t,n){if(ht(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Hn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ut(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vr(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ta(e){if(!e._valueTracker){var t=Tt(e)?"checked":"value";e._valueTracker=Vr(e,t,""+e[t])}}function bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Tt(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vo=/[\n"\\]/g;function At(e){return e.replace(vo,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gn(e,t,n,l,a,i,d,p){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Oa(e,d,jt(t)):n!=null?Oa(e,d,jt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+jt(p):e.removeAttribute("name")}function Yr(e,t,n,l,a,i,d,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ta(e);return}n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),ta(e)}function Oa(e,t,n){t==="number"&&kn(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vn(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ca(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function Ci(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(s(92));if(Ze(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),ta(e)}function _l(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qr(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||xo.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xn(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&qr(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&qr(e,i,t[i])}function We(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(e){return gl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ln(){}var za=null;function zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,Vn=null;function Bi(e){var t=dl(e);if(t&&(e=t.stateNode)){var n=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[st]||null;if(!a)throw Error(s(90));Gn(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&bt(l)}break e;case"textarea":Ca(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}}}var la=!1;function Kr(e,t,n){if(la)return e(t,n);la=!0;try{var l=e(t);return l}finally{if(la=!1,(bl!==null||Vn!==null)&&(zs(),bl&&(t=bl,e=Vn,Vn=bl=null,Bi(t),e)))for(t=0;t<e.length;t++)Bi(e[t])}}function yl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[st]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(an)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){Li=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{Li=!1}var jn=null,Ui=null,Ba=null;function $r(){if(Ba)return Ba;var e,t=Ui,n=t.length,l,a="value"in jn?jn.value:jn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(l=1;l<=d&&t[n-l]===a[i-l];l++);return Ba=a.slice(e,1<l?1-l:void 0)}function La(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ua(){return!0}function Ir(){return!1}function wt(e){function t(n,l,a,i,d){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ua:Ir,this.isPropagationStopped=Ir,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),t}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=wt(Ht),ia=M({},Ht,{view:0,detail:0}),Qr=wt(ia),Hi,Ga,ra,Va=M({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:H,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ra&&(ra&&e.type==="mousemove"?(Hi=e.screenX-ra.screenX,Ga=e.screenY-ra.screenY):Ga=Hi=0,ra=e),Hi)},movementY:function(e){return"movementY"in e?e.movementY:Ga}}),Fr=wt(Va),So=M({},Va,{dataTransfer:0}),Eo=wt(So),wo=M({},ia,{relatedTarget:0}),Gi=wt(wo),Zr=M({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),No=wt(Zr),To=M({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mo=wt(To),sa=M({},Ht,{data:0}),Vi=wt(sa),Ro={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=b[e])?!!t[e]:!1}function H(){return w}var L=M({},ia,{key:function(e){if(e.key){var t=Ro[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:H,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),se=wt(L),Ne=M({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Le=wt(Ne),lt=M({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:H}),rn=wt(lt),Ie=M({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pr=wt(Ie),ko=M({},Va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yi=wt(ko),qi=M({},Ht,{newState:0,oldState:0}),jo=wt(qi),Ao=[9,13,27,32],Jr=an&&"CompositionEvent"in window,oa=null;an&&"documentMode"in document&&(oa=document.documentMode);var Do=an&&"TextEvent"in window&&!oa,Wr=an&&(!Jr||oa&&8<oa&&11>=oa),Xi=" ",nf=!1;function lf(e,t){switch(e){case"keyup":return Ao.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function Op(e,t){switch(e){case"compositionend":return af(t);case"keypress":return t.which!==32?null:(nf=!0,Xi);case"textInput":return e=t.data,e===Xi&&nf?null:e;default:return null}}function Cp(e,t){if(Ya)return e==="compositionend"||!Jr&&lf(e,t)?(e=$r(),Ba=Ui=jn=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wr&&t.locale!=="ko"?null:t.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zp[e.type]:t==="textarea"}function sf(e,t,n,l){bl?Vn?Vn.push(l):Vn=[l]:bl=l,t=Ys(t,"onChange"),0<t.length&&(n=new Ha("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Ki=null,$i=null;function Bp(e){qm(e,0)}function es(e){var t=Jl(e);if(bt(t))return e}function of(e,t){if(e==="change")return t}var cf=!1;if(an){var Oo;if(an){var Co="oninput"in document;if(!Co){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),Co=typeof uf.oninput=="function"}Oo=Co}else Oo=!1;cf=Oo&&(!document.documentMode||9<document.documentMode)}function ff(){Ki&&(Ki.detachEvent("onpropertychange",df),$i=Ki=null)}function df(e){if(e.propertyName==="value"&&es($i)){var t=[];sf(t,$i,e,zi(e)),Kr(Bp,t)}}function Lp(e,t,n){e==="focusin"?(ff(),Ki=t,$i=n,Ki.attachEvent("onpropertychange",df)):e==="focusout"&&ff()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es($i)}function Hp(e,t){if(e==="click")return es(t)}function Gp(e,t){if(e==="input"||e==="change")return es(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:Vp;function Ii(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!ka.call(t,a)||!Gt(e[a],t[a]))return!1}return!0}function mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hf(e,t){var n=mf(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mf(n)}}function pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _f(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=kn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kn(e.document)}return t}function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Yp=an&&"documentMode"in document&&11>=document.documentMode,qa=null,Bo=null,Qi=null,Lo=!1;function gf(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lo||qa==null||qa!==kn(l)||(l=qa,"selectionStart"in l&&zo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qi&&Ii(Qi,l)||(Qi=l,l=Ys(Bo,"onSelect"),0<l.length&&(t=new Ha("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=qa)))}function ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xa={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},Uo={},bf={};an&&(bf=document.createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);function ua(e){if(Uo[e])return Uo[e];if(!Xa[e])return e;var t=Xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bf)return Uo[e]=t[n];return e}var yf=ua("animationend"),vf=ua("animationiteration"),xf=ua("animationstart"),qp=ua("transitionrun"),Xp=ua("transitionstart"),Kp=ua("transitioncancel"),Sf=ua("transitionend"),Ef=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function Sn(e,t){Ef.set(e,t),Rn(t,[e])}var ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sn=[],Ka=0,Go=0;function ns(){for(var e=Ka,t=Go=Ka=0;t<e;){var n=sn[t];sn[t++]=null;var l=sn[t];sn[t++]=null;var a=sn[t];sn[t++]=null;var i=sn[t];if(sn[t++]=null,l!==null&&a!==null){var d=l.pending;d===null?a.next=a:(a.next=d.next,d.next=a),l.pending=a}i!==0&&wf(n,a,i)}}function ls(e,t,n,l){sn[Ka++]=e,sn[Ka++]=t,sn[Ka++]=n,sn[Ka++]=l,Go|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Vo(e,t,n,l){return ls(e,t,n,l),as(e)}function fa(e,t){return ls(e,null,null,t),as(e)}function wf(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-rt(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function as(e){if(50<_r)throw _r=0,Zc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $a={};function $p(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,l){return new $p(e,t,n,l)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yn(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function is(e,t,n,l,a,i){var d=0;if(l=e,typeof e=="function")Yo(e)&&(d=1);else if(typeof e=="string")d=P_(e,n,A.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=Vt(31,n,t,a),e.elementType=ge,e.lanes=i,e;case le:return da(n.children,a,i,t);case U:d=8,a|=24;break;case G:return e=Vt(12,n,t,a|2),e.elementType=G,e.lanes=i,e;case fe:return e=Vt(13,n,t,a),e.elementType=fe,e.lanes=i,e;case we:return e=Vt(19,n,t,a),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:d=10;break e;case pe:d=9;break e;case Ee:d=11;break e;case ee:d=14;break e;case J:d=16,l=null;break e}d=29,n=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=Vt(d,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function da(e,t,n,l){return e=Vt(7,e,l,t),e.lanes=n,e}function qo(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function Tf(e){var t=Vt(18,null,null,0);return t.stateNode=e,t}function Xo(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mf=new WeakMap;function on(e,t){if(typeof e=="object"&&e!==null){var n=Mf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kl(t)},Mf.set(e,t),t)}return{value:e,source:t,stack:Kl(t)}}var Ia=[],Qa=0,rs=null,Fi=0,cn=[],un=0,vl=null,An=1,Dn="";function qn(e,t){Ia[Qa++]=Fi,Ia[Qa++]=rs,rs=e,Fi=t}function Rf(e,t,n){cn[un++]=An,cn[un++]=Dn,cn[un++]=vl,vl=e;var l=An;e=Dn;var a=32-rt(l)-1;l&=~(1<<a),n+=1;var i=32-rt(t)+a;if(30<i){var d=a-a%5;i=(l&(1<<d)-1).toString(32),l>>=d,a-=d,An=1<<32-rt(t)+a|n<<a|l,Dn=i+e}else An=1<<i|n<<a|l,Dn=e}function Ko(e){e.return!==null&&(qn(e,1),Rf(e,1,0))}function $o(e){for(;e===rs;)rs=Ia[--Qa],Ia[Qa]=null,Fi=Ia[--Qa],Ia[Qa]=null;for(;e===vl;)vl=cn[--un],cn[un]=null,Dn=cn[--un],cn[un]=null,An=cn[--un],cn[un]=null}function kf(e,t){cn[un++]=An,cn[un++]=Dn,cn[un++]=vl,An=t.id,Dn=t.overflow,vl=e}var yt=null,Qe=null,je=!1,xl=null,fn=!1,Io=Error(s(519));function Sl(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zi(on(t,e)),Io}function jf(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[$e]=e,t[st]=l,n){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(n=0;n<br.length;n++)Me(br[n],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Yr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),Ci(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Im(t.textContent,n)?(l.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),l.onScroll!=null&&Me("scroll",t),l.onScrollEnd!=null&&Me("scrollend",t),l.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Sl(e,!0)}function Af(e){for(yt=e.return;yt;)switch(yt.tag){case 5:case 31:case 13:fn=!1;return;case 27:case 3:fn=!0;return;default:yt=yt.return}}function Fa(e){if(e!==yt)return!1;if(!je)return Af(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fu(e.type,e.memoizedProps)),n=!n),n&&Qe&&Sl(e),Af(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=nh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=nh(e)}else t===27?(t=Qe,Bl(e.type)?(e=_u,_u=null,Qe=e):Qe=t):Qe=yt?mn(e.stateNode.nextSibling):null;return!0}function ma(){Qe=yt=null,je=!1}function Qo(){var e=xl;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),xl=null),e}function Zi(e){xl===null?xl=[e]:xl.push(e)}var Fo=E(null),ha=null,Xn=null;function El(e,t,n){P(Fo,t._currentValue),t._currentValue=n}function Kn(e){e._currentValue=Fo.current,z(Fo)}function Zo(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Po(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var d=a.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=a;for(var x=0;x<t.length;x++)if(p.context===t[x]){i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),Zo(i.return,n,e),l||(d=null);break e}i=p.next}}else if(a.tag===18){if(d=a.return,d===null)throw Error(s(341));d.lanes|=n,i=d.alternate,i!==null&&(i.lanes|=n),Zo(d,n,e),d=null}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===e){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}}function Za(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var d=a.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var p=a.type;Gt(a.pendingProps.value,d.value)||(e!==null?e.push(p):e=[p])}}else if(a===K.current){if(d=a.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Er):e=[Er])}a=a.return}e!==null&&Po(t,e,n,l),t.flags|=262144}function ss(e){for(e=e.firstContext;e!==null;){if(!Gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pa(e){ha=e,Xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vt(e){return Df(ha,e)}function os(e,t){return ha===null&&pa(e),Df(e,t)}function Df(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xn===null){if(e===null)throw Error(s(308));Xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xn=Xn.next=t;return n}var Ip=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Qp=o.unstable_scheduleCallback,Fp=o.unstable_NormalPriority,ct={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jo(){return{controller:new Ip,data:new Map,refCount:0}}function Pi(e){e.refCount--,e.refCount===0&&Qp(Fp,function(){e.controller.abort()})}var Ji=null,Wo=0,Pa=0,Ja=null;function Zp(e,t){if(Ji===null){var n=Ji=[];Wo=0,Pa=nu(),Ja={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Wo++,t.then(Of,Of),t}function Of(){if(--Wo===0&&Ji!==null){Ja!==null&&(Ja.status="fulfilled");var e=Ji;Ji=null,Pa=0,Ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pp(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Cf=D.S;D.S=function(e,t){gm=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zp(e,t),Cf!==null&&Cf(e,t)};var _a=E(null);function ec(){var e=_a.current;return e!==null?e:Xe.pooledCache}function cs(e,t){t===null?P(_a,_a.current):P(_a,t.pool)}function zf(){var e=ec();return e===null?null:{parent:ct._currentValue,pool:e}}var Wa=Error(s(460)),tc=Error(s(474)),us=Error(s(542)),fs={then:function(){}};function Bf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hf(e),e;default:if(typeof t.status=="string")t.then(ln,ln);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hf(e),e}throw ba=t,Wa}}function ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ba=n,Wa):n}}var ba=null;function Uf(){if(ba===null)throw Error(s(459));var e=ba;return ba=null,e}function Hf(e){if(e===Wa||e===us)throw Error(s(483))}var ei=null,Wi=0;function ds(e){var t=Wi;return Wi+=1,ei===null&&(ei=[]),Lf(ei,e,t)}function er(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ms(e,t){throw t.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gf(e){function t(T,N){if(e){var R=T.deletions;R===null?(T.deletions=[N],T.flags|=16):R.push(N)}}function n(T,N){if(!e)return null;for(;N!==null;)t(T,N),N=N.sibling;return null}function l(T){for(var N=new Map;T!==null;)T.key!==null?N.set(T.key,T):N.set(T.index,T),T=T.sibling;return N}function a(T,N){return T=Yn(T,N),T.index=0,T.sibling=null,T}function i(T,N,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<N?(T.flags|=67108866,N):R):(T.flags|=67108866,N)):(T.flags|=1048576,N)}function d(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function p(T,N,R,Y){return N===null||N.tag!==6?(N=qo(R,T.mode,Y),N.return=T,N):(N=a(N,R),N.return=T,N)}function x(T,N,R,Y){var ce=R.type;return ce===le?B(T,N,R.props.children,Y,R.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===J&&ga(ce)===N.type)?(N=a(N,R.props),er(N,R),N.return=T,N):(N=is(R.type,R.key,R.props,null,T.mode,Y),er(N,R),N.return=T,N)}function k(T,N,R,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==R.containerInfo||N.stateNode.implementation!==R.implementation?(N=Xo(R,T.mode,Y),N.return=T,N):(N=a(N,R.children||[]),N.return=T,N)}function B(T,N,R,Y,ce){return N===null||N.tag!==7?(N=da(R,T.mode,Y,ce),N.return=T,N):(N=a(N,R),N.return=T,N)}function X(T,N,R){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=qo(""+N,T.mode,R),N.return=T,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Q:return R=is(N.type,N.key,N.props,null,T.mode,R),er(R,N),R.return=T,R;case F:return N=Xo(N,T.mode,R),N.return=T,N;case J:return N=ga(N),X(T,N,R)}if(Ze(N)||re(N))return N=da(N,T.mode,R,null),N.return=T,N;if(typeof N.then=="function")return X(T,ds(N),R);if(N.$$typeof===oe)return X(T,os(T,N),R);ms(T,N)}return null}function j(T,N,R,Y){var ce=N!==null?N.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ce!==null?null:p(T,N,""+R,Y);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:return R.key===ce?x(T,N,R,Y):null;case F:return R.key===ce?k(T,N,R,Y):null;case J:return R=ga(R),j(T,N,R,Y)}if(Ze(R)||re(R))return ce!==null?null:B(T,N,R,Y,null);if(typeof R.then=="function")return j(T,N,ds(R),Y);if(R.$$typeof===oe)return j(T,N,os(T,R),Y);ms(T,R)}return null}function C(T,N,R,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return T=T.get(R)||null,p(N,T,""+Y,ce);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Q:return T=T.get(Y.key===null?R:Y.key)||null,x(N,T,Y,ce);case F:return T=T.get(Y.key===null?R:Y.key)||null,k(N,T,Y,ce);case J:return Y=ga(Y),C(T,N,R,Y,ce)}if(Ze(Y)||re(Y))return T=T.get(R)||null,B(N,T,Y,ce,null);if(typeof Y.then=="function")return C(T,N,R,ds(Y),ce);if(Y.$$typeof===oe)return C(T,N,R,os(N,Y),ce);ms(N,Y)}return null}function ne(T,N,R,Y){for(var ce=null,Oe=null,ie=N,Se=N=0,ke=null;ie!==null&&Se<R.length;Se++){ie.index>Se?(ke=ie,ie=null):ke=ie.sibling;var Ce=j(T,ie,R[Se],Y);if(Ce===null){ie===null&&(ie=ke);break}e&&ie&&Ce.alternate===null&&t(T,ie),N=i(Ce,N,Se),Oe===null?ce=Ce:Oe.sibling=Ce,Oe=Ce,ie=ke}if(Se===R.length)return n(T,ie),je&&qn(T,Se),ce;if(ie===null){for(;Se<R.length;Se++)ie=X(T,R[Se],Y),ie!==null&&(N=i(ie,N,Se),Oe===null?ce=ie:Oe.sibling=ie,Oe=ie);return je&&qn(T,Se),ce}for(ie=l(ie);Se<R.length;Se++)ke=C(ie,T,Se,R[Se],Y),ke!==null&&(e&&ke.alternate!==null&&ie.delete(ke.key===null?Se:ke.key),N=i(ke,N,Se),Oe===null?ce=ke:Oe.sibling=ke,Oe=ke);return e&&ie.forEach(function(Vl){return t(T,Vl)}),je&&qn(T,Se),ce}function he(T,N,R,Y){if(R==null)throw Error(s(151));for(var ce=null,Oe=null,ie=N,Se=N=0,ke=null,Ce=R.next();ie!==null&&!Ce.done;Se++,Ce=R.next()){ie.index>Se?(ke=ie,ie=null):ke=ie.sibling;var Vl=j(T,ie,Ce.value,Y);if(Vl===null){ie===null&&(ie=ke);break}e&&ie&&Vl.alternate===null&&t(T,ie),N=i(Vl,N,Se),Oe===null?ce=Vl:Oe.sibling=Vl,Oe=Vl,ie=ke}if(Ce.done)return n(T,ie),je&&qn(T,Se),ce;if(ie===null){for(;!Ce.done;Se++,Ce=R.next())Ce=X(T,Ce.value,Y),Ce!==null&&(N=i(Ce,N,Se),Oe===null?ce=Ce:Oe.sibling=Ce,Oe=Ce);return je&&qn(T,Se),ce}for(ie=l(ie);!Ce.done;Se++,Ce=R.next())Ce=C(ie,T,Se,Ce.value,Y),Ce!==null&&(e&&Ce.alternate!==null&&ie.delete(Ce.key===null?Se:Ce.key),N=i(Ce,N,Se),Oe===null?ce=Ce:Oe.sibling=Ce,Oe=Ce);return e&&ie.forEach(function(og){return t(T,og)}),je&&qn(T,Se),ce}function qe(T,N,R,Y){if(typeof R=="object"&&R!==null&&R.type===le&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:e:{for(var ce=R.key;N!==null;){if(N.key===ce){if(ce=R.type,ce===le){if(N.tag===7){n(T,N.sibling),Y=a(N,R.props.children),Y.return=T,T=Y;break e}}else if(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===J&&ga(ce)===N.type){n(T,N.sibling),Y=a(N,R.props),er(Y,R),Y.return=T,T=Y;break e}n(T,N);break}else t(T,N);N=N.sibling}R.type===le?(Y=da(R.props.children,T.mode,Y,R.key),Y.return=T,T=Y):(Y=is(R.type,R.key,R.props,null,T.mode,Y),er(Y,R),Y.return=T,T=Y)}return d(T);case F:e:{for(ce=R.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===R.containerInfo&&N.stateNode.implementation===R.implementation){n(T,N.sibling),Y=a(N,R.children||[]),Y.return=T,T=Y;break e}else{n(T,N);break}else t(T,N);N=N.sibling}Y=Xo(R,T.mode,Y),Y.return=T,T=Y}return d(T);case J:return R=ga(R),qe(T,N,R,Y)}if(Ze(R))return ne(T,N,R,Y);if(re(R)){if(ce=re(R),typeof ce!="function")throw Error(s(150));return R=ce.call(R),he(T,N,R,Y)}if(typeof R.then=="function")return qe(T,N,ds(R),Y);if(R.$$typeof===oe)return qe(T,N,os(T,R),Y);ms(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,N!==null&&N.tag===6?(n(T,N.sibling),Y=a(N,R),Y.return=T,T=Y):(n(T,N),Y=qo(R,T.mode,Y),Y.return=T,T=Y),d(T)):n(T,N)}return function(T,N,R,Y){try{Wi=0;var ce=qe(T,N,R,Y);return ei=null,ce}catch(ie){if(ie===Wa||ie===us)throw ie;var Oe=Vt(29,ie,null,T.mode);return Oe.lanes=Y,Oe.return=T,Oe}finally{}}}var ya=Gf(!0),Vf=Gf(!1),wl=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tl(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ze&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=as(e),wf(e,null,n),t}return ls(e,l,t,n),as(e)}function tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Zl(e,n)}}function ac(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=d:i=i.next=d,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ic=!1;function nr(){if(ic){var e=Ja;if(e!==null)throw e}}function lr(e,t,n,l){ic=!1;var a=e.updateQueue;wl=!1;var i=a.firstBaseUpdate,d=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var x=p,k=x.next;x.next=null,d===null?i=k:d.next=k,d=x;var B=e.alternate;B!==null&&(B=B.updateQueue,p=B.lastBaseUpdate,p!==d&&(p===null?B.firstBaseUpdate=k:p.next=k,B.lastBaseUpdate=x))}if(i!==null){var X=a.baseState;d=0,B=k=x=null,p=i;do{var j=p.lane&-536870913,C=j!==p.lane;if(C?(Re&j)===j:(l&j)===j){j!==0&&j===Pa&&(ic=!0),B!==null&&(B=B.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ne=e,he=p;j=t;var qe=n;switch(he.tag){case 1:if(ne=he.payload,typeof ne=="function"){X=ne.call(qe,X,j);break e}X=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=he.payload,j=typeof ne=="function"?ne.call(qe,X,j):ne,j==null)break e;X=M({},X,j);break e;case 2:wl=!0}}j=p.callback,j!==null&&(e.flags|=64,C&&(e.flags|=8192),C=a.callbacks,C===null?a.callbacks=[j]:C.push(j))}else C={lane:j,tag:p.tag,payload:p.payload,callback:p.callback,next:null},B===null?(k=B=C,x=X):B=B.next=C,d|=j;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;C=p,p=C.next,C.next=null,a.lastBaseUpdate=C,a.shared.pending=null}}while(!0);B===null&&(x=X),a.baseState=x,a.firstBaseUpdate=k,a.lastBaseUpdate=B,i===null&&(a.shared.lanes=0),Al|=d,e.lanes=d,e.memoizedState=X}}function Yf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function qf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Yf(n[e],t)}var ti=E(null),hs=E(0);function Xf(e,t){e=el,P(hs,e),P(ti,t),el=e|t.baseLanes}function rc(){P(hs,el),P(ti,ti.current)}function sc(){el=hs.current,z(ti),z(hs)}var Yt=E(null),dn=null;function Ml(e){var t=e.alternate;P(at,at.current&1),P(Yt,e),dn===null&&(t===null||ti.current!==null||t.memoizedState!==null)&&(dn=e)}function oc(e){P(at,at.current),P(Yt,e),dn===null&&(dn=e)}function Kf(e){e.tag===22?(P(at,at.current),P(Yt,e),dn===null&&(dn=e)):Rl()}function Rl(){P(at,at.current),P(Yt,Yt.current)}function qt(e){z(Yt),dn===e&&(dn=null),z(at)}var at=E(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hu(n)||pu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $n=0,ve=null,Ve=null,ut=null,_s=!1,ni=!1,va=!1,gs=0,ar=0,li=null,Jp=0;function et(){throw Error(s(321))}function cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}function uc(e,t,n,l,a,i){return $n=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Rd:Nc,va=!1,i=n(l,a),va=!1,ni&&(i=If(t,n,l,a)),$f(e),i}function $f(e){D.H=sr;var t=Ve!==null&&Ve.next!==null;if($n=0,ut=Ve=ve=null,_s=!1,ar=0,li=null,t)throw Error(s(300));e===null||ft||(e=e.dependencies,e!==null&&ss(e)&&(ft=!0))}function If(e,t,n,l){ve=e;var a=0;do{if(ni&&(li=null),ar=0,ni=!1,25<=a)throw Error(s(301));if(a+=1,ut=Ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=kd,i=t(n,l)}while(ni);return i}function Wp(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?ir(t):t,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(ve.flags|=1024),t}function fc(){var e=gs!==0;return gs=0,e}function dc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mc(e){if(_s){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_s=!1}$n=0,ut=Ve=ve=null,ni=!1,ar=gs=0,li=null}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?ve.memoizedState=ut=e:ut=ut.next=e,ut}function it(){if(Ve===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=ut===null?ve.memoizedState:ut.next;if(t!==null)ut=t,Ve=e;else{if(e===null)throw ve.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ut===null?ve.memoizedState=ut=e:ut=ut.next=e}return ut}function bs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ir(e){var t=ar;return ar+=1,li===null&&(li=[]),e=Lf(li,e,t),t=ve,(ut===null?t.memoizedState:ut.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Rd:Nc),e}function ys(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ir(e);if(e.$$typeof===oe)return vt(e)}throw Error(s(438,String(e)))}function hc(e){var t=null,n=ve.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ve.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=bs(),ve.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=_e;return t.index++,n}function In(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=it();return pc(t,Ve,e)}function pc(e,t,n){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var d=a.next;a.next=i.next,i.next=d}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var p=d=null,x=null,k=t,B=!1;do{var X=k.lane&-536870913;if(X!==k.lane?(Re&X)===X:($n&X)===X){var j=k.revertLane;if(j===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),X===Pa&&(B=!0);else if(($n&j)===j){k=k.next,j===Pa&&(B=!0);continue}else X={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},x===null?(p=x=X,d=i):x=x.next=X,ve.lanes|=j,Al|=j;X=k.action,va&&n(i,X),i=k.hasEagerState?k.eagerState:n(i,X)}else j={lane:X,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},x===null?(p=x=j,d=i):x=x.next=j,ve.lanes|=X,Al|=X;k=k.next}while(k!==null&&k!==t);if(x===null?d=i:x.next=p,!Gt(i,e.memoizedState)&&(ft=!0,B&&(n=Ja,n!==null)))throw n;e.memoizedState=i,e.baseState=d,e.baseQueue=x,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function _c(e){var t=it(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do i=e(i,d.action),d=d.next;while(d!==a);Gt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Qf(e,t,n){var l=ve,a=it(),i=je;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var d=!Gt((Ve||a).memoizedState,n);if(d&&(a.memoizedState=n,ft=!0),a=a.queue,yc(Pf.bind(null,l,a,e),[e]),a.getSnapshot!==t||d||ut!==null&&ut.memoizedState.tag&1){if(l.flags|=2048,ai(9,{destroy:void 0},Zf.bind(null,l,a,n,t),null),Xe===null)throw Error(s(349));i||($n&127)!==0||Ff(l,t,n)}return n}function Ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t=bs(),ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zf(e,t,n,l){t.value=n,t.getSnapshot=l,Jf(t)&&Wf(e)}function Pf(e,t,n){return n(function(){Jf(t)&&Wf(e)})}function Jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gt(e,n)}catch{return!0}}function Wf(e){var t=fa(e,2);t!==null&&Bt(t,e,2)}function gc(e){var t=Mt();if(typeof e=="function"){var n=e;if(e=n(),va){bn(!0);try{n()}finally{bn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:e},t}function ed(e,t,n,l){return e.baseState=n,pc(e,Ve,typeof l=="function"?l:In)}function e_(e,t,n,l,a){if(Es(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};D.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,td(t,i)):(i.next=n.next,t.pending=n.next=i)}}function td(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=D.T,d={};D.T=d;try{var p=n(a,l),x=D.S;x!==null&&x(d,p),nd(e,t,p)}catch(k){bc(e,t,k)}finally{i!==null&&d.types!==null&&(i.types=d.types),D.T=i}}else try{i=n(a,l),nd(e,t,i)}catch(k){bc(e,t,k)}}function nd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){ld(e,t,l)},function(l){return bc(e,t,l)}):ld(e,t,n)}function ld(e,t,n){t.status="fulfilled",t.value=n,ad(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,td(e,n)))}function bc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,ad(t),t=t.next;while(t!==l)}e.action=null}function ad(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function id(e,t){return t}function rd(e,t){if(je){var n=Xe.formState;if(n!==null){e:{var l=ve;if(je){if(Qe){t:{for(var a=Qe,i=fn;a.nodeType!==8;){if(!i){a=null;break t}if(a=mn(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Qe=mn(a.nextSibling),l=a.data==="F!";break e}}Sl(l)}l=!1}l&&(t=n[0])}}return n=Mt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:id,lastRenderedState:t},n.queue=l,n=Nd.bind(null,ve,l),l.dispatch=n,l=gc(!1),i=wc.bind(null,ve,!1,l.queue),l=Mt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=e_.bind(null,ve,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function sd(e){var t=it();return od(t,Ve,e)}function od(e,t,n){if(t=pc(e,t,id)[0],e=vs(In)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ir(t)}catch(d){throw d===Wa?us:d}else l=t;t=it();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ve.flags|=2048,ai(9,{destroy:void 0},t_.bind(null,a,n),null)),[l,i,e]}function t_(e,t){e.action=t}function cd(e){var t=it(),n=Ve;if(n!==null)return od(t,n,e);it(),t=t.memoizedState,n=it();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function ai(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ve.updateQueue,t===null&&(t=bs(),ve.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function ud(){return it().memoizedState}function xs(e,t,n,l){var a=Mt();ve.flags|=e,a.memoizedState=ai(1|t,{destroy:void 0},n,l===void 0?null:l)}function Ss(e,t,n,l){var a=it();l=l===void 0?null:l;var i=a.memoizedState.inst;Ve!==null&&l!==null&&cc(l,Ve.memoizedState.deps)?a.memoizedState=ai(t,i,n,l):(ve.flags|=e,a.memoizedState=ai(1|t,i,n,l))}function fd(e,t){xs(8390656,8,e,t)}function yc(e,t){Ss(2048,8,e,t)}function n_(e){ve.flags|=4;var t=ve.updateQueue;if(t===null)t=bs(),ve.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function dd(e){var t=it().memoizedState;return n_({ref:t,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function md(e,t){return Ss(4,2,e,t)}function hd(e,t){return Ss(4,4,e,t)}function pd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _d(e,t,n){n=n!=null?n.concat([e]):null,Ss(4,4,pd.bind(null,t,e),n)}function vc(){}function gd(e,t){var n=it();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&cc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function bd(e,t){var n=it();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&cc(t,l[1]))return l[0];if(l=e(),va){bn(!0);try{e()}finally{bn(!1)}}return n.memoizedState=[l,t],l}function xc(e,t,n){return n===void 0||($n&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ym(),ve.lanes|=e,Al|=e,n)}function yd(e,t,n,l){return Gt(n,t)?n:ti.current!==null?(e=xc(e,n,l),Gt(e,t)||(ft=!0),e):($n&42)===0||($n&1073741824)!==0&&(Re&261930)===0?(ft=!0,e.memoizedState=n):(e=ym(),ve.lanes|=e,Al|=e,t)}function vd(e,t,n,l,a){var i=V.p;V.p=i!==0&&8>i?i:8;var d=D.T,p={};D.T=p,wc(e,!1,t,n);try{var x=a(),k=D.S;if(k!==null&&k(p,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var B=Pp(x,l);rr(e,t,B,$t(e))}else rr(e,t,l,$t(e))}catch(X){rr(e,t,{then:function(){},status:"rejected",reason:X},$t())}finally{V.p=i,d!==null&&p.types!==null&&(d.types=p.types),D.T=d}}function l_(){}function Sc(e,t,n,l){if(e.tag!==5)throw Error(s(476));var a=xd(e).queue;vd(e,a,t,ae,n===null?l_:function(){return Sd(e),n(l)})}function xd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sd(e){var t=xd(e);t.next===null&&(t=e.alternate.memoizedState),rr(e,t.next.queue,{},$t())}function Ec(){return vt(Er)}function Ed(){return it().memoizedState}function wd(){return it().memoizedState}function a_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$t();e=Nl(n);var l=Tl(t,e,n);l!==null&&(Bt(l,t,n),tr(l,t,n)),t={cache:Jo()},e.payload=t;return}t=t.return}}function i_(e,t,n){var l=$t();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Es(e)?Td(t,n):(n=Vo(e,t,n,l),n!==null&&(Bt(n,e,l),Md(n,t,l)))}function Nd(e,t,n){var l=$t();rr(e,t,n,l)}function rr(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Es(e))Td(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,p=i(d,n);if(a.hasEagerState=!0,a.eagerState=p,Gt(p,d))return ls(e,t,a,0),Xe===null&&ns(),!1}catch{}finally{}if(n=Vo(e,t,a,l),n!==null)return Bt(n,e,l),Md(n,t,l),!0}return!1}function wc(e,t,n,l){if(l={lane:2,revertLane:nu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Es(e)){if(t)throw Error(s(479))}else t=Vo(e,n,l,2),t!==null&&Bt(t,e,2)}function Es(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Td(e,t){ni=_s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Md(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Zl(e,n)}}var sr={readContext:vt,use:ys,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};sr.useEffectEvent=et;var Rd={readContext:vt,use:ys,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:fd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,xs(4194308,4,pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xs(4194308,4,e,t)},useInsertionEffect:function(e,t){xs(4,2,e,t)},useMemo:function(e,t){var n=Mt();t=t===void 0?null:t;var l=e();if(va){bn(!0);try{e()}finally{bn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Mt();if(n!==void 0){var a=n(t);if(va){bn(!0);try{n(t)}finally{bn(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=i_.bind(null,ve,e),[l.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,n=Nd.bind(null,ve,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vc,useDeferredValue:function(e,t){var n=Mt();return xc(n,e,t)},useTransition:function(){var e=gc(!1);return e=vd.bind(null,ve,e.queue,!0,!1),Mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ve,a=Mt();if(je){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Xe===null)throw Error(s(349));(Re&127)!==0||Ff(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,fd(Pf.bind(null,l,i,e),[e]),l.flags|=2048,ai(9,{destroy:void 0},Zf.bind(null,l,i,n,t),null),n},useId:function(){var e=Mt(),t=Xe.identifierPrefix;if(je){var n=Dn,l=An;n=(l&~(1<<32-rt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=gs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Jp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ec,useFormState:rd,useActionState:rd,useOptimistic:function(e){var t=Mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wc.bind(null,ve,!0,n),n.dispatch=t,[e,t]},useMemoCache:hc,useCacheRefresh:function(){return Mt().memoizedState=a_.bind(null,ve)},useEffectEvent:function(e){var t=Mt(),n={impl:e};return t.memoizedState=n,function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Nc={readContext:vt,use:ys,useCallback:gd,useContext:vt,useEffect:yc,useImperativeHandle:_d,useInsertionEffect:md,useLayoutEffect:hd,useMemo:bd,useReducer:vs,useRef:ud,useState:function(){return vs(In)},useDebugValue:vc,useDeferredValue:function(e,t){var n=it();return yd(n,Ve.memoizedState,e,t)},useTransition:function(){var e=vs(In)[0],t=it().memoizedState;return[typeof e=="boolean"?e:ir(e),t]},useSyncExternalStore:Qf,useId:Ed,useHostTransitionStatus:Ec,useFormState:sd,useActionState:sd,useOptimistic:function(e,t){var n=it();return ed(n,Ve,e,t)},useMemoCache:hc,useCacheRefresh:wd};Nc.useEffectEvent=dd;var kd={readContext:vt,use:ys,useCallback:gd,useContext:vt,useEffect:yc,useImperativeHandle:_d,useInsertionEffect:md,useLayoutEffect:hd,useMemo:bd,useReducer:_c,useRef:ud,useState:function(){return _c(In)},useDebugValue:vc,useDeferredValue:function(e,t){var n=it();return Ve===null?xc(n,e,t):yd(n,Ve.memoizedState,e,t)},useTransition:function(){var e=_c(In)[0],t=it().memoizedState;return[typeof e=="boolean"?e:ir(e),t]},useSyncExternalStore:Qf,useId:Ed,useHostTransitionStatus:Ec,useFormState:cd,useActionState:cd,useOptimistic:function(e,t){var n=it();return Ve!==null?ed(n,Ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hc,useCacheRefresh:wd};kd.useEffectEvent=dd;function Tc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=$t(),a=Nl(l);a.payload=t,n!=null&&(a.callback=n),t=Tl(e,a,l),t!==null&&(Bt(t,e,l),tr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=$t(),a=Nl(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Tl(e,a,l),t!==null&&(Bt(t,e,l),tr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$t(),l=Nl(n);l.tag=2,t!=null&&(l.callback=t),t=Tl(e,l,n),t!==null&&(Bt(t,e,n),tr(t,e,n))}};function jd(e,t,n,l,a,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,d):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,l)||!Ii(a,i):!0}function Ad(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Mc.enqueueReplaceState(t,t.state,null)}function xa(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=M({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Dd(e){ts(e)}function Od(e){console.error(e)}function Cd(e){ts(e)}function ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function zd(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Rc(e,t,n){return n=Nl(n),n.tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Bd(e){return e=Nl(e),e.tag=3,e}function Ld(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){zd(t,n,l)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){zd(t,n,l),typeof a!="function"&&(Dl===null?Dl=new Set([this]):Dl.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function r_(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Za(t,n,a,!0),n=Yt.current,n!==null){switch(n.tag){case 31:case 13:return dn===null?Bs():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===fs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Wc(e,l,a)),!1;case 22:return n.flags|=65536,l===fs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Wc(e,l,a)),!1}throw Error(s(435,n.tag))}return Wc(e,l,a),Bs(),!1}if(je)return t=Yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Io&&(e=Error(s(422),{cause:l}),Zi(on(e,n)))):(l!==Io&&(t=Error(s(423),{cause:l}),Zi(on(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=on(l,n),a=Rc(e.stateNode,l,a),ac(e,a),tt!==4&&(tt=2)),!1;var i=Error(s(520),{cause:l});if(i=on(i,n),pr===null?pr=[i]:pr.push(i),tt!==4&&(tt=2),t===null)return!0;l=on(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Rc(n.stateNode,l,e),ac(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Dl===null||!Dl.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Bd(a),Ld(a,e,n,l),ac(n,a),!1}n=n.return}while(n!==null);return!1}var kc=Error(s(461)),ft=!1;function xt(e,t,n,l){t.child=e===null?Vf(t,null,n,l):ya(t,e.child,n,l)}function Ud(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var d={};for(var p in l)p!=="ref"&&(d[p]=l[p])}else d=l;return pa(t),l=uc(e,t,n,d,i,a),p=fc(),e!==null&&!ft?(dc(e,t,a),Qn(e,t,a)):(je&&p&&Ko(t),t.flags|=1,xt(e,t,l,a),t.child)}function Hd(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Yo(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Gd(e,t,i,l,a)):(e=is(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Lc(e,a)){var d=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(d,l)&&e.ref===t.ref)return Qn(e,t,a)}return t.flags|=1,e=Yn(i,l),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(Ii(i,l)&&e.ref===t.ref)if(ft=!1,t.pendingProps=l=i,Lc(e,a))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Qn(e,t,a)}return jc(e,t,n,l,a)}function Vd(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Yd(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cs(t,i!==null?i.cachePool:null),i!==null?Xf(t,i):rc(),Kf(t);else return l=t.lanes=536870912,Yd(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(cs(t,i.cachePool),Xf(t,i),Rl(),t.memoizedState=null):(e!==null&&cs(t,null),rc(),Rl());return xt(e,t,a,n),t.child}function or(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Yd(e,t,n,l,a){var i=ec();return i=i===null?null:{parent:ct._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&cs(t,null),rc(),Kf(t),e!==null&&Za(e,t,l,!0),t.childLanes=a,null}function Ns(e,t){return t=Ms({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qd(e,t,n){return ya(t,e.child,null,n),e=Ns(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function s_(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(l.mode==="hidden")return e=Ns(t,l),t.lanes=536870912,or(null,e);if(oc(t),(e=Qe)?(e=th(e,fn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vl!==null?{id:An,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},n=Tf(e),n.return=t,t.child=n,yt=t,Qe=null)):e=null,e===null)throw Sl(t);return t.lanes=536870912,null}return Ns(t,l)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(oc(t),a)if(t.flags&256)t.flags&=-257,t=qd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ft||Za(e,t,n,!1),a=(n&e.childLanes)!==0,ft||a){if(l=Xe,l!==null&&(d=Da(l,n),d!==0&&d!==i.retryLane))throw i.retryLane=d,fa(e,d),Bt(l,e,d),kc;Bs(),t=qd(e,t,n)}else e=i.treeContext,Qe=mn(d.nextSibling),yt=t,je=!0,xl=null,fn=!1,e!==null&&kf(t,e),t=Ns(t,l),t.flags|=4096;return t}return e=Yn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ts(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function jc(e,t,n,l,a){return pa(t),n=uc(e,t,n,l,void 0,a),l=fc(),e!==null&&!ft?(dc(e,t,a),Qn(e,t,a)):(je&&l&&Ko(t),t.flags|=1,xt(e,t,n,a),t.child)}function Xd(e,t,n,l,a,i){return pa(t),t.updateQueue=null,n=If(t,l,n,a),$f(e),l=fc(),e!==null&&!ft?(dc(e,t,i),Qn(e,t,i)):(je&&l&&Ko(t),t.flags|=1,xt(e,t,n,i),t.child)}function Kd(e,t,n,l,a){if(pa(t),t.stateNode===null){var i=$a,d=n.contextType;typeof d=="object"&&d!==null&&(i=vt(d)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},nc(t),d=n.contextType,i.context=typeof d=="object"&&d!==null?vt(d):$a,i.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Tc(t,n,d,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&Mc.enqueueReplaceState(i,i.state,null),lr(t,l,i,a),nr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var p=t.memoizedProps,x=xa(n,p);i.props=x;var k=i.context,B=n.contextType;d=$a,typeof B=="object"&&B!==null&&(d=vt(B));var X=n.getDerivedStateFromProps;B=typeof X=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,B||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||k!==d)&&Ad(t,i,l,d),wl=!1;var j=t.memoizedState;i.state=j,lr(t,l,i,a),nr(),k=t.memoizedState,p||j!==k||wl?(typeof X=="function"&&(Tc(t,n,X,l),k=t.memoizedState),(x=wl||jd(t,n,x,l,j,k,d))?(B||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=k),i.props=l,i.state=k,i.context=d,l=x):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lc(e,t),d=t.memoizedProps,B=xa(n,d),i.props=B,X=t.pendingProps,j=i.context,k=n.contextType,x=$a,typeof k=="object"&&k!==null&&(x=vt(k)),p=n.getDerivedStateFromProps,(k=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==X||j!==x)&&Ad(t,i,l,x),wl=!1,j=t.memoizedState,i.state=j,lr(t,l,i,a),nr();var C=t.memoizedState;d!==X||j!==C||wl||e!==null&&e.dependencies!==null&&ss(e.dependencies)?(typeof p=="function"&&(Tc(t,n,p,l),C=t.memoizedState),(B=wl||jd(t,n,B,l,j,C,x)||e!==null&&e.dependencies!==null&&ss(e.dependencies))?(k||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,C,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,C,x)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=x,l=B):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ts(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ya(t,e.child,null,a),t.child=ya(t,null,n,a)):xt(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Qn(e,t,a),e}function $d(e,t,n,l){return ma(),t.flags|=256,xt(e,t,n,l),t.child}var Ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dc(e){return{baseLanes:e,cachePool:zf()}}function Oc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kt),e}function Id(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),d&&(a=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(a?Ml(t):Rl(),(e=Qe)?(e=th(e,fn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vl!==null?{id:An,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},n=Tf(e),n.return=t,t.child=n,yt=t,Qe=null)):e=null,e===null)throw Sl(t);return pu(e)?t.lanes=32:t.lanes=536870912,null}var p=l.children;return l=l.fallback,a?(Rl(),a=t.mode,p=Ms({mode:"hidden",children:p},a),l=da(l,a,n,null),p.return=t,l.return=t,p.sibling=l,t.child=p,l=t.child,l.memoizedState=Dc(n),l.childLanes=Oc(e,d,n),t.memoizedState=Ac,or(null,l)):(Ml(t),Cc(t,p))}var x=e.memoizedState;if(x!==null&&(p=x.dehydrated,p!==null)){if(i)t.flags&256?(Ml(t),t.flags&=-257,t=zc(e,t,n)):t.memoizedState!==null?(Rl(),t.child=e.child,t.flags|=128,t=null):(Rl(),p=l.fallback,a=t.mode,l=Ms({mode:"visible",children:l.children},a),p=da(p,a,n,null),p.flags|=2,l.return=t,p.return=t,l.sibling=p,t.child=l,ya(t,e.child,null,n),l=t.child,l.memoizedState=Dc(n),l.childLanes=Oc(e,d,n),t.memoizedState=Ac,t=or(null,l));else if(Ml(t),pu(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var k=d.dgst;d=k,l=Error(s(419)),l.stack="",l.digest=d,Zi({value:l,source:null,stack:null}),t=zc(e,t,n)}else if(ft||Za(e,t,n,!1),d=(n&e.childLanes)!==0,ft||d){if(d=Xe,d!==null&&(l=Da(d,n),l!==0&&l!==x.retryLane))throw x.retryLane=l,fa(e,l),Bt(d,e,l),kc;hu(p)||Bs(),t=zc(e,t,n)}else hu(p)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Qe=mn(p.nextSibling),yt=t,je=!0,xl=null,fn=!1,e!==null&&kf(t,e),t=Cc(t,l.children),t.flags|=4096);return t}return a?(Rl(),p=l.fallback,a=t.mode,x=e.child,k=x.sibling,l=Yn(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,k!==null?p=Yn(k,p):(p=da(p,a,n,null),p.flags|=2),p.return=t,l.return=t,l.sibling=p,t.child=l,or(null,l),l=t.child,p=e.child.memoizedState,p===null?p=Dc(n):(a=p.cachePool,a!==null?(x=ct._currentValue,a=a.parent!==x?{parent:x,pool:x}:a):a=zf(),p={baseLanes:p.baseLanes|n,cachePool:a}),l.memoizedState=p,l.childLanes=Oc(e,d,n),t.memoizedState=Ac,or(e.child,l)):(Ml(t),n=e.child,e=n.sibling,n=Yn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=Ms({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ms(e,t){return e=Vt(22,e,null,t),e.lanes=0,e}function zc(e,t,n){return ya(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qd(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Zo(e.return,t,n)}function Bc(e,t,n,l,a,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=n,d.tailMode=a,d.treeForkCount=i)}function Fd(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var d=at.current,p=(d&2)!==0;if(p?(d=d&1|2,t.flags|=128):d&=1,P(at,d),xt(e,t,l,n),l=je?Fi:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,n,t);else if(e.tag===19)Qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ps(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Bc(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ps(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Bc(t,!0,n,null,i,l);break;case"together":Bc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Al|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Za(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ss(e)))}function o_(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),El(t,ct,e.memoizedState.cache),ma();break;case 27:case 5:gn(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:El(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ml(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Id(e,t,n):(Ml(t),e=Qn(e,t,n),e!==null?e.sibling:null);Ml(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Za(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Fd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),P(at,at.current),l)break;return null;case 22:return t.lanes=0,Vd(e,t,n,t.pendingProps);case 24:El(t,ct,e.memoizedState.cache)}return Qn(e,t,n)}function Zd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!Lc(e,n)&&(t.flags&128)===0)return ft=!1,o_(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,je&&(t.flags&1048576)!==0&&Rf(t,Fi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ga(t.elementType),t.type=e,typeof e=="function")Yo(e)?(l=xa(e,l),t.tag=1,t=Kd(null,t,e,l,n)):(t.tag=0,t=jc(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===Ee){t.tag=11,t=Ud(null,t,e,l,n);break e}else if(a===ee){t.tag=14,t=Hd(null,t,e,l,n);break e}}throw t=Ae(e)||e,Error(s(306,t,""))}}return t;case 0:return jc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=xa(l,t.pendingProps),Kd(e,t,l,a,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,lc(e,t),lr(t,l,null,n);var d=t.memoizedState;if(l=d.cache,El(t,ct,l),l!==i.cache&&Po(t,[ct],n,!0),nr(),l=d.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=$d(e,t,l,n);break e}else if(l!==a){a=on(Error(s(424)),t),Zi(a),t=$d(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=mn(e.firstChild),yt=t,je=!0,xl=null,fn=!0,n=Vf(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ma(),l===a){t=Qn(e,t,n);break e}xt(e,t,l,n)}t=t.child}return t;case 26:return Ts(e,t),e===null?(n=sh(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,l=qs(Z.current).createElement(n),l[$e]=t,l[st]=e,St(l,n,e),ot(l),t.stateNode=l):t.memoizedState=sh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return gn(t),e===null&&je&&(l=t.stateNode=ah(t.type,t.pendingProps,Z.current),yt=t,fn=!0,a=Qe,Bl(t.type)?(_u=a,Qe=mn(l.firstChild)):Qe=a),xt(e,t,t.pendingProps.children,n),Ts(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((a=l=Qe)&&(l=U_(l,t.type,t.pendingProps,fn),l!==null?(t.stateNode=l,yt=t,Qe=mn(l.firstChild),fn=!1,a=!0):a=!1),a||Sl(t)),gn(t),a=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,l=i.children,fu(a,i)?l=null:d!==null&&fu(a,d)&&(t.flags|=32),t.memoizedState!==null&&(a=uc(e,t,Wp,null,null,n),Er._currentValue=a),Ts(e,t),xt(e,t,l,n),t.child;case 6:return e===null&&je&&((e=n=Qe)&&(n=H_(n,t.pendingProps,fn),n!==null?(t.stateNode=n,yt=t,Qe=null,e=!0):e=!1),e||Sl(t)),null;case 13:return Id(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ya(t,null,l,n):xt(e,t,l,n),t.child;case 11:return Ud(e,t,t.type,t.pendingProps,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,El(t,t.type,l.value),xt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,pa(t),a=vt(a),l=l(a),t.flags|=1,xt(e,t,l,n),t.child;case 14:return Hd(e,t,t.type,t.pendingProps,n);case 15:return Gd(e,t,t.type,t.pendingProps,n);case 19:return Fd(e,t,n);case 31:return s_(e,t,n);case 22:return Vd(e,t,n,t.pendingProps);case 24:return pa(t),l=vt(ct),e===null?(a=ec(),a===null&&(a=Xe,i=Jo(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},nc(t),El(t,ct,a)):((e.lanes&n)!==0&&(lc(e,t),lr(t,null,null,n),nr()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),El(t,ct,l)):(l=i.cache,El(t,ct,l),l!==a.cache&&Po(t,[ct],n,!0))),xt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Fn(e){e.flags|=4}function Uc(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Em())e.flags|=8192;else throw ba=fs,tc}else e.flags&=-16777217}function Pd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dh(t))if(Em())e.flags|=8192;else throw ba=fs,tc}function Rs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hr():536870912,e.lanes|=t,oi|=t)}function cr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function c_(e,t,n){var l=t.pendingProps;switch($o(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kn(ct),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?Fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qo())),Fe(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(Fn(t),i!==null?(Fe(t),Pd(t,i)):(Fe(t),Uc(t,a,null,l,n))):i?i!==e.memoizedState?(Fn(t),Fe(t),Pd(t,i)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Fn(t),Fe(t),Uc(t,a,e,l,n)),null;case 27:if(Xl(t),n=Z.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Fn(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Fe(t),null}e=A.current,Fa(t)?jf(t):(e=ah(a,l,n),t.stateNode=e,Fn(t))}return Fe(t),null;case 5:if(Xl(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Fn(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Fe(t),null}if(i=A.current,Fa(t))jf(t);else{var d=qs(Z.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?d.createElement(a,{is:l.is}):d.createElement(a)}}i[$e]=t,i[st]=l;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(St(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Fn(t)}}return Fe(t),Uc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Fn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=Z.current,Fa(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=yt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Im(e.nodeValue,n)),e||Sl(t,!0)}else e=qs(e).createTextNode(l),e[$e]=t,t.stateNode=e}return Fe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Fa(t),n!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[$e]=t}else ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else n=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Fe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Fa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[$e]=t}else ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),a=!1}else a=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rs(t,t.updateQueue),Fe(t),null);case 4:return Be(),e===null&&ru(t.stateNode.containerInfo),Fe(t),null;case 10:return Kn(t.type),Fe(t),null;case 19:if(z(at),l=t.memoizedState,l===null)return Fe(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)cr(l,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ps(e),i!==null){for(t.flags|=128,cr(l,!1),e=i.updateQueue,t.updateQueue=e,Rs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nf(n,e),n=n.sibling;return P(at,at.current&1|2),je&&qn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Et()>Os&&(t.flags|=128,a=!0,cr(l,!1),t.lanes=4194304)}else{if(!a)if(e=ps(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rs(t,e),cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!je)return Fe(t),null}else 2*Et()-l.renderingStartTime>Os&&n!==536870912&&(t.flags|=128,a=!0,cr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Et(),e.sibling=null,n=at.current,P(at,a?n&1|2:n&1),je&&qn(t,l.treeForkCount),e):(Fe(t),null);case 22:case 23:return qt(t),sc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&Rs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&z(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Kn(ct),Fe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function u_(e,t){switch($o(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(ct),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xl(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(s(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(at),null;case 4:return Be(),null;case 10:return Kn(t.type),null;case 22:case 23:return qt(t),sc(),e!==null&&z(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kn(ct),null;case 25:return null;default:return null}}function Jd(e,t){switch($o(t),t.tag){case 3:Kn(ct),Be();break;case 26:case 27:case 5:Xl(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:z(at);break;case 10:Kn(t.type);break;case 22:case 23:qt(t),sc(),e!==null&&z(_a);break;case 24:Kn(ct)}}function ur(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,d=n.inst;l=i(),d.destroy=l}n=n.next}while(n!==a)}}catch(p){He(t,t.return,p)}}function kl(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var d=l.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,a=t;var x=n,k=p;try{k()}catch(B){He(a,x,B)}}}l=l.next}while(l!==i)}}catch(B){He(t,t.return,B)}}function Wd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qf(t,n)}catch(l){He(e,e.return,l)}}}function em(e,t,n){n.props=xa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){He(e,t,l)}}function fr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){He(e,t,a)}}function On(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){He(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){He(e,t,a)}else n.current=null}function tm(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){He(e,e.return,a)}}function Hc(e,t,n){try{var l=e.stateNode;D_(l,e.type,n,t),l[st]=t}catch(a){He(e,e.return,a)}}function nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bl(e.type)||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(l!==4&&(l===27&&Bl(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}function ks(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Bl(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function lm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);St(t,l,n),t[$e]=e,t[st]=n}catch(i){He(e,e.return,i)}}var Zn=!1,dt=!1,Yc=!1,am=typeof WeakSet=="function"?WeakSet:Set,_t=null;function f_(e,t){if(e=e.containerInfo,cu=Zs,e=_f(e),zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var d=0,p=-1,x=-1,k=0,B=0,X=e,j=null;t:for(;;){for(var C;X!==n||a!==0&&X.nodeType!==3||(p=d+a),X!==i||l!==0&&X.nodeType!==3||(x=d+l),X.nodeType===3&&(d+=X.nodeValue.length),(C=X.firstChild)!==null;)j=X,X=C;for(;;){if(X===e)break t;if(j===n&&++k===a&&(p=d),j===i&&++B===l&&(x=d),(C=X.nextSibling)!==null)break;X=j,j=X.parentNode}X=C}n=p===-1||x===-1?null:{start:p,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(uu={focusedElem:e,selectionRange:n},Zs=!1,_t=t;_t!==null;)if(t=_t,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_t=e;else for(;_t!==null;){switch(t=_t,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var ne=xa(n.type,a);e=l.getSnapshotBeforeUpdate(ne,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(he){He(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)mu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,_t=e;break}_t=t.return}}function im(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n),l&4&&ur(5,n);break;case 1:if(Jn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){He(n,n.return,d)}else{var a=xa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){He(n,n.return,d)}}l&64&&Wd(n),l&512&&fr(n,n.return);break;case 3:if(Jn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qf(e,t)}catch(d){He(n,n.return,d)}}break;case 27:t===null&&l&4&&lm(n);case 26:case 5:Jn(e,n),t===null&&l&4&&tm(n),l&512&&fr(n,n.return);break;case 12:Jn(e,n);break;case 31:Jn(e,n),l&4&&om(e,n);break;case 13:Jn(e,n),l&4&&cm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=v_.bind(null,n),G_(e,n))));break;case 22:if(l=n.memoizedState!==null||Zn,!l){t=t!==null&&t.memoizedState!==null||dt,a=Zn;var i=dt;Zn=l,(dt=t)&&!i?Wn(e,n,(n.subtreeFlags&8772)!==0):Jn(e,n),Zn=a,dt=i}break;case 30:break;default:Jn(e,n)}}function rm(e){var t=e.alternate;t!==null&&(e.alternate=null,rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&de(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Dt=!1;function Pn(e,t,n){for(n=n.child;n!==null;)sm(e,t,n),n=n.sibling}function sm(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Pt,n)}catch{}switch(n.tag){case 26:dt||On(n,t),Pn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:dt||On(n,t);var l=Pe,a=Dt;Bl(n.type)&&(Pe=n.stateNode,Dt=!1),Pn(e,t,n),vr(n.stateNode),Pe=l,Dt=a;break;case 5:dt||On(n,t);case 6:if(l=Pe,a=Dt,Pe=null,Pn(e,t,n),Pe=l,Dt=a,Pe!==null)if(Dt)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode)}catch(i){He(n,t,i)}else try{Pe.removeChild(n.stateNode)}catch(i){He(n,t,i)}break;case 18:Pe!==null&&(Dt?(e=Pe,Wm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),_i(e)):Wm(Pe,n.stateNode));break;case 4:l=Pe,a=Dt,Pe=n.stateNode.containerInfo,Dt=!0,Pn(e,t,n),Pe=l,Dt=a;break;case 0:case 11:case 14:case 15:kl(2,n,t),dt||kl(4,n,t),Pn(e,t,n);break;case 1:dt||(On(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&em(n,t,l)),Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:dt=(l=dt)||n.memoizedState!==null,Pn(e,t,n),dt=l;break;default:Pn(e,t,n)}}function om(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_i(e)}catch(n){He(t,t.return,n)}}}function cm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_i(e)}catch(n){He(t,t.return,n)}}function d_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new am),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new am),t;default:throw Error(s(435,e.tag))}}function js(e,t){var n=d_(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=x_.bind(null,e,l);l.then(a,a)}})}function Ot(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 27:if(Bl(p.type)){Pe=p.stateNode,Dt=!1;break e}break;case 5:Pe=p.stateNode,Dt=!1;break e;case 3:case 4:Pe=p.stateNode.containerInfo,Dt=!0;break e}p=p.return}if(Pe===null)throw Error(s(160));sm(i,d,a),Pe=null,Dt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)um(t,e),t=t.sibling}var En=null;function um(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(t,e),Ct(e),l&4&&(kl(3,e,e.return),ur(3,e),kl(5,e,e.return));break;case 1:Ot(t,e),Ct(e),l&512&&(dt||n===null||On(n,n.return)),l&64&&Zn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=En;if(Ot(t,e),Ct(e),l&512&&(dt||n===null||On(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[nn]||i[$e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),St(i,l,n),i[$e]=e,ot(i),l=i;break e;case"link":var d=uh("link","href",a).get(l+(n.href||""));if(d){for(var p=0;p<d.length;p++)if(i=d[p],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(p,1);break t}}i=a.createElement(l),St(i,l,n),a.head.appendChild(i);break;case"meta":if(d=uh("meta","content",a).get(l+(n.content||""))){for(p=0;p<d.length;p++)if(i=d[p],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(p,1);break t}}i=a.createElement(l),St(i,l,n),a.head.appendChild(i);break;default:throw Error(s(468,l))}i[$e]=e,ot(i),l=i}e.stateNode=l}else fh(a,e.type,e.stateNode);else e.stateNode=ch(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?fh(a,e.type,e.stateNode):ch(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Hc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ot(t,e),Ct(e),l&512&&(dt||n===null||On(n,n.return)),n!==null&&l&4&&Hc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ot(t,e),Ct(e),l&512&&(dt||n===null||On(n,n.return)),e.flags&32){a=e.stateNode;try{_l(a,"")}catch(ne){He(e,e.return,ne)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Hc(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Yc=!0);break;case 6:if(Ot(t,e),Ct(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ne){He(e,e.return,ne)}}break;case 3:if($s=null,a=En,En=Xs(t.containerInfo),Ot(t,e),En=a,Ct(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(t.containerInfo)}catch(ne){He(e,e.return,ne)}Yc&&(Yc=!1,fm(e));break;case 4:l=En,En=Xs(e.stateNode.containerInfo),Ot(t,e),Ct(e),En=l;break;case 12:Ot(t,e),Ct(e);break;case 31:Ot(t,e),Ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,js(e,l)));break;case 13:Ot(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ds=Et()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,js(e,l)));break;case 22:a=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,k=Zn,B=dt;if(Zn=k||a,dt=B||x,Ot(t,e),dt=B,Zn=k,Ct(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||x||Zn||dt||Sa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(i=x.stateNode,a)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=x.stateNode;var X=x.memoizedProps.style,j=X!=null&&X.hasOwnProperty("display")?X.display:null;p.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(ne){He(x,x.return,ne)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=a?"":x.memoizedProps}catch(ne){He(x,x.return,ne)}}}else if(t.tag===18){if(n===null){x=t;try{var C=x.stateNode;a?eh(C,!0):eh(x.stateNode,!1)}catch(ne){He(x,x.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,js(e,n))));break;case 19:Ot(t,e),Ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,js(e,l)));break;case 30:break;case 21:break;default:Ot(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(nm(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,i=Gc(e);ks(e,i,a);break;case 5:var d=n.stateNode;n.flags&32&&(_l(d,""),n.flags&=-33);var p=Gc(e);ks(e,p,d);break;case 3:case 4:var x=n.stateNode.containerInfo,k=Gc(e);Vc(e,k,x);break;default:throw Error(s(161))}}catch(B){He(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)im(e,t.alternate,t),t=t.sibling}function Sa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:kl(4,t,t.return),Sa(t);break;case 1:On(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&em(t,t.return,n),Sa(t);break;case 27:vr(t.stateNode);case 26:case 5:On(t,t.return),Sa(t);break;case 22:t.memoizedState===null&&Sa(t);break;case 30:Sa(t);break;default:Sa(t)}e=e.sibling}}function Wn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:Wn(a,i,n),ur(4,i);break;case 1:if(Wn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(k){He(l,l.return,k)}if(l=i,a=l.updateQueue,a!==null){var p=l.stateNode;try{var x=a.shared.hiddenCallbacks;if(x!==null)for(a.shared.hiddenCallbacks=null,a=0;a<x.length;a++)Yf(x[a],p)}catch(k){He(l,l.return,k)}}n&&d&64&&Wd(i),fr(i,i.return);break;case 27:lm(i);case 26:case 5:Wn(a,i,n),n&&l===null&&d&4&&tm(i),fr(i,i.return);break;case 12:Wn(a,i,n);break;case 31:Wn(a,i,n),n&&d&4&&om(a,i);break;case 13:Wn(a,i,n),n&&d&4&&cm(a,i);break;case 22:i.memoizedState===null&&Wn(a,i,n),fr(i,i.return);break;case 30:break;default:Wn(a,i,n)}t=t.sibling}}function qc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Pi(n))}function Xc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pi(e))}function wn(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dm(e,t,n,l),t=t.sibling}function dm(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:wn(e,t,n,l),a&2048&&ur(9,t);break;case 1:wn(e,t,n,l);break;case 3:wn(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pi(e)));break;case 12:if(a&2048){wn(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,p=i.onPostCommit;typeof p=="function"&&p(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){He(t,t.return,x)}}else wn(e,t,n,l);break;case 31:wn(e,t,n,l);break;case 13:wn(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?wn(e,t,n,l):dr(e,t):i._visibility&2?wn(e,t,n,l):(i._visibility|=2,ii(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&qc(d,t);break;case 24:wn(e,t,n,l),a&2048&&Xc(t.alternate,t);break;default:wn(e,t,n,l)}}function ii(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,p=n,x=l,k=d.flags;switch(d.tag){case 0:case 11:case 15:ii(i,d,p,x,a),ur(8,d);break;case 23:break;case 22:var B=d.stateNode;d.memoizedState!==null?B._visibility&2?ii(i,d,p,x,a):dr(i,d):(B._visibility|=2,ii(i,d,p,x,a)),a&&k&2048&&qc(d.alternate,d);break;case 24:ii(i,d,p,x,a),a&&k&2048&&Xc(d.alternate,d);break;default:ii(i,d,p,x,a)}t=t.sibling}}function dr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:dr(n,l),a&2048&&qc(l.alternate,l);break;case 24:dr(n,l),a&2048&&Xc(l.alternate,l);break;default:dr(n,l)}t=t.sibling}}var mr=8192;function ri(e,t,n){if(e.subtreeFlags&mr)for(e=e.child;e!==null;)mm(e,t,n),e=e.sibling}function mm(e,t,n){switch(e.tag){case 26:ri(e,t,n),e.flags&mr&&e.memoizedState!==null&&J_(n,En,e.memoizedState,e.memoizedProps);break;case 5:ri(e,t,n);break;case 3:case 4:var l=En;En=Xs(e.stateNode.containerInfo),ri(e,t,n),En=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=mr,mr=16777216,ri(e,t,n),mr=l):ri(e,t,n));break;default:ri(e,t,n)}}function hm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];_t=l,_m(l,e)}hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pm(e),e=e.sibling}function pm(e){switch(e.tag){case 0:case 11:case 15:hr(e),e.flags&2048&&kl(9,e,e.return);break;case 3:hr(e);break;case 12:hr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,As(e)):hr(e);break;default:hr(e)}}function As(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];_t=l,_m(l,e)}hm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:kl(8,t,t.return),As(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,As(t));break;default:As(t)}e=e.sibling}}function _m(e,t){for(;_t!==null;){var n=_t;switch(n.tag){case 0:case 11:case 15:kl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Pi(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,_t=l;else e:for(n=e;_t!==null;){l=_t;var a=l.sibling,i=l.return;if(rm(l),l===n){_t=null;break e}if(a!==null){a.return=i,_t=a;break e}_t=i}}}var m_={getCacheForType:function(e){var t=vt(ct),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return vt(ct).controller.signal}},h_=typeof WeakMap=="function"?WeakMap:Map,ze=0,Xe=null,Te=null,Re=0,Ue=0,Xt=null,jl=!1,si=!1,Kc=!1,el=0,tt=0,Al=0,Ea=0,$c=0,Kt=0,oi=0,pr=null,zt=null,Ic=!1,Ds=0,gm=0,Os=1/0,Cs=null,Dl=null,pt=0,Ol=null,ci=null,tl=0,Qc=0,Fc=null,bm=null,_r=0,Zc=null;function $t(){return(ze&2)!==0&&Re!==0?Re&-Re:D.T!==null?nu():Pl()}function ym(){if(Kt===0)if((Re&536870912)===0||je){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),Kt=e}else Kt=536870912;return e=Yt.current,e!==null&&(e.flags|=32),Kt}function Bt(e,t,n){(e===Xe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(ui(e,0),Cl(e,Re,Kt,!1)),en(e,n),((ze&2)===0||e!==Xe)&&(e===Xe&&((ze&2)===0&&(Ea|=n),tt===4&&Cl(e,Re,Kt,!1)),Cn(e))}function vm(e,t,n){if((ze&6)!==0)throw Error(s(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Fl(e,t),a=l?g_(e,t):Jc(e,t,!0),i=l;do{if(a===0){si&&!l&&Cl(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!p_(n)){a=Jc(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var p=e;a=pr;var x=p.current.memoizedState.isDehydrated;if(x&&(ui(p,d).flags|=256),d=Jc(p,d,!1),d!==2){if(Kc&&!x){p.errorRecoveryDisabledLanes|=i,Ea|=i,a=4;break e}i=zt,zt=a,i!==null&&(zt===null?zt=i:zt.push.apply(zt,i))}a=d}if(i=!1,a!==2)continue}}if(a===1){ui(e,0),Cl(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Cl(l,t,Kt,!jl);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(a=Ds+300-Et(),10<a)){if(Cl(l,t,Kt,!jl),Wt(l,0,!0)!==0)break e;tl=t,l.timeoutHandle=Pm(xm.bind(null,l,n,zt,Cs,Ic,t,Kt,Ea,oi,jl,i,"Throttled",-0,0),a);break e}xm(l,n,zt,Cs,Ic,t,Kt,Ea,oi,jl,i,null,-0,0)}}break}while(!0);Cn(e)}function xm(e,t,n,l,a,i,d,p,x,k,B,X,j,C){if(e.timeoutHandle=-1,X=t.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},mm(t,i,X);var ne=(i&62914560)===i?Ds-Et():(i&4194048)===i?gm-Et():0;if(ne=W_(X,ne),ne!==null){tl=i,e.cancelPendingCommit=ne(km.bind(null,e,t,i,n,l,a,d,p,x,B,X,null,j,C)),Cl(e,i,d,!k);return}}km(e,t,i,n,l,a,d,p,x)}function p_(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!Gt(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cl(e,t,n,l){t&=~$c,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-rt(a),d=1<<i;l[i]=-1,a&=~d}n!==0&&Di(e,n,t)}function zs(){return(ze&6)===0?(gr(0),!1):!0}function Pc(){if(Te!==null){if(Ue===0)var e=Te.return;else e=Te,Xn=ha=null,mc(e),ei=null,Wi=0,e=Te;for(;e!==null;)Jd(e.alternate,e),e=e.return;Te=null}}function ui(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,z_(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tl=0,Pc(),Xe=e,Te=n=Yn(e.current,null),Re=t,Ue=0,Xt=null,jl=!1,si=Fl(e,t),Kc=!1,oi=Kt=$c=Ea=Al=tt=0,zt=pr=null,Ic=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-rt(l),i=1<<a;t|=e[a],l&=~i}return el=t,ns(),n}function Sm(e,t){ve=null,D.H=sr,t===Wa||t===us?(t=Uf(),Ue=3):t===tc?(t=Uf(),Ue=4):Ue=t===kc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xt=t,Te===null&&(tt=1,ws(e,on(t,e.current)))}function Em(){var e=Yt.current;return e===null?!0:(Re&4194048)===Re?dn===null:(Re&62914560)===Re||(Re&536870912)!==0?e===dn:!1}function wm(){var e=D.H;return D.H=sr,e===null?sr:e}function Nm(){var e=D.A;return D.A=m_,e}function Bs(){tt=4,jl||(Re&4194048)!==Re&&Yt.current!==null||(si=!0),(Al&134217727)===0&&(Ea&134217727)===0||Xe===null||Cl(Xe,Re,Kt,!1)}function Jc(e,t,n){var l=ze;ze|=2;var a=wm(),i=Nm();(Xe!==e||Re!==t)&&(Cs=null,ui(e,t)),t=!1;var d=tt;e:do try{if(Ue!==0&&Te!==null){var p=Te,x=Xt;switch(Ue){case 8:Pc(),d=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(t=!0);var k=Ue;if(Ue=0,Xt=null,fi(e,p,x,k),n&&si){d=0;break e}break;default:k=Ue,Ue=0,Xt=null,fi(e,p,x,k)}}__(),d=tt;break}catch(B){Sm(e,B)}while(!0);return t&&e.shellSuspendCounter++,Xn=ha=null,ze=l,D.H=a,D.A=i,Te===null&&(Xe=null,Re=0,ns()),d}function __(){for(;Te!==null;)Tm(Te)}function g_(e,t){var n=ze;ze|=2;var l=wm(),a=Nm();Xe!==e||Re!==t?(Cs=null,Os=Et()+500,ui(e,t)):si=Fl(e,t);e:do try{if(Ue!==0&&Te!==null){t=Te;var i=Xt;t:switch(Ue){case 1:Ue=0,Xt=null,fi(e,t,i,1);break;case 2:case 9:if(Bf(i)){Ue=0,Xt=null,Mm(t);break}t=function(){Ue!==2&&Ue!==9||Xe!==e||(Ue=7),Cn(e)},i.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:Bf(i)?(Ue=0,Xt=null,Mm(t)):(Ue=0,Xt=null,fi(e,t,i,7));break;case 5:var d=null;switch(Te.tag){case 26:d=Te.memoizedState;case 5:case 27:var p=Te;if(d?dh(d):p.stateNode.complete){Ue=0,Xt=null;var x=p.sibling;if(x!==null)Te=x;else{var k=p.return;k!==null?(Te=k,Ls(k)):Te=null}break t}}Ue=0,Xt=null,fi(e,t,i,5);break;case 6:Ue=0,Xt=null,fi(e,t,i,6);break;case 8:Pc(),tt=6;break e;default:throw Error(s(462))}}b_();break}catch(B){Sm(e,B)}while(!0);return Xn=ha=null,D.H=l,D.A=a,ze=n,Te!==null?0:(Xe=null,Re=0,ns(),tt)}function b_(){for(;Te!==null&&!Mi();)Tm(Te)}function Tm(e){var t=Zd(e.alternate,e,el);e.memoizedProps=e.pendingProps,t===null?Ls(e):Te=t}function Mm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Xd(n,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=Xd(n,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:mc(t);default:Jd(n,t),t=Te=Nf(t,el),t=Zd(n,t,el)}e.memoizedProps=e.pendingProps,t===null?Ls(e):Te=t}function fi(e,t,n,l){Xn=ha=null,mc(t),ei=null,Wi=0;var a=t.return;try{if(r_(e,a,t,n,Re)){tt=1,ws(e,on(n,e.current)),Te=null;return}}catch(i){if(a!==null)throw Te=a,i;tt=1,ws(e,on(n,e.current)),Te=null;return}t.flags&32768?(je||l===1?e=!0:si||(Re&536870912)!==0?e=!1:(jl=e=!0,(l===2||l===9||l===3||l===6)&&(l=Yt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Rm(t,e)):Ls(t)}function Ls(e){var t=e;do{if((t.flags&32768)!==0){Rm(t,jl);return}e=t.return;var n=c_(t.alternate,t,el);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);tt===0&&(tt=5)}function Rm(e,t){do{var n=u_(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);tt=6,Te=null}function km(e,t,n,l,a,i,d,p,x){e.cancelPendingCommit=null;do Us();while(pt!==0);if((ze&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Go,mt(e,n,i,d,p,x),e===Xe&&(Te=Xe=null,Re=0),ci=t,Ol=e,tl=n,Qc=i,Fc=a,bm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,S_($l,function(){return Cm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,a=V.p,V.p=2,d=ze,ze|=4;try{f_(e,t,n)}finally{ze=d,V.p=a,D.T=l}}pt=1,jm(),Am(),Dm()}}function jm(){if(pt===1){pt=0;var e=Ol,t=ci,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var l=V.p;V.p=2;var a=ze;ze|=4;try{um(t,e);var i=uu,d=_f(e.containerInfo),p=i.focusedElem,x=i.selectionRange;if(d!==p&&p&&p.ownerDocument&&pf(p.ownerDocument.documentElement,p)){if(x!==null&&zo(p)){var k=x.start,B=x.end;if(B===void 0&&(B=k),"selectionStart"in p)p.selectionStart=k,p.selectionEnd=Math.min(B,p.value.length);else{var X=p.ownerDocument||document,j=X&&X.defaultView||window;if(j.getSelection){var C=j.getSelection(),ne=p.textContent.length,he=Math.min(x.start,ne),qe=x.end===void 0?he:Math.min(x.end,ne);!C.extend&&he>qe&&(d=qe,qe=he,he=d);var T=hf(p,he),N=hf(p,qe);if(T&&N&&(C.rangeCount!==1||C.anchorNode!==T.node||C.anchorOffset!==T.offset||C.focusNode!==N.node||C.focusOffset!==N.offset)){var R=X.createRange();R.setStart(T.node,T.offset),C.removeAllRanges(),he>qe?(C.addRange(R),C.extend(N.node,N.offset)):(R.setEnd(N.node,N.offset),C.addRange(R))}}}}for(X=[],C=p;C=C.parentNode;)C.nodeType===1&&X.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<X.length;p++){var Y=X[p];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Zs=!!cu,uu=cu=null}finally{ze=a,V.p=l,D.T=n}}e.current=t,pt=2}}function Am(){if(pt===2){pt=0;var e=Ol,t=ci,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var l=V.p;V.p=2;var a=ze;ze|=4;try{im(e,t.alternate,t)}finally{ze=a,V.p=l,D.T=n}}pt=3}}function Dm(){if(pt===4||pt===3){pt=0,Ur();var e=Ol,t=ci,n=tl,l=bm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,ci=Ol=null,Om(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Dl=null),Nn(n),t=t.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Pt,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,a=V.p,V.p=2,D.T=null;try{for(var i=e.onRecoverableError,d=0;d<l.length;d++){var p=l[d];i(p.value,{componentStack:p.stack})}}finally{D.T=t,V.p=a}}(tl&3)!==0&&Us(),Cn(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Zc?_r++:(_r=0,Zc=e):_r=0,gr(0)}}function Om(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pi(t)))}function Us(){return jm(),Am(),Dm(),Cm()}function Cm(){if(pt!==5)return!1;var e=Ol,t=Qc;Qc=0;var n=Nn(tl),l=D.T,a=V.p;try{V.p=32>n?32:n,D.T=null,n=Fc,Fc=null;var i=Ol,d=tl;if(pt=0,ci=Ol=null,tl=0,(ze&6)!==0)throw Error(s(331));var p=ze;if(ze|=4,pm(i.current),dm(i,i.current,d,n),ze=p,gr(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Pt,i)}catch{}return!0}finally{V.p=a,D.T=l,Om(e,t)}}function zm(e,t,n){t=on(n,t),t=Rc(e.stateNode,t,2),e=Tl(e,t,2),e!==null&&(en(e,2),Cn(e))}function He(e,t,n){if(e.tag===3)zm(e,e,n);else for(;t!==null;){if(t.tag===3){zm(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dl===null||!Dl.has(l))){e=on(n,e),n=Bd(2),l=Tl(t,n,2),l!==null&&(Ld(n,l,t,e),en(l,2),Cn(l));break}}t=t.return}}function Wc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new h_;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(Kc=!0,a.add(n),e=y_.bind(null,e,t,n),t.then(e,e))}function y_(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xe===e&&(Re&n)===n&&(tt===4||tt===3&&(Re&62914560)===Re&&300>Et()-Ds?(ze&2)===0&&ui(e,0):$c|=n,oi===Re&&(oi=0)),Cn(e)}function Bm(e,t){t===0&&(t=Hr()),e=fa(e,t),e!==null&&(en(e,t),Cn(e))}function v_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bm(e,n)}function x_(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),Bm(e,n)}function S_(e,t){return Ti(e,t)}var Hs=null,di=null,eu=!1,Gs=!1,tu=!1,zl=0;function Cn(e){e!==di&&e.next===null&&(di===null?Hs=di=e:di=di.next=e),Gs=!0,eu||(eu=!0,w_())}function gr(e,t){if(!tu&&Gs){tu=!0;do for(var n=!1,l=Hs;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var d=l.suspendedLanes,p=l.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=a&~(d&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Gm(l,i))}else i=Re,i=Wt(l,l===Xe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Fl(l,i)||(n=!0,Gm(l,i));l=l.next}while(n);tu=!1}}function E_(){Lm()}function Lm(){Gs=eu=!1;var e=0;zl!==0&&C_()&&(e=zl);for(var t=Et(),n=null,l=Hs;l!==null;){var a=l.next,i=Um(l,t);i===0?(l.next=null,n===null?Hs=a:n.next=a,a===null&&(di=n)):(n=l,(e!==0||(i&3)!==0)&&(Gs=!0)),l=a}pt!==0&&pt!==5||gr(e),zl!==0&&(zl=0)}function Um(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-rt(i),p=1<<d,x=a[d];x===-1?((p&n)===0||(p&l)!==0)&&(a[d]=Ai(p,t)):x<=t&&(e.expiredLanes|=p),i&=~p}if(t=Xe,n=Re,n=Wt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&zn(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&zn(l),Nn(n)){case 2:case 8:n=ki;break;case 32:n=$l;break;case 268435456:n=Aa;break;default:n=$l}return l=Hm.bind(null,e),n=Ti(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&zn(l),e.callbackPriority=2,e.callbackNode=null,2}function Hm(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Us()&&e.callbackNode!==n)return null;var l=Re;return l=Wt(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(vm(e,l,t),Um(e,Et()),e.callbackNode!=null&&e.callbackNode===n?Hm.bind(null,e):null)}function Gm(e,t){if(Us())return null;vm(e,t,!0)}function w_(){B_(function(){(ze&6)!==0?Ti(Ri,E_):Lm()})}function nu(){if(zl===0){var e=Pa;e===0&&(e=nt,nt<<=1,(nt&261888)===0&&(nt=256)),zl=e}return zl}function Vm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:na(""+e)}function Ym(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function N_(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Vm((a[st]||null).action),d=l.submitter;d&&(t=(t=d[st]||null)?Vm(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var p=new Ha("action","action",null,l,a);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(zl!==0){var x=d?Ym(a,d):new FormData(a);Sc(n,{pending:!0,data:x,method:a.method,action:i},null,x)}}else typeof i=="function"&&(p.preventDefault(),x=d?Ym(a,d):new FormData(a),Sc(n,{pending:!0,data:x,method:a.method,action:i},i,x))},currentTarget:a}]})}}for(var lu=0;lu<Ho.length;lu++){var au=Ho[lu],T_=au.toLowerCase(),M_=au[0].toUpperCase()+au.slice(1);Sn(T_,"on"+M_)}Sn(yf,"onAnimationEnd"),Sn(vf,"onAnimationIteration"),Sn(xf,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(qp,"onTransitionRun"),Sn(Xp,"onTransitionStart"),Sn(Kp,"onTransitionCancel"),Sn(Sf,"onTransitionEnd"),pl("onMouseEnter",["mouseout","mouseover"]),pl("onMouseLeave",["mouseout","mouseover"]),pl("onPointerEnter",["pointerout","pointerover"]),pl("onPointerLeave",["pointerout","pointerover"]),Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(br));function qm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var d=l.length-1;0<=d;d--){var p=l[d],x=p.instance,k=p.currentTarget;if(p=p.listener,x!==i&&a.isPropagationStopped())break e;i=p,a.currentTarget=k;try{i(a)}catch(B){ts(B)}a.currentTarget=null,i=x}else for(d=0;d<l.length;d++){if(p=l[d],x=p.instance,k=p.currentTarget,p=p.listener,x!==i&&a.isPropagationStopped())break e;i=p,a.currentTarget=k;try{i(a)}catch(B){ts(B)}a.currentTarget=null,i=x}}}}function Me(e,t){var n=t[Tn];n===void 0&&(n=t[Tn]=new Set);var l=e+"__bubble";n.has(l)||(Xm(t,e,2,!1),n.add(l))}function iu(e,t,n){var l=0;t&&(l|=4),Xm(n,e,l,t)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function ru(e){if(!e[Vs]){e[Vs]=!0,hl.forEach(function(n){n!=="selectionchange"&&(R_.has(n)||iu(n,!1,e),iu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vs]||(t[Vs]=!0,iu("selectionchange",!1,t))}}function Xm(e,t,n,l){switch(yh(t)){case 2:var a=ng;break;case 8:a=lg;break;default:a=xu}n=a.bind(null,t,n,e),a=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function su(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var p=l.stateNode.containerInfo;if(p===a)break;if(d===4)for(d=l.return;d!==null;){var x=d.tag;if((x===3||x===4)&&d.stateNode.containerInfo===a)return;d=d.return}for(;p!==null;){if(d=Mn(p),d===null)return;if(x=d.tag,x===5||x===6||x===26||x===27){l=i=d;continue e}p=p.parentNode}}l=l.return}Kr(function(){var k=i,B=zi(n),X=[];e:{var j=Ef.get(e);if(j!==void 0){var C=Ha,ne=e;switch(e){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":C=se;break;case"focusin":ne="focus",C=Gi;break;case"focusout":ne="blur",C=Gi;break;case"beforeblur":case"afterblur":C=Gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Eo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=rn;break;case yf:case vf:case xf:C=No;break;case Sf:C=Pr;break;case"scroll":case"scrollend":C=Qr;break;case"wheel":C=Yi;break;case"copy":case"cut":case"paste":C=Mo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Le;break;case"toggle":case"beforetoggle":C=jo}var he=(t&4)!==0,qe=!he&&(e==="scroll"||e==="scrollend"),T=he?j!==null?j+"Capture":null:j;he=[];for(var N=k,R;N!==null;){var Y=N;if(R=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||R===null||T===null||(Y=yl(N,T),Y!=null&&he.push(yr(N,Y,R))),qe)break;N=N.return}0<he.length&&(j=new C(j,ne,null,n,B),X.push({event:j,listeners:he}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",j&&n!==za&&(ne=n.relatedTarget||n.fromElement)&&(Mn(ne)||ne[kt]))break e;if((C||j)&&(j=B.window===B?B:(j=B.ownerDocument)?j.defaultView||j.parentWindow:window,C?(ne=n.relatedTarget||n.toElement,C=k,ne=ne?Mn(ne):null,ne!==null&&(qe=h(ne),he=ne.tag,ne!==qe||he!==5&&he!==27&&he!==6)&&(ne=null)):(C=null,ne=k),C!==ne)){if(he=Fr,Y="onMouseLeave",T="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(he=Le,Y="onPointerLeave",T="onPointerEnter",N="pointer"),qe=C==null?j:Jl(C),R=ne==null?j:Jl(ne),j=new he(Y,N+"leave",C,n,B),j.target=qe,j.relatedTarget=R,Y=null,Mn(B)===k&&(he=new he(T,N+"enter",ne,n,B),he.target=R,he.relatedTarget=qe,Y=he),qe=Y,C&&ne)t:{for(he=k_,T=C,N=ne,R=0,Y=T;Y;Y=he(Y))R++;Y=0;for(var ce=N;ce;ce=he(ce))Y++;for(;0<R-Y;)T=he(T),R--;for(;0<Y-R;)N=he(N),Y--;for(;R--;){if(T===N||N!==null&&T===N.alternate){he=T;break t}T=he(T),N=he(N)}he=null}else he=null;C!==null&&Km(X,j,C,he,!1),ne!==null&&qe!==null&&Km(X,qe,ne,he,!0)}}e:{if(j=k?Jl(k):window,C=j.nodeName&&j.nodeName.toLowerCase(),C==="select"||C==="input"&&j.type==="file")var Oe=of;else if(rf(j))if(cf)Oe=Gp;else{Oe=Up;var ie=Lp}else C=j.nodeName,!C||C.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?k&&We(k.elementType)&&(Oe=of):Oe=Hp;if(Oe&&(Oe=Oe(e,k))){sf(X,Oe,n,B);break e}ie&&ie(e,j,k),e==="focusout"&&k&&j.type==="number"&&k.memoizedProps.value!=null&&Oa(j,"number",j.value)}switch(ie=k?Jl(k):window,e){case"focusin":(rf(ie)||ie.contentEditable==="true")&&(qa=ie,Bo=k,Qi=null);break;case"focusout":Qi=Bo=qa=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,gf(X,n,B);break;case"selectionchange":if(Yp)break;case"keydown":case"keyup":gf(X,n,B)}var Se;if(Jr)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Ya?lf(e,n)&&(ke="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ke="onCompositionStart");ke&&(Wr&&n.locale!=="ko"&&(Ya||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Ya&&(Se=$r()):(jn=B,Ui="value"in jn?jn.value:jn.textContent,Ya=!0)),ie=Ys(k,ke),0<ie.length&&(ke=new Vi(ke,e,null,n,B),X.push({event:ke,listeners:ie}),Se?ke.data=Se:(Se=af(n),Se!==null&&(ke.data=Se)))),(Se=Do?Op(e,n):Cp(e,n))&&(ke=Ys(k,"onBeforeInput"),0<ke.length&&(ie=new Vi("onBeforeInput","beforeinput",null,n,B),X.push({event:ie,listeners:ke}),ie.data=Se)),N_(X,e,k,n,B)}qm(X,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ys(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=yl(e,n),a!=null&&l.unshift(yr(e,a,i)),a=yl(e,t),a!=null&&l.push(yr(e,a,i))),e.tag===3)return l;e=e.return}return[]}function k_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Km(e,t,n,l,a){for(var i=t._reactName,d=[];n!==null&&n!==l;){var p=n,x=p.alternate,k=p.stateNode;if(p=p.tag,x!==null&&x===l)break;p!==5&&p!==26&&p!==27||k===null||(x=k,a?(k=yl(n,i),k!=null&&d.unshift(yr(n,k,x))):a||(k=yl(n,i),k!=null&&d.push(yr(n,k,x)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var j_=/\r\n?/g,A_=/\u0000|\uFFFD/g;function $m(e){return(typeof e=="string"?e:""+e).replace(j_,`
`).replace(A_,"")}function Im(e,t){return t=$m(t),$m(e)===t}function Ye(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||_l(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&_l(e,""+l);break;case"className":Hn(e,"class",l);break;case"tabIndex":Hn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Hn(e,n,l);break;case"style":xn(e,l,i);break;case"data":if(t!=="object"){Hn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=na(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",a.name,a,null),Ye(e,t,"formEncType",a.formEncType,a,null),Ye(e,t,"formMethod",a.formMethod,a,null),Ye(e,t,"formTarget",a.formTarget,a,null)):(Ye(e,t,"encType",a.encType,a,null),Ye(e,t,"method",a.method,a,null),Ye(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=na(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=ln);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=na(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ea(e,"popover",l);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ea(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xr.get(n)||n,ea(e,n,l))}}function ou(e,t,n,l,a,i){switch(n){case"style":xn(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof l=="string"?_l(e,l):(typeof l=="number"||typeof l=="bigint")&&_l(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ln);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Un.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[st]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ea(e,n,l)}}}function St(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ye(e,t,i,d,n,null)}}a&&Ye(e,t,"srcSet",n.srcSet,n,null),l&&Ye(e,t,"src",n.src,n,null);return;case"input":Me("invalid",e);var p=i=d=a=null,x=null,k=null;for(l in n)if(n.hasOwnProperty(l)){var B=n[l];if(B!=null)switch(l){case"name":a=B;break;case"type":d=B;break;case"checked":x=B;break;case"defaultChecked":k=B;break;case"value":i=B;break;case"defaultValue":p=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:Ye(e,t,l,B,n,null)}}Yr(e,i,p,x,k,d,a,!1);return;case"select":Me("invalid",e),l=d=i=null;for(a in n)if(n.hasOwnProperty(a)&&(p=n[a],p!=null))switch(a){case"value":i=p;break;case"defaultValue":d=p;break;case"multiple":l=p;default:Ye(e,t,a,p,n,null)}t=i,n=d,e.multiple=!!l,t!=null?vn(e,!!l,t,!1):n!=null&&vn(e,!!l,n,!0);return;case"textarea":Me("invalid",e),i=a=l=null;for(d in n)if(n.hasOwnProperty(d)&&(p=n[d],p!=null))switch(d){case"value":l=p;break;case"defaultValue":a=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(91));break;default:Ye(e,t,d,p,n,null)}Ci(e,l,a,i);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(l=n[x],l!=null))switch(x){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(e,t,x,l,n,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<br.length;l++)Me(br[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(l=n[k],l!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ye(e,t,k,l,n,null)}return;default:if(We(t)){for(B in n)n.hasOwnProperty(B)&&(l=n[B],l!==void 0&&ou(e,t,B,l,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(l=n[p],l!=null&&Ye(e,t,p,l,n,null))}function D_(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,d=null,p=null,x=null,k=null,B=null;for(C in n){var X=n[C];if(n.hasOwnProperty(C)&&X!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":x=X;default:l.hasOwnProperty(C)||Ye(e,t,C,null,l,X)}}for(var j in l){var C=l[j];if(X=n[j],l.hasOwnProperty(j)&&(C!=null||X!=null))switch(j){case"type":i=C;break;case"name":a=C;break;case"checked":k=C;break;case"defaultChecked":B=C;break;case"value":d=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,t));break;default:C!==X&&Ye(e,t,j,C,l,X)}}Gn(e,d,p,x,k,B,i,a);return;case"select":C=d=p=j=null;for(i in n)if(x=n[i],n.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":C=x;default:l.hasOwnProperty(i)||Ye(e,t,i,null,l,x)}for(a in l)if(i=l[a],x=n[a],l.hasOwnProperty(a)&&(i!=null||x!=null))switch(a){case"value":j=i;break;case"defaultValue":p=i;break;case"multiple":d=i;default:i!==x&&Ye(e,t,a,i,l,x)}t=p,n=d,l=C,j!=null?vn(e,!!n,j,!1):!!l!=!!n&&(t!=null?vn(e,!!n,t,!0):vn(e,!!n,n?[]:"",!1));return;case"textarea":C=j=null;for(p in n)if(a=n[p],n.hasOwnProperty(p)&&a!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ye(e,t,p,null,l,a)}for(d in l)if(a=l[d],i=n[d],l.hasOwnProperty(d)&&(a!=null||i!=null))switch(d){case"value":j=a;break;case"defaultValue":C=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==i&&Ye(e,t,d,a,l,i)}Ca(e,j,C);return;case"option":for(var ne in n)if(j=n[ne],n.hasOwnProperty(ne)&&j!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ye(e,t,ne,null,l,j)}for(x in l)if(j=l[x],C=n[x],l.hasOwnProperty(x)&&j!==C&&(j!=null||C!=null))switch(x){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Ye(e,t,x,j,l,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)j=n[he],n.hasOwnProperty(he)&&j!=null&&!l.hasOwnProperty(he)&&Ye(e,t,he,null,l,j);for(k in l)if(j=l[k],C=n[k],l.hasOwnProperty(k)&&j!==C&&(j!=null||C!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:Ye(e,t,k,j,l,C)}return;default:if(We(t)){for(var qe in n)j=n[qe],n.hasOwnProperty(qe)&&j!==void 0&&!l.hasOwnProperty(qe)&&ou(e,t,qe,void 0,l,j);for(B in l)j=l[B],C=n[B],!l.hasOwnProperty(B)||j===C||j===void 0&&C===void 0||ou(e,t,B,j,l,C);return}}for(var T in n)j=n[T],n.hasOwnProperty(T)&&j!=null&&!l.hasOwnProperty(T)&&Ye(e,t,T,null,l,j);for(X in l)j=l[X],C=n[X],!l.hasOwnProperty(X)||j===C||j==null&&C==null||Ye(e,t,X,j,l,C)}function Qm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function O_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,d=a.initiatorType,p=a.duration;if(i&&p&&Qm(d)){for(d=0,p=a.responseEnd,l+=1;l<n.length;l++){var x=n[l],k=x.startTime;if(k>p)break;var B=x.transferSize,X=x.initiatorType;B&&Qm(X)&&(x=x.responseEnd,d+=B*(x<p?1:(p-k)/(x-k)))}if(--l,t+=8*(i+d)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cu=null,uu=null;function qs(e){return e.nodeType===9?e:e.ownerDocument}function Fm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var du=null;function C_(){var e=window.event;return e&&e.type==="popstate"?e===du?!1:(du=e,!0):(du=null,!1)}var Pm=typeof setTimeout=="function"?setTimeout:void 0,z_=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(e){return Jm.resolve(null).then(e).catch(L_)}:Pm;function L_(e){setTimeout(function(){throw e})}function Bl(e){return e==="head"}function Wm(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),_i(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")vr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,vr(n);for(var i=n.firstChild;i;){var d=i.nextSibling,p=i.nodeName;i[nn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=d}}else n==="body"&&vr(e.ownerDocument.body);n=a}while(n);_i(t)}function eh(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function mu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":mu(n),de(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function U_(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[nn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=mn(e.nextSibling),e===null)break}return null}function H_(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mn(e.nextSibling),e===null))return null;return e}function th(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mn(e.nextSibling),e===null))return null;return e}function hu(e){return e.data==="$?"||e.data==="$~"}function pu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function G_(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _u=null;function nh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return mn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ah(e,t,n){switch(t=qs(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function vr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);de(e)}var hn=new Map,ih=new Set;function Xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nl=V.d;V.d={f:V_,r:Y_,D:q_,C:X_,L:K_,m:$_,X:Q_,S:I_,M:F_};function V_(){var e=nl.f(),t=zs();return e||t}function Y_(e){var t=dl(e);t!==null&&t.tag===5&&t.type==="form"?Sd(t):nl.r(e)}var mi=typeof document>"u"?null:document;function rh(e,t,n){var l=mi;if(l&&typeof t=="string"&&t){var a=At(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),ih.has(a)||(ih.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),St(t,"link",e),ot(t),l.head.appendChild(t)))}}function q_(e){nl.D(e),rh("dns-prefetch",e,null)}function X_(e,t){nl.C(e,t),rh("preconnect",e,t)}function K_(e,t,n){nl.L(e,t,n);var l=mi;if(l&&e&&t){var a='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+At(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+At(n.imageSizes)+'"]')):a+='[href="'+At(e)+'"]';var i=a;switch(t){case"style":i=hi(e);break;case"script":i=pi(e)}hn.has(i)||(e=M({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hn.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(xr(i))||t==="script"&&l.querySelector(Sr(i))||(t=l.createElement("link"),St(t,"link",e),ot(t),l.head.appendChild(t)))}}function $_(e,t){nl.m(e,t);var n=mi;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=pi(e)}if(!hn.has(i)&&(e=M({rel:"modulepreload",href:e},t),hn.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sr(i)))return}l=n.createElement("link"),St(l,"link",e),ot(l),n.head.appendChild(l)}}}function I_(e,t,n){nl.S(e,t,n);var l=mi;if(l&&e){var a=ml(l).hoistableStyles,i=hi(e);t=t||"default";var d=a.get(i);if(!d){var p={loading:0,preload:null};if(d=l.querySelector(xr(i)))p.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hn.get(i))&&gu(e,n);var x=d=l.createElement("link");ot(x),St(x,"link",e),x._p=new Promise(function(k,B){x.onload=k,x.onerror=B}),x.addEventListener("load",function(){p.loading|=1}),x.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Ks(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:p},a.set(i,d)}}}function Q_(e,t){nl.X(e,t);var n=mi;if(n&&e){var l=ml(n).hoistableScripts,a=pi(e),i=l.get(a);i||(i=n.querySelector(Sr(a)),i||(e=M({src:e,async:!0},t),(t=hn.get(a))&&bu(e,t),i=n.createElement("script"),ot(i),St(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function F_(e,t){nl.M(e,t);var n=mi;if(n&&e){var l=ml(n).hoistableScripts,a=pi(e),i=l.get(a);i||(i=n.querySelector(Sr(a)),i||(e=M({src:e,async:!0,type:"module"},t),(t=hn.get(a))&&bu(e,t),i=n.createElement("script"),ot(i),St(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function sh(e,t,n,l){var a=(a=Z.current)?Xs(a):null;if(!a)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=hi(n.href),n=ml(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=hi(n.href);var i=ml(a).hoistableStyles,d=i.get(e);if(d||(a=a.ownerDocument||a,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=a.querySelector(xr(e)))&&!i._p&&(d.instance=i,d.state.loading=5),hn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hn.set(e,n),i||Z_(a,e,n,d.state))),t&&l===null)throw Error(s(528,""));return d}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pi(n),n=ml(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function hi(e){return'href="'+At(e)+'"'}function xr(e){return'link[rel="stylesheet"]['+e+"]"}function oh(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function Z_(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),St(t,"link",n),ot(t),e.head.appendChild(t))}function pi(e){return'[src="'+At(e)+'"]'}function Sr(e){return"script[async]"+e}function ch(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+At(n.href)+'"]');if(l)return t.instance=l,ot(l),l;var a=M({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ot(l),St(l,"style",a),Ks(l,n.precedence,e),t.instance=l;case"stylesheet":a=hi(n.href);var i=e.querySelector(xr(a));if(i)return t.state.loading|=4,t.instance=i,ot(i),i;l=oh(n),(a=hn.get(a))&&gu(l,a),i=(e.ownerDocument||e).createElement("link"),ot(i);var d=i;return d._p=new Promise(function(p,x){d.onload=p,d.onerror=x}),St(i,"link",l),t.state.loading|=4,Ks(i,n.precedence,e),t.instance=i;case"script":return i=pi(n.src),(a=e.querySelector(Sr(i)))?(t.instance=a,ot(a),a):(l=n,(a=hn.get(i))&&(l=M({},n),bu(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),ot(a),St(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ks(l,n.precedence,e));return t.instance}function Ks(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,d=0;d<l.length;d++){var p=l[d];if(p.dataset.precedence===t)i=p;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $s=null;function uh(e,t,n){if($s===null){var l=new Map,a=$s=new Map;a.set(n,l)}else a=$s,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[nn]||i[$e]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var p=l.get(d);p?p.push(i):l.set(d,[i])}}return l}function fh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function P_(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function dh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function J_(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=hi(l.href),i=t.querySelector(xr(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Is.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,ot(i);return}i=t.ownerDocument||t,l=oh(l),(a=hn.get(a))&&gu(l,a),i=i.createElement("link"),ot(i);var d=i;d._p=new Promise(function(p,x){d.onload=p,d.onerror=x}),St(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Is.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var yu=0;function W_(e,t){return e.stylesheets&&e.count===0&&Fs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Fs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&yu===0&&(yu=62500*O_());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>yu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Is(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qs=null;function Fs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qs=new Map,t.forEach(eg,e),Qs=null,Is.call(e))}function eg(e,t){if(!(t.state.loading&4)){var n=Qs.get(e);if(n)var l=n.get(null);else{n=new Map,Qs.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var d=a[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),l=d)}l&&n.set(null,l)}a=t.instance,d=a.getAttribute("data-precedence"),i=n.get(d)||l,i===l&&n.set(null,a),n.set(d,a),this.count++,l=Is.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Er={$$typeof:oe,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function tg(e,t,n,l,a,i,d,p,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ol(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.hiddenUpdates=ol(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function mh(e,t,n,l,a,i,d,p,x,k,B,X){return e=new tg(e,t,n,d,x,k,B,X,p),t=1,i===!0&&(t|=24),i=Vt(3,null,null,t),e.current=i,i.stateNode=e,t=Jo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},nc(i),e}function hh(e){return e?(e=$a,e):$a}function ph(e,t,n,l,a,i){a=hh(a),l.context===null?l.context=a:l.pendingContext=a,l=Nl(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=Tl(e,l,t),n!==null&&(Bt(n,e,t),tr(n,e,t))}function _h(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vu(e,t){_h(e,t),(e=e.alternate)&&_h(e,t)}function gh(e){if(e.tag===13||e.tag===31){var t=fa(e,67108864);t!==null&&Bt(t,e,67108864),vu(e,67108864)}}function bh(e){if(e.tag===13||e.tag===31){var t=$t();t=Ln(t);var n=fa(e,t);n!==null&&Bt(n,e,t),vu(e,t)}}var Zs=!0;function ng(e,t,n,l){var a=D.T;D.T=null;var i=V.p;try{V.p=2,xu(e,t,n,l)}finally{V.p=i,D.T=a}}function lg(e,t,n,l){var a=D.T;D.T=null;var i=V.p;try{V.p=8,xu(e,t,n,l)}finally{V.p=i,D.T=a}}function xu(e,t,n,l){if(Zs){var a=Su(l);if(a===null)su(e,t,l,Ps,n),vh(e,l);else if(ig(a,e,t,n,l))l.stopPropagation();else if(vh(e,l),t&4&&-1<ag.indexOf(e)){for(;a!==null;){var i=dl(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=Bn(i.pendingLanes);if(d!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var x=1<<31-rt(d);p.entanglements[1]|=x,d&=~x}Cn(i),(ze&6)===0&&(Os=Et()+500,gr(0))}}break;case 31:case 13:p=fa(i,2),p!==null&&Bt(p,i,2),zs(),vu(i,2)}if(i=Su(l),i===null&&su(e,t,l,Ps,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else su(e,t,l,null,n)}}function Su(e){return e=zi(e),Eu(e)}var Ps=null;function Eu(e){if(Ps=null,e=Mn(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=_(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ps=e,null}function yh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ja()){case Ri:return 2;case ki:return 8;case $l:case Zt:return 32;case Aa:return 268435456;default:return 32}default:return 32}}var wu=!1,Ll=null,Ul=null,Hl=null,wr=new Map,Nr=new Map,Gl=[],ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vh(e,t){switch(e){case"focusin":case"focusout":Ll=null;break;case"dragenter":case"dragleave":Ul=null;break;case"mouseover":case"mouseout":Hl=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function Tr(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=dl(t),t!==null&&gh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ig(e,t,n,l,a){switch(t){case"focusin":return Ll=Tr(Ll,e,t,n,l,a),!0;case"dragenter":return Ul=Tr(Ul,e,t,n,l,a),!0;case"mouseover":return Hl=Tr(Hl,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return wr.set(i,Tr(wr.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Nr.set(i,Tr(Nr.get(i)||null,e,t,n,l,a)),!0}return!1}function xh(e){var t=Mn(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=_(n),t!==null){e.blockedOn=t,cl(e.priority,function(){bh(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,cl(e.priority,function(){bh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Su(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);za=l,n.target.dispatchEvent(l),za=null}else return t=dl(n),t!==null&&gh(t),e.blockedOn=n,!1;t.shift()}return!0}function Sh(e,t,n){Js(e)&&n.delete(t)}function rg(){wu=!1,Ll!==null&&Js(Ll)&&(Ll=null),Ul!==null&&Js(Ul)&&(Ul=null),Hl!==null&&Js(Hl)&&(Hl=null),wr.forEach(Sh),Nr.forEach(Sh)}function Ws(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rg)))}var eo=null;function Eh(e){eo!==e&&(eo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){eo===e&&(eo=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Eu(l||n)===null)continue;break}var i=dl(n);i!==null&&(e.splice(t,3),t-=3,Sc(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function _i(e){function t(x){return Ws(x,e)}Ll!==null&&Ws(Ll,e),Ul!==null&&Ws(Ul,e),Hl!==null&&Ws(Hl,e),wr.forEach(t),Nr.forEach(t);for(var n=0;n<Gl.length;n++){var l=Gl[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Gl.length&&(n=Gl[0],n.blockedOn===null);)xh(n),n.blockedOn===null&&Gl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],d=a[st]||null;if(typeof i=="function")d||Eh(n);else if(d){var p=null;if(i&&i.hasAttribute("formAction")){if(a=i,d=i[st]||null)p=d.formAction;else if(Eu(a)!==null)continue}else p=d.action;typeof p=="function"?n[l+1]=p:(n.splice(l,3),l-=3),Eh(n)}}}function wh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return a=d})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Nu(e){this._internalRoot=e}to.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,l=$t();ph(n,l,e,t,null,null)},to.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ph(e.current,2,null,e,null,null),zs(),t[kt]=null}};function to(e){this._internalRoot=e}to.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gl.length&&t!==0&&t<Gl[n].priority;n++);Gl.splice(n,0,e),n===0&&xh(e)}};var Nh=r.version;if(Nh!=="19.2.7")throw Error(s(527,Nh,"19.2.7"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var sg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Pt=no.inject(sg),Je=no}catch{}}return Rr.createRoot=function(e,t){if(!f(e))throw Error(s(299));var n=!1,l="",a=Dd,i=Od,d=Cd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=mh(e,1,!1,null,null,n,l,null,a,i,d,wh),e[kt]=t.current,ru(e),new Nu(t)},Rr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(s(299));var l=!1,a="",i=Dd,d=Od,p=Cd,x=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=mh(e,1,!0,t,n??null,l,a,x,i,d,p,wh),t.context=hh(null),n=t.current,l=$t(),l=Ln(l),a=Nl(l),a.callback=null,Tl(n,a,l),n=l,t.current.lanes=n,en(t,n),Cn(t),e[kt]=t.current,ru(e),new to(t)},Rr.version="19.2.7",Rr}var zh;function yg(){if(zh)return Ru.exports;zh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Ru.exports=bg(),Ru.exports}var vg=yg();const xg=bp(vg),Bh=o=>{let r;const u=new Set,s=(y,S)=>{const M=typeof y=="function"?y(r):y;if(!Object.is(M,r)){const O=r;r=S??(typeof M!="object"||M===null)?M:Object.assign({},r,M),u.forEach(Q=>Q(r,O))}},f=()=>r,g={setState:s,getState:f,getInitialState:()=>v,subscribe:y=>(u.add(y),()=>u.delete(y))},v=r=o(s,f,g);return g},Sg=(o=>o?Bh(o):Bh),Eg=o=>o;function wg(o,r=Eg){const u=Cr.useSyncExternalStore(o.subscribe,Cr.useCallback(()=>r(o.getState()),[o,r]),Cr.useCallback(()=>r(o.getInitialState()),[o,r]));return Cr.useDebugValue(u),u}const Lh=o=>{const r=Sg(o),u=s=>wg(r,s);return Object.assign(u,r),u},Ng=(o=>o?Lh(o):Lh);function Tg(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let u=0;u<o.length;u+=1)o[u]=Math.floor(Math.random()*256);let r="";for(const u of o)r+=u.toString(16).padStart(2,"0");return r}const Fu="pkp.user",Zu="pkp.savedDevices",Pu="pkp.ideDrafts",Ju="pkp.ideSettings",Br="Prototype Version 0.6.7";function ho(o){try{const r=localStorage.getItem(o);return r?JSON.parse(r):null}catch{return null}}function po(o,r){try{localStorage.setItem(o,JSON.stringify(r))}catch{}}function Mg(){const o=ho(Fu);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function Uh(o){po(Fu,o)}function Wu(){return ho(Zu)??[]}function _o(o){po(Zu,o)}function Rg(){_o([])}function kg(){try{localStorage.removeItem(Fu),localStorage.removeItem(Zu),localStorage.removeItem(Pu),localStorage.removeItem(Ju)}catch{}}function Du(){var o;return((o=ho(Pu))==null?void 0:o.filter(r=>r.path&&typeof r.content=="string"))??[]}function Ou(o){po(Pu,o)}function Hh(){const o=ho(Ju)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function jg(o){po(Ju,o)}function Cu(o){const r=Wu(),u=r.findIndex(s=>s.deviceID===o.deviceID);return u>=0?r[u]=o:r.push(o),_o(r),r}function Ag(o){const r=Wu().filter(u=>u.deviceID!==o);return _o(r),r}const Yu="b8e06067-62ad-41ba-9231-206ae80ab551",Dg="f897177b-aee8-4767-8ecc-cc694fd5fce0",Og="f897177b-aee8-4767-8ecc-cc694fd5fce1",zu=20,Cg=12,zg=new TextEncoder,Bg=new TextDecoder;function Lg(o){return new Promise(r=>setTimeout(r,o))}function go(){return typeof navigator<"u"&&"bluetooth"in navigator}function qu(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function Ug(){if(!go())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Yu]},{namePrefix:"PicoW-"}],optionalServices:[Yu]})}async function yp(){if(!go()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Hg{constructor(){ue(this,"device",null);ue(this,"writeChar",null);ue(this,"notifyChar",null);ue(this,"buffer","");ue(this,"writeQueue",Promise.resolve());ue(this,"disconnectNotified",!1);ue(this,"onLine",()=>{});ue(this,"onDisconnect",()=>{});ue(this,"handleNotification",r=>{const u=r.target;if(!(u!=null&&u.value))return;this.buffer+=Bg.decode(u.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const f=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),f&&this.onLine(f),s=this.buffer.indexOf(`
`)}});ue(this,"handleDisconnected",()=>{var r;this.disconnectNotified||(this.disconnectNotified=!0,(r=this.device)==null||r.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var r,u;return!!((u=(r=this.device)==null?void 0:r.gatt)!=null&&u.connected)}async connect(r){var f;this.device&&this.device!==r&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=r,this.buffer="",this.disconnectNotified=!1,r.removeEventListener("gattserverdisconnected",this.handleDisconnected),r.addEventListener("gattserverdisconnected",this.handleDisconnected);const u=await((f=r.gatt)==null?void 0:f.connect());if(!u)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await u.getPrimaryService(Yu);this.writeChar=await s.getCharacteristic(Dg),this.notifyChar=await s.getCharacteristic(Og),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(r){const u=this.writeQueue.then(()=>this.doWrite(r));return this.writeQueue=u.catch(()=>{}),u}async doWrite(r){if(!this.writeChar)throw new Error("Ingen forbindelse.");const u=zg.encode(`${r}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<u.length;h+=zu){const _=u.slice(h,h+zu);await f(_),h+zu<u.length&&await Lg(Cg)}}disconnect(){var u;const r=this.device;(u=r==null?void 0:r.gatt)!=null&&u.connected?r.gatt.disconnect():this.handleDisconnected()}}class Gg{constructor(r,u){ue(this,"send");ue(this,"onMessage");ue(this,"inActive",!1);ue(this,"inExpectedTotal",0);ue(this,"inStreamId",0);ue(this,"inParts",new Map);ue(this,"inProgress",null);ue(this,"outPendingLines",null);ue(this,"outWaitingAck",!1);ue(this,"outStreamId",0);ue(this,"outNextStreamId",1);ue(this,"outCache",new Map);ue(this,"outProgress",null);this.send=r,this.onMessage=u}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null}handleLine(r){var s;if(r.startsWith("prep,")){const f=r.split(","),h=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,_=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(r==="ack:prep"||r===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(r.startsWith("miss,")){const f=r.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const h=parseInt(f[1],10),_=parseInt(f[2],10),g=this.outCache.get(_);h===this.outStreamId&&g&&this.send(g)}return}const u=this.parseNumbered(r);if(u){const{idx:f,payload:h}=u;if(!this.inActive){this.onMessage(h);return}this.inParts.has(f)||(this.inParts.set(f,h),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let g=1;g<=this.inExpectedTotal;g+=1)if(!this.inParts.has(g)){_=g;break}if(_>0&&this.inStreamId>0&&f>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let g=1;g<=this.inExpectedTotal;g+=1){const v=this.inParts.get(g);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(r)}setInboundProgress(r){this.inProgress=r}async sendReliable(r,u){const s=r.length===0?[""]:r;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=u??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear(),await this.send(`prep,${s.length},${this.outStreamId}`)}async flushOutbound(){var u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null;return}const r=this.outPendingLines.length;for(let s=0;s<r;s+=1){const f=this.outPendingLines[s],h=`${s+1}-${f}`;this.outCache.set(s+1,h),await this.send(h),(u=this.outProgress)==null||u.call(this,s+1,r,f)}this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}parseNumbered(r){const u=r.indexOf("-");if(u<=0)return null;const s=r.slice(0,u);if(!/^\d+$/.test(s))return null;const f=parseInt(s,10);return f<1?null:{idx:f,payload:r.slice(u+1)}}}const Si=11,Lr=31,Vg=2,Yg=60,yi=4,vi=40;function qg(o,r){return Math.max(14,Math.min(56,Math.min(o,r)*.05))}function vp(o,r,u=Si,s=Lr){const f=qg(o,r),h=Math.max(1,o-2*f),_=Math.max(1,r-2*f);return{areaW:o,areaH:r,cols:u,rows:s,margin:f,stepX:h/Math.max(1,u-1),stepY:_/Math.max(1,s-1)}}function xp(o,r){return r.margin+o/2*r.stepX}function Sp(o,r){const u=r.margin+o/2*r.stepY;return r.areaH-u}function zr(o,r){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:xp(o.centerX2,r),cy:Sp(o.centerY2,r),width:o.spanX*r.stepX,height:o.spanY*r.stepY}}function Xg(o){const r=[];for(let u=0;u<o.cols;u+=1)for(let s=0;s<o.rows;s+=1)r.push({x:o.margin+u*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return r}function ro(o,r,u,s,f){const h=(v,y,S,M)=>{const O=y%2,Q=M*2;let F=O,le=1/0;for(let U=O;U<=Q;U+=2){const G=Math.abs(S(U)-v);G<le&&(le=G,F=U)}return Math.max(y,Math.min(Q-y,F))},_=h(o,u,v=>xp(v,f),f.cols-1),g=h(r,s,v=>Sp(v,f),f.rows-1);return{centerX2:_,centerY2:g}}const Ta=6e3,Kg=15,co=[32,64,128,192],$g=Ta*4,Ig=3500,Qg=8e3,Fg=2,Zg=Ta,Pg=Ta*8;function Bu(o){return new Promise(r=>setTimeout(r,o))}function gi(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function Gh(o){return o instanceof DOMException&&o.name==="AbortError"}function Yl(o){return o.replace(/[\r\n,]/g," ").trim()}class Jg{constructor(r={}){ue(this,"transport",new Hg);ue(this,"stream");ue(this,"events");ue(this,"waiters",[]);ue(this,"collectingLayout",!1);ue(this,"layoutBuffer",[]);ue(this,"layoutResolve",null);ue(this,"collectingLines",!1);ue(this,"lineBuffer",[]);ue(this,"lineResolve",null);ue(this,"lineReject",null);ue(this,"lineCollectId",0);ue(this,"controlPumpActive",!1);ue(this,"pendingButtons",[]);ue(this,"pendingSliders",new Map);ue(this,"pendingToggles",new Map);ue(this,"expectingDisconnect",!1);ue(this,"busy",!1);ue(this,"fsCapabilities",null);this.events=r,this.stream=new Gg(u=>this.transport.writeLine(u),u=>this.onDeviceMessage(u)),this.transport.onLine=u=>this.stream.handleLine(u),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var r;return qu((r=this.transport.device)==null?void 0:r.name)}get connected(){return this.transport.connected}setBusy(r){if(this.busy=r,r){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(r,u){var s,f;(f=(s=this.events).onLog)==null||f.call(s,r,u)}progress(r,u){var s,f;(f=(s=this.events).onProgress)==null||f.call(s,r,u)}onDeviceMessage(r){var s,f;if(r==="disconnect"){this.log("warning","Enheden afbrød forbindelsen."),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(r==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(r);return}if(this.collectingLayout){if(r==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,h),this.layoutResolve=null;return}!r.startsWith("ACK")&&!r.startsWith("ERR")&&!r.startsWith("#VERSION")?this.layoutBuffer.push(r):r.startsWith("#VERSION")&&this.layoutBuffer.push(r);return}r.startsWith("ERR")?this.log("error",r):r.startsWith("radar,")?this.handleRadarLine(r):r.startsWith("text,")?this.handleTextLine(r):r.startsWith("toggle_state,")?this.handleToggleStateLine(r):r.startsWith("ACK")||r==="LAYOUT_SAVED"||r.startsWith("READY")?this.log("success",r):this.log("info",`rx: ${r}`);const u=this.waiters.findIndex(h=>h.match(r));if(u>=0){const h=this.waiters[u];this.waiters.splice(u,1),clearTimeout(h.timer),h.resolve(r)}}waitFor(r,u,s){return new Promise((f,h)=>{const _=setTimeout(()=>{const g=this.waiters.findIndex(v=>v.timer===_);g>=0&&this.waiters.splice(g,1),h(new Error(`Timeout: ${s}`))},u);this.waiters.push({match:r,resolve:f,reject:h,timer:_})})}async collectLines(r,u,s,f,h){gi(f);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const g=new Promise((v,y)=>{let S=!1;const M=()=>this.lineCollectId===_,O=()=>{S=!0,M()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",F)},Q=G=>{S||(clearTimeout(le),M()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),O(),y(G))},F=()=>{Q(new DOMException("BLE file read cancelled","AbortError"))},le=setTimeout(()=>{M()&&Q(new Error(`Timeout: ${s}`))},u);this.lineResolve=v,this.lineReject=Q;const U=this.lineResolve;this.lineResolve=G=>{M()&&(clearTimeout(le),O(),U==null||U(G))},f==null||f.addEventListener("abort",F,{once:!0})});return await this.transport.writeLine(r),g}async exchange(r,u,s,f=3){let h;for(let _=1;_<=f;_+=1)try{return await this.transport.writeLine(r),await this.waitFor(u,Ta,s)}catch(g){h=g,this.log("warning",`${s}: forsøg ${_}/${f} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${s}`)}async connect(r){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(r)}async runHandshake(r){var le;await Bu(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",U=>U==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const u=await this.exchange("who_are_you",U=>U==="unowned"||U.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),u==="unowned")return{kind:"unowned"};const s=u.split(","),f=s[1]??"",h=s[2]!==void 0&&parseInt(s[2],10)||0,_=s[3]!==void 0?parseInt(s[3],10)===1:!0,g=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=((le=s[5])==null?void 0:le.trim())||void 0;await this.exchange("ACK:ownership",U=>U==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const y=await this.exchange(`request_permission,${r.userID},${Yl(r.username)}`,U=>U.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const S=y.split(",").filter(U=>/^\d+$/.test(U)),M=S.length>=1?parseInt(S[S.length-2]??"0",10):0,O=S.length>=1?parseInt(S[S.length-1]??"0",10):0;if(M===0)return this.expectingDisconnect=!0,{kind:"denied"};const Q=r.userID===f,F=O===1||Q;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:v,iconID:h,canEdit:F,isOwnedByMe:Q,canOthersConnect:_,canOthersEdit:g}}async create(r,u,s,f,h,_){const g=s?1:0,v=s&&f?1:0;await this.exchange(`create,${r.userID},${Yl(r.username)},${u},${g},${v},${h},${_}`,y=>y==="ACK:create","create")}async updateDeviceSettings(r,u,s,f,h,_){const g=u?1:0,v=u&&s?1:0;await this.exchange(`settings_update,${r},${g},${v},${f},${h},${Yl(_??"")}`,y=>y==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const r=new Promise((s,f)=>{this.layoutResolve=s;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},Ta*2),_=this.layoutResolve;this.layoutResolve=g=>{clearTimeout(h),_==null||_(g)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const u=await r;return this.progress(100,"Klar"),u}async saveLayout(r){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const u=r.map(f=>{const h=g=>g===null?"n":String(g),_=`update,${f.type},${f.name},${h(f.centerX2)},${h(f.centerY2)},${h(f.spanX)},${h(f.spanY)},${f.rotation}`;return f.type==="slider"?`${_},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${_},${f.toggleInitial?1:0}`:f.type==="radar"?[_,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):_});u.push("__END__");const s=this.waitFor(f=>f==="LAYOUT_SAVED",Ta*2,"LAYOUT_SAVED");await this.stream.sendReliable(u),await s}async listFiles(r="/"){return(await this.collectLines(`fs_list,${Yl(r)}`,Ta*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,f,h,_]=s.split(","),g=f==="file"||f==="dir"?f:"unknown",v=parseInt(_??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:g,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(r){var _,g,v;const u=r.split(",");if(u.length<4)return;const s=(_=u[1])==null?void 0:_.trim(),f=parseFloat(u[2]??""),h=parseFloat(u[3]??"");!s||!Number.isFinite(f)||!Number.isFinite(h)||((v=(g=this.events).onRadar)==null||v.call(g,s,f,h),this.log("info",`rx: ${r}`))}handleTextLine(r){var g,v;const u=r.indexOf(","),s=u>=0?r.indexOf(",",u+1):-1;if(u<0||s<0)return;const f=r.slice(u+1,s),h=r.slice(s+1),_=f==null?void 0:f.trim();_&&((v=(g=this.events).onText)==null||v.call(g,_,h),this.log("info",`rx: ${r}`))}handleToggleStateLine(r){var h,_,g;const u=r.split(",");if(u.length<3)return;const s=(h=u[1])==null?void 0:h.trim(),f=parseInt(u[2]??"",10);!s||!Number.isFinite(f)||((g=(_=this.events).onToggleState)==null||g.call(_,s,f===1),this.log("info",`rx: ${r}`))}async readText(r,u,s){u==null||u(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(s);if(f.streamRead)try{return await this.readTextStream(r,f,u,s)}catch(h){if(s!=null&&s.aborted||Gh(h)||!f.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(r,u,s)}async getFilesystemCapabilities(r){if(this.fsCapabilities)return this.fsCapabilities;const u=await this.collectLines("fs_capabilities",Zg,"fs_capabilities",r),s=u.find(S=>S.startsWith("ERR"));if(s)throw new Error(s);const f=u.find(S=>S.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=f.split(","),_=new Map;for(let S=1;S<h.length-1;S+=2)_.set(h[S],h[S+1]);const g=parseInt(_.get("max_page")??"",10),v=parseInt(_.get("stream_chunk")??"",10),y={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(g)&&g>0?g:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(r,u,s){const f=await this.getFilesystemCapabilities(s);let h=0,_=Wg(f.maxPageSize),g=0,v=null,y="";const S=`Indlæser ${Vh(r)}...`;gi(s),u==null||u(5,S);for(let M=0;M<512;M+=1){gi(s),g===0&&(u==null||u(7,S));const Q=await this.readPageWithRetry(r,g,h,_,s),F=Q.lines;h=Q.nextPageSizeIndex,_=Q.maxPageSizeIndex,gi(s);const le=F.find(J=>J.startsWith("ERR"));if(le)throw new Error(le);const U=F.find(J=>J.startsWith("fs_page,"));if(!U)throw new Error("ERR: fs_read_page missing data");const[,G,pe,oe,Ee=""]=U.split(",",5);if(G!==r)throw new Error("ERR: fs_read_page stale data");const fe=parseInt(pe??"",10),we=parseInt(oe??"",10);if(!Number.isFinite(fe)||fe!==g||!Number.isFinite(we))throw new Error("ERR: fs_read_page invalid data");v=we,y+=Ee,g+=Math.floor(Ee.length/2);const ee=v>0?8+Math.min(87,Math.round(g/v*87)):95;if(u==null||u(ee,S),g>=v||Ee.length===0)return u==null||u(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Yh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(r,u,s,f,h){let _,g=Math.min(s,f);for(;g>=0;){const v=co[g],y=g===0?Fg:1,S=g===0?Qg:Ig;for(let M=1;M<=y;M+=1){gi(h);try{return{lines:await this.collectLines(`fs_read_page,${Yl(r)},${u},${v}`,S,`fs_read_page ${u}`,h),nextPageSizeIndex:Math.min(g+1,f),maxPageSizeIndex:f}}catch(O){if(h!=null&&h.aborted||Gh(O))throw O;if(_=O,M<y||g>0){const F=g>0&&M>=y?co[g-1]:v;this.log("warning",`fs_read_page ${u} (${v} bytes) fejlede; prøver ${F} bytes`),await Bu(80+M*80)}}}if(g===0)break;f=Math.max(0,g-1),g=f}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${u}`)}async readTextStream(r,u,s,f){const h=`Indlæser ${Vh(r)}...`,_=Math.max(16,Math.min(192,u.streamChunkSize||128));s==null||s(5,h);const g=await this.collectLines(`fs_read_stream,${Yl(r)},${_}`,Pg,`fs_read_stream ${r}`,f,(ee,J)=>{const ge=8+Math.round(Math.min(ee,J)/Math.max(1,J)*87);s==null||s(Math.min(95,ge),h)});gi(f);const v=g.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const y=g.find(ee=>ee.startsWith("fs_stream_begin,")),S=g.find(ee=>ee.startsWith("fs_stream_end,"));if(!y||!S)throw new Error("ERR: fs_read_stream missing metadata");const[,M,O]=y.split(",",4),[,Q,F,le]=S.split(",",4),U=parseInt(O??"",10),G=parseInt(F??"",10),pe=parseInt(le??"",10);if(M!==r||Q!==r||!Number.isFinite(U)||U!==G||!Number.isFinite(pe))throw new Error("ERR: fs_read_stream invalid metadata");let oe=0,Ee="";for(const ee of g){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,J,ge=""]=ee.split(",",3),_e=parseInt(J??"",10);if(!Number.isFinite(_e)||_e!==oe||ge.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");Ee+=ge,oe+=Math.floor(ge.length/2)}if(oe!==U)throw new Error("ERR: fs_read_stream size mismatch");const fe=Yh(Ee);if(eb(fe)!==pe)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(fe)}async writeText(r,u,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Yl(r)}`,y=>y==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const f=new TextEncoder().encode(u),h=[...f].map(y=>y.toString(16).padStart(2,"0")).join(""),_=[];for(let y=0;y<h.length;y+=160)_.push(`fs_write_chunk,${h.slice(y,y+160)}`);_.push("fs_write_end");const g=this.waitFor(y=>y==="ACK:fs_write_done"||y.startsWith("ERR"),$g,"fs_write_done");s==null||s(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(y,S,M)=>{if(!M.startsWith("fs_write_chunk,"))return;const O=Math.min(f.length,y*80),Q=18+Math.round(y/Math.max(1,S-1)*67);s==null||s(Math.min(85,Q),`Sender ${O}/${f.length} bytes via Bluetooth...`)});const v=await g;if(v.startsWith("ERR"))throw new Error(v);s==null||s(100,"Gemt på Pico")}async deleteFile(r){const u=await this.exchange(`fs_delete,${Yl(r)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(u.startsWith("ERR"))throw new Error(u)}async restart(){await this.exchange("restart",r=>r==="ACK:restart"||r.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(r){this.busy||(this.pendingButtons.push(`button,${r}`),this.pumpControls())}enqueueSlider(r,u){this.busy||(this.pendingSliders.set(r,`slider,${r}:${u}`),this.pumpControls())}enqueueToggle(r,u){this.busy||(this.pendingToggles.set(r,`toggle,${r}:${u?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const r=this.nextControlLine();if(!r)break;await this.transport.writeLine(r),this.log("info",`tx: ${r}`),await Bu(Kg)}}catch(r){this.log("error",r instanceof Error?r.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const r=this.pendingButtons.shift();if(r)return r;const u=this.pendingSliders.entries().next();if(!u.done){const[f,h]=u.value;return this.pendingSliders.delete(f),h}const s=this.pendingToggles.entries().next();if(!s.done){const[f,h]=s.value;return this.pendingToggles.delete(f),h}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",r=>r==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var r,u,s;for(const f of this.waiters)clearTimeout(f.timer),f.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(r=this.lineReject)==null||r.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset(),(s=(u=this.events).onDisconnect)==null||s.call(u)}}function Wg(o){let r=0;for(let u=0;u<co.length;u+=1)co[u]<=o&&(r=u);return r}function Vh(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function eb(o){let r=0;for(const u of o)r=r+u>>>0;return r}function Yh(o){const r=new Uint8Array(Math.floor(o.length/2));for(let u=0;u<r.length;u+=1)r[u]=parseInt(o.slice(u*2,u*2+2),16);return r}function qh(o){const r=(u,s)=>Number.isFinite(u)?Math.max(Vg,Math.min(Yg,u)):s;for(const u of o){const s=u.trim();if(s.startsWith("#GRID,")){const f=s.split(","),h=r(parseInt(f[1],10),Si),_=r(parseInt(f[2],10),Lr);return{cols:h,rows:_}}}return{cols:Si,rows:Lr}}function Xh(o){const r=new Map;for(const u of o){const s=u.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const f=s.split(",");if(f.length<7)continue;const[h,_,g,v,y,S,M,O,Q,F,le]=f;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"||r.has(_))continue;const U=_e=>{if(_e==="n")return null;const ye=parseInt(_e,10);return Number.isNaN(ye)?null:ye},G=parseInt(M,10)||0,pe=O!==void 0?parseInt(O,10):0,oe=Q!==void 0?parseInt(Q,10):100,Ee=["none","bottom","middle","top"].includes(F??"")?F:"none",fe=O!==void 0?parseInt(O,10)===1:!1,we=O!==void 0?parseFloat(O):0,ee=Q!==void 0?parseFloat(Q):180,J=F!==void 0?parseFloat(F):200,ge=le!==void 0?parseInt(le,10):1200;r.set(_,{type:h,name:_,centerX2:U(g),centerY2:U(v),spanX:U(y),spanY:U(S),rotation:[0,90,180,270].includes(G)?G:0,...h==="slider"?{sliderMin:Number.isFinite(pe)?pe:0,sliderMax:Number.isFinite(oe)?oe:100,sliderRecenter:Ee}:{},...h==="toggle"?{toggleInitial:fe}:{},...h==="radar"?{radarMinAngle:Number.isFinite(we)?we:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(J)&&J>0?J:200,radarFadeMs:Number.isFinite(ge)&&ge>0?ge:1200}:{}})}return[...r.values()]}let te=null,kr=null,Kh=0,ll=!1;function tb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function $h(o){return new Promise(r=>setTimeout(r,o))}function nb(o){return Object.fromEntries(o.filter(r=>r.type==="toggle").map(r=>[r.name,!!r.toggleInitial]))}function Ih(o,r){const u=nb(o);for(const s of o)s.type==="toggle"&&r[s.name]!==void 0&&(u[s.name]=r[s.name]);return u}const W=Ng((o,r)=>{function u(f,h){o(_=>({logs:[{level:f,message:h,time:tb()},..._.logs].slice(0,200)}))}function s(f){kr&&clearTimeout(kr),Kh+=1,o({toast:{message:f,id:Kh}}),kr=setTimeout(()=>o({toast:null}),4500)}return te=new Jg({onProgress:(f,h)=>o({progress:{value:f,label:h}}),onLog:(f,h)=>u(f,h),onRadar:(f,h,_)=>{const g=Date.now(),v={id:`${g}-${Math.random().toString(36).slice(2)}`,angle:h,distance:_,createdAt:g};o(y=>{const S=y.layout.find(Q=>Q.type==="radar"&&Q.name===f),M=(S==null?void 0:S.radarFadeMs)??1200,O=y.radarPings[f]??[];return{radarPings:{...y.radarPings,[f]:[...O.filter(Q=>g-Q.createdAt<=M),v].slice(-80)}}})},onText:(f,h)=>{o(_=>({textValues:{..._.textValues,[f]:h}}))},onToggleState:(f,h)=>{o(_=>({toggleValues:{..._.toggleValues,[f]:h}}))},onDisconnect:()=>{const{screen:f,active:h,picoIdeOrigin:_}=r();if(ll){ll=!1;return}if(f==="control"||f==="connection"||f==="create"||f==="ide"&&_==="control"){const g=h?{deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:g})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const f=Mg(),h=Wu();o({user:f,savedDevices:h,splashTarget:f?"dashboard":"intro"})},finishSplash:()=>{const f=r().splashTarget;o({screen:f??"intro"})},createUser:f=>{const h=f.trim();if(!h)return;const _={username:h,userID:Tg()};Uh(_),o({user:_,screen:"dashboard"})},findDevice:async()=>{try{const f=await Ug();await r().connectToDevice(f)}catch(f){f instanceof Error&&f.name!=="NotFoundError"&&u("error",f.message)}},connectToDevice:async(f,h)=>{const _=r().user;if(!(!_||!te)){ll=!1,o({screen:"connection",connecting:{name:qu(f.name)||(h==null?void 0:h.deviceName)||"Pico",iconID:(h==null?void 0:h.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await te.connect(f);const g=await te.runHandshake(_),v=f.id,y=qu(f.name)||(h==null?void 0:h.deviceName)||"Pico";if(g.kind==="denied"){u("warning","Adgang nægtet (privat enhed)."),s("Adgang nægtet — denne enhed er privat."),o({screen:"dashboard",connecting:null}),await te.disconnect();return}if(g.kind==="unowned"){o({active:{deviceID:v,deviceName:y,iconID:0,canEdit:!0,canOthersConnect:!1,canOthersEdit:!1,isOwnedByMe:!0,ownerName:_.username,gridCols:Si,gridRows:Lr},screen:"create"});return}const S={deviceID:v,deviceName:y,deviceIconID:g.iconID,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,isOwnedByMe:g.isOwnedByMe,ownerName:g.isOwnedByMe?_.username:g.ownerName??(h==null?void 0:h.ownerName)};o({savedDevices:Cu(S)});const M=await te.requestLayout(),O=qh(M),Q=Xh(M);o({layout:Q,sliderValues:{},toggleValues:Ih(Q,r().toggleValues),radarPings:{},textValues:{},active:{deviceID:v,deviceName:y,iconID:g.iconID,canEdit:g.canEdit,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,isOwnedByMe:g.isOwnedByMe,ownerName:g.isOwnedByMe?_.username:g.ownerName??(h==null?void 0:h.ownerName),gridCols:O.cols,gridRows:O.rows},screen:"control",connecting:null,connectionLost:null})}catch(g){const v=g instanceof Error?g.message:"Forbindelsen mislykkedes.";u("error",v),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await te.disconnect().catch(()=>{})}}},finishCreate:async(f,h,_,g,v)=>{const{user:y,active:S}=r();if(!(!y||!S||!te))try{te.setBusy(!0),await te.create(y,f,h,_,g,v),te.setBusy(!1);const M={deviceID:S.deviceID,deviceName:S.deviceName,deviceIconID:f,canOthersConnect:h,canOthersEdit:h&&_,isOwnedByMe:!0,ownerName:y.username};o({savedDevices:Cu(M)});const O=await te.requestLayout(),Q=qh(O),F=Xh(O);o({layout:F,sliderValues:{},toggleValues:Ih(F,r().toggleValues),radarPings:{},textValues:{},active:{...S,iconID:f,canEdit:!0,canOthersConnect:h,canOthersEdit:h&&_,ownerName:y.username,gridCols:Q.cols,gridRows:Q.rows},screen:"control"})}catch(M){te.setBusy(!1);const O=M instanceof Error?M.message:"Oprettelse mislykkedes.";u("error",O),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await te.disconnect().catch(()=>{})}},saveDeviceSettings:async(f,h,_,g,v)=>{const{active:y,user:S}=r();if(!(!y||!te||!y.isOwnedByMe))try{te.setBusy(!0),await te.updateDeviceSettings(f,h,_,g,v,S==null?void 0:S.username);const M={...y,iconID:f,canEdit:!0,canOthersConnect:h,canOthersEdit:h&&_,ownerName:(S==null?void 0:S.username)??y.ownerName,gridCols:g,gridRows:v},O={deviceID:y.deviceID,deviceName:y.deviceName,deviceIconID:f,canOthersConnect:h,canOthersEdit:h&&_,isOwnedByMe:!0,ownerName:(S==null?void 0:S.username)??y.ownerName};o({active:M,savedDevices:Cu(O)}),s("Enhedsindstillinger gemt.")}catch(M){u("error",M instanceof Error?M.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{te.setBusy(!1)}},cancelCreate:async()=>{te&&await te.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{ll=!0,te&&await te.disconnect().catch(()=>{}),ll=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:f=>{o({savedDevices:Ag(f)})},clearSavedDevices:()=>{Rg(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{ll=!0,te!=null&&te.connected&&await te.disconnect().catch(()=>{}),kg(),window.location.reload()},updateUsername:f=>{const h=r().user,_=f.trim();if(!h||!_)return;const g={...h,username:_};Uh(g),o(v=>{var S;const y=v.savedDevices.map(M=>M.isOwnedByMe?{...M,ownerName:_}:M);return _o(y),{user:g,active:(S=v.active)!=null&&S.isOwnedByMe?{...v.active,ownerName:_}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},openPicoIde:()=>{const f=r().screen==="control"&&!!(te!=null&&te.connected);o(h=>({screen:"ide",picoIdeOrigin:f?"control":"dashboard",active:f?h.active:null,layout:f?h.layout:[],sliderValues:f?h.sliderValues:{},toggleValues:f?h.toggleValues:{},radarPings:f?h.radarPings:{},textValues:f?h.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:f,active:h}=r();o({screen:f==="control"&&h&&(te!=null&&te.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(te!=null&&te.connected),bleListFiles:async()=>te!=null&&te.connected?te.listFiles("/"):[],bleReadText:async(f,h,_)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");return te.readText(f,h,_)},bleWriteText:async(f,h,_)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.writeText(f,h,_)},bleDeleteFile:async f=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.deleteFile(f)},bleRestart:async()=>{te!=null&&te.connected&&await te.restart()},bleRestartAndReconnect:async(f="control")=>{const{active:h}=r();if(!(te!=null&&te.connected)||!h)return!1;const _={deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName};ll=!0,u("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await te.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:_.deviceName,iconID:_.deviceIconID}});for(let g=0;g<12&&(te!=null&&te.connected);g+=1)await $h(250);te!=null&&te.connected||(ll=!1);for(let g=1;g<=8;g+=1){await $h(g===1?1200:850);try{const y=(await yp()).find(S=>S.id===_.deviceID);if(!y){o({progress:{value:Math.min(88,20+g*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+g*8),label:`Genforbinder (${g}/8)...`}}),await r().connectToDevice(y,_),f==="ide"&&o(S=>({screen:"ide",picoIdeOrigin:"control",active:S.active,layout:S.layout,sliderValues:S.sliderValues,toggleValues:S.toggleValues,radarPings:S.radarPings,textValues:S.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){u("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),ll=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:_}),!1},reconnectLostDevice:async()=>{var h;const f=r().connectionLost;if(f){o({connectionLost:null});try{if((h=navigator.bluetooth)!=null&&h.getDevices){const g=(await navigator.bluetooth.getDevices()).find(v=>v.id===f.deviceID);if(g){await r().connectToDevice(g,f);return}}}catch{}u("info","Genforbind: vælg enheden i browserens liste."),await r().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:f=>te==null?void 0:te.enqueueButton(f),sendSlider:(f,h)=>{o(_=>({sliderValues:{..._.sliderValues,[f]:h}})),te==null||te.enqueueSlider(f,h)},sendToggle:(f,h)=>{o(_=>({toggleValues:{..._.toggleValues,[f]:h}})),te==null||te.enqueueToggle(f,h)},saveLayout:async f=>{if(te)try{te.setBusy(!0),await te.saveLayout(f),o({layout:f,editMode:!1})}catch(h){u("error",h instanceof Error?h.message:"Kunne ikke gemme layout.")}finally{te.setBusy(!1)}},setEditMode:f=>o({editMode:f,sideMenuOpen:!1,menuPage:null}),setDashboardPage:f=>o({dashboardPage:f}),toggleSideMenu:f=>o(h=>({sideMenuOpen:f??!h.sideMenuOpen})),toggleDebugger:f=>o(h=>({debuggerOpen:f??!h.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:f=>o({menuPage:f,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(f,h)=>u(f,h),askConfirm:f=>o({confirmDialog:f}),closeConfirm:()=>o({confirmDialog:null}),showToast:f=>s(f),dismissToast:()=>{kr&&clearTimeout(kr),o({toast:null})}}}),bo="./",Ep=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function wi(o){const r=o>=0&&o<Ep.length?o:0;return`${bo}device-icons/${r}.png`}const lb=`${bo}art/logo.png`,ab=`${bo}art/Teknologiskolen_logo.png`,ib=`${bo}art/logo_teknologiskolen_white.png`,rb={menu:c.jsxs(c.Fragment,{children:[c.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),c.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),c.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:c.jsxs(c.Fragment,{children:[c.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),c.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),c.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),c.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:c.jsx(c.Fragment,{children:c.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),c.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:c.jsxs(c.Fragment,{children:[c.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),c.jsx("path",{d:"M8 9l-3 3 3 3"}),c.jsx("path",{d:"M16 9l3 3-3 3"}),c.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),c.jsx("polyline",{points:"16 17 21 12 16 7"}),c.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:c.jsxs(c.Fragment,{children:[c.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),c.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),c.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),c.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),c.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),c.jsx("polyline",{points:"17 8 12 3 7 8"}),c.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:c.jsxs(c.Fragment,{children:[c.jsx("polyline",{points:"23 4 23 10 17 10"}),c.jsx("polyline",{points:"1 20 1 14 7 14"}),c.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),c.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),c.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),c.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:c.jsxs(c.Fragment,{children:[c.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),c.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Rt({name:o,size:r=24,className:u}){return c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:u,"aria-hidden":"true",children:rb[o]})}const sb=1850,ob=450;function cb(){const o=W(s=>s.splashTarget),r=W(s=>s.finishSplash),u=o?"splash-screen-animation splash-ready":"splash-pending";return q.useEffect(()=>{if(!o)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?ob:sb,h=window.setTimeout(r,f);return()=>window.clearTimeout(h)},[r,o]),c.jsxs("div",{className:`screen splash-screen ${u}`,"aria-label":"Teknologiskolen starter",children:[c.jsx("div",{className:"splash-white-cover"}),c.jsx("div",{className:"splash-red-field"}),c.jsx("div",{className:"splash-brand","aria-hidden":"true",children:c.jsx("div",{className:"splash-mark splash-logo-shell",children:c.jsx("img",{className:"splash-logo",src:lb,alt:""})})}),c.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Qh(){const o=W(f=>f.createUser),[r,u]=q.useState(""),s=r.length>0;return c.jsxs("div",{className:"screen intro",children:[c.jsxs("div",{className:"intro-header",children:[c.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),c.jsx("img",{className:"intro-header-image",src:ab,alt:"Teknologiskolen"}),c.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),c.jsxs("div",{className:"intro-body",children:[c.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),c.jsxs("div",{className:`field ${s?"filled":""}`,children:[c.jsx("input",{id:"username",value:r,onChange:f=>u(f.target.value),maxLength:32,autoComplete:"off",placeholder:"Find på et navn"}),c.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(r),children:"Fortsæt"})]}),c.jsx("span",{className:"version",children:Br})]})}function ef({title:o,onMenu:r}){return c.jsx("header",{className:"topbar",children:c.jsxs("div",{className:"topbar-inner",children:[c.jsx("h1",{children:o}),c.jsx("button",{className:"iconbtn",type:"button",onClick:r,"aria-label":"Menu",children:c.jsx(Rt,{name:"menu"})})]})})}function gt({title:o,onClose:r,children:u,closeVariant:s="plain"}){const f=s==="circle",h=q.useRef(!1);return c.jsx("div",{className:"modal-root",onPointerDown:_=>{h.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&h.current&&r(),h.current=!1},children:c.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[c.jsxs("div",{className:"modal-head",children:[c.jsx("h3",{children:o}),c.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:r,"aria-label":"Luk",children:c.jsx(Rt,{name:f?"delete":"close",size:f?30:24})})]}),u]})})}function Fh(){const o=W(O=>O.savedDevices),r=W(O=>O.toggleSideMenu),u=W(O=>O.findDevice),s=W(O=>O.removeSavedDevice),f=W(O=>O.askConfirm),h=W(O=>O.dashboardPage),_=W(O=>O.setDashboardPage),g=db(),[v,y]=q.useState(null),S=go(),M=o.filter(O=>h==="mine"?O.isOwnedByMe:!O.isOwnedByMe);return c.jsxs("div",{className:"screen dashboard-screen",children:[c.jsx(ef,{title:"Hovedmenu",onMenu:()=>r()}),c.jsxs("div",{className:"content dash-content",children:[!S&&c.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),c.jsxs("div",{className:"segmented",children:[c.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),c.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),c.jsx("div",{className:"panel panel-white device-list",children:M.length===0?c.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):M.map(O=>c.jsx(ub,{device:O,disabled:!S,onConnect:()=>g(O),onSettings:()=>y(O)},O.deviceID))})]}),c.jsx("button",{className:"fab",type:"button",onClick:()=>u(),disabled:!S,"aria-label":"Find enhed",children:c.jsx(Rt,{name:"plus",size:30})}),c.jsx("span",{className:"version",children:Br}),v&&c.jsx(gt,{title:"Enhedsindstillinger",onClose:()=>y(null),children:c.jsxs("div",{className:"settings-stack",children:[c.jsxs("div",{className:"saved-device-head",children:[c.jsx("img",{src:wi(v.deviceIconID),alt:""}),c.jsx("strong",{children:v.deviceName})]}),c.jsx(lo,{label:"Gemte indstillinger",value:"Denne browser"}),c.jsx(lo,{label:"Ejer",value:fb(v)}),c.jsx(lo,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),c.jsx(lo,{label:"Andre må redigere",value:v.canOthersEdit?"Ja":"Nej"}),c.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!S,onClick:()=>{const O=v;y(null),g(O)},children:"Forbind"}),c.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function ub({device:o,disabled:r,onConnect:u,onSettings:s}){return c.jsxs("div",{className:"device-tile-wrap",children:[c.jsxs("button",{className:"device-tile",type:"button",onClick:u,disabled:r,children:[c.jsx("img",{className:"device-tile-icon",src:wi(o.deviceIconID),alt:""}),c.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),c.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:c.jsx(Rt,{name:"settings"})})]})}function lo({label:o,value:r}){return c.jsxs("div",{className:"settings-row",children:[c.jsx("span",{children:o}),c.jsx("strong",{children:r})]})}function fb(o){var r;return o.isOwnedByMe?"Dig":((r=o.ownerName)==null?void 0:r.trim())||"Anden bruger"}function db(){const o=W(s=>s.connectToDevice),r=W(s=>s.findDevice),u=W(s=>s.log);return async s=>{const h=(await yp()).find(_=>_.id===s.deviceID);h?await o(h,s):(u("info","Genforbind: vælg enheden i browserens liste."),await r())}}function mb(){const o=W(u=>u.connecting),r=W(u=>u.progress);return c.jsxs("div",{className:"screen connection",children:[c.jsx("div",{className:"device-icon-pick",children:c.jsx("img",{src:wi((o==null?void 0:o.iconID)??0),alt:""})}),c.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),c.jsx("div",{className:"spinner"}),c.jsxs("div",{style:{width:"100%"},children:[c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:"progress-fill",style:{width:`${r.value}%`}})}),c.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:r.label})]})]})}function wp({selected:o,onSelect:r,onClose:u}){return c.jsx(gt,{title:"Vælg Enhedens Ikon",onClose:u,children:c.jsx("div",{className:"icon-grid",children:Ep.map(s=>c.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{r(s.id),u()},"aria-label":s.label,children:c.jsx("img",{src:wi(s.id),alt:""})},s.id))})})}function hb(){const o=W(pe=>pe.finishCreate),r=W(pe=>pe.cancelCreate),[u,s]=q.useState(0),[f,h]=q.useState(!1),[_,g]=q.useState(!1),[v,y]=q.useState(!1),[S,M]=q.useState(Si),[O,Q]=q.useState(Lr),[F,le]=q.useState(!1),U=pe=>Number.isFinite(pe)?Math.max(yi,Math.min(vi,Math.round(pe))):Si;async function G(){le(!0),await o(u,_,_&&v,U(S),U(O))}return c.jsxs("div",{className:"screen",children:[c.jsx("header",{className:"topbar",children:c.jsx("h1",{children:"Opret Enhed"})}),c.jsxs("div",{className:"content create-body",children:[c.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[c.jsx("img",{src:wi(u),alt:""}),c.jsx("span",{className:"badge",children:c.jsx(Rt,{name:"plus",size:22})})]}),c.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),c.jsxs("div",{className:"segmented",children:[c.jsx("button",{type:"button",className:_?"":"active",onClick:()=>g(!1),children:"Privat"}),c.jsx("button",{type:"button",className:_?"active":"",onClick:()=>g(!0),children:"Offentlig"})]}),_&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"prompt",children:"Må andre redigere denne enhed?"}),c.jsxs("div",{className:"segmented",children:[c.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),c.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]})]}),c.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),c.jsxs("div",{className:"row",style:{width:"100%"},children:[c.jsxs("div",{className:"grid-field",children:[c.jsx("label",{htmlFor:"cols",children:"Kolonner"}),c.jsx("input",{id:"cols",type:"number",min:yi,max:vi,value:Number.isNaN(S)?"":S,onChange:pe=>M(parseInt(pe.target.value,10)),onBlur:()=>M(U(S))})]}),c.jsxs("div",{className:"grid-field",children:[c.jsx("label",{htmlFor:"rows",children:"Rækker"}),c.jsx("input",{id:"rows",type:"number",min:yi,max:vi,value:Number.isNaN(O)?"":O,onChange:pe=>Q(parseInt(pe.target.value,10)),onBlur:()=>Q(U(O))})]})]}),c.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[c.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>r(),disabled:F,children:"Annuller"}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:G,disabled:F,children:F?"Opretter...":"Opret"})]})]}),f&&c.jsx(wp,{selected:u,onSelect:s,onClose:()=>h(!1)}),c.jsx("span",{className:"version",children:Br})]})}const Ei=8;function so(o){return Math.max(5,Math.min(22,o))}function uo(o,r,u){const s=Math.max(1,o.length),f=(r-Ei*2)/(s*.58),h=(u-Ei*2)*.48;return so(Math.min(f,h))}function pb(o,r,u,s,f){const h=o.trim().split(/\s+/).filter(Boolean),_=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),g=f?so(Math.min(r/4.6,u/4.6,12)):0,v=f?g+Ei:Ei;if(s){const M=Math.max(1,u-v*2);return{fontSize:so(Math.min(r*.48,M/(_*1.04))),endFontSize:g,centerInset:f?{top:v,bottom:v}:{}}}const y=Math.max(1,r-v*4.2);return{fontSize:so(Math.min(u*.42,y/(_*.58))),endFontSize:g,centerInset:f?{left:v*2.1,right:v*2.1}:{}}}function _b({control:o,rect:r,disabled:u,latestValue:s,toggleValue:f,radarPings:h=[],textValue:_,onButton:g,onSlider:v,onToggle:y}){const S={left:r.cx,top:r.cy,width:r.width,height:r.height};if(o.type==="button")return c.jsx("div",{className:"control",style:S,children:c.jsx("button",{className:"control-button",type:"button",disabled:u,style:{width:"100%",height:"100%",fontSize:uo(o.name,r.width,r.height)},onPointerDown:M=>{u||(M.preventDefault(),g(o.name))},children:o.name})});if(o.type==="toggle"){const M=!!f;return c.jsx("div",{className:"control",style:S,children:c.jsx("button",{className:`control-toggle ${M?"on":""}`,type:"button",disabled:u,"aria-pressed":M,style:{width:"100%",height:"100%",fontSize:uo(o.name,r.width,r.height)},onPointerDown:O=>{u||(O.preventDefault(),y(o.name,!M))},children:c.jsx("span",{children:o.name})})})}return o.type==="radar"?c.jsx("div",{className:"control",style:S,children:c.jsx(Tp,{control:o,pings:h,width:r.width,height:r.height})}):o.type==="text"?c.jsx("div",{className:"control",style:S,children:c.jsx(Np,{message:_??o.name,width:r.width,height:r.height})}):c.jsx("div",{className:"control",style:S,children:c.jsx(Rb,{control:o,disabled:u,latestValue:s,onSlider:v,width:r.width,height:r.height})})}function gb(o,r,u){const s=o.trim()||" ",h=s.split(/\s+/).filter(Boolean).reduce((M,O)=>Math.max(M,O.length),1),_=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(h*1.9)))),g=Math.max(1,r-Ei*3),v=Math.max(1,u-Ei*3),y=g/(h*.58),S=v/(_*1.16);return Math.max(7,Math.min(24,y,S))}function Np({message:o,width:r,height:u}){const s=o.trim()||"...";return c.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:gb(s,r,u)},children:c.jsx("span",{children:s})})}function Tp({control:o,pings:r,width:u,height:s,preview:f=!1}){const[,h]=q.useState(0),_=Math.max(120,o.radarFadeMs??1200),g=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=Ft(g),S=Ft(v),M=Math.abs(v-g)>=360||y===S&&g!==v,O=Math.max(1,o.radarMaxDistance??200),Q=Date.now(),F=r[r.length-1],le=o.rotation,U=Ft(y+le),G=Ft(S+le),pe=wb(y,S),oe=((F==null?void 0:F.angle)??pe)+le,Ee=f?[{id:"preview",angle:pe,distance:O*.62,createdAt:Q}]:r.filter(D=>Q-D.createdAt<=_),fe=!M,we=Math.max(8,Math.min(12,Math.min(u,s)*.16)),ee=0,J=0,ge=1,_e=M?{x:-1.12,y:-1.12,width:2.24,height:2.24}:vb(U,G),ye=M?"":bb(ee,J,ge,U,G),re=Wh(g),Ge=Wh(v),Ae=fe?Sb(U,G,_e,u,s,re,Ge,we):null;q.useEffect(()=>{if(f||r.length===0)return;const D=window.setInterval(()=>h(V=>V+1),120);return()=>window.clearInterval(D)},[_,r.length,f]);const Ze=_n(ee,J,ge,oe);return c.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[c.jsxs("svg",{width:u,height:s,viewBox:`${_e.x} ${_e.y} ${_e.width} ${_e.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[M?c.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:J,r:ge}):c.jsx("path",{className:"radar-sector-fill",d:ye}),[.25,.5,.75,1].map(D=>M?c.jsx("circle",{className:"radar-ring",cx:ee,cy:J,r:ge*D},D):c.jsx("path",{className:"radar-ring",d:yb(ee,J,ge*D,U,G)},D)),!M&&c.jsx(Zh,{cx:ee,cy:J,radius:ge,angle:U}),!M&&c.jsx(Zh,{cx:ee,cy:J,radius:ge,angle:G}),c.jsx("line",{className:"radar-sweep",x1:ee,y1:J,x2:Ze.x,y2:Ze.y}),Ee.map(D=>{const V=f?0:Q-D.createdAt,ae=Math.max(0,1-V/_),xe=Math.max(0,Math.min(O,D.distance)),me=_n(ee,J,ge*(xe/O),D.angle+le);return c.jsx("circle",{className:"radar-ping",cx:me.x,cy:me.y,r:Math.max(.025,Math.min(_e.width,_e.height)*.025),opacity:ae},D.id)})]}),fe&&Ae&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"radar-angle-label",style:{left:Ae.min.x,top:Ae.min.y,fontSize:we},children:re}),c.jsx("span",{className:"radar-angle-label",style:{left:Ae.max.x,top:Ae.max.y,fontSize:we},children:Ge})]})]})}function Zh({cx:o,cy:r,radius:u,angle:s}){const f=_n(o,r,u,s);return c.jsx("line",{className:"radar-boundary",x1:o,y1:r,x2:f.x,y2:f.y})}function _n(o,r,u,s){const f=(Ft(s)-90)*Math.PI/180;return{x:o+Math.cos(f)*u,y:r+Math.sin(f)*u}}function bb(o,r,u,s,f){const h=_n(o,r,u,s),_=_n(o,r,u,f),g=tf(s,f)>180?1:0;return`M ${o} ${r} L ${h.x} ${h.y} A ${u} ${u} 0 ${g} 1 ${_.x} ${_.y} Z`}function yb(o,r,u,s,f){const h=_n(o,r,u,s),_=_n(o,r,u,f),g=tf(s,f)>180?1:0;return`M ${h.x} ${h.y} A ${u} ${u} 0 ${g} 1 ${_.x} ${_.y}`}function tf(o,r){const u=Ft(o),s=Ft(r),f=s>=u?s-u:360-u+s;return f===0?360:f}function vb(o,r){const u=[{x:0,y:0},_n(0,0,1,o),_n(0,0,1,r)];for(const S of[0,90,180,270])xb(S,o,r)&&u.push(_n(0,0,1,S));const s=Math.min(...u.map(S=>S.x)),f=Math.max(...u.map(S=>S.x)),h=Math.min(...u.map(S=>S.y)),_=Math.max(...u.map(S=>S.y)),g=Math.max(.1,f-s),v=Math.max(.1,_-h),y=Math.max(g,v)*.24;return{x:s-y,y:h-y,width:g+y*2,height:v+y*2}}function xb(o,r,u){const s=Ft(r),f=Ft(o),h=tf(r,u),_=Ft(f-s);return _>=0&&_<=h}function Sb(o,r,u,s,f,h,_,g){const y=_n(0,0,1.1,o),S=_n(0,0,1.1,r);return{min:Ph(y,u,s,f,h,g),max:Ph(S,u,s,f,_,g)}}function Eb(o,r,u,s){return{x:(o.x-r.x)/r.width*u,y:(o.y-r.y)/r.height*s}}function Ph(o,r,u,s,f,h){const _=Eb(o,r,u,s),g=Math.max(10,f.length*h*.62),v=h,y=7;return{x:Jh(_.x,g/2+y,Math.max(g/2+y,u-g/2-y)),y:Jh(_.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function Jh(o,r,u){return Math.max(r,Math.min(u,o))}function Wh(o){return`${Math.round(o)}`}function Ft(o){return Number.isFinite(o)?(o%360+360)%360:0}function wb(o,r){const u=Ft(o),s=Ft(r),f=s>=u?s-u:360-u+s;return Ft(u+f/2)}function Nb(o,r){if(!r)return o;const u=o.trim().split(/\s+/).filter(Boolean);return c.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:u.map((s,f)=>c.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((h,_)=>c.jsx("span",{children:h},`${h}-${_}`))},`${s}-${f}`))})}function Tb(o){const r={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},u=4;return o===0?{low:{...r,left:u,top:0,bottom:0},high:{...r,right:u,top:0,bottom:0}}:o===180?{low:{...r,right:u,top:0,bottom:0},high:{...r,left:u,top:0,bottom:0}}:o===90?{low:{...r,bottom:u,left:0,right:0},high:{...r,top:u,left:0,right:0}}:{low:{...r,top:u,left:0,right:0},high:{...r,bottom:u,left:0,right:0}}}function Mb({name:o,vertical:r,rotation:u,color:s,fontSize:f,endFontSize:h,centerInset:_,lowLabel:g,highLabel:v,showEnds:y}){const S=y?Tb(u):null;return c.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[c.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:Nb(o,r)}),S&&c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{...S.low,fontWeight:800,fontSize:h},children:g}),c.jsx("div",{style:{...S.high,fontWeight:800,fontSize:h},children:v})]})]})}function Mp({name:o,rotation:r,width:u,height:s,value:f,showEnds:h=!1,fillColor:_="var(--red)",lowLabel:g="0",highLabel:v="100"}){const y=r===90||r===270,{fontSize:S,endFontSize:M,centerInset:O}=pb(o,u,s,y,h);let Q,F;r===0?(Q={left:0,top:0,bottom:0,width:`${f}%`},F={left:0,top:0}):r===180?(Q={right:0,top:0,bottom:0,width:`${f}%`},F={right:0,top:0}):r===90?(Q={left:0,right:0,bottom:0,height:`${f}%`},F={left:0,bottom:0}):(Q={left:0,right:0,top:0,height:`${f}%`},F={left:0,top:0});const le=U=>c.jsx(Mb,{name:o,vertical:y,rotation:r,color:U,fontSize:S,endFontSize:M,centerInset:O,lowLabel:g,highLabel:v,showEnds:h});return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${u}px`,height:`${s}px`},children:le("var(--red)")}),c.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...Q},children:c.jsx("div",{style:{position:"absolute",width:`${u}px`,height:`${s}px`,...F},children:le("var(--white)")})})]})}function Rb({control:o,disabled:r,latestValue:u,onSlider:s,width:f,height:h}){const _=q.useRef(null),g=o.sliderMin??0,v=o.sliderMax??100,[y,S]=q.useState(()=>u===void 0?ep(o.sliderRecenter??"none"):tp(u,g,v)),M=q.useRef(null),O=o.rotation;q.useEffect(()=>{u!==void 0&&(S(tp(u,g,v)),M.current=u)},[u,g,v]);function Q(G){const pe=_.current;if(!pe)return 0;const oe=pe.getBoundingClientRect();let Ee;return O===0?Ee=(G.clientX-oe.left)/oe.width:O===180?Ee=1-(G.clientX-oe.left)/oe.width:O===90?Ee=1-(G.clientY-oe.top)/oe.height:Ee=(G.clientY-oe.top)/oe.height,Math.max(0,Math.min(1,Ee))}function F(G){r||le(Q(G))}function le(G){const pe=Math.round(G*100),oe=Math.round(g+(v-g)*G);S(pe),oe!==M.current&&(M.current=oe,s(o.name,oe))}function U(){const G=o.sliderRecenter??"none";r||G==="none"||le(ep(G)/100)}return c.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:G=>{r||(G.preventDefault(),G.currentTarget.setPointerCapture(G.pointerId),F(G))},onPointerMove:G=>{G.buttons!==0&&F(G)},onPointerUp:U,onPointerCancel:U,onLostPointerCapture:U,children:c.jsx(Mp,{name:o.name,rotation:O,width:f,height:h,value:y,showEnds:!0,lowLabel:String(g),highLabel:String(v)})})}function ep(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function tp(o,r,u){return u===r?0:Math.max(0,Math.min(100,Math.round((o-r)/(u-r)*100)))}const kb={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},jb=["button","slider","toggle","radar","text"];function Ab({unplaced:o,onAdd:r,onClose:u}){const s=q.useMemo(()=>jb.filter(g=>o.some(v=>v.type===g)),[o]),[f,h]=q.useState(s[0]??"button"),_=o.filter(g=>g.type===f);return q.useEffect(()=>{s.length>0&&!s.includes(f)&&h(s[0])},[s,f]),c.jsxs(gt,{title:"Tilføj kontrol",onClose:u,children:[s.length>1&&c.jsx("div",{className:"segmented add-modal-tabs",children:s.map(g=>c.jsx("button",{type:"button",className:f===g?"active":"",onClick:()=>h(g),children:kb[g]},g))}),c.jsx("div",{className:"add-lists",children:s.length===0?c.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(g=>c.jsxs("button",{type:"button",className:"add-entry",onClick:()=>r(g.name),children:[c.jsx("span",{children:g.name}),c.jsx("span",{className:"iconbtn",children:c.jsx(Rt,{name:"plus",size:22})})]},g.name))})]})}function Rp(o){const[r,u]=q.useState({w:0,h:0}),s=q.useRef(null),f=q.useRef(null);return q.useLayoutEffect(()=>{var v;const h=o.current;if(s.current===h)return;if((v=f.current)==null||v.disconnect(),f.current=null,s.current=h,!h){u(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const _=()=>{const y={w:h.clientWidth,h:h.clientHeight};u(S=>S.w===y.w&&S.h===y.h?S:y)};_();const g=new ResizeObserver(_);g.observe(h),f.current=g}),q.useEffect(()=>()=>{var h;(h=f.current)==null||h.disconnect(),f.current=null,s.current=null},[]),r}function xi(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const np=4,lp=5;function ap(o){if(!xi(o))return null;const r=o.centerX2/2,u=o.centerY2/2;return{x0:r-o.spanX/2,x1:r+o.spanX/2,y0:u-o.spanY/2,y1:u+o.spanY/2}}function Db(o,r,u=.02){return o.x0<r.x1-u&&r.x0<o.x1-u&&o.y0<r.y1-u&&r.y0<o.y1-u}function ip(o,r){const u=zr(o,r);if(!u||o.spanX===null||o.spanY===null)return o;const s=ro(u.cx,u.cy,o.spanX,o.spanY,r);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function rp(o,r){return Math.max(1,Math.min(r.cols-1,o))}function sp(o,r){return Math.max(1,Math.min(r.rows-1,o))}function Ob(){const o=W(A=>A.layout),r=W(A=>A.active),u=W(A=>A.saveLayout),s=W(A=>A.setEditMode),f=W(A=>A.askConfirm),h=!!(r!=null&&r.canEdit),[_,g]=q.useState(()=>o.map(A=>({...A}))),[v,y]=q.useState(null),[S,M]=q.useState(!1),[O,Q]=q.useState(null),[F,le]=q.useState(null),[U,G]=q.useState(!1),pe=q.useRef(null),oe=Rp(pe),Ee=oe.w>0&&oe.h>0,fe=vp(oe.w,oe.h,r==null?void 0:r.gridCols,r==null?void 0:r.gridRows),we=q.useMemo(()=>Ee?Xg(fe):[],[fe,Ee]),ee=_.filter(xi),J=_.filter(A=>!xi(A)),ge=q.useMemo(()=>{const A=new Set;for(let I=0;I<ee.length;I+=1)for(let Z=I+1;Z<ee.length;Z+=1){const K=ap(ee[I]),Ke=ap(ee[Z]);K&&Ke&&Db(K,Ke)&&(A.add(ee[I].name),A.add(ee[Z].name))}return A},[ee]),_e=ge.size>0,ye=_.find(A=>A.name===v)??null,re=q.useMemo(()=>op(_)!==op(o),[_,o]),Ge=q.useMemo(()=>{if(!O||!F)return null;const A=_.find(K=>K.name===O);if(!A||A.spanX===null||A.spanY===null)return null;const I=ro(F.cx,F.cy,A.spanX,A.spanY,fe),Z=zr({...A,centerX2:I.centerX2,centerY2:I.centerY2},fe);return Z?{name:A.name,rect:Z}:null},[_,O,F,fe]);function Ae(A,I){g(Z=>Z.map(K=>K.name===A?I(K):K))}function Ze(A,I){A.stopPropagation(),y(I.name);const Z=zr(I,fe);Z&&(Q(I.name),le({cx:Z.cx,cy:Z.cy}),A.currentTarget.setPointerCapture(A.pointerId))}function D(A){if(!O)return;const I=pe.current;if(!I)return;const Z=I.getBoundingClientRect(),K=I.clientWidth/Z.width,Ke=I.clientHeight/Z.height;le({cx:Math.max(0,Math.min(I.clientWidth,(A.clientX-Z.left)*K)),cy:Math.max(0,Math.min(I.clientHeight,(A.clientY-Z.top)*Ke))})}function V(){if(O&&F){const A=_.find(I=>I.name===O);if(A&&A.spanX!==null&&A.spanY!==null){const I=ro(F.cx,F.cy,A.spanX,A.spanY,fe);Ae(O,Z=>({...Z,centerX2:I.centerX2,centerY2:I.centerY2}))}}Q(null),le(null)}function ae(A){Ae(A,I=>I.spanX===null||I.spanY===null?{...I,rotation:(I.rotation+270)%360}:ip({...I,rotation:(I.rotation+270)%360,spanX:rp(I.spanY,fe),spanY:sp(I.spanX,fe)},fe))}function xe(A,I,Z){Ae(A,K=>{if(K.spanX===null||K.spanY===null)return K;const Ke=I==="x"?rp(K.spanX+Z,fe):K.spanX,Be=I==="y"?sp(K.spanY+Z,fe):K.spanY;return ip({...K,spanX:Ke,spanY:Be},fe)})}function me(A){Ae(A,I=>({...I,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function E(A){M(!1);const I=_.find(K=>K.name===A);if(!I)return;const Z=ro(fe.areaW/2,fe.areaH/2,np,lp,fe);Ae(A,()=>({...I,spanX:np,spanY:lp,rotation:0,centerX2:Z.centerX2,centerY2:Z.centerY2})),y(A)}async function z(){_e||(G(!0),await u(_),G(!1))}function P(){if(!re){s(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return c.jsxs("div",{className:"edit-view",children:[c.jsx("div",{className:"edit-band edit-toolbar-band",children:ye&&xi(ye)?c.jsxs("div",{className:"edit-toolbar",onPointerDown:A=>A.stopPropagation(),children:[c.jsx(jr,{label:"⟲",title:"Roter",onClick:()=>ae(ye.name)}),c.jsx(jr,{label:"W−",title:"Gør smallere",onClick:()=>xe(ye.name,"x",-1),disabled:ye.spanX===null||ye.spanX<=1}),c.jsx(jr,{label:"W+",title:"Gør bredere",onClick:()=>xe(ye.name,"x",1),disabled:ye.spanX===null||ye.spanX>=fe.cols-1}),c.jsx(jr,{label:"H−",title:"Gør lavere",onClick:()=>xe(ye.name,"y",-1),disabled:ye.spanY===null||ye.spanY<=1}),c.jsx(jr,{label:"H+",title:"Gør højere",onClick:()=>xe(ye.name,"y",1),disabled:ye.spanY===null||ye.spanY>=fe.rows-1}),c.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>me(ye.name),"aria-label":"Slet",children:c.jsx(Rt,{name:"delete",size:24})})]}):c.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),c.jsx("div",{className:"controls-area-wrap",children:c.jsx("div",{className:"controls-area",ref:pe,style:{touchAction:"none"},onPointerMove:D,onPointerUp:V,onPointerDown:()=>y(null),children:Ee&&c.jsxs(c.Fragment,{children:[c.jsx("svg",{width:fe.areaW,height:fe.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:we.map((A,I)=>c.jsx("circle",{cx:A.x,cy:A.y,r:2.5,fill:"rgba(198,80,78,0.45)"},I))}),Ge&&c.jsx("div",{className:"snap-preview",style:{left:Ge.rect.cx,top:Ge.rect.cy,width:Ge.rect.width,height:Ge.rect.height}}),ee.map(A=>{const I=O===A.name&&F,Z=zr(A,fe);if(!Z)return null;const K=I?F.cx:Z.cx,Ke=I?F.cy:Z.cy,Be={left:K,top:Ke,width:Z.width,height:Z.height,outline:v===A.name?"3px solid var(--text)":"none",outlineOffset:2};return c.jsx("div",{className:`control ${ge.has(A.name)?"colliding":""}`,style:Be,onPointerDown:gn=>Ze(gn,A),children:A.type==="button"?c.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:uo(A.name,Z.width,Z.height)},children:A.name}):A.type==="toggle"?c.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:uo(A.name,Z.width,Z.height)},children:c.jsx("span",{children:A.name})}):A.type==="radar"?c.jsx(Tp,{control:A,pings:[],width:Z.width,height:Z.height,preview:!0}):A.type==="text"?c.jsx(Np,{message:A.name,width:Z.width,height:Z.height}):c.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:c.jsx(Mp,{name:A.name,rotation:A.rotation,width:Z.width,height:Z.height,value:50,showEnds:!0,lowLabel:String(A.sliderMin??0),highLabel:String(A.sliderMax??100),fillColor:ge.has(A.name)?"var(--disabled)":"var(--red)"})})},A.name)}),h&&c.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:A=>A.stopPropagation(),onClick:()=>M(!0),"aria-label":"Tilføj kontrol",children:c.jsx(Rt,{name:"plus",size:24})}),U&&c.jsx("div",{className:"overlay",children:c.jsx("div",{className:"spinner"})})]})})}),c.jsxs("div",{className:"edit-band edit-actions-band",children:[c.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:P,disabled:U,children:"Annuller"}),c.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:z,disabled:_e||U,children:U?"Gemmer...":"Gem"})]}),S&&c.jsx(Ab,{unplaced:J,onAdd:E,onClose:()=>M(!1)})]})}function op(o){return JSON.stringify(o.map(r=>({type:r.type,name:r.name,centerX2:r.centerX2,centerY2:r.centerY2,spanX:r.spanX,spanY:r.spanY,rotation:r.rotation})))}function jr({label:o,title:r,disabled:u,onClick:s}){return c.jsx("button",{type:"button","aria-label":r,title:r,disabled:u,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:u?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function Cb(){const o=W(U=>U.layout),r=W(U=>U.editMode),u=W(U=>U.active),s=W(U=>U.sliderValues),f=W(U=>U.toggleValues),h=W(U=>U.radarPings),_=W(U=>U.textValues),g=W(U=>U.toggleSideMenu),v=W(U=>U.sendButton),y=W(U=>U.sendSlider),S=W(U=>U.sendToggle),M=q.useRef(null),O=Rp(M),Q=vp(O.w,O.h,u==null?void 0:u.gridCols,u==null?void 0:u.gridRows),F=O.w>0&&O.h>0,le=o.filter(xi);return c.jsxs("div",{className:"screen control-screen",children:[c.jsx(ef,{title:"Kontrol Panel",onMenu:()=>g()}),r?c.jsx(Ob,{}):c.jsx("div",{className:"controls-area-wrap",children:c.jsx("div",{className:"controls-area",ref:M,children:F?le.map(U=>{const G=zr(U,Q);return G?c.jsx(_b,{control:U,rect:G,disabled:!1,latestValue:U.type==="slider"?s[U.name]:void 0,toggleValue:U.type==="toggle"?f[U.name]:void 0,radarPings:U.type==="radar"?h[U.name]:void 0,textValue:U.type==="text"?_[U.name]:void 0,onButton:v,onSlider:y,onToggle:S},U.name):null}):c.jsx("div",{className:"overlay",children:c.jsx("div",{className:"spinner"})})})})]})}const zb="",Bb="",cp="",Na="";function Lu(o){return new Promise(r=>setTimeout(r,o))}class Lb{constructor(r){this.transport=r}async interrupt(){await this.transport.write(cp),await Lu(80),await this.transport.write(cp)}async friendlyRepl(){await this.transport.write(Bb)}async softReset(){await this.transport.write(Na)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(r){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`exec(open(${JSON.stringify(r)}).read())`)}async sendFriendlyLine(r){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(r)}async enterRawRepl(r=2500){if(await this.interrupt(),await Lu(80),await this.transport.write(`\r
`),await Lu(40),!(await this.collectUntil(async()=>{await this.transport.write(zb)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),r)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(r,u=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(r),r.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Na)},f=>f.includes(`${Na}${Na}`)||f.includes(`${Na}>`),u);return await this.friendlyRepl().catch(()=>{}),Ub(s)}collectUntil(r,u,s){return new Promise((f,h)=>{let _="",g=null;const v=setTimeout(()=>{g==null||g(),h(new Error("Timeout ved USB REPL kommando."))},s);g=this.transport.addDataListener(y=>{_+=y,u(_)&&(clearTimeout(v),g==null||g(),f(_))}),r().catch(y=>{clearTimeout(v),g==null||g(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}}function Ub(o){const r=o.indexOf("OK"),u=o.indexOf(Na,r>=0?r:0),s=u>=0?o.indexOf(Na,u+1):-1;if(r<0||u<0)return{output:o.trim(),error:"",raw:o};const f=o.slice(r+2,u).replace(/^\r?\n/,"").trimEnd(),h=s>=0?o.slice(u+1,s).trim():"";return{output:f,error:h,raw:o}}const Hb=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Gb=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],ql=Gb.flatMap(({board:o,firmwareName:r})=>Hb.map(({version:u,date:s,stamp:f,tag:h})=>{const _=`${r}-${f}-${h}.uf2`;return{board:o,version:u,date:s,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),Uu=512;function al(o){return JSON.stringify(o)}function Vb(o){return`bytes.fromhex(${JSON.stringify([...o].map(r=>r.toString(16).padStart(2,"0")).join(""))})`}function Yb(o,r){return`${o==="/"?"":o.replace(/\/$/,"")}/${r}`}class qb{constructor(r){this.repl=r}async list(r="/"){const u=`
import os
base = ${al(r)}
for name in os.listdir(base):
    p = (${al(r)}.rstrip('/') + '/' + name) if ${al(r)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(u);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[h,_,g]=f.split("	"),v=_==="dir"||_==="file"?_:"unknown",y=parseInt(g??"",10);return{name:h,path:Yb(r,h),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(r){const u=`
import sys
with open(${al(r)}, 'rb') as f:
    while True:
        b = f.read(${Uu})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(u,1e4);if(s.error)throw new Error(s.error);const f=s.output.replace(/\s+/g,"");return new TextDecoder().decode(Xb(f))}async writeText(r,u,s){const f=new TextEncoder().encode(u);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`open(${al(r)}, 'wb').close()`),f.length===0){s==null||s(100,"Gemt på Pico");return}for(let h=0;h<f.length;h+=Uu){const _=f.slice(h,h+Uu),g=`
with open(${al(r)}, 'ab') as f:
    f.write(${Vb(_)})
`,v=await this.repl.exec(g,1e4);if(v.error)throw new Error(v.error);const y=Math.min(h+_.length,f.length);s==null||s(10+Math.round(y/f.length*85),`Gemmer ${y}/${f.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(r,u,s,f={}){const h=`${r}.tmp`;if(await this.writeText(h,u,(g,v)=>s==null?void 0:s(Math.min(70,g*.7),v)),s==null||s(78,"Verificerer fil..."),await this.readText(h)!==u)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${r}.`);if(s==null||s(88,"Udskifter fil..."),f.createBackup){const g=await this.nextBackupPath(r).catch(()=>`${r}.backup`);await this.rename(r,g).catch(()=>{})}else await this.delete(r).catch(()=>{});await this.rename(h,r),s==null||s(100,"Installeret på Pico")}async delete(r){const u=await this.repl.exec(`
import os
os.remove(${al(r)})
`);if(u.error)throw new Error(u.error)}async nextBackupPath(r){const u=await this.list("/"),s=new Set(u.map(M=>M.path.toLowerCase())),f=r.replace(/\\/g,"/"),h=f.lastIndexOf("/"),_=h>=0?f.slice(0,h+1):"/",g=h>=0?f.slice(h+1):f.replace(/^\/+/,""),v=g.lastIndexOf("."),y=v>0?g.slice(0,v):g,S=v>0?g.slice(v):"";for(let M=1;M<1e3;M+=1){const O=`${_}${y}_backup${M}${S}`;if(!s.has(O.toLowerCase()))return O}return`${_}${y}_backup${Date.now()}${S}`}async rename(r,u){const s=await this.repl.exec(`
import os
os.rename(${al(r)}, ${al(u)})
`);if(s.error)throw new Error(s.error)}}function Xb(o){const r=new Uint8Array(Math.floor(o.length/2));for(let u=0;u<r.length;u+=1)r[u]=parseInt(o.slice(u*2,u*2+2),16);return r}const Kb=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct
import os
import ubinascii
import machine
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
ALLOWED_COMMAND_TYPES  = ["button", "slider", "toggle", "radar", "text"]
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
      - 'ACK:ownership'                  -> 'READY:permission'
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
    Control commands (fire-and-forget, routed to on_button/on_slider/on_toggle;
    on_write is still available as a raw fallback):
      - 'button,<NAME>' / 'slider,<NAME>:<VALUE>' / 'toggle,<NAME>:<0|1>'

    Telemetry (device -> app, optional from main.py):
      - 'radar,<NAME>,<ANGLE_DEGREES>,<DISTANCE_CM>'
      - 'text,<NAME>,<MESSAGE>'
      - 'toggle_state,<NAME>,<0|1>'
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
    def __init__(self, base_controls=None, device_base_name="Device", callbacks=None):
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
        # ---- Callbacks for app-level logic
        self._on_write_callback = None
        self._on_button_callback = None
        self._on_slider_callback = None
        self._on_toggle_callback = None
        self._on_connect_callback = None
        self._on_disconnect_callback = None
        self._auto_bind_main_callbacks(callbacks)

        # ---- Start up
        self._register_services()
        self.load_settings_from_file()
        self.load_layout_from_file()
        self._advertise()
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
        """Build a list of control dicts from tuples like [("button","A"),("slider","B")]."""
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
            if ctrl_type == "slider":
                ctrl["min"] = 0
                ctrl["max"] = 100
                ctrl["recenter"] = "none"
                if len(spec) >= 4:\r
                    try:\r
                        ctrl["min"] = int(spec[2])\r
                        ctrl["max"] = int(spec[3])\r
                    except:\r
                        ctrl["min"] = 0\r
                        ctrl["max"] = 100\r
                if ctrl["max"] == ctrl["min"]:\r
                    ctrl["max"] = ctrl["min"] + 1\r
                if len(spec) >= 5 and spec[4] in SLIDER_RECENTER_MODES:
                    ctrl["recenter"] = spec[4]
            elif ctrl_type == "toggle":
                ctrl["initial"] = 0
                if len(spec) >= 3:
                    try:
                        ctrl["initial"] = 1 if int(spec[2]) == 1 else 0
                    except:
                        ctrl["initial"] = 0
            elif ctrl_type == "radar":
                ctrl["minAngle"] = 0
                ctrl["maxAngle"] = 180
                ctrl["maxDistance"] = 200
                ctrl["fadeMs"] = 1200
                if len(spec) >= 4:
                    try:
                        ctrl["minAngle"] = int(float(spec[2]))
                        ctrl["maxAngle"] = int(float(spec[3]))
                    except:
                        ctrl["minAngle"] = 0
                        ctrl["maxAngle"] = 180
                if len(spec) >= 5:
                    try:
                        ctrl["maxDistance"] = max(1, int(float(spec[4])))
                    except:
                        ctrl["maxDistance"] = 200
                if len(spec) >= 6:
                    try:
                        ctrl["fadeMs"] = max(120, int(float(spec[5])))
                    except:
                        ctrl["fadeMs"] = 1200
            result.append(ctrl)
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
                    if ctrl["type"] == "slider":
                        mn = ctrl.get("min", 0)
                        mx = ctrl.get("max", 100)
                        recenter = ctrl.get("recenter", "none")
                        f.write("{},{},{},{},{},{},{},{},{},{}\\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r, mn, mx, recenter))
                    elif ctrl["type"] == "toggle":
                        initial = 1 if ctrl.get("initial", 0) == 1 else 0
                        f.write("{},{},{},{},{},{},{},{}\\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r, initial))
                    elif ctrl["type"] == "radar":
                        f.write("{},{},{},{},{},{},{},{},{},{},{}\\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r,
                            ctrl.get("minAngle", 0),
                            ctrl.get("maxAngle", 180),
                            ctrl.get("maxDistance", 200),
                            ctrl.get("fadeMs", 1200)))
                    else:
                        f.write("{},{},{},{},{},{},{}\\n".format(ctrl['type'], ctrl['name'], x, y, w, h, r))
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
                if ctrl_type == "slider":
                    override["min"] = 0
                    override["max"] = 100
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
                        if parts[9] in SLIDER_RECENTER_MODES:
                            override["recenter"] = parts[9]
                elif ctrl_type == "toggle":
                    override["initial"] = 0
                    if len(parts) >= 8:
                        try:
                            override["initial"] = 1 if int(float(parts[7])) == 1 else 0
                        except:
                            override["initial"] = 0
                elif ctrl_type == "radar":
                    override["minAngle"] = 0
                    override["maxAngle"] = 180
                    override["maxDistance"] = 200
                    override["fadeMs"] = 1200
                    if len(parts) >= 11:
                        try:
                            override["minAngle"] = int(float(parts[7]))
                            override["maxAngle"] = int(float(parts[8]))
                            override["maxDistance"] = max(1, int(float(parts[9])))
                            override["fadeMs"] = max(120, int(float(parts[10])))
                        except:
                            override["minAngle"] = 0
                            override["maxAngle"] = 180
                            override["maxDistance"] = 200
                            override["fadeMs"] = 1200
                overrides[name] = override
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
    def send_with_retry(self, msg, max_attempts=3, chunk_size=20, chunk_gap_ms=3):
        """Send an important protocol message, retrying on failure."""
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
        if msg == "ack:prep" or msg == "ack:prep,{}".format(self._out_reliable_stream_id):
            self._flush_pending_reliable_stream()
            return
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
        elif msg == "request":
            self.send_layout_to_web()
\r
        elif msg.startswith("fs_list"):
            self._handle_fs_list(msg)

        elif msg == "fs_capabilities":
            self._handle_fs_capabilities()

        elif msg.startswith("fs_read_stream,"):
            self._handle_fs_read_stream(msg)

        elif msg.startswith("fs_read_page,"):
            self._handle_fs_read_page(msg)
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
        else:
            self._dispatch_app_command(msg)

    def _number_value(self, value):
        try:
            n = float(value)
            if n == int(n):
                return int(n)
            return n
        except:
            return value

    def _auto_bind_main_callback(self, function_name, callback_attr, callbacks=None):
        try:
            callback = None
            if callbacks:
                callback = callbacks.get(function_name)
            if callable(callback):
                setattr(self, callback_attr, callback)
        except Exception as e:
            print("Auto callback binding failed for", function_name, e)

    def _auto_bind_main_callbacks(self, callbacks=None):
        """Bind callbacks passed from main.py with callbacks=globals()."""
        self._auto_bind_main_callback("on_write", "_on_write_callback", callbacks)
        self._auto_bind_main_callback("on_button", "_on_button_callback", callbacks)
        self._auto_bind_main_callback("on_slider", "_on_slider_callback", callbacks)
        self._auto_bind_main_callback("on_toggle", "_on_toggle_callback", callbacks)
        self._auto_bind_main_callback("on_connect", "_on_connect_callback", callbacks)
        self._auto_bind_main_callback("on_disconnect", "_on_disconnect_callback", callbacks)

    def _dispatch_app_command(self, msg):
        """Route app controls to friendly callbacks, with on_write as a raw fallback."""
        try:
            command_type, payload = msg.split(",", 1)
        except:
            print("Unknown app message:", msg)
            if self._on_write_callback:
                try:
                    self._on_write_callback(msg)
                except Exception as e:
                    print("Write callback error:", e)
            return

        try:
            if command_type == "button":
                if self._on_button_callback:
                    self._on_button_callback(payload)
                    return

            elif command_type == "slider":
                try:
                    name, value_s = payload.split(":", 1)
                except:
                    print("Bad slider payload:", payload)
                    return
                if self._on_slider_callback:
                    self._on_slider_callback(name, self._number_value(value_s))
                    return

            elif command_type == "toggle":
                try:
                    name, value_s = payload.split(":", 1)
                except:
                    print("Bad toggle payload:", payload)
                    return
                if self._on_toggle_callback:
                    self._on_toggle_callback(name, int(float(value_s)) == 1)
                    return

        except Exception as e:
            print("Control callback error:", e)
            return

        if self._on_write_callback:
            try:
                self._on_write_callback(msg)
            except Exception as e:
                print("Write callback error:", e)
        else:
            print("Unhandled app command:", msg)
\r
    def send_layout_to_web(self):
        """Build and send layout payload once per request, ending with '__END__'."""
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
            if ctrl["type"] == "slider":
                mn = ctrl.get("min", 0)
                mx = ctrl.get("max", 100)
                recenter = ctrl.get("recenter", "none")
                lines.append("{},{},{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r, mn, mx, recenter))
            elif ctrl["type"] == "toggle":
                initial = 1 if ctrl.get("initial", 0) == 1 else 0
                lines.append("{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r, initial))
            elif ctrl["type"] == "radar":
                lines.append("{},{},{},{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r,
                    ctrl.get("minAngle", 0),
                    ctrl.get("maxAngle", 180),
                    ctrl.get("maxDistance", 200),
                    ctrl.get("fadeMs", 1200)))
            else:
                lines.append("{},{},{},{},{},{},{}".format(ctrl['type'], ctrl['name'], x, y, w, h, r))
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
                if ctrl_type == "slider" and len(parts) >= 10:
                    try:
                        override["min"] = int(float(parts[7]))
                        override["max"] = int(float(parts[8]))\r
                    except:\r
                        pass\r
                    if parts[9] in SLIDER_RECENTER_MODES:\r
                        override["recenter"] = parts[9]\r
                    if override.get("max") == override.get("min"):
                        override["max"] = override["min"] + 1
                elif ctrl_type == "toggle" and len(parts) >= 8:
                    try:
                        override["initial"] = 1 if int(float(parts[7])) == 1 else 0
                    except:
                        override["initial"] = 0
                elif ctrl_type == "radar" and len(parts) >= 11:
                    try:
                        override["minAngle"] = int(float(parts[7]))
                        override["maxAngle"] = int(float(parts[8]))
                        override["maxDistance"] = max(1, int(float(parts[9])))
                        override["fadeMs"] = max(120, int(float(parts[10])))
                    except:
                        pass
                overrides[name] = override
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
    def _handle_fs_list(self, msg):
        parts = msg.split(",", 1)
        base = self._clean_fs_path(parts[1] if len(parts) > 1 else "/")
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
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_list failed {}".format(e), "__END__"])

    def _handle_fs_capabilities(self):
        self._send_reliable_stream([
            "fs_capabilities,version,{},page_read,1,max_page,192,stream_read,1,stream_chunk,128".format(__version__),
            "__END__",
        ])

    def _handle_fs_read_stream(self, msg):
        parts = msg.split(",", 2)
        if len(parts) < 2:
            self._send_reliable_stream(["ERR: Bad fs_read_stream", "__END__"])
            return
        path = self._clean_fs_path(parts[1])
        if not path:
            self._send_reliable_stream(["ERR: Bad path", "__END__"])
            return
        try:
            chunk_size = 128
            if len(parts) >= 3:
                chunk_size = max(16, min(192, int(parts[2])))
        except:
            self._send_reliable_stream(["ERR: Bad fs_read_stream chunk", "__END__"])
            return
        try:
            open_path = self._path_for_open(path)
            total = os.stat(open_path)[6]
            checksum = 0
            offset = 0
            lines = ["fs_stream_begin,{},{},{}".format(path, total, chunk_size)]
            with open(open_path, "rb") as f:
                while True:
                    chunk = f.read(chunk_size)
                    if not chunk:
                        break
                    for b in chunk:
                        checksum = (checksum + b) & 0xFFFFFFFF
                    hex_data = ubinascii.hexlify(chunk).decode()
                    lines.append("fs_stream_chunk,{},{}".format(offset, hex_data))
                    offset += len(chunk)
            lines.append("fs_stream_end,{},{},{}".format(path, total, checksum))
            lines.append("__END__")
            self._send_reliable_stream(lines)
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_read_stream failed {}".format(e), "__END__"])

    def _handle_fs_read_page(self, msg):
        parts = msg.split(",", 3)
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
    def _finish_file_write(self):
        try:
            try:
                os.remove(self._file_write_path)
            except:
                pass
            os.rename(self._file_write_tmp, self._file_write_path)
            self._send_reliable_stream(["ACK:fs_write_done"])\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_write_end failed {}".format(e)])\r
        finally:\r
            self._expecting_file_write = False\r
            self._file_write_path = None\r
            self._file_write_tmp = None\r
\r
    def _handle_fs_delete(self, msg):
        if not self._session_can_edit:
            self._send_reliable_stream(["ERR: Edit not permitted"])
            return
        path = self._clean_fs_path(msg.split(",", 1)[1])\r
        if path in ("/BLEPeripheral.py", "/main.py"):\r
            self._send_reliable_stream(["ERR: Protected runtime file"])\r
            return\r
        try:\r
            os.remove(self._path_for_open(path))\r
            self._send_reliable_stream(["ACK:fs_delete"])\r
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_delete failed {}".format(e)])

    # -------------------- External hooks --------------------
    def send_radar(self, name, angle, distance_cm):
        """Send one radar telemetry sample to the app: radar,<NAME>,<ANGLE>,<DISTANCE_CM>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            angle_value = int(float(angle))
            distance_value = round(float(distance_cm), 1)
            self.send_with_retry(
                "radar,{},{},{}\\n".format(clean_name, angle_value, distance_value),
                max_attempts=1,
            )
        except Exception as e:
            print("send_radar failed:", e)

    def send_toggle_state(self, name, value):
        """Send current toggle state to the app: toggle_state,<NAME>,<0|1>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            state = 1 if value else 0
            self.send_with_retry(
                "toggle_state,{},{:d}\\n".format(clean_name, state),
                max_attempts=1,
            )
        except Exception as e:
            print("send_toggle_state failed:", e)

    def send_text(self, name, message):
        """Send text to the app: text,<NAME>,<MESSAGE>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            clean_message = str(message).replace("\\r", " ").replace("\\n", " ").strip()
            self.send_with_retry(
                "text,{},{}\\n".format(clean_name, clean_message),
                max_attempts=1,
            )
        except Exception as e:
            print("send_text failed:", e)

    def on_write(self, callback):
        self._on_write_callback = callback

    def on_button(self, callback):
        self._on_button_callback = callback

    def on_slider(self, callback):
        self._on_slider_callback = callback

    def on_toggle(self, callback):
        self._on_toggle_callback = callback

    def on_connect(self, callback):
        self._on_connect_callback = callback
\r
    def on_disconnect(self, callback):\r
        self._on_disconnect_callback = callback\r
`,$b=`from machine import Pin, time_pulse_us\r
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
        return cms`,Ib=`import array, time\r
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
`,Qb=`import utime as time
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

# Appen viser to knapper og en slider.
BluetoothControls = (
    ('button', 'TAEND'),
    ('button', 'SLUK'),
    ('slider', 'LYS', 0, 100, 'none'),
)


def on_button(name):
    """Kører når der trykkes på en knap i appen."""

    if name == 'TAEND':
        neopixels.fill(FARVE)
        neopixels.show()
        print('Lyset er tændt')

    elif name == 'SLUK':
        neopixels.clear()
        neopixels.show()
        print('Lyset er slukket')


def on_slider(name, value):
    """Kører når slideren flyttes i appen."""

    if name == 'LYS':
        # Appen sender 0-100. NeoPixel-biblioteket bruger 1-255.
        lysstyrke = int(1 + (int(value) / 100) * 254)

        neopixels.brightness(lysstyrke)
        neopixels.fill(FARVE)
        neopixels.show()

        print('Lysstyrke:', value)


def on_disconnect():
    """Sluk lyset når appen mister forbindelsen."""
    neopixels.clear()
    neopixels.show()


# callbacks=globals() betyder:
# "Brug funktionerne ovenfor, når appen sender noget."
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='NeoPixel', callbacks=globals())


while True:
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.
    time.sleep_ms(100)
`,Fb=`# PicoFly.py
# =============================================================================
# PicoFly Firmware - MicroPython  (Raspberry Pi Pico W)
#
# PIN-MAPPING:
#   GPIO0  → Motor A IN1  (L293D pin 2 / 1A)
#   GPIO1  → Motor A IN2  (L293D pin 7 / 2A)
#   GPIO2  → Motor A EN   (L293D pin 1 / EN1,2)  ← PWM
#   GPIO3  → Motor B IN1  (L293D pin 10 / 3A)
#   GPIO4  → Motor B IN2  (L293D pin 15 / 4A)
#   GPIO5  → Motor B EN   (L293D pin 9 / EN3,4)  ← PWM
#   GPIO6  → Servo 1 (J4) ← PWM
#   GPIO7  → Servo 2 (J5) ← PWM
#   GPIO8  → Servo 3 (J6) ← PWM
#   GPIO9  → Servo 4 (J7) ← PWM
#   GPIO10-14, GPIO26-28 → Ekstra I/O
#
# BRUG:
#   from picofly_firmware import get_board
#   b = get_board()
#   b.servo1.set_angle(90)
#   b.motor_a.forward(0.5)
# =============================================================================

from machine import Pin, PWM
import time
import _thread

# ---------------------------------------------------------------------------
# Konstanter
# ---------------------------------------------------------------------------
PWM_FREQ_MOTOR  = 1000
PWM_FREQ_SERVO  = 50
PWM_MAX         = 65535
SERVO_MIN_US    = 500
SERVO_MAX_US    = 2500
SERVO_PERIOD_US = 20000

# Pins der bruger PWM
_PWM_PINS = (2, 5, 6, 7, 8, 9)


# ---------------------------------------------------------------------------
# Hjælper: ryd PWM-kanaler ud fra evt. tidligere kørsel
# ---------------------------------------------------------------------------
def _release_pwm_pins():
    for p in _PWM_PINS:
        try:
            PWM(Pin(p)).deinit()
        except Exception:
            pass


# ---------------------------------------------------------------------------
# Heartbeat-LED (kerne 2)
#
# Kører på Pico's anden kerne så den aldrig blokeres af motor/servo-kode.
# Mønster: kort blink hvert 2. sekund  →  "jeg lever"
# ---------------------------------------------------------------------------
_led            = Pin("LED", Pin.OUT)
_heartbeat_run  = False   # sættes True når board er klar, False ved stop

def _heartbeat_loop():
    """Kører på kerne 2. Må ikke kastes exceptions – crasher hele tråden."""
    while True:
        if _heartbeat_run:
            _led.on();  time.sleep_ms(80)
            _led.off(); time.sleep_ms(1920)   # blink hvert 2. sek
        else:
            _led.off(); time.sleep_ms(100)

def _start_heartbeat():
    global _heartbeat_run
    _heartbeat_run = True
    # Starter kun tråden første gang – _thread.start_new_thread kan ikke
    # stoppes, så vi lader den løbe og styrer den med flaget.
    try:
        _thread.start_new_thread(_heartbeat_loop, ())
    except Exception:
        pass   # Tråden kørte allerede (fx ved reset_board)

def heartbeat_stop():
    """Sluk heartbeat-blinket (LED slukkes)."""
    global _heartbeat_run
    _heartbeat_run = False

def heartbeat_start():
    """Tænd heartbeat-blinket igen."""
    global _heartbeat_run
    _heartbeat_run = True


# ---------------------------------------------------------------------------
# HBridge
# ---------------------------------------------------------------------------
class HBridge:
    def __init__(self, pin_in1, pin_in2, pin_en):
        self._in1    = Pin(pin_in1, Pin.OUT)
        self._in2    = Pin(pin_in2, Pin.OUT)
        self._pin_en = Pin(pin_en)
        self._en     = PWM(self._pin_en)
        self._en.freq(PWM_FREQ_MOTOR)
        self.stop()

    def forward(self, speed=1.0):
        speed = max(0.0, min(1.0, speed))
        self._in1.value(1); self._in2.value(0)
        self._en.duty_u16(int(speed * PWM_MAX))

    def backward(self, speed=1.0):
        speed = max(0.0, min(1.0, speed))
        self._in1.value(0); self._in2.value(1)
        self._en.duty_u16(int(speed * PWM_MAX))

    def brake(self):
        self._in1.value(1); self._in2.value(1)
        self._en.duty_u16(PWM_MAX)

    def stop(self):
        self._in1.value(0); self._in2.value(0)
        self._en.duty_u16(0)

    def set_speed(self, speed):
        if   speed > 0: self.forward(speed)
        elif speed < 0: self.backward(-speed)
        else:           self.stop()


# ---------------------------------------------------------------------------
# Servo
# ---------------------------------------------------------------------------
class Servo:
    def __init__(self, pin):
        self._pin   = Pin(pin)        # eksplicit ref – forhindrer GC
        self._pwm   = PWM(self._pin)
        self._pwm.freq(PWM_FREQ_SERVO)
        self._angle = 90.0
        self.set_angle(90)

    def _us_to_duty(self, us):
        return int((us / SERVO_PERIOD_US) * PWM_MAX)

    def set_angle(self, angle):
        angle = max(0.0, min(180.0, float(angle)))
        self._angle = angle
        us = SERVO_MIN_US + (SERVO_MAX_US - SERVO_MIN_US) * (angle / 180.0)
        self._pwm.duty_u16(self._us_to_duty(us))

    def set_us(self, us):
        us = max(float(SERVO_MIN_US), min(float(SERVO_MAX_US), float(us)))
        self._pwm.duty_u16(self._us_to_duty(us))

    @property
    def angle(self):
        return self._angle

    def detach(self):
        self._pwm.duty_u16(0)

    def attach(self):
        self._pwm.freq(PWM_FREQ_SERVO)
        self.set_angle(self._angle)


# ---------------------------------------------------------------------------
# PicoFly
# ---------------------------------------------------------------------------
class PicoFly:
    def __init__(self):
        self.motor_a = HBridge(0, 1, 2)
        self.motor_b = HBridge(3, 4, 5)
        self.servo1  = Servo(6)
        self.servo2  = Servo(7)
        self.servo3  = Servo(8)
        self.servo4  = Servo(9)
        self.gpio    = {n: Pin(n, Pin.IN, Pin.PULL_DOWN)
                        for n in (10, 11, 12, 13, 14, 26, 27, 28)}

    @property
    def servos(self):
        return [None, self.servo1, self.servo2, self.servo3, self.servo4]

    def stop_all(self):
        self.motor_a.stop()
        self.motor_b.stop()
        for s in [self.servo1, self.servo2, self.servo3, self.servo4]:
            s.set_angle(90)


# ---------------------------------------------------------------------------
# Singleton via get_board()
#
# Vi bruger en funktion i stedet for en modul-global variabel.
# Fordel: hvis oprettelsen fejler første gang, kan man kalde get_board()
# igen efter at have rettet problemet – uden at genindlæse hele modulet.
# Ulempe: ingen.  En modul-global crashede import-linjen og gav en
# uforklarlig "can't import name board"-fejl.
# ---------------------------------------------------------------------------
_board_instance = None

def get_board():
    """
    Returnerer den globale PicoFly-instans.
    Opretter den første gang (eller hvis den ikke eksisterer endnu).
    PWM-pins frigøres automatisk inden oprettelse.
    """
    global _board_instance
    if _board_instance is None:
        _release_pwm_pins()
        _board_instance = PicoFly()
        _start_heartbeat()
        print("PicoFly: board oprettet OK  (LED blinker = klar)")
    return _board_instance


def reset_board():
    """
    Tving genoprettelse af board (fx hvis hardware skal reinitialiseres).
    """
    global _board_instance
    _board_instance = None
    return get_board()
`,Zb=`import machine\r
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
        self.initPCA()`,Pb=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
from hcsr04 import HCSR04\r
import PicoRobotics


# Servoens område. 45..135 betyder, at den scanner foran robotten.
SERVO_MIN = 45
SERVO_MAX = 135
SERVO_STEP = 3
SERVO_SETTLE_MS = 60

# Radarens afstandsområde og start-tilstand.
RADAR_MAX_CM = 200
SCAN_INITIAL = 0
RADAR_DOT_DURATION = 1600

# Appen får en toggle-knap og et radar-display.
BluetoothControls = (
    ('toggle', 'SCAN', SCAN_INITIAL),
    ('radar', 'RADAR', SERVO_MIN, SERVO_MAX, RADAR_MAX_CM, RADAR_DOT_DURATION),
)


# LED'en viser, om appen er forbundet.
led = Pin('LED', Pin.OUT)
led.off()

# board styrer servoen, og sensor måler afstand med HC-SR04.
board = PicoRobotics.KitronikPicoRobotics()
sensor = HCSR04(trigger_pin=2, echo_pin=3)

# Disse variabler husker, om der scannes, og hvor servoen peger.
scan_enabled = SCAN_INITIAL == 1
scan_angle = SERVO_MIN
scan_direction = 1
\r
\r
def on_toggle(name, value):
    """Reager på toggle-knapper fra appen."""
    global scan_enabled

    # SCAN-knappen i appen tænder eller slukker radaren.
    if name == 'SCAN':
        scan_enabled = bool(value)
        ble.send_toggle_state('SCAN', scan_enabled)
        print('Scan ->', scan_enabled)
    else:\r
        print('Unknown toggle:', name)\r
\r
\r
def on_connect():
    global scan_enabled, scan_angle, scan_direction

    # Start altid en ny forbindelse med scanning slukket og servoen i midten.
    led.on()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)\r
    ble.send_toggle_state('SCAN', False)\r
    print('BLE client connected')\r
\r
\r
def on_disconnect():
    global scan_enabled, scan_angle, scan_direction

    # Når appen afbryder, stopper scanningen og servoen sættes i midten.
    led.off()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1\r
    board.servoWrite(1, 90)\r
    ble.send_toggle_state('SCAN', False)\r
    print('BLE client disconnected')\r


# callbacks=globals() gør, at BLEPeripheral kan finde on_toggle osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='Radar', callbacks=globals())


while True:
    # Hvis scanning er slukket, venter programmet bare lidt.
    if not scan_enabled or not ble.connected:
        time.sleep_ms(100)
        continue

    # Drej servoen til næste vinkel, og giv den tid til at nå derhen.
    board.servoWrite(1, scan_angle)
    time.sleep_ms(SERVO_SETTLE_MS)

    # Mål afstand og send vinkel + afstand til radar-displayet i appen.
    distance = sensor.distance_cm()
    print('Radar:', scan_angle, distance, 'cm')
    ble.send_radar('RADAR', scan_angle, distance)

    # Gå videre til næste vinkel. Når kanten rammes, vendes retningen.
    scan_angle += SERVO_STEP * scan_direction
    if scan_angle >= SERVO_MAX:
        scan_angle = SERVO_MAX
        scan_direction = -1\r
    elif scan_angle <= SERVO_MIN:\r
        scan_angle = SERVO_MIN\r
        scan_direction = 1\r
`,Jb=`from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


# Appen viser kun et tekstfelt.
BluetoothControls = (
    ('text', 'BESKED'),
)


# LED'en viser, om appen er forbundet.
led = Pin('LED', Pin.OUT)
led.off()


def on_connect():
    """Send den første besked når appen forbinder."""
    led.on()
    ble.send_text('BESKED', 'Hej fra Picoen')
    print('BLE client connected')


def on_disconnect():
    """Sluk LED'en når appen mister forbindelsen."""
    led.off()
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='SendTekst', callbacks=globals())

counter = 0

while True:
    # Send en ny besked med jævne mellemrum, så tekstfeltet er let at teste.
    if ble.connected:
        counter += 1
        ble.send_text('BESKED', 'Besked nummer {}'.format(counter))
        time.sleep_ms(2000)
    else:
        time.sleep_ms(100)
`,Wb=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.
# BluetoothControls bestemmer, hvilke sliders appen viser.
BluetoothControls = (
    ('slider', 'VENSTRE MOTOR', -100, 100, 'middle'),
    ('slider', 'HOJRE MOTOR', -100, 100, 'middle'),
)


# LED'en bruges som en simpel "forbundet"-lampe.
led = Pin('LED', Pin.OUT)
led.off()

# board er motor-controlleren fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()


def on_slider(name, value):
    """Reager på sliders fra appen."""

    # Appen sender slider-værdien som et tal. Vi bruger minus som baglæns.
    value = int(value)

    if name == 'VENSTRE MOTOR':
        if value > 0:
            board.motorOn(1, 'f', value)
        elif value < 0:
            board.motorOn(1, 'r', -value)
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
def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()
    print('BLE client connected')


def on_disconnect():
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.
    led.off()
    board.motorOff(1)
    board.motorOff(2)
    print('BLE client disconnected')


# callbacks=globals() gør, at BLEPeripheral kan finde on_slider osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='TankBil', callbacks=globals())
\r
\r
while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,Ar=[{id:"program:onboard-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med tænd/sluk-knapper og lysstyrke-slider.",kind:"program",content:Qb},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:Jb},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:Wb},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:Pb},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:Kb},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:Zb},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:Fb},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:$b},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:Ib}],e0=11914;function t0(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function n0(){return t0()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class l0{constructor(r={}){ue(this,"port",null);ue(this,"reader",null);ue(this,"writer",null);ue(this,"readLoopDone",null);ue(this,"readLoopActive",!1);ue(this,"disconnecting",!1);ue(this,"buffer","");ue(this,"events");ue(this,"dataListeners",new Set);this.events=r}get connected(){return!!this.port&&!!this.writer}get info(){var r;return((r=this.port)==null?void 0:r.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const r=await navigator.serial.requestPort({filters:[{usbVendorId:e0}]});await this.openPort(r)}async connectKnownPort(r){await this.openPort(r)}async disconnect(){var v,y;const r=this.connected||!!this.port||!!this.reader,u=this.port,s=this.reader,f=this.writer,h=this.readLoopDone,_=s==null?void 0:s.closed.catch(()=>{}),g=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}h&&await h.catch(()=>{}),await _;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(f==null?void 0:f.close()),await g}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),u&&await u.close(),this.port===u&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,r&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(r){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(r))}async writeLine(r){await this.write(`${r}\r
`)}addDataListener(r){return this.dataListeners.add(r),()=>this.dataListeners.delete(r)}async openPort(r){var s,f,h;if(await this.disconnect().catch(()=>{}),await r.open({baudRate:115200,bufferSize:4096}),this.port=r,this.writer=((s=r.writable)==null?void 0:s.getWriter())??null,!this.writer||!r.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const u=r.getInfo();(h=(f=this.events).onLog)==null||h.call(f,"success",`USB-forbindelse oprettet (${a0(u)}).`),this.readLoopDone=this.startReadLoop(r)}async startReadLoop(r){var f,h,_;this.readLoopActive=!0;const u=new TextDecoder;this.reader=((f=r.readable)==null?void 0:f.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:g,done:v}=await s.read();if(v)break;g&&this.consumeText(u.decode(g,{stream:!0}))}}catch(g){this.readLoopActive&&((_=(h=this.events).onLog)==null||_.call(h,"error",g instanceof Error?g.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===r&&this.closeAfterUnexpectedReadEnd(r)}}async closeAfterUnexpectedReadEnd(r){var h,_;const u=this.connected||this.port===r;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,f=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await f}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await r.close()}catch{}this.port===r&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,u&&((_=(h=this.events).onDisconnect)==null||_.call(h))}consumeText(r){var u,s,f,h;(s=(u=this.events).onData)==null||s.call(u,r);for(const _ of this.dataListeners)_(r);for(this.buffer+=r;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),g=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(h=(f=this.events).onLine)==null||h.call(f,g)}}}function a0(o){const r=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",u=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${r}, ${u}`}const kp=15e3,up=64*1024,fp=1e5,jp=new URL("/micropython/micropython.mjs",window.location.origin).toString(),i0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);let r0=0;class s0{constructor(){ue(this,"worker",null);ue(this,"pending",null);ue(this,"nextId",0)}send(r,u={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser MicroPython REPL er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,f=u.timeoutMs??kp,h=this.ensureWorker();return new Promise(_=>{const g=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser MicroPython REPL stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:s,timer:g,onOutput:u.onOutput,resolve:_},h.postMessage({type:"run",id:s,code:c0(r),runtimeUrl:jp})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var r;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(r=this.worker)==null||r.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const r=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return r.onmessage=u=>this.handleMessage(u.data),r.onerror=u=>{this.finish({ok:!1,output:"",error:u.message||"Browser MicroPython REPL fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=r,r}handleMessage(r){var s;const u=this.pending;if(!(!u||r.id!==u.id||r.type==="ready")){if(r.type==="stdout"){(s=u.onOutput)==null||s.call(u,r.text);return}if(r.type==="unavailable"){this.finish({ok:!1,output:"",error:r.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:r.ok,output:r.output,error:r.error,timedOut:!1,unavailable:!1})}}finish(r){const u=this.pending;u&&(window.clearTimeout(u.timer),this.pending=null,u.resolve(r))}restartWorker(){var r;(r=this.worker)==null||r.terminate(),this.worker=null}}async function o0(o,r={}){const u=typeof r=="number"?r:r.timeoutMs??kp,s=typeof r=="number"?void 0:r.onOutput,f=typeof r=="number"?void 0:r.signal,h=Xu(o);if(h.some(v=>v.level==="error"))return{ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1};const _=++r0,g=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return new Promise(v=>{let y=!1;const S=()=>{M({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1})},M=Q=>{y||(y=!0,window.clearTimeout(O),f==null||f.removeEventListener("abort",S),g.terminate(),v(Q))};if(f!=null&&f.aborted){S();return}f==null||f.addEventListener("abort",S,{once:!0});const O=window.setTimeout(()=>{M({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:h,timedOut:!0,unavailable:!1})},u);g.onmessage=Q=>{const F=Q.data;if(!(F.id!==_||F.type==="ready")){if(F.type==="stdout"){s==null||s(F.text);return}if(F.type==="unavailable"){M({ok:!1,output:"",error:F.error,issues:h,timedOut:!1,unavailable:!0});return}M({ok:F.ok,output:F.output,error:F.error,issues:h,timedOut:!1,unavailable:!1})}},g.onerror=Q=>{M({ok:!1,output:"",error:Q.message||"Offline MicroPython fejlede i browser-worker.",issues:h,timedOut:!1,unavailable:!1})},g.postMessage({type:"run",id:_,code:o,runtimeUrl:jp})})}function c0(o){const r=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${r})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${r})`,"finally:","    try:","        del __pico_repl_value","    except NameError:","        pass"].join(`
`)}function Xu(o){const r=[],u=new Blob([o]).size;u>up&&r.push({level:"error",text:`Koden er ${u} bytes. Offline MicroPython kører kun små programmer op til ${up} bytes.`});const s=o.split(/\r?\n/);for(let f=0;f<s.length;f+=1){const h=f+1,_=fo(s[f]).trim();if(!_)continue;const g=u0(_);g&&i0.has(g)&&r.push({level:"error",line:h,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),/^while\s+True\s*:/.test(_)&&!f0(s,f)&&r.push({level:"error",line:h,text:"Uendelige while True-løkker køres ikke offline. Forbind en Pico, eller tilføj en tydelig break."});const v=_.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);v&&d0(v)>fp&&r.push({level:"error",line:h,text:`range(...) er for stor til offline kørsel. Brug højst ${fp} gentagelser.`})}for(const f of m0(s))r.push({level:"warning",text:`Funktionen ${f} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return r}function fo(o){let r=null;for(let u=0;u<o.length;u+=1){const s=o[u];if((s==='"'||s==="'")&&o[u-1]!=="\\"&&(r=r===s?null:r??s),s==="#"&&!r)return o.slice(0,u)}return o}function u0(o){const r=o.match(/^import\s+([A-Za-z_]\w*)/);if(r)return r[1];const u=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(u==null?void 0:u[1])??null}function f0(o,r){const u=mo(o[r]);for(let s=r+1;s<o.length;s+=1){const f=o[s];if(!f.trim())continue;if(mo(f)<=u)return!1;if(/\b(break|return|raise)\b/.test(fo(f)))return!0}return!1}function mo(o){const r=o.match(/^\s*/);return(r==null?void 0:r[0].replace(/\t/g,"    ").length)??0}function d0(o){const r=Number(o[1]),u=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const _=(u===void 0?r:u)-(u===void 0?0:r);return _>0&&s<0||_<0&&s>0?0:Math.ceil(Math.abs(_/s))}function m0(o){const r=new Set;for(let u=0;u<o.length;u+=1){const s=fo(o[u]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const f=s[1],h=mo(o[u]);for(let _=u+1;_<o.length;_+=1){if(!o[_].trim())continue;if(mo(o[_])<=h)break;if(new RegExp(`\\b${f}\\s*\\(`).test(fo(o[_]))){r.add(f);break}}}return[...r]}const h0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function p0(o,r){var y;const u=o.trim(),s=r.split(/\r?\n/),f=_0(u),h=f?s[f-1]??"":"",_=g0(s,f),g=u.split(/\r?\n/).filter(Boolean).at(-1)??"",v=g.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(v)return{simple:`Python kender ikke navnet ${v[1]}${f?` på linje ${f}`:""}.`,technical:u,line:f};if(/ZeroDivisionError/.test(g))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:u,line:f};if(/IndentationError/.test(g))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:u,line:f};if(/ImportError|ModuleNotFoundError/.test(g)){const S=(y=g.match(/['"](.+?)['"]/))==null?void 0:y[1];return{simple:`Python kan ikke finde modulet${S?` ${S}`:""}.`,technical:u,line:f}}if(/SyntaxError/.test(g)){const S=Ku(h,f)??Ku(_.text,_.line)??b0(s,f);return S?{simple:`Mangler måske : efter linje ${S.line}.`,technical:u,line:S.line}:f&&_.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:u,line:f}:v0(h)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:u,line:f}:y0(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:u,line:f}:x0(h)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:u,line:f}:S0(h)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:u,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:u,line:f}}return/TypeError/.test(g)?{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:u,line:f}:/IndexError/.test(g)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:u,line:f}:/KeyError/.test(g)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:u,line:f}:/AttributeError/.test(g)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:u,line:f}:/ValueError/.test(g)?{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:u,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:u,line:f}}function _0(o){var f;const u=(f=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!u)return;const s=parseInt(u,10);return Number.isFinite(s)&&s>0?s:void 0}function g0(o,r){if(!r)return{text:""};for(let u=r-2;u>=0;u-=1){const s=o[u]??"";if(s.trim())return{line:u+1,text:s}}return{text:""}}function Ku(o,r){if(!r)return null;const u=o.trim();return!h0.test(u)||u.endsWith(":")?null:{line:r}}function b0(o,r){const u=r?Math.min(o.length,r):o.length,s=Math.max(0,u-4);for(let f=u-1;f>=s;f-=1){const h=Ku(o[f]??"",f+1);if(h)return h}return null}function y0(o){const r=(o.match(/'/g)??[]).length,u=(o.match(/"/g)??[]).length;return r%2===1||u%2===1}function v0(o){var s,f;const u=(f=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:f.trim();return!u||/['"]/.test(u)?!1:/\s/.test(u)&&/[a-zA-ZæøåÆØÅ]/.test(u)}function x0(o){return Ap(o)>0}function S0(o){return Ap(o)<0}function Ap(o){let r=0,u=null;for(let s=0;s<o.length;s+=1){const f=o[s];if((f==='"'||f==="'")&&o[s-1]!=="\\"){u=u===f?null:u??f;continue}u||((f==="("||f==="["||f==="{")&&(r+=1),(f===")"||f==="]"||f==="}")&&(r-=1))}return r}const $u="/min_kode.py",Dp=`print('Hej fra Pico Kontrol Panel')
`,dp=0,Dr="Backup filenames are reserved for version history. Choose another name.";function Qt(o,r){return`${o}:${r}`}function E0(){const o=W(m=>m.toggleSideMenu),r=W(m=>m.askConfirm),u=W(m=>m.picoIdeOrigin),s=W(m=>m.active),f=W(m=>m.isBleConnected),h=W(m=>m.bleListFiles),_=W(m=>m.bleReadText),g=W(m=>m.bleWriteText),v=W(m=>m.bleDeleteFile),y=W(m=>m.bleRestartAndReconnect),[S,M]=q.useState(!1),[O,Q]=q.useState(!1),[F,le]=q.useState([]),[U,G]=q.useState(!1),[pe,oe]=q.useState([]),[Ee,fe]=q.useState(null),[we,ee]=q.useState(()=>Gu(Du())),[J,ge]=q.useState($u),[_e,ye]=q.useState("local"),[re,Ge]=q.useState(()=>{var m;return((m=Gu(Du()).find(b=>b.path===$u))==null?void 0:m.content)??Dp}),[Ae,Ze]=q.useState([]),[D,V]=q.useState(!1),[ae,xe]=q.useState(""),[me,E]=q.useState(""),[z,P]=q.useState(null),[A,I]=q.useState(!1),[Z,K]=q.useState(null),[Ke,Be]=q.useState(!1),[gn,Xl]=q.useState({}),[Ni,Ma]=q.useState(!1),[il,Ra]=q.useState(0),[rl,yo]=q.useState(()=>{var m,b;return((m=ql.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:m.board)??((b=ql[0])==null?void 0:b.board)??""}),[Kl,ka]=q.useState(()=>{var m,b;return((m=ql.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:m.version)??((b=ql[0])==null?void 0:b.version)??""}),[Ti,zn]=q.useState(!1),[Mi,Ur]=q.useState({top:0,left:0}),[Et,ja]=q.useState(!1),[Ri,ki]=q.useState(!1),[$l,Zt]=q.useState(!0),[Aa,ji]=q.useState(""),[Il,Pt]=q.useState(!1),[Je,bn]=q.useState("browser"),[rt,sl]=q.useState({}),[Ql,Jt]=q.useState({}),[nt,Lt]=q.useState(null),[yn,Bn]=q.useState(()=>Hh().clearTerminalOnRun),[Wt,Fl]=q.useState(()=>Hh().simplifiedErrors),[Ai,Hr]=q.useState(()=>typeof window<"u"&&window.innerWidth<dp),ol=q.useRef(null),en=q.useRef(null),mt=q.useRef(null),Di=q.useRef(null),Zl=q.useRef(null),Da=q.useRef(null),Ln=q.useRef(!1),Nn=q.useRef(!1),Pl=q.useRef(!1),cl=q.useRef(null),tn=q.useRef(null),$e=q.useRef(null),st=q.useRef(null),kt=q.useRef(0),Tn=q.useRef(null),ul=q.useRef(null),Gr=q.useRef(null),fl=q.useRef(null),nn=n0(),de=u==="control"&&!!s&&f(),Mn=de?(s==null?void 0:s.deviceID)??"ble":null,dl=Math.max(1,re.split(`
`).length),Jl=new Blob([re]).size,ml=_e==="pico"?"Picoen":"browseren",ot=q.useMemo(()=>[...new Set(ql.map(m=>m.board))],[]),hl=q.useMemo(()=>ql.filter(m=>m.board===rl),[rl]),Un=ql.find(m=>m.board===rl&&m.version===Kl)??hl[0]??ql[0],Rn=Il||Je==="microcontroller"&&(de||!S),pl=Je==="browser"?'print("hej")':de?"REPL kræver USB Serial":S?'print("hej")':"Forbind en Micro Controller",Oi=q.useMemo(()=>{const m=new l0({onLine:b=>{if(Nn.current)return;const w=b.trimEnd();if(Pl.current&&w.trim()){$("info",w);return}Ln.current&&w.trim()&&!w.includes(">>>")&&!w.includes("raw REPL")&&$("info",w)},onLog:$,onDisconnect:()=>{M(!1),ja(!1),Pt(!1),Ln.current=!1,Pl.current=!1,ta(),$("warning","USB-forbindelse lukket.")}});return ol.current=m,m},[]);function $(m,b){le(w=>[...w.slice(-140),{level:m,text:b}])}function Wl(m,b=re,w="error"){const H=p0(m,b);le(L=>[...L.slice(-140),{level:w,text:H.simple,technical:H.technical}])}function ht(m,b,w=_e){ge(m),ye(w),Ge(b),Jt(H=>({...H,[Qt(w,m)]:b}))}function ea(m,b="pico"){ge(m),ye(b),Ge(""),Lt(null),Ur({top:0,left:0})}function Hn(m,b=(w=>(w=Zl.current)==null?void 0:w.selectionStart)()??m.length){Ge(m),Jt(H=>({...H,[Qt(_e,J)]:m})),sa(m,b)}function Ut(m,b=_e){Jt(w=>{const H=Qt(b,m);if(!(H in w))return w;const L={...w};return delete L[H],L})}function jt(){return rt[J]===re}function Tt(m,b){sl(w=>({...w,[m]:b}))}function Vr(m,b){Tt(m,b),Jt(w=>({...w,[Qt("pico",m)]:b})),_e==="pico"&&J===m&&Ge(b)}function ta(){oe([]),Ze([]),sl({}),Jt({}),Lt(null),ge(m=>{const b=Gu(Du());if(b.find(L=>L.path===m))return m;const H=b[0];return ye("local"),Ge(H.content),H.path})}function bt(m){kn(),K({value:100,label:m}),fl.current=window.setTimeout(()=>{fl.current=null,K(null)},900)}function kn(){fl.current!==null&&(window.clearTimeout(fl.current),fl.current=null)}function vo(){return Z?c.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Z.value),children:[c.jsxs("div",{children:[c.jsx("span",{children:Z.label}),c.jsxs("strong",{children:[Math.round(Z.value),"%"]}),Z.cancellable&&c.jsx("button",{className:"ide-task-cancel",type:"button",onClick:At,"aria-label":"Stop handling",title:"Stop",children:c.jsx(Rt,{name:"delete",size:18})})]}),c.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Z.value))}%`}})]}):null}function At(){$e.current&&Gn("Stopper læsning...",!0,!0)}function Gn(m="Stopper læsning...",b=!1,w=!1){var H;kn(),ul.current=null,kt.current+=1,(H=$e.current)==null||H.abort(),$e.current=null,Tn.current=null,fe(null),G(!1),K(b?{value:(Z==null?void 0:Z.value)??0,label:m,cancellable:!1}:null),w&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function Yr(m){var b;if(!(Tn.current===m||ul.current===m)){if(ul.current=m,st.current){kt.current+=1,(b=$e.current)==null||b.abort(),$e.current=null,Tn.current=null,ea(m),fe(m),G(!0),kn(),K({value:2,label:`Skifter til ${De(m)}...`,cancellable:!0});return}Oa()}}function Oa(){if(st.current)return;const m=ul.current;if(!m)return;ul.current=null;const b=kt.current+1;kt.current=b;const w=new AbortController;$e.current=w,Tn.current=m,ea(m),fe(m),G(!0),kn(),K({value:12,label:`Indlæser ${De(m)}...`,cancellable:!0});const H=(async()=>{try{const L=await _(m,(se,Ne)=>{kt.current===b&&K({value:se,label:Ne,cancellable:!0})},w.signal);if(w.signal.aborted||kt.current!==b)return;ht(m,L,"pico"),Tt(m,L),bt("Fil indlæst")}catch(L){if(kt.current!==b)return;T0(L)||w.signal.aborted?$("info",`Stoppede læsning af ${De(m)}.`):(K(null),$("error",L instanceof Error?L.message:"BLE læsning fejlede."))}})();st.current=H,H.finally(()=>{if(st.current!==H)return;st.current=null,$e.current===w&&($e.current=null),Tn.current===m&&(Tn.current=null),!!ul.current||(fe(null),G(!1),w.signal.aborted&&K(null)),Oa()})}async function vn(m){const b=Nn.current;Nn.current=!0;try{return await m()}finally{Nn.current=b}}q.useEffect(()=>{if(!$l)return;const m=Da.current;m&&(m.scrollTop=m.scrollHeight)},[F,$l]),q.useEffect(()=>{jg({clearTerminalOnRun:yn,simplifiedErrors:Wt})},[yn,Wt]),q.useEffect(()=>{var m;hl.some(b=>b.version===Kl)||ka(((m=hl[0])==null?void 0:m.version)??"")},[hl,Kl]),q.useEffect(()=>{const m=()=>Hr(window.innerWidth<dp);return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),q.useEffect(()=>{const m=()=>{const b=ol.current;en.current=null,mt.current=null,ol.current=null,b==null||b.disconnect().catch(()=>{})};return window.addEventListener("pagehide",m),()=>{var b;kn(),(b=cl.current)==null||b.dispose(),cl.current=null,window.removeEventListener("pagehide",m),m()}},[]),q.useEffect(()=>{const m=b=>{!(b.ctrlKey||b.metaKey)||b.key.toLowerCase()!=="s"||(b.preventDefault(),!U&&J.trim()&&!Ai&&!A&&!z&&!D&&Vn())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[_e,de,U,S,re,J,Ai,A,z,D]);function Ca(m,b,w){ee(H=>{const L=C0(H,m,b,w);return Ou(L),L})}const Ci=U0(pe,we,Ql,S||de);q.useEffect(()=>{de&&We()},[de]),q.useEffect(()=>{const m=Gr.current;m&&m!==Mn&&ta(),Gr.current=Mn},[Mn]);async function _l(){if(nn.supported){Q(!0);try{await Oi.requestAndConnect();const m=new Lb(Oi);en.current=m,mt.current=new qb(m),M(!0),Ra(0),await m.interrupt(),await xo(m),$("success","Sendte stop-signal til Pico REPL."),await Xr(mt.current),await ln(mt.current)}catch(m){$("error",m instanceof Error?m.message:"USB-forbindelse mislykkedes.");try{await Oi.disconnect()}catch(b){$("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.");return}Ra(b=>{const w=b+1;return w>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Ma(!0)),w}),M(!1)}finally{Q(!1)}}}async function xo(m){const b=await m.exec(`import sys
print(sys.implementation.name)
`,4e3);if(b.error||!b.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function qr(){var m;try{await((m=ol.current)==null?void 0:m.disconnect()),en.current=null,mt.current=null,M(!1),ta()}catch(b){$("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.")}}async function xn(m){const b=mt.current;if(b){G(!0),Nn.current=!0;try{await m(b)}catch(w){K(null),$("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{Nn.current=!1,G(!1)}}}async function We(m=!0){if(de){G(!0);try{const b=await h();oe(b),m&&$("success",`Indlæste ${b.length} filer fra Pico via Bluetooth.`)}catch(b){$("error",b instanceof Error?b.message:"BLE filhandling fejlede.")}finally{G(!1)}return}await Xr(mt.current,m)}async function Xr(m,b=!0){if(m){G(!0);try{const w=await vn(()=>m.list("/"));oe(w),b&&$("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){$("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{G(!1)}}}async function gl(){if(de){G(!0),K({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const m=await na((b,w)=>K({value:b,label:w}));Ze(m),bt("Fil-tjek færdigt")}catch(m){K(null),$("error",m instanceof Error?m.message:"BLE runtime check fejlede.")}finally{G(!1)}return}await ln(mt.current)}async function na(m){const b=[],w=Ar.filter(L=>L.kind==="library"&&!wa(L));let H=0;for(const L of Ar){if(L.kind==="program"){b.push({...L,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(wa(L)){b.push({...L,status:"unknown",detail:"Opdateres via USB"});continue}try{const se=H/Math.max(1,w.length)*100,Ne=100/Math.max(1,w.length);$("info",`Tjekker ${L.label} på Pico via Bluetooth...`),m==null||m(Math.min(95,se),`Tjekker ${L.label} på Pico...`);const Le=await _(L.path,(rn,Ie)=>{m==null||m(Math.min(95,se+rn/100*Ne),`${L.label}: ${Ie}`)}),lt=ao(Le)===ao(L.content);b.push({...L,status:lt?"ok":"outdated",detail:lt?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{b.push({...L,status:"missing",detail:"Mangler på Pico"})}finally{H+=1}}return m==null||m(100,"Fil-tjek færdigt"),b}async function ln(m){if(m){G(!0);try{const b=await vn(()=>za(m)),w=b;Ze(w)}catch(b){$("error",b instanceof Error?b.message:"Runtime check fejlede.")}finally{G(!1)}}}async function za(m){if(!m)return[];const b=[];for(const w of Ar){if(w.kind==="program"){b.push({...w,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const H=await m.readText(w.path),L=ao(H)===ao(w.content);b.push({...w,status:L?"ok":"outdated",detail:L?"Matcher appens version":"Matcher ikke appens version"})}catch{b.push({...w,status:"missing",detail:"Mangler på Pico"})}}return b}async function zi(m=J){if(de){Yr(m);return}fe(m),await xn(async b=>{K({value:12,label:`Indlæser ${De(m)}...`});const w=await b.readText(m);ht(m,w,"pico"),Tt(m,w),bt("Fil indlæst")}),fe(null)}function bl(){I(!0)}async function Vn(){if(_e==="pico"){if(!S&&!de){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await la();return}Bi()}function Bi(){if(bi(J)){$("error",Dr);return}Ca(J,re,!1),ye("local"),Jt(m=>({...m,[Qt("local",J)]:re})),I(!1),$("success",`Gemte ${De(J)} lokalt.`)}async function la(){if(I(!1),bi(J))return K(null),$("error",Dr),!1;if(K({value:0,label:"Starter gemning..."}),de){G(!0);try{return await g(J,re,(b,w)=>K({value:b,label:w})),Tt(J,re),ye("pico"),Jt(b=>({...b,[Qt("pico",J)]:re})),bt("Gemt på Pico via Bluetooth"),$("success",`Gemte ${De(J)} på Pico via Bluetooth.`),io(J)&&(zn(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await We(!1),!0}catch(b){return K(null),$("error",b instanceof Error?b.message:"BLE gem fejlede."),!1}finally{G(!1)}}if(!mt.current)return K(null),!1;let m=!1;return await xn(async b=>{Ht(J,"pico")?await b.replaceTextSafely(J,re,(w,H)=>K({value:w,label:H})):await b.writeText(J,re,(w,H)=>K({value:w,label:H})),Tt(J,re),ye("pico"),Jt(w=>({...w,[Qt("pico",J)]:re})),bt("Gemt på Pico via USB"),$("success",`Gemte ${J}.`),await We(),await gl(),m=!0}),m}function Kr(){const m=new Blob([re],{type:"text/plain;charset=utf-8"}),b=URL.createObjectURL(m),w=document.createElement("a");w.href=b,w.download=De(J),w.click(),URL.revokeObjectURL(b),I(!1),$("success",`Downloadede ${De(J)}.`)}async function yl(m){G(!0),zn(!1),K({value:10,label:"Genstarter Pico..."});try{await y(m)?(bt("Pico genforbundet"),$("success",m==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),m==="ide"&&await We()):(K(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(b){K(null),$("error",b instanceof Error?b.message:"Genstart/genforbindelse mislykkedes.")}finally{G(!1)}}function an(m){var se;const b=m??{path:J,source:_e},w=b.source==="pico"?"Pico":"browser",H=b.source==="pico"?(m==null?void 0:m.versions.length)??((se=Iu(pe).get(b.path))==null?void 0:se.length)??0:0,L=H>0?` This will delete the file and its saved version history (${H} saved versions).`:"";P(null),r({title:"Slet fil",message:`Vil du slette ${De(b.path)} fra ${w}?${L}`,confirmLabel:"Slet",onConfirm:()=>{Li(b)}})}async function Li(m){const b=m.path,w=m.source,H=b===J&&w===_e;if(w==="local"){const Ne=we.filter(Le=>Le.path!==b);ee(Ne),Ou(Ne),H&&ht(b,"","local"),Ut(b,"local"),$("warning",`Slettede ${De(b)} fra browseren.`);return}const L=Iu(pe).get(b)??[],se=[b,...L.map(Ne=>Ne.path)];if(de){G(!0);try{for(const Le of se)await v(Le);sl(Le=>{const lt={...Le};for(const rn of se)delete lt[rn];return lt}),H&&ht(b,"","pico");for(const Le of se)Ut(Le,"pico");const Ne=L.length>0?` og ${L.length} gemte versioner`:"";$("warning",`Slettede ${De(b)}${Ne} på Pico via Bluetooth.`),await We()}catch(Ne){$("error",Ne instanceof Error?Ne.message:"BLE sletning fejlede.")}finally{G(!1)}return}if(!mt.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await xn(async Ne=>{for(const lt of se)await Ne.delete(lt);sl(lt=>{const rn={...lt};for(const Ie of se)delete rn[Ie];return rn});const Le=L.length>0?` og ${L.length} gemte versioner`:"";$("warning",`Slettede ${b}${Le}.`),H&&ht(b,"","pico");for(const lt of se)Ut(lt,"pico");await We(),await gl()})}async function aa(m){if(!m)return;const b=w0(m.name);if(!b){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(bi(b)){$("error",Dr);return}if(m.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const w=await m.text();if(_e==="local"){Ca(b,w,!0),ht(b,w,"local"),$("success",`Importerede ${De(b)} i browseren.`);return}if(!S&&!de){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(de&&wa({path:b})){$("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(K({value:0,label:"Uploader fil til Pico..."}),de){G(!0);try{await g(b,w,(L,se)=>K({value:L,label:se})),Tt(b,w),ht(b,w,"pico"),bt("Fil uploadet til Pico"),$("success",`Importerede ${De(b)} på Pico via Bluetooth.`),await We()}catch(L){K(null),$("error",L instanceof Error?L.message:"Kunne ikke importere filen til Pico.")}finally{G(!1)}return}if(!mt.current){K(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await xn(async L=>{Ht(b,"pico")?await L.replaceTextSafely(b,w,(se,Ne)=>K({value:se,label:Ne})):await L.writeText(b,w,(se,Ne)=>K({value:se,label:Ne})),Tt(b,w),ht(b,w,"pico"),bt("Fil uploadet til Pico"),$("success",`Importerede ${De(b)} på Pico.`),await We(),await gl()})}async function jn(){xe(""),V(!0)}function Ui(){const m=mp(ae);if(!m)return;if(bi(m)){$("error",Dr);return}const b=_e;if(Ht(m,b)){$("error",`Der findes allerede en fil med navnet ${De(m)} i ${b==="pico"?"Pico":"browseren"}.`);return}if(b==="local"){Ca(m,"",!1),ht(m,"","local"),V(!1),$("success",`Oprettede ${De(m)} i browseren.`);return}Ba(m)}async function Ba(m){if(!S&&!de){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(V(!1),K({value:0,label:"Opretter fil på Pico..."}),de){G(!0);try{await g(m,"",(b,w)=>K({value:b,label:w})),Tt(m,""),ht(m,"","pico"),bt("Fil oprettet på Pico"),$("success",`Oprettede ${De(m)} på Pico via Bluetooth.`),await We()}catch(b){K(null),$("error",b instanceof Error?b.message:"Kunne ikke oprette fil på Pico.")}finally{G(!1)}return}if(!mt.current){K(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await xn(async b=>{await b.writeText(m,"",(w,H)=>K({value:w,label:H})),Tt(m,""),ht(m,"","pico"),bt("Fil oprettet på Pico"),$("success",`Oprettede ${De(m)} på Pico.`),await We()})}function $r(m){m.type==="file"&&(P(m),E(N0(m.path)))}async function La(m){if(!z||z.source!=="pico")return;const b=z.path;if(P(null),K({value:0,label:"Gendanner version..."}),de){G(!0);try{const w=await _(m.path);await g(b,w,(H,L)=>K({value:H,label:L})),Tt(b,w),ht(b,w,"pico"),bt("Version gendannet"),await We(!1)}catch(w){K(null),$("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{G(!1)}return}mt.current&&await xn(async w=>{await w.replaceTextSafely(b,await w.readText(m.path),(L,se)=>K({value:L,label:se}));const H=await w.readText(b);Tt(b,H),ht(b,H,"pico"),bt("Version gendannet"),await We()})}function Ua(m){r({title:"Slet version",message:`Vil du slette ${De(m.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Ir(m)}})}async function Ir(m){if(de){G(!0);try{await v(m.path),await We(!1),P(b=>b&&{...b,versions:b.versions.filter(w=>w.path!==m.path)})}catch(b){$("error",b instanceof Error?b.message:"Kunne ikke slette versionen.")}finally{G(!1)}return}mt.current&&await xn(async b=>{await b.delete(m.path),await We(!1),P(w=>w&&{...w,versions:w.versions.filter(H=>H.path!==m.path)})})}async function wt(){if(!z)return;const m=z,b=Hu(me,Or(m.path));if(!b||b===m.path)return;if(bi(b)){$("error",Dr);return}if(Ht(b,m.source)){$("error",`Der findes allerede en fil med navnet ${De(b)}.`);return}const w=m.source==="local",H=m.source==="pico";if(de&&H&&(io(m.path)||io(b))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}G(!0);try{if(H)if(de){const L=rt[m.path]??await _(m.path);await g(b,L,(se,Ne)=>K({value:se,label:Ne})),await v(m.path),sl(se=>({..._p(se,m.path,b),[b]:L}))}else mt.current&&(await vn(()=>mt.current.rename(m.path,b)),sl(L=>_p(L,m.path,b)));w&&ee(L=>{const se=L.map(Ne=>Ne.path===m.path?{...Ne,path:b,updatedAt:Date.now()}:Ne);return Ou(se),se}),J===m.path&&_e===m.source&&ge(b),Jt(L=>V0(L,m.source,m.path,b)),P(null),E(""),$("success",`Omdøbte ${De(m.path)} til ${De(b)}.`),H&&await We()}catch(L){$("error",L instanceof Error?L.message:"Kunne ikke omdøbe filen.")}finally{K(null),G(!1)}}function Ht(m,b){return b==="pico"?pe.some(w=>w.path===m):we.some(w=>w.path===m)}async function Ha(m){if(!Ht(m,"pico"))return;const b=B0(m,pe),w=rt[m]??await _(m);await g(b,w)}function ia(m){if(m.type!=="file"){de&&Gn(void 0,!1),ge(m.path),ye(m.source);return}if(de&&wa(m)){$("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(m.source==="local"){de&&Gn(void 0,!1);const w=we.find(H=>H.path===m.path);ht(m.path,Ql[Qt("local",m.path)]??(w==null?void 0:w.content)??"","local");return}const b=Qt("pico",m.path);if(Object.prototype.hasOwnProperty.call(Ql,b)){de&&Gn(void 0,!1),ht(m.path,Ql[b],"pico");return}if(Object.prototype.hasOwnProperty.call(rt,m.path)){de&&Gn(void 0,!1),ht(m.path,rt[m.path],"pico");return}zi(m.path)}async function Qr(){if(!(!S&&!de)){G(!0),K({value:4,label:de?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",de?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const m=Ae.length>0?Ae:de?await na((w,H)=>K({value:w,label:H})):await vn(()=>za(mt.current));Ze(m);const b={};m.forEach(w=>{b[w.id]=!1}),Xl(b),Be(!0),K(null)}catch(m){K(null),$("error",m instanceof Error?m.message:"Fil-tjek før installation fejlede.")}finally{G(!1)}}}async function Hi(){if(Be(!1),de){G(!0);try{const b=(Ae.length>0?Ae:Ar.map(H=>({...H,status:"unknown",detail:"Ikke tjekket"}))).filter(H=>gn[H.id]&&!wa(H));if(b.length===0){$("info","Ingen filer valgt til installation.");return}let w=null;K({value:0,label:"Starter installation..."});for(const[H,L]of b.entries()){$("info",`Installerer ${L.label} via Bluetooth...`);const se=H/b.length*100,Ne=100/b.length;await Ha(L.path),await g(L.path,L.content,(Le,lt)=>{K({value:Math.min(99,se+Le/100*Ne),label:`${L.label}: ${lt}`})}),Vr(L.path,L.content),$("success",`Installerede ${L.label}.`),L.kind==="library"&&(w=L),io(L.path)&&zn(!0)}bt("Installation færdig"),await We(!1),await gl(),w&&Ga(w)}catch(m){K(null),$("error",m instanceof Error?m.message:"BLE installation fejlede.")}finally{G(!1)}return}await xn(async m=>{const w=(Ae.length>0?Ae:Ar.map(L=>({...L,status:"unknown",detail:"Ikke tjekket"}))).filter(L=>gn[L.id]);if(w.length===0){$("info","Ingen filer valgt til installation.");return}let H=null;K({value:0,label:"Starter installation..."});for(const[L,se]of w.entries()){$("info",`Installerer ${se.label}...`);const Ne=L/w.length*100,Le=100/w.length;await m.replaceTextSafely(se.path,se.content,(lt,rn)=>{K({value:Math.min(99,Ne+lt/100*Le),label:`${se.label}: ${rn}`})},{createBackup:!0}),Vr(se.path,se.content),$("success",`Installerede ${se.label}.`),se.kind==="library"&&(H=se)}bt("Installation færdig"),await We(!1),await gl(),H&&Ga(H)})}function Ga(m){ht(m.path,m.content,"pico"),Tt(m.path,m.content),$("info",`Åbnede ${m.label} i editoren.`)}function ra(m,b){Xl(w=>{if(m.kind!=="program")return{...w,[m.id]:b};const H={...w};for(const L of Ae)L.kind==="program"&&(H[L.id]=!1);return H[m.id]=b,H})}async function Va(){if(To(),de&&_e==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(_e==="local"){await Fr();return}const m=en.current;if(!m){$("error",`${De(J)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico REPL.`);return}if(J.endsWith(".py")){if(!jt()&&($("info",`${De(J)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await la())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(U)return;ja(!0),Ln.current=!0,Zt(!0);try{await m.runFile(J),$("success",`Kører ${De(J)}. Brug Stop for at afbryde.`)}catch(b){ja(!1),Ln.current=!1,$("error",b instanceof Error?b.message:"Kunne ikke starte koden.")}return}G(!0);try{const b=await m.exec(re,2e4);b.output.trim()&&$("info",b.output),b.error.trim()&&Wl(b.error,re),!b.output.trim()&&!b.error.trim()&&$("success","Koden kørte uden output.")}catch(b){$("error",b instanceof Error?b.message:"Kunne ikke køre koden.")}finally{G(!1)}}async function Fr(){const m=Xu(re);if(m.some(w=>w.level==="error")){for(const w of m){const H=w.line?`Linje ${w.line}: `:"";$(w.level==="error"?"error":"warning",`${H}${w.text}`)}return}const b=new AbortController;tn.current=b,G(!0),ki(!0),Zt(!0),$("info",S?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const w=[],H=await o0(re,{signal:b.signal,onOutput:Le=>{w.push(Le),$("info",Le)}});for(const Le of H.issues){const lt=Le.line?`Linje ${Le.line}: `:"";$(Le.level==="error"?"error":"warning",`${lt}${Le.text}`)}const L=[...w,H.output].filter(Boolean).join(`
`).trim(),se=H.output.trim();!H.error.trim()&&M0(L)?Wl(L,re):(se&&$("info",se),H.error.trim()&&Wl(H.error,re,H.unavailable?"warning":"error")),H.ok&&!L&&!H.error.trim()&&$("success","Offline MicroPython kørte uden output.")}finally{tn.current=null,ki(!1),G(!1)}}async function So(){var b,w;if(Ri){(b=tn.current)==null||b.abort(),$("warning","Stoppede offline MicroPython."),Zt(!0);return}if(Je==="browser"&&Il){(w=cl.current)==null||w.reset(),Pt(!1),$("warning","Stoppede Browser MicroPython REPL. Variablerne i browser-REPL blev nulstillet."),Zt(!0);return}const m=en.current;if(m)try{await m.stop(),$("warning","Stoppede koden på Pico.")}catch(H){$("error",H instanceof Error?H.message:"Kunne ikke stoppe koden.")}finally{ja(!1),Ln.current=!1,Zt(!0)}}function Eo(){const m=Da.current;if(!m)return;const b=m.scrollHeight-m.scrollTop-m.clientHeight<12;Zt(b)}function wo(){le([]),Zt(!0)}async function Gi(){const m=Aa.trimEnd();if(!m.trim())return;if(Je==="browser"){const w=Xu(m);if(w.some(L=>L.level==="error")){for(const L of w){const se=L.line?"Linje "+L.line+": ":"";$(L.level==="error"?"error":"warning",se+L.text)}return}const H=cl.current??new s0;cl.current=H,ji(""),Pt(!0),Zt(!0),$("info",">>> "+m);try{const L=await H.send(m,{timeoutMs:15e3,onOutput:Ne=>$("info",Ne)}),se=L.output.trim();se&&$("info",se),L.error.trim()&&Wl(L.error,m,L.unavailable?"warning":"error")}catch(L){$("error",L instanceof Error?L.message:"Browser MicroPython REPL fejlede.")}finally{Pt(!1)}return}if(de){$("warning","REPL-terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie REPL-kommandoer.");return}const b=en.current;if(!S||!b){$("warning","Forbind en Micro Controller med USB for at skrive i MicroPython REPL.");return}Et&&$("warning","REPL kan være optaget, mens koden kører. Tryk Stop, hvis kommandoen ikke svarer."),ji(""),Pt(!0),Zt(!0),Pl.current=!0,$("info",">>> "+m);try{await b.sendFriendlyLine(m)}catch(w){Pl.current=!1,$("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Pt(!1)}}function Zr(m,b,w){return w.length===0?null:c.jsxs("div",{className:"ide-install-group",children:[c.jsxs("div",{className:"ide-install-group-head",children:[c.jsx("h3",{children:m}),c.jsx("p",{children:b})]}),w.map(H=>{const L=de&&wa(H);return c.jsxs("label",{className:`ide-install-row ${L?"disabled":""}`,children:[c.jsx("input",{type:"checkbox",checked:!!gn[H.id],disabled:L,onChange:se=>ra(H,se.target.checked)}),c.jsxs("span",{children:[c.jsxs("strong",{children:[No(H),H.kind==="library"&&c.jsx("em",{className:`ide-install-status status-${H.status}`,children:L?"USB":L0(H.status)})]}),c.jsx("small",{children:H.description})]})]},H.id)})]})}function No(m){return m.kind==="program"?m.label.replace(/\s*\(main\.py\)$/i,""):m.label}function To(){yn&&le([]),Zt(!0)}function Mo(m,b){const w=m.indexOf(`
`,b);return w===-1?m.length:w}function sa(m,b){const w=j0(m,b);if(!w||w.query.length<1){Lt(null);return}const H=w.query.toLowerCase(),L=k0.filter(Ne=>Ne.label.toLowerCase().startsWith(H)).slice(0,8),se=A0(Zl.current,b);Lt(L.length>0&&se?{items:L,selected:0,start:w.start,end:b,position:se}:null)}function Vi(m=nt==null?void 0:nt.items[nt.selected]){if(!m||!nt)return;const b=re.slice(0,nt.start)+m.insert+re.slice(nt.end),w=nt.start+m.insert.length-(m.insert.endsWith("()")?1:0);Ge(b),Jt(H=>({...H,[Qt(_e,J)]:b})),Lt(null),window.requestAnimationFrame(()=>{const H=Zl.current;H&&(H.focus(),H.selectionStart=w,H.selectionEnd=w,sa(b,w))})}function Ro(m){if((m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="s"){m.preventDefault(),!U&&J.trim()&&Vn();return}if(nt){if(m.key==="ArrowDown"){m.preventDefault(),Lt(Ie=>Ie&&{...Ie,selected:(Ie.selected+1)%Ie.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),Lt(Ie=>Ie&&{...Ie,selected:(Ie.selected-1+Ie.items.length)%Ie.items.length});return}if(m.key==="Enter"||m.key==="Tab"){m.preventDefault(),Vi();return}if(m.key==="Escape"){m.preventDefault(),Lt(null);return}}if(m.key!=="Tab")return;m.preventDefault();const b=m.currentTarget,w=b.selectionStart,H=b.selectionEnd,L="    ";if(m.shiftKey){const Ie=re.lastIndexOf(`
`,w-1)+1,Pr=w===H?Mo(re,w):H,ko=re.slice(Ie,Pr);let Yi=0,qi=0;const jo=ko.replace(/(^|\n)( {1,4}|\t)/g,(Jr,oa,Do,Wr)=>{const Xi=Do.length;return Ie+Wr<w&&(Yi+=Xi),qi+=Xi,oa});if(qi===0)return;const Ao=re.slice(0,Ie)+jo+re.slice(Pr);Hn(Ao,Math.max(Ie,w-Yi)),window.requestAnimationFrame(()=>{b.selectionStart=Math.max(Ie,w-Yi),b.selectionEnd=w===H?b.selectionStart:Math.max(b.selectionStart,H-qi)});return}if(w===H){const Ie=re.slice(0,w)+L+re.slice(H);Hn(Ie,w+L.length),window.requestAnimationFrame(()=>{b.selectionStart=w+L.length,b.selectionEnd=w+L.length});return}const se=re.lastIndexOf(`
`,w-1)+1,Le=re.slice(se,H).replace(/^/gm,L),lt=Le.split(`
`).length,rn=re.slice(0,se)+Le+re.slice(H);Hn(rn,w+L.length),window.requestAnimationFrame(()=>{b.selectionStart=w+L.length,b.selectionEnd=H+lt*L.length})}return c.jsxs("div",{className:"screen ide-screen",children:[c.jsx(ef,{title:"Pico Kodeværksted",onMenu:()=>o()}),Ai?c.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:c.jsxs("div",{className:"ide-size-gate-panel",children:[c.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),c.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):c.jsxs("div",{className:"ide-layout",children:[c.jsxs("section",{className:"ide-panel ide-files-panel",children:[c.jsxs("div",{className:"ide-panel-head",children:[c.jsx("h2",{children:"Filer"}),c.jsxs("div",{className:"ide-mini-actions",children:[c.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:jn,"aria-label":"Ny fil",title:"Ny fil",children:c.jsx(Rt,{name:"plus",size:20})}),c.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var m;return(m=Di.current)==null?void 0:m.click()},"aria-label":"Importer fil",title:"Importer fil",children:c.jsx(Rt,{name:"upload",size:20})}),c.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>We(),disabled:!S&&!de||U,"aria-label":"Opdater filer",title:"Opdater filer",children:c.jsx(Rt,{name:"refresh",size:20})})]})]}),c.jsxs("div",{className:"ide-file-list",children:[!S&&!de&&c.jsxs("div",{className:"ide-file-empty",role:"status",children:[c.jsx("strong",{children:"Micro Controller ikke forbundet"}),c.jsx("span",{children:"Forbind en Micro Controller for at se filer på enheden. Browser-filer er lokale kladder og kører ikke på hardwaren, før de er gemt på en forbundet enhed."})]}),Ci.length===0?c.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Ci.map(m=>{if(m.kind==="separator")return c.jsx("div",{className:"ide-file-separator",children:c.jsx("span",{children:m.label})},m.id);const b=de&&wa(m),w=Ql[Qt(m.source,m.path)],H=w!==void 0&&w!==z0(m,we,rt);return c.jsxs("div",{className:`ide-file-row ${J===m.path&&_e===m.source?"active":""} ${b?"protected":""}`,children:[c.jsxs("button",{type:"button",onClick:()=>ia(m),disabled:b,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[c.jsx("span",{children:m.name}),c.jsxs("small",{title:H?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[m.versions.length>0&&c.jsxs("span",{className:"ide-file-version-count",title:`Version history: ${m.versions.length} saved versions`,"aria-label":`Version history: ${m.versions.length} saved versions`,children:["Version history: ",m.versions.length]}),c.jsx("i",{className:`ide-file-dirty-dot ${H?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),c.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>$r(m),disabled:m.type!=="file"||U||b,"aria-label":`Filvalg for ${m.name}`,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:c.jsx(Rt,{name:"settings",size:16})})]},`${m.source}:${m.path}`)})]})]}),c.jsxs("section",{className:"ide-panel ide-status-panel",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"ide-status-head",children:[c.jsx("h2",{children:de?"Forbundet Pico":"USB udvikling"}),!de&&c.jsx("span",{className:`ide-usb-status ${nn.supported?"available":"unavailable"}`,title:nn.message,"data-tooltip":nn.message,role:"img","aria-label":nn.message,tabIndex:0,children:"!"})]}),de&&c.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!de&&c.jsxs("div",{className:"ide-actions",children:[c.jsx("button",{className:"btn btn-primary",type:"button",onClick:S?qr:_l,disabled:!nn.supported||O,children:O?"Forbinder...":S?"Afbryd USB":"Forbind USB"}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:Qr,disabled:!S||de||U,children:"Installer"})]}),de&&c.jsxs("div",{className:"ide-actions",children:[c.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[c.jsx(Rt,{name:"power",size:22}),"Bluetooth forbundet"]}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:Qr,disabled:U,children:"Installer"})]}),c.jsx("div",{className:"ide-runtime",children:c.jsxs("div",{className:`ide-mini-actions ${de?"single":""}`,children:[c.jsx("button",{className:"btn btn-outline",type:"button",onClick:gl,disabled:!S&&!de||U,children:"Tjek filer"}),!de&&c.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Ma(!0),children:"MicroPython"})]})})]}),c.jsxs("section",{className:"ide-panel ide-editor-panel",children:[c.jsxs("div",{className:"ide-panel-head",children:[c.jsx("div",{className:"ide-editor-title",children:c.jsxs("h2",{children:[De(J),c.jsxs("small",{children:[Jl," bytes"]})]})}),c.jsxs("div",{className:"ide-mini-actions",children:[c.jsx("button",{className:"btn btn-outline",type:"button",onClick:Va,disabled:U,children:"Kør"}),c.jsx("button",{className:"btn btn-outline",type:"button",onClick:So,disabled:!Ri&&!(Je==="browser"&&Il)&&(!S||!Et),children:"Stop"}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:bl,disabled:U||!J.trim(),children:"Gem"}),c.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>an(),disabled:U||!J.trim(),children:"Slet"})]})]}),vo(),c.jsxs("div",{className:"ide-editor-wrap",children:[c.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Mi.top}px)`},children:Array.from({length:dl},(m,b)=>c.jsx("span",{children:b+1},b))}),c.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Mi.left}px, ${-Mi.top}px)`},children:O0(re)}),c.jsx("textarea",{ref:Zl,className:"ide-editor",value:re,onChange:m=>Hn(m.target.value,m.target.selectionStart),onKeyDown:Ro,onKeyUp:m=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||sa(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>sa(m.currentTarget.value,m.currentTarget.selectionStart),onScroll:m=>{Ur({top:m.currentTarget.scrollTop,left:m.currentTarget.scrollLeft}),nt&&sa(m.currentTarget.value,m.currentTarget.selectionStart)},spellCheck:!1}),nt&&c.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:nt.position.left,top:nt.position.top},children:nt.items.map((m,b)=>c.jsx("button",{className:b===nt.selected?"active":"",type:"button",onMouseDown:w=>{w.preventDefault(),Vi(m)},role:"option","aria-selected":b===nt.selected,children:m.label},m.label))}),Ee&&c.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[c.jsx("span",{className:"spinner","aria-hidden":"true"}),c.jsxs("strong",{children:["Indlæser ",De(Ee),"..."]})]})]})]}),c.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[c.jsxs("div",{className:"ide-panel-head",children:[c.jsx("h2",{children:"Terminal"}),c.jsxs("div",{className:"ide-mini-actions",children:[c.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Wt?"":"active"}`,type:"button",onClick:()=>Fl(m=>!m),"aria-label":Wt?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!Wt,title:Wt?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),c.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${yn?"active":""}`,type:"button",onClick:()=>Bn(m=>!m),"aria-pressed":yn,title:yn?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),c.jsx("button",{className:"btn btn-outline",type:"button",onClick:wo,disabled:F.length===0,children:"Ryd"})]})]}),c.jsx("div",{className:"ide-terminal","aria-live":"polite",ref:Da,onScroll:Eo,children:F.length===0?c.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):F.map((m,b)=>c.jsx("div",{className:`term-line term-${m.level}`,children:m.technical&&!Wt?m.technical:m.text},`${b}-${m.text}`))}),c.jsxs("form",{className:"ide-repl-form",onSubmit:m=>{m.preventDefault(),Gi()},children:[c.jsxs("div",{className:"ide-repl-head",children:[c.jsx("label",{htmlFor:"terminal-repl-input",children:"MicroPython REPL"}),c.jsxs("div",{className:"ide-repl-mode",role:"group","aria-label":"REPL mål",children:[c.jsx("button",{className:Je==="browser"?"active":"",type:"button",onClick:()=>bn("browser"),disabled:Il,children:"Browser"}),c.jsx("button",{className:Je==="microcontroller"?"active":"",type:"button",onClick:()=>bn("microcontroller"),disabled:Il,children:"Micro Controller"})]})]}),c.jsxs("div",{className:"ide-repl-row",children:[c.jsx("input",{id:"terminal-repl-input",value:Aa,onChange:m=>ji(m.target.value),disabled:Rn,placeholder:pl}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:Rn||!Aa.trim(),children:"Send"})]}),c.jsx("p",{children:Je==="browser"?"Browser MicroPython kører her i browseren og husker variabler mellem kommandoer. Hardware-moduler er ikke forbundet.":de?"Bluetooth viser filer, men fri MicroPython REPL kræver USB Serial.":S?"Skriv direkte til den forbundne MicroPython REPL. Hvis en løkke optager controlleren, så tryk Stop først.":"Forbind en Micro Controller med USB for at skrive kommandoer på enheden."})]})]})]}),c.jsx("input",{ref:Di,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:m=>{var b;aa((b=m.target.files)==null?void 0:b[0]),m.currentTarget.value=""}}),A&&c.jsx(gt,{title:"Gem fil",onClose:()=>I(!1),children:c.jsxs("div",{className:"ide-save-options",children:[c.jsx("button",{className:"btn btn-primary",type:"button",onClick:Bi,children:"Gem i browser"}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void la(),disabled:!S&&!de||U,children:"Gem på Pico"}),c.jsx("button",{className:"btn btn-outline",type:"button",onClick:Kr,children:"Download til computer"})]})}),Ke&&c.jsx(gt,{title:"Installer filer",onClose:()=>Be(!1),children:c.jsxs("div",{className:"ide-install-list",children:[c.jsx("p",{className:"ide-install-note",children:"Vælg et startprogram og de biblioteker dit projekt bruger. Ingen filer er valgt på forhånd."}),c.jsxs("div",{className:"ide-install-grid",children:[Zr("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(m=>m.kind==="program")),Zr("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(m=>m.kind==="library"))]}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:Hi,disabled:U,children:"Installer valgte"})]})}),Ti&&c.jsx(gt,{title:"main.py er gemt",onClose:()=>zn(!1),children:c.jsxs("div",{className:"settings-stack",children:[c.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void yl("control"),disabled:U,children:"Genstart og åbn kontrolpanel"}),c.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void yl("ide"),disabled:U,children:"Genstart og bliv i Kodeværksted"}),c.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>zn(!1),disabled:U,children:"Senere"})]})}),Ni&&c.jsx(gt,{title:"Installer MicroPython",onClose:()=>Ma(!1),children:c.jsxs("div",{className:"settings-stack",children:[c.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),c.jsxs("ol",{className:"micropython-steps",children:[c.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),c.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),c.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),c.jsxs("li",{children:["Kopier UF2-filen til drevet ",c.jsx("strong",{children:"RPI-RP2"})]})]}),c.jsxs("div",{className:"micropython-selects",children:[c.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),c.jsx("select",{id:"micropython-board",value:rl,onChange:m=>yo(m.target.value),children:ot.map(m=>c.jsx("option",{value:m,children:m},m))}),c.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),c.jsx("select",{id:"micropython-version",value:(Un==null?void 0:Un.version)??Kl,onChange:m=>ka(m.target.value),children:hl.map(m=>c.jsxs("option",{value:m.version,children:[m.version," (",m.date,")"]},`${m.board}:${m.version}:${m.date}`))})]}),Un&&c.jsx("a",{className:"btn btn-primary btn-block",href:Un.url,download:Un.fileName,children:"Download UF2"}),c.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),D&&c.jsx(gt,{title:"Ny Python-fil",onClose:()=>V(!1),children:c.jsxs("form",{className:"ide-new-file-form",onSubmit:m=>{m.preventDefault(),Ui()},children:[c.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),c.jsxs("div",{className:"ide-new-file-row",children:[c.jsx("input",{id:"new-pico-file",value:ae,onChange:m=>xe(m.target.value),autoFocus:!0,placeholder:"test"}),c.jsx("span",{children:".py"})]}),c.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",ml,"."]}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!mp(ae),children:"Opret"})]})}),z&&c.jsx(gt,{title:De(z.path),onClose:()=>P(null),children:c.jsxs("div",{className:"ide-file-action-modal",children:[c.jsxs("form",{className:"ide-file-rename-form",onSubmit:m=>{m.preventDefault(),wt()},children:[c.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),c.jsxs("div",{className:"ide-new-file-row",children:[c.jsx("input",{id:"rename-pico-file",value:me,onChange:m=>E(m.target.value),placeholder:"min_kode"}),c.jsxs("span",{children:[".",Or(z.path)]})]}),c.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Or(z.path)," automatisk."]}),c.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Hu(me,Or(z.path))||Hu(me,Or(z.path))===z.path||U,children:"Gem navn"})]}),c.jsx("div",{className:"ide-file-action-buttons",children:c.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>an(z),disabled:U,children:"Slet"})}),c.jsxs("section",{className:"ide-version-history",children:[c.jsx("h4",{children:"Version history"}),z.source!=="pico"?c.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):z.versions.length===0?c.jsx("p",{children:"Version history: 0 saved versions."}):c.jsx("div",{className:"ide-version-list",children:z.versions.map(m=>c.jsxs("div",{className:"ide-version-row",children:[c.jsx("span",{children:De(m.path)}),c.jsx("small",{children:m.size!==void 0?`${m.size} bytes`:"Gemt på Pico"}),c.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void La(m),disabled:U,children:"Gendan"}),c.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ua(m),disabled:U,children:"Slet"})]},m.path))})]})]})})]})}function mp(o){var u;const r=(u=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.replace(/\.py$/i,"").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,"");return r?`/${r}.py`:""}function w0(o){const r=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),u=r==null?void 0:r.match(/^(.+)\.(py|txt|json|csv)$/i);if(!u)return"";const s=u[1].replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,"");return s?`/${s}.${u[2].toLowerCase()}`:""}function Hu(o,r="py"){const u=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!u)return"";const s=u.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const f=s[1].replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,""),h=r.replace(/^\./,"").toLowerCase(),_=(s[2]??(h||"py")).toLowerCase();return f?`/${f}.${_}`:""}function N0(o){return De(o).replace(/\.(py|txt|json|csv)$/i,"")}function Or(o){var s;const r=De(o).match(/\.([a-z0-9]+)$/i),u=(s=r==null?void 0:r[1])==null?void 0:s.toLowerCase();return u&&["py","txt","json","csv"].includes(u)?u:"py"}function ao(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function De(o){return o.split("/").filter(Boolean).pop()??o}function io(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function T0(o){return o instanceof DOMException&&o.name==="AbortError"}function M0(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function wa(o){return R0(o)}function R0(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const k0=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.reset()",insert:"machine.reset()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"import time",insert:"import time"},{label:"import machine",insert:"import machine"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function j0(o,r){const s=o.slice(0,r).match(/[A-Za-z_][A-Za-z0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function A0(o,r){if(!o)return null;const u=o.parentElement;if(!u)return null;const s=window.getComputedStyle(o),f=document.createElement("div"),h=document.createElement("span"),_=u.getBoundingClientRect();f.style.position="absolute",f.style.visibility="hidden",f.style.pointerEvents="none",f.style.whiteSpace="pre-wrap",f.style.overflowWrap="break-word",f.style.boxSizing=s.boxSizing,f.style.width=`${o.clientWidth}px`,f.style.padding=s.padding,f.style.border=s.border,f.style.font=s.font,f.style.lineHeight=s.lineHeight,f.style.letterSpacing=s.letterSpacing,f.style.tabSize=s.tabSize,f.style.left=`${o.offsetLeft-o.scrollLeft}px`,f.style.top=`${o.offsetTop-o.scrollTop}px`,f.textContent=o.value.slice(0,r),h.textContent=o.value.slice(r,r+1)||" ",f.appendChild(h),u.appendChild(f);const g=h.getBoundingClientRect();f.remove();const v=D0(g.left-_.left,8,Math.max(8,u.clientWidth-296)),y=g.bottom-_.top+6,S=y+218>u.clientHeight?Math.max(8,g.top-_.top-218):y;return{left:v,top:S}}function D0(o,r,u){return Math.max(r,Math.min(u,o))}function O0(o){const r=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,u=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,s=[];return o.split(/(\r?\n)/).forEach((f,h)=>{if(f===`
`||f===`\r
`){s.push(c.jsx("br",{},`br-${h}`));return}let _=0;[...f.matchAll(u)].forEach((v,y)=>{const S=v.index??0;S>_&&s.push(...hp(f.slice(_,S),r,`${h}-${y}-plain`));const M=v[0],O=M.startsWith("#")?"tok-comment":M.startsWith('"')||M.startsWith("'")?"tok-string":/^\d/.test(M)?"tok-number":"tok-builtin";s.push(c.jsx("span",{className:O,children:M},`${h}-${y}-token`)),_=S+M.length}),_<f.length&&s.push(...hp(f.slice(_),r,`${h}-tail`))}),s.length?s:" "}function hp(o,r,u){const s=[];let f=0;const h=new RegExp(r.source,"g");return[...o.matchAll(h)].forEach((_,g)=>{const v=_.index??0;v>f&&s.push(c.jsx("span",{children:o.slice(f,v)},`${u}-${g}-plain`)),s.push(c.jsx("span",{className:"tok-keyword",children:_[0]},`${u}-${g}-keyword`)),f=v+_[0].length}),f<o.length&&s.push(c.jsx("span",{children:o.slice(f)},`${u}-plain-end`)),s}function Gu(o){return o.length>0?o:[{path:$u,content:Dp,uploaded:!1,updatedAt:Date.now()}]}function C0(o,r,u,s){const f=o.filter(h=>h.path!==r);return[{path:r,content:u,uploaded:s,updatedAt:Date.now()},...f].sort((h,_)=>_.updatedAt-h.updatedAt)}function z0(o,r,u){var s;return o.source==="pico"?u[o.path]:(s=r.find(f=>f.path===o.path))==null?void 0:s.content}function oo(o){const r=o.replace(/\\/g,"/"),u=r.lastIndexOf("/"),s=u>=0?r.slice(0,u+1):"",h=(u>=0?r.slice(u+1):r).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${s}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function bi(o){return oo(o)!==null}function Iu(o){const r=new Map;for(const u of o){const s=oo(u.path);if(!s)continue;const f=r.get(s.originalPath)??[];f.push(u),r.set(s.originalPath,f)}for(const u of r.values())u.sort((s,f)=>{var h,_;return(((h=oo(f.path))==null?void 0:h.index)??0)-(((_=oo(s.path))==null?void 0:_.index)??0)});return r}function B0(o,r){const u=o.replace(/\\/g,"/"),s=u.lastIndexOf("/"),f=s>=0?u.slice(0,s+1):"/",h=s>=0?u.slice(s+1):u.replace(/^\/+/,""),_=h.lastIndexOf("."),g=_>0?h.slice(0,_):h,v=_>0?h.slice(_):"",y=new Set(r.map(S=>S.path.toLowerCase()));for(let S=1;S<1e3;S+=1){const M=`${f}${g}_backup${S}${v}`;if(!y.has(M.toLowerCase()))return M}return`${f}${g}_backup${Date.now()}${v}`}function L0(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function U0(o,r,u,s){const f=new Map,h=Iu(o);for(const S of o)bi(S.path)||f.set(Qt("pico",S.path),{kind:"file",name:S.name,path:S.path,type:S.type,size:S.size,source:"pico",uploaded:!0,versions:h.get(S.path)??[]});for(const S of r)f.set(Qt("local",S.path),{kind:"file",name:De(S.path),path:S.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const S of Object.keys(u)){const[M,...O]=S.split(":"),Q=O.join(":");if(M!=="local"&&M!=="pico"||!Q)continue;const F=f.get(S);if(F){f.set(S,F);continue}f.set(S,{kind:"file",name:De(Q),path:Q,type:"file",source:M,uploaded:!1,versions:M==="pico"?h.get(Q)??[]:[]})}const _=[...f.values()].sort(G0),g=_.filter(S=>S.source==="pico"),v=_.filter(S=>S.source==="local"),y=[];return g.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Micro Controller"},...g):y.push({kind:"separator",id:"pico-files",label:"Micro Controller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const H0=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function G0(o,r){const u=pp(o.path),s=pp(r.path);return u===null&&s===null?o.name.localeCompare(r.name,"da"):u===null?-1:s===null?1:u-s}function pp(o){var u;const r=(u=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.toLowerCase();return r?H0.get(r)??null:null}function _p(o,r,u){if(!(r in o))return o;const s={...o,[u]:o[r]};return delete s[r],s}function V0(o,r,u,s){const f=`${r}:${u}`;if(!(f in o))return o;const h={...o,[`${r}:${s}`]:o[f]};return delete h[f],h}function Y0({open:o}){const r=W(G=>G.screen),u=W(G=>G.active),s=W(G=>G.toggleSideMenu),f=W(G=>G.toggleDebugger),h=W(G=>G.setEditMode),_=W(G=>G.openMenuPage),g=W(G=>G.disconnect),v=W(G=>G.openPicoIde),y=W(G=>G.closePicoIde),S=W(G=>G.picoIdeOrigin),M=r==="dashboard",O=r==="control",Q=r==="ide",F=O&&!!(u!=null&&u.canEdit),le=S==="control",U=S==="control"?"Kontrol Panel":"Hovedmenu";return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),c.jsxs("nav",{className:`sidemenu sidemenu-${r} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[M&&c.jsxs(c.Fragment,{children:[c.jsx(It,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),c.jsx(It,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),c.jsx(It,{label:"Kodeværksted",icon:"picoIde",onClick:v}),c.jsx(Vu,{}),c.jsx(It,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),c.jsx(It,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),c.jsx(It,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),O&&c.jsxs(c.Fragment,{children:[c.jsx(It,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),c.jsx(It,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!F}),c.jsx(It,{label:"Kodeværksted",icon:"picoIde",onClick:v}),c.jsx(Vu,{}),c.jsx(It,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),c.jsx(It,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),Q&&c.jsxs(c.Fragment,{children:[c.jsx(It,{label:U,icon:"back",onClick:y}),c.jsx(Vu,{})]}),c.jsx("div",{className:"spacer"}),(O||Q&&le)&&c.jsx(It,{label:"Forlad",icon:"exit",onClick:()=>g()})]})]})}function It({label:o,icon:r,disabled:u,onClick:s}){return c.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:u,"aria-label":o,children:[c.jsx(Rt,{name:r}),c.jsx("span",{children:o})]})}function Vu(){return c.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[c.jsx("img",{src:ib,alt:""}),c.jsx("span",{children:"Teknologiskolen"})]})}const q0={error:"term-error",success:"term-success",warning:"term-warning",info:""},gp={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function X0(){const o=new Date,r=u=>String(u).padStart(2,"0");return`${r(o.getDate())}-${r(o.getMonth()+1)}-${o.getFullYear()}-${r(o.getHours())}-${r(o.getMinutes())}`}function K0(){const o=W(f=>f.logs),r=W(f=>f.clearLogs),u=W(f=>f.toggleDebugger);function s(){const f=[...o].reverse().map(v=>`${v.time} ${gp[v.level]}${v.message}`).join(`
`),h=new Blob([f],{type:"text/plain"}),_=URL.createObjectURL(h),g=document.createElement("a");g.href=_,g.download=`${X0()}.txt`,g.click(),URL.revokeObjectURL(_)}return c.jsxs(gt,{title:"Fejlfinding",onClose:()=>u(!1),closeVariant:"circle",children:[c.jsx("div",{className:"terminal",children:o.length===0?c.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((f,h)=>c.jsxs("div",{className:`term-line ${q0[f.level]}`,children:[f.time," ",gp[f.level],f.message]},`${f.time}-${h}`))}),c.jsxs("div",{className:"row",style:{marginTop:14},children:[c.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:r,children:"Ryd"}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}function $0(){const o=W(V=>V.menuPage),r=W(V=>V.closeMenuPage),u=W(V=>V.user),s=W(V=>V.active),f=W(V=>V.layout),h=W(V=>V.sliderValues),_=W(V=>V.savedDevices),g=W(V=>V.updateUsername),v=W(V=>V.clearSavedDevices),y=W(V=>V.resetApplicationData),S=W(V=>V.saveDeviceSettings),M=W(V=>V.setEditMode),O=W(V=>V.askConfirm),[Q,F]=q.useState((u==null?void 0:u.username)??""),[le,U]=q.useState((s==null?void 0:s.iconID)??0),[G,pe]=q.useState(!1),[oe,Ee]=q.useState((s==null?void 0:s.canOthersConnect)??!1),[fe,we]=q.useState((s==null?void 0:s.canOthersEdit)??!1),[ee,J]=q.useState((s==null?void 0:s.gridCols)??11),[ge,_e]=q.useState((s==null?void 0:s.gridRows)??31),[ye,re]=q.useState(!1);q.useEffect(()=>{o==="user-settings"&&F((u==null?void 0:u.username)??"")},[o,u==null?void 0:u.username]),q.useEffect(()=>{o==="device-settings"&&s&&(U(s.iconID),Ee(s.canOthersConnect),we(s.canOthersEdit),J(s.gridCols),_e(s.gridRows))},[s,o]);const Ge=(V,ae)=>Number.isFinite(V)?Math.max(yi,Math.min(vi,Math.round(V))):ae,Ae=(u==null?void 0:u.username)??"",Ze=Q.trim(),D=Ze.length>0&&Ze!==Ae;if(!o)return null;if(o==="user-settings")return c.jsx(gt,{title:"Brugerindstillinger",onClose:r,children:c.jsxs("div",{className:"settings-stack",children:[c.jsx(pn,{label:"GUID",value:(u==null?void 0:u.userID)??"Ukendt"}),c.jsxs("div",{className:`field ${Q.trim()?"filled":""}`,children:[c.jsx("input",{id:"settings-username",value:Q,onChange:V=>F(V.target.value),maxLength:24,autoComplete:"off",placeholder:""}),c.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>g(Q),disabled:!D,children:"Gem nyt brugernavn"}),c.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>O({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{y()}}),children:"Slet brugerdata"})]})});if(o==="application-settings")return c.jsx(gt,{title:"Applikationsindstillinger",onClose:r,children:c.jsxs("div",{className:"settings-stack",children:[c.jsx(pn,{label:"Version",value:Br}),c.jsx(pn,{label:"Bluetooth",value:go()?"Tilgængelig":"Ikke tilgængelig"}),c.jsx(pn,{label:"Gemte enheder",value:String(_.length)}),c.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),c.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>O({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:v}),disabled:_.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return c.jsx(gt,{title:"Om appen",onClose:r,children:c.jsxs("div",{className:"settings-stack prose",children:[c.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),c.jsx(pn,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),c.jsx(pn,{label:"Version",value:Br})]})});if(o==="application-help")return c.jsx(gt,{title:"Hjælp til applikationen",onClose:r,children:c.jsxs("div",{className:"settings-stack prose help-lesson",children:[c.jsxs("div",{className:"help-lesson-card",children:[c.jsx("strong",{children:"Komplet undervisningsforløb"}),c.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),c.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[c.jsx("span",{children:"Trin-for-trin opsætning"}),c.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),c.jsx("span",{children:"Projektforslag med Pico W"})]}),c.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),c.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const V=f.filter(me=>me.type==="slider"),ae=!!(s!=null&&s.isOwnedByMe);async function xe(me=!1){if(!s||!ae)return;const E=Ge(ee,s.gridCols),z=Ge(ge,s.gridRows),P=I0(f,E,z);if(P&&!me){O({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${P.requiredCols} kolonner og ${P.requiredRows} rækker. Det nye gitter er ${E} × ${z}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{xe(!0)}});return}re(!0),await S(le,oe,oe&&fe,E,z),J(E),_e(z),re(!1)}return c.jsx(gt,{title:"Enhedsindstillinger",onClose:r,children:c.jsxs("div",{className:"settings-stack",children:[c.jsx(pn,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),c.jsx(pn,{label:"Ejer",value:F0(s)}),ae?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>pe(!0),children:c.jsx("img",{src:wi(le),alt:""})}),c.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),c.jsxs("div",{className:"segmented",children:[c.jsx("button",{type:"button",className:oe?"":"active",onClick:()=>Ee(!1),children:"Privat"}),c.jsx("button",{type:"button",className:oe?"active":"",onClick:()=>Ee(!0),children:"Offentlig"})]}),oe&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),c.jsxs("div",{className:"segmented",children:[c.jsx("button",{type:"button",className:fe?"":"active",onClick:()=>we(!1),children:"Nej"}),c.jsx("button",{type:"button",className:fe?"active":"",onClick:()=>we(!0),children:"Ja"})]})]}),c.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{className:"grid-field",children:[c.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),c.jsx("input",{id:"device-cols",type:"number",min:yi,max:vi,value:Number.isNaN(ee)?"":ee,onChange:me=>J(parseInt(me.target.value,10)),onBlur:()=>J(Ge(ee,(s==null?void 0:s.gridCols)??11))})]}),c.jsxs("div",{className:"grid-field",children:[c.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),c.jsx("input",{id:"device-rows",type:"number",min:yi,max:vi,value:Number.isNaN(ge)?"":ge,onChange:me=>_e(parseInt(me.target.value,10)),onBlur:()=>_e(Ge(ge,(s==null?void 0:s.gridRows)??31))})]})]}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>xe(),disabled:ye,children:ye?"Gemmer...":"Gem enhedsindstillinger"})]}):c.jsxs(c.Fragment,{children:[c.jsx(pn,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),c.jsx(pn,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),c.jsx(pn,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),c.jsx(pn,{label:"Kontroller",value:String(f.length)}),V.length>0&&c.jsxs("div",{className:"settings-section",children:[c.jsx("h4",{children:"Slidere"}),V.map(me=>c.jsxs("div",{className:"slider-meta",children:[c.jsx("strong",{children:me.name}),c.jsxs("span",{children:[me.sliderMin??0," til ",me.sliderMax??100]}),c.jsxs("span",{children:["Retur: ",Q0(me.sliderRecenter??"none")]}),c.jsxs("span",{children:["Seneste værdi: ",h[me.name]??"Ikke brugt"]})]},me.name))]}),G&&c.jsx(wp,{selected:le,onSelect:U,onClose:()=>pe(!1)})]})})}return c.jsx(gt,{title:"Hjælp til enheden",onClose:r,children:c.jsxs("div",{className:"settings-stack prose",children:[c.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),c.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),c.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&c.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>M(!0),children:"Rediger layout"})]})})}function I0(o,r,u){let s=0,f=0;for(const h of o)xi(h)&&(s=Math.max(s,Math.ceil((h.centerX2+h.spanX)/2)+1),f=Math.max(f,Math.ceil((h.centerY2+h.spanY)/2)+1));return r<s||u<f?{requiredCols:s,requiredRows:f}:null}function Q0(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function F0(o){var r;return o?o.isOwnedByMe?"Dig":((r=o.ownerName)==null?void 0:r.trim())||"Anden bruger":"Ukendt"}function pn({label:o,value:r}){return c.jsxs("div",{className:"settings-row",children:[c.jsx("span",{children:o}),c.jsx("strong",{children:r})]})}function Z0(){const o=W(s=>s.confirmDialog),r=W(s=>s.closeConfirm);if(!o)return null;function u(){o==null||o.onConfirm(),r()}return c.jsx(gt,{title:o.title,onClose:r,children:c.jsxs("div",{className:"settings-stack",children:[c.jsx("p",{className:"confirm-message",children:o.message}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:r,children:o.cancelLabel??"Annuller"}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:u,children:o.confirmLabel??"Fortsæt"})]})]})})}function P0(){const o=W(s=>s.connectionLost),r=W(s=>s.reconnectLostDevice),u=W(s=>s.dismissConnectionLost);return o?c.jsx(gt,{title:"Forbindelse afbrudt",onClose:u,children:c.jsxs("div",{className:"settings-stack",children:[c.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:u,children:"Luk"}),c.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>r(),children:"Genforbind"})]})]})}):null}function J0(){const o=W(u=>u.toast),r=W(u=>u.dismissToast);return o?c.jsx("div",{className:"toast",role:"alert",onClick:r,children:o.message},o.id):null}function W0(){const o=W(g=>g.screen),r=W(g=>g.splashTarget),u=W(g=>g.init),s=W(g=>g.sideMenuOpen),f=W(g=>g.debuggerOpen),[h,_]=q.useState(!1);return q.useEffect(()=>{u()},[u]),q.useEffect(()=>{if(s){_(!0);return}const g=setTimeout(()=>_(!1),140);return()=>clearTimeout(g)},[s]),c.jsxs("div",{className:"app",children:[o==="splash"&&r==="intro"&&c.jsx(Qh,{}),o==="splash"&&r==="dashboard"&&c.jsx(Fh,{}),o==="splash"&&c.jsx(cb,{}),o==="intro"&&c.jsx(Qh,{}),o==="dashboard"&&c.jsx(Fh,{}),o==="connection"&&c.jsx(mb,{}),o==="create"&&c.jsx(hb,{}),o==="control"&&c.jsx(Cb,{}),o==="ide"&&c.jsx(E0,{}),h&&c.jsx(Y0,{open:s}),c.jsx($0,{}),c.jsx(P0,{}),c.jsx(Z0,{}),f&&c.jsx(K0,{}),c.jsx(J0,{})]})}function ey(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(r=>{console.warn("Service worker registration failed:",r)})})}ey();xg.createRoot(document.getElementById("root")).render(c.jsx(Cr.StrictMode,{children:c.jsx(W0,{})}));
