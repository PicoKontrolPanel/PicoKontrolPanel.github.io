var Zg=Object.defineProperty;var Jg=(s,i,c)=>i in s?Zg(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c;var de=(s,i,c)=>Jg(s,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function s_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vf={exports:{}},rs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function eb(){if(ih)return rs;ih=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,f,h){var b=null;if(h!==void 0&&(b=""+h),f.key!==void 0&&(b=""+f.key),"key"in f){h={};for(var p in f)p!=="key"&&(h[p]=f[p])}else h=f;return f=h.ref,{$$typeof:s,type:a,key:b,ref:f!==void 0?f:null,props:h}}return rs.Fragment=i,rs.jsx=c,rs.jsxs=c,rs}var rh;function nb(){return rh||(rh=1,vf.exports=eb()),vf.exports}var u=nb(),xf={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function tb(){if(ah)return Te;ah=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),T=Symbol.iterator;function D(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,G={};function F(E,L,ne){this.props=E,this.context=L,this.refs=G,this.updater=ne||O}F.prototype.isReactComponent={},F.prototype.setState=function(E,L){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,L,"setState")},F.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function W(){}W.prototype=F.prototype;function q(E,L,ne){this.props=E,this.context=L,this.refs=G,this.updater=ne||O}var re=q.prototype=new W;re.constructor=q,V(re,F.prototype),re.isPureReactComponent=!0;var be=Array.isArray;function me(){}var K={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function pe(E,L,ne){var oe=ne.ref;return{$$typeof:s,type:E,key:L,ref:oe!==void 0?oe:null,props:ne}}function ye(E,L){return pe(E.type,L,E.props)}function De(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function J(E){var L={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ne){return L[ne]})}var We=/\/+/g;function Oe(E,L){return typeof E=="object"&&E!==null&&E.key!=null?J(""+E.key):L.toString(36)}function Pe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(me,me):(E.status="pending",E.then(function(L){E.status==="pending"&&(E.status="fulfilled",E.value=L)},function(L){E.status==="pending"&&(E.status="rejected",E.reason=L)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function I(E,L,ne,oe,xe){var H=typeof E;(H==="undefined"||H==="boolean")&&(E=null);var A=!1;if(E===null)A=!0;else switch(H){case"bigint":case"string":case"number":A=!0;break;case"object":switch(E.$$typeof){case s:case i:A=!0;break;case S:return A=E._init,I(A(E._payload),L,ne,oe,xe)}}if(A)return xe=xe(E),A=oe===""?"."+Oe(E,0):oe,be(xe)?(ne="",A!=null&&(ne=A.replace(We,"$&/")+"/"),I(xe,L,ne,"",function(Be){return Be})):xe!=null&&(De(xe)&&(xe=ye(xe,ne+(xe.key==null||E&&E.key===xe.key?"":(""+xe.key).replace(We,"$&/")+"/")+A)),L.push(xe)),1;A=0;var ae=oe===""?".":oe+":";if(be(E))for(var ve=0;ve<E.length;ve++)oe=E[ve],H=ae+Oe(oe,ve),A+=I(oe,L,ne,H,xe);else if(ve=D(E),typeof ve=="function")for(E=ve.call(E),ve=0;!(oe=E.next()).done;)oe=oe.value,H=ae+Oe(oe,ve++),A+=I(oe,L,ne,H,xe);else if(H==="object"){if(typeof E.then=="function")return I(Pe(E),L,ne,oe,xe);throw L=String(E),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return A}function te(E,L,ne){if(E==null)return E;var oe=[],xe=0;return I(E,oe,"","",function(H){return L.call(ne,H,xe++)}),oe}function ue(E){if(E._status===-1){var L=E._result;L=L(),L.then(function(ne){(E._status===0||E._status===-1)&&(E._status=1,E._result=ne)},function(ne){(E._status===0||E._status===-1)&&(E._status=2,E._result=ne)}),E._status===-1&&(E._status=0,E._result=L)}if(E._status===1)return E._result.default;throw E._result}var ce=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},we={map:te,forEach:function(E,L,ne){te(E,function(){L.apply(this,arguments)},ne)},count:function(E){var L=0;return te(E,function(){L++}),L},toArray:function(E){return te(E,function(L){return L})||[]},only:function(E){if(!De(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return Te.Activity=k,Te.Children=we,Te.Component=F,Te.Fragment=c,Te.Profiler=f,Te.PureComponent=q,Te.StrictMode=a,Te.Suspense=g,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,Te.__COMPILER_RUNTIME={__proto__:null,c:function(E){return K.H.useMemoCache(E)}},Te.cache=function(E){return function(){return E.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(E,L,ne){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var oe=V({},E.props),xe=E.key;if(L!=null)for(H in L.key!==void 0&&(xe=""+L.key),L)!ee.call(L,H)||H==="key"||H==="__self"||H==="__source"||H==="ref"&&L.ref===void 0||(oe[H]=L[H]);var H=arguments.length-2;if(H===1)oe.children=ne;else if(1<H){for(var A=Array(H),ae=0;ae<H;ae++)A[ae]=arguments[ae+2];oe.children=A}return pe(E.type,xe,oe)},Te.createContext=function(E){return E={$$typeof:b,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},Te.createElement=function(E,L,ne){var oe,xe={},H=null;if(L!=null)for(oe in L.key!==void 0&&(H=""+L.key),L)ee.call(L,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(xe[oe]=L[oe]);var A=arguments.length-2;if(A===1)xe.children=ne;else if(1<A){for(var ae=Array(A),ve=0;ve<A;ve++)ae[ve]=arguments[ve+2];xe.children=ae}if(E&&E.defaultProps)for(oe in A=E.defaultProps,A)xe[oe]===void 0&&(xe[oe]=A[oe]);return pe(E,H,xe)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(E){return{$$typeof:p,render:E}},Te.isValidElement=De,Te.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:ue}},Te.memo=function(E,L){return{$$typeof:y,type:E,compare:L===void 0?null:L}},Te.startTransition=function(E){var L=K.T,ne={};K.T=ne;try{var oe=E(),xe=K.S;xe!==null&&xe(ne,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(me,ce)}catch(H){ce(H)}finally{L!==null&&ne.types!==null&&(L.types=ne.types),K.T=L}},Te.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},Te.use=function(E){return K.H.use(E)},Te.useActionState=function(E,L,ne){return K.H.useActionState(E,L,ne)},Te.useCallback=function(E,L){return K.H.useCallback(E,L)},Te.useContext=function(E){return K.H.useContext(E)},Te.useDebugValue=function(){},Te.useDeferredValue=function(E,L){return K.H.useDeferredValue(E,L)},Te.useEffect=function(E,L){return K.H.useEffect(E,L)},Te.useEffectEvent=function(E){return K.H.useEffectEvent(E)},Te.useId=function(){return K.H.useId()},Te.useImperativeHandle=function(E,L,ne){return K.H.useImperativeHandle(E,L,ne)},Te.useInsertionEffect=function(E,L){return K.H.useInsertionEffect(E,L)},Te.useLayoutEffect=function(E,L){return K.H.useLayoutEffect(E,L)},Te.useMemo=function(E,L){return K.H.useMemo(E,L)},Te.useOptimistic=function(E,L){return K.H.useOptimistic(E,L)},Te.useReducer=function(E,L,ne){return K.H.useReducer(E,L,ne)},Te.useRef=function(E){return K.H.useRef(E)},Te.useState=function(E){return K.H.useState(E)},Te.useSyncExternalStore=function(E,L,ne){return K.H.useSyncExternalStore(E,L,ne)},Te.useTransition=function(){return K.H.useTransition()},Te.version="19.2.7",Te}var sh;function Qf(){return sh||(sh=1,xf.exports=tb()),xf.exports}var U=Qf();const ms=s_(U);var Sf={exports:{}},as={},kf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function lb(){return oh||(oh=1,(function(s){function i(I,te){var ue=I.length;I.push(te);e:for(;0<ue;){var ce=ue-1>>>1,we=I[ce];if(0<f(we,te))I[ce]=te,I[ue]=we,ue=ce;else break e}}function c(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var te=I[0],ue=I.pop();if(ue!==te){I[0]=ue;e:for(var ce=0,we=I.length,E=we>>>1;ce<E;){var L=2*(ce+1)-1,ne=I[L],oe=L+1,xe=I[oe];if(0>f(ne,ue))oe<we&&0>f(xe,ne)?(I[ce]=xe,I[oe]=ue,ce=oe):(I[ce]=ne,I[L]=ue,ce=L);else if(oe<we&&0>f(xe,ue))I[ce]=xe,I[oe]=ue,ce=oe;else break e}}return te}function f(I,te){var ue=I.sortIndex-te.sortIndex;return ue!==0?ue:I.id-te.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var b=Date,p=b.now();s.unstable_now=function(){return b.now()-p}}var g=[],y=[],S=1,k=null,T=3,D=!1,O=!1,V=!1,G=!1,F=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function re(I){for(var te=c(y);te!==null;){if(te.callback===null)a(y);else if(te.startTime<=I)a(y),te.sortIndex=te.expirationTime,i(g,te);else break;te=c(y)}}function be(I){if(V=!1,re(I),!O)if(c(g)!==null)O=!0,me||(me=!0,J());else{var te=c(y);te!==null&&Pe(be,te.startTime-I)}}var me=!1,K=-1,ee=5,pe=-1;function ye(){return G?!0:!(s.unstable_now()-pe<ee)}function De(){if(G=!1,me){var I=s.unstable_now();pe=I;var te=!0;try{e:{O=!1,V&&(V=!1,W(K),K=-1),D=!0;var ue=T;try{n:{for(re(I),k=c(g);k!==null&&!(k.expirationTime>I&&ye());){var ce=k.callback;if(typeof ce=="function"){k.callback=null,T=k.priorityLevel;var we=ce(k.expirationTime<=I);if(I=s.unstable_now(),typeof we=="function"){k.callback=we,re(I),te=!0;break n}k===c(g)&&a(g),re(I)}else a(g);k=c(g)}if(k!==null)te=!0;else{var E=c(y);E!==null&&Pe(be,E.startTime-I),te=!1}}break e}finally{k=null,T=ue,D=!1}te=void 0}}finally{te?J():me=!1}}}var J;if(typeof q=="function")J=function(){q(De)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Oe=We.port2;We.port1.onmessage=De,J=function(){Oe.postMessage(null)}}else J=function(){F(De,0)};function Pe(I,te){K=F(function(){I(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return T},s.unstable_next=function(I){switch(T){case 1:case 2:case 3:var te=3;break;default:te=T}var ue=T;T=te;try{return I()}finally{T=ue}},s.unstable_requestPaint=function(){G=!0},s.unstable_runWithPriority=function(I,te){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ue=T;T=I;try{return te()}finally{T=ue}},s.unstable_scheduleCallback=function(I,te,ue){var ce=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?ce+ue:ce):ue=ce,I){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ue+we,I={id:S++,callback:te,priorityLevel:I,startTime:ue,expirationTime:we,sortIndex:-1},ue>ce?(I.sortIndex=ue,i(y,I),c(g)===null&&I===c(y)&&(V?(W(K),K=-1):V=!0,Pe(be,ue-ce))):(I.sortIndex=we,i(g,I),O||D||(O=!0,me||(me=!0,J()))),I},s.unstable_shouldYield=ye,s.unstable_wrapCallback=function(I){var te=T;return function(){var ue=T;T=te;try{return I.apply(this,arguments)}finally{T=ue}}}})(wf)),wf}var ch;function ib(){return ch||(ch=1,kf.exports=lb()),kf.exports}var Ef={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function rb(){if(uh)return Jn;uh=1;var s=Qf();function i(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)y+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(g,y,S){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:k==null?null:""+k,children:g,containerInfo:y,implementation:S}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Jn.createPortal=function(g,y){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return h(g,y,null,S)},Jn.flushSync=function(g){var y=b.T,S=a.p;try{if(b.T=null,a.p=2,g)return g()}finally{b.T=y,a.p=S,a.d.f()}},Jn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},Jn.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Jn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var S=y.as,k=p(S,y.crossOrigin),T=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;S==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:k,integrity:T,fetchPriority:D}):S==="script"&&a.d.X(g,{crossOrigin:k,integrity:T,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Jn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var S=p(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},Jn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var S=y.as,k=p(S,y.crossOrigin);a.d.L(g,S,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Jn.preloadModule=function(g,y){if(typeof g=="string")if(y){var S=p(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},Jn.requestFormReset=function(g){a.d.r(g)},Jn.unstable_batchedUpdates=function(g,y){return g(y)},Jn.useFormState=function(g,y,S){return b.H.useFormState(g,y,S)},Jn.useFormStatus=function(){return b.H.useHostTransitionStatus()},Jn.version="19.2.7",Jn}var fh;function ab(){if(fh)return Ef.exports;fh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Ef.exports=rb(),Ef.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function sb(){if(dh)return as;dh=1;var s=ib(),i=Qf(),c=ab();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function b(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(a(188))}function y(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,l=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return g(r),e;if(o===l)return g(r),n;o=o.sibling}throw Error(a(188))}if(t.return!==l.return)t=r,l=o;else{for(var m=!1,v=r.child;v;){if(v===t){m=!0,t=r,l=o;break}if(v===l){m=!0,l=r,t=o;break}v=v.sibling}if(!m){for(v=o.child;v;){if(v===t){m=!0,t=o,l=r;break}if(v===l){m=!0,l=o,t=r;break}v=v.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==l)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var k=Object.assign,T=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),q=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),De=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=De&&e[De]||e["@@iterator"],typeof e=="function"?e:null)}var We=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===We?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case F:return"Profiler";case G:return"StrictMode";case be:return"Suspense";case me:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case q:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case re:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:Oe(e.type)||"Memo";case ee:n=e._payload,e=e._init;try{return Oe(e(n))}catch{}}return null}var Pe=Array.isArray,I=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},ce=[],we=-1;function E(e){return{current:e}}function L(e){0>we||(e.current=ce[we],ce[we]=null,we--)}function ne(e,n){we++,ce[we]=e.current,e.current=n}var oe=E(null),xe=E(null),H=E(null),A=E(null);function ae(e,n){switch(ne(H,n),ne(xe,e),ne(oe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Np(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Np(n),e=Rp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(oe),ne(oe,e)}function ve(){L(oe),L(xe),L(H)}function Be(e){e.memoizedState!==null&&ne(A,e);var n=oe.current,t=Rp(n,e.type);n!==t&&(ne(xe,e),ne(oe,t))}function Ge(e){xe.current===e&&(L(oe),L(xe)),A.current===e&&(L(A),ns._currentValue=ue)}var _e,Ae;function vn(e){if(_e===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);_e=n&&n[1]||"",Ae=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+Ae}var Ce=!1;function mn(e,n){if(!e||Ce)return"";Ce=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(P){var z=P}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(P){z=P}e.call(Q.prototype)}}else{try{throw Error()}catch(P){z=P}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(P){if(P&&z&&typeof P.stack=="string")return[P.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=l.DetermineComponentFrameRoot(),m=o[0],v=o[1];if(m&&v){var w=m.split(`
`),B=v.split(`
`);for(r=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;if(l===w.length||r===B.length)for(l=w.length-1,r=B.length-1;1<=l&&0<=r&&w[l]!==B[r];)r--;for(;1<=l&&0<=r;l--,r--)if(w[l]!==B[r]){if(l!==1||r!==1)do if(l--,r--,0>r||w[l]!==B[r]){var $=`
`+w[l].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=l&&0<=r);break}}}finally{Ce=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?vn(t):""}function qn(e,n){switch(e.tag){case 26:case 27:case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return e.child!==n&&n!==null?vn("Suspense Fallback"):vn("Suspense");case 19:return vn("SuspenseList");case 0:case 15:return mn(e.type,!1);case 11:return mn(e.type.render,!1);case 1:return mn(e.type,!0);case 31:return vn("Activity");default:return""}}function Nn(e){try{var n="",t=null;do n+=qn(e,t),t=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fl=Object.prototype.hasOwnProperty,$t=s.unstable_scheduleCallback,Mt=s.unstable_cancelCallback,ur=s.unstable_shouldYield,Gl=s.unstable_requestPaint,xn=s.unstable_now,Ai=s.unstable_getCurrentPriorityLevel,Vl=s.unstable_ImmediatePriority,sa=s.unstable_UserBlockingPriority,Oi=s.unstable_NormalPriority,nt=s.unstable_LowPriority,mt=s.unstable_IdlePriority,tl=s.log,fr=s.unstable_setDisableYieldValue,Ci=null,Rn=null;function pt(e){if(typeof tl=="function"&&fr(e),Rn&&typeof Rn.setStrictMode=="function")try{Rn.setStrictMode(Ci,e)}catch{}}var zn=Math.clz32?Math.clz32:ml,Yl=Math.log,dl=Math.LN2;function ml(e){return e>>>=0,e===0?32:31-(Yl(e)/dl|0)|0}var ht=256,Xn=262144,qe=4194304;function rn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function an(e,n,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=l&134217727;return v!==0?(l=v&~o,l!==0?r=rn(l):(m&=v,m!==0?r=rn(m):t||(t=v&~e,t!==0&&(r=rn(t))))):(v=l&~o,v!==0?r=rn(v):m!==0?r=rn(m):t||(t=l&~e,t!==0&&(r=rn(t)))),r===0?0:n!==0&&n!==r&&(n&o)===0&&(o=r&-r,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:r}function Cn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fc(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(){var e=qe;return qe<<=1,(qe&62914560)===0&&(qe=4194304),e}function ll(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Li(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pl(e,n,t,l,r,o){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var v=e.entanglements,w=e.expirationTimes,B=e.hiddenUpdates;for(t=m&~t;0<t;){var $=31-zn(t),Q=1<<$;v[$]=0,w[$]=-1;var z=B[$];if(z!==null)for(B[$]=null,$=0;$<z.length;$++){var P=z[$];P!==null&&(P.lane&=-536870913)}t&=~Q}l!==0&&vs(e,l,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~n))}function vs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-zn(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function dr(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-zn(t),r=1<<l;r&n|e[l]&n&&(e[l]|=n),t&=~r}}function xs(e,n){var t=n&-n;return t=(t&42)!==0?1:$l(t),(t&(e.suspendedLanes|n))!==0?0:t}function $l(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cn(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:Wp(e.type))}function oa(e,n){var t=te.p;try{return te.p=e,n()}finally{te.p=t}}var Un=Math.random().toString(36).slice(2),gn="__reactFiber$"+Un,Bn="__reactProps$"+Un,qt="__reactContainer$"+Un,ql="__reactEvents$"+Un,Xl="__reactListeners$"+Un,mr="__reactHandles$"+Un,_t="__reactResources$"+Un,gt="__reactMarker$"+Un;function hl(e){delete e[gn],delete e[Bn],delete e[ql],delete e[Xl],delete e[mr]}function Kn(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[qt]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Bp(e);e!==null;){if(t=e[gn])return t;e=Bp(e)}return n}e=t,t=e.parentNode}return null}function bt(e){if(e=e[gn]||e[qt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Xt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function rt(e){var n=e[_t];return n||(n=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(e){e[gt]=!0}var Kt=new Set,Kl={};function tt(e,n){yt(e,n),yt(e+"Capture",n)}function yt(e,n){for(Kl[e]=n,e=0;e<n.length;e++)Kt.add(n[e])}var Ql=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ca={},Wl={};function pr(e){return fl.call(Wl,e)?!0:fl.call(ca,e)?!1:Ql.test(e)?Wl[e]=!0:(ca[e]=!0,!1)}function _l(e,n,t){if(pr(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Qt(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Qn(e,n,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+l)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dc(e,n,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,o=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(m){t=""+m,o.call(this,m)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ua(e){if(!e._valueTracker){var n=hr(e)?"checked":"value";e._valueTracker=dc(e,n,""+e[n])}}function Ss(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=hr(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zi=/[\n"\\]/g;function jn(e){return e.replace(zi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(e,n,t,l,r,o,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?Ii(e,m,he(n)):t!=null?Ii(e,m,he(t)):l!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+he(v):e.removeAttribute("name")}function vt(e,n,t,l,r,o,m,v){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){ua(e);return}t=t!=null?""+he(t):"",n=n!=null?""+he(n):t,v||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=v?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),ua(e)}function Ii(e,n,t){n==="number"&&_r(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Mn(e,n,t,l){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&l&&(e[t].defaultSelected=!0)}else{for(t=""+he(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ks(e,n,t){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+he(t):""}function ws(e,n,t,l){if(n==null){if(l!=null){if(t!=null)throw Error(a(92));if(Pe(l)){if(1<l.length)throw Error(a(93));l=l[0]}t=l}t==null&&(t=""),n=t}t=he(n),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),ua(e)}function gl(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var fa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Y(e,n,t){var l=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,t):typeof t!="number"||t===0||fa.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Es(e,n,t){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&t[r]!==l&&Y(e,r,l)}else for(var o in n)n.hasOwnProperty(o)&&Y(e,o,n[o])}function da(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pi(e){return Hi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function At(){}var Zl=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,Wt=null;function Jl(e){var n=bt(e);if(n&&(e=n.stateNode)){var t=e[Bn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ui(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+jn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var r=l[Bn]||null;if(!r)throw Error(a(90));Ui(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)l=t[n],l.form===e.form&&Ss(l)}break e;case"textarea":ks(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Mn(e,!!t.multiple,n,!1)}}}var ma=!1;function Ts(e,n,t){if(ma)return e(n,t);ma=!0;try{var l=e(n);return l}finally{if(ma=!1,(bl!==null||Wt!==null)&&(Eo(),bl&&(n=bl,e=Wt,Wt=bl=null,Jl(n),e)))for(n=0;n<e.length;n++)Jl(e[n])}}function Fi(e,n){var t=e.stateNode;if(t===null)return null;var l=t[Bn]||null;if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=!1;if(Ot)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){pa=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{pa=!1}var In=null,yl=null,gr=null;function Hn(){if(gr)return gr;var e,n=yl,t=n.length,l,r="value"in In?In.value:In.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var m=t-e;for(l=1;l<=m&&n[t-l]===r[o-l];l++);return gr=r.slice(e,1<l?1-l:void 0)}function Gi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Dn(){return!1}function Sn(e){function n(t,l,r,o,m){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(t=e[v],this[v]=t?t(o):o[v]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ni:Dn,this.isPropagationStopped=Dn,this}return k(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),n}var vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},br=Sn(vl),Zt=k({},vl,{view:0,detail:0}),pc=Sn(Zt),yr,ti,il,Vi=k({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(yr=e.screenX-il.screenX,ti=e.screenY-il.screenY):ti=yr=0,il=e),yr)},movementY:function(e){return"movementY"in e?e.movementY:ti}}),vr=Sn(Vi),hc=k({},Vi,{dataTransfer:0}),_c=Sn(hc),gc=k({},Zt,{relatedTarget:0}),at=Sn(gc),fn=k({},vl,{animationName:0,elapsedTime:0,pseudoElement:0}),ha=Sn(fn),Yi=k({},vl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ns=Sn(Yi),Rs=k({},vl,{data:0}),_a=Sn(Rs),bc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function js(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vc[e])?!!n[e]:!1}function xr(){return js}var ga=k({},Zt,{key:function(e){if(e.key){var n=bc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xr,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xc=Sn(ga),Ms=k({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ba=Sn(Ms),Ds=k({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xr}),Sc=Sn(Ds),kc=k({},vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),As=Sn(kc),ya=k({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wc=Sn(ya),Ec=k({},vl,{newState:0,oldState:0}),Tc=Sn(Ec),Nc=[9,13,27,32],va=Ot&&"CompositionEvent"in window,$i=null;Ot&&"documentMode"in document&&($i=document.documentMode);var Rc=Ot&&"TextEvent"in window&&!$i,Os=Ot&&(!va||$i&&8<$i&&11>=$i),Cs=" ",Bs=!1;function Ls(e,n){switch(e){case"keyup":return Nc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var li=!1;function zs(e,n){switch(e){case"compositionend":return xl(n);case"keypress":return n.which!==32?null:(Bs=!0,Cs);case"textInput":return e=n.data,e===Cs&&Bs?null:e;default:return null}}function Us(e,n){if(li)return e==="compositionend"||!va&&Ls(e,n)?(e=Hn(),gr=yl=In=null,li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Os&&n.locale!=="ko"?null:n.data;default:return null}}var jc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jc[e.type]:n==="textarea"}function Is(e,n,t,l){bl?Wt?Wt.push(l):Wt=[l]:bl=l,n=Ao(n,"onChange"),0<n.length&&(t=new br("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var qi=null,ii=null;function Mc(e){xp(e,0)}function Sr(e){var n=Xt(e);if(Ss(n))return e}function Hs(e,n){if(e==="change")return n}var Ps=!1;if(Ot){var Sa;if(Ot){var ka="oninput"in document;if(!ka){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),ka=typeof Fs.oninput=="function"}Sa=ka}else Sa=!1;Ps=Sa&&(!document.documentMode||9<document.documentMode)}function kr(){qi&&(qi.detachEvent("onpropertychange",xt),ii=qi=null)}function xt(e){if(e.propertyName==="value"&&Sr(ii)){var n=[];Is(n,ii,e,un(e)),Ts(Mc,n)}}function Gs(e,n,t){e==="focusin"?(kr(),qi=n,ii=t,qi.attachEvent("onpropertychange",xt)):e==="focusout"&&kr()}function Dc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sr(ii)}function Ac(e,n){if(e==="click")return Sr(n)}function wa(e,n){if(e==="input"||e==="change")return Sr(n)}function wr(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Pn=typeof Object.is=="function"?Object.is:wr;function ri(e,n){if(Pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!fl.call(n,r)||!Pn(e[r],n[r]))return!1}return!0}function Sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,n){var t=Sl(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Sl(t)}}function Ea(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ea(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_r(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=_r(e.document)}return n}function Ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Oc=Ot&&"documentMode"in document&&11>=document.documentMode,d=null,_=null,x=null,R=!1;function j(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;R||d==null||d!==_r(l)||(l=d,"selectionStart"in l&&Ta(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),x&&ri(x,l)||(x=l,l=Ao(_,"onSelect"),0<l.length&&(n=new br("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=d)))}function Z(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var se={animationend:Z("Animation","AnimationEnd"),animationiteration:Z("Animation","AnimationIteration"),animationstart:Z("Animation","AnimationStart"),transitionrun:Z("Transition","TransitionRun"),transitionstart:Z("Transition","TransitionStart"),transitioncancel:Z("Transition","TransitionCancel"),transitionend:Z("Transition","TransitionEnd")},Ve={},Ee={};Ot&&(Ee=document.createElement("div").style,"AnimationEvent"in window||(delete se.animationend.animation,delete se.animationiteration.animation,delete se.animationstart.animation),"TransitionEvent"in window||delete se.transitionend.transition);function Le(e){if(Ve[e])return Ve[e];if(!se[e])return e;var n=se[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ee)return Ve[e]=n[t];return e}var dn=Le("animationend"),Wn=Le("animationiteration"),je=Le("animationstart"),sn=Le("transitionrun"),kl=Le("transitionstart"),Jt=Le("transitioncancel"),Ct=Le("transitionend"),wl=new Map,rl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rl.push("scrollEnd");function st(e,n){wl.set(e,n),tt(n,[e])}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],Bt=0,Tr=0;function Ys(){for(var e=Bt,n=Tr=Bt=0;n<e;){var t=Zn[n];Zn[n++]=null;var l=Zn[n];Zn[n++]=null;var r=Zn[n];Zn[n++]=null;var o=Zn[n];if(Zn[n++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}o!==0&&td(t,r,o)}}function $s(e,n,t,l){Zn[Bt++]=e,Zn[Bt++]=n,Zn[Bt++]=t,Zn[Bt++]=l,Tr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cc(e,n,t,l){return $s(e,n,t,l),qs(e)}function Xi(e,n){return $s(e,null,null,n),qs(e)}function td(e,n,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var r=!1,o=e.return;o!==null;)o.childLanes|=t,l=o.alternate,l!==null&&(l.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&n!==null&&(r=31-zn(t),e=o.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=t|536870912),o):null}function qs(e){if(50<Xa)throw Xa=0,Gu=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Nr={};function B_(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,n,t,l){return new B_(e,n,t,l)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tl(e,n){var t=e.alternate;return t===null?(t=St(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function ld(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Xs(e,n,t,l,r,o){var m=0;if(l=e,typeof e=="function")Bc(e)&&(m=1);else if(typeof e=="string")m=Hg(e,t,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=St(31,t,n,r),e.elementType=pe,e.lanes=o,e;case V:return Ki(t.children,r,o,n);case G:m=8,r|=24;break;case F:return e=St(12,t,n,r|2),e.elementType=F,e.lanes=o,e;case be:return e=St(13,t,n,r),e.elementType=be,e.lanes=o,e;case me:return e=St(19,t,n,r),e.elementType=me,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:m=10;break e;case W:m=9;break e;case re:m=11;break e;case K:m=14;break e;case ee:m=16,l=null;break e}m=29,t=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=St(m,t,n,r),n.elementType=e,n.type=l,n.lanes=o,n}function Ki(e,n,t,l){return e=St(7,e,l,n),e.lanes=t,e}function Lc(e,n,t){return e=St(6,e,null,n),e.lanes=t,e}function id(e){var n=St(18,null,null,0);return n.stateNode=e,n}function zc(e,n,t){return n=St(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rd=new WeakMap;function Lt(e,n){if(typeof e=="object"&&e!==null){var t=rd.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Nn(n)},rd.set(e,n),n)}return{value:e,source:n,stack:Nn(n)}}var Rr=[],jr=0,Ks=null,Na=0,zt=[],Ut=0,ai=null,al=1,sl="";function Nl(e,n){Rr[jr++]=Na,Rr[jr++]=Ks,Ks=e,Na=n}function ad(e,n,t){zt[Ut++]=al,zt[Ut++]=sl,zt[Ut++]=ai,ai=e;var l=al;e=sl;var r=32-zn(l)-1;l&=~(1<<r),t+=1;var o=32-zn(n)+r;if(30<o){var m=r-r%5;o=(l&(1<<m)-1).toString(32),l>>=m,r-=m,al=1<<32-zn(n)+r|t<<r|l,sl=o+e}else al=1<<o|t<<r|l,sl=e}function Uc(e){e.return!==null&&(Nl(e,1),ad(e,1,0))}function Ic(e){for(;e===Ks;)Ks=Rr[--jr],Rr[jr]=null,Na=Rr[--jr],Rr[jr]=null;for(;e===ai;)ai=zt[--Ut],zt[Ut]=null,sl=zt[--Ut],zt[Ut]=null,al=zt[--Ut],zt[Ut]=null}function sd(e,n){zt[Ut++]=al,zt[Ut++]=sl,zt[Ut++]=ai,al=n.id,sl=n.overflow,ai=e}var Fn=null,tn=null,Fe=!1,si=null,It=!1,Hc=Error(a(519));function oi(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ra(Lt(n,e)),Hc}function od(e){var n=e.stateNode,t=e.type,l=e.memoizedProps;switch(n[gn]=e,n[Bn]=l,t){case"dialog":Ue("cancel",n),Ue("close",n);break;case"iframe":case"object":case"embed":Ue("load",n);break;case"video":case"audio":for(t=0;t<Qa.length;t++)Ue(Qa[t],n);break;case"source":Ue("error",n);break;case"img":case"image":case"link":Ue("error",n),Ue("load",n);break;case"details":Ue("toggle",n);break;case"input":Ue("invalid",n),vt(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ue("invalid",n);break;case"textarea":Ue("invalid",n),ws(n,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||l.suppressHydrationWarning===!0||Ep(n.textContent,t)?(l.popover!=null&&(Ue("beforetoggle",n),Ue("toggle",n)),l.onScroll!=null&&Ue("scroll",n),l.onScrollEnd!=null&&Ue("scrollend",n),l.onClick!=null&&(n.onclick=At),n=!0):n=!1,n||oi(e,!0)}function cd(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:It=!1;return;case 27:case 3:It=!0;return;default:Fn=Fn.return}}function Mr(e){if(e!==Fn)return!1;if(!Fe)return cd(e),Fe=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||rf(e.type,e.memoizedProps)),t=!t),t&&tn&&oi(e),cd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));tn=Cp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));tn=Cp(e)}else n===27?(n=tn,Si(e.type)?(e=uf,uf=null,tn=e):tn=n):tn=Fn?Pt(e.stateNode.nextSibling):null;return!0}function Qi(){tn=Fn=null,Fe=!1}function Pc(){var e=si;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),si=null),e}function Ra(e){si===null?si=[e]:si.push(e)}var Fc=E(null),Wi=null,Rl=null;function ci(e,n,t){ne(Fc,n._currentValue),n._currentValue=t}function jl(e){e._currentValue=Fc.current,L(Fc)}function Gc(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function Vc(e,n,t,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var m=r.child;o=o.firstContext;e:for(;o!==null;){var v=o;o=r;for(var w=0;w<n.length;w++)if(v.context===n[w]){o.lanes|=t,v=o.alternate,v!==null&&(v.lanes|=t),Gc(o.return,t,e),l||(m=null);break e}o=v.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(a(341));m.lanes|=t,o=m.alternate,o!==null&&(o.lanes|=t),Gc(m,t,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Dr(e,n,t,l){e=null;for(var r=n,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var v=r.type;Pn(r.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(r===A.current){if(m=r.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ns):e=[ns])}r=r.return}e!==null&&Vc(n,e,t,l),n.flags|=262144}function Qs(e){for(e=e.firstContext;e!==null;){if(!Pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zi(e){Wi=e,Rl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Gn(e){return ud(Wi,e)}function Ws(e,n){return Wi===null&&Zi(e),ud(e,n)}function ud(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Rl===null){if(e===null)throw Error(a(308));Rl=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Rl=Rl.next=n;return t}var L_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},z_=s.unstable_scheduleCallback,U_=s.unstable_NormalPriority,kn={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yc(){return{controller:new L_,data:new Map,refCount:0}}function ja(e){e.refCount--,e.refCount===0&&z_(U_,function(){e.controller.abort()})}var Ma=null,$c=0,Ar=0,Or=null;function I_(e,n){if(Ma===null){var t=Ma=[];$c=0,Ar=Ku(),Or={status:"pending",value:void 0,then:function(l){t.push(l)}}}return $c++,n.then(fd,fd),n}function fd(){if(--$c===0&&Ma!==null){Or!==null&&(Or.status="fulfilled");var e=Ma;Ma=null,Ar=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function H_(e,n){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var dd=I.S;I.S=function(e,n){Km=xn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&I_(e,n),dd!==null&&dd(e,n)};var Ji=E(null);function qc(){var e=Ji.current;return e!==null?e:nn.pooledCache}function Zs(e,n){n===null?ne(Ji,Ji.current):ne(Ji,n.pool)}function md(){var e=qc();return e===null?null:{parent:kn._currentValue,pool:e}}var Cr=Error(a(460)),Xc=Error(a(474)),Js=Error(a(542)),eo={then:function(){}};function pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(At,At),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gd(e),e;default:if(typeof n.status=="string")n.then(At,At);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gd(e),e}throw nr=n,Cr}}function er(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(nr=t,Cr):t}}var nr=null;function _d(){if(nr===null)throw Error(a(459));var e=nr;return nr=null,e}function gd(e){if(e===Cr||e===Js)throw Error(a(483))}var Br=null,Da=0;function no(e){var n=Da;return Da+=1,Br===null&&(Br=[]),hd(Br,e,n)}function Aa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function to(e,n){throw n.$$typeof===T?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bd(e){function n(M,N){if(e){var C=M.deletions;C===null?(M.deletions=[N],M.flags|=16):C.push(N)}}function t(M,N){if(!e)return null;for(;N!==null;)n(M,N),N=N.sibling;return null}function l(M){for(var N=new Map;M!==null;)M.key!==null?N.set(M.key,M):N.set(M.index,M),M=M.sibling;return N}function r(M,N){return M=Tl(M,N),M.index=0,M.sibling=null,M}function o(M,N,C){return M.index=C,e?(C=M.alternate,C!==null?(C=C.index,C<N?(M.flags|=67108866,N):C):(M.flags|=67108866,N)):(M.flags|=1048576,N)}function m(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function v(M,N,C,X){return N===null||N.tag!==6?(N=Lc(C,M.mode,X),N.return=M,N):(N=r(N,C),N.return=M,N)}function w(M,N,C,X){var Se=C.type;return Se===V?$(M,N,C.props.children,X,C.key):N!==null&&(N.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===ee&&er(Se)===N.type)?(N=r(N,C.props),Aa(N,C),N.return=M,N):(N=Xs(C.type,C.key,C.props,null,M.mode,X),Aa(N,C),N.return=M,N)}function B(M,N,C,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==C.containerInfo||N.stateNode.implementation!==C.implementation?(N=zc(C,M.mode,X),N.return=M,N):(N=r(N,C.children||[]),N.return=M,N)}function $(M,N,C,X,Se){return N===null||N.tag!==7?(N=Ki(C,M.mode,X,Se),N.return=M,N):(N=r(N,C),N.return=M,N)}function Q(M,N,C){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Lc(""+N,M.mode,C),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case D:return C=Xs(N.type,N.key,N.props,null,M.mode,C),Aa(C,N),C.return=M,C;case O:return N=zc(N,M.mode,C),N.return=M,N;case ee:return N=er(N),Q(M,N,C)}if(Pe(N)||J(N))return N=Ki(N,M.mode,C,null),N.return=M,N;if(typeof N.then=="function")return Q(M,no(N),C);if(N.$$typeof===q)return Q(M,Ws(M,N),C);to(M,N)}return null}function z(M,N,C,X){var Se=N!==null?N.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return Se!==null?null:v(M,N,""+C,X);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case D:return C.key===Se?w(M,N,C,X):null;case O:return C.key===Se?B(M,N,C,X):null;case ee:return C=er(C),z(M,N,C,X)}if(Pe(C)||J(C))return Se!==null?null:$(M,N,C,X,null);if(typeof C.then=="function")return z(M,N,no(C),X);if(C.$$typeof===q)return z(M,N,Ws(M,C),X);to(M,C)}return null}function P(M,N,C,X,Se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return M=M.get(C)||null,v(N,M,""+X,Se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return M=M.get(X.key===null?C:X.key)||null,w(N,M,X,Se);case O:return M=M.get(X.key===null?C:X.key)||null,B(N,M,X,Se);case ee:return X=er(X),P(M,N,C,X,Se)}if(Pe(X)||J(X))return M=M.get(C)||null,$(N,M,X,Se,null);if(typeof X.then=="function")return P(M,N,C,no(X),Se);if(X.$$typeof===q)return P(M,N,C,Ws(N,X),Se);to(N,X)}return null}function fe(M,N,C,X){for(var Se=null,Ye=null,ge=N,Me=N=0,He=null;ge!==null&&Me<C.length;Me++){ge.index>Me?(He=ge,ge=null):He=ge.sibling;var $e=z(M,ge,C[Me],X);if($e===null){ge===null&&(ge=He);break}e&&ge&&$e.alternate===null&&n(M,ge),N=o($e,N,Me),Ye===null?Se=$e:Ye.sibling=$e,Ye=$e,ge=He}if(Me===C.length)return t(M,ge),Fe&&Nl(M,Me),Se;if(ge===null){for(;Me<C.length;Me++)ge=Q(M,C[Me],X),ge!==null&&(N=o(ge,N,Me),Ye===null?Se=ge:Ye.sibling=ge,Ye=ge);return Fe&&Nl(M,Me),Se}for(ge=l(ge);Me<C.length;Me++)He=P(ge,M,Me,C[Me],X),He!==null&&(e&&He.alternate!==null&&ge.delete(He.key===null?Me:He.key),N=o(He,N,Me),Ye===null?Se=He:Ye.sibling=He,Ye=He);return e&&ge.forEach(function(Ni){return n(M,Ni)}),Fe&&Nl(M,Me),Se}function ke(M,N,C,X){if(C==null)throw Error(a(151));for(var Se=null,Ye=null,ge=N,Me=N=0,He=null,$e=C.next();ge!==null&&!$e.done;Me++,$e=C.next()){ge.index>Me?(He=ge,ge=null):He=ge.sibling;var Ni=z(M,ge,$e.value,X);if(Ni===null){ge===null&&(ge=He);break}e&&ge&&Ni.alternate===null&&n(M,ge),N=o(Ni,N,Me),Ye===null?Se=Ni:Ye.sibling=Ni,Ye=Ni,ge=He}if($e.done)return t(M,ge),Fe&&Nl(M,Me),Se;if(ge===null){for(;!$e.done;Me++,$e=C.next())$e=Q(M,$e.value,X),$e!==null&&(N=o($e,N,Me),Ye===null?Se=$e:Ye.sibling=$e,Ye=$e);return Fe&&Nl(M,Me),Se}for(ge=l(ge);!$e.done;Me++,$e=C.next())$e=P(ge,M,Me,$e.value,X),$e!==null&&(e&&$e.alternate!==null&&ge.delete($e.key===null?Me:$e.key),N=o($e,N,Me),Ye===null?Se=$e:Ye.sibling=$e,Ye=$e);return e&&ge.forEach(function(Wg){return n(M,Wg)}),Fe&&Nl(M,Me),Se}function en(M,N,C,X){if(typeof C=="object"&&C!==null&&C.type===V&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case D:e:{for(var Se=C.key;N!==null;){if(N.key===Se){if(Se=C.type,Se===V){if(N.tag===7){t(M,N.sibling),X=r(N,C.props.children),X.return=M,M=X;break e}}else if(N.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===ee&&er(Se)===N.type){t(M,N.sibling),X=r(N,C.props),Aa(X,C),X.return=M,M=X;break e}t(M,N);break}else n(M,N);N=N.sibling}C.type===V?(X=Ki(C.props.children,M.mode,X,C.key),X.return=M,M=X):(X=Xs(C.type,C.key,C.props,null,M.mode,X),Aa(X,C),X.return=M,M=X)}return m(M);case O:e:{for(Se=C.key;N!==null;){if(N.key===Se)if(N.tag===4&&N.stateNode.containerInfo===C.containerInfo&&N.stateNode.implementation===C.implementation){t(M,N.sibling),X=r(N,C.children||[]),X.return=M,M=X;break e}else{t(M,N);break}else n(M,N);N=N.sibling}X=zc(C,M.mode,X),X.return=M,M=X}return m(M);case ee:return C=er(C),en(M,N,C,X)}if(Pe(C))return fe(M,N,C,X);if(J(C)){if(Se=J(C),typeof Se!="function")throw Error(a(150));return C=Se.call(C),ke(M,N,C,X)}if(typeof C.then=="function")return en(M,N,no(C),X);if(C.$$typeof===q)return en(M,N,Ws(M,C),X);to(M,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,N!==null&&N.tag===6?(t(M,N.sibling),X=r(N,C),X.return=M,M=X):(t(M,N),X=Lc(C,M.mode,X),X.return=M,M=X),m(M)):t(M,N)}return function(M,N,C,X){try{Da=0;var Se=en(M,N,C,X);return Br=null,Se}catch(ge){if(ge===Cr||ge===Js)throw ge;var Ye=St(29,ge,null,M.mode);return Ye.lanes=X,Ye.return=M,Ye}finally{}}}var tr=bd(!0),yd=bd(!1),ui=!1;function Kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function di(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Xe&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=qs(e),td(e,null,t),n}return $s(e,l,n,t),qs(e)}function Oa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,dr(e,t)}}function Wc(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?r=o=m:o=o.next=m,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Zc=!1;function Ca(){if(Zc){var e=Or;if(e!==null)throw e}}function Ba(e,n,t,l){Zc=!1;var r=e.updateQueue;ui=!1;var o=r.firstBaseUpdate,m=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var w=v,B=w.next;w.next=null,m===null?o=B:m.next=B,m=w;var $=e.alternate;$!==null&&($=$.updateQueue,v=$.lastBaseUpdate,v!==m&&(v===null?$.firstBaseUpdate=B:v.next=B,$.lastBaseUpdate=w))}if(o!==null){var Q=r.baseState;m=0,$=B=w=null,v=o;do{var z=v.lane&-536870913,P=z!==v.lane;if(P?(Ie&z)===z:(l&z)===z){z!==0&&z===Ar&&(Zc=!0),$!==null&&($=$.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var fe=e,ke=v;z=n;var en=t;switch(ke.tag){case 1:if(fe=ke.payload,typeof fe=="function"){Q=fe.call(en,Q,z);break e}Q=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ke.payload,z=typeof fe=="function"?fe.call(en,Q,z):fe,z==null)break e;Q=k({},Q,z);break e;case 2:ui=!0}}z=v.callback,z!==null&&(e.flags|=64,P&&(e.flags|=8192),P=r.callbacks,P===null?r.callbacks=[z]:P.push(z))}else P={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},$===null?(B=$=P,w=Q):$=$.next=P,m|=z;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;P=v,v=P.next,P.next=null,r.lastBaseUpdate=P,r.shared.pending=null}}while(!0);$===null&&(w=Q),r.baseState=w,r.firstBaseUpdate=B,r.lastBaseUpdate=$,o===null&&(r.shared.lanes=0),gi|=m,e.lanes=m,e.memoizedState=Q}}function vd(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function xd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)vd(t[e],n)}var Lr=E(null),lo=E(0);function Sd(e,n){e=Ul,ne(lo,e),ne(Lr,n),Ul=e|n.baseLanes}function Jc(){ne(lo,Ul),ne(Lr,Lr.current)}function eu(){Ul=lo.current,L(Lr),L(lo)}var kt=E(null),Ht=null;function mi(e){var n=e.alternate;ne(bn,bn.current&1),ne(kt,e),Ht===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(Ht=e)}function nu(e){ne(bn,bn.current),ne(kt,e),Ht===null&&(Ht=e)}function kd(e){e.tag===22?(ne(bn,bn.current),ne(kt,e),Ht===null&&(Ht=e)):pi()}function pi(){ne(bn,bn.current),ne(kt,kt.current)}function wt(e){L(kt),Ht===e&&(Ht=null),L(bn)}var bn=E(0);function io(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||of(t)||cf(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ml=0,Re=null,Ze=null,wn=null,ro=!1,zr=!1,lr=!1,ao=0,La=0,Ur=null,P_=0;function hn(){throw Error(a(321))}function tu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Pn(e[t],n[t]))return!1;return!0}function lu(e,n,t,l,r,o){return Ml=o,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?am:bu,lr=!1,o=t(l,r),lr=!1,zr&&(o=Ed(n,t,l,r)),wd(e),o}function wd(e){I.H=Ia;var n=Ze!==null&&Ze.next!==null;if(Ml=0,wn=Ze=Re=null,ro=!1,La=0,Ur=null,n)throw Error(a(300));e===null||En||(e=e.dependencies,e!==null&&Qs(e)&&(En=!0))}function Ed(e,n,t,l){Re=e;var r=0;do{if(zr&&(Ur=null),La=0,zr=!1,25<=r)throw Error(a(301));if(r+=1,wn=Ze=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=sm,o=n(t,l)}while(zr);return o}function F_(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?za(n):n,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Re.flags|=1024),n}function iu(){var e=ao!==0;return ao=0,e}function ru(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function au(e){if(ro){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ro=!1}Ml=0,wn=Ze=Re=null,zr=!1,La=ao=0,Ur=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Re.memoizedState=wn=e:wn=wn.next=e,wn}function yn(){if(Ze===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=wn===null?Re.memoizedState:wn.next;if(n!==null)wn=n,Ze=e;else{if(e===null)throw Re.alternate===null?Error(a(467)):Error(a(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},wn===null?Re.memoizedState=wn=e:wn=wn.next=e}return wn}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function za(e){var n=La;return La+=1,Ur===null&&(Ur=[]),e=hd(Ur,e,n),n=Re,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?am:bu),e}function oo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return za(e);if(e.$$typeof===q)return Gn(e)}throw Error(a(438,String(e)))}function su(e){var n=null,t=Re.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=so(),Re.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),l=0;l<e;l++)t[l]=ye;return n.index++,t}function Dl(e,n){return typeof n=="function"?n(e):n}function co(e){var n=yn();return ou(n,Ze,e)}function ou(e,n,t){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=t;var r=e.baseQueue,o=l.pending;if(o!==null){if(r!==null){var m=r.next;r.next=o.next,o.next=m}n.baseQueue=r=o,l.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{n=r.next;var v=m=null,w=null,B=n,$=!1;do{var Q=B.lane&-536870913;if(Q!==B.lane?(Ie&Q)===Q:(Ml&Q)===Q){var z=B.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Q===Ar&&($=!0);else if((Ml&z)===z){B=B.next,z===Ar&&($=!0);continue}else Q={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(v=w=Q,m=o):w=w.next=Q,Re.lanes|=z,gi|=z;Q=B.action,lr&&t(o,Q),o=B.hasEagerState?B.eagerState:t(o,Q)}else z={lane:Q,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(v=w=z,m=o):w=w.next=z,Re.lanes|=Q,gi|=Q;B=B.next}while(B!==null&&B!==n);if(w===null?m=o:w.next=v,!Pn(o,e.memoizedState)&&(En=!0,$&&(t=Or,t!==null)))throw t;e.memoizedState=o,e.baseState=m,e.baseQueue=w,l.lastRenderedState=o}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cu(e){var n=yn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var l=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var m=r=r.next;do o=e(o,m.action),m=m.next;while(m!==r);Pn(o,n.memoizedState)||(En=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,l]}function Td(e,n,t){var l=Re,r=yn(),o=Fe;if(o){if(t===void 0)throw Error(a(407));t=t()}else t=n();var m=!Pn((Ze||r).memoizedState,t);if(m&&(r.memoizedState=t,En=!0),r=r.queue,du(jd.bind(null,l,r,e),[e]),r.getSnapshot!==n||m||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,Ir(9,{destroy:void 0},Rd.bind(null,l,r,t,n),null),nn===null)throw Error(a(349));o||(Ml&127)!==0||Nd(l,n,t)}return t}function Nd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Re.updateQueue,n===null?(n=so(),Re.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Rd(e,n,t,l){n.value=t,n.getSnapshot=l,Md(n)&&Dd(e)}function jd(e,n,t){return t(function(){Md(n)&&Dd(e)})}function Md(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Pn(e,t)}catch{return!0}}function Dd(e){var n=Xi(e,2);n!==null&&dt(n,e,2)}function uu(e){var n=lt();if(typeof e=="function"){var t=e;if(e=t(),lr){pt(!0);try{t()}finally{pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:e},n}function Ad(e,n,t,l){return e.baseState=t,ou(e,Ze,typeof l=="function"?l:Dl)}function G_(e,n,t,l,r){if(mo(e))throw Error(a(485));if(e=n.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};I.T!==null?t(!0):o.isTransition=!1,l(o),t=n.pending,t===null?(o.next=n.pending=o,Od(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Od(e,n){var t=n.action,l=n.payload,r=e.state;if(n.isTransition){var o=I.T,m={};I.T=m;try{var v=t(r,l),w=I.S;w!==null&&w(m,v),Cd(e,n,v)}catch(B){fu(e,n,B)}finally{o!==null&&m.types!==null&&(o.types=m.types),I.T=o}}else try{o=t(r,l),Cd(e,n,o)}catch(B){fu(e,n,B)}}function Cd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Bd(e,n,l)},function(l){return fu(e,n,l)}):Bd(e,n,t)}function Bd(e,n,t){n.status="fulfilled",n.value=t,Ld(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Od(e,t)))}function fu(e,n,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=t,Ld(n),n=n.next;while(n!==l)}e.action=null}function Ld(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zd(e,n){return n}function Ud(e,n){if(Fe){var t=nn.formState;if(t!==null){e:{var l=Re;if(Fe){if(tn){n:{for(var r=tn,o=It;r.nodeType!==8;){if(!o){r=null;break n}if(r=Pt(r.nextSibling),r===null){r=null;break n}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){tn=Pt(r.nextSibling),l=r.data==="F!";break e}}oi(l)}l=!1}l&&(n=t[0])}}return t=lt(),t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zd,lastRenderedState:n},t.queue=l,t=lm.bind(null,Re,l),l.dispatch=t,l=uu(!1),o=gu.bind(null,Re,!1,l.queue),l=lt(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,t=G_.bind(null,Re,r,o,t),r.dispatch=t,l.memoizedState=e,[n,t,!1]}function Id(e){var n=yn();return Hd(n,Ze,e)}function Hd(e,n,t){if(n=ou(e,n,zd)[0],e=co(Dl)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=za(n)}catch(m){throw m===Cr?Js:m}else l=n;n=yn();var r=n.queue,o=r.dispatch;return t!==n.memoizedState&&(Re.flags|=2048,Ir(9,{destroy:void 0},V_.bind(null,r,t),null)),[l,o,e]}function V_(e,n){e.action=n}function Pd(e){var n=yn(),t=Ze;if(t!==null)return Hd(n,t,e);yn(),n=n.memoizedState,t=yn();var l=t.queue.dispatch;return t.memoizedState=e,[n,l,!1]}function Ir(e,n,t,l){return e={tag:e,create:t,deps:l,inst:n,next:null},n=Re.updateQueue,n===null&&(n=so(),Re.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e),e}function Fd(){return yn().memoizedState}function uo(e,n,t,l){var r=lt();Re.flags|=e,r.memoizedState=Ir(1|n,{destroy:void 0},t,l===void 0?null:l)}function fo(e,n,t,l){var r=yn();l=l===void 0?null:l;var o=r.memoizedState.inst;Ze!==null&&l!==null&&tu(l,Ze.memoizedState.deps)?r.memoizedState=Ir(n,o,t,l):(Re.flags|=e,r.memoizedState=Ir(1|n,o,t,l))}function Gd(e,n){uo(8390656,8,e,n)}function du(e,n){fo(2048,8,e,n)}function Y_(e){Re.flags|=4;var n=Re.updateQueue;if(n===null)n=so(),Re.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Vd(e){var n=yn().memoizedState;return Y_({ref:n,nextImpl:e}),function(){if((Xe&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Yd(e,n){return fo(4,2,e,n)}function $d(e,n){return fo(4,4,e,n)}function qd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xd(e,n,t){t=t!=null?t.concat([e]):null,fo(4,4,qd.bind(null,n,e),t)}function mu(){}function Kd(e,n){var t=yn();n=n===void 0?null:n;var l=t.memoizedState;return n!==null&&tu(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function Qd(e,n){var t=yn();n=n===void 0?null:n;var l=t.memoizedState;if(n!==null&&tu(n,l[1]))return l[0];if(l=e(),lr){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[l,n],l}function pu(e,n,t){return t===void 0||(Ml&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Wm(),Re.lanes|=e,gi|=e,t)}function Wd(e,n,t,l){return Pn(t,n)?t:Lr.current!==null?(e=pu(e,t,l),Pn(e,n)||(En=!0),e):(Ml&42)===0||(Ml&1073741824)!==0&&(Ie&261930)===0?(En=!0,e.memoizedState=t):(e=Wm(),Re.lanes|=e,gi|=e,n)}function Zd(e,n,t,l,r){var o=te.p;te.p=o!==0&&8>o?o:8;var m=I.T,v={};I.T=v,gu(e,!1,n,t);try{var w=r(),B=I.S;if(B!==null&&B(v,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var $=H_(w,l);Ua(e,n,$,Nt(e))}else Ua(e,n,l,Nt(e))}catch(Q){Ua(e,n,{then:function(){},status:"rejected",reason:Q},Nt())}finally{te.p=o,m!==null&&v.types!==null&&(m.types=v.types),I.T=m}}function $_(){}function hu(e,n,t,l){if(e.tag!==5)throw Error(a(476));var r=Jd(e).queue;Zd(e,r,n,ue,t===null?$_:function(){return em(e),t(l)})}function Jd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:ue},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function em(e){var n=Jd(e);n.next===null&&(n=e.alternate.memoizedState),Ua(e,n.next.queue,{},Nt())}function _u(){return Gn(ns)}function nm(){return yn().memoizedState}function tm(){return yn().memoizedState}function q_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Nt();e=fi(t);var l=di(n,e,t);l!==null&&(dt(l,n,t),Oa(l,n,t)),n={cache:Yc()},e.payload=n;return}n=n.return}}function X_(e,n,t){var l=Nt();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},mo(e)?im(n,t):(t=Cc(e,n,t,l),t!==null&&(dt(t,e,l),rm(t,n,l)))}function lm(e,n,t){var l=Nt();Ua(e,n,t,l)}function Ua(e,n,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(mo(e))im(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var m=n.lastRenderedState,v=o(m,t);if(r.hasEagerState=!0,r.eagerState=v,Pn(v,m))return $s(e,n,r,0),nn===null&&Ys(),!1}catch{}finally{}if(t=Cc(e,n,r,l),t!==null)return dt(t,e,l),rm(t,n,l),!0}return!1}function gu(e,n,t,l){if(l={lane:2,revertLane:Ku(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},mo(e)){if(n)throw Error(a(479))}else n=Cc(e,t,l,2),n!==null&&dt(n,e,2)}function mo(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function im(e,n){zr=ro=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function rm(e,n,t){if((t&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,dr(e,t)}}var Ia={readContext:Gn,use:oo,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};Ia.useEffectEvent=hn;var am={readContext:Gn,use:oo,useCallback:function(e,n){return lt().memoizedState=[e,n===void 0?null:n],e},useContext:Gn,useEffect:Gd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,uo(4194308,4,qd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return uo(4194308,4,e,n)},useInsertionEffect:function(e,n){uo(4,2,e,n)},useMemo:function(e,n){var t=lt();n=n===void 0?null:n;var l=e();if(lr){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[l,n],l},useReducer:function(e,n,t){var l=lt();if(t!==void 0){var r=t(n);if(lr){pt(!0);try{t(n)}finally{pt(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=X_.bind(null,Re,e),[l.memoizedState,e]},useRef:function(e){var n=lt();return e={current:e},n.memoizedState=e},useState:function(e){e=uu(e);var n=e.queue,t=lm.bind(null,Re,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:mu,useDeferredValue:function(e,n){var t=lt();return pu(t,e,n)},useTransition:function(){var e=uu(!1);return e=Zd.bind(null,Re,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var l=Re,r=lt();if(Fe){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),nn===null)throw Error(a(349));(Ie&127)!==0||Nd(l,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,Gd(jd.bind(null,l,o,e),[e]),l.flags|=2048,Ir(9,{destroy:void 0},Rd.bind(null,l,o,t,n),null),t},useId:function(){var e=lt(),n=nn.identifierPrefix;if(Fe){var t=sl,l=al;t=(l&~(1<<32-zn(l)-1)).toString(32)+t,n="_"+n+"R_"+t,t=ao++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=P_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_u,useFormState:Ud,useActionState:Ud,useOptimistic:function(e){var n=lt();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=gu.bind(null,Re,!0,t),t.dispatch=n,[e,n]},useMemoCache:su,useCacheRefresh:function(){return lt().memoizedState=q_.bind(null,Re)},useEffectEvent:function(e){var n=lt(),t={impl:e};return n.memoizedState=t,function(){if((Xe&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}},bu={readContext:Gn,use:oo,useCallback:Kd,useContext:Gn,useEffect:du,useImperativeHandle:Xd,useInsertionEffect:Yd,useLayoutEffect:$d,useMemo:Qd,useReducer:co,useRef:Fd,useState:function(){return co(Dl)},useDebugValue:mu,useDeferredValue:function(e,n){var t=yn();return Wd(t,Ze.memoizedState,e,n)},useTransition:function(){var e=co(Dl)[0],n=yn().memoizedState;return[typeof e=="boolean"?e:za(e),n]},useSyncExternalStore:Td,useId:nm,useHostTransitionStatus:_u,useFormState:Id,useActionState:Id,useOptimistic:function(e,n){var t=yn();return Ad(t,Ze,e,n)},useMemoCache:su,useCacheRefresh:tm};bu.useEffectEvent=Vd;var sm={readContext:Gn,use:oo,useCallback:Kd,useContext:Gn,useEffect:du,useImperativeHandle:Xd,useInsertionEffect:Yd,useLayoutEffect:$d,useMemo:Qd,useReducer:cu,useRef:Fd,useState:function(){return cu(Dl)},useDebugValue:mu,useDeferredValue:function(e,n){var t=yn();return Ze===null?pu(t,e,n):Wd(t,Ze.memoizedState,e,n)},useTransition:function(){var e=cu(Dl)[0],n=yn().memoizedState;return[typeof e=="boolean"?e:za(e),n]},useSyncExternalStore:Td,useId:nm,useHostTransitionStatus:_u,useFormState:Pd,useActionState:Pd,useOptimistic:function(e,n){var t=yn();return Ze!==null?Ad(t,Ze,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:su,useCacheRefresh:tm};sm.useEffectEvent=Vd;function yu(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:k({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var vu={enqueueSetState:function(e,n,t){e=e._reactInternals;var l=Nt(),r=fi(l);r.payload=n,t!=null&&(r.callback=t),n=di(e,r,l),n!==null&&(dt(n,e,l),Oa(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=Nt(),r=fi(l);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=di(e,r,l),n!==null&&(dt(n,e,l),Oa(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Nt(),l=fi(t);l.tag=2,n!=null&&(l.callback=n),n=di(e,l,t),n!==null&&(dt(n,e,t),Oa(n,e,t))}};function om(e,n,t,l,r,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,m):n.prototype&&n.prototype.isPureReactComponent?!ri(t,l)||!ri(r,o):!0}function cm(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&vu.enqueueReplaceState(n,n.state,null)}function ir(e,n){var t=n;if("ref"in n){t={};for(var l in n)l!=="ref"&&(t[l]=n[l])}if(e=e.defaultProps){t===n&&(t=k({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function um(e){El(e)}function fm(e){console.error(e)}function dm(e){El(e)}function po(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function mm(e,n,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function xu(e,n,t){return t=fi(t),t.tag=3,t.payload={element:null},t.callback=function(){po(e,n)},t}function pm(e){return e=fi(e),e.tag=3,e}function hm(e,n,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=l.value;e.payload=function(){return r(o)},e.callback=function(){mm(n,t,l)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){mm(n,t,l),typeof r!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function K_(e,n,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=t.alternate,n!==null&&Dr(n,t,r,!0),t=kt.current,t!==null){switch(t.tag){case 31:case 13:return Ht===null?To():t.alternate===null&&_n===0&&(_n=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===eo?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([l]):n.add(l),$u(e,l,r)),!1;case 22:return t.flags|=65536,l===eo?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([l]):t.add(l)),$u(e,l,r)),!1}throw Error(a(435,t.tag))}return $u(e,l,r),To(),!1}if(Fe)return n=kt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==Hc&&(e=Error(a(422),{cause:l}),Ra(Lt(e,t)))):(l!==Hc&&(n=Error(a(423),{cause:l}),Ra(Lt(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Lt(l,t),r=xu(e.stateNode,l,r),Wc(e,r),_n!==4&&(_n=2)),!1;var o=Error(a(520),{cause:l});if(o=Lt(o,t),qa===null?qa=[o]:qa.push(o),_n!==4&&(_n=2),n===null)return!0;l=Lt(l,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=xu(t.stateNode,l,e),Wc(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(bi===null||!bi.has(o))))return t.flags|=65536,r&=-r,t.lanes|=r,r=pm(r),hm(r,e,t,l),Wc(t,r),!1}t=t.return}while(t!==null);return!1}var Su=Error(a(461)),En=!1;function Vn(e,n,t,l){n.child=e===null?yd(n,null,t,l):tr(n,e.child,t,l)}function _m(e,n,t,l,r){t=t.render;var o=n.ref;if("ref"in l){var m={};for(var v in l)v!=="ref"&&(m[v]=l[v])}else m=l;return Zi(n),l=lu(e,n,t,m,o,r),v=iu(),e!==null&&!En?(ru(e,n,r),Al(e,n,r)):(Fe&&v&&Uc(n),n.flags|=1,Vn(e,n,l,r),n.child)}function gm(e,n,t,l,r){if(e===null){var o=t.type;return typeof o=="function"&&!Bc(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,bm(e,n,o,l,r)):(e=Xs(t.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Mu(e,r)){var m=o.memoizedProps;if(t=t.compare,t=t!==null?t:ri,t(m,l)&&e.ref===n.ref)return Al(e,n,r)}return n.flags|=1,e=Tl(o,l),e.ref=n.ref,e.return=n,n.child=e}function bm(e,n,t,l,r){if(e!==null){var o=e.memoizedProps;if(ri(o,l)&&e.ref===n.ref)if(En=!1,n.pendingProps=l=o,Mu(e,r))(e.flags&131072)!==0&&(En=!0);else return n.lanes=e.lanes,Al(e,n,r)}return ku(e,n,t,l,r)}function ym(e,n,t,l){var r=l.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~o}else l=0,n.child=null;return vm(e,n,o,t,l)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zs(n,o!==null?o.cachePool:null),o!==null?Sd(n,o):Jc(),kd(n);else return l=n.lanes=536870912,vm(e,n,o!==null?o.baseLanes|t:t,t,l)}else o!==null?(Zs(n,o.cachePool),Sd(n,o),pi(),n.memoizedState=null):(e!==null&&Zs(n,null),Jc(),pi());return Vn(e,n,r,t),n.child}function Ha(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vm(e,n,t,l,r){var o=qc();return o=o===null?null:{parent:kn._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&Zs(n,null),Jc(),kd(n),e!==null&&Dr(e,n,l,!0),n.childLanes=r,null}function ho(e,n){return n=go({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function xm(e,n,t){return tr(n,e.child,null,t),e=ho(n,n.pendingProps),e.flags|=2,wt(n),n.memoizedState=null,e}function Q_(e,n,t){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Fe){if(l.mode==="hidden")return e=ho(n,l),n.lanes=536870912,Ha(null,e);if(nu(n),(e=tn)?(e=Op(e,It),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ai!==null?{id:al,overflow:sl}:null,retryLane:536870912,hydrationErrors:null},t=id(e),t.return=n,n.child=t,Fn=n,tn=null)):e=null,e===null)throw oi(n);return n.lanes=536870912,null}return ho(n,l)}var o=e.memoizedState;if(o!==null){var m=o.dehydrated;if(nu(n),r)if(n.flags&256)n.flags&=-257,n=xm(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(En||Dr(e,n,t,!1),r=(t&e.childLanes)!==0,En||r){if(l=nn,l!==null&&(m=xs(l,t),m!==0&&m!==o.retryLane))throw o.retryLane=m,Xi(e,m),dt(l,e,m),Su;To(),n=xm(e,n,t)}else e=o.treeContext,tn=Pt(m.nextSibling),Fn=n,Fe=!0,si=null,It=!1,e!==null&&sd(n,e),n=ho(n,l),n.flags|=4096;return n}return e=Tl(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function _o(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(a(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function ku(e,n,t,l,r){return Zi(n),t=lu(e,n,t,l,void 0,r),l=iu(),e!==null&&!En?(ru(e,n,r),Al(e,n,r)):(Fe&&l&&Uc(n),n.flags|=1,Vn(e,n,t,r),n.child)}function Sm(e,n,t,l,r,o){return Zi(n),n.updateQueue=null,t=Ed(n,l,t,r),wd(e),l=iu(),e!==null&&!En?(ru(e,n,o),Al(e,n,o)):(Fe&&l&&Uc(n),n.flags|=1,Vn(e,n,t,o),n.child)}function km(e,n,t,l,r){if(Zi(n),n.stateNode===null){var o=Nr,m=t.contextType;typeof m=="object"&&m!==null&&(o=Gn(m)),o=new t(l,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=vu,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=l,o.state=n.memoizedState,o.refs={},Kc(n),m=t.contextType,o.context=typeof m=="object"&&m!==null?Gn(m):Nr,o.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(yu(n,t,m,l),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&vu.enqueueReplaceState(o,o.state,null),Ba(n,l,o,r),Ca(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){o=n.stateNode;var v=n.memoizedProps,w=ir(t,v);o.props=w;var B=o.context,$=t.contextType;m=Nr,typeof $=="object"&&$!==null&&(m=Gn($));var Q=t.getDerivedStateFromProps;$=typeof Q=="function"||typeof o.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,$||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(v||B!==m)&&cm(n,o,l,m),ui=!1;var z=n.memoizedState;o.state=z,Ba(n,l,o,r),Ca(),B=n.memoizedState,v||z!==B||ui?(typeof Q=="function"&&(yu(n,t,Q,l),B=n.memoizedState),(w=ui||om(n,t,w,l,z,B,m))?($||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=B),o.props=l,o.state=B,o.context=m,l=w):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{o=n.stateNode,Qc(e,n),m=n.memoizedProps,$=ir(t,m),o.props=$,Q=n.pendingProps,z=o.context,B=t.contextType,w=Nr,typeof B=="object"&&B!==null&&(w=Gn(B)),v=t.getDerivedStateFromProps,(B=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==Q||z!==w)&&cm(n,o,l,w),ui=!1,z=n.memoizedState,o.state=z,Ba(n,l,o,r),Ca();var P=n.memoizedState;m!==Q||z!==P||ui||e!==null&&e.dependencies!==null&&Qs(e.dependencies)?(typeof v=="function"&&(yu(n,t,v,l),P=n.memoizedState),($=ui||om(n,t,$,l,z,P,w)||e!==null&&e.dependencies!==null&&Qs(e.dependencies))?(B||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,P,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,P,w)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=P),o.props=l,o.state=P,o.context=w,l=$):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),l=!1)}return o=l,_o(e,n),l=(n.flags&128)!==0,o||l?(o=n.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&l?(n.child=tr(n,e.child,null,r),n.child=tr(n,null,t,r)):Vn(e,n,t,r),n.memoizedState=o.state,e=n.child):e=Al(e,n,r),e}function wm(e,n,t,l){return Qi(),n.flags|=256,Vn(e,n,t,l),n.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eu(e){return{baseLanes:e,cachePool:md()}}function Tu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Tt),e}function Em(e,n,t){var l=n.pendingProps,r=!1,o=(n.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(bn.current&2)!==0),m&&(r=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Fe){if(r?mi(n):pi(),(e=tn)?(e=Op(e,It),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ai!==null?{id:al,overflow:sl}:null,retryLane:536870912,hydrationErrors:null},t=id(e),t.return=n,n.child=t,Fn=n,tn=null)):e=null,e===null)throw oi(n);return cf(e)?n.lanes=32:n.lanes=536870912,null}var v=l.children;return l=l.fallback,r?(pi(),r=n.mode,v=go({mode:"hidden",children:v},r),l=Ki(l,r,t,null),v.return=n,l.return=n,v.sibling=l,n.child=v,l=n.child,l.memoizedState=Eu(t),l.childLanes=Tu(e,m,t),n.memoizedState=wu,Ha(null,l)):(mi(n),Nu(n,v))}var w=e.memoizedState;if(w!==null&&(v=w.dehydrated,v!==null)){if(o)n.flags&256?(mi(n),n.flags&=-257,n=Ru(e,n,t)):n.memoizedState!==null?(pi(),n.child=e.child,n.flags|=128,n=null):(pi(),v=l.fallback,r=n.mode,l=go({mode:"visible",children:l.children},r),v=Ki(v,r,t,null),v.flags|=2,l.return=n,v.return=n,l.sibling=v,n.child=l,tr(n,e.child,null,t),l=n.child,l.memoizedState=Eu(t),l.childLanes=Tu(e,m,t),n.memoizedState=wu,n=Ha(null,l));else if(mi(n),cf(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var B=m.dgst;m=B,l=Error(a(419)),l.stack="",l.digest=m,Ra({value:l,source:null,stack:null}),n=Ru(e,n,t)}else if(En||Dr(e,n,t,!1),m=(t&e.childLanes)!==0,En||m){if(m=nn,m!==null&&(l=xs(m,t),l!==0&&l!==w.retryLane))throw w.retryLane=l,Xi(e,l),dt(m,e,l),Su;of(v)||To(),n=Ru(e,n,t)}else of(v)?(n.flags|=192,n.child=e.child,n=null):(e=w.treeContext,tn=Pt(v.nextSibling),Fn=n,Fe=!0,si=null,It=!1,e!==null&&sd(n,e),n=Nu(n,l.children),n.flags|=4096);return n}return r?(pi(),v=l.fallback,r=n.mode,w=e.child,B=w.sibling,l=Tl(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,B!==null?v=Tl(B,v):(v=Ki(v,r,t,null),v.flags|=2),v.return=n,l.return=n,l.sibling=v,n.child=l,Ha(null,l),l=n.child,v=e.child.memoizedState,v===null?v=Eu(t):(r=v.cachePool,r!==null?(w=kn._currentValue,r=r.parent!==w?{parent:w,pool:w}:r):r=md(),v={baseLanes:v.baseLanes|t,cachePool:r}),l.memoizedState=v,l.childLanes=Tu(e,m,t),n.memoizedState=wu,Ha(e.child,l)):(mi(n),t=e.child,e=t.sibling,t=Tl(t,{mode:"visible",children:l.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function Nu(e,n){return n=go({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function go(e,n){return e=St(22,e,null,n),e.lanes=0,e}function Ru(e,n,t){return tr(n,e.child,null,t),e=Nu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tm(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Gc(e.return,n,t)}function ju(e,n,t,l,r,o){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:o}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=t,m.tailMode=r,m.treeForkCount=o)}function Nm(e,n,t){var l=n.pendingProps,r=l.revealOrder,o=l.tail;l=l.children;var m=bn.current,v=(m&2)!==0;if(v?(m=m&1|2,n.flags|=128):m&=1,ne(bn,m),Vn(e,n,l,t),l=Fe?Na:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tm(e,t,n);else if(e.tag===19)Tm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&io(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ju(n,!1,r,t,o,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&io(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ju(n,!0,t,null,o,l);break;case"together":ju(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Al(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),gi|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Dr(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=Tl(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tl(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Mu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Qs(e)))}function W_(e,n,t){switch(n.tag){case 3:ae(n,n.stateNode.containerInfo),ci(n,kn,e.memoizedState.cache),Qi();break;case 27:case 5:Be(n);break;case 4:ae(n,n.stateNode.containerInfo);break;case 10:ci(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(mi(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Em(e,n,t):(mi(n),e=Al(e,n,t),e!==null?e.sibling:null);mi(n);break;case 19:var r=(e.flags&128)!==0;if(l=(t&n.childLanes)!==0,l||(Dr(e,n,t,!1),l=(t&n.childLanes)!==0),r){if(l)return Nm(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ne(bn,bn.current),l)break;return null;case 22:return n.lanes=0,ym(e,n,t,n.pendingProps);case 24:ci(n,kn,e.memoizedState.cache)}return Al(e,n,t)}function Rm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)En=!0;else{if(!Mu(e,t)&&(n.flags&128)===0)return En=!1,W_(e,n,t);En=(e.flags&131072)!==0}else En=!1,Fe&&(n.flags&1048576)!==0&&ad(n,Na,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=er(n.elementType),n.type=e,typeof e=="function")Bc(e)?(l=ir(e,l),n.tag=1,n=km(null,n,e,l,t)):(n.tag=0,n=ku(null,n,e,l,t));else{if(e!=null){var r=e.$$typeof;if(r===re){n.tag=11,n=_m(null,n,e,l,t);break e}else if(r===K){n.tag=14,n=gm(null,n,e,l,t);break e}}throw n=Oe(e)||e,Error(a(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,t);case 1:return l=n.type,r=ir(l,n.pendingProps),km(e,n,l,r,t);case 3:e:{if(ae(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var o=n.memoizedState;r=o.element,Qc(e,n),Ba(n,l,null,t);var m=n.memoizedState;if(l=m.cache,ci(n,kn,l),l!==o.cache&&Vc(n,[kn],t,!0),Ca(),l=m.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=wm(e,n,l,t);break e}else if(l!==r){r=Lt(Error(a(424)),n),Ra(r),n=wm(e,n,l,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Pt(e.firstChild),Fn=n,Fe=!0,si=null,It=!0,t=yd(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Qi(),l===r){n=Al(e,n,t);break e}Vn(e,n,l,t)}n=n.child}return n;case 26:return _o(e,n),e===null?(t=Ip(n.type,null,n.pendingProps,null))?n.memoizedState=t:Fe||(t=n.type,e=n.pendingProps,l=Oo(H.current).createElement(t),l[gn]=n,l[Bn]=e,Yn(l,t,e),pn(l),n.stateNode=l):n.memoizedState=Ip(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Be(n),e===null&&Fe&&(l=n.stateNode=Lp(n.type,n.pendingProps,H.current),Fn=n,It=!0,r=tn,Si(n.type)?(uf=r,tn=Pt(l.firstChild)):tn=r),Vn(e,n,n.pendingProps.children,t),_o(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Fe&&((r=l=tn)&&(l=Ng(l,n.type,n.pendingProps,It),l!==null?(n.stateNode=l,Fn=n,tn=Pt(l.firstChild),It=!1,r=!0):r=!1),r||oi(n)),Be(n),r=n.type,o=n.pendingProps,m=e!==null?e.memoizedProps:null,l=o.children,rf(r,o)?l=null:m!==null&&rf(r,m)&&(n.flags|=32),n.memoizedState!==null&&(r=lu(e,n,F_,null,null,t),ns._currentValue=r),_o(e,n),Vn(e,n,l,t),n.child;case 6:return e===null&&Fe&&((e=t=tn)&&(t=Rg(t,n.pendingProps,It),t!==null?(n.stateNode=t,Fn=n,tn=null,e=!0):e=!1),e||oi(n)),null;case 13:return Em(e,n,t);case 4:return ae(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=tr(n,null,l,t):Vn(e,n,l,t),n.child;case 11:return _m(e,n,n.type,n.pendingProps,t);case 7:return Vn(e,n,n.pendingProps,t),n.child;case 8:return Vn(e,n,n.pendingProps.children,t),n.child;case 12:return Vn(e,n,n.pendingProps.children,t),n.child;case 10:return l=n.pendingProps,ci(n,n.type,l.value),Vn(e,n,l.children,t),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Zi(n),r=Gn(r),l=l(r),n.flags|=1,Vn(e,n,l,t),n.child;case 14:return gm(e,n,n.type,n.pendingProps,t);case 15:return bm(e,n,n.type,n.pendingProps,t);case 19:return Nm(e,n,t);case 31:return Q_(e,n,t);case 22:return ym(e,n,t,n.pendingProps);case 24:return Zi(n),l=Gn(kn),e===null?(r=qc(),r===null&&(r=nn,o=Yc(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=t),r=o),n.memoizedState={parent:l,cache:r},Kc(n),ci(n,kn,r)):((e.lanes&t)!==0&&(Qc(e,n),Ba(n,null,null,t),Ca()),r=e.memoizedState,o=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),ci(n,kn,l)):(l=o.cache,ci(n,kn,l),l!==r.cache&&Vc(n,[kn],t,!0))),Vn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Ol(e){e.flags|=4}function Du(e,n,t,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(np())e.flags|=8192;else throw nr=eo,Xc}else e.flags&=-16777217}function jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vp(n))if(np())e.flags|=8192;else throw nr=eo,Xc}function bo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bi():536870912,e.lanes|=n,Gr|=n)}function Pa(e,n){if(!Fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ln(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function Z_(e,n,t){var l=n.pendingProps;switch(Ic(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return t=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),jl(kn),ve(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Mr(n)?Ol(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pc())),ln(n),null;case 26:var r=n.type,o=n.memoizedState;return e===null?(Ol(n),o!==null?(ln(n),jm(n,o)):(ln(n),Du(n,r,null,l,t))):o?o!==e.memoizedState?(Ol(n),ln(n),jm(n,o)):(ln(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ol(n),ln(n),Du(n,r,e,l,t)),null;case 27:if(Ge(n),t=H.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Ol(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return ln(n),null}e=oe.current,Mr(n)?od(n):(e=Lp(r,l,t),n.stateNode=e,Ol(n))}return ln(n),null;case 5:if(Ge(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Ol(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return ln(n),null}if(o=oe.current,Mr(n))od(n);else{var m=Oo(H.current);switch(o){case 1:o=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=m.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?o.multiple=!0:l.size&&(o.size=l.size);break;default:o=typeof l.is=="string"?m.createElement(r,{is:l.is}):m.createElement(r)}}o[gn]=n,o[Bn]=l;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)o.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=o;e:switch(Yn(o,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ol(n)}}return ln(n),Du(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Ol(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=H.current,Mr(n)){if(e=n.stateNode,t=n.memoizedProps,l=null,r=Fn,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[gn]=n,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Ep(e.nodeValue,t)),e||oi(n,!0)}else e=Oo(e).createTextNode(l),e[gn]=n,n.stateNode=e}return ln(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(l=Mr(n),t!==null){if(e===null){if(!l)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[gn]=n}else Qi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),e=!1}else t=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(wt(n),n):(wt(n),null);if((n.flags&128)!==0)throw Error(a(558))}return ln(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Mr(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(a(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(a(317));r[gn]=n}else Qi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),r=!1}else r=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(wt(n),n):(wt(n),null)}return wt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),o=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==r&&(l.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),bo(n,n.updateQueue),ln(n),null);case 4:return ve(),e===null&&Ju(n.stateNode.containerInfo),ln(n),null;case 10:return jl(n.type),ln(n),null;case 19:if(L(bn),l=n.memoizedState,l===null)return ln(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Pa(l,!1);else{if(_n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=io(e),o!==null){for(n.flags|=128,Pa(l,!1),e=o.updateQueue,n.updateQueue=e,bo(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)ld(t,e),t=t.sibling;return ne(bn,bn.current&1|2),Fe&&Nl(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&xn()>ko&&(n.flags|=128,r=!0,Pa(l,!1),n.lanes=4194304)}else{if(!r)if(e=io(o),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,bo(n,e),Pa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Fe)return ln(n),null}else 2*xn()-l.renderingStartTime>ko&&t!==536870912&&(n.flags|=128,r=!0,Pa(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(e=l.last,e!==null?e.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=xn(),e.sibling=null,t=bn.current,ne(bn,r?t&1|2:t&1),Fe&&Nl(n,l.treeForkCount),e):(ln(n),null);case 22:case 23:return wt(n),eu(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(t&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),t=n.updateQueue,t!==null&&bo(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==t&&(n.flags|=2048),e!==null&&L(Ji),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),jl(kn),ln(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function J_(e,n){switch(Ic(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return jl(kn),ve(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 31:if(n.memoizedState!==null){if(wt(n),n.alternate===null)throw Error(a(340));Qi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(wt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Qi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(bn),null;case 4:return ve(),null;case 10:return jl(n.type),null;case 22:case 23:return wt(n),eu(),e!==null&&L(Ji),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return jl(kn),null;case 25:return null;default:return null}}function Mm(e,n){switch(Ic(n),n.tag){case 3:jl(kn),ve();break;case 26:case 27:case 5:Ge(n);break;case 4:ve();break;case 31:n.memoizedState!==null&&wt(n);break;case 13:wt(n);break;case 19:L(bn);break;case 10:jl(n.type);break;case 22:case 23:wt(n),eu(),e!==null&&L(Ji);break;case 24:jl(kn)}}function Fa(e,n){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&e)===e){l=void 0;var o=t.create,m=t.inst;l=o(),m.destroy=l}t=t.next}while(t!==r)}}catch(v){Qe(n,n.return,v)}}function hi(e,n,t){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var o=r.next;l=o;do{if((l.tag&e)===e){var m=l.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,r=n;var w=t,B=v;try{B()}catch($){Qe(r,w,$)}}}l=l.next}while(l!==o)}}catch($){Qe(n,n.return,$)}}function Dm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{xd(n,t)}catch(l){Qe(e,e.return,l)}}}function Am(e,n,t){t.props=ir(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){Qe(e,n,l)}}function Ga(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){Qe(e,n,r)}}function ol(e,n){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){Qe(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){Qe(e,n,r)}else t.current=null}function Om(e){var n=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){Qe(e,e.return,r)}}function Au(e,n,t){try{var l=e.stateNode;xg(l,e.type,t,n),l[Bn]=n}catch(r){Qe(e,e.return,r)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Si(e.type)||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Si(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=At));else if(l!==4&&(l===27&&Si(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Cu(e,n,t),e=e.sibling;e!==null;)Cu(e,n,t),e=e.sibling}function yo(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(l===27&&Si(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(yo(e,n,t),e=e.sibling;e!==null;)yo(e,n,t),e=e.sibling}function Bm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Yn(n,l,t),n[gn]=e,n[Bn]=t}catch(o){Qe(e,e.return,o)}}var Cl=!1,Tn=!1,Bu=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function eg(e,n){if(e=e.containerInfo,tf=Ho,e=Vs(e),Ta(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var r=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var m=0,v=-1,w=-1,B=0,$=0,Q=e,z=null;n:for(;;){for(var P;Q!==t||r!==0&&Q.nodeType!==3||(v=m+r),Q!==o||l!==0&&Q.nodeType!==3||(w=m+l),Q.nodeType===3&&(m+=Q.nodeValue.length),(P=Q.firstChild)!==null;)z=Q,Q=P;for(;;){if(Q===e)break n;if(z===t&&++B===r&&(v=m),z===o&&++$===l&&(w=m),(P=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=P}t=v===-1||w===-1?null:{start:v,end:w}}else t=null}t=t||{start:0,end:0}}else t=null;for(lf={focusedElem:e,selectionRange:t},Ho=!1,Ln=n;Ln!==null;)if(n=Ln,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ln=e;else for(;Ln!==null;){switch(n=Ln,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,r=o.memoizedProps,o=o.memoizedState,l=t.stateNode;try{var fe=ir(t.type,r);e=l.getSnapshotBeforeUpdate(fe,o),l.__reactInternalSnapshotBeforeUpdate=e}catch(ke){Qe(t,t.return,ke)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)sf(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Ln=e;break}Ln=n.return}}function zm(e,n,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ll(e,t),l&4&&Fa(5,t);break;case 1:if(Ll(e,t),l&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){Qe(t,t.return,m)}else{var r=ir(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Qe(t,t.return,m)}}l&64&&Dm(t),l&512&&Ga(t,t.return);break;case 3:if(Ll(e,t),l&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{xd(e,n)}catch(m){Qe(t,t.return,m)}}break;case 27:n===null&&l&4&&Bm(t);case 26:case 5:Ll(e,t),n===null&&l&4&&Om(t),l&512&&Ga(t,t.return);break;case 12:Ll(e,t);break;case 31:Ll(e,t),l&4&&Hm(e,t);break;case 13:Ll(e,t),l&4&&Pm(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=cg.bind(null,t),jg(e,t))));break;case 22:if(l=t.memoizedState!==null||Cl,!l){n=n!==null&&n.memoizedState!==null||Tn,r=Cl;var o=Tn;Cl=l,(Tn=n)&&!o?zl(e,t,(t.subtreeFlags&8772)!==0):Ll(e,t),Cl=r,Tn=o}break;case 30:break;default:Ll(e,t)}}function Um(e){var n=e.alternate;n!==null&&(e.alternate=null,Um(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&hl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,ot=!1;function Bl(e,n,t){for(t=t.child;t!==null;)Im(e,n,t),t=t.sibling}function Im(e,n,t){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Ci,t)}catch{}switch(t.tag){case 26:Tn||ol(t,n),Bl(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Tn||ol(t,n);var l=on,r=ot;Si(t.type)&&(on=t.stateNode,ot=!1),Bl(e,n,t),Za(t.stateNode),on=l,ot=r;break;case 5:Tn||ol(t,n);case 6:if(l=on,r=ot,on=null,Bl(e,n,t),on=l,ot=r,on!==null)if(ot)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(t.stateNode)}catch(o){Qe(t,n,o)}else try{on.removeChild(t.stateNode)}catch(o){Qe(t,n,o)}break;case 18:on!==null&&(ot?(e=on,Dp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Wr(e)):Dp(on,t.stateNode));break;case 4:l=on,r=ot,on=t.stateNode.containerInfo,ot=!0,Bl(e,n,t),on=l,ot=r;break;case 0:case 11:case 14:case 15:hi(2,t,n),Tn||hi(4,t,n),Bl(e,n,t);break;case 1:Tn||(ol(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Am(t,n,l)),Bl(e,n,t);break;case 21:Bl(e,n,t);break;case 22:Tn=(l=Tn)||t.memoizedState!==null,Bl(e,n,t),Tn=l;break;default:Bl(e,n,t)}}function Hm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wr(e)}catch(t){Qe(n,n.return,t)}}}function Pm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wr(e)}catch(t){Qe(n,n.return,t)}}function ng(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lm),n;default:throw Error(a(435,e.tag))}}function vo(e,n){var t=ng(e);n.forEach(function(l){if(!t.has(l)){t.add(l);var r=ug.bind(null,e,l);l.then(r,r)}})}function ct(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l],o=e,m=n,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(Si(v.type)){on=v.stateNode,ot=!1;break e}break;case 5:on=v.stateNode,ot=!1;break e;case 3:case 4:on=v.stateNode.containerInfo,ot=!0;break e}v=v.return}if(on===null)throw Error(a(160));Im(o,m,r),on=null,ot=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fm(n,e),n=n.sibling}var el=null;function Fm(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(n,e),ut(e),l&4&&(hi(3,e,e.return),Fa(3,e),hi(5,e,e.return));break;case 1:ct(n,e),ut(e),l&512&&(Tn||t===null||ol(t,t.return)),l&64&&Cl&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var r=el;if(ct(n,e),ut(e),l&512&&(Tn||t===null||ol(t,t.return)),l&4){var o=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,r=r.ownerDocument||r;n:switch(l){case"title":o=r.getElementsByTagName("title")[0],(!o||o[gt]||o[gn]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(l),r.head.insertBefore(o,r.querySelector("head > title"))),Yn(o,l,t),o[gn]=e,pn(o),l=o;break e;case"link":var m=Fp("link","href",r).get(l+(t.href||""));if(m){for(var v=0;v<m.length;v++)if(o=m[v],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(v,1);break n}}o=r.createElement(l),Yn(o,l,t),r.head.appendChild(o);break;case"meta":if(m=Fp("meta","content",r).get(l+(t.content||""))){for(v=0;v<m.length;v++)if(o=m[v],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(v,1);break n}}o=r.createElement(l),Yn(o,l,t),r.head.appendChild(o);break;default:throw Error(a(468,l))}o[gn]=e,pn(o),l=o}e.stateNode=l}else Gp(r,e.type,e.stateNode);else e.stateNode=Pp(r,l,e.memoizedProps);else o!==l?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,l===null?Gp(r,e.type,e.stateNode):Pp(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Au(e,e.memoizedProps,t.memoizedProps)}break;case 27:ct(n,e),ut(e),l&512&&(Tn||t===null||ol(t,t.return)),t!==null&&l&4&&Au(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ct(n,e),ut(e),l&512&&(Tn||t===null||ol(t,t.return)),e.flags&32){r=e.stateNode;try{gl(r,"")}catch(fe){Qe(e,e.return,fe)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Au(e,r,t!==null?t.memoizedProps:r)),l&1024&&(Bu=!0);break;case 6:if(ct(n,e),ut(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(fe){Qe(e,e.return,fe)}}break;case 3:if(Lo=null,r=el,el=Co(n.containerInfo),ct(n,e),el=r,ut(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Wr(n.containerInfo)}catch(fe){Qe(e,e.return,fe)}Bu&&(Bu=!1,Gm(e));break;case 4:l=el,el=Co(e.stateNode.containerInfo),ct(n,e),ut(e),el=l;break;case 12:ct(n,e),ut(e);break;case 31:ct(n,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 13:ct(n,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(So=xn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 22:r=e.memoizedState!==null;var w=t!==null&&t.memoizedState!==null,B=Cl,$=Tn;if(Cl=B||r,Tn=$||w,ct(n,e),Tn=$,Cl=B,ut(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(t===null||w||Cl||Tn||rr(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){w=t=n;try{if(o=w.stateNode,r)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=w.stateNode;var Q=w.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(fe){Qe(w,w.return,fe)}}}else if(n.tag===6){if(t===null){w=n;try{w.stateNode.nodeValue=r?"":w.memoizedProps}catch(fe){Qe(w,w.return,fe)}}}else if(n.tag===18){if(t===null){w=n;try{var P=w.stateNode;r?Ap(P,!0):Ap(w.stateNode,!1)}catch(fe){Qe(w,w.return,fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,vo(e,t))));break;case 19:ct(n,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 30:break;case 21:break;default:ct(n,e),ut(e)}}function ut(e){var n=e.flags;if(n&2){try{for(var t,l=e.return;l!==null;){if(Cm(l)){t=l;break}l=l.return}if(t==null)throw Error(a(160));switch(t.tag){case 27:var r=t.stateNode,o=Ou(e);yo(e,o,r);break;case 5:var m=t.stateNode;t.flags&32&&(gl(m,""),t.flags&=-33);var v=Ou(e);yo(e,v,m);break;case 3:case 4:var w=t.stateNode.containerInfo,B=Ou(e);Cu(e,B,w);break;default:throw Error(a(161))}}catch($){Qe(e,e.return,$)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ll(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zm(e,n.alternate,n),n=n.sibling}function rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:hi(4,n,n.return),rr(n);break;case 1:ol(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Am(n,n.return,t),rr(n);break;case 27:Za(n.stateNode);case 26:case 5:ol(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}e=e.sibling}}function zl(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,o=n,m=o.flags;switch(o.tag){case 0:case 11:case 15:zl(r,o,t),Fa(4,o);break;case 1:if(zl(r,o,t),l=o,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(B){Qe(l,l.return,B)}if(l=o,r=l.updateQueue,r!==null){var v=l.stateNode;try{var w=r.shared.hiddenCallbacks;if(w!==null)for(r.shared.hiddenCallbacks=null,r=0;r<w.length;r++)vd(w[r],v)}catch(B){Qe(l,l.return,B)}}t&&m&64&&Dm(o),Ga(o,o.return);break;case 27:Bm(o);case 26:case 5:zl(r,o,t),t&&l===null&&m&4&&Om(o),Ga(o,o.return);break;case 12:zl(r,o,t);break;case 31:zl(r,o,t),t&&m&4&&Hm(r,o);break;case 13:zl(r,o,t),t&&m&4&&Pm(r,o);break;case 22:o.memoizedState===null&&zl(r,o,t),Ga(o,o.return);break;case 30:break;default:zl(r,o,t)}n=n.sibling}}function Lu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ja(t))}function zu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ja(e))}function nl(e,n,t,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vm(e,n,t,l),n=n.sibling}function Vm(e,n,t,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:nl(e,n,t,l),r&2048&&Fa(9,n);break;case 1:nl(e,n,t,l);break;case 3:nl(e,n,t,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ja(e)));break;case 12:if(r&2048){nl(e,n,t,l),e=n.stateNode;try{var o=n.memoizedProps,m=o.id,v=o.onPostCommit;typeof v=="function"&&v(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Qe(n,n.return,w)}}else nl(e,n,t,l);break;case 31:nl(e,n,t,l);break;case 13:nl(e,n,t,l);break;case 23:break;case 22:o=n.stateNode,m=n.alternate,n.memoizedState!==null?o._visibility&2?nl(e,n,t,l):Va(e,n):o._visibility&2?nl(e,n,t,l):(o._visibility|=2,Hr(e,n,t,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Lu(m,n);break;case 24:nl(e,n,t,l),r&2048&&zu(n.alternate,n);break;default:nl(e,n,t,l)}}function Hr(e,n,t,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,m=n,v=t,w=l,B=m.flags;switch(m.tag){case 0:case 11:case 15:Hr(o,m,v,w,r),Fa(8,m);break;case 23:break;case 22:var $=m.stateNode;m.memoizedState!==null?$._visibility&2?Hr(o,m,v,w,r):Va(o,m):($._visibility|=2,Hr(o,m,v,w,r)),r&&B&2048&&Lu(m.alternate,m);break;case 24:Hr(o,m,v,w,r),r&&B&2048&&zu(m.alternate,m);break;default:Hr(o,m,v,w,r)}n=n.sibling}}function Va(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,l=n,r=l.flags;switch(l.tag){case 22:Va(t,l),r&2048&&Lu(l.alternate,l);break;case 24:Va(t,l),r&2048&&zu(l.alternate,l);break;default:Va(t,l)}n=n.sibling}}var Ya=8192;function Pr(e,n,t){if(e.subtreeFlags&Ya)for(e=e.child;e!==null;)Ym(e,n,t),e=e.sibling}function Ym(e,n,t){switch(e.tag){case 26:Pr(e,n,t),e.flags&Ya&&e.memoizedState!==null&&Pg(t,el,e.memoizedState,e.memoizedProps);break;case 5:Pr(e,n,t);break;case 3:case 4:var l=el;el=Co(e.stateNode.containerInfo),Pr(e,n,t),el=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ya,Ya=16777216,Pr(e,n,t),Ya=l):Pr(e,n,t));break;default:Pr(e,n,t)}}function $m(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function $a(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];Ln=l,Xm(l,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 0:case 11:case 15:$a(e),e.flags&2048&&hi(9,e,e.return);break;case 3:$a(e);break;case 12:$a(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,xo(e)):$a(e);break;default:$a(e)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];Ln=l,Xm(l,e)}$m(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:hi(8,n,n.return),xo(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,xo(n));break;default:xo(n)}e=e.sibling}}function Xm(e,n){for(;Ln!==null;){var t=Ln;switch(t.tag){case 0:case 11:case 15:hi(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ja(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Ln=l;else e:for(t=e;Ln!==null;){l=Ln;var r=l.sibling,o=l.return;if(Um(l),l===t){Ln=null;break e}if(r!==null){r.return=o,Ln=r;break e}Ln=o}}}var tg={getCacheForType:function(e){var n=Gn(kn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Gn(kn).controller.signal}},lg=typeof WeakMap=="function"?WeakMap:Map,Xe=0,nn=null,ze=null,Ie=0,Ke=0,Et=null,_i=!1,Fr=!1,Uu=!1,Ul=0,_n=0,gi=0,ar=0,Iu=0,Tt=0,Gr=0,qa=null,ft=null,Hu=!1,So=0,Km=0,ko=1/0,wo=null,bi=null,An=0,yi=null,Vr=null,Il=0,Pu=0,Fu=null,Qm=null,Xa=0,Gu=null;function Nt(){return(Xe&2)!==0&&Ie!==0?Ie&-Ie:I.T!==null?Ku():cn()}function Wm(){if(Tt===0)if((Ie&536870912)===0||Fe){var e=Xn;Xn<<=1,(Xn&3932160)===0&&(Xn=262144),Tt=e}else Tt=536870912;return e=kt.current,e!==null&&(e.flags|=32),Tt}function dt(e,n,t){(e===nn&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),vi(e,Ie,Tt,!1)),Li(e,t),((Xe&2)===0||e!==nn)&&(e===nn&&((Xe&2)===0&&(ar|=t),_n===4&&vi(e,Ie,Tt,!1)),cl(e))}function Zm(e,n,t){if((Xe&6)!==0)throw Error(a(327));var l=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Cn(e,n),r=l?ag(e,n):Yu(e,n,!0),o=l;do{if(r===0){Fr&&!l&&vi(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!ig(t)){r=Yu(e,n,!1),o=!1;continue}if(r===2){if(o=n,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var v=e;r=qa;var w=v.current.memoizedState.isDehydrated;if(w&&(Yr(v,m).flags|=256),m=Yu(v,m,!1),m!==2){if(Uu&&!w){v.errorRecoveryDisabledLanes|=o,ar|=o,r=4;break e}o=ft,ft=r,o!==null&&(ft===null?ft=o:ft.push.apply(ft,o))}r=m}if(o=!1,r!==2)continue}}if(r===1){Yr(e,0),vi(e,n,0,!0);break}e:{switch(l=e,o=r,o){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:vi(l,n,Tt,!_i);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(r=So+300-xn(),10<r)){if(vi(l,n,Tt,!_i),an(l,0,!0)!==0)break e;Il=n,l.timeoutHandle=jp(Jm.bind(null,l,t,ft,wo,Hu,n,Tt,ar,Gr,_i,o,"Throttled",-0,0),r);break e}Jm(l,t,ft,wo,Hu,n,Tt,ar,Gr,_i,o,null,-0,0)}}break}while(!0);cl(e)}function Jm(e,n,t,l,r,o,m,v,w,B,$,Q,z,P){if(e.timeoutHandle=-1,Q=n.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:At},Ym(n,o,Q);var fe=(o&62914560)===o?So-xn():(o&4194048)===o?Km-xn():0;if(fe=Fg(Q,fe),fe!==null){Il=o,e.cancelPendingCommit=fe(sp.bind(null,e,n,o,t,l,r,m,v,w,$,Q,null,z,P)),vi(e,o,m,!B);return}}sp(e,n,o,t,l,r,m,v,w)}function ig(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],o=r.getSnapshot;r=r.value;try{if(!Pn(o(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vi(e,n,t,l){n&=~Iu,n&=~ar,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var o=31-zn(r),m=1<<o;l[o]=-1,r&=~m}t!==0&&vs(e,t,n)}function Eo(){return(Xe&6)===0?(Ka(0),!1):!0}function Vu(){if(ze!==null){if(Ke===0)var e=ze.return;else e=ze,Rl=Wi=null,au(e),Br=null,Da=0,e=ze;for(;e!==null;)Mm(e.alternate,e),e=e.return;ze=null}}function Yr(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,wg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Il=0,Vu(),nn=e,ze=t=Tl(e.current,null),Ie=n,Ke=0,Et=null,_i=!1,Fr=Cn(e,n),Uu=!1,Gr=Tt=Iu=ar=gi=_n=0,ft=qa=null,Hu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-zn(l),o=1<<r;n|=e[r],l&=~o}return Ul=n,Ys(),t}function ep(e,n){Re=null,I.H=Ia,n===Cr||n===Js?(n=_d(),Ke=3):n===Xc?(n=_d(),Ke=4):Ke=n===Su?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Et=n,ze===null&&(_n=1,po(e,Lt(n,e.current)))}function np(){var e=kt.current;return e===null?!0:(Ie&4194048)===Ie?Ht===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===Ht:!1}function tp(){var e=I.H;return I.H=Ia,e===null?Ia:e}function lp(){var e=I.A;return I.A=tg,e}function To(){_n=4,_i||(Ie&4194048)!==Ie&&kt.current!==null||(Fr=!0),(gi&134217727)===0&&(ar&134217727)===0||nn===null||vi(nn,Ie,Tt,!1)}function Yu(e,n,t){var l=Xe;Xe|=2;var r=tp(),o=lp();(nn!==e||Ie!==n)&&(wo=null,Yr(e,n)),n=!1;var m=_n;e:do try{if(Ke!==0&&ze!==null){var v=ze,w=Et;switch(Ke){case 8:Vu(),m=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(n=!0);var B=Ke;if(Ke=0,Et=null,$r(e,v,w,B),t&&Fr){m=0;break e}break;default:B=Ke,Ke=0,Et=null,$r(e,v,w,B)}}rg(),m=_n;break}catch($){ep(e,$)}while(!0);return n&&e.shellSuspendCounter++,Rl=Wi=null,Xe=l,I.H=r,I.A=o,ze===null&&(nn=null,Ie=0,Ys()),m}function rg(){for(;ze!==null;)ip(ze)}function ag(e,n){var t=Xe;Xe|=2;var l=tp(),r=lp();nn!==e||Ie!==n?(wo=null,ko=xn()+500,Yr(e,n)):Fr=Cn(e,n);e:do try{if(Ke!==0&&ze!==null){n=ze;var o=Et;n:switch(Ke){case 1:Ke=0,Et=null,$r(e,n,o,1);break;case 2:case 9:if(pd(o)){Ke=0,Et=null,rp(n);break}n=function(){Ke!==2&&Ke!==9||nn!==e||(Ke=7),cl(e)},o.then(n,n);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:pd(o)?(Ke=0,Et=null,rp(n)):(Ke=0,Et=null,$r(e,n,o,7));break;case 5:var m=null;switch(ze.tag){case 26:m=ze.memoizedState;case 5:case 27:var v=ze;if(m?Vp(m):v.stateNode.complete){Ke=0,Et=null;var w=v.sibling;if(w!==null)ze=w;else{var B=v.return;B!==null?(ze=B,No(B)):ze=null}break n}}Ke=0,Et=null,$r(e,n,o,5);break;case 6:Ke=0,Et=null,$r(e,n,o,6);break;case 8:Vu(),_n=6;break e;default:throw Error(a(462))}}sg();break}catch($){ep(e,$)}while(!0);return Rl=Wi=null,I.H=l,I.A=r,Xe=t,ze!==null?0:(nn=null,Ie=0,Ys(),_n)}function sg(){for(;ze!==null&&!ur();)ip(ze)}function ip(e){var n=Rm(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,n===null?No(e):ze=n}function rp(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Sm(t,n,n.pendingProps,n.type,void 0,Ie);break;case 11:n=Sm(t,n,n.pendingProps,n.type.render,n.ref,Ie);break;case 5:au(n);default:Mm(t,n),n=ze=ld(n,Ul),n=Rm(t,n,Ul)}e.memoizedProps=e.pendingProps,n===null?No(e):ze=n}function $r(e,n,t,l){Rl=Wi=null,au(n),Br=null,Da=0;var r=n.return;try{if(K_(e,r,n,t,Ie)){_n=1,po(e,Lt(t,e.current)),ze=null;return}}catch(o){if(r!==null)throw ze=r,o;_n=1,po(e,Lt(t,e.current)),ze=null;return}n.flags&32768?(Fe||l===1?e=!0:Fr||(Ie&536870912)!==0?e=!1:(_i=e=!0,(l===2||l===9||l===3||l===6)&&(l=kt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ap(n,e)):No(n)}function No(e){var n=e;do{if((n.flags&32768)!==0){ap(n,_i);return}e=n.return;var t=Z_(n.alternate,n,Ul);if(t!==null){ze=t;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);_n===0&&(_n=5)}function ap(e,n){do{var t=J_(e.alternate,e);if(t!==null){t.flags&=32767,ze=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ze=e;return}ze=e=t}while(e!==null);_n=6,ze=null}function sp(e,n,t,l,r,o,m,v,w){e.cancelPendingCommit=null;do Ro();while(An!==0);if((Xe&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(o=n.lanes|n.childLanes,o|=Tr,pl(e,t,o,m,v,w),e===nn&&(ze=nn=null,Ie=0),Vr=n,yi=e,Il=t,Pu=o,Fu=r,Qm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fg(Oi,function(){return dp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,r=te.p,te.p=2,m=Xe,Xe|=4;try{eg(e,n,t)}finally{Xe=m,te.p=r,I.T=l}}An=1,op(),cp(),up()}}function op(){if(An===1){An=0;var e=yi,n=Vr,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=I.T,I.T=null;var l=te.p;te.p=2;var r=Xe;Xe|=4;try{Fm(n,e);var o=lf,m=Vs(e.containerInfo),v=o.focusedElem,w=o.selectionRange;if(m!==v&&v&&v.ownerDocument&&Ea(v.ownerDocument.documentElement,v)){if(w!==null&&Ta(v)){var B=w.start,$=w.end;if($===void 0&&($=B),"selectionStart"in v)v.selectionStart=B,v.selectionEnd=Math.min($,v.value.length);else{var Q=v.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var P=z.getSelection(),fe=v.textContent.length,ke=Math.min(w.start,fe),en=w.end===void 0?ke:Math.min(w.end,fe);!P.extend&&ke>en&&(m=en,en=ke,ke=m);var M=Er(v,ke),N=Er(v,en);if(M&&N&&(P.rangeCount!==1||P.anchorNode!==M.node||P.anchorOffset!==M.offset||P.focusNode!==N.node||P.focusOffset!==N.offset)){var C=Q.createRange();C.setStart(M.node,M.offset),P.removeAllRanges(),ke>en?(P.addRange(C),P.extend(N.node,N.offset)):(C.setEnd(N.node,N.offset),P.addRange(C))}}}}for(Q=[],P=v;P=P.parentNode;)P.nodeType===1&&Q.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<Q.length;v++){var X=Q[v];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Ho=!!tf,lf=tf=null}finally{Xe=r,te.p=l,I.T=t}}e.current=n,An=2}}function cp(){if(An===2){An=0;var e=yi,n=Vr,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=I.T,I.T=null;var l=te.p;te.p=2;var r=Xe;Xe|=4;try{zm(e,n.alternate,n)}finally{Xe=r,te.p=l,I.T=t}}An=3}}function up(){if(An===4||An===3){An=0,Gl();var e=yi,n=Vr,t=Il,l=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,Vr=yi=null,fp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(bi=null),Dt(t),n=n.stateNode,Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Ci,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=I.T,r=te.p,te.p=2,I.T=null;try{for(var o=e.onRecoverableError,m=0;m<l.length;m++){var v=l[m];o(v.value,{componentStack:v.stack})}}finally{I.T=n,te.p=r}}(Il&3)!==0&&Ro(),cl(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===Gu?Xa++:(Xa=0,Gu=e):Xa=0,Ka(0)}}function fp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ja(n)))}function Ro(){return op(),cp(),up(),dp()}function dp(){if(An!==5)return!1;var e=yi,n=Pu;Pu=0;var t=Dt(Il),l=I.T,r=te.p;try{te.p=32>t?32:t,I.T=null,t=Fu,Fu=null;var o=yi,m=Il;if(An=0,Vr=yi=null,Il=0,(Xe&6)!==0)throw Error(a(331));var v=Xe;if(Xe|=4,qm(o.current),Vm(o,o.current,m,t),Xe=v,Ka(0,!1),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Ci,o)}catch{}return!0}finally{te.p=r,I.T=l,fp(e,n)}}function mp(e,n,t){n=Lt(t,n),n=xu(e.stateNode,n,2),e=di(e,n,2),e!==null&&(Li(e,2),cl(e))}function Qe(e,n,t){if(e.tag===3)mp(e,e,t);else for(;n!==null;){if(n.tag===3){mp(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(bi===null||!bi.has(l))){e=Lt(t,e),t=pm(2),l=di(n,t,2),l!==null&&(hm(t,l,n,e),Li(l,2),cl(l));break}}n=n.return}}function $u(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new lg;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(t)||(Uu=!0,r.add(t),e=og.bind(null,e,n,t),n.then(e,e))}function og(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,nn===e&&(Ie&t)===t&&(_n===4||_n===3&&(Ie&62914560)===Ie&&300>xn()-So?(Xe&2)===0&&Yr(e,0):Iu|=t,Gr===Ie&&(Gr=0)),cl(e)}function pp(e,n){n===0&&(n=Bi()),e=Xi(e,n),e!==null&&(Li(e,n),cl(e))}function cg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),pp(e,t)}function ug(e,n){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),pp(e,t)}function fg(e,n){return $t(e,n)}var jo=null,qr=null,qu=!1,Mo=!1,Xu=!1,xi=0;function cl(e){e!==qr&&e.next===null&&(qr===null?jo=qr=e:qr=qr.next=e),Mo=!0,qu||(qu=!0,mg())}function Ka(e,n){if(!Xu&&Mo){Xu=!0;do for(var t=!1,l=jo;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var o=0;else{var m=l.suspendedLanes,v=l.pingedLanes;o=(1<<31-zn(42|e)+1)-1,o&=r&~(m&~v),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,bp(l,o))}else o=Ie,o=an(l,l===nn?o:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(o&3)===0||Cn(l,o)||(t=!0,bp(l,o));l=l.next}while(t);Xu=!1}}function dg(){hp()}function hp(){Mo=qu=!1;var e=0;xi!==0&&kg()&&(e=xi);for(var n=xn(),t=null,l=jo;l!==null;){var r=l.next,o=_p(l,n);o===0?(l.next=null,t===null?jo=r:t.next=r,r===null&&(qr=t)):(t=l,(e!==0||(o&3)!==0)&&(Mo=!0)),l=r}An!==0&&An!==5||Ka(e),xi!==0&&(xi=0)}function _p(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-zn(o),v=1<<m,w=r[m];w===-1?((v&t)===0||(v&l)!==0)&&(r[m]=fc(v,n)):w<=n&&(e.expiredLanes|=v),o&=~v}if(n=nn,t=Ie,t=an(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===n&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Mt(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Cn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(l!==null&&Mt(l),Dt(t)){case 2:case 8:t=sa;break;case 32:t=Oi;break;case 268435456:t=mt;break;default:t=Oi}return l=gp.bind(null,e),t=$t(t,l),e.callbackPriority=n,e.callbackNode=t,n}return l!==null&&l!==null&&Mt(l),e.callbackPriority=2,e.callbackNode=null,2}function gp(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ro()&&e.callbackNode!==t)return null;var l=Ie;return l=an(e,e===nn?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zm(e,l,n),_p(e,xn()),e.callbackNode!=null&&e.callbackNode===t?gp.bind(null,e):null)}function bp(e,n){if(Ro())return null;Zm(e,n,!0)}function mg(){Eg(function(){(Xe&6)!==0?$t(Vl,dg):hp()})}function Ku(){if(xi===0){var e=Ar;e===0&&(e=ht,ht<<=1,(ht&261888)===0&&(ht=256)),xi=e}return xi}function yp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pi(""+e)}function vp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function pg(e,n,t,l,r){if(n==="submit"&&t&&t.stateNode===r){var o=yp((r[Bn]||null).action),m=l.submitter;m&&(n=(n=m[Bn]||null)?yp(n.formAction):m.getAttribute("formAction"),n!==null&&(o=n,m=null));var v=new br("action","action",null,l,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xi!==0){var w=m?vp(r,m):new FormData(r);hu(t,{pending:!0,data:w,method:r.method,action:o},null,w)}}else typeof o=="function"&&(v.preventDefault(),w=m?vp(r,m):new FormData(r),hu(t,{pending:!0,data:w,method:r.method,action:o},o,w))},currentTarget:r}]})}}for(var Qu=0;Qu<rl.length;Qu++){var Wu=rl[Qu],hg=Wu.toLowerCase(),_g=Wu[0].toUpperCase()+Wu.slice(1);st(hg,"on"+_g)}st(dn,"onAnimationEnd"),st(Wn,"onAnimationIteration"),st(je,"onAnimationStart"),st("dblclick","onDoubleClick"),st("focusin","onFocus"),st("focusout","onBlur"),st(sn,"onTransitionRun"),st(kl,"onTransitionStart"),st(Jt,"onTransitionCancel"),st(Ct,"onTransitionEnd"),yt("onMouseEnter",["mouseout","mouseover"]),yt("onMouseLeave",["mouseout","mouseover"]),yt("onPointerEnter",["pointerout","pointerover"]),yt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qa));function xp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],r=l.event;l=l.listeners;e:{var o=void 0;if(n)for(var m=l.length-1;0<=m;m--){var v=l[m],w=v.instance,B=v.currentTarget;if(v=v.listener,w!==o&&r.isPropagationStopped())break e;o=v,r.currentTarget=B;try{o(r)}catch($){El($)}r.currentTarget=null,o=w}else for(m=0;m<l.length;m++){if(v=l[m],w=v.instance,B=v.currentTarget,v=v.listener,w!==o&&r.isPropagationStopped())break e;o=v,r.currentTarget=B;try{o(r)}catch($){El($)}r.currentTarget=null,o=w}}}}function Ue(e,n){var t=n[ql];t===void 0&&(t=n[ql]=new Set);var l=e+"__bubble";t.has(l)||(Sp(n,e,2,!1),t.add(l))}function Zu(e,n,t){var l=0;n&&(l|=4),Sp(t,e,l,n)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Ju(e){if(!e[Do]){e[Do]=!0,Kt.forEach(function(t){t!=="selectionchange"&&(gg.has(t)||Zu(t,!1,e),Zu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Do]||(n[Do]=!0,Zu("selectionchange",!1,n))}}function Sp(e,n,t,l){switch(Wp(n)){case 2:var r=Yg;break;case 8:r=$g;break;default:r=hf}t=r.bind(null,n,t,e),r=void 0,!pa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function ef(e,n,t,l,r){var o=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var v=l.stateNode.containerInfo;if(v===r)break;if(m===4)for(m=l.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;v!==null;){if(m=Kn(v),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){l=o=m;continue e}v=v.parentNode}}l=l.return}Ts(function(){var B=o,$=un(t),Q=[];e:{var z=wl.get(e);if(z!==void 0){var P=br,fe=e;switch(e){case"keypress":if(Gi(t)===0)break e;case"keydown":case"keyup":P=xc;break;case"focusin":fe="focus",P=at;break;case"focusout":fe="blur",P=at;break;case"beforeblur":case"afterblur":P=at;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=vr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=_c;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Sc;break;case dn:case Wn:case je:P=ha;break;case Ct:P=As;break;case"scroll":case"scrollend":P=pc;break;case"wheel":P=wc;break;case"copy":case"cut":case"paste":P=Ns;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=ba;break;case"toggle":case"beforetoggle":P=Tc}var ke=(n&4)!==0,en=!ke&&(e==="scroll"||e==="scrollend"),M=ke?z!==null?z+"Capture":null:z;ke=[];for(var N=B,C;N!==null;){var X=N;if(C=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||C===null||M===null||(X=Fi(N,M),X!=null&&ke.push(Wa(N,X,C))),en)break;N=N.return}0<ke.length&&(z=new P(z,fe,null,t,$),Q.push({event:z,listeners:ke}))}}if((n&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",z&&t!==Zl&&(fe=t.relatedTarget||t.fromElement)&&(Kn(fe)||fe[qt]))break e;if((P||z)&&(z=$.window===$?$:(z=$.ownerDocument)?z.defaultView||z.parentWindow:window,P?(fe=t.relatedTarget||t.toElement,P=B,fe=fe?Kn(fe):null,fe!==null&&(en=h(fe),ke=fe.tag,fe!==en||ke!==5&&ke!==27&&ke!==6)&&(fe=null)):(P=null,fe=B),P!==fe)){if(ke=vr,X="onMouseLeave",M="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ke=ba,X="onPointerLeave",M="onPointerEnter",N="pointer"),en=P==null?z:Xt(P),C=fe==null?z:Xt(fe),z=new ke(X,N+"leave",P,t,$),z.target=en,z.relatedTarget=C,X=null,Kn($)===B&&(ke=new ke(M,N+"enter",fe,t,$),ke.target=C,ke.relatedTarget=en,X=ke),en=X,P&&fe)n:{for(ke=bg,M=P,N=fe,C=0,X=M;X;X=ke(X))C++;X=0;for(var Se=N;Se;Se=ke(Se))X++;for(;0<C-X;)M=ke(M),C--;for(;0<X-C;)N=ke(N),X--;for(;C--;){if(M===N||N!==null&&M===N.alternate){ke=M;break n}M=ke(M),N=ke(N)}ke=null}else ke=null;P!==null&&kp(Q,z,P,ke,!1),fe!==null&&en!==null&&kp(Q,en,fe,ke,!0)}}e:{if(z=B?Xt(B):window,P=z.nodeName&&z.nodeName.toLowerCase(),P==="select"||P==="input"&&z.type==="file")var Ye=Hs;else if(xa(z))if(Ps)Ye=wa;else{Ye=Dc;var ge=Gs}else P=z.nodeName,!P||P.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?B&&da(B.elementType)&&(Ye=Hs):Ye=Ac;if(Ye&&(Ye=Ye(e,B))){Is(Q,Ye,t,$);break e}ge&&ge(e,z,B),e==="focusout"&&B&&z.type==="number"&&B.memoizedProps.value!=null&&Ii(z,"number",z.value)}switch(ge=B?Xt(B):window,e){case"focusin":(xa(ge)||ge.contentEditable==="true")&&(d=ge,_=B,x=null);break;case"focusout":x=_=d=null;break;case"mousedown":R=!0;break;case"contextmenu":case"mouseup":case"dragend":R=!1,j(Q,t,$);break;case"selectionchange":if(Oc)break;case"keydown":case"keyup":j(Q,t,$)}var Me;if(va)e:{switch(e){case"compositionstart":var He="onCompositionStart";break e;case"compositionend":He="onCompositionEnd";break e;case"compositionupdate":He="onCompositionUpdate";break e}He=void 0}else li?Ls(e,t)&&(He="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(He="onCompositionStart");He&&(Os&&t.locale!=="ko"&&(li||He!=="onCompositionStart"?He==="onCompositionEnd"&&li&&(Me=Hn()):(In=$,yl="value"in In?In.value:In.textContent,li=!0)),ge=Ao(B,He),0<ge.length&&(He=new _a(He,e,null,t,$),Q.push({event:He,listeners:ge}),Me?He.data=Me:(Me=xl(t),Me!==null&&(He.data=Me)))),(Me=Rc?zs(e,t):Us(e,t))&&(He=Ao(B,"onBeforeInput"),0<He.length&&(ge=new _a("onBeforeInput","beforeinput",null,t,$),Q.push({event:ge,listeners:He}),ge.data=Me)),pg(Q,e,B,t,$)}xp(Q,n)})}function Wa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ao(e,n){for(var t=n+"Capture",l=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Fi(e,t),r!=null&&l.unshift(Wa(e,r,o)),r=Fi(e,n),r!=null&&l.push(Wa(e,r,o))),e.tag===3)return l;e=e.return}return[]}function bg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kp(e,n,t,l,r){for(var o=n._reactName,m=[];t!==null&&t!==l;){var v=t,w=v.alternate,B=v.stateNode;if(v=v.tag,w!==null&&w===l)break;v!==5&&v!==26&&v!==27||B===null||(w=B,r?(B=Fi(t,o),B!=null&&m.unshift(Wa(t,B,w))):r||(B=Fi(t,o),B!=null&&m.push(Wa(t,B,w)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var yg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function wp(e){return(typeof e=="string"?e:""+e).replace(yg,`
`).replace(vg,"")}function Ep(e,n){return n=wp(n),wp(e)===n}function Je(e,n,t,l,r,o){switch(t){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||gl(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&gl(e,""+l);break;case"className":Qt(e,"class",l);break;case"tabIndex":Qt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(e,t,l);break;case"style":Es(e,l,o);break;case"data":if(n!=="object"){Qt(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Pi(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Je(e,n,"name",r.name,r,null),Je(e,n,"formEncType",r.formEncType,r,null),Je(e,n,"formMethod",r.formMethod,r,null),Je(e,n,"formTarget",r.formTarget,r,null)):(Je(e,n,"encType",r.encType,r,null),Je(e,n,"method",r.method,r,null),Je(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Pi(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=At);break;case"onScroll":l!=null&&Ue("scroll",e);break;case"onScrollEnd":l!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Pi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),_l(e,"popover",l);break;case"xlinkActuate":Qn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_l(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=mc.get(t)||t,_l(e,t,l))}}function nf(e,n,t,l,r,o){switch(t){case"style":Es(e,l,o);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"children":typeof l=="string"?gl(e,l):(typeof l=="number"||typeof l=="bigint")&&gl(e,""+l);break;case"onScroll":l!=null&&Ue("scroll",e);break;case"onScrollEnd":l!=null&&Ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=At);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kl.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),n=t.slice(2,r?t.length-7:void 0),o=e[Bn]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,r),typeof l=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,l,r);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):_l(e,t,l)}}}function Yn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var l=!1,r=!1,o;for(o in t)if(t.hasOwnProperty(o)){var m=t[o];if(m!=null)switch(o){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Je(e,n,o,m,t,null)}}r&&Je(e,n,"srcSet",t.srcSet,t,null),l&&Je(e,n,"src",t.src,t,null);return;case"input":Ue("invalid",e);var v=o=m=r=null,w=null,B=null;for(l in t)if(t.hasOwnProperty(l)){var $=t[l];if($!=null)switch(l){case"name":r=$;break;case"type":m=$;break;case"checked":w=$;break;case"defaultChecked":B=$;break;case"value":o=$;break;case"defaultValue":v=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(a(137,n));break;default:Je(e,n,l,$,t,null)}}vt(e,o,v,w,B,m,r,!1);return;case"select":Ue("invalid",e),l=m=o=null;for(r in t)if(t.hasOwnProperty(r)&&(v=t[r],v!=null))switch(r){case"value":o=v;break;case"defaultValue":m=v;break;case"multiple":l=v;default:Je(e,n,r,v,t,null)}n=o,t=m,e.multiple=!!l,n!=null?Mn(e,!!l,n,!1):t!=null&&Mn(e,!!l,t,!0);return;case"textarea":Ue("invalid",e),o=r=l=null;for(m in t)if(t.hasOwnProperty(m)&&(v=t[m],v!=null))switch(m){case"value":l=v;break;case"defaultValue":r=v;break;case"children":o=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(a(91));break;default:Je(e,n,m,v,t,null)}ws(e,l,r,o);return;case"option":for(w in t)if(t.hasOwnProperty(w)&&(l=t[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(e,n,w,l,t,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(l=0;l<Qa.length;l++)Ue(Qa[l],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in t)if(t.hasOwnProperty(B)&&(l=t[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Je(e,n,B,l,t,null)}return;default:if(da(n)){for($ in t)t.hasOwnProperty($)&&(l=t[$],l!==void 0&&nf(e,n,$,l,t,void 0));return}}for(v in t)t.hasOwnProperty(v)&&(l=t[v],l!=null&&Je(e,n,v,l,t,null))}function xg(e,n,t,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,m=null,v=null,w=null,B=null,$=null;for(P in t){var Q=t[P];if(t.hasOwnProperty(P)&&Q!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":w=Q;default:l.hasOwnProperty(P)||Je(e,n,P,null,l,Q)}}for(var z in l){var P=l[z];if(Q=t[z],l.hasOwnProperty(z)&&(P!=null||Q!=null))switch(z){case"type":o=P;break;case"name":r=P;break;case"checked":B=P;break;case"defaultChecked":$=P;break;case"value":m=P;break;case"defaultValue":v=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,n));break;default:P!==Q&&Je(e,n,z,P,l,Q)}}Ui(e,m,v,w,B,$,o,r);return;case"select":P=m=v=z=null;for(o in t)if(w=t[o],t.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":P=w;default:l.hasOwnProperty(o)||Je(e,n,o,null,l,w)}for(r in l)if(o=l[r],w=t[r],l.hasOwnProperty(r)&&(o!=null||w!=null))switch(r){case"value":z=o;break;case"defaultValue":v=o;break;case"multiple":m=o;default:o!==w&&Je(e,n,r,o,l,w)}n=v,t=m,l=P,z!=null?Mn(e,!!t,z,!1):!!l!=!!t&&(n!=null?Mn(e,!!t,n,!0):Mn(e,!!t,t?[]:"",!1));return;case"textarea":P=z=null;for(v in t)if(r=t[v],t.hasOwnProperty(v)&&r!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Je(e,n,v,null,l,r)}for(m in l)if(r=l[m],o=t[m],l.hasOwnProperty(m)&&(r!=null||o!=null))switch(m){case"value":z=r;break;case"defaultValue":P=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(a(91));break;default:r!==o&&Je(e,n,m,r,l,o)}ks(e,z,P);return;case"option":for(var fe in t)if(z=t[fe],t.hasOwnProperty(fe)&&z!=null&&!l.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Je(e,n,fe,null,l,z)}for(w in l)if(z=l[w],P=t[w],l.hasOwnProperty(w)&&z!==P&&(z!=null||P!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Je(e,n,w,z,l,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ke in t)z=t[ke],t.hasOwnProperty(ke)&&z!=null&&!l.hasOwnProperty(ke)&&Je(e,n,ke,null,l,z);for(B in l)if(z=l[B],P=t[B],l.hasOwnProperty(B)&&z!==P&&(z!=null||P!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,n));break;default:Je(e,n,B,z,l,P)}return;default:if(da(n)){for(var en in t)z=t[en],t.hasOwnProperty(en)&&z!==void 0&&!l.hasOwnProperty(en)&&nf(e,n,en,void 0,l,z);for($ in l)z=l[$],P=t[$],!l.hasOwnProperty($)||z===P||z===void 0&&P===void 0||nf(e,n,$,z,l,P);return}}for(var M in t)z=t[M],t.hasOwnProperty(M)&&z!=null&&!l.hasOwnProperty(M)&&Je(e,n,M,null,l,z);for(Q in l)z=l[Q],P=t[Q],!l.hasOwnProperty(Q)||z===P||z==null&&P==null||Je(e,n,Q,z,l,P)}function Tp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],o=r.transferSize,m=r.initiatorType,v=r.duration;if(o&&v&&Tp(m)){for(m=0,v=r.responseEnd,l+=1;l<t.length;l++){var w=t[l],B=w.startTime;if(B>v)break;var $=w.transferSize,Q=w.initiatorType;$&&Tp(Q)&&(w=w.responseEnd,m+=$*(w<v?1:(v-B)/(w-B)))}if(--l,n+=8*(o+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tf=null,lf=null;function Oo(e){return e.nodeType===9?e:e.ownerDocument}function Np(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var af=null;function kg(){var e=window.event;return e&&e.type==="popstate"?e===af?!1:(af=e,!0):(af=null,!1)}var jp=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(e){return Mp.resolve(null).then(e).catch(Tg)}:jp;function Tg(e){setTimeout(function(){throw e})}function Si(e){return e==="head"}function Dp(e,n){var t=n,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(r),Wr(n);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Za(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Za(t);for(var o=t.firstChild;o;){var m=o.nextSibling,v=o.nodeName;o[gt]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=m}}else t==="body"&&Za(e.ownerDocument.body);t=r}while(t);Wr(n)}function Ap(e,n){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function sf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":sf(t),hl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Ng(e,n,t,l){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[gt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function Rg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Op(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pt(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$?"||e.data==="$~"}function cf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var l=function(){n(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Pt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uf=null;function Cp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Pt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Bp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Lp(e,n,t){switch(n=Oo(t),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Za(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);hl(e)}var Ft=new Map,zp=new Set;function Co(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hl=te.d;te.d={f:Mg,r:Dg,D:Ag,C:Og,L:Cg,m:Bg,X:zg,S:Lg,M:Ug};function Mg(){var e=Hl.f(),n=Eo();return e||n}function Dg(e){var n=bt(e);n!==null&&n.tag===5&&n.type==="form"?em(n):Hl.r(e)}var Xr=typeof document>"u"?null:document;function Up(e,n,t){var l=Xr;if(l&&typeof n=="string"&&n){var r=jn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),zp.has(r)||(zp.add(r),e={rel:e,crossOrigin:t,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Yn(n,"link",e),pn(n),l.head.appendChild(n)))}}function Ag(e){Hl.D(e),Up("dns-prefetch",e,null)}function Og(e,n){Hl.C(e,n),Up("preconnect",e,n)}function Cg(e,n,t){Hl.L(e,n,t);var l=Xr;if(l&&e&&n){var r='link[rel="preload"][as="'+jn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+jn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+jn(t.imageSizes)+'"]')):r+='[href="'+jn(e)+'"]';var o=r;switch(n){case"style":o=Kr(e);break;case"script":o=Qr(e)}Ft.has(o)||(e=k({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Ft.set(o,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Ja(o))||n==="script"&&l.querySelector(es(o))||(n=l.createElement("link"),Yn(n,"link",e),pn(n),l.head.appendChild(n)))}}function Bg(e,n){Hl.m(e,n);var t=Xr;if(t&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+jn(l)+'"][href="'+jn(e)+'"]',o=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Qr(e)}if(!Ft.has(o)&&(e=k({rel:"modulepreload",href:e},n),Ft.set(o,e),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(es(o)))return}l=t.createElement("link"),Yn(l,"link",e),pn(l),t.head.appendChild(l)}}}function Lg(e,n,t){Hl.S(e,n,t);var l=Xr;if(l&&e){var r=rt(l).hoistableStyles,o=Kr(e);n=n||"default";var m=r.get(o);if(!m){var v={loading:0,preload:null};if(m=l.querySelector(Ja(o)))v.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Ft.get(o))&&ff(e,t);var w=m=l.createElement("link");pn(w),Yn(w,"link",e),w._p=new Promise(function(B,$){w.onload=B,w.onerror=$}),w.addEventListener("load",function(){v.loading|=1}),w.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Bo(m,n,l)}m={type:"stylesheet",instance:m,count:1,state:v},r.set(o,m)}}}function zg(e,n){Hl.X(e,n);var t=Xr;if(t&&e){var l=rt(t).hoistableScripts,r=Qr(e),o=l.get(r);o||(o=t.querySelector(es(r)),o||(e=k({src:e,async:!0},n),(n=Ft.get(r))&&df(e,n),o=t.createElement("script"),pn(o),Yn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(r,o))}}function Ug(e,n){Hl.M(e,n);var t=Xr;if(t&&e){var l=rt(t).hoistableScripts,r=Qr(e),o=l.get(r);o||(o=t.querySelector(es(r)),o||(e=k({src:e,async:!0,type:"module"},n),(n=Ft.get(r))&&df(e,n),o=t.createElement("script"),pn(o),Yn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(r,o))}}function Ip(e,n,t,l){var r=(r=H.current)?Co(r):null;if(!r)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Kr(t.href),t=rt(r).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Kr(t.href);var o=rt(r).hoistableStyles,m=o.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=r.querySelector(Ja(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Ft.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ft.set(e,t),o||Ig(r,e,t,m.state))),n&&l===null)throw Error(a(528,""));return m}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(t),t=rt(r).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Kr(e){return'href="'+jn(e)+'"'}function Ja(e){return'link[rel="stylesheet"]['+e+"]"}function Hp(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Ig(e,n,t,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Yn(n,"link",t),pn(n),e.head.appendChild(n))}function Qr(e){return'[src="'+jn(e)+'"]'}function es(e){return"script[async]"+e}function Pp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+jn(t.href)+'"]');if(l)return n.instance=l,pn(l),l;var r=k({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),pn(l),Yn(l,"style",r),Bo(l,t.precedence,e),n.instance=l;case"stylesheet":r=Kr(t.href);var o=e.querySelector(Ja(r));if(o)return n.state.loading|=4,n.instance=o,pn(o),o;l=Hp(t),(r=Ft.get(r))&&ff(l,r),o=(e.ownerDocument||e).createElement("link"),pn(o);var m=o;return m._p=new Promise(function(v,w){m.onload=v,m.onerror=w}),Yn(o,"link",l),n.state.loading|=4,Bo(o,t.precedence,e),n.instance=o;case"script":return o=Qr(t.src),(r=e.querySelector(es(o)))?(n.instance=r,pn(r),r):(l=t,(r=Ft.get(o))&&(l=k({},t),df(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),pn(r),Yn(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Bo(l,t.precedence,e));return n.instance}function Bo(e,n,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,o=r,m=0;m<l.length;m++){var v=l[m];if(v.dataset.precedence===n)o=v;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function df(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Lo=null;function Fp(e,n,t){if(Lo===null){var l=new Map,r=Lo=new Map;r.set(t,l)}else r=Lo,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var o=t[r];if(!(o[gt]||o[gn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(n)||"";m=e+m;var v=l.get(m);v?v.push(o):l.set(m,[o])}}return l}function Gp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Hg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Pg(e,n,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Kr(l.href),o=n.querySelector(Ja(r));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=zo.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,pn(o);return}o=n.ownerDocument||n,l=Hp(l),(r=Ft.get(r))&&ff(l,r),o=o.createElement("link"),pn(o);var m=o;m._p=new Promise(function(v,w){m.onload=v,m.onerror=w}),Yn(o,"link",l),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=zo.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var mf=0;function Fg(e,n){return e.stylesheets&&e.count===0&&Io(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&Io(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&mf===0&&(mf=62500*Sg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Io(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>mf?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function zo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Io(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uo=null;function Io(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uo=new Map,n.forEach(Gg,e),Uo=null,zo.call(e))}function Gg(e,n){if(!(n.state.loading&4)){var t=Uo.get(e);if(t)var l=t.get(null);else{t=new Map,Uo.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var m=r[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),l=m)}l&&t.set(null,l)}r=n.instance,m=r.getAttribute("data-precedence"),o=t.get(m)||l,o===l&&t.set(null,r),t.set(m,r),this.count++,l=zo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var ns={$$typeof:q,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Vg(e,n,t,l,r,o,m,v,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ll(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.hiddenUpdates=ll(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Yp(e,n,t,l,r,o,m,v,w,B,$,Q){return e=new Vg(e,n,t,m,w,B,$,Q,v),n=1,o===!0&&(n|=24),o=St(3,null,null,n),e.current=o,o.stateNode=e,n=Yc(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:l,isDehydrated:t,cache:n},Kc(o),e}function $p(e){return e?(e=Nr,e):Nr}function qp(e,n,t,l,r,o){r=$p(r),l.context===null?l.context=r:l.pendingContext=r,l=fi(n),l.payload={element:t},o=o===void 0?null:o,o!==null&&(l.callback=o),t=di(e,l,n),t!==null&&(dt(t,e,n),Oa(t,e,n))}function Xp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function pf(e,n){Xp(e,n),(e=e.alternate)&&Xp(e,n)}function Kp(e){if(e.tag===13||e.tag===31){var n=Xi(e,67108864);n!==null&&dt(n,e,67108864),pf(e,67108864)}}function Qp(e){if(e.tag===13||e.tag===31){var n=Nt();n=$l(n);var t=Xi(e,n);t!==null&&dt(t,e,n),pf(e,n)}}var Ho=!0;function Yg(e,n,t,l){var r=I.T;I.T=null;var o=te.p;try{te.p=2,hf(e,n,t,l)}finally{te.p=o,I.T=r}}function $g(e,n,t,l){var r=I.T;I.T=null;var o=te.p;try{te.p=8,hf(e,n,t,l)}finally{te.p=o,I.T=r}}function hf(e,n,t,l){if(Ho){var r=_f(l);if(r===null)ef(e,n,l,Po,t),Zp(e,l);else if(Xg(r,e,n,t,l))l.stopPropagation();else if(Zp(e,l),n&4&&-1<qg.indexOf(e)){for(;r!==null;){var o=bt(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=rn(o.pendingLanes);if(m!==0){var v=o;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var w=1<<31-zn(m);v.entanglements[1]|=w,m&=~w}cl(o),(Xe&6)===0&&(ko=xn()+500,Ka(0))}}break;case 31:case 13:v=Xi(o,2),v!==null&&dt(v,o,2),Eo(),pf(o,2)}if(o=_f(l),o===null&&ef(e,n,l,Po,t),o===r)break;r=o}r!==null&&l.stopPropagation()}else ef(e,n,l,null,t)}}function _f(e){return e=un(e),gf(e)}var Po=null;function gf(e){if(Po=null,e=Kn(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=b(n),e!==null)return e;e=null}else if(t===31){if(e=p(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Po=e,null}function Wp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ai()){case Vl:return 2;case sa:return 8;case Oi:case nt:return 32;case mt:return 268435456;default:return 32}default:return 32}}var bf=!1,ki=null,wi=null,Ei=null,ts=new Map,ls=new Map,Ti=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zp(e,n){switch(e){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":wi=null;break;case"mouseover":case"mouseout":Ei=null;break;case"pointerover":case"pointerout":ts.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(n.pointerId)}}function is(e,n,t,l,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:o,targetContainers:[r]},n!==null&&(n=bt(n),n!==null&&Kp(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Xg(e,n,t,l,r){switch(n){case"focusin":return ki=is(ki,e,n,t,l,r),!0;case"dragenter":return wi=is(wi,e,n,t,l,r),!0;case"mouseover":return Ei=is(Ei,e,n,t,l,r),!0;case"pointerover":var o=r.pointerId;return ts.set(o,is(ts.get(o)||null,e,n,t,l,r)),!0;case"gotpointercapture":return o=r.pointerId,ls.set(o,is(ls.get(o)||null,e,n,t,l,r)),!0}return!1}function Jp(e){var n=Kn(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=b(t),n!==null){e.blockedOn=n,oa(e.priority,function(){Qp(t)});return}}else if(n===31){if(n=p(t),n!==null){e.blockedOn=n,oa(e.priority,function(){Qp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_f(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Zl=l,t.target.dispatchEvent(l),Zl=null}else return n=bt(t),n!==null&&Kp(n),e.blockedOn=t,!1;n.shift()}return!0}function eh(e,n,t){Fo(e)&&t.delete(n)}function Kg(){bf=!1,ki!==null&&Fo(ki)&&(ki=null),wi!==null&&Fo(wi)&&(wi=null),Ei!==null&&Fo(Ei)&&(Ei=null),ts.forEach(eh),ls.forEach(eh)}function Go(e,n){e.blockedOn===n&&(e.blockedOn=null,bf||(bf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Kg)))}var Vo=null;function nh(e){Vo!==e&&(Vo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Vo===e&&(Vo=null);for(var n=0;n<e.length;n+=3){var t=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(gf(l||t)===null)continue;break}var o=bt(t);o!==null&&(e.splice(n,3),n-=3,hu(o,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function Wr(e){function n(w){return Go(w,e)}ki!==null&&Go(ki,e),wi!==null&&Go(wi,e),Ei!==null&&Go(Ei,e),ts.forEach(n),ls.forEach(n);for(var t=0;t<Ti.length;t++){var l=Ti[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ti.length&&(t=Ti[0],t.blockedOn===null);)Jp(t),t.blockedOn===null&&Ti.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],o=t[l+1],m=r[Bn]||null;if(typeof o=="function")m||nh(t);else if(m){var v=null;if(o&&o.hasAttribute("formAction")){if(r=o,m=o[Bn]||null)v=m.formAction;else if(gf(r)!==null)continue}else v=m.action;typeof v=="function"?t[l+1]=v:(t.splice(l,3),l-=3),nh(t)}}}function th(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function yf(e){this._internalRoot=e}Yo.prototype.render=yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var t=n.current,l=Nt();qp(t,l,e,n,null,null)},Yo.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qp(e.current,2,null,e,null,null),Eo(),n[qt]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var n=cn();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ti.length&&n!==0&&n<Ti[t].priority;t++);Ti.splice(t,0,e),t===0&&Jp(e)}};var lh=i.version;if(lh!=="19.2.7")throw Error(a(527,lh,"19.2.7"));te.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Qg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Ci=$o.inject(Qg),Rn=$o}catch{}}return as.createRoot=function(e,n){if(!f(e))throw Error(a(299));var t=!1,l="",r=um,o=fm,m=dm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Yp(e,1,!1,null,null,t,l,null,r,o,m,th),e[qt]=n.current,Ju(e),new yf(n)},as.hydrateRoot=function(e,n,t){if(!f(e))throw Error(a(299));var l=!1,r="",o=um,m=fm,v=dm,w=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError),t.formState!==void 0&&(w=t.formState)),n=Yp(e,1,!0,n,t??null,l,r,w,o,m,v,th),n.context=$p(null),t=n.current,l=Nt(),l=$l(l),r=fi(l),r.callback=null,di(t,r,l),t=l,n.current.lanes=t,Li(n,t),cl(n),e[qt]=n.current,Ju(e),new Yo(n)},as.version="19.2.7",as}var mh;function ob(){if(mh)return Sf.exports;mh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Sf.exports=sb(),Sf.exports}var cb=ob();const ub=s_(cb),ph=s=>{let i;const c=new Set,a=(y,S)=>{const k=typeof y=="function"?y(i):y;if(!Object.is(k,i)){const T=i;i=S??(typeof k!="object"||k===null)?k:Object.assign({},i,k),c.forEach(D=>D(i,T))}},f=()=>i,p={setState:a,getState:f,getInitialState:()=>g,subscribe:y=>(c.add(y),()=>c.delete(y))},g=i=s(a,f,p);return p},fb=(s=>s?ph(s):ph),db=s=>s;function mb(s,i=db){const c=ms.useSyncExternalStore(s.subscribe,ms.useCallback(()=>i(s.getState()),[s,i]),ms.useCallback(()=>i(s.getInitialState()),[s,i]));return ms.useDebugValue(c),c}const hh=s=>{const i=fb(s),c=a=>mb(i,a);return Object.assign(c,i),c},pb=(s=>s?hh(s):hh);function hb(){const s=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(s);else for(let c=0;c<s.length;c+=1)s[c]=Math.floor(Math.random()*256);let i="";for(const c of s)i+=c.toString(16).padStart(2,"0");return i}const Wf="pkp.user",Zf="pkp.savedDevices",Jf="pkp.ideDrafts",ed="pkp.ideSettings",gs="Prototype Version 0.6.7";function ac(s){try{const i=localStorage.getItem(s);return i?JSON.parse(i):null}catch{return null}}function sc(s,i){try{localStorage.setItem(s,JSON.stringify(i))}catch{}}function _b(){const s=ac(Wf);return s&&typeof s.username=="string"&&typeof s.userID=="string"?s:null}function Tf(s){sc(Wf,s)}function nc(){return ac(Zf)??[]}function na(s){sc(Zf,s)}function gb(){na([])}function bb(){try{localStorage.removeItem(Wf),localStorage.removeItem(Zf),localStorage.removeItem(Jf),localStorage.removeItem(ed)}catch{}}function qo(){var s;return((s=ac(Jf))==null?void 0:s.filter(i=>i.path&&typeof i.content=="string"))??[]}function ss(s){sc(Jf,s)}function _h(){const s=ac(ed)??{};return{clearTerminalOnRun:!!s.clearTerminalOnRun,simplifiedErrors:s.simplifiedErrors!==!1}}function yb(s){sc(ed,s)}function Nf(s){const i=nc(),c=i.findIndex(a=>a.deviceID===s.deviceID);return c>=0?i[c]=s:i.push(s),na(i),i}function vb(s){const i=nc().filter(c=>c.deviceID!==s);return na(i),i}const Pf="b8e06067-62ad-41ba-9231-206ae80ab551",xb="f897177b-aee8-4767-8ecc-cc694fd5fce0",Sb="f897177b-aee8-4767-8ecc-cc694fd5fce1",Rf=20,kb=12,wb=new TextEncoder;function Eb(s){return new Promise(i=>setTimeout(i,s))}function oc(){return typeof navigator<"u"&&"bluetooth"in navigator}function o_(s){return s?s.startsWith("PicoW-")?s.slice(6):s:"Pico"}async function Tb(){if(!oc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Pf]},{namePrefix:"PicoW-"}],optionalServices:[Pf]})}async function c_(){if(!oc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Nb{constructor(){de(this,"device",null);de(this,"writeChar",null);de(this,"notifyChar",null);de(this,"buffer","");de(this,"decoder",new TextDecoder);de(this,"writeQueue",Promise.resolve());de(this,"disconnectNotified",!1);de(this,"onLine",()=>{});de(this,"onDisconnect",()=>{});de(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=this.decoder.decode(c.value.buffer,{stream:!0});let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});de(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var f;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=i.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Pf);this.writeChar=await a.getCharacteristic(xb),this.notifyChar=await a.getCharacteristic(Sb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=wb.encode(`${i}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<c.length;h+=Rf){const b=c.slice(h,h+Rf);await f(b),h+Rf<c.length&&await Eb(kb)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class Rb{constructor(i,c){de(this,"send");de(this,"onMessage");de(this,"inActive",!1);de(this,"inExpectedTotal",0);de(this,"inStreamId",0);de(this,"inParts",new Map);de(this,"inProgress",null);de(this,"outPendingLines",null);de(this,"outWaitingAck",!1);de(this,"outStreamId",0);de(this,"outNextStreamId",1);de(this,"outCache",new Map);de(this,"outProgress",null);de(this,"outResolve",null);de(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const f=i.split(","),h=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,b=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=b,this.inParts.clear(),this.send(b>0?`ack:prep,${b}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const f=i.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const h=parseInt(f[1],10),b=parseInt(f[2],10),p=this.outCache.get(b);h===this.outStreamId&&p&&this.send(p)}return}const c=this.parseNumbered(i);if(c){const{idx:f,payload:h}=c;if(!this.inActive){this.onMessage(h);return}this.inParts.has(f)||(this.inParts.set(f,h),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let b=0;for(let p=1;p<=this.inExpectedTotal;p+=1)if(!this.inParts.has(p)){b=p;break}if(b>0&&this.inStreamId>0&&f>b&&this.send(`miss,${this.inStreamId},${b}`),this.inParts.size>=this.inExpectedTotal){for(let p=1;p<=this.inExpectedTotal;p+=1){const g=this.inParts.get(p);g!==void 0&&this.onMessage(g)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((h,b)=>{this.outResolve=h,this.outReject=b});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await f}async flushOutbound(){var i,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let b=0;b<h;b+=1){const p=this.outPendingLines[b],g=`${b+1}-${p}`;this.outCache.set(b+1,g),await this.send(g),(c=this.outProgress)==null||c.call(this,b+1,h,p)}(a=this.outResolve)==null||a.call(this)}catch(h){(f=this.outReject)==null||f.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:i.slice(c+1)}}}const ia=11,bs=31,jb=2,Mb=60,ta=4,la=40;function Db(s,i){return Math.max(14,Math.min(56,Math.min(s,i)*.05))}function u_(s,i,c=ia,a=bs){const f=Db(s,i),h=Math.max(1,s-2*f),b=Math.max(1,i-2*f);return{areaW:s,areaH:i,cols:c,rows:a,margin:f,stepX:h/Math.max(1,c-1),stepY:b/Math.max(1,a-1)}}function f_(s,i){return i.margin+s/2*i.stepX}function d_(s,i){const c=i.margin+s/2*i.stepY;return i.areaH-c}function ps(s,i){return s.centerX2===null||s.centerY2===null||s.spanX===null||s.spanY===null?null:{cx:f_(s.centerX2,i),cy:d_(s.centerY2,i),width:s.spanX*i.stepX,height:s.spanY*i.stepY}}function Ab(s){const i=[];for(let c=0;c<s.cols;c+=1)for(let a=0;a<s.rows;a+=1)i.push({x:s.margin+c*s.stepX,y:s.areaH-(s.margin+a*s.stepY)});return i}function jf(s,i,c,a,f){const h=(g,y,S,k)=>{const T=y%2,D=k*2;let O=T,V=1/0;for(let G=T;G<=D;G+=2){const F=Math.abs(S(G)-g);F<V&&(V=F,O=G)}return Math.max(y,Math.min(D-y,O))},b=h(s,c,g=>f_(g,f),f.cols-1),p=h(i,a,g=>d_(g,f),f.rows-1);return{centerX2:b,centerY2:p}}const or=6e3,Ob=15,Cb="",tc=[32,64,128,192],Bb=or*10,Lb=3500,zb=8e3,Ub=2,Ib=or,Hb=or*8;function Mf(s){return new Promise(i=>setTimeout(i,s))}function Zr(s){if(s!=null&&s.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function gh(s){return s instanceof DOMException&&s.name==="AbortError"}function Ri(s){return s.replace(/[\r\n,]/g," ").trim()}class Pb{constructor(i={}){de(this,"transport",new Nb);de(this,"stream");de(this,"events");de(this,"waiters",[]);de(this,"collectingLayout",!1);de(this,"layoutBuffer",[]);de(this,"layoutResolve",null);de(this,"collectingLines",!1);de(this,"lineBuffer",[]);de(this,"lineResolve",null);de(this,"lineReject",null);de(this,"lineCollectId",0);de(this,"controlPumpActive",!1);de(this,"pendingButtons",[]);de(this,"pendingSliders",new Map);de(this,"pendingToggles",new Map);de(this,"pendingJoysticks",new Map);de(this,"pendingDpads",[]);de(this,"expectingDisconnect",!1);de(this,"disconnectMessage",null);de(this,"busy",!1);de(this,"fsCapabilities",null);this.events=i,this.stream=new Rb(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return o_((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,i,c)}progress(i,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,i,c)}onDeviceMessage(i){var a,f;if(i==="disconnect"||i==="disconnect_private"){const h=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,h),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("plot_clear,")?this.handlePlotClearLine(i):i.startsWith("plot,")?this.handlePlotLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(h=>h.match(i));if(c>=0){const h=this.waiters[c];this.waiters.splice(c,1),clearTimeout(h.timer),h.resolve(i)}}waitFor(i,c,a){return new Promise((f,h)=>{const b=setTimeout(()=>{const p=this.waiters.findIndex(g=>g.timer===b);p>=0&&this.waiters.splice(p,1),h(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:f,reject:h,timer:b})})}async collectLines(i,c,a,f,h){Zr(f);const b=this.lineCollectId+1;this.lineCollectId=b,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const p=new Promise((g,y)=>{let S=!1;const k=()=>this.lineCollectId===b,T=()=>{S=!0,k()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",O)},D=F=>{S||(clearTimeout(V),k()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),y(F))},O=()=>{D(new DOMException("BLE file read cancelled","AbortError"))},V=setTimeout(()=>{k()&&D(new Error(`Timeout: ${a}`))},c);this.lineResolve=g,this.lineReject=D;const G=this.lineResolve;this.lineResolve=F=>{k()&&(clearTimeout(V),T(),G==null||G(F))},f==null||f.addEventListener("abort",O,{once:!0})});return await this.transport.writeLine(i),p}async exchange(i,c,a,f=3){let h;for(let b=1;b<=f;b+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,or,a)}catch(p){h=p,this.log("warning",`${a}: forsøg ${b}/${f} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var re,be,me;await Mf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",K=>K==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",K=>K==="unowned"||K.startsWith("unowned,")||K.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((re=c.split(",")[1])==null?void 0:re.trim())||void 0};const a=c.split(","),f=a[1]??"",h=a[2]!==void 0&&parseInt(a[2],10)||0,b=a[3]!==void 0?parseInt(a[3],10)===1:!0,p=a[4]!==void 0?parseInt(a[4],10)===1:!1,g=a.length>=7,y=g?parseInt(a[5]??"0",10)===1:p,S=((be=a[g?6:5])==null?void 0:be.trim())||void 0,k=((me=a[g?7:6])==null?void 0:me.trim())||void 0;await this.exchange("ACK:ownership",K=>K==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const T=await this.exchange(`request_permission,${i.userID},${Ri(i.username)}`,K=>K.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const D=T.split(",").filter(K=>/^\d+$/.test(K)),O=D.length>=1?parseInt(D[0]??"0",10):0,V=D.length>=2?parseInt(D[1]??"0",10):0,G=D.length>=3?parseInt(D[2]??"0",10):V;if(O===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:S,canOthersConnect:b};const F=i.userID===f,W=V===1||F,q=G===1||F;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:S,deviceName:k,iconID:h,canEdit:W,canEditCode:q,isOwnedByMe:F,canOthersConnect:b,canOthersEdit:p,canOthersEditCode:y}}async create(i,c,a,f,h,b,p){const g=a?1:0,y=a&&f?1:0,S=a&&h?1:0;await this.exchange(`create,${i.userID},${Ri(i.username)},${c},${g},${y},${S},${b},${p}`,k=>k==="ACK:create","create")}async updateDeviceSettings(i,c,a,f,h,b,p){const g=c?1:0,y=c&&a?1:0,S=c&&f?1:0;await this.exchange(`settings_update,${i},${g},${y},${S},${h},${b},${Ri(p??"")}`,k=>k==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,f)=>{this.layoutResolve=a;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},or*2),b=this.layoutResolve;this.layoutResolve=p=>{clearTimeout(h),b==null||b(p)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(f=>{const h=p=>p===null?"n":String(p),b=`update,${f.type},${f.name},${h(f.centerX2)},${h(f.centerY2)},${h(f.spanX)},${h(f.spanY)},${f.rotation}`;return f.type==="slider"?`${b},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${b},${f.toggleInitial?1:0}`:f.type==="radar"?[b,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[b,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):f.type==="plot"?[b,f.plotMin??0,f.plotMax??100,f.plotHistory??30,f.plotStyle??"line"].join(","):b});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",or*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${Ri(i)}`,or*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,h,b]=a.split(","),p=f==="file"||f==="dir"?f:"unknown",g=parseInt(b??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:p,...Number.isFinite(g)&&g>=0?{size:g}:{}}})}handleRadarLine(i){var b,p,g;const c=i.split(",");if(c.length<4)return;const a=(b=c[1])==null?void 0:b.trim(),f=parseFloat(c[2]??""),h=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(h)||((g=(p=this.events).onRadar)==null||g.call(p,a,f,h),this.log("info",`rx: ${i}`))}handleTextLine(i){var g,y;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=i.slice(c+1,a),h=i.slice(a+1),b=f==null?void 0:f.trim();if(!b)return;const p=h.split(Cb).join(`
`);(y=(g=this.events).onText)==null||y.call(g,b,p),this.log("info",`rx: ${i}`)}handleToggleStateLine(i){var h,b,p;const c=i.split(",");if(c.length<3)return;const a=(h=c[1])==null?void 0:h.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((p=(b=this.events).onToggleState)==null||p.call(b,a,f===1),this.log("info",`rx: ${i}`))}handlePlotLine(i){var h,b,p;const c=i.split(",");if(c.length<3)return;const a=(h=c[1])==null?void 0:h.trim(),f=parseFloat(c[2]??"");!a||!Number.isFinite(f)||((p=(b=this.events).onPlot)==null||p.call(b,a,f),this.log("info",`rx: ${i}`))}handlePlotClearLine(i){var f,h,b;const c=i.split(",");if(c.length<2)return;const a=(f=c[1])==null?void 0:f.trim();a&&((b=(h=this.events).onPlotClear)==null||b.call(h,a),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(i,f,c,a)}catch(h){if(a!=null&&a.aborted||gh(h)||!f.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",Ib,"fs_capabilities",i),a=c.find(S=>S.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(S=>S.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=f.split(","),b=new Map;for(let S=1;S<h.length-1;S+=2)b.set(h[S],h[S+1]);const p=parseInt(b.get("max_page")??"",10),g=parseInt(b.get("stream_chunk")??"",10),y={version:b.get("version")||void 0,pageRead:b.get("page_read")==="1",maxPageSize:Number.isFinite(p)&&p>0?p:32,streamRead:b.get("stream_read")==="1",streamChunkSize:Number.isFinite(g)&&g>0?g:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,c,a){const f=await this.getFilesystemCapabilities(a);let h=0,b=Fb(f.maxPageSize),p=0,g=null,y="";const S=`Indlæser ${Df(i)}...`;Zr(a),c==null||c(5,S);for(let k=0;k<512;k+=1){Zr(a),p===0&&(c==null||c(7,S));const D=await this.readPageWithRetry(i,p,h,b,a),O=D.lines;h=D.nextPageSizeIndex,b=D.maxPageSizeIndex,Zr(a);const V=O.find(ee=>ee.startsWith("ERR"));if(V)throw new Error(V);const G=O.find(ee=>ee.startsWith("fs_page,"));if(!G)throw new Error("ERR: fs_read_page missing data");const[,F,W,q,re=""]=G.split(",",5);if(F!==i)throw new Error("ERR: fs_read_page stale data");const be=parseInt(W??"",10),me=parseInt(q??"",10);if(!Number.isFinite(be)||be!==p||!Number.isFinite(me))throw new Error("ERR: fs_read_page invalid data");g=me,y+=re,p+=Math.floor(re.length/2);const K=g>0?8+Math.min(87,Math.round(p/g*87)):95;if(c==null||c(K,S),p>=g||re.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(yh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,f,h){let b,p=Math.min(a,f);for(;p>=0;){const g=tc[p],y=p===0?Ub:1,S=p===0?zb:Lb;for(let k=1;k<=y;k+=1){Zr(h);try{return{lines:await this.collectLines(`fs_read_page,${Ri(i)},${c},${g}`,S,`fs_read_page ${c}`,h),nextPageSizeIndex:Math.min(p+1,f),maxPageSizeIndex:f}}catch(T){if(h!=null&&h.aborted||gh(T))throw T;if(b=T,k<y||p>0){const O=p>0&&k>=y?tc[p-1]:g;this.log("warning",`fs_read_page ${c} (${g} bytes) fejlede; prøver ${O} bytes`),await Mf(80+k*80)}}}if(p===0)break;f=Math.max(0,p-1),p=f}throw b instanceof Error?b:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,f){const h=`Indlæser ${Df(i)}...`,b=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,h);const p=await this.collectLines(`fs_read_stream,${Ri(i)},${b}`,Hb,`fs_read_stream ${i}`,f,(K,ee)=>{const pe=8+Math.round(Math.min(K,ee)/Math.max(1,ee)*87);a==null||a(Math.min(95,pe),h)});Zr(f);const g=p.find(K=>K.startsWith("ERR"));if(g)throw new Error(g);const y=p.find(K=>K.startsWith("fs_stream_begin,")),S=p.find(K=>K.startsWith("fs_stream_end,"));if(!y||!S)throw new Error("ERR: fs_read_stream missing metadata");const[,k,T]=y.split(",",4),[,D,O,V]=S.split(",",4),G=parseInt(T??"",10),F=parseInt(O??"",10),W=parseInt(V??"",10);if(k!==i||D!==i||!Number.isFinite(G)||G!==F||!Number.isFinite(W))throw new Error("ERR: fs_read_stream invalid metadata");let q=0,re="";for(const K of p){if(!K.startsWith("fs_stream_chunk,"))continue;const[,ee,pe=""]=K.split(",",3),ye=parseInt(ee??"",10);if(!Number.isFinite(ye)||ye!==q||pe.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");re+=pe,q+=Math.floor(pe.length/2)}if(q!==G)throw new Error("ERR: fs_read_stream size mismatch");const be=yh(re);if(bh(be)!==W)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(be)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Ri(i)}`,S=>S==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),h=[...f].map(S=>S.toString(16).padStart(2,"0")).join(""),b=[];for(let S=0;S<h.length;S+=160)b.push(`fs_write_chunk,${h.slice(S,S+160)}`);b.push("fs_write_end");const p=bh(f),g=this.waitFor(S=>S==="ACK:fs_write_done"||S.startsWith("ACK:fs_write_done,")||S.startsWith("ERR"),Bb,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(b,(S,k,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const D=Math.min(f.length,S*80),O=18+Math.round(S/Math.max(1,k-1)*67);a==null||a(Math.min(85,O),`Sender ${D}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const y=await g;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,S,k]=y.split(",",3),T=parseInt(S??"",10),D=parseInt(k??"",10);if(T!==f.length||D!==p)throw new Error(`ERR: BLE-verificering fejlede for ${Df(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${Ri(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Mf(Ob)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[b,p]=a.value;return this.pendingSliders.delete(b),p}const f=this.pendingToggles.entries().next();if(!f.done){const[b,p]=f.value;return this.pendingToggles.delete(b),p}const h=this.pendingJoysticks.entries().next();if(!h.done){const[b,p]=h.value;return this.pendingJoysticks.delete(b),p}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,i)}}function Fb(s){let i=0;for(let c=0;c<tc.length;c+=1)tc[c]<=s&&(i=c);return i}function Df(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")||s}function bh(s){let i=0;for(const c of s)i=i+c>>>0;return i}function yh(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}function vh(s){const i=(c,a)=>Number.isFinite(c)?Math.max(jb,Math.min(Mb,c)):a;for(const c of s){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),h=i(parseInt(f[1],10),ia),b=i(parseInt(f[2],10),bs);return{cols:h,rows:b}}}return{cols:ia,rows:bs}}function xh(s){const i=new Map;for(const c of s){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[h,b,p,g,y,S,k,T,D,O,V,G,F]=f;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"&&h!=="joystick"&&h!=="dpad"&&h!=="plot"||i.has(b))continue;const W=E=>{if(E==="n")return null;const L=parseInt(E,10);return Number.isNaN(L)?null:L},q=parseInt(k,10)||0,re=T!==void 0?parseInt(T,10):0,be=D!==void 0?parseInt(D,10):100,me=["none","bottom","middle","top"].includes(O??"")?O:"none",K=T!==void 0?parseInt(T,10)===1:!1,ee=T!==void 0?parseFloat(T):0,pe=D!==void 0?parseFloat(D):180,ye=O!==void 0?parseFloat(O):200,De=V!==void 0?parseInt(V,10):1200,J=(E,L)=>["none","bottom","middle","top"].includes(E??"")?E:L,We=T!==void 0?parseInt(T,10):-100,Oe=D!==void 0?parseInt(D,10):100,Pe=O!==void 0?parseInt(O,10):-100,I=V!==void 0?parseInt(V,10):100,te=T!==void 0?parseFloat(T):0,ue=D!==void 0?parseFloat(D):100,ce=O!==void 0?parseInt(O,10):30,we=V==="bar"?"bar":"line";i.set(b,{type:h,name:b,centerX2:W(p),centerY2:W(g),spanX:W(y),spanY:W(S),rotation:[0,90,180,270].includes(q)?q:0,...h==="slider"?{sliderMin:Number.isFinite(re)?re:0,sliderMax:Number.isFinite(be)?be:100,sliderRecenter:me}:{},...h==="toggle"?{toggleInitial:K}:{},...h==="radar"?{radarMinAngle:Number.isFinite(ee)?ee:0,radarMaxAngle:Number.isFinite(pe)?pe:180,radarMaxDistance:Number.isFinite(ye)&&ye>0?ye:200,radarFadeMs:Number.isFinite(De)&&De>0?De:1200}:{},...h==="joystick"?{joystickXMin:Number.isFinite(We)?We:-100,joystickXMax:Number.isFinite(Oe)&&Oe!==We?Oe:100,joystickYMin:Number.isFinite(Pe)?Pe:-100,joystickYMax:Number.isFinite(I)&&I!==Pe?I:100,joystickXRecenter:J(G,"middle"),joystickYRecenter:J(F,"middle")}:{},...h==="plot"?{plotMin:Number.isFinite(te)?te:0,plotMax:Number.isFinite(ue)&&ue!==te?ue:te+100,plotHistory:Number.isFinite(ce)&&ce>1?ce:30,plotStyle:we}:{}})}return[...i.values()]}let ie=null,os=null,Sh=0,Pl=!1;function Gb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function kh(s){return new Promise(i=>setTimeout(i,s))}function Af(s,i){const c=i.userID.toLowerCase();return s.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?i.username:a.ownerName}})}function Of(s,i){return(s.name?o_(s.name):"")||(i==null?void 0:i.deviceName)||"Pico"}function Vb(s){return Object.fromEntries(s.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function wh(s,i){const c=Vb(s);for(const a of s)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const le=pb((s,i)=>{function c(p,g){s(y=>({logs:[{level:p,message:g,time:Gb()},...y.logs].slice(0,200)}))}function a(p){os&&clearTimeout(os),Sh+=1,s({toast:{message:p,id:Sh}}),os=setTimeout(()=>s({toast:null}),4500)}function f(p=null){s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p})}function h(p){return{deviceID:p.deviceID,deviceName:p.deviceName,ownerID:p.ownerID,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}}function b(p){const{screen:g,active:y,picoIdeOrigin:S}=i();if(Pl){Pl=!1;return}p&&(c("warning",p),a(p)),(g==="control"||g==="connection"||g==="create"||g==="ide"&&S==="control")&&f(y?h(y):null)}return ie=new Pb({onProgress:(p,g)=>s({progress:{value:p,label:g}}),onLog:(p,g)=>c(p,g),onRadar:(p,g,y)=>{const S=Date.now(),k={id:`${S}-${Math.random().toString(36).slice(2)}`,angle:g,distance:y,createdAt:S};s(T=>{const D=T.layout.find(G=>G.type==="radar"&&G.name===p),O=(D==null?void 0:D.radarFadeMs)??1200,V=T.radarPings[p]??[];return{radarPings:{...T.radarPings,[p]:[...V.filter(G=>S-G.createdAt<=O),k].slice(-80)}}})},onText:(p,g)=>{s(y=>({textValues:{...y.textValues,[p]:g}}))},onToggleState:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}}))},onPlot:(p,g)=>{const y=Date.now(),S={id:`${y}-${Math.random().toString(36).slice(2)}`,value:g,createdAt:y};s(k=>{const T=k.layout.find(V=>V.type==="plot"&&V.name===p),D=Math.max(2,(T==null?void 0:T.plotHistory)??30),O=k.plotSeries[p]??[];return{plotSeries:{...k.plotSeries,[p]:[...O,S].slice(-D)}}})},onPlotClear:p=>{s(g=>({plotSeries:{...g.plotSeries,[p]:[]}}))},onDisconnect:p=>b(p)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const p=_b(),g=p?Af(nc(),p):nc();p&&na(g),s({user:p,savedDevices:g,splashTarget:p?"dashboard":"intro"})},finishSplash:()=>{const p=i().splashTarget;s({screen:p??"intro"})},createUser:p=>{const g=p.trim();if(!g)return;const y={username:g,userID:hb()};Tf(y),s({user:y,screen:"dashboard"})},findDevice:async()=>{try{const p=await Tb();await i().connectToDevice(p)}catch(p){p instanceof Error&&p.name!=="NotFoundError"&&c("error",p.message)}},connectToDevice:async(p,g)=>{var S,k,T;const y=i().user;if(!(!y||!ie)){Pl=!1,s({screen:"connection",connecting:{name:Of(p,g),iconID:(g==null?void 0:g.deviceIconID)??0},progress:{value:0,label:"Forbinder..."},sliderValues:{},radarPings:{},textValues:{},plotSeries:{}});try{await ie.connect(p);const D=await ie.runHandshake(y),O=p.id,V=(D.kind==="owned"||D.kind==="unowned")&&((S=D.deviceName)==null?void 0:S.trim())||Of(p,g);if(s(re=>re.connecting?{connecting:{...re.connecting,name:V}}:{}),D.kind==="denied"){const be=`Du kan ikke forbinde, fordi ${((k=D.ownerName)==null?void 0:k.trim())||((T=g==null?void 0:g.ownerName)==null?void 0:T.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",be),a(be),s({screen:"dashboard",connecting:null}),await ie.disconnect();return}if(D.kind==="unowned"){s({active:{deviceID:O,deviceName:V,ownerID:y.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:y.username,gridCols:ia,gridRows:bs},screen:"create"});return}const G={deviceID:O,deviceName:V,ownerID:D.ownerID,deviceIconID:D.iconID,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?y.username:D.ownerName??(g==null?void 0:g.ownerName)};s({savedDevices:Nf(G)});const F=await ie.requestLayout(),W=vh(F),q=xh(F);s({layout:q,toggleValues:wh(q,i().toggleValues),active:{deviceID:O,deviceName:V,ownerID:D.ownerID,iconID:D.iconID,canEdit:D.canEdit,canEditCode:D.canEditCode,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?y.username:D.ownerName??(g==null?void 0:g.ownerName),gridCols:W.cols,gridRows:W.rows},screen:"control",connecting:null,connectionLost:null})}catch(D){const O=D instanceof Error?D.message:"Forbindelsen mislykkedes.";c("error",O),a("Forbindelsen mislykkedes."),s({screen:"dashboard",connecting:null}),await ie.disconnect().catch(()=>{})}}},finishCreate:async(p,g,y,S,k,T)=>{const{user:D,active:O}=i();if(!(!D||!O||!ie))try{ie.setBusy(!0),await ie.create(D,p,g,y,S,k,T),ie.setBusy(!1);const V={deviceID:O.deviceID,deviceName:O.deviceName,ownerID:D.userID,deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&S,isOwnedByMe:!0,ownerName:D.username};s({savedDevices:Nf(V)});const G=await ie.requestLayout(),F=vh(G),W=xh(G);s({layout:W,toggleValues:wh(W,i().toggleValues),active:{...O,ownerID:D.userID,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&S,ownerName:D.username,gridCols:F.cols,gridRows:F.rows},screen:"control"})}catch(V){ie.setBusy(!1);const G=V instanceof Error?V.message:"Oprettelse mislykkedes.";c("error",G),a("Oprettelse mislykkedes."),s({screen:"dashboard"}),await ie.disconnect().catch(()=>{})}},saveDeviceSettings:async(p,g,y,S,k,T)=>{const{active:D,user:O}=i();if(!(!D||!ie||!D.isOwnedByMe))try{ie.setBusy(!0),await ie.updateDeviceSettings(p,g,y,S,k,T,O==null?void 0:O.username);const V={...D,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&S,ownerName:(O==null?void 0:O.username)??D.ownerName,gridCols:k,gridRows:T},G={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(O==null?void 0:O.userID),deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&S,isOwnedByMe:!0,ownerName:(O==null?void 0:O.username)??D.ownerName};s({active:V,savedDevices:Nf(G)}),a("Enhedsindstillinger gemt.")}catch(V){c("error",V instanceof Error?V.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{ie.setBusy(!1)}},cancelCreate:async()=>{ie&&await ie.disconnect().catch(()=>{}),s({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Pl=!0,f(null),ie&&await ie.disconnect().catch(()=>{}),Pl=!1},removeSavedDevice:p=>{s({savedDevices:vb(p)})},clearSavedDevices:()=>{gb(),s({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Pl=!0,ie!=null&&ie.connected&&await ie.disconnect().catch(()=>{}),bb(),window.location.reload()},updateUsername:p=>{const g=i().user,y=p.trim();if(!g||!y)return;const S={...g,username:y};Tf(S),s(k=>{var D;const T=Af(k.savedDevices,S);return na(T),{user:S,active:(D=k.active)!=null&&D.isOwnedByMe?{...k.active,ownerName:y}:k.active,savedDevices:T}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const p=i().user;return p?Yb(p):null},applyOwnerPairingCode:p=>{var y;const g=$b(p,(y=i().user)==null?void 0:y.username);return g?(Tf(g),s(S=>{var T,D,O;const k=Af(S.savedDevices,g);return na(k),{user:g,active:((D=(T=S.active)==null?void 0:T.ownerID)==null?void 0:D.toLowerCase())===g.userID.toLowerCase()||(O=S.active)!=null&&O.isOwnedByMe?{...S.active,isOwnedByMe:!0,ownerID:g.userID,ownerName:g.username}:S.active,savedDevices:k}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const p=i().screen==="control"&&!!(ie!=null&&ie.connected),g=i().active;if(p&&g&&!g.isOwnedByMe&&!g.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),s({sideMenuOpen:!1});return}s(y=>({screen:"ide",picoIdeOrigin:p?"control":"dashboard",active:p?y.active:null,layout:p?y.layout:[],sliderValues:p?y.sliderValues:{},toggleValues:p?y.toggleValues:{},radarPings:p?y.radarPings:{},textValues:p?y.textValues:{},plotSeries:p?y.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:p,active:g}=i();s({screen:p==="control"&&g&&(ie!=null&&ie.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ie!=null&&ie.connected),bleListFiles:async()=>ie!=null&&ie.connected?ie.listFiles("/"):[],bleReadText:async(p,g,y)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");return ie.readText(p,g,y)},bleWriteText:async(p,g,y)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.writeText(p,g,y)},bleDeleteFile:async p=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.deleteFile(p)},bleRestart:async()=>{ie!=null&&ie.connected&&await ie.restart()},bleRestartAndReconnect:async(p="control")=>{const{active:g}=i();if(!(ie!=null&&ie.connected)||!g)return!1;const y={deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIconID:g.iconID,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName};Pl=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ie.restart()}catch{}s({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:y.deviceName,iconID:y.deviceIconID}});for(let S=0;S<12&&(ie!=null&&ie.connected);S+=1)await kh(250);ie!=null&&ie.connected||(Pl=!1);for(let S=1;S<=8;S+=1){await kh(S===1?1200:850);try{const T=(await c_()).find(D=>D.id===y.deviceID);if(!T){s({progress:{value:Math.min(88,20+S*8),label:"Venter på browser-tilladelse..."}});continue}return s({progress:{value:Math.min(92,24+S*8),label:`Genforbinder (${S}/8)...`}}),await i().connectToDevice(T,y),p==="ide"&&s(D=>({screen:"ide",picoIdeOrigin:"control",active:D.active,layout:D.layout,sliderValues:D.sliderValues,toggleValues:D.toggleValues,radarPings:D.radarPings,textValues:D.textValues,plotSeries:D.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(k){c("warning",k instanceof Error?k.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Pl=!1,s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:y}),!1},reconnectLostDevice:async()=>{var g;const p=i().connectionLost;if(p){s({connectionLost:null});try{if((g=navigator.bluetooth)!=null&&g.getDevices){const S=(await navigator.bluetooth.getDevices()).find(k=>k.id===p.deviceID);if(S){await i().connectToDevice(S,p);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>s({connectionLost:null}),sendButton:(p,g)=>ie==null?void 0:ie.enqueueButton(p,g),sendSlider:(p,g)=>{s(y=>({sliderValues:{...y.sliderValues,[p]:g}})),ie==null||ie.enqueueSlider(p,g)},sendToggle:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}})),ie==null||ie.enqueueToggle(p,g)},sendJoystick:(p,g,y)=>ie==null?void 0:ie.enqueueJoystick(p,g,y),sendDpad:(p,g,y)=>ie==null?void 0:ie.enqueueDpad(p,g,y),saveLayout:async p=>{if(ie)try{ie.setBusy(!0),await ie.saveLayout(p),s({layout:p,editMode:!1})}catch(g){c("error",g instanceof Error?g.message:"Kunne ikke gemme layout.")}finally{ie.setBusy(!1)}},setEditMode:p=>s({editMode:p,sideMenuOpen:!1,menuPage:null}),setDashboardPage:p=>s({dashboardPage:p}),toggleSideMenu:p=>s(g=>({sideMenuOpen:p??!g.sideMenuOpen})),toggleDebugger:p=>s(g=>({debuggerOpen:p??!g.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:p=>s({menuPage:p,sideMenuOpen:!1}),closeMenuPage:()=>s({menuPage:null}),clearLogs:()=>s({logs:[]}),log:(p,g)=>c(p,g),askConfirm:p=>s({confirmDialog:p}),closeConfirm:()=>s({confirmDialog:null}),showToast:p=>a(p),dismissToast:()=>{os&&clearTimeout(os),s({toast:null})}}}),Ff="PKP-EJER";function Yb(s){var a;const i=s.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${Ff}-${c}-${m_(i)}`}function $b(s,i="Ejer"){const c=s.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Ff}-`))return null;const a=c.slice(Ff.length+1).split("-").filter(Boolean),f=a.pop()??"",h=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||f!==m_(h)?null:{userID:h,username:i.trim()||"Ejer"}}function m_(s){let i=2166136261;for(const c of s.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const cc="./",p_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function aa(s){const i=s>=0&&s<p_.length?s:0;return`${cc}device-icons/${i}.png`}const qb=`${cc}art/logo.png`,Xb=`${cc}art/Teknologiskolen_logo.png`,Kb=`${cc}art/logo_teknologiskolen_white.png`,Qb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function it({name:s,size:i=24,className:c}){return u.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Qb[s]})}const Wb=1850,Zb=450;function Jb(){const s=le(a=>a.splashTarget),i=le(a=>a.finishSplash),c=s?"splash-screen-animation splash-ready":"splash-pending";return U.useEffect(()=>{if(!s)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Zb:Wb,h=window.setTimeout(i,f);return()=>window.clearTimeout(h)},[i,s]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:qb,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Eh(){const s=le(f=>f.createUser),[i,c]=U.useState(""),a=i.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Xb,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:i,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>s(i),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:gs})]})}function nd({title:s,onMenu:i}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:s}),u.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:u.jsx(it,{name:"menu"})})]})})}function On({title:s,onClose:i,children:c,closeVariant:a="plain"}){const f=a==="circle",h=U.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:b=>{h.current=b.target===b.currentTarget},onClick:b=>{b.target===b.currentTarget&&h.current&&i(),h.current=!1},children:u.jsxs("div",{className:"modal",onClick:b=>b.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:s}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:u.jsx(it,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function Th(){const s=le(T=>T.savedDevices),i=le(T=>T.toggleSideMenu),c=le(T=>T.findDevice),a=le(T=>T.removeSavedDevice),f=le(T=>T.askConfirm),h=le(T=>T.dashboardPage),b=le(T=>T.setDashboardPage),p=l0(),[g,y]=U.useState(null),S=oc(),k=s.filter(T=>h==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(t0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(nd,{title:"Hovedmenu",onMenu:()=>i()}),u.jsxs("div",{className:"content dash-content",children:[!S&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>b("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>b("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:k.length===0?u.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):k.map(T=>u.jsx(e0,{device:T,disabled:!S,onConnect:()=>p(T),onSettings:()=>y(T)},T.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!S,"aria-label":"Find enhed",children:u.jsx(it,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:gs}),g&&u.jsx(On,{title:"Enhedsindstillinger",onClose:()=>y(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:aa(g.deviceIconID),alt:""}),u.jsx("strong",{children:g.deviceName})]}),u.jsx(cs,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(cs,{label:"Ejer",value:n0(g)}),u.jsx(cs,{label:"Offentlig",value:g.canOthersConnect?"Ja":"Nej"}),u.jsx(cs,{label:"Andre må redigere layout",value:g.canOthersEdit?"Ja":"Nej"}),u.jsx(cs,{label:"Andre må redigere kode",value:g.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!S,onClick:()=>{const T=g;y(null),p(T)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${g.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(g.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function e0({device:s,disabled:i,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[u.jsx("img",{className:"device-tile-icon",src:aa(s.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:s.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(it,{name:"settings"})})]})}function cs({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function n0(s){var i;return s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger"}function t0(s,i){return s.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function l0(){const s=le(a=>a.connectToDevice),i=le(a=>a.findDevice),c=le(a=>a.log);return async a=>{const h=(await c_()).find(b=>b.id===a.deviceID);h?await s(h,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function i0(){const s=le(c=>c.connecting),i=le(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:aa((s==null?void 0:s.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(s==null?void 0:s.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function h_({selected:s,onSelect:i,onClose:c}){return u.jsx(On,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:p_.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===s?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:aa(a.id),alt:""})},a.id))})})}function r0(){const s=le(re=>re.finishCreate),i=le(re=>re.cancelCreate),[c,a]=U.useState(0),[f,h]=U.useState(!1),[b,p]=U.useState(!1),[g,y]=U.useState(!1),[S,k]=U.useState(!1),[T,D]=U.useState(ia),[O,V]=U.useState(bs),[G,F]=U.useState(!1),W=re=>Number.isFinite(re)?Math.max(ta,Math.min(la,Math.round(re))):ia;async function q(){F(!0),await s(c,b,b&&g,b&&S,W(T),W(O))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:aa(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(it,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:b?"":"active",onClick:()=>p(!1),children:"Privat"}),u.jsx("button",{type:"button",className:b?"active":"",onClick:()=>p(!0),children:"Offentlig"})]}),b&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>y(!1),children:"Nej"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>y(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:S?"":"active",onClick:()=>k(!1),children:"Nej"}),u.jsx("button",{type:"button",className:S?"active":"",onClick:()=>k(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:ta,max:la,value:Number.isNaN(T)?"":T,onChange:re=>D(parseInt(re.target.value,10)),onBlur:()=>D(W(T))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:ta,max:la,value:Number.isNaN(O)?"":O,onChange:re=>V(parseInt(re.target.value,10)),onBlur:()=>V(W(O))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:G,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:q,disabled:G,children:G?"Opretter...":"Opret"})]})]}),f&&u.jsx(h_,{selected:c,onSelect:a,onClose:()=>h(!1)}),u.jsx("span",{className:"version",children:gs})]})}const ra=8;function Zo(s){return Math.max(5,Math.min(22,s))}function a0(s,i,c){const a=Math.max(1,s.length),f=(i-ra*2)/(a*.58),h=(c-ra*2)*.48;return Zo(Math.min(f,h))}function cr(s,i,c){switch(c){case 90:return{x:-i,y:s};case 180:return{x:-s,y:-i};case 270:return{x:i,y:-s};default:return{x:s,y:i}}}function lc(s){return(360-s)%360}function s0(s,i,c,a){const f=a===90||a===270;return a0(s,f?c:i,f?i:c)}function ic({name:s,width:i,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:s0(s,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:s})}function o0(s,i,c,a,f){const h=s.trim().split(/\s+/).filter(Boolean),b=Math.max(1,s.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),p=f?Zo(Math.min(i/4.6,c/4.6,12)):0,g=f?p+ra:ra;if(a){const k=Math.max(1,c-g*2);return{fontSize:Zo(Math.min(i*.48,k/(b*1.04))),endFontSize:p,centerInset:f?{top:g,bottom:g}:{}}}const y=Math.max(1,i-g*4.2);return{fontSize:Zo(Math.min(c*.42,y/(b*.58))),endFontSize:p,centerInset:f?{left:g*2.1,right:g*2.1}:{}}}function c0({control:s,rect:i,disabled:c,latestValue:a,toggleValue:f,radarPings:h=[],textValue:b,plotPoints:p=[],onButton:g,onSlider:y,onToggle:S,onJoystick:k,onDpad:T}){const D=U.useRef(!1),O={left:i.cx,top:i.cy,width:i.width,height:i.height};if(s.type==="button"){const V=()=>{c||!D.current||(D.current=!1,g(s.name,!1))};return u.jsx("div",{className:"control",style:O,children:u.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:G=>{var F,W;c||(G.preventDefault(),(W=(F=G.currentTarget).setPointerCapture)==null||W.call(F,G.pointerId),D.current=!0,g(s.name,!0))},onPointerUp:G=>{var F,W;G.preventDefault(),(W=(F=G.currentTarget).releasePointerCapture)==null||W.call(F,G.pointerId),V()},onPointerCancel:V,onLostPointerCapture:V,children:u.jsx(ic,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}if(s.type==="toggle"){const V=!!f;return u.jsx("div",{className:"control",style:O,children:u.jsx("button",{className:`control-toggle ${V?"on":""}`,type:"button",disabled:c,"aria-pressed":V,style:{width:"100%",height:"100%"},onPointerDown:G=>{c||(G.preventDefault(),S(s.name,!V))},children:u.jsx(ic,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}return s.type==="radar"?u.jsx("div",{className:"control",style:O,children:u.jsx(g_,{control:s,pings:h,width:i.width,height:i.height})}):s.type==="text"?u.jsx("div",{className:"control",style:O,children:u.jsx(__,{message:b??s.name,width:i.width,height:i.height,rotation:s.rotation})}):s.type==="plot"?u.jsx("div",{className:"control",style:O,children:u.jsx(y_,{control:s,points:p,width:i.width,height:i.height})}):s.type==="joystick"?u.jsx("div",{className:"control",style:O,children:u.jsx(N0,{control:s,disabled:c,onJoystick:k,width:i.width,height:i.height})}):s.type==="dpad"?u.jsx("div",{className:"control",style:O,children:u.jsx(B0,{control:s,disabled:c,onDpad:T})}):u.jsx("div",{className:"control",style:O,children:u.jsx(T0,{control:s,disabled:c,latestValue:a,onSlider:y,width:i.width,height:i.height})})}function u0(s,i,c){const f=(s.trim()||" ").split(`
`),h=f.reduce((T,D)=>D.split(/\s+/).filter(Boolean).reduce((V,G)=>Math.max(V,G.length),T),1),b=Math.max(1,Math.floor(h*1.9)),p=Math.max(f.length,f.reduce((T,D)=>T+Math.max(1,Math.ceil(Math.max(1,D.trim().length)/b)),0)),g=Math.max(1,i-ra*3),y=Math.max(1,c-ra*3),S=g/(h*.58),k=y/(p*1.16);return Math.max(7,Math.min(24,S,k))}function __({message:s,width:i,height:c,rotation:a=0}){const f=s.trim()||"...",h=a===90||a===270,b=u0(f,h?c:i,h?i:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:b},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function g_({control:s,pings:i,width:c,height:a,preview:f=!1}){const[,h]=U.useState(0),b=Math.max(120,s.radarFadeMs??1200),p=s.radarMinAngle??0,g=s.radarMaxAngle??180,y=et(p),S=et(g),k=Math.abs(g-p)>=360||y===S&&p!==g,T=Math.max(1,s.radarMaxDistance??200),D=Date.now(),O=i[i.length-1],V=s.rotation,G=et(y+V),F=et(S+V),W=v0(y,S),q=((O==null?void 0:O.angle)??W)+V,re=f?[{id:"preview",angle:W,distance:T*.62,createdAt:D}]:i.filter(ce=>D-ce.createdAt<=b),be=!k,me=Math.max(8,Math.min(12,Math.min(c,a)*.16)),K=Math.max(7,me*.85),ee=0,pe=0,ye=1,De=_0(k,G,F,V,T),J=k?{x:-1.12,y:-1.12,width:2.24,height:2.24}:g0(G,F,De.map(ce=>ce.point)),We=k?"":f0(ee,pe,ye,G,F),Oe=Mh(p),Pe=Mh(g),I=be?y0(G,F,J,c,a,Oe,Pe,me):null,te=De.map(ce=>{const we=b_(ce.point,J,c,a);return{key:ce.key,value:ce.value,x:we.x,y:we.y}});U.useEffect(()=>{if(f||i.length===0)return;const ce=window.setInterval(()=>h(we=>we+1),120);return()=>window.clearInterval(ce)},[b,i.length,f]);const ue=jt(ee,pe,ye,q);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${J.x} ${J.y} ${J.width} ${J.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[k?u.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:pe,r:ye}):u.jsx("path",{className:"radar-sector-fill",d:We}),[.25,.5,.75,1].map(ce=>k?u.jsx("circle",{className:"radar-ring",cx:ee,cy:pe,r:ye*ce},ce):u.jsx("path",{className:"radar-ring",d:d0(ee,pe,ye*ce,G,F)},ce)),!k&&u.jsx(Nh,{cx:ee,cy:pe,radius:ye,angle:G}),!k&&u.jsx(Nh,{cx:ee,cy:pe,radius:ye,angle:F}),u.jsx("line",{className:"radar-sweep",x1:ee,y1:pe,x2:ue.x,y2:ue.y}),re.map(ce=>{const we=f?0:D-ce.createdAt,E=Math.max(0,1-we/b),L=Math.max(0,Math.min(T,ce.distance)),ne=jt(ee,pe,ye*(L/T),ce.angle+V);return u.jsx("circle",{className:"radar-ping",cx:ne.x,cy:ne.y,r:Math.max(.025,Math.min(J.width,J.height)*.025),opacity:E},ce.id)})]}),be&&I&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:I.min.x,top:I.min.y,fontSize:me},children:Oe}),u.jsx("span",{className:"radar-angle-label",style:{left:I.max.x,top:I.max.y,fontSize:me},children:Pe})]}),te.map(ce=>u.jsx("span",{className:"radar-range-label",style:{left:ce.x,top:ce.y,fontSize:K},children:ce.value},ce.key))]})}function Nh({cx:s,cy:i,radius:c,angle:a}){const f=jt(s,i,c,a);return u.jsx("line",{className:"radar-boundary",x1:s,y1:i,x2:f.x,y2:f.y})}function jt(s,i,c,a){const f=(et(a)-90)*Math.PI/180;return{x:s+Math.cos(f)*c,y:i+Math.sin(f)*c}}function f0(s,i,c,a,f){const h=jt(s,i,c,a),b=jt(s,i,c,f),p=uc(a,f)>180?1:0;return`M ${s} ${i} L ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y} Z`}function d0(s,i,c,a,f){const h=jt(s,i,c,a),b=jt(s,i,c,f),p=uc(a,f)>180?1:0;return`M ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y}`}function uc(s,i){const c=et(s),a=et(i),f=a>=c?a-c:360-c+a;return f===0?360:f}const Xo=[.25,.5,.75,1],m0=.1,p0=.85,h0=55;function _0(s,i,c,a,f){const h=(g,y,S)=>({key:`${g}-${y}`,value:Math.round(f*y),point:jt(0,0,y,S)});if(s){const g=et(180+a);return Xo.map(y=>h("full",y,g))}const b=360-uc(i,c);if(b<h0){const g=et(c+b/2);return Xo.map(y=>h("mid",y,g))}const p=(g,y,S)=>{const k=Math.asin(Math.min(p0,m0/y))*180/Math.PI;return et(g+S*k)};return[...Xo.map(g=>h("min",g,p(i,g,-1))),...Xo.map(g=>h("max",g,p(c,g,1)))]}function g0(s,i,c=[]){const a=[{x:0,y:0},jt(0,0,1,s),jt(0,0,1,i),...c];for(const k of[0,90,180,270])b0(k,s,i)&&a.push(jt(0,0,1,k));const f=Math.min(...a.map(k=>k.x)),h=Math.max(...a.map(k=>k.x)),b=Math.min(...a.map(k=>k.y)),p=Math.max(...a.map(k=>k.y)),g=Math.max(.1,h-f),y=Math.max(.1,p-b),S=Math.max(g,y)*.24;return{x:f-S,y:b-S,width:g+S*2,height:y+S*2}}function b0(s,i,c){const a=et(i),f=et(s),h=uc(i,c),b=et(f-a);return b>=0&&b<=h}function y0(s,i,c,a,f,h,b,p){const y=jt(0,0,1.1,s),S=jt(0,0,1.1,i);return{min:Rh(y,c,a,f,h,p),max:Rh(S,c,a,f,b,p)}}function b_(s,i,c,a){return{x:(s.x-i.x)/i.width*c,y:(s.y-i.y)/i.height*a}}function Rh(s,i,c,a,f,h){const b=b_(s,i,c,a),p=Math.max(10,f.length*h*.62),g=h,y=7;return{x:jh(b.x,p/2+y,Math.max(p/2+y,c-p/2-y)),y:jh(b.y,g/2+y,Math.max(g/2+y,a-g/2-y))}}function jh(s,i,c){return Math.max(i,Math.min(c,s))}function Mh(s){return`${Math.round(s)}`}function et(s){return Number.isFinite(s)?(s%360+360)%360:0}function v0(s,i){const c=et(s),a=et(i),f=a>=c?a-c:360-c+a;return et(c+f/2)}function Cf(s){return Number.isInteger(s)?String(s):s.toFixed(1)}function x0(s){const i=Math.round(s/1e3);if(i<60)return`${i} sek`;const c=Math.round(i/60);if(c<60)return`${c} min`;const a=Math.floor(c/60),f=c%60;return f>0?`${a} t ${f} min`:`${a} t`}function S0(s,i){const c=Date.now();return Array.from({length:s},(a,f)=>{const h=f/Math.max(1,s-1),b=i==="bar"?.15+.7*Math.abs(Math.sin(h*Math.PI*1.4)):.5+.4*Math.sin(h*Math.PI*2.2);return{id:`demo-${f}`,value:b,createdAt:c}})}function y_({control:s,points:i,width:c,height:a,preview:f=!1}){const h=s.plotMin??0,b=s.plotMax??100,p=b>h?b-h:1,g=Math.max(2,s.plotHistory??30),y=s.plotStyle==="bar"?"bar":"line",S=f?S0(g,y):i.slice(-g),k=S[S.length-1],T=S.length>1?S[S.length-1].createdAt-S[0].createdAt:0,D=T>2e3?x0(T):null,O=Math.max(1,Math.min(c,a)),V=Math.max(8,Math.min(13,O*.14)),G=Math.max(6,Math.min(16,O*.12)),F=Math.max(1,c-G*2),W=Math.max(1,a-G*2),q=Math.max(1.5,Math.min(3.4,O*.045)),re=Math.max(q+1,Math.min(O*.09,q*2)),be=pe=>{const ye=Math.max(0,Math.min(1,(pe-h)/p));return G+(1-ye)*W},me=G+W,K=Math.max(1.5,O*.02),ee=S.map((pe,ye)=>({x:S.length>1?G+ye/(S.length-1)*F:G+F/2,y:be(pe.value)}));return u.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`0 0 ${c} ${a}`,"aria-hidden":"true",children:[[.25,.5,.75].map(pe=>u.jsx("line",{className:"plot-grid-line",x1:G,y1:G+pe*W,x2:G+F,y2:G+pe*W},pe)),y==="bar"?S.map((pe,ye)=>{const De=F/S.length,J=De*.62,We=G+ye*De+(De-J)/2,Oe=Math.min(be(pe.value),me-K),Pe=ye===S.length-1;return u.jsx("rect",{className:`plot-bar ${Pe?"latest":""}`,x:We,y:Oe,width:J,height:me-Oe},pe.id)}):u.jsxs(u.Fragment,{children:[ee.length>1&&u.jsx("polyline",{className:"plot-line",points:ee.map(pe=>`${pe.x},${pe.y}`).join(" ")}),ee.map((pe,ye)=>{var De;return u.jsx("circle",{className:`plot-dot ${ye===ee.length-1?"latest":""}`,cx:pe.x,cy:pe.y,r:ye===ee.length-1?re:q},(De=S[ye])==null?void 0:De.id)})]})]}),u.jsxs("div",{className:"plot-topleft-stack",style:{fontSize:V*.78},children:[u.jsx("span",{children:Cf(b)}),u.jsx("span",{className:"plot-topleft-name",style:{fontSize:V},children:s.name})]}),k!==void 0&&u.jsx("span",{className:"plot-value-label",style:{fontSize:V*1.15},children:Cf(k.value)}),u.jsx("span",{className:"plot-axis-label plot-axis-min",style:{fontSize:V*.78},children:Cf(h)}),D!==null&&u.jsxs("span",{className:"plot-time-label",style:{fontSize:V*.72},children:[D," siden"]})]})}function k0(s,i){if(!i)return s;const c=s.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((h,b)=>u.jsx("span",{children:h},`${h}-${b}`))},`${a}-${f}`))})}function w0(s){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return s===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:s===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:s===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function E0({name:s,vertical:i,rotation:c,color:a,fontSize:f,endFontSize:h,centerInset:b,lowLabel:p,highLabel:g,showEnds:y}){const S=y?w0(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,...b,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:k0(s,i)}),S&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...S.low,fontWeight:800,fontSize:h},children:p}),u.jsx("div",{style:{...S.high,fontWeight:800,fontSize:h},children:g})]})]})}function v_({name:s,rotation:i,width:c,height:a,value:f,showEnds:h=!1,fillColor:b="var(--red)",lowLabel:p="0",highLabel:g="100"}){const y=i===90||i===270,{fontSize:S,endFontSize:k,centerInset:T}=o0(s,c,a,y,h);let D,O;i===0?(D={left:0,top:0,bottom:0,width:`${f}%`},O={left:0,top:0}):i===180?(D={right:0,top:0,bottom:0,width:`${f}%`},O={right:0,top:0}):i===90?(D={left:0,right:0,bottom:0,height:`${f}%`},O={left:0,bottom:0}):(D={left:0,right:0,top:0,height:`${f}%`},O={left:0,top:0});const V=G=>u.jsx(E0,{name:s,vertical:y,rotation:i,color:G,fontSize:S,endFontSize:k,centerInset:T,lowLabel:p,highLabel:g,showEnds:h});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:V("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:b,overflow:"hidden",...D},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...O},children:V("var(--white)")})})]})}function T0({control:s,disabled:i,latestValue:c,onSlider:a,width:f,height:h}){const b=U.useRef(null),p=s.sliderMin??0,g=s.sliderMax??100,[y,S]=U.useState(()=>c===void 0?Dh(s.sliderRecenter??"none"):Ah(c,p,g)),k=U.useRef(null),T=s.rotation;U.useEffect(()=>{c!==void 0&&(S(Ah(c,p,g)),k.current=c)},[c,p,g]);function D(F){const W=b.current;if(!W)return 0;const q=W.getBoundingClientRect();let re;return T===0?re=(F.clientX-q.left)/q.width:T===180?re=1-(F.clientX-q.left)/q.width:T===90?re=1-(F.clientY-q.top)/q.height:re=(F.clientY-q.top)/q.height,Math.max(0,Math.min(1,re))}function O(F){i||V(D(F))}function V(F){const W=Math.round(F*100),q=Math.round(p+(g-p)*F);S(W),q!==k.current&&(k.current=q,a(s.name,q))}function G(){const F=s.sliderRecenter??"none";i||F==="none"||V(Dh(F)/100)}return u.jsx("div",{ref:b,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:F=>{i||(F.preventDefault(),F.currentTarget.setPointerCapture(F.pointerId),O(F))},onPointerMove:F=>{F.buttons!==0&&O(F)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:u.jsx(v_,{name:s.name,rotation:T,width:f,height:h,value:y,showEnds:!0,lowLabel:String(p),highLabel:String(g)})})}function Dh(s){return s==="bottom"?0:s==="top"?100:s==="middle"?50:0}function Ah(s,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((s-i)/(c-i)*100)))}function Oh(s,i,c){return Math.round(i+(c-i)*(s+1)/2)}function Ch(s,i){return s==="bottom"?i?1:-1:s==="top"?i?-1:1:0}function Bh(s){return{nx:Ch(s.joystickXRecenter,!1),ny:Ch(s.joystickYRecenter,!0)}}function x_(s,i){const c=Math.min(s,i),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function S_({control:s,width:i,height:c,pos:a,dragging:f=!1}){const h=s.rotation,{knobRadius:b,reach:p}=x_(i,c),g=Math.max(7,Math.min(14,b*.62)),y=Math.max(7,Math.min(12,Math.min(i,c)*.1)),S=[{key:"xmax",value:s.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:s.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:s.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:s.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:p*2,height:p*2,transform:"translate(-50%, -50%)"}}),S.map(k=>{const T=cr(k.lx,k.ly,h);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:y,transform:`translate(-50%, -50%) translate(${T.x*p}px, ${T.y*p}px) rotate(${h}deg)`},children:k.value},k.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:b*2,height:b*2,fontSize:g,transform:`translate(calc(-50% + ${a.nx*p}px), calc(-50% + ${a.ny*p}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:s.rotation?`rotate(${s.rotation}deg)`:void 0,whiteSpace:s.rotation===90||s.rotation===270?"nowrap":void 0},children:s.name})})]})}function N0({control:s,disabled:i,onJoystick:c,width:a,height:f}){const h=s.rotation,b=U.useRef(null),[p,g]=U.useState(()=>{const W=Bh(s),q=cr(W.nx,W.ny,h);return{nx:q.x,ny:q.y}}),y=U.useRef(!1),S=U.useRef(null),k=s.joystickXMin??-100,T=s.joystickXMax??100,D=s.joystickYMin??-100,O=s.joystickYMax??100;function V(W,q){const re=cr(W,q,lc(h)),be=Oh(re.x,k,T),me=Oh(-re.y,D,O);(!S.current||S.current.x!==be||S.current.y!==me)&&(S.current={x:be,y:me},c(s.name,be,me))}function G(W){const q=b.current;if(!q)return;const re=q.getBoundingClientRect(),{reach:be}=x_(re.width,re.height);let me=(W.clientX-(re.left+re.width/2))/be,K=(W.clientY-(re.top+re.height/2))/be;const ee=Math.hypot(me,K);ee>1&&(me/=ee,K/=ee),g({nx:me,ny:K}),V(me,K)}function F(){const W=s.joystickXRecenter??"middle",q=s.joystickYRecenter??"middle";if(W==="none"&&q==="none")return;const re=cr(p.nx,p.ny,lc(h)),be=Bh(s),me={x:W==="none"?re.x:be.nx,y:q==="none"?re.y:be.ny},K=cr(me.x,me.y,h),ee={nx:K.x,ny:K.y};y.current=!1,g(ee),V(ee.nx,ee.ny)}return u.jsx("div",{ref:b,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:W=>{i||(W.preventDefault(),W.currentTarget.setPointerCapture(W.pointerId),y.current=!0,G(W))},onPointerMove:W=>{i||!y.current||W.buttons===0||G(W)},onPointerUp:F,onPointerCancel:F,onLostPointerCapture:F,children:u.jsx(S_,{control:s,width:a,height:f,pos:p,dragging:y.current})})}const R0=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],j0="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",M0=.1,D0={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},A0={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},O0=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Gf(s,i){return Math.hypot(s,i)<M0?null:Math.abs(s)>=Math.abs(i)?s>0?"right":"left":i>0?"down":"up"}function C0(s,i){const[c,a]=A0[s],f=cr(c,a,lc(i));return Gf(f.x,f.y)??s}function k_({control:s,active:i=null}){const c=s.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[R0.map(a=>u.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:j0},a.direction)),O0.map(a=>u.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:D0[C0(a.pos,c)]},a.pos))]})})}function B0({control:s,disabled:i,onDpad:c}){const a=U.useRef(null),f=U.useRef(null),h=U.useRef(!1),[b,p]=U.useState(null);function g(T){const D=a.current;if(!D)return{screen:null,logical:null};const O=D.getBoundingClientRect(),V=Math.min(O.width,O.height)/2,G=(T.clientX-(O.left+O.width/2))/V,F=(T.clientY-(O.top+O.height/2))/V,W=Gf(G,F),q=cr(G,F,lc(s.rotation)),re=Gf(q.x,q.y);return{screen:W,logical:re}}function y(T){const D=a.current;if(!D)return!1;const O=D.getBoundingClientRect(),V=(T.clientX-O.left)/O.width,G=(T.clientY-O.top)/O.height;return V>=0&&V<=1&&G>=0&&G<=1}function S(T){T.logical!==f.current&&(f.current&&c(s.name,f.current,!1),f.current=T.logical,T.logical&&c(s.name,T.logical,!0)),p(T.screen)}function k(){h.current=!1,S({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:T=>{i||!y(T)||(T.preventDefault(),T.currentTarget.setPointerCapture(T.pointerId),h.current=!0,S(g(T)))},onPointerMove:T=>{i||!h.current||T.buttons===0||S(g(T))},onPointerUp:k,onPointerCancel:k,onLostPointerCapture:k,children:u.jsx(k_,{control:s,active:b})})}const L0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},z0=["button","slider","toggle","radar","text","joystick","dpad","plot"];function U0({unplaced:s,onAdd:i,onClose:c}){const a=U.useMemo(()=>z0.filter(p=>s.some(g=>g.type===p)),[s]),[f,h]=U.useState(a[0]??"button"),b=s.filter(p=>p.type===f);return U.useEffect(()=>{a.length>0&&!a.includes(f)&&h(a[0])},[a,f]),u.jsxs(On,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(p=>u.jsx("button",{type:"button",className:f===p?"active":"",onClick:()=>h(p),children:L0[p]},p))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):b.map(p=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(p.name),children:[u.jsx("span",{children:p.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(it,{name:"plus",size:22})})]},p.name))})]})}function w_(s){const[i,c]=U.useState({w:0,h:0}),a=U.useRef(null),f=U.useRef(null);return U.useLayoutEffect(()=>{var g;const h=s.current;if(a.current===h)return;if((g=f.current)==null||g.disconnect(),f.current=null,a.current=h,!h){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const b=()=>{const y={w:h.clientWidth,h:h.clientHeight};c(S=>S.w===y.w&&S.h===y.h?S:y)};b();const p=new ResizeObserver(b);p.observe(h),f.current=p}),U.useEffect(()=>()=>{var h;(h=f.current)==null||h.disconnect(),f.current=null,a.current=null},[]),i}function ys(s){return s.centerX2!==null&&s.centerY2!==null&&s.spanX!==null&&s.spanY!==null}const I0=4,H0=5;function P0(s){return s==="joystick"||s==="dpad"?{spanX:6,spanY:6}:s==="plot"?{spanX:7,spanY:4}:{spanX:I0,spanY:H0}}function Lh(s){if(!ys(s))return null;const i=s.centerX2/2,c=s.centerY2/2;return{x0:i-s.spanX/2,x1:i+s.spanX/2,y0:c-s.spanY/2,y1:c+s.spanY/2}}function F0(s,i,c=.02){return s.x0<i.x1-c&&i.x0<s.x1-c&&s.y0<i.y1-c&&i.y0<s.y1-c}function G0(s,i){return Math.max(1,Math.min(i.cols-1,s))}function V0(s,i){return Math.max(1,Math.min(i.rows-1,s))}function Y0(s,i){return(s-i.margin)/i.stepX}function $0(s,i){return(i.areaH-s-i.margin)/i.stepY}function zh(s,i,c){const a=i%2,h=(s%2+2)%2===a?s:s+1,b=c*2;return Math.max(i,Math.min(b-i,h))}function q0(){const s=le(H=>H.layout),i=le(H=>H.active),c=le(H=>H.saveLayout),a=le(H=>H.setEditMode),f=le(H=>H.askConfirm),h=!!(i!=null&&i.canEdit),[b,p]=U.useState(()=>s.map(H=>({...H}))),[g,y]=U.useState(null),[S,k]=U.useState(!1),[T,D]=U.useState(null),[O,V]=U.useState(null),[G,F]=U.useState(null),[W,q]=U.useState(!1),re=U.useRef(null),be=w_(re),me=be.w>0&&be.h>0,K=u_(be.w,be.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),ee=U.useMemo(()=>me?Ab(K):[],[K,me]),pe=b.filter(ys),ye=b.filter(H=>!ys(H)),De=U.useMemo(()=>{const H=new Set;for(let A=0;A<pe.length;A+=1)for(let ae=A+1;ae<pe.length;ae+=1){const ve=Lh(pe[A]),Be=Lh(pe[ae]);ve&&Be&&F0(ve,Be)&&(H.add(pe[A].name),H.add(pe[ae].name))}return H},[pe]),J=De.size>0,We=U.useMemo(()=>Uh(b)!==Uh(s),[b,s]),Oe=U.useMemo(()=>{if(!T||!O)return null;const H=b.find(ve=>ve.name===T);if(!H||H.spanX===null||H.spanY===null)return null;const A=jf(O.cx,O.cy,H.spanX,H.spanY,K),ae=ps({...H,centerX2:A.centerX2,centerY2:A.centerY2},K);return ae?{name:H.name,rect:ae}:null},[b,T,O,K]);function Pe(H,A){p(ae=>ae.map(ve=>ve.name===H?A(ve):ve))}function I(H){const A=re.current;if(!A)return{x:0,y:0};const ae=A.getBoundingClientRect(),ve=A.clientWidth/ae.width,Be=A.clientHeight/ae.height;return{x:Math.max(0,Math.min(A.clientWidth,(H.clientX-ae.left)*ve)),y:Math.max(0,Math.min(A.clientHeight,(H.clientY-ae.top)*Be))}}function te(H,A){H.stopPropagation(),y(A.name);const ae=ps(A,K);ae&&(D(A.name),V({cx:ae.cx,cy:ae.cy}),H.currentTarget.setPointerCapture(H.pointerId))}function ue(H){if(T){const{x:A,y:ae}=I(H),ve=b.find(Ae=>Ae.name===T),Be=ve?ps(ve,K):null;if(!Be){V({cx:A,cy:ae});return}const Ge=Be.width/2,_e=Be.height/2;V({cx:Math.max(K.margin+Ge,Math.min(K.areaW-K.margin-Ge,A)),cy:Math.max(K.margin+_e,Math.min(K.areaH-K.margin-_e,ae))});return}if(G){const{x:A,y:ae}=I(H),{name:ve,side:Be,fixedWhole:Ge}=G;Pe(ve,_e=>{if(_e.spanX===null||_e.spanY===null||_e.centerX2===null||_e.centerY2===null)return _e;if(Be==="left"||Be==="right"){const mn=Math.round(Y0(A,K));if(Be==="right"){const $t=Math.max(Ge+1,Math.min(K.cols-1,mn))-Ge;return{..._e,spanX:$t,centerX2:Ge*2+$t}}const qn=Math.min(Ge-1,Math.max(0,mn)),Nn=Ge-qn;return{..._e,spanX:Nn,centerX2:Ge*2-Nn}}const Ae=Math.round($0(ae,K));if(Be==="top"){const qn=Math.max(Ge+1,Math.min(K.rows-1,Ae))-Ge;return{..._e,spanY:qn,centerY2:Ge*2+qn}}const vn=Math.min(Ge-1,Math.max(0,Ae)),Ce=Ge-vn;return{..._e,spanY:Ce,centerY2:Ge*2-Ce}})}}function ce(){if(T&&O){const H=b.find(A=>A.name===T);if(H&&H.spanX!==null&&H.spanY!==null){const A=jf(O.cx,O.cy,H.spanX,H.spanY,K);Pe(T,ae=>({...ae,centerX2:A.centerX2,centerY2:A.centerY2}))}}D(null),V(null),F(null)}function we(H,A,ae){if(H.stopPropagation(),A.centerX2===null||A.centerY2===null||A.spanX===null||A.spanY===null)return;const ve=(A.centerX2-A.spanX)/2,Be=(A.centerX2+A.spanX)/2,Ge=(A.centerY2-A.spanY)/2,_e=(A.centerY2+A.spanY)/2,Ae=ae==="right"?ve:ae==="left"?Be:ae==="top"?Ge:_e;y(A.name),F({name:A.name,side:ae,fixedWhole:Ae}),H.currentTarget.setPointerCapture(H.pointerId)}function E(H){Pe(H,A=>{const ae=(A.rotation+270)%360;if(A.spanX===null||A.spanY===null||A.centerX2===null||A.centerY2===null)return{...A,rotation:ae};const ve=G0(A.spanY,K),Be=V0(A.spanX,K);return{...A,rotation:ae,spanX:ve,spanY:Be,centerX2:zh(A.centerX2,ve,K.cols-1),centerY2:zh(A.centerY2,Be,K.rows-1)}})}function L(H){Pe(H,A=>({...A,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function ne(H){k(!1);const A=b.find(Ge=>Ge.name===H);if(!A)return;const{spanX:ae,spanY:ve}=P0(A.type),Be=jf(K.areaW/2,K.areaH/2,ae,ve,K);Pe(H,()=>({...A,spanX:ae,spanY:ve,rotation:0,centerX2:Be.centerX2,centerY2:Be.centerY2})),y(H)}async function oe(){J||(q(!0),await c(b),q(!1))}function xe(){if(!We){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:re,style:{touchAction:"none"},onPointerMove:ue,onPointerUp:ce,onPointerDown:()=>y(null),children:me&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:K.areaW,height:K.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:ee.map((H,A)=>u.jsx("circle",{cx:H.x,cy:H.y,r:2.5,fill:"rgba(198,80,78,0.45)"},A))}),Oe&&u.jsx("div",{className:"snap-preview",style:{left:Oe.rect.cx,top:Oe.rect.cy,width:Oe.rect.width,height:Oe.rect.height}}),pe.map(H=>{const A=T===H.name&&O,ae=ps(H,K);if(!ae)return null;const ve=A?O.cx:ae.cx,Be=A?O.cy:ae.cy,Ge=g===H.name,_e={left:ve,top:Be,width:ae.width,height:ae.height,outline:Ge?"3px solid var(--text)":"none",outlineOffset:2,zIndex:Ge?2:1};return u.jsxs("div",{className:`control ${De.has(H.name)?"colliding":""}`,style:_e,onPointerDown:Ae=>te(Ae,H),children:[H.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(ic,{name:H.name,width:ae.width,height:ae.height,rotation:H.rotation})}):H.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(ic,{name:H.name,width:ae.width,height:ae.height,rotation:H.rotation})}):H.type==="radar"?u.jsx(g_,{control:H,pings:[],width:ae.width,height:ae.height,preview:!0}):H.type==="plot"?u.jsx(y_,{control:H,points:[],width:ae.width,height:ae.height,preview:!0}):H.type==="text"?u.jsx(__,{message:H.name,width:ae.width,height:ae.height,rotation:H.rotation}):H.type==="joystick"?u.jsx(S_,{control:H,width:ae.width,height:ae.height,pos:{nx:0,ny:0}}):H.type==="dpad"?u.jsx(k_,{control:H}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(v_,{name:H.name,rotation:H.rotation,width:ae.width,height:ae.height,value:50,showEnds:!0,lowLabel:String(H.sliderMin??0),highLabel:String(H.sliderMax??100),fillColor:De.has(H.name)?"var(--disabled)":"var(--red)"})}),Ge&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:Ae=>we(Ae,H,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:Ae=>we(Ae,H,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:Ae=>we(Ae,H,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:Ae=>we(Ae,H,"right")}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-rotate","aria-label":"Roter",title:"Roter",onPointerDown:Ae=>Ae.stopPropagation(),onClick:()=>E(H.name),children:"⟲"}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-remove","aria-label":"Fjern fra layout",title:"Fjern fra layout",onPointerDown:Ae=>Ae.stopPropagation(),onClick:()=>L(H.name),children:u.jsx(it,{name:"delete",size:16})})]})]},H.name)}),h&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:H=>H.stopPropagation(),onClick:()=>k(!0),"aria-label":"Tilføj kontrol",children:u.jsx(it,{name:"plus",size:24})}),W&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:xe,disabled:W,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:oe,disabled:J||W,children:W?"Gemmer...":"Gem"})]}),S&&u.jsx(U0,{unplaced:ye,onAdd:ne,onClose:()=>k(!1)})]})}function Uh(s){return JSON.stringify(s.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function X0(){const s=le(q=>q.layout),i=le(q=>q.editMode),c=le(q=>q.active),a=le(q=>q.sliderValues),f=le(q=>q.toggleValues),h=le(q=>q.radarPings),b=le(q=>q.textValues),p=le(q=>q.plotSeries),g=le(q=>q.toggleSideMenu),y=le(q=>q.sendButton),S=le(q=>q.sendSlider),k=le(q=>q.sendToggle),T=le(q=>q.sendJoystick),D=le(q=>q.sendDpad),O=U.useRef(null),V=w_(O),G=u_(V.w,V.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),F=V.w>0&&V.h>0,W=s.filter(ys);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(nd,{title:"Pico Kontrol Panel",onMenu:()=>g()}),i?u.jsx(q0,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:O,children:F?W.map(q=>{const re=ps(q,G);return re?u.jsx(c0,{control:q,rect:re,disabled:!1,latestValue:q.type==="slider"?a[q.name]:void 0,toggleValue:q.type==="toggle"?f[q.name]:void 0,radarPings:q.type==="radar"?h[q.name]:void 0,textValue:q.type==="text"?b[q.name]:void 0,plotPoints:q.type==="plot"?p[q.name]:void 0,onButton:y,onSlider:S,onToggle:k,onJoystick:T,onDpad:D},q.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const K0="",Ih="",Hh="",sr="";function us(s){return new Promise(i=>setTimeout(i,s))}class Q0{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Hh),await us(80),await this.transport.write(Hh)}async friendlyRepl(){await this.transport.write(Ih)}async softReset(){await this.transport.write(sr)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await us(180)}),await us(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await us(80),await this.transport.write(`\r
`),await us(40),!(await this.collectUntil(async()=>{await this.transport.write(K0)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(sr)},f=>f.includes(`${sr}${sr}`)||f.includes(`${sr}>`),c);return await this.friendlyRepl().catch(()=>{}),W0(a)}collectUntil(i,c,a){return new Promise((f,h)=>{let b="",p=null;const g=setTimeout(()=>{p==null||p(),h(new Error("Timeout ved USB REPL kommando."))},a);p=this.transport.addDataListener(y=>{b+=y,c(b)&&(clearTimeout(g),p==null||p(),f(b))}),i().catch(y=>{clearTimeout(g),p==null||p(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Ih)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function W0(s){const i=s.indexOf("OK"),c=s.indexOf(sr,i>=0?i:0),a=c>=0?s.indexOf(sr,c+1):-1;if(i<0||c<0)return{output:s.trim(),error:"",raw:s};const f=s.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),h=a>=0?s.slice(c+1,a).trim():"";return{output:f,error:h,raw:s}}const Z0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],J0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],ji=J0.flatMap(({board:s,firmwareName:i})=>Z0.map(({version:c,date:a,stamp:f,tag:h})=>{const b=`${i}-${f}-${h}.uf2`;return{board:s,version:c,date:a,fileName:b,url:`https://micropython.org/resources/firmware/${b}`}})),Bf=512,Lf=`import builtins as _pkp_builtins
`;function Fl(s){return JSON.stringify(s)}function ey(s){return`bytes.fromhex(${JSON.stringify([...s].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function ny(s,i){return`${s==="/"?"":s.replace(/\/$/,"")}/${i}`}class ty{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${Fl(i)}
for name in os.listdir(base):
    p = (${Fl(i)}.rstrip('/') + '/' + name) if ${Fl(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[h,b,p]=f.split("	"),g=b==="dir"||b==="file"?b:"unknown",y=parseInt(p??"",10);return{name:h,path:ny(i,h),type:g,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const c=`
import sys
${Lf}with _pkp_builtins.open(${Fl(i)}, 'rb') as f:
    while True:
        b = f.read(${Bf})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const f=a.output.replace(/\s+/g,"");return new TextDecoder().decode(ly(f))}async writeText(i,c,a){const f=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${Lf}_pkp_builtins.open(${Fl(i)}, 'wb').close()`),f.length===0){a==null||a(100,"Gemt på Pico");return}for(let h=0;h<f.length;h+=Bf){const b=f.slice(h,h+Bf),p=`
${Lf}with _pkp_builtins.open(${Fl(i)}, 'ab') as f:
    f.write(${ey(b)})
`,g=await this.repl.exec(p,1e4);if(g.error)throw new Error(g.error);const y=Math.min(h+b.length,f.length);a==null||a(10+Math.round(y/f.length*85),`Gemmer ${y}/${f.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(i,c,a,f={}){const h=`${i}.tmp`;if(await this.writeText(h,c,(g,y)=>a==null?void 0:a(Math.min(70,g*.7),y)),a==null||a(78,"Verificerer fil..."),await this.readText(h)!==c)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);a==null||a(88,"Udskifter fil...");let p=!!f.createBackup;if(p){const g=await this.readText(i).catch(()=>null);p=g!==null&&g!==c}if(p){const g=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,g).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(h,i),a==null||a(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${Fl(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),a=new Set(c.map(k=>k.path.toLowerCase())),f=i.replace(/\\/g,"/"),h=f.lastIndexOf("/"),b=h>=0?f.slice(0,h+1):"/",p=h>=0?f.slice(h+1):f.replace(/^\/+/,""),g=p.lastIndexOf("."),y=g>0?p.slice(0,g):p,S=g>0?p.slice(g):"";for(let k=1;k<1e3;k+=1){const T=`${b}${y}_backup${k}${S}`;if(!a.has(T.toLowerCase()))return T}return`${b}${y}_backup${Date.now()}${S}`}async rename(i,c){const a=await this.repl.exec(`
import os
os.rename(${Fl(i)}, ${Fl(c)})
`);if(a.error)throw new Error(a.error)}}function ly(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}const iy=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en
import utime as time                       # Bruges til tid, pauser og timere
import network                             # Bruges til at forbinde Pico W til Wi-Fi
import gc                                  # Bruges til at rydde op i hukommelsen

try:                                       # Prøv først MicroPython-versionen af requests
    import urequests as requests           # urequests henter data fra internettet
except ImportError:                        # Hvis urequests ikke findes
    import requests                        # Brug den almindelige requests i stedet

from PicoBluetooth import PicoBluetooth    # Biblioteket der laver Bluetooth kontrolpanelet

WIFI_SSID = "dit-wifi-navn"                # Skift til navnet på dit Wi-Fi (SSID)
WIFI_PASSWORD = "dit-wifi-kodeord"         # Skift til kodeordet til dit Wi-Fi

DEVICE_NAME = "OdenseVejr"                 # Navnet Pico W viser i Bluetooth-listen

BluetoothControls = (                      # Felterne appen viser i kontrolpanelet
    ("text", "STATUS"),                    # Viser hvad programmet laver lige nu
    ("text", "VEJR_NU"),                   # Viser klokkeslæt og vejrtype
    ("text", "TEMPERATUR"),                # Viser temperatur og føles-som temperatur
    ("text", "REGN"),                      # Viser regn og luftfugtighed
    ("text", "VIND"),                      # Viser vindhastighed og vindretning
)

LATITUDE = "55.4038"                       # Breddegrad for Odense - skift til din egen by
LONGITUDE = "10.4024"                      # Længdegrad for Odense - skift til din egen by

OPDATER_HVERT_MS = 60 * 1000               # Hent nyt vejr hvert 60. sekund
WIFI_TIMEOUT_MS = 15000                    # Giv op efter 15 sekunder uden Wi-Fi

WEATHER_URL = (                            # Her bygger vi adressen til vejr-API'et
    "http://api.open-meteo.com/v1/forecast"  # Open-Meteos gratis API-adresse
    "?latitude=" + LATITUDE +              # Sender byens breddegrad med i kaldet
    "&longitude=" + LONGITUDE +            # Sender byens længdegrad med i kaldet
    "&current=temperature_2m,relative_humidity_2m,apparent_temperature,"  # Temperatur, fugtighed, føles-som
    "precipitation,weather_code,wind_speed_10m,wind_direction_10m"        # Regn, vejrkode, vind og vindretning
    "&timezone=Europe%2FCopenhagen"        # Bed API'et om dansk tid
)

VEJRKODER = {                              # Open-Meteo sender tal, som vi laver om til tekst
    0: "Klar himmel", 1: "Mest klart", 2: "Delvist skyet", 3: "Overskyet",
    45: "Taage", 48: "Rimtaage",
    51: "Let stoevregn", 53: "Stoevregn", 55: "Kraftig stoevregn",
    56: "Let frostregn", 57: "Kraftig frostregn",
    61: "Let regn", 63: "Regn", 65: "Kraftig regn",
    66: "Let frostregn", 67: "Kraftig frostregn",
    71: "Let sne", 73: "Sne", 75: "Kraftig sne", 77: "Snefnug",
    80: "Lette byger", 81: "Regnbyger", 82: "Kraftige byger",
    85: "Lette snebyger", 86: "Kraftige snebyger",
    95: "Torden", 96: "Torden med hagl", 99: "Kraftigt tordenvejr",
}


led = Pin("LED", Pin.OUT)                  # Gør den indbyggede LED klar til brug
led.off()                                  # Sluk LED'en når programmet starter

wlan = network.WLAN(network.STA_IF)        # Wi-Fi objekt så Pico W kan forbinde til routeren

naeste_vejr_tid = time.ticks_ms()          # Hvornår vi næste gang skal hente vejr (nu)


def vis(felt, tekst):
    """Send tekst til et felt i appen, og skriv den samme tekst i terminalen."""
    ble.send_text(felt, tekst)             # Send teksten til feltet i kontrolpanelet
    print(felt + ":")                      # Skriv feltets navn i terminalen
    print(tekst)                           # \\n bliver til rigtige linjeskift i terminalen
    time.sleep_ms(80)                       # Lille pause, så appen kan nå at modtage beskeden


def forbind_wifi():
    """Tænd Wi-Fi og vent, indtil Pico W er på nettet (eller giv op)."""
    wlan.active(True)                      # Tænd Wi-Fi
    if wlan.isconnected():                 # Er vi allerede på nettet?
        return                             # Så behøver vi ikke gøre mere

    print("Forbinder til Wi-Fi...")        # Skriv i terminalen at Wi-Fi starter
    wlan.connect(WIFI_SSID, WIFI_PASSWORD) # Forbind med navn og kode ovenfor

    start = time.ticks_ms()                # Husk hvornår vi begyndte at vente
    while not wlan.isconnected():          # Bliv ved indtil Wi-Fi er forbundet
        if time.ticks_diff(time.ticks_ms(), start) > WIFI_TIMEOUT_MS:  # For lang tid?
            raise RuntimeError("Wi-Fi timeout")  # Giv op med en fejl
        time.sleep_ms(250)                 # Vent lidt før vi tjekker igen

    print("Wi-Fi forbundet:", wlan.ifconfig()[0])  # Skriv Pico W's IP-adresse


def hent_og_vis_vejr():
    """Hent vejret fra API'et og vis det i appen og i terminalen."""
    svar = None                            # Her gemmer vi API-svaret
    try:
        vis("STATUS", "Forbinder til Wi-Fi...")  # Fortæl hvad der sker
        forbind_wifi()                     # Sørg for at vi er på nettet

        gc.collect()                       # Ryd op i hukommelsen før API-kaldet
        vis("STATUS", "Henter vejr...")    # Fortæl at vi kalder API'et
        svar = requests.get(WEATHER_URL)   # Send HTTP GET til Open-Meteo

        if svar.status_code != 200:        # 200 betyder OK
            raise RuntimeError("API-fejl: " + str(svar.status_code))

        vejr = svar.json()["current"]      # Find "current"-delen af svaret

        klokkeslet = vejr["time"].split("T")[-1]   # Tag kun tiden efter T, fx 14:15
        vejrtekst = VEJRKODER.get(vejr["weather_code"], "Ukendt vejr")  # Tal -> tekst

        # Byg fire beskeder med \\n, så hvert felt viser to linjer i appen.
        vis("VEJR_NU", "Tid: {}\\nVejr: {}".format(klokkeslet, vejrtekst))
        vis("TEMPERATUR", "Temperatur: {} C\\nFoeles som: {} C".format(
            vejr["temperature_2m"], vejr["apparent_temperature"]))
        vis("REGN", "Regn: {} mm\\nFugtighed: {} %".format(
            vejr["precipitation"], vejr["relative_humidity_2m"]))
        vis("VIND", "Vind: {} km/h\\nRetning: {} grader".format(
            vejr["wind_speed_10m"], vejr["wind_direction_10m"]))

        vis("STATUS", "Vejrdata OK")       # Alt gik godt

    except Exception as fejl:              # Hvis noget går galt, lander vi her
        print("Fejl:", fejl)               # Skriv fejlen i terminalen
        vis("STATUS", "Fejl")              # Vis fejlstatus i appen
        vis("VEJR_NU", str(fejl))          # Vis selve fejlen i første vejr-felt
        vis("TEMPERATUR", "-")             # Ryd de andre felter
        vis("REGN", "-")
        vis("VIND", "-")

    finally:                               # Kører både ved succes og fejl
        if svar is not None:               # Fik vi et svar?
            svar.close()                   # Luk det, så hukommelsen frigives
        gc.collect()                       # Ryd op igen


def on_connect():                          # Kører automatisk når Bluetooth forbinder
    global naeste_vejr_tid
    led.on()                               # Tænd LED'en når nogen forbinder
    naeste_vejr_tid = time.ticks_ms()      # Hent vejr med det samme
    vis("STATUS", "Forbundet")             # Sig hej til appen


def on_disconnect():                       # Kører automatisk når Bluetooth afbryder
    led.off()                              # Sluk LED'en når ingen er forbundet


ble = PicoBluetooth(                       # Start Bluetooth kontrolpanelet
    base_controls=BluetoothControls,       # Fortæl hvilke felter appen skal vise
    device_base_name=DEVICE_NAME,          # Fortæl hvad enheden skal hedde
    callbacks=globals()                    # Gør on_connect og on_disconnect synlige
)


while True:                                # Hovedprogrammet kører igen og igen
    if ble.connected and time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:
        hent_og_vis_vejr()                 # Tid til at hente nyt vejr
        naeste_vejr_tid = time.ticks_add(time.ticks_ms(), OPDATER_HVERT_MS)  # Planlæg næste gang

    time.sleep_ms(100)                     # Lille pause, så Pico W ikke bruger al CPU-tid
`,ry=`import ubluetooth\r
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
MAX_PENDING_TELEMETRY  = 40\r
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
    def send_toggle_state(self, name, value):\r
        """Send current toggle state to the app: toggle_state,<NAME>,<0|1>."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            state = 1 if value else 0\r
            self._emit_telemetry(\r
                "toggle_state,{},{:d}\\n".format(clean_name, state),\r
                coalesce_key=("toggle_state", clean_name),\r
            )\r
        except Exception as e:\r
            print("send_toggle_state failed:", e)\r
\r
    def send_plot(self, name, value):\r
        """Appends one sample to a plot control's history (never coalesced,\r
        unlike send_text/send_radar/send_toggle_state - see the doc)."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            self._emit_telemetry("plot,{},{}\\n".format(clean_name, round(float(value), 2)))\r
        except Exception as e:\r
            print("send_plot failed:", e)\r
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
`,ay=`from machine import Pin, time_pulse_us\r
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
        return cms`,sy=`import array, time\r
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
`,oy=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
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
        print('D-pad ->', direction, 'ned' if is_down else 'op')


def on_slider(name, value):
    """FART-slideren sætter farten."""
    global speed_percent
    if name == 'FART':
        speed_percent = int(clamp(value, 0, 100))
        apply_drive()
        print('Fart ->', speed_percent)


def on_connect():
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.
    led.on()
    for key in held:
        held[key] = False
    board.motorOff(1)
    board.motorOff(2)


def on_disconnect():
    # Når appen afbryder, slukker LED'en, nulstiller retninger og stopper motorerne.
    led.off()
    for key in held:
        held[key] = False
    board.motorOff(1)
    board.motorOff(2)


# callbacks=globals() gør, at PicoBluetooth kan finde on_dpad osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,cy=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en
import utime as time                       # Bruges til tid, pauser og timere
import network                             # Bruges til at forbinde Pico W til Wi-Fi
import gc                                  # Bruges til at rydde op i hukommelsen
import os                                  # Bruges til at slette den gemte målefil ved nulstilling

try:                                       # Prøv først MicroPython-versionen af requests
    import urequests as requests           # urequests henter data fra internettet
except ImportError:                        # Hvis urequests ikke findes
    import requests                        # Brug den almindelige requests i stedet

from PicoBluetooth import PicoBluetooth    # Biblioteket der laver Bluetooth kontrolpanelet

WIFI_SSID = "dit-wifi-navn"                # Skift til navnet på dit Wi-Fi (SSID)
WIFI_PASSWORD = "dit-wifi-kodeord"         # Skift til kodeordet til dit Wi-Fi

DEVICE_NAME = "Grafer"                     # Navnet Pico W viser i Bluetooth-listen

LATITUDE = "55.4038"                       # Breddegrad for Odense - skift til din egen by
LONGITUDE = "10.4024"                      # Længdegrad for Odense - skift til din egen by

# Hver graf husker sine sidste HISTORY_POINTS målinger (ældste falder ud, når en
# ny kommer til). Tallet skal matche mellem BluetoothControls her og appen -
# det gør det automatisk, fordi begge dele bruger samme HISTORY_POINTS-variabel.
# Vejret hentes uafhængigt af Bluetooth (se hovedloekken nederst) - Picoen
# bliver ved med at samle målinger i baggrunden, også når ingen er forbundet,
# i takt med OPDATER_HVERT_MS herunder. Der hentes stadig ingen historik fra
# Open-Meteo - alt i graferne er noget Picoen faktisk selv har målt/hentet,
# mens den kørte. Med standardværdierne tager det derfor HISTORY_POINTS
# minutter at fylde en graf.
HISTORY_POINTS = 16
TEMP_MIN = -10                             # Temperaturgrafens akse i grader C - juster efter årstid
TEMP_MAX = 35
REGN_MIN = 0                               # Nedbørsgrafens akse i mm - juster hvis I måler kraftig regn
REGN_MAX = 10

BluetoothControls = (                          # Felterne appen viser i kontrolpanelet
    ("text", "STATUS"),                        # Viser hvad programmet laver lige nu
    ("plot", "TEMP", TEMP_MIN, TEMP_MAX, HISTORY_POINTS, "line"),  # Temperatur som linjegraf
    ("plot", "REGN", REGN_MIN, REGN_MAX, HISTORY_POINTS, "bar"),   # Nedbør som søjlegraf
    ("button", "NULSTIL"),                     # Rydder graferne og starter forfra med nye målinger
)

OPDATER_HVERT_MS = 60 * 1000               # Hent nyt vejr hvert 60. sekund - samme takt som API-eksemplet
WIFI_TIMEOUT_MS = 15000                    # Giv op efter 15 sekunder uden Wi-Fi

# Hver rigtig måling gemmes også her på Picoen (nyeste sidst, mest HISTORY_POINTS
# linjer), så man kan forbinde når som helst - selv efter Picoen har kørt helt
# for sig selv i timevis - og med det samme se den seneste vejrdata, den har
# samlet, uden at hente noget fra Open-Meteo igen. Det er stadig kun Picoens
# egne, tidligere hentede målinger, ikke Open-Meteos historik. Hold
# HISTORY_POINTS under ca. 19 (2 grafer x punkter, sendt fra on_connect):
# PicoBluetooth.py smider ellers de ældste af de genskabte punkter væk, fordi
# telemetri sendt før appen er klar kun bufres op til MAX_PENDING_TELEMETRY
# (40) linjer.
DATA_FILE = "VejrMaalinger.txt"

# Henter kun det aktuelle vejr, ligesom API-eksemplet - ingen historik/hourly-data.
CURRENT_URL = (
    "http://api.open-meteo.com/v1/forecast"
    "?latitude=" + LATITUDE +
    "&longitude=" + LONGITUDE +
    "&current=temperature_2m,precipitation"
    "&timezone=Europe%2FCopenhagen"
)


led = Pin("LED", Pin.OUT)                  # Gør den indbyggede LED klar til brug
led.off()                                  # Sluk LED'en når programmet starter

wlan = network.WLAN(network.STA_IF)        # Wi-Fi objekt så Pico W kan forbinde til routeren

naeste_vejr_tid = time.ticks_ms()          # Hvornår vi næste gang skal hente aktuelt vejr

# Open-Meteos "current"-vejr opdateres sjældnere, end vi spørger efter det
# (OPDATER_HVERT_MS). Vi husker tidsstemplet fra sidste rigtige måling, så vi
# kan se, om et nyt kald bare gentager den samme måling, og springe dubletten
# over i stedet for at proppe den samme værdi ind i graferne flere gange.
sidste_api_tid = None


def vis(felt, tekst):
    """Send tekst til et felt i appen, og skriv den samme tekst i terminalen."""
    ble.send_text(felt, tekst)             # Send teksten til feltet i kontrolpanelet
    print(felt + ":")                      # Skriv feltets navn i terminalen
    print(tekst)                           # \\n bliver til rigtige linjeskift i terminalen
    time.sleep_ms(80)                       # Lille pause, så appen kan nå at modtage beskeden


def forbind_wifi():
    """Tænd Wi-Fi og vent, indtil Pico W er på nettet (eller giv op)."""
    wlan.active(True)                      # Tænd Wi-Fi
    if wlan.isconnected():                 # Er vi allerede på nettet?
        return                             # Så behøver vi ikke gøre mere

    print("Forbinder til Wi-Fi...")        # Skriv i terminalen at Wi-Fi starter
    wlan.connect(WIFI_SSID, WIFI_PASSWORD) # Forbind med navn og kode ovenfor

    start = time.ticks_ms()                # Husk hvornår vi begyndte at vente
    while not wlan.isconnected():          # Bliv ved indtil Wi-Fi er forbundet
        if time.ticks_diff(time.ticks_ms(), start) > WIFI_TIMEOUT_MS:  # For lang tid?
            raise RuntimeError("Wi-Fi timeout")  # Giv op med en fejl
        time.sleep_ms(250)                 # Vent lidt før vi tjekker igen

    print("Wi-Fi forbundet:", wlan.ifconfig()[0])  # Skriv Pico W's IP-adresse


def gem_maaling(temp, regn):
    """Føjer én rigtig måling til DATA_FILE og smider de ældste væk over HISTORY_POINTS."""
    try:
        try:
            with open(DATA_FILE, "r") as f:
                linjer = [l.strip() for l in f.readlines() if l.strip()]
        except OSError:
            linjer = []                    # Filen findes ikke endnu - start med en tom liste
        linjer.append("{},{}".format(temp, regn))
        linjer = linjer[-HISTORY_POINTS:]  # Behold kun lige så mange, som graferne viser alligevel
        with open(DATA_FILE, "w") as f:
            for linje in linjer:
                f.write(linje + "\\n")
    except Exception as fejl:
        print("Kunne ikke gemme maaling:", fejl)


def hent_gemte_maalinger():
    """Læser DATA_FILE tilbage som en liste af (temp, regn), ældste først."""
    try:
        with open(DATA_FILE, "r") as f:
            linjer = [l.strip() for l in f.readlines() if l.strip()]
    except OSError:
        return []                          # Ingen fil endnu (første gang programmet kører)

    maalinger = []
    for linje in linjer:
        try:
            temp_s, regn_s = linje.split(",", 1)
            maalinger.append((float(temp_s), float(regn_s)))
        except Exception:
            continue                       # Spring en beskadiget linje over i stedet for at fejle helt
    return maalinger


def ryd_gemte_maalinger():
    """Sletter DATA_FILE, så NULSTIL også rydder det, der ellers ville blive gensendt ved næste forbindelse."""
    try:
        os.remove(DATA_FILE)
    except OSError:
        pass                                # Filen findes ikke - intet at slette


def hent_og_vis_vejr():
    """Henter det aktuelle vejr og tilføjer ét nyt punkt til hver graf.

    Kører i samme takt som API-eksemplet (hvert 60. sekund), og uafhængigt af
    om nogen er forbundet over Bluetooth (se hovedloekken nederst). send_plot
    og send_text sender kun noget, når en telefon/browser rent faktisk er
    forbundet - ellers er de ligeglade - men gem_maaling() gemmer målingen på
    Picoen uanset hvad, så den ikke går tabt, selvom ingen ser med lige nu.
    """
    global sidste_api_tid
    svar = None
    try:
        forbind_wifi()                     # Sørg for at vi er på nettet

        gc.collect()                       # Ryd op i hukommelsen før API-kaldet
        svar = requests.get(CURRENT_URL)   # Send HTTP GET til Open-Meteo

        if svar.status_code != 200:        # 200 betyder OK
            raise RuntimeError("API-fejl: " + str(svar.status_code))

        vejr = svar.json()["current"]      # Find "current"-delen af svaret
        api_tid = vejr["time"]             # Open-Meteos eget tidsstempel for målingen
        klokkeslet = api_tid.split("T")[-1]  # Tag kun tiden efter T, fx 14:15

        if api_tid == sidste_api_tid:      # Samme tidsstempel som sidst = samme måling igen
            vis("STATUS", "Uændret siden {}".format(klokkeslet))
            return                         # Spring dubletten over - intet nyt at vise i graferne

        sidste_api_tid = api_tid
        temp = vejr["temperature_2m"]
        regn = vejr["precipitation"]

        ble.send_plot("TEMP", temp)        # Tilføj ét nyt punkt til temperaturgrafen
        ble.send_plot("REGN", regn)        # Tilføj ét nyt punkt til nedbørsgrafen
        gem_maaling(temp, regn)            # Gem samme måling på Picoen til efter reboot/reconnect

        vis("STATUS", "Opdateret {}\\nTemp: {} C\\nRegn: {} mm".format(klokkeslet, temp, regn))

    except Exception as fejl:              # Hvis noget går galt, lander vi her
        print("Fejl:", fejl)               # Skriv fejlen i terminalen
        vis("STATUS", "Fejl ved opdatering")  # Vis fejlstatus i appen

    finally:                               # Kører både ved succes og fejl
        if svar is not None:               # Fik vi et svar?
            svar.close()                   # Luk det, så hukommelsen frigives
        gc.collect()                       # Ryd op igen


def on_connect():                          # Kører automatisk når Bluetooth forbinder
    global naeste_vejr_tid
    led.on()                               # Tænd LED'en når nogen forbinder
    # Genskab graferne med det samme fra Picoens egne, tidligere hentede
    # målinger - også dem den samlede, mens ingen var forbundet. Hurtigt og
    # uden Wi-Fi, så det er trygt at gøre her i selve Bluetooth-afbrydelsen
    # (se send_plot's telemetri-buffer i PicoBluetooth.py).
    for gammel_temp, gammel_regn in hent_gemte_maalinger():
        ble.send_plot("TEMP", gammel_temp)
        ble.send_plot("REGN", gammel_regn)
    naeste_vejr_tid = time.ticks_ms()      # Hent også et friskt vejrpunkt med det samme
    vis("STATUS", "Forbundet")             # Sig hej til appen


def on_disconnect():                       # Kører automatisk når Bluetooth afbryder
    led.off()                              # Sluk LED'en når ingen er forbundet


def on_button(name, is_down):              # Kører automatisk når en knap trykkes/slippes
    global naeste_vejr_tid, sidste_api_tid
    if name == "NULSTIL" and is_down:      # Kun når NULSTIL-knappen trykkes ned
        ble.send_plot_clear("TEMP")        # Ryd temperaturgrafen i appen
        ble.send_plot_clear("REGN")        # Ryd nedbørsgrafen i appen
        ryd_gemte_maalinger()              # Slet de gemte målinger, så de ikke dukker op igen senere
        sidste_api_tid = None              # Tillad at vise den nuværende måling igen efter nulstilling
        naeste_vejr_tid = time.ticks_ms()  # Hent et nyt rigtigt vejrpunkt med det samme
        vis("STATUS", "Nulstillet - henter nyt vejr")


ble = PicoBluetooth(                       # Start Bluetooth kontrolpanelet
    base_controls=BluetoothControls,       # Fortæl hvilke felter appen skal vise
    device_base_name=DEVICE_NAME,          # Fortæl hvad enheden skal hedde
    callbacks=globals()                    # Gør on_connect og on_disconnect synlige
)


while True:                                # Hovedprogrammet kører igen og igen
    # Uafhængigt af om nogen er forbundet over Bluetooth: Picoen bliver ved med
    # at hente og gemme vejret i baggrunden. send_plot/send_text herinde sender
    # kun noget, hvis en telefon/browser rent faktisk er forbundet (se
    # PicoBluetooth.py), men gem_maaling() gemmer målingen lokalt uanset hvad.
    if time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:
        hent_og_vis_vejr()                 # Tid til at hente nyt vejr
        naeste_vejr_tid = time.ticks_add(time.ticks_ms(), OPDATER_HVERT_MS)  # Planlæg næste gang

    time.sleep_ms(100)                     # Lille pause, så Pico W ikke bruger al CPU-tid
`,uy=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
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
        # Joysticken sender mange gange i sekundet - slet linjen hvis det fylder for meget.
        print('Joystick -> x:', last_x, 'y:', last_y)


def on_slider(name, value):
    """FART-slideren sætter den maksimale fart."""
    global speed_percent
    if name == 'FART':
        speed_percent = int(clamp(value, 0, 100))
        apply_drive()
        print('Fart ->', speed_percent)


def on_connect():
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.
    global last_x, last_y
    led.on()
    last_x = 0
    last_y = 0
    board.motorOff(1)
    board.motorOff(2)


def on_disconnect():
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.
    global last_x, last_y
    led.off()
    last_x = 0
    last_y = 0
    board.motorOff(1)
    board.motorOff(2)


# callbacks=globals() gør, at PicoBluetooth kan finde on_joystick osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,fy=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
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
    """Tænd LED'en når appen forbinder."""
    led.on()


def on_disconnect():
    """Sluk lyset når appen mister forbindelsen."""
    global light_is_on

    light_is_on = False
    show_light()
    led.off()


# callbacks=globals() betyder:
# "Brug funktionerne ovenfor, når appen sender noget."
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.
    time.sleep_ms(100)
`,dy=`# PicoFly.py
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
`,my=`import machine\r
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
        self.initPCA()`,py=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
from hcsr04 import HCSR04
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
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'Radar'

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


def on_toggle(name, value):
    """Reager på toggle-knapper fra appen."""
    global scan_enabled

    # SCAN-knappen i appen tænder eller slukker radaren.
    if name == 'SCAN':
        scan_enabled = bool(value)
        ble.send_toggle_state('SCAN', scan_enabled)
        print('Scan ->', 'til' if scan_enabled else 'fra')
    else:
        print('Ukendt kontakt:', name)


def on_connect():
    global scan_enabled, scan_angle, scan_direction

    # Start altid en ny forbindelse med scanning slukket og servoen i midten.
    led.on()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)
    ble.send_toggle_state('SCAN', False)


def on_disconnect():
    global scan_enabled, scan_angle, scan_direction

    # Når appen afbryder, stopper scanningen og servoen sættes i midten.
    led.off()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)
    ble.send_toggle_state('SCAN', False)


# callbacks=globals() gør, at PicoBluetooth kan finde on_toggle osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


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
        scan_direction = -1
    elif scan_angle <= SERVO_MIN:
        scan_angle = SERVO_MIN
        scan_direction = 1
`,hy=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth


# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'SendTekst'

# Appen viser kun et tekstfelt.
BluetoothControls = (
    ('text', 'BESKED'),
)


# LED'en viser, om appen er forbundet.
led = Pin('LED', Pin.OUT)
led.off()


def on_connect():
    """Send den foerste besked naar appen forbinder."""
    led.on()
    besked = 'Hej fra Picoen\\nJeg er klar!'
    ble.send_text('BESKED', besked)
    # print() viser \\n som et rigtigt linjeskift i terminalen, ligesom i appen.
    print('Sendte besked til appen:')
    print(besked)


def on_disconnect():
    """Sluk LED'en naar appen mister forbindelsen."""
    led.off()


ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())

counter = 0

while True:
    # Send en flerlinjet besked med jaevne mellemrum, saa tekstfeltet er let at teste.
    if ble.connected:
        counter += 1
        besked = 'Besked {}\\nDette er en test af tekstfeltet.'.format(counter)
        ble.send_text('BESKED', besked)
        # Du bestemmer selv, hvad der skrives her - proev at slette de to linjer.
        print('Sendte besked til appen:')
        print(besked)
        time.sleep_ms(2000)
    else:
        time.sleep_ms(100)
`,_y=`from machine import Pin, PWM, ADC
from PicoBluetooth import PicoBluetooth
from neopixel import Neopixel
from PicoFly import get_board
import utime as time

# ============================================================
# Alarmstation med BLE kontrolpanel + servo-doerlaas
#
# Hardware / pinout:
#   Fri NeoPixel LED:       GP16
#   PIR bevaegelsessensor:  GP15
#   Buzzer:                 GP14
#   Vandsensor power/VCC:   GP0
#   Vandsensor signal/S:    GP26 / ADC0
#   Keypad NeoPixel:        GP17
#   Keypad kolonner:        GP18, GP19, GP20
#   Keypad raekker:         GP21, GP22, GP27, GP28
#   Servo:                  PicoFly board.servo1
#
# Servo angles:
#   OPEN = 60
#   CLOSED = 100
# Byt de to tal om, hvis din dor bevaeger sig den forkerte vej.
# ============================================================

# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'AlarmDemo'

BluetoothControls = (
    ('toggle', 'ALARM', 1),
    ('toggle', 'DOR', 0),

    ('button', 'AABN DOR'),
    ('button', 'LUK DOR'),
    ('button', 'NY KODE'),
    ('button', 'NULSTIL'),
    ('button', 'TEST BIP'),

    ('slider', 'LED LYS', 0, 100, 'none'),
    ('slider', 'ROD', 0, 255, 'none'),
    ('slider', 'GRON', 0, 255, 'none'),
    ('slider', 'BLA', 0, 255, 'none'),
    ('slider', 'PIR TID', 1, 30, 'none'),
    ('slider', 'VAND GRAENSE', 0, 65535, 'none'),
    ('slider', 'BIP LYD', 0, 100, 'none'),
    ('slider', 'DOR TID', 1, 30, 'none'),

    ('text', 'STATUS'),
    ('text', 'BESKED'),
    ('text', 'KODE'),
)

# ---------------- Hardware ----------------

onboard_led = Pin('LED', Pin.OUT)
onboard_led.off()

pir = Pin(15, Pin.IN)

water_power = Pin(0, Pin.OUT)
water_power.value(0)
water_signal = ADC(Pin(26))

buzzer = PWM(Pin(14))
buzzer.duty_u16(0)

free_led = Neopixel(1, 0, 16, "GRB")
keypad_led = Neopixel(1, 1, 17, "GRB")

# Servo via PicoFly
board = get_board()
servo = board.servo1

SERVO_OPEN_ANGLE = 60
SERVO_CLOSED_ANGLE = 100

# Dette keypad laeses drejet i forhold til de trykte taster.
key_names = [
    ['OK',  '0', 'RET'],
    ['9',   '8', '7'],
    ['6',   '5', '4'],
    ['3',   '2', '1'],
]

column_pins = [18, 19, 20]
row_pins = [21, 22, 27, 28]

# En liste-forstaaelse (en kort "lav en liste ved at koere gennem noget andet"-
# skrivemaade) - laver ét Pin-objekt per pin-nummer i listen ovenfor.
rows = [Pin(pin, Pin.OUT, value=1) for pin in row_pins]
columns = [Pin(pin, Pin.IN, Pin.PULL_UP) for pin in column_pins]

# ---------------- Tilstand ----------------

PIR_WARMUP_MS = 15000
PIR_ARM_DELAY_MS = 3000
ALARM_SOUND_MS = 5000
KEY_DEBOUNCE_MS = 80

BUZZER_MIN_DUTY = 18000
BUZZER_MAX_DUTY = 32768

alarm_enabled = True
alarm_triggered = False
code_change_mode = False

secret_code = "1234"
entered_code = ""

last_key = None
last_raw_key = None
last_key_change_ms = 0

led_brightness = 50
led_color = [255, 50, 0]

pir_hold_ms = 5000
motion_until = 0
pir_ready_at = time.ticks_add(time.ticks_ms(), PIR_WARMUP_MS)
last_pir_value = pir.value()

water_threshold = 25000
latest_water = 0

buzzer_volume = 50
alarm_sound_until = 0
alarm_beep_on = False
next_alarm_beep_ms = 0
next_water_check_ms = 0
next_status_ms = 0

door_open = False
door_open_ms = 5000
door_auto_close_at = 0


# ---------------- BLE-sikre hjaelpefunktioner ----------------

def ble_is_connected():
    try:
        return ble.connected
    except:
        return False


def ble_send_text(name, text):
    if ble_is_connected():
        try:
            ble.send_text(name, text)
        except Exception as e:
            print('BLE text send fejl:', e)


def ble_send_toggle_state(name, value):
    if ble_is_connected():
        try:
            ble.send_toggle_state(name, bool(value))
        except Exception as e:
            print('BLE toggle send fejl:', e)


# ---------------- Hjaelpefunktioner ----------------

def clamp(value, low, high):
    value = int(value)
    if value < low:
        return low
    if value > high:
        return high
    return value


def buzzer_duty():
    volume = clamp(buzzer_volume, 0, 100)
    if volume <= 0:
        return 0
    return int(BUZZER_MIN_DUTY + (volume / 100) * (BUZZER_MAX_DUTY - BUZZER_MIN_DUTY))


def pixel_brightness(percent):
    percent = clamp(percent, 0, 100)
    return 1 + int((percent / 100) * 254)


def set_pixel(pixel, color, brightness=50):
    pixel.brightness(pixel_brightness(brightness))
    pixel.fill(tuple(color))
    pixel.show()


def clear_pixel(pixel):
    pixel.clear()
    pixel.show()


def stop_buzzer():
    buzzer.duty_u16(0)


def send_message(message):
    print(message)
    ble_send_text('BESKED', message)


def send_code_text():
    if code_change_mode:
        ble_send_text('KODE', 'Ny kode: ' + entered_code)
    else:
        ble_send_text('KODE', 'Kode: ' + entered_code)


def make_live_status_text():
    return 'Alarm: {} | Udlost: {} | Dor: {} | Vand: {} | PIR: {}'.format(
        'TIL' if alarm_enabled else 'FRA',
        'JA' if alarm_triggered else 'NEJ',
        'AABEN' if door_open else 'LUKKET',
        latest_water,
        'AKTIV' if pir.value() == 1 else 'rolig',
    )


def send_live_status():
    status = make_live_status_text()
    print(status)
    ble_send_text('STATUS', status)


def set_status_light():
    if alarm_triggered and alarm_enabled:
        set_pixel(keypad_led, (255, 0, 0), 80)
    elif door_open:
        set_pixel(keypad_led, (255, 160, 0), 60)
    elif alarm_enabled:
        set_pixel(keypad_led, (0, 180, 0), 50)
    elif ble_is_connected():
        set_pixel(keypad_led, (0, 0, 180), 35)
    else:
        clear_pixel(keypad_led)


def update_free_led():
    if alarm_enabled:
        if alarm_triggered:
            set_pixel(free_led, (255, 0, 0), 90)
        else:
            set_pixel(free_led, (0, 0, 80), 20)
    else:
        set_pixel(free_led, led_color, led_brightness)


def play_tone(freq, duration_ms):
    duty = buzzer_duty()
    if duty <= 0:
        return

    buzzer.freq(int(freq))
    buzzer.duty_u16(duty)
    time.sleep_ms(duration_ms)
    buzzer.duty_u16(0)


def read_water_sensor(samples=4):
    total = 0

    water_power.value(1)
    time.sleep_ms(10)

    try:
        for _ in range(samples):
            total += water_signal.read_u16()
            time.sleep_ms(2)
    finally:
        water_power.value(0)

    return total // samples


# ---------------- Dor / servo ----------------

def set_servo_angle(angle):
    try:
        servo.set_angle(angle)
        return True
    except Exception as e:
        send_message('Servo fejl: {}'.format(e))
        return False


def send_door_state():
    ble_send_toggle_state('DOR', door_open)


def open_door(source=''):
    global door_open, door_auto_close_at

    if set_servo_angle(SERVO_OPEN_ANGLE):
        door_open = True
        door_auto_close_at = time.ticks_add(time.ticks_ms(), door_open_ms)

        send_door_state()
        update_free_led()
        set_status_light()

        if source:
            send_message('Dor aabnet via {}'.format(source))
        else:
            send_message('Dor aabnet')


def close_door(source='', announce=True):
    global door_open, door_auto_close_at

    if set_servo_angle(SERVO_CLOSED_ANGLE):
        was_open = door_open

        door_open = False
        door_auto_close_at = 0

        send_door_state()
        update_free_led()
        set_status_light()

        if announce and was_open:
            if source:
                send_message('Dor lukket via {}'.format(source))
            else:
                send_message('Dor lukket')


def authorized_open_door(source):
    """
    Bruges naar koden paa keypadet er rigtig, eller naar doeren aabnes fra
    appen. Slaar foerst alarmen fra, og aabner saa doeren.
    """
    global entered_code

    set_alarm_state(False, source)
    entered_code = ""
    send_code_text()
    open_door(source)
    play_tone(1800, 160)
    send_live_status()


# ---------------- Alarm ----------------

def set_alarm_state(enabled, source=''):
    global alarm_enabled, alarm_triggered, alarm_beep_on
    global motion_until, entered_code, code_change_mode, pir_ready_at

    enabled = bool(enabled)
    changed = alarm_enabled != enabled

    alarm_enabled = enabled
    alarm_triggered = False
    alarm_beep_on = False
    motion_until = 0
    entered_code = ""
    stop_buzzer()

    if enabled:
        code_change_mode = False
        pir_ready_at = time.ticks_add(time.ticks_ms(), PIR_ARM_DELAY_MS)

        # Det er sikrest at lukke doeren, naar alarmen er tilkoblet.
        close_door('alarm tilkoblet', announce=False)

        if changed:
            send_message('Alarm tilkoblet. PIR aktiv om {} sek'.format(PIR_ARM_DELAY_MS // 1000))
    else:
        if changed:
            if source:
                send_message('Alarm frakoblet via {}'.format(source))
            else:
                send_message('Alarm frakoblet')

    ble_send_toggle_state('ALARM', alarm_enabled)
    send_code_text()
    update_free_led()
    set_status_light()


def trigger_alarm(reason):
    global alarm_triggered, alarm_sound_until

    if not alarm_enabled:
        return

    alarm_sound_until = time.ticks_add(time.ticks_ms(), ALARM_SOUND_MS)

    if not alarm_triggered:
        alarm_triggered = True
        send_message('ALARM: ' + reason)

    update_free_led()
    set_status_light()


def reset_alarm():
    global alarm_triggered, entered_code, alarm_beep_on
    global motion_until, alarm_sound_until, next_alarm_beep_ms

    alarm_triggered = False
    alarm_beep_on = False
    motion_until = 0
    alarm_sound_until = 0
    next_alarm_beep_ms = 0
    entered_code = ""

    stop_buzzer()
    update_free_led()
    set_status_light()
    send_code_text()
    send_message('Alarm nulstillet')
    send_live_status()


# ---------------- Keypad ----------------

def scan_keypad():
    # enumerate(rows) giver baade indekset (0, 1, 2...) og selve raekken i
    # samme loekke, saa vi kan slaa den trykte tast op i key_names bagefter.
    for row_index, row_pin in enumerate(rows):
        row_pin.value(0)
        time.sleep_us(100)

        for col_index, col_pin in enumerate(columns):
            if col_pin.value() == 0:
                row_pin.value(1)
                return key_names[row_index][col_index]

        row_pin.value(1)

    return None


def read_key_event():
    global last_key, last_raw_key, last_key_change_ms

    now = time.ticks_ms()
    raw_key = scan_keypad()

    if raw_key != last_raw_key:
        last_raw_key = raw_key
        last_key_change_ms = now
        return None

    if time.ticks_diff(now, last_key_change_ms) < KEY_DEBOUNCE_MS:
        return None

    if raw_key is None:
        last_key = None
        return None

    if raw_key != last_key:
        last_key = raw_key
        return raw_key

    return None


def handle_key(key):
    global entered_code, secret_code, code_change_mode

    key = str(key).strip()

    play_tone(1000, 80)

    if key == 'RET':
        entered_code = ""
        send_code_text()
        send_message('Indtastning slettet')
        return

    if key == 'OK':
        if code_change_mode:
            if len(entered_code) >= 4:
                secret_code = entered_code
                code_change_mode = False
                entered_code = ""
                send_message('Ny kode gemt')
                play_tone(1800, 180)
            else:
                send_message('Ny kode skal mindst have 4 tal')
                play_tone(350, 250)

            send_code_text()
            return

        if entered_code == secret_code:
            send_message('Rigtig kode')
            authorized_open_door('keypad')
        else:
            if alarm_enabled:
                send_message('Forkert kode')
                play_tone(300, 300)
                trigger_alarm('Forkert kode')
            else:
                send_message('Forkert kode, men alarmen er fra')

            entered_code = ""
            send_code_text()

        return

    if key in ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'):
        entered_code = entered_code + key

        if len(entered_code) > 8:
            entered_code = entered_code[-8:]

        send_code_text()
        return

    send_message('Ukendt tast: {}'.format(key))


# ---------------- BLE-callbacks ----------------

def on_connect():
    onboard_led.on()

    ble_send_toggle_state('ALARM', alarm_enabled)
    ble_send_toggle_state('DOR', door_open)

    send_message('Forbundet. Alarmstation klar.')
    send_live_status()
    send_code_text()
    update_free_led()
    set_status_light()


def on_disconnect():
    onboard_led.off()
    stop_buzzer()
    set_status_light()


def on_button(name, is_down):
    global code_change_mode, entered_code

    # De her knapper skal kun gøre noget, når de trykkes ned.
    # Når knappen slippes, stopper funktionen her.
    if not is_down:
        return

    if name == 'AABN DOR':
        authorized_open_door('Bluetooth')

    elif name == 'LUK DOR':
        close_door('Bluetooth')

    elif name == 'NY KODE':
        if alarm_enabled:
            send_message('Frakobl alarmen foer du aendrer kode')
            play_tone(350, 250)
            return

        code_change_mode = True
        entered_code = ""
        send_code_text()
        send_message('Tast ny kode paa keypad og tryk OK')

    elif name == 'NULSTIL':
        reset_alarm()

    elif name == 'TEST BIP':
        send_message('Tester buzzer')
        play_tone(1200, 180)


def on_toggle(name, value):
    if name == 'ALARM':
        set_alarm_state(bool(value), 'Bluetooth')
        send_live_status()

    elif name == 'DOR':
        if bool(value):
            authorized_open_door('Bluetooth')
        else:
            close_door('Bluetooth')
            send_live_status()


def on_slider(name, value):
    global led_brightness, pir_hold_ms, water_threshold
    global buzzer_volume, door_open_ms

    value = int(value)

    if name == 'LED LYS':
        led_brightness = clamp(value, 0, 100)

    elif name == 'ROD':
        led_color[0] = clamp(value, 0, 255)

    elif name == 'GRON':
        led_color[1] = clamp(value, 0, 255)

    elif name == 'BLA':
        led_color[2] = clamp(value, 0, 255)

    elif name == 'PIR TID':
        value = clamp(value, 1, 30)
        pir_hold_ms = value * 1000
        send_message('PIR lystid: {} sek'.format(value))

    elif name == 'VAND GRAENSE':
        water_threshold = clamp(value, 0, 65535)
        send_message('Vand-graense: {}'.format(water_threshold))

    elif name == 'BIP LYD':
        buzzer_volume = clamp(value, 0, 100)
        send_message('Buzzer lyd: {}%'.format(buzzer_volume))

    elif name == 'DOR TID':
        value = clamp(value, 1, 30)
        door_open_ms = value * 1000
        send_message('Dor aaben tid: {} sek'.format(value))

    update_free_led()
    set_status_light()


ble = PicoBluetooth(
    base_controls=BluetoothControls,
    device_base_name=DEVICE_NAME,
    callbacks=globals(),
)

# ---------------- Hovedloekke ----------------

send_message('Alarmstation starter')
send_message('PIR varmer op i {} sekunder'.format(PIR_WARMUP_MS // 1000))

# Start med doeren laast/lukket.
close_door('start', announce=False)

update_free_led()
set_status_light()

try:
    while True:
        now = time.ticks_ms()

        current_pir = pir.value()

        # PIR alarm
        if alarm_enabled and time.ticks_diff(now, pir_ready_at) >= 0:
            if current_pir == 1 and last_pir_value == 0:
                motion_until = time.ticks_add(now, pir_hold_ms)
                trigger_alarm('Bevaegelse opdaget')

            elif current_pir == 0 and last_pir_value == 1:
                send_message('PIR rolig igen')
        else:
            motion_until = 0

        last_pir_value = current_pir

        # Water sensor
        if time.ticks_diff(now, next_water_check_ms) >= 0:
            latest_water = read_water_sensor(samples=4)
            next_water_check_ms = time.ticks_add(now, 700)

            if alarm_enabled and latest_water >= water_threshold:
                trigger_alarm('Vand opdaget: {}'.format(latest_water))

        # Keypad
        key = read_key_event()
        if key is not None:
            print('Key:', key)
            handle_key(key)

        # Luk doeren automatisk, naar tiden er gaaet
        if door_open and door_auto_close_at != 0:
            if time.ticks_diff(now, door_auto_close_at) >= 0:
                close_door('auto')

        # Alarmens bip-moenster (skiftevis til og fra, som en rigtig alarm)
        if alarm_enabled and alarm_triggered and time.ticks_diff(alarm_sound_until, now) > 0:
            if time.ticks_diff(now, next_alarm_beep_ms) >= 0:
                alarm_beep_on = not alarm_beep_on

                if alarm_beep_on:
                    buzzer.freq(900)
                    buzzer.duty_u16(buzzer_duty())
                    next_alarm_beep_ms = time.ticks_add(now, 120)
                else:
                    stop_buzzer()
                    next_alarm_beep_ms = time.ticks_add(now, 180)
        else:
            stop_buzzer()

        update_free_led()
        set_status_light()

        # STATUS opdateres automatisk ofte.
        # BESKED opdateres kun ved engangshaendelser.
        if ble_is_connected() and time.ticks_diff(now, next_status_ms) >= 0:
            send_live_status()
            next_status_ms = time.ticks_add(now, 2000)

        time.sleep_ms(50)

finally:
    stop_buzzer()

    try:
        buzzer.deinit()
    except:
        pass

    try:
        close_door('stop', announce=False)
    except:
        pass

    clear_pixel(free_led)
    clear_pixel(keypad_led)
    onboard_led.off()
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')
`,gy=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
import PicoRobotics


# Simpelt tank-styringsprogram til en robotbil med to motorer.
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'TankBil'

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
        else:
            board.motorOff(1)
        print('Venstre motor ->', value)
    elif name == 'HOJRE MOTOR':
        if value > 0:
            board.motorOn(2, 'f', value)
        elif value < 0:
            board.motorOn(2, 'r', -value)
        else:
            board.motorOff(2)
        print('Hojre motor ->', value)
    else:
        print('Ukendt slider:', name)


def on_connect():
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.
    led.on()
    board.motorOff(1)
    board.motorOff(2)


def on_disconnect():
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.
    led.off()
    board.motorOff(1)
    board.motorOff(2)


# callbacks=globals() gør, at PicoBluetooth kan finde on_slider osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,Jr=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:hy},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:fy},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:gy},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:oy},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:uy},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:py},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:iy},{id:"program:graphs",path:"/main.py",label:"Vejrgrafer fra internettet (main.py)",description:"Startprogram der henter vejr fra et API og tegner temperatur og nedbør som grafer over tid. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:cy},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:_y},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:ry},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:my},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:dy},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:ay},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:sy}],by=11914;function yy(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function vy(){return yy()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class xy{constructor(i={}){de(this,"port",null);de(this,"reader",null);de(this,"writer",null);de(this,"readLoopDone",null);de(this,"readLoopActive",!1);de(this,"disconnecting",!1);de(this,"buffer","");de(this,"events");de(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:by}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var g,y;const i=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,f=this.writer,h=this.readLoopDone,b=a==null?void 0:a.closed.catch(()=>{}),p=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}h&&await h.catch(()=>{}),await b;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(f==null?void 0:f.close()),await p}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(g=this.events).onDisconnect)==null||y.call(g))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var a,f,h;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((a=i.writable)==null?void 0:a.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(h=(f=this.events).onLog)==null||h.call(f,"success",`USB-forbindelse oprettet (${Sy(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var f,h,b;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((f=i.readable)==null?void 0:f.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:p,done:g}=await a.read();if(g)break;p&&this.consumeText(c.decode(p,{stream:!0}))}}catch(p){this.readLoopActive&&((b=(h=this.events).onLog)==null||b.call(h,"error",p instanceof Error?p.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var h,b;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,f=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await f}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((b=(h=this.events).onDisconnect)==null||b.call(h))}consumeText(i){var c,a,f,h;(a=(c=this.events).onData)==null||a.call(c,i);for(const b of this.dataListeners)b(i);for(this.buffer+=i;this.buffer.includes(`
`);){const b=this.buffer.indexOf(`
`),p=this.buffer.slice(0,b).replace(/\r$/,"");this.buffer=this.buffer.slice(b+1),(h=(f=this.events).onLine)==null||h.call(f,p)}}}function Sy(s){const i=s.usbVendorId!==void 0?`VID ${s.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=s.usbProductId!==void 0?`PID ${s.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const E_=15e3,Ph=64*1024,Fh=1e5,T_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),ky=64*1024,Gh=8;function N_(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function wy(){return N_()?new SharedArrayBuffer(ky):null}function Ey(s,i){const c=new Int32Array(s,0,2),a=new Uint8Array(s),f=s.byteLength-Gh,h=new TextEncoder().encode(i+`
`);let b=Atomics.load(c,0);for(const p of h)a[Gh+b%f]=p,b+=1;Atomics.store(c,0,b),Atomics.notify(c,0)}const Ty=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class Ny{constructor(){de(this,"worker",null);de(this,"pending",null);de(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,f=c.timeoutMs??E_,h=this.ensureWorker();return new Promise(b=>{const p=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:a,timer:p,onOutput:c.onOutput,resolve:b},h.postMessage({type:"run",id:a,code:jy(i),runtimeUrl:T_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class Ry{constructor(){de(this,"worker",null);de(this,"pending",null);de(this,"nextId",0);de(this,"stdinSab",null)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs===null?null:c.timeoutMs??E_,f=typeof c=="number"?void 0:c.onOutput,h=typeof c=="number"?void 0:c.signal,b=Vf(i,{allowInput:!0});if(b.some(S=>S.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1});const p=++this.nextId,g=this.ensureWorker(),y=wy();return this.stdinSab=y,new Promise(S=>{const k=V=>this.finish(V),T=()=>{this.restartWorker(),k({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1})},D=a===null?null:window.setTimeout(()=>{k({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:b,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:p,timer:D,timeoutMs:a,issues:b,onOutput:f,signal:h,abort:T,resolve:S},h!=null&&h.aborted){T();return}h==null||h.addEventListener("abort",T,{once:!0});const O={type:"run",id:p,code:i,runtimeUrl:T_,interactive:!0,sab:y??void 0};g.postMessage(O)})}sendInput(i){const c=this.pending;!c||!this.stdinSab||(this.refreshTimeout(c),Ey(this.stdinSab,i))}stop(){const i=this.pending;i&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}))}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){this.refreshTimeout(c),(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var a;const c=this.pending;c&&(c.timer!==null&&window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}refreshTimeout(i){i.timeoutMs!==null&&(i.timer!==null&&window.clearTimeout(i.timer),i.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:i.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},i.timeoutMs))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null,this.stdinSab=null}}function jy(s){const i=JSON.stringify(s);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Vf(s,i={}){const c=[],a=new Blob([s]).size;a>Ph&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Ph} bytes.`});const f=s.split(/\r?\n/);for(let h=0;h<f.length;h+=1){const b=h+1,p=rc(f[h]).trim();if(!p)continue;const g=Dy(p);g&&Ty.has(g)&&c.push({level:"error",line:b,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&My(f[h])&&c.push({level:"error",line:b,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const y=p.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&Ay(y)>Fh&&c.push({level:"error",line:b,text:`range(...) er for stor til offline kørsel. Brug højst ${Fh} gentagelser.`})}for(const h of Oy(f))c.push({level:"warning",text:`Funktionen ${h} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function rc(s){let i=null;for(let c=0;c<s.length;c+=1){const a=s[c];if((a==='"'||a==="'")&&s[c-1]!=="\\"&&(i=i===a?null:i??a),a==="#"&&!i)return s.slice(0,c)}return s}function My(s){const i=rc(s);let c=null;for(let a=0;a<i.length;a+=1){const f=i[a];if((f==='"'||f==="'")&&i[a-1]!=="\\"){c=c===f?null:c??f;continue}if(!c&&!(!Vh(i[a-1])||i.slice(a,a+5)!=="input")&&Vh(i[a+5])&&i.slice(a+5).trimStart().startsWith("("))return!0}return!1}function Vh(s){return!s||!/[A-Za-z0-9_]/.test(s)}function Dy(s){const i=s.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=s.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Yh(s){const i=s.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function Ay(s){const i=Number(s[1]),c=s[2]===void 0?void 0:Number(s[2]),a=s[3]===void 0?1:Number(s[3]);if(a===0)return Number.POSITIVE_INFINITY;const b=(c===void 0?i:c)-(c===void 0?0:i);return b>0&&a<0||b<0&&a>0?0:Math.ceil(Math.abs(b/a))}function Oy(s){const i=new Set;for(let c=0;c<s.length;c+=1){const a=rc(s[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const f=a[1],h=Yh(s[c]);for(let b=c+1;b<s.length;b+=1){if(!s[b].trim())continue;if(Yh(s[b])<=h)break;if(new RegExp(`\\b${f}\\s*\\(`).test(rc(s[b]))){i.add(f);break}}}return[...i]}const Cy=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function By(s,i){var S;const c=s.trim(),a=i.split(/\r?\n/),f=Ly(c),h=f?a[f-1]??"":"",b=zy(a,f),p=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(p))return{simple:"Programmet blev stoppet.",technical:c,line:f};if(/MemoryError/.test(p))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/RecursionError/.test(p))return{simple:`En funktion kalder sig selv for mange gange${f?` omkring linje ${f}`:""}.`,technical:c,line:f};const g=p.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(g)return{simple:`Variablen ${g[1]} bruges inde i en funktion, før den har fået en værdi${f?` på linje ${f}`:""}.`,technical:c,line:f};const y=p.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:Py(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${f?` på linje ${f}`:""}.`:`Python kender ikke navnet ${y[1]}${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ZeroDivisionError/.test(p))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError:\s+unexpected indent/.test(p))return{simple:`Der er for meget indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError/.test(p))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ImportError|ModuleNotFoundError/.test(p)){const k=(S=p.match(/['"](.+?)['"]/))==null?void 0:S[1];return{simple:`Python kan ikke finde modulet${k?` ${k}`:""}.`,technical:c,line:f}}if(/OSError/.test(p))return/ENOENT|No such file|Errno\s+2/.test(p)?{simple:`Python kan ikke finde filen${f?` på linje ${f}`:""}.`,technical:c,line:f}:/EACCES|permission|denied/i.test(p)?{simple:`Python har ikke adgang til filen eller enheden${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Der opstod en fejl med en fil eller en enhed${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/SyntaxError/.test(p)){if(/invalid syntax/.test(p)&&b.text.trim().endsWith(","))return{simple:`Linje ${b.line??f} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:b.line??f};const k=Yf(h,f)??Yf(b.text,b.line)??Uy(a,f);return k?{simple:`Mangler måske : efter linje ${k.line}.`,technical:c,line:k.line}:f&&b.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:c,line:f}:Hy(h)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Iy(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Fy(h)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:c,line:f}:Gy(h)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}return/TypeError/.test(p)?/takes .* positional arguments? but .* given/.test(p)||/function takes/.test(p)?{simple:`En funktion får for mange eller for få værdier${f?` på linje ${f}`:""}.`,technical:c,line:f}:/unsupported operand type/.test(p)?{simple:`To værdier kan ikke bruges sammen på den måde${f?` på linje ${f}`:""}.`,technical:c,line:f}:/not callable/.test(p)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:c,line:f}:/IndexError/.test(p)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:c,line:f}:/KeyError/.test(p)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:c,line:f}:/AttributeError/.test(p)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:c,line:f}:/ValueError/.test(p)?/invalid literal for int/.test(p)?{simple:`Teksten kan ikke laves om til et heltal${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}function Ly(s){var f;const c=(f=[...s.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function zy(s,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const a=s[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Yf(s,i){if(!i)return null;const c=s.trim();return!Cy.test(c)||c.endsWith(":")?null:{line:i}}function Uy(s,i){const c=i?Math.min(s.length,i):s.length,a=Math.max(0,c-4);for(let f=c-1;f>=a;f-=1){const h=Yf(s[f]??"",f+1);if(h)return h}return null}function Iy(s){const i=(s.match(/'/g)??[]).length,c=(s.match(/"/g)??[]).length;return i%2===1||c%2===1}function Hy(s){var a,f;const c=(f=(a=s.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:f.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function Py(s,i){const c=s.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function Fy(s){return R_(s)>0}function Gy(s){return R_(s)<0}function R_(s){let i=0,c=null;for(let a=0;a<s.length;a+=1){const f=s[a];if((f==='"'||f==="'")&&s[a-1]!=="\\"){c=c===f?null:c??f;continue}c||((f==="("||f==="["||f==="{")&&(i+=1),(f===")"||f==="]"||f==="}")&&(i-=1))}return i}const $f="/min_kode.py",j_=`print('Hej fra Pico Kontrol Panel')
`,Vy=500,Yy=1200,fs="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function $n(s,i){return`${s}:${i}`}function $y(s){return new Promise(i=>window.setTimeout(i,s))}function qy(){const s=le(d=>d.toggleSideMenu),i=le(d=>d.askConfirm),c=le(d=>d.picoIdeOrigin),a=le(d=>d.active),f=le(d=>d.isBleConnected),h=le(d=>d.bleListFiles),b=le(d=>d.bleReadText),p=le(d=>d.bleWriteText),g=le(d=>d.bleDeleteFile),y=le(d=>d.bleRestartAndReconnect),[S,k]=U.useState(!1),[T,D]=U.useState(!1),[O,V]=U.useState([]),[G,F]=U.useState(!1),[W,q]=U.useState([]),[re,be]=U.useState(null),[me,K]=U.useState(()=>Qo(qo())),[ee,pe]=U.useState($f),[ye,De]=U.useState("local"),[J,We]=U.useState(()=>{var d;return((d=Qo(qo()).find(_=>_.path===$f))==null?void 0:d.content)??j_}),[Oe,Pe]=U.useState([]),[I,te]=U.useState(!1),[ue,ce]=U.useState(""),[we,E]=U.useState(""),[L,ne]=U.useState(null),[oe,xe]=U.useState(!1),[H,A]=U.useState(null),[ae,ve]=U.useState(!1),[Be,Ge]=U.useState({}),[_e,Ae]=U.useState(!1),[vn,Ce]=U.useState(0),[mn,qn]=U.useState(()=>{var d,_;return((d=ji.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((_=ji[0])==null?void 0:_.board)??""}),[Nn,fl]=U.useState(()=>{var d,_;return((d=ji.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((_=ji[0])==null?void 0:_.version)??""}),[$t,Mt]=U.useState(!1),[ur,Gl]=U.useState({top:0,left:0}),[xn,Ai]=U.useState(!1),[Vl,sa]=U.useState(!1),[Oi,nt]=U.useState(!0),[mt,tl]=U.useState(""),[fr,Ci]=U.useState([]),[Rn,pt]=U.useState(null),[zn,Yl]=U.useState(!1),[dl,ml]=U.useState({}),[ht,Xn]=U.useState({}),[qe,rn]=U.useState(null),[an,Cn]=U.useState(null),[fc,Bi]=U.useState(""),[ll,Li]=U.useState(()=>_h().clearTerminalOnRun),[pl,vs]=U.useState(()=>_h().simplifiedErrors),[dr,xs]=U.useState(()=>typeof navigator<"u"?Kh(navigator):!1),$l=U.useRef(null),Dt=U.useRef(null),cn=U.useRef(null),oa=U.useRef(null),Un=U.useRef(null),gn=U.useRef(null),Bn=U.useRef(null),qt=U.useRef(null),ql=U.useRef(null),Xl=U.useRef(null),mr=U.useRef(null),_t=U.useRef(!1),gt=U.useRef(!1),hl=U.useRef(!1),Kn=U.useRef(""),bt=U.useRef(null),Xt=U.useRef(null),rt=U.useRef(null),pn=U.useRef(null),Kt=U.useRef(null),Kl=U.useRef(null),tt=U.useRef(0),yt=U.useRef(null),Ql=U.useRef(null),ca=U.useRef(null),Wl=U.useRef(null),pr=U.useRef([]),_l=U.useRef([]),Qt=U.useRef(null),Qn=vy(),he=c==="control"&&!!a&&f(),hr=he?(a==null?void 0:a.deviceID)??"ble":null,dc=Math.max(1,J.split(`
`).length),ua=new Blob([J]).size,Ss=ye==="pico"?"Picoen":"browseren",_r=U.useMemo(()=>[...new Set(ji.map(d=>d.board))],[]),zi=U.useMemo(()=>ji.filter(d=>d.board===mn),[mn]),jn=ji.find(d=>d.board===mn&&d.version===Nn)??zi[0]??ji[0],Ui=G||!!re||xn||Vl,vt=ye==="pico",Ii=vt?xn:Vl,Mn=vt&&xn&&S&&!he||!vt&&Vl&&!!rt.current,ks=zn||Ii&&!Mn,ws=Mn?"stdin":">>>",gl=Mn?vt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":vt?"Pico MicroPython":"Browser-MicroPython",fa=U.useMemo(()=>{const d=new xy({onData:_=>{gt.current||!_t.current||(Kn.current=(Kn.current+_).slice(-240),/(^|\r?\n)>>> ?$/.test(Kn.current)&&Pi())},onLine:_=>{if(gt.current)return;const x=_.trimEnd();if(hl.current&&x.trim()){Y("info",x);return}if(_t.current&&da(x)){Pi();return}_t.current&&x.trim()&&!mc(x)&&!x.includes("raw REPL")&&Y("info",x)},onLog:Y,onDisconnect:()=>{k(!1),Ai(!1),Yl(!1),_t.current=!1,hl.current=!1,Hi(),Kn.current="",ni(),Y("warning","USB-forbindelse lukket.")}});return $l.current=d,d},[]);function Y(d,_){V(x=>[...x.slice(-140),{level:d,text:_}])}function Es(d){V(_=>[..._.slice(-140),{level:"info",text:d,variant:"input"}])}function da(d){return d.trim()===">>>"}function mc(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Hi(){bt.current!==null&&(window.clearTimeout(bt.current),bt.current=null)}function Pi(){!_t.current||bt.current!==null||(bt.current=window.setTimeout(()=>{bt.current=null,_t.current&&(Ai(!1),_t.current=!1,Kn.current="",Y("success","Pico-koden er færdig."),At())},0))}function At(){const d=cn.current;d&&ha(d,!1)}function Zl(d,_=J,x="error"){const R=By(d,_);V(j=>[...j.slice(-140),{level:x,text:R.simple,technical:R.technical}])}function un(d,_,x=ye){pe(d),De(x),We(_),Xn(R=>({...R,[$n(x,d)]:_})),Wt()}function bl(d,_="pico"){pe(d),De(_),We(""),rn(null),Gl({top:0,left:0}),Wt()}function Wt(){pr.current=[],_l.current=[],Qt.current=null}function Jl(){const d=Un.current;return{content:J,selectionStart:(d==null?void 0:d.selectionStart)??J.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??J.length}}function ma(d){const _=pr.current,x=_.at(-1);(x==null?void 0:x.content)===d.content&&x.selectionStart===d.selectionStart&&x.selectionEnd===d.selectionEnd||(_.push(d),_.length>Vy&&_.shift(),_l.current=[])}function Ts(d,_){let x=0;const R=Math.min(d.length,_.length);for(;x<R&&d[x]===_[x];)x+=1;let j=d.length,Z=_.length;for(;j>x&&Z>x&&d[j-1]===_[Z-1];)j-=1,Z-=1;const se=d.slice(x,j),Ve=_.slice(x,Z),Ee=Ve&&!se?"insert":se&&!Ve?"delete":"replace",Le=Ve.at(-1)??"";return{kind:Ee,boundaryAfter:Ee==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(Le)}}function Fi(d,_){if(_!=="typing")return Qt.current=null,!0;const x=Date.now(),R=Ts(J,d),j=Qt.current,Z=j!==null&&j.path===ee&&j.source===ye&&j.kind===R.kind&&j.kind!=="replace"&&!j.boundaryAfter&&x-j.at<=Yy;return Qt.current={path:ee,source:ye,kind:R.kind,at:x,boundaryAfter:R.boundaryAfter},!Z}function Ot(d){We(d.content),Xn(_=>({..._,[$n(ye,ee)]:d.content})),Bi(""),rn(null),window.requestAnimationFrame(()=>{const _=Un.current;_&&(_.focus(),_.selectionStart=Math.min(d.selectionStart,d.content.length),_.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function pa(){const d=pr.current.pop();return d?(Qt.current=null,_l.current.push(Jl()),Ot(d),!0):!1}function ei(){const d=_l.current.pop();return d?(Qt.current=null,pr.current.push(Jl()),Ot(d),!0):!1}function In(d,_=(Z=>(Z=Un.current)==null?void 0:Z.selectionStart)()??d.length,x=Jl(),R=_,j="programmatic"){x&&d!==J&&Fi(d,j)&&ma(x),We(d),Xn(se=>({...se,[$n(ye,ee)]:d})),Bi(""),wr(d,_),window.requestAnimationFrame(()=>{const se=Un.current;se&&(se.selectionStart=Math.min(_,d.length),se.selectionEnd=Math.min(R,d.length))})}function yl(d,_=ye){Xn(x=>{const R=$n(_,d);if(!(R in x))return x;const j={...x};return delete j[R],j})}function gr(){return dl[ee]===J}function Hn(d,_){ml(x=>({...x,[d]:_}))}function Gi(d,_){Hn(d,_),Xn(x=>({...x,[$n("pico",d)]:_})),ye==="pico"&&ee===d&&We(_)}function ni(){q([]),Pe([]),ml({}),Xn({}),rn(null),pe(d=>{const _=Qo(qo());if(_.find(j=>j.path===d))return d;const R=_[0];return De("local"),We(R.content),Wt(),R.path})}function Dn(d){Sn(),A({value:100,label:d}),Wl.current=window.setTimeout(()=>{Wl.current=null,A(null)},900)}function Sn(){Wl.current!==null&&(window.clearTimeout(Wl.current),Wl.current=null)}function vl(){return H?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(H.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:H.label}),u.jsxs("strong",{children:[Math.round(H.value),"%"]}),H.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:br,"aria-label":"Stop handling",title:"Stop",children:u.jsx(it,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,H.value))}%`}})})]}):null}function br(){Kt.current&&Zt("Stopper læsning...",!0,!0)}function Zt(d="Stopper læsning...",_=!1,x=!1){var R;Sn(),Ql.current=null,tt.current+=1,(R=Kt.current)==null||R.abort(),Kt.current=null,yt.current=null,be(null),F(!1),A(_?{value:(H==null?void 0:H.value)??0,label:d,cancellable:!1}:null),x&&Y("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function pc(d){var _;if(!(yt.current===d||Ql.current===d)){if(Ql.current=d,Kl.current){tt.current+=1,(_=Kt.current)==null||_.abort(),Kt.current=null,yt.current=null,bl(d),be(d),F(!0),Sn(),A({value:2,label:`Skifter til ${Ne(d)}...`,cancellable:!0});return}yr()}}function yr(){if(Kl.current)return;const d=Ql.current;if(!d)return;Ql.current=null;const _=tt.current+1;tt.current=_;const x=new AbortController;Kt.current=x,yt.current=d,bl(d),be(d),F(!0),Sn(),A({value:12,label:`Indlæser ${Ne(d)}...`,cancellable:!0});const R=(async()=>{try{const j=await b(d,(Z,se)=>{tt.current===_&&A({value:Z,label:se,cancellable:!0})},x.signal);if(x.signal.aborted||tt.current!==_)return;un(d,j,"pico"),Hn(d,j),Dn("Fil indlæst")}catch(j){if(tt.current!==_)return;Qy(j)||x.signal.aborted?Y("info",`Stoppede læsning af ${Ne(d)}.`):(A(null),Y("error",j instanceof Error?j.message:"BLE læsning fejlede."))}})();Kl.current=R,R.finally(()=>{if(Kl.current!==R)return;Kl.current=null,Kt.current===x&&(Kt.current=null),yt.current===d&&(yt.current=null),!!Ql.current||(be(null),F(!1),x.signal.aborted&&A(null)),yr()})}async function ti(d){const _=gt.current;gt.current=!0;try{return await d()}finally{gt.current=_}}U.useEffect(()=>{if(!Oi)return;const d=ql.current;d&&(d.scrollTop=d.scrollHeight)},[O,Oi]),U.useEffect(()=>{yb({clearTerminalOnRun:ll,simplifiedErrors:pl})},[ll,pl]),U.useEffect(()=>{var d;zi.some(_=>_.version===Nn)||fl(((d=zi[0])==null?void 0:d.version)??"")},[zi,Nn]),U.useEffect(()=>{xs(Kh(navigator))},[]),U.useEffect(()=>{const d=()=>{const _=$l.current;Dt.current=null,cn.current=null,$l.current=null,_==null||_.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var _,x;Sn(),(_=Xt.current)==null||_.dispose(),Xt.current=null,(x=rt.current)==null||x.dispose(),rt.current=null,window.removeEventListener("pagehide",d),d()}},[]),U.useEffect(()=>{const d=_=>{!(_.ctrlKey||_.metaKey)||_.key.toLowerCase()!=="s"||(_.preventDefault(),!G&&ee.trim()&&!dr&&!oe&&!L&&!I&&js())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ye,he,G,S,J,ee,dr,oe,L,I]);function il(d,_,x){K(R=>{const j=Uf(R,d,_,x);return ss(j),j})}function Vi(d,_){K(x=>{const R=x.find(Ee=>Ee.path===d),Z=ht[$n("local",d)]??(R==null?void 0:R.content),se=Z!==void 0&&ul(Z)!==ul(_)?Uf(x,e_(d,Jo(x)),Z,!1):x,Ve=Uf(se,d,_,!1);return ss(Ve),Ve}),Xn(x=>({...x,[$n("local",d)]:_})),ye==="local"&&ee===d&&(We(_),Bi(""),rn(null),Wt())}const vr=fv(W,me,ht,S||he);U.useEffect(()=>{he&&fn()},[he]),U.useEffect(()=>{const d=ca.current;d&&d!==hr&&ni(),ca.current=hr},[hr]);async function hc(){if(Qn.supported){D(!0);try{await fa.requestAndConnect();const d=new Q0(fa);Dt.current=d,cn.current=new ty(d),k(!0),Ce(0),await d.interrupt(),await _c(d),Y("success","Sendte stop-signal til Pico-terminalen."),await ha(cn.current),await Rs(cn.current)}catch(d){Y("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await fa.disconnect()}catch(_){Y("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.");return}Ce(_=>{const x=_+1;return x>=3&&(Y("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Ae(!0)),x}),k(!1)}finally{D(!1)}}}async function _c(d){const _=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(_.error||!_.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function gc(){var d;try{await((d=$l.current)==null?void 0:d.disconnect()),Dt.current=null,cn.current=null,k(!1),ni()}catch(_){Y("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.")}}async function at(d){const _=cn.current;if(_){F(!0),gt.current=!0;try{await d(_)}catch(x){A(null),Y("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{gt.current=!1,F(!1)}}}async function fn(d=!0){if(he){F(!0);try{const _=await h();q(_),d&&Y("success",`Indlæste ${_.length} filer fra Pico via Bluetooth.`)}catch(_){Y("error",_ instanceof Error?_.message:"BLE filhandling fejlede.")}finally{F(!1)}return}await ha(cn.current,d)}async function ha(d,_=!0){if(d){F(!0);try{const x=await ti(()=>d.list("/"));q(x),_&&Y("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){Y("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{F(!1)}}}async function Yi(){if(he){F(!0),A({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Ns((_,x)=>A({value:_,label:x}));Pe(d),Dn("Fil-tjek færdigt")}catch(d){A(null),Y("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{F(!1)}return}await Rs(cn.current)}async function Ns(d){const _=[],x=Jr.filter(j=>j.kind==="library"&&!Mi(j));let R=0;for(const j of Jr){if(j.kind==="program"){_.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Mi(j)){_.push({...j,status:"unknown",detail:"Opdateres via USB"});continue}try{const Z=R/Math.max(1,x.length)*100,se=100/Math.max(1,x.length);Y("info",`Tjekker ${j.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,Z),`Tjekker ${j.label} på Pico...`);const Ve=await b(j.path,(Le,dn)=>{d==null||d(Math.min(95,Z+Le/100*se),`${j.label}: ${dn}`)}),Ee=ul(Ve)===ul(j.content);_.push({...j,status:Ee?"ok":"outdated",detail:Ee?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{_.push({...j,status:"missing",detail:"Mangler på Pico"})}finally{R+=1}}return d==null||d(100,"Fil-tjek færdigt"),_}async function Rs(d){if(d){F(!0);try{const _=await ti(()=>_a(d)),x=_;Pe(x)}catch(_){Y("error",_ instanceof Error?_.message:"Runtime check fejlede.")}finally{F(!1)}}}async function _a(d){if(!d)return[];const _=[];for(const x of Jr){if(x.kind==="program"){_.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const R=await d.readText(x.path),j=ul(R)===ul(x.content);_.push({...x,status:j?"ok":"outdated",detail:j?"Matcher appens version":"Matcher ikke appens version"})}catch{_.push({...x,status:"missing",detail:"Mangler på Pico"})}}return _}async function bc(d=ee){if(he){pc(d);return}be(d),await at(async _=>{A({value:12,label:`Indlæser ${Ne(d)}...`});const x=await yc(_,d);un(d,x,"pico"),Hn(d,x),Dn("Fil indlæst")}),be(null)}async function yc(d,_){var x;try{return await d.readText(_)}catch(R){await((x=Dt.current)==null?void 0:x.stop().catch(()=>{})),await $y(120);try{return await d.readText(_)}catch{throw R}}}function vc(){xe(!0)}async function js(){if(ye==="pico"){if(!S&&!he){Y("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await ga();return}xr()}function xr(){if(Di(ee)){Y("error",fs);return}il(ee,J,!1),De("local"),Xn(d=>({...d,[$n("local",ee)]:J})),xe(!1),Y("success",`Gemte ${Ne(ee)} lokalt.`)}async function ga(){if(xe(!1),Di(ee))return A(null),Y("error",fs),!1;if(A({value:0,label:"Starter gemning..."}),he){F(!0);try{return await p(ee,J,(_,x)=>A({value:_,label:x})),Hn(ee,J),De("pico"),Xn(_=>({..._,[$n("pico",ee)]:J})),Dn("Gemt på Pico via Bluetooth"),Y("success",`Gemte ${Ne(ee)} på Pico via Bluetooth.`),Ko(ee)&&(Mt(!0),Y("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await fn(!1),!0}catch(_){return A(null),Y("error",_ instanceof Error?_.message:"BLE gem fejlede."),!1}finally{F(!1)}}if(!cn.current)return A(null),!1;let d=!1;return await at(async _=>{xl(ee,"pico")?await _.replaceTextSafely(ee,J,(x,R)=>A({value:x,label:R})):await _.writeText(ee,J,(x,R)=>A({value:x,label:R})),Hn(ee,J),De("pico"),Xn(x=>({...x,[$n("pico",ee)]:J})),Dn("Gemt på Pico via USB"),Y("success",`Gemte ${ee}.`),await fn(),await Yi(),d=!0}),d}function xc(){Ms(Ne(ee),J),xe(!1),Y("success",`Downloadede ${Ne(ee)}.`)}function Ms(d,_){const x=new Blob([_],{type:"text/plain;charset=utf-8"}),R=URL.createObjectURL(x),j=document.createElement("a");j.href=R,j.download=d,j.click(),URL.revokeObjectURL(R)}async function ba(d){F(!0),Mt(!1),A({value:10,label:"Genstarter Pico..."});try{await y(d)?(Dn("Pico genforbundet"),Y("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await fn()):(A(null),Y("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(_){A(null),Y("error",_ instanceof Error?_.message:"Genstart/genforbindelse mislykkedes.")}finally{F(!1)}}function Ds(d){var Z,se;const _=d??{path:ee,source:ye},x=_.source==="pico"?"Pico":"browser",R=(d==null?void 0:d.versions.length)??(_.source==="pico"?((Z=ea(W).get(_.path))==null?void 0:Z.length)??0:((se=ea(Jo(me)).get(_.path))==null?void 0:se.length)??0),j=R>0?` Det sletter også filens versionshistorik (${R} gemte versioner).`:"";ne(null),i({title:"Slet fil",message:`Vil du slette ${Ne(_.path)} fra ${x}?${j}`,confirmLabel:"Slet",onConfirm:()=>{wc(_)}})}function Sc(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{kc()}})}async function kc(){if(!cn.current){Y("error","Forbind Picoen med USB først.");return}await at(async d=>{await d.delete("/DeviceSettings.txt").catch(_=>{const x=_ instanceof Error?_.message:"";if(!/ENOENT|No such file|not found/i.test(x))throw _}),ml(_=>{const x={..._};return delete x["/DeviceSettings.txt"],x}),yl("/DeviceSettings.txt","pico"),Y("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await fn()})}function As(d,_,x){const R=vr.filter(se=>se.kind==="file"&&se.type==="file"),j=R.findIndex(se=>se.path===d&&se.source===_);if(j===-1)return null;const Z=se=>!!se&&!(se.path===d&&se.source===_)&&!(se.source===_&&x.has(se.path))&&!(he&&Mi(se));for(const se of[!0,!1])for(let Ve=1;Ve<R.length;Ve+=1){const Ee=R[j+Ve];if(Z(Ee)&&(!se||Ee.source===_))return Ee;const Le=R[j-Ve];if(Z(Le)&&(!se||Le.source===_))return Le}return null}function ya(d){if(d){zs(d);return}const _=Qo(qo())[0];un(_.path,ht[$n("local",_.path)]??_.content,"local")}async function wc(d){const _=d.path,x=d.source,R=_===ee&&x===ye;if(x==="local"){const Ee=ea(Jo(me)).get(_)??[],Le=new Set([_,...Ee.map(sn=>sn.path)]),dn=R?As(_,x,Le):null,Wn=me.filter(sn=>!Le.has(sn.path));K(Wn),ss(Wn);for(const sn of Le)yl(sn,"local");R&&ya(dn);const je=Ee.length>0?` og ${Ee.length} gemte versioner`:"";Y("warning",`Slettede ${Ne(_)}${je} fra browseren.`);return}const j=ea(W).get(_)??[],Z=[_,...j.map(Ee=>Ee.path)],se=R?As(_,x,new Set(Z)):null;if(he){F(!0);try{for(const Le of Z)await g(Le);ml(Le=>{const dn={...Le};for(const Wn of Z)delete dn[Wn];return dn});for(const Le of Z)yl(Le,"pico");const Ee=j.length>0?` og ${j.length} gemte versioner`:"";Y("warning",`Slettede ${Ne(_)}${Ee} på Pico via Bluetooth.`),await fn(),R&&ya(se)}catch(Ee){Y("error",Ee instanceof Error?Ee.message:"BLE sletning fejlede.")}finally{F(!1)}return}if(!cn.current){Y("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Ve=!1;await at(async Ee=>{for(const dn of Z)await Ee.delete(dn);ml(dn=>{const Wn={...dn};for(const je of Z)delete Wn[je];return Wn});const Le=j.length>0?` og ${j.length} gemte versioner`:"";Y("warning",`Slettede ${_}${Le}.`);for(const dn of Z)yl(dn,"pico");await fn(),await Yi(),Ve=!0}),Ve&&R&&ya(se)}async function Ec(d){if(!d)return;const _=Xy(d.name);if(!_){Y("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Di(_)){Y("error",fs);return}if(d.size>128*1024){Y("error","Filen er for stor til Pico-værkstedet.");return}const x=await d.text();if(ye==="local"){il(_,x,!0),un(_,x,"local"),Y("success",`Importerede ${Ne(_)} i browseren.`);return}if(!S&&!he){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&Mi({path:_})){Y("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(A({value:0,label:"Uploader fil til Pico..."}),he){F(!0);try{await p(_,x,(j,Z)=>A({value:j,label:Z})),Hn(_,x),un(_,x,"pico"),Dn("Fil uploadet til Pico"),Y("success",`Importerede ${Ne(_)} på Pico via Bluetooth.`),await fn()}catch(j){A(null),Y("error",j instanceof Error?j.message:"Kunne ikke importere filen til Pico.")}finally{F(!1)}return}if(!cn.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await at(async j=>{xl(_,"pico")?await j.replaceTextSafely(_,x,(Z,se)=>A({value:Z,label:se})):await j.writeText(_,x,(Z,se)=>A({value:Z,label:se})),Hn(_,x),un(_,x,"pico"),Dn("Fil uploadet til Pico"),Y("success",`Importerede ${Ne(_)} på Pico.`),await fn(),await Yi()})}async function Tc(){ce(""),te(!0)}function Nc(){const d=$h(ue);if(!d)return;if(Di(d)){Y("error",fs);return}const _=ye;if(xl(d,_)){Y("error",`Der findes allerede en fil med navnet ${Ne(d)} i ${_==="pico"?"Pico":"browseren"}.`);return}if(_==="local"){il(d,"",!1),un(d,"","local"),te(!1),Y("success",`Oprettede ${Ne(d)} i browseren.`);return}va(d)}async function va(d){if(!S&&!he){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(te(!1),A({value:0,label:"Opretter fil på Pico..."}),he){F(!0);try{await p(d,"",(_,x)=>A({value:_,label:x})),Hn(d,""),un(d,"","pico"),Dn("Fil oprettet på Pico"),Y("success",`Oprettede ${Ne(d)} på Pico via Bluetooth.`),await fn()}catch(_){A(null),Y("error",_ instanceof Error?_.message:"Kunne ikke oprette fil på Pico.")}finally{F(!1)}return}if(!cn.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await at(async _=>{await _.writeText(d,"",(x,R)=>A({value:x,label:R})),Hn(d,""),un(d,"","pico"),Dn("Fil oprettet på Pico"),Y("success",`Oprettede ${Ne(d)} på Pico.`),await fn()})}function $i(d){d.type==="file"&&(ne(d),E(Ky(d.path)))}async function Rc(d){if(!L)return;const _=L.path;if(ne(null),L.source==="local"){const x=me.find(R=>R.path===d.path);if(!x){Y("error","Kunne ikke finde versionen i browseren.");return}Vi(_,x.content),un(_,x.content,"local"),Y("success",`Gendannede ${Ne(d.path)} i browseren.`);return}if(A({value:0,label:"Gendanner version..."}),he){F(!0);try{const x=await b(d.path);await p(_,x,(R,j)=>A({value:R,label:j})),Hn(_,x),un(_,x,"pico"),Dn("Version gendannet"),await fn(!1)}catch(x){A(null),Y("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{F(!1)}return}cn.current&&await at(async x=>{await x.replaceTextSafely(_,await x.readText(d.path),(j,Z)=>A({value:j,label:Z}));const R=await x.readText(_);Hn(_,R),un(_,R,"pico"),Dn("Version gendannet"),await fn()})}function Os(d){const _=(L==null?void 0:L.source)==="local"?"browseren":"Pico";i({title:"Slet version",message:`Vil du slette ${Ne(d.path)} fra ${_}?`,confirmLabel:"Slet",onConfirm:()=>{Cs(d)}})}async function Cs(d){if((L==null?void 0:L.source)==="local"){const _=me.filter(x=>x.path!==d.path);K(_),ss(_),yl(d.path,"local"),ne(x=>x&&{...x,versions:x.versions.filter(R=>R.path!==d.path)}),Y("warning",`Slettede ${Ne(d.path)} fra browserens versionshistorik.`);return}if(he){F(!0);try{await g(d.path),await fn(!1),ne(_=>_&&{..._,versions:_.versions.filter(x=>x.path!==d.path)})}catch(_){Y("error",_ instanceof Error?_.message:"Kunne ikke slette versionen.")}finally{F(!1)}return}cn.current&&await at(async _=>{await _.delete(d.path),await fn(!1),ne(x=>x&&{...x,versions:x.versions.filter(R=>R.path!==d.path)})})}async function Bs(){var x;if(!L)return;const d=L,_=cv(d.path,R=>xl(R,d.source));if(!_){Y("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Ne(d.path)}.`);return}if(d.source==="local"){const R=ht[$n("local",d.path)]??((x=me.find(j=>j.path===d.path))==null?void 0:x.content)??"";il(_,R,!1),un(_,R,"local"),ne(null),Y("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} i browseren.`);return}if(ne(null),A({value:0,label:"Duplikerer fil..."}),he){F(!0);try{const R=dl[d.path]??await b(d.path);await p(_,R,(j,Z)=>A({value:j,label:Z})),Hn(_,R),un(_,R,"pico"),Dn("Fil duplikeret"),await fn(!1),Y("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} på Pico via Bluetooth.`)}catch(R){A(null),Y("error",R instanceof Error?R.message:"Kunne ikke duplikere filen.")}finally{F(!1)}return}if(!cn.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await at(async R=>{const j=await R.readText(d.path);await R.writeText(_,j,(Z,se)=>A({value:Z,label:se})),Hn(_,j),un(_,j,"pico"),Dn("Fil duplikeret"),await fn(!1),Y("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} på Pico.`)})}async function Ls(){if(!L)return;const d=L,_=zf(we,ds(d.path));if(!_||_===d.path)return;if(Di(_)){Y("error",fs);return}if(xl(_,d.source)){Y("error",`Der findes allerede en fil med navnet ${Ne(_)}.`);return}const x=d.source==="local",R=d.source==="pico";if(he&&R&&(Ko(d.path)||Ko(_))){Y("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}F(!0);try{if(R)if(he){const j=dl[d.path]??await b(d.path);await p(_,j,(Z,se)=>A({value:Z,label:se})),await g(d.path),ml(Z=>({...t_(Z,d.path,_),[_]:j}))}else cn.current&&(await ti(()=>cn.current.rename(d.path,_)),ml(j=>t_(j,d.path,_)));x&&K(j=>{const Z=j.map(se=>se.path===d.path?{...se,path:_,updatedAt:Date.now()}:se);return ss(Z),Z}),ee===d.path&&ye===d.source&&pe(_),Xn(j=>pv(j,d.source,d.path,_)),ne(null),E(""),Y("success",`Omdøbte ${Ne(d.path)} til ${Ne(_)}.`),R&&await fn()}catch(j){Y("error",j instanceof Error?j.message:"Kunne ikke omdøbe filen.")}finally{A(null),F(!1)}}function xl(d,_){return _==="pico"?W.some(x=>x.path===d):me.some(x=>x.path===d)}async function li(d,_){if(!xl(d,"pico"))return;const x=e_(d,W),R=dl[d]??await b(d);_!==void 0&&ul(R)===ul(_)||await p(x,R)}function zs(d){if(d.type!=="file"){he&&Zt(void 0,!1),pe(d.path),De(d.source);return}if(he&&Mi(d)){Y("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){he&&Zt(void 0,!1);const x=me.find(R=>R.path===d.path);un(d.path,ht[$n("local",d.path)]??(x==null?void 0:x.content)??"","local");return}const _=$n("pico",d.path);if(Object.prototype.hasOwnProperty.call(ht,_)){he&&Zt(void 0,!1),un(d.path,ht[_],"pico");return}if(Object.prototype.hasOwnProperty.call(dl,d.path)){he&&Zt(void 0,!1),un(d.path,dl[d.path],"pico");return}bc(d.path)}async function Us(){if(!S&&!he){const d=qh();Pe(d),Ge(Xh(d)),ve(!0),A(null);return}F(!0),A({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),Y("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Oe.length>0?Oe:he?await Ns((_,x)=>A({value:_,label:x})):await ti(()=>_a(cn.current));Pe(d),Ge(Xh(d)),ve(!0),A(null)}catch(d){A(null),Y("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{F(!1)}}async function jc(){if(ve(!1),he){F(!0);try{const _=(Oe.length>0?Oe:Jr.map(R=>({...R,status:"unknown",detail:"Ikke tjekket"}))).filter(R=>Be[R.id]&&!Mi(R));if(_.length===0){Y("info","Ingen filer valgt til installation.");return}let x=null;A({value:0,label:"Starter installation..."});for(const[R,j]of _.entries()){Y("info",`Installerer ${j.label} via Bluetooth...`);const Z=R/_.length*100,se=100/_.length;await li(j.path,j.content),await p(j.path,j.content,(Ve,Ee)=>{A({value:Math.min(99,Z+Ve/100*se),label:`${j.label}: ${Ee}`})}),Gi(j.path,j.content),Y("success",`Installerede ${j.label}.`),j.kind==="library"&&(x=j),Ko(j.path)&&Mt(!0)}Dn("Installation færdig"),await fn(!1),await Yi(),x&&ii(x)}catch(d){A(null),Y("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{F(!1)}return}await at(async d=>{const x=(Oe.length>0?Oe:Jr.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Be[j.id]);if(x.length===0){Y("info","Ingen filer valgt til installation.");return}let R=null;A({value:0,label:"Starter installation..."});for(const[j,Z]of x.entries()){Y("info",`Installerer ${Z.label}...`);const se=j/x.length*100,Ve=100/x.length,Ee=await d.readText(Z.path).catch(()=>null);Ee!==null&&ul(Ee)===ul(Z.content)?(A({value:Math.min(99,se+Ve),label:`${Z.label}: Allerede nyeste version`}),Y("info",`${Z.label} findes allerede i samme version.`)):(await d.replaceTextSafely(Z.path,Z.content,(Le,dn)=>{A({value:Math.min(99,se+Le/100*Ve),label:`${Z.label}: ${dn}`})},{createBackup:!0}),Y("success",`Installerede ${Z.label}.`)),Gi(Z.path,Z.content),Z.kind==="library"&&(R=Z)}Dn("Installation færdig"),await fn(!1),await Yi(),R&&ii(R)})}function xa(){return(Oe.length>0?Oe:qh()).filter(_=>Be[_.id])}function Is(){const d=xa();if(d.length===0){Y("info","Ingen filer valgt.");return}for(const _ of d)Vi(_.path,_.content);ve(!1),Y("success",`Gemte ${d.length} filer i browseren.`)}function qi(){const d=xa();if(d.length===0){Y("info","Ingen filer valgt.");return}d.forEach((_,x)=>{window.setTimeout(()=>{Ms(Ne(_.path),_.content)},x*120)}),ve(!1),Y("success",`Starter download af ${d.length} filer.`)}function ii(d){un(d.path,d.content,"pico"),Hn(d.path,d.content),Y("info",`Åbnede ${d.label} i editoren.`)}function Mc(d,_){Ge(x=>{if(d.kind!=="program")return{...x,[d.id]:_};const R={...x};for(const j of Oe)j.kind==="program"&&(R[j.id]=!1);return R[d.id]=_,R})}async function Sr(){if(Ac(),he&&ye==="pico"){Y("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ye==="local"){await Hs();return}const d=Dt.current;if(!d){Y("error",`${Ne(ee)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(ee.endsWith(".py")){if(!gr()&&(Y("info",`${Ne(ee)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await ga())){Y("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(G)return;Hi(),Kn.current="",nt(!0);try{await d.runFile(ee,()=>{Hi(),Kn.current="",hl.current=!1,Ai(!0),_t.current=!0}),Y("success",`Kører ${Ne(ee)}. Brug Stop for at afbryde.`)}catch(_){Ai(!1),_t.current=!1,Hi(),Kn.current="",Y("error",_ instanceof Error?_.message:"Kunne ikke starte koden.")}return}F(!0);try{const _=await d.exec(J,2e4);_.output.trim()&&Y("info",_.output),_.error.trim()&&Zl(_.error,J),!_.output.trim()&&!_.error.trim()&&Y("success","Koden kørte uden output.")}catch(_){Y("error",_ instanceof Error?_.message:"Kunne ikke køre koden.")}finally{F(!1)}}async function Hs(){const d=Vf(J,{allowInput:!0});if(d.some(R=>R.level==="error")){for(const R of d){const j=R.line?`Linje ${R.line}: `:"";Y(R.level==="error"?"error":"warning",`${j}${R.text}`)}return}/\binput\s*\(/.test(J)&&!N_()&&Y("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const _=new AbortController;pn.current=_;const x=new Ry;rt.current=x,F(!0),sa(!0),nt(!0),Y("info",S?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const R=[],j=await x.run(J,{timeoutMs:null,signal:_.signal,onOutput:Ee=>{R.push(Ee),Y("info",Ee)}});for(const Ee of j.issues){const Le=Ee.line?`Linje ${Ee.line}: `:"";Y(Ee.level==="error"?"error":"warning",`${Le}${Ee.text}`)}const Z=[...R,j.output].filter(Boolean).join(`
`).trim(),se=j.output.trim();!j.error.trim()&&Wy(Z)?Zl(Z,J):(se&&Y("info",se),j.error.trim()&&Zl(j.error,J,j.unavailable?"warning":"error")),j.ok&&!Z&&!j.error.trim()&&Y("success","Browser-MicroPython kørte uden output.")}finally{pn.current=null,rt.current=null,x.dispose(),sa(!1),F(!1)}}async function Ps(){var _,x,R;if(Vl){(_=pn.current)==null||_.abort(),(x=rt.current)==null||x.stop(),Y("warning","Stoppede Browser-MicroPython."),nt(!0);return}if(!vt&&zn){(R=Xt.current)==null||R.reset(),Yl(!1),Y("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),nt(!0);return}const d=Dt.current;if(d)try{await d.stop(),Y("warning","Stoppede koden på Pico.")}catch(j){Y("error",j instanceof Error?j.message:"Kunne ikke stoppe koden.")}finally{Ai(!1),_t.current=!1,Hi(),Kn.current="",nt(!0),At()}}function Sa(){const d=ql.current;if(!d)return;const _=d.scrollHeight-d.scrollTop-d.clientHeight<12;nt(_)}function ka(){V([]),nt(!0)}function Fs(){window.requestAnimationFrame(()=>{const d=ql.current;d&&(d.scrollTop=d.scrollHeight)})}async function kr(){const d=Mn?mt:mt.trimEnd();if(Mn){if(!vt){const R=rt.current;if(!R){Y("warning","Browser-MicroPython kører ikke lige nu."),xt();return}tl(""),nt(!0),Es(d),R.sendInput(d),xt();return}const x=Dt.current;if(!x){Y("warning","Pico-terminalen er ikke forbundet."),xt();return}tl(""),nt(!0);try{await x.sendProgramInput(d)}catch(R){Y("error",R instanceof Error?R.message:"Kunne ikke sende input til Pico-koden.")}finally{xt()}return}if(!d.trim())return;if(Ci(x=>(x.at(-1)===d?x:[...x,d]).slice(-80)),pt(null),Cn(null),Ii){Y("warning",vt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),xt();return}if(!vt){const x=Vf(d);if(x.some(j=>j.level==="error")){for(const j of x){const Z=j.line?"Linje "+j.line+": ":"";Y(j.level==="error"?"error":"warning",Z+j.text)}xt();return}const R=Xt.current??new Ny;Xt.current=R,tl(""),Yl(!0),nt(!0),Y("info",">>> "+d);try{let j=!1;const Z=await R.send(d,{timeoutMs:15e3,onOutput:Ve=>{j=!0,Y("info",Ve)}}),se=Z.output.trim();se&&!j&&Y("info",se),Z.error.trim()&&Zl(Z.error,d,Z.unavailable?"warning":"error")}catch(j){Y("error",j instanceof Error?j.message:"Browser-MicroPython-terminalen fejlede.")}finally{Yl(!1),xt()}return}if(he){Y("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),xt();return}const _=Dt.current;if(!S||!_){Y("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),xt();return}tl(""),Yl(!0),nt(!0),hl.current=!0,Y("info",">>> "+d);try{await _.sendFriendlyLine(d)}catch(x){hl.current=!1,Y("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Yl(!1),xt()}}function xt(){window.requestAnimationFrame(()=>{const d=Xl.current;if(!d||d.disabled)return;d.focus();const _=d.value.length;d.selectionStart=_,d.selectionEnd=_})}function Gs(d,_,x){if(x.length===0)return null;const R=S||he;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:_})]}),u.jsx("div",{className:"ide-install-scroll",children:x.map(j=>{const Z=he&&Mi(j);return u.jsxs("label",{className:`ide-install-row ${Z?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Be[j.id],disabled:Z,onChange:se=>Mc(j,se.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Dc(j),R&&j.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${j.status}`,children:Z?"USB":uv(j.status)})]}),u.jsx("small",{children:j.description})]})]},j.id)})})]})}function Dc(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Ac(){ll&&V([]),nt(!0)}function wa(d,_){const x=d.indexOf(`
`,_);return x===-1?d.length:x}function wr(d,_){if(Wh(d,_)){rn(null);return}const x=Xf(d,_);if(!x||x.query.length<1){rn(null);return}const R=Qh(d,_,!0).slice(0,8),j=Zh(Un.current,x.start,R.length);R.length>0&&j?(rn({items:R,selected:0,start:x.start,end:_,position:j}),Sl(qt.current,0)):rn(null)}function Pn(d,_){if(Wh(d,_)){Cn(null);return}const x=Xf(d,_);if(!x||x.query.length<1){Cn(null);return}const R=Qh(d,_,!1).slice(0,8),j=Zh(Xl.current,x.start,R.length);R.length>0&&j?(Cn({items:R,selected:0,start:x.start,end:_,position:j}),Sl(mr.current,0)):Cn(null)}function ri(d){const _=d.value.slice(d.selectionStart,d.selectionEnd);Bi(iv(_)?_:"")}function Sl(d,_){window.requestAnimationFrame(()=>{const x=d==null?void 0:d.querySelector(`[data-autocomplete-index="${_}"]`);x==null||x.scrollIntoView({block:"nearest"})})}function Er(d=qe==null?void 0:qe.items[qe.selected]){if(!d||!qe)return;const _=Jl(),x=J.slice(0,qe.start)+d.insert+J.slice(qe.end),R=qe.start+d.insert.length-(d.insert.endsWith("()")?1:0);rn(null),In(x,R,_),window.requestAnimationFrame(()=>{const j=Un.current;j&&j.focus()})}function Ea(d=an==null?void 0:an.items[an.selected]){if(!d||!an)return;const _=mt.slice(0,an.start)+d.insert+mt.slice(an.end),x=an.start+d.insert.length-(d.insert.endsWith("()")?1:0);tl(_),Cn(null),window.requestAnimationFrame(()=>{const R=Xl.current;R&&(R.focus(),R.selectionStart=x,R.selectionEnd=x)})}function Vs(d){const _=Un.current;if(!_)return!1;const x=_.selectionStart,R=_.selectionEnd,j={content:J,selectionStart:x,selectionEnd:R},Z=J.lastIndexOf(`
`,x-1)+1,se=R>x&&J[R-1]===`
`?R-1:R,Ve=wa(J,se),Ee=Ve<J.length?Ve+1:Ve,Le=J.slice(Z,Ee);if(d<0){if(Z===0)return!1;const Jt=J.lastIndexOf(`
`,Z-2)+1,Ct=J.slice(Jt,Z),wl=J.slice(0,Jt)+Le+Ct+J.slice(Ee),rl=-Ct.length;return In(wl,x+rl,j,R+rl),!0}if(Ee>=J.length)return!1;const dn=wa(J,Ee),Wn=dn<J.length?dn+1:dn,je=J.slice(Ee,Wn),sn=J.slice(0,Z)+je+Le+J.slice(Wn),kl=je.length;return In(sn,x+kl,j,R+kl),!0}function Ta(d){var Wn;if(Ui){(d.key==="Enter"||d.key==="Tab"||(d.ctrlKey||d.metaKey)&&["z","y","s"].includes(d.key.toLowerCase()))&&d.preventDefault();return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?ei():pa())&&rn(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),ei()&&rn(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!G&&ee.trim()&&js();return}if(d.altKey&&!d.ctrlKey&&!d.metaKey&&(d.key==="ArrowUp"||d.key==="ArrowDown")){d.preventDefault(),Vs(d.key==="ArrowUp"?-1:1)&&rn(null);return}if(qe){if(d.key==="ArrowDown"){d.preventDefault(),rn(je=>{if(!je)return je;const sn=(je.selected+1)%je.items.length;return Sl(qt.current,sn),{...je,selected:sn}});return}if(d.key==="ArrowUp"){d.preventDefault(),rn(je=>{if(!je)return je;const sn=(je.selected-1+je.items.length)%je.items.length;return Sl(qt.current,sn),{...je,selected:sn}});return}if(d.key==="Tab"){d.preventDefault(),Er();return}if(d.key==="Enter"){if(!(qe.items[qe.selected]&&D_(qe.items[qe.selected],J.slice(qe.start,qe.end)))){d.preventDefault(),Er();return}rn(null)}if(d.key==="Escape"){d.preventDefault(),rn(null);return}}if(d.key==="Enter"){d.preventDefault();const je=d.currentTarget,sn=je.selectionStart,kl=je.selectionEnd,Jt={content:J,selectionStart:sn,selectionEnd:kl},Ct=J.lastIndexOf(`
`,sn-1)+1,wl=J.slice(Ct,sn),rl=((Wn=wl.match(/^[ \t]*/))==null?void 0:Wn[0])??"",st=wl.trimEnd().endsWith(":")?"    ":"",El=`
${rl}${st}`,Zn=J.slice(0,sn)+El+J.slice(kl),Bt=sn+El.length;In(Zn,Bt,Jt),window.requestAnimationFrame(()=>{je.selectionStart=Bt,je.selectionEnd=Bt});return}if(d.key!=="Tab")return;d.preventDefault();const _=d.currentTarget,x=_.selectionStart,R=_.selectionEnd,j={content:J,selectionStart:x,selectionEnd:R},Z="    ";if(d.shiftKey){const je=J.lastIndexOf(`
`,x-1)+1,sn=x===R?wa(J,x):R,kl=J.slice(je,sn);let Jt=0,Ct=0;const wl=kl.replace(/(^|\n)( {1,4}|\t)/g,(st,El,Zn,Bt)=>{const Tr=Zn.length;return je+Bt<x&&(Jt+=Tr),Ct+=Tr,El});if(Ct===0)return;const rl=J.slice(0,je)+wl+J.slice(sn);In(rl,Math.max(je,x-Jt),j,x===R?Math.max(je,x-Jt):Math.max(je,R-Ct)),window.requestAnimationFrame(()=>{_.selectionStart=Math.max(je,x-Jt),_.selectionEnd=x===R?_.selectionStart:Math.max(_.selectionStart,R-Ct)});return}if(x===R){const je=J.slice(0,x)+Z+J.slice(R);In(je,x+Z.length,j),window.requestAnimationFrame(()=>{_.selectionStart=x+Z.length,_.selectionEnd=x+Z.length});return}const se=J.lastIndexOf(`
`,x-1)+1,Ee=J.slice(se,R).replace(/^/gm,Z),Le=Ee.split(`
`).length,dn=J.slice(0,se)+Ee+J.slice(R);In(dn,x+Z.length,j,R+Le*Z.length),window.requestAnimationFrame(()=>{_.selectionStart=x+Z.length,_.selectionEnd=R+Le*Z.length})}function Oc(d){if(Mn){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),kr());return}if(an){if(d.key==="ArrowDown"){d.preventDefault(),Cn(_=>{if(!_)return _;const x=(_.selected+1)%_.items.length;return Sl(mr.current,x),{..._,selected:x}});return}if(d.key==="ArrowUp"){d.preventDefault(),Cn(_=>{if(!_)return _;const x=(_.selected-1+_.items.length)%_.items.length;return Sl(mr.current,x),{..._,selected:x}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),Ea();return}if(d.key==="Escape"){d.preventDefault(),Cn(null);return}}if(d.key==="Tab"){d.preventDefault();const _=d.currentTarget,x=_.selectionStart,R=_.selectionEnd,j="    ",Z=mt.slice(0,x)+j+mt.slice(R),se=x+j.length;tl(Z),pt(null),Cn(null),window.requestAnimationFrame(()=>{_.selectionStart=se,_.selectionEnd=se});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===mt.length&&d.currentTarget.selectionEnd===mt.length)||fr.length===0)return;d.preventDefault();const x=d.key==="ArrowUp"?Rn===null?fr.length-1:Math.max(0,Rn-1):Rn===null||Rn+1>=fr.length?null:Rn+1;pt(x);const R=x===null?"":fr[x]??"";tl(R),Cn(null),nt(!0),window.requestAnimationFrame(()=>{const j=Xl.current;j&&(j.selectionStart=R.length,j.selectionEnd=R.length,Fs())});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),kr())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(nd,{title:"Pico Kodeværksted",onMenu:()=>s()}),dr?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Tc,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(it,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=oa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(it,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>fn(),disabled:!S&&!he||G,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(it,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:vr.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):vr.map(d=>{if(d.kind==="separator"){const j=d.id==="pico-files"&&!S&&!he;return u.jsxs(U.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),j&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const _=he&&Mi(d),x=ht[$n(d.source,d.path)],R=x!==void 0&&x!==ov(d,me,dl);return u.jsxs("div",{className:`ide-file-row ${ee===d.path&&ye===d.source?"active":""} ${_?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>zs(d),disabled:_,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:R?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${R?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>$i(d),disabled:d.type!=="file"||G||_,"aria-label":`Filvalg for ${d.name}`,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(it,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&u.jsx("span",{className:`ide-usb-status ${Qn.supported?"available":"unavailable"}`,title:Qn.message,"data-tooltip":Qn.message,role:"img","aria-label":Qn.message,tabIndex:0,children:"!"})]}),he&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:S?gc:hc,disabled:!Qn.supported||T,children:T?"Forbinder...":S?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Us,disabled:he||G,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Sc,disabled:!S||G,children:"Nulstil enhed"})]}),he&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(it,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Us,disabled:G,children:"Startprogrammer og biblioteker"})]}),!he&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Ae(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Ne(ee),u.jsxs("small",{children:[ua," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Sr,disabled:G,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ps,disabled:!Vl&&!(!vt&&zn)&&(!S||!xn),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:vc,disabled:G||!ee.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ds(),disabled:G||!ee.trim(),children:"Slet"})]})]}),vl(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{ref:Bn,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-ur.top}px)`},children:Array.from({length:dc},(d,_)=>u.jsx("span",{children:_+1},_))}),u.jsx("pre",{ref:gn,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-ur.left}px, ${-ur.top}px)`},children:sv(J,fc)}),u.jsx("textarea",{ref:Un,className:"ide-editor",value:J,onChange:d=>In(d.target.value,d.target.selectionStart,Jl(),d.target.selectionEnd,"typing"),onKeyDown:Ta,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||wr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{wr(d.currentTarget.value,d.currentTarget.selectionStart),ri(d.currentTarget)},onSelect:d=>ri(d.currentTarget),onScroll:d=>{const{scrollTop:_,scrollLeft:x}=d.currentTarget;Bn.current&&(Bn.current.style.transform=`translateY(${-_}px)`),gn.current&&(gn.current.style.transform=`translate(${-x}px, ${-_}px)`),Gl({top:_,left:x}),qe&&wr(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:Ui,"aria-busy":Ui,spellCheck:!1}),qe&&u.jsx("div",{ref:qt,className:`ide-autocomplete placement-${qe.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:qe.position.left,top:qe.position.top,maxHeight:qe.position.maxHeight},children:(qe.position.placement==="above"?qe.items.map((d,_)=>({item:d,index:_})).reverse():qe.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===qe.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),Er(d)},role:"option","aria-selected":_===qe.selected,children:d.label},d.label))}),re&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Ne(re),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${pl?"":"active"}`,type:"button",onClick:()=>vs(d=>!d),"aria-label":pl?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!pl,title:pl?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${ll?"active":""}`,type:"button",onClick:()=>Li(d=>!d),"aria-pressed":ll,title:ll?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:ka,disabled:O.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:ql,onScroll:Sa,onClick:()=>{var d;return(d=Xl.current)==null?void 0:d.focus()},children:[O.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):O.map((d,_)=>u.jsx("div",{className:`term-line ${d.variant==="input"?"term-input-echo":`term-${d.level}`}`,children:d.technical&&!pl?d.technical:d.text},`${_}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Ii&&!Mn?"locked":""} ${Mn?"stdin":""}`,onSubmit:d=>{d.preventDefault(),kr()},children:[u.jsx("span",{"aria-hidden":"true",children:ws}),u.jsx("textarea",{ref:Xl,value:mt,onChange:d=>{tl(d.target.value),pt(null),Mn?Cn(null):Pn(d.target.value,d.target.selectionStart)},onKeyDown:Oc,onKeyUp:d=>{Mn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Pn(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Mn||Pn(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:ks,placeholder:gl,"aria-label":Mn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:gl,rows:Math.max(1,mt.split(`
`).length)})]}),an&&u.jsx("div",{ref:mr,className:`ide-autocomplete ide-repl-autocomplete placement-${an.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:an.position.left,top:an.position.top,maxHeight:an.position.maxHeight},children:(an.position.placement==="above"?an.items.map((d,_)=>({item:d,index:_})).reverse():an.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===an.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),Ea(d)},role:"option","aria-selected":_===an.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:oa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var _;Ec((_=d.target.files)==null?void 0:_[0]),d.currentTarget.value=""}}),oe&&u.jsx(On,{title:"Gem fil",onClose:()=>xe(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void ga(),disabled:!S&&!he||G,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:xc,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:xr,children:"Gem filen i browseren"})]})}),ae&&u.jsx(On,{title:"Startprogrammer og biblioteker",onClose:()=>ve(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:S||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[Gs("Startprogrammer (main.py)","Starter automatisk på Picoen.",Oe.filter(d=>d.kind==="program")),Gs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Oe.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(S||he)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:jc,disabled:G,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:qi,disabled:G,children:"Download til computer"}),u.jsx("button",{className:S||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:Is,disabled:G,children:"Gem i browseren"})]})]})}),$t&&u.jsx(On,{title:"main.py er gemt",onClose:()=>Mt(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ba("control"),disabled:G,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ba("ide"),disabled:G,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Mt(!1),disabled:G,children:"Senere"})]})}),_e&&u.jsx(On,{title:"Installer MicroPython",onClose:()=>Ae(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:mn,onChange:d=>qn(d.target.value),children:_r.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(jn==null?void 0:jn.version)??Nn,onChange:d=>fl(d.target.value),children:zi.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),jn&&u.jsx("a",{className:"btn btn-primary btn-block",href:jn.url,download:jn.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),I&&u.jsx(On,{title:"Ny Python-fil",onClose:()=>te(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Nc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>ce(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Ss,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!$h(ue),children:"Opret"})]})}),L&&u.jsx(On,{title:Ne(L.path),onClose:()=>ne(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:L.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Ls()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:we,onChange:d=>E(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",ds(L.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",ds(L.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!zf(we,ds(L.path))||zf(we,ds(L.path))===L.path||G,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Bs(),disabled:G,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Ds(L),disabled:G,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),L.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:L.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Ne(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Rc(d),disabled:G,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Os(d),disabled:G,children:"Slet"})]},d.path))})]})]})})]})}function $h(s){var c;const i=(c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Xy(s){const i=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=M_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function zf(s,i="py"){const c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=M_(a[1]),h=i.replace(/^\./,"").toLowerCase(),b=(a[2]??(h||"py")).toLowerCase();return f?`/${f}.${b}`:""}function Ky(s){return Ne(s).replace(/\.(py|txt|json|csv)$/i,"")}function M_(s){return s.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function ds(s){var a;const i=Ne(s).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function ul(s){return s.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function qh(){return Jr.map(s=>({...s,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Xh(s){const i={};return s.forEach(c=>{i[c.id]=!1}),i}function Ne(s){return s.split("/").filter(Boolean).pop()??s}function Ko(s){return s.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Kh(s){const i=s.userAgent||"",c=s.platform||"",a=s.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),h=/Macintosh/i.test(c)&&a>1;return f&&!h}function Qy(s){return s instanceof DOMException&&s.name==="AbortError"}function Wy(s){return/Traceback \(most recent call last\):/.test(s)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(s)}function Mi(s){return Zy(s)}function Zy(s){return s.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const qf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(s=>({label:s,insert:`${s}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(s)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(s=>({label:`${s}()`,insert:`${s}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Qh(s,i,c){const a=Xf(s,i);if(!a)return[];const f=Jy(s,a.start,i),h=a.query.toLowerCase(),b=f.beforeToken.toLowerCase(),p=f.linePrefix.toLowerCase(),g=c?[...qf,...nv(s)]:qf;return tv(g).filter(S=>{const k=S.label.toLowerCase(),T=S.insert.toLowerCase();return T===h||k===h||D_(S,a.query)?!1:f.importLine?ev(S,f)?k.startsWith(p)||T.startsWith(p)||k.startsWith(h)||T.startsWith(h):!1:b.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(h)||k.startsWith(h))})}function Jy(s,i,c){const a=s.lastIndexOf(`
`,i-1)+1,f=s.slice(a,c),h=s.slice(a,i),b=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),p=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:h,importLine:b,fromImportLine:p}}function ev(s,i){return i.fromImportLine?!s.insert.includes("(")&&!s.insert.startsWith("import "):s.insert.startsWith("import ")||s.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.insert)}function nv(s){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of s.matchAll(a))f[1]&&i.add(f[1]),f[2]&&i.add(f[2]);return[...i].filter(a=>a.length>1&&!lv.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function tv(s){const i=new Set,c=[];for(const a of s){const f=a.insert.toLowerCase();i.has(f)||(i.add(f),c.push(a))}return c}const lv=new Set(qf.map(s=>s.insert.replace(/[().: ]+$/g,"")));function Xf(s,i){const a=s.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function Wh(s,i){const c=s.lastIndexOf(`
`,Math.max(0,i-1))+1;let a=null,f=null,h=!1;for(let b=0;b<i;b+=1){const p=s[b],g=s.slice(b,b+3);if(f){g===f.repeat(3)&&(f=null,b+=2);continue}if(a){if(h){h=!1;continue}if(p==="\\"){h=!0;continue}p===a&&(a=null),p===`
`&&(a=null);continue}if(p==="#"){const y=s.indexOf(`
`,b),S=y===-1?s.length:y;if(i<=S&&b>=c)return!0;b=S;continue}if(g==='"""'||g==="'''"){f=p,b+=2;continue}(p==='"'||p==="'")&&(a=p)}return a!==null||f!==null}function D_(s,i){const c=s.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function iv(s){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(s)}function Zh(s,i,c){if(!s)return null;const a=s.closest(".ide-terminal")??s.parentElement;if(!a)return null;const f=window.getComputedStyle(s),h=document.createElement("div"),b=document.createElement("span"),p=a.getBoundingClientRect(),g=s.getBoundingClientRect();h.style.position="absolute",h.style.visibility="hidden",h.style.pointerEvents="none",h.style.whiteSpace="pre-wrap",h.style.overflowWrap="break-word",h.style.wordBreak=f.wordBreak,h.style.boxSizing=f.boxSizing,h.style.width=`${s.getBoundingClientRect().width}px`,h.style.padding=f.padding,h.style.border=f.border,h.style.font=f.font,h.style.lineHeight=f.lineHeight,h.style.letterSpacing=f.letterSpacing,h.style.tabSize=f.tabSize,h.style.fontVariantLigatures=f.fontVariantLigatures,h.style.scrollbarGutter=f.scrollbarGutter,h.style.left=`${g.left-p.left-s.scrollLeft}px`,h.style.top=`${g.top-p.top-s.scrollTop}px`,h.textContent=s.value.slice(0,i),b.textContent=s.value.slice(i,i+1)||" ",h.appendChild(b),a.appendChild(h);const y=b.getBoundingClientRect();h.remove();const S=34,k=14,T=Math.min(210,Math.max(S+k,c*S+k)),D=rv(y.left-p.left,8,Math.max(8,a.clientWidth-296)),O=y.top-p.top+a.scrollTop,V=y.bottom-p.top+a.scrollTop+10,G=a.scrollTop+a.clientHeight-V-8,F=O-a.scrollTop-8,W=a.scrollTop+a.clientHeight,q=G>=Math.min(T,S*2)||G>=F?"below":"above",re=Math.max(S+k,Math.min(T,q==="below"?G:F)),be=q==="below"?Math.min(V,W-re-8):Math.max(a.scrollTop+8,O-re-8);return{left:D,top:be,maxHeight:re,placement:q}}function rv(s,i,c){return Math.max(i,Math.min(c,s))}function av(s){const i=[];let c=null,a=null,f=!1,h=0,b=0;const p=(g,y)=>{g>h&&i.push({text:s.slice(h,g),isTriple:y}),h=g};for(;b<s.length;){const g=s[b],y=s.slice(b,b+3);if(a){if(y===a.repeat(3)){b+=3,a=null,p(b,!0);continue}b+=1;continue}if(c){f?f=!1:g==="\\"?f=!0:(g===c||g===`
`)&&(c=null),b+=1;continue}if(g==="#"){const S=s.indexOf(`
`,b);b=S===-1?s.length:S;continue}if(y==='"""'||y==="'''"){p(b,!1),a=g,b+=3;continue}(g==='"'||g==="'")&&(c=g),b+=1}return p(s.length,a!==null),i}function sv(s,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];let h=0;function b(p,g){p.split(/(\r?\n)/).forEach(y=>{if(y===`
`||y===`\r
`){f.push(u.jsx("br",{},`br-${h++}`));return}y!==""&&g(y,`part-${h++}`)})}return av(s).forEach(p=>{if(p.isTriple){b(p.text,(g,y)=>{f.push(...hs(g,i,y,"tok-string"))});return}b(p.text,(g,y)=>{let S=0;[...g.matchAll(a)].forEach((T,D)=>{const O=T.index??0;O>S&&f.push(...Jh(g.slice(S,O),c,`${y}-${D}-plain`,i));const V=T[0],G=V.startsWith("#")?"tok-comment":V.startsWith('"')||V.startsWith("'")?"tok-string":/^\d/.test(V)?"tok-number":"tok-builtin";f.push(...hs(V,i,`${y}-${D}-token`,G)),S=O+V.length}),S<g.length&&f.push(...Jh(g.slice(S),c,`${y}-tail`,i))})}),f.length?f:" "}function Jh(s,i,c,a=""){const f=[];let h=0;const b=new RegExp(i.source,"g");return[...s.matchAll(b)].forEach((p,g)=>{const y=p.index??0;y>h&&f.push(...hs(s.slice(h,y),a,`${c}-${g}-plain`)),f.push(...hs(p[0],a,`${c}-${g}-keyword`,"tok-keyword")),h=y+p[0].length}),h<s.length&&f.push(...hs(s.slice(h),a,`${c}-plain-end`)),f}function hs(s,i,c,a=""){if(!i)return[u.jsx("span",{className:a||void 0,children:s},c)];const f=[],h=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),b=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let p=0;return[...s.matchAll(b)].forEach((g,y)=>{const S=g.index??0;S>p&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p,S)},`${c}-${y}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:g[0]},`${c}-${y}-match`)),p=S+g[0].length}),p<s.length&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:s},c)]}function Qo(s){return s.length>0?s:[{path:$f,content:j_,uploaded:!1,updatedAt:Date.now()}]}function Uf(s,i,c,a){const f=s.filter(h=>h.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((h,b)=>b.updatedAt-h.updatedAt)}function Jo(s){return s.map(i=>({name:Ne(i.path),path:i.path,type:"file",size:new Blob([i.content]).size}))}function ov(s,i,c){var a;return s.source==="pico"?c[s.path]:(a=i.find(f=>f.path===s.path))==null?void 0:a.content}function ec(s){const i=s.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",h=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${a}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Di(s){return ec(s)!==null}function ea(s){const i=new Map;for(const c of s){const a=ec(c.path);if(!a)continue;const f=i.get(a.originalPath)??[];f.push(c),i.set(a.originalPath,f)}for(const c of i.values())c.sort((a,f)=>{var h,b;return(((h=ec(f.path))==null?void 0:h.index)??0)-(((b=ec(a.path))==null?void 0:b.index)??0)});return i}function e_(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"",y=new Set(i.map(S=>S.path.toLowerCase()));for(let S=1;S<1e3;S+=1){const k=`${f}${p}_backup${S}${g}`;if(!y.has(k.toLowerCase()))return k}return`${f}${p}_backup${Date.now()}${g}`}function cv(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"";for(let y=1;y<1e3;y+=1){const S=y===1?"_kopi":`_kopi${y}`,k=`${f}${p}${S}${g}`;if(!i(k)&&!Di(k))return k}return`${f}${p}_kopi${Date.now()}${g}`}function uv(s){return s==="ok"?"Nyeste":s==="outdated"?"Opdater":s==="missing"?"Mangler":"Ikke tjekket"}function fv(s,i,c,a){const f=new Map,h=ea(s),b=ea(Jo(i));for(const k of s)Di(k.path)||f.set($n("pico",k.path),{kind:"file",name:k.name,path:k.path,type:k.type,size:k.size,source:"pico",uploaded:!0,versions:h.get(k.path)??[]});for(const k of i)Di(k.path)||f.set($n("local",k.path),{kind:"file",name:Ne(k.path),path:k.path,type:"file",source:"local",uploaded:!1,versions:b.get(k.path)??[]});for(const k of Object.keys(c)){const[T,...D]=k.split(":"),O=D.join(":");if(T!=="local"&&T!=="pico"||!O)continue;const V=f.get(k);if(V){f.set(k,V);continue}f.set(k,{kind:"file",name:Ne(O),path:O,type:"file",source:T,uploaded:!1,versions:T==="pico"?h.get(O)??[]:b.get(O)??[]})}const p=[...f.values()].sort(mv),g=p.filter(k=>k.source==="pico"),y=p.filter(k=>k.source==="local"),S=[];return g.length>0||a?S.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...g):S.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),y.length>0&&S.push({kind:"separator",id:"browser-files",label:"Browser"},...y),S}const dv=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function mv(s,i){const c=n_(s.path),a=n_(i.path);return c===null&&a===null?s.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function n_(s){var c;const i=(c=s.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?dv.get(i)??null:null}function t_(s,i,c){if(!(i in s))return s;const a={...s,[c]:s[i]};return delete a[i],a}function pv(s,i,c,a){const f=`${i}:${c}`;if(!(f in s))return s;const h={...s,[`${i}:${a}`]:s[f]};return delete h[f],h}function hv({open:s}){const i=le(W=>W.screen),c=le(W=>W.active),a=le(W=>W.toggleSideMenu),f=le(W=>W.toggleDebugger),h=le(W=>W.setEditMode),b=le(W=>W.openMenuPage),p=le(W=>W.disconnect),g=le(W=>W.openPicoIde),y=le(W=>W.closePicoIde),S=le(W=>W.picoIdeOrigin),k=i==="dashboard",T=i==="control",D=i==="ide",O=T&&!!(c!=null&&c.canEdit),V=!T||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),G=S==="control",F=S==="control"?"Pico Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${s?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${i} ${s?"open":"closing"}`,"aria-label":"Sidemenu",children:[k&&u.jsxs(u.Fragment,{children:[u.jsx(Rt,{label:"Bruger",icon:"user",onClick:()=>b("user-settings")}),u.jsx(Rt,{label:"Indstillinger",icon:"settings",onClick:()=>b("application-settings")}),u.jsx(Rt,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!V}),u.jsx(If,{}),u.jsx(Rt,{label:"Om appen",icon:"info",onClick:()=>b("application-about")}),u.jsx(Rt,{label:"Hjælp",icon:"help",onClick:()=>b("application-help")}),u.jsx(Rt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),T&&u.jsxs(u.Fragment,{children:[u.jsx(Rt,{label:"Indstillinger",icon:"settings",onClick:()=>b("device-settings")}),u.jsx(Rt,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!O}),u.jsx(Rt,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!V}),u.jsx(If,{}),u.jsx(Rt,{label:"Hjælp",icon:"help",onClick:()=>b("device-help")}),u.jsx(Rt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),D&&u.jsxs(u.Fragment,{children:[u.jsx(Rt,{label:F,icon:"back",onClick:y}),u.jsx(If,{})]}),u.jsx("div",{className:"spacer"}),(T||D&&G)&&u.jsx(Rt,{label:"Forlad",icon:"exit",onClick:()=>p()})]})]})}function Rt({label:s,icon:i,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":s,children:[u.jsx(it,{name:i}),u.jsx("span",{children:s})]})}function If(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:Kb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const _v={error:"term-error",success:"term-success",warning:"term-warning",info:""},l_={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function gv(){const s=new Date,i=c=>String(c).padStart(2,"0");return`${i(s.getDate())}-${i(s.getMonth()+1)}-${s.getFullYear()}-${i(s.getHours())}-${i(s.getMinutes())}`}function bv(){const s=le(f=>f.logs),i=le(f=>f.clearLogs),c=le(f=>f.toggleDebugger);function a(){const f=[...s].reverse().map(g=>`${g.time} ${l_[g.level]}${g.message}`).join(`
`),h=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(h),p=document.createElement("a");p.href=b,p.download=`${gv()}.txt`,p.click(),URL.revokeObjectURL(b)}return u.jsxs(On,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:s.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):s.map((f,h)=>u.jsxs("div",{className:`term-line ${_v[f.level]}`,children:[f.time," ",l_[f.level],f.message]},`${f.time}-${h}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const A_=4,Yt=A_*4+17,i_=80,yv=20,vv=30660;function xv(s){const i=new TextEncoder().encode(s);if(i.length>76)throw new Error("QR-koden er for lang.");const c=r_(!1),a=r_(!1);Sv(c,a);const f=wv(i),h=Nv(f,yv);return Ev(c,a,[...f,...h]),Tv(c,a),c}function r_(s){return Array.from({length:Yt},()=>Array.from({length:Yt},()=>s))}function Vt(s,i,c,a,f,h=!0){s[a][c]=f,h&&(i[a][c]=!0)}function Sv(s,i){Hf(s,i,0,0),Hf(s,i,Yt-7,0),Hf(s,i,0,Yt-7);for(let c=0;c<Yt;c+=1)i[6][c]||Vt(s,i,c,6,c%2===0),i[c][6]||Vt(s,i,6,c,c%2===0);kv(s,i,26,26),Vt(s,i,8,A_*4+9,!0)}function Hf(s,i,c,a){for(let f=-1;f<=7;f+=1)for(let h=-1;h<=7;h+=1){const b=c+h,p=a+f;if(b<0||p<0||b>=Yt||p>=Yt)continue;const g=h>=0&&h<=6&&f>=0&&f<=6&&(h===0||h===6||f===0||f===6||h>=2&&h<=4&&f>=2&&f<=4);Vt(s,i,b,p,g)}}function kv(s,i,c,a){for(let f=-2;f<=2;f+=1)for(let h=-2;h<=2;h+=1)i[a+f][c+h]||Vt(s,i,c+h,a+f,Math.max(Math.abs(h),Math.abs(f))!==1)}function wv(s){const i=[];Wo(i,4,4),Wo(i,s.length,8);for(const a of s)Wo(i,a,8);for(Wo(i,0,Math.min(4,i_*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((f,h)=>f<<1|h,0));for(let a=236;c.length<i_;a=a===236?17:236)c.push(a);return c}function Wo(s,i,c){for(let a=c-1;a>=0;a-=1)s.push(i>>>a&1)}function Ev(s,i,c){const a=c.flatMap(b=>Array.from({length:8},(p,g)=>b>>>7-g&1));let f=0,h=!0;for(let b=Yt-1;b>=1;b-=2){b===6&&(b-=1);for(let p=0;p<Yt;p+=1){const g=h?Yt-1-p:p;for(let y=0;y<2;y+=1){const S=b-y;if(i[g][S])continue;const k=f<a.length?a[f]===1:!1;s[g][S]=k!==((S+g)%2===0),f+=1}}h=!h}}function Tv(s,i){const c=a=>(vv>>>a&1)!==0;for(let a=0;a<=5;a+=1)Vt(s,i,8,a,c(a));Vt(s,i,8,7,c(6)),Vt(s,i,8,8,c(7)),Vt(s,i,7,8,c(8));for(let a=9;a<15;a+=1)Vt(s,i,14-a,8,c(a));for(let a=0;a<8;a+=1)Vt(s,i,Yt-1-a,8,c(a));for(let a=8;a<15;a+=1)Vt(s,i,8,Yt-15+a,c(a))}const _s=new Array(512),Kf=new Array(256);let a_=!1;function O_(){if(a_)return;let s=1;for(let i=0;i<255;i+=1)_s[i]=s,Kf[s]=i,s<<=1,s&256&&(s^=285);for(let i=255;i<512;i+=1)_s[i]=_s[i-255];a_=!0}function C_(s,i){return s===0||i===0?0:_s[Kf[s]+Kf[i]]}function Nv(s,i){O_();const c=Rv(i),a=Array.from({length:i},()=>0);for(const f of s){const h=f^a.shift();a.push(0);for(let b=0;b<i;b+=1)a[b]^=C_(c[b],h)}return a}function Rv(s){O_();let i=[1];for(let c=0;c<s;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let f=0;f<i.length;f+=1)a[f]^=C_(i[f],_s[c]),a[f+1]^=i[f];i=a}return i.slice(1)}function jv(){const s=le(_e=>_e.menuPage),i=le(_e=>_e.closeMenuPage),c=le(_e=>_e.user),a=le(_e=>_e.active),f=le(_e=>_e.layout),h=le(_e=>_e.sliderValues),b=le(_e=>_e.savedDevices),p=le(_e=>_e.updateUsername),g=le(_e=>_e.createOwnerPairingCode),y=le(_e=>_e.applyOwnerPairingCode),S=le(_e=>_e.clearSavedDevices),k=le(_e=>_e.resetApplicationData),T=le(_e=>_e.saveDeviceSettings),D=le(_e=>_e.setEditMode),O=le(_e=>_e.askConfirm),[V,G]=U.useState((c==null?void 0:c.username)??""),[F,W]=U.useState(!1),[q,re]=U.useState(""),[be,me]=U.useState(""),[K,ee]=U.useState(!1),[pe,ye]=U.useState(""),De=U.useRef(null),[J,We]=U.useState((a==null?void 0:a.iconID)??0),[Oe,Pe]=U.useState(!1),[I,te]=U.useState((a==null?void 0:a.canOthersConnect)??!1),[ue,ce]=U.useState((a==null?void 0:a.canOthersEdit)??!1),[we,E]=U.useState((a==null?void 0:a.canOthersEditCode)??!1),[L,ne]=U.useState((a==null?void 0:a.gridCols)??11),[oe,xe]=U.useState((a==null?void 0:a.gridRows)??31),[H,A]=U.useState(!1);U.useEffect(()=>{s==="user-settings"&&(G((c==null?void 0:c.username)??""),me(""),ye(""),ee(!1))},[s,c==null?void 0:c.username]),U.useEffect(()=>{s==="device-settings"&&a&&(We(a.iconID),te(a.canOthersConnect),ce(a.canOthersEdit),E(a.canOthersEditCode),ne(a.gridCols),xe(a.gridRows))},[a,s]),U.useEffect(()=>{if(!K)return;let _e=!1,Ae=null,vn=0;async function Ce(){var qn;const mn=window.BarcodeDetector;if(!mn||!((qn=navigator.mediaDevices)!=null&&qn.getUserMedia)){ye("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),ee(!1);return}try{Ae=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Nn=De.current;if(!Nn)return;Nn.srcObject=Ae,await Nn.play();const fl=new mn({formats:["qr_code"]}),$t=async()=>{var Mt;if(!_e){try{const Gl=(Mt=(await fl.detect(Nn)).find(xn=>xn.rawValue))==null?void 0:Mt.rawValue;if(Gl){me(Gl),y(Gl)&&W(!1),ee(!1);return}}catch{}vn=window.requestAnimationFrame($t)}};vn=window.requestAnimationFrame($t)}catch{ye("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),ee(!1)}}return Ce(),()=>{_e=!0,vn&&window.cancelAnimationFrame(vn),Ae==null||Ae.getTracks().forEach(mn=>mn.stop())}},[y,K]);const ae=(_e,Ae)=>Number.isFinite(_e)?Math.max(ta,Math.min(la,Math.round(_e))):Ae,ve=(c==null?void 0:c.username)??"",Be=V.trim(),Ge=Be.length>0&&Be!==ve;if(!s)return null;if(s==="user-settings"){let _e=function(){const Ce=g();Ce&&(re(Ce),me(""),W(!0))},Ae=function(){y(be)&&(me(""),W(!1))};async function vn(){var Ce;try{await((Ce=navigator.clipboard)==null?void 0:Ce.writeText(q))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(On,{title:"Brugerindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${V.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:V,onChange:Ce=>G(Ce.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>p(V),disabled:!Ge,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:_e,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>O({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{k()}}),children:"Slet brugerdata"})]})}),F&&u.jsx(On,{title:"Del ejerkode",onClose:()=>W(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Av,{code:q}),u.jsx("code",{className:"owner-code-text",children:q}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void vn(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${be.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:be,onChange:Ce=>me(Ce.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:Ae,disabled:!be.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>ee(Ce=>!Ce),children:K?"Stop scanning":"Scan QR-kode"}),pe&&u.jsx("div",{className:"notice",children:pe}),K&&u.jsx("video",{className:"owner-code-video",ref:De,muted:!0,playsInline:!0})]})})]})}if(s==="application-settings")return u.jsx(On,{title:"Applikationsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"Version",value:gs}),u.jsx(Gt,{label:"Bluetooth",value:oc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(Gt,{label:"Gemte enheder",value:String(b.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>O({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:S}),disabled:b.length===0,children:"Ryd gemte enheder"})]})});if(s==="application-about")return u.jsx(On,{title:"Om appen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(Gt,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(Gt,{label:"Version",value:gs})]})});if(s==="application-help")return u.jsx(On,{title:"Hjælp til applikationen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(s==="device-settings"){const _e=f.filter(Ce=>Ce.type==="slider"),Ae=!!(a!=null&&a.isOwnedByMe);async function vn(Ce=!1){if(!a||!Ae)return;const mn=ae(L,a.gridCols),qn=ae(oe,a.gridRows),Nn=Mv(f,mn,qn);if(Nn&&!Ce){O({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Nn.requiredCols} kolonner og ${Nn.requiredRows} rækker. Det nye gitter er ${mn} × ${qn}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{vn(!0)}});return}A(!0),await T(J,I,I&&ue,I&&we,mn,qn),ne(mn),xe(qn),A(!1)}return u.jsx(On,{title:"Enhedsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(Gt,{label:"Ejer",value:Ov(a)}),Ae?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Pe(!0),children:u.jsx("img",{src:aa(J),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:I?"":"active",onClick:()=>te(!1),children:"Privat"}),u.jsx("button",{type:"button",className:I?"active":"",onClick:()=>te(!0),children:"Offentlig"})]}),I&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>ce(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>ce(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:we?"":"active",onClick:()=>E(!1),children:"Nej"}),u.jsx("button",{type:"button",className:we?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:ta,max:la,value:Number.isNaN(L)?"":L,onChange:Ce=>ne(parseInt(Ce.target.value,10)),onBlur:()=>ne(ae(L,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:ta,max:la,value:Number.isNaN(oe)?"":oe,onChange:Ce=>xe(parseInt(Ce.target.value,10)),onBlur:()=>xe(ae(oe,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>vn(),disabled:H,children:H?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Gt,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(Gt,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(Gt,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(Gt,{label:"Kontroller",value:String(f.length)}),_e.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),_e.map(Ce=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:Ce.name}),u.jsxs("span",{children:[Ce.sliderMin??0," til ",Ce.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",Dv(Ce.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",h[Ce.name]??"Ikke brugt"]})]},Ce.name))]}),Oe&&u.jsx(h_,{selected:J,onSelect:We,onClose:()=>Pe(!1)})]})})}return u.jsx(On,{title:"Hjælp til enheden",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>D(!0),children:"Rediger layout"})]})})}function Mv(s,i,c){let a=0,f=0;for(const h of s)ys(h)&&(a=Math.max(a,Math.ceil((h.centerX2+h.spanX)/2)+1),f=Math.max(f,Math.ceil((h.centerY2+h.spanY)/2)+1));return i<a||c<f?{requiredCols:a,requiredRows:f}:null}function Dv(s){return s==="bottom"?"bund":s==="middle"?"midte":s==="top"?"top":"ingen"}function Av({code:s}){const i=U.useMemo(()=>xv(s),[s]),c=i.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,f)=>a.map((h,b)=>h?u.jsx("rect",{x:b+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${b}-${f}`):null))]})}function Ov(s){var i;return s?s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function Gt({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function Cv(){const s=le(a=>a.confirmDialog),i=le(a=>a.closeConfirm);if(!s)return null;function c(){s==null||s.onConfirm(),i()}return u.jsx(On,{title:s.title,onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:s.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:s.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:s.confirmLabel??"Fortsæt"})]})]})})}function Bv(){const s=le(a=>a.connectionLost),i=le(a=>a.reconnectLostDevice),c=le(a=>a.dismissConnectionLost);return s?u.jsx(On,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",s.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function Lv(){const s=le(c=>c.toast),i=le(c=>c.dismissToast);return s?u.jsx("div",{className:"toast",role:"alert",onClick:i,children:s.message},s.id):null}function zv(){const s=le(p=>p.screen),i=le(p=>p.splashTarget),c=le(p=>p.init),a=le(p=>p.sideMenuOpen),f=le(p=>p.debuggerOpen),[h,b]=U.useState(!1);return U.useEffect(()=>{c()},[c]),U.useEffect(()=>{if(a){b(!0);return}const p=setTimeout(()=>b(!1),140);return()=>clearTimeout(p)},[a]),u.jsxs("div",{className:"app",children:[s==="splash"&&i==="intro"&&u.jsx(Eh,{}),s==="splash"&&i==="dashboard"&&u.jsx(Th,{}),s==="splash"&&u.jsx(Jb,{}),s==="intro"&&u.jsx(Eh,{}),s==="dashboard"&&u.jsx(Th,{}),s==="connection"&&u.jsx(i0,{}),s==="create"&&u.jsx(r0,{}),s==="control"&&u.jsx(X0,{}),s==="ide"&&u.jsx(qy,{}),h&&u.jsx(hv,{open:a}),u.jsx(jv,{}),u.jsx(Bv,{}),u.jsx(Cv,{}),f&&u.jsx(bv,{}),u.jsx(Lv,{})]})}function Uv(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const i=new URL("sw.js",window.location.href);navigator.serviceWorker.register(i,{scope:"./"}).catch(c=>{console.warn("Service worker registration failed:",c)})});let s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||window.crossOriginIsolated||(s=!0,window.location.reload())})}Uv();ub.createRoot(document.getElementById("root")).render(u.jsx(ms.StrictMode,{children:u.jsx(zv,{})}));
