var Zg=Object.defineProperty;var Jg=(s,i,c)=>i in s?Zg(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c;var de=(s,i,c)=>Jg(s,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function s_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vf={exports:{}},rs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function eb(){if(ih)return rs;ih=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,f,h){var b=null;if(h!==void 0&&(b=""+h),f.key!==void 0&&(b=""+f.key),"key"in f){h={};for(var p in f)p!=="key"&&(h[p]=f[p])}else h=f;return f=h.ref,{$$typeof:s,type:a,key:b,ref:f!==void 0?f:null,props:h}}return rs.Fragment=i,rs.jsx=c,rs.jsxs=c,rs}var rh;function tb(){return rh||(rh=1,vf.exports=eb()),vf.exports}var u=tb(),xf={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function nb(){if(ah)return Te;ah=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),T=Symbol.iterator;function D(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,G={};function F(E,L,te){this.props=E,this.context=L,this.refs=G,this.updater=te||O}F.prototype.isReactComponent={},F.prototype.setState=function(E,L){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,L,"setState")},F.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function W(){}W.prototype=F.prototype;function q(E,L,te){this.props=E,this.context=L,this.refs=G,this.updater=te||O}var re=q.prototype=new W;re.constructor=q,V(re,F.prototype),re.isPureReactComponent=!0;var be=Array.isArray;function me(){}var K={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function pe(E,L,te){var oe=te.ref;return{$$typeof:s,type:E,key:L,ref:oe!==void 0?oe:null,props:te}}function ye(E,L){return pe(E.type,L,E.props)}function De(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function J(E){var L={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(te){return L[te]})}var We=/\/+/g;function Oe(E,L){return typeof E=="object"&&E!==null&&E.key!=null?J(""+E.key):L.toString(36)}function Pe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(me,me):(E.status="pending",E.then(function(L){E.status==="pending"&&(E.status="fulfilled",E.value=L)},function(L){E.status==="pending"&&(E.status="rejected",E.reason=L)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function I(E,L,te,oe,xe){var H=typeof E;(H==="undefined"||H==="boolean")&&(E=null);var A=!1;if(E===null)A=!0;else switch(H){case"bigint":case"string":case"number":A=!0;break;case"object":switch(E.$$typeof){case s:case i:A=!0;break;case S:return A=E._init,I(A(E._payload),L,te,oe,xe)}}if(A)return xe=xe(E),A=oe===""?"."+Oe(E,0):oe,be(xe)?(te="",A!=null&&(te=A.replace(We,"$&/")+"/"),I(xe,L,te,"",function(Be){return Be})):xe!=null&&(De(xe)&&(xe=ye(xe,te+(xe.key==null||E&&E.key===xe.key?"":(""+xe.key).replace(We,"$&/")+"/")+A)),L.push(xe)),1;A=0;var ae=oe===""?".":oe+":";if(be(E))for(var ve=0;ve<E.length;ve++)oe=E[ve],H=ae+Oe(oe,ve),A+=I(oe,L,te,H,xe);else if(ve=D(E),typeof ve=="function")for(E=ve.call(E),ve=0;!(oe=E.next()).done;)oe=oe.value,H=ae+Oe(oe,ve++),A+=I(oe,L,te,H,xe);else if(H==="object"){if(typeof E.then=="function")return I(Pe(E),L,te,oe,xe);throw L=String(E),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return A}function ne(E,L,te){if(E==null)return E;var oe=[],xe=0;return I(E,oe,"","",function(H){return L.call(te,H,xe++)}),oe}function ue(E){if(E._status===-1){var L=E._result;L=L(),L.then(function(te){(E._status===0||E._status===-1)&&(E._status=1,E._result=te)},function(te){(E._status===0||E._status===-1)&&(E._status=2,E._result=te)}),E._status===-1&&(E._status=0,E._result=L)}if(E._status===1)return E._result.default;throw E._result}var ce=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},we={map:ne,forEach:function(E,L,te){ne(E,function(){L.apply(this,arguments)},te)},count:function(E){var L=0;return ne(E,function(){L++}),L},toArray:function(E){return ne(E,function(L){return L})||[]},only:function(E){if(!De(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return Te.Activity=k,Te.Children=we,Te.Component=F,Te.Fragment=c,Te.Profiler=f,Te.PureComponent=q,Te.StrictMode=a,Te.Suspense=g,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,Te.__COMPILER_RUNTIME={__proto__:null,c:function(E){return K.H.useMemoCache(E)}},Te.cache=function(E){return function(){return E.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(E,L,te){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var oe=V({},E.props),xe=E.key;if(L!=null)for(H in L.key!==void 0&&(xe=""+L.key),L)!ee.call(L,H)||H==="key"||H==="__self"||H==="__source"||H==="ref"&&L.ref===void 0||(oe[H]=L[H]);var H=arguments.length-2;if(H===1)oe.children=te;else if(1<H){for(var A=Array(H),ae=0;ae<H;ae++)A[ae]=arguments[ae+2];oe.children=A}return pe(E.type,xe,oe)},Te.createContext=function(E){return E={$$typeof:b,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},Te.createElement=function(E,L,te){var oe,xe={},H=null;if(L!=null)for(oe in L.key!==void 0&&(H=""+L.key),L)ee.call(L,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(xe[oe]=L[oe]);var A=arguments.length-2;if(A===1)xe.children=te;else if(1<A){for(var ae=Array(A),ve=0;ve<A;ve++)ae[ve]=arguments[ve+2];xe.children=ae}if(E&&E.defaultProps)for(oe in A=E.defaultProps,A)xe[oe]===void 0&&(xe[oe]=A[oe]);return pe(E,H,xe)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(E){return{$$typeof:p,render:E}},Te.isValidElement=De,Te.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:ue}},Te.memo=function(E,L){return{$$typeof:y,type:E,compare:L===void 0?null:L}},Te.startTransition=function(E){var L=K.T,te={};K.T=te;try{var oe=E(),xe=K.S;xe!==null&&xe(te,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(me,ce)}catch(H){ce(H)}finally{L!==null&&te.types!==null&&(L.types=te.types),K.T=L}},Te.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},Te.use=function(E){return K.H.use(E)},Te.useActionState=function(E,L,te){return K.H.useActionState(E,L,te)},Te.useCallback=function(E,L){return K.H.useCallback(E,L)},Te.useContext=function(E){return K.H.useContext(E)},Te.useDebugValue=function(){},Te.useDeferredValue=function(E,L){return K.H.useDeferredValue(E,L)},Te.useEffect=function(E,L){return K.H.useEffect(E,L)},Te.useEffectEvent=function(E){return K.H.useEffectEvent(E)},Te.useId=function(){return K.H.useId()},Te.useImperativeHandle=function(E,L,te){return K.H.useImperativeHandle(E,L,te)},Te.useInsertionEffect=function(E,L){return K.H.useInsertionEffect(E,L)},Te.useLayoutEffect=function(E,L){return K.H.useLayoutEffect(E,L)},Te.useMemo=function(E,L){return K.H.useMemo(E,L)},Te.useOptimistic=function(E,L){return K.H.useOptimistic(E,L)},Te.useReducer=function(E,L,te){return K.H.useReducer(E,L,te)},Te.useRef=function(E){return K.H.useRef(E)},Te.useState=function(E){return K.H.useState(E)},Te.useSyncExternalStore=function(E,L,te){return K.H.useSyncExternalStore(E,L,te)},Te.useTransition=function(){return K.H.useTransition()},Te.version="19.2.7",Te}var sh;function Qf(){return sh||(sh=1,xf.exports=nb()),xf.exports}var U=Qf();const ms=s_(U);var Sf={exports:{}},as={},kf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function lb(){return oh||(oh=1,(function(s){function i(I,ne){var ue=I.length;I.push(ne);e:for(;0<ue;){var ce=ue-1>>>1,we=I[ce];if(0<f(we,ne))I[ce]=ne,I[ue]=we,ue=ce;else break e}}function c(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var ne=I[0],ue=I.pop();if(ue!==ne){I[0]=ue;e:for(var ce=0,we=I.length,E=we>>>1;ce<E;){var L=2*(ce+1)-1,te=I[L],oe=L+1,xe=I[oe];if(0>f(te,ue))oe<we&&0>f(xe,te)?(I[ce]=xe,I[oe]=ue,ce=oe):(I[ce]=te,I[L]=ue,ce=L);else if(oe<we&&0>f(xe,ue))I[ce]=xe,I[oe]=ue,ce=oe;else break e}}return ne}function f(I,ne){var ue=I.sortIndex-ne.sortIndex;return ue!==0?ue:I.id-ne.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var b=Date,p=b.now();s.unstable_now=function(){return b.now()-p}}var g=[],y=[],S=1,k=null,T=3,D=!1,O=!1,V=!1,G=!1,F=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function re(I){for(var ne=c(y);ne!==null;){if(ne.callback===null)a(y);else if(ne.startTime<=I)a(y),ne.sortIndex=ne.expirationTime,i(g,ne);else break;ne=c(y)}}function be(I){if(V=!1,re(I),!O)if(c(g)!==null)O=!0,me||(me=!0,J());else{var ne=c(y);ne!==null&&Pe(be,ne.startTime-I)}}var me=!1,K=-1,ee=5,pe=-1;function ye(){return G?!0:!(s.unstable_now()-pe<ee)}function De(){if(G=!1,me){var I=s.unstable_now();pe=I;var ne=!0;try{e:{O=!1,V&&(V=!1,W(K),K=-1),D=!0;var ue=T;try{t:{for(re(I),k=c(g);k!==null&&!(k.expirationTime>I&&ye());){var ce=k.callback;if(typeof ce=="function"){k.callback=null,T=k.priorityLevel;var we=ce(k.expirationTime<=I);if(I=s.unstable_now(),typeof we=="function"){k.callback=we,re(I),ne=!0;break t}k===c(g)&&a(g),re(I)}else a(g);k=c(g)}if(k!==null)ne=!0;else{var E=c(y);E!==null&&Pe(be,E.startTime-I),ne=!1}}break e}finally{k=null,T=ue,D=!1}ne=void 0}}finally{ne?J():me=!1}}}var J;if(typeof q=="function")J=function(){q(De)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Oe=We.port2;We.port1.onmessage=De,J=function(){Oe.postMessage(null)}}else J=function(){F(De,0)};function Pe(I,ne){K=F(function(){I(s.unstable_now())},ne)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return T},s.unstable_next=function(I){switch(T){case 1:case 2:case 3:var ne=3;break;default:ne=T}var ue=T;T=ne;try{return I()}finally{T=ue}},s.unstable_requestPaint=function(){G=!0},s.unstable_runWithPriority=function(I,ne){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ue=T;T=I;try{return ne()}finally{T=ue}},s.unstable_scheduleCallback=function(I,ne,ue){var ce=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?ce+ue:ce):ue=ce,I){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ue+we,I={id:S++,callback:ne,priorityLevel:I,startTime:ue,expirationTime:we,sortIndex:-1},ue>ce?(I.sortIndex=ue,i(y,I),c(g)===null&&I===c(y)&&(V?(W(K),K=-1):V=!0,Pe(be,ue-ce))):(I.sortIndex=we,i(g,I),O||D||(O=!0,me||(me=!0,J()))),I},s.unstable_shouldYield=ye,s.unstable_wrapCallback=function(I){var ne=T;return function(){var ue=T;T=ne;try{return I.apply(this,arguments)}finally{T=ue}}}})(wf)),wf}var ch;function ib(){return ch||(ch=1,kf.exports=lb()),kf.exports}var Ef={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function rb(){if(uh)return Zt;uh=1;var s=Qf();function i(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)y+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(g,y,S){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:k==null?null:""+k,children:g,containerInfo:y,implementation:S}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Zt.createPortal=function(g,y){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return h(g,y,null,S)},Zt.flushSync=function(g){var y=b.T,S=a.p;try{if(b.T=null,a.p=2,g)return g()}finally{b.T=y,a.p=S,a.d.f()}},Zt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},Zt.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Zt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var S=y.as,k=p(S,y.crossOrigin),T=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;S==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:k,integrity:T,fetchPriority:D}):S==="script"&&a.d.X(g,{crossOrigin:k,integrity:T,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Zt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var S=p(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},Zt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var S=y.as,k=p(S,y.crossOrigin);a.d.L(g,S,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Zt.preloadModule=function(g,y){if(typeof g=="string")if(y){var S=p(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},Zt.requestFormReset=function(g){a.d.r(g)},Zt.unstable_batchedUpdates=function(g,y){return g(y)},Zt.useFormState=function(g,y,S){return b.H.useFormState(g,y,S)},Zt.useFormStatus=function(){return b.H.useHostTransitionStatus()},Zt.version="19.2.7",Zt}var fh;function ab(){if(fh)return Ef.exports;fh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Ef.exports=rb(),Ef.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function sb(){if(dh)return as;dh=1;var s=ib(),i=Qf(),c=ab();function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(a(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return g(r),e;if(o===l)return g(r),t;o=o.sibling}throw Error(a(188))}if(n.return!==l.return)n=r,l=o;else{for(var m=!1,v=r.child;v;){if(v===n){m=!0,n=r,l=o;break}if(v===l){m=!0,l=r,n=o;break}v=v.sibling}if(!m){for(v=o.child;v;){if(v===n){m=!0,n=o,l=r;break}if(v===l){m=!0,l=o,n=r;break}v=v.sibling}if(!m)throw Error(a(189))}}if(n.alternate!==l)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,T=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),q=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),De=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=De&&e[De]||e["@@iterator"],typeof e=="function"?e:null)}var We=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===We?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case F:return"Profiler";case G:return"StrictMode";case be:return"Suspense";case me:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case q:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Oe(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return Oe(e(t))}catch{}}return null}var Pe=Array.isArray,I=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},ce=[],we=-1;function E(e){return{current:e}}function L(e){0>we||(e.current=ce[we],ce[we]=null,we--)}function te(e,t){we++,ce[we]=e.current,e.current=t}var oe=E(null),xe=E(null),H=E(null),A=E(null);function ae(e,t){switch(te(H,t),te(xe,e),te(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Np(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Np(t),e=Rp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(oe),te(oe,e)}function ve(){L(oe),L(xe),L(H)}function Be(e){e.memoizedState!==null&&te(A,e);var t=oe.current,n=Rp(t,e.type);t!==n&&(te(xe,e),te(oe,n))}function Ge(e){xe.current===e&&(L(oe),L(xe)),A.current===e&&(L(A),ts._currentValue=ue)}var _e,Ae;function yt(e){if(_e===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||"",Ae=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+Ae}var Ce=!1;function dt(e,t){if(!e||Ce)return"";Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(P){var z=P}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(P){z=P}e.call(Q.prototype)}}else{try{throw Error()}catch(P){z=P}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(P){if(P&&z&&typeof P.stack=="string")return[P.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=l.DetermineComponentFrameRoot(),m=o[0],v=o[1];if(m&&v){var w=m.split(`
`),B=v.split(`
`);for(r=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;if(l===w.length||r===B.length)for(l=w.length-1,r=B.length-1;1<=l&&0<=r&&w[l]!==B[r];)r--;for(;1<=l&&0<=r;l--,r--)if(w[l]!==B[r]){if(l!==1||r!==1)do if(l--,r--,0>r||w[l]!==B[r]){var $=`
`+w[l].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=l&&0<=r);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?yt(n):""}function $t(e,t){switch(e.tag){case 26:case 27:case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return e.child!==t&&t!==null?yt("Suspense Fallback"):yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return dt(e.type,!1);case 11:return dt(e.type.render,!1);case 1:return dt(e.type,!0);case 31:return yt("Activity");default:return""}}function Tt(e){try{var t="",n=null;do t+=$t(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fl=Object.prototype.hasOwnProperty,$n=s.unstable_scheduleCallback,Mn=s.unstable_cancelCallback,ur=s.unstable_shouldYield,Gl=s.unstable_requestPaint,vt=s.unstable_now,Ai=s.unstable_getCurrentPriorityLevel,Vl=s.unstable_ImmediatePriority,sa=s.unstable_UserBlockingPriority,Oi=s.unstable_NormalPriority,en=s.unstable_LowPriority,mn=s.unstable_IdlePriority,nl=s.log,fr=s.unstable_setDisableYieldValue,Ci=null,Nt=null;function pn(e){if(typeof nl=="function"&&fr(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Ci,e)}catch{}}var Lt=Math.clz32?Math.clz32:ml,Yl=Math.log,dl=Math.LN2;function ml(e){return e>>>=0,e===0?32:31-(Yl(e)/dl|0)|0}var hn=256,qt=262144,qe=4194304;function it(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rt(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=l&134217727;return v!==0?(l=v&~o,l!==0?r=it(l):(m&=v,m!==0?r=it(m):n||(n=v&~e,n!==0&&(r=it(n))))):(v=l&~o,v!==0?r=it(v):m!==0?r=it(m):n||(n=l&~e,n!==0&&(r=it(n)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:r}function Ot(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fc(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(){var e=qe;return qe<<=1,(qe&62914560)===0&&(qe=4194304),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pl(e,t,n,l,r,o){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,w=e.expirationTimes,B=e.hiddenUpdates;for(n=m&~n;0<n;){var $=31-Lt(n),Q=1<<$;v[$]=0,w[$]=-1;var z=B[$];if(z!==null)for(B[$]=null,$=0;$<z.length;$++){var P=z[$];P!==null&&(P.lane&=-536870913)}n&=~Q}l!==0&&vs(e,l,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function vs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function dr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Lt(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}function xs(e,t){var n=t&-t;return n=(n&42)!==0?1:$l(n),(n&(e.suspendedLanes|t))!==0?0:n}function $l(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ot(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:Wp(e.type))}function oa(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var zt=Math.random().toString(36).slice(2),_t="__reactFiber$"+zt,Ct="__reactProps$"+zt,qn="__reactContainer$"+zt,ql="__reactEvents$"+zt,Xl="__reactListeners$"+zt,mr="__reactHandles$"+zt,_n="__reactResources$"+zt,gn="__reactMarker$"+zt;function hl(e){delete e[_t],delete e[Ct],delete e[ql],delete e[Xl],delete e[mr]}function Xt(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qn]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bp(e);e!==null;){if(n=e[_t])return n;e=Bp(e)}return t}e=n,n=e.parentNode}return null}function bn(e){if(e=e[_t]||e[qn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function rn(e){var t=e[_n];return t||(t=e[_n]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function mt(e){e[gn]=!0}var Kn=new Set,Kl={};function tn(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(Kl[e]=t,e=0;e<t.length;e++)Kn.add(t[e])}var Ql=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ca={},Wl={};function pr(e){return fl.call(Wl,e)?!0:fl.call(ca,e)?!1:Ql.test(e)?Wl[e]=!0:(ca[e]=!0,!1)}function _l(e,t,n){if(pr(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Kt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dc(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,o=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){n=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){if(!e._valueTracker){var t=hr(e)?"checked":"value";e._valueTracker=dc(e,t,""+e[t])}}function Ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=hr(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zi=/[\n"\\]/g;function Rt(e){return e.replace(zi,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ui(e,t,n,l,r,o,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+he(t)):e.value!==""+he(t)&&(e.value=""+he(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Ii(e,m,he(t)):n!=null?Ii(e,m,he(n)):l!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+he(v):e.removeAttribute("name")}function vn(e,t,n,l,r,o,m,v){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){ua(e);return}n=n!=null?""+he(n):"",t=t!=null?""+he(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=v?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),ua(e)}function Ii(e,t,n){t==="number"&&_r(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function jt(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+he(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ks(e,t,n){if(t!=null&&(t=""+he(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+he(n):""}function ws(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(a(92));if(Pe(l)){if(1<l.length)throw Error(a(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=he(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),ua(e)}function gl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Y(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||fa.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Es(e,t,n){if(t!=null&&typeof t!="object")throw Error(a(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&n[r]!==l&&Y(e,r,l)}else for(var o in t)t.hasOwnProperty(o)&&Y(e,o,t[o])}function da(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pi(e){return Hi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var Zl=null;function ct(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,Wn=null;function Jl(e){var t=bn(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ui(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=l[Ct]||null;if(!r)throw Error(a(90));Ui(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Ss(l)}break e;case"textarea":ks(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&jt(e,!!n.multiple,t,!1)}}}var ma=!1;function Ts(e,t,n){if(ma)return e(t,n);ma=!0;try{var l=e(t);return l}finally{if(ma=!1,(bl!==null||Wn!==null)&&(Eo(),bl&&(t=bl,e=Wn,Wn=bl=null,Jl(t),e)))for(t=0;t<e.length;t++)Jl(e[t])}}function Fi(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Ct]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=!1;if(On)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){pa=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{pa=!1}var Ut=null,yl=null,gr=null;function It(){if(gr)return gr;var e,t=yl,n=t.length,l,r="value"in Ut?Ut.value:Ut.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var m=n-e;for(l=1;l<=m&&t[n-l]===r[o-l];l++);return gr=r.slice(e,1<l?1-l:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Mt(){return!1}function xt(e){function t(n,l,r,o,m){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(o):o[v]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ti:Mt,this.isPropagationStopped=Mt,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},br=xt(vl),Zn=k({},vl,{view:0,detail:0}),pc=xt(Zn),yr,ni,il,Vi=k({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(yr=e.screenX-il.screenX,ni=e.screenY-il.screenY):ni=yr=0,il=e),yr)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),vr=xt(Vi),hc=k({},Vi,{dataTransfer:0}),_c=xt(hc),gc=k({},Zn,{relatedTarget:0}),an=xt(gc),ut=k({},vl,{animationName:0,elapsedTime:0,pseudoElement:0}),ha=xt(ut),Yi=k({},vl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ns=xt(Yi),Rs=k({},vl,{data:0}),_a=xt(Rs),bc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function js(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vc[e])?!!t[e]:!1}function xr(){return js}var ga=k({},Zn,{key:function(e){if(e.key){var t=bc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xr,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xc=xt(ga),Ms=k({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ba=xt(Ms),Ds=k({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xr}),Sc=xt(Ds),kc=k({},vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),As=xt(kc),ya=k({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wc=xt(ya),Ec=k({},vl,{newState:0,oldState:0}),Tc=xt(Ec),Nc=[9,13,27,32],va=On&&"CompositionEvent"in window,$i=null;On&&"documentMode"in document&&($i=document.documentMode);var Rc=On&&"TextEvent"in window&&!$i,Os=On&&(!va||$i&&8<$i&&11>=$i),Cs=" ",Bs=!1;function Ls(e,t){switch(e){case"keyup":return Nc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var li=!1;function zs(e,t){switch(e){case"compositionend":return xl(t);case"keypress":return t.which!==32?null:(Bs=!0,Cs);case"textInput":return e=t.data,e===Cs&&Bs?null:e;default:return null}}function Us(e,t){if(li)return e==="compositionend"||!va&&Ls(e,t)?(e=It(),gr=yl=Ut=null,li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Os&&t.locale!=="ko"?null:t.data;default:return null}}var jc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jc[e.type]:t==="textarea"}function Is(e,t,n,l){bl?Wn?Wn.push(l):Wn=[l]:bl=l,t=Ao(t,"onChange"),0<t.length&&(n=new br("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var qi=null,ii=null;function Mc(e){xp(e,0)}function Sr(e){var t=Xn(e);if(Ss(t))return e}function Hs(e,t){if(e==="change")return t}var Ps=!1;if(On){var Sa;if(On){var ka="oninput"in document;if(!ka){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),ka=typeof Fs.oninput=="function"}Sa=ka}else Sa=!1;Ps=Sa&&(!document.documentMode||9<document.documentMode)}function kr(){qi&&(qi.detachEvent("onpropertychange",xn),ii=qi=null)}function xn(e){if(e.propertyName==="value"&&Sr(ii)){var t=[];Is(t,ii,e,ct(e)),Ts(Mc,t)}}function Gs(e,t,n){e==="focusin"?(kr(),qi=t,ii=n,qi.attachEvent("onpropertychange",xn)):e==="focusout"&&kr()}function Dc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sr(ii)}function Ac(e,t){if(e==="click")return Sr(t)}function wa(e,t){if(e==="input"||e==="change")return Sr(t)}function wr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:wr;function ri(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!fl.call(t,r)||!Ht(e[r],t[r]))return!1}return!0}function Sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Sl(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sl(n)}}function Ea(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ea(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_r(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Oc=On&&"documentMode"in document&&11>=document.documentMode,d=null,_=null,x=null,R=!1;function j(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;R||d==null||d!==_r(l)||(l=d,"selectionStart"in l&&Ta(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),x&&ri(x,l)||(x=l,l=Ao(_,"onSelect"),0<l.length&&(t=new br("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=d)))}function Z(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var se={animationend:Z("Animation","AnimationEnd"),animationiteration:Z("Animation","AnimationIteration"),animationstart:Z("Animation","AnimationStart"),transitionrun:Z("Transition","TransitionRun"),transitionstart:Z("Transition","TransitionStart"),transitioncancel:Z("Transition","TransitionCancel"),transitionend:Z("Transition","TransitionEnd")},Ve={},Ee={};On&&(Ee=document.createElement("div").style,"AnimationEvent"in window||(delete se.animationend.animation,delete se.animationiteration.animation,delete se.animationstart.animation),"TransitionEvent"in window||delete se.transitionend.transition);function Le(e){if(Ve[e])return Ve[e];if(!se[e])return e;var t=se[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ee)return Ve[e]=t[n];return e}var ft=Le("animationend"),Qt=Le("animationiteration"),je=Le("animationstart"),at=Le("transitionrun"),kl=Le("transitionstart"),Jn=Le("transitioncancel"),Cn=Le("transitionend"),wl=new Map,rl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rl.push("scrollEnd");function sn(e,t){wl.set(e,t),tn(t,[e])}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],Bn=0,Tr=0;function Ys(){for(var e=Bn,t=Tr=Bn=0;t<e;){var n=Wt[t];Wt[t++]=null;var l=Wt[t];Wt[t++]=null;var r=Wt[t];Wt[t++]=null;var o=Wt[t];if(Wt[t++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}o!==0&&nd(n,r,o)}}function $s(e,t,n,l){Wt[Bn++]=e,Wt[Bn++]=t,Wt[Bn++]=n,Wt[Bn++]=l,Tr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cc(e,t,n,l){return $s(e,t,n,l),qs(e)}function Xi(e,t){return $s(e,null,null,t),qs(e)}function nd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,o=e.return;o!==null;)o.childLanes|=n,l=o.alternate,l!==null&&(l.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-Lt(n),e=o.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=n|536870912),o):null}function qs(e){if(50<Xa)throw Xa=0,Gu=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Nr={};function B_(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(e,t,n,l){return new B_(e,t,n,l)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tl(e,t){var n=e.alternate;return n===null?(n=Sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ld(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xs(e,t,n,l,r,o){var m=0;if(l=e,typeof e=="function")Bc(e)&&(m=1);else if(typeof e=="string")m=Hg(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=Sn(31,n,t,r),e.elementType=pe,e.lanes=o,e;case V:return Ki(n.children,r,o,t);case G:m=8,r|=24;break;case F:return e=Sn(12,n,t,r|2),e.elementType=F,e.lanes=o,e;case be:return e=Sn(13,n,t,r),e.elementType=be,e.lanes=o,e;case me:return e=Sn(19,n,t,r),e.elementType=me,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:m=10;break e;case W:m=9;break e;case re:m=11;break e;case K:m=14;break e;case ee:m=16,l=null;break e}m=29,n=Error(a(130,e===null?"null":typeof e,"")),l=null}return t=Sn(m,n,t,r),t.elementType=e,t.type=l,t.lanes=o,t}function Ki(e,t,n,l){return e=Sn(7,e,l,t),e.lanes=n,e}function Lc(e,t,n){return e=Sn(6,e,null,t),e.lanes=n,e}function id(e){var t=Sn(18,null,null,0);return t.stateNode=e,t}function zc(e,t,n){return t=Sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rd=new WeakMap;function Ln(e,t){if(typeof e=="object"&&e!==null){var n=rd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Tt(t)},rd.set(e,t),t)}return{value:e,source:t,stack:Tt(t)}}var Rr=[],jr=0,Ks=null,Na=0,zn=[],Un=0,ai=null,al=1,sl="";function Nl(e,t){Rr[jr++]=Na,Rr[jr++]=Ks,Ks=e,Na=t}function ad(e,t,n){zn[Un++]=al,zn[Un++]=sl,zn[Un++]=ai,ai=e;var l=al;e=sl;var r=32-Lt(l)-1;l&=~(1<<r),n+=1;var o=32-Lt(t)+r;if(30<o){var m=r-r%5;o=(l&(1<<m)-1).toString(32),l>>=m,r-=m,al=1<<32-Lt(t)+r|n<<r|l,sl=o+e}else al=1<<o|n<<r|l,sl=e}function Uc(e){e.return!==null&&(Nl(e,1),ad(e,1,0))}function Ic(e){for(;e===Ks;)Ks=Rr[--jr],Rr[jr]=null,Na=Rr[--jr],Rr[jr]=null;for(;e===ai;)ai=zn[--Un],zn[Un]=null,sl=zn[--Un],zn[Un]=null,al=zn[--Un],zn[Un]=null}function sd(e,t){zn[Un++]=al,zn[Un++]=sl,zn[Un++]=ai,al=t.id,sl=t.overflow,ai=e}var Pt=null,nt=null,Fe=!1,si=null,In=!1,Hc=Error(a(519));function oi(e){var t=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ra(Ln(t,e)),Hc}function od(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[_t]=e,t[Ct]=l,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Qa.length;n++)Ue(Qa[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),vn(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),ws(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Ep(t.textContent,n)?(l.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),l.onScroll!=null&&Ue("scroll",t),l.onScrollEnd!=null&&Ue("scrollend",t),l.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||oi(e,!0)}function cd(e){for(Pt=e.return;Pt;)switch(Pt.tag){case 5:case 31:case 13:In=!1;return;case 27:case 3:In=!0;return;default:Pt=Pt.return}}function Mr(e){if(e!==Pt)return!1;if(!Fe)return cd(e),Fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||rf(e.type,e.memoizedProps)),n=!n),n&&nt&&oi(e),cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nt=Cp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nt=Cp(e)}else t===27?(t=nt,Si(e.type)?(e=uf,uf=null,nt=e):nt=t):nt=Pt?Pn(e.stateNode.nextSibling):null;return!0}function Qi(){nt=Pt=null,Fe=!1}function Pc(){var e=si;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),si=null),e}function Ra(e){si===null?si=[e]:si.push(e)}var Fc=E(null),Wi=null,Rl=null;function ci(e,t,n){te(Fc,t._currentValue),t._currentValue=n}function jl(e){e._currentValue=Fc.current,L(Fc)}function Gc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Vc(e,t,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var m=r.child;o=o.firstContext;e:for(;o!==null;){var v=o;o=r;for(var w=0;w<t.length;w++)if(v.context===t[w]){o.lanes|=n,v=o.alternate,v!==null&&(v.lanes|=n),Gc(o.return,n,e),l||(m=null);break e}o=v.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(a(341));m.lanes|=n,o=m.alternate,o!==null&&(o.lanes|=n),Gc(m,n,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Dr(e,t,n,l){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var v=r.type;Ht(r.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(r===A.current){if(m=r.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ts):e=[ts])}r=r.return}e!==null&&Vc(t,e,n,l),t.flags|=262144}function Qs(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zi(e){Wi=e,Rl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ft(e){return ud(Wi,e)}function Ws(e,t){return Wi===null&&Zi(e),ud(e,t)}function ud(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rl===null){if(e===null)throw Error(a(308));Rl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rl=Rl.next=t;return n}var L_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},z_=s.unstable_scheduleCallback,U_=s.unstable_NormalPriority,St={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yc(){return{controller:new L_,data:new Map,refCount:0}}function ja(e){e.refCount--,e.refCount===0&&z_(U_,function(){e.controller.abort()})}var Ma=null,$c=0,Ar=0,Or=null;function I_(e,t){if(Ma===null){var n=Ma=[];$c=0,Ar=Ku(),Or={status:"pending",value:void 0,then:function(l){n.push(l)}}}return $c++,t.then(fd,fd),t}function fd(){if(--$c===0&&Ma!==null){Or!==null&&(Or.status="fulfilled");var e=Ma;Ma=null,Ar=0,Or=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H_(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var dd=I.S;I.S=function(e,t){Km=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&I_(e,t),dd!==null&&dd(e,t)};var Ji=E(null);function qc(){var e=Ji.current;return e!==null?e:tt.pooledCache}function Zs(e,t){t===null?te(Ji,Ji.current):te(Ji,t.pool)}function md(){var e=qc();return e===null?null:{parent:St._currentValue,pool:e}}var Cr=Error(a(460)),Xc=Error(a(474)),Js=Error(a(542)),eo={then:function(){}};function pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e}throw tr=t,Cr}}function er(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(tr=n,Cr):n}}var tr=null;function _d(){if(tr===null)throw Error(a(459));var e=tr;return tr=null,e}function gd(e){if(e===Cr||e===Js)throw Error(a(483))}var Br=null,Da=0;function to(e){var t=Da;return Da+=1,Br===null&&(Br=[]),hd(Br,e,t)}function Aa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function no(e,t){throw t.$$typeof===T?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bd(e){function t(M,N){if(e){var C=M.deletions;C===null?(M.deletions=[N],M.flags|=16):C.push(N)}}function n(M,N){if(!e)return null;for(;N!==null;)t(M,N),N=N.sibling;return null}function l(M){for(var N=new Map;M!==null;)M.key!==null?N.set(M.key,M):N.set(M.index,M),M=M.sibling;return N}function r(M,N){return M=Tl(M,N),M.index=0,M.sibling=null,M}function o(M,N,C){return M.index=C,e?(C=M.alternate,C!==null?(C=C.index,C<N?(M.flags|=67108866,N):C):(M.flags|=67108866,N)):(M.flags|=1048576,N)}function m(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function v(M,N,C,X){return N===null||N.tag!==6?(N=Lc(C,M.mode,X),N.return=M,N):(N=r(N,C),N.return=M,N)}function w(M,N,C,X){var Se=C.type;return Se===V?$(M,N,C.props.children,X,C.key):N!==null&&(N.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===ee&&er(Se)===N.type)?(N=r(N,C.props),Aa(N,C),N.return=M,N):(N=Xs(C.type,C.key,C.props,null,M.mode,X),Aa(N,C),N.return=M,N)}function B(M,N,C,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==C.containerInfo||N.stateNode.implementation!==C.implementation?(N=zc(C,M.mode,X),N.return=M,N):(N=r(N,C.children||[]),N.return=M,N)}function $(M,N,C,X,Se){return N===null||N.tag!==7?(N=Ki(C,M.mode,X,Se),N.return=M,N):(N=r(N,C),N.return=M,N)}function Q(M,N,C){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Lc(""+N,M.mode,C),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case D:return C=Xs(N.type,N.key,N.props,null,M.mode,C),Aa(C,N),C.return=M,C;case O:return N=zc(N,M.mode,C),N.return=M,N;case ee:return N=er(N),Q(M,N,C)}if(Pe(N)||J(N))return N=Ki(N,M.mode,C,null),N.return=M,N;if(typeof N.then=="function")return Q(M,to(N),C);if(N.$$typeof===q)return Q(M,Ws(M,N),C);no(M,N)}return null}function z(M,N,C,X){var Se=N!==null?N.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return Se!==null?null:v(M,N,""+C,X);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case D:return C.key===Se?w(M,N,C,X):null;case O:return C.key===Se?B(M,N,C,X):null;case ee:return C=er(C),z(M,N,C,X)}if(Pe(C)||J(C))return Se!==null?null:$(M,N,C,X,null);if(typeof C.then=="function")return z(M,N,to(C),X);if(C.$$typeof===q)return z(M,N,Ws(M,C),X);no(M,C)}return null}function P(M,N,C,X,Se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return M=M.get(C)||null,v(N,M,""+X,Se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return M=M.get(X.key===null?C:X.key)||null,w(N,M,X,Se);case O:return M=M.get(X.key===null?C:X.key)||null,B(N,M,X,Se);case ee:return X=er(X),P(M,N,C,X,Se)}if(Pe(X)||J(X))return M=M.get(C)||null,$(N,M,X,Se,null);if(typeof X.then=="function")return P(M,N,C,to(X),Se);if(X.$$typeof===q)return P(M,N,C,Ws(N,X),Se);no(N,X)}return null}function fe(M,N,C,X){for(var Se=null,Ye=null,ge=N,Me=N=0,He=null;ge!==null&&Me<C.length;Me++){ge.index>Me?(He=ge,ge=null):He=ge.sibling;var $e=z(M,ge,C[Me],X);if($e===null){ge===null&&(ge=He);break}e&&ge&&$e.alternate===null&&t(M,ge),N=o($e,N,Me),Ye===null?Se=$e:Ye.sibling=$e,Ye=$e,ge=He}if(Me===C.length)return n(M,ge),Fe&&Nl(M,Me),Se;if(ge===null){for(;Me<C.length;Me++)ge=Q(M,C[Me],X),ge!==null&&(N=o(ge,N,Me),Ye===null?Se=ge:Ye.sibling=ge,Ye=ge);return Fe&&Nl(M,Me),Se}for(ge=l(ge);Me<C.length;Me++)He=P(ge,M,Me,C[Me],X),He!==null&&(e&&He.alternate!==null&&ge.delete(He.key===null?Me:He.key),N=o(He,N,Me),Ye===null?Se=He:Ye.sibling=He,Ye=He);return e&&ge.forEach(function(Ni){return t(M,Ni)}),Fe&&Nl(M,Me),Se}function ke(M,N,C,X){if(C==null)throw Error(a(151));for(var Se=null,Ye=null,ge=N,Me=N=0,He=null,$e=C.next();ge!==null&&!$e.done;Me++,$e=C.next()){ge.index>Me?(He=ge,ge=null):He=ge.sibling;var Ni=z(M,ge,$e.value,X);if(Ni===null){ge===null&&(ge=He);break}e&&ge&&Ni.alternate===null&&t(M,ge),N=o(Ni,N,Me),Ye===null?Se=Ni:Ye.sibling=Ni,Ye=Ni,ge=He}if($e.done)return n(M,ge),Fe&&Nl(M,Me),Se;if(ge===null){for(;!$e.done;Me++,$e=C.next())$e=Q(M,$e.value,X),$e!==null&&(N=o($e,N,Me),Ye===null?Se=$e:Ye.sibling=$e,Ye=$e);return Fe&&Nl(M,Me),Se}for(ge=l(ge);!$e.done;Me++,$e=C.next())$e=P(ge,M,Me,$e.value,X),$e!==null&&(e&&$e.alternate!==null&&ge.delete($e.key===null?Me:$e.key),N=o($e,N,Me),Ye===null?Se=$e:Ye.sibling=$e,Ye=$e);return e&&ge.forEach(function(Wg){return t(M,Wg)}),Fe&&Nl(M,Me),Se}function et(M,N,C,X){if(typeof C=="object"&&C!==null&&C.type===V&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case D:e:{for(var Se=C.key;N!==null;){if(N.key===Se){if(Se=C.type,Se===V){if(N.tag===7){n(M,N.sibling),X=r(N,C.props.children),X.return=M,M=X;break e}}else if(N.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===ee&&er(Se)===N.type){n(M,N.sibling),X=r(N,C.props),Aa(X,C),X.return=M,M=X;break e}n(M,N);break}else t(M,N);N=N.sibling}C.type===V?(X=Ki(C.props.children,M.mode,X,C.key),X.return=M,M=X):(X=Xs(C.type,C.key,C.props,null,M.mode,X),Aa(X,C),X.return=M,M=X)}return m(M);case O:e:{for(Se=C.key;N!==null;){if(N.key===Se)if(N.tag===4&&N.stateNode.containerInfo===C.containerInfo&&N.stateNode.implementation===C.implementation){n(M,N.sibling),X=r(N,C.children||[]),X.return=M,M=X;break e}else{n(M,N);break}else t(M,N);N=N.sibling}X=zc(C,M.mode,X),X.return=M,M=X}return m(M);case ee:return C=er(C),et(M,N,C,X)}if(Pe(C))return fe(M,N,C,X);if(J(C)){if(Se=J(C),typeof Se!="function")throw Error(a(150));return C=Se.call(C),ke(M,N,C,X)}if(typeof C.then=="function")return et(M,N,to(C),X);if(C.$$typeof===q)return et(M,N,Ws(M,C),X);no(M,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,N!==null&&N.tag===6?(n(M,N.sibling),X=r(N,C),X.return=M,M=X):(n(M,N),X=Lc(C,M.mode,X),X.return=M,M=X),m(M)):n(M,N)}return function(M,N,C,X){try{Da=0;var Se=et(M,N,C,X);return Br=null,Se}catch(ge){if(ge===Cr||ge===Js)throw ge;var Ye=Sn(29,ge,null,M.mode);return Ye.lanes=X,Ye.return=M,Ye}finally{}}}var nr=bd(!0),yd=bd(!1),ui=!1;function Kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function di(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Xe&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=qs(e),nd(e,null,n),t}return $s(e,l,t,n),qs(e)}function Oa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,dr(e,n)}}function Wc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?r=o=m:o=o.next=m,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Zc=!1;function Ca(){if(Zc){var e=Or;if(e!==null)throw e}}function Ba(e,t,n,l){Zc=!1;var r=e.updateQueue;ui=!1;var o=r.firstBaseUpdate,m=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var w=v,B=w.next;w.next=null,m===null?o=B:m.next=B,m=w;var $=e.alternate;$!==null&&($=$.updateQueue,v=$.lastBaseUpdate,v!==m&&(v===null?$.firstBaseUpdate=B:v.next=B,$.lastBaseUpdate=w))}if(o!==null){var Q=r.baseState;m=0,$=B=w=null,v=o;do{var z=v.lane&-536870913,P=z!==v.lane;if(P?(Ie&z)===z:(l&z)===z){z!==0&&z===Ar&&(Zc=!0),$!==null&&($=$.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var fe=e,ke=v;z=t;var et=n;switch(ke.tag){case 1:if(fe=ke.payload,typeof fe=="function"){Q=fe.call(et,Q,z);break e}Q=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ke.payload,z=typeof fe=="function"?fe.call(et,Q,z):fe,z==null)break e;Q=k({},Q,z);break e;case 2:ui=!0}}z=v.callback,z!==null&&(e.flags|=64,P&&(e.flags|=8192),P=r.callbacks,P===null?r.callbacks=[z]:P.push(z))}else P={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},$===null?(B=$=P,w=Q):$=$.next=P,m|=z;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;P=v,v=P.next,P.next=null,r.lastBaseUpdate=P,r.shared.pending=null}}while(!0);$===null&&(w=Q),r.baseState=w,r.firstBaseUpdate=B,r.lastBaseUpdate=$,o===null&&(r.shared.lanes=0),gi|=m,e.lanes=m,e.memoizedState=Q}}function vd(e,t){if(typeof e!="function")throw Error(a(191,e));e.call(t)}function xd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vd(n[e],t)}var Lr=E(null),lo=E(0);function Sd(e,t){e=Ul,te(lo,e),te(Lr,t),Ul=e|t.baseLanes}function Jc(){te(lo,Ul),te(Lr,Lr.current)}function eu(){Ul=lo.current,L(Lr),L(lo)}var kn=E(null),Hn=null;function mi(e){var t=e.alternate;te(gt,gt.current&1),te(kn,e),Hn===null&&(t===null||Lr.current!==null||t.memoizedState!==null)&&(Hn=e)}function tu(e){te(gt,gt.current),te(kn,e),Hn===null&&(Hn=e)}function kd(e){e.tag===22?(te(gt,gt.current),te(kn,e),Hn===null&&(Hn=e)):pi()}function pi(){te(gt,gt.current),te(kn,kn.current)}function wn(e){L(kn),Hn===e&&(Hn=null),L(gt)}var gt=E(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=0,Re=null,Ze=null,kt=null,ro=!1,zr=!1,lr=!1,ao=0,La=0,Ur=null,P_=0;function pt(){throw Error(a(321))}function nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function lu(e,t,n,l,r,o){return Ml=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?am:bu,lr=!1,o=n(l,r),lr=!1,zr&&(o=Ed(t,n,l,r)),wd(e),o}function wd(e){I.H=Ia;var t=Ze!==null&&Ze.next!==null;if(Ml=0,kt=Ze=Re=null,ro=!1,La=0,Ur=null,t)throw Error(a(300));e===null||wt||(e=e.dependencies,e!==null&&Qs(e)&&(wt=!0))}function Ed(e,t,n,l){Re=e;var r=0;do{if(zr&&(Ur=null),La=0,zr=!1,25<=r)throw Error(a(301));if(r+=1,kt=Ze=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=sm,o=t(n,l)}while(zr);return o}function F_(){var e=I.H,t=e.useState()[0];return t=typeof t.then=="function"?za(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Re.flags|=1024),t}function iu(){var e=ao!==0;return ao=0,e}function ru(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function au(e){if(ro){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ro=!1}Ml=0,kt=Ze=Re=null,zr=!1,La=ao=0,Ur=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Re.memoizedState=kt=e:kt=kt.next=e,kt}function bt(){if(Ze===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=kt===null?Re.memoizedState:kt.next;if(t!==null)kt=t,Ze=e;else{if(e===null)throw Re.alternate===null?Error(a(467)):Error(a(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},kt===null?Re.memoizedState=kt=e:kt=kt.next=e}return kt}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function za(e){var t=La;return La+=1,Ur===null&&(Ur=[]),e=hd(Ur,e,t),t=Re,(kt===null?t.memoizedState:kt.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?am:bu),e}function oo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return za(e);if(e.$$typeof===q)return Ft(e)}throw Error(a(438,String(e)))}function su(e){var t=null,n=Re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=so(),Re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ye;return t.index++,n}function Dl(e,t){return typeof t=="function"?t(e):t}function co(e){var t=bt();return ou(t,Ze,e)}function ou(e,t,n){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=n;var r=e.baseQueue,o=l.pending;if(o!==null){if(r!==null){var m=r.next;r.next=o.next,o.next=m}t.baseQueue=r=o,l.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var v=m=null,w=null,B=t,$=!1;do{var Q=B.lane&-536870913;if(Q!==B.lane?(Ie&Q)===Q:(Ml&Q)===Q){var z=B.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Q===Ar&&($=!0);else if((Ml&z)===z){B=B.next,z===Ar&&($=!0);continue}else Q={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(v=w=Q,m=o):w=w.next=Q,Re.lanes|=z,gi|=z;Q=B.action,lr&&n(o,Q),o=B.hasEagerState?B.eagerState:n(o,Q)}else z={lane:Q,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(v=w=z,m=o):w=w.next=z,Re.lanes|=Q,gi|=Q;B=B.next}while(B!==null&&B!==t);if(w===null?m=o:w.next=v,!Ht(o,e.memoizedState)&&(wt=!0,$&&(n=Or,n!==null)))throw n;e.memoizedState=o,e.baseState=m,e.baseQueue=w,l.lastRenderedState=o}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cu(e){var t=bt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do o=e(o,m.action),m=m.next;while(m!==r);Ht(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,l]}function Td(e,t,n){var l=Re,r=bt(),o=Fe;if(o){if(n===void 0)throw Error(a(407));n=n()}else n=t();var m=!Ht((Ze||r).memoizedState,n);if(m&&(r.memoizedState=n,wt=!0),r=r.queue,du(jd.bind(null,l,r,e),[e]),r.getSnapshot!==t||m||kt!==null&&kt.memoizedState.tag&1){if(l.flags|=2048,Ir(9,{destroy:void 0},Rd.bind(null,l,r,n,t),null),tt===null)throw Error(a(349));o||(Ml&127)!==0||Nd(l,t,n)}return n}function Nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t=so(),Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rd(e,t,n,l){t.value=n,t.getSnapshot=l,Md(t)&&Dd(e)}function jd(e,t,n){return n(function(){Md(t)&&Dd(e)})}function Md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function Dd(e){var t=Xi(e,2);t!==null&&dn(t,e,2)}function uu(e){var t=nn();if(typeof e=="function"){var n=e;if(e=n(),lr){pn(!0);try{n()}finally{pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:e},t}function Ad(e,t,n,l){return e.baseState=n,ou(e,Ze,typeof l=="function"?l:Dl)}function G_(e,t,n,l,r){if(mo(e))throw Error(a(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};I.T!==null?n(!0):o.isTransition=!1,l(o),n=t.pending,n===null?(o.next=t.pending=o,Od(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Od(e,t){var n=t.action,l=t.payload,r=e.state;if(t.isTransition){var o=I.T,m={};I.T=m;try{var v=n(r,l),w=I.S;w!==null&&w(m,v),Cd(e,t,v)}catch(B){fu(e,t,B)}finally{o!==null&&m.types!==null&&(o.types=m.types),I.T=o}}else try{o=n(r,l),Cd(e,t,o)}catch(B){fu(e,t,B)}}function Cd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Bd(e,t,l)},function(l){return fu(e,t,l)}):Bd(e,t,n)}function Bd(e,t,n){t.status="fulfilled",t.value=n,Ld(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Od(e,n)))}function fu(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Ld(t),t=t.next;while(t!==l)}e.action=null}function Ld(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zd(e,t){return t}function Ud(e,t){if(Fe){var n=tt.formState;if(n!==null){e:{var l=Re;if(Fe){if(nt){t:{for(var r=nt,o=In;r.nodeType!==8;){if(!o){r=null;break t}if(r=Pn(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){nt=Pn(r.nextSibling),l=r.data==="F!";break e}}oi(l)}l=!1}l&&(t=n[0])}}return n=nn(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zd,lastRenderedState:t},n.queue=l,n=lm.bind(null,Re,l),l.dispatch=n,l=uu(!1),o=gu.bind(null,Re,!1,l.queue),l=nn(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,n=G_.bind(null,Re,r,o,n),r.dispatch=n,l.memoizedState=e,[t,n,!1]}function Id(e){var t=bt();return Hd(t,Ze,e)}function Hd(e,t,n){if(t=ou(e,t,zd)[0],e=co(Dl)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=za(t)}catch(m){throw m===Cr?Js:m}else l=t;t=bt();var r=t.queue,o=r.dispatch;return n!==t.memoizedState&&(Re.flags|=2048,Ir(9,{destroy:void 0},V_.bind(null,r,n),null)),[l,o,e]}function V_(e,t){e.action=t}function Pd(e){var t=bt(),n=Ze;if(n!==null)return Hd(t,n,e);bt(),t=t.memoizedState,n=bt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ir(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Re.updateQueue,t===null&&(t=so(),Re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Fd(){return bt().memoizedState}function uo(e,t,n,l){var r=nn();Re.flags|=e,r.memoizedState=Ir(1|t,{destroy:void 0},n,l===void 0?null:l)}function fo(e,t,n,l){var r=bt();l=l===void 0?null:l;var o=r.memoizedState.inst;Ze!==null&&l!==null&&nu(l,Ze.memoizedState.deps)?r.memoizedState=Ir(t,o,n,l):(Re.flags|=e,r.memoizedState=Ir(1|t,o,n,l))}function Gd(e,t){uo(8390656,8,e,t)}function du(e,t){fo(2048,8,e,t)}function Y_(e){Re.flags|=4;var t=Re.updateQueue;if(t===null)t=so(),Re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Vd(e){var t=bt().memoizedState;return Y_({ref:t,nextImpl:e}),function(){if((Xe&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function Yd(e,t){return fo(4,2,e,t)}function $d(e,t){return fo(4,4,e,t)}function qd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,n){n=n!=null?n.concat([e]):null,fo(4,4,qd.bind(null,t,e),n)}function mu(){}function Kd(e,t){var n=bt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&nu(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Qd(e,t){var n=bt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&nu(t,l[1]))return l[0];if(l=e(),lr){pn(!0);try{e()}finally{pn(!1)}}return n.memoizedState=[l,t],l}function pu(e,t,n){return n===void 0||(Ml&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Wm(),Re.lanes|=e,gi|=e,n)}function Wd(e,t,n,l){return Ht(n,t)?n:Lr.current!==null?(e=pu(e,n,l),Ht(e,t)||(wt=!0),e):(Ml&42)===0||(Ml&1073741824)!==0&&(Ie&261930)===0?(wt=!0,e.memoizedState=n):(e=Wm(),Re.lanes|=e,gi|=e,t)}function Zd(e,t,n,l,r){var o=ne.p;ne.p=o!==0&&8>o?o:8;var m=I.T,v={};I.T=v,gu(e,!1,t,n);try{var w=r(),B=I.S;if(B!==null&&B(v,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var $=H_(w,l);Ua(e,t,$,Nn(e))}else Ua(e,t,l,Nn(e))}catch(Q){Ua(e,t,{then:function(){},status:"rejected",reason:Q},Nn())}finally{ne.p=o,m!==null&&v.types!==null&&(m.types=v.types),I.T=m}}function $_(){}function hu(e,t,n,l){if(e.tag!==5)throw Error(a(476));var r=Jd(e).queue;Zd(e,r,t,ue,n===null?$_:function(){return em(e),n(l)})}function Jd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function em(e){var t=Jd(e);t.next===null&&(t=e.alternate.memoizedState),Ua(e,t.next.queue,{},Nn())}function _u(){return Ft(ts)}function tm(){return bt().memoizedState}function nm(){return bt().memoizedState}function q_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nn();e=fi(n);var l=di(t,e,n);l!==null&&(dn(l,t,n),Oa(l,t,n)),t={cache:Yc()},e.payload=t;return}t=t.return}}function X_(e,t,n){var l=Nn();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mo(e)?im(t,n):(n=Cc(e,t,n,l),n!==null&&(dn(n,e,l),rm(n,t,l)))}function lm(e,t,n){var l=Nn();Ua(e,t,n,l)}function Ua(e,t,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mo(e))im(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,v=o(m,n);if(r.hasEagerState=!0,r.eagerState=v,Ht(v,m))return $s(e,t,r,0),tt===null&&Ys(),!1}catch{}finally{}if(n=Cc(e,t,r,l),n!==null)return dn(n,e,l),rm(n,t,l),!0}return!1}function gu(e,t,n,l){if(l={lane:2,revertLane:Ku(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},mo(e)){if(t)throw Error(a(479))}else t=Cc(e,n,l,2),t!==null&&dn(t,e,2)}function mo(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function im(e,t){zr=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rm(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,dr(e,n)}}var Ia={readContext:Ft,use:oo,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};Ia.useEffectEvent=pt;var am={readContext:Ft,use:oo,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:Gd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,uo(4194308,4,qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return uo(4194308,4,e,t)},useInsertionEffect:function(e,t){uo(4,2,e,t)},useMemo:function(e,t){var n=nn();t=t===void 0?null:t;var l=e();if(lr){pn(!0);try{e()}finally{pn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=nn();if(n!==void 0){var r=n(t);if(lr){pn(!0);try{n(t)}finally{pn(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=X_.bind(null,Re,e),[l.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:function(e){e=uu(e);var t=e.queue,n=lm.bind(null,Re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:mu,useDeferredValue:function(e,t){var n=nn();return pu(n,e,t)},useTransition:function(){var e=uu(!1);return e=Zd.bind(null,Re,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Re,r=nn();if(Fe){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),tt===null)throw Error(a(349));(Ie&127)!==0||Nd(l,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Gd(jd.bind(null,l,o,e),[e]),l.flags|=2048,Ir(9,{destroy:void 0},Rd.bind(null,l,o,n,t),null),n},useId:function(){var e=nn(),t=tt.identifierPrefix;if(Fe){var n=sl,l=al;n=(l&~(1<<32-Lt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ao++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=P_++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_u,useFormState:Ud,useActionState:Ud,useOptimistic:function(e){var t=nn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gu.bind(null,Re,!0,n),n.dispatch=t,[e,t]},useMemoCache:su,useCacheRefresh:function(){return nn().memoizedState=q_.bind(null,Re)},useEffectEvent:function(e){var t=nn(),n={impl:e};return t.memoizedState=n,function(){if((Xe&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},bu={readContext:Ft,use:oo,useCallback:Kd,useContext:Ft,useEffect:du,useImperativeHandle:Xd,useInsertionEffect:Yd,useLayoutEffect:$d,useMemo:Qd,useReducer:co,useRef:Fd,useState:function(){return co(Dl)},useDebugValue:mu,useDeferredValue:function(e,t){var n=bt();return Wd(n,Ze.memoizedState,e,t)},useTransition:function(){var e=co(Dl)[0],t=bt().memoizedState;return[typeof e=="boolean"?e:za(e),t]},useSyncExternalStore:Td,useId:tm,useHostTransitionStatus:_u,useFormState:Id,useActionState:Id,useOptimistic:function(e,t){var n=bt();return Ad(n,Ze,e,t)},useMemoCache:su,useCacheRefresh:nm};bu.useEffectEvent=Vd;var sm={readContext:Ft,use:oo,useCallback:Kd,useContext:Ft,useEffect:du,useImperativeHandle:Xd,useInsertionEffect:Yd,useLayoutEffect:$d,useMemo:Qd,useReducer:cu,useRef:Fd,useState:function(){return cu(Dl)},useDebugValue:mu,useDeferredValue:function(e,t){var n=bt();return Ze===null?pu(n,e,t):Wd(n,Ze.memoizedState,e,t)},useTransition:function(){var e=cu(Dl)[0],t=bt().memoizedState;return[typeof e=="boolean"?e:za(e),t]},useSyncExternalStore:Td,useId:tm,useHostTransitionStatus:_u,useFormState:Pd,useActionState:Pd,useOptimistic:function(e,t){var n=bt();return Ze!==null?Ad(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:su,useCacheRefresh:nm};sm.useEffectEvent=Vd;function yu(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vu={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Nn(),r=fi(l);r.payload=t,n!=null&&(r.callback=n),t=di(e,r,l),t!==null&&(dn(t,e,l),Oa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Nn(),r=fi(l);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=di(e,r,l),t!==null&&(dn(t,e,l),Oa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nn(),l=fi(n);l.tag=2,t!=null&&(l.callback=t),t=di(e,l,n),t!==null&&(dn(t,e,n),Oa(t,e,n))}};function om(e,t,n,l,r,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,m):t.prototype&&t.prototype.isPureReactComponent?!ri(n,l)||!ri(r,o):!0}function cm(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&vu.enqueueReplaceState(t,t.state,null)}function ir(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=k({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function um(e){El(e)}function fm(e){console.error(e)}function dm(e){El(e)}function po(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function mm(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function xu(e,t,n){return n=fi(n),n.tag=3,n.payload={element:null},n.callback=function(){po(e,t)},n}function pm(e){return e=fi(e),e.tag=3,e}function hm(e,t,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=l.value;e.payload=function(){return r(o)},e.callback=function(){mm(t,n,l)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){mm(t,n,l),typeof r!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function K_(e,t,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Dr(t,n,r,!0),n=kn.current,n!==null){switch(n.tag){case 31:case 13:return Hn===null?To():n.alternate===null&&ht===0&&(ht=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),$u(e,l,r)),!1;case 22:return n.flags|=65536,l===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),$u(e,l,r)),!1}throw Error(a(435,n.tag))}return $u(e,l,r),To(),!1}if(Fe)return t=kn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==Hc&&(e=Error(a(422),{cause:l}),Ra(Ln(e,n)))):(l!==Hc&&(t=Error(a(423),{cause:l}),Ra(Ln(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Ln(l,n),r=xu(e.stateNode,l,r),Wc(e,r),ht!==4&&(ht=2)),!1;var o=Error(a(520),{cause:l});if(o=Ln(o,n),qa===null?qa=[o]:qa.push(o),ht!==4&&(ht=2),t===null)return!0;l=Ln(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=xu(n.stateNode,l,e),Wc(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(bi===null||!bi.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,r=pm(r),hm(r,e,n,l),Wc(n,r),!1}n=n.return}while(n!==null);return!1}var Su=Error(a(461)),wt=!1;function Gt(e,t,n,l){t.child=e===null?yd(t,null,n,l):nr(t,e.child,n,l)}function _m(e,t,n,l,r){n=n.render;var o=t.ref;if("ref"in l){var m={};for(var v in l)v!=="ref"&&(m[v]=l[v])}else m=l;return Zi(t),l=lu(e,t,n,m,o,r),v=iu(),e!==null&&!wt?(ru(e,t,r),Al(e,t,r)):(Fe&&v&&Uc(t),t.flags|=1,Gt(e,t,l,r),t.child)}function gm(e,t,n,l,r){if(e===null){var o=n.type;return typeof o=="function"&&!Bc(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,bm(e,t,o,l,r)):(e=Xs(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Mu(e,r)){var m=o.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(m,l)&&e.ref===t.ref)return Al(e,t,r)}return t.flags|=1,e=Tl(o,l),e.ref=t.ref,e.return=t,t.child=e}function bm(e,t,n,l,r){if(e!==null){var o=e.memoizedProps;if(ri(o,l)&&e.ref===t.ref)if(wt=!1,t.pendingProps=l=o,Mu(e,r))(e.flags&131072)!==0&&(wt=!0);else return t.lanes=e.lanes,Al(e,t,r)}return ku(e,t,n,l,r)}function ym(e,t,n,l){var r=l.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~o}else l=0,t.child=null;return vm(e,t,o,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zs(t,o!==null?o.cachePool:null),o!==null?Sd(t,o):Jc(),kd(t);else return l=t.lanes=536870912,vm(e,t,o!==null?o.baseLanes|n:n,n,l)}else o!==null?(Zs(t,o.cachePool),Sd(t,o),pi(),t.memoizedState=null):(e!==null&&Zs(t,null),Jc(),pi());return Gt(e,t,r,n),t.child}function Ha(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vm(e,t,n,l,r){var o=qc();return o=o===null?null:{parent:St._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Zs(t,null),Jc(),kd(t),e!==null&&Dr(e,t,l,!0),t.childLanes=r,null}function ho(e,t){return t=go({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xm(e,t,n){return nr(t,e.child,null,n),e=ho(t,t.pendingProps),e.flags|=2,wn(t),t.memoizedState=null,e}function Q_(e,t,n){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Fe){if(l.mode==="hidden")return e=ho(t,l),t.lanes=536870912,Ha(null,e);if(tu(t),(e=nt)?(e=Op(e,In),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ai!==null?{id:al,overflow:sl}:null,retryLane:536870912,hydrationErrors:null},n=id(e),n.return=t,t.child=n,Pt=t,nt=null)):e=null,e===null)throw oi(t);return t.lanes=536870912,null}return ho(t,l)}var o=e.memoizedState;if(o!==null){var m=o.dehydrated;if(tu(t),r)if(t.flags&256)t.flags&=-257,t=xm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558));else if(wt||Dr(e,t,n,!1),r=(n&e.childLanes)!==0,wt||r){if(l=tt,l!==null&&(m=xs(l,n),m!==0&&m!==o.retryLane))throw o.retryLane=m,Xi(e,m),dn(l,e,m),Su;To(),t=xm(e,t,n)}else e=o.treeContext,nt=Pn(m.nextSibling),Pt=t,Fe=!0,si=null,In=!1,e!==null&&sd(t,e),t=ho(t,l),t.flags|=4096;return t}return e=Tl(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _o(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ku(e,t,n,l,r){return Zi(t),n=lu(e,t,n,l,void 0,r),l=iu(),e!==null&&!wt?(ru(e,t,r),Al(e,t,r)):(Fe&&l&&Uc(t),t.flags|=1,Gt(e,t,n,r),t.child)}function Sm(e,t,n,l,r,o){return Zi(t),t.updateQueue=null,n=Ed(t,l,n,r),wd(e),l=iu(),e!==null&&!wt?(ru(e,t,o),Al(e,t,o)):(Fe&&l&&Uc(t),t.flags|=1,Gt(e,t,n,o),t.child)}function km(e,t,n,l,r){if(Zi(t),t.stateNode===null){var o=Nr,m=n.contextType;typeof m=="object"&&m!==null&&(o=Ft(m)),o=new n(l,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=vu,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=l,o.state=t.memoizedState,o.refs={},Kc(t),m=n.contextType,o.context=typeof m=="object"&&m!==null?Ft(m):Nr,o.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(yu(t,n,m,l),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&vu.enqueueReplaceState(o,o.state,null),Ba(t,l,o,r),Ca(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){o=t.stateNode;var v=t.memoizedProps,w=ir(n,v);o.props=w;var B=o.context,$=n.contextType;m=Nr,typeof $=="object"&&$!==null&&(m=Ft($));var Q=n.getDerivedStateFromProps;$=typeof Q=="function"||typeof o.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,$||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(v||B!==m)&&cm(t,o,l,m),ui=!1;var z=t.memoizedState;o.state=z,Ba(t,l,o,r),Ca(),B=t.memoizedState,v||z!==B||ui?(typeof Q=="function"&&(yu(t,n,Q,l),B=t.memoizedState),(w=ui||om(t,n,w,l,z,B,m))?($||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=B),o.props=l,o.state=B,o.context=m,l=w):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{o=t.stateNode,Qc(e,t),m=t.memoizedProps,$=ir(n,m),o.props=$,Q=t.pendingProps,z=o.context,B=n.contextType,w=Nr,typeof B=="object"&&B!==null&&(w=Ft(B)),v=n.getDerivedStateFromProps,(B=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==Q||z!==w)&&cm(t,o,l,w),ui=!1,z=t.memoizedState,o.state=z,Ba(t,l,o,r),Ca();var P=t.memoizedState;m!==Q||z!==P||ui||e!==null&&e.dependencies!==null&&Qs(e.dependencies)?(typeof v=="function"&&(yu(t,n,v,l),P=t.memoizedState),($=ui||om(t,n,$,l,z,P,w)||e!==null&&e.dependencies!==null&&Qs(e.dependencies))?(B||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,P,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,P,w)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=P),o.props=l,o.state=P,o.context=w,l=$):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),l=!1)}return o=l,_o(e,t),l=(t.flags&128)!==0,o||l?(o=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&l?(t.child=nr(t,e.child,null,r),t.child=nr(t,null,n,r)):Gt(e,t,n,r),t.memoizedState=o.state,e=t.child):e=Al(e,t,r),e}function wm(e,t,n,l){return Qi(),t.flags|=256,Gt(e,t,n,l),t.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eu(e){return{baseLanes:e,cachePool:md()}}function Tu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Tn),e}function Em(e,t,n){var l=t.pendingProps,r=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Fe){if(r?mi(t):pi(),(e=nt)?(e=Op(e,In),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ai!==null?{id:al,overflow:sl}:null,retryLane:536870912,hydrationErrors:null},n=id(e),n.return=t,t.child=n,Pt=t,nt=null)):e=null,e===null)throw oi(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var v=l.children;return l=l.fallback,r?(pi(),r=t.mode,v=go({mode:"hidden",children:v},r),l=Ki(l,r,n,null),v.return=t,l.return=t,v.sibling=l,t.child=v,l=t.child,l.memoizedState=Eu(n),l.childLanes=Tu(e,m,n),t.memoizedState=wu,Ha(null,l)):(mi(t),Nu(t,v))}var w=e.memoizedState;if(w!==null&&(v=w.dehydrated,v!==null)){if(o)t.flags&256?(mi(t),t.flags&=-257,t=Ru(e,t,n)):t.memoizedState!==null?(pi(),t.child=e.child,t.flags|=128,t=null):(pi(),v=l.fallback,r=t.mode,l=go({mode:"visible",children:l.children},r),v=Ki(v,r,n,null),v.flags|=2,l.return=t,v.return=t,l.sibling=v,t.child=l,nr(t,e.child,null,n),l=t.child,l.memoizedState=Eu(n),l.childLanes=Tu(e,m,n),t.memoizedState=wu,t=Ha(null,l));else if(mi(t),cf(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var B=m.dgst;m=B,l=Error(a(419)),l.stack="",l.digest=m,Ra({value:l,source:null,stack:null}),t=Ru(e,t,n)}else if(wt||Dr(e,t,n,!1),m=(n&e.childLanes)!==0,wt||m){if(m=tt,m!==null&&(l=xs(m,n),l!==0&&l!==w.retryLane))throw w.retryLane=l,Xi(e,l),dn(m,e,l),Su;of(v)||To(),t=Ru(e,t,n)}else of(v)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,nt=Pn(v.nextSibling),Pt=t,Fe=!0,si=null,In=!1,e!==null&&sd(t,e),t=Nu(t,l.children),t.flags|=4096);return t}return r?(pi(),v=l.fallback,r=t.mode,w=e.child,B=w.sibling,l=Tl(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,B!==null?v=Tl(B,v):(v=Ki(v,r,n,null),v.flags|=2),v.return=t,l.return=t,l.sibling=v,t.child=l,Ha(null,l),l=t.child,v=e.child.memoizedState,v===null?v=Eu(n):(r=v.cachePool,r!==null?(w=St._currentValue,r=r.parent!==w?{parent:w,pool:w}:r):r=md(),v={baseLanes:v.baseLanes|n,cachePool:r}),l.memoizedState=v,l.childLanes=Tu(e,m,n),t.memoizedState=wu,Ha(e.child,l)):(mi(t),n=e.child,e=n.sibling,n=Tl(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Nu(e,t){return t=go({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function go(e,t){return e=Sn(22,e,null,t),e.lanes=0,e}function Ru(e,t,n){return nr(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tm(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Gc(e.return,t,n)}function ju(e,t,n,l,r,o){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:o}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=n,m.tailMode=r,m.treeForkCount=o)}function Nm(e,t,n){var l=t.pendingProps,r=l.revealOrder,o=l.tail;l=l.children;var m=gt.current,v=(m&2)!==0;if(v?(m=m&1|2,t.flags|=128):m&=1,te(gt,m),Gt(e,t,l,n),l=Fe?Na:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tm(e,n,t);else if(e.tag===19)Tm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),ju(t,!1,r,n,o,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&io(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}ju(t,!0,n,null,o,l);break;case"together":ju(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Al(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gi|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Dr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Tl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qs(e)))}function W_(e,t,n){switch(t.tag){case 3:ae(t,t.stateNode.containerInfo),ci(t,St,e.memoizedState.cache),Qi();break;case 27:case 5:Be(t);break;case 4:ae(t,t.stateNode.containerInfo);break;case 10:ci(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,tu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(mi(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Em(e,t,n):(mi(t),e=Al(e,t,n),e!==null?e.sibling:null);mi(t);break;case 19:var r=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Dr(e,t,n,!1),l=(n&t.childLanes)!==0),r){if(l)return Nm(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),te(gt,gt.current),l)break;return null;case 22:return t.lanes=0,ym(e,t,n,t.pendingProps);case 24:ci(t,St,e.memoizedState.cache)}return Al(e,t,n)}function Rm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)wt=!0;else{if(!Mu(e,n)&&(t.flags&128)===0)return wt=!1,W_(e,t,n);wt=(e.flags&131072)!==0}else wt=!1,Fe&&(t.flags&1048576)!==0&&ad(t,Na,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=er(t.elementType),t.type=e,typeof e=="function")Bc(e)?(l=ir(e,l),t.tag=1,t=km(null,t,e,l,n)):(t.tag=0,t=ku(null,t,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===re){t.tag=11,t=_m(null,t,e,l,n);break e}else if(r===K){t.tag=14,t=gm(null,t,e,l,n);break e}}throw t=Oe(e)||e,Error(a(306,t,""))}}return t;case 0:return ku(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,r=ir(l,t.pendingProps),km(e,t,l,r,n);case 3:e:{if(ae(t,t.stateNode.containerInfo),e===null)throw Error(a(387));l=t.pendingProps;var o=t.memoizedState;r=o.element,Qc(e,t),Ba(t,l,null,n);var m=t.memoizedState;if(l=m.cache,ci(t,St,l),l!==o.cache&&Vc(t,[St],n,!0),Ca(),l=m.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=wm(e,t,l,n);break e}else if(l!==r){r=Ln(Error(a(424)),t),Ra(r),t=wm(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=Pn(e.firstChild),Pt=t,Fe=!0,si=null,In=!0,n=yd(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Qi(),l===r){t=Al(e,t,n);break e}Gt(e,t,l,n)}t=t.child}return t;case 26:return _o(e,t),e===null?(n=Ip(t.type,null,t.pendingProps,null))?t.memoizedState=n:Fe||(n=t.type,e=t.pendingProps,l=Oo(H.current).createElement(n),l[_t]=t,l[Ct]=e,Vt(l,n,e),mt(l),t.stateNode=l):t.memoizedState=Ip(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Be(t),e===null&&Fe&&(l=t.stateNode=Lp(t.type,t.pendingProps,H.current),Pt=t,In=!0,r=nt,Si(t.type)?(uf=r,nt=Pn(l.firstChild)):nt=r),Gt(e,t,t.pendingProps.children,n),_o(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Fe&&((r=l=nt)&&(l=Ng(l,t.type,t.pendingProps,In),l!==null?(t.stateNode=l,Pt=t,nt=Pn(l.firstChild),In=!1,r=!0):r=!1),r||oi(t)),Be(t),r=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,l=o.children,rf(r,o)?l=null:m!==null&&rf(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=lu(e,t,F_,null,null,n),ts._currentValue=r),_o(e,t),Gt(e,t,l,n),t.child;case 6:return e===null&&Fe&&((e=n=nt)&&(n=Rg(n,t.pendingProps,In),n!==null?(t.stateNode=n,Pt=t,nt=null,e=!0):e=!1),e||oi(t)),null;case 13:return Em(e,t,n);case 4:return ae(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=nr(t,null,l,n):Gt(e,t,l,n),t.child;case 11:return _m(e,t,t.type,t.pendingProps,n);case 7:return Gt(e,t,t.pendingProps,n),t.child;case 8:return Gt(e,t,t.pendingProps.children,n),t.child;case 12:return Gt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,ci(t,t.type,l.value),Gt(e,t,l.children,n),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,Zi(t),r=Ft(r),l=l(r),t.flags|=1,Gt(e,t,l,n),t.child;case 14:return gm(e,t,t.type,t.pendingProps,n);case 15:return bm(e,t,t.type,t.pendingProps,n);case 19:return Nm(e,t,n);case 31:return Q_(e,t,n);case 22:return ym(e,t,n,t.pendingProps);case 24:return Zi(t),l=Ft(St),e===null?(r=qc(),r===null&&(r=tt,o=Yc(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=n),r=o),t.memoizedState={parent:l,cache:r},Kc(t),ci(t,St,r)):((e.lanes&n)!==0&&(Qc(e,t),Ba(t,null,null,n),Ca()),r=e.memoizedState,o=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ci(t,St,l)):(l=o.cache,ci(t,St,l),l!==r.cache&&Vc(t,[St],n,!0))),Gt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Ol(e){e.flags|=4}function Du(e,t,n,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(tp())e.flags|=8192;else throw tr=eo,Xc}else e.flags&=-16777217}function jm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vp(t))if(tp())e.flags|=8192;else throw tr=eo,Xc}function bo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bi():536870912,e.lanes|=t,Gr|=t)}function Pa(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Z_(e,t,n){var l=t.pendingProps;switch(Ic(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return lt(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),jl(St),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?Ol(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pc())),lt(t),null;case 26:var r=t.type,o=t.memoizedState;return e===null?(Ol(t),o!==null?(lt(t),jm(t,o)):(lt(t),Du(t,r,null,l,n))):o?o!==e.memoizedState?(Ol(t),lt(t),jm(t,o)):(lt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ol(t),lt(t),Du(t,r,e,l,n)),null;case 27:if(Ge(t),n=H.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ol(t);else{if(!l){if(t.stateNode===null)throw Error(a(166));return lt(t),null}e=oe.current,Mr(t)?od(t):(e=Lp(r,l,n),t.stateNode=e,Ol(t))}return lt(t),null;case 5:if(Ge(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ol(t);else{if(!l){if(t.stateNode===null)throw Error(a(166));return lt(t),null}if(o=oe.current,Mr(t))od(t);else{var m=Oo(H.current);switch(o){case 1:o=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=m.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?o.multiple=!0:l.size&&(o.size=l.size);break;default:o=typeof l.is=="string"?m.createElement(r,{is:l.is}):m.createElement(r)}}o[_t]=t,o[Ct]=l;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)o.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=o;e:switch(Vt(o,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ol(t)}}return lt(t),Du(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ol(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(a(166));if(e=H.current,Mr(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,r=Pt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Ep(e.nodeValue,n)),e||oi(t,!0)}else e=Oo(e).createTextNode(l),e[_t]=t,t.stateNode=e}return lt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Mr(t),n!==null){if(e===null){if(!l)throw Error(a(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[_t]=t}else Qi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),e=!1}else n=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wn(t),t):(wn(t),null);if((t.flags&128)!==0)throw Error(a(558))}return lt(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Mr(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(a(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(a(317));r[_t]=t}else Qi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),r=!1}else r=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(wn(t),t):(wn(t),null)}return wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),o=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==r&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),bo(t,t.updateQueue),lt(t),null);case 4:return ve(),e===null&&Ju(t.stateNode.containerInfo),lt(t),null;case 10:return jl(t.type),lt(t),null;case 19:if(L(gt),l=t.memoizedState,l===null)return lt(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Pa(l,!1);else{if(ht!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=io(e),o!==null){for(t.flags|=128,Pa(l,!1),e=o.updateQueue,t.updateQueue=e,bo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ld(n,e),n=n.sibling;return te(gt,gt.current&1|2),Fe&&Nl(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&vt()>ko&&(t.flags|=128,r=!0,Pa(l,!1),t.lanes=4194304)}else{if(!r)if(e=io(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,bo(t,e),Pa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Fe)return lt(t),null}else 2*vt()-l.renderingStartTime>ko&&n!==536870912&&(t.flags|=128,r=!0,Pa(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=vt(),e.sibling=null,n=gt.current,te(gt,r?n&1|2:n&1),Fe&&Nl(t,l.treeForkCount),e):(lt(t),null);case 22:case 23:return wn(t),eu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),n=t.updateQueue,n!==null&&bo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&L(Ji),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),jl(St),lt(t),null;case 25:return null;case 30:return null}throw Error(a(156,t.tag))}function J_(e,t){switch(Ic(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jl(St),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ge(t),null;case 31:if(t.memoizedState!==null){if(wn(t),t.alternate===null)throw Error(a(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(gt),null;case 4:return ve(),null;case 10:return jl(t.type),null;case 22:case 23:return wn(t),eu(),e!==null&&L(Ji),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return jl(St),null;case 25:return null;default:return null}}function Mm(e,t){switch(Ic(t),t.tag){case 3:jl(St),ve();break;case 26:case 27:case 5:Ge(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&wn(t);break;case 13:wn(t);break;case 19:L(gt);break;case 10:jl(t.type);break;case 22:case 23:wn(t),eu(),e!==null&&L(Ji);break;case 24:jl(St)}}function Fa(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var o=n.create,m=n.inst;l=o(),m.destroy=l}n=n.next}while(n!==r)}}catch(v){Qe(t,t.return,v)}}function hi(e,t,n){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var o=r.next;l=o;do{if((l.tag&e)===e){var m=l.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,r=t;var w=n,B=v;try{B()}catch($){Qe(r,w,$)}}}l=l.next}while(l!==o)}}catch($){Qe(t,t.return,$)}}function Dm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xd(t,n)}catch(l){Qe(e,e.return,l)}}}function Am(e,t,n){n.props=ir(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Qe(e,t,l)}}function Ga(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){Qe(e,t,r)}}function ol(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){Qe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Qe(e,t,r)}else n.current=null}function Om(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){Qe(e,e.return,r)}}function Au(e,t,n){try{var l=e.stateNode;xg(l,e.type,n,t),l[Ct]=t}catch(r){Qe(e,e.return,r)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Si(e.type)||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Si(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(l!==4&&(l===27&&Si(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function yo(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Si(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}function Bm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Vt(t,l,n),t[_t]=e,t[Ct]=n}catch(o){Qe(e,e.return,o)}}var Cl=!1,Et=!1,Bu=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function eg(e,t){if(e=e.containerInfo,nf=Ho,e=Vs(e),Ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var m=0,v=-1,w=-1,B=0,$=0,Q=e,z=null;t:for(;;){for(var P;Q!==n||r!==0&&Q.nodeType!==3||(v=m+r),Q!==o||l!==0&&Q.nodeType!==3||(w=m+l),Q.nodeType===3&&(m+=Q.nodeValue.length),(P=Q.firstChild)!==null;)z=Q,Q=P;for(;;){if(Q===e)break t;if(z===n&&++B===r&&(v=m),z===o&&++$===l&&(w=m),(P=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=P}n=v===-1||w===-1?null:{start:v,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:e,selectionRange:n},Ho=!1,Bt=t;Bt!==null;)if(t=Bt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Bt=e;else for(;Bt!==null;){switch(t=Bt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,r=o.memoizedProps,o=o.memoizedState,l=n.stateNode;try{var fe=ir(n.type,r);e=l.getSnapshotBeforeUpdate(fe,o),l.__reactInternalSnapshotBeforeUpdate=e}catch(ke){Qe(n,n.return,ke)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)sf(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=t.sibling,e!==null){e.return=t.return,Bt=e;break}Bt=t.return}}function zm(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ll(e,n),l&4&&Fa(5,n);break;case 1:if(Ll(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Qe(n,n.return,m)}else{var r=ir(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Qe(n,n.return,m)}}l&64&&Dm(n),l&512&&Ga(n,n.return);break;case 3:if(Ll(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xd(e,t)}catch(m){Qe(n,n.return,m)}}break;case 27:t===null&&l&4&&Bm(n);case 26:case 5:Ll(e,n),t===null&&l&4&&Om(n),l&512&&Ga(n,n.return);break;case 12:Ll(e,n);break;case 31:Ll(e,n),l&4&&Hm(e,n);break;case 13:Ll(e,n),l&4&&Pm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=cg.bind(null,n),jg(e,n))));break;case 22:if(l=n.memoizedState!==null||Cl,!l){t=t!==null&&t.memoizedState!==null||Et,r=Cl;var o=Et;Cl=l,(Et=t)&&!o?zl(e,n,(n.subtreeFlags&8772)!==0):Ll(e,n),Cl=r,Et=o}break;case 30:break;default:Ll(e,n)}}function Um(e){var t=e.alternate;t!==null&&(e.alternate=null,Um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var st=null,on=!1;function Bl(e,t,n){for(n=n.child;n!==null;)Im(e,t,n),n=n.sibling}function Im(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 26:Et||ol(n,t),Bl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Et||ol(n,t);var l=st,r=on;Si(n.type)&&(st=n.stateNode,on=!1),Bl(e,t,n),Za(n.stateNode),st=l,on=r;break;case 5:Et||ol(n,t);case 6:if(l=st,r=on,st=null,Bl(e,t,n),st=l,on=r,st!==null)if(on)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(n.stateNode)}catch(o){Qe(n,t,o)}else try{st.removeChild(n.stateNode)}catch(o){Qe(n,t,o)}break;case 18:st!==null&&(on?(e=st,Dp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Wr(e)):Dp(st,n.stateNode));break;case 4:l=st,r=on,st=n.stateNode.containerInfo,on=!0,Bl(e,t,n),st=l,on=r;break;case 0:case 11:case 14:case 15:hi(2,n,t),Et||hi(4,n,t),Bl(e,t,n);break;case 1:Et||(ol(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Am(n,t,l)),Bl(e,t,n);break;case 21:Bl(e,t,n);break;case 22:Et=(l=Et)||n.memoizedState!==null,Bl(e,t,n),Et=l;break;default:Bl(e,t,n)}}function Hm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wr(e)}catch(n){Qe(t,t.return,n)}}}function Pm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wr(e)}catch(n){Qe(t,t.return,n)}}function tg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Lm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Lm),t;default:throw Error(a(435,e.tag))}}function vo(e,t){var n=tg(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var r=ug.bind(null,e,l);l.then(r,r)}})}function cn(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],o=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(Si(v.type)){st=v.stateNode,on=!1;break e}break;case 5:st=v.stateNode,on=!1;break e;case 3:case 4:st=v.stateNode.containerInfo,on=!0;break e}v=v.return}if(st===null)throw Error(a(160));Im(o,m,r),st=null,on=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fm(t,e),t=t.sibling}var el=null;function Fm(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:cn(t,e),un(e),l&4&&(hi(3,e,e.return),Fa(3,e),hi(5,e,e.return));break;case 1:cn(t,e),un(e),l&512&&(Et||n===null||ol(n,n.return)),l&64&&Cl&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=el;if(cn(t,e),un(e),l&512&&(Et||n===null||ol(n,n.return)),l&4){var o=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":o=r.getElementsByTagName("title")[0],(!o||o[gn]||o[_t]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(l),r.head.insertBefore(o,r.querySelector("head > title"))),Vt(o,l,n),o[_t]=e,mt(o),l=o;break e;case"link":var m=Fp("link","href",r).get(l+(n.href||""));if(m){for(var v=0;v<m.length;v++)if(o=m[v],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(v,1);break t}}o=r.createElement(l),Vt(o,l,n),r.head.appendChild(o);break;case"meta":if(m=Fp("meta","content",r).get(l+(n.content||""))){for(v=0;v<m.length;v++)if(o=m[v],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(v,1);break t}}o=r.createElement(l),Vt(o,l,n),r.head.appendChild(o);break;default:throw Error(a(468,l))}o[_t]=e,mt(o),l=o}e.stateNode=l}else Gp(r,e.type,e.stateNode);else e.stateNode=Pp(r,l,e.memoizedProps);else o!==l?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,l===null?Gp(r,e.type,e.stateNode):Pp(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Au(e,e.memoizedProps,n.memoizedProps)}break;case 27:cn(t,e),un(e),l&512&&(Et||n===null||ol(n,n.return)),n!==null&&l&4&&Au(e,e.memoizedProps,n.memoizedProps);break;case 5:if(cn(t,e),un(e),l&512&&(Et||n===null||ol(n,n.return)),e.flags&32){r=e.stateNode;try{gl(r,"")}catch(fe){Qe(e,e.return,fe)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Au(e,r,n!==null?n.memoizedProps:r)),l&1024&&(Bu=!0);break;case 6:if(cn(t,e),un(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(fe){Qe(e,e.return,fe)}}break;case 3:if(Lo=null,r=el,el=Co(t.containerInfo),cn(t,e),el=r,un(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(fe){Qe(e,e.return,fe)}Bu&&(Bu=!1,Gm(e));break;case 4:l=el,el=Co(e.stateNode.containerInfo),cn(t,e),un(e),el=l;break;case 12:cn(t,e),un(e);break;case 31:cn(t,e),un(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 13:cn(t,e),un(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(So=vt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 22:r=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,B=Cl,$=Et;if(Cl=B||r,Et=$||w,cn(t,e),Et=$,Cl=B,un(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||w||Cl||Et||rr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(o=w.stateNode,r)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=w.stateNode;var Q=w.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(fe){Qe(w,w.return,fe)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=r?"":w.memoizedProps}catch(fe){Qe(w,w.return,fe)}}}else if(t.tag===18){if(n===null){w=t;try{var P=w.stateNode;r?Ap(P,!0):Ap(w.stateNode,!1)}catch(fe){Qe(w,w.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,vo(e,n))));break;case 19:cn(t,e),un(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 30:break;case 21:break;default:cn(t,e),un(e)}}function un(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Cm(l)){n=l;break}l=l.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var r=n.stateNode,o=Ou(e);yo(e,o,r);break;case 5:var m=n.stateNode;n.flags&32&&(gl(m,""),n.flags&=-33);var v=Ou(e);yo(e,v,m);break;case 3:case 4:var w=n.stateNode.containerInfo,B=Ou(e);Cu(e,B,w);break;default:throw Error(a(161))}}catch($){Qe(e,e.return,$)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ll(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zm(e,t.alternate,t),t=t.sibling}function rr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:hi(4,t,t.return),rr(t);break;case 1:ol(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Am(t,t.return,n),rr(t);break;case 27:Za(t.stateNode);case 26:case 5:ol(t,t.return),rr(t);break;case 22:t.memoizedState===null&&rr(t);break;case 30:rr(t);break;default:rr(t)}e=e.sibling}}function zl(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:zl(r,o,n),Fa(4,o);break;case 1:if(zl(r,o,n),l=o,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(B){Qe(l,l.return,B)}if(l=o,r=l.updateQueue,r!==null){var v=l.stateNode;try{var w=r.shared.hiddenCallbacks;if(w!==null)for(r.shared.hiddenCallbacks=null,r=0;r<w.length;r++)vd(w[r],v)}catch(B){Qe(l,l.return,B)}}n&&m&64&&Dm(o),Ga(o,o.return);break;case 27:Bm(o);case 26:case 5:zl(r,o,n),n&&l===null&&m&4&&Om(o),Ga(o,o.return);break;case 12:zl(r,o,n);break;case 31:zl(r,o,n),n&&m&4&&Hm(r,o);break;case 13:zl(r,o,n),n&&m&4&&Pm(r,o);break;case 22:o.memoizedState===null&&zl(r,o,n),Ga(o,o.return);break;case 30:break;default:zl(r,o,n)}t=t.sibling}}function Lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ja(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ja(e))}function tl(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vm(e,t,n,l),t=t.sibling}function Vm(e,t,n,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:tl(e,t,n,l),r&2048&&Fa(9,t);break;case 1:tl(e,t,n,l);break;case 3:tl(e,t,n,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ja(e)));break;case 12:if(r&2048){tl(e,t,n,l),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,v=o.onPostCommit;typeof v=="function"&&v(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Qe(t,t.return,w)}}else tl(e,t,n,l);break;case 31:tl(e,t,n,l);break;case 13:tl(e,t,n,l);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?tl(e,t,n,l):Va(e,t):o._visibility&2?tl(e,t,n,l):(o._visibility|=2,Hr(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Lu(m,t);break;case 24:tl(e,t,n,l),r&2048&&zu(t.alternate,t);break;default:tl(e,t,n,l)}}function Hr(e,t,n,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,m=t,v=n,w=l,B=m.flags;switch(m.tag){case 0:case 11:case 15:Hr(o,m,v,w,r),Fa(8,m);break;case 23:break;case 22:var $=m.stateNode;m.memoizedState!==null?$._visibility&2?Hr(o,m,v,w,r):Va(o,m):($._visibility|=2,Hr(o,m,v,w,r)),r&&B&2048&&Lu(m.alternate,m);break;case 24:Hr(o,m,v,w,r),r&&B&2048&&zu(m.alternate,m);break;default:Hr(o,m,v,w,r)}t=t.sibling}}function Va(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,r=l.flags;switch(l.tag){case 22:Va(n,l),r&2048&&Lu(l.alternate,l);break;case 24:Va(n,l),r&2048&&zu(l.alternate,l);break;default:Va(n,l)}t=t.sibling}}var Ya=8192;function Pr(e,t,n){if(e.subtreeFlags&Ya)for(e=e.child;e!==null;)Ym(e,t,n),e=e.sibling}function Ym(e,t,n){switch(e.tag){case 26:Pr(e,t,n),e.flags&Ya&&e.memoizedState!==null&&Pg(n,el,e.memoizedState,e.memoizedProps);break;case 5:Pr(e,t,n);break;case 3:case 4:var l=el;el=Co(e.stateNode.containerInfo),Pr(e,t,n),el=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ya,Ya=16777216,Pr(e,t,n),Ya=l):Pr(e,t,n));break;default:Pr(e,t,n)}}function $m(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $a(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Bt=l,Xm(l,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 0:case 11:case 15:$a(e),e.flags&2048&&hi(9,e,e.return);break;case 3:$a(e);break;case 12:$a(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,xo(e)):$a(e);break;default:$a(e)}}function xo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Bt=l,Xm(l,e)}$m(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:hi(8,t,t.return),xo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,xo(t));break;default:xo(t)}e=e.sibling}}function Xm(e,t){for(;Bt!==null;){var n=Bt;switch(n.tag){case 0:case 11:case 15:hi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ja(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Bt=l;else e:for(n=e;Bt!==null;){l=Bt;var r=l.sibling,o=l.return;if(Um(l),l===n){Bt=null;break e}if(r!==null){r.return=o,Bt=r;break e}Bt=o}}}var ng={getCacheForType:function(e){var t=Ft(St),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ft(St).controller.signal}},lg=typeof WeakMap=="function"?WeakMap:Map,Xe=0,tt=null,ze=null,Ie=0,Ke=0,En=null,_i=!1,Fr=!1,Uu=!1,Ul=0,ht=0,gi=0,ar=0,Iu=0,Tn=0,Gr=0,qa=null,fn=null,Hu=!1,So=0,Km=0,ko=1/0,wo=null,bi=null,Dt=0,yi=null,Vr=null,Il=0,Pu=0,Fu=null,Qm=null,Xa=0,Gu=null;function Nn(){return(Xe&2)!==0&&Ie!==0?Ie&-Ie:I.T!==null?Ku():ot()}function Wm(){if(Tn===0)if((Ie&536870912)===0||Fe){var e=qt;qt<<=1,(qt&3932160)===0&&(qt=262144),Tn=e}else Tn=536870912;return e=kn.current,e!==null&&(e.flags|=32),Tn}function dn(e,t,n){(e===tt&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),vi(e,Ie,Tn,!1)),Li(e,n),((Xe&2)===0||e!==tt)&&(e===tt&&((Xe&2)===0&&(ar|=n),ht===4&&vi(e,Ie,Tn,!1)),cl(e))}function Zm(e,t,n){if((Xe&6)!==0)throw Error(a(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ot(e,t),r=l?ag(e,t):Yu(e,t,!0),o=l;do{if(r===0){Fr&&!l&&vi(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!ig(n)){r=Yu(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var v=e;r=qa;var w=v.current.memoizedState.isDehydrated;if(w&&(Yr(v,m).flags|=256),m=Yu(v,m,!1),m!==2){if(Uu&&!w){v.errorRecoveryDisabledLanes|=o,ar|=o,r=4;break e}o=fn,fn=r,o!==null&&(fn===null?fn=o:fn.push.apply(fn,o))}r=m}if(o=!1,r!==2)continue}}if(r===1){Yr(e,0),vi(e,t,0,!0);break}e:{switch(l=e,o=r,o){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t)break;case 6:vi(l,t,Tn,!_i);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(r=So+300-vt(),10<r)){if(vi(l,t,Tn,!_i),rt(l,0,!0)!==0)break e;Il=t,l.timeoutHandle=jp(Jm.bind(null,l,n,fn,wo,Hu,t,Tn,ar,Gr,_i,o,"Throttled",-0,0),r);break e}Jm(l,n,fn,wo,Hu,t,Tn,ar,Gr,_i,o,null,-0,0)}}break}while(!0);cl(e)}function Jm(e,t,n,l,r,o,m,v,w,B,$,Q,z,P){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},Ym(t,o,Q);var fe=(o&62914560)===o?So-vt():(o&4194048)===o?Km-vt():0;if(fe=Fg(Q,fe),fe!==null){Il=o,e.cancelPendingCommit=fe(sp.bind(null,e,t,o,n,l,r,m,v,w,$,Q,null,z,P)),vi(e,o,m,!B);return}}sp(e,t,o,n,l,r,m,v,w)}function ig(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],o=r.getSnapshot;r=r.value;try{if(!Ht(o(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vi(e,t,n,l){t&=~Iu,t&=~ar,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var o=31-Lt(r),m=1<<o;l[o]=-1,r&=~m}n!==0&&vs(e,n,t)}function Eo(){return(Xe&6)===0?(Ka(0),!1):!0}function Vu(){if(ze!==null){if(Ke===0)var e=ze.return;else e=ze,Rl=Wi=null,au(e),Br=null,Da=0,e=ze;for(;e!==null;)Mm(e.alternate,e),e=e.return;ze=null}}function Yr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,wg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Il=0,Vu(),tt=e,ze=n=Tl(e.current,null),Ie=t,Ke=0,En=null,_i=!1,Fr=Ot(e,t),Uu=!1,Gr=Tn=Iu=ar=gi=ht=0,fn=qa=null,Hu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-Lt(l),o=1<<r;t|=e[r],l&=~o}return Ul=t,Ys(),n}function ep(e,t){Re=null,I.H=Ia,t===Cr||t===Js?(t=_d(),Ke=3):t===Xc?(t=_d(),Ke=4):Ke=t===Su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,En=t,ze===null&&(ht=1,po(e,Ln(t,e.current)))}function tp(){var e=kn.current;return e===null?!0:(Ie&4194048)===Ie?Hn===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===Hn:!1}function np(){var e=I.H;return I.H=Ia,e===null?Ia:e}function lp(){var e=I.A;return I.A=ng,e}function To(){ht=4,_i||(Ie&4194048)!==Ie&&kn.current!==null||(Fr=!0),(gi&134217727)===0&&(ar&134217727)===0||tt===null||vi(tt,Ie,Tn,!1)}function Yu(e,t,n){var l=Xe;Xe|=2;var r=np(),o=lp();(tt!==e||Ie!==t)&&(wo=null,Yr(e,t)),t=!1;var m=ht;e:do try{if(Ke!==0&&ze!==null){var v=ze,w=En;switch(Ke){case 8:Vu(),m=6;break e;case 3:case 2:case 9:case 6:kn.current===null&&(t=!0);var B=Ke;if(Ke=0,En=null,$r(e,v,w,B),n&&Fr){m=0;break e}break;default:B=Ke,Ke=0,En=null,$r(e,v,w,B)}}rg(),m=ht;break}catch($){ep(e,$)}while(!0);return t&&e.shellSuspendCounter++,Rl=Wi=null,Xe=l,I.H=r,I.A=o,ze===null&&(tt=null,Ie=0,Ys()),m}function rg(){for(;ze!==null;)ip(ze)}function ag(e,t){var n=Xe;Xe|=2;var l=np(),r=lp();tt!==e||Ie!==t?(wo=null,ko=vt()+500,Yr(e,t)):Fr=Ot(e,t);e:do try{if(Ke!==0&&ze!==null){t=ze;var o=En;t:switch(Ke){case 1:Ke=0,En=null,$r(e,t,o,1);break;case 2:case 9:if(pd(o)){Ke=0,En=null,rp(t);break}t=function(){Ke!==2&&Ke!==9||tt!==e||(Ke=7),cl(e)},o.then(t,t);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:pd(o)?(Ke=0,En=null,rp(t)):(Ke=0,En=null,$r(e,t,o,7));break;case 5:var m=null;switch(ze.tag){case 26:m=ze.memoizedState;case 5:case 27:var v=ze;if(m?Vp(m):v.stateNode.complete){Ke=0,En=null;var w=v.sibling;if(w!==null)ze=w;else{var B=v.return;B!==null?(ze=B,No(B)):ze=null}break t}}Ke=0,En=null,$r(e,t,o,5);break;case 6:Ke=0,En=null,$r(e,t,o,6);break;case 8:Vu(),ht=6;break e;default:throw Error(a(462))}}sg();break}catch($){ep(e,$)}while(!0);return Rl=Wi=null,I.H=l,I.A=r,Xe=n,ze!==null?0:(tt=null,Ie=0,Ys(),ht)}function sg(){for(;ze!==null&&!ur();)ip(ze)}function ip(e){var t=Rm(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?No(e):ze=t}function rp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Sm(n,t,t.pendingProps,t.type,void 0,Ie);break;case 11:t=Sm(n,t,t.pendingProps,t.type.render,t.ref,Ie);break;case 5:au(t);default:Mm(n,t),t=ze=ld(t,Ul),t=Rm(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?No(e):ze=t}function $r(e,t,n,l){Rl=Wi=null,au(t),Br=null,Da=0;var r=t.return;try{if(K_(e,r,t,n,Ie)){ht=1,po(e,Ln(n,e.current)),ze=null;return}}catch(o){if(r!==null)throw ze=r,o;ht=1,po(e,Ln(n,e.current)),ze=null;return}t.flags&32768?(Fe||l===1?e=!0:Fr||(Ie&536870912)!==0?e=!1:(_i=e=!0,(l===2||l===9||l===3||l===6)&&(l=kn.current,l!==null&&l.tag===13&&(l.flags|=16384))),ap(t,e)):No(t)}function No(e){var t=e;do{if((t.flags&32768)!==0){ap(t,_i);return}e=t.return;var n=Z_(t.alternate,t,Ul);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);ht===0&&(ht=5)}function ap(e,t){do{var n=J_(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);ht=6,ze=null}function sp(e,t,n,l,r,o,m,v,w){e.cancelPendingCommit=null;do Ro();while(Dt!==0);if((Xe&6)!==0)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,o|=Tr,pl(e,n,o,m,v,w),e===tt&&(ze=tt=null,Ie=0),Vr=t,yi=e,Il=n,Pu=o,Fu=r,Qm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fg(Oi,function(){return dp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,r=ne.p,ne.p=2,m=Xe,Xe|=4;try{eg(e,t,n)}finally{Xe=m,ne.p=r,I.T=l}}Dt=1,op(),cp(),up()}}function op(){if(Dt===1){Dt=0;var e=yi,t=Vr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=I.T,I.T=null;var l=ne.p;ne.p=2;var r=Xe;Xe|=4;try{Fm(t,e);var o=lf,m=Vs(e.containerInfo),v=o.focusedElem,w=o.selectionRange;if(m!==v&&v&&v.ownerDocument&&Ea(v.ownerDocument.documentElement,v)){if(w!==null&&Ta(v)){var B=w.start,$=w.end;if($===void 0&&($=B),"selectionStart"in v)v.selectionStart=B,v.selectionEnd=Math.min($,v.value.length);else{var Q=v.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var P=z.getSelection(),fe=v.textContent.length,ke=Math.min(w.start,fe),et=w.end===void 0?ke:Math.min(w.end,fe);!P.extend&&ke>et&&(m=et,et=ke,ke=m);var M=Er(v,ke),N=Er(v,et);if(M&&N&&(P.rangeCount!==1||P.anchorNode!==M.node||P.anchorOffset!==M.offset||P.focusNode!==N.node||P.focusOffset!==N.offset)){var C=Q.createRange();C.setStart(M.node,M.offset),P.removeAllRanges(),ke>et?(P.addRange(C),P.extend(N.node,N.offset)):(C.setEnd(N.node,N.offset),P.addRange(C))}}}}for(Q=[],P=v;P=P.parentNode;)P.nodeType===1&&Q.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<Q.length;v++){var X=Q[v];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Ho=!!nf,lf=nf=null}finally{Xe=r,ne.p=l,I.T=n}}e.current=t,Dt=2}}function cp(){if(Dt===2){Dt=0;var e=yi,t=Vr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=I.T,I.T=null;var l=ne.p;ne.p=2;var r=Xe;Xe|=4;try{zm(e,t.alternate,t)}finally{Xe=r,ne.p=l,I.T=n}}Dt=3}}function up(){if(Dt===4||Dt===3){Dt=0,Gl();var e=yi,t=Vr,n=Il,l=Qm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Dt=5:(Dt=0,Vr=yi=null,fp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(bi=null),Dn(n),t=t.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ci,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=I.T,r=ne.p,ne.p=2,I.T=null;try{for(var o=e.onRecoverableError,m=0;m<l.length;m++){var v=l[m];o(v.value,{componentStack:v.stack})}}finally{I.T=t,ne.p=r}}(Il&3)!==0&&Ro(),cl(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Gu?Xa++:(Xa=0,Gu=e):Xa=0,Ka(0)}}function fp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ja(t)))}function Ro(){return op(),cp(),up(),dp()}function dp(){if(Dt!==5)return!1;var e=yi,t=Pu;Pu=0;var n=Dn(Il),l=I.T,r=ne.p;try{ne.p=32>n?32:n,I.T=null,n=Fu,Fu=null;var o=yi,m=Il;if(Dt=0,Vr=yi=null,Il=0,(Xe&6)!==0)throw Error(a(331));var v=Xe;if(Xe|=4,qm(o.current),Vm(o,o.current,m,n),Xe=v,Ka(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ci,o)}catch{}return!0}finally{ne.p=r,I.T=l,fp(e,t)}}function mp(e,t,n){t=Ln(n,t),t=xu(e.stateNode,t,2),e=di(e,t,2),e!==null&&(Li(e,2),cl(e))}function Qe(e,t,n){if(e.tag===3)mp(e,e,n);else for(;t!==null;){if(t.tag===3){mp(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(bi===null||!bi.has(l))){e=Ln(n,e),n=pm(2),l=di(t,n,2),l!==null&&(hm(n,l,t,e),Li(l,2),cl(l));break}}t=t.return}}function $u(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new lg;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(Uu=!0,r.add(n),e=og.bind(null,e,t,n),t.then(e,e))}function og(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tt===e&&(Ie&n)===n&&(ht===4||ht===3&&(Ie&62914560)===Ie&&300>vt()-So?(Xe&2)===0&&Yr(e,0):Iu|=n,Gr===Ie&&(Gr=0)),cl(e)}function pp(e,t){t===0&&(t=Bi()),e=Xi(e,t),e!==null&&(Li(e,t),cl(e))}function cg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pp(e,n)}function ug(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(t),pp(e,n)}function fg(e,t){return $n(e,t)}var jo=null,qr=null,qu=!1,Mo=!1,Xu=!1,xi=0;function cl(e){e!==qr&&e.next===null&&(qr===null?jo=qr=e:qr=qr.next=e),Mo=!0,qu||(qu=!0,mg())}function Ka(e,t){if(!Xu&&Mo){Xu=!0;do for(var n=!1,l=jo;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var o=0;else{var m=l.suspendedLanes,v=l.pingedLanes;o=(1<<31-Lt(42|e)+1)-1,o&=r&~(m&~v),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,bp(l,o))}else o=Ie,o=rt(l,l===tt?o:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(o&3)===0||Ot(l,o)||(n=!0,bp(l,o));l=l.next}while(n);Xu=!1}}function dg(){hp()}function hp(){Mo=qu=!1;var e=0;xi!==0&&kg()&&(e=xi);for(var t=vt(),n=null,l=jo;l!==null;){var r=l.next,o=_p(l,t);o===0?(l.next=null,n===null?jo=r:n.next=r,r===null&&(qr=n)):(n=l,(e!==0||(o&3)!==0)&&(Mo=!0)),l=r}Dt!==0&&Dt!==5||Ka(e),xi!==0&&(xi=0)}function _p(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-Lt(o),v=1<<m,w=r[m];w===-1?((v&n)===0||(v&l)!==0)&&(r[m]=fc(v,t)):w<=t&&(e.expiredLanes|=v),o&=~v}if(t=tt,n=Ie,n=rt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Mn(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ot(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Mn(l),Dn(n)){case 2:case 8:n=sa;break;case 32:n=Oi;break;case 268435456:n=mn;break;default:n=Oi}return l=gp.bind(null,e),n=$n(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Mn(l),e.callbackPriority=2,e.callbackNode=null,2}function gp(e,t){if(Dt!==0&&Dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ro()&&e.callbackNode!==n)return null;var l=Ie;return l=rt(e,e===tt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zm(e,l,t),_p(e,vt()),e.callbackNode!=null&&e.callbackNode===n?gp.bind(null,e):null)}function bp(e,t){if(Ro())return null;Zm(e,t,!0)}function mg(){Eg(function(){(Xe&6)!==0?$n(Vl,dg):hp()})}function Ku(){if(xi===0){var e=Ar;e===0&&(e=hn,hn<<=1,(hn&261888)===0&&(hn=256)),xi=e}return xi}function yp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pi(""+e)}function vp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pg(e,t,n,l,r){if(t==="submit"&&n&&n.stateNode===r){var o=yp((r[Ct]||null).action),m=l.submitter;m&&(t=(t=m[Ct]||null)?yp(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var v=new br("action","action",null,l,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xi!==0){var w=m?vp(r,m):new FormData(r);hu(n,{pending:!0,data:w,method:r.method,action:o},null,w)}}else typeof o=="function"&&(v.preventDefault(),w=m?vp(r,m):new FormData(r),hu(n,{pending:!0,data:w,method:r.method,action:o},o,w))},currentTarget:r}]})}}for(var Qu=0;Qu<rl.length;Qu++){var Wu=rl[Qu],hg=Wu.toLowerCase(),_g=Wu[0].toUpperCase()+Wu.slice(1);sn(hg,"on"+_g)}sn(ft,"onAnimationEnd"),sn(Qt,"onAnimationIteration"),sn(je,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(at,"onTransitionRun"),sn(kl,"onTransitionStart"),sn(Jn,"onTransitionCancel"),sn(Cn,"onTransitionEnd"),yn("onMouseEnter",["mouseout","mouseover"]),yn("onMouseLeave",["mouseout","mouseover"]),yn("onPointerEnter",["pointerout","pointerover"]),yn("onPointerLeave",["pointerout","pointerover"]),tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qa));function xp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var o=void 0;if(t)for(var m=l.length-1;0<=m;m--){var v=l[m],w=v.instance,B=v.currentTarget;if(v=v.listener,w!==o&&r.isPropagationStopped())break e;o=v,r.currentTarget=B;try{o(r)}catch($){El($)}r.currentTarget=null,o=w}else for(m=0;m<l.length;m++){if(v=l[m],w=v.instance,B=v.currentTarget,v=v.listener,w!==o&&r.isPropagationStopped())break e;o=v,r.currentTarget=B;try{o(r)}catch($){El($)}r.currentTarget=null,o=w}}}}function Ue(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var l=e+"__bubble";n.has(l)||(Sp(t,e,2,!1),n.add(l))}function Zu(e,t,n){var l=0;t&&(l|=4),Sp(n,e,l,t)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Ju(e){if(!e[Do]){e[Do]=!0,Kn.forEach(function(n){n!=="selectionchange"&&(gg.has(n)||Zu(n,!1,e),Zu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Do]||(t[Do]=!0,Zu("selectionchange",!1,t))}}function Sp(e,t,n,l){switch(Wp(t)){case 2:var r=Yg;break;case 8:r=$g;break;default:r=hf}n=r.bind(null,t,n,e),r=void 0,!pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function ef(e,t,n,l,r){var o=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var v=l.stateNode.containerInfo;if(v===r)break;if(m===4)for(m=l.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;v!==null;){if(m=Xt(v),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){l=o=m;continue e}v=v.parentNode}}l=l.return}Ts(function(){var B=o,$=ct(n),Q=[];e:{var z=wl.get(e);if(z!==void 0){var P=br,fe=e;switch(e){case"keypress":if(Gi(n)===0)break e;case"keydown":case"keyup":P=xc;break;case"focusin":fe="focus",P=an;break;case"focusout":fe="blur",P=an;break;case"beforeblur":case"afterblur":P=an;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=vr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=_c;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Sc;break;case ft:case Qt:case je:P=ha;break;case Cn:P=As;break;case"scroll":case"scrollend":P=pc;break;case"wheel":P=wc;break;case"copy":case"cut":case"paste":P=Ns;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=ba;break;case"toggle":case"beforetoggle":P=Tc}var ke=(t&4)!==0,et=!ke&&(e==="scroll"||e==="scrollend"),M=ke?z!==null?z+"Capture":null:z;ke=[];for(var N=B,C;N!==null;){var X=N;if(C=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||C===null||M===null||(X=Fi(N,M),X!=null&&ke.push(Wa(N,X,C))),et)break;N=N.return}0<ke.length&&(z=new P(z,fe,null,n,$),Q.push({event:z,listeners:ke}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",z&&n!==Zl&&(fe=n.relatedTarget||n.fromElement)&&(Xt(fe)||fe[qn]))break e;if((P||z)&&(z=$.window===$?$:(z=$.ownerDocument)?z.defaultView||z.parentWindow:window,P?(fe=n.relatedTarget||n.toElement,P=B,fe=fe?Xt(fe):null,fe!==null&&(et=h(fe),ke=fe.tag,fe!==et||ke!==5&&ke!==27&&ke!==6)&&(fe=null)):(P=null,fe=B),P!==fe)){if(ke=vr,X="onMouseLeave",M="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ke=ba,X="onPointerLeave",M="onPointerEnter",N="pointer"),et=P==null?z:Xn(P),C=fe==null?z:Xn(fe),z=new ke(X,N+"leave",P,n,$),z.target=et,z.relatedTarget=C,X=null,Xt($)===B&&(ke=new ke(M,N+"enter",fe,n,$),ke.target=C,ke.relatedTarget=et,X=ke),et=X,P&&fe)t:{for(ke=bg,M=P,N=fe,C=0,X=M;X;X=ke(X))C++;X=0;for(var Se=N;Se;Se=ke(Se))X++;for(;0<C-X;)M=ke(M),C--;for(;0<X-C;)N=ke(N),X--;for(;C--;){if(M===N||N!==null&&M===N.alternate){ke=M;break t}M=ke(M),N=ke(N)}ke=null}else ke=null;P!==null&&kp(Q,z,P,ke,!1),fe!==null&&et!==null&&kp(Q,et,fe,ke,!0)}}e:{if(z=B?Xn(B):window,P=z.nodeName&&z.nodeName.toLowerCase(),P==="select"||P==="input"&&z.type==="file")var Ye=Hs;else if(xa(z))if(Ps)Ye=wa;else{Ye=Dc;var ge=Gs}else P=z.nodeName,!P||P.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?B&&da(B.elementType)&&(Ye=Hs):Ye=Ac;if(Ye&&(Ye=Ye(e,B))){Is(Q,Ye,n,$);break e}ge&&ge(e,z,B),e==="focusout"&&B&&z.type==="number"&&B.memoizedProps.value!=null&&Ii(z,"number",z.value)}switch(ge=B?Xn(B):window,e){case"focusin":(xa(ge)||ge.contentEditable==="true")&&(d=ge,_=B,x=null);break;case"focusout":x=_=d=null;break;case"mousedown":R=!0;break;case"contextmenu":case"mouseup":case"dragend":R=!1,j(Q,n,$);break;case"selectionchange":if(Oc)break;case"keydown":case"keyup":j(Q,n,$)}var Me;if(va)e:{switch(e){case"compositionstart":var He="onCompositionStart";break e;case"compositionend":He="onCompositionEnd";break e;case"compositionupdate":He="onCompositionUpdate";break e}He=void 0}else li?Ls(e,n)&&(He="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(He="onCompositionStart");He&&(Os&&n.locale!=="ko"&&(li||He!=="onCompositionStart"?He==="onCompositionEnd"&&li&&(Me=It()):(Ut=$,yl="value"in Ut?Ut.value:Ut.textContent,li=!0)),ge=Ao(B,He),0<ge.length&&(He=new _a(He,e,null,n,$),Q.push({event:He,listeners:ge}),Me?He.data=Me:(Me=xl(n),Me!==null&&(He.data=Me)))),(Me=Rc?zs(e,n):Us(e,n))&&(He=Ao(B,"onBeforeInput"),0<He.length&&(ge=new _a("onBeforeInput","beforeinput",null,n,$),Q.push({event:ge,listeners:He}),ge.data=Me)),pg(Q,e,B,n,$)}xp(Q,t)})}function Wa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ao(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Fi(e,n),r!=null&&l.unshift(Wa(e,r,o)),r=Fi(e,t),r!=null&&l.push(Wa(e,r,o))),e.tag===3)return l;e=e.return}return[]}function bg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kp(e,t,n,l,r){for(var o=t._reactName,m=[];n!==null&&n!==l;){var v=n,w=v.alternate,B=v.stateNode;if(v=v.tag,w!==null&&w===l)break;v!==5&&v!==26&&v!==27||B===null||(w=B,r?(B=Fi(n,o),B!=null&&m.unshift(Wa(n,B,w))):r||(B=Fi(n,o),B!=null&&m.push(Wa(n,B,w)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var yg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function wp(e){return(typeof e=="string"?e:""+e).replace(yg,`
`).replace(vg,"")}function Ep(e,t){return t=wp(t),wp(e)===t}function Je(e,t,n,l,r,o){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||gl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&gl(e,""+l);break;case"className":Qn(e,"class",l);break;case"tabIndex":Qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,n,l);break;case"style":Es(e,l,o);break;case"data":if(t!=="object"){Qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Pi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Je(e,t,"name",r.name,r,null),Je(e,t,"formEncType",r.formEncType,r,null),Je(e,t,"formMethod",r.formMethod,r,null),Je(e,t,"formTarget",r.formTarget,r,null)):(Je(e,t,"encType",r.encType,r,null),Je(e,t,"method",r.method,r,null),Je(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Pi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=An);break;case"onScroll":l!=null&&Ue("scroll",e);break;case"onScrollEnd":l!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Pi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),_l(e,"popover",l);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_l(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=mc.get(n)||n,_l(e,n,l))}}function tf(e,t,n,l,r,o){switch(n){case"style":Es(e,l,o);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(a(60));e.innerHTML=n}}break;case"children":typeof l=="string"?gl(e,l):(typeof l=="number"||typeof l=="bigint")&&gl(e,""+l);break;case"onScroll":l!=null&&Ue("scroll",e);break;case"onScrollEnd":l!=null&&Ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kl.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),o=e[Ct]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof l=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):_l(e,n,l)}}}function Vt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var l=!1,r=!1,o;for(o in n)if(n.hasOwnProperty(o)){var m=n[o];if(m!=null)switch(o){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Je(e,t,o,m,n,null)}}r&&Je(e,t,"srcSet",n.srcSet,n,null),l&&Je(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var v=o=m=r=null,w=null,B=null;for(l in n)if(n.hasOwnProperty(l)){var $=n[l];if($!=null)switch(l){case"name":r=$;break;case"type":m=$;break;case"checked":w=$;break;case"defaultChecked":B=$;break;case"value":o=$;break;case"defaultValue":v=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(a(137,t));break;default:Je(e,t,l,$,n,null)}}vn(e,o,v,w,B,m,r,!1);return;case"select":Ue("invalid",e),l=m=o=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":o=v;break;case"defaultValue":m=v;break;case"multiple":l=v;default:Je(e,t,r,v,n,null)}t=o,n=m,e.multiple=!!l,t!=null?jt(e,!!l,t,!1):n!=null&&jt(e,!!l,n,!0);return;case"textarea":Ue("invalid",e),o=r=l=null;for(m in n)if(n.hasOwnProperty(m)&&(v=n[m],v!=null))switch(m){case"value":l=v;break;case"defaultValue":r=v;break;case"children":o=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(a(91));break;default:Je(e,t,m,v,n,null)}ws(e,l,r,o);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(l=n[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(e,t,w,l,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(l=0;l<Qa.length;l++)Ue(Qa[l],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(l=n[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Je(e,t,B,l,n,null)}return;default:if(da(t)){for($ in n)n.hasOwnProperty($)&&(l=n[$],l!==void 0&&tf(e,t,$,l,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(l=n[v],l!=null&&Je(e,t,v,l,n,null))}function xg(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,m=null,v=null,w=null,B=null,$=null;for(P in n){var Q=n[P];if(n.hasOwnProperty(P)&&Q!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":w=Q;default:l.hasOwnProperty(P)||Je(e,t,P,null,l,Q)}}for(var z in l){var P=l[z];if(Q=n[z],l.hasOwnProperty(z)&&(P!=null||Q!=null))switch(z){case"type":o=P;break;case"name":r=P;break;case"checked":B=P;break;case"defaultChecked":$=P;break;case"value":m=P;break;case"defaultValue":v=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,t));break;default:P!==Q&&Je(e,t,z,P,l,Q)}}Ui(e,m,v,w,B,$,o,r);return;case"select":P=m=v=z=null;for(o in n)if(w=n[o],n.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":P=w;default:l.hasOwnProperty(o)||Je(e,t,o,null,l,w)}for(r in l)if(o=l[r],w=n[r],l.hasOwnProperty(r)&&(o!=null||w!=null))switch(r){case"value":z=o;break;case"defaultValue":v=o;break;case"multiple":m=o;default:o!==w&&Je(e,t,r,o,l,w)}t=v,n=m,l=P,z!=null?jt(e,!!n,z,!1):!!l!=!!n&&(t!=null?jt(e,!!n,t,!0):jt(e,!!n,n?[]:"",!1));return;case"textarea":P=z=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Je(e,t,v,null,l,r)}for(m in l)if(r=l[m],o=n[m],l.hasOwnProperty(m)&&(r!=null||o!=null))switch(m){case"value":z=r;break;case"defaultValue":P=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(a(91));break;default:r!==o&&Je(e,t,m,r,l,o)}ks(e,z,P);return;case"option":for(var fe in n)if(z=n[fe],n.hasOwnProperty(fe)&&z!=null&&!l.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Je(e,t,fe,null,l,z)}for(w in l)if(z=l[w],P=n[w],l.hasOwnProperty(w)&&z!==P&&(z!=null||P!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Je(e,t,w,z,l,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ke in n)z=n[ke],n.hasOwnProperty(ke)&&z!=null&&!l.hasOwnProperty(ke)&&Je(e,t,ke,null,l,z);for(B in l)if(z=l[B],P=n[B],l.hasOwnProperty(B)&&z!==P&&(z!=null||P!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,t));break;default:Je(e,t,B,z,l,P)}return;default:if(da(t)){for(var et in n)z=n[et],n.hasOwnProperty(et)&&z!==void 0&&!l.hasOwnProperty(et)&&tf(e,t,et,void 0,l,z);for($ in l)z=l[$],P=n[$],!l.hasOwnProperty($)||z===P||z===void 0&&P===void 0||tf(e,t,$,z,l,P);return}}for(var M in n)z=n[M],n.hasOwnProperty(M)&&z!=null&&!l.hasOwnProperty(M)&&Je(e,t,M,null,l,z);for(Q in l)z=l[Q],P=n[Q],!l.hasOwnProperty(Q)||z===P||z==null&&P==null||Je(e,t,Q,z,l,P)}function Tp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],o=r.transferSize,m=r.initiatorType,v=r.duration;if(o&&v&&Tp(m)){for(m=0,v=r.responseEnd,l+=1;l<n.length;l++){var w=n[l],B=w.startTime;if(B>v)break;var $=w.transferSize,Q=w.initiatorType;$&&Tp(Q)&&(w=w.responseEnd,m+=$*(w<v?1:(v-B)/(w-B)))}if(--l,t+=8*(o+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nf=null,lf=null;function Oo(e){return e.nodeType===9?e:e.ownerDocument}function Np(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var af=null;function kg(){var e=window.event;return e&&e.type==="popstate"?e===af?!1:(af=e,!0):(af=null,!1)}var jp=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(e){return Mp.resolve(null).then(e).catch(Tg)}:jp;function Tg(e){setTimeout(function(){throw e})}function Si(e){return e==="head"}function Dp(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),Wr(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Za(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Za(n);for(var o=n.firstChild;o;){var m=o.nextSibling,v=o.nodeName;o[gn]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=m}}else n==="body"&&Za(e.ownerDocument.body);n=r}while(n);Wr(t)}function Ap(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function sf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sf(n),hl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ng(e,t,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[gn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Pn(e.nextSibling),e===null)break}return null}function Rg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pn(e.nextSibling),e===null))return null;return e}function Op(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pn(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$?"||e.data==="$~"}function cf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var uf=null;function Cp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Pn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Lp(e,t,n){switch(t=Oo(n),e){case"html":if(e=t.documentElement,!e)throw Error(a(452));return e;case"head":if(e=t.head,!e)throw Error(a(453));return e;case"body":if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Za(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hl(e)}var Fn=new Map,zp=new Set;function Co(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hl=ne.d;ne.d={f:Mg,r:Dg,D:Ag,C:Og,L:Cg,m:Bg,X:zg,S:Lg,M:Ug};function Mg(){var e=Hl.f(),t=Eo();return e||t}function Dg(e){var t=bn(e);t!==null&&t.tag===5&&t.type==="form"?em(t):Hl.r(e)}var Xr=typeof document>"u"?null:document;function Up(e,t,n){var l=Xr;if(l&&typeof t=="string"&&t){var r=Rt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),zp.has(r)||(zp.add(r),e={rel:e,crossOrigin:n,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),Vt(t,"link",e),mt(t),l.head.appendChild(t)))}}function Ag(e){Hl.D(e),Up("dns-prefetch",e,null)}function Og(e,t){Hl.C(e,t),Up("preconnect",e,t)}function Cg(e,t,n){Hl.L(e,t,n);var l=Xr;if(l&&e&&t){var r='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Rt(n.imageSizes)+'"]')):r+='[href="'+Rt(e)+'"]';var o=r;switch(t){case"style":o=Kr(e);break;case"script":o=Qr(e)}Fn.has(o)||(e=k({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Fn.set(o,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(Ja(o))||t==="script"&&l.querySelector(es(o))||(t=l.createElement("link"),Vt(t,"link",e),mt(t),l.head.appendChild(t)))}}function Bg(e,t){Hl.m(e,t);var n=Xr;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Rt(l)+'"][href="'+Rt(e)+'"]',o=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Qr(e)}if(!Fn.has(o)&&(e=k({rel:"modulepreload",href:e},t),Fn.set(o,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(es(o)))return}l=n.createElement("link"),Vt(l,"link",e),mt(l),n.head.appendChild(l)}}}function Lg(e,t,n){Hl.S(e,t,n);var l=Xr;if(l&&e){var r=rn(l).hoistableStyles,o=Kr(e);t=t||"default";var m=r.get(o);if(!m){var v={loading:0,preload:null};if(m=l.querySelector(Ja(o)))v.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fn.get(o))&&ff(e,n);var w=m=l.createElement("link");mt(w),Vt(w,"link",e),w._p=new Promise(function(B,$){w.onload=B,w.onerror=$}),w.addEventListener("load",function(){v.loading|=1}),w.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Bo(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:v},r.set(o,m)}}}function zg(e,t){Hl.X(e,t);var n=Xr;if(n&&e){var l=rn(n).hoistableScripts,r=Qr(e),o=l.get(r);o||(o=n.querySelector(es(r)),o||(e=k({src:e,async:!0},t),(t=Fn.get(r))&&df(e,t),o=n.createElement("script"),mt(o),Vt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(r,o))}}function Ug(e,t){Hl.M(e,t);var n=Xr;if(n&&e){var l=rn(n).hoistableScripts,r=Qr(e),o=l.get(r);o||(o=n.querySelector(es(r)),o||(e=k({src:e,async:!0,type:"module"},t),(t=Fn.get(r))&&df(e,t),o=n.createElement("script"),mt(o),Vt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(r,o))}}function Ip(e,t,n,l){var r=(r=H.current)?Co(r):null;if(!r)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Kr(n.href),n=rn(r).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Kr(n.href);var o=rn(r).hoistableStyles,m=o.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=r.querySelector(Ja(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Fn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fn.set(e,n),o||Ig(r,e,n,m.state))),t&&l===null)throw Error(a(528,""));return m}if(t&&l!==null)throw Error(a(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qr(n),n=rn(r).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Kr(e){return'href="'+Rt(e)+'"'}function Ja(e){return'link[rel="stylesheet"]['+e+"]"}function Hp(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Ig(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Vt(t,"link",n),mt(t),e.head.appendChild(t))}function Qr(e){return'[src="'+Rt(e)+'"]'}function es(e){return"script[async]"+e}function Pp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Rt(n.href)+'"]');if(l)return t.instance=l,mt(l),l;var r=k({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),mt(l),Vt(l,"style",r),Bo(l,n.precedence,e),t.instance=l;case"stylesheet":r=Kr(n.href);var o=e.querySelector(Ja(r));if(o)return t.state.loading|=4,t.instance=o,mt(o),o;l=Hp(n),(r=Fn.get(r))&&ff(l,r),o=(e.ownerDocument||e).createElement("link"),mt(o);var m=o;return m._p=new Promise(function(v,w){m.onload=v,m.onerror=w}),Vt(o,"link",l),t.state.loading|=4,Bo(o,n.precedence,e),t.instance=o;case"script":return o=Qr(n.src),(r=e.querySelector(es(o)))?(t.instance=r,mt(r),r):(l=n,(r=Fn.get(o))&&(l=k({},n),df(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),mt(r),Vt(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(a(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Bo(l,n.precedence,e));return t.instance}function Bo(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,o=r,m=0;m<l.length;m++){var v=l[m];if(v.dataset.precedence===t)o=v;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ff(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function df(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lo=null;function Fp(e,t,n){if(Lo===null){var l=new Map,r=Lo=new Map;r.set(n,l)}else r=Lo,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var o=n[r];if(!(o[gn]||o[_t]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var v=l.get(m);v?v.push(o):l.set(m,[o])}}return l}function Gp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Pg(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Kr(l.href),o=t.querySelector(Ja(r));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,mt(o);return}o=t.ownerDocument||t,l=Hp(l),(r=Fn.get(r))&&ff(l,r),o=o.createElement("link"),mt(o);var m=o;m._p=new Promise(function(v,w){m.onload=v,m.onerror=w}),Vt(o,"link",l),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=zo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var mf=0;function Fg(e,t){return e.stylesheets&&e.count===0&&Io(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Io(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&mf===0&&(mf=62500*Sg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Io(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>mf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function zo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Io(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uo=null;function Io(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uo=new Map,t.forEach(Gg,e),Uo=null,zo.call(e))}function Gg(e,t){if(!(t.state.loading&4)){var n=Uo.get(e);if(n)var l=n.get(null);else{n=new Map,Uo.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var m=r[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),l=m)}l&&n.set(null,l)}r=t.instance,m=r.getAttribute("data-precedence"),o=n.get(m)||l,o===l&&n.set(null,r),n.set(m,r),this.count++,l=zo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ts={$$typeof:q,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Vg(e,t,n,l,r,o,m,v,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ll(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.hiddenUpdates=ll(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Yp(e,t,n,l,r,o,m,v,w,B,$,Q){return e=new Vg(e,t,n,m,w,B,$,Q,v),t=1,o===!0&&(t|=24),o=Sn(3,null,null,t),e.current=o,o.stateNode=e,t=Yc(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:l,isDehydrated:n,cache:t},Kc(o),e}function $p(e){return e?(e=Nr,e):Nr}function qp(e,t,n,l,r,o){r=$p(r),l.context===null?l.context=r:l.pendingContext=r,l=fi(t),l.payload={element:n},o=o===void 0?null:o,o!==null&&(l.callback=o),n=di(e,l,t),n!==null&&(dn(n,e,t),Oa(n,e,t))}function Xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pf(e,t){Xp(e,t),(e=e.alternate)&&Xp(e,t)}function Kp(e){if(e.tag===13||e.tag===31){var t=Xi(e,67108864);t!==null&&dn(t,e,67108864),pf(e,67108864)}}function Qp(e){if(e.tag===13||e.tag===31){var t=Nn();t=$l(t);var n=Xi(e,t);n!==null&&dn(n,e,t),pf(e,t)}}var Ho=!0;function Yg(e,t,n,l){var r=I.T;I.T=null;var o=ne.p;try{ne.p=2,hf(e,t,n,l)}finally{ne.p=o,I.T=r}}function $g(e,t,n,l){var r=I.T;I.T=null;var o=ne.p;try{ne.p=8,hf(e,t,n,l)}finally{ne.p=o,I.T=r}}function hf(e,t,n,l){if(Ho){var r=_f(l);if(r===null)ef(e,t,l,Po,n),Zp(e,l);else if(Xg(r,e,t,n,l))l.stopPropagation();else if(Zp(e,l),t&4&&-1<qg.indexOf(e)){for(;r!==null;){var o=bn(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=it(o.pendingLanes);if(m!==0){var v=o;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var w=1<<31-Lt(m);v.entanglements[1]|=w,m&=~w}cl(o),(Xe&6)===0&&(ko=vt()+500,Ka(0))}}break;case 31:case 13:v=Xi(o,2),v!==null&&dn(v,o,2),Eo(),pf(o,2)}if(o=_f(l),o===null&&ef(e,t,l,Po,n),o===r)break;r=o}r!==null&&l.stopPropagation()}else ef(e,t,l,null,n)}}function _f(e){return e=ct(e),gf(e)}var Po=null;function gf(e){if(Po=null,e=Xt(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Po=e,null}function Wp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ai()){case Vl:return 2;case sa:return 8;case Oi:case en:return 32;case mn:return 268435456;default:return 32}default:return 32}}var bf=!1,ki=null,wi=null,Ei=null,ns=new Map,ls=new Map,Ti=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zp(e,t){switch(e){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":wi=null;break;case"mouseover":case"mouseout":Ei=null;break;case"pointerover":case"pointerout":ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(t.pointerId)}}function is(e,t,n,l,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:o,targetContainers:[r]},t!==null&&(t=bn(t),t!==null&&Kp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Xg(e,t,n,l,r){switch(t){case"focusin":return ki=is(ki,e,t,n,l,r),!0;case"dragenter":return wi=is(wi,e,t,n,l,r),!0;case"mouseover":return Ei=is(Ei,e,t,n,l,r),!0;case"pointerover":var o=r.pointerId;return ns.set(o,is(ns.get(o)||null,e,t,n,l,r)),!0;case"gotpointercapture":return o=r.pointerId,ls.set(o,is(ls.get(o)||null,e,t,n,l,r)),!0}return!1}function Jp(e){var t=Xt(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,oa(e.priority,function(){Qp(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,oa(e.priority,function(){Qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_f(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Zl=l,n.target.dispatchEvent(l),Zl=null}else return t=bn(n),t!==null&&Kp(t),e.blockedOn=n,!1;t.shift()}return!0}function eh(e,t,n){Fo(e)&&n.delete(t)}function Kg(){bf=!1,ki!==null&&Fo(ki)&&(ki=null),wi!==null&&Fo(wi)&&(wi=null),Ei!==null&&Fo(Ei)&&(Ei=null),ns.forEach(eh),ls.forEach(eh)}function Go(e,t){e.blockedOn===t&&(e.blockedOn=null,bf||(bf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Kg)))}var Vo=null;function th(e){Vo!==e&&(Vo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Vo===e&&(Vo=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(gf(l||n)===null)continue;break}var o=bn(n);o!==null&&(e.splice(t,3),t-=3,hu(o,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function Wr(e){function t(w){return Go(w,e)}ki!==null&&Go(ki,e),wi!==null&&Go(wi,e),Ei!==null&&Go(Ei,e),ns.forEach(t),ls.forEach(t);for(var n=0;n<Ti.length;n++){var l=Ti[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)Jp(n),n.blockedOn===null&&Ti.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],o=n[l+1],m=r[Ct]||null;if(typeof o=="function")m||th(n);else if(m){var v=null;if(o&&o.hasAttribute("formAction")){if(r=o,m=o[Ct]||null)v=m.formAction;else if(gf(r)!==null)continue}else v=m.action;typeof v=="function"?n[l+1]=v:(n.splice(l,3),l-=3),th(n)}}}function nh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function yf(e){this._internalRoot=e}Yo.prototype.render=yf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current,l=Nn();qp(n,l,e,t,null,null)},Yo.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qp(e.current,2,null,e,null,null),Eo(),t[qn]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ti.length&&t!==0&&t<Ti[n].priority;n++);Ti.splice(n,0,e),n===0&&Jp(e)}};var lh=i.version;if(lh!=="19.2.7")throw Error(a(527,lh,"19.2.7"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Qg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Ci=$o.inject(Qg),Nt=$o}catch{}}return as.createRoot=function(e,t){if(!f(e))throw Error(a(299));var n=!1,l="",r=um,o=fm,m=dm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Yp(e,1,!1,null,null,n,l,null,r,o,m,nh),e[qn]=t.current,Ju(e),new yf(t)},as.hydrateRoot=function(e,t,n){if(!f(e))throw Error(a(299));var l=!1,r="",o=um,m=fm,v=dm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Yp(e,1,!0,t,n??null,l,r,w,o,m,v,nh),t.context=$p(null),n=t.current,l=Nn(),l=$l(l),r=fi(l),r.callback=null,di(n,r,l),n=l,t.current.lanes=n,Li(t,n),cl(t),e[qn]=t.current,Ju(e),new Yo(t)},as.version="19.2.7",as}var mh;function ob(){if(mh)return Sf.exports;mh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Sf.exports=sb(),Sf.exports}var cb=ob();const ub=s_(cb),ph=s=>{let i;const c=new Set,a=(y,S)=>{const k=typeof y=="function"?y(i):y;if(!Object.is(k,i)){const T=i;i=S??(typeof k!="object"||k===null)?k:Object.assign({},i,k),c.forEach(D=>D(i,T))}},f=()=>i,p={setState:a,getState:f,getInitialState:()=>g,subscribe:y=>(c.add(y),()=>c.delete(y))},g=i=s(a,f,p);return p},fb=(s=>s?ph(s):ph),db=s=>s;function mb(s,i=db){const c=ms.useSyncExternalStore(s.subscribe,ms.useCallback(()=>i(s.getState()),[s,i]),ms.useCallback(()=>i(s.getInitialState()),[s,i]));return ms.useDebugValue(c),c}const hh=s=>{const i=fb(s),c=a=>mb(i,a);return Object.assign(c,i),c},pb=(s=>s?hh(s):hh);function hb(){const s=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(s);else for(let c=0;c<s.length;c+=1)s[c]=Math.floor(Math.random()*256);let i="";for(const c of s)i+=c.toString(16).padStart(2,"0");return i}const Wf="pkp.user",Zf="pkp.savedDevices",Jf="pkp.ideDrafts",ed="pkp.ideSettings",gs="Prototype Version 0.6.7";function ac(s){try{const i=localStorage.getItem(s);return i?JSON.parse(i):null}catch{return null}}function sc(s,i){try{localStorage.setItem(s,JSON.stringify(i))}catch{}}function _b(){const s=ac(Wf);return s&&typeof s.username=="string"&&typeof s.userID=="string"?s:null}function Tf(s){sc(Wf,s)}function tc(){return ac(Zf)??[]}function ta(s){sc(Zf,s)}function gb(){ta([])}function bb(){try{localStorage.removeItem(Wf),localStorage.removeItem(Zf),localStorage.removeItem(Jf),localStorage.removeItem(ed)}catch{}}function qo(){var s;return((s=ac(Jf))==null?void 0:s.filter(i=>i.path&&typeof i.content=="string"))??[]}function ss(s){sc(Jf,s)}function _h(){const s=ac(ed)??{};return{clearTerminalOnRun:!!s.clearTerminalOnRun,simplifiedErrors:s.simplifiedErrors!==!1}}function yb(s){sc(ed,s)}function Nf(s){const i=tc(),c=i.findIndex(a=>a.deviceID===s.deviceID);return c>=0?i[c]=s:i.push(s),ta(i),i}function vb(s){const i=tc().filter(c=>c.deviceID!==s);return ta(i),i}const Pf="b8e06067-62ad-41ba-9231-206ae80ab551",xb="f897177b-aee8-4767-8ecc-cc694fd5fce0",Sb="f897177b-aee8-4767-8ecc-cc694fd5fce1",Rf=20,kb=12,wb=new TextEncoder;function Eb(s){return new Promise(i=>setTimeout(i,s))}function oc(){return typeof navigator<"u"&&"bluetooth"in navigator}function o_(s){return s?s.startsWith("PicoW-")?s.slice(6):s:"Pico"}async function Tb(){if(!oc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Pf]},{namePrefix:"PicoW-"}],optionalServices:[Pf]})}async function c_(){if(!oc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Nb{constructor(){de(this,"device",null);de(this,"writeChar",null);de(this,"notifyChar",null);de(this,"buffer","");de(this,"decoder",new TextDecoder);de(this,"writeQueue",Promise.resolve());de(this,"disconnectNotified",!1);de(this,"onLine",()=>{});de(this,"onDisconnect",()=>{});de(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=this.decoder.decode(c.value.buffer,{stream:!0});let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});de(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var f;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=i.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Pf);this.writeChar=await a.getCharacteristic(xb),this.notifyChar=await a.getCharacteristic(Sb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=wb.encode(`${i}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<c.length;h+=Rf){const b=c.slice(h,h+Rf);await f(b),h+Rf<c.length&&await Eb(kb)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class Rb{constructor(i,c){de(this,"send");de(this,"onMessage");de(this,"inActive",!1);de(this,"inExpectedTotal",0);de(this,"inStreamId",0);de(this,"inParts",new Map);de(this,"inProgress",null);de(this,"outPendingLines",null);de(this,"outWaitingAck",!1);de(this,"outStreamId",0);de(this,"outNextStreamId",1);de(this,"outCache",new Map);de(this,"outProgress",null);de(this,"outResolve",null);de(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const f=i.split(","),h=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,b=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=b,this.inParts.clear(),this.send(b>0?`ack:prep,${b}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const f=i.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const h=parseInt(f[1],10),b=parseInt(f[2],10),p=this.outCache.get(b);h===this.outStreamId&&p&&this.send(p)}return}const c=this.parseNumbered(i);if(c){const{idx:f,payload:h}=c;if(!this.inActive){this.onMessage(h);return}this.inParts.has(f)||(this.inParts.set(f,h),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let b=0;for(let p=1;p<=this.inExpectedTotal;p+=1)if(!this.inParts.has(p)){b=p;break}if(b>0&&this.inStreamId>0&&f>b&&this.send(`miss,${this.inStreamId},${b}`),this.inParts.size>=this.inExpectedTotal){for(let p=1;p<=this.inExpectedTotal;p+=1){const g=this.inParts.get(p);g!==void 0&&this.onMessage(g)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((h,b)=>{this.outResolve=h,this.outReject=b});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await f}async flushOutbound(){var i,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let b=0;b<h;b+=1){const p=this.outPendingLines[b],g=`${b+1}-${p}`;this.outCache.set(b+1,g),await this.send(g),(c=this.outProgress)==null||c.call(this,b+1,h,p)}(a=this.outResolve)==null||a.call(this)}catch(h){(f=this.outReject)==null||f.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:i.slice(c+1)}}}const ia=11,bs=31,jb=2,Mb=60,na=4,la=40;function Db(s,i){return Math.max(14,Math.min(56,Math.min(s,i)*.05))}function u_(s,i,c=ia,a=bs){const f=Db(s,i),h=Math.max(1,s-2*f),b=Math.max(1,i-2*f);return{areaW:s,areaH:i,cols:c,rows:a,margin:f,stepX:h/Math.max(1,c-1),stepY:b/Math.max(1,a-1)}}function f_(s,i){return i.margin+s/2*i.stepX}function d_(s,i){const c=i.margin+s/2*i.stepY;return i.areaH-c}function ps(s,i){return s.centerX2===null||s.centerY2===null||s.spanX===null||s.spanY===null?null:{cx:f_(s.centerX2,i),cy:d_(s.centerY2,i),width:s.spanX*i.stepX,height:s.spanY*i.stepY}}function Ab(s){const i=[];for(let c=0;c<s.cols;c+=1)for(let a=0;a<s.rows;a+=1)i.push({x:s.margin+c*s.stepX,y:s.areaH-(s.margin+a*s.stepY)});return i}function jf(s,i,c,a,f){const h=(g,y,S,k)=>{const T=y%2,D=k*2;let O=T,V=1/0;for(let G=T;G<=D;G+=2){const F=Math.abs(S(G)-g);F<V&&(V=F,O=G)}return Math.max(y,Math.min(D-y,O))},b=h(s,c,g=>f_(g,f),f.cols-1),p=h(i,a,g=>d_(g,f),f.rows-1);return{centerX2:b,centerY2:p}}const or=6e3,Ob=15,Cb="",nc=[32,64,128,192],Bb=or*10,Lb=3500,zb=8e3,Ub=2,Ib=or,Hb=or*8;function Mf(s){return new Promise(i=>setTimeout(i,s))}function Zr(s){if(s!=null&&s.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function gh(s){return s instanceof DOMException&&s.name==="AbortError"}function Ri(s){return s.replace(/[\r\n,]/g," ").trim()}class Pb{constructor(i={}){de(this,"transport",new Nb);de(this,"stream");de(this,"events");de(this,"waiters",[]);de(this,"collectingLayout",!1);de(this,"layoutBuffer",[]);de(this,"layoutResolve",null);de(this,"collectingLines",!1);de(this,"lineBuffer",[]);de(this,"lineResolve",null);de(this,"lineReject",null);de(this,"lineCollectId",0);de(this,"controlPumpActive",!1);de(this,"pendingButtons",[]);de(this,"pendingSliders",new Map);de(this,"pendingToggles",new Map);de(this,"pendingJoysticks",new Map);de(this,"pendingDpads",[]);de(this,"expectingDisconnect",!1);de(this,"disconnectMessage",null);de(this,"busy",!1);de(this,"fsCapabilities",null);this.events=i,this.stream=new Rb(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return o_((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,i,c)}progress(i,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,i,c)}onDeviceMessage(i){var a,f;if(i==="disconnect"||i==="disconnect_private"){const h=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,h),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("plot_clear,")?this.handlePlotClearLine(i):i.startsWith("plot,")?this.handlePlotLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(h=>h.match(i));if(c>=0){const h=this.waiters[c];this.waiters.splice(c,1),clearTimeout(h.timer),h.resolve(i)}}waitFor(i,c,a){return new Promise((f,h)=>{const b=setTimeout(()=>{const p=this.waiters.findIndex(g=>g.timer===b);p>=0&&this.waiters.splice(p,1),h(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:f,reject:h,timer:b})})}async collectLines(i,c,a,f,h){Zr(f);const b=this.lineCollectId+1;this.lineCollectId=b,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const p=new Promise((g,y)=>{let S=!1;const k=()=>this.lineCollectId===b,T=()=>{S=!0,k()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",O)},D=F=>{S||(clearTimeout(V),k()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),y(F))},O=()=>{D(new DOMException("BLE file read cancelled","AbortError"))},V=setTimeout(()=>{k()&&D(new Error(`Timeout: ${a}`))},c);this.lineResolve=g,this.lineReject=D;const G=this.lineResolve;this.lineResolve=F=>{k()&&(clearTimeout(V),T(),G==null||G(F))},f==null||f.addEventListener("abort",O,{once:!0})});return await this.transport.writeLine(i),p}async exchange(i,c,a,f=3){let h;for(let b=1;b<=f;b+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,or,a)}catch(p){h=p,this.log("warning",`${a}: forsøg ${b}/${f} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var re,be,me;await Mf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",K=>K==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",K=>K==="unowned"||K.startsWith("unowned,")||K.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((re=c.split(",")[1])==null?void 0:re.trim())||void 0};const a=c.split(","),f=a[1]??"",h=a[2]!==void 0&&parseInt(a[2],10)||0,b=a[3]!==void 0?parseInt(a[3],10)===1:!0,p=a[4]!==void 0?parseInt(a[4],10)===1:!1,g=a.length>=7,y=g?parseInt(a[5]??"0",10)===1:p,S=((be=a[g?6:5])==null?void 0:be.trim())||void 0,k=((me=a[g?7:6])==null?void 0:me.trim())||void 0;await this.exchange("ACK:ownership",K=>K==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const T=await this.exchange(`request_permission,${i.userID},${Ri(i.username)}`,K=>K.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const D=T.split(",").filter(K=>/^\d+$/.test(K)),O=D.length>=1?parseInt(D[0]??"0",10):0,V=D.length>=2?parseInt(D[1]??"0",10):0,G=D.length>=3?parseInt(D[2]??"0",10):V;if(O===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:S,canOthersConnect:b};const F=i.userID===f,W=V===1||F,q=G===1||F;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:S,deviceName:k,iconID:h,canEdit:W,canEditCode:q,isOwnedByMe:F,canOthersConnect:b,canOthersEdit:p,canOthersEditCode:y}}async create(i,c,a,f,h,b,p){const g=a?1:0,y=a&&f?1:0,S=a&&h?1:0;await this.exchange(`create,${i.userID},${Ri(i.username)},${c},${g},${y},${S},${b},${p}`,k=>k==="ACK:create","create")}async updateDeviceSettings(i,c,a,f,h,b,p){const g=c?1:0,y=c&&a?1:0,S=c&&f?1:0;await this.exchange(`settings_update,${i},${g},${y},${S},${h},${b},${Ri(p??"")}`,k=>k==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,f)=>{this.layoutResolve=a;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},or*2),b=this.layoutResolve;this.layoutResolve=p=>{clearTimeout(h),b==null||b(p)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(f=>{const h=p=>p===null?"n":String(p),b=`update,${f.type},${f.name},${h(f.centerX2)},${h(f.centerY2)},${h(f.spanX)},${h(f.spanY)},${f.rotation}`;return f.type==="slider"?`${b},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${b},${f.toggleInitial?1:0}`:f.type==="radar"?[b,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[b,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):f.type==="plot"?[b,f.plotMin??0,f.plotMax??100,f.plotHistory??30,f.plotStyle??"line"].join(","):b});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",or*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${Ri(i)}`,or*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,h,b]=a.split(","),p=f==="file"||f==="dir"?f:"unknown",g=parseInt(b??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:p,...Number.isFinite(g)&&g>=0?{size:g}:{}}})}handleRadarLine(i){var b,p,g;const c=i.split(",");if(c.length<4)return;const a=(b=c[1])==null?void 0:b.trim(),f=parseFloat(c[2]??""),h=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(h)||((g=(p=this.events).onRadar)==null||g.call(p,a,f,h),this.log("info",`rx: ${i}`))}handleTextLine(i){var g,y;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=i.slice(c+1,a),h=i.slice(a+1),b=f==null?void 0:f.trim();if(!b)return;const p=h.split(Cb).join(`
`);(y=(g=this.events).onText)==null||y.call(g,b,p),this.log("info",`rx: ${i}`)}handleToggleStateLine(i){var h,b,p;const c=i.split(",");if(c.length<3)return;const a=(h=c[1])==null?void 0:h.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((p=(b=this.events).onToggleState)==null||p.call(b,a,f===1),this.log("info",`rx: ${i}`))}handlePlotLine(i){var h,b,p;const c=i.split(",");if(c.length<3)return;const a=(h=c[1])==null?void 0:h.trim(),f=parseFloat(c[2]??"");!a||!Number.isFinite(f)||((p=(b=this.events).onPlot)==null||p.call(b,a,f),this.log("info",`rx: ${i}`))}handlePlotClearLine(i){var f,h,b;const c=i.split(",");if(c.length<2)return;const a=(f=c[1])==null?void 0:f.trim();a&&((b=(h=this.events).onPlotClear)==null||b.call(h,a),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(i,f,c,a)}catch(h){if(a!=null&&a.aborted||gh(h)||!f.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",Ib,"fs_capabilities",i),a=c.find(S=>S.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(S=>S.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=f.split(","),b=new Map;for(let S=1;S<h.length-1;S+=2)b.set(h[S],h[S+1]);const p=parseInt(b.get("max_page")??"",10),g=parseInt(b.get("stream_chunk")??"",10),y={version:b.get("version")||void 0,pageRead:b.get("page_read")==="1",maxPageSize:Number.isFinite(p)&&p>0?p:32,streamRead:b.get("stream_read")==="1",streamChunkSize:Number.isFinite(g)&&g>0?g:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,c,a){const f=await this.getFilesystemCapabilities(a);let h=0,b=Fb(f.maxPageSize),p=0,g=null,y="";const S=`Indlæser ${Df(i)}...`;Zr(a),c==null||c(5,S);for(let k=0;k<512;k+=1){Zr(a),p===0&&(c==null||c(7,S));const D=await this.readPageWithRetry(i,p,h,b,a),O=D.lines;h=D.nextPageSizeIndex,b=D.maxPageSizeIndex,Zr(a);const V=O.find(ee=>ee.startsWith("ERR"));if(V)throw new Error(V);const G=O.find(ee=>ee.startsWith("fs_page,"));if(!G)throw new Error("ERR: fs_read_page missing data");const[,F,W,q,re=""]=G.split(",",5);if(F!==i)throw new Error("ERR: fs_read_page stale data");const be=parseInt(W??"",10),me=parseInt(q??"",10);if(!Number.isFinite(be)||be!==p||!Number.isFinite(me))throw new Error("ERR: fs_read_page invalid data");g=me,y+=re,p+=Math.floor(re.length/2);const K=g>0?8+Math.min(87,Math.round(p/g*87)):95;if(c==null||c(K,S),p>=g||re.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(yh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,f,h){let b,p=Math.min(a,f);for(;p>=0;){const g=nc[p],y=p===0?Ub:1,S=p===0?zb:Lb;for(let k=1;k<=y;k+=1){Zr(h);try{return{lines:await this.collectLines(`fs_read_page,${Ri(i)},${c},${g}`,S,`fs_read_page ${c}`,h),nextPageSizeIndex:Math.min(p+1,f),maxPageSizeIndex:f}}catch(T){if(h!=null&&h.aborted||gh(T))throw T;if(b=T,k<y||p>0){const O=p>0&&k>=y?nc[p-1]:g;this.log("warning",`fs_read_page ${c} (${g} bytes) fejlede; prøver ${O} bytes`),await Mf(80+k*80)}}}if(p===0)break;f=Math.max(0,p-1),p=f}throw b instanceof Error?b:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,f){const h=`Indlæser ${Df(i)}...`,b=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,h);const p=await this.collectLines(`fs_read_stream,${Ri(i)},${b}`,Hb,`fs_read_stream ${i}`,f,(K,ee)=>{const pe=8+Math.round(Math.min(K,ee)/Math.max(1,ee)*87);a==null||a(Math.min(95,pe),h)});Zr(f);const g=p.find(K=>K.startsWith("ERR"));if(g)throw new Error(g);const y=p.find(K=>K.startsWith("fs_stream_begin,")),S=p.find(K=>K.startsWith("fs_stream_end,"));if(!y||!S)throw new Error("ERR: fs_read_stream missing metadata");const[,k,T]=y.split(",",4),[,D,O,V]=S.split(",",4),G=parseInt(T??"",10),F=parseInt(O??"",10),W=parseInt(V??"",10);if(k!==i||D!==i||!Number.isFinite(G)||G!==F||!Number.isFinite(W))throw new Error("ERR: fs_read_stream invalid metadata");let q=0,re="";for(const K of p){if(!K.startsWith("fs_stream_chunk,"))continue;const[,ee,pe=""]=K.split(",",3),ye=parseInt(ee??"",10);if(!Number.isFinite(ye)||ye!==q||pe.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");re+=pe,q+=Math.floor(pe.length/2)}if(q!==G)throw new Error("ERR: fs_read_stream size mismatch");const be=yh(re);if(bh(be)!==W)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(be)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Ri(i)}`,S=>S==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),h=[...f].map(S=>S.toString(16).padStart(2,"0")).join(""),b=[];for(let S=0;S<h.length;S+=160)b.push(`fs_write_chunk,${h.slice(S,S+160)}`);b.push("fs_write_end");const p=bh(f),g=this.waitFor(S=>S==="ACK:fs_write_done"||S.startsWith("ACK:fs_write_done,")||S.startsWith("ERR"),Bb,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(b,(S,k,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const D=Math.min(f.length,S*80),O=18+Math.round(S/Math.max(1,k-1)*67);a==null||a(Math.min(85,O),`Sender ${D}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const y=await g;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,S,k]=y.split(",",3),T=parseInt(S??"",10),D=parseInt(k??"",10);if(T!==f.length||D!==p)throw new Error(`ERR: BLE-verificering fejlede for ${Df(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${Ri(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Mf(Ob)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[b,p]=a.value;return this.pendingSliders.delete(b),p}const f=this.pendingToggles.entries().next();if(!f.done){const[b,p]=f.value;return this.pendingToggles.delete(b),p}const h=this.pendingJoysticks.entries().next();if(!h.done){const[b,p]=h.value;return this.pendingJoysticks.delete(b),p}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,i)}}function Fb(s){let i=0;for(let c=0;c<nc.length;c+=1)nc[c]<=s&&(i=c);return i}function Df(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")||s}function bh(s){let i=0;for(const c of s)i=i+c>>>0;return i}function yh(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}function vh(s){const i=(c,a)=>Number.isFinite(c)?Math.max(jb,Math.min(Mb,c)):a;for(const c of s){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),h=i(parseInt(f[1],10),ia),b=i(parseInt(f[2],10),bs);return{cols:h,rows:b}}}return{cols:ia,rows:bs}}function xh(s){const i=new Map;for(const c of s){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[h,b,p,g,y,S,k,T,D,O,V,G,F]=f;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"&&h!=="joystick"&&h!=="dpad"&&h!=="plot"||i.has(b))continue;const W=E=>{if(E==="n")return null;const L=parseInt(E,10);return Number.isNaN(L)?null:L},q=parseInt(k,10)||0,re=T!==void 0?parseInt(T,10):0,be=D!==void 0?parseInt(D,10):100,me=["none","bottom","middle","top"].includes(O??"")?O:"none",K=T!==void 0?parseInt(T,10)===1:!1,ee=T!==void 0?parseFloat(T):0,pe=D!==void 0?parseFloat(D):180,ye=O!==void 0?parseFloat(O):200,De=V!==void 0?parseInt(V,10):1200,J=(E,L)=>["none","bottom","middle","top"].includes(E??"")?E:L,We=T!==void 0?parseInt(T,10):-100,Oe=D!==void 0?parseInt(D,10):100,Pe=O!==void 0?parseInt(O,10):-100,I=V!==void 0?parseInt(V,10):100,ne=T!==void 0?parseFloat(T):0,ue=D!==void 0?parseFloat(D):100,ce=O!==void 0?parseInt(O,10):30,we=V==="bar"?"bar":"line";i.set(b,{type:h,name:b,centerX2:W(p),centerY2:W(g),spanX:W(y),spanY:W(S),rotation:[0,90,180,270].includes(q)?q:0,...h==="slider"?{sliderMin:Number.isFinite(re)?re:0,sliderMax:Number.isFinite(be)?be:100,sliderRecenter:me}:{},...h==="toggle"?{toggleInitial:K}:{},...h==="radar"?{radarMinAngle:Number.isFinite(ee)?ee:0,radarMaxAngle:Number.isFinite(pe)?pe:180,radarMaxDistance:Number.isFinite(ye)&&ye>0?ye:200,radarFadeMs:Number.isFinite(De)&&De>0?De:1200}:{},...h==="joystick"?{joystickXMin:Number.isFinite(We)?We:-100,joystickXMax:Number.isFinite(Oe)&&Oe!==We?Oe:100,joystickYMin:Number.isFinite(Pe)?Pe:-100,joystickYMax:Number.isFinite(I)&&I!==Pe?I:100,joystickXRecenter:J(G,"middle"),joystickYRecenter:J(F,"middle")}:{},...h==="plot"?{plotMin:Number.isFinite(ne)?ne:0,plotMax:Number.isFinite(ue)&&ue!==ne?ue:ne+100,plotHistory:Number.isFinite(ce)&&ce>1?ce:30,plotStyle:we}:{}})}return[...i.values()]}let ie=null,os=null,Sh=0,Pl=!1;function Gb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function kh(s){return new Promise(i=>setTimeout(i,s))}function Af(s,i){const c=i.userID.toLowerCase();return s.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?i.username:a.ownerName}})}function Of(s,i){return(s.name?o_(s.name):"")||(i==null?void 0:i.deviceName)||"Pico"}function Vb(s){return Object.fromEntries(s.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function wh(s,i){const c=Vb(s);for(const a of s)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const le=pb((s,i)=>{function c(p,g){s(y=>({logs:[{level:p,message:g,time:Gb()},...y.logs].slice(0,200)}))}function a(p){os&&clearTimeout(os),Sh+=1,s({toast:{message:p,id:Sh}}),os=setTimeout(()=>s({toast:null}),4500)}function f(p=null){s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p})}function h(p){return{deviceID:p.deviceID,deviceName:p.deviceName,ownerID:p.ownerID,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}}function b(p){const{screen:g,active:y,picoIdeOrigin:S}=i();if(Pl){Pl=!1;return}p&&(c("warning",p),a(p)),(g==="control"||g==="connection"||g==="create"||g==="ide"&&S==="control")&&f(y?h(y):null)}return ie=new Pb({onProgress:(p,g)=>s({progress:{value:p,label:g}}),onLog:(p,g)=>c(p,g),onRadar:(p,g,y)=>{const S=Date.now(),k={id:`${S}-${Math.random().toString(36).slice(2)}`,angle:g,distance:y,createdAt:S};s(T=>{const D=T.layout.find(G=>G.type==="radar"&&G.name===p),O=(D==null?void 0:D.radarFadeMs)??1200,V=T.radarPings[p]??[];return{radarPings:{...T.radarPings,[p]:[...V.filter(G=>S-G.createdAt<=O),k].slice(-80)}}})},onText:(p,g)=>{s(y=>({textValues:{...y.textValues,[p]:g}}))},onToggleState:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}}))},onPlot:(p,g)=>{const y=Date.now(),S={id:`${y}-${Math.random().toString(36).slice(2)}`,value:g,createdAt:y};s(k=>{const T=k.layout.find(V=>V.type==="plot"&&V.name===p),D=Math.max(2,(T==null?void 0:T.plotHistory)??30),O=k.plotSeries[p]??[];return{plotSeries:{...k.plotSeries,[p]:[...O,S].slice(-D)}}})},onPlotClear:p=>{s(g=>({plotSeries:{...g.plotSeries,[p]:[]}}))},onDisconnect:p=>b(p)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const p=_b(),g=p?Af(tc(),p):tc();p&&ta(g),s({user:p,savedDevices:g,splashTarget:p?"dashboard":"intro"})},finishSplash:()=>{const p=i().splashTarget;s({screen:p??"intro"})},createUser:p=>{const g=p.trim();if(!g)return;const y={username:g,userID:hb()};Tf(y),s({user:y,screen:"dashboard"})},findDevice:async()=>{try{const p=await Tb();await i().connectToDevice(p)}catch(p){p instanceof Error&&p.name!=="NotFoundError"&&c("error",p.message)}},connectToDevice:async(p,g)=>{var S,k,T;const y=i().user;if(!(!y||!ie)){Pl=!1,s({screen:"connection",connecting:{name:Of(p,g),iconID:(g==null?void 0:g.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await ie.connect(p);const D=await ie.runHandshake(y),O=p.id,V=(D.kind==="owned"||D.kind==="unowned")&&((S=D.deviceName)==null?void 0:S.trim())||Of(p,g);if(s(re=>re.connecting?{connecting:{...re.connecting,name:V}}:{}),D.kind==="denied"){const be=`Du kan ikke forbinde, fordi ${((k=D.ownerName)==null?void 0:k.trim())||((T=g==null?void 0:g.ownerName)==null?void 0:T.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",be),a(be),s({screen:"dashboard",connecting:null}),await ie.disconnect();return}if(D.kind==="unowned"){s({active:{deviceID:O,deviceName:V,ownerID:y.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:y.username,gridCols:ia,gridRows:bs},screen:"create"});return}const G={deviceID:O,deviceName:V,ownerID:D.ownerID,deviceIconID:D.iconID,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?y.username:D.ownerName??(g==null?void 0:g.ownerName)};s({savedDevices:Nf(G)});const F=await ie.requestLayout(),W=vh(F),q=xh(F);s({layout:q,sliderValues:{},toggleValues:wh(q,i().toggleValues),radarPings:{},textValues:{},plotSeries:{},active:{deviceID:O,deviceName:V,ownerID:D.ownerID,iconID:D.iconID,canEdit:D.canEdit,canEditCode:D.canEditCode,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?y.username:D.ownerName??(g==null?void 0:g.ownerName),gridCols:W.cols,gridRows:W.rows},screen:"control",connecting:null,connectionLost:null})}catch(D){const O=D instanceof Error?D.message:"Forbindelsen mislykkedes.";c("error",O),a("Forbindelsen mislykkedes."),s({screen:"dashboard",connecting:null}),await ie.disconnect().catch(()=>{})}}},finishCreate:async(p,g,y,S,k,T)=>{const{user:D,active:O}=i();if(!(!D||!O||!ie))try{ie.setBusy(!0),await ie.create(D,p,g,y,S,k,T),ie.setBusy(!1);const V={deviceID:O.deviceID,deviceName:O.deviceName,ownerID:D.userID,deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&S,isOwnedByMe:!0,ownerName:D.username};s({savedDevices:Nf(V)});const G=await ie.requestLayout(),F=vh(G),W=xh(G);s({layout:W,sliderValues:{},toggleValues:wh(W,i().toggleValues),radarPings:{},textValues:{},plotSeries:{},active:{...O,ownerID:D.userID,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&S,ownerName:D.username,gridCols:F.cols,gridRows:F.rows},screen:"control"})}catch(V){ie.setBusy(!1);const G=V instanceof Error?V.message:"Oprettelse mislykkedes.";c("error",G),a("Oprettelse mislykkedes."),s({screen:"dashboard"}),await ie.disconnect().catch(()=>{})}},saveDeviceSettings:async(p,g,y,S,k,T)=>{const{active:D,user:O}=i();if(!(!D||!ie||!D.isOwnedByMe))try{ie.setBusy(!0),await ie.updateDeviceSettings(p,g,y,S,k,T,O==null?void 0:O.username);const V={...D,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&S,ownerName:(O==null?void 0:O.username)??D.ownerName,gridCols:k,gridRows:T},G={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(O==null?void 0:O.userID),deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&S,isOwnedByMe:!0,ownerName:(O==null?void 0:O.username)??D.ownerName};s({active:V,savedDevices:Nf(G)}),a("Enhedsindstillinger gemt.")}catch(V){c("error",V instanceof Error?V.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{ie.setBusy(!1)}},cancelCreate:async()=>{ie&&await ie.disconnect().catch(()=>{}),s({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Pl=!0,f(null),ie&&await ie.disconnect().catch(()=>{}),Pl=!1},removeSavedDevice:p=>{s({savedDevices:vb(p)})},clearSavedDevices:()=>{gb(),s({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Pl=!0,ie!=null&&ie.connected&&await ie.disconnect().catch(()=>{}),bb(),window.location.reload()},updateUsername:p=>{const g=i().user,y=p.trim();if(!g||!y)return;const S={...g,username:y};Tf(S),s(k=>{var D;const T=Af(k.savedDevices,S);return ta(T),{user:S,active:(D=k.active)!=null&&D.isOwnedByMe?{...k.active,ownerName:y}:k.active,savedDevices:T}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const p=i().user;return p?Yb(p):null},applyOwnerPairingCode:p=>{var y;const g=$b(p,(y=i().user)==null?void 0:y.username);return g?(Tf(g),s(S=>{var T,D,O;const k=Af(S.savedDevices,g);return ta(k),{user:g,active:((D=(T=S.active)==null?void 0:T.ownerID)==null?void 0:D.toLowerCase())===g.userID.toLowerCase()||(O=S.active)!=null&&O.isOwnedByMe?{...S.active,isOwnedByMe:!0,ownerID:g.userID,ownerName:g.username}:S.active,savedDevices:k}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const p=i().screen==="control"&&!!(ie!=null&&ie.connected),g=i().active;if(p&&g&&!g.isOwnedByMe&&!g.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),s({sideMenuOpen:!1});return}s(y=>({screen:"ide",picoIdeOrigin:p?"control":"dashboard",active:p?y.active:null,layout:p?y.layout:[],sliderValues:p?y.sliderValues:{},toggleValues:p?y.toggleValues:{},radarPings:p?y.radarPings:{},textValues:p?y.textValues:{},plotSeries:p?y.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:p,active:g}=i();s({screen:p==="control"&&g&&(ie!=null&&ie.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ie!=null&&ie.connected),bleListFiles:async()=>ie!=null&&ie.connected?ie.listFiles("/"):[],bleReadText:async(p,g,y)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");return ie.readText(p,g,y)},bleWriteText:async(p,g,y)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.writeText(p,g,y)},bleDeleteFile:async p=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.deleteFile(p)},bleRestart:async()=>{ie!=null&&ie.connected&&await ie.restart()},bleRestartAndReconnect:async(p="control")=>{const{active:g}=i();if(!(ie!=null&&ie.connected)||!g)return!1;const y={deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIconID:g.iconID,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName};Pl=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ie.restart()}catch{}s({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:y.deviceName,iconID:y.deviceIconID}});for(let S=0;S<12&&(ie!=null&&ie.connected);S+=1)await kh(250);ie!=null&&ie.connected||(Pl=!1);for(let S=1;S<=8;S+=1){await kh(S===1?1200:850);try{const T=(await c_()).find(D=>D.id===y.deviceID);if(!T){s({progress:{value:Math.min(88,20+S*8),label:"Venter på browser-tilladelse..."}});continue}return s({progress:{value:Math.min(92,24+S*8),label:`Genforbinder (${S}/8)...`}}),await i().connectToDevice(T,y),p==="ide"&&s(D=>({screen:"ide",picoIdeOrigin:"control",active:D.active,layout:D.layout,sliderValues:D.sliderValues,toggleValues:D.toggleValues,radarPings:D.radarPings,textValues:D.textValues,plotSeries:D.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(k){c("warning",k instanceof Error?k.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Pl=!1,s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:y}),!1},reconnectLostDevice:async()=>{var g;const p=i().connectionLost;if(p){s({connectionLost:null});try{if((g=navigator.bluetooth)!=null&&g.getDevices){const S=(await navigator.bluetooth.getDevices()).find(k=>k.id===p.deviceID);if(S){await i().connectToDevice(S,p);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>s({connectionLost:null}),sendButton:(p,g)=>ie==null?void 0:ie.enqueueButton(p,g),sendSlider:(p,g)=>{s(y=>({sliderValues:{...y.sliderValues,[p]:g}})),ie==null||ie.enqueueSlider(p,g)},sendToggle:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}})),ie==null||ie.enqueueToggle(p,g)},sendJoystick:(p,g,y)=>ie==null?void 0:ie.enqueueJoystick(p,g,y),sendDpad:(p,g,y)=>ie==null?void 0:ie.enqueueDpad(p,g,y),saveLayout:async p=>{if(ie)try{ie.setBusy(!0),await ie.saveLayout(p),s({layout:p,editMode:!1})}catch(g){c("error",g instanceof Error?g.message:"Kunne ikke gemme layout.")}finally{ie.setBusy(!1)}},setEditMode:p=>s({editMode:p,sideMenuOpen:!1,menuPage:null}),setDashboardPage:p=>s({dashboardPage:p}),toggleSideMenu:p=>s(g=>({sideMenuOpen:p??!g.sideMenuOpen})),toggleDebugger:p=>s(g=>({debuggerOpen:p??!g.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:p=>s({menuPage:p,sideMenuOpen:!1}),closeMenuPage:()=>s({menuPage:null}),clearLogs:()=>s({logs:[]}),log:(p,g)=>c(p,g),askConfirm:p=>s({confirmDialog:p}),closeConfirm:()=>s({confirmDialog:null}),showToast:p=>a(p),dismissToast:()=>{os&&clearTimeout(os),s({toast:null})}}}),Ff="PKP-EJER";function Yb(s){var a;const i=s.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${Ff}-${c}-${m_(i)}`}function $b(s,i="Ejer"){const c=s.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Ff}-`))return null;const a=c.slice(Ff.length+1).split("-").filter(Boolean),f=a.pop()??"",h=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||f!==m_(h)?null:{userID:h,username:i.trim()||"Ejer"}}function m_(s){let i=2166136261;for(const c of s.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const cc="./",p_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function aa(s){const i=s>=0&&s<p_.length?s:0;return`${cc}device-icons/${i}.png`}const qb=`${cc}art/logo.png`,Xb=`${cc}art/Teknologiskolen_logo.png`,Kb=`${cc}art/logo_teknologiskolen_white.png`,Qb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function ln({name:s,size:i=24,className:c}){return u.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Qb[s]})}const Wb=1850,Zb=450;function Jb(){const s=le(a=>a.splashTarget),i=le(a=>a.finishSplash),c=s?"splash-screen-animation splash-ready":"splash-pending";return U.useEffect(()=>{if(!s)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Zb:Wb,h=window.setTimeout(i,f);return()=>window.clearTimeout(h)},[i,s]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:qb,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Eh(){const s=le(f=>f.createUser),[i,c]=U.useState(""),a=i.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Xb,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:i,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>s(i),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:gs})]})}function td({title:s,onMenu:i}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:s}),u.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:u.jsx(ln,{name:"menu"})})]})})}function At({title:s,onClose:i,children:c,closeVariant:a="plain"}){const f=a==="circle",h=U.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:b=>{h.current=b.target===b.currentTarget},onClick:b=>{b.target===b.currentTarget&&h.current&&i(),h.current=!1},children:u.jsxs("div",{className:"modal",onClick:b=>b.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:s}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:u.jsx(ln,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function Th(){const s=le(T=>T.savedDevices),i=le(T=>T.toggleSideMenu),c=le(T=>T.findDevice),a=le(T=>T.removeSavedDevice),f=le(T=>T.askConfirm),h=le(T=>T.dashboardPage),b=le(T=>T.setDashboardPage),p=l0(),[g,y]=U.useState(null),S=oc(),k=s.filter(T=>h==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(n0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(td,{title:"Hovedmenu",onMenu:()=>i()}),u.jsxs("div",{className:"content dash-content",children:[!S&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>b("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>b("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:k.length===0?u.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):k.map(T=>u.jsx(e0,{device:T,disabled:!S,onConnect:()=>p(T),onSettings:()=>y(T)},T.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!S,"aria-label":"Find enhed",children:u.jsx(ln,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:gs}),g&&u.jsx(At,{title:"Enhedsindstillinger",onClose:()=>y(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:aa(g.deviceIconID),alt:""}),u.jsx("strong",{children:g.deviceName})]}),u.jsx(cs,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(cs,{label:"Ejer",value:t0(g)}),u.jsx(cs,{label:"Offentlig",value:g.canOthersConnect?"Ja":"Nej"}),u.jsx(cs,{label:"Andre må redigere layout",value:g.canOthersEdit?"Ja":"Nej"}),u.jsx(cs,{label:"Andre må redigere kode",value:g.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!S,onClick:()=>{const T=g;y(null),p(T)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${g.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(g.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function e0({device:s,disabled:i,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[u.jsx("img",{className:"device-tile-icon",src:aa(s.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:s.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(ln,{name:"settings"})})]})}function cs({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function t0(s){var i;return s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger"}function n0(s,i){return s.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function l0(){const s=le(a=>a.connectToDevice),i=le(a=>a.findDevice),c=le(a=>a.log);return async a=>{const h=(await c_()).find(b=>b.id===a.deviceID);h?await s(h,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function i0(){const s=le(c=>c.connecting),i=le(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:aa((s==null?void 0:s.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(s==null?void 0:s.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function h_({selected:s,onSelect:i,onClose:c}){return u.jsx(At,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:p_.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===s?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:aa(a.id),alt:""})},a.id))})})}function r0(){const s=le(re=>re.finishCreate),i=le(re=>re.cancelCreate),[c,a]=U.useState(0),[f,h]=U.useState(!1),[b,p]=U.useState(!1),[g,y]=U.useState(!1),[S,k]=U.useState(!1),[T,D]=U.useState(ia),[O,V]=U.useState(bs),[G,F]=U.useState(!1),W=re=>Number.isFinite(re)?Math.max(na,Math.min(la,Math.round(re))):ia;async function q(){F(!0),await s(c,b,b&&g,b&&S,W(T),W(O))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:aa(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(ln,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:b?"":"active",onClick:()=>p(!1),children:"Privat"}),u.jsx("button",{type:"button",className:b?"active":"",onClick:()=>p(!0),children:"Offentlig"})]}),b&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>y(!1),children:"Nej"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>y(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:S?"":"active",onClick:()=>k(!1),children:"Nej"}),u.jsx("button",{type:"button",className:S?"active":"",onClick:()=>k(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:na,max:la,value:Number.isNaN(T)?"":T,onChange:re=>D(parseInt(re.target.value,10)),onBlur:()=>D(W(T))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:na,max:la,value:Number.isNaN(O)?"":O,onChange:re=>V(parseInt(re.target.value,10)),onBlur:()=>V(W(O))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:G,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:q,disabled:G,children:G?"Opretter...":"Opret"})]})]}),f&&u.jsx(h_,{selected:c,onSelect:a,onClose:()=>h(!1)}),u.jsx("span",{className:"version",children:gs})]})}const ra=8;function Zo(s){return Math.max(5,Math.min(22,s))}function a0(s,i,c){const a=Math.max(1,s.length),f=(i-ra*2)/(a*.58),h=(c-ra*2)*.48;return Zo(Math.min(f,h))}function cr(s,i,c){switch(c){case 90:return{x:-i,y:s};case 180:return{x:-s,y:-i};case 270:return{x:i,y:-s};default:return{x:s,y:i}}}function lc(s){return(360-s)%360}function s0(s,i,c,a){const f=a===90||a===270;return a0(s,f?c:i,f?i:c)}function ic({name:s,width:i,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:s0(s,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:s})}function o0(s,i,c,a,f){const h=s.trim().split(/\s+/).filter(Boolean),b=Math.max(1,s.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),p=f?Zo(Math.min(i/4.6,c/4.6,12)):0,g=f?p+ra:ra;if(a){const k=Math.max(1,c-g*2);return{fontSize:Zo(Math.min(i*.48,k/(b*1.04))),endFontSize:p,centerInset:f?{top:g,bottom:g}:{}}}const y=Math.max(1,i-g*4.2);return{fontSize:Zo(Math.min(c*.42,y/(b*.58))),endFontSize:p,centerInset:f?{left:g*2.1,right:g*2.1}:{}}}function c0({control:s,rect:i,disabled:c,latestValue:a,toggleValue:f,radarPings:h=[],textValue:b,plotPoints:p=[],onButton:g,onSlider:y,onToggle:S,onJoystick:k,onDpad:T}){const D=U.useRef(!1),O={left:i.cx,top:i.cy,width:i.width,height:i.height};if(s.type==="button"){const V=()=>{c||!D.current||(D.current=!1,g(s.name,!1))};return u.jsx("div",{className:"control",style:O,children:u.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:G=>{var F,W;c||(G.preventDefault(),(W=(F=G.currentTarget).setPointerCapture)==null||W.call(F,G.pointerId),D.current=!0,g(s.name,!0))},onPointerUp:G=>{var F,W;G.preventDefault(),(W=(F=G.currentTarget).releasePointerCapture)==null||W.call(F,G.pointerId),V()},onPointerCancel:V,onLostPointerCapture:V,children:u.jsx(ic,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}if(s.type==="toggle"){const V=!!f;return u.jsx("div",{className:"control",style:O,children:u.jsx("button",{className:`control-toggle ${V?"on":""}`,type:"button",disabled:c,"aria-pressed":V,style:{width:"100%",height:"100%"},onPointerDown:G=>{c||(G.preventDefault(),S(s.name,!V))},children:u.jsx(ic,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}return s.type==="radar"?u.jsx("div",{className:"control",style:O,children:u.jsx(g_,{control:s,pings:h,width:i.width,height:i.height})}):s.type==="text"?u.jsx("div",{className:"control",style:O,children:u.jsx(__,{message:b??s.name,width:i.width,height:i.height,rotation:s.rotation})}):s.type==="plot"?u.jsx("div",{className:"control",style:O,children:u.jsx(y_,{control:s,points:p,width:i.width,height:i.height})}):s.type==="joystick"?u.jsx("div",{className:"control",style:O,children:u.jsx(N0,{control:s,disabled:c,onJoystick:k,width:i.width,height:i.height})}):s.type==="dpad"?u.jsx("div",{className:"control",style:O,children:u.jsx(B0,{control:s,disabled:c,onDpad:T})}):u.jsx("div",{className:"control",style:O,children:u.jsx(T0,{control:s,disabled:c,latestValue:a,onSlider:y,width:i.width,height:i.height})})}function u0(s,i,c){const f=(s.trim()||" ").split(`
`),h=f.reduce((T,D)=>D.split(/\s+/).filter(Boolean).reduce((V,G)=>Math.max(V,G.length),T),1),b=Math.max(1,Math.floor(h*1.9)),p=Math.max(f.length,f.reduce((T,D)=>T+Math.max(1,Math.ceil(Math.max(1,D.trim().length)/b)),0)),g=Math.max(1,i-ra*3),y=Math.max(1,c-ra*3),S=g/(h*.58),k=y/(p*1.16);return Math.max(7,Math.min(24,S,k))}function __({message:s,width:i,height:c,rotation:a=0}){const f=s.trim()||"...",h=a===90||a===270,b=u0(f,h?c:i,h?i:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:b},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function g_({control:s,pings:i,width:c,height:a,preview:f=!1}){const[,h]=U.useState(0),b=Math.max(120,s.radarFadeMs??1200),p=s.radarMinAngle??0,g=s.radarMaxAngle??180,y=Jt(p),S=Jt(g),k=Math.abs(g-p)>=360||y===S&&p!==g,T=Math.max(1,s.radarMaxDistance??200),D=Date.now(),O=i[i.length-1],V=s.rotation,G=Jt(y+V),F=Jt(S+V),W=v0(y,S),q=((O==null?void 0:O.angle)??W)+V,re=f?[{id:"preview",angle:W,distance:T*.62,createdAt:D}]:i.filter(ce=>D-ce.createdAt<=b),be=!k,me=Math.max(8,Math.min(12,Math.min(c,a)*.16)),K=Math.max(7,me*.85),ee=0,pe=0,ye=1,De=_0(k,G,F,V,T),J=k?{x:-1.12,y:-1.12,width:2.24,height:2.24}:g0(G,F,De.map(ce=>ce.point)),We=k?"":f0(ee,pe,ye,G,F),Oe=Mh(p),Pe=Mh(g),I=be?y0(G,F,J,c,a,Oe,Pe,me):null,ne=De.map(ce=>{const we=b_(ce.point,J,c,a);return{key:ce.key,value:ce.value,x:we.x,y:we.y}});U.useEffect(()=>{if(f||i.length===0)return;const ce=window.setInterval(()=>h(we=>we+1),120);return()=>window.clearInterval(ce)},[b,i.length,f]);const ue=jn(ee,pe,ye,q);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${J.x} ${J.y} ${J.width} ${J.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[k?u.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:pe,r:ye}):u.jsx("path",{className:"radar-sector-fill",d:We}),[.25,.5,.75,1].map(ce=>k?u.jsx("circle",{className:"radar-ring",cx:ee,cy:pe,r:ye*ce},ce):u.jsx("path",{className:"radar-ring",d:d0(ee,pe,ye*ce,G,F)},ce)),!k&&u.jsx(Nh,{cx:ee,cy:pe,radius:ye,angle:G}),!k&&u.jsx(Nh,{cx:ee,cy:pe,radius:ye,angle:F}),u.jsx("line",{className:"radar-sweep",x1:ee,y1:pe,x2:ue.x,y2:ue.y}),re.map(ce=>{const we=f?0:D-ce.createdAt,E=Math.max(0,1-we/b),L=Math.max(0,Math.min(T,ce.distance)),te=jn(ee,pe,ye*(L/T),ce.angle+V);return u.jsx("circle",{className:"radar-ping",cx:te.x,cy:te.y,r:Math.max(.025,Math.min(J.width,J.height)*.025),opacity:E},ce.id)})]}),be&&I&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:I.min.x,top:I.min.y,fontSize:me},children:Oe}),u.jsx("span",{className:"radar-angle-label",style:{left:I.max.x,top:I.max.y,fontSize:me},children:Pe})]}),ne.map(ce=>u.jsx("span",{className:"radar-range-label",style:{left:ce.x,top:ce.y,fontSize:K},children:ce.value},ce.key))]})}function Nh({cx:s,cy:i,radius:c,angle:a}){const f=jn(s,i,c,a);return u.jsx("line",{className:"radar-boundary",x1:s,y1:i,x2:f.x,y2:f.y})}function jn(s,i,c,a){const f=(Jt(a)-90)*Math.PI/180;return{x:s+Math.cos(f)*c,y:i+Math.sin(f)*c}}function f0(s,i,c,a,f){const h=jn(s,i,c,a),b=jn(s,i,c,f),p=uc(a,f)>180?1:0;return`M ${s} ${i} L ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y} Z`}function d0(s,i,c,a,f){const h=jn(s,i,c,a),b=jn(s,i,c,f),p=uc(a,f)>180?1:0;return`M ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y}`}function uc(s,i){const c=Jt(s),a=Jt(i),f=a>=c?a-c:360-c+a;return f===0?360:f}const Xo=[.25,.5,.75,1],m0=.1,p0=.85,h0=55;function _0(s,i,c,a,f){const h=(g,y,S)=>({key:`${g}-${y}`,value:Math.round(f*y),point:jn(0,0,y,S)});if(s){const g=Jt(180+a);return Xo.map(y=>h("full",y,g))}const b=360-uc(i,c);if(b<h0){const g=Jt(c+b/2);return Xo.map(y=>h("mid",y,g))}const p=(g,y,S)=>{const k=Math.asin(Math.min(p0,m0/y))*180/Math.PI;return Jt(g+S*k)};return[...Xo.map(g=>h("min",g,p(i,g,-1))),...Xo.map(g=>h("max",g,p(c,g,1)))]}function g0(s,i,c=[]){const a=[{x:0,y:0},jn(0,0,1,s),jn(0,0,1,i),...c];for(const k of[0,90,180,270])b0(k,s,i)&&a.push(jn(0,0,1,k));const f=Math.min(...a.map(k=>k.x)),h=Math.max(...a.map(k=>k.x)),b=Math.min(...a.map(k=>k.y)),p=Math.max(...a.map(k=>k.y)),g=Math.max(.1,h-f),y=Math.max(.1,p-b),S=Math.max(g,y)*.24;return{x:f-S,y:b-S,width:g+S*2,height:y+S*2}}function b0(s,i,c){const a=Jt(i),f=Jt(s),h=uc(i,c),b=Jt(f-a);return b>=0&&b<=h}function y0(s,i,c,a,f,h,b,p){const y=jn(0,0,1.1,s),S=jn(0,0,1.1,i);return{min:Rh(y,c,a,f,h,p),max:Rh(S,c,a,f,b,p)}}function b_(s,i,c,a){return{x:(s.x-i.x)/i.width*c,y:(s.y-i.y)/i.height*a}}function Rh(s,i,c,a,f,h){const b=b_(s,i,c,a),p=Math.max(10,f.length*h*.62),g=h,y=7;return{x:jh(b.x,p/2+y,Math.max(p/2+y,c-p/2-y)),y:jh(b.y,g/2+y,Math.max(g/2+y,a-g/2-y))}}function jh(s,i,c){return Math.max(i,Math.min(c,s))}function Mh(s){return`${Math.round(s)}`}function Jt(s){return Number.isFinite(s)?(s%360+360)%360:0}function v0(s,i){const c=Jt(s),a=Jt(i),f=a>=c?a-c:360-c+a;return Jt(c+f/2)}function Cf(s){return Number.isInteger(s)?String(s):s.toFixed(1)}function x0(s){const i=Math.round(s/1e3);if(i<60)return`${i} sek`;const c=Math.round(i/60);if(c<60)return`${c} min`;const a=Math.floor(c/60),f=c%60;return f>0?`${a} t ${f} min`:`${a} t`}function S0(s,i){const c=Date.now();return Array.from({length:s},(a,f)=>{const h=f/Math.max(1,s-1),b=i==="bar"?.15+.7*Math.abs(Math.sin(h*Math.PI*1.4)):.5+.4*Math.sin(h*Math.PI*2.2);return{id:`demo-${f}`,value:b,createdAt:c}})}function y_({control:s,points:i,width:c,height:a,preview:f=!1}){const h=s.plotMin??0,b=s.plotMax??100,p=b>h?b-h:1,g=Math.max(2,s.plotHistory??30),y=s.plotStyle==="bar"?"bar":"line",S=f?S0(g,y):i.slice(-g),k=S[S.length-1],T=S.length>1?S[S.length-1].createdAt-S[0].createdAt:0,D=T>2e3?x0(T):null,O=Math.max(1,Math.min(c,a)),V=Math.max(8,Math.min(13,O*.14)),G=Math.max(6,Math.min(16,O*.12)),F=Math.max(1,c-G*2),W=Math.max(1,a-G*2),q=Math.max(1.5,Math.min(3.4,O*.045)),re=Math.max(q+1,Math.min(O*.09,q*2)),be=pe=>{const ye=Math.max(0,Math.min(1,(pe-h)/p));return G+(1-ye)*W},me=G+W,K=Math.max(1.5,O*.02),ee=S.map((pe,ye)=>({x:S.length>1?G+ye/(S.length-1)*F:G+F/2,y:be(pe.value)}));return u.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`0 0 ${c} ${a}`,"aria-hidden":"true",children:[[.25,.5,.75].map(pe=>u.jsx("line",{className:"plot-grid-line",x1:G,y1:G+pe*W,x2:G+F,y2:G+pe*W},pe)),y==="bar"?S.map((pe,ye)=>{const De=F/S.length,J=De*.62,We=G+ye*De+(De-J)/2,Oe=Math.min(be(pe.value),me-K),Pe=ye===S.length-1;return u.jsx("rect",{className:`plot-bar ${Pe?"latest":""}`,x:We,y:Oe,width:J,height:me-Oe},pe.id)}):u.jsxs(u.Fragment,{children:[ee.length>1&&u.jsx("polyline",{className:"plot-line",points:ee.map(pe=>`${pe.x},${pe.y}`).join(" ")}),ee.map((pe,ye)=>{var De;return u.jsx("circle",{className:`plot-dot ${ye===ee.length-1?"latest":""}`,cx:pe.x,cy:pe.y,r:ye===ee.length-1?re:q},(De=S[ye])==null?void 0:De.id)})]})]}),u.jsxs("div",{className:"plot-topleft-stack",style:{fontSize:V*.78},children:[u.jsx("span",{children:Cf(b)}),u.jsx("span",{className:"plot-topleft-name",style:{fontSize:V},children:s.name})]}),k!==void 0&&u.jsx("span",{className:"plot-value-label",style:{fontSize:V*1.15},children:Cf(k.value)}),u.jsx("span",{className:"plot-axis-label plot-axis-min",style:{fontSize:V*.78},children:Cf(h)}),D!==null&&u.jsxs("span",{className:"plot-time-label",style:{fontSize:V*.72},children:[D," siden"]})]})}function k0(s,i){if(!i)return s;const c=s.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((h,b)=>u.jsx("span",{children:h},`${h}-${b}`))},`${a}-${f}`))})}function w0(s){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return s===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:s===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:s===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function E0({name:s,vertical:i,rotation:c,color:a,fontSize:f,endFontSize:h,centerInset:b,lowLabel:p,highLabel:g,showEnds:y}){const S=y?w0(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,...b,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:k0(s,i)}),S&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...S.low,fontWeight:800,fontSize:h},children:p}),u.jsx("div",{style:{...S.high,fontWeight:800,fontSize:h},children:g})]})]})}function v_({name:s,rotation:i,width:c,height:a,value:f,showEnds:h=!1,fillColor:b="var(--red)",lowLabel:p="0",highLabel:g="100"}){const y=i===90||i===270,{fontSize:S,endFontSize:k,centerInset:T}=o0(s,c,a,y,h);let D,O;i===0?(D={left:0,top:0,bottom:0,width:`${f}%`},O={left:0,top:0}):i===180?(D={right:0,top:0,bottom:0,width:`${f}%`},O={right:0,top:0}):i===90?(D={left:0,right:0,bottom:0,height:`${f}%`},O={left:0,bottom:0}):(D={left:0,right:0,top:0,height:`${f}%`},O={left:0,top:0});const V=G=>u.jsx(E0,{name:s,vertical:y,rotation:i,color:G,fontSize:S,endFontSize:k,centerInset:T,lowLabel:p,highLabel:g,showEnds:h});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:V("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:b,overflow:"hidden",...D},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...O},children:V("var(--white)")})})]})}function T0({control:s,disabled:i,latestValue:c,onSlider:a,width:f,height:h}){const b=U.useRef(null),p=s.sliderMin??0,g=s.sliderMax??100,[y,S]=U.useState(()=>c===void 0?Dh(s.sliderRecenter??"none"):Ah(c,p,g)),k=U.useRef(null),T=s.rotation;U.useEffect(()=>{c!==void 0&&(S(Ah(c,p,g)),k.current=c)},[c,p,g]);function D(F){const W=b.current;if(!W)return 0;const q=W.getBoundingClientRect();let re;return T===0?re=(F.clientX-q.left)/q.width:T===180?re=1-(F.clientX-q.left)/q.width:T===90?re=1-(F.clientY-q.top)/q.height:re=(F.clientY-q.top)/q.height,Math.max(0,Math.min(1,re))}function O(F){i||V(D(F))}function V(F){const W=Math.round(F*100),q=Math.round(p+(g-p)*F);S(W),q!==k.current&&(k.current=q,a(s.name,q))}function G(){const F=s.sliderRecenter??"none";i||F==="none"||V(Dh(F)/100)}return u.jsx("div",{ref:b,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:F=>{i||(F.preventDefault(),F.currentTarget.setPointerCapture(F.pointerId),O(F))},onPointerMove:F=>{F.buttons!==0&&O(F)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:u.jsx(v_,{name:s.name,rotation:T,width:f,height:h,value:y,showEnds:!0,lowLabel:String(p),highLabel:String(g)})})}function Dh(s){return s==="bottom"?0:s==="top"?100:s==="middle"?50:0}function Ah(s,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((s-i)/(c-i)*100)))}function Oh(s,i,c){return Math.round(i+(c-i)*(s+1)/2)}function Ch(s,i){return s==="bottom"?i?1:-1:s==="top"?i?-1:1:0}function Bh(s){return{nx:Ch(s.joystickXRecenter,!1),ny:Ch(s.joystickYRecenter,!0)}}function x_(s,i){const c=Math.min(s,i),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function S_({control:s,width:i,height:c,pos:a,dragging:f=!1}){const h=s.rotation,{knobRadius:b,reach:p}=x_(i,c),g=Math.max(7,Math.min(14,b*.62)),y=Math.max(7,Math.min(12,Math.min(i,c)*.1)),S=[{key:"xmax",value:s.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:s.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:s.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:s.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:p*2,height:p*2,transform:"translate(-50%, -50%)"}}),S.map(k=>{const T=cr(k.lx,k.ly,h);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:y,transform:`translate(-50%, -50%) translate(${T.x*p}px, ${T.y*p}px) rotate(${h}deg)`},children:k.value},k.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:b*2,height:b*2,fontSize:g,transform:`translate(calc(-50% + ${a.nx*p}px), calc(-50% + ${a.ny*p}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:s.rotation?`rotate(${s.rotation}deg)`:void 0,whiteSpace:s.rotation===90||s.rotation===270?"nowrap":void 0},children:s.name})})]})}function N0({control:s,disabled:i,onJoystick:c,width:a,height:f}){const h=s.rotation,b=U.useRef(null),[p,g]=U.useState(()=>{const W=Bh(s),q=cr(W.nx,W.ny,h);return{nx:q.x,ny:q.y}}),y=U.useRef(!1),S=U.useRef(null),k=s.joystickXMin??-100,T=s.joystickXMax??100,D=s.joystickYMin??-100,O=s.joystickYMax??100;function V(W,q){const re=cr(W,q,lc(h)),be=Oh(re.x,k,T),me=Oh(-re.y,D,O);(!S.current||S.current.x!==be||S.current.y!==me)&&(S.current={x:be,y:me},c(s.name,be,me))}function G(W){const q=b.current;if(!q)return;const re=q.getBoundingClientRect(),{reach:be}=x_(re.width,re.height);let me=(W.clientX-(re.left+re.width/2))/be,K=(W.clientY-(re.top+re.height/2))/be;const ee=Math.hypot(me,K);ee>1&&(me/=ee,K/=ee),g({nx:me,ny:K}),V(me,K)}function F(){const W=s.joystickXRecenter??"middle",q=s.joystickYRecenter??"middle";if(W==="none"&&q==="none")return;const re=cr(p.nx,p.ny,lc(h)),be=Bh(s),me={x:W==="none"?re.x:be.nx,y:q==="none"?re.y:be.ny},K=cr(me.x,me.y,h),ee={nx:K.x,ny:K.y};y.current=!1,g(ee),V(ee.nx,ee.ny)}return u.jsx("div",{ref:b,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:W=>{i||(W.preventDefault(),W.currentTarget.setPointerCapture(W.pointerId),y.current=!0,G(W))},onPointerMove:W=>{i||!y.current||W.buttons===0||G(W)},onPointerUp:F,onPointerCancel:F,onLostPointerCapture:F,children:u.jsx(S_,{control:s,width:a,height:f,pos:p,dragging:y.current})})}const R0=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],j0="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",M0=.1,D0={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},A0={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},O0=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Gf(s,i){return Math.hypot(s,i)<M0?null:Math.abs(s)>=Math.abs(i)?s>0?"right":"left":i>0?"down":"up"}function C0(s,i){const[c,a]=A0[s],f=cr(c,a,lc(i));return Gf(f.x,f.y)??s}function k_({control:s,active:i=null}){const c=s.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[R0.map(a=>u.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:j0},a.direction)),O0.map(a=>u.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:D0[C0(a.pos,c)]},a.pos))]})})}function B0({control:s,disabled:i,onDpad:c}){const a=U.useRef(null),f=U.useRef(null),h=U.useRef(!1),[b,p]=U.useState(null);function g(T){const D=a.current;if(!D)return{screen:null,logical:null};const O=D.getBoundingClientRect(),V=Math.min(O.width,O.height)/2,G=(T.clientX-(O.left+O.width/2))/V,F=(T.clientY-(O.top+O.height/2))/V,W=Gf(G,F),q=cr(G,F,lc(s.rotation)),re=Gf(q.x,q.y);return{screen:W,logical:re}}function y(T){const D=a.current;if(!D)return!1;const O=D.getBoundingClientRect(),V=(T.clientX-O.left)/O.width,G=(T.clientY-O.top)/O.height;return V>=0&&V<=1&&G>=0&&G<=1}function S(T){T.logical!==f.current&&(f.current&&c(s.name,f.current,!1),f.current=T.logical,T.logical&&c(s.name,T.logical,!0)),p(T.screen)}function k(){h.current=!1,S({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:T=>{i||!y(T)||(T.preventDefault(),T.currentTarget.setPointerCapture(T.pointerId),h.current=!0,S(g(T)))},onPointerMove:T=>{i||!h.current||T.buttons===0||S(g(T))},onPointerUp:k,onPointerCancel:k,onLostPointerCapture:k,children:u.jsx(k_,{control:s,active:b})})}const L0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},z0=["button","slider","toggle","radar","text","joystick","dpad","plot"];function U0({unplaced:s,onAdd:i,onClose:c}){const a=U.useMemo(()=>z0.filter(p=>s.some(g=>g.type===p)),[s]),[f,h]=U.useState(a[0]??"button"),b=s.filter(p=>p.type===f);return U.useEffect(()=>{a.length>0&&!a.includes(f)&&h(a[0])},[a,f]),u.jsxs(At,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(p=>u.jsx("button",{type:"button",className:f===p?"active":"",onClick:()=>h(p),children:L0[p]},p))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):b.map(p=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(p.name),children:[u.jsx("span",{children:p.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(ln,{name:"plus",size:22})})]},p.name))})]})}function w_(s){const[i,c]=U.useState({w:0,h:0}),a=U.useRef(null),f=U.useRef(null);return U.useLayoutEffect(()=>{var g;const h=s.current;if(a.current===h)return;if((g=f.current)==null||g.disconnect(),f.current=null,a.current=h,!h){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const b=()=>{const y={w:h.clientWidth,h:h.clientHeight};c(S=>S.w===y.w&&S.h===y.h?S:y)};b();const p=new ResizeObserver(b);p.observe(h),f.current=p}),U.useEffect(()=>()=>{var h;(h=f.current)==null||h.disconnect(),f.current=null,a.current=null},[]),i}function ys(s){return s.centerX2!==null&&s.centerY2!==null&&s.spanX!==null&&s.spanY!==null}const I0=4,H0=5;function P0(s){return s==="joystick"||s==="dpad"?{spanX:6,spanY:6}:s==="plot"?{spanX:7,spanY:4}:{spanX:I0,spanY:H0}}function Lh(s){if(!ys(s))return null;const i=s.centerX2/2,c=s.centerY2/2;return{x0:i-s.spanX/2,x1:i+s.spanX/2,y0:c-s.spanY/2,y1:c+s.spanY/2}}function F0(s,i,c=.02){return s.x0<i.x1-c&&i.x0<s.x1-c&&s.y0<i.y1-c&&i.y0<s.y1-c}function G0(s,i){return Math.max(1,Math.min(i.cols-1,s))}function V0(s,i){return Math.max(1,Math.min(i.rows-1,s))}function Y0(s,i){return(s-i.margin)/i.stepX}function $0(s,i){return(i.areaH-s-i.margin)/i.stepY}function zh(s,i,c){const a=i%2,h=(s%2+2)%2===a?s:s+1,b=c*2;return Math.max(i,Math.min(b-i,h))}function q0(){const s=le(H=>H.layout),i=le(H=>H.active),c=le(H=>H.saveLayout),a=le(H=>H.setEditMode),f=le(H=>H.askConfirm),h=!!(i!=null&&i.canEdit),[b,p]=U.useState(()=>s.map(H=>({...H}))),[g,y]=U.useState(null),[S,k]=U.useState(!1),[T,D]=U.useState(null),[O,V]=U.useState(null),[G,F]=U.useState(null),[W,q]=U.useState(!1),re=U.useRef(null),be=w_(re),me=be.w>0&&be.h>0,K=u_(be.w,be.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),ee=U.useMemo(()=>me?Ab(K):[],[K,me]),pe=b.filter(ys),ye=b.filter(H=>!ys(H)),De=U.useMemo(()=>{const H=new Set;for(let A=0;A<pe.length;A+=1)for(let ae=A+1;ae<pe.length;ae+=1){const ve=Lh(pe[A]),Be=Lh(pe[ae]);ve&&Be&&F0(ve,Be)&&(H.add(pe[A].name),H.add(pe[ae].name))}return H},[pe]),J=De.size>0,We=U.useMemo(()=>Uh(b)!==Uh(s),[b,s]),Oe=U.useMemo(()=>{if(!T||!O)return null;const H=b.find(ve=>ve.name===T);if(!H||H.spanX===null||H.spanY===null)return null;const A=jf(O.cx,O.cy,H.spanX,H.spanY,K),ae=ps({...H,centerX2:A.centerX2,centerY2:A.centerY2},K);return ae?{name:H.name,rect:ae}:null},[b,T,O,K]);function Pe(H,A){p(ae=>ae.map(ve=>ve.name===H?A(ve):ve))}function I(H){const A=re.current;if(!A)return{x:0,y:0};const ae=A.getBoundingClientRect(),ve=A.clientWidth/ae.width,Be=A.clientHeight/ae.height;return{x:Math.max(0,Math.min(A.clientWidth,(H.clientX-ae.left)*ve)),y:Math.max(0,Math.min(A.clientHeight,(H.clientY-ae.top)*Be))}}function ne(H,A){H.stopPropagation(),y(A.name);const ae=ps(A,K);ae&&(D(A.name),V({cx:ae.cx,cy:ae.cy}),H.currentTarget.setPointerCapture(H.pointerId))}function ue(H){if(T){const{x:A,y:ae}=I(H),ve=b.find(Ae=>Ae.name===T),Be=ve?ps(ve,K):null;if(!Be){V({cx:A,cy:ae});return}const Ge=Be.width/2,_e=Be.height/2;V({cx:Math.max(K.margin+Ge,Math.min(K.areaW-K.margin-Ge,A)),cy:Math.max(K.margin+_e,Math.min(K.areaH-K.margin-_e,ae))});return}if(G){const{x:A,y:ae}=I(H),{name:ve,side:Be,fixedWhole:Ge}=G;Pe(ve,_e=>{if(_e.spanX===null||_e.spanY===null||_e.centerX2===null||_e.centerY2===null)return _e;if(Be==="left"||Be==="right"){const dt=Math.round(Y0(A,K));if(Be==="right"){const $n=Math.max(Ge+1,Math.min(K.cols-1,dt))-Ge;return{..._e,spanX:$n,centerX2:Ge*2+$n}}const $t=Math.min(Ge-1,Math.max(0,dt)),Tt=Ge-$t;return{..._e,spanX:Tt,centerX2:Ge*2-Tt}}const Ae=Math.round($0(ae,K));if(Be==="top"){const $t=Math.max(Ge+1,Math.min(K.rows-1,Ae))-Ge;return{..._e,spanY:$t,centerY2:Ge*2+$t}}const yt=Math.min(Ge-1,Math.max(0,Ae)),Ce=Ge-yt;return{..._e,spanY:Ce,centerY2:Ge*2-Ce}})}}function ce(){if(T&&O){const H=b.find(A=>A.name===T);if(H&&H.spanX!==null&&H.spanY!==null){const A=jf(O.cx,O.cy,H.spanX,H.spanY,K);Pe(T,ae=>({...ae,centerX2:A.centerX2,centerY2:A.centerY2}))}}D(null),V(null),F(null)}function we(H,A,ae){if(H.stopPropagation(),A.centerX2===null||A.centerY2===null||A.spanX===null||A.spanY===null)return;const ve=(A.centerX2-A.spanX)/2,Be=(A.centerX2+A.spanX)/2,Ge=(A.centerY2-A.spanY)/2,_e=(A.centerY2+A.spanY)/2,Ae=ae==="right"?ve:ae==="left"?Be:ae==="top"?Ge:_e;y(A.name),F({name:A.name,side:ae,fixedWhole:Ae}),H.currentTarget.setPointerCapture(H.pointerId)}function E(H){Pe(H,A=>{const ae=(A.rotation+270)%360;if(A.spanX===null||A.spanY===null||A.centerX2===null||A.centerY2===null)return{...A,rotation:ae};const ve=G0(A.spanY,K),Be=V0(A.spanX,K);return{...A,rotation:ae,spanX:ve,spanY:Be,centerX2:zh(A.centerX2,ve,K.cols-1),centerY2:zh(A.centerY2,Be,K.rows-1)}})}function L(H){Pe(H,A=>({...A,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function te(H){k(!1);const A=b.find(Ge=>Ge.name===H);if(!A)return;const{spanX:ae,spanY:ve}=P0(A.type),Be=jf(K.areaW/2,K.areaH/2,ae,ve,K);Pe(H,()=>({...A,spanX:ae,spanY:ve,rotation:0,centerX2:Be.centerX2,centerY2:Be.centerY2})),y(H)}async function oe(){J||(q(!0),await c(b),q(!1))}function xe(){if(!We){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:re,style:{touchAction:"none"},onPointerMove:ue,onPointerUp:ce,onPointerDown:()=>y(null),children:me&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:K.areaW,height:K.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:ee.map((H,A)=>u.jsx("circle",{cx:H.x,cy:H.y,r:2.5,fill:"rgba(198,80,78,0.45)"},A))}),Oe&&u.jsx("div",{className:"snap-preview",style:{left:Oe.rect.cx,top:Oe.rect.cy,width:Oe.rect.width,height:Oe.rect.height}}),pe.map(H=>{const A=T===H.name&&O,ae=ps(H,K);if(!ae)return null;const ve=A?O.cx:ae.cx,Be=A?O.cy:ae.cy,Ge=g===H.name,_e={left:ve,top:Be,width:ae.width,height:ae.height,outline:Ge?"3px solid var(--text)":"none",outlineOffset:2,zIndex:Ge?2:1};return u.jsxs("div",{className:`control ${De.has(H.name)?"colliding":""}`,style:_e,onPointerDown:Ae=>ne(Ae,H),children:[H.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(ic,{name:H.name,width:ae.width,height:ae.height,rotation:H.rotation})}):H.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(ic,{name:H.name,width:ae.width,height:ae.height,rotation:H.rotation})}):H.type==="radar"?u.jsx(g_,{control:H,pings:[],width:ae.width,height:ae.height,preview:!0}):H.type==="plot"?u.jsx(y_,{control:H,points:[],width:ae.width,height:ae.height,preview:!0}):H.type==="text"?u.jsx(__,{message:H.name,width:ae.width,height:ae.height,rotation:H.rotation}):H.type==="joystick"?u.jsx(S_,{control:H,width:ae.width,height:ae.height,pos:{nx:0,ny:0}}):H.type==="dpad"?u.jsx(k_,{control:H}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(v_,{name:H.name,rotation:H.rotation,width:ae.width,height:ae.height,value:50,showEnds:!0,lowLabel:String(H.sliderMin??0),highLabel:String(H.sliderMax??100),fillColor:De.has(H.name)?"var(--disabled)":"var(--red)"})}),Ge&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:Ae=>we(Ae,H,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:Ae=>we(Ae,H,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:Ae=>we(Ae,H,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:Ae=>we(Ae,H,"right")}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-rotate","aria-label":"Roter",title:"Roter",onPointerDown:Ae=>Ae.stopPropagation(),onClick:()=>E(H.name),children:"⟲"}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-remove","aria-label":"Fjern fra layout",title:"Fjern fra layout",onPointerDown:Ae=>Ae.stopPropagation(),onClick:()=>L(H.name),children:u.jsx(ln,{name:"delete",size:16})})]})]},H.name)}),h&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:H=>H.stopPropagation(),onClick:()=>k(!0),"aria-label":"Tilføj kontrol",children:u.jsx(ln,{name:"plus",size:24})}),W&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:xe,disabled:W,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:oe,disabled:J||W,children:W?"Gemmer...":"Gem"})]}),S&&u.jsx(U0,{unplaced:ye,onAdd:te,onClose:()=>k(!1)})]})}function Uh(s){return JSON.stringify(s.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function X0(){const s=le(q=>q.layout),i=le(q=>q.editMode),c=le(q=>q.active),a=le(q=>q.sliderValues),f=le(q=>q.toggleValues),h=le(q=>q.radarPings),b=le(q=>q.textValues),p=le(q=>q.plotSeries),g=le(q=>q.toggleSideMenu),y=le(q=>q.sendButton),S=le(q=>q.sendSlider),k=le(q=>q.sendToggle),T=le(q=>q.sendJoystick),D=le(q=>q.sendDpad),O=U.useRef(null),V=w_(O),G=u_(V.w,V.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),F=V.w>0&&V.h>0,W=s.filter(ys);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(td,{title:"Pico Kontrol Panel",onMenu:()=>g()}),i?u.jsx(q0,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:O,children:F?W.map(q=>{const re=ps(q,G);return re?u.jsx(c0,{control:q,rect:re,disabled:!1,latestValue:q.type==="slider"?a[q.name]:void 0,toggleValue:q.type==="toggle"?f[q.name]:void 0,radarPings:q.type==="radar"?h[q.name]:void 0,textValue:q.type==="text"?b[q.name]:void 0,plotPoints:q.type==="plot"?p[q.name]:void 0,onButton:y,onSlider:S,onToggle:k,onJoystick:T,onDpad:D},q.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const K0="",Ih="",Hh="",sr="";function us(s){return new Promise(i=>setTimeout(i,s))}class Q0{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Hh),await us(80),await this.transport.write(Hh)}async friendlyRepl(){await this.transport.write(Ih)}async softReset(){await this.transport.write(sr)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await us(180)}),await us(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await us(80),await this.transport.write(`\r
`),await us(40),!(await this.collectUntil(async()=>{await this.transport.write(K0)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(sr)},f=>f.includes(`${sr}${sr}`)||f.includes(`${sr}>`),c);return await this.friendlyRepl().catch(()=>{}),W0(a)}collectUntil(i,c,a){return new Promise((f,h)=>{let b="",p=null;const g=setTimeout(()=>{p==null||p(),h(new Error("Timeout ved USB REPL kommando."))},a);p=this.transport.addDataListener(y=>{b+=y,c(b)&&(clearTimeout(g),p==null||p(),f(b))}),i().catch(y=>{clearTimeout(g),p==null||p(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Ih)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function W0(s){const i=s.indexOf("OK"),c=s.indexOf(sr,i>=0?i:0),a=c>=0?s.indexOf(sr,c+1):-1;if(i<0||c<0)return{output:s.trim(),error:"",raw:s};const f=s.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),h=a>=0?s.slice(c+1,a).trim():"";return{output:f,error:h,raw:s}}const Z0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],J0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],ji=J0.flatMap(({board:s,firmwareName:i})=>Z0.map(({version:c,date:a,stamp:f,tag:h})=>{const b=`${i}-${f}-${h}.uf2`;return{board:s,version:c,date:a,fileName:b,url:`https://micropython.org/resources/firmware/${b}`}})),Bf=512,Lf=`import builtins as _pkp_builtins
`;function Fl(s){return JSON.stringify(s)}function ey(s){return`bytes.fromhex(${JSON.stringify([...s].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function ty(s,i){return`${s==="/"?"":s.replace(/\/$/,"")}/${i}`}class ny{constructor(i){this.repl=i}async list(i="/"){const c=`
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
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[h,b,p]=f.split("	"),g=b==="dir"||b==="file"?b:"unknown",y=parseInt(p??"",10);return{name:h,path:ty(i,h),type:g,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const c=`
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
# Graferne starter tomme og fyldes kun med rigtige målinger, én ad gangen, i
# takt med OPDATER_HVERT_MS herunder - der hentes ingen historik fra Open-Meteo,
# så alt i graferne er noget Picoen faktisk selv har målt/hentet. Med
# standardværdierne tager det derfor HISTORY_POINTS minutter at fylde en graf.
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
# linjer), så graferne kan genskabes med det samme ved næste forbindelse/reboot
# uden at hente noget fra Open-Meteo igen - det er stadig kun Picoens egne,
# tidligere hentede målinger, ikke Open-Meteos historik. Hold HISTORY_POINTS
# under ca. 19 (2 grafer x punkter, sendt fra on_connect): PicoBluetooth.py
# smider ellers de ældste af de genskabte punkter væk, fordi telemetri sendt
# før appen er klar kun bufres op til MAX_PENDING_TELEMETRY (40) linjer.
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

    Kører i samme takt som API-eksemplet (hvert 60. sekund). Forskellen er, at
    dette eksempel husker værdierne over tid ved at sende dem til plot-felterne
    i stedet for kun at vise det seneste tal i et tekstfelt.
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
    # Genskab graferne fra Picoens egne, tidligere hentede målinger med det
    # samme - hurtigt og uden Wi-Fi, så det er trygt at gøre her i selve
    # Bluetooth-afbrydelsen (se send_plot's telemetri-buffer i PicoBluetooth.py).
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
    if ble.connected and time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:
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
`,Vy=500,Yy=1200,fs="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Yt(s,i){return`${s}:${i}`}function $y(s){return new Promise(i=>window.setTimeout(i,s))}function qy(){const s=le(d=>d.toggleSideMenu),i=le(d=>d.askConfirm),c=le(d=>d.picoIdeOrigin),a=le(d=>d.active),f=le(d=>d.isBleConnected),h=le(d=>d.bleListFiles),b=le(d=>d.bleReadText),p=le(d=>d.bleWriteText),g=le(d=>d.bleDeleteFile),y=le(d=>d.bleRestartAndReconnect),[S,k]=U.useState(!1),[T,D]=U.useState(!1),[O,V]=U.useState([]),[G,F]=U.useState(!1),[W,q]=U.useState([]),[re,be]=U.useState(null),[me,K]=U.useState(()=>Qo(qo())),[ee,pe]=U.useState($f),[ye,De]=U.useState("local"),[J,We]=U.useState(()=>{var d;return((d=Qo(qo()).find(_=>_.path===$f))==null?void 0:d.content)??j_}),[Oe,Pe]=U.useState([]),[I,ne]=U.useState(!1),[ue,ce]=U.useState(""),[we,E]=U.useState(""),[L,te]=U.useState(null),[oe,xe]=U.useState(!1),[H,A]=U.useState(null),[ae,ve]=U.useState(!1),[Be,Ge]=U.useState({}),[_e,Ae]=U.useState(!1),[yt,Ce]=U.useState(0),[dt,$t]=U.useState(()=>{var d,_;return((d=ji.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((_=ji[0])==null?void 0:_.board)??""}),[Tt,fl]=U.useState(()=>{var d,_;return((d=ji.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((_=ji[0])==null?void 0:_.version)??""}),[$n,Mn]=U.useState(!1),[ur,Gl]=U.useState({top:0,left:0}),[vt,Ai]=U.useState(!1),[Vl,sa]=U.useState(!1),[Oi,en]=U.useState(!0),[mn,nl]=U.useState(""),[fr,Ci]=U.useState([]),[Nt,pn]=U.useState(null),[Lt,Yl]=U.useState(!1),[dl,ml]=U.useState({}),[hn,qt]=U.useState({}),[qe,it]=U.useState(null),[rt,Ot]=U.useState(null),[fc,Bi]=U.useState(""),[ll,Li]=U.useState(()=>_h().clearTerminalOnRun),[pl,vs]=U.useState(()=>_h().simplifiedErrors),[dr,xs]=U.useState(()=>typeof navigator<"u"?Kh(navigator):!1),$l=U.useRef(null),Dn=U.useRef(null),ot=U.useRef(null),oa=U.useRef(null),zt=U.useRef(null),_t=U.useRef(null),Ct=U.useRef(null),qn=U.useRef(null),ql=U.useRef(null),Xl=U.useRef(null),mr=U.useRef(null),_n=U.useRef(!1),gn=U.useRef(!1),hl=U.useRef(!1),Xt=U.useRef(""),bn=U.useRef(null),Xn=U.useRef(null),rn=U.useRef(null),mt=U.useRef(null),Kn=U.useRef(null),Kl=U.useRef(null),tn=U.useRef(0),yn=U.useRef(null),Ql=U.useRef(null),ca=U.useRef(null),Wl=U.useRef(null),pr=U.useRef([]),_l=U.useRef([]),Qn=U.useRef(null),Kt=vy(),he=c==="control"&&!!a&&f(),hr=he?(a==null?void 0:a.deviceID)??"ble":null,dc=Math.max(1,J.split(`
`).length),ua=new Blob([J]).size,Ss=ye==="pico"?"Picoen":"browseren",_r=U.useMemo(()=>[...new Set(ji.map(d=>d.board))],[]),zi=U.useMemo(()=>ji.filter(d=>d.board===dt),[dt]),Rt=ji.find(d=>d.board===dt&&d.version===Tt)??zi[0]??ji[0],Ui=G||!!re||vt||Vl,vn=ye==="pico",Ii=vn?vt:Vl,jt=vn&&vt&&S&&!he||!vn&&Vl&&!!rn.current,ks=Lt||Ii&&!jt,ws=jt?"stdin":">>>",gl=jt?vn?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":vn?"Pico MicroPython":"Browser-MicroPython",fa=U.useMemo(()=>{const d=new xy({onData:_=>{gn.current||!_n.current||(Xt.current=(Xt.current+_).slice(-240),/(^|\r?\n)>>> ?$/.test(Xt.current)&&Pi())},onLine:_=>{if(gn.current)return;const x=_.trimEnd();if(hl.current&&x.trim()){Y("info",x);return}if(_n.current&&da(x)){Pi();return}_n.current&&x.trim()&&!mc(x)&&!x.includes("raw REPL")&&Y("info",x)},onLog:Y,onDisconnect:()=>{k(!1),Ai(!1),Yl(!1),_n.current=!1,hl.current=!1,Hi(),Xt.current="",ti(),Y("warning","USB-forbindelse lukket.")}});return $l.current=d,d},[]);function Y(d,_){V(x=>[...x.slice(-140),{level:d,text:_}])}function Es(d){V(_=>[..._.slice(-140),{level:"info",text:d,variant:"input"}])}function da(d){return d.trim()===">>>"}function mc(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Hi(){bn.current!==null&&(window.clearTimeout(bn.current),bn.current=null)}function Pi(){!_n.current||bn.current!==null||(bn.current=window.setTimeout(()=>{bn.current=null,_n.current&&(Ai(!1),_n.current=!1,Xt.current="",Y("success","Pico-koden er færdig."),An())},0))}function An(){const d=ot.current;d&&ha(d,!1)}function Zl(d,_=J,x="error"){const R=By(d,_);V(j=>[...j.slice(-140),{level:x,text:R.simple,technical:R.technical}])}function ct(d,_,x=ye){pe(d),De(x),We(_),qt(R=>({...R,[Yt(x,d)]:_})),Wn()}function bl(d,_="pico"){pe(d),De(_),We(""),it(null),Gl({top:0,left:0}),Wn()}function Wn(){pr.current=[],_l.current=[],Qn.current=null}function Jl(){const d=zt.current;return{content:J,selectionStart:(d==null?void 0:d.selectionStart)??J.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??J.length}}function ma(d){const _=pr.current,x=_.at(-1);(x==null?void 0:x.content)===d.content&&x.selectionStart===d.selectionStart&&x.selectionEnd===d.selectionEnd||(_.push(d),_.length>Vy&&_.shift(),_l.current=[])}function Ts(d,_){let x=0;const R=Math.min(d.length,_.length);for(;x<R&&d[x]===_[x];)x+=1;let j=d.length,Z=_.length;for(;j>x&&Z>x&&d[j-1]===_[Z-1];)j-=1,Z-=1;const se=d.slice(x,j),Ve=_.slice(x,Z),Ee=Ve&&!se?"insert":se&&!Ve?"delete":"replace",Le=Ve.at(-1)??"";return{kind:Ee,boundaryAfter:Ee==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(Le)}}function Fi(d,_){if(_!=="typing")return Qn.current=null,!0;const x=Date.now(),R=Ts(J,d),j=Qn.current,Z=j!==null&&j.path===ee&&j.source===ye&&j.kind===R.kind&&j.kind!=="replace"&&!j.boundaryAfter&&x-j.at<=Yy;return Qn.current={path:ee,source:ye,kind:R.kind,at:x,boundaryAfter:R.boundaryAfter},!Z}function On(d){We(d.content),qt(_=>({..._,[Yt(ye,ee)]:d.content})),Bi(""),it(null),window.requestAnimationFrame(()=>{const _=zt.current;_&&(_.focus(),_.selectionStart=Math.min(d.selectionStart,d.content.length),_.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function pa(){const d=pr.current.pop();return d?(Qn.current=null,_l.current.push(Jl()),On(d),!0):!1}function ei(){const d=_l.current.pop();return d?(Qn.current=null,pr.current.push(Jl()),On(d),!0):!1}function Ut(d,_=(Z=>(Z=zt.current)==null?void 0:Z.selectionStart)()??d.length,x=Jl(),R=_,j="programmatic"){x&&d!==J&&Fi(d,j)&&ma(x),We(d),qt(se=>({...se,[Yt(ye,ee)]:d})),Bi(""),wr(d,_),window.requestAnimationFrame(()=>{const se=zt.current;se&&(se.selectionStart=Math.min(_,d.length),se.selectionEnd=Math.min(R,d.length))})}function yl(d,_=ye){qt(x=>{const R=Yt(_,d);if(!(R in x))return x;const j={...x};return delete j[R],j})}function gr(){return dl[ee]===J}function It(d,_){ml(x=>({...x,[d]:_}))}function Gi(d,_){It(d,_),qt(x=>({...x,[Yt("pico",d)]:_})),ye==="pico"&&ee===d&&We(_)}function ti(){q([]),Pe([]),ml({}),qt({}),it(null),pe(d=>{const _=Qo(qo());if(_.find(j=>j.path===d))return d;const R=_[0];return De("local"),We(R.content),Wn(),R.path})}function Mt(d){xt(),A({value:100,label:d}),Wl.current=window.setTimeout(()=>{Wl.current=null,A(null)},900)}function xt(){Wl.current!==null&&(window.clearTimeout(Wl.current),Wl.current=null)}function vl(){return H?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(H.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:H.label}),u.jsxs("strong",{children:[Math.round(H.value),"%"]}),H.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:br,"aria-label":"Stop handling",title:"Stop",children:u.jsx(ln,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,H.value))}%`}})})]}):null}function br(){Kn.current&&Zn("Stopper læsning...",!0,!0)}function Zn(d="Stopper læsning...",_=!1,x=!1){var R;xt(),Ql.current=null,tn.current+=1,(R=Kn.current)==null||R.abort(),Kn.current=null,yn.current=null,be(null),F(!1),A(_?{value:(H==null?void 0:H.value)??0,label:d,cancellable:!1}:null),x&&Y("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function pc(d){var _;if(!(yn.current===d||Ql.current===d)){if(Ql.current=d,Kl.current){tn.current+=1,(_=Kn.current)==null||_.abort(),Kn.current=null,yn.current=null,bl(d),be(d),F(!0),xt(),A({value:2,label:`Skifter til ${Ne(d)}...`,cancellable:!0});return}yr()}}function yr(){if(Kl.current)return;const d=Ql.current;if(!d)return;Ql.current=null;const _=tn.current+1;tn.current=_;const x=new AbortController;Kn.current=x,yn.current=d,bl(d),be(d),F(!0),xt(),A({value:12,label:`Indlæser ${Ne(d)}...`,cancellable:!0});const R=(async()=>{try{const j=await b(d,(Z,se)=>{tn.current===_&&A({value:Z,label:se,cancellable:!0})},x.signal);if(x.signal.aborted||tn.current!==_)return;ct(d,j,"pico"),It(d,j),Mt("Fil indlæst")}catch(j){if(tn.current!==_)return;Qy(j)||x.signal.aborted?Y("info",`Stoppede læsning af ${Ne(d)}.`):(A(null),Y("error",j instanceof Error?j.message:"BLE læsning fejlede."))}})();Kl.current=R,R.finally(()=>{if(Kl.current!==R)return;Kl.current=null,Kn.current===x&&(Kn.current=null),yn.current===d&&(yn.current=null),!!Ql.current||(be(null),F(!1),x.signal.aborted&&A(null)),yr()})}async function ni(d){const _=gn.current;gn.current=!0;try{return await d()}finally{gn.current=_}}U.useEffect(()=>{if(!Oi)return;const d=ql.current;d&&(d.scrollTop=d.scrollHeight)},[O,Oi]),U.useEffect(()=>{yb({clearTerminalOnRun:ll,simplifiedErrors:pl})},[ll,pl]),U.useEffect(()=>{var d;zi.some(_=>_.version===Tt)||fl(((d=zi[0])==null?void 0:d.version)??"")},[zi,Tt]),U.useEffect(()=>{xs(Kh(navigator))},[]),U.useEffect(()=>{const d=()=>{const _=$l.current;Dn.current=null,ot.current=null,$l.current=null,_==null||_.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var _,x;xt(),(_=Xn.current)==null||_.dispose(),Xn.current=null,(x=rn.current)==null||x.dispose(),rn.current=null,window.removeEventListener("pagehide",d),d()}},[]),U.useEffect(()=>{const d=_=>{!(_.ctrlKey||_.metaKey)||_.key.toLowerCase()!=="s"||(_.preventDefault(),!G&&ee.trim()&&!dr&&!oe&&!L&&!I&&js())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ye,he,G,S,J,ee,dr,oe,L,I]);function il(d,_,x){K(R=>{const j=Uf(R,d,_,x);return ss(j),j})}function Vi(d,_){K(x=>{const R=x.find(Ee=>Ee.path===d),Z=hn[Yt("local",d)]??(R==null?void 0:R.content),se=Z!==void 0&&ul(Z)!==ul(_)?Uf(x,e_(d,Jo(x)),Z,!1):x,Ve=Uf(se,d,_,!1);return ss(Ve),Ve}),qt(x=>({...x,[Yt("local",d)]:_})),ye==="local"&&ee===d&&(We(_),Bi(""),it(null),Wn())}const vr=fv(W,me,hn,S||he);U.useEffect(()=>{he&&ut()},[he]),U.useEffect(()=>{const d=ca.current;d&&d!==hr&&ti(),ca.current=hr},[hr]);async function hc(){if(Kt.supported){D(!0);try{await fa.requestAndConnect();const d=new Q0(fa);Dn.current=d,ot.current=new ny(d),k(!0),Ce(0),await d.interrupt(),await _c(d),Y("success","Sendte stop-signal til Pico-terminalen."),await ha(ot.current),await Rs(ot.current)}catch(d){Y("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await fa.disconnect()}catch(_){Y("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.");return}Ce(_=>{const x=_+1;return x>=3&&(Y("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Ae(!0)),x}),k(!1)}finally{D(!1)}}}async function _c(d){const _=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(_.error||!_.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function gc(){var d;try{await((d=$l.current)==null?void 0:d.disconnect()),Dn.current=null,ot.current=null,k(!1),ti()}catch(_){Y("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.")}}async function an(d){const _=ot.current;if(_){F(!0),gn.current=!0;try{await d(_)}catch(x){A(null),Y("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{gn.current=!1,F(!1)}}}async function ut(d=!0){if(he){F(!0);try{const _=await h();q(_),d&&Y("success",`Indlæste ${_.length} filer fra Pico via Bluetooth.`)}catch(_){Y("error",_ instanceof Error?_.message:"BLE filhandling fejlede.")}finally{F(!1)}return}await ha(ot.current,d)}async function ha(d,_=!0){if(d){F(!0);try{const x=await ni(()=>d.list("/"));q(x),_&&Y("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){Y("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{F(!1)}}}async function Yi(){if(he){F(!0),A({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Ns((_,x)=>A({value:_,label:x}));Pe(d),Mt("Fil-tjek færdigt")}catch(d){A(null),Y("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{F(!1)}return}await Rs(ot.current)}async function Ns(d){const _=[],x=Jr.filter(j=>j.kind==="library"&&!Mi(j));let R=0;for(const j of Jr){if(j.kind==="program"){_.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Mi(j)){_.push({...j,status:"unknown",detail:"Opdateres via USB"});continue}try{const Z=R/Math.max(1,x.length)*100,se=100/Math.max(1,x.length);Y("info",`Tjekker ${j.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,Z),`Tjekker ${j.label} på Pico...`);const Ve=await b(j.path,(Le,ft)=>{d==null||d(Math.min(95,Z+Le/100*se),`${j.label}: ${ft}`)}),Ee=ul(Ve)===ul(j.content);_.push({...j,status:Ee?"ok":"outdated",detail:Ee?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{_.push({...j,status:"missing",detail:"Mangler på Pico"})}finally{R+=1}}return d==null||d(100,"Fil-tjek færdigt"),_}async function Rs(d){if(d){F(!0);try{const _=await ni(()=>_a(d)),x=_;Pe(x)}catch(_){Y("error",_ instanceof Error?_.message:"Runtime check fejlede.")}finally{F(!1)}}}async function _a(d){if(!d)return[];const _=[];for(const x of Jr){if(x.kind==="program"){_.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const R=await d.readText(x.path),j=ul(R)===ul(x.content);_.push({...x,status:j?"ok":"outdated",detail:j?"Matcher appens version":"Matcher ikke appens version"})}catch{_.push({...x,status:"missing",detail:"Mangler på Pico"})}}return _}async function bc(d=ee){if(he){pc(d);return}be(d),await an(async _=>{A({value:12,label:`Indlæser ${Ne(d)}...`});const x=await yc(_,d);ct(d,x,"pico"),It(d,x),Mt("Fil indlæst")}),be(null)}async function yc(d,_){var x;try{return await d.readText(_)}catch(R){await((x=Dn.current)==null?void 0:x.stop().catch(()=>{})),await $y(120);try{return await d.readText(_)}catch{throw R}}}function vc(){xe(!0)}async function js(){if(ye==="pico"){if(!S&&!he){Y("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await ga();return}xr()}function xr(){if(Di(ee)){Y("error",fs);return}il(ee,J,!1),De("local"),qt(d=>({...d,[Yt("local",ee)]:J})),xe(!1),Y("success",`Gemte ${Ne(ee)} lokalt.`)}async function ga(){if(xe(!1),Di(ee))return A(null),Y("error",fs),!1;if(A({value:0,label:"Starter gemning..."}),he){F(!0);try{return await p(ee,J,(_,x)=>A({value:_,label:x})),It(ee,J),De("pico"),qt(_=>({..._,[Yt("pico",ee)]:J})),Mt("Gemt på Pico via Bluetooth"),Y("success",`Gemte ${Ne(ee)} på Pico via Bluetooth.`),Ko(ee)&&(Mn(!0),Y("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await ut(!1),!0}catch(_){return A(null),Y("error",_ instanceof Error?_.message:"BLE gem fejlede."),!1}finally{F(!1)}}if(!ot.current)return A(null),!1;let d=!1;return await an(async _=>{xl(ee,"pico")?await _.replaceTextSafely(ee,J,(x,R)=>A({value:x,label:R})):await _.writeText(ee,J,(x,R)=>A({value:x,label:R})),It(ee,J),De("pico"),qt(x=>({...x,[Yt("pico",ee)]:J})),Mt("Gemt på Pico via USB"),Y("success",`Gemte ${ee}.`),await ut(),await Yi(),d=!0}),d}function xc(){Ms(Ne(ee),J),xe(!1),Y("success",`Downloadede ${Ne(ee)}.`)}function Ms(d,_){const x=new Blob([_],{type:"text/plain;charset=utf-8"}),R=URL.createObjectURL(x),j=document.createElement("a");j.href=R,j.download=d,j.click(),URL.revokeObjectURL(R)}async function ba(d){F(!0),Mn(!1),A({value:10,label:"Genstarter Pico..."});try{await y(d)?(Mt("Pico genforbundet"),Y("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await ut()):(A(null),Y("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(_){A(null),Y("error",_ instanceof Error?_.message:"Genstart/genforbindelse mislykkedes.")}finally{F(!1)}}function Ds(d){var Z,se;const _=d??{path:ee,source:ye},x=_.source==="pico"?"Pico":"browser",R=(d==null?void 0:d.versions.length)??(_.source==="pico"?((Z=ea(W).get(_.path))==null?void 0:Z.length)??0:((se=ea(Jo(me)).get(_.path))==null?void 0:se.length)??0),j=R>0?` Det sletter også filens versionshistorik (${R} gemte versioner).`:"";te(null),i({title:"Slet fil",message:`Vil du slette ${Ne(_.path)} fra ${x}?${j}`,confirmLabel:"Slet",onConfirm:()=>{wc(_)}})}function Sc(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{kc()}})}async function kc(){if(!ot.current){Y("error","Forbind Picoen med USB først.");return}await an(async d=>{await d.delete("/DeviceSettings.txt").catch(_=>{const x=_ instanceof Error?_.message:"";if(!/ENOENT|No such file|not found/i.test(x))throw _}),ml(_=>{const x={..._};return delete x["/DeviceSettings.txt"],x}),yl("/DeviceSettings.txt","pico"),Y("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await ut()})}function As(d,_,x){const R=vr.filter(se=>se.kind==="file"&&se.type==="file"),j=R.findIndex(se=>se.path===d&&se.source===_);if(j===-1)return null;const Z=se=>!!se&&!(se.path===d&&se.source===_)&&!(se.source===_&&x.has(se.path))&&!(he&&Mi(se));for(const se of[!0,!1])for(let Ve=1;Ve<R.length;Ve+=1){const Ee=R[j+Ve];if(Z(Ee)&&(!se||Ee.source===_))return Ee;const Le=R[j-Ve];if(Z(Le)&&(!se||Le.source===_))return Le}return null}function ya(d){if(d){zs(d);return}const _=Qo(qo())[0];ct(_.path,hn[Yt("local",_.path)]??_.content,"local")}async function wc(d){const _=d.path,x=d.source,R=_===ee&&x===ye;if(x==="local"){const Ee=ea(Jo(me)).get(_)??[],Le=new Set([_,...Ee.map(at=>at.path)]),ft=R?As(_,x,Le):null,Qt=me.filter(at=>!Le.has(at.path));K(Qt),ss(Qt);for(const at of Le)yl(at,"local");R&&ya(ft);const je=Ee.length>0?` og ${Ee.length} gemte versioner`:"";Y("warning",`Slettede ${Ne(_)}${je} fra browseren.`);return}const j=ea(W).get(_)??[],Z=[_,...j.map(Ee=>Ee.path)],se=R?As(_,x,new Set(Z)):null;if(he){F(!0);try{for(const Le of Z)await g(Le);ml(Le=>{const ft={...Le};for(const Qt of Z)delete ft[Qt];return ft});for(const Le of Z)yl(Le,"pico");const Ee=j.length>0?` og ${j.length} gemte versioner`:"";Y("warning",`Slettede ${Ne(_)}${Ee} på Pico via Bluetooth.`),await ut(),R&&ya(se)}catch(Ee){Y("error",Ee instanceof Error?Ee.message:"BLE sletning fejlede.")}finally{F(!1)}return}if(!ot.current){Y("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Ve=!1;await an(async Ee=>{for(const ft of Z)await Ee.delete(ft);ml(ft=>{const Qt={...ft};for(const je of Z)delete Qt[je];return Qt});const Le=j.length>0?` og ${j.length} gemte versioner`:"";Y("warning",`Slettede ${_}${Le}.`);for(const ft of Z)yl(ft,"pico");await ut(),await Yi(),Ve=!0}),Ve&&R&&ya(se)}async function Ec(d){if(!d)return;const _=Xy(d.name);if(!_){Y("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Di(_)){Y("error",fs);return}if(d.size>128*1024){Y("error","Filen er for stor til Pico-værkstedet.");return}const x=await d.text();if(ye==="local"){il(_,x,!0),ct(_,x,"local"),Y("success",`Importerede ${Ne(_)} i browseren.`);return}if(!S&&!he){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&Mi({path:_})){Y("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(A({value:0,label:"Uploader fil til Pico..."}),he){F(!0);try{await p(_,x,(j,Z)=>A({value:j,label:Z})),It(_,x),ct(_,x,"pico"),Mt("Fil uploadet til Pico"),Y("success",`Importerede ${Ne(_)} på Pico via Bluetooth.`),await ut()}catch(j){A(null),Y("error",j instanceof Error?j.message:"Kunne ikke importere filen til Pico.")}finally{F(!1)}return}if(!ot.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await an(async j=>{xl(_,"pico")?await j.replaceTextSafely(_,x,(Z,se)=>A({value:Z,label:se})):await j.writeText(_,x,(Z,se)=>A({value:Z,label:se})),It(_,x),ct(_,x,"pico"),Mt("Fil uploadet til Pico"),Y("success",`Importerede ${Ne(_)} på Pico.`),await ut(),await Yi()})}async function Tc(){ce(""),ne(!0)}function Nc(){const d=$h(ue);if(!d)return;if(Di(d)){Y("error",fs);return}const _=ye;if(xl(d,_)){Y("error",`Der findes allerede en fil med navnet ${Ne(d)} i ${_==="pico"?"Pico":"browseren"}.`);return}if(_==="local"){il(d,"",!1),ct(d,"","local"),ne(!1),Y("success",`Oprettede ${Ne(d)} i browseren.`);return}va(d)}async function va(d){if(!S&&!he){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ne(!1),A({value:0,label:"Opretter fil på Pico..."}),he){F(!0);try{await p(d,"",(_,x)=>A({value:_,label:x})),It(d,""),ct(d,"","pico"),Mt("Fil oprettet på Pico"),Y("success",`Oprettede ${Ne(d)} på Pico via Bluetooth.`),await ut()}catch(_){A(null),Y("error",_ instanceof Error?_.message:"Kunne ikke oprette fil på Pico.")}finally{F(!1)}return}if(!ot.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await an(async _=>{await _.writeText(d,"",(x,R)=>A({value:x,label:R})),It(d,""),ct(d,"","pico"),Mt("Fil oprettet på Pico"),Y("success",`Oprettede ${Ne(d)} på Pico.`),await ut()})}function $i(d){d.type==="file"&&(te(d),E(Ky(d.path)))}async function Rc(d){if(!L)return;const _=L.path;if(te(null),L.source==="local"){const x=me.find(R=>R.path===d.path);if(!x){Y("error","Kunne ikke finde versionen i browseren.");return}Vi(_,x.content),ct(_,x.content,"local"),Y("success",`Gendannede ${Ne(d.path)} i browseren.`);return}if(A({value:0,label:"Gendanner version..."}),he){F(!0);try{const x=await b(d.path);await p(_,x,(R,j)=>A({value:R,label:j})),It(_,x),ct(_,x,"pico"),Mt("Version gendannet"),await ut(!1)}catch(x){A(null),Y("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{F(!1)}return}ot.current&&await an(async x=>{await x.replaceTextSafely(_,await x.readText(d.path),(j,Z)=>A({value:j,label:Z}));const R=await x.readText(_);It(_,R),ct(_,R,"pico"),Mt("Version gendannet"),await ut()})}function Os(d){const _=(L==null?void 0:L.source)==="local"?"browseren":"Pico";i({title:"Slet version",message:`Vil du slette ${Ne(d.path)} fra ${_}?`,confirmLabel:"Slet",onConfirm:()=>{Cs(d)}})}async function Cs(d){if((L==null?void 0:L.source)==="local"){const _=me.filter(x=>x.path!==d.path);K(_),ss(_),yl(d.path,"local"),te(x=>x&&{...x,versions:x.versions.filter(R=>R.path!==d.path)}),Y("warning",`Slettede ${Ne(d.path)} fra browserens versionshistorik.`);return}if(he){F(!0);try{await g(d.path),await ut(!1),te(_=>_&&{..._,versions:_.versions.filter(x=>x.path!==d.path)})}catch(_){Y("error",_ instanceof Error?_.message:"Kunne ikke slette versionen.")}finally{F(!1)}return}ot.current&&await an(async _=>{await _.delete(d.path),await ut(!1),te(x=>x&&{...x,versions:x.versions.filter(R=>R.path!==d.path)})})}async function Bs(){var x;if(!L)return;const d=L,_=cv(d.path,R=>xl(R,d.source));if(!_){Y("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Ne(d.path)}.`);return}if(d.source==="local"){const R=hn[Yt("local",d.path)]??((x=me.find(j=>j.path===d.path))==null?void 0:x.content)??"";il(_,R,!1),ct(_,R,"local"),te(null),Y("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} i browseren.`);return}if(te(null),A({value:0,label:"Duplikerer fil..."}),he){F(!0);try{const R=dl[d.path]??await b(d.path);await p(_,R,(j,Z)=>A({value:j,label:Z})),It(_,R),ct(_,R,"pico"),Mt("Fil duplikeret"),await ut(!1),Y("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} på Pico via Bluetooth.`)}catch(R){A(null),Y("error",R instanceof Error?R.message:"Kunne ikke duplikere filen.")}finally{F(!1)}return}if(!ot.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await an(async R=>{const j=await R.readText(d.path);await R.writeText(_,j,(Z,se)=>A({value:Z,label:se})),It(_,j),ct(_,j,"pico"),Mt("Fil duplikeret"),await ut(!1),Y("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} på Pico.`)})}async function Ls(){if(!L)return;const d=L,_=zf(we,ds(d.path));if(!_||_===d.path)return;if(Di(_)){Y("error",fs);return}if(xl(_,d.source)){Y("error",`Der findes allerede en fil med navnet ${Ne(_)}.`);return}const x=d.source==="local",R=d.source==="pico";if(he&&R&&(Ko(d.path)||Ko(_))){Y("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}F(!0);try{if(R)if(he){const j=dl[d.path]??await b(d.path);await p(_,j,(Z,se)=>A({value:Z,label:se})),await g(d.path),ml(Z=>({...n_(Z,d.path,_),[_]:j}))}else ot.current&&(await ni(()=>ot.current.rename(d.path,_)),ml(j=>n_(j,d.path,_)));x&&K(j=>{const Z=j.map(se=>se.path===d.path?{...se,path:_,updatedAt:Date.now()}:se);return ss(Z),Z}),ee===d.path&&ye===d.source&&pe(_),qt(j=>pv(j,d.source,d.path,_)),te(null),E(""),Y("success",`Omdøbte ${Ne(d.path)} til ${Ne(_)}.`),R&&await ut()}catch(j){Y("error",j instanceof Error?j.message:"Kunne ikke omdøbe filen.")}finally{A(null),F(!1)}}function xl(d,_){return _==="pico"?W.some(x=>x.path===d):me.some(x=>x.path===d)}async function li(d,_){if(!xl(d,"pico"))return;const x=e_(d,W),R=dl[d]??await b(d);_!==void 0&&ul(R)===ul(_)||await p(x,R)}function zs(d){if(d.type!=="file"){he&&Zn(void 0,!1),pe(d.path),De(d.source);return}if(he&&Mi(d)){Y("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){he&&Zn(void 0,!1);const x=me.find(R=>R.path===d.path);ct(d.path,hn[Yt("local",d.path)]??(x==null?void 0:x.content)??"","local");return}const _=Yt("pico",d.path);if(Object.prototype.hasOwnProperty.call(hn,_)){he&&Zn(void 0,!1),ct(d.path,hn[_],"pico");return}if(Object.prototype.hasOwnProperty.call(dl,d.path)){he&&Zn(void 0,!1),ct(d.path,dl[d.path],"pico");return}bc(d.path)}async function Us(){if(!S&&!he){const d=qh();Pe(d),Ge(Xh(d)),ve(!0),A(null);return}F(!0),A({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),Y("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Oe.length>0?Oe:he?await Ns((_,x)=>A({value:_,label:x})):await ni(()=>_a(ot.current));Pe(d),Ge(Xh(d)),ve(!0),A(null)}catch(d){A(null),Y("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{F(!1)}}async function jc(){if(ve(!1),he){F(!0);try{const _=(Oe.length>0?Oe:Jr.map(R=>({...R,status:"unknown",detail:"Ikke tjekket"}))).filter(R=>Be[R.id]&&!Mi(R));if(_.length===0){Y("info","Ingen filer valgt til installation.");return}let x=null;A({value:0,label:"Starter installation..."});for(const[R,j]of _.entries()){Y("info",`Installerer ${j.label} via Bluetooth...`);const Z=R/_.length*100,se=100/_.length;await li(j.path,j.content),await p(j.path,j.content,(Ve,Ee)=>{A({value:Math.min(99,Z+Ve/100*se),label:`${j.label}: ${Ee}`})}),Gi(j.path,j.content),Y("success",`Installerede ${j.label}.`),j.kind==="library"&&(x=j),Ko(j.path)&&Mn(!0)}Mt("Installation færdig"),await ut(!1),await Yi(),x&&ii(x)}catch(d){A(null),Y("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{F(!1)}return}await an(async d=>{const x=(Oe.length>0?Oe:Jr.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Be[j.id]);if(x.length===0){Y("info","Ingen filer valgt til installation.");return}let R=null;A({value:0,label:"Starter installation..."});for(const[j,Z]of x.entries()){Y("info",`Installerer ${Z.label}...`);const se=j/x.length*100,Ve=100/x.length,Ee=await d.readText(Z.path).catch(()=>null);Ee!==null&&ul(Ee)===ul(Z.content)?(A({value:Math.min(99,se+Ve),label:`${Z.label}: Allerede nyeste version`}),Y("info",`${Z.label} findes allerede i samme version.`)):(await d.replaceTextSafely(Z.path,Z.content,(Le,ft)=>{A({value:Math.min(99,se+Le/100*Ve),label:`${Z.label}: ${ft}`})},{createBackup:!0}),Y("success",`Installerede ${Z.label}.`)),Gi(Z.path,Z.content),Z.kind==="library"&&(R=Z)}Mt("Installation færdig"),await ut(!1),await Yi(),R&&ii(R)})}function xa(){return(Oe.length>0?Oe:qh()).filter(_=>Be[_.id])}function Is(){const d=xa();if(d.length===0){Y("info","Ingen filer valgt.");return}for(const _ of d)Vi(_.path,_.content);ve(!1),Y("success",`Gemte ${d.length} filer i browseren.`)}function qi(){const d=xa();if(d.length===0){Y("info","Ingen filer valgt.");return}d.forEach((_,x)=>{window.setTimeout(()=>{Ms(Ne(_.path),_.content)},x*120)}),ve(!1),Y("success",`Starter download af ${d.length} filer.`)}function ii(d){ct(d.path,d.content,"pico"),It(d.path,d.content),Y("info",`Åbnede ${d.label} i editoren.`)}function Mc(d,_){Ge(x=>{if(d.kind!=="program")return{...x,[d.id]:_};const R={...x};for(const j of Oe)j.kind==="program"&&(R[j.id]=!1);return R[d.id]=_,R})}async function Sr(){if(Ac(),he&&ye==="pico"){Y("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ye==="local"){await Hs();return}const d=Dn.current;if(!d){Y("error",`${Ne(ee)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(ee.endsWith(".py")){if(!gr()&&(Y("info",`${Ne(ee)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await ga())){Y("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(G)return;Hi(),Xt.current="",en(!0);try{await d.runFile(ee,()=>{Hi(),Xt.current="",hl.current=!1,Ai(!0),_n.current=!0}),Y("success",`Kører ${Ne(ee)}. Brug Stop for at afbryde.`)}catch(_){Ai(!1),_n.current=!1,Hi(),Xt.current="",Y("error",_ instanceof Error?_.message:"Kunne ikke starte koden.")}return}F(!0);try{const _=await d.exec(J,2e4);_.output.trim()&&Y("info",_.output),_.error.trim()&&Zl(_.error,J),!_.output.trim()&&!_.error.trim()&&Y("success","Koden kørte uden output.")}catch(_){Y("error",_ instanceof Error?_.message:"Kunne ikke køre koden.")}finally{F(!1)}}async function Hs(){const d=Vf(J,{allowInput:!0});if(d.some(R=>R.level==="error")){for(const R of d){const j=R.line?`Linje ${R.line}: `:"";Y(R.level==="error"?"error":"warning",`${j}${R.text}`)}return}/\binput\s*\(/.test(J)&&!N_()&&Y("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const _=new AbortController;mt.current=_;const x=new Ry;rn.current=x,F(!0),sa(!0),en(!0),Y("info",S?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const R=[],j=await x.run(J,{timeoutMs:null,signal:_.signal,onOutput:Ee=>{R.push(Ee),Y("info",Ee)}});for(const Ee of j.issues){const Le=Ee.line?`Linje ${Ee.line}: `:"";Y(Ee.level==="error"?"error":"warning",`${Le}${Ee.text}`)}const Z=[...R,j.output].filter(Boolean).join(`
`).trim(),se=j.output.trim();!j.error.trim()&&Wy(Z)?Zl(Z,J):(se&&Y("info",se),j.error.trim()&&Zl(j.error,J,j.unavailable?"warning":"error")),j.ok&&!Z&&!j.error.trim()&&Y("success","Browser-MicroPython kørte uden output.")}finally{mt.current=null,rn.current=null,x.dispose(),sa(!1),F(!1)}}async function Ps(){var _,x,R;if(Vl){(_=mt.current)==null||_.abort(),(x=rn.current)==null||x.stop(),Y("warning","Stoppede Browser-MicroPython."),en(!0);return}if(!vn&&Lt){(R=Xn.current)==null||R.reset(),Yl(!1),Y("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),en(!0);return}const d=Dn.current;if(d)try{await d.stop(),Y("warning","Stoppede koden på Pico.")}catch(j){Y("error",j instanceof Error?j.message:"Kunne ikke stoppe koden.")}finally{Ai(!1),_n.current=!1,Hi(),Xt.current="",en(!0),An()}}function Sa(){const d=ql.current;if(!d)return;const _=d.scrollHeight-d.scrollTop-d.clientHeight<12;en(_)}function ka(){V([]),en(!0)}function Fs(){window.requestAnimationFrame(()=>{const d=ql.current;d&&(d.scrollTop=d.scrollHeight)})}async function kr(){const d=jt?mn:mn.trimEnd();if(jt){if(!vn){const R=rn.current;if(!R){Y("warning","Browser-MicroPython kører ikke lige nu."),xn();return}nl(""),en(!0),Es(d),R.sendInput(d),xn();return}const x=Dn.current;if(!x){Y("warning","Pico-terminalen er ikke forbundet."),xn();return}nl(""),en(!0);try{await x.sendProgramInput(d)}catch(R){Y("error",R instanceof Error?R.message:"Kunne ikke sende input til Pico-koden.")}finally{xn()}return}if(!d.trim())return;if(Ci(x=>(x.at(-1)===d?x:[...x,d]).slice(-80)),pn(null),Ot(null),Ii){Y("warning",vn?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),xn();return}if(!vn){const x=Vf(d);if(x.some(j=>j.level==="error")){for(const j of x){const Z=j.line?"Linje "+j.line+": ":"";Y(j.level==="error"?"error":"warning",Z+j.text)}xn();return}const R=Xn.current??new Ny;Xn.current=R,nl(""),Yl(!0),en(!0),Y("info",">>> "+d);try{let j=!1;const Z=await R.send(d,{timeoutMs:15e3,onOutput:Ve=>{j=!0,Y("info",Ve)}}),se=Z.output.trim();se&&!j&&Y("info",se),Z.error.trim()&&Zl(Z.error,d,Z.unavailable?"warning":"error")}catch(j){Y("error",j instanceof Error?j.message:"Browser-MicroPython-terminalen fejlede.")}finally{Yl(!1),xn()}return}if(he){Y("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),xn();return}const _=Dn.current;if(!S||!_){Y("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),xn();return}nl(""),Yl(!0),en(!0),hl.current=!0,Y("info",">>> "+d);try{await _.sendFriendlyLine(d)}catch(x){hl.current=!1,Y("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Yl(!1),xn()}}function xn(){window.requestAnimationFrame(()=>{const d=Xl.current;if(!d||d.disabled)return;d.focus();const _=d.value.length;d.selectionStart=_,d.selectionEnd=_})}function Gs(d,_,x){if(x.length===0)return null;const R=S||he;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:_})]}),u.jsx("div",{className:"ide-install-scroll",children:x.map(j=>{const Z=he&&Mi(j);return u.jsxs("label",{className:`ide-install-row ${Z?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Be[j.id],disabled:Z,onChange:se=>Mc(j,se.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Dc(j),R&&j.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${j.status}`,children:Z?"USB":uv(j.status)})]}),u.jsx("small",{children:j.description})]})]},j.id)})})]})}function Dc(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Ac(){ll&&V([]),en(!0)}function wa(d,_){const x=d.indexOf(`
`,_);return x===-1?d.length:x}function wr(d,_){if(Wh(d,_)){it(null);return}const x=Xf(d,_);if(!x||x.query.length<1){it(null);return}const R=Qh(d,_,!0).slice(0,8),j=Zh(zt.current,x.start,R.length);R.length>0&&j?(it({items:R,selected:0,start:x.start,end:_,position:j}),Sl(qn.current,0)):it(null)}function Ht(d,_){if(Wh(d,_)){Ot(null);return}const x=Xf(d,_);if(!x||x.query.length<1){Ot(null);return}const R=Qh(d,_,!1).slice(0,8),j=Zh(Xl.current,x.start,R.length);R.length>0&&j?(Ot({items:R,selected:0,start:x.start,end:_,position:j}),Sl(mr.current,0)):Ot(null)}function ri(d){const _=d.value.slice(d.selectionStart,d.selectionEnd);Bi(iv(_)?_:"")}function Sl(d,_){window.requestAnimationFrame(()=>{const x=d==null?void 0:d.querySelector(`[data-autocomplete-index="${_}"]`);x==null||x.scrollIntoView({block:"nearest"})})}function Er(d=qe==null?void 0:qe.items[qe.selected]){if(!d||!qe)return;const _=Jl(),x=J.slice(0,qe.start)+d.insert+J.slice(qe.end),R=qe.start+d.insert.length-(d.insert.endsWith("()")?1:0);it(null),Ut(x,R,_),window.requestAnimationFrame(()=>{const j=zt.current;j&&j.focus()})}function Ea(d=rt==null?void 0:rt.items[rt.selected]){if(!d||!rt)return;const _=mn.slice(0,rt.start)+d.insert+mn.slice(rt.end),x=rt.start+d.insert.length-(d.insert.endsWith("()")?1:0);nl(_),Ot(null),window.requestAnimationFrame(()=>{const R=Xl.current;R&&(R.focus(),R.selectionStart=x,R.selectionEnd=x)})}function Vs(d){const _=zt.current;if(!_)return!1;const x=_.selectionStart,R=_.selectionEnd,j={content:J,selectionStart:x,selectionEnd:R},Z=J.lastIndexOf(`
`,x-1)+1,se=R>x&&J[R-1]===`
`?R-1:R,Ve=wa(J,se),Ee=Ve<J.length?Ve+1:Ve,Le=J.slice(Z,Ee);if(d<0){if(Z===0)return!1;const Jn=J.lastIndexOf(`
`,Z-2)+1,Cn=J.slice(Jn,Z),wl=J.slice(0,Jn)+Le+Cn+J.slice(Ee),rl=-Cn.length;return Ut(wl,x+rl,j,R+rl),!0}if(Ee>=J.length)return!1;const ft=wa(J,Ee),Qt=ft<J.length?ft+1:ft,je=J.slice(Ee,Qt),at=J.slice(0,Z)+je+Le+J.slice(Qt),kl=je.length;return Ut(at,x+kl,j,R+kl),!0}function Ta(d){var Qt;if(Ui){(d.key==="Enter"||d.key==="Tab"||(d.ctrlKey||d.metaKey)&&["z","y","s"].includes(d.key.toLowerCase()))&&d.preventDefault();return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?ei():pa())&&it(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),ei()&&it(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!G&&ee.trim()&&js();return}if(d.altKey&&!d.ctrlKey&&!d.metaKey&&(d.key==="ArrowUp"||d.key==="ArrowDown")){d.preventDefault(),Vs(d.key==="ArrowUp"?-1:1)&&it(null);return}if(qe){if(d.key==="ArrowDown"){d.preventDefault(),it(je=>{if(!je)return je;const at=(je.selected+1)%je.items.length;return Sl(qn.current,at),{...je,selected:at}});return}if(d.key==="ArrowUp"){d.preventDefault(),it(je=>{if(!je)return je;const at=(je.selected-1+je.items.length)%je.items.length;return Sl(qn.current,at),{...je,selected:at}});return}if(d.key==="Tab"){d.preventDefault(),Er();return}if(d.key==="Enter"){if(!(qe.items[qe.selected]&&D_(qe.items[qe.selected],J.slice(qe.start,qe.end)))){d.preventDefault(),Er();return}it(null)}if(d.key==="Escape"){d.preventDefault(),it(null);return}}if(d.key==="Enter"){d.preventDefault();const je=d.currentTarget,at=je.selectionStart,kl=je.selectionEnd,Jn={content:J,selectionStart:at,selectionEnd:kl},Cn=J.lastIndexOf(`
`,at-1)+1,wl=J.slice(Cn,at),rl=((Qt=wl.match(/^[ \t]*/))==null?void 0:Qt[0])??"",sn=wl.trimEnd().endsWith(":")?"    ":"",El=`
${rl}${sn}`,Wt=J.slice(0,at)+El+J.slice(kl),Bn=at+El.length;Ut(Wt,Bn,Jn),window.requestAnimationFrame(()=>{je.selectionStart=Bn,je.selectionEnd=Bn});return}if(d.key!=="Tab")return;d.preventDefault();const _=d.currentTarget,x=_.selectionStart,R=_.selectionEnd,j={content:J,selectionStart:x,selectionEnd:R},Z="    ";if(d.shiftKey){const je=J.lastIndexOf(`
`,x-1)+1,at=x===R?wa(J,x):R,kl=J.slice(je,at);let Jn=0,Cn=0;const wl=kl.replace(/(^|\n)( {1,4}|\t)/g,(sn,El,Wt,Bn)=>{const Tr=Wt.length;return je+Bn<x&&(Jn+=Tr),Cn+=Tr,El});if(Cn===0)return;const rl=J.slice(0,je)+wl+J.slice(at);Ut(rl,Math.max(je,x-Jn),j,x===R?Math.max(je,x-Jn):Math.max(je,R-Cn)),window.requestAnimationFrame(()=>{_.selectionStart=Math.max(je,x-Jn),_.selectionEnd=x===R?_.selectionStart:Math.max(_.selectionStart,R-Cn)});return}if(x===R){const je=J.slice(0,x)+Z+J.slice(R);Ut(je,x+Z.length,j),window.requestAnimationFrame(()=>{_.selectionStart=x+Z.length,_.selectionEnd=x+Z.length});return}const se=J.lastIndexOf(`
`,x-1)+1,Ee=J.slice(se,R).replace(/^/gm,Z),Le=Ee.split(`
`).length,ft=J.slice(0,se)+Ee+J.slice(R);Ut(ft,x+Z.length,j,R+Le*Z.length),window.requestAnimationFrame(()=>{_.selectionStart=x+Z.length,_.selectionEnd=R+Le*Z.length})}function Oc(d){if(jt){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),kr());return}if(rt){if(d.key==="ArrowDown"){d.preventDefault(),Ot(_=>{if(!_)return _;const x=(_.selected+1)%_.items.length;return Sl(mr.current,x),{..._,selected:x}});return}if(d.key==="ArrowUp"){d.preventDefault(),Ot(_=>{if(!_)return _;const x=(_.selected-1+_.items.length)%_.items.length;return Sl(mr.current,x),{..._,selected:x}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),Ea();return}if(d.key==="Escape"){d.preventDefault(),Ot(null);return}}if(d.key==="Tab"){d.preventDefault();const _=d.currentTarget,x=_.selectionStart,R=_.selectionEnd,j="    ",Z=mn.slice(0,x)+j+mn.slice(R),se=x+j.length;nl(Z),pn(null),Ot(null),window.requestAnimationFrame(()=>{_.selectionStart=se,_.selectionEnd=se});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===mn.length&&d.currentTarget.selectionEnd===mn.length)||fr.length===0)return;d.preventDefault();const x=d.key==="ArrowUp"?Nt===null?fr.length-1:Math.max(0,Nt-1):Nt===null||Nt+1>=fr.length?null:Nt+1;pn(x);const R=x===null?"":fr[x]??"";nl(R),Ot(null),en(!0),window.requestAnimationFrame(()=>{const j=Xl.current;j&&(j.selectionStart=R.length,j.selectionEnd=R.length,Fs())});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),kr())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(td,{title:"Pico Kodeværksted",onMenu:()=>s()}),dr?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Tc,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(ln,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=oa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(ln,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>ut(),disabled:!S&&!he||G,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(ln,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:vr.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):vr.map(d=>{if(d.kind==="separator"){const j=d.id==="pico-files"&&!S&&!he;return u.jsxs(U.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),j&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const _=he&&Mi(d),x=hn[Yt(d.source,d.path)],R=x!==void 0&&x!==ov(d,me,dl);return u.jsxs("div",{className:`ide-file-row ${ee===d.path&&ye===d.source?"active":""} ${_?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>zs(d),disabled:_,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:R?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${R?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>$i(d),disabled:d.type!=="file"||G||_,"aria-label":`Filvalg for ${d.name}`,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(ln,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&u.jsx("span",{className:`ide-usb-status ${Kt.supported?"available":"unavailable"}`,title:Kt.message,"data-tooltip":Kt.message,role:"img","aria-label":Kt.message,tabIndex:0,children:"!"})]}),he&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:S?gc:hc,disabled:!Kt.supported||T,children:T?"Forbinder...":S?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Us,disabled:he||G,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Sc,disabled:!S||G,children:"Nulstil enhed"})]}),he&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(ln,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Us,disabled:G,children:"Startprogrammer og biblioteker"})]}),!he&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Ae(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Ne(ee),u.jsxs("small",{children:[ua," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Sr,disabled:G,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ps,disabled:!Vl&&!(!vn&&Lt)&&(!S||!vt),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:vc,disabled:G||!ee.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ds(),disabled:G||!ee.trim(),children:"Slet"})]})]}),vl(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{ref:Ct,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-ur.top}px)`},children:Array.from({length:dc},(d,_)=>u.jsx("span",{children:_+1},_))}),u.jsx("pre",{ref:_t,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-ur.left}px, ${-ur.top}px)`},children:sv(J,fc)}),u.jsx("textarea",{ref:zt,className:"ide-editor",value:J,onChange:d=>Ut(d.target.value,d.target.selectionStart,Jl(),d.target.selectionEnd,"typing"),onKeyDown:Ta,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||wr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{wr(d.currentTarget.value,d.currentTarget.selectionStart),ri(d.currentTarget)},onSelect:d=>ri(d.currentTarget),onScroll:d=>{const{scrollTop:_,scrollLeft:x}=d.currentTarget;Ct.current&&(Ct.current.style.transform=`translateY(${-_}px)`),_t.current&&(_t.current.style.transform=`translate(${-x}px, ${-_}px)`),Gl({top:_,left:x}),qe&&wr(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:Ui,"aria-busy":Ui,spellCheck:!1}),qe&&u.jsx("div",{ref:qn,className:`ide-autocomplete placement-${qe.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:qe.position.left,top:qe.position.top,maxHeight:qe.position.maxHeight},children:(qe.position.placement==="above"?qe.items.map((d,_)=>({item:d,index:_})).reverse():qe.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===qe.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),Er(d)},role:"option","aria-selected":_===qe.selected,children:d.label},d.label))}),re&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Ne(re),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${pl?"":"active"}`,type:"button",onClick:()=>vs(d=>!d),"aria-label":pl?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!pl,title:pl?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${ll?"active":""}`,type:"button",onClick:()=>Li(d=>!d),"aria-pressed":ll,title:ll?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:ka,disabled:O.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:ql,onScroll:Sa,onClick:()=>{var d;return(d=Xl.current)==null?void 0:d.focus()},children:[O.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):O.map((d,_)=>u.jsx("div",{className:`term-line ${d.variant==="input"?"term-input-echo":`term-${d.level}`}`,children:d.technical&&!pl?d.technical:d.text},`${_}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Ii&&!jt?"locked":""} ${jt?"stdin":""}`,onSubmit:d=>{d.preventDefault(),kr()},children:[u.jsx("span",{"aria-hidden":"true",children:ws}),u.jsx("textarea",{ref:Xl,value:mn,onChange:d=>{nl(d.target.value),pn(null),jt?Ot(null):Ht(d.target.value,d.target.selectionStart)},onKeyDown:Oc,onKeyUp:d=>{jt||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Ht(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{jt||Ht(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:ks,placeholder:gl,"aria-label":jt?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:gl,rows:Math.max(1,mn.split(`
`).length)})]}),rt&&u.jsx("div",{ref:mr,className:`ide-autocomplete ide-repl-autocomplete placement-${rt.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:rt.position.left,top:rt.position.top,maxHeight:rt.position.maxHeight},children:(rt.position.placement==="above"?rt.items.map((d,_)=>({item:d,index:_})).reverse():rt.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===rt.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),Ea(d)},role:"option","aria-selected":_===rt.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:oa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var _;Ec((_=d.target.files)==null?void 0:_[0]),d.currentTarget.value=""}}),oe&&u.jsx(At,{title:"Gem fil",onClose:()=>xe(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void ga(),disabled:!S&&!he||G,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:xc,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:xr,children:"Gem filen i browseren"})]})}),ae&&u.jsx(At,{title:"Startprogrammer og biblioteker",onClose:()=>ve(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:S||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[Gs("Startprogrammer (main.py)","Starter automatisk på Picoen.",Oe.filter(d=>d.kind==="program")),Gs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Oe.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(S||he)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:jc,disabled:G,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:qi,disabled:G,children:"Download til computer"}),u.jsx("button",{className:S||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:Is,disabled:G,children:"Gem i browseren"})]})]})}),$n&&u.jsx(At,{title:"main.py er gemt",onClose:()=>Mn(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ba("control"),disabled:G,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ba("ide"),disabled:G,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Mn(!1),disabled:G,children:"Senere"})]})}),_e&&u.jsx(At,{title:"Installer MicroPython",onClose:()=>Ae(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:dt,onChange:d=>$t(d.target.value),children:_r.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Rt==null?void 0:Rt.version)??Tt,onChange:d=>fl(d.target.value),children:zi.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),Rt&&u.jsx("a",{className:"btn btn-primary btn-block",href:Rt.url,download:Rt.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),I&&u.jsx(At,{title:"Ny Python-fil",onClose:()=>ne(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Nc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>ce(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Ss,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!$h(ue),children:"Opret"})]})}),L&&u.jsx(At,{title:Ne(L.path),onClose:()=>te(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:L.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Ls()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:we,onChange:d=>E(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",ds(L.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",ds(L.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!zf(we,ds(L.path))||zf(we,ds(L.path))===L.path||G,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Bs(),disabled:G,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Ds(L),disabled:G,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),L.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:L.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Ne(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Rc(d),disabled:G,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Os(d),disabled:G,children:"Slet"})]},d.path))})]})]})})]})}function $h(s){var c;const i=(c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Xy(s){const i=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=M_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function zf(s,i="py"){const c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=M_(a[1]),h=i.replace(/^\./,"").toLowerCase(),b=(a[2]??(h||"py")).toLowerCase();return f?`/${f}.${b}`:""}function Ky(s){return Ne(s).replace(/\.(py|txt|json|csv)$/i,"")}function M_(s){return s.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function ds(s){var a;const i=Ne(s).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function ul(s){return s.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function qh(){return Jr.map(s=>({...s,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Xh(s){const i={};return s.forEach(c=>{i[c.id]=!1}),i}function Ne(s){return s.split("/").filter(Boolean).pop()??s}function Ko(s){return s.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Kh(s){const i=s.userAgent||"",c=s.platform||"",a=s.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),h=/Macintosh/i.test(c)&&a>1;return f&&!h}function Qy(s){return s instanceof DOMException&&s.name==="AbortError"}function Wy(s){return/Traceback \(most recent call last\):/.test(s)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(s)}function Mi(s){return Zy(s)}function Zy(s){return s.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const qf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(s=>({label:s,insert:`${s}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(s)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(s=>({label:`${s}()`,insert:`${s}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Qh(s,i,c){const a=Xf(s,i);if(!a)return[];const f=Jy(s,a.start,i),h=a.query.toLowerCase(),b=f.beforeToken.toLowerCase(),p=f.linePrefix.toLowerCase(),g=c?[...qf,...tv(s)]:qf;return nv(g).filter(S=>{const k=S.label.toLowerCase(),T=S.insert.toLowerCase();return T===h||k===h||D_(S,a.query)?!1:f.importLine?ev(S,f)?k.startsWith(p)||T.startsWith(p)||k.startsWith(h)||T.startsWith(h):!1:b.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(h)||k.startsWith(h))})}function Jy(s,i,c){const a=s.lastIndexOf(`
`,i-1)+1,f=s.slice(a,c),h=s.slice(a,i),b=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),p=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:h,importLine:b,fromImportLine:p}}function ev(s,i){return i.fromImportLine?!s.insert.includes("(")&&!s.insert.startsWith("import "):s.insert.startsWith("import ")||s.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.insert)}function tv(s){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of s.matchAll(a))f[1]&&i.add(f[1]),f[2]&&i.add(f[2]);return[...i].filter(a=>a.length>1&&!lv.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function nv(s){const i=new Set,c=[];for(const a of s){const f=a.insert.toLowerCase();i.has(f)||(i.add(f),c.push(a))}return c}const lv=new Set(qf.map(s=>s.insert.replace(/[().: ]+$/g,"")));function Xf(s,i){const a=s.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function Wh(s,i){const c=s.lastIndexOf(`
`,Math.max(0,i-1))+1;let a=null,f=null,h=!1;for(let b=0;b<i;b+=1){const p=s[b],g=s.slice(b,b+3);if(f){g===f.repeat(3)&&(f=null,b+=2);continue}if(a){if(h){h=!1;continue}if(p==="\\"){h=!0;continue}p===a&&(a=null),p===`
`&&(a=null);continue}if(p==="#"){const y=s.indexOf(`
`,b),S=y===-1?s.length:y;if(i<=S&&b>=c)return!0;b=S;continue}if(g==='"""'||g==="'''"){f=p,b+=2;continue}(p==='"'||p==="'")&&(a=p)}return a!==null||f!==null}function D_(s,i){const c=s.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function iv(s){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(s)}function Zh(s,i,c){if(!s)return null;const a=s.closest(".ide-terminal")??s.parentElement;if(!a)return null;const f=window.getComputedStyle(s),h=document.createElement("div"),b=document.createElement("span"),p=a.getBoundingClientRect(),g=s.getBoundingClientRect();h.style.position="absolute",h.style.visibility="hidden",h.style.pointerEvents="none",h.style.whiteSpace="pre-wrap",h.style.overflowWrap="break-word",h.style.wordBreak=f.wordBreak,h.style.boxSizing=f.boxSizing,h.style.width=`${s.getBoundingClientRect().width}px`,h.style.padding=f.padding,h.style.border=f.border,h.style.font=f.font,h.style.lineHeight=f.lineHeight,h.style.letterSpacing=f.letterSpacing,h.style.tabSize=f.tabSize,h.style.fontVariantLigatures=f.fontVariantLigatures,h.style.scrollbarGutter=f.scrollbarGutter,h.style.left=`${g.left-p.left-s.scrollLeft}px`,h.style.top=`${g.top-p.top-s.scrollTop}px`,h.textContent=s.value.slice(0,i),b.textContent=s.value.slice(i,i+1)||" ",h.appendChild(b),a.appendChild(h);const y=b.getBoundingClientRect();h.remove();const S=34,k=14,T=Math.min(210,Math.max(S+k,c*S+k)),D=rv(y.left-p.left,8,Math.max(8,a.clientWidth-296)),O=y.top-p.top+a.scrollTop,V=y.bottom-p.top+a.scrollTop+10,G=a.scrollTop+a.clientHeight-V-8,F=O-a.scrollTop-8,W=a.scrollTop+a.clientHeight,q=G>=Math.min(T,S*2)||G>=F?"below":"above",re=Math.max(S+k,Math.min(T,q==="below"?G:F)),be=q==="below"?Math.min(V,W-re-8):Math.max(a.scrollTop+8,O-re-8);return{left:D,top:be,maxHeight:re,placement:q}}function rv(s,i,c){return Math.max(i,Math.min(c,s))}function av(s){const i=[];let c=null,a=null,f=!1,h=0,b=0;const p=(g,y)=>{g>h&&i.push({text:s.slice(h,g),isTriple:y}),h=g};for(;b<s.length;){const g=s[b],y=s.slice(b,b+3);if(a){if(y===a.repeat(3)){b+=3,a=null,p(b,!0);continue}b+=1;continue}if(c){f?f=!1:g==="\\"?f=!0:(g===c||g===`
`)&&(c=null),b+=1;continue}if(g==="#"){const S=s.indexOf(`
`,b);b=S===-1?s.length:S;continue}if(y==='"""'||y==="'''"){p(b,!1),a=g,b+=3;continue}(g==='"'||g==="'")&&(c=g),b+=1}return p(s.length,a!==null),i}function sv(s,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];let h=0;function b(p,g){p.split(/(\r?\n)/).forEach(y=>{if(y===`
`||y===`\r
`){f.push(u.jsx("br",{},`br-${h++}`));return}y!==""&&g(y,`part-${h++}`)})}return av(s).forEach(p=>{if(p.isTriple){b(p.text,(g,y)=>{f.push(...hs(g,i,y,"tok-string"))});return}b(p.text,(g,y)=>{let S=0;[...g.matchAll(a)].forEach((T,D)=>{const O=T.index??0;O>S&&f.push(...Jh(g.slice(S,O),c,`${y}-${D}-plain`,i));const V=T[0],G=V.startsWith("#")?"tok-comment":V.startsWith('"')||V.startsWith("'")?"tok-string":/^\d/.test(V)?"tok-number":"tok-builtin";f.push(...hs(V,i,`${y}-${D}-token`,G)),S=O+V.length}),S<g.length&&f.push(...Jh(g.slice(S),c,`${y}-tail`,i))})}),f.length?f:" "}function Jh(s,i,c,a=""){const f=[];let h=0;const b=new RegExp(i.source,"g");return[...s.matchAll(b)].forEach((p,g)=>{const y=p.index??0;y>h&&f.push(...hs(s.slice(h,y),a,`${c}-${g}-plain`)),f.push(...hs(p[0],a,`${c}-${g}-keyword`,"tok-keyword")),h=y+p[0].length}),h<s.length&&f.push(...hs(s.slice(h),a,`${c}-plain-end`)),f}function hs(s,i,c,a=""){if(!i)return[u.jsx("span",{className:a||void 0,children:s},c)];const f=[],h=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),b=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let p=0;return[...s.matchAll(b)].forEach((g,y)=>{const S=g.index??0;S>p&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p,S)},`${c}-${y}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:g[0]},`${c}-${y}-match`)),p=S+g[0].length}),p<s.length&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:s},c)]}function Qo(s){return s.length>0?s:[{path:$f,content:j_,uploaded:!1,updatedAt:Date.now()}]}function Uf(s,i,c,a){const f=s.filter(h=>h.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((h,b)=>b.updatedAt-h.updatedAt)}function Jo(s){return s.map(i=>({name:Ne(i.path),path:i.path,type:"file",size:new Blob([i.content]).size}))}function ov(s,i,c){var a;return s.source==="pico"?c[s.path]:(a=i.find(f=>f.path===s.path))==null?void 0:a.content}function ec(s){const i=s.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",h=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${a}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Di(s){return ec(s)!==null}function ea(s){const i=new Map;for(const c of s){const a=ec(c.path);if(!a)continue;const f=i.get(a.originalPath)??[];f.push(c),i.set(a.originalPath,f)}for(const c of i.values())c.sort((a,f)=>{var h,b;return(((h=ec(f.path))==null?void 0:h.index)??0)-(((b=ec(a.path))==null?void 0:b.index)??0)});return i}function e_(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"",y=new Set(i.map(S=>S.path.toLowerCase()));for(let S=1;S<1e3;S+=1){const k=`${f}${p}_backup${S}${g}`;if(!y.has(k.toLowerCase()))return k}return`${f}${p}_backup${Date.now()}${g}`}function cv(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"";for(let y=1;y<1e3;y+=1){const S=y===1?"_kopi":`_kopi${y}`,k=`${f}${p}${S}${g}`;if(!i(k)&&!Di(k))return k}return`${f}${p}_kopi${Date.now()}${g}`}function uv(s){return s==="ok"?"Nyeste":s==="outdated"?"Opdater":s==="missing"?"Mangler":"Ikke tjekket"}function fv(s,i,c,a){const f=new Map,h=ea(s),b=ea(Jo(i));for(const k of s)Di(k.path)||f.set(Yt("pico",k.path),{kind:"file",name:k.name,path:k.path,type:k.type,size:k.size,source:"pico",uploaded:!0,versions:h.get(k.path)??[]});for(const k of i)Di(k.path)||f.set(Yt("local",k.path),{kind:"file",name:Ne(k.path),path:k.path,type:"file",source:"local",uploaded:!1,versions:b.get(k.path)??[]});for(const k of Object.keys(c)){const[T,...D]=k.split(":"),O=D.join(":");if(T!=="local"&&T!=="pico"||!O)continue;const V=f.get(k);if(V){f.set(k,V);continue}f.set(k,{kind:"file",name:Ne(O),path:O,type:"file",source:T,uploaded:!1,versions:T==="pico"?h.get(O)??[]:b.get(O)??[]})}const p=[...f.values()].sort(mv),g=p.filter(k=>k.source==="pico"),y=p.filter(k=>k.source==="local"),S=[];return g.length>0||a?S.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...g):S.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),y.length>0&&S.push({kind:"separator",id:"browser-files",label:"Browser"},...y),S}const dv=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function mv(s,i){const c=t_(s.path),a=t_(i.path);return c===null&&a===null?s.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function t_(s){var c;const i=(c=s.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?dv.get(i)??null:null}function n_(s,i,c){if(!(i in s))return s;const a={...s,[c]:s[i]};return delete a[i],a}function pv(s,i,c,a){const f=`${i}:${c}`;if(!(f in s))return s;const h={...s,[`${i}:${a}`]:s[f]};return delete h[f],h}function hv({open:s}){const i=le(W=>W.screen),c=le(W=>W.active),a=le(W=>W.toggleSideMenu),f=le(W=>W.toggleDebugger),h=le(W=>W.setEditMode),b=le(W=>W.openMenuPage),p=le(W=>W.disconnect),g=le(W=>W.openPicoIde),y=le(W=>W.closePicoIde),S=le(W=>W.picoIdeOrigin),k=i==="dashboard",T=i==="control",D=i==="ide",O=T&&!!(c!=null&&c.canEdit),V=!T||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),G=S==="control",F=S==="control"?"Pico Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${s?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${i} ${s?"open":"closing"}`,"aria-label":"Sidemenu",children:[k&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:"Bruger",icon:"user",onClick:()=>b("user-settings")}),u.jsx(Rn,{label:"Indstillinger",icon:"settings",onClick:()=>b("application-settings")}),u.jsx(Rn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!V}),u.jsx(If,{}),u.jsx(Rn,{label:"Om appen",icon:"info",onClick:()=>b("application-about")}),u.jsx(Rn,{label:"Hjælp",icon:"help",onClick:()=>b("application-help")}),u.jsx(Rn,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),T&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:"Indstillinger",icon:"settings",onClick:()=>b("device-settings")}),u.jsx(Rn,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!O}),u.jsx(Rn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!V}),u.jsx(If,{}),u.jsx(Rn,{label:"Hjælp",icon:"help",onClick:()=>b("device-help")}),u.jsx(Rn,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),D&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:F,icon:"back",onClick:y}),u.jsx(If,{})]}),u.jsx("div",{className:"spacer"}),(T||D&&G)&&u.jsx(Rn,{label:"Forlad",icon:"exit",onClick:()=>p()})]})]})}function Rn({label:s,icon:i,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":s,children:[u.jsx(ln,{name:i}),u.jsx("span",{children:s})]})}function If(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:Kb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const _v={error:"term-error",success:"term-success",warning:"term-warning",info:""},l_={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function gv(){const s=new Date,i=c=>String(c).padStart(2,"0");return`${i(s.getDate())}-${i(s.getMonth()+1)}-${s.getFullYear()}-${i(s.getHours())}-${i(s.getMinutes())}`}function bv(){const s=le(f=>f.logs),i=le(f=>f.clearLogs),c=le(f=>f.toggleDebugger);function a(){const f=[...s].reverse().map(g=>`${g.time} ${l_[g.level]}${g.message}`).join(`
`),h=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(h),p=document.createElement("a");p.href=b,p.download=`${gv()}.txt`,p.click(),URL.revokeObjectURL(b)}return u.jsxs(At,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:s.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):s.map((f,h)=>u.jsxs("div",{className:`term-line ${_v[f.level]}`,children:[f.time," ",l_[f.level],f.message]},`${f.time}-${h}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const A_=4,Yn=A_*4+17,i_=80,yv=20,vv=30660;function xv(s){const i=new TextEncoder().encode(s);if(i.length>76)throw new Error("QR-koden er for lang.");const c=r_(!1),a=r_(!1);Sv(c,a);const f=wv(i),h=Nv(f,yv);return Ev(c,a,[...f,...h]),Tv(c,a),c}function r_(s){return Array.from({length:Yn},()=>Array.from({length:Yn},()=>s))}function Vn(s,i,c,a,f,h=!0){s[a][c]=f,h&&(i[a][c]=!0)}function Sv(s,i){Hf(s,i,0,0),Hf(s,i,Yn-7,0),Hf(s,i,0,Yn-7);for(let c=0;c<Yn;c+=1)i[6][c]||Vn(s,i,c,6,c%2===0),i[c][6]||Vn(s,i,6,c,c%2===0);kv(s,i,26,26),Vn(s,i,8,A_*4+9,!0)}function Hf(s,i,c,a){for(let f=-1;f<=7;f+=1)for(let h=-1;h<=7;h+=1){const b=c+h,p=a+f;if(b<0||p<0||b>=Yn||p>=Yn)continue;const g=h>=0&&h<=6&&f>=0&&f<=6&&(h===0||h===6||f===0||f===6||h>=2&&h<=4&&f>=2&&f<=4);Vn(s,i,b,p,g)}}function kv(s,i,c,a){for(let f=-2;f<=2;f+=1)for(let h=-2;h<=2;h+=1)i[a+f][c+h]||Vn(s,i,c+h,a+f,Math.max(Math.abs(h),Math.abs(f))!==1)}function wv(s){const i=[];Wo(i,4,4),Wo(i,s.length,8);for(const a of s)Wo(i,a,8);for(Wo(i,0,Math.min(4,i_*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((f,h)=>f<<1|h,0));for(let a=236;c.length<i_;a=a===236?17:236)c.push(a);return c}function Wo(s,i,c){for(let a=c-1;a>=0;a-=1)s.push(i>>>a&1)}function Ev(s,i,c){const a=c.flatMap(b=>Array.from({length:8},(p,g)=>b>>>7-g&1));let f=0,h=!0;for(let b=Yn-1;b>=1;b-=2){b===6&&(b-=1);for(let p=0;p<Yn;p+=1){const g=h?Yn-1-p:p;for(let y=0;y<2;y+=1){const S=b-y;if(i[g][S])continue;const k=f<a.length?a[f]===1:!1;s[g][S]=k!==((S+g)%2===0),f+=1}}h=!h}}function Tv(s,i){const c=a=>(vv>>>a&1)!==0;for(let a=0;a<=5;a+=1)Vn(s,i,8,a,c(a));Vn(s,i,8,7,c(6)),Vn(s,i,8,8,c(7)),Vn(s,i,7,8,c(8));for(let a=9;a<15;a+=1)Vn(s,i,14-a,8,c(a));for(let a=0;a<8;a+=1)Vn(s,i,Yn-1-a,8,c(a));for(let a=8;a<15;a+=1)Vn(s,i,8,Yn-15+a,c(a))}const _s=new Array(512),Kf=new Array(256);let a_=!1;function O_(){if(a_)return;let s=1;for(let i=0;i<255;i+=1)_s[i]=s,Kf[s]=i,s<<=1,s&256&&(s^=285);for(let i=255;i<512;i+=1)_s[i]=_s[i-255];a_=!0}function C_(s,i){return s===0||i===0?0:_s[Kf[s]+Kf[i]]}function Nv(s,i){O_();const c=Rv(i),a=Array.from({length:i},()=>0);for(const f of s){const h=f^a.shift();a.push(0);for(let b=0;b<i;b+=1)a[b]^=C_(c[b],h)}return a}function Rv(s){O_();let i=[1];for(let c=0;c<s;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let f=0;f<i.length;f+=1)a[f]^=C_(i[f],_s[c]),a[f+1]^=i[f];i=a}return i.slice(1)}function jv(){const s=le(_e=>_e.menuPage),i=le(_e=>_e.closeMenuPage),c=le(_e=>_e.user),a=le(_e=>_e.active),f=le(_e=>_e.layout),h=le(_e=>_e.sliderValues),b=le(_e=>_e.savedDevices),p=le(_e=>_e.updateUsername),g=le(_e=>_e.createOwnerPairingCode),y=le(_e=>_e.applyOwnerPairingCode),S=le(_e=>_e.clearSavedDevices),k=le(_e=>_e.resetApplicationData),T=le(_e=>_e.saveDeviceSettings),D=le(_e=>_e.setEditMode),O=le(_e=>_e.askConfirm),[V,G]=U.useState((c==null?void 0:c.username)??""),[F,W]=U.useState(!1),[q,re]=U.useState(""),[be,me]=U.useState(""),[K,ee]=U.useState(!1),[pe,ye]=U.useState(""),De=U.useRef(null),[J,We]=U.useState((a==null?void 0:a.iconID)??0),[Oe,Pe]=U.useState(!1),[I,ne]=U.useState((a==null?void 0:a.canOthersConnect)??!1),[ue,ce]=U.useState((a==null?void 0:a.canOthersEdit)??!1),[we,E]=U.useState((a==null?void 0:a.canOthersEditCode)??!1),[L,te]=U.useState((a==null?void 0:a.gridCols)??11),[oe,xe]=U.useState((a==null?void 0:a.gridRows)??31),[H,A]=U.useState(!1);U.useEffect(()=>{s==="user-settings"&&(G((c==null?void 0:c.username)??""),me(""),ye(""),ee(!1))},[s,c==null?void 0:c.username]),U.useEffect(()=>{s==="device-settings"&&a&&(We(a.iconID),ne(a.canOthersConnect),ce(a.canOthersEdit),E(a.canOthersEditCode),te(a.gridCols),xe(a.gridRows))},[a,s]),U.useEffect(()=>{if(!K)return;let _e=!1,Ae=null,yt=0;async function Ce(){var $t;const dt=window.BarcodeDetector;if(!dt||!(($t=navigator.mediaDevices)!=null&&$t.getUserMedia)){ye("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),ee(!1);return}try{Ae=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Tt=De.current;if(!Tt)return;Tt.srcObject=Ae,await Tt.play();const fl=new dt({formats:["qr_code"]}),$n=async()=>{var Mn;if(!_e){try{const Gl=(Mn=(await fl.detect(Tt)).find(vt=>vt.rawValue))==null?void 0:Mn.rawValue;if(Gl){me(Gl),y(Gl)&&W(!1),ee(!1);return}}catch{}yt=window.requestAnimationFrame($n)}};yt=window.requestAnimationFrame($n)}catch{ye("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),ee(!1)}}return Ce(),()=>{_e=!0,yt&&window.cancelAnimationFrame(yt),Ae==null||Ae.getTracks().forEach(dt=>dt.stop())}},[y,K]);const ae=(_e,Ae)=>Number.isFinite(_e)?Math.max(na,Math.min(la,Math.round(_e))):Ae,ve=(c==null?void 0:c.username)??"",Be=V.trim(),Ge=Be.length>0&&Be!==ve;if(!s)return null;if(s==="user-settings"){let _e=function(){const Ce=g();Ce&&(re(Ce),me(""),W(!0))},Ae=function(){y(be)&&(me(""),W(!1))};async function yt(){var Ce;try{await((Ce=navigator.clipboard)==null?void 0:Ce.writeText(q))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(At,{title:"Brugerindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gn,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${V.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:V,onChange:Ce=>G(Ce.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>p(V),disabled:!Ge,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:_e,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>O({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{k()}}),children:"Slet brugerdata"})]})}),F&&u.jsx(At,{title:"Del ejerkode",onClose:()=>W(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Av,{code:q}),u.jsx("code",{className:"owner-code-text",children:q}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void yt(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${be.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:be,onChange:Ce=>me(Ce.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:Ae,disabled:!be.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>ee(Ce=>!Ce),children:K?"Stop scanning":"Scan QR-kode"}),pe&&u.jsx("div",{className:"notice",children:pe}),K&&u.jsx("video",{className:"owner-code-video",ref:De,muted:!0,playsInline:!0})]})})]})}if(s==="application-settings")return u.jsx(At,{title:"Applikationsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gn,{label:"Version",value:gs}),u.jsx(Gn,{label:"Bluetooth",value:oc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(Gn,{label:"Gemte enheder",value:String(b.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>O({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:S}),disabled:b.length===0,children:"Ryd gemte enheder"})]})});if(s==="application-about")return u.jsx(At,{title:"Om appen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(Gn,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(Gn,{label:"Version",value:gs})]})});if(s==="application-help")return u.jsx(At,{title:"Hjælp til applikationen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(s==="device-settings"){const _e=f.filter(Ce=>Ce.type==="slider"),Ae=!!(a!=null&&a.isOwnedByMe);async function yt(Ce=!1){if(!a||!Ae)return;const dt=ae(L,a.gridCols),$t=ae(oe,a.gridRows),Tt=Mv(f,dt,$t);if(Tt&&!Ce){O({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Tt.requiredCols} kolonner og ${Tt.requiredRows} rækker. Det nye gitter er ${dt} × ${$t}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{yt(!0)}});return}A(!0),await T(J,I,I&&ue,I&&we,dt,$t),te(dt),xe($t),A(!1)}return u.jsx(At,{title:"Enhedsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gn,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(Gn,{label:"Ejer",value:Ov(a)}),Ae?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Pe(!0),children:u.jsx("img",{src:aa(J),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:I?"":"active",onClick:()=>ne(!1),children:"Privat"}),u.jsx("button",{type:"button",className:I?"active":"",onClick:()=>ne(!0),children:"Offentlig"})]}),I&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>ce(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>ce(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:we?"":"active",onClick:()=>E(!1),children:"Nej"}),u.jsx("button",{type:"button",className:we?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:na,max:la,value:Number.isNaN(L)?"":L,onChange:Ce=>te(parseInt(Ce.target.value,10)),onBlur:()=>te(ae(L,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:na,max:la,value:Number.isNaN(oe)?"":oe,onChange:Ce=>xe(parseInt(Ce.target.value,10)),onBlur:()=>xe(ae(oe,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>yt(),disabled:H,children:H?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Gn,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(Gn,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(Gn,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(Gn,{label:"Kontroller",value:String(f.length)}),_e.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),_e.map(Ce=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:Ce.name}),u.jsxs("span",{children:[Ce.sliderMin??0," til ",Ce.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",Dv(Ce.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",h[Ce.name]??"Ikke brugt"]})]},Ce.name))]}),Oe&&u.jsx(h_,{selected:J,onSelect:We,onClose:()=>Pe(!1)})]})})}return u.jsx(At,{title:"Hjælp til enheden",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>D(!0),children:"Rediger layout"})]})})}function Mv(s,i,c){let a=0,f=0;for(const h of s)ys(h)&&(a=Math.max(a,Math.ceil((h.centerX2+h.spanX)/2)+1),f=Math.max(f,Math.ceil((h.centerY2+h.spanY)/2)+1));return i<a||c<f?{requiredCols:a,requiredRows:f}:null}function Dv(s){return s==="bottom"?"bund":s==="middle"?"midte":s==="top"?"top":"ingen"}function Av({code:s}){const i=U.useMemo(()=>xv(s),[s]),c=i.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,f)=>a.map((h,b)=>h?u.jsx("rect",{x:b+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${b}-${f}`):null))]})}function Ov(s){var i;return s?s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function Gn({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function Cv(){const s=le(a=>a.confirmDialog),i=le(a=>a.closeConfirm);if(!s)return null;function c(){s==null||s.onConfirm(),i()}return u.jsx(At,{title:s.title,onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:s.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:s.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:s.confirmLabel??"Fortsæt"})]})]})})}function Bv(){const s=le(a=>a.connectionLost),i=le(a=>a.reconnectLostDevice),c=le(a=>a.dismissConnectionLost);return s?u.jsx(At,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",s.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function Lv(){const s=le(c=>c.toast),i=le(c=>c.dismissToast);return s?u.jsx("div",{className:"toast",role:"alert",onClick:i,children:s.message},s.id):null}function zv(){const s=le(p=>p.screen),i=le(p=>p.splashTarget),c=le(p=>p.init),a=le(p=>p.sideMenuOpen),f=le(p=>p.debuggerOpen),[h,b]=U.useState(!1);return U.useEffect(()=>{c()},[c]),U.useEffect(()=>{if(a){b(!0);return}const p=setTimeout(()=>b(!1),140);return()=>clearTimeout(p)},[a]),u.jsxs("div",{className:"app",children:[s==="splash"&&i==="intro"&&u.jsx(Eh,{}),s==="splash"&&i==="dashboard"&&u.jsx(Th,{}),s==="splash"&&u.jsx(Jb,{}),s==="intro"&&u.jsx(Eh,{}),s==="dashboard"&&u.jsx(Th,{}),s==="connection"&&u.jsx(i0,{}),s==="create"&&u.jsx(r0,{}),s==="control"&&u.jsx(X0,{}),s==="ide"&&u.jsx(qy,{}),h&&u.jsx(hv,{open:a}),u.jsx(jv,{}),u.jsx(Bv,{}),u.jsx(Cv,{}),f&&u.jsx(bv,{}),u.jsx(Lv,{})]})}function Uv(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const i=new URL("sw.js",window.location.href);navigator.serviceWorker.register(i,{scope:"./"}).catch(c=>{console.warn("Service worker registration failed:",c)})});let s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||window.crossOriginIsolated||(s=!0,window.location.reload())})}Uv();ub.createRoot(document.getElementById("root")).render(u.jsx(ms.StrictMode,{children:u.jsx(zv,{})}));
