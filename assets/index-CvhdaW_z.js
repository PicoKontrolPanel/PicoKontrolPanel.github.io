var Bg=Object.defineProperty;var Lg=(o,a,c)=>a in o?Bg(o,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[a]=c;var ce=(o,a,c)=>Lg(o,typeof a!="symbol"?a+"":a,c);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function c(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(u){if(u.ep)return;u.ep=!0;const m=c(u);fetch(u.href,m)}})();function Pp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ef={exports:{}},qi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Ug(){if(Kh)return qi;Kh=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function c(s,u,m){var p=null;if(m!==void 0&&(p=""+m),u.key!==void 0&&(p=""+u.key),"key"in u){m={};for(var b in u)b!=="key"&&(m[b]=u[b])}else m=u;return u=m.ref,{$$typeof:o,type:s,key:p,ref:u!==void 0?u:null,props:m}}return qi.Fragment=a,qi.jsx=c,qi.jsxs=c,qi}var Ph;function Hg(){return Ph||(Ph=1,ef.exports=Ug()),ef.exports}var f=Hg(),tf={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function Gg(){if(Fh)return be;Fh=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),T=Symbol.iterator;function X(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,G={};function $(E,L,Z){this.props=E,this.context=L,this.refs=G,this.updater=Z||P}$.prototype.isReactComponent={},$.prototype.setState=function(E,L){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,L,"setState")},$.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function re(){}re.prototype=$.prototype;function fe(E,L,Z){this.props=E,this.context=L,this.refs=G,this.updater=Z||P}var ie=fe.prototype=new re;ie.constructor=fe,ne(ie,$.prototype),ie.isPureReactComponent=!0;var de=Array.isArray;function Ne(){}var ee={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function ve(E,L,Z){var D=Z.ref;return{$$typeof:o,type:E,key:L,ref:D!==void 0?D:null,props:Z}}function ge(E,L){return ve(E.type,L,E.props)}function ye(E){return typeof E=="object"&&E!==null&&E.$$typeof===o}function le(E){var L={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Z){return L[Z]})}var Fe=/\/+/g;function je(E,L){return typeof E=="object"&&E!==null&&E.key!=null?le(""+E.key):L.toString(36)}function Qe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Ne,Ne):(E.status="pending",E.then(function(L){E.status==="pending"&&(E.status="fulfilled",E.value=L)},function(L){E.status==="pending"&&(E.status="rejected",E.reason=L)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function C(E,L,Z,D,K){var F=typeof E;(F==="undefined"||F==="boolean")&&(E=null);var I=!1;if(E===null)I=!0;else switch(F){case"bigint":case"string":case"number":I=!0;break;case"object":switch(E.$$typeof){case o:case a:I=!0;break;case x:return I=E._init,C(I(E._payload),L,Z,D,K)}}if(I)return K=K(E),I=D===""?"."+je(E,0):D,de(K)?(Z="",I!=null&&(Z=I.replace(Fe,"$&/")+"/"),C(K,L,Z,"",function(Vt){return Vt})):K!=null&&(ye(K)&&(K=ge(K,Z+(K.key==null||E&&E.key===K.key?"":(""+K.key).replace(Fe,"$&/")+"/")+I)),L.push(K)),1;I=0;var Ue=D===""?".":D+":";if(de(E))for(var Ce=0;Ce<E.length;Ce++)D=E[Ce],F=Ue+je(D,Ce),I+=C(D,L,Z,F,K);else if(Ce=X(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(D=E.next()).done;)D=D.value,F=Ue+je(D,Ce++),I+=C(D,L,Z,F,K);else if(F==="object"){if(typeof E.then=="function")return C(Qe(E),L,Z,D,K);throw L=String(E),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return I}function Q(E,L,Z){if(E==null)return E;var D=[],K=0;return C(E,D,"","",function(F){return L.call(Z,F,K++)}),D}function ue(E){if(E._status===-1){var L=E._result;L=L(),L.then(function(Z){(E._status===0||E._status===-1)&&(E._status=1,E._result=Z)},function(Z){(E._status===0||E._status===-1)&&(E._status=2,E._result=Z)}),E._status===-1&&(E._status=0,E._result=L)}if(E._status===1)return E._result.default;throw E._result}var xe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Ee={map:Q,forEach:function(E,L,Z){Q(E,function(){L.apply(this,arguments)},Z)},count:function(E){var L=0;return Q(E,function(){L++}),L},toArray:function(E){return Q(E,function(L){return L})||[]},only:function(E){if(!ye(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return be.Activity=N,be.Children=Ee,be.Component=$,be.Fragment=c,be.Profiler=u,be.PureComponent=fe,be.StrictMode=s,be.Suspense=v,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,be.__COMPILER_RUNTIME={__proto__:null,c:function(E){return ee.H.useMemoCache(E)}},be.cache=function(E){return function(){return E.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(E,L,Z){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var D=ne({},E.props),K=E.key;if(L!=null)for(F in L.key!==void 0&&(K=""+L.key),L)!W.call(L,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&L.ref===void 0||(D[F]=L[F]);var F=arguments.length-2;if(F===1)D.children=Z;else if(1<F){for(var I=Array(F),Ue=0;Ue<F;Ue++)I[Ue]=arguments[Ue+2];D.children=I}return ve(E.type,K,D)},be.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:m,_context:E},E},be.createElement=function(E,L,Z){var D,K={},F=null;if(L!=null)for(D in L.key!==void 0&&(F=""+L.key),L)W.call(L,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(K[D]=L[D]);var I=arguments.length-2;if(I===1)K.children=Z;else if(1<I){for(var Ue=Array(I),Ce=0;Ce<I;Ce++)Ue[Ce]=arguments[Ce+2];K.children=Ue}if(E&&E.defaultProps)for(D in I=E.defaultProps,I)K[D]===void 0&&(K[D]=I[D]);return ve(E,F,K)},be.createRef=function(){return{current:null}},be.forwardRef=function(E){return{$$typeof:b,render:E}},be.isValidElement=ye,be.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:ue}},be.memo=function(E,L){return{$$typeof:y,type:E,compare:L===void 0?null:L}},be.startTransition=function(E){var L=ee.T,Z={};ee.T=Z;try{var D=E(),K=ee.S;K!==null&&K(Z,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ne,xe)}catch(F){xe(F)}finally{L!==null&&Z.types!==null&&(L.types=Z.types),ee.T=L}},be.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},be.use=function(E){return ee.H.use(E)},be.useActionState=function(E,L,Z){return ee.H.useActionState(E,L,Z)},be.useCallback=function(E,L){return ee.H.useCallback(E,L)},be.useContext=function(E){return ee.H.useContext(E)},be.useDebugValue=function(){},be.useDeferredValue=function(E,L){return ee.H.useDeferredValue(E,L)},be.useEffect=function(E,L){return ee.H.useEffect(E,L)},be.useEffectEvent=function(E){return ee.H.useEffectEvent(E)},be.useId=function(){return ee.H.useId()},be.useImperativeHandle=function(E,L,Z){return ee.H.useImperativeHandle(E,L,Z)},be.useInsertionEffect=function(E,L){return ee.H.useInsertionEffect(E,L)},be.useLayoutEffect=function(E,L){return ee.H.useLayoutEffect(E,L)},be.useMemo=function(E,L){return ee.H.useMemo(E,L)},be.useOptimistic=function(E,L){return ee.H.useOptimistic(E,L)},be.useReducer=function(E,L,Z){return ee.H.useReducer(E,L,Z)},be.useRef=function(E){return ee.H.useRef(E)},be.useState=function(E){return ee.H.useState(E)},be.useSyncExternalStore=function(E,L,Z){return ee.H.useSyncExternalStore(E,L,Z)},be.useTransition=function(){return ee.H.useTransition()},be.version="19.2.7",be}var Qh;function Af(){return Qh||(Qh=1,tf.exports=Gg()),tf.exports}var U=Af();const Zi=Pp(U);var nf={exports:{}},$i={},rf={exports:{}},lf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function Vg(){return Zh||(Zh=1,(function(o){function a(C,Q){var ue=C.length;C.push(Q);e:for(;0<ue;){var xe=ue-1>>>1,Ee=C[xe];if(0<u(Ee,Q))C[xe]=Q,C[ue]=Ee,ue=xe;else break e}}function c(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var Q=C[0],ue=C.pop();if(ue!==Q){C[0]=ue;e:for(var xe=0,Ee=C.length,E=Ee>>>1;xe<E;){var L=2*(xe+1)-1,Z=C[L],D=L+1,K=C[D];if(0>u(Z,ue))D<Ee&&0>u(K,Z)?(C[xe]=K,C[D]=ue,xe=D):(C[xe]=Z,C[L]=ue,xe=L);else if(D<Ee&&0>u(K,ue))C[xe]=K,C[D]=ue,xe=D;else break e}}return Q}function u(C,Q){var ue=C.sortIndex-Q.sortIndex;return ue!==0?ue:C.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var p=Date,b=p.now();o.unstable_now=function(){return p.now()-b}}var v=[],y=[],x=1,N=null,T=3,X=!1,P=!1,ne=!1,G=!1,$=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function ie(C){for(var Q=c(y);Q!==null;){if(Q.callback===null)s(y);else if(Q.startTime<=C)s(y),Q.sortIndex=Q.expirationTime,a(v,Q);else break;Q=c(y)}}function de(C){if(ne=!1,ie(C),!P)if(c(v)!==null)P=!0,Ne||(Ne=!0,le());else{var Q=c(y);Q!==null&&Qe(de,Q.startTime-C)}}var Ne=!1,ee=-1,W=5,ve=-1;function ge(){return G?!0:!(o.unstable_now()-ve<W)}function ye(){if(G=!1,Ne){var C=o.unstable_now();ve=C;var Q=!0;try{e:{P=!1,ne&&(ne=!1,re(ee),ee=-1),X=!0;var ue=T;try{t:{for(ie(C),N=c(v);N!==null&&!(N.expirationTime>C&&ge());){var xe=N.callback;if(typeof xe=="function"){N.callback=null,T=N.priorityLevel;var Ee=xe(N.expirationTime<=C);if(C=o.unstable_now(),typeof Ee=="function"){N.callback=Ee,ie(C),Q=!0;break t}N===c(v)&&s(v),ie(C)}else s(v);N=c(v)}if(N!==null)Q=!0;else{var E=c(y);E!==null&&Qe(de,E.startTime-C),Q=!1}}break e}finally{N=null,T=ue,X=!1}Q=void 0}}finally{Q?le():Ne=!1}}}var le;if(typeof fe=="function")le=function(){fe(ye)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,je=Fe.port2;Fe.port1.onmessage=ye,le=function(){je.postMessage(null)}}else le=function(){$(ye,0)};function Qe(C,Q){ee=$(function(){C(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(C){C.callback=null},o.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_next=function(C){switch(T){case 1:case 2:case 3:var Q=3;break;default:Q=T}var ue=T;T=Q;try{return C()}finally{T=ue}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(C,Q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var ue=T;T=C;try{return Q()}finally{T=ue}},o.unstable_scheduleCallback=function(C,Q,ue){var xe=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?xe+ue:xe):ue=xe,C){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ue+Ee,C={id:x++,callback:Q,priorityLevel:C,startTime:ue,expirationTime:Ee,sortIndex:-1},ue>xe?(C.sortIndex=ue,a(y,C),c(v)===null&&C===c(y)&&(ne?(re(ee),ee=-1):ne=!0,Qe(de,ue-xe))):(C.sortIndex=Ee,a(v,C),P||X||(P=!0,Ne||(Ne=!0,le()))),C},o.unstable_shouldYield=ge,o.unstable_wrapCallback=function(C){var Q=T;return function(){var ue=T;T=Q;try{return C.apply(this,arguments)}finally{T=ue}}}})(lf)),lf}var Wh;function Yg(){return Wh||(Wh=1,rf.exports=Vg()),rf.exports}var af={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function qg(){if(Jh)return Gt;Jh=1;var o=Af();function a(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(a(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(v,y,x){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:N==null?null:""+N,children:v,containerInfo:y,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gt.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(a(299));return m(v,y,null,x)},Gt.flushSync=function(v){var y=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=y,s.p=x,s.d.f()}},Gt.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},Gt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Gt.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,N=b(x,y.crossOrigin),T=typeof y.integrity=="string"?y.integrity:void 0,X=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:N,integrity:T,fetchPriority:X}):x==="script"&&s.d.X(v,{crossOrigin:N,integrity:T,fetchPriority:X,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Gt.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=b(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},Gt.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,N=b(x,y.crossOrigin);s.d.L(v,x,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Gt.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=b(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},Gt.requestFormReset=function(v){s.d.r(v)},Gt.unstable_batchedUpdates=function(v,y){return v(y)},Gt.useFormState=function(v,y,x){return p.H.useFormState(v,y,x)},Gt.useFormStatus=function(){return p.H.useHostTransitionStatus()},Gt.version="19.2.7",Gt}var ep;function $g(){if(ep)return af.exports;ep=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),af.exports=qg(),af.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Ig(){if(tp)return $i;tp=1;var o=Yg(),a=Af(),c=$g();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(m(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return v(l),e;if(i===r)return v(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var h=!1,_=l.child;_;){if(_===n){h=!0,n=l,r=i;break}if(_===r){h=!0,r=l,n=i;break}_=_.sibling}if(!h){for(_=i.child;_;){if(_===n){h=!0,n=i,r=l;break}if(_===r){h=!0,r=i,n=l;break}_=_.sibling}if(!h)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,T=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),re=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case $:return"Profiler";case G:return"StrictMode";case de:return"Suspense";case Ne:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case fe:return e.displayName||"Context";case re:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:je(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return je(e(t))}catch{}}return null}var Qe=Array.isArray,C=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},xe=[],Ee=-1;function E(e){return{current:e}}function L(e){0>Ee||(e.current=xe[Ee],xe[Ee]=null,Ee--)}function Z(e,t){Ee++,xe[Ee]=e.current,e.current=t}var D=E(null),K=E(null),F=E(null),I=E(null);function Ue(e,t){switch(Z(F,t),Z(K,e),Z(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_h(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_h(t),e=gh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(D),Z(D,e)}function Ce(){L(D),L(K),L(F)}function Vt(e){e.memoizedState!==null&&Z(I,e);var t=D.current,n=gh(t,e.type);t!==n&&(Z(K,e),Z(D,n))}function In(e){K.current===e&&(L(D),L(K)),I.current===e&&(L(I),Hi._currentValue=ue)}var _e,gt;function wt(e){if(_e===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||"",gt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+gt}var De=!1;function Et(e,t){if(!e||De)return"";De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(B){var O=B}Reflect.construct(e,[],q)}else{try{q.call()}catch(B){O=B}e.call(q.prototype)}}else{try{throw Error()}catch(B){O=B}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(B){if(B&&O&&typeof B.stack=="string")return[B.stack,O.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),h=i[0],_=i[1];if(h&&_){var w=h.split(`
`),A=_.split(`
`);for(l=r=0;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(r===w.length||l===A.length)for(r=w.length-1,l=A.length-1;1<=r&&0<=l&&w[r]!==A[l];)l--;for(;1<=r&&0<=l;r--,l--)if(w[r]!==A[l]){if(r!==1||l!==1)do if(r--,l--,0>l||w[r]!==A[l]){var H=`
`+w[r].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=r&&0<=l);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?wt(n):""}function Bn(e,t){switch(e.tag){case 26:case 27:case 5:return wt(e.type);case 16:return wt("Lazy");case 13:return e.child!==t&&t!==null?wt("Suspense Fallback"):wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return Et(e.type,!1);case 11:return Et(e.type.render,!1);case 1:return Et(e.type,!0);case 31:return wt("Activity");default:return""}}function zt(e){try{var t="",n=null;do t+=Bn(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ar=Object.prototype.hasOwnProperty,jr=o.unstable_scheduleCallback,yn=o.unstable_cancelCallback,Fl=o.unstable_shouldYield,Dr=o.unstable_requestPaint,bt=o.unstable_now,dl=o.unstable_getCurrentPriorityLevel,ml=o.unstable_ImmediatePriority,$a=o.unstable_UserBlockingPriority,hl=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,nn=o.unstable_IdlePriority,Xn=o.log,Ql=o.unstable_setDisableYieldValue,pl=null,yt=null;function rn(e){if(typeof Xn=="function"&&Ql(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(pl,e)}catch{}}var Nt=Math.clz32?Math.clz32:rr,Or=Math.log,Cr=Math.LN2;function rr(e){return e>>>=0,e===0?32:31-(Or(e)/Cr|0)|0}var Kn=256,Yt=262144,Ke=4194304;function Rt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var l=0,i=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var _=r&134217727;return _!==0?(r=_&~i,r!==0?l=Rt(r):(h&=_,h!==0?l=Rt(h):n||(n=_&~e,n!==0&&(l=Rt(n))))):(_=r&~i,_!==0?l=Rt(_):h!==0?l=Rt(h):n||(n=r&~e,n!==0&&(l=Rt(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Bt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Go(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ia(){var e=Ke;return Ke<<=1,(Ke&62914560)===0&&(Ke=4194304),e}function Pn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lr(e,t,n,r,l,i){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var _=e.entanglements,w=e.expirationTimes,A=e.hiddenUpdates;for(n=h&~n;0<n;){var H=31-Nt(n),q=1<<H;_[H]=0,w[H]=-1;var O=A[H];if(O!==null)for(A[H]=null,H=0;H<O.length;H++){var B=O[H];B!==null&&(B.lane&=-536870913)}n&=~q}r!==0&&rs(e,r,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(h&~t))}function rs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Nt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}function ls(e,t){var n=t&-t;return n=(n&42)!==0?1:zr(n),(n&(e.suspendedLanes|t))!==0?0:n}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function st(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Gh(e.type))}function Xa(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var ln=Math.random().toString(36).slice(2),ot="__reactFiber$"+ln,ct="__reactProps$"+ln,Tt="__reactContainer$"+ln,Ln="__reactEvents$"+ln,gl="__reactListeners$"+ln,Un="__reactHandles$"+ln,ar="__reactResources$"+ln,Hn="__reactMarker$"+ln;function Gn(e){delete e[ot],delete e[ct],delete e[Ln],delete e[gl],delete e[Un]}function Fn(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eh(e);e!==null;){if(n=e[ot])return n;e=Eh(e)}return t}e=n,n=e.parentNode}return null}function qt(e){if(e=e[ot]||e[Tt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ft(e){var t=e[ar];return t||(t=e[ar]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Hn]=!0}var ir=new Set,Ka={};function an(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Ka[e]=t,e=0;e<t.length;e++)ir.add(t[e])}var he=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wl={},as={};function Vo(e){return Ar.call(as,e)?!0:Ar.call(Wl,e)?!1:he.test(e)?as[e]=!0:(Wl[e]=!0,!1)}function Jl(e,t,n){if(Vo(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ea(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function $t(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function on(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pa(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){n=""+h,i.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lt(e){if(!e._valueTracker){var t=on(e)?"checked":"value";e._valueTracker=Pa(e,t,""+e[t])}}function is(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=on(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ss=/[\n"\\]/g;function Ut(e){return e.replace(ss,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Y(e,t,n,r,l,i,h,_){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Fa(e,h,vt(t)):n!=null?Fa(e,h,vt(n)):r!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+vt(_):e.removeAttribute("name")}function os(e,t,n,r,l,i,h,_){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Lt(e);return}n=n!=null?""+vt(n):"",t=t!=null?""+vt(t):n,_||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=_?e.checked:!!r,e.defaultChecked=!!r,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Lt(e)}function Fa(e,t,n){t==="number"&&ta(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Qa(e,t,n){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+vt(n):""}function bl(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(Qe(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Lt(e)}function tt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Br(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||cs.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function yl(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in t)r=t[l],t.hasOwnProperty(l)&&n[l]!==r&&Br(e,l,r)}else for(var i in t)t.hasOwnProperty(i)&&Br(e,i,t[i])}function Za(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),us=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lr(e){return us.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nt(){}var sr=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Sn=null;function fs(e){var t=qt(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Y(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=r[ct]||null;if(!l)throw Error(s(90));Y(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&is(r)}break e;case"textarea":Qa(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}}}var na=!1;function vl(e,t,n){if(na)return e(t,n);na=!0;try{var r=e(t);return r}finally{if(na=!1,(Ur!==null||Sn!==null)&&(lo(),Ur&&(t=Ur,e=Sn,Sn=Ur=null,fs(t),e)))for(t=0;t<e.length;t++)fs(e[t])}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=!1;if(wn)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{Ja=!1}var Zn=null,cn=null,rt=null;function ei(){if(rt)return rt;var e,t=cn,n=t.length,r,l="value"in Zn?Zn.value:Zn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var h=n-e;for(r=1;r<=h&&t[n-r]===l[i-r];r++);return rt=l.slice(e,1<r?1-r:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function ti(){return!1}function Mt(e){function t(n,r,l,i,h){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=h,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(n=e[_],this[_]=n?n(i):i[_]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sl:ti,this.isPropagationStopped=ti,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=Mt(or),wl=N({},or,{view:0,detail:0}),ds=Mt(wl),la,El,kl,Nl=N({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kl&&(kl&&e.type==="mousemove"?(la=e.screenX-kl.screenX,El=e.screenY-kl.screenY):El=la=0,kl=e),la)},movementY:function(e){return"movementY"in e?e.movementY:El}}),ni=Mt(Nl),ms=N({},Nl,{dataTransfer:0}),Yo=Mt(ms),qo=N({},wl,{relatedTarget:0}),ri=Mt(qo),$o=N({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Io=Mt($o),Xo=N({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ko=Mt(Xo),Po=N({},or,{data:0}),hs=Mt(Po),Fo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rl(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zo[e])?!!t[e]:!1}function li(){return Rl}var Wo=N({},wl,{key:function(e){if(e.key){var t=Fo[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ps=Mt(Wo),Jo=N({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ai=Mt(Jo),ec=N({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),tc=Mt(ec),_s=N({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),nc=Mt(_s),rc=N({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lc=Mt(rc),ac=N({},or,{newState:0,oldState:0}),ic=Mt(ac),sc=[9,13,27,32],Tl=wn&&"CompositionEvent"in window,Ht=null;wn&&"documentMode"in document&&(Ht=document.documentMode);var gs=wn&&"TextEvent"in window&&!Ht,bs=wn&&(!Tl||Ht&&8<Ht&&11>=Ht),ys=" ",vs=!1;function Hr(e,t){switch(e){case"keyup":return sc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ml(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function ii(e,t){switch(e){case"compositionend":return Ml(t);case"keypress":return t.which!==32?null:(vs=!0,ys);case"textInput":return e=t.data,e===ys&&vs?null:e;default:return null}}function xs(e,t){if(cr)return e==="compositionend"||!Tl&&Hr(e,t)?(e=ei(),rt=cn=Zn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bs&&t.locale!=="ko"?null:t.data;default:return null}}var oc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oc[e.type]:t==="textarea"}function d(e,t,n,r){Ur?Sn?Sn.push(r):Sn=[r]:Ur=r,t=fo(t,"onChange"),0<t.length&&(n=new ra("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var g=null,S=null;function z(e){uh(e,0)}function j(e){var t=Vn(e);if(is(t))return e}function se(e,t){if(e==="change")return t}var Se=!1;if(wn){var We;if(wn){var Ge="oninput"in document;if(!Ge){var It=document.createElement("div");It.setAttribute("oninput","return;"),Ge=typeof It.oninput=="function"}We=Ge}else We=!1;Se=We&&(!document.documentMode||9<document.documentMode)}function ur(){g&&(g.detachEvent("onpropertychange",Ve),S=g=null)}function Ve(e){if(e.propertyName==="value"&&j(S)){var t=[];d(t,S,e,Wa(e)),vl(z,t)}}function fr(e,t,n){e==="focusin"?(ur(),g=t,S=n,g.attachEvent("onpropertychange",Ve)):e==="focusout"&&ur()}function si(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return j(S)}function Al(e,t){if(e==="click")return j(t)}function Gr(e,t){if(e==="input"||e==="change")return j(t)}function oi(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:oi;function dr(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ar.call(t,l)||!At(e[l],t[l]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vr(e,t){var n=aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aa(n)}}function ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ci(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ta(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ta(e.document)}return t}function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var p_=wn&&"documentMode"in document&&11>=document.documentMode,ia=null,uc=null,ui=null,fc=!1;function Uf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fc||ia==null||ia!==ta(r)||(r=ia,"selectionStart"in r&&cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&dr(ui,r)||(ui=r,r=fo(uc,"onSelect"),0<r.length&&(t=new ra("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ia)))}function jl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sa={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionrun:jl("Transition","TransitionRun"),transitionstart:jl("Transition","TransitionStart"),transitioncancel:jl("Transition","TransitionCancel"),transitionend:jl("Transition","TransitionEnd")},dc={},Hf={};wn&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function Dl(e){if(dc[e])return dc[e];if(!sa[e])return e;var t=sa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hf)return dc[e]=t[n];return e}var Gf=Dl("animationend"),Vf=Dl("animationiteration"),Yf=Dl("animationstart"),__=Dl("transitionrun"),g_=Dl("transitionstart"),b_=Dl("transitioncancel"),qf=Dl("transitionend"),$f=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function Yn(e,t){$f.set(e,t),an(t,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},En=[],oa=0,hc=0;function ks(){for(var e=oa,t=hc=oa=0;t<e;){var n=En[t];En[t++]=null;var r=En[t];En[t++]=null;var l=En[t];En[t++]=null;var i=En[t];if(En[t++]=null,r!==null&&l!==null){var h=r.pending;h===null?l.next=l:(l.next=h.next,h.next=l),r.pending=l}i!==0&&If(n,l,i)}}function Ns(e,t,n,r){En[oa++]=e,En[oa++]=t,En[oa++]=n,En[oa++]=r,hc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function pc(e,t,n,r){return Ns(e,t,n,r),Rs(e)}function Ol(e,t){return Ns(e,null,null,t),Rs(e)}function If(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,r=i.alternate,r!==null&&(r.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Nt(n),e=i.hiddenUpdates,r=e[l],r===null?e[l]=[t]:r.push(t),t.lane=n|536870912),i):null}function Rs(e){if(50<Di)throw Di=0,Eu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ca={};function y_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,t,n,r){return new y_(e,t,n,r)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mr(e,t){var n=e.alternate;return n===null?(n=un(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ts(e,t,n,r,l,i){var h=0;if(r=e,typeof e=="function")_c(e)&&(h=1);else if(typeof e=="string")h=Eg(e,n,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=un(31,n,t,l),e.elementType=ve,e.lanes=i,e;case ne:return Cl(n.children,l,i,t);case G:h=8,l|=24;break;case $:return e=un(12,n,t,l|2),e.elementType=$,e.lanes=i,e;case de:return e=un(13,n,t,l),e.elementType=de,e.lanes=i,e;case Ne:return e=un(19,n,t,l),e.elementType=Ne,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:h=10;break e;case re:h=9;break e;case ie:h=11;break e;case ee:h=14;break e;case W:h=16,r=null;break e}h=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=un(h,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Cl(e,t,n,r){return e=un(7,e,r,t),e.lanes=n,e}function gc(e,t,n){return e=un(6,e,null,t),e.lanes=n,e}function Kf(e){var t=un(18,null,null,0);return t.stateNode=e,t}function bc(e,t,n){return t=un(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pf=new WeakMap;function kn(e,t){if(typeof e=="object"&&e!==null){var n=Pf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:zt(t)},Pf.set(e,t),t)}return{value:e,source:t,stack:zt(t)}}var ua=[],fa=0,Ms=null,fi=0,Nn=[],Rn=0,Yr=null,Jn=1,er="";function hr(e,t){ua[fa++]=fi,ua[fa++]=Ms,Ms=e,fi=t}function Ff(e,t,n){Nn[Rn++]=Jn,Nn[Rn++]=er,Nn[Rn++]=Yr,Yr=e;var r=Jn;e=er;var l=32-Nt(r)-1;r&=~(1<<l),n+=1;var i=32-Nt(t)+l;if(30<i){var h=l-l%5;i=(r&(1<<h)-1).toString(32),r>>=h,l-=h,Jn=1<<32-Nt(t)+l|n<<l|r,er=i+e}else Jn=1<<i|n<<l|r,er=e}function yc(e){e.return!==null&&(hr(e,1),Ff(e,1,0))}function vc(e){for(;e===Ms;)Ms=ua[--fa],ua[fa]=null,fi=ua[--fa],ua[fa]=null;for(;e===Yr;)Yr=Nn[--Rn],Nn[Rn]=null,er=Nn[--Rn],Nn[Rn]=null,Jn=Nn[--Rn],Nn[Rn]=null}function Qf(e,t){Nn[Rn++]=Jn,Nn[Rn++]=er,Nn[Rn++]=Yr,Jn=t.id,er=t.overflow,Yr=e}var jt=null,Je=null,Oe=!1,qr=null,Tn=!1,xc=Error(s(519));function $r(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw di(kn(t,e)),xc}function Zf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[ct]=r,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<Ci.length;n++)Te(Ci[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),os(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),bl(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||hh(t.textContent,n)?(r.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),r.onScroll!=null&&Te("scroll",t),r.onScrollEnd!=null&&Te("scrollend",t),r.onClick!=null&&(t.onclick=nt),t=!0):t=!1,t||$r(e,!0)}function Wf(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:jt=jt.return}}function da(e){if(e!==jt)return!1;if(!Oe)return Wf(e),Oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hu(e.type,e.memoizedProps)),n=!n),n&&Je&&$r(e),Wf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=wh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=wh(e)}else t===27?(t=Je,ll(e.type)?(e=$u,$u=null,Je=e):Je=t):Je=jt?An(e.stateNode.nextSibling):null;return!0}function zl(){Je=jt=null,Oe=!1}function Sc(){var e=qr;return e!==null&&(en===null?en=e:en.push.apply(en,e),qr=null),e}function di(e){qr===null?qr=[e]:qr.push(e)}var wc=E(null),Bl=null,pr=null;function Ir(e,t,n){Z(wc,t._currentValue),t._currentValue=n}function _r(e){e._currentValue=wc.current,L(wc)}function Ec(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kc(e,t,n,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var h=l.child;i=i.firstContext;e:for(;i!==null;){var _=i;i=l;for(var w=0;w<t.length;w++)if(_.context===t[w]){i.lanes|=n,_=i.alternate,_!==null&&(_.lanes|=n),Ec(i.return,n,e),r||(h=null);break e}i=_.next}}else if(l.tag===18){if(h=l.return,h===null)throw Error(s(341));h.lanes|=n,i=h.alternate,i!==null&&(i.lanes|=n),Ec(h,n,e),h=null}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===e){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}}function ma(e,t,n,r){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var h=l.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var _=l.type;At(l.pendingProps.value,h.value)||(e!==null?e.push(_):e=[_])}}else if(l===I.current){if(h=l.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Hi):e=[Hi])}l=l.return}e!==null&&kc(t,e,n,r),t.flags|=262144}function As(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ll(e){Bl=e,pr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dt(e){return Jf(Bl,e)}function js(e,t){return Bl===null&&Ll(e),Jf(e,t)}function Jf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pr===null){if(e===null)throw Error(s(308));pr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pr=pr.next=t;return n}var v_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},x_=o.unstable_scheduleCallback,S_=o.unstable_NormalPriority,mt={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nc(){return{controller:new v_,data:new Map,refCount:0}}function mi(e){e.refCount--,e.refCount===0&&x_(S_,function(){e.controller.abort()})}var hi=null,Rc=0,ha=0,pa=null;function w_(e,t){if(hi===null){var n=hi=[];Rc=0,ha=Au(),pa={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Rc++,t.then(ed,ed),t}function ed(){if(--Rc===0&&hi!==null){pa!==null&&(pa.status="fulfilled");var e=hi;hi=null,ha=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function E_(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),r}var td=C.S;C.S=function(e,t){Um=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&w_(e,t),td!==null&&td(e,t)};var Ul=E(null);function Tc(){var e=Ul.current;return e!==null?e:Pe.pooledCache}function Ds(e,t){t===null?Z(Ul,Ul.current):Z(Ul,t.pool)}function nd(){var e=Tc();return e===null?null:{parent:mt._currentValue,pool:e}}var _a=Error(s(460)),Mc=Error(s(474)),Os=Error(s(542)),Cs={then:function(){}};function rd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ld(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nt,nt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,id(e),e;default:if(typeof t.status=="string")t.then(nt,nt);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,id(e),e}throw Gl=t,_a}}function Hl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Gl=n,_a):n}}var Gl=null;function ad(){if(Gl===null)throw Error(s(459));var e=Gl;return Gl=null,e}function id(e){if(e===_a||e===Os)throw Error(s(483))}var ga=null,pi=0;function zs(e){var t=pi;return pi+=1,ga===null&&(ga=[]),ld(ga,e,t)}function _i(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bs(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sd(e){function t(R,k){if(e){var M=R.deletions;M===null?(R.deletions=[k],R.flags|=16):M.push(k)}}function n(R,k){if(!e)return null;for(;k!==null;)t(R,k),k=k.sibling;return null}function r(R){for(var k=new Map;R!==null;)R.key!==null?k.set(R.key,R):k.set(R.index,R),R=R.sibling;return k}function l(R,k){return R=mr(R,k),R.index=0,R.sibling=null,R}function i(R,k,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<k?(R.flags|=67108866,k):M):(R.flags|=67108866,k)):(R.flags|=1048576,k)}function h(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function _(R,k,M,V){return k===null||k.tag!==6?(k=gc(M,R.mode,V),k.return=R,k):(k=l(k,M),k.return=R,k)}function w(R,k,M,V){var me=M.type;return me===ne?H(R,k,M.props.children,V,M.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&Hl(me)===k.type)?(k=l(k,M.props),_i(k,M),k.return=R,k):(k=Ts(M.type,M.key,M.props,null,R.mode,V),_i(k,M),k.return=R,k)}function A(R,k,M,V){return k===null||k.tag!==4||k.stateNode.containerInfo!==M.containerInfo||k.stateNode.implementation!==M.implementation?(k=bc(M,R.mode,V),k.return=R,k):(k=l(k,M.children||[]),k.return=R,k)}function H(R,k,M,V,me){return k===null||k.tag!==7?(k=Cl(M,R.mode,V,me),k.return=R,k):(k=l(k,M),k.return=R,k)}function q(R,k,M){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=gc(""+k,R.mode,M),k.return=R,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case X:return M=Ts(k.type,k.key,k.props,null,R.mode,M),_i(M,k),M.return=R,M;case P:return k=bc(k,R.mode,M),k.return=R,k;case W:return k=Hl(k),q(R,k,M)}if(Qe(k)||le(k))return k=Cl(k,R.mode,M,null),k.return=R,k;if(typeof k.then=="function")return q(R,zs(k),M);if(k.$$typeof===fe)return q(R,js(R,k),M);Bs(R,k)}return null}function O(R,k,M,V){var me=k!==null?k.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return me!==null?null:_(R,k,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return M.key===me?w(R,k,M,V):null;case P:return M.key===me?A(R,k,M,V):null;case W:return M=Hl(M),O(R,k,M,V)}if(Qe(M)||le(M))return me!==null?null:H(R,k,M,V,null);if(typeof M.then=="function")return O(R,k,zs(M),V);if(M.$$typeof===fe)return O(R,k,js(R,M),V);Bs(R,M)}return null}function B(R,k,M,V,me){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return R=R.get(M)||null,_(k,R,""+V,me);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return R=R.get(V.key===null?M:V.key)||null,w(k,R,V,me);case P:return R=R.get(V.key===null?M:V.key)||null,A(k,R,V,me);case W:return V=Hl(V),B(R,k,M,V,me)}if(Qe(V)||le(V))return R=R.get(M)||null,H(k,R,V,me,null);if(typeof V.then=="function")return B(R,k,M,zs(V),me);if(V.$$typeof===fe)return B(R,k,M,js(k,V),me);Bs(k,V)}return null}function ae(R,k,M,V){for(var me=null,Be=null,oe=k,ke=k=0,Ae=null;oe!==null&&ke<M.length;ke++){oe.index>ke?(Ae=oe,oe=null):Ae=oe.sibling;var Le=O(R,oe,M[ke],V);if(Le===null){oe===null&&(oe=Ae);break}e&&oe&&Le.alternate===null&&t(R,oe),k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le,oe=Ae}if(ke===M.length)return n(R,oe),Oe&&hr(R,ke),me;if(oe===null){for(;ke<M.length;ke++)oe=q(R,M[ke],V),oe!==null&&(k=i(oe,k,ke),Be===null?me=oe:Be.sibling=oe,Be=oe);return Oe&&hr(R,ke),me}for(oe=r(oe);ke<M.length;ke++)Ae=B(oe,R,ke,M[ke],V),Ae!==null&&(e&&Ae.alternate!==null&&oe.delete(Ae.key===null?ke:Ae.key),k=i(Ae,k,ke),Be===null?me=Ae:Be.sibling=Ae,Be=Ae);return e&&oe.forEach(function(cl){return t(R,cl)}),Oe&&hr(R,ke),me}function pe(R,k,M,V){if(M==null)throw Error(s(151));for(var me=null,Be=null,oe=k,ke=k=0,Ae=null,Le=M.next();oe!==null&&!Le.done;ke++,Le=M.next()){oe.index>ke?(Ae=oe,oe=null):Ae=oe.sibling;var cl=O(R,oe,Le.value,V);if(cl===null){oe===null&&(oe=Ae);break}e&&oe&&cl.alternate===null&&t(R,oe),k=i(cl,k,ke),Be===null?me=cl:Be.sibling=cl,Be=cl,oe=Ae}if(Le.done)return n(R,oe),Oe&&hr(R,ke),me;if(oe===null){for(;!Le.done;ke++,Le=M.next())Le=q(R,Le.value,V),Le!==null&&(k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le);return Oe&&hr(R,ke),me}for(oe=r(oe);!Le.done;ke++,Le=M.next())Le=B(oe,R,ke,Le.value,V),Le!==null&&(e&&Le.alternate!==null&&oe.delete(Le.key===null?ke:Le.key),k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le);return e&&oe.forEach(function(zg){return t(R,zg)}),Oe&&hr(R,ke),me}function Xe(R,k,M,V){if(typeof M=="object"&&M!==null&&M.type===ne&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case X:e:{for(var me=M.key;k!==null;){if(k.key===me){if(me=M.type,me===ne){if(k.tag===7){n(R,k.sibling),V=l(k,M.props.children),V.return=R,R=V;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&Hl(me)===k.type){n(R,k.sibling),V=l(k,M.props),_i(V,M),V.return=R,R=V;break e}n(R,k);break}else t(R,k);k=k.sibling}M.type===ne?(V=Cl(M.props.children,R.mode,V,M.key),V.return=R,R=V):(V=Ts(M.type,M.key,M.props,null,R.mode,V),_i(V,M),V.return=R,R=V)}return h(R);case P:e:{for(me=M.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===M.containerInfo&&k.stateNode.implementation===M.implementation){n(R,k.sibling),V=l(k,M.children||[]),V.return=R,R=V;break e}else{n(R,k);break}else t(R,k);k=k.sibling}V=bc(M,R.mode,V),V.return=R,R=V}return h(R);case W:return M=Hl(M),Xe(R,k,M,V)}if(Qe(M))return ae(R,k,M,V);if(le(M)){if(me=le(M),typeof me!="function")throw Error(s(150));return M=me.call(M),pe(R,k,M,V)}if(typeof M.then=="function")return Xe(R,k,zs(M),V);if(M.$$typeof===fe)return Xe(R,k,js(R,M),V);Bs(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,k!==null&&k.tag===6?(n(R,k.sibling),V=l(k,M),V.return=R,R=V):(n(R,k),V=gc(M,R.mode,V),V.return=R,R=V),h(R)):n(R,k)}return function(R,k,M,V){try{pi=0;var me=Xe(R,k,M,V);return ga=null,me}catch(oe){if(oe===_a||oe===Os)throw oe;var Be=un(29,oe,null,R.mode);return Be.lanes=V,Be.return=R,Be}finally{}}}var Vl=sd(!0),od=sd(!1),Xr=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(He&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=Rs(e),If(e,null,n),t}return Ns(e,r,t,n),Rs(e)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}function Dc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=h:i=i.next=h,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Oc=!1;function bi(){if(Oc){var e=pa;if(e!==null)throw e}}function yi(e,t,n,r){Oc=!1;var l=e.updateQueue;Xr=!1;var i=l.firstBaseUpdate,h=l.lastBaseUpdate,_=l.shared.pending;if(_!==null){l.shared.pending=null;var w=_,A=w.next;w.next=null,h===null?i=A:h.next=A,h=w;var H=e.alternate;H!==null&&(H=H.updateQueue,_=H.lastBaseUpdate,_!==h&&(_===null?H.firstBaseUpdate=A:_.next=A,H.lastBaseUpdate=w))}if(i!==null){var q=l.baseState;h=0,H=A=w=null,_=i;do{var O=_.lane&-536870913,B=O!==_.lane;if(B?(Me&O)===O:(r&O)===O){O!==0&&O===ha&&(Oc=!0),H!==null&&(H=H.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var ae=e,pe=_;O=t;var Xe=n;switch(pe.tag){case 1:if(ae=pe.payload,typeof ae=="function"){q=ae.call(Xe,q,O);break e}q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=pe.payload,O=typeof ae=="function"?ae.call(Xe,q,O):ae,O==null)break e;q=N({},q,O);break e;case 2:Xr=!0}}O=_.callback,O!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[O]:B.push(O))}else B={lane:O,tag:_.tag,payload:_.payload,callback:_.callback,next:null},H===null?(A=H=B,w=q):H=H.next=B,h|=O;if(_=_.next,_===null){if(_=l.shared.pending,_===null)break;B=_,_=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);H===null&&(w=q),l.baseState=w,l.firstBaseUpdate=A,l.lastBaseUpdate=H,i===null&&(l.shared.lanes=0),Jr|=h,e.lanes=h,e.memoizedState=q}}function cd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function ud(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cd(n[e],t)}var ba=E(null),Ls=E(0);function fd(e,t){e=kr,Z(Ls,e),Z(ba,t),kr=e|t.baseLanes}function Cc(){Z(Ls,kr),Z(ba,ba.current)}function zc(){kr=Ls.current,L(ba),L(Ls)}var fn=E(null),Mn=null;function Fr(e){var t=e.alternate;Z(ut,ut.current&1),Z(fn,e),Mn===null&&(t===null||ba.current!==null||t.memoizedState!==null)&&(Mn=e)}function Bc(e){Z(ut,ut.current),Z(fn,e),Mn===null&&(Mn=e)}function dd(e){e.tag===22?(Z(ut,ut.current),Z(fn,e),Mn===null&&(Mn=e)):Qr()}function Qr(){Z(ut,ut.current),Z(fn,fn.current)}function dn(e){L(fn),Mn===e&&(Mn=null),L(ut)}var ut=E(0);function Us(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Yu(n)||qu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gr=0,we=null,$e=null,ht=null,Hs=!1,ya=!1,Yl=!1,Gs=0,vi=0,va=null,k_=0;function at(){throw Error(s(321))}function Lc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Uc(e,t,n,r,l,i){return gr=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Fd:Jc,Yl=!1,i=n(r,l),Yl=!1,ya&&(i=hd(t,n,r,l)),md(e),i}function md(e){C.H=wi;var t=$e!==null&&$e.next!==null;if(gr=0,ht=$e=we=null,Hs=!1,vi=0,va=null,t)throw Error(s(300));e===null||pt||(e=e.dependencies,e!==null&&As(e)&&(pt=!0))}function hd(e,t,n,r){we=e;var l=0;do{if(ya&&(va=null),vi=0,ya=!1,25<=l)throw Error(s(301));if(l+=1,ht=$e=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=Qd,i=t(n,r)}while(ya);return i}function N_(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?xi(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(we.flags|=1024),t}function Hc(){var e=Gs!==0;return Gs=0,e}function Gc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vc(e){if(Hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hs=!1}gr=0,ht=$e=we=null,ya=!1,vi=Gs=0,va=null}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?we.memoizedState=ht=e:ht=ht.next=e,ht}function ft(){if($e===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=ht===null?we.memoizedState:ht.next;if(t!==null)ht=t,$e=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},ht===null?we.memoizedState=ht=e:ht=ht.next=e}return ht}function Vs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xi(e){var t=vi;return vi+=1,va===null&&(va=[]),e=ld(va,e,t),t=we,(ht===null?t.memoizedState:ht.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Fd:Jc),e}function Ys(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xi(e);if(e.$$typeof===fe)return Dt(e)}throw Error(s(438,String(e)))}function Yc(e){var t=null,n=we.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=we.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Vs(),we.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ge;return t.index++,n}function br(e,t){return typeof t=="function"?t(e):t}function qs(e){var t=ft();return qc(t,$e,e)}function qc(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var l=e.baseQueue,i=r.pending;if(i!==null){if(l!==null){var h=l.next;l.next=i.next,i.next=h}t.baseQueue=l=i,r.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var _=h=null,w=null,A=t,H=!1;do{var q=A.lane&-536870913;if(q!==A.lane?(Me&q)===q:(gr&q)===q){var O=A.revertLane;if(O===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),q===ha&&(H=!0);else if((gr&O)===O){A=A.next,O===ha&&(H=!0);continue}else q={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},w===null?(_=w=q,h=i):w=w.next=q,we.lanes|=O,Jr|=O;q=A.action,Yl&&n(i,q),i=A.hasEagerState?A.eagerState:n(i,q)}else O={lane:q,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},w===null?(_=w=O,h=i):w=w.next=O,we.lanes|=q,Jr|=q;A=A.next}while(A!==null&&A!==t);if(w===null?h=i:w.next=_,!At(i,e.memoizedState)&&(pt=!0,H&&(n=pa,n!==null)))throw n;e.memoizedState=i,e.baseState=h,e.baseQueue=w,r.lastRenderedState=i}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function $c(e){var t=ft(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do i=e(i,h.action),h=h.next;while(h!==l);At(i,t.memoizedState)||(pt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function pd(e,t,n){var r=we,l=ft(),i=Oe;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var h=!At(($e||l).memoizedState,n);if(h&&(l.memoizedState=n,pt=!0),l=l.queue,Kc(bd.bind(null,r,l,e),[e]),l.getSnapshot!==t||h||ht!==null&&ht.memoizedState.tag&1){if(r.flags|=2048,xa(9,{destroy:void 0},gd.bind(null,r,l,n,t),null),Pe===null)throw Error(s(349));i||(gr&127)!==0||_d(r,t,n)}return n}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t=Vs(),we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gd(e,t,n,r){t.value=n,t.getSnapshot=r,yd(t)&&vd(e)}function bd(e,t,n){return n(function(){yd(t)&&vd(e)})}function yd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function vd(e){var t=Ol(e,2);t!==null&&tn(t,e,2)}function Ic(e){var t=Xt();if(typeof e=="function"){var n=e;if(e=n(),Yl){rn(!0);try{n()}finally{rn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t}function xd(e,t,n,r){return e.baseState=n,qc(e,$e,typeof r=="function"?r:br)}function R_(e,t,n,r,l){if(Xs(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){i.listeners.push(h)}};C.T!==null?n(!0):i.isTransition=!1,r(i),n=t.pending,n===null?(i.next=t.pending=i,Sd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Sd(e,t){var n=t.action,r=t.payload,l=e.state;if(t.isTransition){var i=C.T,h={};C.T=h;try{var _=n(l,r),w=C.S;w!==null&&w(h,_),wd(e,t,_)}catch(A){Xc(e,t,A)}finally{i!==null&&h.types!==null&&(i.types=h.types),C.T=i}}else try{i=n(l,r),wd(e,t,i)}catch(A){Xc(e,t,A)}}function wd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Ed(e,t,r)},function(r){return Xc(e,t,r)}):Ed(e,t,n)}function Ed(e,t,n){t.status="fulfilled",t.value=n,kd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sd(e,n)))}function Xc(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,kd(t),t=t.next;while(t!==r)}e.action=null}function kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nd(e,t){return t}function Rd(e,t){if(Oe){var n=Pe.formState;if(n!==null){e:{var r=we;if(Oe){if(Je){t:{for(var l=Je,i=Tn;l.nodeType!==8;){if(!i){l=null;break t}if(l=An(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Je=An(l.nextSibling),r=l.data==="F!";break e}}$r(r)}r=!1}r&&(t=n[0])}}return n=Xt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nd,lastRenderedState:t},n.queue=r,n=Xd.bind(null,we,r),r.dispatch=n,r=Ic(!1),i=Wc.bind(null,we,!1,r.queue),r=Xt(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,n=R_.bind(null,we,l,i,n),l.dispatch=n,r.memoizedState=e,[t,n,!1]}function Td(e){var t=ft();return Md(t,$e,e)}function Md(e,t,n){if(t=qc(e,t,Nd)[0],e=qs(br)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=xi(t)}catch(h){throw h===_a?Os:h}else r=t;t=ft();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(we.flags|=2048,xa(9,{destroy:void 0},T_.bind(null,l,n),null)),[r,i,e]}function T_(e,t){e.action=t}function Ad(e){var t=ft(),n=$e;if(n!==null)return Md(t,n,e);ft(),t=t.memoizedState,n=ft();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function xa(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=we.updateQueue,t===null&&(t=Vs(),we.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function jd(){return ft().memoizedState}function $s(e,t,n,r){var l=Xt();we.flags|=e,l.memoizedState=xa(1|t,{destroy:void 0},n,r===void 0?null:r)}function Is(e,t,n,r){var l=ft();r=r===void 0?null:r;var i=l.memoizedState.inst;$e!==null&&r!==null&&Lc(r,$e.memoizedState.deps)?l.memoizedState=xa(t,i,n,r):(we.flags|=e,l.memoizedState=xa(1|t,i,n,r))}function Dd(e,t){$s(8390656,8,e,t)}function Kc(e,t){Is(2048,8,e,t)}function M_(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=Vs(),we.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Od(e){var t=ft().memoizedState;return M_({ref:t,nextImpl:e}),function(){if((He&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Cd(e,t){return Is(4,2,e,t)}function zd(e,t){return Is(4,4,e,t)}function Bd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ld(e,t,n){n=n!=null?n.concat([e]):null,Is(4,4,Bd.bind(null,t,e),n)}function Pc(){}function Ud(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Lc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Lc(t,r[1]))return r[0];if(r=e(),Yl){rn(!0);try{e()}finally{rn(!1)}}return n.memoizedState=[r,t],r}function Fc(e,t,n){return n===void 0||(gr&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Gm(),we.lanes|=e,Jr|=e,n)}function Gd(e,t,n,r){return At(n,t)?n:ba.current!==null?(e=Fc(e,n,r),At(e,t)||(pt=!0),e):(gr&42)===0||(gr&1073741824)!==0&&(Me&261930)===0?(pt=!0,e.memoizedState=n):(e=Gm(),we.lanes|=e,Jr|=e,t)}function Vd(e,t,n,r,l){var i=Q.p;Q.p=i!==0&&8>i?i:8;var h=C.T,_={};C.T=_,Wc(e,!1,t,n);try{var w=l(),A=C.S;if(A!==null&&A(_,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=E_(w,r);Si(e,t,H,pn(e))}else Si(e,t,r,pn(e))}catch(q){Si(e,t,{then:function(){},status:"rejected",reason:q},pn())}finally{Q.p=i,h!==null&&_.types!==null&&(h.types=_.types),C.T=h}}function A_(){}function Qc(e,t,n,r){if(e.tag!==5)throw Error(s(476));var l=Yd(e).queue;Vd(e,l,t,ue,n===null?A_:function(){return qd(e),n(r)})}function Yd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qd(e){var t=Yd(e);t.next===null&&(t=e.alternate.memoizedState),Si(e,t.next.queue,{},pn())}function Zc(){return Dt(Hi)}function $d(){return ft().memoizedState}function Id(){return ft().memoizedState}function j_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pn();e=Kr(n);var r=Pr(t,e,n);r!==null&&(tn(r,t,n),gi(r,t,n)),t={cache:Nc()},e.payload=t;return}t=t.return}}function D_(e,t,n){var r=pn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Xs(e)?Kd(t,n):(n=pc(e,t,n,r),n!==null&&(tn(n,e,r),Pd(n,t,r)))}function Xd(e,t,n){var r=pn();Si(e,t,n,r)}function Si(e,t,n,r){var l={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xs(e))Kd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var h=t.lastRenderedState,_=i(h,n);if(l.hasEagerState=!0,l.eagerState=_,At(_,h))return Ns(e,t,l,0),Pe===null&&ks(),!1}catch{}finally{}if(n=pc(e,t,l,r),n!==null)return tn(n,e,r),Pd(n,t,r),!0}return!1}function Wc(e,t,n,r){if(r={lane:2,revertLane:Au(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xs(e)){if(t)throw Error(s(479))}else t=pc(e,n,r,2),t!==null&&tn(t,e,2)}function Xs(e){var t=e.alternate;return e===we||t!==null&&t===we}function Kd(e,t){ya=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pd(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}var wi={readContext:Dt,use:Ys,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useLayoutEffect:at,useInsertionEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useSyncExternalStore:at,useId:at,useHostTransitionStatus:at,useFormState:at,useActionState:at,useOptimistic:at,useMemoCache:at,useCacheRefresh:at};wi.useEffectEvent=at;var Fd={readContext:Dt,use:Ys,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:Dd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,$s(4194308,4,Bd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $s(4194308,4,e,t)},useInsertionEffect:function(e,t){$s(4,2,e,t)},useMemo:function(e,t){var n=Xt();t=t===void 0?null:t;var r=e();if(Yl){rn(!0);try{e()}finally{rn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Xt();if(n!==void 0){var l=n(t);if(Yl){rn(!0);try{n(t)}finally{rn(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=D_.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ic(e);var t=e.queue,n=Xd.bind(null,we,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Pc,useDeferredValue:function(e,t){var n=Xt();return Fc(n,e,t)},useTransition:function(){var e=Ic(!1);return e=Vd.bind(null,we,e.queue,!0,!1),Xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=we,l=Xt();if(Oe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Pe===null)throw Error(s(349));(Me&127)!==0||_d(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Dd(bd.bind(null,r,i,e),[e]),r.flags|=2048,xa(9,{destroy:void 0},gd.bind(null,r,i,n,t),null),n},useId:function(){var e=Xt(),t=Pe.identifierPrefix;if(Oe){var n=er,r=Jn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Gs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=k_++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zc,useFormState:Rd,useActionState:Rd,useOptimistic:function(e){var t=Xt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wc.bind(null,we,!0,n),n.dispatch=t,[e,t]},useMemoCache:Yc,useCacheRefresh:function(){return Xt().memoizedState=j_.bind(null,we)},useEffectEvent:function(e){var t=Xt(),n={impl:e};return t.memoizedState=n,function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Jc={readContext:Dt,use:Ys,useCallback:Ud,useContext:Dt,useEffect:Kc,useImperativeHandle:Ld,useInsertionEffect:Cd,useLayoutEffect:zd,useMemo:Hd,useReducer:qs,useRef:jd,useState:function(){return qs(br)},useDebugValue:Pc,useDeferredValue:function(e,t){var n=ft();return Gd(n,$e.memoizedState,e,t)},useTransition:function(){var e=qs(br)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:pd,useId:$d,useHostTransitionStatus:Zc,useFormState:Td,useActionState:Td,useOptimistic:function(e,t){var n=ft();return xd(n,$e,e,t)},useMemoCache:Yc,useCacheRefresh:Id};Jc.useEffectEvent=Od;var Qd={readContext:Dt,use:Ys,useCallback:Ud,useContext:Dt,useEffect:Kc,useImperativeHandle:Ld,useInsertionEffect:Cd,useLayoutEffect:zd,useMemo:Hd,useReducer:$c,useRef:jd,useState:function(){return $c(br)},useDebugValue:Pc,useDeferredValue:function(e,t){var n=ft();return $e===null?Fc(n,e,t):Gd(n,$e.memoizedState,e,t)},useTransition:function(){var e=$c(br)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:pd,useId:$d,useHostTransitionStatus:Zc,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,t){var n=ft();return $e!==null?xd(n,$e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Yc,useCacheRefresh:Id};Qd.useEffectEvent=Od;function eu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pn(),l=Kr(r);l.payload=t,n!=null&&(l.callback=n),t=Pr(e,l,r),t!==null&&(tn(t,e,r),gi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pn(),l=Kr(r);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Pr(e,l,r),t!==null&&(tn(t,e,r),gi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pn(),r=Kr(n);r.tag=2,t!=null&&(r.callback=t),t=Pr(e,r,n),t!==null&&(tn(t,e,n),gi(t,e,n))}};function Zd(e,t,n,r,l,i,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,h):t.prototype&&t.prototype.isPureReactComponent?!dr(n,r)||!dr(l,i):!0}function Wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tu.enqueueReplaceState(t,t.state,null)}function ql(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=N({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Jd(e){Es(e)}function em(e){console.error(e)}function tm(e){Es(e)}function Ks(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function nm(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function nu(e,t,n){return n=Kr(n),n.tag=3,n.payload={element:null},n.callback=function(){Ks(e,t)},n}function rm(e){return e=Kr(e),e.tag=3,e}function lm(e,t,n,r){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=r.value;e.payload=function(){return l(i)},e.callback=function(){nm(t,n,r)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){nm(t,n,r),typeof l!="function"&&(el===null?el=new Set([this]):el.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})})}function O_(e,t,n,r,l){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&ma(t,n,l,!0),n=fn.current,n!==null){switch(n.tag){case 31:case 13:return Mn===null?ao():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=l,r===Cs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ru(e,r,l)),!1;case 22:return n.flags|=65536,r===Cs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ru(e,r,l)),!1}throw Error(s(435,n.tag))}return Ru(e,r,l),ao(),!1}if(Oe)return t=fn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==xc&&(e=Error(s(422),{cause:r}),di(kn(e,n)))):(r!==xc&&(t=Error(s(423),{cause:r}),di(kn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=kn(r,n),l=nu(e.stateNode,r,l),Dc(e,l),it!==4&&(it=2)),!1;var i=Error(s(520),{cause:r});if(i=kn(i,n),ji===null?ji=[i]:ji.push(i),it!==4&&(it=2),t===null)return!0;r=kn(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=nu(n.stateNode,r,e),Dc(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(el===null||!el.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=rm(l),lm(l,e,n,r),Dc(n,l),!1}n=n.return}while(n!==null);return!1}var ru=Error(s(461)),pt=!1;function Ot(e,t,n,r){t.child=e===null?od(t,null,n,r):Vl(t,e.child,n,r)}function am(e,t,n,r,l){n=n.render;var i=t.ref;if("ref"in r){var h={};for(var _ in r)_!=="ref"&&(h[_]=r[_])}else h=r;return Ll(t),r=Uc(e,t,n,h,i,l),_=Hc(),e!==null&&!pt?(Gc(e,t,l),yr(e,t,l)):(Oe&&_&&yc(t),t.flags|=1,Ot(e,t,r,l),t.child)}function im(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!_c(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,sm(e,t,i,r,l)):(e=Ts(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!fu(e,l)){var h=i.memoizedProps;if(n=n.compare,n=n!==null?n:dr,n(h,r)&&e.ref===t.ref)return yr(e,t,l)}return t.flags|=1,e=mr(i,r),e.ref=t.ref,e.return=t,t.child=e}function sm(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(dr(i,r)&&e.ref===t.ref)if(pt=!1,t.pendingProps=r=i,fu(e,l))(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,yr(e,t,l)}return lu(e,t,n,r,l)}function om(e,t,n,r){var l=r.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(r=t.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~i}else r=0,t.child=null;return cm(e,t,i,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ds(t,i!==null?i.cachePool:null),i!==null?fd(t,i):Cc(),dd(t);else return r=t.lanes=536870912,cm(e,t,i!==null?i.baseLanes|n:n,n,r)}else i!==null?(Ds(t,i.cachePool),fd(t,i),Qr(),t.memoizedState=null):(e!==null&&Ds(t,null),Cc(),Qr());return Ot(e,t,l,n),t.child}function Ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cm(e,t,n,r,l){var i=Tc();return i=i===null?null:{parent:mt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ds(t,null),Cc(),dd(t),e!==null&&ma(e,t,r,!0),t.childLanes=l,null}function Ps(e,t){return t=Qs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function um(e,t,n){return Vl(t,e.child,null,n),e=Ps(t,t.pendingProps),e.flags|=2,dn(t),t.memoizedState=null,e}function C_(e,t,n){var r=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(r.mode==="hidden")return e=Ps(t,r),t.lanes=536870912,Ei(null,e);if(Bc(t),(e=Je)?(e=Sh(e,Tn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yr!==null?{id:Jn,overflow:er}:null,retryLane:536870912,hydrationErrors:null},n=Kf(e),n.return=t,t.child=n,jt=t,Je=null)):e=null,e===null)throw $r(t);return t.lanes=536870912,null}return Ps(t,r)}var i=e.memoizedState;if(i!==null){var h=i.dehydrated;if(Bc(t),l)if(t.flags&256)t.flags&=-257,t=um(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(pt||ma(e,t,n,!1),l=(n&e.childLanes)!==0,pt||l){if(r=Pe,r!==null&&(h=ls(r,n),h!==0&&h!==i.retryLane))throw i.retryLane=h,Ol(e,h),tn(r,e,h),ru;ao(),t=um(e,t,n)}else e=i.treeContext,Je=An(h.nextSibling),jt=t,Oe=!0,qr=null,Tn=!1,e!==null&&Qf(t,e),t=Ps(t,r),t.flags|=4096;return t}return e=mr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lu(e,t,n,r,l){return Ll(t),n=Uc(e,t,n,r,void 0,l),r=Hc(),e!==null&&!pt?(Gc(e,t,l),yr(e,t,l)):(Oe&&r&&yc(t),t.flags|=1,Ot(e,t,n,l),t.child)}function fm(e,t,n,r,l,i){return Ll(t),t.updateQueue=null,n=hd(t,r,n,l),md(e),r=Hc(),e!==null&&!pt?(Gc(e,t,i),yr(e,t,i)):(Oe&&r&&yc(t),t.flags|=1,Ot(e,t,n,i),t.child)}function dm(e,t,n,r,l){if(Ll(t),t.stateNode===null){var i=ca,h=n.contextType;typeof h=="object"&&h!==null&&(i=Dt(h)),i=new n(r,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=r,i.state=t.memoizedState,i.refs={},Ac(t),h=n.contextType,i.context=typeof h=="object"&&h!==null?Dt(h):ca,i.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(eu(t,n,h,r),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(h=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),h!==i.state&&tu.enqueueReplaceState(i,i.state,null),yi(t,r,i,l),bi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){i=t.stateNode;var _=t.memoizedProps,w=ql(n,_);i.props=w;var A=i.context,H=n.contextType;h=ca,typeof H=="object"&&H!==null&&(h=Dt(H));var q=n.getDerivedStateFromProps;H=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function",_=t.pendingProps!==_,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(_||A!==h)&&Wd(t,i,r,h),Xr=!1;var O=t.memoizedState;i.state=O,yi(t,r,i,l),bi(),A=t.memoizedState,_||O!==A||Xr?(typeof q=="function"&&(eu(t,n,q,r),A=t.memoizedState),(w=Xr||Zd(t,n,w,r,O,A,h))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=A),i.props=r,i.state=A,i.context=h,r=w):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,jc(e,t),h=t.memoizedProps,H=ql(n,h),i.props=H,q=t.pendingProps,O=i.context,A=n.contextType,w=ca,typeof A=="object"&&A!==null&&(w=Dt(A)),_=n.getDerivedStateFromProps,(A=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h!==q||O!==w)&&Wd(t,i,r,w),Xr=!1,O=t.memoizedState,i.state=O,yi(t,r,i,l),bi();var B=t.memoizedState;h!==q||O!==B||Xr||e!==null&&e.dependencies!==null&&As(e.dependencies)?(typeof _=="function"&&(eu(t,n,_,r),B=t.memoizedState),(H=Xr||Zd(t,n,H,r,O,B,w)||e!==null&&e.dependencies!==null&&As(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,B,w),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,B,w)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),i.props=r,i.state=B,i.context=w,r=H):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Fs(e,t),r=(t.flags&128)!==0,i||r?(i=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&r?(t.child=Vl(t,e.child,null,l),t.child=Vl(t,null,n,l)):Ot(e,t,n,l),t.memoizedState=i.state,e=t.child):e=yr(e,t,l),e}function mm(e,t,n,r){return zl(),t.flags|=256,Ot(e,t,n,r),t.child}var au={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function iu(e){return{baseLanes:e,cachePool:nd()}}function su(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=hn),e}function hm(e,t,n){var r=t.pendingProps,l=!1,i=(t.flags&128)!==0,h;if((h=i)||(h=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),h&&(l=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(l?Fr(t):Qr(),(e=Je)?(e=Sh(e,Tn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yr!==null?{id:Jn,overflow:er}:null,retryLane:536870912,hydrationErrors:null},n=Kf(e),n.return=t,t.child=n,jt=t,Je=null)):e=null,e===null)throw $r(t);return qu(e)?t.lanes=32:t.lanes=536870912,null}var _=r.children;return r=r.fallback,l?(Qr(),l=t.mode,_=Qs({mode:"hidden",children:_},l),r=Cl(r,l,n,null),_.return=t,r.return=t,_.sibling=r,t.child=_,r=t.child,r.memoizedState=iu(n),r.childLanes=su(e,h,n),t.memoizedState=au,Ei(null,r)):(Fr(t),ou(t,_))}var w=e.memoizedState;if(w!==null&&(_=w.dehydrated,_!==null)){if(i)t.flags&256?(Fr(t),t.flags&=-257,t=cu(e,t,n)):t.memoizedState!==null?(Qr(),t.child=e.child,t.flags|=128,t=null):(Qr(),_=r.fallback,l=t.mode,r=Qs({mode:"visible",children:r.children},l),_=Cl(_,l,n,null),_.flags|=2,r.return=t,_.return=t,r.sibling=_,t.child=r,Vl(t,e.child,null,n),r=t.child,r.memoizedState=iu(n),r.childLanes=su(e,h,n),t.memoizedState=au,t=Ei(null,r));else if(Fr(t),qu(_)){if(h=_.nextSibling&&_.nextSibling.dataset,h)var A=h.dgst;h=A,r=Error(s(419)),r.stack="",r.digest=h,di({value:r,source:null,stack:null}),t=cu(e,t,n)}else if(pt||ma(e,t,n,!1),h=(n&e.childLanes)!==0,pt||h){if(h=Pe,h!==null&&(r=ls(h,n),r!==0&&r!==w.retryLane))throw w.retryLane=r,Ol(e,r),tn(h,e,r),ru;Yu(_)||ao(),t=cu(e,t,n)}else Yu(_)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Je=An(_.nextSibling),jt=t,Oe=!0,qr=null,Tn=!1,e!==null&&Qf(t,e),t=ou(t,r.children),t.flags|=4096);return t}return l?(Qr(),_=r.fallback,l=t.mode,w=e.child,A=w.sibling,r=mr(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&65011712,A!==null?_=mr(A,_):(_=Cl(_,l,n,null),_.flags|=2),_.return=t,r.return=t,r.sibling=_,t.child=r,Ei(null,r),r=t.child,_=e.child.memoizedState,_===null?_=iu(n):(l=_.cachePool,l!==null?(w=mt._currentValue,l=l.parent!==w?{parent:w,pool:w}:l):l=nd(),_={baseLanes:_.baseLanes|n,cachePool:l}),r.memoizedState=_,r.childLanes=su(e,h,n),t.memoizedState=au,Ei(e.child,r)):(Fr(t),n=e.child,e=n.sibling,n=mr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function ou(e,t){return t=Qs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qs(e,t){return e=un(22,e,null,t),e.lanes=0,e}function cu(e,t,n){return Vl(t,e.child,null,n),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ec(e.return,t,n)}function uu(e,t,n,r,l,i){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l,treeForkCount:i}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=r,h.tail=n,h.tailMode=l,h.treeForkCount=i)}function _m(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;r=r.children;var h=ut.current,_=(h&2)!==0;if(_?(h=h&1|2,t.flags|=128):h&=1,Z(ut,h),Ot(e,t,r,n),r=Oe?fi:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pm(e,n,t);else if(e.tag===19)pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Us(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),uu(t,!1,l,n,i,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Us(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}uu(t,!0,n,null,i,r);break;case"together":uu(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function yr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&As(e)))}function z_(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),Ir(t,mt,e.memoizedState.cache),zl();break;case 27:case 5:Vt(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:Ir(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bc(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Fr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?hm(e,t,n):(Fr(t),e=yr(e,t,n),e!==null?e.sibling:null);Fr(t);break;case 19:var l=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(ma(e,t,n,!1),r=(n&t.childLanes)!==0),l){if(r)return _m(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(ut,ut.current),r)break;return null;case 22:return t.lanes=0,om(e,t,n,t.pendingProps);case 24:Ir(t,mt,e.memoizedState.cache)}return yr(e,t,n)}function gm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)pt=!0;else{if(!fu(e,n)&&(t.flags&128)===0)return pt=!1,z_(e,t,n);pt=(e.flags&131072)!==0}else pt=!1,Oe&&(t.flags&1048576)!==0&&Ff(t,fi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Hl(t.elementType),t.type=e,typeof e=="function")_c(e)?(r=ql(e,r),t.tag=1,t=dm(null,t,e,r,n)):(t.tag=0,t=lu(null,t,e,r,n));else{if(e!=null){var l=e.$$typeof;if(l===ie){t.tag=11,t=am(null,t,e,r,n);break e}else if(l===ee){t.tag=14,t=im(null,t,e,r,n);break e}}throw t=je(e)||e,Error(s(306,t,""))}}return t;case 0:return lu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,l=ql(r,t.pendingProps),dm(e,t,r,l,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var i=t.memoizedState;l=i.element,jc(e,t),yi(t,r,null,n);var h=t.memoizedState;if(r=h.cache,Ir(t,mt,r),r!==i.cache&&kc(t,[mt],n,!0),bi(),r=h.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=mm(e,t,r,n);break e}else if(r!==l){l=kn(Error(s(424)),t),di(l),t=mm(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=An(e.firstChild),jt=t,Oe=!0,qr=null,Tn=!0,n=od(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zl(),r===l){t=yr(e,t,n);break e}Ot(e,t,r,n)}t=t.child}return t;case 26:return Fs(e,t),e===null?(n=Th(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oe||(n=t.type,e=t.pendingProps,r=mo(F.current).createElement(n),r[ot]=t,r[ct]=e,Ct(r,n,e),Ze(r),t.stateNode=r):t.memoizedState=Th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vt(t),e===null&&Oe&&(r=t.stateNode=kh(t.type,t.pendingProps,F.current),jt=t,Tn=!0,l=Je,ll(t.type)?($u=l,Je=An(r.firstChild)):Je=l),Ot(e,t,t.pendingProps.children,n),Fs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((l=r=Je)&&(r=fg(r,t.type,t.pendingProps,Tn),r!==null?(t.stateNode=r,jt=t,Je=An(r.firstChild),Tn=!1,l=!0):l=!1),l||$r(t)),Vt(t),l=t.type,i=t.pendingProps,h=e!==null?e.memoizedProps:null,r=i.children,Hu(l,i)?r=null:h!==null&&Hu(l,h)&&(t.flags|=32),t.memoizedState!==null&&(l=Uc(e,t,N_,null,null,n),Hi._currentValue=l),Fs(e,t),Ot(e,t,r,n),t.child;case 6:return e===null&&Oe&&((e=n=Je)&&(n=dg(n,t.pendingProps,Tn),n!==null?(t.stateNode=n,jt=t,Je=null,e=!0):e=!1),e||$r(t)),null;case 13:return hm(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vl(t,null,r,n):Ot(e,t,r,n),t.child;case 11:return am(e,t,t.type,t.pendingProps,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ir(t,t.type,r.value),Ot(e,t,r.children,n),t.child;case 9:return l=t.type._context,r=t.pendingProps.children,Ll(t),l=Dt(l),r=r(l),t.flags|=1,Ot(e,t,r,n),t.child;case 14:return im(e,t,t.type,t.pendingProps,n);case 15:return sm(e,t,t.type,t.pendingProps,n);case 19:return _m(e,t,n);case 31:return C_(e,t,n);case 22:return om(e,t,n,t.pendingProps);case 24:return Ll(t),r=Dt(mt),e===null?(l=Tc(),l===null&&(l=Pe,i=Nc(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:r,cache:l},Ac(t),Ir(t,mt,l)):((e.lanes&n)!==0&&(jc(e,t),yi(t,null,null,n),bi()),l=e.memoizedState,i=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ir(t,mt,r)):(r=i.cache,Ir(t,mt,r),r!==l.cache&&kc(t,[mt],n,!0))),Ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function vr(e){e.flags|=4}function du(e,t,n,r,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if($m())e.flags|=8192;else throw Gl=Cs,Mc}else e.flags&=-16777217}function bm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Oh(t))if($m())e.flags|=8192;else throw Gl=Cs,Mc}function Zs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ia():536870912,e.lanes|=t,ka|=t)}function ki(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function B_(e,t,n){var r=t.pendingProps;switch(vc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),_r(mt),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(da(t)?vr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sc())),et(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(vr(t),i!==null?(et(t),bm(t,i)):(et(t),du(t,l,null,r,n))):i?i!==e.memoizedState?(vr(t),et(t),bm(t,i)):(et(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&vr(t),et(t),du(t,l,e,r,n)),null;case 27:if(In(t),n=F.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return et(t),null}e=D.current,da(t)?Zf(t):(e=kh(l,r,n),t.stateNode=e,vr(t))}return et(t),null;case 5:if(In(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return et(t),null}if(i=D.current,da(t))Zf(t);else{var h=mo(F.current);switch(i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof r.is=="string"?h.createElement("select",{is:r.is}):h.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i=typeof r.is=="string"?h.createElement(l,{is:r.is}):h.createElement(l)}}i[ot]=t,i[ct]=r;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=i;e:switch(Ct(i,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&vr(t)}}return et(t),du(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&vr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=F.current,da(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,l=jt,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||hh(e.nodeValue,n)),e||$r(t,!0)}else e=mo(e).createTextNode(r),e[ot]=t,t.stateNode=e}return et(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=da(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ot]=t}else zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),e=!1}else n=Sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(dn(t),t):(dn(t),null);if((t.flags&128)!==0)throw Error(s(558))}return et(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[ot]=t}else zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),l=!1}else l=Sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(dn(t),t):(dn(t),null)}return dn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==l&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Zs(t,t.updateQueue),et(t),null);case 4:return Ce(),e===null&&Cu(t.stateNode.containerInfo),et(t),null;case 10:return _r(t.type),et(t),null;case 19:if(L(ut),r=t.memoizedState,r===null)return et(t),null;if(l=(t.flags&128)!==0,i=r.rendering,i===null)if(l)ki(r,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Us(e),i!==null){for(t.flags|=128,ki(r,!1),e=i.updateQueue,t.updateQueue=e,Zs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xf(n,e),n=n.sibling;return Z(ut,ut.current&1|2),Oe&&hr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&bt()>no&&(t.flags|=128,l=!0,ki(r,!1),t.lanes=4194304)}else{if(!l)if(e=Us(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Zs(t,e),ki(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!Oe)return et(t),null}else 2*bt()-r.renderingStartTime>no&&n!==536870912&&(t.flags|=128,l=!0,ki(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(e=r.last,e!==null?e.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=bt(),e.sibling=null,n=ut.current,Z(ut,l?n&1|2:n&1),Oe&&hr(t,r.treeForkCount),e):(et(t),null);case 22:case 23:return dn(t),zc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),n=t.updateQueue,n!==null&&Zs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&L(Ul),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_r(mt),et(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function L_(e,t){switch(vc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(mt),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return In(t),null;case 31:if(t.memoizedState!==null){if(dn(t),t.alternate===null)throw Error(s(340));zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(ut),null;case 4:return Ce(),null;case 10:return _r(t.type),null;case 22:case 23:return dn(t),zc(),e!==null&&L(Ul),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _r(mt),null;case 25:return null;default:return null}}function ym(e,t){switch(vc(t),t.tag){case 3:_r(mt),Ce();break;case 26:case 27:case 5:In(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&dn(t);break;case 13:dn(t);break;case 19:L(ut);break;case 10:_r(t.type);break;case 22:case 23:dn(t),zc(),e!==null&&L(Ul);break;case 24:_r(mt)}}function Ni(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var l=r.next;n=l;do{if((n.tag&e)===e){r=void 0;var i=n.create,h=n.inst;r=i(),h.destroy=r}n=n.next}while(n!==l)}}catch(_){qe(t,t.return,_)}}function Zr(e,t,n){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var i=l.next;r=i;do{if((r.tag&e)===e){var h=r.inst,_=h.destroy;if(_!==void 0){h.destroy=void 0,l=t;var w=n,A=_;try{A()}catch(H){qe(l,w,H)}}}r=r.next}while(r!==i)}}catch(H){qe(t,t.return,H)}}function vm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ud(t,n)}catch(r){qe(e,e.return,r)}}}function xm(e,t,n){n.props=ql(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){qe(e,t,r)}}function Ri(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(l){qe(e,t,l)}}function tr(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(l){qe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){qe(e,t,l)}else n.current=null}function Sm(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(l){qe(e,e.return,l)}}function mu(e,t,n){try{var r=e.stateNode;ag(r,e.type,n,t),r[ct]=t}catch(l){qe(e,e.return,l)}}function wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ll(e.type)||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nt));else if(r!==4&&(r===27&&ll(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function Ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ll(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}function Em(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ct(t,r,n),t[ot]=e,t[ct]=n}catch(i){qe(e,e.return,i)}}var xr=!1,_t=!1,_u=!1,km=typeof WeakSet=="function"?WeakSet:Set,kt=null;function U_(e,t){if(e=e.containerInfo,Lu=vo,e=ci(e),cc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var h=0,_=-1,w=-1,A=0,H=0,q=e,O=null;t:for(;;){for(var B;q!==n||l!==0&&q.nodeType!==3||(_=h+l),q!==i||r!==0&&q.nodeType!==3||(w=h+r),q.nodeType===3&&(h+=q.nodeValue.length),(B=q.firstChild)!==null;)O=q,q=B;for(;;){if(q===e)break t;if(O===n&&++A===l&&(_=h),O===i&&++H===r&&(w=h),(B=q.nextSibling)!==null)break;q=O,O=q.parentNode}q=B}n=_===-1||w===-1?null:{start:_,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uu={focusedElem:e,selectionRange:n},vo=!1,kt=t;kt!==null;)if(t=kt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,kt=e;else for(;kt!==null;){switch(t=kt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var ae=ql(n.type,l);e=r.getSnapshotBeforeUpdate(ae,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(pe){qe(n,n.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Vu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,kt=e;break}kt=t.return}}function Nm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:wr(e,n),r&4&&Ni(5,n);break;case 1:if(wr(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){qe(n,n.return,h)}else{var l=ql(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){qe(n,n.return,h)}}r&64&&vm(n),r&512&&Ri(n,n.return);break;case 3:if(wr(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ud(e,t)}catch(h){qe(n,n.return,h)}}break;case 27:t===null&&r&4&&Em(n);case 26:case 5:wr(e,n),t===null&&r&4&&Sm(n),r&512&&Ri(n,n.return);break;case 12:wr(e,n);break;case 31:wr(e,n),r&4&&Mm(e,n);break;case 13:wr(e,n),r&4&&Am(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=K_.bind(null,n),mg(e,n))));break;case 22:if(r=n.memoizedState!==null||xr,!r){t=t!==null&&t.memoizedState!==null||_t,l=xr;var i=_t;xr=r,(_t=t)&&!i?Er(e,n,(n.subtreeFlags&8772)!==0):wr(e,n),xr=l,_t=i}break;case 30:break;default:wr(e,n)}}function Rm(e){var t=e.alternate;t!==null&&(e.alternate=null,Rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var lt=null,Zt=!1;function Sr(e,t,n){for(n=n.child;n!==null;)Tm(e,t,n),n=n.sibling}function Tm(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:_t||tr(n,t),Sr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_t||tr(n,t);var r=lt,l=Zt;ll(n.type)&&(lt=n.stateNode,Zt=!1),Sr(e,t,n),Bi(n.stateNode),lt=r,Zt=l;break;case 5:_t||tr(n,t);case 6:if(r=lt,l=Zt,lt=null,Sr(e,t,n),lt=r,Zt=l,lt!==null)if(Zt)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(n.stateNode)}catch(i){qe(n,t,i)}else try{lt.removeChild(n.stateNode)}catch(i){qe(n,t,i)}break;case 18:lt!==null&&(Zt?(e=lt,vh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Oa(e)):vh(lt,n.stateNode));break;case 4:r=lt,l=Zt,lt=n.stateNode.containerInfo,Zt=!0,Sr(e,t,n),lt=r,Zt=l;break;case 0:case 11:case 14:case 15:Zr(2,n,t),_t||Zr(4,n,t),Sr(e,t,n);break;case 1:_t||(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&xm(n,t,r)),Sr(e,t,n);break;case 21:Sr(e,t,n);break;case 22:_t=(r=_t)||n.memoizedState!==null,Sr(e,t,n),_t=r;break;default:Sr(e,t,n)}}function Mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oa(e)}catch(n){qe(t,t.return,n)}}}function Am(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oa(e)}catch(n){qe(t,t.return,n)}}function H_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new km),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new km),t;default:throw Error(s(435,e.tag))}}function Js(e,t){var n=H_(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var l=P_.bind(null,e,r);r.then(l,l)}})}function Wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r],i=e,h=t,_=h;e:for(;_!==null;){switch(_.tag){case 27:if(ll(_.type)){lt=_.stateNode,Zt=!1;break e}break;case 5:lt=_.stateNode,Zt=!1;break e;case 3:case 4:lt=_.stateNode.containerInfo,Zt=!0;break e}_=_.return}if(lt===null)throw Error(s(160));Tm(i,h,l),lt=null,Zt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}var qn=null;function jm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wt(t,e),Jt(e),r&4&&(Zr(3,e,e.return),Ni(3,e),Zr(5,e,e.return));break;case 1:Wt(t,e),Jt(e),r&512&&(_t||n===null||tr(n,n.return)),r&64&&xr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var l=qn;if(Wt(t,e),Jt(e),r&512&&(_t||n===null||tr(n,n.return)),r&4){var i=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(r){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Hn]||i[ot]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(r),l.head.insertBefore(i,l.querySelector("head > title"))),Ct(i,r,n),i[ot]=e,Ze(i),r=i;break e;case"link":var h=jh("link","href",l).get(r+(n.href||""));if(h){for(var _=0;_<h.length;_++)if(i=h[_],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(_,1);break t}}i=l.createElement(r),Ct(i,r,n),l.head.appendChild(i);break;case"meta":if(h=jh("meta","content",l).get(r+(n.content||""))){for(_=0;_<h.length;_++)if(i=h[_],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(_,1);break t}}i=l.createElement(r),Ct(i,r,n),l.head.appendChild(i);break;default:throw Error(s(468,r))}i[ot]=e,Ze(i),r=i}e.stateNode=r}else Dh(l,e.type,e.stateNode);else e.stateNode=Ah(l,r,e.memoizedProps);else i!==r?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,r===null?Dh(l,e.type,e.stateNode):Ah(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&mu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Wt(t,e),Jt(e),r&512&&(_t||n===null||tr(n,n.return)),n!==null&&r&4&&mu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Wt(t,e),Jt(e),r&512&&(_t||n===null||tr(n,n.return)),e.flags&32){l=e.stateNode;try{tt(l,"")}catch(ae){qe(e,e.return,ae)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,mu(e,l,n!==null?n.memoizedProps:l)),r&1024&&(_u=!0);break;case 6:if(Wt(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ae){qe(e,e.return,ae)}}break;case 3:if(_o=null,l=qn,qn=ho(t.containerInfo),Wt(t,e),qn=l,Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(t.containerInfo)}catch(ae){qe(e,e.return,ae)}_u&&(_u=!1,Dm(e));break;case 4:r=qn,qn=ho(e.stateNode.containerInfo),Wt(t,e),Jt(e),qn=r;break;case 12:Wt(t,e),Jt(e);break;case 31:Wt(t,e),Jt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Js(e,r)));break;case 13:Wt(t,e),Jt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(to=bt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Js(e,r)));break;case 22:l=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,A=xr,H=_t;if(xr=A||l,_t=H||w,Wt(t,e),_t=H,xr=A,Jt(e),r&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||w||xr||_t||$l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(i=w.stateNode,l)h=i.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{_=w.stateNode;var q=w.memoizedProps.style,O=q!=null&&q.hasOwnProperty("display")?q.display:null;_.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ae){qe(w,w.return,ae)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=l?"":w.memoizedProps}catch(ae){qe(w,w.return,ae)}}}else if(t.tag===18){if(n===null){w=t;try{var B=w.stateNode;l?xh(B,!0):xh(w.stateNode,!1)}catch(ae){qe(w,w.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Js(e,n))));break;case 19:Wt(t,e),Jt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Js(e,r)));break;case 30:break;case 21:break;default:Wt(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(wm(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,i=hu(e);Ws(e,i,l);break;case 5:var h=n.stateNode;n.flags&32&&(tt(h,""),n.flags&=-33);var _=hu(e);Ws(e,_,h);break;case 3:case 4:var w=n.stateNode.containerInfo,A=hu(e);pu(e,A,w);break;default:throw Error(s(161))}}catch(H){qe(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nm(e,t.alternate,t),t=t.sibling}function $l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zr(4,t,t.return),$l(t);break;case 1:tr(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&xm(t,t.return,n),$l(t);break;case 27:Bi(t.stateNode);case 26:case 5:tr(t,t.return),$l(t);break;case 22:t.memoizedState===null&&$l(t);break;case 30:$l(t);break;default:$l(t)}e=e.sibling}}function Er(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,l=e,i=t,h=i.flags;switch(i.tag){case 0:case 11:case 15:Er(l,i,n),Ni(4,i);break;case 1:if(Er(l,i,n),r=i,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){qe(r,r.return,A)}if(r=i,l=r.updateQueue,l!==null){var _=r.stateNode;try{var w=l.shared.hiddenCallbacks;if(w!==null)for(l.shared.hiddenCallbacks=null,l=0;l<w.length;l++)cd(w[l],_)}catch(A){qe(r,r.return,A)}}n&&h&64&&vm(i),Ri(i,i.return);break;case 27:Em(i);case 26:case 5:Er(l,i,n),n&&r===null&&h&4&&Sm(i),Ri(i,i.return);break;case 12:Er(l,i,n);break;case 31:Er(l,i,n),n&&h&4&&Mm(l,i);break;case 13:Er(l,i,n),n&&h&4&&Am(l,i);break;case 22:i.memoizedState===null&&Er(l,i,n),Ri(i,i.return);break;case 30:break;default:Er(l,i,n)}t=t.sibling}}function gu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&mi(n))}function bu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mi(e))}function $n(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Om(e,t,n,r),t=t.sibling}function Om(e,t,n,r){var l=t.flags;switch(t.tag){case 0:case 11:case 15:$n(e,t,n,r),l&2048&&Ni(9,t);break;case 1:$n(e,t,n,r);break;case 3:$n(e,t,n,r),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mi(e)));break;case 12:if(l&2048){$n(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,h=i.id,_=i.onPostCommit;typeof _=="function"&&_(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){qe(t,t.return,w)}}else $n(e,t,n,r);break;case 31:$n(e,t,n,r);break;case 13:$n(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,h=t.alternate,t.memoizedState!==null?i._visibility&2?$n(e,t,n,r):Ti(e,t):i._visibility&2?$n(e,t,n,r):(i._visibility|=2,Sa(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),l&2048&&gu(h,t);break;case 24:$n(e,t,n,r),l&2048&&bu(t.alternate,t);break;default:$n(e,t,n,r)}}function Sa(e,t,n,r,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,h=t,_=n,w=r,A=h.flags;switch(h.tag){case 0:case 11:case 15:Sa(i,h,_,w,l),Ni(8,h);break;case 23:break;case 22:var H=h.stateNode;h.memoizedState!==null?H._visibility&2?Sa(i,h,_,w,l):Ti(i,h):(H._visibility|=2,Sa(i,h,_,w,l)),l&&A&2048&&gu(h.alternate,h);break;case 24:Sa(i,h,_,w,l),l&&A&2048&&bu(h.alternate,h);break;default:Sa(i,h,_,w,l)}t=t.sibling}}function Ti(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,l=r.flags;switch(r.tag){case 22:Ti(n,r),l&2048&&gu(r.alternate,r);break;case 24:Ti(n,r),l&2048&&bu(r.alternate,r);break;default:Ti(n,r)}t=t.sibling}}var Mi=8192;function wa(e,t,n){if(e.subtreeFlags&Mi)for(e=e.child;e!==null;)Cm(e,t,n),e=e.sibling}function Cm(e,t,n){switch(e.tag){case 26:wa(e,t,n),e.flags&Mi&&e.memoizedState!==null&&kg(n,qn,e.memoizedState,e.memoizedProps);break;case 5:wa(e,t,n);break;case 3:case 4:var r=qn;qn=ho(e.stateNode.containerInfo),wa(e,t,n),qn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Mi,Mi=16777216,wa(e,t,n),Mi=r):wa(e,t,n));break;default:wa(e,t,n)}}function zm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];kt=r,Lm(r,e)}zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bm(e),e=e.sibling}function Bm(e){switch(e.tag){case 0:case 11:case 15:Ai(e),e.flags&2048&&Zr(9,e,e.return);break;case 3:Ai(e);break;case 12:Ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,eo(e)):Ai(e);break;default:Ai(e)}}function eo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];kt=r,Lm(r,e)}zm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zr(8,t,t.return),eo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,eo(t));break;default:eo(t)}e=e.sibling}}function Lm(e,t){for(;kt!==null;){var n=kt;switch(n.tag){case 0:case 11:case 15:Zr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:mi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,kt=r;else e:for(n=e;kt!==null;){r=kt;var l=r.sibling,i=r.return;if(Rm(r),r===n){kt=null;break e}if(l!==null){l.return=i,kt=l;break e}kt=i}}}var G_={getCacheForType:function(e){var t=Dt(mt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Dt(mt).controller.signal}},V_=typeof WeakMap=="function"?WeakMap:Map,He=0,Pe=null,Re=null,Me=0,Ye=0,mn=null,Wr=!1,Ea=!1,yu=!1,kr=0,it=0,Jr=0,Il=0,vu=0,hn=0,ka=0,ji=null,en=null,xu=!1,to=0,Um=0,no=1/0,ro=null,el=null,xt=0,tl=null,Na=null,Nr=0,Su=0,wu=null,Hm=null,Di=0,Eu=null;function pn(){return(He&2)!==0&&Me!==0?Me&-Me:C.T!==null?Au():st()}function Gm(){if(hn===0)if((Me&536870912)===0||Oe){var e=Yt;Yt<<=1,(Yt&3932160)===0&&(Yt=262144),hn=e}else hn=536870912;return e=fn.current,e!==null&&(e.flags|=32),hn}function tn(e,t,n){(e===Pe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Ra(e,0),nl(e,Me,hn,!1)),_l(e,n),((He&2)===0||e!==Pe)&&(e===Pe&&((He&2)===0&&(Il|=n),it===4&&nl(e,Me,hn,!1)),nr(e))}function Vm(e,t,n){if((He&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Bt(e,t),l=r?$_(e,t):Nu(e,t,!0),i=r;do{if(l===0){Ea&&!r&&nl(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Y_(n)){l=Nu(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var _=e;l=ji;var w=_.current.memoizedState.isDehydrated;if(w&&(Ra(_,h).flags|=256),h=Nu(_,h,!1),h!==2){if(yu&&!w){_.errorRecoveryDisabledLanes|=i,Il|=i,l=4;break e}i=en,en=l,i!==null&&(en===null?en=i:en.push.apply(en,i))}l=h}if(i=!1,l!==2)continue}}if(l===1){Ra(e,0),nl(e,t,0,!0);break}e:{switch(r=e,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:nl(r,t,hn,!Wr);break e;case 2:en=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=to+300-bt(),10<l)){if(nl(r,t,hn,!Wr),dt(r,0,!0)!==0)break e;Nr=t,r.timeoutHandle=bh(Ym.bind(null,r,n,en,ro,xu,t,hn,Il,ka,Wr,i,"Throttled",-0,0),l);break e}Ym(r,n,en,ro,xu,t,hn,Il,ka,Wr,i,null,-0,0)}}break}while(!0);nr(e)}function Ym(e,t,n,r,l,i,h,_,w,A,H,q,O,B){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nt},Cm(t,i,q);var ae=(i&62914560)===i?to-bt():(i&4194048)===i?Um-bt():0;if(ae=Ng(q,ae),ae!==null){Nr=i,e.cancelPendingCommit=ae(Qm.bind(null,e,t,i,n,r,l,h,_,w,H,q,null,O,B)),nl(e,i,h,!A);return}}Qm(e,t,i,n,r,l,h,_,w)}function Y_(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!At(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nl(e,t,n,r){t&=~vu,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var i=31-Nt(l),h=1<<i;r[i]=-1,l&=~h}n!==0&&rs(e,n,t)}function lo(){return(He&6)===0?(Oi(0),!1):!0}function ku(){if(Re!==null){if(Ye===0)var e=Re.return;else e=Re,pr=Bl=null,Vc(e),ga=null,pi=0,e=Re;for(;e!==null;)ym(e.alternate,e),e=e.return;Re=null}}function Ra(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,og(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Nr=0,ku(),Pe=e,Re=n=mr(e.current,null),Me=t,Ye=0,mn=null,Wr=!1,Ea=Bt(e,t),yu=!1,ka=hn=vu=Il=Jr=it=0,en=ji=null,xu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var l=31-Nt(r),i=1<<l;t|=e[l],r&=~i}return kr=t,ks(),n}function qm(e,t){we=null,C.H=wi,t===_a||t===Os?(t=ad(),Ye=3):t===Mc?(t=ad(),Ye=4):Ye=t===ru?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mn=t,Re===null&&(it=1,Ks(e,kn(t,e.current)))}function $m(){var e=fn.current;return e===null?!0:(Me&4194048)===Me?Mn===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Mn:!1}function Im(){var e=C.H;return C.H=wi,e===null?wi:e}function Xm(){var e=C.A;return C.A=G_,e}function ao(){it=4,Wr||(Me&4194048)!==Me&&fn.current!==null||(Ea=!0),(Jr&134217727)===0&&(Il&134217727)===0||Pe===null||nl(Pe,Me,hn,!1)}function Nu(e,t,n){var r=He;He|=2;var l=Im(),i=Xm();(Pe!==e||Me!==t)&&(ro=null,Ra(e,t)),t=!1;var h=it;e:do try{if(Ye!==0&&Re!==null){var _=Re,w=mn;switch(Ye){case 8:ku(),h=6;break e;case 3:case 2:case 9:case 6:fn.current===null&&(t=!0);var A=Ye;if(Ye=0,mn=null,Ta(e,_,w,A),n&&Ea){h=0;break e}break;default:A=Ye,Ye=0,mn=null,Ta(e,_,w,A)}}q_(),h=it;break}catch(H){qm(e,H)}while(!0);return t&&e.shellSuspendCounter++,pr=Bl=null,He=r,C.H=l,C.A=i,Re===null&&(Pe=null,Me=0,ks()),h}function q_(){for(;Re!==null;)Km(Re)}function $_(e,t){var n=He;He|=2;var r=Im(),l=Xm();Pe!==e||Me!==t?(ro=null,no=bt()+500,Ra(e,t)):Ea=Bt(e,t);e:do try{if(Ye!==0&&Re!==null){t=Re;var i=mn;t:switch(Ye){case 1:Ye=0,mn=null,Ta(e,t,i,1);break;case 2:case 9:if(rd(i)){Ye=0,mn=null,Pm(t);break}t=function(){Ye!==2&&Ye!==9||Pe!==e||(Ye=7),nr(e)},i.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:rd(i)?(Ye=0,mn=null,Pm(t)):(Ye=0,mn=null,Ta(e,t,i,7));break;case 5:var h=null;switch(Re.tag){case 26:h=Re.memoizedState;case 5:case 27:var _=Re;if(h?Oh(h):_.stateNode.complete){Ye=0,mn=null;var w=_.sibling;if(w!==null)Re=w;else{var A=_.return;A!==null?(Re=A,io(A)):Re=null}break t}}Ye=0,mn=null,Ta(e,t,i,5);break;case 6:Ye=0,mn=null,Ta(e,t,i,6);break;case 8:ku(),it=6;break e;default:throw Error(s(462))}}I_();break}catch(H){qm(e,H)}while(!0);return pr=Bl=null,C.H=r,C.A=l,He=n,Re!==null?0:(Pe=null,Me=0,ks(),it)}function I_(){for(;Re!==null&&!Fl();)Km(Re)}function Km(e){var t=gm(e.alternate,e,kr);e.memoizedProps=e.pendingProps,t===null?io(e):Re=t}function Pm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fm(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=fm(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Vc(t);default:ym(n,t),t=Re=Xf(t,kr),t=gm(n,t,kr)}e.memoizedProps=e.pendingProps,t===null?io(e):Re=t}function Ta(e,t,n,r){pr=Bl=null,Vc(t),ga=null,pi=0;var l=t.return;try{if(O_(e,l,t,n,Me)){it=1,Ks(e,kn(n,e.current)),Re=null;return}}catch(i){if(l!==null)throw Re=l,i;it=1,Ks(e,kn(n,e.current)),Re=null;return}t.flags&32768?(Oe||r===1?e=!0:Ea||(Me&536870912)!==0?e=!1:(Wr=e=!0,(r===2||r===9||r===3||r===6)&&(r=fn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fm(t,e)):io(t)}function io(e){var t=e;do{if((t.flags&32768)!==0){Fm(t,Wr);return}e=t.return;var n=B_(t.alternate,t,kr);if(n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);it===0&&(it=5)}function Fm(e,t){do{var n=L_(e.alternate,e);if(n!==null){n.flags&=32767,Re=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Re=e;return}Re=e=n}while(e!==null);it=6,Re=null}function Qm(e,t,n,r,l,i,h,_,w){e.cancelPendingCommit=null;do so();while(xt!==0);if((He&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=hc,lr(e,n,i,h,_,w),e===Pe&&(Re=Pe=null,Me=0),Na=t,tl=e,Nr=n,Su=i,wu=l,Hm=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,F_(hl,function(){return th(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=C.T,C.T=null,l=Q.p,Q.p=2,h=He,He|=4;try{U_(e,t,n)}finally{He=h,Q.p=l,C.T=r}}xt=1,Zm(),Wm(),Jm()}}function Zm(){if(xt===1){xt=0;var e=tl,t=Na,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var r=Q.p;Q.p=2;var l=He;He|=4;try{jm(t,e);var i=Uu,h=ci(e.containerInfo),_=i.focusedElem,w=i.selectionRange;if(h!==_&&_&&_.ownerDocument&&ws(_.ownerDocument.documentElement,_)){if(w!==null&&cc(_)){var A=w.start,H=w.end;if(H===void 0&&(H=A),"selectionStart"in _)_.selectionStart=A,_.selectionEnd=Math.min(H,_.value.length);else{var q=_.ownerDocument||document,O=q&&q.defaultView||window;if(O.getSelection){var B=O.getSelection(),ae=_.textContent.length,pe=Math.min(w.start,ae),Xe=w.end===void 0?pe:Math.min(w.end,ae);!B.extend&&pe>Xe&&(h=Xe,Xe=pe,pe=h);var R=Vr(_,pe),k=Vr(_,Xe);if(R&&k&&(B.rangeCount!==1||B.anchorNode!==R.node||B.anchorOffset!==R.offset||B.focusNode!==k.node||B.focusOffset!==k.offset)){var M=q.createRange();M.setStart(R.node,R.offset),B.removeAllRanges(),pe>Xe?(B.addRange(M),B.extend(k.node,k.offset)):(M.setEnd(k.node,k.offset),B.addRange(M))}}}}for(q=[],B=_;B=B.parentNode;)B.nodeType===1&&q.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<q.length;_++){var V=q[_];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}vo=!!Lu,Uu=Lu=null}finally{He=l,Q.p=r,C.T=n}}e.current=t,xt=2}}function Wm(){if(xt===2){xt=0;var e=tl,t=Na,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var r=Q.p;Q.p=2;var l=He;He|=4;try{Nm(e,t.alternate,t)}finally{He=l,Q.p=r,C.T=n}}xt=3}}function Jm(){if(xt===4||xt===3){xt=0,Dr();var e=tl,t=Na,n=Nr,r=Hm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,Na=tl=null,eh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(el=null),vn(n),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=C.T,l=Q.p,Q.p=2,C.T=null;try{for(var i=e.onRecoverableError,h=0;h<r.length;h++){var _=r[h];i(_.value,{componentStack:_.stack})}}finally{C.T=t,Q.p=l}}(Nr&3)!==0&&so(),nr(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Eu?Di++:(Di=0,Eu=e):Di=0,Oi(0)}}function eh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mi(t)))}function so(){return Zm(),Wm(),Jm(),th()}function th(){if(xt!==5)return!1;var e=tl,t=Su;Su=0;var n=vn(Nr),r=C.T,l=Q.p;try{Q.p=32>n?32:n,C.T=null,n=wu,wu=null;var i=tl,h=Nr;if(xt=0,Na=tl=null,Nr=0,(He&6)!==0)throw Error(s(331));var _=He;if(He|=4,Bm(i.current),Om(i,i.current,h,n),He=_,Oi(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(pl,i)}catch{}return!0}finally{Q.p=l,C.T=r,eh(e,t)}}function nh(e,t,n){t=kn(n,t),t=nu(e.stateNode,t,2),e=Pr(e,t,2),e!==null&&(_l(e,2),nr(e))}function qe(e,t,n){if(e.tag===3)nh(e,e,n);else for(;t!==null;){if(t.tag===3){nh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(el===null||!el.has(r))){e=kn(n,e),n=rm(2),r=Pr(t,n,2),r!==null&&(lm(n,r,t,e),_l(r,2),nr(r));break}}t=t.return}}function Ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new V_;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(yu=!0,l.add(n),e=X_.bind(null,e,t,n),t.then(e,e))}function X_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(Me&n)===n&&(it===4||it===3&&(Me&62914560)===Me&&300>bt()-to?(He&2)===0&&Ra(e,0):vu|=n,ka===Me&&(ka=0)),nr(e)}function rh(e,t){t===0&&(t=Ia()),e=Ol(e,t),e!==null&&(_l(e,t),nr(e))}function K_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rh(e,n)}function P_(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),rh(e,n)}function F_(e,t){return jr(e,t)}var oo=null,Ma=null,Tu=!1,co=!1,Mu=!1,rl=0;function nr(e){e!==Ma&&e.next===null&&(Ma===null?oo=Ma=e:Ma=Ma.next=e),co=!0,Tu||(Tu=!0,Z_())}function Oi(e,t){if(!Mu&&co){Mu=!0;do for(var n=!1,r=oo;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var i=0;else{var h=r.suspendedLanes,_=r.pingedLanes;i=(1<<31-Nt(42|e)+1)-1,i&=l&~(h&~_),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,sh(r,i))}else i=Me,i=dt(r,r===Pe?i:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(i&3)===0||Bt(r,i)||(n=!0,sh(r,i));r=r.next}while(n);Mu=!1}}function Q_(){lh()}function lh(){co=Tu=!1;var e=0;rl!==0&&sg()&&(e=rl);for(var t=bt(),n=null,r=oo;r!==null;){var l=r.next,i=ah(r,t);i===0?(r.next=null,n===null?oo=l:n.next=l,l===null&&(Ma=n)):(n=r,(e!==0||(i&3)!==0)&&(co=!0)),r=l}xt!==0&&xt!==5||Oi(e),rl!==0&&(rl=0)}function ah(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var h=31-Nt(i),_=1<<h,w=l[h];w===-1?((_&n)===0||(_&r)!==0)&&(l[h]=Go(_,t)):w<=t&&(e.expiredLanes|=_),i&=~_}if(t=Pe,n=Me,n=dt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&yn(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Bt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&yn(r),vn(n)){case 2:case 8:n=$a;break;case 32:n=hl;break;case 268435456:n=nn;break;default:n=hl}return r=ih.bind(null,e),n=jr(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&yn(r),e.callbackPriority=2,e.callbackNode=null,2}function ih(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var r=Me;return r=dt(e,e===Pe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Vm(e,r,t),ah(e,bt()),e.callbackNode!=null&&e.callbackNode===n?ih.bind(null,e):null)}function sh(e,t){if(so())return null;Vm(e,t,!0)}function Z_(){cg(function(){(He&6)!==0?jr(ml,Q_):lh()})}function Au(){if(rl===0){var e=ha;e===0&&(e=Kn,Kn<<=1,(Kn&261888)===0&&(Kn=256)),rl=e}return rl}function oh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lr(""+e)}function ch(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function W_(e,t,n,r,l){if(t==="submit"&&n&&n.stateNode===l){var i=oh((l[ct]||null).action),h=r.submitter;h&&(t=(t=h[ct]||null)?oh(t.formAction):h.getAttribute("formAction"),t!==null&&(i=t,h=null));var _=new ra("action","action",null,r,l);e.push({event:_,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rl!==0){var w=h?ch(l,h):new FormData(l);Qc(n,{pending:!0,data:w,method:l.method,action:i},null,w)}}else typeof i=="function"&&(_.preventDefault(),w=h?ch(l,h):new FormData(l),Qc(n,{pending:!0,data:w,method:l.method,action:i},i,w))},currentTarget:l}]})}}for(var ju=0;ju<mc.length;ju++){var Du=mc[ju],J_=Du.toLowerCase(),eg=Du[0].toUpperCase()+Du.slice(1);Yn(J_,"on"+eg)}Yn(Gf,"onAnimationEnd"),Yn(Vf,"onAnimationIteration"),Yn(Yf,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn(__,"onTransitionRun"),Yn(g_,"onTransitionStart"),Yn(b_,"onTransitionCancel"),Yn(qf,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),an("onBeforeInput",["compositionend","keypress","textInput","paste"]),an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ci));function uh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var h=r.length-1;0<=h;h--){var _=r[h],w=_.instance,A=_.currentTarget;if(_=_.listener,w!==i&&l.isPropagationStopped())break e;i=_,l.currentTarget=A;try{i(l)}catch(H){Es(H)}l.currentTarget=null,i=w}else for(h=0;h<r.length;h++){if(_=r[h],w=_.instance,A=_.currentTarget,_=_.listener,w!==i&&l.isPropagationStopped())break e;i=_,l.currentTarget=A;try{i(l)}catch(H){Es(H)}l.currentTarget=null,i=w}}}}function Te(e,t){var n=t[Ln];n===void 0&&(n=t[Ln]=new Set);var r=e+"__bubble";n.has(r)||(fh(t,e,2,!1),n.add(r))}function Ou(e,t,n){var r=0;t&&(r|=4),fh(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Cu(e){if(!e[uo]){e[uo]=!0,ir.forEach(function(n){n!=="selectionchange"&&(tg.has(n)||Ou(n,!1,e),Ou(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,Ou("selectionchange",!1,t))}}function fh(e,t,n,r){switch(Gh(t)){case 2:var l=Mg;break;case 8:l=Ag;break;default:l=Fu}n=l.bind(null,t,n,e),l=void 0,!Ja||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function zu(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var _=r.stateNode.containerInfo;if(_===l)break;if(h===4)for(h=r.return;h!==null;){var w=h.tag;if((w===3||w===4)&&h.stateNode.containerInfo===l)return;h=h.return}for(;_!==null;){if(h=Fn(_),h===null)return;if(w=h.tag,w===5||w===6||w===26||w===27){r=i=h;continue e}_=_.parentNode}}r=r.return}vl(function(){var A=i,H=Wa(n),q=[];e:{var O=$f.get(e);if(O!==void 0){var B=ra,ae=e;switch(e){case"keypress":if(Wn(n)===0)break e;case"keydown":case"keyup":B=ps;break;case"focusin":ae="focus",B=ri;break;case"focusout":ae="blur",B=ri;break;case"beforeblur":case"afterblur":B=ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Yo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=tc;break;case Gf:case Vf:case Yf:B=Io;break;case qf:B=nc;break;case"scroll":case"scrollend":B=ds;break;case"wheel":B=lc;break;case"copy":case"cut":case"paste":B=Ko;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=ai;break;case"toggle":case"beforetoggle":B=ic}var pe=(t&4)!==0,Xe=!pe&&(e==="scroll"||e==="scrollend"),R=pe?O!==null?O+"Capture":null:O;pe=[];for(var k=A,M;k!==null;){var V=k;if(M=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||M===null||R===null||(V=Qn(k,R),V!=null&&pe.push(zi(k,V,M))),Xe)break;k=k.return}0<pe.length&&(O=new B(O,ae,null,n,H),q.push({event:O,listeners:pe}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",O&&n!==sr&&(ae=n.relatedTarget||n.fromElement)&&(Fn(ae)||ae[Tt]))break e;if((B||O)&&(O=H.window===H?H:(O=H.ownerDocument)?O.defaultView||O.parentWindow:window,B?(ae=n.relatedTarget||n.toElement,B=A,ae=ae?Fn(ae):null,ae!==null&&(Xe=m(ae),pe=ae.tag,ae!==Xe||pe!==5&&pe!==27&&pe!==6)&&(ae=null)):(B=null,ae=A),B!==ae)){if(pe=ni,V="onMouseLeave",R="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(pe=ai,V="onPointerLeave",R="onPointerEnter",k="pointer"),Xe=B==null?O:Vn(B),M=ae==null?O:Vn(ae),O=new pe(V,k+"leave",B,n,H),O.target=Xe,O.relatedTarget=M,V=null,Fn(H)===A&&(pe=new pe(R,k+"enter",ae,n,H),pe.target=M,pe.relatedTarget=Xe,V=pe),Xe=V,B&&ae)t:{for(pe=ng,R=B,k=ae,M=0,V=R;V;V=pe(V))M++;V=0;for(var me=k;me;me=pe(me))V++;for(;0<M-V;)R=pe(R),M--;for(;0<V-M;)k=pe(k),V--;for(;M--;){if(R===k||k!==null&&R===k.alternate){pe=R;break t}R=pe(R),k=pe(k)}pe=null}else pe=null;B!==null&&dh(q,O,B,pe,!1),ae!==null&&Xe!==null&&dh(q,Xe,ae,pe,!0)}}e:{if(O=A?Vn(A):window,B=O.nodeName&&O.nodeName.toLowerCase(),B==="select"||B==="input"&&O.type==="file")var Be=se;else if(Ss(O))if(Se)Be=Gr;else{Be=si;var oe=fr}else B=O.nodeName,!B||B.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?A&&Za(A.elementType)&&(Be=se):Be=Al;if(Be&&(Be=Be(e,A))){d(q,Be,n,H);break e}oe&&oe(e,O,A),e==="focusout"&&A&&O.type==="number"&&A.memoizedProps.value!=null&&Fa(O,"number",O.value)}switch(oe=A?Vn(A):window,e){case"focusin":(Ss(oe)||oe.contentEditable==="true")&&(ia=oe,uc=A,ui=null);break;case"focusout":ui=uc=ia=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Uf(q,n,H);break;case"selectionchange":if(p_)break;case"keydown":case"keyup":Uf(q,n,H)}var ke;if(Tl)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else cr?Hr(e,n)&&(Ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ae="onCompositionStart");Ae&&(bs&&n.locale!=="ko"&&(cr||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&cr&&(ke=ei()):(Zn=H,cn="value"in Zn?Zn.value:Zn.textContent,cr=!0)),oe=fo(A,Ae),0<oe.length&&(Ae=new hs(Ae,e,null,n,H),q.push({event:Ae,listeners:oe}),ke?Ae.data=ke:(ke=Ml(n),ke!==null&&(Ae.data=ke)))),(ke=gs?ii(e,n):xs(e,n))&&(Ae=fo(A,"onBeforeInput"),0<Ae.length&&(oe=new hs("onBeforeInput","beforeinput",null,n,H),q.push({event:oe,listeners:Ae}),oe.data=ke)),W_(q,e,A,n,H)}uh(q,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Qn(e,n),l!=null&&r.unshift(zi(e,l,i)),l=Qn(e,t),l!=null&&r.push(zi(e,l,i))),e.tag===3)return r;e=e.return}return[]}function ng(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dh(e,t,n,r,l){for(var i=t._reactName,h=[];n!==null&&n!==r;){var _=n,w=_.alternate,A=_.stateNode;if(_=_.tag,w!==null&&w===r)break;_!==5&&_!==26&&_!==27||A===null||(w=A,l?(A=Qn(n,i),A!=null&&h.unshift(zi(n,A,w))):l||(A=Qn(n,i),A!=null&&h.push(zi(n,A,w)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var rg=/\r\n?/g,lg=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace(rg,`
`).replace(lg,"")}function hh(e,t){return t=mh(t),mh(e)===t}function Ie(e,t,n,r,l,i){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||tt(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&tt(e,""+r);break;case"className":ea(e,"class",r);break;case"tabIndex":ea(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ea(e,n,r);break;case"style":yl(e,r,i);break;case"data":if(t!=="object"){ea(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Lr(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ie(e,t,"name",l.name,l,null),Ie(e,t,"formEncType",l.formEncType,l,null),Ie(e,t,"formMethod",l.formMethod,l,null),Ie(e,t,"formTarget",l.formTarget,l,null)):(Ie(e,t,"encType",l.encType,l,null),Ie(e,t,"method",l.method,l,null),Ie(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Lr(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=nt);break;case"onScroll":r!=null&&Te("scroll",e);break;case"onScrollEnd":r!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Lr(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Jl(e,"popover",r);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Jl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Qt.get(n)||n,Jl(e,n,r))}}function Bu(e,t,n,r,l,i){switch(n){case"style":yl(e,r,i);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?tt(e,r):(typeof r=="number"||typeof r=="bigint")&&tt(e,""+r);break;case"onScroll":r!=null&&Te("scroll",e);break;case"onScrollEnd":r!=null&&Te("scrollend",e);break;case"onClick":r!=null&&(e.onclick=nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ka.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[ct]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof r=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,l);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Jl(e,n,r)}}}function Ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var r=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ie(e,t,i,h,n,null)}}l&&Ie(e,t,"srcSet",n.srcSet,n,null),r&&Ie(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var _=i=h=l=null,w=null,A=null;for(r in n)if(n.hasOwnProperty(r)){var H=n[r];if(H!=null)switch(r){case"name":l=H;break;case"type":h=H;break;case"checked":w=H;break;case"defaultChecked":A=H;break;case"value":i=H;break;case"defaultValue":_=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:Ie(e,t,r,H,n,null)}}os(e,i,_,w,A,h,l,!1);return;case"select":Te("invalid",e),r=h=i=null;for(l in n)if(n.hasOwnProperty(l)&&(_=n[l],_!=null))switch(l){case"value":i=_;break;case"defaultValue":h=_;break;case"multiple":r=_;default:Ie(e,t,l,_,n,null)}t=i,n=h,e.multiple=!!r,t!=null?xn(e,!!r,t,!1):n!=null&&xn(e,!!r,n,!0);return;case"textarea":Te("invalid",e),i=l=r=null;for(h in n)if(n.hasOwnProperty(h)&&(_=n[h],_!=null))switch(h){case"value":r=_;break;case"defaultValue":l=_;break;case"children":i=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(91));break;default:Ie(e,t,h,_,n,null)}bl(e,r,l,i);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(r=n[w],r!=null))switch(w){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ie(e,t,w,r,n,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(r=0;r<Ci.length;r++)Te(Ci[r],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(r=n[A],r!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ie(e,t,A,r,n,null)}return;default:if(Za(t)){for(H in n)n.hasOwnProperty(H)&&(r=n[H],r!==void 0&&Bu(e,t,H,r,n,void 0));return}}for(_ in n)n.hasOwnProperty(_)&&(r=n[_],r!=null&&Ie(e,t,_,r,n,null))}function ag(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,h=null,_=null,w=null,A=null,H=null;for(B in n){var q=n[B];if(n.hasOwnProperty(B)&&q!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=q;default:r.hasOwnProperty(B)||Ie(e,t,B,null,r,q)}}for(var O in r){var B=r[O];if(q=n[O],r.hasOwnProperty(O)&&(B!=null||q!=null))switch(O){case"type":i=B;break;case"name":l=B;break;case"checked":A=B;break;case"defaultChecked":H=B;break;case"value":h=B;break;case"defaultValue":_=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:B!==q&&Ie(e,t,O,B,r,q)}}Y(e,h,_,w,A,H,i,l);return;case"select":B=h=_=O=null;for(i in n)if(w=n[i],n.hasOwnProperty(i)&&w!=null)switch(i){case"value":break;case"multiple":B=w;default:r.hasOwnProperty(i)||Ie(e,t,i,null,r,w)}for(l in r)if(i=r[l],w=n[l],r.hasOwnProperty(l)&&(i!=null||w!=null))switch(l){case"value":O=i;break;case"defaultValue":_=i;break;case"multiple":h=i;default:i!==w&&Ie(e,t,l,i,r,w)}t=_,n=h,r=B,O!=null?xn(e,!!n,O,!1):!!r!=!!n&&(t!=null?xn(e,!!n,t,!0):xn(e,!!n,n?[]:"",!1));return;case"textarea":B=O=null;for(_ in n)if(l=n[_],n.hasOwnProperty(_)&&l!=null&&!r.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ie(e,t,_,null,r,l)}for(h in r)if(l=r[h],i=n[h],r.hasOwnProperty(h)&&(l!=null||i!=null))switch(h){case"value":O=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&Ie(e,t,h,l,r,i)}Qa(e,O,B);return;case"option":for(var ae in n)if(O=n[ae],n.hasOwnProperty(ae)&&O!=null&&!r.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Ie(e,t,ae,null,r,O)}for(w in r)if(O=r[w],B=n[w],r.hasOwnProperty(w)&&O!==B&&(O!=null||B!=null))switch(w){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Ie(e,t,w,O,r,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in n)O=n[pe],n.hasOwnProperty(pe)&&O!=null&&!r.hasOwnProperty(pe)&&Ie(e,t,pe,null,r,O);for(A in r)if(O=r[A],B=n[A],r.hasOwnProperty(A)&&O!==B&&(O!=null||B!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:Ie(e,t,A,O,r,B)}return;default:if(Za(t)){for(var Xe in n)O=n[Xe],n.hasOwnProperty(Xe)&&O!==void 0&&!r.hasOwnProperty(Xe)&&Bu(e,t,Xe,void 0,r,O);for(H in r)O=r[H],B=n[H],!r.hasOwnProperty(H)||O===B||O===void 0&&B===void 0||Bu(e,t,H,O,r,B);return}}for(var R in n)O=n[R],n.hasOwnProperty(R)&&O!=null&&!r.hasOwnProperty(R)&&Ie(e,t,R,null,r,O);for(q in r)O=r[q],B=n[q],!r.hasOwnProperty(q)||O===B||O==null&&B==null||Ie(e,t,q,O,r,B)}function ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ig(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var l=n[r],i=l.transferSize,h=l.initiatorType,_=l.duration;if(i&&_&&ph(h)){for(h=0,_=l.responseEnd,r+=1;r<n.length;r++){var w=n[r],A=w.startTime;if(A>_)break;var H=w.transferSize,q=w.initiatorType;H&&ph(q)&&(w=w.responseEnd,h+=H*(w<_?1:(_-A)/(w-A)))}if(--r,t+=8*(i+h)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lu=null,Uu=null;function mo(e){return e.nodeType===9?e:e.ownerDocument}function _h(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gu=null;function sg(){var e=window.event;return e&&e.type==="popstate"?e===Gu?!1:(Gu=e,!0):(Gu=null,!1)}var bh=typeof setTimeout=="function"?setTimeout:void 0,og=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,cg=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(e){return yh.resolve(null).then(e).catch(ug)}:bh;function ug(e){setTimeout(function(){throw e})}function ll(e){return e==="head"}function vh(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(l),Oa(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Bi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Bi(n);for(var i=n.firstChild;i;){var h=i.nextSibling,_=i.nodeName;i[Hn]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=h}}else n==="body"&&Bi(e.ownerDocument.body);n=l}while(n);Oa(t)}function xh(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function Vu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vu(n),Gn(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function fg(e,t,n,r){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Hn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=An(e.nextSibling),e===null)break}return null}function dg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=An(e.nextSibling),e===null))return null;return e}function Sh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=An(e.nextSibling),e===null))return null;return e}function Yu(e){return e.data==="$?"||e.data==="$~"}function qu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $u=null;function wh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return An(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Eh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function kh(e,t,n){switch(t=mo(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gn(e)}var jn=new Map,Nh=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rr=Q.d;Q.d={f:hg,r:pg,D:_g,C:gg,L:bg,m:yg,X:xg,S:vg,M:Sg};function hg(){var e=Rr.f(),t=lo();return e||t}function pg(e){var t=qt(e);t!==null&&t.tag===5&&t.type==="form"?qd(t):Rr.r(e)}var Aa=typeof document>"u"?null:document;function Rh(e,t,n){var r=Aa;if(r&&typeof t=="string"&&t){var l=Ut(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Nh.has(l)||(Nh.add(l),e={rel:e,crossOrigin:n,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),Ct(t,"link",e),Ze(t),r.head.appendChild(t)))}}function _g(e){Rr.D(e),Rh("dns-prefetch",e,null)}function gg(e,t){Rr.C(e,t),Rh("preconnect",e,t)}function bg(e,t,n){Rr.L(e,t,n);var r=Aa;if(r&&e&&t){var l='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ut(n.imageSizes)+'"]')):l+='[href="'+Ut(e)+'"]';var i=l;switch(t){case"style":i=ja(e);break;case"script":i=Da(e)}jn.has(i)||(e=N({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),jn.set(i,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(Li(i))||t==="script"&&r.querySelector(Ui(i))||(t=r.createElement("link"),Ct(t,"link",e),Ze(t),r.head.appendChild(t)))}}function yg(e,t){Rr.m(e,t);var n=Aa;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ut(r)+'"][href="'+Ut(e)+'"]',i=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Da(e)}if(!jn.has(i)&&(e=N({rel:"modulepreload",href:e},t),jn.set(i,e),n.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ui(i)))return}r=n.createElement("link"),Ct(r,"link",e),Ze(r),n.head.appendChild(r)}}}function vg(e,t,n){Rr.S(e,t,n);var r=Aa;if(r&&e){var l=Ft(r).hoistableStyles,i=ja(e);t=t||"default";var h=l.get(i);if(!h){var _={loading:0,preload:null};if(h=r.querySelector(Li(i)))_.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},n),(n=jn.get(i))&&Iu(e,n);var w=h=r.createElement("link");Ze(w),Ct(w,"link",e),w._p=new Promise(function(A,H){w.onload=A,w.onerror=H}),w.addEventListener("load",function(){_.loading|=1}),w.addEventListener("error",function(){_.loading|=2}),_.loading|=4,po(h,t,r)}h={type:"stylesheet",instance:h,count:1,state:_},l.set(i,h)}}}function xg(e,t){Rr.X(e,t);var n=Aa;if(n&&e){var r=Ft(n).hoistableScripts,l=Da(e),i=r.get(l);i||(i=n.querySelector(Ui(l)),i||(e=N({src:e,async:!0},t),(t=jn.get(l))&&Xu(e,t),i=n.createElement("script"),Ze(i),Ct(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(l,i))}}function Sg(e,t){Rr.M(e,t);var n=Aa;if(n&&e){var r=Ft(n).hoistableScripts,l=Da(e),i=r.get(l);i||(i=n.querySelector(Ui(l)),i||(e=N({src:e,async:!0,type:"module"},t),(t=jn.get(l))&&Xu(e,t),i=n.createElement("script"),Ze(i),Ct(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(l,i))}}function Th(e,t,n,r){var l=(l=F.current)?ho(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ja(n.href),n=Ft(l).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ja(n.href);var i=Ft(l).hoistableStyles,h=i.get(e);if(h||(l=l.ownerDocument||l,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,h),(i=l.querySelector(Li(e)))&&!i._p&&(h.instance=i,h.state.loading=5),jn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},jn.set(e,n),i||wg(l,e,n,h.state))),t&&r===null)throw Error(s(528,""));return h}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Da(n),n=Ft(l).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ja(e){return'href="'+Ut(e)+'"'}function Li(e){return'link[rel="stylesheet"]['+e+"]"}function Mh(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function wg(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Ct(t,"link",n),Ze(t),e.head.appendChild(t))}function Da(e){return'[src="'+Ut(e)+'"]'}function Ui(e){return"script[async]"+e}function Ah(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(r)return t.instance=r,Ze(r),r;var l=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ze(r),Ct(r,"style",l),po(r,n.precedence,e),t.instance=r;case"stylesheet":l=ja(n.href);var i=e.querySelector(Li(l));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;r=Mh(n),(l=jn.get(l))&&Iu(r,l),i=(e.ownerDocument||e).createElement("link"),Ze(i);var h=i;return h._p=new Promise(function(_,w){h.onload=_,h.onerror=w}),Ct(i,"link",r),t.state.loading|=4,po(i,n.precedence,e),t.instance=i;case"script":return i=Da(n.src),(l=e.querySelector(Ui(i)))?(t.instance=l,Ze(l),l):(r=n,(l=jn.get(i))&&(r=N({},n),Xu(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Ct(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,po(r,n.precedence,e));return t.instance}function po(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,i=l,h=0;h<r.length;h++){var _=r[h];if(_.dataset.precedence===t)i=_;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _o=null;function jh(e,t,n){if(_o===null){var r=new Map,l=_o=new Map;l.set(n,r)}else l=_o,r=l.get(n),r||(r=new Map,l.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Hn]||i[ot]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var h=i.getAttribute(t)||"";h=e+h;var _=r.get(h);_?_.push(i):r.set(h,[i])}}return r}function Dh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Eg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Oh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kg(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ja(r.href),i=t.querySelector(Li(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=go.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Ze(i);return}i=t.ownerDocument||t,r=Mh(r),(l=jn.get(l))&&Iu(r,l),i=i.createElement("link"),Ze(i);var h=i;h._p=new Promise(function(_,w){h.onload=_,h.onerror=w}),Ct(i,"link",r),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=go.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ku=0;function Ng(e,t){return e.stylesheets&&e.count===0&&yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ku===0&&(Ku=62500*ig());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ku?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function yo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,t.forEach(Rg,e),bo=null,go.call(e))}function Rg(e,t){if(!(t.state.loading&4)){var n=bo.get(e);if(n)var r=n.get(null);else{n=new Map,bo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var h=l[i];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),r=h)}r&&n.set(null,r)}l=t.instance,h=l.getAttribute("data-precedence"),i=n.get(h)||r,i===r&&n.set(null,l),n.set(h,l),this.count++,r=go.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Hi={$$typeof:fe,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Tg(e,t,n,r,l,i,h,_,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.hiddenUpdates=Pn(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Ch(e,t,n,r,l,i,h,_,w,A,H,q){return e=new Tg(e,t,n,h,w,A,H,q,_),t=1,i===!0&&(t|=24),i=un(3,null,null,t),e.current=i,i.stateNode=e,t=Nc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},Ac(i),e}function zh(e){return e?(e=ca,e):ca}function Bh(e,t,n,r,l,i){l=zh(l),r.context===null?r.context=l:r.pendingContext=l,r=Kr(t),r.payload={element:n},i=i===void 0?null:i,i!==null&&(r.callback=i),n=Pr(e,r,t),n!==null&&(tn(n,e,t),gi(n,e,t))}function Lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pu(e,t){Lh(e,t),(e=e.alternate)&&Lh(e,t)}function Uh(e){if(e.tag===13||e.tag===31){var t=Ol(e,67108864);t!==null&&tn(t,e,67108864),Pu(e,67108864)}}function Hh(e){if(e.tag===13||e.tag===31){var t=pn();t=zr(t);var n=Ol(e,t);n!==null&&tn(n,e,t),Pu(e,t)}}var vo=!0;function Mg(e,t,n,r){var l=C.T;C.T=null;var i=Q.p;try{Q.p=2,Fu(e,t,n,r)}finally{Q.p=i,C.T=l}}function Ag(e,t,n,r){var l=C.T;C.T=null;var i=Q.p;try{Q.p=8,Fu(e,t,n,r)}finally{Q.p=i,C.T=l}}function Fu(e,t,n,r){if(vo){var l=Qu(r);if(l===null)zu(e,t,r,xo,n),Vh(e,r);else if(Dg(l,e,t,n,r))r.stopPropagation();else if(Vh(e,r),t&4&&-1<jg.indexOf(e)){for(;l!==null;){var i=qt(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var h=Rt(i.pendingLanes);if(h!==0){var _=i;for(_.pendingLanes|=2,_.entangledLanes|=2;h;){var w=1<<31-Nt(h);_.entanglements[1]|=w,h&=~w}nr(i),(He&6)===0&&(no=bt()+500,Oi(0))}}break;case 31:case 13:_=Ol(i,2),_!==null&&tn(_,i,2),lo(),Pu(i,2)}if(i=Qu(r),i===null&&zu(e,t,r,xo,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else zu(e,t,r,null,n)}}function Qu(e){return e=Wa(e),Zu(e)}var xo=null;function Zu(e){if(xo=null,e=Fn(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xo=e,null}function Gh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dl()){case ml:return 2;case $a:return 8;case hl:case Pt:return 32;case nn:return 268435456;default:return 32}default:return 32}}var Wu=!1,al=null,il=null,sl=null,Gi=new Map,Vi=new Map,ol=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vh(e,t){switch(e){case"focusin":case"focusout":al=null;break;case"dragenter":case"dragleave":il=null;break;case"mouseover":case"mouseout":sl=null;break;case"pointerover":case"pointerout":Gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function Yi(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qt(t),t!==null&&Uh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Dg(e,t,n,r,l){switch(t){case"focusin":return al=Yi(al,e,t,n,r,l),!0;case"dragenter":return il=Yi(il,e,t,n,r,l),!0;case"mouseover":return sl=Yi(sl,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Gi.set(i,Yi(Gi.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Vi.set(i,Yi(Vi.get(i)||null,e,t,n,r,l)),!0}return!1}function Yh(e){var t=Fn(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Xa(e.priority,function(){Hh(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,Xa(e.priority,function(){Hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qu(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sr=r,n.target.dispatchEvent(r),sr=null}else return t=qt(n),t!==null&&Uh(t),e.blockedOn=n,!1;t.shift()}return!0}function qh(e,t,n){So(e)&&n.delete(t)}function Og(){Wu=!1,al!==null&&So(al)&&(al=null),il!==null&&So(il)&&(il=null),sl!==null&&So(sl)&&(sl=null),Gi.forEach(qh),Vi.forEach(qh)}function wo(e,t){e.blockedOn===t&&(e.blockedOn=null,Wu||(Wu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Og)))}var Eo=null;function $h(e){Eo!==e&&(Eo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(Zu(r||n)===null)continue;break}var i=qt(n);i!==null&&(e.splice(t,3),t-=3,Qc(i,{pending:!0,data:l,method:n.method,action:r},r,l))}}))}function Oa(e){function t(w){return wo(w,e)}al!==null&&wo(al,e),il!==null&&wo(il,e),sl!==null&&wo(sl,e),Gi.forEach(t),Vi.forEach(t);for(var n=0;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ol.length&&(n=ol[0],n.blockedOn===null);)Yh(n),n.blockedOn===null&&ol.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var l=n[r],i=n[r+1],h=l[ct]||null;if(typeof i=="function")h||$h(n);else if(h){var _=null;if(i&&i.hasAttribute("formAction")){if(l=i,h=i[ct]||null)_=h.formAction;else if(Zu(l)!==null)continue}else _=h.action;typeof _=="function"?n[r+1]=_:(n.splice(r,3),r-=3),$h(n)}}}function Ih(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(h){return l=h})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ju(e){this._internalRoot=e}ko.prototype.render=Ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=pn();Bh(n,r,e,t,null,null)},ko.prototype.unmount=Ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bh(e.current,2,null,e,null,null),lo(),t[Tt]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ol.length&&t!==0&&t<ol[n].priority;n++);ol.splice(n,0,e),n===0&&Yh(e)}};var Xh=a.version;if(Xh!=="19.2.7")throw Error(s(527,Xh,"19.2.7"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Cg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{pl=No.inject(Cg),yt=No}catch{}}return $i.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,r="",l=Jd,i=em,h=tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Ch(e,1,!1,null,null,n,r,null,l,i,h,Ih),e[Tt]=t.current,Cu(e),new Ju(t)},$i.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var r=!1,l="",i=Jd,h=em,_=tm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Ch(e,1,!0,t,n??null,r,l,w,i,h,_,Ih),t.context=zh(null),n=t.current,r=pn(),r=zr(r),l=Kr(r),l.callback=null,Pr(n,l,r),n=r,t.current.lanes=n,_l(t,n),nr(t),e[Tt]=t.current,Cu(e),new ko(t)},$i.version="19.2.7",$i}var np;function Xg(){if(np)return nf.exports;np=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),nf.exports=Ig(),nf.exports}var Kg=Xg();const Pg=Pp(Kg),rp=o=>{let a;const c=new Set,s=(y,x)=>{const N=typeof y=="function"?y(a):y;if(!Object.is(N,a)){const T=a;a=x??(typeof N!="object"||N===null)?N:Object.assign({},a,N),c.forEach(X=>X(a,T))}},u=()=>a,b={setState:s,getState:u,getInitialState:()=>v,subscribe:y=>(c.add(y),()=>c.delete(y))},v=a=o(s,u,b);return b},Fg=(o=>o?rp(o):rp),Qg=o=>o;function Zg(o,a=Qg){const c=Zi.useSyncExternalStore(o.subscribe,Zi.useCallback(()=>a(o.getState()),[o,a]),Zi.useCallback(()=>a(o.getInitialState()),[o,a]));return Zi.useDebugValue(c),c}const lp=o=>{const a=Fg(o),c=s=>Zg(a,s);return Object.assign(c,a),c},Wg=(o=>o?lp(o):lp);function Jg(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let c=0;c<o.length;c+=1)o[c]=Math.floor(Math.random()*256);let a="";for(const c of o)a+=c.toString(16).padStart(2,"0");return a}const jf="pkp.user",Df="pkp.savedDevices",Of="pkp.ideDrafts",Cf="pkp.ideSettings",es="Prototype Version 0.6.7";function Bo(o){try{const a=localStorage.getItem(o);return a?JSON.parse(a):null}catch{return null}}function Lo(o,a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}}function eb(){const o=Bo(jf);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function sf(o){Lo(jf,o)}function zf(){return Bo(Df)??[]}function ts(o){Lo(Df,o)}function tb(){ts([])}function nb(){try{localStorage.removeItem(jf),localStorage.removeItem(Df),localStorage.removeItem(Of),localStorage.removeItem(Cf)}catch{}}function of(){var o;return((o=Bo(Of))==null?void 0:o.filter(a=>a.path&&typeof a.content=="string"))??[]}function cf(o){Lo(Of,o)}function ap(){const o=Bo(Cf)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function rb(o){Lo(Cf,o)}function uf(o){const a=zf(),c=a.findIndex(s=>s.deviceID===o.deviceID);return c>=0?a[c]=o:a.push(o),ts(a),a}function lb(o){const a=zf().filter(c=>c.deviceID!==o);return ts(a),a}const vf="b8e06067-62ad-41ba-9231-206ae80ab551",ab="f897177b-aee8-4767-8ecc-cc694fd5fce0",ib="f897177b-aee8-4767-8ecc-cc694fd5fce1",ff=20,sb=12,ob=new TextEncoder,cb=new TextDecoder;function ub(o){return new Promise(a=>setTimeout(a,o))}function Uo(){return typeof navigator<"u"&&"bluetooth"in navigator}function xf(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function fb(){if(!Uo())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[vf]},{namePrefix:"PicoW-"}],optionalServices:[vf]})}async function Fp(){if(!Uo()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class db{constructor(){ce(this,"device",null);ce(this,"writeChar",null);ce(this,"notifyChar",null);ce(this,"buffer","");ce(this,"writeQueue",Promise.resolve());ce(this,"disconnectNotified",!1);ce(this,"onLine",()=>{});ce(this,"onDisconnect",()=>{});ce(this,"handleNotification",a=>{const c=a.target;if(!(c!=null&&c.value))return;this.buffer+=cb.decode(c.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const u=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),u&&this.onLine(u),s=this.buffer.indexOf(`
`)}});ce(this,"handleDisconnected",()=>{var a;this.disconnectNotified||(this.disconnectNotified=!0,(a=this.device)==null||a.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var a,c;return!!((c=(a=this.device)==null?void 0:a.gatt)!=null&&c.connected)}async connect(a){var u;this.device&&this.device!==a&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=a,this.buffer="",this.disconnectNotified=!1,a.removeEventListener("gattserverdisconnected",this.handleDisconnected),a.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((u=a.gatt)==null?void 0:u.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await c.getPrimaryService(vf);this.writeChar=await s.getCharacteristic(ab),this.notifyChar=await s.getCharacteristic(ib),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(a){const c=this.writeQueue.then(()=>this.doWrite(a));return this.writeQueue=c.catch(()=>{}),c}async doWrite(a){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=ob.encode(`${a}
`),u=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let m=0;m<c.length;m+=ff){const p=c.slice(m,m+ff);await u(p),m+ff<c.length&&await ub(sb)}}disconnect(){var c;const a=this.device;(c=a==null?void 0:a.gatt)!=null&&c.connected?a.gatt.disconnect():this.handleDisconnected()}}class mb{constructor(a,c){ce(this,"send");ce(this,"onMessage");ce(this,"inActive",!1);ce(this,"inExpectedTotal",0);ce(this,"inStreamId",0);ce(this,"inParts",new Map);ce(this,"inProgress",null);ce(this,"outPendingLines",null);ce(this,"outWaitingAck",!1);ce(this,"outStreamId",0);ce(this,"outNextStreamId",1);ce(this,"outCache",new Map);ce(this,"outProgress",null);ce(this,"outResolve",null);ce(this,"outReject",null);this.send=a,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(a){var s;if(a.startsWith("prep,")){const u=a.split(","),m=u.length>=2&&/^\d+$/.test(u[1])?parseInt(u[1],10):null,p=u.length>=3&&/^\d+$/.test(u[2])?parseInt(u[2],10):0;m!==null&&m>0&&(this.inActive=!0,this.inExpectedTotal=m,this.inStreamId=p,this.inParts.clear(),this.send(p>0?`ack:prep,${p}`:"ack:prep"));return}if(a==="ack:prep"||a===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(a.startsWith("miss,")){const u=a.split(",");if(u.length>=3&&/^\d+$/.test(u[1])&&/^\d+$/.test(u[2])){const m=parseInt(u[1],10),p=parseInt(u[2],10),b=this.outCache.get(p);m===this.outStreamId&&b&&this.send(b)}return}const c=this.parseNumbered(a);if(c){const{idx:u,payload:m}=c;if(!this.inActive){this.onMessage(m);return}this.inParts.has(u)||(this.inParts.set(u,m),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let p=0;for(let b=1;b<=this.inExpectedTotal;b+=1)if(!this.inParts.has(b)){p=b;break}if(p>0&&this.inStreamId>0&&u>p&&this.send(`miss,${this.inStreamId},${p}`),this.inParts.size>=this.inExpectedTotal){for(let b=1;b<=this.inExpectedTotal;b+=1){const v=this.inParts.get(b);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(a)}setInboundProgress(a){this.inProgress=a}async sendReliable(a,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=a.length===0?[""]:a;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const u=new Promise((m,p)=>{this.outResolve=m,this.outReject=p});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(m){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,m}await u}async flushOutbound(){var a,c,s,u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(a=this.outResolve)==null||a.call(this),this.outResolve=null,this.outReject=null;return}try{const m=this.outPendingLines.length;for(let p=0;p<m;p+=1){const b=this.outPendingLines[p],v=`${p+1}-${b}`;this.outCache.set(p+1,v),await this.send(v),(c=this.outProgress)==null||c.call(this,p+1,m,b)}(s=this.outResolve)==null||s.call(this)}catch(m){(u=this.outReject)==null||u.call(this,m)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(a){const c=a.indexOf("-");if(c<=0)return null;const s=a.slice(0,c);if(!/^\d+$/.test(s))return null;const u=parseInt(s,10);return u<1?null:{idx:u,payload:a.slice(c+1)}}}const Va=11,ns=31,hb=2,pb=60,Ua=4,Ha=40;function _b(o,a){return Math.max(14,Math.min(56,Math.min(o,a)*.05))}function Qp(o,a,c=Va,s=ns){const u=_b(o,a),m=Math.max(1,o-2*u),p=Math.max(1,a-2*u);return{areaW:o,areaH:a,cols:c,rows:s,margin:u,stepX:m/Math.max(1,c-1),stepY:p/Math.max(1,s-1)}}function Zp(o,a){return a.margin+o/2*a.stepX}function Wp(o,a){const c=a.margin+o/2*a.stepY;return a.areaH-c}function Wi(o,a){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:Zp(o.centerX2,a),cy:Wp(o.centerY2,a),width:o.spanX*a.stepX,height:o.spanY*a.stepY}}function gb(o){const a=[];for(let c=0;c<o.cols;c+=1)for(let s=0;s<o.rows;s+=1)a.push({x:o.margin+c*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return a}function Mo(o,a,c,s,u){const m=(v,y,x,N)=>{const T=y%2,X=N*2;let P=T,ne=1/0;for(let G=T;G<=X;G+=2){const $=Math.abs(x(G)-v);$<ne&&(ne=$,P=G)}return Math.max(y,Math.min(X-y,P))},p=m(o,c,v=>Zp(v,u),u.cols-1),b=m(a,s,v=>Wp(v,u),u.rows-1);return{centerX2:p,centerY2:b}}const Pl=6e3,bb=15,Oo=[32,64,128,192],yb=Pl*10,vb=3500,xb=8e3,Sb=2,wb=Pl,Eb=Pl*8;function df(o){return new Promise(a=>setTimeout(a,o))}function Ca(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function ip(o){return o instanceof DOMException&&o.name==="AbortError"}function ul(o){return o.replace(/[\r\n,]/g," ").trim()}class kb{constructor(a={}){ce(this,"transport",new db);ce(this,"stream");ce(this,"events");ce(this,"waiters",[]);ce(this,"collectingLayout",!1);ce(this,"layoutBuffer",[]);ce(this,"layoutResolve",null);ce(this,"collectingLines",!1);ce(this,"lineBuffer",[]);ce(this,"lineResolve",null);ce(this,"lineReject",null);ce(this,"lineCollectId",0);ce(this,"controlPumpActive",!1);ce(this,"pendingButtons",[]);ce(this,"pendingSliders",new Map);ce(this,"pendingToggles",new Map);ce(this,"expectingDisconnect",!1);ce(this,"disconnectMessage",null);ce(this,"busy",!1);ce(this,"fsCapabilities",null);this.events=a,this.stream=new mb(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var a;return xf((a=this.transport.device)==null?void 0:a.name)}get connected(){return this.transport.connected}setBusy(a){if(this.busy=a,a){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(a,c){var s,u;(u=(s=this.events).onLog)==null||u.call(s,a,c)}progress(a,c){var s,u;(u=(s=this.events).onProgress)==null||u.call(s,a,c)}onDeviceMessage(a){var s,u;if(a==="disconnect"||a==="disconnect_private"){const m=a==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=m,this.log("warning",m),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(a==="__END__"){const m=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,m),this.lineResolve=null;return}this.lineBuffer.push(a);return}if(this.collectingLayout){if(a==="__END__"){const m=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(u=this.layoutResolve)==null||u.call(this,m),this.layoutResolve=null;return}!a.startsWith("ACK")&&!a.startsWith("ERR")&&!a.startsWith("#VERSION")?this.layoutBuffer.push(a):a.startsWith("#VERSION")&&this.layoutBuffer.push(a);return}a.startsWith("ERR")?this.log("error",a):a.startsWith("radar,")?this.handleRadarLine(a):a.startsWith("text,")?this.handleTextLine(a):a.startsWith("toggle_state,")?this.handleToggleStateLine(a):a.startsWith("ACK")||a==="LAYOUT_SAVED"||a.startsWith("READY")?this.log("success",a):this.log("info",`rx: ${a}`);const c=this.waiters.findIndex(m=>m.match(a));if(c>=0){const m=this.waiters[c];this.waiters.splice(c,1),clearTimeout(m.timer),m.resolve(a)}}waitFor(a,c,s){return new Promise((u,m)=>{const p=setTimeout(()=>{const b=this.waiters.findIndex(v=>v.timer===p);b>=0&&this.waiters.splice(b,1),m(new Error(`Timeout: ${s}`))},c);this.waiters.push({match:a,resolve:u,reject:m,timer:p})})}async collectLines(a,c,s,u,m){Ca(u);const p=this.lineCollectId+1;this.lineCollectId=p,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(m??null);const b=new Promise((v,y)=>{let x=!1;const N=()=>this.lineCollectId===p,T=()=>{x=!0,N()&&(this.lineReject=null,this.stream.setInboundProgress(null)),u==null||u.removeEventListener("abort",P)},X=$=>{x||(clearTimeout(ne),N()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),y($))},P=()=>{X(new DOMException("BLE file read cancelled","AbortError"))},ne=setTimeout(()=>{N()&&X(new Error(`Timeout: ${s}`))},c);this.lineResolve=v,this.lineReject=X;const G=this.lineResolve;this.lineResolve=$=>{N()&&(clearTimeout(ne),T(),G==null||G($))},u==null||u.addEventListener("abort",P,{once:!0})});return await this.transport.writeLine(a),b}async exchange(a,c,s,u=3){let m;for(let p=1;p<=u;p+=1)try{return await this.transport.writeLine(a),await this.waitFor(c,Pl,s)}catch(b){m=b,this.log("warning",`${s}: forsøg ${p}/${u} mislykkedes`)}throw m instanceof Error?m:new Error(`Failed: ${s}`)}async connect(a){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(a)}async runHandshake(a){var fe;await df(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",ie=>ie==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",ie=>ie==="unowned"||ie.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned")return{kind:"unowned"};const s=c.split(","),u=s[1]??"",m=s[2]!==void 0&&parseInt(s[2],10)||0,p=s[3]!==void 0?parseInt(s[3],10)===1:!0,b=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=s.length>=7,y=v?parseInt(s[5]??"0",10)===1:b,x=((fe=s[v?6:5])==null?void 0:fe.trim())||void 0;await this.exchange("ACK:ownership",ie=>ie==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const N=await this.exchange(`request_permission,${a.userID},${ul(a.username)}`,ie=>ie.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const T=N.split(",").filter(ie=>/^\d+$/.test(ie)),X=T.length>=1?parseInt(T[0]??"0",10):0,P=T.length>=2?parseInt(T[1]??"0",10):0,ne=T.length>=3?parseInt(T[2]??"0",10):P;if(X===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:p};const G=a.userID===u,$=P===1||G,re=ne===1||G;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:u,ownerName:x,iconID:m,canEdit:$,canEditCode:re,isOwnedByMe:G,canOthersConnect:p,canOthersEdit:b,canOthersEditCode:y}}async create(a,c,s,u,m,p,b){const v=s?1:0,y=s&&u?1:0,x=s&&m?1:0;await this.exchange(`create,${a.userID},${ul(a.username)},${c},${v},${y},${x},${p},${b}`,N=>N==="ACK:create","create")}async updateDeviceSettings(a,c,s,u,m,p,b){const v=c?1:0,y=c&&s?1:0,x=c&&u?1:0;await this.exchange(`settings_update,${a},${v},${y},${x},${m},${p},${ul(b??"")}`,N=>N==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const a=new Promise((s,u)=>{this.layoutResolve=s;const m=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,u(new Error("Timeout: layout")))},Pl*2),p=this.layoutResolve;this.layoutResolve=b=>{clearTimeout(m),p==null||p(b)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await a;return this.progress(100,"Klar"),c}async saveLayout(a){await this.exchange("update",u=>u==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=a.map(u=>{const m=b=>b===null?"n":String(b),p=`update,${u.type},${u.name},${m(u.centerX2)},${m(u.centerY2)},${m(u.spanX)},${m(u.spanY)},${u.rotation}`;return u.type==="slider"?`${p},${u.sliderMin??0},${u.sliderMax??100},${u.sliderRecenter??"none"}`:u.type==="toggle"?`${p},${u.toggleInitial?1:0}`:u.type==="radar"?[p,u.radarMinAngle??0,u.radarMaxAngle??180,u.radarMaxDistance??200,u.radarFadeMs??1200].join(","):p});c.push("__END__");const s=this.waitFor(u=>u==="LAYOUT_SAVED",Pl*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await s}async listFiles(a="/"){return(await this.collectLines(`fs_list,${ul(a)}`,Pl*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,u,m,p]=s.split(","),b=u==="file"||u==="dir"?u:"unknown",v=parseInt(p??"",10),y=m||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:b,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(a){var p,b,v;const c=a.split(",");if(c.length<4)return;const s=(p=c[1])==null?void 0:p.trim(),u=parseFloat(c[2]??""),m=parseFloat(c[3]??"");!s||!Number.isFinite(u)||!Number.isFinite(m)||((v=(b=this.events).onRadar)==null||v.call(b,s,u,m),this.log("info",`rx: ${a}`))}handleTextLine(a){var b,v;const c=a.indexOf(","),s=c>=0?a.indexOf(",",c+1):-1;if(c<0||s<0)return;const u=a.slice(c+1,s),m=a.slice(s+1),p=u==null?void 0:u.trim();p&&((v=(b=this.events).onText)==null||v.call(b,p,m),this.log("info",`rx: ${a}`))}handleToggleStateLine(a){var m,p,b;const c=a.split(",");if(c.length<3)return;const s=(m=c[1])==null?void 0:m.trim(),u=parseInt(c[2]??"",10);!s||!Number.isFinite(u)||((b=(p=this.events).onToggleState)==null||b.call(p,s,u===1),this.log("info",`rx: ${a}`))}async readText(a,c,s){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const u=await this.getFilesystemCapabilities(s);if(u.streamRead)try{return await this.readTextStream(a,u,c,s)}catch(m){if(s!=null&&s.aborted||ip(m)||!u.pageRead)throw m;this.log("warning",m instanceof Error?`fs_read_stream fejlede; bruger paged read: ${m.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(a,c,s)}async getFilesystemCapabilities(a){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",wb,"fs_capabilities",a),s=c.find(x=>x.startsWith("ERR"));if(s)throw new Error(s);const u=c.find(x=>x.startsWith("fs_capabilities,"));if(!u)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const m=u.split(","),p=new Map;for(let x=1;x<m.length-1;x+=2)p.set(m[x],m[x+1]);const b=parseInt(p.get("max_page")??"",10),v=parseInt(p.get("stream_chunk")??"",10),y={version:p.get("version")||void 0,pageRead:p.get("page_read")==="1",maxPageSize:Number.isFinite(b)&&b>0?b:32,streamRead:p.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(a,c,s){const u=await this.getFilesystemCapabilities(s);let m=0,p=Nb(u.maxPageSize),b=0,v=null,y="";const x=`Indlæser ${mf(a)}...`;Ca(s),c==null||c(5,x);for(let N=0;N<512;N+=1){Ca(s),b===0&&(c==null||c(7,x));const X=await this.readPageWithRetry(a,b,m,p,s),P=X.lines;m=X.nextPageSizeIndex,p=X.maxPageSizeIndex,Ca(s);const ne=P.find(W=>W.startsWith("ERR"));if(ne)throw new Error(ne);const G=P.find(W=>W.startsWith("fs_page,"));if(!G)throw new Error("ERR: fs_read_page missing data");const[,$,re,fe,ie=""]=G.split(",",5);if($!==a)throw new Error("ERR: fs_read_page stale data");const de=parseInt(re??"",10),Ne=parseInt(fe??"",10);if(!Number.isFinite(de)||de!==b||!Number.isFinite(Ne))throw new Error("ERR: fs_read_page invalid data");v=Ne,y+=ie,b+=Math.floor(ie.length/2);const ee=v>0?8+Math.min(87,Math.round(b/v*87)):95;if(c==null||c(ee,x),b>=v||ie.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(op(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(a,c,s,u,m){let p,b=Math.min(s,u);for(;b>=0;){const v=Oo[b],y=b===0?Sb:1,x=b===0?xb:vb;for(let N=1;N<=y;N+=1){Ca(m);try{return{lines:await this.collectLines(`fs_read_page,${ul(a)},${c},${v}`,x,`fs_read_page ${c}`,m),nextPageSizeIndex:Math.min(b+1,u),maxPageSizeIndex:u}}catch(T){if(m!=null&&m.aborted||ip(T))throw T;if(p=T,N<y||b>0){const P=b>0&&N>=y?Oo[b-1]:v;this.log("warning",`fs_read_page ${c} (${v} bytes) fejlede; prøver ${P} bytes`),await df(80+N*80)}}}if(b===0)break;u=Math.max(0,b-1),b=u}throw p instanceof Error?p:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(a,c,s,u){const m=`Indlæser ${mf(a)}...`,p=Math.max(16,Math.min(192,c.streamChunkSize||128));s==null||s(5,m);const b=await this.collectLines(`fs_read_stream,${ul(a)},${p}`,Eb,`fs_read_stream ${a}`,u,(ee,W)=>{const ve=8+Math.round(Math.min(ee,W)/Math.max(1,W)*87);s==null||s(Math.min(95,ve),m)});Ca(u);const v=b.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const y=b.find(ee=>ee.startsWith("fs_stream_begin,")),x=b.find(ee=>ee.startsWith("fs_stream_end,"));if(!y||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,N,T]=y.split(",",4),[,X,P,ne]=x.split(",",4),G=parseInt(T??"",10),$=parseInt(P??"",10),re=parseInt(ne??"",10);if(N!==a||X!==a||!Number.isFinite(G)||G!==$||!Number.isFinite(re))throw new Error("ERR: fs_read_stream invalid metadata");let fe=0,ie="";for(const ee of b){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,W,ve=""]=ee.split(",",3),ge=parseInt(W??"",10);if(!Number.isFinite(ge)||ge!==fe||ve.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");ie+=ve,fe+=Math.floor(ve.length/2)}if(fe!==G)throw new Error("ERR: fs_read_stream size mismatch");const de=op(ie);if(sp(de)!==re)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(de)}async writeText(a,c,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${ul(a)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const u=new TextEncoder().encode(c),m=[...u].map(x=>x.toString(16).padStart(2,"0")).join(""),p=[];for(let x=0;x<m.length;x+=160)p.push(`fs_write_chunk,${m.slice(x,x+160)}`);p.push("fs_write_end");const b=sp(u),v=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),yb,"fs_write_done");s==null||s(u.length===0?85:18,u.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${u.length} bytes via Bluetooth...`),await this.stream.sendReliable(p,(x,N,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const X=Math.min(u.length,x*80),P=18+Math.round(x/Math.max(1,N-1)*67);s==null||s(Math.min(85,P),`Sender ${X}/${u.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const y=await v;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,x,N]=y.split(",",3),T=parseInt(x??"",10),X=parseInt(N??"",10);if(T!==u.length||X!==b)throw new Error(`ERR: BLE-verificering fejlede for ${mf(a)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(a){const c=await this.exchange(`fs_delete,${ul(a)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",a=>a==="ACK:restart"||a.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(a,c){this.busy||(this.pendingButtons.push(`button,${a}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(a,c){this.busy||(this.pendingSliders.set(a,`slider,${a}:${c}`),this.pumpControls())}enqueueToggle(a,c){this.busy||(this.pendingToggles.set(a,`toggle,${a}:${c?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const a=this.nextControlLine();if(!a)break;await this.transport.writeLine(a),this.log("info",`tx: ${a}`),await df(bb)}}catch(a){this.log("error",a instanceof Error?a.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const a=this.pendingButtons.shift();if(a)return a;const c=this.pendingSliders.entries().next();if(!c.done){const[u,m]=c.value;return this.pendingSliders.delete(u),m}const s=this.pendingToggles.entries().next();if(!s.done){const[u,m]=s.value;return this.pendingToggles.delete(u),m}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",a=>a==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,s,u;for(const m of this.waiters)clearTimeout(m.timer),m.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const a=this.disconnectMessage??void 0;this.disconnectMessage=null,(u=(s=this.events).onDisconnect)==null||u.call(s,a)}}function Nb(o){let a=0;for(let c=0;c<Oo.length;c+=1)Oo[c]<=o&&(a=c);return a}function mf(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function sp(o){let a=0;for(const c of o)a=a+c>>>0;return a}function op(o){const a=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<a.length;c+=1)a[c]=parseInt(o.slice(c*2,c*2+2),16);return a}function cp(o){const a=(c,s)=>Number.isFinite(c)?Math.max(hb,Math.min(pb,c)):s;for(const c of o){const s=c.trim();if(s.startsWith("#GRID,")){const u=s.split(","),m=a(parseInt(u[1],10),Va),p=a(parseInt(u[2],10),ns);return{cols:m,rows:p}}}return{cols:Va,rows:ns}}function up(o){const a=new Map;for(const c of o){const s=c.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const u=s.split(",");if(u.length<7)continue;const[m,p,b,v,y,x,N,T,X,P,ne]=u;if(m!=="button"&&m!=="slider"&&m!=="toggle"&&m!=="radar"&&m!=="text"||a.has(p))continue;const G=ge=>{if(ge==="n")return null;const ye=parseInt(ge,10);return Number.isNaN(ye)?null:ye},$=parseInt(N,10)||0,re=T!==void 0?parseInt(T,10):0,fe=X!==void 0?parseInt(X,10):100,ie=["none","bottom","middle","top"].includes(P??"")?P:"none",de=T!==void 0?parseInt(T,10)===1:!1,Ne=T!==void 0?parseFloat(T):0,ee=X!==void 0?parseFloat(X):180,W=P!==void 0?parseFloat(P):200,ve=ne!==void 0?parseInt(ne,10):1200;a.set(p,{type:m,name:p,centerX2:G(b),centerY2:G(v),spanX:G(y),spanY:G(x),rotation:[0,90,180,270].includes($)?$:0,...m==="slider"?{sliderMin:Number.isFinite(re)?re:0,sliderMax:Number.isFinite(fe)?fe:100,sliderRecenter:ie}:{},...m==="toggle"?{toggleInitial:de}:{},...m==="radar"?{radarMinAngle:Number.isFinite(Ne)?Ne:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(W)&&W>0?W:200,radarFadeMs:Number.isFinite(ve)&&ve>0?ve:1200}:{}})}return[...a.values()]}let te=null,Ii=null,fp=0,Tr=!1;function Rb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function dp(o){return new Promise(a=>setTimeout(a,o))}function Tb(o){return Object.fromEntries(o.filter(a=>a.type==="toggle").map(a=>[a.name,!!a.toggleInitial]))}function mp(o,a){const c=Tb(o);for(const s of o)s.type==="toggle"&&a[s.name]!==void 0&&(c[s.name]=a[s.name]);return c}const J=Wg((o,a)=>{function c(u,m){o(p=>({logs:[{level:u,message:m,time:Rb()},...p.logs].slice(0,200)}))}function s(u){Ii&&clearTimeout(Ii),fp+=1,o({toast:{message:u,id:fp}}),Ii=setTimeout(()=>o({toast:null}),4500)}return te=new kb({onProgress:(u,m)=>o({progress:{value:u,label:m}}),onLog:(u,m)=>c(u,m),onRadar:(u,m,p)=>{const b=Date.now(),v={id:`${b}-${Math.random().toString(36).slice(2)}`,angle:m,distance:p,createdAt:b};o(y=>{const x=y.layout.find(X=>X.type==="radar"&&X.name===u),N=(x==null?void 0:x.radarFadeMs)??1200,T=y.radarPings[u]??[];return{radarPings:{...y.radarPings,[u]:[...T.filter(X=>b-X.createdAt<=N),v].slice(-80)}}})},onText:(u,m)=>{o(p=>({textValues:{...p.textValues,[u]:m}}))},onToggleState:(u,m)=>{o(p=>({toggleValues:{...p.toggleValues,[u]:m}}))},onDisconnect:u=>{const{screen:m,active:p,picoIdeOrigin:b}=a();if(Tr){Tr=!1;return}if(u&&(c("warning",u),s(u)),m==="control"||m==="connection"||m==="create"||m==="ide"&&b==="control"){const v=p?{deviceID:p.deviceID,deviceName:p.deviceName,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:v})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const u=eb(),m=zf();o({user:u,savedDevices:m,splashTarget:u?"dashboard":"intro"})},finishSplash:()=>{const u=a().splashTarget;o({screen:u??"intro"})},createUser:u=>{const m=u.trim();if(!m)return;const p={username:m,userID:Jg()};sf(p),o({user:p,screen:"dashboard"})},findDevice:async()=>{try{const u=await fb();await a().connectToDevice(u)}catch(u){u instanceof Error&&u.name!=="NotFoundError"&&c("error",u.message)}},connectToDevice:async(u,m)=>{var b,v;const p=a().user;if(!(!p||!te)){Tr=!1,o({screen:"connection",connecting:{name:xf(u.name)||(m==null?void 0:m.deviceName)||"Pico",iconID:(m==null?void 0:m.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await te.connect(u);const y=await te.runHandshake(p),x=u.id,N=xf(u.name)||(m==null?void 0:m.deviceName)||"Pico";if(y.kind==="denied"){const $=`Du kan ikke forbinde, fordi ${((b=y.ownerName)==null?void 0:b.trim())||((v=m==null?void 0:m.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",$),s($),o({screen:"dashboard",connecting:null}),await te.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:x,deviceName:N,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:p.username,gridCols:Va,gridRows:ns},screen:"create"});return}const T={deviceID:x,deviceName:N,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(m==null?void 0:m.ownerName)};o({savedDevices:uf(T)});const X=await te.requestLayout(),P=cp(X),ne=up(X);o({layout:ne,sliderValues:{},toggleValues:mp(ne,a().toggleValues),radarPings:{},textValues:{},active:{deviceID:x,deviceName:N,iconID:y.iconID,canEdit:y.canEdit,canEditCode:y.canEditCode,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(m==null?void 0:m.ownerName),gridCols:P.cols,gridRows:P.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const x=y instanceof Error?y.message:"Forbindelsen mislykkedes.";c("error",x),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await te.disconnect().catch(()=>{})}}},finishCreate:async(u,m,p,b,v,y)=>{const{user:x,active:N}=a();if(!(!x||!N||!te))try{te.setBusy(!0),await te.create(x,u,m,p,b,v,y),te.setBusy(!1);const T={deviceID:N.deviceID,deviceName:N.deviceName,deviceIconID:u,canOthersConnect:m,canOthersEdit:m&&p,canOthersEditCode:m&&b,isOwnedByMe:!0,ownerName:x.username};o({savedDevices:uf(T)});const X=await te.requestLayout(),P=cp(X),ne=up(X);o({layout:ne,sliderValues:{},toggleValues:mp(ne,a().toggleValues),radarPings:{},textValues:{},active:{...N,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:m,canOthersEdit:m&&p,canOthersEditCode:m&&b,ownerName:x.username,gridCols:P.cols,gridRows:P.rows},screen:"control"})}catch(T){te.setBusy(!1);const X=T instanceof Error?T.message:"Oprettelse mislykkedes.";c("error",X),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await te.disconnect().catch(()=>{})}},saveDeviceSettings:async(u,m,p,b,v,y)=>{const{active:x,user:N}=a();if(!(!x||!te||!x.isOwnedByMe))try{te.setBusy(!0),await te.updateDeviceSettings(u,m,p,b,v,y,N==null?void 0:N.username);const T={...x,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:m,canOthersEdit:m&&p,canOthersEditCode:m&&b,ownerName:(N==null?void 0:N.username)??x.ownerName,gridCols:v,gridRows:y},X={deviceID:x.deviceID,deviceName:x.deviceName,deviceIconID:u,canOthersConnect:m,canOthersEdit:m&&p,canOthersEditCode:m&&b,isOwnedByMe:!0,ownerName:(N==null?void 0:N.username)??x.ownerName};o({active:T,savedDevices:uf(X)}),s("Enhedsindstillinger gemt.")}catch(T){c("error",T instanceof Error?T.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{te.setBusy(!1)}},cancelCreate:async()=>{te&&await te.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Tr=!0,te&&await te.disconnect().catch(()=>{}),Tr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:u=>{o({savedDevices:lb(u)})},clearSavedDevices:()=>{tb(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{Tr=!0,te!=null&&te.connected&&await te.disconnect().catch(()=>{}),nb(),window.location.reload()},updateUsername:u=>{const m=a().user,p=u.trim();if(!m||!p)return;const b={...m,username:p};sf(b),o(v=>{var x;const y=v.savedDevices.map(N=>N.isOwnedByMe?{...N,ownerName:p}:N);return ts(y),{user:b,active:(x=v.active)!=null&&x.isOwnedByMe?{...v.active,ownerName:p}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const u=a().user;return u?Mb(u):null},applyOwnerPairingCode:u=>{var p;const m=Ab(u,(p=a().user)==null?void 0:p.username);return m?(sf(m),o(b=>{var y;const v=b.savedDevices.map(x=>x.isOwnedByMe?{...x,ownerName:m.username}:x);return ts(v),{user:m,active:(y=b.active)!=null&&y.isOwnedByMe?{...b.active,ownerName:m.username}:b.active,savedDevices:v}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const u=a().screen==="control"&&!!(te!=null&&te.connected),m=a().active;if(u&&m&&!m.isOwnedByMe&&!m.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(p=>({screen:"ide",picoIdeOrigin:u?"control":"dashboard",active:u?p.active:null,layout:u?p.layout:[],sliderValues:u?p.sliderValues:{},toggleValues:u?p.toggleValues:{},radarPings:u?p.radarPings:{},textValues:u?p.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:u,active:m}=a();o({screen:u==="control"&&m&&(te!=null&&te.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(te!=null&&te.connected),bleListFiles:async()=>te!=null&&te.connected?te.listFiles("/"):[],bleReadText:async(u,m,p)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");return te.readText(u,m,p)},bleWriteText:async(u,m,p)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.writeText(u,m,p)},bleDeleteFile:async u=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.deleteFile(u)},bleRestart:async()=>{te!=null&&te.connected&&await te.restart()},bleRestartAndReconnect:async(u="control")=>{const{active:m}=a();if(!(te!=null&&te.connected)||!m)return!1;const p={deviceID:m.deviceID,deviceName:m.deviceName,deviceIconID:m.iconID,canOthersConnect:m.canOthersConnect,canOthersEdit:m.canOthersEdit,canOthersEditCode:m.canOthersEditCode,isOwnedByMe:m.isOwnedByMe,ownerName:m.ownerName};Tr=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await te.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:p.deviceName,iconID:p.deviceIconID}});for(let b=0;b<12&&(te!=null&&te.connected);b+=1)await dp(250);te!=null&&te.connected||(Tr=!1);for(let b=1;b<=8;b+=1){await dp(b===1?1200:850);try{const y=(await Fp()).find(x=>x.id===p.deviceID);if(!y){o({progress:{value:Math.min(88,20+b*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+b*8),label:`Genforbinder (${b}/8)...`}}),await a().connectToDevice(y,p),u==="ide"&&o(x=>({screen:"ide",picoIdeOrigin:"control",active:x.active,layout:x.layout,sliderValues:x.sliderValues,toggleValues:x.toggleValues,radarPings:x.radarPings,textValues:x.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){c("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Tr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p}),!1},reconnectLostDevice:async()=>{var m;const u=a().connectionLost;if(u){o({connectionLost:null});try{if((m=navigator.bluetooth)!=null&&m.getDevices){const b=(await navigator.bluetooth.getDevices()).find(v=>v.id===u.deviceID);if(b){await a().connectToDevice(b,u);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await a().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:(u,m)=>te==null?void 0:te.enqueueButton(u,m),sendSlider:(u,m)=>{o(p=>({sliderValues:{...p.sliderValues,[u]:m}})),te==null||te.enqueueSlider(u,m)},sendToggle:(u,m)=>{o(p=>({toggleValues:{...p.toggleValues,[u]:m}})),te==null||te.enqueueToggle(u,m)},saveLayout:async u=>{if(te)try{te.setBusy(!0),await te.saveLayout(u),o({layout:u,editMode:!1})}catch(m){c("error",m instanceof Error?m.message:"Kunne ikke gemme layout.")}finally{te.setBusy(!1)}},setEditMode:u=>o({editMode:u,sideMenuOpen:!1,menuPage:null}),setDashboardPage:u=>o({dashboardPage:u}),toggleSideMenu:u=>o(m=>({sideMenuOpen:u??!m.sideMenuOpen})),toggleDebugger:u=>o(m=>({debuggerOpen:u??!m.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:u=>o({menuPage:u,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(u,m)=>c(u,m),askConfirm:u=>o({confirmDialog:u}),closeConfirm:()=>o({confirmDialog:null}),showToast:u=>s(u),dismissToast:()=>{Ii&&clearTimeout(Ii),o({toast:null})}}}),Sf="PKP-EJER";function Mb(o){var s;const a=o.userID.toLowerCase(),c=((s=a.match(/.{1,4}/g))==null?void 0:s.join("-"))??a;return`${Sf}-${c}-${Jp(a)}`}function Ab(o,a="Ejer"){const c=o.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Sf}-`))return null;const s=c.slice(Sf.length+1).split("-").filter(Boolean),u=s.pop()??"",m=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(m)||u!==Jp(m)?null:{userID:m,username:a.trim()||"Ejer"}}function Jp(o){let a=2166136261;for(const c of o.toLowerCase())a^=c.charCodeAt(0),a=Math.imul(a,16777619)>>>0;return(a%65536).toString(16).toUpperCase().padStart(4,"0")}const Ho="./",e_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function qa(o){const a=o>=0&&o<e_.length?o:0;return`${Ho}device-icons/${a}.png`}const jb=`${Ho}art/logo.png`,Db=`${Ho}art/Teknologiskolen_logo.png`,Ob=`${Ho}art/logo_teknologiskolen_white.png`,Cb={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Kt({name:o,size:a=24,className:c}){return f.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Cb[o]})}const zb=1850,Bb=450;function Lb(){const o=J(s=>s.splashTarget),a=J(s=>s.finishSplash),c=o?"splash-screen-animation splash-ready":"splash-pending";return U.useEffect(()=>{if(!o)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Bb:zb,m=window.setTimeout(a,u);return()=>window.clearTimeout(m)},[a,o]),f.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:jb,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function hp(){const o=J(u=>u.createUser),[a,c]=U.useState(""),s=a.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:Db,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${s?"filled":""}`,children:[f.jsx("input",{id:"username",value:a,onChange:u=>c(u.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(a),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:es})]})}function Bf({title:o,onMenu:a}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:a,"aria-label":"Menu",children:f.jsx(Kt,{name:"menu"})})]})})}function St({title:o,onClose:a,children:c,closeVariant:s="plain"}){const u=s==="circle",m=U.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:p=>{m.current=p.target===p.currentTarget},onClick:p=>{p.target===p.currentTarget&&m.current&&a(),m.current=!1},children:f.jsxs("div",{className:"modal",onClick:p=>p.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${u?"modal-close-circle":""}`,type:"button",onClick:a,"aria-label":"Luk",children:f.jsx(Kt,{name:u?"delete":"close",size:u?30:24})})]}),f.jsx("div",{className:"modal-body",children:c})]})})}function pp(){const o=J(T=>T.savedDevices),a=J(T=>T.toggleSideMenu),c=J(T=>T.findDevice),s=J(T=>T.removeSavedDevice),u=J(T=>T.askConfirm),m=J(T=>T.dashboardPage),p=J(T=>T.setDashboardPage),b=Vb(),[v,y]=U.useState(null),x=Uo(),N=o.filter(T=>m==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(Gb);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(Bf,{title:"Hovedmenu",onMenu:()=>a()}),f.jsxs("div",{className:"content dash-content",children:[!x&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:m==="mine"?"active":"",onClick:()=>p("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:m==="andre"?"active":"",onClick:()=>p("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:N.length===0?f.jsx("div",{className:"device-list-empty",children:m==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):N.map(T=>f.jsx(Ub,{device:T,disabled:!x,onConnect:()=>b(T),onSettings:()=>y(T)},T.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!x,"aria-label":"Find enhed",children:f.jsx(Kt,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:es}),v&&f.jsx(St,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:qa(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(Xi,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(Xi,{label:"Ejer",value:Hb(v)}),f.jsx(Xi,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(Xi,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx(Xi,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const T=v;y(null),b(T)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>u({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function Ub({device:o,disabled:a,onConnect:c,onSettings:s}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:a,children:[f.jsx("img",{className:"device-tile-icon",src:qa(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:f.jsx(Kt,{name:"settings"})})]})}function Xi({label:o,value:a}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:a})]})}function Hb(o){var a;return o.isOwnedByMe?"Dig":((a=o.ownerName)==null?void 0:a.trim())||"Anden bruger"}function Gb(o,a){return o.deviceName.localeCompare(a.deviceName,"da",{sensitivity:"base"})}function Vb(){const o=J(s=>s.connectToDevice),a=J(s=>s.findDevice),c=J(s=>s.log);return async s=>{const m=(await Fp()).find(p=>p.id===s.deviceID);m?await o(m,s):(c("info","Genforbind: vælg enheden i browserens liste."),await a())}}function Yb(){const o=J(c=>c.connecting),a=J(c=>c.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:qa((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${a.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:a.label})]})]})}function t_({selected:o,onSelect:a,onClose:c}){return f.jsx(St,{title:"Vælg Enhedens Ikon",onClose:c,children:f.jsx("div",{className:"icon-grid",children:e_.map(s=>f.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{a(s.id),c()},"aria-label":s.label,children:f.jsx("img",{src:qa(s.id),alt:""})},s.id))})})}function qb(){const o=J(ie=>ie.finishCreate),a=J(ie=>ie.cancelCreate),[c,s]=U.useState(0),[u,m]=U.useState(!1),[p,b]=U.useState(!1),[v,y]=U.useState(!1),[x,N]=U.useState(!1),[T,X]=U.useState(Va),[P,ne]=U.useState(ns),[G,$]=U.useState(!1),re=ie=>Number.isFinite(ie)?Math.max(Ua,Math.min(Ha,Math.round(ie))):Va;async function fe(){$(!0),await o(c,p,p&&v,p&&x,re(T),re(P))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>m(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:qa(c),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(Kt,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:p?"":"active",onClick:()=>b(!1),children:"Privat"}),f.jsx("button",{type:"button",className:p?"active":"",onClick:()=>b(!0),children:"Offentlig"})]}),p&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:x?"":"active",onClick:()=>N(!1),children:"Nej"}),f.jsx("button",{type:"button",className:x?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Ua,max:Ha,value:Number.isNaN(T)?"":T,onChange:ie=>X(parseInt(ie.target.value,10)),onBlur:()=>X(re(T))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Ua,max:Ha,value:Number.isNaN(P)?"":P,onChange:ie=>ne(parseInt(ie.target.value,10)),onBlur:()=>ne(re(P))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>a(),disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:fe,disabled:G,children:G?"Opretter...":"Opret"})]})]}),u&&f.jsx(t_,{selected:c,onSelect:s,onClose:()=>m(!1)}),f.jsx("span",{className:"version",children:es})]})}const Ya=8;function Ao(o){return Math.max(5,Math.min(22,o))}function Co(o,a,c){const s=Math.max(1,o.length),u=(a-Ya*2)/(s*.58),m=(c-Ya*2)*.48;return Ao(Math.min(u,m))}function $b(o,a,c,s,u){const m=o.trim().split(/\s+/).filter(Boolean),p=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,m.length-1)*1.6),b=u?Ao(Math.min(a/4.6,c/4.6,12)):0,v=u?b+Ya:Ya;if(s){const N=Math.max(1,c-v*2);return{fontSize:Ao(Math.min(a*.48,N/(p*1.04))),endFontSize:b,centerInset:u?{top:v,bottom:v}:{}}}const y=Math.max(1,a-v*4.2);return{fontSize:Ao(Math.min(c*.42,y/(p*.58))),endFontSize:b,centerInset:u?{left:v*2.1,right:v*2.1}:{}}}function Ib({control:o,rect:a,disabled:c,latestValue:s,toggleValue:u,radarPings:m=[],textValue:p,onButton:b,onSlider:v,onToggle:y}){const x=U.useRef(!1),N={left:a.cx,top:a.cy,width:a.width,height:a.height};if(o.type==="button"){const T=()=>{c||!x.current||(x.current=!1,b(o.name,!1))};return f.jsx("div",{className:"control",style:N,children:f.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",fontSize:Co(o.name,a.width,a.height)},onPointerDown:X=>{var P,ne;c||(X.preventDefault(),(ne=(P=X.currentTarget).setPointerCapture)==null||ne.call(P,X.pointerId),x.current=!0,b(o.name,!0))},onPointerUp:X=>{var P,ne;X.preventDefault(),(ne=(P=X.currentTarget).releasePointerCapture)==null||ne.call(P,X.pointerId),T()},onPointerCancel:T,onLostPointerCapture:T,children:o.name})})}if(o.type==="toggle"){const T=!!u;return f.jsx("div",{className:"control",style:N,children:f.jsx("button",{className:`control-toggle ${T?"on":""}`,type:"button",disabled:c,"aria-pressed":T,style:{width:"100%",height:"100%",fontSize:Co(o.name,a.width,a.height)},onPointerDown:X=>{c||(X.preventDefault(),y(o.name,!T))},children:f.jsx("span",{children:o.name})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:N,children:f.jsx(r_,{control:o,pings:m,width:a.width,height:a.height})}):o.type==="text"?f.jsx("div",{className:"control",style:N,children:f.jsx(n_,{message:p??o.name,width:a.width,height:a.height})}):f.jsx("div",{className:"control",style:N,children:f.jsx(r0,{control:o,disabled:c,latestValue:s,onSlider:v,width:a.width,height:a.height})})}function Xb(o,a,c){const s=o.trim()||" ",m=s.split(/\s+/).filter(Boolean).reduce((N,T)=>Math.max(N,T.length),1),p=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(m*1.9)))),b=Math.max(1,a-Ya*3),v=Math.max(1,c-Ya*3),y=b/(m*.58),x=v/(p*1.16);return Math.max(7,Math.min(24,y,x))}function n_({message:o,width:a,height:c}){const s=o.trim()||"...";return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:Xb(s,a,c)},children:f.jsx("span",{children:s})})}function r_({control:o,pings:a,width:c,height:s,preview:u=!1}){const[,m]=U.useState(0),p=Math.max(120,o.radarFadeMs??1200),b=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=bn(b),x=bn(v),N=Math.abs(v-b)>=360||y===x&&b!==v,T=Math.max(1,o.radarMaxDistance??200),X=Date.now(),P=a[a.length-1],ne=o.rotation,G=bn(y+ne),$=bn(x+ne),re=Jb(y,x),fe=((P==null?void 0:P.angle)??re)+ne,ie=u?[{id:"preview",angle:re,distance:T*.62,createdAt:X}]:a.filter(C=>X-C.createdAt<=p),de=!N,Ne=Math.max(8,Math.min(12,Math.min(c,s)*.16)),ee=0,W=0,ve=1,ge=N?{x:-1.12,y:-1.12,width:2.24,height:2.24}:Fb(G,$),ye=N?"":Kb(ee,W,ve,G,$),le=yp(b),Fe=yp(v),je=de?Zb(G,$,ge,c,s,le,Fe,Ne):null;U.useEffect(()=>{if(u||a.length===0)return;const C=window.setInterval(()=>m(Q=>Q+1),120);return()=>window.clearInterval(C)},[p,a.length,u]);const Qe=Cn(ee,W,ve,fe);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:c,height:s,viewBox:`${ge.x} ${ge.y} ${ge.width} ${ge.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[N?f.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:W,r:ve}):f.jsx("path",{className:"radar-sector-fill",d:ye}),[.25,.5,.75,1].map(C=>N?f.jsx("circle",{className:"radar-ring",cx:ee,cy:W,r:ve*C},C):f.jsx("path",{className:"radar-ring",d:Pb(ee,W,ve*C,G,$)},C)),!N&&f.jsx(_p,{cx:ee,cy:W,radius:ve,angle:G}),!N&&f.jsx(_p,{cx:ee,cy:W,radius:ve,angle:$}),f.jsx("line",{className:"radar-sweep",x1:ee,y1:W,x2:Qe.x,y2:Qe.y}),ie.map(C=>{const Q=u?0:X-C.createdAt,ue=Math.max(0,1-Q/p),xe=Math.max(0,Math.min(T,C.distance)),Ee=Cn(ee,W,ve*(xe/T),C.angle+ne);return f.jsx("circle",{className:"radar-ping",cx:Ee.x,cy:Ee.y,r:Math.max(.025,Math.min(ge.width,ge.height)*.025),opacity:ue},C.id)})]}),de&&je&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:je.min.x,top:je.min.y,fontSize:Ne},children:le}),f.jsx("span",{className:"radar-angle-label",style:{left:je.max.x,top:je.max.y,fontSize:Ne},children:Fe})]})]})}function _p({cx:o,cy:a,radius:c,angle:s}){const u=Cn(o,a,c,s);return f.jsx("line",{className:"radar-boundary",x1:o,y1:a,x2:u.x,y2:u.y})}function Cn(o,a,c,s){const u=(bn(s)-90)*Math.PI/180;return{x:o+Math.cos(u)*c,y:a+Math.sin(u)*c}}function Kb(o,a,c,s,u){const m=Cn(o,a,c,s),p=Cn(o,a,c,u),b=Lf(s,u)>180?1:0;return`M ${o} ${a} L ${m.x} ${m.y} A ${c} ${c} 0 ${b} 1 ${p.x} ${p.y} Z`}function Pb(o,a,c,s,u){const m=Cn(o,a,c,s),p=Cn(o,a,c,u),b=Lf(s,u)>180?1:0;return`M ${m.x} ${m.y} A ${c} ${c} 0 ${b} 1 ${p.x} ${p.y}`}function Lf(o,a){const c=bn(o),s=bn(a),u=s>=c?s-c:360-c+s;return u===0?360:u}function Fb(o,a){const c=[{x:0,y:0},Cn(0,0,1,o),Cn(0,0,1,a)];for(const x of[0,90,180,270])Qb(x,o,a)&&c.push(Cn(0,0,1,x));const s=Math.min(...c.map(x=>x.x)),u=Math.max(...c.map(x=>x.x)),m=Math.min(...c.map(x=>x.y)),p=Math.max(...c.map(x=>x.y)),b=Math.max(.1,u-s),v=Math.max(.1,p-m),y=Math.max(b,v)*.24;return{x:s-y,y:m-y,width:b+y*2,height:v+y*2}}function Qb(o,a,c){const s=bn(a),u=bn(o),m=Lf(a,c),p=bn(u-s);return p>=0&&p<=m}function Zb(o,a,c,s,u,m,p,b){const y=Cn(0,0,1.1,o),x=Cn(0,0,1.1,a);return{min:gp(y,c,s,u,m,b),max:gp(x,c,s,u,p,b)}}function Wb(o,a,c,s){return{x:(o.x-a.x)/a.width*c,y:(o.y-a.y)/a.height*s}}function gp(o,a,c,s,u,m){const p=Wb(o,a,c,s),b=Math.max(10,u.length*m*.62),v=m,y=7;return{x:bp(p.x,b/2+y,Math.max(b/2+y,c-b/2-y)),y:bp(p.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function bp(o,a,c){return Math.max(a,Math.min(c,o))}function yp(o){return`${Math.round(o)}`}function bn(o){return Number.isFinite(o)?(o%360+360)%360:0}function Jb(o,a){const c=bn(o),s=bn(a),u=s>=c?s-c:360-c+s;return bn(c+u/2)}function e0(o,a){if(!a)return o;const c=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((s,u)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((m,p)=>f.jsx("span",{children:m},`${m}-${p}`))},`${s}-${u}`))})}function t0(o){const a={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return o===0?{low:{...a,left:c,top:0,bottom:0},high:{...a,right:c,top:0,bottom:0}}:o===180?{low:{...a,right:c,top:0,bottom:0},high:{...a,left:c,top:0,bottom:0}}:o===90?{low:{...a,bottom:c,left:0,right:0},high:{...a,top:c,left:0,right:0}}:{low:{...a,top:c,left:0,right:0},high:{...a,bottom:c,left:0,right:0}}}function n0({name:o,vertical:a,rotation:c,color:s,fontSize:u,endFontSize:m,centerInset:p,lowLabel:b,highLabel:v,showEnds:y}){const x=y?t0(c):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[f.jsx("div",{style:{position:"absolute",inset:0,...p,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:u,textAlign:"center",pointerEvents:"none"},children:e0(o,a)}),x&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...x.low,fontWeight:800,fontSize:m},children:b}),f.jsx("div",{style:{...x.high,fontWeight:800,fontSize:m},children:v})]})]})}function l_({name:o,rotation:a,width:c,height:s,value:u,showEnds:m=!1,fillColor:p="var(--red)",lowLabel:b="0",highLabel:v="100"}){const y=a===90||a===270,{fontSize:x,endFontSize:N,centerInset:T}=$b(o,c,s,y,m);let X,P;a===0?(X={left:0,top:0,bottom:0,width:`${u}%`},P={left:0,top:0}):a===180?(X={right:0,top:0,bottom:0,width:`${u}%`},P={right:0,top:0}):a===90?(X={left:0,right:0,bottom:0,height:`${u}%`},P={left:0,bottom:0}):(X={left:0,right:0,top:0,height:`${u}%`},P={left:0,top:0});const ne=G=>f.jsx(n0,{name:o,vertical:y,rotation:a,color:G,fontSize:x,endFontSize:N,centerInset:T,lowLabel:b,highLabel:v,showEnds:m});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${s}px`},children:ne("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:p,overflow:"hidden",...X},children:f.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${s}px`,...P},children:ne("var(--white)")})})]})}function r0({control:o,disabled:a,latestValue:c,onSlider:s,width:u,height:m}){const p=U.useRef(null),b=o.sliderMin??0,v=o.sliderMax??100,[y,x]=U.useState(()=>c===void 0?vp(o.sliderRecenter??"none"):xp(c,b,v)),N=U.useRef(null),T=o.rotation;U.useEffect(()=>{c!==void 0&&(x(xp(c,b,v)),N.current=c)},[c,b,v]);function X($){const re=p.current;if(!re)return 0;const fe=re.getBoundingClientRect();let ie;return T===0?ie=($.clientX-fe.left)/fe.width:T===180?ie=1-($.clientX-fe.left)/fe.width:T===90?ie=1-($.clientY-fe.top)/fe.height:ie=($.clientY-fe.top)/fe.height,Math.max(0,Math.min(1,ie))}function P($){a||ne(X($))}function ne($){const re=Math.round($*100),fe=Math.round(b+(v-b)*$);x(re),fe!==N.current&&(N.current=fe,s(o.name,fe))}function G(){const $=o.sliderRecenter??"none";a||$==="none"||ne(vp($)/100)}return f.jsx("div",{ref:p,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:$=>{a||($.preventDefault(),$.currentTarget.setPointerCapture($.pointerId),P($))},onPointerMove:$=>{$.buttons!==0&&P($)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:f.jsx(l_,{name:o.name,rotation:T,width:u,height:m,value:y,showEnds:!0,lowLabel:String(b),highLabel:String(v)})})}function vp(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function xp(o,a,c){return c===a?0:Math.max(0,Math.min(100,Math.round((o-a)/(c-a)*100)))}const l0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},a0=["button","slider","toggle","radar","text"];function i0({unplaced:o,onAdd:a,onClose:c}){const s=U.useMemo(()=>a0.filter(b=>o.some(v=>v.type===b)),[o]),[u,m]=U.useState(s[0]??"button"),p=o.filter(b=>b.type===u);return U.useEffect(()=>{s.length>0&&!s.includes(u)&&m(s[0])},[s,u]),f.jsxs(St,{title:"Tilføj kontrol",onClose:c,children:[s.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:s.map(b=>f.jsx("button",{type:"button",className:u===b?"active":"",onClick:()=>m(b),children:l0[b]},b))}),f.jsx("div",{className:"add-lists",children:s.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):p.map(b=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>a(b.name),children:[f.jsx("span",{children:b.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(Kt,{name:"plus",size:22})})]},b.name))})]})}function a_(o){const[a,c]=U.useState({w:0,h:0}),s=U.useRef(null),u=U.useRef(null);return U.useLayoutEffect(()=>{var v;const m=o.current;if(s.current===m)return;if((v=u.current)==null||v.disconnect(),u.current=null,s.current=m,!m){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const p=()=>{const y={w:m.clientWidth,h:m.clientHeight};c(x=>x.w===y.w&&x.h===y.h?x:y)};p();const b=new ResizeObserver(p);b.observe(m),u.current=b}),U.useEffect(()=>()=>{var m;(m=u.current)==null||m.disconnect(),u.current=null,s.current=null},[]),a}function Ga(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const Sp=4,wp=5;function Ep(o){if(!Ga(o))return null;const a=o.centerX2/2,c=o.centerY2/2;return{x0:a-o.spanX/2,x1:a+o.spanX/2,y0:c-o.spanY/2,y1:c+o.spanY/2}}function s0(o,a,c=.02){return o.x0<a.x1-c&&a.x0<o.x1-c&&o.y0<a.y1-c&&a.y0<o.y1-c}function kp(o,a){const c=Wi(o,a);if(!c||o.spanX===null||o.spanY===null)return o;const s=Mo(c.cx,c.cy,o.spanX,o.spanY,a);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function Np(o,a){return Math.max(1,Math.min(a.cols-1,o))}function Rp(o,a){return Math.max(1,Math.min(a.rows-1,o))}function o0(){const o=J(D=>D.layout),a=J(D=>D.active),c=J(D=>D.saveLayout),s=J(D=>D.setEditMode),u=J(D=>D.askConfirm),m=!!(a!=null&&a.canEdit),[p,b]=U.useState(()=>o.map(D=>({...D}))),[v,y]=U.useState(null),[x,N]=U.useState(!1),[T,X]=U.useState(null),[P,ne]=U.useState(null),[G,$]=U.useState(!1),re=U.useRef(null),fe=a_(re),ie=fe.w>0&&fe.h>0,de=Qp(fe.w,fe.h,a==null?void 0:a.gridCols,a==null?void 0:a.gridRows),Ne=U.useMemo(()=>ie?gb(de):[],[de,ie]),ee=p.filter(Ga),W=p.filter(D=>!Ga(D)),ve=U.useMemo(()=>{const D=new Set;for(let K=0;K<ee.length;K+=1)for(let F=K+1;F<ee.length;F+=1){const I=Ep(ee[K]),Ue=Ep(ee[F]);I&&Ue&&s0(I,Ue)&&(D.add(ee[K].name),D.add(ee[F].name))}return D},[ee]),ge=ve.size>0,ye=p.find(D=>D.name===v)??null,le=U.useMemo(()=>Tp(p)!==Tp(o),[p,o]),Fe=U.useMemo(()=>{if(!T||!P)return null;const D=p.find(I=>I.name===T);if(!D||D.spanX===null||D.spanY===null)return null;const K=Mo(P.cx,P.cy,D.spanX,D.spanY,de),F=Wi({...D,centerX2:K.centerX2,centerY2:K.centerY2},de);return F?{name:D.name,rect:F}:null},[p,T,P,de]);function je(D,K){b(F=>F.map(I=>I.name===D?K(I):I))}function Qe(D,K){D.stopPropagation(),y(K.name);const F=Wi(K,de);F&&(X(K.name),ne({cx:F.cx,cy:F.cy}),D.currentTarget.setPointerCapture(D.pointerId))}function C(D){if(!T)return;const K=re.current;if(!K)return;const F=K.getBoundingClientRect(),I=K.clientWidth/F.width,Ue=K.clientHeight/F.height;ne({cx:Math.max(0,Math.min(K.clientWidth,(D.clientX-F.left)*I)),cy:Math.max(0,Math.min(K.clientHeight,(D.clientY-F.top)*Ue))})}function Q(){if(T&&P){const D=p.find(K=>K.name===T);if(D&&D.spanX!==null&&D.spanY!==null){const K=Mo(P.cx,P.cy,D.spanX,D.spanY,de);je(T,F=>({...F,centerX2:K.centerX2,centerY2:K.centerY2}))}}X(null),ne(null)}function ue(D){je(D,K=>K.spanX===null||K.spanY===null?{...K,rotation:(K.rotation+270)%360}:kp({...K,rotation:(K.rotation+270)%360,spanX:Np(K.spanY,de),spanY:Rp(K.spanX,de)},de))}function xe(D,K,F){je(D,I=>{if(I.spanX===null||I.spanY===null)return I;const Ue=K==="x"?Np(I.spanX+F,de):I.spanX,Ce=K==="y"?Rp(I.spanY+F,de):I.spanY;return kp({...I,spanX:Ue,spanY:Ce},de)})}function Ee(D){je(D,K=>({...K,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function E(D){N(!1);const K=p.find(I=>I.name===D);if(!K)return;const F=Mo(de.areaW/2,de.areaH/2,Sp,wp,de);je(D,()=>({...K,spanX:Sp,spanY:wp,rotation:0,centerX2:F.centerX2,centerY2:F.centerY2})),y(D)}async function L(){ge||($(!0),await c(p),$(!1))}function Z(){if(!le){s(!1);return}u({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ye&&Ga(ye)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:D=>D.stopPropagation(),children:[f.jsx(Ki,{label:"⟲",title:"Roter",onClick:()=>ue(ye.name)}),f.jsx(Ki,{label:"W−",title:"Gør smallere",onClick:()=>xe(ye.name,"x",-1),disabled:ye.spanX===null||ye.spanX<=1}),f.jsx(Ki,{label:"W+",title:"Gør bredere",onClick:()=>xe(ye.name,"x",1),disabled:ye.spanX===null||ye.spanX>=de.cols-1}),f.jsx(Ki,{label:"H−",title:"Gør lavere",onClick:()=>xe(ye.name,"y",-1),disabled:ye.spanY===null||ye.spanY<=1}),f.jsx(Ki,{label:"H+",title:"Gør højere",onClick:()=>xe(ye.name,"y",1),disabled:ye.spanY===null||ye.spanY>=de.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Ee(ye.name),"aria-label":"Slet",children:f.jsx(Kt,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:re,style:{touchAction:"none"},onPointerMove:C,onPointerUp:Q,onPointerDown:()=>y(null),children:ie&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:de.areaW,height:de.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Ne.map((D,K)=>f.jsx("circle",{cx:D.x,cy:D.y,r:2.5,fill:"rgba(198,80,78,0.45)"},K))}),Fe&&f.jsx("div",{className:"snap-preview",style:{left:Fe.rect.cx,top:Fe.rect.cy,width:Fe.rect.width,height:Fe.rect.height}}),ee.map(D=>{const K=T===D.name&&P,F=Wi(D,de);if(!F)return null;const I=K?P.cx:F.cx,Ue=K?P.cy:F.cy,Ce={left:I,top:Ue,width:F.width,height:F.height,outline:v===D.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${ve.has(D.name)?"colliding":""}`,style:Ce,onPointerDown:Vt=>Qe(Vt,D),children:D.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:Co(D.name,F.width,F.height)},children:D.name}):D.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:Co(D.name,F.width,F.height)},children:f.jsx("span",{children:D.name})}):D.type==="radar"?f.jsx(r_,{control:D,pings:[],width:F.width,height:F.height,preview:!0}):D.type==="text"?f.jsx(n_,{message:D.name,width:F.width,height:F.height}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(l_,{name:D.name,rotation:D.rotation,width:F.width,height:F.height,value:50,showEnds:!0,lowLabel:String(D.sliderMin??0),highLabel:String(D.sliderMax??100),fillColor:ve.has(D.name)?"var(--disabled)":"var(--red)"})})},D.name)}),m&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:D=>D.stopPropagation(),onClick:()=>N(!0),"aria-label":"Tilføj kontrol",children:f.jsx(Kt,{name:"plus",size:24})}),G&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:Z,disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:L,disabled:ge||G,children:G?"Gemmer...":"Gem"})]}),x&&f.jsx(i0,{unplaced:W,onAdd:E,onClose:()=>N(!1)})]})}function Tp(o){return JSON.stringify(o.map(a=>({type:a.type,name:a.name,centerX2:a.centerX2,centerY2:a.centerY2,spanX:a.spanX,spanY:a.spanY,rotation:a.rotation})))}function Ki({label:o,title:a,disabled:c,onClick:s}){return f.jsx("button",{type:"button","aria-label":a,title:a,disabled:c,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function c0(){const o=J(G=>G.layout),a=J(G=>G.editMode),c=J(G=>G.active),s=J(G=>G.sliderValues),u=J(G=>G.toggleValues),m=J(G=>G.radarPings),p=J(G=>G.textValues),b=J(G=>G.toggleSideMenu),v=J(G=>G.sendButton),y=J(G=>G.sendSlider),x=J(G=>G.sendToggle),N=U.useRef(null),T=a_(N),X=Qp(T.w,T.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),P=T.w>0&&T.h>0,ne=o.filter(Ga);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(Bf,{title:"Kontrol Panel",onMenu:()=>b()}),a?f.jsx(o0,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:N,children:P?ne.map(G=>{const $=Wi(G,X);return $?f.jsx(Ib,{control:G,rect:$,disabled:!1,latestValue:G.type==="slider"?s[G.name]:void 0,toggleValue:G.type==="toggle"?u[G.name]:void 0,radarPings:G.type==="radar"?m[G.name]:void 0,textValue:G.type==="text"?p[G.name]:void 0,onButton:v,onSlider:y,onToggle:x},G.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const u0="",Mp="",Ap="",Kl="";function Pi(o){return new Promise(a=>setTimeout(a,o))}class f0{constructor(a){this.transport=a}async interrupt(){await this.transport.write(Ap),await Pi(80),await this.transport.write(Ap)}async friendlyRepl(){await this.transport.write(Mp)}async softReset(){await this.transport.write(Kl)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(a,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await Pi(180)}),await Pi(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(a)}).read())`)}async sendFriendlyLine(a){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(a)}async sendProgramInput(a){await this.transport.writeLine(a)}async enterRawRepl(a=2500){if(await this.interrupt(),await Pi(80),await this.transport.write(`\r
`),await Pi(40),!(await this.collectUntil(async()=>{await this.transport.write(u0)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),a)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(a,c=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(a),a.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Kl)},u=>u.includes(`${Kl}${Kl}`)||u.includes(`${Kl}>`),c);return await this.friendlyRepl().catch(()=>{}),d0(s)}collectUntil(a,c,s){return new Promise((u,m)=>{let p="",b=null;const v=setTimeout(()=>{b==null||b(),m(new Error("Timeout ved USB REPL kommando."))},s);b=this.transport.addDataListener(y=>{p+=y,c(p)&&(clearTimeout(v),b==null||b(),u(p))}),a().catch(y=>{clearTimeout(v),b==null||b(),m(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(a=1600){await this.collectUntil(async()=>{await this.transport.write(Mp)},c=>/(^|\r?\n)>>> ?$/.test(c),a)}}function d0(o){const a=o.indexOf("OK"),c=o.indexOf(Kl,a>=0?a:0),s=c>=0?o.indexOf(Kl,c+1):-1;if(a<0||c<0)return{output:o.trim(),error:"",raw:o};const u=o.slice(a+2,c).replace(/^\r?\n/,"").trimEnd(),m=s>=0?o.slice(c+1,s).trim():"";return{output:u,error:m,raw:o}}const m0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],h0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],fl=h0.flatMap(({board:o,firmwareName:a})=>m0.map(({version:c,date:s,stamp:u,tag:m})=>{const p=`${a}-${u}-${m}.uf2`;return{board:o,version:c,date:s,fileName:p,url:`https://micropython.org/resources/firmware/${p}`}})),hf=512,pf=`import builtins as _pkp_builtins
`;function Mr(o){return JSON.stringify(o)}function p0(o){return`bytes.fromhex(${JSON.stringify([...o].map(a=>a.toString(16).padStart(2,"0")).join(""))})`}function _0(o,a){return`${o==="/"?"":o.replace(/\/$/,"")}/${a}`}class g0{constructor(a){this.repl=a}async list(a="/"){const c=`
import os
base = ${Mr(a)}
for name in os.listdir(base):
    p = (${Mr(a)}.rstrip('/') + '/' + name) if ${Mr(a)} != '/' else '/' + name
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
${pf}with _pkp_builtins.open(${Mr(a)}, 'rb') as f:
    while True:
        b = f.read(${hf})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(c,1e4);if(s.error)throw new Error(s.error);const u=s.output.replace(/\s+/g,"");return new TextDecoder().decode(b0(u))}async writeText(a,c,s){const u=new TextEncoder().encode(c);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${pf}_pkp_builtins.open(${Mr(a)}, 'wb').close()`),u.length===0){s==null||s(100,"Gemt på Pico");return}for(let m=0;m<u.length;m+=hf){const p=u.slice(m,m+hf),b=`
${pf}with _pkp_builtins.open(${Mr(a)}, 'ab') as f:
    f.write(${p0(p)})
`,v=await this.repl.exec(b,1e4);if(v.error)throw new Error(v.error);const y=Math.min(m+p.length,u.length);s==null||s(10+Math.round(y/u.length*85),`Gemmer ${y}/${u.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(a,c,s,u={}){const m=`${a}.tmp`;if(await this.writeText(m,c,(v,y)=>s==null?void 0:s(Math.min(70,v*.7),y)),s==null||s(78,"Verificerer fil..."),await this.readText(m)!==c)throw await this.delete(m).catch(()=>{}),new Error(`Verificering fejlede for ${a}.`);s==null||s(88,"Udskifter fil...");let b=!!u.createBackup;if(b){const v=await this.readText(a).catch(()=>null);b=v!==null&&v!==c}if(b){const v=await this.nextBackupPath(a).catch(()=>`${a}.backup`);await this.rename(a,v).catch(()=>{})}else await this.delete(a).catch(()=>{});await this.rename(m,a),s==null||s(100,"Installeret på Pico")}async delete(a){const c=await this.repl.exec(`
import os
os.remove(${Mr(a)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(a){const c=await this.list("/"),s=new Set(c.map(N=>N.path.toLowerCase())),u=a.replace(/\\/g,"/"),m=u.lastIndexOf("/"),p=m>=0?u.slice(0,m+1):"/",b=m>=0?u.slice(m+1):u.replace(/^\/+/,""),v=b.lastIndexOf("."),y=v>0?b.slice(0,v):b,x=v>0?b.slice(v):"";for(let N=1;N<1e3;N+=1){const T=`${p}${y}_backup${N}${x}`;if(!s.has(T.toLowerCase()))return T}return`${p}${y}_backup${Date.now()}${x}`}async rename(a,c){const s=await this.repl.exec(`
import os
os.rename(${Mr(a)}, ${Mr(c)})
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
    on_write is still available as a raw fallback):\r
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
        """Route app controls to friendly callbacks, with on_write as a raw fallback."""\r
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
                    try:
                        self._on_button_callback(name, is_down)
                    except TypeError:
                        self._on_button_callback(name)
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
`,S0=`import utime as time\r
from BLEPeripheral import BLEPeripheral\r
from neopixel import Neopixel\r
\r
\r
# Her vælger du, hvor NeoPixel'en sidder.\r
# Prøv at ændre NEOPIXEL_BEN, hvis din ledning sidder et andet sted.\r
NEOPIXEL_BEN = 0\r
\r
# Vi bruger 1 NeoPixel. Tallet kan ændres, hvis du har en ring eller strip.\r
ANTAL_NEOPIXELS = 1\r
\r
# Farven er rød, grøn, blå. Her er farven blå.\r
FARVE = (0, 80, 255)\r
\r
neopixels = Neopixel(ANTAL_NEOPIXELS, 0, NEOPIXEL_BEN, "GRB")\r
\r
# Appen viser to knapper og en slider.\r
BluetoothControls = (\r
    ('button', 'TAEND'),\r
    ('button', 'SLUK'),\r
    ('slider', 'LYS', 0, 100, 'none'),\r
)\r
\r
\r
def on_button(name, is_down):
    """Kører når der trykkes på en knap i appen."""\r
\r
    if not is_down:
        print(name, 'sluppet')
        return

    if name == 'TAEND':
        neopixels.fill(FARVE)\r
        neopixels.show()\r
        print('Lyset er tændt')\r
\r
    elif name == 'SLUK':\r
        neopixels.clear()\r
        neopixels.show()\r
        print('Lyset er slukket')\r
\r
\r
def on_slider(name, value):\r
    """Kører når slideren flyttes i appen."""\r
\r
    if name == 'LYS':\r
        # Appen sender 0-100. NeoPixel-biblioteket bruger 1-255.\r
        lysstyrke = int(1 + (int(value) / 100) * 254)\r
\r
        neopixels.brightness(lysstyrke)\r
        neopixels.fill(FARVE)\r
        neopixels.show()\r
\r
        print('Lysstyrke:', value)\r
\r
\r
def on_disconnect():\r
    """Sluk lyset når appen mister forbindelsen."""\r
    neopixels.clear()\r
    neopixels.show()\r
\r
\r
# callbacks=globals() betyder:\r
# "Brug funktionerne ovenfor, når appen sender noget."\r
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='NeoPixel', callbacks=globals())\r
\r
\r
while True:\r
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.\r
    time.sleep_ms(100)\r
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
BluetoothControls = (\r
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='Radar', callbacks=globals())\r
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
from BLEPeripheral import BLEPeripheral\r
\r
\r
# Appen viser kun et tekstfelt.\r
BluetoothControls = (\r
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='SendTekst', callbacks=globals())\r
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
BluetoothControls = (\r
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
ble = BLEPeripheral(\r
    base_controls=BluetoothControls,\r
    device_base_name='AlarmDemo',\r
    callbacks=globals(),\r
)\r
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
# BluetoothControls bestemmer, hvilke sliders appen viser.\r
BluetoothControls = (\r
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='TankBil', callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,Ba=[{id:"program:onboard-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med tænd/sluk-knapper og lysstyrke-slider.",kind:"program",content:S0},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:N0},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:T0},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:k0},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:R0},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:y0},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:E0},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:w0},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:v0},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:x0}],M0=11914;function A0(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function j0(){return A0()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class D0{constructor(a={}){ce(this,"port",null);ce(this,"reader",null);ce(this,"writer",null);ce(this,"readLoopDone",null);ce(this,"readLoopActive",!1);ce(this,"disconnecting",!1);ce(this,"buffer","");ce(this,"events");ce(this,"dataListeners",new Set);this.events=a}get connected(){return!!this.port&&!!this.writer}get info(){var a;return((a=this.port)==null?void 0:a.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const a=await navigator.serial.requestPort({filters:[{usbVendorId:M0}]});await this.openPort(a)}async connectKnownPort(a){await this.openPort(a)}async disconnect(){var v,y;const a=this.connected||!!this.port||!!this.reader,c=this.port,s=this.reader,u=this.writer,m=this.readLoopDone,p=s==null?void 0:s.closed.catch(()=>{}),b=u==null?void 0:u.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}m&&await m.catch(()=>{}),await p;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(u==null?void 0:u.close()),await b}catch{try{await(u==null?void 0:u.abort("disconnect"))}catch{}}try{u==null||u.releaseLock()}catch{}this.writer===u&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===m&&(this.readLoopDone=null),this.disconnecting=!1,a&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(a){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(a))}async writeLine(a){await this.write(`${a}\r
`)}addDataListener(a){return this.dataListeners.add(a),()=>this.dataListeners.delete(a)}async openPort(a){var s,u,m;if(await this.disconnect().catch(()=>{}),await a.open({baudRate:115200,bufferSize:4096}),this.port=a,this.writer=((s=a.writable)==null?void 0:s.getWriter())??null,!this.writer||!a.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=a.getInfo();(m=(u=this.events).onLog)==null||m.call(u,"success",`USB-forbindelse oprettet (${O0(c)}).`),this.readLoopDone=this.startReadLoop(a)}async startReadLoop(a){var u,m,p;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((u=a.readable)==null?void 0:u.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:b,done:v}=await s.read();if(v)break;b&&this.consumeText(c.decode(b,{stream:!0}))}}catch(b){this.readLoopActive&&((p=(m=this.events).onLog)==null||p.call(m,"error",b instanceof Error?b.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===a&&this.closeAfterUnexpectedReadEnd(a)}}async closeAfterUnexpectedReadEnd(a){var m,p;const c=this.connected||this.port===a;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,u=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await u}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await a.close()}catch{}this.port===a&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((p=(m=this.events).onDisconnect)==null||p.call(m))}consumeText(a){var c,s,u,m;(s=(c=this.events).onData)==null||s.call(c,a);for(const p of this.dataListeners)p(a);for(this.buffer+=a;this.buffer.includes(`
`);){const p=this.buffer.indexOf(`
`),b=this.buffer.slice(0,p).replace(/\r$/,"");this.buffer=this.buffer.slice(p+1),(m=(u=this.events).onLine)==null||m.call(u,b)}}}function O0(o){const a=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${a}, ${c}`}const i_=15e3,jp=64*1024,Dp=1e5,s_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),C0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class z0{constructor(){ce(this,"worker",null);ce(this,"pending",null);ce(this,"nextId",0)}send(a,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,u=c.timeoutMs??i_,m=this.ensureWorker();return new Promise(p=>{const b=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},u);this.pending={id:s,timer:b,onOutput:c.onOutput,resolve:p},m.postMessage({type:"run",id:s,code:L0(a),runtimeUrl:s_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var a;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(a=this.worker)==null||a.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const a=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return a.onmessage=c=>this.handleMessage(c.data),a.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=a,a}handleMessage(a){var s;const c=this.pending;if(!(!c||a.id!==c.id||a.type==="ready")){if(a.type==="stdout"){(s=c.onOutput)==null||s.call(c,a.text);return}if(a.type==="unavailable"){this.finish({ok:!1,output:"",error:a.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:a.ok,output:a.output,error:a.error,timedOut:!1,unavailable:!1})}}finish(a){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(a))}restartWorker(){var a;(a=this.worker)==null||a.terminate(),this.worker=null}}class B0{constructor(){ce(this,"worker",null);ce(this,"pending",null);ce(this,"nextId",0)}run(a,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof c=="number"?c:c.timeoutMs??i_,u=typeof c=="number"?void 0:c.onOutput,m=typeof c=="number"?void 0:c.signal,p=wf(a,{allowInput:!0});if(p.some(y=>y.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:p,timedOut:!1,unavailable:!1});const b=++this.nextId,v=this.ensureWorker();return new Promise(y=>{const x=P=>this.finish(P),N=()=>{v.postMessage({type:"stop",id:b}),x({ok:!1,output:"",error:"",issues:p,timedOut:!1,unavailable:!1})},T=window.setTimeout(()=>{x({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:p,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:b,timer:T,issues:p,onOutput:u,signal:m,abort:N,resolve:y},m!=null&&m.aborted){N();return}m==null||m.addEventListener("abort",N,{once:!0});const X={type:"run",id:b,code:a,runtimeUrl:s_,interactive:!0};v.postMessage(X)})}sendInput(a){const c=this.pending;!c||!this.worker||this.worker.postMessage({type:"stdin",id:c.id,text:a})}stop(){const a=this.pending;!a||!this.worker||(this.worker.postMessage({type:"stop",id:a.id}),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:a.issues,timedOut:!1,unavailable:!1}),this.restartWorker())}dispose(){var a;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(a=this.worker)==null||a.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const a=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return a.onmessage=c=>this.handleMessage(c.data),a.onerror=c=>{const s=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=a,a}handleMessage(a){var s;const c=this.pending;if(!(!c||a.id!==c.id||a.type==="ready")){if(a.type==="stdout"){(s=c.onOutput)==null||s.call(c,a.text);return}if(a.type==="unavailable"){this.finish({ok:!1,output:"",error:a.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:a.ok,output:a.output,error:a.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(a){var s;const c=this.pending;c&&(window.clearTimeout(c.timer),(s=c.signal)==null||s.removeEventListener("abort",c.abort),this.pending=null,c.resolve(a))}restartWorker(){var a;(a=this.worker)==null||a.terminate(),this.worker=null}}function L0(o){const a=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${a})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${a})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function wf(o,a={}){const c=[],s=new Blob([o]).size;s>jp&&c.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${jp} bytes.`});const u=o.split(/\r?\n/);for(let m=0;m<u.length;m+=1){const p=m+1,b=zo(u[m]).trim();if(!b)continue;const v=H0(b);v&&C0.has(v)&&c.push({level:"error",line:p,text:`${v} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!a.allowInput&&U0(u[m])&&c.push({level:"error",line:p,text:"input() virker kun, når koden kører på Pico via USB. Forbind Pico med USB, gem filen på Picoen, og kør koden derfra."});const y=b.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&G0(y)>Dp&&c.push({level:"error",line:p,text:`range(...) er for stor til offline kørsel. Brug højst ${Dp} gentagelser.`})}for(const m of V0(u))c.push({level:"warning",text:`Funktionen ${m} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function zo(o){let a=null;for(let c=0;c<o.length;c+=1){const s=o[c];if((s==='"'||s==="'")&&o[c-1]!=="\\"&&(a=a===s?null:a??s),s==="#"&&!a)return o.slice(0,c)}return o}function U0(o){const a=zo(o);let c=null;for(let s=0;s<a.length;s+=1){const u=a[s];if((u==='"'||u==="'")&&a[s-1]!=="\\"){c=c===u?null:c??u;continue}if(!c&&!(!Op(a[s-1])||a.slice(s,s+5)!=="input")&&Op(a[s+5])&&a.slice(s+5).trimStart().startsWith("("))return!0}return!1}function Op(o){return!o||!/[A-Za-z0-9_]/.test(o)}function H0(o){const a=o.match(/^import\s+([A-Za-z_]\w*)/);if(a)return a[1];const c=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Cp(o){const a=o.match(/^\s*/);return(a==null?void 0:a[0].replace(/\t/g,"    ").length)??0}function G0(o){const a=Number(o[1]),c=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const p=(c===void 0?a:c)-(c===void 0?0:a);return p>0&&s<0||p<0&&s>0?0:Math.ceil(Math.abs(p/s))}function V0(o){const a=new Set;for(let c=0;c<o.length;c+=1){const s=zo(o[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const u=s[1],m=Cp(o[c]);for(let p=c+1;p<o.length;p+=1){if(!o[p].trim())continue;if(Cp(o[p])<=m)break;if(new RegExp(`\\b${u}\\s*\\(`).test(zo(o[p]))){a.add(u);break}}}return[...a]}const Y0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function q0(o,a){var x;const c=o.trim(),s=a.split(/\r?\n/),u=$0(c),m=u?s[u-1]??"":"",p=I0(s,u),b=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(b))return{simple:"Programmet blev stoppet.",technical:c,line:u};if(/MemoryError/.test(b))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/RecursionError/.test(b))return{simple:`En funktion kalder sig selv for mange gange${u?` omkring linje ${u}`:""}.`,technical:c,line:u};const v=b.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${u?` på linje ${u}`:""}.`,technical:c,line:u};const y=b.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:F0(m,y[1])?`Teksten ${y[1]} mangler måske citationstegn${u?` på linje ${u}`:""}.`:`Python kender ikke navnet ${y[1]}${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ZeroDivisionError/.test(b))return{simple:`Kan ikke dividere med 0${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError:\s+unexpected indent/.test(b))return{simple:`Der er for meget indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError/.test(b))return{simple:`Mangler indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ImportError|ModuleNotFoundError/.test(b)){const N=(x=b.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${N?` ${N}`:""}.`,technical:c,line:u}}if(/OSError/.test(b))return/ENOENT|No such file|Errno\s+2/.test(b)?{simple:`Python kan ikke finde filen${u?` på linje ${u}`:""}.`,technical:c,line:u}:/EACCES|permission|denied/i.test(b)?{simple:`Python har ikke adgang til filen eller enheden${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Der opstod en fejl med en fil eller en enhed${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/SyntaxError/.test(b)){if(/invalid syntax/.test(b)&&p.text.trim().endsWith(","))return{simple:`Linje ${p.line??u} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:p.line??u};const N=Ef(m,u)??Ef(p.text,p.line)??X0(s,u);return N?{simple:`Mangler måske : efter linje ${N.line}.`,technical:c,line:N.line}:u&&p.text.trim().endsWith(":")&&m.trim()&&!/^\s+/.test(m)?{simple:`Mangler måske indrykning på linje ${u}.`,technical:c,line:u}:P0(m)?{simple:`Tekst mangler måske citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:K0(m)?{simple:`Tekst mangler måske et afsluttende citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:Q0(m)?{simple:`Mangler måske en afsluttende parentes${u?` på linje ${u}`:""}.`,technical:c,line:u}:Z0(m)?{simple:`Der er måske en parentes for meget${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en syntaksfejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}return/TypeError/.test(b)?/takes .* positional arguments? but .* given/.test(b)||/function takes/.test(b)?{simple:`En funktion får for mange eller for få værdier${u?` på linje ${u}`:""}.`,technical:c,line:u}:/unsupported operand type/.test(b)?{simple:`To værdier kan ikke bruges sammen på den måde${u?` på linje ${u}`:""}.`,technical:c,line:u}:/not callable/.test(b)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`En værdi har den forkerte type${u?` på linje ${u}`:""}.`,technical:c,line:u}:/IndexError/.test(b)?{simple:`Listen har ikke et element på den plads${u?` på linje ${u}`:""}.`,technical:c,line:u}:/KeyError/.test(b)?{simple:`Ordbogen mangler den nøgle${u?` på linje ${u}`:""}.`,technical:c,line:u}:/AttributeError/.test(b)?{simple:`Den ting har ikke den kommando${u?` på linje ${u}`:""}.`,technical:c,line:u}:/ValueError/.test(b)?/invalid literal for int/.test(b)?{simple:`Teksten kan ikke laves om til et heltal${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Værdien passer ikke her${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en fejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}function $0(o){var u;const c=(u=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:u[1];if(!c)return;const s=parseInt(c,10);return Number.isFinite(s)&&s>0?s:void 0}function I0(o,a){if(!a)return{text:""};for(let c=a-2;c>=0;c-=1){const s=o[c]??"";if(s.trim())return{line:c+1,text:s}}return{text:""}}function Ef(o,a){if(!a)return null;const c=o.trim();return!Y0.test(c)||c.endsWith(":")?null:{line:a}}function X0(o,a){const c=a?Math.min(o.length,a):o.length,s=Math.max(0,c-4);for(let u=c-1;u>=s;u-=1){const m=Ef(o[u]??"",u+1);if(m)return m}return null}function K0(o){const a=(o.match(/'/g)??[]).length,c=(o.match(/"/g)??[]).length;return a%2===1||c%2===1}function P0(o){var s,u;const c=(u=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:u.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function F0(o,a){const c=o.trim();return!!a&&/[A-Za-zæøåÆØÅ]/.test(a)&&(c.startsWith("print(")||c.includes(`= ${a}`))}function Q0(o){return o_(o)>0}function Z0(o){return o_(o)<0}function o_(o){let a=0,c=null;for(let s=0;s<o.length;s+=1){const u=o[s];if((u==='"'||u==="'")&&o[s-1]!=="\\"){c=c===u?null:c??u;continue}c||((u==="("||u==="["||u==="{")&&(a+=1),(u===")"||u==="]"||u==="}")&&(a-=1))}return a}const kf="/min_kode.py",c_=`print('Hej fra Pico Kontrol Panel')
`,Fi="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function gn(o,a){return`${o}:${a}`}function W0(o){return new Promise(a=>window.setTimeout(a,o))}function J0(){const o=J(d=>d.toggleSideMenu),a=J(d=>d.askConfirm),c=J(d=>d.picoIdeOrigin),s=J(d=>d.active),u=J(d=>d.isBleConnected),m=J(d=>d.bleListFiles),p=J(d=>d.bleReadText),b=J(d=>d.bleWriteText),v=J(d=>d.bleDeleteFile),y=J(d=>d.bleRestartAndReconnect),[x,N]=U.useState(!1),[T,X]=U.useState(!1),[P,ne]=U.useState([]),[G,$]=U.useState(!1),[re,fe]=U.useState([]),[ie,de]=U.useState(null),[Ne,ee]=U.useState(()=>gf(of())),[W,ve]=U.useState(kf),[ge,ye]=U.useState("local"),[le,Fe]=U.useState(()=>{var d;return((d=gf(of()).find(g=>g.path===kf))==null?void 0:d.content)??c_}),[je,Qe]=U.useState([]),[C,Q]=U.useState(!1),[ue,xe]=U.useState(""),[Ee,E]=U.useState(""),[L,Z]=U.useState(null),[D,K]=U.useState(!1),[F,I]=U.useState(null),[Ue,Ce]=U.useState(!1),[Vt,In]=U.useState({}),[_e,gt]=U.useState(!1),[wt,De]=U.useState(0),[Et,Bn]=U.useState(()=>{var d,g;return((d=fl.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((g=fl[0])==null?void 0:g.board)??""}),[zt,Ar]=U.useState(()=>{var d,g;return((d=fl.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((g=fl[0])==null?void 0:g.version)??""}),[jr,yn]=U.useState(!1),[Fl,Dr]=U.useState({top:0,left:0}),[bt,dl]=U.useState(!1),[ml,$a]=U.useState(!1),[hl,Pt]=U.useState(!0),[nn,Xn]=U.useState(""),[Ql,pl]=U.useState([]),[yt,rn]=U.useState(null),[Nt,Or]=U.useState(!1),[Cr,rr]=U.useState({}),[Kn,Yt]=U.useState({}),[Ke,Rt]=U.useState(null),[dt,Bt]=U.useState(null),[Go,Ia]=U.useState(""),[Pn,_l]=U.useState(()=>ap().clearTerminalOnRun),[lr,rs]=U.useState(()=>ap().simplifiedErrors),[Zl,ls]=U.useState(()=>typeof navigator<"u"?Up(navigator):!1),zr=U.useRef(null),vn=U.useRef(null),st=U.useRef(null),Xa=U.useRef(null),ln=U.useRef(null),ot=U.useRef(null),ct=U.useRef(null),Tt=U.useRef(!1),Ln=U.useRef(!1),gl=U.useRef(!1),Un=U.useRef(""),ar=U.useRef(null),Hn=U.useRef(null),Gn=U.useRef(null),Fn=U.useRef(null),qt=U.useRef(null),Vn=U.useRef(null),Ft=U.useRef(0),Ze=U.useRef(null),ir=U.useRef(null),Ka=U.useRef(null),an=U.useRef(null),sn=j0(),he=c==="control"&&!!s&&u(),Wl=he?(s==null?void 0:s.deviceID)??"ble":null,as=Math.max(1,le.split(`
`).length),Vo=new Blob([le]).size,Jl=ge==="pico"?"Picoen":"browseren",ea=U.useMemo(()=>[...new Set(fl.map(d=>d.board))],[]),$t=U.useMemo(()=>fl.filter(d=>d.board===Et),[Et]),vt=fl.find(d=>d.board===Et&&d.version===zt)??$t[0]??fl[0],on=ge==="pico",Pa=on?bt:ml,Lt=on&&bt&&x&&!he||!on&&ml&&!!Gn.current,is=Nt||Pa&&!Lt,ta=Lt?"stdin":">>>",ss=Lt?on?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":on?"Pico MicroPython":"Browser-MicroPython",Ut=U.useMemo(()=>{const d=new D0({onData:g=>{Ln.current||!Tt.current||(Un.current=(Un.current+g).slice(-240),/(^|\r?\n)>>> ?$/.test(Un.current)&&Qa())},onLine:g=>{if(Ln.current)return;const S=g.trimEnd();if(gl.current&&S.trim()){Y("info",S);return}if(Tt.current&&os(S)){Qa();return}Tt.current&&S.trim()&&!Fa(S)&&!S.includes("raw REPL")&&Y("info",S)},onLog:Y,onDisconnect:()=>{N(!1),dl(!1),Or(!1),Tt.current=!1,gl.current=!1,xn(),Un.current="",Lr(),Y("warning","USB-forbindelse lukket.")}});return zr.current=d,d},[]);function Y(d,g){ne(S=>[...S.slice(-140),{level:d,text:g}])}function os(d){return d.trim()===">>>"}function Fa(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function xn(){ar.current!==null&&(window.clearTimeout(ar.current),ar.current=null)}function Qa(){!Tt.current||ar.current!==null||(ar.current=window.setTimeout(()=>{ar.current=null,Tt.current&&(dl(!1),Tt.current=!1,Un.current="",Y("success","Pico-koden er færdig."))},0))}function bl(d,g=le,S="error"){const z=q0(d,g);ne(j=>[...j.slice(-140),{level:S,text:z.simple,technical:z.technical}])}function tt(d,g,S=ge){ve(d),ye(S),Fe(g),Yt(z=>({...z,[gn(S,d)]:g}))}function cs(d,g="pico"){ve(d),ye(g),Fe(""),Rt(null),Dr({top:0,left:0})}function Br(d,g=(S=>(S=ln.current)==null?void 0:S.selectionStart)()??d.length){Fe(d),Yt(z=>({...z,[gn(ge,W)]:d})),Ia(""),Hr(d,g)}function yl(d,g=ge){Yt(S=>{const z=gn(g,d);if(!(z in S))return S;const j={...S};return delete j[z],j})}function Za(){return Cr[W]===le}function Qt(d,g){rr(S=>({...S,[d]:g}))}function us(d,g){Qt(d,g),Yt(S=>({...S,[gn("pico",d)]:g})),ge==="pico"&&W===d&&Fe(g)}function Lr(){fe([]),Qe([]),rr({}),Yt({}),Rt(null),ve(d=>{const g=gf(of());if(g.find(j=>j.path===d))return d;const z=g[0];return ye("local"),Fe(z.content),z.path})}function nt(d){sr(),I({value:100,label:d}),an.current=window.setTimeout(()=>{an.current=null,I(null)},900)}function sr(){an.current!==null&&(window.clearTimeout(an.current),an.current=null)}function Wa(){return F?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(F.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:F.label}),f.jsxs("strong",{children:[Math.round(F.value),"%"]}),F.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Ur,"aria-label":"Stop handling",title:"Stop",children:f.jsx(Kt,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,F.value))}%`}})})]}):null}function Ur(){qt.current&&Sn("Stopper læsning...",!0,!0)}function Sn(d="Stopper læsning...",g=!1,S=!1){var z;sr(),ir.current=null,Ft.current+=1,(z=qt.current)==null||z.abort(),qt.current=null,Ze.current=null,de(null),$(!1),I(g?{value:(F==null?void 0:F.value)??0,label:d,cancellable:!1}:null),S&&Y("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function fs(d){var g;if(!(Ze.current===d||ir.current===d)){if(ir.current=d,Vn.current){Ft.current+=1,(g=qt.current)==null||g.abort(),qt.current=null,Ze.current=null,cs(d),de(d),$(!0),sr(),I({value:2,label:`Skifter til ${ze(d)}...`,cancellable:!0});return}na()}}function na(){if(Vn.current)return;const d=ir.current;if(!d)return;ir.current=null;const g=Ft.current+1;Ft.current=g;const S=new AbortController;qt.current=S,Ze.current=d,cs(d),de(d),$(!0),sr(),I({value:12,label:`Indlæser ${ze(d)}...`,cancellable:!0});const z=(async()=>{try{const j=await p(d,(se,Se)=>{Ft.current===g&&I({value:se,label:Se,cancellable:!0})},S.signal);if(S.signal.aborted||Ft.current!==g)return;tt(d,j,"pico"),Qt(d,j),nt("Fil indlæst")}catch(j){if(Ft.current!==g)return;ny(j)||S.signal.aborted?Y("info",`Stoppede læsning af ${ze(d)}.`):(I(null),Y("error",j instanceof Error?j.message:"BLE læsning fejlede."))}})();Vn.current=z,z.finally(()=>{if(Vn.current!==z)return;Vn.current=null,qt.current===S&&(qt.current=null),Ze.current===d&&(Ze.current=null),!!ir.current||(de(null),$(!1),S.signal.aborted&&I(null)),na()})}async function vl(d){const g=Ln.current;Ln.current=!0;try{return await d()}finally{Ln.current=g}}U.useEffect(()=>{if(!hl)return;const d=ot.current;d&&(d.scrollTop=d.scrollHeight)},[P,hl]),U.useEffect(()=>{rb({clearTerminalOnRun:Pn,simplifiedErrors:lr})},[Pn,lr]),U.useEffect(()=>{var d;$t.some(g=>g.version===zt)||Ar(((d=$t[0])==null?void 0:d.version)??"")},[$t,zt]),U.useEffect(()=>{ls(Up(navigator))},[]),U.useEffect(()=>{const d=()=>{const g=zr.current;vn.current=null,st.current=null,zr.current=null,g==null||g.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var g,S;sr(),(g=Hn.current)==null||g.dispose(),Hn.current=null,(S=Gn.current)==null||S.dispose(),Gn.current=null,window.removeEventListener("pagehide",d),d()}},[]),U.useEffect(()=>{const d=g=>{!(g.ctrlKey||g.metaKey)||g.key.toLowerCase()!=="s"||(g.preventDefault(),!G&&W.trim()&&!Zl&&!D&&!L&&!C&&ds())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ge,he,G,x,le,W,Zl,D,L,C]);function Qn(d,g,S){ee(z=>{const j=my(z,d,g,S);return cf(j),j})}const wn=gy(re,Ne,Kn,x||he);U.useEffect(()=>{he&&rt()},[he]),U.useEffect(()=>{const d=Ka.current;d&&d!==Wl&&Lr(),Ka.current=Wl},[Wl]);async function Ja(){if(sn.supported){X(!0);try{await Ut.requestAndConnect();const d=new f0(Ut);vn.current=d,st.current=new g0(d),N(!0),De(0),await d.interrupt(),await xl(d),Y("success","Sendte stop-signal til Pico-terminalen."),await ei(st.current),await ti(st.current)}catch(d){Y("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await Ut.disconnect()}catch(g){Y("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.");return}De(g=>{const S=g+1;return S>=3&&(Y("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),gt(!0)),S}),N(!1)}finally{X(!1)}}}async function xl(d){const g=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(g.error||!g.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Zn(){var d;try{await((d=zr.current)==null?void 0:d.disconnect()),vn.current=null,st.current=null,N(!1),Lr()}catch(g){Y("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.")}}async function cn(d){const g=st.current;if(g){$(!0),Ln.current=!0;try{await d(g)}catch(S){I(null),Y("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{Ln.current=!1,$(!1)}}}async function rt(d=!0){if(he){$(!0);try{const g=await m();fe(g),d&&Y("success",`Indlæste ${g.length} filer fra Pico via Bluetooth.`)}catch(g){Y("error",g instanceof Error?g.message:"BLE filhandling fejlede.")}finally{$(!1)}return}await ei(st.current,d)}async function ei(d,g=!0){if(d){$(!0);try{const S=await vl(()=>d.list("/"));fe(S),g&&Y("success",`Indlæste ${S.length} filer fra Pico.`)}catch(S){Y("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{$(!1)}}}async function Wn(){if(he){$(!0),I({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Sl((g,S)=>I({value:g,label:S}));Qe(d),nt("Fil-tjek færdigt")}catch(d){I(null),Y("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{$(!1)}return}await ti(st.current)}async function Sl(d){const g=[],S=Ba.filter(j=>j.kind==="library"&&!Xl(j));let z=0;for(const j of Ba){if(j.kind==="program"){g.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Xl(j)){g.push({...j,status:"unknown",detail:"Opdateres via USB"});continue}try{const se=z/Math.max(1,S.length)*100,Se=100/Math.max(1,S.length);Y("info",`Tjekker ${j.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,se),`Tjekker ${j.label} på Pico...`);const We=await p(j.path,(It,ur)=>{d==null||d(Math.min(95,se+It/100*Se),`${j.label}: ${ur}`)}),Ge=za(We)===za(j.content);g.push({...j,status:Ge?"ok":"outdated",detail:Ge?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{g.push({...j,status:"missing",detail:"Mangler på Pico"})}finally{z+=1}}return d==null||d(100,"Fil-tjek færdigt"),g}async function ti(d){if(d){$(!0);try{const g=await vl(()=>Mt(d)),S=g;Qe(S)}catch(g){Y("error",g instanceof Error?g.message:"Runtime check fejlede.")}finally{$(!1)}}}async function Mt(d){if(!d)return[];const g=[];for(const S of Ba){if(S.kind==="program"){g.push({...S,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const z=await d.readText(S.path),j=za(z)===za(S.content);g.push({...S,status:j?"ok":"outdated",detail:j?"Matcher appens version":"Matcher ikke appens version"})}catch{g.push({...S,status:"missing",detail:"Mangler på Pico"})}}return g}async function or(d=W){if(he){fs(d);return}de(d),await cn(async g=>{I({value:12,label:`Indlæser ${ze(d)}...`});const S=await ra(g,d);tt(d,S,"pico"),Qt(d,S),nt("Fil indlæst")}),de(null)}async function ra(d,g){var S;try{return await d.readText(g)}catch(z){await((S=vn.current)==null?void 0:S.stop().catch(()=>{})),await W0(120);try{return await d.readText(g)}catch{throw z}}}function wl(){K(!0)}async function ds(){if(ge==="pico"){if(!x&&!he){Y("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await El();return}la()}function la(){if(La(W)){Y("error",Fi);return}Qn(W,le,!1),ye("local"),Yt(d=>({...d,[gn("local",W)]:le})),K(!1),Y("success",`Gemte ${ze(W)} lokalt.`)}async function El(){if(K(!1),La(W))return I(null),Y("error",Fi),!1;if(I({value:0,label:"Starter gemning..."}),he){$(!0);try{return await b(W,le,(g,S)=>I({value:g,label:S})),Qt(W,le),ye("pico"),Yt(g=>({...g,[gn("pico",W)]:le})),nt("Gemt på Pico via Bluetooth"),Y("success",`Gemte ${ze(W)} på Pico via Bluetooth.`),Ro(W)&&(yn(!0),Y("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await rt(!1),!0}catch(g){return I(null),Y("error",g instanceof Error?g.message:"BLE gem fejlede."),!1}finally{$(!1)}}if(!st.current)return I(null),!1;let d=!1;return await cn(async g=>{Rl(W,"pico")?await g.replaceTextSafely(W,le,(S,z)=>I({value:S,label:z})):await g.writeText(W,le,(S,z)=>I({value:S,label:z})),Qt(W,le),ye("pico"),Yt(S=>({...S,[gn("pico",W)]:le})),nt("Gemt på Pico via USB"),Y("success",`Gemte ${W}.`),await rt(),await Wn(),d=!0}),d}function kl(){Nl(ze(W),le),K(!1),Y("success",`Downloadede ${ze(W)}.`)}function Nl(d,g){const S=new Blob([g],{type:"text/plain;charset=utf-8"}),z=URL.createObjectURL(S),j=document.createElement("a");j.href=z,j.download=d,j.click(),URL.revokeObjectURL(z)}async function ni(d){$(!0),yn(!1),I({value:10,label:"Genstarter Pico..."});try{await y(d)?(nt("Pico genforbundet"),Y("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await rt()):(I(null),Y("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(g){I(null),Y("error",g instanceof Error?g.message:"Genstart/genforbindelse mislykkedes.")}finally{$(!1)}}function ms(d){var se;const g=d??{path:W,source:ge},S=g.source==="pico"?"Pico":"browser",z=g.source==="pico"?(d==null?void 0:d.versions.length)??((se=Tf(re).get(g.path))==null?void 0:se.length)??0:0,j=z>0?` Det sletter også filens versionshistorik (${z} gemte versioner).`:"";Z(null),a({title:"Slet fil",message:`Vil du slette ${ze(g.path)} fra ${S}?${j}`,confirmLabel:"Slet",onConfirm:()=>{ri(g)}})}function Yo(){a({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, sÃ¥ Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{qo()}})}async function qo(){if(!st.current){Y("error","Forbind Picoen med USB fÃ¸rst.");return}await cn(async d=>{await d.delete("/DeviceSettings.txt").catch(g=>{const S=g instanceof Error?g.message:"";if(!/ENOENT|No such file|not found/i.test(S))throw g}),rr(g=>{const S={...g};return delete S["/DeviceSettings.txt"],S}),yl("/DeviceSettings.txt","pico"),Y("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var Ã¥bent."),await rt()})}async function ri(d){const g=d.path,S=d.source,z=g===W&&S===ge;if(S==="local"){const Se=Ne.filter(We=>We.path!==g);ee(Se),cf(Se),z&&tt(g,"","local"),yl(g,"local"),Y("warning",`Slettede ${ze(g)} fra browseren.`);return}const j=Tf(re).get(g)??[],se=[g,...j.map(Se=>Se.path)];if(he){$(!0);try{for(const We of se)await v(We);rr(We=>{const Ge={...We};for(const It of se)delete Ge[It];return Ge}),z&&tt(g,"","pico");for(const We of se)yl(We,"pico");const Se=j.length>0?` og ${j.length} gemte versioner`:"";Y("warning",`Slettede ${ze(g)}${Se} på Pico via Bluetooth.`),await rt()}catch(Se){Y("error",Se instanceof Error?Se.message:"BLE sletning fejlede.")}finally{$(!1)}return}if(!st.current){Y("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await cn(async Se=>{for(const Ge of se)await Se.delete(Ge);rr(Ge=>{const It={...Ge};for(const ur of se)delete It[ur];return It});const We=j.length>0?` og ${j.length} gemte versioner`:"";Y("warning",`Slettede ${g}${We}.`),z&&tt(g,"","pico");for(const Ge of se)yl(Ge,"pico");await rt(),await Wn()})}async function $o(d){if(!d)return;const g=ey(d.name);if(!g){Y("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(La(g)){Y("error",Fi);return}if(d.size>128*1024){Y("error","Filen er for stor til Pico-værkstedet.");return}const S=await d.text();if(ge==="local"){Qn(g,S,!0),tt(g,S,"local"),Y("success",`Importerede ${ze(g)} i browseren.`);return}if(!x&&!he){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&Xl({path:g})){Y("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(I({value:0,label:"Uploader fil til Pico..."}),he){$(!0);try{await b(g,S,(j,se)=>I({value:j,label:se})),Qt(g,S),tt(g,S,"pico"),nt("Fil uploadet til Pico"),Y("success",`Importerede ${ze(g)} på Pico via Bluetooth.`),await rt()}catch(j){I(null),Y("error",j instanceof Error?j.message:"Kunne ikke importere filen til Pico.")}finally{$(!1)}return}if(!st.current){I(null),Y("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await cn(async j=>{Rl(g,"pico")?await j.replaceTextSafely(g,S,(se,Se)=>I({value:se,label:Se})):await j.writeText(g,S,(se,Se)=>I({value:se,label:Se})),Qt(g,S),tt(g,S,"pico"),nt("Fil uploadet til Pico"),Y("success",`Importerede ${ze(g)} på Pico.`),await rt(),await Wn()})}async function Io(){xe(""),Q(!0)}function Xo(){const d=zp(ue);if(!d)return;if(La(d)){Y("error",Fi);return}const g=ge;if(Rl(d,g)){Y("error",`Der findes allerede en fil med navnet ${ze(d)} i ${g==="pico"?"Pico":"browseren"}.`);return}if(g==="local"){Qn(d,"",!1),tt(d,"","local"),Q(!1),Y("success",`Oprettede ${ze(d)} i browseren.`);return}Ko(d)}async function Ko(d){if(!x&&!he){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Q(!1),I({value:0,label:"Opretter fil på Pico..."}),he){$(!0);try{await b(d,"",(g,S)=>I({value:g,label:S})),Qt(d,""),tt(d,"","pico"),nt("Fil oprettet på Pico"),Y("success",`Oprettede ${ze(d)} på Pico via Bluetooth.`),await rt()}catch(g){I(null),Y("error",g instanceof Error?g.message:"Kunne ikke oprette fil på Pico.")}finally{$(!1)}return}if(!st.current){I(null),Y("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await cn(async g=>{await g.writeText(d,"",(S,z)=>I({value:S,label:z})),Qt(d,""),tt(d,"","pico"),nt("Fil oprettet på Pico"),Y("success",`Oprettede ${ze(d)} på Pico.`),await rt()})}function Po(d){d.type==="file"&&(Z(d),E(ty(d.path)))}async function hs(d){if(!L||L.source!=="pico")return;const g=L.path;if(Z(null),I({value:0,label:"Gendanner version..."}),he){$(!0);try{const S=await p(d.path);await b(g,S,(z,j)=>I({value:z,label:j})),Qt(g,S),tt(g,S,"pico"),nt("Version gendannet"),await rt(!1)}catch(S){I(null),Y("error",S instanceof Error?S.message:"Kunne ikke gendanne versionen.")}finally{$(!1)}return}st.current&&await cn(async S=>{await S.replaceTextSafely(g,await S.readText(d.path),(j,se)=>I({value:j,label:se}));const z=await S.readText(g);Qt(g,z),tt(g,z,"pico"),nt("Version gendannet"),await rt()})}function Fo(d){a({title:"Slet version",message:`Vil du slette ${ze(d.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Qo(d)}})}async function Qo(d){if(he){$(!0);try{await v(d.path),await rt(!1),Z(g=>g&&{...g,versions:g.versions.filter(S=>S.path!==d.path)})}catch(g){Y("error",g instanceof Error?g.message:"Kunne ikke slette versionen.")}finally{$(!1)}return}st.current&&await cn(async g=>{await g.delete(d.path),await rt(!1),Z(S=>S&&{...S,versions:S.versions.filter(z=>z.path!==d.path)})})}async function Zo(){if(!L)return;const d=L,g=_f(Ee,Qi(d.path));if(!g||g===d.path)return;if(La(g)){Y("error",Fi);return}if(Rl(g,d.source)){Y("error",`Der findes allerede en fil med navnet ${ze(g)}.`);return}const S=d.source==="local",z=d.source==="pico";if(he&&z&&(Ro(d.path)||Ro(g))){Y("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}$(!0);try{if(z)if(he){const j=Cr[d.path]??await p(d.path);await b(g,j,(se,Se)=>I({value:se,label:Se})),await v(d.path),rr(se=>({...qp(se,d.path,g),[g]:j}))}else st.current&&(await vl(()=>st.current.rename(d.path,g)),rr(j=>qp(j,d.path,g)));S&&ee(j=>{const se=j.map(Se=>Se.path===d.path?{...Se,path:g,updatedAt:Date.now()}:Se);return cf(se),se}),W===d.path&&ge===d.source&&ve(g),Yt(j=>vy(j,d.source,d.path,g)),Z(null),E(""),Y("success",`Omdøbte ${ze(d.path)} til ${ze(g)}.`),z&&await rt()}catch(j){Y("error",j instanceof Error?j.message:"Kunne ikke omdøbe filen.")}finally{I(null),$(!1)}}function Rl(d,g){return g==="pico"?re.some(S=>S.path===d):Ne.some(S=>S.path===d)}async function li(d,g){if(!Rl(d,"pico"))return;const S=py(d,re),z=Cr[d]??await p(d);g!==void 0&&za(z)===za(g)||await b(S,z)}function Wo(d){if(d.type!=="file"){he&&Sn(void 0,!1),ve(d.path),ye(d.source);return}if(he&&Xl(d)){Y("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){he&&Sn(void 0,!1);const S=Ne.find(z=>z.path===d.path);tt(d.path,Kn[gn("local",d.path)]??(S==null?void 0:S.content)??"","local");return}const g=gn("pico",d.path);if(Object.prototype.hasOwnProperty.call(Kn,g)){he&&Sn(void 0,!1),tt(d.path,Kn[g],"pico");return}if(Object.prototype.hasOwnProperty.call(Cr,d.path)){he&&Sn(void 0,!1),tt(d.path,Cr[d.path],"pico");return}or(d.path)}async function ps(){if(!x&&!he){const d=Bp();Qe(d),In(Lp(d)),Ce(!0),I(null);return}$(!0),I({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),Y("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=je.length>0?je:he?await Sl((g,S)=>I({value:g,label:S})):await vl(()=>Mt(st.current));Qe(d),In(Lp(d)),Ce(!0),I(null)}catch(d){I(null),Y("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{$(!1)}}async function Jo(){if(Ce(!1),he){$(!0);try{const g=(je.length>0?je:Ba.map(z=>({...z,status:"unknown",detail:"Ikke tjekket"}))).filter(z=>Vt[z.id]&&!Xl(z));if(g.length===0){Y("info","Ingen filer valgt til installation.");return}let S=null;I({value:0,label:"Starter installation..."});for(const[z,j]of g.entries()){Y("info",`Installerer ${j.label} via Bluetooth...`);const se=z/g.length*100,Se=100/g.length;await li(j.path,j.content),await b(j.path,j.content,(We,Ge)=>{I({value:Math.min(99,se+We/100*Se),label:`${j.label}: ${Ge}`})}),us(j.path,j.content),Y("success",`Installerede ${j.label}.`),j.kind==="library"&&(S=j),Ro(j.path)&&yn(!0)}nt("Installation færdig"),await rt(!1),await Wn(),S&&_s(S)}catch(d){I(null),Y("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{$(!1)}return}await cn(async d=>{const S=(je.length>0?je:Ba.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Vt[j.id]);if(S.length===0){Y("info","Ingen filer valgt til installation.");return}let z=null;I({value:0,label:"Starter installation..."});for(const[j,se]of S.entries()){Y("info",`Installerer ${se.label}...`);const Se=j/S.length*100,We=100/S.length;await d.replaceTextSafely(se.path,se.content,(Ge,It)=>{I({value:Math.min(99,Se+Ge/100*We),label:`${se.label}: ${It}`})},{createBackup:!0}),us(se.path,se.content),Y("success",`Installerede ${se.label}.`),se.kind==="library"&&(z=se)}nt("Installation færdig"),await rt(!1),await Wn(),z&&_s(z)})}function ai(){return(je.length>0?je:Bp()).filter(g=>Vt[g.id])}function ec(){const d=ai();if(d.length===0){Y("info","Ingen filer valgt.");return}for(const g of d)Qn(g.path,g.content,!1);Ce(!1),Y("success",`Gemte ${d.length} filer i browseren.`)}function tc(){const d=ai();if(d.length===0){Y("info","Ingen filer valgt.");return}d.forEach((g,S)=>{window.setTimeout(()=>{Nl(ze(g.path),g.content)},S*120)}),Ce(!1),Y("success",`Starter download af ${d.length} filer.`)}function _s(d){tt(d.path,d.content,"pico"),Qt(d.path,d.content),Y("info",`Åbnede ${d.label} i editoren.`)}function nc(d,g){In(S=>{if(d.kind!=="program")return{...S,[d.id]:g};const z={...S};for(const j of je)j.kind==="program"&&(z[j.id]=!1);return z[d.id]=g,z})}async function rc(){if(ys(),he&&ge==="pico"){Y("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ge==="local"){await lc();return}const d=vn.current;if(!d){Y("error",`${ze(W)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(W.endsWith(".py")){if(!Za()&&(Y("info",`${ze(W)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await El())){Y("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(G)return;xn(),Un.current="",Pt(!0);try{await d.runFile(W,()=>{xn(),Un.current="",gl.current=!1,dl(!0),Tt.current=!0}),Y("success",`Kører ${ze(W)}. Brug Stop for at afbryde.`)}catch(g){dl(!1),Tt.current=!1,xn(),Un.current="",Y("error",g instanceof Error?g.message:"Kunne ikke starte koden.")}return}$(!0);try{const g=await d.exec(le,2e4);g.output.trim()&&Y("info",g.output),g.error.trim()&&bl(g.error,le),!g.output.trim()&&!g.error.trim()&&Y("success","Koden kørte uden output.")}catch(g){Y("error",g instanceof Error?g.message:"Kunne ikke køre koden.")}finally{$(!1)}}async function lc(){const d=wf(le,{allowInput:!0});if(d.some(z=>z.level==="error")){for(const z of d){const j=z.line?`Linje ${z.line}: `:"";Y(z.level==="error"?"error":"warning",`${j}${z.text}`)}return}const g=new AbortController;Fn.current=g;const S=new B0;Gn.current=S,$(!0),$a(!0),Pt(!0),Y("info",x?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const z=[],j=await S.run(le,{signal:g.signal,onOutput:Ge=>{z.push(Ge),Y("info",Ge)}});for(const Ge of j.issues){const It=Ge.line?`Linje ${Ge.line}: `:"";Y(Ge.level==="error"?"error":"warning",`${It}${Ge.text}`)}const se=[...z,j.output].filter(Boolean).join(`
`).trim(),Se=j.output.trim();!j.error.trim()&&ry(se)?bl(se,le):(Se&&Y("info",Se),j.error.trim()&&bl(j.error,le,j.unavailable?"warning":"error")),j.ok&&!se&&!j.error.trim()&&Y("success","Offline MicroPython kørte uden output.")}finally{Fn.current=null,Gn.current=null,S.dispose(),$a(!1),$(!1)}}async function ac(){var g,S,z;if(ml){(g=Fn.current)==null||g.abort(),(S=Gn.current)==null||S.stop(),Y("warning","Stoppede offline MicroPython."),Pt(!0);return}if(!on&&Nt){(z=Hn.current)==null||z.reset(),Or(!1),Y("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Pt(!0);return}const d=vn.current;if(d)try{await d.stop(),Y("warning","Stoppede koden på Pico.")}catch(j){Y("error",j instanceof Error?j.message:"Kunne ikke stoppe koden.")}finally{dl(!1),Tt.current=!1,xn(),Un.current="",Pt(!0)}}function ic(){const d=ot.current;if(!d)return;const g=d.scrollHeight-d.scrollTop-d.clientHeight<12;Pt(g)}function sc(){ne([]),Pt(!0)}async function Tl(){const d=Lt?nn:nn.trimEnd();if(Lt){if(!on){const z=Gn.current;if(!z){Y("warning","Browser-MicroPython kører ikke lige nu."),Ht();return}Xn(""),Pt(!0),z.sendInput(d),Ht();return}const S=vn.current;if(!S){Y("warning","Pico-terminalen er ikke forbundet."),Ht();return}Xn(""),Pt(!0);try{await S.sendProgramInput(d)}catch(z){Y("error",z instanceof Error?z.message:"Kunne ikke sende input til Pico-koden.")}finally{Ht()}return}if(!d.trim())return;if(pl(S=>(S.at(-1)===d?S:[...S,d]).slice(-80)),rn(null),Bt(null),Pa){Y("warning",on?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Ht();return}if(!on){const S=wf(d);if(S.some(j=>j.level==="error")){for(const j of S){const se=j.line?"Linje "+j.line+": ":"";Y(j.level==="error"?"error":"warning",se+j.text)}Ht();return}const z=Hn.current??new z0;Hn.current=z,Xn(""),Or(!0),Pt(!0),Y("info",">>> "+d);try{let j=!1;const se=await z.send(d,{timeoutMs:15e3,onOutput:We=>{j=!0,Y("info",We)}}),Se=se.output.trim();Se&&!j&&Y("info",Se),se.error.trim()&&bl(se.error,d,se.unavailable?"warning":"error")}catch(j){Y("error",j instanceof Error?j.message:"Browser-MicroPython-terminalen fejlede.")}finally{Or(!1),Ht()}return}if(he){Y("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Ht();return}const g=vn.current;if(!x||!g){Y("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Ht();return}Xn(""),Or(!0),Pt(!0),gl.current=!0,Y("info",">>> "+d);try{await g.sendFriendlyLine(d)}catch(S){gl.current=!1,Y("error",S instanceof Error?S.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Or(!1),Ht()}}function Ht(){window.requestAnimationFrame(()=>{const d=ct.current;if(!d||d.disabled)return;d.focus();const g=d.value.length;d.selectionStart=g,d.selectionEnd=g})}function gs(d,g,S){return S.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:d}),f.jsx("p",{children:g})]}),S.map(z=>{const j=he&&Xl(z);return f.jsxs("label",{className:`ide-install-row ${j?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!Vt[z.id],disabled:j,onChange:se=>nc(z,se.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[bs(z),(z.kind==="library"||!x&&!he)&&f.jsx("em",{className:`ide-install-status status-${z.status}`,children:j?"USB":_y(z.status)})]}),f.jsxs("small",{children:[z.description,!x&&!he?` ${z.detail}`:""]})]})]},z.id)})]})}function bs(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function ys(){Pn&&ne([]),Pt(!0)}function vs(d,g){const S=d.indexOf(`
`,g);return S===-1?d.length:S}function Hr(d,g){const S=Rf(d,g);if(!S||S.query.length<1){Rt(null);return}const z=Hp(d,g,!0).slice(0,8),j=Gp(ln.current,S.start);Rt(z.length>0&&j?{items:z,selected:0,start:S.start,end:g,position:j}:null)}function Ml(d,g){const S=Rf(d,g);if(!S||S.query.length<1){Bt(null);return}const z=Hp(d,g,!1).slice(0,8),j=Gp(ct.current,S.start);Bt(z.length>0&&j?{items:z,selected:0,start:S.start,end:g,position:j}:null)}function cr(d){const g=d.value.slice(d.selectionStart,d.selectionEnd);Ia(uy(g)?g:"")}function ii(d=Ke==null?void 0:Ke.items[Ke.selected]){if(!d||!Ke)return;const g=le.slice(0,Ke.start)+d.insert+le.slice(Ke.end),S=Ke.start+d.insert.length-(d.insert.endsWith("()")?1:0);Fe(g),Yt(z=>({...z,[gn(ge,W)]:g})),Rt(null),window.requestAnimationFrame(()=>{const z=ln.current;z&&(z.focus(),z.selectionStart=S,z.selectionEnd=S,Hr(g,S))})}function xs(d=dt==null?void 0:dt.items[dt.selected]){if(!d||!dt)return;const g=nn.slice(0,dt.start)+d.insert+nn.slice(dt.end),S=dt.start+d.insert.length-(d.insert.endsWith("()")?1:0);Xn(g),Bt(null),window.requestAnimationFrame(()=>{const z=ct.current;z&&(z.focus(),z.selectionStart=S,z.selectionEnd=S,Ml(g,S))})}function oc(d){var ur;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!G&&W.trim()&&ds();return}if(Ke){if(d.key==="ArrowDown"){d.preventDefault(),Rt(Ve=>Ve&&{...Ve,selected:(Ve.selected+1)%Ve.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Rt(Ve=>Ve&&{...Ve,selected:(Ve.selected-1+Ve.items.length)%Ve.items.length});return}if(d.key==="Tab"){d.preventDefault(),ii();return}if(d.key==="Enter"){if(!(Ke.items[Ke.selected]&&f_(Ke.items[Ke.selected],le.slice(Ke.start,Ke.end)))){d.preventDefault(),ii();return}Rt(null)}if(d.key==="Escape"){d.preventDefault(),Rt(null);return}}if(d.key==="Enter"){d.preventDefault();const Ve=d.currentTarget,fr=Ve.selectionStart,si=Ve.selectionEnd,Al=le.lastIndexOf(`
`,fr-1)+1,Gr=le.slice(Al,fr),oi=((ur=Gr.match(/^[ \t]*/))==null?void 0:ur[0])??"",At=Gr.trimEnd().endsWith(":")?"    ":"",dr=`
${oi}${At}`,aa=le.slice(0,fr)+dr+le.slice(si),Vr=fr+dr.length;Br(aa,Vr),window.requestAnimationFrame(()=>{Ve.selectionStart=Vr,Ve.selectionEnd=Vr});return}if(d.key!=="Tab")return;d.preventDefault();const g=d.currentTarget,S=g.selectionStart,z=g.selectionEnd,j="    ";if(d.shiftKey){const Ve=le.lastIndexOf(`
`,S-1)+1,fr=S===z?vs(le,S):z,si=le.slice(Ve,fr);let Al=0,Gr=0;const oi=si.replace(/(^|\n)( {1,4}|\t)/g,(dr,aa,Vr,ws)=>{const ci=Vr.length;return Ve+ws<S&&(Al+=ci),Gr+=ci,aa});if(Gr===0)return;const At=le.slice(0,Ve)+oi+le.slice(fr);Br(At,Math.max(Ve,S-Al)),window.requestAnimationFrame(()=>{g.selectionStart=Math.max(Ve,S-Al),g.selectionEnd=S===z?g.selectionStart:Math.max(g.selectionStart,z-Gr)});return}if(S===z){const Ve=le.slice(0,S)+j+le.slice(z);Br(Ve,S+j.length),window.requestAnimationFrame(()=>{g.selectionStart=S+j.length,g.selectionEnd=S+j.length});return}const se=le.lastIndexOf(`
`,S-1)+1,We=le.slice(se,z).replace(/^/gm,j),Ge=We.split(`
`).length,It=le.slice(0,se)+We+le.slice(z);Br(It,S+j.length),window.requestAnimationFrame(()=>{g.selectionStart=S+j.length,g.selectionEnd=z+Ge*j.length})}function Ss(d){if(Lt){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),Tl());return}if(dt){if(d.key==="ArrowDown"){d.preventDefault(),Bt(g=>g&&{...g,selected:(g.selected+1)%g.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Bt(g=>g&&{...g,selected:(g.selected-1+g.items.length)%g.items.length});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),xs();return}if(d.key==="Escape"){d.preventDefault(),Bt(null);return}}if(d.key==="Tab"){d.preventDefault();const g=d.currentTarget,S=g.selectionStart,z=g.selectionEnd,j="    ",se=nn.slice(0,S)+j+nn.slice(z),Se=S+j.length;Xn(se),rn(null),Bt(null),window.requestAnimationFrame(()=>{g.selectionStart=Se,g.selectionEnd=Se});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===nn.length&&d.currentTarget.selectionEnd===nn.length)||Ql.length===0)return;d.preventDefault();const S=d.key==="ArrowUp"?yt===null?Ql.length-1:Math.max(0,yt-1):yt===null||yt+1>=Ql.length?null:yt+1;rn(S);const z=S===null?"":Ql[S]??"";Xn(z),Bt(null),window.requestAnimationFrame(()=>{const j=ct.current;j&&(j.selectionStart=z.length,j.selectionEnd=z.length)});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),Tl())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(Bf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Zl?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Io,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(Kt,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=Xa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(Kt,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>rt(),disabled:!x&&!he||G,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(Kt,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:wn.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):wn.map(d=>{if(d.kind==="separator"){const j=d.id==="pico-files"&&!x&&!he;return f.jsxs(U.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:d.label})}),j&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const g=he&&Xl(d),S=Kn[gn(d.source,d.path)],z=S!==void 0&&S!==hy(d,Ne,Cr);return f.jsxs("div",{className:`ide-file-row ${W===d.path&&ge===d.source?"active":""} ${g?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>Wo(d),disabled:g,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:d.name}),f.jsxs("small",{title:z?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.source==="pico"&&d.versions.length>0&&f.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),f.jsx("i",{className:`ide-file-dirty-dot ${z?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Po(d),disabled:d.type!=="file"||G||g,"aria-label":`Filvalg for ${d.name}`,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(Kt,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&f.jsx("span",{className:`ide-usb-status ${sn.supported?"available":"unavailable"}`,title:sn.message,"data-tooltip":sn.message,role:"img","aria-label":sn.message,tabIndex:0,children:"!"})]}),he&&f.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Zn:Ja,disabled:!sn.supported||T,children:T?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:ps,disabled:he||G,children:"Download"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Yo,disabled:!x||G,children:"Nulstil enhed"})]}),he&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(Kt,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:ps,disabled:G,children:"Startprogrammer og biblioteker"})]}),!he&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>gt(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[ze(W),f.jsxs("small",{children:[Vo," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:rc,disabled:G,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:ac,disabled:!ml&&!(!on&&Nt)&&(!x||!bt),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:wl,disabled:G||!W.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>ms(),disabled:G||!W.trim(),children:"Slet"})]})]}),Wa(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Fl.top}px)`},children:Array.from({length:as},(d,g)=>f.jsx("span",{children:g+1},g))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Fl.left}px, ${-Fl.top}px)`},children:dy(le,Go)}),f.jsx("textarea",{ref:ln,className:"ide-editor",value:le,onChange:d=>Br(d.target.value,d.target.selectionStart),onKeyDown:oc,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Hr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Hr(d.currentTarget.value,d.currentTarget.selectionStart),cr(d.currentTarget)},onSelect:d=>cr(d.currentTarget),onScroll:d=>{Dr({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Ke&&Hr(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:G||!!ie,"aria-busy":G||!!ie,spellCheck:!1}),Ke&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Ke.position.left,top:Ke.position.top},children:Ke.items.map((d,g)=>f.jsx("button",{className:g===Ke.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),ii(d)},role:"option","aria-selected":g===Ke.selected,children:d.label},d.label))}),ie&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",ze(ie),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${lr?"":"active"}`,type:"button",onClick:()=>rs(d=>!d),"aria-label":lr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!lr,title:lr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Pn?"active":""}`,type:"button",onClick:()=>_l(d=>!d),"aria-pressed":Pn,title:Pn?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:sc,disabled:P.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:ot,onScroll:ic,onClick:()=>{var d;return(d=ct.current)==null?void 0:d.focus()},children:[P.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):P.map((d,g)=>f.jsx("div",{className:`term-line term-${d.level}`,children:d.technical&&!lr?d.technical:d.text},`${g}-${d.text}`)),f.jsxs("form",{className:`ide-terminal-command ${Pa&&!Lt?"locked":""} ${Lt?"stdin":""}`,onSubmit:d=>{d.preventDefault(),Tl()},children:[f.jsx("span",{"aria-hidden":"true",children:ta}),f.jsx("textarea",{ref:ct,value:nn,onChange:d=>{Xn(d.target.value),rn(null),Lt?Bt(null):Ml(d.target.value,d.target.selectionStart)},onKeyDown:Ss,onKeyUp:d=>{Lt||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Ml(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Lt||Ml(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:is,placeholder:ss,"aria-label":Lt?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:ss,rows:Math.max(1,nn.split(`
`).length)})]}),dt&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:dt.position.left,top:dt.position.top},children:dt.items.map((d,g)=>f.jsx("button",{className:g===dt.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),xs(d)},role:"option","aria-selected":g===dt.selected,children:d.label},d.label))})]})]})]}),f.jsx("input",{ref:Xa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var g;$o((g=d.target.files)==null?void 0:g[0]),d.currentTarget.value=""}}),D&&f.jsx(St,{title:"Gem fil",onClose:()=>K(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:la,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void El(),disabled:!x&&!he||G,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:kl,children:"Download til computer"})]})}),Ue&&f.jsx(St,{title:"Startprogrammer og biblioteker",onClose:()=>Ce(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:x||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[gs("Startprogrammer (main.py)","Starter automatisk på Picoen.",je.filter(d=>d.kind==="program")),gs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",je.filter(d=>d.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(x||he)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Jo,disabled:G,children:"Installer valgte på Pico"}),f.jsx("button",{className:x||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:ec,disabled:G,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:tc,disabled:G,children:"Download valgte"})]})]})}),jr&&f.jsx(St,{title:"main.py er gemt",onClose:()=>yn(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ni("control"),disabled:G,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ni("ide"),disabled:G,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>yn(!1),disabled:G,children:"Senere"})]})}),_e&&f.jsx(St,{title:"Installer MicroPython",onClose:()=>gt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:Et,onChange:d=>Bn(d.target.value),children:ea.map(d=>f.jsx("option",{value:d,children:d},d))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(vt==null?void 0:vt.version)??zt,onChange:d=>Ar(d.target.value),children:$t.map(d=>f.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),vt&&f.jsx("a",{className:"btn btn-primary btn-block",href:vt.url,download:vt.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),C&&f.jsx(St,{title:"Ny Python-fil",onClose:()=>Q(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Xo()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>xe(d.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Jl,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!zp(ue),children:"Opret"})]})}),L&&f.jsx(St,{title:ze(L.path),onClose:()=>Z(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Zo()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:Ee,onChange:d=>E(d.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Qi(L.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Qi(L.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!_f(Ee,Qi(L.path))||_f(Ee,Qi(L.path))===L.path||G,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>ms(L),disabled:G,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),L.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):L.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:L.versions.map(d=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:ze(d.path)}),f.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void hs(d),disabled:G,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Fo(d),disabled:G,children:"Slet"})]},d.path))})]})]})})]})}function zp(o){var c;const a=(c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return a?`/${a}.py`:""}function ey(o){const a=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=a==null?void 0:a.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const s=u_(c[1]);return s?`/${s}.${c[2].toLowerCase()}`:""}function _f(o,a="py"){const c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const s=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const u=u_(s[1]),m=a.replace(/^\./,"").toLowerCase(),p=(s[2]??(m||"py")).toLowerCase();return u?`/${u}.${p}`:""}function ty(o){return ze(o).replace(/\.(py|txt|json|csv)$/i,"")}function u_(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Qi(o){var s;const a=ze(o).match(/\.([a-z0-9]+)$/i),c=(s=a==null?void 0:a[1])==null?void 0:s.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function za(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Bp(){return Ba.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Lp(o){const a={};return o.forEach(c=>{a[c.id]=!1}),a}function ze(o){return o.split("/").filter(Boolean).pop()??o}function Ro(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Up(o){const a=o.userAgent||"",c=o.platform||"",s=o.maxTouchPoints||0,u=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(a),m=/Macintosh/i.test(c)&&s>1;return u&&!m}function ny(o){return o instanceof DOMException&&o.name==="AbortError"}function ry(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function Xl(o){return ly(o)}function ly(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Nf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Hp(o,a,c){const s=Rf(o,a);if(!s)return[];const u=ay(o,s.start,a),m=s.query.toLowerCase(),p=u.beforeToken.toLowerCase(),b=u.linePrefix.toLowerCase(),v=c?[...Nf,...sy(o)]:Nf;return oy(v).filter(x=>{const N=x.label.toLowerCase(),T=x.insert.toLowerCase();return T===m||N===m||f_(x,s.query)?!1:u.importLine?iy(x,u)?N.startsWith(b)||T.startsWith(b)||N.startsWith(m)||T.startsWith(m):!1:p.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(m)||N.startsWith(m))})}function ay(o,a,c){const s=o.lastIndexOf(`
`,a-1)+1,u=o.slice(s,c),m=o.slice(s,a),p=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(u),b=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(u);return{linePrefix:u,beforeToken:m,importLine:p,fromImportLine:b}}function iy(o,a){return a.fromImportLine?!o.insert.includes("(")&&!o.insert.startsWith("import "):o.insert.startsWith("import ")||o.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(o.insert)}function sy(o){const a=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const s of c)for(const u of o.matchAll(s))u[1]&&a.add(u[1]),u[2]&&a.add(u[2]);return[...a].filter(s=>s.length>1&&!cy.has(s)).sort((s,u)=>s.localeCompare(u,"da")).map(s=>({label:s,insert:s}))}function oy(o){const a=new Set,c=[];for(const s of o){const u=s.insert.toLowerCase();a.has(u)||(a.add(u),c.push(s))}return c}const cy=new Set(Nf.map(o=>o.insert.replace(/[().: ]+$/g,"")));function Rf(o,a){const s=o.slice(0,a).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function f_(o,a){const c=o.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===a.toLowerCase()}function uy(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Gp(o,a){if(!o)return null;const c=o.closest(".ide-terminal")??o.parentElement;if(!c)return null;const s=window.getComputedStyle(o),u=document.createElement("div"),m=document.createElement("span"),p=c.getBoundingClientRect(),b=o.getBoundingClientRect();u.style.position="absolute",u.style.visibility="hidden",u.style.pointerEvents="none",u.style.whiteSpace="pre-wrap",u.style.overflowWrap="break-word",u.style.boxSizing=s.boxSizing,u.style.width=`${o.clientWidth}px`,u.style.padding=s.padding,u.style.border=s.border,u.style.font=s.font,u.style.lineHeight=s.lineHeight,u.style.letterSpacing=s.letterSpacing,u.style.tabSize=s.tabSize,u.style.left=`${b.left-p.left-o.scrollLeft}px`,u.style.top=`${b.top-p.top-o.scrollTop}px`,u.textContent=o.value.slice(0,a),m.textContent=o.value.slice(a,a+1)||" ",u.appendChild(m),c.appendChild(u);const v=m.getBoundingClientRect();u.remove();const y=fy(v.left-p.left,8,Math.max(8,c.clientWidth-296)),x=v.bottom-p.top+6,N=x+218>c.clientHeight?Math.max(8,v.top-p.top-218):x;return{left:y,top:N}}function fy(o,a,c){return Math.max(a,Math.min(c,o))}function dy(o,a=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,u=[];return o.split(/(\r?\n)/).forEach((m,p)=>{if(m===`
`||m===`\r
`){u.push(f.jsx("br",{},`br-${p}`));return}let b=0;[...m.matchAll(s)].forEach((y,x)=>{const N=y.index??0;N>b&&u.push(...Vp(m.slice(b,N),c,`${p}-${x}-plain`,a));const T=y[0],X=T.startsWith("#")?"tok-comment":T.startsWith('"')||T.startsWith("'")?"tok-string":/^\d/.test(T)?"tok-number":"tok-builtin";u.push(...jo(T,a,`${p}-${x}-token`,X)),b=N+T.length}),b<m.length&&u.push(...Vp(m.slice(b),c,`${p}-tail`,a))}),u.length?u:" "}function Vp(o,a,c,s=""){const u=[];let m=0;const p=new RegExp(a.source,"g");return[...o.matchAll(p)].forEach((b,v)=>{const y=b.index??0;y>m&&u.push(...jo(o.slice(m,y),s,`${c}-${v}-plain`)),u.push(...jo(b[0],s,`${c}-${v}-keyword`,"tok-keyword")),m=y+b[0].length}),m<o.length&&u.push(...jo(o.slice(m),s,`${c}-plain-end`)),u}function jo(o,a,c,s=""){if(!a)return[f.jsx("span",{className:s||void 0,children:o},c)];const u=[],m=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),p=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${m})(?![A-Za-zÆØÅæøå0-9_])`,"g");let b=0;return[...o.matchAll(p)].forEach((v,y)=>{const x=v.index??0;x>b&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(b,x)},`${c}-${y}-before`)),u.push(f.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${c}-${y}-match`)),b=x+v[0].length}),b<o.length&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(b)},`${c}-after`)),u.length?u:[f.jsx("span",{className:s||void 0,children:o},c)]}function gf(o){return o.length>0?o:[{path:kf,content:c_,uploaded:!1,updatedAt:Date.now()}]}function my(o,a,c,s){const u=o.filter(m=>m.path!==a);return[{path:a,content:c,uploaded:s,updatedAt:Date.now()},...u].sort((m,p)=>p.updatedAt-m.updatedAt)}function hy(o,a,c){var s;return o.source==="pico"?c[o.path]:(s=a.find(u=>u.path===o.path))==null?void 0:s.content}function Do(o){const a=o.replace(/\\/g,"/"),c=a.lastIndexOf("/"),s=c>=0?a.slice(0,c+1):"",m=(c>=0?a.slice(c+1):a).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return m?{originalPath:`${s}${m[1]}${m[3]}`,index:parseInt(m[2],10)}:null}function La(o){return Do(o)!==null}function Tf(o){const a=new Map;for(const c of o){const s=Do(c.path);if(!s)continue;const u=a.get(s.originalPath)??[];u.push(c),a.set(s.originalPath,u)}for(const c of a.values())c.sort((s,u)=>{var m,p;return(((m=Do(u.path))==null?void 0:m.index)??0)-(((p=Do(s.path))==null?void 0:p.index)??0)});return a}function py(o,a){const c=o.replace(/\\/g,"/"),s=c.lastIndexOf("/"),u=s>=0?c.slice(0,s+1):"/",m=s>=0?c.slice(s+1):c.replace(/^\/+/,""),p=m.lastIndexOf("."),b=p>0?m.slice(0,p):m,v=p>0?m.slice(p):"",y=new Set(a.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const N=`${u}${b}_backup${x}${v}`;if(!y.has(N.toLowerCase()))return N}return`${u}${b}_backup${Date.now()}${v}`}function _y(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function gy(o,a,c,s){const u=new Map,m=Tf(o);for(const x of o)La(x.path)||u.set(gn("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:m.get(x.path)??[]});for(const x of a)u.set(gn("local",x.path),{kind:"file",name:ze(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const x of Object.keys(c)){const[N,...T]=x.split(":"),X=T.join(":");if(N!=="local"&&N!=="pico"||!X)continue;const P=u.get(x);if(P){u.set(x,P);continue}u.set(x,{kind:"file",name:ze(X),path:X,type:"file",source:N,uploaded:!1,versions:N==="pico"?m.get(X)??[]:[]})}const p=[...u.values()].sort(yy),b=p.filter(x=>x.source==="pico"),v=p.filter(x=>x.source==="local"),y=[];return b.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...b):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const by=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function yy(o,a){const c=Yp(o.path),s=Yp(a.path);return c===null&&s===null?o.name.localeCompare(a.name,"da"):c===null?-1:s===null?1:c-s}function Yp(o){var c;const a=(c=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return a?by.get(a)??null:null}function qp(o,a,c){if(!(a in o))return o;const s={...o,[c]:o[a]};return delete s[a],s}function vy(o,a,c,s){const u=`${a}:${c}`;if(!(u in o))return o;const m={...o,[`${a}:${s}`]:o[u]};return delete m[u],m}function xy({open:o}){const a=J(re=>re.screen),c=J(re=>re.active),s=J(re=>re.toggleSideMenu),u=J(re=>re.toggleDebugger),m=J(re=>re.setEditMode),p=J(re=>re.openMenuPage),b=J(re=>re.disconnect),v=J(re=>re.openPicoIde),y=J(re=>re.closePicoIde),x=J(re=>re.picoIdeOrigin),N=a==="dashboard",T=a==="control",X=a==="ide",P=T&&!!(c!=null&&c.canEdit),ne=!T||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),G=x==="control",$=x==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${a} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[N&&f.jsxs(f.Fragment,{children:[f.jsx(_n,{label:"Bruger",icon:"user",onClick:()=>p("user-settings")}),f.jsx(_n,{label:"Indstillinger",icon:"settings",onClick:()=>p("application-settings")}),f.jsx(_n,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!ne}),f.jsx(bf,{}),f.jsx(_n,{label:"Om appen",icon:"info",onClick:()=>p("application-about")}),f.jsx(_n,{label:"Hjælp",icon:"help",onClick:()=>p("application-help")}),f.jsx(_n,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),T&&f.jsxs(f.Fragment,{children:[f.jsx(_n,{label:"Indstillinger",icon:"settings",onClick:()=>p("device-settings")}),f.jsx(_n,{label:"Rediger",icon:"edit",onClick:()=>m(!0),disabled:!P}),f.jsx(_n,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!ne}),f.jsx(bf,{}),f.jsx(_n,{label:"Hjælp",icon:"help",onClick:()=>p("device-help")}),f.jsx(_n,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),X&&f.jsxs(f.Fragment,{children:[f.jsx(_n,{label:$,icon:"back",onClick:y}),f.jsx(bf,{})]}),f.jsx("div",{className:"spacer"}),(T||X&&G)&&f.jsx(_n,{label:"Forlad",icon:"exit",onClick:()=>b()})]})]})}function _n({label:o,icon:a,disabled:c,onClick:s}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:c,"aria-label":o,children:[f.jsx(Kt,{name:a}),f.jsx("span",{children:o})]})}function bf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:Ob,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const Sy={error:"term-error",success:"term-success",warning:"term-warning",info:""},$p={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function wy(){const o=new Date,a=c=>String(c).padStart(2,"0");return`${a(o.getDate())}-${a(o.getMonth()+1)}-${o.getFullYear()}-${a(o.getHours())}-${a(o.getMinutes())}`}function Ey(){const o=J(u=>u.logs),a=J(u=>u.clearLogs),c=J(u=>u.toggleDebugger);function s(){const u=[...o].reverse().map(v=>`${v.time} ${$p[v.level]}${v.message}`).join(`
`),m=new Blob([u],{type:"text/plain"}),p=URL.createObjectURL(m),b=document.createElement("a");b.href=p,b.download=`${wy()}.txt`,b.click(),URL.revokeObjectURL(p)}return f.jsxs(St,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((u,m)=>f.jsxs("div",{className:`term-line ${Sy[u.level]}`,children:[u.time," ",$p[u.level],u.message]},`${u.time}-${m}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:a,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const d_=4,zn=d_*4+17,Ip=80,ky=20,Ny=30660;function Ry(o){const a=new TextEncoder().encode(o);if(a.length>76)throw new Error("QR-koden er for lang.");const c=Xp(!1),s=Xp(!1);Ty(c,s);const u=Ay(a),m=Oy(u,ky);return jy(c,s,[...u,...m]),Dy(c,s),c}function Xp(o){return Array.from({length:zn},()=>Array.from({length:zn},()=>o))}function On(o,a,c,s,u,m=!0){o[s][c]=u,m&&(a[s][c]=!0)}function Ty(o,a){yf(o,a,0,0),yf(o,a,zn-7,0),yf(o,a,0,zn-7);for(let c=0;c<zn;c+=1)a[6][c]||On(o,a,c,6,c%2===0),a[c][6]||On(o,a,6,c,c%2===0);My(o,a,26,26),On(o,a,8,d_*4+9,!0)}function yf(o,a,c,s){for(let u=-1;u<=7;u+=1)for(let m=-1;m<=7;m+=1){const p=c+m,b=s+u;if(p<0||b<0||p>=zn||b>=zn)continue;const v=m>=0&&m<=6&&u>=0&&u<=6&&(m===0||m===6||u===0||u===6||m>=2&&m<=4&&u>=2&&u<=4);On(o,a,p,b,v)}}function My(o,a,c,s){for(let u=-2;u<=2;u+=1)for(let m=-2;m<=2;m+=1)a[s+u][c+m]||On(o,a,c+m,s+u,Math.max(Math.abs(m),Math.abs(u))!==1)}function Ay(o){const a=[];To(a,4,4),To(a,o.length,8);for(const s of o)To(a,s,8);for(To(a,0,Math.min(4,Ip*8-a.length));a.length%8!==0;)a.push(0);const c=[];for(let s=0;s<a.length;s+=8)c.push(a.slice(s,s+8).reduce((u,m)=>u<<1|m,0));for(let s=236;c.length<Ip;s=s===236?17:236)c.push(s);return c}function To(o,a,c){for(let s=c-1;s>=0;s-=1)o.push(a>>>s&1)}function jy(o,a,c){const s=c.flatMap(p=>Array.from({length:8},(b,v)=>p>>>7-v&1));let u=0,m=!0;for(let p=zn-1;p>=1;p-=2){p===6&&(p-=1);for(let b=0;b<zn;b+=1){const v=m?zn-1-b:b;for(let y=0;y<2;y+=1){const x=p-y;if(a[v][x])continue;const N=u<s.length?s[u]===1:!1;o[v][x]=N!==((x+v)%2===0),u+=1}}m=!m}}function Dy(o,a){const c=s=>(Ny>>>s&1)!==0;for(let s=0;s<=5;s+=1)On(o,a,8,s,c(s));On(o,a,8,7,c(6)),On(o,a,8,8,c(7)),On(o,a,7,8,c(8));for(let s=9;s<15;s+=1)On(o,a,14-s,8,c(s));for(let s=0;s<8;s+=1)On(o,a,zn-1-s,8,c(s));for(let s=8;s<15;s+=1)On(o,a,8,zn-15+s,c(s))}const Ji=new Array(512),Mf=new Array(256);let Kp=!1;function m_(){if(Kp)return;let o=1;for(let a=0;a<255;a+=1)Ji[a]=o,Mf[o]=a,o<<=1,o&256&&(o^=285);for(let a=255;a<512;a+=1)Ji[a]=Ji[a-255];Kp=!0}function h_(o,a){return o===0||a===0?0:Ji[Mf[o]+Mf[a]]}function Oy(o,a){m_();const c=Cy(a),s=Array.from({length:a},()=>0);for(const u of o){const m=u^s.shift();s.push(0);for(let p=0;p<a;p+=1)s[p]^=h_(c[p],m)}return s}function Cy(o){m_();let a=[1];for(let c=0;c<o;c+=1){const s=Array.from({length:a.length+1},()=>0);for(let u=0;u<a.length;u+=1)s[u]^=h_(a[u],Ji[c]),s[u+1]^=a[u];a=s}return a.slice(1)}function zy(){const o=J(_e=>_e.menuPage),a=J(_e=>_e.closeMenuPage),c=J(_e=>_e.user),s=J(_e=>_e.active),u=J(_e=>_e.layout),m=J(_e=>_e.sliderValues),p=J(_e=>_e.savedDevices),b=J(_e=>_e.updateUsername),v=J(_e=>_e.createOwnerPairingCode),y=J(_e=>_e.applyOwnerPairingCode),x=J(_e=>_e.clearSavedDevices),N=J(_e=>_e.resetApplicationData),T=J(_e=>_e.saveDeviceSettings),X=J(_e=>_e.setEditMode),P=J(_e=>_e.askConfirm),[ne,G]=U.useState((c==null?void 0:c.username)??""),[$,re]=U.useState(!1),[fe,ie]=U.useState(""),[de,Ne]=U.useState(""),[ee,W]=U.useState(!1),[ve,ge]=U.useState(""),ye=U.useRef(null),[le,Fe]=U.useState((s==null?void 0:s.iconID)??0),[je,Qe]=U.useState(!1),[C,Q]=U.useState((s==null?void 0:s.canOthersConnect)??!1),[ue,xe]=U.useState((s==null?void 0:s.canOthersEdit)??!1),[Ee,E]=U.useState((s==null?void 0:s.canOthersEditCode)??!1),[L,Z]=U.useState((s==null?void 0:s.gridCols)??11),[D,K]=U.useState((s==null?void 0:s.gridRows)??31),[F,I]=U.useState(!1);U.useEffect(()=>{o==="user-settings"&&(G((c==null?void 0:c.username)??""),Ne(""),ge(""),W(!1))},[o,c==null?void 0:c.username]),U.useEffect(()=>{o==="device-settings"&&s&&(Fe(s.iconID),Q(s.canOthersConnect),xe(s.canOthersEdit),E(s.canOthersEditCode),Z(s.gridCols),K(s.gridRows))},[s,o]),U.useEffect(()=>{if(!ee)return;let _e=!1,gt=null,wt=0;async function De(){var Bn;const Et=window.BarcodeDetector;if(!Et||!((Bn=navigator.mediaDevices)!=null&&Bn.getUserMedia)){ge("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),W(!1);return}try{gt=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const zt=ye.current;if(!zt)return;zt.srcObject=gt,await zt.play();const Ar=new Et({formats:["qr_code"]}),jr=async()=>{var yn;if(!_e){try{const Dr=(yn=(await Ar.detect(zt)).find(bt=>bt.rawValue))==null?void 0:yn.rawValue;if(Dr){Ne(Dr),y(Dr)&&re(!1),W(!1);return}}catch{}wt=window.requestAnimationFrame(jr)}};wt=window.requestAnimationFrame(jr)}catch{ge("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),W(!1)}}return De(),()=>{_e=!0,wt&&window.cancelAnimationFrame(wt),gt==null||gt.getTracks().forEach(Et=>Et.stop())}},[y,ee]);const Ue=(_e,gt)=>Number.isFinite(_e)?Math.max(Ua,Math.min(Ha,Math.round(_e))):gt,Ce=(c==null?void 0:c.username)??"",Vt=ne.trim(),In=Vt.length>0&&Vt!==Ce;if(!o)return null;if(o==="user-settings"){let _e=function(){const De=v();De&&(ie(De),Ne(""),re(!0))},gt=function(){y(de)&&(Ne(""),re(!1))};async function wt(){var De;try{await((De=navigator.clipboard)==null?void 0:De.writeText(fe))}catch{}}return f.jsxs(f.Fragment,{children:[f.jsx(St,{title:"Brugerindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dn,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${ne.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:ne,onChange:De=>G(De.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>b(ne),disabled:!In,children:"Gem nyt brugernavn"}),f.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:_e,children:"Ejerkode"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>P({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{N()}}),children:"Slet brugerdata"})]})}),$&&f.jsx(St,{title:"Del ejerkode",onClose:()=>re(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Uy,{code:fe}),f.jsx("code",{className:"owner-code-text",children:fe}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void wt(),children:"Kopiér ejerkode"}),f.jsxs("div",{className:`field ${de.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-owner-code",value:de,onChange:De=>Ne(De.target.value),autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:gt,disabled:!de.trim(),children:"Brug ejerkode i denne browser"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>W(De=>!De),children:ee?"Stop scanning":"Scan QR-kode"}),ve&&f.jsx("div",{className:"notice",children:ve}),ee&&f.jsx("video",{className:"owner-code-video",ref:ye,muted:!0,playsInline:!0})]})})]})}if(o==="application-settings")return f.jsx(St,{title:"Applikationsindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dn,{label:"Version",value:es}),f.jsx(Dn,{label:"Bluetooth",value:Uo()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(Dn,{label:"Gemte enheder",value:String(p.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>P({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:x}),disabled:p.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(St,{title:"Om appen",onClose:a,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(Dn,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(Dn,{label:"Version",value:es})]})});if(o==="application-help")return f.jsx(St,{title:"Hjælp til applikationen",onClose:a,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const _e=u.filter(De=>De.type==="slider"),gt=!!(s!=null&&s.isOwnedByMe);async function wt(De=!1){if(!s||!gt)return;const Et=Ue(L,s.gridCols),Bn=Ue(D,s.gridRows),zt=By(u,Et,Bn);if(zt&&!De){P({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${zt.requiredCols} kolonner og ${zt.requiredRows} rækker. Det nye gitter er ${Et} × ${Bn}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{wt(!0)}});return}I(!0),await T(le,C,C&&ue,C&&Ee,Et,Bn),Z(Et),K(Bn),I(!1)}return f.jsx(St,{title:"Enhedsindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dn,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),f.jsx(Dn,{label:"Ejer",value:Hy(s)}),gt?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Qe(!0),children:f.jsx("img",{src:qa(le),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:C?"":"active",onClick:()=>Q(!1),children:"Privat"}),f.jsx("button",{type:"button",className:C?"active":"",onClick:()=>Q(!0),children:"Offentlig"})]}),C&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>xe(!1),children:"Nej"}),f.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>xe(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>E(!1),children:"Nej"}),f.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Ua,max:Ha,value:Number.isNaN(L)?"":L,onChange:De=>Z(parseInt(De.target.value,10)),onBlur:()=>Z(Ue(L,(s==null?void 0:s.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Ua,max:Ha,value:Number.isNaN(D)?"":D,onChange:De=>K(parseInt(De.target.value,10)),onBlur:()=>K(Ue(D,(s==null?void 0:s.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>wt(),disabled:F,children:F?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Dn,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),f.jsx(Dn,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(Dn,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),f.jsx(Dn,{label:"Kontroller",value:String(u.length)}),_e.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),_e.map(De=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:De.name}),f.jsxs("span",{children:[De.sliderMin??0," til ",De.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",Ly(De.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",m[De.name]??"Ikke brugt"]})]},De.name))]}),je&&f.jsx(t_,{selected:le,onSelect:Fe,onClose:()=>Qe(!1)})]})})}return f.jsx(St,{title:"Hjælp til enheden",onClose:a,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>X(!0),children:"Rediger layout"})]})})}function By(o,a,c){let s=0,u=0;for(const m of o)Ga(m)&&(s=Math.max(s,Math.ceil((m.centerX2+m.spanX)/2)+1),u=Math.max(u,Math.ceil((m.centerY2+m.spanY)/2)+1));return a<s||c<u?{requiredCols:s,requiredRows:u}:null}function Ly(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function Uy({code:o}){const a=U.useMemo(()=>Ry(o),[o]),c=a.length;return f.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[f.jsx("rect",{width:c+8,height:c+8,fill:"white"}),a.map((s,u)=>s.map((m,p)=>m?f.jsx("rect",{x:p+4,y:u+4,width:"1",height:"1",fill:"currentColor"},`${p}-${u}`):null))]})}function Hy(o){var a;return o?o.isOwnedByMe?"Dig":((a=o.ownerName)==null?void 0:a.trim())||"Anden bruger":"Ukendt"}function Dn({label:o,value:a}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:a})]})}function Gy(){const o=J(s=>s.confirmDialog),a=J(s=>s.closeConfirm);if(!o)return null;function c(){o==null||o.onConfirm(),a()}return f.jsx(St,{title:o.title,onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:a,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:o.confirmLabel??"Fortsæt"})]})]})})}function Vy(){const o=J(s=>s.connectionLost),a=J(s=>s.reconnectLostDevice),c=J(s=>s.dismissConnectionLost);return o?f.jsx(St,{title:"Forbindelse afbrudt",onClose:c,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>a(),children:"Genforbind"})]})]})}):null}function Yy(){const o=J(c=>c.toast),a=J(c=>c.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:a,children:o.message},o.id):null}function qy(){const o=J(b=>b.screen),a=J(b=>b.splashTarget),c=J(b=>b.init),s=J(b=>b.sideMenuOpen),u=J(b=>b.debuggerOpen),[m,p]=U.useState(!1);return U.useEffect(()=>{c()},[c]),U.useEffect(()=>{if(s){p(!0);return}const b=setTimeout(()=>p(!1),140);return()=>clearTimeout(b)},[s]),f.jsxs("div",{className:"app",children:[o==="splash"&&a==="intro"&&f.jsx(hp,{}),o==="splash"&&a==="dashboard"&&f.jsx(pp,{}),o==="splash"&&f.jsx(Lb,{}),o==="intro"&&f.jsx(hp,{}),o==="dashboard"&&f.jsx(pp,{}),o==="connection"&&f.jsx(Yb,{}),o==="create"&&f.jsx(qb,{}),o==="control"&&f.jsx(c0,{}),o==="ide"&&f.jsx(J0,{}),m&&f.jsx(xy,{open:s}),f.jsx(zy,{}),f.jsx(Vy,{}),f.jsx(Gy,{}),u&&f.jsx(Ey,{}),f.jsx(Yy,{})]})}function $y(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(a=>{console.warn("Service worker registration failed:",a)})})}$y();Pg.createRoot(document.getElementById("root")).render(f.jsx(Zi.StrictMode,{children:f.jsx(qy,{})}));
