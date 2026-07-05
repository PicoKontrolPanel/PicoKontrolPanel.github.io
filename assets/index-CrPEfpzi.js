var Pg=Object.defineProperty;var $g=(o,a,c)=>a in o?Pg(o,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[a]=c;var fe=(o,a,c)=>$g(o,typeof a!="symbol"?a+"":a,c);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))i(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function c(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(u){if(u.ep)return;u.ep=!0;const d=c(u);fetch(u.href,d)}})();function Jh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var rf={exports:{}},qi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Xg(){if(Zp)return qi;Zp=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function c(i,u,d){var h=null;if(d!==void 0&&(h=""+d),u.key!==void 0&&(h=""+u.key),"key"in u){d={};for(var _ in u)_!=="key"&&(d[_]=u[_])}else d=u;return u=d.ref,{$$typeof:o,type:i,key:h,ref:u!==void 0?u:null,props:d}}return qi.Fragment=a,qi.jsx=c,qi.jsxs=c,qi}var Wp;function Fg(){return Wp||(Wp=1,rf.exports=Xg()),rf.exports}var f=Fg(),lf={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Kg(){if(Jp)return ve;Jp=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),R=Symbol.iterator;function $(S){return S===null||typeof S!="object"?null:(S=R&&S[R]||S["@@iterator"],typeof S=="function"?S:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,K={};function G(S,U,ee){this.props=S,this.context=U,this.refs=K,this.updater=ee||I}G.prototype.isReactComponent={},G.prototype.setState=function(S,U){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,U,"setState")},G.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function H(){}H.prototype=G.prototype;function ae(S,U,ee){this.props=S,this.context=U,this.refs=K,this.updater=ee||I}var re=ae.prototype=new H;re.constructor=ae,W(re,G.prototype),re.isPureReactComponent=!0;var se=Array.isArray;function _e(){}var le={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function xe(S,U,ee){var T=ee.ref;return{$$typeof:o,type:S,key:U,ref:T!==void 0?T:null,props:ee}}function be(S,U){return xe(S.type,U,S.props)}function we(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function ie(S){var U={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ee){return U[ee]})}var Te=/\/+/g;function Oe(S,U){return typeof S=="object"&&S!==null&&S.key!=null?ie(""+S.key):U.toString(36)}function Ge(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(_e,_e):(S.status="pending",S.then(function(U){S.status==="pending"&&(S.status="fulfilled",S.value=U)},function(U){S.status==="pending"&&(S.status="rejected",S.reason=U)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function B(S,U,ee,T,F){var Z=typeof S;(Z==="undefined"||Z==="boolean")&&(S=null);var X=!1;if(S===null)X=!0;else switch(Z){case"bigint":case"string":case"number":X=!0;break;case"object":switch(S.$$typeof){case o:case a:X=!0;break;case x:return X=S._init,B(X(S._payload),U,ee,T,F)}}if(X)return F=F(S),X=T===""?"."+Oe(S,0):T,se(F)?(ee="",X!=null&&(ee=X.replace(Te,"$&/")+"/"),B(F,U,ee,"",function(In){return In})):F!=null&&(we(F)&&(F=be(F,ee+(F.key==null||S&&S.key===F.key?"":(""+F.key).replace(Te,"$&/")+"/")+X)),U.push(F)),1;X=0;var Be=T===""?".":T+":";if(se(S))for(var je=0;je<S.length;je++)T=S[je],Z=Be+Oe(T,je),X+=B(T,U,ee,Z,F);else if(je=$(S),typeof je=="function")for(S=je.call(S),je=0;!(T=S.next()).done;)T=T.value,Z=Be+Oe(T,je++),X+=B(T,U,ee,Z,F);else if(Z==="object"){if(typeof S.then=="function")return B(Ge(S),U,ee,T,F);throw U=String(S),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return X}function Q(S,U,ee){if(S==null)return S;var T=[],F=0;return B(S,T,"","",function(Z){return U.call(ee,Z,F++)}),T}function ce(S){if(S._status===-1){var U=S._result;U=U(),U.then(function(ee){(S._status===0||S._status===-1)&&(S._status=1,S._result=ee)},function(ee){(S._status===0||S._status===-1)&&(S._status=2,S._result=ee)}),S._status===-1&&(S._status=0,S._result=U)}if(S._status===1)return S._result.default;throw S._result}var Ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},oe={map:Q,forEach:function(S,U,ee){Q(S,function(){U.apply(this,arguments)},ee)},count:function(S){var U=0;return Q(S,function(){U++}),U},toArray:function(S){return Q(S,function(U){return U})||[]},only:function(S){if(!we(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ve.Activity=k,ve.Children=oe,ve.Component=G,ve.Fragment=c,ve.Profiler=u,ve.PureComponent=ae,ve.StrictMode=i,ve.Suspense=v,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,ve.__COMPILER_RUNTIME={__proto__:null,c:function(S){return le.H.useMemoCache(S)}},ve.cache=function(S){return function(){return S.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(S,U,ee){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var T=W({},S.props),F=S.key;if(U!=null)for(Z in U.key!==void 0&&(F=""+U.key),U)!J.call(U,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&U.ref===void 0||(T[Z]=U[Z]);var Z=arguments.length-2;if(Z===1)T.children=ee;else if(1<Z){for(var X=Array(Z),Be=0;Be<Z;Be++)X[Be]=arguments[Be+2];T.children=X}return xe(S.type,F,T)},ve.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},ve.createElement=function(S,U,ee){var T,F={},Z=null;if(U!=null)for(T in U.key!==void 0&&(Z=""+U.key),U)J.call(U,T)&&T!=="key"&&T!=="__self"&&T!=="__source"&&(F[T]=U[T]);var X=arguments.length-2;if(X===1)F.children=ee;else if(1<X){for(var Be=Array(X),je=0;je<X;je++)Be[je]=arguments[je+2];F.children=Be}if(S&&S.defaultProps)for(T in X=S.defaultProps,X)F[T]===void 0&&(F[T]=X[T]);return xe(S,Z,F)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(S){return{$$typeof:_,render:S}},ve.isValidElement=we,ve.lazy=function(S){return{$$typeof:x,_payload:{_status:-1,_result:S},_init:ce}},ve.memo=function(S,U){return{$$typeof:y,type:S,compare:U===void 0?null:U}},ve.startTransition=function(S){var U=le.T,ee={};le.T=ee;try{var T=S(),F=le.S;F!==null&&F(ee,T),typeof T=="object"&&T!==null&&typeof T.then=="function"&&T.then(_e,Ee)}catch(Z){Ee(Z)}finally{U!==null&&ee.types!==null&&(U.types=ee.types),le.T=U}},ve.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},ve.use=function(S){return le.H.use(S)},ve.useActionState=function(S,U,ee){return le.H.useActionState(S,U,ee)},ve.useCallback=function(S,U){return le.H.useCallback(S,U)},ve.useContext=function(S){return le.H.useContext(S)},ve.useDebugValue=function(){},ve.useDeferredValue=function(S,U){return le.H.useDeferredValue(S,U)},ve.useEffect=function(S,U){return le.H.useEffect(S,U)},ve.useEffectEvent=function(S){return le.H.useEffectEvent(S)},ve.useId=function(){return le.H.useId()},ve.useImperativeHandle=function(S,U,ee){return le.H.useImperativeHandle(S,U,ee)},ve.useInsertionEffect=function(S,U){return le.H.useInsertionEffect(S,U)},ve.useLayoutEffect=function(S,U){return le.H.useLayoutEffect(S,U)},ve.useMemo=function(S,U){return le.H.useMemo(S,U)},ve.useOptimistic=function(S,U){return le.H.useOptimistic(S,U)},ve.useReducer=function(S,U,ee){return le.H.useReducer(S,U,ee)},ve.useRef=function(S){return le.H.useRef(S)},ve.useState=function(S){return le.H.useState(S)},ve.useSyncExternalStore=function(S,U,ee){return le.H.useSyncExternalStore(S,U,ee)},ve.useTransition=function(){return le.H.useTransition()},ve.version="19.2.7",ve}var eh;function Lf(){return eh||(eh=1,lf.exports=Kg()),lf.exports}var L=Lf();const Wi=Jh(L);var af={exports:{}},Pi={},sf={exports:{}},of={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function Qg(){return nh||(nh=1,(function(o){function a(B,Q){var ce=B.length;B.push(Q);e:for(;0<ce;){var Ee=ce-1>>>1,oe=B[Ee];if(0<u(oe,Q))B[Ee]=Q,B[ce]=oe,ce=Ee;else break e}}function c(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Q=B[0],ce=B.pop();if(ce!==Q){B[0]=ce;e:for(var Ee=0,oe=B.length,S=oe>>>1;Ee<S;){var U=2*(Ee+1)-1,ee=B[U],T=U+1,F=B[T];if(0>u(ee,ce))T<oe&&0>u(F,ee)?(B[Ee]=F,B[T]=ce,Ee=T):(B[Ee]=ee,B[U]=ce,Ee=U);else if(T<oe&&0>u(F,ce))B[Ee]=F,B[T]=ce,Ee=T;else break e}}return Q}function u(B,Q){var ce=B.sortIndex-Q.sortIndex;return ce!==0?ce:B.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var h=Date,_=h.now();o.unstable_now=function(){return h.now()-_}}var v=[],y=[],x=1,k=null,R=3,$=!1,I=!1,W=!1,K=!1,G=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function re(B){for(var Q=c(y);Q!==null;){if(Q.callback===null)i(y);else if(Q.startTime<=B)i(y),Q.sortIndex=Q.expirationTime,a(v,Q);else break;Q=c(y)}}function se(B){if(W=!1,re(B),!I)if(c(v)!==null)I=!0,_e||(_e=!0,ie());else{var Q=c(y);Q!==null&&Ge(se,Q.startTime-B)}}var _e=!1,le=-1,J=5,xe=-1;function be(){return K?!0:!(o.unstable_now()-xe<J)}function we(){if(K=!1,_e){var B=o.unstable_now();xe=B;var Q=!0;try{e:{I=!1,W&&(W=!1,H(le),le=-1),$=!0;var ce=R;try{n:{for(re(B),k=c(v);k!==null&&!(k.expirationTime>B&&be());){var Ee=k.callback;if(typeof Ee=="function"){k.callback=null,R=k.priorityLevel;var oe=Ee(k.expirationTime<=B);if(B=o.unstable_now(),typeof oe=="function"){k.callback=oe,re(B),Q=!0;break n}k===c(v)&&i(v),re(B)}else i(v);k=c(v)}if(k!==null)Q=!0;else{var S=c(y);S!==null&&Ge(se,S.startTime-B),Q=!1}}break e}finally{k=null,R=ce,$=!1}Q=void 0}}finally{Q?ie():_e=!1}}}var ie;if(typeof ae=="function")ie=function(){ae(we)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Oe=Te.port2;Te.port1.onmessage=we,ie=function(){Oe.postMessage(null)}}else ie=function(){G(we,0)};function Ge(B,Q){le=G(function(){B(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_next=function(B){switch(R){case 1:case 2:case 3:var Q=3;break;default:Q=R}var ce=R;R=Q;try{return B()}finally{R=ce}},o.unstable_requestPaint=function(){K=!0},o.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ce=R;R=B;try{return Q()}finally{R=ce}},o.unstable_scheduleCallback=function(B,Q,ce){var Ee=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Ee+ce:Ee):ce=Ee,B){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ce+oe,B={id:x++,callback:Q,priorityLevel:B,startTime:ce,expirationTime:oe,sortIndex:-1},ce>Ee?(B.sortIndex=ce,a(y,B),c(v)===null&&B===c(y)&&(W?(H(le),le=-1):W=!0,Ge(se,ce-Ee))):(B.sortIndex=oe,a(v,B),I||$||(I=!0,_e||(_e=!0,ie()))),B},o.unstable_shouldYield=be,o.unstable_wrapCallback=function(B){var Q=R;return function(){var ce=R;R=Q;try{return B.apply(this,arguments)}finally{R=ce}}}})(of)),of}var th;function Zg(){return th||(th=1,sf.exports=Qg()),sf.exports}var cf={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function Wg(){if(rh)return Yn;rh=1;var o=Lf();function a(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var i={d:{f:c,r:function(){throw Error(a(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(v,y,x){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:k==null?null:""+k,children:v,containerInfo:y,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Yn.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(a(299));return d(v,y,null,x)},Yn.flushSync=function(v){var y=h.T,x=i.p;try{if(h.T=null,i.p=2,v)return v()}finally{h.T=y,i.p=x,i.d.f()}},Yn.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,i.d.C(v,y))},Yn.prefetchDNS=function(v){typeof v=="string"&&i.d.D(v)},Yn.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,k=_(x,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,$=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?i.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:k,integrity:R,fetchPriority:$}):x==="script"&&i.d.X(v,{crossOrigin:k,integrity:R,fetchPriority:$,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Yn.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=_(y.as,y.crossOrigin);i.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&i.d.M(v)},Yn.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,k=_(x,y.crossOrigin);i.d.L(v,x,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Yn.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=_(y.as,y.crossOrigin);i.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else i.d.m(v)},Yn.requestFormReset=function(v){i.d.r(v)},Yn.unstable_batchedUpdates=function(v,y){return v(y)},Yn.useFormState=function(v,y,x){return h.H.useFormState(v,y,x)},Yn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var lh;function Jg(){if(lh)return cf.exports;lh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),cf.exports=Wg(),cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function e0(){if(ah)return Pi;ah=1;var o=Zg(),a=Lf(),c=Jg();function i(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(d(e)!==e)throw Error(i(188))}function y(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(i(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return v(l),e;if(s===r)return v(l),n;s=s.sibling}throw Error(i(188))}if(t.return!==r.return)t=l,r=s;else{for(var p=!1,g=l.child;g;){if(g===t){p=!0,t=l,r=s;break}if(g===r){p=!0,r=l,t=s;break}g=g.sibling}if(!p){for(g=s.child;g;){if(g===t){p=!0,t=s,r=l;break}if(g===r){p=!0,r=s,t=l;break}g=g.sibling}if(!p)throw Error(i(189))}}if(t.alternate!==r)throw Error(i(190))}if(t.tag!==3)throw Error(i(188));return t.stateNode.current===t?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var k=Object.assign,R=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case G:return"Profiler";case K:return"StrictMode";case se:return"Suspense";case _e:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case ae:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case re:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return n=e.displayName||null,n!==null?n:Oe(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return Oe(e(n))}catch{}}return null}var Ge=Array.isArray,B=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Ee=[],oe=-1;function S(e){return{current:e}}function U(e){0>oe||(e.current=Ee[oe],Ee[oe]=null,oe--)}function ee(e,n){oe++,Ee[oe]=e.current,e.current=n}var T=S(null),F=S(null),Z=S(null),X=S(null);function Be(e,n){switch(ee(Z,n),ee(F,e),ee(T,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?vp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=vp(n),e=xp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(T),ee(T,e)}function je(){U(T),U(F),U(Z)}function In(e){e.memoizedState!==null&&ee(X,e);var n=T.current,t=xp(n,e.type);n!==t&&(ee(F,e),ee(T,t))}function Pt(e){F.current===e&&(U(T),U(F)),X.current===e&&(U(X),Vi._currentValue=ce)}var ye,bn;function Sn(e){if(ye===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ye=n&&n[1]||"",bn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ye+e+bn}var Ce=!1;function kn(e,n){if(!e||Ce)return"";Ce=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(z){var O=z}Reflect.construct(e,[],P)}else{try{P.call()}catch(z){O=z}e.call(P.prototype)}}else{try{throw Error()}catch(z){O=z}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(z){if(z&&O&&typeof z.stack=="string")return[z.stack,O.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),p=s[0],g=s[1];if(p&&g){var E=p.split(`
`),A=g.split(`
`);for(l=r=0;r<E.length&&!E[r].includes("DetermineComponentFrameRoot");)r++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(r===E.length||l===A.length)for(r=E.length-1,l=A.length-1;1<=r&&0<=l&&E[r]!==A[l];)l--;for(;1<=r&&0<=l;r--,l--)if(E[r]!==A[l]){if(r!==1||l!==1)do if(r--,l--,0>l||E[r]!==A[l]){var V=`
`+E[r].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=r&&0<=l);break}}}finally{Ce=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Sn(t):""}function Bt(e,n){switch(e.tag){case 26:case 27:case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return e.child!==n&&n!==null?Sn("Suspense Fallback"):Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 15:return kn(e.type,!1);case 11:return kn(e.type.render,!1);case 1:return kn(e.type,!0);case 31:return Sn("Activity");default:return""}}function zn(e){try{var n="",t=null;do n+=Bt(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var jr=Object.prototype.hasOwnProperty,Ar=o.unstable_scheduleCallback,vt=o.unstable_cancelCallback,Ql=o.unstable_shouldYield,Dr=o.unstable_requestPaint,yn=o.unstable_now,dl=o.unstable_getCurrentPriorityLevel,ml=o.unstable_ImmediatePriority,Pa=o.unstable_UserBlockingPriority,pl=o.unstable_NormalPriority,Qn=o.unstable_LowPriority,lt=o.unstable_IdlePriority,$t=o.log,Zl=o.unstable_setDisableYieldValue,hl=null,vn=null;function at(e){if(typeof $t=="function"&&Zl(e),vn&&typeof vn.setStrictMode=="function")try{vn.setStrictMode(hl,e)}catch{}}var Rn=Math.clz32?Math.clz32:rr,Or=Math.log,Cr=Math.LN2;function rr(e){return e>>>=0,e===0?32:31-(Or(e)/Cr|0)|0}var Xt=256,qn=262144,Ke=4194304;function Mn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mn(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,s=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var g=r&134217727;return g!==0?(r=g&~s,r!==0?l=Mn(r):(p&=g,p!==0?l=Mn(p):t||(t=g&~e,t!==0&&(l=Mn(t))))):(g=r&~s,g!==0?l=Mn(g):p!==0?l=Mn(p):t||(t=r&~e,t!==0&&(l=Mn(t)))),l===0?0:n!==0&&n!==l&&(n&s)===0&&(s=l&-l,t=n&-n,s>=t||s===32&&(t&4194048)!==0)?n:l}function Un(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Io(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $a(){var e=Ke;return Ke<<=1,(Ke&62914560)===0&&(Ke=4194304),e}function Ft(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _l(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lr(e,n,t,r,l,s){var p=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var g=e.entanglements,E=e.expirationTimes,A=e.hiddenUpdates;for(t=p&~t;0<t;){var V=31-Rn(t),P=1<<V;g[V]=0,E[V]=-1;var O=A[V];if(O!==null)for(A[V]=null,V=0;V<O.length;V++){var z=O[V];z!==null&&(z.lane&=-536870913)}t&=~P}r!==0&&ls(e,r,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(p&~n))}function ls(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Rn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function Wl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Rn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function as(e,n){var t=n&-n;return t=(t&42)!==0?1:Lr(t),(t&(e.suspendedLanes|n))!==0?0:t}function Lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function on(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:qp(e.type))}function Xa(e,n){var t=Q.p;try{return Q.p=e,n()}finally{Q.p=t}}var it=Math.random().toString(36).slice(2),cn="__reactFiber$"+it,un="__reactProps$"+it,Tn="__reactContainer$"+it,zt="__reactEvents$"+it,gl="__reactListeners$"+it,Ut="__reactHandles$"+it,ar="__reactResources$"+it,Ht="__reactMarker$"+it;function Vt(e){delete e[cn],delete e[un],delete e[zt],delete e[gl],delete e[Ut]}function Kt(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Tn]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Mp(e);e!==null;){if(t=e[cn])return t;e=Mp(e)}return n}e=t,t=e.parentNode}return null}function Pn(e){if(e=e[cn]||e[Tn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Gt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(i(33))}function Zn(e){var n=e[ar];return n||(n=e[ar]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ze(e){e[Ht]=!0}var ir=new Set,Fa={};function st(e,n){ot(e,n),ot(e+"Capture",n)}function ot(e,n){for(Fa[e]=n,e=0;e<n.length;e++)ir.add(n[e])}var he=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jl={},is={};function qo(e){return jr.call(is,e)?!0:jr.call(Jl,e)?!1:he.test(e)?is[e]=!0:(Jl[e]=!0,!1)}function ea(e,n,t){if(qo(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function na(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function $n(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function xn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ct(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ka(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){t=""+p,s.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(p){t=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Hn(e){if(!e._valueTracker){var n=ct(e)?"checked":"value";e._valueTracker=Ka(e,n,""+e[n])}}function ss(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var os=/[\n"\\]/g;function Vn(e){return e.replace(os,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function q(e,n,t,r,l,s,p,g){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xn(n)):e.value!==""+xn(n)&&(e.value=""+xn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Qa(e,p,xn(n)):t!=null?Qa(e,p,xn(t)):r!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+xn(g):e.removeAttribute("name")}function cs(e,n,t,r,l,s,p,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),n!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||n!=null)){Hn(e);return}t=t!=null?""+xn(t):"",n=n!=null?""+xn(n):t,g||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=g?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Hn(e)}function Qa(e,n,t){n==="number"&&ta(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function wt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+xn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Za(e,n,t){if(n!=null&&(n=""+xn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+xn(t):""}function bl(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(i(92));if(Ge(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=xn(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),Hn(e)}function nn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var us=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Br(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||us.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function yl(e,n,t){if(n!=null&&typeof n!="object")throw Error(i(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&t[l]!==r&&Br(e,l,r)}else for(var s in n)n.hasOwnProperty(s)&&Br(e,s,n[s])}function Wa(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zr(e){return fs.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tn(){}var sr=null;function Ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Et=null;function ds(e){var n=Pn(e);if(n&&(e=n.stateNode)){var t=e[un]||null;e:switch(e=n.stateNode,n.type){case"input":if(q(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Vn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=r[un]||null;if(!l)throw Error(i(90));q(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&ss(r)}break e;case"textarea":Za(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&wt(e,!!t.multiple,n,!1)}}}var ra=!1;function vl(e,n,t){if(ra)return e(n,t);ra=!0;try{var r=e(n);return r}finally{if(ra=!1,(Ur!==null||Et!==null)&&(ao(),Ur&&(n=Ur,e=Et,Et=Ur=null,ds(n),e)))for(n=0;n<e.length;n++)ds(e[n])}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var r=t[un]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(i(231,n,typeof t));return t}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ei=!1;if(St)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){ei=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{ei=!1}var Zt=null,ut=null,rn=null;function ni(){if(rn)return rn;var e,n=ut,t=n.length,r,l="value"in Zt?Zt.value:Zt.textContent,s=l.length;for(e=0;e<t&&n[e]===l[e];e++);var p=t-e;for(r=1;r<=p&&n[t-r]===l[s-r];r++);return rn=l.slice(e,1<r?1-r:void 0)}function Wt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wl(){return!0}function ti(){return!1}function jn(e){function n(t,r,l,s,p){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=p,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(t=e[g],this[g]=t?t(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wl:ti,this.isPropagationStopped=ti,this}return k(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=jn(or),El=k({},or,{view:0,detail:0}),ms=jn(El),aa,Sl,kl,Nl=k({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kl&&(kl&&e.type==="mousemove"?(aa=e.screenX-kl.screenX,Sl=e.screenY-kl.screenY):Sl=aa=0,kl=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),ri=jn(Nl),ps=k({},Nl,{dataTransfer:0}),Po=jn(ps),$o=k({},El,{relatedTarget:0}),li=jn($o),Xo=k({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Fo=jn(Xo),Ko=k({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qo=jn(Ko),Zo=k({},or,{data:0}),hs=jn(Zo),Wo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ec={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ec[e])?!!n[e]:!1}function ai(){return Rl}var nc=k({},El,{key:function(e){if(e.key){var n=Wo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(e){return e.type==="keypress"?Wt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_s=jn(nc),tc=k({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ii=jn(tc),rc=k({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),lc=jn(rc),gs=k({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),ac=jn(gs),ic=k({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sc=jn(ic),oc=k({},or,{newState:0,oldState:0}),cc=jn(oc),uc=[9,13,27,32],Ml=St&&"CompositionEvent"in window,Gn=null;St&&"documentMode"in document&&(Gn=document.documentMode);var bs=St&&"TextEvent"in window&&!Gn,ys=St&&(!Ml||Gn&&8<Gn&&11>=Gn),vs=" ",xs=!1;function Hr(e,n){switch(e){case"keyup":return uc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function si(e,n){switch(e){case"compositionend":return Tl(n);case"keypress":return n.which!==32?null:(xs=!0,vs);case"textInput":return e=n.data,e===vs&&xs?null:e;default:return null}}function ws(e,n){if(cr)return e==="compositionend"||!Ml&&Hr(e,n)?(e=ni(),rn=ut=Zt=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ys&&n.locale!=="ko"?null:n.data;default:return null}}var fc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fc[e.type]:n==="textarea"}function m(e,n,t,r){Ur?Et?Et.push(r):Et=[r]:Ur=r,n=mo(n,"onChange"),0<n.length&&(t=new la("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var b=null,w=null;function C(e){pp(e,0)}function D(e){var n=Gt(e);if(ss(n))return e}function de(e,n){if(e==="change")return n}var Se=!1;if(St){var We;if(St){var Ye="oninput"in document;if(!Ye){var Xn=document.createElement("div");Xn.setAttribute("oninput","return;"),Ye=typeof Xn.oninput=="function"}We=Ye}else We=!1;Se=We&&(!document.documentMode||9<document.documentMode)}function ur(){b&&(b.detachEvent("onpropertychange",Ie),w=b=null)}function Ie(e){if(e.propertyName==="value"&&D(w)){var n=[];m(n,w,e,Ja(e)),vl(C,n)}}function fr(e,n,t){e==="focusin"?(ur(),b=n,w=t,b.attachEvent("onpropertychange",Ie)):e==="focusout"&&ur()}function oi(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return D(w)}function jl(e,n){if(e==="click")return D(n)}function Vr(e,n){if(e==="input"||e==="change")return D(n)}function ci(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var An=typeof Object.is=="function"?Object.is:ci;function dr(e,n){if(An(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!jr.call(n,l)||!An(e[l],n[l]))return!1}return!0}function ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gr(e,n){var t=ia(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ia(t)}}function Ss(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ss(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ui(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ta(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ta(e.document)}return n}function dc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var S_=St&&"documentMode"in document&&11>=document.documentMode,sa=null,mc=null,fi=null,pc=!1;function Yf(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pc||sa==null||sa!==ta(r)||(r=sa,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&dr(fi,r)||(fi=r,r=mo(mc,"onSelect"),0<r.length&&(n=new la("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=sa)))}function Al(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var oa={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionrun:Al("Transition","TransitionRun"),transitionstart:Al("Transition","TransitionStart"),transitioncancel:Al("Transition","TransitionCancel"),transitionend:Al("Transition","TransitionEnd")},hc={},If={};St&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function Dl(e){if(hc[e])return hc[e];if(!oa[e])return e;var n=oa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in If)return hc[e]=n[t];return e}var qf=Dl("animationend"),Pf=Dl("animationiteration"),$f=Dl("animationstart"),k_=Dl("transitionrun"),N_=Dl("transitionstart"),R_=Dl("transitioncancel"),Xf=Dl("transitionend"),Ff=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function Yt(e,n){Ff.set(e,n),st(n,[e])}var ks=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],ca=0,gc=0;function Ns(){for(var e=ca,n=gc=ca=0;n<e;){var t=kt[n];kt[n++]=null;var r=kt[n];kt[n++]=null;var l=kt[n];kt[n++]=null;var s=kt[n];if(kt[n++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}s!==0&&Kf(t,l,s)}}function Rs(e,n,t,r){kt[ca++]=e,kt[ca++]=n,kt[ca++]=t,kt[ca++]=r,gc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bc(e,n,t,r){return Rs(e,n,t,r),Ms(e)}function Ol(e,n){return Rs(e,null,null,n),Ms(e)}function Kf(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var l=!1,s=e.return;s!==null;)s.childLanes|=t,r=s.alternate,r!==null&&(r.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&n!==null&&(l=31-Rn(t),e=s.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=t|536870912),s):null}function Ms(e){if(50<Oi)throw Oi=0,Ru=null,Error(i(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ua={};function M_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,n,t,r){return new M_(e,n,t,r)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mr(e,n){var t=e.alternate;return t===null?(t=ft(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Qf(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ts(e,n,t,r,l,s){var p=0;if(r=e,typeof e=="function")yc(e)&&(p=1);else if(typeof e=="string")p=Og(e,t,T.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=ft(31,t,n,l),e.elementType=xe,e.lanes=s,e;case W:return Cl(t.children,l,s,n);case K:p=8,l|=24;break;case G:return e=ft(12,t,n,l|2),e.elementType=G,e.lanes=s,e;case se:return e=ft(13,t,n,l),e.elementType=se,e.lanes=s,e;case _e:return e=ft(19,t,n,l),e.elementType=_e,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:p=10;break e;case H:p=9;break e;case re:p=11;break e;case le:p=14;break e;case J:p=16,r=null;break e}p=29,t=Error(i(130,e===null?"null":typeof e,"")),r=null}return n=ft(p,t,n,l),n.elementType=e,n.type=r,n.lanes=s,n}function Cl(e,n,t,r){return e=ft(7,e,r,n),e.lanes=t,e}function vc(e,n,t){return e=ft(6,e,null,n),e.lanes=t,e}function Zf(e){var n=ft(18,null,null,0);return n.stateNode=e,n}function xc(e,n,t){return n=ft(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Wf=new WeakMap;function Nt(e,n){if(typeof e=="object"&&e!==null){var t=Wf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:zn(n)},Wf.set(e,n),n)}return{value:e,source:n,stack:zn(n)}}var fa=[],da=0,js=null,di=0,Rt=[],Mt=0,Yr=null,Jt=1,er="";function pr(e,n){fa[da++]=di,fa[da++]=js,js=e,di=n}function Jf(e,n,t){Rt[Mt++]=Jt,Rt[Mt++]=er,Rt[Mt++]=Yr,Yr=e;var r=Jt;e=er;var l=32-Rn(r)-1;r&=~(1<<l),t+=1;var s=32-Rn(n)+l;if(30<s){var p=l-l%5;s=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Jt=1<<32-Rn(n)+l|t<<l|r,er=s+e}else Jt=1<<s|t<<l|r,er=e}function wc(e){e.return!==null&&(pr(e,1),Jf(e,1,0))}function Ec(e){for(;e===js;)js=fa[--da],fa[da]=null,di=fa[--da],fa[da]=null;for(;e===Yr;)Yr=Rt[--Mt],Rt[Mt]=null,er=Rt[--Mt],Rt[Mt]=null,Jt=Rt[--Mt],Rt[Mt]=null}function ed(e,n){Rt[Mt++]=Jt,Rt[Mt++]=er,Rt[Mt++]=Yr,Jt=n.id,er=n.overflow,Yr=e}var Dn=null,Je=null,Le=!1,Ir=null,Tt=!1,Sc=Error(i(519));function qr(e){var n=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mi(Nt(n,e)),Sc}function nd(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[cn]=e,n[un]=r,t){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(t=0;t<Li.length;t++)Me(Li[t],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),cs(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),bl(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||bp(n.textContent,t)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=tn),n=!0):n=!1,n||qr(e,!0)}function td(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Dn=Dn.return}}function ma(e){if(e!==Dn)return!1;if(!Le)return td(e),Le=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Yu(e.type,e.memoizedProps)),t=!t),t&&Je&&qr(e),td(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Je=Rp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Je=Rp(e)}else n===27?(n=Je,ll(e.type)?(e=Xu,Xu=null,Je=e):Je=n):Je=Dn?At(e.stateNode.nextSibling):null;return!0}function Ll(){Je=Dn=null,Le=!1}function kc(){var e=Ir;return e!==null&&(tt===null?tt=e:tt.push.apply(tt,e),Ir=null),e}function mi(e){Ir===null?Ir=[e]:Ir.push(e)}var Nc=S(null),Bl=null,hr=null;function Pr(e,n,t){ee(Nc,n._currentValue),n._currentValue=t}function _r(e){e._currentValue=Nc.current,U(Nc)}function Rc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Mc(e,n,t,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var p=l.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=l;for(var E=0;E<n.length;E++)if(g.context===n[E]){s.lanes|=t,g=s.alternate,g!==null&&(g.lanes|=t),Rc(s.return,t,e),r||(p=null);break e}s=g.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(i(341));p.lanes|=t,s=p.alternate,s!==null&&(s.lanes|=t),Rc(p,t,e),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===e){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function pa(e,n,t,r){e=null;for(var l=n,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(i(387));if(p=p.memoizedProps,p!==null){var g=l.type;An(l.pendingProps.value,p.value)||(e!==null?e.push(g):e=[g])}}else if(l===X.current){if(p=l.alternate,p===null)throw Error(i(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Vi):e=[Vi])}l=l.return}e!==null&&Mc(n,e,t,r),n.flags|=262144}function As(e){for(e=e.firstContext;e!==null;){if(!An(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zl(e){Bl=e,hr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return rd(Bl,e)}function Ds(e,n){return Bl===null&&zl(e),rd(e,n)}function rd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},hr===null){if(e===null)throw Error(i(308));hr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else hr=hr.next=n;return t}var T_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},j_=o.unstable_scheduleCallback,A_=o.unstable_NormalPriority,pn={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tc(){return{controller:new T_,data:new Map,refCount:0}}function pi(e){e.refCount--,e.refCount===0&&j_(A_,function(){e.controller.abort()})}var hi=null,jc=0,ha=0,_a=null;function D_(e,n){if(hi===null){var t=hi=[];jc=0,ha=Ou(),_a={status:"pending",value:void 0,then:function(r){t.push(r)}}}return jc++,n.then(ld,ld),n}function ld(){if(--jc===0&&hi!==null){_a!==null&&(_a.status="fulfilled");var e=hi;hi=null,ha=0,_a=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function O_(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var ad=B.S;B.S=function(e,n){Ym=yn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&D_(e,n),ad!==null&&ad(e,n)};var Ul=S(null);function Ac(){var e=Ul.current;return e!==null?e:Qe.pooledCache}function Os(e,n){n===null?ee(Ul,Ul.current):ee(Ul,n.pool)}function id(){var e=Ac();return e===null?null:{parent:pn._currentValue,pool:e}}var ga=Error(i(460)),Dc=Error(i(474)),Cs=Error(i(542)),Ls={then:function(){}};function sd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function od(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(tn,tn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ud(e),e;default:if(typeof n.status=="string")n.then(tn,tn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ud(e),e}throw Vl=n,ga}}function Hl(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Vl=t,ga):t}}var Vl=null;function cd(){if(Vl===null)throw Error(i(459));var e=Vl;return Vl=null,e}function ud(e){if(e===ga||e===Cs)throw Error(i(483))}var ba=null,_i=0;function Bs(e){var n=_i;return _i+=1,ba===null&&(ba=[]),od(ba,e,n)}function gi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function zs(e,n){throw n.$$typeof===R?Error(i(525)):(e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function fd(e){function n(M,N){if(e){var j=M.deletions;j===null?(M.deletions=[N],M.flags|=16):j.push(N)}}function t(M,N){if(!e)return null;for(;N!==null;)n(M,N),N=N.sibling;return null}function r(M){for(var N=new Map;M!==null;)M.key!==null?N.set(M.key,M):N.set(M.index,M),M=M.sibling;return N}function l(M,N){return M=mr(M,N),M.index=0,M.sibling=null,M}function s(M,N,j){return M.index=j,e?(j=M.alternate,j!==null?(j=j.index,j<N?(M.flags|=67108866,N):j):(M.flags|=67108866,N)):(M.flags|=1048576,N)}function p(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function g(M,N,j,Y){return N===null||N.tag!==6?(N=vc(j,M.mode,Y),N.return=M,N):(N=l(N,j),N.return=M,N)}function E(M,N,j,Y){var pe=j.type;return pe===W?V(M,N,j.props.children,Y,j.key):N!==null&&(N.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===J&&Hl(pe)===N.type)?(N=l(N,j.props),gi(N,j),N.return=M,N):(N=Ts(j.type,j.key,j.props,null,M.mode,Y),gi(N,j),N.return=M,N)}function A(M,N,j,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=xc(j,M.mode,Y),N.return=M,N):(N=l(N,j.children||[]),N.return=M,N)}function V(M,N,j,Y,pe){return N===null||N.tag!==7?(N=Cl(j,M.mode,Y,pe),N.return=M,N):(N=l(N,j),N.return=M,N)}function P(M,N,j){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=vc(""+N,M.mode,j),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case $:return j=Ts(N.type,N.key,N.props,null,M.mode,j),gi(j,N),j.return=M,j;case I:return N=xc(N,M.mode,j),N.return=M,N;case J:return N=Hl(N),P(M,N,j)}if(Ge(N)||ie(N))return N=Cl(N,M.mode,j,null),N.return=M,N;if(typeof N.then=="function")return P(M,Bs(N),j);if(N.$$typeof===ae)return P(M,Ds(M,N),j);zs(M,N)}return null}function O(M,N,j,Y){var pe=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return pe!==null?null:g(M,N,""+j,Y);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case $:return j.key===pe?E(M,N,j,Y):null;case I:return j.key===pe?A(M,N,j,Y):null;case J:return j=Hl(j),O(M,N,j,Y)}if(Ge(j)||ie(j))return pe!==null?null:V(M,N,j,Y,null);if(typeof j.then=="function")return O(M,N,Bs(j),Y);if(j.$$typeof===ae)return O(M,N,Ds(M,j),Y);zs(M,j)}return null}function z(M,N,j,Y,pe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return M=M.get(j)||null,g(N,M,""+Y,pe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case $:return M=M.get(Y.key===null?j:Y.key)||null,E(N,M,Y,pe);case I:return M=M.get(Y.key===null?j:Y.key)||null,A(N,M,Y,pe);case J:return Y=Hl(Y),z(M,N,j,Y,pe)}if(Ge(Y)||ie(Y))return M=M.get(j)||null,V(N,M,Y,pe,null);if(typeof Y.then=="function")return z(M,N,j,Bs(Y),pe);if(Y.$$typeof===ae)return z(M,N,j,Ds(N,Y),pe);zs(N,Y)}return null}function ue(M,N,j,Y){for(var pe=null,Ue=null,me=N,Ne=N=0,De=null;me!==null&&Ne<j.length;Ne++){me.index>Ne?(De=me,me=null):De=me.sibling;var He=O(M,me,j[Ne],Y);if(He===null){me===null&&(me=De);break}e&&me&&He.alternate===null&&n(M,me),N=s(He,N,Ne),Ue===null?pe=He:Ue.sibling=He,Ue=He,me=De}if(Ne===j.length)return t(M,me),Le&&pr(M,Ne),pe;if(me===null){for(;Ne<j.length;Ne++)me=P(M,j[Ne],Y),me!==null&&(N=s(me,N,Ne),Ue===null?pe=me:Ue.sibling=me,Ue=me);return Le&&pr(M,Ne),pe}for(me=r(me);Ne<j.length;Ne++)De=z(me,M,Ne,j[Ne],Y),De!==null&&(e&&De.alternate!==null&&me.delete(De.key===null?Ne:De.key),N=s(De,N,Ne),Ue===null?pe=De:Ue.sibling=De,Ue=De);return e&&me.forEach(function(cl){return n(M,cl)}),Le&&pr(M,Ne),pe}function ge(M,N,j,Y){if(j==null)throw Error(i(151));for(var pe=null,Ue=null,me=N,Ne=N=0,De=null,He=j.next();me!==null&&!He.done;Ne++,He=j.next()){me.index>Ne?(De=me,me=null):De=me.sibling;var cl=O(M,me,He.value,Y);if(cl===null){me===null&&(me=De);break}e&&me&&cl.alternate===null&&n(M,me),N=s(cl,N,Ne),Ue===null?pe=cl:Ue.sibling=cl,Ue=cl,me=De}if(He.done)return t(M,me),Le&&pr(M,Ne),pe;if(me===null){for(;!He.done;Ne++,He=j.next())He=P(M,He.value,Y),He!==null&&(N=s(He,N,Ne),Ue===null?pe=He:Ue.sibling=He,Ue=He);return Le&&pr(M,Ne),pe}for(me=r(me);!He.done;Ne++,He=j.next())He=z(me,M,Ne,He.value,Y),He!==null&&(e&&He.alternate!==null&&me.delete(He.key===null?Ne:He.key),N=s(He,N,Ne),Ue===null?pe=He:Ue.sibling=He,Ue=He);return e&&me.forEach(function(qg){return n(M,qg)}),Le&&pr(M,Ne),pe}function Fe(M,N,j,Y){if(typeof j=="object"&&j!==null&&j.type===W&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case $:e:{for(var pe=j.key;N!==null;){if(N.key===pe){if(pe=j.type,pe===W){if(N.tag===7){t(M,N.sibling),Y=l(N,j.props.children),Y.return=M,M=Y;break e}}else if(N.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===J&&Hl(pe)===N.type){t(M,N.sibling),Y=l(N,j.props),gi(Y,j),Y.return=M,M=Y;break e}t(M,N);break}else n(M,N);N=N.sibling}j.type===W?(Y=Cl(j.props.children,M.mode,Y,j.key),Y.return=M,M=Y):(Y=Ts(j.type,j.key,j.props,null,M.mode,Y),gi(Y,j),Y.return=M,M=Y)}return p(M);case I:e:{for(pe=j.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){t(M,N.sibling),Y=l(N,j.children||[]),Y.return=M,M=Y;break e}else{t(M,N);break}else n(M,N);N=N.sibling}Y=xc(j,M.mode,Y),Y.return=M,M=Y}return p(M);case J:return j=Hl(j),Fe(M,N,j,Y)}if(Ge(j))return ue(M,N,j,Y);if(ie(j)){if(pe=ie(j),typeof pe!="function")throw Error(i(150));return j=pe.call(j),ge(M,N,j,Y)}if(typeof j.then=="function")return Fe(M,N,Bs(j),Y);if(j.$$typeof===ae)return Fe(M,N,Ds(M,j),Y);zs(M,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,N!==null&&N.tag===6?(t(M,N.sibling),Y=l(N,j),Y.return=M,M=Y):(t(M,N),Y=vc(j,M.mode,Y),Y.return=M,M=Y),p(M)):t(M,N)}return function(M,N,j,Y){try{_i=0;var pe=Fe(M,N,j,Y);return ba=null,pe}catch(me){if(me===ga||me===Cs)throw me;var Ue=ft(29,me,null,M.mode);return Ue.lanes=Y,Ue.return=M,Ue}finally{}}}var Gl=fd(!0),dd=fd(!1),$r=!1;function Oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Ms(e),Kf(e,null,t),n}return Rs(e,r,n,t),Ms(e)}function bi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wl(e,t)}}function Lc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var p={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?l=s=p:s=s.next=p,t=t.next}while(t!==null);s===null?l=s=n:s=s.next=n}else l=s=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Bc=!1;function yi(){if(Bc){var e=_a;if(e!==null)throw e}}function vi(e,n,t,r){Bc=!1;var l=e.updateQueue;$r=!1;var s=l.firstBaseUpdate,p=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var E=g,A=E.next;E.next=null,p===null?s=A:p.next=A,p=E;var V=e.alternate;V!==null&&(V=V.updateQueue,g=V.lastBaseUpdate,g!==p&&(g===null?V.firstBaseUpdate=A:g.next=A,V.lastBaseUpdate=E))}if(s!==null){var P=l.baseState;p=0,V=A=E=null,g=s;do{var O=g.lane&-536870913,z=O!==g.lane;if(z?(Ae&O)===O:(r&O)===O){O!==0&&O===ha&&(Bc=!0),V!==null&&(V=V.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ue=e,ge=g;O=n;var Fe=t;switch(ge.tag){case 1:if(ue=ge.payload,typeof ue=="function"){P=ue.call(Fe,P,O);break e}P=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ge.payload,O=typeof ue=="function"?ue.call(Fe,P,O):ue,O==null)break e;P=k({},P,O);break e;case 2:$r=!0}}O=g.callback,O!==null&&(e.flags|=64,z&&(e.flags|=8192),z=l.callbacks,z===null?l.callbacks=[O]:z.push(O))}else z={lane:O,tag:g.tag,payload:g.payload,callback:g.callback,next:null},V===null?(A=V=z,E=P):V=V.next=z,p|=O;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;z=g,g=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);V===null&&(E=P),l.baseState=E,l.firstBaseUpdate=A,l.lastBaseUpdate=V,s===null&&(l.shared.lanes=0),Jr|=p,e.lanes=p,e.memoizedState=P}}function md(e,n){if(typeof e!="function")throw Error(i(191,e));e.call(n)}function pd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)md(t[e],n)}var ya=S(null),Us=S(0);function hd(e,n){e=kr,ee(Us,e),ee(ya,n),kr=e|n.baseLanes}function zc(){ee(Us,kr),ee(ya,ya.current)}function Uc(){kr=Us.current,U(ya),U(Us)}var dt=S(null),jt=null;function Kr(e){var n=e.alternate;ee(fn,fn.current&1),ee(dt,e),jt===null&&(n===null||ya.current!==null||n.memoizedState!==null)&&(jt=e)}function Hc(e){ee(fn,fn.current),ee(dt,e),jt===null&&(jt=e)}function _d(e){e.tag===22?(ee(fn,fn.current),ee(dt,e),jt===null&&(jt=e)):Qr()}function Qr(){ee(fn,fn.current),ee(dt,dt.current)}function mt(e){U(dt),jt===e&&(jt=null),U(fn)}var fn=S(0);function Hs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Pu(t)||$u(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var gr=0,ke=null,$e=null,hn=null,Vs=!1,va=!1,Yl=!1,Gs=0,xi=0,xa=null,C_=0;function an(){throw Error(i(321))}function Vc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!An(e[t],n[t]))return!1;return!0}function Gc(e,n,t,r,l,s){return gr=s,ke=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Jd:tu,Yl=!1,s=t(r,l),Yl=!1,va&&(s=bd(n,t,r,l)),gd(e),s}function gd(e){B.H=Si;var n=$e!==null&&$e.next!==null;if(gr=0,hn=$e=ke=null,Vs=!1,xi=0,xa=null,n)throw Error(i(300));e===null||_n||(e=e.dependencies,e!==null&&As(e)&&(_n=!0))}function bd(e,n,t,r){ke=e;var l=0;do{if(va&&(xa=null),xi=0,va=!1,25<=l)throw Error(i(301));if(l+=1,hn=$e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}B.H=em,s=n(t,r)}while(va);return s}function L_(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?wi(n):n,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(ke.flags|=1024),n}function Yc(){var e=Gs!==0;return Gs=0,e}function Ic(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function qc(e){if(Vs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Vs=!1}gr=0,hn=$e=ke=null,va=!1,xi=Gs=0,xa=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ke.memoizedState=hn=e:hn=hn.next=e,hn}function dn(){if($e===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=hn===null?ke.memoizedState:hn.next;if(n!==null)hn=n,$e=e;else{if(e===null)throw ke.alternate===null?Error(i(467)):Error(i(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},hn===null?ke.memoizedState=hn=e:hn=hn.next=e}return hn}function Ys(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wi(e){var n=xi;return xi+=1,xa===null&&(xa=[]),e=od(xa,e,n),n=ke,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Jd:tu),e}function Is(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wi(e);if(e.$$typeof===ae)return On(e)}throw Error(i(438,String(e)))}function Pc(e){var n=null,t=ke.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=ke.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ys(),ke.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=be;return n.index++,t}function br(e,n){return typeof n=="function"?n(e):n}function qs(e){var n=dn();return $c(n,$e,e)}function $c(e,n,t){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=t;var l=e.baseQueue,s=r.pending;if(s!==null){if(l!==null){var p=l.next;l.next=s.next,s.next=p}n.baseQueue=l=s,r.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{n=l.next;var g=p=null,E=null,A=n,V=!1;do{var P=A.lane&-536870913;if(P!==A.lane?(Ae&P)===P:(gr&P)===P){var O=A.revertLane;if(O===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),P===ha&&(V=!0);else if((gr&O)===O){A=A.next,O===ha&&(V=!0);continue}else P={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},E===null?(g=E=P,p=s):E=E.next=P,ke.lanes|=O,Jr|=O;P=A.action,Yl&&t(s,P),s=A.hasEagerState?A.eagerState:t(s,P)}else O={lane:P,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},E===null?(g=E=O,p=s):E=E.next=O,ke.lanes|=P,Jr|=P;A=A.next}while(A!==null&&A!==n);if(E===null?p=s:E.next=g,!An(s,e.memoizedState)&&(_n=!0,V&&(t=_a,t!==null)))throw t;e.memoizedState=s,e.baseState=p,e.baseQueue=E,r.lastRenderedState=s}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xc(e){var n=dn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,s=n.memoizedState;if(l!==null){t.pending=null;var p=l=l.next;do s=e(s,p.action),p=p.next;while(p!==l);An(s,n.memoizedState)||(_n=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function yd(e,n,t){var r=ke,l=dn(),s=Le;if(s){if(t===void 0)throw Error(i(407));t=t()}else t=n();var p=!An(($e||l).memoizedState,t);if(p&&(l.memoizedState=t,_n=!0),l=l.queue,Qc(wd.bind(null,r,l,e),[e]),l.getSnapshot!==n||p||hn!==null&&hn.memoizedState.tag&1){if(r.flags|=2048,wa(9,{destroy:void 0},xd.bind(null,r,l,t,n),null),Qe===null)throw Error(i(349));s||(gr&127)!==0||vd(r,n,t)}return t}function vd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ke.updateQueue,n===null?(n=Ys(),ke.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xd(e,n,t,r){n.value=t,n.getSnapshot=r,Ed(n)&&Sd(e)}function wd(e,n,t){return t(function(){Ed(n)&&Sd(e)})}function Ed(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!An(e,t)}catch{return!0}}function Sd(e){var n=Ol(e,2);n!==null&&rt(n,e,2)}function Fc(e){var n=Fn();if(typeof e=="function"){var t=e;if(e=t(),Yl){at(!0);try{t()}finally{at(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},n}function kd(e,n,t,r){return e.baseState=t,$c(e,$e,typeof r=="function"?r:br)}function B_(e,n,t,r,l){if(Xs(e))throw Error(i(485));if(e=n.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){s.listeners.push(p)}};B.T!==null?t(!0):s.isTransition=!1,r(s),t=n.pending,t===null?(s.next=n.pending=s,Nd(n,s)):(s.next=t.next,n.pending=t.next=s)}}function Nd(e,n){var t=n.action,r=n.payload,l=e.state;if(n.isTransition){var s=B.T,p={};B.T=p;try{var g=t(l,r),E=B.S;E!==null&&E(p,g),Rd(e,n,g)}catch(A){Kc(e,n,A)}finally{s!==null&&p.types!==null&&(s.types=p.types),B.T=s}}else try{s=t(l,r),Rd(e,n,s)}catch(A){Kc(e,n,A)}}function Rd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){Md(e,n,r)},function(r){return Kc(e,n,r)}):Md(e,n,t)}function Md(e,n,t){n.status="fulfilled",n.value=t,Td(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Nd(e,t)))}function Kc(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,Td(n),n=n.next;while(n!==r)}e.action=null}function Td(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function jd(e,n){return n}function Ad(e,n){if(Le){var t=Qe.formState;if(t!==null){e:{var r=ke;if(Le){if(Je){n:{for(var l=Je,s=Tt;l.nodeType!==8;){if(!s){l=null;break n}if(l=At(l.nextSibling),l===null){l=null;break n}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Je=At(l.nextSibling),r=l.data==="F!";break e}}qr(r)}r=!1}r&&(n=t[0])}}return t=Fn(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jd,lastRenderedState:n},t.queue=r,t=Qd.bind(null,ke,r),r.dispatch=t,r=Fc(!1),s=nu.bind(null,ke,!1,r.queue),r=Fn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,t=B_.bind(null,ke,l,s,t),l.dispatch=t,r.memoizedState=e,[n,t,!1]}function Dd(e){var n=dn();return Od(n,$e,e)}function Od(e,n,t){if(n=$c(e,n,jd)[0],e=qs(br)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=wi(n)}catch(p){throw p===ga?Cs:p}else r=n;n=dn();var l=n.queue,s=l.dispatch;return t!==n.memoizedState&&(ke.flags|=2048,wa(9,{destroy:void 0},z_.bind(null,l,t),null)),[r,s,e]}function z_(e,n){e.action=n}function Cd(e){var n=dn(),t=$e;if(t!==null)return Od(n,t,e);dn(),n=n.memoizedState,t=dn();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function wa(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=ke.updateQueue,n===null&&(n=Ys(),ke.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Ld(){return dn().memoizedState}function Ps(e,n,t,r){var l=Fn();ke.flags|=e,l.memoizedState=wa(1|n,{destroy:void 0},t,r===void 0?null:r)}function $s(e,n,t,r){var l=dn();r=r===void 0?null:r;var s=l.memoizedState.inst;$e!==null&&r!==null&&Vc(r,$e.memoizedState.deps)?l.memoizedState=wa(n,s,t,r):(ke.flags|=e,l.memoizedState=wa(1|n,s,t,r))}function Bd(e,n){Ps(8390656,8,e,n)}function Qc(e,n){$s(2048,8,e,n)}function U_(e){ke.flags|=4;var n=ke.updateQueue;if(n===null)n=Ys(),ke.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function zd(e){var n=dn().memoizedState;return U_({ref:n,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(i(440));return n.impl.apply(void 0,arguments)}}function Ud(e,n){return $s(4,2,e,n)}function Hd(e,n){return $s(4,4,e,n)}function Vd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gd(e,n,t){t=t!=null?t.concat([e]):null,$s(4,4,Vd.bind(null,n,e),t)}function Zc(){}function Yd(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&Vc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Id(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&Vc(n,r[1]))return r[0];if(r=e(),Yl){at(!0);try{e()}finally{at(!1)}}return t.memoizedState=[r,n],r}function Wc(e,n,t){return t===void 0||(gr&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=qm(),ke.lanes|=e,Jr|=e,t)}function qd(e,n,t,r){return An(t,n)?t:ya.current!==null?(e=Wc(e,t,r),An(e,n)||(_n=!0),e):(gr&42)===0||(gr&1073741824)!==0&&(Ae&261930)===0?(_n=!0,e.memoizedState=t):(e=qm(),ke.lanes|=e,Jr|=e,n)}function Pd(e,n,t,r,l){var s=Q.p;Q.p=s!==0&&8>s?s:8;var p=B.T,g={};B.T=g,nu(e,!1,n,t);try{var E=l(),A=B.S;if(A!==null&&A(g,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var V=O_(E,r);Ei(e,n,V,_t(e))}else Ei(e,n,r,_t(e))}catch(P){Ei(e,n,{then:function(){},status:"rejected",reason:P},_t())}finally{Q.p=s,p!==null&&g.types!==null&&(p.types=g.types),B.T=p}}function H_(){}function Jc(e,n,t,r){if(e.tag!==5)throw Error(i(476));var l=$d(e).queue;Pd(e,l,n,ce,t===null?H_:function(){return Xd(e),t(r)})}function $d(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:ce},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xd(e){var n=$d(e);n.next===null&&(n=e.alternate.memoizedState),Ei(e,n.next.queue,{},_t())}function eu(){return On(Vi)}function Fd(){return dn().memoizedState}function Kd(){return dn().memoizedState}function V_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=_t();e=Xr(t);var r=Fr(n,e,t);r!==null&&(rt(r,n,t),bi(r,n,t)),n={cache:Tc()},e.payload=n;return}n=n.return}}function G_(e,n,t){var r=_t();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Xs(e)?Zd(n,t):(t=bc(e,n,t,r),t!==null&&(rt(t,e,r),Wd(t,n,r)))}function Qd(e,n,t){var r=_t();Ei(e,n,t,r)}function Ei(e,n,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xs(e))Zd(n,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var p=n.lastRenderedState,g=s(p,t);if(l.hasEagerState=!0,l.eagerState=g,An(g,p))return Rs(e,n,l,0),Qe===null&&Ns(),!1}catch{}finally{}if(t=bc(e,n,l,r),t!==null)return rt(t,e,r),Wd(t,n,r),!0}return!1}function nu(e,n,t,r){if(r={lane:2,revertLane:Ou(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xs(e)){if(n)throw Error(i(479))}else n=bc(e,t,r,2),n!==null&&rt(n,e,2)}function Xs(e){var n=e.alternate;return e===ke||n!==null&&n===ke}function Zd(e,n){va=Vs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Wd(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wl(e,t)}}var Si={readContext:On,use:Is,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Si.useEffectEvent=an;var Jd={readContext:On,use:Is,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:Bd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Ps(4194308,4,Vd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ps(4194308,4,e,n)},useInsertionEffect:function(e,n){Ps(4,2,e,n)},useMemo:function(e,n){var t=Fn();n=n===void 0?null:n;var r=e();if(Yl){at(!0);try{e()}finally{at(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=Fn();if(t!==void 0){var l=t(n);if(Yl){at(!0);try{t(n)}finally{at(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=G_.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Fc(e);var n=e.queue,t=Qd.bind(null,ke,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Zc,useDeferredValue:function(e,n){var t=Fn();return Wc(t,e,n)},useTransition:function(){var e=Fc(!1);return e=Pd.bind(null,ke,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=ke,l=Fn();if(Le){if(t===void 0)throw Error(i(407));t=t()}else{if(t=n(),Qe===null)throw Error(i(349));(Ae&127)!==0||vd(r,n,t)}l.memoizedState=t;var s={value:t,getSnapshot:n};return l.queue=s,Bd(wd.bind(null,r,s,e),[e]),r.flags|=2048,wa(9,{destroy:void 0},xd.bind(null,r,s,t,n),null),t},useId:function(){var e=Fn(),n=Qe.identifierPrefix;if(Le){var t=er,r=Jt;t=(r&~(1<<32-Rn(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Gs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=C_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:eu,useFormState:Ad,useActionState:Ad,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=nu.bind(null,ke,!0,t),t.dispatch=n,[e,n]},useMemoCache:Pc,useCacheRefresh:function(){return Fn().memoizedState=V_.bind(null,ke)},useEffectEvent:function(e){var n=Fn(),t={impl:e};return n.memoizedState=t,function(){if((Ve&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}},tu={readContext:On,use:Is,useCallback:Yd,useContext:On,useEffect:Qc,useImperativeHandle:Gd,useInsertionEffect:Ud,useLayoutEffect:Hd,useMemo:Id,useReducer:qs,useRef:Ld,useState:function(){return qs(br)},useDebugValue:Zc,useDeferredValue:function(e,n){var t=dn();return qd(t,$e.memoizedState,e,n)},useTransition:function(){var e=qs(br)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:wi(e),n]},useSyncExternalStore:yd,useId:Fd,useHostTransitionStatus:eu,useFormState:Dd,useActionState:Dd,useOptimistic:function(e,n){var t=dn();return kd(t,$e,e,n)},useMemoCache:Pc,useCacheRefresh:Kd};tu.useEffectEvent=zd;var em={readContext:On,use:Is,useCallback:Yd,useContext:On,useEffect:Qc,useImperativeHandle:Gd,useInsertionEffect:Ud,useLayoutEffect:Hd,useMemo:Id,useReducer:Xc,useRef:Ld,useState:function(){return Xc(br)},useDebugValue:Zc,useDeferredValue:function(e,n){var t=dn();return $e===null?Wc(t,e,n):qd(t,$e.memoizedState,e,n)},useTransition:function(){var e=Xc(br)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:wi(e),n]},useSyncExternalStore:yd,useId:Fd,useHostTransitionStatus:eu,useFormState:Cd,useActionState:Cd,useOptimistic:function(e,n){var t=dn();return $e!==null?kd(t,$e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Pc,useCacheRefresh:Kd};em.useEffectEvent=zd;function ru(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:k({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var lu={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=_t(),l=Xr(r);l.payload=n,t!=null&&(l.callback=t),n=Fr(e,l,r),n!==null&&(rt(n,e,r),bi(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=_t(),l=Xr(r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Fr(e,l,r),n!==null&&(rt(n,e,r),bi(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=_t(),r=Xr(t);r.tag=2,n!=null&&(r.callback=n),n=Fr(e,r,t),n!==null&&(rt(n,e,t),bi(n,e,t))}};function nm(e,n,t,r,l,s,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,p):n.prototype&&n.prototype.isPureReactComponent?!dr(t,r)||!dr(l,s):!0}function tm(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&lu.enqueueReplaceState(n,n.state,null)}function Il(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=k({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function rm(e){ks(e)}function lm(e){console.error(e)}function am(e){ks(e)}function Fs(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function im(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function au(e,n,t){return t=Xr(t),t.tag=3,t.payload={element:null},t.callback=function(){Fs(e,n)},t}function sm(e){return e=Xr(e),e.tag=3,e}function om(e,n,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var s=r.value;e.payload=function(){return l(s)},e.callback=function(){im(n,t,r)}}var p=t.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){im(n,t,r),typeof l!="function"&&(el===null?el=new Set([this]):el.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})})}function Y_(e,n,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&pa(n,t,l,!0),t=dt.current,t!==null){switch(t.tag){case 31:case 13:return jt===null?io():t.alternate===null&&sn===0&&(sn=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===Ls?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),ju(e,r,l)),!1;case 22:return t.flags|=65536,r===Ls?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),ju(e,r,l)),!1}throw Error(i(435,t.tag))}return ju(e,r,l),io(),!1}if(Le)return n=dt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Sc&&(e=Error(i(422),{cause:r}),mi(Nt(e,t)))):(r!==Sc&&(n=Error(i(423),{cause:r}),mi(Nt(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=Nt(r,t),l=au(e.stateNode,r,l),Lc(e,l),sn!==4&&(sn=2)),!1;var s=Error(i(520),{cause:r});if(s=Nt(s,t),Di===null?Di=[s]:Di.push(s),sn!==4&&(sn=2),n===null)return!0;r=Nt(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=au(t.stateNode,r,e),Lc(t,e),!1;case 1:if(n=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(el===null||!el.has(s))))return t.flags|=65536,l&=-l,t.lanes|=l,l=sm(l),om(l,e,t,r),Lc(t,l),!1}t=t.return}while(t!==null);return!1}var iu=Error(i(461)),_n=!1;function Cn(e,n,t,r){n.child=e===null?dd(n,null,t,r):Gl(n,e.child,t,r)}function cm(e,n,t,r,l){t=t.render;var s=n.ref;if("ref"in r){var p={};for(var g in r)g!=="ref"&&(p[g]=r[g])}else p=r;return zl(n),r=Gc(e,n,t,p,s,l),g=Yc(),e!==null&&!_n?(Ic(e,n,l),yr(e,n,l)):(Le&&g&&wc(n),n.flags|=1,Cn(e,n,r,l),n.child)}function um(e,n,t,r,l){if(e===null){var s=t.type;return typeof s=="function"&&!yc(s)&&s.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=s,fm(e,n,s,r,l)):(e=Ts(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!pu(e,l)){var p=s.memoizedProps;if(t=t.compare,t=t!==null?t:dr,t(p,r)&&e.ref===n.ref)return yr(e,n,l)}return n.flags|=1,e=mr(s,r),e.ref=n.ref,e.return=n,n.child=e}function fm(e,n,t,r,l){if(e!==null){var s=e.memoizedProps;if(dr(s,r)&&e.ref===n.ref)if(_n=!1,n.pendingProps=r=s,pu(e,l))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,yr(e,n,l)}return su(e,n,t,r,l)}function dm(e,n,t,r){var l=r.children,s=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~s}else r=0,n.child=null;return mm(e,n,s,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Os(n,s!==null?s.cachePool:null),s!==null?hd(n,s):zc(),_d(n);else return r=n.lanes=536870912,mm(e,n,s!==null?s.baseLanes|t:t,t,r)}else s!==null?(Os(n,s.cachePool),hd(n,s),Qr(),n.memoizedState=null):(e!==null&&Os(n,null),zc(),Qr());return Cn(e,n,l,t),n.child}function ki(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mm(e,n,t,r,l){var s=Ac();return s=s===null?null:{parent:pn._currentValue,pool:s},n.memoizedState={baseLanes:t,cachePool:s},e!==null&&Os(n,null),zc(),_d(n),e!==null&&pa(e,n,r,!0),n.childLanes=l,null}function Ks(e,n){return n=Zs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function pm(e,n,t){return Gl(n,e.child,null,t),e=Ks(n,n.pendingProps),e.flags|=2,mt(n),n.memoizedState=null,e}function I_(e,n,t){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Le){if(r.mode==="hidden")return e=Ks(n,r),n.lanes=536870912,ki(null,e);if(Hc(n),(e=Je)?(e=Np(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yr!==null?{id:Jt,overflow:er}:null,retryLane:536870912,hydrationErrors:null},t=Zf(e),t.return=n,n.child=t,Dn=n,Je=null)):e=null,e===null)throw qr(n);return n.lanes=536870912,null}return Ks(n,r)}var s=e.memoizedState;if(s!==null){var p=s.dehydrated;if(Hc(n),l)if(n.flags&256)n.flags&=-257,n=pm(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(i(558));else if(_n||pa(e,n,t,!1),l=(t&e.childLanes)!==0,_n||l){if(r=Qe,r!==null&&(p=as(r,t),p!==0&&p!==s.retryLane))throw s.retryLane=p,Ol(e,p),rt(r,e,p),iu;io(),n=pm(e,n,t)}else e=s.treeContext,Je=At(p.nextSibling),Dn=n,Le=!0,Ir=null,Tt=!1,e!==null&&ed(n,e),n=Ks(n,r),n.flags|=4096;return n}return e=mr(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Qs(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(i(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function su(e,n,t,r,l){return zl(n),t=Gc(e,n,t,r,void 0,l),r=Yc(),e!==null&&!_n?(Ic(e,n,l),yr(e,n,l)):(Le&&r&&wc(n),n.flags|=1,Cn(e,n,t,l),n.child)}function hm(e,n,t,r,l,s){return zl(n),n.updateQueue=null,t=bd(n,r,t,l),gd(e),r=Yc(),e!==null&&!_n?(Ic(e,n,s),yr(e,n,s)):(Le&&r&&wc(n),n.flags|=1,Cn(e,n,t,s),n.child)}function _m(e,n,t,r,l){if(zl(n),n.stateNode===null){var s=ua,p=t.contextType;typeof p=="object"&&p!==null&&(s=On(p)),s=new t(r,s),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=lu,n.stateNode=s,s._reactInternals=n,s=n.stateNode,s.props=r,s.state=n.memoizedState,s.refs={},Oc(n),p=t.contextType,s.context=typeof p=="object"&&p!==null?On(p):ua,s.state=n.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(ru(n,t,p,r),s.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(p=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),p!==s.state&&lu.enqueueReplaceState(s,s.state,null),vi(n,r,s,l),yi(),s.state=n.memoizedState),typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){s=n.stateNode;var g=n.memoizedProps,E=Il(t,g);s.props=E;var A=s.context,V=t.contextType;p=ua,typeof V=="object"&&V!==null&&(p=On(V));var P=t.getDerivedStateFromProps;V=typeof P=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,V||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||A!==p)&&tm(n,s,r,p),$r=!1;var O=n.memoizedState;s.state=O,vi(n,r,s,l),yi(),A=n.memoizedState,g||O!==A||$r?(typeof P=="function"&&(ru(n,t,P,r),A=n.memoizedState),(E=$r||nm(n,t,E,r,O,A,p))?(V||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=A),s.props=r,s.state=A,s.context=p,r=E):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Cc(e,n),p=n.memoizedProps,V=Il(t,p),s.props=V,P=n.pendingProps,O=s.context,A=t.contextType,E=ua,typeof A=="object"&&A!==null&&(E=On(A)),g=t.getDerivedStateFromProps,(A=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==P||O!==E)&&tm(n,s,r,E),$r=!1,O=n.memoizedState,s.state=O,vi(n,r,s,l),yi();var z=n.memoizedState;p!==P||O!==z||$r||e!==null&&e.dependencies!==null&&As(e.dependencies)?(typeof g=="function"&&(ru(n,t,g,r),z=n.memoizedState),(V=$r||nm(n,t,V,r,O,z,E)||e!==null&&e.dependencies!==null&&As(e.dependencies))?(A||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,z,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,z,E)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=z),s.props=r,s.state=z,s.context=E,r=V):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),r=!1)}return s=r,Qs(e,n),r=(n.flags&128)!==0,s||r?(s=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:s.render(),n.flags|=1,e!==null&&r?(n.child=Gl(n,e.child,null,l),n.child=Gl(n,null,t,l)):Cn(e,n,t,l),n.memoizedState=s.state,e=n.child):e=yr(e,n,l),e}function gm(e,n,t,r){return Ll(),n.flags|=256,Cn(e,n,t,r),n.child}var ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(e){return{baseLanes:e,cachePool:id()}}function uu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=ht),e}function bm(e,n,t){var r=n.pendingProps,l=!1,s=(n.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(l?Kr(n):Qr(),(e=Je)?(e=Np(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yr!==null?{id:Jt,overflow:er}:null,retryLane:536870912,hydrationErrors:null},t=Zf(e),t.return=n,n.child=t,Dn=n,Je=null)):e=null,e===null)throw qr(n);return $u(e)?n.lanes=32:n.lanes=536870912,null}var g=r.children;return r=r.fallback,l?(Qr(),l=n.mode,g=Zs({mode:"hidden",children:g},l),r=Cl(r,l,t,null),g.return=n,r.return=n,g.sibling=r,n.child=g,r=n.child,r.memoizedState=cu(t),r.childLanes=uu(e,p,t),n.memoizedState=ou,ki(null,r)):(Kr(n),fu(n,g))}var E=e.memoizedState;if(E!==null&&(g=E.dehydrated,g!==null)){if(s)n.flags&256?(Kr(n),n.flags&=-257,n=du(e,n,t)):n.memoizedState!==null?(Qr(),n.child=e.child,n.flags|=128,n=null):(Qr(),g=r.fallback,l=n.mode,r=Zs({mode:"visible",children:r.children},l),g=Cl(g,l,t,null),g.flags|=2,r.return=n,g.return=n,r.sibling=g,n.child=r,Gl(n,e.child,null,t),r=n.child,r.memoizedState=cu(t),r.childLanes=uu(e,p,t),n.memoizedState=ou,n=ki(null,r));else if(Kr(n),$u(g)){if(p=g.nextSibling&&g.nextSibling.dataset,p)var A=p.dgst;p=A,r=Error(i(419)),r.stack="",r.digest=p,mi({value:r,source:null,stack:null}),n=du(e,n,t)}else if(_n||pa(e,n,t,!1),p=(t&e.childLanes)!==0,_n||p){if(p=Qe,p!==null&&(r=as(p,t),r!==0&&r!==E.retryLane))throw E.retryLane=r,Ol(e,r),rt(p,e,r),iu;Pu(g)||io(),n=du(e,n,t)}else Pu(g)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,Je=At(g.nextSibling),Dn=n,Le=!0,Ir=null,Tt=!1,e!==null&&ed(n,e),n=fu(n,r.children),n.flags|=4096);return n}return l?(Qr(),g=r.fallback,l=n.mode,E=e.child,A=E.sibling,r=mr(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&65011712,A!==null?g=mr(A,g):(g=Cl(g,l,t,null),g.flags|=2),g.return=n,r.return=n,r.sibling=g,n.child=r,ki(null,r),r=n.child,g=e.child.memoizedState,g===null?g=cu(t):(l=g.cachePool,l!==null?(E=pn._currentValue,l=l.parent!==E?{parent:E,pool:E}:l):l=id(),g={baseLanes:g.baseLanes|t,cachePool:l}),r.memoizedState=g,r.childLanes=uu(e,p,t),n.memoizedState=ou,ki(e.child,r)):(Kr(n),t=e.child,e=t.sibling,t=mr(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=t,n.memoizedState=null,t)}function fu(e,n){return n=Zs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zs(e,n){return e=ft(22,e,null,n),e.lanes=0,e}function du(e,n,t){return Gl(n,e.child,null,t),e=fu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ym(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Rc(e.return,n,t)}function mu(e,n,t,r,l,s){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:s}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=t,p.tailMode=l,p.treeForkCount=s)}function vm(e,n,t){var r=n.pendingProps,l=r.revealOrder,s=r.tail;r=r.children;var p=fn.current,g=(p&2)!==0;if(g?(p=p&1|2,n.flags|=128):p&=1,ee(fn,p),Cn(e,n,r,t),r=Le?di:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ym(e,t,n);else if(e.tag===19)ym(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Hs(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),mu(n,!1,l,t,s,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Hs(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}mu(n,!0,t,null,s,r);break;case"together":mu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function yr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jr|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(pa(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,t=mr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&As(e)))}function q_(e,n,t){switch(n.tag){case 3:Be(n,n.stateNode.containerInfo),Pr(n,pn,e.memoizedState.cache),Ll();break;case 27:case 5:In(n);break;case 4:Be(n,n.stateNode.containerInfo);break;case 10:Pr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hc(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Kr(n),n.flags|=128,null):(t&n.child.childLanes)!==0?bm(e,n,t):(Kr(n),e=yr(e,n,t),e!==null?e.sibling:null);Kr(n);break;case 19:var l=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(pa(e,n,t,!1),r=(t&n.childLanes)!==0),l){if(r)return vm(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ee(fn,fn.current),r)break;return null;case 22:return n.lanes=0,dm(e,n,t,n.pendingProps);case 24:Pr(n,pn,e.memoizedState.cache)}return yr(e,n,t)}function xm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!pu(e,t)&&(n.flags&128)===0)return _n=!1,q_(e,n,t);_n=(e.flags&131072)!==0}else _n=!1,Le&&(n.flags&1048576)!==0&&Jf(n,di,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Hl(n.elementType),n.type=e,typeof e=="function")yc(e)?(r=Il(e,r),n.tag=1,n=_m(null,n,e,r,t)):(n.tag=0,n=su(null,n,e,r,t));else{if(e!=null){var l=e.$$typeof;if(l===re){n.tag=11,n=cm(null,n,e,r,t);break e}else if(l===le){n.tag=14,n=um(null,n,e,r,t);break e}}throw n=Oe(e)||e,Error(i(306,n,""))}}return n;case 0:return su(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,l=Il(r,n.pendingProps),_m(e,n,r,l,t);case 3:e:{if(Be(n,n.stateNode.containerInfo),e===null)throw Error(i(387));r=n.pendingProps;var s=n.memoizedState;l=s.element,Cc(e,n),vi(n,r,null,t);var p=n.memoizedState;if(r=p.cache,Pr(n,pn,r),r!==s.cache&&Mc(n,[pn],t,!0),yi(),r=p.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){n=gm(e,n,r,t);break e}else if(r!==l){l=Nt(Error(i(424)),n),mi(l),n=gm(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=At(e.firstChild),Dn=n,Le=!0,Ir=null,Tt=!0,t=dd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ll(),r===l){n=yr(e,n,t);break e}Cn(e,n,r,t)}n=n.child}return n;case 26:return Qs(e,n),e===null?(t=Dp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Le||(t=n.type,e=n.pendingProps,r=po(Z.current).createElement(t),r[cn]=n,r[un]=e,Ln(r,t,e),Ze(r),n.stateNode=r):n.memoizedState=Dp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return In(n),e===null&&Le&&(r=n.stateNode=Tp(n.type,n.pendingProps,Z.current),Dn=n,Tt=!0,l=Je,ll(n.type)?(Xu=l,Je=At(r.firstChild)):Je=l),Cn(e,n,n.pendingProps.children,t),Qs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((l=r=Je)&&(r=vg(r,n.type,n.pendingProps,Tt),r!==null?(n.stateNode=r,Dn=n,Je=At(r.firstChild),Tt=!1,l=!0):l=!1),l||qr(n)),In(n),l=n.type,s=n.pendingProps,p=e!==null?e.memoizedProps:null,r=s.children,Yu(l,s)?r=null:p!==null&&Yu(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=Gc(e,n,L_,null,null,t),Vi._currentValue=l),Qs(e,n),Cn(e,n,r,t),n.child;case 6:return e===null&&Le&&((e=t=Je)&&(t=xg(t,n.pendingProps,Tt),t!==null?(n.stateNode=t,Dn=n,Je=null,e=!0):e=!1),e||qr(n)),null;case 13:return bm(e,n,t);case 4:return Be(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Gl(n,null,r,t):Cn(e,n,r,t),n.child;case 11:return cm(e,n,n.type,n.pendingProps,t);case 7:return Cn(e,n,n.pendingProps,t),n.child;case 8:return Cn(e,n,n.pendingProps.children,t),n.child;case 12:return Cn(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,Pr(n,n.type,r.value),Cn(e,n,r.children,t),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,zl(n),l=On(l),r=r(l),n.flags|=1,Cn(e,n,r,t),n.child;case 14:return um(e,n,n.type,n.pendingProps,t);case 15:return fm(e,n,n.type,n.pendingProps,t);case 19:return vm(e,n,t);case 31:return I_(e,n,t);case 22:return dm(e,n,t,n.pendingProps);case 24:return zl(n),r=On(pn),e===null?(l=Ac(),l===null&&(l=Qe,s=Tc(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=t),l=s),n.memoizedState={parent:r,cache:l},Oc(n),Pr(n,pn,l)):((e.lanes&t)!==0&&(Cc(e,n),vi(n,null,null,t),yi()),l=e.memoizedState,s=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Pr(n,pn,r)):(r=s.cache,Pr(n,pn,r),r!==l.cache&&Mc(n,[pn],t,!0))),Cn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(i(156,n.tag))}function vr(e){e.flags|=4}function hu(e,n,t,r,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Fm())e.flags|=8192;else throw Vl=Ls,Dc}else e.flags&=-16777217}function wm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zp(n))if(Fm())e.flags|=8192;else throw Vl=Ls,Dc}function Ws(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?$a():536870912,e.lanes|=n,Na|=n)}function Ni(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function P_(e,n,t){var r=n.pendingProps;switch(Ec(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_r(pn),je(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ma(n)?vr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kc())),en(n),null;case 26:var l=n.type,s=n.memoizedState;return e===null?(vr(n),s!==null?(en(n),wm(n,s)):(en(n),hu(n,l,null,r,t))):s?s!==e.memoizedState?(vr(n),en(n),wm(n,s)):(en(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&vr(n),en(n),hu(n,l,e,r,t)),null;case 27:if(Pt(n),t=Z.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(!r){if(n.stateNode===null)throw Error(i(166));return en(n),null}e=T.current,ma(n)?nd(n):(e=Tp(l,r,t),n.stateNode=e,vr(n))}return en(n),null;case 5:if(Pt(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(!r){if(n.stateNode===null)throw Error(i(166));return en(n),null}if(s=T.current,ma(n))nd(n);else{var p=po(Z.current);switch(s){case 1:s=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=p.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?s.multiple=!0:r.size&&(s.size=r.size);break;default:s=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}s[cn]=n,s[un]=r;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)s.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=s;e:switch(Ln(s,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&vr(n)}}return en(n),hu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(i(166));if(e=Z.current,ma(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,l=Dn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[cn]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||bp(e.nodeValue,t)),e||qr(n,!0)}else e=po(e).createTextNode(r),e[cn]=n,n.stateNode=e}return en(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=ma(n),t!==null){if(e===null){if(!r)throw Error(i(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[cn]=n}else Ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),e=!1}else t=kc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(mt(n),n):(mt(n),null);if((n.flags&128)!==0)throw Error(i(558))}return en(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ma(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(i(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(i(317));l[cn]=n}else Ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),l=!1}else l=kc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(mt(n),n):(mt(n),null)}return mt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==l&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Ws(n,n.updateQueue),en(n),null);case 4:return je(),e===null&&zu(n.stateNode.containerInfo),en(n),null;case 10:return _r(n.type),en(n),null;case 19:if(U(fn),r=n.memoizedState,r===null)return en(n),null;if(l=(n.flags&128)!==0,s=r.rendering,s===null)if(l)Ni(r,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=Hs(e),s!==null){for(n.flags|=128,Ni(r,!1),e=s.updateQueue,n.updateQueue=e,Ws(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Qf(t,e),t=t.sibling;return ee(fn,fn.current&1|2),Le&&pr(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&yn()>ro&&(n.flags|=128,l=!0,Ni(r,!1),n.lanes=4194304)}else{if(!l)if(e=Hs(s),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Ws(n,e),Ni(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Le)return en(n),null}else 2*yn()-r.renderingStartTime>ro&&t!==536870912&&(n.flags|=128,l=!0,Ni(r,!1),n.lanes=4194304);r.isBackwards?(s.sibling=n.child,n.child=s):(e=r.last,e!==null?e.sibling=s:n.child=s,r.last=s)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=yn(),e.sibling=null,t=fn.current,ee(fn,l?t&1|2:t&1),Le&&pr(n,r.treeForkCount),e):(en(n),null);case 22:case 23:return mt(n),Uc(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),t=n.updateQueue,t!==null&&Ws(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&U(Ul),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),_r(pn),en(n),null;case 25:return null;case 30:return null}throw Error(i(156,n.tag))}function $_(e,n){switch(Ec(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _r(pn),je(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Pt(n),null;case 31:if(n.memoizedState!==null){if(mt(n),n.alternate===null)throw Error(i(340));Ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(mt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(fn),null;case 4:return je(),null;case 10:return _r(n.type),null;case 22:case 23:return mt(n),Uc(),e!==null&&U(Ul),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _r(pn),null;case 25:return null;default:return null}}function Em(e,n){switch(Ec(n),n.tag){case 3:_r(pn),je();break;case 26:case 27:case 5:Pt(n);break;case 4:je();break;case 31:n.memoizedState!==null&&mt(n);break;case 13:mt(n);break;case 19:U(fn);break;case 10:_r(n.type);break;case 22:case 23:mt(n),Uc(),e!==null&&U(Ul);break;case 24:_r(pn)}}function Ri(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&e)===e){r=void 0;var s=t.create,p=t.inst;r=s(),p.destroy=r}t=t.next}while(t!==l)}}catch(g){Pe(n,n.return,g)}}function Zr(e,n,t){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var s=l.next;r=s;do{if((r.tag&e)===e){var p=r.inst,g=p.destroy;if(g!==void 0){p.destroy=void 0,l=n;var E=t,A=g;try{A()}catch(V){Pe(l,E,V)}}}r=r.next}while(r!==s)}}catch(V){Pe(n,n.return,V)}}function Sm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{pd(n,t)}catch(r){Pe(e,e.return,r)}}}function km(e,n,t){t.props=Il(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){Pe(e,n,r)}}function Mi(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(l){Pe(e,n,l)}}function nr(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){Pe(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Pe(e,n,l)}else t.current=null}function Nm(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){Pe(e,e.return,l)}}function _u(e,n,t){try{var r=e.stateNode;pg(r,e.type,t,n),r[un]=n}catch(l){Pe(e,e.return,l)}}function Rm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ll(e.type)||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=tn));else if(r!==4&&(r===27&&ll(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(bu(e,n,t),e=e.sibling;e!==null;)bu(e,n,t),e=e.sibling}function Js(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&ll(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Js(e,n,t),e=e.sibling;e!==null;)Js(e,n,t),e=e.sibling}function Mm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Ln(n,r,t),n[cn]=e,n[un]=t}catch(s){Pe(e,e.return,s)}}var xr=!1,gn=!1,yu=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function X_(e,n){if(e=e.containerInfo,Vu=xo,e=ui(e),dc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var p=0,g=-1,E=-1,A=0,V=0,P=e,O=null;n:for(;;){for(var z;P!==t||l!==0&&P.nodeType!==3||(g=p+l),P!==s||r!==0&&P.nodeType!==3||(E=p+r),P.nodeType===3&&(p+=P.nodeValue.length),(z=P.firstChild)!==null;)O=P,P=z;for(;;){if(P===e)break n;if(O===t&&++A===l&&(g=p),O===s&&++V===r&&(E=p),(z=P.nextSibling)!==null)break;P=O,O=P.parentNode}P=z}t=g===-1||E===-1?null:{start:g,end:E}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gu={focusedElem:e,selectionRange:t},xo=!1,Nn=n;Nn!==null;)if(n=Nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Nn=e;else for(;Nn!==null;){switch(n=Nn,s=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=n,l=s.memoizedProps,s=s.memoizedState,r=t.stateNode;try{var ue=Il(t.type,l);e=r.getSnapshotBeforeUpdate(ue,s),r.__reactInternalSnapshotBeforeUpdate=e}catch(ge){Pe(t,t.return,ge)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)qu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=n.sibling,e!==null){e.return=n.return,Nn=e;break}Nn=n.return}}function jm(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Er(e,t),r&4&&Ri(5,t);break;case 1:if(Er(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(p){Pe(t,t.return,p)}else{var l=Il(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Pe(t,t.return,p)}}r&64&&Sm(t),r&512&&Mi(t,t.return);break;case 3:if(Er(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{pd(e,n)}catch(p){Pe(t,t.return,p)}}break;case 27:n===null&&r&4&&Mm(t);case 26:case 5:Er(e,t),n===null&&r&4&&Nm(t),r&512&&Mi(t,t.return);break;case 12:Er(e,t);break;case 31:Er(e,t),r&4&&Om(e,t);break;case 13:Er(e,t),r&4&&Cm(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=tg.bind(null,t),wg(e,t))));break;case 22:if(r=t.memoizedState!==null||xr,!r){n=n!==null&&n.memoizedState!==null||gn,l=xr;var s=gn;xr=r,(gn=n)&&!s?Sr(e,t,(t.subtreeFlags&8772)!==0):Er(e,t),xr=l,gn=s}break;case 30:break;default:Er(e,t)}}function Am(e){var n=e.alternate;n!==null&&(e.alternate=null,Am(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,Jn=!1;function wr(e,n,t){for(t=t.child;t!==null;)Dm(e,n,t),t=t.sibling}function Dm(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(hl,t)}catch{}switch(t.tag){case 26:gn||nr(t,n),wr(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:gn||nr(t,n);var r=ln,l=Jn;ll(t.type)&&(ln=t.stateNode,Jn=!1),wr(e,n,t),zi(t.stateNode),ln=r,Jn=l;break;case 5:gn||nr(t,n);case 6:if(r=ln,l=Jn,ln=null,wr(e,n,t),ln=r,Jn=l,ln!==null)if(Jn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(t.stateNode)}catch(s){Pe(t,n,s)}else try{ln.removeChild(t.stateNode)}catch(s){Pe(t,n,s)}break;case 18:ln!==null&&(Jn?(e=ln,Sp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ca(e)):Sp(ln,t.stateNode));break;case 4:r=ln,l=Jn,ln=t.stateNode.containerInfo,Jn=!0,wr(e,n,t),ln=r,Jn=l;break;case 0:case 11:case 14:case 15:Zr(2,t,n),gn||Zr(4,t,n),wr(e,n,t);break;case 1:gn||(nr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&km(t,n,r)),wr(e,n,t);break;case 21:wr(e,n,t);break;case 22:gn=(r=gn)||t.memoizedState!==null,wr(e,n,t),gn=r;break;default:wr(e,n,t)}}function Om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ca(e)}catch(t){Pe(n,n.return,t)}}}function Cm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ca(e)}catch(t){Pe(n,n.return,t)}}function F_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Tm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Tm),n;default:throw Error(i(435,e.tag))}}function eo(e,n){var t=F_(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var l=rg.bind(null,e,r);r.then(l,l)}})}function et(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r],s=e,p=n,g=p;e:for(;g!==null;){switch(g.tag){case 27:if(ll(g.type)){ln=g.stateNode,Jn=!1;break e}break;case 5:ln=g.stateNode,Jn=!1;break e;case 3:case 4:ln=g.stateNode.containerInfo,Jn=!0;break e}g=g.return}if(ln===null)throw Error(i(160));Dm(s,p,l),ln=null,Jn=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lm(n,e),n=n.sibling}var It=null;function Lm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(n,e),nt(e),r&4&&(Zr(3,e,e.return),Ri(3,e),Zr(5,e,e.return));break;case 1:et(n,e),nt(e),r&512&&(gn||t===null||nr(t,t.return)),r&64&&xr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var l=It;if(et(n,e),nt(e),r&512&&(gn||t===null||nr(t,t.return)),r&4){var s=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Ht]||s[cn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(r),l.head.insertBefore(s,l.querySelector("head > title"))),Ln(s,r,t),s[cn]=e,Ze(s),r=s;break e;case"link":var p=Lp("link","href",l).get(r+(t.href||""));if(p){for(var g=0;g<p.length;g++)if(s=p[g],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){p.splice(g,1);break n}}s=l.createElement(r),Ln(s,r,t),l.head.appendChild(s);break;case"meta":if(p=Lp("meta","content",l).get(r+(t.content||""))){for(g=0;g<p.length;g++)if(s=p[g],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){p.splice(g,1);break n}}s=l.createElement(r),Ln(s,r,t),l.head.appendChild(s);break;default:throw Error(i(468,r))}s[cn]=e,Ze(s),r=s}e.stateNode=r}else Bp(l,e.type,e.stateNode);else e.stateNode=Cp(l,r,e.memoizedProps);else s!==r?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,r===null?Bp(l,e.type,e.stateNode):Cp(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&_u(e,e.memoizedProps,t.memoizedProps)}break;case 27:et(n,e),nt(e),r&512&&(gn||t===null||nr(t,t.return)),t!==null&&r&4&&_u(e,e.memoizedProps,t.memoizedProps);break;case 5:if(et(n,e),nt(e),r&512&&(gn||t===null||nr(t,t.return)),e.flags&32){l=e.stateNode;try{nn(l,"")}catch(ue){Pe(e,e.return,ue)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,_u(e,l,t!==null?t.memoizedProps:l)),r&1024&&(yu=!0);break;case 6:if(et(n,e),nt(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(ue){Pe(e,e.return,ue)}}break;case 3:if(go=null,l=It,It=ho(n.containerInfo),et(n,e),It=l,nt(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ca(n.containerInfo)}catch(ue){Pe(e,e.return,ue)}yu&&(yu=!1,Bm(e));break;case 4:r=It,It=ho(e.stateNode.containerInfo),et(n,e),nt(e),It=r;break;case 12:et(n,e),nt(e);break;case 31:et(n,e),nt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,eo(e,r)));break;case 13:et(n,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(to=yn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,eo(e,r)));break;case 22:l=e.memoizedState!==null;var E=t!==null&&t.memoizedState!==null,A=xr,V=gn;if(xr=A||l,gn=V||E,et(n,e),gn=V,xr=A,nt(e),r&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||E||xr||gn||ql(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){E=t=n;try{if(s=E.stateNode,l)p=s.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{g=E.stateNode;var P=E.memoizedProps.style,O=P!=null&&P.hasOwnProperty("display")?P.display:null;g.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ue){Pe(E,E.return,ue)}}}else if(n.tag===6){if(t===null){E=n;try{E.stateNode.nodeValue=l?"":E.memoizedProps}catch(ue){Pe(E,E.return,ue)}}}else if(n.tag===18){if(t===null){E=n;try{var z=E.stateNode;l?kp(z,!0):kp(E.stateNode,!1)}catch(ue){Pe(E,E.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,eo(e,t))));break;case 19:et(n,e),nt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,eo(e,r)));break;case 30:break;case 21:break;default:et(n,e),nt(e)}}function nt(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(Rm(r)){t=r;break}r=r.return}if(t==null)throw Error(i(160));switch(t.tag){case 27:var l=t.stateNode,s=gu(e);Js(e,s,l);break;case 5:var p=t.stateNode;t.flags&32&&(nn(p,""),t.flags&=-33);var g=gu(e);Js(e,g,p);break;case 3:case 4:var E=t.stateNode.containerInfo,A=gu(e);bu(e,A,E);break;default:throw Error(i(161))}}catch(V){Pe(e,e.return,V)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Er(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(e,n.alternate,n),n=n.sibling}function ql(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Zr(4,n,n.return),ql(n);break;case 1:nr(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&km(n,n.return,t),ql(n);break;case 27:zi(n.stateNode);case 26:case 5:nr(n,n.return),ql(n);break;case 22:n.memoizedState===null&&ql(n);break;case 30:ql(n);break;default:ql(n)}e=e.sibling}}function Sr(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=e,s=n,p=s.flags;switch(s.tag){case 0:case 11:case 15:Sr(l,s,t),Ri(4,s);break;case 1:if(Sr(l,s,t),r=s,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Pe(r,r.return,A)}if(r=s,l=r.updateQueue,l!==null){var g=r.stateNode;try{var E=l.shared.hiddenCallbacks;if(E!==null)for(l.shared.hiddenCallbacks=null,l=0;l<E.length;l++)md(E[l],g)}catch(A){Pe(r,r.return,A)}}t&&p&64&&Sm(s),Mi(s,s.return);break;case 27:Mm(s);case 26:case 5:Sr(l,s,t),t&&r===null&&p&4&&Nm(s),Mi(s,s.return);break;case 12:Sr(l,s,t);break;case 31:Sr(l,s,t),t&&p&4&&Om(l,s);break;case 13:Sr(l,s,t),t&&p&4&&Cm(l,s);break;case 22:s.memoizedState===null&&Sr(l,s,t),Mi(s,s.return);break;case 30:break;default:Sr(l,s,t)}n=n.sibling}}function vu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&pi(t))}function xu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pi(e))}function qt(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zm(e,n,t,r),n=n.sibling}function zm(e,n,t,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:qt(e,n,t,r),l&2048&&Ri(9,n);break;case 1:qt(e,n,t,r);break;case 3:qt(e,n,t,r),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pi(e)));break;case 12:if(l&2048){qt(e,n,t,r),e=n.stateNode;try{var s=n.memoizedProps,p=s.id,g=s.onPostCommit;typeof g=="function"&&g(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Pe(n,n.return,E)}}else qt(e,n,t,r);break;case 31:qt(e,n,t,r);break;case 13:qt(e,n,t,r);break;case 23:break;case 22:s=n.stateNode,p=n.alternate,n.memoizedState!==null?s._visibility&2?qt(e,n,t,r):Ti(e,n):s._visibility&2?qt(e,n,t,r):(s._visibility|=2,Ea(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&vu(p,n);break;case 24:qt(e,n,t,r),l&2048&&xu(n.alternate,n);break;default:qt(e,n,t,r)}}function Ea(e,n,t,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var s=e,p=n,g=t,E=r,A=p.flags;switch(p.tag){case 0:case 11:case 15:Ea(s,p,g,E,l),Ri(8,p);break;case 23:break;case 22:var V=p.stateNode;p.memoizedState!==null?V._visibility&2?Ea(s,p,g,E,l):Ti(s,p):(V._visibility|=2,Ea(s,p,g,E,l)),l&&A&2048&&vu(p.alternate,p);break;case 24:Ea(s,p,g,E,l),l&&A&2048&&xu(p.alternate,p);break;default:Ea(s,p,g,E,l)}n=n.sibling}}function Ti(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,l=r.flags;switch(r.tag){case 22:Ti(t,r),l&2048&&vu(r.alternate,r);break;case 24:Ti(t,r),l&2048&&xu(r.alternate,r);break;default:Ti(t,r)}n=n.sibling}}var ji=8192;function Sa(e,n,t){if(e.subtreeFlags&ji)for(e=e.child;e!==null;)Um(e,n,t),e=e.sibling}function Um(e,n,t){switch(e.tag){case 26:Sa(e,n,t),e.flags&ji&&e.memoizedState!==null&&Cg(t,It,e.memoizedState,e.memoizedProps);break;case 5:Sa(e,n,t);break;case 3:case 4:var r=It;It=ho(e.stateNode.containerInfo),Sa(e,n,t),It=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ji,ji=16777216,Sa(e,n,t),ji=r):Sa(e,n,t));break;default:Sa(e,n,t)}}function Hm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ai(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Nn=r,Gm(r,e)}Hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 0:case 11:case 15:Ai(e),e.flags&2048&&Zr(9,e,e.return);break;case 3:Ai(e);break;case 12:Ai(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,no(e)):Ai(e);break;default:Ai(e)}}function no(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Nn=r,Gm(r,e)}Hm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Zr(8,n,n.return),no(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,no(n));break;default:no(n)}e=e.sibling}}function Gm(e,n){for(;Nn!==null;){var t=Nn;switch(t.tag){case 0:case 11:case 15:Zr(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pi(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Nn=r;else e:for(t=e;Nn!==null;){r=Nn;var l=r.sibling,s=r.return;if(Am(r),r===t){Nn=null;break e}if(l!==null){l.return=s,Nn=l;break e}Nn=s}}}var K_={getCacheForType:function(e){var n=On(pn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return On(pn).controller.signal}},Q_=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Qe=null,Re=null,Ae=0,qe=0,pt=null,Wr=!1,ka=!1,wu=!1,kr=0,sn=0,Jr=0,Pl=0,Eu=0,ht=0,Na=0,Di=null,tt=null,Su=!1,to=0,Ym=0,ro=1/0,lo=null,el=null,wn=0,nl=null,Ra=null,Nr=0,ku=0,Nu=null,Im=null,Oi=0,Ru=null;function _t(){return(Ve&2)!==0&&Ae!==0?Ae&-Ae:B.T!==null?Ou():on()}function qm(){if(ht===0)if((Ae&536870912)===0||Le){var e=qn;qn<<=1,(qn&3932160)===0&&(qn=262144),ht=e}else ht=536870912;return e=dt.current,e!==null&&(e.flags|=32),ht}function rt(e,n,t){(e===Qe&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(Ma(e,0),tl(e,Ae,ht,!1)),_l(e,t),((Ve&2)===0||e!==Qe)&&(e===Qe&&((Ve&2)===0&&(Pl|=t),sn===4&&tl(e,Ae,ht,!1)),tr(e))}function Pm(e,n,t){if((Ve&6)!==0)throw Error(i(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Un(e,n),l=r?J_(e,n):Tu(e,n,!0),s=r;do{if(l===0){ka&&!r&&tl(e,n,0,!1);break}else{if(t=e.current.alternate,s&&!Z_(t)){l=Tu(e,n,!1),s=!1;continue}if(l===2){if(s=n,e.errorRecoveryDisabledLanes&s)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var g=e;l=Di;var E=g.current.memoizedState.isDehydrated;if(E&&(Ma(g,p).flags|=256),p=Tu(g,p,!1),p!==2){if(wu&&!E){g.errorRecoveryDisabledLanes|=s,Pl|=s,l=4;break e}s=tt,tt=l,s!==null&&(tt===null?tt=s:tt.push.apply(tt,s))}l=p}if(s=!1,l!==2)continue}}if(l===1){Ma(e,0),tl(e,n,0,!0);break}e:{switch(r=e,s=l,s){case 0:case 1:throw Error(i(345));case 4:if((n&4194048)!==n)break;case 6:tl(r,n,ht,!Wr);break e;case 2:tt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((n&62914560)===n&&(l=to+300-yn(),10<l)){if(tl(r,n,ht,!Wr),mn(r,0,!0)!==0)break e;Nr=n,r.timeoutHandle=wp($m.bind(null,r,t,tt,lo,Su,n,ht,Pl,Na,Wr,s,"Throttled",-0,0),l);break e}$m(r,t,tt,lo,Su,n,ht,Pl,Na,Wr,s,null,-0,0)}}break}while(!0);tr(e)}function $m(e,n,t,r,l,s,p,g,E,A,V,P,O,z){if(e.timeoutHandle=-1,P=n.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},Um(n,s,P);var ue=(s&62914560)===s?to-yn():(s&4194048)===s?Ym-yn():0;if(ue=Lg(P,ue),ue!==null){Nr=s,e.cancelPendingCommit=ue(ep.bind(null,e,n,s,t,r,l,p,g,E,V,P,null,O,z)),tl(e,s,p,!A);return}}ep(e,n,s,t,r,l,p,g,E)}function Z_(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],s=l.getSnapshot;l=l.value;try{if(!An(s(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tl(e,n,t,r){n&=~Eu,n&=~Pl,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var s=31-Rn(l),p=1<<s;r[s]=-1,l&=~p}t!==0&&ls(e,t,n)}function ao(){return(Ve&6)===0?(Ci(0),!1):!0}function Mu(){if(Re!==null){if(qe===0)var e=Re.return;else e=Re,hr=Bl=null,qc(e),ba=null,_i=0,e=Re;for(;e!==null;)Em(e.alternate,e),e=e.return;Re=null}}function Ma(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,gg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Nr=0,Mu(),Qe=e,Re=t=mr(e.current,null),Ae=n,qe=0,pt=null,Wr=!1,ka=Un(e,n),wu=!1,Na=ht=Eu=Pl=Jr=sn=0,tt=Di=null,Su=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var l=31-Rn(r),s=1<<l;n|=e[l],r&=~s}return kr=n,Ns(),t}function Xm(e,n){ke=null,B.H=Si,n===ga||n===Cs?(n=cd(),qe=3):n===Dc?(n=cd(),qe=4):qe=n===iu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pt=n,Re===null&&(sn=1,Fs(e,Nt(n,e.current)))}function Fm(){var e=dt.current;return e===null?!0:(Ae&4194048)===Ae?jt===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===jt:!1}function Km(){var e=B.H;return B.H=Si,e===null?Si:e}function Qm(){var e=B.A;return B.A=K_,e}function io(){sn=4,Wr||(Ae&4194048)!==Ae&&dt.current!==null||(ka=!0),(Jr&134217727)===0&&(Pl&134217727)===0||Qe===null||tl(Qe,Ae,ht,!1)}function Tu(e,n,t){var r=Ve;Ve|=2;var l=Km(),s=Qm();(Qe!==e||Ae!==n)&&(lo=null,Ma(e,n)),n=!1;var p=sn;e:do try{if(qe!==0&&Re!==null){var g=Re,E=pt;switch(qe){case 8:Mu(),p=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(n=!0);var A=qe;if(qe=0,pt=null,Ta(e,g,E,A),t&&ka){p=0;break e}break;default:A=qe,qe=0,pt=null,Ta(e,g,E,A)}}W_(),p=sn;break}catch(V){Xm(e,V)}while(!0);return n&&e.shellSuspendCounter++,hr=Bl=null,Ve=r,B.H=l,B.A=s,Re===null&&(Qe=null,Ae=0,Ns()),p}function W_(){for(;Re!==null;)Zm(Re)}function J_(e,n){var t=Ve;Ve|=2;var r=Km(),l=Qm();Qe!==e||Ae!==n?(lo=null,ro=yn()+500,Ma(e,n)):ka=Un(e,n);e:do try{if(qe!==0&&Re!==null){n=Re;var s=pt;n:switch(qe){case 1:qe=0,pt=null,Ta(e,n,s,1);break;case 2:case 9:if(sd(s)){qe=0,pt=null,Wm(n);break}n=function(){qe!==2&&qe!==9||Qe!==e||(qe=7),tr(e)},s.then(n,n);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:sd(s)?(qe=0,pt=null,Wm(n)):(qe=0,pt=null,Ta(e,n,s,7));break;case 5:var p=null;switch(Re.tag){case 26:p=Re.memoizedState;case 5:case 27:var g=Re;if(p?zp(p):g.stateNode.complete){qe=0,pt=null;var E=g.sibling;if(E!==null)Re=E;else{var A=g.return;A!==null?(Re=A,so(A)):Re=null}break n}}qe=0,pt=null,Ta(e,n,s,5);break;case 6:qe=0,pt=null,Ta(e,n,s,6);break;case 8:Mu(),sn=6;break e;default:throw Error(i(462))}}eg();break}catch(V){Xm(e,V)}while(!0);return hr=Bl=null,B.H=r,B.A=l,Ve=t,Re!==null?0:(Qe=null,Ae=0,Ns(),sn)}function eg(){for(;Re!==null&&!Ql();)Zm(Re)}function Zm(e){var n=xm(e.alternate,e,kr);e.memoizedProps=e.pendingProps,n===null?so(e):Re=n}function Wm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=hm(t,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=hm(t,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:qc(n);default:Em(t,n),n=Re=Qf(n,kr),n=xm(t,n,kr)}e.memoizedProps=e.pendingProps,n===null?so(e):Re=n}function Ta(e,n,t,r){hr=Bl=null,qc(n),ba=null,_i=0;var l=n.return;try{if(Y_(e,l,n,t,Ae)){sn=1,Fs(e,Nt(t,e.current)),Re=null;return}}catch(s){if(l!==null)throw Re=l,s;sn=1,Fs(e,Nt(t,e.current)),Re=null;return}n.flags&32768?(Le||r===1?e=!0:ka||(Ae&536870912)!==0?e=!1:(Wr=e=!0,(r===2||r===9||r===3||r===6)&&(r=dt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Jm(n,e)):so(n)}function so(e){var n=e;do{if((n.flags&32768)!==0){Jm(n,Wr);return}e=n.return;var t=P_(n.alternate,n,kr);if(t!==null){Re=t;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);sn===0&&(sn=5)}function Jm(e,n){do{var t=$_(e.alternate,e);if(t!==null){t.flags&=32767,Re=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=t}while(e!==null);sn=6,Re=null}function ep(e,n,t,r,l,s,p,g,E){e.cancelPendingCommit=null;do oo();while(wn!==0);if((Ve&6)!==0)throw Error(i(327));if(n!==null){if(n===e.current)throw Error(i(177));if(s=n.lanes|n.childLanes,s|=gc,lr(e,t,s,p,g,E),e===Qe&&(Re=Qe=null,Ae=0),Ra=n,nl=e,Nr=t,ku=s,Nu=l,Im=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lg(pl,function(){return ap(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,l=Q.p,Q.p=2,p=Ve,Ve|=4;try{X_(e,n,t)}finally{Ve=p,Q.p=l,B.T=r}}wn=1,np(),tp(),rp()}}function np(){if(wn===1){wn=0;var e=nl,n=Ra,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=B.T,B.T=null;var r=Q.p;Q.p=2;var l=Ve;Ve|=4;try{Lm(n,e);var s=Gu,p=ui(e.containerInfo),g=s.focusedElem,E=s.selectionRange;if(p!==g&&g&&g.ownerDocument&&Ss(g.ownerDocument.documentElement,g)){if(E!==null&&dc(g)){var A=E.start,V=E.end;if(V===void 0&&(V=A),"selectionStart"in g)g.selectionStart=A,g.selectionEnd=Math.min(V,g.value.length);else{var P=g.ownerDocument||document,O=P&&P.defaultView||window;if(O.getSelection){var z=O.getSelection(),ue=g.textContent.length,ge=Math.min(E.start,ue),Fe=E.end===void 0?ge:Math.min(E.end,ue);!z.extend&&ge>Fe&&(p=Fe,Fe=ge,ge=p);var M=Gr(g,ge),N=Gr(g,Fe);if(M&&N&&(z.rangeCount!==1||z.anchorNode!==M.node||z.anchorOffset!==M.offset||z.focusNode!==N.node||z.focusOffset!==N.offset)){var j=P.createRange();j.setStart(M.node,M.offset),z.removeAllRanges(),ge>Fe?(z.addRange(j),z.extend(N.node,N.offset)):(j.setEnd(N.node,N.offset),z.addRange(j))}}}}for(P=[],z=g;z=z.parentNode;)z.nodeType===1&&P.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<P.length;g++){var Y=P[g];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}xo=!!Vu,Gu=Vu=null}finally{Ve=l,Q.p=r,B.T=t}}e.current=n,wn=2}}function tp(){if(wn===2){wn=0;var e=nl,n=Ra,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=B.T,B.T=null;var r=Q.p;Q.p=2;var l=Ve;Ve|=4;try{jm(e,n.alternate,n)}finally{Ve=l,Q.p=r,B.T=t}}wn=3}}function rp(){if(wn===4||wn===3){wn=0,Dr();var e=nl,n=Ra,t=Nr,r=Im;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,Ra=nl=null,lp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(el=null),xt(t),n=n.stateNode,vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(hl,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,l=Q.p,Q.p=2,B.T=null;try{for(var s=e.onRecoverableError,p=0;p<r.length;p++){var g=r[p];s(g.value,{componentStack:g.stack})}}finally{B.T=n,Q.p=l}}(Nr&3)!==0&&oo(),tr(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Ru?Oi++:(Oi=0,Ru=e):Oi=0,Ci(0)}}function lp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,pi(n)))}function oo(){return np(),tp(),rp(),ap()}function ap(){if(wn!==5)return!1;var e=nl,n=ku;ku=0;var t=xt(Nr),r=B.T,l=Q.p;try{Q.p=32>t?32:t,B.T=null,t=Nu,Nu=null;var s=nl,p=Nr;if(wn=0,Ra=nl=null,Nr=0,(Ve&6)!==0)throw Error(i(331));var g=Ve;if(Ve|=4,Vm(s.current),zm(s,s.current,p,t),Ve=g,Ci(0,!1),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(hl,s)}catch{}return!0}finally{Q.p=l,B.T=r,lp(e,n)}}function ip(e,n,t){n=Nt(t,n),n=au(e.stateNode,n,2),e=Fr(e,n,2),e!==null&&(_l(e,2),tr(e))}function Pe(e,n,t){if(e.tag===3)ip(e,e,t);else for(;n!==null;){if(n.tag===3){ip(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(el===null||!el.has(r))){e=Nt(t,e),t=sm(2),r=Fr(n,t,2),r!==null&&(om(t,r,n,e),_l(r,2),tr(r));break}}n=n.return}}function ju(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Q_;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(wu=!0,l.add(t),e=ng.bind(null,e,n,t),n.then(e,e))}function ng(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Qe===e&&(Ae&t)===t&&(sn===4||sn===3&&(Ae&62914560)===Ae&&300>yn()-to?(Ve&2)===0&&Ma(e,0):Eu|=t,Na===Ae&&(Na=0)),tr(e)}function sp(e,n){n===0&&(n=$a()),e=Ol(e,n),e!==null&&(_l(e,n),tr(e))}function tg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),sp(e,t)}function rg(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(n),sp(e,t)}function lg(e,n){return Ar(e,n)}var co=null,ja=null,Au=!1,uo=!1,Du=!1,rl=0;function tr(e){e!==ja&&e.next===null&&(ja===null?co=ja=e:ja=ja.next=e),uo=!0,Au||(Au=!0,ig())}function Ci(e,n){if(!Du&&uo){Du=!0;do for(var t=!1,r=co;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var s=0;else{var p=r.suspendedLanes,g=r.pingedLanes;s=(1<<31-Rn(42|e)+1)-1,s&=l&~(p&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,fp(r,s))}else s=Ae,s=mn(r,r===Qe?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(s&3)===0||Un(r,s)||(t=!0,fp(r,s));r=r.next}while(t);Du=!1}}function ag(){op()}function op(){uo=Au=!1;var e=0;rl!==0&&_g()&&(e=rl);for(var n=yn(),t=null,r=co;r!==null;){var l=r.next,s=cp(r,n);s===0?(r.next=null,t===null?co=l:t.next=l,l===null&&(ja=t)):(t=r,(e!==0||(s&3)!==0)&&(uo=!0)),r=l}wn!==0&&wn!==5||Ci(e),rl!==0&&(rl=0)}function cp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var p=31-Rn(s),g=1<<p,E=l[p];E===-1?((g&t)===0||(g&r)!==0)&&(l[p]=Io(g,n)):E<=n&&(e.expiredLanes|=g),s&=~g}if(n=Qe,t=Ae,t=mn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&vt(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Un(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&vt(r),xt(t)){case 2:case 8:t=Pa;break;case 32:t=pl;break;case 268435456:t=lt;break;default:t=pl}return r=up.bind(null,e),t=Ar(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&vt(r),e.callbackPriority=2,e.callbackNode=null,2}function up(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(oo()&&e.callbackNode!==t)return null;var r=Ae;return r=mn(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pm(e,r,n),cp(e,yn()),e.callbackNode!=null&&e.callbackNode===t?up.bind(null,e):null)}function fp(e,n){if(oo())return null;Pm(e,n,!0)}function ig(){bg(function(){(Ve&6)!==0?Ar(ml,ag):op()})}function Ou(){if(rl===0){var e=ha;e===0&&(e=Xt,Xt<<=1,(Xt&261888)===0&&(Xt=256)),rl=e}return rl}function dp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zr(""+e)}function mp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function sg(e,n,t,r,l){if(n==="submit"&&t&&t.stateNode===l){var s=dp((l[un]||null).action),p=r.submitter;p&&(n=(n=p[un]||null)?dp(n.formAction):p.getAttribute("formAction"),n!==null&&(s=n,p=null));var g=new la("action","action",null,r,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rl!==0){var E=p?mp(l,p):new FormData(l);Jc(t,{pending:!0,data:E,method:l.method,action:s},null,E)}}else typeof s=="function"&&(g.preventDefault(),E=p?mp(l,p):new FormData(l),Jc(t,{pending:!0,data:E,method:l.method,action:s},s,E))},currentTarget:l}]})}}for(var Cu=0;Cu<_c.length;Cu++){var Lu=_c[Cu],og=Lu.toLowerCase(),cg=Lu[0].toUpperCase()+Lu.slice(1);Yt(og,"on"+cg)}Yt(qf,"onAnimationEnd"),Yt(Pf,"onAnimationIteration"),Yt($f,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(k_,"onTransitionRun"),Yt(N_,"onTransitionStart"),Yt(R_,"onTransitionCancel"),Yt(Xf,"onTransitionEnd"),ot("onMouseEnter",["mouseout","mouseover"]),ot("onMouseLeave",["mouseout","mouseover"]),ot("onPointerEnter",["pointerout","pointerover"]),ot("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Li));function pp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var p=r.length-1;0<=p;p--){var g=r[p],E=g.instance,A=g.currentTarget;if(g=g.listener,E!==s&&l.isPropagationStopped())break e;s=g,l.currentTarget=A;try{s(l)}catch(V){ks(V)}l.currentTarget=null,s=E}else for(p=0;p<r.length;p++){if(g=r[p],E=g.instance,A=g.currentTarget,g=g.listener,E!==s&&l.isPropagationStopped())break e;s=g,l.currentTarget=A;try{s(l)}catch(V){ks(V)}l.currentTarget=null,s=E}}}}function Me(e,n){var t=n[zt];t===void 0&&(t=n[zt]=new Set);var r=e+"__bubble";t.has(r)||(hp(n,e,2,!1),t.add(r))}function Bu(e,n,t){var r=0;n&&(r|=4),hp(t,e,r,n)}var fo="_reactListening"+Math.random().toString(36).slice(2);function zu(e){if(!e[fo]){e[fo]=!0,ir.forEach(function(t){t!=="selectionchange"&&(ug.has(t)||Bu(t,!1,e),Bu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fo]||(n[fo]=!0,Bu("selectionchange",!1,n))}}function hp(e,n,t,r){switch(qp(n)){case 2:var l=Ug;break;case 8:l=Hg;break;default:l=Wu}t=l.bind(null,n,t,e),l=void 0,!ei||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Uu(e,n,t,r,l){var s=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var g=r.stateNode.containerInfo;if(g===l)break;if(p===4)for(p=r.return;p!==null;){var E=p.tag;if((E===3||E===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;g!==null;){if(p=Kt(g),p===null)return;if(E=p.tag,E===5||E===6||E===26||E===27){r=s=p;continue e}g=g.parentNode}}r=r.return}vl(function(){var A=s,V=Ja(t),P=[];e:{var O=Ff.get(e);if(O!==void 0){var z=la,ue=e;switch(e){case"keypress":if(Wt(t)===0)break e;case"keydown":case"keyup":z=_s;break;case"focusin":ue="focus",z=li;break;case"focusout":ue="blur",z=li;break;case"beforeblur":case"afterblur":z=li;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=ri;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Po;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=lc;break;case qf:case Pf:case $f:z=Fo;break;case Xf:z=ac;break;case"scroll":case"scrollend":z=ms;break;case"wheel":z=sc;break;case"copy":case"cut":case"paste":z=Qo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=ii;break;case"toggle":case"beforetoggle":z=cc}var ge=(n&4)!==0,Fe=!ge&&(e==="scroll"||e==="scrollend"),M=ge?O!==null?O+"Capture":null:O;ge=[];for(var N=A,j;N!==null;){var Y=N;if(j=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||j===null||M===null||(Y=Qt(N,M),Y!=null&&ge.push(Bi(N,Y,j))),Fe)break;N=N.return}0<ge.length&&(O=new z(O,ue,null,t,V),P.push({event:O,listeners:ge}))}}if((n&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",O&&t!==sr&&(ue=t.relatedTarget||t.fromElement)&&(Kt(ue)||ue[Tn]))break e;if((z||O)&&(O=V.window===V?V:(O=V.ownerDocument)?O.defaultView||O.parentWindow:window,z?(ue=t.relatedTarget||t.toElement,z=A,ue=ue?Kt(ue):null,ue!==null&&(Fe=d(ue),ge=ue.tag,ue!==Fe||ge!==5&&ge!==27&&ge!==6)&&(ue=null)):(z=null,ue=A),z!==ue)){if(ge=ri,Y="onMouseLeave",M="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ge=ii,Y="onPointerLeave",M="onPointerEnter",N="pointer"),Fe=z==null?O:Gt(z),j=ue==null?O:Gt(ue),O=new ge(Y,N+"leave",z,t,V),O.target=Fe,O.relatedTarget=j,Y=null,Kt(V)===A&&(ge=new ge(M,N+"enter",ue,t,V),ge.target=j,ge.relatedTarget=Fe,Y=ge),Fe=Y,z&&ue)n:{for(ge=fg,M=z,N=ue,j=0,Y=M;Y;Y=ge(Y))j++;Y=0;for(var pe=N;pe;pe=ge(pe))Y++;for(;0<j-Y;)M=ge(M),j--;for(;0<Y-j;)N=ge(N),Y--;for(;j--;){if(M===N||N!==null&&M===N.alternate){ge=M;break n}M=ge(M),N=ge(N)}ge=null}else ge=null;z!==null&&_p(P,O,z,ge,!1),ue!==null&&Fe!==null&&_p(P,Fe,ue,ge,!0)}}e:{if(O=A?Gt(A):window,z=O.nodeName&&O.nodeName.toLowerCase(),z==="select"||z==="input"&&O.type==="file")var Ue=de;else if(Es(O))if(Se)Ue=Vr;else{Ue=oi;var me=fr}else z=O.nodeName,!z||z.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?A&&Wa(A.elementType)&&(Ue=de):Ue=jl;if(Ue&&(Ue=Ue(e,A))){m(P,Ue,t,V);break e}me&&me(e,O,A),e==="focusout"&&A&&O.type==="number"&&A.memoizedProps.value!=null&&Qa(O,"number",O.value)}switch(me=A?Gt(A):window,e){case"focusin":(Es(me)||me.contentEditable==="true")&&(sa=me,mc=A,fi=null);break;case"focusout":fi=mc=sa=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Yf(P,t,V);break;case"selectionchange":if(S_)break;case"keydown":case"keyup":Yf(P,t,V)}var Ne;if(Ml)e:{switch(e){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else cr?Hr(e,t)&&(De="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(De="onCompositionStart");De&&(ys&&t.locale!=="ko"&&(cr||De!=="onCompositionStart"?De==="onCompositionEnd"&&cr&&(Ne=ni()):(Zt=V,ut="value"in Zt?Zt.value:Zt.textContent,cr=!0)),me=mo(A,De),0<me.length&&(De=new hs(De,e,null,t,V),P.push({event:De,listeners:me}),Ne?De.data=Ne:(Ne=Tl(t),Ne!==null&&(De.data=Ne)))),(Ne=bs?si(e,t):ws(e,t))&&(De=mo(A,"onBeforeInput"),0<De.length&&(me=new hs("onBeforeInput","beforeinput",null,t,V),P.push({event:me,listeners:De}),me.data=Ne)),sg(P,e,A,t,V)}pp(P,n)})}function Bi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function mo(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Qt(e,t),l!=null&&r.unshift(Bi(e,l,s)),l=Qt(e,n),l!=null&&r.push(Bi(e,l,s))),e.tag===3)return r;e=e.return}return[]}function fg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _p(e,n,t,r,l){for(var s=n._reactName,p=[];t!==null&&t!==r;){var g=t,E=g.alternate,A=g.stateNode;if(g=g.tag,E!==null&&E===r)break;g!==5&&g!==26&&g!==27||A===null||(E=A,l?(A=Qt(t,s),A!=null&&p.unshift(Bi(t,A,E))):l||(A=Qt(t,s),A!=null&&p.push(Bi(t,A,E)))),t=t.return}p.length!==0&&e.push({event:n,listeners:p})}var dg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function gp(e){return(typeof e=="string"?e:""+e).replace(dg,`
`).replace(mg,"")}function bp(e,n){return n=gp(n),gp(e)===n}function Xe(e,n,t,r,l,s){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||nn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&nn(e,""+r);break;case"className":na(e,"class",r);break;case"tabIndex":na(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":na(e,t,r);break;case"style":yl(e,r,s);break;case"data":if(n!=="object"){na(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=zr(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(n!=="input"&&Xe(e,n,"name",l.name,l,null),Xe(e,n,"formEncType",l.formEncType,l,null),Xe(e,n,"formMethod",l.formMethod,l,null),Xe(e,n,"formTarget",l.formTarget,l,null)):(Xe(e,n,"encType",l.encType,l,null),Xe(e,n,"method",l.method,l,null),Xe(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=zr(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=tn);break;case"onScroll":r!=null&&Me("scroll",e);break;case"onScrollEnd":r!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(i(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(i(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=zr(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ea(e,"popover",r);break;case"xlinkActuate":$n(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":$n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":$n(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":$n(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":$n(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":$n(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":$n(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":$n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":$n(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ea(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Wn.get(t)||t,ea(e,t,r))}}function Hu(e,n,t,r,l,s){switch(t){case"style":yl(e,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(i(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(i(60));e.innerHTML=t}}break;case"children":typeof r=="string"?nn(e,r):(typeof r=="number"||typeof r=="bigint")&&nn(e,""+r);break;case"onScroll":r!=null&&Me("scroll",e);break;case"onScrollEnd":r!=null&&Me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fa.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),s=e[un]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(n,s,l),typeof r=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,l);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):ea(e,t,r)}}}function Ln(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var r=!1,l=!1,s;for(s in t)if(t.hasOwnProperty(s)){var p=t[s];if(p!=null)switch(s){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,n));default:Xe(e,n,s,p,t,null)}}l&&Xe(e,n,"srcSet",t.srcSet,t,null),r&&Xe(e,n,"src",t.src,t,null);return;case"input":Me("invalid",e);var g=s=p=l=null,E=null,A=null;for(r in t)if(t.hasOwnProperty(r)){var V=t[r];if(V!=null)switch(r){case"name":l=V;break;case"type":p=V;break;case"checked":E=V;break;case"defaultChecked":A=V;break;case"value":s=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(i(137,n));break;default:Xe(e,n,r,V,t,null)}}cs(e,s,g,E,A,p,l,!1);return;case"select":Me("invalid",e),r=p=s=null;for(l in t)if(t.hasOwnProperty(l)&&(g=t[l],g!=null))switch(l){case"value":s=g;break;case"defaultValue":p=g;break;case"multiple":r=g;default:Xe(e,n,l,g,t,null)}n=s,t=p,e.multiple=!!r,n!=null?wt(e,!!r,n,!1):t!=null&&wt(e,!!r,t,!0);return;case"textarea":Me("invalid",e),s=l=r=null;for(p in t)if(t.hasOwnProperty(p)&&(g=t[p],g!=null))switch(p){case"value":r=g;break;case"defaultValue":l=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(i(91));break;default:Xe(e,n,p,g,t,null)}bl(e,r,l,s);return;case"option":for(E in t)if(t.hasOwnProperty(E)&&(r=t[E],r!=null))switch(E){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,E,r,t,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(r=0;r<Li.length;r++)Me(Li[r],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in t)if(t.hasOwnProperty(A)&&(r=t[A],r!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,n));default:Xe(e,n,A,r,t,null)}return;default:if(Wa(n)){for(V in t)t.hasOwnProperty(V)&&(r=t[V],r!==void 0&&Hu(e,n,V,r,t,void 0));return}}for(g in t)t.hasOwnProperty(g)&&(r=t[g],r!=null&&Xe(e,n,g,r,t,null))}function pg(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,p=null,g=null,E=null,A=null,V=null;for(z in t){var P=t[z];if(t.hasOwnProperty(z)&&P!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":E=P;default:r.hasOwnProperty(z)||Xe(e,n,z,null,r,P)}}for(var O in r){var z=r[O];if(P=t[O],r.hasOwnProperty(O)&&(z!=null||P!=null))switch(O){case"type":s=z;break;case"name":l=z;break;case"checked":A=z;break;case"defaultChecked":V=z;break;case"value":p=z;break;case"defaultValue":g=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(i(137,n));break;default:z!==P&&Xe(e,n,O,z,r,P)}}q(e,p,g,E,A,V,s,l);return;case"select":z=p=g=O=null;for(s in t)if(E=t[s],t.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":z=E;default:r.hasOwnProperty(s)||Xe(e,n,s,null,r,E)}for(l in r)if(s=r[l],E=t[l],r.hasOwnProperty(l)&&(s!=null||E!=null))switch(l){case"value":O=s;break;case"defaultValue":g=s;break;case"multiple":p=s;default:s!==E&&Xe(e,n,l,s,r,E)}n=g,t=p,r=z,O!=null?wt(e,!!t,O,!1):!!r!=!!t&&(n!=null?wt(e,!!t,n,!0):wt(e,!!t,t?[]:"",!1));return;case"textarea":z=O=null;for(g in t)if(l=t[g],t.hasOwnProperty(g)&&l!=null&&!r.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Xe(e,n,g,null,r,l)}for(p in r)if(l=r[p],s=t[p],r.hasOwnProperty(p)&&(l!=null||s!=null))switch(p){case"value":O=l;break;case"defaultValue":z=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(i(91));break;default:l!==s&&Xe(e,n,p,l,r,s)}Za(e,O,z);return;case"option":for(var ue in t)if(O=t[ue],t.hasOwnProperty(ue)&&O!=null&&!r.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Xe(e,n,ue,null,r,O)}for(E in r)if(O=r[E],z=t[E],r.hasOwnProperty(E)&&O!==z&&(O!=null||z!=null))switch(E){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Xe(e,n,E,O,r,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in t)O=t[ge],t.hasOwnProperty(ge)&&O!=null&&!r.hasOwnProperty(ge)&&Xe(e,n,ge,null,r,O);for(A in r)if(O=r[A],z=t[A],r.hasOwnProperty(A)&&O!==z&&(O!=null||z!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(i(137,n));break;default:Xe(e,n,A,O,r,z)}return;default:if(Wa(n)){for(var Fe in t)O=t[Fe],t.hasOwnProperty(Fe)&&O!==void 0&&!r.hasOwnProperty(Fe)&&Hu(e,n,Fe,void 0,r,O);for(V in r)O=r[V],z=t[V],!r.hasOwnProperty(V)||O===z||O===void 0&&z===void 0||Hu(e,n,V,O,r,z);return}}for(var M in t)O=t[M],t.hasOwnProperty(M)&&O!=null&&!r.hasOwnProperty(M)&&Xe(e,n,M,null,r,O);for(P in r)O=r[P],z=t[P],!r.hasOwnProperty(P)||O===z||O==null&&z==null||Xe(e,n,P,O,r,z)}function yp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],s=l.transferSize,p=l.initiatorType,g=l.duration;if(s&&g&&yp(p)){for(p=0,g=l.responseEnd,r+=1;r<t.length;r++){var E=t[r],A=E.startTime;if(A>g)break;var V=E.transferSize,P=E.initiatorType;V&&yp(P)&&(E=E.responseEnd,p+=V*(E<g?1:(g-A)/(E-A)))}if(--r,n+=8*(s+p)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vu=null,Gu=null;function po(e){return e.nodeType===9?e:e.ownerDocument}function vp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Iu=null;function _g(){var e=window.event;return e&&e.type==="popstate"?e===Iu?!1:(Iu=e,!0):(Iu=null,!1)}var wp=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,Ep=typeof Promise=="function"?Promise:void 0,bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ep<"u"?function(e){return Ep.resolve(null).then(e).catch(yg)}:wp;function yg(e){setTimeout(function(){throw e})}function ll(e){return e==="head"}function Sp(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(l),Ca(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")zi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,zi(t);for(var s=t.firstChild;s;){var p=s.nextSibling,g=s.nodeName;s[Ht]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=p}}else t==="body"&&zi(e.ownerDocument.body);t=l}while(t);Ca(n)}function kp(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function qu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":qu(t),Vt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function vg(e,n,t,r){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ht])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function xg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function Np(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=At(e.nextSibling),e===null))return null;return e}function Pu(e){return e.data==="$?"||e.data==="$~"}function $u(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function At(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xu=null;function Rp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return At(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Mp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Tp(e,n,t){switch(n=po(t),e){case"html":if(e=n.documentElement,!e)throw Error(i(452));return e;case"head":if(e=n.head,!e)throw Error(i(453));return e;case"body":if(e=n.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function zi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e)}var Dt=new Map,jp=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rr=Q.d;Q.d={f:Eg,r:Sg,D:kg,C:Ng,L:Rg,m:Mg,X:jg,S:Tg,M:Ag};function Eg(){var e=Rr.f(),n=ao();return e||n}function Sg(e){var n=Pn(e);n!==null&&n.tag===5&&n.type==="form"?Xd(n):Rr.r(e)}var Aa=typeof document>"u"?null:document;function Ap(e,n,t){var r=Aa;if(r&&typeof n=="string"&&n){var l=Vn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),jp.has(l)||(jp.add(l),e={rel:e,crossOrigin:t,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Ln(n,"link",e),Ze(n),r.head.appendChild(n)))}}function kg(e){Rr.D(e),Ap("dns-prefetch",e,null)}function Ng(e,n){Rr.C(e,n),Ap("preconnect",e,n)}function Rg(e,n,t){Rr.L(e,n,t);var r=Aa;if(r&&e&&n){var l='link[rel="preload"][as="'+Vn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Vn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Vn(t.imageSizes)+'"]')):l+='[href="'+Vn(e)+'"]';var s=l;switch(n){case"style":s=Da(e);break;case"script":s=Oa(e)}Dt.has(s)||(e=k({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Dt.set(s,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Ui(s))||n==="script"&&r.querySelector(Hi(s))||(n=r.createElement("link"),Ln(n,"link",e),Ze(n),r.head.appendChild(n)))}}function Mg(e,n){Rr.m(e,n);var t=Aa;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Vn(r)+'"][href="'+Vn(e)+'"]',s=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Oa(e)}if(!Dt.has(s)&&(e=k({rel:"modulepreload",href:e},n),Dt.set(s,e),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Hi(s)))return}r=t.createElement("link"),Ln(r,"link",e),Ze(r),t.head.appendChild(r)}}}function Tg(e,n,t){Rr.S(e,n,t);var r=Aa;if(r&&e){var l=Zn(r).hoistableStyles,s=Da(e);n=n||"default";var p=l.get(s);if(!p){var g={loading:0,preload:null};if(p=r.querySelector(Ui(s)))g.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Dt.get(s))&&Fu(e,t);var E=p=r.createElement("link");Ze(E),Ln(E,"link",e),E._p=new Promise(function(A,V){E.onload=A,E.onerror=V}),E.addEventListener("load",function(){g.loading|=1}),E.addEventListener("error",function(){g.loading|=2}),g.loading|=4,_o(p,n,r)}p={type:"stylesheet",instance:p,count:1,state:g},l.set(s,p)}}}function jg(e,n){Rr.X(e,n);var t=Aa;if(t&&e){var r=Zn(t).hoistableScripts,l=Oa(e),s=r.get(l);s||(s=t.querySelector(Hi(l)),s||(e=k({src:e,async:!0},n),(n=Dt.get(l))&&Ku(e,n),s=t.createElement("script"),Ze(s),Ln(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(l,s))}}function Ag(e,n){Rr.M(e,n);var t=Aa;if(t&&e){var r=Zn(t).hoistableScripts,l=Oa(e),s=r.get(l);s||(s=t.querySelector(Hi(l)),s||(e=k({src:e,async:!0,type:"module"},n),(n=Dt.get(l))&&Ku(e,n),s=t.createElement("script"),Ze(s),Ln(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(l,s))}}function Dp(e,n,t,r){var l=(l=Z.current)?ho(l):null;if(!l)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Da(t.href),t=Zn(l).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Da(t.href);var s=Zn(l).hoistableStyles,p=s.get(e);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,p),(s=l.querySelector(Ui(e)))&&!s._p&&(p.instance=s,p.state.loading=5),Dt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Dt.set(e,t),s||Dg(l,e,t,p.state))),n&&r===null)throw Error(i(528,""));return p}if(n&&r!==null)throw Error(i(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Oa(t),t=Zn(l).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Da(e){return'href="'+Vn(e)+'"'}function Ui(e){return'link[rel="stylesheet"]['+e+"]"}function Op(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Dg(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Ln(n,"link",t),Ze(n),e.head.appendChild(n))}function Oa(e){return'[src="'+Vn(e)+'"]'}function Hi(e){return"script[async]"+e}function Cp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Vn(t.href)+'"]');if(r)return n.instance=r,Ze(r),r;var l=k({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ze(r),Ln(r,"style",l),_o(r,t.precedence,e),n.instance=r;case"stylesheet":l=Da(t.href);var s=e.querySelector(Ui(l));if(s)return n.state.loading|=4,n.instance=s,Ze(s),s;r=Op(t),(l=Dt.get(l))&&Fu(r,l),s=(e.ownerDocument||e).createElement("link"),Ze(s);var p=s;return p._p=new Promise(function(g,E){p.onload=g,p.onerror=E}),Ln(s,"link",r),n.state.loading|=4,_o(s,t.precedence,e),n.instance=s;case"script":return s=Oa(t.src),(l=e.querySelector(Hi(s)))?(n.instance=l,Ze(l),l):(r=t,(l=Dt.get(s))&&(r=k({},t),Ku(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Ln(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(i(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,_o(r,t.precedence,e));return n.instance}function _o(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,s=l,p=0;p<r.length;p++){var g=r[p];if(g.dataset.precedence===n)s=g;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Fu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ku(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var go=null;function Lp(e,n,t){if(go===null){var r=new Map,l=go=new Map;l.set(t,r)}else l=go,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var s=t[l];if(!(s[Ht]||s[cn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var p=s.getAttribute(n)||"";p=e+p;var g=r.get(p);g?g.push(s):r.set(p,[s])}}return r}function Bp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Og(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cg(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Da(r.href),s=n.querySelector(Ui(l));if(s){n=s._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bo.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=s,Ze(s);return}s=n.ownerDocument||n,r=Op(r),(l=Dt.get(l))&&Fu(r,l),s=s.createElement("link"),Ze(s);var p=s;p._p=new Promise(function(g,E){p.onload=g,p.onerror=E}),Ln(s,"link",r),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=bo.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Qu=0;function Lg(e,n){return e.stylesheets&&e.count===0&&vo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+n);0<e.imgBytes&&Qu===0&&(Qu=62500*hg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Qu?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function bo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yo=null;function vo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yo=new Map,n.forEach(Bg,e),yo=null,bo.call(e))}function Bg(e,n){if(!(n.state.loading&4)){var t=yo.get(e);if(t)var r=t.get(null);else{t=new Map,yo.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var p=l[s];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(t.set(p.dataset.precedence,p),r=p)}r&&t.set(null,r)}l=n.instance,p=l.getAttribute("data-precedence"),s=t.get(p)||r,s===r&&t.set(null,l),t.set(p,l),this.count++,r=bo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Vi={$$typeof:ae,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function zg(e,n,t,r,l,s,p,g,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ft(0),this.hiddenUpdates=Ft(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Up(e,n,t,r,l,s,p,g,E,A,V,P){return e=new zg(e,n,t,p,E,A,V,P,g),n=1,s===!0&&(n|=24),s=ft(3,null,null,n),e.current=s,s.stateNode=e,n=Tc(),n.refCount++,e.pooledCache=n,n.refCount++,s.memoizedState={element:r,isDehydrated:t,cache:n},Oc(s),e}function Hp(e){return e?(e=ua,e):ua}function Vp(e,n,t,r,l,s){l=Hp(l),r.context===null?r.context=l:r.pendingContext=l,r=Xr(n),r.payload={element:t},s=s===void 0?null:s,s!==null&&(r.callback=s),t=Fr(e,r,n),t!==null&&(rt(t,e,n),bi(t,e,n))}function Gp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Zu(e,n){Gp(e,n),(e=e.alternate)&&Gp(e,n)}function Yp(e){if(e.tag===13||e.tag===31){var n=Ol(e,67108864);n!==null&&rt(n,e,67108864),Zu(e,67108864)}}function Ip(e){if(e.tag===13||e.tag===31){var n=_t();n=Lr(n);var t=Ol(e,n);t!==null&&rt(t,e,n),Zu(e,n)}}var xo=!0;function Ug(e,n,t,r){var l=B.T;B.T=null;var s=Q.p;try{Q.p=2,Wu(e,n,t,r)}finally{Q.p=s,B.T=l}}function Hg(e,n,t,r){var l=B.T;B.T=null;var s=Q.p;try{Q.p=8,Wu(e,n,t,r)}finally{Q.p=s,B.T=l}}function Wu(e,n,t,r){if(xo){var l=Ju(r);if(l===null)Uu(e,n,r,wo,t),Pp(e,r);else if(Gg(l,e,n,t,r))r.stopPropagation();else if(Pp(e,r),n&4&&-1<Vg.indexOf(e)){for(;l!==null;){var s=Pn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var p=Mn(s.pendingLanes);if(p!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;p;){var E=1<<31-Rn(p);g.entanglements[1]|=E,p&=~E}tr(s),(Ve&6)===0&&(ro=yn()+500,Ci(0))}}break;case 31:case 13:g=Ol(s,2),g!==null&&rt(g,s,2),ao(),Zu(s,2)}if(s=Ju(r),s===null&&Uu(e,n,r,wo,t),s===l)break;l=s}l!==null&&r.stopPropagation()}else Uu(e,n,r,null,t)}}function Ju(e){return e=Ja(e),ef(e)}var wo=null;function ef(e){if(wo=null,e=Kt(e),e!==null){var n=d(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=h(n),e!==null)return e;e=null}else if(t===31){if(e=_(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return wo=e,null}function qp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dl()){case ml:return 2;case Pa:return 8;case pl:case Qn:return 32;case lt:return 268435456;default:return 32}default:return 32}}var nf=!1,al=null,il=null,sl=null,Gi=new Map,Yi=new Map,ol=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pp(e,n){switch(e){case"focusin":case"focusout":al=null;break;case"dragenter":case"dragleave":il=null;break;case"mouseover":case"mouseout":sl=null;break;case"pointerover":case"pointerout":Gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(n.pointerId)}}function Ii(e,n,t,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},n!==null&&(n=Pn(n),n!==null&&Yp(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Gg(e,n,t,r,l){switch(n){case"focusin":return al=Ii(al,e,n,t,r,l),!0;case"dragenter":return il=Ii(il,e,n,t,r,l),!0;case"mouseover":return sl=Ii(sl,e,n,t,r,l),!0;case"pointerover":var s=l.pointerId;return Gi.set(s,Ii(Gi.get(s)||null,e,n,t,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Yi.set(s,Ii(Yi.get(s)||null,e,n,t,r,l)),!0}return!1}function $p(e){var n=Kt(e.target);if(n!==null){var t=d(n);if(t!==null){if(n=t.tag,n===13){if(n=h(t),n!==null){e.blockedOn=n,Xa(e.priority,function(){Ip(t)});return}}else if(n===31){if(n=_(t),n!==null){e.blockedOn=n,Xa(e.priority,function(){Ip(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ju(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);sr=r,t.target.dispatchEvent(r),sr=null}else return n=Pn(t),n!==null&&Yp(n),e.blockedOn=t,!1;n.shift()}return!0}function Xp(e,n,t){Eo(e)&&t.delete(n)}function Yg(){nf=!1,al!==null&&Eo(al)&&(al=null),il!==null&&Eo(il)&&(il=null),sl!==null&&Eo(sl)&&(sl=null),Gi.forEach(Xp),Yi.forEach(Xp)}function So(e,n){e.blockedOn===n&&(e.blockedOn=null,nf||(nf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Yg)))}var ko=null;function Fp(e){ko!==e&&(ko=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ko===e&&(ko=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(ef(r||t)===null)continue;break}var s=Pn(t);s!==null&&(e.splice(n,3),n-=3,Jc(s,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function Ca(e){function n(E){return So(E,e)}al!==null&&So(al,e),il!==null&&So(il,e),sl!==null&&So(sl,e),Gi.forEach(n),Yi.forEach(n);for(var t=0;t<ol.length;t++){var r=ol[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ol.length&&(t=ol[0],t.blockedOn===null);)$p(t),t.blockedOn===null&&ol.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],s=t[r+1],p=l[un]||null;if(typeof s=="function")p||Fp(t);else if(p){var g=null;if(s&&s.hasAttribute("formAction")){if(l=s,p=s[un]||null)g=p.formAction;else if(ef(l)!==null)continue}else g=p.action;typeof g=="function"?t[r+1]=g:(t.splice(r,3),r-=3),Fp(t)}}}function Kp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function tf(e){this._internalRoot=e}No.prototype.render=tf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));var t=n.current,r=_t();Vp(t,r,e,n,null,null)},No.prototype.unmount=tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vp(e.current,2,null,e,null,null),ao(),n[Tn]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var n=on();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ol.length&&n!==0&&n<ol[t].priority;t++);ol.splice(t,0,e),t===0&&$p(e)}};var Qp=a.version;if(Qp!=="19.2.7")throw Error(i(527,Qp,"19.2.7"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=y(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Ig={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{hl=Ro.inject(Ig),vn=Ro}catch{}}return Pi.createRoot=function(e,n){if(!u(e))throw Error(i(299));var t=!1,r="",l=rm,s=lm,p=am;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Up(e,1,!1,null,null,t,r,null,l,s,p,Kp),e[Tn]=n.current,zu(e),new tf(n)},Pi.hydrateRoot=function(e,n,t){if(!u(e))throw Error(i(299));var r=!1,l="",s=rm,p=lm,g=am,E=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.formState!==void 0&&(E=t.formState)),n=Up(e,1,!0,n,t??null,r,l,E,s,p,g,Kp),n.context=Hp(null),t=n.current,r=_t(),r=Lr(r),l=Xr(r),l.callback=null,Fr(t,l,r),t=r,n.current.lanes=t,_l(n,t),tr(n),e[Tn]=n.current,zu(e),new No(n)},Pi.version="19.2.7",Pi}var ih;function n0(){if(ih)return af.exports;ih=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),af.exports=e0(),af.exports}var t0=n0();const r0=Jh(t0),sh=o=>{let a;const c=new Set,i=(y,x)=>{const k=typeof y=="function"?y(a):y;if(!Object.is(k,a)){const R=a;a=x??(typeof k!="object"||k===null)?k:Object.assign({},a,k),c.forEach($=>$(a,R))}},u=()=>a,_={setState:i,getState:u,getInitialState:()=>v,subscribe:y=>(c.add(y),()=>c.delete(y))},v=a=o(i,u,_);return _},l0=(o=>o?sh(o):sh),a0=o=>o;function i0(o,a=a0){const c=Wi.useSyncExternalStore(o.subscribe,Wi.useCallback(()=>a(o.getState()),[o,a]),Wi.useCallback(()=>a(o.getInitialState()),[o,a]));return Wi.useDebugValue(c),c}const oh=o=>{const a=l0(o),c=i=>i0(a,i);return Object.assign(c,a),c},s0=(o=>o?oh(o):oh);function o0(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let c=0;c<o.length;c+=1)o[c]=Math.floor(Math.random()*256);let a="";for(const c of o)a+=c.toString(16).padStart(2,"0");return a}const Bf="pkp.user",zf="pkp.savedDevices",Uf="pkp.ideDrafts",Hf="pkp.ideSettings",ns="Prototype Version 0.6.7";function Uo(o){try{const a=localStorage.getItem(o);return a?JSON.parse(a):null}catch{return null}}function Ho(o,a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}}function c0(){const o=Uo(Bf);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function uf(o){Ho(Bf,o)}function Vf(){return Uo(zf)??[]}function ts(o){Ho(zf,o)}function u0(){ts([])}function f0(){try{localStorage.removeItem(Bf),localStorage.removeItem(zf),localStorage.removeItem(Uf),localStorage.removeItem(Hf)}catch{}}function ff(){var o;return((o=Uo(Uf))==null?void 0:o.filter(a=>a.path&&typeof a.content=="string"))??[]}function df(o){Ho(Uf,o)}function ch(){const o=Uo(Hf)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function d0(o){Ho(Hf,o)}function mf(o){const a=Vf(),c=a.findIndex(i=>i.deviceID===o.deviceID);return c>=0?a[c]=o:a.push(o),ts(a),a}function m0(o){const a=Vf().filter(c=>c.deviceID!==o);return ts(a),a}const Sf="b8e06067-62ad-41ba-9231-206ae80ab551",p0="f897177b-aee8-4767-8ecc-cc694fd5fce0",h0="f897177b-aee8-4767-8ecc-cc694fd5fce1",pf=20,_0=12,g0=new TextEncoder,b0=new TextDecoder;function y0(o){return new Promise(a=>setTimeout(a,o))}function Vo(){return typeof navigator<"u"&&"bluetooth"in navigator}function kf(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function v0(){if(!Vo())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Sf]},{namePrefix:"PicoW-"}],optionalServices:[Sf]})}async function e_(){if(!Vo()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class x0{constructor(){fe(this,"device",null);fe(this,"writeChar",null);fe(this,"notifyChar",null);fe(this,"buffer","");fe(this,"writeQueue",Promise.resolve());fe(this,"disconnectNotified",!1);fe(this,"onLine",()=>{});fe(this,"onDisconnect",()=>{});fe(this,"handleNotification",a=>{const c=a.target;if(!(c!=null&&c.value))return;this.buffer+=b0.decode(c.value.buffer);let i=this.buffer.indexOf(`
`);for(;i>=0;){const u=this.buffer.slice(0,i).trim();this.buffer=this.buffer.slice(i+1),u&&this.onLine(u),i=this.buffer.indexOf(`
`)}});fe(this,"handleDisconnected",()=>{var a;this.disconnectNotified||(this.disconnectNotified=!0,(a=this.device)==null||a.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var a,c;return!!((c=(a=this.device)==null?void 0:a.gatt)!=null&&c.connected)}async connect(a){var u;this.device&&this.device!==a&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=a,this.buffer="",this.disconnectNotified=!1,a.removeEventListener("gattserverdisconnected",this.handleDisconnected),a.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((u=a.gatt)==null?void 0:u.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const i=await c.getPrimaryService(Sf);this.writeChar=await i.getCharacteristic(p0),this.notifyChar=await i.getCharacteristic(h0),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(a){const c=this.writeQueue.then(()=>this.doWrite(a));return this.writeQueue=c.catch(()=>{}),c}async doWrite(a){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=g0.encode(`${a}
`),u=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let d=0;d<c.length;d+=pf){const h=c.slice(d,d+pf);await u(h),d+pf<c.length&&await y0(_0)}}disconnect(){var c;const a=this.device;(c=a==null?void 0:a.gatt)!=null&&c.connected?a.gatt.disconnect():this.handleDisconnected()}}class w0{constructor(a,c){fe(this,"send");fe(this,"onMessage");fe(this,"inActive",!1);fe(this,"inExpectedTotal",0);fe(this,"inStreamId",0);fe(this,"inParts",new Map);fe(this,"inProgress",null);fe(this,"outPendingLines",null);fe(this,"outWaitingAck",!1);fe(this,"outStreamId",0);fe(this,"outNextStreamId",1);fe(this,"outCache",new Map);fe(this,"outProgress",null);fe(this,"outResolve",null);fe(this,"outReject",null);this.send=a,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(a){var i;if(a.startsWith("prep,")){const u=a.split(","),d=u.length>=2&&/^\d+$/.test(u[1])?parseInt(u[1],10):null,h=u.length>=3&&/^\d+$/.test(u[2])?parseInt(u[2],10):0;d!==null&&d>0&&(this.inActive=!0,this.inExpectedTotal=d,this.inStreamId=h,this.inParts.clear(),this.send(h>0?`ack:prep,${h}`:"ack:prep"));return}if(a==="ack:prep"||a===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(a.startsWith("miss,")){const u=a.split(",");if(u.length>=3&&/^\d+$/.test(u[1])&&/^\d+$/.test(u[2])){const d=parseInt(u[1],10),h=parseInt(u[2],10),_=this.outCache.get(h);d===this.outStreamId&&_&&this.send(_)}return}const c=this.parseNumbered(a);if(c){const{idx:u,payload:d}=c;if(!this.inActive){this.onMessage(d);return}this.inParts.has(u)||(this.inParts.set(u,d),(i=this.inProgress)==null||i.call(this,this.inParts.size,this.inExpectedTotal));let h=0;for(let _=1;_<=this.inExpectedTotal;_+=1)if(!this.inParts.has(_)){h=_;break}if(h>0&&this.inStreamId>0&&u>h&&this.send(`miss,${this.inStreamId},${h}`),this.inParts.size>=this.inExpectedTotal){for(let _=1;_<=this.inExpectedTotal;_+=1){const v=this.inParts.get(_);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(a)}setInboundProgress(a){this.inProgress=a}async sendReliable(a,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const i=a.length===0?[""]:a;this.outPendingLines=[...i],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const u=new Promise((d,h)=>{this.outResolve=d,this.outReject=h});try{await this.send(`prep,${i.length},${this.outStreamId}`)}catch(d){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,d}await u}async flushOutbound(){var a,c,i,u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(a=this.outResolve)==null||a.call(this),this.outResolve=null,this.outReject=null;return}try{const d=this.outPendingLines.length;for(let h=0;h<d;h+=1){const _=this.outPendingLines[h],v=`${h+1}-${_}`;this.outCache.set(h+1,v),await this.send(v),(c=this.outProgress)==null||c.call(this,h+1,d,_)}(i=this.outResolve)==null||i.call(this)}catch(d){(u=this.outReject)==null||u.call(this,d)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(a){const c=a.indexOf("-");if(c<=0)return null;const i=a.slice(0,c);if(!/^\d+$/.test(i))return null;const u=parseInt(i,10);return u<1?null:{idx:u,payload:a.slice(c+1)}}}const Ya=11,rs=31,E0=2,S0=60,Ha=4,Va=40;function k0(o,a){return Math.max(14,Math.min(56,Math.min(o,a)*.05))}function n_(o,a,c=Ya,i=rs){const u=k0(o,a),d=Math.max(1,o-2*u),h=Math.max(1,a-2*u);return{areaW:o,areaH:a,cols:c,rows:i,margin:u,stepX:d/Math.max(1,c-1),stepY:h/Math.max(1,i-1)}}function t_(o,a){return a.margin+o/2*a.stepX}function r_(o,a){const c=a.margin+o/2*a.stepY;return a.areaH-c}function Ji(o,a){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:t_(o.centerX2,a),cy:r_(o.centerY2,a),width:o.spanX*a.stepX,height:o.spanY*a.stepY}}function N0(o){const a=[];for(let c=0;c<o.cols;c+=1)for(let i=0;i<o.rows;i+=1)a.push({x:o.margin+c*o.stepX,y:o.areaH-(o.margin+i*o.stepY)});return a}function jo(o,a,c,i,u){const d=(v,y,x,k)=>{const R=y%2,$=k*2;let I=R,W=1/0;for(let K=R;K<=$;K+=2){const G=Math.abs(x(K)-v);G<W&&(W=G,I=K)}return Math.max(y,Math.min($-y,I))},h=d(o,c,v=>t_(v,u),u.cols-1),_=d(a,i,v=>r_(v,u),u.rows-1);return{centerX2:h,centerY2:_}}const Fl=6e3,R0=15,Co=[32,64,128,192],M0=Fl*10,T0=3500,j0=8e3,A0=2,D0=Fl,O0=Fl*8;function hf(o){return new Promise(a=>setTimeout(a,o))}function La(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function uh(o){return o instanceof DOMException&&o.name==="AbortError"}function ul(o){return o.replace(/[\r\n,]/g," ").trim()}class C0{constructor(a={}){fe(this,"transport",new x0);fe(this,"stream");fe(this,"events");fe(this,"waiters",[]);fe(this,"collectingLayout",!1);fe(this,"layoutBuffer",[]);fe(this,"layoutResolve",null);fe(this,"collectingLines",!1);fe(this,"lineBuffer",[]);fe(this,"lineResolve",null);fe(this,"lineReject",null);fe(this,"lineCollectId",0);fe(this,"controlPumpActive",!1);fe(this,"pendingButtons",[]);fe(this,"pendingSliders",new Map);fe(this,"pendingToggles",new Map);fe(this,"pendingJoysticks",new Map);fe(this,"pendingDpads",[]);fe(this,"expectingDisconnect",!1);fe(this,"disconnectMessage",null);fe(this,"busy",!1);fe(this,"fsCapabilities",null);this.events=a,this.stream=new w0(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var a;return kf((a=this.transport.device)==null?void 0:a.name)}get connected(){return this.transport.connected}setBusy(a){if(this.busy=a,a){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(a,c){var i,u;(u=(i=this.events).onLog)==null||u.call(i,a,c)}progress(a,c){var i,u;(u=(i=this.events).onProgress)==null||u.call(i,a,c)}onDeviceMessage(a){var i,u;if(a==="disconnect"||a==="disconnect_private"){const d=a==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=d,this.log("warning",d),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(a==="__END__"){const d=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(i=this.lineResolve)==null||i.call(this,d),this.lineResolve=null;return}this.lineBuffer.push(a);return}if(this.collectingLayout){if(a==="__END__"){const d=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(u=this.layoutResolve)==null||u.call(this,d),this.layoutResolve=null;return}!a.startsWith("ACK")&&!a.startsWith("ERR")&&!a.startsWith("#VERSION")?this.layoutBuffer.push(a):a.startsWith("#VERSION")&&this.layoutBuffer.push(a);return}a.startsWith("ERR")?this.log("error",a):a.startsWith("radar,")?this.handleRadarLine(a):a.startsWith("text,")?this.handleTextLine(a):a.startsWith("toggle_state,")?this.handleToggleStateLine(a):a.startsWith("ACK")||a==="LAYOUT_SAVED"||a.startsWith("READY")?this.log("success",a):this.log("info",`rx: ${a}`);const c=this.waiters.findIndex(d=>d.match(a));if(c>=0){const d=this.waiters[c];this.waiters.splice(c,1),clearTimeout(d.timer),d.resolve(a)}}waitFor(a,c,i){return new Promise((u,d)=>{const h=setTimeout(()=>{const _=this.waiters.findIndex(v=>v.timer===h);_>=0&&this.waiters.splice(_,1),d(new Error(`Timeout: ${i}`))},c);this.waiters.push({match:a,resolve:u,reject:d,timer:h})})}async collectLines(a,c,i,u,d){La(u);const h=this.lineCollectId+1;this.lineCollectId=h,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(d??null);const _=new Promise((v,y)=>{let x=!1;const k=()=>this.lineCollectId===h,R=()=>{x=!0,k()&&(this.lineReject=null,this.stream.setInboundProgress(null)),u==null||u.removeEventListener("abort",I)},$=G=>{x||(clearTimeout(W),k()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),R(),y(G))},I=()=>{$(new DOMException("BLE file read cancelled","AbortError"))},W=setTimeout(()=>{k()&&$(new Error(`Timeout: ${i}`))},c);this.lineResolve=v,this.lineReject=$;const K=this.lineResolve;this.lineResolve=G=>{k()&&(clearTimeout(W),R(),K==null||K(G))},u==null||u.addEventListener("abort",I,{once:!0})});return await this.transport.writeLine(a),_}async exchange(a,c,i,u=3){let d;for(let h=1;h<=u;h+=1)try{return await this.transport.writeLine(a),await this.waitFor(c,Fl,i)}catch(_){d=_,this.log("warning",`${i}: forsøg ${h}/${u} mislykkedes`)}throw d instanceof Error?d:new Error(`Failed: ${i}`)}async connect(a){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(a)}async runHandshake(a){var ae;await hf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",re=>re==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",re=>re==="unowned"||re.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned")return{kind:"unowned"};const i=c.split(","),u=i[1]??"",d=i[2]!==void 0&&parseInt(i[2],10)||0,h=i[3]!==void 0?parseInt(i[3],10)===1:!0,_=i[4]!==void 0?parseInt(i[4],10)===1:!1,v=i.length>=7,y=v?parseInt(i[5]??"0",10)===1:_,x=((ae=i[v?6:5])==null?void 0:ae.trim())||void 0;await this.exchange("ACK:ownership",re=>re==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const k=await this.exchange(`request_permission,${a.userID},${ul(a.username)}`,re=>re.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const R=k.split(",").filter(re=>/^\d+$/.test(re)),$=R.length>=1?parseInt(R[0]??"0",10):0,I=R.length>=2?parseInt(R[1]??"0",10):0,W=R.length>=3?parseInt(R[2]??"0",10):I;if($===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:h};const K=a.userID===u,G=I===1||K,H=W===1||K;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:u,ownerName:x,iconID:d,canEdit:G,canEditCode:H,isOwnedByMe:K,canOthersConnect:h,canOthersEdit:_,canOthersEditCode:y}}async create(a,c,i,u,d,h,_){const v=i?1:0,y=i&&u?1:0,x=i&&d?1:0;await this.exchange(`create,${a.userID},${ul(a.username)},${c},${v},${y},${x},${h},${_}`,k=>k==="ACK:create","create")}async updateDeviceSettings(a,c,i,u,d,h,_){const v=c?1:0,y=c&&i?1:0,x=c&&u?1:0;await this.exchange(`settings_update,${a},${v},${y},${x},${d},${h},${ul(_??"")}`,k=>k==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const a=new Promise((i,u)=>{this.layoutResolve=i;const d=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,u(new Error("Timeout: layout")))},Fl*2),h=this.layoutResolve;this.layoutResolve=_=>{clearTimeout(d),h==null||h(_)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await a;return this.progress(100,"Klar"),c}async saveLayout(a){await this.exchange("update",u=>u==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=a.map(u=>{const d=_=>_===null?"n":String(_),h=`update,${u.type},${u.name},${d(u.centerX2)},${d(u.centerY2)},${d(u.spanX)},${d(u.spanY)},${u.rotation}`;return u.type==="slider"?`${h},${u.sliderMin??0},${u.sliderMax??100},${u.sliderRecenter??"none"}`:u.type==="toggle"?`${h},${u.toggleInitial?1:0}`:u.type==="radar"?[h,u.radarMinAngle??0,u.radarMaxAngle??180,u.radarMaxDistance??200,u.radarFadeMs??1200].join(","):u.type==="joystick"?[h,u.joystickXMin??-100,u.joystickXMax??100,u.joystickYMin??-100,u.joystickYMax??100,u.joystickXRecenter??"middle",u.joystickYRecenter??"middle"].join(","):h});c.push("__END__");const i=this.waitFor(u=>u==="LAYOUT_SAVED",Fl*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await i}async listFiles(a="/"){return(await this.collectLines(`fs_list,${ul(a)}`,Fl*3,"fs_list")).filter(i=>i.startsWith("fs_entry,")).map(i=>{const[,u,d,h]=i.split(","),_=u==="file"||u==="dir"?u:"unknown",v=parseInt(h??"",10),y=d||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:_,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(a){var h,_,v;const c=a.split(",");if(c.length<4)return;const i=(h=c[1])==null?void 0:h.trim(),u=parseFloat(c[2]??""),d=parseFloat(c[3]??"");!i||!Number.isFinite(u)||!Number.isFinite(d)||((v=(_=this.events).onRadar)==null||v.call(_,i,u,d),this.log("info",`rx: ${a}`))}handleTextLine(a){var _,v;const c=a.indexOf(","),i=c>=0?a.indexOf(",",c+1):-1;if(c<0||i<0)return;const u=a.slice(c+1,i),d=a.slice(i+1),h=u==null?void 0:u.trim();h&&((v=(_=this.events).onText)==null||v.call(_,h,d),this.log("info",`rx: ${a}`))}handleToggleStateLine(a){var d,h,_;const c=a.split(",");if(c.length<3)return;const i=(d=c[1])==null?void 0:d.trim(),u=parseInt(c[2]??"",10);!i||!Number.isFinite(u)||((_=(h=this.events).onToggleState)==null||_.call(h,i,u===1),this.log("info",`rx: ${a}`))}async readText(a,c,i){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const u=await this.getFilesystemCapabilities(i);if(u.streamRead)try{return await this.readTextStream(a,u,c,i)}catch(d){if(i!=null&&i.aborted||uh(d)||!u.pageRead)throw d;this.log("warning",d instanceof Error?`fs_read_stream fejlede; bruger paged read: ${d.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(a,c,i)}async getFilesystemCapabilities(a){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",D0,"fs_capabilities",a),i=c.find(x=>x.startsWith("ERR"));if(i)throw new Error(i);const u=c.find(x=>x.startsWith("fs_capabilities,"));if(!u)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const d=u.split(","),h=new Map;for(let x=1;x<d.length-1;x+=2)h.set(d[x],d[x+1]);const _=parseInt(h.get("max_page")??"",10),v=parseInt(h.get("stream_chunk")??"",10),y={version:h.get("version")||void 0,pageRead:h.get("page_read")==="1",maxPageSize:Number.isFinite(_)&&_>0?_:32,streamRead:h.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(a,c,i){const u=await this.getFilesystemCapabilities(i);let d=0,h=L0(u.maxPageSize),_=0,v=null,y="";const x=`Indlæser ${_f(a)}...`;La(i),c==null||c(5,x);for(let k=0;k<512;k+=1){La(i),_===0&&(c==null||c(7,x));const $=await this.readPageWithRetry(a,_,d,h,i),I=$.lines;d=$.nextPageSizeIndex,h=$.maxPageSizeIndex,La(i);const W=I.find(J=>J.startsWith("ERR"));if(W)throw new Error(W);const K=I.find(J=>J.startsWith("fs_page,"));if(!K)throw new Error("ERR: fs_read_page missing data");const[,G,H,ae,re=""]=K.split(",",5);if(G!==a)throw new Error("ERR: fs_read_page stale data");const se=parseInt(H??"",10),_e=parseInt(ae??"",10);if(!Number.isFinite(se)||se!==_||!Number.isFinite(_e))throw new Error("ERR: fs_read_page invalid data");v=_e,y+=re,_+=Math.floor(re.length/2);const le=v>0?8+Math.min(87,Math.round(_/v*87)):95;if(c==null||c(le,x),_>=v||re.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(dh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(a,c,i,u,d){let h,_=Math.min(i,u);for(;_>=0;){const v=Co[_],y=_===0?A0:1,x=_===0?j0:T0;for(let k=1;k<=y;k+=1){La(d);try{return{lines:await this.collectLines(`fs_read_page,${ul(a)},${c},${v}`,x,`fs_read_page ${c}`,d),nextPageSizeIndex:Math.min(_+1,u),maxPageSizeIndex:u}}catch(R){if(d!=null&&d.aborted||uh(R))throw R;if(h=R,k<y||_>0){const I=_>0&&k>=y?Co[_-1]:v;this.log("warning",`fs_read_page ${c} (${v} bytes) fejlede; prøver ${I} bytes`),await hf(80+k*80)}}}if(_===0)break;u=Math.max(0,_-1),_=u}throw h instanceof Error?h:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(a,c,i,u){const d=`Indlæser ${_f(a)}...`,h=Math.max(16,Math.min(192,c.streamChunkSize||128));i==null||i(5,d);const _=await this.collectLines(`fs_read_stream,${ul(a)},${h}`,O0,`fs_read_stream ${a}`,u,(le,J)=>{const xe=8+Math.round(Math.min(le,J)/Math.max(1,J)*87);i==null||i(Math.min(95,xe),d)});La(u);const v=_.find(le=>le.startsWith("ERR"));if(v)throw new Error(v);const y=_.find(le=>le.startsWith("fs_stream_begin,")),x=_.find(le=>le.startsWith("fs_stream_end,"));if(!y||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,k,R]=y.split(",",4),[,$,I,W]=x.split(",",4),K=parseInt(R??"",10),G=parseInt(I??"",10),H=parseInt(W??"",10);if(k!==a||$!==a||!Number.isFinite(K)||K!==G||!Number.isFinite(H))throw new Error("ERR: fs_read_stream invalid metadata");let ae=0,re="";for(const le of _){if(!le.startsWith("fs_stream_chunk,"))continue;const[,J,xe=""]=le.split(",",3),be=parseInt(J??"",10);if(!Number.isFinite(be)||be!==ae||xe.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");re+=xe,ae+=Math.floor(xe.length/2)}if(ae!==K)throw new Error("ERR: fs_read_stream size mismatch");const se=dh(re);if(fh(se)!==H)throw new Error("ERR: fs_read_stream checksum mismatch");return i==null||i(100,"Fil indlæst fra Pico"),new TextDecoder().decode(se)}async writeText(a,c,i){i==null||i(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${ul(a)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),i==null||i(18,"Pico er klar til filen...");const u=new TextEncoder().encode(c),d=[...u].map(x=>x.toString(16).padStart(2,"0")).join(""),h=[];for(let x=0;x<d.length;x+=160)h.push(`fs_write_chunk,${d.slice(x,x+160)}`);h.push("fs_write_end");const _=fh(u),v=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),M0,"fs_write_done");i==null||i(u.length===0?85:18,u.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${u.length} bytes via Bluetooth...`),await this.stream.sendReliable(h,(x,k,R)=>{if(!R.startsWith("fs_write_chunk,"))return;const $=Math.min(u.length,x*80),I=18+Math.round(x/Math.max(1,k-1)*67);i==null||i(Math.min(85,I),`Sender ${$}/${u.length} bytes via Bluetooth...`)}),i==null||i(90,"Verificerer BLE-fil...");const y=await v;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,x,k]=y.split(",",3),R=parseInt(x??"",10),$=parseInt(k??"",10);if(R!==u.length||$!==_)throw new Error(`ERR: BLE-verificering fejlede for ${_f(a)}.`)}i==null||i(100,"Gemt på Pico")}async deleteFile(a){const c=await this.exchange(`fs_delete,${ul(a)}`,i=>i==="ACK:fs_delete"||i.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",a=>a==="ACK:restart"||a.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(a,c){this.busy||(this.pendingButtons.push(`button,${a}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(a,c){this.busy||(this.pendingSliders.set(a,`slider,${a}:${c}`),this.pumpControls())}enqueueToggle(a,c){this.busy||(this.pendingToggles.set(a,`toggle,${a}:${c?1:0}`),this.pumpControls())}enqueueJoystick(a,c,i){this.busy||(this.pendingJoysticks.set(a,`joystick,${a}:${Math.round(c)},${Math.round(i)}`),this.pumpControls())}enqueueDpad(a,c,i){this.busy||(this.pendingDpads.push(`dpad,${a}:${c},${i?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const a=this.nextControlLine();if(!a)break;await this.transport.writeLine(a),this.log("info",`tx: ${a}`),await hf(R0)}}catch(a){this.log("error",a instanceof Error?a.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const a=this.pendingButtons.shift();if(a)return a;const c=this.pendingDpads.shift();if(c)return c;const i=this.pendingSliders.entries().next();if(!i.done){const[h,_]=i.value;return this.pendingSliders.delete(h),_}const u=this.pendingToggles.entries().next();if(!u.done){const[h,_]=u.value;return this.pendingToggles.delete(h),_}const d=this.pendingJoysticks.entries().next();if(!d.done){const[h,_]=d.value;return this.pendingJoysticks.delete(h),_}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",a=>a==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,i,u;for(const d of this.waiters)clearTimeout(d.timer),d.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const a=this.disconnectMessage??void 0;this.disconnectMessage=null,(u=(i=this.events).onDisconnect)==null||u.call(i,a)}}function L0(o){let a=0;for(let c=0;c<Co.length;c+=1)Co[c]<=o&&(a=c);return a}function _f(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function fh(o){let a=0;for(const c of o)a=a+c>>>0;return a}function dh(o){const a=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<a.length;c+=1)a[c]=parseInt(o.slice(c*2,c*2+2),16);return a}function mh(o){const a=(c,i)=>Number.isFinite(c)?Math.max(E0,Math.min(S0,c)):i;for(const c of o){const i=c.trim();if(i.startsWith("#GRID,")){const u=i.split(","),d=a(parseInt(u[1],10),Ya),h=a(parseInt(u[2],10),rs);return{cols:d,rows:h}}}return{cols:Ya,rows:rs}}function ph(o){const a=new Map;for(const c of o){const i=c.trim();if(!i||i.startsWith("#VERSION")||i==="__END__")continue;const u=i.split(",");if(u.length<7)continue;const[d,h,_,v,y,x,k,R,$,I,W,K,G]=u;if(d!=="button"&&d!=="slider"&&d!=="toggle"&&d!=="radar"&&d!=="text"&&d!=="joystick"&&d!=="dpad"||a.has(h))continue;const H=Q=>{if(Q==="n")return null;const ce=parseInt(Q,10);return Number.isNaN(ce)?null:ce},ae=parseInt(k,10)||0,re=R!==void 0?parseInt(R,10):0,se=$!==void 0?parseInt($,10):100,_e=["none","bottom","middle","top"].includes(I??"")?I:"none",le=R!==void 0?parseInt(R,10)===1:!1,J=R!==void 0?parseFloat(R):0,xe=$!==void 0?parseFloat($):180,be=I!==void 0?parseFloat(I):200,we=W!==void 0?parseInt(W,10):1200,ie=(Q,ce)=>["none","bottom","middle","top"].includes(Q??"")?Q:ce,Te=R!==void 0?parseInt(R,10):-100,Oe=$!==void 0?parseInt($,10):100,Ge=I!==void 0?parseInt(I,10):-100,B=W!==void 0?parseInt(W,10):100;a.set(h,{type:d,name:h,centerX2:H(_),centerY2:H(v),spanX:H(y),spanY:H(x),rotation:[0,90,180,270].includes(ae)?ae:0,...d==="slider"?{sliderMin:Number.isFinite(re)?re:0,sliderMax:Number.isFinite(se)?se:100,sliderRecenter:_e}:{},...d==="toggle"?{toggleInitial:le}:{},...d==="radar"?{radarMinAngle:Number.isFinite(J)?J:0,radarMaxAngle:Number.isFinite(xe)?xe:180,radarMaxDistance:Number.isFinite(be)&&be>0?be:200,radarFadeMs:Number.isFinite(we)&&we>0?we:1200}:{},...d==="joystick"?{joystickXMin:Number.isFinite(Te)?Te:-100,joystickXMax:Number.isFinite(Oe)&&Oe!==Te?Oe:100,joystickYMin:Number.isFinite(Ge)?Ge:-100,joystickYMax:Number.isFinite(B)&&B!==Ge?B:100,joystickXRecenter:ie(K,"middle"),joystickYRecenter:ie(G,"middle")}:{}})}return[...a.values()]}let te=null,$i=null,hh=0,Mr=!1;function B0(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function _h(o){return new Promise(a=>setTimeout(a,o))}function z0(o){return Object.fromEntries(o.filter(a=>a.type==="toggle").map(a=>[a.name,!!a.toggleInitial]))}function gh(o,a){const c=z0(o);for(const i of o)i.type==="toggle"&&a[i.name]!==void 0&&(c[i.name]=a[i.name]);return c}const ne=s0((o,a)=>{function c(u,d){o(h=>({logs:[{level:u,message:d,time:B0()},...h.logs].slice(0,200)}))}function i(u){$i&&clearTimeout($i),hh+=1,o({toast:{message:u,id:hh}}),$i=setTimeout(()=>o({toast:null}),4500)}return te=new C0({onProgress:(u,d)=>o({progress:{value:u,label:d}}),onLog:(u,d)=>c(u,d),onRadar:(u,d,h)=>{const _=Date.now(),v={id:`${_}-${Math.random().toString(36).slice(2)}`,angle:d,distance:h,createdAt:_};o(y=>{const x=y.layout.find($=>$.type==="radar"&&$.name===u),k=(x==null?void 0:x.radarFadeMs)??1200,R=y.radarPings[u]??[];return{radarPings:{...y.radarPings,[u]:[...R.filter($=>_-$.createdAt<=k),v].slice(-80)}}})},onText:(u,d)=>{o(h=>({textValues:{...h.textValues,[u]:d}}))},onToggleState:(u,d)=>{o(h=>({toggleValues:{...h.toggleValues,[u]:d}}))},onDisconnect:u=>{const{screen:d,active:h,picoIdeOrigin:_}=a();if(Mr){Mr=!1;return}if(u&&(c("warning",u),i(u)),d==="control"||d==="connection"||d==="create"||d==="ide"&&_==="control"){const v=h?{deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,canOthersEditCode:h.canOthersEditCode,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:v})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const u=c0(),d=Vf();o({user:u,savedDevices:d,splashTarget:u?"dashboard":"intro"})},finishSplash:()=>{const u=a().splashTarget;o({screen:u??"intro"})},createUser:u=>{const d=u.trim();if(!d)return;const h={username:d,userID:o0()};uf(h),o({user:h,screen:"dashboard"})},findDevice:async()=>{try{const u=await v0();await a().connectToDevice(u)}catch(u){u instanceof Error&&u.name!=="NotFoundError"&&c("error",u.message)}},connectToDevice:async(u,d)=>{var _,v;const h=a().user;if(!(!h||!te)){Mr=!1,o({screen:"connection",connecting:{name:kf(u.name)||(d==null?void 0:d.deviceName)||"Pico",iconID:(d==null?void 0:d.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await te.connect(u);const y=await te.runHandshake(h),x=u.id,k=kf(u.name)||(d==null?void 0:d.deviceName)||"Pico";if(y.kind==="denied"){const G=`Du kan ikke forbinde, fordi ${((_=y.ownerName)==null?void 0:_.trim())||((v=d==null?void 0:d.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",G),i(G),o({screen:"dashboard",connecting:null}),await te.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:x,deviceName:k,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:h.username,gridCols:Ya,gridRows:rs},screen:"create"});return}const R={deviceID:x,deviceName:k,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?h.username:y.ownerName??(d==null?void 0:d.ownerName)};o({savedDevices:mf(R)});const $=await te.requestLayout(),I=mh($),W=ph($);o({layout:W,sliderValues:{},toggleValues:gh(W,a().toggleValues),radarPings:{},textValues:{},active:{deviceID:x,deviceName:k,iconID:y.iconID,canEdit:y.canEdit,canEditCode:y.canEditCode,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?h.username:y.ownerName??(d==null?void 0:d.ownerName),gridCols:I.cols,gridRows:I.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const x=y instanceof Error?y.message:"Forbindelsen mislykkedes.";c("error",x),i("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await te.disconnect().catch(()=>{})}}},finishCreate:async(u,d,h,_,v,y)=>{const{user:x,active:k}=a();if(!(!x||!k||!te))try{te.setBusy(!0),await te.create(x,u,d,h,_,v,y),te.setBusy(!1);const R={deviceID:k.deviceID,deviceName:k.deviceName,deviceIconID:u,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,isOwnedByMe:!0,ownerName:x.username};o({savedDevices:mf(R)});const $=await te.requestLayout(),I=mh($),W=ph($);o({layout:W,sliderValues:{},toggleValues:gh(W,a().toggleValues),radarPings:{},textValues:{},active:{...k,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,ownerName:x.username,gridCols:I.cols,gridRows:I.rows},screen:"control"})}catch(R){te.setBusy(!1);const $=R instanceof Error?R.message:"Oprettelse mislykkedes.";c("error",$),i("Oprettelse mislykkedes."),o({screen:"dashboard"}),await te.disconnect().catch(()=>{})}},saveDeviceSettings:async(u,d,h,_,v,y)=>{const{active:x,user:k}=a();if(!(!x||!te||!x.isOwnedByMe))try{te.setBusy(!0),await te.updateDeviceSettings(u,d,h,_,v,y,k==null?void 0:k.username);const R={...x,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,ownerName:(k==null?void 0:k.username)??x.ownerName,gridCols:v,gridRows:y},$={deviceID:x.deviceID,deviceName:x.deviceName,deviceIconID:u,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,isOwnedByMe:!0,ownerName:(k==null?void 0:k.username)??x.ownerName};o({active:R,savedDevices:mf($)}),i("Enhedsindstillinger gemt.")}catch(R){c("error",R instanceof Error?R.message:"Kunne ikke gemme enhedsindstillinger."),i("Kunne ikke gemme enhedsindstillinger.")}finally{te.setBusy(!1)}},cancelCreate:async()=>{te&&await te.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Mr=!0,te&&await te.disconnect().catch(()=>{}),Mr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:u=>{o({savedDevices:m0(u)})},clearSavedDevices:()=>{u0(),o({savedDevices:[]}),i("Gemte enheder ryddet.")},resetApplicationData:async()=>{Mr=!0,te!=null&&te.connected&&await te.disconnect().catch(()=>{}),f0(),window.location.reload()},updateUsername:u=>{const d=a().user,h=u.trim();if(!d||!h)return;const _={...d,username:h};uf(_),o(v=>{var x;const y=v.savedDevices.map(k=>k.isOwnedByMe?{...k,ownerName:h}:k);return ts(y),{user:_,active:(x=v.active)!=null&&x.isOwnedByMe?{...v.active,ownerName:h}:v.active,savedDevices:y}}),i("Brugernavn gemt.")},createOwnerPairingCode:()=>{const u=a().user;return u?U0(u):null},applyOwnerPairingCode:u=>{var h;const d=H0(u,(h=a().user)==null?void 0:h.username);return d?(uf(d),o(_=>{var y;const v=_.savedDevices.map(x=>x.isOwnedByMe?{...x,ownerName:d.username}:x);return ts(v),{user:d,active:(y=_.active)!=null&&y.isOwnedByMe?{..._.active,ownerName:d.username}:_.active,savedDevices:v}}),i("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(i("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const u=a().screen==="control"&&!!(te!=null&&te.connected),d=a().active;if(u&&d&&!d.isOwnedByMe&&!d.canEditCode){i("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(h=>({screen:"ide",picoIdeOrigin:u?"control":"dashboard",active:u?h.active:null,layout:u?h.layout:[],sliderValues:u?h.sliderValues:{},toggleValues:u?h.toggleValues:{},radarPings:u?h.radarPings:{},textValues:u?h.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:u,active:d}=a();o({screen:u==="control"&&d&&(te!=null&&te.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(te!=null&&te.connected),bleListFiles:async()=>te!=null&&te.connected?te.listFiles("/"):[],bleReadText:async(u,d,h)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");return te.readText(u,d,h)},bleWriteText:async(u,d,h)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.writeText(u,d,h)},bleDeleteFile:async u=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.deleteFile(u)},bleRestart:async()=>{te!=null&&te.connected&&await te.restart()},bleRestartAndReconnect:async(u="control")=>{const{active:d}=a();if(!(te!=null&&te.connected)||!d)return!1;const h={deviceID:d.deviceID,deviceName:d.deviceName,deviceIconID:d.iconID,canOthersConnect:d.canOthersConnect,canOthersEdit:d.canOthersEdit,canOthersEditCode:d.canOthersEditCode,isOwnedByMe:d.isOwnedByMe,ownerName:d.ownerName};Mr=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await te.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:h.deviceName,iconID:h.deviceIconID}});for(let _=0;_<12&&(te!=null&&te.connected);_+=1)await _h(250);te!=null&&te.connected||(Mr=!1);for(let _=1;_<=8;_+=1){await _h(_===1?1200:850);try{const y=(await e_()).find(x=>x.id===h.deviceID);if(!y){o({progress:{value:Math.min(88,20+_*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+_*8),label:`Genforbinder (${_}/8)...`}}),await a().connectToDevice(y,h),u==="ide"&&o(x=>({screen:"ide",picoIdeOrigin:"control",active:x.active,layout:x.layout,sliderValues:x.sliderValues,toggleValues:x.toggleValues,radarPings:x.radarPings,textValues:x.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),i("Pico genforbundet."),!0}catch(v){c("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return i("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Mr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:h}),!1},reconnectLostDevice:async()=>{var d;const u=a().connectionLost;if(u){o({connectionLost:null});try{if((d=navigator.bluetooth)!=null&&d.getDevices){const _=(await navigator.bluetooth.getDevices()).find(v=>v.id===u.deviceID);if(_){await a().connectToDevice(_,u);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await a().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:(u,d)=>te==null?void 0:te.enqueueButton(u,d),sendSlider:(u,d)=>{o(h=>({sliderValues:{...h.sliderValues,[u]:d}})),te==null||te.enqueueSlider(u,d)},sendToggle:(u,d)=>{o(h=>({toggleValues:{...h.toggleValues,[u]:d}})),te==null||te.enqueueToggle(u,d)},sendJoystick:(u,d,h)=>te==null?void 0:te.enqueueJoystick(u,d,h),sendDpad:(u,d,h)=>te==null?void 0:te.enqueueDpad(u,d,h),saveLayout:async u=>{if(te)try{te.setBusy(!0),await te.saveLayout(u),o({layout:u,editMode:!1})}catch(d){c("error",d instanceof Error?d.message:"Kunne ikke gemme layout.")}finally{te.setBusy(!1)}},setEditMode:u=>o({editMode:u,sideMenuOpen:!1,menuPage:null}),setDashboardPage:u=>o({dashboardPage:u}),toggleSideMenu:u=>o(d=>({sideMenuOpen:u??!d.sideMenuOpen})),toggleDebugger:u=>o(d=>({debuggerOpen:u??!d.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:u=>o({menuPage:u,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(u,d)=>c(u,d),askConfirm:u=>o({confirmDialog:u}),closeConfirm:()=>o({confirmDialog:null}),showToast:u=>i(u),dismissToast:()=>{$i&&clearTimeout($i),o({toast:null})}}}),Nf="PKP-EJER";function U0(o){var i;const a=o.userID.toLowerCase(),c=((i=a.match(/.{1,4}/g))==null?void 0:i.join("-"))??a;return`${Nf}-${c}-${l_(a)}`}function H0(o,a="Ejer"){const c=o.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Nf}-`))return null;const i=c.slice(Nf.length+1).split("-").filter(Boolean),u=i.pop()??"",d=i.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(d)||u!==l_(d)?null:{userID:d,username:a.trim()||"Ejer"}}function l_(o){let a=2166136261;for(const c of o.toLowerCase())a^=c.charCodeAt(0),a=Math.imul(a,16777619)>>>0;return(a%65536).toString(16).toUpperCase().padStart(4,"0")}const Go="./",a_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function qa(o){const a=o>=0&&o<a_.length?o:0;return`${Go}device-icons/${a}.png`}const V0=`${Go}art/logo.png`,G0=`${Go}art/Teknologiskolen_logo.png`,Y0=`${Go}art/logo_teknologiskolen_white.png`,I0={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Kn({name:o,size:a=24,className:c}){return f.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:I0[o]})}const q0=1850,P0=450;function $0(){const o=ne(i=>i.splashTarget),a=ne(i=>i.finishSplash),c=o?"splash-screen-animation splash-ready":"splash-pending";return L.useEffect(()=>{if(!o)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches?P0:q0,d=window.setTimeout(a,u);return()=>window.clearTimeout(d)},[a,o]),f.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:V0,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function bh(){const o=ne(u=>u.createUser),[a,c]=L.useState(""),i=a.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:G0,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${i?"filled":""}`,children:[f.jsx("input",{id:"username",value:a,onChange:u=>c(u.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!i,onClick:()=>o(a),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:ns})]})}function Gf({title:o,onMenu:a}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:a,"aria-label":"Menu",children:f.jsx(Kn,{name:"menu"})})]})})}function En({title:o,onClose:a,children:c,closeVariant:i="plain"}){const u=i==="circle",d=L.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:h=>{d.current=h.target===h.currentTarget},onClick:h=>{h.target===h.currentTarget&&d.current&&a(),d.current=!1},children:f.jsxs("div",{className:"modal",onClick:h=>h.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${u?"modal-close-circle":""}`,type:"button",onClick:a,"aria-label":"Luk",children:f.jsx(Kn,{name:u?"delete":"close",size:u?30:24})})]}),f.jsx("div",{className:"modal-body",children:c})]})})}function yh(){const o=ne(R=>R.savedDevices),a=ne(R=>R.toggleSideMenu),c=ne(R=>R.findDevice),i=ne(R=>R.removeSavedDevice),u=ne(R=>R.askConfirm),d=ne(R=>R.dashboardPage),h=ne(R=>R.setDashboardPage),_=Q0(),[v,y]=L.useState(null),x=Vo(),k=o.filter(R=>d==="mine"?R.isOwnedByMe:!R.isOwnedByMe).sort(K0);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(Gf,{title:"Hovedmenu",onMenu:()=>a()}),f.jsxs("div",{className:"content dash-content",children:[!x&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:d==="mine"?"active":"",onClick:()=>h("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:d==="andre"?"active":"",onClick:()=>h("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:k.length===0?f.jsx("div",{className:"device-list-empty",children:d==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):k.map(R=>f.jsx(X0,{device:R,disabled:!x,onConnect:()=>_(R),onSettings:()=>y(R)},R.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!x,"aria-label":"Find enhed",children:f.jsx(Kn,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:ns}),v&&f.jsx(En,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:qa(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(Xi,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(Xi,{label:"Ejer",value:F0(v)}),f.jsx(Xi,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(Xi,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx(Xi,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const R=v;y(null),_(R)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>u({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{i(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function X0({device:o,disabled:a,onConnect:c,onSettings:i}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:a,children:[f.jsx("img",{className:"device-tile-icon",src:qa(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:i,"aria-label":"Enhedsindstillinger",children:f.jsx(Kn,{name:"settings"})})]})}function Xi({label:o,value:a}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:a})]})}function F0(o){var a;return o.isOwnedByMe?"Dig":((a=o.ownerName)==null?void 0:a.trim())||"Anden bruger"}function K0(o,a){return o.deviceName.localeCompare(a.deviceName,"da",{sensitivity:"base"})}function Q0(){const o=ne(i=>i.connectToDevice),a=ne(i=>i.findDevice),c=ne(i=>i.log);return async i=>{const d=(await e_()).find(h=>h.id===i.deviceID);d?await o(d,i):(c("info","Genforbind: vælg enheden i browserens liste."),await a())}}function Z0(){const o=ne(c=>c.connecting),a=ne(c=>c.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:qa((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${a.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:a.label})]})]})}function i_({selected:o,onSelect:a,onClose:c}){return f.jsx(En,{title:"Vælg Enhedens Ikon",onClose:c,children:f.jsx("div",{className:"icon-grid",children:a_.map(i=>f.jsx("button",{type:"button",className:`icon-tile ${i.id===o?"selected":""}`,onClick:()=>{a(i.id),c()},"aria-label":i.label,children:f.jsx("img",{src:qa(i.id),alt:""})},i.id))})})}function W0(){const o=ne(re=>re.finishCreate),a=ne(re=>re.cancelCreate),[c,i]=L.useState(0),[u,d]=L.useState(!1),[h,_]=L.useState(!1),[v,y]=L.useState(!1),[x,k]=L.useState(!1),[R,$]=L.useState(Ya),[I,W]=L.useState(rs),[K,G]=L.useState(!1),H=re=>Number.isFinite(re)?Math.max(Ha,Math.min(Va,Math.round(re))):Ya;async function ae(){G(!0),await o(c,h,h&&v,h&&x,H(R),H(I))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>d(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:qa(c),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(Kn,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:h?"":"active",onClick:()=>_(!1),children:"Privat"}),f.jsx("button",{type:"button",className:h?"active":"",onClick:()=>_(!0),children:"Offentlig"})]}),h&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:x?"":"active",onClick:()=>k(!1),children:"Nej"}),f.jsx("button",{type:"button",className:x?"active":"",onClick:()=>k(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Ha,max:Va,value:Number.isNaN(R)?"":R,onChange:re=>$(parseInt(re.target.value,10)),onBlur:()=>$(H(R))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Ha,max:Va,value:Number.isNaN(I)?"":I,onChange:re=>W(parseInt(re.target.value,10)),onBlur:()=>W(H(I))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>a(),disabled:K,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ae,disabled:K,children:K?"Opretter...":"Opret"})]})]}),u&&f.jsx(i_,{selected:c,onSelect:i,onClose:()=>d(!1)}),f.jsx("span",{className:"version",children:ns})]})}const Ia=8;function Ao(o){return Math.max(5,Math.min(22,o))}function J0(o,a,c){const i=Math.max(1,o.length),u=(a-Ia*2)/(i*.58),d=(c-Ia*2)*.48;return Ao(Math.min(u,d))}function Kl(o,a,c){switch(c){case 90:return{x:-a,y:o};case 180:return{x:-o,y:-a};case 270:return{x:a,y:-o};default:return{x:o,y:a}}}function Lo(o){return(360-o)%360}function eb(o,a,c,i){const u=i===90||i===270;return J0(o,u?c:a,u?a:c)}function Bo({name:o,width:a,height:c,rotation:i}){return f.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:eb(o,a,c,i),transform:i?`rotate(${i}deg)`:void 0,whiteSpace:i===90||i===270?"nowrap":void 0},children:o})}function nb(o,a,c,i,u){const d=o.trim().split(/\s+/).filter(Boolean),h=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,d.length-1)*1.6),_=u?Ao(Math.min(a/4.6,c/4.6,12)):0,v=u?_+Ia:Ia;if(i){const k=Math.max(1,c-v*2);return{fontSize:Ao(Math.min(a*.48,k/(h*1.04))),endFontSize:_,centerInset:u?{top:v,bottom:v}:{}}}const y=Math.max(1,a-v*4.2);return{fontSize:Ao(Math.min(c*.42,y/(h*.58))),endFontSize:_,centerInset:u?{left:v*2.1,right:v*2.1}:{}}}function tb({control:o,rect:a,disabled:c,latestValue:i,toggleValue:u,radarPings:d=[],textValue:h,onButton:_,onSlider:v,onToggle:y,onJoystick:x,onDpad:k}){const R=L.useRef(!1),$={left:a.cx,top:a.cy,width:a.width,height:a.height};if(o.type==="button"){const I=()=>{c||!R.current||(R.current=!1,_(o.name,!1))};return f.jsx("div",{className:"control",style:$,children:f.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:W=>{var K,G;c||(W.preventDefault(),(G=(K=W.currentTarget).setPointerCapture)==null||G.call(K,W.pointerId),R.current=!0,_(o.name,!0))},onPointerUp:W=>{var K,G;W.preventDefault(),(G=(K=W.currentTarget).releasePointerCapture)==null||G.call(K,W.pointerId),I()},onPointerCancel:I,onLostPointerCapture:I,children:f.jsx(Bo,{name:o.name,width:a.width,height:a.height,rotation:o.rotation})})})}if(o.type==="toggle"){const I=!!u;return f.jsx("div",{className:"control",style:$,children:f.jsx("button",{className:`control-toggle ${I?"on":""}`,type:"button",disabled:c,"aria-pressed":I,style:{width:"100%",height:"100%"},onPointerDown:W=>{c||(W.preventDefault(),y(o.name,!I))},children:f.jsx(Bo,{name:o.name,width:a.width,height:a.height,rotation:o.rotation})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:$,children:f.jsx(o_,{control:o,pings:d,width:a.width,height:a.height})}):o.type==="text"?f.jsx("div",{className:"control",style:$,children:f.jsx(s_,{message:h??o.name,width:a.width,height:a.height,rotation:o.rotation})}):o.type==="joystick"?f.jsx("div",{className:"control",style:$,children:f.jsx(_b,{control:o,disabled:c,onJoystick:x,width:a.width,height:a.height})}):o.type==="dpad"?f.jsx("div",{className:"control",style:$,children:f.jsx(Sb,{control:o,disabled:c,onDpad:k})}):f.jsx("div",{className:"control",style:$,children:f.jsx(hb,{control:o,disabled:c,latestValue:i,onSlider:v,width:a.width,height:a.height})})}function rb(o,a,c){const i=o.trim()||" ",d=i.split(/\s+/).filter(Boolean).reduce((k,R)=>Math.max(k,R.length),1),h=Math.max(1,Math.ceil(i.length/Math.max(1,Math.floor(d*1.9)))),_=Math.max(1,a-Ia*3),v=Math.max(1,c-Ia*3),y=_/(d*.58),x=v/(h*1.16);return Math.max(7,Math.min(24,y,x))}function s_({message:o,width:a,height:c,rotation:i=0}){const u=o.trim()||"...",d=i===90||i===270,h=rb(u,d?c:a,d?a:c);return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:h},children:f.jsx("span",{style:{transform:i?`rotate(${i}deg)`:void 0},children:u})})}function o_({control:o,pings:a,width:c,height:i,preview:u=!1}){const[,d]=L.useState(0),h=Math.max(120,o.radarFadeMs??1200),_=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=Bn(_),x=Bn(v),k=Math.abs(v-_)>=360||y===x&&_!==v,R=Math.max(1,o.radarMaxDistance??200),$=Date.now(),I=a[a.length-1],W=o.rotation,K=Bn(y+W),G=Bn(x+W),H=fb(y,x),ae=((I==null?void 0:I.angle)??H)+W,re=u?[{id:"preview",angle:H,distance:R*.62,createdAt:$}]:a.filter(oe=>$-oe.createdAt<=h),se=!k,_e=Math.max(8,Math.min(12,Math.min(c,i)*.16)),le=Math.max(7,_e*.85),J=0,xe=0,be=1,ie=(k?[Bn(180+W)]:sb(K,G)).flatMap(oe=>[.25,.5,.75,1].map(S=>({key:`${Math.round(oe)}-${S}`,value:Math.round(R*S),point:yt(J,xe,be*S,oe)}))),Te=k?{x:-1.12,y:-1.12,width:2.24,height:2.24}:ob(K,G,ie.map(oe=>oe.point)),Oe=k?"":lb(J,xe,be,K,G),Ge=Eh(_),B=Eh(v),Q=se?ub(K,G,Te,c,i,Ge,B,_e):null,ce=ie.map(oe=>{const S=c_(oe.point,Te,c,i);return{key:oe.key,value:oe.value,x:S.x,y:S.y}});L.useEffect(()=>{if(u||a.length===0)return;const oe=window.setInterval(()=>d(S=>S+1),120);return()=>window.clearInterval(oe)},[h,a.length,u]);const Ee=yt(J,xe,be,ae);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:c,height:i,viewBox:`${Te.x} ${Te.y} ${Te.width} ${Te.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[k?f.jsx("circle",{className:"radar-sector-fill",cx:J,cy:xe,r:be}):f.jsx("path",{className:"radar-sector-fill",d:Oe}),[.25,.5,.75,1].map(oe=>k?f.jsx("circle",{className:"radar-ring",cx:J,cy:xe,r:be*oe},oe):f.jsx("path",{className:"radar-ring",d:ab(J,xe,be*oe,K,G)},oe)),!k&&f.jsx(vh,{cx:J,cy:xe,radius:be,angle:K}),!k&&f.jsx(vh,{cx:J,cy:xe,radius:be,angle:G}),f.jsx("line",{className:"radar-sweep",x1:J,y1:xe,x2:Ee.x,y2:Ee.y}),re.map(oe=>{const S=u?0:$-oe.createdAt,U=Math.max(0,1-S/h),ee=Math.max(0,Math.min(R,oe.distance)),T=yt(J,xe,be*(ee/R),oe.angle+W);return f.jsx("circle",{className:"radar-ping",cx:T.x,cy:T.y,r:Math.max(.025,Math.min(Te.width,Te.height)*.025),opacity:U},oe.id)})]}),se&&Q&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:Q.min.x,top:Q.min.y,fontSize:_e},children:Ge}),f.jsx("span",{className:"radar-angle-label",style:{left:Q.max.x,top:Q.max.y,fontSize:_e},children:B})]}),ce.map(oe=>f.jsx("span",{className:"radar-range-label",style:{left:oe.x,top:oe.y,fontSize:le},children:oe.value},oe.key))]})}function vh({cx:o,cy:a,radius:c,angle:i}){const u=yt(o,a,c,i);return f.jsx("line",{className:"radar-boundary",x1:o,y1:a,x2:u.x,y2:u.y})}function yt(o,a,c,i){const u=(Bn(i)-90)*Math.PI/180;return{x:o+Math.cos(u)*c,y:a+Math.sin(u)*c}}function lb(o,a,c,i,u){const d=yt(o,a,c,i),h=yt(o,a,c,u),_=Yo(i,u)>180?1:0;return`M ${o} ${a} L ${d.x} ${d.y} A ${c} ${c} 0 ${_} 1 ${h.x} ${h.y} Z`}function ab(o,a,c,i,u){const d=yt(o,a,c,i),h=yt(o,a,c,u),_=Yo(i,u)>180?1:0;return`M ${d.x} ${d.y} A ${c} ${c} 0 ${_} 1 ${h.x} ${h.y}`}function Yo(o,a){const c=Bn(o),i=Bn(a),u=i>=c?i-c:360-c+i;return u===0?360:u}const gf=15,ib=24;function sb(o,a){const c=360-Yo(o,a);return c-2*gf<ib?[Bn(a+c/2)]:[Bn(o-gf),Bn(a+gf)]}function ob(o,a,c=[]){const i=[{x:0,y:0},yt(0,0,1,o),yt(0,0,1,a),...c];for(const k of[0,90,180,270])cb(k,o,a)&&i.push(yt(0,0,1,k));const u=Math.min(...i.map(k=>k.x)),d=Math.max(...i.map(k=>k.x)),h=Math.min(...i.map(k=>k.y)),_=Math.max(...i.map(k=>k.y)),v=Math.max(.1,d-u),y=Math.max(.1,_-h),x=Math.max(v,y)*.24;return{x:u-x,y:h-x,width:v+x*2,height:y+x*2}}function cb(o,a,c){const i=Bn(a),u=Bn(o),d=Yo(a,c),h=Bn(u-i);return h>=0&&h<=d}function ub(o,a,c,i,u,d,h,_){const y=yt(0,0,1.1,o),x=yt(0,0,1.1,a);return{min:xh(y,c,i,u,d,_),max:xh(x,c,i,u,h,_)}}function c_(o,a,c,i){return{x:(o.x-a.x)/a.width*c,y:(o.y-a.y)/a.height*i}}function xh(o,a,c,i,u,d){const h=c_(o,a,c,i),_=Math.max(10,u.length*d*.62),v=d,y=7;return{x:wh(h.x,_/2+y,Math.max(_/2+y,c-_/2-y)),y:wh(h.y,v/2+y,Math.max(v/2+y,i-v/2-y))}}function wh(o,a,c){return Math.max(a,Math.min(c,o))}function Eh(o){return`${Math.round(o)}`}function Bn(o){return Number.isFinite(o)?(o%360+360)%360:0}function fb(o,a){const c=Bn(o),i=Bn(a),u=i>=c?i-c:360-c+i;return Bn(c+u/2)}function db(o,a){if(!a)return o;const c=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((i,u)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...i].map((d,h)=>f.jsx("span",{children:d},`${d}-${h}`))},`${i}-${u}`))})}function mb(o){const a={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return o===0?{low:{...a,left:c,top:0,bottom:0},high:{...a,right:c,top:0,bottom:0}}:o===180?{low:{...a,right:c,top:0,bottom:0},high:{...a,left:c,top:0,bottom:0}}:o===90?{low:{...a,bottom:c,left:0,right:0},high:{...a,top:c,left:0,right:0}}:{low:{...a,top:c,left:0,right:0},high:{...a,bottom:c,left:0,right:0}}}function pb({name:o,vertical:a,rotation:c,color:i,fontSize:u,endFontSize:d,centerInset:h,lowLabel:_,highLabel:v,showEnds:y}){const x=y?mb(c):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:i},children:[f.jsx("div",{style:{position:"absolute",inset:0,...h,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:u,textAlign:"center",pointerEvents:"none"},children:db(o,a)}),x&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...x.low,fontWeight:800,fontSize:d},children:_}),f.jsx("div",{style:{...x.high,fontWeight:800,fontSize:d},children:v})]})]})}function u_({name:o,rotation:a,width:c,height:i,value:u,showEnds:d=!1,fillColor:h="var(--red)",lowLabel:_="0",highLabel:v="100"}){const y=a===90||a===270,{fontSize:x,endFontSize:k,centerInset:R}=nb(o,c,i,y,d);let $,I;a===0?($={left:0,top:0,bottom:0,width:`${u}%`},I={left:0,top:0}):a===180?($={right:0,top:0,bottom:0,width:`${u}%`},I={right:0,top:0}):a===90?($={left:0,right:0,bottom:0,height:`${u}%`},I={left:0,bottom:0}):($={left:0,right:0,top:0,height:`${u}%`},I={left:0,top:0});const W=K=>f.jsx(pb,{name:o,vertical:y,rotation:a,color:K,fontSize:x,endFontSize:k,centerInset:R,lowLabel:_,highLabel:v,showEnds:d});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${i}px`},children:W("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:h,overflow:"hidden",...$},children:f.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${i}px`,...I},children:W("var(--white)")})})]})}function hb({control:o,disabled:a,latestValue:c,onSlider:i,width:u,height:d}){const h=L.useRef(null),_=o.sliderMin??0,v=o.sliderMax??100,[y,x]=L.useState(()=>c===void 0?Sh(o.sliderRecenter??"none"):kh(c,_,v)),k=L.useRef(null),R=o.rotation;L.useEffect(()=>{c!==void 0&&(x(kh(c,_,v)),k.current=c)},[c,_,v]);function $(G){const H=h.current;if(!H)return 0;const ae=H.getBoundingClientRect();let re;return R===0?re=(G.clientX-ae.left)/ae.width:R===180?re=1-(G.clientX-ae.left)/ae.width:R===90?re=1-(G.clientY-ae.top)/ae.height:re=(G.clientY-ae.top)/ae.height,Math.max(0,Math.min(1,re))}function I(G){a||W($(G))}function W(G){const H=Math.round(G*100),ae=Math.round(_+(v-_)*G);x(H),ae!==k.current&&(k.current=ae,i(o.name,ae))}function K(){const G=o.sliderRecenter??"none";a||G==="none"||W(Sh(G)/100)}return f.jsx("div",{ref:h,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:G=>{a||(G.preventDefault(),G.currentTarget.setPointerCapture(G.pointerId),I(G))},onPointerMove:G=>{G.buttons!==0&&I(G)},onPointerUp:K,onPointerCancel:K,onLostPointerCapture:K,children:f.jsx(u_,{name:o.name,rotation:R,width:u,height:d,value:y,showEnds:!0,lowLabel:String(_),highLabel:String(v)})})}function Sh(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function kh(o,a,c){return c===a?0:Math.max(0,Math.min(100,Math.round((o-a)/(c-a)*100)))}function Nh(o,a,c){return Math.round(a+(c-a)*(o+1)/2)}function Rh(o,a){return o==="bottom"?a?1:-1:o==="top"?a?-1:1:0}function Mh(o){return{nx:Rh(o.joystickXRecenter,!1),ny:Rh(o.joystickYRecenter,!0)}}function f_(o,a){const c=Math.min(o,a),i=Math.max(6,c*.16),u=Math.max(1,c/2-i-2);return{knobRadius:i,reach:u}}function d_({control:o,width:a,height:c,pos:i,dragging:u=!1}){const d=o.rotation,{knobRadius:h,reach:_}=f_(a,c),v=Math.max(7,Math.min(14,h*.62)),y=Math.max(7,Math.min(12,Math.min(a,c)*.1)),x=[{key:"xmax",value:o.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:o.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:o.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:o.joystickYMin??-100,lx:0,ly:1}];return f.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[f.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:_*2,height:_*2,transform:"translate(-50%, -50%)"}}),x.map(k=>{const R=Kl(k.lx,k.ly,d);return f.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:y,transform:`translate(-50%, -50%) translate(${R.x*_}px, ${R.y*_}px) rotate(${d}deg)`},children:k.value},k.key)}),f.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:h*2,height:h*2,fontSize:v,transform:`translate(calc(-50% + ${i.nx*_}px), calc(-50% + ${i.ny*_}px))`,transition:u?"none":"transform 0.12s ease-out"},children:f.jsx("span",{style:{display:"inline-block",transform:o.rotation?`rotate(${o.rotation}deg)`:void 0,whiteSpace:o.rotation===90||o.rotation===270?"nowrap":void 0},children:o.name})})]})}function _b({control:o,disabled:a,onJoystick:c,width:i,height:u}){const d=o.rotation,h=L.useRef(null),[_,v]=L.useState(()=>{const H=Mh(o),ae=Kl(H.nx,H.ny,d);return{nx:ae.x,ny:ae.y}}),y=L.useRef(!1),x=L.useRef(null),k=o.joystickXMin??-100,R=o.joystickXMax??100,$=o.joystickYMin??-100,I=o.joystickYMax??100;function W(H,ae){const re=Kl(H,ae,Lo(d)),se=Nh(re.x,k,R),_e=Nh(-re.y,$,I);(!x.current||x.current.x!==se||x.current.y!==_e)&&(x.current={x:se,y:_e},c(o.name,se,_e))}function K(H){const ae=h.current;if(!ae)return;const re=ae.getBoundingClientRect(),{reach:se}=f_(re.width,re.height);let _e=(H.clientX-(re.left+re.width/2))/se,le=(H.clientY-(re.top+re.height/2))/se;const J=Math.hypot(_e,le);J>1&&(_e/=J,le/=J),v({nx:_e,ny:le}),W(_e,le)}function G(){const H=o.joystickXRecenter??"middle",ae=o.joystickYRecenter??"middle";if(H==="none"&&ae==="none")return;const re=Kl(_.nx,_.ny,Lo(d)),se=Mh(o),_e={x:H==="none"?re.x:se.nx,y:ae==="none"?re.y:se.ny},le=Kl(_e.x,_e.y,d),J={nx:le.x,ny:le.y};y.current=!1,v(J),W(J.nx,J.ny)}return f.jsx("div",{ref:h,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:H=>{a||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),y.current=!0,K(H))},onPointerMove:H=>{a||!y.current||H.buttons===0||K(H)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:f.jsx(d_,{control:o,width:i,height:u,pos:_,dragging:y.current})})}const gb=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],bb="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",yb=.1,vb={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},xb={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},wb=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Rf(o,a){return Math.hypot(o,a)<yb?null:Math.abs(o)>=Math.abs(a)?o>0?"right":"left":a>0?"down":"up"}function Eb(o,a){const[c,i]=xb[o],u=Kl(c,i,Lo(a));return Rf(u.x,u.y)??o}function m_({control:o,active:a=null}){const c=o.rotation;return f.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:f.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[gb.map(i=>f.jsx("path",{className:`dpad-arm ${a===i.direction?"active":""}`,transform:`rotate(${i.rotate} 50 50)`,d:bb},i.direction)),wb.map(i=>f.jsx("text",{className:`dpad-label ${a===i.pos?"active":""}`,x:i.x,y:i.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${i.x} ${i.y})`:void 0,children:vb[Eb(i.pos,c)]},i.pos))]})})}function Sb({control:o,disabled:a,onDpad:c}){const i=L.useRef(null),u=L.useRef(null),d=L.useRef(!1),[h,_]=L.useState(null);function v(R){const $=i.current;if(!$)return{screen:null,logical:null};const I=$.getBoundingClientRect(),W=Math.min(I.width,I.height)/2,K=(R.clientX-(I.left+I.width/2))/W,G=(R.clientY-(I.top+I.height/2))/W,H=Rf(K,G),ae=Kl(K,G,Lo(o.rotation)),re=Rf(ae.x,ae.y);return{screen:H,logical:re}}function y(R){const $=i.current;if(!$)return!1;const I=$.getBoundingClientRect(),W=(R.clientX-I.left)/I.width,K=(R.clientY-I.top)/I.height;return W>=0&&W<=1&&K>=0&&K<=1}function x(R){R.logical!==u.current&&(u.current&&c(o.name,u.current,!1),u.current=R.logical,R.logical&&c(o.name,R.logical,!0)),_(R.screen)}function k(){d.current=!1,x({screen:null,logical:null})}return f.jsx("div",{ref:i,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:R=>{a||!y(R)||(R.preventDefault(),R.currentTarget.setPointerCapture(R.pointerId),d.current=!0,x(v(R)))},onPointerMove:R=>{a||!d.current||R.buttons===0||x(v(R))},onPointerUp:k,onPointerCancel:k,onLostPointerCapture:k,children:f.jsx(m_,{control:o,active:h})})}const kb={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},Nb=["button","slider","toggle","radar","text","joystick","dpad"];function Rb({unplaced:o,onAdd:a,onClose:c}){const i=L.useMemo(()=>Nb.filter(_=>o.some(v=>v.type===_)),[o]),[u,d]=L.useState(i[0]??"button"),h=o.filter(_=>_.type===u);return L.useEffect(()=>{i.length>0&&!i.includes(u)&&d(i[0])},[i,u]),f.jsxs(En,{title:"Tilføj kontrol",onClose:c,children:[i.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:i.map(_=>f.jsx("button",{type:"button",className:u===_?"active":"",onClick:()=>d(_),children:kb[_]},_))}),f.jsx("div",{className:"add-lists",children:i.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):h.map(_=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>a(_.name),children:[f.jsx("span",{children:_.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(Kn,{name:"plus",size:22})})]},_.name))})]})}function p_(o){const[a,c]=L.useState({w:0,h:0}),i=L.useRef(null),u=L.useRef(null);return L.useLayoutEffect(()=>{var v;const d=o.current;if(i.current===d)return;if((v=u.current)==null||v.disconnect(),u.current=null,i.current=d,!d){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const h=()=>{const y={w:d.clientWidth,h:d.clientHeight};c(x=>x.w===y.w&&x.h===y.h?x:y)};h();const _=new ResizeObserver(h);_.observe(d),u.current=_}),L.useEffect(()=>()=>{var d;(d=u.current)==null||d.disconnect(),u.current=null,i.current=null},[]),a}function Ga(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const Mb=4,Tb=5;function jb(o){return o==="joystick"||o==="dpad"?{spanX:6,spanY:6}:{spanX:Mb,spanY:Tb}}function Th(o){if(!Ga(o))return null;const a=o.centerX2/2,c=o.centerY2/2;return{x0:a-o.spanX/2,x1:a+o.spanX/2,y0:c-o.spanY/2,y1:c+o.spanY/2}}function Ab(o,a,c=.02){return o.x0<a.x1-c&&a.x0<o.x1-c&&o.y0<a.y1-c&&a.y0<o.y1-c}function jh(o,a){const c=Ji(o,a);if(!c||o.spanX===null||o.spanY===null)return o;const i=jo(c.cx,c.cy,o.spanX,o.spanY,a);return{...o,centerX2:i.centerX2,centerY2:i.centerY2}}function Ah(o,a){return Math.max(1,Math.min(a.cols-1,o))}function Dh(o,a){return Math.max(1,Math.min(a.rows-1,o))}function Db(){const o=ne(T=>T.layout),a=ne(T=>T.active),c=ne(T=>T.saveLayout),i=ne(T=>T.setEditMode),u=ne(T=>T.askConfirm),d=!!(a!=null&&a.canEdit),[h,_]=L.useState(()=>o.map(T=>({...T}))),[v,y]=L.useState(null),[x,k]=L.useState(!1),[R,$]=L.useState(null),[I,W]=L.useState(null),[K,G]=L.useState(!1),H=L.useRef(null),ae=p_(H),re=ae.w>0&&ae.h>0,se=n_(ae.w,ae.h,a==null?void 0:a.gridCols,a==null?void 0:a.gridRows),_e=L.useMemo(()=>re?N0(se):[],[se,re]),le=h.filter(Ga),J=h.filter(T=>!Ga(T)),xe=L.useMemo(()=>{const T=new Set;for(let F=0;F<le.length;F+=1)for(let Z=F+1;Z<le.length;Z+=1){const X=Th(le[F]),Be=Th(le[Z]);X&&Be&&Ab(X,Be)&&(T.add(le[F].name),T.add(le[Z].name))}return T},[le]),be=xe.size>0,we=h.find(T=>T.name===v)??null,ie=L.useMemo(()=>Oh(h)!==Oh(o),[h,o]),Te=L.useMemo(()=>{if(!R||!I)return null;const T=h.find(X=>X.name===R);if(!T||T.spanX===null||T.spanY===null)return null;const F=jo(I.cx,I.cy,T.spanX,T.spanY,se),Z=Ji({...T,centerX2:F.centerX2,centerY2:F.centerY2},se);return Z?{name:T.name,rect:Z}:null},[h,R,I,se]);function Oe(T,F){_(Z=>Z.map(X=>X.name===T?F(X):X))}function Ge(T,F){T.stopPropagation(),y(F.name);const Z=Ji(F,se);Z&&($(F.name),W({cx:Z.cx,cy:Z.cy}),T.currentTarget.setPointerCapture(T.pointerId))}function B(T){if(!R)return;const F=H.current;if(!F)return;const Z=F.getBoundingClientRect(),X=F.clientWidth/Z.width,Be=F.clientHeight/Z.height;W({cx:Math.max(0,Math.min(F.clientWidth,(T.clientX-Z.left)*X)),cy:Math.max(0,Math.min(F.clientHeight,(T.clientY-Z.top)*Be))})}function Q(){if(R&&I){const T=h.find(F=>F.name===R);if(T&&T.spanX!==null&&T.spanY!==null){const F=jo(I.cx,I.cy,T.spanX,T.spanY,se);Oe(R,Z=>({...Z,centerX2:F.centerX2,centerY2:F.centerY2}))}}$(null),W(null)}function ce(T){Oe(T,F=>F.spanX===null||F.spanY===null?{...F,rotation:(F.rotation+270)%360}:jh({...F,rotation:(F.rotation+270)%360,spanX:Ah(F.spanY,se),spanY:Dh(F.spanX,se)},se))}function Ee(T,F,Z){Oe(T,X=>{if(X.spanX===null||X.spanY===null)return X;const Be=F==="x"?Ah(X.spanX+Z,se):X.spanX,je=F==="y"?Dh(X.spanY+Z,se):X.spanY;return jh({...X,spanX:Be,spanY:je},se)})}function oe(T){Oe(T,F=>({...F,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function S(T){k(!1);const F=h.find(je=>je.name===T);if(!F)return;const{spanX:Z,spanY:X}=jb(F.type),Be=jo(se.areaW/2,se.areaH/2,Z,X,se);Oe(T,()=>({...F,spanX:Z,spanY:X,rotation:0,centerX2:Be.centerX2,centerY2:Be.centerY2})),y(T)}async function U(){be||(G(!0),await c(h),G(!1))}function ee(){if(!ie){i(!1);return}u({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>i(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:we&&Ga(we)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:T=>T.stopPropagation(),children:[f.jsx(Fi,{label:"⟲",title:"Roter",onClick:()=>ce(we.name)}),f.jsx(Fi,{label:"W−",title:"Gør smallere",onClick:()=>Ee(we.name,"x",-1),disabled:we.spanX===null||we.spanX<=1}),f.jsx(Fi,{label:"W+",title:"Gør bredere",onClick:()=>Ee(we.name,"x",1),disabled:we.spanX===null||we.spanX>=se.cols-1}),f.jsx(Fi,{label:"H−",title:"Gør lavere",onClick:()=>Ee(we.name,"y",-1),disabled:we.spanY===null||we.spanY<=1}),f.jsx(Fi,{label:"H+",title:"Gør højere",onClick:()=>Ee(we.name,"y",1),disabled:we.spanY===null||we.spanY>=se.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>oe(we.name),"aria-label":"Slet",children:f.jsx(Kn,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:H,style:{touchAction:"none"},onPointerMove:B,onPointerUp:Q,onPointerDown:()=>y(null),children:re&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:se.areaW,height:se.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:_e.map((T,F)=>f.jsx("circle",{cx:T.x,cy:T.y,r:2.5,fill:"rgba(198,80,78,0.45)"},F))}),Te&&f.jsx("div",{className:"snap-preview",style:{left:Te.rect.cx,top:Te.rect.cy,width:Te.rect.width,height:Te.rect.height}}),le.map(T=>{const F=R===T.name&&I,Z=Ji(T,se);if(!Z)return null;const X=F?I.cx:Z.cx,Be=F?I.cy:Z.cy,je={left:X,top:Be,width:Z.width,height:Z.height,outline:v===T.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${xe.has(T.name)?"colliding":""}`,style:je,onPointerDown:In=>Ge(In,T),children:T.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:f.jsx(Bo,{name:T.name,width:Z.width,height:Z.height,rotation:T.rotation})}):T.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:f.jsx(Bo,{name:T.name,width:Z.width,height:Z.height,rotation:T.rotation})}):T.type==="radar"?f.jsx(o_,{control:T,pings:[],width:Z.width,height:Z.height,preview:!0}):T.type==="text"?f.jsx(s_,{message:T.name,width:Z.width,height:Z.height,rotation:T.rotation}):T.type==="joystick"?f.jsx(d_,{control:T,width:Z.width,height:Z.height,pos:{nx:0,ny:0}}):T.type==="dpad"?f.jsx(m_,{control:T}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(u_,{name:T.name,rotation:T.rotation,width:Z.width,height:Z.height,value:50,showEnds:!0,lowLabel:String(T.sliderMin??0),highLabel:String(T.sliderMax??100),fillColor:xe.has(T.name)?"var(--disabled)":"var(--red)"})})},T.name)}),d&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:T=>T.stopPropagation(),onClick:()=>k(!0),"aria-label":"Tilføj kontrol",children:f.jsx(Kn,{name:"plus",size:24})}),K&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:ee,disabled:K,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:U,disabled:be||K,children:K?"Gemmer...":"Gem"})]}),x&&f.jsx(Rb,{unplaced:J,onAdd:S,onClose:()=>k(!1)})]})}function Oh(o){return JSON.stringify(o.map(a=>({type:a.type,name:a.name,centerX2:a.centerX2,centerY2:a.centerY2,spanX:a.spanX,spanY:a.spanY,rotation:a.rotation})))}function Fi({label:o,title:a,disabled:c,onClick:i}){return f.jsx("button",{type:"button","aria-label":a,title:a,disabled:c,onClick:i,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function Ob(){const o=ne(H=>H.layout),a=ne(H=>H.editMode),c=ne(H=>H.active),i=ne(H=>H.sliderValues),u=ne(H=>H.toggleValues),d=ne(H=>H.radarPings),h=ne(H=>H.textValues),_=ne(H=>H.toggleSideMenu),v=ne(H=>H.sendButton),y=ne(H=>H.sendSlider),x=ne(H=>H.sendToggle),k=ne(H=>H.sendJoystick),R=ne(H=>H.sendDpad),$=L.useRef(null),I=p_($),W=n_(I.w,I.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),K=I.w>0&&I.h>0,G=o.filter(Ga);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(Gf,{title:"Kontrol Panel",onMenu:()=>_()}),a?f.jsx(Db,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:$,children:K?G.map(H=>{const ae=Ji(H,W);return ae?f.jsx(tb,{control:H,rect:ae,disabled:!1,latestValue:H.type==="slider"?i[H.name]:void 0,toggleValue:H.type==="toggle"?u[H.name]:void 0,radarPings:H.type==="radar"?d[H.name]:void 0,textValue:H.type==="text"?h[H.name]:void 0,onButton:v,onSlider:y,onToggle:x,onJoystick:k,onDpad:R},H.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const Cb="",Ch="",Lh="",Xl="";function Ki(o){return new Promise(a=>setTimeout(a,o))}class Lb{constructor(a){this.transport=a}async interrupt(){await this.transport.write(Lh),await Ki(80),await this.transport.write(Lh)}async friendlyRepl(){await this.transport.write(Ch)}async softReset(){await this.transport.write(Xl)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(a,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await Ki(180)}),await Ki(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(a)}).read())`)}async sendFriendlyLine(a){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(a)}async sendProgramInput(a){await this.transport.writeLine(a)}async enterRawRepl(a=2500){if(await this.interrupt(),await Ki(80),await this.transport.write(`\r
`),await Ki(40),!(await this.collectUntil(async()=>{await this.transport.write(Cb)},i=>i.includes("raw REPL")||i.includes("raw REPL; CTRL-B to exit"),a)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(a,c=6e3){await this.enterRawRepl();const i=await this.collectUntil(async()=>{await this.transport.write(a),a.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Xl)},u=>u.includes(`${Xl}${Xl}`)||u.includes(`${Xl}>`),c);return await this.friendlyRepl().catch(()=>{}),Bb(i)}collectUntil(a,c,i){return new Promise((u,d)=>{let h="",_=null;const v=setTimeout(()=>{_==null||_(),d(new Error("Timeout ved USB REPL kommando."))},i);_=this.transport.addDataListener(y=>{h+=y,c(h)&&(clearTimeout(v),_==null||_(),u(h))}),a().catch(y=>{clearTimeout(v),_==null||_(),d(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(a=1600){await this.collectUntil(async()=>{await this.transport.write(Ch)},c=>/(^|\r?\n)>>> ?$/.test(c),a)}}function Bb(o){const a=o.indexOf("OK"),c=o.indexOf(Xl,a>=0?a:0),i=c>=0?o.indexOf(Xl,c+1):-1;if(a<0||c<0)return{output:o.trim(),error:"",raw:o};const u=o.slice(a+2,c).replace(/^\r?\n/,"").trimEnd(),d=i>=0?o.slice(c+1,i).trim():"";return{output:u,error:d,raw:o}}const zb=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Ub=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],fl=Ub.flatMap(({board:o,firmwareName:a})=>zb.map(({version:c,date:i,stamp:u,tag:d})=>{const h=`${a}-${u}-${d}.uf2`;return{board:o,version:c,date:i,fileName:h,url:`https://micropython.org/resources/firmware/${h}`}})),bf=512,yf=`import builtins as _pkp_builtins
`;function Tr(o){return JSON.stringify(o)}function Hb(o){return`bytes.fromhex(${JSON.stringify([...o].map(a=>a.toString(16).padStart(2,"0")).join(""))})`}function Vb(o,a){return`${o==="/"?"":o.replace(/\/$/,"")}/${a}`}class Gb{constructor(a){this.repl=a}async list(a="/"){const c=`
import os
base = ${Tr(a)}
for name in os.listdir(base):
    p = (${Tr(a)}.rstrip('/') + '/' + name) if ${Tr(a)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,i=await this.repl.exec(c);if(i.error)throw new Error(i.error);return i.output.split(/\r?\n/).map(u=>u.trim()).filter(Boolean).map(u=>{const[d,h,_]=u.split("	"),v=h==="dir"||h==="file"?h:"unknown",y=parseInt(_??"",10);return{name:d,path:Vb(a,d),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(a){const c=`
import sys
${yf}with _pkp_builtins.open(${Tr(a)}, 'rb') as f:
    while True:
        b = f.read(${bf})
        if not b:
            break
        print(b.hex())
`,i=await this.repl.exec(c,1e4);if(i.error)throw new Error(i.error);const u=i.output.replace(/\s+/g,"");return new TextDecoder().decode(Yb(u))}async writeText(a,c,i){const u=new TextEncoder().encode(c);if(i==null||i(5,"Klargør fil..."),await this.repl.exec(`${yf}_pkp_builtins.open(${Tr(a)}, 'wb').close()`),u.length===0){i==null||i(100,"Gemt på Pico");return}for(let d=0;d<u.length;d+=bf){const h=u.slice(d,d+bf),_=`
${yf}with _pkp_builtins.open(${Tr(a)}, 'ab') as f:
    f.write(${Hb(h)})
`,v=await this.repl.exec(_,1e4);if(v.error)throw new Error(v.error);const y=Math.min(d+h.length,u.length);i==null||i(10+Math.round(y/u.length*85),`Gemmer ${y}/${u.length} bytes...`)}i==null||i(100,"Gemt på Pico")}async replaceTextSafely(a,c,i,u={}){const d=`${a}.tmp`;if(await this.writeText(d,c,(v,y)=>i==null?void 0:i(Math.min(70,v*.7),y)),i==null||i(78,"Verificerer fil..."),await this.readText(d)!==c)throw await this.delete(d).catch(()=>{}),new Error(`Verificering fejlede for ${a}.`);i==null||i(88,"Udskifter fil...");let _=!!u.createBackup;if(_){const v=await this.readText(a).catch(()=>null);_=v!==null&&v!==c}if(_){const v=await this.nextBackupPath(a).catch(()=>`${a}.backup`);await this.rename(a,v).catch(()=>{})}else await this.delete(a).catch(()=>{});await this.rename(d,a),i==null||i(100,"Installeret på Pico")}async delete(a){const c=await this.repl.exec(`
import os
os.remove(${Tr(a)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(a){const c=await this.list("/"),i=new Set(c.map(k=>k.path.toLowerCase())),u=a.replace(/\\/g,"/"),d=u.lastIndexOf("/"),h=d>=0?u.slice(0,d+1):"/",_=d>=0?u.slice(d+1):u.replace(/^\/+/,""),v=_.lastIndexOf("."),y=v>0?_.slice(0,v):_,x=v>0?_.slice(v):"";for(let k=1;k<1e3;k+=1){const R=`${h}${y}_backup${k}${x}`;if(!i.has(R.toLowerCase()))return R}return`${h}${y}_backup${Date.now()}${x}`}async rename(a,c){const i=await this.repl.exec(`
import os
os.rename(${Tr(a)}, ${Tr(c)})
`);if(i.error)throw new Error(i.error)}}function Yb(o){const a=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<a.length;c+=1)a[c]=parseInt(o.slice(c*2,c*2+2),16);return a}const Ib=`import ubluetooth\r
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
                self._send_reliable_stream(["owned,{},{},{},{},{},{}".format(\r
                    self.owner_id,\r
                    int(self.icon_id),\r
                    int(self.can_others_connect),\r
                    int(self.can_others_edit),\r
                    int(self.can_others_edit_code),\r
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
`,qb=`from machine import Pin, time_pulse_us\r
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
        return cms`,Pb=`import array, time\r
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
`,$b=`from machine import Pin
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
`,Xb=`from machine import Pin
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
`,Fb=`from machine import Pin
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
`,Kb=`# PicoFly.py\r
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
`,Qb=`import machine\r
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
        self.initPCA()`,Zb=`from machine import Pin\r
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
`,Wb=`from machine import Pin\r
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
`,Jb=`from machine import Pin, PWM, ADC\r
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
`,ey=`from machine import Pin\r
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
`,za=[{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",content:Fb},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:Wb},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:ey},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",content:Xb},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",content:$b},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:Zb},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:Jb},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:Ib},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:Qb},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:Kb},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:qb},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:Pb}],ny=11914;function ty(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function ry(){return ty()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class ly{constructor(a={}){fe(this,"port",null);fe(this,"reader",null);fe(this,"writer",null);fe(this,"readLoopDone",null);fe(this,"readLoopActive",!1);fe(this,"disconnecting",!1);fe(this,"buffer","");fe(this,"events");fe(this,"dataListeners",new Set);this.events=a}get connected(){return!!this.port&&!!this.writer}get info(){var a;return((a=this.port)==null?void 0:a.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const a=await navigator.serial.requestPort({filters:[{usbVendorId:ny}]});await this.openPort(a)}async connectKnownPort(a){await this.openPort(a)}async disconnect(){var v,y;const a=this.connected||!!this.port||!!this.reader,c=this.port,i=this.reader,u=this.writer,d=this.readLoopDone,h=i==null?void 0:i.closed.catch(()=>{}),_=u==null?void 0:u.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(i==null?void 0:i.cancel())}catch{}d&&await d.catch(()=>{}),await h;try{i==null||i.releaseLock()}catch{}this.reader===i&&(this.reader=null);try{await(u==null?void 0:u.close()),await _}catch{try{await(u==null?void 0:u.abort("disconnect"))}catch{}}try{u==null||u.releaseLock()}catch{}this.writer===u&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===d&&(this.readLoopDone=null),this.disconnecting=!1,a&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(a){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(a))}async writeLine(a){await this.write(`${a}\r
`)}addDataListener(a){return this.dataListeners.add(a),()=>this.dataListeners.delete(a)}async openPort(a){var i,u,d;if(await this.disconnect().catch(()=>{}),await a.open({baudRate:115200,bufferSize:4096}),this.port=a,this.writer=((i=a.writable)==null?void 0:i.getWriter())??null,!this.writer||!a.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=a.getInfo();(d=(u=this.events).onLog)==null||d.call(u,"success",`USB-forbindelse oprettet (${ay(c)}).`),this.readLoopDone=this.startReadLoop(a)}async startReadLoop(a){var u,d,h;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((u=a.readable)==null?void 0:u.getReader())??null;const i=this.reader;if(i)try{for(;this.readLoopActive;){const{value:_,done:v}=await i.read();if(v)break;_&&this.consumeText(c.decode(_,{stream:!0}))}}catch(_){this.readLoopActive&&((h=(d=this.events).onLog)==null||h.call(d,"error",_ instanceof Error?_.message:"USB-læsning stoppede."))}finally{try{i.releaseLock()}catch{}this.reader===i&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===a&&this.closeAfterUnexpectedReadEnd(a)}}async closeAfterUnexpectedReadEnd(a){var d,h;const c=this.connected||this.port===a;this.disconnecting=!0,this.readLoopActive=!1;const i=this.writer,u=i==null?void 0:i.closed.catch(()=>{});try{await(i==null?void 0:i.close()),await u}catch{try{await(i==null?void 0:i.abort("disconnect"))}catch{}}try{i==null||i.releaseLock()}catch{}this.writer===i&&(this.writer=null);try{await a.close()}catch{}this.port===a&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((h=(d=this.events).onDisconnect)==null||h.call(d))}consumeText(a){var c,i,u,d;(i=(c=this.events).onData)==null||i.call(c,a);for(const h of this.dataListeners)h(a);for(this.buffer+=a;this.buffer.includes(`
`);){const h=this.buffer.indexOf(`
`),_=this.buffer.slice(0,h).replace(/\r$/,"");this.buffer=this.buffer.slice(h+1),(d=(u=this.events).onLine)==null||d.call(u,_)}}}function ay(o){const a=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${a}, ${c}`}const h_=15e3,Bh=64*1024,zh=1e5,__=new URL("/micropython/micropython.mjs",window.location.origin).toString(),iy=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class sy{constructor(){fe(this,"worker",null);fe(this,"pending",null);fe(this,"nextId",0)}send(a,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const i=++this.nextId,u=c.timeoutMs??h_,d=this.ensureWorker();return new Promise(h=>{const _=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},u);this.pending={id:i,timer:_,onOutput:c.onOutput,resolve:h},d.postMessage({type:"run",id:i,code:cy(a),runtimeUrl:__})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var a;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(a=this.worker)==null||a.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const a=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return a.onmessage=c=>this.handleMessage(c.data),a.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=a,a}handleMessage(a){var i;const c=this.pending;if(!(!c||a.id!==c.id||a.type==="ready")){if(a.type==="stdout"){(i=c.onOutput)==null||i.call(c,a.text);return}if(a.type==="unavailable"){this.finish({ok:!1,output:"",error:a.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:a.ok,output:a.output,error:a.error,timedOut:!1,unavailable:!1})}}finish(a){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(a))}restartWorker(){var a;(a=this.worker)==null||a.terminate(),this.worker=null}}class oy{constructor(){fe(this,"worker",null);fe(this,"pending",null);fe(this,"nextId",0)}run(a,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const i=typeof c=="number"?c:c.timeoutMs??h_,u=typeof c=="number"?void 0:c.onOutput,d=typeof c=="number"?void 0:c.signal,h=Mf(a,{allowInput:!0});if(h.some(y=>y.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1});const _=++this.nextId,v=this.ensureWorker();return new Promise(y=>{const x=I=>this.finish(I),k=()=>{v.postMessage({type:"stop",id:_}),x({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1})},R=window.setTimeout(()=>{x({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:h,timedOut:!0,unavailable:!1}),this.restartWorker()},i);if(this.pending={id:_,timer:R,issues:h,onOutput:u,signal:d,abort:k,resolve:y},d!=null&&d.aborted){k();return}d==null||d.addEventListener("abort",k,{once:!0});const $={type:"run",id:_,code:a,runtimeUrl:__,interactive:!0};v.postMessage($)})}sendInput(a){const c=this.pending;!c||!this.worker||this.worker.postMessage({type:"stdin",id:c.id,text:a})}stop(){const a=this.pending;!a||!this.worker||(this.worker.postMessage({type:"stop",id:a.id}),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:a.issues,timedOut:!1,unavailable:!1}),this.restartWorker())}dispose(){var a;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(a=this.worker)==null||a.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const a=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return a.onmessage=c=>this.handleMessage(c.data),a.onerror=c=>{const i=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(i==null?void 0:i.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=a,a}handleMessage(a){var i;const c=this.pending;if(!(!c||a.id!==c.id||a.type==="ready")){if(a.type==="stdout"){(i=c.onOutput)==null||i.call(c,a.text);return}if(a.type==="unavailable"){this.finish({ok:!1,output:"",error:a.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:a.ok,output:a.output,error:a.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(a){var i;const c=this.pending;c&&(window.clearTimeout(c.timer),(i=c.signal)==null||i.removeEventListener("abort",c.abort),this.pending=null,c.resolve(a))}restartWorker(){var a;(a=this.worker)==null||a.terminate(),this.worker=null}}function cy(o){const a=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${a})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${a})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Mf(o,a={}){const c=[],i=new Blob([o]).size;i>Bh&&c.push({level:"error",text:`Koden er ${i} bytes. Offline MicroPython kører kun små programmer op til ${Bh} bytes.`});const u=o.split(/\r?\n/);for(let d=0;d<u.length;d+=1){const h=d+1,_=zo(u[d]).trim();if(!_)continue;const v=fy(_);v&&iy.has(v)&&c.push({level:"error",line:h,text:`${v} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!a.allowInput&&uy(u[d])&&c.push({level:"error",line:h,text:"input() virker kun, når koden kører på Pico via USB. Forbind Pico med USB, gem filen på Picoen, og kør koden derfra."});const y=_.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&dy(y)>zh&&c.push({level:"error",line:h,text:`range(...) er for stor til offline kørsel. Brug højst ${zh} gentagelser.`})}for(const d of my(u))c.push({level:"warning",text:`Funktionen ${d} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function zo(o){let a=null;for(let c=0;c<o.length;c+=1){const i=o[c];if((i==='"'||i==="'")&&o[c-1]!=="\\"&&(a=a===i?null:a??i),i==="#"&&!a)return o.slice(0,c)}return o}function uy(o){const a=zo(o);let c=null;for(let i=0;i<a.length;i+=1){const u=a[i];if((u==='"'||u==="'")&&a[i-1]!=="\\"){c=c===u?null:c??u;continue}if(!c&&!(!Uh(a[i-1])||a.slice(i,i+5)!=="input")&&Uh(a[i+5])&&a.slice(i+5).trimStart().startsWith("("))return!0}return!1}function Uh(o){return!o||!/[A-Za-z0-9_]/.test(o)}function fy(o){const a=o.match(/^import\s+([A-Za-z_]\w*)/);if(a)return a[1];const c=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Hh(o){const a=o.match(/^\s*/);return(a==null?void 0:a[0].replace(/\t/g,"    ").length)??0}function dy(o){const a=Number(o[1]),c=o[2]===void 0?void 0:Number(o[2]),i=o[3]===void 0?1:Number(o[3]);if(i===0)return Number.POSITIVE_INFINITY;const h=(c===void 0?a:c)-(c===void 0?0:a);return h>0&&i<0||h<0&&i>0?0:Math.ceil(Math.abs(h/i))}function my(o){const a=new Set;for(let c=0;c<o.length;c+=1){const i=zo(o[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!i)continue;const u=i[1],d=Hh(o[c]);for(let h=c+1;h<o.length;h+=1){if(!o[h].trim())continue;if(Hh(o[h])<=d)break;if(new RegExp(`\\b${u}\\s*\\(`).test(zo(o[h]))){a.add(u);break}}}return[...a]}const py=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function hy(o,a){var x;const c=o.trim(),i=a.split(/\r?\n/),u=_y(c),d=u?i[u-1]??"":"",h=gy(i,u),_=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(_))return{simple:"Programmet blev stoppet.",technical:c,line:u};if(/MemoryError/.test(_))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/RecursionError/.test(_))return{simple:`En funktion kalder sig selv for mange gange${u?` omkring linje ${u}`:""}.`,technical:c,line:u};const v=_.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${u?` på linje ${u}`:""}.`,technical:c,line:u};const y=_.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:xy(d,y[1])?`Teksten ${y[1]} mangler måske citationstegn${u?` på linje ${u}`:""}.`:`Python kender ikke navnet ${y[1]}${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ZeroDivisionError/.test(_))return{simple:`Kan ikke dividere med 0${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError:\s+unexpected indent/.test(_))return{simple:`Der er for meget indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError/.test(_))return{simple:`Mangler indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ImportError|ModuleNotFoundError/.test(_)){const k=(x=_.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${k?` ${k}`:""}.`,technical:c,line:u}}if(/OSError/.test(_))return/ENOENT|No such file|Errno\s+2/.test(_)?{simple:`Python kan ikke finde filen${u?` på linje ${u}`:""}.`,technical:c,line:u}:/EACCES|permission|denied/i.test(_)?{simple:`Python har ikke adgang til filen eller enheden${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Der opstod en fejl med en fil eller en enhed${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/SyntaxError/.test(_)){if(/invalid syntax/.test(_)&&h.text.trim().endsWith(","))return{simple:`Linje ${h.line??u} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:h.line??u};const k=Tf(d,u)??Tf(h.text,h.line)??by(i,u);return k?{simple:`Mangler måske : efter linje ${k.line}.`,technical:c,line:k.line}:u&&h.text.trim().endsWith(":")&&d.trim()&&!/^\s+/.test(d)?{simple:`Mangler måske indrykning på linje ${u}.`,technical:c,line:u}:vy(d)?{simple:`Tekst mangler måske citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:yy(d)?{simple:`Tekst mangler måske et afsluttende citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:wy(d)?{simple:`Mangler måske en afsluttende parentes${u?` på linje ${u}`:""}.`,technical:c,line:u}:Ey(d)?{simple:`Der er måske en parentes for meget${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en syntaksfejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}return/TypeError/.test(_)?/takes .* positional arguments? but .* given/.test(_)||/function takes/.test(_)?{simple:`En funktion får for mange eller for få værdier${u?` på linje ${u}`:""}.`,technical:c,line:u}:/unsupported operand type/.test(_)?{simple:`To værdier kan ikke bruges sammen på den måde${u?` på linje ${u}`:""}.`,technical:c,line:u}:/not callable/.test(_)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`En værdi har den forkerte type${u?` på linje ${u}`:""}.`,technical:c,line:u}:/IndexError/.test(_)?{simple:`Listen har ikke et element på den plads${u?` på linje ${u}`:""}.`,technical:c,line:u}:/KeyError/.test(_)?{simple:`Ordbogen mangler den nøgle${u?` på linje ${u}`:""}.`,technical:c,line:u}:/AttributeError/.test(_)?{simple:`Den ting har ikke den kommando${u?` på linje ${u}`:""}.`,technical:c,line:u}:/ValueError/.test(_)?/invalid literal for int/.test(_)?{simple:`Teksten kan ikke laves om til et heltal${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Værdien passer ikke her${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en fejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}function _y(o){var u;const c=(u=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:u[1];if(!c)return;const i=parseInt(c,10);return Number.isFinite(i)&&i>0?i:void 0}function gy(o,a){if(!a)return{text:""};for(let c=a-2;c>=0;c-=1){const i=o[c]??"";if(i.trim())return{line:c+1,text:i}}return{text:""}}function Tf(o,a){if(!a)return null;const c=o.trim();return!py.test(c)||c.endsWith(":")?null:{line:a}}function by(o,a){const c=a?Math.min(o.length,a):o.length,i=Math.max(0,c-4);for(let u=c-1;u>=i;u-=1){const d=Tf(o[u]??"",u+1);if(d)return d}return null}function yy(o){const a=(o.match(/'/g)??[]).length,c=(o.match(/"/g)??[]).length;return a%2===1||c%2===1}function vy(o){var i,u;const c=(u=(i=o.trim().match(/^print\((.+)\)$/))==null?void 0:i[1])==null?void 0:u.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function xy(o,a){const c=o.trim();return!!a&&/[A-Za-zæøåÆØÅ]/.test(a)&&(c.startsWith("print(")||c.includes(`= ${a}`))}function wy(o){return g_(o)>0}function Ey(o){return g_(o)<0}function g_(o){let a=0,c=null;for(let i=0;i<o.length;i+=1){const u=o[i];if((u==='"'||u==="'")&&o[i-1]!=="\\"){c=c===u?null:c??u;continue}c||((u==="("||u==="["||u==="{")&&(a+=1),(u===")"||u==="]"||u==="}")&&(a-=1))}return a}const jf="/min_kode.py",b_=`print('Hej fra Pico Kontrol Panel')
`,Qi="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function bt(o,a){return`${o}:${a}`}function Sy(o){return new Promise(a=>window.setTimeout(a,o))}function ky(){const o=ne(m=>m.toggleSideMenu),a=ne(m=>m.askConfirm),c=ne(m=>m.picoIdeOrigin),i=ne(m=>m.active),u=ne(m=>m.isBleConnected),d=ne(m=>m.bleListFiles),h=ne(m=>m.bleReadText),_=ne(m=>m.bleWriteText),v=ne(m=>m.bleDeleteFile),y=ne(m=>m.bleRestartAndReconnect),[x,k]=L.useState(!1),[R,$]=L.useState(!1),[I,W]=L.useState([]),[K,G]=L.useState(!1),[H,ae]=L.useState([]),[re,se]=L.useState(null),[_e,le]=L.useState(()=>xf(ff())),[J,xe]=L.useState(jf),[be,we]=L.useState("local"),[ie,Te]=L.useState(()=>{var m;return((m=xf(ff()).find(b=>b.path===jf))==null?void 0:m.content)??b_}),[Oe,Ge]=L.useState([]),[B,Q]=L.useState(!1),[ce,Ee]=L.useState(""),[oe,S]=L.useState(""),[U,ee]=L.useState(null),[T,F]=L.useState(!1),[Z,X]=L.useState(null),[Be,je]=L.useState(!1),[In,Pt]=L.useState({}),[ye,bn]=L.useState(!1),[Sn,Ce]=L.useState(0),[kn,Bt]=L.useState(()=>{var m,b;return((m=fl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:m.board)??((b=fl[0])==null?void 0:b.board)??""}),[zn,jr]=L.useState(()=>{var m,b;return((m=fl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:m.version)??((b=fl[0])==null?void 0:b.version)??""}),[Ar,vt]=L.useState(!1),[Ql,Dr]=L.useState({top:0,left:0}),[yn,dl]=L.useState(!1),[ml,Pa]=L.useState(!1),[pl,Qn]=L.useState(!0),[lt,$t]=L.useState(""),[Zl,hl]=L.useState([]),[vn,at]=L.useState(null),[Rn,Or]=L.useState(!1),[Cr,rr]=L.useState({}),[Xt,qn]=L.useState({}),[Ke,Mn]=L.useState(null),[mn,Un]=L.useState(null),[Io,$a]=L.useState(""),[Ft,_l]=L.useState(()=>ch().clearTerminalOnRun),[lr,ls]=L.useState(()=>ch().simplifiedErrors),[Wl,as]=L.useState(()=>typeof navigator<"u"?Ih(navigator):!1),Lr=L.useRef(null),xt=L.useRef(null),on=L.useRef(null),Xa=L.useRef(null),it=L.useRef(null),cn=L.useRef(null),un=L.useRef(null),Tn=L.useRef(!1),zt=L.useRef(!1),gl=L.useRef(!1),Ut=L.useRef(""),ar=L.useRef(null),Ht=L.useRef(null),Vt=L.useRef(null),Kt=L.useRef(null),Pn=L.useRef(null),Gt=L.useRef(null),Zn=L.useRef(0),Ze=L.useRef(null),ir=L.useRef(null),Fa=L.useRef(null),st=L.useRef(null),ot=ry(),he=c==="control"&&!!i&&u(),Jl=he?(i==null?void 0:i.deviceID)??"ble":null,is=Math.max(1,ie.split(`
`).length),qo=new Blob([ie]).size,ea=be==="pico"?"Picoen":"browseren",na=L.useMemo(()=>[...new Set(fl.map(m=>m.board))],[]),$n=L.useMemo(()=>fl.filter(m=>m.board===kn),[kn]),xn=fl.find(m=>m.board===kn&&m.version===zn)??$n[0]??fl[0],ct=be==="pico",Ka=ct?yn:ml,Hn=ct&&yn&&x&&!he||!ct&&ml&&!!Vt.current,ss=Rn||Ka&&!Hn,ta=Hn?"stdin":">>>",os=Hn?ct?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":ct?"Pico MicroPython":"Browser-MicroPython",Vn=L.useMemo(()=>{const m=new ly({onData:b=>{zt.current||!Tn.current||(Ut.current=(Ut.current+b).slice(-240),/(^|\r?\n)>>> ?$/.test(Ut.current)&&Za())},onLine:b=>{if(zt.current)return;const w=b.trimEnd();if(gl.current&&w.trim()){q("info",w);return}if(Tn.current&&cs(w)){Za();return}Tn.current&&w.trim()&&!Qa(w)&&!w.includes("raw REPL")&&q("info",w)},onLog:q,onDisconnect:()=>{k(!1),dl(!1),Or(!1),Tn.current=!1,gl.current=!1,wt(),Ut.current="",zr(),q("warning","USB-forbindelse lukket.")}});return Lr.current=m,m},[]);function q(m,b){W(w=>[...w.slice(-140),{level:m,text:b}])}function cs(m){return m.trim()===">>>"}function Qa(m){return m.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function wt(){ar.current!==null&&(window.clearTimeout(ar.current),ar.current=null)}function Za(){!Tn.current||ar.current!==null||(ar.current=window.setTimeout(()=>{ar.current=null,Tn.current&&(dl(!1),Tn.current=!1,Ut.current="",q("success","Pico-koden er færdig."))},0))}function bl(m,b=ie,w="error"){const C=hy(m,b);W(D=>[...D.slice(-140),{level:w,text:C.simple,technical:C.technical}])}function nn(m,b,w=be){xe(m),we(w),Te(b),qn(C=>({...C,[bt(w,m)]:b}))}function us(m,b="pico"){xe(m),we(b),Te(""),Mn(null),Dr({top:0,left:0})}function Br(m,b=(w=>(w=it.current)==null?void 0:w.selectionStart)()??m.length){Te(m),qn(C=>({...C,[bt(be,J)]:m})),$a(""),Hr(m,b)}function yl(m,b=be){qn(w=>{const C=bt(b,m);if(!(C in w))return w;const D={...w};return delete D[C],D})}function Wa(){return Cr[J]===ie}function Wn(m,b){rr(w=>({...w,[m]:b}))}function fs(m,b){Wn(m,b),qn(w=>({...w,[bt("pico",m)]:b})),be==="pico"&&J===m&&Te(b)}function zr(){ae([]),Ge([]),rr({}),qn({}),Mn(null),xe(m=>{const b=xf(ff());if(b.find(D=>D.path===m))return m;const C=b[0];return we("local"),Te(C.content),C.path})}function tn(m){sr(),X({value:100,label:m}),st.current=window.setTimeout(()=>{st.current=null,X(null)},900)}function sr(){st.current!==null&&(window.clearTimeout(st.current),st.current=null)}function Ja(){return Z?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Z.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:Z.label}),f.jsxs("strong",{children:[Math.round(Z.value),"%"]}),Z.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Ur,"aria-label":"Stop handling",title:"Stop",children:f.jsx(Kn,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Z.value))}%`}})})]}):null}function Ur(){Pn.current&&Et("Stopper læsning...",!0,!0)}function Et(m="Stopper læsning...",b=!1,w=!1){var C;sr(),ir.current=null,Zn.current+=1,(C=Pn.current)==null||C.abort(),Pn.current=null,Ze.current=null,se(null),G(!1),X(b?{value:(Z==null?void 0:Z.value)??0,label:m,cancellable:!1}:null),w&&q("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function ds(m){var b;if(!(Ze.current===m||ir.current===m)){if(ir.current=m,Gt.current){Zn.current+=1,(b=Pn.current)==null||b.abort(),Pn.current=null,Ze.current=null,us(m),se(m),G(!0),sr(),X({value:2,label:`Skifter til ${ze(m)}...`,cancellable:!0});return}ra()}}function ra(){if(Gt.current)return;const m=ir.current;if(!m)return;ir.current=null;const b=Zn.current+1;Zn.current=b;const w=new AbortController;Pn.current=w,Ze.current=m,us(m),se(m),G(!0),sr(),X({value:12,label:`Indlæser ${ze(m)}...`,cancellable:!0});const C=(async()=>{try{const D=await h(m,(de,Se)=>{Zn.current===b&&X({value:de,label:Se,cancellable:!0})},w.signal);if(w.signal.aborted||Zn.current!==b)return;nn(m,D,"pico"),Wn(m,D),tn("Fil indlæst")}catch(D){if(Zn.current!==b)return;My(D)||w.signal.aborted?q("info",`Stoppede læsning af ${ze(m)}.`):(X(null),q("error",D instanceof Error?D.message:"BLE læsning fejlede."))}})();Gt.current=C,C.finally(()=>{if(Gt.current!==C)return;Gt.current=null,Pn.current===w&&(Pn.current=null),Ze.current===m&&(Ze.current=null),!!ir.current||(se(null),G(!1),w.signal.aborted&&X(null)),ra()})}async function vl(m){const b=zt.current;zt.current=!0;try{return await m()}finally{zt.current=b}}L.useEffect(()=>{if(!pl)return;const m=cn.current;m&&(m.scrollTop=m.scrollHeight)},[I,pl]),L.useEffect(()=>{d0({clearTerminalOnRun:Ft,simplifiedErrors:lr})},[Ft,lr]),L.useEffect(()=>{var m;$n.some(b=>b.version===zn)||jr(((m=$n[0])==null?void 0:m.version)??"")},[$n,zn]),L.useEffect(()=>{as(Ih(navigator))},[]),L.useEffect(()=>{const m=()=>{const b=Lr.current;xt.current=null,on.current=null,Lr.current=null,b==null||b.disconnect().catch(()=>{})};return window.addEventListener("pagehide",m),()=>{var b,w;sr(),(b=Ht.current)==null||b.dispose(),Ht.current=null,(w=Vt.current)==null||w.dispose(),Vt.current=null,window.removeEventListener("pagehide",m),m()}},[]),L.useEffect(()=>{const m=b=>{!(b.ctrlKey||b.metaKey)||b.key.toLowerCase()!=="s"||(b.preventDefault(),!K&&J.trim()&&!Wl&&!T&&!U&&!B&&ms())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[be,he,K,x,ie,J,Wl,T,U,B]);function Qt(m,b,w){le(C=>{const D=Hy(C,m,b,w);return df(D),D})}const St=Iy(H,_e,Xt,x||he);L.useEffect(()=>{he&&rn()},[he]),L.useEffect(()=>{const m=Fa.current;m&&m!==Jl&&zr(),Fa.current=Jl},[Jl]);async function ei(){if(ot.supported){$(!0);try{await Vn.requestAndConnect();const m=new Lb(Vn);xt.current=m,on.current=new Gb(m),k(!0),Ce(0),await m.interrupt(),await xl(m),q("success","Sendte stop-signal til Pico-terminalen."),await ni(on.current),await ti(on.current)}catch(m){q("error",m instanceof Error?m.message:"USB-forbindelse mislykkedes.");try{await Vn.disconnect()}catch(b){q("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.");return}Ce(b=>{const w=b+1;return w>=3&&(q("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),bn(!0)),w}),k(!1)}finally{$(!1)}}}async function xl(m){const b=await m.exec(`import sys
print(sys.implementation.name)
`,4e3);if(b.error||!b.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Zt(){var m;try{await((m=Lr.current)==null?void 0:m.disconnect()),xt.current=null,on.current=null,k(!1),zr()}catch(b){q("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.")}}async function ut(m){const b=on.current;if(b){G(!0),zt.current=!0;try{await m(b)}catch(w){X(null),q("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{zt.current=!1,G(!1)}}}async function rn(m=!0){if(he){G(!0);try{const b=await d();ae(b),m&&q("success",`Indlæste ${b.length} filer fra Pico via Bluetooth.`)}catch(b){q("error",b instanceof Error?b.message:"BLE filhandling fejlede.")}finally{G(!1)}return}await ni(on.current,m)}async function ni(m,b=!0){if(m){G(!0);try{const w=await vl(()=>m.list("/"));ae(w),b&&q("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){q("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{G(!1)}}}async function Wt(){if(he){G(!0),X({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const m=await wl((b,w)=>X({value:b,label:w}));Ge(m),tn("Fil-tjek færdigt")}catch(m){X(null),q("error",m instanceof Error?m.message:"BLE runtime check fejlede.")}finally{G(!1)}return}await ti(on.current)}async function wl(m){const b=[],w=za.filter(D=>D.kind==="library"&&!$l(D));let C=0;for(const D of za){if(D.kind==="program"){b.push({...D,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if($l(D)){b.push({...D,status:"unknown",detail:"Opdateres via USB"});continue}try{const de=C/Math.max(1,w.length)*100,Se=100/Math.max(1,w.length);q("info",`Tjekker ${D.label} på Pico via Bluetooth...`),m==null||m(Math.min(95,de),`Tjekker ${D.label} på Pico...`);const We=await h(D.path,(Xn,ur)=>{m==null||m(Math.min(95,de+Xn/100*Se),`${D.label}: ${ur}`)}),Ye=Ba(We)===Ba(D.content);b.push({...D,status:Ye?"ok":"outdated",detail:Ye?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{b.push({...D,status:"missing",detail:"Mangler på Pico"})}finally{C+=1}}return m==null||m(100,"Fil-tjek færdigt"),b}async function ti(m){if(m){G(!0);try{const b=await vl(()=>jn(m)),w=b;Ge(w)}catch(b){q("error",b instanceof Error?b.message:"Runtime check fejlede.")}finally{G(!1)}}}async function jn(m){if(!m)return[];const b=[];for(const w of za){if(w.kind==="program"){b.push({...w,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const C=await m.readText(w.path),D=Ba(C)===Ba(w.content);b.push({...w,status:D?"ok":"outdated",detail:D?"Matcher appens version":"Matcher ikke appens version"})}catch{b.push({...w,status:"missing",detail:"Mangler på Pico"})}}return b}async function or(m=J){if(he){ds(m);return}se(m),await ut(async b=>{X({value:12,label:`Indlæser ${ze(m)}...`});const w=await la(b,m);nn(m,w,"pico"),Wn(m,w),tn("Fil indlæst")}),se(null)}async function la(m,b){var w;try{return await m.readText(b)}catch(C){await((w=xt.current)==null?void 0:w.stop().catch(()=>{})),await Sy(120);try{return await m.readText(b)}catch{throw C}}}function El(){F(!0)}async function ms(){if(be==="pico"){if(!x&&!he){q("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Sl();return}aa()}function aa(){if(Ua(J)){q("error",Qi);return}Qt(J,ie,!1),we("local"),qn(m=>({...m,[bt("local",J)]:ie})),F(!1),q("success",`Gemte ${ze(J)} lokalt.`)}async function Sl(){if(F(!1),Ua(J))return X(null),q("error",Qi),!1;if(X({value:0,label:"Starter gemning..."}),he){G(!0);try{return await _(J,ie,(b,w)=>X({value:b,label:w})),Wn(J,ie),we("pico"),qn(b=>({...b,[bt("pico",J)]:ie})),tn("Gemt på Pico via Bluetooth"),q("success",`Gemte ${ze(J)} på Pico via Bluetooth.`),Mo(J)&&(vt(!0),q("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await rn(!1),!0}catch(b){return X(null),q("error",b instanceof Error?b.message:"BLE gem fejlede."),!1}finally{G(!1)}}if(!on.current)return X(null),!1;let m=!1;return await ut(async b=>{Rl(J,"pico")?await b.replaceTextSafely(J,ie,(w,C)=>X({value:w,label:C})):await b.writeText(J,ie,(w,C)=>X({value:w,label:C})),Wn(J,ie),we("pico"),qn(w=>({...w,[bt("pico",J)]:ie})),tn("Gemt på Pico via USB"),q("success",`Gemte ${J}.`),await rn(),await Wt(),m=!0}),m}function kl(){Nl(ze(J),ie),F(!1),q("success",`Downloadede ${ze(J)}.`)}function Nl(m,b){const w=new Blob([b],{type:"text/plain;charset=utf-8"}),C=URL.createObjectURL(w),D=document.createElement("a");D.href=C,D.download=m,D.click(),URL.revokeObjectURL(C)}async function ri(m){G(!0),vt(!1),X({value:10,label:"Genstarter Pico..."});try{await y(m)?(tn("Pico genforbundet"),q("success",m==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),m==="ide"&&await rn()):(X(null),q("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(b){X(null),q("error",b instanceof Error?b.message:"Genstart/genforbindelse mislykkedes.")}finally{G(!1)}}function ps(m){var de;const b=m??{path:J,source:be},w=b.source==="pico"?"Pico":"browser",C=b.source==="pico"?(m==null?void 0:m.versions.length)??((de=Of(H).get(b.path))==null?void 0:de.length)??0:0,D=C>0?` Det sletter også filens versionshistorik (${C} gemte versioner).`:"";ee(null),a({title:"Slet fil",message:`Vil du slette ${ze(b.path)} fra ${w}?${D}`,confirmLabel:"Slet",onConfirm:()=>{li(b)}})}function Po(){a({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, sÃ¥ Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{$o()}})}async function $o(){if(!on.current){q("error","Forbind Picoen med USB fÃ¸rst.");return}await ut(async m=>{await m.delete("/DeviceSettings.txt").catch(b=>{const w=b instanceof Error?b.message:"";if(!/ENOENT|No such file|not found/i.test(w))throw b}),rr(b=>{const w={...b};return delete w["/DeviceSettings.txt"],w}),yl("/DeviceSettings.txt","pico"),q("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var Ã¥bent."),await rn()})}async function li(m){const b=m.path,w=m.source,C=b===J&&w===be;if(w==="local"){const Se=_e.filter(We=>We.path!==b);le(Se),df(Se),C&&nn(b,"","local"),yl(b,"local"),q("warning",`Slettede ${ze(b)} fra browseren.`);return}const D=Of(H).get(b)??[],de=[b,...D.map(Se=>Se.path)];if(he){G(!0);try{for(const We of de)await v(We);rr(We=>{const Ye={...We};for(const Xn of de)delete Ye[Xn];return Ye}),C&&nn(b,"","pico");for(const We of de)yl(We,"pico");const Se=D.length>0?` og ${D.length} gemte versioner`:"";q("warning",`Slettede ${ze(b)}${Se} på Pico via Bluetooth.`),await rn()}catch(Se){q("error",Se instanceof Error?Se.message:"BLE sletning fejlede.")}finally{G(!1)}return}if(!on.current){q("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await ut(async Se=>{for(const Ye of de)await Se.delete(Ye);rr(Ye=>{const Xn={...Ye};for(const ur of de)delete Xn[ur];return Xn});const We=D.length>0?` og ${D.length} gemte versioner`:"";q("warning",`Slettede ${b}${We}.`),C&&nn(b,"","pico");for(const Ye of de)yl(Ye,"pico");await rn(),await Wt()})}async function Xo(m){if(!m)return;const b=Ny(m.name);if(!b){q("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Ua(b)){q("error",Qi);return}if(m.size>128*1024){q("error","Filen er for stor til Pico-værkstedet.");return}const w=await m.text();if(be==="local"){Qt(b,w,!0),nn(b,w,"local"),q("success",`Importerede ${ze(b)} i browseren.`);return}if(!x&&!he){q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&$l({path:b})){q("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(X({value:0,label:"Uploader fil til Pico..."}),he){G(!0);try{await _(b,w,(D,de)=>X({value:D,label:de})),Wn(b,w),nn(b,w,"pico"),tn("Fil uploadet til Pico"),q("success",`Importerede ${ze(b)} på Pico via Bluetooth.`),await rn()}catch(D){X(null),q("error",D instanceof Error?D.message:"Kunne ikke importere filen til Pico.")}finally{G(!1)}return}if(!on.current){X(null),q("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await ut(async D=>{Rl(b,"pico")?await D.replaceTextSafely(b,w,(de,Se)=>X({value:de,label:Se})):await D.writeText(b,w,(de,Se)=>X({value:de,label:Se})),Wn(b,w),nn(b,w,"pico"),tn("Fil uploadet til Pico"),q("success",`Importerede ${ze(b)} på Pico.`),await rn(),await Wt()})}async function Fo(){Ee(""),Q(!0)}function Ko(){const m=Vh(ce);if(!m)return;if(Ua(m)){q("error",Qi);return}const b=be;if(Rl(m,b)){q("error",`Der findes allerede en fil med navnet ${ze(m)} i ${b==="pico"?"Pico":"browseren"}.`);return}if(b==="local"){Qt(m,"",!1),nn(m,"","local"),Q(!1),q("success",`Oprettede ${ze(m)} i browseren.`);return}Qo(m)}async function Qo(m){if(!x&&!he){q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Q(!1),X({value:0,label:"Opretter fil på Pico..."}),he){G(!0);try{await _(m,"",(b,w)=>X({value:b,label:w})),Wn(m,""),nn(m,"","pico"),tn("Fil oprettet på Pico"),q("success",`Oprettede ${ze(m)} på Pico via Bluetooth.`),await rn()}catch(b){X(null),q("error",b instanceof Error?b.message:"Kunne ikke oprette fil på Pico.")}finally{G(!1)}return}if(!on.current){X(null),q("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await ut(async b=>{await b.writeText(m,"",(w,C)=>X({value:w,label:C})),Wn(m,""),nn(m,"","pico"),tn("Fil oprettet på Pico"),q("success",`Oprettede ${ze(m)} på Pico.`),await rn()})}function Zo(m){m.type==="file"&&(ee(m),S(Ry(m.path)))}async function hs(m){if(!U||U.source!=="pico")return;const b=U.path;if(ee(null),X({value:0,label:"Gendanner version..."}),he){G(!0);try{const w=await h(m.path);await _(b,w,(C,D)=>X({value:C,label:D})),Wn(b,w),nn(b,w,"pico"),tn("Version gendannet"),await rn(!1)}catch(w){X(null),q("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{G(!1)}return}on.current&&await ut(async w=>{await w.replaceTextSafely(b,await w.readText(m.path),(D,de)=>X({value:D,label:de}));const C=await w.readText(b);Wn(b,C),nn(b,C,"pico"),tn("Version gendannet"),await rn()})}function Wo(m){a({title:"Slet version",message:`Vil du slette ${ze(m.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Jo(m)}})}async function Jo(m){if(he){G(!0);try{await v(m.path),await rn(!1),ee(b=>b&&{...b,versions:b.versions.filter(w=>w.path!==m.path)})}catch(b){q("error",b instanceof Error?b.message:"Kunne ikke slette versionen.")}finally{G(!1)}return}on.current&&await ut(async b=>{await b.delete(m.path),await rn(!1),ee(w=>w&&{...w,versions:w.versions.filter(C=>C.path!==m.path)})})}async function ec(){if(!U)return;const m=U,b=vf(oe,Zi(m.path));if(!b||b===m.path)return;if(Ua(b)){q("error",Qi);return}if(Rl(b,m.source)){q("error",`Der findes allerede en fil med navnet ${ze(b)}.`);return}const w=m.source==="local",C=m.source==="pico";if(he&&C&&(Mo(m.path)||Mo(b))){q("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}G(!0);try{if(C)if(he){const D=Cr[m.path]??await h(m.path);await _(b,D,(de,Se)=>X({value:de,label:Se})),await v(m.path),rr(de=>({...Fh(de,m.path,b),[b]:D}))}else on.current&&(await vl(()=>on.current.rename(m.path,b)),rr(D=>Fh(D,m.path,b)));w&&le(D=>{const de=D.map(Se=>Se.path===m.path?{...Se,path:b,updatedAt:Date.now()}:Se);return df(de),de}),J===m.path&&be===m.source&&xe(b),qn(D=>$y(D,m.source,m.path,b)),ee(null),S(""),q("success",`Omdøbte ${ze(m.path)} til ${ze(b)}.`),C&&await rn()}catch(D){q("error",D instanceof Error?D.message:"Kunne ikke omdøbe filen.")}finally{X(null),G(!1)}}function Rl(m,b){return b==="pico"?H.some(w=>w.path===m):_e.some(w=>w.path===m)}async function ai(m,b){if(!Rl(m,"pico"))return;const w=Gy(m,H),C=Cr[m]??await h(m);b!==void 0&&Ba(C)===Ba(b)||await _(w,C)}function nc(m){if(m.type!=="file"){he&&Et(void 0,!1),xe(m.path),we(m.source);return}if(he&&$l(m)){q("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(m.source==="local"){he&&Et(void 0,!1);const w=_e.find(C=>C.path===m.path);nn(m.path,Xt[bt("local",m.path)]??(w==null?void 0:w.content)??"","local");return}const b=bt("pico",m.path);if(Object.prototype.hasOwnProperty.call(Xt,b)){he&&Et(void 0,!1),nn(m.path,Xt[b],"pico");return}if(Object.prototype.hasOwnProperty.call(Cr,m.path)){he&&Et(void 0,!1),nn(m.path,Cr[m.path],"pico");return}or(m.path)}async function _s(){if(!x&&!he){const m=Gh();Ge(m),Pt(Yh(m)),je(!0),X(null);return}G(!0),X({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),q("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const m=Oe.length>0?Oe:he?await wl((b,w)=>X({value:b,label:w})):await vl(()=>jn(on.current));Ge(m),Pt(Yh(m)),je(!0),X(null)}catch(m){X(null),q("error",m instanceof Error?m.message:"Fil-tjek før installation fejlede.")}finally{G(!1)}}async function tc(){if(je(!1),he){G(!0);try{const b=(Oe.length>0?Oe:za.map(C=>({...C,status:"unknown",detail:"Ikke tjekket"}))).filter(C=>In[C.id]&&!$l(C));if(b.length===0){q("info","Ingen filer valgt til installation.");return}let w=null;X({value:0,label:"Starter installation..."});for(const[C,D]of b.entries()){q("info",`Installerer ${D.label} via Bluetooth...`);const de=C/b.length*100,Se=100/b.length;await ai(D.path,D.content),await _(D.path,D.content,(We,Ye)=>{X({value:Math.min(99,de+We/100*Se),label:`${D.label}: ${Ye}`})}),fs(D.path,D.content),q("success",`Installerede ${D.label}.`),D.kind==="library"&&(w=D),Mo(D.path)&&vt(!0)}tn("Installation færdig"),await rn(!1),await Wt(),w&&gs(w)}catch(m){X(null),q("error",m instanceof Error?m.message:"BLE installation fejlede.")}finally{G(!1)}return}await ut(async m=>{const w=(Oe.length>0?Oe:za.map(D=>({...D,status:"unknown",detail:"Ikke tjekket"}))).filter(D=>In[D.id]);if(w.length===0){q("info","Ingen filer valgt til installation.");return}let C=null;X({value:0,label:"Starter installation..."});for(const[D,de]of w.entries()){q("info",`Installerer ${de.label}...`);const Se=D/w.length*100,We=100/w.length;await m.replaceTextSafely(de.path,de.content,(Ye,Xn)=>{X({value:Math.min(99,Se+Ye/100*We),label:`${de.label}: ${Xn}`})},{createBackup:!0}),fs(de.path,de.content),q("success",`Installerede ${de.label}.`),de.kind==="library"&&(C=de)}tn("Installation færdig"),await rn(!1),await Wt(),C&&gs(C)})}function ii(){return(Oe.length>0?Oe:Gh()).filter(b=>In[b.id])}function rc(){const m=ii();if(m.length===0){q("info","Ingen filer valgt.");return}for(const b of m)Qt(b.path,b.content,!1);je(!1),q("success",`Gemte ${m.length} filer i browseren.`)}function lc(){const m=ii();if(m.length===0){q("info","Ingen filer valgt.");return}m.forEach((b,w)=>{window.setTimeout(()=>{Nl(ze(b.path),b.content)},w*120)}),je(!1),q("success",`Starter download af ${m.length} filer.`)}function gs(m){nn(m.path,m.content,"pico"),Wn(m.path,m.content),q("info",`Åbnede ${m.label} i editoren.`)}function ac(m,b){Pt(w=>{if(m.kind!=="program")return{...w,[m.id]:b};const C={...w};for(const D of Oe)D.kind==="program"&&(C[D.id]=!1);return C[m.id]=b,C})}async function ic(){if(vs(),he&&be==="pico"){q("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(be==="local"){await sc();return}const m=xt.current;if(!m){q("error",`${ze(J)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(J.endsWith(".py")){if(!Wa()&&(q("info",`${ze(J)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Sl())){q("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(K)return;wt(),Ut.current="",Qn(!0);try{await m.runFile(J,()=>{wt(),Ut.current="",gl.current=!1,dl(!0),Tn.current=!0}),q("success",`Kører ${ze(J)}. Brug Stop for at afbryde.`)}catch(b){dl(!1),Tn.current=!1,wt(),Ut.current="",q("error",b instanceof Error?b.message:"Kunne ikke starte koden.")}return}G(!0);try{const b=await m.exec(ie,2e4);b.output.trim()&&q("info",b.output),b.error.trim()&&bl(b.error,ie),!b.output.trim()&&!b.error.trim()&&q("success","Koden kørte uden output.")}catch(b){q("error",b instanceof Error?b.message:"Kunne ikke køre koden.")}finally{G(!1)}}async function sc(){const m=Mf(ie,{allowInput:!0});if(m.some(C=>C.level==="error")){for(const C of m){const D=C.line?`Linje ${C.line}: `:"";q(C.level==="error"?"error":"warning",`${D}${C.text}`)}return}const b=new AbortController;Kt.current=b;const w=new oy;Vt.current=w,G(!0),Pa(!0),Qn(!0),q("info",x?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const C=[],D=await w.run(ie,{signal:b.signal,onOutput:Ye=>{C.push(Ye),q("info",Ye)}});for(const Ye of D.issues){const Xn=Ye.line?`Linje ${Ye.line}: `:"";q(Ye.level==="error"?"error":"warning",`${Xn}${Ye.text}`)}const de=[...C,D.output].filter(Boolean).join(`
`).trim(),Se=D.output.trim();!D.error.trim()&&Ty(de)?bl(de,ie):(Se&&q("info",Se),D.error.trim()&&bl(D.error,ie,D.unavailable?"warning":"error")),D.ok&&!de&&!D.error.trim()&&q("success","Offline MicroPython kørte uden output.")}finally{Kt.current=null,Vt.current=null,w.dispose(),Pa(!1),G(!1)}}async function oc(){var b,w,C;if(ml){(b=Kt.current)==null||b.abort(),(w=Vt.current)==null||w.stop(),q("warning","Stoppede offline MicroPython."),Qn(!0);return}if(!ct&&Rn){(C=Ht.current)==null||C.reset(),Or(!1),q("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Qn(!0);return}const m=xt.current;if(m)try{await m.stop(),q("warning","Stoppede koden på Pico.")}catch(D){q("error",D instanceof Error?D.message:"Kunne ikke stoppe koden.")}finally{dl(!1),Tn.current=!1,wt(),Ut.current="",Qn(!0)}}function cc(){const m=cn.current;if(!m)return;const b=m.scrollHeight-m.scrollTop-m.clientHeight<12;Qn(b)}function uc(){W([]),Qn(!0)}async function Ml(){const m=Hn?lt:lt.trimEnd();if(Hn){if(!ct){const C=Vt.current;if(!C){q("warning","Browser-MicroPython kører ikke lige nu."),Gn();return}$t(""),Qn(!0),C.sendInput(m),Gn();return}const w=xt.current;if(!w){q("warning","Pico-terminalen er ikke forbundet."),Gn();return}$t(""),Qn(!0);try{await w.sendProgramInput(m)}catch(C){q("error",C instanceof Error?C.message:"Kunne ikke sende input til Pico-koden.")}finally{Gn()}return}if(!m.trim())return;if(hl(w=>(w.at(-1)===m?w:[...w,m]).slice(-80)),at(null),Un(null),Ka){q("warning",ct?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Gn();return}if(!ct){const w=Mf(m);if(w.some(D=>D.level==="error")){for(const D of w){const de=D.line?"Linje "+D.line+": ":"";q(D.level==="error"?"error":"warning",de+D.text)}Gn();return}const C=Ht.current??new sy;Ht.current=C,$t(""),Or(!0),Qn(!0),q("info",">>> "+m);try{let D=!1;const de=await C.send(m,{timeoutMs:15e3,onOutput:We=>{D=!0,q("info",We)}}),Se=de.output.trim();Se&&!D&&q("info",Se),de.error.trim()&&bl(de.error,m,de.unavailable?"warning":"error")}catch(D){q("error",D instanceof Error?D.message:"Browser-MicroPython-terminalen fejlede.")}finally{Or(!1),Gn()}return}if(he){q("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Gn();return}const b=xt.current;if(!x||!b){q("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Gn();return}$t(""),Or(!0),Qn(!0),gl.current=!0,q("info",">>> "+m);try{await b.sendFriendlyLine(m)}catch(w){gl.current=!1,q("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Or(!1),Gn()}}function Gn(){window.requestAnimationFrame(()=>{const m=un.current;if(!m||m.disabled)return;m.focus();const b=m.value.length;m.selectionStart=b,m.selectionEnd=b})}function bs(m,b,w){return w.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:m}),f.jsx("p",{children:b})]}),w.map(C=>{const D=he&&$l(C);return f.jsxs("label",{className:`ide-install-row ${D?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!In[C.id],disabled:D,onChange:de=>ac(C,de.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[ys(C),(C.kind==="library"||!x&&!he)&&f.jsx("em",{className:`ide-install-status status-${C.status}`,children:D?"USB":Yy(C.status)})]}),f.jsxs("small",{children:[C.description,!x&&!he?` ${C.detail}`:""]})]})]},C.id)})]})}function ys(m){return m.kind==="program"?m.label.replace(/\s*\(main\.py\)$/i,""):m.label}function vs(){Ft&&W([]),Qn(!0)}function xs(m,b){const w=m.indexOf(`
`,b);return w===-1?m.length:w}function Hr(m,b){const w=Df(m,b);if(!w||w.query.length<1){Mn(null);return}const C=qh(m,b,!0).slice(0,8),D=Ph(it.current,w.start);Mn(C.length>0&&D?{items:C,selected:0,start:w.start,end:b,position:D}:null)}function Tl(m,b){const w=Df(m,b);if(!w||w.query.length<1){Un(null);return}const C=qh(m,b,!1).slice(0,8),D=Ph(un.current,w.start);Un(C.length>0&&D?{items:C,selected:0,start:w.start,end:b,position:D}:null)}function cr(m){const b=m.value.slice(m.selectionStart,m.selectionEnd);$a(By(b)?b:"")}function si(m=Ke==null?void 0:Ke.items[Ke.selected]){if(!m||!Ke)return;const b=ie.slice(0,Ke.start)+m.insert+ie.slice(Ke.end),w=Ke.start+m.insert.length-(m.insert.endsWith("()")?1:0);Te(b),qn(C=>({...C,[bt(be,J)]:b})),Mn(null),window.requestAnimationFrame(()=>{const C=it.current;C&&(C.focus(),C.selectionStart=w,C.selectionEnd=w,Hr(b,w))})}function ws(m=mn==null?void 0:mn.items[mn.selected]){if(!m||!mn)return;const b=lt.slice(0,mn.start)+m.insert+lt.slice(mn.end),w=mn.start+m.insert.length-(m.insert.endsWith("()")?1:0);$t(b),Un(null),window.requestAnimationFrame(()=>{const C=un.current;C&&(C.focus(),C.selectionStart=w,C.selectionEnd=w,Tl(b,w))})}function fc(m){var ur;if((m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="s"){m.preventDefault(),!K&&J.trim()&&ms();return}if(Ke){if(m.key==="ArrowDown"){m.preventDefault(),Mn(Ie=>Ie&&{...Ie,selected:(Ie.selected+1)%Ie.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),Mn(Ie=>Ie&&{...Ie,selected:(Ie.selected-1+Ie.items.length)%Ie.items.length});return}if(m.key==="Tab"){m.preventDefault(),si();return}if(m.key==="Enter"){if(!(Ke.items[Ke.selected]&&v_(Ke.items[Ke.selected],ie.slice(Ke.start,Ke.end)))){m.preventDefault(),si();return}Mn(null)}if(m.key==="Escape"){m.preventDefault(),Mn(null);return}}if(m.key==="Enter"){m.preventDefault();const Ie=m.currentTarget,fr=Ie.selectionStart,oi=Ie.selectionEnd,jl=ie.lastIndexOf(`
`,fr-1)+1,Vr=ie.slice(jl,fr),ci=((ur=Vr.match(/^[ \t]*/))==null?void 0:ur[0])??"",An=Vr.trimEnd().endsWith(":")?"    ":"",dr=`
${ci}${An}`,ia=ie.slice(0,fr)+dr+ie.slice(oi),Gr=fr+dr.length;Br(ia,Gr),window.requestAnimationFrame(()=>{Ie.selectionStart=Gr,Ie.selectionEnd=Gr});return}if(m.key!=="Tab")return;m.preventDefault();const b=m.currentTarget,w=b.selectionStart,C=b.selectionEnd,D="    ";if(m.shiftKey){const Ie=ie.lastIndexOf(`
`,w-1)+1,fr=w===C?xs(ie,w):C,oi=ie.slice(Ie,fr);let jl=0,Vr=0;const ci=oi.replace(/(^|\n)( {1,4}|\t)/g,(dr,ia,Gr,Ss)=>{const ui=Gr.length;return Ie+Ss<w&&(jl+=ui),Vr+=ui,ia});if(Vr===0)return;const An=ie.slice(0,Ie)+ci+ie.slice(fr);Br(An,Math.max(Ie,w-jl)),window.requestAnimationFrame(()=>{b.selectionStart=Math.max(Ie,w-jl),b.selectionEnd=w===C?b.selectionStart:Math.max(b.selectionStart,C-Vr)});return}if(w===C){const Ie=ie.slice(0,w)+D+ie.slice(C);Br(Ie,w+D.length),window.requestAnimationFrame(()=>{b.selectionStart=w+D.length,b.selectionEnd=w+D.length});return}const de=ie.lastIndexOf(`
`,w-1)+1,We=ie.slice(de,C).replace(/^/gm,D),Ye=We.split(`
`).length,Xn=ie.slice(0,de)+We+ie.slice(C);Br(Xn,w+D.length),window.requestAnimationFrame(()=>{b.selectionStart=w+D.length,b.selectionEnd=C+Ye*D.length})}function Es(m){if(Hn){m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Ml());return}if(mn){if(m.key==="ArrowDown"){m.preventDefault(),Un(b=>b&&{...b,selected:(b.selected+1)%b.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),Un(b=>b&&{...b,selected:(b.selected-1+b.items.length)%b.items.length});return}if(m.key==="Enter"||m.key==="Tab"){m.preventDefault(),ws();return}if(m.key==="Escape"){m.preventDefault(),Un(null);return}}if(m.key==="Tab"){m.preventDefault();const b=m.currentTarget,w=b.selectionStart,C=b.selectionEnd,D="    ",de=lt.slice(0,w)+D+lt.slice(C),Se=w+D.length;$t(de),at(null),Un(null),window.requestAnimationFrame(()=>{b.selectionStart=Se,b.selectionEnd=Se});return}if(m.key==="ArrowUp"||m.key==="ArrowDown"){if(!(m.key==="ArrowUp"?m.currentTarget.selectionStart===0&&m.currentTarget.selectionEnd===0:m.currentTarget.selectionStart===lt.length&&m.currentTarget.selectionEnd===lt.length)||Zl.length===0)return;m.preventDefault();const w=m.key==="ArrowUp"?vn===null?Zl.length-1:Math.max(0,vn-1):vn===null||vn+1>=Zl.length?null:vn+1;at(w);const C=w===null?"":Zl[w]??"";$t(C),Un(null),window.requestAnimationFrame(()=>{const D=un.current;D&&(D.selectionStart=C.length,D.selectionEnd=C.length)});return}m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Ml())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(Gf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Wl?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Fo,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(Kn,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var m;return(m=Xa.current)==null?void 0:m.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(Kn,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>rn(),disabled:!x&&!he||K,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(Kn,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:St.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):St.map(m=>{if(m.kind==="separator"){const D=m.id==="pico-files"&&!x&&!he;return f.jsxs(L.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:m.label})}),D&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},m.id)}const b=he&&$l(m),w=Xt[bt(m.source,m.path)],C=w!==void 0&&w!==Vy(m,_e,Cr);return f.jsxs("div",{className:`ide-file-row ${J===m.path&&be===m.source?"active":""} ${b?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>nc(m),disabled:b,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:m.name}),f.jsxs("small",{title:C?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[m.source==="pico"&&m.versions.length>0&&f.jsx("em",{className:"ide-file-version-count",title:`${m.versions.length} gemte versioner i historikken`,children:m.versions.length}),f.jsx("i",{className:`ide-file-dirty-dot ${C?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Zo(m),disabled:m.type!=="file"||K||b,"aria-label":`Filvalg for ${m.name}`,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(Kn,{name:"settings",size:16})})]},`${m.source}:${m.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&f.jsx("span",{className:`ide-usb-status ${ot.supported?"available":"unavailable"}`,title:ot.message,"data-tooltip":ot.message,role:"img","aria-label":ot.message,tabIndex:0,children:"!"})]}),he&&f.jsxs("p",{children:[(i==null?void 0:i.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Zt:ei,disabled:!ot.supported||R,children:R?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:_s,disabled:he||K,children:"Download"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Po,disabled:!x||K,children:"Nulstil enhed"})]}),he&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(Kn,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:_s,disabled:K,children:"Startprogrammer og biblioteker"})]}),!he&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>bn(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[ze(J),f.jsxs("small",{children:[qo," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:ic,disabled:K,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:oc,disabled:!ml&&!(!ct&&Rn)&&(!x||!yn),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:El,disabled:K||!J.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>ps(),disabled:K||!J.trim(),children:"Slet"})]})]}),Ja(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Ql.top}px)`},children:Array.from({length:is},(m,b)=>f.jsx("span",{children:b+1},b))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Ql.left}px, ${-Ql.top}px)`},children:Uy(ie,Io)}),f.jsx("textarea",{ref:it,className:"ide-editor",value:ie,onChange:m=>Br(m.target.value,m.target.selectionStart),onKeyDown:fc,onKeyUp:m=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||Hr(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>{Hr(m.currentTarget.value,m.currentTarget.selectionStart),cr(m.currentTarget)},onSelect:m=>cr(m.currentTarget),onScroll:m=>{Dr({top:m.currentTarget.scrollTop,left:m.currentTarget.scrollLeft}),Ke&&Hr(m.currentTarget.value,m.currentTarget.selectionStart)},readOnly:K||!!re,"aria-busy":K||!!re,spellCheck:!1}),Ke&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Ke.position.left,top:Ke.position.top},children:Ke.items.map((m,b)=>f.jsx("button",{className:b===Ke.selected?"active":"",type:"button",onMouseDown:w=>{w.preventDefault(),si(m)},role:"option","aria-selected":b===Ke.selected,children:m.label},m.label))}),re&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",ze(re),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${lr?"":"active"}`,type:"button",onClick:()=>ls(m=>!m),"aria-label":lr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!lr,title:lr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Ft?"active":""}`,type:"button",onClick:()=>_l(m=>!m),"aria-pressed":Ft,title:Ft?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:uc,disabled:I.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:cn,onScroll:cc,onClick:()=>{var m;return(m=un.current)==null?void 0:m.focus()},children:[I.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):I.map((m,b)=>f.jsx("div",{className:`term-line term-${m.level}`,children:m.technical&&!lr?m.technical:m.text},`${b}-${m.text}`)),f.jsxs("form",{className:`ide-terminal-command ${Ka&&!Hn?"locked":""} ${Hn?"stdin":""}`,onSubmit:m=>{m.preventDefault(),Ml()},children:[f.jsx("span",{"aria-hidden":"true",children:ta}),f.jsx("textarea",{ref:un,value:lt,onChange:m=>{$t(m.target.value),at(null),Hn?Un(null):Tl(m.target.value,m.target.selectionStart)},onKeyDown:Es,onKeyUp:m=>{Hn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||Tl(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>{Hn||Tl(m.currentTarget.value,m.currentTarget.selectionStart)},disabled:ss,placeholder:os,"aria-label":Hn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:os,rows:Math.max(1,lt.split(`
`).length)})]}),mn&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:mn.position.left,top:mn.position.top},children:mn.items.map((m,b)=>f.jsx("button",{className:b===mn.selected?"active":"",type:"button",onMouseDown:w=>{w.preventDefault(),ws(m)},role:"option","aria-selected":b===mn.selected,children:m.label},m.label))})]})]})]}),f.jsx("input",{ref:Xa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:m=>{var b;Xo((b=m.target.files)==null?void 0:b[0]),m.currentTarget.value=""}}),T&&f.jsx(En,{title:"Gem fil",onClose:()=>F(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:aa,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Sl(),disabled:!x&&!he||K,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:kl,children:"Download til computer"})]})}),Be&&f.jsx(En,{title:"Startprogrammer og biblioteker",onClose:()=>je(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:x||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[bs("Startprogrammer (main.py)","Starter automatisk på Picoen.",Oe.filter(m=>m.kind==="program")),bs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Oe.filter(m=>m.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(x||he)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:tc,disabled:K,children:"Installer valgte på Pico"}),f.jsx("button",{className:x||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:rc,disabled:K,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:lc,disabled:K,children:"Download valgte"})]})]})}),Ar&&f.jsx(En,{title:"main.py er gemt",onClose:()=>vt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ri("control"),disabled:K,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ri("ide"),disabled:K,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>vt(!1),disabled:K,children:"Senere"})]})}),ye&&f.jsx(En,{title:"Installer MicroPython",onClose:()=>bn(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:kn,onChange:m=>Bt(m.target.value),children:na.map(m=>f.jsx("option",{value:m,children:m},m))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(xn==null?void 0:xn.version)??zn,onChange:m=>jr(m.target.value),children:$n.map(m=>f.jsxs("option",{value:m.version,children:[m.version," (",m.date,")"]},`${m.board}:${m.version}:${m.date}`))})]}),xn&&f.jsx("a",{className:"btn btn-primary btn-block",href:xn.url,download:xn.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),B&&f.jsx(En,{title:"Ny Python-fil",onClose:()=>Q(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:m=>{m.preventDefault(),Ko()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:ce,onChange:m=>Ee(m.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",ea,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Vh(ce),children:"Opret"})]})}),U&&f.jsx(En,{title:ze(U.path),onClose:()=>ee(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:m=>{m.preventDefault(),ec()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:oe,onChange:m=>S(m.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Zi(U.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Zi(U.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!vf(oe,Zi(U.path))||vf(oe,Zi(U.path))===U.path||K,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>ps(U),disabled:K,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),U.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):U.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:U.versions.map(m=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:ze(m.path)}),f.jsx("small",{children:m.size!==void 0?`${m.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void hs(m),disabled:K,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Wo(m),disabled:K,children:"Slet"})]},m.path))})]})]})})]})}function Vh(o){var c;const a=(c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return a?`/${a}.py`:""}function Ny(o){const a=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=a==null?void 0:a.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const i=y_(c[1]);return i?`/${i}.${c[2].toLowerCase()}`:""}function vf(o,a="py"){const c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const i=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!i)return"";const u=y_(i[1]),d=a.replace(/^\./,"").toLowerCase(),h=(i[2]??(d||"py")).toLowerCase();return u?`/${u}.${h}`:""}function Ry(o){return ze(o).replace(/\.(py|txt|json|csv)$/i,"")}function y_(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Zi(o){var i;const a=ze(o).match(/\.([a-z0-9]+)$/i),c=(i=a==null?void 0:a[1])==null?void 0:i.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function Ba(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Gh(){return za.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Yh(o){const a={};return o.forEach(c=>{a[c.id]=!1}),a}function ze(o){return o.split("/").filter(Boolean).pop()??o}function Mo(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Ih(o){const a=o.userAgent||"",c=o.platform||"",i=o.maxTouchPoints||0,u=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(a),d=/Macintosh/i.test(c)&&i>1;return u&&!d}function My(o){return o instanceof DOMException&&o.name==="AbortError"}function Ty(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function $l(o){return jy(o)}function jy(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Af=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function qh(o,a,c){const i=Df(o,a);if(!i)return[];const u=Ay(o,i.start,a),d=i.query.toLowerCase(),h=u.beforeToken.toLowerCase(),_=u.linePrefix.toLowerCase(),v=c?[...Af,...Oy(o)]:Af;return Cy(v).filter(x=>{const k=x.label.toLowerCase(),R=x.insert.toLowerCase();return R===d||k===d||v_(x,i.query)?!1:u.importLine?Dy(x,u)?k.startsWith(_)||R.startsWith(_)||k.startsWith(d)||R.startsWith(d):!1:h.endsWith(".")&&!R.includes(".")?!1:!!(R.startsWith(d)||k.startsWith(d))})}function Ay(o,a,c){const i=o.lastIndexOf(`
`,a-1)+1,u=o.slice(i,c),d=o.slice(i,a),h=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(u),_=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(u);return{linePrefix:u,beforeToken:d,importLine:h,fromImportLine:_}}function Dy(o,a){return a.fromImportLine?!o.insert.includes("(")&&!o.insert.startsWith("import "):o.insert.startsWith("import ")||o.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(o.insert)}function Oy(o){const a=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const i of c)for(const u of o.matchAll(i))u[1]&&a.add(u[1]),u[2]&&a.add(u[2]);return[...a].filter(i=>i.length>1&&!Ly.has(i)).sort((i,u)=>i.localeCompare(u,"da")).map(i=>({label:i,insert:i}))}function Cy(o){const a=new Set,c=[];for(const i of o){const u=i.insert.toLowerCase();a.has(u)||(a.add(u),c.push(i))}return c}const Ly=new Set(Af.map(o=>o.insert.replace(/[().: ]+$/g,"")));function Df(o,a){const i=o.slice(0,a).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!i||i.index===void 0?null:{query:i[0],start:i.index}}function v_(o,a){const c=o.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===a.toLowerCase()}function By(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Ph(o,a){if(!o)return null;const c=o.closest(".ide-terminal")??o.parentElement;if(!c)return null;const i=window.getComputedStyle(o),u=document.createElement("div"),d=document.createElement("span"),h=c.getBoundingClientRect(),_=o.getBoundingClientRect();u.style.position="absolute",u.style.visibility="hidden",u.style.pointerEvents="none",u.style.whiteSpace="pre-wrap",u.style.overflowWrap="break-word",u.style.boxSizing=i.boxSizing,u.style.width=`${o.clientWidth}px`,u.style.padding=i.padding,u.style.border=i.border,u.style.font=i.font,u.style.lineHeight=i.lineHeight,u.style.letterSpacing=i.letterSpacing,u.style.tabSize=i.tabSize,u.style.left=`${_.left-h.left-o.scrollLeft}px`,u.style.top=`${_.top-h.top-o.scrollTop}px`,u.textContent=o.value.slice(0,a),d.textContent=o.value.slice(a,a+1)||" ",u.appendChild(d),c.appendChild(u);const v=d.getBoundingClientRect();u.remove();const y=zy(v.left-h.left,8,Math.max(8,c.clientWidth-296)),x=v.bottom-h.top+6,k=x+218>c.clientHeight?Math.max(8,v.top-h.top-218):x;return{left:y,top:k}}function zy(o,a,c){return Math.max(a,Math.min(c,o))}function Uy(o,a=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,i=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,u=[];return o.split(/(\r?\n)/).forEach((d,h)=>{if(d===`
`||d===`\r
`){u.push(f.jsx("br",{},`br-${h}`));return}let _=0;[...d.matchAll(i)].forEach((y,x)=>{const k=y.index??0;k>_&&u.push(...$h(d.slice(_,k),c,`${h}-${x}-plain`,a));const R=y[0],$=R.startsWith("#")?"tok-comment":R.startsWith('"')||R.startsWith("'")?"tok-string":/^\d/.test(R)?"tok-number":"tok-builtin";u.push(...Do(R,a,`${h}-${x}-token`,$)),_=k+R.length}),_<d.length&&u.push(...$h(d.slice(_),c,`${h}-tail`,a))}),u.length?u:" "}function $h(o,a,c,i=""){const u=[];let d=0;const h=new RegExp(a.source,"g");return[...o.matchAll(h)].forEach((_,v)=>{const y=_.index??0;y>d&&u.push(...Do(o.slice(d,y),i,`${c}-${v}-plain`)),u.push(...Do(_[0],i,`${c}-${v}-keyword`,"tok-keyword")),d=y+_[0].length}),d<o.length&&u.push(...Do(o.slice(d),i,`${c}-plain-end`)),u}function Do(o,a,c,i=""){if(!a)return[f.jsx("span",{className:i||void 0,children:o},c)];const u=[],d=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),h=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${d})(?![A-Za-zÆØÅæøå0-9_])`,"g");let _=0;return[...o.matchAll(h)].forEach((v,y)=>{const x=v.index??0;x>_&&u.push(f.jsx("span",{className:i||void 0,children:o.slice(_,x)},`${c}-${y}-before`)),u.push(f.jsx("span",{className:`${i} tok-match`.trim(),children:v[0]},`${c}-${y}-match`)),_=x+v[0].length}),_<o.length&&u.push(f.jsx("span",{className:i||void 0,children:o.slice(_)},`${c}-after`)),u.length?u:[f.jsx("span",{className:i||void 0,children:o},c)]}function xf(o){return o.length>0?o:[{path:jf,content:b_,uploaded:!1,updatedAt:Date.now()}]}function Hy(o,a,c,i){const u=o.filter(d=>d.path!==a);return[{path:a,content:c,uploaded:i,updatedAt:Date.now()},...u].sort((d,h)=>h.updatedAt-d.updatedAt)}function Vy(o,a,c){var i;return o.source==="pico"?c[o.path]:(i=a.find(u=>u.path===o.path))==null?void 0:i.content}function Oo(o){const a=o.replace(/\\/g,"/"),c=a.lastIndexOf("/"),i=c>=0?a.slice(0,c+1):"",d=(c>=0?a.slice(c+1):a).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return d?{originalPath:`${i}${d[1]}${d[3]}`,index:parseInt(d[2],10)}:null}function Ua(o){return Oo(o)!==null}function Of(o){const a=new Map;for(const c of o){const i=Oo(c.path);if(!i)continue;const u=a.get(i.originalPath)??[];u.push(c),a.set(i.originalPath,u)}for(const c of a.values())c.sort((i,u)=>{var d,h;return(((d=Oo(u.path))==null?void 0:d.index)??0)-(((h=Oo(i.path))==null?void 0:h.index)??0)});return a}function Gy(o,a){const c=o.replace(/\\/g,"/"),i=c.lastIndexOf("/"),u=i>=0?c.slice(0,i+1):"/",d=i>=0?c.slice(i+1):c.replace(/^\/+/,""),h=d.lastIndexOf("."),_=h>0?d.slice(0,h):d,v=h>0?d.slice(h):"",y=new Set(a.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const k=`${u}${_}_backup${x}${v}`;if(!y.has(k.toLowerCase()))return k}return`${u}${_}_backup${Date.now()}${v}`}function Yy(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function Iy(o,a,c,i){const u=new Map,d=Of(o);for(const x of o)Ua(x.path)||u.set(bt("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:d.get(x.path)??[]});for(const x of a)u.set(bt("local",x.path),{kind:"file",name:ze(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const x of Object.keys(c)){const[k,...R]=x.split(":"),$=R.join(":");if(k!=="local"&&k!=="pico"||!$)continue;const I=u.get(x);if(I){u.set(x,I);continue}u.set(x,{kind:"file",name:ze($),path:$,type:"file",source:k,uploaded:!1,versions:k==="pico"?d.get($)??[]:[]})}const h=[...u.values()].sort(Py),_=h.filter(x=>x.source==="pico"),v=h.filter(x=>x.source==="local"),y=[];return _.length>0||i?y.push({kind:"separator",id:"pico-files",label:i?"Pico":"Microcontroller"},..._):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const qy=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function Py(o,a){const c=Xh(o.path),i=Xh(a.path);return c===null&&i===null?o.name.localeCompare(a.name,"da"):c===null?-1:i===null?1:c-i}function Xh(o){var c;const a=(c=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return a?qy.get(a)??null:null}function Fh(o,a,c){if(!(a in o))return o;const i={...o,[c]:o[a]};return delete i[a],i}function $y(o,a,c,i){const u=`${a}:${c}`;if(!(u in o))return o;const d={...o,[`${a}:${i}`]:o[u]};return delete d[u],d}function Xy({open:o}){const a=ne(H=>H.screen),c=ne(H=>H.active),i=ne(H=>H.toggleSideMenu),u=ne(H=>H.toggleDebugger),d=ne(H=>H.setEditMode),h=ne(H=>H.openMenuPage),_=ne(H=>H.disconnect),v=ne(H=>H.openPicoIde),y=ne(H=>H.closePicoIde),x=ne(H=>H.picoIdeOrigin),k=a==="dashboard",R=a==="control",$=a==="ide",I=R&&!!(c!=null&&c.canEdit),W=!R||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),K=x==="control",G=x==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>i(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${a} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[k&&f.jsxs(f.Fragment,{children:[f.jsx(gt,{label:"Bruger",icon:"user",onClick:()=>h("user-settings")}),f.jsx(gt,{label:"Indstillinger",icon:"settings",onClick:()=>h("application-settings")}),f.jsx(gt,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!W}),f.jsx(wf,{}),f.jsx(gt,{label:"Om appen",icon:"info",onClick:()=>h("application-about")}),f.jsx(gt,{label:"Hjælp",icon:"help",onClick:()=>h("application-help")}),f.jsx(gt,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),R&&f.jsxs(f.Fragment,{children:[f.jsx(gt,{label:"Indstillinger",icon:"settings",onClick:()=>h("device-settings")}),f.jsx(gt,{label:"Rediger",icon:"edit",onClick:()=>d(!0),disabled:!I}),f.jsx(gt,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!W}),f.jsx(wf,{}),f.jsx(gt,{label:"Hjælp",icon:"help",onClick:()=>h("device-help")}),f.jsx(gt,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),$&&f.jsxs(f.Fragment,{children:[f.jsx(gt,{label:G,icon:"back",onClick:y}),f.jsx(wf,{})]}),f.jsx("div",{className:"spacer"}),(R||$&&K)&&f.jsx(gt,{label:"Forlad",icon:"exit",onClick:()=>_()})]})]})}function gt({label:o,icon:a,disabled:c,onClick:i}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:i,disabled:c,"aria-label":o,children:[f.jsx(Kn,{name:a}),f.jsx("span",{children:o})]})}function wf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:Y0,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const Fy={error:"term-error",success:"term-success",warning:"term-warning",info:""},Kh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function Ky(){const o=new Date,a=c=>String(c).padStart(2,"0");return`${a(o.getDate())}-${a(o.getMonth()+1)}-${o.getFullYear()}-${a(o.getHours())}-${a(o.getMinutes())}`}function Qy(){const o=ne(u=>u.logs),a=ne(u=>u.clearLogs),c=ne(u=>u.toggleDebugger);function i(){const u=[...o].reverse().map(v=>`${v.time} ${Kh[v.level]}${v.message}`).join(`
`),d=new Blob([u],{type:"text/plain"}),h=URL.createObjectURL(d),_=document.createElement("a");_.href=h,_.download=`${Ky()}.txt`,_.click(),URL.revokeObjectURL(h)}return f.jsxs(En,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((u,d)=>f.jsxs("div",{className:`term-line ${Fy[u.level]}`,children:[u.time," ",Kh[u.level],u.message]},`${u.time}-${d}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:a,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:i,children:"Gem logfil"})]})]})}const x_=4,Lt=x_*4+17,Qh=80,Zy=20,Wy=30660;function Jy(o){const a=new TextEncoder().encode(o);if(a.length>76)throw new Error("QR-koden er for lang.");const c=Zh(!1),i=Zh(!1);ev(c,i);const u=tv(a),d=av(u,Zy);return rv(c,i,[...u,...d]),lv(c,i),c}function Zh(o){return Array.from({length:Lt},()=>Array.from({length:Lt},()=>o))}function Ct(o,a,c,i,u,d=!0){o[i][c]=u,d&&(a[i][c]=!0)}function ev(o,a){Ef(o,a,0,0),Ef(o,a,Lt-7,0),Ef(o,a,0,Lt-7);for(let c=0;c<Lt;c+=1)a[6][c]||Ct(o,a,c,6,c%2===0),a[c][6]||Ct(o,a,6,c,c%2===0);nv(o,a,26,26),Ct(o,a,8,x_*4+9,!0)}function Ef(o,a,c,i){for(let u=-1;u<=7;u+=1)for(let d=-1;d<=7;d+=1){const h=c+d,_=i+u;if(h<0||_<0||h>=Lt||_>=Lt)continue;const v=d>=0&&d<=6&&u>=0&&u<=6&&(d===0||d===6||u===0||u===6||d>=2&&d<=4&&u>=2&&u<=4);Ct(o,a,h,_,v)}}function nv(o,a,c,i){for(let u=-2;u<=2;u+=1)for(let d=-2;d<=2;d+=1)a[i+u][c+d]||Ct(o,a,c+d,i+u,Math.max(Math.abs(d),Math.abs(u))!==1)}function tv(o){const a=[];To(a,4,4),To(a,o.length,8);for(const i of o)To(a,i,8);for(To(a,0,Math.min(4,Qh*8-a.length));a.length%8!==0;)a.push(0);const c=[];for(let i=0;i<a.length;i+=8)c.push(a.slice(i,i+8).reduce((u,d)=>u<<1|d,0));for(let i=236;c.length<Qh;i=i===236?17:236)c.push(i);return c}function To(o,a,c){for(let i=c-1;i>=0;i-=1)o.push(a>>>i&1)}function rv(o,a,c){const i=c.flatMap(h=>Array.from({length:8},(_,v)=>h>>>7-v&1));let u=0,d=!0;for(let h=Lt-1;h>=1;h-=2){h===6&&(h-=1);for(let _=0;_<Lt;_+=1){const v=d?Lt-1-_:_;for(let y=0;y<2;y+=1){const x=h-y;if(a[v][x])continue;const k=u<i.length?i[u]===1:!1;o[v][x]=k!==((x+v)%2===0),u+=1}}d=!d}}function lv(o,a){const c=i=>(Wy>>>i&1)!==0;for(let i=0;i<=5;i+=1)Ct(o,a,8,i,c(i));Ct(o,a,8,7,c(6)),Ct(o,a,8,8,c(7)),Ct(o,a,7,8,c(8));for(let i=9;i<15;i+=1)Ct(o,a,14-i,8,c(i));for(let i=0;i<8;i+=1)Ct(o,a,Lt-1-i,8,c(i));for(let i=8;i<15;i+=1)Ct(o,a,8,Lt-15+i,c(i))}const es=new Array(512),Cf=new Array(256);let Wh=!1;function w_(){if(Wh)return;let o=1;for(let a=0;a<255;a+=1)es[a]=o,Cf[o]=a,o<<=1,o&256&&(o^=285);for(let a=255;a<512;a+=1)es[a]=es[a-255];Wh=!0}function E_(o,a){return o===0||a===0?0:es[Cf[o]+Cf[a]]}function av(o,a){w_();const c=iv(a),i=Array.from({length:a},()=>0);for(const u of o){const d=u^i.shift();i.push(0);for(let h=0;h<a;h+=1)i[h]^=E_(c[h],d)}return i}function iv(o){w_();let a=[1];for(let c=0;c<o;c+=1){const i=Array.from({length:a.length+1},()=>0);for(let u=0;u<a.length;u+=1)i[u]^=E_(a[u],es[c]),i[u+1]^=a[u];a=i}return a.slice(1)}function sv(){const o=ne(ye=>ye.menuPage),a=ne(ye=>ye.closeMenuPage),c=ne(ye=>ye.user),i=ne(ye=>ye.active),u=ne(ye=>ye.layout),d=ne(ye=>ye.sliderValues),h=ne(ye=>ye.savedDevices),_=ne(ye=>ye.updateUsername),v=ne(ye=>ye.createOwnerPairingCode),y=ne(ye=>ye.applyOwnerPairingCode),x=ne(ye=>ye.clearSavedDevices),k=ne(ye=>ye.resetApplicationData),R=ne(ye=>ye.saveDeviceSettings),$=ne(ye=>ye.setEditMode),I=ne(ye=>ye.askConfirm),[W,K]=L.useState((c==null?void 0:c.username)??""),[G,H]=L.useState(!1),[ae,re]=L.useState(""),[se,_e]=L.useState(""),[le,J]=L.useState(!1),[xe,be]=L.useState(""),we=L.useRef(null),[ie,Te]=L.useState((i==null?void 0:i.iconID)??0),[Oe,Ge]=L.useState(!1),[B,Q]=L.useState((i==null?void 0:i.canOthersConnect)??!1),[ce,Ee]=L.useState((i==null?void 0:i.canOthersEdit)??!1),[oe,S]=L.useState((i==null?void 0:i.canOthersEditCode)??!1),[U,ee]=L.useState((i==null?void 0:i.gridCols)??11),[T,F]=L.useState((i==null?void 0:i.gridRows)??31),[Z,X]=L.useState(!1);L.useEffect(()=>{o==="user-settings"&&(K((c==null?void 0:c.username)??""),_e(""),be(""),J(!1))},[o,c==null?void 0:c.username]),L.useEffect(()=>{o==="device-settings"&&i&&(Te(i.iconID),Q(i.canOthersConnect),Ee(i.canOthersEdit),S(i.canOthersEditCode),ee(i.gridCols),F(i.gridRows))},[i,o]),L.useEffect(()=>{if(!le)return;let ye=!1,bn=null,Sn=0;async function Ce(){var Bt;const kn=window.BarcodeDetector;if(!kn||!((Bt=navigator.mediaDevices)!=null&&Bt.getUserMedia)){be("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),J(!1);return}try{bn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const zn=we.current;if(!zn)return;zn.srcObject=bn,await zn.play();const jr=new kn({formats:["qr_code"]}),Ar=async()=>{var vt;if(!ye){try{const Dr=(vt=(await jr.detect(zn)).find(yn=>yn.rawValue))==null?void 0:vt.rawValue;if(Dr){_e(Dr),y(Dr)&&H(!1),J(!1);return}}catch{}Sn=window.requestAnimationFrame(Ar)}};Sn=window.requestAnimationFrame(Ar)}catch{be("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),J(!1)}}return Ce(),()=>{ye=!0,Sn&&window.cancelAnimationFrame(Sn),bn==null||bn.getTracks().forEach(kn=>kn.stop())}},[y,le]);const Be=(ye,bn)=>Number.isFinite(ye)?Math.max(Ha,Math.min(Va,Math.round(ye))):bn,je=(c==null?void 0:c.username)??"",In=W.trim(),Pt=In.length>0&&In!==je;if(!o)return null;if(o==="user-settings"){let ye=function(){const Ce=v();Ce&&(re(Ce),_e(""),H(!0))},bn=function(){y(se)&&(_e(""),H(!1))};async function Sn(){var Ce;try{await((Ce=navigator.clipboard)==null?void 0:Ce.writeText(ae))}catch{}}return f.jsxs(f.Fragment,{children:[f.jsx(En,{title:"Brugerindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Ot,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${W.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:W,onChange:Ce=>K(Ce.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>_(W),disabled:!Pt,children:"Gem nyt brugernavn"}),f.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:ye,children:"Ejerkode"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>I({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{k()}}),children:"Slet brugerdata"})]})}),G&&f.jsx(En,{title:"Del ejerkode",onClose:()=>H(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(uv,{code:ae}),f.jsx("code",{className:"owner-code-text",children:ae}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Sn(),children:"Kopiér ejerkode"}),f.jsxs("div",{className:`field ${se.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-owner-code",value:se,onChange:Ce=>_e(Ce.target.value),autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:bn,disabled:!se.trim(),children:"Brug ejerkode i denne browser"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>J(Ce=>!Ce),children:le?"Stop scanning":"Scan QR-kode"}),xe&&f.jsx("div",{className:"notice",children:xe}),le&&f.jsx("video",{className:"owner-code-video",ref:we,muted:!0,playsInline:!0})]})})]})}if(o==="application-settings")return f.jsx(En,{title:"Applikationsindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Ot,{label:"Version",value:ns}),f.jsx(Ot,{label:"Bluetooth",value:Vo()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(Ot,{label:"Gemte enheder",value:String(h.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>I({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:x}),disabled:h.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(En,{title:"Om appen",onClose:a,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(Ot,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(Ot,{label:"Version",value:ns})]})});if(o==="application-help")return f.jsx(En,{title:"Hjælp til applikationen",onClose:a,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const ye=u.filter(Ce=>Ce.type==="slider"),bn=!!(i!=null&&i.isOwnedByMe);async function Sn(Ce=!1){if(!i||!bn)return;const kn=Be(U,i.gridCols),Bt=Be(T,i.gridRows),zn=ov(u,kn,Bt);if(zn&&!Ce){I({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${zn.requiredCols} kolonner og ${zn.requiredRows} rækker. Det nye gitter er ${kn} × ${Bt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Sn(!0)}});return}X(!0),await R(ie,B,B&&ce,B&&oe,kn,Bt),ee(kn),F(Bt),X(!1)}return f.jsx(En,{title:"Enhedsindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Ot,{label:"Navn",value:(i==null?void 0:i.deviceName)??"Ukendt"}),f.jsx(Ot,{label:"Ejer",value:fv(i)}),bn?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Ge(!0),children:f.jsx("img",{src:qa(ie),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:B?"":"active",onClick:()=>Q(!1),children:"Privat"}),f.jsx("button",{type:"button",className:B?"active":"",onClick:()=>Q(!0),children:"Offentlig"})]}),B&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:ce?"":"active",onClick:()=>Ee(!1),children:"Nej"}),f.jsx("button",{type:"button",className:ce?"active":"",onClick:()=>Ee(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:oe?"":"active",onClick:()=>S(!1),children:"Nej"}),f.jsx("button",{type:"button",className:oe?"active":"",onClick:()=>S(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Ha,max:Va,value:Number.isNaN(U)?"":U,onChange:Ce=>ee(parseInt(Ce.target.value,10)),onBlur:()=>ee(Be(U,(i==null?void 0:i.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Ha,max:Va,value:Number.isNaN(T)?"":T,onChange:Ce=>F(parseInt(Ce.target.value,10)),onBlur:()=>F(Be(T,(i==null?void 0:i.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Sn(),disabled:Z,children:Z?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Ot,{label:"Ikon ID",value:String((i==null?void 0:i.iconID)??0)}),f.jsx(Ot,{label:"Redigering",value:i!=null&&i.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(Ot,{label:"Gitter",value:`${(i==null?void 0:i.gridCols)??0} × ${(i==null?void 0:i.gridRows)??0}`})]}),f.jsx(Ot,{label:"Kontroller",value:String(u.length)}),ye.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),ye.map(Ce=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:Ce.name}),f.jsxs("span",{children:[Ce.sliderMin??0," til ",Ce.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",cv(Ce.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",d[Ce.name]??"Ikke brugt"]})]},Ce.name))]}),Oe&&f.jsx(i_,{selected:ie,onSelect:Te,onClose:()=>Ge(!1)})]})})}return f.jsx(En,{title:"Hjælp til enheden",onClose:a,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(i==null?void 0:i.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>$(!0),children:"Rediger layout"})]})})}function ov(o,a,c){let i=0,u=0;for(const d of o)Ga(d)&&(i=Math.max(i,Math.ceil((d.centerX2+d.spanX)/2)+1),u=Math.max(u,Math.ceil((d.centerY2+d.spanY)/2)+1));return a<i||c<u?{requiredCols:i,requiredRows:u}:null}function cv(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function uv({code:o}){const a=L.useMemo(()=>Jy(o),[o]),c=a.length;return f.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[f.jsx("rect",{width:c+8,height:c+8,fill:"white"}),a.map((i,u)=>i.map((d,h)=>d?f.jsx("rect",{x:h+4,y:u+4,width:"1",height:"1",fill:"currentColor"},`${h}-${u}`):null))]})}function fv(o){var a;return o?o.isOwnedByMe?"Dig":((a=o.ownerName)==null?void 0:a.trim())||"Anden bruger":"Ukendt"}function Ot({label:o,value:a}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:a})]})}function dv(){const o=ne(i=>i.confirmDialog),a=ne(i=>i.closeConfirm);if(!o)return null;function c(){o==null||o.onConfirm(),a()}return f.jsx(En,{title:o.title,onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:a,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:o.confirmLabel??"Fortsæt"})]})]})})}function mv(){const o=ne(i=>i.connectionLost),a=ne(i=>i.reconnectLostDevice),c=ne(i=>i.dismissConnectionLost);return o?f.jsx(En,{title:"Forbindelse afbrudt",onClose:c,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>a(),children:"Genforbind"})]})]})}):null}function pv(){const o=ne(c=>c.toast),a=ne(c=>c.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:a,children:o.message},o.id):null}function hv(){const o=ne(_=>_.screen),a=ne(_=>_.splashTarget),c=ne(_=>_.init),i=ne(_=>_.sideMenuOpen),u=ne(_=>_.debuggerOpen),[d,h]=L.useState(!1);return L.useEffect(()=>{c()},[c]),L.useEffect(()=>{if(i){h(!0);return}const _=setTimeout(()=>h(!1),140);return()=>clearTimeout(_)},[i]),f.jsxs("div",{className:"app",children:[o==="splash"&&a==="intro"&&f.jsx(bh,{}),o==="splash"&&a==="dashboard"&&f.jsx(yh,{}),o==="splash"&&f.jsx($0,{}),o==="intro"&&f.jsx(bh,{}),o==="dashboard"&&f.jsx(yh,{}),o==="connection"&&f.jsx(Z0,{}),o==="create"&&f.jsx(W0,{}),o==="control"&&f.jsx(Ob,{}),o==="ide"&&f.jsx(ky,{}),d&&f.jsx(Xy,{open:i}),f.jsx(sv,{}),f.jsx(mv,{}),f.jsx(dv,{}),u&&f.jsx(Qy,{}),f.jsx(pv,{})]})}function _v(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(a=>{console.warn("Service worker registration failed:",a)})})}_v();r0.createRoot(document.getElementById("root")).render(f.jsx(Wi.StrictMode,{children:f.jsx(hv,{})}));
