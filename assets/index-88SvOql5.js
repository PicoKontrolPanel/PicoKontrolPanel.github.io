var nb=Object.defineProperty;var tb=(s,i,c)=>i in s?nb(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c;var me=(s,i,c)=>tb(s,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const _ of p.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function c(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(f){if(f.ep)return;f.ep=!0;const p=c(f);fetch(f.href,p)}})();function f_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sf={exports:{}},rs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function rb(){if(ah)return rs;ah=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,f,p){var _=null;if(p!==void 0&&(_=""+p),f.key!==void 0&&(_=""+f.key),"key"in f){p={};for(var b in f)b!=="key"&&(p[b]=f[b])}else p=f;return f=p.ref,{$$typeof:s,type:a,key:_,ref:f!==void 0?f:null,props:p}}return rs.Fragment=i,rs.jsx=c,rs.jsxs=c,rs}var sh;function lb(){return sh||(sh=1,Sf.exports=rb()),Sf.exports}var u=lb(),kf={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function ib(){if(oh)return ke;oh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),_=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function I(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,D={};function L(N,U,te){this.props=N,this.context=U,this.refs=D,this.updater=te||V}L.prototype.isReactComponent={},L.prototype.setState=function(N,U){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,U,"setState")},L.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function H(){}H.prototype=L.prototype;function ie(N,U,te){this.props=N,this.context=U,this.refs=D,this.updater=te||V}var se=ie.prototype=new H;se.constructor=ie,F(se,L.prototype),se.isPureReactComponent=!0;var oe=Array.isArray;function pe(){}var J={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function Re(N,U,te){var O=te.ref;return{$$typeof:s,type:N,key:U,ref:O!==void 0?O:null,props:te}}function ve(N,U){return Re(N.type,U,N.props)}function we(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function W(N){var U={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(te){return U[te]})}var Pe=/\/+/g;function Ae(N,U){return typeof N=="object"&&N!==null&&N.key!=null?W(""+N.key):U.toString(36)}function qe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(pe,pe):(N.status="pending",N.then(function(U){N.status==="pending"&&(N.status="fulfilled",N.value=U)},function(U){N.status==="pending"&&(N.status="rejected",N.reason=U)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function G(N,U,te,O,Z){var ne=typeof N;(ne==="undefined"||ne==="boolean")&&(N=null);var X=!1;if(N===null)X=!0;else switch(ne){case"bigint":case"string":case"number":X=!0;break;case"object":switch(N.$$typeof){case s:case i:X=!0;break;case y:return X=N._init,G(X(N._payload),U,te,O,Z)}}if(X)return Z=Z(N),X=O===""?"."+Ae(N,0):O,oe(Z)?(te="",X!=null&&(te=X.replace(Pe,"$&/")+"/"),G(Z,U,te,"",function(Qn){return Qn})):Z!=null&&(we(Z)&&(Z=ve(Z,te+(Z.key==null||N&&N.key===Z.key?"":(""+Z.key).replace(Pe,"$&/")+"/")+X)),U.push(Z)),1;X=0;var He=O===""?".":O+":";if(oe(N))for(var Oe=0;Oe<N.length;Oe++)O=N[Oe],ne=He+Ae(O,Oe),X+=G(O,U,te,ne,Z);else if(Oe=I(N),typeof Oe=="function")for(N=Oe.call(N),Oe=0;!(O=N.next()).done;)O=O.value,ne=He+Ae(O,Oe++),X+=G(O,U,te,ne,Z);else if(ne==="object"){if(typeof N.then=="function")return G(qe(N),U,te,O,Z);throw U=String(N),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return X}function re(N,U,te){if(N==null)return N;var O=[],Z=0;return G(N,O,"","",function(ne){return U.call(te,ne,Z++)}),O}function ue(N){if(N._status===-1){var U=N._result;U=U(),U.then(function(te){(N._status===0||N._status===-1)&&(N._status=1,N._result=te)},function(te){(N._status===0||N._status===-1)&&(N._status=2,N._result=te)}),N._status===-1&&(N._status=0,N._result=U)}if(N._status===1)return N._result.default;throw N._result}var fe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Ee={map:re,forEach:function(N,U,te){re(N,function(){U.apply(this,arguments)},te)},count:function(N){var U=0;return re(N,function(){U++}),U},toArray:function(N){return re(N,function(U){return U})||[]},only:function(N){if(!we(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ke.Activity=v,ke.Children=Ee,ke.Component=L,ke.Fragment=c,ke.Profiler=f,ke.PureComponent=ie,ke.StrictMode=a,ke.Suspense=E,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ke.__COMPILER_RUNTIME={__proto__:null,c:function(N){return J.H.useMemoCache(N)}},ke.cache=function(N){return function(){return N.apply(null,arguments)}},ke.cacheSignal=function(){return null},ke.cloneElement=function(N,U,te){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var O=F({},N.props),Z=N.key;if(U!=null)for(ne in U.key!==void 0&&(Z=""+U.key),U)!ee.call(U,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&U.ref===void 0||(O[ne]=U[ne]);var ne=arguments.length-2;if(ne===1)O.children=te;else if(1<ne){for(var X=Array(ne),He=0;He<ne;He++)X[He]=arguments[He+2];O.children=X}return Re(N.type,Z,O)},ke.createContext=function(N){return N={$$typeof:_,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:p,_context:N},N},ke.createElement=function(N,U,te){var O,Z={},ne=null;if(U!=null)for(O in U.key!==void 0&&(ne=""+U.key),U)ee.call(U,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(Z[O]=U[O]);var X=arguments.length-2;if(X===1)Z.children=te;else if(1<X){for(var He=Array(X),Oe=0;Oe<X;Oe++)He[Oe]=arguments[Oe+2];Z.children=He}if(N&&N.defaultProps)for(O in X=N.defaultProps,X)Z[O]===void 0&&(Z[O]=X[O]);return Re(N,ne,Z)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(N){return{$$typeof:b,render:N}},ke.isValidElement=we,ke.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ue}},ke.memo=function(N,U){return{$$typeof:w,type:N,compare:U===void 0?null:U}},ke.startTransition=function(N){var U=J.T,te={};J.T=te;try{var O=N(),Z=J.S;Z!==null&&Z(te,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(pe,fe)}catch(ne){fe(ne)}finally{U!==null&&te.types!==null&&(U.types=te.types),J.T=U}},ke.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ke.use=function(N){return J.H.use(N)},ke.useActionState=function(N,U,te){return J.H.useActionState(N,U,te)},ke.useCallback=function(N,U){return J.H.useCallback(N,U)},ke.useContext=function(N){return J.H.useContext(N)},ke.useDebugValue=function(){},ke.useDeferredValue=function(N,U){return J.H.useDeferredValue(N,U)},ke.useEffect=function(N,U){return J.H.useEffect(N,U)},ke.useEffectEvent=function(N){return J.H.useEffectEvent(N)},ke.useId=function(){return J.H.useId()},ke.useImperativeHandle=function(N,U,te){return J.H.useImperativeHandle(N,U,te)},ke.useInsertionEffect=function(N,U){return J.H.useInsertionEffect(N,U)},ke.useLayoutEffect=function(N,U){return J.H.useLayoutEffect(N,U)},ke.useMemo=function(N,U){return J.H.useMemo(N,U)},ke.useOptimistic=function(N,U){return J.H.useOptimistic(N,U)},ke.useReducer=function(N,U,te){return J.H.useReducer(N,U,te)},ke.useRef=function(N){return J.H.useRef(N)},ke.useState=function(N){return J.H.useState(N)},ke.useSyncExternalStore=function(N,U,te){return J.H.useSyncExternalStore(N,U,te)},ke.useTransition=function(){return J.H.useTransition()},ke.version="19.2.7",ke}var ch;function Wf(){return ch||(ch=1,kf.exports=ib()),kf.exports}var z=Wf();const ms=f_(z);var Nf={exports:{}},ls={},Rf={exports:{}},Tf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function ab(){return uh||(uh=1,(function(s){function i(G,re){var ue=G.length;G.push(re);e:for(;0<ue;){var fe=ue-1>>>1,Ee=G[fe];if(0<f(Ee,re))G[fe]=re,G[ue]=Ee,ue=fe;else break e}}function c(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var re=G[0],ue=G.pop();if(ue!==re){G[0]=ue;e:for(var fe=0,Ee=G.length,N=Ee>>>1;fe<N;){var U=2*(fe+1)-1,te=G[U],O=U+1,Z=G[O];if(0>f(te,ue))O<Ee&&0>f(Z,te)?(G[fe]=Z,G[O]=ue,fe=O):(G[fe]=te,G[U]=ue,fe=U);else if(O<Ee&&0>f(Z,ue))G[fe]=Z,G[O]=ue,fe=O;else break e}}return re}function f(G,re){var ue=G.sortIndex-re.sortIndex;return ue!==0?ue:G.id-re.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var _=Date,b=_.now();s.unstable_now=function(){return _.now()-b}}var E=[],w=[],y=1,v=null,S=3,I=!1,V=!1,F=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function se(G){for(var re=c(w);re!==null;){if(re.callback===null)a(w);else if(re.startTime<=G)a(w),re.sortIndex=re.expirationTime,i(E,re);else break;re=c(w)}}function oe(G){if(F=!1,se(G),!V)if(c(E)!==null)V=!0,pe||(pe=!0,W());else{var re=c(w);re!==null&&qe(oe,re.startTime-G)}}var pe=!1,J=-1,ee=5,Re=-1;function ve(){return D?!0:!(s.unstable_now()-Re<ee)}function we(){if(D=!1,pe){var G=s.unstable_now();Re=G;var re=!0;try{e:{V=!1,F&&(F=!1,H(J),J=-1),I=!0;var ue=S;try{n:{for(se(G),v=c(E);v!==null&&!(v.expirationTime>G&&ve());){var fe=v.callback;if(typeof fe=="function"){v.callback=null,S=v.priorityLevel;var Ee=fe(v.expirationTime<=G);if(G=s.unstable_now(),typeof Ee=="function"){v.callback=Ee,se(G),re=!0;break n}v===c(E)&&a(E),se(G)}else a(E);v=c(E)}if(v!==null)re=!0;else{var N=c(w);N!==null&&qe(oe,N.startTime-G),re=!1}}break e}finally{v=null,S=ue,I=!1}re=void 0}}finally{re?W():pe=!1}}}var W;if(typeof ie=="function")W=function(){ie(we)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ae=Pe.port2;Pe.port1.onmessage=we,W=function(){Ae.postMessage(null)}}else W=function(){L(we,0)};function qe(G,re){J=L(function(){G(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(G){switch(S){case 1:case 2:case 3:var re=3;break;default:re=S}var ue=S;S=re;try{return G()}finally{S=ue}},s.unstable_requestPaint=function(){D=!0},s.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ue=S;S=G;try{return re()}finally{S=ue}},s.unstable_scheduleCallback=function(G,re,ue){var fe=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?fe+ue:fe):ue=fe,G){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ue+Ee,G={id:y++,callback:re,priorityLevel:G,startTime:ue,expirationTime:Ee,sortIndex:-1},ue>fe?(G.sortIndex=ue,i(w,G),c(E)===null&&G===c(w)&&(F?(H(J),J=-1):F=!0,qe(oe,ue-fe))):(G.sortIndex=Ee,i(E,G),V||I||(V=!0,pe||(pe=!0,W()))),G},s.unstable_shouldYield=ve,s.unstable_wrapCallback=function(G){var re=S;return function(){var ue=S;S=re;try{return G.apply(this,arguments)}finally{S=ue}}}})(Tf)),Tf}var fh;function sb(){return fh||(fh=1,Rf.exports=ab()),Rf.exports}var Mf={exports:{}},Xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function ob(){if(dh)return Xn;dh=1;var s=Wf();function i(E){var w="https://react.dev/errors/"+E;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)w+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+E+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(E,w,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:E,containerInfo:w,implementation:y}}var _=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(E,w){if(E==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Xn.createPortal=function(E,w){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(i(299));return p(E,w,null,y)},Xn.flushSync=function(E){var w=_.T,y=a.p;try{if(_.T=null,a.p=2,E)return E()}finally{_.T=w,a.p=y,a.d.f()}},Xn.preconnect=function(E,w){typeof E=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,a.d.C(E,w))},Xn.prefetchDNS=function(E){typeof E=="string"&&a.d.D(E)},Xn.preinit=function(E,w){if(typeof E=="string"&&w&&typeof w.as=="string"){var y=w.as,v=b(y,w.crossOrigin),S=typeof w.integrity=="string"?w.integrity:void 0,I=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;y==="style"?a.d.S(E,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:I}):y==="script"&&a.d.X(E,{crossOrigin:v,integrity:S,fetchPriority:I,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Xn.preinitModule=function(E,w){if(typeof E=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var y=b(w.as,w.crossOrigin);a.d.M(E,{crossOrigin:y,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&a.d.M(E)},Xn.preload=function(E,w){if(typeof E=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var y=w.as,v=b(y,w.crossOrigin);a.d.L(E,y,{crossOrigin:v,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Xn.preloadModule=function(E,w){if(typeof E=="string")if(w){var y=b(w.as,w.crossOrigin);a.d.m(E,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:y,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else a.d.m(E)},Xn.requestFormReset=function(E){a.d.r(E)},Xn.unstable_batchedUpdates=function(E,w){return E(w)},Xn.useFormState=function(E,w,y){return _.H.useFormState(E,w,y)},Xn.useFormStatus=function(){return _.H.useHostTransitionStatus()},Xn.version="19.2.7",Xn}var mh;function cb(){if(mh)return Mf.exports;mh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Mf.exports=ob(),Mf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function ub(){if(ph)return ls;ph=1;var s=sb(),i=Wf(),c=cb();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(a(188))}function w(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return E(l),e;if(o===r)return E(l),n;o=o.sibling}throw Error(a(188))}if(t.return!==r.return)t=l,r=o;else{for(var m=!1,g=l.child;g;){if(g===t){m=!0,t=l,r=o;break}if(g===r){m=!0,r=l,t=o;break}g=g.sibling}if(!m){for(g=o.child;g;){if(g===t){m=!0,t=o,r=l;break}if(g===r){m=!0,r=o,t=l;break}g=g.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),ve=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case L:return"Profiler";case D:return"StrictMode";case oe:return"Suspense";case pe:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case ie:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case se:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case ee:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var qe=Array.isArray,G=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},fe=[],Ee=-1;function N(e){return{current:e}}function U(e){0>Ee||(e.current=fe[Ee],fe[Ee]=null,Ee--)}function te(e,n){Ee++,fe[Ee]=e.current,e.current=n}var O=N(null),Z=N(null),ne=N(null),X=N(null);function He(e,n){switch(te(ne,n),te(Z,e),te(O,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Mp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Mp(n),e=jp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(O),te(O,e)}function Oe(){U(O),U(Z),U(ne)}function Qn(e){e.memoizedState!==null&&te(X,e);var n=O.current,t=jp(n,e.type);n!==t&&(te(Z,e),te(O,t))}function Kt(e){Z.current===e&&(U(O),U(Z)),X.current===e&&(U(X),Ja._currentValue=ue)}var xe,wn;function Mn(e){if(xe===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xe=n&&n[1]||"",wn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xe+e+wn}var ze=!1;function jn(e,n){if(!e||ze)return"";ze=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(Y){var B=Y}Reflect.construct(e,[],K)}else{try{K.call()}catch(Y){B=Y}e.call(K.prototype)}}else{try{throw Error()}catch(Y){B=Y}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(Y){if(Y&&B&&typeof Y.stack=="string")return[Y.stack,B.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),m=o[0],g=o[1];if(m&&g){var k=m.split(`
`),C=g.split(`
`);for(l=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(r===k.length||l===C.length)for(r=k.length-1,l=C.length-1;1<=r&&0<=l&&k[r]!==C[l];)l--;for(;1<=r&&0<=l;r--,l--)if(k[r]!==C[l]){if(r!==1||l!==1)do if(r--,l--,0>l||k[r]!==C[l]){var P=`
`+k[r].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=r&&0<=l);break}}}finally{ze=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Mn(t):""}function Yt(e,n){switch(e.tag){case 26:case 27:case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return e.child!==n&&n!==null?Mn("Suspense Fallback"):Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 15:return jn(e.type,!1);case 11:return jn(e.type.render,!1);case 1:return jn(e.type,!0);case 31:return Mn("Activity");default:return""}}function Yn(e){try{var n="",t=null;do n+=Yt(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ur=Object.prototype.hasOwnProperty,Hr=s.unstable_scheduleCallback,St=s.unstable_cancelCallback,di=s.unstable_shouldYield,Gr=s.unstable_requestPaint,En=s.unstable_now,Ml=s.unstable_getCurrentPriorityLevel,jl=s.unstable_ImmediatePriority,ua=s.unstable_UserBlockingPriority,Dl=s.unstable_NormalPriority,Zn=s.unstable_LowPriority,ft=s.unstable_IdlePriority,Qt=s.log,mi=s.unstable_setDisableYieldValue,Al=null,Sn=null;function dt(e){if(typeof Qt=="function"&&mi(e),Sn&&typeof Sn.setStrictMode=="function")try{Sn.setStrictMode(Al,e)}catch{}}var On=Math.clz32?Math.clz32:cr,Ir=Math.log,or=Math.LN2;function cr(e){return e>>>=0,e===0?32:31-(Ir(e)/or|0)|0}var mt=256,$n=262144,Ye=4194304;function on(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tn(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var g=r&134217727;return g!==0?(r=g&~o,r!==0?l=on(r):(m&=g,m!==0?l=on(m):t||(t=g&~e,t!==0&&(l=on(t))))):(g=r&~o,g!==0?l=on(g):m!==0?l=on(m):t||(t=r&~e,t!==0&&(l=on(t)))),l===0?0:n!==0&&n!==l&&(n&o)===0&&(o=l&-l,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:l}function Cn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function yc(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ol(){var e=Ye;return Ye<<=1,(Ye&62914560)===0&&(Ye=4194304),e}function Zt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Cl(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ur(e,n,t,r,l,o){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var g=e.entanglements,k=e.expirationTimes,C=e.hiddenUpdates;for(t=m&~t;0<t;){var P=31-On(t),K=1<<P;g[P]=0,k[P]=-1;var B=C[P];if(B!==null)for(C[P]=null,P=0;P<B.length;P++){var Y=B[P];Y!==null&&(Y.lane&=-536870913)}t&=~K}r!==0&&bs(e,r,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~n))}function bs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-On(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function pi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-On(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function ys(e,n){var t=n&-n;return t=(t&42)!==0?1:Vr(t),(t&(e.suspendedLanes|n))!==0?0:t}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cn(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Jp(e.type))}function fa(e,n){var t=re.p;try{return re.p=e,n()}finally{re.p=t}}var Ln=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ln,kn="__reactProps$"+Ln,pt="__reactContainer$"+Ln,Ll="__reactEvents$"+Ln,Nt="__reactListeners$"+Ln,fr="__reactHandles$"+Ln,Yr="__reactResources$"+Ln,Wn="__reactMarker$"+Ln;function Wt(e){delete e[pn],delete e[kn],delete e[Ll],delete e[Nt],delete e[fr]}function Rt(e){var n=e[pn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[pt]||t[pn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=zp(e);e!==null;){if(t=e[pn])return t;e=zp(e)}return n}e=t,t=e.parentNode}return null}function tt(e){if(e=e[pn]||e[pt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function dr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Jn(e){var n=e[Yr];return n||(n=e[Yr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Wn]=!0}var Jt=new Set,mr={};function rt(e,n){pr(e,n),pr(e+"Capture",n)}function pr(e,n){for(mr[e]=n,e=0;e<n.length;e++)Jt.add(n[e])}var Bl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zl={},Ul={};function $r(e){return Ur.call(Ul,e)?!0:Ur.call(zl,e)?!1:Bl.test(e)?Ul[e]=!0:(zl[e]=!0,!1)}function $t(e,n,t){if($r(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function _e(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function ht(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vc(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){t=""+m,o.call(this,m)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function da(e){if(!e._valueTracker){var n=vs(e)?"checked":"value";e._valueTracker=vc(e,n,""+e[n])}}function Pr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=vs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Pt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tt=/[\n"\\]/g;function Pn(e){return e.replace(Tt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function qn(e,n,t,r,l,o,m,g){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+lt(n)):e.value!==""+lt(n)&&(e.value=""+lt(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?ma(e,m,lt(n)):t!=null?ma(e,m,lt(t)):r!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+lt(g):e.removeAttribute("name")}function xs(e,n,t,r,l,o,m,g){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){da(e);return}t=t!=null?""+lt(t):"",n=n!=null?""+lt(n):t,g||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=g?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),da(e)}function ma(e,n,t){n==="number"&&Pt(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function hr(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+lt(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function hi(e,n,t){if(n!=null&&(n=""+lt(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+lt(t):""}function $(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(a(92));if(qe(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=lt(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),da(e)}function qr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var xc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ws(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||xc.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Fr(e,n,t){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&t[l]!==r&&ws(e,l,r)}else for(var o in n)n.hasOwnProperty(o)&&ws(e,o,n[o])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Es=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return gi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Mt(){}var Xr=null;function _r(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,Qr=null;function Ss(e){var n=tt(e);if(n&&(e=n.stateNode)){var t=e[kn]||null;e:switch(e=n.stateNode,n.type){case"input":if(qn(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Pn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=r[kn]||null;if(!l)throw Error(a(90));qn(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&Pr(r)}break e;case"textarea":hi(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&hr(e,!!t.multiple,n,!1)}}}var bi=!1;function ks(e,n,t){if(bi)return e(n,t);bi=!0;try{var r=e(n);return r}finally{if(bi=!1,(Kr!==null||Qr!==null)&&(jo(),Kr&&(n=Kr,e=Qr,Qr=Kr=null,Ss(n),e)))for(n=0;n<e.length;n++)Ss(e[n])}}function Zr(e,n){var t=e.stateNode;if(t===null)return null;var r=t[kn]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gr=!1;if(Dn)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){gr=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{gr=!1}var un=null,yi=null,Wr=null;function Nn(){if(Wr)return Wr;var e,n=yi,t=n.length,r,l="value"in un?un.value:un.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var m=t-e;for(r=1;r<=m&&n[t-r]===l[o-r];r++);return Wr=l.slice(e,1<r?1-r:void 0)}function er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function Ns(){return!1}function gn(e){function n(t,r,l,o,m){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(t=e[g],this[g]=t?t(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vi:Ns,this.isPropagationStopped=Ns,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=gn(br),nr=v({},br,{view:0,detail:0}),xi=gn(nr),wi,Il,Vl,Ei=v({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vl&&(Vl&&e.type==="mousemove"?(wi=e.screenX-Vl.screenX,Il=e.screenY-Vl.screenY):Il=wi=0,Vl=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Rs=gn(Ei),jt=v({},Ei,{dataTransfer:0}),fn=gn(jt),pa=v({},nr,{relatedTarget:0}),yr=gn(pa),Ts=v({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Ms=gn(Ts),js=v({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wc=gn(js),Ec=v({},br,{data:0}),Ds=gn(Ec),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Os={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ha={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ha[e])?!!n[e]:!1}function Si(){return Sc}var Cs=v({},nr,{key:function(e){if(e.key){var n=As[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Os[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Si,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ls=gn(Cs),kc=v({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=gn(kc),zs=v({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Si}),_a=gn(zs),Nc=v({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rc=gn(Nc),Tc=v({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mc=gn(Tc),jc=v({},br,{newState:0,oldState:0}),Dc=gn(jc),Ac=[9,13,27,32],ga=Dn&&"CompositionEvent"in window,Yl=null;Dn&&"documentMode"in document&&(Yl=document.documentMode);var Oc=Dn&&"TextEvent"in window&&!Yl,Us=Dn&&(!ga||Yl&&8<Yl&&11>=Yl),vr=" ",Hs=!1;function ba(e,n){switch(e){case"keyup":return Ac.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function Gs(e,n){switch(e){case"compositionend":return ya(n);case"keypress":return n.which!==32?null:(Hs=!0,vr);case"textInput":return e=n.data,e===vr&&Hs?null:e;default:return null}}function Cc(e,n){if(Jr)return e==="compositionend"||!ga&&ba(e,n)?(e=Nn(),Wr=yi=un=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Us&&n.locale!=="ko"?null:n.data;default:return null}}var Lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function va(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lc[e.type]:n==="textarea"}function Is(e,n,t,r){Kr?Qr?Qr.push(r):Qr=[r]:Kr=r,n=zo(n,"onChange"),0<n.length&&(t=new Gl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var $l=null,Pl=null;function Bc(e){Ep(e,0)}function ki(e){var n=dr(e);if(Pr(n))return e}function Vs(e,n){if(e==="change")return n}var Ys=!1;if(Dn){var ql;if(Dn){var it="oninput"in document;if(!it){var xa=document.createElement("div");xa.setAttribute("oninput","return;"),it=typeof xa.oninput=="function"}ql=it}else ql=!1;Ys=ql&&(!document.documentMode||9<document.documentMode)}function $s(){$l&&($l.detachEvent("onpropertychange",Ps),Pl=$l=null)}function Ps(e){if(e.propertyName==="value"&&ki(Pl)){var n=[];Is(n,Pl,e,_r(e)),ks(Bc,n)}}function wa(e,n,t){e==="focusin"?($s(),$l=n,Pl=t,$l.attachEvent("onpropertychange",Ps)):e==="focusout"&&$s()}function Ni(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Pl)}function Ea(e,n){if(e==="click")return ki(n)}function qs(e,n){if(e==="input"||e==="change")return ki(n)}function Ri(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bn=typeof Object.is=="function"?Object.is:Ri;function el(e,n){if(Bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ur.call(n,l)||!Bn(e[l],n[l]))return!1}return!0}function Fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xs(e,n){var t=Fs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fs(t)}}function Ks(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ks(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function d(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Pt(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pt(e.document)}return n}function h(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var x=Dn&&"documentMode"in document&&11>=document.documentMode,T=null,M=null,Q=null,ce=!1;function Ge(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ce||T==null||T!==Pt(r)||(r=T,"selectionStart"in r&&h(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Q&&el(Q,r)||(Q=r,r=zo(M,"onSelect"),0<r.length&&(n=new Gl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=T)))}function be(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ce={animationend:be("Animation","AnimationEnd"),animationiteration:be("Animation","AnimationIteration"),animationstart:be("Animation","AnimationStart"),transitionrun:be("Transition","TransitionRun"),transitionstart:be("Transition","TransitionStart"),transitioncancel:be("Transition","TransitionCancel"),transitionend:be("Transition","TransitionEnd")},an={},Fn={};Dn&&(Fn=document.createElement("div").style,"AnimationEvent"in window||(delete Ce.animationend.animation,delete Ce.animationiteration.animation,delete Ce.animationstart.animation),"TransitionEvent"in window||delete Ce.transitionend.transition);function Se(e){if(an[e])return an[e];if(!Ce[e])return e;var n=Ce[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Fn)return an[e]=n[t];return e}var Je=Se("animationend"),tr=Se("animationiteration"),Dt=Se("animationstart"),qt=Se("transitionrun"),nl=Se("transitionstart"),tl=Se("transitioncancel"),Sa=Se("transitionend"),Fl=new Map,Xl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xl.push("scrollEnd");function zn(e,n){Fl.set(e,n),rt(n,[e])}var Kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],Ti=0,zc=0;function Qs(){for(var e=Ti,n=zc=Ti=0;n<e;){var t=At[n];At[n++]=null;var r=At[n];At[n++]=null;var l=At[n];At[n++]=null;var o=At[n];if(At[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}o!==0&&ld(t,l,o)}}function Zs(e,n,t,r){At[Ti++]=e,At[Ti++]=n,At[Ti++]=t,At[Ti++]=r,zc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Uc(e,n,t,r){return Zs(e,n,t,r),Ws(e)}function Ql(e,n){return Zs(e,null,null,n),Ws(e)}function ld(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,r=o.alternate,r!==null&&(r.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&n!==null&&(l=31-On(t),e=o.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=t|536870912),o):null}function Ws(e){if(50<qa)throw qa=0,Fu=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Mi={};function U_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,n,t,r){return new U_(e,n,t,r)}function Hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xr(e,n){var t=e.alternate;return t===null?(t=_t(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function id(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Js(e,n,t,r,l,o){var m=0;if(r=e,typeof e=="function")Hc(e)&&(m=1);else if(typeof e=="string")m=Yg(e,t,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=_t(31,t,n,l),e.elementType=Re,e.lanes=o,e;case F:return Zl(t.children,l,o,n);case D:m=8,l|=24;break;case L:return e=_t(12,t,n,l|2),e.elementType=L,e.lanes=o,e;case oe:return e=_t(13,t,n,l),e.elementType=oe,e.lanes=o,e;case pe:return e=_t(19,t,n,l),e.elementType=pe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ie:m=10;break e;case H:m=9;break e;case se:m=11;break e;case J:m=14;break e;case ee:m=16,r=null;break e}m=29,t=Error(a(130,e===null?"null":typeof e,"")),r=null}return n=_t(m,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Zl(e,n,t,r){return e=_t(7,e,r,n),e.lanes=t,e}function Gc(e,n,t){return e=_t(6,e,null,n),e.lanes=t,e}function ad(e){var n=_t(18,null,null,0);return n.stateNode=e,n}function Ic(e,n,t){return n=_t(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var sd=new WeakMap;function Ot(e,n){if(typeof e=="object"&&e!==null){var t=sd.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Yn(n)},sd.set(e,n),n)}return{value:e,source:n,stack:Yn(n)}}var ji=[],Di=0,eo=null,ka=0,Ct=[],Lt=0,rl=null,rr=1,lr="";function wr(e,n){ji[Di++]=ka,ji[Di++]=eo,eo=e,ka=n}function od(e,n,t){Ct[Lt++]=rr,Ct[Lt++]=lr,Ct[Lt++]=rl,rl=e;var r=rr;e=lr;var l=32-On(r)-1;r&=~(1<<l),t+=1;var o=32-On(n)+l;if(30<o){var m=l-l%5;o=(r&(1<<m)-1).toString(32),r>>=m,l-=m,rr=1<<32-On(n)+l|t<<l|r,lr=o+e}else rr=1<<o|t<<l|r,lr=e}function Vc(e){e.return!==null&&(wr(e,1),od(e,1,0))}function Yc(e){for(;e===eo;)eo=ji[--Di],ji[Di]=null,ka=ji[--Di],ji[Di]=null;for(;e===rl;)rl=Ct[--Lt],Ct[Lt]=null,lr=Ct[--Lt],Ct[Lt]=null,rr=Ct[--Lt],Ct[Lt]=null}function cd(e,n){Ct[Lt++]=rr,Ct[Lt++]=lr,Ct[Lt++]=rl,rr=n.id,lr=n.overflow,rl=e}var Un=null,en=null,Ue=!1,ll=null,Bt=!1,$c=Error(a(519));function il(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Na(Ot(n,e)),$c}function ud(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[pn]=e,n[kn]=r,t){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(t=0;t<Xa.length;t++)De(Xa[t],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),xs(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),$(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||Rp(n.textContent,t)?(r.popover!=null&&(De("beforetoggle",n),De("toggle",n)),r.onScroll!=null&&De("scroll",n),r.onScrollEnd!=null&&De("scrollend",n),r.onClick!=null&&(n.onclick=Mt),n=!0):n=!1,n||il(e,!0)}function fd(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:Un=Un.return}}function Ai(e){if(e!==Un)return!1;if(!Ue)return fd(e),Ue=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||cf(e.type,e.memoizedProps)),t=!t),t&&en&&il(e),fd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));en=Bp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));en=Bp(e)}else n===27?(n=en,yl(e.type)?(e=pf,pf=null,en=e):en=n):en=Un?Ut(e.stateNode.nextSibling):null;return!0}function Wl(){en=Un=null,Ue=!1}function Pc(){var e=ll;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ll=null),e}function Na(e){ll===null?ll=[e]:ll.push(e)}var qc=N(null),Jl=null,Er=null;function al(e,n,t){te(qc,n._currentValue),n._currentValue=t}function Sr(e){e._currentValue=qc.current,U(qc)}function Fc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Xc(e,n,t,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var m=l.child;o=o.firstContext;e:for(;o!==null;){var g=o;o=l;for(var k=0;k<n.length;k++)if(g.context===n[k]){o.lanes|=t,g=o.alternate,g!==null&&(g.lanes|=t),Fc(o.return,t,e),r||(m=null);break e}o=g.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(a(341));m.lanes|=t,o=m.alternate,o!==null&&(o.lanes|=t),Fc(m,t,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Oi(e,n,t,r){e=null;for(var l=n,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var g=l.type;Bn(l.pendingProps.value,m.value)||(e!==null?e.push(g):e=[g])}}else if(l===X.current){if(m=l.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ja):e=[Ja])}l=l.return}e!==null&&Xc(n,e,t,r),n.flags|=262144}function no(e){for(e=e.firstContext;e!==null;){if(!Bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ei(e){Jl=e,Er=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return dd(Jl,e)}function to(e,n){return Jl===null&&ei(e),dd(e,n)}function dd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Er===null){if(e===null)throw Error(a(308));Er=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Er=Er.next=n;return t}var H_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},G_=s.unstable_scheduleCallback,I_=s.unstable_NormalPriority,bn={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kc(){return{controller:new H_,data:new Map,refCount:0}}function Ra(e){e.refCount--,e.refCount===0&&G_(I_,function(){e.controller.abort()})}var Ta=null,Qc=0,Ci=0,Li=null;function V_(e,n){if(Ta===null){var t=Ta=[];Qc=0,Ci=Ju(),Li={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Qc++,n.then(md,md),n}function md(){if(--Qc===0&&Ta!==null){Li!==null&&(Li.status="fulfilled");var e=Ta;Ta=null,Ci=0,Li=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Y_(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var pd=G.S;G.S=function(e,n){Zm=En(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&V_(e,n),pd!==null&&pd(e,n)};var ni=N(null);function Zc(){var e=ni.current;return e!==null?e:We.pooledCache}function ro(e,n){n===null?te(ni,ni.current):te(ni,n.pool)}function hd(){var e=Zc();return e===null?null:{parent:bn._currentValue,pool:e}}var Bi=Error(a(460)),Wc=Error(a(474)),lo=Error(a(542)),io={then:function(){}};function _d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Mt,Mt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yd(e),e;default:if(typeof n.status=="string")n.then(Mt,Mt);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yd(e),e}throw ri=n,Bi}}function ti(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ri=t,Bi):t}}var ri=null;function bd(){if(ri===null)throw Error(a(459));var e=ri;return ri=null,e}function yd(e){if(e===Bi||e===lo)throw Error(a(483))}var zi=null,Ma=0;function ao(e){var n=Ma;return Ma+=1,zi===null&&(zi=[]),gd(zi,e,n)}function ja(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function so(e,n){throw n.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vd(e){function n(j,R){if(e){var A=j.deletions;A===null?(j.deletions=[R],j.flags|=16):A.push(R)}}function t(j,R){if(!e)return null;for(;R!==null;)n(j,R),R=R.sibling;return null}function r(j){for(var R=new Map;j!==null;)j.key!==null?R.set(j.key,j):R.set(j.index,j),j=j.sibling;return R}function l(j,R){return j=xr(j,R),j.index=0,j.sibling=null,j}function o(j,R,A){return j.index=A,e?(A=j.alternate,A!==null?(A=A.index,A<R?(j.flags|=67108866,R):A):(j.flags|=67108866,R)):(j.flags|=1048576,R)}function m(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function g(j,R,A,q){return R===null||R.tag!==6?(R=Gc(A,j.mode,q),R.return=j,R):(R=l(R,A),R.return=j,R)}function k(j,R,A,q){var ge=A.type;return ge===F?P(j,R,A.props.children,q,A.key):R!==null&&(R.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===ee&&ti(ge)===R.type)?(R=l(R,A.props),ja(R,A),R.return=j,R):(R=Js(A.type,A.key,A.props,null,j.mode,q),ja(R,A),R.return=j,R)}function C(j,R,A,q){return R===null||R.tag!==4||R.stateNode.containerInfo!==A.containerInfo||R.stateNode.implementation!==A.implementation?(R=Ic(A,j.mode,q),R.return=j,R):(R=l(R,A.children||[]),R.return=j,R)}function P(j,R,A,q,ge){return R===null||R.tag!==7?(R=Zl(A,j.mode,q,ge),R.return=j,R):(R=l(R,A),R.return=j,R)}function K(j,R,A){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Gc(""+R,j.mode,A),R.return=j,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case I:return A=Js(R.type,R.key,R.props,null,j.mode,A),ja(A,R),A.return=j,A;case V:return R=Ic(R,j.mode,A),R.return=j,R;case ee:return R=ti(R),K(j,R,A)}if(qe(R)||W(R))return R=Zl(R,j.mode,A,null),R.return=j,R;if(typeof R.then=="function")return K(j,ao(R),A);if(R.$$typeof===ie)return K(j,to(j,R),A);so(j,R)}return null}function B(j,R,A,q){var ge=R!==null?R.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ge!==null?null:g(j,R,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case I:return A.key===ge?k(j,R,A,q):null;case V:return A.key===ge?C(j,R,A,q):null;case ee:return A=ti(A),B(j,R,A,q)}if(qe(A)||W(A))return ge!==null?null:P(j,R,A,q,null);if(typeof A.then=="function")return B(j,R,ao(A),q);if(A.$$typeof===ie)return B(j,R,to(j,A),q);so(j,A)}return null}function Y(j,R,A,q,ge){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return j=j.get(A)||null,g(R,j,""+q,ge);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return j=j.get(q.key===null?A:q.key)||null,k(R,j,q,ge);case V:return j=j.get(q.key===null?A:q.key)||null,C(R,j,q,ge);case ee:return q=ti(q),Y(j,R,A,q,ge)}if(qe(q)||W(q))return j=j.get(A)||null,P(R,j,q,ge,null);if(typeof q.then=="function")return Y(j,R,A,ao(q),ge);if(q.$$typeof===ie)return Y(j,R,A,to(R,q),ge);so(R,q)}return null}function de(j,R,A,q){for(var ge=null,Ie=null,he=R,Me=R=0,Be=null;he!==null&&Me<A.length;Me++){he.index>Me?(Be=he,he=null):Be=he.sibling;var Ve=B(j,he,A[Me],q);if(Ve===null){he===null&&(he=Be);break}e&&he&&Ve.alternate===null&&n(j,he),R=o(Ve,R,Me),Ie===null?ge=Ve:Ie.sibling=Ve,Ie=Ve,he=Be}if(Me===A.length)return t(j,he),Ue&&wr(j,Me),ge;if(he===null){for(;Me<A.length;Me++)he=K(j,A[Me],q),he!==null&&(R=o(he,R,Me),Ie===null?ge=he:Ie.sibling=he,Ie=he);return Ue&&wr(j,Me),ge}for(he=r(he);Me<A.length;Me++)Be=Y(he,j,Me,A[Me],q),Be!==null&&(e&&Be.alternate!==null&&he.delete(Be.key===null?Me:Be.key),R=o(Be,R,Me),Ie===null?ge=Be:Ie.sibling=Be,Ie=Be);return e&&he.forEach(function(Sl){return n(j,Sl)}),Ue&&wr(j,Me),ge}function ye(j,R,A,q){if(A==null)throw Error(a(151));for(var ge=null,Ie=null,he=R,Me=R=0,Be=null,Ve=A.next();he!==null&&!Ve.done;Me++,Ve=A.next()){he.index>Me?(Be=he,he=null):Be=he.sibling;var Sl=B(j,he,Ve.value,q);if(Sl===null){he===null&&(he=Be);break}e&&he&&Sl.alternate===null&&n(j,he),R=o(Sl,R,Me),Ie===null?ge=Sl:Ie.sibling=Sl,Ie=Sl,he=Be}if(Ve.done)return t(j,he),Ue&&wr(j,Me),ge;if(he===null){for(;!Ve.done;Me++,Ve=A.next())Ve=K(j,Ve.value,q),Ve!==null&&(R=o(Ve,R,Me),Ie===null?ge=Ve:Ie.sibling=Ve,Ie=Ve);return Ue&&wr(j,Me),ge}for(he=r(he);!Ve.done;Me++,Ve=A.next())Ve=Y(he,j,Me,Ve.value,q),Ve!==null&&(e&&Ve.alternate!==null&&he.delete(Ve.key===null?Me:Ve.key),R=o(Ve,R,Me),Ie===null?ge=Ve:Ie.sibling=Ve,Ie=Ve);return e&&he.forEach(function(eb){return n(j,eb)}),Ue&&wr(j,Me),ge}function Ze(j,R,A,q){if(typeof A=="object"&&A!==null&&A.type===F&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case I:e:{for(var ge=A.key;R!==null;){if(R.key===ge){if(ge=A.type,ge===F){if(R.tag===7){t(j,R.sibling),q=l(R,A.props.children),q.return=j,j=q;break e}}else if(R.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===ee&&ti(ge)===R.type){t(j,R.sibling),q=l(R,A.props),ja(q,A),q.return=j,j=q;break e}t(j,R);break}else n(j,R);R=R.sibling}A.type===F?(q=Zl(A.props.children,j.mode,q,A.key),q.return=j,j=q):(q=Js(A.type,A.key,A.props,null,j.mode,q),ja(q,A),q.return=j,j=q)}return m(j);case V:e:{for(ge=A.key;R!==null;){if(R.key===ge)if(R.tag===4&&R.stateNode.containerInfo===A.containerInfo&&R.stateNode.implementation===A.implementation){t(j,R.sibling),q=l(R,A.children||[]),q.return=j,j=q;break e}else{t(j,R);break}else n(j,R);R=R.sibling}q=Ic(A,j.mode,q),q.return=j,j=q}return m(j);case ee:return A=ti(A),Ze(j,R,A,q)}if(qe(A))return de(j,R,A,q);if(W(A)){if(ge=W(A),typeof ge!="function")throw Error(a(150));return A=ge.call(A),ye(j,R,A,q)}if(typeof A.then=="function")return Ze(j,R,ao(A),q);if(A.$$typeof===ie)return Ze(j,R,to(j,A),q);so(j,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,R!==null&&R.tag===6?(t(j,R.sibling),q=l(R,A),q.return=j,j=q):(t(j,R),q=Gc(A,j.mode,q),q.return=j,j=q),m(j)):t(j,R)}return function(j,R,A,q){try{Ma=0;var ge=Ze(j,R,A,q);return zi=null,ge}catch(he){if(he===Bi||he===lo)throw he;var Ie=_t(29,he,null,j.mode);return Ie.lanes=q,Ie.return=j,Ie}finally{}}}var li=vd(!0),xd=vd(!1),sl=!1;function Jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ol(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($e&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Ws(e),ld(e,null,t),n}return Zs(e,r,n,t),Ws(e)}function Da(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pi(e,t)}}function nu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=m:o=o.next=m,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var tu=!1;function Aa(){if(tu){var e=Li;if(e!==null)throw e}}function Oa(e,n,t,r){tu=!1;var l=e.updateQueue;sl=!1;var o=l.firstBaseUpdate,m=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var k=g,C=k.next;k.next=null,m===null?o=C:m.next=C,m=k;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==m&&(g===null?P.firstBaseUpdate=C:g.next=C,P.lastBaseUpdate=k))}if(o!==null){var K=l.baseState;m=0,P=C=k=null,g=o;do{var B=g.lane&-536870913,Y=B!==g.lane;if(Y?(Le&B)===B:(r&B)===B){B!==0&&B===Ci&&(tu=!0),P!==null&&(P=P.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var de=e,ye=g;B=n;var Ze=t;switch(ye.tag){case 1:if(de=ye.payload,typeof de=="function"){K=de.call(Ze,K,B);break e}K=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=ye.payload,B=typeof de=="function"?de.call(Ze,K,B):de,B==null)break e;K=v({},K,B);break e;case 2:sl=!0}}B=g.callback,B!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[B]:Y.push(B))}else Y={lane:B,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(C=P=Y,k=K):P=P.next=Y,m|=B;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;Y=g,g=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);P===null&&(k=K),l.baseState=k,l.firstBaseUpdate=C,l.lastBaseUpdate=P,o===null&&(l.shared.lanes=0),pl|=m,e.lanes=m,e.memoizedState=K}}function wd(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Ed(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)wd(t[e],n)}var Ui=N(null),oo=N(0);function Sd(e,n){e=Or,te(oo,e),te(Ui,n),Or=e|n.baseLanes}function ru(){te(oo,Or),te(Ui,Ui.current)}function lu(){Or=oo.current,U(Ui),U(oo)}var gt=N(null),zt=null;function ul(e){var n=e.alternate;te(hn,hn.current&1),te(gt,e),zt===null&&(n===null||Ui.current!==null||n.memoizedState!==null)&&(zt=e)}function iu(e){te(hn,hn.current),te(gt,e),zt===null&&(zt=e)}function kd(e){e.tag===22?(te(hn,hn.current),te(gt,e),zt===null&&(zt=e)):fl()}function fl(){te(hn,hn.current),te(gt,gt.current)}function bt(e){U(gt),zt===e&&(zt=null),U(hn)}var hn=N(0);function co(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||df(t)||mf(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var kr=0,Te=null,Ke=null,yn=null,uo=!1,Hi=!1,ii=!1,fo=0,Ca=0,Gi=null,$_=0;function dn(){throw Error(a(321))}function au(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Bn(e[t],n[t]))return!1;return!0}function su(e,n,t,r,l,o){return kr=o,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?om:wu,ii=!1,o=t(r,l),ii=!1,Hi&&(o=Rd(n,t,r,l)),Nd(e),o}function Nd(e){G.H=za;var n=Ke!==null&&Ke.next!==null;if(kr=0,yn=Ke=Te=null,uo=!1,Ca=0,Gi=null,n)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&no(e)&&(vn=!0))}function Rd(e,n,t,r){Te=e;var l=0;do{if(Hi&&(Gi=null),Ca=0,Hi=!1,25<=l)throw Error(a(301));if(l+=1,yn=Ke=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}G.H=cm,o=n(t,r)}while(Hi);return o}function P_(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?La(n):n,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(Te.flags|=1024),n}function ou(){var e=fo!==0;return fo=0,e}function cu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function uu(e){if(uo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}uo=!1}kr=0,yn=Ke=Te=null,Hi=!1,Ca=fo=0,Gi=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Te.memoizedState=yn=e:yn=yn.next=e,yn}function _n(){if(Ke===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var n=yn===null?Te.memoizedState:yn.next;if(n!==null)yn=n,Ke=e;else{if(e===null)throw Te.alternate===null?Error(a(467)):Error(a(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},yn===null?Te.memoizedState=yn=e:yn=yn.next=e}return yn}function mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function La(e){var n=Ca;return Ca+=1,Gi===null&&(Gi=[]),e=gd(Gi,e,n),n=Te,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?om:wu),e}function po(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return La(e);if(e.$$typeof===ie)return Hn(e)}throw Error(a(438,String(e)))}function fu(e){var n=null,t=Te.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=Te.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=mo(),Te.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=ve;return n.index++,t}function Nr(e,n){return typeof n=="function"?n(e):n}function ho(e){var n=_n();return du(n,Ke,e)}function du(e,n,t){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=e.baseQueue,o=r.pending;if(o!==null){if(l!==null){var m=l.next;l.next=o.next,o.next=m}n.baseQueue=l=o,r.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{n=l.next;var g=m=null,k=null,C=n,P=!1;do{var K=C.lane&-536870913;if(K!==C.lane?(Le&K)===K:(kr&K)===K){var B=C.revertLane;if(B===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),K===Ci&&(P=!0);else if((kr&B)===B){C=C.next,B===Ci&&(P=!0);continue}else K={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},k===null?(g=k=K,m=o):k=k.next=K,Te.lanes|=B,pl|=B;K=C.action,ii&&t(o,K),o=C.hasEagerState?C.eagerState:t(o,K)}else B={lane:K,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},k===null?(g=k=B,m=o):k=k.next=B,Te.lanes|=K,pl|=K;C=C.next}while(C!==null&&C!==n);if(k===null?m=o:k.next=g,!Bn(o,e.memoizedState)&&(vn=!0,P&&(t=Li,t!==null)))throw t;e.memoizedState=o,e.baseState=m,e.baseQueue=k,r.lastRenderedState=o}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function mu(e){var n=_n(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var m=l=l.next;do o=e(o,m.action),m=m.next;while(m!==l);Bn(o,n.memoizedState)||(vn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Td(e,n,t){var r=Te,l=_n(),o=Ue;if(o){if(t===void 0)throw Error(a(407));t=t()}else t=n();var m=!Bn((Ke||l).memoizedState,t);if(m&&(l.memoizedState=t,vn=!0),l=l.queue,_u(Dd.bind(null,r,l,e),[e]),l.getSnapshot!==n||m||yn!==null&&yn.memoizedState.tag&1){if(r.flags|=2048,Ii(9,{destroy:void 0},jd.bind(null,r,l,t,n),null),We===null)throw Error(a(349));o||(kr&127)!==0||Md(r,n,t)}return t}function Md(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Te.updateQueue,n===null?(n=mo(),Te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function jd(e,n,t,r){n.value=t,n.getSnapshot=r,Ad(n)&&Od(e)}function Dd(e,n,t){return t(function(){Ad(n)&&Od(e)})}function Ad(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Bn(e,t)}catch{return!0}}function Od(e){var n=Ql(e,2);n!==null&&ut(n,e,2)}function pu(e){var n=et();if(typeof e=="function"){var t=e;if(e=t(),ii){dt(!0);try{t()}finally{dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},n}function Cd(e,n,t,r){return e.baseState=t,du(e,Ke,typeof r=="function"?r:Nr)}function q_(e,n,t,r,l){if(bo(e))throw Error(a(485));if(e=n.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};G.T!==null?t(!0):o.isTransition=!1,r(o),t=n.pending,t===null?(o.next=n.pending=o,Ld(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Ld(e,n){var t=n.action,r=n.payload,l=e.state;if(n.isTransition){var o=G.T,m={};G.T=m;try{var g=t(l,r),k=G.S;k!==null&&k(m,g),Bd(e,n,g)}catch(C){hu(e,n,C)}finally{o!==null&&m.types!==null&&(o.types=m.types),G.T=o}}else try{o=t(l,r),Bd(e,n,o)}catch(C){hu(e,n,C)}}function Bd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){zd(e,n,r)},function(r){return hu(e,n,r)}):zd(e,n,t)}function zd(e,n,t){n.status="fulfilled",n.value=t,Ud(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Ld(e,t)))}function hu(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,Ud(n),n=n.next;while(n!==r)}e.action=null}function Ud(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hd(e,n){return n}function Gd(e,n){if(Ue){var t=We.formState;if(t!==null){e:{var r=Te;if(Ue){if(en){n:{for(var l=en,o=Bt;l.nodeType!==8;){if(!o){l=null;break n}if(l=Ut(l.nextSibling),l===null){l=null;break n}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){en=Ut(l.nextSibling),r=l.data==="F!";break e}}il(r)}r=!1}r&&(n=t[0])}}return t=et(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:n},t.queue=r,t=im.bind(null,Te,r),r.dispatch=t,r=pu(!1),o=xu.bind(null,Te,!1,r.queue),r=et(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,t=q_.bind(null,Te,l,o,t),l.dispatch=t,r.memoizedState=e,[n,t,!1]}function Id(e){var n=_n();return Vd(n,Ke,e)}function Vd(e,n,t){if(n=du(e,n,Hd)[0],e=ho(Nr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=La(n)}catch(m){throw m===Bi?lo:m}else r=n;n=_n();var l=n.queue,o=l.dispatch;return t!==n.memoizedState&&(Te.flags|=2048,Ii(9,{destroy:void 0},F_.bind(null,l,t),null)),[r,o,e]}function F_(e,n){e.action=n}function Yd(e){var n=_n(),t=Ke;if(t!==null)return Vd(n,t,e);_n(),n=n.memoizedState,t=_n();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function Ii(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=Te.updateQueue,n===null&&(n=mo(),Te.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function $d(){return _n().memoizedState}function _o(e,n,t,r){var l=et();Te.flags|=e,l.memoizedState=Ii(1|n,{destroy:void 0},t,r===void 0?null:r)}function go(e,n,t,r){var l=_n();r=r===void 0?null:r;var o=l.memoizedState.inst;Ke!==null&&r!==null&&au(r,Ke.memoizedState.deps)?l.memoizedState=Ii(n,o,t,r):(Te.flags|=e,l.memoizedState=Ii(1|n,o,t,r))}function Pd(e,n){_o(8390656,8,e,n)}function _u(e,n){go(2048,8,e,n)}function X_(e){Te.flags|=4;var n=Te.updateQueue;if(n===null)n=mo(),Te.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function qd(e){var n=_n().memoizedState;return X_({ref:n,nextImpl:e}),function(){if(($e&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Fd(e,n){return go(4,2,e,n)}function Xd(e,n){return go(4,4,e,n)}function Kd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qd(e,n,t){t=t!=null?t.concat([e]):null,go(4,4,Kd.bind(null,n,e),t)}function gu(){}function Zd(e,n){var t=_n();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&au(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Wd(e,n){var t=_n();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&au(n,r[1]))return r[0];if(r=e(),ii){dt(!0);try{e()}finally{dt(!1)}}return t.memoizedState=[r,n],r}function bu(e,n,t){return t===void 0||(kr&1073741824)!==0&&(Le&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Jm(),Te.lanes|=e,pl|=e,t)}function Jd(e,n,t,r){return Bn(t,n)?t:Ui.current!==null?(e=bu(e,t,r),Bn(e,n)||(vn=!0),e):(kr&42)===0||(kr&1073741824)!==0&&(Le&261930)===0?(vn=!0,e.memoizedState=t):(e=Jm(),Te.lanes|=e,pl|=e,n)}function em(e,n,t,r,l){var o=re.p;re.p=o!==0&&8>o?o:8;var m=G.T,g={};G.T=g,xu(e,!1,n,t);try{var k=l(),C=G.S;if(C!==null&&C(g,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var P=Y_(k,r);Ba(e,n,P,xt(e))}else Ba(e,n,r,xt(e))}catch(K){Ba(e,n,{then:function(){},status:"rejected",reason:K},xt())}finally{re.p=o,m!==null&&g.types!==null&&(m.types=g.types),G.T=m}}function K_(){}function yu(e,n,t,r){if(e.tag!==5)throw Error(a(476));var l=nm(e).queue;em(e,l,n,ue,t===null?K_:function(){return tm(e),t(r)})}function nm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:ue},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function tm(e){var n=nm(e);n.next===null&&(n=e.alternate.memoizedState),Ba(e,n.next.queue,{},xt())}function vu(){return Hn(Ja)}function rm(){return _n().memoizedState}function lm(){return _n().memoizedState}function Q_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=xt();e=ol(t);var r=cl(n,e,t);r!==null&&(ut(r,n,t),Da(r,n,t)),n={cache:Kc()},e.payload=n;return}n=n.return}}function Z_(e,n,t){var r=xt();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},bo(e)?am(n,t):(t=Uc(e,n,t,r),t!==null&&(ut(t,e,r),sm(t,n,r)))}function im(e,n,t){var r=xt();Ba(e,n,t,r)}function Ba(e,n,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(bo(e))am(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var m=n.lastRenderedState,g=o(m,t);if(l.hasEagerState=!0,l.eagerState=g,Bn(g,m))return Zs(e,n,l,0),We===null&&Qs(),!1}catch{}finally{}if(t=Uc(e,n,l,r),t!==null)return ut(t,e,r),sm(t,n,r),!0}return!1}function xu(e,n,t,r){if(r={lane:2,revertLane:Ju(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bo(e)){if(n)throw Error(a(479))}else n=Uc(e,t,r,2),n!==null&&ut(n,e,2)}function bo(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function am(e,n){Hi=uo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sm(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pi(e,t)}}var za={readContext:Hn,use:po,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};za.useEffectEvent=dn;var om={readContext:Hn,use:po,useCallback:function(e,n){return et().memoizedState=[e,n===void 0?null:n],e},useContext:Hn,useEffect:Pd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,_o(4194308,4,Kd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return _o(4194308,4,e,n)},useInsertionEffect:function(e,n){_o(4,2,e,n)},useMemo:function(e,n){var t=et();n=n===void 0?null:n;var r=e();if(ii){dt(!0);try{e()}finally{dt(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=et();if(t!==void 0){var l=t(n);if(ii){dt(!0);try{t(n)}finally{dt(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=Z_.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var n=et();return e={current:e},n.memoizedState=e},useState:function(e){e=pu(e);var n=e.queue,t=im.bind(null,Te,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:gu,useDeferredValue:function(e,n){var t=et();return bu(t,e,n)},useTransition:function(){var e=pu(!1);return e=em.bind(null,Te,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=Te,l=et();if(Ue){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),We===null)throw Error(a(349));(Le&127)!==0||Md(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Pd(Dd.bind(null,r,o,e),[e]),r.flags|=2048,Ii(9,{destroy:void 0},jd.bind(null,r,o,t,n),null),t},useId:function(){var e=et(),n=We.identifierPrefix;if(Ue){var t=lr,r=rr;t=(r&~(1<<32-On(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=fo++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=$_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:vu,useFormState:Gd,useActionState:Gd,useOptimistic:function(e){var n=et();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=xu.bind(null,Te,!0,t),t.dispatch=n,[e,n]},useMemoCache:fu,useCacheRefresh:function(){return et().memoizedState=Q_.bind(null,Te)},useEffectEvent:function(e){var n=et(),t={impl:e};return n.memoizedState=t,function(){if(($e&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}},wu={readContext:Hn,use:po,useCallback:Zd,useContext:Hn,useEffect:_u,useImperativeHandle:Qd,useInsertionEffect:Fd,useLayoutEffect:Xd,useMemo:Wd,useReducer:ho,useRef:$d,useState:function(){return ho(Nr)},useDebugValue:gu,useDeferredValue:function(e,n){var t=_n();return Jd(t,Ke.memoizedState,e,n)},useTransition:function(){var e=ho(Nr)[0],n=_n().memoizedState;return[typeof e=="boolean"?e:La(e),n]},useSyncExternalStore:Td,useId:rm,useHostTransitionStatus:vu,useFormState:Id,useActionState:Id,useOptimistic:function(e,n){var t=_n();return Cd(t,Ke,e,n)},useMemoCache:fu,useCacheRefresh:lm};wu.useEffectEvent=qd;var cm={readContext:Hn,use:po,useCallback:Zd,useContext:Hn,useEffect:_u,useImperativeHandle:Qd,useInsertionEffect:Fd,useLayoutEffect:Xd,useMemo:Wd,useReducer:mu,useRef:$d,useState:function(){return mu(Nr)},useDebugValue:gu,useDeferredValue:function(e,n){var t=_n();return Ke===null?bu(t,e,n):Jd(t,Ke.memoizedState,e,n)},useTransition:function(){var e=mu(Nr)[0],n=_n().memoizedState;return[typeof e=="boolean"?e:La(e),n]},useSyncExternalStore:Td,useId:rm,useHostTransitionStatus:vu,useFormState:Yd,useActionState:Yd,useOptimistic:function(e,n){var t=_n();return Ke!==null?Cd(t,Ke,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:fu,useCacheRefresh:lm};cm.useEffectEvent=qd;function Eu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:v({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Su={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=xt(),l=ol(r);l.payload=n,t!=null&&(l.callback=t),n=cl(e,l,r),n!==null&&(ut(n,e,r),Da(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=xt(),l=ol(r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=cl(e,l,r),n!==null&&(ut(n,e,r),Da(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xt(),r=ol(t);r.tag=2,n!=null&&(r.callback=n),n=cl(e,r,t),n!==null&&(ut(n,e,t),Da(n,e,t))}};function um(e,n,t,r,l,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,m):n.prototype&&n.prototype.isPureReactComponent?!el(t,r)||!el(l,o):!0}function fm(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Su.enqueueReplaceState(n,n.state,null)}function ai(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=v({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function dm(e){Kl(e)}function mm(e){console.error(e)}function pm(e){Kl(e)}function yo(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function hm(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ku(e,n,t){return t=ol(t),t.tag=3,t.payload={element:null},t.callback=function(){yo(e,n)},t}function _m(e){return e=ol(e),e.tag=3,e}function gm(e,n,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=r.value;e.payload=function(){return l(o)},e.callback=function(){hm(n,t,r)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){hm(n,t,r),typeof l!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})})}function W_(e,n,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&Oi(n,t,l,!0),t=gt.current,t!==null){switch(t.tag){case 31:case 13:return zt===null?Do():t.alternate===null&&mn===0&&(mn=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===io?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Qu(e,r,l)),!1;case 22:return t.flags|=65536,r===io?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Qu(e,r,l)),!1}throw Error(a(435,t.tag))}return Qu(e,r,l),Do(),!1}if(Ue)return n=gt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==$c&&(e=Error(a(422),{cause:r}),Na(Ot(e,t)))):(r!==$c&&(n=Error(a(423),{cause:r}),Na(Ot(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=Ot(r,t),l=ku(e.stateNode,r,l),nu(e,l),mn!==4&&(mn=2)),!1;var o=Error(a(520),{cause:r});if(o=Ot(o,t),Pa===null?Pa=[o]:Pa.push(o),mn!==4&&(mn=2),n===null)return!0;r=Ot(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=ku(t.stateNode,r,e),nu(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(hl===null||!hl.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=_m(l),gm(l,e,t,r),nu(t,l),!1}t=t.return}while(t!==null);return!1}var Nu=Error(a(461)),vn=!1;function Gn(e,n,t,r){n.child=e===null?xd(n,null,t,r):li(n,e.child,t,r)}function bm(e,n,t,r,l){t=t.render;var o=n.ref;if("ref"in r){var m={};for(var g in r)g!=="ref"&&(m[g]=r[g])}else m=r;return ei(n),r=su(e,n,t,m,o,l),g=ou(),e!==null&&!vn?(cu(e,n,l),Rr(e,n,l)):(Ue&&g&&Vc(n),n.flags|=1,Gn(e,n,r,l),n.child)}function ym(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Hc(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,vm(e,n,o,r,l)):(e=Js(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Cu(e,l)){var m=o.memoizedProps;if(t=t.compare,t=t!==null?t:el,t(m,r)&&e.ref===n.ref)return Rr(e,n,l)}return n.flags|=1,e=xr(o,r),e.ref=n.ref,e.return=n,n.child=e}function vm(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(el(o,r)&&e.ref===n.ref)if(vn=!1,n.pendingProps=r=o,Cu(e,l))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Rr(e,n,l)}return Ru(e,n,t,r,l)}function xm(e,n,t,r){var l=r.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~o}else r=0,n.child=null;return wm(e,n,o,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ro(n,o!==null?o.cachePool:null),o!==null?Sd(n,o):ru(),kd(n);else return r=n.lanes=536870912,wm(e,n,o!==null?o.baseLanes|t:t,t,r)}else o!==null?(ro(n,o.cachePool),Sd(n,o),fl(),n.memoizedState=null):(e!==null&&ro(n,null),ru(),fl());return Gn(e,n,l,t),n.child}function Ua(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wm(e,n,t,r,l){var o=Zc();return o=o===null?null:{parent:bn._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&ro(n,null),ru(),kd(n),e!==null&&Oi(e,n,r,!0),n.childLanes=l,null}function vo(e,n){return n=wo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Em(e,n,t){return li(n,e.child,null,t),e=vo(n,n.pendingProps),e.flags|=2,bt(n),n.memoizedState=null,e}function J_(e,n,t){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ue){if(r.mode==="hidden")return e=vo(n,r),n.lanes=536870912,Ua(null,e);if(iu(n),(e=en)?(e=Lp(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rl!==null?{id:rr,overflow:lr}:null,retryLane:536870912,hydrationErrors:null},t=ad(e),t.return=n,n.child=t,Un=n,en=null)):e=null,e===null)throw il(n);return n.lanes=536870912,null}return vo(n,r)}var o=e.memoizedState;if(o!==null){var m=o.dehydrated;if(iu(n),l)if(n.flags&256)n.flags&=-257,n=Em(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(vn||Oi(e,n,t,!1),l=(t&e.childLanes)!==0,vn||l){if(r=We,r!==null&&(m=ys(r,t),m!==0&&m!==o.retryLane))throw o.retryLane=m,Ql(e,m),ut(r,e,m),Nu;Do(),n=Em(e,n,t)}else e=o.treeContext,en=Ut(m.nextSibling),Un=n,Ue=!0,ll=null,Bt=!1,e!==null&&cd(n,e),n=vo(n,r),n.flags|=4096;return n}return e=xr(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xo(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(a(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Ru(e,n,t,r,l){return ei(n),t=su(e,n,t,r,void 0,l),r=ou(),e!==null&&!vn?(cu(e,n,l),Rr(e,n,l)):(Ue&&r&&Vc(n),n.flags|=1,Gn(e,n,t,l),n.child)}function Sm(e,n,t,r,l,o){return ei(n),n.updateQueue=null,t=Rd(n,r,t,l),Nd(e),r=ou(),e!==null&&!vn?(cu(e,n,o),Rr(e,n,o)):(Ue&&r&&Vc(n),n.flags|=1,Gn(e,n,t,o),n.child)}function km(e,n,t,r,l){if(ei(n),n.stateNode===null){var o=Mi,m=t.contextType;typeof m=="object"&&m!==null&&(o=Hn(m)),o=new t(r,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Su,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=r,o.state=n.memoizedState,o.refs={},Jc(n),m=t.contextType,o.context=typeof m=="object"&&m!==null?Hn(m):Mi,o.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(Eu(n,t,m,r),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&Su.enqueueReplaceState(o,o.state,null),Oa(n,r,o,l),Aa(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){o=n.stateNode;var g=n.memoizedProps,k=ai(t,g);o.props=k;var C=o.context,P=t.contextType;m=Mi,typeof P=="object"&&P!==null&&(m=Hn(P));var K=t.getDerivedStateFromProps;P=typeof K=="function"||typeof o.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,P||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g||C!==m)&&fm(n,o,r,m),sl=!1;var B=n.memoizedState;o.state=B,Oa(n,r,o,l),Aa(),C=n.memoizedState,g||B!==C||sl?(typeof K=="function"&&(Eu(n,t,K,r),C=n.memoizedState),(k=sl||um(n,t,k,r,B,C,m))?(P||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=C),o.props=r,o.state=C,o.context=m,r=k):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,eu(e,n),m=n.memoizedProps,P=ai(t,m),o.props=P,K=n.pendingProps,B=o.context,C=t.contextType,k=Mi,typeof C=="object"&&C!==null&&(k=Hn(C)),g=t.getDerivedStateFromProps,(C=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==K||B!==k)&&fm(n,o,r,k),sl=!1,B=n.memoizedState,o.state=B,Oa(n,r,o,l),Aa();var Y=n.memoizedState;m!==K||B!==Y||sl||e!==null&&e.dependencies!==null&&no(e.dependencies)?(typeof g=="function"&&(Eu(n,t,g,r),Y=n.memoizedState),(P=sl||um(n,t,P,r,B,Y,k)||e!==null&&e.dependencies!==null&&no(e.dependencies))?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,Y,k),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,Y,k)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=Y),o.props=r,o.state=Y,o.context=k,r=P):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),r=!1)}return o=r,xo(e,n),r=(n.flags&128)!==0,o||r?(o=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&r?(n.child=li(n,e.child,null,l),n.child=li(n,null,t,l)):Gn(e,n,t,l),n.memoizedState=o.state,e=n.child):e=Rr(e,n,l),e}function Nm(e,n,t,r){return Wl(),n.flags|=256,Gn(e,n,t,r),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mu(e){return{baseLanes:e,cachePool:hd()}}function ju(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=vt),e}function Rm(e,n,t){var r=n.pendingProps,l=!1,o=(n.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(l?ul(n):fl(),(e=en)?(e=Lp(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rl!==null?{id:rr,overflow:lr}:null,retryLane:536870912,hydrationErrors:null},t=ad(e),t.return=n,n.child=t,Un=n,en=null)):e=null,e===null)throw il(n);return mf(e)?n.lanes=32:n.lanes=536870912,null}var g=r.children;return r=r.fallback,l?(fl(),l=n.mode,g=wo({mode:"hidden",children:g},l),r=Zl(r,l,t,null),g.return=n,r.return=n,g.sibling=r,n.child=g,r=n.child,r.memoizedState=Mu(t),r.childLanes=ju(e,m,t),n.memoizedState=Tu,Ua(null,r)):(ul(n),Du(n,g))}var k=e.memoizedState;if(k!==null&&(g=k.dehydrated,g!==null)){if(o)n.flags&256?(ul(n),n.flags&=-257,n=Au(e,n,t)):n.memoizedState!==null?(fl(),n.child=e.child,n.flags|=128,n=null):(fl(),g=r.fallback,l=n.mode,r=wo({mode:"visible",children:r.children},l),g=Zl(g,l,t,null),g.flags|=2,r.return=n,g.return=n,r.sibling=g,n.child=r,li(n,e.child,null,t),r=n.child,r.memoizedState=Mu(t),r.childLanes=ju(e,m,t),n.memoizedState=Tu,n=Ua(null,r));else if(ul(n),mf(g)){if(m=g.nextSibling&&g.nextSibling.dataset,m)var C=m.dgst;m=C,r=Error(a(419)),r.stack="",r.digest=m,Na({value:r,source:null,stack:null}),n=Au(e,n,t)}else if(vn||Oi(e,n,t,!1),m=(t&e.childLanes)!==0,vn||m){if(m=We,m!==null&&(r=ys(m,t),r!==0&&r!==k.retryLane))throw k.retryLane=r,Ql(e,r),ut(m,e,r),Nu;df(g)||Do(),n=Au(e,n,t)}else df(g)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,en=Ut(g.nextSibling),Un=n,Ue=!0,ll=null,Bt=!1,e!==null&&cd(n,e),n=Du(n,r.children),n.flags|=4096);return n}return l?(fl(),g=r.fallback,l=n.mode,k=e.child,C=k.sibling,r=xr(k,{mode:"hidden",children:r.children}),r.subtreeFlags=k.subtreeFlags&65011712,C!==null?g=xr(C,g):(g=Zl(g,l,t,null),g.flags|=2),g.return=n,r.return=n,r.sibling=g,n.child=r,Ua(null,r),r=n.child,g=e.child.memoizedState,g===null?g=Mu(t):(l=g.cachePool,l!==null?(k=bn._currentValue,l=l.parent!==k?{parent:k,pool:k}:l):l=hd(),g={baseLanes:g.baseLanes|t,cachePool:l}),r.memoizedState=g,r.childLanes=ju(e,m,t),n.memoizedState=Tu,Ua(e.child,r)):(ul(n),t=e.child,e=t.sibling,t=xr(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function Du(e,n){return n=wo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wo(e,n){return e=_t(22,e,null,n),e.lanes=0,e}function Au(e,n,t){return li(n,e.child,null,t),e=Du(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tm(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Fc(e.return,n,t)}function Ou(e,n,t,r,l,o){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:o}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=t,m.tailMode=l,m.treeForkCount=o)}function Mm(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;r=r.children;var m=hn.current,g=(m&2)!==0;if(g?(m=m&1|2,n.flags|=128):m&=1,te(hn,m),Gn(e,n,r,t),r=Ue?ka:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tm(e,t,n);else if(e.tag===19)Tm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&co(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ou(n,!1,l,t,o,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&co(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ou(n,!0,t,null,o,r);break;case"together":Ou(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Rr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Oi(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=xr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=xr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Cu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&no(e)))}function eg(e,n,t){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),al(n,bn,e.memoizedState.cache),Wl();break;case 27:case 5:Qn(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:al(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,iu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ul(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Rm(e,n,t):(ul(n),e=Rr(e,n,t),e!==null?e.sibling:null);ul(n);break;case 19:var l=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(Oi(e,n,t,!1),r=(t&n.childLanes)!==0),l){if(r)return Mm(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),te(hn,hn.current),r)break;return null;case 22:return n.lanes=0,xm(e,n,t,n.pendingProps);case 24:al(n,bn,e.memoizedState.cache)}return Rr(e,n,t)}function jm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Cu(e,t)&&(n.flags&128)===0)return vn=!1,eg(e,n,t);vn=(e.flags&131072)!==0}else vn=!1,Ue&&(n.flags&1048576)!==0&&od(n,ka,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ti(n.elementType),n.type=e,typeof e=="function")Hc(e)?(r=ai(e,r),n.tag=1,n=km(null,n,e,r,t)):(n.tag=0,n=Ru(null,n,e,r,t));else{if(e!=null){var l=e.$$typeof;if(l===se){n.tag=11,n=bm(null,n,e,r,t);break e}else if(l===J){n.tag=14,n=ym(null,n,e,r,t);break e}}throw n=Ae(e)||e,Error(a(306,n,""))}}return n;case 0:return Ru(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,l=ai(r,n.pendingProps),km(e,n,r,l,t);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(a(387));r=n.pendingProps;var o=n.memoizedState;l=o.element,eu(e,n),Oa(n,r,null,t);var m=n.memoizedState;if(r=m.cache,al(n,bn,r),r!==o.cache&&Xc(n,[bn],t,!0),Aa(),r=m.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Nm(e,n,r,t);break e}else if(r!==l){l=Ot(Error(a(424)),n),Na(l),n=Nm(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Ut(e.firstChild),Un=n,Ue=!0,ll=null,Bt=!0,t=xd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Wl(),r===l){n=Rr(e,n,t);break e}Gn(e,n,r,t)}n=n.child}return n;case 26:return xo(e,n),e===null?(t=Ip(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ue||(t=n.type,e=n.pendingProps,r=Uo(ne.current).createElement(t),r[pn]=n,r[kn]=e,In(r,t,e),rn(r),n.stateNode=r):n.memoizedState=Ip(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qn(n),e===null&&Ue&&(r=n.stateNode=Up(n.type,n.pendingProps,ne.current),Un=n,Bt=!0,l=en,yl(n.type)?(pf=l,en=Ut(r.firstChild)):en=l),Gn(e,n,n.pendingProps.children,t),xo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((l=r=en)&&(r=jg(r,n.type,n.pendingProps,Bt),r!==null?(n.stateNode=r,Un=n,en=Ut(r.firstChild),Bt=!1,l=!0):l=!1),l||il(n)),Qn(n),l=n.type,o=n.pendingProps,m=e!==null?e.memoizedProps:null,r=o.children,cf(l,o)?r=null:m!==null&&cf(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=su(e,n,P_,null,null,t),Ja._currentValue=l),xo(e,n),Gn(e,n,r,t),n.child;case 6:return e===null&&Ue&&((e=t=en)&&(t=Dg(t,n.pendingProps,Bt),t!==null?(n.stateNode=t,Un=n,en=null,e=!0):e=!1),e||il(n)),null;case 13:return Rm(e,n,t);case 4:return He(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=li(n,null,r,t):Gn(e,n,r,t),n.child;case 11:return bm(e,n,n.type,n.pendingProps,t);case 7:return Gn(e,n,n.pendingProps,t),n.child;case 8:return Gn(e,n,n.pendingProps.children,t),n.child;case 12:return Gn(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,al(n,n.type,r.value),Gn(e,n,r.children,t),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,ei(n),l=Hn(l),r=r(l),n.flags|=1,Gn(e,n,r,t),n.child;case 14:return ym(e,n,n.type,n.pendingProps,t);case 15:return vm(e,n,n.type,n.pendingProps,t);case 19:return Mm(e,n,t);case 31:return J_(e,n,t);case 22:return xm(e,n,t,n.pendingProps);case 24:return ei(n),r=Hn(bn),e===null?(l=Zc(),l===null&&(l=We,o=Kc(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),n.memoizedState={parent:r,cache:l},Jc(n),al(n,bn,l)):((e.lanes&t)!==0&&(eu(e,n),Oa(n,null,null,t),Aa()),l=e.memoizedState,o=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),al(n,bn,r)):(r=o.cache,al(n,bn,r),r!==l.cache&&Xc(n,[bn],t,!0))),Gn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Tr(e){e.flags|=4}function Lu(e,n,t,r,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rp())e.flags|=8192;else throw ri=io,Wc}else e.flags&=-16777217}function Dm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qp(n))if(rp())e.flags|=8192;else throw ri=io,Wc}function Eo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ol():536870912,e.lanes|=n,Pi|=n)}function Ha(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ng(e,n,t){var r=n.pendingProps;switch(Yc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Sr(bn),Oe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ai(n)?Tr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pc())),nn(n),null;case 26:var l=n.type,o=n.memoizedState;return e===null?(Tr(n),o!==null?(nn(n),Dm(n,o)):(nn(n),Lu(n,l,null,r,t))):o?o!==e.memoizedState?(Tr(n),nn(n),Dm(n,o)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Tr(n),nn(n),Lu(n,l,e,r,t)),null;case 27:if(Kt(n),t=ne.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Tr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return nn(n),null}e=O.current,Ai(n)?ud(n):(e=Up(l,r,t),n.stateNode=e,Tr(n))}return nn(n),null;case 5:if(Kt(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Tr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return nn(n),null}if(o=O.current,Ai(n))ud(n);else{var m=Uo(ne.current);switch(o){case 1:o=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=m.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}o[pn]=n,o[kn]=r;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)o.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=o;e:switch(In(o,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Tr(n)}}return nn(n),Lu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Tr(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(e=ne.current,Ai(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,l=Un,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[pn]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||Rp(e.nodeValue,t)),e||il(n,!0)}else e=Uo(e).createTextNode(r),e[pn]=n,n.stateNode=e}return nn(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ai(n),t!==null){if(e===null){if(!r)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[pn]=n}else Wl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else t=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(bt(n),n):(bt(n),null);if((n.flags&128)!==0)throw Error(a(558))}return nn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ai(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[pn]=n}else Wl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),l=!1}else l=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(bt(n),n):(bt(n),null)}return bt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==l&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Eo(n,n.updateQueue),nn(n),null);case 4:return Oe(),e===null&&rf(n.stateNode.containerInfo),nn(n),null;case 10:return Sr(n.type),nn(n),null;case 19:if(U(hn),r=n.memoizedState,r===null)return nn(n),null;if(l=(n.flags&128)!==0,o=r.rendering,o===null)if(l)Ha(r,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=co(e),o!==null){for(n.flags|=128,Ha(r,!1),e=o.updateQueue,n.updateQueue=e,Eo(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)id(t,e),t=t.sibling;return te(hn,hn.current&1|2),Ue&&wr(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&En()>To&&(n.flags|=128,l=!0,Ha(r,!1),n.lanes=4194304)}else{if(!l)if(e=co(o),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Eo(n,e),Ha(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Ue)return nn(n),null}else 2*En()-r.renderingStartTime>To&&t!==536870912&&(n.flags|=128,l=!0,Ha(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(e=r.last,e!==null?e.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=En(),e.sibling=null,t=hn.current,te(hn,l?t&1|2:t&1),Ue&&wr(n,r.treeForkCount),e):(nn(n),null);case 22:case 23:return bt(n),lu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),t=n.updateQueue,t!==null&&Eo(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&U(ni),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Sr(bn),nn(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function tg(e,n){switch(Yc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Sr(bn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Kt(n),null;case 31:if(n.memoizedState!==null){if(bt(n),n.alternate===null)throw Error(a(340));Wl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(bt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Wl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(hn),null;case 4:return Oe(),null;case 10:return Sr(n.type),null;case 22:case 23:return bt(n),lu(),e!==null&&U(ni),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Sr(bn),null;case 25:return null;default:return null}}function Am(e,n){switch(Yc(n),n.tag){case 3:Sr(bn),Oe();break;case 26:case 27:case 5:Kt(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&bt(n);break;case 13:bt(n);break;case 19:U(hn);break;case 10:Sr(n.type);break;case 22:case 23:bt(n),lu(),e!==null&&U(ni);break;case 24:Sr(bn)}}function Ga(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&e)===e){r=void 0;var o=t.create,m=t.inst;r=o(),m.destroy=r}t=t.next}while(t!==l)}}catch(g){Xe(n,n.return,g)}}function dl(e,n,t){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var o=l.next;r=o;do{if((r.tag&e)===e){var m=r.inst,g=m.destroy;if(g!==void 0){m.destroy=void 0,l=n;var k=t,C=g;try{C()}catch(P){Xe(l,k,P)}}}r=r.next}while(r!==o)}}catch(P){Xe(n,n.return,P)}}function Om(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Ed(n,t)}catch(r){Xe(e,e.return,r)}}}function Cm(e,n,t){t.props=ai(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){Xe(e,n,r)}}function Ia(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(l){Xe(e,n,l)}}function ir(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){Xe(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Xe(e,n,l)}else t.current=null}function Lm(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){Xe(e,e.return,l)}}function Bu(e,n,t){try{var r=e.stateNode;Sg(r,e.type,t,n),r[kn]=n}catch(l){Xe(e,e.return,l)}}function Bm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type)||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Mt));else if(r!==4&&(r===27&&yl(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Uu(e,n,t),e=e.sibling;e!==null;)Uu(e,n,t),e=e.sibling}function So(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&yl(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(So(e,n,t),e=e.sibling;e!==null;)So(e,n,t),e=e.sibling}function zm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);In(n,r,t),n[pn]=e,n[kn]=t}catch(o){Xe(e,e.return,o)}}var Mr=!1,xn=!1,Hu=!1,Um=typeof WeakSet=="function"?WeakSet:Set,An=null;function rg(e,n){if(e=e.containerInfo,sf=Po,e=d(e),h(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var m=0,g=-1,k=-1,C=0,P=0,K=e,B=null;n:for(;;){for(var Y;K!==t||l!==0&&K.nodeType!==3||(g=m+l),K!==o||r!==0&&K.nodeType!==3||(k=m+r),K.nodeType===3&&(m+=K.nodeValue.length),(Y=K.firstChild)!==null;)B=K,K=Y;for(;;){if(K===e)break n;if(B===t&&++C===l&&(g=m),B===o&&++P===r&&(k=m),(Y=K.nextSibling)!==null)break;K=B,B=K.parentNode}K=Y}t=g===-1||k===-1?null:{start:g,end:k}}else t=null}t=t||{start:0,end:0}}else t=null;for(of={focusedElem:e,selectionRange:t},Po=!1,An=n;An!==null;)if(n=An,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,An=e;else for(;An!==null;){switch(n=An,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,l=o.memoizedProps,o=o.memoizedState,r=t.stateNode;try{var de=ai(t.type,l);e=r.getSnapshotBeforeUpdate(de,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(ye){Xe(t,t.return,ye)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)ff(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,An=e;break}An=n.return}}function Hm(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Dr(e,t),r&4&&Ga(5,t);break;case 1:if(Dr(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){Xe(t,t.return,m)}else{var l=ai(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Xe(t,t.return,m)}}r&64&&Om(t),r&512&&Ia(t,t.return);break;case 3:if(Dr(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Ed(e,n)}catch(m){Xe(t,t.return,m)}}break;case 27:n===null&&r&4&&zm(t);case 26:case 5:Dr(e,t),n===null&&r&4&&Lm(t),r&512&&Ia(t,t.return);break;case 12:Dr(e,t);break;case 31:Dr(e,t),r&4&&Vm(e,t);break;case 13:Dr(e,t),r&4&&Ym(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=dg.bind(null,t),Ag(e,t))));break;case 22:if(r=t.memoizedState!==null||Mr,!r){n=n!==null&&n.memoizedState!==null||xn,l=Mr;var o=xn;Mr=r,(xn=n)&&!o?Ar(e,t,(t.subtreeFlags&8772)!==0):Dr(e,t),Mr=l,xn=o}break;case 30:break;default:Dr(e,t)}}function Gm(e){var n=e.alternate;n!==null&&(e.alternate=null,Gm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Wt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,at=!1;function jr(e,n,t){for(t=t.child;t!==null;)Im(e,n,t),t=t.sibling}function Im(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Al,t)}catch{}switch(t.tag){case 26:xn||ir(t,n),jr(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:xn||ir(t,n);var r=sn,l=at;yl(t.type)&&(sn=t.stateNode,at=!1),jr(e,n,t),Qa(t.stateNode),sn=r,at=l;break;case 5:xn||ir(t,n);case 6:if(r=sn,l=at,sn=null,jr(e,n,t),sn=r,at=l,sn!==null)if(at)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(t.stateNode)}catch(o){Xe(t,n,o)}else try{sn.removeChild(t.stateNode)}catch(o){Xe(t,n,o)}break;case 18:sn!==null&&(at?(e=sn,Op(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ji(e)):Op(sn,t.stateNode));break;case 4:r=sn,l=at,sn=t.stateNode.containerInfo,at=!0,jr(e,n,t),sn=r,at=l;break;case 0:case 11:case 14:case 15:dl(2,t,n),xn||dl(4,t,n),jr(e,n,t);break;case 1:xn||(ir(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&Cm(t,n,r)),jr(e,n,t);break;case 21:jr(e,n,t);break;case 22:xn=(r=xn)||t.memoizedState!==null,jr(e,n,t),xn=r;break;default:jr(e,n,t)}}function Vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ji(e)}catch(t){Xe(n,n.return,t)}}}function Ym(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ji(e)}catch(t){Xe(n,n.return,t)}}function lg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Um),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Um),n;default:throw Error(a(435,e.tag))}}function ko(e,n){var t=lg(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var l=mg.bind(null,e,r);r.then(l,l)}})}function st(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r],o=e,m=n,g=m;e:for(;g!==null;){switch(g.tag){case 27:if(yl(g.type)){sn=g.stateNode,at=!1;break e}break;case 5:sn=g.stateNode,at=!1;break e;case 3:case 4:sn=g.stateNode.containerInfo,at=!0;break e}g=g.return}if(sn===null)throw Error(a(160));Im(o,m,l),sn=null,at=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,e),n=n.sibling}var Ft=null;function $m(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(n,e),ot(e),r&4&&(dl(3,e,e.return),Ga(3,e),dl(5,e,e.return));break;case 1:st(n,e),ot(e),r&512&&(xn||t===null||ir(t,t.return)),r&64&&Mr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var l=Ft;if(st(n,e),ot(e),r&512&&(xn||t===null||ir(t,t.return)),r&4){var o=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Wn]||o[pn]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(r),l.head.insertBefore(o,l.querySelector("head > title"))),In(o,r,t),o[pn]=e,rn(o),r=o;break e;case"link":var m=$p("link","href",l).get(r+(t.href||""));if(m){for(var g=0;g<m.length;g++)if(o=m[g],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(g,1);break n}}o=l.createElement(r),In(o,r,t),l.head.appendChild(o);break;case"meta":if(m=$p("meta","content",l).get(r+(t.content||""))){for(g=0;g<m.length;g++)if(o=m[g],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(g,1);break n}}o=l.createElement(r),In(o,r,t),l.head.appendChild(o);break;default:throw Error(a(468,r))}o[pn]=e,rn(o),r=o}e.stateNode=r}else Pp(l,e.type,e.stateNode);else e.stateNode=Yp(l,r,e.memoizedProps);else o!==r?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,r===null?Pp(l,e.type,e.stateNode):Yp(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Bu(e,e.memoizedProps,t.memoizedProps)}break;case 27:st(n,e),ot(e),r&512&&(xn||t===null||ir(t,t.return)),t!==null&&r&4&&Bu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(st(n,e),ot(e),r&512&&(xn||t===null||ir(t,t.return)),e.flags&32){l=e.stateNode;try{qr(l,"")}catch(de){Xe(e,e.return,de)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,Bu(e,l,t!==null?t.memoizedProps:l)),r&1024&&(Hu=!0);break;case 6:if(st(n,e),ot(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(de){Xe(e,e.return,de)}}break;case 3:if(Io=null,l=Ft,Ft=Ho(n.containerInfo),st(n,e),Ft=l,ot(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ji(n.containerInfo)}catch(de){Xe(e,e.return,de)}Hu&&(Hu=!1,Pm(e));break;case 4:r=Ft,Ft=Ho(e.stateNode.containerInfo),st(n,e),ot(e),Ft=r;break;case 12:st(n,e),ot(e);break;case 31:st(n,e),ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ko(e,r)));break;case 13:st(n,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ro=En()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ko(e,r)));break;case 22:l=e.memoizedState!==null;var k=t!==null&&t.memoizedState!==null,C=Mr,P=xn;if(Mr=C||l,xn=P||k,st(n,e),xn=P,Mr=C,ot(e),r&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||k||Mr||xn||si(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){k=t=n;try{if(o=k.stateNode,l)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{g=k.stateNode;var K=k.memoizedProps.style,B=K!=null&&K.hasOwnProperty("display")?K.display:null;g.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(de){Xe(k,k.return,de)}}}else if(n.tag===6){if(t===null){k=n;try{k.stateNode.nodeValue=l?"":k.memoizedProps}catch(de){Xe(k,k.return,de)}}}else if(n.tag===18){if(t===null){k=n;try{var Y=k.stateNode;l?Cp(Y,!0):Cp(k.stateNode,!1)}catch(de){Xe(k,k.return,de)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,ko(e,t))));break;case 19:st(n,e),ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ko(e,r)));break;case 30:break;case 21:break;default:st(n,e),ot(e)}}function ot(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(Bm(r)){t=r;break}r=r.return}if(t==null)throw Error(a(160));switch(t.tag){case 27:var l=t.stateNode,o=zu(e);So(e,o,l);break;case 5:var m=t.stateNode;t.flags&32&&(qr(m,""),t.flags&=-33);var g=zu(e);So(e,g,m);break;case 3:case 4:var k=t.stateNode.containerInfo,C=zu(e);Uu(e,C,k);break;default:throw Error(a(161))}}catch(P){Xe(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Dr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hm(e,n.alternate,n),n=n.sibling}function si(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:dl(4,n,n.return),si(n);break;case 1:ir(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Cm(n,n.return,t),si(n);break;case 27:Qa(n.stateNode);case 26:case 5:ir(n,n.return),si(n);break;case 22:n.memoizedState===null&&si(n);break;case 30:si(n);break;default:si(n)}e=e.sibling}}function Ar(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=e,o=n,m=o.flags;switch(o.tag){case 0:case 11:case 15:Ar(l,o,t),Ga(4,o);break;case 1:if(Ar(l,o,t),r=o,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){Xe(r,r.return,C)}if(r=o,l=r.updateQueue,l!==null){var g=r.stateNode;try{var k=l.shared.hiddenCallbacks;if(k!==null)for(l.shared.hiddenCallbacks=null,l=0;l<k.length;l++)wd(k[l],g)}catch(C){Xe(r,r.return,C)}}t&&m&64&&Om(o),Ia(o,o.return);break;case 27:zm(o);case 26:case 5:Ar(l,o,t),t&&r===null&&m&4&&Lm(o),Ia(o,o.return);break;case 12:Ar(l,o,t);break;case 31:Ar(l,o,t),t&&m&4&&Vm(l,o);break;case 13:Ar(l,o,t),t&&m&4&&Ym(l,o);break;case 22:o.memoizedState===null&&Ar(l,o,t),Ia(o,o.return);break;case 30:break;default:Ar(l,o,t)}n=n.sibling}}function Gu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ra(t))}function Iu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ra(e))}function Xt(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(e,n,t,r),n=n.sibling}function qm(e,n,t,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Xt(e,n,t,r),l&2048&&Ga(9,n);break;case 1:Xt(e,n,t,r);break;case 3:Xt(e,n,t,r),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ra(e)));break;case 12:if(l&2048){Xt(e,n,t,r),e=n.stateNode;try{var o=n.memoizedProps,m=o.id,g=o.onPostCommit;typeof g=="function"&&g(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Xe(n,n.return,k)}}else Xt(e,n,t,r);break;case 31:Xt(e,n,t,r);break;case 13:Xt(e,n,t,r);break;case 23:break;case 22:o=n.stateNode,m=n.alternate,n.memoizedState!==null?o._visibility&2?Xt(e,n,t,r):Va(e,n):o._visibility&2?Xt(e,n,t,r):(o._visibility|=2,Vi(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Gu(m,n);break;case 24:Xt(e,n,t,r),l&2048&&Iu(n.alternate,n);break;default:Xt(e,n,t,r)}}function Vi(e,n,t,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,m=n,g=t,k=r,C=m.flags;switch(m.tag){case 0:case 11:case 15:Vi(o,m,g,k,l),Ga(8,m);break;case 23:break;case 22:var P=m.stateNode;m.memoizedState!==null?P._visibility&2?Vi(o,m,g,k,l):Va(o,m):(P._visibility|=2,Vi(o,m,g,k,l)),l&&C&2048&&Gu(m.alternate,m);break;case 24:Vi(o,m,g,k,l),l&&C&2048&&Iu(m.alternate,m);break;default:Vi(o,m,g,k,l)}n=n.sibling}}function Va(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,l=r.flags;switch(r.tag){case 22:Va(t,r),l&2048&&Gu(r.alternate,r);break;case 24:Va(t,r),l&2048&&Iu(r.alternate,r);break;default:Va(t,r)}n=n.sibling}}var Ya=8192;function Yi(e,n,t){if(e.subtreeFlags&Ya)for(e=e.child;e!==null;)Fm(e,n,t),e=e.sibling}function Fm(e,n,t){switch(e.tag){case 26:Yi(e,n,t),e.flags&Ya&&e.memoizedState!==null&&$g(t,Ft,e.memoizedState,e.memoizedProps);break;case 5:Yi(e,n,t);break;case 3:case 4:var r=Ft;Ft=Ho(e.stateNode.containerInfo),Yi(e,n,t),Ft=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ya,Ya=16777216,Yi(e,n,t),Ya=r):Yi(e,n,t));break;default:Yi(e,n,t)}}function Xm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function $a(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];An=r,Qm(r,e)}Xm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Km(e),e=e.sibling}function Km(e){switch(e.tag){case 0:case 11:case 15:$a(e),e.flags&2048&&dl(9,e,e.return);break;case 3:$a(e);break;case 12:$a(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,No(e)):$a(e);break;default:$a(e)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];An=r,Qm(r,e)}Xm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:dl(8,n,n.return),No(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,No(n));break;default:No(n)}e=e.sibling}}function Qm(e,n){for(;An!==null;){var t=An;switch(t.tag){case 0:case 11:case 15:dl(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ra(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,An=r;else e:for(t=e;An!==null;){r=An;var l=r.sibling,o=r.return;if(Gm(r),r===t){An=null;break e}if(l!==null){l.return=o,An=l;break e}An=o}}}var ig={getCacheForType:function(e){var n=Hn(bn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Hn(bn).controller.signal}},ag=typeof WeakMap=="function"?WeakMap:Map,$e=0,We=null,je=null,Le=0,Fe=0,yt=null,ml=!1,$i=!1,Vu=!1,Or=0,mn=0,pl=0,oi=0,Yu=0,vt=0,Pi=0,Pa=null,ct=null,$u=!1,Ro=0,Zm=0,To=1/0,Mo=null,hl=null,Rn=0,_l=null,qi=null,Cr=0,Pu=0,qu=null,Wm=null,qa=0,Fu=null;function xt(){return($e&2)!==0&&Le!==0?Le&-Le:G.T!==null?Ju():cn()}function Jm(){if(vt===0)if((Le&536870912)===0||Ue){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),vt=e}else vt=536870912;return e=gt.current,e!==null&&(e.flags|=32),vt}function ut(e,n,t){(e===We&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(Fi(e,0),gl(e,Le,vt,!1)),Cl(e,t),(($e&2)===0||e!==We)&&(e===We&&(($e&2)===0&&(oi|=t),mn===4&&gl(e,Le,vt,!1)),ar(e))}function ep(e,n,t){if(($e&6)!==0)throw Error(a(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Cn(e,n),l=r?cg(e,n):Ku(e,n,!0),o=r;do{if(l===0){$i&&!r&&gl(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!sg(t)){l=Ku(e,n,!1),o=!1;continue}if(l===2){if(o=n,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var g=e;l=Pa;var k=g.current.memoizedState.isDehydrated;if(k&&(Fi(g,m).flags|=256),m=Ku(g,m,!1),m!==2){if(Vu&&!k){g.errorRecoveryDisabledLanes|=o,oi|=o,l=4;break e}o=ct,ct=l,o!==null&&(ct===null?ct=o:ct.push.apply(ct,o))}l=m}if(o=!1,l!==2)continue}}if(l===1){Fi(e,0),gl(e,n,0,!0);break}e:{switch(r=e,o=l,o){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:gl(r,n,vt,!ml);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(l=Ro+300-En(),10<l)){if(gl(r,n,vt,!ml),tn(r,0,!0)!==0)break e;Cr=n,r.timeoutHandle=Dp(np.bind(null,r,t,ct,Mo,$u,n,vt,oi,Pi,ml,o,"Throttled",-0,0),l);break e}np(r,t,ct,Mo,$u,n,vt,oi,Pi,ml,o,null,-0,0)}}break}while(!0);ar(e)}function np(e,n,t,r,l,o,m,g,k,C,P,K,B,Y){if(e.timeoutHandle=-1,K=n.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mt},Fm(n,o,K);var de=(o&62914560)===o?Ro-En():(o&4194048)===o?Zm-En():0;if(de=Pg(K,de),de!==null){Cr=o,e.cancelPendingCommit=de(cp.bind(null,e,n,o,t,r,l,m,g,k,P,K,null,B,Y)),gl(e,o,m,!C);return}}cp(e,n,o,t,r,l,m,g,k)}function sg(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Bn(o(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gl(e,n,t,r){n&=~Yu,n&=~oi,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var o=31-On(l),m=1<<o;r[o]=-1,l&=~m}t!==0&&bs(e,t,n)}function jo(){return($e&6)===0?(Fa(0),!1):!0}function Xu(){if(je!==null){if(Fe===0)var e=je.return;else e=je,Er=Jl=null,uu(e),zi=null,Ma=0,e=je;for(;e!==null;)Am(e.alternate,e),e=e.return;je=null}}function Fi(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Rg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Cr=0,Xu(),We=e,je=t=xr(e.current,null),Le=n,Fe=0,yt=null,ml=!1,$i=Cn(e,n),Vu=!1,Pi=vt=Yu=oi=pl=mn=0,ct=Pa=null,$u=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var l=31-On(r),o=1<<l;n|=e[l],r&=~o}return Or=n,Qs(),t}function tp(e,n){Te=null,G.H=za,n===Bi||n===lo?(n=bd(),Fe=3):n===Wc?(n=bd(),Fe=4):Fe=n===Nu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yt=n,je===null&&(mn=1,yo(e,Ot(n,e.current)))}function rp(){var e=gt.current;return e===null?!0:(Le&4194048)===Le?zt===null:(Le&62914560)===Le||(Le&536870912)!==0?e===zt:!1}function lp(){var e=G.H;return G.H=za,e===null?za:e}function ip(){var e=G.A;return G.A=ig,e}function Do(){mn=4,ml||(Le&4194048)!==Le&&gt.current!==null||($i=!0),(pl&134217727)===0&&(oi&134217727)===0||We===null||gl(We,Le,vt,!1)}function Ku(e,n,t){var r=$e;$e|=2;var l=lp(),o=ip();(We!==e||Le!==n)&&(Mo=null,Fi(e,n)),n=!1;var m=mn;e:do try{if(Fe!==0&&je!==null){var g=je,k=yt;switch(Fe){case 8:Xu(),m=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(n=!0);var C=Fe;if(Fe=0,yt=null,Xi(e,g,k,C),t&&$i){m=0;break e}break;default:C=Fe,Fe=0,yt=null,Xi(e,g,k,C)}}og(),m=mn;break}catch(P){tp(e,P)}while(!0);return n&&e.shellSuspendCounter++,Er=Jl=null,$e=r,G.H=l,G.A=o,je===null&&(We=null,Le=0,Qs()),m}function og(){for(;je!==null;)ap(je)}function cg(e,n){var t=$e;$e|=2;var r=lp(),l=ip();We!==e||Le!==n?(Mo=null,To=En()+500,Fi(e,n)):$i=Cn(e,n);e:do try{if(Fe!==0&&je!==null){n=je;var o=yt;n:switch(Fe){case 1:Fe=0,yt=null,Xi(e,n,o,1);break;case 2:case 9:if(_d(o)){Fe=0,yt=null,sp(n);break}n=function(){Fe!==2&&Fe!==9||We!==e||(Fe=7),ar(e)},o.then(n,n);break e;case 3:Fe=7;break e;case 4:Fe=5;break e;case 7:_d(o)?(Fe=0,yt=null,sp(n)):(Fe=0,yt=null,Xi(e,n,o,7));break;case 5:var m=null;switch(je.tag){case 26:m=je.memoizedState;case 5:case 27:var g=je;if(m?qp(m):g.stateNode.complete){Fe=0,yt=null;var k=g.sibling;if(k!==null)je=k;else{var C=g.return;C!==null?(je=C,Ao(C)):je=null}break n}}Fe=0,yt=null,Xi(e,n,o,5);break;case 6:Fe=0,yt=null,Xi(e,n,o,6);break;case 8:Xu(),mn=6;break e;default:throw Error(a(462))}}ug();break}catch(P){tp(e,P)}while(!0);return Er=Jl=null,G.H=r,G.A=l,$e=t,je!==null?0:(We=null,Le=0,Qs(),mn)}function ug(){for(;je!==null&&!di();)ap(je)}function ap(e){var n=jm(e.alternate,e,Or);e.memoizedProps=e.pendingProps,n===null?Ao(e):je=n}function sp(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Sm(t,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=Sm(t,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:uu(n);default:Am(t,n),n=je=id(n,Or),n=jm(t,n,Or)}e.memoizedProps=e.pendingProps,n===null?Ao(e):je=n}function Xi(e,n,t,r){Er=Jl=null,uu(n),zi=null,Ma=0;var l=n.return;try{if(W_(e,l,n,t,Le)){mn=1,yo(e,Ot(t,e.current)),je=null;return}}catch(o){if(l!==null)throw je=l,o;mn=1,yo(e,Ot(t,e.current)),je=null;return}n.flags&32768?(Ue||r===1?e=!0:$i||(Le&536870912)!==0?e=!1:(ml=e=!0,(r===2||r===9||r===3||r===6)&&(r=gt.current,r!==null&&r.tag===13&&(r.flags|=16384))),op(n,e)):Ao(n)}function Ao(e){var n=e;do{if((n.flags&32768)!==0){op(n,ml);return}e=n.return;var t=ng(n.alternate,n,Or);if(t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);mn===0&&(mn=5)}function op(e,n){do{var t=tg(e.alternate,e);if(t!==null){t.flags&=32767,je=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){je=e;return}je=e=t}while(e!==null);mn=6,je=null}function cp(e,n,t,r,l,o,m,g,k){e.cancelPendingCommit=null;do Oo();while(Rn!==0);if(($e&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(o=n.lanes|n.childLanes,o|=zc,ur(e,t,o,m,g,k),e===We&&(je=We=null,Le=0),qi=n,_l=e,Cr=t,Pu=o,qu=l,Wm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pg(Dl,function(){return pp(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=G.T,G.T=null,l=re.p,re.p=2,m=$e,$e|=4;try{rg(e,n,t)}finally{$e=m,re.p=l,G.T=r}}Rn=1,up(),fp(),dp()}}function up(){if(Rn===1){Rn=0;var e=_l,n=qi,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=G.T,G.T=null;var r=re.p;re.p=2;var l=$e;$e|=4;try{$m(n,e);var o=of,m=d(e.containerInfo),g=o.focusedElem,k=o.selectionRange;if(m!==g&&g&&g.ownerDocument&&Ks(g.ownerDocument.documentElement,g)){if(k!==null&&h(g)){var C=k.start,P=k.end;if(P===void 0&&(P=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(P,g.value.length);else{var K=g.ownerDocument||document,B=K&&K.defaultView||window;if(B.getSelection){var Y=B.getSelection(),de=g.textContent.length,ye=Math.min(k.start,de),Ze=k.end===void 0?ye:Math.min(k.end,de);!Y.extend&&ye>Ze&&(m=Ze,Ze=ye,ye=m);var j=Xs(g,ye),R=Xs(g,Ze);if(j&&R&&(Y.rangeCount!==1||Y.anchorNode!==j.node||Y.anchorOffset!==j.offset||Y.focusNode!==R.node||Y.focusOffset!==R.offset)){var A=K.createRange();A.setStart(j.node,j.offset),Y.removeAllRanges(),ye>Ze?(Y.addRange(A),Y.extend(R.node,R.offset)):(A.setEnd(R.node,R.offset),Y.addRange(A))}}}}for(K=[],Y=g;Y=Y.parentNode;)Y.nodeType===1&&K.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<K.length;g++){var q=K[g];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Po=!!sf,of=sf=null}finally{$e=l,re.p=r,G.T=t}}e.current=n,Rn=2}}function fp(){if(Rn===2){Rn=0;var e=_l,n=qi,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=G.T,G.T=null;var r=re.p;re.p=2;var l=$e;$e|=4;try{Hm(e,n.alternate,n)}finally{$e=l,re.p=r,G.T=t}}Rn=3}}function dp(){if(Rn===4||Rn===3){Rn=0,Gr();var e=_l,n=qi,t=Cr,r=Wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,qi=_l=null,mp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(hl=null),kt(t),n=n.stateNode,Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Al,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=G.T,l=re.p,re.p=2,G.T=null;try{for(var o=e.onRecoverableError,m=0;m<r.length;m++){var g=r[m];o(g.value,{componentStack:g.stack})}}finally{G.T=n,re.p=l}}(Cr&3)!==0&&Oo(),ar(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Fu?qa++:(qa=0,Fu=e):qa=0,Fa(0)}}function mp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ra(n)))}function Oo(){return up(),fp(),dp(),pp()}function pp(){if(Rn!==5)return!1;var e=_l,n=Pu;Pu=0;var t=kt(Cr),r=G.T,l=re.p;try{re.p=32>t?32:t,G.T=null,t=qu,qu=null;var o=_l,m=Cr;if(Rn=0,qi=_l=null,Cr=0,($e&6)!==0)throw Error(a(331));var g=$e;if($e|=4,Km(o.current),qm(o,o.current,m,t),$e=g,Fa(0,!1),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Al,o)}catch{}return!0}finally{re.p=l,G.T=r,mp(e,n)}}function hp(e,n,t){n=Ot(t,n),n=ku(e.stateNode,n,2),e=cl(e,n,2),e!==null&&(Cl(e,2),ar(e))}function Xe(e,n,t){if(e.tag===3)hp(e,e,t);else for(;n!==null;){if(n.tag===3){hp(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hl===null||!hl.has(r))){e=Ot(t,e),t=_m(2),r=cl(n,t,2),r!==null&&(gm(t,r,n,e),Cl(r,2),ar(r));break}}n=n.return}}function Qu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ag;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(Vu=!0,l.add(t),e=fg.bind(null,e,n,t),n.then(e,e))}function fg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,We===e&&(Le&t)===t&&(mn===4||mn===3&&(Le&62914560)===Le&&300>En()-Ro?($e&2)===0&&Fi(e,0):Yu|=t,Pi===Le&&(Pi=0)),ar(e)}function _p(e,n){n===0&&(n=Ol()),e=Ql(e,n),e!==null&&(Cl(e,n),ar(e))}function dg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_p(e,t)}function mg(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(n),_p(e,t)}function pg(e,n){return Hr(e,n)}var Co=null,Ki=null,Zu=!1,Lo=!1,Wu=!1,bl=0;function ar(e){e!==Ki&&e.next===null&&(Ki===null?Co=Ki=e:Ki=Ki.next=e),Lo=!0,Zu||(Zu=!0,_g())}function Fa(e,n){if(!Wu&&Lo){Wu=!0;do for(var t=!1,r=Co;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var o=0;else{var m=r.suspendedLanes,g=r.pingedLanes;o=(1<<31-On(42|e)+1)-1,o&=l&~(m&~g),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,vp(r,o))}else o=Le,o=tn(r,r===We?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||Cn(r,o)||(t=!0,vp(r,o));r=r.next}while(t);Wu=!1}}function hg(){gp()}function gp(){Lo=Zu=!1;var e=0;bl!==0&&Ng()&&(e=bl);for(var n=En(),t=null,r=Co;r!==null;){var l=r.next,o=bp(r,n);o===0?(r.next=null,t===null?Co=l:t.next=l,l===null&&(Ki=t)):(t=r,(e!==0||(o&3)!==0)&&(Lo=!0)),r=l}Rn!==0&&Rn!==5||Fa(e),bl!==0&&(bl=0)}function bp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-On(o),g=1<<m,k=l[m];k===-1?((g&t)===0||(g&r)!==0)&&(l[m]=yc(g,n)):k<=n&&(e.expiredLanes|=g),o&=~g}if(n=We,t=Le,t=tn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&St(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Cn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&St(r),kt(t)){case 2:case 8:t=ua;break;case 32:t=Dl;break;case 268435456:t=ft;break;default:t=Dl}return r=yp.bind(null,e),t=Hr(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&St(r),e.callbackPriority=2,e.callbackNode=null,2}function yp(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Oo()&&e.callbackNode!==t)return null;var r=Le;return r=tn(e,e===We?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ep(e,r,n),bp(e,En()),e.callbackNode!=null&&e.callbackNode===t?yp.bind(null,e):null)}function vp(e,n){if(Oo())return null;ep(e,n,!0)}function _g(){Tg(function(){($e&6)!==0?Hr(jl,hg):gp()})}function Ju(){if(bl===0){var e=Ci;e===0&&(e=mt,mt<<=1,(mt&261888)===0&&(mt=256)),bl=e}return bl}function xp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ln(""+e)}function wp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function gg(e,n,t,r,l){if(n==="submit"&&t&&t.stateNode===l){var o=xp((l[kn]||null).action),m=r.submitter;m&&(n=(n=m[kn]||null)?xp(n.formAction):m.getAttribute("formAction"),n!==null&&(o=n,m=null));var g=new Gl("action","action",null,r,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(bl!==0){var k=m?wp(l,m):new FormData(l);yu(t,{pending:!0,data:k,method:l.method,action:o},null,k)}}else typeof o=="function"&&(g.preventDefault(),k=m?wp(l,m):new FormData(l),yu(t,{pending:!0,data:k,method:l.method,action:o},o,k))},currentTarget:l}]})}}for(var ef=0;ef<Xl.length;ef++){var nf=Xl[ef],bg=nf.toLowerCase(),yg=nf[0].toUpperCase()+nf.slice(1);zn(bg,"on"+yg)}zn(Je,"onAnimationEnd"),zn(tr,"onAnimationIteration"),zn(Dt,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(qt,"onTransitionRun"),zn(nl,"onTransitionStart"),zn(tl,"onTransitionCancel"),zn(Sa,"onTransitionEnd"),pr("onMouseEnter",["mouseout","mouseover"]),pr("onMouseLeave",["mouseout","mouseover"]),pr("onPointerEnter",["pointerout","pointerover"]),pr("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa));function Ep(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var m=r.length-1;0<=m;m--){var g=r[m],k=g.instance,C=g.currentTarget;if(g=g.listener,k!==o&&l.isPropagationStopped())break e;o=g,l.currentTarget=C;try{o(l)}catch(P){Kl(P)}l.currentTarget=null,o=k}else for(m=0;m<r.length;m++){if(g=r[m],k=g.instance,C=g.currentTarget,g=g.listener,k!==o&&l.isPropagationStopped())break e;o=g,l.currentTarget=C;try{o(l)}catch(P){Kl(P)}l.currentTarget=null,o=k}}}}function De(e,n){var t=n[Ll];t===void 0&&(t=n[Ll]=new Set);var r=e+"__bubble";t.has(r)||(Sp(n,e,2,!1),t.add(r))}function tf(e,n,t){var r=0;n&&(r|=4),Sp(t,e,r,n)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function rf(e){if(!e[Bo]){e[Bo]=!0,Jt.forEach(function(t){t!=="selectionchange"&&(vg.has(t)||tf(t,!1,e),tf(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bo]||(n[Bo]=!0,tf("selectionchange",!1,n))}}function Sp(e,n,t,r){switch(Jp(n)){case 2:var l=Xg;break;case 8:l=Kg;break;default:l=yf}t=l.bind(null,n,t,e),l=void 0,!gr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function lf(e,n,t,r,l){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var g=r.stateNode.containerInfo;if(g===l)break;if(m===4)for(m=r.return;m!==null;){var k=m.tag;if((k===3||k===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;g!==null;){if(m=Rt(g),m===null)return;if(k=m.tag,k===5||k===6||k===26||k===27){r=o=m;continue e}g=g.parentNode}}r=r.return}ks(function(){var C=o,P=_r(t),K=[];e:{var B=Fl.get(e);if(B!==void 0){var Y=Gl,de=e;switch(e){case"keypress":if(er(t)===0)break e;case"keydown":case"keyup":Y=Ls;break;case"focusin":de="focus",Y=yr;break;case"focusout":de="blur",Y=yr;break;case"beforeblur":case"afterblur":Y=yr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=fn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=_a;break;case Je:case tr:case Dt:Y=Ms;break;case Sa:Y=Rc;break;case"scroll":case"scrollend":Y=xi;break;case"wheel":Y=Mc;break;case"copy":case"cut":case"paste":Y=wc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Bs;break;case"toggle":case"beforetoggle":Y=Dc}var ye=(n&4)!==0,Ze=!ye&&(e==="scroll"||e==="scrollend"),j=ye?B!==null?B+"Capture":null:B;ye=[];for(var R=C,A;R!==null;){var q=R;if(A=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||A===null||j===null||(q=Zr(R,j),q!=null&&ye.push(Ka(R,q,A))),Ze)break;R=R.return}0<ye.length&&(B=new Y(B,de,null,t,P),K.push({event:B,listeners:ye}))}}if((n&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",B&&t!==Xr&&(de=t.relatedTarget||t.fromElement)&&(Rt(de)||de[pt]))break e;if((Y||B)&&(B=P.window===P?P:(B=P.ownerDocument)?B.defaultView||B.parentWindow:window,Y?(de=t.relatedTarget||t.toElement,Y=C,de=de?Rt(de):null,de!==null&&(Ze=p(de),ye=de.tag,de!==Ze||ye!==5&&ye!==27&&ye!==6)&&(de=null)):(Y=null,de=C),Y!==de)){if(ye=Rs,q="onMouseLeave",j="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Bs,q="onPointerLeave",j="onPointerEnter",R="pointer"),Ze=Y==null?B:dr(Y),A=de==null?B:dr(de),B=new ye(q,R+"leave",Y,t,P),B.target=Ze,B.relatedTarget=A,q=null,Rt(P)===C&&(ye=new ye(j,R+"enter",de,t,P),ye.target=A,ye.relatedTarget=Ze,q=ye),Ze=q,Y&&de)n:{for(ye=xg,j=Y,R=de,A=0,q=j;q;q=ye(q))A++;q=0;for(var ge=R;ge;ge=ye(ge))q++;for(;0<A-q;)j=ye(j),A--;for(;0<q-A;)R=ye(R),q--;for(;A--;){if(j===R||R!==null&&j===R.alternate){ye=j;break n}j=ye(j),R=ye(R)}ye=null}else ye=null;Y!==null&&kp(K,B,Y,ye,!1),de!==null&&Ze!==null&&kp(K,Ze,de,ye,!0)}}e:{if(B=C?dr(C):window,Y=B.nodeName&&B.nodeName.toLowerCase(),Y==="select"||Y==="input"&&B.type==="file")var Ie=Vs;else if(va(B))if(Ys)Ie=qs;else{Ie=Ni;var he=wa}else Y=B.nodeName,!Y||Y.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?C&&_i(C.elementType)&&(Ie=Vs):Ie=Ea;if(Ie&&(Ie=Ie(e,C))){Is(K,Ie,t,P);break e}he&&he(e,B,C),e==="focusout"&&C&&B.type==="number"&&C.memoizedProps.value!=null&&ma(B,"number",B.value)}switch(he=C?dr(C):window,e){case"focusin":(va(he)||he.contentEditable==="true")&&(T=he,M=C,Q=null);break;case"focusout":Q=M=T=null;break;case"mousedown":ce=!0;break;case"contextmenu":case"mouseup":case"dragend":ce=!1,Ge(K,t,P);break;case"selectionchange":if(x)break;case"keydown":case"keyup":Ge(K,t,P)}var Me;if(ga)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else Jr?ba(e,t)&&(Be="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Be="onCompositionStart");Be&&(Us&&t.locale!=="ko"&&(Jr||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&Jr&&(Me=Nn()):(un=P,yi="value"in un?un.value:un.textContent,Jr=!0)),he=zo(C,Be),0<he.length&&(Be=new Ds(Be,e,null,t,P),K.push({event:Be,listeners:he}),Me?Be.data=Me:(Me=ya(t),Me!==null&&(Be.data=Me)))),(Me=Oc?Gs(e,t):Cc(e,t))&&(Be=zo(C,"onBeforeInput"),0<Be.length&&(he=new Ds("onBeforeInput","beforeinput",null,t,P),K.push({event:he,listeners:Be}),he.data=Me)),gg(K,e,C,t,P)}Ep(K,n)})}function Ka(e,n,t){return{instance:e,listener:n,currentTarget:t}}function zo(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Zr(e,t),l!=null&&r.unshift(Ka(e,l,o)),l=Zr(e,n),l!=null&&r.push(Ka(e,l,o))),e.tag===3)return r;e=e.return}return[]}function xg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kp(e,n,t,r,l){for(var o=n._reactName,m=[];t!==null&&t!==r;){var g=t,k=g.alternate,C=g.stateNode;if(g=g.tag,k!==null&&k===r)break;g!==5&&g!==26&&g!==27||C===null||(k=C,l?(C=Zr(t,o),C!=null&&m.unshift(Ka(t,C,k))):l||(C=Zr(t,o),C!=null&&m.push(Ka(t,C,k)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var wg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function Np(e){return(typeof e=="string"?e:""+e).replace(wg,`
`).replace(Eg,"")}function Rp(e,n){return n=Np(n),Np(e)===n}function Qe(e,n,t,r,l,o){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||qr(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&qr(e,""+r);break;case"className":_e(e,"class",r);break;case"tabIndex":_e(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(e,t,r);break;case"style":Fr(e,r,o);break;case"data":if(n!=="object"){_e(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=ln(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Qe(e,n,"name",l.name,l,null),Qe(e,n,"formEncType",l.formEncType,l,null),Qe(e,n,"formMethod",l.formMethod,l,null),Qe(e,n,"formTarget",l.formTarget,l,null)):(Qe(e,n,"encType",l.encType,l,null),Qe(e,n,"method",l.method,l,null),Qe(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=ln(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=Mt);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=ln(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":De("beforetoggle",e),De("toggle",e),$t(e,"popover",r);break;case"xlinkActuate":ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ht(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ht(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ht(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ht(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":$t(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Es.get(t)||t,$t(e,t,r))}}function af(e,n,t,r,l,o){switch(t){case"style":Fr(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"children":typeof r=="string"?qr(e,r):(typeof r=="number"||typeof r=="bigint")&&qr(e,""+r);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Mt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),o=e[kn]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,l),typeof r=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,l);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):$t(e,t,r)}}}function In(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var r=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var m=t[o];if(m!=null)switch(o){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Qe(e,n,o,m,t,null)}}l&&Qe(e,n,"srcSet",t.srcSet,t,null),r&&Qe(e,n,"src",t.src,t,null);return;case"input":De("invalid",e);var g=o=m=l=null,k=null,C=null;for(r in t)if(t.hasOwnProperty(r)){var P=t[r];if(P!=null)switch(r){case"name":l=P;break;case"type":m=P;break;case"checked":k=P;break;case"defaultChecked":C=P;break;case"value":o=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,n));break;default:Qe(e,n,r,P,t,null)}}xs(e,o,g,k,C,m,l,!1);return;case"select":De("invalid",e),r=m=o=null;for(l in t)if(t.hasOwnProperty(l)&&(g=t[l],g!=null))switch(l){case"value":o=g;break;case"defaultValue":m=g;break;case"multiple":r=g;default:Qe(e,n,l,g,t,null)}n=o,t=m,e.multiple=!!r,n!=null?hr(e,!!r,n,!1):t!=null&&hr(e,!!r,t,!0);return;case"textarea":De("invalid",e),o=l=r=null;for(m in t)if(t.hasOwnProperty(m)&&(g=t[m],g!=null))switch(m){case"value":r=g;break;case"defaultValue":l=g;break;case"children":o=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(a(91));break;default:Qe(e,n,m,g,t,null)}$(e,r,l,o);return;case"option":for(k in t)if(t.hasOwnProperty(k)&&(r=t[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Qe(e,n,k,r,t,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(r=0;r<Xa.length;r++)De(Xa[r],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(r=t[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Qe(e,n,C,r,t,null)}return;default:if(_i(n)){for(P in t)t.hasOwnProperty(P)&&(r=t[P],r!==void 0&&af(e,n,P,r,t,void 0));return}}for(g in t)t.hasOwnProperty(g)&&(r=t[g],r!=null&&Qe(e,n,g,r,t,null))}function Sg(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,m=null,g=null,k=null,C=null,P=null;for(Y in t){var K=t[Y];if(t.hasOwnProperty(Y)&&K!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":k=K;default:r.hasOwnProperty(Y)||Qe(e,n,Y,null,r,K)}}for(var B in r){var Y=r[B];if(K=t[B],r.hasOwnProperty(B)&&(Y!=null||K!=null))switch(B){case"type":o=Y;break;case"name":l=Y;break;case"checked":C=Y;break;case"defaultChecked":P=Y;break;case"value":m=Y;break;case"defaultValue":g=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,n));break;default:Y!==K&&Qe(e,n,B,Y,r,K)}}qn(e,m,g,k,C,P,o,l);return;case"select":Y=m=g=B=null;for(o in t)if(k=t[o],t.hasOwnProperty(o)&&k!=null)switch(o){case"value":break;case"multiple":Y=k;default:r.hasOwnProperty(o)||Qe(e,n,o,null,r,k)}for(l in r)if(o=r[l],k=t[l],r.hasOwnProperty(l)&&(o!=null||k!=null))switch(l){case"value":B=o;break;case"defaultValue":g=o;break;case"multiple":m=o;default:o!==k&&Qe(e,n,l,o,r,k)}n=g,t=m,r=Y,B!=null?hr(e,!!t,B,!1):!!r!=!!t&&(n!=null?hr(e,!!t,n,!0):hr(e,!!t,t?[]:"",!1));return;case"textarea":Y=B=null;for(g in t)if(l=t[g],t.hasOwnProperty(g)&&l!=null&&!r.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Qe(e,n,g,null,r,l)}for(m in r)if(l=r[m],o=t[m],r.hasOwnProperty(m)&&(l!=null||o!=null))switch(m){case"value":B=l;break;case"defaultValue":Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(a(91));break;default:l!==o&&Qe(e,n,m,l,r,o)}hi(e,B,Y);return;case"option":for(var de in t)if(B=t[de],t.hasOwnProperty(de)&&B!=null&&!r.hasOwnProperty(de))switch(de){case"selected":e.selected=!1;break;default:Qe(e,n,de,null,r,B)}for(k in r)if(B=r[k],Y=t[k],r.hasOwnProperty(k)&&B!==Y&&(B!=null||Y!=null))switch(k){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Qe(e,n,k,B,r,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in t)B=t[ye],t.hasOwnProperty(ye)&&B!=null&&!r.hasOwnProperty(ye)&&Qe(e,n,ye,null,r,B);for(C in r)if(B=r[C],Y=t[C],r.hasOwnProperty(C)&&B!==Y&&(B!=null||Y!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:Qe(e,n,C,B,r,Y)}return;default:if(_i(n)){for(var Ze in t)B=t[Ze],t.hasOwnProperty(Ze)&&B!==void 0&&!r.hasOwnProperty(Ze)&&af(e,n,Ze,void 0,r,B);for(P in r)B=r[P],Y=t[P],!r.hasOwnProperty(P)||B===Y||B===void 0&&Y===void 0||af(e,n,P,B,r,Y);return}}for(var j in t)B=t[j],t.hasOwnProperty(j)&&B!=null&&!r.hasOwnProperty(j)&&Qe(e,n,j,null,r,B);for(K in r)B=r[K],Y=t[K],!r.hasOwnProperty(K)||B===Y||B==null&&Y==null||Qe(e,n,K,B,r,Y)}function Tp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],o=l.transferSize,m=l.initiatorType,g=l.duration;if(o&&g&&Tp(m)){for(m=0,g=l.responseEnd,r+=1;r<t.length;r++){var k=t[r],C=k.startTime;if(C>g)break;var P=k.transferSize,K=k.initiatorType;P&&Tp(K)&&(k=k.responseEnd,m+=P*(k<g?1:(g-C)/(k-C)))}if(--r,n+=8*(o+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sf=null,of=null;function Uo(e){return e.nodeType===9?e:e.ownerDocument}function Mp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function cf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uf=null;function Ng(){var e=window.event;return e&&e.type==="popstate"?e===uf?!1:(uf=e,!0):(uf=null,!1)}var Dp=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(e){return Ap.resolve(null).then(e).catch(Mg)}:Dp;function Mg(e){setTimeout(function(){throw e})}function yl(e){return e==="head"}function Op(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(l),Ji(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")Qa(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Qa(t);for(var o=t.firstChild;o;){var m=o.nextSibling,g=o.nodeName;o[Wn]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=m}}else t==="body"&&Qa(e.ownerDocument.body);t=l}while(t);Ji(n)}function Cp(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ff(t),Wt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function jg(e,n,t,r){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Wn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Dg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ut(e.nextSibling),e===null))return null;return e}function Lp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function df(e){return e.data==="$?"||e.data==="$~"}function mf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ag(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ut(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var pf=null;function Bp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Ut(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function zp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Up(e,n,t){switch(n=Uo(t),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Qa(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Wt(e)}var Ht=new Map,Hp=new Set;function Ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Lr=re.d;re.d={f:Og,r:Cg,D:Lg,C:Bg,L:zg,m:Ug,X:Gg,S:Hg,M:Ig};function Og(){var e=Lr.f(),n=jo();return e||n}function Cg(e){var n=tt(e);n!==null&&n.tag===5&&n.type==="form"?tm(n):Lr.r(e)}var Qi=typeof document>"u"?null:document;function Gp(e,n,t){var r=Qi;if(r&&typeof n=="string"&&n){var l=Pn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Hp.has(l)||(Hp.add(l),e={rel:e,crossOrigin:t,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),In(n,"link",e),rn(n),r.head.appendChild(n)))}}function Lg(e){Lr.D(e),Gp("dns-prefetch",e,null)}function Bg(e,n){Lr.C(e,n),Gp("preconnect",e,n)}function zg(e,n,t){Lr.L(e,n,t);var r=Qi;if(r&&e&&n){var l='link[rel="preload"][as="'+Pn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Pn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Pn(t.imageSizes)+'"]')):l+='[href="'+Pn(e)+'"]';var o=l;switch(n){case"style":o=Zi(e);break;case"script":o=Wi(e)}Ht.has(o)||(e=v({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Ht.set(o,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Za(o))||n==="script"&&r.querySelector(Wa(o))||(n=r.createElement("link"),In(n,"link",e),rn(n),r.head.appendChild(n)))}}function Ug(e,n){Lr.m(e,n);var t=Qi;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Pn(r)+'"][href="'+Pn(e)+'"]',o=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Wi(e)}if(!Ht.has(o)&&(e=v({rel:"modulepreload",href:e},n),Ht.set(o,e),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Wa(o)))return}r=t.createElement("link"),In(r,"link",e),rn(r),t.head.appendChild(r)}}}function Hg(e,n,t){Lr.S(e,n,t);var r=Qi;if(r&&e){var l=Jn(r).hoistableStyles,o=Zi(e);n=n||"default";var m=l.get(o);if(!m){var g={loading:0,preload:null};if(m=r.querySelector(Za(o)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Ht.get(o))&&hf(e,t);var k=m=r.createElement("link");rn(k),In(k,"link",e),k._p=new Promise(function(C,P){k.onload=C,k.onerror=P}),k.addEventListener("load",function(){g.loading|=1}),k.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Go(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:g},l.set(o,m)}}}function Gg(e,n){Lr.X(e,n);var t=Qi;if(t&&e){var r=Jn(t).hoistableScripts,l=Wi(e),o=r.get(l);o||(o=t.querySelector(Wa(l)),o||(e=v({src:e,async:!0},n),(n=Ht.get(l))&&_f(e,n),o=t.createElement("script"),rn(o),In(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Ig(e,n){Lr.M(e,n);var t=Qi;if(t&&e){var r=Jn(t).hoistableScripts,l=Wi(e),o=r.get(l);o||(o=t.querySelector(Wa(l)),o||(e=v({src:e,async:!0,type:"module"},n),(n=Ht.get(l))&&_f(e,n),o=t.createElement("script"),rn(o),In(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Ip(e,n,t,r){var l=(l=ne.current)?Ho(l):null;if(!l)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Zi(t.href),t=Jn(l).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Zi(t.href);var o=Jn(l).hoistableStyles,m=o.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=l.querySelector(Za(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Ht.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ht.set(e,t),o||Vg(l,e,t,m.state))),n&&r===null)throw Error(a(528,""));return m}if(n&&r!==null)throw Error(a(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Wi(t),t=Jn(l).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Zi(e){return'href="'+Pn(e)+'"'}function Za(e){return'link[rel="stylesheet"]['+e+"]"}function Vp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Vg(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),In(n,"link",t),rn(n),e.head.appendChild(n))}function Wi(e){return'[src="'+Pn(e)+'"]'}function Wa(e){return"script[async]"+e}function Yp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Pn(t.href)+'"]');if(r)return n.instance=r,rn(r),r;var l=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),rn(r),In(r,"style",l),Go(r,t.precedence,e),n.instance=r;case"stylesheet":l=Zi(t.href);var o=e.querySelector(Za(l));if(o)return n.state.loading|=4,n.instance=o,rn(o),o;r=Vp(t),(l=Ht.get(l))&&hf(r,l),o=(e.ownerDocument||e).createElement("link"),rn(o);var m=o;return m._p=new Promise(function(g,k){m.onload=g,m.onerror=k}),In(o,"link",r),n.state.loading|=4,Go(o,t.precedence,e),n.instance=o;case"script":return o=Wi(t.src),(l=e.querySelector(Wa(o)))?(n.instance=l,rn(l),l):(r=t,(l=Ht.get(o))&&(r=v({},t),_f(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),rn(l),In(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Go(r,t.precedence,e));return n.instance}function Go(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,o=l,m=0;m<r.length;m++){var g=r[m];if(g.dataset.precedence===n)o=g;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function _f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Io=null;function $p(e,n,t){if(Io===null){var r=new Map,l=Io=new Map;l.set(t,r)}else l=Io,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[Wn]||o[pn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(n)||"";m=e+m;var g=r.get(m);g?g.push(o):r.set(m,[o])}}return r}function Pp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Yg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $g(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Zi(r.href),o=n.querySelector(Za(l));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vo.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,rn(o);return}o=n.ownerDocument||n,r=Vp(r),(l=Ht.get(l))&&hf(r,l),o=o.createElement("link"),rn(o);var m=o;m._p=new Promise(function(g,k){m.onload=g,m.onerror=k}),In(o,"link",r),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Vo.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var gf=0;function Pg(e,n){return e.stylesheets&&e.count===0&&$o(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&$o(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&gf===0&&(gf=62500*kg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$o(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>gf?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$o(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yo=null;function $o(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yo=new Map,n.forEach(qg,e),Yo=null,Vo.call(e))}function qg(e,n){if(!(n.state.loading&4)){var t=Yo.get(e);if(t)var r=t.get(null);else{t=new Map,Yo.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var m=l[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),r=m)}r&&t.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),o=t.get(m)||r,o===r&&t.set(null,l),t.set(m,l),this.count++,r=Vo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Ja={$$typeof:ie,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Fg(e,n,t,r,l,o,m,g,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.hiddenUpdates=Zt(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Fp(e,n,t,r,l,o,m,g,k,C,P,K){return e=new Fg(e,n,t,m,k,C,P,K,g),n=1,o===!0&&(n|=24),o=_t(3,null,null,n),e.current=o,o.stateNode=e,n=Kc(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:r,isDehydrated:t,cache:n},Jc(o),e}function Xp(e){return e?(e=Mi,e):Mi}function Kp(e,n,t,r,l,o){l=Xp(l),r.context===null?r.context=l:r.pendingContext=l,r=ol(n),r.payload={element:t},o=o===void 0?null:o,o!==null&&(r.callback=o),t=cl(e,r,n),t!==null&&(ut(t,e,n),Da(t,e,n))}function Qp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function bf(e,n){Qp(e,n),(e=e.alternate)&&Qp(e,n)}function Zp(e){if(e.tag===13||e.tag===31){var n=Ql(e,67108864);n!==null&&ut(n,e,67108864),bf(e,67108864)}}function Wp(e){if(e.tag===13||e.tag===31){var n=xt();n=Vr(n);var t=Ql(e,n);t!==null&&ut(t,e,n),bf(e,n)}}var Po=!0;function Xg(e,n,t,r){var l=G.T;G.T=null;var o=re.p;try{re.p=2,yf(e,n,t,r)}finally{re.p=o,G.T=l}}function Kg(e,n,t,r){var l=G.T;G.T=null;var o=re.p;try{re.p=8,yf(e,n,t,r)}finally{re.p=o,G.T=l}}function yf(e,n,t,r){if(Po){var l=vf(r);if(l===null)lf(e,n,r,qo,t),eh(e,r);else if(Zg(l,e,n,t,r))r.stopPropagation();else if(eh(e,r),n&4&&-1<Qg.indexOf(e)){for(;l!==null;){var o=tt(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=on(o.pendingLanes);if(m!==0){var g=o;for(g.pendingLanes|=2,g.entangledLanes|=2;m;){var k=1<<31-On(m);g.entanglements[1]|=k,m&=~k}ar(o),($e&6)===0&&(To=En()+500,Fa(0))}}break;case 31:case 13:g=Ql(o,2),g!==null&&ut(g,o,2),jo(),bf(o,2)}if(o=vf(r),o===null&&lf(e,n,r,qo,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else lf(e,n,r,null,t)}}function vf(e){return e=_r(e),xf(e)}var qo=null;function xf(e){if(qo=null,e=Rt(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=_(n),e!==null)return e;e=null}else if(t===31){if(e=b(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return qo=e,null}function Jp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ml()){case jl:return 2;case ua:return 8;case Dl:case Zn:return 32;case ft:return 268435456;default:return 32}default:return 32}}var wf=!1,vl=null,xl=null,wl=null,es=new Map,ns=new Map,El=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eh(e,n){switch(e){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":xl=null;break;case"mouseover":case"mouseout":wl=null;break;case"pointerover":case"pointerout":es.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(n.pointerId)}}function ts(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=tt(n),n!==null&&Zp(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Zg(e,n,t,r,l){switch(n){case"focusin":return vl=ts(vl,e,n,t,r,l),!0;case"dragenter":return xl=ts(xl,e,n,t,r,l),!0;case"mouseover":return wl=ts(wl,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return es.set(o,ts(es.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,ns.set(o,ts(ns.get(o)||null,e,n,t,r,l)),!0}return!1}function nh(e){var n=Rt(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=_(t),n!==null){e.blockedOn=n,fa(e.priority,function(){Wp(t)});return}}else if(n===31){if(n=b(t),n!==null){e.blockedOn=n,fa(e.priority,function(){Wp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=vf(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Xr=r,t.target.dispatchEvent(r),Xr=null}else return n=tt(t),n!==null&&Zp(n),e.blockedOn=t,!1;n.shift()}return!0}function th(e,n,t){Fo(e)&&t.delete(n)}function Wg(){wf=!1,vl!==null&&Fo(vl)&&(vl=null),xl!==null&&Fo(xl)&&(xl=null),wl!==null&&Fo(wl)&&(wl=null),es.forEach(th),ns.forEach(th)}function Xo(e,n){e.blockedOn===n&&(e.blockedOn=null,wf||(wf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Wg)))}var Ko=null;function rh(e){Ko!==e&&(Ko=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ko===e&&(Ko=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(xf(r||t)===null)continue;break}var o=tt(t);o!==null&&(e.splice(n,3),n-=3,yu(o,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function Ji(e){function n(k){return Xo(k,e)}vl!==null&&Xo(vl,e),xl!==null&&Xo(xl,e),wl!==null&&Xo(wl,e),es.forEach(n),ns.forEach(n);for(var t=0;t<El.length;t++){var r=El[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<El.length&&(t=El[0],t.blockedOn===null);)nh(t),t.blockedOn===null&&El.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],o=t[r+1],m=l[kn]||null;if(typeof o=="function")m||rh(t);else if(m){var g=null;if(o&&o.hasAttribute("formAction")){if(l=o,m=o[kn]||null)g=m.formAction;else if(xf(l)!==null)continue}else g=m.action;typeof g=="function"?t[r+1]=g:(t.splice(r,3),r-=3),rh(t)}}}function lh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Ef(e){this._internalRoot=e}Qo.prototype.render=Ef.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var t=n.current,r=xt();Kp(t,r,e,n,null,null)},Qo.prototype.unmount=Ef.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kp(e.current,2,null,e,null,null),jo(),n[pt]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var n=cn();e={blockedOn:null,target:e,priority:n};for(var t=0;t<El.length&&n!==0&&n<El[t].priority;t++);El.splice(t,0,e),t===0&&nh(e)}};var ih=i.version;if(ih!=="19.2.7")throw Error(a(527,ih,"19.2.7"));re.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=w(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Jg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Al=Zo.inject(Jg),Sn=Zo}catch{}}return ls.createRoot=function(e,n){if(!f(e))throw Error(a(299));var t=!1,r="",l=dm,o=mm,m=pm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Fp(e,1,!1,null,null,t,r,null,l,o,m,lh),e[pt]=n.current,rf(e),new Ef(n)},ls.hydrateRoot=function(e,n,t){if(!f(e))throw Error(a(299));var r=!1,l="",o=dm,m=mm,g=pm,k=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.formState!==void 0&&(k=t.formState)),n=Fp(e,1,!0,n,t??null,r,l,k,o,m,g,lh),n.context=Xp(null),t=n.current,r=xt(),r=Vr(r),l=ol(r),l.callback=null,cl(t,l,r),t=r,n.current.lanes=t,Cl(n,t),ar(n),e[pt]=n.current,rf(e),new Qo(n)},ls.version="19.2.7",ls}var hh;function fb(){if(hh)return Nf.exports;hh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Nf.exports=ub(),Nf.exports}var db=fb();const mb=f_(db),_h=s=>{let i;const c=new Set,a=(w,y)=>{const v=typeof w=="function"?w(i):w;if(!Object.is(v,i)){const S=i;i=y??(typeof v!="object"||v===null)?v:Object.assign({},i,v),c.forEach(I=>I(i,S))}},f=()=>i,b={setState:a,getState:f,getInitialState:()=>E,subscribe:w=>(c.add(w),()=>c.delete(w))},E=i=s(a,f,b);return b},pb=(s=>s?_h(s):_h),hb=s=>s;function _b(s,i=hb){const c=ms.useSyncExternalStore(s.subscribe,ms.useCallback(()=>i(s.getState()),[s,i]),ms.useCallback(()=>i(s.getInitialState()),[s,i]));return ms.useDebugValue(c),c}const gh=s=>{const i=pb(s),c=a=>_b(i,a);return Object.assign(c,i),c},gb=(s=>s?gh(s):gh);function bb(){const s=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(s);else for(let c=0;c<s.length;c+=1)s[c]=Math.floor(Math.random()*256);let i="";for(const c of s)i+=c.toString(16).padStart(2,"0");return i}const Jf="pkp.user",ed="pkp.savedDevices",nd="pkp.ideDrafts",td="pkp.ideSettings",_s="Prototype Version 0.6.7";function pc(s){try{const i=localStorage.getItem(s);return i?JSON.parse(i):null}catch{return null}}function hc(s,i){try{localStorage.setItem(s,JSON.stringify(i))}catch{}}function yb(){const s=pc(Jf);return s&&typeof s.username=="string"&&typeof s.userID=="string"?s:null}function jf(s){hc(Jf,s)}function cc(){return pc(ed)??[]}function ra(s){hc(ed,s)}function vb(){ra([])}function xb(){try{localStorage.removeItem(Jf),localStorage.removeItem(ed),localStorage.removeItem(nd),localStorage.removeItem(td)}catch{}}function Wo(){var s;return((s=pc(nd))==null?void 0:s.filter(i=>i.path&&typeof i.content=="string"))??[]}function is(s){hc(nd,s)}function bh(){const s=pc(td)??{};return{clearTerminalOnRun:!!s.clearTerminalOnRun,simplifiedErrors:s.simplifiedErrors!==!1}}function wb(s){hc(td,s)}function Df(s){const i=cc(),c=i.findIndex(a=>a.deviceID===s.deviceID);return c>=0?i[c]=s:i.push(s),ra(i),i}function Eb(s){const i=cc().filter(c=>c.deviceID!==s);return ra(i),i}const Yf="b8e06067-62ad-41ba-9231-206ae80ab551",Sb="f897177b-aee8-4767-8ecc-cc694fd5fce0",kb="f897177b-aee8-4767-8ecc-cc694fd5fce1",Af=20,Nb=12,Rb=new TextEncoder,Tb=new TextDecoder;function Mb(s){return new Promise(i=>setTimeout(i,s))}function _c(){return typeof navigator<"u"&&"bluetooth"in navigator}function d_(s){return s?s.startsWith("PicoW-")?s.slice(6):s:"Pico"}async function jb(){if(!_c())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Yf]},{namePrefix:"PicoW-"}],optionalServices:[Yf]})}async function m_(){if(!_c()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Db{constructor(){me(this,"device",null);me(this,"writeChar",null);me(this,"notifyChar",null);me(this,"buffer","");me(this,"writeQueue",Promise.resolve());me(this,"disconnectNotified",!1);me(this,"onLine",()=>{});me(this,"onDisconnect",()=>{});me(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=Tb.decode(c.value.buffer);let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});me(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var f;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=i.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Yf);this.writeChar=await a.getCharacteristic(Sb),this.notifyChar=await a.getCharacteristic(kb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=Rb.encode(`${i}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let p=0;p<c.length;p+=Af){const _=c.slice(p,p+Af);await f(_),p+Af<c.length&&await Mb(Nb)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class Ab{constructor(i,c){me(this,"send");me(this,"onMessage");me(this,"inActive",!1);me(this,"inExpectedTotal",0);me(this,"inStreamId",0);me(this,"inParts",new Map);me(this,"inProgress",null);me(this,"outPendingLines",null);me(this,"outWaitingAck",!1);me(this,"outStreamId",0);me(this,"outNextStreamId",1);me(this,"outCache",new Map);me(this,"outProgress",null);me(this,"outResolve",null);me(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const f=i.split(","),p=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,_=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;p!==null&&p>0&&(this.inActive=!0,this.inExpectedTotal=p,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const f=i.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const p=parseInt(f[1],10),_=parseInt(f[2],10),b=this.outCache.get(_);p===this.outStreamId&&b&&this.send(b)}return}const c=this.parseNumbered(i);if(c){const{idx:f,payload:p}=c;if(!this.inActive){this.onMessage(p);return}this.inParts.has(f)||(this.inParts.set(f,p),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let b=1;b<=this.inExpectedTotal;b+=1)if(!this.inParts.has(b)){_=b;break}if(_>0&&this.inStreamId>0&&f>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let b=1;b<=this.inExpectedTotal;b+=1){const E=this.inParts.get(b);E!==void 0&&this.onMessage(E)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((p,_)=>{this.outResolve=p,this.outReject=_});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(p){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,p}await f}async flushOutbound(){var i,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const p=this.outPendingLines.length;for(let _=0;_<p;_+=1){const b=this.outPendingLines[_],E=`${_+1}-${b}`;this.outCache.set(_+1,E),await this.send(E),(c=this.outProgress)==null||c.call(this,_+1,p,b)}(a=this.outResolve)==null||a.call(this)}catch(p){(f=this.outReject)==null||f.call(this,p)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:i.slice(c+1)}}}const sa=11,gs=31,Ob=2,Cb=60,la=4,ia=40;function Lb(s,i){return Math.max(14,Math.min(56,Math.min(s,i)*.05))}function p_(s,i,c=sa,a=gs){const f=Lb(s,i),p=Math.max(1,s-2*f),_=Math.max(1,i-2*f);return{areaW:s,areaH:i,cols:c,rows:a,margin:f,stepX:p/Math.max(1,c-1),stepY:_/Math.max(1,a-1)}}function h_(s,i){return i.margin+s/2*i.stepX}function __(s,i){const c=i.margin+s/2*i.stepY;return i.areaH-c}function ps(s,i){return s.centerX2===null||s.centerY2===null||s.spanX===null||s.spanY===null?null:{cx:h_(s.centerX2,i),cy:__(s.centerY2,i),width:s.spanX*i.stepX,height:s.spanY*i.stepY}}function Bb(s){const i=[];for(let c=0;c<s.cols;c+=1)for(let a=0;a<s.rows;a+=1)i.push({x:s.margin+c*s.stepX,y:s.areaH-(s.margin+a*s.stepY)});return i}function lc(s,i,c,a,f){const p=(E,w,y,v)=>{const S=w%2,I=v*2;let V=S,F=1/0;for(let D=S;D<=I;D+=2){const L=Math.abs(y(D)-E);L<F&&(F=L,V=D)}return Math.max(w,Math.min(I-w,V))},_=p(s,c,E=>h_(E,f),f.cols-1),b=p(i,a,E=>__(E,f),f.rows-1);return{centerX2:_,centerY2:b}}const ui=6e3,zb=15,uc=[32,64,128,192],Ub=ui*10,Hb=3500,Gb=8e3,Ib=2,Vb=ui,Yb=ui*8;function Of(s){return new Promise(i=>setTimeout(i,s))}function ea(s){if(s!=null&&s.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function yh(s){return s instanceof DOMException&&s.name==="AbortError"}function kl(s){return s.replace(/[\r\n,]/g," ").trim()}class $b{constructor(i={}){me(this,"transport",new Db);me(this,"stream");me(this,"events");me(this,"waiters",[]);me(this,"collectingLayout",!1);me(this,"layoutBuffer",[]);me(this,"layoutResolve",null);me(this,"collectingLines",!1);me(this,"lineBuffer",[]);me(this,"lineResolve",null);me(this,"lineReject",null);me(this,"lineCollectId",0);me(this,"controlPumpActive",!1);me(this,"pendingButtons",[]);me(this,"pendingSliders",new Map);me(this,"pendingToggles",new Map);me(this,"pendingJoysticks",new Map);me(this,"pendingDpads",[]);me(this,"expectingDisconnect",!1);me(this,"disconnectMessage",null);me(this,"busy",!1);me(this,"fsCapabilities",null);this.events=i,this.stream=new Ab(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return d_((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,i,c)}progress(i,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,i,c)}onDeviceMessage(i){var a,f;if(i==="disconnect"||i==="disconnect_private"){const p=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=p,this.log("warning",p),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const p=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,p),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const p=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,p),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(p=>p.match(i));if(c>=0){const p=this.waiters[c];this.waiters.splice(c,1),clearTimeout(p.timer),p.resolve(i)}}waitFor(i,c,a){return new Promise((f,p)=>{const _=setTimeout(()=>{const b=this.waiters.findIndex(E=>E.timer===_);b>=0&&this.waiters.splice(b,1),p(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:f,reject:p,timer:_})})}async collectLines(i,c,a,f,p){ea(f);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(p??null);const b=new Promise((E,w)=>{let y=!1;const v=()=>this.lineCollectId===_,S=()=>{y=!0,v()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",V)},I=L=>{y||(clearTimeout(F),v()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),S(),w(L))},V=()=>{I(new DOMException("BLE file read cancelled","AbortError"))},F=setTimeout(()=>{v()&&I(new Error(`Timeout: ${a}`))},c);this.lineResolve=E,this.lineReject=I;const D=this.lineResolve;this.lineResolve=L=>{v()&&(clearTimeout(F),S(),D==null||D(L))},f==null||f.addEventListener("abort",V,{once:!0})});return await this.transport.writeLine(i),b}async exchange(i,c,a,f=3){let p;for(let _=1;_<=f;_+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,ui,a)}catch(b){p=b,this.log("warning",`${a}: forsøg ${_}/${f} mislykkedes`)}throw p instanceof Error?p:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var se,oe,pe;await Of(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",J=>J==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",J=>J==="unowned"||J.startsWith("unowned,")||J.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((se=c.split(",")[1])==null?void 0:se.trim())||void 0};const a=c.split(","),f=a[1]??"",p=a[2]!==void 0&&parseInt(a[2],10)||0,_=a[3]!==void 0?parseInt(a[3],10)===1:!0,b=a[4]!==void 0?parseInt(a[4],10)===1:!1,E=a.length>=7,w=E?parseInt(a[5]??"0",10)===1:b,y=((oe=a[E?6:5])==null?void 0:oe.trim())||void 0,v=((pe=a[E?7:6])==null?void 0:pe.trim())||void 0;await this.exchange("ACK:ownership",J=>J==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const S=await this.exchange(`request_permission,${i.userID},${kl(i.username)}`,J=>J.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const I=S.split(",").filter(J=>/^\d+$/.test(J)),V=I.length>=1?parseInt(I[0]??"0",10):0,F=I.length>=2?parseInt(I[1]??"0",10):0,D=I.length>=3?parseInt(I[2]??"0",10):F;if(V===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:y,canOthersConnect:_};const L=i.userID===f,H=F===1||L,ie=D===1||L;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:y,deviceName:v,iconID:p,canEdit:H,canEditCode:ie,isOwnedByMe:L,canOthersConnect:_,canOthersEdit:b,canOthersEditCode:w}}async create(i,c,a,f,p,_,b){const E=a?1:0,w=a&&f?1:0,y=a&&p?1:0;await this.exchange(`create,${i.userID},${kl(i.username)},${c},${E},${w},${y},${_},${b}`,v=>v==="ACK:create","create")}async updateDeviceSettings(i,c,a,f,p,_,b){const E=c?1:0,w=c&&a?1:0,y=c&&f?1:0;await this.exchange(`settings_update,${i},${E},${w},${y},${p},${_},${kl(b??"")}`,v=>v==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,f)=>{this.layoutResolve=a;const p=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},ui*2),_=this.layoutResolve;this.layoutResolve=b=>{clearTimeout(p),_==null||_(b)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(f=>{const p=b=>b===null?"n":String(b),_=`update,${f.type},${f.name},${p(f.centerX2)},${p(f.centerY2)},${p(f.spanX)},${p(f.spanY)},${f.rotation}`;return f.type==="slider"?`${_},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${_},${f.toggleInitial?1:0}`:f.type==="radar"?[_,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[_,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):_});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",ui*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${kl(i)}`,ui*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,p,_]=a.split(","),b=f==="file"||f==="dir"?f:"unknown",E=parseInt(_??"",10),w=p||"/";return{name:w.split("/").filter(Boolean).pop()??w,path:w,type:b,...Number.isFinite(E)&&E>=0?{size:E}:{}}})}handleRadarLine(i){var _,b,E;const c=i.split(",");if(c.length<4)return;const a=(_=c[1])==null?void 0:_.trim(),f=parseFloat(c[2]??""),p=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(p)||((E=(b=this.events).onRadar)==null||E.call(b,a,f,p),this.log("info",`rx: ${i}`))}handleTextLine(i){var b,E;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=i.slice(c+1,a),p=i.slice(a+1),_=f==null?void 0:f.trim();_&&((E=(b=this.events).onText)==null||E.call(b,_,p),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var p,_,b;const c=i.split(",");if(c.length<3)return;const a=(p=c[1])==null?void 0:p.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((b=(_=this.events).onToggleState)==null||b.call(_,a,f===1),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(i,f,c,a)}catch(p){if(a!=null&&a.aborted||yh(p)||!f.pageRead)throw p;this.log("warning",p instanceof Error?`fs_read_stream fejlede; bruger paged read: ${p.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",Vb,"fs_capabilities",i),a=c.find(y=>y.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(y=>y.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const p=f.split(","),_=new Map;for(let y=1;y<p.length-1;y+=2)_.set(p[y],p[y+1]);const b=parseInt(_.get("max_page")??"",10),E=parseInt(_.get("stream_chunk")??"",10),w={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(b)&&b>0?b:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(E)&&E>0?E:128};if(!w.pageRead&&!w.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=w,w}async readTextPaged(i,c,a){const f=await this.getFilesystemCapabilities(a);let p=0,_=Pb(f.maxPageSize),b=0,E=null,w="";const y=`Indlæser ${Cf(i)}...`;ea(a),c==null||c(5,y);for(let v=0;v<512;v+=1){ea(a),b===0&&(c==null||c(7,y));const I=await this.readPageWithRetry(i,b,p,_,a),V=I.lines;p=I.nextPageSizeIndex,_=I.maxPageSizeIndex,ea(a);const F=V.find(ee=>ee.startsWith("ERR"));if(F)throw new Error(F);const D=V.find(ee=>ee.startsWith("fs_page,"));if(!D)throw new Error("ERR: fs_read_page missing data");const[,L,H,ie,se=""]=D.split(",",5);if(L!==i)throw new Error("ERR: fs_read_page stale data");const oe=parseInt(H??"",10),pe=parseInt(ie??"",10);if(!Number.isFinite(oe)||oe!==b||!Number.isFinite(pe))throw new Error("ERR: fs_read_page invalid data");E=pe,w+=se,b+=Math.floor(se.length/2);const J=E>0?8+Math.min(87,Math.round(b/E*87)):95;if(c==null||c(J,y),b>=E||se.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(xh(w))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,f,p){let _,b=Math.min(a,f);for(;b>=0;){const E=uc[b],w=b===0?Ib:1,y=b===0?Gb:Hb;for(let v=1;v<=w;v+=1){ea(p);try{return{lines:await this.collectLines(`fs_read_page,${kl(i)},${c},${E}`,y,`fs_read_page ${c}`,p),nextPageSizeIndex:Math.min(b+1,f),maxPageSizeIndex:f}}catch(S){if(p!=null&&p.aborted||yh(S))throw S;if(_=S,v<w||b>0){const V=b>0&&v>=w?uc[b-1]:E;this.log("warning",`fs_read_page ${c} (${E} bytes) fejlede; prøver ${V} bytes`),await Of(80+v*80)}}}if(b===0)break;f=Math.max(0,b-1),b=f}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,f){const p=`Indlæser ${Cf(i)}...`,_=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,p);const b=await this.collectLines(`fs_read_stream,${kl(i)},${_}`,Yb,`fs_read_stream ${i}`,f,(J,ee)=>{const Re=8+Math.round(Math.min(J,ee)/Math.max(1,ee)*87);a==null||a(Math.min(95,Re),p)});ea(f);const E=b.find(J=>J.startsWith("ERR"));if(E)throw new Error(E);const w=b.find(J=>J.startsWith("fs_stream_begin,")),y=b.find(J=>J.startsWith("fs_stream_end,"));if(!w||!y)throw new Error("ERR: fs_read_stream missing metadata");const[,v,S]=w.split(",",4),[,I,V,F]=y.split(",",4),D=parseInt(S??"",10),L=parseInt(V??"",10),H=parseInt(F??"",10);if(v!==i||I!==i||!Number.isFinite(D)||D!==L||!Number.isFinite(H))throw new Error("ERR: fs_read_stream invalid metadata");let ie=0,se="";for(const J of b){if(!J.startsWith("fs_stream_chunk,"))continue;const[,ee,Re=""]=J.split(",",3),ve=parseInt(ee??"",10);if(!Number.isFinite(ve)||ve!==ie||Re.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");se+=Re,ie+=Math.floor(Re.length/2)}if(ie!==D)throw new Error("ERR: fs_read_stream size mismatch");const oe=xh(se);if(vh(oe)!==H)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(oe)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${kl(i)}`,y=>y==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),p=[...f].map(y=>y.toString(16).padStart(2,"0")).join(""),_=[];for(let y=0;y<p.length;y+=160)_.push(`fs_write_chunk,${p.slice(y,y+160)}`);_.push("fs_write_end");const b=vh(f),E=this.waitFor(y=>y==="ACK:fs_write_done"||y.startsWith("ACK:fs_write_done,")||y.startsWith("ERR"),Ub,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(y,v,S)=>{if(!S.startsWith("fs_write_chunk,"))return;const I=Math.min(f.length,y*80),V=18+Math.round(y/Math.max(1,v-1)*67);a==null||a(Math.min(85,V),`Sender ${I}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const w=await E;if(w.startsWith("ERR"))throw new Error(w);if(w.startsWith("ACK:fs_write_done,")){const[,y,v]=w.split(",",3),S=parseInt(y??"",10),I=parseInt(v??"",10);if(S!==f.length||I!==b)throw new Error(`ERR: BLE-verificering fejlede for ${Cf(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${kl(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}async ping(){await this.exchange("HELLO",i=>i==="ACK:HELLO","heartbeat",1)}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Of(zb)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[_,b]=a.value;return this.pendingSliders.delete(_),b}const f=this.pendingToggles.entries().next();if(!f.done){const[_,b]=f.value;return this.pendingToggles.delete(_),b}const p=this.pendingJoysticks.entries().next();if(!p.done){const[_,b]=p.value;return this.pendingJoysticks.delete(_),b}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const p of this.waiters)clearTimeout(p.timer),p.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,i)}}function Pb(s){let i=0;for(let c=0;c<uc.length;c+=1)uc[c]<=s&&(i=c);return i}function Cf(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")||s}function vh(s){let i=0;for(const c of s)i=i+c>>>0;return i}function xh(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}function wh(s){const i=(c,a)=>Number.isFinite(c)?Math.max(Ob,Math.min(Cb,c)):a;for(const c of s){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),p=i(parseInt(f[1],10),sa),_=i(parseInt(f[2],10),gs);return{cols:p,rows:_}}}return{cols:sa,rows:gs}}function Eh(s){const i=new Map;for(const c of s){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[p,_,b,E,w,y,v,S,I,V,F,D,L]=f;if(p!=="button"&&p!=="slider"&&p!=="toggle"&&p!=="radar"&&p!=="text"&&p!=="joystick"&&p!=="dpad"||i.has(_))continue;const H=re=>{if(re==="n")return null;const ue=parseInt(re,10);return Number.isNaN(ue)?null:ue},ie=parseInt(v,10)||0,se=S!==void 0?parseInt(S,10):0,oe=I!==void 0?parseInt(I,10):100,pe=["none","bottom","middle","top"].includes(V??"")?V:"none",J=S!==void 0?parseInt(S,10)===1:!1,ee=S!==void 0?parseFloat(S):0,Re=I!==void 0?parseFloat(I):180,ve=V!==void 0?parseFloat(V):200,we=F!==void 0?parseInt(F,10):1200,W=(re,ue)=>["none","bottom","middle","top"].includes(re??"")?re:ue,Pe=S!==void 0?parseInt(S,10):-100,Ae=I!==void 0?parseInt(I,10):100,qe=V!==void 0?parseInt(V,10):-100,G=F!==void 0?parseInt(F,10):100;i.set(_,{type:p,name:_,centerX2:H(b),centerY2:H(E),spanX:H(w),spanY:H(y),rotation:[0,90,180,270].includes(ie)?ie:0,...p==="slider"?{sliderMin:Number.isFinite(se)?se:0,sliderMax:Number.isFinite(oe)?oe:100,sliderRecenter:pe}:{},...p==="toggle"?{toggleInitial:J}:{},...p==="radar"?{radarMinAngle:Number.isFinite(ee)?ee:0,radarMaxAngle:Number.isFinite(Re)?Re:180,radarMaxDistance:Number.isFinite(ve)&&ve>0?ve:200,radarFadeMs:Number.isFinite(we)&&we>0?we:1200}:{},...p==="joystick"?{joystickXMin:Number.isFinite(Pe)?Pe:-100,joystickXMax:Number.isFinite(Ae)&&Ae!==Pe?Ae:100,joystickYMin:Number.isFinite(qe)?qe:-100,joystickYMax:Number.isFinite(G)&&G!==qe?G:100,joystickXRecenter:W(D,"middle"),joystickYRecenter:W(L,"middle")}:{}})}return[...i.values()]}let le=null,as=null,ss=null,Jo=!1,Sh=0,Br=!1;function qb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function kh(s){return new Promise(i=>setTimeout(i,s))}function Lf(s,i){const c=i.userID.toLowerCase();return s.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?i.username:a.ownerName}})}function Bf(s,i){return(s.name?d_(s.name):"")||(i==null?void 0:i.deviceName)||"Pico"}function Fb(s){return Object.fromEntries(s.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function Nh(s,i){const c=Fb(s);for(const a of s)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const ae=gb((s,i)=>{function c(y,v){s(S=>({logs:[{level:y,message:v,time:qb()},...S.logs].slice(0,200)}))}function a(y){as&&clearTimeout(as),Sh+=1,s({toast:{message:y,id:Sh}}),as=setTimeout(()=>s({toast:null}),4500)}function f(y=null){E(),s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:y})}function p(y){return{deviceID:y.deviceID,deviceName:y.deviceName,ownerID:y.ownerID,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.ownerName}}function _(y){const{screen:v,active:S,picoIdeOrigin:I}=i();if(E(),Br){Br=!1;return}y&&(c("warning",y),a(y)),(v==="control"||v==="connection"||v==="create"||v==="ide"&&I==="control")&&f(S?p(S):null)}function b(){ss||(ss=setInterval(()=>{w()},3e3))}function E(){ss&&(clearInterval(ss),ss=null,Jo=!1)}async function w(){if(Jo)return;const{screen:y,active:v}=i();if(!(!!(le!=null&&le.connected)&&!!v&&y==="control")){E();return}Jo=!0;try{await(le==null?void 0:le.ping())}catch{c("warning","Bluetooth-forbindelsen svarer ikke længere."),await(le==null?void 0:le.disconnect().catch(()=>{})),_("Bluetooth-forbindelsen svarede ikke og blev afbrudt.")}finally{Jo=!1}}return le=new $b({onProgress:(y,v)=>s({progress:{value:y,label:v}}),onLog:(y,v)=>c(y,v),onRadar:(y,v,S)=>{const I=Date.now(),V={id:`${I}-${Math.random().toString(36).slice(2)}`,angle:v,distance:S,createdAt:I};s(F=>{const D=F.layout.find(ie=>ie.type==="radar"&&ie.name===y),L=(D==null?void 0:D.radarFadeMs)??1200,H=F.radarPings[y]??[];return{radarPings:{...F.radarPings,[y]:[...H.filter(ie=>I-ie.createdAt<=L),V].slice(-80)}}})},onText:(y,v)=>{s(S=>({textValues:{...S.textValues,[y]:v}}))},onToggleState:(y,v)=>{s(S=>({toggleValues:{...S.toggleValues,[y]:v}}))},onDisconnect:y=>_(y)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const y=yb(),v=y?Lf(cc(),y):cc();y&&ra(v),s({user:y,savedDevices:v,splashTarget:y?"dashboard":"intro"})},finishSplash:()=>{const y=i().splashTarget;s({screen:y??"intro"})},createUser:y=>{const v=y.trim();if(!v)return;const S={username:v,userID:bb()};jf(S),s({user:S,screen:"dashboard"})},findDevice:async()=>{try{const y=await jb();await i().connectToDevice(y)}catch(y){y instanceof Error&&y.name!=="NotFoundError"&&c("error",y.message)}},connectToDevice:async(y,v)=>{var I,V,F;const S=i().user;if(!(!S||!le)){Br=!1,s({screen:"connection",connecting:{name:Bf(y,v),iconID:(v==null?void 0:v.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await le.connect(y);const D=await le.runHandshake(S),L=y.id,H=(D.kind==="owned"||D.kind==="unowned")&&((I=D.deviceName)==null?void 0:I.trim())||Bf(y,v);if(s(J=>J.connecting?{connecting:{...J.connecting,name:H}}:{}),D.kind==="denied"){const ee=`Du kan ikke forbinde, fordi ${((V=D.ownerName)==null?void 0:V.trim())||((F=v==null?void 0:v.ownerName)==null?void 0:F.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",ee),a(ee),s({screen:"dashboard",connecting:null}),await le.disconnect();return}if(D.kind==="unowned"){s({active:{deviceID:L,deviceName:H,ownerID:S.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:S.username,gridCols:sa,gridRows:gs},screen:"create"});return}const ie={deviceID:L,deviceName:H,ownerID:D.ownerID,deviceIconID:D.iconID,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?S.username:D.ownerName??(v==null?void 0:v.ownerName)};s({savedDevices:Df(ie)});const se=await le.requestLayout(),oe=wh(se),pe=Eh(se);s({layout:pe,sliderValues:{},toggleValues:Nh(pe,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:L,deviceName:H,ownerID:D.ownerID,iconID:D.iconID,canEdit:D.canEdit,canEditCode:D.canEditCode,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?S.username:D.ownerName??(v==null?void 0:v.ownerName),gridCols:oe.cols,gridRows:oe.rows},screen:"control",connecting:null,connectionLost:null}),b()}catch(D){const L=D instanceof Error?D.message:"Forbindelsen mislykkedes.";c("error",L),a("Forbindelsen mislykkedes."),s({screen:"dashboard",connecting:null}),await le.disconnect().catch(()=>{})}}},finishCreate:async(y,v,S,I,V,F)=>{const{user:D,active:L}=i();if(!(!D||!L||!le))try{le.setBusy(!0),await le.create(D,y,v,S,I,V,F),le.setBusy(!1);const H={deviceID:L.deviceID,deviceName:L.deviceName,ownerID:D.userID,deviceIconID:y,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&I,isOwnedByMe:!0,ownerName:D.username};s({savedDevices:Df(H)});const ie=await le.requestLayout(),se=wh(ie),oe=Eh(ie);s({layout:oe,sliderValues:{},toggleValues:Nh(oe,i().toggleValues),radarPings:{},textValues:{},active:{...L,ownerID:D.userID,iconID:y,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&I,ownerName:D.username,gridCols:se.cols,gridRows:se.rows},screen:"control"}),b()}catch(H){le.setBusy(!1);const ie=H instanceof Error?H.message:"Oprettelse mislykkedes.";c("error",ie),a("Oprettelse mislykkedes."),s({screen:"dashboard"}),await le.disconnect().catch(()=>{})}},saveDeviceSettings:async(y,v,S,I,V,F)=>{const{active:D,user:L}=i();if(!(!D||!le||!D.isOwnedByMe))try{le.setBusy(!0),await le.updateDeviceSettings(y,v,S,I,V,F,L==null?void 0:L.username);const H={...D,iconID:y,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&I,ownerName:(L==null?void 0:L.username)??D.ownerName,gridCols:V,gridRows:F},ie={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(L==null?void 0:L.userID),deviceIconID:y,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&I,isOwnedByMe:!0,ownerName:(L==null?void 0:L.username)??D.ownerName};s({active:H,savedDevices:Df(ie)}),a("Enhedsindstillinger gemt.")}catch(H){c("error",H instanceof Error?H.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{le.setBusy(!1)}},cancelCreate:async()=>{le&&await le.disconnect().catch(()=>{}),s({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Br=!0,f(null),le&&await le.disconnect().catch(()=>{}),Br=!1},removeSavedDevice:y=>{s({savedDevices:Eb(y)})},clearSavedDevices:()=>{vb(),s({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Br=!0,le!=null&&le.connected&&await le.disconnect().catch(()=>{}),xb(),window.location.reload()},updateUsername:y=>{const v=i().user,S=y.trim();if(!v||!S)return;const I={...v,username:S};jf(I),s(V=>{var D;const F=Lf(V.savedDevices,I);return ra(F),{user:I,active:(D=V.active)!=null&&D.isOwnedByMe?{...V.active,ownerName:S}:V.active,savedDevices:F}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const y=i().user;return y?Xb(y):null},applyOwnerPairingCode:y=>{var S;const v=Kb(y,(S=i().user)==null?void 0:S.username);return v?(jf(v),s(I=>{var F,D,L;const V=Lf(I.savedDevices,v);return ra(V),{user:v,active:((D=(F=I.active)==null?void 0:F.ownerID)==null?void 0:D.toLowerCase())===v.userID.toLowerCase()||(L=I.active)!=null&&L.isOwnedByMe?{...I.active,isOwnedByMe:!0,ownerID:v.userID,ownerName:v.username}:I.active,savedDevices:V}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const y=i().screen==="control"&&!!(le!=null&&le.connected),v=i().active;if(y&&v&&!v.isOwnedByMe&&!v.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),s({sideMenuOpen:!1});return}s(S=>({screen:"ide",picoIdeOrigin:y?"control":"dashboard",active:y?S.active:null,layout:y?S.layout:[],sliderValues:y?S.sliderValues:{},toggleValues:y?S.toggleValues:{},radarPings:y?S.radarPings:{},textValues:y?S.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:y,active:v}=i();s({screen:y==="control"&&v&&(le!=null&&le.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(le!=null&&le.connected),bleListFiles:async()=>le!=null&&le.connected?le.listFiles("/"):[],bleReadText:async(y,v,S)=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");return le.readText(y,v,S)},bleWriteText:async(y,v,S)=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");await le.writeText(y,v,S)},bleDeleteFile:async y=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");await le.deleteFile(y)},bleRestart:async()=>{le!=null&&le.connected&&await le.restart()},bleRestartAndReconnect:async(y="control")=>{const{active:v}=i();if(!(le!=null&&le.connected)||!v)return!1;const S={deviceID:v.deviceID,deviceName:v.deviceName,ownerID:v.ownerID,deviceIconID:v.iconID,canOthersConnect:v.canOthersConnect,canOthersEdit:v.canOthersEdit,canOthersEditCode:v.canOthersEditCode,isOwnedByMe:v.isOwnedByMe,ownerName:v.ownerName};Br=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await le.restart()}catch{}s({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:S.deviceName,iconID:S.deviceIconID}});for(let I=0;I<12&&(le!=null&&le.connected);I+=1)await kh(250);le!=null&&le.connected||(Br=!1);for(let I=1;I<=8;I+=1){await kh(I===1?1200:850);try{const F=(await m_()).find(D=>D.id===S.deviceID);if(!F){s({progress:{value:Math.min(88,20+I*8),label:"Venter på browser-tilladelse..."}});continue}return s({progress:{value:Math.min(92,24+I*8),label:`Genforbinder (${I}/8)...`}}),await i().connectToDevice(F,S),y==="ide"&&s(D=>({screen:"ide",picoIdeOrigin:"control",active:D.active,layout:D.layout,sliderValues:D.sliderValues,toggleValues:D.toggleValues,radarPings:D.radarPings,textValues:D.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(V){c("warning",V instanceof Error?V.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Br=!1,s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:S}),!1},reconnectLostDevice:async()=>{var v;const y=i().connectionLost;if(y){s({connectionLost:null});try{if((v=navigator.bluetooth)!=null&&v.getDevices){const I=(await navigator.bluetooth.getDevices()).find(V=>V.id===y.deviceID);if(I){await i().connectToDevice(I,y);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>s({connectionLost:null}),sendButton:(y,v)=>le==null?void 0:le.enqueueButton(y,v),sendSlider:(y,v)=>{s(S=>({sliderValues:{...S.sliderValues,[y]:v}})),le==null||le.enqueueSlider(y,v)},sendToggle:(y,v)=>{s(S=>({toggleValues:{...S.toggleValues,[y]:v}})),le==null||le.enqueueToggle(y,v)},sendJoystick:(y,v,S)=>le==null?void 0:le.enqueueJoystick(y,v,S),sendDpad:(y,v,S)=>le==null?void 0:le.enqueueDpad(y,v,S),saveLayout:async y=>{if(le)try{le.setBusy(!0),await le.saveLayout(y),s({layout:y,editMode:!1})}catch(v){c("error",v instanceof Error?v.message:"Kunne ikke gemme layout.")}finally{le.setBusy(!1)}},setEditMode:y=>s({editMode:y,sideMenuOpen:!1,menuPage:null}),setDashboardPage:y=>s({dashboardPage:y}),toggleSideMenu:y=>s(v=>({sideMenuOpen:y??!v.sideMenuOpen})),toggleDebugger:y=>s(v=>({debuggerOpen:y??!v.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:y=>s({menuPage:y,sideMenuOpen:!1}),closeMenuPage:()=>s({menuPage:null}),clearLogs:()=>s({logs:[]}),log:(y,v)=>c(y,v),askConfirm:y=>s({confirmDialog:y}),closeConfirm:()=>s({confirmDialog:null}),showToast:y=>a(y),dismissToast:()=>{as&&clearTimeout(as),s({toast:null})}}}),$f="PKP-EJER";function Xb(s){var a;const i=s.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${$f}-${c}-${g_(i)}`}function Kb(s,i="Ejer"){const c=s.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${$f}-`))return null;const a=c.slice($f.length+1).split("-").filter(Boolean),f=a.pop()??"",p=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(p)||f!==g_(p)?null:{userID:p,username:i.trim()||"Ejer"}}function g_(s){let i=2166136261;for(const c of s.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const gc="./",b_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function ca(s){const i=s>=0&&s<b_.length?s:0;return`${gc}device-icons/${i}.png`}const Qb=`${gc}art/logo.png`,Zb=`${gc}art/Teknologiskolen_logo.png`,Wb=`${gc}art/logo_teknologiskolen_white.png`,Jb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function nt({name:s,size:i=24,className:c}){return u.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Jb[s]})}const e0=1850,n0=450;function t0(){const s=ae(a=>a.splashTarget),i=ae(a=>a.finishSplash),c=s?"splash-screen-animation splash-ready":"splash-pending";return z.useEffect(()=>{if(!s)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?n0:e0,p=window.setTimeout(i,f);return()=>window.clearTimeout(p)},[i,s]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:Qb,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Rh(){const s=ae(f=>f.createUser),[i,c]=z.useState(""),a=i.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Zb,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:i,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>s(i),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:_s})]})}function rd({title:s,onMenu:i}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:s}),u.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:u.jsx(nt,{name:"menu"})})]})})}function Tn({title:s,onClose:i,children:c,closeVariant:a="plain"}){const f=a==="circle",p=z.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:_=>{p.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&p.current&&i(),p.current=!1},children:u.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:s}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:u.jsx(nt,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function Th(){const s=ae(S=>S.savedDevices),i=ae(S=>S.toggleSideMenu),c=ae(S=>S.findDevice),a=ae(S=>S.removeSavedDevice),f=ae(S=>S.askConfirm),p=ae(S=>S.dashboardPage),_=ae(S=>S.setDashboardPage),b=a0(),[E,w]=z.useState(null),y=_c(),v=s.filter(S=>p==="mine"?S.isOwnedByMe:!S.isOwnedByMe).sort(i0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(rd,{title:"Hovedmenu",onMenu:()=>i()}),u.jsxs("div",{className:"content dash-content",children:[!y&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:p==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:p==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:v.length===0?u.jsx("div",{className:"device-list-empty",children:p==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):v.map(S=>u.jsx(r0,{device:S,disabled:!y,onConnect:()=>b(S),onSettings:()=>w(S)},S.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!y,"aria-label":"Find enhed",children:u.jsx(nt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:_s}),E&&u.jsx(Tn,{title:"Enhedsindstillinger",onClose:()=>w(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:ca(E.deviceIconID),alt:""}),u.jsx("strong",{children:E.deviceName})]}),u.jsx(os,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(os,{label:"Ejer",value:l0(E)}),u.jsx(os,{label:"Offentlig",value:E.canOthersConnect?"Ja":"Nej"}),u.jsx(os,{label:"Andre må redigere layout",value:E.canOthersEdit?"Ja":"Nej"}),u.jsx(os,{label:"Andre må redigere kode",value:E.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!y,onClick:()=>{const S=E;w(null),b(S)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${E.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(E.deviceID),w(null)}}),children:"Glem enhed"})]})})]})}function r0({device:s,disabled:i,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[u.jsx("img",{className:"device-tile-icon",src:ca(s.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:s.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(nt,{name:"settings"})})]})}function os({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function l0(s){var i;return s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger"}function i0(s,i){return s.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function a0(){const s=ae(a=>a.connectToDevice),i=ae(a=>a.findDevice),c=ae(a=>a.log);return async a=>{const p=(await m_()).find(_=>_.id===a.deviceID);p?await s(p,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function s0(){const s=ae(c=>c.connecting),i=ae(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:ca((s==null?void 0:s.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(s==null?void 0:s.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function y_({selected:s,onSelect:i,onClose:c}){return u.jsx(Tn,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:b_.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===s?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:ca(a.id),alt:""})},a.id))})})}function o0(){const s=ae(se=>se.finishCreate),i=ae(se=>se.cancelCreate),[c,a]=z.useState(0),[f,p]=z.useState(!1),[_,b]=z.useState(!1),[E,w]=z.useState(!1),[y,v]=z.useState(!1),[S,I]=z.useState(sa),[V,F]=z.useState(gs),[D,L]=z.useState(!1),H=se=>Number.isFinite(se)?Math.max(la,Math.min(ia,Math.round(se))):sa;async function ie(){L(!0),await s(c,_,_&&E,_&&y,H(S),H(V))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>p(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:ca(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(nt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>b(!1),children:"Privat"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>b(!0),children:"Offentlig"})]}),_&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:E?"":"active",onClick:()=>w(!1),children:"Nej"}),u.jsx("button",{type:"button",className:E?"active":"",onClick:()=>w(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:y?"":"active",onClick:()=>v(!1),children:"Nej"}),u.jsx("button",{type:"button",className:y?"active":"",onClick:()=>v(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:la,max:ia,value:Number.isNaN(S)?"":S,onChange:se=>I(parseInt(se.target.value,10)),onBlur:()=>I(H(S))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:la,max:ia,value:Number.isNaN(V)?"":V,onChange:se=>F(parseInt(se.target.value,10)),onBlur:()=>F(H(V))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:D,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ie,disabled:D,children:D?"Opretter...":"Opret"})]})]}),f&&u.jsx(y_,{selected:c,onSelect:a,onClose:()=>p(!1)}),u.jsx("span",{className:"version",children:_s})]})}const oa=8;function ic(s){return Math.max(5,Math.min(22,s))}function c0(s,i,c){const a=Math.max(1,s.length),f=(i-oa*2)/(a*.58),p=(c-oa*2)*.48;return ic(Math.min(f,p))}function fi(s,i,c){switch(c){case 90:return{x:-i,y:s};case 180:return{x:-s,y:-i};case 270:return{x:i,y:-s};default:return{x:s,y:i}}}function fc(s){return(360-s)%360}function u0(s,i,c,a){const f=a===90||a===270;return c0(s,f?c:i,f?i:c)}function dc({name:s,width:i,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:u0(s,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:s})}function f0(s,i,c,a,f){const p=s.trim().split(/\s+/).filter(Boolean),_=Math.max(1,s.replace(/\s+/g,"").length+Math.max(0,p.length-1)*1.6),b=f?ic(Math.min(i/4.6,c/4.6,12)):0,E=f?b+oa:oa;if(a){const v=Math.max(1,c-E*2);return{fontSize:ic(Math.min(i*.48,v/(_*1.04))),endFontSize:b,centerInset:f?{top:E,bottom:E}:{}}}const w=Math.max(1,i-E*4.2);return{fontSize:ic(Math.min(c*.42,w/(_*.58))),endFontSize:b,centerInset:f?{left:E*2.1,right:E*2.1}:{}}}function d0({control:s,rect:i,disabled:c,latestValue:a,toggleValue:f,radarPings:p=[],textValue:_,onButton:b,onSlider:E,onToggle:w,onJoystick:y,onDpad:v}){const S=z.useRef(!1),I={left:i.cx,top:i.cy,width:i.width,height:i.height};if(s.type==="button"){const V=()=>{c||!S.current||(S.current=!1,b(s.name,!1))};return u.jsx("div",{className:"control",style:I,children:u.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:F=>{var D,L;c||(F.preventDefault(),(L=(D=F.currentTarget).setPointerCapture)==null||L.call(D,F.pointerId),S.current=!0,b(s.name,!0))},onPointerUp:F=>{var D,L;F.preventDefault(),(L=(D=F.currentTarget).releasePointerCapture)==null||L.call(D,F.pointerId),V()},onPointerCancel:V,onLostPointerCapture:V,children:u.jsx(dc,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}if(s.type==="toggle"){const V=!!f;return u.jsx("div",{className:"control",style:I,children:u.jsx("button",{className:`control-toggle ${V?"on":""}`,type:"button",disabled:c,"aria-pressed":V,style:{width:"100%",height:"100%"},onPointerDown:F=>{c||(F.preventDefault(),w(s.name,!V))},children:u.jsx(dc,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}return s.type==="radar"?u.jsx("div",{className:"control",style:I,children:u.jsx(x_,{control:s,pings:p,width:i.width,height:i.height})}):s.type==="text"?u.jsx("div",{className:"control",style:I,children:u.jsx(v_,{message:_??s.name,width:i.width,height:i.height,rotation:s.rotation})}):s.type==="joystick"?u.jsx("div",{className:"control",style:I,children:u.jsx(T0,{control:s,disabled:c,onJoystick:y,width:i.width,height:i.height})}):s.type==="dpad"?u.jsx("div",{className:"control",style:I,children:u.jsx(B0,{control:s,disabled:c,onDpad:v})}):u.jsx("div",{className:"control",style:I,children:u.jsx(R0,{control:s,disabled:c,latestValue:a,onSlider:E,width:i.width,height:i.height})})}function m0(s,i,c){const a=s.trim()||" ",p=a.split(/\s+/).filter(Boolean).reduce((v,S)=>Math.max(v,S.length),1),_=Math.max(1,Math.ceil(a.length/Math.max(1,Math.floor(p*1.9)))),b=Math.max(1,i-oa*3),E=Math.max(1,c-oa*3),w=b/(p*.58),y=E/(_*1.16);return Math.max(7,Math.min(24,w,y))}function v_({message:s,width:i,height:c,rotation:a=0}){const f=s.trim()||"...",p=a===90||a===270,_=m0(f,p?c:i,p?i:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:_},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function x_({control:s,pings:i,width:c,height:a,preview:f=!1}){const[,p]=z.useState(0),_=Math.max(120,s.radarFadeMs??1200),b=s.radarMinAngle??0,E=s.radarMaxAngle??180,w=Kn(b),y=Kn(E),v=Math.abs(E-b)>=360||w===y&&b!==E,S=Math.max(1,s.radarMaxDistance??200),I=Date.now(),V=i[i.length-1],F=s.rotation,D=Kn(w+F),L=Kn(y+F),H=E0(w,y),ie=((V==null?void 0:V.angle)??H)+F,se=f?[{id:"preview",angle:H,distance:S*.62,createdAt:I}]:i.filter(fe=>I-fe.createdAt<=_),oe=!v,pe=Math.max(8,Math.min(12,Math.min(c,a)*.16)),J=Math.max(7,pe*.85),ee=0,Re=0,ve=1,we=y0(v,D,L,F,S),W=v?{x:-1.12,y:-1.12,width:2.24,height:2.24}:v0(D,L,we.map(fe=>fe.point)),Pe=v?"":p0(ee,Re,ve,D,L),Ae=Ah(b),qe=Ah(E),G=oe?w0(D,L,W,c,a,Ae,qe,pe):null,re=we.map(fe=>{const Ee=w_(fe.point,W,c,a);return{key:fe.key,value:fe.value,x:Ee.x,y:Ee.y}});z.useEffect(()=>{if(f||i.length===0)return;const fe=window.setInterval(()=>p(Ee=>Ee+1),120);return()=>window.clearInterval(fe)},[_,i.length,f]);const ue=Et(ee,Re,ve,ie);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${W.x} ${W.y} ${W.width} ${W.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[v?u.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:Re,r:ve}):u.jsx("path",{className:"radar-sector-fill",d:Pe}),[.25,.5,.75,1].map(fe=>v?u.jsx("circle",{className:"radar-ring",cx:ee,cy:Re,r:ve*fe},fe):u.jsx("path",{className:"radar-ring",d:h0(ee,Re,ve*fe,D,L)},fe)),!v&&u.jsx(Mh,{cx:ee,cy:Re,radius:ve,angle:D}),!v&&u.jsx(Mh,{cx:ee,cy:Re,radius:ve,angle:L}),u.jsx("line",{className:"radar-sweep",x1:ee,y1:Re,x2:ue.x,y2:ue.y}),se.map(fe=>{const Ee=f?0:I-fe.createdAt,N=Math.max(0,1-Ee/_),U=Math.max(0,Math.min(S,fe.distance)),te=Et(ee,Re,ve*(U/S),fe.angle+F);return u.jsx("circle",{className:"radar-ping",cx:te.x,cy:te.y,r:Math.max(.025,Math.min(W.width,W.height)*.025),opacity:N},fe.id)})]}),oe&&G&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:G.min.x,top:G.min.y,fontSize:pe},children:Ae}),u.jsx("span",{className:"radar-angle-label",style:{left:G.max.x,top:G.max.y,fontSize:pe},children:qe})]}),re.map(fe=>u.jsx("span",{className:"radar-range-label",style:{left:fe.x,top:fe.y,fontSize:J},children:fe.value},fe.key))]})}function Mh({cx:s,cy:i,radius:c,angle:a}){const f=Et(s,i,c,a);return u.jsx("line",{className:"radar-boundary",x1:s,y1:i,x2:f.x,y2:f.y})}function Et(s,i,c,a){const f=(Kn(a)-90)*Math.PI/180;return{x:s+Math.cos(f)*c,y:i+Math.sin(f)*c}}function p0(s,i,c,a,f){const p=Et(s,i,c,a),_=Et(s,i,c,f),b=bc(a,f)>180?1:0;return`M ${s} ${i} L ${p.x} ${p.y} A ${c} ${c} 0 ${b} 1 ${_.x} ${_.y} Z`}function h0(s,i,c,a,f){const p=Et(s,i,c,a),_=Et(s,i,c,f),b=bc(a,f)>180?1:0;return`M ${p.x} ${p.y} A ${c} ${c} 0 ${b} 1 ${_.x} ${_.y}`}function bc(s,i){const c=Kn(s),a=Kn(i),f=a>=c?a-c:360-c+a;return f===0?360:f}const ec=[.25,.5,.75,1],_0=.1,g0=.85,b0=55;function y0(s,i,c,a,f){const p=(E,w,y)=>({key:`${E}-${w}`,value:Math.round(f*w),point:Et(0,0,w,y)});if(s){const E=Kn(180+a);return ec.map(w=>p("full",w,E))}const _=360-bc(i,c);if(_<b0){const E=Kn(c+_/2);return ec.map(w=>p("mid",w,E))}const b=(E,w,y)=>{const v=Math.asin(Math.min(g0,_0/w))*180/Math.PI;return Kn(E+y*v)};return[...ec.map(E=>p("min",E,b(i,E,-1))),...ec.map(E=>p("max",E,b(c,E,1)))]}function v0(s,i,c=[]){const a=[{x:0,y:0},Et(0,0,1,s),Et(0,0,1,i),...c];for(const v of[0,90,180,270])x0(v,s,i)&&a.push(Et(0,0,1,v));const f=Math.min(...a.map(v=>v.x)),p=Math.max(...a.map(v=>v.x)),_=Math.min(...a.map(v=>v.y)),b=Math.max(...a.map(v=>v.y)),E=Math.max(.1,p-f),w=Math.max(.1,b-_),y=Math.max(E,w)*.24;return{x:f-y,y:_-y,width:E+y*2,height:w+y*2}}function x0(s,i,c){const a=Kn(i),f=Kn(s),p=bc(i,c),_=Kn(f-a);return _>=0&&_<=p}function w0(s,i,c,a,f,p,_,b){const w=Et(0,0,1.1,s),y=Et(0,0,1.1,i);return{min:jh(w,c,a,f,p,b),max:jh(y,c,a,f,_,b)}}function w_(s,i,c,a){return{x:(s.x-i.x)/i.width*c,y:(s.y-i.y)/i.height*a}}function jh(s,i,c,a,f,p){const _=w_(s,i,c,a),b=Math.max(10,f.length*p*.62),E=p,w=7;return{x:Dh(_.x,b/2+w,Math.max(b/2+w,c-b/2-w)),y:Dh(_.y,E/2+w,Math.max(E/2+w,a-E/2-w))}}function Dh(s,i,c){return Math.max(i,Math.min(c,s))}function Ah(s){return`${Math.round(s)}`}function Kn(s){return Number.isFinite(s)?(s%360+360)%360:0}function E0(s,i){const c=Kn(s),a=Kn(i),f=a>=c?a-c:360-c+a;return Kn(c+f/2)}function S0(s,i){if(!i)return s;const c=s.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((p,_)=>u.jsx("span",{children:p},`${p}-${_}`))},`${a}-${f}`))})}function k0(s){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return s===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:s===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:s===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function N0({name:s,vertical:i,rotation:c,color:a,fontSize:f,endFontSize:p,centerInset:_,lowLabel:b,highLabel:E,showEnds:w}){const y=w?k0(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:S0(s,i)}),y&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...y.low,fontWeight:800,fontSize:p},children:b}),u.jsx("div",{style:{...y.high,fontWeight:800,fontSize:p},children:E})]})]})}function E_({name:s,rotation:i,width:c,height:a,value:f,showEnds:p=!1,fillColor:_="var(--red)",lowLabel:b="0",highLabel:E="100"}){const w=i===90||i===270,{fontSize:y,endFontSize:v,centerInset:S}=f0(s,c,a,w,p);let I,V;i===0?(I={left:0,top:0,bottom:0,width:`${f}%`},V={left:0,top:0}):i===180?(I={right:0,top:0,bottom:0,width:`${f}%`},V={right:0,top:0}):i===90?(I={left:0,right:0,bottom:0,height:`${f}%`},V={left:0,bottom:0}):(I={left:0,right:0,top:0,height:`${f}%`},V={left:0,top:0});const F=D=>u.jsx(N0,{name:s,vertical:w,rotation:i,color:D,fontSize:y,endFontSize:v,centerInset:S,lowLabel:b,highLabel:E,showEnds:p});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:F("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...I},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...V},children:F("var(--white)")})})]})}function R0({control:s,disabled:i,latestValue:c,onSlider:a,width:f,height:p}){const _=z.useRef(null),b=s.sliderMin??0,E=s.sliderMax??100,[w,y]=z.useState(()=>c===void 0?Oh(s.sliderRecenter??"none"):Ch(c,b,E)),v=z.useRef(null),S=s.rotation;z.useEffect(()=>{c!==void 0&&(y(Ch(c,b,E)),v.current=c)},[c,b,E]);function I(L){const H=_.current;if(!H)return 0;const ie=H.getBoundingClientRect();let se;return S===0?se=(L.clientX-ie.left)/ie.width:S===180?se=1-(L.clientX-ie.left)/ie.width:S===90?se=1-(L.clientY-ie.top)/ie.height:se=(L.clientY-ie.top)/ie.height,Math.max(0,Math.min(1,se))}function V(L){i||F(I(L))}function F(L){const H=Math.round(L*100),ie=Math.round(b+(E-b)*L);y(H),ie!==v.current&&(v.current=ie,a(s.name,ie))}function D(){const L=s.sliderRecenter??"none";i||L==="none"||F(Oh(L)/100)}return u.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:L=>{i||(L.preventDefault(),L.currentTarget.setPointerCapture(L.pointerId),V(L))},onPointerMove:L=>{L.buttons!==0&&V(L)},onPointerUp:D,onPointerCancel:D,onLostPointerCapture:D,children:u.jsx(E_,{name:s.name,rotation:S,width:f,height:p,value:w,showEnds:!0,lowLabel:String(b),highLabel:String(E)})})}function Oh(s){return s==="bottom"?0:s==="top"?100:s==="middle"?50:0}function Ch(s,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((s-i)/(c-i)*100)))}function Lh(s,i,c){return Math.round(i+(c-i)*(s+1)/2)}function Bh(s,i){return s==="bottom"?i?1:-1:s==="top"?i?-1:1:0}function zh(s){return{nx:Bh(s.joystickXRecenter,!1),ny:Bh(s.joystickYRecenter,!0)}}function S_(s,i){const c=Math.min(s,i),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function k_({control:s,width:i,height:c,pos:a,dragging:f=!1}){const p=s.rotation,{knobRadius:_,reach:b}=S_(i,c),E=Math.max(7,Math.min(14,_*.62)),w=Math.max(7,Math.min(12,Math.min(i,c)*.1)),y=[{key:"xmax",value:s.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:s.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:s.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:s.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:b*2,height:b*2,transform:"translate(-50%, -50%)"}}),y.map(v=>{const S=fi(v.lx,v.ly,p);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:w,transform:`translate(-50%, -50%) translate(${S.x*b}px, ${S.y*b}px) rotate(${p}deg)`},children:v.value},v.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:_*2,height:_*2,fontSize:E,transform:`translate(calc(-50% + ${a.nx*b}px), calc(-50% + ${a.ny*b}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:s.rotation?`rotate(${s.rotation}deg)`:void 0,whiteSpace:s.rotation===90||s.rotation===270?"nowrap":void 0},children:s.name})})]})}function T0({control:s,disabled:i,onJoystick:c,width:a,height:f}){const p=s.rotation,_=z.useRef(null),[b,E]=z.useState(()=>{const H=zh(s),ie=fi(H.nx,H.ny,p);return{nx:ie.x,ny:ie.y}}),w=z.useRef(!1),y=z.useRef(null),v=s.joystickXMin??-100,S=s.joystickXMax??100,I=s.joystickYMin??-100,V=s.joystickYMax??100;function F(H,ie){const se=fi(H,ie,fc(p)),oe=Lh(se.x,v,S),pe=Lh(-se.y,I,V);(!y.current||y.current.x!==oe||y.current.y!==pe)&&(y.current={x:oe,y:pe},c(s.name,oe,pe))}function D(H){const ie=_.current;if(!ie)return;const se=ie.getBoundingClientRect(),{reach:oe}=S_(se.width,se.height);let pe=(H.clientX-(se.left+se.width/2))/oe,J=(H.clientY-(se.top+se.height/2))/oe;const ee=Math.hypot(pe,J);ee>1&&(pe/=ee,J/=ee),E({nx:pe,ny:J}),F(pe,J)}function L(){const H=s.joystickXRecenter??"middle",ie=s.joystickYRecenter??"middle";if(H==="none"&&ie==="none")return;const se=fi(b.nx,b.ny,fc(p)),oe=zh(s),pe={x:H==="none"?se.x:oe.nx,y:ie==="none"?se.y:oe.ny},J=fi(pe.x,pe.y,p),ee={nx:J.x,ny:J.y};w.current=!1,E(ee),F(ee.nx,ee.ny)}return u.jsx("div",{ref:_,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),w.current=!0,D(H))},onPointerMove:H=>{i||!w.current||H.buttons===0||D(H)},onPointerUp:L,onPointerCancel:L,onLostPointerCapture:L,children:u.jsx(k_,{control:s,width:a,height:f,pos:b,dragging:w.current})})}const M0=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],j0="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",D0=.1,A0={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},O0={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},C0=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Pf(s,i){return Math.hypot(s,i)<D0?null:Math.abs(s)>=Math.abs(i)?s>0?"right":"left":i>0?"down":"up"}function L0(s,i){const[c,a]=O0[s],f=fi(c,a,fc(i));return Pf(f.x,f.y)??s}function N_({control:s,active:i=null}){const c=s.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[M0.map(a=>u.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:j0},a.direction)),C0.map(a=>u.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:A0[L0(a.pos,c)]},a.pos))]})})}function B0({control:s,disabled:i,onDpad:c}){const a=z.useRef(null),f=z.useRef(null),p=z.useRef(!1),[_,b]=z.useState(null);function E(S){const I=a.current;if(!I)return{screen:null,logical:null};const V=I.getBoundingClientRect(),F=Math.min(V.width,V.height)/2,D=(S.clientX-(V.left+V.width/2))/F,L=(S.clientY-(V.top+V.height/2))/F,H=Pf(D,L),ie=fi(D,L,fc(s.rotation)),se=Pf(ie.x,ie.y);return{screen:H,logical:se}}function w(S){const I=a.current;if(!I)return!1;const V=I.getBoundingClientRect(),F=(S.clientX-V.left)/V.width,D=(S.clientY-V.top)/V.height;return F>=0&&F<=1&&D>=0&&D<=1}function y(S){S.logical!==f.current&&(f.current&&c(s.name,f.current,!1),f.current=S.logical,S.logical&&c(s.name,S.logical,!0)),b(S.screen)}function v(){p.current=!1,y({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:S=>{i||!w(S)||(S.preventDefault(),S.currentTarget.setPointerCapture(S.pointerId),p.current=!0,y(E(S)))},onPointerMove:S=>{i||!p.current||S.buttons===0||y(E(S))},onPointerUp:v,onPointerCancel:v,onLostPointerCapture:v,children:u.jsx(N_,{control:s,active:_})})}const z0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},U0=["button","slider","toggle","radar","text","joystick","dpad"];function H0({unplaced:s,onAdd:i,onClose:c}){const a=z.useMemo(()=>U0.filter(b=>s.some(E=>E.type===b)),[s]),[f,p]=z.useState(a[0]??"button"),_=s.filter(b=>b.type===f);return z.useEffect(()=>{a.length>0&&!a.includes(f)&&p(a[0])},[a,f]),u.jsxs(Tn,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(b=>u.jsx("button",{type:"button",className:f===b?"active":"",onClick:()=>p(b),children:z0[b]},b))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(b=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(b.name),children:[u.jsx("span",{children:b.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(nt,{name:"plus",size:22})})]},b.name))})]})}function R_(s){const[i,c]=z.useState({w:0,h:0}),a=z.useRef(null),f=z.useRef(null);return z.useLayoutEffect(()=>{var E;const p=s.current;if(a.current===p)return;if((E=f.current)==null||E.disconnect(),f.current=null,a.current=p,!p){c(w=>w.w===0&&w.h===0?w:{w:0,h:0});return}const _=()=>{const w={w:p.clientWidth,h:p.clientHeight};c(y=>y.w===w.w&&y.h===w.h?y:w)};_();const b=new ResizeObserver(_);b.observe(p),f.current=b}),z.useEffect(()=>()=>{var p;(p=f.current)==null||p.disconnect(),f.current=null,a.current=null},[]),i}function aa(s){return s.centerX2!==null&&s.centerY2!==null&&s.spanX!==null&&s.spanY!==null}const G0=4,I0=5;function V0(s){return s==="joystick"||s==="dpad"?{spanX:6,spanY:6}:{spanX:G0,spanY:I0}}function Uh(s){if(!aa(s))return null;const i=s.centerX2/2,c=s.centerY2/2;return{x0:i-s.spanX/2,x1:i+s.spanX/2,y0:c-s.spanY/2,y1:c+s.spanY/2}}function Y0(s,i,c=.02){return s.x0<i.x1-c&&i.x0<s.x1-c&&s.y0<i.y1-c&&i.y0<s.y1-c}function Hh(s,i){const c=ps(s,i);if(!c||s.spanX===null||s.spanY===null)return s;const a=lc(c.cx,c.cy,s.spanX,s.spanY,i);return{...s,centerX2:a.centerX2,centerY2:a.centerY2}}function Gh(s,i){return Math.max(1,Math.min(i.cols-1,s))}function Ih(s,i){return Math.max(1,Math.min(i.rows-1,s))}function $0(){const s=ae(O=>O.layout),i=ae(O=>O.active),c=ae(O=>O.saveLayout),a=ae(O=>O.setEditMode),f=ae(O=>O.askConfirm),p=!!(i!=null&&i.canEdit),[_,b]=z.useState(()=>s.map(O=>({...O}))),[E,w]=z.useState(null),[y,v]=z.useState(!1),[S,I]=z.useState(null),[V,F]=z.useState(null),[D,L]=z.useState(!1),H=z.useRef(null),ie=R_(H),se=ie.w>0&&ie.h>0,oe=p_(ie.w,ie.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),pe=z.useMemo(()=>se?Bb(oe):[],[oe,se]),J=_.filter(aa),ee=_.filter(O=>!aa(O)),Re=z.useMemo(()=>{const O=new Set;for(let Z=0;Z<J.length;Z+=1)for(let ne=Z+1;ne<J.length;ne+=1){const X=Uh(J[Z]),He=Uh(J[ne]);X&&He&&Y0(X,He)&&(O.add(J[Z].name),O.add(J[ne].name))}return O},[J]),ve=Re.size>0,we=_.find(O=>O.name===E)??null,W=z.useMemo(()=>Vh(_)!==Vh(s),[_,s]),Pe=z.useMemo(()=>{if(!S||!V)return null;const O=_.find(X=>X.name===S);if(!O||O.spanX===null||O.spanY===null)return null;const Z=lc(V.cx,V.cy,O.spanX,O.spanY,oe),ne=ps({...O,centerX2:Z.centerX2,centerY2:Z.centerY2},oe);return ne?{name:O.name,rect:ne}:null},[_,S,V,oe]);function Ae(O,Z){b(ne=>ne.map(X=>X.name===O?Z(X):X))}function qe(O,Z){O.stopPropagation(),w(Z.name);const ne=ps(Z,oe);ne&&(I(Z.name),F({cx:ne.cx,cy:ne.cy}),O.currentTarget.setPointerCapture(O.pointerId))}function G(O){if(!S)return;const Z=H.current;if(!Z)return;const ne=Z.getBoundingClientRect(),X=Z.clientWidth/ne.width,He=Z.clientHeight/ne.height;F({cx:Math.max(0,Math.min(Z.clientWidth,(O.clientX-ne.left)*X)),cy:Math.max(0,Math.min(Z.clientHeight,(O.clientY-ne.top)*He))})}function re(){if(S&&V){const O=_.find(Z=>Z.name===S);if(O&&O.spanX!==null&&O.spanY!==null){const Z=lc(V.cx,V.cy,O.spanX,O.spanY,oe);Ae(S,ne=>({...ne,centerX2:Z.centerX2,centerY2:Z.centerY2}))}}I(null),F(null)}function ue(O){Ae(O,Z=>Z.spanX===null||Z.spanY===null?{...Z,rotation:(Z.rotation+270)%360}:Hh({...Z,rotation:(Z.rotation+270)%360,spanX:Gh(Z.spanY,oe),spanY:Ih(Z.spanX,oe)},oe))}function fe(O,Z,ne){Ae(O,X=>{if(X.spanX===null||X.spanY===null)return X;const He=Z==="x"?Gh(X.spanX+ne,oe):X.spanX,Oe=Z==="y"?Ih(X.spanY+ne,oe):X.spanY;return Hh({...X,spanX:He,spanY:Oe},oe)})}function Ee(O){Ae(O,Z=>({...Z,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),w(null)}function N(O){v(!1);const Z=_.find(Oe=>Oe.name===O);if(!Z)return;const{spanX:ne,spanY:X}=V0(Z.type),He=lc(oe.areaW/2,oe.areaH/2,ne,X,oe);Ae(O,()=>({...Z,spanX:ne,spanY:X,rotation:0,centerX2:He.centerX2,centerY2:He.centerY2})),w(O)}async function U(){ve||(L(!0),await c(_),L(!1))}function te(){if(!W){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"edit-band edit-toolbar-band",children:we&&aa(we)?u.jsxs("div",{className:"edit-toolbar",onPointerDown:O=>O.stopPropagation(),children:[u.jsx(cs,{label:"⟲",title:"Roter",onClick:()=>ue(we.name)}),u.jsx(cs,{label:"W−",title:"Gør smallere",onClick:()=>fe(we.name,"x",-1),disabled:we.spanX===null||we.spanX<=1}),u.jsx(cs,{label:"W+",title:"Gør bredere",onClick:()=>fe(we.name,"x",1),disabled:we.spanX===null||we.spanX>=oe.cols-1}),u.jsx(cs,{label:"H−",title:"Gør lavere",onClick:()=>fe(we.name,"y",-1),disabled:we.spanY===null||we.spanY<=1}),u.jsx(cs,{label:"H+",title:"Gør højere",onClick:()=>fe(we.name,"y",1),disabled:we.spanY===null||we.spanY>=oe.rows-1}),u.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Ee(we.name),"aria-label":"Slet",children:u.jsx(nt,{name:"delete",size:24})})]}):u.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:H,style:{touchAction:"none"},onPointerMove:G,onPointerUp:re,onPointerDown:()=>w(null),children:se&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:oe.areaW,height:oe.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:pe.map((O,Z)=>u.jsx("circle",{cx:O.x,cy:O.y,r:2.5,fill:"rgba(198,80,78,0.45)"},Z))}),Pe&&u.jsx("div",{className:"snap-preview",style:{left:Pe.rect.cx,top:Pe.rect.cy,width:Pe.rect.width,height:Pe.rect.height}}),J.map(O=>{const Z=S===O.name&&V,ne=ps(O,oe);if(!ne)return null;const X=Z?V.cx:ne.cx,He=Z?V.cy:ne.cy,Oe={left:X,top:He,width:ne.width,height:ne.height,outline:E===O.name?"3px solid var(--text)":"none",outlineOffset:2};return u.jsx("div",{className:`control ${Re.has(O.name)?"colliding":""}`,style:Oe,onPointerDown:Qn=>qe(Qn,O),children:O.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(dc,{name:O.name,width:ne.width,height:ne.height,rotation:O.rotation})}):O.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(dc,{name:O.name,width:ne.width,height:ne.height,rotation:O.rotation})}):O.type==="radar"?u.jsx(x_,{control:O,pings:[],width:ne.width,height:ne.height,preview:!0}):O.type==="text"?u.jsx(v_,{message:O.name,width:ne.width,height:ne.height,rotation:O.rotation}):O.type==="joystick"?u.jsx(k_,{control:O,width:ne.width,height:ne.height,pos:{nx:0,ny:0}}):O.type==="dpad"?u.jsx(N_,{control:O}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(E_,{name:O.name,rotation:O.rotation,width:ne.width,height:ne.height,value:50,showEnds:!0,lowLabel:String(O.sliderMin??0),highLabel:String(O.sliderMax??100),fillColor:Re.has(O.name)?"var(--disabled)":"var(--red)"})})},O.name)}),p&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:O=>O.stopPropagation(),onClick:()=>v(!0),"aria-label":"Tilføj kontrol",children:u.jsx(nt,{name:"plus",size:24})}),D&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:te,disabled:D,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:U,disabled:ve||D,children:D?"Gemmer...":"Gem"})]}),y&&u.jsx(H0,{unplaced:ee,onAdd:N,onClose:()=>v(!1)})]})}function Vh(s){return JSON.stringify(s.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function cs({label:s,title:i,disabled:c,onClick:a}){return u.jsx("button",{type:"button","aria-label":i,title:i,disabled:c,onClick:a,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:s})}function P0(){const s=ae(H=>H.layout),i=ae(H=>H.editMode),c=ae(H=>H.active),a=ae(H=>H.sliderValues),f=ae(H=>H.toggleValues),p=ae(H=>H.radarPings),_=ae(H=>H.textValues),b=ae(H=>H.toggleSideMenu),E=ae(H=>H.sendButton),w=ae(H=>H.sendSlider),y=ae(H=>H.sendToggle),v=ae(H=>H.sendJoystick),S=ae(H=>H.sendDpad),I=z.useRef(null),V=R_(I),F=p_(V.w,V.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),D=V.w>0&&V.h>0,L=s.filter(aa);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(rd,{title:"Kontrol Panel",onMenu:()=>b()}),i?u.jsx($0,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:I,children:D?L.map(H=>{const ie=ps(H,F);return ie?u.jsx(d0,{control:H,rect:ie,disabled:!1,latestValue:H.type==="slider"?a[H.name]:void 0,toggleValue:H.type==="toggle"?f[H.name]:void 0,radarPings:H.type==="radar"?p[H.name]:void 0,textValue:H.type==="text"?_[H.name]:void 0,onButton:E,onSlider:w,onToggle:y,onJoystick:v,onDpad:S},H.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const q0="",Yh="",$h="",ci="";function us(s){return new Promise(i=>setTimeout(i,s))}class F0{constructor(i){this.transport=i}async interrupt(){await this.transport.write($h),await us(80),await this.transport.write($h)}async friendlyRepl(){await this.transport.write(Yh)}async softReset(){await this.transport.write(ci)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.disconnect()
except Exception:
    pass
`).catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await us(180)}),await us(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await us(80),await this.transport.write(`\r
`),await us(40),!(await this.collectUntil(async()=>{await this.transport.write(q0)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ci)},f=>f.includes(`${ci}${ci}`)||f.includes(`${ci}>`),c);return await this.friendlyRepl().catch(()=>{}),X0(a)}collectUntil(i,c,a){return new Promise((f,p)=>{let _="",b=null;const E=setTimeout(()=>{b==null||b(),p(new Error("Timeout ved USB REPL kommando."))},a);b=this.transport.addDataListener(w=>{_+=w,c(_)&&(clearTimeout(E),b==null||b(),f(_))}),i().catch(w=>{clearTimeout(E),b==null||b(),p(w instanceof Error?w:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Yh)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function X0(s){const i=s.indexOf("OK"),c=s.indexOf(ci,i>=0?i:0),a=c>=0?s.indexOf(ci,c+1):-1;if(i<0||c<0)return{output:s.trim(),error:"",raw:s};const f=s.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),p=a>=0?s.slice(c+1,a).trim():"";return{output:f,error:p,raw:s}}const K0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Q0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Nl=Q0.flatMap(({board:s,firmwareName:i})=>K0.map(({version:c,date:a,stamp:f,tag:p})=>{const _=`${i}-${f}-${p}.uf2`;return{board:s,version:c,date:a,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),zf=512,Uf=`import builtins as _pkp_builtins
`;function zr(s){return JSON.stringify(s)}function Z0(s){return`bytes.fromhex(${JSON.stringify([...s].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function W0(s,i){return`${s==="/"?"":s.replace(/\/$/,"")}/${i}`}class J0{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${zr(i)}
for name in os.listdir(base):
    p = (${zr(i)}.rstrip('/') + '/' + name) if ${zr(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[p,_,b]=f.split("	"),E=_==="dir"||_==="file"?_:"unknown",w=parseInt(b??"",10);return{name:p,path:W0(i,p),type:E,...Number.isFinite(w)&&w>=0?{size:w}:{}}})}async readText(i){const c=`
import sys
${Uf}with _pkp_builtins.open(${zr(i)}, 'rb') as f:
    while True:
        b = f.read(${zf})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const f=a.output.replace(/\s+/g,"");return new TextDecoder().decode(ey(f))}async writeText(i,c,a){const f=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${Uf}_pkp_builtins.open(${zr(i)}, 'wb').close()`),f.length===0){a==null||a(100,"Gemt på Pico");return}for(let p=0;p<f.length;p+=zf){const _=f.slice(p,p+zf),b=`
${Uf}with _pkp_builtins.open(${zr(i)}, 'ab') as f:
    f.write(${Z0(_)})
`,E=await this.repl.exec(b,1e4);if(E.error)throw new Error(E.error);const w=Math.min(p+_.length,f.length);a==null||a(10+Math.round(w/f.length*85),`Gemmer ${w}/${f.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(i,c,a,f={}){const p=`${i}.tmp`;if(await this.writeText(p,c,(E,w)=>a==null?void 0:a(Math.min(70,E*.7),w)),a==null||a(78,"Verificerer fil..."),await this.readText(p)!==c)throw await this.delete(p).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);a==null||a(88,"Udskifter fil...");let b=!!f.createBackup;if(b){const E=await this.readText(i).catch(()=>null);b=E!==null&&E!==c}if(b){const E=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,E).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(p,i),a==null||a(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${zr(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),a=new Set(c.map(v=>v.path.toLowerCase())),f=i.replace(/\\/g,"/"),p=f.lastIndexOf("/"),_=p>=0?f.slice(0,p+1):"/",b=p>=0?f.slice(p+1):f.replace(/^\/+/,""),E=b.lastIndexOf("."),w=E>0?b.slice(0,E):b,y=E>0?b.slice(E):"";for(let v=1;v<1e3;v+=1){const S=`${_}${w}_backup${v}${y}`;if(!a.has(S.toLowerCase()))return S}return`${_}${w}_backup${Date.now()}${y}`}async rename(i,c){const a=await this.repl.exec(`
import os
os.rename(${zr(i)}, ${zr(c)})
`);if(a.error)throw new Error(a.error)}}function ey(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}const ny=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct\r
import os\r
import ubinascii\r
import machine\r
\r
__version__ = '0.7.1'\r
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
# When False, the terminal skips the low-level reliable-stream plumbing\r
# (prep / ack:prep / miss / numbered frames) and the repeating HELLO heartbeat,\r
# so an idle connection stays quiet and meaningful lines (button/slider/text/\r
# lifecycle) remain readable. Set True while debugging the raw protocol.\r
DEBUG_PROTOCOL = False\r
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
    def _is_protocol_noise(self, msg):\r
        # Reliable-stream plumbing and idle heartbeat: hidden unless DEBUG_PROTOCOL.\r
        if msg == "HELLO" or msg == "ACK:HELLO":\r
            return True\r
        if msg.startswith("prep,") or msg.startswith("ack:prep") or msg.startswith("miss,"):\r
            return True\r
        # Numbered stream frames such as "3-text,STATUS,..." or "1-ACK:create".\r
        return self._try_parse_numbered_payload(msg) is not None\r
\r
    def _log_received(self, msg):\r
        if not DEBUG_PROTOCOL and self._is_protocol_noise(msg):\r
            return\r
        try:\r
            print("Received:", msg.strip())\r
        except:\r
            print("Received:", msg)\r
\r
    def _log_sent(self, msg):\r
        if not DEBUG_PROTOCOL and self._is_protocol_noise(msg):\r
            return\r
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
        if msg == "HELLO":\r
            if DEBUG_PROTOCOL:\r
                print("Received HELLO handshake")\r
            self._send_reliable_stream(["ACK:HELLO"])\r
\r
        elif msg == "ping":\r
            self._send_reliable_stream(["ACK:ping"])\r
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
    def disconnect(self):\r
        """Best-effort disconnect for classroom Stop/recovery flows."""\r
        if self.conn_handle is not None:\r
            try:\r
                self.ble.gap_disconnect(self.conn_handle)\r
            except Exception as e:\r
                print("gap_disconnect failed:", e)\r
                self._handle_disconnected("gap_disconnect_failed")\r
        else:\r
            self._handle_disconnected("disconnect_without_handle")\r
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
`,ty=`from machine import Pin, time_pulse_us\r
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
        return cms`,ry=`import array, time\r
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
`,ly=`from machine import Pin
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
`,iy=`from machine import Pin
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
`,ay=`from machine import Pin
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
`,sy=`# PicoFly.py\r
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
`,oy=`import machine\r
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
        self.initPCA()`,cy=`from machine import Pin\r
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
`,uy=`from machine import Pin\r
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
`,fy=`from machine import Pin, PWM, ADC\r
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
`,dy=`from machine import Pin\r
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
`,na=[{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",content:ay},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:uy},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:dy},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",content:iy},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",content:ly},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:cy},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:fy},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:ny},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:oy},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:sy},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:ty},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:ry}],my=11914;function py(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function hy(){return py()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class _y{constructor(i={}){me(this,"port",null);me(this,"reader",null);me(this,"writer",null);me(this,"readLoopDone",null);me(this,"readLoopActive",!1);me(this,"disconnecting",!1);me(this,"buffer","");me(this,"events");me(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:my}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var E,w;const i=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,f=this.writer,p=this.readLoopDone,_=a==null?void 0:a.closed.catch(()=>{}),b=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}p&&await p.catch(()=>{}),await _;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(f==null?void 0:f.close()),await b}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===p&&(this.readLoopDone=null),this.disconnecting=!1,i&&((w=(E=this.events).onDisconnect)==null||w.call(E))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var a,f,p;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((a=i.writable)==null?void 0:a.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(p=(f=this.events).onLog)==null||p.call(f,"success",`USB-forbindelse oprettet (${gy(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var f,p,_;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((f=i.readable)==null?void 0:f.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:b,done:E}=await a.read();if(E)break;b&&this.consumeText(c.decode(b,{stream:!0}))}}catch(b){this.readLoopActive&&((_=(p=this.events).onLog)==null||_.call(p,"error",b instanceof Error?b.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var p,_;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,f=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await f}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((_=(p=this.events).onDisconnect)==null||_.call(p))}consumeText(i){var c,a,f,p;(a=(c=this.events).onData)==null||a.call(c,i);for(const _ of this.dataListeners)_(i);for(this.buffer+=i;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),b=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(p=(f=this.events).onLine)==null||p.call(f,b)}}}function gy(s){const i=s.usbVendorId!==void 0?`VID ${s.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=s.usbProductId!==void 0?`PID ${s.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const T_=15e3,Ph=64*1024,qh=1e5,M_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),by=64*1024,Fh=8;function j_(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function yy(){return j_()?new SharedArrayBuffer(by):null}function vy(s,i){const c=new Int32Array(s,0,2),a=new Uint8Array(s),f=s.byteLength-Fh,p=new TextEncoder().encode(i+`
`);let _=Atomics.load(c,0);for(const b of p)a[Fh+_%f]=b,_+=1;Atomics.store(c,0,_),Atomics.notify(c,0)}const xy=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class wy{constructor(){me(this,"worker",null);me(this,"pending",null);me(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,f=c.timeoutMs??T_,p=this.ensureWorker();return new Promise(_=>{const b=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:a,timer:b,onOutput:c.onOutput,resolve:_},p.postMessage({type:"run",id:a,code:Sy(i),runtimeUrl:M_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class Ey{constructor(){me(this,"worker",null);me(this,"pending",null);me(this,"nextId",0);me(this,"stdinSab",null)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs===null?null:c.timeoutMs??T_,f=typeof c=="number"?void 0:c.onOutput,p=typeof c=="number"?void 0:c.signal,_=qf(i,{allowInput:!0});if(_.some(y=>y.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:_,timedOut:!1,unavailable:!1});const b=++this.nextId,E=this.ensureWorker(),w=yy();return this.stdinSab=w,new Promise(y=>{const v=F=>this.finish(F),S=()=>{this.restartWorker(),v({ok:!1,output:"",error:"",issues:_,timedOut:!1,unavailable:!1})},I=a===null?null:window.setTimeout(()=>{v({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:_,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:b,timer:I,timeoutMs:a,issues:_,onOutput:f,signal:p,abort:S,resolve:y},p!=null&&p.aborted){S();return}p==null||p.addEventListener("abort",S,{once:!0});const V={type:"run",id:b,code:i,runtimeUrl:M_,interactive:!0,sab:w??void 0};E.postMessage(V)})}sendInput(i){const c=this.pending;!c||!this.stdinSab||(this.refreshTimeout(c),vy(this.stdinSab,i))}stop(){const i=this.pending;i&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}))}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){this.refreshTimeout(c),(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var a;const c=this.pending;c&&(c.timer!==null&&window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}refreshTimeout(i){i.timeoutMs!==null&&(i.timer!==null&&window.clearTimeout(i.timer),i.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:i.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},i.timeoutMs))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null,this.stdinSab=null}}function Sy(s){const i=JSON.stringify(s);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function qf(s,i={}){const c=[],a=new Blob([s]).size;a>Ph&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Ph} bytes.`});const f=s.split(/\r?\n/);for(let p=0;p<f.length;p+=1){const _=p+1,b=mc(f[p]).trim();if(!b)continue;const E=Ny(b);E&&xy.has(E)&&c.push({level:"error",line:_,text:`${E} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&ky(f[p])&&c.push({level:"error",line:_,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const w=b.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);w&&Ry(w)>qh&&c.push({level:"error",line:_,text:`range(...) er for stor til offline kørsel. Brug højst ${qh} gentagelser.`})}for(const p of Ty(f))c.push({level:"warning",text:`Funktionen ${p} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function mc(s){let i=null;for(let c=0;c<s.length;c+=1){const a=s[c];if((a==='"'||a==="'")&&s[c-1]!=="\\"&&(i=i===a?null:i??a),a==="#"&&!i)return s.slice(0,c)}return s}function ky(s){const i=mc(s);let c=null;for(let a=0;a<i.length;a+=1){const f=i[a];if((f==='"'||f==="'")&&i[a-1]!=="\\"){c=c===f?null:c??f;continue}if(!c&&!(!Xh(i[a-1])||i.slice(a,a+5)!=="input")&&Xh(i[a+5])&&i.slice(a+5).trimStart().startsWith("("))return!0}return!1}function Xh(s){return!s||!/[A-Za-z0-9_]/.test(s)}function Ny(s){const i=s.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=s.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Kh(s){const i=s.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function Ry(s){const i=Number(s[1]),c=s[2]===void 0?void 0:Number(s[2]),a=s[3]===void 0?1:Number(s[3]);if(a===0)return Number.POSITIVE_INFINITY;const _=(c===void 0?i:c)-(c===void 0?0:i);return _>0&&a<0||_<0&&a>0?0:Math.ceil(Math.abs(_/a))}function Ty(s){const i=new Set;for(let c=0;c<s.length;c+=1){const a=mc(s[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const f=a[1],p=Kh(s[c]);for(let _=c+1;_<s.length;_+=1){if(!s[_].trim())continue;if(Kh(s[_])<=p)break;if(new RegExp(`\\b${f}\\s*\\(`).test(mc(s[_]))){i.add(f);break}}}return[...i]}const My=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function jy(s,i){var y;const c=s.trim(),a=i.split(/\r?\n/),f=Dy(c),p=f?a[f-1]??"":"",_=Ay(a,f),b=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(b))return{simple:"Programmet blev stoppet.",technical:c,line:f};if(/MemoryError/.test(b))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/RecursionError/.test(b))return{simple:`En funktion kalder sig selv for mange gange${f?` omkring linje ${f}`:""}.`,technical:c,line:f};const E=b.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(E)return{simple:`Variablen ${E[1]} bruges inde i en funktion, før den har fået en værdi${f?` på linje ${f}`:""}.`,technical:c,line:f};const w=b.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(w)return{simple:By(p,w[1])?`Teksten ${w[1]} mangler måske citationstegn${f?` på linje ${f}`:""}.`:`Python kender ikke navnet ${w[1]}${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ZeroDivisionError/.test(b))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError:\s+unexpected indent/.test(b))return{simple:`Der er for meget indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError/.test(b))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ImportError|ModuleNotFoundError/.test(b)){const v=(y=b.match(/['"](.+?)['"]/))==null?void 0:y[1];return{simple:`Python kan ikke finde modulet${v?` ${v}`:""}.`,technical:c,line:f}}if(/OSError/.test(b))return/ENOENT|No such file|Errno\s+2/.test(b)?{simple:`Python kan ikke finde filen${f?` på linje ${f}`:""}.`,technical:c,line:f}:/EACCES|permission|denied/i.test(b)?{simple:`Python har ikke adgang til filen eller enheden${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Der opstod en fejl med en fil eller en enhed${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/SyntaxError/.test(b)){if(/invalid syntax/.test(b)&&_.text.trim().endsWith(","))return{simple:`Linje ${_.line??f} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:_.line??f};const v=Ff(p,f)??Ff(_.text,_.line)??Oy(a,f);return v?{simple:`Mangler måske : efter linje ${v.line}.`,technical:c,line:v.line}:f&&_.text.trim().endsWith(":")&&p.trim()&&!/^\s+/.test(p)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:c,line:f}:Ly(p)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Cy(p)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:zy(p)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:c,line:f}:Uy(p)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}return/TypeError/.test(b)?/takes .* positional arguments? but .* given/.test(b)||/function takes/.test(b)?{simple:`En funktion får for mange eller for få værdier${f?` på linje ${f}`:""}.`,technical:c,line:f}:/unsupported operand type/.test(b)?{simple:`To værdier kan ikke bruges sammen på den måde${f?` på linje ${f}`:""}.`,technical:c,line:f}:/not callable/.test(b)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:c,line:f}:/IndexError/.test(b)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:c,line:f}:/KeyError/.test(b)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:c,line:f}:/AttributeError/.test(b)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:c,line:f}:/ValueError/.test(b)?/invalid literal for int/.test(b)?{simple:`Teksten kan ikke laves om til et heltal${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}function Dy(s){var f;const c=(f=[...s.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function Ay(s,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const a=s[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Ff(s,i){if(!i)return null;const c=s.trim();return!My.test(c)||c.endsWith(":")?null:{line:i}}function Oy(s,i){const c=i?Math.min(s.length,i):s.length,a=Math.max(0,c-4);for(let f=c-1;f>=a;f-=1){const p=Ff(s[f]??"",f+1);if(p)return p}return null}function Cy(s){const i=(s.match(/'/g)??[]).length,c=(s.match(/"/g)??[]).length;return i%2===1||c%2===1}function Ly(s){var a,f;const c=(f=(a=s.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:f.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function By(s,i){const c=s.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function zy(s){return D_(s)>0}function Uy(s){return D_(s)<0}function D_(s){let i=0,c=null;for(let a=0;a<s.length;a+=1){const f=s[a];if((f==='"'||f==="'")&&s[a-1]!=="\\"){c=c===f?null:c??f;continue}c||((f==="("||f==="["||f==="{")&&(i+=1),(f===")"||f==="]"||f==="}")&&(i-=1))}return i}const Xf="/min_kode.py",A_=`print('Hej fra Pico Kontrol Panel')
`,Hy=500,Gy=1200,fs="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Vn(s,i){return`${s}:${i}`}function Iy(s){return new Promise(i=>window.setTimeout(i,s))}function Vy(){const s=ae(d=>d.toggleSideMenu),i=ae(d=>d.askConfirm),c=ae(d=>d.picoIdeOrigin),a=ae(d=>d.active),f=ae(d=>d.isBleConnected),p=ae(d=>d.bleListFiles),_=ae(d=>d.bleReadText),b=ae(d=>d.bleWriteText),E=ae(d=>d.bleDeleteFile),w=ae(d=>d.bleRestartAndReconnect),[y,v]=z.useState(!1),[S,I]=z.useState(!1),[V,F]=z.useState([]),[D,L]=z.useState(!1),[H,ie]=z.useState([]),[se,oe]=z.useState(null),[pe,J]=z.useState(()=>tc(Wo())),[ee,Re]=z.useState(Xf),[ve,we]=z.useState("local"),[W,Pe]=z.useState(()=>{var d;return((d=tc(Wo()).find(h=>h.path===Xf))==null?void 0:d.content)??A_}),[Ae,qe]=z.useState([]),[G,re]=z.useState(!1),[ue,fe]=z.useState(""),[Ee,N]=z.useState(""),[U,te]=z.useState(null),[O,Z]=z.useState(!1),[ne,X]=z.useState(null),[He,Oe]=z.useState(!1),[Qn,Kt]=z.useState({}),[xe,wn]=z.useState(!1),[Mn,ze]=z.useState(0),[jn,Yt]=z.useState(()=>{var d,h;return((d=Nl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((h=Nl[0])==null?void 0:h.board)??""}),[Yn,Ur]=z.useState(()=>{var d,h;return((d=Nl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((h=Nl[0])==null?void 0:h.version)??""}),[Hr,St]=z.useState(!1),[di,Gr]=z.useState({top:0,left:0}),[En,Ml]=z.useState(!1),[jl,ua]=z.useState(!1),[Dl,Zn]=z.useState(!0),[ft,Qt]=z.useState(""),[mi,Al]=z.useState([]),[Sn,dt]=z.useState(null),[On,Ir]=z.useState(!1),[or,cr]=z.useState({}),[mt,$n]=z.useState({}),[Ye,on]=z.useState(null),[tn,Cn]=z.useState(null),[yc,Ol]=z.useState(""),[Zt,Cl]=z.useState(()=>bh().clearTerminalOnRun),[ur,bs]=z.useState(()=>bh().simplifiedErrors),[pi,ys]=z.useState(()=>typeof navigator<"u"?Jh(navigator):!1),Vr=z.useRef(null),kt=z.useRef(null),cn=z.useRef(null),fa=z.useRef(null),Ln=z.useRef(null),pn=z.useRef(null),kn=z.useRef(null),pt=z.useRef(null),Ll=z.useRef(null),Nt=z.useRef(!1),fr=z.useRef(!1),Yr=z.useRef(!1),Wn=z.useRef(""),Wt=z.useRef(null),Rt=z.useRef(null),tt=z.useRef(null),dr=z.useRef(null),Jn=z.useRef(null),rn=z.useRef(null),Jt=z.useRef(0),mr=z.useRef(null),rt=z.useRef(null),pr=z.useRef(null),Bl=z.useRef(null),zl=z.useRef([]),Ul=z.useRef([]),$r=z.useRef(null),$t=hy(),_e=c==="control"&&!!a&&f(),ht=_e?(a==null?void 0:a.deviceID)??"ble":null,lt=Math.max(1,W.split(`
`).length),vs=new Blob([W]).size,vc=ve==="pico"?"Picoen":"browseren",da=z.useMemo(()=>[...new Set(Nl.map(d=>d.board))],[]),Pr=z.useMemo(()=>Nl.filter(d=>d.board===jn),[jn]),Pt=Nl.find(d=>d.board===jn&&d.version===Yn)??Pr[0]??Nl[0],Tt=ve==="pico",Pn=Tt?En:jl,qn=Tt&&En&&y&&!_e||!Tt&&jl&&!!tt.current,xs=On||Pn&&!qn,ma=qn?"stdin":">>>",hr=qn?Tt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":Tt?"Pico MicroPython":"Browser-MicroPython",hi=z.useMemo(()=>{const d=new _y({onData:h=>{fr.current||!Nt.current||(Wn.current=(Wn.current+h).slice(-240),/(^|\r?\n)>>> ?$/.test(Wn.current)&&_i())},onLine:h=>{if(fr.current)return;const x=h.trimEnd();if(Yr.current&&x.trim()){$("info",x);return}if(Nt.current&&xc(x)){_i();return}Nt.current&&x.trim()&&!ws(x)&&!x.includes("raw REPL")&&$("info",x)},onLog:$,onDisconnect:()=>{v(!1),Ml(!1),Ir(!1),Nt.current=!1,Yr.current=!1,Fr(),Wn.current="",Wr(),$("warning","USB-forbindelse lukket.")}});return Vr.current=d,d},[]);function $(d,h){F(x=>[...x.slice(-140),{level:d,text:h}])}function qr(d){F(h=>[...h.slice(-140),{level:"info",text:d,variant:"input"}])}function xc(d){return d.trim()===">>>"}function ws(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Fr(){Wt.current!==null&&(window.clearTimeout(Wt.current),Wt.current=null)}function _i(){!Nt.current||Wt.current!==null||(Wt.current=window.setTimeout(()=>{Wt.current=null,Nt.current&&(Ml(!1),Nt.current=!1,Wn.current="",$("success","Pico-koden er færdig."),Es())},0))}function Es(){const d=cn.current;d&&pa(d,!1)}function gi(d,h=W,x="error"){const T=jy(d,h);F(M=>[...M.slice(-140),{level:x,text:T.simple,technical:T.technical}])}function ln(d,h,x=ve){Re(d),we(x),Pe(h),$n(T=>({...T,[Vn(x,d)]:h})),Xr()}function Mt(d,h="pico"){Re(d),we(h),Pe(""),on(null),Gr({top:0,left:0}),Xr()}function Xr(){zl.current=[],Ul.current=[],$r.current=null}function _r(){const d=Ln.current;return{content:W,selectionStart:(d==null?void 0:d.selectionStart)??W.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??W.length}}function Kr(d){const h=zl.current,x=h.at(-1);(x==null?void 0:x.content)===d.content&&x.selectionStart===d.selectionStart&&x.selectionEnd===d.selectionEnd||(h.push(d),h.length>Hy&&h.shift(),Ul.current=[])}function Qr(d,h){let x=0;const T=Math.min(d.length,h.length);for(;x<T&&d[x]===h[x];)x+=1;let M=d.length,Q=h.length;for(;M>x&&Q>x&&d[M-1]===h[Q-1];)M-=1,Q-=1;const ce=d.slice(x,M),Ge=h.slice(x,Q),be=Ge&&!ce?"insert":ce&&!Ge?"delete":"replace",Ce=Ge.at(-1)??"";return{kind:be,boundaryAfter:be==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(Ce)}}function Ss(d,h){if(h!=="typing")return $r.current=null,!0;const x=Date.now(),T=Qr(W,d),M=$r.current,Q=M!==null&&M.path===ee&&M.source===ve&&M.kind===T.kind&&M.kind!=="replace"&&!M.boundaryAfter&&x-M.at<=Gy;return $r.current={path:ee,source:ve,kind:T.kind,at:x,boundaryAfter:T.boundaryAfter},!Q}function bi(d){Pe(d.content),$n(h=>({...h,[Vn(ve,ee)]:d.content})),Ol(""),on(null),window.requestAnimationFrame(()=>{const h=Ln.current;h&&(h.focus(),h.selectionStart=Math.min(d.selectionStart,d.content.length),h.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function ks(){const d=zl.current.pop();return d?($r.current=null,Ul.current.push(_r()),bi(d),!0):!1}function Zr(){const d=Ul.current.pop();return d?($r.current=null,zl.current.push(_r()),bi(d),!0):!1}function Dn(d,h=(Q=>(Q=Ln.current)==null?void 0:Q.selectionStart)()??d.length,x=_r(),T=h,M="programmatic"){x&&d!==W&&Ss(d,M)&&Kr(x),Pe(d),$n(ce=>({...ce,[Vn(ve,ee)]:d})),Ol(""),Ni(d,h),window.requestAnimationFrame(()=>{const ce=Ln.current;ce&&(ce.selectionStart=Math.min(h,d.length),ce.selectionEnd=Math.min(T,d.length))})}function gr(d,h=ve){$n(x=>{const T=Vn(h,d);if(!(T in x))return x;const M={...x};return delete M[T],M})}function Hl(){return or[ee]===W}function un(d,h){cr(x=>({...x,[d]:h}))}function yi(d,h){un(d,h),$n(x=>({...x,[Vn("pico",d)]:h})),ve==="pico"&&ee===d&&Pe(h)}function Wr(){ie([]),qe([]),cr({}),$n({}),on(null),Re(d=>{const h=tc(Wo());if(h.find(M=>M.path===d))return d;const T=h[0];return we("local"),Pe(T.content),Xr(),T.path})}function Nn(d){er(),X({value:100,label:d}),Bl.current=window.setTimeout(()=>{Bl.current=null,X(null)},900)}function er(){Bl.current!==null&&(window.clearTimeout(Bl.current),Bl.current=null)}function vi(){return ne?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(ne.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:ne.label}),u.jsxs("strong",{children:[Math.round(ne.value),"%"]}),ne.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Ns,"aria-label":"Stop handling",title:"Stop",children:u.jsx(nt,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,ne.value))}%`}})})]}):null}function Ns(){Jn.current&&gn("Stopper læsning...",!0,!0)}function gn(d="Stopper læsning...",h=!1,x=!1){var T;er(),rt.current=null,Jt.current+=1,(T=Jn.current)==null||T.abort(),Jn.current=null,mr.current=null,oe(null),L(!1),X(h?{value:(ne==null?void 0:ne.value)??0,label:d,cancellable:!1}:null),x&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function br(d){var h;if(!(mr.current===d||rt.current===d)){if(rt.current=d,rn.current){Jt.current+=1,(h=Jn.current)==null||h.abort(),Jn.current=null,mr.current=null,Mt(d),oe(d),L(!0),er(),X({value:2,label:`Skifter til ${Ne(d)}...`,cancellable:!0});return}Gl()}}function Gl(){if(rn.current)return;const d=rt.current;if(!d)return;rt.current=null;const h=Jt.current+1;Jt.current=h;const x=new AbortController;Jn.current=x,mr.current=d,Mt(d),oe(d),L(!0),er(),X({value:12,label:`Indlæser ${Ne(d)}...`,cancellable:!0});const T=(async()=>{try{const M=await _(d,(Q,ce)=>{Jt.current===h&&X({value:Q,label:ce,cancellable:!0})},x.signal);if(x.signal.aborted||Jt.current!==h)return;ln(d,M,"pico"),un(d,M),Nn("Fil indlæst")}catch(M){if(Jt.current!==h)return;Py(M)||x.signal.aborted?$("info",`Stoppede læsning af ${Ne(d)}.`):(X(null),$("error",M instanceof Error?M.message:"BLE læsning fejlede."))}})();rn.current=T,T.finally(()=>{if(rn.current!==T)return;rn.current=null,Jn.current===x&&(Jn.current=null),mr.current===d&&(mr.current=null),!!rt.current||(oe(null),L(!1),x.signal.aborted&&X(null)),Gl()})}async function nr(d){const h=fr.current;fr.current=!0;try{return await d()}finally{fr.current=h}}z.useEffect(()=>{if(!Dl)return;const d=kn.current;d&&(d.scrollTop=d.scrollHeight)},[V,Dl]),z.useEffect(()=>{wb({clearTerminalOnRun:Zt,simplifiedErrors:ur})},[Zt,ur]),z.useEffect(()=>{var d;Pr.some(h=>h.version===Yn)||Ur(((d=Pr[0])==null?void 0:d.version)??"")},[Pr,Yn]),z.useEffect(()=>{ys(Jh(navigator))},[]),z.useEffect(()=>{const d=()=>{const h=Vr.current;kt.current=null,cn.current=null,Vr.current=null,h==null||h.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var h,x;er(),(h=Rt.current)==null||h.dispose(),Rt.current=null,(x=tt.current)==null||x.dispose(),tt.current=null,window.removeEventListener("pagehide",d),d()}},[]),z.useEffect(()=>{const d=h=>{!(h.ctrlKey||h.metaKey)||h.key.toLowerCase()!=="s"||(h.preventDefault(),!D&&ee.trim()&&!pi&&!O&&!U&&!G&&As())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ve,_e,D,y,W,ee,pi,O,U,G]);function xi(d,h,x){J(T=>{const M=Gf(T,d,h,x);return is(M),M})}function wi(d,h){J(x=>{const T=x.find(be=>be.path===d),Q=mt[Vn("local",d)]??(T==null?void 0:T.content),ce=Q!==void 0&&sr(Q)!==sr(h)?Gf(x,l_(d,sc(x)),Q,!1):x,Ge=Gf(ce,d,h,!1);return is(Ge),Ge}),$n(x=>({...x,[Vn("local",d)]:h})),ve==="local"&&ee===d&&(Pe(h),Ol(""),on(null),Xr())}const Il=iv(H,pe,mt,y||_e);z.useEffect(()=>{_e&&fn()},[_e]),z.useEffect(()=>{const d=pr.current;d&&d!==ht&&Wr(),pr.current=ht},[ht]);async function Vl(){if($t.supported){I(!0);try{await hi.requestAndConnect();const d=new F0(hi);kt.current=d,cn.current=new J0(d),v(!0),ze(0),await d.interrupt(),await Ei(d),$("success","Sendte stop-signal til Pico-terminalen."),await pa(cn.current),await Ms(cn.current)}catch(d){$("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await hi.disconnect()}catch(h){$("error",h instanceof Error?`USB-porten kunne ikke lukkes: ${h.message}`:"USB-porten kunne ikke lukkes.");return}ze(h=>{const x=h+1;return x>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),wn(!0)),x}),v(!1)}finally{I(!1)}}}async function Ei(d){const h=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(h.error||!h.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Rs(){var d;try{await((d=Vr.current)==null?void 0:d.disconnect()),kt.current=null,cn.current=null,v(!1),Wr()}catch(h){$("error",h instanceof Error?`USB-porten kunne ikke lukkes: ${h.message}`:"USB-porten kunne ikke lukkes.")}}async function jt(d){const h=cn.current;if(h){L(!0),fr.current=!0;try{await d(h)}catch(x){X(null),$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{fr.current=!1,L(!1)}}}async function fn(d=!0){if(_e){L(!0);try{const h=await p();ie(h),d&&$("success",`Indlæste ${h.length} filer fra Pico via Bluetooth.`)}catch(h){$("error",h instanceof Error?h.message:"BLE filhandling fejlede.")}finally{L(!1)}return}await pa(cn.current,d)}async function pa(d,h=!0){if(d){L(!0);try{const x=await nr(()=>d.list("/"));ie(x),h&&$("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{L(!1)}}}async function yr(){if(_e){L(!0),X({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Ts((h,x)=>X({value:h,label:x}));qe(d),Nn("Fil-tjek færdigt")}catch(d){X(null),$("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{L(!1)}return}await Ms(cn.current)}async function Ts(d){const h=[],x=na.filter(M=>M.kind==="library"&&!Rl(M));let T=0;for(const M of na){if(M.kind==="program"){h.push({...M,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Rl(M)){h.push({...M,status:"unknown",detail:"Opdateres via USB"});continue}try{const Q=T/Math.max(1,x.length)*100,ce=100/Math.max(1,x.length);$("info",`Tjekker ${M.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,Q),`Tjekker ${M.label} på Pico...`);const Ge=await _(M.path,(Ce,an)=>{d==null||d(Math.min(95,Q+Ce/100*ce),`${M.label}: ${an}`)}),be=sr(Ge)===sr(M.content);h.push({...M,status:be?"ok":"outdated",detail:be?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{h.push({...M,status:"missing",detail:"Mangler på Pico"})}finally{T+=1}}return d==null||d(100,"Fil-tjek færdigt"),h}async function Ms(d){if(d){L(!0);try{const h=await nr(()=>js(d)),x=h;qe(x)}catch(h){$("error",h instanceof Error?h.message:"Runtime check fejlede.")}finally{L(!1)}}}async function js(d){if(!d)return[];const h=[];for(const x of na){if(x.kind==="program"){h.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const T=await d.readText(x.path),M=sr(T)===sr(x.content);h.push({...x,status:M?"ok":"outdated",detail:M?"Matcher appens version":"Matcher ikke appens version"})}catch{h.push({...x,status:"missing",detail:"Mangler på Pico"})}}return h}async function wc(d=ee){if(_e){br(d);return}oe(d),await jt(async h=>{X({value:12,label:`Indlæser ${Ne(d)}...`});const x=await Ec(h,d);ln(d,x,"pico"),un(d,x),Nn("Fil indlæst")}),oe(null)}async function Ec(d,h){var x;try{return await d.readText(h)}catch(T){await((x=kt.current)==null?void 0:x.stop().catch(()=>{})),await Iy(120);try{return await d.readText(h)}catch{throw T}}}function Ds(){Z(!0)}async function As(){if(ve==="pico"){if(!y&&!_e){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await ha();return}Os()}function Os(){if(Tl(ee)){$("error",fs);return}xi(ee,W,!1),we("local"),$n(d=>({...d,[Vn("local",ee)]:W})),Z(!1),$("success",`Gemte ${Ne(ee)} lokalt.`)}async function ha(){if(Z(!1),Tl(ee))return X(null),$("error",fs),!1;if(X({value:0,label:"Starter gemning..."}),_e){L(!0);try{return await b(ee,W,(h,x)=>X({value:h,label:x})),un(ee,W),we("pico"),$n(h=>({...h,[Vn("pico",ee)]:W})),Nn("Gemt på Pico via Bluetooth"),$("success",`Gemte ${Ne(ee)} på Pico via Bluetooth.`),nc(ee)&&(St(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await fn(!1),!0}catch(h){return X(null),$("error",h instanceof Error?h.message:"BLE gem fejlede."),!1}finally{L(!1)}}if(!cn.current)return X(null),!1;let d=!1;return await jt(async h=>{vr(ee,"pico")?await h.replaceTextSafely(ee,W,(x,T)=>X({value:x,label:T})):await h.writeText(ee,W,(x,T)=>X({value:x,label:T})),un(ee,W),we("pico"),$n(x=>({...x,[Vn("pico",ee)]:W})),Nn("Gemt på Pico via USB"),$("success",`Gemte ${ee}.`),await fn(),await yr(),d=!0}),d}function Sc(){Si(Ne(ee),W),Z(!1),$("success",`Downloadede ${Ne(ee)}.`)}function Si(d,h){const x=new Blob([h],{type:"text/plain;charset=utf-8"}),T=URL.createObjectURL(x),M=document.createElement("a");M.href=T,M.download=d,M.click(),URL.revokeObjectURL(T)}async function Cs(d){L(!0),St(!1),X({value:10,label:"Genstarter Pico..."});try{await w(d)?(Nn("Pico genforbundet"),$("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await fn()):(X(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(h){X(null),$("error",h instanceof Error?h.message:"Genstart/genforbindelse mislykkedes.")}finally{L(!1)}}function Ls(d){var Q,ce;const h=d??{path:ee,source:ve},x=h.source==="pico"?"Pico":"browser",T=(d==null?void 0:d.versions.length)??(h.source==="pico"?((Q=ta(H).get(h.path))==null?void 0:Q.length)??0:((ce=ta(sc(pe)).get(h.path))==null?void 0:ce.length)??0),M=T>0?` Det sletter også filens versionshistorik (${T} gemte versioner).`:"";te(null),i({title:"Slet fil",message:`Vil du slette ${Ne(h.path)} fra ${x}?${M}`,confirmLabel:"Slet",onConfirm:()=>{Nc(h)}})}function kc(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Bs()}})}async function Bs(){if(!cn.current){$("error","Forbind Picoen med USB først.");return}await jt(async d=>{await d.delete("/DeviceSettings.txt").catch(h=>{const x=h instanceof Error?h.message:"";if(!/ENOENT|No such file|not found/i.test(x))throw h}),cr(h=>{const x={...h};return delete x["/DeviceSettings.txt"],x}),gr("/DeviceSettings.txt","pico"),$("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await fn()})}function zs(d,h,x){const T=Il.filter(ce=>ce.kind==="file"&&ce.type==="file"),M=T.findIndex(ce=>ce.path===d&&ce.source===h);if(M===-1)return null;const Q=ce=>!!ce&&!(ce.path===d&&ce.source===h)&&!(ce.source===h&&x.has(ce.path))&&!(_e&&Rl(ce));for(const ce of[!0,!1])for(let Ge=1;Ge<T.length;Ge+=1){const be=T[M+Ge];if(Q(be)&&(!ce||be.source===h))return be;const Ce=T[M-Ge];if(Q(Ce)&&(!ce||Ce.source===h))return Ce}return null}function _a(d){if(d){ba(d);return}const h=tc(Wo())[0];ln(h.path,mt[Vn("local",h.path)]??h.content,"local")}async function Nc(d){const h=d.path,x=d.source,T=h===ee&&x===ve;if(x==="local"){const be=ta(sc(pe)).get(h)??[],Ce=new Set([h,...be.map(Je=>Je.path)]),an=T?zs(h,x,Ce):null,Fn=pe.filter(Je=>!Ce.has(Je.path));J(Fn),is(Fn);for(const Je of Ce)gr(Je,"local");T&&_a(an);const Se=be.length>0?` og ${be.length} gemte versioner`:"";$("warning",`Slettede ${Ne(h)}${Se} fra browseren.`);return}const M=ta(H).get(h)??[],Q=[h,...M.map(be=>be.path)],ce=T?zs(h,x,new Set(Q)):null;if(_e){L(!0);try{for(const Ce of Q)await E(Ce);cr(Ce=>{const an={...Ce};for(const Fn of Q)delete an[Fn];return an});for(const Ce of Q)gr(Ce,"pico");const be=M.length>0?` og ${M.length} gemte versioner`:"";$("warning",`Slettede ${Ne(h)}${be} på Pico via Bluetooth.`),await fn(),T&&_a(ce)}catch(be){$("error",be instanceof Error?be.message:"BLE sletning fejlede.")}finally{L(!1)}return}if(!cn.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Ge=!1;await jt(async be=>{for(const an of Q)await be.delete(an);cr(an=>{const Fn={...an};for(const Se of Q)delete Fn[Se];return Fn});const Ce=M.length>0?` og ${M.length} gemte versioner`:"";$("warning",`Slettede ${h}${Ce}.`);for(const an of Q)gr(an,"pico");await fn(),await yr(),Ge=!0}),Ge&&T&&_a(ce)}async function Rc(d){if(!d)return;const h=Yy(d.name);if(!h){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Tl(h)){$("error",fs);return}if(d.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const x=await d.text();if(ve==="local"){xi(h,x,!0),ln(h,x,"local"),$("success",`Importerede ${Ne(h)} i browseren.`);return}if(!y&&!_e){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(_e&&Rl({path:h})){$("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(X({value:0,label:"Uploader fil til Pico..."}),_e){L(!0);try{await b(h,x,(M,Q)=>X({value:M,label:Q})),un(h,x),ln(h,x,"pico"),Nn("Fil uploadet til Pico"),$("success",`Importerede ${Ne(h)} på Pico via Bluetooth.`),await fn()}catch(M){X(null),$("error",M instanceof Error?M.message:"Kunne ikke importere filen til Pico.")}finally{L(!1)}return}if(!cn.current){X(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await jt(async M=>{vr(h,"pico")?await M.replaceTextSafely(h,x,(Q,ce)=>X({value:Q,label:ce})):await M.writeText(h,x,(Q,ce)=>X({value:Q,label:ce})),un(h,x),ln(h,x,"pico"),Nn("Fil uploadet til Pico"),$("success",`Importerede ${Ne(h)} på Pico.`),await fn(),await yr()})}async function Tc(){fe(""),re(!0)}function Mc(){const d=Qh(ue);if(!d)return;if(Tl(d)){$("error",fs);return}const h=ve;if(vr(d,h)){$("error",`Der findes allerede en fil med navnet ${Ne(d)} i ${h==="pico"?"Pico":"browseren"}.`);return}if(h==="local"){xi(d,"",!1),ln(d,"","local"),re(!1),$("success",`Oprettede ${Ne(d)} i browseren.`);return}jc(d)}async function jc(d){if(!y&&!_e){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(re(!1),X({value:0,label:"Opretter fil på Pico..."}),_e){L(!0);try{await b(d,"",(h,x)=>X({value:h,label:x})),un(d,""),ln(d,"","pico"),Nn("Fil oprettet på Pico"),$("success",`Oprettede ${Ne(d)} på Pico via Bluetooth.`),await fn()}catch(h){X(null),$("error",h instanceof Error?h.message:"Kunne ikke oprette fil på Pico.")}finally{L(!1)}return}if(!cn.current){X(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await jt(async h=>{await h.writeText(d,"",(x,T)=>X({value:x,label:T})),un(d,""),ln(d,"","pico"),Nn("Fil oprettet på Pico"),$("success",`Oprettede ${Ne(d)} på Pico.`),await fn()})}function Dc(d){d.type==="file"&&(te(d),N($y(d.path)))}async function Ac(d){if(!U)return;const h=U.path;if(te(null),U.source==="local"){const x=pe.find(T=>T.path===d.path);if(!x){$("error","Kunne ikke finde versionen i browseren.");return}wi(h,x.content),ln(h,x.content,"local"),$("success",`Gendannede ${Ne(d.path)} i browseren.`);return}if(X({value:0,label:"Gendanner version..."}),_e){L(!0);try{const x=await _(d.path);await b(h,x,(T,M)=>X({value:T,label:M})),un(h,x),ln(h,x,"pico"),Nn("Version gendannet"),await fn(!1)}catch(x){X(null),$("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{L(!1)}return}cn.current&&await jt(async x=>{await x.replaceTextSafely(h,await x.readText(d.path),(M,Q)=>X({value:M,label:Q}));const T=await x.readText(h);un(h,T),ln(h,T,"pico"),Nn("Version gendannet"),await fn()})}function ga(d){const h=(U==null?void 0:U.source)==="local"?"browseren":"Pico";i({title:"Slet version",message:`Vil du slette ${Ne(d.path)} fra ${h}?`,confirmLabel:"Slet",onConfirm:()=>{Yl(d)}})}async function Yl(d){if((U==null?void 0:U.source)==="local"){const h=pe.filter(x=>x.path!==d.path);J(h),is(h),gr(d.path,"local"),te(x=>x&&{...x,versions:x.versions.filter(T=>T.path!==d.path)}),$("warning",`Slettede ${Ne(d.path)} fra browserens versionshistorik.`);return}if(_e){L(!0);try{await E(d.path),await fn(!1),te(h=>h&&{...h,versions:h.versions.filter(x=>x.path!==d.path)})}catch(h){$("error",h instanceof Error?h.message:"Kunne ikke slette versionen.")}finally{L(!1)}return}cn.current&&await jt(async h=>{await h.delete(d.path),await fn(!1),te(x=>x&&{...x,versions:x.versions.filter(T=>T.path!==d.path)})})}async function Oc(){var x;if(!U)return;const d=U,h=rv(d.path,T=>vr(T,d.source));if(!h){$("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Ne(d.path)}.`);return}if(d.source==="local"){const T=mt[Vn("local",d.path)]??((x=pe.find(M=>M.path===d.path))==null?void 0:x.content)??"";xi(h,T,!1),ln(h,T,"local"),te(null),$("success",`Duplikerede ${Ne(d.path)} til ${Ne(h)} i browseren.`);return}if(te(null),X({value:0,label:"Duplikerer fil..."}),_e){L(!0);try{const T=or[d.path]??await _(d.path);await b(h,T,(M,Q)=>X({value:M,label:Q})),un(h,T),ln(h,T,"pico"),Nn("Fil duplikeret"),await fn(!1),$("success",`Duplikerede ${Ne(d.path)} til ${Ne(h)} på Pico via Bluetooth.`)}catch(T){X(null),$("error",T instanceof Error?T.message:"Kunne ikke duplikere filen.")}finally{L(!1)}return}if(!cn.current){X(null),$("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await jt(async T=>{const M=await T.readText(d.path);await T.writeText(h,M,(Q,ce)=>X({value:Q,label:ce})),un(h,M),ln(h,M,"pico"),Nn("Fil duplikeret"),await fn(!1),$("success",`Duplikerede ${Ne(d.path)} til ${Ne(h)} på Pico.`)})}async function Us(){if(!U)return;const d=U,h=Hf(Ee,ds(d.path));if(!h||h===d.path)return;if(Tl(h)){$("error",fs);return}if(vr(h,d.source)){$("error",`Der findes allerede en fil med navnet ${Ne(h)}.`);return}const x=d.source==="local",T=d.source==="pico";if(_e&&T&&(nc(d.path)||nc(h))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}L(!0);try{if(T)if(_e){const M=or[d.path]??await _(d.path);await b(h,M,(Q,ce)=>X({value:Q,label:ce})),await E(d.path),cr(Q=>({...a_(Q,d.path,h),[h]:M}))}else cn.current&&(await nr(()=>cn.current.rename(d.path,h)),cr(M=>a_(M,d.path,h)));x&&J(M=>{const Q=M.map(ce=>ce.path===d.path?{...ce,path:h,updatedAt:Date.now()}:ce);return is(Q),Q}),ee===d.path&&ve===d.source&&Re(h),$n(M=>ov(M,d.source,d.path,h)),te(null),N(""),$("success",`Omdøbte ${Ne(d.path)} til ${Ne(h)}.`),T&&await fn()}catch(M){$("error",M instanceof Error?M.message:"Kunne ikke omdøbe filen.")}finally{X(null),L(!1)}}function vr(d,h){return h==="pico"?H.some(x=>x.path===d):pe.some(x=>x.path===d)}async function Hs(d,h){if(!vr(d,"pico"))return;const x=l_(d,H),T=or[d]??await _(d);h!==void 0&&sr(T)===sr(h)||await b(x,T)}function ba(d){if(d.type!=="file"){_e&&gn(void 0,!1),Re(d.path),we(d.source);return}if(_e&&Rl(d)){$("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){_e&&gn(void 0,!1);const x=pe.find(T=>T.path===d.path);ln(d.path,mt[Vn("local",d.path)]??(x==null?void 0:x.content)??"","local");return}const h=Vn("pico",d.path);if(Object.prototype.hasOwnProperty.call(mt,h)){_e&&gn(void 0,!1),ln(d.path,mt[h],"pico");return}if(Object.prototype.hasOwnProperty.call(or,d.path)){_e&&gn(void 0,!1),ln(d.path,or[d.path],"pico");return}wc(d.path)}async function ya(){if(!y&&!_e){const d=Zh();qe(d),Kt(Wh(d)),Oe(!0),X(null);return}L(!0),X({value:4,label:_e?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",_e?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Ae.length>0?Ae:_e?await Ts((h,x)=>X({value:h,label:x})):await nr(()=>js(cn.current));qe(d),Kt(Wh(d)),Oe(!0),X(null)}catch(d){X(null),$("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{L(!1)}}async function Jr(){if(Oe(!1),_e){L(!0);try{const h=(Ae.length>0?Ae:na.map(T=>({...T,status:"unknown",detail:"Ikke tjekket"}))).filter(T=>Qn[T.id]&&!Rl(T));if(h.length===0){$("info","Ingen filer valgt til installation.");return}let x=null;X({value:0,label:"Starter installation..."});for(const[T,M]of h.entries()){$("info",`Installerer ${M.label} via Bluetooth...`);const Q=T/h.length*100,ce=100/h.length;await Hs(M.path,M.content),await b(M.path,M.content,(Ge,be)=>{X({value:Math.min(99,Q+Ge/100*ce),label:`${M.label}: ${be}`})}),yi(M.path,M.content),$("success",`Installerede ${M.label}.`),M.kind==="library"&&(x=M),nc(M.path)&&St(!0)}Nn("Installation færdig"),await fn(!1),await yr(),x&&va(x)}catch(d){X(null),$("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{L(!1)}return}await jt(async d=>{const x=(Ae.length>0?Ae:na.map(M=>({...M,status:"unknown",detail:"Ikke tjekket"}))).filter(M=>Qn[M.id]);if(x.length===0){$("info","Ingen filer valgt til installation.");return}let T=null;X({value:0,label:"Starter installation..."});for(const[M,Q]of x.entries()){$("info",`Installerer ${Q.label}...`);const ce=M/x.length*100,Ge=100/x.length,be=await d.readText(Q.path).catch(()=>null);be!==null&&sr(be)===sr(Q.content)?(X({value:Math.min(99,ce+Ge),label:`${Q.label}: Allerede nyeste version`}),$("info",`${Q.label} findes allerede i samme version.`)):(await d.replaceTextSafely(Q.path,Q.content,(Ce,an)=>{X({value:Math.min(99,ce+Ce/100*Ge),label:`${Q.label}: ${an}`})},{createBackup:!0}),$("success",`Installerede ${Q.label}.`)),yi(Q.path,Q.content),Q.kind==="library"&&(T=Q)}Nn("Installation færdig"),await fn(!1),await yr(),T&&va(T)})}function Gs(){return(Ae.length>0?Ae:Zh()).filter(h=>Qn[h.id])}function Cc(){const d=Gs();if(d.length===0){$("info","Ingen filer valgt.");return}for(const h of d)wi(h.path,h.content);Oe(!1),$("success",`Gemte ${d.length} filer i browseren.`)}function Lc(){const d=Gs();if(d.length===0){$("info","Ingen filer valgt.");return}d.forEach((h,x)=>{window.setTimeout(()=>{Si(Ne(h.path),h.content)},x*120)}),Oe(!1),$("success",`Starter download af ${d.length} filer.`)}function va(d){ln(d.path,d.content,"pico"),un(d.path,d.content),$("info",`Åbnede ${d.label} i editoren.`)}function Is(d,h){Kt(x=>{if(d.kind!=="program")return{...x,[d.id]:h};const T={...x};for(const M of Ae)M.kind==="program"&&(T[M.id]=!1);return T[d.id]=h,T})}async function $l(){if(Ps(),_e&&ve==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ve==="local"){await Pl();return}const d=kt.current;if(!d){$("error",`${Ne(ee)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(ee.endsWith(".py")){if(!Hl()&&($("info",`${Ne(ee)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await ha())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(D)return;Fr(),Wn.current="",Zn(!0);try{await d.runFile(ee,()=>{Fr(),Wn.current="",Yr.current=!1,Ml(!0),Nt.current=!0}),$("success",`Kører ${Ne(ee)}. Brug Stop for at afbryde.`)}catch(h){Ml(!1),Nt.current=!1,Fr(),Wn.current="",$("error",h instanceof Error?h.message:"Kunne ikke starte koden.")}return}L(!0);try{const h=await d.exec(W,2e4);h.output.trim()&&$("info",h.output),h.error.trim()&&gi(h.error,W),!h.output.trim()&&!h.error.trim()&&$("success","Koden kørte uden output.")}catch(h){$("error",h instanceof Error?h.message:"Kunne ikke køre koden.")}finally{L(!1)}}async function Pl(){const d=qf(W,{allowInput:!0});if(d.some(T=>T.level==="error")){for(const T of d){const M=T.line?`Linje ${T.line}: `:"";$(T.level==="error"?"error":"warning",`${M}${T.text}`)}return}/\binput\s*\(/.test(W)&&!j_()&&$("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const h=new AbortController;dr.current=h;const x=new Ey;tt.current=x,L(!0),ua(!0),Zn(!0),$("info",y?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const T=[],M=await x.run(W,{timeoutMs:null,signal:h.signal,onOutput:be=>{T.push(be),$("info",be)}});for(const be of M.issues){const Ce=be.line?`Linje ${be.line}: `:"";$(be.level==="error"?"error":"warning",`${Ce}${be.text}`)}const Q=[...T,M.output].filter(Boolean).join(`
`).trim(),ce=M.output.trim();!M.error.trim()&&qy(Q)?gi(Q,W):(ce&&$("info",ce),M.error.trim()&&gi(M.error,W,M.unavailable?"warning":"error")),M.ok&&!Q&&!M.error.trim()&&$("success","Browser-MicroPython kørte uden output.")}finally{dr.current=null,tt.current=null,x.dispose(),ua(!1),L(!1)}}async function Bc(){var h,x,T;if(jl){(h=dr.current)==null||h.abort(),(x=tt.current)==null||x.stop(),$("warning","Stoppede Browser-MicroPython."),Zn(!0);return}if(!Tt&&On){(T=Rt.current)==null||T.reset(),Ir(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Zn(!0);return}const d=kt.current;if(d)try{await d.stop(),$("warning","Stoppede koden på Pico.")}catch(M){$("error",M instanceof Error?M.message:"Kunne ikke stoppe koden.")}finally{Ml(!1),Nt.current=!1,Fr(),Wn.current="",Zn(!0),Es()}}function ki(){const d=kn.current;if(!d)return;const h=d.scrollHeight-d.scrollTop-d.clientHeight<12;Zn(h)}function Vs(){F([]),Zn(!0)}function Ys(){window.requestAnimationFrame(()=>{const d=kn.current;d&&(d.scrollTop=d.scrollHeight)})}async function ql(){const d=qn?ft:ft.trimEnd();if(qn){if(!Tt){const T=tt.current;if(!T){$("warning","Browser-MicroPython kører ikke lige nu."),it();return}Qt(""),Zn(!0),qr(d),T.sendInput(d),it();return}const x=kt.current;if(!x){$("warning","Pico-terminalen er ikke forbundet."),it();return}Qt(""),Zn(!0);try{await x.sendProgramInput(d)}catch(T){$("error",T instanceof Error?T.message:"Kunne ikke sende input til Pico-koden.")}finally{it()}return}if(!d.trim())return;if(Al(x=>(x.at(-1)===d?x:[...x,d]).slice(-80)),dt(null),Cn(null),Pn){$("warning",Tt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),it();return}if(!Tt){const x=qf(d);if(x.some(M=>M.level==="error")){for(const M of x){const Q=M.line?"Linje "+M.line+": ":"";$(M.level==="error"?"error":"warning",Q+M.text)}it();return}const T=Rt.current??new wy;Rt.current=T,Qt(""),Ir(!0),Zn(!0),$("info",">>> "+d);try{let M=!1;const Q=await T.send(d,{timeoutMs:15e3,onOutput:Ge=>{M=!0,$("info",Ge)}}),ce=Q.output.trim();ce&&!M&&$("info",ce),Q.error.trim()&&gi(Q.error,d,Q.unavailable?"warning":"error")}catch(M){$("error",M instanceof Error?M.message:"Browser-MicroPython-terminalen fejlede.")}finally{Ir(!1),it()}return}if(_e){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),it();return}const h=kt.current;if(!y||!h){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),it();return}Qt(""),Ir(!0),Zn(!0),Yr.current=!0,$("info",">>> "+d);try{await h.sendFriendlyLine(d)}catch(x){Yr.current=!1,$("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Ir(!1),it()}}function it(){window.requestAnimationFrame(()=>{const d=pt.current;if(!d||d.disabled)return;d.focus();const h=d.value.length;d.selectionStart=h,d.selectionEnd=h})}function xa(d,h,x){if(x.length===0)return null;const T=y||_e;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:h})]}),u.jsx("div",{className:"ide-install-scroll",children:x.map(M=>{const Q=_e&&Rl(M);return u.jsxs("label",{className:`ide-install-row ${Q?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Qn[M.id],disabled:Q,onChange:ce=>Is(M,ce.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[$s(M),T&&M.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${M.status}`,children:Q?"USB":lv(M.status)})]}),u.jsx("small",{children:M.description})]})]},M.id)})})]})}function $s(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Ps(){Zt&&F([]),Zn(!0)}function wa(d,h){const x=d.indexOf(`
`,h);return x===-1?d.length:x}function Ni(d,h){if(n_(d,h)){on(null);return}const x=Qf(d,h);if(!x||x.query.length<1){on(null);return}const T=e_(d,h,!0).slice(0,8),M=t_(Ln.current,x.start,T.length);on(T.length>0&&M?{items:T,selected:0,start:x.start,end:h,position:M}:null)}function Ea(d,h){if(n_(d,h)){Cn(null);return}const x=Qf(d,h);if(!x||x.query.length<1){Cn(null);return}const T=e_(d,h,!1).slice(0,8),M=t_(pt.current,x.start,T.length);Cn(T.length>0&&M?{items:T,selected:0,start:x.start,end:h,position:M}:null)}function qs(d){const h=d.value.slice(d.selectionStart,d.selectionEnd);Ol(Jy(h)?h:"")}function Ri(d,h){window.requestAnimationFrame(()=>{const x=d==null?void 0:d.querySelector(`[data-autocomplete-index="${h}"]`);x==null||x.scrollIntoView({block:"nearest"})})}function Bn(d=Ye==null?void 0:Ye.items[Ye.selected]){if(!d||!Ye)return;const h=_r(),x=W.slice(0,Ye.start)+d.insert+W.slice(Ye.end),T=Ye.start+d.insert.length-(d.insert.endsWith("()")?1:0);on(null),Dn(x,T,h),window.requestAnimationFrame(()=>{const M=Ln.current;M&&M.focus()})}function el(d=tn==null?void 0:tn.items[tn.selected]){if(!d||!tn)return;const h=ft.slice(0,tn.start)+d.insert+ft.slice(tn.end),x=tn.start+d.insert.length-(d.insert.endsWith("()")?1:0);Qt(h),Cn(null),window.requestAnimationFrame(()=>{const T=pt.current;T&&(T.focus(),T.selectionStart=x,T.selectionEnd=x)})}function Fs(d){const h=Ln.current;if(!h)return!1;const x=h.selectionStart,T=h.selectionEnd,M={content:W,selectionStart:x,selectionEnd:T},Q=W.lastIndexOf(`
`,x-1)+1,ce=T>x&&W[T-1]===`
`?T-1:T,Ge=wa(W,ce),be=Ge<W.length?Ge+1:Ge,Ce=W.slice(Q,be);if(d<0){if(Q===0)return!1;const Dt=W.lastIndexOf(`
`,Q-2)+1,qt=W.slice(Dt,Q),nl=W.slice(0,Dt)+Ce+qt+W.slice(be),tl=-qt.length;return Dn(nl,x+tl,M,T+tl),!0}if(be>=W.length)return!1;const an=wa(W,be),Fn=an<W.length?an+1:an,Se=W.slice(be,Fn),Je=W.slice(0,Q)+Se+Ce+W.slice(Fn),tr=Se.length;return Dn(Je,x+tr,M,T+tr),!0}function Xs(d){var Fn;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?Zr():ks())&&on(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),Zr()&&on(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!D&&ee.trim()&&As();return}if(d.altKey&&!d.ctrlKey&&!d.metaKey&&(d.key==="ArrowUp"||d.key==="ArrowDown")){d.preventDefault(),Fs(d.key==="ArrowUp"?-1:1)&&on(null);return}if(Ye){if(d.key==="ArrowDown"){d.preventDefault(),on(Se=>{if(!Se)return Se;const Je=(Se.selected+1)%Se.items.length;return Ri(pn.current,Je),{...Se,selected:Je}});return}if(d.key==="ArrowUp"){d.preventDefault(),on(Se=>{if(!Se)return Se;const Je=(Se.selected-1+Se.items.length)%Se.items.length;return Ri(pn.current,Je),{...Se,selected:Je}});return}if(d.key==="Tab"){d.preventDefault(),Bn();return}if(d.key==="Enter"){if(!(Ye.items[Ye.selected]&&C_(Ye.items[Ye.selected],W.slice(Ye.start,Ye.end)))){d.preventDefault(),Bn();return}on(null)}if(d.key==="Escape"){d.preventDefault(),on(null);return}}if(d.key==="Enter"){d.preventDefault();const Se=d.currentTarget,Je=Se.selectionStart,tr=Se.selectionEnd,Dt={content:W,selectionStart:Je,selectionEnd:tr},qt=W.lastIndexOf(`
`,Je-1)+1,nl=W.slice(qt,Je),tl=((Fn=nl.match(/^[ \t]*/))==null?void 0:Fn[0])??"",Sa=nl.trimEnd().endsWith(":")?"    ":"",Fl=`
${tl}${Sa}`,Xl=W.slice(0,Je)+Fl+W.slice(tr),zn=Je+Fl.length;Dn(Xl,zn,Dt),window.requestAnimationFrame(()=>{Se.selectionStart=zn,Se.selectionEnd=zn});return}if(d.key!=="Tab")return;d.preventDefault();const h=d.currentTarget,x=h.selectionStart,T=h.selectionEnd,M={content:W,selectionStart:x,selectionEnd:T},Q="    ";if(d.shiftKey){const Se=W.lastIndexOf(`
`,x-1)+1,Je=x===T?wa(W,x):T,tr=W.slice(Se,Je);let Dt=0,qt=0;const nl=tr.replace(/(^|\n)( {1,4}|\t)/g,(Sa,Fl,Xl,zn)=>{const Kl=Xl.length;return Se+zn<x&&(Dt+=Kl),qt+=Kl,Fl});if(qt===0)return;const tl=W.slice(0,Se)+nl+W.slice(Je);Dn(tl,Math.max(Se,x-Dt),M,x===T?Math.max(Se,x-Dt):Math.max(Se,T-qt)),window.requestAnimationFrame(()=>{h.selectionStart=Math.max(Se,x-Dt),h.selectionEnd=x===T?h.selectionStart:Math.max(h.selectionStart,T-qt)});return}if(x===T){const Se=W.slice(0,x)+Q+W.slice(T);Dn(Se,x+Q.length,M),window.requestAnimationFrame(()=>{h.selectionStart=x+Q.length,h.selectionEnd=x+Q.length});return}const ce=W.lastIndexOf(`
`,x-1)+1,be=W.slice(ce,T).replace(/^/gm,Q),Ce=be.split(`
`).length,an=W.slice(0,ce)+be+W.slice(T);Dn(an,x+Q.length,M,T+Ce*Q.length),window.requestAnimationFrame(()=>{h.selectionStart=x+Q.length,h.selectionEnd=T+Ce*Q.length})}function Ks(d){if(qn){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),ql());return}if(tn){if(d.key==="ArrowDown"){d.preventDefault(),Cn(h=>{if(!h)return h;const x=(h.selected+1)%h.items.length;return Ri(Ll.current,x),{...h,selected:x}});return}if(d.key==="ArrowUp"){d.preventDefault(),Cn(h=>{if(!h)return h;const x=(h.selected-1+h.items.length)%h.items.length;return Ri(Ll.current,x),{...h,selected:x}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),el();return}if(d.key==="Escape"){d.preventDefault(),Cn(null);return}}if(d.key==="Tab"){d.preventDefault();const h=d.currentTarget,x=h.selectionStart,T=h.selectionEnd,M="    ",Q=ft.slice(0,x)+M+ft.slice(T),ce=x+M.length;Qt(Q),dt(null),Cn(null),window.requestAnimationFrame(()=>{h.selectionStart=ce,h.selectionEnd=ce});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===ft.length&&d.currentTarget.selectionEnd===ft.length)||mi.length===0)return;d.preventDefault();const x=d.key==="ArrowUp"?Sn===null?mi.length-1:Math.max(0,Sn-1):Sn===null||Sn+1>=mi.length?null:Sn+1;dt(x);const T=x===null?"":mi[x]??"";Qt(T),Cn(null),Zn(!0),window.requestAnimationFrame(()=>{const M=pt.current;M&&(M.selectionStart=T.length,M.selectionEnd=T.length,Ys())});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),ql())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(rd,{title:"Pico Kodeværksted",onMenu:()=>s()}),pi?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Tc,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(nt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=fa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(nt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>fn(),disabled:!y&&!_e||D,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(nt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:Il.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Il.map(d=>{if(d.kind==="separator"){const M=d.id==="pico-files"&&!y&&!_e;return u.jsxs(z.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),M&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const h=_e&&Rl(d),x=mt[Vn(d.source,d.path)],T=x!==void 0&&x!==tv(d,pe,or);return u.jsxs("div",{className:`ide-file-row ${ee===d.path&&ve===d.source?"active":""} ${h?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>ba(d),disabled:h,title:h?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:T?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${T?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Dc(d),disabled:d.type!=="file"||D||h,"aria-label":`Filvalg for ${d.name}`,title:h?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(nt,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:_e?"Forbundet Pico":"USB udvikling"}),!_e&&u.jsx("span",{className:`ide-usb-status ${$t.supported?"available":"unavailable"}`,title:$t.message,"data-tooltip":$t.message,role:"img","aria-label":$t.message,tabIndex:0,children:"!"})]}),_e&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!_e&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:y?Rs:Vl,disabled:!$t.supported||S,children:S?"Forbinder...":y?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:ya,disabled:_e||D,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:kc,disabled:!y||D,children:"Nulstil enhed"})]}),_e&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(nt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:ya,disabled:D,children:"Startprogrammer og biblioteker"})]}),!_e&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>wn(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Ne(ee),u.jsxs("small",{children:[vs," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:$l,disabled:D,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Bc,disabled:!jl&&!(!Tt&&On)&&(!y||!En),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ds,disabled:D||!ee.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ls(),disabled:D||!ee.trim(),children:"Slet"})]})]}),vi(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-di.top}px)`},children:Array.from({length:lt},(d,h)=>u.jsx("span",{children:h+1},h))}),u.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-di.left}px, ${-di.top}px)`},children:nv(W,yc)}),u.jsx("textarea",{ref:Ln,className:"ide-editor",value:W,onChange:d=>Dn(d.target.value,d.target.selectionStart,_r(),d.target.selectionEnd,"typing"),onKeyDown:Xs,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Ni(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Ni(d.currentTarget.value,d.currentTarget.selectionStart),qs(d.currentTarget)},onSelect:d=>qs(d.currentTarget),onScroll:d=>{Gr({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Ye&&Ni(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:D||!!se,"aria-busy":D||!!se,spellCheck:!1}),Ye&&u.jsx("div",{ref:pn,className:`ide-autocomplete placement-${Ye.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:Ye.position.left,top:Ye.position.top,maxHeight:Ye.position.maxHeight},children:(Ye.position.placement==="above"?Ye.items.map((d,h)=>({item:d,index:h})).reverse():Ye.items.map((d,h)=>({item:d,index:h}))).map(({item:d,index:h})=>u.jsx("button",{className:h===Ye.selected?"active":"",type:"button","data-autocomplete-index":h,onMouseDown:x=>{x.preventDefault(),Bn(d)},role:"option","aria-selected":h===Ye.selected,children:d.label},d.label))}),se&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Ne(se),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${ur?"":"active"}`,type:"button",onClick:()=>bs(d=>!d),"aria-label":ur?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!ur,title:ur?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Zt?"active":""}`,type:"button",onClick:()=>Cl(d=>!d),"aria-pressed":Zt,title:Zt?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Vs,disabled:V.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:kn,onScroll:ki,onClick:()=>{var d;return(d=pt.current)==null?void 0:d.focus()},children:[V.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):V.map((d,h)=>u.jsx("div",{className:`term-line ${d.variant==="input"?"term-input-echo":`term-${d.level}`}`,children:d.technical&&!ur?d.technical:d.text},`${h}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Pn&&!qn?"locked":""} ${qn?"stdin":""}`,onSubmit:d=>{d.preventDefault(),ql()},children:[u.jsx("span",{"aria-hidden":"true",children:ma}),u.jsx("textarea",{ref:pt,value:ft,onChange:d=>{Qt(d.target.value),dt(null),qn?Cn(null):Ea(d.target.value,d.target.selectionStart)},onKeyDown:Ks,onKeyUp:d=>{qn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Ea(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{qn||Ea(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:xs,placeholder:hr,"aria-label":qn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:hr,rows:Math.max(1,ft.split(`
`).length)})]}),tn&&u.jsx("div",{ref:Ll,className:`ide-autocomplete ide-repl-autocomplete placement-${tn.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:tn.position.left,top:tn.position.top,maxHeight:tn.position.maxHeight},children:(tn.position.placement==="above"?tn.items.map((d,h)=>({item:d,index:h})).reverse():tn.items.map((d,h)=>({item:d,index:h}))).map(({item:d,index:h})=>u.jsx("button",{className:h===tn.selected?"active":"",type:"button","data-autocomplete-index":h,onMouseDown:x=>{x.preventDefault(),el(d)},role:"option","aria-selected":h===tn.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:fa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var h;Rc((h=d.target.files)==null?void 0:h[0]),d.currentTarget.value=""}}),O&&u.jsx(Tn,{title:"Gem fil",onClose:()=>Z(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void ha(),disabled:!y&&!_e||D,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Sc,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Os,children:"Gem filen i browseren"})]})}),He&&u.jsx(Tn,{title:"Startprogrammer og biblioteker",onClose:()=>Oe(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:y||_e?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[xa("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(d=>d.kind==="program")),xa("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(y||_e)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Jr,disabled:D,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Lc,disabled:D,children:"Download til computer"}),u.jsx("button",{className:y||_e?"btn btn-outline":"btn btn-primary",type:"button",onClick:Cc,disabled:D,children:"Gem i browseren"})]})]})}),Hr&&u.jsx(Tn,{title:"main.py er gemt",onClose:()=>St(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void Cs("control"),disabled:D,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Cs("ide"),disabled:D,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>St(!1),disabled:D,children:"Senere"})]})}),xe&&u.jsx(Tn,{title:"Installer MicroPython",onClose:()=>wn(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:jn,onChange:d=>Yt(d.target.value),children:da.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Pt==null?void 0:Pt.version)??Yn,onChange:d=>Ur(d.target.value),children:Pr.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),Pt&&u.jsx("a",{className:"btn btn-primary btn-block",href:Pt.url,download:Pt.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),G&&u.jsx(Tn,{title:"Ny Python-fil",onClose:()=>re(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Mc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>fe(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",vc,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Qh(ue),children:"Opret"})]})}),U&&u.jsx(Tn,{title:Ne(U.path),onClose:()=>te(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:U.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Us()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:Ee,onChange:d=>N(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",ds(U.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",ds(U.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Hf(Ee,ds(U.path))||Hf(Ee,ds(U.path))===U.path||D,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Oc(),disabled:D,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Ls(U),disabled:D,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),U.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:U.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Ne(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Ac(d),disabled:D,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>ga(d),disabled:D,children:"Slet"})]},d.path))})]})]})})]})}function Qh(s){var c;const i=(c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Yy(s){const i=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=O_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function Hf(s,i="py"){const c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=O_(a[1]),p=i.replace(/^\./,"").toLowerCase(),_=(a[2]??(p||"py")).toLowerCase();return f?`/${f}.${_}`:""}function $y(s){return Ne(s).replace(/\.(py|txt|json|csv)$/i,"")}function O_(s){return s.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function ds(s){var a;const i=Ne(s).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function sr(s){return s.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Zh(){return na.map(s=>({...s,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Wh(s){const i={};return s.forEach(c=>{i[c.id]=!1}),i}function Ne(s){return s.split("/").filter(Boolean).pop()??s}function nc(s){return s.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Jh(s){const i=s.userAgent||"",c=s.platform||"",a=s.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),p=/Macintosh/i.test(c)&&a>1;return f&&!p}function Py(s){return s instanceof DOMException&&s.name==="AbortError"}function qy(s){return/Traceback \(most recent call last\):/.test(s)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(s)}function Rl(s){return Fy(s)}function Fy(s){return s.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Kf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(s=>({label:s,insert:`${s}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(s)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(s=>({label:`${s}()`,insert:`${s}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function e_(s,i,c){const a=Qf(s,i);if(!a)return[];const f=Xy(s,a.start,i),p=a.query.toLowerCase(),_=f.beforeToken.toLowerCase(),b=f.linePrefix.toLowerCase(),E=c?[...Kf,...Qy(s)]:Kf;return Zy(E).filter(y=>{const v=y.label.toLowerCase(),S=y.insert.toLowerCase();return S===p||v===p||C_(y,a.query)?!1:f.importLine?Ky(y,f)?v.startsWith(b)||S.startsWith(b)||v.startsWith(p)||S.startsWith(p):!1:_.endsWith(".")&&!S.includes(".")?!1:!!(S.startsWith(p)||v.startsWith(p))})}function Xy(s,i,c){const a=s.lastIndexOf(`
`,i-1)+1,f=s.slice(a,c),p=s.slice(a,i),_=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),b=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:p,importLine:_,fromImportLine:b}}function Ky(s,i){return i.fromImportLine?!s.insert.includes("(")&&!s.insert.startsWith("import "):s.insert.startsWith("import ")||s.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.insert)}function Qy(s){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of s.matchAll(a))f[1]&&i.add(f[1]),f[2]&&i.add(f[2]);return[...i].filter(a=>a.length>1&&!Wy.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function Zy(s){const i=new Set,c=[];for(const a of s){const f=a.insert.toLowerCase();i.has(f)||(i.add(f),c.push(a))}return c}const Wy=new Set(Kf.map(s=>s.insert.replace(/[().: ]+$/g,"")));function Qf(s,i){const a=s.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function n_(s,i){const c=s.lastIndexOf(`
`,Math.max(0,i-1))+1;let a=null,f=null,p=!1;for(let _=0;_<i;_+=1){const b=s[_],E=s.slice(_,_+3);if(f){E===f.repeat(3)&&(f=null,_+=2);continue}if(a){if(p){p=!1;continue}if(b==="\\"){p=!0;continue}b===a&&(a=null),b===`
`&&(a=null);continue}if(b==="#"){const w=s.indexOf(`
`,_),y=w===-1?s.length:w;if(i<=y&&_>=c)return!0;_=y;continue}if(E==='"""'||E==="'''"){f=b,_+=2;continue}(b==='"'||b==="'")&&(a=b)}return a!==null||f!==null}function C_(s,i){const c=s.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function Jy(s){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(s)}function t_(s,i,c){if(!s)return null;const a=s.closest(".ide-terminal")??s.parentElement;if(!a)return null;const f=window.getComputedStyle(s),p=document.createElement("div"),_=document.createElement("span"),b=a.getBoundingClientRect(),E=s.getBoundingClientRect();p.style.position="absolute",p.style.visibility="hidden",p.style.pointerEvents="none",p.style.whiteSpace="pre-wrap",p.style.overflowWrap="break-word",p.style.wordBreak=f.wordBreak,p.style.boxSizing=f.boxSizing,p.style.width=`${s.getBoundingClientRect().width}px`,p.style.padding=f.padding,p.style.border=f.border,p.style.font=f.font,p.style.lineHeight=f.lineHeight,p.style.letterSpacing=f.letterSpacing,p.style.tabSize=f.tabSize,p.style.fontVariantLigatures=f.fontVariantLigatures,p.style.scrollbarGutter=f.scrollbarGutter,p.style.left=`${E.left-b.left-s.scrollLeft}px`,p.style.top=`${E.top-b.top-s.scrollTop}px`,p.textContent=s.value.slice(0,i),_.textContent=s.value.slice(i,i+1)||" ",p.appendChild(_),a.appendChild(p);const w=_.getBoundingClientRect();p.remove();const y=34,v=14,S=Math.min(210,Math.max(y+v,c*y+v)),I=ev(w.left-b.left,8,Math.max(8,a.clientWidth-296)),V=w.top-b.top+a.scrollTop,F=w.bottom-b.top+a.scrollTop+10,D=a.scrollTop+a.clientHeight-F-8,L=V-a.scrollTop-8,H=a.scrollTop+a.clientHeight,ie=D>=Math.min(S,y*2)||D>=L?"below":"above",se=Math.max(y+v,Math.min(S,ie==="below"?D:L)),oe=ie==="below"?Math.min(F,H-se-8):Math.max(a.scrollTop+8,V-se-8);return{left:I,top:oe,maxHeight:se,placement:ie}}function ev(s,i,c){return Math.max(i,Math.min(c,s))}function nv(s,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];return s.split(/(\r?\n)/).forEach((p,_)=>{if(p===`
`||p===`\r
`){f.push(u.jsx("br",{},`br-${_}`));return}let b=0;[...p.matchAll(a)].forEach((w,y)=>{const v=w.index??0;v>b&&f.push(...r_(p.slice(b,v),c,`${_}-${y}-plain`,i));const S=w[0],I=S.startsWith("#")?"tok-comment":S.startsWith('"')||S.startsWith("'")?"tok-string":/^\d/.test(S)?"tok-number":"tok-builtin";f.push(...ac(S,i,`${_}-${y}-token`,I)),b=v+S.length}),b<p.length&&f.push(...r_(p.slice(b),c,`${_}-tail`,i))}),f.length?f:" "}function r_(s,i,c,a=""){const f=[];let p=0;const _=new RegExp(i.source,"g");return[...s.matchAll(_)].forEach((b,E)=>{const w=b.index??0;w>p&&f.push(...ac(s.slice(p,w),a,`${c}-${E}-plain`)),f.push(...ac(b[0],a,`${c}-${E}-keyword`,"tok-keyword")),p=w+b[0].length}),p<s.length&&f.push(...ac(s.slice(p),a,`${c}-plain-end`)),f}function ac(s,i,c,a=""){if(!i)return[u.jsx("span",{className:a||void 0,children:s},c)];const f=[],p=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${p})(?![A-Za-zÆØÅæøå0-9_])`,"g");let b=0;return[...s.matchAll(_)].forEach((E,w)=>{const y=E.index??0;y>b&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(b,y)},`${c}-${w}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:E[0]},`${c}-${w}-match`)),b=y+E[0].length}),b<s.length&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(b)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:s},c)]}function tc(s){return s.length>0?s:[{path:Xf,content:A_,uploaded:!1,updatedAt:Date.now()}]}function Gf(s,i,c,a){const f=s.filter(p=>p.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((p,_)=>_.updatedAt-p.updatedAt)}function sc(s){return s.map(i=>({name:Ne(i.path),path:i.path,type:"file",size:new Blob([i.content]).size}))}function tv(s,i,c){var a;return s.source==="pico"?c[s.path]:(a=i.find(f=>f.path===s.path))==null?void 0:a.content}function oc(s){const i=s.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",p=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return p?{originalPath:`${a}${p[1]}${p[3]}`,index:parseInt(p[2],10)}:null}function Tl(s){return oc(s)!==null}function ta(s){const i=new Map;for(const c of s){const a=oc(c.path);if(!a)continue;const f=i.get(a.originalPath)??[];f.push(c),i.set(a.originalPath,f)}for(const c of i.values())c.sort((a,f)=>{var p,_;return(((p=oc(f.path))==null?void 0:p.index)??0)-(((_=oc(a.path))==null?void 0:_.index)??0)});return i}function l_(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",p=a>=0?c.slice(a+1):c.replace(/^\/+/,""),_=p.lastIndexOf("."),b=_>0?p.slice(0,_):p,E=_>0?p.slice(_):"",w=new Set(i.map(y=>y.path.toLowerCase()));for(let y=1;y<1e3;y+=1){const v=`${f}${b}_backup${y}${E}`;if(!w.has(v.toLowerCase()))return v}return`${f}${b}_backup${Date.now()}${E}`}function rv(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",p=a>=0?c.slice(a+1):c.replace(/^\/+/,""),_=p.lastIndexOf("."),b=_>0?p.slice(0,_):p,E=_>0?p.slice(_):"";for(let w=1;w<1e3;w+=1){const y=w===1?"_kopi":`_kopi${w}`,v=`${f}${b}${y}${E}`;if(!i(v)&&!Tl(v))return v}return`${f}${b}_kopi${Date.now()}${E}`}function lv(s){return s==="ok"?"Nyeste":s==="outdated"?"Opdater":s==="missing"?"Mangler":"Ikke tjekket"}function iv(s,i,c,a){const f=new Map,p=ta(s),_=ta(sc(i));for(const v of s)Tl(v.path)||f.set(Vn("pico",v.path),{kind:"file",name:v.name,path:v.path,type:v.type,size:v.size,source:"pico",uploaded:!0,versions:p.get(v.path)??[]});for(const v of i)Tl(v.path)||f.set(Vn("local",v.path),{kind:"file",name:Ne(v.path),path:v.path,type:"file",source:"local",uploaded:!1,versions:_.get(v.path)??[]});for(const v of Object.keys(c)){const[S,...I]=v.split(":"),V=I.join(":");if(S!=="local"&&S!=="pico"||!V)continue;const F=f.get(v);if(F){f.set(v,F);continue}f.set(v,{kind:"file",name:Ne(V),path:V,type:"file",source:S,uploaded:!1,versions:S==="pico"?p.get(V)??[]:_.get(V)??[]})}const b=[...f.values()].sort(sv),E=b.filter(v=>v.source==="pico"),w=b.filter(v=>v.source==="local"),y=[];return E.length>0||a?y.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...E):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),w.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...w),y}const av=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function sv(s,i){const c=i_(s.path),a=i_(i.path);return c===null&&a===null?s.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function i_(s){var c;const i=(c=s.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?av.get(i)??null:null}function a_(s,i,c){if(!(i in s))return s;const a={...s,[c]:s[i]};return delete a[i],a}function ov(s,i,c,a){const f=`${i}:${c}`;if(!(f in s))return s;const p={...s,[`${i}:${a}`]:s[f]};return delete p[f],p}function cv({open:s}){const i=ae(H=>H.screen),c=ae(H=>H.active),a=ae(H=>H.toggleSideMenu),f=ae(H=>H.toggleDebugger),p=ae(H=>H.setEditMode),_=ae(H=>H.openMenuPage),b=ae(H=>H.disconnect),E=ae(H=>H.openPicoIde),w=ae(H=>H.closePicoIde),y=ae(H=>H.picoIdeOrigin),v=i==="dashboard",S=i==="control",I=i==="ide",V=S&&!!(c!=null&&c.canEdit),F=!S||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),D=y==="control",L=y==="control"?"Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${s?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${i} ${s?"open":"closing"}`,"aria-label":"Sidemenu",children:[v&&u.jsxs(u.Fragment,{children:[u.jsx(wt,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),u.jsx(wt,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),u.jsx(wt,{label:"Kodeværksted",icon:"picoIde",onClick:E,disabled:!F}),u.jsx(If,{}),u.jsx(wt,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),u.jsx(wt,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),u.jsx(wt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),S&&u.jsxs(u.Fragment,{children:[u.jsx(wt,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),u.jsx(wt,{label:"Rediger",icon:"edit",onClick:()=>p(!0),disabled:!V}),u.jsx(wt,{label:"Kodeværksted",icon:"picoIde",onClick:E,disabled:!F}),u.jsx(If,{}),u.jsx(wt,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),u.jsx(wt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),I&&u.jsxs(u.Fragment,{children:[u.jsx(wt,{label:L,icon:"back",onClick:w}),u.jsx(If,{})]}),u.jsx("div",{className:"spacer"}),(S||I&&D)&&u.jsx(wt,{label:"Forlad",icon:"exit",onClick:()=>b()})]})]})}function wt({label:s,icon:i,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":s,children:[u.jsx(nt,{name:i}),u.jsx("span",{children:s})]})}function If(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:Wb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const uv={error:"term-error",success:"term-success",warning:"term-warning",info:""},s_={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function fv(){const s=new Date,i=c=>String(c).padStart(2,"0");return`${i(s.getDate())}-${i(s.getMonth()+1)}-${s.getFullYear()}-${i(s.getHours())}-${i(s.getMinutes())}`}function dv(){const s=ae(f=>f.logs),i=ae(f=>f.clearLogs),c=ae(f=>f.toggleDebugger);function a(){const f=[...s].reverse().map(E=>`${E.time} ${s_[E.level]}${E.message}`).join(`
`),p=new Blob([f],{type:"text/plain"}),_=URL.createObjectURL(p),b=document.createElement("a");b.href=_,b.download=`${fv()}.txt`,b.click(),URL.revokeObjectURL(_)}return u.jsxs(Tn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:s.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):s.map((f,p)=>u.jsxs("div",{className:`term-line ${uv[f.level]}`,children:[f.time," ",s_[f.level],f.message]},`${f.time}-${p}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const L_=4,Vt=L_*4+17,o_=80,mv=20,pv=30660;function hv(s){const i=new TextEncoder().encode(s);if(i.length>76)throw new Error("QR-koden er for lang.");const c=c_(!1),a=c_(!1);_v(c,a);const f=bv(i),p=xv(f,mv);return yv(c,a,[...f,...p]),vv(c,a),c}function c_(s){return Array.from({length:Vt},()=>Array.from({length:Vt},()=>s))}function It(s,i,c,a,f,p=!0){s[a][c]=f,p&&(i[a][c]=!0)}function _v(s,i){Vf(s,i,0,0),Vf(s,i,Vt-7,0),Vf(s,i,0,Vt-7);for(let c=0;c<Vt;c+=1)i[6][c]||It(s,i,c,6,c%2===0),i[c][6]||It(s,i,6,c,c%2===0);gv(s,i,26,26),It(s,i,8,L_*4+9,!0)}function Vf(s,i,c,a){for(let f=-1;f<=7;f+=1)for(let p=-1;p<=7;p+=1){const _=c+p,b=a+f;if(_<0||b<0||_>=Vt||b>=Vt)continue;const E=p>=0&&p<=6&&f>=0&&f<=6&&(p===0||p===6||f===0||f===6||p>=2&&p<=4&&f>=2&&f<=4);It(s,i,_,b,E)}}function gv(s,i,c,a){for(let f=-2;f<=2;f+=1)for(let p=-2;p<=2;p+=1)i[a+f][c+p]||It(s,i,c+p,a+f,Math.max(Math.abs(p),Math.abs(f))!==1)}function bv(s){const i=[];rc(i,4,4),rc(i,s.length,8);for(const a of s)rc(i,a,8);for(rc(i,0,Math.min(4,o_*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((f,p)=>f<<1|p,0));for(let a=236;c.length<o_;a=a===236?17:236)c.push(a);return c}function rc(s,i,c){for(let a=c-1;a>=0;a-=1)s.push(i>>>a&1)}function yv(s,i,c){const a=c.flatMap(_=>Array.from({length:8},(b,E)=>_>>>7-E&1));let f=0,p=!0;for(let _=Vt-1;_>=1;_-=2){_===6&&(_-=1);for(let b=0;b<Vt;b+=1){const E=p?Vt-1-b:b;for(let w=0;w<2;w+=1){const y=_-w;if(i[E][y])continue;const v=f<a.length?a[f]===1:!1;s[E][y]=v!==((y+E)%2===0),f+=1}}p=!p}}function vv(s,i){const c=a=>(pv>>>a&1)!==0;for(let a=0;a<=5;a+=1)It(s,i,8,a,c(a));It(s,i,8,7,c(6)),It(s,i,8,8,c(7)),It(s,i,7,8,c(8));for(let a=9;a<15;a+=1)It(s,i,14-a,8,c(a));for(let a=0;a<8;a+=1)It(s,i,Vt-1-a,8,c(a));for(let a=8;a<15;a+=1)It(s,i,8,Vt-15+a,c(a))}const hs=new Array(512),Zf=new Array(256);let u_=!1;function B_(){if(u_)return;let s=1;for(let i=0;i<255;i+=1)hs[i]=s,Zf[s]=i,s<<=1,s&256&&(s^=285);for(let i=255;i<512;i+=1)hs[i]=hs[i-255];u_=!0}function z_(s,i){return s===0||i===0?0:hs[Zf[s]+Zf[i]]}function xv(s,i){B_();const c=wv(i),a=Array.from({length:i},()=>0);for(const f of s){const p=f^a.shift();a.push(0);for(let _=0;_<i;_+=1)a[_]^=z_(c[_],p)}return a}function wv(s){B_();let i=[1];for(let c=0;c<s;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let f=0;f<i.length;f+=1)a[f]^=z_(i[f],hs[c]),a[f+1]^=i[f];i=a}return i.slice(1)}function Ev(){const s=ae(xe=>xe.menuPage),i=ae(xe=>xe.closeMenuPage),c=ae(xe=>xe.user),a=ae(xe=>xe.active),f=ae(xe=>xe.layout),p=ae(xe=>xe.sliderValues),_=ae(xe=>xe.savedDevices),b=ae(xe=>xe.updateUsername),E=ae(xe=>xe.createOwnerPairingCode),w=ae(xe=>xe.applyOwnerPairingCode),y=ae(xe=>xe.clearSavedDevices),v=ae(xe=>xe.resetApplicationData),S=ae(xe=>xe.saveDeviceSettings),I=ae(xe=>xe.setEditMode),V=ae(xe=>xe.askConfirm),[F,D]=z.useState((c==null?void 0:c.username)??""),[L,H]=z.useState(!1),[ie,se]=z.useState(""),[oe,pe]=z.useState(""),[J,ee]=z.useState(!1),[Re,ve]=z.useState(""),we=z.useRef(null),[W,Pe]=z.useState((a==null?void 0:a.iconID)??0),[Ae,qe]=z.useState(!1),[G,re]=z.useState((a==null?void 0:a.canOthersConnect)??!1),[ue,fe]=z.useState((a==null?void 0:a.canOthersEdit)??!1),[Ee,N]=z.useState((a==null?void 0:a.canOthersEditCode)??!1),[U,te]=z.useState((a==null?void 0:a.gridCols)??11),[O,Z]=z.useState((a==null?void 0:a.gridRows)??31),[ne,X]=z.useState(!1);z.useEffect(()=>{s==="user-settings"&&(D((c==null?void 0:c.username)??""),pe(""),ve(""),ee(!1))},[s,c==null?void 0:c.username]),z.useEffect(()=>{s==="device-settings"&&a&&(Pe(a.iconID),re(a.canOthersConnect),fe(a.canOthersEdit),N(a.canOthersEditCode),te(a.gridCols),Z(a.gridRows))},[a,s]),z.useEffect(()=>{if(!J)return;let xe=!1,wn=null,Mn=0;async function ze(){var Yt;const jn=window.BarcodeDetector;if(!jn||!((Yt=navigator.mediaDevices)!=null&&Yt.getUserMedia)){ve("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),ee(!1);return}try{wn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Yn=we.current;if(!Yn)return;Yn.srcObject=wn,await Yn.play();const Ur=new jn({formats:["qr_code"]}),Hr=async()=>{var St;if(!xe){try{const Gr=(St=(await Ur.detect(Yn)).find(En=>En.rawValue))==null?void 0:St.rawValue;if(Gr){pe(Gr),w(Gr)&&H(!1),ee(!1);return}}catch{}Mn=window.requestAnimationFrame(Hr)}};Mn=window.requestAnimationFrame(Hr)}catch{ve("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),ee(!1)}}return ze(),()=>{xe=!0,Mn&&window.cancelAnimationFrame(Mn),wn==null||wn.getTracks().forEach(jn=>jn.stop())}},[w,J]);const He=(xe,wn)=>Number.isFinite(xe)?Math.max(la,Math.min(ia,Math.round(xe))):wn,Oe=(c==null?void 0:c.username)??"",Qn=F.trim(),Kt=Qn.length>0&&Qn!==Oe;if(!s)return null;if(s==="user-settings"){let xe=function(){const ze=E();ze&&(se(ze),pe(""),H(!0))},wn=function(){w(oe)&&(pe(""),H(!1))};async function Mn(){var ze;try{await((ze=navigator.clipboard)==null?void 0:ze.writeText(ie))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Tn,{title:"Brugerindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${F.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:F,onChange:ze=>D(ze.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>b(F),disabled:!Kt,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:xe,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>V({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{v()}}),children:"Slet brugerdata"})]})}),L&&u.jsx(Tn,{title:"Del ejerkode",onClose:()=>H(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Nv,{code:ie}),u.jsx("code",{className:"owner-code-text",children:ie}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Mn(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${oe.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:oe,onChange:ze=>pe(ze.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:wn,disabled:!oe.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>ee(ze=>!ze),children:J?"Stop scanning":"Scan QR-kode"}),Re&&u.jsx("div",{className:"notice",children:Re}),J&&u.jsx("video",{className:"owner-code-video",ref:we,muted:!0,playsInline:!0})]})})]})}if(s==="application-settings")return u.jsx(Tn,{title:"Applikationsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"Version",value:_s}),u.jsx(Gt,{label:"Bluetooth",value:_c()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(Gt,{label:"Gemte enheder",value:String(_.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>V({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:y}),disabled:_.length===0,children:"Ryd gemte enheder"})]})});if(s==="application-about")return u.jsx(Tn,{title:"Om appen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(Gt,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(Gt,{label:"Version",value:_s})]})});if(s==="application-help")return u.jsx(Tn,{title:"Hjælp til applikationen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(s==="device-settings"){const xe=f.filter(ze=>ze.type==="slider"),wn=!!(a!=null&&a.isOwnedByMe);async function Mn(ze=!1){if(!a||!wn)return;const jn=He(U,a.gridCols),Yt=He(O,a.gridRows),Yn=Sv(f,jn,Yt);if(Yn&&!ze){V({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Yn.requiredCols} kolonner og ${Yn.requiredRows} rækker. Det nye gitter er ${jn} × ${Yt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Mn(!0)}});return}X(!0),await S(W,G,G&&ue,G&&Ee,jn,Yt),te(jn),Z(Yt),X(!1)}return u.jsx(Tn,{title:"Enhedsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(Gt,{label:"Ejer",value:Rv(a)}),wn?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>qe(!0),children:u.jsx("img",{src:ca(W),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:G?"":"active",onClick:()=>re(!1),children:"Privat"}),u.jsx("button",{type:"button",className:G?"active":"",onClick:()=>re(!0),children:"Offentlig"})]}),G&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>fe(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>fe(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>N(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:la,max:ia,value:Number.isNaN(U)?"":U,onChange:ze=>te(parseInt(ze.target.value,10)),onBlur:()=>te(He(U,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:la,max:ia,value:Number.isNaN(O)?"":O,onChange:ze=>Z(parseInt(ze.target.value,10)),onBlur:()=>Z(He(O,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Mn(),disabled:ne,children:ne?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Gt,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(Gt,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(Gt,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(Gt,{label:"Kontroller",value:String(f.length)}),xe.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),xe.map(ze=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:ze.name}),u.jsxs("span",{children:[ze.sliderMin??0," til ",ze.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",kv(ze.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",p[ze.name]??"Ikke brugt"]})]},ze.name))]}),Ae&&u.jsx(y_,{selected:W,onSelect:Pe,onClose:()=>qe(!1)})]})})}return u.jsx(Tn,{title:"Hjælp til enheden",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>I(!0),children:"Rediger layout"})]})})}function Sv(s,i,c){let a=0,f=0;for(const p of s)aa(p)&&(a=Math.max(a,Math.ceil((p.centerX2+p.spanX)/2)+1),f=Math.max(f,Math.ceil((p.centerY2+p.spanY)/2)+1));return i<a||c<f?{requiredCols:a,requiredRows:f}:null}function kv(s){return s==="bottom"?"bund":s==="middle"?"midte":s==="top"?"top":"ingen"}function Nv({code:s}){const i=z.useMemo(()=>hv(s),[s]),c=i.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,f)=>a.map((p,_)=>p?u.jsx("rect",{x:_+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${_}-${f}`):null))]})}function Rv(s){var i;return s?s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function Gt({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function Tv(){const s=ae(a=>a.confirmDialog),i=ae(a=>a.closeConfirm);if(!s)return null;function c(){s==null||s.onConfirm(),i()}return u.jsx(Tn,{title:s.title,onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:s.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:s.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:s.confirmLabel??"Fortsæt"})]})]})})}function Mv(){const s=ae(a=>a.connectionLost),i=ae(a=>a.reconnectLostDevice),c=ae(a=>a.dismissConnectionLost);return s?u.jsx(Tn,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",s.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function jv(){const s=ae(c=>c.toast),i=ae(c=>c.dismissToast);return s?u.jsx("div",{className:"toast",role:"alert",onClick:i,children:s.message},s.id):null}function Dv(){const s=ae(b=>b.screen),i=ae(b=>b.splashTarget),c=ae(b=>b.init),a=ae(b=>b.sideMenuOpen),f=ae(b=>b.debuggerOpen),[p,_]=z.useState(!1);return z.useEffect(()=>{c()},[c]),z.useEffect(()=>{if(a){_(!0);return}const b=setTimeout(()=>_(!1),140);return()=>clearTimeout(b)},[a]),u.jsxs("div",{className:"app",children:[s==="splash"&&i==="intro"&&u.jsx(Rh,{}),s==="splash"&&i==="dashboard"&&u.jsx(Th,{}),s==="splash"&&u.jsx(t0,{}),s==="intro"&&u.jsx(Rh,{}),s==="dashboard"&&u.jsx(Th,{}),s==="connection"&&u.jsx(s0,{}),s==="create"&&u.jsx(o0,{}),s==="control"&&u.jsx(P0,{}),s==="ide"&&u.jsx(Vy,{}),p&&u.jsx(cv,{open:a}),u.jsx(Ev,{}),u.jsx(Mv,{}),u.jsx(Tv,{}),f&&u.jsx(dv,{}),u.jsx(jv,{})]})}function Av(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const i=new URL("sw.js",window.location.href);navigator.serviceWorker.register(i,{scope:"./"}).catch(c=>{console.warn("Service worker registration failed:",c)})});let s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||window.crossOriginIsolated||(s=!0,window.location.reload())})}Av();mb.createRoot(document.getElementById("root")).render(u.jsx(ms.StrictMode,{children:u.jsx(Dv,{})}));
