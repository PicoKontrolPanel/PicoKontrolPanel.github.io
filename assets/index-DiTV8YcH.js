var Og=Object.defineProperty;var Cg=(o,i,c)=>i in o?Og(o,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[i]=c;var fe=(o,i,c)=>Cg(o,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function c(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(u){if(u.ep)return;u.ep=!0;const h=c(u);fetch(u.href,h)}})();function Yp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var $u={exports:{}},Gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function zg(){if(Yh)return Gi;Yh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(s,u,h){var p=null;if(h!==void 0&&(p=""+h),u.key!==void 0&&(p=""+u.key),"key"in u){h={};for(var g in u)g!=="key"&&(h[g]=u[g])}else h=u;return u=h.ref,{$$typeof:o,type:s,key:p,ref:u!==void 0?u:null,props:h}}return Gi.Fragment=i,Gi.jsx=c,Gi.jsxs=c,Gi}var qh;function Bg(){return qh||(qh=1,$u.exports=zg()),$u.exports}var f=Bg(),Xu={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Lg(){if($h)return ye;$h=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),j=Symbol.iterator;function F(E){return E===null||typeof E!="object"?null:(E=j&&E[j]||E["@@iterator"],typeof E=="function"?E:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,G={};function $(E,L,Z){this.props=E,this.context=L,this.refs=G,this.updater=Z||I}$.prototype.isReactComponent={},$.prototype.setState=function(E,L){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,L,"setState")},$.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function re(){}re.prototype=$.prototype;function ue(E,L,Z){this.props=E,this.context=L,this.refs=G,this.updater=Z||I}var se=ue.prototype=new re;se.constructor=ue,le(se,$.prototype),se.isPureReactComponent=!0;var de=Array.isArray;function Ne(){}var ee={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function xe(E,L,Z){var A=Z.ref;return{$$typeof:o,type:E,key:L,ref:A!==void 0?A:null,props:Z}}function ge(E,L){return xe(E.type,L,E.props)}function ve(E){return typeof E=="object"&&E!==null&&E.$$typeof===o}function ae(E){var L={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Z){return L[Z]})}var Pe=/\/+/g;function Ae(E,L){return typeof E=="object"&&E!==null&&E.key!=null?ae(""+E.key):L.toString(36)}function Qe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Ne,Ne):(E.status="pending",E.then(function(L){E.status==="pending"&&(E.status="fulfilled",E.value=L)},function(L){E.status==="pending"&&(E.status="rejected",E.reason=L)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function O(E,L,Z,A,K){var P=typeof E;(P==="undefined"||P==="boolean")&&(E=null);var X=!1;if(E===null)X=!0;else switch(P){case"bigint":case"string":case"number":X=!0;break;case"object":switch(E.$$typeof){case o:case i:X=!0;break;case x:return X=E._init,O(X(E._payload),L,Z,A,K)}}if(X)return K=K(E),X=A===""?"."+Ae(E,0):A,de(K)?(Z="",X!=null&&(Z=X.replace(Pe,"$&/")+"/"),O(K,L,Z,"",function(Ln){return Ln})):K!=null&&(ve(K)&&(K=ge(K,Z+(K.key==null||E&&E.key===K.key?"":(""+K.key).replace(Pe,"$&/")+"/")+X)),L.push(K)),1;X=0;var He=A===""?".":A+":";if(de(E))for(var Ce=0;Ce<E.length;Ce++)A=E[Ce],P=He+Ae(A,Ce),X+=O(A,L,Z,P,K);else if(Ce=F(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(A=E.next()).done;)A=A.value,P=He+Ae(A,Ce++),X+=O(A,L,Z,P,K);else if(P==="object"){if(typeof E.then=="function")return O(Qe(E),L,Z,A,K);throw L=String(E),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return X}function Q(E,L,Z){if(E==null)return E;var A=[],K=0;return O(E,A,"","",function(P){return L.call(Z,P,K++)}),A}function ce(E){if(E._status===-1){var L=E._result;L=L(),L.then(function(Z){(E._status===0||E._status===-1)&&(E._status=1,E._result=Z)},function(Z){(E._status===0||E._status===-1)&&(E._status=2,E._result=Z)}),E._status===-1&&(E._status=0,E._result=L)}if(E._status===1)return E._result.default;throw E._result}var Se=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Ee={map:Q,forEach:function(E,L,Z){Q(E,function(){L.apply(this,arguments)},Z)},count:function(E){var L=0;return Q(E,function(){L++}),L},toArray:function(E){return Q(E,function(L){return L})||[]},only:function(E){if(!ve(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ye.Activity=N,ye.Children=Ee,ye.Component=$,ye.Fragment=c,ye.Profiler=u,ye.PureComponent=ue,ye.StrictMode=s,ye.Suspense=v,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ye.__COMPILER_RUNTIME={__proto__:null,c:function(E){return ee.H.useMemoCache(E)}},ye.cache=function(E){return function(){return E.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(E,L,Z){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var A=le({},E.props),K=E.key;if(L!=null)for(P in L.key!==void 0&&(K=""+L.key),L)!W.call(L,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&L.ref===void 0||(A[P]=L[P]);var P=arguments.length-2;if(P===1)A.children=Z;else if(1<P){for(var X=Array(P),He=0;He<P;He++)X[He]=arguments[He+2];A.children=X}return xe(E.type,K,A)},ye.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},ye.createElement=function(E,L,Z){var A,K={},P=null;if(L!=null)for(A in L.key!==void 0&&(P=""+L.key),L)W.call(L,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(K[A]=L[A]);var X=arguments.length-2;if(X===1)K.children=Z;else if(1<X){for(var He=Array(X),Ce=0;Ce<X;Ce++)He[Ce]=arguments[Ce+2];K.children=He}if(E&&E.defaultProps)for(A in X=E.defaultProps,X)K[A]===void 0&&(K[A]=X[A]);return xe(E,P,K)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(E){return{$$typeof:g,render:E}},ye.isValidElement=ve,ye.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:ce}},ye.memo=function(E,L){return{$$typeof:y,type:E,compare:L===void 0?null:L}},ye.startTransition=function(E){var L=ee.T,Z={};ee.T=Z;try{var A=E(),K=ee.S;K!==null&&K(Z,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(Ne,Se)}catch(P){Se(P)}finally{L!==null&&Z.types!==null&&(L.types=Z.types),ee.T=L}},ye.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ye.use=function(E){return ee.H.use(E)},ye.useActionState=function(E,L,Z){return ee.H.useActionState(E,L,Z)},ye.useCallback=function(E,L){return ee.H.useCallback(E,L)},ye.useContext=function(E){return ee.H.useContext(E)},ye.useDebugValue=function(){},ye.useDeferredValue=function(E,L){return ee.H.useDeferredValue(E,L)},ye.useEffect=function(E,L){return ee.H.useEffect(E,L)},ye.useEffectEvent=function(E){return ee.H.useEffectEvent(E)},ye.useId=function(){return ee.H.useId()},ye.useImperativeHandle=function(E,L,Z){return ee.H.useImperativeHandle(E,L,Z)},ye.useInsertionEffect=function(E,L){return ee.H.useInsertionEffect(E,L)},ye.useLayoutEffect=function(E,L){return ee.H.useLayoutEffect(E,L)},ye.useMemo=function(E,L){return ee.H.useMemo(E,L)},ye.useOptimistic=function(E,L){return ee.H.useOptimistic(E,L)},ye.useReducer=function(E,L,Z){return ee.H.useReducer(E,L,Z)},ye.useRef=function(E){return ee.H.useRef(E)},ye.useState=function(E){return ee.H.useState(E)},ye.useSyncExternalStore=function(E,L,Z){return ee.H.useSyncExternalStore(E,L,Z)},ye.useTransition=function(){return ee.H.useTransition()},ye.version="19.2.7",ye}var Xh;function xf(){return Xh||(Xh=1,Xu.exports=Lg()),Xu.exports}var U=xf();const Ii=Yp(U);var Ku={exports:{}},Vi={},Iu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Ug(){return Kh||(Kh=1,(function(o){function i(O,Q){var ce=O.length;O.push(Q);e:for(;0<ce;){var Se=ce-1>>>1,Ee=O[Se];if(0<u(Ee,Q))O[Se]=Q,O[ce]=Ee,ce=Se;else break e}}function c(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Q=O[0],ce=O.pop();if(ce!==Q){O[0]=ce;e:for(var Se=0,Ee=O.length,E=Ee>>>1;Se<E;){var L=2*(Se+1)-1,Z=O[L],A=L+1,K=O[A];if(0>u(Z,ce))A<Ee&&0>u(K,Z)?(O[Se]=K,O[A]=ce,Se=A):(O[Se]=Z,O[L]=ce,Se=L);else if(A<Ee&&0>u(K,ce))O[Se]=K,O[A]=ce,Se=A;else break e}}return Q}function u(O,Q){var ce=O.sortIndex-Q.sortIndex;return ce!==0?ce:O.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var p=Date,g=p.now();o.unstable_now=function(){return p.now()-g}}var v=[],y=[],x=1,N=null,j=3,F=!1,I=!1,le=!1,G=!1,$=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function se(O){for(var Q=c(y);Q!==null;){if(Q.callback===null)s(y);else if(Q.startTime<=O)s(y),Q.sortIndex=Q.expirationTime,i(v,Q);else break;Q=c(y)}}function de(O){if(le=!1,se(O),!I)if(c(v)!==null)I=!0,Ne||(Ne=!0,ae());else{var Q=c(y);Q!==null&&Qe(de,Q.startTime-O)}}var Ne=!1,ee=-1,W=5,xe=-1;function ge(){return G?!0:!(o.unstable_now()-xe<W)}function ve(){if(G=!1,Ne){var O=o.unstable_now();xe=O;var Q=!0;try{e:{I=!1,le&&(le=!1,re(ee),ee=-1),F=!0;var ce=j;try{n:{for(se(O),N=c(v);N!==null&&!(N.expirationTime>O&&ge());){var Se=N.callback;if(typeof Se=="function"){N.callback=null,j=N.priorityLevel;var Ee=Se(N.expirationTime<=O);if(O=o.unstable_now(),typeof Ee=="function"){N.callback=Ee,se(O),Q=!0;break n}N===c(v)&&s(v),se(O)}else s(v);N=c(v)}if(N!==null)Q=!0;else{var E=c(y);E!==null&&Qe(de,E.startTime-O),Q=!1}}break e}finally{N=null,j=ce,F=!1}Q=void 0}}finally{Q?ae():Ne=!1}}}var ae;if(typeof ue=="function")ae=function(){ue(ve)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ae=Pe.port2;Pe.port1.onmessage=ve,ae=function(){Ae.postMessage(null)}}else ae=function(){$(ve,0)};function Qe(O,Q){ee=$(function(){O(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return j},o.unstable_next=function(O){switch(j){case 1:case 2:case 3:var Q=3;break;default:Q=j}var ce=j;j=Q;try{return O()}finally{j=ce}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ce=j;j=O;try{return Q()}finally{j=ce}},o.unstable_scheduleCallback=function(O,Q,ce){var Se=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Se+ce:Se):ce=Se,O){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ce+Ee,O={id:x++,callback:Q,priorityLevel:O,startTime:ce,expirationTime:Ee,sortIndex:-1},ce>Se?(O.sortIndex=ce,i(y,O),c(v)===null&&O===c(y)&&(le?(re(ee),ee=-1):le=!0,Qe(de,ce-Se))):(O.sortIndex=Ee,i(v,O),I||F||(I=!0,Ne||(Ne=!0,ae()))),O},o.unstable_shouldYield=ge,o.unstable_wrapCallback=function(O){var Q=j;return function(){var ce=j;j=Q;try{return O.apply(this,arguments)}finally{j=ce}}}})(Fu)),Fu}var Ih;function Hg(){return Ih||(Ih=1,Iu.exports=Ug()),Iu.exports}var Pu={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function Gg(){if(Fh)return Bn;Fh=1;var o=xf();function i(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(v,y,x){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:N==null?null:""+N,children:v,containerInfo:y,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return h(v,y,null,x)},Bn.flushSync=function(v){var y=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=y,s.p=x,s.d.f()}},Bn.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},Bn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Bn.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,N=g(x,y.crossOrigin),j=typeof y.integrity=="string"?y.integrity:void 0,F=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:N,integrity:j,fetchPriority:F}):x==="script"&&s.d.X(v,{crossOrigin:N,integrity:j,fetchPriority:F,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Bn.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=g(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},Bn.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,N=g(x,y.crossOrigin);s.d.L(v,x,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Bn.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=g(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},Bn.requestFormReset=function(v){s.d.r(v)},Bn.unstable_batchedUpdates=function(v,y){return v(y)},Bn.useFormState=function(v,y,x){return p.H.useFormState(v,y,x)},Bn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Bn.version="19.2.7",Bn}var Ph;function Vg(){if(Ph)return Pu.exports;Ph=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Pu.exports=Gg(),Pu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Yg(){if(Qh)return Vi;Qh=1;var o=Hg(),i=xf(),c=Vg();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function p(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(s(188))}function y(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,l=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return v(r),e;if(a===l)return v(r),n;a=a.sibling}throw Error(s(188))}if(t.return!==l.return)t=r,l=a;else{for(var m=!1,_=r.child;_;){if(_===t){m=!0,t=r,l=a;break}if(_===l){m=!0,l=r,t=a;break}_=_.sibling}if(!m){for(_=a.child;_;){if(_===t){m=!0,t=a,l=r;break}if(_===l){m=!0,l=a,t=r;break}_=_.sibling}if(!m)throw Error(s(189))}}if(t.alternate!==l)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var N=Object.assign,j=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),re=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case $:return"Profiler";case G:return"StrictMode";case de:return"Suspense";case Ne:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case ue:return e.displayName||"Context";case re:return(e._context.displayName||"Context")+".Consumer";case se:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var Qe=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Se=[],Ee=-1;function E(e){return{current:e}}function L(e){0>Ee||(e.current=Se[Ee],Se[Ee]=null,Ee--)}function Z(e,n){Ee++,Se[Ee]=e.current,e.current=n}var A=E(null),K=E(null),P=E(null),X=E(null);function He(e,n){switch(Z(P,n),Z(K,e),Z(A,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?fh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=fh(n),e=dh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(A),Z(A,e)}function Ce(){L(A),L(K),L(P)}function Ln(e){e.memoizedState!==null&&Z(X,e);var n=A.current,t=dh(n,e.type);n!==t&&(Z(K,e),Z(A,t))}function Vt(e){K.current===e&&(L(A),L(K)),X.current===e&&(L(X),Bi._currentValue=ce)}var _e,gn;function En(e){if(_e===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);_e=n&&n[1]||"",gn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+gn}var De=!1;function kn(e,n){if(!e||De)return"";De=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(B){var D=B}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(B){D=B}e.call(Y.prototype)}}else{try{throw Error()}catch(B){D=B}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(B){if(B&&D&&typeof B.stack=="string")return[B.stack,D.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=l.DetermineComponentFrameRoot(),m=a[0],_=a[1];if(m&&_){var w=m.split(`
`),M=_.split(`
`);for(r=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;if(l===w.length||r===M.length)for(l=w.length-1,r=M.length-1;1<=l&&0<=r&&w[l]!==M[r];)r--;for(;1<=l&&0<=r;l--,r--)if(w[l]!==M[r]){if(l!==1||r!==1)do if(l--,r--,0>r||w[l]!==M[r]){var H=`
`+w[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=r);break}}}finally{De=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?En(t):""}function Ot(e,n){switch(e.tag){case 26:case 27:case 5:return En(e.type);case 16:return En("Lazy");case 13:return e.child!==n&&n!==null?En("Suspense Fallback"):En("Suspense");case 19:return En("SuspenseList");case 0:case 15:return kn(e.type,!1);case 11:return kn(e.type.render,!1);case 1:return kn(e.type,!0);case 31:return En("Activity");default:return""}}function zn(e){try{var n="",t=null;do n+=Ot(e,t),t=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Tl=Object.prototype.hasOwnProperty,Ml=o.unstable_scheduleCallback,pt=o.unstable_cancelCallback,Xr=o.unstable_shouldYield,jl=o.unstable_requestPaint,bn=o.unstable_now,fr=o.unstable_getCurrentPriorityLevel,Kr=o.unstable_ImmediatePriority,Xa=o.unstable_UserBlockingPriority,dr=o.unstable_NormalPriority,Wn=o.unstable_LowPriority,_t=o.unstable_IdlePriority,Jt=o.log,Ir=o.unstable_setDisableYieldValue,mr=null,yn=null;function Jn(e){if(typeof Jt=="function"&&Ir(e),yn&&typeof yn.setStrictMode=="function")try{yn.setStrictMode(mr,e)}catch{}}var Rn=Math.clz32?Math.clz32:Ol,Al=Math.log,Dl=Math.LN2;function Ol(e){return e>>>=0,e===0?32:31-(Al(e)/Dl|0)|0}var Yt=256,Un=262144,Ie=4194304;function Tn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fn(e,n,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,a=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var _=l&134217727;return _!==0?(l=_&~a,l!==0?r=Tn(l):(m&=_,m!==0?r=Tn(m):t||(t=_&~e,t!==0&&(r=Tn(t))))):(_=l&~a,_!==0?r=Tn(_):m!==0?r=Tn(m):t||(t=l&~e,t!==0&&(r=Tn(t)))),r===0?0:n!==0&&n!==r&&(n&a)===0&&(a=r&-r,t=n&-n,a>=t||a===32&&(t&4194048)!==0)?n:r}function Hn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Oo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ka(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function qt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function hr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function el(e,n,t,l,r,a){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var _=e.entanglements,w=e.expirationTimes,M=e.hiddenUpdates;for(t=m&~t;0<t;){var H=31-Rn(t),Y=1<<H;_[H]=0,w[H]=-1;var D=M[H];if(D!==null)for(M[H]=null,H=0;H<D.length;H++){var B=D[H];B!==null&&(B.lane&=-536870913)}t&=~Y}l!==0&&Ji(e,l,0),a!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=a&~(m&~n))}function Ji(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Rn(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Fr(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-Rn(t),r=1<<l;r&n|e[l]&n&&(e[l]|=n),t&=~r}}function es(e,n){var t=n&-n;return t=(t&42)!==0?1:Cl(t),(t&(e.suspendedLanes|n))!==0?0:t}function Cl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dn(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:zh(e.type))}function Ia(e,n){var t=Q.p;try{return Q.p=e,n()}finally{Q.p=t}}var et=Math.random().toString(36).slice(2),rn="__reactFiber$"+et,an="__reactProps$"+et,qn="__reactContainer$"+et,$t="__reactEvents$"+et,Pr="__reactListeners$"+et,pr="__reactHandles$"+et,Qr="__reactResources$"+et,$n="__reactMarker$"+et;function nl(e){delete e[rn],delete e[an],delete e[$t],delete e[Pr],delete e[pr]}function Xn(e){var n=e[rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[qn]||t[rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=yh(e);e!==null;){if(t=e[rn])return t;e=yh(e)}return n}e=t,t=e.parentNode}return null}function nt(e){if(e=e[rn]||e[qn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function bt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function tl(e){var n=e[Qr];return n||(n=e[Qr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Je(e){e[$n]=!0}var ll=new Set,he={};function Ct(e,n){zl(e,n),zl(e+"Capture",n)}function zl(e,n){for(he[e]=n,e=0;e<n.length;e++)ll.add(n[e])}var Co=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ns={},ts={};function _r(e){return Tl.call(ts,e)?!0:Tl.call(ns,e)?!1:Co.test(e)?ts[e]=!0:(ns[e]=!0,!1)}function zt(e,n,t){if(_r(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function yt(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function tt(e,n,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+l)}}function Mn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ls(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rs(e,n,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,a=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(m){t=""+m,a.call(this,m)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gr(e){if(!e._valueTracker){var n=ls(e)?"checked":"value";e._valueTracker=rs(e,n,""+e[n])}}function q(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=ls(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vn=/[\n"\\]/g;function Gn(e){return e.replace(vn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function al(e,n,t,l,r,a,m,_){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Mn(n)):e.value!==""+Mn(n)&&(e.value=""+Mn(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?Fa(e,m,Mn(n)):t!=null?Fa(e,m,Mn(t)):l!=null&&e.removeAttribute("value"),r==null&&a!=null&&(e.defaultChecked=!!a),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+Mn(_):e.removeAttribute("name")}function Zr(e,n,t,l,r,a,m,_){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),n!=null||t!=null){if(!(a!=="submit"&&a!=="reset"||n!=null)){gr(e);return}t=t!=null?""+Mn(t):"",n=n!=null?""+Mn(n):t,_||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=_?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),gr(e)}function Fa(e,n,t){n==="number"&&rl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function xn(e,n,t,l){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Mn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Pa(e,n,t){if(n!=null&&(n=""+Mn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Mn(t):""}function Wr(e,n,t,l){if(n==null){if(l!=null){if(t!=null)throw Error(s(92));if(Qe(l)){if(1<l.length)throw Error(s(93));l=l[0]}t=l}t==null&&(t=""),n=t}t=Mn(n),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),gr(e)}function sn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var br=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function as(e,n,t){var l=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,t):typeof t!="number"||t===0||br.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function is(e,n,t){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&t[r]!==l&&as(e,r,l)}else for(var a in n)n.hasOwnProperty(a)&&as(e,a,n[a])}function il(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ss=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return ss.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kn(){}var Jr=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Ll=null;function Bt(e){var n=nt(e);if(n&&(e=n.stateNode)){var t=e[an]||null;e:switch(e=n.stateNode,n.type){case"input":if(al(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Gn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var r=l[an]||null;if(!r)throw Error(s(90));al(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)l=t[n],l.form===e.form&&q(l)}break e;case"textarea":Pa(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&xn(e,!!t.multiple,n,!1)}}}var nn=!1;function Za(e,n,t){if(nn)return e(n,t);nn=!0;try{var l=e(n);return l}finally{if(nn=!1,(Bl!==null||Ll!==null)&&(Ws(),Bl&&(n=Bl,e=Ll,Ll=Bl=null,Bt(n),e)))for(n=0;n<e.length;n++)Bt(e[n])}}function Lt(e,n){var t=e.stateNode;if(t===null)return null;var l=t[an]||null;if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ea=!1;if(vt)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){ea=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{ea=!1}var Xt=null,Wa=null,na=null;function Ja(){if(na)return na;var e,n=Wa,t=n.length,l,r="value"in Xt?Xt.value:Xt.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var m=t-e;for(l=1;l<=m&&n[t-l]===r[a-l];l++);return na=r.slice(e,1<l?1-l:void 0)}function yr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Hl(){return!0}function os(){return!1}function jn(e){function n(t,l,r,a,m){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=a,this.target=m,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(t=e[_],this[_]=t?t(a):a[_]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Hl:os,this.isPropagationStopped=os,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),n}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vr=jn(Kt),xr=N({},Kt,{view:0,detail:0}),Bo=jn(xr),ei,ni,Sr,ta=N({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(ei=e.screenX-Sr.screenX,ni=e.screenY-Sr.screenY):ni=ei=0,Sr=e),ei)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),cs=jn(ta),Lo=N({},ta,{dataTransfer:0}),Uo=jn(Lo),Ho=N({},xr,{relatedTarget:0}),ol=jn(Ho),Go=N({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),Vo=jn(Go),us=N({},Kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yo=jn(us),fs=N({},Kt,{data:0}),ds=jn(fs),qo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ms={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$o={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$o[e])?!!n[e]:!1}function ti(){return Xo}var Ko=N({},xr,{key:function(e){if(e.key){var n=qo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ms[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Io=jn(Ko),Fo=N({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),li=jn(Fo),It=N({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),hs=jn(It),Po=N({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qo=jn(Po),Zo=N({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wr=jn(Zo),la=N({},Kt,{newState:0,oldState:0}),ps=jn(la),ri=[9,13,27,32],ra=vt&&"CompositionEvent"in window,Er=null;vt&&"documentMode"in document&&(Er=document.documentMode);var Wo=vt&&"TextEvent"in window&&!Er,d=vt&&(!ra||Er&&8<Er&&11>=Er),b=" ",S=!1;function C(e,n){switch(e){case"keyup":return ri.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var te=!1;function be(e,n){switch(e){case"compositionend":return z(n);case"keypress":return n.which!==32?null:(S=!0,b);case"textInput":return e=n.data,e===b&&S?null:e;default:return null}}function Ve(e,n){if(te)return e==="compositionend"||!ra&&C(e,n)?(e=Ja(),na=Wa=Xt=null,te=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return d&&n.locale!=="ko"?null:n.data;default:return null}}var on={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lt(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!on[e.type]:n==="textarea"}function cl(e,n,t,l){Bl?Ll?Ll.push(l):Ll=[l]:Bl=l,n=ao(n,"onChange"),0<n.length&&(t=new vr("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Be=null,rt=null;function ai(e){ah(e,0)}function Ft(e){var n=bt(e);if(q(n))return e}function ul(e,n){if(e==="change")return n}var aa=!1;if(vt){var kr;if(vt){var Nr="oninput"in document;if(!Nr){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),Nr=typeof ia.oninput=="function"}kr=Nr}else kr=!1;aa=kr&&(!document.documentMode||9<document.documentMode)}function Gl(){Be&&(Be.detachEvent("onpropertychange",_s),rt=Be=null)}function _s(e){if(e.propertyName==="value"&&Ft(rt)){var n=[];cl(n,rt,e,Qa(e)),Za(ai,n)}}function gs(e,n,t){e==="focusin"?(Gl(),Be=n,rt=t,Be.attachEvent("onpropertychange",_s)):e==="focusout"&&Gl()}function o_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ft(rt)}function c_(e,n){if(e==="click")return Ft(n)}function u_(e,n){if(e==="input"||e==="change")return Ft(n)}function f_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var at=typeof Object.is=="function"?Object.is:f_;function ii(e,n){if(at(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!Tl.call(n,r)||!at(e[r],n[r]))return!1}return!0}function Mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jf(e,n){var t=Mf(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Mf(t)}}function Af(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Af(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Df(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=rl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=rl(e.document)}return n}function Jo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var d_=vt&&"documentMode"in document&&11>=document.documentMode,sa=null,ec=null,si=null,nc=!1;function Of(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;nc||sa==null||sa!==rl(l)||(l=sa,"selectionStart"in l&&Jo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),si&&ii(si,l)||(si=l,l=ao(ec,"onSelect"),0<l.length&&(n=new vr("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=sa)))}function Rr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var oa={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},tc={},Cf={};vt&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function Tr(e){if(tc[e])return tc[e];if(!oa[e])return e;var n=oa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Cf)return tc[e]=n[t];return e}var zf=Tr("animationend"),Bf=Tr("animationiteration"),Lf=Tr("animationstart"),m_=Tr("transitionrun"),h_=Tr("transitionstart"),p_=Tr("transitioncancel"),Uf=Tr("transitionend"),Hf=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function Ut(e,n){Hf.set(e,n),Ct(n,[e])}var bs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],ca=0,rc=0;function ys(){for(var e=ca,n=rc=ca=0;n<e;){var t=xt[n];xt[n++]=null;var l=xt[n];xt[n++]=null;var r=xt[n];xt[n++]=null;var a=xt[n];if(xt[n++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}a!==0&&Gf(t,r,a)}}function vs(e,n,t,l){xt[ca++]=e,xt[ca++]=n,xt[ca++]=t,xt[ca++]=l,rc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ac(e,n,t,l){return vs(e,n,t,l),xs(e)}function Mr(e,n){return vs(e,null,null,n),xs(e)}function Gf(e,n,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var r=!1,a=e.return;a!==null;)a.childLanes|=t,l=a.alternate,l!==null&&(l.childLanes|=t),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(r=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,r&&n!==null&&(r=31-Rn(t),e=a.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=t|536870912),a):null}function xs(e){if(50<Mi)throw Mi=0,hu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ua={};function __(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,n,t,l){return new __(e,n,t,l)}function ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fl(e,n){var t=e.alternate;return t===null?(t=it(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Vf(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ss(e,n,t,l,r,a){var m=0;if(l=e,typeof e=="function")ic(e)&&(m=1);else if(typeof e=="string")m=xg(e,t,A.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=it(31,t,n,r),e.elementType=xe,e.lanes=a,e;case le:return jr(t.children,r,a,n);case G:m=8,r|=24;break;case $:return e=it(12,t,n,r|2),e.elementType=$,e.lanes=a,e;case de:return e=it(13,t,n,r),e.elementType=de,e.lanes=a,e;case Ne:return e=it(19,t,n,r),e.elementType=Ne,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:m=10;break e;case re:m=9;break e;case se:m=11;break e;case ee:m=14;break e;case W:m=16,l=null;break e}m=29,t=Error(s(130,e===null?"null":typeof e,"")),l=null}return n=it(m,t,n,r),n.elementType=e,n.type=l,n.lanes=a,n}function jr(e,n,t,l){return e=it(7,e,l,n),e.lanes=t,e}function sc(e,n,t){return e=it(6,e,null,n),e.lanes=t,e}function Yf(e){var n=it(18,null,null,0);return n.stateNode=e,n}function oc(e,n,t){return n=it(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var qf=new WeakMap;function St(e,n){if(typeof e=="object"&&e!==null){var t=qf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:zn(n)},qf.set(e,n),n)}return{value:e,source:n,stack:zn(n)}}var fa=[],da=0,ws=null,oi=0,wt=[],Et=0,Vl=null,Pt=1,Qt="";function dl(e,n){fa[da++]=oi,fa[da++]=ws,ws=e,oi=n}function $f(e,n,t){wt[Et++]=Pt,wt[Et++]=Qt,wt[Et++]=Vl,Vl=e;var l=Pt;e=Qt;var r=32-Rn(l)-1;l&=~(1<<r),t+=1;var a=32-Rn(n)+r;if(30<a){var m=r-r%5;a=(l&(1<<m)-1).toString(32),l>>=m,r-=m,Pt=1<<32-Rn(n)+r|t<<r|l,Qt=a+e}else Pt=1<<a|t<<r|l,Qt=e}function cc(e){e.return!==null&&(dl(e,1),$f(e,1,0))}function uc(e){for(;e===ws;)ws=fa[--da],fa[da]=null,oi=fa[--da],fa[da]=null;for(;e===Vl;)Vl=wt[--Et],wt[Et]=null,Qt=wt[--Et],wt[Et]=null,Pt=wt[--Et],wt[Et]=null}function Xf(e,n){wt[Et++]=Pt,wt[Et++]=Qt,wt[Et++]=Vl,Pt=n.id,Qt=n.overflow,Vl=e}var An=null,Ze=null,Oe=!1,Yl=null,kt=!1,fc=Error(s(519));function ql(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ci(St(n,e)),fc}function Kf(e){var n=e.stateNode,t=e.type,l=e.memoizedProps;switch(n[rn]=e,n[an]=l,t){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(t=0;t<Ai.length;t++)Te(Ai[t],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Zr(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Wr(n,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||l.suppressHydrationWarning===!0||ch(n.textContent,t)?(l.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),l.onScroll!=null&&Te("scroll",n),l.onScrollEnd!=null&&Te("scrollend",n),l.onClick!=null&&(n.onclick=Kn),n=!0):n=!1,n||ql(e,!0)}function If(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:An=An.return}}function ma(e){if(e!==An)return!1;if(!Oe)return If(e),Oe=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Mu(e.type,e.memoizedProps)),t=!t),t&&Ze&&ql(e),If(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=bh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=bh(e)}else n===27?(n=Ze,lr(e.type)?(e=Cu,Cu=null,Ze=e):Ze=n):Ze=An?Rt(e.stateNode.nextSibling):null;return!0}function Ar(){Ze=An=null,Oe=!1}function dc(){var e=Yl;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Yl=null),e}function ci(e){Yl===null?Yl=[e]:Yl.push(e)}var mc=E(null),Dr=null,ml=null;function $l(e,n,t){Z(mc,n._currentValue),n._currentValue=t}function hl(e){e._currentValue=mc.current,L(mc)}function hc(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function pc(e,n,t,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var a=r.dependencies;if(a!==null){var m=r.child;a=a.firstContext;e:for(;a!==null;){var _=a;a=r;for(var w=0;w<n.length;w++)if(_.context===n[w]){a.lanes|=t,_=a.alternate,_!==null&&(_.lanes|=t),hc(a.return,t,e),l||(m=null);break e}a=_.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=t,a=m.alternate,a!==null&&(a.lanes|=t),hc(m,t,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function ha(e,n,t,l){e=null;for(var r=n,a=!1;r!==null;){if(!a){if((r.flags&524288)!==0)a=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var _=r.type;at(r.pendingProps.value,m.value)||(e!==null?e.push(_):e=[_])}}else if(r===X.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Bi):e=[Bi])}r=r.return}e!==null&&pc(n,e,t,l),n.flags|=262144}function Es(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Or(e){Dr=e,ml=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return Ff(Dr,e)}function ks(e,n){return Dr===null&&Or(e),Ff(e,n)}function Ff(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},ml===null){if(e===null)throw Error(s(308));ml=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ml=ml.next=n;return t}var g_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},b_=o.unstable_scheduleCallback,y_=o.unstable_NormalPriority,mn={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _c(){return{controller:new g_,data:new Map,refCount:0}}function ui(e){e.refCount--,e.refCount===0&&b_(y_,function(){e.controller.abort()})}var fi=null,gc=0,pa=0,_a=null;function v_(e,n){if(fi===null){var t=fi=[];gc=0,pa=vu(),_a={status:"pending",value:void 0,then:function(l){t.push(l)}}}return gc++,n.then(Pf,Pf),n}function Pf(){if(--gc===0&&fi!==null){_a!==null&&(_a.status="fulfilled");var e=fi;fi=null,pa=0,_a=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function x_(e,n){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var Qf=O.S;O.S=function(e,n){Om=bn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&v_(e,n),Qf!==null&&Qf(e,n)};var Cr=E(null);function bc(){var e=Cr.current;return e!==null?e:Fe.pooledCache}function Ns(e,n){n===null?Z(Cr,Cr.current):Z(Cr,n.pool)}function Zf(){var e=bc();return e===null?null:{parent:mn._currentValue,pool:e}}var ga=Error(s(460)),yc=Error(s(474)),Rs=Error(s(542)),Ts={then:function(){}};function Wf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Kn,Kn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nd(e),e;default:if(typeof n.status=="string")n.then(Kn,Kn);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nd(e),e}throw Br=n,ga}}function zr(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Br=t,ga):t}}var Br=null;function ed(){if(Br===null)throw Error(s(459));var e=Br;return Br=null,e}function nd(e){if(e===ga||e===Rs)throw Error(s(483))}var ba=null,di=0;function Ms(e){var n=di;return di+=1,ba===null&&(ba=[]),Jf(ba,e,n)}function mi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function js(e,n){throw n.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function td(e){function n(R,k){if(e){var T=R.deletions;T===null?(R.deletions=[k],R.flags|=16):T.push(k)}}function t(R,k){if(!e)return null;for(;k!==null;)n(R,k),k=k.sibling;return null}function l(R){for(var k=new Map;R!==null;)R.key!==null?k.set(R.key,R):k.set(R.index,R),R=R.sibling;return k}function r(R,k){return R=fl(R,k),R.index=0,R.sibling=null,R}function a(R,k,T){return R.index=T,e?(T=R.alternate,T!==null?(T=T.index,T<k?(R.flags|=67108866,k):T):(R.flags|=67108866,k)):(R.flags|=1048576,k)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function _(R,k,T,V){return k===null||k.tag!==6?(k=sc(T,R.mode,V),k.return=R,k):(k=r(k,T),k.return=R,k)}function w(R,k,T,V){var me=T.type;return me===le?H(R,k,T.props.children,V,T.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&zr(me)===k.type)?(k=r(k,T.props),mi(k,T),k.return=R,k):(k=Ss(T.type,T.key,T.props,null,R.mode,V),mi(k,T),k.return=R,k)}function M(R,k,T,V){return k===null||k.tag!==4||k.stateNode.containerInfo!==T.containerInfo||k.stateNode.implementation!==T.implementation?(k=oc(T,R.mode,V),k.return=R,k):(k=r(k,T.children||[]),k.return=R,k)}function H(R,k,T,V,me){return k===null||k.tag!==7?(k=jr(T,R.mode,V,me),k.return=R,k):(k=r(k,T),k.return=R,k)}function Y(R,k,T){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=sc(""+k,R.mode,T),k.return=R,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case F:return T=Ss(k.type,k.key,k.props,null,R.mode,T),mi(T,k),T.return=R,T;case I:return k=oc(k,R.mode,T),k.return=R,k;case W:return k=zr(k),Y(R,k,T)}if(Qe(k)||ae(k))return k=jr(k,R.mode,T,null),k.return=R,k;if(typeof k.then=="function")return Y(R,Ms(k),T);if(k.$$typeof===ue)return Y(R,ks(R,k),T);js(R,k)}return null}function D(R,k,T,V){var me=k!==null?k.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return me!==null?null:_(R,k,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case F:return T.key===me?w(R,k,T,V):null;case I:return T.key===me?M(R,k,T,V):null;case W:return T=zr(T),D(R,k,T,V)}if(Qe(T)||ae(T))return me!==null?null:H(R,k,T,V,null);if(typeof T.then=="function")return D(R,k,Ms(T),V);if(T.$$typeof===ue)return D(R,k,ks(R,T),V);js(R,T)}return null}function B(R,k,T,V,me){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return R=R.get(T)||null,_(k,R,""+V,me);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case F:return R=R.get(V.key===null?T:V.key)||null,w(k,R,V,me);case I:return R=R.get(V.key===null?T:V.key)||null,M(k,R,V,me);case W:return V=zr(V),B(R,k,T,V,me)}if(Qe(V)||ae(V))return R=R.get(T)||null,H(k,R,V,me,null);if(typeof V.then=="function")return B(R,k,T,Ms(V),me);if(V.$$typeof===ue)return B(R,k,T,ks(k,V),me);js(k,V)}return null}function ie(R,k,T,V){for(var me=null,Le=null,oe=k,ke=k=0,je=null;oe!==null&&ke<T.length;ke++){oe.index>ke?(je=oe,oe=null):je=oe.sibling;var Ue=D(R,oe,T[ke],V);if(Ue===null){oe===null&&(oe=je);break}e&&oe&&Ue.alternate===null&&n(R,oe),k=a(Ue,k,ke),Le===null?me=Ue:Le.sibling=Ue,Le=Ue,oe=je}if(ke===T.length)return t(R,oe),Oe&&dl(R,ke),me;if(oe===null){for(;ke<T.length;ke++)oe=Y(R,T[ke],V),oe!==null&&(k=a(oe,k,ke),Le===null?me=oe:Le.sibling=oe,Le=oe);return Oe&&dl(R,ke),me}for(oe=l(oe);ke<T.length;ke++)je=B(oe,R,ke,T[ke],V),je!==null&&(e&&je.alternate!==null&&oe.delete(je.key===null?ke:je.key),k=a(je,k,ke),Le===null?me=je:Le.sibling=je,Le=je);return e&&oe.forEach(function(or){return n(R,or)}),Oe&&dl(R,ke),me}function pe(R,k,T,V){if(T==null)throw Error(s(151));for(var me=null,Le=null,oe=k,ke=k=0,je=null,Ue=T.next();oe!==null&&!Ue.done;ke++,Ue=T.next()){oe.index>ke?(je=oe,oe=null):je=oe.sibling;var or=D(R,oe,Ue.value,V);if(or===null){oe===null&&(oe=je);break}e&&oe&&or.alternate===null&&n(R,oe),k=a(or,k,ke),Le===null?me=or:Le.sibling=or,Le=or,oe=je}if(Ue.done)return t(R,oe),Oe&&dl(R,ke),me;if(oe===null){for(;!Ue.done;ke++,Ue=T.next())Ue=Y(R,Ue.value,V),Ue!==null&&(k=a(Ue,k,ke),Le===null?me=Ue:Le.sibling=Ue,Le=Ue);return Oe&&dl(R,ke),me}for(oe=l(oe);!Ue.done;ke++,Ue=T.next())Ue=B(oe,R,ke,Ue.value,V),Ue!==null&&(e&&Ue.alternate!==null&&oe.delete(Ue.key===null?ke:Ue.key),k=a(Ue,k,ke),Le===null?me=Ue:Le.sibling=Ue,Le=Ue);return e&&oe.forEach(function(Dg){return n(R,Dg)}),Oe&&dl(R,ke),me}function Ke(R,k,T,V){if(typeof T=="object"&&T!==null&&T.type===le&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case F:e:{for(var me=T.key;k!==null;){if(k.key===me){if(me=T.type,me===le){if(k.tag===7){t(R,k.sibling),V=r(k,T.props.children),V.return=R,R=V;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&zr(me)===k.type){t(R,k.sibling),V=r(k,T.props),mi(V,T),V.return=R,R=V;break e}t(R,k);break}else n(R,k);k=k.sibling}T.type===le?(V=jr(T.props.children,R.mode,V,T.key),V.return=R,R=V):(V=Ss(T.type,T.key,T.props,null,R.mode,V),mi(V,T),V.return=R,R=V)}return m(R);case I:e:{for(me=T.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===T.containerInfo&&k.stateNode.implementation===T.implementation){t(R,k.sibling),V=r(k,T.children||[]),V.return=R,R=V;break e}else{t(R,k);break}else n(R,k);k=k.sibling}V=oc(T,R.mode,V),V.return=R,R=V}return m(R);case W:return T=zr(T),Ke(R,k,T,V)}if(Qe(T))return ie(R,k,T,V);if(ae(T)){if(me=ae(T),typeof me!="function")throw Error(s(150));return T=me.call(T),pe(R,k,T,V)}if(typeof T.then=="function")return Ke(R,k,Ms(T),V);if(T.$$typeof===ue)return Ke(R,k,ks(R,T),V);js(R,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,k!==null&&k.tag===6?(t(R,k.sibling),V=r(k,T),V.return=R,R=V):(t(R,k),V=sc(T,R.mode,V),V.return=R,R=V),m(R)):t(R,k)}return function(R,k,T,V){try{di=0;var me=Ke(R,k,T,V);return ba=null,me}catch(oe){if(oe===ga||oe===Rs)throw oe;var Le=it(29,oe,null,R.mode);return Le.lanes=V,Le.return=R,Le}finally{}}}var Lr=td(!0),ld=td(!1),Xl=!1;function vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Il(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=xs(e),Gf(e,null,t),n}return vs(e,l,n,t),xs(e)}function hi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Fr(e,t)}}function Sc(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};a===null?r=a=m:a=a.next=m,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var wc=!1;function pi(){if(wc){var e=_a;if(e!==null)throw e}}function _i(e,n,t,l){wc=!1;var r=e.updateQueue;Xl=!1;var a=r.firstBaseUpdate,m=r.lastBaseUpdate,_=r.shared.pending;if(_!==null){r.shared.pending=null;var w=_,M=w.next;w.next=null,m===null?a=M:m.next=M,m=w;var H=e.alternate;H!==null&&(H=H.updateQueue,_=H.lastBaseUpdate,_!==m&&(_===null?H.firstBaseUpdate=M:_.next=M,H.lastBaseUpdate=w))}if(a!==null){var Y=r.baseState;m=0,H=M=w=null,_=a;do{var D=_.lane&-536870913,B=D!==_.lane;if(B?(Me&D)===D:(l&D)===D){D!==0&&D===pa&&(wc=!0),H!==null&&(H=H.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var ie=e,pe=_;D=n;var Ke=t;switch(pe.tag){case 1:if(ie=pe.payload,typeof ie=="function"){Y=ie.call(Ke,Y,D);break e}Y=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=pe.payload,D=typeof ie=="function"?ie.call(Ke,Y,D):ie,D==null)break e;Y=N({},Y,D);break e;case 2:Xl=!0}}D=_.callback,D!==null&&(e.flags|=64,B&&(e.flags|=8192),B=r.callbacks,B===null?r.callbacks=[D]:B.push(D))}else B={lane:D,tag:_.tag,payload:_.payload,callback:_.callback,next:null},H===null?(M=H=B,w=Y):H=H.next=B,m|=D;if(_=_.next,_===null){if(_=r.shared.pending,_===null)break;B=_,_=B.next,B.next=null,r.lastBaseUpdate=B,r.shared.pending=null}}while(!0);H===null&&(w=Y),r.baseState=w,r.firstBaseUpdate=M,r.lastBaseUpdate=H,a===null&&(r.shared.lanes=0),Wl|=m,e.lanes=m,e.memoizedState=Y}}function rd(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ad(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)rd(t[e],n)}var ya=E(null),As=E(0);function id(e,n){e=wl,Z(As,e),Z(ya,n),wl=e|n.baseLanes}function Ec(){Z(As,wl),Z(ya,ya.current)}function kc(){wl=As.current,L(ya),L(As)}var st=E(null),Nt=null;function Fl(e){var n=e.alternate;Z(cn,cn.current&1),Z(st,e),Nt===null&&(n===null||ya.current!==null||n.memoizedState!==null)&&(Nt=e)}function Nc(e){Z(cn,cn.current),Z(st,e),Nt===null&&(Nt=e)}function sd(e){e.tag===22?(Z(cn,cn.current),Z(st,e),Nt===null&&(Nt=e)):Pl()}function Pl(){Z(cn,cn.current),Z(st,st.current)}function ot(e){L(st),Nt===e&&(Nt=null),L(cn)}var cn=E(0);function Ds(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Du(t)||Ou(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pl=0,we=null,$e=null,hn=null,Os=!1,va=!1,Ur=!1,Cs=0,gi=0,xa=null,S_=0;function tn(){throw Error(s(321))}function Rc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!at(e[t],n[t]))return!1;return!0}function Tc(e,n,t,l,r,a){return pl=a,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?$d:qc,Ur=!1,a=t(l,r),Ur=!1,va&&(a=cd(n,t,l,r)),od(e),a}function od(e){O.H=vi;var n=$e!==null&&$e.next!==null;if(pl=0,hn=$e=we=null,Os=!1,gi=0,xa=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Es(e)&&(pn=!0))}function cd(e,n,t,l){we=e;var r=0;do{if(va&&(xa=null),gi=0,va=!1,25<=r)throw Error(s(301));if(r+=1,hn=$e=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}O.H=Xd,a=n(t,l)}while(va);return a}function w_(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?bi(n):n,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(we.flags|=1024),n}function Mc(){var e=Cs!==0;return Cs=0,e}function jc(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Ac(e){if(Os){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Os=!1}pl=0,hn=$e=we=null,va=!1,gi=Cs=0,xa=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?we.memoizedState=hn=e:hn=hn.next=e,hn}function un(){if($e===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=hn===null?we.memoizedState:hn.next;if(n!==null)hn=n,$e=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},hn===null?we.memoizedState=hn=e:hn=hn.next=e}return hn}function zs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var n=gi;return gi+=1,xa===null&&(xa=[]),e=Jf(xa,e,n),n=we,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?$d:qc),e}function Bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===ue)return Dn(e)}throw Error(s(438,String(e)))}function Dc(e){var n=null,t=we.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=zs(),we.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),l=0;l<e;l++)t[l]=ge;return n.index++,t}function _l(e,n){return typeof n=="function"?n(e):n}function Ls(e){var n=un();return Oc(n,$e,e)}function Oc(e,n,t){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var r=e.baseQueue,a=l.pending;if(a!==null){if(r!==null){var m=r.next;r.next=a.next,a.next=m}n.baseQueue=r=a,l.pending=null}if(a=e.baseState,r===null)e.memoizedState=a;else{n=r.next;var _=m=null,w=null,M=n,H=!1;do{var Y=M.lane&-536870913;if(Y!==M.lane?(Me&Y)===Y:(pl&Y)===Y){var D=M.revertLane;if(D===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Y===pa&&(H=!0);else if((pl&D)===D){M=M.next,D===pa&&(H=!0);continue}else Y={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(_=w=Y,m=a):w=w.next=Y,we.lanes|=D,Wl|=D;Y=M.action,Ur&&t(a,Y),a=M.hasEagerState?M.eagerState:t(a,Y)}else D={lane:Y,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(_=w=D,m=a):w=w.next=D,we.lanes|=Y,Wl|=Y;M=M.next}while(M!==null&&M!==n);if(w===null?m=a:w.next=_,!at(a,e.memoizedState)&&(pn=!0,H&&(t=_a,t!==null)))throw t;e.memoizedState=a,e.baseState=m,e.baseQueue=w,l.lastRenderedState=a}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Cc(e){var n=un(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var l=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var m=r=r.next;do a=e(a,m.action),m=m.next;while(m!==r);at(a,n.memoizedState)||(pn=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,l]}function ud(e,n,t){var l=we,r=un(),a=Oe;if(a){if(t===void 0)throw Error(s(407));t=t()}else t=n();var m=!at(($e||r).memoizedState,t);if(m&&(r.memoizedState=t,pn=!0),r=r.queue,Lc(md.bind(null,l,r,e),[e]),r.getSnapshot!==n||m||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,Sa(9,{destroy:void 0},dd.bind(null,l,r,t,n),null),Fe===null)throw Error(s(349));a||(pl&127)!==0||fd(l,n,t)}return t}function fd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=we.updateQueue,n===null?(n=zs(),we.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function dd(e,n,t,l){n.value=t,n.getSnapshot=l,hd(n)&&pd(e)}function md(e,n,t){return t(function(){hd(n)&&pd(e)})}function hd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!at(e,t)}catch{return!0}}function pd(e){var n=Mr(e,2);n!==null&&Zn(n,e,2)}function zc(e){var n=Vn();if(typeof e=="function"){var t=e;if(e=t(),Ur){Jn(!0);try{t()}finally{Jn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:e},n}function _d(e,n,t,l){return e.baseState=t,Oc(e,$e,typeof l=="function"?l:_l)}function E_(e,n,t,l,r){if(Gs(e))throw Error(s(485));if(e=n.action,e!==null){var a={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){a.listeners.push(m)}};O.T!==null?t(!0):a.isTransition=!1,l(a),t=n.pending,t===null?(a.next=n.pending=a,gd(n,a)):(a.next=t.next,n.pending=t.next=a)}}function gd(e,n){var t=n.action,l=n.payload,r=e.state;if(n.isTransition){var a=O.T,m={};O.T=m;try{var _=t(r,l),w=O.S;w!==null&&w(m,_),bd(e,n,_)}catch(M){Bc(e,n,M)}finally{a!==null&&m.types!==null&&(a.types=m.types),O.T=a}}else try{a=t(r,l),bd(e,n,a)}catch(M){Bc(e,n,M)}}function bd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){yd(e,n,l)},function(l){return Bc(e,n,l)}):yd(e,n,t)}function yd(e,n,t){n.status="fulfilled",n.value=t,vd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,gd(e,t)))}function Bc(e,n,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=t,vd(n),n=n.next;while(n!==l)}e.action=null}function vd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function xd(e,n){return n}function Sd(e,n){if(Oe){var t=Fe.formState;if(t!==null){e:{var l=we;if(Oe){if(Ze){n:{for(var r=Ze,a=kt;r.nodeType!==8;){if(!a){r=null;break n}if(r=Rt(r.nextSibling),r===null){r=null;break n}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){Ze=Rt(r.nextSibling),l=r.data==="F!";break e}}ql(l)}l=!1}l&&(n=t[0])}}return t=Vn(),t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xd,lastRenderedState:n},t.queue=l,t=Vd.bind(null,we,l),l.dispatch=t,l=zc(!1),a=Yc.bind(null,we,!1,l.queue),l=Vn(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,t=E_.bind(null,we,r,a,t),r.dispatch=t,l.memoizedState=e,[n,t,!1]}function wd(e){var n=un();return Ed(n,$e,e)}function Ed(e,n,t){if(n=Oc(e,n,xd)[0],e=Ls(_l)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=bi(n)}catch(m){throw m===ga?Rs:m}else l=n;n=un();var r=n.queue,a=r.dispatch;return t!==n.memoizedState&&(we.flags|=2048,Sa(9,{destroy:void 0},k_.bind(null,r,t),null)),[l,a,e]}function k_(e,n){e.action=n}function kd(e){var n=un(),t=$e;if(t!==null)return Ed(n,t,e);un(),n=n.memoizedState,t=un();var l=t.queue.dispatch;return t.memoizedState=e,[n,l,!1]}function Sa(e,n,t,l){return e={tag:e,create:t,deps:l,inst:n,next:null},n=we.updateQueue,n===null&&(n=zs(),we.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e),e}function Nd(){return un().memoizedState}function Us(e,n,t,l){var r=Vn();we.flags|=e,r.memoizedState=Sa(1|n,{destroy:void 0},t,l===void 0?null:l)}function Hs(e,n,t,l){var r=un();l=l===void 0?null:l;var a=r.memoizedState.inst;$e!==null&&l!==null&&Rc(l,$e.memoizedState.deps)?r.memoizedState=Sa(n,a,t,l):(we.flags|=e,r.memoizedState=Sa(1|n,a,t,l))}function Rd(e,n){Us(8390656,8,e,n)}function Lc(e,n){Hs(2048,8,e,n)}function N_(e){we.flags|=4;var n=we.updateQueue;if(n===null)n=zs(),we.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Td(e){var n=un().memoizedState;return N_({ref:n,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Md(e,n){return Hs(4,2,e,n)}function jd(e,n){return Hs(4,4,e,n)}function Ad(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dd(e,n,t){t=t!=null?t.concat([e]):null,Hs(4,4,Ad.bind(null,n,e),t)}function Uc(){}function Od(e,n){var t=un();n=n===void 0?null:n;var l=t.memoizedState;return n!==null&&Rc(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function Cd(e,n){var t=un();n=n===void 0?null:n;var l=t.memoizedState;if(n!==null&&Rc(n,l[1]))return l[0];if(l=e(),Ur){Jn(!0);try{e()}finally{Jn(!1)}}return t.memoizedState=[l,n],l}function Hc(e,n,t){return t===void 0||(pl&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=zm(),we.lanes|=e,Wl|=e,t)}function zd(e,n,t,l){return at(t,n)?t:ya.current!==null?(e=Hc(e,t,l),at(e,n)||(pn=!0),e):(pl&42)===0||(pl&1073741824)!==0&&(Me&261930)===0?(pn=!0,e.memoizedState=t):(e=zm(),we.lanes|=e,Wl|=e,n)}function Bd(e,n,t,l,r){var a=Q.p;Q.p=a!==0&&8>a?a:8;var m=O.T,_={};O.T=_,Yc(e,!1,n,t);try{var w=r(),M=O.S;if(M!==null&&M(_,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=x_(w,l);yi(e,n,H,ft(e))}else yi(e,n,l,ft(e))}catch(Y){yi(e,n,{then:function(){},status:"rejected",reason:Y},ft())}finally{Q.p=a,m!==null&&_.types!==null&&(m.types=_.types),O.T=m}}function R_(){}function Gc(e,n,t,l){if(e.tag!==5)throw Error(s(476));var r=Ld(e).queue;Bd(e,r,n,ce,t===null?R_:function(){return Ud(e),t(l)})}function Ld(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:ce},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ud(e){var n=Ld(e);n.next===null&&(n=e.alternate.memoizedState),yi(e,n.next.queue,{},ft())}function Vc(){return Dn(Bi)}function Hd(){return un().memoizedState}function Gd(){return un().memoizedState}function T_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=ft();e=Kl(t);var l=Il(n,e,t);l!==null&&(Zn(l,n,t),hi(l,n,t)),n={cache:_c()},e.payload=n;return}n=n.return}}function M_(e,n,t){var l=ft();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Gs(e)?Yd(n,t):(t=ac(e,n,t,l),t!==null&&(Zn(t,e,l),qd(t,n,l)))}function Vd(e,n,t){var l=ft();yi(e,n,t,l)}function yi(e,n,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gs(e))Yd(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var m=n.lastRenderedState,_=a(m,t);if(r.hasEagerState=!0,r.eagerState=_,at(_,m))return vs(e,n,r,0),Fe===null&&ys(),!1}catch{}finally{}if(t=ac(e,n,r,l),t!==null)return Zn(t,e,l),qd(t,n,l),!0}return!1}function Yc(e,n,t,l){if(l={lane:2,revertLane:vu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gs(e)){if(n)throw Error(s(479))}else n=ac(e,t,l,2),n!==null&&Zn(n,e,2)}function Gs(e){var n=e.alternate;return e===we||n!==null&&n===we}function Yd(e,n){va=Os=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function qd(e,n,t){if((t&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Fr(e,t)}}var vi={readContext:Dn,use:Bs,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};vi.useEffectEvent=tn;var $d={readContext:Dn,use:Bs,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:Rd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Us(4194308,4,Ad.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Us(4194308,4,e,n)},useInsertionEffect:function(e,n){Us(4,2,e,n)},useMemo:function(e,n){var t=Vn();n=n===void 0?null:n;var l=e();if(Ur){Jn(!0);try{e()}finally{Jn(!1)}}return t.memoizedState=[l,n],l},useReducer:function(e,n,t){var l=Vn();if(t!==void 0){var r=t(n);if(Ur){Jn(!0);try{t(n)}finally{Jn(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=M_.bind(null,we,e),[l.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=zc(e);var n=e.queue,t=Vd.bind(null,we,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Uc,useDeferredValue:function(e,n){var t=Vn();return Hc(t,e,n)},useTransition:function(){var e=zc(!1);return e=Bd.bind(null,we,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var l=we,r=Vn();if(Oe){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Fe===null)throw Error(s(349));(Me&127)!==0||fd(l,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,Rd(md.bind(null,l,a,e),[e]),l.flags|=2048,Sa(9,{destroy:void 0},dd.bind(null,l,a,t,n),null),t},useId:function(){var e=Vn(),n=Fe.identifierPrefix;if(Oe){var t=Qt,l=Pt;t=(l&~(1<<32-Rn(l)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Cs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=S_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Vc,useFormState:Sd,useActionState:Sd,useOptimistic:function(e){var n=Vn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Yc.bind(null,we,!0,t),t.dispatch=n,[e,n]},useMemoCache:Dc,useCacheRefresh:function(){return Vn().memoizedState=T_.bind(null,we)},useEffectEvent:function(e){var n=Vn(),t={impl:e};return n.memoizedState=t,function(){if((Ge&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}},qc={readContext:Dn,use:Bs,useCallback:Od,useContext:Dn,useEffect:Lc,useImperativeHandle:Dd,useInsertionEffect:Md,useLayoutEffect:jd,useMemo:Cd,useReducer:Ls,useRef:Nd,useState:function(){return Ls(_l)},useDebugValue:Uc,useDeferredValue:function(e,n){var t=un();return zd(t,$e.memoizedState,e,n)},useTransition:function(){var e=Ls(_l)[0],n=un().memoizedState;return[typeof e=="boolean"?e:bi(e),n]},useSyncExternalStore:ud,useId:Hd,useHostTransitionStatus:Vc,useFormState:wd,useActionState:wd,useOptimistic:function(e,n){var t=un();return _d(t,$e,e,n)},useMemoCache:Dc,useCacheRefresh:Gd};qc.useEffectEvent=Td;var Xd={readContext:Dn,use:Bs,useCallback:Od,useContext:Dn,useEffect:Lc,useImperativeHandle:Dd,useInsertionEffect:Md,useLayoutEffect:jd,useMemo:Cd,useReducer:Cc,useRef:Nd,useState:function(){return Cc(_l)},useDebugValue:Uc,useDeferredValue:function(e,n){var t=un();return $e===null?Hc(t,e,n):zd(t,$e.memoizedState,e,n)},useTransition:function(){var e=Cc(_l)[0],n=un().memoizedState;return[typeof e=="boolean"?e:bi(e),n]},useSyncExternalStore:ud,useId:Hd,useHostTransitionStatus:Vc,useFormState:kd,useActionState:kd,useOptimistic:function(e,n){var t=un();return $e!==null?_d(t,$e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Dc,useCacheRefresh:Gd};Xd.useEffectEvent=Td;function $c(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:N({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Xc={enqueueSetState:function(e,n,t){e=e._reactInternals;var l=ft(),r=Kl(l);r.payload=n,t!=null&&(r.callback=t),n=Il(e,r,l),n!==null&&(Zn(n,e,l),hi(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=ft(),r=Kl(l);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=Il(e,r,l),n!==null&&(Zn(n,e,l),hi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ft(),l=Kl(t);l.tag=2,n!=null&&(l.callback=n),n=Il(e,l,t),n!==null&&(Zn(n,e,t),hi(n,e,t))}};function Kd(e,n,t,l,r,a,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,m):n.prototype&&n.prototype.isPureReactComponent?!ii(t,l)||!ii(r,a):!0}function Id(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&Xc.enqueueReplaceState(n,n.state,null)}function Hr(e,n){var t=n;if("ref"in n){t={};for(var l in n)l!=="ref"&&(t[l]=n[l])}if(e=e.defaultProps){t===n&&(t=N({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function Fd(e){bs(e)}function Pd(e){console.error(e)}function Qd(e){bs(e)}function Vs(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Zd(e,n,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Kc(e,n,t){return t=Kl(t),t.tag=3,t.payload={element:null},t.callback=function(){Vs(e,n)},t}function Wd(e){return e=Kl(e),e.tag=3,e}function Jd(e,n,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var a=l.value;e.payload=function(){return r(a)},e.callback=function(){Zd(n,t,l)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Zd(n,t,l),typeof r!="function"&&(Jl===null?Jl=new Set([this]):Jl.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function j_(e,n,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=t.alternate,n!==null&&ha(n,t,r,!0),t=st.current,t!==null){switch(t.tag){case 31:case 13:return Nt===null?Js():t.alternate===null&&ln===0&&(ln=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===Ts?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([l]):n.add(l),gu(e,l,r)),!1;case 22:return t.flags|=65536,l===Ts?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([l]):t.add(l)),gu(e,l,r)),!1}throw Error(s(435,t.tag))}return gu(e,l,r),Js(),!1}if(Oe)return n=st.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==fc&&(e=Error(s(422),{cause:l}),ci(St(e,t)))):(l!==fc&&(n=Error(s(423),{cause:l}),ci(St(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=St(l,t),r=Kc(e.stateNode,l,r),Sc(e,r),ln!==4&&(ln=2)),!1;var a=Error(s(520),{cause:l});if(a=St(a,t),Ti===null?Ti=[a]:Ti.push(a),ln!==4&&(ln=2),n===null)return!0;l=St(l,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=Kc(t.stateNode,l,e),Sc(t,e),!1;case 1:if(n=t.type,a=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Jl===null||!Jl.has(a))))return t.flags|=65536,r&=-r,t.lanes|=r,r=Wd(r),Jd(r,e,t,l),Sc(t,r),!1}t=t.return}while(t!==null);return!1}var Ic=Error(s(461)),pn=!1;function On(e,n,t,l){n.child=e===null?ld(n,null,t,l):Lr(n,e.child,t,l)}function em(e,n,t,l,r){t=t.render;var a=n.ref;if("ref"in l){var m={};for(var _ in l)_!=="ref"&&(m[_]=l[_])}else m=l;return Or(n),l=Tc(e,n,t,m,a,r),_=Mc(),e!==null&&!pn?(jc(e,n,r),gl(e,n,r)):(Oe&&_&&cc(n),n.flags|=1,On(e,n,l,r),n.child)}function nm(e,n,t,l,r){if(e===null){var a=t.type;return typeof a=="function"&&!ic(a)&&a.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=a,tm(e,n,a,l,r)):(e=Ss(t.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!nu(e,r)){var m=a.memoizedProps;if(t=t.compare,t=t!==null?t:ii,t(m,l)&&e.ref===n.ref)return gl(e,n,r)}return n.flags|=1,e=fl(a,l),e.ref=n.ref,e.return=n,n.child=e}function tm(e,n,t,l,r){if(e!==null){var a=e.memoizedProps;if(ii(a,l)&&e.ref===n.ref)if(pn=!1,n.pendingProps=l=a,nu(e,r))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,gl(e,n,r)}return Fc(e,n,t,l,r)}function lm(e,n,t,l){var r=l.children,a=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(a=a!==null?a.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~a}else l=0,n.child=null;return rm(e,n,a,t,l)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ns(n,a!==null?a.cachePool:null),a!==null?id(n,a):Ec(),sd(n);else return l=n.lanes=536870912,rm(e,n,a!==null?a.baseLanes|t:t,t,l)}else a!==null?(Ns(n,a.cachePool),id(n,a),Pl(),n.memoizedState=null):(e!==null&&Ns(n,null),Ec(),Pl());return On(e,n,r,t),n.child}function xi(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rm(e,n,t,l,r){var a=bc();return a=a===null?null:{parent:mn._currentValue,pool:a},n.memoizedState={baseLanes:t,cachePool:a},e!==null&&Ns(n,null),Ec(),sd(n),e!==null&&ha(e,n,l,!0),n.childLanes=r,null}function Ys(e,n){return n=$s({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function am(e,n,t){return Lr(n,e.child,null,t),e=Ys(n,n.pendingProps),e.flags|=2,ot(n),n.memoizedState=null,e}function A_(e,n,t){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Oe){if(l.mode==="hidden")return e=Ys(n,l),n.lanes=536870912,xi(null,e);if(Nc(n),(e=Ze)?(e=gh(e,kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Vl!==null?{id:Pt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},t=Yf(e),t.return=n,n.child=t,An=n,Ze=null)):e=null,e===null)throw ql(n);return n.lanes=536870912,null}return Ys(n,l)}var a=e.memoizedState;if(a!==null){var m=a.dehydrated;if(Nc(n),r)if(n.flags&256)n.flags&=-257,n=am(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||ha(e,n,t,!1),r=(t&e.childLanes)!==0,pn||r){if(l=Fe,l!==null&&(m=es(l,t),m!==0&&m!==a.retryLane))throw a.retryLane=m,Mr(e,m),Zn(l,e,m),Ic;Js(),n=am(e,n,t)}else e=a.treeContext,Ze=Rt(m.nextSibling),An=n,Oe=!0,Yl=null,kt=!1,e!==null&&Xf(n,e),n=Ys(n,l),n.flags|=4096;return n}return e=fl(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function qs(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Fc(e,n,t,l,r){return Or(n),t=Tc(e,n,t,l,void 0,r),l=Mc(),e!==null&&!pn?(jc(e,n,r),gl(e,n,r)):(Oe&&l&&cc(n),n.flags|=1,On(e,n,t,r),n.child)}function im(e,n,t,l,r,a){return Or(n),n.updateQueue=null,t=cd(n,l,t,r),od(e),l=Mc(),e!==null&&!pn?(jc(e,n,a),gl(e,n,a)):(Oe&&l&&cc(n),n.flags|=1,On(e,n,t,a),n.child)}function sm(e,n,t,l,r){if(Or(n),n.stateNode===null){var a=ua,m=t.contextType;typeof m=="object"&&m!==null&&(a=Dn(m)),a=new t(l,a),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Xc,n.stateNode=a,a._reactInternals=n,a=n.stateNode,a.props=l,a.state=n.memoizedState,a.refs={},vc(n),m=t.contextType,a.context=typeof m=="object"&&m!==null?Dn(m):ua,a.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&($c(n,t,m,l),a.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(m=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),m!==a.state&&Xc.enqueueReplaceState(a,a.state,null),_i(n,l,a,r),pi(),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){a=n.stateNode;var _=n.memoizedProps,w=Hr(t,_);a.props=w;var M=a.context,H=t.contextType;m=ua,typeof H=="object"&&H!==null&&(m=Dn(H));var Y=t.getDerivedStateFromProps;H=typeof Y=="function"||typeof a.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,H||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(_||M!==m)&&Id(n,a,l,m),Xl=!1;var D=n.memoizedState;a.state=D,_i(n,l,a,r),pi(),M=n.memoizedState,_||D!==M||Xl?(typeof Y=="function"&&($c(n,t,Y,l),M=n.memoizedState),(w=Xl||Kd(n,t,w,l,D,M,m))?(H||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=M),a.props=l,a.state=M,a.context=m,l=w):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{a=n.stateNode,xc(e,n),m=n.memoizedProps,H=Hr(t,m),a.props=H,Y=n.pendingProps,D=a.context,M=t.contextType,w=ua,typeof M=="object"&&M!==null&&(w=Dn(M)),_=t.getDerivedStateFromProps,(M=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(m!==Y||D!==w)&&Id(n,a,l,w),Xl=!1,D=n.memoizedState,a.state=D,_i(n,l,a,r),pi();var B=n.memoizedState;m!==Y||D!==B||Xl||e!==null&&e.dependencies!==null&&Es(e.dependencies)?(typeof _=="function"&&($c(n,t,_,l),B=n.memoizedState),(H=Xl||Kd(n,t,H,l,D,B,w)||e!==null&&e.dependencies!==null&&Es(e.dependencies))?(M||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,B,w),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,B,w)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=B),a.props=l,a.state=B,a.context=w,l=H):(typeof a.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),l=!1)}return a=l,qs(e,n),l=(n.flags&128)!==0,a||l?(a=n.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:a.render(),n.flags|=1,e!==null&&l?(n.child=Lr(n,e.child,null,r),n.child=Lr(n,null,t,r)):On(e,n,t,r),n.memoizedState=a.state,e=n.child):e=gl(e,n,r),e}function om(e,n,t,l){return Ar(),n.flags|=256,On(e,n,t,l),n.child}var Pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qc(e){return{baseLanes:e,cachePool:Zf()}}function Zc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=ut),e}function cm(e,n,t){var l=n.pendingProps,r=!1,a=(n.flags&128)!==0,m;if((m=a)||(m=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),m&&(r=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Oe){if(r?Fl(n):Pl(),(e=Ze)?(e=gh(e,kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Vl!==null?{id:Pt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},t=Yf(e),t.return=n,n.child=t,An=n,Ze=null)):e=null,e===null)throw ql(n);return Ou(e)?n.lanes=32:n.lanes=536870912,null}var _=l.children;return l=l.fallback,r?(Pl(),r=n.mode,_=$s({mode:"hidden",children:_},r),l=jr(l,r,t,null),_.return=n,l.return=n,_.sibling=l,n.child=_,l=n.child,l.memoizedState=Qc(t),l.childLanes=Zc(e,m,t),n.memoizedState=Pc,xi(null,l)):(Fl(n),Wc(n,_))}var w=e.memoizedState;if(w!==null&&(_=w.dehydrated,_!==null)){if(a)n.flags&256?(Fl(n),n.flags&=-257,n=Jc(e,n,t)):n.memoizedState!==null?(Pl(),n.child=e.child,n.flags|=128,n=null):(Pl(),_=l.fallback,r=n.mode,l=$s({mode:"visible",children:l.children},r),_=jr(_,r,t,null),_.flags|=2,l.return=n,_.return=n,l.sibling=_,n.child=l,Lr(n,e.child,null,t),l=n.child,l.memoizedState=Qc(t),l.childLanes=Zc(e,m,t),n.memoizedState=Pc,n=xi(null,l));else if(Fl(n),Ou(_)){if(m=_.nextSibling&&_.nextSibling.dataset,m)var M=m.dgst;m=M,l=Error(s(419)),l.stack="",l.digest=m,ci({value:l,source:null,stack:null}),n=Jc(e,n,t)}else if(pn||ha(e,n,t,!1),m=(t&e.childLanes)!==0,pn||m){if(m=Fe,m!==null&&(l=es(m,t),l!==0&&l!==w.retryLane))throw w.retryLane=l,Mr(e,l),Zn(m,e,l),Ic;Du(_)||Js(),n=Jc(e,n,t)}else Du(_)?(n.flags|=192,n.child=e.child,n=null):(e=w.treeContext,Ze=Rt(_.nextSibling),An=n,Oe=!0,Yl=null,kt=!1,e!==null&&Xf(n,e),n=Wc(n,l.children),n.flags|=4096);return n}return r?(Pl(),_=l.fallback,r=n.mode,w=e.child,M=w.sibling,l=fl(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,M!==null?_=fl(M,_):(_=jr(_,r,t,null),_.flags|=2),_.return=n,l.return=n,l.sibling=_,n.child=l,xi(null,l),l=n.child,_=e.child.memoizedState,_===null?_=Qc(t):(r=_.cachePool,r!==null?(w=mn._currentValue,r=r.parent!==w?{parent:w,pool:w}:r):r=Zf(),_={baseLanes:_.baseLanes|t,cachePool:r}),l.memoizedState=_,l.childLanes=Zc(e,m,t),n.memoizedState=Pc,xi(e.child,l)):(Fl(n),t=e.child,e=t.sibling,t=fl(t,{mode:"visible",children:l.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function Wc(e,n){return n=$s({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function $s(e,n){return e=it(22,e,null,n),e.lanes=0,e}function Jc(e,n,t){return Lr(n,e.child,null,t),e=Wc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function um(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),hc(e.return,n,t)}function eu(e,n,t,l,r,a){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:a}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=t,m.tailMode=r,m.treeForkCount=a)}function fm(e,n,t){var l=n.pendingProps,r=l.revealOrder,a=l.tail;l=l.children;var m=cn.current,_=(m&2)!==0;if(_?(m=m&1|2,n.flags|=128):m&=1,Z(cn,m),On(e,n,l,t),l=Oe?oi:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&um(e,t,n);else if(e.tag===19)um(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Ds(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),eu(n,!1,r,t,a,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ds(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}eu(n,!0,t,null,a,l);break;case"together":eu(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function gl(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Wl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ha(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=fl(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=fl(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function nu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Es(e)))}function D_(e,n,t){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),$l(n,mn,e.memoizedState.cache),Ar();break;case 27:case 5:Ln(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:$l(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nc(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Fl(n),n.flags|=128,null):(t&n.child.childLanes)!==0?cm(e,n,t):(Fl(n),e=gl(e,n,t),e!==null?e.sibling:null);Fl(n);break;case 19:var r=(e.flags&128)!==0;if(l=(t&n.childLanes)!==0,l||(ha(e,n,t,!1),l=(t&n.childLanes)!==0),r){if(l)return fm(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Z(cn,cn.current),l)break;return null;case 22:return n.lanes=0,lm(e,n,t,n.pendingProps);case 24:$l(n,mn,e.memoizedState.cache)}return gl(e,n,t)}function dm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!nu(e,t)&&(n.flags&128)===0)return pn=!1,D_(e,n,t);pn=(e.flags&131072)!==0}else pn=!1,Oe&&(n.flags&1048576)!==0&&$f(n,oi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=zr(n.elementType),n.type=e,typeof e=="function")ic(e)?(l=Hr(e,l),n.tag=1,n=sm(null,n,e,l,t)):(n.tag=0,n=Fc(null,n,e,l,t));else{if(e!=null){var r=e.$$typeof;if(r===se){n.tag=11,n=em(null,n,e,l,t);break e}else if(r===ee){n.tag=14,n=nm(null,n,e,l,t);break e}}throw n=Ae(e)||e,Error(s(306,n,""))}}return n;case 0:return Fc(e,n,n.type,n.pendingProps,t);case 1:return l=n.type,r=Hr(l,n.pendingProps),sm(e,n,l,r,t);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(s(387));l=n.pendingProps;var a=n.memoizedState;r=a.element,xc(e,n),_i(n,l,null,t);var m=n.memoizedState;if(l=m.cache,$l(n,mn,l),l!==a.cache&&pc(n,[mn],t,!0),pi(),l=m.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){n=om(e,n,l,t);break e}else if(l!==r){r=St(Error(s(424)),n),ci(r),n=om(e,n,l,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Rt(e.firstChild),An=n,Oe=!0,Yl=null,kt=!0,t=ld(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ar(),l===r){n=gl(e,n,t);break e}On(e,n,l,t)}n=n.child}return n;case 26:return qs(e,n),e===null?(t=wh(n.type,null,n.pendingProps,null))?n.memoizedState=t:Oe||(t=n.type,e=n.pendingProps,l=io(P.current).createElement(t),l[rn]=n,l[an]=e,Cn(l,t,e),Je(l),n.stateNode=l):n.memoizedState=wh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ln(n),e===null&&Oe&&(l=n.stateNode=vh(n.type,n.pendingProps,P.current),An=n,kt=!0,r=Ze,lr(n.type)?(Cu=r,Ze=Rt(l.firstChild)):Ze=r),On(e,n,n.pendingProps.children,t),qs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Oe&&((r=l=Ze)&&(l=og(l,n.type,n.pendingProps,kt),l!==null?(n.stateNode=l,An=n,Ze=Rt(l.firstChild),kt=!1,r=!0):r=!1),r||ql(n)),Ln(n),r=n.type,a=n.pendingProps,m=e!==null?e.memoizedProps:null,l=a.children,Mu(r,a)?l=null:m!==null&&Mu(r,m)&&(n.flags|=32),n.memoizedState!==null&&(r=Tc(e,n,w_,null,null,t),Bi._currentValue=r),qs(e,n),On(e,n,l,t),n.child;case 6:return e===null&&Oe&&((e=t=Ze)&&(t=cg(t,n.pendingProps,kt),t!==null?(n.stateNode=t,An=n,Ze=null,e=!0):e=!1),e||ql(n)),null;case 13:return cm(e,n,t);case 4:return He(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Lr(n,null,l,t):On(e,n,l,t),n.child;case 11:return em(e,n,n.type,n.pendingProps,t);case 7:return On(e,n,n.pendingProps,t),n.child;case 8:return On(e,n,n.pendingProps.children,t),n.child;case 12:return On(e,n,n.pendingProps.children,t),n.child;case 10:return l=n.pendingProps,$l(n,n.type,l.value),On(e,n,l.children,t),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Or(n),r=Dn(r),l=l(r),n.flags|=1,On(e,n,l,t),n.child;case 14:return nm(e,n,n.type,n.pendingProps,t);case 15:return tm(e,n,n.type,n.pendingProps,t);case 19:return fm(e,n,t);case 31:return A_(e,n,t);case 22:return lm(e,n,t,n.pendingProps);case 24:return Or(n),l=Dn(mn),e===null?(r=bc(),r===null&&(r=Fe,a=_c(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=t),r=a),n.memoizedState={parent:l,cache:r},vc(n),$l(n,mn,r)):((e.lanes&t)!==0&&(xc(e,n),_i(n,null,null,t),pi()),r=e.memoizedState,a=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),$l(n,mn,l)):(l=a.cache,$l(n,mn,l),l!==r.cache&&pc(n,[mn],t,!0))),On(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function bl(e){e.flags|=4}function tu(e,n,t,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Hm())e.flags|=8192;else throw Br=Ts,yc}else e.flags&=-16777217}function mm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Th(n))if(Hm())e.flags|=8192;else throw Br=Ts,yc}function Xs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ka():536870912,e.lanes|=n,Na|=n)}function Si(e,n){if(!Oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function O_(e,n,t){var l=n.pendingProps;switch(uc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return t=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),hl(mn),Ce(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ma(n)?bl(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dc())),We(n),null;case 26:var r=n.type,a=n.memoizedState;return e===null?(bl(n),a!==null?(We(n),mm(n,a)):(We(n),tu(n,r,null,l,t))):a?a!==e.memoizedState?(bl(n),We(n),mm(n,a)):(We(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&bl(n),We(n),tu(n,r,e,l,t)),null;case 27:if(Vt(n),t=P.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&bl(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return We(n),null}e=A.current,ma(n)?Kf(n):(e=vh(r,l,t),n.stateNode=e,bl(n))}return We(n),null;case 5:if(Vt(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&bl(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(a=A.current,ma(n))Kf(n);else{var m=io(P.current);switch(a){case 1:a=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:a=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":a=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":a=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":a=m.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is=="string"?m.createElement(r,{is:l.is}):m.createElement(r)}}a[rn]=n,a[an]=l;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)a.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=a;e:switch(Cn(a,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&bl(n)}}return We(n),tu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&bl(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(e=P.current,ma(n)){if(e=n.stateNode,t=n.memoizedProps,l=null,r=An,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[rn]=n,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||ch(e.nodeValue,t)),e||ql(n,!0)}else e=io(e).createTextNode(l),e[rn]=n,n.stateNode=e}return We(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(l=ma(n),t!==null){if(e===null){if(!l)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),e=!1}else t=dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(ot(n),n):(ot(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ma(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[rn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),r=!1}else r=dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(ot(n),n):(ot(n),null)}return ot(n),(n.flags&128)!==0?(n.lanes=t,n):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==r&&(l.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Xs(n,n.updateQueue),We(n),null);case 4:return Ce(),e===null&&Eu(n.stateNode.containerInfo),We(n),null;case 10:return hl(n.type),We(n),null;case 19:if(L(cn),l=n.memoizedState,l===null)return We(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)Si(l,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=Ds(e),a!==null){for(n.flags|=128,Si(l,!1),e=a.updateQueue,n.updateQueue=e,Xs(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Vf(t,e),t=t.sibling;return Z(cn,cn.current&1|2),Oe&&dl(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&bn()>Qs&&(n.flags|=128,r=!0,Si(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ds(a),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Xs(n,e),Si(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!Oe)return We(n),null}else 2*bn()-l.renderingStartTime>Qs&&t!==536870912&&(n.flags|=128,r=!0,Si(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(e=l.last,e!==null?e.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=bn(),e.sibling=null,t=cn.current,Z(cn,r?t&1|2:t&1),Oe&&dl(n,l.treeForkCount),e):(We(n),null);case 22:case 23:return ot(n),kc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(t&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),t=n.updateQueue,t!==null&&Xs(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==t&&(n.flags|=2048),e!==null&&L(Cr),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),hl(mn),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function C_(e,n){switch(uc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return hl(mn),Ce(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Vt(n),null;case 31:if(n.memoizedState!==null){if(ot(n),n.alternate===null)throw Error(s(340));Ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ot(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(cn),null;case 4:return Ce(),null;case 10:return hl(n.type),null;case 22:case 23:return ot(n),kc(),e!==null&&L(Cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return hl(mn),null;case 25:return null;default:return null}}function hm(e,n){switch(uc(n),n.tag){case 3:hl(mn),Ce();break;case 26:case 27:case 5:Vt(n);break;case 4:Ce();break;case 31:n.memoizedState!==null&&ot(n);break;case 13:ot(n);break;case 19:L(cn);break;case 10:hl(n.type);break;case 22:case 23:ot(n),kc(),e!==null&&L(Cr);break;case 24:hl(mn)}}function wi(e,n){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&e)===e){l=void 0;var a=t.create,m=t.inst;l=a(),m.destroy=l}t=t.next}while(t!==r)}}catch(_){qe(n,n.return,_)}}function Ql(e,n,t){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var a=r.next;l=a;do{if((l.tag&e)===e){var m=l.inst,_=m.destroy;if(_!==void 0){m.destroy=void 0,r=n;var w=t,M=_;try{M()}catch(H){qe(r,w,H)}}}l=l.next}while(l!==a)}}catch(H){qe(n,n.return,H)}}function pm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{ad(n,t)}catch(l){qe(e,e.return,l)}}}function _m(e,n,t){t.props=Hr(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){qe(e,n,l)}}function Ei(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){qe(e,n,r)}}function Zt(e,n){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){qe(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){qe(e,n,r)}else t.current=null}function gm(e){var n=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){qe(e,e.return,r)}}function lu(e,n,t){try{var l=e.stateNode;tg(l,e.type,t,n),l[an]=n}catch(r){qe(e,e.return,r)}}function bm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&lr(e.type)||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&lr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function au(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Kn));else if(l!==4&&(l===27&&lr(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(au(e,n,t),e=e.sibling;e!==null;)au(e,n,t),e=e.sibling}function Ks(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(l===27&&lr(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ks(e,n,t),e=e.sibling;e!==null;)Ks(e,n,t),e=e.sibling}function ym(e){var n=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Cn(n,l,t),n[rn]=e,n[an]=t}catch(a){qe(e,e.return,a)}}var yl=!1,_n=!1,iu=!1,vm=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function z_(e,n){if(e=e.containerInfo,Ru=ho,e=Df(e),Jo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var r=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var m=0,_=-1,w=-1,M=0,H=0,Y=e,D=null;n:for(;;){for(var B;Y!==t||r!==0&&Y.nodeType!==3||(_=m+r),Y!==a||l!==0&&Y.nodeType!==3||(w=m+l),Y.nodeType===3&&(m+=Y.nodeValue.length),(B=Y.firstChild)!==null;)D=Y,Y=B;for(;;){if(Y===e)break n;if(D===t&&++M===r&&(_=m),D===a&&++H===l&&(w=m),(B=Y.nextSibling)!==null)break;Y=D,D=Y.parentNode}Y=B}t=_===-1||w===-1?null:{start:_,end:w}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tu={focusedElem:e,selectionRange:t},ho=!1,Nn=n;Nn!==null;)if(n=Nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Nn=e;else for(;Nn!==null;){switch(n=Nn,a=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,t=n,r=a.memoizedProps,a=a.memoizedState,l=t.stateNode;try{var ie=Hr(t.type,r);e=l.getSnapshotBeforeUpdate(ie,a),l.__reactInternalSnapshotBeforeUpdate=e}catch(pe){qe(t,t.return,pe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Au(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Au(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Nn=e;break}Nn=n.return}}function xm(e,n,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t),l&4&&wi(5,t);break;case 1:if(xl(e,t),l&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){qe(t,t.return,m)}else{var r=Hr(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){qe(t,t.return,m)}}l&64&&pm(t),l&512&&Ei(t,t.return);break;case 3:if(xl(e,t),l&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{ad(e,n)}catch(m){qe(t,t.return,m)}}break;case 27:n===null&&l&4&&ym(t);case 26:case 5:xl(e,t),n===null&&l&4&&gm(t),l&512&&Ei(t,t.return);break;case 12:xl(e,t);break;case 31:xl(e,t),l&4&&Em(e,t);break;case 13:xl(e,t),l&4&&km(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=$_.bind(null,t),ug(e,t))));break;case 22:if(l=t.memoizedState!==null||yl,!l){n=n!==null&&n.memoizedState!==null||_n,r=yl;var a=_n;yl=l,(_n=n)&&!a?Sl(e,t,(t.subtreeFlags&8772)!==0):xl(e,t),yl=r,_n=a}break;case 30:break;default:xl(e,t)}}function Sm(e){var n=e.alternate;n!==null&&(e.alternate=null,Sm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&nl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,In=!1;function vl(e,n,t){for(t=t.child;t!==null;)wm(e,n,t),t=t.sibling}function wm(e,n,t){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(mr,t)}catch{}switch(t.tag){case 26:_n||Zt(t,n),vl(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:_n||Zt(t,n);var l=en,r=In;lr(t.type)&&(en=t.stateNode,In=!1),vl(e,n,t),Oi(t.stateNode),en=l,In=r;break;case 5:_n||Zt(t,n);case 6:if(l=en,r=In,en=null,vl(e,n,t),en=l,In=r,en!==null)if(In)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(t.stateNode)}catch(a){qe(t,n,a)}else try{en.removeChild(t.stateNode)}catch(a){qe(t,n,a)}break;case 18:en!==null&&(In?(e=en,ph(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ca(e)):ph(en,t.stateNode));break;case 4:l=en,r=In,en=t.stateNode.containerInfo,In=!0,vl(e,n,t),en=l,In=r;break;case 0:case 11:case 14:case 15:Ql(2,t,n),_n||Ql(4,t,n),vl(e,n,t);break;case 1:_n||(Zt(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"&&_m(t,n,l)),vl(e,n,t);break;case 21:vl(e,n,t);break;case 22:_n=(l=_n)||t.memoizedState!==null,vl(e,n,t),_n=l;break;default:vl(e,n,t)}}function Em(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ca(e)}catch(t){qe(n,n.return,t)}}}function km(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ca(e)}catch(t){qe(n,n.return,t)}}function B_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new vm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new vm),n;default:throw Error(s(435,e.tag))}}function Is(e,n){var t=B_(e);n.forEach(function(l){if(!t.has(l)){t.add(l);var r=X_.bind(null,e,l);l.then(r,r)}})}function Fn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l],a=e,m=n,_=m;e:for(;_!==null;){switch(_.tag){case 27:if(lr(_.type)){en=_.stateNode,In=!1;break e}break;case 5:en=_.stateNode,In=!1;break e;case 3:case 4:en=_.stateNode.containerInfo,In=!0;break e}_=_.return}if(en===null)throw Error(s(160));wm(a,m,r),en=null,In=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nm(n,e),n=n.sibling}var Ht=null;function Nm(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),Pn(e),l&4&&(Ql(3,e,e.return),wi(3,e),Ql(5,e,e.return));break;case 1:Fn(n,e),Pn(e),l&512&&(_n||t===null||Zt(t,t.return)),l&64&&yl&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var r=Ht;if(Fn(n,e),Pn(e),l&512&&(_n||t===null||Zt(t,t.return)),l&4){var a=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,r=r.ownerDocument||r;n:switch(l){case"title":a=r.getElementsByTagName("title")[0],(!a||a[$n]||a[rn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(l),r.head.insertBefore(a,r.querySelector("head > title"))),Cn(a,l,t),a[rn]=e,Je(a),l=a;break e;case"link":var m=Nh("link","href",r).get(l+(t.href||""));if(m){for(var _=0;_<m.length;_++)if(a=m[_],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(_,1);break n}}a=r.createElement(l),Cn(a,l,t),r.head.appendChild(a);break;case"meta":if(m=Nh("meta","content",r).get(l+(t.content||""))){for(_=0;_<m.length;_++)if(a=m[_],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(_,1);break n}}a=r.createElement(l),Cn(a,l,t),r.head.appendChild(a);break;default:throw Error(s(468,l))}a[rn]=e,Je(a),l=a}e.stateNode=l}else Rh(r,e.type,e.stateNode);else e.stateNode=kh(r,l,e.memoizedProps);else a!==l?(a===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):a.count--,l===null?Rh(r,e.type,e.stateNode):kh(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&lu(e,e.memoizedProps,t.memoizedProps)}break;case 27:Fn(n,e),Pn(e),l&512&&(_n||t===null||Zt(t,t.return)),t!==null&&l&4&&lu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Fn(n,e),Pn(e),l&512&&(_n||t===null||Zt(t,t.return)),e.flags&32){r=e.stateNode;try{sn(r,"")}catch(ie){qe(e,e.return,ie)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,lu(e,r,t!==null?t.memoizedProps:r)),l&1024&&(iu=!0);break;case 6:if(Fn(n,e),Pn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(ie){qe(e,e.return,ie)}}break;case 3:if(co=null,r=Ht,Ht=so(n.containerInfo),Fn(n,e),Ht=r,Pn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ca(n.containerInfo)}catch(ie){qe(e,e.return,ie)}iu&&(iu=!1,Rm(e));break;case 4:l=Ht,Ht=so(e.stateNode.containerInfo),Fn(n,e),Pn(e),Ht=l;break;case 12:Fn(n,e),Pn(e);break;case 31:Fn(n,e),Pn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Is(e,l)));break;case 13:Fn(n,e),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ps=bn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Is(e,l)));break;case 22:r=e.memoizedState!==null;var w=t!==null&&t.memoizedState!==null,M=yl,H=_n;if(yl=M||r,_n=H||w,Fn(n,e),_n=H,yl=M,Pn(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(t===null||w||yl||_n||Gr(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){w=t=n;try{if(a=w.stateNode,r)m=a.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{_=w.stateNode;var Y=w.memoizedProps.style,D=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;_.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(ie){qe(w,w.return,ie)}}}else if(n.tag===6){if(t===null){w=n;try{w.stateNode.nodeValue=r?"":w.memoizedProps}catch(ie){qe(w,w.return,ie)}}}else if(n.tag===18){if(t===null){w=n;try{var B=w.stateNode;r?_h(B,!0):_h(w.stateNode,!1)}catch(ie){qe(w,w.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Is(e,t))));break;case 19:Fn(n,e),Pn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Is(e,l)));break;case 30:break;case 21:break;default:Fn(n,e),Pn(e)}}function Pn(e){var n=e.flags;if(n&2){try{for(var t,l=e.return;l!==null;){if(bm(l)){t=l;break}l=l.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var r=t.stateNode,a=ru(e);Ks(e,a,r);break;case 5:var m=t.stateNode;t.flags&32&&(sn(m,""),t.flags&=-33);var _=ru(e);Ks(e,_,m);break;case 3:case 4:var w=t.stateNode.containerInfo,M=ru(e);au(e,M,w);break;default:throw Error(s(161))}}catch(H){qe(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Rm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xl(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xm(e,n.alternate,n),n=n.sibling}function Gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ql(4,n,n.return),Gr(n);break;case 1:Zt(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&_m(n,n.return,t),Gr(n);break;case 27:Oi(n.stateNode);case 26:case 5:Zt(n,n.return),Gr(n);break;case 22:n.memoizedState===null&&Gr(n);break;case 30:Gr(n);break;default:Gr(n)}e=e.sibling}}function Sl(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,a=n,m=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(r,a,t),wi(4,a);break;case 1:if(Sl(r,a,t),l=a,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(M){qe(l,l.return,M)}if(l=a,r=l.updateQueue,r!==null){var _=l.stateNode;try{var w=r.shared.hiddenCallbacks;if(w!==null)for(r.shared.hiddenCallbacks=null,r=0;r<w.length;r++)rd(w[r],_)}catch(M){qe(l,l.return,M)}}t&&m&64&&pm(a),Ei(a,a.return);break;case 27:ym(a);case 26:case 5:Sl(r,a,t),t&&l===null&&m&4&&gm(a),Ei(a,a.return);break;case 12:Sl(r,a,t);break;case 31:Sl(r,a,t),t&&m&4&&Em(r,a);break;case 13:Sl(r,a,t),t&&m&4&&km(r,a);break;case 22:a.memoizedState===null&&Sl(r,a,t),Ei(a,a.return);break;case 30:break;default:Sl(r,a,t)}n=n.sibling}}function su(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ui(t))}function ou(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ui(e))}function Gt(e,n,t,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tm(e,n,t,l),n=n.sibling}function Tm(e,n,t,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Gt(e,n,t,l),r&2048&&wi(9,n);break;case 1:Gt(e,n,t,l);break;case 3:Gt(e,n,t,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ui(e)));break;case 12:if(r&2048){Gt(e,n,t,l),e=n.stateNode;try{var a=n.memoizedProps,m=a.id,_=a.onPostCommit;typeof _=="function"&&_(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){qe(n,n.return,w)}}else Gt(e,n,t,l);break;case 31:Gt(e,n,t,l);break;case 13:Gt(e,n,t,l);break;case 23:break;case 22:a=n.stateNode,m=n.alternate,n.memoizedState!==null?a._visibility&2?Gt(e,n,t,l):ki(e,n):a._visibility&2?Gt(e,n,t,l):(a._visibility|=2,wa(e,n,t,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&su(m,n);break;case 24:Gt(e,n,t,l),r&2048&&ou(n.alternate,n);break;default:Gt(e,n,t,l)}}function wa(e,n,t,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var a=e,m=n,_=t,w=l,M=m.flags;switch(m.tag){case 0:case 11:case 15:wa(a,m,_,w,r),wi(8,m);break;case 23:break;case 22:var H=m.stateNode;m.memoizedState!==null?H._visibility&2?wa(a,m,_,w,r):ki(a,m):(H._visibility|=2,wa(a,m,_,w,r)),r&&M&2048&&su(m.alternate,m);break;case 24:wa(a,m,_,w,r),r&&M&2048&&ou(m.alternate,m);break;default:wa(a,m,_,w,r)}n=n.sibling}}function ki(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,l=n,r=l.flags;switch(l.tag){case 22:ki(t,l),r&2048&&su(l.alternate,l);break;case 24:ki(t,l),r&2048&&ou(l.alternate,l);break;default:ki(t,l)}n=n.sibling}}var Ni=8192;function Ea(e,n,t){if(e.subtreeFlags&Ni)for(e=e.child;e!==null;)Mm(e,n,t),e=e.sibling}function Mm(e,n,t){switch(e.tag){case 26:Ea(e,n,t),e.flags&Ni&&e.memoizedState!==null&&Sg(t,Ht,e.memoizedState,e.memoizedProps);break;case 5:Ea(e,n,t);break;case 3:case 4:var l=Ht;Ht=so(e.stateNode.containerInfo),Ea(e,n,t),Ht=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ni,Ni=16777216,Ea(e,n,t),Ni=l):Ea(e,n,t));break;default:Ea(e,n,t)}}function jm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ri(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];Nn=l,Dm(l,e)}jm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 0:case 11:case 15:Ri(e),e.flags&2048&&Ql(9,e,e.return);break;case 3:Ri(e);break;case 12:Ri(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fs(e)):Ri(e);break;default:Ri(e)}}function Fs(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];Nn=l,Dm(l,e)}jm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ql(8,n,n.return),Fs(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Fs(n));break;default:Fs(n)}e=e.sibling}}function Dm(e,n){for(;Nn!==null;){var t=Nn;switch(t.tag){case 0:case 11:case 15:Ql(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ui(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Nn=l;else e:for(t=e;Nn!==null;){l=Nn;var r=l.sibling,a=l.return;if(Sm(l),l===t){Nn=null;break e}if(r!==null){r.return=a,Nn=r;break e}Nn=a}}}var L_={getCacheForType:function(e){var n=Dn(mn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Dn(mn).controller.signal}},U_=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Fe=null,Re=null,Me=0,Ye=0,ct=null,Zl=!1,ka=!1,cu=!1,wl=0,ln=0,Wl=0,Vr=0,uu=0,ut=0,Na=0,Ti=null,Qn=null,fu=!1,Ps=0,Om=0,Qs=1/0,Zs=null,Jl=null,Sn=0,er=null,Ra=null,El=0,du=0,mu=null,Cm=null,Mi=0,hu=null;function ft(){return(Ge&2)!==0&&Me!==0?Me&-Me:O.T!==null?vu():dn()}function zm(){if(ut===0)if((Me&536870912)===0||Oe){var e=Un;Un<<=1,(Un&3932160)===0&&(Un=262144),ut=e}else ut=536870912;return e=st.current,e!==null&&(e.flags|=32),ut}function Zn(e,n,t){(e===Fe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Ta(e,0),nr(e,Me,ut,!1)),hr(e,t),((Ge&2)===0||e!==Fe)&&(e===Fe&&((Ge&2)===0&&(Vr|=t),ln===4&&nr(e,Me,ut,!1)),Wt(e))}function Bm(e,n,t){if((Ge&6)!==0)throw Error(s(327));var l=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Hn(e,n),r=l?V_(e,n):_u(e,n,!0),a=l;do{if(r===0){ka&&!l&&nr(e,n,0,!1);break}else{if(t=e.current.alternate,a&&!H_(t)){r=_u(e,n,!1),a=!1;continue}if(r===2){if(a=n,e.errorRecoveryDisabledLanes&a)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var _=e;r=Ti;var w=_.current.memoizedState.isDehydrated;if(w&&(Ta(_,m).flags|=256),m=_u(_,m,!1),m!==2){if(cu&&!w){_.errorRecoveryDisabledLanes|=a,Vr|=a,r=4;break e}a=Qn,Qn=r,a!==null&&(Qn===null?Qn=a:Qn.push.apply(Qn,a))}r=m}if(a=!1,r!==2)continue}}if(r===1){Ta(e,0),nr(e,n,0,!0);break}e:{switch(l=e,a=r,a){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:nr(l,n,ut,!Zl);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(r=Ps+300-bn(),10<r)){if(nr(l,n,ut,!Zl),fn(l,0,!0)!==0)break e;El=n,l.timeoutHandle=mh(Lm.bind(null,l,t,Qn,Zs,fu,n,ut,Vr,Na,Zl,a,"Throttled",-0,0),r);break e}Lm(l,t,Qn,Zs,fu,n,ut,Vr,Na,Zl,a,null,-0,0)}}break}while(!0);Wt(e)}function Lm(e,n,t,l,r,a,m,_,w,M,H,Y,D,B){if(e.timeoutHandle=-1,Y=n.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kn},Mm(n,a,Y);var ie=(a&62914560)===a?Ps-bn():(a&4194048)===a?Om-bn():0;if(ie=wg(Y,ie),ie!==null){El=a,e.cancelPendingCommit=ie(Xm.bind(null,e,n,a,t,l,r,m,_,w,H,Y,null,D,B)),nr(e,a,m,!M);return}}Xm(e,n,a,t,l,r,m,_,w)}function H_(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],a=r.getSnapshot;r=r.value;try{if(!at(a(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nr(e,n,t,l){n&=~uu,n&=~Vr,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var a=31-Rn(r),m=1<<a;l[a]=-1,r&=~m}t!==0&&Ji(e,t,n)}function Ws(){return(Ge&6)===0?(ji(0),!1):!0}function pu(){if(Re!==null){if(Ye===0)var e=Re.return;else e=Re,ml=Dr=null,Ac(e),ba=null,di=0,e=Re;for(;e!==null;)hm(e.alternate,e),e=e.return;Re=null}}function Ta(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,ag(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),El=0,pu(),Fe=e,Re=t=fl(e.current,null),Me=n,Ye=0,ct=null,Zl=!1,ka=Hn(e,n),cu=!1,Na=ut=uu=Vr=Wl=ln=0,Qn=Ti=null,fu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-Rn(l),a=1<<r;n|=e[r],l&=~a}return wl=n,ys(),t}function Um(e,n){we=null,O.H=vi,n===ga||n===Rs?(n=ed(),Ye=3):n===yc?(n=ed(),Ye=4):Ye=n===Ic?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ct=n,Re===null&&(ln=1,Vs(e,St(n,e.current)))}function Hm(){var e=st.current;return e===null?!0:(Me&4194048)===Me?Nt===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Nt:!1}function Gm(){var e=O.H;return O.H=vi,e===null?vi:e}function Vm(){var e=O.A;return O.A=L_,e}function Js(){ln=4,Zl||(Me&4194048)!==Me&&st.current!==null||(ka=!0),(Wl&134217727)===0&&(Vr&134217727)===0||Fe===null||nr(Fe,Me,ut,!1)}function _u(e,n,t){var l=Ge;Ge|=2;var r=Gm(),a=Vm();(Fe!==e||Me!==n)&&(Zs=null,Ta(e,n)),n=!1;var m=ln;e:do try{if(Ye!==0&&Re!==null){var _=Re,w=ct;switch(Ye){case 8:pu(),m=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(n=!0);var M=Ye;if(Ye=0,ct=null,Ma(e,_,w,M),t&&ka){m=0;break e}break;default:M=Ye,Ye=0,ct=null,Ma(e,_,w,M)}}G_(),m=ln;break}catch(H){Um(e,H)}while(!0);return n&&e.shellSuspendCounter++,ml=Dr=null,Ge=l,O.H=r,O.A=a,Re===null&&(Fe=null,Me=0,ys()),m}function G_(){for(;Re!==null;)Ym(Re)}function V_(e,n){var t=Ge;Ge|=2;var l=Gm(),r=Vm();Fe!==e||Me!==n?(Zs=null,Qs=bn()+500,Ta(e,n)):ka=Hn(e,n);e:do try{if(Ye!==0&&Re!==null){n=Re;var a=ct;n:switch(Ye){case 1:Ye=0,ct=null,Ma(e,n,a,1);break;case 2:case 9:if(Wf(a)){Ye=0,ct=null,qm(n);break}n=function(){Ye!==2&&Ye!==9||Fe!==e||(Ye=7),Wt(e)},a.then(n,n);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Wf(a)?(Ye=0,ct=null,qm(n)):(Ye=0,ct=null,Ma(e,n,a,7));break;case 5:var m=null;switch(Re.tag){case 26:m=Re.memoizedState;case 5:case 27:var _=Re;if(m?Th(m):_.stateNode.complete){Ye=0,ct=null;var w=_.sibling;if(w!==null)Re=w;else{var M=_.return;M!==null?(Re=M,eo(M)):Re=null}break n}}Ye=0,ct=null,Ma(e,n,a,5);break;case 6:Ye=0,ct=null,Ma(e,n,a,6);break;case 8:pu(),ln=6;break e;default:throw Error(s(462))}}Y_();break}catch(H){Um(e,H)}while(!0);return ml=Dr=null,O.H=l,O.A=r,Ge=t,Re!==null?0:(Fe=null,Me=0,ys(),ln)}function Y_(){for(;Re!==null&&!Xr();)Ym(Re)}function Ym(e){var n=dm(e.alternate,e,wl);e.memoizedProps=e.pendingProps,n===null?eo(e):Re=n}function qm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=im(t,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=im(t,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Ac(n);default:hm(t,n),n=Re=Vf(n,wl),n=dm(t,n,wl)}e.memoizedProps=e.pendingProps,n===null?eo(e):Re=n}function Ma(e,n,t,l){ml=Dr=null,Ac(n),ba=null,di=0;var r=n.return;try{if(j_(e,r,n,t,Me)){ln=1,Vs(e,St(t,e.current)),Re=null;return}}catch(a){if(r!==null)throw Re=r,a;ln=1,Vs(e,St(t,e.current)),Re=null;return}n.flags&32768?(Oe||l===1?e=!0:ka||(Me&536870912)!==0?e=!1:(Zl=e=!0,(l===2||l===9||l===3||l===6)&&(l=st.current,l!==null&&l.tag===13&&(l.flags|=16384))),$m(n,e)):eo(n)}function eo(e){var n=e;do{if((n.flags&32768)!==0){$m(n,Zl);return}e=n.return;var t=O_(n.alternate,n,wl);if(t!==null){Re=t;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);ln===0&&(ln=5)}function $m(e,n){do{var t=C_(e.alternate,e);if(t!==null){t.flags&=32767,Re=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=t}while(e!==null);ln=6,Re=null}function Xm(e,n,t,l,r,a,m,_,w){e.cancelPendingCommit=null;do no();while(Sn!==0);if((Ge&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(a=n.lanes|n.childLanes,a|=rc,el(e,t,a,m,_,w),e===Fe&&(Re=Fe=null,Me=0),Ra=n,er=e,El=t,du=a,mu=r,Cm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,K_(dr,function(){return Qm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,r=Q.p,Q.p=2,m=Ge,Ge|=4;try{z_(e,n,t)}finally{Ge=m,Q.p=r,O.T=l}}Sn=1,Km(),Im(),Fm()}}function Km(){if(Sn===1){Sn=0;var e=er,n=Ra,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=O.T,O.T=null;var l=Q.p;Q.p=2;var r=Ge;Ge|=4;try{Nm(n,e);var a=Tu,m=Df(e.containerInfo),_=a.focusedElem,w=a.selectionRange;if(m!==_&&_&&_.ownerDocument&&Af(_.ownerDocument.documentElement,_)){if(w!==null&&Jo(_)){var M=w.start,H=w.end;if(H===void 0&&(H=M),"selectionStart"in _)_.selectionStart=M,_.selectionEnd=Math.min(H,_.value.length);else{var Y=_.ownerDocument||document,D=Y&&Y.defaultView||window;if(D.getSelection){var B=D.getSelection(),ie=_.textContent.length,pe=Math.min(w.start,ie),Ke=w.end===void 0?pe:Math.min(w.end,ie);!B.extend&&pe>Ke&&(m=Ke,Ke=pe,pe=m);var R=jf(_,pe),k=jf(_,Ke);if(R&&k&&(B.rangeCount!==1||B.anchorNode!==R.node||B.anchorOffset!==R.offset||B.focusNode!==k.node||B.focusOffset!==k.offset)){var T=Y.createRange();T.setStart(R.node,R.offset),B.removeAllRanges(),pe>Ke?(B.addRange(T),B.extend(k.node,k.offset)):(T.setEnd(k.node,k.offset),B.addRange(T))}}}}for(Y=[],B=_;B=B.parentNode;)B.nodeType===1&&Y.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<Y.length;_++){var V=Y[_];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}ho=!!Ru,Tu=Ru=null}finally{Ge=r,Q.p=l,O.T=t}}e.current=n,Sn=2}}function Im(){if(Sn===2){Sn=0;var e=er,n=Ra,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=O.T,O.T=null;var l=Q.p;Q.p=2;var r=Ge;Ge|=4;try{xm(e,n.alternate,n)}finally{Ge=r,Q.p=l,O.T=t}}Sn=3}}function Fm(){if(Sn===4||Sn===3){Sn=0,jl();var e=er,n=Ra,t=El,l=Cm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Ra=er=null,Pm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Jl=null),gt(t),n=n.stateNode,yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(mr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,r=Q.p,Q.p=2,O.T=null;try{for(var a=e.onRecoverableError,m=0;m<l.length;m++){var _=l[m];a(_.value,{componentStack:_.stack})}}finally{O.T=n,Q.p=r}}(El&3)!==0&&no(),Wt(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===hu?Mi++:(Mi=0,hu=e):Mi=0,ji(0)}}function Pm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ui(n)))}function no(){return Km(),Im(),Fm(),Qm()}function Qm(){if(Sn!==5)return!1;var e=er,n=du;du=0;var t=gt(El),l=O.T,r=Q.p;try{Q.p=32>t?32:t,O.T=null,t=mu,mu=null;var a=er,m=El;if(Sn=0,Ra=er=null,El=0,(Ge&6)!==0)throw Error(s(331));var _=Ge;if(Ge|=4,Am(a.current),Tm(a,a.current,m,t),Ge=_,ji(0,!1),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(mr,a)}catch{}return!0}finally{Q.p=r,O.T=l,Pm(e,n)}}function Zm(e,n,t){n=St(t,n),n=Kc(e.stateNode,n,2),e=Il(e,n,2),e!==null&&(hr(e,2),Wt(e))}function qe(e,n,t){if(e.tag===3)Zm(e,e,t);else for(;n!==null;){if(n.tag===3){Zm(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Jl===null||!Jl.has(l))){e=St(t,e),t=Wd(2),l=Il(n,t,2),l!==null&&(Jd(t,l,n,e),hr(l,2),Wt(l));break}}n=n.return}}function gu(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new U_;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(t)||(cu=!0,r.add(t),e=q_.bind(null,e,n,t),n.then(e,e))}function q_(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Fe===e&&(Me&t)===t&&(ln===4||ln===3&&(Me&62914560)===Me&&300>bn()-Ps?(Ge&2)===0&&Ta(e,0):uu|=t,Na===Me&&(Na=0)),Wt(e)}function Wm(e,n){n===0&&(n=Ka()),e=Mr(e,n),e!==null&&(hr(e,n),Wt(e))}function $_(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Wm(e,t)}function X_(e,n){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),Wm(e,t)}function K_(e,n){return Ml(e,n)}var to=null,ja=null,bu=!1,lo=!1,yu=!1,tr=0;function Wt(e){e!==ja&&e.next===null&&(ja===null?to=ja=e:ja=ja.next=e),lo=!0,bu||(bu=!0,F_())}function ji(e,n){if(!yu&&lo){yu=!0;do for(var t=!1,l=to;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var a=0;else{var m=l.suspendedLanes,_=l.pingedLanes;a=(1<<31-Rn(42|e)+1)-1,a&=r&~(m&~_),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(t=!0,th(l,a))}else a=Me,a=fn(l,l===Fe?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(a&3)===0||Hn(l,a)||(t=!0,th(l,a));l=l.next}while(t);yu=!1}}function I_(){Jm()}function Jm(){lo=bu=!1;var e=0;tr!==0&&rg()&&(e=tr);for(var n=bn(),t=null,l=to;l!==null;){var r=l.next,a=eh(l,n);a===0?(l.next=null,t===null?to=r:t.next=r,r===null&&(ja=t)):(t=l,(e!==0||(a&3)!==0)&&(lo=!0)),l=r}Sn!==0&&Sn!==5||ji(e),tr!==0&&(tr=0)}function eh(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var m=31-Rn(a),_=1<<m,w=r[m];w===-1?((_&t)===0||(_&l)!==0)&&(r[m]=Oo(_,n)):w<=n&&(e.expiredLanes|=_),a&=~_}if(n=Fe,t=Me,t=fn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===n&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&pt(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Hn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(l!==null&&pt(l),gt(t)){case 2:case 8:t=Xa;break;case 32:t=dr;break;case 268435456:t=_t;break;default:t=dr}return l=nh.bind(null,e),t=Ml(t,l),e.callbackPriority=n,e.callbackNode=t,n}return l!==null&&l!==null&&pt(l),e.callbackPriority=2,e.callbackNode=null,2}function nh(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(no()&&e.callbackNode!==t)return null;var l=Me;return l=fn(e,e===Fe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Bm(e,l,n),eh(e,bn()),e.callbackNode!=null&&e.callbackNode===t?nh.bind(null,e):null)}function th(e,n){if(no())return null;Bm(e,n,!0)}function F_(){ig(function(){(Ge&6)!==0?Ml(Kr,I_):Jm()})}function vu(){if(tr===0){var e=pa;e===0&&(e=Yt,Yt<<=1,(Yt&261888)===0&&(Yt=256)),tr=e}return tr}function lh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function rh(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function P_(e,n,t,l,r){if(n==="submit"&&t&&t.stateNode===r){var a=lh((r[an]||null).action),m=l.submitter;m&&(n=(n=m[an]||null)?lh(n.formAction):m.getAttribute("formAction"),n!==null&&(a=n,m=null));var _=new vr("action","action",null,l,r);e.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(tr!==0){var w=m?rh(r,m):new FormData(r);Gc(t,{pending:!0,data:w,method:r.method,action:a},null,w)}}else typeof a=="function"&&(_.preventDefault(),w=m?rh(r,m):new FormData(r),Gc(t,{pending:!0,data:w,method:r.method,action:a},a,w))},currentTarget:r}]})}}for(var xu=0;xu<lc.length;xu++){var Su=lc[xu],Q_=Su.toLowerCase(),Z_=Su[0].toUpperCase()+Su.slice(1);Ut(Q_,"on"+Z_)}Ut(zf,"onAnimationEnd"),Ut(Bf,"onAnimationIteration"),Ut(Lf,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(m_,"onTransitionRun"),Ut(h_,"onTransitionStart"),Ut(p_,"onTransitionCancel"),Ut(Uf,"onTransitionEnd"),zl("onMouseEnter",["mouseout","mouseover"]),zl("onMouseLeave",["mouseout","mouseover"]),zl("onPointerEnter",["pointerout","pointerover"]),zl("onPointerLeave",["pointerout","pointerover"]),Ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai));function ah(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],r=l.event;l=l.listeners;e:{var a=void 0;if(n)for(var m=l.length-1;0<=m;m--){var _=l[m],w=_.instance,M=_.currentTarget;if(_=_.listener,w!==a&&r.isPropagationStopped())break e;a=_,r.currentTarget=M;try{a(r)}catch(H){bs(H)}r.currentTarget=null,a=w}else for(m=0;m<l.length;m++){if(_=l[m],w=_.instance,M=_.currentTarget,_=_.listener,w!==a&&r.isPropagationStopped())break e;a=_,r.currentTarget=M;try{a(r)}catch(H){bs(H)}r.currentTarget=null,a=w}}}}function Te(e,n){var t=n[$t];t===void 0&&(t=n[$t]=new Set);var l=e+"__bubble";t.has(l)||(ih(n,e,2,!1),t.add(l))}function wu(e,n,t){var l=0;n&&(l|=4),ih(t,e,l,n)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Eu(e){if(!e[ro]){e[ro]=!0,ll.forEach(function(t){t!=="selectionchange"&&(W_.has(t)||wu(t,!1,e),wu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ro]||(n[ro]=!0,wu("selectionchange",!1,n))}}function ih(e,n,t,l){switch(zh(n)){case 2:var r=Ng;break;case 8:r=Rg;break;default:r=Hu}t=r.bind(null,n,t,e),r=void 0,!ea||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function ku(e,n,t,l,r){var a=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var _=l.stateNode.containerInfo;if(_===r)break;if(m===4)for(m=l.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;_!==null;){if(m=Xn(_),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){l=a=m;continue e}_=_.parentNode}}l=l.return}Za(function(){var M=a,H=Qa(t),Y=[];e:{var D=Hf.get(e);if(D!==void 0){var B=vr,ie=e;switch(e){case"keypress":if(yr(t)===0)break e;case"keydown":case"keyup":B=Io;break;case"focusin":ie="focus",B=ol;break;case"focusout":ie="blur",B=ol;break;case"beforeblur":case"afterblur":B=ol;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Uo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=hs;break;case zf:case Bf:case Lf:B=Vo;break;case Uf:B=Qo;break;case"scroll":case"scrollend":B=Bo;break;case"wheel":B=wr;break;case"copy":case"cut":case"paste":B=Yo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=li;break;case"toggle":case"beforetoggle":B=ps}var pe=(n&4)!==0,Ke=!pe&&(e==="scroll"||e==="scrollend"),R=pe?D!==null?D+"Capture":null:D;pe=[];for(var k=M,T;k!==null;){var V=k;if(T=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||T===null||R===null||(V=Lt(k,R),V!=null&&pe.push(Di(k,V,T))),Ke)break;k=k.return}0<pe.length&&(D=new B(D,ie,null,t,H),Y.push({event:D,listeners:pe}))}}if((n&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",D&&t!==Jr&&(ie=t.relatedTarget||t.fromElement)&&(Xn(ie)||ie[qn]))break e;if((B||D)&&(D=H.window===H?H:(D=H.ownerDocument)?D.defaultView||D.parentWindow:window,B?(ie=t.relatedTarget||t.toElement,B=M,ie=ie?Xn(ie):null,ie!==null&&(Ke=h(ie),pe=ie.tag,ie!==Ke||pe!==5&&pe!==27&&pe!==6)&&(ie=null)):(B=null,ie=M),B!==ie)){if(pe=cs,V="onMouseLeave",R="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(pe=li,V="onPointerLeave",R="onPointerEnter",k="pointer"),Ke=B==null?D:bt(B),T=ie==null?D:bt(ie),D=new pe(V,k+"leave",B,t,H),D.target=Ke,D.relatedTarget=T,V=null,Xn(H)===M&&(pe=new pe(R,k+"enter",ie,t,H),pe.target=T,pe.relatedTarget=Ke,V=pe),Ke=V,B&&ie)n:{for(pe=J_,R=B,k=ie,T=0,V=R;V;V=pe(V))T++;V=0;for(var me=k;me;me=pe(me))V++;for(;0<T-V;)R=pe(R),T--;for(;0<V-T;)k=pe(k),V--;for(;T--;){if(R===k||k!==null&&R===k.alternate){pe=R;break n}R=pe(R),k=pe(k)}pe=null}else pe=null;B!==null&&sh(Y,D,B,pe,!1),ie!==null&&Ke!==null&&sh(Y,Ke,ie,pe,!0)}}e:{if(D=M?bt(M):window,B=D.nodeName&&D.nodeName.toLowerCase(),B==="select"||B==="input"&&D.type==="file")var Le=ul;else if(lt(D))if(aa)Le=u_;else{Le=o_;var oe=gs}else B=D.nodeName,!B||B.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?M&&il(M.elementType)&&(Le=ul):Le=c_;if(Le&&(Le=Le(e,M))){cl(Y,Le,t,H);break e}oe&&oe(e,D,M),e==="focusout"&&M&&D.type==="number"&&M.memoizedProps.value!=null&&Fa(D,"number",D.value)}switch(oe=M?bt(M):window,e){case"focusin":(lt(oe)||oe.contentEditable==="true")&&(sa=oe,ec=M,si=null);break;case"focusout":si=ec=sa=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Of(Y,t,H);break;case"selectionchange":if(d_)break;case"keydown":case"keyup":Of(Y,t,H)}var ke;if(ra)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else te?C(e,t)&&(je="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(je="onCompositionStart");je&&(d&&t.locale!=="ko"&&(te||je!=="onCompositionStart"?je==="onCompositionEnd"&&te&&(ke=Ja()):(Xt=H,Wa="value"in Xt?Xt.value:Xt.textContent,te=!0)),oe=ao(M,je),0<oe.length&&(je=new ds(je,e,null,t,H),Y.push({event:je,listeners:oe}),ke?je.data=ke:(ke=z(t),ke!==null&&(je.data=ke)))),(ke=Wo?be(e,t):Ve(e,t))&&(je=ao(M,"onBeforeInput"),0<je.length&&(oe=new ds("onBeforeInput","beforeinput",null,t,H),Y.push({event:oe,listeners:je}),oe.data=ke)),P_(Y,e,M,t,H)}ah(Y,n)})}function Di(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ao(e,n){for(var t=n+"Capture",l=[];e!==null;){var r=e,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=Lt(e,t),r!=null&&l.unshift(Di(e,r,a)),r=Lt(e,n),r!=null&&l.push(Di(e,r,a))),e.tag===3)return l;e=e.return}return[]}function J_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sh(e,n,t,l,r){for(var a=n._reactName,m=[];t!==null&&t!==l;){var _=t,w=_.alternate,M=_.stateNode;if(_=_.tag,w!==null&&w===l)break;_!==5&&_!==26&&_!==27||M===null||(w=M,r?(M=Lt(t,a),M!=null&&m.unshift(Di(t,M,w))):r||(M=Lt(t,a),M!=null&&m.push(Di(t,M,w)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var eg=/\r\n?/g,ng=/\u0000|\uFFFD/g;function oh(e){return(typeof e=="string"?e:""+e).replace(eg,`
`).replace(ng,"")}function ch(e,n){return n=oh(n),oh(e)===n}function Xe(e,n,t,l,r,a){switch(t){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||sn(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&sn(e,""+l);break;case"className":yt(e,"class",l);break;case"tabIndex":yt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":yt(e,t,l);break;case"style":is(e,l,a);break;case"data":if(n!=="object"){yt(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=sl(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(t==="formAction"?(n!=="input"&&Xe(e,n,"name",r.name,r,null),Xe(e,n,"formEncType",r.formEncType,r,null),Xe(e,n,"formMethod",r.formMethod,r,null),Xe(e,n,"formTarget",r.formTarget,r,null)):(Xe(e,n,"encType",r.encType,r,null),Xe(e,n,"method",r.method,r,null),Xe(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=sl(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Kn);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=sl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),zt(e,"popover",l);break;case"xlinkActuate":tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":tt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":tt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":tt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":tt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=zo.get(t)||t,zt(e,t,l))}}function Nu(e,n,t,l,r,a){switch(t){case"style":is(e,l,a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"children":typeof l=="string"?sn(e,l):(typeof l=="number"||typeof l=="bigint")&&sn(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!he.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),n=t.slice(2,r?t.length-7:void 0),a=e[an]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(n,a,r),typeof l=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,l,r);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):zt(e,t,l)}}}function Cn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,r=!1,a;for(a in t)if(t.hasOwnProperty(a)){var m=t[a];if(m!=null)switch(a){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,a,m,t,null)}}r&&Xe(e,n,"srcSet",t.srcSet,t,null),l&&Xe(e,n,"src",t.src,t,null);return;case"input":Te("invalid",e);var _=a=m=r=null,w=null,M=null;for(l in t)if(t.hasOwnProperty(l)){var H=t[l];if(H!=null)switch(l){case"name":r=H;break;case"type":m=H;break;case"checked":w=H;break;case"defaultChecked":M=H;break;case"value":a=H;break;case"defaultValue":_=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,n));break;default:Xe(e,n,l,H,t,null)}}Zr(e,a,_,w,M,m,r,!1);return;case"select":Te("invalid",e),l=m=a=null;for(r in t)if(t.hasOwnProperty(r)&&(_=t[r],_!=null))switch(r){case"value":a=_;break;case"defaultValue":m=_;break;case"multiple":l=_;default:Xe(e,n,r,_,t,null)}n=a,t=m,e.multiple=!!l,n!=null?xn(e,!!l,n,!1):t!=null&&xn(e,!!l,t,!0);return;case"textarea":Te("invalid",e),a=r=l=null;for(m in t)if(t.hasOwnProperty(m)&&(_=t[m],_!=null))switch(m){case"value":l=_;break;case"defaultValue":r=_;break;case"children":a=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(91));break;default:Xe(e,n,m,_,t,null)}Wr(e,l,r,a);return;case"option":for(w in t)if(t.hasOwnProperty(w)&&(l=t[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(e,n,w,l,t,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<Ai.length;l++)Te(Ai[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in t)if(t.hasOwnProperty(M)&&(l=t[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,M,l,t,null)}return;default:if(il(n)){for(H in t)t.hasOwnProperty(H)&&(l=t[H],l!==void 0&&Nu(e,n,H,l,t,void 0));return}}for(_ in t)t.hasOwnProperty(_)&&(l=t[_],l!=null&&Xe(e,n,_,l,t,null))}function tg(e,n,t,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,m=null,_=null,w=null,M=null,H=null;for(B in t){var Y=t[B];if(t.hasOwnProperty(B)&&Y!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=Y;default:l.hasOwnProperty(B)||Xe(e,n,B,null,l,Y)}}for(var D in l){var B=l[D];if(Y=t[D],l.hasOwnProperty(D)&&(B!=null||Y!=null))switch(D){case"type":a=B;break;case"name":r=B;break;case"checked":M=B;break;case"defaultChecked":H=B;break;case"value":m=B;break;case"defaultValue":_=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,n));break;default:B!==Y&&Xe(e,n,D,B,l,Y)}}al(e,m,_,w,M,H,a,r);return;case"select":B=m=_=D=null;for(a in t)if(w=t[a],t.hasOwnProperty(a)&&w!=null)switch(a){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(a)||Xe(e,n,a,null,l,w)}for(r in l)if(a=l[r],w=t[r],l.hasOwnProperty(r)&&(a!=null||w!=null))switch(r){case"value":D=a;break;case"defaultValue":_=a;break;case"multiple":m=a;default:a!==w&&Xe(e,n,r,a,l,w)}n=_,t=m,l=B,D!=null?xn(e,!!t,D,!1):!!l!=!!t&&(n!=null?xn(e,!!t,n,!0):xn(e,!!t,t?[]:"",!1));return;case"textarea":B=D=null;for(_ in t)if(r=t[_],t.hasOwnProperty(_)&&r!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Xe(e,n,_,null,l,r)}for(m in l)if(r=l[m],a=t[m],l.hasOwnProperty(m)&&(r!=null||a!=null))switch(m){case"value":D=r;break;case"defaultValue":B=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==a&&Xe(e,n,m,r,l,a)}Pa(e,D,B);return;case"option":for(var ie in t)if(D=t[ie],t.hasOwnProperty(ie)&&D!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Xe(e,n,ie,null,l,D)}for(w in l)if(D=l[w],B=t[w],l.hasOwnProperty(w)&&D!==B&&(D!=null||B!=null))switch(w){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Xe(e,n,w,D,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in t)D=t[pe],t.hasOwnProperty(pe)&&D!=null&&!l.hasOwnProperty(pe)&&Xe(e,n,pe,null,l,D);for(M in l)if(D=l[M],B=t[M],l.hasOwnProperty(M)&&D!==B&&(D!=null||B!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,n));break;default:Xe(e,n,M,D,l,B)}return;default:if(il(n)){for(var Ke in t)D=t[Ke],t.hasOwnProperty(Ke)&&D!==void 0&&!l.hasOwnProperty(Ke)&&Nu(e,n,Ke,void 0,l,D);for(H in l)D=l[H],B=t[H],!l.hasOwnProperty(H)||D===B||D===void 0&&B===void 0||Nu(e,n,H,D,l,B);return}}for(var R in t)D=t[R],t.hasOwnProperty(R)&&D!=null&&!l.hasOwnProperty(R)&&Xe(e,n,R,null,l,D);for(Y in l)D=l[Y],B=t[Y],!l.hasOwnProperty(Y)||D===B||D==null&&B==null||Xe(e,n,Y,D,l,B)}function uh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],a=r.transferSize,m=r.initiatorType,_=r.duration;if(a&&_&&uh(m)){for(m=0,_=r.responseEnd,l+=1;l<t.length;l++){var w=t[l],M=w.startTime;if(M>_)break;var H=w.transferSize,Y=w.initiatorType;H&&uh(Y)&&(w=w.responseEnd,m+=H*(w<_?1:(_-M)/(w-M)))}if(--l,n+=8*(a+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ru=null,Tu=null;function io(e){return e.nodeType===9?e:e.ownerDocument}function fh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Mu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ju=null;function rg(){var e=window.event;return e&&e.type==="popstate"?e===ju?!1:(ju=e,!0):(ju=null,!1)}var mh=typeof setTimeout=="function"?setTimeout:void 0,ag=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,ig=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(e){return hh.resolve(null).then(e).catch(sg)}:mh;function sg(e){setTimeout(function(){throw e})}function lr(e){return e==="head"}function ph(e,n){var t=n,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(r),Ca(n);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Oi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Oi(t);for(var a=t.firstChild;a;){var m=a.nextSibling,_=a.nodeName;a[$n]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&a.rel.toLowerCase()==="stylesheet"||t.removeChild(a),a=m}}else t==="body"&&Oi(e.ownerDocument.body);t=r}while(t);Ca(n)}function _h(e,n){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Au(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Au(t),nl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function og(e,n,t,l){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[$n])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function cg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function gh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Rt(e.nextSibling),e===null))return null;return e}function Du(e){return e.data==="$?"||e.data==="$~"}function Ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ug(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var l=function(){n(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Cu=null;function bh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Rt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function yh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function vh(e,n,t){switch(n=io(t),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);nl(e)}var Tt=new Map,xh=new Set;function so(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kl=Q.d;Q.d={f:fg,r:dg,D:mg,C:hg,L:pg,m:_g,X:bg,S:gg,M:yg};function fg(){var e=kl.f(),n=Ws();return e||n}function dg(e){var n=nt(e);n!==null&&n.tag===5&&n.type==="form"?Ud(n):kl.r(e)}var Aa=typeof document>"u"?null:document;function Sh(e,n,t){var l=Aa;if(l&&typeof n=="string"&&n){var r=Gn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),xh.has(r)||(xh.add(r),e={rel:e,crossOrigin:t,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Cn(n,"link",e),Je(n),l.head.appendChild(n)))}}function mg(e){kl.D(e),Sh("dns-prefetch",e,null)}function hg(e,n){kl.C(e,n),Sh("preconnect",e,n)}function pg(e,n,t){kl.L(e,n,t);var l=Aa;if(l&&e&&n){var r='link[rel="preload"][as="'+Gn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+Gn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+Gn(t.imageSizes)+'"]')):r+='[href="'+Gn(e)+'"]';var a=r;switch(n){case"style":a=Da(e);break;case"script":a=Oa(e)}Tt.has(a)||(e=N({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Tt.set(a,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Ci(a))||n==="script"&&l.querySelector(zi(a))||(n=l.createElement("link"),Cn(n,"link",e),Je(n),l.head.appendChild(n)))}}function _g(e,n){kl.m(e,n);var t=Aa;if(t&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Gn(l)+'"][href="'+Gn(e)+'"]',a=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Oa(e)}if(!Tt.has(a)&&(e=N({rel:"modulepreload",href:e},n),Tt.set(a,e),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(zi(a)))return}l=t.createElement("link"),Cn(l,"link",e),Je(l),t.head.appendChild(l)}}}function gg(e,n,t){kl.S(e,n,t);var l=Aa;if(l&&e){var r=tl(l).hoistableStyles,a=Da(e);n=n||"default";var m=r.get(a);if(!m){var _={loading:0,preload:null};if(m=l.querySelector(Ci(a)))_.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Tt.get(a))&&zu(e,t);var w=m=l.createElement("link");Je(w),Cn(w,"link",e),w._p=new Promise(function(M,H){w.onload=M,w.onerror=H}),w.addEventListener("load",function(){_.loading|=1}),w.addEventListener("error",function(){_.loading|=2}),_.loading|=4,oo(m,n,l)}m={type:"stylesheet",instance:m,count:1,state:_},r.set(a,m)}}}function bg(e,n){kl.X(e,n);var t=Aa;if(t&&e){var l=tl(t).hoistableScripts,r=Oa(e),a=l.get(r);a||(a=t.querySelector(zi(r)),a||(e=N({src:e,async:!0},n),(n=Tt.get(r))&&Bu(e,n),a=t.createElement("script"),Je(a),Cn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(r,a))}}function yg(e,n){kl.M(e,n);var t=Aa;if(t&&e){var l=tl(t).hoistableScripts,r=Oa(e),a=l.get(r);a||(a=t.querySelector(zi(r)),a||(e=N({src:e,async:!0,type:"module"},n),(n=Tt.get(r))&&Bu(e,n),a=t.createElement("script"),Je(a),Cn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(r,a))}}function wh(e,n,t,l){var r=(r=P.current)?so(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Da(t.href),t=tl(r).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Da(t.href);var a=tl(r).hoistableStyles,m=a.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,m),(a=r.querySelector(Ci(e)))&&!a._p&&(m.instance=a,m.state.loading=5),Tt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Tt.set(e,t),a||vg(r,e,t,m.state))),n&&l===null)throw Error(s(528,""));return m}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Oa(t),t=tl(r).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Da(e){return'href="'+Gn(e)+'"'}function Ci(e){return'link[rel="stylesheet"]['+e+"]"}function Eh(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function vg(e,n,t,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Cn(n,"link",t),Je(n),e.head.appendChild(n))}function Oa(e){return'[src="'+Gn(e)+'"]'}function zi(e){return"script[async]"+e}function kh(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Gn(t.href)+'"]');if(l)return n.instance=l,Je(l),l;var r=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Je(l),Cn(l,"style",r),oo(l,t.precedence,e),n.instance=l;case"stylesheet":r=Da(t.href);var a=e.querySelector(Ci(r));if(a)return n.state.loading|=4,n.instance=a,Je(a),a;l=Eh(t),(r=Tt.get(r))&&zu(l,r),a=(e.ownerDocument||e).createElement("link"),Je(a);var m=a;return m._p=new Promise(function(_,w){m.onload=_,m.onerror=w}),Cn(a,"link",l),n.state.loading|=4,oo(a,t.precedence,e),n.instance=a;case"script":return a=Oa(t.src),(r=e.querySelector(zi(a)))?(n.instance=r,Je(r),r):(l=t,(r=Tt.get(a))&&(l=N({},t),Bu(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Je(r),Cn(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,oo(l,t.precedence,e));return n.instance}function oo(e,n,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,a=r,m=0;m<l.length;m++){var _=l[m];if(_.dataset.precedence===n)a=_;else if(a!==r)break}a?a.parentNode.insertBefore(e,a.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function zu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var co=null;function Nh(e,n,t){if(co===null){var l=new Map,r=co=new Map;r.set(t,l)}else r=co,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var a=t[r];if(!(a[$n]||a[rn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var m=a.getAttribute(n)||"";m=e+m;var _=l.get(m);_?_.push(a):l.set(m,[a])}}return l}function Rh(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function xg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Th(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sg(e,n,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Da(l.href),a=n.querySelector(Ci(r));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uo.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=a,Je(a);return}a=n.ownerDocument||n,l=Eh(l),(r=Tt.get(r))&&zu(l,r),a=a.createElement("link"),Je(a);var m=a;m._p=new Promise(function(_,w){m.onload=_,m.onerror=w}),Cn(a,"link",l),t.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=uo.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Lu=0;function wg(e,n){return e.stylesheets&&e.count===0&&mo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&mo(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+n);0<e.imgBytes&&Lu===0&&(Lu=62500*lg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mo(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Lu?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function uo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fo=null;function mo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fo=new Map,n.forEach(Eg,e),fo=null,uo.call(e))}function Eg(e,n){if(!(n.state.loading&4)){var t=fo.get(e);if(t)var l=t.get(null);else{t=new Map,fo.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var m=r[a];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),l=m)}l&&t.set(null,l)}r=n.instance,m=r.getAttribute("data-precedence"),a=t.get(m)||l,a===l&&t.set(null,r),t.set(m,r),this.count++,l=uo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),a?a.parentNode.insertBefore(r,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Bi={$$typeof:ue,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function kg(e,n,t,l,r,a,m,_,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Mh(e,n,t,l,r,a,m,_,w,M,H,Y){return e=new kg(e,n,t,m,w,M,H,Y,_),n=1,a===!0&&(n|=24),a=it(3,null,null,n),e.current=a,a.stateNode=e,n=_c(),n.refCount++,e.pooledCache=n,n.refCount++,a.memoizedState={element:l,isDehydrated:t,cache:n},vc(a),e}function jh(e){return e?(e=ua,e):ua}function Ah(e,n,t,l,r,a){r=jh(r),l.context===null?l.context=r:l.pendingContext=r,l=Kl(n),l.payload={element:t},a=a===void 0?null:a,a!==null&&(l.callback=a),t=Il(e,l,n),t!==null&&(Zn(t,e,n),hi(t,e,n))}function Dh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Uu(e,n){Dh(e,n),(e=e.alternate)&&Dh(e,n)}function Oh(e){if(e.tag===13||e.tag===31){var n=Mr(e,67108864);n!==null&&Zn(n,e,67108864),Uu(e,67108864)}}function Ch(e){if(e.tag===13||e.tag===31){var n=ft();n=Cl(n);var t=Mr(e,n);t!==null&&Zn(t,e,n),Uu(e,n)}}var ho=!0;function Ng(e,n,t,l){var r=O.T;O.T=null;var a=Q.p;try{Q.p=2,Hu(e,n,t,l)}finally{Q.p=a,O.T=r}}function Rg(e,n,t,l){var r=O.T;O.T=null;var a=Q.p;try{Q.p=8,Hu(e,n,t,l)}finally{Q.p=a,O.T=r}}function Hu(e,n,t,l){if(ho){var r=Gu(l);if(r===null)ku(e,n,l,po,t),Bh(e,l);else if(Mg(r,e,n,t,l))l.stopPropagation();else if(Bh(e,l),n&4&&-1<Tg.indexOf(e)){for(;r!==null;){var a=nt(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var m=Tn(a.pendingLanes);if(m!==0){var _=a;for(_.pendingLanes|=2,_.entangledLanes|=2;m;){var w=1<<31-Rn(m);_.entanglements[1]|=w,m&=~w}Wt(a),(Ge&6)===0&&(Qs=bn()+500,ji(0))}}break;case 31:case 13:_=Mr(a,2),_!==null&&Zn(_,a,2),Ws(),Uu(a,2)}if(a=Gu(l),a===null&&ku(e,n,l,po,t),a===r)break;r=a}r!==null&&l.stopPropagation()}else ku(e,n,l,null,t)}}function Gu(e){return e=Qa(e),Vu(e)}var po=null;function Vu(e){if(po=null,e=Xn(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=p(n),e!==null)return e;e=null}else if(t===31){if(e=g(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return po=e,null}function zh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fr()){case Kr:return 2;case Xa:return 8;case dr:case Wn:return 32;case _t:return 268435456;default:return 32}default:return 32}}var Yu=!1,rr=null,ar=null,ir=null,Li=new Map,Ui=new Map,sr=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bh(e,n){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Li.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(n.pointerId)}}function Hi(e,n,t,l,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:a,targetContainers:[r]},n!==null&&(n=nt(n),n!==null&&Oh(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Mg(e,n,t,l,r){switch(n){case"focusin":return rr=Hi(rr,e,n,t,l,r),!0;case"dragenter":return ar=Hi(ar,e,n,t,l,r),!0;case"mouseover":return ir=Hi(ir,e,n,t,l,r),!0;case"pointerover":var a=r.pointerId;return Li.set(a,Hi(Li.get(a)||null,e,n,t,l,r)),!0;case"gotpointercapture":return a=r.pointerId,Ui.set(a,Hi(Ui.get(a)||null,e,n,t,l,r)),!0}return!1}function Lh(e){var n=Xn(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=p(t),n!==null){e.blockedOn=n,Ia(e.priority,function(){Ch(t)});return}}else if(n===31){if(n=g(t),n!==null){e.blockedOn=n,Ia(e.priority,function(){Ch(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Gu(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Jr=l,t.target.dispatchEvent(l),Jr=null}else return n=nt(t),n!==null&&Oh(n),e.blockedOn=t,!1;n.shift()}return!0}function Uh(e,n,t){_o(e)&&t.delete(n)}function jg(){Yu=!1,rr!==null&&_o(rr)&&(rr=null),ar!==null&&_o(ar)&&(ar=null),ir!==null&&_o(ir)&&(ir=null),Li.forEach(Uh),Ui.forEach(Uh)}function go(e,n){e.blockedOn===n&&(e.blockedOn=null,Yu||(Yu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,jg)))}var bo=null;function Hh(e){bo!==e&&(bo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bo===e&&(bo=null);for(var n=0;n<e.length;n+=3){var t=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Vu(l||t)===null)continue;break}var a=nt(t);a!==null&&(e.splice(n,3),n-=3,Gc(a,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function Ca(e){function n(w){return go(w,e)}rr!==null&&go(rr,e),ar!==null&&go(ar,e),ir!==null&&go(ir,e),Li.forEach(n),Ui.forEach(n);for(var t=0;t<sr.length;t++){var l=sr[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<sr.length&&(t=sr[0],t.blockedOn===null);)Lh(t),t.blockedOn===null&&sr.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],a=t[l+1],m=r[an]||null;if(typeof a=="function")m||Hh(t);else if(m){var _=null;if(a&&a.hasAttribute("formAction")){if(r=a,m=a[an]||null)_=m.formAction;else if(Vu(r)!==null)continue}else _=m.action;typeof _=="function"?t[l+1]=_:(t.splice(l,3),l-=3),Hh(t)}}}function Gh(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function qu(e){this._internalRoot=e}yo.prototype.render=qu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var t=n.current,l=ft();Ah(t,l,e,n,null,null)},yo.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ah(e.current,2,null,e,null,null),Ws(),n[qn]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var n=dn();e={blockedOn:null,target:e,priority:n};for(var t=0;t<sr.length&&n!==0&&n<sr[t].priority;t++);sr.splice(t,0,e),t===0&&Lh(e)}};var Vh=i.version;if(Vh!=="19.2.7")throw Error(s(527,Vh,"19.2.7"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Ag={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{mr=vo.inject(Ag),yn=vo}catch{}}return Vi.createRoot=function(e,n){if(!u(e))throw Error(s(299));var t=!1,l="",r=Fd,a=Pd,m=Qd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Mh(e,1,!1,null,null,t,l,null,r,a,m,Gh),e[qn]=n.current,Eu(e),new qu(n)},Vi.hydrateRoot=function(e,n,t){if(!u(e))throw Error(s(299));var l=!1,r="",a=Fd,m=Pd,_=Qd,w=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(_=t.onRecoverableError),t.formState!==void 0&&(w=t.formState)),n=Mh(e,1,!0,n,t??null,l,r,w,a,m,_,Gh),n.context=jh(null),t=n.current,l=ft(),l=Cl(l),r=Kl(l),r.callback=null,Il(t,r,l),t=l,n.current.lanes=t,hr(n,t),Wt(n),e[qn]=n.current,Eu(e),new yo(n)},Vi.version="19.2.7",Vi}var Zh;function qg(){if(Zh)return Ku.exports;Zh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Ku.exports=Yg(),Ku.exports}var $g=qg();const Xg=Yp($g),Wh=o=>{let i;const c=new Set,s=(y,x)=>{const N=typeof y=="function"?y(i):y;if(!Object.is(N,i)){const j=i;i=x??(typeof N!="object"||N===null)?N:Object.assign({},i,N),c.forEach(F=>F(i,j))}},u=()=>i,g={setState:s,getState:u,getInitialState:()=>v,subscribe:y=>(c.add(y),()=>c.delete(y))},v=i=o(s,u,g);return g},Kg=(o=>o?Wh(o):Wh),Ig=o=>o;function Fg(o,i=Ig){const c=Ii.useSyncExternalStore(o.subscribe,Ii.useCallback(()=>i(o.getState()),[o,i]),Ii.useCallback(()=>i(o.getInitialState()),[o,i]));return Ii.useDebugValue(c),c}const Jh=o=>{const i=Kg(o),c=s=>Fg(i,s);return Object.assign(c,i),c},Pg=(o=>o?Jh(o):Jh);function Qg(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let c=0;c<o.length;c+=1)o[c]=Math.floor(Math.random()*256);let i="";for(const c of o)i+=c.toString(16).padStart(2,"0");return i}const Sf="pkp.user",wf="pkp.savedDevices",Ef="pkp.ideDrafts",kf="pkp.ideSettings",Qi="Prototype Version 0.6.7";function Mo(o){try{const i=localStorage.getItem(o);return i?JSON.parse(i):null}catch{return null}}function jo(o,i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}}function Zg(){const o=Mo(Sf);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function Qu(o){jo(Sf,o)}function Nf(){return Mo(wf)??[]}function Zi(o){jo(wf,o)}function Wg(){Zi([])}function Jg(){try{localStorage.removeItem(Sf),localStorage.removeItem(wf),localStorage.removeItem(Ef),localStorage.removeItem(kf)}catch{}}function Zu(){var o;return((o=Mo(Ef))==null?void 0:o.filter(i=>i.path&&typeof i.content=="string"))??[]}function Wu(o){jo(Ef,o)}function ep(){const o=Mo(kf)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function eb(o){jo(kf,o)}function Ju(o){const i=Nf(),c=i.findIndex(s=>s.deviceID===o.deviceID);return c>=0?i[c]=o:i.push(o),Zi(i),i}function nb(o){const i=Nf().filter(c=>c.deviceID!==o);return Zi(i),i}const df="b8e06067-62ad-41ba-9231-206ae80ab551",tb="f897177b-aee8-4767-8ecc-cc694fd5fce0",lb="f897177b-aee8-4767-8ecc-cc694fd5fce1",ef=20,rb=12,ab=new TextEncoder,ib=new TextDecoder;function sb(o){return new Promise(i=>setTimeout(i,o))}function Ao(){return typeof navigator<"u"&&"bluetooth"in navigator}function mf(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function ob(){if(!Ao())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[df]},{namePrefix:"PicoW-"}],optionalServices:[df]})}async function qp(){if(!Ao()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class cb{constructor(){fe(this,"device",null);fe(this,"writeChar",null);fe(this,"notifyChar",null);fe(this,"buffer","");fe(this,"writeQueue",Promise.resolve());fe(this,"disconnectNotified",!1);fe(this,"onLine",()=>{});fe(this,"onDisconnect",()=>{});fe(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=ib.decode(c.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const u=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),u&&this.onLine(u),s=this.buffer.indexOf(`
`)}});fe(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var u;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((u=i.gatt)==null?void 0:u.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await c.getPrimaryService(df);this.writeChar=await s.getCharacteristic(tb),this.notifyChar=await s.getCharacteristic(lb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=ab.encode(`${i}
`),u=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<c.length;h+=ef){const p=c.slice(h,h+ef);await u(p),h+ef<c.length&&await sb(rb)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class ub{constructor(i,c){fe(this,"send");fe(this,"onMessage");fe(this,"inActive",!1);fe(this,"inExpectedTotal",0);fe(this,"inStreamId",0);fe(this,"inParts",new Map);fe(this,"inProgress",null);fe(this,"outPendingLines",null);fe(this,"outWaitingAck",!1);fe(this,"outStreamId",0);fe(this,"outNextStreamId",1);fe(this,"outCache",new Map);fe(this,"outProgress",null);fe(this,"outResolve",null);fe(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var s;if(i.startsWith("prep,")){const u=i.split(","),h=u.length>=2&&/^\d+$/.test(u[1])?parseInt(u[1],10):null,p=u.length>=3&&/^\d+$/.test(u[2])?parseInt(u[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=p,this.inParts.clear(),this.send(p>0?`ack:prep,${p}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const u=i.split(",");if(u.length>=3&&/^\d+$/.test(u[1])&&/^\d+$/.test(u[2])){const h=parseInt(u[1],10),p=parseInt(u[2],10),g=this.outCache.get(p);h===this.outStreamId&&g&&this.send(g)}return}const c=this.parseNumbered(i);if(c){const{idx:u,payload:h}=c;if(!this.inActive){this.onMessage(h);return}this.inParts.has(u)||(this.inParts.set(u,h),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let p=0;for(let g=1;g<=this.inExpectedTotal;g+=1)if(!this.inParts.has(g)){p=g;break}if(p>0&&this.inStreamId>0&&u>p&&this.send(`miss,${this.inStreamId},${p}`),this.inParts.size>=this.inExpectedTotal){for(let g=1;g<=this.inExpectedTotal;g+=1){const v=this.inParts.get(g);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=i.length===0?[""]:i;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const u=new Promise((h,p)=>{this.outResolve=h,this.outReject=p});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await u}async flushOutbound(){var i,c,s,u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let p=0;p<h;p+=1){const g=this.outPendingLines[p],v=`${p+1}-${g}`;this.outCache.set(p+1,v),await this.send(v),(c=this.outProgress)==null||c.call(this,p+1,h,g)}(s=this.outResolve)==null||s.call(this)}catch(h){(u=this.outReject)==null||u.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const s=i.slice(0,c);if(!/^\d+$/.test(s))return null;const u=parseInt(s,10);return u<1?null:{idx:u,payload:i.slice(c+1)}}}const Ya=11,Wi=31,fb=2,db=60,Ha=4,Ga=40;function mb(o,i){return Math.max(14,Math.min(56,Math.min(o,i)*.05))}function $p(o,i,c=Ya,s=Wi){const u=mb(o,i),h=Math.max(1,o-2*u),p=Math.max(1,i-2*u);return{areaW:o,areaH:i,cols:c,rows:s,margin:u,stepX:h/Math.max(1,c-1),stepY:p/Math.max(1,s-1)}}function Xp(o,i){return i.margin+o/2*i.stepX}function Kp(o,i){const c=i.margin+o/2*i.stepY;return i.areaH-c}function Fi(o,i){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:Xp(o.centerX2,i),cy:Kp(o.centerY2,i),width:o.spanX*i.stepX,height:o.spanY*i.stepY}}function hb(o){const i=[];for(let c=0;c<o.cols;c+=1)for(let s=0;s<o.rows;s+=1)i.push({x:o.margin+c*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return i}function wo(o,i,c,s,u){const h=(v,y,x,N)=>{const j=y%2,F=N*2;let I=j,le=1/0;for(let G=j;G<=F;G+=2){const $=Math.abs(x(G)-v);$<le&&(le=$,I=G)}return Math.max(y,Math.min(F-y,I))},p=h(o,c,v=>Xp(v,u),u.cols-1),g=h(i,s,v=>Kp(v,u),u.rows-1);return{centerX2:p,centerY2:g}}const $r=6e3,pb=15,Ro=[32,64,128,192],_b=$r*10,gb=3500,bb=8e3,yb=2,vb=$r,xb=$r*8;function nf(o){return new Promise(i=>setTimeout(i,o))}function za(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function np(o){return o instanceof DOMException&&o.name==="AbortError"}function cr(o){return o.replace(/[\r\n,]/g," ").trim()}class Sb{constructor(i={}){fe(this,"transport",new cb);fe(this,"stream");fe(this,"events");fe(this,"waiters",[]);fe(this,"collectingLayout",!1);fe(this,"layoutBuffer",[]);fe(this,"layoutResolve",null);fe(this,"collectingLines",!1);fe(this,"lineBuffer",[]);fe(this,"lineResolve",null);fe(this,"lineReject",null);fe(this,"lineCollectId",0);fe(this,"controlPumpActive",!1);fe(this,"pendingButtons",[]);fe(this,"pendingSliders",new Map);fe(this,"pendingToggles",new Map);fe(this,"expectingDisconnect",!1);fe(this,"disconnectMessage",null);fe(this,"busy",!1);fe(this,"fsCapabilities",null);this.events=i,this.stream=new ub(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return mf((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(i,c){var s,u;(u=(s=this.events).onLog)==null||u.call(s,i,c)}progress(i,c){var s,u;(u=(s=this.events).onProgress)==null||u.call(s,i,c)}onDeviceMessage(i){var s,u;if(i==="disconnect"||i==="disconnect_private"){const h=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(u=this.layoutResolve)==null||u.call(this,h),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(h=>h.match(i));if(c>=0){const h=this.waiters[c];this.waiters.splice(c,1),clearTimeout(h.timer),h.resolve(i)}}waitFor(i,c,s){return new Promise((u,h)=>{const p=setTimeout(()=>{const g=this.waiters.findIndex(v=>v.timer===p);g>=0&&this.waiters.splice(g,1),h(new Error(`Timeout: ${s}`))},c);this.waiters.push({match:i,resolve:u,reject:h,timer:p})})}async collectLines(i,c,s,u,h){za(u);const p=this.lineCollectId+1;this.lineCollectId=p,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const g=new Promise((v,y)=>{let x=!1;const N=()=>this.lineCollectId===p,j=()=>{x=!0,N()&&(this.lineReject=null,this.stream.setInboundProgress(null)),u==null||u.removeEventListener("abort",I)},F=$=>{x||(clearTimeout(le),N()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),j(),y($))},I=()=>{F(new DOMException("BLE file read cancelled","AbortError"))},le=setTimeout(()=>{N()&&F(new Error(`Timeout: ${s}`))},c);this.lineResolve=v,this.lineReject=F;const G=this.lineResolve;this.lineResolve=$=>{N()&&(clearTimeout(le),j(),G==null||G($))},u==null||u.addEventListener("abort",I,{once:!0})});return await this.transport.writeLine(i),g}async exchange(i,c,s,u=3){let h;for(let p=1;p<=u;p+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,$r,s)}catch(g){h=g,this.log("warning",`${s}: forsøg ${p}/${u} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${s}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var ue;await nf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",se=>se==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",se=>se==="unowned"||se.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned")return{kind:"unowned"};const s=c.split(","),u=s[1]??"",h=s[2]!==void 0&&parseInt(s[2],10)||0,p=s[3]!==void 0?parseInt(s[3],10)===1:!0,g=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=s.length>=7,y=v?parseInt(s[5]??"0",10)===1:g,x=((ue=s[v?6:5])==null?void 0:ue.trim())||void 0;await this.exchange("ACK:ownership",se=>se==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const N=await this.exchange(`request_permission,${i.userID},${cr(i.username)}`,se=>se.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const j=N.split(",").filter(se=>/^\d+$/.test(se)),F=j.length>=1?parseInt(j[0]??"0",10):0,I=j.length>=2?parseInt(j[1]??"0",10):0,le=j.length>=3?parseInt(j[2]??"0",10):I;if(F===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:p};const G=i.userID===u,$=I===1||G,re=le===1||G;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:u,ownerName:x,iconID:h,canEdit:$,canEditCode:re,isOwnedByMe:G,canOthersConnect:p,canOthersEdit:g,canOthersEditCode:y}}async create(i,c,s,u,h,p,g){const v=s?1:0,y=s&&u?1:0,x=s&&h?1:0;await this.exchange(`create,${i.userID},${cr(i.username)},${c},${v},${y},${x},${p},${g}`,N=>N==="ACK:create","create")}async updateDeviceSettings(i,c,s,u,h,p,g){const v=c?1:0,y=c&&s?1:0,x=c&&u?1:0;await this.exchange(`settings_update,${i},${v},${y},${x},${h},${p},${cr(g??"")}`,N=>N==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((s,u)=>{this.layoutResolve=s;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,u(new Error("Timeout: layout")))},$r*2),p=this.layoutResolve;this.layoutResolve=g=>{clearTimeout(h),p==null||p(g)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",u=>u==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(u=>{const h=g=>g===null?"n":String(g),p=`update,${u.type},${u.name},${h(u.centerX2)},${h(u.centerY2)},${h(u.spanX)},${h(u.spanY)},${u.rotation}`;return u.type==="slider"?`${p},${u.sliderMin??0},${u.sliderMax??100},${u.sliderRecenter??"none"}`:u.type==="toggle"?`${p},${u.toggleInitial?1:0}`:u.type==="radar"?[p,u.radarMinAngle??0,u.radarMaxAngle??180,u.radarMaxDistance??200,u.radarFadeMs??1200].join(","):p});c.push("__END__");const s=this.waitFor(u=>u==="LAYOUT_SAVED",$r*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await s}async listFiles(i="/"){return(await this.collectLines(`fs_list,${cr(i)}`,$r*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,u,h,p]=s.split(","),g=u==="file"||u==="dir"?u:"unknown",v=parseInt(p??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:g,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(i){var p,g,v;const c=i.split(",");if(c.length<4)return;const s=(p=c[1])==null?void 0:p.trim(),u=parseFloat(c[2]??""),h=parseFloat(c[3]??"");!s||!Number.isFinite(u)||!Number.isFinite(h)||((v=(g=this.events).onRadar)==null||v.call(g,s,u,h),this.log("info",`rx: ${i}`))}handleTextLine(i){var g,v;const c=i.indexOf(","),s=c>=0?i.indexOf(",",c+1):-1;if(c<0||s<0)return;const u=i.slice(c+1,s),h=i.slice(s+1),p=u==null?void 0:u.trim();p&&((v=(g=this.events).onText)==null||v.call(g,p,h),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var h,p,g;const c=i.split(",");if(c.length<3)return;const s=(h=c[1])==null?void 0:h.trim(),u=parseInt(c[2]??"",10);!s||!Number.isFinite(u)||((g=(p=this.events).onToggleState)==null||g.call(p,s,u===1),this.log("info",`rx: ${i}`))}async readText(i,c,s){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const u=await this.getFilesystemCapabilities(s);if(u.streamRead)try{return await this.readTextStream(i,u,c,s)}catch(h){if(s!=null&&s.aborted||np(h)||!u.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,s)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",vb,"fs_capabilities",i),s=c.find(x=>x.startsWith("ERR"));if(s)throw new Error(s);const u=c.find(x=>x.startsWith("fs_capabilities,"));if(!u)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=u.split(","),p=new Map;for(let x=1;x<h.length-1;x+=2)p.set(h[x],h[x+1]);const g=parseInt(p.get("max_page")??"",10),v=parseInt(p.get("stream_chunk")??"",10),y={version:p.get("version")||void 0,pageRead:p.get("page_read")==="1",maxPageSize:Number.isFinite(g)&&g>0?g:32,streamRead:p.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,c,s){const u=await this.getFilesystemCapabilities(s);let h=0,p=wb(u.maxPageSize),g=0,v=null,y="";const x=`Indlæser ${tf(i)}...`;za(s),c==null||c(5,x);for(let N=0;N<512;N+=1){za(s),g===0&&(c==null||c(7,x));const F=await this.readPageWithRetry(i,g,h,p,s),I=F.lines;h=F.nextPageSizeIndex,p=F.maxPageSizeIndex,za(s);const le=I.find(W=>W.startsWith("ERR"));if(le)throw new Error(le);const G=I.find(W=>W.startsWith("fs_page,"));if(!G)throw new Error("ERR: fs_read_page missing data");const[,$,re,ue,se=""]=G.split(",",5);if($!==i)throw new Error("ERR: fs_read_page stale data");const de=parseInt(re??"",10),Ne=parseInt(ue??"",10);if(!Number.isFinite(de)||de!==g||!Number.isFinite(Ne))throw new Error("ERR: fs_read_page invalid data");v=Ne,y+=se,g+=Math.floor(se.length/2);const ee=v>0?8+Math.min(87,Math.round(g/v*87)):95;if(c==null||c(ee,x),g>=v||se.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(lp(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,s,u,h){let p,g=Math.min(s,u);for(;g>=0;){const v=Ro[g],y=g===0?yb:1,x=g===0?bb:gb;for(let N=1;N<=y;N+=1){za(h);try{return{lines:await this.collectLines(`fs_read_page,${cr(i)},${c},${v}`,x,`fs_read_page ${c}`,h),nextPageSizeIndex:Math.min(g+1,u),maxPageSizeIndex:u}}catch(j){if(h!=null&&h.aborted||np(j))throw j;if(p=j,N<y||g>0){const I=g>0&&N>=y?Ro[g-1]:v;this.log("warning",`fs_read_page ${c} (${v} bytes) fejlede; prøver ${I} bytes`),await nf(80+N*80)}}}if(g===0)break;u=Math.max(0,g-1),g=u}throw p instanceof Error?p:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,s,u){const h=`Indlæser ${tf(i)}...`,p=Math.max(16,Math.min(192,c.streamChunkSize||128));s==null||s(5,h);const g=await this.collectLines(`fs_read_stream,${cr(i)},${p}`,xb,`fs_read_stream ${i}`,u,(ee,W)=>{const xe=8+Math.round(Math.min(ee,W)/Math.max(1,W)*87);s==null||s(Math.min(95,xe),h)});za(u);const v=g.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const y=g.find(ee=>ee.startsWith("fs_stream_begin,")),x=g.find(ee=>ee.startsWith("fs_stream_end,"));if(!y||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,N,j]=y.split(",",4),[,F,I,le]=x.split(",",4),G=parseInt(j??"",10),$=parseInt(I??"",10),re=parseInt(le??"",10);if(N!==i||F!==i||!Number.isFinite(G)||G!==$||!Number.isFinite(re))throw new Error("ERR: fs_read_stream invalid metadata");let ue=0,se="";for(const ee of g){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,W,xe=""]=ee.split(",",3),ge=parseInt(W??"",10);if(!Number.isFinite(ge)||ge!==ue||xe.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");se+=xe,ue+=Math.floor(xe.length/2)}if(ue!==G)throw new Error("ERR: fs_read_stream size mismatch");const de=lp(se);if(tp(de)!==re)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(de)}async writeText(i,c,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${cr(i)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const u=new TextEncoder().encode(c),h=[...u].map(x=>x.toString(16).padStart(2,"0")).join(""),p=[];for(let x=0;x<h.length;x+=160)p.push(`fs_write_chunk,${h.slice(x,x+160)}`);p.push("fs_write_end");const g=tp(u),v=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),_b,"fs_write_done");s==null||s(u.length===0?85:18,u.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${u.length} bytes via Bluetooth...`),await this.stream.sendReliable(p,(x,N,j)=>{if(!j.startsWith("fs_write_chunk,"))return;const F=Math.min(u.length,x*80),I=18+Math.round(x/Math.max(1,N-1)*67);s==null||s(Math.min(85,I),`Sender ${F}/${u.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const y=await v;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,x,N]=y.split(",",3),j=parseInt(x??"",10),F=parseInt(N??"",10);if(j!==u.length||F!==g)throw new Error(`ERR: BLE-verificering fejlede for ${tf(i)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${cr(i)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i){this.busy||(this.pendingButtons.push(`button,${i}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await nf(pb)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingSliders.entries().next();if(!c.done){const[u,h]=c.value;return this.pendingSliders.delete(u),h}const s=this.pendingToggles.entries().next();if(!s.done){const[u,h]=s.value;return this.pendingToggles.delete(u),h}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,s,u;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(u=(s=this.events).onDisconnect)==null||u.call(s,i)}}function wb(o){let i=0;for(let c=0;c<Ro.length;c+=1)Ro[c]<=o&&(i=c);return i}function tf(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function tp(o){let i=0;for(const c of o)i=i+c>>>0;return i}function lp(o){const i=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(o.slice(c*2,c*2+2),16);return i}function rp(o){const i=(c,s)=>Number.isFinite(c)?Math.max(fb,Math.min(db,c)):s;for(const c of o){const s=c.trim();if(s.startsWith("#GRID,")){const u=s.split(","),h=i(parseInt(u[1],10),Ya),p=i(parseInt(u[2],10),Wi);return{cols:h,rows:p}}}return{cols:Ya,rows:Wi}}function ap(o){const i=new Map;for(const c of o){const s=c.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const u=s.split(",");if(u.length<7)continue;const[h,p,g,v,y,x,N,j,F,I,le]=u;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"||i.has(p))continue;const G=ge=>{if(ge==="n")return null;const ve=parseInt(ge,10);return Number.isNaN(ve)?null:ve},$=parseInt(N,10)||0,re=j!==void 0?parseInt(j,10):0,ue=F!==void 0?parseInt(F,10):100,se=["none","bottom","middle","top"].includes(I??"")?I:"none",de=j!==void 0?parseInt(j,10)===1:!1,Ne=j!==void 0?parseFloat(j):0,ee=F!==void 0?parseFloat(F):180,W=I!==void 0?parseFloat(I):200,xe=le!==void 0?parseInt(le,10):1200;i.set(p,{type:h,name:p,centerX2:G(g),centerY2:G(v),spanX:G(y),spanY:G(x),rotation:[0,90,180,270].includes($)?$:0,...h==="slider"?{sliderMin:Number.isFinite(re)?re:0,sliderMax:Number.isFinite(ue)?ue:100,sliderRecenter:se}:{},...h==="toggle"?{toggleInitial:de}:{},...h==="radar"?{radarMinAngle:Number.isFinite(Ne)?Ne:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(W)&&W>0?W:200,radarFadeMs:Number.isFinite(xe)&&xe>0?xe:1200}:{}})}return[...i.values()]}let ne=null,Yi=null,ip=0,Nl=!1;function Eb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function sp(o){return new Promise(i=>setTimeout(i,o))}function kb(o){return Object.fromEntries(o.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function op(o,i){const c=kb(o);for(const s of o)s.type==="toggle"&&i[s.name]!==void 0&&(c[s.name]=i[s.name]);return c}const J=Pg((o,i)=>{function c(u,h){o(p=>({logs:[{level:u,message:h,time:Eb()},...p.logs].slice(0,200)}))}function s(u){Yi&&clearTimeout(Yi),ip+=1,o({toast:{message:u,id:ip}}),Yi=setTimeout(()=>o({toast:null}),4500)}return ne=new Sb({onProgress:(u,h)=>o({progress:{value:u,label:h}}),onLog:(u,h)=>c(u,h),onRadar:(u,h,p)=>{const g=Date.now(),v={id:`${g}-${Math.random().toString(36).slice(2)}`,angle:h,distance:p,createdAt:g};o(y=>{const x=y.layout.find(F=>F.type==="radar"&&F.name===u),N=(x==null?void 0:x.radarFadeMs)??1200,j=y.radarPings[u]??[];return{radarPings:{...y.radarPings,[u]:[...j.filter(F=>g-F.createdAt<=N),v].slice(-80)}}})},onText:(u,h)=>{o(p=>({textValues:{...p.textValues,[u]:h}}))},onToggleState:(u,h)=>{o(p=>({toggleValues:{...p.toggleValues,[u]:h}}))},onDisconnect:u=>{const{screen:h,active:p,picoIdeOrigin:g}=i();if(Nl){Nl=!1;return}if(u&&(c("warning",u),s(u)),h==="control"||h==="connection"||h==="create"||h==="ide"&&g==="control"){const v=p?{deviceID:p.deviceID,deviceName:p.deviceName,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:v})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const u=Zg(),h=Nf();o({user:u,savedDevices:h,splashTarget:u?"dashboard":"intro"})},finishSplash:()=>{const u=i().splashTarget;o({screen:u??"intro"})},createUser:u=>{const h=u.trim();if(!h)return;const p={username:h,userID:Qg()};Qu(p),o({user:p,screen:"dashboard"})},findDevice:async()=>{try{const u=await ob();await i().connectToDevice(u)}catch(u){u instanceof Error&&u.name!=="NotFoundError"&&c("error",u.message)}},connectToDevice:async(u,h)=>{var g,v;const p=i().user;if(!(!p||!ne)){Nl=!1,o({screen:"connection",connecting:{name:mf(u.name)||(h==null?void 0:h.deviceName)||"Pico",iconID:(h==null?void 0:h.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await ne.connect(u);const y=await ne.runHandshake(p),x=u.id,N=mf(u.name)||(h==null?void 0:h.deviceName)||"Pico";if(y.kind==="denied"){const $=`Du kan ikke forbinde, fordi ${((g=y.ownerName)==null?void 0:g.trim())||((v=h==null?void 0:h.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",$),s($),o({screen:"dashboard",connecting:null}),await ne.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:x,deviceName:N,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:p.username,gridCols:Ya,gridRows:Wi},screen:"create"});return}const j={deviceID:x,deviceName:N,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(h==null?void 0:h.ownerName)};o({savedDevices:Ju(j)});const F=await ne.requestLayout(),I=rp(F),le=ap(F);o({layout:le,sliderValues:{},toggleValues:op(le,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:x,deviceName:N,iconID:y.iconID,canEdit:y.canEdit,canEditCode:y.canEditCode,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(h==null?void 0:h.ownerName),gridCols:I.cols,gridRows:I.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const x=y instanceof Error?y.message:"Forbindelsen mislykkedes.";c("error",x),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await ne.disconnect().catch(()=>{})}}},finishCreate:async(u,h,p,g,v,y)=>{const{user:x,active:N}=i();if(!(!x||!N||!ne))try{ne.setBusy(!0),await ne.create(x,u,h,p,g,v,y),ne.setBusy(!1);const j={deviceID:N.deviceID,deviceName:N.deviceName,deviceIconID:u,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&g,isOwnedByMe:!0,ownerName:x.username};o({savedDevices:Ju(j)});const F=await ne.requestLayout(),I=rp(F),le=ap(F);o({layout:le,sliderValues:{},toggleValues:op(le,i().toggleValues),radarPings:{},textValues:{},active:{...N,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&g,ownerName:x.username,gridCols:I.cols,gridRows:I.rows},screen:"control"})}catch(j){ne.setBusy(!1);const F=j instanceof Error?j.message:"Oprettelse mislykkedes.";c("error",F),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await ne.disconnect().catch(()=>{})}},saveDeviceSettings:async(u,h,p,g,v,y)=>{const{active:x,user:N}=i();if(!(!x||!ne||!x.isOwnedByMe))try{ne.setBusy(!0),await ne.updateDeviceSettings(u,h,p,g,v,y,N==null?void 0:N.username);const j={...x,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&g,ownerName:(N==null?void 0:N.username)??x.ownerName,gridCols:v,gridRows:y},F={deviceID:x.deviceID,deviceName:x.deviceName,deviceIconID:u,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&g,isOwnedByMe:!0,ownerName:(N==null?void 0:N.username)??x.ownerName};o({active:j,savedDevices:Ju(F)}),s("Enhedsindstillinger gemt.")}catch(j){c("error",j instanceof Error?j.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ne.setBusy(!1)}},cancelCreate:async()=>{ne&&await ne.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Nl=!0,ne&&await ne.disconnect().catch(()=>{}),Nl=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:u=>{o({savedDevices:nb(u)})},clearSavedDevices:()=>{Wg(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{Nl=!0,ne!=null&&ne.connected&&await ne.disconnect().catch(()=>{}),Jg(),window.location.reload()},updateUsername:u=>{const h=i().user,p=u.trim();if(!h||!p)return;const g={...h,username:p};Qu(g),o(v=>{var x;const y=v.savedDevices.map(N=>N.isOwnedByMe?{...N,ownerName:p}:N);return Zi(y),{user:g,active:(x=v.active)!=null&&x.isOwnedByMe?{...v.active,ownerName:p}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const u=i().user;return u?Nb(u):null},applyOwnerPairingCode:u=>{var p;const h=Rb(u,(p=i().user)==null?void 0:p.username);return h?(Qu(h),o(g=>{var y;const v=g.savedDevices.map(x=>x.isOwnedByMe?{...x,ownerName:h.username}:x);return Zi(v),{user:h,active:(y=g.active)!=null&&y.isOwnedByMe?{...g.active,ownerName:h.username}:g.active,savedDevices:v}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const u=i().screen==="control"&&!!(ne!=null&&ne.connected),h=i().active;if(u&&h&&!h.isOwnedByMe&&!h.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(p=>({screen:"ide",picoIdeOrigin:u?"control":"dashboard",active:u?p.active:null,layout:u?p.layout:[],sliderValues:u?p.sliderValues:{},toggleValues:u?p.toggleValues:{},radarPings:u?p.radarPings:{},textValues:u?p.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:u,active:h}=i();o({screen:u==="control"&&h&&(ne!=null&&ne.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ne!=null&&ne.connected),bleListFiles:async()=>ne!=null&&ne.connected?ne.listFiles("/"):[],bleReadText:async(u,h,p)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");return ne.readText(u,h,p)},bleWriteText:async(u,h,p)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.writeText(u,h,p)},bleDeleteFile:async u=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.deleteFile(u)},bleRestart:async()=>{ne!=null&&ne.connected&&await ne.restart()},bleRestartAndReconnect:async(u="control")=>{const{active:h}=i();if(!(ne!=null&&ne.connected)||!h)return!1;const p={deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,canOthersEditCode:h.canOthersEditCode,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName};Nl=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ne.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:p.deviceName,iconID:p.deviceIconID}});for(let g=0;g<12&&(ne!=null&&ne.connected);g+=1)await sp(250);ne!=null&&ne.connected||(Nl=!1);for(let g=1;g<=8;g+=1){await sp(g===1?1200:850);try{const y=(await qp()).find(x=>x.id===p.deviceID);if(!y){o({progress:{value:Math.min(88,20+g*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+g*8),label:`Genforbinder (${g}/8)...`}}),await i().connectToDevice(y,p),u==="ide"&&o(x=>({screen:"ide",picoIdeOrigin:"control",active:x.active,layout:x.layout,sliderValues:x.sliderValues,toggleValues:x.toggleValues,radarPings:x.radarPings,textValues:x.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){c("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Nl=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p}),!1},reconnectLostDevice:async()=>{var h;const u=i().connectionLost;if(u){o({connectionLost:null});try{if((h=navigator.bluetooth)!=null&&h.getDevices){const g=(await navigator.bluetooth.getDevices()).find(v=>v.id===u.deviceID);if(g){await i().connectToDevice(g,u);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:u=>ne==null?void 0:ne.enqueueButton(u),sendSlider:(u,h)=>{o(p=>({sliderValues:{...p.sliderValues,[u]:h}})),ne==null||ne.enqueueSlider(u,h)},sendToggle:(u,h)=>{o(p=>({toggleValues:{...p.toggleValues,[u]:h}})),ne==null||ne.enqueueToggle(u,h)},saveLayout:async u=>{if(ne)try{ne.setBusy(!0),await ne.saveLayout(u),o({layout:u,editMode:!1})}catch(h){c("error",h instanceof Error?h.message:"Kunne ikke gemme layout.")}finally{ne.setBusy(!1)}},setEditMode:u=>o({editMode:u,sideMenuOpen:!1,menuPage:null}),setDashboardPage:u=>o({dashboardPage:u}),toggleSideMenu:u=>o(h=>({sideMenuOpen:u??!h.sideMenuOpen})),toggleDebugger:u=>o(h=>({debuggerOpen:u??!h.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:u=>o({menuPage:u,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(u,h)=>c(u,h),askConfirm:u=>o({confirmDialog:u}),closeConfirm:()=>o({confirmDialog:null}),showToast:u=>s(u),dismissToast:()=>{Yi&&clearTimeout(Yi),o({toast:null})}}}),hf="PKP-EJER";function Nb(o){var s;const i=o.userID.toLowerCase(),c=((s=i.match(/.{1,4}/g))==null?void 0:s.join("-"))??i;return`${hf}-${c}-${Ip(i)}`}function Rb(o,i="Ejer"){const c=o.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${hf}-`))return null;const s=c.slice(hf.length+1).split("-").filter(Boolean),u=s.pop()??"",h=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||u!==Ip(h)?null:{userID:h,username:i.trim()||"Ejer"}}function Ip(o){let i=2166136261;for(const c of o.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const Do="./",Fp=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function $a(o){const i=o>=0&&o<Fp.length?o:0;return`${Do}device-icons/${i}.png`}const Tb=`${Do}art/logo.png`,Mb=`${Do}art/Teknologiskolen_logo.png`,jb=`${Do}art/logo_teknologiskolen_white.png`,Ab={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Yn({name:o,size:i=24,className:c}){return f.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Ab[o]})}const Db=1850,Ob=450;function Cb(){const o=J(s=>s.splashTarget),i=J(s=>s.finishSplash),c=o?"splash-screen-animation splash-ready":"splash-pending";return U.useEffect(()=>{if(!o)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Ob:Db,h=window.setTimeout(i,u);return()=>window.clearTimeout(h)},[i,o]),f.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:Tb,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function cp(){const o=J(u=>u.createUser),[i,c]=U.useState(""),s=i.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:Mb,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${s?"filled":""}`,children:[f.jsx("input",{id:"username",value:i,onChange:u=>c(u.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(i),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:Qi})]})}function Rf({title:o,onMenu:i}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:f.jsx(Yn,{name:"menu"})})]})})}function wn({title:o,onClose:i,children:c,closeVariant:s="plain"}){const u=s==="circle",h=U.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:p=>{h.current=p.target===p.currentTarget},onClick:p=>{p.target===p.currentTarget&&h.current&&i(),h.current=!1},children:f.jsxs("div",{className:"modal",onClick:p=>p.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${u?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:f.jsx(Yn,{name:u?"delete":"close",size:u?30:24})})]}),f.jsx("div",{className:"modal-body",children:c})]})})}function up(){const o=J(j=>j.savedDevices),i=J(j=>j.toggleSideMenu),c=J(j=>j.findDevice),s=J(j=>j.removeSavedDevice),u=J(j=>j.askConfirm),h=J(j=>j.dashboardPage),p=J(j=>j.setDashboardPage),g=Ub(),[v,y]=U.useState(null),x=Ao(),N=o.filter(j=>h==="mine"?j.isOwnedByMe:!j.isOwnedByMe).sort(Lb);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(Rf,{title:"Hovedmenu",onMenu:()=>i()}),f.jsxs("div",{className:"content dash-content",children:[!x&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>p("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>p("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:N.length===0?f.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):N.map(j=>f.jsx(zb,{device:j,disabled:!x,onConnect:()=>g(j),onSettings:()=>y(j)},j.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!x,"aria-label":"Find enhed",children:f.jsx(Yn,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:Qi}),v&&f.jsx(wn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:$a(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(qi,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(qi,{label:"Ejer",value:Bb(v)}),f.jsx(qi,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(qi,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx(qi,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const j=v;y(null),g(j)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>u({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function zb({device:o,disabled:i,onConnect:c,onSettings:s}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[f.jsx("img",{className:"device-tile-icon",src:$a(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:f.jsx(Yn,{name:"settings"})})]})}function qi({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function Bb(o){var i;return o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger"}function Lb(o,i){return o.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function Ub(){const o=J(s=>s.connectToDevice),i=J(s=>s.findDevice),c=J(s=>s.log);return async s=>{const h=(await qp()).find(p=>p.id===s.deviceID);h?await o(h,s):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function Hb(){const o=J(c=>c.connecting),i=J(c=>c.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:$a((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function Pp({selected:o,onSelect:i,onClose:c}){return f.jsx(wn,{title:"Vælg Enhedens Ikon",onClose:c,children:f.jsx("div",{className:"icon-grid",children:Fp.map(s=>f.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{i(s.id),c()},"aria-label":s.label,children:f.jsx("img",{src:$a(s.id),alt:""})},s.id))})})}function Gb(){const o=J(se=>se.finishCreate),i=J(se=>se.cancelCreate),[c,s]=U.useState(0),[u,h]=U.useState(!1),[p,g]=U.useState(!1),[v,y]=U.useState(!1),[x,N]=U.useState(!1),[j,F]=U.useState(Ya),[I,le]=U.useState(Wi),[G,$]=U.useState(!1),re=se=>Number.isFinite(se)?Math.max(Ha,Math.min(Ga,Math.round(se))):Ya;async function ue(){$(!0),await o(c,p,p&&v,p&&x,re(j),re(I))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:$a(c),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(Yn,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:p?"":"active",onClick:()=>g(!1),children:"Privat"}),f.jsx("button",{type:"button",className:p?"active":"",onClick:()=>g(!0),children:"Offentlig"})]}),p&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:x?"":"active",onClick:()=>N(!1),children:"Nej"}),f.jsx("button",{type:"button",className:x?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Ha,max:Ga,value:Number.isNaN(j)?"":j,onChange:se=>F(parseInt(se.target.value,10)),onBlur:()=>F(re(j))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Ha,max:Ga,value:Number.isNaN(I)?"":I,onChange:se=>le(parseInt(se.target.value,10)),onBlur:()=>le(re(I))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ue,disabled:G,children:G?"Opretter...":"Opret"})]})]}),u&&f.jsx(Pp,{selected:c,onSelect:s,onClose:()=>h(!1)}),f.jsx("span",{className:"version",children:Qi})]})}const qa=8;function Eo(o){return Math.max(5,Math.min(22,o))}function To(o,i,c){const s=Math.max(1,o.length),u=(i-qa*2)/(s*.58),h=(c-qa*2)*.48;return Eo(Math.min(u,h))}function Vb(o,i,c,s,u){const h=o.trim().split(/\s+/).filter(Boolean),p=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),g=u?Eo(Math.min(i/4.6,c/4.6,12)):0,v=u?g+qa:qa;if(s){const N=Math.max(1,c-v*2);return{fontSize:Eo(Math.min(i*.48,N/(p*1.04))),endFontSize:g,centerInset:u?{top:v,bottom:v}:{}}}const y=Math.max(1,i-v*4.2);return{fontSize:Eo(Math.min(c*.42,y/(p*.58))),endFontSize:g,centerInset:u?{left:v*2.1,right:v*2.1}:{}}}function Yb({control:o,rect:i,disabled:c,latestValue:s,toggleValue:u,radarPings:h=[],textValue:p,onButton:g,onSlider:v,onToggle:y}){const x={left:i.cx,top:i.cy,width:i.width,height:i.height};if(o.type==="button")return f.jsx("div",{className:"control",style:x,children:f.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",fontSize:To(o.name,i.width,i.height)},onPointerDown:N=>{c||(N.preventDefault(),g(o.name))},children:o.name})});if(o.type==="toggle"){const N=!!u;return f.jsx("div",{className:"control",style:x,children:f.jsx("button",{className:`control-toggle ${N?"on":""}`,type:"button",disabled:c,"aria-pressed":N,style:{width:"100%",height:"100%",fontSize:To(o.name,i.width,i.height)},onPointerDown:j=>{c||(j.preventDefault(),y(o.name,!N))},children:f.jsx("span",{children:o.name})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:x,children:f.jsx(Zp,{control:o,pings:h,width:i.width,height:i.height})}):o.type==="text"?f.jsx("div",{className:"control",style:x,children:f.jsx(Qp,{message:p??o.name,width:i.width,height:i.height})}):f.jsx("div",{className:"control",style:x,children:f.jsx(e0,{control:o,disabled:c,latestValue:s,onSlider:v,width:i.width,height:i.height})})}function qb(o,i,c){const s=o.trim()||" ",h=s.split(/\s+/).filter(Boolean).reduce((N,j)=>Math.max(N,j.length),1),p=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(h*1.9)))),g=Math.max(1,i-qa*3),v=Math.max(1,c-qa*3),y=g/(h*.58),x=v/(p*1.16);return Math.max(7,Math.min(24,y,x))}function Qp({message:o,width:i,height:c}){const s=o.trim()||"...";return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:qb(s,i,c)},children:f.jsx("span",{children:s})})}function Zp({control:o,pings:i,width:c,height:s,preview:u=!1}){const[,h]=U.useState(0),p=Math.max(120,o.radarFadeMs??1200),g=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=ht(g),x=ht(v),N=Math.abs(v-g)>=360||y===x&&g!==v,j=Math.max(1,o.radarMaxDistance??200),F=Date.now(),I=i[i.length-1],le=o.rotation,G=ht(y+le),$=ht(x+le),re=Qb(y,x),ue=((I==null?void 0:I.angle)??re)+le,se=u?[{id:"preview",angle:re,distance:j*.62,createdAt:F}]:i.filter(O=>F-O.createdAt<=p),de=!N,Ne=Math.max(8,Math.min(12,Math.min(c,s)*.16)),ee=0,W=0,xe=1,ge=N?{x:-1.12,y:-1.12,width:2.24,height:2.24}:Kb(G,$),ve=N?"":$b(ee,W,xe,G,$),ae=hp(g),Pe=hp(v),Ae=de?Fb(G,$,ge,c,s,ae,Pe,Ne):null;U.useEffect(()=>{if(u||i.length===0)return;const O=window.setInterval(()=>h(Q=>Q+1),120);return()=>window.clearInterval(O)},[p,i.length,u]);const Qe=At(ee,W,xe,ue);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:c,height:s,viewBox:`${ge.x} ${ge.y} ${ge.width} ${ge.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[N?f.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:W,r:xe}):f.jsx("path",{className:"radar-sector-fill",d:ve}),[.25,.5,.75,1].map(O=>N?f.jsx("circle",{className:"radar-ring",cx:ee,cy:W,r:xe*O},O):f.jsx("path",{className:"radar-ring",d:Xb(ee,W,xe*O,G,$)},O)),!N&&f.jsx(fp,{cx:ee,cy:W,radius:xe,angle:G}),!N&&f.jsx(fp,{cx:ee,cy:W,radius:xe,angle:$}),f.jsx("line",{className:"radar-sweep",x1:ee,y1:W,x2:Qe.x,y2:Qe.y}),se.map(O=>{const Q=u?0:F-O.createdAt,ce=Math.max(0,1-Q/p),Se=Math.max(0,Math.min(j,O.distance)),Ee=At(ee,W,xe*(Se/j),O.angle+le);return f.jsx("circle",{className:"radar-ping",cx:Ee.x,cy:Ee.y,r:Math.max(.025,Math.min(ge.width,ge.height)*.025),opacity:ce},O.id)})]}),de&&Ae&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:Ae.min.x,top:Ae.min.y,fontSize:Ne},children:ae}),f.jsx("span",{className:"radar-angle-label",style:{left:Ae.max.x,top:Ae.max.y,fontSize:Ne},children:Pe})]})]})}function fp({cx:o,cy:i,radius:c,angle:s}){const u=At(o,i,c,s);return f.jsx("line",{className:"radar-boundary",x1:o,y1:i,x2:u.x,y2:u.y})}function At(o,i,c,s){const u=(ht(s)-90)*Math.PI/180;return{x:o+Math.cos(u)*c,y:i+Math.sin(u)*c}}function $b(o,i,c,s,u){const h=At(o,i,c,s),p=At(o,i,c,u),g=Tf(s,u)>180?1:0;return`M ${o} ${i} L ${h.x} ${h.y} A ${c} ${c} 0 ${g} 1 ${p.x} ${p.y} Z`}function Xb(o,i,c,s,u){const h=At(o,i,c,s),p=At(o,i,c,u),g=Tf(s,u)>180?1:0;return`M ${h.x} ${h.y} A ${c} ${c} 0 ${g} 1 ${p.x} ${p.y}`}function Tf(o,i){const c=ht(o),s=ht(i),u=s>=c?s-c:360-c+s;return u===0?360:u}function Kb(o,i){const c=[{x:0,y:0},At(0,0,1,o),At(0,0,1,i)];for(const x of[0,90,180,270])Ib(x,o,i)&&c.push(At(0,0,1,x));const s=Math.min(...c.map(x=>x.x)),u=Math.max(...c.map(x=>x.x)),h=Math.min(...c.map(x=>x.y)),p=Math.max(...c.map(x=>x.y)),g=Math.max(.1,u-s),v=Math.max(.1,p-h),y=Math.max(g,v)*.24;return{x:s-y,y:h-y,width:g+y*2,height:v+y*2}}function Ib(o,i,c){const s=ht(i),u=ht(o),h=Tf(i,c),p=ht(u-s);return p>=0&&p<=h}function Fb(o,i,c,s,u,h,p,g){const y=At(0,0,1.1,o),x=At(0,0,1.1,i);return{min:dp(y,c,s,u,h,g),max:dp(x,c,s,u,p,g)}}function Pb(o,i,c,s){return{x:(o.x-i.x)/i.width*c,y:(o.y-i.y)/i.height*s}}function dp(o,i,c,s,u,h){const p=Pb(o,i,c,s),g=Math.max(10,u.length*h*.62),v=h,y=7;return{x:mp(p.x,g/2+y,Math.max(g/2+y,c-g/2-y)),y:mp(p.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function mp(o,i,c){return Math.max(i,Math.min(c,o))}function hp(o){return`${Math.round(o)}`}function ht(o){return Number.isFinite(o)?(o%360+360)%360:0}function Qb(o,i){const c=ht(o),s=ht(i),u=s>=c?s-c:360-c+s;return ht(c+u/2)}function Zb(o,i){if(!i)return o;const c=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((s,u)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((h,p)=>f.jsx("span",{children:h},`${h}-${p}`))},`${s}-${u}`))})}function Wb(o){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return o===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:o===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:o===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function Jb({name:o,vertical:i,rotation:c,color:s,fontSize:u,endFontSize:h,centerInset:p,lowLabel:g,highLabel:v,showEnds:y}){const x=y?Wb(c):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[f.jsx("div",{style:{position:"absolute",inset:0,...p,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:u,textAlign:"center",pointerEvents:"none"},children:Zb(o,i)}),x&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...x.low,fontWeight:800,fontSize:h},children:g}),f.jsx("div",{style:{...x.high,fontWeight:800,fontSize:h},children:v})]})]})}function Wp({name:o,rotation:i,width:c,height:s,value:u,showEnds:h=!1,fillColor:p="var(--red)",lowLabel:g="0",highLabel:v="100"}){const y=i===90||i===270,{fontSize:x,endFontSize:N,centerInset:j}=Vb(o,c,s,y,h);let F,I;i===0?(F={left:0,top:0,bottom:0,width:`${u}%`},I={left:0,top:0}):i===180?(F={right:0,top:0,bottom:0,width:`${u}%`},I={right:0,top:0}):i===90?(F={left:0,right:0,bottom:0,height:`${u}%`},I={left:0,bottom:0}):(F={left:0,right:0,top:0,height:`${u}%`},I={left:0,top:0});const le=G=>f.jsx(Jb,{name:o,vertical:y,rotation:i,color:G,fontSize:x,endFontSize:N,centerInset:j,lowLabel:g,highLabel:v,showEnds:h});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${s}px`},children:le("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:p,overflow:"hidden",...F},children:f.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${s}px`,...I},children:le("var(--white)")})})]})}function e0({control:o,disabled:i,latestValue:c,onSlider:s,width:u,height:h}){const p=U.useRef(null),g=o.sliderMin??0,v=o.sliderMax??100,[y,x]=U.useState(()=>c===void 0?pp(o.sliderRecenter??"none"):_p(c,g,v)),N=U.useRef(null),j=o.rotation;U.useEffect(()=>{c!==void 0&&(x(_p(c,g,v)),N.current=c)},[c,g,v]);function F($){const re=p.current;if(!re)return 0;const ue=re.getBoundingClientRect();let se;return j===0?se=($.clientX-ue.left)/ue.width:j===180?se=1-($.clientX-ue.left)/ue.width:j===90?se=1-($.clientY-ue.top)/ue.height:se=($.clientY-ue.top)/ue.height,Math.max(0,Math.min(1,se))}function I($){i||le(F($))}function le($){const re=Math.round($*100),ue=Math.round(g+(v-g)*$);x(re),ue!==N.current&&(N.current=ue,s(o.name,ue))}function G(){const $=o.sliderRecenter??"none";i||$==="none"||le(pp($)/100)}return f.jsx("div",{ref:p,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:$=>{i||($.preventDefault(),$.currentTarget.setPointerCapture($.pointerId),I($))},onPointerMove:$=>{$.buttons!==0&&I($)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:f.jsx(Wp,{name:o.name,rotation:j,width:u,height:h,value:y,showEnds:!0,lowLabel:String(g),highLabel:String(v)})})}function pp(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function _p(o,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((o-i)/(c-i)*100)))}const n0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},t0=["button","slider","toggle","radar","text"];function l0({unplaced:o,onAdd:i,onClose:c}){const s=U.useMemo(()=>t0.filter(g=>o.some(v=>v.type===g)),[o]),[u,h]=U.useState(s[0]??"button"),p=o.filter(g=>g.type===u);return U.useEffect(()=>{s.length>0&&!s.includes(u)&&h(s[0])},[s,u]),f.jsxs(wn,{title:"Tilføj kontrol",onClose:c,children:[s.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:s.map(g=>f.jsx("button",{type:"button",className:u===g?"active":"",onClick:()=>h(g),children:n0[g]},g))}),f.jsx("div",{className:"add-lists",children:s.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):p.map(g=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(g.name),children:[f.jsx("span",{children:g.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(Yn,{name:"plus",size:22})})]},g.name))})]})}function Jp(o){const[i,c]=U.useState({w:0,h:0}),s=U.useRef(null),u=U.useRef(null);return U.useLayoutEffect(()=>{var v;const h=o.current;if(s.current===h)return;if((v=u.current)==null||v.disconnect(),u.current=null,s.current=h,!h){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const p=()=>{const y={w:h.clientWidth,h:h.clientHeight};c(x=>x.w===y.w&&x.h===y.h?x:y)};p();const g=new ResizeObserver(p);g.observe(h),u.current=g}),U.useEffect(()=>()=>{var h;(h=u.current)==null||h.disconnect(),u.current=null,s.current=null},[]),i}function Va(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const gp=4,bp=5;function yp(o){if(!Va(o))return null;const i=o.centerX2/2,c=o.centerY2/2;return{x0:i-o.spanX/2,x1:i+o.spanX/2,y0:c-o.spanY/2,y1:c+o.spanY/2}}function r0(o,i,c=.02){return o.x0<i.x1-c&&i.x0<o.x1-c&&o.y0<i.y1-c&&i.y0<o.y1-c}function vp(o,i){const c=Fi(o,i);if(!c||o.spanX===null||o.spanY===null)return o;const s=wo(c.cx,c.cy,o.spanX,o.spanY,i);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function xp(o,i){return Math.max(1,Math.min(i.cols-1,o))}function Sp(o,i){return Math.max(1,Math.min(i.rows-1,o))}function a0(){const o=J(A=>A.layout),i=J(A=>A.active),c=J(A=>A.saveLayout),s=J(A=>A.setEditMode),u=J(A=>A.askConfirm),h=!!(i!=null&&i.canEdit),[p,g]=U.useState(()=>o.map(A=>({...A}))),[v,y]=U.useState(null),[x,N]=U.useState(!1),[j,F]=U.useState(null),[I,le]=U.useState(null),[G,$]=U.useState(!1),re=U.useRef(null),ue=Jp(re),se=ue.w>0&&ue.h>0,de=$p(ue.w,ue.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),Ne=U.useMemo(()=>se?hb(de):[],[de,se]),ee=p.filter(Va),W=p.filter(A=>!Va(A)),xe=U.useMemo(()=>{const A=new Set;for(let K=0;K<ee.length;K+=1)for(let P=K+1;P<ee.length;P+=1){const X=yp(ee[K]),He=yp(ee[P]);X&&He&&r0(X,He)&&(A.add(ee[K].name),A.add(ee[P].name))}return A},[ee]),ge=xe.size>0,ve=p.find(A=>A.name===v)??null,ae=U.useMemo(()=>wp(p)!==wp(o),[p,o]),Pe=U.useMemo(()=>{if(!j||!I)return null;const A=p.find(X=>X.name===j);if(!A||A.spanX===null||A.spanY===null)return null;const K=wo(I.cx,I.cy,A.spanX,A.spanY,de),P=Fi({...A,centerX2:K.centerX2,centerY2:K.centerY2},de);return P?{name:A.name,rect:P}:null},[p,j,I,de]);function Ae(A,K){g(P=>P.map(X=>X.name===A?K(X):X))}function Qe(A,K){A.stopPropagation(),y(K.name);const P=Fi(K,de);P&&(F(K.name),le({cx:P.cx,cy:P.cy}),A.currentTarget.setPointerCapture(A.pointerId))}function O(A){if(!j)return;const K=re.current;if(!K)return;const P=K.getBoundingClientRect(),X=K.clientWidth/P.width,He=K.clientHeight/P.height;le({cx:Math.max(0,Math.min(K.clientWidth,(A.clientX-P.left)*X)),cy:Math.max(0,Math.min(K.clientHeight,(A.clientY-P.top)*He))})}function Q(){if(j&&I){const A=p.find(K=>K.name===j);if(A&&A.spanX!==null&&A.spanY!==null){const K=wo(I.cx,I.cy,A.spanX,A.spanY,de);Ae(j,P=>({...P,centerX2:K.centerX2,centerY2:K.centerY2}))}}F(null),le(null)}function ce(A){Ae(A,K=>K.spanX===null||K.spanY===null?{...K,rotation:(K.rotation+270)%360}:vp({...K,rotation:(K.rotation+270)%360,spanX:xp(K.spanY,de),spanY:Sp(K.spanX,de)},de))}function Se(A,K,P){Ae(A,X=>{if(X.spanX===null||X.spanY===null)return X;const He=K==="x"?xp(X.spanX+P,de):X.spanX,Ce=K==="y"?Sp(X.spanY+P,de):X.spanY;return vp({...X,spanX:He,spanY:Ce},de)})}function Ee(A){Ae(A,K=>({...K,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function E(A){N(!1);const K=p.find(X=>X.name===A);if(!K)return;const P=wo(de.areaW/2,de.areaH/2,gp,bp,de);Ae(A,()=>({...K,spanX:gp,spanY:bp,rotation:0,centerX2:P.centerX2,centerY2:P.centerY2})),y(A)}async function L(){ge||($(!0),await c(p),$(!1))}function Z(){if(!ae){s(!1);return}u({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ve&&Va(ve)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:A=>A.stopPropagation(),children:[f.jsx($i,{label:"⟲",title:"Roter",onClick:()=>ce(ve.name)}),f.jsx($i,{label:"W−",title:"Gør smallere",onClick:()=>Se(ve.name,"x",-1),disabled:ve.spanX===null||ve.spanX<=1}),f.jsx($i,{label:"W+",title:"Gør bredere",onClick:()=>Se(ve.name,"x",1),disabled:ve.spanX===null||ve.spanX>=de.cols-1}),f.jsx($i,{label:"H−",title:"Gør lavere",onClick:()=>Se(ve.name,"y",-1),disabled:ve.spanY===null||ve.spanY<=1}),f.jsx($i,{label:"H+",title:"Gør højere",onClick:()=>Se(ve.name,"y",1),disabled:ve.spanY===null||ve.spanY>=de.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Ee(ve.name),"aria-label":"Slet",children:f.jsx(Yn,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:re,style:{touchAction:"none"},onPointerMove:O,onPointerUp:Q,onPointerDown:()=>y(null),children:se&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:de.areaW,height:de.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Ne.map((A,K)=>f.jsx("circle",{cx:A.x,cy:A.y,r:2.5,fill:"rgba(198,80,78,0.45)"},K))}),Pe&&f.jsx("div",{className:"snap-preview",style:{left:Pe.rect.cx,top:Pe.rect.cy,width:Pe.rect.width,height:Pe.rect.height}}),ee.map(A=>{const K=j===A.name&&I,P=Fi(A,de);if(!P)return null;const X=K?I.cx:P.cx,He=K?I.cy:P.cy,Ce={left:X,top:He,width:P.width,height:P.height,outline:v===A.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${xe.has(A.name)?"colliding":""}`,style:Ce,onPointerDown:Ln=>Qe(Ln,A),children:A.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:To(A.name,P.width,P.height)},children:A.name}):A.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:To(A.name,P.width,P.height)},children:f.jsx("span",{children:A.name})}):A.type==="radar"?f.jsx(Zp,{control:A,pings:[],width:P.width,height:P.height,preview:!0}):A.type==="text"?f.jsx(Qp,{message:A.name,width:P.width,height:P.height}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(Wp,{name:A.name,rotation:A.rotation,width:P.width,height:P.height,value:50,showEnds:!0,lowLabel:String(A.sliderMin??0),highLabel:String(A.sliderMax??100),fillColor:xe.has(A.name)?"var(--disabled)":"var(--red)"})})},A.name)}),h&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:A=>A.stopPropagation(),onClick:()=>N(!0),"aria-label":"Tilføj kontrol",children:f.jsx(Yn,{name:"plus",size:24})}),G&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:Z,disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:L,disabled:ge||G,children:G?"Gemmer...":"Gem"})]}),x&&f.jsx(l0,{unplaced:W,onAdd:E,onClose:()=>N(!1)})]})}function wp(o){return JSON.stringify(o.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function $i({label:o,title:i,disabled:c,onClick:s}){return f.jsx("button",{type:"button","aria-label":i,title:i,disabled:c,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function i0(){const o=J(G=>G.layout),i=J(G=>G.editMode),c=J(G=>G.active),s=J(G=>G.sliderValues),u=J(G=>G.toggleValues),h=J(G=>G.radarPings),p=J(G=>G.textValues),g=J(G=>G.toggleSideMenu),v=J(G=>G.sendButton),y=J(G=>G.sendSlider),x=J(G=>G.sendToggle),N=U.useRef(null),j=Jp(N),F=$p(j.w,j.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),I=j.w>0&&j.h>0,le=o.filter(Va);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(Rf,{title:"Kontrol Panel",onMenu:()=>g()}),i?f.jsx(a0,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:N,children:I?le.map(G=>{const $=Fi(G,F);return $?f.jsx(Yb,{control:G,rect:$,disabled:!1,latestValue:G.type==="slider"?s[G.name]:void 0,toggleValue:G.type==="toggle"?u[G.name]:void 0,radarPings:G.type==="radar"?h[G.name]:void 0,textValue:G.type==="text"?p[G.name]:void 0,onButton:v,onSlider:y,onToggle:x},G.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const s0="",o0="",Ep="",qr="";function lf(o){return new Promise(i=>setTimeout(i,o))}class c0{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Ep),await lf(80),await this.transport.write(Ep)}async friendlyRepl(){await this.transport.write(o0)}async softReset(){await this.transport.write(qr)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(i){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await lf(80),await this.transport.write(`\r
`),await lf(40),!(await this.collectUntil(async()=>{await this.transport.write(s0)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(qr)},u=>u.includes(`${qr}${qr}`)||u.includes(`${qr}>`),c);return await this.friendlyRepl().catch(()=>{}),u0(s)}collectUntil(i,c,s){return new Promise((u,h)=>{let p="",g=null;const v=setTimeout(()=>{g==null||g(),h(new Error("Timeout ved USB REPL kommando."))},s);g=this.transport.addDataListener(y=>{p+=y,c(p)&&(clearTimeout(v),g==null||g(),u(p))}),i().catch(y=>{clearTimeout(v),g==null||g(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}}function u0(o){const i=o.indexOf("OK"),c=o.indexOf(qr,i>=0?i:0),s=c>=0?o.indexOf(qr,c+1):-1;if(i<0||c<0)return{output:o.trim(),error:"",raw:o};const u=o.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),h=s>=0?o.slice(c+1,s).trim():"";return{output:u,error:h,raw:o}}const f0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],d0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],ur=d0.flatMap(({board:o,firmwareName:i})=>f0.map(({version:c,date:s,stamp:u,tag:h})=>{const p=`${i}-${u}-${h}.uf2`;return{board:o,version:c,date:s,fileName:p,url:`https://micropython.org/resources/firmware/${p}`}})),rf=512,af=`import builtins as _pkp_builtins
`;function Rl(o){return JSON.stringify(o)}function m0(o){return`bytes.fromhex(${JSON.stringify([...o].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function h0(o,i){return`${o==="/"?"":o.replace(/\/$/,"")}/${i}`}class p0{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${Rl(i)}
for name in os.listdir(base):
    p = (${Rl(i)}.rstrip('/') + '/' + name) if ${Rl(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(c);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(u=>u.trim()).filter(Boolean).map(u=>{const[h,p,g]=u.split("	"),v=p==="dir"||p==="file"?p:"unknown",y=parseInt(g??"",10);return{name:h,path:h0(i,h),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const c=`
import sys
${af}with _pkp_builtins.open(${Rl(i)}, 'rb') as f:
    while True:
        b = f.read(${rf})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(c,1e4);if(s.error)throw new Error(s.error);const u=s.output.replace(/\s+/g,"");return new TextDecoder().decode(_0(u))}async writeText(i,c,s){const u=new TextEncoder().encode(c);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${af}_pkp_builtins.open(${Rl(i)}, 'wb').close()`),u.length===0){s==null||s(100,"Gemt på Pico");return}for(let h=0;h<u.length;h+=rf){const p=u.slice(h,h+rf),g=`
${af}with _pkp_builtins.open(${Rl(i)}, 'ab') as f:
    f.write(${m0(p)})
`,v=await this.repl.exec(g,1e4);if(v.error)throw new Error(v.error);const y=Math.min(h+p.length,u.length);s==null||s(10+Math.round(y/u.length*85),`Gemmer ${y}/${u.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(i,c,s,u={}){const h=`${i}.tmp`;if(await this.writeText(h,c,(v,y)=>s==null?void 0:s(Math.min(70,v*.7),y)),s==null||s(78,"Verificerer fil..."),await this.readText(h)!==c)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);s==null||s(88,"Udskifter fil...");let g=!!u.createBackup;if(g){const v=await this.readText(i).catch(()=>null);g=v!==null&&v!==c}if(g){const v=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,v).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(h,i),s==null||s(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${Rl(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),s=new Set(c.map(N=>N.path.toLowerCase())),u=i.replace(/\\/g,"/"),h=u.lastIndexOf("/"),p=h>=0?u.slice(0,h+1):"/",g=h>=0?u.slice(h+1):u.replace(/^\/+/,""),v=g.lastIndexOf("."),y=v>0?g.slice(0,v):g,x=v>0?g.slice(v):"";for(let N=1;N<1e3;N+=1){const j=`${p}${y}_backup${N}${x}`;if(!s.has(j.toLowerCase()))return j}return`${p}${y}_backup${Date.now()}${x}`}async rename(i,c){const s=await this.repl.exec(`
import os
os.rename(${Rl(i)}, ${Rl(c)})
`);if(s.error)throw new Error(s.error)}}function _0(o){const i=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(o.slice(c*2,c*2+2),16);return i}const g0=`import ubluetooth\r
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
    Control commands (fire-and-forget, routed to on_button/on_slider/on_toggle;\r
    on_write is still available as a raw fallback):\r
      - 'button,<NAME>' / 'slider,<NAME>:<VALUE>' / 'toggle,<NAME>:<0|1>'\r
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
            if command_type == "button":\r
                if self._on_button_callback:\r
                    self._on_button_callback(payload)\r
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
`,b0=`from machine import Pin, time_pulse_us\r
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
        return cms`,y0=`import array, time\r
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
`,v0=`import utime as time\r
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
def on_button(name):\r
    """Kører når der trykkes på en knap i appen."""\r
\r
    if name == 'TAEND':\r
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
`,x0=`# PicoFly.py\r
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
`,S0=`import machine\r
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
        self.initPCA()`,w0=`from machine import Pin\r
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
`,E0=`from machine import Pin\r
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
`,k0=`from machine import Pin, PWM, ADC\r
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
def on_button(name):\r
    global code_change_mode, entered_code\r
\r
    if name == 'AABN DOR':\r
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
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')`,N0=`from machine import Pin\r
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
`,La=[{id:"program:onboard-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med tænd/sluk-knapper og lysstyrke-slider.",kind:"program",content:v0},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:E0},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:N0},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:w0},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:k0},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:g0},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:S0},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:x0},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:b0},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:y0}],R0=11914;function T0(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function M0(){return T0()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class j0{constructor(i={}){fe(this,"port",null);fe(this,"reader",null);fe(this,"writer",null);fe(this,"readLoopDone",null);fe(this,"readLoopActive",!1);fe(this,"disconnecting",!1);fe(this,"buffer","");fe(this,"events");fe(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:R0}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var v,y;const i=this.connected||!!this.port||!!this.reader,c=this.port,s=this.reader,u=this.writer,h=this.readLoopDone,p=s==null?void 0:s.closed.catch(()=>{}),g=u==null?void 0:u.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}h&&await h.catch(()=>{}),await p;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(u==null?void 0:u.close()),await g}catch{try{await(u==null?void 0:u.abort("disconnect"))}catch{}}try{u==null||u.releaseLock()}catch{}this.writer===u&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var s,u,h;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((s=i.writable)==null?void 0:s.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(h=(u=this.events).onLog)==null||h.call(u,"success",`USB-forbindelse oprettet (${A0(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var u,h,p;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((u=i.readable)==null?void 0:u.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:g,done:v}=await s.read();if(v)break;g&&this.consumeText(c.decode(g,{stream:!0}))}}catch(g){this.readLoopActive&&((p=(h=this.events).onLog)==null||p.call(h,"error",g instanceof Error?g.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var h,p;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,u=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await u}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((p=(h=this.events).onDisconnect)==null||p.call(h))}consumeText(i){var c,s,u,h;(s=(c=this.events).onData)==null||s.call(c,i);for(const p of this.dataListeners)p(i);for(this.buffer+=i;this.buffer.includes(`
`);){const p=this.buffer.indexOf(`
`),g=this.buffer.slice(0,p).replace(/\r$/,"");this.buffer=this.buffer.slice(p+1),(h=(u=this.events).onLine)==null||h.call(u,g)}}}function A0(o){const i=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const e_=15e3,kp=64*1024,Np=1e5,n_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),D0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);let O0=0;class C0{constructor(){fe(this,"worker",null);fe(this,"pending",null);fe(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,u=c.timeoutMs??e_,h=this.ensureWorker();return new Promise(p=>{const g=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},u);this.pending={id:s,timer:g,onOutput:c.onOutput,resolve:p},h.postMessage({type:"run",id:s,code:B0(i),runtimeUrl:n_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var s;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(s=c.onOutput)==null||s.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}async function z0(o,i={}){const c=typeof i=="number"?i:i.timeoutMs??e_,s=typeof i=="number"?void 0:i.onOutput,u=typeof i=="number"?void 0:i.signal,h=pf(o);if(h.some(v=>v.level==="error"))return{ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1};const p=++O0,g=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return new Promise(v=>{let y=!1;const x=()=>{N({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1})},N=F=>{y||(y=!0,window.clearTimeout(j),u==null||u.removeEventListener("abort",x),g.terminate(),v(F))};if(u!=null&&u.aborted){x();return}u==null||u.addEventListener("abort",x,{once:!0});const j=window.setTimeout(()=>{N({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:h,timedOut:!0,unavailable:!1})},c);g.onmessage=F=>{const I=F.data;if(!(I.id!==p||I.type==="ready")){if(I.type==="stdout"){s==null||s(I.text);return}if(I.type==="unavailable"){N({ok:!1,output:"",error:I.error,issues:h,timedOut:!1,unavailable:!0});return}N({ok:I.ok,output:I.output,error:I.error,issues:h,timedOut:!1,unavailable:!1})}},g.onerror=F=>{N({ok:!1,output:"",error:F.message||"Offline MicroPython fejlede i browser-worker.",issues:h,timedOut:!1,unavailable:!1})},g.postMessage({type:"run",id:p,code:o,runtimeUrl:n_})})}function B0(o){const i=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function pf(o){const i=[],c=new Blob([o]).size;c>kp&&i.push({level:"error",text:`Koden er ${c} bytes. Offline MicroPython kører kun små programmer op til ${kp} bytes.`});const s=o.split(/\r?\n/);for(let u=0;u<s.length;u+=1){const h=u+1,p=_f(s[u]).trim();if(!p)continue;const g=L0(p);g&&D0.has(g)&&i.push({level:"error",line:h,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`});const v=p.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);v&&U0(v)>Np&&i.push({level:"error",line:h,text:`range(...) er for stor til offline kørsel. Brug højst ${Np} gentagelser.`})}for(const u of H0(s))i.push({level:"warning",text:`Funktionen ${u} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return i}function _f(o){let i=null;for(let c=0;c<o.length;c+=1){const s=o[c];if((s==='"'||s==="'")&&o[c-1]!=="\\"&&(i=i===s?null:i??s),s==="#"&&!i)return o.slice(0,c)}return o}function L0(o){const i=o.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Rp(o){const i=o.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function U0(o){const i=Number(o[1]),c=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const p=(c===void 0?i:c)-(c===void 0?0:i);return p>0&&s<0||p<0&&s>0?0:Math.ceil(Math.abs(p/s))}function H0(o){const i=new Set;for(let c=0;c<o.length;c+=1){const s=_f(o[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const u=s[1],h=Rp(o[c]);for(let p=c+1;p<o.length;p+=1){if(!o[p].trim())continue;if(Rp(o[p])<=h)break;if(new RegExp(`\\b${u}\\s*\\(`).test(_f(o[p]))){i.add(u);break}}}return[...i]}const G0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function V0(o,i){var x;const c=o.trim(),s=i.split(/\r?\n/),u=Y0(c),h=u?s[u-1]??"":"",p=q0(s,u),g=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(g))return{simple:"Programmet blev stoppet.",technical:c,line:u};if(/MemoryError/.test(g))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/RecursionError/.test(g))return{simple:`En funktion kalder sig selv for mange gange${u?` omkring linje ${u}`:""}.`,technical:c,line:u};const v=g.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${u?` på linje ${u}`:""}.`,technical:c,line:u};const y=g.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:I0(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${u?` på linje ${u}`:""}.`:`Python kender ikke navnet ${y[1]}${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ZeroDivisionError/.test(g))return{simple:`Kan ikke dividere med 0${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError:\s+unexpected indent/.test(g))return{simple:`Der er for meget indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError/.test(g))return{simple:`Mangler indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ImportError|ModuleNotFoundError/.test(g)){const N=(x=g.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${N?` ${N}`:""}.`,technical:c,line:u}}if(/OSError/.test(g))return/ENOENT|No such file|Errno\s+2/.test(g)?{simple:`Python kan ikke finde filen${u?` på linje ${u}`:""}.`,technical:c,line:u}:/EACCES|permission|denied/i.test(g)?{simple:`Python har ikke adgang til filen eller enheden${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Der opstod en fejl med en fil eller en enhed${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/SyntaxError/.test(g)){if(/invalid syntax/.test(g)&&p.text.trim().endsWith(","))return{simple:`Linje ${p.line??u} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:p.line??u};const N=gf(h,u)??gf(p.text,p.line)??$0(s,u);return N?{simple:`Mangler måske : efter linje ${N.line}.`,technical:c,line:N.line}:u&&p.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${u}.`,technical:c,line:u}:K0(h)?{simple:`Tekst mangler måske citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:X0(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:F0(h)?{simple:`Mangler måske en afsluttende parentes${u?` på linje ${u}`:""}.`,technical:c,line:u}:P0(h)?{simple:`Der er måske en parentes for meget${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en syntaksfejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}return/TypeError/.test(g)?/takes .* positional arguments? but .* given/.test(g)||/function takes/.test(g)?{simple:`En funktion får for mange eller for få værdier${u?` på linje ${u}`:""}.`,technical:c,line:u}:/unsupported operand type/.test(g)?{simple:`To værdier kan ikke bruges sammen på den måde${u?` på linje ${u}`:""}.`,technical:c,line:u}:/not callable/.test(g)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`En værdi har den forkerte type${u?` på linje ${u}`:""}.`,technical:c,line:u}:/IndexError/.test(g)?{simple:`Listen har ikke et element på den plads${u?` på linje ${u}`:""}.`,technical:c,line:u}:/KeyError/.test(g)?{simple:`Ordbogen mangler den nøgle${u?` på linje ${u}`:""}.`,technical:c,line:u}:/AttributeError/.test(g)?{simple:`Den ting har ikke den kommando${u?` på linje ${u}`:""}.`,technical:c,line:u}:/ValueError/.test(g)?/invalid literal for int/.test(g)?{simple:`Teksten kan ikke laves om til et heltal${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Værdien passer ikke her${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en fejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}function Y0(o){var u;const c=(u=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:u[1];if(!c)return;const s=parseInt(c,10);return Number.isFinite(s)&&s>0?s:void 0}function q0(o,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const s=o[c]??"";if(s.trim())return{line:c+1,text:s}}return{text:""}}function gf(o,i){if(!i)return null;const c=o.trim();return!G0.test(c)||c.endsWith(":")?null:{line:i}}function $0(o,i){const c=i?Math.min(o.length,i):o.length,s=Math.max(0,c-4);for(let u=c-1;u>=s;u-=1){const h=gf(o[u]??"",u+1);if(h)return h}return null}function X0(o){const i=(o.match(/'/g)??[]).length,c=(o.match(/"/g)??[]).length;return i%2===1||c%2===1}function K0(o){var s,u;const c=(u=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:u.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function I0(o,i){const c=o.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function F0(o){return t_(o)>0}function P0(o){return t_(o)<0}function t_(o){let i=0,c=null;for(let s=0;s<o.length;s+=1){const u=o[s];if((u==='"'||u==="'")&&o[s-1]!=="\\"){c=c===u?null:c??u;continue}c||((u==="("||u==="["||u==="{")&&(i+=1),(u===")"||u==="]"||u==="}")&&(i-=1))}return i}const bf="/min_kode.py",l_=`print('Hej fra Pico Kontrol Panel')
`,Tp=0,Xi="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function mt(o,i){return`${o}:${i}`}function Q0(o){return new Promise(i=>window.setTimeout(i,o))}function Z0(){const o=J(d=>d.toggleSideMenu),i=J(d=>d.askConfirm),c=J(d=>d.picoIdeOrigin),s=J(d=>d.active),u=J(d=>d.isBleConnected),h=J(d=>d.bleListFiles),p=J(d=>d.bleReadText),g=J(d=>d.bleWriteText),v=J(d=>d.bleDeleteFile),y=J(d=>d.bleRestartAndReconnect),[x,N]=U.useState(!1),[j,F]=U.useState(!1),[I,le]=U.useState([]),[G,$]=U.useState(!1),[re,ue]=U.useState([]),[se,de]=U.useState(null),[Ne,ee]=U.useState(()=>cf(Zu())),[W,xe]=U.useState(bf),[ge,ve]=U.useState("local"),[ae,Pe]=U.useState(()=>{var d;return((d=cf(Zu()).find(b=>b.path===bf))==null?void 0:d.content)??l_}),[Ae,Qe]=U.useState([]),[O,Q]=U.useState(!1),[ce,Se]=U.useState(""),[Ee,E]=U.useState(""),[L,Z]=U.useState(null),[A,K]=U.useState(!1),[P,X]=U.useState(null),[He,Ce]=U.useState(!1),[Ln,Vt]=U.useState({}),[_e,gn]=U.useState(!1),[En,De]=U.useState(0),[kn,Ot]=U.useState(()=>{var d,b;return((d=ur.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((b=ur[0])==null?void 0:b.board)??""}),[zn,Tl]=U.useState(()=>{var d,b;return((d=ur.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((b=ur[0])==null?void 0:b.version)??""}),[Ml,pt]=U.useState(!1),[Xr,jl]=U.useState({top:0,left:0}),[bn,fr]=U.useState(!1),[Kr,Xa]=U.useState(!1),[dr,Wn]=U.useState(!0),[_t,Jt]=U.useState(""),[Ir,mr]=U.useState([]),[yn,Jn]=U.useState(null),[Rn,Al]=U.useState(!1),[Dl,Ol]=U.useState({}),[Yt,Un]=U.useState({}),[Ie,Tn]=U.useState(null),[fn,Hn]=U.useState(null),[Oo,Ka]=U.useState(""),[qt,hr]=U.useState(()=>ep().clearTerminalOnRun),[el,Ji]=U.useState(()=>ep().simplifiedErrors),[Fr,es]=U.useState(()=>typeof window<"u"&&window.innerWidth<Tp),Cl=U.useRef(null),gt=U.useRef(null),dn=U.useRef(null),Ia=U.useRef(null),et=U.useRef(null),rn=U.useRef(null),an=U.useRef(null),qn=U.useRef(!1),$t=U.useRef(!1),Pr=U.useRef(!1),pr=U.useRef(null),Qr=U.useRef(null),$n=U.useRef(null),nl=U.useRef(null),Xn=U.useRef(0),nt=U.useRef(null),bt=U.useRef(null),tl=U.useRef(null),Je=U.useRef(null),ll=M0(),he=c==="control"&&!!s&&u(),Ct=he?(s==null?void 0:s.deviceID)??"ble":null,zl=Math.max(1,ae.split(`
`).length),Co=new Blob([ae]).size,ns=ge==="pico"?"Picoen":"browseren",ts=U.useMemo(()=>[...new Set(ur.map(d=>d.board))],[]),_r=U.useMemo(()=>ur.filter(d=>d.board===kn),[kn]),zt=ur.find(d=>d.board===kn&&d.version===zn)??_r[0]??ur[0],yt=ge==="pico",tt=yt?bn:Kr,Mn=yt&&bn&&x&&!he,ls=Rn||tt&&!Mn,rs=Mn?"Input til kørende Pico-kode":yt?"Pico MicroPython":"Browser-MicroPython",gr=U.useMemo(()=>{const d=new j0({onLine:b=>{if($t.current)return;const S=b.trimEnd();if(Pr.current&&S.trim()){q("info",S);return}if(qn.current&&S.trim().startsWith(">>>")){fr(!1),qn.current=!1,q("success","Pico-koden er færdig.");return}qn.current&&S.trim()&&!S.includes(">>>")&&!S.includes("raw REPL")&&q("info",S)},onLog:q,onDisconnect:()=>{N(!1),fr(!1),Al(!1),qn.current=!1,Pr.current=!1,Wr(),q("warning","USB-forbindelse lukket.")}});return Cl.current=d,d},[]);function q(d,b){le(S=>[...S.slice(-140),{level:d,text:b}])}function rl(d,b=ae,S="error"){const C=V0(d,b);le(z=>[...z.slice(-140),{level:S,text:C.simple,technical:C.technical}])}function vn(d,b,S=ge){xe(d),ve(S),Pe(b),Un(C=>({...C,[mt(S,d)]:b}))}function Gn(d,b="pico"){xe(d),ve(b),Pe(""),Tn(null),jl({top:0,left:0})}function al(d,b=(S=>(S=et.current)==null?void 0:S.selectionStart)()??d.length){Pe(d),Un(C=>({...C,[mt(ge,W)]:d})),Ka(""),wr(d,b)}function Zr(d,b=ge){Un(S=>{const C=mt(b,d);if(!(C in S))return S;const z={...S};return delete z[C],z})}function Fa(){return Dl[W]===ae}function xn(d,b){Ol(S=>({...S,[d]:b}))}function Pa(d,b){xn(d,b),Un(S=>({...S,[mt("pico",d)]:b})),ge==="pico"&&W===d&&Pe(b)}function Wr(){ue([]),Qe([]),Ol({}),Un({}),Tn(null),xe(d=>{const b=cf(Zu());if(b.find(z=>z.path===d))return d;const C=b[0];return ve("local"),Pe(C.content),C.path})}function sn(d){br(),X({value:100,label:d}),Je.current=window.setTimeout(()=>{Je.current=null,X(null)},900)}function br(){Je.current!==null&&(window.clearTimeout(Je.current),Je.current=null)}function as(){return P?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(P.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:P.label}),f.jsxs("strong",{children:[Math.round(P.value),"%"]}),P.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:is,"aria-label":"Stop handling",title:"Stop",children:f.jsx(Yn,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,P.value))}%`}})})]}):null}function is(){$n.current&&il("Stopper læsning...",!0,!0)}function il(d="Stopper læsning...",b=!1,S=!1){var C;br(),bt.current=null,Xn.current+=1,(C=$n.current)==null||C.abort(),$n.current=null,nt.current=null,de(null),$(!1),X(b?{value:(P==null?void 0:P.value)??0,label:d,cancellable:!1}:null),S&&q("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function zo(d){var b;if(!(nt.current===d||bt.current===d)){if(bt.current=d,nl.current){Xn.current+=1,(b=$n.current)==null||b.abort(),$n.current=null,nt.current=null,Gn(d),de(d),$(!0),br(),X({value:2,label:`Skifter til ${ze(d)}...`,cancellable:!0});return}ss()}}function ss(){if(nl.current)return;const d=bt.current;if(!d)return;bt.current=null;const b=Xn.current+1;Xn.current=b;const S=new AbortController;$n.current=S,nt.current=d,Gn(d),de(d),$(!0),br(),X({value:12,label:`Indlæser ${ze(d)}...`,cancellable:!0});const C=(async()=>{try{const z=await p(d,(te,be)=>{Xn.current===b&&X({value:te,label:be,cancellable:!0})},S.signal);if(S.signal.aborted||Xn.current!==b)return;vn(d,z,"pico"),xn(d,z),sn("Fil indlæst")}catch(z){if(Xn.current!==b)return;ey(z)||S.signal.aborted?q("info",`Stoppede læsning af ${ze(d)}.`):(X(null),q("error",z instanceof Error?z.message:"BLE læsning fejlede."))}})();nl.current=C,C.finally(()=>{if(nl.current!==C)return;nl.current=null,$n.current===S&&($n.current=null),nt.current===d&&(nt.current=null),!!bt.current||(de(null),$(!1),S.signal.aborted&&X(null)),ss()})}async function sl(d){const b=$t.current;$t.current=!0;try{return await d()}finally{$t.current=b}}U.useEffect(()=>{if(!dr)return;const d=rn.current;d&&(d.scrollTop=d.scrollHeight)},[I,dr]),U.useEffect(()=>{eb({clearTerminalOnRun:qt,simplifiedErrors:el})},[qt,el]),U.useEffect(()=>{var d;_r.some(b=>b.version===zn)||Tl(((d=_r[0])==null?void 0:d.version)??"")},[_r,zn]),U.useEffect(()=>{const d=()=>es(window.innerWidth<Tp);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),U.useEffect(()=>{const d=()=>{const b=Cl.current;gt.current=null,dn.current=null,Cl.current=null,b==null||b.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var b;br(),(b=pr.current)==null||b.dispose(),pr.current=null,window.removeEventListener("pagehide",d),d()}},[]),U.useEffect(()=>{const d=b=>{!(b.ctrlKey||b.metaKey)||b.key.toLowerCase()!=="s"||(b.preventDefault(),!G&&W.trim()&&!Fr&&!A&&!L&&!O&&Ja())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ge,he,G,x,ae,W,Fr,A,L,O]);function Kn(d,b,S){ee(C=>{const z=iy(C,d,b,S);return Wu(z),z})}const Jr=uy(re,Ne,Yt,x||he);U.useEffect(()=>{he&&nn()},[he]),U.useEffect(()=>{const d=tl.current;d&&d!==Ct&&Wr(),tl.current=Ct},[Ct]);async function Qa(){if(ll.supported){F(!0);try{await gr.requestAndConnect();const d=new c0(gr);gt.current=d,dn.current=new p0(d),N(!0),De(0),await d.interrupt(),await Bl(d),q("success","Sendte stop-signal til Pico-terminalen."),await Za(dn.current),await ea(dn.current)}catch(d){q("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await gr.disconnect()}catch(b){q("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.");return}De(b=>{const S=b+1;return S>=3&&(q("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),gn(!0)),S}),N(!1)}finally{F(!1)}}}async function Bl(d){const b=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(b.error||!b.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Ll(){var d;try{await((d=Cl.current)==null?void 0:d.disconnect()),gt.current=null,dn.current=null,N(!1),Wr()}catch(b){q("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.")}}async function Bt(d){const b=dn.current;if(b){$(!0),$t.current=!0;try{await d(b)}catch(S){X(null),q("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{$t.current=!1,$(!1)}}}async function nn(d=!0){if(he){$(!0);try{const b=await h();ue(b),d&&q("success",`Indlæste ${b.length} filer fra Pico via Bluetooth.`)}catch(b){q("error",b instanceof Error?b.message:"BLE filhandling fejlede.")}finally{$(!1)}return}await Za(dn.current,d)}async function Za(d,b=!0){if(d){$(!0);try{const S=await sl(()=>d.list("/"));ue(S),b&&q("success",`Indlæste ${S.length} filer fra Pico.`)}catch(S){q("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{$(!1)}}}async function Lt(){if(he){$(!0),X({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await vt((b,S)=>X({value:b,label:S}));Qe(d),sn("Fil-tjek færdigt")}catch(d){X(null),q("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{$(!1)}return}await ea(dn.current)}async function vt(d){const b=[],S=La.filter(z=>z.kind==="library"&&!Yr(z));let C=0;for(const z of La){if(z.kind==="program"){b.push({...z,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Yr(z)){b.push({...z,status:"unknown",detail:"Opdateres via USB"});continue}try{const te=C/Math.max(1,S.length)*100,be=100/Math.max(1,S.length);q("info",`Tjekker ${z.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,te),`Tjekker ${z.label} på Pico...`);const Ve=await p(z.path,(lt,cl)=>{d==null||d(Math.min(95,te+lt/100*be),`${z.label}: ${cl}`)}),on=Ba(Ve)===Ba(z.content);b.push({...z,status:on?"ok":"outdated",detail:on?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{b.push({...z,status:"missing",detail:"Mangler på Pico"})}finally{C+=1}}return d==null||d(100,"Fil-tjek færdigt"),b}async function ea(d){if(d){$(!0);try{const b=await sl(()=>Ul(d)),S=b;Qe(S)}catch(b){q("error",b instanceof Error?b.message:"Runtime check fejlede.")}finally{$(!1)}}}async function Ul(d){if(!d)return[];const b=[];for(const S of La){if(S.kind==="program"){b.push({...S,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const C=await d.readText(S.path),z=Ba(C)===Ba(S.content);b.push({...S,status:z?"ok":"outdated",detail:z?"Matcher appens version":"Matcher ikke appens version"})}catch{b.push({...S,status:"missing",detail:"Mangler på Pico"})}}return b}async function Xt(d=W){if(he){zo(d);return}de(d),await Bt(async b=>{X({value:12,label:`Indlæser ${ze(d)}...`});const S=await Wa(b,d);vn(d,S,"pico"),xn(d,S),sn("Fil indlæst")}),de(null)}async function Wa(d,b){var S;try{return await d.readText(b)}catch(C){await((S=gt.current)==null?void 0:S.stop().catch(()=>{})),await Q0(120);try{return await d.readText(b)}catch{throw C}}}function na(){K(!0)}async function Ja(){if(ge==="pico"){if(!x&&!he){q("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Hl();return}yr()}function yr(){if(Ua(W)){q("error",Xi);return}Kn(W,ae,!1),ve("local"),Un(d=>({...d,[mt("local",W)]:ae})),K(!1),q("success",`Gemte ${ze(W)} lokalt.`)}async function Hl(){if(K(!1),Ua(W))return X(null),q("error",Xi),!1;if(X({value:0,label:"Starter gemning..."}),he){$(!0);try{return await g(W,ae,(b,S)=>X({value:b,label:S})),xn(W,ae),ve("pico"),Un(b=>({...b,[mt("pico",W)]:ae})),sn("Gemt på Pico via Bluetooth"),q("success",`Gemte ${ze(W)} på Pico via Bluetooth.`),xo(W)&&(pt(!0),q("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await nn(!1),!0}catch(b){return X(null),q("error",b instanceof Error?b.message:"BLE gem fejlede."),!1}finally{$(!1)}}if(!dn.current)return X(null),!1;let d=!1;return await Bt(async b=>{ol(W,"pico")?await b.replaceTextSafely(W,ae,(S,C)=>X({value:S,label:C})):await b.writeText(W,ae,(S,C)=>X({value:S,label:C})),xn(W,ae),ve("pico"),Un(S=>({...S,[mt("pico",W)]:ae})),sn("Gemt på Pico via USB"),q("success",`Gemte ${W}.`),await nn(),await Lt(),d=!0}),d}function os(){jn(ze(W),ae),K(!1),q("success",`Downloadede ${ze(W)}.`)}function jn(d,b){const S=new Blob([b],{type:"text/plain;charset=utf-8"}),C=URL.createObjectURL(S),z=document.createElement("a");z.href=C,z.download=d,z.click(),URL.revokeObjectURL(C)}async function Kt(d){$(!0),pt(!1),X({value:10,label:"Genstarter Pico..."});try{await y(d)?(sn("Pico genforbundet"),q("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await nn()):(X(null),q("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(b){X(null),q("error",b instanceof Error?b.message:"Genstart/genforbindelse mislykkedes.")}finally{$(!1)}}function vr(d){var te;const b=d??{path:W,source:ge},S=b.source==="pico"?"Pico":"browser",C=b.source==="pico"?(d==null?void 0:d.versions.length)??((te=yf(re).get(b.path))==null?void 0:te.length)??0:0,z=C>0?` Det sletter også filens versionshistorik (${C} gemte versioner).`:"";Z(null),i({title:"Slet fil",message:`Vil du slette ${ze(b.path)} fra ${S}?${z}`,confirmLabel:"Slet",onConfirm:()=>{xr(b)}})}async function xr(d){const b=d.path,S=d.source,C=b===W&&S===ge;if(S==="local"){const be=Ne.filter(Ve=>Ve.path!==b);ee(be),Wu(be),C&&vn(b,"","local"),Zr(b,"local"),q("warning",`Slettede ${ze(b)} fra browseren.`);return}const z=yf(re).get(b)??[],te=[b,...z.map(be=>be.path)];if(he){$(!0);try{for(const Ve of te)await v(Ve);Ol(Ve=>{const on={...Ve};for(const lt of te)delete on[lt];return on}),C&&vn(b,"","pico");for(const Ve of te)Zr(Ve,"pico");const be=z.length>0?` og ${z.length} gemte versioner`:"";q("warning",`Slettede ${ze(b)}${be} på Pico via Bluetooth.`),await nn()}catch(be){q("error",be instanceof Error?be.message:"BLE sletning fejlede.")}finally{$(!1)}return}if(!dn.current){q("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await Bt(async be=>{for(const on of te)await be.delete(on);Ol(on=>{const lt={...on};for(const cl of te)delete lt[cl];return lt});const Ve=z.length>0?` og ${z.length} gemte versioner`:"";q("warning",`Slettede ${b}${Ve}.`),C&&vn(b,"","pico");for(const on of te)Zr(on,"pico");await nn(),await Lt()})}async function Bo(d){if(!d)return;const b=W0(d.name);if(!b){q("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Ua(b)){q("error",Xi);return}if(d.size>128*1024){q("error","Filen er for stor til Pico-værkstedet.");return}const S=await d.text();if(ge==="local"){Kn(b,S,!0),vn(b,S,"local"),q("success",`Importerede ${ze(b)} i browseren.`);return}if(!x&&!he){q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&Yr({path:b})){q("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(X({value:0,label:"Uploader fil til Pico..."}),he){$(!0);try{await g(b,S,(z,te)=>X({value:z,label:te})),xn(b,S),vn(b,S,"pico"),sn("Fil uploadet til Pico"),q("success",`Importerede ${ze(b)} på Pico via Bluetooth.`),await nn()}catch(z){X(null),q("error",z instanceof Error?z.message:"Kunne ikke importere filen til Pico.")}finally{$(!1)}return}if(!dn.current){X(null),q("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Bt(async z=>{ol(b,"pico")?await z.replaceTextSafely(b,S,(te,be)=>X({value:te,label:be})):await z.writeText(b,S,(te,be)=>X({value:te,label:be})),xn(b,S),vn(b,S,"pico"),sn("Fil uploadet til Pico"),q("success",`Importerede ${ze(b)} på Pico.`),await nn(),await Lt()})}async function ei(){Se(""),Q(!0)}function ni(){const d=Mp(ce);if(!d)return;if(Ua(d)){q("error",Xi);return}const b=ge;if(ol(d,b)){q("error",`Der findes allerede en fil med navnet ${ze(d)} i ${b==="pico"?"Pico":"browseren"}.`);return}if(b==="local"){Kn(d,"",!1),vn(d,"","local"),Q(!1),q("success",`Oprettede ${ze(d)} i browseren.`);return}Sr(d)}async function Sr(d){if(!x&&!he){q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Q(!1),X({value:0,label:"Opretter fil på Pico..."}),he){$(!0);try{await g(d,"",(b,S)=>X({value:b,label:S})),xn(d,""),vn(d,"","pico"),sn("Fil oprettet på Pico"),q("success",`Oprettede ${ze(d)} på Pico via Bluetooth.`),await nn()}catch(b){X(null),q("error",b instanceof Error?b.message:"Kunne ikke oprette fil på Pico.")}finally{$(!1)}return}if(!dn.current){X(null),q("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Bt(async b=>{await b.writeText(d,"",(S,C)=>X({value:S,label:C})),xn(d,""),vn(d,"","pico"),sn("Fil oprettet på Pico"),q("success",`Oprettede ${ze(d)} på Pico.`),await nn()})}function ta(d){d.type==="file"&&(Z(d),E(J0(d.path)))}async function cs(d){if(!L||L.source!=="pico")return;const b=L.path;if(Z(null),X({value:0,label:"Gendanner version..."}),he){$(!0);try{const S=await p(d.path);await g(b,S,(C,z)=>X({value:C,label:z})),xn(b,S),vn(b,S,"pico"),sn("Version gendannet"),await nn(!1)}catch(S){X(null),q("error",S instanceof Error?S.message:"Kunne ikke gendanne versionen.")}finally{$(!1)}return}dn.current&&await Bt(async S=>{await S.replaceTextSafely(b,await S.readText(d.path),(z,te)=>X({value:z,label:te}));const C=await S.readText(b);xn(b,C),vn(b,C,"pico"),sn("Version gendannet"),await nn()})}function Lo(d){i({title:"Slet version",message:`Vil du slette ${ze(d.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Uo(d)}})}async function Uo(d){if(he){$(!0);try{await v(d.path),await nn(!1),Z(b=>b&&{...b,versions:b.versions.filter(S=>S.path!==d.path)})}catch(b){q("error",b instanceof Error?b.message:"Kunne ikke slette versionen.")}finally{$(!1)}return}dn.current&&await Bt(async b=>{await b.delete(d.path),await nn(!1),Z(S=>S&&{...S,versions:S.versions.filter(C=>C.path!==d.path)})})}async function Ho(){if(!L)return;const d=L,b=sf(Ee,Ki(d.path));if(!b||b===d.path)return;if(Ua(b)){q("error",Xi);return}if(ol(b,d.source)){q("error",`Der findes allerede en fil med navnet ${ze(b)}.`);return}const S=d.source==="local",C=d.source==="pico";if(he&&C&&(xo(d.path)||xo(b))){q("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}$(!0);try{if(C)if(he){const z=Dl[d.path]??await p(d.path);await g(b,z,(te,be)=>X({value:te,label:be})),await v(d.path),Ol(te=>({...Lp(te,d.path,b),[b]:z}))}else dn.current&&(await sl(()=>dn.current.rename(d.path,b)),Ol(z=>Lp(z,d.path,b)));S&&ee(z=>{const te=z.map(be=>be.path===d.path?{...be,path:b,updatedAt:Date.now()}:be);return Wu(te),te}),W===d.path&&ge===d.source&&xe(b),Un(z=>my(z,d.source,d.path,b)),Z(null),E(""),q("success",`Omdøbte ${ze(d.path)} til ${ze(b)}.`),C&&await nn()}catch(z){q("error",z instanceof Error?z.message:"Kunne ikke omdøbe filen.")}finally{X(null),$(!1)}}function ol(d,b){return b==="pico"?re.some(S=>S.path===d):Ne.some(S=>S.path===d)}async function Go(d,b){if(!ol(d,"pico"))return;const S=oy(d,re),C=Dl[d]??await p(d);b!==void 0&&Ba(C)===Ba(b)||await g(S,C)}function Vo(d){if(d.type!=="file"){he&&il(void 0,!1),xe(d.path),ve(d.source);return}if(he&&Yr(d)){q("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){he&&il(void 0,!1);const S=Ne.find(C=>C.path===d.path);vn(d.path,Yt[mt("local",d.path)]??(S==null?void 0:S.content)??"","local");return}const b=mt("pico",d.path);if(Object.prototype.hasOwnProperty.call(Yt,b)){he&&il(void 0,!1),vn(d.path,Yt[b],"pico");return}if(Object.prototype.hasOwnProperty.call(Dl,d.path)){he&&il(void 0,!1),vn(d.path,Dl[d.path],"pico");return}Xt(d.path)}async function us(){if(!x&&!he){const d=jp();Qe(d),Vt(Ap(d)),Ce(!0),X(null);return}$(!0),X({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),q("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Ae.length>0?Ae:he?await vt((b,S)=>X({value:b,label:S})):await sl(()=>Ul(dn.current));Qe(d),Vt(Ap(d)),Ce(!0),X(null)}catch(d){X(null),q("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{$(!1)}}async function Yo(){if(Ce(!1),he){$(!0);try{const b=(Ae.length>0?Ae:La.map(C=>({...C,status:"unknown",detail:"Ikke tjekket"}))).filter(C=>Ln[C.id]&&!Yr(C));if(b.length===0){q("info","Ingen filer valgt til installation.");return}let S=null;X({value:0,label:"Starter installation..."});for(const[C,z]of b.entries()){q("info",`Installerer ${z.label} via Bluetooth...`);const te=C/b.length*100,be=100/b.length;await Go(z.path,z.content),await g(z.path,z.content,(Ve,on)=>{X({value:Math.min(99,te+Ve/100*be),label:`${z.label}: ${on}`})}),Pa(z.path,z.content),q("success",`Installerede ${z.label}.`),z.kind==="library"&&(S=z),xo(z.path)&&pt(!0)}sn("Installation færdig"),await nn(!1),await Lt(),S&&ms(S)}catch(d){X(null),q("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{$(!1)}return}await Bt(async d=>{const S=(Ae.length>0?Ae:La.map(z=>({...z,status:"unknown",detail:"Ikke tjekket"}))).filter(z=>Ln[z.id]);if(S.length===0){q("info","Ingen filer valgt til installation.");return}let C=null;X({value:0,label:"Starter installation..."});for(const[z,te]of S.entries()){q("info",`Installerer ${te.label}...`);const be=z/S.length*100,Ve=100/S.length;await d.replaceTextSafely(te.path,te.content,(on,lt)=>{X({value:Math.min(99,be+on/100*Ve),label:`${te.label}: ${lt}`})},{createBackup:!0}),Pa(te.path,te.content),q("success",`Installerede ${te.label}.`),te.kind==="library"&&(C=te)}sn("Installation færdig"),await nn(!1),await Lt(),C&&ms(C)})}function fs(){return(Ae.length>0?Ae:jp()).filter(b=>Ln[b.id])}function ds(){const d=fs();if(d.length===0){q("info","Ingen filer valgt.");return}for(const b of d)Kn(b.path,b.content,!1);Ce(!1),q("success",`Gemte ${d.length} filer i browseren.`)}function qo(){const d=fs();if(d.length===0){q("info","Ingen filer valgt.");return}d.forEach((b,S)=>{window.setTimeout(()=>{jn(ze(b.path),b.content)},S*120)}),Ce(!1),q("success",`Starter download af ${d.length} filer.`)}function ms(d){vn(d.path,d.content,"pico"),xn(d.path,d.content),q("info",`Åbnede ${d.label} i editoren.`)}function $o(d,b){Vt(S=>{if(d.kind!=="program")return{...S,[d.id]:b};const C={...S};for(const z of Ae)z.kind==="program"&&(C[z.id]=!1);return C[d.id]=b,C})}async function Xo(){if(Qo(),he&&ge==="pico"){q("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ge==="local"){await ti();return}const d=gt.current;if(!d){q("error",`${ze(W)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(W.endsWith(".py")){if(!Fa()&&(q("info",`${ze(W)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Hl())){q("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(G)return;fr(!0),qn.current=!0,Wn(!0);try{await d.runFile(W),q("success",`Kører ${ze(W)}. Brug Stop for at afbryde.`)}catch(b){fr(!1),qn.current=!1,q("error",b instanceof Error?b.message:"Kunne ikke starte koden.")}return}$(!0);try{const b=await d.exec(ae,2e4);b.output.trim()&&q("info",b.output),b.error.trim()&&rl(b.error,ae),!b.output.trim()&&!b.error.trim()&&q("success","Koden kørte uden output.")}catch(b){q("error",b instanceof Error?b.message:"Kunne ikke køre koden.")}finally{$(!1)}}async function ti(){const d=pf(ae);if(d.some(S=>S.level==="error")){for(const S of d){const C=S.line?`Linje ${S.line}: `:"";q(S.level==="error"?"error":"warning",`${C}${S.text}`)}return}const b=new AbortController;Qr.current=b,$(!0),Xa(!0),Wn(!0),q("info",x?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const S=[],C=await z0(ae,{signal:b.signal,onOutput:Ve=>{S.push(Ve),q("info",Ve)}});for(const Ve of C.issues){const on=Ve.line?`Linje ${Ve.line}: `:"";q(Ve.level==="error"?"error":"warning",`${on}${Ve.text}`)}const z=[...S,C.output].filter(Boolean).join(`
`).trim(),te=C.output.trim();!C.error.trim()&&ny(z)?rl(z,ae):(te&&q("info",te),C.error.trim()&&rl(C.error,ae,C.unavailable?"warning":"error")),C.ok&&!z&&!C.error.trim()&&q("success","Offline MicroPython kørte uden output.")}finally{Qr.current=null,Xa(!1),$(!1)}}async function Ko(){var b,S;if(Kr){(b=Qr.current)==null||b.abort(),q("warning","Stoppede offline MicroPython."),Wn(!0);return}if(!yt&&Rn){(S=pr.current)==null||S.reset(),Al(!1),q("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Wn(!0);return}const d=gt.current;if(d)try{await d.stop(),q("warning","Stoppede koden på Pico.")}catch(C){q("error",C instanceof Error?C.message:"Kunne ikke stoppe koden.")}finally{fr(!1),qn.current=!1,Wn(!0)}}function Io(){const d=rn.current;if(!d)return;const b=d.scrollHeight-d.scrollTop-d.clientHeight<12;Wn(b)}function Fo(){le([]),Wn(!0)}async function li(){const d=_t.trimEnd();if(!d.trim())return;if(mr(S=>(S.at(-1)===d?S:[...S,d]).slice(-80)),Jn(null),Hn(null),Mn){const S=gt.current;if(!S){q("warning","Pico-terminalen er ikke forbundet."),It();return}Jt(""),Wn(!0);try{await S.sendProgramInput(d)}catch(C){q("error",C instanceof Error?C.message:"Kunne ikke sende input til Pico-koden.")}finally{It()}return}if(tt){q("warning",yt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),It();return}if(!yt){const S=pf(d);if(S.some(z=>z.level==="error")){for(const z of S){const te=z.line?"Linje "+z.line+": ":"";q(z.level==="error"?"error":"warning",te+z.text)}It();return}const C=pr.current??new C0;pr.current=C,Jt(""),Al(!0),Wn(!0),q("info",">>> "+d);try{let z=!1;const te=await C.send(d,{timeoutMs:15e3,onOutput:Ve=>{z=!0,q("info",Ve)}}),be=te.output.trim();be&&!z&&q("info",be),te.error.trim()&&rl(te.error,d,te.unavailable?"warning":"error")}catch(z){q("error",z instanceof Error?z.message:"Browser-MicroPython-terminalen fejlede.")}finally{Al(!1),It()}return}if(he){q("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),It();return}const b=gt.current;if(!x||!b){q("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),It();return}Jt(""),Al(!0),Wn(!0),Pr.current=!0,q("info",">>> "+d);try{await b.sendFriendlyLine(d)}catch(S){Pr.current=!1,q("error",S instanceof Error?S.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Al(!1),It()}}function It(){window.requestAnimationFrame(()=>{const d=an.current;if(!d||d.disabled)return;d.focus();const b=d.value.length;d.selectionStart=b,d.selectionEnd=b})}function hs(d,b,S){return S.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:d}),f.jsx("p",{children:b})]}),S.map(C=>{const z=he&&Yr(C);return f.jsxs("label",{className:`ide-install-row ${z?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!Ln[C.id],disabled:z,onChange:te=>$o(C,te.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[Po(C),(C.kind==="library"||!x&&!he)&&f.jsx("em",{className:`ide-install-status status-${C.status}`,children:z?"USB":cy(C.status)})]}),f.jsxs("small",{children:[C.description,!x&&!he?` ${C.detail}`:""]})]})]},C.id)})]})}function Po(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Qo(){qt&&le([]),Wn(!0)}function Zo(d,b){const S=d.indexOf(`
`,b);return S===-1?d.length:S}function wr(d,b){const S=Op(d,b);if(!S||S.query.length<1){Tn(null);return}const C=S.query.toLowerCase(),z=Dp.filter(be=>be.label.toLowerCase().startsWith(C)&&!of(be,S.query)).slice(0,8),te=Cp(et.current,S.start);Tn(z.length>0&&te?{items:z,selected:0,start:S.start,end:b,position:te}:null)}function la(d,b){const S=Op(d,b);if(!S||S.query.length<1){Hn(null);return}const C=S.query.toLowerCase(),z=Dp.filter(be=>be.label.toLowerCase().startsWith(C)&&!of(be,S.query)).slice(0,8),te=Cp(an.current,S.start);Hn(z.length>0&&te?{items:z,selected:0,start:S.start,end:b,position:te}:null)}function ps(d){const b=d.value.slice(d.selectionStart,d.selectionEnd);Ka(ly(b)?b:"")}function ri(d=Ie==null?void 0:Ie.items[Ie.selected]){if(!d||!Ie)return;const b=ae.slice(0,Ie.start)+d.insert+ae.slice(Ie.end),S=Ie.start+d.insert.length-(d.insert.endsWith("()")?1:0);Pe(b),Un(C=>({...C,[mt(ge,W)]:b})),Tn(null),window.requestAnimationFrame(()=>{const C=et.current;C&&(C.focus(),C.selectionStart=S,C.selectionEnd=S,wr(b,S))})}function ra(d=fn==null?void 0:fn.items[fn.selected]){if(!d||!fn)return;const b=_t.slice(0,fn.start)+d.insert+_t.slice(fn.end),S=fn.start+d.insert.length-(d.insert.endsWith("()")?1:0);Jt(b),Hn(null),window.requestAnimationFrame(()=>{const C=an.current;C&&(C.focus(),C.selectionStart=S,C.selectionEnd=S,la(b,S))})}function Er(d){var cl;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!G&&W.trim()&&Ja();return}if(Ie){if(d.key==="ArrowDown"){d.preventDefault(),Tn(Be=>Be&&{...Be,selected:(Be.selected+1)%Be.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Tn(Be=>Be&&{...Be,selected:(Be.selected-1+Be.items.length)%Be.items.length});return}if(d.key==="Tab"){d.preventDefault(),ri();return}if(d.key==="Enter"){if(!(Ie.items[Ie.selected]&&of(Ie.items[Ie.selected],ae.slice(Ie.start,Ie.end)))){d.preventDefault(),ri();return}Tn(null)}if(d.key==="Escape"){d.preventDefault(),Tn(null);return}}if(d.key==="Enter"){d.preventDefault();const Be=d.currentTarget,rt=Be.selectionStart,ai=Be.selectionEnd,Ft=ae.lastIndexOf(`
`,rt-1)+1,ul=ae.slice(Ft,rt),aa=((cl=ul.match(/^[ \t]*/))==null?void 0:cl[0])??"",kr=ul.trimEnd().endsWith(":")?"    ":"",Nr=`
${aa}${kr}`,ia=ae.slice(0,rt)+Nr+ae.slice(ai),Gl=rt+Nr.length;al(ia,Gl),window.requestAnimationFrame(()=>{Be.selectionStart=Gl,Be.selectionEnd=Gl});return}if(d.key!=="Tab")return;d.preventDefault();const b=d.currentTarget,S=b.selectionStart,C=b.selectionEnd,z="    ";if(d.shiftKey){const Be=ae.lastIndexOf(`
`,S-1)+1,rt=S===C?Zo(ae,S):C,ai=ae.slice(Be,rt);let Ft=0,ul=0;const aa=ai.replace(/(^|\n)( {1,4}|\t)/g,(Nr,ia,Gl,_s)=>{const gs=Gl.length;return Be+_s<S&&(Ft+=gs),ul+=gs,ia});if(ul===0)return;const kr=ae.slice(0,Be)+aa+ae.slice(rt);al(kr,Math.max(Be,S-Ft)),window.requestAnimationFrame(()=>{b.selectionStart=Math.max(Be,S-Ft),b.selectionEnd=S===C?b.selectionStart:Math.max(b.selectionStart,C-ul)});return}if(S===C){const Be=ae.slice(0,S)+z+ae.slice(C);al(Be,S+z.length),window.requestAnimationFrame(()=>{b.selectionStart=S+z.length,b.selectionEnd=S+z.length});return}const te=ae.lastIndexOf(`
`,S-1)+1,Ve=ae.slice(te,C).replace(/^/gm,z),on=Ve.split(`
`).length,lt=ae.slice(0,te)+Ve+ae.slice(C);al(lt,S+z.length),window.requestAnimationFrame(()=>{b.selectionStart=S+z.length,b.selectionEnd=C+on*z.length})}function Wo(d){if(fn){if(d.key==="ArrowDown"){d.preventDefault(),Hn(b=>b&&{...b,selected:(b.selected+1)%b.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Hn(b=>b&&{...b,selected:(b.selected-1+b.items.length)%b.items.length});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),ra();return}if(d.key==="Escape"){d.preventDefault(),Hn(null);return}}if(d.key==="Tab"){d.preventDefault();const b=d.currentTarget,S=b.selectionStart,C=b.selectionEnd,z="    ",te=_t.slice(0,S)+z+_t.slice(C),be=S+z.length;Jt(te),Jn(null),Hn(null),window.requestAnimationFrame(()=>{b.selectionStart=be,b.selectionEnd=be});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===_t.length&&d.currentTarget.selectionEnd===_t.length)||Ir.length===0)return;d.preventDefault();const S=d.key==="ArrowUp"?yn===null?Ir.length-1:Math.max(0,yn-1):yn===null||yn+1>=Ir.length?null:yn+1;Jn(S);const C=S===null?"":Ir[S]??"";Jt(C),Hn(null),window.requestAnimationFrame(()=>{const z=an.current;z&&(z.selectionStart=C.length,z.selectionEnd=C.length)});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),li())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(Rf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Fr?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:ei,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(Yn,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=Ia.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(Yn,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>nn(),disabled:!x&&!he||G,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(Yn,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:Jr.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Jr.map(d=>{if(d.kind==="separator"){const z=d.id==="pico-files"&&!x&&!he;return f.jsxs(U.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:d.label})}),z&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const b=he&&Yr(d),S=Yt[mt(d.source,d.path)],C=S!==void 0&&S!==sy(d,Ne,Dl);return f.jsxs("div",{className:`ide-file-row ${W===d.path&&ge===d.source?"active":""} ${b?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>Vo(d),disabled:b,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:d.name}),f.jsxs("small",{title:C?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.source==="pico"&&d.versions.length>0&&f.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),f.jsx("i",{className:`ide-file-dirty-dot ${C?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>ta(d),disabled:d.type!=="file"||G||b,"aria-label":`Filvalg for ${d.name}`,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(Yn,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&f.jsx("span",{className:`ide-usb-status ${ll.supported?"available":"unavailable"}`,title:ll.message,"data-tooltip":ll.message,role:"img","aria-label":ll.message,tabIndex:0,children:"!"})]}),he&&f.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Ll:Qa,disabled:!ll.supported||j,children:j?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:us,disabled:he||G,children:"Download"})]}),he&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(Yn,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:us,disabled:G,children:"Startprogrammer og biblioteker"})]}),!he&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>gn(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[ze(W),f.jsxs("small",{children:[Co," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Xo,disabled:G,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ko,disabled:!Kr&&!(!yt&&Rn)&&(!x||!bn),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:na,disabled:G||!W.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>vr(),disabled:G||!W.trim(),children:"Slet"})]})]}),as(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Xr.top}px)`},children:Array.from({length:zl},(d,b)=>f.jsx("span",{children:b+1},b))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Xr.left}px, ${-Xr.top}px)`},children:ay(ae,Oo)}),f.jsx("textarea",{ref:et,className:"ide-editor",value:ae,onChange:d=>al(d.target.value,d.target.selectionStart),onKeyDown:Er,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||wr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{wr(d.currentTarget.value,d.currentTarget.selectionStart),ps(d.currentTarget)},onSelect:d=>ps(d.currentTarget),onScroll:d=>{jl({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Ie&&wr(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:G||!!se,"aria-busy":G||!!se,spellCheck:!1}),Ie&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Ie.position.left,top:Ie.position.top},children:Ie.items.map((d,b)=>f.jsx("button",{className:b===Ie.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),ri(d)},role:"option","aria-selected":b===Ie.selected,children:d.label},d.label))}),se&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",ze(se),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${el?"":"active"}`,type:"button",onClick:()=>Ji(d=>!d),"aria-label":el?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!el,title:el?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${qt?"active":""}`,type:"button",onClick:()=>hr(d=>!d),"aria-pressed":qt,title:qt?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Fo,disabled:I.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:rn,onScroll:Io,onClick:()=>{var d;return(d=an.current)==null?void 0:d.focus()},children:[I.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):I.map((d,b)=>f.jsx("div",{className:`term-line term-${d.level}`,children:d.technical&&!el?d.technical:d.text},`${b}-${d.text}`)),f.jsxs("form",{className:`ide-terminal-command ${tt&&!Mn?"locked":""}`,onSubmit:d=>{d.preventDefault(),li()},children:[f.jsx("span",{"aria-hidden":"true",children:">>>"}),f.jsx("textarea",{ref:an,value:_t,onChange:d=>{Jt(d.target.value),Jn(null),la(d.target.value,d.target.selectionStart)},onKeyDown:Wo,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||la(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>la(d.currentTarget.value,d.currentTarget.selectionStart),disabled:ls,placeholder:rs,"aria-label":"MicroPython-terminalkommando",title:rs,rows:Math.max(1,_t.split(`
`).length)})]}),fn&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:fn.position.left,top:fn.position.top},children:fn.items.map((d,b)=>f.jsx("button",{className:b===fn.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),ra(d)},role:"option","aria-selected":b===fn.selected,children:d.label},d.label))})]})]})]}),f.jsx("input",{ref:Ia,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var b;Bo((b=d.target.files)==null?void 0:b[0]),d.currentTarget.value=""}}),A&&f.jsx(wn,{title:"Gem fil",onClose:()=>K(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:yr,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Hl(),disabled:!x&&!he||G,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:os,children:"Download til computer"})]})}),He&&f.jsx(wn,{title:"Startprogrammer og biblioteker",onClose:()=>Ce(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:x||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[hs("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(d=>d.kind==="program")),hs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(d=>d.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(x||he)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Yo,disabled:G,children:"Installer valgte på Pico"}),f.jsx("button",{className:x||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:ds,disabled:G,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:qo,disabled:G,children:"Download valgte"})]})]})}),Ml&&f.jsx(wn,{title:"main.py er gemt",onClose:()=>pt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void Kt("control"),disabled:G,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Kt("ide"),disabled:G,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>pt(!1),disabled:G,children:"Senere"})]})}),_e&&f.jsx(wn,{title:"Installer MicroPython",onClose:()=>gn(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:kn,onChange:d=>Ot(d.target.value),children:ts.map(d=>f.jsx("option",{value:d,children:d},d))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(zt==null?void 0:zt.version)??zn,onChange:d=>Tl(d.target.value),children:_r.map(d=>f.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),zt&&f.jsx("a",{className:"btn btn-primary btn-block",href:zt.url,download:zt.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),O&&f.jsx(wn,{title:"Ny Python-fil",onClose:()=>Q(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),ni()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:ce,onChange:d=>Se(d.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",ns,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Mp(ce),children:"Opret"})]})}),L&&f.jsx(wn,{title:ze(L.path),onClose:()=>Z(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Ho()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:Ee,onChange:d=>E(d.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Ki(L.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Ki(L.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!sf(Ee,Ki(L.path))||sf(Ee,Ki(L.path))===L.path||G,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>vr(L),disabled:G,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),L.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):L.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:L.versions.map(d=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:ze(d.path)}),f.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void cs(d),disabled:G,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Lo(d),disabled:G,children:"Slet"})]},d.path))})]})]})})]})}function Mp(o){var c;const i=(c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function W0(o){const i=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const s=r_(c[1]);return s?`/${s}.${c[2].toLowerCase()}`:""}function sf(o,i="py"){const c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const s=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const u=r_(s[1]),h=i.replace(/^\./,"").toLowerCase(),p=(s[2]??(h||"py")).toLowerCase();return u?`/${u}.${p}`:""}function J0(o){return ze(o).replace(/\.(py|txt|json|csv)$/i,"")}function r_(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Ki(o){var s;const i=ze(o).match(/\.([a-z0-9]+)$/i),c=(s=i==null?void 0:i[1])==null?void 0:s.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function Ba(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function jp(){return La.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Ap(o){const i={};return o.forEach(c=>{i[c.id]=!1}),i}function ze(o){return o.split("/").filter(Boolean).pop()??o}function xo(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function ey(o){return o instanceof DOMException&&o.name==="AbortError"}function ny(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function Yr(o){return ty(o)}function ty(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Dp=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.reset()",insert:"machine.reset()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"import time",insert:"import time"},{label:"import machine",insert:"import machine"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Op(o,i){const s=o.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function of(o,i){const c=o.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function ly(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Cp(o,i){if(!o)return null;const c=o.closest(".ide-terminal")??o.parentElement;if(!c)return null;const s=window.getComputedStyle(o),u=document.createElement("div"),h=document.createElement("span"),p=c.getBoundingClientRect(),g=o.getBoundingClientRect();u.style.position="absolute",u.style.visibility="hidden",u.style.pointerEvents="none",u.style.whiteSpace="pre-wrap",u.style.overflowWrap="break-word",u.style.boxSizing=s.boxSizing,u.style.width=`${o.clientWidth}px`,u.style.padding=s.padding,u.style.border=s.border,u.style.font=s.font,u.style.lineHeight=s.lineHeight,u.style.letterSpacing=s.letterSpacing,u.style.tabSize=s.tabSize,u.style.left=`${g.left-p.left-o.scrollLeft}px`,u.style.top=`${g.top-p.top-o.scrollTop}px`,u.textContent=o.value.slice(0,i),h.textContent=o.value.slice(i,i+1)||" ",u.appendChild(h),c.appendChild(u);const v=h.getBoundingClientRect();u.remove();const y=ry(v.left-p.left,8,Math.max(8,c.clientWidth-296)),x=v.bottom-p.top+6,N=x+218>c.clientHeight?Math.max(8,v.top-p.top-218):x;return{left:y,top:N}}function ry(o,i,c){return Math.max(i,Math.min(c,o))}function ay(o,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,u=[];return o.split(/(\r?\n)/).forEach((h,p)=>{if(h===`
`||h===`\r
`){u.push(f.jsx("br",{},`br-${p}`));return}let g=0;[...h.matchAll(s)].forEach((y,x)=>{const N=y.index??0;N>g&&u.push(...zp(h.slice(g,N),c,`${p}-${x}-plain`,i));const j=y[0],F=j.startsWith("#")?"tok-comment":j.startsWith('"')||j.startsWith("'")?"tok-string":/^\d/.test(j)?"tok-number":"tok-builtin";u.push(...ko(j,i,`${p}-${x}-token`,F)),g=N+j.length}),g<h.length&&u.push(...zp(h.slice(g),c,`${p}-tail`,i))}),u.length?u:" "}function zp(o,i,c,s=""){const u=[];let h=0;const p=new RegExp(i.source,"g");return[...o.matchAll(p)].forEach((g,v)=>{const y=g.index??0;y>h&&u.push(...ko(o.slice(h,y),s,`${c}-${v}-plain`)),u.push(...ko(g[0],s,`${c}-${v}-keyword`,"tok-keyword")),h=y+g[0].length}),h<o.length&&u.push(...ko(o.slice(h),s,`${c}-plain-end`)),u}function ko(o,i,c,s=""){if(!i)return[f.jsx("span",{className:s||void 0,children:o},c)];const u=[],h=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),p=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let g=0;return[...o.matchAll(p)].forEach((v,y)=>{const x=v.index??0;x>g&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(g,x)},`${c}-${y}-before`)),u.push(f.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${c}-${y}-match`)),g=x+v[0].length}),g<o.length&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(g)},`${c}-after`)),u.length?u:[f.jsx("span",{className:s||void 0,children:o},c)]}function cf(o){return o.length>0?o:[{path:bf,content:l_,uploaded:!1,updatedAt:Date.now()}]}function iy(o,i,c,s){const u=o.filter(h=>h.path!==i);return[{path:i,content:c,uploaded:s,updatedAt:Date.now()},...u].sort((h,p)=>p.updatedAt-h.updatedAt)}function sy(o,i,c){var s;return o.source==="pico"?c[o.path]:(s=i.find(u=>u.path===o.path))==null?void 0:s.content}function No(o){const i=o.replace(/\\/g,"/"),c=i.lastIndexOf("/"),s=c>=0?i.slice(0,c+1):"",h=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${s}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Ua(o){return No(o)!==null}function yf(o){const i=new Map;for(const c of o){const s=No(c.path);if(!s)continue;const u=i.get(s.originalPath)??[];u.push(c),i.set(s.originalPath,u)}for(const c of i.values())c.sort((s,u)=>{var h,p;return(((h=No(u.path))==null?void 0:h.index)??0)-(((p=No(s.path))==null?void 0:p.index)??0)});return i}function oy(o,i){const c=o.replace(/\\/g,"/"),s=c.lastIndexOf("/"),u=s>=0?c.slice(0,s+1):"/",h=s>=0?c.slice(s+1):c.replace(/^\/+/,""),p=h.lastIndexOf("."),g=p>0?h.slice(0,p):h,v=p>0?h.slice(p):"",y=new Set(i.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const N=`${u}${g}_backup${x}${v}`;if(!y.has(N.toLowerCase()))return N}return`${u}${g}_backup${Date.now()}${v}`}function cy(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function uy(o,i,c,s){const u=new Map,h=yf(o);for(const x of o)Ua(x.path)||u.set(mt("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:h.get(x.path)??[]});for(const x of i)u.set(mt("local",x.path),{kind:"file",name:ze(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const x of Object.keys(c)){const[N,...j]=x.split(":"),F=j.join(":");if(N!=="local"&&N!=="pico"||!F)continue;const I=u.get(x);if(I){u.set(x,I);continue}u.set(x,{kind:"file",name:ze(F),path:F,type:"file",source:N,uploaded:!1,versions:N==="pico"?h.get(F)??[]:[]})}const p=[...u.values()].sort(dy),g=p.filter(x=>x.source==="pico"),v=p.filter(x=>x.source==="local"),y=[];return g.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...g):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const fy=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function dy(o,i){const c=Bp(o.path),s=Bp(i.path);return c===null&&s===null?o.name.localeCompare(i.name,"da"):c===null?-1:s===null?1:c-s}function Bp(o){var c;const i=(c=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?fy.get(i)??null:null}function Lp(o,i,c){if(!(i in o))return o;const s={...o,[c]:o[i]};return delete s[i],s}function my(o,i,c,s){const u=`${i}:${c}`;if(!(u in o))return o;const h={...o,[`${i}:${s}`]:o[u]};return delete h[u],h}function hy({open:o}){const i=J(re=>re.screen),c=J(re=>re.active),s=J(re=>re.toggleSideMenu),u=J(re=>re.toggleDebugger),h=J(re=>re.setEditMode),p=J(re=>re.openMenuPage),g=J(re=>re.disconnect),v=J(re=>re.openPicoIde),y=J(re=>re.closePicoIde),x=J(re=>re.picoIdeOrigin),N=i==="dashboard",j=i==="control",F=i==="ide",I=j&&!!(c!=null&&c.canEdit),le=!j||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),G=x==="control",$=x==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${i} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[N&&f.jsxs(f.Fragment,{children:[f.jsx(dt,{label:"Bruger",icon:"user",onClick:()=>p("user-settings")}),f.jsx(dt,{label:"Indstillinger",icon:"settings",onClick:()=>p("application-settings")}),f.jsx(dt,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!le}),f.jsx(uf,{}),f.jsx(dt,{label:"Om appen",icon:"info",onClick:()=>p("application-about")}),f.jsx(dt,{label:"Hjælp",icon:"help",onClick:()=>p("application-help")}),f.jsx(dt,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),j&&f.jsxs(f.Fragment,{children:[f.jsx(dt,{label:"Indstillinger",icon:"settings",onClick:()=>p("device-settings")}),f.jsx(dt,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!I}),f.jsx(dt,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!le}),f.jsx(uf,{}),f.jsx(dt,{label:"Hjælp",icon:"help",onClick:()=>p("device-help")}),f.jsx(dt,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),F&&f.jsxs(f.Fragment,{children:[f.jsx(dt,{label:$,icon:"back",onClick:y}),f.jsx(uf,{})]}),f.jsx("div",{className:"spacer"}),(j||F&&G)&&f.jsx(dt,{label:"Forlad",icon:"exit",onClick:()=>g()})]})]})}function dt({label:o,icon:i,disabled:c,onClick:s}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:c,"aria-label":o,children:[f.jsx(Yn,{name:i}),f.jsx("span",{children:o})]})}function uf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:jb,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const py={error:"term-error",success:"term-success",warning:"term-warning",info:""},Up={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function _y(){const o=new Date,i=c=>String(c).padStart(2,"0");return`${i(o.getDate())}-${i(o.getMonth()+1)}-${o.getFullYear()}-${i(o.getHours())}-${i(o.getMinutes())}`}function gy(){const o=J(u=>u.logs),i=J(u=>u.clearLogs),c=J(u=>u.toggleDebugger);function s(){const u=[...o].reverse().map(v=>`${v.time} ${Up[v.level]}${v.message}`).join(`
`),h=new Blob([u],{type:"text/plain"}),p=URL.createObjectURL(h),g=document.createElement("a");g.href=p,g.download=`${_y()}.txt`,g.click(),URL.revokeObjectURL(p)}return f.jsxs(wn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((u,h)=>f.jsxs("div",{className:`term-line ${py[u.level]}`,children:[u.time," ",Up[u.level],u.message]},`${u.time}-${h}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const a_=4,Dt=a_*4+17,Hp=80,by=20,yy=30660;function vy(o){const i=new TextEncoder().encode(o);if(i.length>76)throw new Error("QR-koden er for lang.");const c=Gp(!1),s=Gp(!1);xy(c,s);const u=wy(i),h=Ny(u,by);return Ey(c,s,[...u,...h]),ky(c,s),c}function Gp(o){return Array.from({length:Dt},()=>Array.from({length:Dt},()=>o))}function jt(o,i,c,s,u,h=!0){o[s][c]=u,h&&(i[s][c]=!0)}function xy(o,i){ff(o,i,0,0),ff(o,i,Dt-7,0),ff(o,i,0,Dt-7);for(let c=0;c<Dt;c+=1)i[6][c]||jt(o,i,c,6,c%2===0),i[c][6]||jt(o,i,6,c,c%2===0);Sy(o,i,26,26),jt(o,i,8,a_*4+9,!0)}function ff(o,i,c,s){for(let u=-1;u<=7;u+=1)for(let h=-1;h<=7;h+=1){const p=c+h,g=s+u;if(p<0||g<0||p>=Dt||g>=Dt)continue;const v=h>=0&&h<=6&&u>=0&&u<=6&&(h===0||h===6||u===0||u===6||h>=2&&h<=4&&u>=2&&u<=4);jt(o,i,p,g,v)}}function Sy(o,i,c,s){for(let u=-2;u<=2;u+=1)for(let h=-2;h<=2;h+=1)i[s+u][c+h]||jt(o,i,c+h,s+u,Math.max(Math.abs(h),Math.abs(u))!==1)}function wy(o){const i=[];So(i,4,4),So(i,o.length,8);for(const s of o)So(i,s,8);for(So(i,0,Math.min(4,Hp*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let s=0;s<i.length;s+=8)c.push(i.slice(s,s+8).reduce((u,h)=>u<<1|h,0));for(let s=236;c.length<Hp;s=s===236?17:236)c.push(s);return c}function So(o,i,c){for(let s=c-1;s>=0;s-=1)o.push(i>>>s&1)}function Ey(o,i,c){const s=c.flatMap(p=>Array.from({length:8},(g,v)=>p>>>7-v&1));let u=0,h=!0;for(let p=Dt-1;p>=1;p-=2){p===6&&(p-=1);for(let g=0;g<Dt;g+=1){const v=h?Dt-1-g:g;for(let y=0;y<2;y+=1){const x=p-y;if(i[v][x])continue;const N=u<s.length?s[u]===1:!1;o[v][x]=N!==((x+v)%2===0),u+=1}}h=!h}}function ky(o,i){const c=s=>(yy>>>s&1)!==0;for(let s=0;s<=5;s+=1)jt(o,i,8,s,c(s));jt(o,i,8,7,c(6)),jt(o,i,8,8,c(7)),jt(o,i,7,8,c(8));for(let s=9;s<15;s+=1)jt(o,i,14-s,8,c(s));for(let s=0;s<8;s+=1)jt(o,i,Dt-1-s,8,c(s));for(let s=8;s<15;s+=1)jt(o,i,8,Dt-15+s,c(s))}const Pi=new Array(512),vf=new Array(256);let Vp=!1;function i_(){if(Vp)return;let o=1;for(let i=0;i<255;i+=1)Pi[i]=o,vf[o]=i,o<<=1,o&256&&(o^=285);for(let i=255;i<512;i+=1)Pi[i]=Pi[i-255];Vp=!0}function s_(o,i){return o===0||i===0?0:Pi[vf[o]+vf[i]]}function Ny(o,i){i_();const c=Ry(i),s=Array.from({length:i},()=>0);for(const u of o){const h=u^s.shift();s.push(0);for(let p=0;p<i;p+=1)s[p]^=s_(c[p],h)}return s}function Ry(o){i_();let i=[1];for(let c=0;c<o;c+=1){const s=Array.from({length:i.length+1},()=>0);for(let u=0;u<i.length;u+=1)s[u]^=s_(i[u],Pi[c]),s[u+1]^=i[u];i=s}return i.slice(1)}function Ty(){const o=J(_e=>_e.menuPage),i=J(_e=>_e.closeMenuPage),c=J(_e=>_e.user),s=J(_e=>_e.active),u=J(_e=>_e.layout),h=J(_e=>_e.sliderValues),p=J(_e=>_e.savedDevices),g=J(_e=>_e.updateUsername),v=J(_e=>_e.createOwnerPairingCode),y=J(_e=>_e.applyOwnerPairingCode),x=J(_e=>_e.clearSavedDevices),N=J(_e=>_e.resetApplicationData),j=J(_e=>_e.saveDeviceSettings),F=J(_e=>_e.setEditMode),I=J(_e=>_e.askConfirm),[le,G]=U.useState((c==null?void 0:c.username)??""),[$,re]=U.useState(!1),[ue,se]=U.useState(""),[de,Ne]=U.useState(""),[ee,W]=U.useState(!1),[xe,ge]=U.useState(""),ve=U.useRef(null),[ae,Pe]=U.useState((s==null?void 0:s.iconID)??0),[Ae,Qe]=U.useState(!1),[O,Q]=U.useState((s==null?void 0:s.canOthersConnect)??!1),[ce,Se]=U.useState((s==null?void 0:s.canOthersEdit)??!1),[Ee,E]=U.useState((s==null?void 0:s.canOthersEditCode)??!1),[L,Z]=U.useState((s==null?void 0:s.gridCols)??11),[A,K]=U.useState((s==null?void 0:s.gridRows)??31),[P,X]=U.useState(!1);U.useEffect(()=>{o==="user-settings"&&(G((c==null?void 0:c.username)??""),Ne(""),ge(""),W(!1))},[o,c==null?void 0:c.username]),U.useEffect(()=>{o==="device-settings"&&s&&(Pe(s.iconID),Q(s.canOthersConnect),Se(s.canOthersEdit),E(s.canOthersEditCode),Z(s.gridCols),K(s.gridRows))},[s,o]),U.useEffect(()=>{if(!ee)return;let _e=!1,gn=null,En=0;async function De(){var Ot;const kn=window.BarcodeDetector;if(!kn||!((Ot=navigator.mediaDevices)!=null&&Ot.getUserMedia)){ge("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),W(!1);return}try{gn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const zn=ve.current;if(!zn)return;zn.srcObject=gn,await zn.play();const Tl=new kn({formats:["qr_code"]}),Ml=async()=>{var pt;if(!_e){try{const jl=(pt=(await Tl.detect(zn)).find(bn=>bn.rawValue))==null?void 0:pt.rawValue;if(jl){Ne(jl),y(jl)&&re(!1),W(!1);return}}catch{}En=window.requestAnimationFrame(Ml)}};En=window.requestAnimationFrame(Ml)}catch{ge("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),W(!1)}}return De(),()=>{_e=!0,En&&window.cancelAnimationFrame(En),gn==null||gn.getTracks().forEach(kn=>kn.stop())}},[y,ee]);const He=(_e,gn)=>Number.isFinite(_e)?Math.max(Ha,Math.min(Ga,Math.round(_e))):gn,Ce=(c==null?void 0:c.username)??"",Ln=le.trim(),Vt=Ln.length>0&&Ln!==Ce;if(!o)return null;if(o==="user-settings"){let _e=function(){const De=v();De&&(se(De),Ne(""),re(!0))},gn=function(){y(de)&&(Ne(""),re(!1))};async function En(){var De;try{await((De=navigator.clipboard)==null?void 0:De.writeText(ue))}catch{}}return f.jsxs(f.Fragment,{children:[f.jsx(wn,{title:"Brugerindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Mt,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${le.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:le,onChange:De=>G(De.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>g(le),disabled:!Vt,children:"Gem nyt brugernavn"}),f.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:_e,children:"Ejerkode"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>I({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{N()}}),children:"Slet brugerdata"})]})}),$&&f.jsx(wn,{title:"Del ejerkode",onClose:()=>re(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Ay,{code:ue}),f.jsx("code",{className:"owner-code-text",children:ue}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void En(),children:"Kopiér ejerkode"}),f.jsxs("div",{className:`field ${de.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-owner-code",value:de,onChange:De=>Ne(De.target.value),autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:gn,disabled:!de.trim(),children:"Brug ejerkode i denne browser"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>W(De=>!De),children:ee?"Stop scanning":"Scan QR-kode"}),xe&&f.jsx("div",{className:"notice",children:xe}),ee&&f.jsx("video",{className:"owner-code-video",ref:ve,muted:!0,playsInline:!0})]})})]})}if(o==="application-settings")return f.jsx(wn,{title:"Applikationsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Mt,{label:"Version",value:Qi}),f.jsx(Mt,{label:"Bluetooth",value:Ao()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(Mt,{label:"Gemte enheder",value:String(p.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>I({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:x}),disabled:p.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(wn,{title:"Om appen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(Mt,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(Mt,{label:"Version",value:Qi})]})});if(o==="application-help")return f.jsx(wn,{title:"Hjælp til applikationen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const _e=u.filter(De=>De.type==="slider"),gn=!!(s!=null&&s.isOwnedByMe);async function En(De=!1){if(!s||!gn)return;const kn=He(L,s.gridCols),Ot=He(A,s.gridRows),zn=My(u,kn,Ot);if(zn&&!De){I({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${zn.requiredCols} kolonner og ${zn.requiredRows} rækker. Det nye gitter er ${kn} × ${Ot}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{En(!0)}});return}X(!0),await j(ae,O,O&&ce,O&&Ee,kn,Ot),Z(kn),K(Ot),X(!1)}return f.jsx(wn,{title:"Enhedsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Mt,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),f.jsx(Mt,{label:"Ejer",value:Dy(s)}),gn?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Qe(!0),children:f.jsx("img",{src:$a(ae),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:O?"":"active",onClick:()=>Q(!1),children:"Privat"}),f.jsx("button",{type:"button",className:O?"active":"",onClick:()=>Q(!0),children:"Offentlig"})]}),O&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:ce?"":"active",onClick:()=>Se(!1),children:"Nej"}),f.jsx("button",{type:"button",className:ce?"active":"",onClick:()=>Se(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>E(!1),children:"Nej"}),f.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Ha,max:Ga,value:Number.isNaN(L)?"":L,onChange:De=>Z(parseInt(De.target.value,10)),onBlur:()=>Z(He(L,(s==null?void 0:s.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Ha,max:Ga,value:Number.isNaN(A)?"":A,onChange:De=>K(parseInt(De.target.value,10)),onBlur:()=>K(He(A,(s==null?void 0:s.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>En(),disabled:P,children:P?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Mt,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),f.jsx(Mt,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(Mt,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),f.jsx(Mt,{label:"Kontroller",value:String(u.length)}),_e.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),_e.map(De=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:De.name}),f.jsxs("span",{children:[De.sliderMin??0," til ",De.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",jy(De.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",h[De.name]??"Ikke brugt"]})]},De.name))]}),Ae&&f.jsx(Pp,{selected:ae,onSelect:Pe,onClose:()=>Qe(!1)})]})})}return f.jsx(wn,{title:"Hjælp til enheden",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>F(!0),children:"Rediger layout"})]})})}function My(o,i,c){let s=0,u=0;for(const h of o)Va(h)&&(s=Math.max(s,Math.ceil((h.centerX2+h.spanX)/2)+1),u=Math.max(u,Math.ceil((h.centerY2+h.spanY)/2)+1));return i<s||c<u?{requiredCols:s,requiredRows:u}:null}function jy(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function Ay({code:o}){const i=U.useMemo(()=>vy(o),[o]),c=i.length;return f.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[f.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((s,u)=>s.map((h,p)=>h?f.jsx("rect",{x:p+4,y:u+4,width:"1",height:"1",fill:"currentColor"},`${p}-${u}`):null))]})}function Dy(o){var i;return o?o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function Mt({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function Oy(){const o=J(s=>s.confirmDialog),i=J(s=>s.closeConfirm);if(!o)return null;function c(){o==null||o.onConfirm(),i()}return f.jsx(wn,{title:o.title,onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:o.confirmLabel??"Fortsæt"})]})]})})}function Cy(){const o=J(s=>s.connectionLost),i=J(s=>s.reconnectLostDevice),c=J(s=>s.dismissConnectionLost);return o?f.jsx(wn,{title:"Forbindelse afbrudt",onClose:c,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function zy(){const o=J(c=>c.toast),i=J(c=>c.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:i,children:o.message},o.id):null}function By(){const o=J(g=>g.screen),i=J(g=>g.splashTarget),c=J(g=>g.init),s=J(g=>g.sideMenuOpen),u=J(g=>g.debuggerOpen),[h,p]=U.useState(!1);return U.useEffect(()=>{c()},[c]),U.useEffect(()=>{if(s){p(!0);return}const g=setTimeout(()=>p(!1),140);return()=>clearTimeout(g)},[s]),f.jsxs("div",{className:"app",children:[o==="splash"&&i==="intro"&&f.jsx(cp,{}),o==="splash"&&i==="dashboard"&&f.jsx(up,{}),o==="splash"&&f.jsx(Cb,{}),o==="intro"&&f.jsx(cp,{}),o==="dashboard"&&f.jsx(up,{}),o==="connection"&&f.jsx(Hb,{}),o==="create"&&f.jsx(Gb,{}),o==="control"&&f.jsx(i0,{}),o==="ide"&&f.jsx(Z0,{}),h&&f.jsx(hy,{open:s}),f.jsx(Ty,{}),f.jsx(Cy,{}),f.jsx(Oy,{}),u&&f.jsx(gy,{}),f.jsx(zy,{})]})}function Ly(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(i=>{console.warn("Service worker registration failed:",i)})})}Ly();Xg.createRoot(document.getElementById("root")).render(f.jsx(Ii.StrictMode,{children:f.jsx(By,{})}));
