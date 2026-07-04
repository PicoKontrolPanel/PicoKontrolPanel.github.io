var Bg=Object.defineProperty;var Lg=(o,a,c)=>a in o?Bg(o,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[a]=c;var ce=(o,a,c)=>Lg(o,typeof a!="symbol"?a+"":a,c);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function c(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(u){if(u.ep)return;u.ep=!0;const m=c(u);fetch(u.href,m)}})();function Pp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ef={exports:{}},qi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Ug(){if(Kh)return qi;Kh=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function c(s,u,m){var p=null;if(m!==void 0&&(p=""+m),u.key!==void 0&&(p=""+u.key),"key"in u){m={};for(var b in u)b!=="key"&&(m[b]=u[b])}else m=u;return u=m.ref,{$$typeof:o,type:s,key:p,ref:u!==void 0?u:null,props:m}}return qi.Fragment=a,qi.jsx=c,qi.jsxs=c,qi}var Ph;function Hg(){return Ph||(Ph=1,ef.exports=Ug()),ef.exports}var f=Hg(),nf={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function Gg(){if(Fh)return be;Fh=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),T=Symbol.iterator;function X(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,G={};function I(E,L,Z){this.props=E,this.context=L,this.refs=G,this.updater=Z||P}I.prototype.isReactComponent={},I.prototype.setState=function(E,L){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,L,"setState")},I.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function le(){}le.prototype=I.prototype;function fe(E,L,Z){this.props=E,this.context=L,this.refs=G,this.updater=Z||P}var ie=fe.prototype=new le;ie.constructor=fe,te(ie,I.prototype),ie.isPureReactComponent=!0;var de=Array.isArray;function Ne(){}var ee={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function ve(E,L,Z){var j=Z.ref;return{$$typeof:o,type:E,key:L,ref:j!==void 0?j:null,props:Z}}function ge(E,L){return ve(E.type,L,E.props)}function ye(E){return typeof E=="object"&&E!==null&&E.$$typeof===o}function re(E){var L={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Z){return L[Z]})}var Fe=/\/+/g;function De(E,L){return typeof E=="object"&&E!==null&&E.key!=null?re(""+E.key):L.toString(36)}function Qe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Ne,Ne):(E.status="pending",E.then(function(L){E.status==="pending"&&(E.status="fulfilled",E.value=L)},function(L){E.status==="pending"&&(E.status="rejected",E.reason=L)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function C(E,L,Z,j,K){var F=typeof E;(F==="undefined"||F==="boolean")&&(E=null);var $=!1;if(E===null)$=!0;else switch(F){case"bigint":case"string":case"number":$=!0;break;case"object":switch(E.$$typeof){case o:case a:$=!0;break;case x:return $=E._init,C($(E._payload),L,Z,j,K)}}if($)return K=K(E),$=j===""?"."+De(E,0):j,de(K)?(Z="",$!=null&&(Z=$.replace(Fe,"$&/")+"/"),C(K,L,Z,"",function(Yn){return Yn})):K!=null&&(ye(K)&&(K=ge(K,Z+(K.key==null||E&&E.key===K.key?"":(""+K.key).replace(Fe,"$&/")+"/")+$)),L.push(K)),1;$=0;var Ue=j===""?".":j+":";if(de(E))for(var Ce=0;Ce<E.length;Ce++)j=E[Ce],F=Ue+De(j,Ce),$+=C(j,L,Z,F,K);else if(Ce=X(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(j=E.next()).done;)j=j.value,F=Ue+De(j,Ce++),$+=C(j,L,Z,F,K);else if(F==="object"){if(typeof E.then=="function")return C(Qe(E),L,Z,j,K);throw L=String(E),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return $}function Q(E,L,Z){if(E==null)return E;var j=[],K=0;return C(E,j,"","",function(F){return L.call(Z,F,K++)}),j}function ue(E){if(E._status===-1){var L=E._result;L=L(),L.then(function(Z){(E._status===0||E._status===-1)&&(E._status=1,E._result=Z)},function(Z){(E._status===0||E._status===-1)&&(E._status=2,E._result=Z)}),E._status===-1&&(E._status=0,E._result=L)}if(E._status===1)return E._result.default;throw E._result}var xe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Ee={map:Q,forEach:function(E,L,Z){Q(E,function(){L.apply(this,arguments)},Z)},count:function(E){var L=0;return Q(E,function(){L++}),L},toArray:function(E){return Q(E,function(L){return L})||[]},only:function(E){if(!ye(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return be.Activity=N,be.Children=Ee,be.Component=I,be.Fragment=c,be.Profiler=u,be.PureComponent=fe,be.StrictMode=s,be.Suspense=v,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,be.__COMPILER_RUNTIME={__proto__:null,c:function(E){return ee.H.useMemoCache(E)}},be.cache=function(E){return function(){return E.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(E,L,Z){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var j=te({},E.props),K=E.key;if(L!=null)for(F in L.key!==void 0&&(K=""+L.key),L)!W.call(L,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&L.ref===void 0||(j[F]=L[F]);var F=arguments.length-2;if(F===1)j.children=Z;else if(1<F){for(var $=Array(F),Ue=0;Ue<F;Ue++)$[Ue]=arguments[Ue+2];j.children=$}return ve(E.type,K,j)},be.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:m,_context:E},E},be.createElement=function(E,L,Z){var j,K={},F=null;if(L!=null)for(j in L.key!==void 0&&(F=""+L.key),L)W.call(L,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(K[j]=L[j]);var $=arguments.length-2;if($===1)K.children=Z;else if(1<$){for(var Ue=Array($),Ce=0;Ce<$;Ce++)Ue[Ce]=arguments[Ce+2];K.children=Ue}if(E&&E.defaultProps)for(j in $=E.defaultProps,$)K[j]===void 0&&(K[j]=$[j]);return ve(E,F,K)},be.createRef=function(){return{current:null}},be.forwardRef=function(E){return{$$typeof:b,render:E}},be.isValidElement=ye,be.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:ue}},be.memo=function(E,L){return{$$typeof:y,type:E,compare:L===void 0?null:L}},be.startTransition=function(E){var L=ee.T,Z={};ee.T=Z;try{var j=E(),K=ee.S;K!==null&&K(Z,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(Ne,xe)}catch(F){xe(F)}finally{L!==null&&Z.types!==null&&(L.types=Z.types),ee.T=L}},be.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},be.use=function(E){return ee.H.use(E)},be.useActionState=function(E,L,Z){return ee.H.useActionState(E,L,Z)},be.useCallback=function(E,L){return ee.H.useCallback(E,L)},be.useContext=function(E){return ee.H.useContext(E)},be.useDebugValue=function(){},be.useDeferredValue=function(E,L){return ee.H.useDeferredValue(E,L)},be.useEffect=function(E,L){return ee.H.useEffect(E,L)},be.useEffectEvent=function(E){return ee.H.useEffectEvent(E)},be.useId=function(){return ee.H.useId()},be.useImperativeHandle=function(E,L,Z){return ee.H.useImperativeHandle(E,L,Z)},be.useInsertionEffect=function(E,L){return ee.H.useInsertionEffect(E,L)},be.useLayoutEffect=function(E,L){return ee.H.useLayoutEffect(E,L)},be.useMemo=function(E,L){return ee.H.useMemo(E,L)},be.useOptimistic=function(E,L){return ee.H.useOptimistic(E,L)},be.useReducer=function(E,L,Z){return ee.H.useReducer(E,L,Z)},be.useRef=function(E){return ee.H.useRef(E)},be.useState=function(E){return ee.H.useState(E)},be.useSyncExternalStore=function(E,L,Z){return ee.H.useSyncExternalStore(E,L,Z)},be.useTransition=function(){return ee.H.useTransition()},be.version="19.2.7",be}var Qh;function Af(){return Qh||(Qh=1,nf.exports=Gg()),nf.exports}var U=Af();const Zi=Pp(U);var tf={exports:{}},Ii={},lf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function Vg(){return Zh||(Zh=1,(function(o){function a(C,Q){var ue=C.length;C.push(Q);e:for(;0<ue;){var xe=ue-1>>>1,Ee=C[xe];if(0<u(Ee,Q))C[xe]=Q,C[ue]=Ee,ue=xe;else break e}}function c(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var Q=C[0],ue=C.pop();if(ue!==Q){C[0]=ue;e:for(var xe=0,Ee=C.length,E=Ee>>>1;xe<E;){var L=2*(xe+1)-1,Z=C[L],j=L+1,K=C[j];if(0>u(Z,ue))j<Ee&&0>u(K,Z)?(C[xe]=K,C[j]=ue,xe=j):(C[xe]=Z,C[L]=ue,xe=L);else if(j<Ee&&0>u(K,ue))C[xe]=K,C[j]=ue,xe=j;else break e}}return Q}function u(C,Q){var ue=C.sortIndex-Q.sortIndex;return ue!==0?ue:C.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var p=Date,b=p.now();o.unstable_now=function(){return p.now()-b}}var v=[],y=[],x=1,N=null,T=3,X=!1,P=!1,te=!1,G=!1,I=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function ie(C){for(var Q=c(y);Q!==null;){if(Q.callback===null)s(y);else if(Q.startTime<=C)s(y),Q.sortIndex=Q.expirationTime,a(v,Q);else break;Q=c(y)}}function de(C){if(te=!1,ie(C),!P)if(c(v)!==null)P=!0,Ne||(Ne=!0,re());else{var Q=c(y);Q!==null&&Qe(de,Q.startTime-C)}}var Ne=!1,ee=-1,W=5,ve=-1;function ge(){return G?!0:!(o.unstable_now()-ve<W)}function ye(){if(G=!1,Ne){var C=o.unstable_now();ve=C;var Q=!0;try{e:{P=!1,te&&(te=!1,le(ee),ee=-1),X=!0;var ue=T;try{n:{for(ie(C),N=c(v);N!==null&&!(N.expirationTime>C&&ge());){var xe=N.callback;if(typeof xe=="function"){N.callback=null,T=N.priorityLevel;var Ee=xe(N.expirationTime<=C);if(C=o.unstable_now(),typeof Ee=="function"){N.callback=Ee,ie(C),Q=!0;break n}N===c(v)&&s(v),ie(C)}else s(v);N=c(v)}if(N!==null)Q=!0;else{var E=c(y);E!==null&&Qe(de,E.startTime-C),Q=!1}}break e}finally{N=null,T=ue,X=!1}Q=void 0}}finally{Q?re():Ne=!1}}}var re;if(typeof fe=="function")re=function(){fe(ye)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,De=Fe.port2;Fe.port1.onmessage=ye,re=function(){De.postMessage(null)}}else re=function(){I(ye,0)};function Qe(C,Q){ee=I(function(){C(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(C){C.callback=null},o.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_next=function(C){switch(T){case 1:case 2:case 3:var Q=3;break;default:Q=T}var ue=T;T=Q;try{return C()}finally{T=ue}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(C,Q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var ue=T;T=C;try{return Q()}finally{T=ue}},o.unstable_scheduleCallback=function(C,Q,ue){var xe=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?xe+ue:xe):ue=xe,C){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ue+Ee,C={id:x++,callback:Q,priorityLevel:C,startTime:ue,expirationTime:Ee,sortIndex:-1},ue>xe?(C.sortIndex=ue,a(y,C),c(v)===null&&C===c(y)&&(te?(le(ee),ee=-1):te=!0,Qe(de,ue-xe))):(C.sortIndex=Ee,a(v,C),P||X||(P=!0,Ne||(Ne=!0,re()))),C},o.unstable_shouldYield=ge,o.unstable_wrapCallback=function(C){var Q=T;return function(){var ue=T;T=Q;try{return C.apply(this,arguments)}finally{T=ue}}}})(rf)),rf}var Wh;function Yg(){return Wh||(Wh=1,lf.exports=Vg()),lf.exports}var af={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function qg(){if(Jh)return Vn;Jh=1;var o=Af();function a(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(a(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(v,y,x){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:N==null?null:""+N,children:v,containerInfo:y,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vn.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(a(299));return m(v,y,null,x)},Vn.flushSync=function(v){var y=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=y,s.p=x,s.d.f()}},Vn.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},Vn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Vn.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,N=b(x,y.crossOrigin),T=typeof y.integrity=="string"?y.integrity:void 0,X=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:N,integrity:T,fetchPriority:X}):x==="script"&&s.d.X(v,{crossOrigin:N,integrity:T,fetchPriority:X,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Vn.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=b(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},Vn.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,N=b(x,y.crossOrigin);s.d.L(v,x,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Vn.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=b(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},Vn.requestFormReset=function(v){s.d.r(v)},Vn.unstable_batchedUpdates=function(v,y){return v(y)},Vn.useFormState=function(v,y,x){return p.H.useFormState(v,y,x)},Vn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Vn.version="19.2.7",Vn}var ep;function Ig(){if(ep)return af.exports;ep=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),af.exports=qg(),af.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function $g(){if(np)return Ii;np=1;var o=Yg(),a=Af(),c=Ig();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function p(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(m(e)!==e)throw Error(s(188))}function y(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,l=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return v(r),e;if(i===l)return v(r),n;i=i.sibling}throw Error(s(188))}if(t.return!==l.return)t=r,l=i;else{for(var h=!1,_=r.child;_;){if(_===t){h=!0,t=r,l=i;break}if(_===l){h=!0,l=r,t=i;break}_=_.sibling}if(!h){for(_=i.child;_;){if(_===t){h=!0,t=i,l=r;break}if(_===l){h=!0,l=i,t=r;break}_=_.sibling}if(!h)throw Error(s(189))}}if(t.alternate!==l)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var N=Object.assign,T=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case I:return"Profiler";case G:return"StrictMode";case de:return"Suspense";case Ne:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case fe:return e.displayName||"Context";case le:return(e._context.displayName||"Context")+".Consumer";case ie:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:De(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return De(e(n))}catch{}}return null}var Qe=Array.isArray,C=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},xe=[],Ee=-1;function E(e){return{current:e}}function L(e){0>Ee||(e.current=xe[Ee],xe[Ee]=null,Ee--)}function Z(e,n){Ee++,xe[Ee]=e.current,e.current=n}var j=E(null),K=E(null),F=E(null),$=E(null);function Ue(e,n){switch(Z(F,n),Z(K,e),Z(j,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_h(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_h(n),e=gh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(j),Z(j,e)}function Ce(){L(j),L(K),L(F)}function Yn(e){e.memoizedState!==null&&Z($,e);var n=j.current,t=gh(n,e.type);n!==t&&(Z(K,e),Z(j,t))}function $t(e){K.current===e&&(L(j),L(K)),$.current===e&&(L($),Hi._currentValue=ue)}var _e,bn;function En(e){if(_e===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);_e=n&&n[1]||"",bn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+bn}var je=!1;function kn(e,n){if(!e||je)return"";je=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(B){var O=B}Reflect.construct(e,[],q)}else{try{q.call()}catch(B){O=B}e.call(q.prototype)}}else{try{throw Error()}catch(B){O=B}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(B){if(B&&O&&typeof B.stack=="string")return[B.stack,O.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),h=i[0],_=i[1];if(h&&_){var w=h.split(`
`),A=_.split(`
`);for(r=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(l===w.length||r===A.length)for(l=w.length-1,r=A.length-1;1<=l&&0<=r&&w[l]!==A[r];)r--;for(;1<=l&&0<=r;l--,r--)if(w[l]!==A[r]){if(l!==1||r!==1)do if(l--,r--,0>r||w[l]!==A[r]){var H=`
`+w[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=r);break}}}finally{je=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?En(t):""}function Bt(e,n){switch(e.tag){case 26:case 27:case 5:return En(e.type);case 16:return En("Lazy");case 13:return e.child!==n&&n!==null?En("Suspense Fallback"):En("Suspense");case 19:return En("SuspenseList");case 0:case 15:return kn(e.type,!1);case 11:return kn(e.type.render,!1);case 1:return kn(e.type,!0);case 31:return En("Activity");default:return""}}function Bn(e){try{var n="",t=null;do n+=Bt(e,t),t=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Al=Object.prototype.hasOwnProperty,Dl=o.unstable_scheduleCallback,yt=o.unstable_cancelCallback,Fr=o.unstable_shouldYield,jl=o.unstable_requestPaint,yn=o.unstable_now,dr=o.unstable_getCurrentPriorityLevel,mr=o.unstable_ImmediatePriority,Ia=o.unstable_UserBlockingPriority,hr=o.unstable_NormalPriority,Fn=o.unstable_LowPriority,lt=o.unstable_IdlePriority,Xt=o.log,Qr=o.unstable_setDisableYieldValue,pr=null,vn=null;function rt(e){if(typeof Xt=="function"&&Qr(e),vn&&typeof vn.setStrictMode=="function")try{vn.setStrictMode(pr,e)}catch{}}var Rn=Math.clz32?Math.clz32:ll,Ol=Math.log,Cl=Math.LN2;function ll(e){return e>>>=0,e===0?32:31-(Ol(e)/Cl|0)|0}var Kt=256,qn=262144,Ke=4194304;function Tn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mn(e,n,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,i=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var _=l&134217727;return _!==0?(l=_&~i,l!==0?r=Tn(l):(h&=_,h!==0?r=Tn(h):t||(t=_&~e,t!==0&&(r=Tn(t))))):(_=l&~i,_!==0?r=Tn(_):h!==0?r=Tn(h):t||(t=l&~e,t!==0&&(r=Tn(t)))),r===0?0:n!==0&&n!==r&&(n&i)===0&&(i=r&-r,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:r}function Ln(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Go(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $a(){var e=Ke;return Ke<<=1,(Ke&62914560)===0&&(Ke=4194304),e}function Pt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _r(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rl(e,n,t,l,r,i){var h=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var _=e.entanglements,w=e.expirationTimes,A=e.hiddenUpdates;for(t=h&~t;0<t;){var H=31-Rn(t),q=1<<H;_[H]=0,w[H]=-1;var O=A[H];if(O!==null)for(A[H]=null,H=0;H<O.length;H++){var B=O[H];B!==null&&(B.lane&=-536870913)}t&=~q}l!==0&&ls(e,l,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(h&~n))}function ls(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Rn(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Zr(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-Rn(t),r=1<<l;r&n|e[l]&n&&(e[l]|=n),t&=~r}}function rs(e,n){var t=n&-n;return t=(t&42)!==0?1:zl(t),(t&(e.suspendedLanes|n))!==0?0:t}function zl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function on(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Gh(e.type))}function Xa(e,n){var t=Q.p;try{return Q.p=e,n()}finally{Q.p=t}}var at=Math.random().toString(36).slice(2),cn="__reactFiber$"+at,un="__reactProps$"+at,Mn="__reactContainer$"+at,Lt="__reactEvents$"+at,gr="__reactListeners$"+at,Ut="__reactHandles$"+at,al="__reactResources$"+at,Ht="__reactMarker$"+at;function Gt(e){delete e[cn],delete e[un],delete e[Lt],delete e[gr],delete e[Ut]}function Ft(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Eh(e);e!==null;){if(t=e[cn])return t;e=Eh(e)}return n}e=t,t=e.parentNode}return null}function In(e){if(e=e[cn]||e[Mn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Vt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Qn(e){var n=e[al];return n||(n=e[al]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ze(e){e[Ht]=!0}var il=new Set,Ka={};function it(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Ka[e]=n,e=0;e<n.length;e++)il.add(n[e])}var he=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wr={},as={};function Vo(e){return Al.call(as,e)?!0:Al.call(Wr,e)?!1:he.test(e)?as[e]=!0:(Wr[e]=!0,!1)}function Jr(e,n,t){if(Vo(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function ea(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function $n(e,n,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+l)}}function xn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ot(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Pa(e,n,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,i=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(h){t=""+h,i.call(this,h)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(h){t=""+h},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Un(e){if(!e._valueTracker){var n=ot(e)?"checked":"value";e._valueTracker=Pa(e,n,""+e[n])}}function is(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=ot(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ss=/[\n"\\]/g;function Hn(e){return e.replace(ss,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Y(e,n,t,l,r,i,h,_){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),n!=null?h==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xn(n)):e.value!==""+xn(n)&&(e.value=""+xn(n)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),n!=null?Fa(e,h,xn(n)):t!=null?Fa(e,h,xn(t)):l!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+xn(_):e.removeAttribute("name")}function os(e,n,t,l,r,i,h,_){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){Un(e);return}t=t!=null?""+xn(t):"",n=n!=null?""+xn(n):t,_||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=_?e.checked:!!l,e.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Un(e)}function Fa(e,n,t){n==="number"&&na(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function xt(e,n,t,l){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&l&&(e[t].defaultSelected=!0)}else{for(t=""+xn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Qa(e,n,t){if(n!=null&&(n=""+xn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+xn(t):""}function br(e,n,t,l){if(n==null){if(l!=null){if(t!=null)throw Error(s(92));if(Qe(l)){if(1<l.length)throw Error(s(93));l=l[0]}t=l}t==null&&(t=""),n=t}t=xn(n),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),Un(e)}function nn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var cs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bl(e,n,t){var l=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,t):typeof t!="number"||t===0||cs.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function yr(e,n,t){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&t[r]!==l&&Bl(e,r,l)}else for(var i in n)n.hasOwnProperty(i)&&Bl(e,i,n[i])}function Za(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),us=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return us.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tn(){}var sl=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,St=null;function fs(e){var n=In(e);if(n&&(e=n.stateNode)){var t=e[un]||null;e:switch(e=n.stateNode,n.type){case"input":if(Y(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Hn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var r=l[un]||null;if(!r)throw Error(s(90));Y(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)l=t[n],l.form===e.form&&is(l)}break e;case"textarea":Qa(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&xt(e,!!t.multiple,n,!1)}}}var ta=!1;function vr(e,n,t){if(ta)return e(n,t);ta=!0;try{var l=e(n);return l}finally{if(ta=!1,(Ul!==null||St!==null)&&(ro(),Ul&&(n=Ul,e=St,St=Ul=null,fs(n),e)))for(n=0;n<e.length;n++)fs(e[n])}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var l=t[un]||null;if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=!1;if(wt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{Ja=!1}var Zt=null,ct=null,ln=null;function ei(){if(ln)return ln;var e,n=ct,t=n.length,l,r="value"in Zt?Zt.value:Zt.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var h=t-e;for(l=1;l<=h&&n[t-l]===r[i-l];l++);return ln=r.slice(e,1<l?1-l:void 0)}function Wt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ni(){return!1}function An(e){function n(t,l,r,i,h){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=i,this.target=h,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(t=e[_],this[_]=t?t(i):i[_]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:ni,this.isPropagationStopped=ni,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),n}var ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=An(ol),wr=N({},ol,{view:0,detail:0}),ds=An(wr),ra,Er,kr,Nr=N({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(ra=e.screenX-kr.screenX,Er=e.screenY-kr.screenY):Er=ra=0,kr=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:Er}}),ti=An(Nr),ms=N({},Nr,{dataTransfer:0}),Yo=An(ms),qo=N({},wr,{relatedTarget:0}),li=An(qo),Io=N({},ol,{animationName:0,elapsedTime:0,pseudoElement:0}),$o=An(Io),Xo=N({},ol,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ko=An(Xo),Po=N({},ol,{data:0}),hs=An(Po),Fo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rr(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zo[e])?!!n[e]:!1}function ri(){return Rr}var Wo=N({},wr,{key:function(e){if(e.key){var n=Fo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Wt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ps=An(Wo),Jo=N({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ai=An(Jo),ec=N({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),nc=An(ec),_s=N({},ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),tc=An(_s),lc=N({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rc=An(lc),ac=N({},ol,{newState:0,oldState:0}),ic=An(ac),sc=[9,13,27,32],Tr=wt&&"CompositionEvent"in window,Gn=null;wt&&"documentMode"in document&&(Gn=document.documentMode);var gs=wt&&"TextEvent"in window&&!Gn,bs=wt&&(!Tr||Gn&&8<Gn&&11>=Gn),ys=" ",vs=!1;function Hl(e,n){switch(e){case"keyup":return sc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cl=!1;function ii(e,n){switch(e){case"compositionend":return Mr(n);case"keypress":return n.which!==32?null:(vs=!0,ys);case"textInput":return e=n.data,e===ys&&vs?null:e;default:return null}}function xs(e,n){if(cl)return e==="compositionend"||!Tr&&Hl(e,n)?(e=ei(),ln=ct=Zt=null,cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bs&&n.locale!=="ko"?null:n.data;default:return null}}var oc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!oc[e.type]:n==="textarea"}function d(e,n,t,l){Ul?St?St.push(l):St=[l]:Ul=l,n=fo(n,"onChange"),0<n.length&&(t=new la("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var g=null,S=null;function z(e){uh(e,0)}function D(e){var n=Vt(e);if(is(n))return e}function se(e,n){if(e==="change")return n}var Se=!1;if(wt){var We;if(wt){var Ge="oninput"in document;if(!Ge){var Xn=document.createElement("div");Xn.setAttribute("oninput","return;"),Ge=typeof Xn.oninput=="function"}We=Ge}else We=!1;Se=We&&(!document.documentMode||9<document.documentMode)}function ul(){g&&(g.detachEvent("onpropertychange",Ve),S=g=null)}function Ve(e){if(e.propertyName==="value"&&D(S)){var n=[];d(n,S,e,Wa(e)),vr(z,n)}}function fl(e,n,t){e==="focusin"?(ul(),g=n,S=t,g.attachEvent("onpropertychange",Ve)):e==="focusout"&&ul()}function si(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return D(S)}function Ar(e,n){if(e==="click")return D(n)}function Gl(e,n){if(e==="input"||e==="change")return D(n)}function oi(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dn=typeof Object.is=="function"?Object.is:oi;function dl(e,n){if(Dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!Al.call(n,r)||!Dn(e[r],n[r]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vl(e,n){var t=aa(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=aa(t)}}function ws(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ws(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ci(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=na(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=na(e.document)}return n}function cc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var p_=wt&&"documentMode"in document&&11>=document.documentMode,ia=null,uc=null,ui=null,fc=!1;function Uf(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fc||ia==null||ia!==na(l)||(l=ia,"selectionStart"in l&&cc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ui&&dl(ui,l)||(ui=l,l=fo(uc,"onSelect"),0<l.length&&(n=new la("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=ia)))}function Dr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var sa={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},dc={},Hf={};wt&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function jr(e){if(dc[e])return dc[e];if(!sa[e])return e;var n=sa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hf)return dc[e]=n[t];return e}var Gf=jr("animationend"),Vf=jr("animationiteration"),Yf=jr("animationstart"),__=jr("transitionrun"),g_=jr("transitionstart"),b_=jr("transitioncancel"),qf=jr("transitionend"),If=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function Yt(e,n){If.set(e,n),it(n,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],oa=0,hc=0;function ks(){for(var e=oa,n=hc=oa=0;n<e;){var t=Et[n];Et[n++]=null;var l=Et[n];Et[n++]=null;var r=Et[n];Et[n++]=null;var i=Et[n];if(Et[n++]=null,l!==null&&r!==null){var h=l.pending;h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r}i!==0&&$f(t,r,i)}}function Ns(e,n,t,l){Et[oa++]=e,Et[oa++]=n,Et[oa++]=t,Et[oa++]=l,hc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pc(e,n,t,l){return Ns(e,n,t,l),Rs(e)}function Or(e,n){return Ns(e,null,null,n),Rs(e)}function $f(e,n,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var r=!1,i=e.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&n!==null&&(r=31-Rn(t),e=i.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=t|536870912),i):null}function Rs(e){if(50<ji)throw ji=0,Eu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ca={};function y_(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,n,t,l){return new y_(e,n,t,l)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ml(e,n){var t=e.alternate;return t===null?(t=ut(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Xf(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ts(e,n,t,l,r,i){var h=0;if(l=e,typeof e=="function")_c(e)&&(h=1);else if(typeof e=="string")h=Eg(e,t,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=ut(31,t,n,r),e.elementType=ve,e.lanes=i,e;case te:return Cr(t.children,r,i,n);case G:h=8,r|=24;break;case I:return e=ut(12,t,n,r|2),e.elementType=I,e.lanes=i,e;case de:return e=ut(13,t,n,r),e.elementType=de,e.lanes=i,e;case Ne:return e=ut(19,t,n,r),e.elementType=Ne,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:h=10;break e;case le:h=9;break e;case ie:h=11;break e;case ee:h=14;break e;case W:h=16,l=null;break e}h=29,t=Error(s(130,e===null?"null":typeof e,"")),l=null}return n=ut(h,t,n,r),n.elementType=e,n.type=l,n.lanes=i,n}function Cr(e,n,t,l){return e=ut(7,e,l,n),e.lanes=t,e}function gc(e,n,t){return e=ut(6,e,null,n),e.lanes=t,e}function Kf(e){var n=ut(18,null,null,0);return n.stateNode=e,n}function bc(e,n,t){return n=ut(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pf=new WeakMap;function kt(e,n){if(typeof e=="object"&&e!==null){var t=Pf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Bn(n)},Pf.set(e,n),n)}return{value:e,source:n,stack:Bn(n)}}var ua=[],fa=0,Ms=null,fi=0,Nt=[],Rt=0,Yl=null,Jt=1,el="";function hl(e,n){ua[fa++]=fi,ua[fa++]=Ms,Ms=e,fi=n}function Ff(e,n,t){Nt[Rt++]=Jt,Nt[Rt++]=el,Nt[Rt++]=Yl,Yl=e;var l=Jt;e=el;var r=32-Rn(l)-1;l&=~(1<<r),t+=1;var i=32-Rn(n)+r;if(30<i){var h=r-r%5;i=(l&(1<<h)-1).toString(32),l>>=h,r-=h,Jt=1<<32-Rn(n)+r|t<<r|l,el=i+e}else Jt=1<<i|t<<r|l,el=e}function yc(e){e.return!==null&&(hl(e,1),Ff(e,1,0))}function vc(e){for(;e===Ms;)Ms=ua[--fa],ua[fa]=null,fi=ua[--fa],ua[fa]=null;for(;e===Yl;)Yl=Nt[--Rt],Nt[Rt]=null,el=Nt[--Rt],Nt[Rt]=null,Jt=Nt[--Rt],Nt[Rt]=null}function Qf(e,n){Nt[Rt++]=Jt,Nt[Rt++]=el,Nt[Rt++]=Yl,Jt=n.id,el=n.overflow,Yl=e}var jn=null,Je=null,Oe=!1,ql=null,Tt=!1,xc=Error(s(519));function Il(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw di(kt(n,e)),xc}function Zf(e){var n=e.stateNode,t=e.type,l=e.memoizedProps;switch(n[cn]=e,n[un]=l,t){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(t=0;t<Ci.length;t++)Te(Ci[t],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),os(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),br(n,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||l.suppressHydrationWarning===!0||hh(n.textContent,t)?(l.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),l.onScroll!=null&&Te("scroll",n),l.onScrollEnd!=null&&Te("scrollend",n),l.onClick!=null&&(n.onclick=tn),n=!0):n=!1,n||Il(e,!0)}function Wf(e){for(jn=e.return;jn;)switch(jn.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:jn=jn.return}}function da(e){if(e!==jn)return!1;if(!Oe)return Wf(e),Oe=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Hu(e.type,e.memoizedProps)),t=!t),t&&Je&&Il(e),Wf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=wh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=wh(e)}else n===27?(n=Je,rr(e.type)?(e=Iu,Iu=null,Je=e):Je=n):Je=jn?At(e.stateNode.nextSibling):null;return!0}function zr(){Je=jn=null,Oe=!1}function Sc(){var e=ql;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),ql=null),e}function di(e){ql===null?ql=[e]:ql.push(e)}var wc=E(null),Br=null,pl=null;function $l(e,n,t){Z(wc,n._currentValue),n._currentValue=t}function _l(e){e._currentValue=wc.current,L(wc)}function Ec(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function kc(e,n,t,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var h=r.child;i=i.firstContext;e:for(;i!==null;){var _=i;i=r;for(var w=0;w<n.length;w++)if(_.context===n[w]){i.lanes|=t,_=i.alternate,_!==null&&(_.lanes|=t),Ec(i.return,t,e),l||(h=null);break e}i=_.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(s(341));h.lanes|=t,i=h.alternate,i!==null&&(i.lanes|=t),Ec(h,t,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function ma(e,n,t,l){e=null;for(var r=n,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var _=r.type;Dn(r.pendingProps.value,h.value)||(e!==null?e.push(_):e=[_])}}else if(r===$.current){if(h=r.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Hi):e=[Hi])}r=r.return}e!==null&&kc(n,e,t,l),n.flags|=262144}function As(e){for(e=e.firstContext;e!==null;){if(!Dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Lr(e){Br=e,pl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Jf(Br,e)}function Ds(e,n){return Br===null&&Lr(e),Jf(e,n)}function Jf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},pl===null){if(e===null)throw Error(s(308));pl=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else pl=pl.next=n;return t}var v_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},x_=o.unstable_scheduleCallback,S_=o.unstable_NormalPriority,hn={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nc(){return{controller:new v_,data:new Map,refCount:0}}function mi(e){e.refCount--,e.refCount===0&&x_(S_,function(){e.controller.abort()})}var hi=null,Rc=0,ha=0,pa=null;function w_(e,n){if(hi===null){var t=hi=[];Rc=0,ha=Au(),pa={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Rc++,n.then(ed,ed),n}function ed(){if(--Rc===0&&hi!==null){pa!==null&&(pa.status="fulfilled");var e=hi;hi=null,ha=0,pa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function E_(e,n){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var nd=C.S;C.S=function(e,n){Um=yn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&w_(e,n),nd!==null&&nd(e,n)};var Ur=E(null);function Tc(){var e=Ur.current;return e!==null?e:Pe.pooledCache}function js(e,n){n===null?Z(Ur,Ur.current):Z(Ur,n.pool)}function td(){var e=Tc();return e===null?null:{parent:hn._currentValue,pool:e}}var _a=Error(s(460)),Mc=Error(s(474)),Os=Error(s(542)),Cs={then:function(){}};function ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(tn,tn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,id(e),e;default:if(typeof n.status=="string")n.then(tn,tn);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,id(e),e}throw Gr=n,_a}}function Hr(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Gr=t,_a):t}}var Gr=null;function ad(){if(Gr===null)throw Error(s(459));var e=Gr;return Gr=null,e}function id(e){if(e===_a||e===Os)throw Error(s(483))}var ga=null,pi=0;function zs(e){var n=pi;return pi+=1,ga===null&&(ga=[]),rd(ga,e,n)}function _i(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Bs(e,n){throw n.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sd(e){function n(R,k){if(e){var M=R.deletions;M===null?(R.deletions=[k],R.flags|=16):M.push(k)}}function t(R,k){if(!e)return null;for(;k!==null;)n(R,k),k=k.sibling;return null}function l(R){for(var k=new Map;R!==null;)R.key!==null?k.set(R.key,R):k.set(R.index,R),R=R.sibling;return k}function r(R,k){return R=ml(R,k),R.index=0,R.sibling=null,R}function i(R,k,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<k?(R.flags|=67108866,k):M):(R.flags|=67108866,k)):(R.flags|=1048576,k)}function h(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function _(R,k,M,V){return k===null||k.tag!==6?(k=gc(M,R.mode,V),k.return=R,k):(k=r(k,M),k.return=R,k)}function w(R,k,M,V){var me=M.type;return me===te?H(R,k,M.props.children,V,M.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&Hr(me)===k.type)?(k=r(k,M.props),_i(k,M),k.return=R,k):(k=Ts(M.type,M.key,M.props,null,R.mode,V),_i(k,M),k.return=R,k)}function A(R,k,M,V){return k===null||k.tag!==4||k.stateNode.containerInfo!==M.containerInfo||k.stateNode.implementation!==M.implementation?(k=bc(M,R.mode,V),k.return=R,k):(k=r(k,M.children||[]),k.return=R,k)}function H(R,k,M,V,me){return k===null||k.tag!==7?(k=Cr(M,R.mode,V,me),k.return=R,k):(k=r(k,M),k.return=R,k)}function q(R,k,M){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=gc(""+k,R.mode,M),k.return=R,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case X:return M=Ts(k.type,k.key,k.props,null,R.mode,M),_i(M,k),M.return=R,M;case P:return k=bc(k,R.mode,M),k.return=R,k;case W:return k=Hr(k),q(R,k,M)}if(Qe(k)||re(k))return k=Cr(k,R.mode,M,null),k.return=R,k;if(typeof k.then=="function")return q(R,zs(k),M);if(k.$$typeof===fe)return q(R,Ds(R,k),M);Bs(R,k)}return null}function O(R,k,M,V){var me=k!==null?k.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return me!==null?null:_(R,k,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return M.key===me?w(R,k,M,V):null;case P:return M.key===me?A(R,k,M,V):null;case W:return M=Hr(M),O(R,k,M,V)}if(Qe(M)||re(M))return me!==null?null:H(R,k,M,V,null);if(typeof M.then=="function")return O(R,k,zs(M),V);if(M.$$typeof===fe)return O(R,k,Ds(R,M),V);Bs(R,M)}return null}function B(R,k,M,V,me){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return R=R.get(M)||null,_(k,R,""+V,me);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return R=R.get(V.key===null?M:V.key)||null,w(k,R,V,me);case P:return R=R.get(V.key===null?M:V.key)||null,A(k,R,V,me);case W:return V=Hr(V),B(R,k,M,V,me)}if(Qe(V)||re(V))return R=R.get(M)||null,H(k,R,V,me,null);if(typeof V.then=="function")return B(R,k,M,zs(V),me);if(V.$$typeof===fe)return B(R,k,M,Ds(k,V),me);Bs(k,V)}return null}function ae(R,k,M,V){for(var me=null,Be=null,oe=k,ke=k=0,Ae=null;oe!==null&&ke<M.length;ke++){oe.index>ke?(Ae=oe,oe=null):Ae=oe.sibling;var Le=O(R,oe,M[ke],V);if(Le===null){oe===null&&(oe=Ae);break}e&&oe&&Le.alternate===null&&n(R,oe),k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le,oe=Ae}if(ke===M.length)return t(R,oe),Oe&&hl(R,ke),me;if(oe===null){for(;ke<M.length;ke++)oe=q(R,M[ke],V),oe!==null&&(k=i(oe,k,ke),Be===null?me=oe:Be.sibling=oe,Be=oe);return Oe&&hl(R,ke),me}for(oe=l(oe);ke<M.length;ke++)Ae=B(oe,R,ke,M[ke],V),Ae!==null&&(e&&Ae.alternate!==null&&oe.delete(Ae.key===null?ke:Ae.key),k=i(Ae,k,ke),Be===null?me=Ae:Be.sibling=Ae,Be=Ae);return e&&oe.forEach(function(cr){return n(R,cr)}),Oe&&hl(R,ke),me}function pe(R,k,M,V){if(M==null)throw Error(s(151));for(var me=null,Be=null,oe=k,ke=k=0,Ae=null,Le=M.next();oe!==null&&!Le.done;ke++,Le=M.next()){oe.index>ke?(Ae=oe,oe=null):Ae=oe.sibling;var cr=O(R,oe,Le.value,V);if(cr===null){oe===null&&(oe=Ae);break}e&&oe&&cr.alternate===null&&n(R,oe),k=i(cr,k,ke),Be===null?me=cr:Be.sibling=cr,Be=cr,oe=Ae}if(Le.done)return t(R,oe),Oe&&hl(R,ke),me;if(oe===null){for(;!Le.done;ke++,Le=M.next())Le=q(R,Le.value,V),Le!==null&&(k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le);return Oe&&hl(R,ke),me}for(oe=l(oe);!Le.done;ke++,Le=M.next())Le=B(oe,R,ke,Le.value,V),Le!==null&&(e&&Le.alternate!==null&&oe.delete(Le.key===null?ke:Le.key),k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le);return e&&oe.forEach(function(zg){return n(R,zg)}),Oe&&hl(R,ke),me}function Xe(R,k,M,V){if(typeof M=="object"&&M!==null&&M.type===te&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case X:e:{for(var me=M.key;k!==null;){if(k.key===me){if(me=M.type,me===te){if(k.tag===7){t(R,k.sibling),V=r(k,M.props.children),V.return=R,R=V;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&Hr(me)===k.type){t(R,k.sibling),V=r(k,M.props),_i(V,M),V.return=R,R=V;break e}t(R,k);break}else n(R,k);k=k.sibling}M.type===te?(V=Cr(M.props.children,R.mode,V,M.key),V.return=R,R=V):(V=Ts(M.type,M.key,M.props,null,R.mode,V),_i(V,M),V.return=R,R=V)}return h(R);case P:e:{for(me=M.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===M.containerInfo&&k.stateNode.implementation===M.implementation){t(R,k.sibling),V=r(k,M.children||[]),V.return=R,R=V;break e}else{t(R,k);break}else n(R,k);k=k.sibling}V=bc(M,R.mode,V),V.return=R,R=V}return h(R);case W:return M=Hr(M),Xe(R,k,M,V)}if(Qe(M))return ae(R,k,M,V);if(re(M)){if(me=re(M),typeof me!="function")throw Error(s(150));return M=me.call(M),pe(R,k,M,V)}if(typeof M.then=="function")return Xe(R,k,zs(M),V);if(M.$$typeof===fe)return Xe(R,k,Ds(R,M),V);Bs(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,k!==null&&k.tag===6?(t(R,k.sibling),V=r(k,M),V.return=R,R=V):(t(R,k),V=gc(M,R.mode,V),V.return=R,R=V),h(R)):t(R,k)}return function(R,k,M,V){try{pi=0;var me=Xe(R,k,M,V);return ga=null,me}catch(oe){if(oe===_a||oe===Os)throw oe;var Be=ut(29,oe,null,R.mode);return Be.lanes=V,Be.return=R,Be}finally{}}}var Vr=sd(!0),od=sd(!1),Xl=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pl(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(He&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=Rs(e),$f(e,null,t),n}return Ns(e,l,n,t),Rs(e)}function gi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Zr(e,t)}}function jc(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var h={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?r=i=h:i=i.next=h,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Oc=!1;function bi(){if(Oc){var e=pa;if(e!==null)throw e}}function yi(e,n,t,l){Oc=!1;var r=e.updateQueue;Xl=!1;var i=r.firstBaseUpdate,h=r.lastBaseUpdate,_=r.shared.pending;if(_!==null){r.shared.pending=null;var w=_,A=w.next;w.next=null,h===null?i=A:h.next=A,h=w;var H=e.alternate;H!==null&&(H=H.updateQueue,_=H.lastBaseUpdate,_!==h&&(_===null?H.firstBaseUpdate=A:_.next=A,H.lastBaseUpdate=w))}if(i!==null){var q=r.baseState;h=0,H=A=w=null,_=i;do{var O=_.lane&-536870913,B=O!==_.lane;if(B?(Me&O)===O:(l&O)===O){O!==0&&O===ha&&(Oc=!0),H!==null&&(H=H.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var ae=e,pe=_;O=n;var Xe=t;switch(pe.tag){case 1:if(ae=pe.payload,typeof ae=="function"){q=ae.call(Xe,q,O);break e}q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=pe.payload,O=typeof ae=="function"?ae.call(Xe,q,O):ae,O==null)break e;q=N({},q,O);break e;case 2:Xl=!0}}O=_.callback,O!==null&&(e.flags|=64,B&&(e.flags|=8192),B=r.callbacks,B===null?r.callbacks=[O]:B.push(O))}else B={lane:O,tag:_.tag,payload:_.payload,callback:_.callback,next:null},H===null?(A=H=B,w=q):H=H.next=B,h|=O;if(_=_.next,_===null){if(_=r.shared.pending,_===null)break;B=_,_=B.next,B.next=null,r.lastBaseUpdate=B,r.shared.pending=null}}while(!0);H===null&&(w=q),r.baseState=w,r.firstBaseUpdate=A,r.lastBaseUpdate=H,i===null&&(r.shared.lanes=0),Jl|=h,e.lanes=h,e.memoizedState=q}}function cd(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ud(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)cd(t[e],n)}var ba=E(null),Ls=E(0);function fd(e,n){e=kl,Z(Ls,e),Z(ba,n),kl=e|n.baseLanes}function Cc(){Z(Ls,kl),Z(ba,ba.current)}function zc(){kl=Ls.current,L(ba),L(Ls)}var ft=E(null),Mt=null;function Fl(e){var n=e.alternate;Z(fn,fn.current&1),Z(ft,e),Mt===null&&(n===null||ba.current!==null||n.memoizedState!==null)&&(Mt=e)}function Bc(e){Z(fn,fn.current),Z(ft,e),Mt===null&&(Mt=e)}function dd(e){e.tag===22?(Z(fn,fn.current),Z(ft,e),Mt===null&&(Mt=e)):Ql()}function Ql(){Z(fn,fn.current),Z(ft,ft.current)}function dt(e){L(ft),Mt===e&&(Mt=null),L(fn)}var fn=E(0);function Us(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Yu(t)||qu(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var gl=0,we=null,Ie=null,pn=null,Hs=!1,ya=!1,Yr=!1,Gs=0,vi=0,va=null,k_=0;function an(){throw Error(s(321))}function Lc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Dn(e[t],n[t]))return!1;return!0}function Uc(e,n,t,l,r,i){return gl=i,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?Fd:Jc,Yr=!1,i=t(l,r),Yr=!1,ya&&(i=hd(n,t,l,r)),md(e),i}function md(e){C.H=wi;var n=Ie!==null&&Ie.next!==null;if(gl=0,pn=Ie=we=null,Hs=!1,vi=0,va=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&As(e)&&(_n=!0))}function hd(e,n,t,l){we=e;var r=0;do{if(ya&&(va=null),vi=0,ya=!1,25<=r)throw Error(s(301));if(r+=1,pn=Ie=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=Qd,i=n(t,l)}while(ya);return i}function N_(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?xi(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(we.flags|=1024),n}function Hc(){var e=Gs!==0;return Gs=0,e}function Gc(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Vc(e){if(Hs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Hs=!1}gl=0,pn=Ie=we=null,ya=!1,vi=Gs=0,va=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?we.memoizedState=pn=e:pn=pn.next=e,pn}function dn(){if(Ie===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=pn===null?we.memoizedState:pn.next;if(n!==null)pn=n,Ie=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},pn===null?we.memoizedState=pn=e:pn=pn.next=e}return pn}function Vs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xi(e){var n=vi;return vi+=1,va===null&&(va=[]),e=rd(va,e,n),n=we,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Fd:Jc),e}function Ys(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xi(e);if(e.$$typeof===fe)return On(e)}throw Error(s(438,String(e)))}function Yc(e){var n=null,t=we.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Vs(),we.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),l=0;l<e;l++)t[l]=ge;return n.index++,t}function bl(e,n){return typeof n=="function"?n(e):n}function qs(e){var n=dn();return qc(n,Ie,e)}function qc(e,n,t){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var r=e.baseQueue,i=l.pending;if(i!==null){if(r!==null){var h=r.next;r.next=i.next,i.next=h}n.baseQueue=r=i,l.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{n=r.next;var _=h=null,w=null,A=n,H=!1;do{var q=A.lane&-536870913;if(q!==A.lane?(Me&q)===q:(gl&q)===q){var O=A.revertLane;if(O===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),q===ha&&(H=!0);else if((gl&O)===O){A=A.next,O===ha&&(H=!0);continue}else q={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},w===null?(_=w=q,h=i):w=w.next=q,we.lanes|=O,Jl|=O;q=A.action,Yr&&t(i,q),i=A.hasEagerState?A.eagerState:t(i,q)}else O={lane:q,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},w===null?(_=w=O,h=i):w=w.next=O,we.lanes|=q,Jl|=q;A=A.next}while(A!==null&&A!==n);if(w===null?h=i:w.next=_,!Dn(i,e.memoizedState)&&(_n=!0,H&&(t=pa,t!==null)))throw t;e.memoizedState=i,e.baseState=h,e.baseQueue=w,l.lastRenderedState=i}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ic(e){var n=dn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var l=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var h=r=r.next;do i=e(i,h.action),h=h.next;while(h!==r);Dn(i,n.memoizedState)||(_n=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,l]}function pd(e,n,t){var l=we,r=dn(),i=Oe;if(i){if(t===void 0)throw Error(s(407));t=t()}else t=n();var h=!Dn((Ie||r).memoizedState,t);if(h&&(r.memoizedState=t,_n=!0),r=r.queue,Kc(bd.bind(null,l,r,e),[e]),r.getSnapshot!==n||h||pn!==null&&pn.memoizedState.tag&1){if(l.flags|=2048,xa(9,{destroy:void 0},gd.bind(null,l,r,t,n),null),Pe===null)throw Error(s(349));i||(gl&127)!==0||_d(l,n,t)}return t}function _d(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=we.updateQueue,n===null?(n=Vs(),we.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function gd(e,n,t,l){n.value=t,n.getSnapshot=l,yd(n)&&vd(e)}function bd(e,n,t){return t(function(){yd(n)&&vd(e)})}function yd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Dn(e,t)}catch{return!0}}function vd(e){var n=Or(e,2);n!==null&&tt(n,e,2)}function $c(e){var n=Kn();if(typeof e=="function"){var t=e;if(e=t(),Yr){rt(!0);try{t()}finally{rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:e},n}function xd(e,n,t,l){return e.baseState=t,qc(e,Ie,typeof l=="function"?l:bl)}function R_(e,n,t,l,r){if(Xs(e))throw Error(s(485));if(e=n.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){i.listeners.push(h)}};C.T!==null?t(!0):i.isTransition=!1,l(i),t=n.pending,t===null?(i.next=n.pending=i,Sd(n,i)):(i.next=t.next,n.pending=t.next=i)}}function Sd(e,n){var t=n.action,l=n.payload,r=e.state;if(n.isTransition){var i=C.T,h={};C.T=h;try{var _=t(r,l),w=C.S;w!==null&&w(h,_),wd(e,n,_)}catch(A){Xc(e,n,A)}finally{i!==null&&h.types!==null&&(i.types=h.types),C.T=i}}else try{i=t(r,l),wd(e,n,i)}catch(A){Xc(e,n,A)}}function wd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Ed(e,n,l)},function(l){return Xc(e,n,l)}):Ed(e,n,t)}function Ed(e,n,t){n.status="fulfilled",n.value=t,kd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Sd(e,t)))}function Xc(e,n,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=t,kd(n),n=n.next;while(n!==l)}e.action=null}function kd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Nd(e,n){return n}function Rd(e,n){if(Oe){var t=Pe.formState;if(t!==null){e:{var l=we;if(Oe){if(Je){n:{for(var r=Je,i=Tt;r.nodeType!==8;){if(!i){r=null;break n}if(r=At(r.nextSibling),r===null){r=null;break n}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Je=At(r.nextSibling),l=r.data==="F!";break e}}Il(l)}l=!1}l&&(n=t[0])}}return t=Kn(),t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nd,lastRenderedState:n},t.queue=l,t=Xd.bind(null,we,l),l.dispatch=t,l=$c(!1),i=Wc.bind(null,we,!1,l.queue),l=Kn(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,t=R_.bind(null,we,r,i,t),r.dispatch=t,l.memoizedState=e,[n,t,!1]}function Td(e){var n=dn();return Md(n,Ie,e)}function Md(e,n,t){if(n=qc(e,n,Nd)[0],e=qs(bl)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=xi(n)}catch(h){throw h===_a?Os:h}else l=n;n=dn();var r=n.queue,i=r.dispatch;return t!==n.memoizedState&&(we.flags|=2048,xa(9,{destroy:void 0},T_.bind(null,r,t),null)),[l,i,e]}function T_(e,n){e.action=n}function Ad(e){var n=dn(),t=Ie;if(t!==null)return Md(n,t,e);dn(),n=n.memoizedState,t=dn();var l=t.queue.dispatch;return t.memoizedState=e,[n,l,!1]}function xa(e,n,t,l){return e={tag:e,create:t,deps:l,inst:n,next:null},n=we.updateQueue,n===null&&(n=Vs(),we.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e),e}function Dd(){return dn().memoizedState}function Is(e,n,t,l){var r=Kn();we.flags|=e,r.memoizedState=xa(1|n,{destroy:void 0},t,l===void 0?null:l)}function $s(e,n,t,l){var r=dn();l=l===void 0?null:l;var i=r.memoizedState.inst;Ie!==null&&l!==null&&Lc(l,Ie.memoizedState.deps)?r.memoizedState=xa(n,i,t,l):(we.flags|=e,r.memoizedState=xa(1|n,i,t,l))}function jd(e,n){Is(8390656,8,e,n)}function Kc(e,n){$s(2048,8,e,n)}function M_(e){we.flags|=4;var n=we.updateQueue;if(n===null)n=Vs(),we.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Od(e){var n=dn().memoizedState;return M_({ref:n,nextImpl:e}),function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cd(e,n){return $s(4,2,e,n)}function zd(e,n){return $s(4,4,e,n)}function Bd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ld(e,n,t){t=t!=null?t.concat([e]):null,$s(4,4,Bd.bind(null,n,e),t)}function Pc(){}function Ud(e,n){var t=dn();n=n===void 0?null:n;var l=t.memoizedState;return n!==null&&Lc(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function Hd(e,n){var t=dn();n=n===void 0?null:n;var l=t.memoizedState;if(n!==null&&Lc(n,l[1]))return l[0];if(l=e(),Yr){rt(!0);try{e()}finally{rt(!1)}}return t.memoizedState=[l,n],l}function Fc(e,n,t){return t===void 0||(gl&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Gm(),we.lanes|=e,Jl|=e,t)}function Gd(e,n,t,l){return Dn(t,n)?t:ba.current!==null?(e=Fc(e,t,l),Dn(e,n)||(_n=!0),e):(gl&42)===0||(gl&1073741824)!==0&&(Me&261930)===0?(_n=!0,e.memoizedState=t):(e=Gm(),we.lanes|=e,Jl|=e,n)}function Vd(e,n,t,l,r){var i=Q.p;Q.p=i!==0&&8>i?i:8;var h=C.T,_={};C.T=_,Wc(e,!1,n,t);try{var w=r(),A=C.S;if(A!==null&&A(_,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=E_(w,l);Si(e,n,H,pt(e))}else Si(e,n,l,pt(e))}catch(q){Si(e,n,{then:function(){},status:"rejected",reason:q},pt())}finally{Q.p=i,h!==null&&_.types!==null&&(h.types=_.types),C.T=h}}function A_(){}function Qc(e,n,t,l){if(e.tag!==5)throw Error(s(476));var r=Yd(e).queue;Vd(e,r,n,ue,t===null?A_:function(){return qd(e),t(l)})}function Yd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:ue},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qd(e){var n=Yd(e);n.next===null&&(n=e.alternate.memoizedState),Si(e,n.next.queue,{},pt())}function Zc(){return On(Hi)}function Id(){return dn().memoizedState}function $d(){return dn().memoizedState}function D_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=pt();e=Kl(t);var l=Pl(n,e,t);l!==null&&(tt(l,n,t),gi(l,n,t)),n={cache:Nc()},e.payload=n;return}n=n.return}}function j_(e,n,t){var l=pt();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Xs(e)?Kd(n,t):(t=pc(e,n,t,l),t!==null&&(tt(t,e,l),Pd(t,n,l)))}function Xd(e,n,t){var l=pt();Si(e,n,t,l)}function Si(e,n,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xs(e))Kd(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var h=n.lastRenderedState,_=i(h,t);if(r.hasEagerState=!0,r.eagerState=_,Dn(_,h))return Ns(e,n,r,0),Pe===null&&ks(),!1}catch{}finally{}if(t=pc(e,n,r,l),t!==null)return tt(t,e,l),Pd(t,n,l),!0}return!1}function Wc(e,n,t,l){if(l={lane:2,revertLane:Au(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Xs(e)){if(n)throw Error(s(479))}else n=pc(e,t,l,2),n!==null&&tt(n,e,2)}function Xs(e){var n=e.alternate;return e===we||n!==null&&n===we}function Kd(e,n){ya=Hs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pd(e,n,t){if((t&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Zr(e,t)}}var wi={readContext:On,use:Ys,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};wi.useEffectEvent=an;var Fd={readContext:On,use:Ys,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:jd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Is(4194308,4,Bd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Is(4194308,4,e,n)},useInsertionEffect:function(e,n){Is(4,2,e,n)},useMemo:function(e,n){var t=Kn();n=n===void 0?null:n;var l=e();if(Yr){rt(!0);try{e()}finally{rt(!1)}}return t.memoizedState=[l,n],l},useReducer:function(e,n,t){var l=Kn();if(t!==void 0){var r=t(n);if(Yr){rt(!0);try{t(n)}finally{rt(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=j_.bind(null,we,e),[l.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=$c(e);var n=e.queue,t=Xd.bind(null,we,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Pc,useDeferredValue:function(e,n){var t=Kn();return Fc(t,e,n)},useTransition:function(){var e=$c(!1);return e=Vd.bind(null,we,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var l=we,r=Kn();if(Oe){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Pe===null)throw Error(s(349));(Me&127)!==0||_d(l,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,jd(bd.bind(null,l,i,e),[e]),l.flags|=2048,xa(9,{destroy:void 0},gd.bind(null,l,i,t,n),null),t},useId:function(){var e=Kn(),n=Pe.identifierPrefix;if(Oe){var t=el,l=Jt;t=(l&~(1<<32-Rn(l)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Gs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=k_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zc,useFormState:Rd,useActionState:Rd,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Wc.bind(null,we,!0,t),t.dispatch=n,[e,n]},useMemoCache:Yc,useCacheRefresh:function(){return Kn().memoizedState=D_.bind(null,we)},useEffectEvent:function(e){var n=Kn(),t={impl:e};return n.memoizedState=t,function(){if((He&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}},Jc={readContext:On,use:Ys,useCallback:Ud,useContext:On,useEffect:Kc,useImperativeHandle:Ld,useInsertionEffect:Cd,useLayoutEffect:zd,useMemo:Hd,useReducer:qs,useRef:Dd,useState:function(){return qs(bl)},useDebugValue:Pc,useDeferredValue:function(e,n){var t=dn();return Gd(t,Ie.memoizedState,e,n)},useTransition:function(){var e=qs(bl)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:xi(e),n]},useSyncExternalStore:pd,useId:Id,useHostTransitionStatus:Zc,useFormState:Td,useActionState:Td,useOptimistic:function(e,n){var t=dn();return xd(t,Ie,e,n)},useMemoCache:Yc,useCacheRefresh:$d};Jc.useEffectEvent=Od;var Qd={readContext:On,use:Ys,useCallback:Ud,useContext:On,useEffect:Kc,useImperativeHandle:Ld,useInsertionEffect:Cd,useLayoutEffect:zd,useMemo:Hd,useReducer:Ic,useRef:Dd,useState:function(){return Ic(bl)},useDebugValue:Pc,useDeferredValue:function(e,n){var t=dn();return Ie===null?Fc(t,e,n):Gd(t,Ie.memoizedState,e,n)},useTransition:function(){var e=Ic(bl)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:xi(e),n]},useSyncExternalStore:pd,useId:Id,useHostTransitionStatus:Zc,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,n){var t=dn();return Ie!==null?xd(t,Ie,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Yc,useCacheRefresh:$d};Qd.useEffectEvent=Od;function eu(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:N({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var nu={enqueueSetState:function(e,n,t){e=e._reactInternals;var l=pt(),r=Kl(l);r.payload=n,t!=null&&(r.callback=t),n=Pl(e,r,l),n!==null&&(tt(n,e,l),gi(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=pt(),r=Kl(l);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=Pl(e,r,l),n!==null&&(tt(n,e,l),gi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=pt(),l=Kl(t);l.tag=2,n!=null&&(l.callback=n),n=Pl(e,l,t),n!==null&&(tt(n,e,t),gi(n,e,t))}};function Zd(e,n,t,l,r,i,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,h):n.prototype&&n.prototype.isPureReactComponent?!dl(t,l)||!dl(r,i):!0}function Wd(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&nu.enqueueReplaceState(n,n.state,null)}function qr(e,n){var t=n;if("ref"in n){t={};for(var l in n)l!=="ref"&&(t[l]=n[l])}if(e=e.defaultProps){t===n&&(t=N({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function Jd(e){Es(e)}function em(e){console.error(e)}function nm(e){Es(e)}function Ks(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function tm(e,n,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function tu(e,n,t){return t=Kl(t),t.tag=3,t.payload={element:null},t.callback=function(){Ks(e,n)},t}function lm(e){return e=Kl(e),e.tag=3,e}function rm(e,n,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=l.value;e.payload=function(){return r(i)},e.callback=function(){tm(n,t,l)}}var h=t.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){tm(n,t,l),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function O_(e,n,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=t.alternate,n!==null&&ma(n,t,r,!0),t=ft.current,t!==null){switch(t.tag){case 31:case 13:return Mt===null?ao():t.alternate===null&&sn===0&&(sn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===Cs?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([l]):n.add(l),Ru(e,l,r)),!1;case 22:return t.flags|=65536,l===Cs?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([l]):t.add(l)),Ru(e,l,r)),!1}throw Error(s(435,t.tag))}return Ru(e,l,r),ao(),!1}if(Oe)return n=ft.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==xc&&(e=Error(s(422),{cause:l}),di(kt(e,t)))):(l!==xc&&(n=Error(s(423),{cause:l}),di(kt(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=kt(l,t),r=tu(e.stateNode,l,r),jc(e,r),sn!==4&&(sn=2)),!1;var i=Error(s(520),{cause:l});if(i=kt(i,t),Di===null?Di=[i]:Di.push(i),sn!==4&&(sn=2),n===null)return!0;l=kt(l,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=tu(t.stateNode,l,e),jc(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))))return t.flags|=65536,r&=-r,t.lanes|=r,r=lm(r),rm(r,e,t,l),jc(t,r),!1}t=t.return}while(t!==null);return!1}var lu=Error(s(461)),_n=!1;function Cn(e,n,t,l){n.child=e===null?od(n,null,t,l):Vr(n,e.child,t,l)}function am(e,n,t,l,r){t=t.render;var i=n.ref;if("ref"in l){var h={};for(var _ in l)_!=="ref"&&(h[_]=l[_])}else h=l;return Lr(n),l=Uc(e,n,t,h,i,r),_=Hc(),e!==null&&!_n?(Gc(e,n,r),yl(e,n,r)):(Oe&&_&&yc(n),n.flags|=1,Cn(e,n,l,r),n.child)}function im(e,n,t,l,r){if(e===null){var i=t.type;return typeof i=="function"&&!_c(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,sm(e,n,i,l,r)):(e=Ts(t.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!fu(e,r)){var h=i.memoizedProps;if(t=t.compare,t=t!==null?t:dl,t(h,l)&&e.ref===n.ref)return yl(e,n,r)}return n.flags|=1,e=ml(i,l),e.ref=n.ref,e.return=n,n.child=e}function sm(e,n,t,l,r){if(e!==null){var i=e.memoizedProps;if(dl(i,l)&&e.ref===n.ref)if(_n=!1,n.pendingProps=l=i,fu(e,r))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,yl(e,n,r)}return ru(e,n,t,l,r)}function om(e,n,t,l){var r=l.children,i=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~i}else l=0,n.child=null;return cm(e,n,i,t,l)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&js(n,i!==null?i.cachePool:null),i!==null?fd(n,i):Cc(),dd(n);else return l=n.lanes=536870912,cm(e,n,i!==null?i.baseLanes|t:t,t,l)}else i!==null?(js(n,i.cachePool),fd(n,i),Ql(),n.memoizedState=null):(e!==null&&js(n,null),Cc(),Ql());return Cn(e,n,r,t),n.child}function Ei(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cm(e,n,t,l,r){var i=Tc();return i=i===null?null:{parent:hn._currentValue,pool:i},n.memoizedState={baseLanes:t,cachePool:i},e!==null&&js(n,null),Cc(),dd(n),e!==null&&ma(e,n,l,!0),n.childLanes=r,null}function Ps(e,n){return n=Qs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function um(e,n,t){return Vr(n,e.child,null,t),e=Ps(n,n.pendingProps),e.flags|=2,dt(n),n.memoizedState=null,e}function C_(e,n,t){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Oe){if(l.mode==="hidden")return e=Ps(n,l),n.lanes=536870912,Ei(null,e);if(Bc(n),(e=Je)?(e=Sh(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yl!==null?{id:Jt,overflow:el}:null,retryLane:536870912,hydrationErrors:null},t=Kf(e),t.return=n,n.child=t,jn=n,Je=null)):e=null,e===null)throw Il(n);return n.lanes=536870912,null}return Ps(n,l)}var i=e.memoizedState;if(i!==null){var h=i.dehydrated;if(Bc(n),r)if(n.flags&256)n.flags&=-257,n=um(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||ma(e,n,t,!1),r=(t&e.childLanes)!==0,_n||r){if(l=Pe,l!==null&&(h=rs(l,t),h!==0&&h!==i.retryLane))throw i.retryLane=h,Or(e,h),tt(l,e,h),lu;ao(),n=um(e,n,t)}else e=i.treeContext,Je=At(h.nextSibling),jn=n,Oe=!0,ql=null,Tt=!1,e!==null&&Qf(n,e),n=Ps(n,l),n.flags|=4096;return n}return e=ml(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fs(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function ru(e,n,t,l,r){return Lr(n),t=Uc(e,n,t,l,void 0,r),l=Hc(),e!==null&&!_n?(Gc(e,n,r),yl(e,n,r)):(Oe&&l&&yc(n),n.flags|=1,Cn(e,n,t,r),n.child)}function fm(e,n,t,l,r,i){return Lr(n),n.updateQueue=null,t=hd(n,l,t,r),md(e),l=Hc(),e!==null&&!_n?(Gc(e,n,i),yl(e,n,i)):(Oe&&l&&yc(n),n.flags|=1,Cn(e,n,t,i),n.child)}function dm(e,n,t,l,r){if(Lr(n),n.stateNode===null){var i=ca,h=t.contextType;typeof h=="object"&&h!==null&&(i=On(h)),i=new t(l,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nu,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=l,i.state=n.memoizedState,i.refs={},Ac(n),h=t.contextType,i.context=typeof h=="object"&&h!==null?On(h):ca,i.state=n.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(eu(n,t,h,l),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(h=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),h!==i.state&&nu.enqueueReplaceState(i,i.state,null),yi(n,l,i,r),bi(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){i=n.stateNode;var _=n.memoizedProps,w=qr(t,_);i.props=w;var A=i.context,H=t.contextType;h=ca,typeof H=="object"&&H!==null&&(h=On(H));var q=t.getDerivedStateFromProps;H=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(_||A!==h)&&Wd(n,i,l,h),Xl=!1;var O=n.memoizedState;i.state=O,yi(n,l,i,r),bi(),A=n.memoizedState,_||O!==A||Xl?(typeof q=="function"&&(eu(n,t,q,l),A=n.memoizedState),(w=Xl||Zd(n,t,w,l,O,A,h))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=A),i.props=l,i.state=A,i.context=h,l=w):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{i=n.stateNode,Dc(e,n),h=n.memoizedProps,H=qr(t,h),i.props=H,q=n.pendingProps,O=i.context,A=t.contextType,w=ca,typeof A=="object"&&A!==null&&(w=On(A)),_=t.getDerivedStateFromProps,(A=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h!==q||O!==w)&&Wd(n,i,l,w),Xl=!1,O=n.memoizedState,i.state=O,yi(n,l,i,r),bi();var B=n.memoizedState;h!==q||O!==B||Xl||e!==null&&e.dependencies!==null&&As(e.dependencies)?(typeof _=="function"&&(eu(n,t,_,l),B=n.memoizedState),(H=Xl||Zd(n,t,H,l,O,B,w)||e!==null&&e.dependencies!==null&&As(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,B,w),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,B,w)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=B),i.props=l,i.state=B,i.context=w,l=H):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),l=!1)}return i=l,Fs(e,n),l=(n.flags&128)!==0,i||l?(i=n.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&l?(n.child=Vr(n,e.child,null,r),n.child=Vr(n,null,t,r)):Cn(e,n,t,r),n.memoizedState=i.state,e=n.child):e=yl(e,n,r),e}function mm(e,n,t,l){return zr(),n.flags|=256,Cn(e,n,t,l),n.child}var au={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function iu(e){return{baseLanes:e,cachePool:td()}}function su(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=ht),e}function hm(e,n,t){var l=n.pendingProps,r=!1,i=(n.flags&128)!==0,h;if((h=i)||(h=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),h&&(r=!0,n.flags&=-129),h=(n.flags&32)!==0,n.flags&=-33,e===null){if(Oe){if(r?Fl(n):Ql(),(e=Je)?(e=Sh(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yl!==null?{id:Jt,overflow:el}:null,retryLane:536870912,hydrationErrors:null},t=Kf(e),t.return=n,n.child=t,jn=n,Je=null)):e=null,e===null)throw Il(n);return qu(e)?n.lanes=32:n.lanes=536870912,null}var _=l.children;return l=l.fallback,r?(Ql(),r=n.mode,_=Qs({mode:"hidden",children:_},r),l=Cr(l,r,t,null),_.return=n,l.return=n,_.sibling=l,n.child=_,l=n.child,l.memoizedState=iu(t),l.childLanes=su(e,h,t),n.memoizedState=au,Ei(null,l)):(Fl(n),ou(n,_))}var w=e.memoizedState;if(w!==null&&(_=w.dehydrated,_!==null)){if(i)n.flags&256?(Fl(n),n.flags&=-257,n=cu(e,n,t)):n.memoizedState!==null?(Ql(),n.child=e.child,n.flags|=128,n=null):(Ql(),_=l.fallback,r=n.mode,l=Qs({mode:"visible",children:l.children},r),_=Cr(_,r,t,null),_.flags|=2,l.return=n,_.return=n,l.sibling=_,n.child=l,Vr(n,e.child,null,t),l=n.child,l.memoizedState=iu(t),l.childLanes=su(e,h,t),n.memoizedState=au,n=Ei(null,l));else if(Fl(n),qu(_)){if(h=_.nextSibling&&_.nextSibling.dataset,h)var A=h.dgst;h=A,l=Error(s(419)),l.stack="",l.digest=h,di({value:l,source:null,stack:null}),n=cu(e,n,t)}else if(_n||ma(e,n,t,!1),h=(t&e.childLanes)!==0,_n||h){if(h=Pe,h!==null&&(l=rs(h,t),l!==0&&l!==w.retryLane))throw w.retryLane=l,Or(e,l),tt(h,e,l),lu;Yu(_)||ao(),n=cu(e,n,t)}else Yu(_)?(n.flags|=192,n.child=e.child,n=null):(e=w.treeContext,Je=At(_.nextSibling),jn=n,Oe=!0,ql=null,Tt=!1,e!==null&&Qf(n,e),n=ou(n,l.children),n.flags|=4096);return n}return r?(Ql(),_=l.fallback,r=n.mode,w=e.child,A=w.sibling,l=ml(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,A!==null?_=ml(A,_):(_=Cr(_,r,t,null),_.flags|=2),_.return=n,l.return=n,l.sibling=_,n.child=l,Ei(null,l),l=n.child,_=e.child.memoizedState,_===null?_=iu(t):(r=_.cachePool,r!==null?(w=hn._currentValue,r=r.parent!==w?{parent:w,pool:w}:r):r=td(),_={baseLanes:_.baseLanes|t,cachePool:r}),l.memoizedState=_,l.childLanes=su(e,h,t),n.memoizedState=au,Ei(e.child,l)):(Fl(n),t=e.child,e=t.sibling,t=ml(t,{mode:"visible",children:l.children}),t.return=n,t.sibling=null,e!==null&&(h=n.deletions,h===null?(n.deletions=[e],n.flags|=16):h.push(e)),n.child=t,n.memoizedState=null,t)}function ou(e,n){return n=Qs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Qs(e,n){return e=ut(22,e,null,n),e.lanes=0,e}function cu(e,n,t){return Vr(n,e.child,null,t),e=ou(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pm(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Ec(e.return,n,t)}function uu(e,n,t,l,r,i){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:i}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=t,h.tailMode=r,h.treeForkCount=i)}function _m(e,n,t){var l=n.pendingProps,r=l.revealOrder,i=l.tail;l=l.children;var h=fn.current,_=(h&2)!==0;if(_?(h=h&1|2,n.flags|=128):h&=1,Z(fn,h),Cn(e,n,l,t),l=Oe?fi:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pm(e,t,n);else if(e.tag===19)pm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Us(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),uu(n,!1,r,t,i,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Us(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}uu(n,!0,t,null,i,l);break;case"together":uu(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function yl(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ma(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=ml(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ml(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function fu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&As(e)))}function z_(e,n,t){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),$l(n,hn,e.memoizedState.cache),zr();break;case 27:case 5:Yn(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:$l(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bc(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Fl(n),n.flags|=128,null):(t&n.child.childLanes)!==0?hm(e,n,t):(Fl(n),e=yl(e,n,t),e!==null?e.sibling:null);Fl(n);break;case 19:var r=(e.flags&128)!==0;if(l=(t&n.childLanes)!==0,l||(ma(e,n,t,!1),l=(t&n.childLanes)!==0),r){if(l)return _m(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Z(fn,fn.current),l)break;return null;case 22:return n.lanes=0,om(e,n,t,n.pendingProps);case 24:$l(n,hn,e.memoizedState.cache)}return yl(e,n,t)}function gm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!fu(e,t)&&(n.flags&128)===0)return _n=!1,z_(e,n,t);_n=(e.flags&131072)!==0}else _n=!1,Oe&&(n.flags&1048576)!==0&&Ff(n,fi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=Hr(n.elementType),n.type=e,typeof e=="function")_c(e)?(l=qr(e,l),n.tag=1,n=dm(null,n,e,l,t)):(n.tag=0,n=ru(null,n,e,l,t));else{if(e!=null){var r=e.$$typeof;if(r===ie){n.tag=11,n=am(null,n,e,l,t);break e}else if(r===ee){n.tag=14,n=im(null,n,e,l,t);break e}}throw n=De(e)||e,Error(s(306,n,""))}}return n;case 0:return ru(e,n,n.type,n.pendingProps,t);case 1:return l=n.type,r=qr(l,n.pendingProps),dm(e,n,l,r,t);case 3:e:{if(Ue(n,n.stateNode.containerInfo),e===null)throw Error(s(387));l=n.pendingProps;var i=n.memoizedState;r=i.element,Dc(e,n),yi(n,l,null,t);var h=n.memoizedState;if(l=h.cache,$l(n,hn,l),l!==i.cache&&kc(n,[hn],t,!0),bi(),l=h.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:h.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=mm(e,n,l,t);break e}else if(l!==r){r=kt(Error(s(424)),n),di(r),n=mm(e,n,l,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=At(e.firstChild),jn=n,Oe=!0,ql=null,Tt=!0,t=od(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(zr(),l===r){n=yl(e,n,t);break e}Cn(e,n,l,t)}n=n.child}return n;case 26:return Fs(e,n),e===null?(t=Th(n.type,null,n.pendingProps,null))?n.memoizedState=t:Oe||(t=n.type,e=n.pendingProps,l=mo(F.current).createElement(t),l[cn]=n,l[un]=e,zn(l,t,e),Ze(l),n.stateNode=l):n.memoizedState=Th(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yn(n),e===null&&Oe&&(l=n.stateNode=kh(n.type,n.pendingProps,F.current),jn=n,Tt=!0,r=Je,rr(n.type)?(Iu=r,Je=At(l.firstChild)):Je=r),Cn(e,n,n.pendingProps.children,t),Fs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Oe&&((r=l=Je)&&(l=fg(l,n.type,n.pendingProps,Tt),l!==null?(n.stateNode=l,jn=n,Je=At(l.firstChild),Tt=!1,r=!0):r=!1),r||Il(n)),Yn(n),r=n.type,i=n.pendingProps,h=e!==null?e.memoizedProps:null,l=i.children,Hu(r,i)?l=null:h!==null&&Hu(r,h)&&(n.flags|=32),n.memoizedState!==null&&(r=Uc(e,n,N_,null,null,t),Hi._currentValue=r),Fs(e,n),Cn(e,n,l,t),n.child;case 6:return e===null&&Oe&&((e=t=Je)&&(t=dg(t,n.pendingProps,Tt),t!==null?(n.stateNode=t,jn=n,Je=null,e=!0):e=!1),e||Il(n)),null;case 13:return hm(e,n,t);case 4:return Ue(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Vr(n,null,l,t):Cn(e,n,l,t),n.child;case 11:return am(e,n,n.type,n.pendingProps,t);case 7:return Cn(e,n,n.pendingProps,t),n.child;case 8:return Cn(e,n,n.pendingProps.children,t),n.child;case 12:return Cn(e,n,n.pendingProps.children,t),n.child;case 10:return l=n.pendingProps,$l(n,n.type,l.value),Cn(e,n,l.children,t),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Lr(n),r=On(r),l=l(r),n.flags|=1,Cn(e,n,l,t),n.child;case 14:return im(e,n,n.type,n.pendingProps,t);case 15:return sm(e,n,n.type,n.pendingProps,t);case 19:return _m(e,n,t);case 31:return C_(e,n,t);case 22:return om(e,n,t,n.pendingProps);case 24:return Lr(n),l=On(hn),e===null?(r=Tc(),r===null&&(r=Pe,i=Nc(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=t),r=i),n.memoizedState={parent:l,cache:r},Ac(n),$l(n,hn,r)):((e.lanes&t)!==0&&(Dc(e,n),yi(n,null,null,t),bi()),r=e.memoizedState,i=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),$l(n,hn,l)):(l=i.cache,$l(n,hn,l),l!==r.cache&&kc(n,[hn],t,!0))),Cn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function vl(e){e.flags|=4}function du(e,n,t,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Im())e.flags|=8192;else throw Gr=Cs,Mc}else e.flags&=-16777217}function bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Oh(n))if(Im())e.flags|=8192;else throw Gr=Cs,Mc}function Zs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?$a():536870912,e.lanes|=n,ka|=n)}function ki(e,n){if(!Oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function B_(e,n,t){var l=n.pendingProps;switch(vc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return t=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),_l(hn),Ce(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(da(n)?vl(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sc())),en(n),null;case 26:var r=n.type,i=n.memoizedState;return e===null?(vl(n),i!==null?(en(n),bm(n,i)):(en(n),du(n,r,null,l,t))):i?i!==e.memoizedState?(vl(n),en(n),bm(n,i)):(en(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&vl(n),en(n),du(n,r,e,l,t)),null;case 27:if($t(n),t=F.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&vl(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return en(n),null}e=j.current,da(n)?Zf(n):(e=kh(r,l,t),n.stateNode=e,vl(n))}return en(n),null;case 5:if($t(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&vl(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(i=j.current,da(n))Zf(n);else{var h=mo(F.current);switch(i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?h.createElement(r,{is:l.is}):h.createElement(r)}}i[cn]=n,i[un]=l;e:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=i;e:switch(zn(i,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&vl(n)}}return en(n),du(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&vl(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(e=F.current,da(n)){if(e=n.stateNode,t=n.memoizedProps,l=null,r=jn,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[cn]=n,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||hh(e.nodeValue,t)),e||Il(n,!0)}else e=mo(e).createTextNode(l),e[cn]=n,n.stateNode=e}return en(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(l=da(n),t!==null){if(e===null){if(!l)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),e=!1}else t=Sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(dt(n),n):(dt(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=da(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[cn]=n}else zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),r=!1}else r=Sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(dt(n),n):(dt(n),null)}return dt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==r&&(l.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Zs(n,n.updateQueue),en(n),null);case 4:return Ce(),e===null&&Cu(n.stateNode.containerInfo),en(n),null;case 10:return _l(n.type),en(n),null;case 19:if(L(fn),l=n.memoizedState,l===null)return en(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)ki(l,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=Us(e),i!==null){for(n.flags|=128,ki(l,!1),e=i.updateQueue,n.updateQueue=e,Zs(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Xf(t,e),t=t.sibling;return Z(fn,fn.current&1|2),Oe&&hl(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&yn()>to&&(n.flags|=128,r=!0,ki(l,!1),n.lanes=4194304)}else{if(!r)if(e=Us(i),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Zs(n,e),ki(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Oe)return en(n),null}else 2*yn()-l.renderingStartTime>to&&t!==536870912&&(n.flags|=128,r=!0,ki(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(e=l.last,e!==null?e.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=yn(),e.sibling=null,t=fn.current,Z(fn,r?t&1|2:t&1),Oe&&hl(n,l.treeForkCount),e):(en(n),null);case 22:case 23:return dt(n),zc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(t&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),t=n.updateQueue,t!==null&&Zs(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==t&&(n.flags|=2048),e!==null&&L(Ur),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),_l(hn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function L_(e,n){switch(vc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _l(hn),Ce(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(dt(n),n.alternate===null)throw Error(s(340));zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(dt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(fn),null;case 4:return Ce(),null;case 10:return _l(n.type),null;case 22:case 23:return dt(n),zc(),e!==null&&L(Ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _l(hn),null;case 25:return null;default:return null}}function ym(e,n){switch(vc(n),n.tag){case 3:_l(hn),Ce();break;case 26:case 27:case 5:$t(n);break;case 4:Ce();break;case 31:n.memoizedState!==null&&dt(n);break;case 13:dt(n);break;case 19:L(fn);break;case 10:_l(n.type);break;case 22:case 23:dt(n),zc(),e!==null&&L(Ur);break;case 24:_l(hn)}}function Ni(e,n){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&e)===e){l=void 0;var i=t.create,h=t.inst;l=i(),h.destroy=l}t=t.next}while(t!==r)}}catch(_){qe(n,n.return,_)}}function Zl(e,n,t){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var i=r.next;l=i;do{if((l.tag&e)===e){var h=l.inst,_=h.destroy;if(_!==void 0){h.destroy=void 0,r=n;var w=t,A=_;try{A()}catch(H){qe(r,w,H)}}}l=l.next}while(l!==i)}}catch(H){qe(n,n.return,H)}}function vm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{ud(n,t)}catch(l){qe(e,e.return,l)}}}function xm(e,n,t){t.props=qr(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){qe(e,n,l)}}function Ri(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){qe(e,n,r)}}function nl(e,n){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){qe(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){qe(e,n,r)}else t.current=null}function Sm(e){var n=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){qe(e,e.return,r)}}function mu(e,n,t){try{var l=e.stateNode;ag(l,e.type,t,n),l[un]=n}catch(r){qe(e,e.return,r)}}function wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rr(e.type)||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=tn));else if(l!==4&&(l===27&&rr(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(pu(e,n,t),e=e.sibling;e!==null;)pu(e,n,t),e=e.sibling}function Ws(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(l===27&&rr(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ws(e,n,t),e=e.sibling;e!==null;)Ws(e,n,t),e=e.sibling}function Em(e){var n=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);zn(n,l,t),n[cn]=e,n[un]=t}catch(i){qe(e,e.return,i)}}var xl=!1,gn=!1,_u=!1,km=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function U_(e,n){if(e=e.containerInfo,Lu=vo,e=ci(e),cc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var r=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var h=0,_=-1,w=-1,A=0,H=0,q=e,O=null;n:for(;;){for(var B;q!==t||r!==0&&q.nodeType!==3||(_=h+r),q!==i||l!==0&&q.nodeType!==3||(w=h+l),q.nodeType===3&&(h+=q.nodeValue.length),(B=q.firstChild)!==null;)O=q,q=B;for(;;){if(q===e)break n;if(O===t&&++A===r&&(_=h),O===i&&++H===l&&(w=h),(B=q.nextSibling)!==null)break;q=O,O=q.parentNode}q=B}t=_===-1||w===-1?null:{start:_,end:w}}else t=null}t=t||{start:0,end:0}}else t=null;for(Uu={focusedElem:e,selectionRange:t},vo=!1,Nn=n;Nn!==null;)if(n=Nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Nn=e;else for(;Nn!==null;){switch(n=Nn,i=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,r=i.memoizedProps,i=i.memoizedState,l=t.stateNode;try{var ae=qr(t.type,r);e=l.getSnapshotBeforeUpdate(ae,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(pe){qe(t,t.return,pe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Vu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Nn=e;break}Nn=n.return}}function Nm(e,n,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t),l&4&&Ni(5,t);break;case 1:if(wl(e,t),l&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(h){qe(t,t.return,h)}else{var r=qr(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(h){qe(t,t.return,h)}}l&64&&vm(t),l&512&&Ri(t,t.return);break;case 3:if(wl(e,t),l&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{ud(e,n)}catch(h){qe(t,t.return,h)}}break;case 27:n===null&&l&4&&Em(t);case 26:case 5:wl(e,t),n===null&&l&4&&Sm(t),l&512&&Ri(t,t.return);break;case 12:wl(e,t);break;case 31:wl(e,t),l&4&&Mm(e,t);break;case 13:wl(e,t),l&4&&Am(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=K_.bind(null,t),mg(e,t))));break;case 22:if(l=t.memoizedState!==null||xl,!l){n=n!==null&&n.memoizedState!==null||gn,r=xl;var i=gn;xl=l,(gn=n)&&!i?El(e,t,(t.subtreeFlags&8772)!==0):wl(e,t),xl=r,gn=i}break;case 30:break;default:wl(e,t)}}function Rm(e){var n=e.alternate;n!==null&&(e.alternate=null,Rm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,Wn=!1;function Sl(e,n,t){for(t=t.child;t!==null;)Tm(e,n,t),t=t.sibling}function Tm(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(pr,t)}catch{}switch(t.tag){case 26:gn||nl(t,n),Sl(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:gn||nl(t,n);var l=rn,r=Wn;rr(t.type)&&(rn=t.stateNode,Wn=!1),Sl(e,n,t),Bi(t.stateNode),rn=l,Wn=r;break;case 5:gn||nl(t,n);case 6:if(l=rn,r=Wn,rn=null,Sl(e,n,t),rn=l,Wn=r,rn!==null)if(Wn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(t.stateNode)}catch(i){qe(t,n,i)}else try{rn.removeChild(t.stateNode)}catch(i){qe(t,n,i)}break;case 18:rn!==null&&(Wn?(e=rn,vh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Oa(e)):vh(rn,t.stateNode));break;case 4:l=rn,r=Wn,rn=t.stateNode.containerInfo,Wn=!0,Sl(e,n,t),rn=l,Wn=r;break;case 0:case 11:case 14:case 15:Zl(2,t,n),gn||Zl(4,t,n),Sl(e,n,t);break;case 1:gn||(nl(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"&&xm(t,n,l)),Sl(e,n,t);break;case 21:Sl(e,n,t);break;case 22:gn=(l=gn)||t.memoizedState!==null,Sl(e,n,t),gn=l;break;default:Sl(e,n,t)}}function Mm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oa(e)}catch(t){qe(n,n.return,t)}}}function Am(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oa(e)}catch(t){qe(n,n.return,t)}}function H_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new km),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new km),n;default:throw Error(s(435,e.tag))}}function Js(e,n){var t=H_(e);n.forEach(function(l){if(!t.has(l)){t.add(l);var r=P_.bind(null,e,l);l.then(r,r)}})}function Jn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l],i=e,h=n,_=h;e:for(;_!==null;){switch(_.tag){case 27:if(rr(_.type)){rn=_.stateNode,Wn=!1;break e}break;case 5:rn=_.stateNode,Wn=!1;break e;case 3:case 4:rn=_.stateNode.containerInfo,Wn=!0;break e}_=_.return}if(rn===null)throw Error(s(160));Tm(i,h,r),rn=null,Wn=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Dm(n,e),n=n.sibling}var qt=null;function Dm(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),et(e),l&4&&(Zl(3,e,e.return),Ni(3,e),Zl(5,e,e.return));break;case 1:Jn(n,e),et(e),l&512&&(gn||t===null||nl(t,t.return)),l&64&&xl&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var r=qt;if(Jn(n,e),et(e),l&512&&(gn||t===null||nl(t,t.return)),l&4){var i=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,r=r.ownerDocument||r;n:switch(l){case"title":i=r.getElementsByTagName("title")[0],(!i||i[Ht]||i[cn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(l),r.head.insertBefore(i,r.querySelector("head > title"))),zn(i,l,t),i[cn]=e,Ze(i),l=i;break e;case"link":var h=Dh("link","href",r).get(l+(t.href||""));if(h){for(var _=0;_<h.length;_++)if(i=h[_],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){h.splice(_,1);break n}}i=r.createElement(l),zn(i,l,t),r.head.appendChild(i);break;case"meta":if(h=Dh("meta","content",r).get(l+(t.content||""))){for(_=0;_<h.length;_++)if(i=h[_],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){h.splice(_,1);break n}}i=r.createElement(l),zn(i,l,t),r.head.appendChild(i);break;default:throw Error(s(468,l))}i[cn]=e,Ze(i),l=i}e.stateNode=l}else jh(r,e.type,e.stateNode);else e.stateNode=Ah(r,l,e.memoizedProps);else i!==l?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,l===null?jh(r,e.type,e.stateNode):Ah(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&mu(e,e.memoizedProps,t.memoizedProps)}break;case 27:Jn(n,e),et(e),l&512&&(gn||t===null||nl(t,t.return)),t!==null&&l&4&&mu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Jn(n,e),et(e),l&512&&(gn||t===null||nl(t,t.return)),e.flags&32){r=e.stateNode;try{nn(r,"")}catch(ae){qe(e,e.return,ae)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,mu(e,r,t!==null?t.memoizedProps:r)),l&1024&&(_u=!0);break;case 6:if(Jn(n,e),et(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(ae){qe(e,e.return,ae)}}break;case 3:if(_o=null,r=qt,qt=ho(n.containerInfo),Jn(n,e),qt=r,et(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Oa(n.containerInfo)}catch(ae){qe(e,e.return,ae)}_u&&(_u=!1,jm(e));break;case 4:l=qt,qt=ho(e.stateNode.containerInfo),Jn(n,e),et(e),qt=l;break;case 12:Jn(n,e),et(e);break;case 31:Jn(n,e),et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Js(e,l)));break;case 13:Jn(n,e),et(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(no=yn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Js(e,l)));break;case 22:r=e.memoizedState!==null;var w=t!==null&&t.memoizedState!==null,A=xl,H=gn;if(xl=A||r,gn=H||w,Jn(n,e),gn=H,xl=A,et(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(t===null||w||xl||gn||Ir(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){w=t=n;try{if(i=w.stateNode,r)h=i.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{_=w.stateNode;var q=w.memoizedProps.style,O=q!=null&&q.hasOwnProperty("display")?q.display:null;_.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ae){qe(w,w.return,ae)}}}else if(n.tag===6){if(t===null){w=n;try{w.stateNode.nodeValue=r?"":w.memoizedProps}catch(ae){qe(w,w.return,ae)}}}else if(n.tag===18){if(t===null){w=n;try{var B=w.stateNode;r?xh(B,!0):xh(w.stateNode,!1)}catch(ae){qe(w,w.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Js(e,t))));break;case 19:Jn(n,e),et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Js(e,l)));break;case 30:break;case 21:break;default:Jn(n,e),et(e)}}function et(e){var n=e.flags;if(n&2){try{for(var t,l=e.return;l!==null;){if(wm(l)){t=l;break}l=l.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var r=t.stateNode,i=hu(e);Ws(e,i,r);break;case 5:var h=t.stateNode;t.flags&32&&(nn(h,""),t.flags&=-33);var _=hu(e);Ws(e,_,h);break;case 3:case 4:var w=t.stateNode.containerInfo,A=hu(e);pu(e,A,w);break;default:throw Error(s(161))}}catch(H){qe(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function wl(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(e,n.alternate,n),n=n.sibling}function Ir(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Zl(4,n,n.return),Ir(n);break;case 1:nl(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&xm(n,n.return,t),Ir(n);break;case 27:Bi(n.stateNode);case 26:case 5:nl(n,n.return),Ir(n);break;case 22:n.memoizedState===null&&Ir(n);break;case 30:Ir(n);break;default:Ir(n)}e=e.sibling}}function El(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,i=n,h=i.flags;switch(i.tag){case 0:case 11:case 15:El(r,i,t),Ni(4,i);break;case 1:if(El(r,i,t),l=i,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(A){qe(l,l.return,A)}if(l=i,r=l.updateQueue,r!==null){var _=l.stateNode;try{var w=r.shared.hiddenCallbacks;if(w!==null)for(r.shared.hiddenCallbacks=null,r=0;r<w.length;r++)cd(w[r],_)}catch(A){qe(l,l.return,A)}}t&&h&64&&vm(i),Ri(i,i.return);break;case 27:Em(i);case 26:case 5:El(r,i,t),t&&l===null&&h&4&&Sm(i),Ri(i,i.return);break;case 12:El(r,i,t);break;case 31:El(r,i,t),t&&h&4&&Mm(r,i);break;case 13:El(r,i,t),t&&h&4&&Am(r,i);break;case 22:i.memoizedState===null&&El(r,i,t),Ri(i,i.return);break;case 30:break;default:El(r,i,t)}n=n.sibling}}function gu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&mi(t))}function bu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mi(e))}function It(e,n,t,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Om(e,n,t,l),n=n.sibling}function Om(e,n,t,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:It(e,n,t,l),r&2048&&Ni(9,n);break;case 1:It(e,n,t,l);break;case 3:It(e,n,t,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mi(e)));break;case 12:if(r&2048){It(e,n,t,l),e=n.stateNode;try{var i=n.memoizedProps,h=i.id,_=i.onPostCommit;typeof _=="function"&&_(h,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){qe(n,n.return,w)}}else It(e,n,t,l);break;case 31:It(e,n,t,l);break;case 13:It(e,n,t,l);break;case 23:break;case 22:i=n.stateNode,h=n.alternate,n.memoizedState!==null?i._visibility&2?It(e,n,t,l):Ti(e,n):i._visibility&2?It(e,n,t,l):(i._visibility|=2,Sa(e,n,t,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&gu(h,n);break;case 24:It(e,n,t,l),r&2048&&bu(n.alternate,n);break;default:It(e,n,t,l)}}function Sa(e,n,t,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=e,h=n,_=t,w=l,A=h.flags;switch(h.tag){case 0:case 11:case 15:Sa(i,h,_,w,r),Ni(8,h);break;case 23:break;case 22:var H=h.stateNode;h.memoizedState!==null?H._visibility&2?Sa(i,h,_,w,r):Ti(i,h):(H._visibility|=2,Sa(i,h,_,w,r)),r&&A&2048&&gu(h.alternate,h);break;case 24:Sa(i,h,_,w,r),r&&A&2048&&bu(h.alternate,h);break;default:Sa(i,h,_,w,r)}n=n.sibling}}function Ti(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,l=n,r=l.flags;switch(l.tag){case 22:Ti(t,l),r&2048&&gu(l.alternate,l);break;case 24:Ti(t,l),r&2048&&bu(l.alternate,l);break;default:Ti(t,l)}n=n.sibling}}var Mi=8192;function wa(e,n,t){if(e.subtreeFlags&Mi)for(e=e.child;e!==null;)Cm(e,n,t),e=e.sibling}function Cm(e,n,t){switch(e.tag){case 26:wa(e,n,t),e.flags&Mi&&e.memoizedState!==null&&kg(t,qt,e.memoizedState,e.memoizedProps);break;case 5:wa(e,n,t);break;case 3:case 4:var l=qt;qt=ho(e.stateNode.containerInfo),wa(e,n,t),qt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Mi,Mi=16777216,wa(e,n,t),Mi=l):wa(e,n,t));break;default:wa(e,n,t)}}function zm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ai(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];Nn=l,Lm(l,e)}zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bm(e),e=e.sibling}function Bm(e){switch(e.tag){case 0:case 11:case 15:Ai(e),e.flags&2048&&Zl(9,e,e.return);break;case 3:Ai(e);break;case 12:Ai(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,eo(e)):Ai(e);break;default:Ai(e)}}function eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];Nn=l,Lm(l,e)}zm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Zl(8,n,n.return),eo(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,eo(n));break;default:eo(n)}e=e.sibling}}function Lm(e,n){for(;Nn!==null;){var t=Nn;switch(t.tag){case 0:case 11:case 15:Zl(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:mi(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Nn=l;else e:for(t=e;Nn!==null;){l=Nn;var r=l.sibling,i=l.return;if(Rm(l),l===t){Nn=null;break e}if(r!==null){r.return=i,Nn=r;break e}Nn=i}}}var G_={getCacheForType:function(e){var n=On(hn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return On(hn).controller.signal}},V_=typeof WeakMap=="function"?WeakMap:Map,He=0,Pe=null,Re=null,Me=0,Ye=0,mt=null,Wl=!1,Ea=!1,yu=!1,kl=0,sn=0,Jl=0,$r=0,vu=0,ht=0,ka=0,Di=null,nt=null,xu=!1,no=0,Um=0,to=1/0,lo=null,er=null,Sn=0,nr=null,Na=null,Nl=0,Su=0,wu=null,Hm=null,ji=0,Eu=null;function pt(){return(He&2)!==0&&Me!==0?Me&-Me:C.T!==null?Au():on()}function Gm(){if(ht===0)if((Me&536870912)===0||Oe){var e=qn;qn<<=1,(qn&3932160)===0&&(qn=262144),ht=e}else ht=536870912;return e=ft.current,e!==null&&(e.flags|=32),ht}function tt(e,n,t){(e===Pe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Ra(e,0),tr(e,Me,ht,!1)),_r(e,t),((He&2)===0||e!==Pe)&&(e===Pe&&((He&2)===0&&($r|=t),sn===4&&tr(e,Me,ht,!1)),tl(e))}function Vm(e,n,t){if((He&6)!==0)throw Error(s(327));var l=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Ln(e,n),r=l?I_(e,n):Nu(e,n,!0),i=l;do{if(r===0){Ea&&!l&&tr(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!Y_(t)){r=Nu(e,n,!1),i=!1;continue}if(r===2){if(i=n,e.errorRecoveryDisabledLanes&i)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){n=h;e:{var _=e;r=Di;var w=_.current.memoizedState.isDehydrated;if(w&&(Ra(_,h).flags|=256),h=Nu(_,h,!1),h!==2){if(yu&&!w){_.errorRecoveryDisabledLanes|=i,$r|=i,r=4;break e}i=nt,nt=r,i!==null&&(nt===null?nt=i:nt.push.apply(nt,i))}r=h}if(i=!1,r!==2)continue}}if(r===1){Ra(e,0),tr(e,n,0,!0);break}e:{switch(l=e,i=r,i){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:tr(l,n,ht,!Wl);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(r=no+300-yn(),10<r)){if(tr(l,n,ht,!Wl),mn(l,0,!0)!==0)break e;Nl=n,l.timeoutHandle=bh(Ym.bind(null,l,t,nt,lo,xu,n,ht,$r,ka,Wl,i,"Throttled",-0,0),r);break e}Ym(l,t,nt,lo,xu,n,ht,$r,ka,Wl,i,null,-0,0)}}break}while(!0);tl(e)}function Ym(e,n,t,l,r,i,h,_,w,A,H,q,O,B){if(e.timeoutHandle=-1,q=n.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},Cm(n,i,q);var ae=(i&62914560)===i?no-yn():(i&4194048)===i?Um-yn():0;if(ae=Ng(q,ae),ae!==null){Nl=i,e.cancelPendingCommit=ae(Qm.bind(null,e,n,i,t,l,r,h,_,w,H,q,null,O,B)),tr(e,i,h,!A);return}}Qm(e,n,i,t,l,r,h,_,w)}function Y_(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],i=r.getSnapshot;r=r.value;try{if(!Dn(i(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tr(e,n,t,l){n&=~vu,n&=~$r,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var i=31-Rn(r),h=1<<i;l[i]=-1,r&=~h}t!==0&&ls(e,t,n)}function ro(){return(He&6)===0?(Oi(0),!1):!0}function ku(){if(Re!==null){if(Ye===0)var e=Re.return;else e=Re,pl=Br=null,Vc(e),ga=null,pi=0,e=Re;for(;e!==null;)ym(e.alternate,e),e=e.return;Re=null}}function Ra(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,og(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Nl=0,ku(),Pe=e,Re=t=ml(e.current,null),Me=n,Ye=0,mt=null,Wl=!1,Ea=Ln(e,n),yu=!1,ka=ht=vu=$r=Jl=sn=0,nt=Di=null,xu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-Rn(l),i=1<<r;n|=e[r],l&=~i}return kl=n,ks(),t}function qm(e,n){we=null,C.H=wi,n===_a||n===Os?(n=ad(),Ye=3):n===Mc?(n=ad(),Ye=4):Ye=n===lu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mt=n,Re===null&&(sn=1,Ks(e,kt(n,e.current)))}function Im(){var e=ft.current;return e===null?!0:(Me&4194048)===Me?Mt===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Mt:!1}function $m(){var e=C.H;return C.H=wi,e===null?wi:e}function Xm(){var e=C.A;return C.A=G_,e}function ao(){sn=4,Wl||(Me&4194048)!==Me&&ft.current!==null||(Ea=!0),(Jl&134217727)===0&&($r&134217727)===0||Pe===null||tr(Pe,Me,ht,!1)}function Nu(e,n,t){var l=He;He|=2;var r=$m(),i=Xm();(Pe!==e||Me!==n)&&(lo=null,Ra(e,n)),n=!1;var h=sn;e:do try{if(Ye!==0&&Re!==null){var _=Re,w=mt;switch(Ye){case 8:ku(),h=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(n=!0);var A=Ye;if(Ye=0,mt=null,Ta(e,_,w,A),t&&Ea){h=0;break e}break;default:A=Ye,Ye=0,mt=null,Ta(e,_,w,A)}}q_(),h=sn;break}catch(H){qm(e,H)}while(!0);return n&&e.shellSuspendCounter++,pl=Br=null,He=l,C.H=r,C.A=i,Re===null&&(Pe=null,Me=0,ks()),h}function q_(){for(;Re!==null;)Km(Re)}function I_(e,n){var t=He;He|=2;var l=$m(),r=Xm();Pe!==e||Me!==n?(lo=null,to=yn()+500,Ra(e,n)):Ea=Ln(e,n);e:do try{if(Ye!==0&&Re!==null){n=Re;var i=mt;n:switch(Ye){case 1:Ye=0,mt=null,Ta(e,n,i,1);break;case 2:case 9:if(ld(i)){Ye=0,mt=null,Pm(n);break}n=function(){Ye!==2&&Ye!==9||Pe!==e||(Ye=7),tl(e)},i.then(n,n);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:ld(i)?(Ye=0,mt=null,Pm(n)):(Ye=0,mt=null,Ta(e,n,i,7));break;case 5:var h=null;switch(Re.tag){case 26:h=Re.memoizedState;case 5:case 27:var _=Re;if(h?Oh(h):_.stateNode.complete){Ye=0,mt=null;var w=_.sibling;if(w!==null)Re=w;else{var A=_.return;A!==null?(Re=A,io(A)):Re=null}break n}}Ye=0,mt=null,Ta(e,n,i,5);break;case 6:Ye=0,mt=null,Ta(e,n,i,6);break;case 8:ku(),sn=6;break e;default:throw Error(s(462))}}$_();break}catch(H){qm(e,H)}while(!0);return pl=Br=null,C.H=l,C.A=r,He=t,Re!==null?0:(Pe=null,Me=0,ks(),sn)}function $_(){for(;Re!==null&&!Fr();)Km(Re)}function Km(e){var n=gm(e.alternate,e,kl);e.memoizedProps=e.pendingProps,n===null?io(e):Re=n}function Pm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=fm(t,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=fm(t,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Vc(n);default:ym(t,n),n=Re=Xf(n,kl),n=gm(t,n,kl)}e.memoizedProps=e.pendingProps,n===null?io(e):Re=n}function Ta(e,n,t,l){pl=Br=null,Vc(n),ga=null,pi=0;var r=n.return;try{if(O_(e,r,n,t,Me)){sn=1,Ks(e,kt(t,e.current)),Re=null;return}}catch(i){if(r!==null)throw Re=r,i;sn=1,Ks(e,kt(t,e.current)),Re=null;return}n.flags&32768?(Oe||l===1?e=!0:Ea||(Me&536870912)!==0?e=!1:(Wl=e=!0,(l===2||l===9||l===3||l===6)&&(l=ft.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fm(n,e)):io(n)}function io(e){var n=e;do{if((n.flags&32768)!==0){Fm(n,Wl);return}e=n.return;var t=B_(n.alternate,n,kl);if(t!==null){Re=t;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);sn===0&&(sn=5)}function Fm(e,n){do{var t=L_(e.alternate,e);if(t!==null){t.flags&=32767,Re=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=t}while(e!==null);sn=6,Re=null}function Qm(e,n,t,l,r,i,h,_,w){e.cancelPendingCommit=null;do so();while(Sn!==0);if((He&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(i=n.lanes|n.childLanes,i|=hc,rl(e,t,i,h,_,w),e===Pe&&(Re=Pe=null,Me=0),Na=n,nr=e,Nl=t,Su=i,wu=r,Hm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,F_(hr,function(){return nh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,r=Q.p,Q.p=2,h=He,He|=4;try{U_(e,n,t)}finally{He=h,Q.p=r,C.T=l}}Sn=1,Zm(),Wm(),Jm()}}function Zm(){if(Sn===1){Sn=0;var e=nr,n=Na,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=C.T,C.T=null;var l=Q.p;Q.p=2;var r=He;He|=4;try{Dm(n,e);var i=Uu,h=ci(e.containerInfo),_=i.focusedElem,w=i.selectionRange;if(h!==_&&_&&_.ownerDocument&&ws(_.ownerDocument.documentElement,_)){if(w!==null&&cc(_)){var A=w.start,H=w.end;if(H===void 0&&(H=A),"selectionStart"in _)_.selectionStart=A,_.selectionEnd=Math.min(H,_.value.length);else{var q=_.ownerDocument||document,O=q&&q.defaultView||window;if(O.getSelection){var B=O.getSelection(),ae=_.textContent.length,pe=Math.min(w.start,ae),Xe=w.end===void 0?pe:Math.min(w.end,ae);!B.extend&&pe>Xe&&(h=Xe,Xe=pe,pe=h);var R=Vl(_,pe),k=Vl(_,Xe);if(R&&k&&(B.rangeCount!==1||B.anchorNode!==R.node||B.anchorOffset!==R.offset||B.focusNode!==k.node||B.focusOffset!==k.offset)){var M=q.createRange();M.setStart(R.node,R.offset),B.removeAllRanges(),pe>Xe?(B.addRange(M),B.extend(k.node,k.offset)):(M.setEnd(k.node,k.offset),B.addRange(M))}}}}for(q=[],B=_;B=B.parentNode;)B.nodeType===1&&q.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<q.length;_++){var V=q[_];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}vo=!!Lu,Uu=Lu=null}finally{He=r,Q.p=l,C.T=t}}e.current=n,Sn=2}}function Wm(){if(Sn===2){Sn=0;var e=nr,n=Na,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=C.T,C.T=null;var l=Q.p;Q.p=2;var r=He;He|=4;try{Nm(e,n.alternate,n)}finally{He=r,Q.p=l,C.T=t}}Sn=3}}function Jm(){if(Sn===4||Sn===3){Sn=0,jl();var e=nr,n=Na,t=Nl,l=Hm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Na=nr=null,eh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(er=null),vt(t),n=n.stateNode,vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(pr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=C.T,r=Q.p,Q.p=2,C.T=null;try{for(var i=e.onRecoverableError,h=0;h<l.length;h++){var _=l[h];i(_.value,{componentStack:_.stack})}}finally{C.T=n,Q.p=r}}(Nl&3)!==0&&so(),tl(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===Eu?ji++:(ji=0,Eu=e):ji=0,Oi(0)}}function eh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,mi(n)))}function so(){return Zm(),Wm(),Jm(),nh()}function nh(){if(Sn!==5)return!1;var e=nr,n=Su;Su=0;var t=vt(Nl),l=C.T,r=Q.p;try{Q.p=32>t?32:t,C.T=null,t=wu,wu=null;var i=nr,h=Nl;if(Sn=0,Na=nr=null,Nl=0,(He&6)!==0)throw Error(s(331));var _=He;if(He|=4,Bm(i.current),Om(i,i.current,h,t),He=_,Oi(0,!1),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(pr,i)}catch{}return!0}finally{Q.p=r,C.T=l,eh(e,n)}}function th(e,n,t){n=kt(t,n),n=tu(e.stateNode,n,2),e=Pl(e,n,2),e!==null&&(_r(e,2),tl(e))}function qe(e,n,t){if(e.tag===3)th(e,e,t);else for(;n!==null;){if(n.tag===3){th(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(er===null||!er.has(l))){e=kt(t,e),t=lm(2),l=Pl(n,t,2),l!==null&&(rm(t,l,n,e),_r(l,2),tl(l));break}}n=n.return}}function Ru(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new V_;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(t)||(yu=!0,r.add(t),e=X_.bind(null,e,n,t),n.then(e,e))}function X_(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Pe===e&&(Me&t)===t&&(sn===4||sn===3&&(Me&62914560)===Me&&300>yn()-no?(He&2)===0&&Ra(e,0):vu|=t,ka===Me&&(ka=0)),tl(e)}function lh(e,n){n===0&&(n=$a()),e=Or(e,n),e!==null&&(_r(e,n),tl(e))}function K_(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),lh(e,t)}function P_(e,n){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),lh(e,t)}function F_(e,n){return Dl(e,n)}var oo=null,Ma=null,Tu=!1,co=!1,Mu=!1,lr=0;function tl(e){e!==Ma&&e.next===null&&(Ma===null?oo=Ma=e:Ma=Ma.next=e),co=!0,Tu||(Tu=!0,Z_())}function Oi(e,n){if(!Mu&&co){Mu=!0;do for(var t=!1,l=oo;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var i=0;else{var h=l.suspendedLanes,_=l.pingedLanes;i=(1<<31-Rn(42|e)+1)-1,i&=r&~(h&~_),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,sh(l,i))}else i=Me,i=mn(l,l===Pe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ln(l,i)||(t=!0,sh(l,i));l=l.next}while(t);Mu=!1}}function Q_(){rh()}function rh(){co=Tu=!1;var e=0;lr!==0&&sg()&&(e=lr);for(var n=yn(),t=null,l=oo;l!==null;){var r=l.next,i=ah(l,n);i===0?(l.next=null,t===null?oo=r:t.next=r,r===null&&(Ma=t)):(t=l,(e!==0||(i&3)!==0)&&(co=!0)),l=r}Sn!==0&&Sn!==5||Oi(e),lr!==0&&(lr=0)}function ah(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var h=31-Rn(i),_=1<<h,w=r[h];w===-1?((_&t)===0||(_&l)!==0)&&(r[h]=Go(_,n)):w<=n&&(e.expiredLanes|=_),i&=~_}if(n=Pe,t=Me,t=mn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===n&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&yt(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ln(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(l!==null&&yt(l),vt(t)){case 2:case 8:t=Ia;break;case 32:t=hr;break;case 268435456:t=lt;break;default:t=hr}return l=ih.bind(null,e),t=Dl(t,l),e.callbackPriority=n,e.callbackNode=t,n}return l!==null&&l!==null&&yt(l),e.callbackPriority=2,e.callbackNode=null,2}function ih(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(so()&&e.callbackNode!==t)return null;var l=Me;return l=mn(e,e===Pe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vm(e,l,n),ah(e,yn()),e.callbackNode!=null&&e.callbackNode===t?ih.bind(null,e):null)}function sh(e,n){if(so())return null;Vm(e,n,!0)}function Z_(){cg(function(){(He&6)!==0?Dl(mr,Q_):rh()})}function Au(){if(lr===0){var e=ha;e===0&&(e=Kt,Kt<<=1,(Kt&261888)===0&&(Kt=256)),lr=e}return lr}function oh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(""+e)}function ch(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function W_(e,n,t,l,r){if(n==="submit"&&t&&t.stateNode===r){var i=oh((r[un]||null).action),h=l.submitter;h&&(n=(n=h[un]||null)?oh(n.formAction):h.getAttribute("formAction"),n!==null&&(i=n,h=null));var _=new la("action","action",null,l,r);e.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(lr!==0){var w=h?ch(r,h):new FormData(r);Qc(t,{pending:!0,data:w,method:r.method,action:i},null,w)}}else typeof i=="function"&&(_.preventDefault(),w=h?ch(r,h):new FormData(r),Qc(t,{pending:!0,data:w,method:r.method,action:i},i,w))},currentTarget:r}]})}}for(var Du=0;Du<mc.length;Du++){var ju=mc[Du],J_=ju.toLowerCase(),eg=ju[0].toUpperCase()+ju.slice(1);Yt(J_,"on"+eg)}Yt(Gf,"onAnimationEnd"),Yt(Vf,"onAnimationIteration"),Yt(Yf,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(__,"onTransitionRun"),Yt(g_,"onTransitionStart"),Yt(b_,"onTransitionCancel"),Yt(qf,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ng=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ci));function uh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],r=l.event;l=l.listeners;e:{var i=void 0;if(n)for(var h=l.length-1;0<=h;h--){var _=l[h],w=_.instance,A=_.currentTarget;if(_=_.listener,w!==i&&r.isPropagationStopped())break e;i=_,r.currentTarget=A;try{i(r)}catch(H){Es(H)}r.currentTarget=null,i=w}else for(h=0;h<l.length;h++){if(_=l[h],w=_.instance,A=_.currentTarget,_=_.listener,w!==i&&r.isPropagationStopped())break e;i=_,r.currentTarget=A;try{i(r)}catch(H){Es(H)}r.currentTarget=null,i=w}}}}function Te(e,n){var t=n[Lt];t===void 0&&(t=n[Lt]=new Set);var l=e+"__bubble";t.has(l)||(fh(n,e,2,!1),t.add(l))}function Ou(e,n,t){var l=0;n&&(l|=4),fh(t,e,l,n)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Cu(e){if(!e[uo]){e[uo]=!0,il.forEach(function(t){t!=="selectionchange"&&(ng.has(t)||Ou(t,!1,e),Ou(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uo]||(n[uo]=!0,Ou("selectionchange",!1,n))}}function fh(e,n,t,l){switch(Gh(n)){case 2:var r=Mg;break;case 8:r=Ag;break;default:r=Fu}t=r.bind(null,n,t,e),r=void 0,!Ja||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function zu(e,n,t,l,r){var i=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var _=l.stateNode.containerInfo;if(_===r)break;if(h===4)for(h=l.return;h!==null;){var w=h.tag;if((w===3||w===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;_!==null;){if(h=Ft(_),h===null)return;if(w=h.tag,w===5||w===6||w===26||w===27){l=i=h;continue e}_=_.parentNode}}l=l.return}vr(function(){var A=i,H=Wa(t),q=[];e:{var O=If.get(e);if(O!==void 0){var B=la,ae=e;switch(e){case"keypress":if(Wt(t)===0)break e;case"keydown":case"keyup":B=ps;break;case"focusin":ae="focus",B=li;break;case"focusout":ae="blur",B=li;break;case"beforeblur":case"afterblur":B=li;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Yo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=nc;break;case Gf:case Vf:case Yf:B=$o;break;case qf:B=tc;break;case"scroll":case"scrollend":B=ds;break;case"wheel":B=rc;break;case"copy":case"cut":case"paste":B=Ko;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=ai;break;case"toggle":case"beforetoggle":B=ic}var pe=(n&4)!==0,Xe=!pe&&(e==="scroll"||e==="scrollend"),R=pe?O!==null?O+"Capture":null:O;pe=[];for(var k=A,M;k!==null;){var V=k;if(M=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||M===null||R===null||(V=Qt(k,R),V!=null&&pe.push(zi(k,V,M))),Xe)break;k=k.return}0<pe.length&&(O=new B(O,ae,null,t,H),q.push({event:O,listeners:pe}))}}if((n&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",O&&t!==sl&&(ae=t.relatedTarget||t.fromElement)&&(Ft(ae)||ae[Mn]))break e;if((B||O)&&(O=H.window===H?H:(O=H.ownerDocument)?O.defaultView||O.parentWindow:window,B?(ae=t.relatedTarget||t.toElement,B=A,ae=ae?Ft(ae):null,ae!==null&&(Xe=m(ae),pe=ae.tag,ae!==Xe||pe!==5&&pe!==27&&pe!==6)&&(ae=null)):(B=null,ae=A),B!==ae)){if(pe=ti,V="onMouseLeave",R="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(pe=ai,V="onPointerLeave",R="onPointerEnter",k="pointer"),Xe=B==null?O:Vt(B),M=ae==null?O:Vt(ae),O=new pe(V,k+"leave",B,t,H),O.target=Xe,O.relatedTarget=M,V=null,Ft(H)===A&&(pe=new pe(R,k+"enter",ae,t,H),pe.target=M,pe.relatedTarget=Xe,V=pe),Xe=V,B&&ae)n:{for(pe=tg,R=B,k=ae,M=0,V=R;V;V=pe(V))M++;V=0;for(var me=k;me;me=pe(me))V++;for(;0<M-V;)R=pe(R),M--;for(;0<V-M;)k=pe(k),V--;for(;M--;){if(R===k||k!==null&&R===k.alternate){pe=R;break n}R=pe(R),k=pe(k)}pe=null}else pe=null;B!==null&&dh(q,O,B,pe,!1),ae!==null&&Xe!==null&&dh(q,Xe,ae,pe,!0)}}e:{if(O=A?Vt(A):window,B=O.nodeName&&O.nodeName.toLowerCase(),B==="select"||B==="input"&&O.type==="file")var Be=se;else if(Ss(O))if(Se)Be=Gl;else{Be=si;var oe=fl}else B=O.nodeName,!B||B.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?A&&Za(A.elementType)&&(Be=se):Be=Ar;if(Be&&(Be=Be(e,A))){d(q,Be,t,H);break e}oe&&oe(e,O,A),e==="focusout"&&A&&O.type==="number"&&A.memoizedProps.value!=null&&Fa(O,"number",O.value)}switch(oe=A?Vt(A):window,e){case"focusin":(Ss(oe)||oe.contentEditable==="true")&&(ia=oe,uc=A,ui=null);break;case"focusout":ui=uc=ia=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Uf(q,t,H);break;case"selectionchange":if(p_)break;case"keydown":case"keyup":Uf(q,t,H)}var ke;if(Tr)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else cl?Hl(e,t)&&(Ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Ae="onCompositionStart");Ae&&(bs&&t.locale!=="ko"&&(cl||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&cl&&(ke=ei()):(Zt=H,ct="value"in Zt?Zt.value:Zt.textContent,cl=!0)),oe=fo(A,Ae),0<oe.length&&(Ae=new hs(Ae,e,null,t,H),q.push({event:Ae,listeners:oe}),ke?Ae.data=ke:(ke=Mr(t),ke!==null&&(Ae.data=ke)))),(ke=gs?ii(e,t):xs(e,t))&&(Ae=fo(A,"onBeforeInput"),0<Ae.length&&(oe=new hs("onBeforeInput","beforeinput",null,t,H),q.push({event:oe,listeners:Ae}),oe.data=ke)),W_(q,e,A,t,H)}uh(q,n)})}function zi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function fo(e,n){for(var t=n+"Capture",l=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Qt(e,t),r!=null&&l.unshift(zi(e,r,i)),r=Qt(e,n),r!=null&&l.push(zi(e,r,i))),e.tag===3)return l;e=e.return}return[]}function tg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dh(e,n,t,l,r){for(var i=n._reactName,h=[];t!==null&&t!==l;){var _=t,w=_.alternate,A=_.stateNode;if(_=_.tag,w!==null&&w===l)break;_!==5&&_!==26&&_!==27||A===null||(w=A,r?(A=Qt(t,i),A!=null&&h.unshift(zi(t,A,w))):r||(A=Qt(t,i),A!=null&&h.push(zi(t,A,w)))),t=t.return}h.length!==0&&e.push({event:n,listeners:h})}var lg=/\r\n?/g,rg=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace(lg,`
`).replace(rg,"")}function hh(e,n){return n=mh(n),mh(e)===n}function $e(e,n,t,l,r,i){switch(t){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||nn(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&nn(e,""+l);break;case"className":ea(e,"class",l);break;case"tabIndex":ea(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ea(e,t,l);break;case"style":yr(e,l,i);break;case"data":if(n!=="object"){ea(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Ll(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&$e(e,n,"name",r.name,r,null),$e(e,n,"formEncType",r.formEncType,r,null),$e(e,n,"formMethod",r.formMethod,r,null),$e(e,n,"formTarget",r.formTarget,r,null)):($e(e,n,"encType",r.encType,r,null),$e(e,n,"method",r.method,r,null),$e(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Ll(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=tn);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Ll(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Jr(e,"popover",l);break;case"xlinkActuate":$n(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$n(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$n(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$n(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$n(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$n(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$n(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Jr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Zn.get(t)||t,Jr(e,t,l))}}function Bu(e,n,t,l,r,i){switch(t){case"style":yr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"children":typeof l=="string"?nn(e,l):(typeof l=="number"||typeof l=="bigint")&&nn(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ka.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),n=t.slice(2,r?t.length-7:void 0),i=e[un]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,r),typeof l=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,l,r);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Jr(e,t,l)}}}function zn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,r=!1,i;for(i in t)if(t.hasOwnProperty(i)){var h=t[i];if(h!=null)switch(i){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$e(e,n,i,h,t,null)}}r&&$e(e,n,"srcSet",t.srcSet,t,null),l&&$e(e,n,"src",t.src,t,null);return;case"input":Te("invalid",e);var _=i=h=r=null,w=null,A=null;for(l in t)if(t.hasOwnProperty(l)){var H=t[l];if(H!=null)switch(l){case"name":r=H;break;case"type":h=H;break;case"checked":w=H;break;case"defaultChecked":A=H;break;case"value":i=H;break;case"defaultValue":_=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,n));break;default:$e(e,n,l,H,t,null)}}os(e,i,_,w,A,h,r,!1);return;case"select":Te("invalid",e),l=h=i=null;for(r in t)if(t.hasOwnProperty(r)&&(_=t[r],_!=null))switch(r){case"value":i=_;break;case"defaultValue":h=_;break;case"multiple":l=_;default:$e(e,n,r,_,t,null)}n=i,t=h,e.multiple=!!l,n!=null?xt(e,!!l,n,!1):t!=null&&xt(e,!!l,t,!0);return;case"textarea":Te("invalid",e),i=r=l=null;for(h in t)if(t.hasOwnProperty(h)&&(_=t[h],_!=null))switch(h){case"value":l=_;break;case"defaultValue":r=_;break;case"children":i=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(91));break;default:$e(e,n,h,_,t,null)}br(e,l,r,i);return;case"option":for(w in t)if(t.hasOwnProperty(w)&&(l=t[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$e(e,n,w,l,t,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<Ci.length;l++)Te(Ci[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in t)if(t.hasOwnProperty(A)&&(l=t[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$e(e,n,A,l,t,null)}return;default:if(Za(n)){for(H in t)t.hasOwnProperty(H)&&(l=t[H],l!==void 0&&Bu(e,n,H,l,t,void 0));return}}for(_ in t)t.hasOwnProperty(_)&&(l=t[_],l!=null&&$e(e,n,_,l,t,null))}function ag(e,n,t,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,h=null,_=null,w=null,A=null,H=null;for(B in t){var q=t[B];if(t.hasOwnProperty(B)&&q!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=q;default:l.hasOwnProperty(B)||$e(e,n,B,null,l,q)}}for(var O in l){var B=l[O];if(q=t[O],l.hasOwnProperty(O)&&(B!=null||q!=null))switch(O){case"type":i=B;break;case"name":r=B;break;case"checked":A=B;break;case"defaultChecked":H=B;break;case"value":h=B;break;case"defaultValue":_=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,n));break;default:B!==q&&$e(e,n,O,B,l,q)}}Y(e,h,_,w,A,H,i,r);return;case"select":B=h=_=O=null;for(i in t)if(w=t[i],t.hasOwnProperty(i)&&w!=null)switch(i){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(i)||$e(e,n,i,null,l,w)}for(r in l)if(i=l[r],w=t[r],l.hasOwnProperty(r)&&(i!=null||w!=null))switch(r){case"value":O=i;break;case"defaultValue":_=i;break;case"multiple":h=i;default:i!==w&&$e(e,n,r,i,l,w)}n=_,t=h,l=B,O!=null?xt(e,!!t,O,!1):!!l!=!!t&&(n!=null?xt(e,!!t,n,!0):xt(e,!!t,t?[]:"",!1));return;case"textarea":B=O=null;for(_ in t)if(r=t[_],t.hasOwnProperty(_)&&r!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:$e(e,n,_,null,l,r)}for(h in l)if(r=l[h],i=t[h],l.hasOwnProperty(h)&&(r!=null||i!=null))switch(h){case"value":O=r;break;case"defaultValue":B=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==i&&$e(e,n,h,r,l,i)}Qa(e,O,B);return;case"option":for(var ae in t)if(O=t[ae],t.hasOwnProperty(ae)&&O!=null&&!l.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:$e(e,n,ae,null,l,O)}for(w in l)if(O=l[w],B=t[w],l.hasOwnProperty(w)&&O!==B&&(O!=null||B!=null))switch(w){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:$e(e,n,w,O,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in t)O=t[pe],t.hasOwnProperty(pe)&&O!=null&&!l.hasOwnProperty(pe)&&$e(e,n,pe,null,l,O);for(A in l)if(O=l[A],B=t[A],l.hasOwnProperty(A)&&O!==B&&(O!=null||B!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,n));break;default:$e(e,n,A,O,l,B)}return;default:if(Za(n)){for(var Xe in t)O=t[Xe],t.hasOwnProperty(Xe)&&O!==void 0&&!l.hasOwnProperty(Xe)&&Bu(e,n,Xe,void 0,l,O);for(H in l)O=l[H],B=t[H],!l.hasOwnProperty(H)||O===B||O===void 0&&B===void 0||Bu(e,n,H,O,l,B);return}}for(var R in t)O=t[R],t.hasOwnProperty(R)&&O!=null&&!l.hasOwnProperty(R)&&$e(e,n,R,null,l,O);for(q in l)O=l[q],B=t[q],!l.hasOwnProperty(q)||O===B||O==null&&B==null||$e(e,n,q,O,l,B)}function ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ig(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],i=r.transferSize,h=r.initiatorType,_=r.duration;if(i&&_&&ph(h)){for(h=0,_=r.responseEnd,l+=1;l<t.length;l++){var w=t[l],A=w.startTime;if(A>_)break;var H=w.transferSize,q=w.initiatorType;H&&ph(q)&&(w=w.responseEnd,h+=H*(w<_?1:(_-A)/(w-A)))}if(--l,n+=8*(i+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lu=null,Uu=null;function mo(e){return e.nodeType===9?e:e.ownerDocument}function _h(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gu=null;function sg(){var e=window.event;return e&&e.type==="popstate"?e===Gu?!1:(Gu=e,!0):(Gu=null,!1)}var bh=typeof setTimeout=="function"?setTimeout:void 0,og=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,cg=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(e){return yh.resolve(null).then(e).catch(ug)}:bh;function ug(e){setTimeout(function(){throw e})}function rr(e){return e==="head"}function vh(e,n){var t=n,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(r),Oa(n);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Bi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Bi(t);for(var i=t.firstChild;i;){var h=i.nextSibling,_=i.nodeName;i[Ht]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=h}}else t==="body"&&Bi(e.ownerDocument.body);t=r}while(t);Oa(n)}function xh(e,n){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Vu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Vu(t),Gt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function fg(e,n,t,l){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ht])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function dg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function Sh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=At(e.nextSibling),e===null))return null;return e}function Yu(e){return e.data==="$?"||e.data==="$~"}function qu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var l=function(){n(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function At(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Iu=null;function wh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return At(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Eh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function kh(e,n,t){switch(n=mo(t),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gt(e)}var Dt=new Map,Nh=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rl=Q.d;Q.d={f:hg,r:pg,D:_g,C:gg,L:bg,m:yg,X:xg,S:vg,M:Sg};function hg(){var e=Rl.f(),n=ro();return e||n}function pg(e){var n=In(e);n!==null&&n.tag===5&&n.type==="form"?qd(n):Rl.r(e)}var Aa=typeof document>"u"?null:document;function Rh(e,n,t){var l=Aa;if(l&&typeof n=="string"&&n){var r=Hn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),Nh.has(r)||(Nh.add(r),e={rel:e,crossOrigin:t,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),zn(n,"link",e),Ze(n),l.head.appendChild(n)))}}function _g(e){Rl.D(e),Rh("dns-prefetch",e,null)}function gg(e,n){Rl.C(e,n),Rh("preconnect",e,n)}function bg(e,n,t){Rl.L(e,n,t);var l=Aa;if(l&&e&&n){var r='link[rel="preload"][as="'+Hn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+Hn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+Hn(t.imageSizes)+'"]')):r+='[href="'+Hn(e)+'"]';var i=r;switch(n){case"style":i=Da(e);break;case"script":i=ja(e)}Dt.has(i)||(e=N({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Dt.set(i,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Li(i))||n==="script"&&l.querySelector(Ui(i))||(n=l.createElement("link"),zn(n,"link",e),Ze(n),l.head.appendChild(n)))}}function yg(e,n){Rl.m(e,n);var t=Aa;if(t&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Hn(l)+'"][href="'+Hn(e)+'"]',i=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ja(e)}if(!Dt.has(i)&&(e=N({rel:"modulepreload",href:e},n),Dt.set(i,e),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ui(i)))return}l=t.createElement("link"),zn(l,"link",e),Ze(l),t.head.appendChild(l)}}}function vg(e,n,t){Rl.S(e,n,t);var l=Aa;if(l&&e){var r=Qn(l).hoistableStyles,i=Da(e);n=n||"default";var h=r.get(i);if(!h){var _={loading:0,preload:null};if(h=l.querySelector(Li(i)))_.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Dt.get(i))&&$u(e,t);var w=h=l.createElement("link");Ze(w),zn(w,"link",e),w._p=new Promise(function(A,H){w.onload=A,w.onerror=H}),w.addEventListener("load",function(){_.loading|=1}),w.addEventListener("error",function(){_.loading|=2}),_.loading|=4,po(h,n,l)}h={type:"stylesheet",instance:h,count:1,state:_},r.set(i,h)}}}function xg(e,n){Rl.X(e,n);var t=Aa;if(t&&e){var l=Qn(t).hoistableScripts,r=ja(e),i=l.get(r);i||(i=t.querySelector(Ui(r)),i||(e=N({src:e,async:!0},n),(n=Dt.get(r))&&Xu(e,n),i=t.createElement("script"),Ze(i),zn(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(r,i))}}function Sg(e,n){Rl.M(e,n);var t=Aa;if(t&&e){var l=Qn(t).hoistableScripts,r=ja(e),i=l.get(r);i||(i=t.querySelector(Ui(r)),i||(e=N({src:e,async:!0,type:"module"},n),(n=Dt.get(r))&&Xu(e,n),i=t.createElement("script"),Ze(i),zn(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(r,i))}}function Th(e,n,t,l){var r=(r=F.current)?ho(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Da(t.href),t=Qn(r).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Da(t.href);var i=Qn(r).hoistableStyles,h=i.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,h),(i=r.querySelector(Li(e)))&&!i._p&&(h.instance=i,h.state.loading=5),Dt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Dt.set(e,t),i||wg(r,e,t,h.state))),n&&l===null)throw Error(s(528,""));return h}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ja(t),t=Qn(r).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Da(e){return'href="'+Hn(e)+'"'}function Li(e){return'link[rel="stylesheet"]['+e+"]"}function Mh(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function wg(e,n,t,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),zn(n,"link",t),Ze(n),e.head.appendChild(n))}function ja(e){return'[src="'+Hn(e)+'"]'}function Ui(e){return"script[async]"+e}function Ah(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Hn(t.href)+'"]');if(l)return n.instance=l,Ze(l),l;var r=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),zn(l,"style",r),po(l,t.precedence,e),n.instance=l;case"stylesheet":r=Da(t.href);var i=e.querySelector(Li(r));if(i)return n.state.loading|=4,n.instance=i,Ze(i),i;l=Mh(t),(r=Dt.get(r))&&$u(l,r),i=(e.ownerDocument||e).createElement("link"),Ze(i);var h=i;return h._p=new Promise(function(_,w){h.onload=_,h.onerror=w}),zn(i,"link",l),n.state.loading|=4,po(i,t.precedence,e),n.instance=i;case"script":return i=ja(t.src),(r=e.querySelector(Ui(i)))?(n.instance=r,Ze(r),r):(l=t,(r=Dt.get(i))&&(l=N({},t),Xu(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ze(r),zn(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,po(l,t.precedence,e));return n.instance}function po(e,n,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,i=r,h=0;h<l.length;h++){var _=l[h];if(_.dataset.precedence===n)i=_;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function $u(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var _o=null;function Dh(e,n,t){if(_o===null){var l=new Map,r=_o=new Map;r.set(t,l)}else r=_o,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var i=t[r];if(!(i[Ht]||i[cn]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var h=i.getAttribute(n)||"";h=e+h;var _=l.get(h);_?_.push(i):l.set(h,[i])}}return l}function jh(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Eg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Oh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kg(e,n,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Da(l.href),i=n.querySelector(Li(r));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=go.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=i,Ze(i);return}i=n.ownerDocument||n,l=Mh(l),(r=Dt.get(r))&&$u(l,r),i=i.createElement("link"),Ze(i);var h=i;h._p=new Promise(function(_,w){h.onload=_,h.onerror=w}),zn(i,"link",l),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=go.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Ku=0;function Ng(e,n){return e.stylesheets&&e.count===0&&yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+n);0<e.imgBytes&&Ku===0&&(Ku=62500*ig());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ku?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function yo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,n.forEach(Rg,e),bo=null,go.call(e))}function Rg(e,n){if(!(n.state.loading&4)){var t=bo.get(e);if(t)var l=t.get(null);else{t=new Map,bo.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var h=r[i];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(t.set(h.dataset.precedence,h),l=h)}l&&t.set(null,l)}r=n.instance,h=r.getAttribute("data-precedence"),i=t.get(h)||l,i===l&&t.set(null,r),t.set(h,r),this.count++,l=go.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Hi={$$typeof:fe,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Tg(e,n,t,l,r,i,h,_,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pt(0),this.hiddenUpdates=Pt(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Ch(e,n,t,l,r,i,h,_,w,A,H,q){return e=new Tg(e,n,t,h,w,A,H,q,_),n=1,i===!0&&(n|=24),i=ut(3,null,null,n),e.current=i,i.stateNode=e,n=Nc(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:n},Ac(i),e}function zh(e){return e?(e=ca,e):ca}function Bh(e,n,t,l,r,i){r=zh(r),l.context===null?l.context=r:l.pendingContext=r,l=Kl(n),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=Pl(e,l,n),t!==null&&(tt(t,e,n),gi(t,e,n))}function Lh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Pu(e,n){Lh(e,n),(e=e.alternate)&&Lh(e,n)}function Uh(e){if(e.tag===13||e.tag===31){var n=Or(e,67108864);n!==null&&tt(n,e,67108864),Pu(e,67108864)}}function Hh(e){if(e.tag===13||e.tag===31){var n=pt();n=zl(n);var t=Or(e,n);t!==null&&tt(t,e,n),Pu(e,n)}}var vo=!0;function Mg(e,n,t,l){var r=C.T;C.T=null;var i=Q.p;try{Q.p=2,Fu(e,n,t,l)}finally{Q.p=i,C.T=r}}function Ag(e,n,t,l){var r=C.T;C.T=null;var i=Q.p;try{Q.p=8,Fu(e,n,t,l)}finally{Q.p=i,C.T=r}}function Fu(e,n,t,l){if(vo){var r=Qu(l);if(r===null)zu(e,n,l,xo,t),Vh(e,l);else if(jg(r,e,n,t,l))l.stopPropagation();else if(Vh(e,l),n&4&&-1<Dg.indexOf(e)){for(;r!==null;){var i=In(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var h=Tn(i.pendingLanes);if(h!==0){var _=i;for(_.pendingLanes|=2,_.entangledLanes|=2;h;){var w=1<<31-Rn(h);_.entanglements[1]|=w,h&=~w}tl(i),(He&6)===0&&(to=yn()+500,Oi(0))}}break;case 31:case 13:_=Or(i,2),_!==null&&tt(_,i,2),ro(),Pu(i,2)}if(i=Qu(l),i===null&&zu(e,n,l,xo,t),i===r)break;r=i}r!==null&&l.stopPropagation()}else zu(e,n,l,null,t)}}function Qu(e){return e=Wa(e),Zu(e)}var xo=null;function Zu(e){if(xo=null,e=Ft(e),e!==null){var n=m(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=p(n),e!==null)return e;e=null}else if(t===31){if(e=b(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xo=e,null}function Gh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dr()){case mr:return 2;case Ia:return 8;case hr:case Fn:return 32;case lt:return 268435456;default:return 32}default:return 32}}var Wu=!1,ar=null,ir=null,sr=null,Gi=new Map,Vi=new Map,or=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vh(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(n.pointerId)}}function Yi(e,n,t,l,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[r]},n!==null&&(n=In(n),n!==null&&Uh(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function jg(e,n,t,l,r){switch(n){case"focusin":return ar=Yi(ar,e,n,t,l,r),!0;case"dragenter":return ir=Yi(ir,e,n,t,l,r),!0;case"mouseover":return sr=Yi(sr,e,n,t,l,r),!0;case"pointerover":var i=r.pointerId;return Gi.set(i,Yi(Gi.get(i)||null,e,n,t,l,r)),!0;case"gotpointercapture":return i=r.pointerId,Vi.set(i,Yi(Vi.get(i)||null,e,n,t,l,r)),!0}return!1}function Yh(e){var n=Ft(e.target);if(n!==null){var t=m(n);if(t!==null){if(n=t.tag,n===13){if(n=p(t),n!==null){e.blockedOn=n,Xa(e.priority,function(){Hh(t)});return}}else if(n===31){if(n=b(t),n!==null){e.blockedOn=n,Xa(e.priority,function(){Hh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Qu(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);sl=l,t.target.dispatchEvent(l),sl=null}else return n=In(t),n!==null&&Uh(n),e.blockedOn=t,!1;n.shift()}return!0}function qh(e,n,t){So(e)&&t.delete(n)}function Og(){Wu=!1,ar!==null&&So(ar)&&(ar=null),ir!==null&&So(ir)&&(ir=null),sr!==null&&So(sr)&&(sr=null),Gi.forEach(qh),Vi.forEach(qh)}function wo(e,n){e.blockedOn===n&&(e.blockedOn=null,Wu||(Wu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Og)))}var Eo=null;function Ih(e){Eo!==e&&(Eo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var n=0;n<e.length;n+=3){var t=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Zu(l||t)===null)continue;break}var i=In(t);i!==null&&(e.splice(n,3),n-=3,Qc(i,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function Oa(e){function n(w){return wo(w,e)}ar!==null&&wo(ar,e),ir!==null&&wo(ir,e),sr!==null&&wo(sr,e),Gi.forEach(n),Vi.forEach(n);for(var t=0;t<or.length;t++){var l=or[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<or.length&&(t=or[0],t.blockedOn===null);)Yh(t),t.blockedOn===null&&or.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],i=t[l+1],h=r[un]||null;if(typeof i=="function")h||Ih(t);else if(h){var _=null;if(i&&i.hasAttribute("formAction")){if(r=i,h=i[un]||null)_=h.formAction;else if(Zu(r)!==null)continue}else _=h.action;typeof _=="function"?t[l+1]=_:(t.splice(l,3),l-=3),Ih(t)}}}function $h(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function Ju(e){this._internalRoot=e}ko.prototype.render=Ju.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var t=n.current,l=pt();Bh(t,l,e,n,null,null)},ko.prototype.unmount=Ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bh(e.current,2,null,e,null,null),ro(),n[Mn]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var n=on();e={blockedOn:null,target:e,priority:n};for(var t=0;t<or.length&&n!==0&&n<or[t].priority;t++);or.splice(t,0,e),t===0&&Yh(e)}};var Xh=a.version;if(Xh!=="19.2.7")throw Error(s(527,Xh,"19.2.7"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Cg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{pr=No.inject(Cg),vn=No}catch{}}return Ii.createRoot=function(e,n){if(!u(e))throw Error(s(299));var t=!1,l="",r=Jd,i=em,h=nm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),n=Ch(e,1,!1,null,null,t,l,null,r,i,h,$h),e[Mn]=n.current,Cu(e),new Ju(n)},Ii.hydrateRoot=function(e,n,t){if(!u(e))throw Error(s(299));var l=!1,r="",i=Jd,h=em,_=nm,w=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(_=t.onRecoverableError),t.formState!==void 0&&(w=t.formState)),n=Ch(e,1,!0,n,t??null,l,r,w,i,h,_,$h),n.context=zh(null),t=n.current,l=pt(),l=zl(l),r=Kl(l),r.callback=null,Pl(t,r,l),t=l,n.current.lanes=t,_r(n,t),tl(n),e[Mn]=n.current,Cu(e),new ko(n)},Ii.version="19.2.7",Ii}var tp;function Xg(){if(tp)return tf.exports;tp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),tf.exports=$g(),tf.exports}var Kg=Xg();const Pg=Pp(Kg),lp=o=>{let a;const c=new Set,s=(y,x)=>{const N=typeof y=="function"?y(a):y;if(!Object.is(N,a)){const T=a;a=x??(typeof N!="object"||N===null)?N:Object.assign({},a,N),c.forEach(X=>X(a,T))}},u=()=>a,b={setState:s,getState:u,getInitialState:()=>v,subscribe:y=>(c.add(y),()=>c.delete(y))},v=a=o(s,u,b);return b},Fg=(o=>o?lp(o):lp),Qg=o=>o;function Zg(o,a=Qg){const c=Zi.useSyncExternalStore(o.subscribe,Zi.useCallback(()=>a(o.getState()),[o,a]),Zi.useCallback(()=>a(o.getInitialState()),[o,a]));return Zi.useDebugValue(c),c}const rp=o=>{const a=Fg(o),c=s=>Zg(a,s);return Object.assign(c,a),c},Wg=(o=>o?rp(o):rp);function Jg(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let c=0;c<o.length;c+=1)o[c]=Math.floor(Math.random()*256);let a="";for(const c of o)a+=c.toString(16).padStart(2,"0");return a}const Df="pkp.user",jf="pkp.savedDevices",Of="pkp.ideDrafts",Cf="pkp.ideSettings",es="Prototype Version 0.6.7";function Bo(o){try{const a=localStorage.getItem(o);return a?JSON.parse(a):null}catch{return null}}function Lo(o,a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}}function eb(){const o=Bo(Df);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function sf(o){Lo(Df,o)}function zf(){return Bo(jf)??[]}function ns(o){Lo(jf,o)}function nb(){ns([])}function tb(){try{localStorage.removeItem(Df),localStorage.removeItem(jf),localStorage.removeItem(Of),localStorage.removeItem(Cf)}catch{}}function of(){var o;return((o=Bo(Of))==null?void 0:o.filter(a=>a.path&&typeof a.content=="string"))??[]}function cf(o){Lo(Of,o)}function ap(){const o=Bo(Cf)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function lb(o){Lo(Cf,o)}function uf(o){const a=zf(),c=a.findIndex(s=>s.deviceID===o.deviceID);return c>=0?a[c]=o:a.push(o),ns(a),a}function rb(o){const a=zf().filter(c=>c.deviceID!==o);return ns(a),a}const vf="b8e06067-62ad-41ba-9231-206ae80ab551",ab="f897177b-aee8-4767-8ecc-cc694fd5fce0",ib="f897177b-aee8-4767-8ecc-cc694fd5fce1",ff=20,sb=12,ob=new TextEncoder,cb=new TextDecoder;function ub(o){return new Promise(a=>setTimeout(a,o))}function Uo(){return typeof navigator<"u"&&"bluetooth"in navigator}function xf(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function fb(){if(!Uo())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[vf]},{namePrefix:"PicoW-"}],optionalServices:[vf]})}async function Fp(){if(!Uo()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class db{constructor(){ce(this,"device",null);ce(this,"writeChar",null);ce(this,"notifyChar",null);ce(this,"buffer","");ce(this,"writeQueue",Promise.resolve());ce(this,"disconnectNotified",!1);ce(this,"onLine",()=>{});ce(this,"onDisconnect",()=>{});ce(this,"handleNotification",a=>{const c=a.target;if(!(c!=null&&c.value))return;this.buffer+=cb.decode(c.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const u=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),u&&this.onLine(u),s=this.buffer.indexOf(`
`)}});ce(this,"handleDisconnected",()=>{var a;this.disconnectNotified||(this.disconnectNotified=!0,(a=this.device)==null||a.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var a,c;return!!((c=(a=this.device)==null?void 0:a.gatt)!=null&&c.connected)}async connect(a){var u;this.device&&this.device!==a&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=a,this.buffer="",this.disconnectNotified=!1,a.removeEventListener("gattserverdisconnected",this.handleDisconnected),a.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((u=a.gatt)==null?void 0:u.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await c.getPrimaryService(vf);this.writeChar=await s.getCharacteristic(ab),this.notifyChar=await s.getCharacteristic(ib),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(a){const c=this.writeQueue.then(()=>this.doWrite(a));return this.writeQueue=c.catch(()=>{}),c}async doWrite(a){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=ob.encode(`${a}
`),u=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let m=0;m<c.length;m+=ff){const p=c.slice(m,m+ff);await u(p),m+ff<c.length&&await ub(sb)}}disconnect(){var c;const a=this.device;(c=a==null?void 0:a.gatt)!=null&&c.connected?a.gatt.disconnect():this.handleDisconnected()}}class mb{constructor(a,c){ce(this,"send");ce(this,"onMessage");ce(this,"inActive",!1);ce(this,"inExpectedTotal",0);ce(this,"inStreamId",0);ce(this,"inParts",new Map);ce(this,"inProgress",null);ce(this,"outPendingLines",null);ce(this,"outWaitingAck",!1);ce(this,"outStreamId",0);ce(this,"outNextStreamId",1);ce(this,"outCache",new Map);ce(this,"outProgress",null);ce(this,"outResolve",null);ce(this,"outReject",null);this.send=a,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(a){var s;if(a.startsWith("prep,")){const u=a.split(","),m=u.length>=2&&/^\d+$/.test(u[1])?parseInt(u[1],10):null,p=u.length>=3&&/^\d+$/.test(u[2])?parseInt(u[2],10):0;m!==null&&m>0&&(this.inActive=!0,this.inExpectedTotal=m,this.inStreamId=p,this.inParts.clear(),this.send(p>0?`ack:prep,${p}`:"ack:prep"));return}if(a==="ack:prep"||a===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(a.startsWith("miss,")){const u=a.split(",");if(u.length>=3&&/^\d+$/.test(u[1])&&/^\d+$/.test(u[2])){const m=parseInt(u[1],10),p=parseInt(u[2],10),b=this.outCache.get(p);m===this.outStreamId&&b&&this.send(b)}return}const c=this.parseNumbered(a);if(c){const{idx:u,payload:m}=c;if(!this.inActive){this.onMessage(m);return}this.inParts.has(u)||(this.inParts.set(u,m),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let p=0;for(let b=1;b<=this.inExpectedTotal;b+=1)if(!this.inParts.has(b)){p=b;break}if(p>0&&this.inStreamId>0&&u>p&&this.send(`miss,${this.inStreamId},${p}`),this.inParts.size>=this.inExpectedTotal){for(let b=1;b<=this.inExpectedTotal;b+=1){const v=this.inParts.get(b);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(a)}setInboundProgress(a){this.inProgress=a}async sendReliable(a,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=a.length===0?[""]:a;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const u=new Promise((m,p)=>{this.outResolve=m,this.outReject=p});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(m){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,m}await u}async flushOutbound(){var a,c,s,u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(a=this.outResolve)==null||a.call(this),this.outResolve=null,this.outReject=null;return}try{const m=this.outPendingLines.length;for(let p=0;p<m;p+=1){const b=this.outPendingLines[p],v=`${p+1}-${b}`;this.outCache.set(p+1,v),await this.send(v),(c=this.outProgress)==null||c.call(this,p+1,m,b)}(s=this.outResolve)==null||s.call(this)}catch(m){(u=this.outReject)==null||u.call(this,m)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(a){const c=a.indexOf("-");if(c<=0)return null;const s=a.slice(0,c);if(!/^\d+$/.test(s))return null;const u=parseInt(s,10);return u<1?null:{idx:u,payload:a.slice(c+1)}}}const Va=11,ts=31,hb=2,pb=60,Ua=4,Ha=40;function _b(o,a){return Math.max(14,Math.min(56,Math.min(o,a)*.05))}function Qp(o,a,c=Va,s=ts){const u=_b(o,a),m=Math.max(1,o-2*u),p=Math.max(1,a-2*u);return{areaW:o,areaH:a,cols:c,rows:s,margin:u,stepX:m/Math.max(1,c-1),stepY:p/Math.max(1,s-1)}}function Zp(o,a){return a.margin+o/2*a.stepX}function Wp(o,a){const c=a.margin+o/2*a.stepY;return a.areaH-c}function Wi(o,a){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:Zp(o.centerX2,a),cy:Wp(o.centerY2,a),width:o.spanX*a.stepX,height:o.spanY*a.stepY}}function gb(o){const a=[];for(let c=0;c<o.cols;c+=1)for(let s=0;s<o.rows;s+=1)a.push({x:o.margin+c*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return a}function Mo(o,a,c,s,u){const m=(v,y,x,N)=>{const T=y%2,X=N*2;let P=T,te=1/0;for(let G=T;G<=X;G+=2){const I=Math.abs(x(G)-v);I<te&&(te=I,P=G)}return Math.max(y,Math.min(X-y,P))},p=m(o,c,v=>Zp(v,u),u.cols-1),b=m(a,s,v=>Wp(v,u),u.rows-1);return{centerX2:p,centerY2:b}}const Pr=6e3,bb=15,Oo=[32,64,128,192],yb=Pr*10,vb=3500,xb=8e3,Sb=2,wb=Pr,Eb=Pr*8;function df(o){return new Promise(a=>setTimeout(a,o))}function Ca(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function ip(o){return o instanceof DOMException&&o.name==="AbortError"}function ur(o){return o.replace(/[\r\n,]/g," ").trim()}class kb{constructor(a={}){ce(this,"transport",new db);ce(this,"stream");ce(this,"events");ce(this,"waiters",[]);ce(this,"collectingLayout",!1);ce(this,"layoutBuffer",[]);ce(this,"layoutResolve",null);ce(this,"collectingLines",!1);ce(this,"lineBuffer",[]);ce(this,"lineResolve",null);ce(this,"lineReject",null);ce(this,"lineCollectId",0);ce(this,"controlPumpActive",!1);ce(this,"pendingButtons",[]);ce(this,"pendingSliders",new Map);ce(this,"pendingToggles",new Map);ce(this,"expectingDisconnect",!1);ce(this,"disconnectMessage",null);ce(this,"busy",!1);ce(this,"fsCapabilities",null);this.events=a,this.stream=new mb(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var a;return xf((a=this.transport.device)==null?void 0:a.name)}get connected(){return this.transport.connected}setBusy(a){if(this.busy=a,a){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(a,c){var s,u;(u=(s=this.events).onLog)==null||u.call(s,a,c)}progress(a,c){var s,u;(u=(s=this.events).onProgress)==null||u.call(s,a,c)}onDeviceMessage(a){var s,u;if(a==="disconnect"||a==="disconnect_private"){const m=a==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=m,this.log("warning",m),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(a==="__END__"){const m=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,m),this.lineResolve=null;return}this.lineBuffer.push(a);return}if(this.collectingLayout){if(a==="__END__"){const m=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(u=this.layoutResolve)==null||u.call(this,m),this.layoutResolve=null;return}!a.startsWith("ACK")&&!a.startsWith("ERR")&&!a.startsWith("#VERSION")?this.layoutBuffer.push(a):a.startsWith("#VERSION")&&this.layoutBuffer.push(a);return}a.startsWith("ERR")?this.log("error",a):a.startsWith("radar,")?this.handleRadarLine(a):a.startsWith("text,")?this.handleTextLine(a):a.startsWith("toggle_state,")?this.handleToggleStateLine(a):a.startsWith("ACK")||a==="LAYOUT_SAVED"||a.startsWith("READY")?this.log("success",a):this.log("info",`rx: ${a}`);const c=this.waiters.findIndex(m=>m.match(a));if(c>=0){const m=this.waiters[c];this.waiters.splice(c,1),clearTimeout(m.timer),m.resolve(a)}}waitFor(a,c,s){return new Promise((u,m)=>{const p=setTimeout(()=>{const b=this.waiters.findIndex(v=>v.timer===p);b>=0&&this.waiters.splice(b,1),m(new Error(`Timeout: ${s}`))},c);this.waiters.push({match:a,resolve:u,reject:m,timer:p})})}async collectLines(a,c,s,u,m){Ca(u);const p=this.lineCollectId+1;this.lineCollectId=p,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(m??null);const b=new Promise((v,y)=>{let x=!1;const N=()=>this.lineCollectId===p,T=()=>{x=!0,N()&&(this.lineReject=null,this.stream.setInboundProgress(null)),u==null||u.removeEventListener("abort",P)},X=I=>{x||(clearTimeout(te),N()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),y(I))},P=()=>{X(new DOMException("BLE file read cancelled","AbortError"))},te=setTimeout(()=>{N()&&X(new Error(`Timeout: ${s}`))},c);this.lineResolve=v,this.lineReject=X;const G=this.lineResolve;this.lineResolve=I=>{N()&&(clearTimeout(te),T(),G==null||G(I))},u==null||u.addEventListener("abort",P,{once:!0})});return await this.transport.writeLine(a),b}async exchange(a,c,s,u=3){let m;for(let p=1;p<=u;p+=1)try{return await this.transport.writeLine(a),await this.waitFor(c,Pr,s)}catch(b){m=b,this.log("warning",`${s}: forsøg ${p}/${u} mislykkedes`)}throw m instanceof Error?m:new Error(`Failed: ${s}`)}async connect(a){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(a)}async runHandshake(a){var fe;await df(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",ie=>ie==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",ie=>ie==="unowned"||ie.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned")return{kind:"unowned"};const s=c.split(","),u=s[1]??"",m=s[2]!==void 0&&parseInt(s[2],10)||0,p=s[3]!==void 0?parseInt(s[3],10)===1:!0,b=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=s.length>=7,y=v?parseInt(s[5]??"0",10)===1:b,x=((fe=s[v?6:5])==null?void 0:fe.trim())||void 0;await this.exchange("ACK:ownership",ie=>ie==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const N=await this.exchange(`request_permission,${a.userID},${ur(a.username)}`,ie=>ie.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const T=N.split(",").filter(ie=>/^\d+$/.test(ie)),X=T.length>=1?parseInt(T[0]??"0",10):0,P=T.length>=2?parseInt(T[1]??"0",10):0,te=T.length>=3?parseInt(T[2]??"0",10):P;if(X===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:p};const G=a.userID===u,I=P===1||G,le=te===1||G;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:u,ownerName:x,iconID:m,canEdit:I,canEditCode:le,isOwnedByMe:G,canOthersConnect:p,canOthersEdit:b,canOthersEditCode:y}}async create(a,c,s,u,m,p,b){const v=s?1:0,y=s&&u?1:0,x=s&&m?1:0;await this.exchange(`create,${a.userID},${ur(a.username)},${c},${v},${y},${x},${p},${b}`,N=>N==="ACK:create","create")}async updateDeviceSettings(a,c,s,u,m,p,b){const v=c?1:0,y=c&&s?1:0,x=c&&u?1:0;await this.exchange(`settings_update,${a},${v},${y},${x},${m},${p},${ur(b??"")}`,N=>N==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const a=new Promise((s,u)=>{this.layoutResolve=s;const m=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,u(new Error("Timeout: layout")))},Pr*2),p=this.layoutResolve;this.layoutResolve=b=>{clearTimeout(m),p==null||p(b)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await a;return this.progress(100,"Klar"),c}async saveLayout(a){await this.exchange("update",u=>u==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=a.map(u=>{const m=b=>b===null?"n":String(b),p=`update,${u.type},${u.name},${m(u.centerX2)},${m(u.centerY2)},${m(u.spanX)},${m(u.spanY)},${u.rotation}`;return u.type==="slider"?`${p},${u.sliderMin??0},${u.sliderMax??100},${u.sliderRecenter??"none"}`:u.type==="toggle"?`${p},${u.toggleInitial?1:0}`:u.type==="radar"?[p,u.radarMinAngle??0,u.radarMaxAngle??180,u.radarMaxDistance??200,u.radarFadeMs??1200].join(","):p});c.push("__END__");const s=this.waitFor(u=>u==="LAYOUT_SAVED",Pr*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await s}async listFiles(a="/"){return(await this.collectLines(`fs_list,${ur(a)}`,Pr*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,u,m,p]=s.split(","),b=u==="file"||u==="dir"?u:"unknown",v=parseInt(p??"",10),y=m||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:b,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(a){var p,b,v;const c=a.split(",");if(c.length<4)return;const s=(p=c[1])==null?void 0:p.trim(),u=parseFloat(c[2]??""),m=parseFloat(c[3]??"");!s||!Number.isFinite(u)||!Number.isFinite(m)||((v=(b=this.events).onRadar)==null||v.call(b,s,u,m),this.log("info",`rx: ${a}`))}handleTextLine(a){var b,v;const c=a.indexOf(","),s=c>=0?a.indexOf(",",c+1):-1;if(c<0||s<0)return;const u=a.slice(c+1,s),m=a.slice(s+1),p=u==null?void 0:u.trim();p&&((v=(b=this.events).onText)==null||v.call(b,p,m),this.log("info",`rx: ${a}`))}handleToggleStateLine(a){var m,p,b;const c=a.split(",");if(c.length<3)return;const s=(m=c[1])==null?void 0:m.trim(),u=parseInt(c[2]??"",10);!s||!Number.isFinite(u)||((b=(p=this.events).onToggleState)==null||b.call(p,s,u===1),this.log("info",`rx: ${a}`))}async readText(a,c,s){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const u=await this.getFilesystemCapabilities(s);if(u.streamRead)try{return await this.readTextStream(a,u,c,s)}catch(m){if(s!=null&&s.aborted||ip(m)||!u.pageRead)throw m;this.log("warning",m instanceof Error?`fs_read_stream fejlede; bruger paged read: ${m.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(a,c,s)}async getFilesystemCapabilities(a){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",wb,"fs_capabilities",a),s=c.find(x=>x.startsWith("ERR"));if(s)throw new Error(s);const u=c.find(x=>x.startsWith("fs_capabilities,"));if(!u)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const m=u.split(","),p=new Map;for(let x=1;x<m.length-1;x+=2)p.set(m[x],m[x+1]);const b=parseInt(p.get("max_page")??"",10),v=parseInt(p.get("stream_chunk")??"",10),y={version:p.get("version")||void 0,pageRead:p.get("page_read")==="1",maxPageSize:Number.isFinite(b)&&b>0?b:32,streamRead:p.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(a,c,s){const u=await this.getFilesystemCapabilities(s);let m=0,p=Nb(u.maxPageSize),b=0,v=null,y="";const x=`Indlæser ${mf(a)}...`;Ca(s),c==null||c(5,x);for(let N=0;N<512;N+=1){Ca(s),b===0&&(c==null||c(7,x));const X=await this.readPageWithRetry(a,b,m,p,s),P=X.lines;m=X.nextPageSizeIndex,p=X.maxPageSizeIndex,Ca(s);const te=P.find(W=>W.startsWith("ERR"));if(te)throw new Error(te);const G=P.find(W=>W.startsWith("fs_page,"));if(!G)throw new Error("ERR: fs_read_page missing data");const[,I,le,fe,ie=""]=G.split(",",5);if(I!==a)throw new Error("ERR: fs_read_page stale data");const de=parseInt(le??"",10),Ne=parseInt(fe??"",10);if(!Number.isFinite(de)||de!==b||!Number.isFinite(Ne))throw new Error("ERR: fs_read_page invalid data");v=Ne,y+=ie,b+=Math.floor(ie.length/2);const ee=v>0?8+Math.min(87,Math.round(b/v*87)):95;if(c==null||c(ee,x),b>=v||ie.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(op(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(a,c,s,u,m){let p,b=Math.min(s,u);for(;b>=0;){const v=Oo[b],y=b===0?Sb:1,x=b===0?xb:vb;for(let N=1;N<=y;N+=1){Ca(m);try{return{lines:await this.collectLines(`fs_read_page,${ur(a)},${c},${v}`,x,`fs_read_page ${c}`,m),nextPageSizeIndex:Math.min(b+1,u),maxPageSizeIndex:u}}catch(T){if(m!=null&&m.aborted||ip(T))throw T;if(p=T,N<y||b>0){const P=b>0&&N>=y?Oo[b-1]:v;this.log("warning",`fs_read_page ${c} (${v} bytes) fejlede; prøver ${P} bytes`),await df(80+N*80)}}}if(b===0)break;u=Math.max(0,b-1),b=u}throw p instanceof Error?p:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(a,c,s,u){const m=`Indlæser ${mf(a)}...`,p=Math.max(16,Math.min(192,c.streamChunkSize||128));s==null||s(5,m);const b=await this.collectLines(`fs_read_stream,${ur(a)},${p}`,Eb,`fs_read_stream ${a}`,u,(ee,W)=>{const ve=8+Math.round(Math.min(ee,W)/Math.max(1,W)*87);s==null||s(Math.min(95,ve),m)});Ca(u);const v=b.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const y=b.find(ee=>ee.startsWith("fs_stream_begin,")),x=b.find(ee=>ee.startsWith("fs_stream_end,"));if(!y||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,N,T]=y.split(",",4),[,X,P,te]=x.split(",",4),G=parseInt(T??"",10),I=parseInt(P??"",10),le=parseInt(te??"",10);if(N!==a||X!==a||!Number.isFinite(G)||G!==I||!Number.isFinite(le))throw new Error("ERR: fs_read_stream invalid metadata");let fe=0,ie="";for(const ee of b){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,W,ve=""]=ee.split(",",3),ge=parseInt(W??"",10);if(!Number.isFinite(ge)||ge!==fe||ve.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");ie+=ve,fe+=Math.floor(ve.length/2)}if(fe!==G)throw new Error("ERR: fs_read_stream size mismatch");const de=op(ie);if(sp(de)!==le)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(de)}async writeText(a,c,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${ur(a)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const u=new TextEncoder().encode(c),m=[...u].map(x=>x.toString(16).padStart(2,"0")).join(""),p=[];for(let x=0;x<m.length;x+=160)p.push(`fs_write_chunk,${m.slice(x,x+160)}`);p.push("fs_write_end");const b=sp(u),v=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),yb,"fs_write_done");s==null||s(u.length===0?85:18,u.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${u.length} bytes via Bluetooth...`),await this.stream.sendReliable(p,(x,N,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const X=Math.min(u.length,x*80),P=18+Math.round(x/Math.max(1,N-1)*67);s==null||s(Math.min(85,P),`Sender ${X}/${u.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const y=await v;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,x,N]=y.split(",",3),T=parseInt(x??"",10),X=parseInt(N??"",10);if(T!==u.length||X!==b)throw new Error(`ERR: BLE-verificering fejlede for ${mf(a)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(a){const c=await this.exchange(`fs_delete,${ur(a)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",a=>a==="ACK:restart"||a.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(a,c){this.busy||(this.pendingButtons.push(`button,${a}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(a,c){this.busy||(this.pendingSliders.set(a,`slider,${a}:${c}`),this.pumpControls())}enqueueToggle(a,c){this.busy||(this.pendingToggles.set(a,`toggle,${a}:${c?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const a=this.nextControlLine();if(!a)break;await this.transport.writeLine(a),this.log("info",`tx: ${a}`),await df(bb)}}catch(a){this.log("error",a instanceof Error?a.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const a=this.pendingButtons.shift();if(a)return a;const c=this.pendingSliders.entries().next();if(!c.done){const[u,m]=c.value;return this.pendingSliders.delete(u),m}const s=this.pendingToggles.entries().next();if(!s.done){const[u,m]=s.value;return this.pendingToggles.delete(u),m}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",a=>a==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,s,u;for(const m of this.waiters)clearTimeout(m.timer),m.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const a=this.disconnectMessage??void 0;this.disconnectMessage=null,(u=(s=this.events).onDisconnect)==null||u.call(s,a)}}function Nb(o){let a=0;for(let c=0;c<Oo.length;c+=1)Oo[c]<=o&&(a=c);return a}function mf(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function sp(o){let a=0;for(const c of o)a=a+c>>>0;return a}function op(o){const a=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<a.length;c+=1)a[c]=parseInt(o.slice(c*2,c*2+2),16);return a}function cp(o){const a=(c,s)=>Number.isFinite(c)?Math.max(hb,Math.min(pb,c)):s;for(const c of o){const s=c.trim();if(s.startsWith("#GRID,")){const u=s.split(","),m=a(parseInt(u[1],10),Va),p=a(parseInt(u[2],10),ts);return{cols:m,rows:p}}}return{cols:Va,rows:ts}}function up(o){const a=new Map;for(const c of o){const s=c.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const u=s.split(",");if(u.length<7)continue;const[m,p,b,v,y,x,N,T,X,P,te]=u;if(m!=="button"&&m!=="slider"&&m!=="toggle"&&m!=="radar"&&m!=="text"||a.has(p))continue;const G=ge=>{if(ge==="n")return null;const ye=parseInt(ge,10);return Number.isNaN(ye)?null:ye},I=parseInt(N,10)||0,le=T!==void 0?parseInt(T,10):0,fe=X!==void 0?parseInt(X,10):100,ie=["none","bottom","middle","top"].includes(P??"")?P:"none",de=T!==void 0?parseInt(T,10)===1:!1,Ne=T!==void 0?parseFloat(T):0,ee=X!==void 0?parseFloat(X):180,W=P!==void 0?parseFloat(P):200,ve=te!==void 0?parseInt(te,10):1200;a.set(p,{type:m,name:p,centerX2:G(b),centerY2:G(v),spanX:G(y),spanY:G(x),rotation:[0,90,180,270].includes(I)?I:0,...m==="slider"?{sliderMin:Number.isFinite(le)?le:0,sliderMax:Number.isFinite(fe)?fe:100,sliderRecenter:ie}:{},...m==="toggle"?{toggleInitial:de}:{},...m==="radar"?{radarMinAngle:Number.isFinite(Ne)?Ne:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(W)&&W>0?W:200,radarFadeMs:Number.isFinite(ve)&&ve>0?ve:1200}:{}})}return[...a.values()]}let ne=null,$i=null,fp=0,Tl=!1;function Rb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function dp(o){return new Promise(a=>setTimeout(a,o))}function Tb(o){return Object.fromEntries(o.filter(a=>a.type==="toggle").map(a=>[a.name,!!a.toggleInitial]))}function mp(o,a){const c=Tb(o);for(const s of o)s.type==="toggle"&&a[s.name]!==void 0&&(c[s.name]=a[s.name]);return c}const J=Wg((o,a)=>{function c(u,m){o(p=>({logs:[{level:u,message:m,time:Rb()},...p.logs].slice(0,200)}))}function s(u){$i&&clearTimeout($i),fp+=1,o({toast:{message:u,id:fp}}),$i=setTimeout(()=>o({toast:null}),4500)}return ne=new kb({onProgress:(u,m)=>o({progress:{value:u,label:m}}),onLog:(u,m)=>c(u,m),onRadar:(u,m,p)=>{const b=Date.now(),v={id:`${b}-${Math.random().toString(36).slice(2)}`,angle:m,distance:p,createdAt:b};o(y=>{const x=y.layout.find(X=>X.type==="radar"&&X.name===u),N=(x==null?void 0:x.radarFadeMs)??1200,T=y.radarPings[u]??[];return{radarPings:{...y.radarPings,[u]:[...T.filter(X=>b-X.createdAt<=N),v].slice(-80)}}})},onText:(u,m)=>{o(p=>({textValues:{...p.textValues,[u]:m}}))},onToggleState:(u,m)=>{o(p=>({toggleValues:{...p.toggleValues,[u]:m}}))},onDisconnect:u=>{const{screen:m,active:p,picoIdeOrigin:b}=a();if(Tl){Tl=!1;return}if(u&&(c("warning",u),s(u)),m==="control"||m==="connection"||m==="create"||m==="ide"&&b==="control"){const v=p?{deviceID:p.deviceID,deviceName:p.deviceName,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:v})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const u=eb(),m=zf();o({user:u,savedDevices:m,splashTarget:u?"dashboard":"intro"})},finishSplash:()=>{const u=a().splashTarget;o({screen:u??"intro"})},createUser:u=>{const m=u.trim();if(!m)return;const p={username:m,userID:Jg()};sf(p),o({user:p,screen:"dashboard"})},findDevice:async()=>{try{const u=await fb();await a().connectToDevice(u)}catch(u){u instanceof Error&&u.name!=="NotFoundError"&&c("error",u.message)}},connectToDevice:async(u,m)=>{var b,v;const p=a().user;if(!(!p||!ne)){Tl=!1,o({screen:"connection",connecting:{name:xf(u.name)||(m==null?void 0:m.deviceName)||"Pico",iconID:(m==null?void 0:m.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await ne.connect(u);const y=await ne.runHandshake(p),x=u.id,N=xf(u.name)||(m==null?void 0:m.deviceName)||"Pico";if(y.kind==="denied"){const I=`Du kan ikke forbinde, fordi ${((b=y.ownerName)==null?void 0:b.trim())||((v=m==null?void 0:m.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",I),s(I),o({screen:"dashboard",connecting:null}),await ne.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:x,deviceName:N,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:p.username,gridCols:Va,gridRows:ts},screen:"create"});return}const T={deviceID:x,deviceName:N,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(m==null?void 0:m.ownerName)};o({savedDevices:uf(T)});const X=await ne.requestLayout(),P=cp(X),te=up(X);o({layout:te,sliderValues:{},toggleValues:mp(te,a().toggleValues),radarPings:{},textValues:{},active:{deviceID:x,deviceName:N,iconID:y.iconID,canEdit:y.canEdit,canEditCode:y.canEditCode,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(m==null?void 0:m.ownerName),gridCols:P.cols,gridRows:P.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const x=y instanceof Error?y.message:"Forbindelsen mislykkedes.";c("error",x),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await ne.disconnect().catch(()=>{})}}},finishCreate:async(u,m,p,b,v,y)=>{const{user:x,active:N}=a();if(!(!x||!N||!ne))try{ne.setBusy(!0),await ne.create(x,u,m,p,b,v,y),ne.setBusy(!1);const T={deviceID:N.deviceID,deviceName:N.deviceName,deviceIconID:u,canOthersConnect:m,canOthersEdit:m&&p,canOthersEditCode:m&&b,isOwnedByMe:!0,ownerName:x.username};o({savedDevices:uf(T)});const X=await ne.requestLayout(),P=cp(X),te=up(X);o({layout:te,sliderValues:{},toggleValues:mp(te,a().toggleValues),radarPings:{},textValues:{},active:{...N,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:m,canOthersEdit:m&&p,canOthersEditCode:m&&b,ownerName:x.username,gridCols:P.cols,gridRows:P.rows},screen:"control"})}catch(T){ne.setBusy(!1);const X=T instanceof Error?T.message:"Oprettelse mislykkedes.";c("error",X),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await ne.disconnect().catch(()=>{})}},saveDeviceSettings:async(u,m,p,b,v,y)=>{const{active:x,user:N}=a();if(!(!x||!ne||!x.isOwnedByMe))try{ne.setBusy(!0),await ne.updateDeviceSettings(u,m,p,b,v,y,N==null?void 0:N.username);const T={...x,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:m,canOthersEdit:m&&p,canOthersEditCode:m&&b,ownerName:(N==null?void 0:N.username)??x.ownerName,gridCols:v,gridRows:y},X={deviceID:x.deviceID,deviceName:x.deviceName,deviceIconID:u,canOthersConnect:m,canOthersEdit:m&&p,canOthersEditCode:m&&b,isOwnedByMe:!0,ownerName:(N==null?void 0:N.username)??x.ownerName};o({active:T,savedDevices:uf(X)}),s("Enhedsindstillinger gemt.")}catch(T){c("error",T instanceof Error?T.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ne.setBusy(!1)}},cancelCreate:async()=>{ne&&await ne.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Tl=!0,ne&&await ne.disconnect().catch(()=>{}),Tl=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:u=>{o({savedDevices:rb(u)})},clearSavedDevices:()=>{nb(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{Tl=!0,ne!=null&&ne.connected&&await ne.disconnect().catch(()=>{}),tb(),window.location.reload()},updateUsername:u=>{const m=a().user,p=u.trim();if(!m||!p)return;const b={...m,username:p};sf(b),o(v=>{var x;const y=v.savedDevices.map(N=>N.isOwnedByMe?{...N,ownerName:p}:N);return ns(y),{user:b,active:(x=v.active)!=null&&x.isOwnedByMe?{...v.active,ownerName:p}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const u=a().user;return u?Mb(u):null},applyOwnerPairingCode:u=>{var p;const m=Ab(u,(p=a().user)==null?void 0:p.username);return m?(sf(m),o(b=>{var y;const v=b.savedDevices.map(x=>x.isOwnedByMe?{...x,ownerName:m.username}:x);return ns(v),{user:m,active:(y=b.active)!=null&&y.isOwnedByMe?{...b.active,ownerName:m.username}:b.active,savedDevices:v}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const u=a().screen==="control"&&!!(ne!=null&&ne.connected),m=a().active;if(u&&m&&!m.isOwnedByMe&&!m.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(p=>({screen:"ide",picoIdeOrigin:u?"control":"dashboard",active:u?p.active:null,layout:u?p.layout:[],sliderValues:u?p.sliderValues:{},toggleValues:u?p.toggleValues:{},radarPings:u?p.radarPings:{},textValues:u?p.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:u,active:m}=a();o({screen:u==="control"&&m&&(ne!=null&&ne.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ne!=null&&ne.connected),bleListFiles:async()=>ne!=null&&ne.connected?ne.listFiles("/"):[],bleReadText:async(u,m,p)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");return ne.readText(u,m,p)},bleWriteText:async(u,m,p)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.writeText(u,m,p)},bleDeleteFile:async u=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.deleteFile(u)},bleRestart:async()=>{ne!=null&&ne.connected&&await ne.restart()},bleRestartAndReconnect:async(u="control")=>{const{active:m}=a();if(!(ne!=null&&ne.connected)||!m)return!1;const p={deviceID:m.deviceID,deviceName:m.deviceName,deviceIconID:m.iconID,canOthersConnect:m.canOthersConnect,canOthersEdit:m.canOthersEdit,canOthersEditCode:m.canOthersEditCode,isOwnedByMe:m.isOwnedByMe,ownerName:m.ownerName};Tl=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ne.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:p.deviceName,iconID:p.deviceIconID}});for(let b=0;b<12&&(ne!=null&&ne.connected);b+=1)await dp(250);ne!=null&&ne.connected||(Tl=!1);for(let b=1;b<=8;b+=1){await dp(b===1?1200:850);try{const y=(await Fp()).find(x=>x.id===p.deviceID);if(!y){o({progress:{value:Math.min(88,20+b*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+b*8),label:`Genforbinder (${b}/8)...`}}),await a().connectToDevice(y,p),u==="ide"&&o(x=>({screen:"ide",picoIdeOrigin:"control",active:x.active,layout:x.layout,sliderValues:x.sliderValues,toggleValues:x.toggleValues,radarPings:x.radarPings,textValues:x.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){c("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Tl=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p}),!1},reconnectLostDevice:async()=>{var m;const u=a().connectionLost;if(u){o({connectionLost:null});try{if((m=navigator.bluetooth)!=null&&m.getDevices){const b=(await navigator.bluetooth.getDevices()).find(v=>v.id===u.deviceID);if(b){await a().connectToDevice(b,u);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await a().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:(u,m)=>ne==null?void 0:ne.enqueueButton(u,m),sendSlider:(u,m)=>{o(p=>({sliderValues:{...p.sliderValues,[u]:m}})),ne==null||ne.enqueueSlider(u,m)},sendToggle:(u,m)=>{o(p=>({toggleValues:{...p.toggleValues,[u]:m}})),ne==null||ne.enqueueToggle(u,m)},saveLayout:async u=>{if(ne)try{ne.setBusy(!0),await ne.saveLayout(u),o({layout:u,editMode:!1})}catch(m){c("error",m instanceof Error?m.message:"Kunne ikke gemme layout.")}finally{ne.setBusy(!1)}},setEditMode:u=>o({editMode:u,sideMenuOpen:!1,menuPage:null}),setDashboardPage:u=>o({dashboardPage:u}),toggleSideMenu:u=>o(m=>({sideMenuOpen:u??!m.sideMenuOpen})),toggleDebugger:u=>o(m=>({debuggerOpen:u??!m.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:u=>o({menuPage:u,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(u,m)=>c(u,m),askConfirm:u=>o({confirmDialog:u}),closeConfirm:()=>o({confirmDialog:null}),showToast:u=>s(u),dismissToast:()=>{$i&&clearTimeout($i),o({toast:null})}}}),Sf="PKP-EJER";function Mb(o){var s;const a=o.userID.toLowerCase(),c=((s=a.match(/.{1,4}/g))==null?void 0:s.join("-"))??a;return`${Sf}-${c}-${Jp(a)}`}function Ab(o,a="Ejer"){const c=o.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Sf}-`))return null;const s=c.slice(Sf.length+1).split("-").filter(Boolean),u=s.pop()??"",m=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(m)||u!==Jp(m)?null:{userID:m,username:a.trim()||"Ejer"}}function Jp(o){let a=2166136261;for(const c of o.toLowerCase())a^=c.charCodeAt(0),a=Math.imul(a,16777619)>>>0;return(a%65536).toString(16).toUpperCase().padStart(4,"0")}const Ho="./",e_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function qa(o){const a=o>=0&&o<e_.length?o:0;return`${Ho}device-icons/${a}.png`}const Db=`${Ho}art/logo.png`,jb=`${Ho}art/Teknologiskolen_logo.png`,Ob=`${Ho}art/logo_teknologiskolen_white.png`,Cb={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Pn({name:o,size:a=24,className:c}){return f.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Cb[o]})}const zb=1850,Bb=450;function Lb(){const o=J(s=>s.splashTarget),a=J(s=>s.finishSplash),c=o?"splash-screen-animation splash-ready":"splash-pending";return U.useEffect(()=>{if(!o)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Bb:zb,m=window.setTimeout(a,u);return()=>window.clearTimeout(m)},[a,o]),f.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:Db,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function hp(){const o=J(u=>u.createUser),[a,c]=U.useState(""),s=a.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:jb,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${s?"filled":""}`,children:[f.jsx("input",{id:"username",value:a,onChange:u=>c(u.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(a),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:es})]})}function Bf({title:o,onMenu:a}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:a,"aria-label":"Menu",children:f.jsx(Pn,{name:"menu"})})]})})}function wn({title:o,onClose:a,children:c,closeVariant:s="plain"}){const u=s==="circle",m=U.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:p=>{m.current=p.target===p.currentTarget},onClick:p=>{p.target===p.currentTarget&&m.current&&a(),m.current=!1},children:f.jsxs("div",{className:"modal",onClick:p=>p.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${u?"modal-close-circle":""}`,type:"button",onClick:a,"aria-label":"Luk",children:f.jsx(Pn,{name:u?"delete":"close",size:u?30:24})})]}),f.jsx("div",{className:"modal-body",children:c})]})})}function pp(){const o=J(T=>T.savedDevices),a=J(T=>T.toggleSideMenu),c=J(T=>T.findDevice),s=J(T=>T.removeSavedDevice),u=J(T=>T.askConfirm),m=J(T=>T.dashboardPage),p=J(T=>T.setDashboardPage),b=Vb(),[v,y]=U.useState(null),x=Uo(),N=o.filter(T=>m==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(Gb);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(Bf,{title:"Hovedmenu",onMenu:()=>a()}),f.jsxs("div",{className:"content dash-content",children:[!x&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:m==="mine"?"active":"",onClick:()=>p("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:m==="andre"?"active":"",onClick:()=>p("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:N.length===0?f.jsx("div",{className:"device-list-empty",children:m==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):N.map(T=>f.jsx(Ub,{device:T,disabled:!x,onConnect:()=>b(T),onSettings:()=>y(T)},T.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!x,"aria-label":"Find enhed",children:f.jsx(Pn,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:es}),v&&f.jsx(wn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:qa(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(Xi,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(Xi,{label:"Ejer",value:Hb(v)}),f.jsx(Xi,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(Xi,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx(Xi,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const T=v;y(null),b(T)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>u({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function Ub({device:o,disabled:a,onConnect:c,onSettings:s}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:a,children:[f.jsx("img",{className:"device-tile-icon",src:qa(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:f.jsx(Pn,{name:"settings"})})]})}function Xi({label:o,value:a}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:a})]})}function Hb(o){var a;return o.isOwnedByMe?"Dig":((a=o.ownerName)==null?void 0:a.trim())||"Anden bruger"}function Gb(o,a){return o.deviceName.localeCompare(a.deviceName,"da",{sensitivity:"base"})}function Vb(){const o=J(s=>s.connectToDevice),a=J(s=>s.findDevice),c=J(s=>s.log);return async s=>{const m=(await Fp()).find(p=>p.id===s.deviceID);m?await o(m,s):(c("info","Genforbind: vælg enheden i browserens liste."),await a())}}function Yb(){const o=J(c=>c.connecting),a=J(c=>c.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:qa((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${a.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:a.label})]})]})}function n_({selected:o,onSelect:a,onClose:c}){return f.jsx(wn,{title:"Vælg Enhedens Ikon",onClose:c,children:f.jsx("div",{className:"icon-grid",children:e_.map(s=>f.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{a(s.id),c()},"aria-label":s.label,children:f.jsx("img",{src:qa(s.id),alt:""})},s.id))})})}function qb(){const o=J(ie=>ie.finishCreate),a=J(ie=>ie.cancelCreate),[c,s]=U.useState(0),[u,m]=U.useState(!1),[p,b]=U.useState(!1),[v,y]=U.useState(!1),[x,N]=U.useState(!1),[T,X]=U.useState(Va),[P,te]=U.useState(ts),[G,I]=U.useState(!1),le=ie=>Number.isFinite(ie)?Math.max(Ua,Math.min(Ha,Math.round(ie))):Va;async function fe(){I(!0),await o(c,p,p&&v,p&&x,le(T),le(P))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>m(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:qa(c),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(Pn,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:p?"":"active",onClick:()=>b(!1),children:"Privat"}),f.jsx("button",{type:"button",className:p?"active":"",onClick:()=>b(!0),children:"Offentlig"})]}),p&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:x?"":"active",onClick:()=>N(!1),children:"Nej"}),f.jsx("button",{type:"button",className:x?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Ua,max:Ha,value:Number.isNaN(T)?"":T,onChange:ie=>X(parseInt(ie.target.value,10)),onBlur:()=>X(le(T))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Ua,max:Ha,value:Number.isNaN(P)?"":P,onChange:ie=>te(parseInt(ie.target.value,10)),onBlur:()=>te(le(P))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>a(),disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:fe,disabled:G,children:G?"Opretter...":"Opret"})]})]}),u&&f.jsx(n_,{selected:c,onSelect:s,onClose:()=>m(!1)}),f.jsx("span",{className:"version",children:es})]})}const Ya=8;function Ao(o){return Math.max(5,Math.min(22,o))}function Co(o,a,c){const s=Math.max(1,o.length),u=(a-Ya*2)/(s*.58),m=(c-Ya*2)*.48;return Ao(Math.min(u,m))}function Ib(o,a,c,s,u){const m=o.trim().split(/\s+/).filter(Boolean),p=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,m.length-1)*1.6),b=u?Ao(Math.min(a/4.6,c/4.6,12)):0,v=u?b+Ya:Ya;if(s){const N=Math.max(1,c-v*2);return{fontSize:Ao(Math.min(a*.48,N/(p*1.04))),endFontSize:b,centerInset:u?{top:v,bottom:v}:{}}}const y=Math.max(1,a-v*4.2);return{fontSize:Ao(Math.min(c*.42,y/(p*.58))),endFontSize:b,centerInset:u?{left:v*2.1,right:v*2.1}:{}}}function $b({control:o,rect:a,disabled:c,latestValue:s,toggleValue:u,radarPings:m=[],textValue:p,onButton:b,onSlider:v,onToggle:y}){const x=U.useRef(!1),N={left:a.cx,top:a.cy,width:a.width,height:a.height};if(o.type==="button"){const T=()=>{c||!x.current||(x.current=!1,b(o.name,!1))};return f.jsx("div",{className:"control",style:N,children:f.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",fontSize:Co(o.name,a.width,a.height)},onPointerDown:X=>{var P,te;c||(X.preventDefault(),(te=(P=X.currentTarget).setPointerCapture)==null||te.call(P,X.pointerId),x.current=!0,b(o.name,!0))},onPointerUp:X=>{var P,te;X.preventDefault(),(te=(P=X.currentTarget).releasePointerCapture)==null||te.call(P,X.pointerId),T()},onPointerCancel:T,onLostPointerCapture:T,children:o.name})})}if(o.type==="toggle"){const T=!!u;return f.jsx("div",{className:"control",style:N,children:f.jsx("button",{className:`control-toggle ${T?"on":""}`,type:"button",disabled:c,"aria-pressed":T,style:{width:"100%",height:"100%",fontSize:Co(o.name,a.width,a.height)},onPointerDown:X=>{c||(X.preventDefault(),y(o.name,!T))},children:f.jsx("span",{children:o.name})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:N,children:f.jsx(l_,{control:o,pings:m,width:a.width,height:a.height})}):o.type==="text"?f.jsx("div",{className:"control",style:N,children:f.jsx(t_,{message:p??o.name,width:a.width,height:a.height})}):f.jsx("div",{className:"control",style:N,children:f.jsx(l0,{control:o,disabled:c,latestValue:s,onSlider:v,width:a.width,height:a.height})})}function Xb(o,a,c){const s=o.trim()||" ",m=s.split(/\s+/).filter(Boolean).reduce((N,T)=>Math.max(N,T.length),1),p=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(m*1.9)))),b=Math.max(1,a-Ya*3),v=Math.max(1,c-Ya*3),y=b/(m*.58),x=v/(p*1.16);return Math.max(7,Math.min(24,y,x))}function t_({message:o,width:a,height:c}){const s=o.trim()||"...";return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:Xb(s,a,c)},children:f.jsx("span",{children:s})})}function l_({control:o,pings:a,width:c,height:s,preview:u=!1}){const[,m]=U.useState(0),p=Math.max(120,o.radarFadeMs??1200),b=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=bt(b),x=bt(v),N=Math.abs(v-b)>=360||y===x&&b!==v,T=Math.max(1,o.radarMaxDistance??200),X=Date.now(),P=a[a.length-1],te=o.rotation,G=bt(y+te),I=bt(x+te),le=Jb(y,x),fe=((P==null?void 0:P.angle)??le)+te,ie=u?[{id:"preview",angle:le,distance:T*.62,createdAt:X}]:a.filter(C=>X-C.createdAt<=p),de=!N,Ne=Math.max(8,Math.min(12,Math.min(c,s)*.16)),ee=0,W=0,ve=1,ge=N?{x:-1.12,y:-1.12,width:2.24,height:2.24}:Fb(G,I),ye=N?"":Kb(ee,W,ve,G,I),re=yp(b),Fe=yp(v),De=de?Zb(G,I,ge,c,s,re,Fe,Ne):null;U.useEffect(()=>{if(u||a.length===0)return;const C=window.setInterval(()=>m(Q=>Q+1),120);return()=>window.clearInterval(C)},[p,a.length,u]);const Qe=Ct(ee,W,ve,fe);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:c,height:s,viewBox:`${ge.x} ${ge.y} ${ge.width} ${ge.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[N?f.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:W,r:ve}):f.jsx("path",{className:"radar-sector-fill",d:ye}),[.25,.5,.75,1].map(C=>N?f.jsx("circle",{className:"radar-ring",cx:ee,cy:W,r:ve*C},C):f.jsx("path",{className:"radar-ring",d:Pb(ee,W,ve*C,G,I)},C)),!N&&f.jsx(_p,{cx:ee,cy:W,radius:ve,angle:G}),!N&&f.jsx(_p,{cx:ee,cy:W,radius:ve,angle:I}),f.jsx("line",{className:"radar-sweep",x1:ee,y1:W,x2:Qe.x,y2:Qe.y}),ie.map(C=>{const Q=u?0:X-C.createdAt,ue=Math.max(0,1-Q/p),xe=Math.max(0,Math.min(T,C.distance)),Ee=Ct(ee,W,ve*(xe/T),C.angle+te);return f.jsx("circle",{className:"radar-ping",cx:Ee.x,cy:Ee.y,r:Math.max(.025,Math.min(ge.width,ge.height)*.025),opacity:ue},C.id)})]}),de&&De&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:De.min.x,top:De.min.y,fontSize:Ne},children:re}),f.jsx("span",{className:"radar-angle-label",style:{left:De.max.x,top:De.max.y,fontSize:Ne},children:Fe})]})]})}function _p({cx:o,cy:a,radius:c,angle:s}){const u=Ct(o,a,c,s);return f.jsx("line",{className:"radar-boundary",x1:o,y1:a,x2:u.x,y2:u.y})}function Ct(o,a,c,s){const u=(bt(s)-90)*Math.PI/180;return{x:o+Math.cos(u)*c,y:a+Math.sin(u)*c}}function Kb(o,a,c,s,u){const m=Ct(o,a,c,s),p=Ct(o,a,c,u),b=Lf(s,u)>180?1:0;return`M ${o} ${a} L ${m.x} ${m.y} A ${c} ${c} 0 ${b} 1 ${p.x} ${p.y} Z`}function Pb(o,a,c,s,u){const m=Ct(o,a,c,s),p=Ct(o,a,c,u),b=Lf(s,u)>180?1:0;return`M ${m.x} ${m.y} A ${c} ${c} 0 ${b} 1 ${p.x} ${p.y}`}function Lf(o,a){const c=bt(o),s=bt(a),u=s>=c?s-c:360-c+s;return u===0?360:u}function Fb(o,a){const c=[{x:0,y:0},Ct(0,0,1,o),Ct(0,0,1,a)];for(const x of[0,90,180,270])Qb(x,o,a)&&c.push(Ct(0,0,1,x));const s=Math.min(...c.map(x=>x.x)),u=Math.max(...c.map(x=>x.x)),m=Math.min(...c.map(x=>x.y)),p=Math.max(...c.map(x=>x.y)),b=Math.max(.1,u-s),v=Math.max(.1,p-m),y=Math.max(b,v)*.24;return{x:s-y,y:m-y,width:b+y*2,height:v+y*2}}function Qb(o,a,c){const s=bt(a),u=bt(o),m=Lf(a,c),p=bt(u-s);return p>=0&&p<=m}function Zb(o,a,c,s,u,m,p,b){const y=Ct(0,0,1.1,o),x=Ct(0,0,1.1,a);return{min:gp(y,c,s,u,m,b),max:gp(x,c,s,u,p,b)}}function Wb(o,a,c,s){return{x:(o.x-a.x)/a.width*c,y:(o.y-a.y)/a.height*s}}function gp(o,a,c,s,u,m){const p=Wb(o,a,c,s),b=Math.max(10,u.length*m*.62),v=m,y=7;return{x:bp(p.x,b/2+y,Math.max(b/2+y,c-b/2-y)),y:bp(p.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function bp(o,a,c){return Math.max(a,Math.min(c,o))}function yp(o){return`${Math.round(o)}`}function bt(o){return Number.isFinite(o)?(o%360+360)%360:0}function Jb(o,a){const c=bt(o),s=bt(a),u=s>=c?s-c:360-c+s;return bt(c+u/2)}function e0(o,a){if(!a)return o;const c=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((s,u)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((m,p)=>f.jsx("span",{children:m},`${m}-${p}`))},`${s}-${u}`))})}function n0(o){const a={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return o===0?{low:{...a,left:c,top:0,bottom:0},high:{...a,right:c,top:0,bottom:0}}:o===180?{low:{...a,right:c,top:0,bottom:0},high:{...a,left:c,top:0,bottom:0}}:o===90?{low:{...a,bottom:c,left:0,right:0},high:{...a,top:c,left:0,right:0}}:{low:{...a,top:c,left:0,right:0},high:{...a,bottom:c,left:0,right:0}}}function t0({name:o,vertical:a,rotation:c,color:s,fontSize:u,endFontSize:m,centerInset:p,lowLabel:b,highLabel:v,showEnds:y}){const x=y?n0(c):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[f.jsx("div",{style:{position:"absolute",inset:0,...p,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:u,textAlign:"center",pointerEvents:"none"},children:e0(o,a)}),x&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...x.low,fontWeight:800,fontSize:m},children:b}),f.jsx("div",{style:{...x.high,fontWeight:800,fontSize:m},children:v})]})]})}function r_({name:o,rotation:a,width:c,height:s,value:u,showEnds:m=!1,fillColor:p="var(--red)",lowLabel:b="0",highLabel:v="100"}){const y=a===90||a===270,{fontSize:x,endFontSize:N,centerInset:T}=Ib(o,c,s,y,m);let X,P;a===0?(X={left:0,top:0,bottom:0,width:`${u}%`},P={left:0,top:0}):a===180?(X={right:0,top:0,bottom:0,width:`${u}%`},P={right:0,top:0}):a===90?(X={left:0,right:0,bottom:0,height:`${u}%`},P={left:0,bottom:0}):(X={left:0,right:0,top:0,height:`${u}%`},P={left:0,top:0});const te=G=>f.jsx(t0,{name:o,vertical:y,rotation:a,color:G,fontSize:x,endFontSize:N,centerInset:T,lowLabel:b,highLabel:v,showEnds:m});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${s}px`},children:te("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:p,overflow:"hidden",...X},children:f.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${s}px`,...P},children:te("var(--white)")})})]})}function l0({control:o,disabled:a,latestValue:c,onSlider:s,width:u,height:m}){const p=U.useRef(null),b=o.sliderMin??0,v=o.sliderMax??100,[y,x]=U.useState(()=>c===void 0?vp(o.sliderRecenter??"none"):xp(c,b,v)),N=U.useRef(null),T=o.rotation;U.useEffect(()=>{c!==void 0&&(x(xp(c,b,v)),N.current=c)},[c,b,v]);function X(I){const le=p.current;if(!le)return 0;const fe=le.getBoundingClientRect();let ie;return T===0?ie=(I.clientX-fe.left)/fe.width:T===180?ie=1-(I.clientX-fe.left)/fe.width:T===90?ie=1-(I.clientY-fe.top)/fe.height:ie=(I.clientY-fe.top)/fe.height,Math.max(0,Math.min(1,ie))}function P(I){a||te(X(I))}function te(I){const le=Math.round(I*100),fe=Math.round(b+(v-b)*I);x(le),fe!==N.current&&(N.current=fe,s(o.name,fe))}function G(){const I=o.sliderRecenter??"none";a||I==="none"||te(vp(I)/100)}return f.jsx("div",{ref:p,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:I=>{a||(I.preventDefault(),I.currentTarget.setPointerCapture(I.pointerId),P(I))},onPointerMove:I=>{I.buttons!==0&&P(I)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:f.jsx(r_,{name:o.name,rotation:T,width:u,height:m,value:y,showEnds:!0,lowLabel:String(b),highLabel:String(v)})})}function vp(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function xp(o,a,c){return c===a?0:Math.max(0,Math.min(100,Math.round((o-a)/(c-a)*100)))}const r0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},a0=["button","slider","toggle","radar","text"];function i0({unplaced:o,onAdd:a,onClose:c}){const s=U.useMemo(()=>a0.filter(b=>o.some(v=>v.type===b)),[o]),[u,m]=U.useState(s[0]??"button"),p=o.filter(b=>b.type===u);return U.useEffect(()=>{s.length>0&&!s.includes(u)&&m(s[0])},[s,u]),f.jsxs(wn,{title:"Tilføj kontrol",onClose:c,children:[s.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:s.map(b=>f.jsx("button",{type:"button",className:u===b?"active":"",onClick:()=>m(b),children:r0[b]},b))}),f.jsx("div",{className:"add-lists",children:s.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):p.map(b=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>a(b.name),children:[f.jsx("span",{children:b.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(Pn,{name:"plus",size:22})})]},b.name))})]})}function a_(o){const[a,c]=U.useState({w:0,h:0}),s=U.useRef(null),u=U.useRef(null);return U.useLayoutEffect(()=>{var v;const m=o.current;if(s.current===m)return;if((v=u.current)==null||v.disconnect(),u.current=null,s.current=m,!m){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const p=()=>{const y={w:m.clientWidth,h:m.clientHeight};c(x=>x.w===y.w&&x.h===y.h?x:y)};p();const b=new ResizeObserver(p);b.observe(m),u.current=b}),U.useEffect(()=>()=>{var m;(m=u.current)==null||m.disconnect(),u.current=null,s.current=null},[]),a}function Ga(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const Sp=4,wp=5;function Ep(o){if(!Ga(o))return null;const a=o.centerX2/2,c=o.centerY2/2;return{x0:a-o.spanX/2,x1:a+o.spanX/2,y0:c-o.spanY/2,y1:c+o.spanY/2}}function s0(o,a,c=.02){return o.x0<a.x1-c&&a.x0<o.x1-c&&o.y0<a.y1-c&&a.y0<o.y1-c}function kp(o,a){const c=Wi(o,a);if(!c||o.spanX===null||o.spanY===null)return o;const s=Mo(c.cx,c.cy,o.spanX,o.spanY,a);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function Np(o,a){return Math.max(1,Math.min(a.cols-1,o))}function Rp(o,a){return Math.max(1,Math.min(a.rows-1,o))}function o0(){const o=J(j=>j.layout),a=J(j=>j.active),c=J(j=>j.saveLayout),s=J(j=>j.setEditMode),u=J(j=>j.askConfirm),m=!!(a!=null&&a.canEdit),[p,b]=U.useState(()=>o.map(j=>({...j}))),[v,y]=U.useState(null),[x,N]=U.useState(!1),[T,X]=U.useState(null),[P,te]=U.useState(null),[G,I]=U.useState(!1),le=U.useRef(null),fe=a_(le),ie=fe.w>0&&fe.h>0,de=Qp(fe.w,fe.h,a==null?void 0:a.gridCols,a==null?void 0:a.gridRows),Ne=U.useMemo(()=>ie?gb(de):[],[de,ie]),ee=p.filter(Ga),W=p.filter(j=>!Ga(j)),ve=U.useMemo(()=>{const j=new Set;for(let K=0;K<ee.length;K+=1)for(let F=K+1;F<ee.length;F+=1){const $=Ep(ee[K]),Ue=Ep(ee[F]);$&&Ue&&s0($,Ue)&&(j.add(ee[K].name),j.add(ee[F].name))}return j},[ee]),ge=ve.size>0,ye=p.find(j=>j.name===v)??null,re=U.useMemo(()=>Tp(p)!==Tp(o),[p,o]),Fe=U.useMemo(()=>{if(!T||!P)return null;const j=p.find($=>$.name===T);if(!j||j.spanX===null||j.spanY===null)return null;const K=Mo(P.cx,P.cy,j.spanX,j.spanY,de),F=Wi({...j,centerX2:K.centerX2,centerY2:K.centerY2},de);return F?{name:j.name,rect:F}:null},[p,T,P,de]);function De(j,K){b(F=>F.map($=>$.name===j?K($):$))}function Qe(j,K){j.stopPropagation(),y(K.name);const F=Wi(K,de);F&&(X(K.name),te({cx:F.cx,cy:F.cy}),j.currentTarget.setPointerCapture(j.pointerId))}function C(j){if(!T)return;const K=le.current;if(!K)return;const F=K.getBoundingClientRect(),$=K.clientWidth/F.width,Ue=K.clientHeight/F.height;te({cx:Math.max(0,Math.min(K.clientWidth,(j.clientX-F.left)*$)),cy:Math.max(0,Math.min(K.clientHeight,(j.clientY-F.top)*Ue))})}function Q(){if(T&&P){const j=p.find(K=>K.name===T);if(j&&j.spanX!==null&&j.spanY!==null){const K=Mo(P.cx,P.cy,j.spanX,j.spanY,de);De(T,F=>({...F,centerX2:K.centerX2,centerY2:K.centerY2}))}}X(null),te(null)}function ue(j){De(j,K=>K.spanX===null||K.spanY===null?{...K,rotation:(K.rotation+270)%360}:kp({...K,rotation:(K.rotation+270)%360,spanX:Np(K.spanY,de),spanY:Rp(K.spanX,de)},de))}function xe(j,K,F){De(j,$=>{if($.spanX===null||$.spanY===null)return $;const Ue=K==="x"?Np($.spanX+F,de):$.spanX,Ce=K==="y"?Rp($.spanY+F,de):$.spanY;return kp({...$,spanX:Ue,spanY:Ce},de)})}function Ee(j){De(j,K=>({...K,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function E(j){N(!1);const K=p.find($=>$.name===j);if(!K)return;const F=Mo(de.areaW/2,de.areaH/2,Sp,wp,de);De(j,()=>({...K,spanX:Sp,spanY:wp,rotation:0,centerX2:F.centerX2,centerY2:F.centerY2})),y(j)}async function L(){ge||(I(!0),await c(p),I(!1))}function Z(){if(!re){s(!1);return}u({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ye&&Ga(ye)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:j=>j.stopPropagation(),children:[f.jsx(Ki,{label:"⟲",title:"Roter",onClick:()=>ue(ye.name)}),f.jsx(Ki,{label:"W−",title:"Gør smallere",onClick:()=>xe(ye.name,"x",-1),disabled:ye.spanX===null||ye.spanX<=1}),f.jsx(Ki,{label:"W+",title:"Gør bredere",onClick:()=>xe(ye.name,"x",1),disabled:ye.spanX===null||ye.spanX>=de.cols-1}),f.jsx(Ki,{label:"H−",title:"Gør lavere",onClick:()=>xe(ye.name,"y",-1),disabled:ye.spanY===null||ye.spanY<=1}),f.jsx(Ki,{label:"H+",title:"Gør højere",onClick:()=>xe(ye.name,"y",1),disabled:ye.spanY===null||ye.spanY>=de.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Ee(ye.name),"aria-label":"Slet",children:f.jsx(Pn,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:le,style:{touchAction:"none"},onPointerMove:C,onPointerUp:Q,onPointerDown:()=>y(null),children:ie&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:de.areaW,height:de.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Ne.map((j,K)=>f.jsx("circle",{cx:j.x,cy:j.y,r:2.5,fill:"rgba(198,80,78,0.45)"},K))}),Fe&&f.jsx("div",{className:"snap-preview",style:{left:Fe.rect.cx,top:Fe.rect.cy,width:Fe.rect.width,height:Fe.rect.height}}),ee.map(j=>{const K=T===j.name&&P,F=Wi(j,de);if(!F)return null;const $=K?P.cx:F.cx,Ue=K?P.cy:F.cy,Ce={left:$,top:Ue,width:F.width,height:F.height,outline:v===j.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${ve.has(j.name)?"colliding":""}`,style:Ce,onPointerDown:Yn=>Qe(Yn,j),children:j.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:Co(j.name,F.width,F.height)},children:j.name}):j.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:Co(j.name,F.width,F.height)},children:f.jsx("span",{children:j.name})}):j.type==="radar"?f.jsx(l_,{control:j,pings:[],width:F.width,height:F.height,preview:!0}):j.type==="text"?f.jsx(t_,{message:j.name,width:F.width,height:F.height}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(r_,{name:j.name,rotation:j.rotation,width:F.width,height:F.height,value:50,showEnds:!0,lowLabel:String(j.sliderMin??0),highLabel:String(j.sliderMax??100),fillColor:ve.has(j.name)?"var(--disabled)":"var(--red)"})})},j.name)}),m&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:j=>j.stopPropagation(),onClick:()=>N(!0),"aria-label":"Tilføj kontrol",children:f.jsx(Pn,{name:"plus",size:24})}),G&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:Z,disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:L,disabled:ge||G,children:G?"Gemmer...":"Gem"})]}),x&&f.jsx(i0,{unplaced:W,onAdd:E,onClose:()=>N(!1)})]})}function Tp(o){return JSON.stringify(o.map(a=>({type:a.type,name:a.name,centerX2:a.centerX2,centerY2:a.centerY2,spanX:a.spanX,spanY:a.spanY,rotation:a.rotation})))}function Ki({label:o,title:a,disabled:c,onClick:s}){return f.jsx("button",{type:"button","aria-label":a,title:a,disabled:c,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function c0(){const o=J(G=>G.layout),a=J(G=>G.editMode),c=J(G=>G.active),s=J(G=>G.sliderValues),u=J(G=>G.toggleValues),m=J(G=>G.radarPings),p=J(G=>G.textValues),b=J(G=>G.toggleSideMenu),v=J(G=>G.sendButton),y=J(G=>G.sendSlider),x=J(G=>G.sendToggle),N=U.useRef(null),T=a_(N),X=Qp(T.w,T.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),P=T.w>0&&T.h>0,te=o.filter(Ga);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(Bf,{title:"Kontrol Panel",onMenu:()=>b()}),a?f.jsx(o0,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:N,children:P?te.map(G=>{const I=Wi(G,X);return I?f.jsx($b,{control:G,rect:I,disabled:!1,latestValue:G.type==="slider"?s[G.name]:void 0,toggleValue:G.type==="toggle"?u[G.name]:void 0,radarPings:G.type==="radar"?m[G.name]:void 0,textValue:G.type==="text"?p[G.name]:void 0,onButton:v,onSlider:y,onToggle:x},G.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const u0="",Mp="",Ap="",Kr="";function Pi(o){return new Promise(a=>setTimeout(a,o))}class f0{constructor(a){this.transport=a}async interrupt(){await this.transport.write(Ap),await Pi(80),await this.transport.write(Ap)}async friendlyRepl(){await this.transport.write(Mp)}async softReset(){await this.transport.write(Kr)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(a,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await Pi(180)}),await Pi(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(a)}).read())`)}async sendFriendlyLine(a){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(a)}async sendProgramInput(a){await this.transport.writeLine(a)}async enterRawRepl(a=2500){if(await this.interrupt(),await Pi(80),await this.transport.write(`\r
`),await Pi(40),!(await this.collectUntil(async()=>{await this.transport.write(u0)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),a)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(a,c=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(a),a.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Kr)},u=>u.includes(`${Kr}${Kr}`)||u.includes(`${Kr}>`),c);return await this.friendlyRepl().catch(()=>{}),d0(s)}collectUntil(a,c,s){return new Promise((u,m)=>{let p="",b=null;const v=setTimeout(()=>{b==null||b(),m(new Error("Timeout ved USB REPL kommando."))},s);b=this.transport.addDataListener(y=>{p+=y,c(p)&&(clearTimeout(v),b==null||b(),u(p))}),a().catch(y=>{clearTimeout(v),b==null||b(),m(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(a=1600){await this.collectUntil(async()=>{await this.transport.write(Mp)},c=>/(^|\r?\n)>>> ?$/.test(c),a)}}function d0(o){const a=o.indexOf("OK"),c=o.indexOf(Kr,a>=0?a:0),s=c>=0?o.indexOf(Kr,c+1):-1;if(a<0||c<0)return{output:o.trim(),error:"",raw:o};const u=o.slice(a+2,c).replace(/^\r?\n/,"").trimEnd(),m=s>=0?o.slice(c+1,s).trim():"";return{output:u,error:m,raw:o}}const m0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],h0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],fr=h0.flatMap(({board:o,firmwareName:a})=>m0.map(({version:c,date:s,stamp:u,tag:m})=>{const p=`${a}-${u}-${m}.uf2`;return{board:o,version:c,date:s,fileName:p,url:`https://micropython.org/resources/firmware/${p}`}})),hf=512,pf=`import builtins as _pkp_builtins
`;function Ml(o){return JSON.stringify(o)}function p0(o){return`bytes.fromhex(${JSON.stringify([...o].map(a=>a.toString(16).padStart(2,"0")).join(""))})`}function _0(o,a){return`${o==="/"?"":o.replace(/\/$/,"")}/${a}`}class g0{constructor(a){this.repl=a}async list(a="/"){const c=`
import os
base = ${Ml(a)}
for name in os.listdir(base):
    p = (${Ml(a)}.rstrip('/') + '/' + name) if ${Ml(a)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(c);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(u=>u.trim()).filter(Boolean).map(u=>{const[m,p,b]=u.split("	"),v=p==="dir"||p==="file"?p:"unknown",y=parseInt(b??"",10);return{name:m,path:_0(a,m),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(a){const c=`
import sys
${pf}with _pkp_builtins.open(${Ml(a)}, 'rb') as f:
    while True:
        b = f.read(${hf})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(c,1e4);if(s.error)throw new Error(s.error);const u=s.output.replace(/\s+/g,"");return new TextDecoder().decode(b0(u))}async writeText(a,c,s){const u=new TextEncoder().encode(c);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${pf}_pkp_builtins.open(${Ml(a)}, 'wb').close()`),u.length===0){s==null||s(100,"Gemt på Pico");return}for(let m=0;m<u.length;m+=hf){const p=u.slice(m,m+hf),b=`
${pf}with _pkp_builtins.open(${Ml(a)}, 'ab') as f:
    f.write(${p0(p)})
`,v=await this.repl.exec(b,1e4);if(v.error)throw new Error(v.error);const y=Math.min(m+p.length,u.length);s==null||s(10+Math.round(y/u.length*85),`Gemmer ${y}/${u.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(a,c,s,u={}){const m=`${a}.tmp`;if(await this.writeText(m,c,(v,y)=>s==null?void 0:s(Math.min(70,v*.7),y)),s==null||s(78,"Verificerer fil..."),await this.readText(m)!==c)throw await this.delete(m).catch(()=>{}),new Error(`Verificering fejlede for ${a}.`);s==null||s(88,"Udskifter fil...");let b=!!u.createBackup;if(b){const v=await this.readText(a).catch(()=>null);b=v!==null&&v!==c}if(b){const v=await this.nextBackupPath(a).catch(()=>`${a}.backup`);await this.rename(a,v).catch(()=>{})}else await this.delete(a).catch(()=>{});await this.rename(m,a),s==null||s(100,"Installeret på Pico")}async delete(a){const c=await this.repl.exec(`
import os
os.remove(${Ml(a)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(a){const c=await this.list("/"),s=new Set(c.map(N=>N.path.toLowerCase())),u=a.replace(/\\/g,"/"),m=u.lastIndexOf("/"),p=m>=0?u.slice(0,m+1):"/",b=m>=0?u.slice(m+1):u.replace(/^\/+/,""),v=b.lastIndexOf("."),y=v>0?b.slice(0,v):b,x=v>0?b.slice(v):"";for(let N=1;N<1e3;N+=1){const T=`${p}${y}_backup${N}${x}`;if(!s.has(T.toLowerCase()))return T}return`${p}${y}_backup${Date.now()}${x}`}async rename(a,c){const s=await this.repl.exec(`
import os
os.rename(${Ml(a)}, ${Ml(c)})
`);if(s.error)throw new Error(s.error)}}function b0(o){const a=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<a.length;c+=1)a[c]=parseInt(o.slice(c*2,c*2+2),16);return a}const y0=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct\r
import os\r
import ubinascii\r
import machine\r
\r
__version__ = '0.7.0'
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
ALLOWED_COMMAND_TYPES  = ["button", "slider", "toggle", "radar", "text"]\r
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
      - 'who_are_you'                    -> 'unowned' | 'owned,<ownerID>,<iconID>,<canConnect>,<canEdit>,<canEditCode>,<ownerName>'
      - 'ACK:ownership'                  -> 'READY:permission'
      - 'request_permission,<id>,<name>' -> 'perm,<canConnect>,<canEdit>,<canEditCode>'
                                            (denies + disconnects if private)
      - 'ACK:permission'                 -> (handshake complete)
      - 'create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>,<canEditCode>' -> 'ACK:create'
\r
    Layout streaming:\r
      - 'request'  -> device streams '#VERSION,1', control lines, '__END__'\r
      - 'update'   -> 'ACK:update', then app streams 'update,...' lines + '__END__';\r
                      device saves and replies 'ACK: ...' + 'LAYOUT_SAVED'\r
\r
    Control commands (fire-and-forget, routed to on_button/on_slider/on_toggle;
    on_write is still available as a raw callback):
      - 'button,<NAME>:down|up' / 'slider,<NAME>:<VALUE>' / 'toggle,<NAME>:<0|1>'
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
        self.can_others_connect = 0
        self.can_others_edit = 0
        self.can_others_edit_code = 0
        self.grid_cols = 11
        self.grid_rows = 31

        # ---- Session flags
        self._session_can_edit = False
        self._session_can_edit_code = False
        self._session_is_owner = False
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
           canOthersConnect,<0/1> / canOthersEdit,<0/1> / canOthersEditCode,<0/1>
        """
        try:
            with open(self._settings_file, "r") as f:
                lines = [l.strip() for l in f.readlines() if l.strip()]

            saw_can_others_edit_code = False
            for line in lines:
                parts = line.split(",", 1)
                if len(parts) != 2:
                    continue
                key, val = parts[0], parts[1]
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
                elif key == "canOthersEdit":
                    try:
                        self.can_others_edit = 1 if int(val) == 1 else 0
                    except:
                        self.can_others_edit = 0
                elif key == "canOthersEditCode":
                    saw_can_others_edit_code = True
                    try:
                        self.can_others_edit_code = 1 if int(val) == 1 else 0
                    except:
                        self.can_others_edit_code = 0
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
            print("Settings loaded:",
                  self.owner_id, self.owner_name,
                  self.icon_id, self.can_others_connect, self.can_others_edit)
            if not saw_can_others_edit_code:
                self.can_others_edit_code = 0
                self.save_settings_to_file(
                    self.owner_id or "",
                    self.owner_name or "",
                    self.icon_id,
                    self.can_others_connect,
                    self.can_others_edit,
                    0,
                    self.grid_cols,
                    self.grid_rows,
                )
        except Exception as e:
            print("Settings not found or invalid. Using defaults. Err:", e)\r
            self.owner_id = None\r
            self.owner_name = None\r
            self.icon_id = 0\r
            self.can_others_connect = 0
            self.can_others_edit = 0
            self.can_others_edit_code = 0
            self.save_settings_to_file("", "", 0, 0, 0, 0)

    def save_settings_to_file(self, owner_id, owner_name, icon_id, can_connect, can_edit, can_edit_code,
                              grid_cols=None, grid_rows=None):
        # Enforce rule: if connect==0 => guest editing is off.
        if not can_connect:
            can_edit = 0
            can_edit_code = 0
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
                f.write("iconID,{}\\n".format(icon_id))
                f.write("canOthersConnect,{}\\n".format(1 if can_connect else 0))
                f.write("canOthersEdit,{}\\n".format(1 if can_edit else 0))
                f.write("canOthersEditCode,{}\\n".format(1 if can_edit_code else 0))
                f.write("gridCols,{}\\n".format(grid_cols))
                f.write("gridRows,{}\\n".format(grid_rows))
            self.owner_id = owner_id if owner_id else None\r
            self.owner_name = owner_name if owner_name else None\r
            self.icon_id = int(icon_id)\r
            self.can_others_connect = 1 if can_connect else 0
            self.can_others_edit = 1 if can_edit else 0
            self.can_others_edit_code = 1 if can_edit_code else 0
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
    def _reset_protocol_state(self):
        self._session_can_edit = False
        self._session_can_edit_code = False
        self._session_is_owner = False
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
        elif msg == "who_are_you":
            if self.owner_id:
                self._send_reliable_stream(["owned,{},{},{},{},{},{}".format(
                    self.owner_id,
                    int(self.icon_id),
                    int(self.can_others_connect),
                    int(self.can_others_edit),
                    int(self.can_others_edit_code),
                    self._protocol_field(self.owner_name),
                )])
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
                        self.icon_id,
                        self.can_others_connect,
                        self.can_others_edit,
                        self.can_others_edit_code,
                        self.grid_cols,
                        self.grid_rows,
                    )
                self._session_can_edit = True
                self._session_can_edit_code = True
                self._session_is_owner = True
                self._send_reliable_stream(["perm,1,1,1"])
            else:
                self._session_is_owner = False
                if self.can_others_connect == 1:
                    self._session_can_edit = True if self.can_others_edit == 1 else False
                    self._session_can_edit_code = True if self.can_others_edit_code == 1 else False
                    self._send_reliable_stream(["perm,1,{},{}".format(
                        1 if self._session_can_edit else 0,
                        1 if self._session_can_edit_code else 0,
                    )])
                else:
                    self._session_can_edit = False
                    self._session_can_edit_code = False
                    self._send_reliable_stream(["perm,0,0", "disconnect_private"])
                    if self.conn_handle is not None:
                        try:
                            self.ble.gap_disconnect(self.conn_handle)
                        except Exception as e:\r
                            print("gap_disconnect after deny failed:", e)\r
                            self._handle_disconnected("deny_disconnect_failed")\r
                    else:\r
                        self._handle_disconnected("deny_without_handle")\r
\r
        elif msg.startswith("create,"):\r
            # create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>[,<canEditCode>,<cols>,<rows>]
            parts = msg.split(",")
            if len(parts) < 6:
                self._send_reliable_stream(["ERR: Malformed create command"])
                return
            _, owner_id, owner_name, icon_id_s, can_connect_s, can_edit_s = parts[:6]
            owner_name = self._protocol_field(owner_name)\r
            try:\r
                icon_id = int(icon_id_s)\r
            except:\r
                icon_id = 0\r
            try:\r
                can_connect = 1 if int(can_connect_s) == 1 else 0\r
            except:\r
                can_connect = 0\r
            try:
                can_edit = 1 if int(can_edit_s) == 1 else 0
            except:
                can_edit = 0
            can_edit_code = can_edit

            grid_cols = self.grid_cols
            grid_rows = self.grid_rows
            if len(parts) >= 9:
                try:
                    can_edit_code = 1 if int(parts[6]) == 1 else 0
                except:
                    can_edit_code = 0
                try:
                    grid_cols = int(parts[7])
                except:
                    pass
                try:
                    grid_rows = int(parts[8])
                except:
                    pass
            elif len(parts) >= 8:
                try:
                    grid_cols = int(parts[6])
                except:
                    pass
                try:
                    grid_rows = int(parts[7])
                except:
                    pass

            if can_connect == 0:
                can_edit = 0
                can_edit_code = 0

            self.save_settings_to_file(owner_id, owner_name, icon_id, can_connect, can_edit, can_edit_code,
                                       grid_cols, grid_rows)
            self._session_can_edit = True
            self._session_can_edit_code = True
            self._session_is_owner = True
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
            try:
                can_edit = 1 if int(parts[3]) == 1 else 0
            except:
                can_edit = self.can_others_edit
            can_edit_code = self.can_others_edit_code
            grid_col_index = 4
            grid_row_index = 5
            owner_name_index = 6
            if len(parts) >= 8:
                try:
                    can_edit_code = 1 if int(parts[4]) == 1 else 0
                except:
                    can_edit_code = self.can_others_edit_code
                grid_col_index = 5
                grid_row_index = 6
                owner_name_index = 7
            try:
                grid_cols = int(parts[grid_col_index])
            except:
                grid_cols = self.grid_cols
            try:
                grid_rows = int(parts[grid_row_index])
            except:
                grid_rows = self.grid_rows
            owner_name = self.owner_name or ""
            if len(parts) > owner_name_index:
                owner_name = self._protocol_field(parts[owner_name_index]) or owner_name

            if can_connect == 0:
                can_edit = 0
                can_edit_code = 0

            self.save_settings_to_file(
                self.owner_id or "",
                owner_name,
                icon_id,
                can_connect,
                can_edit,
                can_edit_code,
                grid_cols,
                grid_rows,
            )
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
        self._auto_bind_main_callback("on_connect", "_on_connect_callback", callbacks)\r
        self._auto_bind_main_callback("on_disconnect", "_on_disconnect_callback", callbacks)\r
\r
    def _dispatch_app_command(self, msg):\r
        """Route app controls to friendly callbacks, with on_write as a raw callback."""
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
            if command_type == "button":
                name = payload
                is_down = True
                if ":" in payload:
                    name, state_s = payload.split(":", 1)
                    is_down = state_s.strip().lower() in ("1", "true", "down", "pressed")
                if self._on_button_callback:
                    self._on_button_callback(name, is_down)
                    return
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
    def _handle_fs_write_begin(self, msg):
        path = self._clean_fs_path(msg.split(",", 1)[1])
        if not path:
            self._send_reliable_stream(["ERR: Bad path"])
            return
        if not self._can_write_file_path(path):
            self._send_reliable_stream(["ERR: File edit not permitted"])
            return
        protected = ("/BLEPeripheral.py",)
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
            total = 0
            checksum = 0
            with open(self._file_write_path, "rb") as f:
                while True:
                    chunk = f.read(128)
                    if not chunk:
                        break
                    total += len(chunk)
                    for b in chunk:
                        checksum = (checksum + b) & 0xFFFFFFFF
            self._send_reliable_stream(["ACK:fs_write_done,{},{}".format(total, checksum)])
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_write_end failed {}".format(e)])
        finally:\r
            self._expecting_file_write = False\r
            self._file_write_path = None\r
            self._file_write_tmp = None\r
\r
    def _handle_fs_delete(self, msg):
        path = self._clean_fs_path(msg.split(",", 1)[1])
        if not self._can_write_file_path(path):
            self._send_reliable_stream(["ERR: File edit not permitted"])
            return
        if path in ("/BLEPeripheral.py", "/main.py"):
            self._send_reliable_stream(["ERR: Protected runtime file"])
            return\r
        try:\r
            os.remove(self._path_for_open(path))\r
            self._send_reliable_stream(["ACK:fs_delete"])\r
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_delete failed {}".format(e)])

    def _can_write_file_path(self, path):
        clean = self._clean_fs_path(path)
        if self._session_is_owner:
            return True
        if clean in ("/DeviceSettings.txt", "/Layout.txt"):
            return False
        return True if self._session_can_edit_code else False

    # -------------------- External hooks --------------------
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
    def on_connect(self, callback):\r
        self._on_connect_callback = callback\r
\r
    def on_disconnect(self, callback):\r
        self._on_disconnect_callback = callback\r
`,v0=`from machine import Pin, time_pulse_us\r
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
        return cms`,x0=`import array, time\r
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
`,S0=`from machine import Pin
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
`,w0=`# PicoFly.py\r
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
`,E0=`import machine\r
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
        self.initPCA()`,k0=`from machine import Pin\r
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
`,N0=`from machine import Pin\r
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
`,R0=`from machine import Pin, PWM, ADC\r
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
`,T0=`from machine import Pin\r
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
`,Ba=[{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",content:S0},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:N0},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:T0},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:k0},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:R0},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:y0},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:E0},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:w0},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:v0},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:x0}],M0=11914;function A0(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function D0(){return A0()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class j0{constructor(a={}){ce(this,"port",null);ce(this,"reader",null);ce(this,"writer",null);ce(this,"readLoopDone",null);ce(this,"readLoopActive",!1);ce(this,"disconnecting",!1);ce(this,"buffer","");ce(this,"events");ce(this,"dataListeners",new Set);this.events=a}get connected(){return!!this.port&&!!this.writer}get info(){var a;return((a=this.port)==null?void 0:a.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const a=await navigator.serial.requestPort({filters:[{usbVendorId:M0}]});await this.openPort(a)}async connectKnownPort(a){await this.openPort(a)}async disconnect(){var v,y;const a=this.connected||!!this.port||!!this.reader,c=this.port,s=this.reader,u=this.writer,m=this.readLoopDone,p=s==null?void 0:s.closed.catch(()=>{}),b=u==null?void 0:u.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}m&&await m.catch(()=>{}),await p;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(u==null?void 0:u.close()),await b}catch{try{await(u==null?void 0:u.abort("disconnect"))}catch{}}try{u==null||u.releaseLock()}catch{}this.writer===u&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===m&&(this.readLoopDone=null),this.disconnecting=!1,a&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(a){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(a))}async writeLine(a){await this.write(`${a}\r
`)}addDataListener(a){return this.dataListeners.add(a),()=>this.dataListeners.delete(a)}async openPort(a){var s,u,m;if(await this.disconnect().catch(()=>{}),await a.open({baudRate:115200,bufferSize:4096}),this.port=a,this.writer=((s=a.writable)==null?void 0:s.getWriter())??null,!this.writer||!a.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=a.getInfo();(m=(u=this.events).onLog)==null||m.call(u,"success",`USB-forbindelse oprettet (${O0(c)}).`),this.readLoopDone=this.startReadLoop(a)}async startReadLoop(a){var u,m,p;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((u=a.readable)==null?void 0:u.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:b,done:v}=await s.read();if(v)break;b&&this.consumeText(c.decode(b,{stream:!0}))}}catch(b){this.readLoopActive&&((p=(m=this.events).onLog)==null||p.call(m,"error",b instanceof Error?b.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===a&&this.closeAfterUnexpectedReadEnd(a)}}async closeAfterUnexpectedReadEnd(a){var m,p;const c=this.connected||this.port===a;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,u=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await u}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await a.close()}catch{}this.port===a&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((p=(m=this.events).onDisconnect)==null||p.call(m))}consumeText(a){var c,s,u,m;(s=(c=this.events).onData)==null||s.call(c,a);for(const p of this.dataListeners)p(a);for(this.buffer+=a;this.buffer.includes(`
`);){const p=this.buffer.indexOf(`
`),b=this.buffer.slice(0,p).replace(/\r$/,"");this.buffer=this.buffer.slice(p+1),(m=(u=this.events).onLine)==null||m.call(u,b)}}}function O0(o){const a=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${a}, ${c}`}const i_=15e3,Dp=64*1024,jp=1e5,s_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),C0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class z0{constructor(){ce(this,"worker",null);ce(this,"pending",null);ce(this,"nextId",0)}send(a,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,u=c.timeoutMs??i_,m=this.ensureWorker();return new Promise(p=>{const b=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},u);this.pending={id:s,timer:b,onOutput:c.onOutput,resolve:p},m.postMessage({type:"run",id:s,code:L0(a),runtimeUrl:s_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var a;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(a=this.worker)==null||a.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const a=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return a.onmessage=c=>this.handleMessage(c.data),a.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=a,a}handleMessage(a){var s;const c=this.pending;if(!(!c||a.id!==c.id||a.type==="ready")){if(a.type==="stdout"){(s=c.onOutput)==null||s.call(c,a.text);return}if(a.type==="unavailable"){this.finish({ok:!1,output:"",error:a.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:a.ok,output:a.output,error:a.error,timedOut:!1,unavailable:!1})}}finish(a){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(a))}restartWorker(){var a;(a=this.worker)==null||a.terminate(),this.worker=null}}class B0{constructor(){ce(this,"worker",null);ce(this,"pending",null);ce(this,"nextId",0)}run(a,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof c=="number"?c:c.timeoutMs??i_,u=typeof c=="number"?void 0:c.onOutput,m=typeof c=="number"?void 0:c.signal,p=wf(a,{allowInput:!0});if(p.some(y=>y.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:p,timedOut:!1,unavailable:!1});const b=++this.nextId,v=this.ensureWorker();return new Promise(y=>{const x=P=>this.finish(P),N=()=>{v.postMessage({type:"stop",id:b}),x({ok:!1,output:"",error:"",issues:p,timedOut:!1,unavailable:!1})},T=window.setTimeout(()=>{x({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:p,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:b,timer:T,issues:p,onOutput:u,signal:m,abort:N,resolve:y},m!=null&&m.aborted){N();return}m==null||m.addEventListener("abort",N,{once:!0});const X={type:"run",id:b,code:a,runtimeUrl:s_,interactive:!0};v.postMessage(X)})}sendInput(a){const c=this.pending;!c||!this.worker||this.worker.postMessage({type:"stdin",id:c.id,text:a})}stop(){const a=this.pending;!a||!this.worker||(this.worker.postMessage({type:"stop",id:a.id}),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:a.issues,timedOut:!1,unavailable:!1}),this.restartWorker())}dispose(){var a;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(a=this.worker)==null||a.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const a=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return a.onmessage=c=>this.handleMessage(c.data),a.onerror=c=>{const s=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=a,a}handleMessage(a){var s;const c=this.pending;if(!(!c||a.id!==c.id||a.type==="ready")){if(a.type==="stdout"){(s=c.onOutput)==null||s.call(c,a.text);return}if(a.type==="unavailable"){this.finish({ok:!1,output:"",error:a.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:a.ok,output:a.output,error:a.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(a){var s;const c=this.pending;c&&(window.clearTimeout(c.timer),(s=c.signal)==null||s.removeEventListener("abort",c.abort),this.pending=null,c.resolve(a))}restartWorker(){var a;(a=this.worker)==null||a.terminate(),this.worker=null}}function L0(o){const a=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${a})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${a})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function wf(o,a={}){const c=[],s=new Blob([o]).size;s>Dp&&c.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${Dp} bytes.`});const u=o.split(/\r?\n/);for(let m=0;m<u.length;m+=1){const p=m+1,b=zo(u[m]).trim();if(!b)continue;const v=H0(b);v&&C0.has(v)&&c.push({level:"error",line:p,text:`${v} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!a.allowInput&&U0(u[m])&&c.push({level:"error",line:p,text:"input() virker kun, når koden kører på Pico via USB. Forbind Pico med USB, gem filen på Picoen, og kør koden derfra."});const y=b.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&G0(y)>jp&&c.push({level:"error",line:p,text:`range(...) er for stor til offline kørsel. Brug højst ${jp} gentagelser.`})}for(const m of V0(u))c.push({level:"warning",text:`Funktionen ${m} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function zo(o){let a=null;for(let c=0;c<o.length;c+=1){const s=o[c];if((s==='"'||s==="'")&&o[c-1]!=="\\"&&(a=a===s?null:a??s),s==="#"&&!a)return o.slice(0,c)}return o}function U0(o){const a=zo(o);let c=null;for(let s=0;s<a.length;s+=1){const u=a[s];if((u==='"'||u==="'")&&a[s-1]!=="\\"){c=c===u?null:c??u;continue}if(!c&&!(!Op(a[s-1])||a.slice(s,s+5)!=="input")&&Op(a[s+5])&&a.slice(s+5).trimStart().startsWith("("))return!0}return!1}function Op(o){return!o||!/[A-Za-z0-9_]/.test(o)}function H0(o){const a=o.match(/^import\s+([A-Za-z_]\w*)/);if(a)return a[1];const c=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Cp(o){const a=o.match(/^\s*/);return(a==null?void 0:a[0].replace(/\t/g,"    ").length)??0}function G0(o){const a=Number(o[1]),c=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const p=(c===void 0?a:c)-(c===void 0?0:a);return p>0&&s<0||p<0&&s>0?0:Math.ceil(Math.abs(p/s))}function V0(o){const a=new Set;for(let c=0;c<o.length;c+=1){const s=zo(o[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const u=s[1],m=Cp(o[c]);for(let p=c+1;p<o.length;p+=1){if(!o[p].trim())continue;if(Cp(o[p])<=m)break;if(new RegExp(`\\b${u}\\s*\\(`).test(zo(o[p]))){a.add(u);break}}}return[...a]}const Y0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function q0(o,a){var x;const c=o.trim(),s=a.split(/\r?\n/),u=I0(c),m=u?s[u-1]??"":"",p=$0(s,u),b=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(b))return{simple:"Programmet blev stoppet.",technical:c,line:u};if(/MemoryError/.test(b))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/RecursionError/.test(b))return{simple:`En funktion kalder sig selv for mange gange${u?` omkring linje ${u}`:""}.`,technical:c,line:u};const v=b.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${u?` på linje ${u}`:""}.`,technical:c,line:u};const y=b.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:F0(m,y[1])?`Teksten ${y[1]} mangler måske citationstegn${u?` på linje ${u}`:""}.`:`Python kender ikke navnet ${y[1]}${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ZeroDivisionError/.test(b))return{simple:`Kan ikke dividere med 0${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError:\s+unexpected indent/.test(b))return{simple:`Der er for meget indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError/.test(b))return{simple:`Mangler indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ImportError|ModuleNotFoundError/.test(b)){const N=(x=b.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${N?` ${N}`:""}.`,technical:c,line:u}}if(/OSError/.test(b))return/ENOENT|No such file|Errno\s+2/.test(b)?{simple:`Python kan ikke finde filen${u?` på linje ${u}`:""}.`,technical:c,line:u}:/EACCES|permission|denied/i.test(b)?{simple:`Python har ikke adgang til filen eller enheden${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Der opstod en fejl med en fil eller en enhed${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/SyntaxError/.test(b)){if(/invalid syntax/.test(b)&&p.text.trim().endsWith(","))return{simple:`Linje ${p.line??u} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:p.line??u};const N=Ef(m,u)??Ef(p.text,p.line)??X0(s,u);return N?{simple:`Mangler måske : efter linje ${N.line}.`,technical:c,line:N.line}:u&&p.text.trim().endsWith(":")&&m.trim()&&!/^\s+/.test(m)?{simple:`Mangler måske indrykning på linje ${u}.`,technical:c,line:u}:P0(m)?{simple:`Tekst mangler måske citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:K0(m)?{simple:`Tekst mangler måske et afsluttende citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:Q0(m)?{simple:`Mangler måske en afsluttende parentes${u?` på linje ${u}`:""}.`,technical:c,line:u}:Z0(m)?{simple:`Der er måske en parentes for meget${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en syntaksfejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}return/TypeError/.test(b)?/takes .* positional arguments? but .* given/.test(b)||/function takes/.test(b)?{simple:`En funktion får for mange eller for få værdier${u?` på linje ${u}`:""}.`,technical:c,line:u}:/unsupported operand type/.test(b)?{simple:`To værdier kan ikke bruges sammen på den måde${u?` på linje ${u}`:""}.`,technical:c,line:u}:/not callable/.test(b)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`En værdi har den forkerte type${u?` på linje ${u}`:""}.`,technical:c,line:u}:/IndexError/.test(b)?{simple:`Listen har ikke et element på den plads${u?` på linje ${u}`:""}.`,technical:c,line:u}:/KeyError/.test(b)?{simple:`Ordbogen mangler den nøgle${u?` på linje ${u}`:""}.`,technical:c,line:u}:/AttributeError/.test(b)?{simple:`Den ting har ikke den kommando${u?` på linje ${u}`:""}.`,technical:c,line:u}:/ValueError/.test(b)?/invalid literal for int/.test(b)?{simple:`Teksten kan ikke laves om til et heltal${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Værdien passer ikke her${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en fejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}function I0(o){var u;const c=(u=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:u[1];if(!c)return;const s=parseInt(c,10);return Number.isFinite(s)&&s>0?s:void 0}function $0(o,a){if(!a)return{text:""};for(let c=a-2;c>=0;c-=1){const s=o[c]??"";if(s.trim())return{line:c+1,text:s}}return{text:""}}function Ef(o,a){if(!a)return null;const c=o.trim();return!Y0.test(c)||c.endsWith(":")?null:{line:a}}function X0(o,a){const c=a?Math.min(o.length,a):o.length,s=Math.max(0,c-4);for(let u=c-1;u>=s;u-=1){const m=Ef(o[u]??"",u+1);if(m)return m}return null}function K0(o){const a=(o.match(/'/g)??[]).length,c=(o.match(/"/g)??[]).length;return a%2===1||c%2===1}function P0(o){var s,u;const c=(u=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:u.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function F0(o,a){const c=o.trim();return!!a&&/[A-Za-zæøåÆØÅ]/.test(a)&&(c.startsWith("print(")||c.includes(`= ${a}`))}function Q0(o){return o_(o)>0}function Z0(o){return o_(o)<0}function o_(o){let a=0,c=null;for(let s=0;s<o.length;s+=1){const u=o[s];if((u==='"'||u==="'")&&o[s-1]!=="\\"){c=c===u?null:c??u;continue}c||((u==="("||u==="["||u==="{")&&(a+=1),(u===")"||u==="]"||u==="}")&&(a-=1))}return a}const kf="/min_kode.py",c_=`print('Hej fra Pico Kontrol Panel')
`,Fi="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function gt(o,a){return`${o}:${a}`}function W0(o){return new Promise(a=>window.setTimeout(a,o))}function J0(){const o=J(d=>d.toggleSideMenu),a=J(d=>d.askConfirm),c=J(d=>d.picoIdeOrigin),s=J(d=>d.active),u=J(d=>d.isBleConnected),m=J(d=>d.bleListFiles),p=J(d=>d.bleReadText),b=J(d=>d.bleWriteText),v=J(d=>d.bleDeleteFile),y=J(d=>d.bleRestartAndReconnect),[x,N]=U.useState(!1),[T,X]=U.useState(!1),[P,te]=U.useState([]),[G,I]=U.useState(!1),[le,fe]=U.useState([]),[ie,de]=U.useState(null),[Ne,ee]=U.useState(()=>gf(of())),[W,ve]=U.useState(kf),[ge,ye]=U.useState("local"),[re,Fe]=U.useState(()=>{var d;return((d=gf(of()).find(g=>g.path===kf))==null?void 0:d.content)??c_}),[De,Qe]=U.useState([]),[C,Q]=U.useState(!1),[ue,xe]=U.useState(""),[Ee,E]=U.useState(""),[L,Z]=U.useState(null),[j,K]=U.useState(!1),[F,$]=U.useState(null),[Ue,Ce]=U.useState(!1),[Yn,$t]=U.useState({}),[_e,bn]=U.useState(!1),[En,je]=U.useState(0),[kn,Bt]=U.useState(()=>{var d,g;return((d=fr.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((g=fr[0])==null?void 0:g.board)??""}),[Bn,Al]=U.useState(()=>{var d,g;return((d=fr.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((g=fr[0])==null?void 0:g.version)??""}),[Dl,yt]=U.useState(!1),[Fr,jl]=U.useState({top:0,left:0}),[yn,dr]=U.useState(!1),[mr,Ia]=U.useState(!1),[hr,Fn]=U.useState(!0),[lt,Xt]=U.useState(""),[Qr,pr]=U.useState([]),[vn,rt]=U.useState(null),[Rn,Ol]=U.useState(!1),[Cl,ll]=U.useState({}),[Kt,qn]=U.useState({}),[Ke,Tn]=U.useState(null),[mn,Ln]=U.useState(null),[Go,$a]=U.useState(""),[Pt,_r]=U.useState(()=>ap().clearTerminalOnRun),[rl,ls]=U.useState(()=>ap().simplifiedErrors),[Zr,rs]=U.useState(()=>typeof navigator<"u"?Up(navigator):!1),zl=U.useRef(null),vt=U.useRef(null),on=U.useRef(null),Xa=U.useRef(null),at=U.useRef(null),cn=U.useRef(null),un=U.useRef(null),Mn=U.useRef(!1),Lt=U.useRef(!1),gr=U.useRef(!1),Ut=U.useRef(""),al=U.useRef(null),Ht=U.useRef(null),Gt=U.useRef(null),Ft=U.useRef(null),In=U.useRef(null),Vt=U.useRef(null),Qn=U.useRef(0),Ze=U.useRef(null),il=U.useRef(null),Ka=U.useRef(null),it=U.useRef(null),st=D0(),he=c==="control"&&!!s&&u(),Wr=he?(s==null?void 0:s.deviceID)??"ble":null,as=Math.max(1,re.split(`
`).length),Vo=new Blob([re]).size,Jr=ge==="pico"?"Picoen":"browseren",ea=U.useMemo(()=>[...new Set(fr.map(d=>d.board))],[]),$n=U.useMemo(()=>fr.filter(d=>d.board===kn),[kn]),xn=fr.find(d=>d.board===kn&&d.version===Bn)??$n[0]??fr[0],ot=ge==="pico",Pa=ot?yn:mr,Un=ot&&yn&&x&&!he||!ot&&mr&&!!Gt.current,is=Rn||Pa&&!Un,na=Un?"stdin":">>>",ss=Un?ot?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":ot?"Pico MicroPython":"Browser-MicroPython",Hn=U.useMemo(()=>{const d=new j0({onData:g=>{Lt.current||!Mn.current||(Ut.current=(Ut.current+g).slice(-240),/(^|\r?\n)>>> ?$/.test(Ut.current)&&Qa())},onLine:g=>{if(Lt.current)return;const S=g.trimEnd();if(gr.current&&S.trim()){Y("info",S);return}if(Mn.current&&os(S)){Qa();return}Mn.current&&S.trim()&&!Fa(S)&&!S.includes("raw REPL")&&Y("info",S)},onLog:Y,onDisconnect:()=>{N(!1),dr(!1),Ol(!1),Mn.current=!1,gr.current=!1,xt(),Ut.current="",Ll(),Y("warning","USB-forbindelse lukket.")}});return zl.current=d,d},[]);function Y(d,g){te(S=>[...S.slice(-140),{level:d,text:g}])}function os(d){return d.trim()===">>>"}function Fa(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function xt(){al.current!==null&&(window.clearTimeout(al.current),al.current=null)}function Qa(){!Mn.current||al.current!==null||(al.current=window.setTimeout(()=>{al.current=null,Mn.current&&(dr(!1),Mn.current=!1,Ut.current="",Y("success","Pico-koden er færdig."))},0))}function br(d,g=re,S="error"){const z=q0(d,g);te(D=>[...D.slice(-140),{level:S,text:z.simple,technical:z.technical}])}function nn(d,g,S=ge){ve(d),ye(S),Fe(g),qn(z=>({...z,[gt(S,d)]:g}))}function cs(d,g="pico"){ve(d),ye(g),Fe(""),Tn(null),jl({top:0,left:0})}function Bl(d,g=(S=>(S=at.current)==null?void 0:S.selectionStart)()??d.length){Fe(d),qn(z=>({...z,[gt(ge,W)]:d})),$a(""),Hl(d,g)}function yr(d,g=ge){qn(S=>{const z=gt(g,d);if(!(z in S))return S;const D={...S};return delete D[z],D})}function Za(){return Cl[W]===re}function Zn(d,g){ll(S=>({...S,[d]:g}))}function us(d,g){Zn(d,g),qn(S=>({...S,[gt("pico",d)]:g})),ge==="pico"&&W===d&&Fe(g)}function Ll(){fe([]),Qe([]),ll({}),qn({}),Tn(null),ve(d=>{const g=gf(of());if(g.find(D=>D.path===d))return d;const z=g[0];return ye("local"),Fe(z.content),z.path})}function tn(d){sl(),$({value:100,label:d}),it.current=window.setTimeout(()=>{it.current=null,$(null)},900)}function sl(){it.current!==null&&(window.clearTimeout(it.current),it.current=null)}function Wa(){return F?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(F.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:F.label}),f.jsxs("strong",{children:[Math.round(F.value),"%"]}),F.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Ul,"aria-label":"Stop handling",title:"Stop",children:f.jsx(Pn,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,F.value))}%`}})})]}):null}function Ul(){In.current&&St("Stopper læsning...",!0,!0)}function St(d="Stopper læsning...",g=!1,S=!1){var z;sl(),il.current=null,Qn.current+=1,(z=In.current)==null||z.abort(),In.current=null,Ze.current=null,de(null),I(!1),$(g?{value:(F==null?void 0:F.value)??0,label:d,cancellable:!1}:null),S&&Y("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function fs(d){var g;if(!(Ze.current===d||il.current===d)){if(il.current=d,Vt.current){Qn.current+=1,(g=In.current)==null||g.abort(),In.current=null,Ze.current=null,cs(d),de(d),I(!0),sl(),$({value:2,label:`Skifter til ${ze(d)}...`,cancellable:!0});return}ta()}}function ta(){if(Vt.current)return;const d=il.current;if(!d)return;il.current=null;const g=Qn.current+1;Qn.current=g;const S=new AbortController;In.current=S,Ze.current=d,cs(d),de(d),I(!0),sl(),$({value:12,label:`Indlæser ${ze(d)}...`,cancellable:!0});const z=(async()=>{try{const D=await p(d,(se,Se)=>{Qn.current===g&&$({value:se,label:Se,cancellable:!0})},S.signal);if(S.signal.aborted||Qn.current!==g)return;nn(d,D,"pico"),Zn(d,D),tn("Fil indlæst")}catch(D){if(Qn.current!==g)return;ty(D)||S.signal.aborted?Y("info",`Stoppede læsning af ${ze(d)}.`):($(null),Y("error",D instanceof Error?D.message:"BLE læsning fejlede."))}})();Vt.current=z,z.finally(()=>{if(Vt.current!==z)return;Vt.current=null,In.current===S&&(In.current=null),Ze.current===d&&(Ze.current=null),!!il.current||(de(null),I(!1),S.signal.aborted&&$(null)),ta()})}async function vr(d){const g=Lt.current;Lt.current=!0;try{return await d()}finally{Lt.current=g}}U.useEffect(()=>{if(!hr)return;const d=cn.current;d&&(d.scrollTop=d.scrollHeight)},[P,hr]),U.useEffect(()=>{lb({clearTerminalOnRun:Pt,simplifiedErrors:rl})},[Pt,rl]),U.useEffect(()=>{var d;$n.some(g=>g.version===Bn)||Al(((d=$n[0])==null?void 0:d.version)??"")},[$n,Bn]),U.useEffect(()=>{rs(Up(navigator))},[]),U.useEffect(()=>{const d=()=>{const g=zl.current;vt.current=null,on.current=null,zl.current=null,g==null||g.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var g,S;sl(),(g=Ht.current)==null||g.dispose(),Ht.current=null,(S=Gt.current)==null||S.dispose(),Gt.current=null,window.removeEventListener("pagehide",d),d()}},[]),U.useEffect(()=>{const d=g=>{!(g.ctrlKey||g.metaKey)||g.key.toLowerCase()!=="s"||(g.preventDefault(),!G&&W.trim()&&!Zr&&!j&&!L&&!C&&ds())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ge,he,G,x,re,W,Zr,j,L,C]);function Qt(d,g,S){ee(z=>{const D=my(z,d,g,S);return cf(D),D})}const wt=gy(le,Ne,Kt,x||he);U.useEffect(()=>{he&&ln()},[he]),U.useEffect(()=>{const d=Ka.current;d&&d!==Wr&&Ll(),Ka.current=Wr},[Wr]);async function Ja(){if(st.supported){X(!0);try{await Hn.requestAndConnect();const d=new f0(Hn);vt.current=d,on.current=new g0(d),N(!0),je(0),await d.interrupt(),await xr(d),Y("success","Sendte stop-signal til Pico-terminalen."),await ei(on.current),await ni(on.current)}catch(d){Y("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await Hn.disconnect()}catch(g){Y("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.");return}je(g=>{const S=g+1;return S>=3&&(Y("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),bn(!0)),S}),N(!1)}finally{X(!1)}}}async function xr(d){const g=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(g.error||!g.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Zt(){var d;try{await((d=zl.current)==null?void 0:d.disconnect()),vt.current=null,on.current=null,N(!1),Ll()}catch(g){Y("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.")}}async function ct(d){const g=on.current;if(g){I(!0),Lt.current=!0;try{await d(g)}catch(S){$(null),Y("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{Lt.current=!1,I(!1)}}}async function ln(d=!0){if(he){I(!0);try{const g=await m();fe(g),d&&Y("success",`Indlæste ${g.length} filer fra Pico via Bluetooth.`)}catch(g){Y("error",g instanceof Error?g.message:"BLE filhandling fejlede.")}finally{I(!1)}return}await ei(on.current,d)}async function ei(d,g=!0){if(d){I(!0);try{const S=await vr(()=>d.list("/"));fe(S),g&&Y("success",`Indlæste ${S.length} filer fra Pico.`)}catch(S){Y("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{I(!1)}}}async function Wt(){if(he){I(!0),$({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Sr((g,S)=>$({value:g,label:S}));Qe(d),tn("Fil-tjek færdigt")}catch(d){$(null),Y("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{I(!1)}return}await ni(on.current)}async function Sr(d){const g=[],S=Ba.filter(D=>D.kind==="library"&&!Xr(D));let z=0;for(const D of Ba){if(D.kind==="program"){g.push({...D,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Xr(D)){g.push({...D,status:"unknown",detail:"Opdateres via USB"});continue}try{const se=z/Math.max(1,S.length)*100,Se=100/Math.max(1,S.length);Y("info",`Tjekker ${D.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,se),`Tjekker ${D.label} på Pico...`);const We=await p(D.path,(Xn,ul)=>{d==null||d(Math.min(95,se+Xn/100*Se),`${D.label}: ${ul}`)}),Ge=za(We)===za(D.content);g.push({...D,status:Ge?"ok":"outdated",detail:Ge?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{g.push({...D,status:"missing",detail:"Mangler på Pico"})}finally{z+=1}}return d==null||d(100,"Fil-tjek færdigt"),g}async function ni(d){if(d){I(!0);try{const g=await vr(()=>An(d)),S=g;Qe(S)}catch(g){Y("error",g instanceof Error?g.message:"Runtime check fejlede.")}finally{I(!1)}}}async function An(d){if(!d)return[];const g=[];for(const S of Ba){if(S.kind==="program"){g.push({...S,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const z=await d.readText(S.path),D=za(z)===za(S.content);g.push({...S,status:D?"ok":"outdated",detail:D?"Matcher appens version":"Matcher ikke appens version"})}catch{g.push({...S,status:"missing",detail:"Mangler på Pico"})}}return g}async function ol(d=W){if(he){fs(d);return}de(d),await ct(async g=>{$({value:12,label:`Indlæser ${ze(d)}...`});const S=await la(g,d);nn(d,S,"pico"),Zn(d,S),tn("Fil indlæst")}),de(null)}async function la(d,g){var S;try{return await d.readText(g)}catch(z){await((S=vt.current)==null?void 0:S.stop().catch(()=>{})),await W0(120);try{return await d.readText(g)}catch{throw z}}}function wr(){K(!0)}async function ds(){if(ge==="pico"){if(!x&&!he){Y("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Er();return}ra()}function ra(){if(La(W)){Y("error",Fi);return}Qt(W,re,!1),ye("local"),qn(d=>({...d,[gt("local",W)]:re})),K(!1),Y("success",`Gemte ${ze(W)} lokalt.`)}async function Er(){if(K(!1),La(W))return $(null),Y("error",Fi),!1;if($({value:0,label:"Starter gemning..."}),he){I(!0);try{return await b(W,re,(g,S)=>$({value:g,label:S})),Zn(W,re),ye("pico"),qn(g=>({...g,[gt("pico",W)]:re})),tn("Gemt på Pico via Bluetooth"),Y("success",`Gemte ${ze(W)} på Pico via Bluetooth.`),Ro(W)&&(yt(!0),Y("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await ln(!1),!0}catch(g){return $(null),Y("error",g instanceof Error?g.message:"BLE gem fejlede."),!1}finally{I(!1)}}if(!on.current)return $(null),!1;let d=!1;return await ct(async g=>{Rr(W,"pico")?await g.replaceTextSafely(W,re,(S,z)=>$({value:S,label:z})):await g.writeText(W,re,(S,z)=>$({value:S,label:z})),Zn(W,re),ye("pico"),qn(S=>({...S,[gt("pico",W)]:re})),tn("Gemt på Pico via USB"),Y("success",`Gemte ${W}.`),await ln(),await Wt(),d=!0}),d}function kr(){Nr(ze(W),re),K(!1),Y("success",`Downloadede ${ze(W)}.`)}function Nr(d,g){const S=new Blob([g],{type:"text/plain;charset=utf-8"}),z=URL.createObjectURL(S),D=document.createElement("a");D.href=z,D.download=d,D.click(),URL.revokeObjectURL(z)}async function ti(d){I(!0),yt(!1),$({value:10,label:"Genstarter Pico..."});try{await y(d)?(tn("Pico genforbundet"),Y("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await ln()):($(null),Y("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(g){$(null),Y("error",g instanceof Error?g.message:"Genstart/genforbindelse mislykkedes.")}finally{I(!1)}}function ms(d){var se;const g=d??{path:W,source:ge},S=g.source==="pico"?"Pico":"browser",z=g.source==="pico"?(d==null?void 0:d.versions.length)??((se=Tf(le).get(g.path))==null?void 0:se.length)??0:0,D=z>0?` Det sletter også filens versionshistorik (${z} gemte versioner).`:"";Z(null),a({title:"Slet fil",message:`Vil du slette ${ze(g.path)} fra ${S}?${D}`,confirmLabel:"Slet",onConfirm:()=>{li(g)}})}function Yo(){a({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, sÃ¥ Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{qo()}})}async function qo(){if(!on.current){Y("error","Forbind Picoen med USB fÃ¸rst.");return}await ct(async d=>{await d.delete("/DeviceSettings.txt").catch(g=>{const S=g instanceof Error?g.message:"";if(!/ENOENT|No such file|not found/i.test(S))throw g}),ll(g=>{const S={...g};return delete S["/DeviceSettings.txt"],S}),yr("/DeviceSettings.txt","pico"),Y("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var Ã¥bent."),await ln()})}async function li(d){const g=d.path,S=d.source,z=g===W&&S===ge;if(S==="local"){const Se=Ne.filter(We=>We.path!==g);ee(Se),cf(Se),z&&nn(g,"","local"),yr(g,"local"),Y("warning",`Slettede ${ze(g)} fra browseren.`);return}const D=Tf(le).get(g)??[],se=[g,...D.map(Se=>Se.path)];if(he){I(!0);try{for(const We of se)await v(We);ll(We=>{const Ge={...We};for(const Xn of se)delete Ge[Xn];return Ge}),z&&nn(g,"","pico");for(const We of se)yr(We,"pico");const Se=D.length>0?` og ${D.length} gemte versioner`:"";Y("warning",`Slettede ${ze(g)}${Se} på Pico via Bluetooth.`),await ln()}catch(Se){Y("error",Se instanceof Error?Se.message:"BLE sletning fejlede.")}finally{I(!1)}return}if(!on.current){Y("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await ct(async Se=>{for(const Ge of se)await Se.delete(Ge);ll(Ge=>{const Xn={...Ge};for(const ul of se)delete Xn[ul];return Xn});const We=D.length>0?` og ${D.length} gemte versioner`:"";Y("warning",`Slettede ${g}${We}.`),z&&nn(g,"","pico");for(const Ge of se)yr(Ge,"pico");await ln(),await Wt()})}async function Io(d){if(!d)return;const g=ey(d.name);if(!g){Y("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(La(g)){Y("error",Fi);return}if(d.size>128*1024){Y("error","Filen er for stor til Pico-værkstedet.");return}const S=await d.text();if(ge==="local"){Qt(g,S,!0),nn(g,S,"local"),Y("success",`Importerede ${ze(g)} i browseren.`);return}if(!x&&!he){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&Xr({path:g})){Y("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if($({value:0,label:"Uploader fil til Pico..."}),he){I(!0);try{await b(g,S,(D,se)=>$({value:D,label:se})),Zn(g,S),nn(g,S,"pico"),tn("Fil uploadet til Pico"),Y("success",`Importerede ${ze(g)} på Pico via Bluetooth.`),await ln()}catch(D){$(null),Y("error",D instanceof Error?D.message:"Kunne ikke importere filen til Pico.")}finally{I(!1)}return}if(!on.current){$(null),Y("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await ct(async D=>{Rr(g,"pico")?await D.replaceTextSafely(g,S,(se,Se)=>$({value:se,label:Se})):await D.writeText(g,S,(se,Se)=>$({value:se,label:Se})),Zn(g,S),nn(g,S,"pico"),tn("Fil uploadet til Pico"),Y("success",`Importerede ${ze(g)} på Pico.`),await ln(),await Wt()})}async function $o(){xe(""),Q(!0)}function Xo(){const d=zp(ue);if(!d)return;if(La(d)){Y("error",Fi);return}const g=ge;if(Rr(d,g)){Y("error",`Der findes allerede en fil med navnet ${ze(d)} i ${g==="pico"?"Pico":"browseren"}.`);return}if(g==="local"){Qt(d,"",!1),nn(d,"","local"),Q(!1),Y("success",`Oprettede ${ze(d)} i browseren.`);return}Ko(d)}async function Ko(d){if(!x&&!he){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Q(!1),$({value:0,label:"Opretter fil på Pico..."}),he){I(!0);try{await b(d,"",(g,S)=>$({value:g,label:S})),Zn(d,""),nn(d,"","pico"),tn("Fil oprettet på Pico"),Y("success",`Oprettede ${ze(d)} på Pico via Bluetooth.`),await ln()}catch(g){$(null),Y("error",g instanceof Error?g.message:"Kunne ikke oprette fil på Pico.")}finally{I(!1)}return}if(!on.current){$(null),Y("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await ct(async g=>{await g.writeText(d,"",(S,z)=>$({value:S,label:z})),Zn(d,""),nn(d,"","pico"),tn("Fil oprettet på Pico"),Y("success",`Oprettede ${ze(d)} på Pico.`),await ln()})}function Po(d){d.type==="file"&&(Z(d),E(ny(d.path)))}async function hs(d){if(!L||L.source!=="pico")return;const g=L.path;if(Z(null),$({value:0,label:"Gendanner version..."}),he){I(!0);try{const S=await p(d.path);await b(g,S,(z,D)=>$({value:z,label:D})),Zn(g,S),nn(g,S,"pico"),tn("Version gendannet"),await ln(!1)}catch(S){$(null),Y("error",S instanceof Error?S.message:"Kunne ikke gendanne versionen.")}finally{I(!1)}return}on.current&&await ct(async S=>{await S.replaceTextSafely(g,await S.readText(d.path),(D,se)=>$({value:D,label:se}));const z=await S.readText(g);Zn(g,z),nn(g,z,"pico"),tn("Version gendannet"),await ln()})}function Fo(d){a({title:"Slet version",message:`Vil du slette ${ze(d.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Qo(d)}})}async function Qo(d){if(he){I(!0);try{await v(d.path),await ln(!1),Z(g=>g&&{...g,versions:g.versions.filter(S=>S.path!==d.path)})}catch(g){Y("error",g instanceof Error?g.message:"Kunne ikke slette versionen.")}finally{I(!1)}return}on.current&&await ct(async g=>{await g.delete(d.path),await ln(!1),Z(S=>S&&{...S,versions:S.versions.filter(z=>z.path!==d.path)})})}async function Zo(){if(!L)return;const d=L,g=_f(Ee,Qi(d.path));if(!g||g===d.path)return;if(La(g)){Y("error",Fi);return}if(Rr(g,d.source)){Y("error",`Der findes allerede en fil med navnet ${ze(g)}.`);return}const S=d.source==="local",z=d.source==="pico";if(he&&z&&(Ro(d.path)||Ro(g))){Y("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}I(!0);try{if(z)if(he){const D=Cl[d.path]??await p(d.path);await b(g,D,(se,Se)=>$({value:se,label:Se})),await v(d.path),ll(se=>({...qp(se,d.path,g),[g]:D}))}else on.current&&(await vr(()=>on.current.rename(d.path,g)),ll(D=>qp(D,d.path,g)));S&&ee(D=>{const se=D.map(Se=>Se.path===d.path?{...Se,path:g,updatedAt:Date.now()}:Se);return cf(se),se}),W===d.path&&ge===d.source&&ve(g),qn(D=>vy(D,d.source,d.path,g)),Z(null),E(""),Y("success",`Omdøbte ${ze(d.path)} til ${ze(g)}.`),z&&await ln()}catch(D){Y("error",D instanceof Error?D.message:"Kunne ikke omdøbe filen.")}finally{$(null),I(!1)}}function Rr(d,g){return g==="pico"?le.some(S=>S.path===d):Ne.some(S=>S.path===d)}async function ri(d,g){if(!Rr(d,"pico"))return;const S=py(d,le),z=Cl[d]??await p(d);g!==void 0&&za(z)===za(g)||await b(S,z)}function Wo(d){if(d.type!=="file"){he&&St(void 0,!1),ve(d.path),ye(d.source);return}if(he&&Xr(d)){Y("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){he&&St(void 0,!1);const S=Ne.find(z=>z.path===d.path);nn(d.path,Kt[gt("local",d.path)]??(S==null?void 0:S.content)??"","local");return}const g=gt("pico",d.path);if(Object.prototype.hasOwnProperty.call(Kt,g)){he&&St(void 0,!1),nn(d.path,Kt[g],"pico");return}if(Object.prototype.hasOwnProperty.call(Cl,d.path)){he&&St(void 0,!1),nn(d.path,Cl[d.path],"pico");return}ol(d.path)}async function ps(){if(!x&&!he){const d=Bp();Qe(d),$t(Lp(d)),Ce(!0),$(null);return}I(!0),$({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),Y("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=De.length>0?De:he?await Sr((g,S)=>$({value:g,label:S})):await vr(()=>An(on.current));Qe(d),$t(Lp(d)),Ce(!0),$(null)}catch(d){$(null),Y("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{I(!1)}}async function Jo(){if(Ce(!1),he){I(!0);try{const g=(De.length>0?De:Ba.map(z=>({...z,status:"unknown",detail:"Ikke tjekket"}))).filter(z=>Yn[z.id]&&!Xr(z));if(g.length===0){Y("info","Ingen filer valgt til installation.");return}let S=null;$({value:0,label:"Starter installation..."});for(const[z,D]of g.entries()){Y("info",`Installerer ${D.label} via Bluetooth...`);const se=z/g.length*100,Se=100/g.length;await ri(D.path,D.content),await b(D.path,D.content,(We,Ge)=>{$({value:Math.min(99,se+We/100*Se),label:`${D.label}: ${Ge}`})}),us(D.path,D.content),Y("success",`Installerede ${D.label}.`),D.kind==="library"&&(S=D),Ro(D.path)&&yt(!0)}tn("Installation færdig"),await ln(!1),await Wt(),S&&_s(S)}catch(d){$(null),Y("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{I(!1)}return}await ct(async d=>{const S=(De.length>0?De:Ba.map(D=>({...D,status:"unknown",detail:"Ikke tjekket"}))).filter(D=>Yn[D.id]);if(S.length===0){Y("info","Ingen filer valgt til installation.");return}let z=null;$({value:0,label:"Starter installation..."});for(const[D,se]of S.entries()){Y("info",`Installerer ${se.label}...`);const Se=D/S.length*100,We=100/S.length;await d.replaceTextSafely(se.path,se.content,(Ge,Xn)=>{$({value:Math.min(99,Se+Ge/100*We),label:`${se.label}: ${Xn}`})},{createBackup:!0}),us(se.path,se.content),Y("success",`Installerede ${se.label}.`),se.kind==="library"&&(z=se)}tn("Installation færdig"),await ln(!1),await Wt(),z&&_s(z)})}function ai(){return(De.length>0?De:Bp()).filter(g=>Yn[g.id])}function ec(){const d=ai();if(d.length===0){Y("info","Ingen filer valgt.");return}for(const g of d)Qt(g.path,g.content,!1);Ce(!1),Y("success",`Gemte ${d.length} filer i browseren.`)}function nc(){const d=ai();if(d.length===0){Y("info","Ingen filer valgt.");return}d.forEach((g,S)=>{window.setTimeout(()=>{Nr(ze(g.path),g.content)},S*120)}),Ce(!1),Y("success",`Starter download af ${d.length} filer.`)}function _s(d){nn(d.path,d.content,"pico"),Zn(d.path,d.content),Y("info",`Åbnede ${d.label} i editoren.`)}function tc(d,g){$t(S=>{if(d.kind!=="program")return{...S,[d.id]:g};const z={...S};for(const D of De)D.kind==="program"&&(z[D.id]=!1);return z[d.id]=g,z})}async function lc(){if(ys(),he&&ge==="pico"){Y("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ge==="local"){await rc();return}const d=vt.current;if(!d){Y("error",`${ze(W)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(W.endsWith(".py")){if(!Za()&&(Y("info",`${ze(W)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Er())){Y("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(G)return;xt(),Ut.current="",Fn(!0);try{await d.runFile(W,()=>{xt(),Ut.current="",gr.current=!1,dr(!0),Mn.current=!0}),Y("success",`Kører ${ze(W)}. Brug Stop for at afbryde.`)}catch(g){dr(!1),Mn.current=!1,xt(),Ut.current="",Y("error",g instanceof Error?g.message:"Kunne ikke starte koden.")}return}I(!0);try{const g=await d.exec(re,2e4);g.output.trim()&&Y("info",g.output),g.error.trim()&&br(g.error,re),!g.output.trim()&&!g.error.trim()&&Y("success","Koden kørte uden output.")}catch(g){Y("error",g instanceof Error?g.message:"Kunne ikke køre koden.")}finally{I(!1)}}async function rc(){const d=wf(re,{allowInput:!0});if(d.some(z=>z.level==="error")){for(const z of d){const D=z.line?`Linje ${z.line}: `:"";Y(z.level==="error"?"error":"warning",`${D}${z.text}`)}return}const g=new AbortController;Ft.current=g;const S=new B0;Gt.current=S,I(!0),Ia(!0),Fn(!0),Y("info",x?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const z=[],D=await S.run(re,{signal:g.signal,onOutput:Ge=>{z.push(Ge),Y("info",Ge)}});for(const Ge of D.issues){const Xn=Ge.line?`Linje ${Ge.line}: `:"";Y(Ge.level==="error"?"error":"warning",`${Xn}${Ge.text}`)}const se=[...z,D.output].filter(Boolean).join(`
`).trim(),Se=D.output.trim();!D.error.trim()&&ly(se)?br(se,re):(Se&&Y("info",Se),D.error.trim()&&br(D.error,re,D.unavailable?"warning":"error")),D.ok&&!se&&!D.error.trim()&&Y("success","Offline MicroPython kørte uden output.")}finally{Ft.current=null,Gt.current=null,S.dispose(),Ia(!1),I(!1)}}async function ac(){var g,S,z;if(mr){(g=Ft.current)==null||g.abort(),(S=Gt.current)==null||S.stop(),Y("warning","Stoppede offline MicroPython."),Fn(!0);return}if(!ot&&Rn){(z=Ht.current)==null||z.reset(),Ol(!1),Y("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Fn(!0);return}const d=vt.current;if(d)try{await d.stop(),Y("warning","Stoppede koden på Pico.")}catch(D){Y("error",D instanceof Error?D.message:"Kunne ikke stoppe koden.")}finally{dr(!1),Mn.current=!1,xt(),Ut.current="",Fn(!0)}}function ic(){const d=cn.current;if(!d)return;const g=d.scrollHeight-d.scrollTop-d.clientHeight<12;Fn(g)}function sc(){te([]),Fn(!0)}async function Tr(){const d=Un?lt:lt.trimEnd();if(Un){if(!ot){const z=Gt.current;if(!z){Y("warning","Browser-MicroPython kører ikke lige nu."),Gn();return}Xt(""),Fn(!0),z.sendInput(d),Gn();return}const S=vt.current;if(!S){Y("warning","Pico-terminalen er ikke forbundet."),Gn();return}Xt(""),Fn(!0);try{await S.sendProgramInput(d)}catch(z){Y("error",z instanceof Error?z.message:"Kunne ikke sende input til Pico-koden.")}finally{Gn()}return}if(!d.trim())return;if(pr(S=>(S.at(-1)===d?S:[...S,d]).slice(-80)),rt(null),Ln(null),Pa){Y("warning",ot?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Gn();return}if(!ot){const S=wf(d);if(S.some(D=>D.level==="error")){for(const D of S){const se=D.line?"Linje "+D.line+": ":"";Y(D.level==="error"?"error":"warning",se+D.text)}Gn();return}const z=Ht.current??new z0;Ht.current=z,Xt(""),Ol(!0),Fn(!0),Y("info",">>> "+d);try{let D=!1;const se=await z.send(d,{timeoutMs:15e3,onOutput:We=>{D=!0,Y("info",We)}}),Se=se.output.trim();Se&&!D&&Y("info",Se),se.error.trim()&&br(se.error,d,se.unavailable?"warning":"error")}catch(D){Y("error",D instanceof Error?D.message:"Browser-MicroPython-terminalen fejlede.")}finally{Ol(!1),Gn()}return}if(he){Y("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Gn();return}const g=vt.current;if(!x||!g){Y("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Gn();return}Xt(""),Ol(!0),Fn(!0),gr.current=!0,Y("info",">>> "+d);try{await g.sendFriendlyLine(d)}catch(S){gr.current=!1,Y("error",S instanceof Error?S.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Ol(!1),Gn()}}function Gn(){window.requestAnimationFrame(()=>{const d=un.current;if(!d||d.disabled)return;d.focus();const g=d.value.length;d.selectionStart=g,d.selectionEnd=g})}function gs(d,g,S){return S.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:d}),f.jsx("p",{children:g})]}),S.map(z=>{const D=he&&Xr(z);return f.jsxs("label",{className:`ide-install-row ${D?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!Yn[z.id],disabled:D,onChange:se=>tc(z,se.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[bs(z),(z.kind==="library"||!x&&!he)&&f.jsx("em",{className:`ide-install-status status-${z.status}`,children:D?"USB":_y(z.status)})]}),f.jsxs("small",{children:[z.description,!x&&!he?` ${z.detail}`:""]})]})]},z.id)})]})}function bs(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function ys(){Pt&&te([]),Fn(!0)}function vs(d,g){const S=d.indexOf(`
`,g);return S===-1?d.length:S}function Hl(d,g){const S=Rf(d,g);if(!S||S.query.length<1){Tn(null);return}const z=Hp(d,g,!0).slice(0,8),D=Gp(at.current,S.start);Tn(z.length>0&&D?{items:z,selected:0,start:S.start,end:g,position:D}:null)}function Mr(d,g){const S=Rf(d,g);if(!S||S.query.length<1){Ln(null);return}const z=Hp(d,g,!1).slice(0,8),D=Gp(un.current,S.start);Ln(z.length>0&&D?{items:z,selected:0,start:S.start,end:g,position:D}:null)}function cl(d){const g=d.value.slice(d.selectionStart,d.selectionEnd);$a(uy(g)?g:"")}function ii(d=Ke==null?void 0:Ke.items[Ke.selected]){if(!d||!Ke)return;const g=re.slice(0,Ke.start)+d.insert+re.slice(Ke.end),S=Ke.start+d.insert.length-(d.insert.endsWith("()")?1:0);Fe(g),qn(z=>({...z,[gt(ge,W)]:g})),Tn(null),window.requestAnimationFrame(()=>{const z=at.current;z&&(z.focus(),z.selectionStart=S,z.selectionEnd=S,Hl(g,S))})}function xs(d=mn==null?void 0:mn.items[mn.selected]){if(!d||!mn)return;const g=lt.slice(0,mn.start)+d.insert+lt.slice(mn.end),S=mn.start+d.insert.length-(d.insert.endsWith("()")?1:0);Xt(g),Ln(null),window.requestAnimationFrame(()=>{const z=un.current;z&&(z.focus(),z.selectionStart=S,z.selectionEnd=S,Mr(g,S))})}function oc(d){var ul;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!G&&W.trim()&&ds();return}if(Ke){if(d.key==="ArrowDown"){d.preventDefault(),Tn(Ve=>Ve&&{...Ve,selected:(Ve.selected+1)%Ve.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Tn(Ve=>Ve&&{...Ve,selected:(Ve.selected-1+Ve.items.length)%Ve.items.length});return}if(d.key==="Tab"){d.preventDefault(),ii();return}if(d.key==="Enter"){if(!(Ke.items[Ke.selected]&&f_(Ke.items[Ke.selected],re.slice(Ke.start,Ke.end)))){d.preventDefault(),ii();return}Tn(null)}if(d.key==="Escape"){d.preventDefault(),Tn(null);return}}if(d.key==="Enter"){d.preventDefault();const Ve=d.currentTarget,fl=Ve.selectionStart,si=Ve.selectionEnd,Ar=re.lastIndexOf(`
`,fl-1)+1,Gl=re.slice(Ar,fl),oi=((ul=Gl.match(/^[ \t]*/))==null?void 0:ul[0])??"",Dn=Gl.trimEnd().endsWith(":")?"    ":"",dl=`
${oi}${Dn}`,aa=re.slice(0,fl)+dl+re.slice(si),Vl=fl+dl.length;Bl(aa,Vl),window.requestAnimationFrame(()=>{Ve.selectionStart=Vl,Ve.selectionEnd=Vl});return}if(d.key!=="Tab")return;d.preventDefault();const g=d.currentTarget,S=g.selectionStart,z=g.selectionEnd,D="    ";if(d.shiftKey){const Ve=re.lastIndexOf(`
`,S-1)+1,fl=S===z?vs(re,S):z,si=re.slice(Ve,fl);let Ar=0,Gl=0;const oi=si.replace(/(^|\n)( {1,4}|\t)/g,(dl,aa,Vl,ws)=>{const ci=Vl.length;return Ve+ws<S&&(Ar+=ci),Gl+=ci,aa});if(Gl===0)return;const Dn=re.slice(0,Ve)+oi+re.slice(fl);Bl(Dn,Math.max(Ve,S-Ar)),window.requestAnimationFrame(()=>{g.selectionStart=Math.max(Ve,S-Ar),g.selectionEnd=S===z?g.selectionStart:Math.max(g.selectionStart,z-Gl)});return}if(S===z){const Ve=re.slice(0,S)+D+re.slice(z);Bl(Ve,S+D.length),window.requestAnimationFrame(()=>{g.selectionStart=S+D.length,g.selectionEnd=S+D.length});return}const se=re.lastIndexOf(`
`,S-1)+1,We=re.slice(se,z).replace(/^/gm,D),Ge=We.split(`
`).length,Xn=re.slice(0,se)+We+re.slice(z);Bl(Xn,S+D.length),window.requestAnimationFrame(()=>{g.selectionStart=S+D.length,g.selectionEnd=z+Ge*D.length})}function Ss(d){if(Un){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),Tr());return}if(mn){if(d.key==="ArrowDown"){d.preventDefault(),Ln(g=>g&&{...g,selected:(g.selected+1)%g.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Ln(g=>g&&{...g,selected:(g.selected-1+g.items.length)%g.items.length});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),xs();return}if(d.key==="Escape"){d.preventDefault(),Ln(null);return}}if(d.key==="Tab"){d.preventDefault();const g=d.currentTarget,S=g.selectionStart,z=g.selectionEnd,D="    ",se=lt.slice(0,S)+D+lt.slice(z),Se=S+D.length;Xt(se),rt(null),Ln(null),window.requestAnimationFrame(()=>{g.selectionStart=Se,g.selectionEnd=Se});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===lt.length&&d.currentTarget.selectionEnd===lt.length)||Qr.length===0)return;d.preventDefault();const S=d.key==="ArrowUp"?vn===null?Qr.length-1:Math.max(0,vn-1):vn===null||vn+1>=Qr.length?null:vn+1;rt(S);const z=S===null?"":Qr[S]??"";Xt(z),Ln(null),window.requestAnimationFrame(()=>{const D=un.current;D&&(D.selectionStart=z.length,D.selectionEnd=z.length)});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),Tr())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(Bf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Zr?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:$o,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(Pn,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=Xa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(Pn,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>ln(),disabled:!x&&!he||G,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(Pn,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:wt.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):wt.map(d=>{if(d.kind==="separator"){const D=d.id==="pico-files"&&!x&&!he;return f.jsxs(U.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:d.label})}),D&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const g=he&&Xr(d),S=Kt[gt(d.source,d.path)],z=S!==void 0&&S!==hy(d,Ne,Cl);return f.jsxs("div",{className:`ide-file-row ${W===d.path&&ge===d.source?"active":""} ${g?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>Wo(d),disabled:g,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:d.name}),f.jsxs("small",{title:z?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.source==="pico"&&d.versions.length>0&&f.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),f.jsx("i",{className:`ide-file-dirty-dot ${z?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Po(d),disabled:d.type!=="file"||G||g,"aria-label":`Filvalg for ${d.name}`,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(Pn,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&f.jsx("span",{className:`ide-usb-status ${st.supported?"available":"unavailable"}`,title:st.message,"data-tooltip":st.message,role:"img","aria-label":st.message,tabIndex:0,children:"!"})]}),he&&f.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Zt:Ja,disabled:!st.supported||T,children:T?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:ps,disabled:he||G,children:"Download"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Yo,disabled:!x||G,children:"Nulstil enhed"})]}),he&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(Pn,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:ps,disabled:G,children:"Startprogrammer og biblioteker"})]}),!he&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>bn(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[ze(W),f.jsxs("small",{children:[Vo," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:lc,disabled:G,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:ac,disabled:!mr&&!(!ot&&Rn)&&(!x||!yn),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:wr,disabled:G||!W.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>ms(),disabled:G||!W.trim(),children:"Slet"})]})]}),Wa(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Fr.top}px)`},children:Array.from({length:as},(d,g)=>f.jsx("span",{children:g+1},g))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Fr.left}px, ${-Fr.top}px)`},children:dy(re,Go)}),f.jsx("textarea",{ref:at,className:"ide-editor",value:re,onChange:d=>Bl(d.target.value,d.target.selectionStart),onKeyDown:oc,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Hl(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Hl(d.currentTarget.value,d.currentTarget.selectionStart),cl(d.currentTarget)},onSelect:d=>cl(d.currentTarget),onScroll:d=>{jl({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Ke&&Hl(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:G||!!ie,"aria-busy":G||!!ie,spellCheck:!1}),Ke&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Ke.position.left,top:Ke.position.top},children:Ke.items.map((d,g)=>f.jsx("button",{className:g===Ke.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),ii(d)},role:"option","aria-selected":g===Ke.selected,children:d.label},d.label))}),ie&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",ze(ie),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${rl?"":"active"}`,type:"button",onClick:()=>ls(d=>!d),"aria-label":rl?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!rl,title:rl?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Pt?"active":""}`,type:"button",onClick:()=>_r(d=>!d),"aria-pressed":Pt,title:Pt?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:sc,disabled:P.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:cn,onScroll:ic,onClick:()=>{var d;return(d=un.current)==null?void 0:d.focus()},children:[P.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):P.map((d,g)=>f.jsx("div",{className:`term-line term-${d.level}`,children:d.technical&&!rl?d.technical:d.text},`${g}-${d.text}`)),f.jsxs("form",{className:`ide-terminal-command ${Pa&&!Un?"locked":""} ${Un?"stdin":""}`,onSubmit:d=>{d.preventDefault(),Tr()},children:[f.jsx("span",{"aria-hidden":"true",children:na}),f.jsx("textarea",{ref:un,value:lt,onChange:d=>{Xt(d.target.value),rt(null),Un?Ln(null):Mr(d.target.value,d.target.selectionStart)},onKeyDown:Ss,onKeyUp:d=>{Un||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Mr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Un||Mr(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:is,placeholder:ss,"aria-label":Un?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:ss,rows:Math.max(1,lt.split(`
`).length)})]}),mn&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:mn.position.left,top:mn.position.top},children:mn.items.map((d,g)=>f.jsx("button",{className:g===mn.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),xs(d)},role:"option","aria-selected":g===mn.selected,children:d.label},d.label))})]})]})]}),f.jsx("input",{ref:Xa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var g;Io((g=d.target.files)==null?void 0:g[0]),d.currentTarget.value=""}}),j&&f.jsx(wn,{title:"Gem fil",onClose:()=>K(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:ra,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Er(),disabled:!x&&!he||G,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:kr,children:"Download til computer"})]})}),Ue&&f.jsx(wn,{title:"Startprogrammer og biblioteker",onClose:()=>Ce(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:x||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[gs("Startprogrammer (main.py)","Starter automatisk på Picoen.",De.filter(d=>d.kind==="program")),gs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",De.filter(d=>d.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(x||he)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Jo,disabled:G,children:"Installer valgte på Pico"}),f.jsx("button",{className:x||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:ec,disabled:G,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:nc,disabled:G,children:"Download valgte"})]})]})}),Dl&&f.jsx(wn,{title:"main.py er gemt",onClose:()=>yt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ti("control"),disabled:G,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ti("ide"),disabled:G,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>yt(!1),disabled:G,children:"Senere"})]})}),_e&&f.jsx(wn,{title:"Installer MicroPython",onClose:()=>bn(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:kn,onChange:d=>Bt(d.target.value),children:ea.map(d=>f.jsx("option",{value:d,children:d},d))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(xn==null?void 0:xn.version)??Bn,onChange:d=>Al(d.target.value),children:$n.map(d=>f.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),xn&&f.jsx("a",{className:"btn btn-primary btn-block",href:xn.url,download:xn.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),C&&f.jsx(wn,{title:"Ny Python-fil",onClose:()=>Q(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Xo()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>xe(d.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Jr,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!zp(ue),children:"Opret"})]})}),L&&f.jsx(wn,{title:ze(L.path),onClose:()=>Z(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Zo()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:Ee,onChange:d=>E(d.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Qi(L.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Qi(L.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!_f(Ee,Qi(L.path))||_f(Ee,Qi(L.path))===L.path||G,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>ms(L),disabled:G,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),L.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):L.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:L.versions.map(d=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:ze(d.path)}),f.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void hs(d),disabled:G,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Fo(d),disabled:G,children:"Slet"})]},d.path))})]})]})})]})}function zp(o){var c;const a=(c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return a?`/${a}.py`:""}function ey(o){const a=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=a==null?void 0:a.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const s=u_(c[1]);return s?`/${s}.${c[2].toLowerCase()}`:""}function _f(o,a="py"){const c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const s=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const u=u_(s[1]),m=a.replace(/^\./,"").toLowerCase(),p=(s[2]??(m||"py")).toLowerCase();return u?`/${u}.${p}`:""}function ny(o){return ze(o).replace(/\.(py|txt|json|csv)$/i,"")}function u_(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Qi(o){var s;const a=ze(o).match(/\.([a-z0-9]+)$/i),c=(s=a==null?void 0:a[1])==null?void 0:s.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function za(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Bp(){return Ba.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Lp(o){const a={};return o.forEach(c=>{a[c.id]=!1}),a}function ze(o){return o.split("/").filter(Boolean).pop()??o}function Ro(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Up(o){const a=o.userAgent||"",c=o.platform||"",s=o.maxTouchPoints||0,u=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(a),m=/Macintosh/i.test(c)&&s>1;return u&&!m}function ty(o){return o instanceof DOMException&&o.name==="AbortError"}function ly(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function Xr(o){return ry(o)}function ry(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Nf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Hp(o,a,c){const s=Rf(o,a);if(!s)return[];const u=ay(o,s.start,a),m=s.query.toLowerCase(),p=u.beforeToken.toLowerCase(),b=u.linePrefix.toLowerCase(),v=c?[...Nf,...sy(o)]:Nf;return oy(v).filter(x=>{const N=x.label.toLowerCase(),T=x.insert.toLowerCase();return T===m||N===m||f_(x,s.query)?!1:u.importLine?iy(x,u)?N.startsWith(b)||T.startsWith(b)||N.startsWith(m)||T.startsWith(m):!1:p.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(m)||N.startsWith(m))})}function ay(o,a,c){const s=o.lastIndexOf(`
`,a-1)+1,u=o.slice(s,c),m=o.slice(s,a),p=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(u),b=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(u);return{linePrefix:u,beforeToken:m,importLine:p,fromImportLine:b}}function iy(o,a){return a.fromImportLine?!o.insert.includes("(")&&!o.insert.startsWith("import "):o.insert.startsWith("import ")||o.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(o.insert)}function sy(o){const a=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const s of c)for(const u of o.matchAll(s))u[1]&&a.add(u[1]),u[2]&&a.add(u[2]);return[...a].filter(s=>s.length>1&&!cy.has(s)).sort((s,u)=>s.localeCompare(u,"da")).map(s=>({label:s,insert:s}))}function oy(o){const a=new Set,c=[];for(const s of o){const u=s.insert.toLowerCase();a.has(u)||(a.add(u),c.push(s))}return c}const cy=new Set(Nf.map(o=>o.insert.replace(/[().: ]+$/g,"")));function Rf(o,a){const s=o.slice(0,a).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function f_(o,a){const c=o.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===a.toLowerCase()}function uy(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Gp(o,a){if(!o)return null;const c=o.closest(".ide-terminal")??o.parentElement;if(!c)return null;const s=window.getComputedStyle(o),u=document.createElement("div"),m=document.createElement("span"),p=c.getBoundingClientRect(),b=o.getBoundingClientRect();u.style.position="absolute",u.style.visibility="hidden",u.style.pointerEvents="none",u.style.whiteSpace="pre-wrap",u.style.overflowWrap="break-word",u.style.boxSizing=s.boxSizing,u.style.width=`${o.clientWidth}px`,u.style.padding=s.padding,u.style.border=s.border,u.style.font=s.font,u.style.lineHeight=s.lineHeight,u.style.letterSpacing=s.letterSpacing,u.style.tabSize=s.tabSize,u.style.left=`${b.left-p.left-o.scrollLeft}px`,u.style.top=`${b.top-p.top-o.scrollTop}px`,u.textContent=o.value.slice(0,a),m.textContent=o.value.slice(a,a+1)||" ",u.appendChild(m),c.appendChild(u);const v=m.getBoundingClientRect();u.remove();const y=fy(v.left-p.left,8,Math.max(8,c.clientWidth-296)),x=v.bottom-p.top+6,N=x+218>c.clientHeight?Math.max(8,v.top-p.top-218):x;return{left:y,top:N}}function fy(o,a,c){return Math.max(a,Math.min(c,o))}function dy(o,a=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,u=[];return o.split(/(\r?\n)/).forEach((m,p)=>{if(m===`
`||m===`\r
`){u.push(f.jsx("br",{},`br-${p}`));return}let b=0;[...m.matchAll(s)].forEach((y,x)=>{const N=y.index??0;N>b&&u.push(...Vp(m.slice(b,N),c,`${p}-${x}-plain`,a));const T=y[0],X=T.startsWith("#")?"tok-comment":T.startsWith('"')||T.startsWith("'")?"tok-string":/^\d/.test(T)?"tok-number":"tok-builtin";u.push(...Do(T,a,`${p}-${x}-token`,X)),b=N+T.length}),b<m.length&&u.push(...Vp(m.slice(b),c,`${p}-tail`,a))}),u.length?u:" "}function Vp(o,a,c,s=""){const u=[];let m=0;const p=new RegExp(a.source,"g");return[...o.matchAll(p)].forEach((b,v)=>{const y=b.index??0;y>m&&u.push(...Do(o.slice(m,y),s,`${c}-${v}-plain`)),u.push(...Do(b[0],s,`${c}-${v}-keyword`,"tok-keyword")),m=y+b[0].length}),m<o.length&&u.push(...Do(o.slice(m),s,`${c}-plain-end`)),u}function Do(o,a,c,s=""){if(!a)return[f.jsx("span",{className:s||void 0,children:o},c)];const u=[],m=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),p=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${m})(?![A-Za-zÆØÅæøå0-9_])`,"g");let b=0;return[...o.matchAll(p)].forEach((v,y)=>{const x=v.index??0;x>b&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(b,x)},`${c}-${y}-before`)),u.push(f.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${c}-${y}-match`)),b=x+v[0].length}),b<o.length&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(b)},`${c}-after`)),u.length?u:[f.jsx("span",{className:s||void 0,children:o},c)]}function gf(o){return o.length>0?o:[{path:kf,content:c_,uploaded:!1,updatedAt:Date.now()}]}function my(o,a,c,s){const u=o.filter(m=>m.path!==a);return[{path:a,content:c,uploaded:s,updatedAt:Date.now()},...u].sort((m,p)=>p.updatedAt-m.updatedAt)}function hy(o,a,c){var s;return o.source==="pico"?c[o.path]:(s=a.find(u=>u.path===o.path))==null?void 0:s.content}function jo(o){const a=o.replace(/\\/g,"/"),c=a.lastIndexOf("/"),s=c>=0?a.slice(0,c+1):"",m=(c>=0?a.slice(c+1):a).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return m?{originalPath:`${s}${m[1]}${m[3]}`,index:parseInt(m[2],10)}:null}function La(o){return jo(o)!==null}function Tf(o){const a=new Map;for(const c of o){const s=jo(c.path);if(!s)continue;const u=a.get(s.originalPath)??[];u.push(c),a.set(s.originalPath,u)}for(const c of a.values())c.sort((s,u)=>{var m,p;return(((m=jo(u.path))==null?void 0:m.index)??0)-(((p=jo(s.path))==null?void 0:p.index)??0)});return a}function py(o,a){const c=o.replace(/\\/g,"/"),s=c.lastIndexOf("/"),u=s>=0?c.slice(0,s+1):"/",m=s>=0?c.slice(s+1):c.replace(/^\/+/,""),p=m.lastIndexOf("."),b=p>0?m.slice(0,p):m,v=p>0?m.slice(p):"",y=new Set(a.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const N=`${u}${b}_backup${x}${v}`;if(!y.has(N.toLowerCase()))return N}return`${u}${b}_backup${Date.now()}${v}`}function _y(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function gy(o,a,c,s){const u=new Map,m=Tf(o);for(const x of o)La(x.path)||u.set(gt("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:m.get(x.path)??[]});for(const x of a)u.set(gt("local",x.path),{kind:"file",name:ze(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const x of Object.keys(c)){const[N,...T]=x.split(":"),X=T.join(":");if(N!=="local"&&N!=="pico"||!X)continue;const P=u.get(x);if(P){u.set(x,P);continue}u.set(x,{kind:"file",name:ze(X),path:X,type:"file",source:N,uploaded:!1,versions:N==="pico"?m.get(X)??[]:[]})}const p=[...u.values()].sort(yy),b=p.filter(x=>x.source==="pico"),v=p.filter(x=>x.source==="local"),y=[];return b.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...b):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const by=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function yy(o,a){const c=Yp(o.path),s=Yp(a.path);return c===null&&s===null?o.name.localeCompare(a.name,"da"):c===null?-1:s===null?1:c-s}function Yp(o){var c;const a=(c=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return a?by.get(a)??null:null}function qp(o,a,c){if(!(a in o))return o;const s={...o,[c]:o[a]};return delete s[a],s}function vy(o,a,c,s){const u=`${a}:${c}`;if(!(u in o))return o;const m={...o,[`${a}:${s}`]:o[u]};return delete m[u],m}function xy({open:o}){const a=J(le=>le.screen),c=J(le=>le.active),s=J(le=>le.toggleSideMenu),u=J(le=>le.toggleDebugger),m=J(le=>le.setEditMode),p=J(le=>le.openMenuPage),b=J(le=>le.disconnect),v=J(le=>le.openPicoIde),y=J(le=>le.closePicoIde),x=J(le=>le.picoIdeOrigin),N=a==="dashboard",T=a==="control",X=a==="ide",P=T&&!!(c!=null&&c.canEdit),te=!T||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),G=x==="control",I=x==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${a} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[N&&f.jsxs(f.Fragment,{children:[f.jsx(_t,{label:"Bruger",icon:"user",onClick:()=>p("user-settings")}),f.jsx(_t,{label:"Indstillinger",icon:"settings",onClick:()=>p("application-settings")}),f.jsx(_t,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!te}),f.jsx(bf,{}),f.jsx(_t,{label:"Om appen",icon:"info",onClick:()=>p("application-about")}),f.jsx(_t,{label:"Hjælp",icon:"help",onClick:()=>p("application-help")}),f.jsx(_t,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),T&&f.jsxs(f.Fragment,{children:[f.jsx(_t,{label:"Indstillinger",icon:"settings",onClick:()=>p("device-settings")}),f.jsx(_t,{label:"Rediger",icon:"edit",onClick:()=>m(!0),disabled:!P}),f.jsx(_t,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!te}),f.jsx(bf,{}),f.jsx(_t,{label:"Hjælp",icon:"help",onClick:()=>p("device-help")}),f.jsx(_t,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),X&&f.jsxs(f.Fragment,{children:[f.jsx(_t,{label:I,icon:"back",onClick:y}),f.jsx(bf,{})]}),f.jsx("div",{className:"spacer"}),(T||X&&G)&&f.jsx(_t,{label:"Forlad",icon:"exit",onClick:()=>b()})]})]})}function _t({label:o,icon:a,disabled:c,onClick:s}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:c,"aria-label":o,children:[f.jsx(Pn,{name:a}),f.jsx("span",{children:o})]})}function bf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:Ob,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const Sy={error:"term-error",success:"term-success",warning:"term-warning",info:""},Ip={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function wy(){const o=new Date,a=c=>String(c).padStart(2,"0");return`${a(o.getDate())}-${a(o.getMonth()+1)}-${o.getFullYear()}-${a(o.getHours())}-${a(o.getMinutes())}`}function Ey(){const o=J(u=>u.logs),a=J(u=>u.clearLogs),c=J(u=>u.toggleDebugger);function s(){const u=[...o].reverse().map(v=>`${v.time} ${Ip[v.level]}${v.message}`).join(`
`),m=new Blob([u],{type:"text/plain"}),p=URL.createObjectURL(m),b=document.createElement("a");b.href=p,b.download=`${wy()}.txt`,b.click(),URL.revokeObjectURL(p)}return f.jsxs(wn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((u,m)=>f.jsxs("div",{className:`term-line ${Sy[u.level]}`,children:[u.time," ",Ip[u.level],u.message]},`${u.time}-${m}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:a,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const d_=4,zt=d_*4+17,$p=80,ky=20,Ny=30660;function Ry(o){const a=new TextEncoder().encode(o);if(a.length>76)throw new Error("QR-koden er for lang.");const c=Xp(!1),s=Xp(!1);Ty(c,s);const u=Ay(a),m=Oy(u,ky);return Dy(c,s,[...u,...m]),jy(c,s),c}function Xp(o){return Array.from({length:zt},()=>Array.from({length:zt},()=>o))}function Ot(o,a,c,s,u,m=!0){o[s][c]=u,m&&(a[s][c]=!0)}function Ty(o,a){yf(o,a,0,0),yf(o,a,zt-7,0),yf(o,a,0,zt-7);for(let c=0;c<zt;c+=1)a[6][c]||Ot(o,a,c,6,c%2===0),a[c][6]||Ot(o,a,6,c,c%2===0);My(o,a,26,26),Ot(o,a,8,d_*4+9,!0)}function yf(o,a,c,s){for(let u=-1;u<=7;u+=1)for(let m=-1;m<=7;m+=1){const p=c+m,b=s+u;if(p<0||b<0||p>=zt||b>=zt)continue;const v=m>=0&&m<=6&&u>=0&&u<=6&&(m===0||m===6||u===0||u===6||m>=2&&m<=4&&u>=2&&u<=4);Ot(o,a,p,b,v)}}function My(o,a,c,s){for(let u=-2;u<=2;u+=1)for(let m=-2;m<=2;m+=1)a[s+u][c+m]||Ot(o,a,c+m,s+u,Math.max(Math.abs(m),Math.abs(u))!==1)}function Ay(o){const a=[];To(a,4,4),To(a,o.length,8);for(const s of o)To(a,s,8);for(To(a,0,Math.min(4,$p*8-a.length));a.length%8!==0;)a.push(0);const c=[];for(let s=0;s<a.length;s+=8)c.push(a.slice(s,s+8).reduce((u,m)=>u<<1|m,0));for(let s=236;c.length<$p;s=s===236?17:236)c.push(s);return c}function To(o,a,c){for(let s=c-1;s>=0;s-=1)o.push(a>>>s&1)}function Dy(o,a,c){const s=c.flatMap(p=>Array.from({length:8},(b,v)=>p>>>7-v&1));let u=0,m=!0;for(let p=zt-1;p>=1;p-=2){p===6&&(p-=1);for(let b=0;b<zt;b+=1){const v=m?zt-1-b:b;for(let y=0;y<2;y+=1){const x=p-y;if(a[v][x])continue;const N=u<s.length?s[u]===1:!1;o[v][x]=N!==((x+v)%2===0),u+=1}}m=!m}}function jy(o,a){const c=s=>(Ny>>>s&1)!==0;for(let s=0;s<=5;s+=1)Ot(o,a,8,s,c(s));Ot(o,a,8,7,c(6)),Ot(o,a,8,8,c(7)),Ot(o,a,7,8,c(8));for(let s=9;s<15;s+=1)Ot(o,a,14-s,8,c(s));for(let s=0;s<8;s+=1)Ot(o,a,zt-1-s,8,c(s));for(let s=8;s<15;s+=1)Ot(o,a,8,zt-15+s,c(s))}const Ji=new Array(512),Mf=new Array(256);let Kp=!1;function m_(){if(Kp)return;let o=1;for(let a=0;a<255;a+=1)Ji[a]=o,Mf[o]=a,o<<=1,o&256&&(o^=285);for(let a=255;a<512;a+=1)Ji[a]=Ji[a-255];Kp=!0}function h_(o,a){return o===0||a===0?0:Ji[Mf[o]+Mf[a]]}function Oy(o,a){m_();const c=Cy(a),s=Array.from({length:a},()=>0);for(const u of o){const m=u^s.shift();s.push(0);for(let p=0;p<a;p+=1)s[p]^=h_(c[p],m)}return s}function Cy(o){m_();let a=[1];for(let c=0;c<o;c+=1){const s=Array.from({length:a.length+1},()=>0);for(let u=0;u<a.length;u+=1)s[u]^=h_(a[u],Ji[c]),s[u+1]^=a[u];a=s}return a.slice(1)}function zy(){const o=J(_e=>_e.menuPage),a=J(_e=>_e.closeMenuPage),c=J(_e=>_e.user),s=J(_e=>_e.active),u=J(_e=>_e.layout),m=J(_e=>_e.sliderValues),p=J(_e=>_e.savedDevices),b=J(_e=>_e.updateUsername),v=J(_e=>_e.createOwnerPairingCode),y=J(_e=>_e.applyOwnerPairingCode),x=J(_e=>_e.clearSavedDevices),N=J(_e=>_e.resetApplicationData),T=J(_e=>_e.saveDeviceSettings),X=J(_e=>_e.setEditMode),P=J(_e=>_e.askConfirm),[te,G]=U.useState((c==null?void 0:c.username)??""),[I,le]=U.useState(!1),[fe,ie]=U.useState(""),[de,Ne]=U.useState(""),[ee,W]=U.useState(!1),[ve,ge]=U.useState(""),ye=U.useRef(null),[re,Fe]=U.useState((s==null?void 0:s.iconID)??0),[De,Qe]=U.useState(!1),[C,Q]=U.useState((s==null?void 0:s.canOthersConnect)??!1),[ue,xe]=U.useState((s==null?void 0:s.canOthersEdit)??!1),[Ee,E]=U.useState((s==null?void 0:s.canOthersEditCode)??!1),[L,Z]=U.useState((s==null?void 0:s.gridCols)??11),[j,K]=U.useState((s==null?void 0:s.gridRows)??31),[F,$]=U.useState(!1);U.useEffect(()=>{o==="user-settings"&&(G((c==null?void 0:c.username)??""),Ne(""),ge(""),W(!1))},[o,c==null?void 0:c.username]),U.useEffect(()=>{o==="device-settings"&&s&&(Fe(s.iconID),Q(s.canOthersConnect),xe(s.canOthersEdit),E(s.canOthersEditCode),Z(s.gridCols),K(s.gridRows))},[s,o]),U.useEffect(()=>{if(!ee)return;let _e=!1,bn=null,En=0;async function je(){var Bt;const kn=window.BarcodeDetector;if(!kn||!((Bt=navigator.mediaDevices)!=null&&Bt.getUserMedia)){ge("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),W(!1);return}try{bn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Bn=ye.current;if(!Bn)return;Bn.srcObject=bn,await Bn.play();const Al=new kn({formats:["qr_code"]}),Dl=async()=>{var yt;if(!_e){try{const jl=(yt=(await Al.detect(Bn)).find(yn=>yn.rawValue))==null?void 0:yt.rawValue;if(jl){Ne(jl),y(jl)&&le(!1),W(!1);return}}catch{}En=window.requestAnimationFrame(Dl)}};En=window.requestAnimationFrame(Dl)}catch{ge("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),W(!1)}}return je(),()=>{_e=!0,En&&window.cancelAnimationFrame(En),bn==null||bn.getTracks().forEach(kn=>kn.stop())}},[y,ee]);const Ue=(_e,bn)=>Number.isFinite(_e)?Math.max(Ua,Math.min(Ha,Math.round(_e))):bn,Ce=(c==null?void 0:c.username)??"",Yn=te.trim(),$t=Yn.length>0&&Yn!==Ce;if(!o)return null;if(o==="user-settings"){let _e=function(){const je=v();je&&(ie(je),Ne(""),le(!0))},bn=function(){y(de)&&(Ne(""),le(!1))};async function En(){var je;try{await((je=navigator.clipboard)==null?void 0:je.writeText(fe))}catch{}}return f.jsxs(f.Fragment,{children:[f.jsx(wn,{title:"Brugerindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(jt,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${te.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:te,onChange:je=>G(je.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>b(te),disabled:!$t,children:"Gem nyt brugernavn"}),f.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:_e,children:"Ejerkode"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>P({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{N()}}),children:"Slet brugerdata"})]})}),I&&f.jsx(wn,{title:"Del ejerkode",onClose:()=>le(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Uy,{code:fe}),f.jsx("code",{className:"owner-code-text",children:fe}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void En(),children:"Kopiér ejerkode"}),f.jsxs("div",{className:`field ${de.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-owner-code",value:de,onChange:je=>Ne(je.target.value),autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:bn,disabled:!de.trim(),children:"Brug ejerkode i denne browser"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>W(je=>!je),children:ee?"Stop scanning":"Scan QR-kode"}),ve&&f.jsx("div",{className:"notice",children:ve}),ee&&f.jsx("video",{className:"owner-code-video",ref:ye,muted:!0,playsInline:!0})]})})]})}if(o==="application-settings")return f.jsx(wn,{title:"Applikationsindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(jt,{label:"Version",value:es}),f.jsx(jt,{label:"Bluetooth",value:Uo()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(jt,{label:"Gemte enheder",value:String(p.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>P({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:x}),disabled:p.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(wn,{title:"Om appen",onClose:a,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(jt,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(jt,{label:"Version",value:es})]})});if(o==="application-help")return f.jsx(wn,{title:"Hjælp til applikationen",onClose:a,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const _e=u.filter(je=>je.type==="slider"),bn=!!(s!=null&&s.isOwnedByMe);async function En(je=!1){if(!s||!bn)return;const kn=Ue(L,s.gridCols),Bt=Ue(j,s.gridRows),Bn=By(u,kn,Bt);if(Bn&&!je){P({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Bn.requiredCols} kolonner og ${Bn.requiredRows} rækker. Det nye gitter er ${kn} × ${Bt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{En(!0)}});return}$(!0),await T(re,C,C&&ue,C&&Ee,kn,Bt),Z(kn),K(Bt),$(!1)}return f.jsx(wn,{title:"Enhedsindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(jt,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),f.jsx(jt,{label:"Ejer",value:Hy(s)}),bn?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Qe(!0),children:f.jsx("img",{src:qa(re),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:C?"":"active",onClick:()=>Q(!1),children:"Privat"}),f.jsx("button",{type:"button",className:C?"active":"",onClick:()=>Q(!0),children:"Offentlig"})]}),C&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>xe(!1),children:"Nej"}),f.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>xe(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>E(!1),children:"Nej"}),f.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Ua,max:Ha,value:Number.isNaN(L)?"":L,onChange:je=>Z(parseInt(je.target.value,10)),onBlur:()=>Z(Ue(L,(s==null?void 0:s.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Ua,max:Ha,value:Number.isNaN(j)?"":j,onChange:je=>K(parseInt(je.target.value,10)),onBlur:()=>K(Ue(j,(s==null?void 0:s.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>En(),disabled:F,children:F?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(jt,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),f.jsx(jt,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(jt,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),f.jsx(jt,{label:"Kontroller",value:String(u.length)}),_e.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),_e.map(je=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:je.name}),f.jsxs("span",{children:[je.sliderMin??0," til ",je.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",Ly(je.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",m[je.name]??"Ikke brugt"]})]},je.name))]}),De&&f.jsx(n_,{selected:re,onSelect:Fe,onClose:()=>Qe(!1)})]})})}return f.jsx(wn,{title:"Hjælp til enheden",onClose:a,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>X(!0),children:"Rediger layout"})]})})}function By(o,a,c){let s=0,u=0;for(const m of o)Ga(m)&&(s=Math.max(s,Math.ceil((m.centerX2+m.spanX)/2)+1),u=Math.max(u,Math.ceil((m.centerY2+m.spanY)/2)+1));return a<s||c<u?{requiredCols:s,requiredRows:u}:null}function Ly(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function Uy({code:o}){const a=U.useMemo(()=>Ry(o),[o]),c=a.length;return f.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[f.jsx("rect",{width:c+8,height:c+8,fill:"white"}),a.map((s,u)=>s.map((m,p)=>m?f.jsx("rect",{x:p+4,y:u+4,width:"1",height:"1",fill:"currentColor"},`${p}-${u}`):null))]})}function Hy(o){var a;return o?o.isOwnedByMe?"Dig":((a=o.ownerName)==null?void 0:a.trim())||"Anden bruger":"Ukendt"}function jt({label:o,value:a}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:a})]})}function Gy(){const o=J(s=>s.confirmDialog),a=J(s=>s.closeConfirm);if(!o)return null;function c(){o==null||o.onConfirm(),a()}return f.jsx(wn,{title:o.title,onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:a,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:o.confirmLabel??"Fortsæt"})]})]})})}function Vy(){const o=J(s=>s.connectionLost),a=J(s=>s.reconnectLostDevice),c=J(s=>s.dismissConnectionLost);return o?f.jsx(wn,{title:"Forbindelse afbrudt",onClose:c,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>a(),children:"Genforbind"})]})]})}):null}function Yy(){const o=J(c=>c.toast),a=J(c=>c.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:a,children:o.message},o.id):null}function qy(){const o=J(b=>b.screen),a=J(b=>b.splashTarget),c=J(b=>b.init),s=J(b=>b.sideMenuOpen),u=J(b=>b.debuggerOpen),[m,p]=U.useState(!1);return U.useEffect(()=>{c()},[c]),U.useEffect(()=>{if(s){p(!0);return}const b=setTimeout(()=>p(!1),140);return()=>clearTimeout(b)},[s]),f.jsxs("div",{className:"app",children:[o==="splash"&&a==="intro"&&f.jsx(hp,{}),o==="splash"&&a==="dashboard"&&f.jsx(pp,{}),o==="splash"&&f.jsx(Lb,{}),o==="intro"&&f.jsx(hp,{}),o==="dashboard"&&f.jsx(pp,{}),o==="connection"&&f.jsx(Yb,{}),o==="create"&&f.jsx(qb,{}),o==="control"&&f.jsx(c0,{}),o==="ide"&&f.jsx(J0,{}),m&&f.jsx(xy,{open:s}),f.jsx(zy,{}),f.jsx(Vy,{}),f.jsx(Gy,{}),u&&f.jsx(Ey,{}),f.jsx(Yy,{})]})}function Iy(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(a=>{console.warn("Service worker registration failed:",a)})})}Iy();Pg.createRoot(document.getElementById("root")).render(f.jsx(Zi.StrictMode,{children:f.jsx(qy,{})}));
