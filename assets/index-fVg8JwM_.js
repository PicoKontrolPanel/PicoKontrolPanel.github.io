var Wg=Object.defineProperty;var Jg=(s,i,c)=>i in s?Wg(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c;var de=(s,i,c)=>Jg(s,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const _ of p.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function c(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(f){if(f.ep)return;f.ep=!0;const p=c(f);fetch(f.href,p)}})();function o_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bf={exports:{}},ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function eb(){if(lh)return ls;lh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,f,p){var _=null;if(p!==void 0&&(_=""+p),f.key!==void 0&&(_=""+f.key),"key"in f){p={};for(var y in f)y!=="key"&&(p[y]=f[y])}else p=f;return f=p.ref,{$$typeof:s,type:a,key:_,ref:f!==void 0?f:null,props:p}}return ls.Fragment=i,ls.jsx=c,ls.jsxs=c,ls}var ih;function nb(){return ih||(ih=1,bf.exports=eb()),bf.exports}var u=nb(),yf={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function tb(){if(ah)return Ee;ah=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),_=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function G(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,D={};function L(N,I,re){this.props=N,this.context=I,this.refs=D,this.updater=re||Y}L.prototype.isReactComponent={},L.prototype.setState=function(N,I){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,I,"setState")},L.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function H(){}H.prototype=L.prototype;function ie(N,I,re){this.props=N,this.context=I,this.refs=D,this.updater=re||Y}var se=ie.prototype=new H;se.constructor=ie,K(se,L.prototype),se.isPureReactComponent=!0;var oe=Array.isArray;function he(){}var J={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function Se(N,I,re){var O=re.ref;return{$$typeof:s,type:N,key:I,ref:O!==void 0?O:null,props:re}}function ye(N,I){return Se(N.type,I,N.props)}function xe(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function Z(N){var I={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(re){return I[re]})}var Ye=/\/+/g;function Ae(N,I){return typeof N=="object"&&N!==null&&N.key!=null?Z(""+N.key):I.toString(36)}function Pe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(he,he):(N.status="pending",N.then(function(I){N.status==="pending"&&(N.status="fulfilled",N.value=I)},function(I){N.status==="pending"&&(N.status="rejected",N.reason=I)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function U(N,I,re,O,Q){var ee=typeof N;(ee==="undefined"||ee==="boolean")&&(N=null);var F=!1;if(N===null)F=!0;else switch(ee){case"bigint":case"string":case"number":F=!0;break;case"object":switch(N.$$typeof){case s:case i:F=!0;break;case g:return F=N._init,U(F(N._payload),I,re,O,Q)}}if(F)return Q=Q(N),F=O===""?"."+Ae(N,0):O,oe(Q)?(re="",F!=null&&(re=F.replace(Ye,"$&/")+"/"),U(Q,I,re,"",function(Pn){return Pn})):Q!=null&&(xe(Q)&&(Q=ye(Q,re+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(Ye,"$&/")+"/")+F)),I.push(Q)),1;F=0;var He=O===""?".":O+":";if(oe(N))for(var Oe=0;Oe<N.length;Oe++)O=N[Oe],ee=He+Ae(O,Oe),F+=U(O,I,re,ee,Q);else if(Oe=G(N),typeof Oe=="function")for(N=Oe.call(N),Oe=0;!(O=N.next()).done;)O=O.value,ee=He+Ae(O,Oe++),F+=U(O,I,re,ee,Q);else if(ee==="object"){if(typeof N.then=="function")return U(Pe(N),I,re,O,Q);throw I=String(N),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return F}function te(N,I,re){if(N==null)return N;var O=[],Q=0;return U(N,O,"","",function(ee){return I.call(re,ee,Q++)}),O}function ce(N){if(N._status===-1){var I=N._result;I=I(),I.then(function(re){(N._status===0||N._status===-1)&&(N._status=1,N._result=re)},function(re){(N._status===0||N._status===-1)&&(N._status=2,N._result=re)}),N._status===-1&&(N._status=0,N._result=I)}if(N._status===1)return N._result.default;throw N._result}var ue=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},we={map:te,forEach:function(N,I,re){te(N,function(){I.apply(this,arguments)},re)},count:function(N){var I=0;return te(N,function(){I++}),I},toArray:function(N){return te(N,function(I){return I})||[]},only:function(N){if(!xe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Ee.Activity=v,Ee.Children=we,Ee.Component=L,Ee.Fragment=c,Ee.Profiler=f,Ee.PureComponent=ie,Ee.StrictMode=a,Ee.Suspense=w,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(N){return J.H.useMemoCache(N)}},Ee.cache=function(N){return function(){return N.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(N,I,re){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var O=K({},N.props),Q=N.key;if(I!=null)for(ee in I.key!==void 0&&(Q=""+I.key),I)!W.call(I,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&I.ref===void 0||(O[ee]=I[ee]);var ee=arguments.length-2;if(ee===1)O.children=re;else if(1<ee){for(var F=Array(ee),He=0;He<ee;He++)F[He]=arguments[He+2];O.children=F}return Se(N.type,Q,O)},Ee.createContext=function(N){return N={$$typeof:_,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:p,_context:N},N},Ee.createElement=function(N,I,re){var O,Q={},ee=null;if(I!=null)for(O in I.key!==void 0&&(ee=""+I.key),I)W.call(I,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(Q[O]=I[O]);var F=arguments.length-2;if(F===1)Q.children=re;else if(1<F){for(var He=Array(F),Oe=0;Oe<F;Oe++)He[Oe]=arguments[Oe+2];Q.children=He}if(N&&N.defaultProps)for(O in F=N.defaultProps,F)Q[O]===void 0&&(Q[O]=F[O]);return Se(N,ee,Q)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(N){return{$$typeof:y,render:N}},Ee.isValidElement=xe,Ee.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ce}},Ee.memo=function(N,I){return{$$typeof:x,type:N,compare:I===void 0?null:I}},Ee.startTransition=function(N){var I=J.T,re={};J.T=re;try{var O=N(),Q=J.S;Q!==null&&Q(re,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(he,ue)}catch(ee){ue(ee)}finally{I!==null&&re.types!==null&&(I.types=re.types),J.T=I}},Ee.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},Ee.use=function(N){return J.H.use(N)},Ee.useActionState=function(N,I,re){return J.H.useActionState(N,I,re)},Ee.useCallback=function(N,I){return J.H.useCallback(N,I)},Ee.useContext=function(N){return J.H.useContext(N)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(N,I){return J.H.useDeferredValue(N,I)},Ee.useEffect=function(N,I){return J.H.useEffect(N,I)},Ee.useEffectEvent=function(N){return J.H.useEffectEvent(N)},Ee.useId=function(){return J.H.useId()},Ee.useImperativeHandle=function(N,I,re){return J.H.useImperativeHandle(N,I,re)},Ee.useInsertionEffect=function(N,I){return J.H.useInsertionEffect(N,I)},Ee.useLayoutEffect=function(N,I){return J.H.useLayoutEffect(N,I)},Ee.useMemo=function(N,I){return J.H.useMemo(N,I)},Ee.useOptimistic=function(N,I){return J.H.useOptimistic(N,I)},Ee.useReducer=function(N,I,re){return J.H.useReducer(N,I,re)},Ee.useRef=function(N){return J.H.useRef(N)},Ee.useState=function(N){return J.H.useState(N)},Ee.useSyncExternalStore=function(N,I,re){return J.H.useSyncExternalStore(N,I,re)},Ee.useTransition=function(){return J.H.useTransition()},Ee.version="19.2.7",Ee}var sh;function Kf(){return sh||(sh=1,yf.exports=tb()),yf.exports}var z=Kf();const ms=o_(z);var vf={exports:{}},is={},xf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function rb(){return oh||(oh=1,(function(s){function i(U,te){var ce=U.length;U.push(te);e:for(;0<ce;){var ue=ce-1>>>1,we=U[ue];if(0<f(we,te))U[ue]=te,U[ce]=we,ce=ue;else break e}}function c(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var te=U[0],ce=U.pop();if(ce!==te){U[0]=ce;e:for(var ue=0,we=U.length,N=we>>>1;ue<N;){var I=2*(ue+1)-1,re=U[I],O=I+1,Q=U[O];if(0>f(re,ce))O<we&&0>f(Q,re)?(U[ue]=Q,U[O]=ce,ue=O):(U[ue]=re,U[I]=ce,ue=I);else if(O<we&&0>f(Q,ce))U[ue]=Q,U[O]=ce,ue=O;else break e}}return te}function f(U,te){var ce=U.sortIndex-te.sortIndex;return ce!==0?ce:U.id-te.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var _=Date,y=_.now();s.unstable_now=function(){return _.now()-y}}var w=[],x=[],g=1,v=null,S=3,G=!1,Y=!1,K=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function se(U){for(var te=c(x);te!==null;){if(te.callback===null)a(x);else if(te.startTime<=U)a(x),te.sortIndex=te.expirationTime,i(w,te);else break;te=c(x)}}function oe(U){if(K=!1,se(U),!Y)if(c(w)!==null)Y=!0,he||(he=!0,Z());else{var te=c(x);te!==null&&Pe(oe,te.startTime-U)}}var he=!1,J=-1,W=5,Se=-1;function ye(){return D?!0:!(s.unstable_now()-Se<W)}function xe(){if(D=!1,he){var U=s.unstable_now();Se=U;var te=!0;try{e:{Y=!1,K&&(K=!1,H(J),J=-1),G=!0;var ce=S;try{n:{for(se(U),v=c(w);v!==null&&!(v.expirationTime>U&&ye());){var ue=v.callback;if(typeof ue=="function"){v.callback=null,S=v.priorityLevel;var we=ue(v.expirationTime<=U);if(U=s.unstable_now(),typeof we=="function"){v.callback=we,se(U),te=!0;break n}v===c(w)&&a(w),se(U)}else a(w);v=c(w)}if(v!==null)te=!0;else{var N=c(x);N!==null&&Pe(oe,N.startTime-U),te=!1}}break e}finally{v=null,S=ce,G=!1}te=void 0}}finally{te?Z():he=!1}}}var Z;if(typeof ie=="function")Z=function(){ie(xe)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Ae=Ye.port2;Ye.port1.onmessage=xe,Z=function(){Ae.postMessage(null)}}else Z=function(){L(xe,0)};function Pe(U,te){J=L(function(){U(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(U){switch(S){case 1:case 2:case 3:var te=3;break;default:te=S}var ce=S;S=te;try{return U()}finally{S=ce}},s.unstable_requestPaint=function(){D=!0},s.unstable_runWithPriority=function(U,te){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ce=S;S=U;try{return te()}finally{S=ce}},s.unstable_scheduleCallback=function(U,te,ce){var ue=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ue+ce:ue):ce=ue,U){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ce+we,U={id:g++,callback:te,priorityLevel:U,startTime:ce,expirationTime:we,sortIndex:-1},ce>ue?(U.sortIndex=ce,i(x,U),c(w)===null&&U===c(x)&&(K?(H(J),J=-1):K=!0,Pe(oe,ce-ue))):(U.sortIndex=we,i(w,U),Y||G||(Y=!0,he||(he=!0,Z()))),U},s.unstable_shouldYield=ye,s.unstable_wrapCallback=function(U){var te=S;return function(){var ce=S;S=te;try{return U.apply(this,arguments)}finally{S=ce}}}})(wf)),wf}var ch;function lb(){return ch||(ch=1,xf.exports=rb()),xf.exports}var Ef={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function ib(){if(uh)return Vn;uh=1;var s=Kf();function i(w){var x="https://react.dev/errors/"+w;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)x+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+w+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(w,x,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:w,containerInfo:x,implementation:g}}var _=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(w,x){if(w==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Vn.createPortal=function(w,x){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return p(w,x,null,g)},Vn.flushSync=function(w){var x=_.T,g=a.p;try{if(_.T=null,a.p=2,w)return w()}finally{_.T=x,a.p=g,a.d.f()}},Vn.preconnect=function(w,x){typeof w=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,a.d.C(w,x))},Vn.prefetchDNS=function(w){typeof w=="string"&&a.d.D(w)},Vn.preinit=function(w,x){if(typeof w=="string"&&x&&typeof x.as=="string"){var g=x.as,v=y(g,x.crossOrigin),S=typeof x.integrity=="string"?x.integrity:void 0,G=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;g==="style"?a.d.S(w,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:G}):g==="script"&&a.d.X(w,{crossOrigin:v,integrity:S,fetchPriority:G,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Vn.preinitModule=function(w,x){if(typeof w=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var g=y(x.as,x.crossOrigin);a.d.M(w,{crossOrigin:g,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&a.d.M(w)},Vn.preload=function(w,x){if(typeof w=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var g=x.as,v=y(g,x.crossOrigin);a.d.L(w,g,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Vn.preloadModule=function(w,x){if(typeof w=="string")if(x){var g=y(x.as,x.crossOrigin);a.d.m(w,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:g,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else a.d.m(w)},Vn.requestFormReset=function(w){a.d.r(w)},Vn.unstable_batchedUpdates=function(w,x){return w(x)},Vn.useFormState=function(w,x,g){return _.H.useFormState(w,x,g)},Vn.useFormStatus=function(){return _.H.useHostTransitionStatus()},Vn.version="19.2.7",Vn}var fh;function ab(){if(fh)return Ef.exports;fh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Ef.exports=ib(),Ef.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function sb(){if(dh)return is;dh=1;var s=lb(),i=Kf(),c=ab();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function w(e){if(p(e)!==e)throw Error(a(188))}function x(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return w(l),e;if(o===r)return w(l),n;o=o.sibling}throw Error(a(188))}if(t.return!==r.return)t=l,r=o;else{for(var m=!1,b=l.child;b;){if(b===t){m=!0,t=l,r=o;break}if(b===r){m=!0,r=l,t=o;break}b=b.sibling}if(!m){for(b=o.child;b;){if(b===t){m=!0,t=o,r=l;break}if(b===r){m=!0,r=o,t=l;break}b=b.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case L:return"Profiler";case D:return"StrictMode";case oe:return"Suspense";case he:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case ie:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case se:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var Pe=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},ue=[],we=-1;function N(e){return{current:e}}function I(e){0>we||(e.current=ue[we],ue[we]=null,we--)}function re(e,n){we++,ue[we]=e.current,e.current=n}var O=N(null),Q=N(null),ee=N(null),F=N(null);function He(e,n){switch(re(ee,n),re(Q,e),re(O,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rp(n),e=Tp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(O),re(O,e)}function Oe(){I(O),I(Q),I(ee)}function Pn(e){e.memoizedState!==null&&re(F,e);var n=O.current,t=Tp(n,e.type);n!==t&&(re(Q,e),re(O,t))}function Wt(e){Q.current===e&&(I(O),I(Q)),F.current===e&&(I(F),es._currentValue=ce)}var ve,xn;function Rn(e){if(ve===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ve=n&&n[1]||"",xn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ve+e+xn}var Be=!1;function Tn(e,n){if(!e||Be)return"";Be=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(V){var B=V}Reflect.construct(e,[],X)}else{try{X.call()}catch(V){B=V}e.call(X.prototype)}}else{try{throw Error()}catch(V){B=V}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(V){if(V&&B&&typeof V.stack=="string")return[V.stack,B.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),m=o[0],b=o[1];if(m&&b){var k=m.split(`
`),C=b.split(`
`);for(l=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(r===k.length||l===C.length)for(r=k.length-1,l=C.length-1;1<=r&&0<=l&&k[r]!==C[l];)l--;for(;1<=r&&0<=l;r--,l--)if(k[r]!==C[l]){if(r!==1||l!==1)do if(r--,l--,0>l||k[r]!==C[l]){var P=`
`+k[r].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=r&&0<=l);break}}}finally{Be=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Rn(t):""}function Vt(e,n){switch(e.tag){case 26:case 27:case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return e.child!==n&&n!==null?Rn("Suspense Fallback"):Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 15:return Tn(e.type,!1);case 11:return Tn(e.type.render,!1);case 1:return Tn(e.type,!0);case 31:return Rn("Activity");default:return""}}function Un(e){try{var n="",t=null;do n+=Vt(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Hr=Object.prototype.hasOwnProperty,Gr=s.unstable_scheduleCallback,kt=s.unstable_cancelCallback,oi=s.unstable_shouldYield,Ir=s.unstable_requestPaint,wn=s.unstable_now,kl=s.unstable_getCurrentPriorityLevel,Nl=s.unstable_ImmediatePriority,ra=s.unstable_UserBlockingPriority,Rl=s.unstable_NormalPriority,$n=s.unstable_LowPriority,dt=s.unstable_IdlePriority,Jt=s.log,ci=s.unstable_setDisableYieldValue,Tl=null,En=null;function mt(e){if(typeof Jt=="function"&&ci(e),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(Tl,e)}catch{}}var jn=Math.clz32?Math.clz32:ur,Vr=Math.log,cr=Math.LN2;function ur(e){return e>>>=0,e===0?32:31-(Vr(e)/cr|0)|0}var Yt=256,qn=262144,Qe=4194304;function an(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hn(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~o,r!==0?l=an(r):(m&=b,m!==0?l=an(m):t||(t=b&~e,t!==0&&(l=an(t))))):(b=r&~o,b!==0?l=an(b):m!==0?l=an(m):t||(t=r&~e,t!==0&&(l=an(t)))),l===0?0:n!==0&&n!==l&&(n&o)===0&&(o=l&-l,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:l}function Dn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ic(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ui(){var e=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),e}function er(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ml(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fr(e,n,t,r,l,o){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var b=e.entanglements,k=e.expirationTimes,C=e.hiddenUpdates;for(t=m&~t;0<t;){var P=31-jn(t),X=1<<P;b[P]=0,k[P]=-1;var B=C[P];if(B!==null)for(C[P]=null,P=0;P<B.length;P++){var V=B[P];V!==null&&(V.lane&=-536870913)}t&=~X}r!==0&&bs(e,r,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~n))}function bs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-jn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function fi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-jn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function ys(e,n){var t=n&-n;return t=(t&42)!==0?1:Yr(t),(t&(e.suspendedLanes|n))!==0?0:t}function Yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sn(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:Zp(e.type))}function la(e,n){var t=te.p;try{return te.p=e,n()}finally{te.p=t}}var An=Math.random().toString(36).slice(2),fn="__reactFiber$"+An,Sn="__reactProps$"+An,pt="__reactContainer$"+An,jl="__reactEvents$"+An,Rt="__reactListeners$"+An,dr="__reactHandles$"+An,Pr="__reactResources$"+An,Fn="__reactMarker$"+An;function nr(e){delete e[fn],delete e[Sn],delete e[jl],delete e[Rt],delete e[dr]}function Tt(e){var n=e[fn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[pt]||t[fn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Lp(e);e!==null;){if(t=e[fn])return t;e=Lp(e)}return n}e=t,t=e.parentNode}return null}function nt(e){if(e=e[fn]||e[pt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function mr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Xn(e){var n=e[Pr];return n||(n=e[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[Fn]=!0}var tr=new Set,pr={};function tt(e,n){hr(e,n),hr(e+"Capture",n)}function hr(e,n){for(pr[e]=n,e=0;e<n.length;e++)tr.add(n[e])}var Dl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Al={},Ol={};function $r(e){return Hr.call(Ol,e)?!0:Hr.call(Al,e)?!1:Dl.test(e)?Ol[e]=!0:(Al[e]=!0,!1)}function Pt(e,n,t){if($r(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function _e(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function ht(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ac(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){t=""+m,o.call(this,m)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ia(e){if(!e._valueTracker){var n=vs(e)?"checked":"value";e._valueTracker=ac(e,n,""+e[n])}}function qr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=vs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mt=/[\n"\\]/g;function Hn(e){return e.replace(Mt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gn(e,n,t,r,l,o,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+rt(n)):e.value!==""+rt(n)&&(e.value=""+rt(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?aa(e,m,rt(n)):t!=null?aa(e,m,rt(t)):r!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+rt(b):e.removeAttribute("name")}function xs(e,n,t,r,l,o,m,b){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){ia(e);return}t=t!=null?""+rt(t):"",n=n!=null?""+rt(n):t,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),ia(e)}function aa(e,n,t){n==="number"&&$t(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function _r(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+rt(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function di(e,n,t){if(n!=null&&(n=""+rt(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+rt(t):""}function $(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(a(92));if(Pe(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=rt(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),ia(e)}function Fr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var sc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ws(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||sc.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Xr(e,n,t){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&t[l]!==r&&ws(e,l,r)}else for(var o in n)n.hasOwnProperty(o)&&ws(e,o,n[o])}function mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(e){return on.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var gr=null;function sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,Qr=null;function oa(e){var n=nt(e);if(n&&(e=n.stateNode)){var t=e[Sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Gn(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Hn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=r[Sn]||null;if(!l)throw Error(a(90));Gn(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&qr(r)}break e;case"textarea":di(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&_r(e,!!t.multiple,n,!1)}}}var ca=!1;function ua(e,n,t){if(ca)return e(n,t);ca=!0;try{var r=e(n);return r}finally{if(ca=!1,(Kr!==null||Qr!==null)&&(yo(),Kr&&(n=Kr,e=Qr,Qr=Kr=null,oa(n),e)))for(n=0;n<e.length;n++)oa(e[n])}}function lt(e,n){var t=e.stateNode;if(t===null)return null;var r=t[Sn]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=!1;if(it)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){fa=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{fa=!1}var qt=null,Ll=null,dn=null;function Zr(){if(dn)return dn;var e,n=Ll,t=n.length,r,l="value"in qt?qt.value:qt.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var m=t-e;for(r=1;r<=m&&n[t-r]===l[o-r];r++);return dn=l.slice(e,1<r?1-r:void 0)}function hi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Wr(){return!1}function In(e){function n(t,r,l,o,m){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(t=e[b],this[b]=t?t(o):o[b]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_i:Wr,this.isPropagationStopped=Wr,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},br=In(rr),Ft=v({},rr,{view:0,detail:0}),Es=In(Ft),da,ma,Bl,Kn=v({},Ft,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(da=e.screenX-Bl.screenX,ma=e.screenY-Bl.screenY):ma=da=0,Bl=e),da)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),nn=In(Kn),Ss=v({},Kn,{dataTransfer:0}),zl=In(Ss),ks=v({},Ft,{relatedTarget:0}),gi=In(ks),Ns=v({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),oc=In(Ns),cc=v({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uc=In(cc),Rs=v({},rr,{data:0}),pa=In(Rs),ha={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ts={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ms(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ts[e])?!!n[e]:!1}function bi(){return Ms}var dc=v({},Ft,{key:function(e){if(e.key){var n=ha[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bi,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mc=In(dc),pc=v({},Kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=In(pc),hc=v({},Ft,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bi}),_c=In(hc),gc=v({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bc=In(gc),yc=v({},Kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vc=In(yc),xc=v({},rr,{newState:0,oldState:0}),wc=In(xc),Ec=[9,13,27,32],lr=it&&"CompositionEvent"in window,Ul=null;it&&"documentMode"in document&&(Ul=document.documentMode);var Sc=it&&"TextEvent"in window&&!Ul,_a=it&&(!lr||Ul&&8<Ul&&11>=Ul),Ds=" ",ga=!1;function As(e,n){switch(e){case"keyup":return Ec.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function kc(e,n){switch(e){case"compositionend":return Os(n);case"keypress":return n.which!==32?null:(ga=!0,Ds);case"textInput":return e=n.data,e===Ds&&ga?null:e;default:return null}}function Nc(e,n){if(yr)return e==="compositionend"||!lr&&As(e,n)?(e=Zr(),dn=Ll=qt=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _a&&n.locale!=="ko"?null:n.data;default:return null}}var Rc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rc[e.type]:n==="textarea"}function Ls(e,n,t,r){Kr?Qr?Qr.push(r):Qr=[r]:Kr=r,n=No(n,"onChange"),0<n.length&&(t=new br("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Hl=null,Gl=null;function ba(e){xp(e,0)}function Qn(e){var n=mr(e);if(qr(n))return e}function ya(e,n){if(e==="change")return n}var Bs=!1;if(it){var va;if(it){var Il="oninput"in document;if(!Il){var Vl=document.createElement("div");Vl.setAttribute("oninput","return;"),Il=typeof Vl.oninput=="function"}va=Il}else va=!1;Bs=va&&(!document.documentMode||9<document.documentMode)}function yi(){Hl&&(Hl.detachEvent("onpropertychange",xa),Gl=Hl=null)}function xa(e){if(e.propertyName==="value"&&Qn(Gl)){var n=[];Ls(n,Gl,e,sa(e)),ua(ba,n)}}function vi(e,n,t){e==="focusin"?(yi(),Hl=n,Gl=t,Hl.attachEvent("onpropertychange",xa)):e==="focusout"&&yi()}function wa(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qn(Gl)}function zs(e,n){if(e==="click")return Qn(n)}function Tc(e,n){if(e==="input"||e==="change")return Qn(n)}function Mc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Mc;function d(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Hr.call(n,l)||!Zn(e[l],n[l]))return!1}return!0}function h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function E(e,n){var t=h(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=h(t)}}function j(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?j(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function T(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$t(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=$t(e.document)}return n}function ne(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var pe=it&&"documentMode"in document&&11>=document.documentMode,ze=null,Me=null,tn=null,Wn=!1;function Jr(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wn||ze==null||ze!==$t(r)||(r=ze,"selectionStart"in r&&ne(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tn&&d(tn,r)||(tn=r,r=No(Me,"onSelect"),0<r.length&&(n=new br("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ze)))}function Ne(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ln={animationend:Ne("Animation","AnimationEnd"),animationiteration:Ne("Animation","AnimationIteration"),animationstart:Ne("Animation","AnimationStart"),transitionrun:Ne("Transition","TransitionRun"),transitionstart:Ne("Transition","TransitionStart"),transitioncancel:Ne("Transition","TransitionCancel"),transitionend:Ne("Transition","TransitionEnd")},Xt={},jt={};it&&(jt=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function On(e){if(Xt[e])return Xt[e];if(!ln[e])return e;var n=ln[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in jt)return Xt[e]=n[t];return e}var vr=On("animationend"),xr=On("animationiteration"),Ea=On("animationstart"),xi=On("transitionrun"),Sa=On("transitionstart"),Yl=On("transitioncancel"),ka=On("transitionend"),nd=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function Kt(e,n){nd.set(e,n),tt(n,[e])}var Us=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],wi=0,Dc=0;function Hs(){for(var e=wi,n=Dc=wi=0;n<e;){var t=Dt[n];Dt[n++]=null;var r=Dt[n];Dt[n++]=null;var l=Dt[n];Dt[n++]=null;var o=Dt[n];if(Dt[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}o!==0&&td(t,l,o)}}function Gs(e,n,t,r){Dt[wi++]=e,Dt[wi++]=n,Dt[wi++]=t,Dt[wi++]=r,Dc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ac(e,n,t,r){return Gs(e,n,t,r),Is(e)}function Pl(e,n){return Gs(e,null,null,n),Is(e)}function td(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,r=o.alternate,r!==null&&(r.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&n!==null&&(l=31-jn(t),e=o.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=t|536870912),o):null}function Is(e){if(50<Fa)throw Fa=0,Iu=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ei={};function L_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,n,t,r){return new L_(e,n,t,r)}function Oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wr(e,n){var t=e.alternate;return t===null?(t=gt(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function rd(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Vs(e,n,t,r,l,o){var m=0;if(r=e,typeof e=="function")Oc(e)&&(m=1);else if(typeof e=="string")m=Gg(e,t,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=gt(31,t,n,l),e.elementType=Se,e.lanes=o,e;case K:return $l(t.children,l,o,n);case D:m=8,l|=24;break;case L:return e=gt(12,t,n,l|2),e.elementType=L,e.lanes=o,e;case oe:return e=gt(13,t,n,l),e.elementType=oe,e.lanes=o,e;case he:return e=gt(19,t,n,l),e.elementType=he,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ie:m=10;break e;case H:m=9;break e;case se:m=11;break e;case J:m=14;break e;case W:m=16,r=null;break e}m=29,t=Error(a(130,e===null?"null":typeof e,"")),r=null}return n=gt(m,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function $l(e,n,t,r){return e=gt(7,e,r,n),e.lanes=t,e}function Cc(e,n,t){return e=gt(6,e,null,n),e.lanes=t,e}function ld(e){var n=gt(18,null,null,0);return n.stateNode=e,n}function Lc(e,n,t){return n=gt(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var id=new WeakMap;function At(e,n){if(typeof e=="object"&&e!==null){var t=id.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Un(n)},id.set(e,n),n)}return{value:e,source:n,stack:Un(n)}}var Si=[],ki=0,Ys=null,Na=0,Ot=[],Ct=0,el=null,ir=1,ar="";function Er(e,n){Si[ki++]=Na,Si[ki++]=Ys,Ys=e,Na=n}function ad(e,n,t){Ot[Ct++]=ir,Ot[Ct++]=ar,Ot[Ct++]=el,el=e;var r=ir;e=ar;var l=32-jn(r)-1;r&=~(1<<l),t+=1;var o=32-jn(n)+l;if(30<o){var m=l-l%5;o=(r&(1<<m)-1).toString(32),r>>=m,l-=m,ir=1<<32-jn(n)+l|t<<l|r,ar=o+e}else ir=1<<o|t<<l|r,ar=e}function Bc(e){e.return!==null&&(Er(e,1),ad(e,1,0))}function zc(e){for(;e===Ys;)Ys=Si[--ki],Si[ki]=null,Na=Si[--ki],Si[ki]=null;for(;e===el;)el=Ot[--Ct],Ot[Ct]=null,ar=Ot[--Ct],Ot[Ct]=null,ir=Ot[--Ct],Ot[Ct]=null}function sd(e,n){Ot[Ct++]=ir,Ot[Ct++]=ar,Ot[Ct++]=el,ir=n.id,ar=n.overflow,el=e}var Cn=null,We=null,Ue=!1,nl=null,Lt=!1,Uc=Error(a(519));function tl(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ra(At(n,e)),Uc}function od(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[fn]=e,n[Sn]=r,t){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(t=0;t<Ka.length;t++)De(Ka[t],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),xs(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),$(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||kp(n.textContent,t)?(r.popover!=null&&(De("beforetoggle",n),De("toggle",n)),r.onScroll!=null&&De("scroll",n),r.onScrollEnd!=null&&De("scrollend",n),r.onClick!=null&&(n.onclick=_t),n=!0):n=!1,n||tl(e,!0)}function cd(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:Cn=Cn.return}}function Ni(e){if(e!==Cn)return!1;if(!Ue)return cd(e),Ue=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||tf(e.type,e.memoizedProps)),t=!t),t&&We&&tl(e),cd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=Cp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=Cp(e)}else n===27?(n=We,_l(e.type)?(e=of,of=null,We=e):We=n):We=Cn?zt(e.stateNode.nextSibling):null;return!0}function ql(){We=Cn=null,Ue=!1}function Hc(){var e=nl;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),nl=null),e}function Ra(e){nl===null?nl=[e]:nl.push(e)}var Gc=N(null),Fl=null,Sr=null;function rl(e,n,t){re(Gc,n._currentValue),n._currentValue=t}function kr(e){e._currentValue=Gc.current,I(Gc)}function Ic(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Vc(e,n,t,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var m=l.child;o=o.firstContext;e:for(;o!==null;){var b=o;o=l;for(var k=0;k<n.length;k++)if(b.context===n[k]){o.lanes|=t,b=o.alternate,b!==null&&(b.lanes|=t),Ic(o.return,t,e),r||(m=null);break e}o=b.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(a(341));m.lanes|=t,o=m.alternate,o!==null&&(o.lanes|=t),Ic(m,t,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Ri(e,n,t,r){e=null;for(var l=n,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var b=l.type;Zn(l.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(l===F.current){if(m=l.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(es):e=[es])}l=l.return}e!==null&&Vc(n,e,t,r),n.flags|=262144}function Ps(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xl(e){Fl=e,Sr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return ud(Fl,e)}function $s(e,n){return Fl===null&&Xl(e),ud(e,n)}function ud(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Sr===null){if(e===null)throw Error(a(308));Sr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Sr=Sr.next=n;return t}var B_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},z_=s.unstable_scheduleCallback,U_=s.unstable_NormalPriority,gn={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yc(){return{controller:new B_,data:new Map,refCount:0}}function Ta(e){e.refCount--,e.refCount===0&&z_(U_,function(){e.controller.abort()})}var Ma=null,Pc=0,Ti=0,Mi=null;function H_(e,n){if(Ma===null){var t=Ma=[];Pc=0,Ti=Fu(),Mi={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Pc++,n.then(fd,fd),n}function fd(){if(--Pc===0&&Ma!==null){Mi!==null&&(Mi.status="fulfilled");var e=Ma;Ma=null,Ti=0,Mi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function G_(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var dd=U.S;U.S=function(e,n){Km=wn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&H_(e,n),dd!==null&&dd(e,n)};var Kl=N(null);function $c(){var e=Kl.current;return e!==null?e:Ze.pooledCache}function qs(e,n){n===null?re(Kl,Kl.current):re(Kl,n.pool)}function md(){var e=$c();return e===null?null:{parent:gn._currentValue,pool:e}}var ji=Error(a(460)),qc=Error(a(474)),Fs=Error(a(542)),Xs={then:function(){}};function pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(_t,_t),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gd(e),e;default:if(typeof n.status=="string")n.then(_t,_t);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gd(e),e}throw Zl=n,ji}}function Ql(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Zl=t,ji):t}}var Zl=null;function _d(){if(Zl===null)throw Error(a(459));var e=Zl;return Zl=null,e}function gd(e){if(e===ji||e===Fs)throw Error(a(483))}var Di=null,ja=0;function Ks(e){var n=ja;return ja+=1,Di===null&&(Di=[]),hd(Di,e,n)}function Da(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Qs(e,n){throw n.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bd(e){function n(M,R){if(e){var A=M.deletions;A===null?(M.deletions=[R],M.flags|=16):A.push(R)}}function t(M,R){if(!e)return null;for(;R!==null;)n(M,R),R=R.sibling;return null}function r(M){for(var R=new Map;M!==null;)M.key!==null?R.set(M.key,M):R.set(M.index,M),M=M.sibling;return R}function l(M,R){return M=wr(M,R),M.index=0,M.sibling=null,M}function o(M,R,A){return M.index=A,e?(A=M.alternate,A!==null?(A=A.index,A<R?(M.flags|=67108866,R):A):(M.flags|=67108866,R)):(M.flags|=1048576,R)}function m(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function b(M,R,A,q){return R===null||R.tag!==6?(R=Cc(A,M.mode,q),R.return=M,R):(R=l(R,A),R.return=M,R)}function k(M,R,A,q){var ge=A.type;return ge===K?P(M,R,A.props.children,q,A.key):R!==null&&(R.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===W&&Ql(ge)===R.type)?(R=l(R,A.props),Da(R,A),R.return=M,R):(R=Vs(A.type,A.key,A.props,null,M.mode,q),Da(R,A),R.return=M,R)}function C(M,R,A,q){return R===null||R.tag!==4||R.stateNode.containerInfo!==A.containerInfo||R.stateNode.implementation!==A.implementation?(R=Lc(A,M.mode,q),R.return=M,R):(R=l(R,A.children||[]),R.return=M,R)}function P(M,R,A,q,ge){return R===null||R.tag!==7?(R=$l(A,M.mode,q,ge),R.return=M,R):(R=l(R,A),R.return=M,R)}function X(M,R,A){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Cc(""+R,M.mode,A),R.return=M,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case G:return A=Vs(R.type,R.key,R.props,null,M.mode,A),Da(A,R),A.return=M,A;case Y:return R=Lc(R,M.mode,A),R.return=M,R;case W:return R=Ql(R),X(M,R,A)}if(Pe(R)||Z(R))return R=$l(R,M.mode,A,null),R.return=M,R;if(typeof R.then=="function")return X(M,Ks(R),A);if(R.$$typeof===ie)return X(M,$s(M,R),A);Qs(M,R)}return null}function B(M,R,A,q){var ge=R!==null?R.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ge!==null?null:b(M,R,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case G:return A.key===ge?k(M,R,A,q):null;case Y:return A.key===ge?C(M,R,A,q):null;case W:return A=Ql(A),B(M,R,A,q)}if(Pe(A)||Z(A))return ge!==null?null:P(M,R,A,q,null);if(typeof A.then=="function")return B(M,R,Ks(A),q);if(A.$$typeof===ie)return B(M,R,$s(M,A),q);Qs(M,A)}return null}function V(M,R,A,q,ge){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return M=M.get(A)||null,b(R,M,""+q,ge);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case G:return M=M.get(q.key===null?A:q.key)||null,k(R,M,q,ge);case Y:return M=M.get(q.key===null?A:q.key)||null,C(R,M,q,ge);case W:return q=Ql(q),V(M,R,A,q,ge)}if(Pe(q)||Z(q))return M=M.get(A)||null,P(R,M,q,ge,null);if(typeof q.then=="function")return V(M,R,A,Ks(q),ge);if(q.$$typeof===ie)return V(M,R,A,$s(R,q),ge);Qs(R,q)}return null}function fe(M,R,A,q){for(var ge=null,Ge=null,me=R,Re=R=0,Le=null;me!==null&&Re<A.length;Re++){me.index>Re?(Le=me,me=null):Le=me.sibling;var Ie=B(M,me,A[Re],q);if(Ie===null){me===null&&(me=Le);break}e&&me&&Ie.alternate===null&&n(M,me),R=o(Ie,R,Re),Ge===null?ge=Ie:Ge.sibling=Ie,Ge=Ie,me=Le}if(Re===A.length)return t(M,me),Ue&&Er(M,Re),ge;if(me===null){for(;Re<A.length;Re++)me=X(M,A[Re],q),me!==null&&(R=o(me,R,Re),Ge===null?ge=me:Ge.sibling=me,Ge=me);return Ue&&Er(M,Re),ge}for(me=r(me);Re<A.length;Re++)Le=V(me,M,Re,A[Re],q),Le!==null&&(e&&Le.alternate!==null&&me.delete(Le.key===null?Re:Le.key),R=o(Le,R,Re),Ge===null?ge=Le:Ge.sibling=Le,Ge=Le);return e&&me.forEach(function(xl){return n(M,xl)}),Ue&&Er(M,Re),ge}function be(M,R,A,q){if(A==null)throw Error(a(151));for(var ge=null,Ge=null,me=R,Re=R=0,Le=null,Ie=A.next();me!==null&&!Ie.done;Re++,Ie=A.next()){me.index>Re?(Le=me,me=null):Le=me.sibling;var xl=B(M,me,Ie.value,q);if(xl===null){me===null&&(me=Le);break}e&&me&&xl.alternate===null&&n(M,me),R=o(xl,R,Re),Ge===null?ge=xl:Ge.sibling=xl,Ge=xl,me=Le}if(Ie.done)return t(M,me),Ue&&Er(M,Re),ge;if(me===null){for(;!Ie.done;Re++,Ie=A.next())Ie=X(M,Ie.value,q),Ie!==null&&(R=o(Ie,R,Re),Ge===null?ge=Ie:Ge.sibling=Ie,Ge=Ie);return Ue&&Er(M,Re),ge}for(me=r(me);!Ie.done;Re++,Ie=A.next())Ie=V(me,M,Re,Ie.value,q),Ie!==null&&(e&&Ie.alternate!==null&&me.delete(Ie.key===null?Re:Ie.key),R=o(Ie,R,Re),Ge===null?ge=Ie:Ge.sibling=Ie,Ge=Ie);return e&&me.forEach(function(Zg){return n(M,Zg)}),Ue&&Er(M,Re),ge}function Ke(M,R,A,q){if(typeof A=="object"&&A!==null&&A.type===K&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case G:e:{for(var ge=A.key;R!==null;){if(R.key===ge){if(ge=A.type,ge===K){if(R.tag===7){t(M,R.sibling),q=l(R,A.props.children),q.return=M,M=q;break e}}else if(R.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===W&&Ql(ge)===R.type){t(M,R.sibling),q=l(R,A.props),Da(q,A),q.return=M,M=q;break e}t(M,R);break}else n(M,R);R=R.sibling}A.type===K?(q=$l(A.props.children,M.mode,q,A.key),q.return=M,M=q):(q=Vs(A.type,A.key,A.props,null,M.mode,q),Da(q,A),q.return=M,M=q)}return m(M);case Y:e:{for(ge=A.key;R!==null;){if(R.key===ge)if(R.tag===4&&R.stateNode.containerInfo===A.containerInfo&&R.stateNode.implementation===A.implementation){t(M,R.sibling),q=l(R,A.children||[]),q.return=M,M=q;break e}else{t(M,R);break}else n(M,R);R=R.sibling}q=Lc(A,M.mode,q),q.return=M,M=q}return m(M);case W:return A=Ql(A),Ke(M,R,A,q)}if(Pe(A))return fe(M,R,A,q);if(Z(A)){if(ge=Z(A),typeof ge!="function")throw Error(a(150));return A=ge.call(A),be(M,R,A,q)}if(typeof A.then=="function")return Ke(M,R,Ks(A),q);if(A.$$typeof===ie)return Ke(M,R,$s(M,A),q);Qs(M,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,R!==null&&R.tag===6?(t(M,R.sibling),q=l(R,A),q.return=M,M=q):(t(M,R),q=Cc(A,M.mode,q),q.return=M,M=q),m(M)):t(M,R)}return function(M,R,A,q){try{ja=0;var ge=Ke(M,R,A,q);return Di=null,ge}catch(me){if(me===ji||me===Fs)throw me;var Ge=gt(29,me,null,M.mode);return Ge.lanes=q,Ge.return=M,Ge}finally{}}}var Wl=bd(!0),yd=bd(!1),ll=!1;function Fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function il(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function al(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Is(e),td(e,null,t),n}return Gs(e,r,n,t),Is(e)}function Aa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,fi(e,t)}}function Kc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=m:o=o.next=m,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Qc=!1;function Oa(){if(Qc){var e=Mi;if(e!==null)throw e}}function Ca(e,n,t,r){Qc=!1;var l=e.updateQueue;ll=!1;var o=l.firstBaseUpdate,m=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var k=b,C=k.next;k.next=null,m===null?o=C:m.next=C,m=k;var P=e.alternate;P!==null&&(P=P.updateQueue,b=P.lastBaseUpdate,b!==m&&(b===null?P.firstBaseUpdate=C:b.next=C,P.lastBaseUpdate=k))}if(o!==null){var X=l.baseState;m=0,P=C=k=null,b=o;do{var B=b.lane&-536870913,V=B!==b.lane;if(V?(Ce&B)===B:(r&B)===B){B!==0&&B===Ti&&(Qc=!0),P!==null&&(P=P.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var fe=e,be=b;B=n;var Ke=t;switch(be.tag){case 1:if(fe=be.payload,typeof fe=="function"){X=fe.call(Ke,X,B);break e}X=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=be.payload,B=typeof fe=="function"?fe.call(Ke,X,B):fe,B==null)break e;X=v({},X,B);break e;case 2:ll=!0}}B=b.callback,B!==null&&(e.flags|=64,V&&(e.flags|=8192),V=l.callbacks,V===null?l.callbacks=[B]:V.push(B))}else V={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},P===null?(C=P=V,k=X):P=P.next=V,m|=B;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;V=b,b=V.next,V.next=null,l.lastBaseUpdate=V,l.shared.pending=null}}while(!0);P===null&&(k=X),l.baseState=k,l.firstBaseUpdate=C,l.lastBaseUpdate=P,o===null&&(l.shared.lanes=0),fl|=m,e.lanes=m,e.memoizedState=X}}function vd(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function xd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)vd(t[e],n)}var Ai=N(null),Zs=N(0);function wd(e,n){e=Cr,re(Zs,e),re(Ai,n),Cr=e|n.baseLanes}function Zc(){re(Zs,Cr),re(Ai,Ai.current)}function Wc(){Cr=Zs.current,I(Ai),I(Zs)}var bt=N(null),Bt=null;function sl(e){var n=e.alternate;re(mn,mn.current&1),re(bt,e),Bt===null&&(n===null||Ai.current!==null||n.memoizedState!==null)&&(Bt=e)}function Jc(e){re(mn,mn.current),re(bt,e),Bt===null&&(Bt=e)}function Ed(e){e.tag===22?(re(mn,mn.current),re(bt,e),Bt===null&&(Bt=e)):ol()}function ol(){re(mn,mn.current),re(bt,bt.current)}function yt(e){I(bt),Bt===e&&(Bt=null),I(mn)}var mn=N(0);function Ws(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||af(t)||sf(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Nr=0,ke=null,Fe=null,bn=null,Js=!1,Oi=!1,Jl=!1,eo=0,La=0,Ci=null,I_=0;function cn(){throw Error(a(321))}function eu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Zn(e[t],n[t]))return!1;return!0}function nu(e,n,t,r,l,o){return Nr=o,ke=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?am:_u,Jl=!1,o=t(r,l),Jl=!1,Oi&&(o=kd(n,t,r,l)),Sd(e),o}function Sd(e){U.H=Ua;var n=Fe!==null&&Fe.next!==null;if(Nr=0,bn=Fe=ke=null,Js=!1,La=0,Ci=null,n)throw Error(a(300));e===null||yn||(e=e.dependencies,e!==null&&Ps(e)&&(yn=!0))}function kd(e,n,t,r){ke=e;var l=0;do{if(Oi&&(Ci=null),La=0,Oi=!1,25<=l)throw Error(a(301));if(l+=1,bn=Fe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}U.H=sm,o=n(t,r)}while(Oi);return o}function V_(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Ba(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(ke.flags|=1024),n}function tu(){var e=eo!==0;return eo=0,e}function ru(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function lu(e){if(Js){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Js=!1}Nr=0,bn=Fe=ke=null,Oi=!1,La=eo=0,Ci=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?ke.memoizedState=bn=e:bn=bn.next=e,bn}function pn(){if(Fe===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=bn===null?ke.memoizedState:bn.next;if(n!==null)bn=n,Fe=e;else{if(e===null)throw ke.alternate===null?Error(a(467)):Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},bn===null?ke.memoizedState=bn=e:bn=bn.next=e}return bn}function no(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ba(e){var n=La;return La+=1,Ci===null&&(Ci=[]),e=hd(Ci,e,n),n=ke,(bn===null?n.memoizedState:bn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?am:_u),e}function to(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ba(e);if(e.$$typeof===ie)return Ln(e)}throw Error(a(438,String(e)))}function iu(e){var n=null,t=ke.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=ke.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=no(),ke.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=ye;return n.index++,t}function Rr(e,n){return typeof n=="function"?n(e):n}function ro(e){var n=pn();return au(n,Fe,e)}function au(e,n,t){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=e.baseQueue,o=r.pending;if(o!==null){if(l!==null){var m=l.next;l.next=o.next,o.next=m}n.baseQueue=l=o,r.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{n=l.next;var b=m=null,k=null,C=n,P=!1;do{var X=C.lane&-536870913;if(X!==C.lane?(Ce&X)===X:(Nr&X)===X){var B=C.revertLane;if(B===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),X===Ti&&(P=!0);else if((Nr&B)===B){C=C.next,B===Ti&&(P=!0);continue}else X={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},k===null?(b=k=X,m=o):k=k.next=X,ke.lanes|=B,fl|=B;X=C.action,Jl&&t(o,X),o=C.hasEagerState?C.eagerState:t(o,X)}else B={lane:X,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},k===null?(b=k=B,m=o):k=k.next=B,ke.lanes|=X,fl|=X;C=C.next}while(C!==null&&C!==n);if(k===null?m=o:k.next=b,!Zn(o,e.memoizedState)&&(yn=!0,P&&(t=Mi,t!==null)))throw t;e.memoizedState=o,e.baseState=m,e.baseQueue=k,r.lastRenderedState=o}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function su(e){var n=pn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var m=l=l.next;do o=e(o,m.action),m=m.next;while(m!==l);Zn(o,n.memoizedState)||(yn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Nd(e,n,t){var r=ke,l=pn(),o=Ue;if(o){if(t===void 0)throw Error(a(407));t=t()}else t=n();var m=!Zn((Fe||l).memoizedState,t);if(m&&(l.memoizedState=t,yn=!0),l=l.queue,uu(Md.bind(null,r,l,e),[e]),l.getSnapshot!==n||m||bn!==null&&bn.memoizedState.tag&1){if(r.flags|=2048,Li(9,{destroy:void 0},Td.bind(null,r,l,t,n),null),Ze===null)throw Error(a(349));o||(Nr&127)!==0||Rd(r,n,t)}return t}function Rd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ke.updateQueue,n===null?(n=no(),ke.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Td(e,n,t,r){n.value=t,n.getSnapshot=r,jd(n)&&Dd(e)}function Md(e,n,t){return t(function(){jd(n)&&Dd(e)})}function jd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Zn(e,t)}catch{return!0}}function Dd(e){var n=Pl(e,2);n!==null&&ut(n,e,2)}function ou(e){var n=Jn();if(typeof e=="function"){var t=e;if(e=t(),Jl){mt(!0);try{t()}finally{mt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},n}function Ad(e,n,t,r){return e.baseState=t,au(e,Fe,typeof r=="function"?r:Rr)}function Y_(e,n,t,r,l){if(ao(e))throw Error(a(485));if(e=n.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};U.T!==null?t(!0):o.isTransition=!1,r(o),t=n.pending,t===null?(o.next=n.pending=o,Od(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Od(e,n){var t=n.action,r=n.payload,l=e.state;if(n.isTransition){var o=U.T,m={};U.T=m;try{var b=t(l,r),k=U.S;k!==null&&k(m,b),Cd(e,n,b)}catch(C){cu(e,n,C)}finally{o!==null&&m.types!==null&&(o.types=m.types),U.T=o}}else try{o=t(l,r),Cd(e,n,o)}catch(C){cu(e,n,C)}}function Cd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){Ld(e,n,r)},function(r){return cu(e,n,r)}):Ld(e,n,t)}function Ld(e,n,t){n.status="fulfilled",n.value=t,Bd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Od(e,t)))}function cu(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,Bd(n),n=n.next;while(n!==r)}e.action=null}function Bd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zd(e,n){return n}function Ud(e,n){if(Ue){var t=Ze.formState;if(t!==null){e:{var r=ke;if(Ue){if(We){n:{for(var l=We,o=Lt;l.nodeType!==8;){if(!o){l=null;break n}if(l=zt(l.nextSibling),l===null){l=null;break n}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){We=zt(l.nextSibling),r=l.data==="F!";break e}}tl(r)}r=!1}r&&(n=t[0])}}return t=Jn(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zd,lastRenderedState:n},t.queue=r,t=rm.bind(null,ke,r),r.dispatch=t,r=ou(!1),o=hu.bind(null,ke,!1,r.queue),r=Jn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,t=Y_.bind(null,ke,l,o,t),l.dispatch=t,r.memoizedState=e,[n,t,!1]}function Hd(e){var n=pn();return Gd(n,Fe,e)}function Gd(e,n,t){if(n=au(e,n,zd)[0],e=ro(Rr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ba(n)}catch(m){throw m===ji?Fs:m}else r=n;n=pn();var l=n.queue,o=l.dispatch;return t!==n.memoizedState&&(ke.flags|=2048,Li(9,{destroy:void 0},P_.bind(null,l,t),null)),[r,o,e]}function P_(e,n){e.action=n}function Id(e){var n=pn(),t=Fe;if(t!==null)return Gd(n,t,e);pn(),n=n.memoizedState,t=pn();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function Li(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=ke.updateQueue,n===null&&(n=no(),ke.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Vd(){return pn().memoizedState}function lo(e,n,t,r){var l=Jn();ke.flags|=e,l.memoizedState=Li(1|n,{destroy:void 0},t,r===void 0?null:r)}function io(e,n,t,r){var l=pn();r=r===void 0?null:r;var o=l.memoizedState.inst;Fe!==null&&r!==null&&eu(r,Fe.memoizedState.deps)?l.memoizedState=Li(n,o,t,r):(ke.flags|=e,l.memoizedState=Li(1|n,o,t,r))}function Yd(e,n){lo(8390656,8,e,n)}function uu(e,n){io(2048,8,e,n)}function $_(e){ke.flags|=4;var n=ke.updateQueue;if(n===null)n=no(),ke.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Pd(e){var n=pn().memoizedState;return $_({ref:n,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function $d(e,n){return io(4,2,e,n)}function qd(e,n){return io(4,4,e,n)}function Fd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xd(e,n,t){t=t!=null?t.concat([e]):null,io(4,4,Fd.bind(null,n,e),t)}function fu(){}function Kd(e,n){var t=pn();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&eu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qd(e,n){var t=pn();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&eu(n,r[1]))return r[0];if(r=e(),Jl){mt(!0);try{e()}finally{mt(!1)}}return t.memoizedState=[r,n],r}function du(e,n,t){return t===void 0||(Nr&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Zm(),ke.lanes|=e,fl|=e,t)}function Zd(e,n,t,r){return Zn(t,n)?t:Ai.current!==null?(e=du(e,t,r),Zn(e,n)||(yn=!0),e):(Nr&42)===0||(Nr&1073741824)!==0&&(Ce&261930)===0?(yn=!0,e.memoizedState=t):(e=Zm(),ke.lanes|=e,fl|=e,n)}function Wd(e,n,t,r,l){var o=te.p;te.p=o!==0&&8>o?o:8;var m=U.T,b={};U.T=b,hu(e,!1,n,t);try{var k=l(),C=U.S;if(C!==null&&C(b,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var P=G_(k,r);za(e,n,P,wt(e))}else za(e,n,r,wt(e))}catch(X){za(e,n,{then:function(){},status:"rejected",reason:X},wt())}finally{te.p=o,m!==null&&b.types!==null&&(m.types=b.types),U.T=m}}function q_(){}function mu(e,n,t,r){if(e.tag!==5)throw Error(a(476));var l=Jd(e).queue;Wd(e,l,n,ce,t===null?q_:function(){return em(e),t(r)})}function Jd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:ce},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function em(e){var n=Jd(e);n.next===null&&(n=e.alternate.memoizedState),za(e,n.next.queue,{},wt())}function pu(){return Ln(es)}function nm(){return pn().memoizedState}function tm(){return pn().memoizedState}function F_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=wt();e=il(t);var r=al(n,e,t);r!==null&&(ut(r,n,t),Aa(r,n,t)),n={cache:Yc()},e.payload=n;return}n=n.return}}function X_(e,n,t){var r=wt();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ao(e)?lm(n,t):(t=Ac(e,n,t,r),t!==null&&(ut(t,e,r),im(t,n,r)))}function rm(e,n,t){var r=wt();za(e,n,t,r)}function za(e,n,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ao(e))lm(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var m=n.lastRenderedState,b=o(m,t);if(l.hasEagerState=!0,l.eagerState=b,Zn(b,m))return Gs(e,n,l,0),Ze===null&&Hs(),!1}catch{}finally{}if(t=Ac(e,n,l,r),t!==null)return ut(t,e,r),im(t,n,r),!0}return!1}function hu(e,n,t,r){if(r={lane:2,revertLane:Fu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ao(e)){if(n)throw Error(a(479))}else n=Ac(e,t,r,2),n!==null&&ut(n,e,2)}function ao(e){var n=e.alternate;return e===ke||n!==null&&n===ke}function lm(e,n){Oi=Js=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function im(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,fi(e,t)}}var Ua={readContext:Ln,use:to,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Ua.useEffectEvent=cn;var am={readContext:Ln,use:to,useCallback:function(e,n){return Jn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Yd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,lo(4194308,4,Fd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return lo(4194308,4,e,n)},useInsertionEffect:function(e,n){lo(4,2,e,n)},useMemo:function(e,n){var t=Jn();n=n===void 0?null:n;var r=e();if(Jl){mt(!0);try{e()}finally{mt(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=Jn();if(t!==void 0){var l=t(n);if(Jl){mt(!0);try{t(n)}finally{mt(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=X_.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var n=Jn();return e={current:e},n.memoizedState=e},useState:function(e){e=ou(e);var n=e.queue,t=rm.bind(null,ke,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:fu,useDeferredValue:function(e,n){var t=Jn();return du(t,e,n)},useTransition:function(){var e=ou(!1);return e=Wd.bind(null,ke,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=ke,l=Jn();if(Ue){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Ze===null)throw Error(a(349));(Ce&127)!==0||Rd(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Yd(Md.bind(null,r,o,e),[e]),r.flags|=2048,Li(9,{destroy:void 0},Td.bind(null,r,o,t,n),null),t},useId:function(){var e=Jn(),n=Ze.identifierPrefix;if(Ue){var t=ar,r=ir;t=(r&~(1<<32-jn(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=eo++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=I_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:pu,useFormState:Ud,useActionState:Ud,useOptimistic:function(e){var n=Jn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=hu.bind(null,ke,!0,t),t.dispatch=n,[e,n]},useMemoCache:iu,useCacheRefresh:function(){return Jn().memoizedState=F_.bind(null,ke)},useEffectEvent:function(e){var n=Jn(),t={impl:e};return n.memoizedState=t,function(){if((Ve&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}},_u={readContext:Ln,use:to,useCallback:Kd,useContext:Ln,useEffect:uu,useImperativeHandle:Xd,useInsertionEffect:$d,useLayoutEffect:qd,useMemo:Qd,useReducer:ro,useRef:Vd,useState:function(){return ro(Rr)},useDebugValue:fu,useDeferredValue:function(e,n){var t=pn();return Zd(t,Fe.memoizedState,e,n)},useTransition:function(){var e=ro(Rr)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Ba(e),n]},useSyncExternalStore:Nd,useId:nm,useHostTransitionStatus:pu,useFormState:Hd,useActionState:Hd,useOptimistic:function(e,n){var t=pn();return Ad(t,Fe,e,n)},useMemoCache:iu,useCacheRefresh:tm};_u.useEffectEvent=Pd;var sm={readContext:Ln,use:to,useCallback:Kd,useContext:Ln,useEffect:uu,useImperativeHandle:Xd,useInsertionEffect:$d,useLayoutEffect:qd,useMemo:Qd,useReducer:su,useRef:Vd,useState:function(){return su(Rr)},useDebugValue:fu,useDeferredValue:function(e,n){var t=pn();return Fe===null?du(t,e,n):Zd(t,Fe.memoizedState,e,n)},useTransition:function(){var e=su(Rr)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Ba(e),n]},useSyncExternalStore:Nd,useId:nm,useHostTransitionStatus:pu,useFormState:Id,useActionState:Id,useOptimistic:function(e,n){var t=pn();return Fe!==null?Ad(t,Fe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:iu,useCacheRefresh:tm};sm.useEffectEvent=Pd;function gu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:v({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bu={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=wt(),l=il(r);l.payload=n,t!=null&&(l.callback=t),n=al(e,l,r),n!==null&&(ut(n,e,r),Aa(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=wt(),l=il(r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=al(e,l,r),n!==null&&(ut(n,e,r),Aa(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=wt(),r=il(t);r.tag=2,n!=null&&(r.callback=n),n=al(e,r,t),n!==null&&(ut(n,e,t),Aa(n,e,t))}};function om(e,n,t,r,l,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,m):n.prototype&&n.prototype.isPureReactComponent?!d(t,r)||!d(l,o):!0}function cm(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bu.enqueueReplaceState(n,n.state,null)}function ei(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=v({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function um(e){Us(e)}function fm(e){console.error(e)}function dm(e){Us(e)}function so(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function mm(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function yu(e,n,t){return t=il(t),t.tag=3,t.payload={element:null},t.callback=function(){so(e,n)},t}function pm(e){return e=il(e),e.tag=3,e}function hm(e,n,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=r.value;e.payload=function(){return l(o)},e.callback=function(){mm(n,t,r)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){mm(n,t,r),typeof l!="function"&&(dl===null?dl=new Set([this]):dl.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function K_(e,n,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&Ri(n,t,l,!0),t=bt.current,t!==null){switch(t.tag){case 31:case 13:return Bt===null?vo():t.alternate===null&&un===0&&(un=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===Xs?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Pu(e,r,l)),!1;case 22:return t.flags|=65536,r===Xs?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Pu(e,r,l)),!1}throw Error(a(435,t.tag))}return Pu(e,r,l),vo(),!1}if(Ue)return n=bt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Uc&&(e=Error(a(422),{cause:r}),Ra(At(e,t)))):(r!==Uc&&(n=Error(a(423),{cause:r}),Ra(At(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=At(r,t),l=yu(e.stateNode,r,l),Kc(e,l),un!==4&&(un=2)),!1;var o=Error(a(520),{cause:r});if(o=At(o,t),qa===null?qa=[o]:qa.push(o),un!==4&&(un=2),n===null)return!0;r=At(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=yu(t.stateNode,r,e),Kc(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(dl===null||!dl.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=pm(l),hm(l,e,t,r),Kc(t,l),!1}t=t.return}while(t!==null);return!1}var vu=Error(a(461)),yn=!1;function Bn(e,n,t,r){n.child=e===null?yd(n,null,t,r):Wl(n,e.child,t,r)}function _m(e,n,t,r,l){t=t.render;var o=n.ref;if("ref"in r){var m={};for(var b in r)b!=="ref"&&(m[b]=r[b])}else m=r;return Xl(n),r=nu(e,n,t,m,o,l),b=tu(),e!==null&&!yn?(ru(e,n,l),Tr(e,n,l)):(Ue&&b&&Bc(n),n.flags|=1,Bn(e,n,r,l),n.child)}function gm(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Oc(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,bm(e,n,o,r,l)):(e=Vs(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Tu(e,l)){var m=o.memoizedProps;if(t=t.compare,t=t!==null?t:d,t(m,r)&&e.ref===n.ref)return Tr(e,n,l)}return n.flags|=1,e=wr(o,r),e.ref=n.ref,e.return=n,n.child=e}function bm(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(d(o,r)&&e.ref===n.ref)if(yn=!1,n.pendingProps=r=o,Tu(e,l))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,Tr(e,n,l)}return xu(e,n,t,r,l)}function ym(e,n,t,r){var l=r.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~o}else r=0,n.child=null;return vm(e,n,o,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&qs(n,o!==null?o.cachePool:null),o!==null?wd(n,o):Zc(),Ed(n);else return r=n.lanes=536870912,vm(e,n,o!==null?o.baseLanes|t:t,t,r)}else o!==null?(qs(n,o.cachePool),wd(n,o),ol(),n.memoizedState=null):(e!==null&&qs(n,null),Zc(),ol());return Bn(e,n,l,t),n.child}function Ha(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vm(e,n,t,r,l){var o=$c();return o=o===null?null:{parent:gn._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&qs(n,null),Zc(),Ed(n),e!==null&&Ri(e,n,r,!0),n.childLanes=l,null}function oo(e,n){return n=uo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function xm(e,n,t){return Wl(n,e.child,null,t),e=oo(n,n.pendingProps),e.flags|=2,yt(n),n.memoizedState=null,e}function Q_(e,n,t){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ue){if(r.mode==="hidden")return e=oo(n,r),n.lanes=536870912,Ha(null,e);if(Jc(n),(e=We)?(e=Op(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:el!==null?{id:ir,overflow:ar}:null,retryLane:536870912,hydrationErrors:null},t=ld(e),t.return=n,n.child=t,Cn=n,We=null)):e=null,e===null)throw tl(n);return n.lanes=536870912,null}return oo(n,r)}var o=e.memoizedState;if(o!==null){var m=o.dehydrated;if(Jc(n),l)if(n.flags&256)n.flags&=-257,n=xm(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(yn||Ri(e,n,t,!1),l=(t&e.childLanes)!==0,yn||l){if(r=Ze,r!==null&&(m=ys(r,t),m!==0&&m!==o.retryLane))throw o.retryLane=m,Pl(e,m),ut(r,e,m),vu;vo(),n=xm(e,n,t)}else e=o.treeContext,We=zt(m.nextSibling),Cn=n,Ue=!0,nl=null,Lt=!1,e!==null&&sd(n,e),n=oo(n,r),n.flags|=4096;return n}return e=wr(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function co(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(a(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function xu(e,n,t,r,l){return Xl(n),t=nu(e,n,t,r,void 0,l),r=tu(),e!==null&&!yn?(ru(e,n,l),Tr(e,n,l)):(Ue&&r&&Bc(n),n.flags|=1,Bn(e,n,t,l),n.child)}function wm(e,n,t,r,l,o){return Xl(n),n.updateQueue=null,t=kd(n,r,t,l),Sd(e),r=tu(),e!==null&&!yn?(ru(e,n,o),Tr(e,n,o)):(Ue&&r&&Bc(n),n.flags|=1,Bn(e,n,t,o),n.child)}function Em(e,n,t,r,l){if(Xl(n),n.stateNode===null){var o=Ei,m=t.contextType;typeof m=="object"&&m!==null&&(o=Ln(m)),o=new t(r,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=bu,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=r,o.state=n.memoizedState,o.refs={},Fc(n),m=t.contextType,o.context=typeof m=="object"&&m!==null?Ln(m):Ei,o.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(gu(n,t,m,r),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&bu.enqueueReplaceState(o,o.state,null),Ca(n,r,o,l),Oa(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){o=n.stateNode;var b=n.memoizedProps,k=ei(t,b);o.props=k;var C=o.context,P=t.contextType;m=Ei,typeof P=="object"&&P!==null&&(m=Ln(P));var X=t.getDerivedStateFromProps;P=typeof X=="function"||typeof o.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,P||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(b||C!==m)&&cm(n,o,r,m),ll=!1;var B=n.memoizedState;o.state=B,Ca(n,r,o,l),Oa(),C=n.memoizedState,b||B!==C||ll?(typeof X=="function"&&(gu(n,t,X,r),C=n.memoizedState),(k=ll||om(n,t,k,r,B,C,m))?(P||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=C),o.props=r,o.state=C,o.context=m,r=k):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Xc(e,n),m=n.memoizedProps,P=ei(t,m),o.props=P,X=n.pendingProps,B=o.context,C=t.contextType,k=Ei,typeof C=="object"&&C!==null&&(k=Ln(C)),b=t.getDerivedStateFromProps,(C=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==X||B!==k)&&cm(n,o,r,k),ll=!1,B=n.memoizedState,o.state=B,Ca(n,r,o,l),Oa();var V=n.memoizedState;m!==X||B!==V||ll||e!==null&&e.dependencies!==null&&Ps(e.dependencies)?(typeof b=="function"&&(gu(n,t,b,r),V=n.memoizedState),(P=ll||om(n,t,P,r,B,V,k)||e!==null&&e.dependencies!==null&&Ps(e.dependencies))?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,V,k),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,V,k)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=V),o.props=r,o.state=V,o.context=k,r=P):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),r=!1)}return o=r,co(e,n),r=(n.flags&128)!==0,o||r?(o=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&r?(n.child=Wl(n,e.child,null,l),n.child=Wl(n,null,t,l)):Bn(e,n,t,l),n.memoizedState=o.state,e=n.child):e=Tr(e,n,l),e}function Sm(e,n,t,r){return ql(),n.flags|=256,Bn(e,n,t,r),n.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eu(e){return{baseLanes:e,cachePool:md()}}function Su(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=xt),e}function km(e,n,t){var r=n.pendingProps,l=!1,o=(n.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(l?sl(n):ol(),(e=We)?(e=Op(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:el!==null?{id:ir,overflow:ar}:null,retryLane:536870912,hydrationErrors:null},t=ld(e),t.return=n,n.child=t,Cn=n,We=null)):e=null,e===null)throw tl(n);return sf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,l?(ol(),l=n.mode,b=uo({mode:"hidden",children:b},l),r=$l(r,l,t,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=Eu(t),r.childLanes=Su(e,m,t),n.memoizedState=wu,Ha(null,r)):(sl(n),ku(n,b))}var k=e.memoizedState;if(k!==null&&(b=k.dehydrated,b!==null)){if(o)n.flags&256?(sl(n),n.flags&=-257,n=Nu(e,n,t)):n.memoizedState!==null?(ol(),n.child=e.child,n.flags|=128,n=null):(ol(),b=r.fallback,l=n.mode,r=uo({mode:"visible",children:r.children},l),b=$l(b,l,t,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,Wl(n,e.child,null,t),r=n.child,r.memoizedState=Eu(t),r.childLanes=Su(e,m,t),n.memoizedState=wu,n=Ha(null,r));else if(sl(n),sf(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var C=m.dgst;m=C,r=Error(a(419)),r.stack="",r.digest=m,Ra({value:r,source:null,stack:null}),n=Nu(e,n,t)}else if(yn||Ri(e,n,t,!1),m=(t&e.childLanes)!==0,yn||m){if(m=Ze,m!==null&&(r=ys(m,t),r!==0&&r!==k.retryLane))throw k.retryLane=r,Pl(e,r),ut(m,e,r),vu;af(b)||vo(),n=Nu(e,n,t)}else af(b)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,We=zt(b.nextSibling),Cn=n,Ue=!0,nl=null,Lt=!1,e!==null&&sd(n,e),n=ku(n,r.children),n.flags|=4096);return n}return l?(ol(),b=r.fallback,l=n.mode,k=e.child,C=k.sibling,r=wr(k,{mode:"hidden",children:r.children}),r.subtreeFlags=k.subtreeFlags&65011712,C!==null?b=wr(C,b):(b=$l(b,l,t,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,Ha(null,r),r=n.child,b=e.child.memoizedState,b===null?b=Eu(t):(l=b.cachePool,l!==null?(k=gn._currentValue,l=l.parent!==k?{parent:k,pool:k}:l):l=md(),b={baseLanes:b.baseLanes|t,cachePool:l}),r.memoizedState=b,r.childLanes=Su(e,m,t),n.memoizedState=wu,Ha(e.child,r)):(sl(n),t=e.child,e=t.sibling,t=wr(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function ku(e,n){return n=uo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function uo(e,n){return e=gt(22,e,null,n),e.lanes=0,e}function Nu(e,n,t){return Wl(n,e.child,null,t),e=ku(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nm(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ic(e.return,n,t)}function Ru(e,n,t,r,l,o){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:o}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=t,m.tailMode=l,m.treeForkCount=o)}function Rm(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;r=r.children;var m=mn.current,b=(m&2)!==0;if(b?(m=m&1|2,n.flags|=128):m&=1,re(mn,m),Bn(e,n,r,t),r=Ue?Na:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nm(e,t,n);else if(e.tag===19)Nm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Ws(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ru(n,!1,l,t,o,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Ws(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ru(n,!0,t,null,o,r);break;case"together":Ru(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Tr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),fl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ri(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=wr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=wr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Tu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ps(e)))}function Z_(e,n,t){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),rl(n,gn,e.memoizedState.cache),ql();break;case 27:case 5:Pn(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:rl(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Jc(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(sl(n),n.flags|=128,null):(t&n.child.childLanes)!==0?km(e,n,t):(sl(n),e=Tr(e,n,t),e!==null?e.sibling:null);sl(n);break;case 19:var l=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(Ri(e,n,t,!1),r=(t&n.childLanes)!==0),l){if(r)return Rm(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),re(mn,mn.current),r)break;return null;case 22:return n.lanes=0,ym(e,n,t,n.pendingProps);case 24:rl(n,gn,e.memoizedState.cache)}return Tr(e,n,t)}function Tm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!Tu(e,t)&&(n.flags&128)===0)return yn=!1,Z_(e,n,t);yn=(e.flags&131072)!==0}else yn=!1,Ue&&(n.flags&1048576)!==0&&ad(n,Na,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Ql(n.elementType),n.type=e,typeof e=="function")Oc(e)?(r=ei(e,r),n.tag=1,n=Em(null,n,e,r,t)):(n.tag=0,n=xu(null,n,e,r,t));else{if(e!=null){var l=e.$$typeof;if(l===se){n.tag=11,n=_m(null,n,e,r,t);break e}else if(l===J){n.tag=14,n=gm(null,n,e,r,t);break e}}throw n=Ae(e)||e,Error(a(306,n,""))}}return n;case 0:return xu(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,l=ei(r,n.pendingProps),Em(e,n,r,l,t);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(a(387));r=n.pendingProps;var o=n.memoizedState;l=o.element,Xc(e,n),Ca(n,r,null,t);var m=n.memoizedState;if(r=m.cache,rl(n,gn,r),r!==o.cache&&Vc(n,[gn],t,!0),Oa(),r=m.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Sm(e,n,r,t);break e}else if(r!==l){l=At(Error(a(424)),n),Ra(l),n=Sm(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=zt(e.firstChild),Cn=n,Ue=!0,nl=null,Lt=!0,t=yd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(ql(),r===l){n=Tr(e,n,t);break e}Bn(e,n,r,t)}n=n.child}return n;case 26:return co(e,n),e===null?(t=Hp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ue||(t=n.type,e=n.pendingProps,r=Ro(ee.current).createElement(t),r[fn]=n,r[Sn]=e,zn(r,t,e),en(r),n.stateNode=r):n.memoizedState=Hp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pn(n),e===null&&Ue&&(r=n.stateNode=Bp(n.type,n.pendingProps,ee.current),Cn=n,Lt=!0,l=We,_l(n.type)?(of=l,We=zt(r.firstChild)):We=l),Bn(e,n,n.pendingProps.children,t),co(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((l=r=We)&&(r=Rg(r,n.type,n.pendingProps,Lt),r!==null?(n.stateNode=r,Cn=n,We=zt(r.firstChild),Lt=!1,l=!0):l=!1),l||tl(n)),Pn(n),l=n.type,o=n.pendingProps,m=e!==null?e.memoizedProps:null,r=o.children,tf(l,o)?r=null:m!==null&&tf(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=nu(e,n,V_,null,null,t),es._currentValue=l),co(e,n),Bn(e,n,r,t),n.child;case 6:return e===null&&Ue&&((e=t=We)&&(t=Tg(t,n.pendingProps,Lt),t!==null?(n.stateNode=t,Cn=n,We=null,e=!0):e=!1),e||tl(n)),null;case 13:return km(e,n,t);case 4:return He(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Wl(n,null,r,t):Bn(e,n,r,t),n.child;case 11:return _m(e,n,n.type,n.pendingProps,t);case 7:return Bn(e,n,n.pendingProps,t),n.child;case 8:return Bn(e,n,n.pendingProps.children,t),n.child;case 12:return Bn(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,rl(n,n.type,r.value),Bn(e,n,r.children,t),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,Xl(n),l=Ln(l),r=r(l),n.flags|=1,Bn(e,n,r,t),n.child;case 14:return gm(e,n,n.type,n.pendingProps,t);case 15:return bm(e,n,n.type,n.pendingProps,t);case 19:return Rm(e,n,t);case 31:return Q_(e,n,t);case 22:return ym(e,n,t,n.pendingProps);case 24:return Xl(n),r=Ln(gn),e===null?(l=$c(),l===null&&(l=Ze,o=Yc(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),n.memoizedState={parent:r,cache:l},Fc(n),rl(n,gn,l)):((e.lanes&t)!==0&&(Xc(e,n),Ca(n,null,null,t),Oa()),l=e.memoizedState,o=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),rl(n,gn,r)):(r=o.cache,rl(n,gn,r),r!==l.cache&&Vc(n,[gn],t,!0))),Bn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Mr(e){e.flags|=4}function Mu(e,n,t,r,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(np())e.flags|=8192;else throw Zl=Xs,qc}else e.flags&=-16777217}function Mm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pp(n))if(np())e.flags|=8192;else throw Zl=Xs,qc}function fo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ui():536870912,e.lanes|=n,Hi|=n)}function Ga(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function W_(e,n,t){var r=n.pendingProps;switch(zc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),kr(gn),Oe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ni(n)?Mr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hc())),Je(n),null;case 26:var l=n.type,o=n.memoizedState;return e===null?(Mr(n),o!==null?(Je(n),Mm(n,o)):(Je(n),Mu(n,l,null,r,t))):o?o!==e.memoizedState?(Mr(n),Je(n),Mm(n,o)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Mr(n),Je(n),Mu(n,l,e,r,t)),null;case 27:if(Wt(n),t=ee.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Mr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Je(n),null}e=O.current,Ni(n)?od(n):(e=Bp(l,r,t),n.stateNode=e,Mr(n))}return Je(n),null;case 5:if(Wt(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Mr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Je(n),null}if(o=O.current,Ni(n))od(n);else{var m=Ro(ee.current);switch(o){case 1:o=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=m.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}o[fn]=n,o[Sn]=r;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)o.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=o;e:switch(zn(o,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Mr(n)}}return Je(n),Mu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Mr(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(e=ee.current,Ni(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,l=Cn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[fn]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||kp(e.nodeValue,t)),e||tl(n,!0)}else e=Ro(e).createTextNode(r),e[fn]=n,n.stateNode=e}return Je(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ni(n),t!==null){if(e===null){if(!r)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=n}else ql(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else t=Hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(yt(n),n):(yt(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Je(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ni(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[fn]=n}else ql(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),l=!1}else l=Hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(yt(n),n):(yt(n),null)}return yt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==l&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),fo(n,n.updateQueue),Je(n),null);case 4:return Oe(),e===null&&Zu(n.stateNode.containerInfo),Je(n),null;case 10:return kr(n.type),Je(n),null;case 19:if(I(mn),r=n.memoizedState,r===null)return Je(n),null;if(l=(n.flags&128)!==0,o=r.rendering,o===null)if(l)Ga(r,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=Ws(e),o!==null){for(n.flags|=128,Ga(r,!1),e=o.updateQueue,n.updateQueue=e,fo(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)rd(t,e),t=t.sibling;return re(mn,mn.current&1|2),Ue&&Er(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&wn()>go&&(n.flags|=128,l=!0,Ga(r,!1),n.lanes=4194304)}else{if(!l)if(e=Ws(o),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,fo(n,e),Ga(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Ue)return Je(n),null}else 2*wn()-r.renderingStartTime>go&&t!==536870912&&(n.flags|=128,l=!0,Ga(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(e=r.last,e!==null?e.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=wn(),e.sibling=null,t=mn.current,re(mn,l?t&1|2:t&1),Ue&&Er(n,r.treeForkCount),e):(Je(n),null);case 22:case 23:return yt(n),Wc(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),t=n.updateQueue,t!==null&&fo(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&I(Kl),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),kr(gn),Je(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function J_(e,n){switch(zc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kr(gn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 31:if(n.memoizedState!==null){if(yt(n),n.alternate===null)throw Error(a(340));ql()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(yt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));ql()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(mn),null;case 4:return Oe(),null;case 10:return kr(n.type),null;case 22:case 23:return yt(n),Wc(),e!==null&&I(Kl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return kr(gn),null;case 25:return null;default:return null}}function jm(e,n){switch(zc(n),n.tag){case 3:kr(gn),Oe();break;case 26:case 27:case 5:Wt(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&yt(n);break;case 13:yt(n);break;case 19:I(mn);break;case 10:kr(n.type);break;case 22:case 23:yt(n),Wc(),e!==null&&I(Kl);break;case 24:kr(gn)}}function Ia(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&e)===e){r=void 0;var o=t.create,m=t.inst;r=o(),m.destroy=r}t=t.next}while(t!==l)}}catch(b){qe(n,n.return,b)}}function cl(e,n,t){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var o=l.next;r=o;do{if((r.tag&e)===e){var m=r.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,l=n;var k=t,C=b;try{C()}catch(P){qe(l,k,P)}}}r=r.next}while(r!==o)}}catch(P){qe(n,n.return,P)}}function Dm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{xd(n,t)}catch(r){qe(e,e.return,r)}}}function Am(e,n,t){t.props=ei(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){qe(e,n,r)}}function Va(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(l){qe(e,n,l)}}function sr(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){qe(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){qe(e,n,l)}else t.current=null}function Om(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){qe(e,e.return,l)}}function ju(e,n,t){try{var r=e.stateNode;xg(r,e.type,t,n),r[Sn]=n}catch(l){qe(e,e.return,l)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_l(e.type)||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_l(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Au(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=_t));else if(r!==4&&(r===27&&_l(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Au(e,n,t),e=e.sibling;e!==null;)Au(e,n,t),e=e.sibling}function mo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&_l(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(mo(e,n,t),e=e.sibling;e!==null;)mo(e,n,t),e=e.sibling}function Lm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);zn(n,r,t),n[fn]=e,n[Sn]=t}catch(o){qe(e,e.return,o)}}var jr=!1,vn=!1,Ou=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function eg(e,n){if(e=e.containerInfo,ef=Co,e=T(e),ne(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var m=0,b=-1,k=-1,C=0,P=0,X=e,B=null;n:for(;;){for(var V;X!==t||l!==0&&X.nodeType!==3||(b=m+l),X!==o||r!==0&&X.nodeType!==3||(k=m+r),X.nodeType===3&&(m+=X.nodeValue.length),(V=X.firstChild)!==null;)B=X,X=V;for(;;){if(X===e)break n;if(B===t&&++C===l&&(b=m),B===o&&++P===r&&(k=m),(V=X.nextSibling)!==null)break;X=B,B=X.parentNode}X=V}t=b===-1||k===-1?null:{start:b,end:k}}else t=null}t=t||{start:0,end:0}}else t=null;for(nf={focusedElem:e,selectionRange:t},Co=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,l=o.memoizedProps,o=o.memoizedState,r=t.stateNode;try{var fe=ei(t.type,l);e=r.getSnapshotBeforeUpdate(fe,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(be){qe(t,t.return,be)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)lf(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function zm(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ar(e,t),r&4&&Ia(5,t);break;case 1:if(Ar(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){qe(t,t.return,m)}else{var l=ei(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){qe(t,t.return,m)}}r&64&&Dm(t),r&512&&Va(t,t.return);break;case 3:if(Ar(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{xd(e,n)}catch(m){qe(t,t.return,m)}}break;case 27:n===null&&r&4&&Lm(t);case 26:case 5:Ar(e,t),n===null&&r&4&&Om(t),r&512&&Va(t,t.return);break;case 12:Ar(e,t);break;case 31:Ar(e,t),r&4&&Gm(e,t);break;case 13:Ar(e,t),r&4&&Im(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=cg.bind(null,t),Mg(e,t))));break;case 22:if(r=t.memoizedState!==null||jr,!r){n=n!==null&&n.memoizedState!==null||vn,l=jr;var o=vn;jr=r,(vn=n)&&!o?Or(e,t,(t.subtreeFlags&8772)!==0):Ar(e,t),jr=l,vn=o}break;case 30:break;default:Ar(e,t)}}function Um(e){var n=e.alternate;n!==null&&(e.alternate=null,Um(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&nr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,at=!1;function Dr(e,n,t){for(t=t.child;t!==null;)Hm(e,n,t),t=t.sibling}function Hm(e,n,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Tl,t)}catch{}switch(t.tag){case 26:vn||sr(t,n),Dr(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:vn||sr(t,n);var r=rn,l=at;_l(t.type)&&(rn=t.stateNode,at=!1),Dr(e,n,t),Za(t.stateNode),rn=r,at=l;break;case 5:vn||sr(t,n);case 6:if(r=rn,l=at,rn=null,Dr(e,n,t),rn=r,at=l,rn!==null)if(at)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(t.stateNode)}catch(o){qe(t,n,o)}else try{rn.removeChild(t.stateNode)}catch(o){qe(t,n,o)}break;case 18:rn!==null&&(at?(e=rn,Dp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Fi(e)):Dp(rn,t.stateNode));break;case 4:r=rn,l=at,rn=t.stateNode.containerInfo,at=!0,Dr(e,n,t),rn=r,at=l;break;case 0:case 11:case 14:case 15:cl(2,t,n),vn||cl(4,t,n),Dr(e,n,t);break;case 1:vn||(sr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&Am(t,n,r)),Dr(e,n,t);break;case 21:Dr(e,n,t);break;case 22:vn=(r=vn)||t.memoizedState!==null,Dr(e,n,t),vn=r;break;default:Dr(e,n,t)}}function Gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fi(e)}catch(t){qe(n,n.return,t)}}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fi(e)}catch(t){qe(n,n.return,t)}}function ng(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bm),n;default:throw Error(a(435,e.tag))}}function po(e,n){var t=ng(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var l=ug.bind(null,e,r);r.then(l,l)}})}function st(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r],o=e,m=n,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(_l(b.type)){rn=b.stateNode,at=!1;break e}break;case 5:rn=b.stateNode,at=!1;break e;case 3:case 4:rn=b.stateNode.containerInfo,at=!0;break e}b=b.return}if(rn===null)throw Error(a(160));Hm(o,m,l),rn=null,at=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Vm(n,e),n=n.sibling}var Qt=null;function Vm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(n,e),ot(e),r&4&&(cl(3,e,e.return),Ia(3,e),cl(5,e,e.return));break;case 1:st(n,e),ot(e),r&512&&(vn||t===null||sr(t,t.return)),r&64&&jr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var l=Qt;if(st(n,e),ot(e),r&512&&(vn||t===null||sr(t,t.return)),r&4){var o=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Fn]||o[fn]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(r),l.head.insertBefore(o,l.querySelector("head > title"))),zn(o,r,t),o[fn]=e,en(o),r=o;break e;case"link":var m=Vp("link","href",l).get(r+(t.href||""));if(m){for(var b=0;b<m.length;b++)if(o=m[b],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(b,1);break n}}o=l.createElement(r),zn(o,r,t),l.head.appendChild(o);break;case"meta":if(m=Vp("meta","content",l).get(r+(t.content||""))){for(b=0;b<m.length;b++)if(o=m[b],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(b,1);break n}}o=l.createElement(r),zn(o,r,t),l.head.appendChild(o);break;default:throw Error(a(468,r))}o[fn]=e,en(o),r=o}e.stateNode=r}else Yp(l,e.type,e.stateNode);else e.stateNode=Ip(l,r,e.memoizedProps);else o!==r?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,r===null?Yp(l,e.type,e.stateNode):Ip(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&ju(e,e.memoizedProps,t.memoizedProps)}break;case 27:st(n,e),ot(e),r&512&&(vn||t===null||sr(t,t.return)),t!==null&&r&4&&ju(e,e.memoizedProps,t.memoizedProps);break;case 5:if(st(n,e),ot(e),r&512&&(vn||t===null||sr(t,t.return)),e.flags&32){l=e.stateNode;try{Fr(l,"")}catch(fe){qe(e,e.return,fe)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,ju(e,l,t!==null?t.memoizedProps:l)),r&1024&&(Ou=!0);break;case 6:if(st(n,e),ot(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(fe){qe(e,e.return,fe)}}break;case 3:if(jo=null,l=Qt,Qt=To(n.containerInfo),st(n,e),Qt=l,ot(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Fi(n.containerInfo)}catch(fe){qe(e,e.return,fe)}Ou&&(Ou=!1,Ym(e));break;case 4:r=Qt,Qt=To(e.stateNode.containerInfo),st(n,e),ot(e),Qt=r;break;case 12:st(n,e),ot(e);break;case 31:st(n,e),ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,po(e,r)));break;case 13:st(n,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(_o=wn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,po(e,r)));break;case 22:l=e.memoizedState!==null;var k=t!==null&&t.memoizedState!==null,C=jr,P=vn;if(jr=C||l,vn=P||k,st(n,e),vn=P,jr=C,ot(e),r&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||k||jr||vn||ni(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){k=t=n;try{if(o=k.stateNode,l)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=k.stateNode;var X=k.memoizedProps.style,B=X!=null&&X.hasOwnProperty("display")?X.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(fe){qe(k,k.return,fe)}}}else if(n.tag===6){if(t===null){k=n;try{k.stateNode.nodeValue=l?"":k.memoizedProps}catch(fe){qe(k,k.return,fe)}}}else if(n.tag===18){if(t===null){k=n;try{var V=k.stateNode;l?Ap(V,!0):Ap(k.stateNode,!1)}catch(fe){qe(k,k.return,fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,po(e,t))));break;case 19:st(n,e),ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,po(e,r)));break;case 30:break;case 21:break;default:st(n,e),ot(e)}}function ot(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(Cm(r)){t=r;break}r=r.return}if(t==null)throw Error(a(160));switch(t.tag){case 27:var l=t.stateNode,o=Du(e);mo(e,o,l);break;case 5:var m=t.stateNode;t.flags&32&&(Fr(m,""),t.flags&=-33);var b=Du(e);mo(e,b,m);break;case 3:case 4:var k=t.stateNode.containerInfo,C=Du(e);Au(e,C,k);break;default:throw Error(a(161))}}catch(P){qe(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ar(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zm(e,n.alternate,n),n=n.sibling}function ni(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:cl(4,n,n.return),ni(n);break;case 1:sr(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Am(n,n.return,t),ni(n);break;case 27:Za(n.stateNode);case 26:case 5:sr(n,n.return),ni(n);break;case 22:n.memoizedState===null&&ni(n);break;case 30:ni(n);break;default:ni(n)}e=e.sibling}}function Or(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=e,o=n,m=o.flags;switch(o.tag){case 0:case 11:case 15:Or(l,o,t),Ia(4,o);break;case 1:if(Or(l,o,t),r=o,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){qe(r,r.return,C)}if(r=o,l=r.updateQueue,l!==null){var b=r.stateNode;try{var k=l.shared.hiddenCallbacks;if(k!==null)for(l.shared.hiddenCallbacks=null,l=0;l<k.length;l++)vd(k[l],b)}catch(C){qe(r,r.return,C)}}t&&m&64&&Dm(o),Va(o,o.return);break;case 27:Lm(o);case 26:case 5:Or(l,o,t),t&&r===null&&m&4&&Om(o),Va(o,o.return);break;case 12:Or(l,o,t);break;case 31:Or(l,o,t),t&&m&4&&Gm(l,o);break;case 13:Or(l,o,t),t&&m&4&&Im(l,o);break;case 22:o.memoizedState===null&&Or(l,o,t),Va(o,o.return);break;case 30:break;default:Or(l,o,t)}n=n.sibling}}function Cu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ta(t))}function Lu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ta(e))}function Zt(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pm(e,n,t,r),n=n.sibling}function Pm(e,n,t,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Zt(e,n,t,r),l&2048&&Ia(9,n);break;case 1:Zt(e,n,t,r);break;case 3:Zt(e,n,t,r),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ta(e)));break;case 12:if(l&2048){Zt(e,n,t,r),e=n.stateNode;try{var o=n.memoizedProps,m=o.id,b=o.onPostCommit;typeof b=="function"&&b(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){qe(n,n.return,k)}}else Zt(e,n,t,r);break;case 31:Zt(e,n,t,r);break;case 13:Zt(e,n,t,r);break;case 23:break;case 22:o=n.stateNode,m=n.alternate,n.memoizedState!==null?o._visibility&2?Zt(e,n,t,r):Ya(e,n):o._visibility&2?Zt(e,n,t,r):(o._visibility|=2,Bi(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Cu(m,n);break;case 24:Zt(e,n,t,r),l&2048&&Lu(n.alternate,n);break;default:Zt(e,n,t,r)}}function Bi(e,n,t,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,m=n,b=t,k=r,C=m.flags;switch(m.tag){case 0:case 11:case 15:Bi(o,m,b,k,l),Ia(8,m);break;case 23:break;case 22:var P=m.stateNode;m.memoizedState!==null?P._visibility&2?Bi(o,m,b,k,l):Ya(o,m):(P._visibility|=2,Bi(o,m,b,k,l)),l&&C&2048&&Cu(m.alternate,m);break;case 24:Bi(o,m,b,k,l),l&&C&2048&&Lu(m.alternate,m);break;default:Bi(o,m,b,k,l)}n=n.sibling}}function Ya(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,l=r.flags;switch(r.tag){case 22:Ya(t,r),l&2048&&Cu(r.alternate,r);break;case 24:Ya(t,r),l&2048&&Lu(r.alternate,r);break;default:Ya(t,r)}n=n.sibling}}var Pa=8192;function zi(e,n,t){if(e.subtreeFlags&Pa)for(e=e.child;e!==null;)$m(e,n,t),e=e.sibling}function $m(e,n,t){switch(e.tag){case 26:zi(e,n,t),e.flags&Pa&&e.memoizedState!==null&&Ig(t,Qt,e.memoizedState,e.memoizedProps);break;case 5:zi(e,n,t);break;case 3:case 4:var r=Qt;Qt=To(e.stateNode.containerInfo),zi(e,n,t),Qt=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pa,Pa=16777216,zi(e,n,t),Pa=r):zi(e,n,t));break;default:zi(e,n,t)}}function qm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function $a(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Mn=r,Xm(r,e)}qm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fm(e),e=e.sibling}function Fm(e){switch(e.tag){case 0:case 11:case 15:$a(e),e.flags&2048&&cl(9,e,e.return);break;case 3:$a(e);break;case 12:$a(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ho(e)):$a(e);break;default:$a(e)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Mn=r,Xm(r,e)}qm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:cl(8,n,n.return),ho(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,ho(n));break;default:ho(n)}e=e.sibling}}function Xm(e,n){for(;Mn!==null;){var t=Mn;switch(t.tag){case 0:case 11:case 15:cl(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ta(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Mn=r;else e:for(t=e;Mn!==null;){r=Mn;var l=r.sibling,o=r.return;if(Um(r),r===t){Mn=null;break e}if(l!==null){l.return=o,Mn=l;break e}Mn=o}}}var tg={getCacheForType:function(e){var n=Ln(gn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Ln(gn).controller.signal}},rg=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Ze=null,je=null,Ce=0,$e=0,vt=null,ul=!1,Ui=!1,Bu=!1,Cr=0,un=0,fl=0,ti=0,zu=0,xt=0,Hi=0,qa=null,ct=null,Uu=!1,_o=0,Km=0,go=1/0,bo=null,dl=null,kn=0,ml=null,Gi=null,Lr=0,Hu=0,Gu=null,Qm=null,Fa=0,Iu=null;function wt(){return(Ve&2)!==0&&Ce!==0?Ce&-Ce:U.T!==null?Fu():sn()}function Zm(){if(xt===0)if((Ce&536870912)===0||Ue){var e=qn;qn<<=1,(qn&3932160)===0&&(qn=262144),xt=e}else xt=536870912;return e=bt.current,e!==null&&(e.flags|=32),xt}function ut(e,n,t){(e===Ze&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(Ii(e,0),pl(e,Ce,xt,!1)),Ml(e,t),((Ve&2)===0||e!==Ze)&&(e===Ze&&((Ve&2)===0&&(ti|=t),un===4&&pl(e,Ce,xt,!1)),or(e))}function Wm(e,n,t){if((Ve&6)!==0)throw Error(a(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Dn(e,n),l=r?ag(e,n):Yu(e,n,!0),o=r;do{if(l===0){Ui&&!r&&pl(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!lg(t)){l=Yu(e,n,!1),o=!1;continue}if(l===2){if(o=n,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var b=e;l=qa;var k=b.current.memoizedState.isDehydrated;if(k&&(Ii(b,m).flags|=256),m=Yu(b,m,!1),m!==2){if(Bu&&!k){b.errorRecoveryDisabledLanes|=o,ti|=o,l=4;break e}o=ct,ct=l,o!==null&&(ct===null?ct=o:ct.push.apply(ct,o))}l=m}if(o=!1,l!==2)continue}}if(l===1){Ii(e,0),pl(e,n,0,!0);break}e:{switch(r=e,o=l,o){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:pl(r,n,xt,!ul);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(l=_o+300-wn(),10<l)){if(pl(r,n,xt,!ul),hn(r,0,!0)!==0)break e;Lr=n,r.timeoutHandle=Mp(Jm.bind(null,r,t,ct,bo,Uu,n,xt,ti,Hi,ul,o,"Throttled",-0,0),l);break e}Jm(r,t,ct,bo,Uu,n,xt,ti,Hi,ul,o,null,-0,0)}}break}while(!0);or(e)}function Jm(e,n,t,r,l,o,m,b,k,C,P,X,B,V){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},$m(n,o,X);var fe=(o&62914560)===o?_o-wn():(o&4194048)===o?Km-wn():0;if(fe=Vg(X,fe),fe!==null){Lr=o,e.cancelPendingCommit=fe(sp.bind(null,e,n,o,t,r,l,m,b,k,P,X,null,B,V)),pl(e,o,m,!C);return}}sp(e,n,o,t,r,l,m,b,k)}function lg(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Zn(o(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pl(e,n,t,r){n&=~zu,n&=~ti,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var o=31-jn(l),m=1<<o;r[o]=-1,l&=~m}t!==0&&bs(e,t,n)}function yo(){return(Ve&6)===0?(Xa(0),!1):!0}function Vu(){if(je!==null){if($e===0)var e=je.return;else e=je,Sr=Fl=null,lu(e),Di=null,ja=0,e=je;for(;e!==null;)jm(e.alternate,e),e=e.return;je=null}}function Ii(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Sg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Lr=0,Vu(),Ze=e,je=t=wr(e.current,null),Ce=n,$e=0,vt=null,ul=!1,Ui=Dn(e,n),Bu=!1,Hi=xt=zu=ti=fl=un=0,ct=qa=null,Uu=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var l=31-jn(r),o=1<<l;n|=e[l],r&=~o}return Cr=n,Hs(),t}function ep(e,n){ke=null,U.H=Ua,n===ji||n===Fs?(n=_d(),$e=3):n===qc?(n=_d(),$e=4):$e=n===vu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vt=n,je===null&&(un=1,so(e,At(n,e.current)))}function np(){var e=bt.current;return e===null?!0:(Ce&4194048)===Ce?Bt===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Bt:!1}function tp(){var e=U.H;return U.H=Ua,e===null?Ua:e}function rp(){var e=U.A;return U.A=tg,e}function vo(){un=4,ul||(Ce&4194048)!==Ce&&bt.current!==null||(Ui=!0),(fl&134217727)===0&&(ti&134217727)===0||Ze===null||pl(Ze,Ce,xt,!1)}function Yu(e,n,t){var r=Ve;Ve|=2;var l=tp(),o=rp();(Ze!==e||Ce!==n)&&(bo=null,Ii(e,n)),n=!1;var m=un;e:do try{if($e!==0&&je!==null){var b=je,k=vt;switch($e){case 8:Vu(),m=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(n=!0);var C=$e;if($e=0,vt=null,Vi(e,b,k,C),t&&Ui){m=0;break e}break;default:C=$e,$e=0,vt=null,Vi(e,b,k,C)}}ig(),m=un;break}catch(P){ep(e,P)}while(!0);return n&&e.shellSuspendCounter++,Sr=Fl=null,Ve=r,U.H=l,U.A=o,je===null&&(Ze=null,Ce=0,Hs()),m}function ig(){for(;je!==null;)lp(je)}function ag(e,n){var t=Ve;Ve|=2;var r=tp(),l=rp();Ze!==e||Ce!==n?(bo=null,go=wn()+500,Ii(e,n)):Ui=Dn(e,n);e:do try{if($e!==0&&je!==null){n=je;var o=vt;n:switch($e){case 1:$e=0,vt=null,Vi(e,n,o,1);break;case 2:case 9:if(pd(o)){$e=0,vt=null,ip(n);break}n=function(){$e!==2&&$e!==9||Ze!==e||($e=7),or(e)},o.then(n,n);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:pd(o)?($e=0,vt=null,ip(n)):($e=0,vt=null,Vi(e,n,o,7));break;case 5:var m=null;switch(je.tag){case 26:m=je.memoizedState;case 5:case 27:var b=je;if(m?Pp(m):b.stateNode.complete){$e=0,vt=null;var k=b.sibling;if(k!==null)je=k;else{var C=b.return;C!==null?(je=C,xo(C)):je=null}break n}}$e=0,vt=null,Vi(e,n,o,5);break;case 6:$e=0,vt=null,Vi(e,n,o,6);break;case 8:Vu(),un=6;break e;default:throw Error(a(462))}}sg();break}catch(P){ep(e,P)}while(!0);return Sr=Fl=null,U.H=r,U.A=l,Ve=t,je!==null?0:(Ze=null,Ce=0,Hs(),un)}function sg(){for(;je!==null&&!oi();)lp(je)}function lp(e){var n=Tm(e.alternate,e,Cr);e.memoizedProps=e.pendingProps,n===null?xo(e):je=n}function ip(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=wm(t,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=wm(t,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:lu(n);default:jm(t,n),n=je=rd(n,Cr),n=Tm(t,n,Cr)}e.memoizedProps=e.pendingProps,n===null?xo(e):je=n}function Vi(e,n,t,r){Sr=Fl=null,lu(n),Di=null,ja=0;var l=n.return;try{if(K_(e,l,n,t,Ce)){un=1,so(e,At(t,e.current)),je=null;return}}catch(o){if(l!==null)throw je=l,o;un=1,so(e,At(t,e.current)),je=null;return}n.flags&32768?(Ue||r===1?e=!0:Ui||(Ce&536870912)!==0?e=!1:(ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=bt.current,r!==null&&r.tag===13&&(r.flags|=16384))),ap(n,e)):xo(n)}function xo(e){var n=e;do{if((n.flags&32768)!==0){ap(n,ul);return}e=n.return;var t=W_(n.alternate,n,Cr);if(t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);un===0&&(un=5)}function ap(e,n){do{var t=J_(e.alternate,e);if(t!==null){t.flags&=32767,je=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){je=e;return}je=e=t}while(e!==null);un=6,je=null}function sp(e,n,t,r,l,o,m,b,k){e.cancelPendingCommit=null;do wo();while(kn!==0);if((Ve&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(o=n.lanes|n.childLanes,o|=Dc,fr(e,t,o,m,b,k),e===Ze&&(je=Ze=null,Ce=0),Gi=n,ml=e,Lr=t,Hu=o,Gu=l,Qm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fg(Rl,function(){return dp(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,l=te.p,te.p=2,m=Ve,Ve|=4;try{eg(e,n,t)}finally{Ve=m,te.p=l,U.T=r}}kn=1,op(),cp(),up()}}function op(){if(kn===1){kn=0;var e=ml,n=Gi,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=U.T,U.T=null;var r=te.p;te.p=2;var l=Ve;Ve|=4;try{Vm(n,e);var o=nf,m=T(e.containerInfo),b=o.focusedElem,k=o.selectionRange;if(m!==b&&b&&b.ownerDocument&&j(b.ownerDocument.documentElement,b)){if(k!==null&&ne(b)){var C=k.start,P=k.end;if(P===void 0&&(P=C),"selectionStart"in b)b.selectionStart=C,b.selectionEnd=Math.min(P,b.value.length);else{var X=b.ownerDocument||document,B=X&&X.defaultView||window;if(B.getSelection){var V=B.getSelection(),fe=b.textContent.length,be=Math.min(k.start,fe),Ke=k.end===void 0?be:Math.min(k.end,fe);!V.extend&&be>Ke&&(m=Ke,Ke=be,be=m);var M=E(b,be),R=E(b,Ke);if(M&&R&&(V.rangeCount!==1||V.anchorNode!==M.node||V.anchorOffset!==M.offset||V.focusNode!==R.node||V.focusOffset!==R.offset)){var A=X.createRange();A.setStart(M.node,M.offset),V.removeAllRanges(),be>Ke?(V.addRange(A),V.extend(R.node,R.offset)):(A.setEnd(R.node,R.offset),V.addRange(A))}}}}for(X=[],V=b;V=V.parentNode;)V.nodeType===1&&X.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<X.length;b++){var q=X[b];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Co=!!ef,nf=ef=null}finally{Ve=l,te.p=r,U.T=t}}e.current=n,kn=2}}function cp(){if(kn===2){kn=0;var e=ml,n=Gi,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=U.T,U.T=null;var r=te.p;te.p=2;var l=Ve;Ve|=4;try{zm(e,n.alternate,n)}finally{Ve=l,te.p=r,U.T=t}}kn=3}}function up(){if(kn===4||kn===3){kn=0,Ir();var e=ml,n=Gi,t=Lr,r=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?kn=5:(kn=0,Gi=ml=null,fp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(dl=null),Nt(t),n=n.stateNode,En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Tl,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=U.T,l=te.p,te.p=2,U.T=null;try{for(var o=e.onRecoverableError,m=0;m<r.length;m++){var b=r[m];o(b.value,{componentStack:b.stack})}}finally{U.T=n,te.p=l}}(Lr&3)!==0&&wo(),or(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Iu?Fa++:(Fa=0,Iu=e):Fa=0,Xa(0)}}function fp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ta(n)))}function wo(){return op(),cp(),up(),dp()}function dp(){if(kn!==5)return!1;var e=ml,n=Hu;Hu=0;var t=Nt(Lr),r=U.T,l=te.p;try{te.p=32>t?32:t,U.T=null,t=Gu,Gu=null;var o=ml,m=Lr;if(kn=0,Gi=ml=null,Lr=0,(Ve&6)!==0)throw Error(a(331));var b=Ve;if(Ve|=4,Fm(o.current),Pm(o,o.current,m,t),Ve=b,Xa(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Tl,o)}catch{}return!0}finally{te.p=l,U.T=r,fp(e,n)}}function mp(e,n,t){n=At(t,n),n=yu(e.stateNode,n,2),e=al(e,n,2),e!==null&&(Ml(e,2),or(e))}function qe(e,n,t){if(e.tag===3)mp(e,e,t);else for(;n!==null;){if(n.tag===3){mp(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dl===null||!dl.has(r))){e=At(t,e),t=pm(2),r=al(n,t,2),r!==null&&(hm(t,r,n,e),Ml(r,2),or(r));break}}n=n.return}}function Pu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new rg;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(Bu=!0,l.add(t),e=og.bind(null,e,n,t),n.then(e,e))}function og(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ze===e&&(Ce&t)===t&&(un===4||un===3&&(Ce&62914560)===Ce&&300>wn()-_o?(Ve&2)===0&&Ii(e,0):zu|=t,Hi===Ce&&(Hi=0)),or(e)}function pp(e,n){n===0&&(n=ui()),e=Pl(e,n),e!==null&&(Ml(e,n),or(e))}function cg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),pp(e,t)}function ug(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(n),pp(e,t)}function fg(e,n){return Gr(e,n)}var Eo=null,Yi=null,$u=!1,So=!1,qu=!1,hl=0;function or(e){e!==Yi&&e.next===null&&(Yi===null?Eo=Yi=e:Yi=Yi.next=e),So=!0,$u||($u=!0,mg())}function Xa(e,n){if(!qu&&So){qu=!0;do for(var t=!1,r=Eo;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var o=0;else{var m=r.suspendedLanes,b=r.pingedLanes;o=(1<<31-jn(42|e)+1)-1,o&=l&~(m&~b),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,bp(r,o))}else o=Ce,o=hn(r,r===Ze?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||Dn(r,o)||(t=!0,bp(r,o));r=r.next}while(t);qu=!1}}function dg(){hp()}function hp(){So=$u=!1;var e=0;hl!==0&&Eg()&&(e=hl);for(var n=wn(),t=null,r=Eo;r!==null;){var l=r.next,o=_p(r,n);o===0?(r.next=null,t===null?Eo=l:t.next=l,l===null&&(Yi=t)):(t=r,(e!==0||(o&3)!==0)&&(So=!0)),r=l}kn!==0&&kn!==5||Xa(e),hl!==0&&(hl=0)}function _p(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-jn(o),b=1<<m,k=l[m];k===-1?((b&t)===0||(b&r)!==0)&&(l[m]=ic(b,n)):k<=n&&(e.expiredLanes|=b),o&=~b}if(n=Ze,t=Ce,t=hn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&($e===2||$e===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&kt(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Dn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&kt(r),Nt(t)){case 2:case 8:t=ra;break;case 32:t=Rl;break;case 268435456:t=dt;break;default:t=Rl}return r=gp.bind(null,e),t=Gr(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&kt(r),e.callbackPriority=2,e.callbackNode=null,2}function gp(e,n){if(kn!==0&&kn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(wo()&&e.callbackNode!==t)return null;var r=Ce;return r=hn(e,e===Ze?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Wm(e,r,n),_p(e,wn()),e.callbackNode!=null&&e.callbackNode===t?gp.bind(null,e):null)}function bp(e,n){if(wo())return null;Wm(e,n,!0)}function mg(){kg(function(){(Ve&6)!==0?Gr(Nl,dg):hp()})}function Fu(){if(hl===0){var e=Ti;e===0&&(e=Yt,Yt<<=1,(Yt&261888)===0&&(Yt=256)),hl=e}return hl}function yp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cl(""+e)}function vp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function pg(e,n,t,r,l){if(n==="submit"&&t&&t.stateNode===l){var o=yp((l[Sn]||null).action),m=r.submitter;m&&(n=(n=m[Sn]||null)?yp(n.formAction):m.getAttribute("formAction"),n!==null&&(o=n,m=null));var b=new br("action","action",null,r,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hl!==0){var k=m?vp(l,m):new FormData(l);mu(t,{pending:!0,data:k,method:l.method,action:o},null,k)}}else typeof o=="function"&&(b.preventDefault(),k=m?vp(l,m):new FormData(l),mu(t,{pending:!0,data:k,method:l.method,action:o},o,k))},currentTarget:l}]})}}for(var Xu=0;Xu<jc.length;Xu++){var Ku=jc[Xu],hg=Ku.toLowerCase(),_g=Ku[0].toUpperCase()+Ku.slice(1);Kt(hg,"on"+_g)}Kt(vr,"onAnimationEnd"),Kt(xr,"onAnimationIteration"),Kt(Ea,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(xi,"onTransitionRun"),Kt(Sa,"onTransitionStart"),Kt(Yl,"onTransitionCancel"),Kt(ka,"onTransitionEnd"),hr("onMouseEnter",["mouseout","mouseover"]),hr("onMouseLeave",["mouseout","mouseover"]),hr("onPointerEnter",["pointerout","pointerover"]),hr("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ka));function xp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var m=r.length-1;0<=m;m--){var b=r[m],k=b.instance,C=b.currentTarget;if(b=b.listener,k!==o&&l.isPropagationStopped())break e;o=b,l.currentTarget=C;try{o(l)}catch(P){Us(P)}l.currentTarget=null,o=k}else for(m=0;m<r.length;m++){if(b=r[m],k=b.instance,C=b.currentTarget,b=b.listener,k!==o&&l.isPropagationStopped())break e;o=b,l.currentTarget=C;try{o(l)}catch(P){Us(P)}l.currentTarget=null,o=k}}}}function De(e,n){var t=n[jl];t===void 0&&(t=n[jl]=new Set);var r=e+"__bubble";t.has(r)||(wp(n,e,2,!1),t.add(r))}function Qu(e,n,t){var r=0;n&&(r|=4),wp(t,e,r,n)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Zu(e){if(!e[ko]){e[ko]=!0,tr.forEach(function(t){t!=="selectionchange"&&(gg.has(t)||Qu(t,!1,e),Qu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ko]||(n[ko]=!0,Qu("selectionchange",!1,n))}}function wp(e,n,t,r){switch(Zp(n)){case 2:var l=$g;break;case 8:l=qg;break;default:l=mf}t=l.bind(null,n,t,e),l=void 0,!fa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Wu(e,n,t,r,l){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var b=r.stateNode.containerInfo;if(b===l)break;if(m===4)for(m=r.return;m!==null;){var k=m.tag;if((k===3||k===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;b!==null;){if(m=Tt(b),m===null)return;if(k=m.tag,k===5||k===6||k===26||k===27){r=o=m;continue e}b=b.parentNode}}r=r.return}ua(function(){var C=o,P=sa(t),X=[];e:{var B=nd.get(e);if(B!==void 0){var V=br,fe=e;switch(e){case"keypress":if(hi(t)===0)break e;case"keydown":case"keyup":V=mc;break;case"focusin":fe="focus",V=gi;break;case"focusout":fe="blur",V=gi;break;case"beforeblur":case"afterblur":V=gi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=zl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=_c;break;case vr:case xr:case Ea:V=oc;break;case ka:V=bc;break;case"scroll":case"scrollend":V=Es;break;case"wheel":V=vc;break;case"copy":case"cut":case"paste":V=uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=js;break;case"toggle":case"beforetoggle":V=wc}var be=(n&4)!==0,Ke=!be&&(e==="scroll"||e==="scrollend"),M=be?B!==null?B+"Capture":null:B;be=[];for(var R=C,A;R!==null;){var q=R;if(A=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||A===null||M===null||(q=lt(R,M),q!=null&&be.push(Qa(R,q,A))),Ke)break;R=R.return}0<be.length&&(B=new V(B,fe,null,t,P),X.push({event:B,listeners:be}))}}if((n&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",B&&t!==gr&&(fe=t.relatedTarget||t.fromElement)&&(Tt(fe)||fe[pt]))break e;if((V||B)&&(B=P.window===P?P:(B=P.ownerDocument)?B.defaultView||B.parentWindow:window,V?(fe=t.relatedTarget||t.toElement,V=C,fe=fe?Tt(fe):null,fe!==null&&(Ke=p(fe),be=fe.tag,fe!==Ke||be!==5&&be!==27&&be!==6)&&(fe=null)):(V=null,fe=C),V!==fe)){if(be=nn,q="onMouseLeave",M="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(be=js,q="onPointerLeave",M="onPointerEnter",R="pointer"),Ke=V==null?B:mr(V),A=fe==null?B:mr(fe),B=new be(q,R+"leave",V,t,P),B.target=Ke,B.relatedTarget=A,q=null,Tt(P)===C&&(be=new be(M,R+"enter",fe,t,P),be.target=A,be.relatedTarget=Ke,q=be),Ke=q,V&&fe)n:{for(be=bg,M=V,R=fe,A=0,q=M;q;q=be(q))A++;q=0;for(var ge=R;ge;ge=be(ge))q++;for(;0<A-q;)M=be(M),A--;for(;0<q-A;)R=be(R),q--;for(;A--;){if(M===R||R!==null&&M===R.alternate){be=M;break n}M=be(M),R=be(R)}be=null}else be=null;V!==null&&Ep(X,B,V,be,!1),fe!==null&&Ke!==null&&Ep(X,Ke,fe,be,!0)}}e:{if(B=C?mr(C):window,V=B.nodeName&&B.nodeName.toLowerCase(),V==="select"||V==="input"&&B.type==="file")var Ge=ya;else if(Cs(B))if(Bs)Ge=Tc;else{Ge=wa;var me=vi}else V=B.nodeName,!V||V.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?C&&mi(C.elementType)&&(Ge=ya):Ge=zs;if(Ge&&(Ge=Ge(e,C))){Ls(X,Ge,t,P);break e}me&&me(e,B,C),e==="focusout"&&C&&B.type==="number"&&C.memoizedProps.value!=null&&aa(B,"number",B.value)}switch(me=C?mr(C):window,e){case"focusin":(Cs(me)||me.contentEditable==="true")&&(ze=me,Me=C,tn=null);break;case"focusout":tn=Me=ze=null;break;case"mousedown":Wn=!0;break;case"contextmenu":case"mouseup":case"dragend":Wn=!1,Jr(X,t,P);break;case"selectionchange":if(pe)break;case"keydown":case"keyup":Jr(X,t,P)}var Re;if(lr)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else yr?As(e,t)&&(Le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Le="onCompositionStart");Le&&(_a&&t.locale!=="ko"&&(yr||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&yr&&(Re=Zr()):(qt=P,Ll="value"in qt?qt.value:qt.textContent,yr=!0)),me=No(C,Le),0<me.length&&(Le=new pa(Le,e,null,t,P),X.push({event:Le,listeners:me}),Re?Le.data=Re:(Re=Os(t),Re!==null&&(Le.data=Re)))),(Re=Sc?kc(e,t):Nc(e,t))&&(Le=No(C,"onBeforeInput"),0<Le.length&&(me=new pa("onBeforeInput","beforeinput",null,t,P),X.push({event:me,listeners:Le}),me.data=Re)),pg(X,e,C,t,P)}xp(X,n)})}function Qa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function No(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=lt(e,t),l!=null&&r.unshift(Qa(e,l,o)),l=lt(e,n),l!=null&&r.push(Qa(e,l,o))),e.tag===3)return r;e=e.return}return[]}function bg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ep(e,n,t,r,l){for(var o=n._reactName,m=[];t!==null&&t!==r;){var b=t,k=b.alternate,C=b.stateNode;if(b=b.tag,k!==null&&k===r)break;b!==5&&b!==26&&b!==27||C===null||(k=C,l?(C=lt(t,o),C!=null&&m.unshift(Qa(t,C,k))):l||(C=lt(t,o),C!=null&&m.push(Qa(t,C,k)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var yg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function Sp(e){return(typeof e=="string"?e:""+e).replace(yg,`
`).replace(vg,"")}function kp(e,n){return n=Sp(n),Sp(e)===n}function Xe(e,n,t,r,l,o){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Fr(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Fr(e,""+r);break;case"className":_e(e,"class",r);break;case"tabIndex":_e(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(e,t,r);break;case"style":Xr(e,r,o);break;case"data":if(n!=="object"){_e(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=Cl(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Xe(e,n,"name",l.name,l,null),Xe(e,n,"formEncType",l.formEncType,l,null),Xe(e,n,"formMethod",l.formMethod,l,null),Xe(e,n,"formTarget",l.formTarget,l,null)):(Xe(e,n,"encType",l.encType,l,null),Xe(e,n,"method",l.method,l,null),Xe(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=Cl(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=_t);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=Cl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":De("beforetoggle",e),De("toggle",e),Pt(e,"popover",r);break;case"xlinkActuate":ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ht(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ht(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ht(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ht(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Pt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=pi.get(t)||t,Pt(e,t,r))}}function Ju(e,n,t,r,l,o){switch(t){case"style":Xr(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"children":typeof r=="string"?Fr(e,r):(typeof r=="number"||typeof r=="bigint")&&Fr(e,""+r);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"onClick":r!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),o=e[Sn]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,l),typeof r=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,l);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):Pt(e,t,r)}}}function zn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var r=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var m=t[o];if(m!=null)switch(o){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xe(e,n,o,m,t,null)}}l&&Xe(e,n,"srcSet",t.srcSet,t,null),r&&Xe(e,n,"src",t.src,t,null);return;case"input":De("invalid",e);var b=o=m=l=null,k=null,C=null;for(r in t)if(t.hasOwnProperty(r)){var P=t[r];if(P!=null)switch(r){case"name":l=P;break;case"type":m=P;break;case"checked":k=P;break;case"defaultChecked":C=P;break;case"value":o=P;break;case"defaultValue":b=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,n));break;default:Xe(e,n,r,P,t,null)}}xs(e,o,b,k,C,m,l,!1);return;case"select":De("invalid",e),r=m=o=null;for(l in t)if(t.hasOwnProperty(l)&&(b=t[l],b!=null))switch(l){case"value":o=b;break;case"defaultValue":m=b;break;case"multiple":r=b;default:Xe(e,n,l,b,t,null)}n=o,t=m,e.multiple=!!r,n!=null?_r(e,!!r,n,!1):t!=null&&_r(e,!!r,t,!0);return;case"textarea":De("invalid",e),o=l=r=null;for(m in t)if(t.hasOwnProperty(m)&&(b=t[m],b!=null))switch(m){case"value":r=b;break;case"defaultValue":l=b;break;case"children":o=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Xe(e,n,m,b,t,null)}$(e,r,l,o);return;case"option":for(k in t)if(t.hasOwnProperty(k)&&(r=t[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,k,r,t,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(r=0;r<Ka.length;r++)De(Ka[r],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(r=t[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xe(e,n,C,r,t,null)}return;default:if(mi(n)){for(P in t)t.hasOwnProperty(P)&&(r=t[P],r!==void 0&&Ju(e,n,P,r,t,void 0));return}}for(b in t)t.hasOwnProperty(b)&&(r=t[b],r!=null&&Xe(e,n,b,r,t,null))}function xg(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,m=null,b=null,k=null,C=null,P=null;for(V in t){var X=t[V];if(t.hasOwnProperty(V)&&X!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":k=X;default:r.hasOwnProperty(V)||Xe(e,n,V,null,r,X)}}for(var B in r){var V=r[B];if(X=t[B],r.hasOwnProperty(B)&&(V!=null||X!=null))switch(B){case"type":o=V;break;case"name":l=V;break;case"checked":C=V;break;case"defaultChecked":P=V;break;case"value":m=V;break;case"defaultValue":b=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,n));break;default:V!==X&&Xe(e,n,B,V,r,X)}}Gn(e,m,b,k,C,P,o,l);return;case"select":V=m=b=B=null;for(o in t)if(k=t[o],t.hasOwnProperty(o)&&k!=null)switch(o){case"value":break;case"multiple":V=k;default:r.hasOwnProperty(o)||Xe(e,n,o,null,r,k)}for(l in r)if(o=r[l],k=t[l],r.hasOwnProperty(l)&&(o!=null||k!=null))switch(l){case"value":B=o;break;case"defaultValue":b=o;break;case"multiple":m=o;default:o!==k&&Xe(e,n,l,o,r,k)}n=b,t=m,r=V,B!=null?_r(e,!!t,B,!1):!!r!=!!t&&(n!=null?_r(e,!!t,n,!0):_r(e,!!t,t?[]:"",!1));return;case"textarea":V=B=null;for(b in t)if(l=t[b],t.hasOwnProperty(b)&&l!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Xe(e,n,b,null,r,l)}for(m in r)if(l=r[m],o=t[m],r.hasOwnProperty(m)&&(l!=null||o!=null))switch(m){case"value":B=l;break;case"defaultValue":V=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(a(91));break;default:l!==o&&Xe(e,n,m,l,r,o)}di(e,B,V);return;case"option":for(var fe in t)if(B=t[fe],t.hasOwnProperty(fe)&&B!=null&&!r.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Xe(e,n,fe,null,r,B)}for(k in r)if(B=r[k],V=t[k],r.hasOwnProperty(k)&&B!==V&&(B!=null||V!=null))switch(k){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Xe(e,n,k,B,r,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in t)B=t[be],t.hasOwnProperty(be)&&B!=null&&!r.hasOwnProperty(be)&&Xe(e,n,be,null,r,B);for(C in r)if(B=r[C],V=t[C],r.hasOwnProperty(C)&&B!==V&&(B!=null||V!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:Xe(e,n,C,B,r,V)}return;default:if(mi(n)){for(var Ke in t)B=t[Ke],t.hasOwnProperty(Ke)&&B!==void 0&&!r.hasOwnProperty(Ke)&&Ju(e,n,Ke,void 0,r,B);for(P in r)B=r[P],V=t[P],!r.hasOwnProperty(P)||B===V||B===void 0&&V===void 0||Ju(e,n,P,B,r,V);return}}for(var M in t)B=t[M],t.hasOwnProperty(M)&&B!=null&&!r.hasOwnProperty(M)&&Xe(e,n,M,null,r,B);for(X in r)B=r[X],V=t[X],!r.hasOwnProperty(X)||B===V||B==null&&V==null||Xe(e,n,X,B,r,V)}function Np(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],o=l.transferSize,m=l.initiatorType,b=l.duration;if(o&&b&&Np(m)){for(m=0,b=l.responseEnd,r+=1;r<t.length;r++){var k=t[r],C=k.startTime;if(C>b)break;var P=k.transferSize,X=k.initiatorType;P&&Np(X)&&(k=k.responseEnd,m+=P*(k<b?1:(b-C)/(k-C)))}if(--r,n+=8*(o+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ef=null,nf=null;function Ro(e){return e.nodeType===9?e:e.ownerDocument}function Rp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function tf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rf=null;function Eg(){var e=window.event;return e&&e.type==="popstate"?e===rf?!1:(rf=e,!0):(rf=null,!1)}var Mp=typeof setTimeout=="function"?setTimeout:void 0,Sg=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(e){return jp.resolve(null).then(e).catch(Ng)}:Mp;function Ng(e){setTimeout(function(){throw e})}function _l(e){return e==="head"}function Dp(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(l),Fi(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")Za(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Za(t);for(var o=t.firstChild;o;){var m=o.nextSibling,b=o.nodeName;o[Fn]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=m}}else t==="body"&&Za(e.ownerDocument.body);t=l}while(t);Fi(n)}function Ap(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function lf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":lf(t),nr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Rg(e,n,t,r){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Fn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Tg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Op(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zt(e.nextSibling),e===null))return null;return e}function af(e){return e.data==="$?"||e.data==="$~"}function sf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function zt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var of=null;function Cp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return zt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Lp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Bp(e,n,t){switch(n=Ro(t),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Za(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);nr(e)}var Ut=new Map,zp=new Set;function To(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Br=te.d;te.d={f:jg,r:Dg,D:Ag,C:Og,L:Cg,m:Lg,X:zg,S:Bg,M:Ug};function jg(){var e=Br.f(),n=yo();return e||n}function Dg(e){var n=nt(e);n!==null&&n.tag===5&&n.type==="form"?em(n):Br.r(e)}var Pi=typeof document>"u"?null:document;function Up(e,n,t){var r=Pi;if(r&&typeof n=="string"&&n){var l=Hn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),zp.has(l)||(zp.add(l),e={rel:e,crossOrigin:t,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),zn(n,"link",e),en(n),r.head.appendChild(n)))}}function Ag(e){Br.D(e),Up("dns-prefetch",e,null)}function Og(e,n){Br.C(e,n),Up("preconnect",e,n)}function Cg(e,n,t){Br.L(e,n,t);var r=Pi;if(r&&e&&n){var l='link[rel="preload"][as="'+Hn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Hn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Hn(t.imageSizes)+'"]')):l+='[href="'+Hn(e)+'"]';var o=l;switch(n){case"style":o=$i(e);break;case"script":o=qi(e)}Ut.has(o)||(e=v({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Ut.set(o,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Wa(o))||n==="script"&&r.querySelector(Ja(o))||(n=r.createElement("link"),zn(n,"link",e),en(n),r.head.appendChild(n)))}}function Lg(e,n){Br.m(e,n);var t=Pi;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Hn(r)+'"][href="'+Hn(e)+'"]',o=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=qi(e)}if(!Ut.has(o)&&(e=v({rel:"modulepreload",href:e},n),Ut.set(o,e),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ja(o)))return}r=t.createElement("link"),zn(r,"link",e),en(r),t.head.appendChild(r)}}}function Bg(e,n,t){Br.S(e,n,t);var r=Pi;if(r&&e){var l=Xn(r).hoistableStyles,o=$i(e);n=n||"default";var m=l.get(o);if(!m){var b={loading:0,preload:null};if(m=r.querySelector(Wa(o)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Ut.get(o))&&cf(e,t);var k=m=r.createElement("link");en(k),zn(k,"link",e),k._p=new Promise(function(C,P){k.onload=C,k.onerror=P}),k.addEventListener("load",function(){b.loading|=1}),k.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Mo(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:b},l.set(o,m)}}}function zg(e,n){Br.X(e,n);var t=Pi;if(t&&e){var r=Xn(t).hoistableScripts,l=qi(e),o=r.get(l);o||(o=t.querySelector(Ja(l)),o||(e=v({src:e,async:!0},n),(n=Ut.get(l))&&uf(e,n),o=t.createElement("script"),en(o),zn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Ug(e,n){Br.M(e,n);var t=Pi;if(t&&e){var r=Xn(t).hoistableScripts,l=qi(e),o=r.get(l);o||(o=t.querySelector(Ja(l)),o||(e=v({src:e,async:!0,type:"module"},n),(n=Ut.get(l))&&uf(e,n),o=t.createElement("script"),en(o),zn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Hp(e,n,t,r){var l=(l=ee.current)?To(l):null;if(!l)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=$i(t.href),t=Xn(l).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=$i(t.href);var o=Xn(l).hoistableStyles,m=o.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=l.querySelector(Wa(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Ut.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ut.set(e,t),o||Hg(l,e,t,m.state))),n&&r===null)throw Error(a(528,""));return m}if(n&&r!==null)throw Error(a(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qi(t),t=Xn(l).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function $i(e){return'href="'+Hn(e)+'"'}function Wa(e){return'link[rel="stylesheet"]['+e+"]"}function Gp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Hg(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),zn(n,"link",t),en(n),e.head.appendChild(n))}function qi(e){return'[src="'+Hn(e)+'"]'}function Ja(e){return"script[async]"+e}function Ip(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Hn(t.href)+'"]');if(r)return n.instance=r,en(r),r;var l=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),en(r),zn(r,"style",l),Mo(r,t.precedence,e),n.instance=r;case"stylesheet":l=$i(t.href);var o=e.querySelector(Wa(l));if(o)return n.state.loading|=4,n.instance=o,en(o),o;r=Gp(t),(l=Ut.get(l))&&cf(r,l),o=(e.ownerDocument||e).createElement("link"),en(o);var m=o;return m._p=new Promise(function(b,k){m.onload=b,m.onerror=k}),zn(o,"link",r),n.state.loading|=4,Mo(o,t.precedence,e),n.instance=o;case"script":return o=qi(t.src),(l=e.querySelector(Ja(o)))?(n.instance=l,en(l),l):(r=t,(l=Ut.get(o))&&(r=v({},t),uf(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),en(l),zn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Mo(r,t.precedence,e));return n.instance}function Mo(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,o=l,m=0;m<r.length;m++){var b=r[m];if(b.dataset.precedence===n)o=b;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jo=null;function Vp(e,n,t){if(jo===null){var r=new Map,l=jo=new Map;l.set(t,r)}else l=jo,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[Fn]||o[fn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(n)||"";m=e+m;var b=r.get(m);b?b.push(o):r.set(m,[o])}}return r}function Yp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Gg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ig(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=$i(r.href),o=n.querySelector(Wa(l));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Do.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,en(o);return}o=n.ownerDocument||n,r=Gp(r),(l=Ut.get(l))&&cf(r,l),o=o.createElement("link"),en(o);var m=o;m._p=new Promise(function(b,k){m.onload=b,m.onerror=k}),zn(o,"link",r),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Do.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var ff=0;function Vg(e,n){return e.stylesheets&&e.count===0&&Oo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&Oo(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&ff===0&&(ff=62500*wg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oo(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>ff?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Do(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ao=null;function Oo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ao=new Map,n.forEach(Yg,e),Ao=null,Do.call(e))}function Yg(e,n){if(!(n.state.loading&4)){var t=Ao.get(e);if(t)var r=t.get(null);else{t=new Map,Ao.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var m=l[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),r=m)}r&&t.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),o=t.get(m)||r,o===r&&t.set(null,l),t.set(m,l),this.count++,r=Do.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var es={$$typeof:ie,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Pg(e,n,t,r,l,o,m,b,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=er(0),this.hiddenUpdates=er(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function $p(e,n,t,r,l,o,m,b,k,C,P,X){return e=new Pg(e,n,t,m,k,C,P,X,b),n=1,o===!0&&(n|=24),o=gt(3,null,null,n),e.current=o,o.stateNode=e,n=Yc(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:r,isDehydrated:t,cache:n},Fc(o),e}function qp(e){return e?(e=Ei,e):Ei}function Fp(e,n,t,r,l,o){l=qp(l),r.context===null?r.context=l:r.pendingContext=l,r=il(n),r.payload={element:t},o=o===void 0?null:o,o!==null&&(r.callback=o),t=al(e,r,n),t!==null&&(ut(t,e,n),Aa(t,e,n))}function Xp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function df(e,n){Xp(e,n),(e=e.alternate)&&Xp(e,n)}function Kp(e){if(e.tag===13||e.tag===31){var n=Pl(e,67108864);n!==null&&ut(n,e,67108864),df(e,67108864)}}function Qp(e){if(e.tag===13||e.tag===31){var n=wt();n=Yr(n);var t=Pl(e,n);t!==null&&ut(t,e,n),df(e,n)}}var Co=!0;function $g(e,n,t,r){var l=U.T;U.T=null;var o=te.p;try{te.p=2,mf(e,n,t,r)}finally{te.p=o,U.T=l}}function qg(e,n,t,r){var l=U.T;U.T=null;var o=te.p;try{te.p=8,mf(e,n,t,r)}finally{te.p=o,U.T=l}}function mf(e,n,t,r){if(Co){var l=pf(r);if(l===null)Wu(e,n,r,Lo,t),Wp(e,r);else if(Xg(l,e,n,t,r))r.stopPropagation();else if(Wp(e,r),n&4&&-1<Fg.indexOf(e)){for(;l!==null;){var o=nt(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=an(o.pendingLanes);if(m!==0){var b=o;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var k=1<<31-jn(m);b.entanglements[1]|=k,m&=~k}or(o),(Ve&6)===0&&(go=wn()+500,Xa(0))}}break;case 31:case 13:b=Pl(o,2),b!==null&&ut(b,o,2),yo(),df(o,2)}if(o=pf(r),o===null&&Wu(e,n,r,Lo,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Wu(e,n,r,null,t)}}function pf(e){return e=sa(e),hf(e)}var Lo=null;function hf(e){if(Lo=null,e=Tt(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=_(n),e!==null)return e;e=null}else if(t===31){if(e=y(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Lo=e,null}function Zp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kl()){case Nl:return 2;case ra:return 8;case Rl:case $n:return 32;case dt:return 268435456;default:return 32}default:return 32}}var _f=!1,gl=null,bl=null,yl=null,ns=new Map,ts=new Map,vl=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wp(e,n){switch(e){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":bl=null;break;case"mouseover":case"mouseout":yl=null;break;case"pointerover":case"pointerout":ns.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(n.pointerId)}}function rs(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=nt(n),n!==null&&Kp(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Xg(e,n,t,r,l){switch(n){case"focusin":return gl=rs(gl,e,n,t,r,l),!0;case"dragenter":return bl=rs(bl,e,n,t,r,l),!0;case"mouseover":return yl=rs(yl,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return ns.set(o,rs(ns.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,ts.set(o,rs(ts.get(o)||null,e,n,t,r,l)),!0}return!1}function Jp(e){var n=Tt(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=_(t),n!==null){e.blockedOn=n,la(e.priority,function(){Qp(t)});return}}else if(n===31){if(n=y(t),n!==null){e.blockedOn=n,la(e.priority,function(){Qp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pf(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);gr=r,t.target.dispatchEvent(r),gr=null}else return n=nt(t),n!==null&&Kp(n),e.blockedOn=t,!1;n.shift()}return!0}function eh(e,n,t){Bo(e)&&t.delete(n)}function Kg(){_f=!1,gl!==null&&Bo(gl)&&(gl=null),bl!==null&&Bo(bl)&&(bl=null),yl!==null&&Bo(yl)&&(yl=null),ns.forEach(eh),ts.forEach(eh)}function zo(e,n){e.blockedOn===n&&(e.blockedOn=null,_f||(_f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Kg)))}var Uo=null;function nh(e){Uo!==e&&(Uo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Uo===e&&(Uo=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(hf(r||t)===null)continue;break}var o=nt(t);o!==null&&(e.splice(n,3),n-=3,mu(o,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function Fi(e){function n(k){return zo(k,e)}gl!==null&&zo(gl,e),bl!==null&&zo(bl,e),yl!==null&&zo(yl,e),ns.forEach(n),ts.forEach(n);for(var t=0;t<vl.length;t++){var r=vl[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<vl.length&&(t=vl[0],t.blockedOn===null);)Jp(t),t.blockedOn===null&&vl.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],o=t[r+1],m=l[Sn]||null;if(typeof o=="function")m||nh(t);else if(m){var b=null;if(o&&o.hasAttribute("formAction")){if(l=o,m=o[Sn]||null)b=m.formAction;else if(hf(l)!==null)continue}else b=m.action;typeof b=="function"?t[r+1]=b:(t.splice(r,3),r-=3),nh(t)}}}function th(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function gf(e){this._internalRoot=e}Ho.prototype.render=gf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var t=n.current,r=wt();Fp(t,r,e,n,null,null)},Ho.prototype.unmount=gf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fp(e.current,2,null,e,null,null),yo(),n[pt]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var n=sn();e={blockedOn:null,target:e,priority:n};for(var t=0;t<vl.length&&n!==0&&n<vl[t].priority;t++);vl.splice(t,0,e),t===0&&Jp(e)}};var rh=i.version;if(rh!=="19.2.7")throw Error(a(527,rh,"19.2.7"));te.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=x(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Qg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Tl=Go.inject(Qg),En=Go}catch{}}return is.createRoot=function(e,n){if(!f(e))throw Error(a(299));var t=!1,r="",l=um,o=fm,m=dm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=$p(e,1,!1,null,null,t,r,null,l,o,m,th),e[pt]=n.current,Zu(e),new gf(n)},is.hydrateRoot=function(e,n,t){if(!f(e))throw Error(a(299));var r=!1,l="",o=um,m=fm,b=dm,k=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError),t.formState!==void 0&&(k=t.formState)),n=$p(e,1,!0,n,t??null,r,l,k,o,m,b,th),n.context=qp(null),t=n.current,r=wt(),r=Yr(r),l=il(r),l.callback=null,al(t,l,r),t=r,n.current.lanes=t,Ml(n,t),or(n),e[pt]=n.current,Zu(e),new Ho(n)},is.version="19.2.7",is}var mh;function ob(){if(mh)return vf.exports;mh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),vf.exports=sb(),vf.exports}var cb=ob();const ub=o_(cb),ph=s=>{let i;const c=new Set,a=(x,g)=>{const v=typeof x=="function"?x(i):x;if(!Object.is(v,i)){const S=i;i=g??(typeof v!="object"||v===null)?v:Object.assign({},i,v),c.forEach(G=>G(i,S))}},f=()=>i,y={setState:a,getState:f,getInitialState:()=>w,subscribe:x=>(c.add(x),()=>c.delete(x))},w=i=s(a,f,y);return y},fb=(s=>s?ph(s):ph),db=s=>s;function mb(s,i=db){const c=ms.useSyncExternalStore(s.subscribe,ms.useCallback(()=>i(s.getState()),[s,i]),ms.useCallback(()=>i(s.getInitialState()),[s,i]));return ms.useDebugValue(c),c}const hh=s=>{const i=fb(s),c=a=>mb(i,a);return Object.assign(c,i),c},pb=(s=>s?hh(s):hh);function hb(){const s=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(s);else for(let c=0;c<s.length;c+=1)s[c]=Math.floor(Math.random()*256);let i="";for(const c of s)i+=c.toString(16).padStart(2,"0");return i}const Qf="pkp.user",Zf="pkp.savedDevices",Wf="pkp.ideDrafts",Jf="pkp.ideSettings",_s="Prototype Version 0.6.7";function ec(s){try{const i=localStorage.getItem(s);return i?JSON.parse(i):null}catch{return null}}function nc(s,i){try{localStorage.setItem(s,JSON.stringify(i))}catch{}}function _b(){const s=ec(Qf);return s&&typeof s.username=="string"&&typeof s.userID=="string"?s:null}function Sf(s){nc(Qf,s)}function Ko(){return ec(Zf)??[]}function Qi(s){nc(Zf,s)}function gb(){Qi([])}function bb(){try{localStorage.removeItem(Qf),localStorage.removeItem(Zf),localStorage.removeItem(Wf),localStorage.removeItem(Jf)}catch{}}function kf(){var s;return((s=ec(Wf))==null?void 0:s.filter(i=>i.path&&typeof i.content=="string"))??[]}function Nf(s){nc(Wf,s)}function _h(){const s=ec(Jf)??{};return{clearTerminalOnRun:!!s.clearTerminalOnRun,simplifiedErrors:s.simplifiedErrors!==!1}}function yb(s){nc(Jf,s)}function Rf(s){const i=Ko(),c=i.findIndex(a=>a.deviceID===s.deviceID);return c>=0?i[c]=s:i.push(s),Qi(i),i}function vb(s){const i=Ko().filter(c=>c.deviceID!==s);return Qi(i),i}const Hf="b8e06067-62ad-41ba-9231-206ae80ab551",xb="f897177b-aee8-4767-8ecc-cc694fd5fce0",wb="f897177b-aee8-4767-8ecc-cc694fd5fce1",Tf=20,Eb=12,Sb=new TextEncoder,kb=new TextDecoder;function Nb(s){return new Promise(i=>setTimeout(i,s))}function tc(){return typeof navigator<"u"&&"bluetooth"in navigator}function c_(s){return s?s.startsWith("PicoW-")?s.slice(6):s:"Pico"}async function Rb(){if(!tc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Hf]},{namePrefix:"PicoW-"}],optionalServices:[Hf]})}async function u_(){if(!tc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Tb{constructor(){de(this,"device",null);de(this,"writeChar",null);de(this,"notifyChar",null);de(this,"buffer","");de(this,"writeQueue",Promise.resolve());de(this,"disconnectNotified",!1);de(this,"onLine",()=>{});de(this,"onDisconnect",()=>{});de(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=kb.decode(c.value.buffer);let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});de(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var f;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=i.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Hf);this.writeChar=await a.getCharacteristic(xb),this.notifyChar=await a.getCharacteristic(wb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=Sb.encode(`${i}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let p=0;p<c.length;p+=Tf){const _=c.slice(p,p+Tf);await f(_),p+Tf<c.length&&await Nb(Eb)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class Mb{constructor(i,c){de(this,"send");de(this,"onMessage");de(this,"inActive",!1);de(this,"inExpectedTotal",0);de(this,"inStreamId",0);de(this,"inParts",new Map);de(this,"inProgress",null);de(this,"outPendingLines",null);de(this,"outWaitingAck",!1);de(this,"outStreamId",0);de(this,"outNextStreamId",1);de(this,"outCache",new Map);de(this,"outProgress",null);de(this,"outResolve",null);de(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const f=i.split(","),p=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,_=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;p!==null&&p>0&&(this.inActive=!0,this.inExpectedTotal=p,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const f=i.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const p=parseInt(f[1],10),_=parseInt(f[2],10),y=this.outCache.get(_);p===this.outStreamId&&y&&this.send(y)}return}const c=this.parseNumbered(i);if(c){const{idx:f,payload:p}=c;if(!this.inActive){this.onMessage(p);return}this.inParts.has(f)||(this.inParts.set(f,p),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let y=1;y<=this.inExpectedTotal;y+=1)if(!this.inParts.has(y)){_=y;break}if(_>0&&this.inStreamId>0&&f>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let y=1;y<=this.inExpectedTotal;y+=1){const w=this.inParts.get(y);w!==void 0&&this.onMessage(w)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((p,_)=>{this.outResolve=p,this.outReject=_});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(p){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,p}await f}async flushOutbound(){var i,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const p=this.outPendingLines.length;for(let _=0;_<p;_+=1){const y=this.outPendingLines[_],w=`${_+1}-${y}`;this.outCache.set(_+1,w),await this.send(w),(c=this.outProgress)==null||c.call(this,_+1,p,y)}(a=this.outResolve)==null||a.call(this)}catch(p){(f=this.outReject)==null||f.call(this,p)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:i.slice(c+1)}}}const ea=11,gs=31,jb=2,Db=60,Zi=4,Wi=40;function Ab(s,i){return Math.max(14,Math.min(56,Math.min(s,i)*.05))}function f_(s,i,c=ea,a=gs){const f=Ab(s,i),p=Math.max(1,s-2*f),_=Math.max(1,i-2*f);return{areaW:s,areaH:i,cols:c,rows:a,margin:f,stepX:p/Math.max(1,c-1),stepY:_/Math.max(1,a-1)}}function d_(s,i){return i.margin+s/2*i.stepX}function m_(s,i){const c=i.margin+s/2*i.stepY;return i.areaH-c}function ps(s,i){return s.centerX2===null||s.centerY2===null||s.spanX===null||s.spanY===null?null:{cx:d_(s.centerX2,i),cy:m_(s.centerY2,i),width:s.spanX*i.stepX,height:s.spanY*i.stepY}}function Ob(s){const i=[];for(let c=0;c<s.cols;c+=1)for(let a=0;a<s.rows;a+=1)i.push({x:s.margin+c*s.stepX,y:s.areaH-(s.margin+a*s.stepY)});return i}function $o(s,i,c,a,f){const p=(w,x,g,v)=>{const S=x%2,G=v*2;let Y=S,K=1/0;for(let D=S;D<=G;D+=2){const L=Math.abs(g(D)-w);L<K&&(K=L,Y=D)}return Math.max(x,Math.min(G-x,Y))},_=p(s,c,w=>d_(w,f),f.cols-1),y=p(i,a,w=>m_(w,f),f.rows-1);return{centerX2:_,centerY2:y}}const ai=6e3,Cb=15,Qo=[32,64,128,192],Lb=ai*10,Bb=3500,zb=8e3,Ub=2,Hb=ai,Gb=ai*8;function Mf(s){return new Promise(i=>setTimeout(i,s))}function Xi(s){if(s!=null&&s.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function gh(s){return s instanceof DOMException&&s.name==="AbortError"}function wl(s){return s.replace(/[\r\n,]/g," ").trim()}class Ib{constructor(i={}){de(this,"transport",new Tb);de(this,"stream");de(this,"events");de(this,"waiters",[]);de(this,"collectingLayout",!1);de(this,"layoutBuffer",[]);de(this,"layoutResolve",null);de(this,"collectingLines",!1);de(this,"lineBuffer",[]);de(this,"lineResolve",null);de(this,"lineReject",null);de(this,"lineCollectId",0);de(this,"controlPumpActive",!1);de(this,"pendingButtons",[]);de(this,"pendingSliders",new Map);de(this,"pendingToggles",new Map);de(this,"pendingJoysticks",new Map);de(this,"pendingDpads",[]);de(this,"expectingDisconnect",!1);de(this,"disconnectMessage",null);de(this,"busy",!1);de(this,"fsCapabilities",null);this.events=i,this.stream=new Mb(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return c_((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,i,c)}progress(i,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,i,c)}onDeviceMessage(i){var a,f;if(i==="disconnect"||i==="disconnect_private"){const p=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=p,this.log("warning",p),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const p=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,p),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const p=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,p),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(p=>p.match(i));if(c>=0){const p=this.waiters[c];this.waiters.splice(c,1),clearTimeout(p.timer),p.resolve(i)}}waitFor(i,c,a){return new Promise((f,p)=>{const _=setTimeout(()=>{const y=this.waiters.findIndex(w=>w.timer===_);y>=0&&this.waiters.splice(y,1),p(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:f,reject:p,timer:_})})}async collectLines(i,c,a,f,p){Xi(f);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(p??null);const y=new Promise((w,x)=>{let g=!1;const v=()=>this.lineCollectId===_,S=()=>{g=!0,v()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",Y)},G=L=>{g||(clearTimeout(K),v()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),S(),x(L))},Y=()=>{G(new DOMException("BLE file read cancelled","AbortError"))},K=setTimeout(()=>{v()&&G(new Error(`Timeout: ${a}`))},c);this.lineResolve=w,this.lineReject=G;const D=this.lineResolve;this.lineResolve=L=>{v()&&(clearTimeout(K),S(),D==null||D(L))},f==null||f.addEventListener("abort",Y,{once:!0})});return await this.transport.writeLine(i),y}async exchange(i,c,a,f=3){let p;for(let _=1;_<=f;_+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,ai,a)}catch(y){p=y,this.log("warning",`${a}: forsøg ${_}/${f} mislykkedes`)}throw p instanceof Error?p:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var se,oe,he;await Mf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",J=>J==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",J=>J==="unowned"||J.startsWith("unowned,")||J.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((se=c.split(",")[1])==null?void 0:se.trim())||void 0};const a=c.split(","),f=a[1]??"",p=a[2]!==void 0&&parseInt(a[2],10)||0,_=a[3]!==void 0?parseInt(a[3],10)===1:!0,y=a[4]!==void 0?parseInt(a[4],10)===1:!1,w=a.length>=7,x=w?parseInt(a[5]??"0",10)===1:y,g=((oe=a[w?6:5])==null?void 0:oe.trim())||void 0,v=((he=a[w?7:6])==null?void 0:he.trim())||void 0;await this.exchange("ACK:ownership",J=>J==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const S=await this.exchange(`request_permission,${i.userID},${wl(i.username)}`,J=>J.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const G=S.split(",").filter(J=>/^\d+$/.test(J)),Y=G.length>=1?parseInt(G[0]??"0",10):0,K=G.length>=2?parseInt(G[1]??"0",10):0,D=G.length>=3?parseInt(G[2]??"0",10):K;if(Y===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:g,canOthersConnect:_};const L=i.userID===f,H=K===1||L,ie=D===1||L;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:g,deviceName:v,iconID:p,canEdit:H,canEditCode:ie,isOwnedByMe:L,canOthersConnect:_,canOthersEdit:y,canOthersEditCode:x}}async create(i,c,a,f,p,_,y){const w=a?1:0,x=a&&f?1:0,g=a&&p?1:0;await this.exchange(`create,${i.userID},${wl(i.username)},${c},${w},${x},${g},${_},${y}`,v=>v==="ACK:create","create")}async updateDeviceSettings(i,c,a,f,p,_,y){const w=c?1:0,x=c&&a?1:0,g=c&&f?1:0;await this.exchange(`settings_update,${i},${w},${x},${g},${p},${_},${wl(y??"")}`,v=>v==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,f)=>{this.layoutResolve=a;const p=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},ai*2),_=this.layoutResolve;this.layoutResolve=y=>{clearTimeout(p),_==null||_(y)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(f=>{const p=y=>y===null?"n":String(y),_=`update,${f.type},${f.name},${p(f.centerX2)},${p(f.centerY2)},${p(f.spanX)},${p(f.spanY)},${f.rotation}`;return f.type==="slider"?`${_},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${_},${f.toggleInitial?1:0}`:f.type==="radar"?[_,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[_,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):_});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",ai*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${wl(i)}`,ai*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,p,_]=a.split(","),y=f==="file"||f==="dir"?f:"unknown",w=parseInt(_??"",10),x=p||"/";return{name:x.split("/").filter(Boolean).pop()??x,path:x,type:y,...Number.isFinite(w)&&w>=0?{size:w}:{}}})}handleRadarLine(i){var _,y,w;const c=i.split(",");if(c.length<4)return;const a=(_=c[1])==null?void 0:_.trim(),f=parseFloat(c[2]??""),p=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(p)||((w=(y=this.events).onRadar)==null||w.call(y,a,f,p),this.log("info",`rx: ${i}`))}handleTextLine(i){var y,w;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=i.slice(c+1,a),p=i.slice(a+1),_=f==null?void 0:f.trim();_&&((w=(y=this.events).onText)==null||w.call(y,_,p),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var p,_,y;const c=i.split(",");if(c.length<3)return;const a=(p=c[1])==null?void 0:p.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((y=(_=this.events).onToggleState)==null||y.call(_,a,f===1),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(i,f,c,a)}catch(p){if(a!=null&&a.aborted||gh(p)||!f.pageRead)throw p;this.log("warning",p instanceof Error?`fs_read_stream fejlede; bruger paged read: ${p.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",Hb,"fs_capabilities",i),a=c.find(g=>g.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(g=>g.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const p=f.split(","),_=new Map;for(let g=1;g<p.length-1;g+=2)_.set(p[g],p[g+1]);const y=parseInt(_.get("max_page")??"",10),w=parseInt(_.get("stream_chunk")??"",10),x={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(y)&&y>0?y:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(w)&&w>0?w:128};if(!x.pageRead&&!x.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=x,x}async readTextPaged(i,c,a){const f=await this.getFilesystemCapabilities(a);let p=0,_=Vb(f.maxPageSize),y=0,w=null,x="";const g=`Indlæser ${jf(i)}...`;Xi(a),c==null||c(5,g);for(let v=0;v<512;v+=1){Xi(a),y===0&&(c==null||c(7,g));const G=await this.readPageWithRetry(i,y,p,_,a),Y=G.lines;p=G.nextPageSizeIndex,_=G.maxPageSizeIndex,Xi(a);const K=Y.find(W=>W.startsWith("ERR"));if(K)throw new Error(K);const D=Y.find(W=>W.startsWith("fs_page,"));if(!D)throw new Error("ERR: fs_read_page missing data");const[,L,H,ie,se=""]=D.split(",",5);if(L!==i)throw new Error("ERR: fs_read_page stale data");const oe=parseInt(H??"",10),he=parseInt(ie??"",10);if(!Number.isFinite(oe)||oe!==y||!Number.isFinite(he))throw new Error("ERR: fs_read_page invalid data");w=he,x+=se,y+=Math.floor(se.length/2);const J=w>0?8+Math.min(87,Math.round(y/w*87)):95;if(c==null||c(J,g),y>=w||se.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(yh(x))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,f,p){let _,y=Math.min(a,f);for(;y>=0;){const w=Qo[y],x=y===0?Ub:1,g=y===0?zb:Bb;for(let v=1;v<=x;v+=1){Xi(p);try{return{lines:await this.collectLines(`fs_read_page,${wl(i)},${c},${w}`,g,`fs_read_page ${c}`,p),nextPageSizeIndex:Math.min(y+1,f),maxPageSizeIndex:f}}catch(S){if(p!=null&&p.aborted||gh(S))throw S;if(_=S,v<x||y>0){const Y=y>0&&v>=x?Qo[y-1]:w;this.log("warning",`fs_read_page ${c} (${w} bytes) fejlede; prøver ${Y} bytes`),await Mf(80+v*80)}}}if(y===0)break;f=Math.max(0,y-1),y=f}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,f){const p=`Indlæser ${jf(i)}...`,_=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,p);const y=await this.collectLines(`fs_read_stream,${wl(i)},${_}`,Gb,`fs_read_stream ${i}`,f,(J,W)=>{const Se=8+Math.round(Math.min(J,W)/Math.max(1,W)*87);a==null||a(Math.min(95,Se),p)});Xi(f);const w=y.find(J=>J.startsWith("ERR"));if(w)throw new Error(w);const x=y.find(J=>J.startsWith("fs_stream_begin,")),g=y.find(J=>J.startsWith("fs_stream_end,"));if(!x||!g)throw new Error("ERR: fs_read_stream missing metadata");const[,v,S]=x.split(",",4),[,G,Y,K]=g.split(",",4),D=parseInt(S??"",10),L=parseInt(Y??"",10),H=parseInt(K??"",10);if(v!==i||G!==i||!Number.isFinite(D)||D!==L||!Number.isFinite(H))throw new Error("ERR: fs_read_stream invalid metadata");let ie=0,se="";for(const J of y){if(!J.startsWith("fs_stream_chunk,"))continue;const[,W,Se=""]=J.split(",",3),ye=parseInt(W??"",10);if(!Number.isFinite(ye)||ye!==ie||Se.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");se+=Se,ie+=Math.floor(Se.length/2)}if(ie!==D)throw new Error("ERR: fs_read_stream size mismatch");const oe=yh(se);if(bh(oe)!==H)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(oe)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${wl(i)}`,g=>g==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),p=[...f].map(g=>g.toString(16).padStart(2,"0")).join(""),_=[];for(let g=0;g<p.length;g+=160)_.push(`fs_write_chunk,${p.slice(g,g+160)}`);_.push("fs_write_end");const y=bh(f),w=this.waitFor(g=>g==="ACK:fs_write_done"||g.startsWith("ACK:fs_write_done,")||g.startsWith("ERR"),Lb,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(g,v,S)=>{if(!S.startsWith("fs_write_chunk,"))return;const G=Math.min(f.length,g*80),Y=18+Math.round(g/Math.max(1,v-1)*67);a==null||a(Math.min(85,Y),`Sender ${G}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const x=await w;if(x.startsWith("ERR"))throw new Error(x);if(x.startsWith("ACK:fs_write_done,")){const[,g,v]=x.split(",",3),S=parseInt(g??"",10),G=parseInt(v??"",10);if(S!==f.length||G!==y)throw new Error(`ERR: BLE-verificering fejlede for ${jf(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${wl(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}async ping(){await this.exchange("HELLO",i=>i==="ACK:HELLO","heartbeat",1)}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Mf(Cb)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[_,y]=a.value;return this.pendingSliders.delete(_),y}const f=this.pendingToggles.entries().next();if(!f.done){const[_,y]=f.value;return this.pendingToggles.delete(_),y}const p=this.pendingJoysticks.entries().next();if(!p.done){const[_,y]=p.value;return this.pendingJoysticks.delete(_),y}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const p of this.waiters)clearTimeout(p.timer),p.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,i)}}function Vb(s){let i=0;for(let c=0;c<Qo.length;c+=1)Qo[c]<=s&&(i=c);return i}function jf(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")||s}function bh(s){let i=0;for(const c of s)i=i+c>>>0;return i}function yh(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}function vh(s){const i=(c,a)=>Number.isFinite(c)?Math.max(jb,Math.min(Db,c)):a;for(const c of s){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),p=i(parseInt(f[1],10),ea),_=i(parseInt(f[2],10),gs);return{cols:p,rows:_}}}return{cols:ea,rows:gs}}function xh(s){const i=new Map;for(const c of s){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[p,_,y,w,x,g,v,S,G,Y,K,D,L]=f;if(p!=="button"&&p!=="slider"&&p!=="toggle"&&p!=="radar"&&p!=="text"&&p!=="joystick"&&p!=="dpad"||i.has(_))continue;const H=te=>{if(te==="n")return null;const ce=parseInt(te,10);return Number.isNaN(ce)?null:ce},ie=parseInt(v,10)||0,se=S!==void 0?parseInt(S,10):0,oe=G!==void 0?parseInt(G,10):100,he=["none","bottom","middle","top"].includes(Y??"")?Y:"none",J=S!==void 0?parseInt(S,10)===1:!1,W=S!==void 0?parseFloat(S):0,Se=G!==void 0?parseFloat(G):180,ye=Y!==void 0?parseFloat(Y):200,xe=K!==void 0?parseInt(K,10):1200,Z=(te,ce)=>["none","bottom","middle","top"].includes(te??"")?te:ce,Ye=S!==void 0?parseInt(S,10):-100,Ae=G!==void 0?parseInt(G,10):100,Pe=Y!==void 0?parseInt(Y,10):-100,U=K!==void 0?parseInt(K,10):100;i.set(_,{type:p,name:_,centerX2:H(y),centerY2:H(w),spanX:H(x),spanY:H(g),rotation:[0,90,180,270].includes(ie)?ie:0,...p==="slider"?{sliderMin:Number.isFinite(se)?se:0,sliderMax:Number.isFinite(oe)?oe:100,sliderRecenter:he}:{},...p==="toggle"?{toggleInitial:J}:{},...p==="radar"?{radarMinAngle:Number.isFinite(W)?W:0,radarMaxAngle:Number.isFinite(Se)?Se:180,radarMaxDistance:Number.isFinite(ye)&&ye>0?ye:200,radarFadeMs:Number.isFinite(xe)&&xe>0?xe:1200}:{},...p==="joystick"?{joystickXMin:Number.isFinite(Ye)?Ye:-100,joystickXMax:Number.isFinite(Ae)&&Ae!==Ye?Ae:100,joystickYMin:Number.isFinite(Pe)?Pe:-100,joystickYMax:Number.isFinite(U)&&U!==Pe?U:100,joystickXRecenter:Z(D,"middle"),joystickYRecenter:Z(L,"middle")}:{}})}return[...i.values()]}let le=null,as=null,ss=null,Io=!1,wh=0,zr=!1;function Yb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Eh(s){return new Promise(i=>setTimeout(i,s))}function Df(s,i){const c=i.userID.toLowerCase();return s.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?i.username:a.ownerName}})}function Af(s,i){return(s.name?c_(s.name):"")||(i==null?void 0:i.deviceName)||"Pico"}function Pb(s){return Object.fromEntries(s.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function Sh(s,i){const c=Pb(s);for(const a of s)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const ae=pb((s,i)=>{function c(g,v){s(S=>({logs:[{level:g,message:v,time:Yb()},...S.logs].slice(0,200)}))}function a(g){as&&clearTimeout(as),wh+=1,s({toast:{message:g,id:wh}}),as=setTimeout(()=>s({toast:null}),4500)}function f(g=null){w(),s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:g})}function p(g){return{deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIconID:g.iconID,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName}}function _(g){const{screen:v,active:S,picoIdeOrigin:G}=i();if(w(),zr){zr=!1;return}g&&(c("warning",g),a(g)),(v==="control"||v==="connection"||v==="create"||v==="ide"&&G==="control")&&f(S?p(S):null)}function y(){ss||(ss=setInterval(()=>{x()},3e3))}function w(){ss&&(clearInterval(ss),ss=null,Io=!1)}async function x(){if(Io)return;const{screen:g,active:v}=i();if(!(!!(le!=null&&le.connected)&&!!v&&g==="control")){w();return}Io=!0;try{await(le==null?void 0:le.ping())}catch{c("warning","Bluetooth-forbindelsen svarer ikke længere."),await(le==null?void 0:le.disconnect().catch(()=>{})),_("Bluetooth-forbindelsen svarede ikke og blev afbrudt.")}finally{Io=!1}}return le=new Ib({onProgress:(g,v)=>s({progress:{value:g,label:v}}),onLog:(g,v)=>c(g,v),onRadar:(g,v,S)=>{const G=Date.now(),Y={id:`${G}-${Math.random().toString(36).slice(2)}`,angle:v,distance:S,createdAt:G};s(K=>{const D=K.layout.find(ie=>ie.type==="radar"&&ie.name===g),L=(D==null?void 0:D.radarFadeMs)??1200,H=K.radarPings[g]??[];return{radarPings:{...K.radarPings,[g]:[...H.filter(ie=>G-ie.createdAt<=L),Y].slice(-80)}}})},onText:(g,v)=>{s(S=>({textValues:{...S.textValues,[g]:v}}))},onToggleState:(g,v)=>{s(S=>({toggleValues:{...S.toggleValues,[g]:v}}))},onDisconnect:g=>_(g)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const g=_b(),v=g?Df(Ko(),g):Ko();g&&Qi(v),s({user:g,savedDevices:v,splashTarget:g?"dashboard":"intro"})},finishSplash:()=>{const g=i().splashTarget;s({screen:g??"intro"})},createUser:g=>{const v=g.trim();if(!v)return;const S={username:v,userID:hb()};Sf(S),s({user:S,screen:"dashboard"})},findDevice:async()=>{try{const g=await Rb();await i().connectToDevice(g)}catch(g){g instanceof Error&&g.name!=="NotFoundError"&&c("error",g.message)}},connectToDevice:async(g,v)=>{var G,Y,K;const S=i().user;if(!(!S||!le)){zr=!1,s({screen:"connection",connecting:{name:Af(g,v),iconID:(v==null?void 0:v.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await le.connect(g);const D=await le.runHandshake(S),L=g.id,H=(D.kind==="owned"||D.kind==="unowned")&&((G=D.deviceName)==null?void 0:G.trim())||Af(g,v);if(s(J=>J.connecting?{connecting:{...J.connecting,name:H}}:{}),D.kind==="denied"){const W=`Du kan ikke forbinde, fordi ${((Y=D.ownerName)==null?void 0:Y.trim())||((K=v==null?void 0:v.ownerName)==null?void 0:K.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",W),a(W),s({screen:"dashboard",connecting:null}),await le.disconnect();return}if(D.kind==="unowned"){s({active:{deviceID:L,deviceName:H,ownerID:S.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:S.username,gridCols:ea,gridRows:gs},screen:"create"});return}const ie={deviceID:L,deviceName:H,ownerID:D.ownerID,deviceIconID:D.iconID,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?S.username:D.ownerName??(v==null?void 0:v.ownerName)};s({savedDevices:Rf(ie)});const se=await le.requestLayout(),oe=vh(se),he=xh(se);s({layout:he,sliderValues:{},toggleValues:Sh(he,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:L,deviceName:H,ownerID:D.ownerID,iconID:D.iconID,canEdit:D.canEdit,canEditCode:D.canEditCode,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?S.username:D.ownerName??(v==null?void 0:v.ownerName),gridCols:oe.cols,gridRows:oe.rows},screen:"control",connecting:null,connectionLost:null}),y()}catch(D){const L=D instanceof Error?D.message:"Forbindelsen mislykkedes.";c("error",L),a("Forbindelsen mislykkedes."),s({screen:"dashboard",connecting:null}),await le.disconnect().catch(()=>{})}}},finishCreate:async(g,v,S,G,Y,K)=>{const{user:D,active:L}=i();if(!(!D||!L||!le))try{le.setBusy(!0),await le.create(D,g,v,S,G,Y,K),le.setBusy(!1);const H={deviceID:L.deviceID,deviceName:L.deviceName,ownerID:D.userID,deviceIconID:g,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&G,isOwnedByMe:!0,ownerName:D.username};s({savedDevices:Rf(H)});const ie=await le.requestLayout(),se=vh(ie),oe=xh(ie);s({layout:oe,sliderValues:{},toggleValues:Sh(oe,i().toggleValues),radarPings:{},textValues:{},active:{...L,ownerID:D.userID,iconID:g,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&G,ownerName:D.username,gridCols:se.cols,gridRows:se.rows},screen:"control"}),y()}catch(H){le.setBusy(!1);const ie=H instanceof Error?H.message:"Oprettelse mislykkedes.";c("error",ie),a("Oprettelse mislykkedes."),s({screen:"dashboard"}),await le.disconnect().catch(()=>{})}},saveDeviceSettings:async(g,v,S,G,Y,K)=>{const{active:D,user:L}=i();if(!(!D||!le||!D.isOwnedByMe))try{le.setBusy(!0),await le.updateDeviceSettings(g,v,S,G,Y,K,L==null?void 0:L.username);const H={...D,iconID:g,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&G,ownerName:(L==null?void 0:L.username)??D.ownerName,gridCols:Y,gridRows:K},ie={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(L==null?void 0:L.userID),deviceIconID:g,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&G,isOwnedByMe:!0,ownerName:(L==null?void 0:L.username)??D.ownerName};s({active:H,savedDevices:Rf(ie)}),a("Enhedsindstillinger gemt.")}catch(H){c("error",H instanceof Error?H.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{le.setBusy(!1)}},cancelCreate:async()=>{le&&await le.disconnect().catch(()=>{}),s({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{zr=!0,f(null),le&&await le.disconnect().catch(()=>{}),zr=!1},removeSavedDevice:g=>{s({savedDevices:vb(g)})},clearSavedDevices:()=>{gb(),s({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{zr=!0,le!=null&&le.connected&&await le.disconnect().catch(()=>{}),bb(),window.location.reload()},updateUsername:g=>{const v=i().user,S=g.trim();if(!v||!S)return;const G={...v,username:S};Sf(G),s(Y=>{var D;const K=Df(Y.savedDevices,G);return Qi(K),{user:G,active:(D=Y.active)!=null&&D.isOwnedByMe?{...Y.active,ownerName:S}:Y.active,savedDevices:K}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const g=i().user;return g?$b(g):null},applyOwnerPairingCode:g=>{var S;const v=qb(g,(S=i().user)==null?void 0:S.username);return v?(Sf(v),s(G=>{var K,D,L;const Y=Df(G.savedDevices,v);return Qi(Y),{user:v,active:((D=(K=G.active)==null?void 0:K.ownerID)==null?void 0:D.toLowerCase())===v.userID.toLowerCase()||(L=G.active)!=null&&L.isOwnedByMe?{...G.active,isOwnedByMe:!0,ownerID:v.userID,ownerName:v.username}:G.active,savedDevices:Y}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const g=i().screen==="control"&&!!(le!=null&&le.connected),v=i().active;if(g&&v&&!v.isOwnedByMe&&!v.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),s({sideMenuOpen:!1});return}s(S=>({screen:"ide",picoIdeOrigin:g?"control":"dashboard",active:g?S.active:null,layout:g?S.layout:[],sliderValues:g?S.sliderValues:{},toggleValues:g?S.toggleValues:{},radarPings:g?S.radarPings:{},textValues:g?S.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:g,active:v}=i();s({screen:g==="control"&&v&&(le!=null&&le.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(le!=null&&le.connected),bleListFiles:async()=>le!=null&&le.connected?le.listFiles("/"):[],bleReadText:async(g,v,S)=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");return le.readText(g,v,S)},bleWriteText:async(g,v,S)=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");await le.writeText(g,v,S)},bleDeleteFile:async g=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");await le.deleteFile(g)},bleRestart:async()=>{le!=null&&le.connected&&await le.restart()},bleRestartAndReconnect:async(g="control")=>{const{active:v}=i();if(!(le!=null&&le.connected)||!v)return!1;const S={deviceID:v.deviceID,deviceName:v.deviceName,ownerID:v.ownerID,deviceIconID:v.iconID,canOthersConnect:v.canOthersConnect,canOthersEdit:v.canOthersEdit,canOthersEditCode:v.canOthersEditCode,isOwnedByMe:v.isOwnedByMe,ownerName:v.ownerName};zr=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await le.restart()}catch{}s({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:S.deviceName,iconID:S.deviceIconID}});for(let G=0;G<12&&(le!=null&&le.connected);G+=1)await Eh(250);le!=null&&le.connected||(zr=!1);for(let G=1;G<=8;G+=1){await Eh(G===1?1200:850);try{const K=(await u_()).find(D=>D.id===S.deviceID);if(!K){s({progress:{value:Math.min(88,20+G*8),label:"Venter på browser-tilladelse..."}});continue}return s({progress:{value:Math.min(92,24+G*8),label:`Genforbinder (${G}/8)...`}}),await i().connectToDevice(K,S),g==="ide"&&s(D=>({screen:"ide",picoIdeOrigin:"control",active:D.active,layout:D.layout,sliderValues:D.sliderValues,toggleValues:D.toggleValues,radarPings:D.radarPings,textValues:D.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(Y){c("warning",Y instanceof Error?Y.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),zr=!1,s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:S}),!1},reconnectLostDevice:async()=>{var v;const g=i().connectionLost;if(g){s({connectionLost:null});try{if((v=navigator.bluetooth)!=null&&v.getDevices){const G=(await navigator.bluetooth.getDevices()).find(Y=>Y.id===g.deviceID);if(G){await i().connectToDevice(G,g);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>s({connectionLost:null}),sendButton:(g,v)=>le==null?void 0:le.enqueueButton(g,v),sendSlider:(g,v)=>{s(S=>({sliderValues:{...S.sliderValues,[g]:v}})),le==null||le.enqueueSlider(g,v)},sendToggle:(g,v)=>{s(S=>({toggleValues:{...S.toggleValues,[g]:v}})),le==null||le.enqueueToggle(g,v)},sendJoystick:(g,v,S)=>le==null?void 0:le.enqueueJoystick(g,v,S),sendDpad:(g,v,S)=>le==null?void 0:le.enqueueDpad(g,v,S),saveLayout:async g=>{if(le)try{le.setBusy(!0),await le.saveLayout(g),s({layout:g,editMode:!1})}catch(v){c("error",v instanceof Error?v.message:"Kunne ikke gemme layout.")}finally{le.setBusy(!1)}},setEditMode:g=>s({editMode:g,sideMenuOpen:!1,menuPage:null}),setDashboardPage:g=>s({dashboardPage:g}),toggleSideMenu:g=>s(v=>({sideMenuOpen:g??!v.sideMenuOpen})),toggleDebugger:g=>s(v=>({debuggerOpen:g??!v.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:g=>s({menuPage:g,sideMenuOpen:!1}),closeMenuPage:()=>s({menuPage:null}),clearLogs:()=>s({logs:[]}),log:(g,v)=>c(g,v),askConfirm:g=>s({confirmDialog:g}),closeConfirm:()=>s({confirmDialog:null}),showToast:g=>a(g),dismissToast:()=>{as&&clearTimeout(as),s({toast:null})}}}),Gf="PKP-EJER";function $b(s){var a;const i=s.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${Gf}-${c}-${p_(i)}`}function qb(s,i="Ejer"){const c=s.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Gf}-`))return null;const a=c.slice(Gf.length+1).split("-").filter(Boolean),f=a.pop()??"",p=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(p)||f!==p_(p)?null:{userID:p,username:i.trim()||"Ejer"}}function p_(s){let i=2166136261;for(const c of s.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const rc="./",h_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function ta(s){const i=s>=0&&s<h_.length?s:0;return`${rc}device-icons/${i}.png`}const Fb=`${rc}art/logo.png`,Xb=`${rc}art/Teknologiskolen_logo.png`,Kb=`${rc}art/logo_teknologiskolen_white.png`,Qb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function et({name:s,size:i=24,className:c}){return u.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Qb[s]})}const Zb=1850,Wb=450;function Jb(){const s=ae(a=>a.splashTarget),i=ae(a=>a.finishSplash),c=s?"splash-screen-animation splash-ready":"splash-pending";return z.useEffect(()=>{if(!s)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Wb:Zb,p=window.setTimeout(i,f);return()=>window.clearTimeout(p)},[i,s]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:Fb,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function kh(){const s=ae(f=>f.createUser),[i,c]=z.useState(""),a=i.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Xb,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:i,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>s(i),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:_s})]})}function ed({title:s,onMenu:i}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:s}),u.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:u.jsx(et,{name:"menu"})})]})})}function Nn({title:s,onClose:i,children:c,closeVariant:a="plain"}){const f=a==="circle",p=z.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:_=>{p.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&p.current&&i(),p.current=!1},children:u.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:s}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:u.jsx(et,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function Nh(){const s=ae(S=>S.savedDevices),i=ae(S=>S.toggleSideMenu),c=ae(S=>S.findDevice),a=ae(S=>S.removeSavedDevice),f=ae(S=>S.askConfirm),p=ae(S=>S.dashboardPage),_=ae(S=>S.setDashboardPage),y=r0(),[w,x]=z.useState(null),g=tc(),v=s.filter(S=>p==="mine"?S.isOwnedByMe:!S.isOwnedByMe).sort(t0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(ed,{title:"Hovedmenu",onMenu:()=>i()}),u.jsxs("div",{className:"content dash-content",children:[!g&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:p==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:p==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:v.length===0?u.jsx("div",{className:"device-list-empty",children:p==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):v.map(S=>u.jsx(e0,{device:S,disabled:!g,onConnect:()=>y(S),onSettings:()=>x(S)},S.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!g,"aria-label":"Find enhed",children:u.jsx(et,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:_s}),w&&u.jsx(Nn,{title:"Enhedsindstillinger",onClose:()=>x(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:ta(w.deviceIconID),alt:""}),u.jsx("strong",{children:w.deviceName})]}),u.jsx(os,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(os,{label:"Ejer",value:n0(w)}),u.jsx(os,{label:"Offentlig",value:w.canOthersConnect?"Ja":"Nej"}),u.jsx(os,{label:"Andre må redigere layout",value:w.canOthersEdit?"Ja":"Nej"}),u.jsx(os,{label:"Andre må redigere kode",value:w.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!g,onClick:()=>{const S=w;x(null),y(S)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${w.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(w.deviceID),x(null)}}),children:"Glem enhed"})]})})]})}function e0({device:s,disabled:i,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[u.jsx("img",{className:"device-tile-icon",src:ta(s.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:s.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(et,{name:"settings"})})]})}function os({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function n0(s){var i;return s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger"}function t0(s,i){return s.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function r0(){const s=ae(a=>a.connectToDevice),i=ae(a=>a.findDevice),c=ae(a=>a.log);return async a=>{const p=(await u_()).find(_=>_.id===a.deviceID);p?await s(p,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function l0(){const s=ae(c=>c.connecting),i=ae(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:ta((s==null?void 0:s.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(s==null?void 0:s.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function __({selected:s,onSelect:i,onClose:c}){return u.jsx(Nn,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:h_.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===s?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:ta(a.id),alt:""})},a.id))})})}function i0(){const s=ae(se=>se.finishCreate),i=ae(se=>se.cancelCreate),[c,a]=z.useState(0),[f,p]=z.useState(!1),[_,y]=z.useState(!1),[w,x]=z.useState(!1),[g,v]=z.useState(!1),[S,G]=z.useState(ea),[Y,K]=z.useState(gs),[D,L]=z.useState(!1),H=se=>Number.isFinite(se)?Math.max(Zi,Math.min(Wi,Math.round(se))):ea;async function ie(){L(!0),await s(c,_,_&&w,_&&g,H(S),H(Y))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>p(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:ta(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(et,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>y(!1),children:"Privat"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>y(!0),children:"Offentlig"})]}),_&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:w?"":"active",onClick:()=>x(!1),children:"Nej"}),u.jsx("button",{type:"button",className:w?"active":"",onClick:()=>x(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>v(!1),children:"Nej"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>v(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:Zi,max:Wi,value:Number.isNaN(S)?"":S,onChange:se=>G(parseInt(se.target.value,10)),onBlur:()=>G(H(S))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:Zi,max:Wi,value:Number.isNaN(Y)?"":Y,onChange:se=>K(parseInt(se.target.value,10)),onBlur:()=>K(H(Y))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:D,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ie,disabled:D,children:D?"Opretter...":"Opret"})]})]}),f&&u.jsx(__,{selected:c,onSelect:a,onClose:()=>p(!1)}),u.jsx("span",{className:"version",children:_s})]})}const na=8;function qo(s){return Math.max(5,Math.min(22,s))}function a0(s,i,c){const a=Math.max(1,s.length),f=(i-na*2)/(a*.58),p=(c-na*2)*.48;return qo(Math.min(f,p))}function si(s,i,c){switch(c){case 90:return{x:-i,y:s};case 180:return{x:-s,y:-i};case 270:return{x:i,y:-s};default:return{x:s,y:i}}}function Zo(s){return(360-s)%360}function s0(s,i,c,a){const f=a===90||a===270;return a0(s,f?c:i,f?i:c)}function Wo({name:s,width:i,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:s0(s,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:s})}function o0(s,i,c,a,f){const p=s.trim().split(/\s+/).filter(Boolean),_=Math.max(1,s.replace(/\s+/g,"").length+Math.max(0,p.length-1)*1.6),y=f?qo(Math.min(i/4.6,c/4.6,12)):0,w=f?y+na:na;if(a){const v=Math.max(1,c-w*2);return{fontSize:qo(Math.min(i*.48,v/(_*1.04))),endFontSize:y,centerInset:f?{top:w,bottom:w}:{}}}const x=Math.max(1,i-w*4.2);return{fontSize:qo(Math.min(c*.42,x/(_*.58))),endFontSize:y,centerInset:f?{left:w*2.1,right:w*2.1}:{}}}function c0({control:s,rect:i,disabled:c,latestValue:a,toggleValue:f,radarPings:p=[],textValue:_,onButton:y,onSlider:w,onToggle:x,onJoystick:g,onDpad:v}){const S=z.useRef(!1),G={left:i.cx,top:i.cy,width:i.width,height:i.height};if(s.type==="button"){const Y=()=>{c||!S.current||(S.current=!1,y(s.name,!1))};return u.jsx("div",{className:"control",style:G,children:u.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:K=>{var D,L;c||(K.preventDefault(),(L=(D=K.currentTarget).setPointerCapture)==null||L.call(D,K.pointerId),S.current=!0,y(s.name,!0))},onPointerUp:K=>{var D,L;K.preventDefault(),(L=(D=K.currentTarget).releasePointerCapture)==null||L.call(D,K.pointerId),Y()},onPointerCancel:Y,onLostPointerCapture:Y,children:u.jsx(Wo,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}if(s.type==="toggle"){const Y=!!f;return u.jsx("div",{className:"control",style:G,children:u.jsx("button",{className:`control-toggle ${Y?"on":""}`,type:"button",disabled:c,"aria-pressed":Y,style:{width:"100%",height:"100%"},onPointerDown:K=>{c||(K.preventDefault(),x(s.name,!Y))},children:u.jsx(Wo,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}return s.type==="radar"?u.jsx("div",{className:"control",style:G,children:u.jsx(b_,{control:s,pings:p,width:i.width,height:i.height})}):s.type==="text"?u.jsx("div",{className:"control",style:G,children:u.jsx(g_,{message:_??s.name,width:i.width,height:i.height,rotation:s.rotation})}):s.type==="joystick"?u.jsx("div",{className:"control",style:G,children:u.jsx(k0,{control:s,disabled:c,onJoystick:g,width:i.width,height:i.height})}):s.type==="dpad"?u.jsx("div",{className:"control",style:G,children:u.jsx(O0,{control:s,disabled:c,onDpad:v})}):u.jsx("div",{className:"control",style:G,children:u.jsx(S0,{control:s,disabled:c,latestValue:a,onSlider:w,width:i.width,height:i.height})})}function u0(s,i,c){const a=s.trim()||" ",p=a.split(/\s+/).filter(Boolean).reduce((v,S)=>Math.max(v,S.length),1),_=Math.max(1,Math.ceil(a.length/Math.max(1,Math.floor(p*1.9)))),y=Math.max(1,i-na*3),w=Math.max(1,c-na*3),x=y/(p*.58),g=w/(_*1.16);return Math.max(7,Math.min(24,x,g))}function g_({message:s,width:i,height:c,rotation:a=0}){const f=s.trim()||"...",p=a===90||a===270,_=u0(f,p?c:i,p?i:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:_},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function b_({control:s,pings:i,width:c,height:a,preview:f=!1}){const[,p]=z.useState(0),_=Math.max(120,s.radarFadeMs??1200),y=s.radarMinAngle??0,w=s.radarMaxAngle??180,x=Yn(y),g=Yn(w),v=Math.abs(w-y)>=360||x===g&&y!==w,S=Math.max(1,s.radarMaxDistance??200),G=Date.now(),Y=i[i.length-1],K=s.rotation,D=Yn(x+K),L=Yn(g+K),H=v0(x,g),ie=((Y==null?void 0:Y.angle)??H)+K,se=f?[{id:"preview",angle:H,distance:S*.62,createdAt:G}]:i.filter(ue=>G-ue.createdAt<=_),oe=!v,he=Math.max(8,Math.min(12,Math.min(c,a)*.16)),J=Math.max(7,he*.85),W=0,Se=0,ye=1,xe=_0(v,D,L,K,S),Z=v?{x:-1.12,y:-1.12,width:2.24,height:2.24}:g0(D,L,xe.map(ue=>ue.point)),Ye=v?"":f0(W,Se,ye,D,L),Ae=jh(y),Pe=jh(w),U=oe?y0(D,L,Z,c,a,Ae,Pe,he):null,te=xe.map(ue=>{const we=y_(ue.point,Z,c,a);return{key:ue.key,value:ue.value,x:we.x,y:we.y}});z.useEffect(()=>{if(f||i.length===0)return;const ue=window.setInterval(()=>p(we=>we+1),120);return()=>window.clearInterval(ue)},[_,i.length,f]);const ce=St(W,Se,ye,ie);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${Z.x} ${Z.y} ${Z.width} ${Z.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[v?u.jsx("circle",{className:"radar-sector-fill",cx:W,cy:Se,r:ye}):u.jsx("path",{className:"radar-sector-fill",d:Ye}),[.25,.5,.75,1].map(ue=>v?u.jsx("circle",{className:"radar-ring",cx:W,cy:Se,r:ye*ue},ue):u.jsx("path",{className:"radar-ring",d:d0(W,Se,ye*ue,D,L)},ue)),!v&&u.jsx(Rh,{cx:W,cy:Se,radius:ye,angle:D}),!v&&u.jsx(Rh,{cx:W,cy:Se,radius:ye,angle:L}),u.jsx("line",{className:"radar-sweep",x1:W,y1:Se,x2:ce.x,y2:ce.y}),se.map(ue=>{const we=f?0:G-ue.createdAt,N=Math.max(0,1-we/_),I=Math.max(0,Math.min(S,ue.distance)),re=St(W,Se,ye*(I/S),ue.angle+K);return u.jsx("circle",{className:"radar-ping",cx:re.x,cy:re.y,r:Math.max(.025,Math.min(Z.width,Z.height)*.025),opacity:N},ue.id)})]}),oe&&U&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:U.min.x,top:U.min.y,fontSize:he},children:Ae}),u.jsx("span",{className:"radar-angle-label",style:{left:U.max.x,top:U.max.y,fontSize:he},children:Pe})]}),te.map(ue=>u.jsx("span",{className:"radar-range-label",style:{left:ue.x,top:ue.y,fontSize:J},children:ue.value},ue.key))]})}function Rh({cx:s,cy:i,radius:c,angle:a}){const f=St(s,i,c,a);return u.jsx("line",{className:"radar-boundary",x1:s,y1:i,x2:f.x,y2:f.y})}function St(s,i,c,a){const f=(Yn(a)-90)*Math.PI/180;return{x:s+Math.cos(f)*c,y:i+Math.sin(f)*c}}function f0(s,i,c,a,f){const p=St(s,i,c,a),_=St(s,i,c,f),y=lc(a,f)>180?1:0;return`M ${s} ${i} L ${p.x} ${p.y} A ${c} ${c} 0 ${y} 1 ${_.x} ${_.y} Z`}function d0(s,i,c,a,f){const p=St(s,i,c,a),_=St(s,i,c,f),y=lc(a,f)>180?1:0;return`M ${p.x} ${p.y} A ${c} ${c} 0 ${y} 1 ${_.x} ${_.y}`}function lc(s,i){const c=Yn(s),a=Yn(i),f=a>=c?a-c:360-c+a;return f===0?360:f}const Vo=[.25,.5,.75,1],m0=.1,p0=.85,h0=55;function _0(s,i,c,a,f){const p=(w,x,g)=>({key:`${w}-${x}`,value:Math.round(f*x),point:St(0,0,x,g)});if(s){const w=Yn(180+a);return Vo.map(x=>p("full",x,w))}const _=360-lc(i,c);if(_<h0){const w=Yn(c+_/2);return Vo.map(x=>p("mid",x,w))}const y=(w,x,g)=>{const v=Math.asin(Math.min(p0,m0/x))*180/Math.PI;return Yn(w+g*v)};return[...Vo.map(w=>p("min",w,y(i,w,-1))),...Vo.map(w=>p("max",w,y(c,w,1)))]}function g0(s,i,c=[]){const a=[{x:0,y:0},St(0,0,1,s),St(0,0,1,i),...c];for(const v of[0,90,180,270])b0(v,s,i)&&a.push(St(0,0,1,v));const f=Math.min(...a.map(v=>v.x)),p=Math.max(...a.map(v=>v.x)),_=Math.min(...a.map(v=>v.y)),y=Math.max(...a.map(v=>v.y)),w=Math.max(.1,p-f),x=Math.max(.1,y-_),g=Math.max(w,x)*.24;return{x:f-g,y:_-g,width:w+g*2,height:x+g*2}}function b0(s,i,c){const a=Yn(i),f=Yn(s),p=lc(i,c),_=Yn(f-a);return _>=0&&_<=p}function y0(s,i,c,a,f,p,_,y){const x=St(0,0,1.1,s),g=St(0,0,1.1,i);return{min:Th(x,c,a,f,p,y),max:Th(g,c,a,f,_,y)}}function y_(s,i,c,a){return{x:(s.x-i.x)/i.width*c,y:(s.y-i.y)/i.height*a}}function Th(s,i,c,a,f,p){const _=y_(s,i,c,a),y=Math.max(10,f.length*p*.62),w=p,x=7;return{x:Mh(_.x,y/2+x,Math.max(y/2+x,c-y/2-x)),y:Mh(_.y,w/2+x,Math.max(w/2+x,a-w/2-x))}}function Mh(s,i,c){return Math.max(i,Math.min(c,s))}function jh(s){return`${Math.round(s)}`}function Yn(s){return Number.isFinite(s)?(s%360+360)%360:0}function v0(s,i){const c=Yn(s),a=Yn(i),f=a>=c?a-c:360-c+a;return Yn(c+f/2)}function x0(s,i){if(!i)return s;const c=s.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((p,_)=>u.jsx("span",{children:p},`${p}-${_}`))},`${a}-${f}`))})}function w0(s){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return s===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:s===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:s===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function E0({name:s,vertical:i,rotation:c,color:a,fontSize:f,endFontSize:p,centerInset:_,lowLabel:y,highLabel:w,showEnds:x}){const g=x?w0(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:x0(s,i)}),g&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...g.low,fontWeight:800,fontSize:p},children:y}),u.jsx("div",{style:{...g.high,fontWeight:800,fontSize:p},children:w})]})]})}function v_({name:s,rotation:i,width:c,height:a,value:f,showEnds:p=!1,fillColor:_="var(--red)",lowLabel:y="0",highLabel:w="100"}){const x=i===90||i===270,{fontSize:g,endFontSize:v,centerInset:S}=o0(s,c,a,x,p);let G,Y;i===0?(G={left:0,top:0,bottom:0,width:`${f}%`},Y={left:0,top:0}):i===180?(G={right:0,top:0,bottom:0,width:`${f}%`},Y={right:0,top:0}):i===90?(G={left:0,right:0,bottom:0,height:`${f}%`},Y={left:0,bottom:0}):(G={left:0,right:0,top:0,height:`${f}%`},Y={left:0,top:0});const K=D=>u.jsx(E0,{name:s,vertical:x,rotation:i,color:D,fontSize:g,endFontSize:v,centerInset:S,lowLabel:y,highLabel:w,showEnds:p});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:K("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...G},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...Y},children:K("var(--white)")})})]})}function S0({control:s,disabled:i,latestValue:c,onSlider:a,width:f,height:p}){const _=z.useRef(null),y=s.sliderMin??0,w=s.sliderMax??100,[x,g]=z.useState(()=>c===void 0?Dh(s.sliderRecenter??"none"):Ah(c,y,w)),v=z.useRef(null),S=s.rotation;z.useEffect(()=>{c!==void 0&&(g(Ah(c,y,w)),v.current=c)},[c,y,w]);function G(L){const H=_.current;if(!H)return 0;const ie=H.getBoundingClientRect();let se;return S===0?se=(L.clientX-ie.left)/ie.width:S===180?se=1-(L.clientX-ie.left)/ie.width:S===90?se=1-(L.clientY-ie.top)/ie.height:se=(L.clientY-ie.top)/ie.height,Math.max(0,Math.min(1,se))}function Y(L){i||K(G(L))}function K(L){const H=Math.round(L*100),ie=Math.round(y+(w-y)*L);g(H),ie!==v.current&&(v.current=ie,a(s.name,ie))}function D(){const L=s.sliderRecenter??"none";i||L==="none"||K(Dh(L)/100)}return u.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:L=>{i||(L.preventDefault(),L.currentTarget.setPointerCapture(L.pointerId),Y(L))},onPointerMove:L=>{L.buttons!==0&&Y(L)},onPointerUp:D,onPointerCancel:D,onLostPointerCapture:D,children:u.jsx(v_,{name:s.name,rotation:S,width:f,height:p,value:x,showEnds:!0,lowLabel:String(y),highLabel:String(w)})})}function Dh(s){return s==="bottom"?0:s==="top"?100:s==="middle"?50:0}function Ah(s,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((s-i)/(c-i)*100)))}function Oh(s,i,c){return Math.round(i+(c-i)*(s+1)/2)}function Ch(s,i){return s==="bottom"?i?1:-1:s==="top"?i?-1:1:0}function Lh(s){return{nx:Ch(s.joystickXRecenter,!1),ny:Ch(s.joystickYRecenter,!0)}}function x_(s,i){const c=Math.min(s,i),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function w_({control:s,width:i,height:c,pos:a,dragging:f=!1}){const p=s.rotation,{knobRadius:_,reach:y}=x_(i,c),w=Math.max(7,Math.min(14,_*.62)),x=Math.max(7,Math.min(12,Math.min(i,c)*.1)),g=[{key:"xmax",value:s.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:s.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:s.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:s.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:y*2,height:y*2,transform:"translate(-50%, -50%)"}}),g.map(v=>{const S=si(v.lx,v.ly,p);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:x,transform:`translate(-50%, -50%) translate(${S.x*y}px, ${S.y*y}px) rotate(${p}deg)`},children:v.value},v.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:_*2,height:_*2,fontSize:w,transform:`translate(calc(-50% + ${a.nx*y}px), calc(-50% + ${a.ny*y}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:s.rotation?`rotate(${s.rotation}deg)`:void 0,whiteSpace:s.rotation===90||s.rotation===270?"nowrap":void 0},children:s.name})})]})}function k0({control:s,disabled:i,onJoystick:c,width:a,height:f}){const p=s.rotation,_=z.useRef(null),[y,w]=z.useState(()=>{const H=Lh(s),ie=si(H.nx,H.ny,p);return{nx:ie.x,ny:ie.y}}),x=z.useRef(!1),g=z.useRef(null),v=s.joystickXMin??-100,S=s.joystickXMax??100,G=s.joystickYMin??-100,Y=s.joystickYMax??100;function K(H,ie){const se=si(H,ie,Zo(p)),oe=Oh(se.x,v,S),he=Oh(-se.y,G,Y);(!g.current||g.current.x!==oe||g.current.y!==he)&&(g.current={x:oe,y:he},c(s.name,oe,he))}function D(H){const ie=_.current;if(!ie)return;const se=ie.getBoundingClientRect(),{reach:oe}=x_(se.width,se.height);let he=(H.clientX-(se.left+se.width/2))/oe,J=(H.clientY-(se.top+se.height/2))/oe;const W=Math.hypot(he,J);W>1&&(he/=W,J/=W),w({nx:he,ny:J}),K(he,J)}function L(){const H=s.joystickXRecenter??"middle",ie=s.joystickYRecenter??"middle";if(H==="none"&&ie==="none")return;const se=si(y.nx,y.ny,Zo(p)),oe=Lh(s),he={x:H==="none"?se.x:oe.nx,y:ie==="none"?se.y:oe.ny},J=si(he.x,he.y,p),W={nx:J.x,ny:J.y};x.current=!1,w(W),K(W.nx,W.ny)}return u.jsx("div",{ref:_,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),x.current=!0,D(H))},onPointerMove:H=>{i||!x.current||H.buttons===0||D(H)},onPointerUp:L,onPointerCancel:L,onLostPointerCapture:L,children:u.jsx(w_,{control:s,width:a,height:f,pos:y,dragging:x.current})})}const N0=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],R0="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",T0=.1,M0={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},j0={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},D0=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function If(s,i){return Math.hypot(s,i)<T0?null:Math.abs(s)>=Math.abs(i)?s>0?"right":"left":i>0?"down":"up"}function A0(s,i){const[c,a]=j0[s],f=si(c,a,Zo(i));return If(f.x,f.y)??s}function E_({control:s,active:i=null}){const c=s.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[N0.map(a=>u.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:R0},a.direction)),D0.map(a=>u.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:M0[A0(a.pos,c)]},a.pos))]})})}function O0({control:s,disabled:i,onDpad:c}){const a=z.useRef(null),f=z.useRef(null),p=z.useRef(!1),[_,y]=z.useState(null);function w(S){const G=a.current;if(!G)return{screen:null,logical:null};const Y=G.getBoundingClientRect(),K=Math.min(Y.width,Y.height)/2,D=(S.clientX-(Y.left+Y.width/2))/K,L=(S.clientY-(Y.top+Y.height/2))/K,H=If(D,L),ie=si(D,L,Zo(s.rotation)),se=If(ie.x,ie.y);return{screen:H,logical:se}}function x(S){const G=a.current;if(!G)return!1;const Y=G.getBoundingClientRect(),K=(S.clientX-Y.left)/Y.width,D=(S.clientY-Y.top)/Y.height;return K>=0&&K<=1&&D>=0&&D<=1}function g(S){S.logical!==f.current&&(f.current&&c(s.name,f.current,!1),f.current=S.logical,S.logical&&c(s.name,S.logical,!0)),y(S.screen)}function v(){p.current=!1,g({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:S=>{i||!x(S)||(S.preventDefault(),S.currentTarget.setPointerCapture(S.pointerId),p.current=!0,g(w(S)))},onPointerMove:S=>{i||!p.current||S.buttons===0||g(w(S))},onPointerUp:v,onPointerCancel:v,onLostPointerCapture:v,children:u.jsx(E_,{control:s,active:_})})}const C0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},L0=["button","slider","toggle","radar","text","joystick","dpad"];function B0({unplaced:s,onAdd:i,onClose:c}){const a=z.useMemo(()=>L0.filter(y=>s.some(w=>w.type===y)),[s]),[f,p]=z.useState(a[0]??"button"),_=s.filter(y=>y.type===f);return z.useEffect(()=>{a.length>0&&!a.includes(f)&&p(a[0])},[a,f]),u.jsxs(Nn,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(y=>u.jsx("button",{type:"button",className:f===y?"active":"",onClick:()=>p(y),children:C0[y]},y))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(y=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(y.name),children:[u.jsx("span",{children:y.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(et,{name:"plus",size:22})})]},y.name))})]})}function S_(s){const[i,c]=z.useState({w:0,h:0}),a=z.useRef(null),f=z.useRef(null);return z.useLayoutEffect(()=>{var w;const p=s.current;if(a.current===p)return;if((w=f.current)==null||w.disconnect(),f.current=null,a.current=p,!p){c(x=>x.w===0&&x.h===0?x:{w:0,h:0});return}const _=()=>{const x={w:p.clientWidth,h:p.clientHeight};c(g=>g.w===x.w&&g.h===x.h?g:x)};_();const y=new ResizeObserver(_);y.observe(p),f.current=y}),z.useEffect(()=>()=>{var p;(p=f.current)==null||p.disconnect(),f.current=null,a.current=null},[]),i}function Ji(s){return s.centerX2!==null&&s.centerY2!==null&&s.spanX!==null&&s.spanY!==null}const z0=4,U0=5;function H0(s){return s==="joystick"||s==="dpad"?{spanX:6,spanY:6}:{spanX:z0,spanY:U0}}function Bh(s){if(!Ji(s))return null;const i=s.centerX2/2,c=s.centerY2/2;return{x0:i-s.spanX/2,x1:i+s.spanX/2,y0:c-s.spanY/2,y1:c+s.spanY/2}}function G0(s,i,c=.02){return s.x0<i.x1-c&&i.x0<s.x1-c&&s.y0<i.y1-c&&i.y0<s.y1-c}function zh(s,i){const c=ps(s,i);if(!c||s.spanX===null||s.spanY===null)return s;const a=$o(c.cx,c.cy,s.spanX,s.spanY,i);return{...s,centerX2:a.centerX2,centerY2:a.centerY2}}function Uh(s,i){return Math.max(1,Math.min(i.cols-1,s))}function Hh(s,i){return Math.max(1,Math.min(i.rows-1,s))}function I0(){const s=ae(O=>O.layout),i=ae(O=>O.active),c=ae(O=>O.saveLayout),a=ae(O=>O.setEditMode),f=ae(O=>O.askConfirm),p=!!(i!=null&&i.canEdit),[_,y]=z.useState(()=>s.map(O=>({...O}))),[w,x]=z.useState(null),[g,v]=z.useState(!1),[S,G]=z.useState(null),[Y,K]=z.useState(null),[D,L]=z.useState(!1),H=z.useRef(null),ie=S_(H),se=ie.w>0&&ie.h>0,oe=f_(ie.w,ie.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),he=z.useMemo(()=>se?Ob(oe):[],[oe,se]),J=_.filter(Ji),W=_.filter(O=>!Ji(O)),Se=z.useMemo(()=>{const O=new Set;for(let Q=0;Q<J.length;Q+=1)for(let ee=Q+1;ee<J.length;ee+=1){const F=Bh(J[Q]),He=Bh(J[ee]);F&&He&&G0(F,He)&&(O.add(J[Q].name),O.add(J[ee].name))}return O},[J]),ye=Se.size>0,xe=_.find(O=>O.name===w)??null,Z=z.useMemo(()=>Gh(_)!==Gh(s),[_,s]),Ye=z.useMemo(()=>{if(!S||!Y)return null;const O=_.find(F=>F.name===S);if(!O||O.spanX===null||O.spanY===null)return null;const Q=$o(Y.cx,Y.cy,O.spanX,O.spanY,oe),ee=ps({...O,centerX2:Q.centerX2,centerY2:Q.centerY2},oe);return ee?{name:O.name,rect:ee}:null},[_,S,Y,oe]);function Ae(O,Q){y(ee=>ee.map(F=>F.name===O?Q(F):F))}function Pe(O,Q){O.stopPropagation(),x(Q.name);const ee=ps(Q,oe);ee&&(G(Q.name),K({cx:ee.cx,cy:ee.cy}),O.currentTarget.setPointerCapture(O.pointerId))}function U(O){if(!S)return;const Q=H.current;if(!Q)return;const ee=Q.getBoundingClientRect(),F=Q.clientWidth/ee.width,He=Q.clientHeight/ee.height;K({cx:Math.max(0,Math.min(Q.clientWidth,(O.clientX-ee.left)*F)),cy:Math.max(0,Math.min(Q.clientHeight,(O.clientY-ee.top)*He))})}function te(){if(S&&Y){const O=_.find(Q=>Q.name===S);if(O&&O.spanX!==null&&O.spanY!==null){const Q=$o(Y.cx,Y.cy,O.spanX,O.spanY,oe);Ae(S,ee=>({...ee,centerX2:Q.centerX2,centerY2:Q.centerY2}))}}G(null),K(null)}function ce(O){Ae(O,Q=>Q.spanX===null||Q.spanY===null?{...Q,rotation:(Q.rotation+270)%360}:zh({...Q,rotation:(Q.rotation+270)%360,spanX:Uh(Q.spanY,oe),spanY:Hh(Q.spanX,oe)},oe))}function ue(O,Q,ee){Ae(O,F=>{if(F.spanX===null||F.spanY===null)return F;const He=Q==="x"?Uh(F.spanX+ee,oe):F.spanX,Oe=Q==="y"?Hh(F.spanY+ee,oe):F.spanY;return zh({...F,spanX:He,spanY:Oe},oe)})}function we(O){Ae(O,Q=>({...Q,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),x(null)}function N(O){v(!1);const Q=_.find(Oe=>Oe.name===O);if(!Q)return;const{spanX:ee,spanY:F}=H0(Q.type),He=$o(oe.areaW/2,oe.areaH/2,ee,F,oe);Ae(O,()=>({...Q,spanX:ee,spanY:F,rotation:0,centerX2:He.centerX2,centerY2:He.centerY2})),x(O)}async function I(){ye||(L(!0),await c(_),L(!1))}function re(){if(!Z){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"edit-band edit-toolbar-band",children:xe&&Ji(xe)?u.jsxs("div",{className:"edit-toolbar",onPointerDown:O=>O.stopPropagation(),children:[u.jsx(cs,{label:"⟲",title:"Roter",onClick:()=>ce(xe.name)}),u.jsx(cs,{label:"W−",title:"Gør smallere",onClick:()=>ue(xe.name,"x",-1),disabled:xe.spanX===null||xe.spanX<=1}),u.jsx(cs,{label:"W+",title:"Gør bredere",onClick:()=>ue(xe.name,"x",1),disabled:xe.spanX===null||xe.spanX>=oe.cols-1}),u.jsx(cs,{label:"H−",title:"Gør lavere",onClick:()=>ue(xe.name,"y",-1),disabled:xe.spanY===null||xe.spanY<=1}),u.jsx(cs,{label:"H+",title:"Gør højere",onClick:()=>ue(xe.name,"y",1),disabled:xe.spanY===null||xe.spanY>=oe.rows-1}),u.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>we(xe.name),"aria-label":"Slet",children:u.jsx(et,{name:"delete",size:24})})]}):u.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:H,style:{touchAction:"none"},onPointerMove:U,onPointerUp:te,onPointerDown:()=>x(null),children:se&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:oe.areaW,height:oe.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:he.map((O,Q)=>u.jsx("circle",{cx:O.x,cy:O.y,r:2.5,fill:"rgba(198,80,78,0.45)"},Q))}),Ye&&u.jsx("div",{className:"snap-preview",style:{left:Ye.rect.cx,top:Ye.rect.cy,width:Ye.rect.width,height:Ye.rect.height}}),J.map(O=>{const Q=S===O.name&&Y,ee=ps(O,oe);if(!ee)return null;const F=Q?Y.cx:ee.cx,He=Q?Y.cy:ee.cy,Oe={left:F,top:He,width:ee.width,height:ee.height,outline:w===O.name?"3px solid var(--text)":"none",outlineOffset:2};return u.jsx("div",{className:`control ${Se.has(O.name)?"colliding":""}`,style:Oe,onPointerDown:Pn=>Pe(Pn,O),children:O.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(Wo,{name:O.name,width:ee.width,height:ee.height,rotation:O.rotation})}):O.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(Wo,{name:O.name,width:ee.width,height:ee.height,rotation:O.rotation})}):O.type==="radar"?u.jsx(b_,{control:O,pings:[],width:ee.width,height:ee.height,preview:!0}):O.type==="text"?u.jsx(g_,{message:O.name,width:ee.width,height:ee.height,rotation:O.rotation}):O.type==="joystick"?u.jsx(w_,{control:O,width:ee.width,height:ee.height,pos:{nx:0,ny:0}}):O.type==="dpad"?u.jsx(E_,{control:O}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(v_,{name:O.name,rotation:O.rotation,width:ee.width,height:ee.height,value:50,showEnds:!0,lowLabel:String(O.sliderMin??0),highLabel:String(O.sliderMax??100),fillColor:Se.has(O.name)?"var(--disabled)":"var(--red)"})})},O.name)}),p&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:O=>O.stopPropagation(),onClick:()=>v(!0),"aria-label":"Tilføj kontrol",children:u.jsx(et,{name:"plus",size:24})}),D&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:re,disabled:D,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:I,disabled:ye||D,children:D?"Gemmer...":"Gem"})]}),g&&u.jsx(B0,{unplaced:W,onAdd:N,onClose:()=>v(!1)})]})}function Gh(s){return JSON.stringify(s.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function cs({label:s,title:i,disabled:c,onClick:a}){return u.jsx("button",{type:"button","aria-label":i,title:i,disabled:c,onClick:a,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:s})}function V0(){const s=ae(H=>H.layout),i=ae(H=>H.editMode),c=ae(H=>H.active),a=ae(H=>H.sliderValues),f=ae(H=>H.toggleValues),p=ae(H=>H.radarPings),_=ae(H=>H.textValues),y=ae(H=>H.toggleSideMenu),w=ae(H=>H.sendButton),x=ae(H=>H.sendSlider),g=ae(H=>H.sendToggle),v=ae(H=>H.sendJoystick),S=ae(H=>H.sendDpad),G=z.useRef(null),Y=S_(G),K=f_(Y.w,Y.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),D=Y.w>0&&Y.h>0,L=s.filter(Ji);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(ed,{title:"Kontrol Panel",onMenu:()=>y()}),i?u.jsx(I0,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:G,children:D?L.map(H=>{const ie=ps(H,K);return ie?u.jsx(c0,{control:H,rect:ie,disabled:!1,latestValue:H.type==="slider"?a[H.name]:void 0,toggleValue:H.type==="toggle"?f[H.name]:void 0,radarPings:H.type==="radar"?p[H.name]:void 0,textValue:H.type==="text"?_[H.name]:void 0,onButton:w,onSlider:x,onToggle:g,onJoystick:v,onDpad:S},H.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const Y0="",Ih="",Vh="",li="";function us(s){return new Promise(i=>setTimeout(i,s))}class P0{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Vh),await us(80),await this.transport.write(Vh)}async friendlyRepl(){await this.transport.write(Ih)}async softReset(){await this.transport.write(li)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.disconnect()
except Exception:
    pass
`).catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await us(180)}),await us(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await us(80),await this.transport.write(`\r
`),await us(40),!(await this.collectUntil(async()=>{await this.transport.write(Y0)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(li)},f=>f.includes(`${li}${li}`)||f.includes(`${li}>`),c);return await this.friendlyRepl().catch(()=>{}),$0(a)}collectUntil(i,c,a){return new Promise((f,p)=>{let _="",y=null;const w=setTimeout(()=>{y==null||y(),p(new Error("Timeout ved USB REPL kommando."))},a);y=this.transport.addDataListener(x=>{_+=x,c(_)&&(clearTimeout(w),y==null||y(),f(_))}),i().catch(x=>{clearTimeout(w),y==null||y(),p(x instanceof Error?x:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Ih)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function $0(s){const i=s.indexOf("OK"),c=s.indexOf(li,i>=0?i:0),a=c>=0?s.indexOf(li,c+1):-1;if(i<0||c<0)return{output:s.trim(),error:"",raw:s};const f=s.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),p=a>=0?s.slice(c+1,a).trim():"";return{output:f,error:p,raw:s}}const q0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],F0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],El=F0.flatMap(({board:s,firmwareName:i})=>q0.map(({version:c,date:a,stamp:f,tag:p})=>{const _=`${i}-${f}-${p}.uf2`;return{board:s,version:c,date:a,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),Of=512,Cf=`import builtins as _pkp_builtins
`;function Ur(s){return JSON.stringify(s)}function X0(s){return`bytes.fromhex(${JSON.stringify([...s].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function K0(s,i){return`${s==="/"?"":s.replace(/\/$/,"")}/${i}`}class Q0{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${Ur(i)}
for name in os.listdir(base):
    p = (${Ur(i)}.rstrip('/') + '/' + name) if ${Ur(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[p,_,y]=f.split("	"),w=_==="dir"||_==="file"?_:"unknown",x=parseInt(y??"",10);return{name:p,path:K0(i,p),type:w,...Number.isFinite(x)&&x>=0?{size:x}:{}}})}async readText(i){const c=`
import sys
${Cf}with _pkp_builtins.open(${Ur(i)}, 'rb') as f:
    while True:
        b = f.read(${Of})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const f=a.output.replace(/\s+/g,"");return new TextDecoder().decode(Z0(f))}async writeText(i,c,a){const f=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${Cf}_pkp_builtins.open(${Ur(i)}, 'wb').close()`),f.length===0){a==null||a(100,"Gemt på Pico");return}for(let p=0;p<f.length;p+=Of){const _=f.slice(p,p+Of),y=`
${Cf}with _pkp_builtins.open(${Ur(i)}, 'ab') as f:
    f.write(${X0(_)})
`,w=await this.repl.exec(y,1e4);if(w.error)throw new Error(w.error);const x=Math.min(p+_.length,f.length);a==null||a(10+Math.round(x/f.length*85),`Gemmer ${x}/${f.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(i,c,a,f={}){const p=`${i}.tmp`;if(await this.writeText(p,c,(w,x)=>a==null?void 0:a(Math.min(70,w*.7),x)),a==null||a(78,"Verificerer fil..."),await this.readText(p)!==c)throw await this.delete(p).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);a==null||a(88,"Udskifter fil...");let y=!!f.createBackup;if(y){const w=await this.readText(i).catch(()=>null);y=w!==null&&w!==c}if(y){const w=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,w).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(p,i),a==null||a(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${Ur(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),a=new Set(c.map(v=>v.path.toLowerCase())),f=i.replace(/\\/g,"/"),p=f.lastIndexOf("/"),_=p>=0?f.slice(0,p+1):"/",y=p>=0?f.slice(p+1):f.replace(/^\/+/,""),w=y.lastIndexOf("."),x=w>0?y.slice(0,w):y,g=w>0?y.slice(w):"";for(let v=1;v<1e3;v+=1){const S=`${_}${x}_backup${v}${g}`;if(!a.has(S.toLowerCase()))return S}return`${_}${x}_backup${Date.now()}${g}`}async rename(i,c){const a=await this.repl.exec(`
import os
os.rename(${Ur(i)}, ${Ur(c)})
`);if(a.error)throw new Error(a.error)}}function Z0(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}const W0=`import ubluetooth\r
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
`,J0=`from machine import Pin, time_pulse_us\r
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
        return cms`,ey=`import array, time\r
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
`,ny=`from machine import Pin
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
`,ty=`from machine import Pin
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
`,ry=`from machine import Pin
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
`,ly=`# PicoFly.py\r
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
`,iy=`import machine\r
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
        self.initPCA()`,ay=`from machine import Pin\r
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
`,sy=`from machine import Pin\r
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
`,oy=`from machine import Pin, PWM, ADC\r
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
`,cy=`from machine import Pin\r
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
`,Ki=[{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",content:ry},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:sy},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:cy},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",content:ty},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",content:ny},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:ay},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:oy},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:W0},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:iy},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:ly},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:J0},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:ey}],uy=11914;function fy(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function dy(){return fy()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class my{constructor(i={}){de(this,"port",null);de(this,"reader",null);de(this,"writer",null);de(this,"readLoopDone",null);de(this,"readLoopActive",!1);de(this,"disconnecting",!1);de(this,"buffer","");de(this,"events");de(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:uy}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var w,x;const i=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,f=this.writer,p=this.readLoopDone,_=a==null?void 0:a.closed.catch(()=>{}),y=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}p&&await p.catch(()=>{}),await _;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(f==null?void 0:f.close()),await y}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===p&&(this.readLoopDone=null),this.disconnecting=!1,i&&((x=(w=this.events).onDisconnect)==null||x.call(w))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var a,f,p;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((a=i.writable)==null?void 0:a.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(p=(f=this.events).onLog)==null||p.call(f,"success",`USB-forbindelse oprettet (${py(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var f,p,_;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((f=i.readable)==null?void 0:f.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:y,done:w}=await a.read();if(w)break;y&&this.consumeText(c.decode(y,{stream:!0}))}}catch(y){this.readLoopActive&&((_=(p=this.events).onLog)==null||_.call(p,"error",y instanceof Error?y.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var p,_;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,f=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await f}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((_=(p=this.events).onDisconnect)==null||_.call(p))}consumeText(i){var c,a,f,p;(a=(c=this.events).onData)==null||a.call(c,i);for(const _ of this.dataListeners)_(i);for(this.buffer+=i;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),y=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(p=(f=this.events).onLine)==null||p.call(f,y)}}}function py(s){const i=s.usbVendorId!==void 0?`VID ${s.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=s.usbProductId!==void 0?`PID ${s.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const k_=15e3,Yh=64*1024,Ph=1e5,N_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),hy=64*1024,$h=8;function R_(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function _y(){return R_()?new SharedArrayBuffer(hy):null}function gy(s,i){const c=new Int32Array(s,0,2),a=new Uint8Array(s),f=s.byteLength-$h,p=new TextEncoder().encode(i+`
`);let _=Atomics.load(c,0);for(const y of p)a[$h+_%f]=y,_+=1;Atomics.store(c,0,_),Atomics.notify(c,0)}const by=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class yy{constructor(){de(this,"worker",null);de(this,"pending",null);de(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,f=c.timeoutMs??k_,p=this.ensureWorker();return new Promise(_=>{const y=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:a,timer:y,onOutput:c.onOutput,resolve:_},p.postMessage({type:"run",id:a,code:xy(i),runtimeUrl:N_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class vy{constructor(){de(this,"worker",null);de(this,"pending",null);de(this,"nextId",0);de(this,"stdinSab",null)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs===null?null:c.timeoutMs??k_,f=typeof c=="number"?void 0:c.onOutput,p=typeof c=="number"?void 0:c.signal,_=Vf(i,{allowInput:!0});if(_.some(g=>g.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:_,timedOut:!1,unavailable:!1});const y=++this.nextId,w=this.ensureWorker(),x=_y();return this.stdinSab=x,new Promise(g=>{const v=K=>this.finish(K),S=()=>{this.restartWorker(),v({ok:!1,output:"",error:"",issues:_,timedOut:!1,unavailable:!1})},G=a===null?null:window.setTimeout(()=>{v({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:_,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:y,timer:G,timeoutMs:a,issues:_,onOutput:f,signal:p,abort:S,resolve:g},p!=null&&p.aborted){S();return}p==null||p.addEventListener("abort",S,{once:!0});const Y={type:"run",id:y,code:i,runtimeUrl:N_,interactive:!0,sab:x??void 0};w.postMessage(Y)})}sendInput(i){const c=this.pending;!c||!this.stdinSab||(this.refreshTimeout(c),gy(this.stdinSab,i))}stop(){const i=this.pending;i&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}))}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){this.refreshTimeout(c),(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var a;const c=this.pending;c&&(c.timer!==null&&window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}refreshTimeout(i){i.timeoutMs!==null&&(i.timer!==null&&window.clearTimeout(i.timer),i.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:i.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},i.timeoutMs))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null,this.stdinSab=null}}function xy(s){const i=JSON.stringify(s);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Vf(s,i={}){const c=[],a=new Blob([s]).size;a>Yh&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Yh} bytes.`});const f=s.split(/\r?\n/);for(let p=0;p<f.length;p+=1){const _=p+1,y=Jo(f[p]).trim();if(!y)continue;const w=Ey(y);w&&by.has(w)&&c.push({level:"error",line:_,text:`${w} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&wy(f[p])&&c.push({level:"error",line:_,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const x=y.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);x&&Sy(x)>Ph&&c.push({level:"error",line:_,text:`range(...) er for stor til offline kørsel. Brug højst ${Ph} gentagelser.`})}for(const p of ky(f))c.push({level:"warning",text:`Funktionen ${p} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function Jo(s){let i=null;for(let c=0;c<s.length;c+=1){const a=s[c];if((a==='"'||a==="'")&&s[c-1]!=="\\"&&(i=i===a?null:i??a),a==="#"&&!i)return s.slice(0,c)}return s}function wy(s){const i=Jo(s);let c=null;for(let a=0;a<i.length;a+=1){const f=i[a];if((f==='"'||f==="'")&&i[a-1]!=="\\"){c=c===f?null:c??f;continue}if(!c&&!(!qh(i[a-1])||i.slice(a,a+5)!=="input")&&qh(i[a+5])&&i.slice(a+5).trimStart().startsWith("("))return!0}return!1}function qh(s){return!s||!/[A-Za-z0-9_]/.test(s)}function Ey(s){const i=s.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=s.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Fh(s){const i=s.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function Sy(s){const i=Number(s[1]),c=s[2]===void 0?void 0:Number(s[2]),a=s[3]===void 0?1:Number(s[3]);if(a===0)return Number.POSITIVE_INFINITY;const _=(c===void 0?i:c)-(c===void 0?0:i);return _>0&&a<0||_<0&&a>0?0:Math.ceil(Math.abs(_/a))}function ky(s){const i=new Set;for(let c=0;c<s.length;c+=1){const a=Jo(s[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const f=a[1],p=Fh(s[c]);for(let _=c+1;_<s.length;_+=1){if(!s[_].trim())continue;if(Fh(s[_])<=p)break;if(new RegExp(`\\b${f}\\s*\\(`).test(Jo(s[_]))){i.add(f);break}}}return[...i]}const Ny=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function Ry(s,i){var g;const c=s.trim(),a=i.split(/\r?\n/),f=Ty(c),p=f?a[f-1]??"":"",_=My(a,f),y=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(y))return{simple:"Programmet blev stoppet.",technical:c,line:f};if(/MemoryError/.test(y))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/RecursionError/.test(y))return{simple:`En funktion kalder sig selv for mange gange${f?` omkring linje ${f}`:""}.`,technical:c,line:f};const w=y.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(w)return{simple:`Variablen ${w[1]} bruges inde i en funktion, før den har fået en værdi${f?` på linje ${f}`:""}.`,technical:c,line:f};const x=y.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(x)return{simple:Oy(p,x[1])?`Teksten ${x[1]} mangler måske citationstegn${f?` på linje ${f}`:""}.`:`Python kender ikke navnet ${x[1]}${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ZeroDivisionError/.test(y))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError:\s+unexpected indent/.test(y))return{simple:`Der er for meget indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError/.test(y))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ImportError|ModuleNotFoundError/.test(y)){const v=(g=y.match(/['"](.+?)['"]/))==null?void 0:g[1];return{simple:`Python kan ikke finde modulet${v?` ${v}`:""}.`,technical:c,line:f}}if(/OSError/.test(y))return/ENOENT|No such file|Errno\s+2/.test(y)?{simple:`Python kan ikke finde filen${f?` på linje ${f}`:""}.`,technical:c,line:f}:/EACCES|permission|denied/i.test(y)?{simple:`Python har ikke adgang til filen eller enheden${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Der opstod en fejl med en fil eller en enhed${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/SyntaxError/.test(y)){if(/invalid syntax/.test(y)&&_.text.trim().endsWith(","))return{simple:`Linje ${_.line??f} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:_.line??f};const v=Yf(p,f)??Yf(_.text,_.line)??jy(a,f);return v?{simple:`Mangler måske : efter linje ${v.line}.`,technical:c,line:v.line}:f&&_.text.trim().endsWith(":")&&p.trim()&&!/^\s+/.test(p)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:c,line:f}:Ay(p)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Dy(p)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Cy(p)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:c,line:f}:Ly(p)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}return/TypeError/.test(y)?/takes .* positional arguments? but .* given/.test(y)||/function takes/.test(y)?{simple:`En funktion får for mange eller for få værdier${f?` på linje ${f}`:""}.`,technical:c,line:f}:/unsupported operand type/.test(y)?{simple:`To værdier kan ikke bruges sammen på den måde${f?` på linje ${f}`:""}.`,technical:c,line:f}:/not callable/.test(y)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:c,line:f}:/IndexError/.test(y)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:c,line:f}:/KeyError/.test(y)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:c,line:f}:/AttributeError/.test(y)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:c,line:f}:/ValueError/.test(y)?/invalid literal for int/.test(y)?{simple:`Teksten kan ikke laves om til et heltal${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}function Ty(s){var f;const c=(f=[...s.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function My(s,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const a=s[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Yf(s,i){if(!i)return null;const c=s.trim();return!Ny.test(c)||c.endsWith(":")?null:{line:i}}function jy(s,i){const c=i?Math.min(s.length,i):s.length,a=Math.max(0,c-4);for(let f=c-1;f>=a;f-=1){const p=Yf(s[f]??"",f+1);if(p)return p}return null}function Dy(s){const i=(s.match(/'/g)??[]).length,c=(s.match(/"/g)??[]).length;return i%2===1||c%2===1}function Ay(s){var a,f;const c=(f=(a=s.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:f.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function Oy(s,i){const c=s.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function Cy(s){return T_(s)>0}function Ly(s){return T_(s)<0}function T_(s){let i=0,c=null;for(let a=0;a<s.length;a+=1){const f=s[a];if((f==='"'||f==="'")&&s[a-1]!=="\\"){c=c===f?null:c??f;continue}c||((f==="("||f==="["||f==="{")&&(i+=1),(f===")"||f==="]"||f==="}")&&(i-=1))}return i}const Pf="/min_kode.py",M_=`print('Hej fra Pico Kontrol Panel')
`,By=500,zy=1200,fs="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function ft(s,i){return`${s}:${i}`}function Uy(s){return new Promise(i=>window.setTimeout(i,s))}function Hy(){const s=ae(d=>d.toggleSideMenu),i=ae(d=>d.askConfirm),c=ae(d=>d.picoIdeOrigin),a=ae(d=>d.active),f=ae(d=>d.isBleConnected),p=ae(d=>d.bleListFiles),_=ae(d=>d.bleReadText),y=ae(d=>d.bleWriteText),w=ae(d=>d.bleDeleteFile),x=ae(d=>d.bleRestartAndReconnect),[g,v]=z.useState(!1),[S,G]=z.useState(!1),[Y,K]=z.useState([]),[D,L]=z.useState(!1),[H,ie]=z.useState([]),[se,oe]=z.useState(null),[he,J]=z.useState(()=>Bf(kf())),[W,Se]=z.useState(Pf),[ye,xe]=z.useState("local"),[Z,Ye]=z.useState(()=>{var d;return((d=Bf(kf()).find(h=>h.path===Pf))==null?void 0:d.content)??M_}),[Ae,Pe]=z.useState([]),[U,te]=z.useState(!1),[ce,ue]=z.useState(""),[we,N]=z.useState(""),[I,re]=z.useState(null),[O,Q]=z.useState(!1),[ee,F]=z.useState(null),[He,Oe]=z.useState(!1),[Pn,Wt]=z.useState({}),[ve,xn]=z.useState(!1),[Rn,Be]=z.useState(0),[Tn,Vt]=z.useState(()=>{var d,h;return((d=El.find(E=>E.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((h=El[0])==null?void 0:h.board)??""}),[Un,Hr]=z.useState(()=>{var d,h;return((d=El.find(E=>E.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((h=El[0])==null?void 0:h.version)??""}),[Gr,kt]=z.useState(!1),[oi,Ir]=z.useState({top:0,left:0}),[wn,kl]=z.useState(!1),[Nl,ra]=z.useState(!1),[Rl,$n]=z.useState(!0),[dt,Jt]=z.useState(""),[ci,Tl]=z.useState([]),[En,mt]=z.useState(null),[jn,Vr]=z.useState(!1),[cr,ur]=z.useState({}),[Yt,qn]=z.useState({}),[Qe,an]=z.useState(null),[hn,Dn]=z.useState(null),[ic,ui]=z.useState(""),[er,Ml]=z.useState(()=>_h().clearTerminalOnRun),[fr,bs]=z.useState(()=>_h().simplifiedErrors),[fi,ys]=z.useState(()=>typeof navigator<"u"?Zh(navigator):!1),Yr=z.useRef(null),Nt=z.useRef(null),sn=z.useRef(null),la=z.useRef(null),An=z.useRef(null),fn=z.useRef(null),Sn=z.useRef(null),pt=z.useRef(null),jl=z.useRef(null),Rt=z.useRef(!1),dr=z.useRef(!1),Pr=z.useRef(!1),Fn=z.useRef(""),nr=z.useRef(null),Tt=z.useRef(null),nt=z.useRef(null),mr=z.useRef(null),Xn=z.useRef(null),en=z.useRef(null),tr=z.useRef(0),pr=z.useRef(null),tt=z.useRef(null),hr=z.useRef(null),Dl=z.useRef(null),Al=z.useRef([]),Ol=z.useRef([]),$r=z.useRef(null),Pt=dy(),_e=c==="control"&&!!a&&f(),ht=_e?(a==null?void 0:a.deviceID)??"ble":null,rt=Math.max(1,Z.split(`
`).length),vs=new Blob([Z]).size,ac=ye==="pico"?"Picoen":"browseren",ia=z.useMemo(()=>[...new Set(El.map(d=>d.board))],[]),qr=z.useMemo(()=>El.filter(d=>d.board===Tn),[Tn]),$t=El.find(d=>d.board===Tn&&d.version===Un)??qr[0]??El[0],Mt=ye==="pico",Hn=Mt?wn:Nl,Gn=Mt&&wn&&g&&!_e||!Mt&&Nl&&!!nt.current,xs=jn||Hn&&!Gn,aa=Gn?"stdin":">>>",_r=Gn?Mt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":Mt?"Pico MicroPython":"Browser-MicroPython",di=z.useMemo(()=>{const d=new my({onData:h=>{dr.current||!Rt.current||(Fn.current=(Fn.current+h).slice(-240),/(^|\r?\n)>>> ?$/.test(Fn.current)&&mi())},onLine:h=>{if(dr.current)return;const E=h.trimEnd();if(Pr.current&&E.trim()){$("info",E);return}if(Rt.current&&sc(E)){mi();return}Rt.current&&E.trim()&&!ws(E)&&!E.includes("raw REPL")&&$("info",E)},onLog:$,onDisconnect:()=>{v(!1),kl(!1),Vr(!1),Rt.current=!1,Pr.current=!1,Xr(),Fn.current="",Ll(),$("warning","USB-forbindelse lukket.")}});return Yr.current=d,d},[]);function $(d,h){K(E=>[...E.slice(-140),{level:d,text:h}])}function Fr(d){K(h=>[...h.slice(-140),{level:"info",text:d,variant:"input"}])}function sc(d){return d.trim()===">>>"}function ws(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Xr(){nr.current!==null&&(window.clearTimeout(nr.current),nr.current=null)}function mi(){!Rt.current||nr.current!==null||(nr.current=window.setTimeout(()=>{nr.current=null,Rt.current&&(kl(!1),Rt.current=!1,Fn.current="",$("success","Pico-koden er færdig."))},0))}function pi(d,h=Z,E="error"){const j=Ry(d,h);K(T=>[...T.slice(-140),{level:E,text:j.simple,technical:j.technical}])}function on(d,h,E=ye){Se(d),xe(E),Ye(h),qn(j=>({...j,[ft(E,d)]:h})),_t()}function Cl(d,h="pico"){Se(d),xe(h),Ye(""),an(null),Ir({top:0,left:0}),_t()}function _t(){Al.current=[],Ol.current=[],$r.current=null}function gr(){const d=An.current;return{content:Z,selectionStart:(d==null?void 0:d.selectionStart)??Z.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??Z.length}}function sa(d){const h=Al.current,E=h.at(-1);(E==null?void 0:E.content)===d.content&&E.selectionStart===d.selectionStart&&E.selectionEnd===d.selectionEnd||(h.push(d),h.length>By&&h.shift(),Ol.current=[])}function Kr(d,h){let E=0;const j=Math.min(d.length,h.length);for(;E<j&&d[E]===h[E];)E+=1;let T=d.length,ne=h.length;for(;T>E&&ne>E&&d[T-1]===h[ne-1];)T-=1,ne-=1;const pe=d.slice(E,T),ze=h.slice(E,ne),Me=ze&&!pe?"insert":pe&&!ze?"delete":"replace",tn=ze.at(-1)??"";return{kind:Me,boundaryAfter:Me==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(tn)}}function Qr(d,h){if(h!=="typing")return $r.current=null,!0;const E=Date.now(),j=Kr(Z,d),T=$r.current,ne=T!==null&&T.path===W&&T.source===ye&&T.kind===j.kind&&T.kind!=="replace"&&!T.boundaryAfter&&E-T.at<=zy;return $r.current={path:W,source:ye,kind:j.kind,at:E,boundaryAfter:j.boundaryAfter},!ne}function oa(d){Ye(d.content),qn(h=>({...h,[ft(ye,W)]:d.content})),ui(""),an(null),window.requestAnimationFrame(()=>{const h=An.current;h&&(h.focus(),h.selectionStart=Math.min(d.selectionStart,d.content.length),h.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function ca(){const d=Al.current.pop();return d?($r.current=null,Ol.current.push(gr()),oa(d),!0):!1}function ua(){const d=Ol.current.pop();return d?($r.current=null,Al.current.push(gr()),oa(d),!0):!1}function lt(d,h=(ne=>(ne=An.current)==null?void 0:ne.selectionStart)()??d.length,E=gr(),j=h,T="programmatic"){E&&d!==Z&&Qr(d,T)&&sa(E),Ye(d),qn(pe=>({...pe,[ft(ye,W)]:d})),ui(""),Vl(d,h),window.requestAnimationFrame(()=>{const pe=An.current;pe&&(pe.selectionStart=Math.min(h,d.length),pe.selectionEnd=Math.min(j,d.length))})}function it(d,h=ye){qn(E=>{const j=ft(h,d);if(!(j in E))return E;const T={...E};return delete T[j],T})}function fa(){return cr[W]===Z}function _n(d,h){ur(E=>({...E,[d]:h}))}function qt(d,h){_n(d,h),qn(E=>({...E,[ft("pico",d)]:h})),ye==="pico"&&W===d&&Ye(h)}function Ll(){ie([]),Pe([]),ur({}),qn({}),an(null),Se(d=>{const h=Bf(kf());if(h.find(T=>T.path===d))return d;const j=h[0];return xe("local"),Ye(j.content),_t(),j.path})}function dn(d){Zr(),F({value:100,label:d}),Dl.current=window.setTimeout(()=>{Dl.current=null,F(null)},900)}function Zr(){Dl.current!==null&&(window.clearTimeout(Dl.current),Dl.current=null)}function hi(){return ee?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(ee.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:ee.label}),u.jsxs("strong",{children:[Math.round(ee.value),"%"]}),ee.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:_i,"aria-label":"Stop handling",title:"Stop",children:u.jsx(et,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,ee.value))}%`}})})]}):null}function _i(){Xn.current&&Wr("Stopper læsning...",!0,!0)}function Wr(d="Stopper læsning...",h=!1,E=!1){var j;Zr(),tt.current=null,tr.current+=1,(j=Xn.current)==null||j.abort(),Xn.current=null,pr.current=null,oe(null),L(!1),F(h?{value:(ee==null?void 0:ee.value)??0,label:d,cancellable:!1}:null),E&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function In(d){var h;if(!(pr.current===d||tt.current===d)){if(tt.current=d,en.current){tr.current+=1,(h=Xn.current)==null||h.abort(),Xn.current=null,pr.current=null,Cl(d),oe(d),L(!0),Zr(),F({value:2,label:`Skifter til ${Te(d)}...`,cancellable:!0});return}rr()}}function rr(){if(en.current)return;const d=tt.current;if(!d)return;tt.current=null;const h=tr.current+1;tr.current=h;const E=new AbortController;Xn.current=E,pr.current=d,Cl(d),oe(d),L(!0),Zr(),F({value:12,label:`Indlæser ${Te(d)}...`,cancellable:!0});const j=(async()=>{try{const T=await _(d,(ne,pe)=>{tr.current===h&&F({value:ne,label:pe,cancellable:!0})},E.signal);if(E.signal.aborted||tr.current!==h)return;on(d,T,"pico"),_n(d,T),dn("Fil indlæst")}catch(T){if(tr.current!==h)return;Vy(T)||E.signal.aborted?$("info",`Stoppede læsning af ${Te(d)}.`):(F(null),$("error",T instanceof Error?T.message:"BLE læsning fejlede."))}})();en.current=j,j.finally(()=>{if(en.current!==j)return;en.current=null,Xn.current===E&&(Xn.current=null),pr.current===d&&(pr.current=null),!!tt.current||(oe(null),L(!1),E.signal.aborted&&F(null)),rr()})}async function br(d){const h=dr.current;dr.current=!0;try{return await d()}finally{dr.current=h}}z.useEffect(()=>{if(!Rl)return;const d=Sn.current;d&&(d.scrollTop=d.scrollHeight)},[Y,Rl]),z.useEffect(()=>{yb({clearTerminalOnRun:er,simplifiedErrors:fr})},[er,fr]),z.useEffect(()=>{var d;qr.some(h=>h.version===Un)||Hr(((d=qr[0])==null?void 0:d.version)??"")},[qr,Un]),z.useEffect(()=>{ys(Zh(navigator))},[]),z.useEffect(()=>{const d=()=>{const h=Yr.current;Nt.current=null,sn.current=null,Yr.current=null,h==null||h.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var h,E;Zr(),(h=Tt.current)==null||h.dispose(),Tt.current=null,(E=nt.current)==null||E.dispose(),nt.current=null,window.removeEventListener("pagehide",d),d()}},[]),z.useEffect(()=>{const d=h=>{!(h.ctrlKey||h.metaKey)||h.key.toLowerCase()!=="s"||(h.preventDefault(),!D&&W.trim()&&!fi&&!O&&!I&&!U&&Rs())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ye,_e,D,g,Z,W,fi,O,I,U]);function Ft(d,h,E){J(j=>{const T=Jy(j,d,h,E);return Nf(T),T})}const Es=lv(H,he,Yt,g||_e);z.useEffect(()=>{_e&&nn()},[_e]),z.useEffect(()=>{const d=hr.current;d&&d!==ht&&Ll(),hr.current=ht},[ht]);async function da(){if(Pt.supported){G(!0);try{await di.requestAndConnect();const d=new P0(di);Nt.current=d,sn.current=new Q0(d),v(!0),Be(0),await d.interrupt(),await ma(d),$("success","Sendte stop-signal til Pico-terminalen."),await Ss(sn.current),await gi(sn.current)}catch(d){$("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await di.disconnect()}catch(h){$("error",h instanceof Error?`USB-porten kunne ikke lukkes: ${h.message}`:"USB-porten kunne ikke lukkes.");return}Be(h=>{const E=h+1;return E>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),xn(!0)),E}),v(!1)}finally{G(!1)}}}async function ma(d){const h=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(h.error||!h.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Bl(){var d;try{await((d=Yr.current)==null?void 0:d.disconnect()),Nt.current=null,sn.current=null,v(!1),Ll()}catch(h){$("error",h instanceof Error?`USB-porten kunne ikke lukkes: ${h.message}`:"USB-porten kunne ikke lukkes.")}}async function Kn(d){const h=sn.current;if(h){L(!0),dr.current=!0;try{await d(h)}catch(E){F(null),$("error",E instanceof Error?E.message:"USB filhandling fejlede.")}finally{dr.current=!1,L(!1)}}}async function nn(d=!0){if(_e){L(!0);try{const h=await p();ie(h),d&&$("success",`Indlæste ${h.length} filer fra Pico via Bluetooth.`)}catch(h){$("error",h instanceof Error?h.message:"BLE filhandling fejlede.")}finally{L(!1)}return}await Ss(sn.current,d)}async function Ss(d,h=!0){if(d){L(!0);try{const E=await br(()=>d.list("/"));ie(E),h&&$("success",`Indlæste ${E.length} filer fra Pico.`)}catch(E){$("error",E instanceof Error?E.message:"USB filhandling fejlede.")}finally{L(!1)}}}async function zl(){if(_e){L(!0),F({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await ks((h,E)=>F({value:h,label:E}));Pe(d),dn("Fil-tjek færdigt")}catch(d){F(null),$("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{L(!1)}return}await gi(sn.current)}async function ks(d){const h=[],E=Ki.filter(T=>T.kind==="library"&&!ri(T));let j=0;for(const T of Ki){if(T.kind==="program"){h.push({...T,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(ri(T)){h.push({...T,status:"unknown",detail:"Opdateres via USB"});continue}try{const ne=j/Math.max(1,E.length)*100,pe=100/Math.max(1,E.length);$("info",`Tjekker ${T.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,ne),`Tjekker ${T.label} på Pico...`);const ze=await _(T.path,(tn,Wn)=>{d==null||d(Math.min(95,ne+tn/100*pe),`${T.label}: ${Wn}`)}),Me=Sl(ze)===Sl(T.content);h.push({...T,status:Me?"ok":"outdated",detail:Me?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{h.push({...T,status:"missing",detail:"Mangler på Pico"})}finally{j+=1}}return d==null||d(100,"Fil-tjek færdigt"),h}async function gi(d){if(d){L(!0);try{const h=await br(()=>Ns(d)),E=h;Pe(E)}catch(h){$("error",h instanceof Error?h.message:"Runtime check fejlede.")}finally{L(!1)}}}async function Ns(d){if(!d)return[];const h=[];for(const E of Ki){if(E.kind==="program"){h.push({...E,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const j=await d.readText(E.path),T=Sl(j)===Sl(E.content);h.push({...E,status:T?"ok":"outdated",detail:T?"Matcher appens version":"Matcher ikke appens version"})}catch{h.push({...E,status:"missing",detail:"Mangler på Pico"})}}return h}async function oc(d=W){if(_e){In(d);return}oe(d),await Kn(async h=>{F({value:12,label:`Indlæser ${Te(d)}...`});const E=await cc(h,d);on(d,E,"pico"),_n(d,E),dn("Fil indlæst")}),oe(null)}async function cc(d,h){var E;try{return await d.readText(h)}catch(j){await((E=Nt.current)==null?void 0:E.stop().catch(()=>{})),await Uy(120);try{return await d.readText(h)}catch{throw j}}}function uc(){Q(!0)}async function Rs(){if(ye==="pico"){if(!g&&!_e){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await ha();return}pa()}function pa(){if(ii(W)){$("error",fs);return}Ft(W,Z,!1),xe("local"),qn(d=>({...d,[ft("local",W)]:Z})),Q(!1),$("success",`Gemte ${Te(W)} lokalt.`)}async function ha(){if(Q(!1),ii(W))return F(null),$("error",fs),!1;if(F({value:0,label:"Starter gemning..."}),_e){L(!0);try{return await y(W,Z,(h,E)=>F({value:h,label:E})),_n(W,Z),xe("pico"),qn(h=>({...h,[ft("pico",W)]:Z})),dn("Gemt på Pico via Bluetooth"),$("success",`Gemte ${Te(W)} på Pico via Bluetooth.`),Yo(W)&&(kt(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await nn(!1),!0}catch(h){return F(null),$("error",h instanceof Error?h.message:"BLE gem fejlede."),!1}finally{L(!1)}}if(!sn.current)return F(null),!1;let d=!1;return await Kn(async h=>{lr(W,"pico")?await h.replaceTextSafely(W,Z,(E,j)=>F({value:E,label:j})):await h.writeText(W,Z,(E,j)=>F({value:E,label:j})),_n(W,Z),xe("pico"),qn(E=>({...E,[ft("pico",W)]:Z})),dn("Gemt på Pico via USB"),$("success",`Gemte ${W}.`),await nn(),await zl(),d=!0}),d}function fc(){Ts(Te(W),Z),Q(!1),$("success",`Downloadede ${Te(W)}.`)}function Ts(d,h){const E=new Blob([h],{type:"text/plain;charset=utf-8"}),j=URL.createObjectURL(E),T=document.createElement("a");T.href=j,T.download=d,T.click(),URL.revokeObjectURL(j)}async function Ms(d){L(!0),kt(!1),F({value:10,label:"Genstarter Pico..."});try{await x(d)?(dn("Pico genforbundet"),$("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await nn()):(F(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(h){F(null),$("error",h instanceof Error?h.message:"Genstart/genforbindelse mislykkedes.")}finally{L(!1)}}function bi(d){var ne;const h=d??{path:W,source:ye},E=h.source==="pico"?"Pico":"browser",j=h.source==="pico"?(d==null?void 0:d.versions.length)??((ne=Ff(H).get(h.path))==null?void 0:ne.length)??0:0,T=j>0?` Det sletter også filens versionshistorik (${j} gemte versioner).`:"";re(null),i({title:"Slet fil",message:`Vil du slette ${Te(h.path)} fra ${E}?${T}`,confirmLabel:"Slet",onConfirm:()=>{pc(h)}})}function dc(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{mc()}})}async function mc(){if(!sn.current){$("error","Forbind Picoen med USB fÃ¸rst.");return}await Kn(async d=>{await d.delete("/DeviceSettings.txt").catch(h=>{const E=h instanceof Error?h.message:"";if(!/ENOENT|No such file|not found/i.test(E))throw h}),ur(h=>{const E={...h};return delete E["/DeviceSettings.txt"],E}),it("/DeviceSettings.txt","pico"),$("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var Ã¥bent."),await nn()})}async function pc(d){const h=d.path,E=d.source,j=h===W&&E===ye;if(E==="local"){const pe=he.filter(ze=>ze.path!==h);J(pe),Nf(pe),j&&on(h,"","local"),it(h,"local"),$("warning",`Slettede ${Te(h)} fra browseren.`);return}const T=Ff(H).get(h)??[],ne=[h,...T.map(pe=>pe.path)];if(_e){L(!0);try{for(const ze of ne)await w(ze);ur(ze=>{const Me={...ze};for(const tn of ne)delete Me[tn];return Me}),j&&on(h,"","pico");for(const ze of ne)it(ze,"pico");const pe=T.length>0?` og ${T.length} gemte versioner`:"";$("warning",`Slettede ${Te(h)}${pe} på Pico via Bluetooth.`),await nn()}catch(pe){$("error",pe instanceof Error?pe.message:"BLE sletning fejlede.")}finally{L(!1)}return}if(!sn.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await Kn(async pe=>{for(const Me of ne)await pe.delete(Me);ur(Me=>{const tn={...Me};for(const Wn of ne)delete tn[Wn];return tn});const ze=T.length>0?` og ${T.length} gemte versioner`:"";$("warning",`Slettede ${h}${ze}.`),j&&on(h,"","pico");for(const Me of ne)it(Me,"pico");await nn(),await zl()})}async function js(d){if(!d)return;const h=Gy(d.name);if(!h){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(ii(h)){$("error",fs);return}if(d.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const E=await d.text();if(ye==="local"){Ft(h,E,!0),on(h,E,"local"),$("success",`Importerede ${Te(h)} i browseren.`);return}if(!g&&!_e){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(_e&&ri({path:h})){$("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(F({value:0,label:"Uploader fil til Pico..."}),_e){L(!0);try{await y(h,E,(T,ne)=>F({value:T,label:ne})),_n(h,E),on(h,E,"pico"),dn("Fil uploadet til Pico"),$("success",`Importerede ${Te(h)} på Pico via Bluetooth.`),await nn()}catch(T){F(null),$("error",T instanceof Error?T.message:"Kunne ikke importere filen til Pico.")}finally{L(!1)}return}if(!sn.current){F(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Kn(async T=>{lr(h,"pico")?await T.replaceTextSafely(h,E,(ne,pe)=>F({value:ne,label:pe})):await T.writeText(h,E,(ne,pe)=>F({value:ne,label:pe})),_n(h,E),on(h,E,"pico"),dn("Fil uploadet til Pico"),$("success",`Importerede ${Te(h)} på Pico.`),await nn(),await zl()})}async function hc(){ue(""),te(!0)}function _c(){const d=Xh(ce);if(!d)return;if(ii(d)){$("error",fs);return}const h=ye;if(lr(d,h)){$("error",`Der findes allerede en fil med navnet ${Te(d)} i ${h==="pico"?"Pico":"browseren"}.`);return}if(h==="local"){Ft(d,"",!1),on(d,"","local"),te(!1),$("success",`Oprettede ${Te(d)} i browseren.`);return}gc(d)}async function gc(d){if(!g&&!_e){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(te(!1),F({value:0,label:"Opretter fil på Pico..."}),_e){L(!0);try{await y(d,"",(h,E)=>F({value:h,label:E})),_n(d,""),on(d,"","pico"),dn("Fil oprettet på Pico"),$("success",`Oprettede ${Te(d)} på Pico via Bluetooth.`),await nn()}catch(h){F(null),$("error",h instanceof Error?h.message:"Kunne ikke oprette fil på Pico.")}finally{L(!1)}return}if(!sn.current){F(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Kn(async h=>{await h.writeText(d,"",(E,j)=>F({value:E,label:j})),_n(d,""),on(d,"","pico"),dn("Fil oprettet på Pico"),$("success",`Oprettede ${Te(d)} på Pico.`),await nn()})}function bc(d){d.type==="file"&&(re(d),N(Iy(d.path)))}async function yc(d){if(!I||I.source!=="pico")return;const h=I.path;if(re(null),F({value:0,label:"Gendanner version..."}),_e){L(!0);try{const E=await _(d.path);await y(h,E,(j,T)=>F({value:j,label:T})),_n(h,E),on(h,E,"pico"),dn("Version gendannet"),await nn(!1)}catch(E){F(null),$("error",E instanceof Error?E.message:"Kunne ikke gendanne versionen.")}finally{L(!1)}return}sn.current&&await Kn(async E=>{await E.replaceTextSafely(h,await E.readText(d.path),(T,ne)=>F({value:T,label:ne}));const j=await E.readText(h);_n(h,j),on(h,j,"pico"),dn("Version gendannet"),await nn()})}function vc(d){i({title:"Slet version",message:`Vil du slette ${Te(d.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{xc(d)}})}async function xc(d){if(_e){L(!0);try{await w(d.path),await nn(!1),re(h=>h&&{...h,versions:h.versions.filter(E=>E.path!==d.path)})}catch(h){$("error",h instanceof Error?h.message:"Kunne ikke slette versionen.")}finally{L(!1)}return}sn.current&&await Kn(async h=>{await h.delete(d.path),await nn(!1),re(E=>E&&{...E,versions:E.versions.filter(j=>j.path!==d.path)})})}async function wc(){var E;if(!I)return;const d=I,h=tv(d.path,j=>lr(j,d.source));if(!h){$("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Te(d.path)}.`);return}if(d.source==="local"){const j=Yt[ft("local",d.path)]??((E=he.find(T=>T.path===d.path))==null?void 0:E.content)??"";Ft(h,j,!1),on(h,j,"local"),re(null),$("success",`Duplikerede ${Te(d.path)} til ${Te(h)} i browseren.`);return}if(re(null),F({value:0,label:"Duplikerer fil..."}),_e){L(!0);try{const j=cr[d.path]??await _(d.path);await y(h,j,(T,ne)=>F({value:T,label:ne})),_n(h,j),on(h,j,"pico"),dn("Fil duplikeret"),await nn(!1),$("success",`Duplikerede ${Te(d.path)} til ${Te(h)} på Pico via Bluetooth.`)}catch(j){F(null),$("error",j instanceof Error?j.message:"Kunne ikke duplikere filen.")}finally{L(!1)}return}if(!sn.current){F(null),$("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await Kn(async j=>{const T=await j.readText(d.path);await j.writeText(h,T,(ne,pe)=>F({value:ne,label:pe})),_n(h,T),on(h,T,"pico"),dn("Fil duplikeret"),await nn(!1),$("success",`Duplikerede ${Te(d.path)} til ${Te(h)} på Pico.`)})}async function Ec(){if(!I)return;const d=I,h=Lf(we,ds(d.path));if(!h||h===d.path)return;if(ii(h)){$("error",fs);return}if(lr(h,d.source)){$("error",`Der findes allerede en fil med navnet ${Te(h)}.`);return}const E=d.source==="local",j=d.source==="pico";if(_e&&j&&(Yo(d.path)||Yo(h))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}L(!0);try{if(j)if(_e){const T=cr[d.path]??await _(d.path);await y(h,T,(ne,pe)=>F({value:ne,label:pe})),await w(d.path),ur(ne=>({...r_(ne,d.path,h),[h]:T}))}else sn.current&&(await br(()=>sn.current.rename(d.path,h)),ur(T=>r_(T,d.path,h)));E&&J(T=>{const ne=T.map(pe=>pe.path===d.path?{...pe,path:h,updatedAt:Date.now()}:pe);return Nf(ne),ne}),W===d.path&&ye===d.source&&Se(h),qn(T=>sv(T,d.source,d.path,h)),re(null),N(""),$("success",`Omdøbte ${Te(d.path)} til ${Te(h)}.`),j&&await nn()}catch(T){$("error",T instanceof Error?T.message:"Kunne ikke omdøbe filen.")}finally{F(null),L(!1)}}function lr(d,h){return h==="pico"?H.some(E=>E.path===d):he.some(E=>E.path===d)}async function Ul(d,h){if(!lr(d,"pico"))return;const E=nv(d,H),j=cr[d]??await _(d);h!==void 0&&Sl(j)===Sl(h)||await y(E,j)}function Sc(d){if(d.type!=="file"){_e&&Wr(void 0,!1),Se(d.path),xe(d.source);return}if(_e&&ri(d)){$("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){_e&&Wr(void 0,!1);const E=he.find(j=>j.path===d.path);on(d.path,Yt[ft("local",d.path)]??(E==null?void 0:E.content)??"","local");return}const h=ft("pico",d.path);if(Object.prototype.hasOwnProperty.call(Yt,h)){_e&&Wr(void 0,!1),on(d.path,Yt[h],"pico");return}if(Object.prototype.hasOwnProperty.call(cr,d.path)){_e&&Wr(void 0,!1),on(d.path,cr[d.path],"pico");return}oc(d.path)}async function _a(){if(!g&&!_e){const d=Kh();Pe(d),Wt(Qh(d)),Oe(!0),F(null);return}L(!0),F({value:4,label:_e?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",_e?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Ae.length>0?Ae:_e?await ks((h,E)=>F({value:h,label:E})):await br(()=>Ns(sn.current));Pe(d),Wt(Qh(d)),Oe(!0),F(null)}catch(d){F(null),$("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{L(!1)}}async function Ds(){if(Oe(!1),_e){L(!0);try{const h=(Ae.length>0?Ae:Ki.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Pn[j.id]&&!ri(j));if(h.length===0){$("info","Ingen filer valgt til installation.");return}let E=null;F({value:0,label:"Starter installation..."});for(const[j,T]of h.entries()){$("info",`Installerer ${T.label} via Bluetooth...`);const ne=j/h.length*100,pe=100/h.length;await Ul(T.path,T.content),await y(T.path,T.content,(ze,Me)=>{F({value:Math.min(99,ne+ze/100*pe),label:`${T.label}: ${Me}`})}),qt(T.path,T.content),$("success",`Installerede ${T.label}.`),T.kind==="library"&&(E=T),Yo(T.path)&&kt(!0)}dn("Installation færdig"),await nn(!1),await zl(),E&&yr(E)}catch(d){F(null),$("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{L(!1)}return}await Kn(async d=>{const E=(Ae.length>0?Ae:Ki.map(T=>({...T,status:"unknown",detail:"Ikke tjekket"}))).filter(T=>Pn[T.id]);if(E.length===0){$("info","Ingen filer valgt til installation.");return}let j=null;F({value:0,label:"Starter installation..."});for(const[T,ne]of E.entries()){$("info",`Installerer ${ne.label}...`);const pe=T/E.length*100,ze=100/E.length,Me=await d.readText(ne.path).catch(()=>null);Me!==null&&Sl(Me)===Sl(ne.content)?(F({value:Math.min(99,pe+ze),label:`${ne.label}: Allerede nyeste version`}),$("info",`${ne.label} findes allerede i samme version.`)):(await d.replaceTextSafely(ne.path,ne.content,(tn,Wn)=>{F({value:Math.min(99,pe+tn/100*ze),label:`${ne.label}: ${Wn}`})},{createBackup:!0}),$("success",`Installerede ${ne.label}.`)),qt(ne.path,ne.content),ne.kind==="library"&&(j=ne)}dn("Installation færdig"),await nn(!1),await zl(),j&&yr(j)})}function ga(){return(Ae.length>0?Ae:Kh()).filter(h=>Pn[h.id])}function As(){const d=ga();if(d.length===0){$("info","Ingen filer valgt.");return}for(const h of d)Ft(h.path,h.content,!1);Oe(!1),$("success",`Gemte ${d.length} filer i browseren.`)}function Os(){const d=ga();if(d.length===0){$("info","Ingen filer valgt.");return}d.forEach((h,E)=>{window.setTimeout(()=>{Ts(Te(h.path),h.content)},E*120)}),Oe(!1),$("success",`Starter download af ${d.length} filer.`)}function yr(d){on(d.path,d.content,"pico"),_n(d.path,d.content),$("info",`Åbnede ${d.label} i editoren.`)}function kc(d,h){Wt(E=>{if(d.kind!=="program")return{...E,[d.id]:h};const j={...E};for(const T of Ae)T.kind==="program"&&(j[T.id]=!1);return j[d.id]=h,j})}async function Nc(){if(va(),_e&&ye==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ye==="local"){await Rc();return}const d=Nt.current;if(!d){$("error",`${Te(W)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(W.endsWith(".py")){if(!fa()&&($("info",`${Te(W)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await ha())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(D)return;Xr(),Fn.current="",$n(!0);try{await d.runFile(W,()=>{Xr(),Fn.current="",Pr.current=!1,kl(!0),Rt.current=!0}),$("success",`Kører ${Te(W)}. Brug Stop for at afbryde.`)}catch(h){kl(!1),Rt.current=!1,Xr(),Fn.current="",$("error",h instanceof Error?h.message:"Kunne ikke starte koden.")}return}L(!0);try{const h=await d.exec(Z,2e4);h.output.trim()&&$("info",h.output),h.error.trim()&&pi(h.error,Z),!h.output.trim()&&!h.error.trim()&&$("success","Koden kørte uden output.")}catch(h){$("error",h instanceof Error?h.message:"Kunne ikke køre koden.")}finally{L(!1)}}async function Rc(){const d=Vf(Z,{allowInput:!0});if(d.some(j=>j.level==="error")){for(const j of d){const T=j.line?`Linje ${j.line}: `:"";$(j.level==="error"?"error":"warning",`${T}${j.text}`)}return}/\binput\s*\(/.test(Z)&&!R_()&&$("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const h=new AbortController;mr.current=h;const E=new vy;nt.current=E,L(!0),ra(!0),$n(!0),$("info",g?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const j=[],T=await E.run(Z,{timeoutMs:null,signal:h.signal,onOutput:Me=>{j.push(Me),$("info",Me)}});for(const Me of T.issues){const tn=Me.line?`Linje ${Me.line}: `:"";$(Me.level==="error"?"error":"warning",`${tn}${Me.text}`)}const ne=[...j,T.output].filter(Boolean).join(`
`).trim(),pe=T.output.trim();!T.error.trim()&&Yy(ne)?pi(ne,Z):(pe&&$("info",pe),T.error.trim()&&pi(T.error,Z,T.unavailable?"warning":"error")),T.ok&&!ne&&!T.error.trim()&&$("success","Browser-MicroPython kørte uden output.")}finally{mr.current=null,nt.current=null,E.dispose(),ra(!1),L(!1)}}async function Cs(){var h,E,j;if(Nl){(h=mr.current)==null||h.abort(),(E=nt.current)==null||E.stop(),$("warning","Stoppede Browser-MicroPython."),$n(!0);return}if(!Mt&&jn){(j=Tt.current)==null||j.reset(),Vr(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),$n(!0);return}const d=Nt.current;if(d)try{await d.stop(),$("warning","Stoppede koden på Pico.")}catch(T){$("error",T instanceof Error?T.message:"Kunne ikke stoppe koden.")}finally{kl(!1),Rt.current=!1,Xr(),Fn.current="",$n(!0)}}function Ls(){const d=Sn.current;if(!d)return;const h=d.scrollHeight-d.scrollTop-d.clientHeight<12;$n(h)}function Hl(){K([]),$n(!0)}function Gl(){window.requestAnimationFrame(()=>{const d=Sn.current;d&&(d.scrollTop=d.scrollHeight)})}async function ba(){const d=Gn?dt:dt.trimEnd();if(Gn){if(!Mt){const j=nt.current;if(!j){$("warning","Browser-MicroPython kører ikke lige nu."),Qn();return}Jt(""),$n(!0),Fr(d),j.sendInput(d),Qn();return}const E=Nt.current;if(!E){$("warning","Pico-terminalen er ikke forbundet."),Qn();return}Jt(""),$n(!0);try{await E.sendProgramInput(d)}catch(j){$("error",j instanceof Error?j.message:"Kunne ikke sende input til Pico-koden.")}finally{Qn()}return}if(!d.trim())return;if(Tl(E=>(E.at(-1)===d?E:[...E,d]).slice(-80)),mt(null),Dn(null),Hn){$("warning",Mt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Qn();return}if(!Mt){const E=Vf(d);if(E.some(T=>T.level==="error")){for(const T of E){const ne=T.line?"Linje "+T.line+": ":"";$(T.level==="error"?"error":"warning",ne+T.text)}Qn();return}const j=Tt.current??new yy;Tt.current=j,Jt(""),Vr(!0),$n(!0),$("info",">>> "+d);try{let T=!1;const ne=await j.send(d,{timeoutMs:15e3,onOutput:ze=>{T=!0,$("info",ze)}}),pe=ne.output.trim();pe&&!T&&$("info",pe),ne.error.trim()&&pi(ne.error,d,ne.unavailable?"warning":"error")}catch(T){$("error",T instanceof Error?T.message:"Browser-MicroPython-terminalen fejlede.")}finally{Vr(!1),Qn()}return}if(_e){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Qn();return}const h=Nt.current;if(!g||!h){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Qn();return}Jt(""),Vr(!0),$n(!0),Pr.current=!0,$("info",">>> "+d);try{await h.sendFriendlyLine(d)}catch(E){Pr.current=!1,$("error",E instanceof Error?E.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Vr(!1),Qn()}}function Qn(){window.requestAnimationFrame(()=>{const d=pt.current;if(!d||d.disabled)return;d.focus();const h=d.value.length;d.selectionStart=h,d.selectionEnd=h})}function ya(d,h,E){if(E.length===0)return null;const j=g||_e;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:h})]}),E.map(T=>{const ne=_e&&ri(T);return u.jsxs("label",{className:`ide-install-row ${ne?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Pn[T.id],disabled:ne,onChange:pe=>kc(T,pe.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Bs(T),j&&T.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${T.status}`,children:ne?"USB":rv(T.status)})]}),u.jsx("small",{children:T.description})]})]},T.id)})]})}function Bs(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function va(){er&&K([]),$n(!0)}function Il(d,h){const E=d.indexOf(`
`,h);return E===-1?d.length:E}function Vl(d,h){if(Jh(d,h)){an(null);return}const E=qf(d,h);if(!E||E.query.length<1){an(null);return}const j=Wh(d,h,!0).slice(0,8),T=e_(An.current,E.start);an(j.length>0&&T?{items:j,selected:0,start:E.start,end:h,position:T}:null)}function yi(d,h){if(Jh(d,h)){Dn(null);return}const E=qf(d,h);if(!E||E.query.length<1){Dn(null);return}const j=Wh(d,h,!1).slice(0,8),T=e_(pt.current,E.start);Dn(j.length>0&&T?{items:j,selected:0,start:E.start,end:h,position:T}:null)}function xa(d){const h=d.value.slice(d.selectionStart,d.selectionEnd);ui(Qy(h)?h:"")}function vi(d,h){window.requestAnimationFrame(()=>{const E=d==null?void 0:d.querySelector(`[data-autocomplete-index="${h}"]`);E==null||E.scrollIntoView({block:"nearest"})})}function wa(d=Qe==null?void 0:Qe.items[Qe.selected]){if(!d||!Qe)return;const h=gr(),E=Z.slice(0,Qe.start)+d.insert+Z.slice(Qe.end),j=Qe.start+d.insert.length-(d.insert.endsWith("()")?1:0);an(null),lt(E,j,h),window.requestAnimationFrame(()=>{const T=An.current;T&&T.focus()})}function zs(d=hn==null?void 0:hn.items[hn.selected]){if(!d||!hn)return;const h=dt.slice(0,hn.start)+d.insert+dt.slice(hn.end),E=hn.start+d.insert.length-(d.insert.endsWith("()")?1:0);Jt(h),Dn(null),window.requestAnimationFrame(()=>{const j=pt.current;j&&(j.focus(),j.selectionStart=E,j.selectionEnd=E)})}function Tc(d){const h=An.current;if(!h)return!1;const E=h.selectionStart,j=h.selectionEnd,T={content:Z,selectionStart:E,selectionEnd:j},ne=Z.lastIndexOf(`
`,E-1)+1,pe=j>E&&Z[j-1]===`
`?j-1:j,ze=Il(Z,pe),Me=ze<Z.length?ze+1:ze,tn=Z.slice(ne,Me);if(d<0){if(ne===0)return!1;const jt=Z.lastIndexOf(`
`,ne-2)+1,On=Z.slice(jt,ne),vr=Z.slice(0,jt)+tn+On+Z.slice(Me),xr=-On.length;return lt(vr,E+xr,T,j+xr),!0}if(Me>=Z.length)return!1;const Wn=Il(Z,Me),Jr=Wn<Z.length?Wn+1:Wn,Ne=Z.slice(Me,Jr),ln=Z.slice(0,ne)+Ne+tn+Z.slice(Jr),Xt=Ne.length;return lt(ln,E+Xt,T,j+Xt),!0}function Mc(d){var Jr;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?ua():ca())&&an(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),ua()&&an(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!D&&W.trim()&&Rs();return}if(d.altKey&&!d.ctrlKey&&!d.metaKey&&(d.key==="ArrowUp"||d.key==="ArrowDown")){d.preventDefault(),Tc(d.key==="ArrowUp"?-1:1)&&an(null);return}if(Qe){if(d.key==="ArrowDown"){d.preventDefault(),an(Ne=>{if(!Ne)return Ne;const ln=(Ne.selected+1)%Ne.items.length;return vi(fn.current,ln),{...Ne,selected:ln}});return}if(d.key==="ArrowUp"){d.preventDefault(),an(Ne=>{if(!Ne)return Ne;const ln=(Ne.selected-1+Ne.items.length)%Ne.items.length;return vi(fn.current,ln),{...Ne,selected:ln}});return}if(d.key==="Tab"){d.preventDefault(),wa();return}if(d.key==="Enter"){if(!(Qe.items[Qe.selected]&&D_(Qe.items[Qe.selected],Z.slice(Qe.start,Qe.end)))){d.preventDefault(),wa();return}an(null)}if(d.key==="Escape"){d.preventDefault(),an(null);return}}if(d.key==="Enter"){d.preventDefault();const Ne=d.currentTarget,ln=Ne.selectionStart,Xt=Ne.selectionEnd,jt={content:Z,selectionStart:ln,selectionEnd:Xt},On=Z.lastIndexOf(`
`,ln-1)+1,vr=Z.slice(On,ln),xr=((Jr=vr.match(/^[ \t]*/))==null?void 0:Jr[0])??"",Ea=vr.trimEnd().endsWith(":")?"    ":"",xi=`
${xr}${Ea}`,Sa=Z.slice(0,ln)+xi+Z.slice(Xt),Yl=ln+xi.length;lt(Sa,Yl,jt),window.requestAnimationFrame(()=>{Ne.selectionStart=Yl,Ne.selectionEnd=Yl});return}if(d.key!=="Tab")return;d.preventDefault();const h=d.currentTarget,E=h.selectionStart,j=h.selectionEnd,T={content:Z,selectionStart:E,selectionEnd:j},ne="    ";if(d.shiftKey){const Ne=Z.lastIndexOf(`
`,E-1)+1,ln=E===j?Il(Z,E):j,Xt=Z.slice(Ne,ln);let jt=0,On=0;const vr=Xt.replace(/(^|\n)( {1,4}|\t)/g,(Ea,xi,Sa,Yl)=>{const ka=Sa.length;return Ne+Yl<E&&(jt+=ka),On+=ka,xi});if(On===0)return;const xr=Z.slice(0,Ne)+vr+Z.slice(ln);lt(xr,Math.max(Ne,E-jt),T,E===j?Math.max(Ne,E-jt):Math.max(Ne,j-On)),window.requestAnimationFrame(()=>{h.selectionStart=Math.max(Ne,E-jt),h.selectionEnd=E===j?h.selectionStart:Math.max(h.selectionStart,j-On)});return}if(E===j){const Ne=Z.slice(0,E)+ne+Z.slice(j);lt(Ne,E+ne.length,T),window.requestAnimationFrame(()=>{h.selectionStart=E+ne.length,h.selectionEnd=E+ne.length});return}const pe=Z.lastIndexOf(`
`,E-1)+1,Me=Z.slice(pe,j).replace(/^/gm,ne),tn=Me.split(`
`).length,Wn=Z.slice(0,pe)+Me+Z.slice(j);lt(Wn,E+ne.length,T,j+tn*ne.length),window.requestAnimationFrame(()=>{h.selectionStart=E+ne.length,h.selectionEnd=j+tn*ne.length})}function Zn(d){if(Gn){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),ba());return}if(hn){if(d.key==="ArrowDown"){d.preventDefault(),Dn(h=>{if(!h)return h;const E=(h.selected+1)%h.items.length;return vi(jl.current,E),{...h,selected:E}});return}if(d.key==="ArrowUp"){d.preventDefault(),Dn(h=>{if(!h)return h;const E=(h.selected-1+h.items.length)%h.items.length;return vi(jl.current,E),{...h,selected:E}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),zs();return}if(d.key==="Escape"){d.preventDefault(),Dn(null);return}}if(d.key==="Tab"){d.preventDefault();const h=d.currentTarget,E=h.selectionStart,j=h.selectionEnd,T="    ",ne=dt.slice(0,E)+T+dt.slice(j),pe=E+T.length;Jt(ne),mt(null),Dn(null),window.requestAnimationFrame(()=>{h.selectionStart=pe,h.selectionEnd=pe});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===dt.length&&d.currentTarget.selectionEnd===dt.length)||ci.length===0)return;d.preventDefault();const E=d.key==="ArrowUp"?En===null?ci.length-1:Math.max(0,En-1):En===null||En+1>=ci.length?null:En+1;mt(E);const j=E===null?"":ci[E]??"";Jt(j),Dn(null),$n(!0),window.requestAnimationFrame(()=>{const T=pt.current;T&&(T.selectionStart=j.length,T.selectionEnd=j.length,Gl())});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),ba())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(ed,{title:"Pico Kodeværksted",onMenu:()=>s()}),fi?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:hc,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(et,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=la.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(et,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>nn(),disabled:!g&&!_e||D,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(et,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:Es.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Es.map(d=>{if(d.kind==="separator"){const T=d.id==="pico-files"&&!g&&!_e;return u.jsxs(z.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),T&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const h=_e&&ri(d),E=Yt[ft(d.source,d.path)],j=E!==void 0&&E!==ev(d,he,cr);return u.jsxs("div",{className:`ide-file-row ${W===d.path&&ye===d.source?"active":""} ${h?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>Sc(d),disabled:h,title:h?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:j?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.source==="pico"&&d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${j?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>bc(d),disabled:d.type!=="file"||D||h,"aria-label":`Filvalg for ${d.name}`,title:h?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(et,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:_e?"Forbundet Pico":"USB udvikling"}),!_e&&u.jsx("span",{className:`ide-usb-status ${Pt.supported?"available":"unavailable"}`,title:Pt.message,"data-tooltip":Pt.message,role:"img","aria-label":Pt.message,tabIndex:0,children:"!"})]}),_e&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!_e&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:g?Bl:da,disabled:!Pt.supported||S,children:S?"Forbinder...":g?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:_a,disabled:_e||D,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:dc,disabled:!g||D,children:"Nulstil enhed"})]}),_e&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(et,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:_a,disabled:D,children:"Startprogrammer og biblioteker"})]}),!_e&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>xn(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Te(W),u.jsxs("small",{children:[vs," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Nc,disabled:D,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Cs,disabled:!Nl&&!(!Mt&&jn)&&(!g||!wn),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:uc,disabled:D||!W.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>bi(),disabled:D||!W.trim(),children:"Slet"})]})]}),hi(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-oi.top}px)`},children:Array.from({length:rt},(d,h)=>u.jsx("span",{children:h+1},h))}),u.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-oi.left}px, ${-oi.top}px)`},children:Wy(Z,ic)}),u.jsx("textarea",{ref:An,className:"ide-editor",value:Z,onChange:d=>lt(d.target.value,d.target.selectionStart,gr(),d.target.selectionEnd,"typing"),onKeyDown:Mc,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Vl(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Vl(d.currentTarget.value,d.currentTarget.selectionStart),xa(d.currentTarget)},onSelect:d=>xa(d.currentTarget),onScroll:d=>{Ir({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Qe&&Vl(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:D||!!se,"aria-busy":D||!!se,spellCheck:!1}),Qe&&u.jsx("div",{ref:fn,className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Qe.position.left,top:Qe.position.top},children:Qe.items.map((d,h)=>u.jsx("button",{className:h===Qe.selected?"active":"",type:"button","data-autocomplete-index":h,onMouseDown:E=>{E.preventDefault(),wa(d)},role:"option","aria-selected":h===Qe.selected,children:d.label},d.label))}),se&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Te(se),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${fr?"":"active"}`,type:"button",onClick:()=>bs(d=>!d),"aria-label":fr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!fr,title:fr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${er?"active":""}`,type:"button",onClick:()=>Ml(d=>!d),"aria-pressed":er,title:er?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Hl,disabled:Y.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:Sn,onScroll:Ls,onClick:()=>{var d;return(d=pt.current)==null?void 0:d.focus()},children:[Y.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):Y.map((d,h)=>u.jsx("div",{className:`term-line ${d.variant==="input"?"term-input-echo":`term-${d.level}`}`,children:d.technical&&!fr?d.technical:d.text},`${h}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Hn&&!Gn?"locked":""} ${Gn?"stdin":""}`,onSubmit:d=>{d.preventDefault(),ba()},children:[u.jsx("span",{"aria-hidden":"true",children:aa}),u.jsx("textarea",{ref:pt,value:dt,onChange:d=>{Jt(d.target.value),mt(null),Gn?Dn(null):yi(d.target.value,d.target.selectionStart)},onKeyDown:Zn,onKeyUp:d=>{Gn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||yi(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Gn||yi(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:xs,placeholder:_r,"aria-label":Gn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:_r,rows:Math.max(1,dt.split(`
`).length)})]}),hn&&u.jsx("div",{ref:jl,className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:hn.position.left,top:hn.position.top},children:hn.items.map((d,h)=>u.jsx("button",{className:h===hn.selected?"active":"",type:"button","data-autocomplete-index":h,onMouseDown:E=>{E.preventDefault(),zs(d)},role:"option","aria-selected":h===hn.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:la,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var h;js((h=d.target.files)==null?void 0:h[0]),d.currentTarget.value=""}}),O&&u.jsx(Nn,{title:"Gem fil",onClose:()=>Q(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:pa,children:"Gem i browser"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void ha(),disabled:!g&&!_e||D,children:"Gem på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:fc,children:"Download til computer"})]})}),He&&u.jsx(Nn,{title:"Startprogrammer og biblioteker",onClose:()=>Oe(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:g||_e?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[ya("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(d=>d.kind==="program")),ya("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(g||_e)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ds,disabled:D,children:"Installer valgte på Pico"}),u.jsx("button",{className:g||_e?"btn btn-outline":"btn btn-primary",type:"button",onClick:As,disabled:D,children:"Gem valgte i browser"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Os,disabled:D,children:"Download valgte"})]})]})}),Gr&&u.jsx(Nn,{title:"main.py er gemt",onClose:()=>kt(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void Ms("control"),disabled:D,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Ms("ide"),disabled:D,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>kt(!1),disabled:D,children:"Senere"})]})}),ve&&u.jsx(Nn,{title:"Installer MicroPython",onClose:()=>xn(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:Tn,onChange:d=>Vt(d.target.value),children:ia.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:($t==null?void 0:$t.version)??Un,onChange:d=>Hr(d.target.value),children:qr.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),$t&&u.jsx("a",{className:"btn btn-primary btn-block",href:$t.url,download:$t.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),U&&u.jsx(Nn,{title:"Ny Python-fil",onClose:()=>te(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),_c()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ce,onChange:d=>ue(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",ac,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Xh(ce),children:"Opret"})]})}),I&&u.jsx(Nn,{title:Te(I.path),onClose:()=>re(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:I.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Ec()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:we,onChange:d=>N(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",ds(I.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",ds(I.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Lf(we,ds(I.path))||Lf(we,ds(I.path))===I.path||D,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void wc(),disabled:D,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>bi(I),disabled:D,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),I.source!=="pico"?u.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):I.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:I.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Te(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void yc(d),disabled:D,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>vc(d),disabled:D,children:"Slet"})]},d.path))})]})]})})]})}function Xh(s){var c;const i=(c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Gy(s){const i=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=j_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function Lf(s,i="py"){const c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=j_(a[1]),p=i.replace(/^\./,"").toLowerCase(),_=(a[2]??(p||"py")).toLowerCase();return f?`/${f}.${_}`:""}function Iy(s){return Te(s).replace(/\.(py|txt|json|csv)$/i,"")}function j_(s){return s.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function ds(s){var a;const i=Te(s).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function Sl(s){return s.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Kh(){return Ki.map(s=>({...s,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Qh(s){const i={};return s.forEach(c=>{i[c.id]=!1}),i}function Te(s){return s.split("/").filter(Boolean).pop()??s}function Yo(s){return s.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Zh(s){const i=s.userAgent||"",c=s.platform||"",a=s.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),p=/Macintosh/i.test(c)&&a>1;return f&&!p}function Vy(s){return s instanceof DOMException&&s.name==="AbortError"}function Yy(s){return/Traceback \(most recent call last\):/.test(s)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(s)}function ri(s){return Py(s)}function Py(s){return s.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const $f=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(s=>({label:s,insert:`${s}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(s)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(s=>({label:`${s}()`,insert:`${s}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Wh(s,i,c){const a=qf(s,i);if(!a)return[];const f=$y(s,a.start,i),p=a.query.toLowerCase(),_=f.beforeToken.toLowerCase(),y=f.linePrefix.toLowerCase(),w=c?[...$f,...Fy(s)]:$f;return Xy(w).filter(g=>{const v=g.label.toLowerCase(),S=g.insert.toLowerCase();return S===p||v===p||D_(g,a.query)?!1:f.importLine?qy(g,f)?v.startsWith(y)||S.startsWith(y)||v.startsWith(p)||S.startsWith(p):!1:_.endsWith(".")&&!S.includes(".")?!1:!!(S.startsWith(p)||v.startsWith(p))})}function $y(s,i,c){const a=s.lastIndexOf(`
`,i-1)+1,f=s.slice(a,c),p=s.slice(a,i),_=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),y=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:p,importLine:_,fromImportLine:y}}function qy(s,i){return i.fromImportLine?!s.insert.includes("(")&&!s.insert.startsWith("import "):s.insert.startsWith("import ")||s.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.insert)}function Fy(s){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of s.matchAll(a))f[1]&&i.add(f[1]),f[2]&&i.add(f[2]);return[...i].filter(a=>a.length>1&&!Ky.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function Xy(s){const i=new Set,c=[];for(const a of s){const f=a.insert.toLowerCase();i.has(f)||(i.add(f),c.push(a))}return c}const Ky=new Set($f.map(s=>s.insert.replace(/[().: ]+$/g,"")));function qf(s,i){const a=s.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function Jh(s,i){const c=s.lastIndexOf(`
`,Math.max(0,i-1))+1;let a=null,f=null,p=!1;for(let _=0;_<i;_+=1){const y=s[_],w=s.slice(_,_+3);if(f){w===f.repeat(3)&&(f=null,_+=2);continue}if(a){if(p){p=!1;continue}if(y==="\\"){p=!0;continue}y===a&&(a=null),y===`
`&&(a=null);continue}if(y==="#"){const x=s.indexOf(`
`,_),g=x===-1?s.length:x;if(i<=g&&_>=c)return!0;_=g;continue}if(w==='"""'||w==="'''"){f=y,_+=2;continue}(y==='"'||y==="'")&&(a=y)}return a!==null||f!==null}function D_(s,i){const c=s.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function Qy(s){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(s)}function e_(s,i){if(!s)return null;const c=s.closest(".ide-terminal")??s.parentElement;if(!c)return null;const a=window.getComputedStyle(s),f=document.createElement("div"),p=document.createElement("span"),_=c.getBoundingClientRect(),y=s.getBoundingClientRect();f.style.position="absolute",f.style.visibility="hidden",f.style.pointerEvents="none",f.style.whiteSpace="pre-wrap",f.style.overflowWrap="break-word",f.style.boxSizing=a.boxSizing,f.style.width=`${s.clientWidth}px`,f.style.padding=a.padding,f.style.border=a.border,f.style.font=a.font,f.style.lineHeight=a.lineHeight,f.style.letterSpacing=a.letterSpacing,f.style.tabSize=a.tabSize,f.style.left=`${y.left-_.left-s.scrollLeft}px`,f.style.top=`${y.top-_.top-s.scrollTop}px`,f.textContent=s.value.slice(0,i),p.textContent=s.value.slice(i,i+1)||" ",f.appendChild(p),c.appendChild(f);const w=p.getBoundingClientRect();f.remove();const x=218,g=Zy(w.left-_.left,8,Math.max(8,c.clientWidth-296)),v=w.bottom-_.top+c.scrollTop+6,S=w.top-_.top+c.scrollTop-x,G=c.scrollTop+c.clientHeight,Y=v+x>G?Math.max(c.scrollTop+8,S):v;return{left:g,top:Y}}function Zy(s,i,c){return Math.max(i,Math.min(c,s))}function Wy(s,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];return s.split(/(\r?\n)/).forEach((p,_)=>{if(p===`
`||p===`\r
`){f.push(u.jsx("br",{},`br-${_}`));return}let y=0;[...p.matchAll(a)].forEach((x,g)=>{const v=x.index??0;v>y&&f.push(...n_(p.slice(y,v),c,`${_}-${g}-plain`,i));const S=x[0],G=S.startsWith("#")?"tok-comment":S.startsWith('"')||S.startsWith("'")?"tok-string":/^\d/.test(S)?"tok-number":"tok-builtin";f.push(...Fo(S,i,`${_}-${g}-token`,G)),y=v+S.length}),y<p.length&&f.push(...n_(p.slice(y),c,`${_}-tail`,i))}),f.length?f:" "}function n_(s,i,c,a=""){const f=[];let p=0;const _=new RegExp(i.source,"g");return[...s.matchAll(_)].forEach((y,w)=>{const x=y.index??0;x>p&&f.push(...Fo(s.slice(p,x),a,`${c}-${w}-plain`)),f.push(...Fo(y[0],a,`${c}-${w}-keyword`,"tok-keyword")),p=x+y[0].length}),p<s.length&&f.push(...Fo(s.slice(p),a,`${c}-plain-end`)),f}function Fo(s,i,c,a=""){if(!i)return[u.jsx("span",{className:a||void 0,children:s},c)];const f=[],p=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${p})(?![A-Za-zÆØÅæøå0-9_])`,"g");let y=0;return[...s.matchAll(_)].forEach((w,x)=>{const g=w.index??0;g>y&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(y,g)},`${c}-${x}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:w[0]},`${c}-${x}-match`)),y=g+w[0].length}),y<s.length&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(y)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:s},c)]}function Bf(s){return s.length>0?s:[{path:Pf,content:M_,uploaded:!1,updatedAt:Date.now()}]}function Jy(s,i,c,a){const f=s.filter(p=>p.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((p,_)=>_.updatedAt-p.updatedAt)}function ev(s,i,c){var a;return s.source==="pico"?c[s.path]:(a=i.find(f=>f.path===s.path))==null?void 0:a.content}function Xo(s){const i=s.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",p=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return p?{originalPath:`${a}${p[1]}${p[3]}`,index:parseInt(p[2],10)}:null}function ii(s){return Xo(s)!==null}function Ff(s){const i=new Map;for(const c of s){const a=Xo(c.path);if(!a)continue;const f=i.get(a.originalPath)??[];f.push(c),i.set(a.originalPath,f)}for(const c of i.values())c.sort((a,f)=>{var p,_;return(((p=Xo(f.path))==null?void 0:p.index)??0)-(((_=Xo(a.path))==null?void 0:_.index)??0)});return i}function nv(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",p=a>=0?c.slice(a+1):c.replace(/^\/+/,""),_=p.lastIndexOf("."),y=_>0?p.slice(0,_):p,w=_>0?p.slice(_):"",x=new Set(i.map(g=>g.path.toLowerCase()));for(let g=1;g<1e3;g+=1){const v=`${f}${y}_backup${g}${w}`;if(!x.has(v.toLowerCase()))return v}return`${f}${y}_backup${Date.now()}${w}`}function tv(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",p=a>=0?c.slice(a+1):c.replace(/^\/+/,""),_=p.lastIndexOf("."),y=_>0?p.slice(0,_):p,w=_>0?p.slice(_):"";for(let x=1;x<1e3;x+=1){const g=x===1?"_kopi":`_kopi${x}`,v=`${f}${y}${g}${w}`;if(!i(v)&&!ii(v))return v}return`${f}${y}_kopi${Date.now()}${w}`}function rv(s){return s==="ok"?"Nyeste":s==="outdated"?"Opdater":s==="missing"?"Mangler":"Ikke tjekket"}function lv(s,i,c,a){const f=new Map,p=Ff(s);for(const g of s)ii(g.path)||f.set(ft("pico",g.path),{kind:"file",name:g.name,path:g.path,type:g.type,size:g.size,source:"pico",uploaded:!0,versions:p.get(g.path)??[]});for(const g of i)f.set(ft("local",g.path),{kind:"file",name:Te(g.path),path:g.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const g of Object.keys(c)){const[v,...S]=g.split(":"),G=S.join(":");if(v!=="local"&&v!=="pico"||!G)continue;const Y=f.get(g);if(Y){f.set(g,Y);continue}f.set(g,{kind:"file",name:Te(G),path:G,type:"file",source:v,uploaded:!1,versions:v==="pico"?p.get(G)??[]:[]})}const _=[...f.values()].sort(av),y=_.filter(g=>g.source==="pico"),w=_.filter(g=>g.source==="local"),x=[];return y.length>0||a?x.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...y):x.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),w.length>0&&x.push({kind:"separator",id:"browser-files",label:"Browser"},...w),x}const iv=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function av(s,i){const c=t_(s.path),a=t_(i.path);return c===null&&a===null?s.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function t_(s){var c;const i=(c=s.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?iv.get(i)??null:null}function r_(s,i,c){if(!(i in s))return s;const a={...s,[c]:s[i]};return delete a[i],a}function sv(s,i,c,a){const f=`${i}:${c}`;if(!(f in s))return s;const p={...s,[`${i}:${a}`]:s[f]};return delete p[f],p}function ov({open:s}){const i=ae(H=>H.screen),c=ae(H=>H.active),a=ae(H=>H.toggleSideMenu),f=ae(H=>H.toggleDebugger),p=ae(H=>H.setEditMode),_=ae(H=>H.openMenuPage),y=ae(H=>H.disconnect),w=ae(H=>H.openPicoIde),x=ae(H=>H.closePicoIde),g=ae(H=>H.picoIdeOrigin),v=i==="dashboard",S=i==="control",G=i==="ide",Y=S&&!!(c!=null&&c.canEdit),K=!S||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),D=g==="control",L=g==="control"?"Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${s?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${i} ${s?"open":"closing"}`,"aria-label":"Sidemenu",children:[v&&u.jsxs(u.Fragment,{children:[u.jsx(Et,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),u.jsx(Et,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),u.jsx(Et,{label:"Kodeværksted",icon:"picoIde",onClick:w,disabled:!K}),u.jsx(zf,{}),u.jsx(Et,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),u.jsx(Et,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),u.jsx(Et,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),S&&u.jsxs(u.Fragment,{children:[u.jsx(Et,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),u.jsx(Et,{label:"Rediger",icon:"edit",onClick:()=>p(!0),disabled:!Y}),u.jsx(Et,{label:"Kodeværksted",icon:"picoIde",onClick:w,disabled:!K}),u.jsx(zf,{}),u.jsx(Et,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),u.jsx(Et,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),G&&u.jsxs(u.Fragment,{children:[u.jsx(Et,{label:L,icon:"back",onClick:x}),u.jsx(zf,{})]}),u.jsx("div",{className:"spacer"}),(S||G&&D)&&u.jsx(Et,{label:"Forlad",icon:"exit",onClick:()=>y()})]})]})}function Et({label:s,icon:i,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":s,children:[u.jsx(et,{name:i}),u.jsx("span",{children:s})]})}function zf(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:Kb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const cv={error:"term-error",success:"term-success",warning:"term-warning",info:""},l_={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function uv(){const s=new Date,i=c=>String(c).padStart(2,"0");return`${i(s.getDate())}-${i(s.getMonth()+1)}-${s.getFullYear()}-${i(s.getHours())}-${i(s.getMinutes())}`}function fv(){const s=ae(f=>f.logs),i=ae(f=>f.clearLogs),c=ae(f=>f.toggleDebugger);function a(){const f=[...s].reverse().map(w=>`${w.time} ${l_[w.level]}${w.message}`).join(`
`),p=new Blob([f],{type:"text/plain"}),_=URL.createObjectURL(p),y=document.createElement("a");y.href=_,y.download=`${uv()}.txt`,y.click(),URL.revokeObjectURL(_)}return u.jsxs(Nn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:s.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):s.map((f,p)=>u.jsxs("div",{className:`term-line ${cv[f.level]}`,children:[f.time," ",l_[f.level],f.message]},`${f.time}-${p}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const A_=4,It=A_*4+17,i_=80,dv=20,mv=30660;function pv(s){const i=new TextEncoder().encode(s);if(i.length>76)throw new Error("QR-koden er for lang.");const c=a_(!1),a=a_(!1);hv(c,a);const f=gv(i),p=vv(f,dv);return bv(c,a,[...f,...p]),yv(c,a),c}function a_(s){return Array.from({length:It},()=>Array.from({length:It},()=>s))}function Gt(s,i,c,a,f,p=!0){s[a][c]=f,p&&(i[a][c]=!0)}function hv(s,i){Uf(s,i,0,0),Uf(s,i,It-7,0),Uf(s,i,0,It-7);for(let c=0;c<It;c+=1)i[6][c]||Gt(s,i,c,6,c%2===0),i[c][6]||Gt(s,i,6,c,c%2===0);_v(s,i,26,26),Gt(s,i,8,A_*4+9,!0)}function Uf(s,i,c,a){for(let f=-1;f<=7;f+=1)for(let p=-1;p<=7;p+=1){const _=c+p,y=a+f;if(_<0||y<0||_>=It||y>=It)continue;const w=p>=0&&p<=6&&f>=0&&f<=6&&(p===0||p===6||f===0||f===6||p>=2&&p<=4&&f>=2&&f<=4);Gt(s,i,_,y,w)}}function _v(s,i,c,a){for(let f=-2;f<=2;f+=1)for(let p=-2;p<=2;p+=1)i[a+f][c+p]||Gt(s,i,c+p,a+f,Math.max(Math.abs(p),Math.abs(f))!==1)}function gv(s){const i=[];Po(i,4,4),Po(i,s.length,8);for(const a of s)Po(i,a,8);for(Po(i,0,Math.min(4,i_*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((f,p)=>f<<1|p,0));for(let a=236;c.length<i_;a=a===236?17:236)c.push(a);return c}function Po(s,i,c){for(let a=c-1;a>=0;a-=1)s.push(i>>>a&1)}function bv(s,i,c){const a=c.flatMap(_=>Array.from({length:8},(y,w)=>_>>>7-w&1));let f=0,p=!0;for(let _=It-1;_>=1;_-=2){_===6&&(_-=1);for(let y=0;y<It;y+=1){const w=p?It-1-y:y;for(let x=0;x<2;x+=1){const g=_-x;if(i[w][g])continue;const v=f<a.length?a[f]===1:!1;s[w][g]=v!==((g+w)%2===0),f+=1}}p=!p}}function yv(s,i){const c=a=>(mv>>>a&1)!==0;for(let a=0;a<=5;a+=1)Gt(s,i,8,a,c(a));Gt(s,i,8,7,c(6)),Gt(s,i,8,8,c(7)),Gt(s,i,7,8,c(8));for(let a=9;a<15;a+=1)Gt(s,i,14-a,8,c(a));for(let a=0;a<8;a+=1)Gt(s,i,It-1-a,8,c(a));for(let a=8;a<15;a+=1)Gt(s,i,8,It-15+a,c(a))}const hs=new Array(512),Xf=new Array(256);let s_=!1;function O_(){if(s_)return;let s=1;for(let i=0;i<255;i+=1)hs[i]=s,Xf[s]=i,s<<=1,s&256&&(s^=285);for(let i=255;i<512;i+=1)hs[i]=hs[i-255];s_=!0}function C_(s,i){return s===0||i===0?0:hs[Xf[s]+Xf[i]]}function vv(s,i){O_();const c=xv(i),a=Array.from({length:i},()=>0);for(const f of s){const p=f^a.shift();a.push(0);for(let _=0;_<i;_+=1)a[_]^=C_(c[_],p)}return a}function xv(s){O_();let i=[1];for(let c=0;c<s;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let f=0;f<i.length;f+=1)a[f]^=C_(i[f],hs[c]),a[f+1]^=i[f];i=a}return i.slice(1)}function wv(){const s=ae(ve=>ve.menuPage),i=ae(ve=>ve.closeMenuPage),c=ae(ve=>ve.user),a=ae(ve=>ve.active),f=ae(ve=>ve.layout),p=ae(ve=>ve.sliderValues),_=ae(ve=>ve.savedDevices),y=ae(ve=>ve.updateUsername),w=ae(ve=>ve.createOwnerPairingCode),x=ae(ve=>ve.applyOwnerPairingCode),g=ae(ve=>ve.clearSavedDevices),v=ae(ve=>ve.resetApplicationData),S=ae(ve=>ve.saveDeviceSettings),G=ae(ve=>ve.setEditMode),Y=ae(ve=>ve.askConfirm),[K,D]=z.useState((c==null?void 0:c.username)??""),[L,H]=z.useState(!1),[ie,se]=z.useState(""),[oe,he]=z.useState(""),[J,W]=z.useState(!1),[Se,ye]=z.useState(""),xe=z.useRef(null),[Z,Ye]=z.useState((a==null?void 0:a.iconID)??0),[Ae,Pe]=z.useState(!1),[U,te]=z.useState((a==null?void 0:a.canOthersConnect)??!1),[ce,ue]=z.useState((a==null?void 0:a.canOthersEdit)??!1),[we,N]=z.useState((a==null?void 0:a.canOthersEditCode)??!1),[I,re]=z.useState((a==null?void 0:a.gridCols)??11),[O,Q]=z.useState((a==null?void 0:a.gridRows)??31),[ee,F]=z.useState(!1);z.useEffect(()=>{s==="user-settings"&&(D((c==null?void 0:c.username)??""),he(""),ye(""),W(!1))},[s,c==null?void 0:c.username]),z.useEffect(()=>{s==="device-settings"&&a&&(Ye(a.iconID),te(a.canOthersConnect),ue(a.canOthersEdit),N(a.canOthersEditCode),re(a.gridCols),Q(a.gridRows))},[a,s]),z.useEffect(()=>{if(!J)return;let ve=!1,xn=null,Rn=0;async function Be(){var Vt;const Tn=window.BarcodeDetector;if(!Tn||!((Vt=navigator.mediaDevices)!=null&&Vt.getUserMedia)){ye("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),W(!1);return}try{xn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Un=xe.current;if(!Un)return;Un.srcObject=xn,await Un.play();const Hr=new Tn({formats:["qr_code"]}),Gr=async()=>{var kt;if(!ve){try{const Ir=(kt=(await Hr.detect(Un)).find(wn=>wn.rawValue))==null?void 0:kt.rawValue;if(Ir){he(Ir),x(Ir)&&H(!1),W(!1);return}}catch{}Rn=window.requestAnimationFrame(Gr)}};Rn=window.requestAnimationFrame(Gr)}catch{ye("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),W(!1)}}return Be(),()=>{ve=!0,Rn&&window.cancelAnimationFrame(Rn),xn==null||xn.getTracks().forEach(Tn=>Tn.stop())}},[x,J]);const He=(ve,xn)=>Number.isFinite(ve)?Math.max(Zi,Math.min(Wi,Math.round(ve))):xn,Oe=(c==null?void 0:c.username)??"",Pn=K.trim(),Wt=Pn.length>0&&Pn!==Oe;if(!s)return null;if(s==="user-settings"){let ve=function(){const Be=w();Be&&(se(Be),he(""),H(!0))},xn=function(){x(oe)&&(he(""),H(!1))};async function Rn(){var Be;try{await((Be=navigator.clipboard)==null?void 0:Be.writeText(ie))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Nn,{title:"Brugerindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Ht,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${K.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:K,onChange:Be=>D(Be.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>y(K),disabled:!Wt,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:ve,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>Y({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{v()}}),children:"Slet brugerdata"})]})}),L&&u.jsx(Nn,{title:"Del ejerkode",onClose:()=>H(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(kv,{code:ie}),u.jsx("code",{className:"owner-code-text",children:ie}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Rn(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${oe.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:oe,onChange:Be=>he(Be.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:xn,disabled:!oe.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>W(Be=>!Be),children:J?"Stop scanning":"Scan QR-kode"}),Se&&u.jsx("div",{className:"notice",children:Se}),J&&u.jsx("video",{className:"owner-code-video",ref:xe,muted:!0,playsInline:!0})]})})]})}if(s==="application-settings")return u.jsx(Nn,{title:"Applikationsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Ht,{label:"Version",value:_s}),u.jsx(Ht,{label:"Bluetooth",value:tc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(Ht,{label:"Gemte enheder",value:String(_.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Y({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:g}),disabled:_.length===0,children:"Ryd gemte enheder"})]})});if(s==="application-about")return u.jsx(Nn,{title:"Om appen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(Ht,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(Ht,{label:"Version",value:_s})]})});if(s==="application-help")return u.jsx(Nn,{title:"Hjælp til applikationen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(s==="device-settings"){const ve=f.filter(Be=>Be.type==="slider"),xn=!!(a!=null&&a.isOwnedByMe);async function Rn(Be=!1){if(!a||!xn)return;const Tn=He(I,a.gridCols),Vt=He(O,a.gridRows),Un=Ev(f,Tn,Vt);if(Un&&!Be){Y({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Un.requiredCols} kolonner og ${Un.requiredRows} rækker. Det nye gitter er ${Tn} × ${Vt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Rn(!0)}});return}F(!0),await S(Z,U,U&&ce,U&&we,Tn,Vt),re(Tn),Q(Vt),F(!1)}return u.jsx(Nn,{title:"Enhedsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Ht,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(Ht,{label:"Ejer",value:Nv(a)}),xn?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Pe(!0),children:u.jsx("img",{src:ta(Z),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:U?"":"active",onClick:()=>te(!1),children:"Privat"}),u.jsx("button",{type:"button",className:U?"active":"",onClick:()=>te(!0),children:"Offentlig"})]}),U&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ce?"":"active",onClick:()=>ue(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ce?"active":"",onClick:()=>ue(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:we?"":"active",onClick:()=>N(!1),children:"Nej"}),u.jsx("button",{type:"button",className:we?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:Zi,max:Wi,value:Number.isNaN(I)?"":I,onChange:Be=>re(parseInt(Be.target.value,10)),onBlur:()=>re(He(I,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:Zi,max:Wi,value:Number.isNaN(O)?"":O,onChange:Be=>Q(parseInt(Be.target.value,10)),onBlur:()=>Q(He(O,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Rn(),disabled:ee,children:ee?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Ht,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(Ht,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(Ht,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(Ht,{label:"Kontroller",value:String(f.length)}),ve.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),ve.map(Be=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:Be.name}),u.jsxs("span",{children:[Be.sliderMin??0," til ",Be.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",Sv(Be.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",p[Be.name]??"Ikke brugt"]})]},Be.name))]}),Ae&&u.jsx(__,{selected:Z,onSelect:Ye,onClose:()=>Pe(!1)})]})})}return u.jsx(Nn,{title:"Hjælp til enheden",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>G(!0),children:"Rediger layout"})]})})}function Ev(s,i,c){let a=0,f=0;for(const p of s)Ji(p)&&(a=Math.max(a,Math.ceil((p.centerX2+p.spanX)/2)+1),f=Math.max(f,Math.ceil((p.centerY2+p.spanY)/2)+1));return i<a||c<f?{requiredCols:a,requiredRows:f}:null}function Sv(s){return s==="bottom"?"bund":s==="middle"?"midte":s==="top"?"top":"ingen"}function kv({code:s}){const i=z.useMemo(()=>pv(s),[s]),c=i.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,f)=>a.map((p,_)=>p?u.jsx("rect",{x:_+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${_}-${f}`):null))]})}function Nv(s){var i;return s?s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function Ht({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function Rv(){const s=ae(a=>a.confirmDialog),i=ae(a=>a.closeConfirm);if(!s)return null;function c(){s==null||s.onConfirm(),i()}return u.jsx(Nn,{title:s.title,onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:s.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:s.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:s.confirmLabel??"Fortsæt"})]})]})})}function Tv(){const s=ae(a=>a.connectionLost),i=ae(a=>a.reconnectLostDevice),c=ae(a=>a.dismissConnectionLost);return s?u.jsx(Nn,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",s.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function Mv(){const s=ae(c=>c.toast),i=ae(c=>c.dismissToast);return s?u.jsx("div",{className:"toast",role:"alert",onClick:i,children:s.message},s.id):null}function jv(){const s=ae(y=>y.screen),i=ae(y=>y.splashTarget),c=ae(y=>y.init),a=ae(y=>y.sideMenuOpen),f=ae(y=>y.debuggerOpen),[p,_]=z.useState(!1);return z.useEffect(()=>{c()},[c]),z.useEffect(()=>{if(a){_(!0);return}const y=setTimeout(()=>_(!1),140);return()=>clearTimeout(y)},[a]),u.jsxs("div",{className:"app",children:[s==="splash"&&i==="intro"&&u.jsx(kh,{}),s==="splash"&&i==="dashboard"&&u.jsx(Nh,{}),s==="splash"&&u.jsx(Jb,{}),s==="intro"&&u.jsx(kh,{}),s==="dashboard"&&u.jsx(Nh,{}),s==="connection"&&u.jsx(l0,{}),s==="create"&&u.jsx(i0,{}),s==="control"&&u.jsx(V0,{}),s==="ide"&&u.jsx(Hy,{}),p&&u.jsx(ov,{open:a}),u.jsx(wv,{}),u.jsx(Tv,{}),u.jsx(Rv,{}),f&&u.jsx(fv,{}),u.jsx(Mv,{})]})}function Dv(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const i=new URL("sw.js",window.location.href);navigator.serviceWorker.register(i,{scope:"./"}).catch(c=>{console.warn("Service worker registration failed:",c)})});let s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||window.crossOriginIsolated||(s=!0,window.location.reload())})}Dv();ub.createRoot(document.getElementById("root")).render(u.jsx(ms.StrictMode,{children:u.jsx(jv,{})}));
