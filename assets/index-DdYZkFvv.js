var Gg=Object.defineProperty;var Yg=(o,i,c)=>i in o?Gg(o,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[i]=c;var ce=(o,i,c)=>Yg(o,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function c(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=c(u);fetch(u.href,d)}})();function Kh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ef={exports:{}},Ia={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Ig(){if(Xp)return Ia;Xp=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(s,u,d){var h=null;if(d!==void 0&&(h=""+d),u.key!==void 0&&(h=""+u.key),"key"in u){d={};for(var _ in u)_!=="key"&&(d[_]=u[_])}else d=u;return u=d.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:d}}return Ia.Fragment=i,Ia.jsx=c,Ia.jsxs=c,Ia}var Fp;function qg(){return Fp||(Fp=1,ef.exports=Ig()),ef.exports}var f=qg(),nf={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Pg(){if(Kp)return ve;Kp=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),T=Symbol.iterator;function P(k){return k===null||typeof k!="object"?null:(k=T&&k[T]||k["@@iterator"],typeof k=="function"?k:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,K={};function H(k,U,ee){this.props=k,this.context=U,this.refs=K,this.updater=ee||X}H.prototype.isReactComponent={},H.prototype.setState=function(k,U){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,U,"setState")},H.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function q(){}q.prototype=H.prototype;function le(k,U,ee){this.props=k,this.context=U,this.refs=K,this.updater=ee||X}var ie=le.prototype=new q;ie.constructor=le,W(ie,H.prototype),ie.isPureReactComponent=!0;var de=Array.isArray;function Ne(){}var re={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function be(k,U,ee){var A=ee.ref;return{$$typeof:o,type:k,key:U,ref:A!==void 0?A:null,props:ee}}function _e(k,U){return be(k.type,U,k.props)}function ye(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function ae(k){var U={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ee){return U[ee]})}var Ve=/\/+/g;function Re(k,U){return typeof k=="object"&&k!==null&&k.key!=null?ae(""+k.key):U.toString(36)}function Ge(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(Ne,Ne):(k.status="pending",k.then(function(U){k.status==="pending"&&(k.status="fulfilled",k.value=U)},function(U){k.status==="pending"&&(k.status="rejected",k.reason=U)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function O(k,U,ee,A,F){var Q=typeof k;(Q==="undefined"||Q==="boolean")&&(k=null);var $=!1;if(k===null)$=!0;else switch(Q){case"bigint":case"string":case"number":$=!0;break;case"object":switch(k.$$typeof){case o:case i:$=!0;break;case x:return $=k._init,O($(k._payload),U,ee,A,F)}}if($)return F=F(k),$=A===""?"."+Re(k,0):A,de(F)?(ee="",$!=null&&(ee=$.replace(Ve,"$&/")+"/"),O(F,U,ee,"",function(Yn){return Yn})):F!=null&&(ye(F)&&(F=_e(F,ee+(F.key==null||k&&k.key===F.key?"":(""+F.key).replace(Ve,"$&/")+"/")+$)),U.push(F)),1;$=0;var Be=A===""?".":A+":";if(de(k))for(var je=0;je<k.length;je++)A=k[je],Q=Be+Re(A,je),$+=O(A,U,ee,Q,F);else if(je=P(k),typeof je=="function")for(k=je.call(k),je=0;!(A=k.next()).done;)A=A.value,Q=Be+Re(A,je++),$+=O(A,U,ee,Q,F);else if(Q==="object"){if(typeof k.then=="function")return O(Ge(k),U,ee,A,F);throw U=String(k),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return $}function Z(k,U,ee){if(k==null)return k;var A=[],F=0;return O(k,A,"","",function(Q){return U.call(ee,Q,F++)}),A}function se(k){if(k._status===-1){var U=k._result;U=U(),U.then(function(ee){(k._status===0||k._status===-1)&&(k._status=1,k._result=ee)},function(ee){(k._status===0||k._status===-1)&&(k._status=2,k._result=ee)}),k._status===-1&&(k._status=0,k._result=U)}if(k._status===1)return k._result.default;throw k._result}var xe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},Ee={map:Z,forEach:function(k,U,ee){Z(k,function(){U.apply(this,arguments)},ee)},count:function(k){var U=0;return Z(k,function(){U++}),U},toArray:function(k){return Z(k,function(U){return U})||[]},only:function(k){if(!ye(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return ve.Activity=E,ve.Children=Ee,ve.Component=H,ve.Fragment=c,ve.Profiler=u,ve.PureComponent=le,ve.StrictMode=s,ve.Suspense=v,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,ve.__COMPILER_RUNTIME={__proto__:null,c:function(k){return re.H.useMemoCache(k)}},ve.cache=function(k){return function(){return k.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(k,U,ee){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var A=W({},k.props),F=k.key;if(U!=null)for(Q in U.key!==void 0&&(F=""+U.key),U)!J.call(U,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&U.ref===void 0||(A[Q]=U[Q]);var Q=arguments.length-2;if(Q===1)A.children=ee;else if(1<Q){for(var $=Array(Q),Be=0;Be<Q;Be++)$[Be]=arguments[Be+2];A.children=$}return be(k.type,F,A)},ve.createContext=function(k){return k={$$typeof:h,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:d,_context:k},k},ve.createElement=function(k,U,ee){var A,F={},Q=null;if(U!=null)for(A in U.key!==void 0&&(Q=""+U.key),U)J.call(U,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(F[A]=U[A]);var $=arguments.length-2;if($===1)F.children=ee;else if(1<$){for(var Be=Array($),je=0;je<$;je++)Be[je]=arguments[je+2];F.children=Be}if(k&&k.defaultProps)for(A in $=k.defaultProps,$)F[A]===void 0&&(F[A]=$[A]);return be(k,Q,F)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(k){return{$$typeof:_,render:k}},ve.isValidElement=ye,ve.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:se}},ve.memo=function(k,U){return{$$typeof:y,type:k,compare:U===void 0?null:U}},ve.startTransition=function(k){var U=re.T,ee={};re.T=ee;try{var A=k(),F=re.S;F!==null&&F(ee,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(Ne,xe)}catch(Q){xe(Q)}finally{U!==null&&ee.types!==null&&(U.types=ee.types),re.T=U}},ve.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},ve.use=function(k){return re.H.use(k)},ve.useActionState=function(k,U,ee){return re.H.useActionState(k,U,ee)},ve.useCallback=function(k,U){return re.H.useCallback(k,U)},ve.useContext=function(k){return re.H.useContext(k)},ve.useDebugValue=function(){},ve.useDeferredValue=function(k,U){return re.H.useDeferredValue(k,U)},ve.useEffect=function(k,U){return re.H.useEffect(k,U)},ve.useEffectEvent=function(k){return re.H.useEffectEvent(k)},ve.useId=function(){return re.H.useId()},ve.useImperativeHandle=function(k,U,ee){return re.H.useImperativeHandle(k,U,ee)},ve.useInsertionEffect=function(k,U){return re.H.useInsertionEffect(k,U)},ve.useLayoutEffect=function(k,U){return re.H.useLayoutEffect(k,U)},ve.useMemo=function(k,U){return re.H.useMemo(k,U)},ve.useOptimistic=function(k,U){return re.H.useOptimistic(k,U)},ve.useReducer=function(k,U,ee){return re.H.useReducer(k,U,ee)},ve.useRef=function(k){return re.H.useRef(k)},ve.useState=function(k){return re.H.useState(k)},ve.useSyncExternalStore=function(k,U,ee){return re.H.useSyncExternalStore(k,U,ee)},ve.useTransition=function(){return re.H.useTransition()},ve.version="19.2.7",ve}var Qp;function jf(){return Qp||(Qp=1,nf.exports=Pg()),nf.exports}var L=jf();const Za=Kh(L);var tf={exports:{}},qa={},rf={exports:{}},lf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function $g(){return Zp||(Zp=1,(function(o){function i(O,Z){var se=O.length;O.push(Z);e:for(;0<se;){var xe=se-1>>>1,Ee=O[xe];if(0<u(Ee,Z))O[xe]=Z,O[se]=Ee,se=xe;else break e}}function c(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Z=O[0],se=O.pop();if(se!==Z){O[0]=se;e:for(var xe=0,Ee=O.length,k=Ee>>>1;xe<k;){var U=2*(xe+1)-1,ee=O[U],A=U+1,F=O[A];if(0>u(ee,se))A<Ee&&0>u(F,ee)?(O[xe]=F,O[A]=se,xe=A):(O[xe]=ee,O[U]=se,xe=U);else if(A<Ee&&0>u(F,se))O[xe]=F,O[A]=se,xe=A;else break e}}return Z}function u(O,Z){var se=O.sortIndex-Z.sortIndex;return se!==0?se:O.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var h=Date,_=h.now();o.unstable_now=function(){return h.now()-_}}var v=[],y=[],x=1,E=null,T=3,P=!1,X=!1,W=!1,K=!1,H=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function ie(O){for(var Z=c(y);Z!==null;){if(Z.callback===null)s(y);else if(Z.startTime<=O)s(y),Z.sortIndex=Z.expirationTime,i(v,Z);else break;Z=c(y)}}function de(O){if(W=!1,ie(O),!X)if(c(v)!==null)X=!0,Ne||(Ne=!0,ae());else{var Z=c(y);Z!==null&&Ge(de,Z.startTime-O)}}var Ne=!1,re=-1,J=5,be=-1;function _e(){return K?!0:!(o.unstable_now()-be<J)}function ye(){if(K=!1,Ne){var O=o.unstable_now();be=O;var Z=!0;try{e:{X=!1,W&&(W=!1,q(re),re=-1),P=!0;var se=T;try{n:{for(ie(O),E=c(v);E!==null&&!(E.expirationTime>O&&_e());){var xe=E.callback;if(typeof xe=="function"){E.callback=null,T=E.priorityLevel;var Ee=xe(E.expirationTime<=O);if(O=o.unstable_now(),typeof Ee=="function"){E.callback=Ee,ie(O),Z=!0;break n}E===c(v)&&s(v),ie(O)}else s(v);E=c(v)}if(E!==null)Z=!0;else{var k=c(y);k!==null&&Ge(de,k.startTime-O),Z=!1}}break e}finally{E=null,T=se,P=!1}Z=void 0}}finally{Z?ae():Ne=!1}}}var ae;if(typeof le=="function")ae=function(){le(ye)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Re=Ve.port2;Ve.port1.onmessage=ye,ae=function(){Re.postMessage(null)}}else ae=function(){H(ye,0)};function Ge(O,Z){re=H(function(){O(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_next=function(O){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var se=T;T=Z;try{return O()}finally{T=se}},o.unstable_requestPaint=function(){K=!0},o.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var se=T;T=O;try{return Z()}finally{T=se}},o.unstable_scheduleCallback=function(O,Z,se){var xe=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?xe+se:xe):se=xe,O){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=se+Ee,O={id:x++,callback:Z,priorityLevel:O,startTime:se,expirationTime:Ee,sortIndex:-1},se>xe?(O.sortIndex=se,i(y,O),c(v)===null&&O===c(y)&&(W?(q(re),re=-1):W=!0,Ge(de,se-xe))):(O.sortIndex=Ee,i(v,O),X||P||(X=!0,Ne||(Ne=!0,ae()))),O},o.unstable_shouldYield=_e,o.unstable_wrapCallback=function(O){var Z=T;return function(){var se=T;T=Z;try{return O.apply(this,arguments)}finally{T=se}}}})(lf)),lf}var Wp;function Xg(){return Wp||(Wp=1,rf.exports=$g()),rf.exports}var af={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Fg(){if(Jp)return Gn;Jp=1;var o=jf();function i(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(v,y,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:E==null?null:""+E,children:v,containerInfo:y,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gn.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return d(v,y,null,x)},Gn.flushSync=function(v){var y=h.T,x=s.p;try{if(h.T=null,s.p=2,v)return v()}finally{h.T=y,s.p=x,s.d.f()}},Gn.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},Gn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Gn.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,E=_(x,y.crossOrigin),T=typeof y.integrity=="string"?y.integrity:void 0,P=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:P}):x==="script"&&s.d.X(v,{crossOrigin:E,integrity:T,fetchPriority:P,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Gn.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=_(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},Gn.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,E=_(x,y.crossOrigin);s.d.L(v,x,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Gn.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=_(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},Gn.requestFormReset=function(v){s.d.r(v)},Gn.unstable_batchedUpdates=function(v,y){return v(y)},Gn.useFormState=function(v,y,x){return h.H.useFormState(v,y,x)},Gn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Gn.version="19.2.7",Gn}var eh;function Kg(){if(eh)return af.exports;eh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),af.exports=Fg(),af.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function Qg(){if(nh)return qa;nh=1;var o=Xg(),i=jf(),c=Kg();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(d(e)!==e)throw Error(s(188))}function y(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===t)return v(l),e;if(a===r)return v(l),n;a=a.sibling}throw Error(s(188))}if(t.return!==r.return)t=l,r=a;else{for(var p=!1,g=l.child;g;){if(g===t){p=!0,t=l,r=a;break}if(g===r){p=!0,r=l,t=a;break}g=g.sibling}if(!p){for(g=a.child;g;){if(g===t){p=!0,t=a,r=l;break}if(g===r){p=!0,r=a,t=l;break}g=g.sibling}if(!p)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,T=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),le=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case H:return"Profiler";case K:return"StrictMode";case de:return"Suspense";case Ne:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case le:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case ie:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return n=e.displayName||null,n!==null?n:Re(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return Re(e(n))}catch{}}return null}var Ge=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},xe=[],Ee=-1;function k(e){return{current:e}}function U(e){0>Ee||(e.current=xe[Ee],xe[Ee]=null,Ee--)}function ee(e,n){Ee++,xe[Ee]=e.current,e.current=n}var A=k(null),F=k(null),Q=k(null),$=k(null);function Be(e,n){switch(ee(Q,n),ee(F,e),ee(A,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_p(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_p(n),e=gp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(A),ee(A,e)}function je(){U(A),U(F),U(Q)}function Yn(e){e.memoizedState!==null&&ee($,e);var n=A.current,t=gp(n,e.type);n!==t&&(ee(F,e),ee(A,t))}function Pt(e){F.current===e&&(U(A),U(F)),$.current===e&&(U($),Ha._currentValue=se)}var ge,bn;function En(e){if(ge===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ge=n&&n[1]||"",bn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ge+e+bn}var Oe=!1;function kn(e,n){if(!e||Oe)return"";Oe=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(z){var C=z}Reflect.construct(e,[],I)}else{try{I.call()}catch(z){C=z}e.call(I.prototype)}}else{try{throw Error()}catch(z){C=z}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(z){if(z&&C&&typeof z.stack=="string")return[z.stack,C.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),p=a[0],g=a[1];if(p&&g){var S=p.split(`
`),j=g.split(`
`);for(l=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(r===S.length||l===j.length)for(r=S.length-1,l=j.length-1;1<=r&&0<=l&&S[r]!==j[l];)l--;for(;1<=r&&0<=l;r--,l--)if(S[r]!==j[l]){if(r!==1||l!==1)do if(r--,l--,0>l||S[r]!==j[l]){var V=`
`+S[r].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=r&&0<=l);break}}}finally{Oe=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?En(t):""}function Lt(e,n){switch(e.tag){case 26:case 27:case 5:return En(e.type);case 16:return En("Lazy");case 13:return e.child!==n&&n!==null?En("Suspense Fallback"):En("Suspense");case 19:return En("SuspenseList");case 0:case 15:return kn(e.type,!1);case 11:return kn(e.type.render,!1);case 1:return kn(e.type,!0);case 31:return En("Activity");default:return""}}function Ln(e){try{var n="",t=null;do n+=Lt(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var jr=Object.prototype.hasOwnProperty,Ar=o.unstable_scheduleCallback,yt=o.unstable_cancelCallback,Kl=o.unstable_shouldYield,Dr=o.unstable_requestPaint,yn=o.unstable_now,dl=o.unstable_getCurrentPriorityLevel,ml=o.unstable_ImmediatePriority,qi=o.unstable_UserBlockingPriority,pl=o.unstable_NormalPriority,Kn=o.unstable_LowPriority,rt=o.unstable_IdlePriority,$t=o.log,Ql=o.unstable_setDisableYieldValue,hl=null,vn=null;function lt(e){if(typeof $t=="function"&&Ql(e),vn&&typeof vn.setStrictMode=="function")try{vn.setStrictMode(hl,e)}catch{}}var Rn=Math.clz32?Math.clz32:rr,Or=Math.log,Cr=Math.LN2;function rr(e){return e>>>=0,e===0?32:31-(Or(e)/Cr|0)|0}var Xt=256,In=262144,Ke=4194304;function Tn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mn(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,a=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var g=r&134217727;return g!==0?(r=g&~a,r!==0?l=Tn(r):(p&=g,p!==0?l=Tn(p):t||(t=g&~e,t!==0&&(l=Tn(t))))):(g=r&~a,g!==0?l=Tn(g):p!==0?l=Tn(p):t||(t=r&~e,t!==0&&(l=Tn(t)))),l===0?0:n!==0&&n!==l&&(n&a)===0&&(a=l&-l,t=n&-n,a>=t||a===32&&(t&4194048)!==0)?n:l}function zn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Vo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pi(){var e=Ke;return Ke<<=1,(Ke&62914560)===0&&(Ke=4194304),e}function Ft(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _l(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lr(e,n,t,r,l,a){var p=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var g=e.entanglements,S=e.expirationTimes,j=e.hiddenUpdates;for(t=p&~t;0<t;){var V=31-Rn(t),I=1<<V;g[V]=0,S[V]=-1;var C=j[V];if(C!==null)for(j[V]=null,V=0;V<C.length;V++){var z=C[V];z!==null&&(z.lane&=-536870913)}t&=~I}r!==0&&rs(e,r,0),a!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=a&~(p&~n))}function rs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Rn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function Zl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Rn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function ls(e,n){var t=n&-n;return t=(t&42)!==0?1:Br(t),(t&(e.suspendedLanes|n))!==0?0:t}function Br(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function on(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Vp(e.type))}function $i(e,n){var t=Z.p;try{return Z.p=e,n()}finally{Z.p=t}}var it=Math.random().toString(36).slice(2),cn="__reactFiber$"+it,un="__reactProps$"+it,Mn="__reactContainer$"+it,zt="__reactEvents$"+it,gl="__reactListeners$"+it,Ut="__reactHandles$"+it,ir="__reactResources$"+it,Ht="__reactMarker$"+it;function Vt(e){delete e[cn],delete e[un],delete e[zt],delete e[gl],delete e[Ut]}function Kt(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ep(e);e!==null;){if(t=e[cn])return t;e=Ep(e)}return n}e=t,t=e.parentNode}return null}function qn(e){if(e=e[cn]||e[Mn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Gt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Qn(e){var n=e[ir];return n||(n=e[ir]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ze(e){e[Ht]=!0}var ar=new Set,Xi={};function at(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Xi[e]=n,e=0;e<n.length;e++)ar.add(n[e])}var pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wl={},is={};function Go(e){return jr.call(is,e)?!0:jr.call(Wl,e)?!1:pe.test(e)?is[e]=!0:(Wl[e]=!0,!1)}function Jl(e,n,t){if(Go(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function ei(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Pn(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function xn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ot(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fi(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,a=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){t=""+p,a.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(p){t=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Un(e){if(!e._valueTracker){var n=ot(e)?"checked":"value";e._valueTracker=Fi(e,n,""+e[n])}}function as(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ot(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ss=/[\n"\\]/g;function Hn(e){return e.replace(ss,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Y(e,n,t,r,l,a,p,g){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xn(n)):e.value!==""+xn(n)&&(e.value=""+xn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Ki(e,p,xn(n)):t!=null?Ki(e,p,xn(t)):r!=null&&e.removeAttribute("value"),l==null&&a!=null&&(e.defaultChecked=!!a),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+xn(g):e.removeAttribute("name")}function os(e,n,t,r,l,a,p,g){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),n!=null||t!=null){if(!(a!=="submit"&&a!=="reset"||n!=null)){Un(e);return}t=t!=null?""+xn(t):"",n=n!=null?""+xn(n):t,g||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=g?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Un(e)}function Ki(e,n,t){n==="number"&&ni(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function xt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+xn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Qi(e,n,t){if(n!=null&&(n=""+xn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+xn(t):""}function bl(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(s(92));if(Ge(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=xn(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),Un(e)}function nn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var cs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lr(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||cs.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function yl(e,n,t){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&t[l]!==r&&Lr(e,l,r)}else for(var a in n)n.hasOwnProperty(a)&&Lr(e,a,n[a])}function Zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),us=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zr(e){return us.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tn(){}var sr=null;function Wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,wt=null;function fs(e){var n=qn(e);if(n&&(e=n.stateNode)){var t=e[un]||null;e:switch(e=n.stateNode,n.type){case"input":if(Y(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Hn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=r[un]||null;if(!l)throw Error(s(90));Y(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&as(r)}break e;case"textarea":Qi(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&xt(e,!!t.multiple,n,!1)}}}var ti=!1;function vl(e,n,t){if(ti)return e(n,t);ti=!0;try{var r=e(n);return r}finally{if(ti=!1,(Ur!==null||wt!==null)&&(lo(),Ur&&(n=Ur,e=wt,wt=Ur=null,fs(n),e)))for(n=0;n<e.length;n++)fs(e[n])}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var r=t[un]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=!1;if(St)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){Ji=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{Ji=!1}var Zt=null,ct=null,rn=null;function ea(){if(rn)return rn;var e,n=ct,t=n.length,r,l="value"in Zt?Zt.value:Zt.textContent,a=l.length;for(e=0;e<t&&n[e]===l[e];e++);var p=t-e;for(r=1;r<=p&&n[t-r]===l[a-r];r++);return rn=l.slice(e,1<r?1-r:void 0)}function Wt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wl(){return!0}function na(){return!1}function jn(e){function n(t,r,l,a,p){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=p,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(t=e[g],this[g]=t?t(a):a[g]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?wl:na,this.isPropagationStopped=na,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=jn(or),Sl=E({},or,{view:0,detail:0}),ds=jn(Sl),li,El,kl,Nl=E({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kl&&(kl&&e.type==="mousemove"?(li=e.screenX-kl.screenX,El=e.screenY-kl.screenY):El=li=0,kl=e),li)},movementY:function(e){return"movementY"in e?e.movementY:El}}),ta=jn(Nl),ms=E({},Nl,{dataTransfer:0}),Yo=jn(ms),Io=E({},Sl,{relatedTarget:0}),ra=jn(Io),qo=E({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Po=jn(qo),$o=E({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xo=jn($o),Fo=E({},or,{data:0}),ps=jn(Fo),Ko={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zo[e])?!!n[e]:!1}function la(){return Rl}var Wo=E({},Sl,{key:function(e){if(e.key){var n=Ko[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?Wt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hs=jn(Wo),Jo=E({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ia=jn(Jo),ec=E({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),nc=jn(ec),_s=E({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),tc=jn(_s),rc=E({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lc=jn(rc),ic=E({},or,{newState:0,oldState:0}),ac=jn(ic),sc=[9,13,27,32],Tl=St&&"CompositionEvent"in window,Vn=null;St&&"documentMode"in document&&(Vn=document.documentMode);var gs=St&&"TextEvent"in window&&!Vn,bs=St&&(!Tl||Vn&&8<Vn&&11>=Vn),ys=" ",vs=!1;function Hr(e,n){switch(e){case"keyup":return sc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ml(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function aa(e,n){switch(e){case"compositionend":return Ml(n);case"keypress":return n.which!==32?null:(vs=!0,ys);case"textInput":return e=n.data,e===ys&&vs?null:e;default:return null}}function xs(e,n){if(cr)return e==="compositionend"||!Tl&&Hr(e,n)?(e=ea(),rn=ct=Zt=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bs&&n.locale!=="ko"?null:n.data;default:return null}}var oc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ws(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!oc[e.type]:n==="textarea"}function m(e,n,t,r){Ur?wt?wt.push(r):wt=[r]:Ur=r,n=fo(n,"onChange"),0<n.length&&(t=new ri("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var b=null,w=null;function B(e){up(e,0)}function D(e){var n=Gt(e);if(as(n))return e}function ue(e,n){if(e==="change")return n}var we=!1;if(St){var We;if(St){var Ye="oninput"in document;if(!Ye){var $n=document.createElement("div");$n.setAttribute("oninput","return;"),Ye=typeof $n.oninput=="function"}We=Ye}else We=!1;we=We&&(!document.documentMode||9<document.documentMode)}function ur(){b&&(b.detachEvent("onpropertychange",Ie),w=b=null)}function Ie(e){if(e.propertyName==="value"&&D(w)){var n=[];m(n,w,e,Wi(e)),vl(B,n)}}function fr(e,n,t){e==="focusin"?(ur(),b=n,w=t,b.attachEvent("onpropertychange",Ie)):e==="focusout"&&ur()}function sa(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return D(w)}function jl(e,n){if(e==="click")return D(n)}function Vr(e,n){if(e==="input"||e==="change")return D(n)}function oa(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var An=typeof Object.is=="function"?Object.is:oa;function dr(e,n){if(An(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!jr.call(n,l)||!An(e[l],n[l]))return!1}return!0}function ii(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gr(e,n){var t=ii(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ii(t)}}function Ss(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ss(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ca(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ni(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ni(e.document)}return n}function cc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var v_=St&&"documentMode"in document&&11>=document.documentMode,ai=null,uc=null,ua=null,fc=!1;function Uf(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fc||ai==null||ai!==ni(r)||(r=ai,"selectionStart"in r&&cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ua&&dr(ua,r)||(ua=r,r=fo(uc,"onSelect"),0<r.length&&(n=new ri("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ai)))}function Al(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var si={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionrun:Al("Transition","TransitionRun"),transitionstart:Al("Transition","TransitionStart"),transitioncancel:Al("Transition","TransitionCancel"),transitionend:Al("Transition","TransitionEnd")},dc={},Hf={};St&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Dl(e){if(dc[e])return dc[e];if(!si[e])return e;var n=si[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hf)return dc[e]=n[t];return e}var Vf=Dl("animationend"),Gf=Dl("animationiteration"),Yf=Dl("animationstart"),x_=Dl("transitionrun"),w_=Dl("transitionstart"),S_=Dl("transitioncancel"),If=Dl("transitionend"),qf=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function Yt(e,n){qf.set(e,n),at(n,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],oi=0,pc=0;function ks(){for(var e=oi,n=pc=oi=0;n<e;){var t=Et[n];Et[n++]=null;var r=Et[n];Et[n++]=null;var l=Et[n];Et[n++]=null;var a=Et[n];if(Et[n++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}a!==0&&Pf(t,l,a)}}function Ns(e,n,t,r){Et[oi++]=e,Et[oi++]=n,Et[oi++]=t,Et[oi++]=r,pc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hc(e,n,t,r){return Ns(e,n,t,r),Rs(e)}function Ol(e,n){return Ns(e,null,null,n),Rs(e)}function Pf(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var l=!1,a=e.return;a!==null;)a.childLanes|=t,r=a.alternate,r!==null&&(r.childLanes|=t),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(l=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,l&&n!==null&&(l=31-Rn(t),e=a.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=t|536870912),a):null}function Rs(e){if(50<Da)throw Da=0,Eu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ci={};function E_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,n,t,r){return new E_(e,n,t,r)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mr(e,n){var t=e.alternate;return t===null?(t=ut(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function $f(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ts(e,n,t,r,l,a){var p=0;if(r=e,typeof e=="function")_c(e)&&(p=1);else if(typeof e=="string")p=Mg(e,t,A.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=ut(31,t,n,l),e.elementType=be,e.lanes=a,e;case W:return Cl(t.children,l,a,n);case K:p=8,l|=24;break;case H:return e=ut(12,t,n,l|2),e.elementType=H,e.lanes=a,e;case de:return e=ut(13,t,n,l),e.elementType=de,e.lanes=a,e;case Ne:return e=ut(19,t,n,l),e.elementType=Ne,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:p=10;break e;case q:p=9;break e;case ie:p=11;break e;case re:p=14;break e;case J:p=16,r=null;break e}p=29,t=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ut(p,t,n,l),n.elementType=e,n.type=r,n.lanes=a,n}function Cl(e,n,t,r){return e=ut(7,e,r,n),e.lanes=t,e}function gc(e,n,t){return e=ut(6,e,null,n),e.lanes=t,e}function Xf(e){var n=ut(18,null,null,0);return n.stateNode=e,n}function bc(e,n,t){return n=ut(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ff=new WeakMap;function kt(e,n){if(typeof e=="object"&&e!==null){var t=Ff.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ln(n)},Ff.set(e,n),n)}return{value:e,source:n,stack:Ln(n)}}var ui=[],fi=0,Ms=null,fa=0,Nt=[],Rt=0,Yr=null,Jt=1,er="";function pr(e,n){ui[fi++]=fa,ui[fi++]=Ms,Ms=e,fa=n}function Kf(e,n,t){Nt[Rt++]=Jt,Nt[Rt++]=er,Nt[Rt++]=Yr,Yr=e;var r=Jt;e=er;var l=32-Rn(r)-1;r&=~(1<<l),t+=1;var a=32-Rn(n)+l;if(30<a){var p=l-l%5;a=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Jt=1<<32-Rn(n)+l|t<<l|r,er=a+e}else Jt=1<<a|t<<l|r,er=e}function yc(e){e.return!==null&&(pr(e,1),Kf(e,1,0))}function vc(e){for(;e===Ms;)Ms=ui[--fi],ui[fi]=null,fa=ui[--fi],ui[fi]=null;for(;e===Yr;)Yr=Nt[--Rt],Nt[Rt]=null,er=Nt[--Rt],Nt[Rt]=null,Jt=Nt[--Rt],Nt[Rt]=null}function Qf(e,n){Nt[Rt++]=Jt,Nt[Rt++]=er,Nt[Rt++]=Yr,Jt=n.id,er=n.overflow,Yr=e}var Dn=null,Je=null,Ce=!1,Ir=null,Tt=!1,xc=Error(s(519));function qr(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw da(kt(n,e)),xc}function Zf(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[cn]=e,n[un]=r,t){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(t=0;t<Ca.length;t++)Me(Ca[t],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),os(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),bl(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||pp(n.textContent,t)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=tn),n=!0):n=!1,n||qr(e,!0)}function Wf(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Dn=Dn.return}}function di(e){if(e!==Dn)return!1;if(!Ce)return Wf(e),Ce=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Hu(e.type,e.memoizedProps)),t=!t),t&&Je&&qr(e),Wf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=Sp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=Sp(e)}else n===27?(n=Je,ll(e.type)?(e=qu,qu=null,Je=e):Je=n):Je=Dn?jt(e.stateNode.nextSibling):null;return!0}function Bl(){Je=Dn=null,Ce=!1}function wc(){var e=Ir;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),Ir=null),e}function da(e){Ir===null?Ir=[e]:Ir.push(e)}var Sc=k(null),Ll=null,hr=null;function Pr(e,n,t){ee(Sc,n._currentValue),n._currentValue=t}function _r(e){e._currentValue=Sc.current,U(Sc)}function Ec(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function kc(e,n,t,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var a=l.dependencies;if(a!==null){var p=l.child;a=a.firstContext;e:for(;a!==null;){var g=a;a=l;for(var S=0;S<n.length;S++)if(g.context===n[S]){a.lanes|=t,g=a.alternate,g!==null&&(g.lanes|=t),Ec(a.return,t,e),r||(p=null);break e}a=g.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=t,a=p.alternate,a!==null&&(a.lanes|=t),Ec(p,t,e),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===e){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function mi(e,n,t,r){e=null;for(var l=n,a=!1;l!==null;){if(!a){if((l.flags&524288)!==0)a=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var g=l.type;An(l.pendingProps.value,p.value)||(e!==null?e.push(g):e=[g])}}else if(l===$.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ha):e=[Ha])}l=l.return}e!==null&&kc(n,e,t,r),n.flags|=262144}function js(e){for(e=e.firstContext;e!==null;){if(!An(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zl(e){Ll=e,hr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Jf(Ll,e)}function As(e,n){return Ll===null&&zl(e),Jf(e,n)}function Jf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},hr===null){if(e===null)throw Error(s(308));hr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else hr=hr.next=n;return t}var k_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},N_=o.unstable_scheduleCallback,R_=o.unstable_NormalPriority,pn={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nc(){return{controller:new k_,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&N_(R_,function(){e.controller.abort()})}var pa=null,Rc=0,pi=0,hi=null;function T_(e,n){if(pa===null){var t=pa=[];Rc=0,pi=ju(),hi={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Rc++,n.then(ed,ed),n}function ed(){if(--Rc===0&&pa!==null){hi!==null&&(hi.status="fulfilled");var e=pa;pa=null,pi=0,hi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function M_(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var nd=O.S;O.S=function(e,n){Um=yn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&T_(e,n),nd!==null&&nd(e,n)};var Ul=k(null);function Tc(){var e=Ul.current;return e!==null?e:Qe.pooledCache}function Ds(e,n){n===null?ee(Ul,Ul.current):ee(Ul,n.pool)}function td(){var e=Tc();return e===null?null:{parent:pn._currentValue,pool:e}}var _i=Error(s(460)),Mc=Error(s(474)),Os=Error(s(542)),Cs={then:function(){}};function rd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ld(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(tn,tn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ad(e),e;default:if(typeof n.status=="string")n.then(tn,tn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ad(e),e}throw Vl=n,_i}}function Hl(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Vl=t,_i):t}}var Vl=null;function id(){if(Vl===null)throw Error(s(459));var e=Vl;return Vl=null,e}function ad(e){if(e===_i||e===Os)throw Error(s(483))}var gi=null,ha=0;function Bs(e){var n=ha;return ha+=1,gi===null&&(gi=[]),ld(gi,e,n)}function _a(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ls(e,n){throw n.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sd(e){function n(R,N){if(e){var M=R.deletions;M===null?(R.deletions=[N],R.flags|=16):M.push(N)}}function t(R,N){if(!e)return null;for(;N!==null;)n(R,N),N=N.sibling;return null}function r(R){for(var N=new Map;R!==null;)R.key!==null?N.set(R.key,R):N.set(R.index,R),R=R.sibling;return N}function l(R,N){return R=mr(R,N),R.index=0,R.sibling=null,R}function a(R,N,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<N?(R.flags|=67108866,N):M):(R.flags|=67108866,N)):(R.flags|=1048576,N)}function p(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function g(R,N,M,G){return N===null||N.tag!==6?(N=gc(M,R.mode,G),N.return=R,N):(N=l(N,M),N.return=R,N)}function S(R,N,M,G){var me=M.type;return me===W?V(R,N,M.props.children,G,M.key):N!==null&&(N.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===J&&Hl(me)===N.type)?(N=l(N,M.props),_a(N,M),N.return=R,N):(N=Ts(M.type,M.key,M.props,null,R.mode,G),_a(N,M),N.return=R,N)}function j(R,N,M,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=bc(M,R.mode,G),N.return=R,N):(N=l(N,M.children||[]),N.return=R,N)}function V(R,N,M,G,me){return N===null||N.tag!==7?(N=Cl(M,R.mode,G,me),N.return=R,N):(N=l(N,M),N.return=R,N)}function I(R,N,M){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=gc(""+N,R.mode,M),N.return=R,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case P:return M=Ts(N.type,N.key,N.props,null,R.mode,M),_a(M,N),M.return=R,M;case X:return N=bc(N,R.mode,M),N.return=R,N;case J:return N=Hl(N),I(R,N,M)}if(Ge(N)||ae(N))return N=Cl(N,R.mode,M,null),N.return=R,N;if(typeof N.then=="function")return I(R,Bs(N),M);if(N.$$typeof===le)return I(R,As(R,N),M);Ls(R,N)}return null}function C(R,N,M,G){var me=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return me!==null?null:g(R,N,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case P:return M.key===me?S(R,N,M,G):null;case X:return M.key===me?j(R,N,M,G):null;case J:return M=Hl(M),C(R,N,M,G)}if(Ge(M)||ae(M))return me!==null?null:V(R,N,M,G,null);if(typeof M.then=="function")return C(R,N,Bs(M),G);if(M.$$typeof===le)return C(R,N,As(R,M),G);Ls(R,M)}return null}function z(R,N,M,G,me){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return R=R.get(M)||null,g(N,R,""+G,me);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case P:return R=R.get(G.key===null?M:G.key)||null,S(N,R,G,me);case X:return R=R.get(G.key===null?M:G.key)||null,j(N,R,G,me);case J:return G=Hl(G),z(R,N,M,G,me)}if(Ge(G)||ae(G))return R=R.get(M)||null,V(N,R,G,me,null);if(typeof G.then=="function")return z(R,N,M,Bs(G),me);if(G.$$typeof===le)return z(R,N,M,As(N,G),me);Ls(N,G)}return null}function oe(R,N,M,G){for(var me=null,ze=null,fe=N,ke=N=0,De=null;fe!==null&&ke<M.length;ke++){fe.index>ke?(De=fe,fe=null):De=fe.sibling;var Ue=C(R,fe,M[ke],G);if(Ue===null){fe===null&&(fe=De);break}e&&fe&&Ue.alternate===null&&n(R,fe),N=a(Ue,N,ke),ze===null?me=Ue:ze.sibling=Ue,ze=Ue,fe=De}if(ke===M.length)return t(R,fe),Ce&&pr(R,ke),me;if(fe===null){for(;ke<M.length;ke++)fe=I(R,M[ke],G),fe!==null&&(N=a(fe,N,ke),ze===null?me=fe:ze.sibling=fe,ze=fe);return Ce&&pr(R,ke),me}for(fe=r(fe);ke<M.length;ke++)De=z(fe,R,ke,M[ke],G),De!==null&&(e&&De.alternate!==null&&fe.delete(De.key===null?ke:De.key),N=a(De,N,ke),ze===null?me=De:ze.sibling=De,ze=De);return e&&fe.forEach(function(cl){return n(R,cl)}),Ce&&pr(R,ke),me}function he(R,N,M,G){if(M==null)throw Error(s(151));for(var me=null,ze=null,fe=N,ke=N=0,De=null,Ue=M.next();fe!==null&&!Ue.done;ke++,Ue=M.next()){fe.index>ke?(De=fe,fe=null):De=fe.sibling;var cl=C(R,fe,Ue.value,G);if(cl===null){fe===null&&(fe=De);break}e&&fe&&cl.alternate===null&&n(R,fe),N=a(cl,N,ke),ze===null?me=cl:ze.sibling=cl,ze=cl,fe=De}if(Ue.done)return t(R,fe),Ce&&pr(R,ke),me;if(fe===null){for(;!Ue.done;ke++,Ue=M.next())Ue=I(R,Ue.value,G),Ue!==null&&(N=a(Ue,N,ke),ze===null?me=Ue:ze.sibling=Ue,ze=Ue);return Ce&&pr(R,ke),me}for(fe=r(fe);!Ue.done;ke++,Ue=M.next())Ue=z(fe,R,ke,Ue.value,G),Ue!==null&&(e&&Ue.alternate!==null&&fe.delete(Ue.key===null?ke:Ue.key),N=a(Ue,N,ke),ze===null?me=Ue:ze.sibling=Ue,ze=Ue);return e&&fe.forEach(function(Vg){return n(R,Vg)}),Ce&&pr(R,ke),me}function Fe(R,N,M,G){if(typeof M=="object"&&M!==null&&M.type===W&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case P:e:{for(var me=M.key;N!==null;){if(N.key===me){if(me=M.type,me===W){if(N.tag===7){t(R,N.sibling),G=l(N,M.props.children),G.return=R,R=G;break e}}else if(N.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===J&&Hl(me)===N.type){t(R,N.sibling),G=l(N,M.props),_a(G,M),G.return=R,R=G;break e}t(R,N);break}else n(R,N);N=N.sibling}M.type===W?(G=Cl(M.props.children,R.mode,G,M.key),G.return=R,R=G):(G=Ts(M.type,M.key,M.props,null,R.mode,G),_a(G,M),G.return=R,R=G)}return p(R);case X:e:{for(me=M.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){t(R,N.sibling),G=l(N,M.children||[]),G.return=R,R=G;break e}else{t(R,N);break}else n(R,N);N=N.sibling}G=bc(M,R.mode,G),G.return=R,R=G}return p(R);case J:return M=Hl(M),Fe(R,N,M,G)}if(Ge(M))return oe(R,N,M,G);if(ae(M)){if(me=ae(M),typeof me!="function")throw Error(s(150));return M=me.call(M),he(R,N,M,G)}if(typeof M.then=="function")return Fe(R,N,Bs(M),G);if(M.$$typeof===le)return Fe(R,N,As(R,M),G);Ls(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,N!==null&&N.tag===6?(t(R,N.sibling),G=l(N,M),G.return=R,R=G):(t(R,N),G=gc(M,R.mode,G),G.return=R,R=G),p(R)):t(R,N)}return function(R,N,M,G){try{ha=0;var me=Fe(R,N,M,G);return gi=null,me}catch(fe){if(fe===_i||fe===Os)throw fe;var ze=ut(29,fe,null,R.mode);return ze.lanes=G,ze.return=R,ze}finally{}}}var Gl=sd(!0),od=sd(!1),$r=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(He&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Rs(e),Pf(e,null,t),n}return Ns(e,r,n,t),Rs(e)}function ga(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zl(e,t)}}function Dc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var p={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};a===null?l=a=p:a=a.next=p,t=t.next}while(t!==null);a===null?l=a=n:a=a.next=n}else l=a=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Oc=!1;function ba(){if(Oc){var e=hi;if(e!==null)throw e}}function ya(e,n,t,r){Oc=!1;var l=e.updateQueue;$r=!1;var a=l.firstBaseUpdate,p=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var S=g,j=S.next;S.next=null,p===null?a=j:p.next=j,p=S;var V=e.alternate;V!==null&&(V=V.updateQueue,g=V.lastBaseUpdate,g!==p&&(g===null?V.firstBaseUpdate=j:g.next=j,V.lastBaseUpdate=S))}if(a!==null){var I=l.baseState;p=0,V=j=S=null,g=a;do{var C=g.lane&-536870913,z=C!==g.lane;if(z?(Ae&C)===C:(r&C)===C){C!==0&&C===pi&&(Oc=!0),V!==null&&(V=V.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var oe=e,he=g;C=n;var Fe=t;switch(he.tag){case 1:if(oe=he.payload,typeof oe=="function"){I=oe.call(Fe,I,C);break e}I=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=he.payload,C=typeof oe=="function"?oe.call(Fe,I,C):oe,C==null)break e;I=E({},I,C);break e;case 2:$r=!0}}C=g.callback,C!==null&&(e.flags|=64,z&&(e.flags|=8192),z=l.callbacks,z===null?l.callbacks=[C]:z.push(C))}else z={lane:C,tag:g.tag,payload:g.payload,callback:g.callback,next:null},V===null?(j=V=z,S=I):V=V.next=z,p|=C;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;z=g,g=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);V===null&&(S=I),l.baseState=S,l.firstBaseUpdate=j,l.lastBaseUpdate=V,a===null&&(l.shared.lanes=0),Jr|=p,e.lanes=p,e.memoizedState=I}}function cd(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ud(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)cd(t[e],n)}var bi=k(null),zs=k(0);function fd(e,n){e=kr,ee(zs,e),ee(bi,n),kr=e|n.baseLanes}function Cc(){ee(zs,kr),ee(bi,bi.current)}function Bc(){kr=zs.current,U(bi),U(zs)}var ft=k(null),Mt=null;function Kr(e){var n=e.alternate;ee(fn,fn.current&1),ee(ft,e),Mt===null&&(n===null||bi.current!==null||n.memoizedState!==null)&&(Mt=e)}function Lc(e){ee(fn,fn.current),ee(ft,e),Mt===null&&(Mt=e)}function dd(e){e.tag===22?(ee(fn,fn.current),ee(ft,e),Mt===null&&(Mt=e)):Qr()}function Qr(){ee(fn,fn.current),ee(ft,ft.current)}function dt(e){U(ft),Mt===e&&(Mt=null),U(fn)}var fn=k(0);function Us(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Yu(t)||Iu(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var gr=0,Se=null,$e=null,hn=null,Hs=!1,yi=!1,Yl=!1,Vs=0,va=0,vi=null,j_=0;function an(){throw Error(s(321))}function zc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!An(e[t],n[t]))return!1;return!0}function Uc(e,n,t,r,l,a){return gr=a,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Kd:Jc,Yl=!1,a=t(r,l),Yl=!1,yi&&(a=pd(n,t,r,l)),md(e),a}function md(e){O.H=Sa;var n=$e!==null&&$e.next!==null;if(gr=0,hn=$e=Se=null,Hs=!1,va=0,vi=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&js(e)&&(_n=!0))}function pd(e,n,t,r){Se=e;var l=0;do{if(yi&&(vi=null),va=0,yi=!1,25<=l)throw Error(s(301));if(l+=1,hn=$e=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}O.H=Qd,a=n(t,r)}while(yi);return a}function A_(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?xa(n):n,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(Se.flags|=1024),n}function Hc(){var e=Vs!==0;return Vs=0,e}function Vc(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Gc(e){if(Hs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Hs=!1}gr=0,hn=$e=Se=null,yi=!1,va=Vs=0,vi=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Se.memoizedState=hn=e:hn=hn.next=e,hn}function dn(){if($e===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=hn===null?Se.memoizedState:hn.next;if(n!==null)hn=n,$e=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},hn===null?Se.memoizedState=hn=e:hn=hn.next=e}return hn}function Gs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xa(e){var n=va;return va+=1,vi===null&&(vi=[]),e=ld(vi,e,n),n=Se,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Kd:Jc),e}function Ys(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xa(e);if(e.$$typeof===le)return On(e)}throw Error(s(438,String(e)))}function Yc(e){var n=null,t=Se.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=Se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Gs(),Se.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=_e;return n.index++,t}function br(e,n){return typeof n=="function"?n(e):n}function Is(e){var n=dn();return Ic(n,$e,e)}function Ic(e,n,t){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var l=e.baseQueue,a=r.pending;if(a!==null){if(l!==null){var p=l.next;l.next=a.next,a.next=p}n.baseQueue=l=a,r.pending=null}if(a=e.baseState,l===null)e.memoizedState=a;else{n=l.next;var g=p=null,S=null,j=n,V=!1;do{var I=j.lane&-536870913;if(I!==j.lane?(Ae&I)===I:(gr&I)===I){var C=j.revertLane;if(C===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),I===pi&&(V=!0);else if((gr&C)===C){j=j.next,C===pi&&(V=!0);continue}else I={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(g=S=I,p=a):S=S.next=I,Se.lanes|=C,Jr|=C;I=j.action,Yl&&t(a,I),a=j.hasEagerState?j.eagerState:t(a,I)}else C={lane:I,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(g=S=C,p=a):S=S.next=C,Se.lanes|=I,Jr|=I;j=j.next}while(j!==null&&j!==n);if(S===null?p=a:S.next=g,!An(a,e.memoizedState)&&(_n=!0,V&&(t=hi,t!==null)))throw t;e.memoizedState=a,e.baseState=p,e.baseQueue=S,r.lastRenderedState=a}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qc(e){var n=dn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,a=n.memoizedState;if(l!==null){t.pending=null;var p=l=l.next;do a=e(a,p.action),p=p.next;while(p!==l);An(a,n.memoizedState)||(_n=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function hd(e,n,t){var r=Se,l=dn(),a=Ce;if(a){if(t===void 0)throw Error(s(407));t=t()}else t=n();var p=!An(($e||l).memoizedState,t);if(p&&(l.memoizedState=t,_n=!0),l=l.queue,Xc(bd.bind(null,r,l,e),[e]),l.getSnapshot!==n||p||hn!==null&&hn.memoizedState.tag&1){if(r.flags|=2048,xi(9,{destroy:void 0},gd.bind(null,r,l,t,n),null),Qe===null)throw Error(s(349));a||(gr&127)!==0||_d(r,n,t)}return t}function _d(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Se.updateQueue,n===null?(n=Gs(),Se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function gd(e,n,t,r){n.value=t,n.getSnapshot=r,yd(n)&&vd(e)}function bd(e,n,t){return t(function(){yd(n)&&vd(e)})}function yd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!An(e,t)}catch{return!0}}function vd(e){var n=Ol(e,2);n!==null&&tt(n,e,2)}function Pc(e){var n=Xn();if(typeof e=="function"){var t=e;if(e=t(),Yl){lt(!0);try{t()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},n}function xd(e,n,t,r){return e.baseState=t,Ic(e,$e,typeof r=="function"?r:br)}function D_(e,n,t,r,l){if($s(e))throw Error(s(485));if(e=n.action,e!==null){var a={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){a.listeners.push(p)}};O.T!==null?t(!0):a.isTransition=!1,r(a),t=n.pending,t===null?(a.next=n.pending=a,wd(n,a)):(a.next=t.next,n.pending=t.next=a)}}function wd(e,n){var t=n.action,r=n.payload,l=e.state;if(n.isTransition){var a=O.T,p={};O.T=p;try{var g=t(l,r),S=O.S;S!==null&&S(p,g),Sd(e,n,g)}catch(j){$c(e,n,j)}finally{a!==null&&p.types!==null&&(a.types=p.types),O.T=a}}else try{a=t(l,r),Sd(e,n,a)}catch(j){$c(e,n,j)}}function Sd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){Ed(e,n,r)},function(r){return $c(e,n,r)}):Ed(e,n,t)}function Ed(e,n,t){n.status="fulfilled",n.value=t,kd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,wd(e,t)))}function $c(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,kd(n),n=n.next;while(n!==r)}e.action=null}function kd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Nd(e,n){return n}function Rd(e,n){if(Ce){var t=Qe.formState;if(t!==null){e:{var r=Se;if(Ce){if(Je){n:{for(var l=Je,a=Tt;l.nodeType!==8;){if(!a){l=null;break n}if(l=jt(l.nextSibling),l===null){l=null;break n}}a=l.data,l=a==="F!"||a==="F"?l:null}if(l){Je=jt(l.nextSibling),r=l.data==="F!";break e}}qr(r)}r=!1}r&&(n=t[0])}}return t=Xn(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nd,lastRenderedState:n},t.queue=r,t=$d.bind(null,Se,r),r.dispatch=t,r=Pc(!1),a=Wc.bind(null,Se,!1,r.queue),r=Xn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,t=D_.bind(null,Se,l,a,t),l.dispatch=t,r.memoizedState=e,[n,t,!1]}function Td(e){var n=dn();return Md(n,$e,e)}function Md(e,n,t){if(n=Ic(e,n,Nd)[0],e=Is(br)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=xa(n)}catch(p){throw p===_i?Os:p}else r=n;n=dn();var l=n.queue,a=l.dispatch;return t!==n.memoizedState&&(Se.flags|=2048,xi(9,{destroy:void 0},O_.bind(null,l,t),null)),[r,a,e]}function O_(e,n){e.action=n}function jd(e){var n=dn(),t=$e;if(t!==null)return Md(n,t,e);dn(),n=n.memoizedState,t=dn();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function xi(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Gs(),Se.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Ad(){return dn().memoizedState}function qs(e,n,t,r){var l=Xn();Se.flags|=e,l.memoizedState=xi(1|n,{destroy:void 0},t,r===void 0?null:r)}function Ps(e,n,t,r){var l=dn();r=r===void 0?null:r;var a=l.memoizedState.inst;$e!==null&&r!==null&&zc(r,$e.memoizedState.deps)?l.memoizedState=xi(n,a,t,r):(Se.flags|=e,l.memoizedState=xi(1|n,a,t,r))}function Dd(e,n){qs(8390656,8,e,n)}function Xc(e,n){Ps(2048,8,e,n)}function C_(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Gs(),Se.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Od(e){var n=dn().memoizedState;return C_({ref:n,nextImpl:e}),function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cd(e,n){return Ps(4,2,e,n)}function Bd(e,n){return Ps(4,4,e,n)}function Ld(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zd(e,n,t){t=t!=null?t.concat([e]):null,Ps(4,4,Ld.bind(null,n,e),t)}function Fc(){}function Ud(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&zc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Hd(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&zc(n,r[1]))return r[0];if(r=e(),Yl){lt(!0);try{e()}finally{lt(!1)}}return t.memoizedState=[r,n],r}function Kc(e,n,t){return t===void 0||(gr&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Vm(),Se.lanes|=e,Jr|=e,t)}function Vd(e,n,t,r){return An(t,n)?t:bi.current!==null?(e=Kc(e,t,r),An(e,n)||(_n=!0),e):(gr&42)===0||(gr&1073741824)!==0&&(Ae&261930)===0?(_n=!0,e.memoizedState=t):(e=Vm(),Se.lanes|=e,Jr|=e,n)}function Gd(e,n,t,r,l){var a=Z.p;Z.p=a!==0&&8>a?a:8;var p=O.T,g={};O.T=g,Wc(e,!1,n,t);try{var S=l(),j=O.S;if(j!==null&&j(g,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var V=M_(S,r);wa(e,n,V,ht(e))}else wa(e,n,r,ht(e))}catch(I){wa(e,n,{then:function(){},status:"rejected",reason:I},ht())}finally{Z.p=a,p!==null&&g.types!==null&&(p.types=g.types),O.T=p}}function B_(){}function Qc(e,n,t,r){if(e.tag!==5)throw Error(s(476));var l=Yd(e).queue;Gd(e,l,n,se,t===null?B_:function(){return Id(e),t(r)})}function Yd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:se},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Id(e){var n=Yd(e);n.next===null&&(n=e.alternate.memoizedState),wa(e,n.next.queue,{},ht())}function Zc(){return On(Ha)}function qd(){return dn().memoizedState}function Pd(){return dn().memoizedState}function L_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=ht();e=Xr(t);var r=Fr(n,e,t);r!==null&&(tt(r,n,t),ga(r,n,t)),n={cache:Nc()},e.payload=n;return}n=n.return}}function z_(e,n,t){var r=ht();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},$s(e)?Xd(n,t):(t=hc(e,n,t,r),t!==null&&(tt(t,e,r),Fd(t,n,r)))}function $d(e,n,t){var r=ht();wa(e,n,t,r)}function wa(e,n,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if($s(e))Xd(n,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var p=n.lastRenderedState,g=a(p,t);if(l.hasEagerState=!0,l.eagerState=g,An(g,p))return Ns(e,n,l,0),Qe===null&&ks(),!1}catch{}finally{}if(t=hc(e,n,l,r),t!==null)return tt(t,e,r),Fd(t,n,r),!0}return!1}function Wc(e,n,t,r){if(r={lane:2,revertLane:ju(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},$s(e)){if(n)throw Error(s(479))}else n=hc(e,t,r,2),n!==null&&tt(n,e,2)}function $s(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Xd(e,n){yi=Hs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Fd(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zl(e,t)}}var Sa={readContext:On,use:Ys,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Sa.useEffectEvent=an;var Kd={readContext:On,use:Ys,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:Dd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,qs(4194308,4,Ld.bind(null,n,e),t)},useLayoutEffect:function(e,n){return qs(4194308,4,e,n)},useInsertionEffect:function(e,n){qs(4,2,e,n)},useMemo:function(e,n){var t=Xn();n=n===void 0?null:n;var r=e();if(Yl){lt(!0);try{e()}finally{lt(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=Xn();if(t!==void 0){var l=t(n);if(Yl){lt(!0);try{t(n)}finally{lt(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=z_.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Pc(e);var n=e.queue,t=$d.bind(null,Se,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Fc,useDeferredValue:function(e,n){var t=Xn();return Kc(t,e,n)},useTransition:function(){var e=Pc(!1);return e=Gd.bind(null,Se,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=Se,l=Xn();if(Ce){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Qe===null)throw Error(s(349));(Ae&127)!==0||_d(r,n,t)}l.memoizedState=t;var a={value:t,getSnapshot:n};return l.queue=a,Dd(bd.bind(null,r,a,e),[e]),r.flags|=2048,xi(9,{destroy:void 0},gd.bind(null,r,a,t,n),null),t},useId:function(){var e=Xn(),n=Qe.identifierPrefix;if(Ce){var t=er,r=Jt;t=(r&~(1<<32-Rn(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Vs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=j_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zc,useFormState:Rd,useActionState:Rd,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Wc.bind(null,Se,!0,t),t.dispatch=n,[e,n]},useMemoCache:Yc,useCacheRefresh:function(){return Xn().memoizedState=L_.bind(null,Se)},useEffectEvent:function(e){var n=Xn(),t={impl:e};return n.memoizedState=t,function(){if((He&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}},Jc={readContext:On,use:Ys,useCallback:Ud,useContext:On,useEffect:Xc,useImperativeHandle:zd,useInsertionEffect:Cd,useLayoutEffect:Bd,useMemo:Hd,useReducer:Is,useRef:Ad,useState:function(){return Is(br)},useDebugValue:Fc,useDeferredValue:function(e,n){var t=dn();return Vd(t,$e.memoizedState,e,n)},useTransition:function(){var e=Is(br)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:xa(e),n]},useSyncExternalStore:hd,useId:qd,useHostTransitionStatus:Zc,useFormState:Td,useActionState:Td,useOptimistic:function(e,n){var t=dn();return xd(t,$e,e,n)},useMemoCache:Yc,useCacheRefresh:Pd};Jc.useEffectEvent=Od;var Qd={readContext:On,use:Ys,useCallback:Ud,useContext:On,useEffect:Xc,useImperativeHandle:zd,useInsertionEffect:Cd,useLayoutEffect:Bd,useMemo:Hd,useReducer:qc,useRef:Ad,useState:function(){return qc(br)},useDebugValue:Fc,useDeferredValue:function(e,n){var t=dn();return $e===null?Kc(t,e,n):Vd(t,$e.memoizedState,e,n)},useTransition:function(){var e=qc(br)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:xa(e),n]},useSyncExternalStore:hd,useId:qd,useHostTransitionStatus:Zc,useFormState:jd,useActionState:jd,useOptimistic:function(e,n){var t=dn();return $e!==null?xd(t,$e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Yc,useCacheRefresh:Pd};Qd.useEffectEvent=Od;function eu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var nu={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ht(),l=Xr(r);l.payload=n,t!=null&&(l.callback=t),n=Fr(e,l,r),n!==null&&(tt(n,e,r),ga(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ht(),l=Xr(r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Fr(e,l,r),n!==null&&(tt(n,e,r),ga(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ht(),r=Xr(t);r.tag=2,n!=null&&(r.callback=n),n=Fr(e,r,t),n!==null&&(tt(n,e,t),ga(n,e,t))}};function Zd(e,n,t,r,l,a,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,p):n.prototype&&n.prototype.isPureReactComponent?!dr(t,r)||!dr(l,a):!0}function Wd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&nu.enqueueReplaceState(n,n.state,null)}function Il(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function Jd(e){Es(e)}function em(e){console.error(e)}function nm(e){Es(e)}function Xs(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function tm(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function tu(e,n,t){return t=Xr(t),t.tag=3,t.payload={element:null},t.callback=function(){Xs(e,n)},t}function rm(e){return e=Xr(e),e.tag=3,e}function lm(e,n,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var a=r.value;e.payload=function(){return l(a)},e.callback=function(){tm(n,t,r)}}var p=t.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){tm(n,t,r),typeof l!="function"&&(el===null?el=new Set([this]):el.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})})}function U_(e,n,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&mi(n,t,l,!0),t=ft.current,t!==null){switch(t.tag){case 31:case 13:return Mt===null?io():t.alternate===null&&sn===0&&(sn=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===Cs?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Ru(e,r,l)),!1;case 22:return t.flags|=65536,r===Cs?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Ru(e,r,l)),!1}throw Error(s(435,t.tag))}return Ru(e,r,l),io(),!1}if(Ce)return n=ft.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==xc&&(e=Error(s(422),{cause:r}),da(kt(e,t)))):(r!==xc&&(n=Error(s(423),{cause:r}),da(kt(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=kt(r,t),l=tu(e.stateNode,r,l),Dc(e,l),sn!==4&&(sn=2)),!1;var a=Error(s(520),{cause:r});if(a=kt(a,t),Aa===null?Aa=[a]:Aa.push(a),sn!==4&&(sn=2),n===null)return!0;r=kt(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=tu(t.stateNode,r,e),Dc(t,e),!1;case 1:if(n=t.type,a=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(el===null||!el.has(a))))return t.flags|=65536,l&=-l,t.lanes|=l,l=rm(l),lm(l,e,t,r),Dc(t,l),!1}t=t.return}while(t!==null);return!1}var ru=Error(s(461)),_n=!1;function Cn(e,n,t,r){n.child=e===null?od(n,null,t,r):Gl(n,e.child,t,r)}function im(e,n,t,r,l){t=t.render;var a=n.ref;if("ref"in r){var p={};for(var g in r)g!=="ref"&&(p[g]=r[g])}else p=r;return zl(n),r=Uc(e,n,t,p,a,l),g=Hc(),e!==null&&!_n?(Vc(e,n,l),yr(e,n,l)):(Ce&&g&&yc(n),n.flags|=1,Cn(e,n,r,l),n.child)}function am(e,n,t,r,l){if(e===null){var a=t.type;return typeof a=="function"&&!_c(a)&&a.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=a,sm(e,n,a,r,l)):(e=Ts(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!fu(e,l)){var p=a.memoizedProps;if(t=t.compare,t=t!==null?t:dr,t(p,r)&&e.ref===n.ref)return yr(e,n,l)}return n.flags|=1,e=mr(a,r),e.ref=n.ref,e.return=n,n.child=e}function sm(e,n,t,r,l){if(e!==null){var a=e.memoizedProps;if(dr(a,r)&&e.ref===n.ref)if(_n=!1,n.pendingProps=r=a,fu(e,l))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,yr(e,n,l)}return lu(e,n,t,r,l)}function om(e,n,t,r){var l=r.children,a=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(a=a!==null?a.baseLanes|t:t,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~a}else r=0,n.child=null;return cm(e,n,a,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ds(n,a!==null?a.cachePool:null),a!==null?fd(n,a):Cc(),dd(n);else return r=n.lanes=536870912,cm(e,n,a!==null?a.baseLanes|t:t,t,r)}else a!==null?(Ds(n,a.cachePool),fd(n,a),Qr(),n.memoizedState=null):(e!==null&&Ds(n,null),Cc(),Qr());return Cn(e,n,l,t),n.child}function Ea(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cm(e,n,t,r,l){var a=Tc();return a=a===null?null:{parent:pn._currentValue,pool:a},n.memoizedState={baseLanes:t,cachePool:a},e!==null&&Ds(n,null),Cc(),dd(n),e!==null&&mi(e,n,r,!0),n.childLanes=l,null}function Fs(e,n){return n=Qs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function um(e,n,t){return Gl(n,e.child,null,t),e=Fs(n,n.pendingProps),e.flags|=2,dt(n),n.memoizedState=null,e}function H_(e,n,t){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(r.mode==="hidden")return e=Fs(n,r),n.lanes=536870912,Ea(null,e);if(Lc(n),(e=Je)?(e=wp(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yr!==null?{id:Jt,overflow:er}:null,retryLane:536870912,hydrationErrors:null},t=Xf(e),t.return=n,n.child=t,Dn=n,Je=null)):e=null,e===null)throw qr(n);return n.lanes=536870912,null}return Fs(n,r)}var a=e.memoizedState;if(a!==null){var p=a.dehydrated;if(Lc(n),l)if(n.flags&256)n.flags&=-257,n=um(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||mi(e,n,t,!1),l=(t&e.childLanes)!==0,_n||l){if(r=Qe,r!==null&&(p=ls(r,t),p!==0&&p!==a.retryLane))throw a.retryLane=p,Ol(e,p),tt(r,e,p),ru;io(),n=um(e,n,t)}else e=a.treeContext,Je=jt(p.nextSibling),Dn=n,Ce=!0,Ir=null,Tt=!1,e!==null&&Qf(n,e),n=Fs(n,r),n.flags|=4096;return n}return e=mr(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ks(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function lu(e,n,t,r,l){return zl(n),t=Uc(e,n,t,r,void 0,l),r=Hc(),e!==null&&!_n?(Vc(e,n,l),yr(e,n,l)):(Ce&&r&&yc(n),n.flags|=1,Cn(e,n,t,l),n.child)}function fm(e,n,t,r,l,a){return zl(n),n.updateQueue=null,t=pd(n,r,t,l),md(e),r=Hc(),e!==null&&!_n?(Vc(e,n,a),yr(e,n,a)):(Ce&&r&&yc(n),n.flags|=1,Cn(e,n,t,a),n.child)}function dm(e,n,t,r,l){if(zl(n),n.stateNode===null){var a=ci,p=t.contextType;typeof p=="object"&&p!==null&&(a=On(p)),a=new t(r,a),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=nu,n.stateNode=a,a._reactInternals=n,a=n.stateNode,a.props=r,a.state=n.memoizedState,a.refs={},jc(n),p=t.contextType,a.context=typeof p=="object"&&p!==null?On(p):ci,a.state=n.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(eu(n,t,p,r),a.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(p=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),p!==a.state&&nu.enqueueReplaceState(a,a.state,null),ya(n,r,a,l),ba(),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){a=n.stateNode;var g=n.memoizedProps,S=Il(t,g);a.props=S;var j=a.context,V=t.contextType;p=ci,typeof V=="object"&&V!==null&&(p=On(V));var I=t.getDerivedStateFromProps;V=typeof I=="function"||typeof a.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,V||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(g||j!==p)&&Wd(n,a,r,p),$r=!1;var C=n.memoizedState;a.state=C,ya(n,r,a,l),ba(),j=n.memoizedState,g||C!==j||$r?(typeof I=="function"&&(eu(n,t,I,r),j=n.memoizedState),(S=$r||Zd(n,t,S,r,C,j,p))?(V||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),a.props=r,a.state=j,a.context=p,r=S):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Ac(e,n),p=n.memoizedProps,V=Il(t,p),a.props=V,I=n.pendingProps,C=a.context,j=t.contextType,S=ci,typeof j=="object"&&j!==null&&(S=On(j)),g=t.getDerivedStateFromProps,(j=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(p!==I||C!==S)&&Wd(n,a,r,S),$r=!1,C=n.memoizedState,a.state=C,ya(n,r,a,l),ba();var z=n.memoizedState;p!==I||C!==z||$r||e!==null&&e.dependencies!==null&&js(e.dependencies)?(typeof g=="function"&&(eu(n,t,g,r),z=n.memoizedState),(V=$r||Zd(n,t,V,r,C,z,S)||e!==null&&e.dependencies!==null&&js(e.dependencies))?(j||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,z,S),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,z,S)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=z),a.props=r,a.state=z,a.context=S,r=V):(typeof a.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),r=!1)}return a=r,Ks(e,n),r=(n.flags&128)!==0,a||r?(a=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:a.render(),n.flags|=1,e!==null&&r?(n.child=Gl(n,e.child,null,l),n.child=Gl(n,null,t,l)):Cn(e,n,t,l),n.memoizedState=a.state,e=n.child):e=yr(e,n,l),e}function mm(e,n,t,r){return Bl(),n.flags|=256,Cn(e,n,t,r),n.child}var iu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function au(e){return{baseLanes:e,cachePool:td()}}function su(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=pt),e}function pm(e,n,t){var r=n.pendingProps,l=!1,a=(n.flags&128)!==0,p;if((p=a)||(p=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(l?Kr(n):Qr(),(e=Je)?(e=wp(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yr!==null?{id:Jt,overflow:er}:null,retryLane:536870912,hydrationErrors:null},t=Xf(e),t.return=n,n.child=t,Dn=n,Je=null)):e=null,e===null)throw qr(n);return Iu(e)?n.lanes=32:n.lanes=536870912,null}var g=r.children;return r=r.fallback,l?(Qr(),l=n.mode,g=Qs({mode:"hidden",children:g},l),r=Cl(r,l,t,null),g.return=n,r.return=n,g.sibling=r,n.child=g,r=n.child,r.memoizedState=au(t),r.childLanes=su(e,p,t),n.memoizedState=iu,Ea(null,r)):(Kr(n),ou(n,g))}var S=e.memoizedState;if(S!==null&&(g=S.dehydrated,g!==null)){if(a)n.flags&256?(Kr(n),n.flags&=-257,n=cu(e,n,t)):n.memoizedState!==null?(Qr(),n.child=e.child,n.flags|=128,n=null):(Qr(),g=r.fallback,l=n.mode,r=Qs({mode:"visible",children:r.children},l),g=Cl(g,l,t,null),g.flags|=2,r.return=n,g.return=n,r.sibling=g,n.child=r,Gl(n,e.child,null,t),r=n.child,r.memoizedState=au(t),r.childLanes=su(e,p,t),n.memoizedState=iu,n=Ea(null,r));else if(Kr(n),Iu(g)){if(p=g.nextSibling&&g.nextSibling.dataset,p)var j=p.dgst;p=j,r=Error(s(419)),r.stack="",r.digest=p,da({value:r,source:null,stack:null}),n=cu(e,n,t)}else if(_n||mi(e,n,t,!1),p=(t&e.childLanes)!==0,_n||p){if(p=Qe,p!==null&&(r=ls(p,t),r!==0&&r!==S.retryLane))throw S.retryLane=r,Ol(e,r),tt(p,e,r),ru;Yu(g)||io(),n=cu(e,n,t)}else Yu(g)?(n.flags|=192,n.child=e.child,n=null):(e=S.treeContext,Je=jt(g.nextSibling),Dn=n,Ce=!0,Ir=null,Tt=!1,e!==null&&Qf(n,e),n=ou(n,r.children),n.flags|=4096);return n}return l?(Qr(),g=r.fallback,l=n.mode,S=e.child,j=S.sibling,r=mr(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,j!==null?g=mr(j,g):(g=Cl(g,l,t,null),g.flags|=2),g.return=n,r.return=n,r.sibling=g,n.child=r,Ea(null,r),r=n.child,g=e.child.memoizedState,g===null?g=au(t):(l=g.cachePool,l!==null?(S=pn._currentValue,l=l.parent!==S?{parent:S,pool:S}:l):l=td(),g={baseLanes:g.baseLanes|t,cachePool:l}),r.memoizedState=g,r.childLanes=su(e,p,t),n.memoizedState=iu,Ea(e.child,r)):(Kr(n),t=e.child,e=t.sibling,t=mr(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=t,n.memoizedState=null,t)}function ou(e,n){return n=Qs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Qs(e,n){return e=ut(22,e,null,n),e.lanes=0,e}function cu(e,n,t){return Gl(n,e.child,null,t),e=ou(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hm(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ec(e.return,n,t)}function uu(e,n,t,r,l,a){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:a}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=t,p.tailMode=l,p.treeForkCount=a)}function _m(e,n,t){var r=n.pendingProps,l=r.revealOrder,a=r.tail;r=r.children;var p=fn.current,g=(p&2)!==0;if(g?(p=p&1|2,n.flags|=128):p&=1,ee(fn,p),Cn(e,n,r,t),r=Ce?fa:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,t,n);else if(e.tag===19)hm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Us(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),uu(n,!1,l,t,a,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Us(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}uu(n,!0,t,null,a,r);break;case"together":uu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function yr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jr|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(mi(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=mr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function fu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&js(e)))}function V_(e,n,t){switch(n.tag){case 3:Be(n,n.stateNode.containerInfo),Pr(n,pn,e.memoizedState.cache),Bl();break;case 27:case 5:Yn(n);break;case 4:Be(n,n.stateNode.containerInfo);break;case 10:Pr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lc(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Kr(n),n.flags|=128,null):(t&n.child.childLanes)!==0?pm(e,n,t):(Kr(n),e=yr(e,n,t),e!==null?e.sibling:null);Kr(n);break;case 19:var l=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(mi(e,n,t,!1),r=(t&n.childLanes)!==0),l){if(r)return _m(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ee(fn,fn.current),r)break;return null;case 22:return n.lanes=0,om(e,n,t,n.pendingProps);case 24:Pr(n,pn,e.memoizedState.cache)}return yr(e,n,t)}function gm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!fu(e,t)&&(n.flags&128)===0)return _n=!1,V_(e,n,t);_n=(e.flags&131072)!==0}else _n=!1,Ce&&(n.flags&1048576)!==0&&Kf(n,fa,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Hl(n.elementType),n.type=e,typeof e=="function")_c(e)?(r=Il(e,r),n.tag=1,n=dm(null,n,e,r,t)):(n.tag=0,n=lu(null,n,e,r,t));else{if(e!=null){var l=e.$$typeof;if(l===ie){n.tag=11,n=im(null,n,e,r,t);break e}else if(l===re){n.tag=14,n=am(null,n,e,r,t);break e}}throw n=Re(e)||e,Error(s(306,n,""))}}return n;case 0:return lu(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,l=Il(r,n.pendingProps),dm(e,n,r,l,t);case 3:e:{if(Be(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var a=n.memoizedState;l=a.element,Ac(e,n),ya(n,r,null,t);var p=n.memoizedState;if(r=p.cache,Pr(n,pn,r),r!==a.cache&&kc(n,[pn],t,!0),ba(),r=p.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){n=mm(e,n,r,t);break e}else if(r!==l){l=kt(Error(s(424)),n),da(l),n=mm(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=jt(e.firstChild),Dn=n,Ce=!0,Ir=null,Tt=!0,t=od(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Bl(),r===l){n=yr(e,n,t);break e}Cn(e,n,r,t)}n=n.child}return n;case 26:return Ks(e,n),e===null?(t=Tp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ce||(t=n.type,e=n.pendingProps,r=mo(Q.current).createElement(t),r[cn]=n,r[un]=e,Bn(r,t,e),Ze(r),n.stateNode=r):n.memoizedState=Tp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yn(n),e===null&&Ce&&(r=n.stateNode=kp(n.type,n.pendingProps,Q.current),Dn=n,Tt=!0,l=Je,ll(n.type)?(qu=l,Je=jt(r.firstChild)):Je=l),Cn(e,n,n.pendingProps.children,t),Ks(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((l=r=Je)&&(r=_g(r,n.type,n.pendingProps,Tt),r!==null?(n.stateNode=r,Dn=n,Je=jt(r.firstChild),Tt=!1,l=!0):l=!1),l||qr(n)),Yn(n),l=n.type,a=n.pendingProps,p=e!==null?e.memoizedProps:null,r=a.children,Hu(l,a)?r=null:p!==null&&Hu(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=Uc(e,n,A_,null,null,t),Ha._currentValue=l),Ks(e,n),Cn(e,n,r,t),n.child;case 6:return e===null&&Ce&&((e=t=Je)&&(t=gg(t,n.pendingProps,Tt),t!==null?(n.stateNode=t,Dn=n,Je=null,e=!0):e=!1),e||qr(n)),null;case 13:return pm(e,n,t);case 4:return Be(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Gl(n,null,r,t):Cn(e,n,r,t),n.child;case 11:return im(e,n,n.type,n.pendingProps,t);case 7:return Cn(e,n,n.pendingProps,t),n.child;case 8:return Cn(e,n,n.pendingProps.children,t),n.child;case 12:return Cn(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,Pr(n,n.type,r.value),Cn(e,n,r.children,t),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,zl(n),l=On(l),r=r(l),n.flags|=1,Cn(e,n,r,t),n.child;case 14:return am(e,n,n.type,n.pendingProps,t);case 15:return sm(e,n,n.type,n.pendingProps,t);case 19:return _m(e,n,t);case 31:return H_(e,n,t);case 22:return om(e,n,t,n.pendingProps);case 24:return zl(n),r=On(pn),e===null?(l=Tc(),l===null&&(l=Qe,a=Nc(),l.pooledCache=a,a.refCount++,a!==null&&(l.pooledCacheLanes|=t),l=a),n.memoizedState={parent:r,cache:l},jc(n),Pr(n,pn,l)):((e.lanes&t)!==0&&(Ac(e,n),ya(n,null,null,t),ba()),l=e.memoizedState,a=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Pr(n,pn,r)):(r=a.cache,Pr(n,pn,r),r!==l.cache&&kc(n,[pn],t,!0))),Cn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function vr(e){e.flags|=4}function du(e,n,t,r,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(qm())e.flags|=8192;else throw Vl=Cs,Mc}else e.flags&=-16777217}function bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Op(n))if(qm())e.flags|=8192;else throw Vl=Cs,Mc}function Zs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pi():536870912,e.lanes|=n,ki|=n)}function ka(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function G_(e,n,t){var r=n.pendingProps;switch(vc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_r(pn),je(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(di(n)?vr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wc())),en(n),null;case 26:var l=n.type,a=n.memoizedState;return e===null?(vr(n),a!==null?(en(n),bm(n,a)):(en(n),du(n,l,null,r,t))):a?a!==e.memoizedState?(vr(n),en(n),bm(n,a)):(en(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&vr(n),en(n),du(n,l,e,r,t)),null;case 27:if(Pt(n),t=Q.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return en(n),null}e=A.current,di(n)?Zf(n):(e=kp(l,r,t),n.stateNode=e,vr(n))}return en(n),null;case 5:if(Pt(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(a=A.current,di(n))Zf(n);else{var p=mo(Q.current);switch(a){case 1:a=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:a=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":a=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":a=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":a=p.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}a[cn]=n,a[un]=r;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)a.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=a;e:switch(Bn(a,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&vr(n)}}return en(n),du(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Q.current,di(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,l=Dn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[cn]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||pp(e.nodeValue,t)),e||qr(n,!0)}else e=mo(e).createTextNode(r),e[cn]=n,n.stateNode=e}return en(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=di(n),t!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else Bl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),e=!1}else t=wc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(dt(n),n):(dt(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=di(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[cn]=n}else Bl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),l=!1}else l=wc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(dt(n),n):(dt(n),null)}return dt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==l&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Zs(n,n.updateQueue),en(n),null);case 4:return je(),e===null&&Cu(n.stateNode.containerInfo),en(n),null;case 10:return _r(n.type),en(n),null;case 19:if(U(fn),r=n.memoizedState,r===null)return en(n),null;if(l=(n.flags&128)!==0,a=r.rendering,a===null)if(l)ka(r,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=Us(e),a!==null){for(n.flags|=128,ka(r,!1),e=a.updateQueue,n.updateQueue=e,Zs(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)$f(t,e),t=t.sibling;return ee(fn,fn.current&1|2),Ce&&pr(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&yn()>to&&(n.flags|=128,l=!0,ka(r,!1),n.lanes=4194304)}else{if(!l)if(e=Us(a),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Zs(n,e),ka(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!Ce)return en(n),null}else 2*yn()-r.renderingStartTime>to&&t!==536870912&&(n.flags|=128,l=!0,ka(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(e=r.last,e!==null?e.sibling=a:n.child=a,r.last=a)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=yn(),e.sibling=null,t=fn.current,ee(fn,l?t&1|2:t&1),Ce&&pr(n,r.treeForkCount),e):(en(n),null);case 22:case 23:return dt(n),Bc(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),t=n.updateQueue,t!==null&&Zs(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&U(Ul),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),_r(pn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Y_(e,n){switch(vc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _r(pn),je(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Pt(n),null;case 31:if(n.memoizedState!==null){if(dt(n),n.alternate===null)throw Error(s(340));Bl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(dt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Bl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(fn),null;case 4:return je(),null;case 10:return _r(n.type),null;case 22:case 23:return dt(n),Bc(),e!==null&&U(Ul),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _r(pn),null;case 25:return null;default:return null}}function ym(e,n){switch(vc(n),n.tag){case 3:_r(pn),je();break;case 26:case 27:case 5:Pt(n);break;case 4:je();break;case 31:n.memoizedState!==null&&dt(n);break;case 13:dt(n);break;case 19:U(fn);break;case 10:_r(n.type);break;case 22:case 23:dt(n),Bc(),e!==null&&U(Ul);break;case 24:_r(pn)}}function Na(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&e)===e){r=void 0;var a=t.create,p=t.inst;r=a(),p.destroy=r}t=t.next}while(t!==l)}}catch(g){Pe(n,n.return,g)}}function Zr(e,n,t){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var a=l.next;r=a;do{if((r.tag&e)===e){var p=r.inst,g=p.destroy;if(g!==void 0){p.destroy=void 0,l=n;var S=t,j=g;try{j()}catch(V){Pe(l,S,V)}}}r=r.next}while(r!==a)}}catch(V){Pe(n,n.return,V)}}function vm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{ud(n,t)}catch(r){Pe(e,e.return,r)}}}function xm(e,n,t){t.props=Il(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){Pe(e,n,r)}}function Ra(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(l){Pe(e,n,l)}}function nr(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){Pe(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Pe(e,n,l)}else t.current=null}function wm(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){Pe(e,e.return,l)}}function mu(e,n,t){try{var r=e.stateNode;ug(r,e.type,t,n),r[un]=n}catch(l){Pe(e,e.return,l)}}function Sm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ll(e.type)||e.tag===4}function pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=tn));else if(r!==4&&(r===27&&ll(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(hu(e,n,t),e=e.sibling;e!==null;)hu(e,n,t),e=e.sibling}function Ws(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&ll(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ws(e,n,t),e=e.sibling;e!==null;)Ws(e,n,t),e=e.sibling}function Em(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Bn(n,r,t),n[cn]=e,n[un]=t}catch(a){Pe(e,e.return,a)}}var xr=!1,gn=!1,_u=!1,km=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function I_(e,n){if(e=e.containerInfo,zu=vo,e=ca(e),cc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var p=0,g=-1,S=-1,j=0,V=0,I=e,C=null;n:for(;;){for(var z;I!==t||l!==0&&I.nodeType!==3||(g=p+l),I!==a||r!==0&&I.nodeType!==3||(S=p+r),I.nodeType===3&&(p+=I.nodeValue.length),(z=I.firstChild)!==null;)C=I,I=z;for(;;){if(I===e)break n;if(C===t&&++j===l&&(g=p),C===a&&++V===r&&(S=p),(z=I.nextSibling)!==null)break;I=C,C=I.parentNode}I=z}t=g===-1||S===-1?null:{start:g,end:S}}else t=null}t=t||{start:0,end:0}}else t=null;for(Uu={focusedElem:e,selectionRange:t},vo=!1,Nn=n;Nn!==null;)if(n=Nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Nn=e;else for(;Nn!==null;){switch(n=Nn,a=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,t=n,l=a.memoizedProps,a=a.memoizedState,r=t.stateNode;try{var oe=Il(t.type,l);e=r.getSnapshotBeforeUpdate(oe,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(he){Pe(t,t.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Gu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Nn=e;break}Nn=n.return}}function Nm(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Sr(e,t),r&4&&Na(5,t);break;case 1:if(Sr(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(p){Pe(t,t.return,p)}else{var l=Il(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Pe(t,t.return,p)}}r&64&&vm(t),r&512&&Ra(t,t.return);break;case 3:if(Sr(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{ud(e,n)}catch(p){Pe(t,t.return,p)}}break;case 27:n===null&&r&4&&Em(t);case 26:case 5:Sr(e,t),n===null&&r&4&&wm(t),r&512&&Ra(t,t.return);break;case 12:Sr(e,t);break;case 31:Sr(e,t),r&4&&Mm(e,t);break;case 13:Sr(e,t),r&4&&jm(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=W_.bind(null,t),bg(e,t))));break;case 22:if(r=t.memoizedState!==null||xr,!r){n=n!==null&&n.memoizedState!==null||gn,l=xr;var a=gn;xr=r,(gn=n)&&!a?Er(e,t,(t.subtreeFlags&8772)!==0):Sr(e,t),xr=l,gn=a}break;case 30:break;default:Sr(e,t)}}function Rm(e){var n=e.alternate;n!==null&&(e.alternate=null,Rm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,Wn=!1;function wr(e,n,t){for(t=t.child;t!==null;)Tm(e,n,t),t=t.sibling}function Tm(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(hl,t)}catch{}switch(t.tag){case 26:gn||nr(t,n),wr(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:gn||nr(t,n);var r=ln,l=Wn;ll(t.type)&&(ln=t.stateNode,Wn=!1),wr(e,n,t),La(t.stateNode),ln=r,Wn=l;break;case 5:gn||nr(t,n);case 6:if(r=ln,l=Wn,ln=null,wr(e,n,t),ln=r,Wn=l,ln!==null)if(Wn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(t.stateNode)}catch(a){Pe(t,n,a)}else try{ln.removeChild(t.stateNode)}catch(a){Pe(t,n,a)}break;case 18:ln!==null&&(Wn?(e=ln,vp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Oi(e)):vp(ln,t.stateNode));break;case 4:r=ln,l=Wn,ln=t.stateNode.containerInfo,Wn=!0,wr(e,n,t),ln=r,Wn=l;break;case 0:case 11:case 14:case 15:Zr(2,t,n),gn||Zr(4,t,n),wr(e,n,t);break;case 1:gn||(nr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&xm(t,n,r)),wr(e,n,t);break;case 21:wr(e,n,t);break;case 22:gn=(r=gn)||t.memoizedState!==null,wr(e,n,t),gn=r;break;default:wr(e,n,t)}}function Mm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oi(e)}catch(t){Pe(n,n.return,t)}}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oi(e)}catch(t){Pe(n,n.return,t)}}function q_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new km),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new km),n;default:throw Error(s(435,e.tag))}}function Js(e,n){var t=q_(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var l=J_.bind(null,e,r);r.then(l,l)}})}function Jn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r],a=e,p=n,g=p;e:for(;g!==null;){switch(g.tag){case 27:if(ll(g.type)){ln=g.stateNode,Wn=!1;break e}break;case 5:ln=g.stateNode,Wn=!1;break e;case 3:case 4:ln=g.stateNode.containerInfo,Wn=!0;break e}g=g.return}if(ln===null)throw Error(s(160));Tm(a,p,l),ln=null,Wn=!1,a=l.alternate,a!==null&&(a.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Am(n,e),n=n.sibling}var It=null;function Am(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),et(e),r&4&&(Zr(3,e,e.return),Na(3,e),Zr(5,e,e.return));break;case 1:Jn(n,e),et(e),r&512&&(gn||t===null||nr(t,t.return)),r&64&&xr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var l=It;if(Jn(n,e),et(e),r&512&&(gn||t===null||nr(t,t.return)),r&4){var a=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Ht]||a[cn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(r),l.head.insertBefore(a,l.querySelector("head > title"))),Bn(a,r,t),a[cn]=e,Ze(a),r=a;break e;case"link":var p=Ap("link","href",l).get(r+(t.href||""));if(p){for(var g=0;g<p.length;g++)if(a=p[g],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){p.splice(g,1);break n}}a=l.createElement(r),Bn(a,r,t),l.head.appendChild(a);break;case"meta":if(p=Ap("meta","content",l).get(r+(t.content||""))){for(g=0;g<p.length;g++)if(a=p[g],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){p.splice(g,1);break n}}a=l.createElement(r),Bn(a,r,t),l.head.appendChild(a);break;default:throw Error(s(468,r))}a[cn]=e,Ze(a),r=a}e.stateNode=r}else Dp(l,e.type,e.stateNode);else e.stateNode=jp(l,r,e.memoizedProps);else a!==r?(a===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):a.count--,r===null?Dp(l,e.type,e.stateNode):jp(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&mu(e,e.memoizedProps,t.memoizedProps)}break;case 27:Jn(n,e),et(e),r&512&&(gn||t===null||nr(t,t.return)),t!==null&&r&4&&mu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Jn(n,e),et(e),r&512&&(gn||t===null||nr(t,t.return)),e.flags&32){l=e.stateNode;try{nn(l,"")}catch(oe){Pe(e,e.return,oe)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,mu(e,l,t!==null?t.memoizedProps:l)),r&1024&&(_u=!0);break;case 6:if(Jn(n,e),et(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(oe){Pe(e,e.return,oe)}}break;case 3:if(_o=null,l=It,It=po(n.containerInfo),Jn(n,e),It=l,et(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Oi(n.containerInfo)}catch(oe){Pe(e,e.return,oe)}_u&&(_u=!1,Dm(e));break;case 4:r=It,It=po(e.stateNode.containerInfo),Jn(n,e),et(e),It=r;break;case 12:Jn(n,e),et(e);break;case 31:Jn(n,e),et(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Js(e,r)));break;case 13:Jn(n,e),et(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(no=yn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Js(e,r)));break;case 22:l=e.memoizedState!==null;var S=t!==null&&t.memoizedState!==null,j=xr,V=gn;if(xr=j||l,gn=V||S,Jn(n,e),gn=V,xr=j,et(e),r&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||S||xr||gn||ql(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){S=t=n;try{if(a=S.stateNode,l)p=a.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{g=S.stateNode;var I=S.memoizedProps.style,C=I!=null&&I.hasOwnProperty("display")?I.display:null;g.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(oe){Pe(S,S.return,oe)}}}else if(n.tag===6){if(t===null){S=n;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(oe){Pe(S,S.return,oe)}}}else if(n.tag===18){if(t===null){S=n;try{var z=S.stateNode;l?xp(z,!0):xp(S.stateNode,!1)}catch(oe){Pe(S,S.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,Js(e,t))));break;case 19:Jn(n,e),et(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Js(e,r)));break;case 30:break;case 21:break;default:Jn(n,e),et(e)}}function et(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(Sm(r)){t=r;break}r=r.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var l=t.stateNode,a=pu(e);Ws(e,a,l);break;case 5:var p=t.stateNode;t.flags&32&&(nn(p,""),t.flags&=-33);var g=pu(e);Ws(e,g,p);break;case 3:case 4:var S=t.stateNode.containerInfo,j=pu(e);hu(e,j,S);break;default:throw Error(s(161))}}catch(V){Pe(e,e.return,V)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Dm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Sr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(e,n.alternate,n),n=n.sibling}function ql(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Zr(4,n,n.return),ql(n);break;case 1:nr(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&xm(n,n.return,t),ql(n);break;case 27:La(n.stateNode);case 26:case 5:nr(n,n.return),ql(n);break;case 22:n.memoizedState===null&&ql(n);break;case 30:ql(n);break;default:ql(n)}e=e.sibling}}function Er(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=e,a=n,p=a.flags;switch(a.tag){case 0:case 11:case 15:Er(l,a,t),Na(4,a);break;case 1:if(Er(l,a,t),r=a,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(j){Pe(r,r.return,j)}if(r=a,l=r.updateQueue,l!==null){var g=r.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)cd(S[l],g)}catch(j){Pe(r,r.return,j)}}t&&p&64&&vm(a),Ra(a,a.return);break;case 27:Em(a);case 26:case 5:Er(l,a,t),t&&r===null&&p&4&&wm(a),Ra(a,a.return);break;case 12:Er(l,a,t);break;case 31:Er(l,a,t),t&&p&4&&Mm(l,a);break;case 13:Er(l,a,t),t&&p&4&&jm(l,a);break;case 22:a.memoizedState===null&&Er(l,a,t),Ra(a,a.return);break;case 30:break;default:Er(l,a,t)}n=n.sibling}}function gu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ma(t))}function bu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ma(e))}function qt(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Om(e,n,t,r),n=n.sibling}function Om(e,n,t,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:qt(e,n,t,r),l&2048&&Na(9,n);break;case 1:qt(e,n,t,r);break;case 3:qt(e,n,t,r),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ma(e)));break;case 12:if(l&2048){qt(e,n,t,r),e=n.stateNode;try{var a=n.memoizedProps,p=a.id,g=a.onPostCommit;typeof g=="function"&&g(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Pe(n,n.return,S)}}else qt(e,n,t,r);break;case 31:qt(e,n,t,r);break;case 13:qt(e,n,t,r);break;case 23:break;case 22:a=n.stateNode,p=n.alternate,n.memoizedState!==null?a._visibility&2?qt(e,n,t,r):Ta(e,n):a._visibility&2?qt(e,n,t,r):(a._visibility|=2,wi(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&gu(p,n);break;case 24:qt(e,n,t,r),l&2048&&bu(n.alternate,n);break;default:qt(e,n,t,r)}}function wi(e,n,t,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var a=e,p=n,g=t,S=r,j=p.flags;switch(p.tag){case 0:case 11:case 15:wi(a,p,g,S,l),Na(8,p);break;case 23:break;case 22:var V=p.stateNode;p.memoizedState!==null?V._visibility&2?wi(a,p,g,S,l):Ta(a,p):(V._visibility|=2,wi(a,p,g,S,l)),l&&j&2048&&gu(p.alternate,p);break;case 24:wi(a,p,g,S,l),l&&j&2048&&bu(p.alternate,p);break;default:wi(a,p,g,S,l)}n=n.sibling}}function Ta(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,l=r.flags;switch(r.tag){case 22:Ta(t,r),l&2048&&gu(r.alternate,r);break;case 24:Ta(t,r),l&2048&&bu(r.alternate,r);break;default:Ta(t,r)}n=n.sibling}}var Ma=8192;function Si(e,n,t){if(e.subtreeFlags&Ma)for(e=e.child;e!==null;)Cm(e,n,t),e=e.sibling}function Cm(e,n,t){switch(e.tag){case 26:Si(e,n,t),e.flags&Ma&&e.memoizedState!==null&&jg(t,It,e.memoizedState,e.memoizedProps);break;case 5:Si(e,n,t);break;case 3:case 4:var r=It;It=po(e.stateNode.containerInfo),Si(e,n,t),It=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ma,Ma=16777216,Si(e,n,t),Ma=r):Si(e,n,t));break;default:Si(e,n,t)}}function Bm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ja(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Nn=r,zm(r,e)}Bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lm(e),e=e.sibling}function Lm(e){switch(e.tag){case 0:case 11:case 15:ja(e),e.flags&2048&&Zr(9,e,e.return);break;case 3:ja(e);break;case 12:ja(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,eo(e)):ja(e);break;default:ja(e)}}function eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Nn=r,zm(r,e)}Bm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Zr(8,n,n.return),eo(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,eo(n));break;default:eo(n)}e=e.sibling}}function zm(e,n){for(;Nn!==null;){var t=Nn;switch(t.tag){case 0:case 11:case 15:Zr(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Nn=r;else e:for(t=e;Nn!==null;){r=Nn;var l=r.sibling,a=r.return;if(Rm(r),r===t){Nn=null;break e}if(l!==null){l.return=a,Nn=l;break e}Nn=a}}}var P_={getCacheForType:function(e){var n=On(pn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return On(pn).controller.signal}},$_=typeof WeakMap=="function"?WeakMap:Map,He=0,Qe=null,Te=null,Ae=0,qe=0,mt=null,Wr=!1,Ei=!1,yu=!1,kr=0,sn=0,Jr=0,Pl=0,vu=0,pt=0,ki=0,Aa=null,nt=null,xu=!1,no=0,Um=0,to=1/0,ro=null,el=null,wn=0,nl=null,Ni=null,Nr=0,wu=0,Su=null,Hm=null,Da=0,Eu=null;function ht(){return(He&2)!==0&&Ae!==0?Ae&-Ae:O.T!==null?ju():on()}function Vm(){if(pt===0)if((Ae&536870912)===0||Ce){var e=In;In<<=1,(In&3932160)===0&&(In=262144),pt=e}else pt=536870912;return e=ft.current,e!==null&&(e.flags|=32),pt}function tt(e,n,t){(e===Qe&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(Ri(e,0),tl(e,Ae,pt,!1)),_l(e,t),((He&2)===0||e!==Qe)&&(e===Qe&&((He&2)===0&&(Pl|=t),sn===4&&tl(e,Ae,pt,!1)),tr(e))}function Gm(e,n,t){if((He&6)!==0)throw Error(s(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||zn(e,n),l=r?K_(e,n):Nu(e,n,!0),a=r;do{if(l===0){Ei&&!r&&tl(e,n,0,!1);break}else{if(t=e.current.alternate,a&&!X_(t)){l=Nu(e,n,!1),a=!1;continue}if(l===2){if(a=n,e.errorRecoveryDisabledLanes&a)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var g=e;l=Aa;var S=g.current.memoizedState.isDehydrated;if(S&&(Ri(g,p).flags|=256),p=Nu(g,p,!1),p!==2){if(yu&&!S){g.errorRecoveryDisabledLanes|=a,Pl|=a,l=4;break e}a=nt,nt=l,a!==null&&(nt===null?nt=a:nt.push.apply(nt,a))}l=p}if(a=!1,l!==2)continue}}if(l===1){Ri(e,0),tl(e,n,0,!0);break}e:{switch(r=e,a=l,a){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:tl(r,n,pt,!Wr);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=no+300-yn(),10<l)){if(tl(r,n,pt,!Wr),mn(r,0,!0)!==0)break e;Nr=n,r.timeoutHandle=bp(Ym.bind(null,r,t,nt,ro,xu,n,pt,Pl,ki,Wr,a,"Throttled",-0,0),l);break e}Ym(r,t,nt,ro,xu,n,pt,Pl,ki,Wr,a,null,-0,0)}}break}while(!0);tr(e)}function Ym(e,n,t,r,l,a,p,g,S,j,V,I,C,z){if(e.timeoutHandle=-1,I=n.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},Cm(n,a,I);var oe=(a&62914560)===a?no-yn():(a&4194048)===a?Um-yn():0;if(oe=Ag(I,oe),oe!==null){Nr=a,e.cancelPendingCommit=oe(Qm.bind(null,e,n,a,t,r,l,p,g,S,V,I,null,C,z)),tl(e,a,p,!j);return}}Qm(e,n,a,t,r,l,p,g,S)}function X_(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],a=l.getSnapshot;l=l.value;try{if(!An(a(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tl(e,n,t,r){n&=~vu,n&=~Pl,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var a=31-Rn(l),p=1<<a;r[a]=-1,l&=~p}t!==0&&rs(e,t,n)}function lo(){return(He&6)===0?(Oa(0),!1):!0}function ku(){if(Te!==null){if(qe===0)var e=Te.return;else e=Te,hr=Ll=null,Gc(e),gi=null,ha=0,e=Te;for(;e!==null;)ym(e.alternate,e),e=e.return;Te=null}}function Ri(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,mg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Nr=0,ku(),Qe=e,Te=t=mr(e.current,null),Ae=n,qe=0,mt=null,Wr=!1,Ei=zn(e,n),yu=!1,ki=pt=vu=Pl=Jr=sn=0,nt=Aa=null,xu=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var l=31-Rn(r),a=1<<l;n|=e[l],r&=~a}return kr=n,ks(),t}function Im(e,n){Se=null,O.H=Sa,n===_i||n===Os?(n=id(),qe=3):n===Mc?(n=id(),qe=4):qe=n===ru?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mt=n,Te===null&&(sn=1,Xs(e,kt(n,e.current)))}function qm(){var e=ft.current;return e===null?!0:(Ae&4194048)===Ae?Mt===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Mt:!1}function Pm(){var e=O.H;return O.H=Sa,e===null?Sa:e}function $m(){var e=O.A;return O.A=P_,e}function io(){sn=4,Wr||(Ae&4194048)!==Ae&&ft.current!==null||(Ei=!0),(Jr&134217727)===0&&(Pl&134217727)===0||Qe===null||tl(Qe,Ae,pt,!1)}function Nu(e,n,t){var r=He;He|=2;var l=Pm(),a=$m();(Qe!==e||Ae!==n)&&(ro=null,Ri(e,n)),n=!1;var p=sn;e:do try{if(qe!==0&&Te!==null){var g=Te,S=mt;switch(qe){case 8:ku(),p=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(n=!0);var j=qe;if(qe=0,mt=null,Ti(e,g,S,j),t&&Ei){p=0;break e}break;default:j=qe,qe=0,mt=null,Ti(e,g,S,j)}}F_(),p=sn;break}catch(V){Im(e,V)}while(!0);return n&&e.shellSuspendCounter++,hr=Ll=null,He=r,O.H=l,O.A=a,Te===null&&(Qe=null,Ae=0,ks()),p}function F_(){for(;Te!==null;)Xm(Te)}function K_(e,n){var t=He;He|=2;var r=Pm(),l=$m();Qe!==e||Ae!==n?(ro=null,to=yn()+500,Ri(e,n)):Ei=zn(e,n);e:do try{if(qe!==0&&Te!==null){n=Te;var a=mt;n:switch(qe){case 1:qe=0,mt=null,Ti(e,n,a,1);break;case 2:case 9:if(rd(a)){qe=0,mt=null,Fm(n);break}n=function(){qe!==2&&qe!==9||Qe!==e||(qe=7),tr(e)},a.then(n,n);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:rd(a)?(qe=0,mt=null,Fm(n)):(qe=0,mt=null,Ti(e,n,a,7));break;case 5:var p=null;switch(Te.tag){case 26:p=Te.memoizedState;case 5:case 27:var g=Te;if(p?Op(p):g.stateNode.complete){qe=0,mt=null;var S=g.sibling;if(S!==null)Te=S;else{var j=g.return;j!==null?(Te=j,ao(j)):Te=null}break n}}qe=0,mt=null,Ti(e,n,a,5);break;case 6:qe=0,mt=null,Ti(e,n,a,6);break;case 8:ku(),sn=6;break e;default:throw Error(s(462))}}Q_();break}catch(V){Im(e,V)}while(!0);return hr=Ll=null,O.H=r,O.A=l,He=t,Te!==null?0:(Qe=null,Ae=0,ks(),sn)}function Q_(){for(;Te!==null&&!Kl();)Xm(Te)}function Xm(e){var n=gm(e.alternate,e,kr);e.memoizedProps=e.pendingProps,n===null?ao(e):Te=n}function Fm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=fm(t,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=fm(t,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Gc(n);default:ym(t,n),n=Te=$f(n,kr),n=gm(t,n,kr)}e.memoizedProps=e.pendingProps,n===null?ao(e):Te=n}function Ti(e,n,t,r){hr=Ll=null,Gc(n),gi=null,ha=0;var l=n.return;try{if(U_(e,l,n,t,Ae)){sn=1,Xs(e,kt(t,e.current)),Te=null;return}}catch(a){if(l!==null)throw Te=l,a;sn=1,Xs(e,kt(t,e.current)),Te=null;return}n.flags&32768?(Ce||r===1?e=!0:Ei||(Ae&536870912)!==0?e=!1:(Wr=e=!0,(r===2||r===9||r===3||r===6)&&(r=ft.current,r!==null&&r.tag===13&&(r.flags|=16384))),Km(n,e)):ao(n)}function ao(e){var n=e;do{if((n.flags&32768)!==0){Km(n,Wr);return}e=n.return;var t=G_(n.alternate,n,kr);if(t!==null){Te=t;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);sn===0&&(sn=5)}function Km(e,n){do{var t=Y_(e.alternate,e);if(t!==null){t.flags&=32767,Te=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=t}while(e!==null);sn=6,Te=null}function Qm(e,n,t,r,l,a,p,g,S){e.cancelPendingCommit=null;do so();while(wn!==0);if((He&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(a=n.lanes|n.childLanes,a|=pc,lr(e,t,a,p,g,S),e===Qe&&(Te=Qe=null,Ae=0),Ni=n,nl=e,Nr=t,wu=a,Su=l,Hm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,eg(pl,function(){return np(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,l=Z.p,Z.p=2,p=He,He|=4;try{I_(e,n,t)}finally{He=p,Z.p=l,O.T=r}}wn=1,Zm(),Wm(),Jm()}}function Zm(){if(wn===1){wn=0;var e=nl,n=Ni,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=O.T,O.T=null;var r=Z.p;Z.p=2;var l=He;He|=4;try{Am(n,e);var a=Uu,p=ca(e.containerInfo),g=a.focusedElem,S=a.selectionRange;if(p!==g&&g&&g.ownerDocument&&Ss(g.ownerDocument.documentElement,g)){if(S!==null&&cc(g)){var j=S.start,V=S.end;if(V===void 0&&(V=j),"selectionStart"in g)g.selectionStart=j,g.selectionEnd=Math.min(V,g.value.length);else{var I=g.ownerDocument||document,C=I&&I.defaultView||window;if(C.getSelection){var z=C.getSelection(),oe=g.textContent.length,he=Math.min(S.start,oe),Fe=S.end===void 0?he:Math.min(S.end,oe);!z.extend&&he>Fe&&(p=Fe,Fe=he,he=p);var R=Gr(g,he),N=Gr(g,Fe);if(R&&N&&(z.rangeCount!==1||z.anchorNode!==R.node||z.anchorOffset!==R.offset||z.focusNode!==N.node||z.focusOffset!==N.offset)){var M=I.createRange();M.setStart(R.node,R.offset),z.removeAllRanges(),he>Fe?(z.addRange(M),z.extend(N.node,N.offset)):(M.setEnd(N.node,N.offset),z.addRange(M))}}}}for(I=[],z=g;z=z.parentNode;)z.nodeType===1&&I.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<I.length;g++){var G=I[g];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}vo=!!zu,Uu=zu=null}finally{He=l,Z.p=r,O.T=t}}e.current=n,wn=2}}function Wm(){if(wn===2){wn=0;var e=nl,n=Ni,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=O.T,O.T=null;var r=Z.p;Z.p=2;var l=He;He|=4;try{Nm(e,n.alternate,n)}finally{He=l,Z.p=r,O.T=t}}wn=3}}function Jm(){if(wn===4||wn===3){wn=0,Dr();var e=nl,n=Ni,t=Nr,r=Hm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,Ni=nl=null,ep(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(el=null),vt(t),n=n.stateNode,vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(hl,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,l=Z.p,Z.p=2,O.T=null;try{for(var a=e.onRecoverableError,p=0;p<r.length;p++){var g=r[p];a(g.value,{componentStack:g.stack})}}finally{O.T=n,Z.p=l}}(Nr&3)!==0&&so(),tr(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Eu?Da++:(Da=0,Eu=e):Da=0,Oa(0)}}function ep(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ma(n)))}function so(){return Zm(),Wm(),Jm(),np()}function np(){if(wn!==5)return!1;var e=nl,n=wu;wu=0;var t=vt(Nr),r=O.T,l=Z.p;try{Z.p=32>t?32:t,O.T=null,t=Su,Su=null;var a=nl,p=Nr;if(wn=0,Ni=nl=null,Nr=0,(He&6)!==0)throw Error(s(331));var g=He;if(He|=4,Lm(a.current),Om(a,a.current,p,t),He=g,Oa(0,!1),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(hl,a)}catch{}return!0}finally{Z.p=l,O.T=r,ep(e,n)}}function tp(e,n,t){n=kt(t,n),n=tu(e.stateNode,n,2),e=Fr(e,n,2),e!==null&&(_l(e,2),tr(e))}function Pe(e,n,t){if(e.tag===3)tp(e,e,t);else for(;n!==null;){if(n.tag===3){tp(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(el===null||!el.has(r))){e=kt(t,e),t=rm(2),r=Fr(n,t,2),r!==null&&(lm(t,r,n,e),_l(r,2),tr(r));break}}n=n.return}}function Ru(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new $_;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(yu=!0,l.add(t),e=Z_.bind(null,e,n,t),n.then(e,e))}function Z_(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Qe===e&&(Ae&t)===t&&(sn===4||sn===3&&(Ae&62914560)===Ae&&300>yn()-no?(He&2)===0&&Ri(e,0):vu|=t,ki===Ae&&(ki=0)),tr(e)}function rp(e,n){n===0&&(n=Pi()),e=Ol(e,n),e!==null&&(_l(e,n),tr(e))}function W_(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),rp(e,t)}function J_(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),rp(e,t)}function eg(e,n){return Ar(e,n)}var oo=null,Mi=null,Tu=!1,co=!1,Mu=!1,rl=0;function tr(e){e!==Mi&&e.next===null&&(Mi===null?oo=Mi=e:Mi=Mi.next=e),co=!0,Tu||(Tu=!0,tg())}function Oa(e,n){if(!Mu&&co){Mu=!0;do for(var t=!1,r=oo;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var a=0;else{var p=r.suspendedLanes,g=r.pingedLanes;a=(1<<31-Rn(42|e)+1)-1,a&=l&~(p&~g),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(t=!0,sp(r,a))}else a=Ae,a=mn(r,r===Qe?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(a&3)===0||zn(r,a)||(t=!0,sp(r,a));r=r.next}while(t);Mu=!1}}function ng(){lp()}function lp(){co=Tu=!1;var e=0;rl!==0&&dg()&&(e=rl);for(var n=yn(),t=null,r=oo;r!==null;){var l=r.next,a=ip(r,n);a===0?(r.next=null,t===null?oo=l:t.next=l,l===null&&(Mi=t)):(t=r,(e!==0||(a&3)!==0)&&(co=!0)),r=l}wn!==0&&wn!==5||Oa(e),rl!==0&&(rl=0)}function ip(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var p=31-Rn(a),g=1<<p,S=l[p];S===-1?((g&t)===0||(g&r)!==0)&&(l[p]=Vo(g,n)):S<=n&&(e.expiredLanes|=g),a&=~g}if(n=Qe,t=Ae,t=mn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&yt(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||zn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&yt(r),vt(t)){case 2:case 8:t=qi;break;case 32:t=pl;break;case 268435456:t=rt;break;default:t=pl}return r=ap.bind(null,e),t=Ar(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&yt(r),e.callbackPriority=2,e.callbackNode=null,2}function ap(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(so()&&e.callbackNode!==t)return null;var r=Ae;return r=mn(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Gm(e,r,n),ip(e,yn()),e.callbackNode!=null&&e.callbackNode===t?ap.bind(null,e):null)}function sp(e,n){if(so())return null;Gm(e,n,!0)}function tg(){pg(function(){(He&6)!==0?Ar(ml,ng):lp()})}function ju(){if(rl===0){var e=pi;e===0&&(e=Xt,Xt<<=1,(Xt&261888)===0&&(Xt=256)),rl=e}return rl}function op(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zr(""+e)}function cp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function rg(e,n,t,r,l){if(n==="submit"&&t&&t.stateNode===l){var a=op((l[un]||null).action),p=r.submitter;p&&(n=(n=p[un]||null)?op(n.formAction):p.getAttribute("formAction"),n!==null&&(a=n,p=null));var g=new ri("action","action",null,r,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rl!==0){var S=p?cp(l,p):new FormData(l);Qc(t,{pending:!0,data:S,method:l.method,action:a},null,S)}}else typeof a=="function"&&(g.preventDefault(),S=p?cp(l,p):new FormData(l),Qc(t,{pending:!0,data:S,method:l.method,action:a},a,S))},currentTarget:l}]})}}for(var Au=0;Au<mc.length;Au++){var Du=mc[Au],lg=Du.toLowerCase(),ig=Du[0].toUpperCase()+Du.slice(1);Yt(lg,"on"+ig)}Yt(Vf,"onAnimationEnd"),Yt(Gf,"onAnimationIteration"),Yt(Yf,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(x_,"onTransitionRun"),Yt(w_,"onTransitionStart"),Yt(S_,"onTransitionCancel"),Yt(If,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ag=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ca));function up(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var p=r.length-1;0<=p;p--){var g=r[p],S=g.instance,j=g.currentTarget;if(g=g.listener,S!==a&&l.isPropagationStopped())break e;a=g,l.currentTarget=j;try{a(l)}catch(V){Es(V)}l.currentTarget=null,a=S}else for(p=0;p<r.length;p++){if(g=r[p],S=g.instance,j=g.currentTarget,g=g.listener,S!==a&&l.isPropagationStopped())break e;a=g,l.currentTarget=j;try{a(l)}catch(V){Es(V)}l.currentTarget=null,a=S}}}}function Me(e,n){var t=n[zt];t===void 0&&(t=n[zt]=new Set);var r=e+"__bubble";t.has(r)||(fp(n,e,2,!1),t.add(r))}function Ou(e,n,t){var r=0;n&&(r|=4),fp(t,e,r,n)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Cu(e){if(!e[uo]){e[uo]=!0,ar.forEach(function(t){t!=="selectionchange"&&(ag.has(t)||Ou(t,!1,e),Ou(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uo]||(n[uo]=!0,Ou("selectionchange",!1,n))}}function fp(e,n,t,r){switch(Vp(n)){case 2:var l=Cg;break;case 8:l=Bg;break;default:l=Ku}t=l.bind(null,n,t,e),l=void 0,!Ji||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Bu(e,n,t,r,l){var a=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var g=r.stateNode.containerInfo;if(g===l)break;if(p===4)for(p=r.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;g!==null;){if(p=Kt(g),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){r=a=p;continue e}g=g.parentNode}}r=r.return}vl(function(){var j=a,V=Wi(t),I=[];e:{var C=qf.get(e);if(C!==void 0){var z=ri,oe=e;switch(e){case"keypress":if(Wt(t)===0)break e;case"keydown":case"keyup":z=hs;break;case"focusin":oe="focus",z=ra;break;case"focusout":oe="blur",z=ra;break;case"beforeblur":case"afterblur":z=ra;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Yo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=nc;break;case Vf:case Gf:case Yf:z=Po;break;case If:z=tc;break;case"scroll":case"scrollend":z=ds;break;case"wheel":z=lc;break;case"copy":case"cut":case"paste":z=Xo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=ia;break;case"toggle":case"beforetoggle":z=ac}var he=(n&4)!==0,Fe=!he&&(e==="scroll"||e==="scrollend"),R=he?C!==null?C+"Capture":null:C;he=[];for(var N=j,M;N!==null;){var G=N;if(M=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||M===null||R===null||(G=Qt(N,R),G!=null&&he.push(Ba(N,G,M))),Fe)break;N=N.return}0<he.length&&(C=new z(C,oe,null,t,V),I.push({event:C,listeners:he}))}}if((n&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",C&&t!==sr&&(oe=t.relatedTarget||t.fromElement)&&(Kt(oe)||oe[Mn]))break e;if((z||C)&&(C=V.window===V?V:(C=V.ownerDocument)?C.defaultView||C.parentWindow:window,z?(oe=t.relatedTarget||t.toElement,z=j,oe=oe?Kt(oe):null,oe!==null&&(Fe=d(oe),he=oe.tag,oe!==Fe||he!==5&&he!==27&&he!==6)&&(oe=null)):(z=null,oe=j),z!==oe)){if(he=ta,G="onMouseLeave",R="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(he=ia,G="onPointerLeave",R="onPointerEnter",N="pointer"),Fe=z==null?C:Gt(z),M=oe==null?C:Gt(oe),C=new he(G,N+"leave",z,t,V),C.target=Fe,C.relatedTarget=M,G=null,Kt(V)===j&&(he=new he(R,N+"enter",oe,t,V),he.target=M,he.relatedTarget=Fe,G=he),Fe=G,z&&oe)n:{for(he=sg,R=z,N=oe,M=0,G=R;G;G=he(G))M++;G=0;for(var me=N;me;me=he(me))G++;for(;0<M-G;)R=he(R),M--;for(;0<G-M;)N=he(N),G--;for(;M--;){if(R===N||N!==null&&R===N.alternate){he=R;break n}R=he(R),N=he(N)}he=null}else he=null;z!==null&&dp(I,C,z,he,!1),oe!==null&&Fe!==null&&dp(I,Fe,oe,he,!0)}}e:{if(C=j?Gt(j):window,z=C.nodeName&&C.nodeName.toLowerCase(),z==="select"||z==="input"&&C.type==="file")var ze=ue;else if(ws(C))if(we)ze=Vr;else{ze=sa;var fe=fr}else z=C.nodeName,!z||z.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?j&&Zi(j.elementType)&&(ze=ue):ze=jl;if(ze&&(ze=ze(e,j))){m(I,ze,t,V);break e}fe&&fe(e,C,j),e==="focusout"&&j&&C.type==="number"&&j.memoizedProps.value!=null&&Ki(C,"number",C.value)}switch(fe=j?Gt(j):window,e){case"focusin":(ws(fe)||fe.contentEditable==="true")&&(ai=fe,uc=j,ua=null);break;case"focusout":ua=uc=ai=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Uf(I,t,V);break;case"selectionchange":if(v_)break;case"keydown":case"keyup":Uf(I,t,V)}var ke;if(Tl)e:{switch(e){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else cr?Hr(e,t)&&(De="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(De="onCompositionStart");De&&(bs&&t.locale!=="ko"&&(cr||De!=="onCompositionStart"?De==="onCompositionEnd"&&cr&&(ke=ea()):(Zt=V,ct="value"in Zt?Zt.value:Zt.textContent,cr=!0)),fe=fo(j,De),0<fe.length&&(De=new ps(De,e,null,t,V),I.push({event:De,listeners:fe}),ke?De.data=ke:(ke=Ml(t),ke!==null&&(De.data=ke)))),(ke=gs?aa(e,t):xs(e,t))&&(De=fo(j,"onBeforeInput"),0<De.length&&(fe=new ps("onBeforeInput","beforeinput",null,t,V),I.push({event:fe,listeners:De}),fe.data=ke)),rg(I,e,j,t,V)}up(I,n)})}function Ba(e,n,t){return{instance:e,listener:n,currentTarget:t}}function fo(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||a===null||(l=Qt(e,t),l!=null&&r.unshift(Ba(e,l,a)),l=Qt(e,n),l!=null&&r.push(Ba(e,l,a))),e.tag===3)return r;e=e.return}return[]}function sg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dp(e,n,t,r,l){for(var a=n._reactName,p=[];t!==null&&t!==r;){var g=t,S=g.alternate,j=g.stateNode;if(g=g.tag,S!==null&&S===r)break;g!==5&&g!==26&&g!==27||j===null||(S=j,l?(j=Qt(t,a),j!=null&&p.unshift(Ba(t,j,S))):l||(j=Qt(t,a),j!=null&&p.push(Ba(t,j,S)))),t=t.return}p.length!==0&&e.push({event:n,listeners:p})}var og=/\r\n?/g,cg=/\u0000|\uFFFD/g;function mp(e){return(typeof e=="string"?e:""+e).replace(og,`
`).replace(cg,"")}function pp(e,n){return n=mp(n),mp(e)===n}function Xe(e,n,t,r,l,a){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||nn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&nn(e,""+r);break;case"className":ei(e,"class",r);break;case"tabIndex":ei(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,t,r);break;case"style":yl(e,r,a);break;case"data":if(n!=="object"){ei(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=zr(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(t==="formAction"?(n!=="input"&&Xe(e,n,"name",l.name,l,null),Xe(e,n,"formEncType",l.formEncType,l,null),Xe(e,n,"formMethod",l.formMethod,l,null),Xe(e,n,"formTarget",l.formTarget,l,null)):(Xe(e,n,"encType",l.encType,l,null),Xe(e,n,"method",l.method,l,null),Xe(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=zr(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=tn);break;case"onScroll":r!=null&&Me("scroll",e);break;case"onScrollEnd":r!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=zr(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Jl(e,"popover",r);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Jl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Zn.get(t)||t,Jl(e,t,r))}}function Lu(e,n,t,r,l,a){switch(t){case"style":yl(e,r,a);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"children":typeof r=="string"?nn(e,r):(typeof r=="number"||typeof r=="bigint")&&nn(e,""+r);break;case"onScroll":r!=null&&Me("scroll",e);break;case"onScrollEnd":r!=null&&Me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xi.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),a=e[un]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(n,a,l),typeof r=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,l);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):Jl(e,t,r)}}}function Bn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var r=!1,l=!1,a;for(a in t)if(t.hasOwnProperty(a)){var p=t[a];if(p!=null)switch(a){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,a,p,t,null)}}l&&Xe(e,n,"srcSet",t.srcSet,t,null),r&&Xe(e,n,"src",t.src,t,null);return;case"input":Me("invalid",e);var g=a=p=l=null,S=null,j=null;for(r in t)if(t.hasOwnProperty(r)){var V=t[r];if(V!=null)switch(r){case"name":l=V;break;case"type":p=V;break;case"checked":S=V;break;case"defaultChecked":j=V;break;case"value":a=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,n));break;default:Xe(e,n,r,V,t,null)}}os(e,a,g,S,j,p,l,!1);return;case"select":Me("invalid",e),r=p=a=null;for(l in t)if(t.hasOwnProperty(l)&&(g=t[l],g!=null))switch(l){case"value":a=g;break;case"defaultValue":p=g;break;case"multiple":r=g;default:Xe(e,n,l,g,t,null)}n=a,t=p,e.multiple=!!r,n!=null?xt(e,!!r,n,!1):t!=null&&xt(e,!!r,t,!0);return;case"textarea":Me("invalid",e),a=l=r=null;for(p in t)if(t.hasOwnProperty(p)&&(g=t[p],g!=null))switch(p){case"value":r=g;break;case"defaultValue":l=g;break;case"children":a=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(s(91));break;default:Xe(e,n,p,g,t,null)}bl(e,r,l,a);return;case"option":for(S in t)if(t.hasOwnProperty(S)&&(r=t[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,S,r,t,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(r=0;r<Ca.length;r++)Me(Ca[r],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in t)if(t.hasOwnProperty(j)&&(r=t[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,j,r,t,null)}return;default:if(Zi(n)){for(V in t)t.hasOwnProperty(V)&&(r=t[V],r!==void 0&&Lu(e,n,V,r,t,void 0));return}}for(g in t)t.hasOwnProperty(g)&&(r=t[g],r!=null&&Xe(e,n,g,r,t,null))}function ug(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,a=null,p=null,g=null,S=null,j=null,V=null;for(z in t){var I=t[z];if(t.hasOwnProperty(z)&&I!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":S=I;default:r.hasOwnProperty(z)||Xe(e,n,z,null,r,I)}}for(var C in r){var z=r[C];if(I=t[C],r.hasOwnProperty(C)&&(z!=null||I!=null))switch(C){case"type":a=z;break;case"name":l=z;break;case"checked":j=z;break;case"defaultChecked":V=z;break;case"value":p=z;break;case"defaultValue":g=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,n));break;default:z!==I&&Xe(e,n,C,z,r,I)}}Y(e,p,g,S,j,V,a,l);return;case"select":z=p=g=C=null;for(a in t)if(S=t[a],t.hasOwnProperty(a)&&S!=null)switch(a){case"value":break;case"multiple":z=S;default:r.hasOwnProperty(a)||Xe(e,n,a,null,r,S)}for(l in r)if(a=r[l],S=t[l],r.hasOwnProperty(l)&&(a!=null||S!=null))switch(l){case"value":C=a;break;case"defaultValue":g=a;break;case"multiple":p=a;default:a!==S&&Xe(e,n,l,a,r,S)}n=g,t=p,r=z,C!=null?xt(e,!!t,C,!1):!!r!=!!t&&(n!=null?xt(e,!!t,n,!0):xt(e,!!t,t?[]:"",!1));return;case"textarea":z=C=null;for(g in t)if(l=t[g],t.hasOwnProperty(g)&&l!=null&&!r.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Xe(e,n,g,null,r,l)}for(p in r)if(l=r[p],a=t[p],r.hasOwnProperty(p)&&(l!=null||a!=null))switch(p){case"value":C=l;break;case"defaultValue":z=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==a&&Xe(e,n,p,l,r,a)}Qi(e,C,z);return;case"option":for(var oe in t)if(C=t[oe],t.hasOwnProperty(oe)&&C!=null&&!r.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Xe(e,n,oe,null,r,C)}for(S in r)if(C=r[S],z=t[S],r.hasOwnProperty(S)&&C!==z&&(C!=null||z!=null))switch(S){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Xe(e,n,S,C,r,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in t)C=t[he],t.hasOwnProperty(he)&&C!=null&&!r.hasOwnProperty(he)&&Xe(e,n,he,null,r,C);for(j in r)if(C=r[j],z=t[j],r.hasOwnProperty(j)&&C!==z&&(C!=null||z!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,n));break;default:Xe(e,n,j,C,r,z)}return;default:if(Zi(n)){for(var Fe in t)C=t[Fe],t.hasOwnProperty(Fe)&&C!==void 0&&!r.hasOwnProperty(Fe)&&Lu(e,n,Fe,void 0,r,C);for(V in r)C=r[V],z=t[V],!r.hasOwnProperty(V)||C===z||C===void 0&&z===void 0||Lu(e,n,V,C,r,z);return}}for(var R in t)C=t[R],t.hasOwnProperty(R)&&C!=null&&!r.hasOwnProperty(R)&&Xe(e,n,R,null,r,C);for(I in r)C=r[I],z=t[I],!r.hasOwnProperty(I)||C===z||C==null&&z==null||Xe(e,n,I,C,r,z)}function hp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],a=l.transferSize,p=l.initiatorType,g=l.duration;if(a&&g&&hp(p)){for(p=0,g=l.responseEnd,r+=1;r<t.length;r++){var S=t[r],j=S.startTime;if(j>g)break;var V=S.transferSize,I=S.initiatorType;V&&hp(I)&&(S=S.responseEnd,p+=V*(S<g?1:(g-j)/(S-j)))}if(--r,n+=8*(a+p)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zu=null,Uu=null;function mo(e){return e.nodeType===9?e:e.ownerDocument}function _p(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vu=null;function dg(){var e=window.event;return e&&e.type==="popstate"?e===Vu?!1:(Vu=e,!0):(Vu=null,!1)}var bp=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,pg=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(e){return yp.resolve(null).then(e).catch(hg)}:bp;function hg(e){setTimeout(function(){throw e})}function ll(e){return e==="head"}function vp(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(l),Oi(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")La(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,La(t);for(var a=t.firstChild;a;){var p=a.nextSibling,g=a.nodeName;a[Ht]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&a.rel.toLowerCase()==="stylesheet"||t.removeChild(a),a=p}}else t==="body"&&La(e.ownerDocument.body);t=l}while(t);Oi(n)}function xp(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function Gu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Gu(t),Vt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function _g(e,n,t,r){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ht])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var a=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function gg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jt(e.nextSibling),e===null))return null;return e}function wp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=jt(e.nextSibling),e===null))return null;return e}function Yu(e){return e.data==="$?"||e.data==="$~"}function Iu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function jt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var qu=null;function Sp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return jt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Ep(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function kp(e,n,t){switch(n=mo(t),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function La(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e)}var At=new Map,Np=new Set;function po(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rr=Z.d;Z.d={f:yg,r:vg,D:xg,C:wg,L:Sg,m:Eg,X:Ng,S:kg,M:Rg};function yg(){var e=Rr.f(),n=lo();return e||n}function vg(e){var n=qn(e);n!==null&&n.tag===5&&n.type==="form"?Id(n):Rr.r(e)}var ji=typeof document>"u"?null:document;function Rp(e,n,t){var r=ji;if(r&&typeof n=="string"&&n){var l=Hn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Np.has(l)||(Np.add(l),e={rel:e,crossOrigin:t,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Bn(n,"link",e),Ze(n),r.head.appendChild(n)))}}function xg(e){Rr.D(e),Rp("dns-prefetch",e,null)}function wg(e,n){Rr.C(e,n),Rp("preconnect",e,n)}function Sg(e,n,t){Rr.L(e,n,t);var r=ji;if(r&&e&&n){var l='link[rel="preload"][as="'+Hn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Hn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Hn(t.imageSizes)+'"]')):l+='[href="'+Hn(e)+'"]';var a=l;switch(n){case"style":a=Ai(e);break;case"script":a=Di(e)}At.has(a)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),At.set(a,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(za(a))||n==="script"&&r.querySelector(Ua(a))||(n=r.createElement("link"),Bn(n,"link",e),Ze(n),r.head.appendChild(n)))}}function Eg(e,n){Rr.m(e,n);var t=ji;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Hn(r)+'"][href="'+Hn(e)+'"]',a=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Di(e)}if(!At.has(a)&&(e=E({rel:"modulepreload",href:e},n),At.set(a,e),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ua(a)))return}r=t.createElement("link"),Bn(r,"link",e),Ze(r),t.head.appendChild(r)}}}function kg(e,n,t){Rr.S(e,n,t);var r=ji;if(r&&e){var l=Qn(r).hoistableStyles,a=Ai(e);n=n||"default";var p=l.get(a);if(!p){var g={loading:0,preload:null};if(p=r.querySelector(za(a)))g.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=At.get(a))&&Pu(e,t);var S=p=r.createElement("link");Ze(S),Bn(S,"link",e),S._p=new Promise(function(j,V){S.onload=j,S.onerror=V}),S.addEventListener("load",function(){g.loading|=1}),S.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ho(p,n,r)}p={type:"stylesheet",instance:p,count:1,state:g},l.set(a,p)}}}function Ng(e,n){Rr.X(e,n);var t=ji;if(t&&e){var r=Qn(t).hoistableScripts,l=Di(e),a=r.get(l);a||(a=t.querySelector(Ua(l)),a||(e=E({src:e,async:!0},n),(n=At.get(l))&&$u(e,n),a=t.createElement("script"),Ze(a),Bn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(l,a))}}function Rg(e,n){Rr.M(e,n);var t=ji;if(t&&e){var r=Qn(t).hoistableScripts,l=Di(e),a=r.get(l);a||(a=t.querySelector(Ua(l)),a||(e=E({src:e,async:!0,type:"module"},n),(n=At.get(l))&&$u(e,n),a=t.createElement("script"),Ze(a),Bn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(l,a))}}function Tp(e,n,t,r){var l=(l=Q.current)?po(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Ai(t.href),t=Qn(l).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ai(t.href);var a=Qn(l).hoistableStyles,p=a.get(e);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,p),(a=l.querySelector(za(e)))&&!a._p&&(p.instance=a,p.state.loading=5),At.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},At.set(e,t),a||Tg(l,e,t,p.state))),n&&r===null)throw Error(s(528,""));return p}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Di(t),t=Qn(l).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ai(e){return'href="'+Hn(e)+'"'}function za(e){return'link[rel="stylesheet"]['+e+"]"}function Mp(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Tg(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Bn(n,"link",t),Ze(n),e.head.appendChild(n))}function Di(e){return'[src="'+Hn(e)+'"]'}function Ua(e){return"script[async]"+e}function jp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Hn(t.href)+'"]');if(r)return n.instance=r,Ze(r),r;var l=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ze(r),Bn(r,"style",l),ho(r,t.precedence,e),n.instance=r;case"stylesheet":l=Ai(t.href);var a=e.querySelector(za(l));if(a)return n.state.loading|=4,n.instance=a,Ze(a),a;r=Mp(t),(l=At.get(l))&&Pu(r,l),a=(e.ownerDocument||e).createElement("link"),Ze(a);var p=a;return p._p=new Promise(function(g,S){p.onload=g,p.onerror=S}),Bn(a,"link",r),n.state.loading|=4,ho(a,t.precedence,e),n.instance=a;case"script":return a=Di(t.src),(l=e.querySelector(Ua(a)))?(n.instance=l,Ze(l),l):(r=t,(l=At.get(a))&&(r=E({},t),$u(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Bn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ho(r,t.precedence,e));return n.instance}function ho(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,a=l,p=0;p<r.length;p++){var g=r[p];if(g.dataset.precedence===n)a=g;else if(a!==l)break}a?a.parentNode.insertBefore(e,a.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Pu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $u(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var _o=null;function Ap(e,n,t){if(_o===null){var r=new Map,l=_o=new Map;l.set(t,r)}else l=_o,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var a=t[l];if(!(a[Ht]||a[cn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var p=a.getAttribute(n)||"";p=e+p;var g=r.get(p);g?g.push(a):r.set(p,[a])}}return r}function Dp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Mg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Op(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jg(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ai(r.href),a=n.querySelector(za(l));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=go.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=a,Ze(a);return}a=n.ownerDocument||n,r=Mp(r),(l=At.get(l))&&Pu(r,l),a=a.createElement("link"),Ze(a);var p=a;p._p=new Promise(function(g,S){p.onload=g,p.onerror=S}),Bn(a,"link",r),t.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=go.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Xu=0;function Ag(e,n){return e.stylesheets&&e.count===0&&yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+n);0<e.imgBytes&&Xu===0&&(Xu=62500*fg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Xu?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function yo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,n.forEach(Dg,e),bo=null,go.call(e))}function Dg(e,n){if(!(n.state.loading&4)){var t=bo.get(e);if(t)var r=t.get(null);else{t=new Map,bo.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<l.length;a++){var p=l[a];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(t.set(p.dataset.precedence,p),r=p)}r&&t.set(null,r)}l=n.instance,p=l.getAttribute("data-precedence"),a=t.get(p)||r,a===r&&t.set(null,l),t.set(p,l),this.count++,r=go.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),a?a.parentNode.insertBefore(l,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Ha={$$typeof:le,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Og(e,n,t,r,l,a,p,g,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ft(0),this.hiddenUpdates=Ft(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=a,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Cp(e,n,t,r,l,a,p,g,S,j,V,I){return e=new Og(e,n,t,p,S,j,V,I,g),n=1,a===!0&&(n|=24),a=ut(3,null,null,n),e.current=a,a.stateNode=e,n=Nc(),n.refCount++,e.pooledCache=n,n.refCount++,a.memoizedState={element:r,isDehydrated:t,cache:n},jc(a),e}function Bp(e){return e?(e=ci,e):ci}function Lp(e,n,t,r,l,a){l=Bp(l),r.context===null?r.context=l:r.pendingContext=l,r=Xr(n),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Fr(e,r,n),t!==null&&(tt(t,e,n),ga(t,e,n))}function zp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Fu(e,n){zp(e,n),(e=e.alternate)&&zp(e,n)}function Up(e){if(e.tag===13||e.tag===31){var n=Ol(e,67108864);n!==null&&tt(n,e,67108864),Fu(e,67108864)}}function Hp(e){if(e.tag===13||e.tag===31){var n=ht();n=Br(n);var t=Ol(e,n);t!==null&&tt(t,e,n),Fu(e,n)}}var vo=!0;function Cg(e,n,t,r){var l=O.T;O.T=null;var a=Z.p;try{Z.p=2,Ku(e,n,t,r)}finally{Z.p=a,O.T=l}}function Bg(e,n,t,r){var l=O.T;O.T=null;var a=Z.p;try{Z.p=8,Ku(e,n,t,r)}finally{Z.p=a,O.T=l}}function Ku(e,n,t,r){if(vo){var l=Qu(r);if(l===null)Bu(e,n,r,xo,t),Gp(e,r);else if(zg(l,e,n,t,r))r.stopPropagation();else if(Gp(e,r),n&4&&-1<Lg.indexOf(e)){for(;l!==null;){var a=qn(l);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var p=Tn(a.pendingLanes);if(p!==0){var g=a;for(g.pendingLanes|=2,g.entangledLanes|=2;p;){var S=1<<31-Rn(p);g.entanglements[1]|=S,p&=~S}tr(a),(He&6)===0&&(to=yn()+500,Oa(0))}}break;case 31:case 13:g=Ol(a,2),g!==null&&tt(g,a,2),lo(),Fu(a,2)}if(a=Qu(r),a===null&&Bu(e,n,r,xo,t),a===l)break;l=a}l!==null&&r.stopPropagation()}else Bu(e,n,r,null,t)}}function Qu(e){return e=Wi(e),Zu(e)}var xo=null;function Zu(e){if(xo=null,e=Kt(e),e!==null){var n=d(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=h(n),e!==null)return e;e=null}else if(t===31){if(e=_(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xo=e,null}function Vp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dl()){case ml:return 2;case qi:return 8;case pl:case Kn:return 32;case rt:return 268435456;default:return 32}default:return 32}}var Wu=!1,il=null,al=null,sl=null,Va=new Map,Ga=new Map,ol=[],Lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gp(e,n){switch(e){case"focusin":case"focusout":il=null;break;case"dragenter":case"dragleave":al=null;break;case"mouseover":case"mouseout":sl=null;break;case"pointerover":case"pointerout":Va.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(n.pointerId)}}function Ya(e,n,t,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},n!==null&&(n=qn(n),n!==null&&Up(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function zg(e,n,t,r,l){switch(n){case"focusin":return il=Ya(il,e,n,t,r,l),!0;case"dragenter":return al=Ya(al,e,n,t,r,l),!0;case"mouseover":return sl=Ya(sl,e,n,t,r,l),!0;case"pointerover":var a=l.pointerId;return Va.set(a,Ya(Va.get(a)||null,e,n,t,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Ga.set(a,Ya(Ga.get(a)||null,e,n,t,r,l)),!0}return!1}function Yp(e){var n=Kt(e.target);if(n!==null){var t=d(n);if(t!==null){if(n=t.tag,n===13){if(n=h(t),n!==null){e.blockedOn=n,$i(e.priority,function(){Hp(t)});return}}else if(n===31){if(n=_(t),n!==null){e.blockedOn=n,$i(e.priority,function(){Hp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Qu(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);sr=r,t.target.dispatchEvent(r),sr=null}else return n=qn(t),n!==null&&Up(n),e.blockedOn=t,!1;n.shift()}return!0}function Ip(e,n,t){wo(e)&&t.delete(n)}function Ug(){Wu=!1,il!==null&&wo(il)&&(il=null),al!==null&&wo(al)&&(al=null),sl!==null&&wo(sl)&&(sl=null),Va.forEach(Ip),Ga.forEach(Ip)}function So(e,n){e.blockedOn===n&&(e.blockedOn=null,Wu||(Wu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ug)))}var Eo=null;function qp(e){Eo!==e&&(Eo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(Zu(r||t)===null)continue;break}var a=qn(t);a!==null&&(e.splice(n,3),n-=3,Qc(a,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function Oi(e){function n(S){return So(S,e)}il!==null&&So(il,e),al!==null&&So(al,e),sl!==null&&So(sl,e),Va.forEach(n),Ga.forEach(n);for(var t=0;t<ol.length;t++){var r=ol[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ol.length&&(t=ol[0],t.blockedOn===null);)Yp(t),t.blockedOn===null&&ol.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],a=t[r+1],p=l[un]||null;if(typeof a=="function")p||qp(t);else if(p){var g=null;if(a&&a.hasAttribute("formAction")){if(l=a,p=a[un]||null)g=p.formAction;else if(Zu(l)!==null)continue}else g=p.action;typeof g=="function"?t[r+1]=g:(t.splice(r,3),r-=3),qp(t)}}}function Pp(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Ju(e){this._internalRoot=e}ko.prototype.render=Ju.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var t=n.current,r=ht();Lp(t,r,e,n,null,null)},ko.prototype.unmount=Ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Lp(e.current,2,null,e,null,null),lo(),n[Mn]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var n=on();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ol.length&&n!==0&&n<ol[t].priority;t++);ol.splice(t,0,e),t===0&&Yp(e)}};var $p=i.version;if($p!=="19.2.7")throw Error(s(527,$p,"19.2.7"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Hg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{hl=No.inject(Hg),vn=No}catch{}}return qa.createRoot=function(e,n){if(!u(e))throw Error(s(299));var t=!1,r="",l=Jd,a=em,p=nm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Cp(e,1,!1,null,null,t,r,null,l,a,p,Pp),e[Mn]=n.current,Cu(e),new Ju(n)},qa.hydrateRoot=function(e,n,t){if(!u(e))throw Error(s(299));var r=!1,l="",a=Jd,p=em,g=nm,S=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.formState!==void 0&&(S=t.formState)),n=Cp(e,1,!0,n,t??null,r,l,S,a,p,g,Pp),n.context=Bp(null),t=n.current,r=ht(),r=Br(r),l=Xr(r),l.callback=null,Fr(t,l,r),t=r,n.current.lanes=t,_l(n,t),tr(n),e[Mn]=n.current,Cu(e),new ko(n)},qa.version="19.2.7",qa}var th;function Zg(){if(th)return tf.exports;th=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),tf.exports=Qg(),tf.exports}var Wg=Zg();const Jg=Kh(Wg),rh=o=>{let i;const c=new Set,s=(y,x)=>{const E=typeof y=="function"?y(i):y;if(!Object.is(E,i)){const T=i;i=x??(typeof E!="object"||E===null)?E:Object.assign({},i,E),c.forEach(P=>P(i,T))}},u=()=>i,_={setState:s,getState:u,getInitialState:()=>v,subscribe:y=>(c.add(y),()=>c.delete(y))},v=i=o(s,u,_);return _},e0=(o=>o?rh(o):rh),n0=o=>o;function t0(o,i=n0){const c=Za.useSyncExternalStore(o.subscribe,Za.useCallback(()=>i(o.getState()),[o,i]),Za.useCallback(()=>i(o.getInitialState()),[o,i]));return Za.useDebugValue(c),c}const lh=o=>{const i=e0(o),c=s=>t0(i,s);return Object.assign(c,i),c},r0=(o=>o?lh(o):lh);function l0(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let c=0;c<o.length;c+=1)o[c]=Math.floor(Math.random()*256);let i="";for(const c of o)i+=c.toString(16).padStart(2,"0");return i}const Af="pkp.user",Df="pkp.savedDevices",Of="pkp.ideDrafts",Cf="pkp.ideSettings",es="Prototype Version 0.6.7";function Lo(o){try{const i=localStorage.getItem(o);return i?JSON.parse(i):null}catch{return null}}function zo(o,i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}}function i0(){const o=Lo(Af);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function sf(o){zo(Af,o)}function Bf(){return Lo(Df)??[]}function ns(o){zo(Df,o)}function a0(){ns([])}function s0(){try{localStorage.removeItem(Af),localStorage.removeItem(Df),localStorage.removeItem(Of),localStorage.removeItem(Cf)}catch{}}function of(){var o;return((o=Lo(Of))==null?void 0:o.filter(i=>i.path&&typeof i.content=="string"))??[]}function cf(o){zo(Of,o)}function ih(){const o=Lo(Cf)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function o0(o){zo(Cf,o)}function uf(o){const i=Bf(),c=i.findIndex(s=>s.deviceID===o.deviceID);return c>=0?i[c]=o:i.push(o),ns(i),i}function c0(o){const i=Bf().filter(c=>c.deviceID!==o);return ns(i),i}const vf="b8e06067-62ad-41ba-9231-206ae80ab551",u0="f897177b-aee8-4767-8ecc-cc694fd5fce0",f0="f897177b-aee8-4767-8ecc-cc694fd5fce1",ff=20,d0=12,m0=new TextEncoder,p0=new TextDecoder;function h0(o){return new Promise(i=>setTimeout(i,o))}function Uo(){return typeof navigator<"u"&&"bluetooth"in navigator}function xf(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function _0(){if(!Uo())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[vf]},{namePrefix:"PicoW-"}],optionalServices:[vf]})}async function Qh(){if(!Uo()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class g0{constructor(){ce(this,"device",null);ce(this,"writeChar",null);ce(this,"notifyChar",null);ce(this,"buffer","");ce(this,"writeQueue",Promise.resolve());ce(this,"disconnectNotified",!1);ce(this,"onLine",()=>{});ce(this,"onDisconnect",()=>{});ce(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=p0.decode(c.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const u=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),u&&this.onLine(u),s=this.buffer.indexOf(`
`)}});ce(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var u;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((u=i.gatt)==null?void 0:u.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await c.getPrimaryService(vf);this.writeChar=await s.getCharacteristic(u0),this.notifyChar=await s.getCharacteristic(f0),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=m0.encode(`${i}
`),u=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let d=0;d<c.length;d+=ff){const h=c.slice(d,d+ff);await u(h),d+ff<c.length&&await h0(d0)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class b0{constructor(i,c){ce(this,"send");ce(this,"onMessage");ce(this,"inActive",!1);ce(this,"inExpectedTotal",0);ce(this,"inStreamId",0);ce(this,"inParts",new Map);ce(this,"inProgress",null);ce(this,"outPendingLines",null);ce(this,"outWaitingAck",!1);ce(this,"outStreamId",0);ce(this,"outNextStreamId",1);ce(this,"outCache",new Map);ce(this,"outProgress",null);ce(this,"outResolve",null);ce(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var s;if(i.startsWith("prep,")){const u=i.split(","),d=u.length>=2&&/^\d+$/.test(u[1])?parseInt(u[1],10):null,h=u.length>=3&&/^\d+$/.test(u[2])?parseInt(u[2],10):0;d!==null&&d>0&&(this.inActive=!0,this.inExpectedTotal=d,this.inStreamId=h,this.inParts.clear(),this.send(h>0?`ack:prep,${h}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const u=i.split(",");if(u.length>=3&&/^\d+$/.test(u[1])&&/^\d+$/.test(u[2])){const d=parseInt(u[1],10),h=parseInt(u[2],10),_=this.outCache.get(h);d===this.outStreamId&&_&&this.send(_)}return}const c=this.parseNumbered(i);if(c){const{idx:u,payload:d}=c;if(!this.inActive){this.onMessage(d);return}this.inParts.has(u)||(this.inParts.set(u,d),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let h=0;for(let _=1;_<=this.inExpectedTotal;_+=1)if(!this.inParts.has(_)){h=_;break}if(h>0&&this.inStreamId>0&&u>h&&this.send(`miss,${this.inStreamId},${h}`),this.inParts.size>=this.inExpectedTotal){for(let _=1;_<=this.inExpectedTotal;_+=1){const v=this.inParts.get(_);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=i.length===0?[""]:i;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const u=new Promise((d,h)=>{this.outResolve=d,this.outReject=h});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(d){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,d}await u}async flushOutbound(){var i,c,s,u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const d=this.outPendingLines.length;for(let h=0;h<d;h+=1){const _=this.outPendingLines[h],v=`${h+1}-${_}`;this.outCache.set(h+1,v),await this.send(v),(c=this.outProgress)==null||c.call(this,h+1,d,_)}(s=this.outResolve)==null||s.call(this)}catch(d){(u=this.outReject)==null||u.call(this,d)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const s=i.slice(0,c);if(!/^\d+$/.test(s))return null;const u=parseInt(s,10);return u<1?null:{idx:u,payload:i.slice(c+1)}}}const Gi=11,ts=31,y0=2,v0=60,Ui=4,Hi=40;function x0(o,i){return Math.max(14,Math.min(56,Math.min(o,i)*.05))}function Zh(o,i,c=Gi,s=ts){const u=x0(o,i),d=Math.max(1,o-2*u),h=Math.max(1,i-2*u);return{areaW:o,areaH:i,cols:c,rows:s,margin:u,stepX:d/Math.max(1,c-1),stepY:h/Math.max(1,s-1)}}function Wh(o,i){return i.margin+o/2*i.stepX}function Jh(o,i){const c=i.margin+o/2*i.stepY;return i.areaH-c}function Wa(o,i){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:Wh(o.centerX2,i),cy:Jh(o.centerY2,i),width:o.spanX*i.stepX,height:o.spanY*i.stepY}}function w0(o){const i=[];for(let c=0;c<o.cols;c+=1)for(let s=0;s<o.rows;s+=1)i.push({x:o.margin+c*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return i}function Mo(o,i,c,s,u){const d=(v,y,x,E)=>{const T=y%2,P=E*2;let X=T,W=1/0;for(let K=T;K<=P;K+=2){const H=Math.abs(x(K)-v);H<W&&(W=H,X=K)}return Math.max(y,Math.min(P-y,X))},h=d(o,c,v=>Wh(v,u),u.cols-1),_=d(i,s,v=>Jh(v,u),u.rows-1);return{centerX2:h,centerY2:_}}const Fl=6e3,S0=15,Oo=[32,64,128,192],E0=Fl*10,k0=3500,N0=8e3,R0=2,T0=Fl,M0=Fl*8;function df(o){return new Promise(i=>setTimeout(i,o))}function Ci(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function ah(o){return o instanceof DOMException&&o.name==="AbortError"}function ul(o){return o.replace(/[\r\n,]/g," ").trim()}class j0{constructor(i={}){ce(this,"transport",new g0);ce(this,"stream");ce(this,"events");ce(this,"waiters",[]);ce(this,"collectingLayout",!1);ce(this,"layoutBuffer",[]);ce(this,"layoutResolve",null);ce(this,"collectingLines",!1);ce(this,"lineBuffer",[]);ce(this,"lineResolve",null);ce(this,"lineReject",null);ce(this,"lineCollectId",0);ce(this,"controlPumpActive",!1);ce(this,"pendingButtons",[]);ce(this,"pendingSliders",new Map);ce(this,"pendingToggles",new Map);ce(this,"pendingJoysticks",new Map);ce(this,"pendingDpads",[]);ce(this,"expectingDisconnect",!1);ce(this,"disconnectMessage",null);ce(this,"busy",!1);ce(this,"fsCapabilities",null);this.events=i,this.stream=new b0(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return xf((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var s,u;(u=(s=this.events).onLog)==null||u.call(s,i,c)}progress(i,c){var s,u;(u=(s=this.events).onProgress)==null||u.call(s,i,c)}onDeviceMessage(i){var s,u;if(i==="disconnect"||i==="disconnect_private"){const d=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=d,this.log("warning",d),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const d=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,d),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const d=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(u=this.layoutResolve)==null||u.call(this,d),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(d=>d.match(i));if(c>=0){const d=this.waiters[c];this.waiters.splice(c,1),clearTimeout(d.timer),d.resolve(i)}}waitFor(i,c,s){return new Promise((u,d)=>{const h=setTimeout(()=>{const _=this.waiters.findIndex(v=>v.timer===h);_>=0&&this.waiters.splice(_,1),d(new Error(`Timeout: ${s}`))},c);this.waiters.push({match:i,resolve:u,reject:d,timer:h})})}async collectLines(i,c,s,u,d){Ci(u);const h=this.lineCollectId+1;this.lineCollectId=h,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(d??null);const _=new Promise((v,y)=>{let x=!1;const E=()=>this.lineCollectId===h,T=()=>{x=!0,E()&&(this.lineReject=null,this.stream.setInboundProgress(null)),u==null||u.removeEventListener("abort",X)},P=H=>{x||(clearTimeout(W),E()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),y(H))},X=()=>{P(new DOMException("BLE file read cancelled","AbortError"))},W=setTimeout(()=>{E()&&P(new Error(`Timeout: ${s}`))},c);this.lineResolve=v,this.lineReject=P;const K=this.lineResolve;this.lineResolve=H=>{E()&&(clearTimeout(W),T(),K==null||K(H))},u==null||u.addEventListener("abort",X,{once:!0})});return await this.transport.writeLine(i),_}async exchange(i,c,s,u=3){let d;for(let h=1;h<=u;h+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,Fl,s)}catch(_){d=_,this.log("warning",`${s}: forsøg ${h}/${u} mislykkedes`)}throw d instanceof Error?d:new Error(`Failed: ${s}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var le;await df(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",ie=>ie==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",ie=>ie==="unowned"||ie.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned")return{kind:"unowned"};const s=c.split(","),u=s[1]??"",d=s[2]!==void 0&&parseInt(s[2],10)||0,h=s[3]!==void 0?parseInt(s[3],10)===1:!0,_=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=s.length>=7,y=v?parseInt(s[5]??"0",10)===1:_,x=((le=s[v?6:5])==null?void 0:le.trim())||void 0;await this.exchange("ACK:ownership",ie=>ie==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const E=await this.exchange(`request_permission,${i.userID},${ul(i.username)}`,ie=>ie.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const T=E.split(",").filter(ie=>/^\d+$/.test(ie)),P=T.length>=1?parseInt(T[0]??"0",10):0,X=T.length>=2?parseInt(T[1]??"0",10):0,W=T.length>=3?parseInt(T[2]??"0",10):X;if(P===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:h};const K=i.userID===u,H=X===1||K,q=W===1||K;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:u,ownerName:x,iconID:d,canEdit:H,canEditCode:q,isOwnedByMe:K,canOthersConnect:h,canOthersEdit:_,canOthersEditCode:y}}async create(i,c,s,u,d,h,_){const v=s?1:0,y=s&&u?1:0,x=s&&d?1:0;await this.exchange(`create,${i.userID},${ul(i.username)},${c},${v},${y},${x},${h},${_}`,E=>E==="ACK:create","create")}async updateDeviceSettings(i,c,s,u,d,h,_){const v=c?1:0,y=c&&s?1:0,x=c&&u?1:0;await this.exchange(`settings_update,${i},${v},${y},${x},${d},${h},${ul(_??"")}`,E=>E==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((s,u)=>{this.layoutResolve=s;const d=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,u(new Error("Timeout: layout")))},Fl*2),h=this.layoutResolve;this.layoutResolve=_=>{clearTimeout(d),h==null||h(_)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",u=>u==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(u=>{const d=_=>_===null?"n":String(_),h=`update,${u.type},${u.name},${d(u.centerX2)},${d(u.centerY2)},${d(u.spanX)},${d(u.spanY)},${u.rotation}`;return u.type==="slider"?`${h},${u.sliderMin??0},${u.sliderMax??100},${u.sliderRecenter??"none"}`:u.type==="toggle"?`${h},${u.toggleInitial?1:0}`:u.type==="radar"?[h,u.radarMinAngle??0,u.radarMaxAngle??180,u.radarMaxDistance??200,u.radarFadeMs??1200].join(","):u.type==="joystick"?[h,u.joystickXMin??-100,u.joystickXMax??100,u.joystickYMin??-100,u.joystickYMax??100,u.joystickXRecenter??"middle",u.joystickYRecenter??"middle"].join(","):h});c.push("__END__");const s=this.waitFor(u=>u==="LAYOUT_SAVED",Fl*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await s}async listFiles(i="/"){return(await this.collectLines(`fs_list,${ul(i)}`,Fl*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,u,d,h]=s.split(","),_=u==="file"||u==="dir"?u:"unknown",v=parseInt(h??"",10),y=d||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:_,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(i){var h,_,v;const c=i.split(",");if(c.length<4)return;const s=(h=c[1])==null?void 0:h.trim(),u=parseFloat(c[2]??""),d=parseFloat(c[3]??"");!s||!Number.isFinite(u)||!Number.isFinite(d)||((v=(_=this.events).onRadar)==null||v.call(_,s,u,d),this.log("info",`rx: ${i}`))}handleTextLine(i){var _,v;const c=i.indexOf(","),s=c>=0?i.indexOf(",",c+1):-1;if(c<0||s<0)return;const u=i.slice(c+1,s),d=i.slice(s+1),h=u==null?void 0:u.trim();h&&((v=(_=this.events).onText)==null||v.call(_,h,d),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var d,h,_;const c=i.split(",");if(c.length<3)return;const s=(d=c[1])==null?void 0:d.trim(),u=parseInt(c[2]??"",10);!s||!Number.isFinite(u)||((_=(h=this.events).onToggleState)==null||_.call(h,s,u===1),this.log("info",`rx: ${i}`))}async readText(i,c,s){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const u=await this.getFilesystemCapabilities(s);if(u.streamRead)try{return await this.readTextStream(i,u,c,s)}catch(d){if(s!=null&&s.aborted||ah(d)||!u.pageRead)throw d;this.log("warning",d instanceof Error?`fs_read_stream fejlede; bruger paged read: ${d.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,s)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",T0,"fs_capabilities",i),s=c.find(x=>x.startsWith("ERR"));if(s)throw new Error(s);const u=c.find(x=>x.startsWith("fs_capabilities,"));if(!u)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const d=u.split(","),h=new Map;for(let x=1;x<d.length-1;x+=2)h.set(d[x],d[x+1]);const _=parseInt(h.get("max_page")??"",10),v=parseInt(h.get("stream_chunk")??"",10),y={version:h.get("version")||void 0,pageRead:h.get("page_read")==="1",maxPageSize:Number.isFinite(_)&&_>0?_:32,streamRead:h.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,c,s){const u=await this.getFilesystemCapabilities(s);let d=0,h=A0(u.maxPageSize),_=0,v=null,y="";const x=`Indlæser ${mf(i)}...`;Ci(s),c==null||c(5,x);for(let E=0;E<512;E+=1){Ci(s),_===0&&(c==null||c(7,x));const P=await this.readPageWithRetry(i,_,d,h,s),X=P.lines;d=P.nextPageSizeIndex,h=P.maxPageSizeIndex,Ci(s);const W=X.find(J=>J.startsWith("ERR"));if(W)throw new Error(W);const K=X.find(J=>J.startsWith("fs_page,"));if(!K)throw new Error("ERR: fs_read_page missing data");const[,H,q,le,ie=""]=K.split(",",5);if(H!==i)throw new Error("ERR: fs_read_page stale data");const de=parseInt(q??"",10),Ne=parseInt(le??"",10);if(!Number.isFinite(de)||de!==_||!Number.isFinite(Ne))throw new Error("ERR: fs_read_page invalid data");v=Ne,y+=ie,_+=Math.floor(ie.length/2);const re=v>0?8+Math.min(87,Math.round(_/v*87)):95;if(c==null||c(re,x),_>=v||ie.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(oh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,s,u,d){let h,_=Math.min(s,u);for(;_>=0;){const v=Oo[_],y=_===0?R0:1,x=_===0?N0:k0;for(let E=1;E<=y;E+=1){Ci(d);try{return{lines:await this.collectLines(`fs_read_page,${ul(i)},${c},${v}`,x,`fs_read_page ${c}`,d),nextPageSizeIndex:Math.min(_+1,u),maxPageSizeIndex:u}}catch(T){if(d!=null&&d.aborted||ah(T))throw T;if(h=T,E<y||_>0){const X=_>0&&E>=y?Oo[_-1]:v;this.log("warning",`fs_read_page ${c} (${v} bytes) fejlede; prøver ${X} bytes`),await df(80+E*80)}}}if(_===0)break;u=Math.max(0,_-1),_=u}throw h instanceof Error?h:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,s,u){const d=`Indlæser ${mf(i)}...`,h=Math.max(16,Math.min(192,c.streamChunkSize||128));s==null||s(5,d);const _=await this.collectLines(`fs_read_stream,${ul(i)},${h}`,M0,`fs_read_stream ${i}`,u,(re,J)=>{const be=8+Math.round(Math.min(re,J)/Math.max(1,J)*87);s==null||s(Math.min(95,be),d)});Ci(u);const v=_.find(re=>re.startsWith("ERR"));if(v)throw new Error(v);const y=_.find(re=>re.startsWith("fs_stream_begin,")),x=_.find(re=>re.startsWith("fs_stream_end,"));if(!y||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,E,T]=y.split(",",4),[,P,X,W]=x.split(",",4),K=parseInt(T??"",10),H=parseInt(X??"",10),q=parseInt(W??"",10);if(E!==i||P!==i||!Number.isFinite(K)||K!==H||!Number.isFinite(q))throw new Error("ERR: fs_read_stream invalid metadata");let le=0,ie="";for(const re of _){if(!re.startsWith("fs_stream_chunk,"))continue;const[,J,be=""]=re.split(",",3),_e=parseInt(J??"",10);if(!Number.isFinite(_e)||_e!==le||be.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");ie+=be,le+=Math.floor(be.length/2)}if(le!==K)throw new Error("ERR: fs_read_stream size mismatch");const de=oh(ie);if(sh(de)!==q)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(de)}async writeText(i,c,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${ul(i)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const u=new TextEncoder().encode(c),d=[...u].map(x=>x.toString(16).padStart(2,"0")).join(""),h=[];for(let x=0;x<d.length;x+=160)h.push(`fs_write_chunk,${d.slice(x,x+160)}`);h.push("fs_write_end");const _=sh(u),v=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),E0,"fs_write_done");s==null||s(u.length===0?85:18,u.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${u.length} bytes via Bluetooth...`),await this.stream.sendReliable(h,(x,E,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const P=Math.min(u.length,x*80),X=18+Math.round(x/Math.max(1,E-1)*67);s==null||s(Math.min(85,X),`Sender ${P}/${u.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const y=await v;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,x,E]=y.split(",",3),T=parseInt(x??"",10),P=parseInt(E??"",10);if(T!==u.length||P!==_)throw new Error(`ERR: BLE-verificering fejlede for ${mf(i)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${ul(i)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,s){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(s)}`),this.pumpControls())}enqueueDpad(i,c,s){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${s?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await df(S0)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const s=this.pendingSliders.entries().next();if(!s.done){const[h,_]=s.value;return this.pendingSliders.delete(h),_}const u=this.pendingToggles.entries().next();if(!u.done){const[h,_]=u.value;return this.pendingToggles.delete(h),_}const d=this.pendingJoysticks.entries().next();if(!d.done){const[h,_]=d.value;return this.pendingJoysticks.delete(h),_}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,s,u;for(const d of this.waiters)clearTimeout(d.timer),d.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(u=(s=this.events).onDisconnect)==null||u.call(s,i)}}function A0(o){let i=0;for(let c=0;c<Oo.length;c+=1)Oo[c]<=o&&(i=c);return i}function mf(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function sh(o){let i=0;for(const c of o)i=i+c>>>0;return i}function oh(o){const i=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(o.slice(c*2,c*2+2),16);return i}function ch(o){const i=(c,s)=>Number.isFinite(c)?Math.max(y0,Math.min(v0,c)):s;for(const c of o){const s=c.trim();if(s.startsWith("#GRID,")){const u=s.split(","),d=i(parseInt(u[1],10),Gi),h=i(parseInt(u[2],10),ts);return{cols:d,rows:h}}}return{cols:Gi,rows:ts}}function uh(o){const i=new Map;for(const c of o){const s=c.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const u=s.split(",");if(u.length<7)continue;const[d,h,_,v,y,x,E,T,P,X,W,K,H]=u;if(d!=="button"&&d!=="slider"&&d!=="toggle"&&d!=="radar"&&d!=="text"&&d!=="joystick"&&d!=="dpad"||i.has(h))continue;const q=Z=>{if(Z==="n")return null;const se=parseInt(Z,10);return Number.isNaN(se)?null:se},le=parseInt(E,10)||0,ie=T!==void 0?parseInt(T,10):0,de=P!==void 0?parseInt(P,10):100,Ne=["none","bottom","middle","top"].includes(X??"")?X:"none",re=T!==void 0?parseInt(T,10)===1:!1,J=T!==void 0?parseFloat(T):0,be=P!==void 0?parseFloat(P):180,_e=X!==void 0?parseFloat(X):200,ye=W!==void 0?parseInt(W,10):1200,ae=(Z,se)=>["none","bottom","middle","top"].includes(Z??"")?Z:se,Ve=T!==void 0?parseInt(T,10):-100,Re=P!==void 0?parseInt(P,10):100,Ge=X!==void 0?parseInt(X,10):-100,O=W!==void 0?parseInt(W,10):100;i.set(h,{type:d,name:h,centerX2:q(_),centerY2:q(v),spanX:q(y),spanY:q(x),rotation:[0,90,180,270].includes(le)?le:0,...d==="slider"?{sliderMin:Number.isFinite(ie)?ie:0,sliderMax:Number.isFinite(de)?de:100,sliderRecenter:Ne}:{},...d==="toggle"?{toggleInitial:re}:{},...d==="radar"?{radarMinAngle:Number.isFinite(J)?J:0,radarMaxAngle:Number.isFinite(be)?be:180,radarMaxDistance:Number.isFinite(_e)&&_e>0?_e:200,radarFadeMs:Number.isFinite(ye)&&ye>0?ye:1200}:{},...d==="joystick"?{joystickXMin:Number.isFinite(Ve)?Ve:-100,joystickXMax:Number.isFinite(Re)&&Re!==Ve?Re:100,joystickYMin:Number.isFinite(Ge)?Ge:-100,joystickYMax:Number.isFinite(O)&&O!==Ge?O:100,joystickXRecenter:ae(K,"middle"),joystickYRecenter:ae(H,"middle")}:{}})}return[...i.values()]}let te=null,Pa=null,fh=0,Tr=!1;function D0(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function dh(o){return new Promise(i=>setTimeout(i,o))}function O0(o){return Object.fromEntries(o.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function mh(o,i){const c=O0(o);for(const s of o)s.type==="toggle"&&i[s.name]!==void 0&&(c[s.name]=i[s.name]);return c}const ne=r0((o,i)=>{function c(u,d){o(h=>({logs:[{level:u,message:d,time:D0()},...h.logs].slice(0,200)}))}function s(u){Pa&&clearTimeout(Pa),fh+=1,o({toast:{message:u,id:fh}}),Pa=setTimeout(()=>o({toast:null}),4500)}return te=new j0({onProgress:(u,d)=>o({progress:{value:u,label:d}}),onLog:(u,d)=>c(u,d),onRadar:(u,d,h)=>{const _=Date.now(),v={id:`${_}-${Math.random().toString(36).slice(2)}`,angle:d,distance:h,createdAt:_};o(y=>{const x=y.layout.find(P=>P.type==="radar"&&P.name===u),E=(x==null?void 0:x.radarFadeMs)??1200,T=y.radarPings[u]??[];return{radarPings:{...y.radarPings,[u]:[...T.filter(P=>_-P.createdAt<=E),v].slice(-80)}}})},onText:(u,d)=>{o(h=>({textValues:{...h.textValues,[u]:d}}))},onToggleState:(u,d)=>{o(h=>({toggleValues:{...h.toggleValues,[u]:d}}))},onDisconnect:u=>{const{screen:d,active:h,picoIdeOrigin:_}=i();if(Tr){Tr=!1;return}if(u&&(c("warning",u),s(u)),d==="control"||d==="connection"||d==="create"||d==="ide"&&_==="control"){const v=h?{deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,canOthersEditCode:h.canOthersEditCode,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:v})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const u=i0(),d=Bf();o({user:u,savedDevices:d,splashTarget:u?"dashboard":"intro"})},finishSplash:()=>{const u=i().splashTarget;o({screen:u??"intro"})},createUser:u=>{const d=u.trim();if(!d)return;const h={username:d,userID:l0()};sf(h),o({user:h,screen:"dashboard"})},findDevice:async()=>{try{const u=await _0();await i().connectToDevice(u)}catch(u){u instanceof Error&&u.name!=="NotFoundError"&&c("error",u.message)}},connectToDevice:async(u,d)=>{var _,v;const h=i().user;if(!(!h||!te)){Tr=!1,o({screen:"connection",connecting:{name:xf(u.name)||(d==null?void 0:d.deviceName)||"Pico",iconID:(d==null?void 0:d.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await te.connect(u);const y=await te.runHandshake(h),x=u.id,E=xf(u.name)||(d==null?void 0:d.deviceName)||"Pico";if(y.kind==="denied"){const H=`Du kan ikke forbinde, fordi ${((_=y.ownerName)==null?void 0:_.trim())||((v=d==null?void 0:d.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",H),s(H),o({screen:"dashboard",connecting:null}),await te.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:x,deviceName:E,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:h.username,gridCols:Gi,gridRows:ts},screen:"create"});return}const T={deviceID:x,deviceName:E,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?h.username:y.ownerName??(d==null?void 0:d.ownerName)};o({savedDevices:uf(T)});const P=await te.requestLayout(),X=ch(P),W=uh(P);o({layout:W,sliderValues:{},toggleValues:mh(W,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:x,deviceName:E,iconID:y.iconID,canEdit:y.canEdit,canEditCode:y.canEditCode,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?h.username:y.ownerName??(d==null?void 0:d.ownerName),gridCols:X.cols,gridRows:X.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const x=y instanceof Error?y.message:"Forbindelsen mislykkedes.";c("error",x),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await te.disconnect().catch(()=>{})}}},finishCreate:async(u,d,h,_,v,y)=>{const{user:x,active:E}=i();if(!(!x||!E||!te))try{te.setBusy(!0),await te.create(x,u,d,h,_,v,y),te.setBusy(!1);const T={deviceID:E.deviceID,deviceName:E.deviceName,deviceIconID:u,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,isOwnedByMe:!0,ownerName:x.username};o({savedDevices:uf(T)});const P=await te.requestLayout(),X=ch(P),W=uh(P);o({layout:W,sliderValues:{},toggleValues:mh(W,i().toggleValues),radarPings:{},textValues:{},active:{...E,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,ownerName:x.username,gridCols:X.cols,gridRows:X.rows},screen:"control"})}catch(T){te.setBusy(!1);const P=T instanceof Error?T.message:"Oprettelse mislykkedes.";c("error",P),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await te.disconnect().catch(()=>{})}},saveDeviceSettings:async(u,d,h,_,v,y)=>{const{active:x,user:E}=i();if(!(!x||!te||!x.isOwnedByMe))try{te.setBusy(!0),await te.updateDeviceSettings(u,d,h,_,v,y,E==null?void 0:E.username);const T={...x,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,ownerName:(E==null?void 0:E.username)??x.ownerName,gridCols:v,gridRows:y},P={deviceID:x.deviceID,deviceName:x.deviceName,deviceIconID:u,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,isOwnedByMe:!0,ownerName:(E==null?void 0:E.username)??x.ownerName};o({active:T,savedDevices:uf(P)}),s("Enhedsindstillinger gemt.")}catch(T){c("error",T instanceof Error?T.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{te.setBusy(!1)}},cancelCreate:async()=>{te&&await te.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Tr=!0,te&&await te.disconnect().catch(()=>{}),Tr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:u=>{o({savedDevices:c0(u)})},clearSavedDevices:()=>{a0(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{Tr=!0,te!=null&&te.connected&&await te.disconnect().catch(()=>{}),s0(),window.location.reload()},updateUsername:u=>{const d=i().user,h=u.trim();if(!d||!h)return;const _={...d,username:h};sf(_),o(v=>{var x;const y=v.savedDevices.map(E=>E.isOwnedByMe?{...E,ownerName:h}:E);return ns(y),{user:_,active:(x=v.active)!=null&&x.isOwnedByMe?{...v.active,ownerName:h}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const u=i().user;return u?C0(u):null},applyOwnerPairingCode:u=>{var h;const d=B0(u,(h=i().user)==null?void 0:h.username);return d?(sf(d),o(_=>{var y;const v=_.savedDevices.map(x=>x.isOwnedByMe?{...x,ownerName:d.username}:x);return ns(v),{user:d,active:(y=_.active)!=null&&y.isOwnedByMe?{..._.active,ownerName:d.username}:_.active,savedDevices:v}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const u=i().screen==="control"&&!!(te!=null&&te.connected),d=i().active;if(u&&d&&!d.isOwnedByMe&&!d.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(h=>({screen:"ide",picoIdeOrigin:u?"control":"dashboard",active:u?h.active:null,layout:u?h.layout:[],sliderValues:u?h.sliderValues:{},toggleValues:u?h.toggleValues:{},radarPings:u?h.radarPings:{},textValues:u?h.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:u,active:d}=i();o({screen:u==="control"&&d&&(te!=null&&te.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(te!=null&&te.connected),bleListFiles:async()=>te!=null&&te.connected?te.listFiles("/"):[],bleReadText:async(u,d,h)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");return te.readText(u,d,h)},bleWriteText:async(u,d,h)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.writeText(u,d,h)},bleDeleteFile:async u=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.deleteFile(u)},bleRestart:async()=>{te!=null&&te.connected&&await te.restart()},bleRestartAndReconnect:async(u="control")=>{const{active:d}=i();if(!(te!=null&&te.connected)||!d)return!1;const h={deviceID:d.deviceID,deviceName:d.deviceName,deviceIconID:d.iconID,canOthersConnect:d.canOthersConnect,canOthersEdit:d.canOthersEdit,canOthersEditCode:d.canOthersEditCode,isOwnedByMe:d.isOwnedByMe,ownerName:d.ownerName};Tr=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await te.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:h.deviceName,iconID:h.deviceIconID}});for(let _=0;_<12&&(te!=null&&te.connected);_+=1)await dh(250);te!=null&&te.connected||(Tr=!1);for(let _=1;_<=8;_+=1){await dh(_===1?1200:850);try{const y=(await Qh()).find(x=>x.id===h.deviceID);if(!y){o({progress:{value:Math.min(88,20+_*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+_*8),label:`Genforbinder (${_}/8)...`}}),await i().connectToDevice(y,h),u==="ide"&&o(x=>({screen:"ide",picoIdeOrigin:"control",active:x.active,layout:x.layout,sliderValues:x.sliderValues,toggleValues:x.toggleValues,radarPings:x.radarPings,textValues:x.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){c("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Tr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:h}),!1},reconnectLostDevice:async()=>{var d;const u=i().connectionLost;if(u){o({connectionLost:null});try{if((d=navigator.bluetooth)!=null&&d.getDevices){const _=(await navigator.bluetooth.getDevices()).find(v=>v.id===u.deviceID);if(_){await i().connectToDevice(_,u);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:(u,d)=>te==null?void 0:te.enqueueButton(u,d),sendSlider:(u,d)=>{o(h=>({sliderValues:{...h.sliderValues,[u]:d}})),te==null||te.enqueueSlider(u,d)},sendToggle:(u,d)=>{o(h=>({toggleValues:{...h.toggleValues,[u]:d}})),te==null||te.enqueueToggle(u,d)},sendJoystick:(u,d,h)=>te==null?void 0:te.enqueueJoystick(u,d,h),sendDpad:(u,d,h)=>te==null?void 0:te.enqueueDpad(u,d,h),saveLayout:async u=>{if(te)try{te.setBusy(!0),await te.saveLayout(u),o({layout:u,editMode:!1})}catch(d){c("error",d instanceof Error?d.message:"Kunne ikke gemme layout.")}finally{te.setBusy(!1)}},setEditMode:u=>o({editMode:u,sideMenuOpen:!1,menuPage:null}),setDashboardPage:u=>o({dashboardPage:u}),toggleSideMenu:u=>o(d=>({sideMenuOpen:u??!d.sideMenuOpen})),toggleDebugger:u=>o(d=>({debuggerOpen:u??!d.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:u=>o({menuPage:u,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(u,d)=>c(u,d),askConfirm:u=>o({confirmDialog:u}),closeConfirm:()=>o({confirmDialog:null}),showToast:u=>s(u),dismissToast:()=>{Pa&&clearTimeout(Pa),o({toast:null})}}}),wf="PKP-EJER";function C0(o){var s;const i=o.userID.toLowerCase(),c=((s=i.match(/.{1,4}/g))==null?void 0:s.join("-"))??i;return`${wf}-${c}-${e_(i)}`}function B0(o,i="Ejer"){const c=o.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${wf}-`))return null;const s=c.slice(wf.length+1).split("-").filter(Boolean),u=s.pop()??"",d=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(d)||u!==e_(d)?null:{userID:d,username:i.trim()||"Ejer"}}function e_(o){let i=2166136261;for(const c of o.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const Ho="./",n_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function Ii(o){const i=o>=0&&o<n_.length?o:0;return`${Ho}device-icons/${i}.png`}const L0=`${Ho}art/logo.png`,z0=`${Ho}art/Teknologiskolen_logo.png`,U0=`${Ho}art/logo_teknologiskolen_white.png`,H0={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Fn({name:o,size:i=24,className:c}){return f.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:H0[o]})}const V0=1850,G0=450;function Y0(){const o=ne(s=>s.splashTarget),i=ne(s=>s.finishSplash),c=o?"splash-screen-animation splash-ready":"splash-pending";return L.useEffect(()=>{if(!o)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches?G0:V0,d=window.setTimeout(i,u);return()=>window.clearTimeout(d)},[i,o]),f.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:L0,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function ph(){const o=ne(u=>u.createUser),[i,c]=L.useState(""),s=i.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:z0,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${s?"filled":""}`,children:[f.jsx("input",{id:"username",value:i,onChange:u=>c(u.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(i),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:es})]})}function Lf({title:o,onMenu:i}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:f.jsx(Fn,{name:"menu"})})]})})}function Sn({title:o,onClose:i,children:c,closeVariant:s="plain"}){const u=s==="circle",d=L.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:h=>{d.current=h.target===h.currentTarget},onClick:h=>{h.target===h.currentTarget&&d.current&&i(),d.current=!1},children:f.jsxs("div",{className:"modal",onClick:h=>h.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${u?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:f.jsx(Fn,{name:u?"delete":"close",size:u?30:24})})]}),f.jsx("div",{className:"modal-body",children:c})]})})}function hh(){const o=ne(T=>T.savedDevices),i=ne(T=>T.toggleSideMenu),c=ne(T=>T.findDevice),s=ne(T=>T.removeSavedDevice),u=ne(T=>T.askConfirm),d=ne(T=>T.dashboardPage),h=ne(T=>T.setDashboardPage),_=$0(),[v,y]=L.useState(null),x=Uo(),E=o.filter(T=>d==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(P0);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(Lf,{title:"Hovedmenu",onMenu:()=>i()}),f.jsxs("div",{className:"content dash-content",children:[!x&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:d==="mine"?"active":"",onClick:()=>h("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:d==="andre"?"active":"",onClick:()=>h("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:E.length===0?f.jsx("div",{className:"device-list-empty",children:d==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):E.map(T=>f.jsx(I0,{device:T,disabled:!x,onConnect:()=>_(T),onSettings:()=>y(T)},T.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!x,"aria-label":"Find enhed",children:f.jsx(Fn,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:es}),v&&f.jsx(Sn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:Ii(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx($a,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx($a,{label:"Ejer",value:q0(v)}),f.jsx($a,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx($a,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx($a,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const T=v;y(null),_(T)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>u({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function I0({device:o,disabled:i,onConnect:c,onSettings:s}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[f.jsx("img",{className:"device-tile-icon",src:Ii(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:f.jsx(Fn,{name:"settings"})})]})}function $a({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function q0(o){var i;return o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger"}function P0(o,i){return o.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function $0(){const o=ne(s=>s.connectToDevice),i=ne(s=>s.findDevice),c=ne(s=>s.log);return async s=>{const d=(await Qh()).find(h=>h.id===s.deviceID);d?await o(d,s):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function X0(){const o=ne(c=>c.connecting),i=ne(c=>c.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:Ii((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function t_({selected:o,onSelect:i,onClose:c}){return f.jsx(Sn,{title:"Vælg Enhedens Ikon",onClose:c,children:f.jsx("div",{className:"icon-grid",children:n_.map(s=>f.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{i(s.id),c()},"aria-label":s.label,children:f.jsx("img",{src:Ii(s.id),alt:""})},s.id))})})}function F0(){const o=ne(ie=>ie.finishCreate),i=ne(ie=>ie.cancelCreate),[c,s]=L.useState(0),[u,d]=L.useState(!1),[h,_]=L.useState(!1),[v,y]=L.useState(!1),[x,E]=L.useState(!1),[T,P]=L.useState(Gi),[X,W]=L.useState(ts),[K,H]=L.useState(!1),q=ie=>Number.isFinite(ie)?Math.max(Ui,Math.min(Hi,Math.round(ie))):Gi;async function le(){H(!0),await o(c,h,h&&v,h&&x,q(T),q(X))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>d(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:Ii(c),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(Fn,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:h?"":"active",onClick:()=>_(!1),children:"Privat"}),f.jsx("button",{type:"button",className:h?"active":"",onClick:()=>_(!0),children:"Offentlig"})]}),h&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:x?"":"active",onClick:()=>E(!1),children:"Nej"}),f.jsx("button",{type:"button",className:x?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Ui,max:Hi,value:Number.isNaN(T)?"":T,onChange:ie=>P(parseInt(ie.target.value,10)),onBlur:()=>P(q(T))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Ui,max:Hi,value:Number.isNaN(X)?"":X,onChange:ie=>W(parseInt(ie.target.value,10)),onBlur:()=>W(q(X))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:K,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:le,disabled:K,children:K?"Opretter...":"Opret"})]})]}),u&&f.jsx(t_,{selected:c,onSelect:s,onClose:()=>d(!1)}),f.jsx("span",{className:"version",children:es})]})}const Yi=8;function jo(o){return Math.max(5,Math.min(22,o))}function Co(o,i,c){const s=Math.max(1,o.length),u=(i-Yi*2)/(s*.58),d=(c-Yi*2)*.48;return jo(Math.min(u,d))}function K0(o,i,c,s,u){const d=o.trim().split(/\s+/).filter(Boolean),h=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,d.length-1)*1.6),_=u?jo(Math.min(i/4.6,c/4.6,12)):0,v=u?_+Yi:Yi;if(s){const E=Math.max(1,c-v*2);return{fontSize:jo(Math.min(i*.48,E/(h*1.04))),endFontSize:_,centerInset:u?{top:v,bottom:v}:{}}}const y=Math.max(1,i-v*4.2);return{fontSize:jo(Math.min(c*.42,y/(h*.58))),endFontSize:_,centerInset:u?{left:v*2.1,right:v*2.1}:{}}}function Q0({control:o,rect:i,disabled:c,latestValue:s,toggleValue:u,radarPings:d=[],textValue:h,onButton:_,onSlider:v,onToggle:y,onJoystick:x,onDpad:E}){const T=L.useRef(!1),P={left:i.cx,top:i.cy,width:i.width,height:i.height};if(o.type==="button"){const X=()=>{c||!T.current||(T.current=!1,_(o.name,!1))};return f.jsx("div",{className:"control",style:P,children:f.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",fontSize:Co(o.name,i.width,i.height)},onPointerDown:W=>{var K,H;c||(W.preventDefault(),(H=(K=W.currentTarget).setPointerCapture)==null||H.call(K,W.pointerId),T.current=!0,_(o.name,!0))},onPointerUp:W=>{var K,H;W.preventDefault(),(H=(K=W.currentTarget).releasePointerCapture)==null||H.call(K,W.pointerId),X()},onPointerCancel:X,onLostPointerCapture:X,children:o.name})})}if(o.type==="toggle"){const X=!!u;return f.jsx("div",{className:"control",style:P,children:f.jsx("button",{className:`control-toggle ${X?"on":""}`,type:"button",disabled:c,"aria-pressed":X,style:{width:"100%",height:"100%",fontSize:Co(o.name,i.width,i.height)},onPointerDown:W=>{c||(W.preventDefault(),y(o.name,!X))},children:f.jsx("span",{children:o.name})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:P,children:f.jsx(l_,{control:o,pings:d,width:i.width,height:i.height})}):o.type==="text"?f.jsx("div",{className:"control",style:P,children:f.jsx(r_,{message:h??o.name,width:i.width,height:i.height})}):o.type==="joystick"?f.jsx("div",{className:"control",style:P,children:f.jsx(cb,{control:o,disabled:c,onJoystick:x,width:i.width,height:i.height})}):o.type==="dpad"?f.jsx("div",{className:"control",style:P,children:f.jsx(fb,{control:o,disabled:c,onDpad:E,width:i.width,height:i.height})}):f.jsx("div",{className:"control",style:P,children:f.jsx(ob,{control:o,disabled:c,latestValue:s,onSlider:v,width:i.width,height:i.height})})}function Z0(o,i,c){const s=o.trim()||" ",d=s.split(/\s+/).filter(Boolean).reduce((E,T)=>Math.max(E,T.length),1),h=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(d*1.9)))),_=Math.max(1,i-Yi*3),v=Math.max(1,c-Yi*3),y=_/(d*.58),x=v/(h*1.16);return Math.max(7,Math.min(24,y,x))}function r_({message:o,width:i,height:c}){const s=o.trim()||"...";return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:Z0(s,i,c)},children:f.jsx("span",{children:s})})}function l_({control:o,pings:i,width:c,height:s,preview:u=!1}){const[,d]=L.useState(0),h=Math.max(120,o.radarFadeMs??1200),_=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=bt(_),x=bt(v),E=Math.abs(v-_)>=360||y===x&&_!==v,T=Math.max(1,o.radarMaxDistance??200),P=Date.now(),X=i[i.length-1],W=o.rotation,K=bt(y+W),H=bt(x+W),q=lb(y,x),le=((X==null?void 0:X.angle)??q)+W,ie=u?[{id:"preview",angle:q,distance:T*.62,createdAt:P}]:i.filter(O=>P-O.createdAt<=h),de=!E,Ne=Math.max(8,Math.min(12,Math.min(c,s)*.16)),re=0,J=0,be=1,_e=E?{x:-1.12,y:-1.12,width:2.24,height:2.24}:eb(K,H),ye=E?"":W0(re,J,be,K,H),ae=yh(_),Ve=yh(v),Re=de?tb(K,H,_e,c,s,ae,Ve,Ne):null;L.useEffect(()=>{if(u||i.length===0)return;const O=window.setInterval(()=>d(Z=>Z+1),120);return()=>window.clearInterval(O)},[h,i.length,u]);const Ge=Ct(re,J,be,le);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:c,height:s,viewBox:`${_e.x} ${_e.y} ${_e.width} ${_e.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[E?f.jsx("circle",{className:"radar-sector-fill",cx:re,cy:J,r:be}):f.jsx("path",{className:"radar-sector-fill",d:ye}),[.25,.5,.75,1].map(O=>E?f.jsx("circle",{className:"radar-ring",cx:re,cy:J,r:be*O},O):f.jsx("path",{className:"radar-ring",d:J0(re,J,be*O,K,H)},O)),!E&&f.jsx(_h,{cx:re,cy:J,radius:be,angle:K}),!E&&f.jsx(_h,{cx:re,cy:J,radius:be,angle:H}),f.jsx("line",{className:"radar-sweep",x1:re,y1:J,x2:Ge.x,y2:Ge.y}),ie.map(O=>{const Z=u?0:P-O.createdAt,se=Math.max(0,1-Z/h),xe=Math.max(0,Math.min(T,O.distance)),Ee=Ct(re,J,be*(xe/T),O.angle+W);return f.jsx("circle",{className:"radar-ping",cx:Ee.x,cy:Ee.y,r:Math.max(.025,Math.min(_e.width,_e.height)*.025),opacity:se},O.id)})]}),de&&Re&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:Re.min.x,top:Re.min.y,fontSize:Ne},children:ae}),f.jsx("span",{className:"radar-angle-label",style:{left:Re.max.x,top:Re.max.y,fontSize:Ne},children:Ve})]})]})}function _h({cx:o,cy:i,radius:c,angle:s}){const u=Ct(o,i,c,s);return f.jsx("line",{className:"radar-boundary",x1:o,y1:i,x2:u.x,y2:u.y})}function Ct(o,i,c,s){const u=(bt(s)-90)*Math.PI/180;return{x:o+Math.cos(u)*c,y:i+Math.sin(u)*c}}function W0(o,i,c,s,u){const d=Ct(o,i,c,s),h=Ct(o,i,c,u),_=zf(s,u)>180?1:0;return`M ${o} ${i} L ${d.x} ${d.y} A ${c} ${c} 0 ${_} 1 ${h.x} ${h.y} Z`}function J0(o,i,c,s,u){const d=Ct(o,i,c,s),h=Ct(o,i,c,u),_=zf(s,u)>180?1:0;return`M ${d.x} ${d.y} A ${c} ${c} 0 ${_} 1 ${h.x} ${h.y}`}function zf(o,i){const c=bt(o),s=bt(i),u=s>=c?s-c:360-c+s;return u===0?360:u}function eb(o,i){const c=[{x:0,y:0},Ct(0,0,1,o),Ct(0,0,1,i)];for(const x of[0,90,180,270])nb(x,o,i)&&c.push(Ct(0,0,1,x));const s=Math.min(...c.map(x=>x.x)),u=Math.max(...c.map(x=>x.x)),d=Math.min(...c.map(x=>x.y)),h=Math.max(...c.map(x=>x.y)),_=Math.max(.1,u-s),v=Math.max(.1,h-d),y=Math.max(_,v)*.24;return{x:s-y,y:d-y,width:_+y*2,height:v+y*2}}function nb(o,i,c){const s=bt(i),u=bt(o),d=zf(i,c),h=bt(u-s);return h>=0&&h<=d}function tb(o,i,c,s,u,d,h,_){const y=Ct(0,0,1.1,o),x=Ct(0,0,1.1,i);return{min:gh(y,c,s,u,d,_),max:gh(x,c,s,u,h,_)}}function rb(o,i,c,s){return{x:(o.x-i.x)/i.width*c,y:(o.y-i.y)/i.height*s}}function gh(o,i,c,s,u,d){const h=rb(o,i,c,s),_=Math.max(10,u.length*d*.62),v=d,y=7;return{x:bh(h.x,_/2+y,Math.max(_/2+y,c-_/2-y)),y:bh(h.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function bh(o,i,c){return Math.max(i,Math.min(c,o))}function yh(o){return`${Math.round(o)}`}function bt(o){return Number.isFinite(o)?(o%360+360)%360:0}function lb(o,i){const c=bt(o),s=bt(i),u=s>=c?s-c:360-c+s;return bt(c+u/2)}function ib(o,i){if(!i)return o;const c=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((s,u)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((d,h)=>f.jsx("span",{children:d},`${d}-${h}`))},`${s}-${u}`))})}function ab(o){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return o===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:o===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:o===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function sb({name:o,vertical:i,rotation:c,color:s,fontSize:u,endFontSize:d,centerInset:h,lowLabel:_,highLabel:v,showEnds:y}){const x=y?ab(c):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[f.jsx("div",{style:{position:"absolute",inset:0,...h,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:u,textAlign:"center",pointerEvents:"none"},children:ib(o,i)}),x&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...x.low,fontWeight:800,fontSize:d},children:_}),f.jsx("div",{style:{...x.high,fontWeight:800,fontSize:d},children:v})]})]})}function i_({name:o,rotation:i,width:c,height:s,value:u,showEnds:d=!1,fillColor:h="var(--red)",lowLabel:_="0",highLabel:v="100"}){const y=i===90||i===270,{fontSize:x,endFontSize:E,centerInset:T}=K0(o,c,s,y,d);let P,X;i===0?(P={left:0,top:0,bottom:0,width:`${u}%`},X={left:0,top:0}):i===180?(P={right:0,top:0,bottom:0,width:`${u}%`},X={right:0,top:0}):i===90?(P={left:0,right:0,bottom:0,height:`${u}%`},X={left:0,bottom:0}):(P={left:0,right:0,top:0,height:`${u}%`},X={left:0,top:0});const W=K=>f.jsx(sb,{name:o,vertical:y,rotation:i,color:K,fontSize:x,endFontSize:E,centerInset:T,lowLabel:_,highLabel:v,showEnds:d});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${s}px`},children:W("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:h,overflow:"hidden",...P},children:f.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${s}px`,...X},children:W("var(--white)")})})]})}function ob({control:o,disabled:i,latestValue:c,onSlider:s,width:u,height:d}){const h=L.useRef(null),_=o.sliderMin??0,v=o.sliderMax??100,[y,x]=L.useState(()=>c===void 0?vh(o.sliderRecenter??"none"):xh(c,_,v)),E=L.useRef(null),T=o.rotation;L.useEffect(()=>{c!==void 0&&(x(xh(c,_,v)),E.current=c)},[c,_,v]);function P(H){const q=h.current;if(!q)return 0;const le=q.getBoundingClientRect();let ie;return T===0?ie=(H.clientX-le.left)/le.width:T===180?ie=1-(H.clientX-le.left)/le.width:T===90?ie=1-(H.clientY-le.top)/le.height:ie=(H.clientY-le.top)/le.height,Math.max(0,Math.min(1,ie))}function X(H){i||W(P(H))}function W(H){const q=Math.round(H*100),le=Math.round(_+(v-_)*H);x(q),le!==E.current&&(E.current=le,s(o.name,le))}function K(){const H=o.sliderRecenter??"none";i||H==="none"||W(vh(H)/100)}return f.jsx("div",{ref:h,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),X(H))},onPointerMove:H=>{H.buttons!==0&&X(H)},onPointerUp:K,onPointerCancel:K,onLostPointerCapture:K,children:f.jsx(i_,{name:o.name,rotation:T,width:u,height:d,value:y,showEnds:!0,lowLabel:String(_),highLabel:String(v)})})}function vh(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function xh(o,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((o-i)/(c-i)*100)))}function wh(o,i,c){return Math.round(i+(c-i)*(o+1)/2)}function Sh(o,i){return o==="bottom"?i?1:-1:o==="top"?i?-1:1:0}function Eh(o){return{nx:Sh(o.joystickXRecenter,!1),ny:Sh(o.joystickYRecenter,!0)}}function a_(o,i){const c=Math.max(6,Math.min(o,i)*.16),s=Math.max(1,o/2-c-2),u=Math.max(1,i/2-c-2);return{knobRadius:c,reachX:s,reachY:u}}function s_({control:o,width:i,height:c,pos:s,dragging:u=!1}){const{knobRadius:d,reachX:h,reachY:_}=a_(i,c),v=Math.max(7,Math.min(14,d*.62));return f.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[f.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:h*2,height:_*2,transform:"translate(-50%, -50%)"}}),f.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:d*2,height:d*2,fontSize:v,transform:`translate(calc(-50% + ${s.nx*h}px), calc(-50% + ${s.ny*_}px))`,transition:u?"none":"transform 0.12s ease-out"},children:f.jsx("span",{children:o.name})})]})}function cb({control:o,disabled:i,onJoystick:c,width:s,height:u}){const d=L.useRef(null),[h,_]=L.useState(()=>Eh(o)),v=L.useRef(!1),y=L.useRef(null),x=o.joystickXMin??-100,E=o.joystickXMax??100,T=o.joystickYMin??-100,P=o.joystickYMax??100;function X(H,q){const le=wh(H,x,E),ie=wh(-q,T,P);(!y.current||y.current.x!==le||y.current.y!==ie)&&(y.current={x:le,y:ie},c(o.name,le,ie))}function W(H){const q=d.current;if(!q)return;const le=q.getBoundingClientRect(),{knobRadius:ie}=a_(s,u),de=Math.max(.01,(s/2-ie-2)/(s/2)),Ne=Math.max(.01,(u/2-ie-2)/(u/2));let re=(H.clientX-(le.left+le.width/2))/(le.width/2)/de,J=(H.clientY-(le.top+le.height/2))/(le.height/2)/Ne;const be=Math.hypot(re,J);be>1&&(re/=be,J/=be),_({nx:re,ny:J}),X(re,J)}function K(){const H=o.joystickXRecenter??"middle",q=o.joystickYRecenter??"middle";if(H==="none"&&q==="none")return;const le=Eh(o),ie={nx:H==="none"?h.nx:le.nx,ny:q==="none"?h.ny:le.ny};v.current=!1,_(ie),X(ie.nx,ie.ny)}return f.jsx("div",{ref:d,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),v.current=!0,W(H))},onPointerMove:H=>{i||!v.current||H.buttons===0||W(H)},onPointerUp:K,onPointerCancel:K,onLostPointerCapture:K,children:f.jsx(s_,{control:o,width:s,height:u,pos:h,dragging:v.current})})}const ub={up:"▲",down:"▼",left:"◀",right:"▶"};function o_(o){const i=[{x0:.31,x1:.69,y0:.03,y1:.41},{x0:.59,x1:.97,y0:.31,y1:.69},{x0:.31,x1:.69,y0:.59,y1:.97},{x0:.03,x1:.41,y0:.31,y1:.69}],c=["up","right","down","left"],s=o/90%4;return i.map((u,d)=>({direction:c[(d+s)%4],...u}))}function c_({control:o,width:i,height:c,active:s=null}){const u=o_(o.rotation),d=Math.max(10,Math.min(i,c)*.16);return f.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%",position:"relative"},children:u.map(h=>f.jsx("div",{className:`dpad-btn ${s===h.direction?"active":""}`,style:{position:"absolute",left:`${h.x0*100}%`,top:`${h.y0*100}%`,width:`${(h.x1-h.x0)*100}%`,height:`${(h.y1-h.y0)*100}%`,fontSize:d},children:ub[h.direction]},h.direction))})}function fb({control:o,disabled:i,onDpad:c,width:s,height:u}){const d=L.useRef(null),h=L.useRef(null),[_,v]=L.useState(null);function y(E){const T=d.current;if(!T)return null;const P=T.getBoundingClientRect(),X=(E.clientX-P.left)/P.width,W=(E.clientY-P.top)/P.height;for(const K of o_(o.rotation))if(X>=K.x0&&X<=K.x1&&W>=K.y0&&W<=K.y1)return K.direction;return null}function x(E){E!==h.current&&(h.current&&c(o.name,h.current,!1),h.current=E,v(E),E&&c(o.name,E,!0))}return f.jsx("div",{ref:d,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:E=>{i||(E.preventDefault(),E.currentTarget.setPointerCapture(E.pointerId),x(y(E)))},onPointerMove:E=>{i||E.buttons===0||x(y(E))},onPointerUp:()=>x(null),onPointerCancel:()=>x(null),onLostPointerCapture:()=>x(null),children:f.jsx(c_,{control:o,width:s,height:u,active:_})})}const db={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},mb=["button","slider","toggle","radar","text","joystick","dpad"];function pb({unplaced:o,onAdd:i,onClose:c}){const s=L.useMemo(()=>mb.filter(_=>o.some(v=>v.type===_)),[o]),[u,d]=L.useState(s[0]??"button"),h=o.filter(_=>_.type===u);return L.useEffect(()=>{s.length>0&&!s.includes(u)&&d(s[0])},[s,u]),f.jsxs(Sn,{title:"Tilføj kontrol",onClose:c,children:[s.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:s.map(_=>f.jsx("button",{type:"button",className:u===_?"active":"",onClick:()=>d(_),children:db[_]},_))}),f.jsx("div",{className:"add-lists",children:s.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):h.map(_=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(_.name),children:[f.jsx("span",{children:_.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(Fn,{name:"plus",size:22})})]},_.name))})]})}function u_(o){const[i,c]=L.useState({w:0,h:0}),s=L.useRef(null),u=L.useRef(null);return L.useLayoutEffect(()=>{var v;const d=o.current;if(s.current===d)return;if((v=u.current)==null||v.disconnect(),u.current=null,s.current=d,!d){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const h=()=>{const y={w:d.clientWidth,h:d.clientHeight};c(x=>x.w===y.w&&x.h===y.h?x:y)};h();const _=new ResizeObserver(h);_.observe(d),u.current=_}),L.useEffect(()=>()=>{var d;(d=u.current)==null||d.disconnect(),u.current=null,s.current=null},[]),i}function Vi(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const hb=4,_b=5;function gb(o){return o==="joystick"||o==="dpad"?{spanX:6,spanY:6}:{spanX:hb,spanY:_b}}function kh(o){if(!Vi(o))return null;const i=o.centerX2/2,c=o.centerY2/2;return{x0:i-o.spanX/2,x1:i+o.spanX/2,y0:c-o.spanY/2,y1:c+o.spanY/2}}function bb(o,i,c=.02){return o.x0<i.x1-c&&i.x0<o.x1-c&&o.y0<i.y1-c&&i.y0<o.y1-c}function Nh(o,i){const c=Wa(o,i);if(!c||o.spanX===null||o.spanY===null)return o;const s=Mo(c.cx,c.cy,o.spanX,o.spanY,i);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function Rh(o,i){return Math.max(1,Math.min(i.cols-1,o))}function Th(o,i){return Math.max(1,Math.min(i.rows-1,o))}function yb(){const o=ne(A=>A.layout),i=ne(A=>A.active),c=ne(A=>A.saveLayout),s=ne(A=>A.setEditMode),u=ne(A=>A.askConfirm),d=!!(i!=null&&i.canEdit),[h,_]=L.useState(()=>o.map(A=>({...A}))),[v,y]=L.useState(null),[x,E]=L.useState(!1),[T,P]=L.useState(null),[X,W]=L.useState(null),[K,H]=L.useState(!1),q=L.useRef(null),le=u_(q),ie=le.w>0&&le.h>0,de=Zh(le.w,le.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),Ne=L.useMemo(()=>ie?w0(de):[],[de,ie]),re=h.filter(Vi),J=h.filter(A=>!Vi(A)),be=L.useMemo(()=>{const A=new Set;for(let F=0;F<re.length;F+=1)for(let Q=F+1;Q<re.length;Q+=1){const $=kh(re[F]),Be=kh(re[Q]);$&&Be&&bb($,Be)&&(A.add(re[F].name),A.add(re[Q].name))}return A},[re]),_e=be.size>0,ye=h.find(A=>A.name===v)??null,ae=L.useMemo(()=>Mh(h)!==Mh(o),[h,o]),Ve=L.useMemo(()=>{if(!T||!X)return null;const A=h.find($=>$.name===T);if(!A||A.spanX===null||A.spanY===null)return null;const F=Mo(X.cx,X.cy,A.spanX,A.spanY,de),Q=Wa({...A,centerX2:F.centerX2,centerY2:F.centerY2},de);return Q?{name:A.name,rect:Q}:null},[h,T,X,de]);function Re(A,F){_(Q=>Q.map($=>$.name===A?F($):$))}function Ge(A,F){A.stopPropagation(),y(F.name);const Q=Wa(F,de);Q&&(P(F.name),W({cx:Q.cx,cy:Q.cy}),A.currentTarget.setPointerCapture(A.pointerId))}function O(A){if(!T)return;const F=q.current;if(!F)return;const Q=F.getBoundingClientRect(),$=F.clientWidth/Q.width,Be=F.clientHeight/Q.height;W({cx:Math.max(0,Math.min(F.clientWidth,(A.clientX-Q.left)*$)),cy:Math.max(0,Math.min(F.clientHeight,(A.clientY-Q.top)*Be))})}function Z(){if(T&&X){const A=h.find(F=>F.name===T);if(A&&A.spanX!==null&&A.spanY!==null){const F=Mo(X.cx,X.cy,A.spanX,A.spanY,de);Re(T,Q=>({...Q,centerX2:F.centerX2,centerY2:F.centerY2}))}}P(null),W(null)}function se(A){Re(A,F=>F.spanX===null||F.spanY===null?{...F,rotation:(F.rotation+270)%360}:Nh({...F,rotation:(F.rotation+270)%360,spanX:Rh(F.spanY,de),spanY:Th(F.spanX,de)},de))}function xe(A,F,Q){Re(A,$=>{if($.spanX===null||$.spanY===null)return $;const Be=F==="x"?Rh($.spanX+Q,de):$.spanX,je=F==="y"?Th($.spanY+Q,de):$.spanY;return Nh({...$,spanX:Be,spanY:je},de)})}function Ee(A){Re(A,F=>({...F,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function k(A){E(!1);const F=h.find(je=>je.name===A);if(!F)return;const{spanX:Q,spanY:$}=gb(F.type),Be=Mo(de.areaW/2,de.areaH/2,Q,$,de);Re(A,()=>({...F,spanX:Q,spanY:$,rotation:0,centerX2:Be.centerX2,centerY2:Be.centerY2})),y(A)}async function U(){_e||(H(!0),await c(h),H(!1))}function ee(){if(!ae){s(!1);return}u({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ye&&Vi(ye)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:A=>A.stopPropagation(),children:[f.jsx(Xa,{label:"⟲",title:"Roter",onClick:()=>se(ye.name)}),f.jsx(Xa,{label:"W−",title:"Gør smallere",onClick:()=>xe(ye.name,"x",-1),disabled:ye.spanX===null||ye.spanX<=1}),f.jsx(Xa,{label:"W+",title:"Gør bredere",onClick:()=>xe(ye.name,"x",1),disabled:ye.spanX===null||ye.spanX>=de.cols-1}),f.jsx(Xa,{label:"H−",title:"Gør lavere",onClick:()=>xe(ye.name,"y",-1),disabled:ye.spanY===null||ye.spanY<=1}),f.jsx(Xa,{label:"H+",title:"Gør højere",onClick:()=>xe(ye.name,"y",1),disabled:ye.spanY===null||ye.spanY>=de.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Ee(ye.name),"aria-label":"Slet",children:f.jsx(Fn,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:q,style:{touchAction:"none"},onPointerMove:O,onPointerUp:Z,onPointerDown:()=>y(null),children:ie&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:de.areaW,height:de.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Ne.map((A,F)=>f.jsx("circle",{cx:A.x,cy:A.y,r:2.5,fill:"rgba(198,80,78,0.45)"},F))}),Ve&&f.jsx("div",{className:"snap-preview",style:{left:Ve.rect.cx,top:Ve.rect.cy,width:Ve.rect.width,height:Ve.rect.height}}),re.map(A=>{const F=T===A.name&&X,Q=Wa(A,de);if(!Q)return null;const $=F?X.cx:Q.cx,Be=F?X.cy:Q.cy,je={left:$,top:Be,width:Q.width,height:Q.height,outline:v===A.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${be.has(A.name)?"colliding":""}`,style:je,onPointerDown:Yn=>Ge(Yn,A),children:A.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:Co(A.name,Q.width,Q.height)},children:A.name}):A.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:Co(A.name,Q.width,Q.height)},children:f.jsx("span",{children:A.name})}):A.type==="radar"?f.jsx(l_,{control:A,pings:[],width:Q.width,height:Q.height,preview:!0}):A.type==="text"?f.jsx(r_,{message:A.name,width:Q.width,height:Q.height}):A.type==="joystick"?f.jsx(s_,{control:A,width:Q.width,height:Q.height,pos:{nx:0,ny:0}}):A.type==="dpad"?f.jsx(c_,{control:A,width:Q.width,height:Q.height}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(i_,{name:A.name,rotation:A.rotation,width:Q.width,height:Q.height,value:50,showEnds:!0,lowLabel:String(A.sliderMin??0),highLabel:String(A.sliderMax??100),fillColor:be.has(A.name)?"var(--disabled)":"var(--red)"})})},A.name)}),d&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:A=>A.stopPropagation(),onClick:()=>E(!0),"aria-label":"Tilføj kontrol",children:f.jsx(Fn,{name:"plus",size:24})}),K&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:ee,disabled:K,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:U,disabled:_e||K,children:K?"Gemmer...":"Gem"})]}),x&&f.jsx(pb,{unplaced:J,onAdd:k,onClose:()=>E(!1)})]})}function Mh(o){return JSON.stringify(o.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function Xa({label:o,title:i,disabled:c,onClick:s}){return f.jsx("button",{type:"button","aria-label":i,title:i,disabled:c,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function vb(){const o=ne(q=>q.layout),i=ne(q=>q.editMode),c=ne(q=>q.active),s=ne(q=>q.sliderValues),u=ne(q=>q.toggleValues),d=ne(q=>q.radarPings),h=ne(q=>q.textValues),_=ne(q=>q.toggleSideMenu),v=ne(q=>q.sendButton),y=ne(q=>q.sendSlider),x=ne(q=>q.sendToggle),E=ne(q=>q.sendJoystick),T=ne(q=>q.sendDpad),P=L.useRef(null),X=u_(P),W=Zh(X.w,X.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),K=X.w>0&&X.h>0,H=o.filter(Vi);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(Lf,{title:"Kontrol Panel",onMenu:()=>_()}),i?f.jsx(yb,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:P,children:K?H.map(q=>{const le=Wa(q,W);return le?f.jsx(Q0,{control:q,rect:le,disabled:!1,latestValue:q.type==="slider"?s[q.name]:void 0,toggleValue:q.type==="toggle"?u[q.name]:void 0,radarPings:q.type==="radar"?d[q.name]:void 0,textValue:q.type==="text"?h[q.name]:void 0,onButton:v,onSlider:y,onToggle:x,onJoystick:E,onDpad:T},q.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const xb="",jh="",Ah="",Xl="";function Fa(o){return new Promise(i=>setTimeout(i,o))}class wb{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Ah),await Fa(80),await this.transport.write(Ah)}async friendlyRepl(){await this.transport.write(jh)}async softReset(){await this.transport.write(Xl)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await Fa(180)}),await Fa(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await Fa(80),await this.transport.write(`\r
`),await Fa(40),!(await this.collectUntil(async()=>{await this.transport.write(xb)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Xl)},u=>u.includes(`${Xl}${Xl}`)||u.includes(`${Xl}>`),c);return await this.friendlyRepl().catch(()=>{}),Sb(s)}collectUntil(i,c,s){return new Promise((u,d)=>{let h="",_=null;const v=setTimeout(()=>{_==null||_(),d(new Error("Timeout ved USB REPL kommando."))},s);_=this.transport.addDataListener(y=>{h+=y,c(h)&&(clearTimeout(v),_==null||_(),u(h))}),i().catch(y=>{clearTimeout(v),_==null||_(),d(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(jh)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function Sb(o){const i=o.indexOf("OK"),c=o.indexOf(Xl,i>=0?i:0),s=c>=0?o.indexOf(Xl,c+1):-1;if(i<0||c<0)return{output:o.trim(),error:"",raw:o};const u=o.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),d=s>=0?o.slice(c+1,s).trim():"";return{output:u,error:d,raw:o}}const Eb=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],kb=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],fl=kb.flatMap(({board:o,firmwareName:i})=>Eb.map(({version:c,date:s,stamp:u,tag:d})=>{const h=`${i}-${u}-${d}.uf2`;return{board:o,version:c,date:s,fileName:h,url:`https://micropython.org/resources/firmware/${h}`}})),pf=512,hf=`import builtins as _pkp_builtins
`;function Mr(o){return JSON.stringify(o)}function Nb(o){return`bytes.fromhex(${JSON.stringify([...o].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function Rb(o,i){return`${o==="/"?"":o.replace(/\/$/,"")}/${i}`}class Tb{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${Mr(i)}
for name in os.listdir(base):
    p = (${Mr(i)}.rstrip('/') + '/' + name) if ${Mr(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(c);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(u=>u.trim()).filter(Boolean).map(u=>{const[d,h,_]=u.split("	"),v=h==="dir"||h==="file"?h:"unknown",y=parseInt(_??"",10);return{name:d,path:Rb(i,d),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const c=`
import sys
${hf}with _pkp_builtins.open(${Mr(i)}, 'rb') as f:
    while True:
        b = f.read(${pf})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(c,1e4);if(s.error)throw new Error(s.error);const u=s.output.replace(/\s+/g,"");return new TextDecoder().decode(Mb(u))}async writeText(i,c,s){const u=new TextEncoder().encode(c);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${hf}_pkp_builtins.open(${Mr(i)}, 'wb').close()`),u.length===0){s==null||s(100,"Gemt på Pico");return}for(let d=0;d<u.length;d+=pf){const h=u.slice(d,d+pf),_=`
${hf}with _pkp_builtins.open(${Mr(i)}, 'ab') as f:
    f.write(${Nb(h)})
`,v=await this.repl.exec(_,1e4);if(v.error)throw new Error(v.error);const y=Math.min(d+h.length,u.length);s==null||s(10+Math.round(y/u.length*85),`Gemmer ${y}/${u.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(i,c,s,u={}){const d=`${i}.tmp`;if(await this.writeText(d,c,(v,y)=>s==null?void 0:s(Math.min(70,v*.7),y)),s==null||s(78,"Verificerer fil..."),await this.readText(d)!==c)throw await this.delete(d).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);s==null||s(88,"Udskifter fil...");let _=!!u.createBackup;if(_){const v=await this.readText(i).catch(()=>null);_=v!==null&&v!==c}if(_){const v=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,v).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(d,i),s==null||s(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${Mr(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),s=new Set(c.map(E=>E.path.toLowerCase())),u=i.replace(/\\/g,"/"),d=u.lastIndexOf("/"),h=d>=0?u.slice(0,d+1):"/",_=d>=0?u.slice(d+1):u.replace(/^\/+/,""),v=_.lastIndexOf("."),y=v>0?_.slice(0,v):_,x=v>0?_.slice(v):"";for(let E=1;E<1e3;E+=1){const T=`${h}${y}_backup${E}${x}`;if(!s.has(T.toLowerCase()))return T}return`${h}${y}_backup${Date.now()}${x}`}async rename(i,c){const s=await this.repl.exec(`
import os
os.rename(${Mr(i)}, ${Mr(c)})
`);if(s.error)throw new Error(s.error)}}function Mb(o){const i=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(o.slice(c*2,c*2+2),16);return i}const jb=`import ubluetooth\r
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
`,Ab=`from machine import Pin, time_pulse_us\r
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
        return cms`,Db=`import array, time\r
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
`,Ob=`from machine import Pin
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
`,Cb=`from machine import Pin
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
`,Bb=`from machine import Pin
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
`,Lb=`# PicoFly.py\r
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
`,zb=`import machine\r
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
        self.initPCA()`,Ub=`from machine import Pin\r
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
`,Hb=`from machine import Pin\r
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
`,Vb=`from machine import Pin, PWM, ADC\r
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
`,Gb=`from machine import Pin\r
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
`,Li=[{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",content:Bb},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:Hb},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:Gb},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",content:Cb},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",content:Ob},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:Ub},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:Vb},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:jb},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:zb},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:Lb},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:Ab},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:Db}],Yb=11914;function Ib(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function qb(){return Ib()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class Pb{constructor(i={}){ce(this,"port",null);ce(this,"reader",null);ce(this,"writer",null);ce(this,"readLoopDone",null);ce(this,"readLoopActive",!1);ce(this,"disconnecting",!1);ce(this,"buffer","");ce(this,"events");ce(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:Yb}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var v,y;const i=this.connected||!!this.port||!!this.reader,c=this.port,s=this.reader,u=this.writer,d=this.readLoopDone,h=s==null?void 0:s.closed.catch(()=>{}),_=u==null?void 0:u.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}d&&await d.catch(()=>{}),await h;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(u==null?void 0:u.close()),await _}catch{try{await(u==null?void 0:u.abort("disconnect"))}catch{}}try{u==null||u.releaseLock()}catch{}this.writer===u&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===d&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var s,u,d;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((s=i.writable)==null?void 0:s.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(d=(u=this.events).onLog)==null||d.call(u,"success",`USB-forbindelse oprettet (${$b(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var u,d,h;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((u=i.readable)==null?void 0:u.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:_,done:v}=await s.read();if(v)break;_&&this.consumeText(c.decode(_,{stream:!0}))}}catch(_){this.readLoopActive&&((h=(d=this.events).onLog)==null||h.call(d,"error",_ instanceof Error?_.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var d,h;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,u=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await u}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((h=(d=this.events).onDisconnect)==null||h.call(d))}consumeText(i){var c,s,u,d;(s=(c=this.events).onData)==null||s.call(c,i);for(const h of this.dataListeners)h(i);for(this.buffer+=i;this.buffer.includes(`
`);){const h=this.buffer.indexOf(`
`),_=this.buffer.slice(0,h).replace(/\r$/,"");this.buffer=this.buffer.slice(h+1),(d=(u=this.events).onLine)==null||d.call(u,_)}}}function $b(o){const i=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const f_=15e3,Dh=64*1024,Oh=1e5,d_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),Xb=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class Fb{constructor(){ce(this,"worker",null);ce(this,"pending",null);ce(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,u=c.timeoutMs??f_,d=this.ensureWorker();return new Promise(h=>{const _=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},u);this.pending={id:s,timer:_,onOutput:c.onOutput,resolve:h},d.postMessage({type:"run",id:s,code:Qb(i),runtimeUrl:d_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var s;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(s=c.onOutput)==null||s.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class Kb{constructor(){ce(this,"worker",null);ce(this,"pending",null);ce(this,"nextId",0)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof c=="number"?c:c.timeoutMs??f_,u=typeof c=="number"?void 0:c.onOutput,d=typeof c=="number"?void 0:c.signal,h=Sf(i,{allowInput:!0});if(h.some(y=>y.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1});const _=++this.nextId,v=this.ensureWorker();return new Promise(y=>{const x=X=>this.finish(X),E=()=>{v.postMessage({type:"stop",id:_}),x({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1})},T=window.setTimeout(()=>{x({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:h,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:_,timer:T,issues:h,onOutput:u,signal:d,abort:E,resolve:y},d!=null&&d.aborted){E();return}d==null||d.addEventListener("abort",E,{once:!0});const P={type:"run",id:_,code:i,runtimeUrl:d_,interactive:!0};v.postMessage(P)})}sendInput(i){const c=this.pending;!c||!this.worker||this.worker.postMessage({type:"stdin",id:c.id,text:i})}stop(){const i=this.pending;!i||!this.worker||(this.worker.postMessage({type:"stop",id:i.id}),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}),this.restartWorker())}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const s=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var s;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(s=c.onOutput)==null||s.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var s;const c=this.pending;c&&(window.clearTimeout(c.timer),(s=c.signal)==null||s.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}function Qb(o){const i=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Sf(o,i={}){const c=[],s=new Blob([o]).size;s>Dh&&c.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${Dh} bytes.`});const u=o.split(/\r?\n/);for(let d=0;d<u.length;d+=1){const h=d+1,_=Bo(u[d]).trim();if(!_)continue;const v=Wb(_);v&&Xb.has(v)&&c.push({level:"error",line:h,text:`${v} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&Zb(u[d])&&c.push({level:"error",line:h,text:"input() virker kun, når koden kører på Pico via USB. Forbind Pico med USB, gem filen på Picoen, og kør koden derfra."});const y=_.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&Jb(y)>Oh&&c.push({level:"error",line:h,text:`range(...) er for stor til offline kørsel. Brug højst ${Oh} gentagelser.`})}for(const d of ey(u))c.push({level:"warning",text:`Funktionen ${d} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function Bo(o){let i=null;for(let c=0;c<o.length;c+=1){const s=o[c];if((s==='"'||s==="'")&&o[c-1]!=="\\"&&(i=i===s?null:i??s),s==="#"&&!i)return o.slice(0,c)}return o}function Zb(o){const i=Bo(o);let c=null;for(let s=0;s<i.length;s+=1){const u=i[s];if((u==='"'||u==="'")&&i[s-1]!=="\\"){c=c===u?null:c??u;continue}if(!c&&!(!Ch(i[s-1])||i.slice(s,s+5)!=="input")&&Ch(i[s+5])&&i.slice(s+5).trimStart().startsWith("("))return!0}return!1}function Ch(o){return!o||!/[A-Za-z0-9_]/.test(o)}function Wb(o){const i=o.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Bh(o){const i=o.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function Jb(o){const i=Number(o[1]),c=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const h=(c===void 0?i:c)-(c===void 0?0:i);return h>0&&s<0||h<0&&s>0?0:Math.ceil(Math.abs(h/s))}function ey(o){const i=new Set;for(let c=0;c<o.length;c+=1){const s=Bo(o[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const u=s[1],d=Bh(o[c]);for(let h=c+1;h<o.length;h+=1){if(!o[h].trim())continue;if(Bh(o[h])<=d)break;if(new RegExp(`\\b${u}\\s*\\(`).test(Bo(o[h]))){i.add(u);break}}}return[...i]}const ny=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function ty(o,i){var x;const c=o.trim(),s=i.split(/\r?\n/),u=ry(c),d=u?s[u-1]??"":"",h=ly(s,u),_=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(_))return{simple:"Programmet blev stoppet.",technical:c,line:u};if(/MemoryError/.test(_))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/RecursionError/.test(_))return{simple:`En funktion kalder sig selv for mange gange${u?` omkring linje ${u}`:""}.`,technical:c,line:u};const v=_.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${u?` på linje ${u}`:""}.`,technical:c,line:u};const y=_.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:oy(d,y[1])?`Teksten ${y[1]} mangler måske citationstegn${u?` på linje ${u}`:""}.`:`Python kender ikke navnet ${y[1]}${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ZeroDivisionError/.test(_))return{simple:`Kan ikke dividere med 0${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError:\s+unexpected indent/.test(_))return{simple:`Der er for meget indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError/.test(_))return{simple:`Mangler indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ImportError|ModuleNotFoundError/.test(_)){const E=(x=_.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${E?` ${E}`:""}.`,technical:c,line:u}}if(/OSError/.test(_))return/ENOENT|No such file|Errno\s+2/.test(_)?{simple:`Python kan ikke finde filen${u?` på linje ${u}`:""}.`,technical:c,line:u}:/EACCES|permission|denied/i.test(_)?{simple:`Python har ikke adgang til filen eller enheden${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Der opstod en fejl med en fil eller en enhed${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/SyntaxError/.test(_)){if(/invalid syntax/.test(_)&&h.text.trim().endsWith(","))return{simple:`Linje ${h.line??u} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:h.line??u};const E=Ef(d,u)??Ef(h.text,h.line)??iy(s,u);return E?{simple:`Mangler måske : efter linje ${E.line}.`,technical:c,line:E.line}:u&&h.text.trim().endsWith(":")&&d.trim()&&!/^\s+/.test(d)?{simple:`Mangler måske indrykning på linje ${u}.`,technical:c,line:u}:sy(d)?{simple:`Tekst mangler måske citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:ay(d)?{simple:`Tekst mangler måske et afsluttende citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:cy(d)?{simple:`Mangler måske en afsluttende parentes${u?` på linje ${u}`:""}.`,technical:c,line:u}:uy(d)?{simple:`Der er måske en parentes for meget${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en syntaksfejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}return/TypeError/.test(_)?/takes .* positional arguments? but .* given/.test(_)||/function takes/.test(_)?{simple:`En funktion får for mange eller for få værdier${u?` på linje ${u}`:""}.`,technical:c,line:u}:/unsupported operand type/.test(_)?{simple:`To værdier kan ikke bruges sammen på den måde${u?` på linje ${u}`:""}.`,technical:c,line:u}:/not callable/.test(_)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`En værdi har den forkerte type${u?` på linje ${u}`:""}.`,technical:c,line:u}:/IndexError/.test(_)?{simple:`Listen har ikke et element på den plads${u?` på linje ${u}`:""}.`,technical:c,line:u}:/KeyError/.test(_)?{simple:`Ordbogen mangler den nøgle${u?` på linje ${u}`:""}.`,technical:c,line:u}:/AttributeError/.test(_)?{simple:`Den ting har ikke den kommando${u?` på linje ${u}`:""}.`,technical:c,line:u}:/ValueError/.test(_)?/invalid literal for int/.test(_)?{simple:`Teksten kan ikke laves om til et heltal${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Værdien passer ikke her${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en fejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}function ry(o){var u;const c=(u=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:u[1];if(!c)return;const s=parseInt(c,10);return Number.isFinite(s)&&s>0?s:void 0}function ly(o,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const s=o[c]??"";if(s.trim())return{line:c+1,text:s}}return{text:""}}function Ef(o,i){if(!i)return null;const c=o.trim();return!ny.test(c)||c.endsWith(":")?null:{line:i}}function iy(o,i){const c=i?Math.min(o.length,i):o.length,s=Math.max(0,c-4);for(let u=c-1;u>=s;u-=1){const d=Ef(o[u]??"",u+1);if(d)return d}return null}function ay(o){const i=(o.match(/'/g)??[]).length,c=(o.match(/"/g)??[]).length;return i%2===1||c%2===1}function sy(o){var s,u;const c=(u=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:u.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function oy(o,i){const c=o.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function cy(o){return m_(o)>0}function uy(o){return m_(o)<0}function m_(o){let i=0,c=null;for(let s=0;s<o.length;s+=1){const u=o[s];if((u==='"'||u==="'")&&o[s-1]!=="\\"){c=c===u?null:c??u;continue}c||((u==="("||u==="["||u==="{")&&(i+=1),(u===")"||u==="]"||u==="}")&&(i-=1))}return i}const kf="/min_kode.py",p_=`print('Hej fra Pico Kontrol Panel')
`,Ka="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function gt(o,i){return`${o}:${i}`}function fy(o){return new Promise(i=>window.setTimeout(i,o))}function dy(){const o=ne(m=>m.toggleSideMenu),i=ne(m=>m.askConfirm),c=ne(m=>m.picoIdeOrigin),s=ne(m=>m.active),u=ne(m=>m.isBleConnected),d=ne(m=>m.bleListFiles),h=ne(m=>m.bleReadText),_=ne(m=>m.bleWriteText),v=ne(m=>m.bleDeleteFile),y=ne(m=>m.bleRestartAndReconnect),[x,E]=L.useState(!1),[T,P]=L.useState(!1),[X,W]=L.useState([]),[K,H]=L.useState(!1),[q,le]=L.useState([]),[ie,de]=L.useState(null),[Ne,re]=L.useState(()=>gf(of())),[J,be]=L.useState(kf),[_e,ye]=L.useState("local"),[ae,Ve]=L.useState(()=>{var m;return((m=gf(of()).find(b=>b.path===kf))==null?void 0:m.content)??p_}),[Re,Ge]=L.useState([]),[O,Z]=L.useState(!1),[se,xe]=L.useState(""),[Ee,k]=L.useState(""),[U,ee]=L.useState(null),[A,F]=L.useState(!1),[Q,$]=L.useState(null),[Be,je]=L.useState(!1),[Yn,Pt]=L.useState({}),[ge,bn]=L.useState(!1),[En,Oe]=L.useState(0),[kn,Lt]=L.useState(()=>{var m,b;return((m=fl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:m.board)??((b=fl[0])==null?void 0:b.board)??""}),[Ln,jr]=L.useState(()=>{var m,b;return((m=fl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:m.version)??((b=fl[0])==null?void 0:b.version)??""}),[Ar,yt]=L.useState(!1),[Kl,Dr]=L.useState({top:0,left:0}),[yn,dl]=L.useState(!1),[ml,qi]=L.useState(!1),[pl,Kn]=L.useState(!0),[rt,$t]=L.useState(""),[Ql,hl]=L.useState([]),[vn,lt]=L.useState(null),[Rn,Or]=L.useState(!1),[Cr,rr]=L.useState({}),[Xt,In]=L.useState({}),[Ke,Tn]=L.useState(null),[mn,zn]=L.useState(null),[Vo,Pi]=L.useState(""),[Ft,_l]=L.useState(()=>ih().clearTerminalOnRun),[lr,rs]=L.useState(()=>ih().simplifiedErrors),[Zl,ls]=L.useState(()=>typeof navigator<"u"?Hh(navigator):!1),Br=L.useRef(null),vt=L.useRef(null),on=L.useRef(null),$i=L.useRef(null),it=L.useRef(null),cn=L.useRef(null),un=L.useRef(null),Mn=L.useRef(!1),zt=L.useRef(!1),gl=L.useRef(!1),Ut=L.useRef(""),ir=L.useRef(null),Ht=L.useRef(null),Vt=L.useRef(null),Kt=L.useRef(null),qn=L.useRef(null),Gt=L.useRef(null),Qn=L.useRef(0),Ze=L.useRef(null),ar=L.useRef(null),Xi=L.useRef(null),at=L.useRef(null),st=qb(),pe=c==="control"&&!!s&&u(),Wl=pe?(s==null?void 0:s.deviceID)??"ble":null,is=Math.max(1,ae.split(`
`).length),Go=new Blob([ae]).size,Jl=_e==="pico"?"Picoen":"browseren",ei=L.useMemo(()=>[...new Set(fl.map(m=>m.board))],[]),Pn=L.useMemo(()=>fl.filter(m=>m.board===kn),[kn]),xn=fl.find(m=>m.board===kn&&m.version===Ln)??Pn[0]??fl[0],ot=_e==="pico",Fi=ot?yn:ml,Un=ot&&yn&&x&&!pe||!ot&&ml&&!!Vt.current,as=Rn||Fi&&!Un,ni=Un?"stdin":">>>",ss=Un?ot?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":ot?"Pico MicroPython":"Browser-MicroPython",Hn=L.useMemo(()=>{const m=new Pb({onData:b=>{zt.current||!Mn.current||(Ut.current=(Ut.current+b).slice(-240),/(^|\r?\n)>>> ?$/.test(Ut.current)&&Qi())},onLine:b=>{if(zt.current)return;const w=b.trimEnd();if(gl.current&&w.trim()){Y("info",w);return}if(Mn.current&&os(w)){Qi();return}Mn.current&&w.trim()&&!Ki(w)&&!w.includes("raw REPL")&&Y("info",w)},onLog:Y,onDisconnect:()=>{E(!1),dl(!1),Or(!1),Mn.current=!1,gl.current=!1,xt(),Ut.current="",zr(),Y("warning","USB-forbindelse lukket.")}});return Br.current=m,m},[]);function Y(m,b){W(w=>[...w.slice(-140),{level:m,text:b}])}function os(m){return m.trim()===">>>"}function Ki(m){return m.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function xt(){ir.current!==null&&(window.clearTimeout(ir.current),ir.current=null)}function Qi(){!Mn.current||ir.current!==null||(ir.current=window.setTimeout(()=>{ir.current=null,Mn.current&&(dl(!1),Mn.current=!1,Ut.current="",Y("success","Pico-koden er færdig."))},0))}function bl(m,b=ae,w="error"){const B=ty(m,b);W(D=>[...D.slice(-140),{level:w,text:B.simple,technical:B.technical}])}function nn(m,b,w=_e){be(m),ye(w),Ve(b),In(B=>({...B,[gt(w,m)]:b}))}function cs(m,b="pico"){be(m),ye(b),Ve(""),Tn(null),Dr({top:0,left:0})}function Lr(m,b=(w=>(w=it.current)==null?void 0:w.selectionStart)()??m.length){Ve(m),In(B=>({...B,[gt(_e,J)]:m})),Pi(""),Hr(m,b)}function yl(m,b=_e){In(w=>{const B=gt(b,m);if(!(B in w))return w;const D={...w};return delete D[B],D})}function Zi(){return Cr[J]===ae}function Zn(m,b){rr(w=>({...w,[m]:b}))}function us(m,b){Zn(m,b),In(w=>({...w,[gt("pico",m)]:b})),_e==="pico"&&J===m&&Ve(b)}function zr(){le([]),Ge([]),rr({}),In({}),Tn(null),be(m=>{const b=gf(of());if(b.find(D=>D.path===m))return m;const B=b[0];return ye("local"),Ve(B.content),B.path})}function tn(m){sr(),$({value:100,label:m}),at.current=window.setTimeout(()=>{at.current=null,$(null)},900)}function sr(){at.current!==null&&(window.clearTimeout(at.current),at.current=null)}function Wi(){return Q?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Q.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:Q.label}),f.jsxs("strong",{children:[Math.round(Q.value),"%"]}),Q.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Ur,"aria-label":"Stop handling",title:"Stop",children:f.jsx(Fn,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Q.value))}%`}})})]}):null}function Ur(){qn.current&&wt("Stopper læsning...",!0,!0)}function wt(m="Stopper læsning...",b=!1,w=!1){var B;sr(),ar.current=null,Qn.current+=1,(B=qn.current)==null||B.abort(),qn.current=null,Ze.current=null,de(null),H(!1),$(b?{value:(Q==null?void 0:Q.value)??0,label:m,cancellable:!1}:null),w&&Y("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function fs(m){var b;if(!(Ze.current===m||ar.current===m)){if(ar.current=m,Gt.current){Qn.current+=1,(b=qn.current)==null||b.abort(),qn.current=null,Ze.current=null,cs(m),de(m),H(!0),sr(),$({value:2,label:`Skifter til ${Le(m)}...`,cancellable:!0});return}ti()}}function ti(){if(Gt.current)return;const m=ar.current;if(!m)return;ar.current=null;const b=Qn.current+1;Qn.current=b;const w=new AbortController;qn.current=w,Ze.current=m,cs(m),de(m),H(!0),sr(),$({value:12,label:`Indlæser ${Le(m)}...`,cancellable:!0});const B=(async()=>{try{const D=await h(m,(ue,we)=>{Qn.current===b&&$({value:ue,label:we,cancellable:!0})},w.signal);if(w.signal.aborted||Qn.current!==b)return;nn(m,D,"pico"),Zn(m,D),tn("Fil indlæst")}catch(D){if(Qn.current!==b)return;hy(D)||w.signal.aborted?Y("info",`Stoppede læsning af ${Le(m)}.`):($(null),Y("error",D instanceof Error?D.message:"BLE læsning fejlede."))}})();Gt.current=B,B.finally(()=>{if(Gt.current!==B)return;Gt.current=null,qn.current===w&&(qn.current=null),Ze.current===m&&(Ze.current=null),!!ar.current||(de(null),H(!1),w.signal.aborted&&$(null)),ti()})}async function vl(m){const b=zt.current;zt.current=!0;try{return await m()}finally{zt.current=b}}L.useEffect(()=>{if(!pl)return;const m=cn.current;m&&(m.scrollTop=m.scrollHeight)},[X,pl]),L.useEffect(()=>{o0({clearTerminalOnRun:Ft,simplifiedErrors:lr})},[Ft,lr]),L.useEffect(()=>{var m;Pn.some(b=>b.version===Ln)||jr(((m=Pn[0])==null?void 0:m.version)??"")},[Pn,Ln]),L.useEffect(()=>{ls(Hh(navigator))},[]),L.useEffect(()=>{const m=()=>{const b=Br.current;vt.current=null,on.current=null,Br.current=null,b==null||b.disconnect().catch(()=>{})};return window.addEventListener("pagehide",m),()=>{var b,w;sr(),(b=Ht.current)==null||b.dispose(),Ht.current=null,(w=Vt.current)==null||w.dispose(),Vt.current=null,window.removeEventListener("pagehide",m),m()}},[]),L.useEffect(()=>{const m=b=>{!(b.ctrlKey||b.metaKey)||b.key.toLowerCase()!=="s"||(b.preventDefault(),!K&&J.trim()&&!Zl&&!A&&!U&&!O&&ds())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[_e,pe,K,x,ae,J,Zl,A,U,O]);function Qt(m,b,w){re(B=>{const D=Ny(B,m,b,w);return cf(D),D})}const St=jy(q,Ne,Xt,x||pe);L.useEffect(()=>{pe&&rn()},[pe]),L.useEffect(()=>{const m=Xi.current;m&&m!==Wl&&zr(),Xi.current=Wl},[Wl]);async function Ji(){if(st.supported){P(!0);try{await Hn.requestAndConnect();const m=new wb(Hn);vt.current=m,on.current=new Tb(m),E(!0),Oe(0),await m.interrupt(),await xl(m),Y("success","Sendte stop-signal til Pico-terminalen."),await ea(on.current),await na(on.current)}catch(m){Y("error",m instanceof Error?m.message:"USB-forbindelse mislykkedes.");try{await Hn.disconnect()}catch(b){Y("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.");return}Oe(b=>{const w=b+1;return w>=3&&(Y("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),bn(!0)),w}),E(!1)}finally{P(!1)}}}async function xl(m){const b=await m.exec(`import sys
print(sys.implementation.name)
`,4e3);if(b.error||!b.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Zt(){var m;try{await((m=Br.current)==null?void 0:m.disconnect()),vt.current=null,on.current=null,E(!1),zr()}catch(b){Y("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.")}}async function ct(m){const b=on.current;if(b){H(!0),zt.current=!0;try{await m(b)}catch(w){$(null),Y("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{zt.current=!1,H(!1)}}}async function rn(m=!0){if(pe){H(!0);try{const b=await d();le(b),m&&Y("success",`Indlæste ${b.length} filer fra Pico via Bluetooth.`)}catch(b){Y("error",b instanceof Error?b.message:"BLE filhandling fejlede.")}finally{H(!1)}return}await ea(on.current,m)}async function ea(m,b=!0){if(m){H(!0);try{const w=await vl(()=>m.list("/"));le(w),b&&Y("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){Y("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{H(!1)}}}async function Wt(){if(pe){H(!0),$({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const m=await wl((b,w)=>$({value:b,label:w}));Ge(m),tn("Fil-tjek færdigt")}catch(m){$(null),Y("error",m instanceof Error?m.message:"BLE runtime check fejlede.")}finally{H(!1)}return}await na(on.current)}async function wl(m){const b=[],w=Li.filter(D=>D.kind==="library"&&!$l(D));let B=0;for(const D of Li){if(D.kind==="program"){b.push({...D,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if($l(D)){b.push({...D,status:"unknown",detail:"Opdateres via USB"});continue}try{const ue=B/Math.max(1,w.length)*100,we=100/Math.max(1,w.length);Y("info",`Tjekker ${D.label} på Pico via Bluetooth...`),m==null||m(Math.min(95,ue),`Tjekker ${D.label} på Pico...`);const We=await h(D.path,($n,ur)=>{m==null||m(Math.min(95,ue+$n/100*we),`${D.label}: ${ur}`)}),Ye=Bi(We)===Bi(D.content);b.push({...D,status:Ye?"ok":"outdated",detail:Ye?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{b.push({...D,status:"missing",detail:"Mangler på Pico"})}finally{B+=1}}return m==null||m(100,"Fil-tjek færdigt"),b}async function na(m){if(m){H(!0);try{const b=await vl(()=>jn(m)),w=b;Ge(w)}catch(b){Y("error",b instanceof Error?b.message:"Runtime check fejlede.")}finally{H(!1)}}}async function jn(m){if(!m)return[];const b=[];for(const w of Li){if(w.kind==="program"){b.push({...w,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const B=await m.readText(w.path),D=Bi(B)===Bi(w.content);b.push({...w,status:D?"ok":"outdated",detail:D?"Matcher appens version":"Matcher ikke appens version"})}catch{b.push({...w,status:"missing",detail:"Mangler på Pico"})}}return b}async function or(m=J){if(pe){fs(m);return}de(m),await ct(async b=>{$({value:12,label:`Indlæser ${Le(m)}...`});const w=await ri(b,m);nn(m,w,"pico"),Zn(m,w),tn("Fil indlæst")}),de(null)}async function ri(m,b){var w;try{return await m.readText(b)}catch(B){await((w=vt.current)==null?void 0:w.stop().catch(()=>{})),await fy(120);try{return await m.readText(b)}catch{throw B}}}function Sl(){F(!0)}async function ds(){if(_e==="pico"){if(!x&&!pe){Y("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await El();return}li()}function li(){if(zi(J)){Y("error",Ka);return}Qt(J,ae,!1),ye("local"),In(m=>({...m,[gt("local",J)]:ae})),F(!1),Y("success",`Gemte ${Le(J)} lokalt.`)}async function El(){if(F(!1),zi(J))return $(null),Y("error",Ka),!1;if($({value:0,label:"Starter gemning..."}),pe){H(!0);try{return await _(J,ae,(b,w)=>$({value:b,label:w})),Zn(J,ae),ye("pico"),In(b=>({...b,[gt("pico",J)]:ae})),tn("Gemt på Pico via Bluetooth"),Y("success",`Gemte ${Le(J)} på Pico via Bluetooth.`),Ro(J)&&(yt(!0),Y("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await rn(!1),!0}catch(b){return $(null),Y("error",b instanceof Error?b.message:"BLE gem fejlede."),!1}finally{H(!1)}}if(!on.current)return $(null),!1;let m=!1;return await ct(async b=>{Rl(J,"pico")?await b.replaceTextSafely(J,ae,(w,B)=>$({value:w,label:B})):await b.writeText(J,ae,(w,B)=>$({value:w,label:B})),Zn(J,ae),ye("pico"),In(w=>({...w,[gt("pico",J)]:ae})),tn("Gemt på Pico via USB"),Y("success",`Gemte ${J}.`),await rn(),await Wt(),m=!0}),m}function kl(){Nl(Le(J),ae),F(!1),Y("success",`Downloadede ${Le(J)}.`)}function Nl(m,b){const w=new Blob([b],{type:"text/plain;charset=utf-8"}),B=URL.createObjectURL(w),D=document.createElement("a");D.href=B,D.download=m,D.click(),URL.revokeObjectURL(B)}async function ta(m){H(!0),yt(!1),$({value:10,label:"Genstarter Pico..."});try{await y(m)?(tn("Pico genforbundet"),Y("success",m==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),m==="ide"&&await rn()):($(null),Y("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(b){$(null),Y("error",b instanceof Error?b.message:"Genstart/genforbindelse mislykkedes.")}finally{H(!1)}}function ms(m){var ue;const b=m??{path:J,source:_e},w=b.source==="pico"?"Pico":"browser",B=b.source==="pico"?(m==null?void 0:m.versions.length)??((ue=Tf(q).get(b.path))==null?void 0:ue.length)??0:0,D=B>0?` Det sletter også filens versionshistorik (${B} gemte versioner).`:"";ee(null),i({title:"Slet fil",message:`Vil du slette ${Le(b.path)} fra ${w}?${D}`,confirmLabel:"Slet",onConfirm:()=>{ra(b)}})}function Yo(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, sÃ¥ Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Io()}})}async function Io(){if(!on.current){Y("error","Forbind Picoen med USB fÃ¸rst.");return}await ct(async m=>{await m.delete("/DeviceSettings.txt").catch(b=>{const w=b instanceof Error?b.message:"";if(!/ENOENT|No such file|not found/i.test(w))throw b}),rr(b=>{const w={...b};return delete w["/DeviceSettings.txt"],w}),yl("/DeviceSettings.txt","pico"),Y("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var Ã¥bent."),await rn()})}async function ra(m){const b=m.path,w=m.source,B=b===J&&w===_e;if(w==="local"){const we=Ne.filter(We=>We.path!==b);re(we),cf(we),B&&nn(b,"","local"),yl(b,"local"),Y("warning",`Slettede ${Le(b)} fra browseren.`);return}const D=Tf(q).get(b)??[],ue=[b,...D.map(we=>we.path)];if(pe){H(!0);try{for(const We of ue)await v(We);rr(We=>{const Ye={...We};for(const $n of ue)delete Ye[$n];return Ye}),B&&nn(b,"","pico");for(const We of ue)yl(We,"pico");const we=D.length>0?` og ${D.length} gemte versioner`:"";Y("warning",`Slettede ${Le(b)}${we} på Pico via Bluetooth.`),await rn()}catch(we){Y("error",we instanceof Error?we.message:"BLE sletning fejlede.")}finally{H(!1)}return}if(!on.current){Y("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await ct(async we=>{for(const Ye of ue)await we.delete(Ye);rr(Ye=>{const $n={...Ye};for(const ur of ue)delete $n[ur];return $n});const We=D.length>0?` og ${D.length} gemte versioner`:"";Y("warning",`Slettede ${b}${We}.`),B&&nn(b,"","pico");for(const Ye of ue)yl(Ye,"pico");await rn(),await Wt()})}async function qo(m){if(!m)return;const b=my(m.name);if(!b){Y("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(zi(b)){Y("error",Ka);return}if(m.size>128*1024){Y("error","Filen er for stor til Pico-værkstedet.");return}const w=await m.text();if(_e==="local"){Qt(b,w,!0),nn(b,w,"local"),Y("success",`Importerede ${Le(b)} i browseren.`);return}if(!x&&!pe){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(pe&&$l({path:b})){Y("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if($({value:0,label:"Uploader fil til Pico..."}),pe){H(!0);try{await _(b,w,(D,ue)=>$({value:D,label:ue})),Zn(b,w),nn(b,w,"pico"),tn("Fil uploadet til Pico"),Y("success",`Importerede ${Le(b)} på Pico via Bluetooth.`),await rn()}catch(D){$(null),Y("error",D instanceof Error?D.message:"Kunne ikke importere filen til Pico.")}finally{H(!1)}return}if(!on.current){$(null),Y("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await ct(async D=>{Rl(b,"pico")?await D.replaceTextSafely(b,w,(ue,we)=>$({value:ue,label:we})):await D.writeText(b,w,(ue,we)=>$({value:ue,label:we})),Zn(b,w),nn(b,w,"pico"),tn("Fil uploadet til Pico"),Y("success",`Importerede ${Le(b)} på Pico.`),await rn(),await Wt()})}async function Po(){xe(""),Z(!0)}function $o(){const m=Lh(se);if(!m)return;if(zi(m)){Y("error",Ka);return}const b=_e;if(Rl(m,b)){Y("error",`Der findes allerede en fil med navnet ${Le(m)} i ${b==="pico"?"Pico":"browseren"}.`);return}if(b==="local"){Qt(m,"",!1),nn(m,"","local"),Z(!1),Y("success",`Oprettede ${Le(m)} i browseren.`);return}Xo(m)}async function Xo(m){if(!x&&!pe){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Z(!1),$({value:0,label:"Opretter fil på Pico..."}),pe){H(!0);try{await _(m,"",(b,w)=>$({value:b,label:w})),Zn(m,""),nn(m,"","pico"),tn("Fil oprettet på Pico"),Y("success",`Oprettede ${Le(m)} på Pico via Bluetooth.`),await rn()}catch(b){$(null),Y("error",b instanceof Error?b.message:"Kunne ikke oprette fil på Pico.")}finally{H(!1)}return}if(!on.current){$(null),Y("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await ct(async b=>{await b.writeText(m,"",(w,B)=>$({value:w,label:B})),Zn(m,""),nn(m,"","pico"),tn("Fil oprettet på Pico"),Y("success",`Oprettede ${Le(m)} på Pico.`),await rn()})}function Fo(m){m.type==="file"&&(ee(m),k(py(m.path)))}async function ps(m){if(!U||U.source!=="pico")return;const b=U.path;if(ee(null),$({value:0,label:"Gendanner version..."}),pe){H(!0);try{const w=await h(m.path);await _(b,w,(B,D)=>$({value:B,label:D})),Zn(b,w),nn(b,w,"pico"),tn("Version gendannet"),await rn(!1)}catch(w){$(null),Y("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{H(!1)}return}on.current&&await ct(async w=>{await w.replaceTextSafely(b,await w.readText(m.path),(D,ue)=>$({value:D,label:ue}));const B=await w.readText(b);Zn(b,B),nn(b,B,"pico"),tn("Version gendannet"),await rn()})}function Ko(m){i({title:"Slet version",message:`Vil du slette ${Le(m.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Qo(m)}})}async function Qo(m){if(pe){H(!0);try{await v(m.path),await rn(!1),ee(b=>b&&{...b,versions:b.versions.filter(w=>w.path!==m.path)})}catch(b){Y("error",b instanceof Error?b.message:"Kunne ikke slette versionen.")}finally{H(!1)}return}on.current&&await ct(async b=>{await b.delete(m.path),await rn(!1),ee(w=>w&&{...w,versions:w.versions.filter(B=>B.path!==m.path)})})}async function Zo(){if(!U)return;const m=U,b=_f(Ee,Qa(m.path));if(!b||b===m.path)return;if(zi(b)){Y("error",Ka);return}if(Rl(b,m.source)){Y("error",`Der findes allerede en fil med navnet ${Le(b)}.`);return}const w=m.source==="local",B=m.source==="pico";if(pe&&B&&(Ro(m.path)||Ro(b))){Y("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}H(!0);try{if(B)if(pe){const D=Cr[m.path]??await h(m.path);await _(b,D,(ue,we)=>$({value:ue,label:we})),await v(m.path),rr(ue=>({...qh(ue,m.path,b),[b]:D}))}else on.current&&(await vl(()=>on.current.rename(m.path,b)),rr(D=>qh(D,m.path,b)));w&&re(D=>{const ue=D.map(we=>we.path===m.path?{...we,path:b,updatedAt:Date.now()}:we);return cf(ue),ue}),J===m.path&&_e===m.source&&be(b),In(D=>Oy(D,m.source,m.path,b)),ee(null),k(""),Y("success",`Omdøbte ${Le(m.path)} til ${Le(b)}.`),B&&await rn()}catch(D){Y("error",D instanceof Error?D.message:"Kunne ikke omdøbe filen.")}finally{$(null),H(!1)}}function Rl(m,b){return b==="pico"?q.some(w=>w.path===m):Ne.some(w=>w.path===m)}async function la(m,b){if(!Rl(m,"pico"))return;const w=Ty(m,q),B=Cr[m]??await h(m);b!==void 0&&Bi(B)===Bi(b)||await _(w,B)}function Wo(m){if(m.type!=="file"){pe&&wt(void 0,!1),be(m.path),ye(m.source);return}if(pe&&$l(m)){Y("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(m.source==="local"){pe&&wt(void 0,!1);const w=Ne.find(B=>B.path===m.path);nn(m.path,Xt[gt("local",m.path)]??(w==null?void 0:w.content)??"","local");return}const b=gt("pico",m.path);if(Object.prototype.hasOwnProperty.call(Xt,b)){pe&&wt(void 0,!1),nn(m.path,Xt[b],"pico");return}if(Object.prototype.hasOwnProperty.call(Cr,m.path)){pe&&wt(void 0,!1),nn(m.path,Cr[m.path],"pico");return}or(m.path)}async function hs(){if(!x&&!pe){const m=zh();Ge(m),Pt(Uh(m)),je(!0),$(null);return}H(!0),$({value:4,label:pe?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),Y("info",pe?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const m=Re.length>0?Re:pe?await wl((b,w)=>$({value:b,label:w})):await vl(()=>jn(on.current));Ge(m),Pt(Uh(m)),je(!0),$(null)}catch(m){$(null),Y("error",m instanceof Error?m.message:"Fil-tjek før installation fejlede.")}finally{H(!1)}}async function Jo(){if(je(!1),pe){H(!0);try{const b=(Re.length>0?Re:Li.map(B=>({...B,status:"unknown",detail:"Ikke tjekket"}))).filter(B=>Yn[B.id]&&!$l(B));if(b.length===0){Y("info","Ingen filer valgt til installation.");return}let w=null;$({value:0,label:"Starter installation..."});for(const[B,D]of b.entries()){Y("info",`Installerer ${D.label} via Bluetooth...`);const ue=B/b.length*100,we=100/b.length;await la(D.path,D.content),await _(D.path,D.content,(We,Ye)=>{$({value:Math.min(99,ue+We/100*we),label:`${D.label}: ${Ye}`})}),us(D.path,D.content),Y("success",`Installerede ${D.label}.`),D.kind==="library"&&(w=D),Ro(D.path)&&yt(!0)}tn("Installation færdig"),await rn(!1),await Wt(),w&&_s(w)}catch(m){$(null),Y("error",m instanceof Error?m.message:"BLE installation fejlede.")}finally{H(!1)}return}await ct(async m=>{const w=(Re.length>0?Re:Li.map(D=>({...D,status:"unknown",detail:"Ikke tjekket"}))).filter(D=>Yn[D.id]);if(w.length===0){Y("info","Ingen filer valgt til installation.");return}let B=null;$({value:0,label:"Starter installation..."});for(const[D,ue]of w.entries()){Y("info",`Installerer ${ue.label}...`);const we=D/w.length*100,We=100/w.length;await m.replaceTextSafely(ue.path,ue.content,(Ye,$n)=>{$({value:Math.min(99,we+Ye/100*We),label:`${ue.label}: ${$n}`})},{createBackup:!0}),us(ue.path,ue.content),Y("success",`Installerede ${ue.label}.`),ue.kind==="library"&&(B=ue)}tn("Installation færdig"),await rn(!1),await Wt(),B&&_s(B)})}function ia(){return(Re.length>0?Re:zh()).filter(b=>Yn[b.id])}function ec(){const m=ia();if(m.length===0){Y("info","Ingen filer valgt.");return}for(const b of m)Qt(b.path,b.content,!1);je(!1),Y("success",`Gemte ${m.length} filer i browseren.`)}function nc(){const m=ia();if(m.length===0){Y("info","Ingen filer valgt.");return}m.forEach((b,w)=>{window.setTimeout(()=>{Nl(Le(b.path),b.content)},w*120)}),je(!1),Y("success",`Starter download af ${m.length} filer.`)}function _s(m){nn(m.path,m.content,"pico"),Zn(m.path,m.content),Y("info",`Åbnede ${m.label} i editoren.`)}function tc(m,b){Pt(w=>{if(m.kind!=="program")return{...w,[m.id]:b};const B={...w};for(const D of Re)D.kind==="program"&&(B[D.id]=!1);return B[m.id]=b,B})}async function rc(){if(ys(),pe&&_e==="pico"){Y("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(_e==="local"){await lc();return}const m=vt.current;if(!m){Y("error",`${Le(J)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(J.endsWith(".py")){if(!Zi()&&(Y("info",`${Le(J)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await El())){Y("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(K)return;xt(),Ut.current="",Kn(!0);try{await m.runFile(J,()=>{xt(),Ut.current="",gl.current=!1,dl(!0),Mn.current=!0}),Y("success",`Kører ${Le(J)}. Brug Stop for at afbryde.`)}catch(b){dl(!1),Mn.current=!1,xt(),Ut.current="",Y("error",b instanceof Error?b.message:"Kunne ikke starte koden.")}return}H(!0);try{const b=await m.exec(ae,2e4);b.output.trim()&&Y("info",b.output),b.error.trim()&&bl(b.error,ae),!b.output.trim()&&!b.error.trim()&&Y("success","Koden kørte uden output.")}catch(b){Y("error",b instanceof Error?b.message:"Kunne ikke køre koden.")}finally{H(!1)}}async function lc(){const m=Sf(ae,{allowInput:!0});if(m.some(B=>B.level==="error")){for(const B of m){const D=B.line?`Linje ${B.line}: `:"";Y(B.level==="error"?"error":"warning",`${D}${B.text}`)}return}const b=new AbortController;Kt.current=b;const w=new Kb;Vt.current=w,H(!0),qi(!0),Kn(!0),Y("info",x?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const B=[],D=await w.run(ae,{signal:b.signal,onOutput:Ye=>{B.push(Ye),Y("info",Ye)}});for(const Ye of D.issues){const $n=Ye.line?`Linje ${Ye.line}: `:"";Y(Ye.level==="error"?"error":"warning",`${$n}${Ye.text}`)}const ue=[...B,D.output].filter(Boolean).join(`
`).trim(),we=D.output.trim();!D.error.trim()&&_y(ue)?bl(ue,ae):(we&&Y("info",we),D.error.trim()&&bl(D.error,ae,D.unavailable?"warning":"error")),D.ok&&!ue&&!D.error.trim()&&Y("success","Offline MicroPython kørte uden output.")}finally{Kt.current=null,Vt.current=null,w.dispose(),qi(!1),H(!1)}}async function ic(){var b,w,B;if(ml){(b=Kt.current)==null||b.abort(),(w=Vt.current)==null||w.stop(),Y("warning","Stoppede offline MicroPython."),Kn(!0);return}if(!ot&&Rn){(B=Ht.current)==null||B.reset(),Or(!1),Y("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Kn(!0);return}const m=vt.current;if(m)try{await m.stop(),Y("warning","Stoppede koden på Pico.")}catch(D){Y("error",D instanceof Error?D.message:"Kunne ikke stoppe koden.")}finally{dl(!1),Mn.current=!1,xt(),Ut.current="",Kn(!0)}}function ac(){const m=cn.current;if(!m)return;const b=m.scrollHeight-m.scrollTop-m.clientHeight<12;Kn(b)}function sc(){W([]),Kn(!0)}async function Tl(){const m=Un?rt:rt.trimEnd();if(Un){if(!ot){const B=Vt.current;if(!B){Y("warning","Browser-MicroPython kører ikke lige nu."),Vn();return}$t(""),Kn(!0),B.sendInput(m),Vn();return}const w=vt.current;if(!w){Y("warning","Pico-terminalen er ikke forbundet."),Vn();return}$t(""),Kn(!0);try{await w.sendProgramInput(m)}catch(B){Y("error",B instanceof Error?B.message:"Kunne ikke sende input til Pico-koden.")}finally{Vn()}return}if(!m.trim())return;if(hl(w=>(w.at(-1)===m?w:[...w,m]).slice(-80)),lt(null),zn(null),Fi){Y("warning",ot?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Vn();return}if(!ot){const w=Sf(m);if(w.some(D=>D.level==="error")){for(const D of w){const ue=D.line?"Linje "+D.line+": ":"";Y(D.level==="error"?"error":"warning",ue+D.text)}Vn();return}const B=Ht.current??new Fb;Ht.current=B,$t(""),Or(!0),Kn(!0),Y("info",">>> "+m);try{let D=!1;const ue=await B.send(m,{timeoutMs:15e3,onOutput:We=>{D=!0,Y("info",We)}}),we=ue.output.trim();we&&!D&&Y("info",we),ue.error.trim()&&bl(ue.error,m,ue.unavailable?"warning":"error")}catch(D){Y("error",D instanceof Error?D.message:"Browser-MicroPython-terminalen fejlede.")}finally{Or(!1),Vn()}return}if(pe){Y("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Vn();return}const b=vt.current;if(!x||!b){Y("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Vn();return}$t(""),Or(!0),Kn(!0),gl.current=!0,Y("info",">>> "+m);try{await b.sendFriendlyLine(m)}catch(w){gl.current=!1,Y("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Or(!1),Vn()}}function Vn(){window.requestAnimationFrame(()=>{const m=un.current;if(!m||m.disabled)return;m.focus();const b=m.value.length;m.selectionStart=b,m.selectionEnd=b})}function gs(m,b,w){return w.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:m}),f.jsx("p",{children:b})]}),w.map(B=>{const D=pe&&$l(B);return f.jsxs("label",{className:`ide-install-row ${D?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!Yn[B.id],disabled:D,onChange:ue=>tc(B,ue.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[bs(B),(B.kind==="library"||!x&&!pe)&&f.jsx("em",{className:`ide-install-status status-${B.status}`,children:D?"USB":My(B.status)})]}),f.jsxs("small",{children:[B.description,!x&&!pe?` ${B.detail}`:""]})]})]},B.id)})]})}function bs(m){return m.kind==="program"?m.label.replace(/\s*\(main\.py\)$/i,""):m.label}function ys(){Ft&&W([]),Kn(!0)}function vs(m,b){const w=m.indexOf(`
`,b);return w===-1?m.length:w}function Hr(m,b){const w=Rf(m,b);if(!w||w.query.length<1){Tn(null);return}const B=Vh(m,b,!0).slice(0,8),D=Gh(it.current,w.start);Tn(B.length>0&&D?{items:B,selected:0,start:w.start,end:b,position:D}:null)}function Ml(m,b){const w=Rf(m,b);if(!w||w.query.length<1){zn(null);return}const B=Vh(m,b,!1).slice(0,8),D=Gh(un.current,w.start);zn(B.length>0&&D?{items:B,selected:0,start:w.start,end:b,position:D}:null)}function cr(m){const b=m.value.slice(m.selectionStart,m.selectionEnd);Pi(Sy(b)?b:"")}function aa(m=Ke==null?void 0:Ke.items[Ke.selected]){if(!m||!Ke)return;const b=ae.slice(0,Ke.start)+m.insert+ae.slice(Ke.end),w=Ke.start+m.insert.length-(m.insert.endsWith("()")?1:0);Ve(b),In(B=>({...B,[gt(_e,J)]:b})),Tn(null),window.requestAnimationFrame(()=>{const B=it.current;B&&(B.focus(),B.selectionStart=w,B.selectionEnd=w,Hr(b,w))})}function xs(m=mn==null?void 0:mn.items[mn.selected]){if(!m||!mn)return;const b=rt.slice(0,mn.start)+m.insert+rt.slice(mn.end),w=mn.start+m.insert.length-(m.insert.endsWith("()")?1:0);$t(b),zn(null),window.requestAnimationFrame(()=>{const B=un.current;B&&(B.focus(),B.selectionStart=w,B.selectionEnd=w,Ml(b,w))})}function oc(m){var ur;if((m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="s"){m.preventDefault(),!K&&J.trim()&&ds();return}if(Ke){if(m.key==="ArrowDown"){m.preventDefault(),Tn(Ie=>Ie&&{...Ie,selected:(Ie.selected+1)%Ie.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),Tn(Ie=>Ie&&{...Ie,selected:(Ie.selected-1+Ie.items.length)%Ie.items.length});return}if(m.key==="Tab"){m.preventDefault(),aa();return}if(m.key==="Enter"){if(!(Ke.items[Ke.selected]&&__(Ke.items[Ke.selected],ae.slice(Ke.start,Ke.end)))){m.preventDefault(),aa();return}Tn(null)}if(m.key==="Escape"){m.preventDefault(),Tn(null);return}}if(m.key==="Enter"){m.preventDefault();const Ie=m.currentTarget,fr=Ie.selectionStart,sa=Ie.selectionEnd,jl=ae.lastIndexOf(`
`,fr-1)+1,Vr=ae.slice(jl,fr),oa=((ur=Vr.match(/^[ \t]*/))==null?void 0:ur[0])??"",An=Vr.trimEnd().endsWith(":")?"    ":"",dr=`
${oa}${An}`,ii=ae.slice(0,fr)+dr+ae.slice(sa),Gr=fr+dr.length;Lr(ii,Gr),window.requestAnimationFrame(()=>{Ie.selectionStart=Gr,Ie.selectionEnd=Gr});return}if(m.key!=="Tab")return;m.preventDefault();const b=m.currentTarget,w=b.selectionStart,B=b.selectionEnd,D="    ";if(m.shiftKey){const Ie=ae.lastIndexOf(`
`,w-1)+1,fr=w===B?vs(ae,w):B,sa=ae.slice(Ie,fr);let jl=0,Vr=0;const oa=sa.replace(/(^|\n)( {1,4}|\t)/g,(dr,ii,Gr,Ss)=>{const ca=Gr.length;return Ie+Ss<w&&(jl+=ca),Vr+=ca,ii});if(Vr===0)return;const An=ae.slice(0,Ie)+oa+ae.slice(fr);Lr(An,Math.max(Ie,w-jl)),window.requestAnimationFrame(()=>{b.selectionStart=Math.max(Ie,w-jl),b.selectionEnd=w===B?b.selectionStart:Math.max(b.selectionStart,B-Vr)});return}if(w===B){const Ie=ae.slice(0,w)+D+ae.slice(B);Lr(Ie,w+D.length),window.requestAnimationFrame(()=>{b.selectionStart=w+D.length,b.selectionEnd=w+D.length});return}const ue=ae.lastIndexOf(`
`,w-1)+1,We=ae.slice(ue,B).replace(/^/gm,D),Ye=We.split(`
`).length,$n=ae.slice(0,ue)+We+ae.slice(B);Lr($n,w+D.length),window.requestAnimationFrame(()=>{b.selectionStart=w+D.length,b.selectionEnd=B+Ye*D.length})}function ws(m){if(Un){m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Tl());return}if(mn){if(m.key==="ArrowDown"){m.preventDefault(),zn(b=>b&&{...b,selected:(b.selected+1)%b.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),zn(b=>b&&{...b,selected:(b.selected-1+b.items.length)%b.items.length});return}if(m.key==="Enter"||m.key==="Tab"){m.preventDefault(),xs();return}if(m.key==="Escape"){m.preventDefault(),zn(null);return}}if(m.key==="Tab"){m.preventDefault();const b=m.currentTarget,w=b.selectionStart,B=b.selectionEnd,D="    ",ue=rt.slice(0,w)+D+rt.slice(B),we=w+D.length;$t(ue),lt(null),zn(null),window.requestAnimationFrame(()=>{b.selectionStart=we,b.selectionEnd=we});return}if(m.key==="ArrowUp"||m.key==="ArrowDown"){if(!(m.key==="ArrowUp"?m.currentTarget.selectionStart===0&&m.currentTarget.selectionEnd===0:m.currentTarget.selectionStart===rt.length&&m.currentTarget.selectionEnd===rt.length)||Ql.length===0)return;m.preventDefault();const w=m.key==="ArrowUp"?vn===null?Ql.length-1:Math.max(0,vn-1):vn===null||vn+1>=Ql.length?null:vn+1;lt(w);const B=w===null?"":Ql[w]??"";$t(B),zn(null),window.requestAnimationFrame(()=>{const D=un.current;D&&(D.selectionStart=B.length,D.selectionEnd=B.length)});return}m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Tl())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(Lf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Zl?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Po,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(Fn,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var m;return(m=$i.current)==null?void 0:m.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(Fn,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>rn(),disabled:!x&&!pe||K,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(Fn,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:St.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):St.map(m=>{if(m.kind==="separator"){const D=m.id==="pico-files"&&!x&&!pe;return f.jsxs(L.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:m.label})}),D&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},m.id)}const b=pe&&$l(m),w=Xt[gt(m.source,m.path)],B=w!==void 0&&w!==Ry(m,Ne,Cr);return f.jsxs("div",{className:`ide-file-row ${J===m.path&&_e===m.source?"active":""} ${b?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>Wo(m),disabled:b,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:m.name}),f.jsxs("small",{title:B?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[m.source==="pico"&&m.versions.length>0&&f.jsx("em",{className:"ide-file-version-count",title:`${m.versions.length} gemte versioner i historikken`,children:m.versions.length}),f.jsx("i",{className:`ide-file-dirty-dot ${B?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Fo(m),disabled:m.type!=="file"||K||b,"aria-label":`Filvalg for ${m.name}`,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(Fn,{name:"settings",size:16})})]},`${m.source}:${m.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:pe?"Forbundet Pico":"USB udvikling"}),!pe&&f.jsx("span",{className:`ide-usb-status ${st.supported?"available":"unavailable"}`,title:st.message,"data-tooltip":st.message,role:"img","aria-label":st.message,tabIndex:0,children:"!"})]}),pe&&f.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!pe&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Zt:Ji,disabled:!st.supported||T,children:T?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:hs,disabled:pe||K,children:"Download"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Yo,disabled:!x||K,children:"Nulstil enhed"})]}),pe&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(Fn,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:hs,disabled:K,children:"Startprogrammer og biblioteker"})]}),!pe&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>bn(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[Le(J),f.jsxs("small",{children:[Go," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:rc,disabled:K,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:ic,disabled:!ml&&!(!ot&&Rn)&&(!x||!yn),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Sl,disabled:K||!J.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>ms(),disabled:K||!J.trim(),children:"Slet"})]})]}),Wi(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Kl.top}px)`},children:Array.from({length:is},(m,b)=>f.jsx("span",{children:b+1},b))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Kl.left}px, ${-Kl.top}px)`},children:ky(ae,Vo)}),f.jsx("textarea",{ref:it,className:"ide-editor",value:ae,onChange:m=>Lr(m.target.value,m.target.selectionStart),onKeyDown:oc,onKeyUp:m=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||Hr(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>{Hr(m.currentTarget.value,m.currentTarget.selectionStart),cr(m.currentTarget)},onSelect:m=>cr(m.currentTarget),onScroll:m=>{Dr({top:m.currentTarget.scrollTop,left:m.currentTarget.scrollLeft}),Ke&&Hr(m.currentTarget.value,m.currentTarget.selectionStart)},readOnly:K||!!ie,"aria-busy":K||!!ie,spellCheck:!1}),Ke&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Ke.position.left,top:Ke.position.top},children:Ke.items.map((m,b)=>f.jsx("button",{className:b===Ke.selected?"active":"",type:"button",onMouseDown:w=>{w.preventDefault(),aa(m)},role:"option","aria-selected":b===Ke.selected,children:m.label},m.label))}),ie&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",Le(ie),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${lr?"":"active"}`,type:"button",onClick:()=>rs(m=>!m),"aria-label":lr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!lr,title:lr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Ft?"active":""}`,type:"button",onClick:()=>_l(m=>!m),"aria-pressed":Ft,title:Ft?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:sc,disabled:X.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:cn,onScroll:ac,onClick:()=>{var m;return(m=un.current)==null?void 0:m.focus()},children:[X.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):X.map((m,b)=>f.jsx("div",{className:`term-line term-${m.level}`,children:m.technical&&!lr?m.technical:m.text},`${b}-${m.text}`)),f.jsxs("form",{className:`ide-terminal-command ${Fi&&!Un?"locked":""} ${Un?"stdin":""}`,onSubmit:m=>{m.preventDefault(),Tl()},children:[f.jsx("span",{"aria-hidden":"true",children:ni}),f.jsx("textarea",{ref:un,value:rt,onChange:m=>{$t(m.target.value),lt(null),Un?zn(null):Ml(m.target.value,m.target.selectionStart)},onKeyDown:ws,onKeyUp:m=>{Un||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||Ml(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>{Un||Ml(m.currentTarget.value,m.currentTarget.selectionStart)},disabled:as,placeholder:ss,"aria-label":Un?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:ss,rows:Math.max(1,rt.split(`
`).length)})]}),mn&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:mn.position.left,top:mn.position.top},children:mn.items.map((m,b)=>f.jsx("button",{className:b===mn.selected?"active":"",type:"button",onMouseDown:w=>{w.preventDefault(),xs(m)},role:"option","aria-selected":b===mn.selected,children:m.label},m.label))})]})]})]}),f.jsx("input",{ref:$i,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:m=>{var b;qo((b=m.target.files)==null?void 0:b[0]),m.currentTarget.value=""}}),A&&f.jsx(Sn,{title:"Gem fil",onClose:()=>F(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:li,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void El(),disabled:!x&&!pe||K,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:kl,children:"Download til computer"})]})}),Be&&f.jsx(Sn,{title:"Startprogrammer og biblioteker",onClose:()=>je(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:x||pe?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[gs("Startprogrammer (main.py)","Starter automatisk på Picoen.",Re.filter(m=>m.kind==="program")),gs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Re.filter(m=>m.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(x||pe)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Jo,disabled:K,children:"Installer valgte på Pico"}),f.jsx("button",{className:x||pe?"btn btn-outline":"btn btn-primary",type:"button",onClick:ec,disabled:K,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:nc,disabled:K,children:"Download valgte"})]})]})}),Ar&&f.jsx(Sn,{title:"main.py er gemt",onClose:()=>yt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ta("control"),disabled:K,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ta("ide"),disabled:K,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>yt(!1),disabled:K,children:"Senere"})]})}),ge&&f.jsx(Sn,{title:"Installer MicroPython",onClose:()=>bn(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:kn,onChange:m=>Lt(m.target.value),children:ei.map(m=>f.jsx("option",{value:m,children:m},m))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(xn==null?void 0:xn.version)??Ln,onChange:m=>jr(m.target.value),children:Pn.map(m=>f.jsxs("option",{value:m.version,children:[m.version," (",m.date,")"]},`${m.board}:${m.version}:${m.date}`))})]}),xn&&f.jsx("a",{className:"btn btn-primary btn-block",href:xn.url,download:xn.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),O&&f.jsx(Sn,{title:"Ny Python-fil",onClose:()=>Z(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:m=>{m.preventDefault(),$o()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:se,onChange:m=>xe(m.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Jl,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Lh(se),children:"Opret"})]})}),U&&f.jsx(Sn,{title:Le(U.path),onClose:()=>ee(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:m=>{m.preventDefault(),Zo()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:Ee,onChange:m=>k(m.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Qa(U.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Qa(U.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!_f(Ee,Qa(U.path))||_f(Ee,Qa(U.path))===U.path||K,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>ms(U),disabled:K,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),U.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):U.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:U.versions.map(m=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:Le(m.path)}),f.jsx("small",{children:m.size!==void 0?`${m.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void ps(m),disabled:K,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ko(m),disabled:K,children:"Slet"})]},m.path))})]})]})})]})}function Lh(o){var c;const i=(c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function my(o){const i=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const s=h_(c[1]);return s?`/${s}.${c[2].toLowerCase()}`:""}function _f(o,i="py"){const c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const s=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const u=h_(s[1]),d=i.replace(/^\./,"").toLowerCase(),h=(s[2]??(d||"py")).toLowerCase();return u?`/${u}.${h}`:""}function py(o){return Le(o).replace(/\.(py|txt|json|csv)$/i,"")}function h_(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Qa(o){var s;const i=Le(o).match(/\.([a-z0-9]+)$/i),c=(s=i==null?void 0:i[1])==null?void 0:s.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function Bi(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function zh(){return Li.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Uh(o){const i={};return o.forEach(c=>{i[c.id]=!1}),i}function Le(o){return o.split("/").filter(Boolean).pop()??o}function Ro(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Hh(o){const i=o.userAgent||"",c=o.platform||"",s=o.maxTouchPoints||0,u=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),d=/Macintosh/i.test(c)&&s>1;return u&&!d}function hy(o){return o instanceof DOMException&&o.name==="AbortError"}function _y(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function $l(o){return gy(o)}function gy(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Nf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Vh(o,i,c){const s=Rf(o,i);if(!s)return[];const u=by(o,s.start,i),d=s.query.toLowerCase(),h=u.beforeToken.toLowerCase(),_=u.linePrefix.toLowerCase(),v=c?[...Nf,...vy(o)]:Nf;return xy(v).filter(x=>{const E=x.label.toLowerCase(),T=x.insert.toLowerCase();return T===d||E===d||__(x,s.query)?!1:u.importLine?yy(x,u)?E.startsWith(_)||T.startsWith(_)||E.startsWith(d)||T.startsWith(d):!1:h.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(d)||E.startsWith(d))})}function by(o,i,c){const s=o.lastIndexOf(`
`,i-1)+1,u=o.slice(s,c),d=o.slice(s,i),h=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(u),_=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(u);return{linePrefix:u,beforeToken:d,importLine:h,fromImportLine:_}}function yy(o,i){return i.fromImportLine?!o.insert.includes("(")&&!o.insert.startsWith("import "):o.insert.startsWith("import ")||o.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(o.insert)}function vy(o){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const s of c)for(const u of o.matchAll(s))u[1]&&i.add(u[1]),u[2]&&i.add(u[2]);return[...i].filter(s=>s.length>1&&!wy.has(s)).sort((s,u)=>s.localeCompare(u,"da")).map(s=>({label:s,insert:s}))}function xy(o){const i=new Set,c=[];for(const s of o){const u=s.insert.toLowerCase();i.has(u)||(i.add(u),c.push(s))}return c}const wy=new Set(Nf.map(o=>o.insert.replace(/[().: ]+$/g,"")));function Rf(o,i){const s=o.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function __(o,i){const c=o.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function Sy(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Gh(o,i){if(!o)return null;const c=o.closest(".ide-terminal")??o.parentElement;if(!c)return null;const s=window.getComputedStyle(o),u=document.createElement("div"),d=document.createElement("span"),h=c.getBoundingClientRect(),_=o.getBoundingClientRect();u.style.position="absolute",u.style.visibility="hidden",u.style.pointerEvents="none",u.style.whiteSpace="pre-wrap",u.style.overflowWrap="break-word",u.style.boxSizing=s.boxSizing,u.style.width=`${o.clientWidth}px`,u.style.padding=s.padding,u.style.border=s.border,u.style.font=s.font,u.style.lineHeight=s.lineHeight,u.style.letterSpacing=s.letterSpacing,u.style.tabSize=s.tabSize,u.style.left=`${_.left-h.left-o.scrollLeft}px`,u.style.top=`${_.top-h.top-o.scrollTop}px`,u.textContent=o.value.slice(0,i),d.textContent=o.value.slice(i,i+1)||" ",u.appendChild(d),c.appendChild(u);const v=d.getBoundingClientRect();u.remove();const y=Ey(v.left-h.left,8,Math.max(8,c.clientWidth-296)),x=v.bottom-h.top+6,E=x+218>c.clientHeight?Math.max(8,v.top-h.top-218):x;return{left:y,top:E}}function Ey(o,i,c){return Math.max(i,Math.min(c,o))}function ky(o,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,u=[];return o.split(/(\r?\n)/).forEach((d,h)=>{if(d===`
`||d===`\r
`){u.push(f.jsx("br",{},`br-${h}`));return}let _=0;[...d.matchAll(s)].forEach((y,x)=>{const E=y.index??0;E>_&&u.push(...Yh(d.slice(_,E),c,`${h}-${x}-plain`,i));const T=y[0],P=T.startsWith("#")?"tok-comment":T.startsWith('"')||T.startsWith("'")?"tok-string":/^\d/.test(T)?"tok-number":"tok-builtin";u.push(...Ao(T,i,`${h}-${x}-token`,P)),_=E+T.length}),_<d.length&&u.push(...Yh(d.slice(_),c,`${h}-tail`,i))}),u.length?u:" "}function Yh(o,i,c,s=""){const u=[];let d=0;const h=new RegExp(i.source,"g");return[...o.matchAll(h)].forEach((_,v)=>{const y=_.index??0;y>d&&u.push(...Ao(o.slice(d,y),s,`${c}-${v}-plain`)),u.push(...Ao(_[0],s,`${c}-${v}-keyword`,"tok-keyword")),d=y+_[0].length}),d<o.length&&u.push(...Ao(o.slice(d),s,`${c}-plain-end`)),u}function Ao(o,i,c,s=""){if(!i)return[f.jsx("span",{className:s||void 0,children:o},c)];const u=[],d=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),h=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${d})(?![A-Za-zÆØÅæøå0-9_])`,"g");let _=0;return[...o.matchAll(h)].forEach((v,y)=>{const x=v.index??0;x>_&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(_,x)},`${c}-${y}-before`)),u.push(f.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${c}-${y}-match`)),_=x+v[0].length}),_<o.length&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(_)},`${c}-after`)),u.length?u:[f.jsx("span",{className:s||void 0,children:o},c)]}function gf(o){return o.length>0?o:[{path:kf,content:p_,uploaded:!1,updatedAt:Date.now()}]}function Ny(o,i,c,s){const u=o.filter(d=>d.path!==i);return[{path:i,content:c,uploaded:s,updatedAt:Date.now()},...u].sort((d,h)=>h.updatedAt-d.updatedAt)}function Ry(o,i,c){var s;return o.source==="pico"?c[o.path]:(s=i.find(u=>u.path===o.path))==null?void 0:s.content}function Do(o){const i=o.replace(/\\/g,"/"),c=i.lastIndexOf("/"),s=c>=0?i.slice(0,c+1):"",d=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return d?{originalPath:`${s}${d[1]}${d[3]}`,index:parseInt(d[2],10)}:null}function zi(o){return Do(o)!==null}function Tf(o){const i=new Map;for(const c of o){const s=Do(c.path);if(!s)continue;const u=i.get(s.originalPath)??[];u.push(c),i.set(s.originalPath,u)}for(const c of i.values())c.sort((s,u)=>{var d,h;return(((d=Do(u.path))==null?void 0:d.index)??0)-(((h=Do(s.path))==null?void 0:h.index)??0)});return i}function Ty(o,i){const c=o.replace(/\\/g,"/"),s=c.lastIndexOf("/"),u=s>=0?c.slice(0,s+1):"/",d=s>=0?c.slice(s+1):c.replace(/^\/+/,""),h=d.lastIndexOf("."),_=h>0?d.slice(0,h):d,v=h>0?d.slice(h):"",y=new Set(i.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const E=`${u}${_}_backup${x}${v}`;if(!y.has(E.toLowerCase()))return E}return`${u}${_}_backup${Date.now()}${v}`}function My(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function jy(o,i,c,s){const u=new Map,d=Tf(o);for(const x of o)zi(x.path)||u.set(gt("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:d.get(x.path)??[]});for(const x of i)u.set(gt("local",x.path),{kind:"file",name:Le(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const x of Object.keys(c)){const[E,...T]=x.split(":"),P=T.join(":");if(E!=="local"&&E!=="pico"||!P)continue;const X=u.get(x);if(X){u.set(x,X);continue}u.set(x,{kind:"file",name:Le(P),path:P,type:"file",source:E,uploaded:!1,versions:E==="pico"?d.get(P)??[]:[]})}const h=[...u.values()].sort(Dy),_=h.filter(x=>x.source==="pico"),v=h.filter(x=>x.source==="local"),y=[];return _.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},..._):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const Ay=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function Dy(o,i){const c=Ih(o.path),s=Ih(i.path);return c===null&&s===null?o.name.localeCompare(i.name,"da"):c===null?-1:s===null?1:c-s}function Ih(o){var c;const i=(c=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?Ay.get(i)??null:null}function qh(o,i,c){if(!(i in o))return o;const s={...o,[c]:o[i]};return delete s[i],s}function Oy(o,i,c,s){const u=`${i}:${c}`;if(!(u in o))return o;const d={...o,[`${i}:${s}`]:o[u]};return delete d[u],d}function Cy({open:o}){const i=ne(q=>q.screen),c=ne(q=>q.active),s=ne(q=>q.toggleSideMenu),u=ne(q=>q.toggleDebugger),d=ne(q=>q.setEditMode),h=ne(q=>q.openMenuPage),_=ne(q=>q.disconnect),v=ne(q=>q.openPicoIde),y=ne(q=>q.closePicoIde),x=ne(q=>q.picoIdeOrigin),E=i==="dashboard",T=i==="control",P=i==="ide",X=T&&!!(c!=null&&c.canEdit),W=!T||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),K=x==="control",H=x==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${i} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[E&&f.jsxs(f.Fragment,{children:[f.jsx(_t,{label:"Bruger",icon:"user",onClick:()=>h("user-settings")}),f.jsx(_t,{label:"Indstillinger",icon:"settings",onClick:()=>h("application-settings")}),f.jsx(_t,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!W}),f.jsx(bf,{}),f.jsx(_t,{label:"Om appen",icon:"info",onClick:()=>h("application-about")}),f.jsx(_t,{label:"Hjælp",icon:"help",onClick:()=>h("application-help")}),f.jsx(_t,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),T&&f.jsxs(f.Fragment,{children:[f.jsx(_t,{label:"Indstillinger",icon:"settings",onClick:()=>h("device-settings")}),f.jsx(_t,{label:"Rediger",icon:"edit",onClick:()=>d(!0),disabled:!X}),f.jsx(_t,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!W}),f.jsx(bf,{}),f.jsx(_t,{label:"Hjælp",icon:"help",onClick:()=>h("device-help")}),f.jsx(_t,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),P&&f.jsxs(f.Fragment,{children:[f.jsx(_t,{label:H,icon:"back",onClick:y}),f.jsx(bf,{})]}),f.jsx("div",{className:"spacer"}),(T||P&&K)&&f.jsx(_t,{label:"Forlad",icon:"exit",onClick:()=>_()})]})]})}function _t({label:o,icon:i,disabled:c,onClick:s}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:c,"aria-label":o,children:[f.jsx(Fn,{name:i}),f.jsx("span",{children:o})]})}function bf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:U0,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const By={error:"term-error",success:"term-success",warning:"term-warning",info:""},Ph={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function Ly(){const o=new Date,i=c=>String(c).padStart(2,"0");return`${i(o.getDate())}-${i(o.getMonth()+1)}-${o.getFullYear()}-${i(o.getHours())}-${i(o.getMinutes())}`}function zy(){const o=ne(u=>u.logs),i=ne(u=>u.clearLogs),c=ne(u=>u.toggleDebugger);function s(){const u=[...o].reverse().map(v=>`${v.time} ${Ph[v.level]}${v.message}`).join(`
`),d=new Blob([u],{type:"text/plain"}),h=URL.createObjectURL(d),_=document.createElement("a");_.href=h,_.download=`${Ly()}.txt`,_.click(),URL.revokeObjectURL(h)}return f.jsxs(Sn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((u,d)=>f.jsxs("div",{className:`term-line ${By[u.level]}`,children:[u.time," ",Ph[u.level],u.message]},`${u.time}-${d}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const g_=4,Bt=g_*4+17,$h=80,Uy=20,Hy=30660;function Vy(o){const i=new TextEncoder().encode(o);if(i.length>76)throw new Error("QR-koden er for lang.");const c=Xh(!1),s=Xh(!1);Gy(c,s);const u=Iy(i),d=$y(u,Uy);return qy(c,s,[...u,...d]),Py(c,s),c}function Xh(o){return Array.from({length:Bt},()=>Array.from({length:Bt},()=>o))}function Ot(o,i,c,s,u,d=!0){o[s][c]=u,d&&(i[s][c]=!0)}function Gy(o,i){yf(o,i,0,0),yf(o,i,Bt-7,0),yf(o,i,0,Bt-7);for(let c=0;c<Bt;c+=1)i[6][c]||Ot(o,i,c,6,c%2===0),i[c][6]||Ot(o,i,6,c,c%2===0);Yy(o,i,26,26),Ot(o,i,8,g_*4+9,!0)}function yf(o,i,c,s){for(let u=-1;u<=7;u+=1)for(let d=-1;d<=7;d+=1){const h=c+d,_=s+u;if(h<0||_<0||h>=Bt||_>=Bt)continue;const v=d>=0&&d<=6&&u>=0&&u<=6&&(d===0||d===6||u===0||u===6||d>=2&&d<=4&&u>=2&&u<=4);Ot(o,i,h,_,v)}}function Yy(o,i,c,s){for(let u=-2;u<=2;u+=1)for(let d=-2;d<=2;d+=1)i[s+u][c+d]||Ot(o,i,c+d,s+u,Math.max(Math.abs(d),Math.abs(u))!==1)}function Iy(o){const i=[];To(i,4,4),To(i,o.length,8);for(const s of o)To(i,s,8);for(To(i,0,Math.min(4,$h*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let s=0;s<i.length;s+=8)c.push(i.slice(s,s+8).reduce((u,d)=>u<<1|d,0));for(let s=236;c.length<$h;s=s===236?17:236)c.push(s);return c}function To(o,i,c){for(let s=c-1;s>=0;s-=1)o.push(i>>>s&1)}function qy(o,i,c){const s=c.flatMap(h=>Array.from({length:8},(_,v)=>h>>>7-v&1));let u=0,d=!0;for(let h=Bt-1;h>=1;h-=2){h===6&&(h-=1);for(let _=0;_<Bt;_+=1){const v=d?Bt-1-_:_;for(let y=0;y<2;y+=1){const x=h-y;if(i[v][x])continue;const E=u<s.length?s[u]===1:!1;o[v][x]=E!==((x+v)%2===0),u+=1}}d=!d}}function Py(o,i){const c=s=>(Hy>>>s&1)!==0;for(let s=0;s<=5;s+=1)Ot(o,i,8,s,c(s));Ot(o,i,8,7,c(6)),Ot(o,i,8,8,c(7)),Ot(o,i,7,8,c(8));for(let s=9;s<15;s+=1)Ot(o,i,14-s,8,c(s));for(let s=0;s<8;s+=1)Ot(o,i,Bt-1-s,8,c(s));for(let s=8;s<15;s+=1)Ot(o,i,8,Bt-15+s,c(s))}const Ja=new Array(512),Mf=new Array(256);let Fh=!1;function b_(){if(Fh)return;let o=1;for(let i=0;i<255;i+=1)Ja[i]=o,Mf[o]=i,o<<=1,o&256&&(o^=285);for(let i=255;i<512;i+=1)Ja[i]=Ja[i-255];Fh=!0}function y_(o,i){return o===0||i===0?0:Ja[Mf[o]+Mf[i]]}function $y(o,i){b_();const c=Xy(i),s=Array.from({length:i},()=>0);for(const u of o){const d=u^s.shift();s.push(0);for(let h=0;h<i;h+=1)s[h]^=y_(c[h],d)}return s}function Xy(o){b_();let i=[1];for(let c=0;c<o;c+=1){const s=Array.from({length:i.length+1},()=>0);for(let u=0;u<i.length;u+=1)s[u]^=y_(i[u],Ja[c]),s[u+1]^=i[u];i=s}return i.slice(1)}function Fy(){const o=ne(ge=>ge.menuPage),i=ne(ge=>ge.closeMenuPage),c=ne(ge=>ge.user),s=ne(ge=>ge.active),u=ne(ge=>ge.layout),d=ne(ge=>ge.sliderValues),h=ne(ge=>ge.savedDevices),_=ne(ge=>ge.updateUsername),v=ne(ge=>ge.createOwnerPairingCode),y=ne(ge=>ge.applyOwnerPairingCode),x=ne(ge=>ge.clearSavedDevices),E=ne(ge=>ge.resetApplicationData),T=ne(ge=>ge.saveDeviceSettings),P=ne(ge=>ge.setEditMode),X=ne(ge=>ge.askConfirm),[W,K]=L.useState((c==null?void 0:c.username)??""),[H,q]=L.useState(!1),[le,ie]=L.useState(""),[de,Ne]=L.useState(""),[re,J]=L.useState(!1),[be,_e]=L.useState(""),ye=L.useRef(null),[ae,Ve]=L.useState((s==null?void 0:s.iconID)??0),[Re,Ge]=L.useState(!1),[O,Z]=L.useState((s==null?void 0:s.canOthersConnect)??!1),[se,xe]=L.useState((s==null?void 0:s.canOthersEdit)??!1),[Ee,k]=L.useState((s==null?void 0:s.canOthersEditCode)??!1),[U,ee]=L.useState((s==null?void 0:s.gridCols)??11),[A,F]=L.useState((s==null?void 0:s.gridRows)??31),[Q,$]=L.useState(!1);L.useEffect(()=>{o==="user-settings"&&(K((c==null?void 0:c.username)??""),Ne(""),_e(""),J(!1))},[o,c==null?void 0:c.username]),L.useEffect(()=>{o==="device-settings"&&s&&(Ve(s.iconID),Z(s.canOthersConnect),xe(s.canOthersEdit),k(s.canOthersEditCode),ee(s.gridCols),F(s.gridRows))},[s,o]),L.useEffect(()=>{if(!re)return;let ge=!1,bn=null,En=0;async function Oe(){var Lt;const kn=window.BarcodeDetector;if(!kn||!((Lt=navigator.mediaDevices)!=null&&Lt.getUserMedia)){_e("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),J(!1);return}try{bn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Ln=ye.current;if(!Ln)return;Ln.srcObject=bn,await Ln.play();const jr=new kn({formats:["qr_code"]}),Ar=async()=>{var yt;if(!ge){try{const Dr=(yt=(await jr.detect(Ln)).find(yn=>yn.rawValue))==null?void 0:yt.rawValue;if(Dr){Ne(Dr),y(Dr)&&q(!1),J(!1);return}}catch{}En=window.requestAnimationFrame(Ar)}};En=window.requestAnimationFrame(Ar)}catch{_e("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),J(!1)}}return Oe(),()=>{ge=!0,En&&window.cancelAnimationFrame(En),bn==null||bn.getTracks().forEach(kn=>kn.stop())}},[y,re]);const Be=(ge,bn)=>Number.isFinite(ge)?Math.max(Ui,Math.min(Hi,Math.round(ge))):bn,je=(c==null?void 0:c.username)??"",Yn=W.trim(),Pt=Yn.length>0&&Yn!==je;if(!o)return null;if(o==="user-settings"){let ge=function(){const Oe=v();Oe&&(ie(Oe),Ne(""),q(!0))},bn=function(){y(de)&&(Ne(""),q(!1))};async function En(){var Oe;try{await((Oe=navigator.clipboard)==null?void 0:Oe.writeText(le))}catch{}}return f.jsxs(f.Fragment,{children:[f.jsx(Sn,{title:"Brugerindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dt,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${W.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:W,onChange:Oe=>K(Oe.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>_(W),disabled:!Pt,children:"Gem nyt brugernavn"}),f.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:ge,children:"Ejerkode"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>X({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{E()}}),children:"Slet brugerdata"})]})}),H&&f.jsx(Sn,{title:"Del ejerkode",onClose:()=>q(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Zy,{code:le}),f.jsx("code",{className:"owner-code-text",children:le}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void En(),children:"Kopiér ejerkode"}),f.jsxs("div",{className:`field ${de.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-owner-code",value:de,onChange:Oe=>Ne(Oe.target.value),autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:bn,disabled:!de.trim(),children:"Brug ejerkode i denne browser"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>J(Oe=>!Oe),children:re?"Stop scanning":"Scan QR-kode"}),be&&f.jsx("div",{className:"notice",children:be}),re&&f.jsx("video",{className:"owner-code-video",ref:ye,muted:!0,playsInline:!0})]})})]})}if(o==="application-settings")return f.jsx(Sn,{title:"Applikationsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dt,{label:"Version",value:es}),f.jsx(Dt,{label:"Bluetooth",value:Uo()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(Dt,{label:"Gemte enheder",value:String(h.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>X({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:x}),disabled:h.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(Sn,{title:"Om appen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(Dt,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(Dt,{label:"Version",value:es})]})});if(o==="application-help")return f.jsx(Sn,{title:"Hjælp til applikationen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const ge=u.filter(Oe=>Oe.type==="slider"),bn=!!(s!=null&&s.isOwnedByMe);async function En(Oe=!1){if(!s||!bn)return;const kn=Be(U,s.gridCols),Lt=Be(A,s.gridRows),Ln=Ky(u,kn,Lt);if(Ln&&!Oe){X({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Ln.requiredCols} kolonner og ${Ln.requiredRows} rækker. Det nye gitter er ${kn} × ${Lt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{En(!0)}});return}$(!0),await T(ae,O,O&&se,O&&Ee,kn,Lt),ee(kn),F(Lt),$(!1)}return f.jsx(Sn,{title:"Enhedsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dt,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),f.jsx(Dt,{label:"Ejer",value:Wy(s)}),bn?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Ge(!0),children:f.jsx("img",{src:Ii(ae),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:O?"":"active",onClick:()=>Z(!1),children:"Privat"}),f.jsx("button",{type:"button",className:O?"active":"",onClick:()=>Z(!0),children:"Offentlig"})]}),O&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:se?"":"active",onClick:()=>xe(!1),children:"Nej"}),f.jsx("button",{type:"button",className:se?"active":"",onClick:()=>xe(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>k(!1),children:"Nej"}),f.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>k(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Ui,max:Hi,value:Number.isNaN(U)?"":U,onChange:Oe=>ee(parseInt(Oe.target.value,10)),onBlur:()=>ee(Be(U,(s==null?void 0:s.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Ui,max:Hi,value:Number.isNaN(A)?"":A,onChange:Oe=>F(parseInt(Oe.target.value,10)),onBlur:()=>F(Be(A,(s==null?void 0:s.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>En(),disabled:Q,children:Q?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Dt,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),f.jsx(Dt,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(Dt,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),f.jsx(Dt,{label:"Kontroller",value:String(u.length)}),ge.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),ge.map(Oe=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:Oe.name}),f.jsxs("span",{children:[Oe.sliderMin??0," til ",Oe.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",Qy(Oe.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",d[Oe.name]??"Ikke brugt"]})]},Oe.name))]}),Re&&f.jsx(t_,{selected:ae,onSelect:Ve,onClose:()=>Ge(!1)})]})})}return f.jsx(Sn,{title:"Hjælp til enheden",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>P(!0),children:"Rediger layout"})]})})}function Ky(o,i,c){let s=0,u=0;for(const d of o)Vi(d)&&(s=Math.max(s,Math.ceil((d.centerX2+d.spanX)/2)+1),u=Math.max(u,Math.ceil((d.centerY2+d.spanY)/2)+1));return i<s||c<u?{requiredCols:s,requiredRows:u}:null}function Qy(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function Zy({code:o}){const i=L.useMemo(()=>Vy(o),[o]),c=i.length;return f.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[f.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((s,u)=>s.map((d,h)=>d?f.jsx("rect",{x:h+4,y:u+4,width:"1",height:"1",fill:"currentColor"},`${h}-${u}`):null))]})}function Wy(o){var i;return o?o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function Dt({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function Jy(){const o=ne(s=>s.confirmDialog),i=ne(s=>s.closeConfirm);if(!o)return null;function c(){o==null||o.onConfirm(),i()}return f.jsx(Sn,{title:o.title,onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:o.confirmLabel??"Fortsæt"})]})]})})}function ev(){const o=ne(s=>s.connectionLost),i=ne(s=>s.reconnectLostDevice),c=ne(s=>s.dismissConnectionLost);return o?f.jsx(Sn,{title:"Forbindelse afbrudt",onClose:c,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function nv(){const o=ne(c=>c.toast),i=ne(c=>c.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:i,children:o.message},o.id):null}function tv(){const o=ne(_=>_.screen),i=ne(_=>_.splashTarget),c=ne(_=>_.init),s=ne(_=>_.sideMenuOpen),u=ne(_=>_.debuggerOpen),[d,h]=L.useState(!1);return L.useEffect(()=>{c()},[c]),L.useEffect(()=>{if(s){h(!0);return}const _=setTimeout(()=>h(!1),140);return()=>clearTimeout(_)},[s]),f.jsxs("div",{className:"app",children:[o==="splash"&&i==="intro"&&f.jsx(ph,{}),o==="splash"&&i==="dashboard"&&f.jsx(hh,{}),o==="splash"&&f.jsx(Y0,{}),o==="intro"&&f.jsx(ph,{}),o==="dashboard"&&f.jsx(hh,{}),o==="connection"&&f.jsx(X0,{}),o==="create"&&f.jsx(F0,{}),o==="control"&&f.jsx(vb,{}),o==="ide"&&f.jsx(dy,{}),d&&f.jsx(Cy,{open:s}),f.jsx(Fy,{}),f.jsx(ev,{}),f.jsx(Jy,{}),u&&f.jsx(zy,{}),f.jsx(nv,{})]})}function rv(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(i=>{console.warn("Service worker registration failed:",i)})})}rv();Jg.createRoot(document.getElementById("root")).render(f.jsx(Za.StrictMode,{children:f.jsx(tv,{})}));
