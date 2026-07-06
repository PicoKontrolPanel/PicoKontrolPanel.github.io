var nb=Object.defineProperty;var tb=(s,i,c)=>i in s?nb(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c;var me=(s,i,c)=>tb(s,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const _ of p.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function c(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(f){if(f.ep)return;f.ep=!0;const p=c(f);fetch(f.href,p)}})();function f_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wf={exports:{}},as={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function rb(){if(ah)return as;ah=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,f,p){var _=null;if(p!==void 0&&(_=""+p),f.key!==void 0&&(_=""+f.key),"key"in f){p={};for(var b in f)b!=="key"&&(p[b]=f[b])}else p=f;return f=p.ref,{$$typeof:s,type:a,key:_,ref:f!==void 0?f:null,props:p}}return as.Fragment=i,as.jsx=c,as.jsxs=c,as}var sh;function lb(){return sh||(sh=1,wf.exports=rb()),wf.exports}var u=lb(),Ef={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function ib(){if(oh)return Se;oh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),_=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function V(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,D={};function B(N,U,te){this.props=N,this.context=U,this.refs=D,this.updater=te||I}B.prototype.isReactComponent={},B.prototype.setState=function(N,U){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,U,"setState")},B.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function H(){}H.prototype=B.prototype;function ie(N,U,te){this.props=N,this.context=U,this.refs=D,this.updater=te||I}var se=ie.prototype=new H;se.constructor=ie,F(se,B.prototype),se.isPureReactComponent=!0;var oe=Array.isArray;function pe(){}var W={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function Ne(N,U,te){var O=te.ref;return{$$typeof:s,type:N,key:U,ref:O!==void 0?O:null,props:te}}function ye(N,U){return Ne(N.type,U,N.props)}function we(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function Z(N){var U={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(te){return U[te]})}var $e=/\/+/g;function Ae(N,U){return typeof N=="object"&&N!==null&&N.key!=null?Z(""+N.key):U.toString(36)}function Pe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(pe,pe):(N.status="pending",N.then(function(U){N.status==="pending"&&(N.status="fulfilled",N.value=U)},function(U){N.status==="pending"&&(N.status="rejected",N.reason=U)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function G(N,U,te,O,Q){var ne=typeof N;(ne==="undefined"||ne==="boolean")&&(N=null);var X=!1;if(N===null)X=!0;else switch(ne){case"bigint":case"string":case"number":X=!0;break;case"object":switch(N.$$typeof){case s:case i:X=!0;break;case y:return X=N._init,G(X(N._payload),U,te,O,Q)}}if(X)return Q=Q(N),X=O===""?"."+Ae(N,0):O,oe(Q)?(te="",X!=null&&(te=X.replace($e,"$&/")+"/"),G(Q,U,te,"",function(Fn){return Fn})):Q!=null&&(we(Q)&&(Q=ye(Q,te+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace($e,"$&/")+"/")+X)),U.push(Q)),1;X=0;var He=O===""?".":O+":";if(oe(N))for(var Oe=0;Oe<N.length;Oe++)O=N[Oe],ne=He+Ae(O,Oe),X+=G(O,U,te,ne,Q);else if(Oe=V(N),typeof Oe=="function")for(N=Oe.call(N),Oe=0;!(O=N.next()).done;)O=O.value,ne=He+Ae(O,Oe++),X+=G(O,U,te,ne,Q);else if(ne==="object"){if(typeof N.then=="function")return G(Pe(N),U,te,O,Q);throw U=String(N),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return X}function re(N,U,te){if(N==null)return N;var O=[],Q=0;return G(N,O,"","",function(ne){return U.call(te,ne,Q++)}),O}function ue(N){if(N._status===-1){var U=N._result;U=U(),U.then(function(te){(N._status===0||N._status===-1)&&(N._status=1,N._result=te)},function(te){(N._status===0||N._status===-1)&&(N._status=2,N._result=te)}),N._status===-1&&(N._status=0,N._result=U)}if(N._status===1)return N._result.default;throw N._result}var fe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Ee={map:re,forEach:function(N,U,te){re(N,function(){U.apply(this,arguments)},te)},count:function(N){var U=0;return re(N,function(){U++}),U},toArray:function(N){return re(N,function(U){return U})||[]},only:function(N){if(!we(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Se.Activity=v,Se.Children=Ee,Se.Component=B,Se.Fragment=c,Se.Profiler=f,Se.PureComponent=ie,Se.StrictMode=a,Se.Suspense=E,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Se.__COMPILER_RUNTIME={__proto__:null,c:function(N){return W.H.useMemoCache(N)}},Se.cache=function(N){return function(){return N.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(N,U,te){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var O=F({},N.props),Q=N.key;if(U!=null)for(ne in U.key!==void 0&&(Q=""+U.key),U)!J.call(U,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&U.ref===void 0||(O[ne]=U[ne]);var ne=arguments.length-2;if(ne===1)O.children=te;else if(1<ne){for(var X=Array(ne),He=0;He<ne;He++)X[He]=arguments[He+2];O.children=X}return Ne(N.type,Q,O)},Se.createContext=function(N){return N={$$typeof:_,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:p,_context:N},N},Se.createElement=function(N,U,te){var O,Q={},ne=null;if(U!=null)for(O in U.key!==void 0&&(ne=""+U.key),U)J.call(U,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(Q[O]=U[O]);var X=arguments.length-2;if(X===1)Q.children=te;else if(1<X){for(var He=Array(X),Oe=0;Oe<X;Oe++)He[Oe]=arguments[Oe+2];Q.children=He}if(N&&N.defaultProps)for(O in X=N.defaultProps,X)Q[O]===void 0&&(Q[O]=X[O]);return Ne(N,ne,Q)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(N){return{$$typeof:b,render:N}},Se.isValidElement=we,Se.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ue}},Se.memo=function(N,U){return{$$typeof:x,type:N,compare:U===void 0?null:U}},Se.startTransition=function(N){var U=W.T,te={};W.T=te;try{var O=N(),Q=W.S;Q!==null&&Q(te,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(pe,fe)}catch(ne){fe(ne)}finally{U!==null&&te.types!==null&&(U.types=te.types),W.T=U}},Se.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Se.use=function(N){return W.H.use(N)},Se.useActionState=function(N,U,te){return W.H.useActionState(N,U,te)},Se.useCallback=function(N,U){return W.H.useCallback(N,U)},Se.useContext=function(N){return W.H.useContext(N)},Se.useDebugValue=function(){},Se.useDeferredValue=function(N,U){return W.H.useDeferredValue(N,U)},Se.useEffect=function(N,U){return W.H.useEffect(N,U)},Se.useEffectEvent=function(N){return W.H.useEffectEvent(N)},Se.useId=function(){return W.H.useId()},Se.useImperativeHandle=function(N,U,te){return W.H.useImperativeHandle(N,U,te)},Se.useInsertionEffect=function(N,U){return W.H.useInsertionEffect(N,U)},Se.useLayoutEffect=function(N,U){return W.H.useLayoutEffect(N,U)},Se.useMemo=function(N,U){return W.H.useMemo(N,U)},Se.useOptimistic=function(N,U){return W.H.useOptimistic(N,U)},Se.useReducer=function(N,U,te){return W.H.useReducer(N,U,te)},Se.useRef=function(N){return W.H.useRef(N)},Se.useState=function(N){return W.H.useState(N)},Se.useSyncExternalStore=function(N,U,te){return W.H.useSyncExternalStore(N,U,te)},Se.useTransition=function(){return W.H.useTransition()},Se.version="19.2.7",Se}var ch;function Wf(){return ch||(ch=1,Ef.exports=ib()),Ef.exports}var z=Wf();const _s=f_(z);var Sf={exports:{}},ss={},kf={exports:{}},Nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function ab(){return uh||(uh=1,(function(s){function i(G,re){var ue=G.length;G.push(re);e:for(;0<ue;){var fe=ue-1>>>1,Ee=G[fe];if(0<f(Ee,re))G[fe]=re,G[ue]=Ee,ue=fe;else break e}}function c(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var re=G[0],ue=G.pop();if(ue!==re){G[0]=ue;e:for(var fe=0,Ee=G.length,N=Ee>>>1;fe<N;){var U=2*(fe+1)-1,te=G[U],O=U+1,Q=G[O];if(0>f(te,ue))O<Ee&&0>f(Q,te)?(G[fe]=Q,G[O]=ue,fe=O):(G[fe]=te,G[U]=ue,fe=U);else if(O<Ee&&0>f(Q,ue))G[fe]=Q,G[O]=ue,fe=O;else break e}}return re}function f(G,re){var ue=G.sortIndex-re.sortIndex;return ue!==0?ue:G.id-re.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var _=Date,b=_.now();s.unstable_now=function(){return _.now()-b}}var E=[],x=[],y=1,v=null,S=3,V=!1,I=!1,F=!1,D=!1,B=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function se(G){for(var re=c(x);re!==null;){if(re.callback===null)a(x);else if(re.startTime<=G)a(x),re.sortIndex=re.expirationTime,i(E,re);else break;re=c(x)}}function oe(G){if(F=!1,se(G),!I)if(c(E)!==null)I=!0,pe||(pe=!0,Z());else{var re=c(x);re!==null&&Pe(oe,re.startTime-G)}}var pe=!1,W=-1,J=5,Ne=-1;function ye(){return D?!0:!(s.unstable_now()-Ne<J)}function we(){if(D=!1,pe){var G=s.unstable_now();Ne=G;var re=!0;try{e:{I=!1,F&&(F=!1,H(W),W=-1),V=!0;var ue=S;try{n:{for(se(G),v=c(E);v!==null&&!(v.expirationTime>G&&ye());){var fe=v.callback;if(typeof fe=="function"){v.callback=null,S=v.priorityLevel;var Ee=fe(v.expirationTime<=G);if(G=s.unstable_now(),typeof Ee=="function"){v.callback=Ee,se(G),re=!0;break n}v===c(E)&&a(E),se(G)}else a(E);v=c(E)}if(v!==null)re=!0;else{var N=c(x);N!==null&&Pe(oe,N.startTime-G),re=!1}}break e}finally{v=null,S=ue,V=!1}re=void 0}}finally{re?Z():pe=!1}}}var Z;if(typeof ie=="function")Z=function(){ie(we)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ae=$e.port2;$e.port1.onmessage=we,Z=function(){Ae.postMessage(null)}}else Z=function(){B(we,0)};function Pe(G,re){W=B(function(){G(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(G){switch(S){case 1:case 2:case 3:var re=3;break;default:re=S}var ue=S;S=re;try{return G()}finally{S=ue}},s.unstable_requestPaint=function(){D=!0},s.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ue=S;S=G;try{return re()}finally{S=ue}},s.unstable_scheduleCallback=function(G,re,ue){var fe=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?fe+ue:fe):ue=fe,G){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ue+Ee,G={id:y++,callback:re,priorityLevel:G,startTime:ue,expirationTime:Ee,sortIndex:-1},ue>fe?(G.sortIndex=ue,i(x,G),c(E)===null&&G===c(x)&&(F?(H(W),W=-1):F=!0,Pe(oe,ue-fe))):(G.sortIndex=Ee,i(E,G),I||V||(I=!0,pe||(pe=!0,Z()))),G},s.unstable_shouldYield=ye,s.unstable_wrapCallback=function(G){var re=S;return function(){var ue=S;S=re;try{return G.apply(this,arguments)}finally{S=ue}}}})(Nf)),Nf}var fh;function sb(){return fh||(fh=1,kf.exports=ab()),kf.exports}var Rf={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function ob(){if(dh)return $n;dh=1;var s=Wf();function i(E){var x="https://react.dev/errors/"+E;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+E+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(E,x,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:E,containerInfo:x,implementation:y}}var _=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(E,x){if(E==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,$n.createPortal=function(E,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return p(E,x,null,y)},$n.flushSync=function(E){var x=_.T,y=a.p;try{if(_.T=null,a.p=2,E)return E()}finally{_.T=x,a.p=y,a.d.f()}},$n.preconnect=function(E,x){typeof E=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,a.d.C(E,x))},$n.prefetchDNS=function(E){typeof E=="string"&&a.d.D(E)},$n.preinit=function(E,x){if(typeof E=="string"&&x&&typeof x.as=="string"){var y=x.as,v=b(y,x.crossOrigin),S=typeof x.integrity=="string"?x.integrity:void 0,V=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?a.d.S(E,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:V}):y==="script"&&a.d.X(E,{crossOrigin:v,integrity:S,fetchPriority:V,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},$n.preinitModule=function(E,x){if(typeof E=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=b(x.as,x.crossOrigin);a.d.M(E,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&a.d.M(E)},$n.preload=function(E,x){if(typeof E=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,v=b(y,x.crossOrigin);a.d.L(E,y,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},$n.preloadModule=function(E,x){if(typeof E=="string")if(x){var y=b(x.as,x.crossOrigin);a.d.m(E,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else a.d.m(E)},$n.requestFormReset=function(E){a.d.r(E)},$n.unstable_batchedUpdates=function(E,x){return E(x)},$n.useFormState=function(E,x,y){return _.H.useFormState(E,x,y)},$n.useFormStatus=function(){return _.H.useHostTransitionStatus()},$n.version="19.2.7",$n}var mh;function cb(){if(mh)return Rf.exports;mh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Rf.exports=ob(),Rf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function ub(){if(ph)return ss;ph=1;var s=sb(),i=Wf(),c=cb();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(a(188))}function x(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return E(l),e;if(o===r)return E(l),n;o=o.sibling}throw Error(a(188))}if(t.return!==r.return)t=l,r=o;else{for(var m=!1,g=l.child;g;){if(g===t){m=!0,t=l,r=o;break}if(g===r){m=!0,r=l,t=o;break}g=g.sibling}if(!m){for(g=o.child;g;){if(g===t){m=!0,t=o,r=l;break}if(g===r){m=!0,r=o,t=l;break}g=g.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case B:return"Profiler";case D:return"StrictMode";case oe:return"Suspense";case pe:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case ie:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case se:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var Pe=Array.isArray,G=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},fe=[],Ee=-1;function N(e){return{current:e}}function U(e){0>Ee||(e.current=fe[Ee],fe[Ee]=null,Ee--)}function te(e,n){Ee++,fe[Ee]=e.current,e.current=n}var O=N(null),Q=N(null),ne=N(null),X=N(null);function He(e,n){switch(te(ne,n),te(Q,e),te(O,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Mp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Mp(n),e=jp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(O),te(O,e)}function Oe(){U(O),U(Q),U(ne)}function Fn(e){e.memoizedState!==null&&te(X,e);var n=O.current,t=jp(n,e.type);n!==t&&(te(Q,e),te(O,t))}function Wt(e){Q.current===e&&(U(O),U(Q)),X.current===e&&(U(X),ts._currentValue=ue)}var xe,wn;function Tn(e){if(xe===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xe=n&&n[1]||"",wn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xe+e+wn}var ze=!1;function Mn(e,n){if(!e||ze)return"";ze=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(Y){var L=Y}Reflect.construct(e,[],K)}else{try{K.call()}catch(Y){L=Y}e.call(K.prototype)}}else{try{throw Error()}catch(Y){L=Y}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(Y){if(Y&&L&&typeof Y.stack=="string")return[Y.stack,L.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),m=o[0],g=o[1];if(m&&g){var k=m.split(`
`),C=g.split(`
`);for(l=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(r===k.length||l===C.length)for(r=k.length-1,l=C.length-1;1<=r&&0<=l&&k[r]!==C[l];)l--;for(;1<=r&&0<=l;r--,l--)if(k[r]!==C[l]){if(r!==1||l!==1)do if(r--,l--,0>l||k[r]!==C[l]){var P=`
`+k[r].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=r&&0<=l);break}}}finally{ze=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Tn(t):""}function Pt(e,n){switch(e.tag){case 26:case 27:case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return e.child!==n&&n!==null?Tn("Suspense Fallback"):Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 15:return Mn(e.type,!1);case 11:return Mn(e.type.render,!1);case 1:return Mn(e.type,!0);case 31:return Tn("Activity");default:return""}}function Hn(e){try{var n="",t=null;do n+=Pt(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Gr=Object.prototype.hasOwnProperty,Vr=s.unstable_scheduleCallback,Nt=s.unstable_cancelCallback,ci=s.unstable_shouldYield,Ir=s.unstable_requestPaint,En=s.unstable_now,Tl=s.unstable_getCurrentPriorityLevel,Ml=s.unstable_ImmediatePriority,sa=s.unstable_UserBlockingPriority,jl=s.unstable_NormalPriority,Xn=s.unstable_LowPriority,ft=s.unstable_IdlePriority,Jt=s.log,ui=s.unstable_setDisableYieldValue,Dl=null,Sn=null;function dt(e){if(typeof Jt=="function"&&ui(e),Sn&&typeof Sn.setStrictMode=="function")try{Sn.setStrictMode(Dl,e)}catch{}}var Dn=Math.clz32?Math.clz32:dr,Yr=Math.log,fr=Math.LN2;function dr(e){return e>>>=0,e===0?32:31-(Yr(e)/fr|0)|0}var Rt=256,Gn=262144,Ie=4194304;function ln(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function en(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var g=r&134217727;return g!==0?(r=g&~o,r!==0?l=ln(r):(m&=g,m!==0?l=ln(m):t||(t=g&~e,t!==0&&(l=ln(t))))):(g=r&~o,g!==0?l=ln(g):m!==0?l=ln(m):t||(t=r&~e,t!==0&&(l=ln(t)))),l===0?0:n!==0&&n!==l&&(n&o)===0&&(o=l&-l,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:l}function An(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fc(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function er(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ol(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mr(e,n,t,r,l,o){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var g=e.entanglements,k=e.expirationTimes,C=e.hiddenUpdates;for(t=m&~t;0<t;){var P=31-Dn(t),K=1<<P;g[P]=0,k[P]=-1;var L=C[P];if(L!==null)for(C[P]=null,P=0;P<L.length;P++){var Y=L[P];Y!==null&&(Y.lane&=-536870913)}t&=~K}r!==0&&xs(e,r,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~n))}function xs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Dn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function fi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Dn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function ws(e,n){var t=n&-n;return t=(t&42)!==0?1:$r(t),(t&(e.suspendedLanes|n))!==0?0:t}function $r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function on(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Jp(e.type))}function oa(e,n){var t=re.p;try{return re.p=e,n()}finally{re.p=t}}var On=Math.random().toString(36).slice(2),fn="__reactFiber$"+On,kn="__reactProps$"+On,mt="__reactContainer$"+On,Cl="__reactEvents$"+On,Mt="__reactListeners$"+On,pr="__reactHandles$"+On,Pr="__reactResources$"+On,Kn="__reactMarker$"+On;function nr(e){delete e[fn],delete e[kn],delete e[Cl],delete e[Mt],delete e[pr]}function jt(e){var n=e[fn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[mt]||t[fn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=zp(e);e!==null;){if(t=e[fn])return t;e=zp(e)}return n}e=t,t=e.parentNode}return null}function nt(e){if(e=e[fn]||e[mt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Qn(e){var n=e[Pr];return n||(n=e[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[Kn]=!0}var tr=new Set,_r={};function tt(e,n){gr(e,n),gr(e+"Capture",n)}function gr(e,n){for(_r[e]=n,e=0;e<n.length;e++)tr.add(n[e])}var Bl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ll={},zl={};function qr(e){return Gr.call(zl,e)?!0:Gr.call(Ll,e)?!1:Bl.test(e)?zl[e]=!0:(Ll[e]=!0,!1)}function qt(e,n,t){if(qr(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function _e(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function pt(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Es(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dc(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){t=""+m,o.call(this,m)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ca(e){if(!e._valueTracker){var n=Es(e)?"checked":"value";e._valueTracker=dc(e,n,""+e[n])}}function Fr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Es(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ft(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dt=/[\n"\\]/g;function Vn(e){return e.replace(Dt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function In(e,n,t,r,l,o,m,g){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+rt(n)):e.value!==""+rt(n)&&(e.value=""+rt(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?ua(e,m,rt(n)):t!=null?ua(e,m,rt(t)):r!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+rt(g):e.removeAttribute("name")}function Ss(e,n,t,r,l,o,m,g){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){ca(e);return}t=t!=null?""+rt(t):"",n=n!=null?""+rt(n):t,g||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=g?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),ca(e)}function ua(e,n,t){n==="number"&&Ft(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function br(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+rt(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function di(e,n,t){if(n!=null&&(n=""+rt(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+rt(t):""}function $(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(a(92));if(Pe(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=rt(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),ca(e)}function Xr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var mc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ks(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||mc.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Kr(e,n,t){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&t[l]!==r&&ks(e,l,r)}else for(var o in n)n.hasOwnProperty(o)&&ks(e,o,n[o])}function mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return an.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function lt(){}var yr=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qr=null,Zr=null;function da(e){var n=nt(e);if(n&&(e=n.stateNode)){var t=e[kn]||null;e:switch(e=n.stateNode,n.type){case"input":if(In(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Vn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=r[kn]||null;if(!l)throw Error(a(90));In(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&Fr(r)}break e;case"textarea":di(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&br(e,!!t.multiple,n,!1)}}}var ma=!1;function pa(e,n,t){if(ma)return e(n,t);ma=!0;try{var r=e(n);return r}finally{if(ma=!1,(Qr!==null||Zr!==null)&&(So(),Qr&&(n=Qr,e=Zr,Zr=Qr=null,da(n),e)))for(n=0;n<e.length;n++)da(e[n])}}function it(e,n){var t=e.stateNode;if(t===null)return null;var r=t[kn]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ha=!1;if(Zn)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){ha=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{ha=!1}var Xt=null,Hl=null,dn=null;function Wr(){if(dn)return dn;var e,n=Hl,t=n.length,r,l="value"in Xt?Xt.value:Xt.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var m=t-e;for(r=1;r<=m&&n[t-r]===l[o-r];r++);return dn=l.slice(e,1<r?1-r:void 0)}function hi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Jr(){return!1}function Yn(e){function n(t,r,l,o,m){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(t=e[g],this[g]=t?t(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_i:Jr,this.isPropagationStopped=Jr,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vr=Yn(rr),lr=v({},rr,{view:0,detail:0}),Ns=Yn(lr),gi,_a,Gl,bi=v({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gl&&(Gl&&e.type==="mousemove"?(gi=e.screenX-Gl.screenX,_a=e.screenY-Gl.screenY):_a=gi=0,Gl=e),gi)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),ht=Yn(bi),sn=v({},bi,{dataTransfer:0}),Rs=Yn(sn),Vl=v({},lr,{relatedTarget:0}),yi=Yn(Vl),Ts=v({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ms=Yn(Ts),pc=v({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hc=Yn(pc),_c=v({},rr,{data:0}),ga=Yn(_c),js={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ba={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ds(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gc[e])?!!n[e]:!1}function vi(){return Ds}var As=v({},lr,{key:function(e){if(e.key){var n=js[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ba[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vi,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bc=Yn(As),yc=v({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Os=Yn(yc),vc=v({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vi}),xc=Yn(vc),wc=v({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=Yn(wc),Sc=v({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kc=Yn(Sc),Nc=v({},rr,{newState:0,oldState:0}),Rc=Yn(Nc),Tc=[9,13,27,32],ya=Zn&&"CompositionEvent"in window,At=null;Zn&&"documentMode"in document&&(At=document.documentMode);var Mc=Zn&&"TextEvent"in window&&!At,Cs=Zn&&(!ya||At&&8<At&&11>=At),va=" ",Bs=!1;function xa(e,n){switch(e){case"keyup":return Tc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ls(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var el=!1;function zs(e,n){switch(e){case"compositionend":return Ls(n);case"keypress":return n.which!==32?null:(Bs=!0,va);case"textInput":return e=n.data,e===va&&Bs?null:e;default:return null}}function jc(e,n){if(el)return e==="compositionend"||!ya&&xa(e,n)?(e=Wr(),dn=Hl=Xt=null,el=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cs&&n.locale!=="ko"?null:n.data;default:return null}}var Dc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Us(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Dc[e.type]:n==="textarea"}function Hs(e,n,t,r){Qr?Zr?Zr.push(r):Zr=[r]:Qr=r,n=Do(n,"onChange"),0<n.length&&(t=new vr("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Il=null,Yl=null;function Ac(e){Ep(e,0)}function nl(e){var n=hr(e);if(Fr(n))return e}function _t(e,n){if(e==="change")return n}var wa=!1;if(Zn){var Ea;if(Zn){var Sa="oninput"in document;if(!Sa){var xi=document.createElement("div");xi.setAttribute("oninput","return;"),Sa=typeof xi.oninput=="function"}Ea=Sa}else Ea=!1;wa=Ea&&(!document.documentMode||9<document.documentMode)}function $l(){Il&&(Il.detachEvent("onpropertychange",wi),Yl=Il=null)}function wi(e){if(e.propertyName==="value"&&nl(Yl)){var n=[];Hs(n,Yl,e,fa(e)),pa(Ac,n)}}function Gs(e,n,t){e==="focusin"?($l(),Il=n,Yl=t,Il.attachEvent("onpropertychange",wi)):e==="focusout"&&$l()}function Ei(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Yl)}function ka(e,n){if(e==="click")return nl(n)}function Vs(e,n){if(e==="input"||e==="change")return nl(n)}function Oc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Oc;function Pl(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Gr.call(n,l)||!Wn(e[l],n[l]))return!1}return!0}function d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function h(e,n){var t=d(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=d(t)}}function w(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?w(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function M(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ft(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ft(e.document)}return n}function T(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ee=Zn&&"documentMode"in document&&11>=document.documentMode,ce=null,Ce=null,ve=null,tn=!1;function _n(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;tn||ce==null||ce!==Ft(r)||(r=ce,"selectionStart"in r&&T(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ve&&Pl(ve,r)||(ve=r,r=Do(Ce,"onSelect"),0<r.length&&(n=new vr("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ce)))}function gt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Me={animationend:gt("Animation","AnimationEnd"),animationiteration:gt("Animation","AnimationIteration"),animationstart:gt("Animation","AnimationStart"),transitionrun:gt("Transition","TransitionRun"),transitionstart:gt("Transition","TransitionStart"),transitioncancel:gt("Transition","TransitionCancel"),transitionend:gt("Transition","TransitionEnd")},gn={},ir={};Zn&&(ir=document.createElement("div").style,"AnimationEvent"in window||(delete Me.animationend.animation,delete Me.animationiteration.animation,delete Me.animationstart.animation),"TransitionEvent"in window||delete Me.transitionend.transition);function Cn(e){if(gn[e])return gn[e];if(!Me[e])return e;var n=Me[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ir)return gn[e]=n[t];return e}var Ot=Cn("animationend"),xr=Cn("animationiteration"),wr=Cn("animationstart"),Is=Cn("transitionrun"),Si=Cn("transitionstart"),Na=Cn("transitioncancel"),tl=Cn("transitionend"),Ra=new Map,Cc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cc.push("scrollEnd");function Kt(e,n){Ra.set(e,n),tt(n,[e])}var Ys=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],ki=0,Bc=0;function $s(){for(var e=ki,n=Bc=ki=0;n<e;){var t=Ct[n];Ct[n++]=null;var r=Ct[n];Ct[n++]=null;var l=Ct[n];Ct[n++]=null;var o=Ct[n];if(Ct[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}o!==0&&ld(t,l,o)}}function Ps(e,n,t,r){Ct[ki++]=e,Ct[ki++]=n,Ct[ki++]=t,Ct[ki++]=r,Bc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Lc(e,n,t,r){return Ps(e,n,t,r),qs(e)}function ql(e,n){return Ps(e,null,null,n),qs(e)}function ld(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,r=o.alternate,r!==null&&(r.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&n!==null&&(l=31-Dn(t),e=o.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=t|536870912),o):null}function qs(e){if(50<Ka)throw Ka=0,Pu=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ni={};function U_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,n,t,r){return new U_(e,n,t,r)}function zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Er(e,n){var t=e.alternate;return t===null?(t=bt(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function id(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Fs(e,n,t,r,l,o){var m=0;if(r=e,typeof e=="function")zc(e)&&(m=1);else if(typeof e=="string")m=Yg(e,t,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=bt(31,t,n,l),e.elementType=Ne,e.lanes=o,e;case F:return Fl(t.children,l,o,n);case D:m=8,l|=24;break;case B:return e=bt(12,t,n,l|2),e.elementType=B,e.lanes=o,e;case oe:return e=bt(13,t,n,l),e.elementType=oe,e.lanes=o,e;case pe:return e=bt(19,t,n,l),e.elementType=pe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ie:m=10;break e;case H:m=9;break e;case se:m=11;break e;case W:m=14;break e;case J:m=16,r=null;break e}m=29,t=Error(a(130,e===null?"null":typeof e,"")),r=null}return n=bt(m,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Fl(e,n,t,r){return e=bt(7,e,r,n),e.lanes=t,e}function Uc(e,n,t){return e=bt(6,e,null,n),e.lanes=t,e}function ad(e){var n=bt(18,null,null,0);return n.stateNode=e,n}function Hc(e,n,t){return n=bt(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var sd=new WeakMap;function Bt(e,n){if(typeof e=="object"&&e!==null){var t=sd.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Hn(n)},sd.set(e,n),n)}return{value:e,source:n,stack:Hn(n)}}var Ri=[],Ti=0,Xs=null,Ta=0,Lt=[],zt=0,rl=null,ar=1,sr="";function Sr(e,n){Ri[Ti++]=Ta,Ri[Ti++]=Xs,Xs=e,Ta=n}function od(e,n,t){Lt[zt++]=ar,Lt[zt++]=sr,Lt[zt++]=rl,rl=e;var r=ar;e=sr;var l=32-Dn(r)-1;r&=~(1<<l),t+=1;var o=32-Dn(n)+l;if(30<o){var m=l-l%5;o=(r&(1<<m)-1).toString(32),r>>=m,l-=m,ar=1<<32-Dn(n)+l|t<<l|r,sr=o+e}else ar=1<<o|t<<l|r,sr=e}function Gc(e){e.return!==null&&(Sr(e,1),od(e,1,0))}function Vc(e){for(;e===Xs;)Xs=Ri[--Ti],Ri[Ti]=null,Ta=Ri[--Ti],Ri[Ti]=null;for(;e===rl;)rl=Lt[--zt],Lt[zt]=null,sr=Lt[--zt],Lt[zt]=null,ar=Lt[--zt],Lt[zt]=null}function cd(e,n){Lt[zt++]=ar,Lt[zt++]=sr,Lt[zt++]=rl,ar=n.id,sr=n.overflow,rl=e}var Bn=null,We=null,Ue=!1,ll=null,Ut=!1,Ic=Error(a(519));function il(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ma(Bt(n,e)),Ic}function ud(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[fn]=e,n[kn]=r,t){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(t=0;t<Za.length;t++)De(Za[t],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),Ss(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),$(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||Rp(n.textContent,t)?(r.popover!=null&&(De("beforetoggle",n),De("toggle",n)),r.onScroll!=null&&De("scroll",n),r.onScrollEnd!=null&&De("scrollend",n),r.onClick!=null&&(n.onclick=lt),n=!0):n=!1,n||il(e,!0)}function fd(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:Bn=Bn.return}}function Mi(e){if(e!==Bn)return!1;if(!Ue)return fd(e),Ue=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||sf(e.type,e.memoizedProps)),t=!t),t&&We&&il(e),fd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=Lp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=Lp(e)}else n===27?(n=We,yl(e.type)?(e=df,df=null,We=e):We=n):We=Bn?Gt(e.stateNode.nextSibling):null;return!0}function Xl(){We=Bn=null,Ue=!1}function Yc(){var e=ll;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ll=null),e}function Ma(e){ll===null?ll=[e]:ll.push(e)}var $c=N(null),Kl=null,kr=null;function al(e,n,t){te($c,n._currentValue),n._currentValue=t}function Nr(e){e._currentValue=$c.current,U($c)}function Pc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function qc(e,n,t,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var m=l.child;o=o.firstContext;e:for(;o!==null;){var g=o;o=l;for(var k=0;k<n.length;k++)if(g.context===n[k]){o.lanes|=t,g=o.alternate,g!==null&&(g.lanes|=t),Pc(o.return,t,e),r||(m=null);break e}o=g.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(a(341));m.lanes|=t,o=m.alternate,o!==null&&(o.lanes|=t),Pc(m,t,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function ji(e,n,t,r){e=null;for(var l=n,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var g=l.type;Wn(l.pendingProps.value,m.value)||(e!==null?e.push(g):e=[g])}}else if(l===X.current){if(m=l.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ts):e=[ts])}l=l.return}e!==null&&qc(n,e,t,r),n.flags|=262144}function Ks(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ql(e){Kl=e,kr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return dd(Kl,e)}function Qs(e,n){return Kl===null&&Ql(e),dd(e,n)}function dd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},kr===null){if(e===null)throw Error(a(308));kr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else kr=kr.next=n;return t}var H_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},G_=s.unstable_scheduleCallback,V_=s.unstable_NormalPriority,bn={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fc(){return{controller:new H_,data:new Map,refCount:0}}function ja(e){e.refCount--,e.refCount===0&&G_(V_,function(){e.controller.abort()})}var Da=null,Xc=0,Di=0,Ai=null;function I_(e,n){if(Da===null){var t=Da=[];Xc=0,Di=Zu(),Ai={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Xc++,n.then(md,md),n}function md(){if(--Xc===0&&Da!==null){Ai!==null&&(Ai.status="fulfilled");var e=Da;Da=null,Di=0,Ai=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Y_(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var pd=G.S;G.S=function(e,n){Zm=En(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&I_(e,n),pd!==null&&pd(e,n)};var Zl=N(null);function Kc(){var e=Zl.current;return e!==null?e:Ze.pooledCache}function Zs(e,n){n===null?te(Zl,Zl.current):te(Zl,n.pool)}function hd(){var e=Kc();return e===null?null:{parent:bn._currentValue,pool:e}}var Oi=Error(a(460)),Qc=Error(a(474)),Ws=Error(a(542)),Js={then:function(){}};function _d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(lt,lt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yd(e),e;default:if(typeof n.status=="string")n.then(lt,lt);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yd(e),e}throw Jl=n,Oi}}function Wl(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Jl=t,Oi):t}}var Jl=null;function bd(){if(Jl===null)throw Error(a(459));var e=Jl;return Jl=null,e}function yd(e){if(e===Oi||e===Ws)throw Error(a(483))}var Ci=null,Aa=0;function eo(e){var n=Aa;return Aa+=1,Ci===null&&(Ci=[]),gd(Ci,e,n)}function Oa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function no(e,n){throw n.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vd(e){function n(j,R){if(e){var A=j.deletions;A===null?(j.deletions=[R],j.flags|=16):A.push(R)}}function t(j,R){if(!e)return null;for(;R!==null;)n(j,R),R=R.sibling;return null}function r(j){for(var R=new Map;j!==null;)j.key!==null?R.set(j.key,j):R.set(j.index,j),j=j.sibling;return R}function l(j,R){return j=Er(j,R),j.index=0,j.sibling=null,j}function o(j,R,A){return j.index=A,e?(A=j.alternate,A!==null?(A=A.index,A<R?(j.flags|=67108866,R):A):(j.flags|=67108866,R)):(j.flags|=1048576,R)}function m(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function g(j,R,A,q){return R===null||R.tag!==6?(R=Uc(A,j.mode,q),R.return=j,R):(R=l(R,A),R.return=j,R)}function k(j,R,A,q){var ge=A.type;return ge===F?P(j,R,A.props.children,q,A.key):R!==null&&(R.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===J&&Wl(ge)===R.type)?(R=l(R,A.props),Oa(R,A),R.return=j,R):(R=Fs(A.type,A.key,A.props,null,j.mode,q),Oa(R,A),R.return=j,R)}function C(j,R,A,q){return R===null||R.tag!==4||R.stateNode.containerInfo!==A.containerInfo||R.stateNode.implementation!==A.implementation?(R=Hc(A,j.mode,q),R.return=j,R):(R=l(R,A.children||[]),R.return=j,R)}function P(j,R,A,q,ge){return R===null||R.tag!==7?(R=Fl(A,j.mode,q,ge),R.return=j,R):(R=l(R,A),R.return=j,R)}function K(j,R,A){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Uc(""+R,j.mode,A),R.return=j,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case V:return A=Fs(R.type,R.key,R.props,null,j.mode,A),Oa(A,R),A.return=j,A;case I:return R=Hc(R,j.mode,A),R.return=j,R;case J:return R=Wl(R),K(j,R,A)}if(Pe(R)||Z(R))return R=Fl(R,j.mode,A,null),R.return=j,R;if(typeof R.then=="function")return K(j,eo(R),A);if(R.$$typeof===ie)return K(j,Qs(j,R),A);no(j,R)}return null}function L(j,R,A,q){var ge=R!==null?R.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ge!==null?null:g(j,R,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case V:return A.key===ge?k(j,R,A,q):null;case I:return A.key===ge?C(j,R,A,q):null;case J:return A=Wl(A),L(j,R,A,q)}if(Pe(A)||Z(A))return ge!==null?null:P(j,R,A,q,null);if(typeof A.then=="function")return L(j,R,eo(A),q);if(A.$$typeof===ie)return L(j,R,Qs(j,A),q);no(j,A)}return null}function Y(j,R,A,q,ge){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return j=j.get(A)||null,g(R,j,""+q,ge);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return j=j.get(q.key===null?A:q.key)||null,k(R,j,q,ge);case I:return j=j.get(q.key===null?A:q.key)||null,C(R,j,q,ge);case J:return q=Wl(q),Y(j,R,A,q,ge)}if(Pe(q)||Z(q))return j=j.get(A)||null,P(R,j,q,ge,null);if(typeof q.then=="function")return Y(j,R,A,eo(q),ge);if(q.$$typeof===ie)return Y(j,R,A,Qs(R,q),ge);no(R,q)}return null}function de(j,R,A,q){for(var ge=null,Ge=null,he=R,Te=R=0,Le=null;he!==null&&Te<A.length;Te++){he.index>Te?(Le=he,he=null):Le=he.sibling;var Ve=L(j,he,A[Te],q);if(Ve===null){he===null&&(he=Le);break}e&&he&&Ve.alternate===null&&n(j,he),R=o(Ve,R,Te),Ge===null?ge=Ve:Ge.sibling=Ve,Ge=Ve,he=Le}if(Te===A.length)return t(j,he),Ue&&Sr(j,Te),ge;if(he===null){for(;Te<A.length;Te++)he=K(j,A[Te],q),he!==null&&(R=o(he,R,Te),Ge===null?ge=he:Ge.sibling=he,Ge=he);return Ue&&Sr(j,Te),ge}for(he=r(he);Te<A.length;Te++)Le=Y(he,j,Te,A[Te],q),Le!==null&&(e&&Le.alternate!==null&&he.delete(Le.key===null?Te:Le.key),R=o(Le,R,Te),Ge===null?ge=Le:Ge.sibling=Le,Ge=Le);return e&&he.forEach(function(Sl){return n(j,Sl)}),Ue&&Sr(j,Te),ge}function be(j,R,A,q){if(A==null)throw Error(a(151));for(var ge=null,Ge=null,he=R,Te=R=0,Le=null,Ve=A.next();he!==null&&!Ve.done;Te++,Ve=A.next()){he.index>Te?(Le=he,he=null):Le=he.sibling;var Sl=L(j,he,Ve.value,q);if(Sl===null){he===null&&(he=Le);break}e&&he&&Sl.alternate===null&&n(j,he),R=o(Sl,R,Te),Ge===null?ge=Sl:Ge.sibling=Sl,Ge=Sl,he=Le}if(Ve.done)return t(j,he),Ue&&Sr(j,Te),ge;if(he===null){for(;!Ve.done;Te++,Ve=A.next())Ve=K(j,Ve.value,q),Ve!==null&&(R=o(Ve,R,Te),Ge===null?ge=Ve:Ge.sibling=Ve,Ge=Ve);return Ue&&Sr(j,Te),ge}for(he=r(he);!Ve.done;Te++,Ve=A.next())Ve=Y(he,j,Te,Ve.value,q),Ve!==null&&(e&&Ve.alternate!==null&&he.delete(Ve.key===null?Te:Ve.key),R=o(Ve,R,Te),Ge===null?ge=Ve:Ge.sibling=Ve,Ge=Ve);return e&&he.forEach(function(eb){return n(j,eb)}),Ue&&Sr(j,Te),ge}function Qe(j,R,A,q){if(typeof A=="object"&&A!==null&&A.type===F&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case V:e:{for(var ge=A.key;R!==null;){if(R.key===ge){if(ge=A.type,ge===F){if(R.tag===7){t(j,R.sibling),q=l(R,A.props.children),q.return=j,j=q;break e}}else if(R.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===J&&Wl(ge)===R.type){t(j,R.sibling),q=l(R,A.props),Oa(q,A),q.return=j,j=q;break e}t(j,R);break}else n(j,R);R=R.sibling}A.type===F?(q=Fl(A.props.children,j.mode,q,A.key),q.return=j,j=q):(q=Fs(A.type,A.key,A.props,null,j.mode,q),Oa(q,A),q.return=j,j=q)}return m(j);case I:e:{for(ge=A.key;R!==null;){if(R.key===ge)if(R.tag===4&&R.stateNode.containerInfo===A.containerInfo&&R.stateNode.implementation===A.implementation){t(j,R.sibling),q=l(R,A.children||[]),q.return=j,j=q;break e}else{t(j,R);break}else n(j,R);R=R.sibling}q=Hc(A,j.mode,q),q.return=j,j=q}return m(j);case J:return A=Wl(A),Qe(j,R,A,q)}if(Pe(A))return de(j,R,A,q);if(Z(A)){if(ge=Z(A),typeof ge!="function")throw Error(a(150));return A=ge.call(A),be(j,R,A,q)}if(typeof A.then=="function")return Qe(j,R,eo(A),q);if(A.$$typeof===ie)return Qe(j,R,Qs(j,A),q);no(j,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,R!==null&&R.tag===6?(t(j,R.sibling),q=l(R,A),q.return=j,j=q):(t(j,R),q=Uc(A,j.mode,q),q.return=j,j=q),m(j)):t(j,R)}return function(j,R,A,q){try{Aa=0;var ge=Qe(j,R,A,q);return Ci=null,ge}catch(he){if(he===Oi||he===Ws)throw he;var Ge=bt(29,he,null,j.mode);return Ge.lanes=q,Ge.return=j,Ge}finally{}}}var ei=vd(!0),xd=vd(!1),sl=!1;function Zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ol(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ye&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=qs(e),ld(e,null,t),n}return Ps(e,r,n,t),qs(e)}function Ca(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,fi(e,t)}}function Jc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=m:o=o.next=m,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var eu=!1;function Ba(){if(eu){var e=Ai;if(e!==null)throw e}}function La(e,n,t,r){eu=!1;var l=e.updateQueue;sl=!1;var o=l.firstBaseUpdate,m=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var k=g,C=k.next;k.next=null,m===null?o=C:m.next=C,m=k;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==m&&(g===null?P.firstBaseUpdate=C:g.next=C,P.lastBaseUpdate=k))}if(o!==null){var K=l.baseState;m=0,P=C=k=null,g=o;do{var L=g.lane&-536870913,Y=L!==g.lane;if(Y?(Be&L)===L:(r&L)===L){L!==0&&L===Di&&(eu=!0),P!==null&&(P=P.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var de=e,be=g;L=n;var Qe=t;switch(be.tag){case 1:if(de=be.payload,typeof de=="function"){K=de.call(Qe,K,L);break e}K=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=be.payload,L=typeof de=="function"?de.call(Qe,K,L):de,L==null)break e;K=v({},K,L);break e;case 2:sl=!0}}L=g.callback,L!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[L]:Y.push(L))}else Y={lane:L,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(C=P=Y,k=K):P=P.next=Y,m|=L;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;Y=g,g=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);P===null&&(k=K),l.baseState=k,l.firstBaseUpdate=C,l.lastBaseUpdate=P,o===null&&(l.shared.lanes=0),pl|=m,e.lanes=m,e.memoizedState=K}}function wd(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Ed(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)wd(t[e],n)}var Bi=N(null),to=N(0);function Sd(e,n){e=Br,te(to,e),te(Bi,n),Br=e|n.baseLanes}function nu(){te(to,Br),te(Bi,Bi.current)}function tu(){Br=to.current,U(Bi),U(to)}var yt=N(null),Ht=null;function ul(e){var n=e.alternate;te(mn,mn.current&1),te(yt,e),Ht===null&&(n===null||Bi.current!==null||n.memoizedState!==null)&&(Ht=e)}function ru(e){te(mn,mn.current),te(yt,e),Ht===null&&(Ht=e)}function kd(e){e.tag===22?(te(mn,mn.current),te(yt,e),Ht===null&&(Ht=e)):fl()}function fl(){te(mn,mn.current),te(yt,yt.current)}function vt(e){U(yt),Ht===e&&(Ht=null),U(mn)}var mn=N(0);function ro(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||uf(t)||ff(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rr=0,Re=null,Xe=null,yn=null,lo=!1,Li=!1,ni=!1,io=0,za=0,zi=null,$_=0;function cn(){throw Error(a(321))}function lu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Wn(e[t],n[t]))return!1;return!0}function iu(e,n,t,r,l,o){return Rr=o,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?om:vu,ni=!1,o=t(r,l),ni=!1,Li&&(o=Rd(n,t,r,l)),Nd(e),o}function Nd(e){G.H=Ga;var n=Xe!==null&&Xe.next!==null;if(Rr=0,yn=Xe=Re=null,lo=!1,za=0,zi=null,n)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&Ks(e)&&(vn=!0))}function Rd(e,n,t,r){Re=e;var l=0;do{if(Li&&(zi=null),za=0,Li=!1,25<=l)throw Error(a(301));if(l+=1,yn=Xe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}G.H=cm,o=n(t,r)}while(Li);return o}function P_(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?Ua(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(Re.flags|=1024),n}function au(){var e=io!==0;return io=0,e}function su(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function ou(e){if(lo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}lo=!1}Rr=0,yn=Xe=Re=null,Li=!1,za=io=0,zi=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Re.memoizedState=yn=e:yn=yn.next=e,yn}function pn(){if(Xe===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=yn===null?Re.memoizedState:yn.next;if(n!==null)yn=n,Xe=e;else{if(e===null)throw Re.alternate===null?Error(a(467)):Error(a(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},yn===null?Re.memoizedState=yn=e:yn=yn.next=e}return yn}function ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ua(e){var n=za;return za+=1,zi===null&&(zi=[]),e=gd(zi,e,n),n=Re,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?om:vu),e}function so(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ua(e);if(e.$$typeof===ie)return Ln(e)}throw Error(a(438,String(e)))}function cu(e){var n=null,t=Re.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=Re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=ao(),Re.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=ye;return n.index++,t}function Tr(e,n){return typeof n=="function"?n(e):n}function oo(e){var n=pn();return uu(n,Xe,e)}function uu(e,n,t){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=e.baseQueue,o=r.pending;if(o!==null){if(l!==null){var m=l.next;l.next=o.next,o.next=m}n.baseQueue=l=o,r.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{n=l.next;var g=m=null,k=null,C=n,P=!1;do{var K=C.lane&-536870913;if(K!==C.lane?(Be&K)===K:(Rr&K)===K){var L=C.revertLane;if(L===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),K===Di&&(P=!0);else if((Rr&L)===L){C=C.next,L===Di&&(P=!0);continue}else K={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},k===null?(g=k=K,m=o):k=k.next=K,Re.lanes|=L,pl|=L;K=C.action,ni&&t(o,K),o=C.hasEagerState?C.eagerState:t(o,K)}else L={lane:K,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},k===null?(g=k=L,m=o):k=k.next=L,Re.lanes|=K,pl|=K;C=C.next}while(C!==null&&C!==n);if(k===null?m=o:k.next=g,!Wn(o,e.memoizedState)&&(vn=!0,P&&(t=Ai,t!==null)))throw t;e.memoizedState=o,e.baseState=m,e.baseQueue=k,r.lastRenderedState=o}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function fu(e){var n=pn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var m=l=l.next;do o=e(o,m.action),m=m.next;while(m!==l);Wn(o,n.memoizedState)||(vn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Td(e,n,t){var r=Re,l=pn(),o=Ue;if(o){if(t===void 0)throw Error(a(407));t=t()}else t=n();var m=!Wn((Xe||l).memoizedState,t);if(m&&(l.memoizedState=t,vn=!0),l=l.queue,pu(Dd.bind(null,r,l,e),[e]),l.getSnapshot!==n||m||yn!==null&&yn.memoizedState.tag&1){if(r.flags|=2048,Ui(9,{destroy:void 0},jd.bind(null,r,l,t,n),null),Ze===null)throw Error(a(349));o||(Rr&127)!==0||Md(r,n,t)}return t}function Md(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Re.updateQueue,n===null?(n=ao(),Re.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function jd(e,n,t,r){n.value=t,n.getSnapshot=r,Ad(n)&&Od(e)}function Dd(e,n,t){return t(function(){Ad(n)&&Od(e)})}function Ad(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Wn(e,t)}catch{return!0}}function Od(e){var n=ql(e,2);n!==null&&ut(n,e,2)}function du(e){var n=Jn();if(typeof e=="function"){var t=e;if(e=t(),ni){dt(!0);try{t()}finally{dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},n}function Cd(e,n,t,r){return e.baseState=t,uu(e,Xe,typeof r=="function"?r:Tr)}function q_(e,n,t,r,l){if(fo(e))throw Error(a(485));if(e=n.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};G.T!==null?t(!0):o.isTransition=!1,r(o),t=n.pending,t===null?(o.next=n.pending=o,Bd(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Bd(e,n){var t=n.action,r=n.payload,l=e.state;if(n.isTransition){var o=G.T,m={};G.T=m;try{var g=t(l,r),k=G.S;k!==null&&k(m,g),Ld(e,n,g)}catch(C){mu(e,n,C)}finally{o!==null&&m.types!==null&&(o.types=m.types),G.T=o}}else try{o=t(l,r),Ld(e,n,o)}catch(C){mu(e,n,C)}}function Ld(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){zd(e,n,r)},function(r){return mu(e,n,r)}):zd(e,n,t)}function zd(e,n,t){n.status="fulfilled",n.value=t,Ud(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Bd(e,t)))}function mu(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,Ud(n),n=n.next;while(n!==r)}e.action=null}function Ud(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hd(e,n){return n}function Gd(e,n){if(Ue){var t=Ze.formState;if(t!==null){e:{var r=Re;if(Ue){if(We){n:{for(var l=We,o=Ut;l.nodeType!==8;){if(!o){l=null;break n}if(l=Gt(l.nextSibling),l===null){l=null;break n}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){We=Gt(l.nextSibling),r=l.data==="F!";break e}}il(r)}r=!1}r&&(n=t[0])}}return t=Jn(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:n},t.queue=r,t=im.bind(null,Re,r),r.dispatch=t,r=du(!1),o=yu.bind(null,Re,!1,r.queue),r=Jn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,t=q_.bind(null,Re,l,o,t),l.dispatch=t,r.memoizedState=e,[n,t,!1]}function Vd(e){var n=pn();return Id(n,Xe,e)}function Id(e,n,t){if(n=uu(e,n,Hd)[0],e=oo(Tr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ua(n)}catch(m){throw m===Oi?Ws:m}else r=n;n=pn();var l=n.queue,o=l.dispatch;return t!==n.memoizedState&&(Re.flags|=2048,Ui(9,{destroy:void 0},F_.bind(null,l,t),null)),[r,o,e]}function F_(e,n){e.action=n}function Yd(e){var n=pn(),t=Xe;if(t!==null)return Id(n,t,e);pn(),n=n.memoizedState,t=pn();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function Ui(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=Re.updateQueue,n===null&&(n=ao(),Re.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function $d(){return pn().memoizedState}function co(e,n,t,r){var l=Jn();Re.flags|=e,l.memoizedState=Ui(1|n,{destroy:void 0},t,r===void 0?null:r)}function uo(e,n,t,r){var l=pn();r=r===void 0?null:r;var o=l.memoizedState.inst;Xe!==null&&r!==null&&lu(r,Xe.memoizedState.deps)?l.memoizedState=Ui(n,o,t,r):(Re.flags|=e,l.memoizedState=Ui(1|n,o,t,r))}function Pd(e,n){co(8390656,8,e,n)}function pu(e,n){uo(2048,8,e,n)}function X_(e){Re.flags|=4;var n=Re.updateQueue;if(n===null)n=ao(),Re.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function qd(e){var n=pn().memoizedState;return X_({ref:n,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Fd(e,n){return uo(4,2,e,n)}function Xd(e,n){return uo(4,4,e,n)}function Kd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qd(e,n,t){t=t!=null?t.concat([e]):null,uo(4,4,Kd.bind(null,n,e),t)}function hu(){}function Zd(e,n){var t=pn();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&lu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Wd(e,n){var t=pn();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&lu(n,r[1]))return r[0];if(r=e(),ni){dt(!0);try{e()}finally{dt(!1)}}return t.memoizedState=[r,n],r}function _u(e,n,t){return t===void 0||(Rr&1073741824)!==0&&(Be&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Jm(),Re.lanes|=e,pl|=e,t)}function Jd(e,n,t,r){return Wn(t,n)?t:Bi.current!==null?(e=_u(e,t,r),Wn(e,n)||(vn=!0),e):(Rr&42)===0||(Rr&1073741824)!==0&&(Be&261930)===0?(vn=!0,e.memoizedState=t):(e=Jm(),Re.lanes|=e,pl|=e,n)}function em(e,n,t,r,l){var o=re.p;re.p=o!==0&&8>o?o:8;var m=G.T,g={};G.T=g,yu(e,!1,n,t);try{var k=l(),C=G.S;if(C!==null&&C(g,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var P=Y_(k,r);Ha(e,n,P,Et(e))}else Ha(e,n,r,Et(e))}catch(K){Ha(e,n,{then:function(){},status:"rejected",reason:K},Et())}finally{re.p=o,m!==null&&g.types!==null&&(m.types=g.types),G.T=m}}function K_(){}function gu(e,n,t,r){if(e.tag!==5)throw Error(a(476));var l=nm(e).queue;em(e,l,n,ue,t===null?K_:function(){return tm(e),t(r)})}function nm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:ue},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function tm(e){var n=nm(e);n.next===null&&(n=e.alternate.memoizedState),Ha(e,n.next.queue,{},Et())}function bu(){return Ln(ts)}function rm(){return pn().memoizedState}function lm(){return pn().memoizedState}function Q_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Et();e=ol(t);var r=cl(n,e,t);r!==null&&(ut(r,n,t),Ca(r,n,t)),n={cache:Fc()},e.payload=n;return}n=n.return}}function Z_(e,n,t){var r=Et();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},fo(e)?am(n,t):(t=Lc(e,n,t,r),t!==null&&(ut(t,e,r),sm(t,n,r)))}function im(e,n,t){var r=Et();Ha(e,n,t,r)}function Ha(e,n,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(fo(e))am(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var m=n.lastRenderedState,g=o(m,t);if(l.hasEagerState=!0,l.eagerState=g,Wn(g,m))return Ps(e,n,l,0),Ze===null&&$s(),!1}catch{}finally{}if(t=Lc(e,n,l,r),t!==null)return ut(t,e,r),sm(t,n,r),!0}return!1}function yu(e,n,t,r){if(r={lane:2,revertLane:Zu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fo(e)){if(n)throw Error(a(479))}else n=Lc(e,t,r,2),n!==null&&ut(n,e,2)}function fo(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function am(e,n){Li=lo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sm(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,fi(e,t)}}var Ga={readContext:Ln,use:so,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Ga.useEffectEvent=cn;var om={readContext:Ln,use:so,useCallback:function(e,n){return Jn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Pd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,co(4194308,4,Kd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return co(4194308,4,e,n)},useInsertionEffect:function(e,n){co(4,2,e,n)},useMemo:function(e,n){var t=Jn();n=n===void 0?null:n;var r=e();if(ni){dt(!0);try{e()}finally{dt(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=Jn();if(t!==void 0){var l=t(n);if(ni){dt(!0);try{t(n)}finally{dt(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=Z_.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var n=Jn();return e={current:e},n.memoizedState=e},useState:function(e){e=du(e);var n=e.queue,t=im.bind(null,Re,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:hu,useDeferredValue:function(e,n){var t=Jn();return _u(t,e,n)},useTransition:function(){var e=du(!1);return e=em.bind(null,Re,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=Re,l=Jn();if(Ue){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Ze===null)throw Error(a(349));(Be&127)!==0||Md(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Pd(Dd.bind(null,r,o,e),[e]),r.flags|=2048,Ui(9,{destroy:void 0},jd.bind(null,r,o,t,n),null),t},useId:function(){var e=Jn(),n=Ze.identifierPrefix;if(Ue){var t=sr,r=ar;t=(r&~(1<<32-Dn(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=io++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=$_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bu,useFormState:Gd,useActionState:Gd,useOptimistic:function(e){var n=Jn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=yu.bind(null,Re,!0,t),t.dispatch=n,[e,n]},useMemoCache:cu,useCacheRefresh:function(){return Jn().memoizedState=Q_.bind(null,Re)},useEffectEvent:function(e){var n=Jn(),t={impl:e};return n.memoizedState=t,function(){if((Ye&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}},vu={readContext:Ln,use:so,useCallback:Zd,useContext:Ln,useEffect:pu,useImperativeHandle:Qd,useInsertionEffect:Fd,useLayoutEffect:Xd,useMemo:Wd,useReducer:oo,useRef:$d,useState:function(){return oo(Tr)},useDebugValue:hu,useDeferredValue:function(e,n){var t=pn();return Jd(t,Xe.memoizedState,e,n)},useTransition:function(){var e=oo(Tr)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Ua(e),n]},useSyncExternalStore:Td,useId:rm,useHostTransitionStatus:bu,useFormState:Vd,useActionState:Vd,useOptimistic:function(e,n){var t=pn();return Cd(t,Xe,e,n)},useMemoCache:cu,useCacheRefresh:lm};vu.useEffectEvent=qd;var cm={readContext:Ln,use:so,useCallback:Zd,useContext:Ln,useEffect:pu,useImperativeHandle:Qd,useInsertionEffect:Fd,useLayoutEffect:Xd,useMemo:Wd,useReducer:fu,useRef:$d,useState:function(){return fu(Tr)},useDebugValue:hu,useDeferredValue:function(e,n){var t=pn();return Xe===null?_u(t,e,n):Jd(t,Xe.memoizedState,e,n)},useTransition:function(){var e=fu(Tr)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Ua(e),n]},useSyncExternalStore:Td,useId:rm,useHostTransitionStatus:bu,useFormState:Yd,useActionState:Yd,useOptimistic:function(e,n){var t=pn();return Xe!==null?Cd(t,Xe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:cu,useCacheRefresh:lm};cm.useEffectEvent=qd;function xu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:v({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var wu={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Et(),l=ol(r);l.payload=n,t!=null&&(l.callback=t),n=cl(e,l,r),n!==null&&(ut(n,e,r),Ca(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Et(),l=ol(r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=cl(e,l,r),n!==null&&(ut(n,e,r),Ca(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Et(),r=ol(t);r.tag=2,n!=null&&(r.callback=n),n=cl(e,r,t),n!==null&&(ut(n,e,t),Ca(n,e,t))}};function um(e,n,t,r,l,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,m):n.prototype&&n.prototype.isPureReactComponent?!Pl(t,r)||!Pl(l,o):!0}function fm(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&wu.enqueueReplaceState(n,n.state,null)}function ti(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=v({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function dm(e){Ys(e)}function mm(e){console.error(e)}function pm(e){Ys(e)}function mo(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function hm(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Eu(e,n,t){return t=ol(t),t.tag=3,t.payload={element:null},t.callback=function(){mo(e,n)},t}function _m(e){return e=ol(e),e.tag=3,e}function gm(e,n,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=r.value;e.payload=function(){return l(o)},e.callback=function(){hm(n,t,r)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){hm(n,t,r),typeof l!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})})}function W_(e,n,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&ji(n,t,l,!0),t=yt.current,t!==null){switch(t.tag){case 31:case 13:return Ht===null?ko():t.alternate===null&&un===0&&(un=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===Js?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Xu(e,r,l)),!1;case 22:return t.flags|=65536,r===Js?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Xu(e,r,l)),!1}throw Error(a(435,t.tag))}return Xu(e,r,l),ko(),!1}if(Ue)return n=yt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Ic&&(e=Error(a(422),{cause:r}),Ma(Bt(e,t)))):(r!==Ic&&(n=Error(a(423),{cause:r}),Ma(Bt(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=Bt(r,t),l=Eu(e.stateNode,r,l),Jc(e,l),un!==4&&(un=2)),!1;var o=Error(a(520),{cause:r});if(o=Bt(o,t),Xa===null?Xa=[o]:Xa.push(o),un!==4&&(un=2),n===null)return!0;r=Bt(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=Eu(t.stateNode,r,e),Jc(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(hl===null||!hl.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=_m(l),gm(l,e,t,r),Jc(t,l),!1}t=t.return}while(t!==null);return!1}var Su=Error(a(461)),vn=!1;function zn(e,n,t,r){n.child=e===null?xd(n,null,t,r):ei(n,e.child,t,r)}function bm(e,n,t,r,l){t=t.render;var o=n.ref;if("ref"in r){var m={};for(var g in r)g!=="ref"&&(m[g]=r[g])}else m=r;return Ql(n),r=iu(e,n,t,m,o,l),g=au(),e!==null&&!vn?(su(e,n,l),Mr(e,n,l)):(Ue&&g&&Gc(n),n.flags|=1,zn(e,n,r,l),n.child)}function ym(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!zc(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,vm(e,n,o,r,l)):(e=Fs(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Au(e,l)){var m=o.memoizedProps;if(t=t.compare,t=t!==null?t:Pl,t(m,r)&&e.ref===n.ref)return Mr(e,n,l)}return n.flags|=1,e=Er(o,r),e.ref=n.ref,e.return=n,n.child=e}function vm(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Pl(o,r)&&e.ref===n.ref)if(vn=!1,n.pendingProps=r=o,Au(e,l))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Mr(e,n,l)}return ku(e,n,t,r,l)}function xm(e,n,t,r){var l=r.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~o}else r=0,n.child=null;return wm(e,n,o,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zs(n,o!==null?o.cachePool:null),o!==null?Sd(n,o):nu(),kd(n);else return r=n.lanes=536870912,wm(e,n,o!==null?o.baseLanes|t:t,t,r)}else o!==null?(Zs(n,o.cachePool),Sd(n,o),fl(),n.memoizedState=null):(e!==null&&Zs(n,null),nu(),fl());return zn(e,n,l,t),n.child}function Va(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wm(e,n,t,r,l){var o=Kc();return o=o===null?null:{parent:bn._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&Zs(n,null),nu(),kd(n),e!==null&&ji(e,n,r,!0),n.childLanes=l,null}function po(e,n){return n=_o({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Em(e,n,t){return ei(n,e.child,null,t),e=po(n,n.pendingProps),e.flags|=2,vt(n),n.memoizedState=null,e}function J_(e,n,t){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ue){if(r.mode==="hidden")return e=po(n,r),n.lanes=536870912,Va(null,e);if(ru(n),(e=We)?(e=Bp(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rl!==null?{id:ar,overflow:sr}:null,retryLane:536870912,hydrationErrors:null},t=ad(e),t.return=n,n.child=t,Bn=n,We=null)):e=null,e===null)throw il(n);return n.lanes=536870912,null}return po(n,r)}var o=e.memoizedState;if(o!==null){var m=o.dehydrated;if(ru(n),l)if(n.flags&256)n.flags&=-257,n=Em(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(vn||ji(e,n,t,!1),l=(t&e.childLanes)!==0,vn||l){if(r=Ze,r!==null&&(m=ws(r,t),m!==0&&m!==o.retryLane))throw o.retryLane=m,ql(e,m),ut(r,e,m),Su;ko(),n=Em(e,n,t)}else e=o.treeContext,We=Gt(m.nextSibling),Bn=n,Ue=!0,ll=null,Ut=!1,e!==null&&cd(n,e),n=po(n,r),n.flags|=4096;return n}return e=Er(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ho(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(a(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function ku(e,n,t,r,l){return Ql(n),t=iu(e,n,t,r,void 0,l),r=au(),e!==null&&!vn?(su(e,n,l),Mr(e,n,l)):(Ue&&r&&Gc(n),n.flags|=1,zn(e,n,t,l),n.child)}function Sm(e,n,t,r,l,o){return Ql(n),n.updateQueue=null,t=Rd(n,r,t,l),Nd(e),r=au(),e!==null&&!vn?(su(e,n,o),Mr(e,n,o)):(Ue&&r&&Gc(n),n.flags|=1,zn(e,n,t,o),n.child)}function km(e,n,t,r,l){if(Ql(n),n.stateNode===null){var o=Ni,m=t.contextType;typeof m=="object"&&m!==null&&(o=Ln(m)),o=new t(r,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=wu,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=r,o.state=n.memoizedState,o.refs={},Zc(n),m=t.contextType,o.context=typeof m=="object"&&m!==null?Ln(m):Ni,o.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(xu(n,t,m,r),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&wu.enqueueReplaceState(o,o.state,null),La(n,r,o,l),Ba(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){o=n.stateNode;var g=n.memoizedProps,k=ti(t,g);o.props=k;var C=o.context,P=t.contextType;m=Ni,typeof P=="object"&&P!==null&&(m=Ln(P));var K=t.getDerivedStateFromProps;P=typeof K=="function"||typeof o.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,P||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g||C!==m)&&fm(n,o,r,m),sl=!1;var L=n.memoizedState;o.state=L,La(n,r,o,l),Ba(),C=n.memoizedState,g||L!==C||sl?(typeof K=="function"&&(xu(n,t,K,r),C=n.memoizedState),(k=sl||um(n,t,k,r,L,C,m))?(P||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=C),o.props=r,o.state=C,o.context=m,r=k):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Wc(e,n),m=n.memoizedProps,P=ti(t,m),o.props=P,K=n.pendingProps,L=o.context,C=t.contextType,k=Ni,typeof C=="object"&&C!==null&&(k=Ln(C)),g=t.getDerivedStateFromProps,(C=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==K||L!==k)&&fm(n,o,r,k),sl=!1,L=n.memoizedState,o.state=L,La(n,r,o,l),Ba();var Y=n.memoizedState;m!==K||L!==Y||sl||e!==null&&e.dependencies!==null&&Ks(e.dependencies)?(typeof g=="function"&&(xu(n,t,g,r),Y=n.memoizedState),(P=sl||um(n,t,P,r,L,Y,k)||e!==null&&e.dependencies!==null&&Ks(e.dependencies))?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,Y,k),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,Y,k)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=Y),o.props=r,o.state=Y,o.context=k,r=P):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),r=!1)}return o=r,ho(e,n),r=(n.flags&128)!==0,o||r?(o=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&r?(n.child=ei(n,e.child,null,l),n.child=ei(n,null,t,l)):zn(e,n,t,l),n.memoizedState=o.state,e=n.child):e=Mr(e,n,l),e}function Nm(e,n,t,r){return Xl(),n.flags|=256,zn(e,n,t,r),n.child}var Nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:hd()}}function Tu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=wt),e}function Rm(e,n,t){var r=n.pendingProps,l=!1,o=(n.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(l?ul(n):fl(),(e=We)?(e=Bp(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rl!==null?{id:ar,overflow:sr}:null,retryLane:536870912,hydrationErrors:null},t=ad(e),t.return=n,n.child=t,Bn=n,We=null)):e=null,e===null)throw il(n);return ff(e)?n.lanes=32:n.lanes=536870912,null}var g=r.children;return r=r.fallback,l?(fl(),l=n.mode,g=_o({mode:"hidden",children:g},l),r=Fl(r,l,t,null),g.return=n,r.return=n,g.sibling=r,n.child=g,r=n.child,r.memoizedState=Ru(t),r.childLanes=Tu(e,m,t),n.memoizedState=Nu,Va(null,r)):(ul(n),Mu(n,g))}var k=e.memoizedState;if(k!==null&&(g=k.dehydrated,g!==null)){if(o)n.flags&256?(ul(n),n.flags&=-257,n=ju(e,n,t)):n.memoizedState!==null?(fl(),n.child=e.child,n.flags|=128,n=null):(fl(),g=r.fallback,l=n.mode,r=_o({mode:"visible",children:r.children},l),g=Fl(g,l,t,null),g.flags|=2,r.return=n,g.return=n,r.sibling=g,n.child=r,ei(n,e.child,null,t),r=n.child,r.memoizedState=Ru(t),r.childLanes=Tu(e,m,t),n.memoizedState=Nu,n=Va(null,r));else if(ul(n),ff(g)){if(m=g.nextSibling&&g.nextSibling.dataset,m)var C=m.dgst;m=C,r=Error(a(419)),r.stack="",r.digest=m,Ma({value:r,source:null,stack:null}),n=ju(e,n,t)}else if(vn||ji(e,n,t,!1),m=(t&e.childLanes)!==0,vn||m){if(m=Ze,m!==null&&(r=ws(m,t),r!==0&&r!==k.retryLane))throw k.retryLane=r,ql(e,r),ut(m,e,r),Su;uf(g)||ko(),n=ju(e,n,t)}else uf(g)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,We=Gt(g.nextSibling),Bn=n,Ue=!0,ll=null,Ut=!1,e!==null&&cd(n,e),n=Mu(n,r.children),n.flags|=4096);return n}return l?(fl(),g=r.fallback,l=n.mode,k=e.child,C=k.sibling,r=Er(k,{mode:"hidden",children:r.children}),r.subtreeFlags=k.subtreeFlags&65011712,C!==null?g=Er(C,g):(g=Fl(g,l,t,null),g.flags|=2),g.return=n,r.return=n,r.sibling=g,n.child=r,Va(null,r),r=n.child,g=e.child.memoizedState,g===null?g=Ru(t):(l=g.cachePool,l!==null?(k=bn._currentValue,l=l.parent!==k?{parent:k,pool:k}:l):l=hd(),g={baseLanes:g.baseLanes|t,cachePool:l}),r.memoizedState=g,r.childLanes=Tu(e,m,t),n.memoizedState=Nu,Va(e.child,r)):(ul(n),t=e.child,e=t.sibling,t=Er(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function Mu(e,n){return n=_o({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function _o(e,n){return e=bt(22,e,null,n),e.lanes=0,e}function ju(e,n,t){return ei(n,e.child,null,t),e=Mu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tm(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Pc(e.return,n,t)}function Du(e,n,t,r,l,o){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:o}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=t,m.tailMode=l,m.treeForkCount=o)}function Mm(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;r=r.children;var m=mn.current,g=(m&2)!==0;if(g?(m=m&1|2,n.flags|=128):m&=1,te(mn,m),zn(e,n,r,t),r=Ue?Ta:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tm(e,t,n);else if(e.tag===19)Tm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&ro(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Du(n,!1,l,t,o,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ro(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Du(n,!0,t,null,o,r);break;case"together":Du(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Mr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ji(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=Er(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Er(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Au(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ks(e)))}function eg(e,n,t){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),al(n,bn,e.memoizedState.cache),Xl();break;case 27:case 5:Fn(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:al(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ru(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ul(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Rm(e,n,t):(ul(n),e=Mr(e,n,t),e!==null?e.sibling:null);ul(n);break;case 19:var l=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(ji(e,n,t,!1),r=(t&n.childLanes)!==0),l){if(r)return Mm(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),te(mn,mn.current),r)break;return null;case 22:return n.lanes=0,xm(e,n,t,n.pendingProps);case 24:al(n,bn,e.memoizedState.cache)}return Mr(e,n,t)}function jm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Au(e,t)&&(n.flags&128)===0)return vn=!1,eg(e,n,t);vn=(e.flags&131072)!==0}else vn=!1,Ue&&(n.flags&1048576)!==0&&od(n,Ta,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Wl(n.elementType),n.type=e,typeof e=="function")zc(e)?(r=ti(e,r),n.tag=1,n=km(null,n,e,r,t)):(n.tag=0,n=ku(null,n,e,r,t));else{if(e!=null){var l=e.$$typeof;if(l===se){n.tag=11,n=bm(null,n,e,r,t);break e}else if(l===W){n.tag=14,n=ym(null,n,e,r,t);break e}}throw n=Ae(e)||e,Error(a(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,l=ti(r,n.pendingProps),km(e,n,r,l,t);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(a(387));r=n.pendingProps;var o=n.memoizedState;l=o.element,Wc(e,n),La(n,r,null,t);var m=n.memoizedState;if(r=m.cache,al(n,bn,r),r!==o.cache&&qc(n,[bn],t,!0),Ba(),r=m.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Nm(e,n,r,t);break e}else if(r!==l){l=Bt(Error(a(424)),n),Ma(l),n=Nm(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=Gt(e.firstChild),Bn=n,Ue=!0,ll=null,Ut=!0,t=xd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Xl(),r===l){n=Mr(e,n,t);break e}zn(e,n,r,t)}n=n.child}return n;case 26:return ho(e,n),e===null?(t=Vp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ue||(t=n.type,e=n.pendingProps,r=Ao(ne.current).createElement(t),r[fn]=n,r[kn]=e,Un(r,t,e),nn(r),n.stateNode=r):n.memoizedState=Vp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Fn(n),e===null&&Ue&&(r=n.stateNode=Up(n.type,n.pendingProps,ne.current),Bn=n,Ut=!0,l=We,yl(n.type)?(df=l,We=Gt(r.firstChild)):We=l),zn(e,n,n.pendingProps.children,t),ho(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((l=r=We)&&(r=jg(r,n.type,n.pendingProps,Ut),r!==null?(n.stateNode=r,Bn=n,We=Gt(r.firstChild),Ut=!1,l=!0):l=!1),l||il(n)),Fn(n),l=n.type,o=n.pendingProps,m=e!==null?e.memoizedProps:null,r=o.children,sf(l,o)?r=null:m!==null&&sf(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=iu(e,n,P_,null,null,t),ts._currentValue=l),ho(e,n),zn(e,n,r,t),n.child;case 6:return e===null&&Ue&&((e=t=We)&&(t=Dg(t,n.pendingProps,Ut),t!==null?(n.stateNode=t,Bn=n,We=null,e=!0):e=!1),e||il(n)),null;case 13:return Rm(e,n,t);case 4:return He(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ei(n,null,r,t):zn(e,n,r,t),n.child;case 11:return bm(e,n,n.type,n.pendingProps,t);case 7:return zn(e,n,n.pendingProps,t),n.child;case 8:return zn(e,n,n.pendingProps.children,t),n.child;case 12:return zn(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,al(n,n.type,r.value),zn(e,n,r.children,t),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,Ql(n),l=Ln(l),r=r(l),n.flags|=1,zn(e,n,r,t),n.child;case 14:return ym(e,n,n.type,n.pendingProps,t);case 15:return vm(e,n,n.type,n.pendingProps,t);case 19:return Mm(e,n,t);case 31:return J_(e,n,t);case 22:return xm(e,n,t,n.pendingProps);case 24:return Ql(n),r=Ln(bn),e===null?(l=Kc(),l===null&&(l=Ze,o=Fc(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),n.memoizedState={parent:r,cache:l},Zc(n),al(n,bn,l)):((e.lanes&t)!==0&&(Wc(e,n),La(n,null,null,t),Ba()),l=e.memoizedState,o=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),al(n,bn,r)):(r=o.cache,al(n,bn,r),r!==l.cache&&qc(n,[bn],t,!0))),zn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function jr(e){e.flags|=4}function Ou(e,n,t,r,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rp())e.flags|=8192;else throw Jl=Js,Qc}else e.flags&=-16777217}function Dm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qp(n))if(rp())e.flags|=8192;else throw Jl=Js,Qc}function go(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Al():536870912,e.lanes|=n,Ii|=n)}function Ia(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ng(e,n,t){var r=n.pendingProps;switch(Vc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Nr(bn),Oe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Mi(n)?jr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yc())),Je(n),null;case 26:var l=n.type,o=n.memoizedState;return e===null?(jr(n),o!==null?(Je(n),Dm(n,o)):(Je(n),Ou(n,l,null,r,t))):o?o!==e.memoizedState?(jr(n),Je(n),Dm(n,o)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&jr(n),Je(n),Ou(n,l,e,r,t)),null;case 27:if(Wt(n),t=ne.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&jr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Je(n),null}e=O.current,Mi(n)?ud(n):(e=Up(l,r,t),n.stateNode=e,jr(n))}return Je(n),null;case 5:if(Wt(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&jr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Je(n),null}if(o=O.current,Mi(n))ud(n);else{var m=Ao(ne.current);switch(o){case 1:o=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=m.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}o[fn]=n,o[kn]=r;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)o.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=o;e:switch(Un(o,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&jr(n)}}return Je(n),Ou(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&jr(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(e=ne.current,Mi(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,l=Bn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[fn]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||Rp(e.nodeValue,t)),e||il(n,!0)}else e=Ao(e).createTextNode(r),e[fn]=n,n.stateNode=e}return Je(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=Mi(n),t!==null){if(e===null){if(!r)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=n}else Xl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else t=Yc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(vt(n),n):(vt(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Je(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Mi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[fn]=n}else Xl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),l=!1}else l=Yc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(vt(n),n):(vt(n),null)}return vt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==l&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),go(n,n.updateQueue),Je(n),null);case 4:return Oe(),e===null&&nf(n.stateNode.containerInfo),Je(n),null;case 10:return Nr(n.type),Je(n),null;case 19:if(U(mn),r=n.memoizedState,r===null)return Je(n),null;if(l=(n.flags&128)!==0,o=r.rendering,o===null)if(l)Ia(r,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=ro(e),o!==null){for(n.flags|=128,Ia(r,!1),e=o.updateQueue,n.updateQueue=e,go(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)id(t,e),t=t.sibling;return te(mn,mn.current&1|2),Ue&&Sr(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&En()>wo&&(n.flags|=128,l=!0,Ia(r,!1),n.lanes=4194304)}else{if(!l)if(e=ro(o),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,go(n,e),Ia(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Ue)return Je(n),null}else 2*En()-r.renderingStartTime>wo&&t!==536870912&&(n.flags|=128,l=!0,Ia(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(e=r.last,e!==null?e.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=En(),e.sibling=null,t=mn.current,te(mn,l?t&1|2:t&1),Ue&&Sr(n,r.treeForkCount),e):(Je(n),null);case 22:case 23:return vt(n),tu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),t=n.updateQueue,t!==null&&go(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&U(Zl),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Nr(bn),Je(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function tg(e,n){switch(Vc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Nr(bn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 31:if(n.memoizedState!==null){if(vt(n),n.alternate===null)throw Error(a(340));Xl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(vt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Xl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(mn),null;case 4:return Oe(),null;case 10:return Nr(n.type),null;case 22:case 23:return vt(n),tu(),e!==null&&U(Zl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Nr(bn),null;case 25:return null;default:return null}}function Am(e,n){switch(Vc(n),n.tag){case 3:Nr(bn),Oe();break;case 26:case 27:case 5:Wt(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&vt(n);break;case 13:vt(n);break;case 19:U(mn);break;case 10:Nr(n.type);break;case 22:case 23:vt(n),tu(),e!==null&&U(Zl);break;case 24:Nr(bn)}}function Ya(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&e)===e){r=void 0;var o=t.create,m=t.inst;r=o(),m.destroy=r}t=t.next}while(t!==l)}}catch(g){Fe(n,n.return,g)}}function dl(e,n,t){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var o=l.next;r=o;do{if((r.tag&e)===e){var m=r.inst,g=m.destroy;if(g!==void 0){m.destroy=void 0,l=n;var k=t,C=g;try{C()}catch(P){Fe(l,k,P)}}}r=r.next}while(r!==o)}}catch(P){Fe(n,n.return,P)}}function Om(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Ed(n,t)}catch(r){Fe(e,e.return,r)}}}function Cm(e,n,t){t.props=ti(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){Fe(e,n,r)}}function $a(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(l){Fe(e,n,l)}}function or(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){Fe(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Fe(e,n,l)}else t.current=null}function Bm(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){Fe(e,e.return,l)}}function Cu(e,n,t){try{var r=e.stateNode;Sg(r,e.type,t,n),r[kn]=n}catch(l){Fe(e,e.return,l)}}function Lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type)||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=lt));else if(r!==4&&(r===27&&yl(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Lu(e,n,t),e=e.sibling;e!==null;)Lu(e,n,t),e=e.sibling}function bo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&yl(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(bo(e,n,t),e=e.sibling;e!==null;)bo(e,n,t),e=e.sibling}function zm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Un(n,r,t),n[fn]=e,n[kn]=t}catch(o){Fe(e,e.return,o)}}var Dr=!1,xn=!1,zu=!1,Um=typeof WeakSet=="function"?WeakSet:Set,jn=null;function rg(e,n){if(e=e.containerInfo,lf=Ho,e=M(e),T(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var m=0,g=-1,k=-1,C=0,P=0,K=e,L=null;n:for(;;){for(var Y;K!==t||l!==0&&K.nodeType!==3||(g=m+l),K!==o||r!==0&&K.nodeType!==3||(k=m+r),K.nodeType===3&&(m+=K.nodeValue.length),(Y=K.firstChild)!==null;)L=K,K=Y;for(;;){if(K===e)break n;if(L===t&&++C===l&&(g=m),L===o&&++P===r&&(k=m),(Y=K.nextSibling)!==null)break;K=L,L=K.parentNode}K=Y}t=g===-1||k===-1?null:{start:g,end:k}}else t=null}t=t||{start:0,end:0}}else t=null;for(af={focusedElem:e,selectionRange:t},Ho=!1,jn=n;jn!==null;)if(n=jn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,jn=e;else for(;jn!==null;){switch(n=jn,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,l=o.memoizedProps,o=o.memoizedState,r=t.stateNode;try{var de=ti(t.type,l);e=r.getSnapshotBeforeUpdate(de,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(be){Fe(t,t.return,be)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)cf(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,jn=e;break}jn=n.return}}function Hm(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Or(e,t),r&4&&Ya(5,t);break;case 1:if(Or(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){Fe(t,t.return,m)}else{var l=ti(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Fe(t,t.return,m)}}r&64&&Om(t),r&512&&$a(t,t.return);break;case 3:if(Or(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Ed(e,n)}catch(m){Fe(t,t.return,m)}}break;case 27:n===null&&r&4&&zm(t);case 26:case 5:Or(e,t),n===null&&r&4&&Bm(t),r&512&&$a(t,t.return);break;case 12:Or(e,t);break;case 31:Or(e,t),r&4&&Im(e,t);break;case 13:Or(e,t),r&4&&Ym(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=dg.bind(null,t),Ag(e,t))));break;case 22:if(r=t.memoizedState!==null||Dr,!r){n=n!==null&&n.memoizedState!==null||xn,l=Dr;var o=xn;Dr=r,(xn=n)&&!o?Cr(e,t,(t.subtreeFlags&8772)!==0):Or(e,t),Dr=l,xn=o}break;case 30:break;default:Or(e,t)}}function Gm(e){var n=e.alternate;n!==null&&(e.alternate=null,Gm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&nr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,at=!1;function Ar(e,n,t){for(t=t.child;t!==null;)Vm(e,n,t),t=t.sibling}function Vm(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Dl,t)}catch{}switch(t.tag){case 26:xn||or(t,n),Ar(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:xn||or(t,n);var r=rn,l=at;yl(t.type)&&(rn=t.stateNode,at=!1),Ar(e,n,t),Ja(t.stateNode),rn=r,at=l;break;case 5:xn||or(t,n);case 6:if(r=rn,l=at,rn=null,Ar(e,n,t),rn=r,at=l,rn!==null)if(at)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(t.stateNode)}catch(o){Fe(t,n,o)}else try{rn.removeChild(t.stateNode)}catch(o){Fe(t,n,o)}break;case 18:rn!==null&&(at?(e=rn,Op(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Qi(e)):Op(rn,t.stateNode));break;case 4:r=rn,l=at,rn=t.stateNode.containerInfo,at=!0,Ar(e,n,t),rn=r,at=l;break;case 0:case 11:case 14:case 15:dl(2,t,n),xn||dl(4,t,n),Ar(e,n,t);break;case 1:xn||(or(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&Cm(t,n,r)),Ar(e,n,t);break;case 21:Ar(e,n,t);break;case 22:xn=(r=xn)||t.memoizedState!==null,Ar(e,n,t),xn=r;break;default:Ar(e,n,t)}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qi(e)}catch(t){Fe(n,n.return,t)}}}function Ym(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qi(e)}catch(t){Fe(n,n.return,t)}}function lg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Um),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Um),n;default:throw Error(a(435,e.tag))}}function yo(e,n){var t=lg(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var l=mg.bind(null,e,r);r.then(l,l)}})}function st(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r],o=e,m=n,g=m;e:for(;g!==null;){switch(g.tag){case 27:if(yl(g.type)){rn=g.stateNode,at=!1;break e}break;case 5:rn=g.stateNode,at=!1;break e;case 3:case 4:rn=g.stateNode.containerInfo,at=!0;break e}g=g.return}if(rn===null)throw Error(a(160));Vm(o,m,l),rn=null,at=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,e),n=n.sibling}var Qt=null;function $m(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(n,e),ot(e),r&4&&(dl(3,e,e.return),Ya(3,e),dl(5,e,e.return));break;case 1:st(n,e),ot(e),r&512&&(xn||t===null||or(t,t.return)),r&64&&Dr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var l=Qt;if(st(n,e),ot(e),r&512&&(xn||t===null||or(t,t.return)),r&4){var o=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Kn]||o[fn]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(r),l.head.insertBefore(o,l.querySelector("head > title"))),Un(o,r,t),o[fn]=e,nn(o),r=o;break e;case"link":var m=$p("link","href",l).get(r+(t.href||""));if(m){for(var g=0;g<m.length;g++)if(o=m[g],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(g,1);break n}}o=l.createElement(r),Un(o,r,t),l.head.appendChild(o);break;case"meta":if(m=$p("meta","content",l).get(r+(t.content||""))){for(g=0;g<m.length;g++)if(o=m[g],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(g,1);break n}}o=l.createElement(r),Un(o,r,t),l.head.appendChild(o);break;default:throw Error(a(468,r))}o[fn]=e,nn(o),r=o}e.stateNode=r}else Pp(l,e.type,e.stateNode);else e.stateNode=Yp(l,r,e.memoizedProps);else o!==r?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,r===null?Pp(l,e.type,e.stateNode):Yp(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Cu(e,e.memoizedProps,t.memoizedProps)}break;case 27:st(n,e),ot(e),r&512&&(xn||t===null||or(t,t.return)),t!==null&&r&4&&Cu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(st(n,e),ot(e),r&512&&(xn||t===null||or(t,t.return)),e.flags&32){l=e.stateNode;try{Xr(l,"")}catch(de){Fe(e,e.return,de)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,Cu(e,l,t!==null?t.memoizedProps:l)),r&1024&&(zu=!0);break;case 6:if(st(n,e),ot(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(de){Fe(e,e.return,de)}}break;case 3:if(Bo=null,l=Qt,Qt=Oo(n.containerInfo),st(n,e),Qt=l,ot(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Qi(n.containerInfo)}catch(de){Fe(e,e.return,de)}zu&&(zu=!1,Pm(e));break;case 4:r=Qt,Qt=Oo(e.stateNode.containerInfo),st(n,e),ot(e),Qt=r;break;case 12:st(n,e),ot(e);break;case 31:st(n,e),ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yo(e,r)));break;case 13:st(n,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(xo=En()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yo(e,r)));break;case 22:l=e.memoizedState!==null;var k=t!==null&&t.memoizedState!==null,C=Dr,P=xn;if(Dr=C||l,xn=P||k,st(n,e),xn=P,Dr=C,ot(e),r&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||k||Dr||xn||ri(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){k=t=n;try{if(o=k.stateNode,l)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{g=k.stateNode;var K=k.memoizedProps.style,L=K!=null&&K.hasOwnProperty("display")?K.display:null;g.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(de){Fe(k,k.return,de)}}}else if(n.tag===6){if(t===null){k=n;try{k.stateNode.nodeValue=l?"":k.memoizedProps}catch(de){Fe(k,k.return,de)}}}else if(n.tag===18){if(t===null){k=n;try{var Y=k.stateNode;l?Cp(Y,!0):Cp(k.stateNode,!1)}catch(de){Fe(k,k.return,de)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,yo(e,t))));break;case 19:st(n,e),ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yo(e,r)));break;case 30:break;case 21:break;default:st(n,e),ot(e)}}function ot(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(Lm(r)){t=r;break}r=r.return}if(t==null)throw Error(a(160));switch(t.tag){case 27:var l=t.stateNode,o=Bu(e);bo(e,o,l);break;case 5:var m=t.stateNode;t.flags&32&&(Xr(m,""),t.flags&=-33);var g=Bu(e);bo(e,g,m);break;case 3:case 4:var k=t.stateNode.containerInfo,C=Bu(e);Lu(e,C,k);break;default:throw Error(a(161))}}catch(P){Fe(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Or(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hm(e,n.alternate,n),n=n.sibling}function ri(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:dl(4,n,n.return),ri(n);break;case 1:or(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Cm(n,n.return,t),ri(n);break;case 27:Ja(n.stateNode);case 26:case 5:or(n,n.return),ri(n);break;case 22:n.memoizedState===null&&ri(n);break;case 30:ri(n);break;default:ri(n)}e=e.sibling}}function Cr(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=e,o=n,m=o.flags;switch(o.tag){case 0:case 11:case 15:Cr(l,o,t),Ya(4,o);break;case 1:if(Cr(l,o,t),r=o,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){Fe(r,r.return,C)}if(r=o,l=r.updateQueue,l!==null){var g=r.stateNode;try{var k=l.shared.hiddenCallbacks;if(k!==null)for(l.shared.hiddenCallbacks=null,l=0;l<k.length;l++)wd(k[l],g)}catch(C){Fe(r,r.return,C)}}t&&m&64&&Om(o),$a(o,o.return);break;case 27:zm(o);case 26:case 5:Cr(l,o,t),t&&r===null&&m&4&&Bm(o),$a(o,o.return);break;case 12:Cr(l,o,t);break;case 31:Cr(l,o,t),t&&m&4&&Im(l,o);break;case 13:Cr(l,o,t),t&&m&4&&Ym(l,o);break;case 22:o.memoizedState===null&&Cr(l,o,t),$a(o,o.return);break;case 30:break;default:Cr(l,o,t)}n=n.sibling}}function Uu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ja(t))}function Hu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ja(e))}function Zt(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(e,n,t,r),n=n.sibling}function qm(e,n,t,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Zt(e,n,t,r),l&2048&&Ya(9,n);break;case 1:Zt(e,n,t,r);break;case 3:Zt(e,n,t,r),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ja(e)));break;case 12:if(l&2048){Zt(e,n,t,r),e=n.stateNode;try{var o=n.memoizedProps,m=o.id,g=o.onPostCommit;typeof g=="function"&&g(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Fe(n,n.return,k)}}else Zt(e,n,t,r);break;case 31:Zt(e,n,t,r);break;case 13:Zt(e,n,t,r);break;case 23:break;case 22:o=n.stateNode,m=n.alternate,n.memoizedState!==null?o._visibility&2?Zt(e,n,t,r):Pa(e,n):o._visibility&2?Zt(e,n,t,r):(o._visibility|=2,Hi(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Uu(m,n);break;case 24:Zt(e,n,t,r),l&2048&&Hu(n.alternate,n);break;default:Zt(e,n,t,r)}}function Hi(e,n,t,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,m=n,g=t,k=r,C=m.flags;switch(m.tag){case 0:case 11:case 15:Hi(o,m,g,k,l),Ya(8,m);break;case 23:break;case 22:var P=m.stateNode;m.memoizedState!==null?P._visibility&2?Hi(o,m,g,k,l):Pa(o,m):(P._visibility|=2,Hi(o,m,g,k,l)),l&&C&2048&&Uu(m.alternate,m);break;case 24:Hi(o,m,g,k,l),l&&C&2048&&Hu(m.alternate,m);break;default:Hi(o,m,g,k,l)}n=n.sibling}}function Pa(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,l=r.flags;switch(r.tag){case 22:Pa(t,r),l&2048&&Uu(r.alternate,r);break;case 24:Pa(t,r),l&2048&&Hu(r.alternate,r);break;default:Pa(t,r)}n=n.sibling}}var qa=8192;function Gi(e,n,t){if(e.subtreeFlags&qa)for(e=e.child;e!==null;)Fm(e,n,t),e=e.sibling}function Fm(e,n,t){switch(e.tag){case 26:Gi(e,n,t),e.flags&qa&&e.memoizedState!==null&&$g(t,Qt,e.memoizedState,e.memoizedProps);break;case 5:Gi(e,n,t);break;case 3:case 4:var r=Qt;Qt=Oo(e.stateNode.containerInfo),Gi(e,n,t),Qt=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=qa,qa=16777216,Gi(e,n,t),qa=r):Gi(e,n,t));break;default:Gi(e,n,t)}}function Xm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Fa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];jn=r,Qm(r,e)}Xm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Km(e),e=e.sibling}function Km(e){switch(e.tag){case 0:case 11:case 15:Fa(e),e.flags&2048&&dl(9,e,e.return);break;case 3:Fa(e);break;case 12:Fa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,vo(e)):Fa(e);break;default:Fa(e)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];jn=r,Qm(r,e)}Xm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:dl(8,n,n.return),vo(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,vo(n));break;default:vo(n)}e=e.sibling}}function Qm(e,n){for(;jn!==null;){var t=jn;switch(t.tag){case 0:case 11:case 15:dl(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ja(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,jn=r;else e:for(t=e;jn!==null;){r=jn;var l=r.sibling,o=r.return;if(Gm(r),r===t){jn=null;break e}if(l!==null){l.return=o,jn=l;break e}jn=o}}}var ig={getCacheForType:function(e){var n=Ln(bn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Ln(bn).controller.signal}},ag=typeof WeakMap=="function"?WeakMap:Map,Ye=0,Ze=null,je=null,Be=0,qe=0,xt=null,ml=!1,Vi=!1,Gu=!1,Br=0,un=0,pl=0,li=0,Vu=0,wt=0,Ii=0,Xa=null,ct=null,Iu=!1,xo=0,Zm=0,wo=1/0,Eo=null,hl=null,Nn=0,_l=null,Yi=null,Lr=0,Yu=0,$u=null,Wm=null,Ka=0,Pu=null;function Et(){return(Ye&2)!==0&&Be!==0?Be&-Be:G.T!==null?Zu():on()}function Jm(){if(wt===0)if((Be&536870912)===0||Ue){var e=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),wt=e}else wt=536870912;return e=yt.current,e!==null&&(e.flags|=32),wt}function ut(e,n,t){(e===Ze&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&($i(e,0),gl(e,Be,wt,!1)),Ol(e,t),((Ye&2)===0||e!==Ze)&&(e===Ze&&((Ye&2)===0&&(li|=t),un===4&&gl(e,Be,wt,!1)),cr(e))}function ep(e,n,t){if((Ye&6)!==0)throw Error(a(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||An(e,n),l=r?cg(e,n):Fu(e,n,!0),o=r;do{if(l===0){Vi&&!r&&gl(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!sg(t)){l=Fu(e,n,!1),o=!1;continue}if(l===2){if(o=n,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var g=e;l=Xa;var k=g.current.memoizedState.isDehydrated;if(k&&($i(g,m).flags|=256),m=Fu(g,m,!1),m!==2){if(Gu&&!k){g.errorRecoveryDisabledLanes|=o,li|=o,l=4;break e}o=ct,ct=l,o!==null&&(ct===null?ct=o:ct.push.apply(ct,o))}l=m}if(o=!1,l!==2)continue}}if(l===1){$i(e,0),gl(e,n,0,!0);break}e:{switch(r=e,o=l,o){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:gl(r,n,wt,!ml);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(l=xo+300-En(),10<l)){if(gl(r,n,wt,!ml),en(r,0,!0)!==0)break e;Lr=n,r.timeoutHandle=Dp(np.bind(null,r,t,ct,Eo,Iu,n,wt,li,Ii,ml,o,"Throttled",-0,0),l);break e}np(r,t,ct,Eo,Iu,n,wt,li,Ii,ml,o,null,-0,0)}}break}while(!0);cr(e)}function np(e,n,t,r,l,o,m,g,k,C,P,K,L,Y){if(e.timeoutHandle=-1,K=n.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:lt},Fm(n,o,K);var de=(o&62914560)===o?xo-En():(o&4194048)===o?Zm-En():0;if(de=Pg(K,de),de!==null){Lr=o,e.cancelPendingCommit=de(cp.bind(null,e,n,o,t,r,l,m,g,k,P,K,null,L,Y)),gl(e,o,m,!C);return}}cp(e,n,o,t,r,l,m,g,k)}function sg(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Wn(o(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gl(e,n,t,r){n&=~Vu,n&=~li,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var o=31-Dn(l),m=1<<o;r[o]=-1,l&=~m}t!==0&&xs(e,t,n)}function So(){return(Ye&6)===0?(Qa(0),!1):!0}function qu(){if(je!==null){if(qe===0)var e=je.return;else e=je,kr=Kl=null,ou(e),Ci=null,Aa=0,e=je;for(;e!==null;)Am(e.alternate,e),e=e.return;je=null}}function $i(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Rg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Lr=0,qu(),Ze=e,je=t=Er(e.current,null),Be=n,qe=0,xt=null,ml=!1,Vi=An(e,n),Gu=!1,Ii=wt=Vu=li=pl=un=0,ct=Xa=null,Iu=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var l=31-Dn(r),o=1<<l;n|=e[l],r&=~o}return Br=n,$s(),t}function tp(e,n){Re=null,G.H=Ga,n===Oi||n===Ws?(n=bd(),qe=3):n===Qc?(n=bd(),qe=4):qe=n===Su?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,xt=n,je===null&&(un=1,mo(e,Bt(n,e.current)))}function rp(){var e=yt.current;return e===null?!0:(Be&4194048)===Be?Ht===null:(Be&62914560)===Be||(Be&536870912)!==0?e===Ht:!1}function lp(){var e=G.H;return G.H=Ga,e===null?Ga:e}function ip(){var e=G.A;return G.A=ig,e}function ko(){un=4,ml||(Be&4194048)!==Be&&yt.current!==null||(Vi=!0),(pl&134217727)===0&&(li&134217727)===0||Ze===null||gl(Ze,Be,wt,!1)}function Fu(e,n,t){var r=Ye;Ye|=2;var l=lp(),o=ip();(Ze!==e||Be!==n)&&(Eo=null,$i(e,n)),n=!1;var m=un;e:do try{if(qe!==0&&je!==null){var g=je,k=xt;switch(qe){case 8:qu(),m=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(n=!0);var C=qe;if(qe=0,xt=null,Pi(e,g,k,C),t&&Vi){m=0;break e}break;default:C=qe,qe=0,xt=null,Pi(e,g,k,C)}}og(),m=un;break}catch(P){tp(e,P)}while(!0);return n&&e.shellSuspendCounter++,kr=Kl=null,Ye=r,G.H=l,G.A=o,je===null&&(Ze=null,Be=0,$s()),m}function og(){for(;je!==null;)ap(je)}function cg(e,n){var t=Ye;Ye|=2;var r=lp(),l=ip();Ze!==e||Be!==n?(Eo=null,wo=En()+500,$i(e,n)):Vi=An(e,n);e:do try{if(qe!==0&&je!==null){n=je;var o=xt;n:switch(qe){case 1:qe=0,xt=null,Pi(e,n,o,1);break;case 2:case 9:if(_d(o)){qe=0,xt=null,sp(n);break}n=function(){qe!==2&&qe!==9||Ze!==e||(qe=7),cr(e)},o.then(n,n);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:_d(o)?(qe=0,xt=null,sp(n)):(qe=0,xt=null,Pi(e,n,o,7));break;case 5:var m=null;switch(je.tag){case 26:m=je.memoizedState;case 5:case 27:var g=je;if(m?qp(m):g.stateNode.complete){qe=0,xt=null;var k=g.sibling;if(k!==null)je=k;else{var C=g.return;C!==null?(je=C,No(C)):je=null}break n}}qe=0,xt=null,Pi(e,n,o,5);break;case 6:qe=0,xt=null,Pi(e,n,o,6);break;case 8:qu(),un=6;break e;default:throw Error(a(462))}}ug();break}catch(P){tp(e,P)}while(!0);return kr=Kl=null,G.H=r,G.A=l,Ye=t,je!==null?0:(Ze=null,Be=0,$s(),un)}function ug(){for(;je!==null&&!ci();)ap(je)}function ap(e){var n=jm(e.alternate,e,Br);e.memoizedProps=e.pendingProps,n===null?No(e):je=n}function sp(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Sm(t,n,n.pendingProps,n.type,void 0,Be);break;case 11:n=Sm(t,n,n.pendingProps,n.type.render,n.ref,Be);break;case 5:ou(n);default:Am(t,n),n=je=id(n,Br),n=jm(t,n,Br)}e.memoizedProps=e.pendingProps,n===null?No(e):je=n}function Pi(e,n,t,r){kr=Kl=null,ou(n),Ci=null,Aa=0;var l=n.return;try{if(W_(e,l,n,t,Be)){un=1,mo(e,Bt(t,e.current)),je=null;return}}catch(o){if(l!==null)throw je=l,o;un=1,mo(e,Bt(t,e.current)),je=null;return}n.flags&32768?(Ue||r===1?e=!0:Vi||(Be&536870912)!==0?e=!1:(ml=e=!0,(r===2||r===9||r===3||r===6)&&(r=yt.current,r!==null&&r.tag===13&&(r.flags|=16384))),op(n,e)):No(n)}function No(e){var n=e;do{if((n.flags&32768)!==0){op(n,ml);return}e=n.return;var t=ng(n.alternate,n,Br);if(t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);un===0&&(un=5)}function op(e,n){do{var t=tg(e.alternate,e);if(t!==null){t.flags&=32767,je=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){je=e;return}je=e=t}while(e!==null);un=6,je=null}function cp(e,n,t,r,l,o,m,g,k){e.cancelPendingCommit=null;do Ro();while(Nn!==0);if((Ye&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(o=n.lanes|n.childLanes,o|=Bc,mr(e,t,o,m,g,k),e===Ze&&(je=Ze=null,Be=0),Yi=n,_l=e,Lr=t,Yu=o,$u=l,Wm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pg(jl,function(){return pp(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=G.T,G.T=null,l=re.p,re.p=2,m=Ye,Ye|=4;try{rg(e,n,t)}finally{Ye=m,re.p=l,G.T=r}}Nn=1,up(),fp(),dp()}}function up(){if(Nn===1){Nn=0;var e=_l,n=Yi,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=G.T,G.T=null;var r=re.p;re.p=2;var l=Ye;Ye|=4;try{$m(n,e);var o=af,m=M(e.containerInfo),g=o.focusedElem,k=o.selectionRange;if(m!==g&&g&&g.ownerDocument&&w(g.ownerDocument.documentElement,g)){if(k!==null&&T(g)){var C=k.start,P=k.end;if(P===void 0&&(P=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(P,g.value.length);else{var K=g.ownerDocument||document,L=K&&K.defaultView||window;if(L.getSelection){var Y=L.getSelection(),de=g.textContent.length,be=Math.min(k.start,de),Qe=k.end===void 0?be:Math.min(k.end,de);!Y.extend&&be>Qe&&(m=Qe,Qe=be,be=m);var j=h(g,be),R=h(g,Qe);if(j&&R&&(Y.rangeCount!==1||Y.anchorNode!==j.node||Y.anchorOffset!==j.offset||Y.focusNode!==R.node||Y.focusOffset!==R.offset)){var A=K.createRange();A.setStart(j.node,j.offset),Y.removeAllRanges(),be>Qe?(Y.addRange(A),Y.extend(R.node,R.offset)):(A.setEnd(R.node,R.offset),Y.addRange(A))}}}}for(K=[],Y=g;Y=Y.parentNode;)Y.nodeType===1&&K.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<K.length;g++){var q=K[g];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Ho=!!lf,af=lf=null}finally{Ye=l,re.p=r,G.T=t}}e.current=n,Nn=2}}function fp(){if(Nn===2){Nn=0;var e=_l,n=Yi,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=G.T,G.T=null;var r=re.p;re.p=2;var l=Ye;Ye|=4;try{Hm(e,n.alternate,n)}finally{Ye=l,re.p=r,G.T=t}}Nn=3}}function dp(){if(Nn===4||Nn===3){Nn=0,Ir();var e=_l,n=Yi,t=Lr,r=Wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Nn=5:(Nn=0,Yi=_l=null,mp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(hl=null),Tt(t),n=n.stateNode,Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Dl,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=G.T,l=re.p,re.p=2,G.T=null;try{for(var o=e.onRecoverableError,m=0;m<r.length;m++){var g=r[m];o(g.value,{componentStack:g.stack})}}finally{G.T=n,re.p=l}}(Lr&3)!==0&&Ro(),cr(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Pu?Ka++:(Ka=0,Pu=e):Ka=0,Qa(0)}}function mp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ja(n)))}function Ro(){return up(),fp(),dp(),pp()}function pp(){if(Nn!==5)return!1;var e=_l,n=Yu;Yu=0;var t=Tt(Lr),r=G.T,l=re.p;try{re.p=32>t?32:t,G.T=null,t=$u,$u=null;var o=_l,m=Lr;if(Nn=0,Yi=_l=null,Lr=0,(Ye&6)!==0)throw Error(a(331));var g=Ye;if(Ye|=4,Km(o.current),qm(o,o.current,m,t),Ye=g,Qa(0,!1),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Dl,o)}catch{}return!0}finally{re.p=l,G.T=r,mp(e,n)}}function hp(e,n,t){n=Bt(t,n),n=Eu(e.stateNode,n,2),e=cl(e,n,2),e!==null&&(Ol(e,2),cr(e))}function Fe(e,n,t){if(e.tag===3)hp(e,e,t);else for(;n!==null;){if(n.tag===3){hp(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hl===null||!hl.has(r))){e=Bt(t,e),t=_m(2),r=cl(n,t,2),r!==null&&(gm(t,r,n,e),Ol(r,2),cr(r));break}}n=n.return}}function Xu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ag;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(Gu=!0,l.add(t),e=fg.bind(null,e,n,t),n.then(e,e))}function fg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ze===e&&(Be&t)===t&&(un===4||un===3&&(Be&62914560)===Be&&300>En()-xo?(Ye&2)===0&&$i(e,0):Vu|=t,Ii===Be&&(Ii=0)),cr(e)}function _p(e,n){n===0&&(n=Al()),e=ql(e,n),e!==null&&(Ol(e,n),cr(e))}function dg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_p(e,t)}function mg(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(n),_p(e,t)}function pg(e,n){return Vr(e,n)}var To=null,qi=null,Ku=!1,Mo=!1,Qu=!1,bl=0;function cr(e){e!==qi&&e.next===null&&(qi===null?To=qi=e:qi=qi.next=e),Mo=!0,Ku||(Ku=!0,_g())}function Qa(e,n){if(!Qu&&Mo){Qu=!0;do for(var t=!1,r=To;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var o=0;else{var m=r.suspendedLanes,g=r.pingedLanes;o=(1<<31-Dn(42|e)+1)-1,o&=l&~(m&~g),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,vp(r,o))}else o=Be,o=en(r,r===Ze?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||An(r,o)||(t=!0,vp(r,o));r=r.next}while(t);Qu=!1}}function hg(){gp()}function gp(){Mo=Ku=!1;var e=0;bl!==0&&Ng()&&(e=bl);for(var n=En(),t=null,r=To;r!==null;){var l=r.next,o=bp(r,n);o===0?(r.next=null,t===null?To=l:t.next=l,l===null&&(qi=t)):(t=r,(e!==0||(o&3)!==0)&&(Mo=!0)),r=l}Nn!==0&&Nn!==5||Qa(e),bl!==0&&(bl=0)}function bp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-Dn(o),g=1<<m,k=l[m];k===-1?((g&t)===0||(g&r)!==0)&&(l[m]=fc(g,n)):k<=n&&(e.expiredLanes|=g),o&=~g}if(n=Ze,t=Be,t=en(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Nt(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||An(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&Nt(r),Tt(t)){case 2:case 8:t=sa;break;case 32:t=jl;break;case 268435456:t=ft;break;default:t=jl}return r=yp.bind(null,e),t=Vr(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&Nt(r),e.callbackPriority=2,e.callbackNode=null,2}function yp(e,n){if(Nn!==0&&Nn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ro()&&e.callbackNode!==t)return null;var r=Be;return r=en(e,e===Ze?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ep(e,r,n),bp(e,En()),e.callbackNode!=null&&e.callbackNode===t?yp.bind(null,e):null)}function vp(e,n){if(Ro())return null;ep(e,n,!0)}function _g(){Tg(function(){(Ye&6)!==0?Vr(Ml,hg):gp()})}function Zu(){if(bl===0){var e=Di;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),bl=e}return bl}function xp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function wp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function gg(e,n,t,r,l){if(n==="submit"&&t&&t.stateNode===l){var o=xp((l[kn]||null).action),m=r.submitter;m&&(n=(n=m[kn]||null)?xp(n.formAction):m.getAttribute("formAction"),n!==null&&(o=n,m=null));var g=new vr("action","action",null,r,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(bl!==0){var k=m?wp(l,m):new FormData(l);gu(t,{pending:!0,data:k,method:l.method,action:o},null,k)}}else typeof o=="function"&&(g.preventDefault(),k=m?wp(l,m):new FormData(l),gu(t,{pending:!0,data:k,method:l.method,action:o},o,k))},currentTarget:l}]})}}for(var Wu=0;Wu<Cc.length;Wu++){var Ju=Cc[Wu],bg=Ju.toLowerCase(),yg=Ju[0].toUpperCase()+Ju.slice(1);Kt(bg,"on"+yg)}Kt(Ot,"onAnimationEnd"),Kt(xr,"onAnimationIteration"),Kt(wr,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(Is,"onTransitionRun"),Kt(Si,"onTransitionStart"),Kt(Na,"onTransitionCancel"),Kt(tl,"onTransitionEnd"),gr("onMouseEnter",["mouseout","mouseover"]),gr("onMouseLeave",["mouseout","mouseover"]),gr("onPointerEnter",["pointerout","pointerover"]),gr("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Za));function Ep(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var m=r.length-1;0<=m;m--){var g=r[m],k=g.instance,C=g.currentTarget;if(g=g.listener,k!==o&&l.isPropagationStopped())break e;o=g,l.currentTarget=C;try{o(l)}catch(P){Ys(P)}l.currentTarget=null,o=k}else for(m=0;m<r.length;m++){if(g=r[m],k=g.instance,C=g.currentTarget,g=g.listener,k!==o&&l.isPropagationStopped())break e;o=g,l.currentTarget=C;try{o(l)}catch(P){Ys(P)}l.currentTarget=null,o=k}}}}function De(e,n){var t=n[Cl];t===void 0&&(t=n[Cl]=new Set);var r=e+"__bubble";t.has(r)||(Sp(n,e,2,!1),t.add(r))}function ef(e,n,t){var r=0;n&&(r|=4),Sp(t,e,r,n)}var jo="_reactListening"+Math.random().toString(36).slice(2);function nf(e){if(!e[jo]){e[jo]=!0,tr.forEach(function(t){t!=="selectionchange"&&(vg.has(t)||ef(t,!1,e),ef(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jo]||(n[jo]=!0,ef("selectionchange",!1,n))}}function Sp(e,n,t,r){switch(Jp(n)){case 2:var l=Xg;break;case 8:l=Kg;break;default:l=gf}t=l.bind(null,n,t,e),l=void 0,!ha||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function tf(e,n,t,r,l){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var g=r.stateNode.containerInfo;if(g===l)break;if(m===4)for(m=r.return;m!==null;){var k=m.tag;if((k===3||k===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;g!==null;){if(m=jt(g),m===null)return;if(k=m.tag,k===5||k===6||k===26||k===27){r=o=m;continue e}g=g.parentNode}}r=r.return}pa(function(){var C=o,P=fa(t),K=[];e:{var L=Ra.get(e);if(L!==void 0){var Y=vr,de=e;switch(e){case"keypress":if(hi(t)===0)break e;case"keydown":case"keyup":Y=bc;break;case"focusin":de="focus",Y=yi;break;case"focusout":de="blur",Y=yi;break;case"beforeblur":case"afterblur":Y=yi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=ht;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Rs;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=xc;break;case Ot:case xr:case wr:Y=Ms;break;case tl:Y=Ec;break;case"scroll":case"scrollend":Y=Ns;break;case"wheel":Y=kc;break;case"copy":case"cut":case"paste":Y=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Os;break;case"toggle":case"beforetoggle":Y=Rc}var be=(n&4)!==0,Qe=!be&&(e==="scroll"||e==="scrollend"),j=be?L!==null?L+"Capture":null:L;be=[];for(var R=C,A;R!==null;){var q=R;if(A=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||A===null||j===null||(q=it(R,j),q!=null&&be.push(Wa(R,q,A))),Qe)break;R=R.return}0<be.length&&(L=new Y(L,de,null,t,P),K.push({event:L,listeners:be}))}}if((n&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",L&&t!==yr&&(de=t.relatedTarget||t.fromElement)&&(jt(de)||de[mt]))break e;if((Y||L)&&(L=P.window===P?P:(L=P.ownerDocument)?L.defaultView||L.parentWindow:window,Y?(de=t.relatedTarget||t.toElement,Y=C,de=de?jt(de):null,de!==null&&(Qe=p(de),be=de.tag,de!==Qe||be!==5&&be!==27&&be!==6)&&(de=null)):(Y=null,de=C),Y!==de)){if(be=ht,q="onMouseLeave",j="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(be=Os,q="onPointerLeave",j="onPointerEnter",R="pointer"),Qe=Y==null?L:hr(Y),A=de==null?L:hr(de),L=new be(q,R+"leave",Y,t,P),L.target=Qe,L.relatedTarget=A,q=null,jt(P)===C&&(be=new be(j,R+"enter",de,t,P),be.target=A,be.relatedTarget=Qe,q=be),Qe=q,Y&&de)n:{for(be=xg,j=Y,R=de,A=0,q=j;q;q=be(q))A++;q=0;for(var ge=R;ge;ge=be(ge))q++;for(;0<A-q;)j=be(j),A--;for(;0<q-A;)R=be(R),q--;for(;A--;){if(j===R||R!==null&&j===R.alternate){be=j;break n}j=be(j),R=be(R)}be=null}else be=null;Y!==null&&kp(K,L,Y,be,!1),de!==null&&Qe!==null&&kp(K,Qe,de,be,!0)}}e:{if(L=C?hr(C):window,Y=L.nodeName&&L.nodeName.toLowerCase(),Y==="select"||Y==="input"&&L.type==="file")var Ge=_t;else if(Us(L))if(wa)Ge=Vs;else{Ge=Ei;var he=Gs}else Y=L.nodeName,!Y||Y.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?C&&mi(C.elementType)&&(Ge=_t):Ge=ka;if(Ge&&(Ge=Ge(e,C))){Hs(K,Ge,t,P);break e}he&&he(e,L,C),e==="focusout"&&C&&L.type==="number"&&C.memoizedProps.value!=null&&ua(L,"number",L.value)}switch(he=C?hr(C):window,e){case"focusin":(Us(he)||he.contentEditable==="true")&&(ce=he,Ce=C,ve=null);break;case"focusout":ve=Ce=ce=null;break;case"mousedown":tn=!0;break;case"contextmenu":case"mouseup":case"dragend":tn=!1,_n(K,t,P);break;case"selectionchange":if(ee)break;case"keydown":case"keyup":_n(K,t,P)}var Te;if(ya)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else el?xa(e,t)&&(Le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Le="onCompositionStart");Le&&(Cs&&t.locale!=="ko"&&(el||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&el&&(Te=Wr()):(Xt=P,Hl="value"in Xt?Xt.value:Xt.textContent,el=!0)),he=Do(C,Le),0<he.length&&(Le=new ga(Le,e,null,t,P),K.push({event:Le,listeners:he}),Te?Le.data=Te:(Te=Ls(t),Te!==null&&(Le.data=Te)))),(Te=Mc?zs(e,t):jc(e,t))&&(Le=Do(C,"onBeforeInput"),0<Le.length&&(he=new ga("onBeforeInput","beforeinput",null,t,P),K.push({event:he,listeners:Le}),he.data=Te)),gg(K,e,C,t,P)}Ep(K,n)})}function Wa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Do(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=it(e,t),l!=null&&r.unshift(Wa(e,l,o)),l=it(e,n),l!=null&&r.push(Wa(e,l,o))),e.tag===3)return r;e=e.return}return[]}function xg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kp(e,n,t,r,l){for(var o=n._reactName,m=[];t!==null&&t!==r;){var g=t,k=g.alternate,C=g.stateNode;if(g=g.tag,k!==null&&k===r)break;g!==5&&g!==26&&g!==27||C===null||(k=C,l?(C=it(t,o),C!=null&&m.unshift(Wa(t,C,k))):l||(C=it(t,o),C!=null&&m.push(Wa(t,C,k)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var wg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function Np(e){return(typeof e=="string"?e:""+e).replace(wg,`
`).replace(Eg,"")}function Rp(e,n){return n=Np(n),Np(e)===n}function Ke(e,n,t,r,l,o){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Xr(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Xr(e,""+r);break;case"className":_e(e,"class",r);break;case"tabIndex":_e(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(e,t,r);break;case"style":Kr(e,r,o);break;case"data":if(n!=="object"){_e(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=Ul(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Ke(e,n,"name",l.name,l,null),Ke(e,n,"formEncType",l.formEncType,l,null),Ke(e,n,"formMethod",l.formMethod,l,null),Ke(e,n,"formTarget",l.formTarget,l,null)):(Ke(e,n,"encType",l.encType,l,null),Ke(e,n,"method",l.method,l,null),Ke(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=Ul(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=lt);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=Ul(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":De("beforetoggle",e),De("toggle",e),qt(e,"popover",r);break;case"xlinkActuate":pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":pt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":pt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":pt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":pt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":qt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=pi.get(t)||t,qt(e,t,r))}}function rf(e,n,t,r,l,o){switch(t){case"style":Kr(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"children":typeof r=="string"?Xr(e,r):(typeof r=="number"||typeof r=="bigint")&&Xr(e,""+r);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"onClick":r!=null&&(e.onclick=lt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_r.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),o=e[kn]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,l),typeof r=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,l);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):qt(e,t,r)}}}function Un(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var r=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var m=t[o];if(m!=null)switch(o){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ke(e,n,o,m,t,null)}}l&&Ke(e,n,"srcSet",t.srcSet,t,null),r&&Ke(e,n,"src",t.src,t,null);return;case"input":De("invalid",e);var g=o=m=l=null,k=null,C=null;for(r in t)if(t.hasOwnProperty(r)){var P=t[r];if(P!=null)switch(r){case"name":l=P;break;case"type":m=P;break;case"checked":k=P;break;case"defaultChecked":C=P;break;case"value":o=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,n));break;default:Ke(e,n,r,P,t,null)}}Ss(e,o,g,k,C,m,l,!1);return;case"select":De("invalid",e),r=m=o=null;for(l in t)if(t.hasOwnProperty(l)&&(g=t[l],g!=null))switch(l){case"value":o=g;break;case"defaultValue":m=g;break;case"multiple":r=g;default:Ke(e,n,l,g,t,null)}n=o,t=m,e.multiple=!!r,n!=null?br(e,!!r,n,!1):t!=null&&br(e,!!r,t,!0);return;case"textarea":De("invalid",e),o=l=r=null;for(m in t)if(t.hasOwnProperty(m)&&(g=t[m],g!=null))switch(m){case"value":r=g;break;case"defaultValue":l=g;break;case"children":o=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(a(91));break;default:Ke(e,n,m,g,t,null)}$(e,r,l,o);return;case"option":for(k in t)if(t.hasOwnProperty(k)&&(r=t[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ke(e,n,k,r,t,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(r=0;r<Za.length;r++)De(Za[r],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(r=t[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ke(e,n,C,r,t,null)}return;default:if(mi(n)){for(P in t)t.hasOwnProperty(P)&&(r=t[P],r!==void 0&&rf(e,n,P,r,t,void 0));return}}for(g in t)t.hasOwnProperty(g)&&(r=t[g],r!=null&&Ke(e,n,g,r,t,null))}function Sg(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,m=null,g=null,k=null,C=null,P=null;for(Y in t){var K=t[Y];if(t.hasOwnProperty(Y)&&K!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":k=K;default:r.hasOwnProperty(Y)||Ke(e,n,Y,null,r,K)}}for(var L in r){var Y=r[L];if(K=t[L],r.hasOwnProperty(L)&&(Y!=null||K!=null))switch(L){case"type":o=Y;break;case"name":l=Y;break;case"checked":C=Y;break;case"defaultChecked":P=Y;break;case"value":m=Y;break;case"defaultValue":g=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,n));break;default:Y!==K&&Ke(e,n,L,Y,r,K)}}In(e,m,g,k,C,P,o,l);return;case"select":Y=m=g=L=null;for(o in t)if(k=t[o],t.hasOwnProperty(o)&&k!=null)switch(o){case"value":break;case"multiple":Y=k;default:r.hasOwnProperty(o)||Ke(e,n,o,null,r,k)}for(l in r)if(o=r[l],k=t[l],r.hasOwnProperty(l)&&(o!=null||k!=null))switch(l){case"value":L=o;break;case"defaultValue":g=o;break;case"multiple":m=o;default:o!==k&&Ke(e,n,l,o,r,k)}n=g,t=m,r=Y,L!=null?br(e,!!t,L,!1):!!r!=!!t&&(n!=null?br(e,!!t,n,!0):br(e,!!t,t?[]:"",!1));return;case"textarea":Y=L=null;for(g in t)if(l=t[g],t.hasOwnProperty(g)&&l!=null&&!r.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ke(e,n,g,null,r,l)}for(m in r)if(l=r[m],o=t[m],r.hasOwnProperty(m)&&(l!=null||o!=null))switch(m){case"value":L=l;break;case"defaultValue":Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(a(91));break;default:l!==o&&Ke(e,n,m,l,r,o)}di(e,L,Y);return;case"option":for(var de in t)if(L=t[de],t.hasOwnProperty(de)&&L!=null&&!r.hasOwnProperty(de))switch(de){case"selected":e.selected=!1;break;default:Ke(e,n,de,null,r,L)}for(k in r)if(L=r[k],Y=t[k],r.hasOwnProperty(k)&&L!==Y&&(L!=null||Y!=null))switch(k){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Ke(e,n,k,L,r,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in t)L=t[be],t.hasOwnProperty(be)&&L!=null&&!r.hasOwnProperty(be)&&Ke(e,n,be,null,r,L);for(C in r)if(L=r[C],Y=t[C],r.hasOwnProperty(C)&&L!==Y&&(L!=null||Y!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(137,n));break;default:Ke(e,n,C,L,r,Y)}return;default:if(mi(n)){for(var Qe in t)L=t[Qe],t.hasOwnProperty(Qe)&&L!==void 0&&!r.hasOwnProperty(Qe)&&rf(e,n,Qe,void 0,r,L);for(P in r)L=r[P],Y=t[P],!r.hasOwnProperty(P)||L===Y||L===void 0&&Y===void 0||rf(e,n,P,L,r,Y);return}}for(var j in t)L=t[j],t.hasOwnProperty(j)&&L!=null&&!r.hasOwnProperty(j)&&Ke(e,n,j,null,r,L);for(K in r)L=r[K],Y=t[K],!r.hasOwnProperty(K)||L===Y||L==null&&Y==null||Ke(e,n,K,L,r,Y)}function Tp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],o=l.transferSize,m=l.initiatorType,g=l.duration;if(o&&g&&Tp(m)){for(m=0,g=l.responseEnd,r+=1;r<t.length;r++){var k=t[r],C=k.startTime;if(C>g)break;var P=k.transferSize,K=k.initiatorType;P&&Tp(K)&&(k=k.responseEnd,m+=P*(k<g?1:(g-C)/(k-C)))}if(--r,n+=8*(o+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var lf=null,af=null;function Ao(e){return e.nodeType===9?e:e.ownerDocument}function Mp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var of=null;function Ng(){var e=window.event;return e&&e.type==="popstate"?e===of?!1:(of=e,!0):(of=null,!1)}var Dp=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(e){return Ap.resolve(null).then(e).catch(Mg)}:Dp;function Mg(e){setTimeout(function(){throw e})}function yl(e){return e==="head"}function Op(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(l),Qi(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")Ja(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ja(t);for(var o=t.firstChild;o;){var m=o.nextSibling,g=o.nodeName;o[Kn]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=m}}else t==="body"&&Ja(e.ownerDocument.body);t=l}while(t);Qi(n)}function Cp(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function cf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":cf(t),nr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function jg(e,n,t,r){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Kn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function Dg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function Bp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gt(e.nextSibling),e===null))return null;return e}function uf(e){return e.data==="$?"||e.data==="$~"}function ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ag(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Gt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var df=null;function Lp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Gt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function zp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Up(e,n,t){switch(n=Ao(t),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ja(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);nr(e)}var Vt=new Map,Hp=new Set;function Oo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zr=re.d;re.d={f:Og,r:Cg,D:Bg,C:Lg,L:zg,m:Ug,X:Gg,S:Hg,M:Vg};function Og(){var e=zr.f(),n=So();return e||n}function Cg(e){var n=nt(e);n!==null&&n.tag===5&&n.type==="form"?tm(n):zr.r(e)}var Fi=typeof document>"u"?null:document;function Gp(e,n,t){var r=Fi;if(r&&typeof n=="string"&&n){var l=Vn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Hp.has(l)||(Hp.add(l),e={rel:e,crossOrigin:t,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Un(n,"link",e),nn(n),r.head.appendChild(n)))}}function Bg(e){zr.D(e),Gp("dns-prefetch",e,null)}function Lg(e,n){zr.C(e,n),Gp("preconnect",e,n)}function zg(e,n,t){zr.L(e,n,t);var r=Fi;if(r&&e&&n){var l='link[rel="preload"][as="'+Vn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Vn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Vn(t.imageSizes)+'"]')):l+='[href="'+Vn(e)+'"]';var o=l;switch(n){case"style":o=Xi(e);break;case"script":o=Ki(e)}Vt.has(o)||(e=v({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Vt.set(o,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(es(o))||n==="script"&&r.querySelector(ns(o))||(n=r.createElement("link"),Un(n,"link",e),nn(n),r.head.appendChild(n)))}}function Ug(e,n){zr.m(e,n);var t=Fi;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Vn(r)+'"][href="'+Vn(e)+'"]',o=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ki(e)}if(!Vt.has(o)&&(e=v({rel:"modulepreload",href:e},n),Vt.set(o,e),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ns(o)))return}r=t.createElement("link"),Un(r,"link",e),nn(r),t.head.appendChild(r)}}}function Hg(e,n,t){zr.S(e,n,t);var r=Fi;if(r&&e){var l=Qn(r).hoistableStyles,o=Xi(e);n=n||"default";var m=l.get(o);if(!m){var g={loading:0,preload:null};if(m=r.querySelector(es(o)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Vt.get(o))&&mf(e,t);var k=m=r.createElement("link");nn(k),Un(k,"link",e),k._p=new Promise(function(C,P){k.onload=C,k.onerror=P}),k.addEventListener("load",function(){g.loading|=1}),k.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Co(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:g},l.set(o,m)}}}function Gg(e,n){zr.X(e,n);var t=Fi;if(t&&e){var r=Qn(t).hoistableScripts,l=Ki(e),o=r.get(l);o||(o=t.querySelector(ns(l)),o||(e=v({src:e,async:!0},n),(n=Vt.get(l))&&pf(e,n),o=t.createElement("script"),nn(o),Un(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Vg(e,n){zr.M(e,n);var t=Fi;if(t&&e){var r=Qn(t).hoistableScripts,l=Ki(e),o=r.get(l);o||(o=t.querySelector(ns(l)),o||(e=v({src:e,async:!0,type:"module"},n),(n=Vt.get(l))&&pf(e,n),o=t.createElement("script"),nn(o),Un(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Vp(e,n,t,r){var l=(l=ne.current)?Oo(l):null;if(!l)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Xi(t.href),t=Qn(l).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Xi(t.href);var o=Qn(l).hoistableStyles,m=o.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=l.querySelector(es(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Vt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Vt.set(e,t),o||Ig(l,e,t,m.state))),n&&r===null)throw Error(a(528,""));return m}if(n&&r!==null)throw Error(a(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ki(t),t=Qn(l).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Xi(e){return'href="'+Vn(e)+'"'}function es(e){return'link[rel="stylesheet"]['+e+"]"}function Ip(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Ig(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Un(n,"link",t),nn(n),e.head.appendChild(n))}function Ki(e){return'[src="'+Vn(e)+'"]'}function ns(e){return"script[async]"+e}function Yp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Vn(t.href)+'"]');if(r)return n.instance=r,nn(r),r;var l=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),nn(r),Un(r,"style",l),Co(r,t.precedence,e),n.instance=r;case"stylesheet":l=Xi(t.href);var o=e.querySelector(es(l));if(o)return n.state.loading|=4,n.instance=o,nn(o),o;r=Ip(t),(l=Vt.get(l))&&mf(r,l),o=(e.ownerDocument||e).createElement("link"),nn(o);var m=o;return m._p=new Promise(function(g,k){m.onload=g,m.onerror=k}),Un(o,"link",r),n.state.loading|=4,Co(o,t.precedence,e),n.instance=o;case"script":return o=Ki(t.src),(l=e.querySelector(ns(o)))?(n.instance=l,nn(l),l):(r=t,(l=Vt.get(o))&&(r=v({},t),pf(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),nn(l),Un(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Co(r,t.precedence,e));return n.instance}function Co(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,o=l,m=0;m<r.length;m++){var g=r[m];if(g.dataset.precedence===n)o=g;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Bo=null;function $p(e,n,t){if(Bo===null){var r=new Map,l=Bo=new Map;l.set(t,r)}else l=Bo,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[Kn]||o[fn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(n)||"";m=e+m;var g=r.get(m);g?g.push(o):r.set(m,[o])}}return r}function Pp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Yg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $g(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Xi(r.href),o=n.querySelector(es(l));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Lo.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,nn(o);return}o=n.ownerDocument||n,r=Ip(r),(l=Vt.get(l))&&mf(r,l),o=o.createElement("link"),nn(o);var m=o;m._p=new Promise(function(g,k){m.onload=g,m.onerror=k}),Un(o,"link",r),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Lo.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var hf=0;function Pg(e,n){return e.stylesheets&&e.count===0&&Uo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&Uo(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&hf===0&&(hf=62500*kg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Uo(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>hf?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Lo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zo=null;function Uo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zo=new Map,n.forEach(qg,e),zo=null,Lo.call(e))}function qg(e,n){if(!(n.state.loading&4)){var t=zo.get(e);if(t)var r=t.get(null);else{t=new Map,zo.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var m=l[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),r=m)}r&&t.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),o=t.get(m)||r,o===r&&t.set(null,l),t.set(m,l),this.count++,r=Lo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var ts={$$typeof:ie,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Fg(e,n,t,r,l,o,m,g,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=er(0),this.hiddenUpdates=er(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Fp(e,n,t,r,l,o,m,g,k,C,P,K){return e=new Fg(e,n,t,m,k,C,P,K,g),n=1,o===!0&&(n|=24),o=bt(3,null,null,n),e.current=o,o.stateNode=e,n=Fc(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:r,isDehydrated:t,cache:n},Zc(o),e}function Xp(e){return e?(e=Ni,e):Ni}function Kp(e,n,t,r,l,o){l=Xp(l),r.context===null?r.context=l:r.pendingContext=l,r=ol(n),r.payload={element:t},o=o===void 0?null:o,o!==null&&(r.callback=o),t=cl(e,r,n),t!==null&&(ut(t,e,n),Ca(t,e,n))}function Qp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function _f(e,n){Qp(e,n),(e=e.alternate)&&Qp(e,n)}function Zp(e){if(e.tag===13||e.tag===31){var n=ql(e,67108864);n!==null&&ut(n,e,67108864),_f(e,67108864)}}function Wp(e){if(e.tag===13||e.tag===31){var n=Et();n=$r(n);var t=ql(e,n);t!==null&&ut(t,e,n),_f(e,n)}}var Ho=!0;function Xg(e,n,t,r){var l=G.T;G.T=null;var o=re.p;try{re.p=2,gf(e,n,t,r)}finally{re.p=o,G.T=l}}function Kg(e,n,t,r){var l=G.T;G.T=null;var o=re.p;try{re.p=8,gf(e,n,t,r)}finally{re.p=o,G.T=l}}function gf(e,n,t,r){if(Ho){var l=bf(r);if(l===null)tf(e,n,r,Go,t),eh(e,r);else if(Zg(l,e,n,t,r))r.stopPropagation();else if(eh(e,r),n&4&&-1<Qg.indexOf(e)){for(;l!==null;){var o=nt(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=ln(o.pendingLanes);if(m!==0){var g=o;for(g.pendingLanes|=2,g.entangledLanes|=2;m;){var k=1<<31-Dn(m);g.entanglements[1]|=k,m&=~k}cr(o),(Ye&6)===0&&(wo=En()+500,Qa(0))}}break;case 31:case 13:g=ql(o,2),g!==null&&ut(g,o,2),So(),_f(o,2)}if(o=bf(r),o===null&&tf(e,n,r,Go,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else tf(e,n,r,null,t)}}function bf(e){return e=fa(e),yf(e)}var Go=null;function yf(e){if(Go=null,e=jt(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=_(n),e!==null)return e;e=null}else if(t===31){if(e=b(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Go=e,null}function Jp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tl()){case Ml:return 2;case sa:return 8;case jl:case Xn:return 32;case ft:return 268435456;default:return 32}default:return 32}}var vf=!1,vl=null,xl=null,wl=null,rs=new Map,ls=new Map,El=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eh(e,n){switch(e){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":xl=null;break;case"mouseover":case"mouseout":wl=null;break;case"pointerover":case"pointerout":rs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(n.pointerId)}}function is(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=nt(n),n!==null&&Zp(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Zg(e,n,t,r,l){switch(n){case"focusin":return vl=is(vl,e,n,t,r,l),!0;case"dragenter":return xl=is(xl,e,n,t,r,l),!0;case"mouseover":return wl=is(wl,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return rs.set(o,is(rs.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,ls.set(o,is(ls.get(o)||null,e,n,t,r,l)),!0}return!1}function nh(e){var n=jt(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=_(t),n!==null){e.blockedOn=n,oa(e.priority,function(){Wp(t)});return}}else if(n===31){if(n=b(t),n!==null){e.blockedOn=n,oa(e.priority,function(){Wp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=bf(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);yr=r,t.target.dispatchEvent(r),yr=null}else return n=nt(t),n!==null&&Zp(n),e.blockedOn=t,!1;n.shift()}return!0}function th(e,n,t){Vo(e)&&t.delete(n)}function Wg(){vf=!1,vl!==null&&Vo(vl)&&(vl=null),xl!==null&&Vo(xl)&&(xl=null),wl!==null&&Vo(wl)&&(wl=null),rs.forEach(th),ls.forEach(th)}function Io(e,n){e.blockedOn===n&&(e.blockedOn=null,vf||(vf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Wg)))}var Yo=null;function rh(e){Yo!==e&&(Yo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Yo===e&&(Yo=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(yf(r||t)===null)continue;break}var o=nt(t);o!==null&&(e.splice(n,3),n-=3,gu(o,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function Qi(e){function n(k){return Io(k,e)}vl!==null&&Io(vl,e),xl!==null&&Io(xl,e),wl!==null&&Io(wl,e),rs.forEach(n),ls.forEach(n);for(var t=0;t<El.length;t++){var r=El[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<El.length&&(t=El[0],t.blockedOn===null);)nh(t),t.blockedOn===null&&El.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],o=t[r+1],m=l[kn]||null;if(typeof o=="function")m||rh(t);else if(m){var g=null;if(o&&o.hasAttribute("formAction")){if(l=o,m=o[kn]||null)g=m.formAction;else if(yf(l)!==null)continue}else g=m.action;typeof g=="function"?t[r+1]=g:(t.splice(r,3),r-=3),rh(t)}}}function lh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function xf(e){this._internalRoot=e}$o.prototype.render=xf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var t=n.current,r=Et();Kp(t,r,e,n,null,null)},$o.prototype.unmount=xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kp(e.current,2,null,e,null,null),So(),n[mt]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var n=on();e={blockedOn:null,target:e,priority:n};for(var t=0;t<El.length&&n!==0&&n<El[t].priority;t++);El.splice(t,0,e),t===0&&nh(e)}};var ih=i.version;if(ih!=="19.2.7")throw Error(a(527,ih,"19.2.7"));re.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=x(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Jg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Dl=Po.inject(Jg),Sn=Po}catch{}}return ss.createRoot=function(e,n){if(!f(e))throw Error(a(299));var t=!1,r="",l=dm,o=mm,m=pm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Fp(e,1,!1,null,null,t,r,null,l,o,m,lh),e[mt]=n.current,nf(e),new xf(n)},ss.hydrateRoot=function(e,n,t){if(!f(e))throw Error(a(299));var r=!1,l="",o=dm,m=mm,g=pm,k=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.formState!==void 0&&(k=t.formState)),n=Fp(e,1,!0,n,t??null,r,l,k,o,m,g,lh),n.context=Xp(null),t=n.current,r=Et(),r=$r(r),l=ol(r),l.callback=null,cl(t,l,r),t=r,n.current.lanes=t,Ol(n,t),cr(n),e[mt]=n.current,nf(e),new $o(n)},ss.version="19.2.7",ss}var hh;function fb(){if(hh)return Sf.exports;hh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Sf.exports=ub(),Sf.exports}var db=fb();const mb=f_(db),_h=s=>{let i;const c=new Set,a=(x,y)=>{const v=typeof x=="function"?x(i):x;if(!Object.is(v,i)){const S=i;i=y??(typeof v!="object"||v===null)?v:Object.assign({},i,v),c.forEach(V=>V(i,S))}},f=()=>i,b={setState:a,getState:f,getInitialState:()=>E,subscribe:x=>(c.add(x),()=>c.delete(x))},E=i=s(a,f,b);return b},pb=(s=>s?_h(s):_h),hb=s=>s;function _b(s,i=hb){const c=_s.useSyncExternalStore(s.subscribe,_s.useCallback(()=>i(s.getState()),[s,i]),_s.useCallback(()=>i(s.getInitialState()),[s,i]));return _s.useDebugValue(c),c}const gh=s=>{const i=pb(s),c=a=>_b(i,a);return Object.assign(c,i),c},gb=(s=>s?gh(s):gh);function bb(){const s=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(s);else for(let c=0;c<s.length;c+=1)s[c]=Math.floor(Math.random()*256);let i="";for(const c of s)i+=c.toString(16).padStart(2,"0");return i}const Jf="pkp.user",ed="pkp.savedDevices",nd="pkp.ideDrafts",td="pkp.ideSettings",ys="Prototype Version 0.6.7";function ac(s){try{const i=localStorage.getItem(s);return i?JSON.parse(i):null}catch{return null}}function sc(s,i){try{localStorage.setItem(s,JSON.stringify(i))}catch{}}function yb(){const s=ac(Jf);return s&&typeof s.username=="string"&&typeof s.userID=="string"?s:null}function Tf(s){sc(Jf,s)}function nc(){return ac(ed)??[]}function ea(s){sc(ed,s)}function vb(){ea([])}function xb(){try{localStorage.removeItem(Jf),localStorage.removeItem(ed),localStorage.removeItem(nd),localStorage.removeItem(td)}catch{}}function Mf(){var s;return((s=ac(nd))==null?void 0:s.filter(i=>i.path&&typeof i.content=="string"))??[]}function os(s){sc(nd,s)}function bh(){const s=ac(td)??{};return{clearTerminalOnRun:!!s.clearTerminalOnRun,simplifiedErrors:s.simplifiedErrors!==!1}}function wb(s){sc(td,s)}function jf(s){const i=nc(),c=i.findIndex(a=>a.deviceID===s.deviceID);return c>=0?i[c]=s:i.push(s),ea(i),i}function Eb(s){const i=nc().filter(c=>c.deviceID!==s);return ea(i),i}const Yf="b8e06067-62ad-41ba-9231-206ae80ab551",Sb="f897177b-aee8-4767-8ecc-cc694fd5fce0",kb="f897177b-aee8-4767-8ecc-cc694fd5fce1",Df=20,Nb=12,Rb=new TextEncoder,Tb=new TextDecoder;function Mb(s){return new Promise(i=>setTimeout(i,s))}function oc(){return typeof navigator<"u"&&"bluetooth"in navigator}function d_(s){return s?s.startsWith("PicoW-")?s.slice(6):s:"Pico"}async function jb(){if(!oc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Yf]},{namePrefix:"PicoW-"}],optionalServices:[Yf]})}async function m_(){if(!oc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Db{constructor(){me(this,"device",null);me(this,"writeChar",null);me(this,"notifyChar",null);me(this,"buffer","");me(this,"writeQueue",Promise.resolve());me(this,"disconnectNotified",!1);me(this,"onLine",()=>{});me(this,"onDisconnect",()=>{});me(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=Tb.decode(c.value.buffer);let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});me(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var f;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=i.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Yf);this.writeChar=await a.getCharacteristic(Sb),this.notifyChar=await a.getCharacteristic(kb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=Rb.encode(`${i}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let p=0;p<c.length;p+=Df){const _=c.slice(p,p+Df);await f(_),p+Df<c.length&&await Mb(Nb)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class Ab{constructor(i,c){me(this,"send");me(this,"onMessage");me(this,"inActive",!1);me(this,"inExpectedTotal",0);me(this,"inStreamId",0);me(this,"inParts",new Map);me(this,"inProgress",null);me(this,"outPendingLines",null);me(this,"outWaitingAck",!1);me(this,"outStreamId",0);me(this,"outNextStreamId",1);me(this,"outCache",new Map);me(this,"outProgress",null);me(this,"outResolve",null);me(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const f=i.split(","),p=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,_=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;p!==null&&p>0&&(this.inActive=!0,this.inExpectedTotal=p,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const f=i.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const p=parseInt(f[1],10),_=parseInt(f[2],10),b=this.outCache.get(_);p===this.outStreamId&&b&&this.send(b)}return}const c=this.parseNumbered(i);if(c){const{idx:f,payload:p}=c;if(!this.inActive){this.onMessage(p);return}this.inParts.has(f)||(this.inParts.set(f,p),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let b=1;b<=this.inExpectedTotal;b+=1)if(!this.inParts.has(b)){_=b;break}if(_>0&&this.inStreamId>0&&f>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let b=1;b<=this.inExpectedTotal;b+=1){const E=this.inParts.get(b);E!==void 0&&this.onMessage(E)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((p,_)=>{this.outResolve=p,this.outReject=_});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(p){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,p}await f}async flushOutbound(){var i,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const p=this.outPendingLines.length;for(let _=0;_<p;_+=1){const b=this.outPendingLines[_],E=`${_+1}-${b}`;this.outCache.set(_+1,E),await this.send(E),(c=this.outProgress)==null||c.call(this,_+1,p,b)}(a=this.outResolve)==null||a.call(this)}catch(p){(f=this.outReject)==null||f.call(this,p)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:i.slice(c+1)}}}const la=11,vs=31,Ob=2,Cb=60,na=4,ta=40;function Bb(s,i){return Math.max(14,Math.min(56,Math.min(s,i)*.05))}function p_(s,i,c=la,a=vs){const f=Bb(s,i),p=Math.max(1,s-2*f),_=Math.max(1,i-2*f);return{areaW:s,areaH:i,cols:c,rows:a,margin:f,stepX:p/Math.max(1,c-1),stepY:_/Math.max(1,a-1)}}function h_(s,i){return i.margin+s/2*i.stepX}function __(s,i){const c=i.margin+s/2*i.stepY;return i.areaH-c}function gs(s,i){return s.centerX2===null||s.centerY2===null||s.spanX===null||s.spanY===null?null:{cx:h_(s.centerX2,i),cy:__(s.centerY2,i),width:s.spanX*i.stepX,height:s.spanY*i.stepY}}function Lb(s){const i=[];for(let c=0;c<s.cols;c+=1)for(let a=0;a<s.rows;a+=1)i.push({x:s.margin+c*s.stepX,y:s.areaH-(s.margin+a*s.stepY)});return i}function Qo(s,i,c,a,f){const p=(E,x,y,v)=>{const S=x%2,V=v*2;let I=S,F=1/0;for(let D=S;D<=V;D+=2){const B=Math.abs(y(D)-E);B<F&&(F=B,I=D)}return Math.max(x,Math.min(V-x,I))},_=p(s,c,E=>h_(E,f),f.cols-1),b=p(i,a,E=>__(E,f),f.rows-1);return{centerX2:_,centerY2:b}}const si=6e3,zb=15,tc=[32,64,128,192],Ub=si*10,Hb=3500,Gb=8e3,Vb=2,Ib=si,Yb=si*8;function Af(s){return new Promise(i=>setTimeout(i,s))}function Zi(s){if(s!=null&&s.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function yh(s){return s instanceof DOMException&&s.name==="AbortError"}function kl(s){return s.replace(/[\r\n,]/g," ").trim()}class $b{constructor(i={}){me(this,"transport",new Db);me(this,"stream");me(this,"events");me(this,"waiters",[]);me(this,"collectingLayout",!1);me(this,"layoutBuffer",[]);me(this,"layoutResolve",null);me(this,"collectingLines",!1);me(this,"lineBuffer",[]);me(this,"lineResolve",null);me(this,"lineReject",null);me(this,"lineCollectId",0);me(this,"controlPumpActive",!1);me(this,"pendingButtons",[]);me(this,"pendingSliders",new Map);me(this,"pendingToggles",new Map);me(this,"pendingJoysticks",new Map);me(this,"pendingDpads",[]);me(this,"expectingDisconnect",!1);me(this,"disconnectMessage",null);me(this,"busy",!1);me(this,"fsCapabilities",null);this.events=i,this.stream=new Ab(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return d_((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,i,c)}progress(i,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,i,c)}onDeviceMessage(i){var a,f;if(i==="disconnect"||i==="disconnect_private"){const p=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=p,this.log("warning",p),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const p=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,p),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const p=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,p),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(p=>p.match(i));if(c>=0){const p=this.waiters[c];this.waiters.splice(c,1),clearTimeout(p.timer),p.resolve(i)}}waitFor(i,c,a){return new Promise((f,p)=>{const _=setTimeout(()=>{const b=this.waiters.findIndex(E=>E.timer===_);b>=0&&this.waiters.splice(b,1),p(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:f,reject:p,timer:_})})}async collectLines(i,c,a,f,p){Zi(f);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(p??null);const b=new Promise((E,x)=>{let y=!1;const v=()=>this.lineCollectId===_,S=()=>{y=!0,v()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",I)},V=B=>{y||(clearTimeout(F),v()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),S(),x(B))},I=()=>{V(new DOMException("BLE file read cancelled","AbortError"))},F=setTimeout(()=>{v()&&V(new Error(`Timeout: ${a}`))},c);this.lineResolve=E,this.lineReject=V;const D=this.lineResolve;this.lineResolve=B=>{v()&&(clearTimeout(F),S(),D==null||D(B))},f==null||f.addEventListener("abort",I,{once:!0})});return await this.transport.writeLine(i),b}async exchange(i,c,a,f=3){let p;for(let _=1;_<=f;_+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,si,a)}catch(b){p=b,this.log("warning",`${a}: forsøg ${_}/${f} mislykkedes`)}throw p instanceof Error?p:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var se,oe,pe;await Af(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",W=>W==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",W=>W==="unowned"||W.startsWith("unowned,")||W.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((se=c.split(",")[1])==null?void 0:se.trim())||void 0};const a=c.split(","),f=a[1]??"",p=a[2]!==void 0&&parseInt(a[2],10)||0,_=a[3]!==void 0?parseInt(a[3],10)===1:!0,b=a[4]!==void 0?parseInt(a[4],10)===1:!1,E=a.length>=7,x=E?parseInt(a[5]??"0",10)===1:b,y=((oe=a[E?6:5])==null?void 0:oe.trim())||void 0,v=((pe=a[E?7:6])==null?void 0:pe.trim())||void 0;await this.exchange("ACK:ownership",W=>W==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const S=await this.exchange(`request_permission,${i.userID},${kl(i.username)}`,W=>W.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const V=S.split(",").filter(W=>/^\d+$/.test(W)),I=V.length>=1?parseInt(V[0]??"0",10):0,F=V.length>=2?parseInt(V[1]??"0",10):0,D=V.length>=3?parseInt(V[2]??"0",10):F;if(I===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:y,canOthersConnect:_};const B=i.userID===f,H=F===1||B,ie=D===1||B;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:y,deviceName:v,iconID:p,canEdit:H,canEditCode:ie,isOwnedByMe:B,canOthersConnect:_,canOthersEdit:b,canOthersEditCode:x}}async create(i,c,a,f,p,_,b){const E=a?1:0,x=a&&f?1:0,y=a&&p?1:0;await this.exchange(`create,${i.userID},${kl(i.username)},${c},${E},${x},${y},${_},${b}`,v=>v==="ACK:create","create")}async updateDeviceSettings(i,c,a,f,p,_,b){const E=c?1:0,x=c&&a?1:0,y=c&&f?1:0;await this.exchange(`settings_update,${i},${E},${x},${y},${p},${_},${kl(b??"")}`,v=>v==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,f)=>{this.layoutResolve=a;const p=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},si*2),_=this.layoutResolve;this.layoutResolve=b=>{clearTimeout(p),_==null||_(b)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(f=>{const p=b=>b===null?"n":String(b),_=`update,${f.type},${f.name},${p(f.centerX2)},${p(f.centerY2)},${p(f.spanX)},${p(f.spanY)},${f.rotation}`;return f.type==="slider"?`${_},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${_},${f.toggleInitial?1:0}`:f.type==="radar"?[_,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[_,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):_});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",si*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${kl(i)}`,si*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,p,_]=a.split(","),b=f==="file"||f==="dir"?f:"unknown",E=parseInt(_??"",10),x=p||"/";return{name:x.split("/").filter(Boolean).pop()??x,path:x,type:b,...Number.isFinite(E)&&E>=0?{size:E}:{}}})}handleRadarLine(i){var _,b,E;const c=i.split(",");if(c.length<4)return;const a=(_=c[1])==null?void 0:_.trim(),f=parseFloat(c[2]??""),p=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(p)||((E=(b=this.events).onRadar)==null||E.call(b,a,f,p),this.log("info",`rx: ${i}`))}handleTextLine(i){var b,E;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=i.slice(c+1,a),p=i.slice(a+1),_=f==null?void 0:f.trim();_&&((E=(b=this.events).onText)==null||E.call(b,_,p),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var p,_,b;const c=i.split(",");if(c.length<3)return;const a=(p=c[1])==null?void 0:p.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((b=(_=this.events).onToggleState)==null||b.call(_,a,f===1),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(i,f,c,a)}catch(p){if(a!=null&&a.aborted||yh(p)||!f.pageRead)throw p;this.log("warning",p instanceof Error?`fs_read_stream fejlede; bruger paged read: ${p.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",Ib,"fs_capabilities",i),a=c.find(y=>y.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(y=>y.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const p=f.split(","),_=new Map;for(let y=1;y<p.length-1;y+=2)_.set(p[y],p[y+1]);const b=parseInt(_.get("max_page")??"",10),E=parseInt(_.get("stream_chunk")??"",10),x={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(b)&&b>0?b:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(E)&&E>0?E:128};if(!x.pageRead&&!x.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=x,x}async readTextPaged(i,c,a){const f=await this.getFilesystemCapabilities(a);let p=0,_=Pb(f.maxPageSize),b=0,E=null,x="";const y=`Indlæser ${Of(i)}...`;Zi(a),c==null||c(5,y);for(let v=0;v<512;v+=1){Zi(a),b===0&&(c==null||c(7,y));const V=await this.readPageWithRetry(i,b,p,_,a),I=V.lines;p=V.nextPageSizeIndex,_=V.maxPageSizeIndex,Zi(a);const F=I.find(J=>J.startsWith("ERR"));if(F)throw new Error(F);const D=I.find(J=>J.startsWith("fs_page,"));if(!D)throw new Error("ERR: fs_read_page missing data");const[,B,H,ie,se=""]=D.split(",",5);if(B!==i)throw new Error("ERR: fs_read_page stale data");const oe=parseInt(H??"",10),pe=parseInt(ie??"",10);if(!Number.isFinite(oe)||oe!==b||!Number.isFinite(pe))throw new Error("ERR: fs_read_page invalid data");E=pe,x+=se,b+=Math.floor(se.length/2);const W=E>0?8+Math.min(87,Math.round(b/E*87)):95;if(c==null||c(W,y),b>=E||se.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(xh(x))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,f,p){let _,b=Math.min(a,f);for(;b>=0;){const E=tc[b],x=b===0?Vb:1,y=b===0?Gb:Hb;for(let v=1;v<=x;v+=1){Zi(p);try{return{lines:await this.collectLines(`fs_read_page,${kl(i)},${c},${E}`,y,`fs_read_page ${c}`,p),nextPageSizeIndex:Math.min(b+1,f),maxPageSizeIndex:f}}catch(S){if(p!=null&&p.aborted||yh(S))throw S;if(_=S,v<x||b>0){const I=b>0&&v>=x?tc[b-1]:E;this.log("warning",`fs_read_page ${c} (${E} bytes) fejlede; prøver ${I} bytes`),await Af(80+v*80)}}}if(b===0)break;f=Math.max(0,b-1),b=f}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,f){const p=`Indlæser ${Of(i)}...`,_=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,p);const b=await this.collectLines(`fs_read_stream,${kl(i)},${_}`,Yb,`fs_read_stream ${i}`,f,(W,J)=>{const Ne=8+Math.round(Math.min(W,J)/Math.max(1,J)*87);a==null||a(Math.min(95,Ne),p)});Zi(f);const E=b.find(W=>W.startsWith("ERR"));if(E)throw new Error(E);const x=b.find(W=>W.startsWith("fs_stream_begin,")),y=b.find(W=>W.startsWith("fs_stream_end,"));if(!x||!y)throw new Error("ERR: fs_read_stream missing metadata");const[,v,S]=x.split(",",4),[,V,I,F]=y.split(",",4),D=parseInt(S??"",10),B=parseInt(I??"",10),H=parseInt(F??"",10);if(v!==i||V!==i||!Number.isFinite(D)||D!==B||!Number.isFinite(H))throw new Error("ERR: fs_read_stream invalid metadata");let ie=0,se="";for(const W of b){if(!W.startsWith("fs_stream_chunk,"))continue;const[,J,Ne=""]=W.split(",",3),ye=parseInt(J??"",10);if(!Number.isFinite(ye)||ye!==ie||Ne.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");se+=Ne,ie+=Math.floor(Ne.length/2)}if(ie!==D)throw new Error("ERR: fs_read_stream size mismatch");const oe=xh(se);if(vh(oe)!==H)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(oe)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${kl(i)}`,y=>y==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),p=[...f].map(y=>y.toString(16).padStart(2,"0")).join(""),_=[];for(let y=0;y<p.length;y+=160)_.push(`fs_write_chunk,${p.slice(y,y+160)}`);_.push("fs_write_end");const b=vh(f),E=this.waitFor(y=>y==="ACK:fs_write_done"||y.startsWith("ACK:fs_write_done,")||y.startsWith("ERR"),Ub,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(y,v,S)=>{if(!S.startsWith("fs_write_chunk,"))return;const V=Math.min(f.length,y*80),I=18+Math.round(y/Math.max(1,v-1)*67);a==null||a(Math.min(85,I),`Sender ${V}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const x=await E;if(x.startsWith("ERR"))throw new Error(x);if(x.startsWith("ACK:fs_write_done,")){const[,y,v]=x.split(",",3),S=parseInt(y??"",10),V=parseInt(v??"",10);if(S!==f.length||V!==b)throw new Error(`ERR: BLE-verificering fejlede for ${Of(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${kl(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}async ping(){await this.exchange("HELLO",i=>i==="ACK:HELLO","heartbeat",1)}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Af(zb)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[_,b]=a.value;return this.pendingSliders.delete(_),b}const f=this.pendingToggles.entries().next();if(!f.done){const[_,b]=f.value;return this.pendingToggles.delete(_),b}const p=this.pendingJoysticks.entries().next();if(!p.done){const[_,b]=p.value;return this.pendingJoysticks.delete(_),b}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const p of this.waiters)clearTimeout(p.timer),p.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,i)}}function Pb(s){let i=0;for(let c=0;c<tc.length;c+=1)tc[c]<=s&&(i=c);return i}function Of(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")||s}function vh(s){let i=0;for(const c of s)i=i+c>>>0;return i}function xh(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}function wh(s){const i=(c,a)=>Number.isFinite(c)?Math.max(Ob,Math.min(Cb,c)):a;for(const c of s){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),p=i(parseInt(f[1],10),la),_=i(parseInt(f[2],10),vs);return{cols:p,rows:_}}}return{cols:la,rows:vs}}function Eh(s){const i=new Map;for(const c of s){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[p,_,b,E,x,y,v,S,V,I,F,D,B]=f;if(p!=="button"&&p!=="slider"&&p!=="toggle"&&p!=="radar"&&p!=="text"&&p!=="joystick"&&p!=="dpad"||i.has(_))continue;const H=re=>{if(re==="n")return null;const ue=parseInt(re,10);return Number.isNaN(ue)?null:ue},ie=parseInt(v,10)||0,se=S!==void 0?parseInt(S,10):0,oe=V!==void 0?parseInt(V,10):100,pe=["none","bottom","middle","top"].includes(I??"")?I:"none",W=S!==void 0?parseInt(S,10)===1:!1,J=S!==void 0?parseFloat(S):0,Ne=V!==void 0?parseFloat(V):180,ye=I!==void 0?parseFloat(I):200,we=F!==void 0?parseInt(F,10):1200,Z=(re,ue)=>["none","bottom","middle","top"].includes(re??"")?re:ue,$e=S!==void 0?parseInt(S,10):-100,Ae=V!==void 0?parseInt(V,10):100,Pe=I!==void 0?parseInt(I,10):-100,G=F!==void 0?parseInt(F,10):100;i.set(_,{type:p,name:_,centerX2:H(b),centerY2:H(E),spanX:H(x),spanY:H(y),rotation:[0,90,180,270].includes(ie)?ie:0,...p==="slider"?{sliderMin:Number.isFinite(se)?se:0,sliderMax:Number.isFinite(oe)?oe:100,sliderRecenter:pe}:{},...p==="toggle"?{toggleInitial:W}:{},...p==="radar"?{radarMinAngle:Number.isFinite(J)?J:0,radarMaxAngle:Number.isFinite(Ne)?Ne:180,radarMaxDistance:Number.isFinite(ye)&&ye>0?ye:200,radarFadeMs:Number.isFinite(we)&&we>0?we:1200}:{},...p==="joystick"?{joystickXMin:Number.isFinite($e)?$e:-100,joystickXMax:Number.isFinite(Ae)&&Ae!==$e?Ae:100,joystickYMin:Number.isFinite(Pe)?Pe:-100,joystickYMax:Number.isFinite(G)&&G!==Pe?G:100,joystickXRecenter:Z(D,"middle"),joystickYRecenter:Z(B,"middle")}:{}})}return[...i.values()]}let le=null,cs=null,us=null,qo=!1,Sh=0,Ur=!1;function qb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function kh(s){return new Promise(i=>setTimeout(i,s))}function Cf(s,i){const c=i.userID.toLowerCase();return s.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?i.username:a.ownerName}})}function Bf(s,i){return(s.name?d_(s.name):"")||(i==null?void 0:i.deviceName)||"Pico"}function Fb(s){return Object.fromEntries(s.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function Nh(s,i){const c=Fb(s);for(const a of s)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const ae=gb((s,i)=>{function c(y,v){s(S=>({logs:[{level:y,message:v,time:qb()},...S.logs].slice(0,200)}))}function a(y){cs&&clearTimeout(cs),Sh+=1,s({toast:{message:y,id:Sh}}),cs=setTimeout(()=>s({toast:null}),4500)}function f(y=null){E(),s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:y})}function p(y){return{deviceID:y.deviceID,deviceName:y.deviceName,ownerID:y.ownerID,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.ownerName}}function _(y){const{screen:v,active:S,picoIdeOrigin:V}=i();if(E(),Ur){Ur=!1;return}y&&(c("warning",y),a(y)),(v==="control"||v==="connection"||v==="create"||v==="ide"&&V==="control")&&f(S?p(S):null)}function b(){us||(us=setInterval(()=>{x()},3e3))}function E(){us&&(clearInterval(us),us=null,qo=!1)}async function x(){if(qo)return;const{screen:y,active:v}=i();if(!(!!(le!=null&&le.connected)&&!!v&&y==="control")){E();return}qo=!0;try{await(le==null?void 0:le.ping())}catch{c("warning","Bluetooth-forbindelsen svarer ikke længere."),await(le==null?void 0:le.disconnect().catch(()=>{})),_("Bluetooth-forbindelsen svarede ikke og blev afbrudt.")}finally{qo=!1}}return le=new $b({onProgress:(y,v)=>s({progress:{value:y,label:v}}),onLog:(y,v)=>c(y,v),onRadar:(y,v,S)=>{const V=Date.now(),I={id:`${V}-${Math.random().toString(36).slice(2)}`,angle:v,distance:S,createdAt:V};s(F=>{const D=F.layout.find(ie=>ie.type==="radar"&&ie.name===y),B=(D==null?void 0:D.radarFadeMs)??1200,H=F.radarPings[y]??[];return{radarPings:{...F.radarPings,[y]:[...H.filter(ie=>V-ie.createdAt<=B),I].slice(-80)}}})},onText:(y,v)=>{s(S=>({textValues:{...S.textValues,[y]:v}}))},onToggleState:(y,v)=>{s(S=>({toggleValues:{...S.toggleValues,[y]:v}}))},onDisconnect:y=>_(y)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const y=yb(),v=y?Cf(nc(),y):nc();y&&ea(v),s({user:y,savedDevices:v,splashTarget:y?"dashboard":"intro"})},finishSplash:()=>{const y=i().splashTarget;s({screen:y??"intro"})},createUser:y=>{const v=y.trim();if(!v)return;const S={username:v,userID:bb()};Tf(S),s({user:S,screen:"dashboard"})},findDevice:async()=>{try{const y=await jb();await i().connectToDevice(y)}catch(y){y instanceof Error&&y.name!=="NotFoundError"&&c("error",y.message)}},connectToDevice:async(y,v)=>{var V,I,F;const S=i().user;if(!(!S||!le)){Ur=!1,s({screen:"connection",connecting:{name:Bf(y,v),iconID:(v==null?void 0:v.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await le.connect(y);const D=await le.runHandshake(S),B=y.id,H=(D.kind==="owned"||D.kind==="unowned")&&((V=D.deviceName)==null?void 0:V.trim())||Bf(y,v);if(s(W=>W.connecting?{connecting:{...W.connecting,name:H}}:{}),D.kind==="denied"){const J=`Du kan ikke forbinde, fordi ${((I=D.ownerName)==null?void 0:I.trim())||((F=v==null?void 0:v.ownerName)==null?void 0:F.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",J),a(J),s({screen:"dashboard",connecting:null}),await le.disconnect();return}if(D.kind==="unowned"){s({active:{deviceID:B,deviceName:H,ownerID:S.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:S.username,gridCols:la,gridRows:vs},screen:"create"});return}const ie={deviceID:B,deviceName:H,ownerID:D.ownerID,deviceIconID:D.iconID,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?S.username:D.ownerName??(v==null?void 0:v.ownerName)};s({savedDevices:jf(ie)});const se=await le.requestLayout(),oe=wh(se),pe=Eh(se);s({layout:pe,sliderValues:{},toggleValues:Nh(pe,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:B,deviceName:H,ownerID:D.ownerID,iconID:D.iconID,canEdit:D.canEdit,canEditCode:D.canEditCode,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?S.username:D.ownerName??(v==null?void 0:v.ownerName),gridCols:oe.cols,gridRows:oe.rows},screen:"control",connecting:null,connectionLost:null}),b()}catch(D){const B=D instanceof Error?D.message:"Forbindelsen mislykkedes.";c("error",B),a("Forbindelsen mislykkedes."),s({screen:"dashboard",connecting:null}),await le.disconnect().catch(()=>{})}}},finishCreate:async(y,v,S,V,I,F)=>{const{user:D,active:B}=i();if(!(!D||!B||!le))try{le.setBusy(!0),await le.create(D,y,v,S,V,I,F),le.setBusy(!1);const H={deviceID:B.deviceID,deviceName:B.deviceName,ownerID:D.userID,deviceIconID:y,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&V,isOwnedByMe:!0,ownerName:D.username};s({savedDevices:jf(H)});const ie=await le.requestLayout(),se=wh(ie),oe=Eh(ie);s({layout:oe,sliderValues:{},toggleValues:Nh(oe,i().toggleValues),radarPings:{},textValues:{},active:{...B,ownerID:D.userID,iconID:y,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&V,ownerName:D.username,gridCols:se.cols,gridRows:se.rows},screen:"control"}),b()}catch(H){le.setBusy(!1);const ie=H instanceof Error?H.message:"Oprettelse mislykkedes.";c("error",ie),a("Oprettelse mislykkedes."),s({screen:"dashboard"}),await le.disconnect().catch(()=>{})}},saveDeviceSettings:async(y,v,S,V,I,F)=>{const{active:D,user:B}=i();if(!(!D||!le||!D.isOwnedByMe))try{le.setBusy(!0),await le.updateDeviceSettings(y,v,S,V,I,F,B==null?void 0:B.username);const H={...D,iconID:y,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&V,ownerName:(B==null?void 0:B.username)??D.ownerName,gridCols:I,gridRows:F},ie={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(B==null?void 0:B.userID),deviceIconID:y,canOthersConnect:v,canOthersEdit:v&&S,canOthersEditCode:v&&V,isOwnedByMe:!0,ownerName:(B==null?void 0:B.username)??D.ownerName};s({active:H,savedDevices:jf(ie)}),a("Enhedsindstillinger gemt.")}catch(H){c("error",H instanceof Error?H.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{le.setBusy(!1)}},cancelCreate:async()=>{le&&await le.disconnect().catch(()=>{}),s({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Ur=!0,f(null),le&&await le.disconnect().catch(()=>{}),Ur=!1},removeSavedDevice:y=>{s({savedDevices:Eb(y)})},clearSavedDevices:()=>{vb(),s({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Ur=!0,le!=null&&le.connected&&await le.disconnect().catch(()=>{}),xb(),window.location.reload()},updateUsername:y=>{const v=i().user,S=y.trim();if(!v||!S)return;const V={...v,username:S};Tf(V),s(I=>{var D;const F=Cf(I.savedDevices,V);return ea(F),{user:V,active:(D=I.active)!=null&&D.isOwnedByMe?{...I.active,ownerName:S}:I.active,savedDevices:F}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const y=i().user;return y?Xb(y):null},applyOwnerPairingCode:y=>{var S;const v=Kb(y,(S=i().user)==null?void 0:S.username);return v?(Tf(v),s(V=>{var F,D,B;const I=Cf(V.savedDevices,v);return ea(I),{user:v,active:((D=(F=V.active)==null?void 0:F.ownerID)==null?void 0:D.toLowerCase())===v.userID.toLowerCase()||(B=V.active)!=null&&B.isOwnedByMe?{...V.active,isOwnedByMe:!0,ownerID:v.userID,ownerName:v.username}:V.active,savedDevices:I}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const y=i().screen==="control"&&!!(le!=null&&le.connected),v=i().active;if(y&&v&&!v.isOwnedByMe&&!v.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),s({sideMenuOpen:!1});return}s(S=>({screen:"ide",picoIdeOrigin:y?"control":"dashboard",active:y?S.active:null,layout:y?S.layout:[],sliderValues:y?S.sliderValues:{},toggleValues:y?S.toggleValues:{},radarPings:y?S.radarPings:{},textValues:y?S.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:y,active:v}=i();s({screen:y==="control"&&v&&(le!=null&&le.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(le!=null&&le.connected),bleListFiles:async()=>le!=null&&le.connected?le.listFiles("/"):[],bleReadText:async(y,v,S)=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");return le.readText(y,v,S)},bleWriteText:async(y,v,S)=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");await le.writeText(y,v,S)},bleDeleteFile:async y=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");await le.deleteFile(y)},bleRestart:async()=>{le!=null&&le.connected&&await le.restart()},bleRestartAndReconnect:async(y="control")=>{const{active:v}=i();if(!(le!=null&&le.connected)||!v)return!1;const S={deviceID:v.deviceID,deviceName:v.deviceName,ownerID:v.ownerID,deviceIconID:v.iconID,canOthersConnect:v.canOthersConnect,canOthersEdit:v.canOthersEdit,canOthersEditCode:v.canOthersEditCode,isOwnedByMe:v.isOwnedByMe,ownerName:v.ownerName};Ur=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await le.restart()}catch{}s({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:S.deviceName,iconID:S.deviceIconID}});for(let V=0;V<12&&(le!=null&&le.connected);V+=1)await kh(250);le!=null&&le.connected||(Ur=!1);for(let V=1;V<=8;V+=1){await kh(V===1?1200:850);try{const F=(await m_()).find(D=>D.id===S.deviceID);if(!F){s({progress:{value:Math.min(88,20+V*8),label:"Venter på browser-tilladelse..."}});continue}return s({progress:{value:Math.min(92,24+V*8),label:`Genforbinder (${V}/8)...`}}),await i().connectToDevice(F,S),y==="ide"&&s(D=>({screen:"ide",picoIdeOrigin:"control",active:D.active,layout:D.layout,sliderValues:D.sliderValues,toggleValues:D.toggleValues,radarPings:D.radarPings,textValues:D.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(I){c("warning",I instanceof Error?I.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Ur=!1,s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:S}),!1},reconnectLostDevice:async()=>{var v;const y=i().connectionLost;if(y){s({connectionLost:null});try{if((v=navigator.bluetooth)!=null&&v.getDevices){const V=(await navigator.bluetooth.getDevices()).find(I=>I.id===y.deviceID);if(V){await i().connectToDevice(V,y);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>s({connectionLost:null}),sendButton:(y,v)=>le==null?void 0:le.enqueueButton(y,v),sendSlider:(y,v)=>{s(S=>({sliderValues:{...S.sliderValues,[y]:v}})),le==null||le.enqueueSlider(y,v)},sendToggle:(y,v)=>{s(S=>({toggleValues:{...S.toggleValues,[y]:v}})),le==null||le.enqueueToggle(y,v)},sendJoystick:(y,v,S)=>le==null?void 0:le.enqueueJoystick(y,v,S),sendDpad:(y,v,S)=>le==null?void 0:le.enqueueDpad(y,v,S),saveLayout:async y=>{if(le)try{le.setBusy(!0),await le.saveLayout(y),s({layout:y,editMode:!1})}catch(v){c("error",v instanceof Error?v.message:"Kunne ikke gemme layout.")}finally{le.setBusy(!1)}},setEditMode:y=>s({editMode:y,sideMenuOpen:!1,menuPage:null}),setDashboardPage:y=>s({dashboardPage:y}),toggleSideMenu:y=>s(v=>({sideMenuOpen:y??!v.sideMenuOpen})),toggleDebugger:y=>s(v=>({debuggerOpen:y??!v.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:y=>s({menuPage:y,sideMenuOpen:!1}),closeMenuPage:()=>s({menuPage:null}),clearLogs:()=>s({logs:[]}),log:(y,v)=>c(y,v),askConfirm:y=>s({confirmDialog:y}),closeConfirm:()=>s({confirmDialog:null}),showToast:y=>a(y),dismissToast:()=>{cs&&clearTimeout(cs),s({toast:null})}}}),$f="PKP-EJER";function Xb(s){var a;const i=s.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${$f}-${c}-${g_(i)}`}function Kb(s,i="Ejer"){const c=s.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${$f}-`))return null;const a=c.slice($f.length+1).split("-").filter(Boolean),f=a.pop()??"",p=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(p)||f!==g_(p)?null:{userID:p,username:i.trim()||"Ejer"}}function g_(s){let i=2166136261;for(const c of s.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const cc="./",b_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function aa(s){const i=s>=0&&s<b_.length?s:0;return`${cc}device-icons/${i}.png`}const Qb=`${cc}art/logo.png`,Zb=`${cc}art/Teknologiskolen_logo.png`,Wb=`${cc}art/logo_teknologiskolen_white.png`,Jb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function et({name:s,size:i=24,className:c}){return u.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Jb[s]})}const e0=1850,n0=450;function t0(){const s=ae(a=>a.splashTarget),i=ae(a=>a.finishSplash),c=s?"splash-screen-animation splash-ready":"splash-pending";return z.useEffect(()=>{if(!s)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?n0:e0,p=window.setTimeout(i,f);return()=>window.clearTimeout(p)},[i,s]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:Qb,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Rh(){const s=ae(f=>f.createUser),[i,c]=z.useState(""),a=i.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Zb,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:i,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>s(i),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:ys})]})}function rd({title:s,onMenu:i}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:s}),u.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:u.jsx(et,{name:"menu"})})]})})}function Rn({title:s,onClose:i,children:c,closeVariant:a="plain"}){const f=a==="circle",p=z.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:_=>{p.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&p.current&&i(),p.current=!1},children:u.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:s}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:u.jsx(et,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function Th(){const s=ae(S=>S.savedDevices),i=ae(S=>S.toggleSideMenu),c=ae(S=>S.findDevice),a=ae(S=>S.removeSavedDevice),f=ae(S=>S.askConfirm),p=ae(S=>S.dashboardPage),_=ae(S=>S.setDashboardPage),b=a0(),[E,x]=z.useState(null),y=oc(),v=s.filter(S=>p==="mine"?S.isOwnedByMe:!S.isOwnedByMe).sort(i0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(rd,{title:"Hovedmenu",onMenu:()=>i()}),u.jsxs("div",{className:"content dash-content",children:[!y&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:p==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:p==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:v.length===0?u.jsx("div",{className:"device-list-empty",children:p==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):v.map(S=>u.jsx(r0,{device:S,disabled:!y,onConnect:()=>b(S),onSettings:()=>x(S)},S.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!y,"aria-label":"Find enhed",children:u.jsx(et,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:ys}),E&&u.jsx(Rn,{title:"Enhedsindstillinger",onClose:()=>x(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:aa(E.deviceIconID),alt:""}),u.jsx("strong",{children:E.deviceName})]}),u.jsx(fs,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(fs,{label:"Ejer",value:l0(E)}),u.jsx(fs,{label:"Offentlig",value:E.canOthersConnect?"Ja":"Nej"}),u.jsx(fs,{label:"Andre må redigere layout",value:E.canOthersEdit?"Ja":"Nej"}),u.jsx(fs,{label:"Andre må redigere kode",value:E.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!y,onClick:()=>{const S=E;x(null),b(S)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${E.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(E.deviceID),x(null)}}),children:"Glem enhed"})]})})]})}function r0({device:s,disabled:i,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[u.jsx("img",{className:"device-tile-icon",src:aa(s.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:s.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(et,{name:"settings"})})]})}function fs({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function l0(s){var i;return s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger"}function i0(s,i){return s.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function a0(){const s=ae(a=>a.connectToDevice),i=ae(a=>a.findDevice),c=ae(a=>a.log);return async a=>{const p=(await m_()).find(_=>_.id===a.deviceID);p?await s(p,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function s0(){const s=ae(c=>c.connecting),i=ae(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:aa((s==null?void 0:s.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(s==null?void 0:s.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function y_({selected:s,onSelect:i,onClose:c}){return u.jsx(Rn,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:b_.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===s?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:aa(a.id),alt:""})},a.id))})})}function o0(){const s=ae(se=>se.finishCreate),i=ae(se=>se.cancelCreate),[c,a]=z.useState(0),[f,p]=z.useState(!1),[_,b]=z.useState(!1),[E,x]=z.useState(!1),[y,v]=z.useState(!1),[S,V]=z.useState(la),[I,F]=z.useState(vs),[D,B]=z.useState(!1),H=se=>Number.isFinite(se)?Math.max(na,Math.min(ta,Math.round(se))):la;async function ie(){B(!0),await s(c,_,_&&E,_&&y,H(S),H(I))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>p(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:aa(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(et,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>b(!1),children:"Privat"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>b(!0),children:"Offentlig"})]}),_&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:E?"":"active",onClick:()=>x(!1),children:"Nej"}),u.jsx("button",{type:"button",className:E?"active":"",onClick:()=>x(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:y?"":"active",onClick:()=>v(!1),children:"Nej"}),u.jsx("button",{type:"button",className:y?"active":"",onClick:()=>v(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:na,max:ta,value:Number.isNaN(S)?"":S,onChange:se=>V(parseInt(se.target.value,10)),onBlur:()=>V(H(S))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:na,max:ta,value:Number.isNaN(I)?"":I,onChange:se=>F(parseInt(se.target.value,10)),onBlur:()=>F(H(I))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:D,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ie,disabled:D,children:D?"Opretter...":"Opret"})]})]}),f&&u.jsx(y_,{selected:c,onSelect:a,onClose:()=>p(!1)}),u.jsx("span",{className:"version",children:ys})]})}const ia=8;function Zo(s){return Math.max(5,Math.min(22,s))}function c0(s,i,c){const a=Math.max(1,s.length),f=(i-ia*2)/(a*.58),p=(c-ia*2)*.48;return Zo(Math.min(f,p))}function oi(s,i,c){switch(c){case 90:return{x:-i,y:s};case 180:return{x:-s,y:-i};case 270:return{x:i,y:-s};default:return{x:s,y:i}}}function rc(s){return(360-s)%360}function u0(s,i,c,a){const f=a===90||a===270;return c0(s,f?c:i,f?i:c)}function lc({name:s,width:i,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:u0(s,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:s})}function f0(s,i,c,a,f){const p=s.trim().split(/\s+/).filter(Boolean),_=Math.max(1,s.replace(/\s+/g,"").length+Math.max(0,p.length-1)*1.6),b=f?Zo(Math.min(i/4.6,c/4.6,12)):0,E=f?b+ia:ia;if(a){const v=Math.max(1,c-E*2);return{fontSize:Zo(Math.min(i*.48,v/(_*1.04))),endFontSize:b,centerInset:f?{top:E,bottom:E}:{}}}const x=Math.max(1,i-E*4.2);return{fontSize:Zo(Math.min(c*.42,x/(_*.58))),endFontSize:b,centerInset:f?{left:E*2.1,right:E*2.1}:{}}}function d0({control:s,rect:i,disabled:c,latestValue:a,toggleValue:f,radarPings:p=[],textValue:_,onButton:b,onSlider:E,onToggle:x,onJoystick:y,onDpad:v}){const S=z.useRef(!1),V={left:i.cx,top:i.cy,width:i.width,height:i.height};if(s.type==="button"){const I=()=>{c||!S.current||(S.current=!1,b(s.name,!1))};return u.jsx("div",{className:"control",style:V,children:u.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:F=>{var D,B;c||(F.preventDefault(),(B=(D=F.currentTarget).setPointerCapture)==null||B.call(D,F.pointerId),S.current=!0,b(s.name,!0))},onPointerUp:F=>{var D,B;F.preventDefault(),(B=(D=F.currentTarget).releasePointerCapture)==null||B.call(D,F.pointerId),I()},onPointerCancel:I,onLostPointerCapture:I,children:u.jsx(lc,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}if(s.type==="toggle"){const I=!!f;return u.jsx("div",{className:"control",style:V,children:u.jsx("button",{className:`control-toggle ${I?"on":""}`,type:"button",disabled:c,"aria-pressed":I,style:{width:"100%",height:"100%"},onPointerDown:F=>{c||(F.preventDefault(),x(s.name,!I))},children:u.jsx(lc,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}return s.type==="radar"?u.jsx("div",{className:"control",style:V,children:u.jsx(x_,{control:s,pings:p,width:i.width,height:i.height})}):s.type==="text"?u.jsx("div",{className:"control",style:V,children:u.jsx(v_,{message:_??s.name,width:i.width,height:i.height,rotation:s.rotation})}):s.type==="joystick"?u.jsx("div",{className:"control",style:V,children:u.jsx(T0,{control:s,disabled:c,onJoystick:y,width:i.width,height:i.height})}):s.type==="dpad"?u.jsx("div",{className:"control",style:V,children:u.jsx(L0,{control:s,disabled:c,onDpad:v})}):u.jsx("div",{className:"control",style:V,children:u.jsx(R0,{control:s,disabled:c,latestValue:a,onSlider:E,width:i.width,height:i.height})})}function m0(s,i,c){const a=s.trim()||" ",p=a.split(/\s+/).filter(Boolean).reduce((v,S)=>Math.max(v,S.length),1),_=Math.max(1,Math.ceil(a.length/Math.max(1,Math.floor(p*1.9)))),b=Math.max(1,i-ia*3),E=Math.max(1,c-ia*3),x=b/(p*.58),y=E/(_*1.16);return Math.max(7,Math.min(24,x,y))}function v_({message:s,width:i,height:c,rotation:a=0}){const f=s.trim()||"...",p=a===90||a===270,_=m0(f,p?c:i,p?i:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:_},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function x_({control:s,pings:i,width:c,height:a,preview:f=!1}){const[,p]=z.useState(0),_=Math.max(120,s.radarFadeMs??1200),b=s.radarMinAngle??0,E=s.radarMaxAngle??180,x=qn(b),y=qn(E),v=Math.abs(E-b)>=360||x===y&&b!==E,S=Math.max(1,s.radarMaxDistance??200),V=Date.now(),I=i[i.length-1],F=s.rotation,D=qn(x+F),B=qn(y+F),H=E0(x,y),ie=((I==null?void 0:I.angle)??H)+F,se=f?[{id:"preview",angle:H,distance:S*.62,createdAt:V}]:i.filter(fe=>V-fe.createdAt<=_),oe=!v,pe=Math.max(8,Math.min(12,Math.min(c,a)*.16)),W=Math.max(7,pe*.85),J=0,Ne=0,ye=1,we=y0(v,D,B,F,S),Z=v?{x:-1.12,y:-1.12,width:2.24,height:2.24}:v0(D,B,we.map(fe=>fe.point)),$e=v?"":p0(J,Ne,ye,D,B),Ae=Ah(b),Pe=Ah(E),G=oe?w0(D,B,Z,c,a,Ae,Pe,pe):null,re=we.map(fe=>{const Ee=w_(fe.point,Z,c,a);return{key:fe.key,value:fe.value,x:Ee.x,y:Ee.y}});z.useEffect(()=>{if(f||i.length===0)return;const fe=window.setInterval(()=>p(Ee=>Ee+1),120);return()=>window.clearInterval(fe)},[_,i.length,f]);const ue=kt(J,Ne,ye,ie);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${Z.x} ${Z.y} ${Z.width} ${Z.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[v?u.jsx("circle",{className:"radar-sector-fill",cx:J,cy:Ne,r:ye}):u.jsx("path",{className:"radar-sector-fill",d:$e}),[.25,.5,.75,1].map(fe=>v?u.jsx("circle",{className:"radar-ring",cx:J,cy:Ne,r:ye*fe},fe):u.jsx("path",{className:"radar-ring",d:h0(J,Ne,ye*fe,D,B)},fe)),!v&&u.jsx(Mh,{cx:J,cy:Ne,radius:ye,angle:D}),!v&&u.jsx(Mh,{cx:J,cy:Ne,radius:ye,angle:B}),u.jsx("line",{className:"radar-sweep",x1:J,y1:Ne,x2:ue.x,y2:ue.y}),se.map(fe=>{const Ee=f?0:V-fe.createdAt,N=Math.max(0,1-Ee/_),U=Math.max(0,Math.min(S,fe.distance)),te=kt(J,Ne,ye*(U/S),fe.angle+F);return u.jsx("circle",{className:"radar-ping",cx:te.x,cy:te.y,r:Math.max(.025,Math.min(Z.width,Z.height)*.025),opacity:N},fe.id)})]}),oe&&G&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:G.min.x,top:G.min.y,fontSize:pe},children:Ae}),u.jsx("span",{className:"radar-angle-label",style:{left:G.max.x,top:G.max.y,fontSize:pe},children:Pe})]}),re.map(fe=>u.jsx("span",{className:"radar-range-label",style:{left:fe.x,top:fe.y,fontSize:W},children:fe.value},fe.key))]})}function Mh({cx:s,cy:i,radius:c,angle:a}){const f=kt(s,i,c,a);return u.jsx("line",{className:"radar-boundary",x1:s,y1:i,x2:f.x,y2:f.y})}function kt(s,i,c,a){const f=(qn(a)-90)*Math.PI/180;return{x:s+Math.cos(f)*c,y:i+Math.sin(f)*c}}function p0(s,i,c,a,f){const p=kt(s,i,c,a),_=kt(s,i,c,f),b=uc(a,f)>180?1:0;return`M ${s} ${i} L ${p.x} ${p.y} A ${c} ${c} 0 ${b} 1 ${_.x} ${_.y} Z`}function h0(s,i,c,a,f){const p=kt(s,i,c,a),_=kt(s,i,c,f),b=uc(a,f)>180?1:0;return`M ${p.x} ${p.y} A ${c} ${c} 0 ${b} 1 ${_.x} ${_.y}`}function uc(s,i){const c=qn(s),a=qn(i),f=a>=c?a-c:360-c+a;return f===0?360:f}const Fo=[.25,.5,.75,1],_0=.1,g0=.85,b0=55;function y0(s,i,c,a,f){const p=(E,x,y)=>({key:`${E}-${x}`,value:Math.round(f*x),point:kt(0,0,x,y)});if(s){const E=qn(180+a);return Fo.map(x=>p("full",x,E))}const _=360-uc(i,c);if(_<b0){const E=qn(c+_/2);return Fo.map(x=>p("mid",x,E))}const b=(E,x,y)=>{const v=Math.asin(Math.min(g0,_0/x))*180/Math.PI;return qn(E+y*v)};return[...Fo.map(E=>p("min",E,b(i,E,-1))),...Fo.map(E=>p("max",E,b(c,E,1)))]}function v0(s,i,c=[]){const a=[{x:0,y:0},kt(0,0,1,s),kt(0,0,1,i),...c];for(const v of[0,90,180,270])x0(v,s,i)&&a.push(kt(0,0,1,v));const f=Math.min(...a.map(v=>v.x)),p=Math.max(...a.map(v=>v.x)),_=Math.min(...a.map(v=>v.y)),b=Math.max(...a.map(v=>v.y)),E=Math.max(.1,p-f),x=Math.max(.1,b-_),y=Math.max(E,x)*.24;return{x:f-y,y:_-y,width:E+y*2,height:x+y*2}}function x0(s,i,c){const a=qn(i),f=qn(s),p=uc(i,c),_=qn(f-a);return _>=0&&_<=p}function w0(s,i,c,a,f,p,_,b){const x=kt(0,0,1.1,s),y=kt(0,0,1.1,i);return{min:jh(x,c,a,f,p,b),max:jh(y,c,a,f,_,b)}}function w_(s,i,c,a){return{x:(s.x-i.x)/i.width*c,y:(s.y-i.y)/i.height*a}}function jh(s,i,c,a,f,p){const _=w_(s,i,c,a),b=Math.max(10,f.length*p*.62),E=p,x=7;return{x:Dh(_.x,b/2+x,Math.max(b/2+x,c-b/2-x)),y:Dh(_.y,E/2+x,Math.max(E/2+x,a-E/2-x))}}function Dh(s,i,c){return Math.max(i,Math.min(c,s))}function Ah(s){return`${Math.round(s)}`}function qn(s){return Number.isFinite(s)?(s%360+360)%360:0}function E0(s,i){const c=qn(s),a=qn(i),f=a>=c?a-c:360-c+a;return qn(c+f/2)}function S0(s,i){if(!i)return s;const c=s.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((p,_)=>u.jsx("span",{children:p},`${p}-${_}`))},`${a}-${f}`))})}function k0(s){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return s===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:s===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:s===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function N0({name:s,vertical:i,rotation:c,color:a,fontSize:f,endFontSize:p,centerInset:_,lowLabel:b,highLabel:E,showEnds:x}){const y=x?k0(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:S0(s,i)}),y&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...y.low,fontWeight:800,fontSize:p},children:b}),u.jsx("div",{style:{...y.high,fontWeight:800,fontSize:p},children:E})]})]})}function E_({name:s,rotation:i,width:c,height:a,value:f,showEnds:p=!1,fillColor:_="var(--red)",lowLabel:b="0",highLabel:E="100"}){const x=i===90||i===270,{fontSize:y,endFontSize:v,centerInset:S}=f0(s,c,a,x,p);let V,I;i===0?(V={left:0,top:0,bottom:0,width:`${f}%`},I={left:0,top:0}):i===180?(V={right:0,top:0,bottom:0,width:`${f}%`},I={right:0,top:0}):i===90?(V={left:0,right:0,bottom:0,height:`${f}%`},I={left:0,bottom:0}):(V={left:0,right:0,top:0,height:`${f}%`},I={left:0,top:0});const F=D=>u.jsx(N0,{name:s,vertical:x,rotation:i,color:D,fontSize:y,endFontSize:v,centerInset:S,lowLabel:b,highLabel:E,showEnds:p});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:F("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...V},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...I},children:F("var(--white)")})})]})}function R0({control:s,disabled:i,latestValue:c,onSlider:a,width:f,height:p}){const _=z.useRef(null),b=s.sliderMin??0,E=s.sliderMax??100,[x,y]=z.useState(()=>c===void 0?Oh(s.sliderRecenter??"none"):Ch(c,b,E)),v=z.useRef(null),S=s.rotation;z.useEffect(()=>{c!==void 0&&(y(Ch(c,b,E)),v.current=c)},[c,b,E]);function V(B){const H=_.current;if(!H)return 0;const ie=H.getBoundingClientRect();let se;return S===0?se=(B.clientX-ie.left)/ie.width:S===180?se=1-(B.clientX-ie.left)/ie.width:S===90?se=1-(B.clientY-ie.top)/ie.height:se=(B.clientY-ie.top)/ie.height,Math.max(0,Math.min(1,se))}function I(B){i||F(V(B))}function F(B){const H=Math.round(B*100),ie=Math.round(b+(E-b)*B);y(H),ie!==v.current&&(v.current=ie,a(s.name,ie))}function D(){const B=s.sliderRecenter??"none";i||B==="none"||F(Oh(B)/100)}return u.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:B=>{i||(B.preventDefault(),B.currentTarget.setPointerCapture(B.pointerId),I(B))},onPointerMove:B=>{B.buttons!==0&&I(B)},onPointerUp:D,onPointerCancel:D,onLostPointerCapture:D,children:u.jsx(E_,{name:s.name,rotation:S,width:f,height:p,value:x,showEnds:!0,lowLabel:String(b),highLabel:String(E)})})}function Oh(s){return s==="bottom"?0:s==="top"?100:s==="middle"?50:0}function Ch(s,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((s-i)/(c-i)*100)))}function Bh(s,i,c){return Math.round(i+(c-i)*(s+1)/2)}function Lh(s,i){return s==="bottom"?i?1:-1:s==="top"?i?-1:1:0}function zh(s){return{nx:Lh(s.joystickXRecenter,!1),ny:Lh(s.joystickYRecenter,!0)}}function S_(s,i){const c=Math.min(s,i),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function k_({control:s,width:i,height:c,pos:a,dragging:f=!1}){const p=s.rotation,{knobRadius:_,reach:b}=S_(i,c),E=Math.max(7,Math.min(14,_*.62)),x=Math.max(7,Math.min(12,Math.min(i,c)*.1)),y=[{key:"xmax",value:s.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:s.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:s.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:s.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:b*2,height:b*2,transform:"translate(-50%, -50%)"}}),y.map(v=>{const S=oi(v.lx,v.ly,p);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:x,transform:`translate(-50%, -50%) translate(${S.x*b}px, ${S.y*b}px) rotate(${p}deg)`},children:v.value},v.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:_*2,height:_*2,fontSize:E,transform:`translate(calc(-50% + ${a.nx*b}px), calc(-50% + ${a.ny*b}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:s.rotation?`rotate(${s.rotation}deg)`:void 0,whiteSpace:s.rotation===90||s.rotation===270?"nowrap":void 0},children:s.name})})]})}function T0({control:s,disabled:i,onJoystick:c,width:a,height:f}){const p=s.rotation,_=z.useRef(null),[b,E]=z.useState(()=>{const H=zh(s),ie=oi(H.nx,H.ny,p);return{nx:ie.x,ny:ie.y}}),x=z.useRef(!1),y=z.useRef(null),v=s.joystickXMin??-100,S=s.joystickXMax??100,V=s.joystickYMin??-100,I=s.joystickYMax??100;function F(H,ie){const se=oi(H,ie,rc(p)),oe=Bh(se.x,v,S),pe=Bh(-se.y,V,I);(!y.current||y.current.x!==oe||y.current.y!==pe)&&(y.current={x:oe,y:pe},c(s.name,oe,pe))}function D(H){const ie=_.current;if(!ie)return;const se=ie.getBoundingClientRect(),{reach:oe}=S_(se.width,se.height);let pe=(H.clientX-(se.left+se.width/2))/oe,W=(H.clientY-(se.top+se.height/2))/oe;const J=Math.hypot(pe,W);J>1&&(pe/=J,W/=J),E({nx:pe,ny:W}),F(pe,W)}function B(){const H=s.joystickXRecenter??"middle",ie=s.joystickYRecenter??"middle";if(H==="none"&&ie==="none")return;const se=oi(b.nx,b.ny,rc(p)),oe=zh(s),pe={x:H==="none"?se.x:oe.nx,y:ie==="none"?se.y:oe.ny},W=oi(pe.x,pe.y,p),J={nx:W.x,ny:W.y};x.current=!1,E(J),F(J.nx,J.ny)}return u.jsx("div",{ref:_,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),x.current=!0,D(H))},onPointerMove:H=>{i||!x.current||H.buttons===0||D(H)},onPointerUp:B,onPointerCancel:B,onLostPointerCapture:B,children:u.jsx(k_,{control:s,width:a,height:f,pos:b,dragging:x.current})})}const M0=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],j0="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",D0=.1,A0={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},O0={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},C0=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Pf(s,i){return Math.hypot(s,i)<D0?null:Math.abs(s)>=Math.abs(i)?s>0?"right":"left":i>0?"down":"up"}function B0(s,i){const[c,a]=O0[s],f=oi(c,a,rc(i));return Pf(f.x,f.y)??s}function N_({control:s,active:i=null}){const c=s.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[M0.map(a=>u.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:j0},a.direction)),C0.map(a=>u.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:A0[B0(a.pos,c)]},a.pos))]})})}function L0({control:s,disabled:i,onDpad:c}){const a=z.useRef(null),f=z.useRef(null),p=z.useRef(!1),[_,b]=z.useState(null);function E(S){const V=a.current;if(!V)return{screen:null,logical:null};const I=V.getBoundingClientRect(),F=Math.min(I.width,I.height)/2,D=(S.clientX-(I.left+I.width/2))/F,B=(S.clientY-(I.top+I.height/2))/F,H=Pf(D,B),ie=oi(D,B,rc(s.rotation)),se=Pf(ie.x,ie.y);return{screen:H,logical:se}}function x(S){const V=a.current;if(!V)return!1;const I=V.getBoundingClientRect(),F=(S.clientX-I.left)/I.width,D=(S.clientY-I.top)/I.height;return F>=0&&F<=1&&D>=0&&D<=1}function y(S){S.logical!==f.current&&(f.current&&c(s.name,f.current,!1),f.current=S.logical,S.logical&&c(s.name,S.logical,!0)),b(S.screen)}function v(){p.current=!1,y({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:S=>{i||!x(S)||(S.preventDefault(),S.currentTarget.setPointerCapture(S.pointerId),p.current=!0,y(E(S)))},onPointerMove:S=>{i||!p.current||S.buttons===0||y(E(S))},onPointerUp:v,onPointerCancel:v,onLostPointerCapture:v,children:u.jsx(N_,{control:s,active:_})})}const z0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},U0=["button","slider","toggle","radar","text","joystick","dpad"];function H0({unplaced:s,onAdd:i,onClose:c}){const a=z.useMemo(()=>U0.filter(b=>s.some(E=>E.type===b)),[s]),[f,p]=z.useState(a[0]??"button"),_=s.filter(b=>b.type===f);return z.useEffect(()=>{a.length>0&&!a.includes(f)&&p(a[0])},[a,f]),u.jsxs(Rn,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(b=>u.jsx("button",{type:"button",className:f===b?"active":"",onClick:()=>p(b),children:z0[b]},b))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(b=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(b.name),children:[u.jsx("span",{children:b.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(et,{name:"plus",size:22})})]},b.name))})]})}function R_(s){const[i,c]=z.useState({w:0,h:0}),a=z.useRef(null),f=z.useRef(null);return z.useLayoutEffect(()=>{var E;const p=s.current;if(a.current===p)return;if((E=f.current)==null||E.disconnect(),f.current=null,a.current=p,!p){c(x=>x.w===0&&x.h===0?x:{w:0,h:0});return}const _=()=>{const x={w:p.clientWidth,h:p.clientHeight};c(y=>y.w===x.w&&y.h===x.h?y:x)};_();const b=new ResizeObserver(_);b.observe(p),f.current=b}),z.useEffect(()=>()=>{var p;(p=f.current)==null||p.disconnect(),f.current=null,a.current=null},[]),i}function ra(s){return s.centerX2!==null&&s.centerY2!==null&&s.spanX!==null&&s.spanY!==null}const G0=4,V0=5;function I0(s){return s==="joystick"||s==="dpad"?{spanX:6,spanY:6}:{spanX:G0,spanY:V0}}function Uh(s){if(!ra(s))return null;const i=s.centerX2/2,c=s.centerY2/2;return{x0:i-s.spanX/2,x1:i+s.spanX/2,y0:c-s.spanY/2,y1:c+s.spanY/2}}function Y0(s,i,c=.02){return s.x0<i.x1-c&&i.x0<s.x1-c&&s.y0<i.y1-c&&i.y0<s.y1-c}function Hh(s,i){const c=gs(s,i);if(!c||s.spanX===null||s.spanY===null)return s;const a=Qo(c.cx,c.cy,s.spanX,s.spanY,i);return{...s,centerX2:a.centerX2,centerY2:a.centerY2}}function Gh(s,i){return Math.max(1,Math.min(i.cols-1,s))}function Vh(s,i){return Math.max(1,Math.min(i.rows-1,s))}function $0(){const s=ae(O=>O.layout),i=ae(O=>O.active),c=ae(O=>O.saveLayout),a=ae(O=>O.setEditMode),f=ae(O=>O.askConfirm),p=!!(i!=null&&i.canEdit),[_,b]=z.useState(()=>s.map(O=>({...O}))),[E,x]=z.useState(null),[y,v]=z.useState(!1),[S,V]=z.useState(null),[I,F]=z.useState(null),[D,B]=z.useState(!1),H=z.useRef(null),ie=R_(H),se=ie.w>0&&ie.h>0,oe=p_(ie.w,ie.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),pe=z.useMemo(()=>se?Lb(oe):[],[oe,se]),W=_.filter(ra),J=_.filter(O=>!ra(O)),Ne=z.useMemo(()=>{const O=new Set;for(let Q=0;Q<W.length;Q+=1)for(let ne=Q+1;ne<W.length;ne+=1){const X=Uh(W[Q]),He=Uh(W[ne]);X&&He&&Y0(X,He)&&(O.add(W[Q].name),O.add(W[ne].name))}return O},[W]),ye=Ne.size>0,we=_.find(O=>O.name===E)??null,Z=z.useMemo(()=>Ih(_)!==Ih(s),[_,s]),$e=z.useMemo(()=>{if(!S||!I)return null;const O=_.find(X=>X.name===S);if(!O||O.spanX===null||O.spanY===null)return null;const Q=Qo(I.cx,I.cy,O.spanX,O.spanY,oe),ne=gs({...O,centerX2:Q.centerX2,centerY2:Q.centerY2},oe);return ne?{name:O.name,rect:ne}:null},[_,S,I,oe]);function Ae(O,Q){b(ne=>ne.map(X=>X.name===O?Q(X):X))}function Pe(O,Q){O.stopPropagation(),x(Q.name);const ne=gs(Q,oe);ne&&(V(Q.name),F({cx:ne.cx,cy:ne.cy}),O.currentTarget.setPointerCapture(O.pointerId))}function G(O){if(!S)return;const Q=H.current;if(!Q)return;const ne=Q.getBoundingClientRect(),X=Q.clientWidth/ne.width,He=Q.clientHeight/ne.height;F({cx:Math.max(0,Math.min(Q.clientWidth,(O.clientX-ne.left)*X)),cy:Math.max(0,Math.min(Q.clientHeight,(O.clientY-ne.top)*He))})}function re(){if(S&&I){const O=_.find(Q=>Q.name===S);if(O&&O.spanX!==null&&O.spanY!==null){const Q=Qo(I.cx,I.cy,O.spanX,O.spanY,oe);Ae(S,ne=>({...ne,centerX2:Q.centerX2,centerY2:Q.centerY2}))}}V(null),F(null)}function ue(O){Ae(O,Q=>Q.spanX===null||Q.spanY===null?{...Q,rotation:(Q.rotation+270)%360}:Hh({...Q,rotation:(Q.rotation+270)%360,spanX:Gh(Q.spanY,oe),spanY:Vh(Q.spanX,oe)},oe))}function fe(O,Q,ne){Ae(O,X=>{if(X.spanX===null||X.spanY===null)return X;const He=Q==="x"?Gh(X.spanX+ne,oe):X.spanX,Oe=Q==="y"?Vh(X.spanY+ne,oe):X.spanY;return Hh({...X,spanX:He,spanY:Oe},oe)})}function Ee(O){Ae(O,Q=>({...Q,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),x(null)}function N(O){v(!1);const Q=_.find(Oe=>Oe.name===O);if(!Q)return;const{spanX:ne,spanY:X}=I0(Q.type),He=Qo(oe.areaW/2,oe.areaH/2,ne,X,oe);Ae(O,()=>({...Q,spanX:ne,spanY:X,rotation:0,centerX2:He.centerX2,centerY2:He.centerY2})),x(O)}async function U(){ye||(B(!0),await c(_),B(!1))}function te(){if(!Z){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"edit-band edit-toolbar-band",children:we&&ra(we)?u.jsxs("div",{className:"edit-toolbar",onPointerDown:O=>O.stopPropagation(),children:[u.jsx(ds,{label:"⟲",title:"Roter",onClick:()=>ue(we.name)}),u.jsx(ds,{label:"W−",title:"Gør smallere",onClick:()=>fe(we.name,"x",-1),disabled:we.spanX===null||we.spanX<=1}),u.jsx(ds,{label:"W+",title:"Gør bredere",onClick:()=>fe(we.name,"x",1),disabled:we.spanX===null||we.spanX>=oe.cols-1}),u.jsx(ds,{label:"H−",title:"Gør lavere",onClick:()=>fe(we.name,"y",-1),disabled:we.spanY===null||we.spanY<=1}),u.jsx(ds,{label:"H+",title:"Gør højere",onClick:()=>fe(we.name,"y",1),disabled:we.spanY===null||we.spanY>=oe.rows-1}),u.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Ee(we.name),"aria-label":"Slet",children:u.jsx(et,{name:"delete",size:24})})]}):u.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:H,style:{touchAction:"none"},onPointerMove:G,onPointerUp:re,onPointerDown:()=>x(null),children:se&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:oe.areaW,height:oe.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:pe.map((O,Q)=>u.jsx("circle",{cx:O.x,cy:O.y,r:2.5,fill:"rgba(198,80,78,0.45)"},Q))}),$e&&u.jsx("div",{className:"snap-preview",style:{left:$e.rect.cx,top:$e.rect.cy,width:$e.rect.width,height:$e.rect.height}}),W.map(O=>{const Q=S===O.name&&I,ne=gs(O,oe);if(!ne)return null;const X=Q?I.cx:ne.cx,He=Q?I.cy:ne.cy,Oe={left:X,top:He,width:ne.width,height:ne.height,outline:E===O.name?"3px solid var(--text)":"none",outlineOffset:2};return u.jsx("div",{className:`control ${Ne.has(O.name)?"colliding":""}`,style:Oe,onPointerDown:Fn=>Pe(Fn,O),children:O.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(lc,{name:O.name,width:ne.width,height:ne.height,rotation:O.rotation})}):O.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(lc,{name:O.name,width:ne.width,height:ne.height,rotation:O.rotation})}):O.type==="radar"?u.jsx(x_,{control:O,pings:[],width:ne.width,height:ne.height,preview:!0}):O.type==="text"?u.jsx(v_,{message:O.name,width:ne.width,height:ne.height,rotation:O.rotation}):O.type==="joystick"?u.jsx(k_,{control:O,width:ne.width,height:ne.height,pos:{nx:0,ny:0}}):O.type==="dpad"?u.jsx(N_,{control:O}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(E_,{name:O.name,rotation:O.rotation,width:ne.width,height:ne.height,value:50,showEnds:!0,lowLabel:String(O.sliderMin??0),highLabel:String(O.sliderMax??100),fillColor:Ne.has(O.name)?"var(--disabled)":"var(--red)"})})},O.name)}),p&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:O=>O.stopPropagation(),onClick:()=>v(!0),"aria-label":"Tilføj kontrol",children:u.jsx(et,{name:"plus",size:24})}),D&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:te,disabled:D,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:U,disabled:ye||D,children:D?"Gemmer...":"Gem"})]}),y&&u.jsx(H0,{unplaced:J,onAdd:N,onClose:()=>v(!1)})]})}function Ih(s){return JSON.stringify(s.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function ds({label:s,title:i,disabled:c,onClick:a}){return u.jsx("button",{type:"button","aria-label":i,title:i,disabled:c,onClick:a,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:s})}function P0(){const s=ae(H=>H.layout),i=ae(H=>H.editMode),c=ae(H=>H.active),a=ae(H=>H.sliderValues),f=ae(H=>H.toggleValues),p=ae(H=>H.radarPings),_=ae(H=>H.textValues),b=ae(H=>H.toggleSideMenu),E=ae(H=>H.sendButton),x=ae(H=>H.sendSlider),y=ae(H=>H.sendToggle),v=ae(H=>H.sendJoystick),S=ae(H=>H.sendDpad),V=z.useRef(null),I=R_(V),F=p_(I.w,I.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),D=I.w>0&&I.h>0,B=s.filter(ra);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(rd,{title:"Kontrol Panel",onMenu:()=>b()}),i?u.jsx($0,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:V,children:D?B.map(H=>{const ie=gs(H,F);return ie?u.jsx(d0,{control:H,rect:ie,disabled:!1,latestValue:H.type==="slider"?a[H.name]:void 0,toggleValue:H.type==="toggle"?f[H.name]:void 0,radarPings:H.type==="radar"?p[H.name]:void 0,textValue:H.type==="text"?_[H.name]:void 0,onButton:E,onSlider:x,onToggle:y,onJoystick:v,onDpad:S},H.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const q0="",Yh="",$h="",ai="";function ms(s){return new Promise(i=>setTimeout(i,s))}class F0{constructor(i){this.transport=i}async interrupt(){await this.transport.write($h),await ms(80),await this.transport.write($h)}async friendlyRepl(){await this.transport.write(Yh)}async softReset(){await this.transport.write(ai)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.disconnect()
except Exception:
    pass
`).catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await ms(180)}),await ms(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await ms(80),await this.transport.write(`\r
`),await ms(40),!(await this.collectUntil(async()=>{await this.transport.write(q0)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ai)},f=>f.includes(`${ai}${ai}`)||f.includes(`${ai}>`),c);return await this.friendlyRepl().catch(()=>{}),X0(a)}collectUntil(i,c,a){return new Promise((f,p)=>{let _="",b=null;const E=setTimeout(()=>{b==null||b(),p(new Error("Timeout ved USB REPL kommando."))},a);b=this.transport.addDataListener(x=>{_+=x,c(_)&&(clearTimeout(E),b==null||b(),f(_))}),i().catch(x=>{clearTimeout(E),b==null||b(),p(x instanceof Error?x:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Yh)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function X0(s){const i=s.indexOf("OK"),c=s.indexOf(ai,i>=0?i:0),a=c>=0?s.indexOf(ai,c+1):-1;if(i<0||c<0)return{output:s.trim(),error:"",raw:s};const f=s.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),p=a>=0?s.slice(c+1,a).trim():"";return{output:f,error:p,raw:s}}const K0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Q0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Nl=Q0.flatMap(({board:s,firmwareName:i})=>K0.map(({version:c,date:a,stamp:f,tag:p})=>{const _=`${i}-${f}-${p}.uf2`;return{board:s,version:c,date:a,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),Lf=512,zf=`import builtins as _pkp_builtins
`;function Hr(s){return JSON.stringify(s)}function Z0(s){return`bytes.fromhex(${JSON.stringify([...s].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function W0(s,i){return`${s==="/"?"":s.replace(/\/$/,"")}/${i}`}class J0{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${Hr(i)}
for name in os.listdir(base):
    p = (${Hr(i)}.rstrip('/') + '/' + name) if ${Hr(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[p,_,b]=f.split("	"),E=_==="dir"||_==="file"?_:"unknown",x=parseInt(b??"",10);return{name:p,path:W0(i,p),type:E,...Number.isFinite(x)&&x>=0?{size:x}:{}}})}async readText(i){const c=`
import sys
${zf}with _pkp_builtins.open(${Hr(i)}, 'rb') as f:
    while True:
        b = f.read(${Lf})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const f=a.output.replace(/\s+/g,"");return new TextDecoder().decode(ey(f))}async writeText(i,c,a){const f=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${zf}_pkp_builtins.open(${Hr(i)}, 'wb').close()`),f.length===0){a==null||a(100,"Gemt på Pico");return}for(let p=0;p<f.length;p+=Lf){const _=f.slice(p,p+Lf),b=`
${zf}with _pkp_builtins.open(${Hr(i)}, 'ab') as f:
    f.write(${Z0(_)})
`,E=await this.repl.exec(b,1e4);if(E.error)throw new Error(E.error);const x=Math.min(p+_.length,f.length);a==null||a(10+Math.round(x/f.length*85),`Gemmer ${x}/${f.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(i,c,a,f={}){const p=`${i}.tmp`;if(await this.writeText(p,c,(E,x)=>a==null?void 0:a(Math.min(70,E*.7),x)),a==null||a(78,"Verificerer fil..."),await this.readText(p)!==c)throw await this.delete(p).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);a==null||a(88,"Udskifter fil...");let b=!!f.createBackup;if(b){const E=await this.readText(i).catch(()=>null);b=E!==null&&E!==c}if(b){const E=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,E).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(p,i),a==null||a(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${Hr(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),a=new Set(c.map(v=>v.path.toLowerCase())),f=i.replace(/\\/g,"/"),p=f.lastIndexOf("/"),_=p>=0?f.slice(0,p+1):"/",b=p>=0?f.slice(p+1):f.replace(/^\/+/,""),E=b.lastIndexOf("."),x=E>0?b.slice(0,E):b,y=E>0?b.slice(E):"";for(let v=1;v<1e3;v+=1){const S=`${_}${x}_backup${v}${y}`;if(!a.has(S.toLowerCase()))return S}return`${_}${x}_backup${Date.now()}${y}`}async rename(i,c){const a=await this.repl.exec(`
import os
os.rename(${Hr(i)}, ${Hr(c)})
`);if(a.error)throw new Error(a.error)}}function ey(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}const ny=`import ubluetooth\r
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
`,Wi=[{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",content:ay},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:uy},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:dy},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",content:iy},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",content:ly},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:cy},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:fy},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:ny},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:oy},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:sy},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:ty},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:ry}],my=11914;function py(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function hy(){return py()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class _y{constructor(i={}){me(this,"port",null);me(this,"reader",null);me(this,"writer",null);me(this,"readLoopDone",null);me(this,"readLoopActive",!1);me(this,"disconnecting",!1);me(this,"buffer","");me(this,"events");me(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:my}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var E,x;const i=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,f=this.writer,p=this.readLoopDone,_=a==null?void 0:a.closed.catch(()=>{}),b=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}p&&await p.catch(()=>{}),await _;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(f==null?void 0:f.close()),await b}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===p&&(this.readLoopDone=null),this.disconnecting=!1,i&&((x=(E=this.events).onDisconnect)==null||x.call(E))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var a,f,p;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((a=i.writable)==null?void 0:a.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(p=(f=this.events).onLog)==null||p.call(f,"success",`USB-forbindelse oprettet (${gy(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var f,p,_;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((f=i.readable)==null?void 0:f.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:b,done:E}=await a.read();if(E)break;b&&this.consumeText(c.decode(b,{stream:!0}))}}catch(b){this.readLoopActive&&((_=(p=this.events).onLog)==null||_.call(p,"error",b instanceof Error?b.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var p,_;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,f=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await f}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((_=(p=this.events).onDisconnect)==null||_.call(p))}consumeText(i){var c,a,f,p;(a=(c=this.events).onData)==null||a.call(c,i);for(const _ of this.dataListeners)_(i);for(this.buffer+=i;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),b=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(p=(f=this.events).onLine)==null||p.call(f,b)}}}function gy(s){const i=s.usbVendorId!==void 0?`VID ${s.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=s.usbProductId!==void 0?`PID ${s.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const T_=15e3,Ph=64*1024,qh=1e5,M_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),by=64*1024,Fh=8;function j_(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function yy(){return j_()?new SharedArrayBuffer(by):null}function vy(s,i){const c=new Int32Array(s,0,2),a=new Uint8Array(s),f=s.byteLength-Fh,p=new TextEncoder().encode(i+`
`);let _=Atomics.load(c,0);for(const b of p)a[Fh+_%f]=b,_+=1;Atomics.store(c,0,_),Atomics.notify(c,0)}const xy=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class wy{constructor(){me(this,"worker",null);me(this,"pending",null);me(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,f=c.timeoutMs??T_,p=this.ensureWorker();return new Promise(_=>{const b=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:a,timer:b,onOutput:c.onOutput,resolve:_},p.postMessage({type:"run",id:a,code:Sy(i),runtimeUrl:M_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class Ey{constructor(){me(this,"worker",null);me(this,"pending",null);me(this,"nextId",0);me(this,"stdinSab",null)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs===null?null:c.timeoutMs??T_,f=typeof c=="number"?void 0:c.onOutput,p=typeof c=="number"?void 0:c.signal,_=qf(i,{allowInput:!0});if(_.some(y=>y.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:_,timedOut:!1,unavailable:!1});const b=++this.nextId,E=this.ensureWorker(),x=yy();return this.stdinSab=x,new Promise(y=>{const v=F=>this.finish(F),S=()=>{this.restartWorker(),v({ok:!1,output:"",error:"",issues:_,timedOut:!1,unavailable:!1})},V=a===null?null:window.setTimeout(()=>{v({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:_,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:b,timer:V,timeoutMs:a,issues:_,onOutput:f,signal:p,abort:S,resolve:y},p!=null&&p.aborted){S();return}p==null||p.addEventListener("abort",S,{once:!0});const I={type:"run",id:b,code:i,runtimeUrl:M_,interactive:!0,sab:x??void 0};E.postMessage(I)})}sendInput(i){const c=this.pending;!c||!this.stdinSab||(this.refreshTimeout(c),vy(this.stdinSab,i))}stop(){const i=this.pending;i&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}))}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){this.refreshTimeout(c),(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var a;const c=this.pending;c&&(c.timer!==null&&window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}refreshTimeout(i){i.timeoutMs!==null&&(i.timer!==null&&window.clearTimeout(i.timer),i.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:i.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},i.timeoutMs))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null,this.stdinSab=null}}function Sy(s){const i=JSON.stringify(s);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function qf(s,i={}){const c=[],a=new Blob([s]).size;a>Ph&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Ph} bytes.`});const f=s.split(/\r?\n/);for(let p=0;p<f.length;p+=1){const _=p+1,b=ic(f[p]).trim();if(!b)continue;const E=Ny(b);E&&xy.has(E)&&c.push({level:"error",line:_,text:`${E} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&ky(f[p])&&c.push({level:"error",line:_,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const x=b.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);x&&Ry(x)>qh&&c.push({level:"error",line:_,text:`range(...) er for stor til offline kørsel. Brug højst ${qh} gentagelser.`})}for(const p of Ty(f))c.push({level:"warning",text:`Funktionen ${p} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function ic(s){let i=null;for(let c=0;c<s.length;c+=1){const a=s[c];if((a==='"'||a==="'")&&s[c-1]!=="\\"&&(i=i===a?null:i??a),a==="#"&&!i)return s.slice(0,c)}return s}function ky(s){const i=ic(s);let c=null;for(let a=0;a<i.length;a+=1){const f=i[a];if((f==='"'||f==="'")&&i[a-1]!=="\\"){c=c===f?null:c??f;continue}if(!c&&!(!Xh(i[a-1])||i.slice(a,a+5)!=="input")&&Xh(i[a+5])&&i.slice(a+5).trimStart().startsWith("("))return!0}return!1}function Xh(s){return!s||!/[A-Za-z0-9_]/.test(s)}function Ny(s){const i=s.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=s.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Kh(s){const i=s.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function Ry(s){const i=Number(s[1]),c=s[2]===void 0?void 0:Number(s[2]),a=s[3]===void 0?1:Number(s[3]);if(a===0)return Number.POSITIVE_INFINITY;const _=(c===void 0?i:c)-(c===void 0?0:i);return _>0&&a<0||_<0&&a>0?0:Math.ceil(Math.abs(_/a))}function Ty(s){const i=new Set;for(let c=0;c<s.length;c+=1){const a=ic(s[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const f=a[1],p=Kh(s[c]);for(let _=c+1;_<s.length;_+=1){if(!s[_].trim())continue;if(Kh(s[_])<=p)break;if(new RegExp(`\\b${f}\\s*\\(`).test(ic(s[_]))){i.add(f);break}}}return[...i]}const My=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function jy(s,i){var y;const c=s.trim(),a=i.split(/\r?\n/),f=Dy(c),p=f?a[f-1]??"":"",_=Ay(a,f),b=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(b))return{simple:"Programmet blev stoppet.",technical:c,line:f};if(/MemoryError/.test(b))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/RecursionError/.test(b))return{simple:`En funktion kalder sig selv for mange gange${f?` omkring linje ${f}`:""}.`,technical:c,line:f};const E=b.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(E)return{simple:`Variablen ${E[1]} bruges inde i en funktion, før den har fået en værdi${f?` på linje ${f}`:""}.`,technical:c,line:f};const x=b.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(x)return{simple:Ly(p,x[1])?`Teksten ${x[1]} mangler måske citationstegn${f?` på linje ${f}`:""}.`:`Python kender ikke navnet ${x[1]}${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ZeroDivisionError/.test(b))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError:\s+unexpected indent/.test(b))return{simple:`Der er for meget indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError/.test(b))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ImportError|ModuleNotFoundError/.test(b)){const v=(y=b.match(/['"](.+?)['"]/))==null?void 0:y[1];return{simple:`Python kan ikke finde modulet${v?` ${v}`:""}.`,technical:c,line:f}}if(/OSError/.test(b))return/ENOENT|No such file|Errno\s+2/.test(b)?{simple:`Python kan ikke finde filen${f?` på linje ${f}`:""}.`,technical:c,line:f}:/EACCES|permission|denied/i.test(b)?{simple:`Python har ikke adgang til filen eller enheden${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Der opstod en fejl med en fil eller en enhed${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/SyntaxError/.test(b)){if(/invalid syntax/.test(b)&&_.text.trim().endsWith(","))return{simple:`Linje ${_.line??f} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:_.line??f};const v=Ff(p,f)??Ff(_.text,_.line)??Oy(a,f);return v?{simple:`Mangler måske : efter linje ${v.line}.`,technical:c,line:v.line}:f&&_.text.trim().endsWith(":")&&p.trim()&&!/^\s+/.test(p)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:c,line:f}:By(p)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Cy(p)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:zy(p)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:c,line:f}:Uy(p)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}return/TypeError/.test(b)?/takes .* positional arguments? but .* given/.test(b)||/function takes/.test(b)?{simple:`En funktion får for mange eller for få værdier${f?` på linje ${f}`:""}.`,technical:c,line:f}:/unsupported operand type/.test(b)?{simple:`To værdier kan ikke bruges sammen på den måde${f?` på linje ${f}`:""}.`,technical:c,line:f}:/not callable/.test(b)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:c,line:f}:/IndexError/.test(b)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:c,line:f}:/KeyError/.test(b)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:c,line:f}:/AttributeError/.test(b)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:c,line:f}:/ValueError/.test(b)?/invalid literal for int/.test(b)?{simple:`Teksten kan ikke laves om til et heltal${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}function Dy(s){var f;const c=(f=[...s.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function Ay(s,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const a=s[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Ff(s,i){if(!i)return null;const c=s.trim();return!My.test(c)||c.endsWith(":")?null:{line:i}}function Oy(s,i){const c=i?Math.min(s.length,i):s.length,a=Math.max(0,c-4);for(let f=c-1;f>=a;f-=1){const p=Ff(s[f]??"",f+1);if(p)return p}return null}function Cy(s){const i=(s.match(/'/g)??[]).length,c=(s.match(/"/g)??[]).length;return i%2===1||c%2===1}function By(s){var a,f;const c=(f=(a=s.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:f.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function Ly(s,i){const c=s.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function zy(s){return D_(s)>0}function Uy(s){return D_(s)<0}function D_(s){let i=0,c=null;for(let a=0;a<s.length;a+=1){const f=s[a];if((f==='"'||f==="'")&&s[a-1]!=="\\"){c=c===f?null:c??f;continue}c||((f==="("||f==="["||f==="{")&&(i+=1),(f===")"||f==="]"||f==="}")&&(i-=1))}return i}const Xf="/min_kode.py",A_=`print('Hej fra Pico Kontrol Panel')
`,Hy=500,Gy=1200,ps="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Pn(s,i){return`${s}:${i}`}function Vy(s){return new Promise(i=>window.setTimeout(i,s))}function Iy(){const s=ae(d=>d.toggleSideMenu),i=ae(d=>d.askConfirm),c=ae(d=>d.picoIdeOrigin),a=ae(d=>d.active),f=ae(d=>d.isBleConnected),p=ae(d=>d.bleListFiles),_=ae(d=>d.bleReadText),b=ae(d=>d.bleWriteText),E=ae(d=>d.bleDeleteFile),x=ae(d=>d.bleRestartAndReconnect),[y,v]=z.useState(!1),[S,V]=z.useState(!1),[I,F]=z.useState([]),[D,B]=z.useState(!1),[H,ie]=z.useState([]),[se,oe]=z.useState(null),[pe,W]=z.useState(()=>Hf(Mf())),[J,Ne]=z.useState(Xf),[ye,we]=z.useState("local"),[Z,$e]=z.useState(()=>{var d;return((d=Hf(Mf()).find(h=>h.path===Xf))==null?void 0:d.content)??A_}),[Ae,Pe]=z.useState([]),[G,re]=z.useState(!1),[ue,fe]=z.useState(""),[Ee,N]=z.useState(""),[U,te]=z.useState(null),[O,Q]=z.useState(!1),[ne,X]=z.useState(null),[He,Oe]=z.useState(!1),[Fn,Wt]=z.useState({}),[xe,wn]=z.useState(!1),[Tn,ze]=z.useState(0),[Mn,Pt]=z.useState(()=>{var d,h;return((d=Nl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((h=Nl[0])==null?void 0:h.board)??""}),[Hn,Gr]=z.useState(()=>{var d,h;return((d=Nl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((h=Nl[0])==null?void 0:h.version)??""}),[Vr,Nt]=z.useState(!1),[ci,Ir]=z.useState({top:0,left:0}),[En,Tl]=z.useState(!1),[Ml,sa]=z.useState(!1),[jl,Xn]=z.useState(!0),[ft,Jt]=z.useState(""),[ui,Dl]=z.useState([]),[Sn,dt]=z.useState(null),[Dn,Yr]=z.useState(!1),[fr,dr]=z.useState({}),[Rt,Gn]=z.useState({}),[Ie,ln]=z.useState(null),[en,An]=z.useState(null),[fc,Al]=z.useState(""),[er,Ol]=z.useState(()=>bh().clearTerminalOnRun),[mr,xs]=z.useState(()=>bh().simplifiedErrors),[fi,ws]=z.useState(()=>typeof navigator<"u"?Jh(navigator):!1),$r=z.useRef(null),Tt=z.useRef(null),on=z.useRef(null),oa=z.useRef(null),On=z.useRef(null),fn=z.useRef(null),kn=z.useRef(null),mt=z.useRef(null),Cl=z.useRef(null),Mt=z.useRef(!1),pr=z.useRef(!1),Pr=z.useRef(!1),Kn=z.useRef(""),nr=z.useRef(null),jt=z.useRef(null),nt=z.useRef(null),hr=z.useRef(null),Qn=z.useRef(null),nn=z.useRef(null),tr=z.useRef(0),_r=z.useRef(null),tt=z.useRef(null),gr=z.useRef(null),Bl=z.useRef(null),Ll=z.useRef([]),zl=z.useRef([]),qr=z.useRef(null),qt=hy(),_e=c==="control"&&!!a&&f(),pt=_e?(a==null?void 0:a.deviceID)??"ble":null,rt=Math.max(1,Z.split(`
`).length),Es=new Blob([Z]).size,dc=ye==="pico"?"Picoen":"browseren",ca=z.useMemo(()=>[...new Set(Nl.map(d=>d.board))],[]),Fr=z.useMemo(()=>Nl.filter(d=>d.board===Mn),[Mn]),Ft=Nl.find(d=>d.board===Mn&&d.version===Hn)??Fr[0]??Nl[0],Dt=ye==="pico",Vn=Dt?En:Ml,In=Dt&&En&&y&&!_e||!Dt&&Ml&&!!nt.current,Ss=Dn||Vn&&!In,ua=In?"stdin":">>>",br=In?Dt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":Dt?"Pico MicroPython":"Browser-MicroPython",di=z.useMemo(()=>{const d=new _y({onData:h=>{pr.current||!Mt.current||(Kn.current=(Kn.current+h).slice(-240),/(^|\r?\n)>>> ?$/.test(Kn.current)&&mi())},onLine:h=>{if(pr.current)return;const w=h.trimEnd();if(Pr.current&&w.trim()){$("info",w);return}if(Mt.current&&mc(w)){mi();return}Mt.current&&w.trim()&&!ks(w)&&!w.includes("raw REPL")&&$("info",w)},onLog:$,onDisconnect:()=>{v(!1),Tl(!1),Yr(!1),Mt.current=!1,Pr.current=!1,Kr(),Kn.current="",Hl(),$("warning","USB-forbindelse lukket.")}});return $r.current=d,d},[]);function $(d,h){F(w=>[...w.slice(-140),{level:d,text:h}])}function Xr(d){F(h=>[...h.slice(-140),{level:"info",text:d,variant:"input"}])}function mc(d){return d.trim()===">>>"}function ks(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Kr(){nr.current!==null&&(window.clearTimeout(nr.current),nr.current=null)}function mi(){!Mt.current||nr.current!==null||(nr.current=window.setTimeout(()=>{nr.current=null,Mt.current&&(Tl(!1),Mt.current=!1,Kn.current="",$("success","Pico-koden er færdig."))},0))}function pi(d,h=Z,w="error"){const M=jy(d,h);F(T=>[...T.slice(-140),{level:w,text:M.simple,technical:M.technical}])}function an(d,h,w=ye){Ne(d),we(w),$e(h),Gn(M=>({...M,[Pn(w,d)]:h})),lt()}function Ul(d,h="pico"){Ne(d),we(h),$e(""),ln(null),Ir({top:0,left:0}),lt()}function lt(){Ll.current=[],zl.current=[],qr.current=null}function yr(){const d=On.current;return{content:Z,selectionStart:(d==null?void 0:d.selectionStart)??Z.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??Z.length}}function fa(d){const h=Ll.current,w=h.at(-1);(w==null?void 0:w.content)===d.content&&w.selectionStart===d.selectionStart&&w.selectionEnd===d.selectionEnd||(h.push(d),h.length>Hy&&h.shift(),zl.current=[])}function Qr(d,h){let w=0;const M=Math.min(d.length,h.length);for(;w<M&&d[w]===h[w];)w+=1;let T=d.length,ee=h.length;for(;T>w&&ee>w&&d[T-1]===h[ee-1];)T-=1,ee-=1;const ce=d.slice(w,T),Ce=h.slice(w,ee),ve=Ce&&!ce?"insert":ce&&!Ce?"delete":"replace",tn=Ce.at(-1)??"";return{kind:ve,boundaryAfter:ve==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(tn)}}function Zr(d,h){if(h!=="typing")return qr.current=null,!0;const w=Date.now(),M=Qr(Z,d),T=qr.current,ee=T!==null&&T.path===J&&T.source===ye&&T.kind===M.kind&&T.kind!=="replace"&&!T.boundaryAfter&&w-T.at<=Gy;return qr.current={path:J,source:ye,kind:M.kind,at:w,boundaryAfter:M.boundaryAfter},!ee}function da(d){$e(d.content),Gn(h=>({...h,[Pn(ye,J)]:d.content})),Al(""),ln(null),window.requestAnimationFrame(()=>{const h=On.current;h&&(h.focus(),h.selectionStart=Math.min(d.selectionStart,d.content.length),h.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function ma(){const d=Ll.current.pop();return d?(qr.current=null,zl.current.push(yr()),da(d),!0):!1}function pa(){const d=zl.current.pop();return d?(qr.current=null,Ll.current.push(yr()),da(d),!0):!1}function it(d,h=(ee=>(ee=On.current)==null?void 0:ee.selectionStart)()??d.length,w=yr(),M=h,T="programmatic"){w&&d!==Z&&Zr(d,T)&&fa(w),$e(d),Gn(ce=>({...ce,[Pn(ye,J)]:d})),Al(""),$l(d,h),window.requestAnimationFrame(()=>{const ce=On.current;ce&&(ce.selectionStart=Math.min(h,d.length),ce.selectionEnd=Math.min(M,d.length))})}function Zn(d,h=ye){Gn(w=>{const M=Pn(h,d);if(!(M in w))return w;const T={...w};return delete T[M],T})}function ha(){return fr[J]===Z}function hn(d,h){dr(w=>({...w,[d]:h}))}function Xt(d,h){hn(d,h),Gn(w=>({...w,[Pn("pico",d)]:h})),ye==="pico"&&J===d&&$e(h)}function Hl(){ie([]),Pe([]),dr({}),Gn({}),ln(null),Ne(d=>{const h=Hf(Mf());if(h.find(T=>T.path===d))return d;const M=h[0];return we("local"),$e(M.content),lt(),M.path})}function dn(d){Wr(),X({value:100,label:d}),Bl.current=window.setTimeout(()=>{Bl.current=null,X(null)},900)}function Wr(){Bl.current!==null&&(window.clearTimeout(Bl.current),Bl.current=null)}function hi(){return ne?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(ne.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:ne.label}),u.jsxs("strong",{children:[Math.round(ne.value),"%"]}),ne.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:_i,"aria-label":"Stop handling",title:"Stop",children:u.jsx(et,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,ne.value))}%`}})})]}):null}function _i(){Qn.current&&Jr("Stopper læsning...",!0,!0)}function Jr(d="Stopper læsning...",h=!1,w=!1){var M;Wr(),tt.current=null,tr.current+=1,(M=Qn.current)==null||M.abort(),Qn.current=null,_r.current=null,oe(null),B(!1),X(h?{value:(ne==null?void 0:ne.value)??0,label:d,cancellable:!1}:null),w&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function Yn(d){var h;if(!(_r.current===d||tt.current===d)){if(tt.current=d,nn.current){tr.current+=1,(h=Qn.current)==null||h.abort(),Qn.current=null,_r.current=null,Ul(d),oe(d),B(!0),Wr(),X({value:2,label:`Skifter til ${ke(d)}...`,cancellable:!0});return}rr()}}function rr(){if(nn.current)return;const d=tt.current;if(!d)return;tt.current=null;const h=tr.current+1;tr.current=h;const w=new AbortController;Qn.current=w,_r.current=d,Ul(d),oe(d),B(!0),Wr(),X({value:12,label:`Indlæser ${ke(d)}...`,cancellable:!0});const M=(async()=>{try{const T=await _(d,(ee,ce)=>{tr.current===h&&X({value:ee,label:ce,cancellable:!0})},w.signal);if(w.signal.aborted||tr.current!==h)return;an(d,T,"pico"),hn(d,T),dn("Fil indlæst")}catch(T){if(tr.current!==h)return;Py(T)||w.signal.aborted?$("info",`Stoppede læsning af ${ke(d)}.`):(X(null),$("error",T instanceof Error?T.message:"BLE læsning fejlede."))}})();nn.current=M,M.finally(()=>{if(nn.current!==M)return;nn.current=null,Qn.current===w&&(Qn.current=null),_r.current===d&&(_r.current=null),!!tt.current||(oe(null),B(!1),w.signal.aborted&&X(null)),rr()})}async function vr(d){const h=pr.current;pr.current=!0;try{return await d()}finally{pr.current=h}}z.useEffect(()=>{if(!jl)return;const d=kn.current;d&&(d.scrollTop=d.scrollHeight)},[I,jl]),z.useEffect(()=>{wb({clearTerminalOnRun:er,simplifiedErrors:mr})},[er,mr]),z.useEffect(()=>{var d;Fr.some(h=>h.version===Hn)||Gr(((d=Fr[0])==null?void 0:d.version)??"")},[Fr,Hn]),z.useEffect(()=>{ws(Jh(navigator))},[]),z.useEffect(()=>{const d=()=>{const h=$r.current;Tt.current=null,on.current=null,$r.current=null,h==null||h.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var h,w;Wr(),(h=jt.current)==null||h.dispose(),jt.current=null,(w=nt.current)==null||w.dispose(),nt.current=null,window.removeEventListener("pagehide",d),d()}},[]),z.useEffect(()=>{const d=h=>{!(h.ctrlKey||h.metaKey)||h.key.toLowerCase()!=="s"||(h.preventDefault(),!D&&J.trim()&&!fi&&!O&&!U&&!G&&ga())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ye,_e,D,y,Z,J,fi,O,U,G]);function lr(d,h,w){W(M=>{const T=Gf(M,d,h,w);return os(T),T})}function Ns(d,h){W(w=>{const M=w.find(ve=>ve.path===d),ee=Rt[Pn("local",d)]??(M==null?void 0:M.content),ce=ee!==void 0&&ur(ee)!==ur(h)?Gf(w,l_(d,Jo(w)),ee,!1):w,Ce=Gf(ce,d,h,!1);return os(Ce),Ce}),Gn(w=>({...w,[Pn("local",d)]:h})),ye==="local"&&J===d&&($e(h),Al(""),ln(null),lt())}const gi=iv(H,pe,Rt,y||_e);z.useEffect(()=>{_e&&sn()},[_e]),z.useEffect(()=>{const d=gr.current;d&&d!==pt&&Hl(),gr.current=pt},[pt]);async function _a(){if(qt.supported){V(!0);try{await di.requestAndConnect();const d=new F0(di);Tt.current=d,on.current=new J0(d),v(!0),ze(0),await d.interrupt(),await Gl(d),$("success","Sendte stop-signal til Pico-terminalen."),await Rs(on.current),await Ts(on.current)}catch(d){$("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await di.disconnect()}catch(h){$("error",h instanceof Error?`USB-porten kunne ikke lukkes: ${h.message}`:"USB-porten kunne ikke lukkes.");return}ze(h=>{const w=h+1;return w>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),wn(!0)),w}),v(!1)}finally{V(!1)}}}async function Gl(d){const h=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(h.error||!h.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function bi(){var d;try{await((d=$r.current)==null?void 0:d.disconnect()),Tt.current=null,on.current=null,v(!1),Hl()}catch(h){$("error",h instanceof Error?`USB-porten kunne ikke lukkes: ${h.message}`:"USB-porten kunne ikke lukkes.")}}async function ht(d){const h=on.current;if(h){B(!0),pr.current=!0;try{await d(h)}catch(w){X(null),$("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{pr.current=!1,B(!1)}}}async function sn(d=!0){if(_e){B(!0);try{const h=await p();ie(h),d&&$("success",`Indlæste ${h.length} filer fra Pico via Bluetooth.`)}catch(h){$("error",h instanceof Error?h.message:"BLE filhandling fejlede.")}finally{B(!1)}return}await Rs(on.current,d)}async function Rs(d,h=!0){if(d){B(!0);try{const w=await vr(()=>d.list("/"));ie(w),h&&$("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){$("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{B(!1)}}}async function Vl(){if(_e){B(!0),X({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await yi((h,w)=>X({value:h,label:w}));Pe(d),dn("Fil-tjek færdigt")}catch(d){X(null),$("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{B(!1)}return}await Ts(on.current)}async function yi(d){const h=[],w=Wi.filter(T=>T.kind==="library"&&!ii(T));let M=0;for(const T of Wi){if(T.kind==="program"){h.push({...T,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(ii(T)){h.push({...T,status:"unknown",detail:"Opdateres via USB"});continue}try{const ee=M/Math.max(1,w.length)*100,ce=100/Math.max(1,w.length);$("info",`Tjekker ${T.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,ee),`Tjekker ${T.label} på Pico...`);const Ce=await _(T.path,(tn,_n)=>{d==null||d(Math.min(95,ee+tn/100*ce),`${T.label}: ${_n}`)}),ve=ur(Ce)===ur(T.content);h.push({...T,status:ve?"ok":"outdated",detail:ve?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{h.push({...T,status:"missing",detail:"Mangler på Pico"})}finally{M+=1}}return d==null||d(100,"Fil-tjek færdigt"),h}async function Ts(d){if(d){B(!0);try{const h=await vr(()=>Ms(d)),w=h;Pe(w)}catch(h){$("error",h instanceof Error?h.message:"Runtime check fejlede.")}finally{B(!1)}}}async function Ms(d){if(!d)return[];const h=[];for(const w of Wi){if(w.kind==="program"){h.push({...w,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const M=await d.readText(w.path),T=ur(M)===ur(w.content);h.push({...w,status:T?"ok":"outdated",detail:T?"Matcher appens version":"Matcher ikke appens version"})}catch{h.push({...w,status:"missing",detail:"Mangler på Pico"})}}return h}async function pc(d=J){if(_e){Yn(d);return}oe(d),await ht(async h=>{X({value:12,label:`Indlæser ${ke(d)}...`});const w=await hc(h,d);an(d,w,"pico"),hn(d,w),dn("Fil indlæst")}),oe(null)}async function hc(d,h){var w;try{return await d.readText(h)}catch(M){await((w=Tt.current)==null?void 0:w.stop().catch(()=>{})),await Vy(120);try{return await d.readText(h)}catch{throw M}}}function _c(){Q(!0)}async function ga(){if(ye==="pico"){if(!y&&!_e){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await ba();return}js()}function js(){if(Rl(J)){$("error",ps);return}lr(J,Z,!1),we("local"),Gn(d=>({...d,[Pn("local",J)]:Z})),Q(!1),$("success",`Gemte ${ke(J)} lokalt.`)}async function ba(){if(Q(!1),Rl(J))return X(null),$("error",ps),!1;if(X({value:0,label:"Starter gemning..."}),_e){B(!0);try{return await b(J,Z,(h,w)=>X({value:h,label:w})),hn(J,Z),we("pico"),Gn(h=>({...h,[Pn("pico",J)]:Z})),dn("Gemt på Pico via Bluetooth"),$("success",`Gemte ${ke(J)} på Pico via Bluetooth.`),Xo(J)&&(Nt(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await sn(!1),!0}catch(h){return X(null),$("error",h instanceof Error?h.message:"BLE gem fejlede."),!1}finally{B(!1)}}if(!on.current)return X(null),!1;let d=!1;return await ht(async h=>{At(J,"pico")?await h.replaceTextSafely(J,Z,(w,M)=>X({value:w,label:M})):await h.writeText(J,Z,(w,M)=>X({value:w,label:M})),hn(J,Z),we("pico"),Gn(w=>({...w,[Pn("pico",J)]:Z})),dn("Gemt på Pico via USB"),$("success",`Gemte ${J}.`),await sn(),await Vl(),d=!0}),d}function gc(){Ds(ke(J),Z),Q(!1),$("success",`Downloadede ${ke(J)}.`)}function Ds(d,h){const w=new Blob([h],{type:"text/plain;charset=utf-8"}),M=URL.createObjectURL(w),T=document.createElement("a");T.href=M,T.download=d,T.click(),URL.revokeObjectURL(M)}async function vi(d){B(!0),Nt(!1),X({value:10,label:"Genstarter Pico..."});try{await x(d)?(dn("Pico genforbundet"),$("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await sn()):(X(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(h){X(null),$("error",h instanceof Error?h.message:"Genstart/genforbindelse mislykkedes.")}finally{B(!1)}}function As(d){var ee,ce;const h=d??{path:J,source:ye},w=h.source==="pico"?"Pico":"browser",M=(d==null?void 0:d.versions.length)??(h.source==="pico"?((ee=Ji(H).get(h.path))==null?void 0:ee.length)??0:((ce=Ji(Jo(pe)).get(h.path))==null?void 0:ce.length)??0),T=M>0?` Det sletter også filens versionshistorik (${M} gemte versioner).`:"";te(null),i({title:"Slet fil",message:`Vil du slette ${ke(h.path)} fra ${w}?${T}`,confirmLabel:"Slet",onConfirm:()=>{Os(h)}})}function bc(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{yc()}})}async function yc(){if(!on.current){$("error","Forbind Picoen med USB fÃ¸rst.");return}await ht(async d=>{await d.delete("/DeviceSettings.txt").catch(h=>{const w=h instanceof Error?h.message:"";if(!/ENOENT|No such file|not found/i.test(w))throw h}),dr(h=>{const w={...h};return delete w["/DeviceSettings.txt"],w}),Zn("/DeviceSettings.txt","pico"),$("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var Ã¥bent."),await sn()})}async function Os(d){const h=d.path,w=d.source,M=h===J&&w===ye;if(w==="local"){const ce=Ji(Jo(pe)).get(h)??[],Ce=new Set([h,...ce.map(_n=>_n.path)]),ve=pe.filter(_n=>!Ce.has(_n.path));W(ve),os(ve),M&&an(h,"","local");for(const _n of Ce)Zn(_n,"local");const tn=ce.length>0?` og ${ce.length} gemte versioner`:"";$("warning",`Slettede ${ke(h)}${tn} fra browseren.`);return}const T=Ji(H).get(h)??[],ee=[h,...T.map(ce=>ce.path)];if(_e){B(!0);try{for(const Ce of ee)await E(Ce);dr(Ce=>{const ve={...Ce};for(const tn of ee)delete ve[tn];return ve}),M&&an(h,"","pico");for(const Ce of ee)Zn(Ce,"pico");const ce=T.length>0?` og ${T.length} gemte versioner`:"";$("warning",`Slettede ${ke(h)}${ce} på Pico via Bluetooth.`),await sn()}catch(ce){$("error",ce instanceof Error?ce.message:"BLE sletning fejlede.")}finally{B(!1)}return}if(!on.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await ht(async ce=>{for(const ve of ee)await ce.delete(ve);dr(ve=>{const tn={...ve};for(const _n of ee)delete tn[_n];return tn});const Ce=T.length>0?` og ${T.length} gemte versioner`:"";$("warning",`Slettede ${h}${Ce}.`),M&&an(h,"","pico");for(const ve of ee)Zn(ve,"pico");await sn(),await Vl()})}async function vc(d){if(!d)return;const h=Yy(d.name);if(!h){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Rl(h)){$("error",ps);return}if(d.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const w=await d.text();if(ye==="local"){lr(h,w,!0),an(h,w,"local"),$("success",`Importerede ${ke(h)} i browseren.`);return}if(!y&&!_e){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(_e&&ii({path:h})){$("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(X({value:0,label:"Uploader fil til Pico..."}),_e){B(!0);try{await b(h,w,(T,ee)=>X({value:T,label:ee})),hn(h,w),an(h,w,"pico"),dn("Fil uploadet til Pico"),$("success",`Importerede ${ke(h)} på Pico via Bluetooth.`),await sn()}catch(T){X(null),$("error",T instanceof Error?T.message:"Kunne ikke importere filen til Pico.")}finally{B(!1)}return}if(!on.current){X(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await ht(async T=>{At(h,"pico")?await T.replaceTextSafely(h,w,(ee,ce)=>X({value:ee,label:ce})):await T.writeText(h,w,(ee,ce)=>X({value:ee,label:ce})),hn(h,w),an(h,w,"pico"),dn("Fil uploadet til Pico"),$("success",`Importerede ${ke(h)} på Pico.`),await sn(),await Vl()})}async function xc(){fe(""),re(!0)}function wc(){const d=Qh(ue);if(!d)return;if(Rl(d)){$("error",ps);return}const h=ye;if(At(d,h)){$("error",`Der findes allerede en fil med navnet ${ke(d)} i ${h==="pico"?"Pico":"browseren"}.`);return}if(h==="local"){lr(d,"",!1),an(d,"","local"),re(!1),$("success",`Oprettede ${ke(d)} i browseren.`);return}Ec(d)}async function Ec(d){if(!y&&!_e){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(re(!1),X({value:0,label:"Opretter fil på Pico..."}),_e){B(!0);try{await b(d,"",(h,w)=>X({value:h,label:w})),hn(d,""),an(d,"","pico"),dn("Fil oprettet på Pico"),$("success",`Oprettede ${ke(d)} på Pico via Bluetooth.`),await sn()}catch(h){X(null),$("error",h instanceof Error?h.message:"Kunne ikke oprette fil på Pico.")}finally{B(!1)}return}if(!on.current){X(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await ht(async h=>{await h.writeText(d,"",(w,M)=>X({value:w,label:M})),hn(d,""),an(d,"","pico"),dn("Fil oprettet på Pico"),$("success",`Oprettede ${ke(d)} på Pico.`),await sn()})}function Sc(d){d.type==="file"&&(te(d),N($y(d.path)))}async function kc(d){if(!U)return;const h=U.path;if(te(null),U.source==="local"){const w=pe.find(M=>M.path===d.path);if(!w){$("error","Kunne ikke finde versionen i browseren.");return}Ns(h,w.content),an(h,w.content,"local"),$("success",`Gendannede ${ke(d.path)} i browseren.`);return}if(X({value:0,label:"Gendanner version..."}),_e){B(!0);try{const w=await _(d.path);await b(h,w,(M,T)=>X({value:M,label:T})),hn(h,w),an(h,w,"pico"),dn("Version gendannet"),await sn(!1)}catch(w){X(null),$("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{B(!1)}return}on.current&&await ht(async w=>{await w.replaceTextSafely(h,await w.readText(d.path),(T,ee)=>X({value:T,label:ee}));const M=await w.readText(h);hn(h,M),an(h,M,"pico"),dn("Version gendannet"),await sn()})}function Nc(d){const h=(U==null?void 0:U.source)==="local"?"browseren":"Pico";i({title:"Slet version",message:`Vil du slette ${ke(d.path)} fra ${h}?`,confirmLabel:"Slet",onConfirm:()=>{Rc(d)}})}async function Rc(d){if((U==null?void 0:U.source)==="local"){const h=pe.filter(w=>w.path!==d.path);W(h),os(h),Zn(d.path,"local"),te(w=>w&&{...w,versions:w.versions.filter(M=>M.path!==d.path)}),$("warning",`Slettede ${ke(d.path)} fra browserens versionshistorik.`);return}if(_e){B(!0);try{await E(d.path),await sn(!1),te(h=>h&&{...h,versions:h.versions.filter(w=>w.path!==d.path)})}catch(h){$("error",h instanceof Error?h.message:"Kunne ikke slette versionen.")}finally{B(!1)}return}on.current&&await ht(async h=>{await h.delete(d.path),await sn(!1),te(w=>w&&{...w,versions:w.versions.filter(M=>M.path!==d.path)})})}async function Tc(){var w;if(!U)return;const d=U,h=rv(d.path,M=>At(M,d.source));if(!h){$("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${ke(d.path)}.`);return}if(d.source==="local"){const M=Rt[Pn("local",d.path)]??((w=pe.find(T=>T.path===d.path))==null?void 0:w.content)??"";lr(h,M,!1),an(h,M,"local"),te(null),$("success",`Duplikerede ${ke(d.path)} til ${ke(h)} i browseren.`);return}if(te(null),X({value:0,label:"Duplikerer fil..."}),_e){B(!0);try{const M=fr[d.path]??await _(d.path);await b(h,M,(T,ee)=>X({value:T,label:ee})),hn(h,M),an(h,M,"pico"),dn("Fil duplikeret"),await sn(!1),$("success",`Duplikerede ${ke(d.path)} til ${ke(h)} på Pico via Bluetooth.`)}catch(M){X(null),$("error",M instanceof Error?M.message:"Kunne ikke duplikere filen.")}finally{B(!1)}return}if(!on.current){X(null),$("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await ht(async M=>{const T=await M.readText(d.path);await M.writeText(h,T,(ee,ce)=>X({value:ee,label:ce})),hn(h,T),an(h,T,"pico"),dn("Fil duplikeret"),await sn(!1),$("success",`Duplikerede ${ke(d.path)} til ${ke(h)} på Pico.`)})}async function ya(){if(!U)return;const d=U,h=Uf(Ee,hs(d.path));if(!h||h===d.path)return;if(Rl(h)){$("error",ps);return}if(At(h,d.source)){$("error",`Der findes allerede en fil med navnet ${ke(h)}.`);return}const w=d.source==="local",M=d.source==="pico";if(_e&&M&&(Xo(d.path)||Xo(h))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}B(!0);try{if(M)if(_e){const T=fr[d.path]??await _(d.path);await b(h,T,(ee,ce)=>X({value:ee,label:ce})),await E(d.path),dr(ee=>({...a_(ee,d.path,h),[h]:T}))}else on.current&&(await vr(()=>on.current.rename(d.path,h)),dr(T=>a_(T,d.path,h)));w&&W(T=>{const ee=T.map(ce=>ce.path===d.path?{...ce,path:h,updatedAt:Date.now()}:ce);return os(ee),ee}),J===d.path&&ye===d.source&&Ne(h),Gn(T=>ov(T,d.source,d.path,h)),te(null),N(""),$("success",`Omdøbte ${ke(d.path)} til ${ke(h)}.`),M&&await sn()}catch(T){$("error",T instanceof Error?T.message:"Kunne ikke omdøbe filen.")}finally{X(null),B(!1)}}function At(d,h){return h==="pico"?H.some(w=>w.path===d):pe.some(w=>w.path===d)}async function Mc(d,h){if(!At(d,"pico"))return;const w=l_(d,H),M=fr[d]??await _(d);h!==void 0&&ur(M)===ur(h)||await b(w,M)}function Cs(d){if(d.type!=="file"){_e&&Jr(void 0,!1),Ne(d.path),we(d.source);return}if(_e&&ii(d)){$("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){_e&&Jr(void 0,!1);const w=pe.find(M=>M.path===d.path);an(d.path,Rt[Pn("local",d.path)]??(w==null?void 0:w.content)??"","local");return}const h=Pn("pico",d.path);if(Object.prototype.hasOwnProperty.call(Rt,h)){_e&&Jr(void 0,!1),an(d.path,Rt[h],"pico");return}if(Object.prototype.hasOwnProperty.call(fr,d.path)){_e&&Jr(void 0,!1),an(d.path,fr[d.path],"pico");return}pc(d.path)}async function va(){if(!y&&!_e){const d=Zh();Pe(d),Wt(Wh(d)),Oe(!0),X(null);return}B(!0),X({value:4,label:_e?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",_e?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Ae.length>0?Ae:_e?await yi((h,w)=>X({value:h,label:w})):await vr(()=>Ms(on.current));Pe(d),Wt(Wh(d)),Oe(!0),X(null)}catch(d){X(null),$("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{B(!1)}}async function Bs(){if(Oe(!1),_e){B(!0);try{const h=(Ae.length>0?Ae:Wi.map(M=>({...M,status:"unknown",detail:"Ikke tjekket"}))).filter(M=>Fn[M.id]&&!ii(M));if(h.length===0){$("info","Ingen filer valgt til installation.");return}let w=null;X({value:0,label:"Starter installation..."});for(const[M,T]of h.entries()){$("info",`Installerer ${T.label} via Bluetooth...`);const ee=M/h.length*100,ce=100/h.length;await Mc(T.path,T.content),await b(T.path,T.content,(Ce,ve)=>{X({value:Math.min(99,ee+Ce/100*ce),label:`${T.label}: ${ve}`})}),Xt(T.path,T.content),$("success",`Installerede ${T.label}.`),T.kind==="library"&&(w=T),Xo(T.path)&&Nt(!0)}dn("Installation færdig"),await sn(!1),await Vl(),w&&zs(w)}catch(d){X(null),$("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{B(!1)}return}await ht(async d=>{const w=(Ae.length>0?Ae:Wi.map(T=>({...T,status:"unknown",detail:"Ikke tjekket"}))).filter(T=>Fn[T.id]);if(w.length===0){$("info","Ingen filer valgt til installation.");return}let M=null;X({value:0,label:"Starter installation..."});for(const[T,ee]of w.entries()){$("info",`Installerer ${ee.label}...`);const ce=T/w.length*100,Ce=100/w.length,ve=await d.readText(ee.path).catch(()=>null);ve!==null&&ur(ve)===ur(ee.content)?(X({value:Math.min(99,ce+Ce),label:`${ee.label}: Allerede nyeste version`}),$("info",`${ee.label} findes allerede i samme version.`)):(await d.replaceTextSafely(ee.path,ee.content,(tn,_n)=>{X({value:Math.min(99,ce+tn/100*Ce),label:`${ee.label}: ${_n}`})},{createBackup:!0}),$("success",`Installerede ${ee.label}.`)),Xt(ee.path,ee.content),ee.kind==="library"&&(M=ee)}dn("Installation færdig"),await sn(!1),await Vl(),M&&zs(M)})}function xa(){return(Ae.length>0?Ae:Zh()).filter(h=>Fn[h.id])}function Ls(){const d=xa();if(d.length===0){$("info","Ingen filer valgt.");return}for(const h of d)Ns(h.path,h.content);Oe(!1),$("success",`Gemte ${d.length} filer i browseren.`)}function el(){const d=xa();if(d.length===0){$("info","Ingen filer valgt.");return}d.forEach((h,w)=>{window.setTimeout(()=>{Ds(ke(h.path),h.content)},w*120)}),Oe(!1),$("success",`Starter download af ${d.length} filer.`)}function zs(d){an(d.path,d.content,"pico"),hn(d.path,d.content),$("info",`Åbnede ${d.label} i editoren.`)}function jc(d,h){Wt(w=>{if(d.kind!=="program")return{...w,[d.id]:h};const M={...w};for(const T of Ae)T.kind==="program"&&(M[T.id]=!1);return M[d.id]=h,M})}async function Dc(){if(Sa(),_e&&ye==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ye==="local"){await Us();return}const d=Tt.current;if(!d){$("error",`${ke(J)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(J.endsWith(".py")){if(!ha()&&($("info",`${ke(J)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await ba())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(D)return;Kr(),Kn.current="",Xn(!0);try{await d.runFile(J,()=>{Kr(),Kn.current="",Pr.current=!1,Tl(!0),Mt.current=!0}),$("success",`Kører ${ke(J)}. Brug Stop for at afbryde.`)}catch(h){Tl(!1),Mt.current=!1,Kr(),Kn.current="",$("error",h instanceof Error?h.message:"Kunne ikke starte koden.")}return}B(!0);try{const h=await d.exec(Z,2e4);h.output.trim()&&$("info",h.output),h.error.trim()&&pi(h.error,Z),!h.output.trim()&&!h.error.trim()&&$("success","Koden kørte uden output.")}catch(h){$("error",h instanceof Error?h.message:"Kunne ikke køre koden.")}finally{B(!1)}}async function Us(){const d=qf(Z,{allowInput:!0});if(d.some(M=>M.level==="error")){for(const M of d){const T=M.line?`Linje ${M.line}: `:"";$(M.level==="error"?"error":"warning",`${T}${M.text}`)}return}/\binput\s*\(/.test(Z)&&!j_()&&$("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const h=new AbortController;hr.current=h;const w=new Ey;nt.current=w,B(!0),sa(!0),Xn(!0),$("info",y?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const M=[],T=await w.run(Z,{timeoutMs:null,signal:h.signal,onOutput:ve=>{M.push(ve),$("info",ve)}});for(const ve of T.issues){const tn=ve.line?`Linje ${ve.line}: `:"";$(ve.level==="error"?"error":"warning",`${tn}${ve.text}`)}const ee=[...M,T.output].filter(Boolean).join(`
`).trim(),ce=T.output.trim();!T.error.trim()&&qy(ee)?pi(ee,Z):(ce&&$("info",ce),T.error.trim()&&pi(T.error,Z,T.unavailable?"warning":"error")),T.ok&&!ee&&!T.error.trim()&&$("success","Browser-MicroPython kørte uden output.")}finally{hr.current=null,nt.current=null,w.dispose(),sa(!1),B(!1)}}async function Hs(){var h,w,M;if(Ml){(h=hr.current)==null||h.abort(),(w=nt.current)==null||w.stop(),$("warning","Stoppede Browser-MicroPython."),Xn(!0);return}if(!Dt&&Dn){(M=jt.current)==null||M.reset(),Yr(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Xn(!0);return}const d=Tt.current;if(d)try{await d.stop(),$("warning","Stoppede koden på Pico.")}catch(T){$("error",T instanceof Error?T.message:"Kunne ikke stoppe koden.")}finally{Tl(!1),Mt.current=!1,Kr(),Kn.current="",Xn(!0)}}function Il(){const d=kn.current;if(!d)return;const h=d.scrollHeight-d.scrollTop-d.clientHeight<12;Xn(h)}function Yl(){F([]),Xn(!0)}function Ac(){window.requestAnimationFrame(()=>{const d=kn.current;d&&(d.scrollTop=d.scrollHeight)})}async function nl(){const d=In?ft:ft.trimEnd();if(In){if(!Dt){const M=nt.current;if(!M){$("warning","Browser-MicroPython kører ikke lige nu."),_t();return}Jt(""),Xn(!0),Xr(d),M.sendInput(d),_t();return}const w=Tt.current;if(!w){$("warning","Pico-terminalen er ikke forbundet."),_t();return}Jt(""),Xn(!0);try{await w.sendProgramInput(d)}catch(M){$("error",M instanceof Error?M.message:"Kunne ikke sende input til Pico-koden.")}finally{_t()}return}if(!d.trim())return;if(Dl(w=>(w.at(-1)===d?w:[...w,d]).slice(-80)),dt(null),An(null),Vn){$("warning",Dt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),_t();return}if(!Dt){const w=qf(d);if(w.some(T=>T.level==="error")){for(const T of w){const ee=T.line?"Linje "+T.line+": ":"";$(T.level==="error"?"error":"warning",ee+T.text)}_t();return}const M=jt.current??new wy;jt.current=M,Jt(""),Yr(!0),Xn(!0),$("info",">>> "+d);try{let T=!1;const ee=await M.send(d,{timeoutMs:15e3,onOutput:Ce=>{T=!0,$("info",Ce)}}),ce=ee.output.trim();ce&&!T&&$("info",ce),ee.error.trim()&&pi(ee.error,d,ee.unavailable?"warning":"error")}catch(T){$("error",T instanceof Error?T.message:"Browser-MicroPython-terminalen fejlede.")}finally{Yr(!1),_t()}return}if(_e){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),_t();return}const h=Tt.current;if(!y||!h){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),_t();return}Jt(""),Yr(!0),Xn(!0),Pr.current=!0,$("info",">>> "+d);try{await h.sendFriendlyLine(d)}catch(w){Pr.current=!1,$("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Yr(!1),_t()}}function _t(){window.requestAnimationFrame(()=>{const d=mt.current;if(!d||d.disabled)return;d.focus();const h=d.value.length;d.selectionStart=h,d.selectionEnd=h})}function wa(d,h,w){if(w.length===0)return null;const M=y||_e;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:h})]}),w.map(T=>{const ee=_e&&ii(T);return u.jsxs("label",{className:`ide-install-row ${ee?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Fn[T.id],disabled:ee,onChange:ce=>jc(T,ce.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Ea(T),M&&T.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${T.status}`,children:ee?"USB":lv(T.status)})]}),u.jsx("small",{children:T.description})]})]},T.id)})]})}function Ea(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Sa(){er&&F([]),Xn(!0)}function xi(d,h){const w=d.indexOf(`
`,h);return w===-1?d.length:w}function $l(d,h){if(n_(d,h)){ln(null);return}const w=Qf(d,h);if(!w||w.query.length<1){ln(null);return}const M=e_(d,h,!0).slice(0,8),T=t_(On.current,w.start,M.length);ln(M.length>0&&T?{items:M,selected:0,start:w.start,end:h,position:T}:null)}function wi(d,h){if(n_(d,h)){An(null);return}const w=Qf(d,h);if(!w||w.query.length<1){An(null);return}const M=e_(d,h,!1).slice(0,8),T=t_(mt.current,w.start,M.length);An(M.length>0&&T?{items:M,selected:0,start:w.start,end:h,position:T}:null)}function Gs(d){const h=d.value.slice(d.selectionStart,d.selectionEnd);Al(Jy(h)?h:"")}function Ei(d,h){window.requestAnimationFrame(()=>{const w=d==null?void 0:d.querySelector(`[data-autocomplete-index="${h}"]`);w==null||w.scrollIntoView({block:"nearest"})})}function ka(d=Ie==null?void 0:Ie.items[Ie.selected]){if(!d||!Ie)return;const h=yr(),w=Z.slice(0,Ie.start)+d.insert+Z.slice(Ie.end),M=Ie.start+d.insert.length-(d.insert.endsWith("()")?1:0);ln(null),it(w,M,h),window.requestAnimationFrame(()=>{const T=On.current;T&&T.focus()})}function Vs(d=en==null?void 0:en.items[en.selected]){if(!d||!en)return;const h=ft.slice(0,en.start)+d.insert+ft.slice(en.end),w=en.start+d.insert.length-(d.insert.endsWith("()")?1:0);Jt(h),An(null),window.requestAnimationFrame(()=>{const M=mt.current;M&&(M.focus(),M.selectionStart=w,M.selectionEnd=w)})}function Oc(d){const h=On.current;if(!h)return!1;const w=h.selectionStart,M=h.selectionEnd,T={content:Z,selectionStart:w,selectionEnd:M},ee=Z.lastIndexOf(`
`,w-1)+1,ce=M>w&&Z[M-1]===`
`?M-1:M,Ce=xi(Z,ce),ve=Ce<Z.length?Ce+1:Ce,tn=Z.slice(ee,ve);if(d<0){if(ee===0)return!1;const Cn=Z.lastIndexOf(`
`,ee-2)+1,Ot=Z.slice(Cn,ee),xr=Z.slice(0,Cn)+tn+Ot+Z.slice(ve),wr=-Ot.length;return it(xr,w+wr,T,M+wr),!0}if(ve>=Z.length)return!1;const _n=xi(Z,ve),gt=_n<Z.length?_n+1:_n,Me=Z.slice(ve,gt),gn=Z.slice(0,ee)+Me+tn+Z.slice(gt),ir=Me.length;return it(gn,w+ir,T,M+ir),!0}function Wn(d){var gt;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?pa():ma())&&ln(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),pa()&&ln(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!D&&J.trim()&&ga();return}if(d.altKey&&!d.ctrlKey&&!d.metaKey&&(d.key==="ArrowUp"||d.key==="ArrowDown")){d.preventDefault(),Oc(d.key==="ArrowUp"?-1:1)&&ln(null);return}if(Ie){if(d.key==="ArrowDown"){d.preventDefault(),ln(Me=>{if(!Me)return Me;const gn=(Me.selected+1)%Me.items.length;return Ei(fn.current,gn),{...Me,selected:gn}});return}if(d.key==="ArrowUp"){d.preventDefault(),ln(Me=>{if(!Me)return Me;const gn=(Me.selected-1+Me.items.length)%Me.items.length;return Ei(fn.current,gn),{...Me,selected:gn}});return}if(d.key==="Tab"){d.preventDefault(),ka();return}if(d.key==="Enter"){if(!(Ie.items[Ie.selected]&&C_(Ie.items[Ie.selected],Z.slice(Ie.start,Ie.end)))){d.preventDefault(),ka();return}ln(null)}if(d.key==="Escape"){d.preventDefault(),ln(null);return}}if(d.key==="Enter"){d.preventDefault();const Me=d.currentTarget,gn=Me.selectionStart,ir=Me.selectionEnd,Cn={content:Z,selectionStart:gn,selectionEnd:ir},Ot=Z.lastIndexOf(`
`,gn-1)+1,xr=Z.slice(Ot,gn),wr=((gt=xr.match(/^[ \t]*/))==null?void 0:gt[0])??"",Is=xr.trimEnd().endsWith(":")?"    ":"",Si=`
${wr}${Is}`,Na=Z.slice(0,gn)+Si+Z.slice(ir),tl=gn+Si.length;it(Na,tl,Cn),window.requestAnimationFrame(()=>{Me.selectionStart=tl,Me.selectionEnd=tl});return}if(d.key!=="Tab")return;d.preventDefault();const h=d.currentTarget,w=h.selectionStart,M=h.selectionEnd,T={content:Z,selectionStart:w,selectionEnd:M},ee="    ";if(d.shiftKey){const Me=Z.lastIndexOf(`
`,w-1)+1,gn=w===M?xi(Z,w):M,ir=Z.slice(Me,gn);let Cn=0,Ot=0;const xr=ir.replace(/(^|\n)( {1,4}|\t)/g,(Is,Si,Na,tl)=>{const Ra=Na.length;return Me+tl<w&&(Cn+=Ra),Ot+=Ra,Si});if(Ot===0)return;const wr=Z.slice(0,Me)+xr+Z.slice(gn);it(wr,Math.max(Me,w-Cn),T,w===M?Math.max(Me,w-Cn):Math.max(Me,M-Ot)),window.requestAnimationFrame(()=>{h.selectionStart=Math.max(Me,w-Cn),h.selectionEnd=w===M?h.selectionStart:Math.max(h.selectionStart,M-Ot)});return}if(w===M){const Me=Z.slice(0,w)+ee+Z.slice(M);it(Me,w+ee.length,T),window.requestAnimationFrame(()=>{h.selectionStart=w+ee.length,h.selectionEnd=w+ee.length});return}const ce=Z.lastIndexOf(`
`,w-1)+1,ve=Z.slice(ce,M).replace(/^/gm,ee),tn=ve.split(`
`).length,_n=Z.slice(0,ce)+ve+Z.slice(M);it(_n,w+ee.length,T,M+tn*ee.length),window.requestAnimationFrame(()=>{h.selectionStart=w+ee.length,h.selectionEnd=M+tn*ee.length})}function Pl(d){if(In){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),nl());return}if(en){if(d.key==="ArrowDown"){d.preventDefault(),An(h=>{if(!h)return h;const w=(h.selected+1)%h.items.length;return Ei(Cl.current,w),{...h,selected:w}});return}if(d.key==="ArrowUp"){d.preventDefault(),An(h=>{if(!h)return h;const w=(h.selected-1+h.items.length)%h.items.length;return Ei(Cl.current,w),{...h,selected:w}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),Vs();return}if(d.key==="Escape"){d.preventDefault(),An(null);return}}if(d.key==="Tab"){d.preventDefault();const h=d.currentTarget,w=h.selectionStart,M=h.selectionEnd,T="    ",ee=ft.slice(0,w)+T+ft.slice(M),ce=w+T.length;Jt(ee),dt(null),An(null),window.requestAnimationFrame(()=>{h.selectionStart=ce,h.selectionEnd=ce});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===ft.length&&d.currentTarget.selectionEnd===ft.length)||ui.length===0)return;d.preventDefault();const w=d.key==="ArrowUp"?Sn===null?ui.length-1:Math.max(0,Sn-1):Sn===null||Sn+1>=ui.length?null:Sn+1;dt(w);const M=w===null?"":ui[w]??"";Jt(M),An(null),Xn(!0),window.requestAnimationFrame(()=>{const T=mt.current;T&&(T.selectionStart=M.length,T.selectionEnd=M.length,Ac())});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),nl())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(rd,{title:"Pico Kodeværksted",onMenu:()=>s()}),fi?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:xc,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(et,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=oa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(et,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>sn(),disabled:!y&&!_e||D,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(et,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:gi.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):gi.map(d=>{if(d.kind==="separator"){const T=d.id==="pico-files"&&!y&&!_e;return u.jsxs(z.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),T&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const h=_e&&ii(d),w=Rt[Pn(d.source,d.path)],M=w!==void 0&&w!==tv(d,pe,fr);return u.jsxs("div",{className:`ide-file-row ${J===d.path&&ye===d.source?"active":""} ${h?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>Cs(d),disabled:h,title:h?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:M?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${M?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Sc(d),disabled:d.type!=="file"||D||h,"aria-label":`Filvalg for ${d.name}`,title:h?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(et,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:_e?"Forbundet Pico":"USB udvikling"}),!_e&&u.jsx("span",{className:`ide-usb-status ${qt.supported?"available":"unavailable"}`,title:qt.message,"data-tooltip":qt.message,role:"img","aria-label":qt.message,tabIndex:0,children:"!"})]}),_e&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!_e&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:y?bi:_a,disabled:!qt.supported||S,children:S?"Forbinder...":y?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:va,disabled:_e||D,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:bc,disabled:!y||D,children:"Nulstil enhed"})]}),_e&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(et,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:va,disabled:D,children:"Startprogrammer og biblioteker"})]}),!_e&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>wn(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[ke(J),u.jsxs("small",{children:[Es," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Dc,disabled:D,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Hs,disabled:!Ml&&!(!Dt&&Dn)&&(!y||!En),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:_c,disabled:D||!J.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>As(),disabled:D||!J.trim(),children:"Slet"})]})]}),hi(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-ci.top}px)`},children:Array.from({length:rt},(d,h)=>u.jsx("span",{children:h+1},h))}),u.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-ci.left}px, ${-ci.top}px)`},children:nv(Z,fc)}),u.jsx("textarea",{ref:On,className:"ide-editor",value:Z,onChange:d=>it(d.target.value,d.target.selectionStart,yr(),d.target.selectionEnd,"typing"),onKeyDown:Wn,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||$l(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{$l(d.currentTarget.value,d.currentTarget.selectionStart),Gs(d.currentTarget)},onSelect:d=>Gs(d.currentTarget),onScroll:d=>{Ir({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Ie&&$l(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:D||!!se,"aria-busy":D||!!se,spellCheck:!1}),Ie&&u.jsx("div",{ref:fn,className:`ide-autocomplete placement-${Ie.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:Ie.position.left,top:Ie.position.top,maxHeight:Ie.position.maxHeight},children:(Ie.position.placement==="above"?Ie.items.map((d,h)=>({item:d,index:h})).reverse():Ie.items.map((d,h)=>({item:d,index:h}))).map(({item:d,index:h})=>u.jsx("button",{className:h===Ie.selected?"active":"",type:"button","data-autocomplete-index":h,onMouseDown:w=>{w.preventDefault(),ka(d)},role:"option","aria-selected":h===Ie.selected,children:d.label},d.label))}),se&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",ke(se),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${mr?"":"active"}`,type:"button",onClick:()=>xs(d=>!d),"aria-label":mr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!mr,title:mr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${er?"active":""}`,type:"button",onClick:()=>Ol(d=>!d),"aria-pressed":er,title:er?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Yl,disabled:I.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:kn,onScroll:Il,onClick:()=>{var d;return(d=mt.current)==null?void 0:d.focus()},children:[I.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):I.map((d,h)=>u.jsx("div",{className:`term-line ${d.variant==="input"?"term-input-echo":`term-${d.level}`}`,children:d.technical&&!mr?d.technical:d.text},`${h}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Vn&&!In?"locked":""} ${In?"stdin":""}`,onSubmit:d=>{d.preventDefault(),nl()},children:[u.jsx("span",{"aria-hidden":"true",children:ua}),u.jsx("textarea",{ref:mt,value:ft,onChange:d=>{Jt(d.target.value),dt(null),In?An(null):wi(d.target.value,d.target.selectionStart)},onKeyDown:Pl,onKeyUp:d=>{In||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||wi(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{In||wi(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:Ss,placeholder:br,"aria-label":In?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:br,rows:Math.max(1,ft.split(`
`).length)})]}),en&&u.jsx("div",{ref:Cl,className:`ide-autocomplete ide-repl-autocomplete placement-${en.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:en.position.left,top:en.position.top,maxHeight:en.position.maxHeight},children:(en.position.placement==="above"?en.items.map((d,h)=>({item:d,index:h})).reverse():en.items.map((d,h)=>({item:d,index:h}))).map(({item:d,index:h})=>u.jsx("button",{className:h===en.selected?"active":"",type:"button","data-autocomplete-index":h,onMouseDown:w=>{w.preventDefault(),Vs(d)},role:"option","aria-selected":h===en.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:oa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var h;vc((h=d.target.files)==null?void 0:h[0]),d.currentTarget.value=""}}),O&&u.jsx(Rn,{title:"Gem fil",onClose:()=>Q(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:js,children:"Gem i browser"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void ba(),disabled:!y&&!_e||D,children:"Gem på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:gc,children:"Download til computer"})]})}),He&&u.jsx(Rn,{title:"Startprogrammer og biblioteker",onClose:()=>Oe(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:y||_e?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[wa("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(d=>d.kind==="program")),wa("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(y||_e)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Bs,disabled:D,children:"Installer valgte på Pico"}),u.jsx("button",{className:y||_e?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ls,disabled:D,children:"Gem valgte i browser"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:el,disabled:D,children:"Download valgte"})]})]})}),Vr&&u.jsx(Rn,{title:"main.py er gemt",onClose:()=>Nt(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void vi("control"),disabled:D,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void vi("ide"),disabled:D,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Nt(!1),disabled:D,children:"Senere"})]})}),xe&&u.jsx(Rn,{title:"Installer MicroPython",onClose:()=>wn(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:Mn,onChange:d=>Pt(d.target.value),children:ca.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Ft==null?void 0:Ft.version)??Hn,onChange:d=>Gr(d.target.value),children:Fr.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),Ft&&u.jsx("a",{className:"btn btn-primary btn-block",href:Ft.url,download:Ft.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),G&&u.jsx(Rn,{title:"Ny Python-fil",onClose:()=>re(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),wc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>fe(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",dc,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Qh(ue),children:"Opret"})]})}),U&&u.jsx(Rn,{title:ke(U.path),onClose:()=>te(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:U.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),ya()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:Ee,onChange:d=>N(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",hs(U.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",hs(U.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Uf(Ee,hs(U.path))||Uf(Ee,hs(U.path))===U.path||D,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Tc(),disabled:D,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>As(U),disabled:D,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),U.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:U.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:ke(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void kc(d),disabled:D,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Nc(d),disabled:D,children:"Slet"})]},d.path))})]})]})})]})}function Qh(s){var c;const i=(c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Yy(s){const i=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=O_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function Uf(s,i="py"){const c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=O_(a[1]),p=i.replace(/^\./,"").toLowerCase(),_=(a[2]??(p||"py")).toLowerCase();return f?`/${f}.${_}`:""}function $y(s){return ke(s).replace(/\.(py|txt|json|csv)$/i,"")}function O_(s){return s.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function hs(s){var a;const i=ke(s).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function ur(s){return s.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Zh(){return Wi.map(s=>({...s,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Wh(s){const i={};return s.forEach(c=>{i[c.id]=!1}),i}function ke(s){return s.split("/").filter(Boolean).pop()??s}function Xo(s){return s.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Jh(s){const i=s.userAgent||"",c=s.platform||"",a=s.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),p=/Macintosh/i.test(c)&&a>1;return f&&!p}function Py(s){return s instanceof DOMException&&s.name==="AbortError"}function qy(s){return/Traceback \(most recent call last\):/.test(s)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(s)}function ii(s){return Fy(s)}function Fy(s){return s.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Kf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(s=>({label:s,insert:`${s}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(s)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(s=>({label:`${s}()`,insert:`${s}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function e_(s,i,c){const a=Qf(s,i);if(!a)return[];const f=Xy(s,a.start,i),p=a.query.toLowerCase(),_=f.beforeToken.toLowerCase(),b=f.linePrefix.toLowerCase(),E=c?[...Kf,...Qy(s)]:Kf;return Zy(E).filter(y=>{const v=y.label.toLowerCase(),S=y.insert.toLowerCase();return S===p||v===p||C_(y,a.query)?!1:f.importLine?Ky(y,f)?v.startsWith(b)||S.startsWith(b)||v.startsWith(p)||S.startsWith(p):!1:_.endsWith(".")&&!S.includes(".")?!1:!!(S.startsWith(p)||v.startsWith(p))})}function Xy(s,i,c){const a=s.lastIndexOf(`
`,i-1)+1,f=s.slice(a,c),p=s.slice(a,i),_=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),b=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:p,importLine:_,fromImportLine:b}}function Ky(s,i){return i.fromImportLine?!s.insert.includes("(")&&!s.insert.startsWith("import "):s.insert.startsWith("import ")||s.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.insert)}function Qy(s){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of s.matchAll(a))f[1]&&i.add(f[1]),f[2]&&i.add(f[2]);return[...i].filter(a=>a.length>1&&!Wy.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function Zy(s){const i=new Set,c=[];for(const a of s){const f=a.insert.toLowerCase();i.has(f)||(i.add(f),c.push(a))}return c}const Wy=new Set(Kf.map(s=>s.insert.replace(/[().: ]+$/g,"")));function Qf(s,i){const a=s.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function n_(s,i){const c=s.lastIndexOf(`
`,Math.max(0,i-1))+1;let a=null,f=null,p=!1;for(let _=0;_<i;_+=1){const b=s[_],E=s.slice(_,_+3);if(f){E===f.repeat(3)&&(f=null,_+=2);continue}if(a){if(p){p=!1;continue}if(b==="\\"){p=!0;continue}b===a&&(a=null),b===`
`&&(a=null);continue}if(b==="#"){const x=s.indexOf(`
`,_),y=x===-1?s.length:x;if(i<=y&&_>=c)return!0;_=y;continue}if(E==='"""'||E==="'''"){f=b,_+=2;continue}(b==='"'||b==="'")&&(a=b)}return a!==null||f!==null}function C_(s,i){const c=s.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function Jy(s){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(s)}function t_(s,i,c){if(!s)return null;const a=s.closest(".ide-terminal")??s.parentElement;if(!a)return null;const f=window.getComputedStyle(s),p=document.createElement("div"),_=document.createElement("span"),b=a.getBoundingClientRect(),E=s.getBoundingClientRect();p.style.position="absolute",p.style.visibility="hidden",p.style.pointerEvents="none",p.style.whiteSpace="pre-wrap",p.style.overflowWrap="break-word",p.style.wordBreak=f.wordBreak,p.style.boxSizing=f.boxSizing,p.style.width=`${s.getBoundingClientRect().width}px`,p.style.padding=f.padding,p.style.border=f.border,p.style.font=f.font,p.style.lineHeight=f.lineHeight,p.style.letterSpacing=f.letterSpacing,p.style.tabSize=f.tabSize,p.style.fontVariantLigatures=f.fontVariantLigatures,p.style.scrollbarGutter=f.scrollbarGutter,p.style.left=`${E.left-b.left-s.scrollLeft}px`,p.style.top=`${E.top-b.top-s.scrollTop}px`,p.textContent=s.value.slice(0,i),_.textContent=s.value.slice(i,i+1)||" ",p.appendChild(_),a.appendChild(p);const x=_.getBoundingClientRect();p.remove();const y=34,v=14,S=Math.min(210,Math.max(y+v,c*y+v)),V=ev(x.left-b.left,8,Math.max(8,a.clientWidth-296)),I=x.top-b.top+a.scrollTop,F=x.bottom-b.top+a.scrollTop+10,D=a.scrollTop+a.clientHeight-F-8,B=I-a.scrollTop-8,H=a.scrollTop+a.clientHeight,ie=D>=Math.min(S,y*2)||D>=B?"below":"above",se=Math.max(y+v,Math.min(S,ie==="below"?D:B)),oe=ie==="below"?Math.min(F,H-se-8):Math.max(a.scrollTop+8,I-se-8);return{left:V,top:oe,maxHeight:se,placement:ie}}function ev(s,i,c){return Math.max(i,Math.min(c,s))}function nv(s,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];return s.split(/(\r?\n)/).forEach((p,_)=>{if(p===`
`||p===`\r
`){f.push(u.jsx("br",{},`br-${_}`));return}let b=0;[...p.matchAll(a)].forEach((x,y)=>{const v=x.index??0;v>b&&f.push(...r_(p.slice(b,v),c,`${_}-${y}-plain`,i));const S=x[0],V=S.startsWith("#")?"tok-comment":S.startsWith('"')||S.startsWith("'")?"tok-string":/^\d/.test(S)?"tok-number":"tok-builtin";f.push(...Wo(S,i,`${_}-${y}-token`,V)),b=v+S.length}),b<p.length&&f.push(...r_(p.slice(b),c,`${_}-tail`,i))}),f.length?f:" "}function r_(s,i,c,a=""){const f=[];let p=0;const _=new RegExp(i.source,"g");return[...s.matchAll(_)].forEach((b,E)=>{const x=b.index??0;x>p&&f.push(...Wo(s.slice(p,x),a,`${c}-${E}-plain`)),f.push(...Wo(b[0],a,`${c}-${E}-keyword`,"tok-keyword")),p=x+b[0].length}),p<s.length&&f.push(...Wo(s.slice(p),a,`${c}-plain-end`)),f}function Wo(s,i,c,a=""){if(!i)return[u.jsx("span",{className:a||void 0,children:s},c)];const f=[],p=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${p})(?![A-Za-zÆØÅæøå0-9_])`,"g");let b=0;return[...s.matchAll(_)].forEach((E,x)=>{const y=E.index??0;y>b&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(b,y)},`${c}-${x}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:E[0]},`${c}-${x}-match`)),b=y+E[0].length}),b<s.length&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(b)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:s},c)]}function Hf(s){return s.length>0?s:[{path:Xf,content:A_,uploaded:!1,updatedAt:Date.now()}]}function Gf(s,i,c,a){const f=s.filter(p=>p.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((p,_)=>_.updatedAt-p.updatedAt)}function Jo(s){return s.map(i=>({name:ke(i.path),path:i.path,type:"file",size:new Blob([i.content]).size}))}function tv(s,i,c){var a;return s.source==="pico"?c[s.path]:(a=i.find(f=>f.path===s.path))==null?void 0:a.content}function ec(s){const i=s.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",p=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return p?{originalPath:`${a}${p[1]}${p[3]}`,index:parseInt(p[2],10)}:null}function Rl(s){return ec(s)!==null}function Ji(s){const i=new Map;for(const c of s){const a=ec(c.path);if(!a)continue;const f=i.get(a.originalPath)??[];f.push(c),i.set(a.originalPath,f)}for(const c of i.values())c.sort((a,f)=>{var p,_;return(((p=ec(f.path))==null?void 0:p.index)??0)-(((_=ec(a.path))==null?void 0:_.index)??0)});return i}function l_(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",p=a>=0?c.slice(a+1):c.replace(/^\/+/,""),_=p.lastIndexOf("."),b=_>0?p.slice(0,_):p,E=_>0?p.slice(_):"",x=new Set(i.map(y=>y.path.toLowerCase()));for(let y=1;y<1e3;y+=1){const v=`${f}${b}_backup${y}${E}`;if(!x.has(v.toLowerCase()))return v}return`${f}${b}_backup${Date.now()}${E}`}function rv(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",p=a>=0?c.slice(a+1):c.replace(/^\/+/,""),_=p.lastIndexOf("."),b=_>0?p.slice(0,_):p,E=_>0?p.slice(_):"";for(let x=1;x<1e3;x+=1){const y=x===1?"_kopi":`_kopi${x}`,v=`${f}${b}${y}${E}`;if(!i(v)&&!Rl(v))return v}return`${f}${b}_kopi${Date.now()}${E}`}function lv(s){return s==="ok"?"Nyeste":s==="outdated"?"Opdater":s==="missing"?"Mangler":"Ikke tjekket"}function iv(s,i,c,a){const f=new Map,p=Ji(s),_=Ji(Jo(i));for(const v of s)Rl(v.path)||f.set(Pn("pico",v.path),{kind:"file",name:v.name,path:v.path,type:v.type,size:v.size,source:"pico",uploaded:!0,versions:p.get(v.path)??[]});for(const v of i)Rl(v.path)||f.set(Pn("local",v.path),{kind:"file",name:ke(v.path),path:v.path,type:"file",source:"local",uploaded:!1,versions:_.get(v.path)??[]});for(const v of Object.keys(c)){const[S,...V]=v.split(":"),I=V.join(":");if(S!=="local"&&S!=="pico"||!I)continue;const F=f.get(v);if(F){f.set(v,F);continue}f.set(v,{kind:"file",name:ke(I),path:I,type:"file",source:S,uploaded:!1,versions:S==="pico"?p.get(I)??[]:_.get(I)??[]})}const b=[...f.values()].sort(sv),E=b.filter(v=>v.source==="pico"),x=b.filter(v=>v.source==="local"),y=[];return E.length>0||a?y.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...E):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),x.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...x),y}const av=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function sv(s,i){const c=i_(s.path),a=i_(i.path);return c===null&&a===null?s.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function i_(s){var c;const i=(c=s.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?av.get(i)??null:null}function a_(s,i,c){if(!(i in s))return s;const a={...s,[c]:s[i]};return delete a[i],a}function ov(s,i,c,a){const f=`${i}:${c}`;if(!(f in s))return s;const p={...s,[`${i}:${a}`]:s[f]};return delete p[f],p}function cv({open:s}){const i=ae(H=>H.screen),c=ae(H=>H.active),a=ae(H=>H.toggleSideMenu),f=ae(H=>H.toggleDebugger),p=ae(H=>H.setEditMode),_=ae(H=>H.openMenuPage),b=ae(H=>H.disconnect),E=ae(H=>H.openPicoIde),x=ae(H=>H.closePicoIde),y=ae(H=>H.picoIdeOrigin),v=i==="dashboard",S=i==="control",V=i==="ide",I=S&&!!(c!=null&&c.canEdit),F=!S||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),D=y==="control",B=y==="control"?"Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${s?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${i} ${s?"open":"closing"}`,"aria-label":"Sidemenu",children:[v&&u.jsxs(u.Fragment,{children:[u.jsx(St,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),u.jsx(St,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),u.jsx(St,{label:"Kodeværksted",icon:"picoIde",onClick:E,disabled:!F}),u.jsx(Vf,{}),u.jsx(St,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),u.jsx(St,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),u.jsx(St,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),S&&u.jsxs(u.Fragment,{children:[u.jsx(St,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),u.jsx(St,{label:"Rediger",icon:"edit",onClick:()=>p(!0),disabled:!I}),u.jsx(St,{label:"Kodeværksted",icon:"picoIde",onClick:E,disabled:!F}),u.jsx(Vf,{}),u.jsx(St,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),u.jsx(St,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),V&&u.jsxs(u.Fragment,{children:[u.jsx(St,{label:B,icon:"back",onClick:x}),u.jsx(Vf,{})]}),u.jsx("div",{className:"spacer"}),(S||V&&D)&&u.jsx(St,{label:"Forlad",icon:"exit",onClick:()=>b()})]})]})}function St({label:s,icon:i,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":s,children:[u.jsx(et,{name:i}),u.jsx("span",{children:s})]})}function Vf(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:Wb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const uv={error:"term-error",success:"term-success",warning:"term-warning",info:""},s_={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function fv(){const s=new Date,i=c=>String(c).padStart(2,"0");return`${i(s.getDate())}-${i(s.getMonth()+1)}-${s.getFullYear()}-${i(s.getHours())}-${i(s.getMinutes())}`}function dv(){const s=ae(f=>f.logs),i=ae(f=>f.clearLogs),c=ae(f=>f.toggleDebugger);function a(){const f=[...s].reverse().map(E=>`${E.time} ${s_[E.level]}${E.message}`).join(`
`),p=new Blob([f],{type:"text/plain"}),_=URL.createObjectURL(p),b=document.createElement("a");b.href=_,b.download=`${fv()}.txt`,b.click(),URL.revokeObjectURL(_)}return u.jsxs(Rn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:s.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):s.map((f,p)=>u.jsxs("div",{className:`term-line ${uv[f.level]}`,children:[f.time," ",s_[f.level],f.message]},`${f.time}-${p}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const B_=4,$t=B_*4+17,o_=80,mv=20,pv=30660;function hv(s){const i=new TextEncoder().encode(s);if(i.length>76)throw new Error("QR-koden er for lang.");const c=c_(!1),a=c_(!1);_v(c,a);const f=bv(i),p=xv(f,mv);return yv(c,a,[...f,...p]),vv(c,a),c}function c_(s){return Array.from({length:$t},()=>Array.from({length:$t},()=>s))}function Yt(s,i,c,a,f,p=!0){s[a][c]=f,p&&(i[a][c]=!0)}function _v(s,i){If(s,i,0,0),If(s,i,$t-7,0),If(s,i,0,$t-7);for(let c=0;c<$t;c+=1)i[6][c]||Yt(s,i,c,6,c%2===0),i[c][6]||Yt(s,i,6,c,c%2===0);gv(s,i,26,26),Yt(s,i,8,B_*4+9,!0)}function If(s,i,c,a){for(let f=-1;f<=7;f+=1)for(let p=-1;p<=7;p+=1){const _=c+p,b=a+f;if(_<0||b<0||_>=$t||b>=$t)continue;const E=p>=0&&p<=6&&f>=0&&f<=6&&(p===0||p===6||f===0||f===6||p>=2&&p<=4&&f>=2&&f<=4);Yt(s,i,_,b,E)}}function gv(s,i,c,a){for(let f=-2;f<=2;f+=1)for(let p=-2;p<=2;p+=1)i[a+f][c+p]||Yt(s,i,c+p,a+f,Math.max(Math.abs(p),Math.abs(f))!==1)}function bv(s){const i=[];Ko(i,4,4),Ko(i,s.length,8);for(const a of s)Ko(i,a,8);for(Ko(i,0,Math.min(4,o_*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((f,p)=>f<<1|p,0));for(let a=236;c.length<o_;a=a===236?17:236)c.push(a);return c}function Ko(s,i,c){for(let a=c-1;a>=0;a-=1)s.push(i>>>a&1)}function yv(s,i,c){const a=c.flatMap(_=>Array.from({length:8},(b,E)=>_>>>7-E&1));let f=0,p=!0;for(let _=$t-1;_>=1;_-=2){_===6&&(_-=1);for(let b=0;b<$t;b+=1){const E=p?$t-1-b:b;for(let x=0;x<2;x+=1){const y=_-x;if(i[E][y])continue;const v=f<a.length?a[f]===1:!1;s[E][y]=v!==((y+E)%2===0),f+=1}}p=!p}}function vv(s,i){const c=a=>(pv>>>a&1)!==0;for(let a=0;a<=5;a+=1)Yt(s,i,8,a,c(a));Yt(s,i,8,7,c(6)),Yt(s,i,8,8,c(7)),Yt(s,i,7,8,c(8));for(let a=9;a<15;a+=1)Yt(s,i,14-a,8,c(a));for(let a=0;a<8;a+=1)Yt(s,i,$t-1-a,8,c(a));for(let a=8;a<15;a+=1)Yt(s,i,8,$t-15+a,c(a))}const bs=new Array(512),Zf=new Array(256);let u_=!1;function L_(){if(u_)return;let s=1;for(let i=0;i<255;i+=1)bs[i]=s,Zf[s]=i,s<<=1,s&256&&(s^=285);for(let i=255;i<512;i+=1)bs[i]=bs[i-255];u_=!0}function z_(s,i){return s===0||i===0?0:bs[Zf[s]+Zf[i]]}function xv(s,i){L_();const c=wv(i),a=Array.from({length:i},()=>0);for(const f of s){const p=f^a.shift();a.push(0);for(let _=0;_<i;_+=1)a[_]^=z_(c[_],p)}return a}function wv(s){L_();let i=[1];for(let c=0;c<s;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let f=0;f<i.length;f+=1)a[f]^=z_(i[f],bs[c]),a[f+1]^=i[f];i=a}return i.slice(1)}function Ev(){const s=ae(xe=>xe.menuPage),i=ae(xe=>xe.closeMenuPage),c=ae(xe=>xe.user),a=ae(xe=>xe.active),f=ae(xe=>xe.layout),p=ae(xe=>xe.sliderValues),_=ae(xe=>xe.savedDevices),b=ae(xe=>xe.updateUsername),E=ae(xe=>xe.createOwnerPairingCode),x=ae(xe=>xe.applyOwnerPairingCode),y=ae(xe=>xe.clearSavedDevices),v=ae(xe=>xe.resetApplicationData),S=ae(xe=>xe.saveDeviceSettings),V=ae(xe=>xe.setEditMode),I=ae(xe=>xe.askConfirm),[F,D]=z.useState((c==null?void 0:c.username)??""),[B,H]=z.useState(!1),[ie,se]=z.useState(""),[oe,pe]=z.useState(""),[W,J]=z.useState(!1),[Ne,ye]=z.useState(""),we=z.useRef(null),[Z,$e]=z.useState((a==null?void 0:a.iconID)??0),[Ae,Pe]=z.useState(!1),[G,re]=z.useState((a==null?void 0:a.canOthersConnect)??!1),[ue,fe]=z.useState((a==null?void 0:a.canOthersEdit)??!1),[Ee,N]=z.useState((a==null?void 0:a.canOthersEditCode)??!1),[U,te]=z.useState((a==null?void 0:a.gridCols)??11),[O,Q]=z.useState((a==null?void 0:a.gridRows)??31),[ne,X]=z.useState(!1);z.useEffect(()=>{s==="user-settings"&&(D((c==null?void 0:c.username)??""),pe(""),ye(""),J(!1))},[s,c==null?void 0:c.username]),z.useEffect(()=>{s==="device-settings"&&a&&($e(a.iconID),re(a.canOthersConnect),fe(a.canOthersEdit),N(a.canOthersEditCode),te(a.gridCols),Q(a.gridRows))},[a,s]),z.useEffect(()=>{if(!W)return;let xe=!1,wn=null,Tn=0;async function ze(){var Pt;const Mn=window.BarcodeDetector;if(!Mn||!((Pt=navigator.mediaDevices)!=null&&Pt.getUserMedia)){ye("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),J(!1);return}try{wn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Hn=we.current;if(!Hn)return;Hn.srcObject=wn,await Hn.play();const Gr=new Mn({formats:["qr_code"]}),Vr=async()=>{var Nt;if(!xe){try{const Ir=(Nt=(await Gr.detect(Hn)).find(En=>En.rawValue))==null?void 0:Nt.rawValue;if(Ir){pe(Ir),x(Ir)&&H(!1),J(!1);return}}catch{}Tn=window.requestAnimationFrame(Vr)}};Tn=window.requestAnimationFrame(Vr)}catch{ye("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),J(!1)}}return ze(),()=>{xe=!0,Tn&&window.cancelAnimationFrame(Tn),wn==null||wn.getTracks().forEach(Mn=>Mn.stop())}},[x,W]);const He=(xe,wn)=>Number.isFinite(xe)?Math.max(na,Math.min(ta,Math.round(xe))):wn,Oe=(c==null?void 0:c.username)??"",Fn=F.trim(),Wt=Fn.length>0&&Fn!==Oe;if(!s)return null;if(s==="user-settings"){let xe=function(){const ze=E();ze&&(se(ze),pe(""),H(!0))},wn=function(){x(oe)&&(pe(""),H(!1))};async function Tn(){var ze;try{await((ze=navigator.clipboard)==null?void 0:ze.writeText(ie))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Rn,{title:"Brugerindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(It,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${F.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:F,onChange:ze=>D(ze.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>b(F),disabled:!Wt,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:xe,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>I({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{v()}}),children:"Slet brugerdata"})]})}),B&&u.jsx(Rn,{title:"Del ejerkode",onClose:()=>H(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Nv,{code:ie}),u.jsx("code",{className:"owner-code-text",children:ie}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Tn(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${oe.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:oe,onChange:ze=>pe(ze.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:wn,disabled:!oe.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>J(ze=>!ze),children:W?"Stop scanning":"Scan QR-kode"}),Ne&&u.jsx("div",{className:"notice",children:Ne}),W&&u.jsx("video",{className:"owner-code-video",ref:we,muted:!0,playsInline:!0})]})})]})}if(s==="application-settings")return u.jsx(Rn,{title:"Applikationsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(It,{label:"Version",value:ys}),u.jsx(It,{label:"Bluetooth",value:oc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(It,{label:"Gemte enheder",value:String(_.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>I({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:y}),disabled:_.length===0,children:"Ryd gemte enheder"})]})});if(s==="application-about")return u.jsx(Rn,{title:"Om appen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(It,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(It,{label:"Version",value:ys})]})});if(s==="application-help")return u.jsx(Rn,{title:"Hjælp til applikationen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(s==="device-settings"){const xe=f.filter(ze=>ze.type==="slider"),wn=!!(a!=null&&a.isOwnedByMe);async function Tn(ze=!1){if(!a||!wn)return;const Mn=He(U,a.gridCols),Pt=He(O,a.gridRows),Hn=Sv(f,Mn,Pt);if(Hn&&!ze){I({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Hn.requiredCols} kolonner og ${Hn.requiredRows} rækker. Det nye gitter er ${Mn} × ${Pt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Tn(!0)}});return}X(!0),await S(Z,G,G&&ue,G&&Ee,Mn,Pt),te(Mn),Q(Pt),X(!1)}return u.jsx(Rn,{title:"Enhedsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(It,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(It,{label:"Ejer",value:Rv(a)}),wn?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Pe(!0),children:u.jsx("img",{src:aa(Z),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:G?"":"active",onClick:()=>re(!1),children:"Privat"}),u.jsx("button",{type:"button",className:G?"active":"",onClick:()=>re(!0),children:"Offentlig"})]}),G&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>fe(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>fe(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>N(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:na,max:ta,value:Number.isNaN(U)?"":U,onChange:ze=>te(parseInt(ze.target.value,10)),onBlur:()=>te(He(U,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:na,max:ta,value:Number.isNaN(O)?"":O,onChange:ze=>Q(parseInt(ze.target.value,10)),onBlur:()=>Q(He(O,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Tn(),disabled:ne,children:ne?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(It,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(It,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(It,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(It,{label:"Kontroller",value:String(f.length)}),xe.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),xe.map(ze=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:ze.name}),u.jsxs("span",{children:[ze.sliderMin??0," til ",ze.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",kv(ze.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",p[ze.name]??"Ikke brugt"]})]},ze.name))]}),Ae&&u.jsx(y_,{selected:Z,onSelect:$e,onClose:()=>Pe(!1)})]})})}return u.jsx(Rn,{title:"Hjælp til enheden",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>V(!0),children:"Rediger layout"})]})})}function Sv(s,i,c){let a=0,f=0;for(const p of s)ra(p)&&(a=Math.max(a,Math.ceil((p.centerX2+p.spanX)/2)+1),f=Math.max(f,Math.ceil((p.centerY2+p.spanY)/2)+1));return i<a||c<f?{requiredCols:a,requiredRows:f}:null}function kv(s){return s==="bottom"?"bund":s==="middle"?"midte":s==="top"?"top":"ingen"}function Nv({code:s}){const i=z.useMemo(()=>hv(s),[s]),c=i.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,f)=>a.map((p,_)=>p?u.jsx("rect",{x:_+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${_}-${f}`):null))]})}function Rv(s){var i;return s?s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function It({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function Tv(){const s=ae(a=>a.confirmDialog),i=ae(a=>a.closeConfirm);if(!s)return null;function c(){s==null||s.onConfirm(),i()}return u.jsx(Rn,{title:s.title,onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:s.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:s.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:s.confirmLabel??"Fortsæt"})]})]})})}function Mv(){const s=ae(a=>a.connectionLost),i=ae(a=>a.reconnectLostDevice),c=ae(a=>a.dismissConnectionLost);return s?u.jsx(Rn,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",s.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function jv(){const s=ae(c=>c.toast),i=ae(c=>c.dismissToast);return s?u.jsx("div",{className:"toast",role:"alert",onClick:i,children:s.message},s.id):null}function Dv(){const s=ae(b=>b.screen),i=ae(b=>b.splashTarget),c=ae(b=>b.init),a=ae(b=>b.sideMenuOpen),f=ae(b=>b.debuggerOpen),[p,_]=z.useState(!1);return z.useEffect(()=>{c()},[c]),z.useEffect(()=>{if(a){_(!0);return}const b=setTimeout(()=>_(!1),140);return()=>clearTimeout(b)},[a]),u.jsxs("div",{className:"app",children:[s==="splash"&&i==="intro"&&u.jsx(Rh,{}),s==="splash"&&i==="dashboard"&&u.jsx(Th,{}),s==="splash"&&u.jsx(t0,{}),s==="intro"&&u.jsx(Rh,{}),s==="dashboard"&&u.jsx(Th,{}),s==="connection"&&u.jsx(s0,{}),s==="create"&&u.jsx(o0,{}),s==="control"&&u.jsx(P0,{}),s==="ide"&&u.jsx(Iy,{}),p&&u.jsx(cv,{open:a}),u.jsx(Ev,{}),u.jsx(Mv,{}),u.jsx(Tv,{}),f&&u.jsx(dv,{}),u.jsx(jv,{})]})}function Av(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const i=new URL("sw.js",window.location.href);navigator.serviceWorker.register(i,{scope:"./"}).catch(c=>{console.warn("Service worker registration failed:",c)})});let s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||window.crossOriginIsolated||(s=!0,window.location.reload())})}Av();mb.createRoot(document.getElementById("root")).render(u.jsx(_s.StrictMode,{children:u.jsx(Dv,{})}));
